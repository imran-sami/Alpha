/* ALPHA Android bridge. Does nothing in a normal browser; active only inside the Capacitor APK. */
(function () {
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var P = C.Plugins || {};
  window.AlphaNative = {};

  /* 1) Google sign-in: native account picker -> idToken -> web Firebase SDK (index.html uses it) */
  if (P.FirebaseAuthentication) {
    window.AlphaNative.googleIdToken = async function () {
      var r = await P.FirebaseAuthentication.signInWithGoogle({ skipNativeAuth: true });
      var t = r && r.credential && r.credential.idToken;
      if (!t) throw new Error('Google sign-in returned no token');
      return t;
    };
  }

  /* 2) Downloads (backup, "download file"): WebView ignores <a download> on blob: URLs.
        Save to cache, then open the Android share/save sheet. */
  function b64(blob) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(String(fr.result).split(',')[1] || ''); };
      fr.onerror = rej; fr.readAsDataURL(blob);
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[download]');
    if (!a || !/^blob:/.test(a.href) || !P.Filesystem || !P.Share) return;
    e.preventDefault(); e.stopPropagation();
    var name = (a.getAttribute('download') || 'file').replace(/[\\/:*?"<>|]/g, '_');
    fetch(a.href).then(function (r) { return r.blob(); }).then(b64).then(function (data) {
      return P.Filesystem.writeFile({ path: 'dl/' + name, data: data, directory: 'CACHE', recursive: true });
    }).then(function (w) {
      return P.Share.share({ title: name, url: w.uri, dialogTitle: 'Save / share ' + name });
    }).catch(function (err) { if (err && !/cancel/i.test(String(err.message || err))) alert('Could not save file: ' + (err.message || err)); });
  }, true);

  /* 3) Task alarms: the JS timer stops when the app is in background, so mirror tasks
        into native daily notifications (LocalNotifications). */
  var LN = P.LocalNotifications, last = '';
  function sync() {
    if (!LN) return;
    var tasks = [];
    try { tasks = JSON.parse(localStorage.getItem('alpha.tasks') || '[]') || []; } catch (e) {}
    var list = tasks.filter(function (t) { return t && !t.done && /^\d{2}:\d{2}$/.test(t.at || ''); });
    var sig = JSON.stringify(list.map(function (t) { return [t.id, t.name, t.at]; }));
    if (sig === last) return; last = sig;
    LN.requestPermissions().then(function (p) {
      if (p.display !== 'granted') return;
      return LN.getPending().then(function (r) {
        var old = (r.notifications || []).filter(function (n) { return n.id >= 100000 && n.id < 200000; });
        return old.length ? LN.cancel({ notifications: old.map(function (n) { return { id: n.id }; }) }) : null;
      }).then(function () {
        if (!list.length) return;
        return LN.schedule({ notifications: list.map(function (t) {
          return { id: 100000 + (Number(t.id) % 99999), title: '⏰ ' + t.name, body: 'Task alarm',
                   schedule: { on: { hour: +t.at.slice(0, 2), minute: +t.at.slice(3) }, allowWhileIdle: true } };
        }) });
      });
    }).catch(function (e) { console.warn('alarm sync', e); });
  }
  setInterval(sync, 10000); setTimeout(sync, 2000);
  document.addEventListener('visibilitychange', sync);

  /* 4) Status bar + hardware back button */
  try { if (P.StatusBar) { P.StatusBar.setStyle({ style: 'DARK' }); P.StatusBar.setBackgroundColor({ color: '#03061a' }); } } catch (e) {}
  try { if (P.App) P.App.addListener('backButton', function (ev) { if (ev.canGoBack) history.back(); else P.App.minimizeApp(); }); } catch (e) {}
})();
