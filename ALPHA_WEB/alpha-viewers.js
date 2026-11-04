/* ===================================================================================================================
   ALPHA viewers, part 1: shared UI kit (layers, sheets, dialogs, menus, toast, file actions) + Google-Drive-style PDF viewer.
   Part 2 (alpha-editor.js)  = Notepad++-style text / code editor with "new file" + save.
   Part 3 (alpha-slides.js)  = Google-Slides-style presentation viewer / editor with "new presentation".
   Everything is decrypted from / saved back to the encrypted vault through the app's own helpers (de, en, svf, rows ...).
   =================================================================================================================== */
(function () {
  'use strict';
  if (window.AV) return;
  var D = document;
  var AV = window.AV = { stack: [], version: 1 };
  var Q = function (s, r) { return (r || D).querySelector(s); };
  var QA = function (s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); };
  AV.Q = Q; AV.QA = QA;
  var esc = AV.esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var sleep = AV.sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var clamp = AV.clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ------------------------------------------------ icons (Material, 24px) ------------------------------------------------ */
  var IC = {
    back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    close: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    more: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    share: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z',
    search: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    del: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    star: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    starO: 'M22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
    add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    save: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
    undo: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
    redo: 'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z',
    copy: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    cut: 'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z',
    paste: 'M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z',
    zin: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z',
    zout: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z',
    wrap: 'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
    file: 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
    folder: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z',
    play: 'M8 5v14l11-7z',
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    check: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    up: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    down: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z',
    chev: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    dl: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    present: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z',
    code: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    palette: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    layout: 'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
    aup: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
    adown: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    text: 'M5 4v3h5.5v12h3V7H19V4z',
    restore: 'M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'
  };
  AV.IC = IC;
  AV.ic = function (n, c) { return '<svg class="avi ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + (IC[n] || '') + '"/></svg>'; };

  /* ------------------------------------------------ styles ------------------------------------------------ */
  AV.css = function (id, text) {
    if (D.getElementById(id)) return;
    var s = D.createElement('style'); s.id = id; s.textContent = text; D.head.appendChild(s);
  };
  AV.css('alpha-av-css', [
    '.av{position:fixed;inset:0;z-index:350;display:flex;flex-direction:column;font-family:Roboto,"Google Sans",system-ui,-apple-system,"Segoe UI",sans-serif;opacity:0;transition:opacity .16s;color:var(--avtx);background:var(--avbg);-webkit-tap-highlight-color:transparent;box-sizing:border-box}',
    '.av.in{opacity:1}.av *{box-sizing:border-box}.av [hidden]{display:none!important}',
    '.av.dk{--avbg:#202124;--avbar:#2d2e31;--avtx:#e8eaed;--avmu:#9aa0a6;--avbd:#3c4043;--avhi:rgba(232,234,237,.1);--avac:#8ab4f8;--avacb:#0b57d0;--avdg:#f28b82}',
    '.av.lt{--avbg:#f1f3f4;--avbar:#fff;--avtx:#202124;--avmu:#5f6368;--avbd:#dadce0;--avhi:rgba(32,33,36,.08);--avac:#1a73e8;--avacb:#1a73e8;--avdg:#d93025}',
    '.avi{width:24px;height:24px;fill:currentColor;flex:none}',
    '.av-bar{flex:none;display:flex;align-items:center;gap:2px;height:calc(56px + var(--sa-top));padding:var(--sa-top) max(4px,var(--sa-right)) 0 max(4px,var(--sa-left));background:var(--avbar);color:var(--avtx);border-bottom:1px solid var(--avbd);z-index:3;transition:transform .2s}',
    '.av-ib{flex:none;width:44px;height:44px;border:0;border-radius:50%;background:none;color:inherit;display:grid;place-items:center;cursor:pointer;padding:0;font:inherit}',
    '.av-ib:hover,.av-ib:active{background:var(--avhi)}.av-ib[disabled]{opacity:.38;pointer-events:none}.av-ib.on{background:var(--avhi);color:var(--avac)}',
    '.av-ttl{flex:1;min-width:0;padding:0 8px}.av-ttl b{display:block;font-size:16px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-ttl span{display:block;font-size:12px;color:var(--avmu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.av-btn{height:40px;padding:0 20px;border:0;border-radius:20px;background:var(--avacb);color:#fff;font:500 14px inherit;cursor:pointer;display:inline-flex;align-items:center;gap:8px}',
    '.av-btn.t{background:none;color:var(--avac)}.av-btn.t:hover{background:var(--avhi)}.av-btn.dg{color:var(--avdg)}',
    '.av-load{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--avmu);font-size:14px;text-align:center;padding:24px}',
    '.av-spin{width:36px;height:36px;border-radius:50%;border:3px solid var(--avbd);border-top-color:var(--avac);animation:avspin .8s linear infinite}@keyframes avspin{to{transform:rotate(360deg)}}',
    /* overlays: sheets, dialogs, menus */
    '.av.av-ovl{background:transparent;z-index:380}',
    '.av-sc{position:absolute;inset:0;background:rgba(0,0,0,.45);opacity:0;transition:opacity .2s}.av.in .av-sc{opacity:1}',
    '.av-sh{position:absolute;left:50%;bottom:0;width:min(100%,560px);max-height:86vh;overflow:auto;background:var(--avbar);color:var(--avtx);border-radius:28px 28px 0 0;padding:8px 0 calc(12px + var(--sa-bottom));transform:translate(-50%,100%);transition:transform .24s cubic-bezier(.2,0,0,1);box-shadow:0 -8px 40px rgba(0,0,0,.35)}',
    '.av.in .av-sh{transform:translate(-50%,0)}',
    '.av-gr{display:block;width:32px;height:4px;border-radius:2px;background:var(--avbd);margin:4px auto 8px}',
    '.av-sht{padding:4px 24px 10px;border-bottom:1px solid var(--avbd);margin-bottom:6px}.av-sht b{display:block;font-size:16px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.av-sht span{font-size:12px;color:var(--avmu)}',
    '.av-si{display:flex;align-items:center;gap:20px;width:100%;min-height:52px;padding:0 24px;border:0;background:none;color:inherit;font:400 15px/1.2 inherit;text-align:left;cursor:pointer}',
    '.av-si:hover,.av-si:active{background:var(--avhi)}.av-si.dg{color:var(--avdg)}.av-si .ck{margin-left:auto;color:var(--avac)}.av-si em{margin-left:auto;font-style:normal;font-size:12px;color:var(--avmu)}',
    '.av-sh hr{border:0;border-top:1px solid var(--avbd);margin:6px 0}',
    '.av-dl{position:absolute;left:50%;top:50%;width:min(calc(100% - 40px),360px);max-height:calc(100% - 40px);overflow:auto;background:var(--avbar);color:var(--avtx);border-radius:28px;padding:24px;transform:translate(-50%,-46%) scale(.96);opacity:0;transition:.2s;box-shadow:0 12px 48px rgba(0,0,0,.45)}',
    '.av.in .av-dl{transform:translate(-50%,-50%) scale(1);opacity:1}.av-dl h2{margin:0 0 12px;font:400 22px/28px inherit}.av-dl p{margin:0 0 12px;color:var(--avmu);font-size:14px;line-height:20px}',
    '.av-in,.av-dl select{width:100%;height:48px;border-radius:8px;border:1px solid var(--avbd);background:transparent;color:inherit;font:400 16px inherit;padding:0 12px;outline:0;margin-bottom:6px}.av-dl select option{background:var(--avbar);color:var(--avtx)}',
    '.av-in:focus,.av-dl select:focus{border-color:var(--avac);box-shadow:0 0 0 1px var(--avac)}.av-er{display:block;min-height:18px;font-size:12px;color:var(--avdg);font-style:normal}',
    '.av-ac{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.av-lb{display:block;font-size:12px;color:var(--avmu);margin:8px 0 4px}',
    '.av-pop{position:absolute;min-width:220px;max-width:min(92vw,320px);max-height:min(70vh,560px);overflow:auto;background:var(--avbar);color:var(--avtx);border-radius:8px;padding:6px 0;box-shadow:0 4px 24px rgba(0,0,0,.4);border:1px solid var(--avbd);transform-origin:top left;transform:scale(.96);opacity:0;transition:.12s}.av.in .av-pop{transform:none;opacity:1}',
    '.av-mi{display:flex;align-items:center;gap:12px;width:100%;min-height:38px;padding:0 14px;border:0;background:none;color:inherit;font:400 14px/1.2 inherit;text-align:left;cursor:pointer;white-space:nowrap}',
    '.av-mi:hover,.av-mi:active{background:var(--avhi)}.av-mi[disabled]{opacity:.4;pointer-events:none}.av-mi .ck{width:18px;height:18px;color:var(--avac);flex:none;visibility:hidden}.av-mi.on .ck{visibility:visible}.av-mi kbd{margin-left:auto;padding-left:20px;font:12px inherit;color:var(--avmu)}',
    '.av-pop hr{border:0;border-top:1px solid var(--avbd);margin:4px 0}',
    '.av-toast{position:fixed;left:50%;bottom:calc(28px + var(--sa-bottom));transform:translate(-50%,16px);z-index:460;max-width:min(calc(100% - 32px),440px);display:flex;align-items:center;gap:12px;min-height:48px;padding:6px 8px 6px 16px;border-radius:8px;background:#2e3135;color:#f1f1f1;font:14px/20px Roboto,system-ui,sans-serif;opacity:0;pointer-events:none;transition:.2s;box-shadow:0 6px 24px rgba(0,0,0,.4)}',
    '.av-toast.in{opacity:1;transform:translate(-50%,0);pointer-events:auto}.av-toast button{border:0;background:none;color:#8ab4f8;font:500 14px inherit;padding:8px 10px;cursor:pointer;border-radius:4px}',
    '.av-ir{display:flex;gap:16px;padding:8px 24px;font-size:14px}.av-ir span{flex:none;width:96px;color:var(--avmu)}.av-ir b{font-weight:400;word-break:break-word;min-width:0}',
    /* PDF viewer */
    '.av-pdf-sc{flex:1;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;touch-action:pan-x pan-y;position:relative;background:var(--avbg)}',
    '.av-pages{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;width:max-content;min-width:100%;padding:10px 8px calc(80px + var(--sa-bottom))}',
    '.av-pg{position:relative;flex:none;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.35);overflow:hidden;color:#000}',
    '.av-pg .av-cv{position:absolute;inset:0;width:100%;height:100%;display:block}',
    '.av-pg .pn{position:absolute;inset:0;display:grid;place-items:center;font-size:13px;color:#9aa0a6}',
    '.av-tl{position:absolute;inset:0;overflow:hidden;line-height:1;text-align:initial;-webkit-user-select:text;user-select:text}',
    '.av-tl span,.av-tl br{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}',
    '.av-tl ::selection{background:rgba(26,115,232,.35)}',
    '.av-tl mark{color:transparent;background:rgba(255,213,0,.55);border-radius:2px;padding:0}.av-tl mark.cur{background:rgba(255,128,0,.7);outline:2px solid #ff8000}',
    '.av-pill{position:absolute;left:12px;bottom:calc(16px + var(--sa-bottom));z-index:4;display:flex;align-items:center;gap:6px;height:36px;padding:0 14px;border:0;border-radius:18px;background:rgba(32,33,36,.88);color:#fff;font:500 13px inherit;cursor:pointer;transition:opacity .2s,transform .2s}',
    '.av-zb{position:absolute;right:12px;bottom:calc(16px + var(--sa-bottom));z-index:4;display:flex;flex-direction:column;gap:8px;transition:opacity .2s}',
    '.av-zb button{width:44px;height:44px;border-radius:50%;border:0;background:rgba(32,33,36,.88);color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.35)}',
    '.av-hide .av-bar{transform:translateY(-110%)}.av-hide .av-find{transform:translateY(-300%)}.av-hide .av-pill,.av-hide .av-zb{opacity:0;pointer-events:none}',
    '.av-find{flex:none;display:flex;align-items:center;gap:4px;padding:6px 8px;background:var(--avbar);border-bottom:1px solid var(--avbd);z-index:2;transition:transform .2s}.av-find[hidden]{display:none}',
    '.av-find input{flex:1;min-width:0;height:40px;border:0;border-radius:20px;background:var(--avhi);color:inherit;padding:0 16px;font:15px inherit;outline:0}.av-find small{color:var(--avmu);font-size:12px;white-space:nowrap;min-width:48px;text-align:center}',
    '@media(min-width:900px){.av-zb{bottom:24px;right:24px}.av-pill{left:24px;bottom:24px}}'
  ].join('\n'));

  /* ------------------------------------------------ helpers ------------------------------------------------ */
  AV.isDark = function () {
    var t = D.documentElement.getAttribute('data-theme');
    if (t) return t !== 'light';
    return !!(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  };
  AV.touch = function () { return !!(window.matchMedia && matchMedia('(pointer:coarse)').matches); };
  AV.fmtSize = function (n) { n = n || 0; return n >= 1e9 ? (n / 1e9).toFixed(2) + ' GB' : n >= 1e6 ? (n / 1e6).toFixed(1) + ' MB' : n >= 1e3 ? Math.round(n / 1e3) + ' KB' : n + ' B'; };
  AV.ext = function (n) { var m = /\.([^.\\/]+)$/.exec(n || ''); return m ? m[1].toLowerCase() : ''; };

  /* layers: every full-screen viewer, sheet, dialog and menu is a layer; the stack drives Android back + Esc */
  AV.layer = function (cls, html, opt) {
    opt = opt || {};
    var el = D.createElement('div');
    el.className = 'av ' + (opt.dark != null ? (opt.dark ? 'dk' : 'lt') : (AV.isDark() ? 'dk' : 'lt')) + ' ' + (cls || '');
    el.innerHTML = html || '';
    D.body.appendChild(el);
    var L = { el: el, closed: false, opt: opt };
    L.close = function () {
      if (L.closed) return; L.closed = true;
      var i = AV.stack.indexOf(L); if (i >= 0) AV.stack.splice(i, 1);
      el.classList.remove('in');
      try { opt.onClose && opt.onClose(L); } catch (e) { console.warn(e); }
      setTimeout(function () { el.remove(); }, 230);
    };
    L.requestClose = function () { if (opt.onRequestClose) opt.onRequestClose(L); else L.close(); };
    AV.stack.push(L);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('in'); }); });
    return L;
  };
  AV.closeAll = function () { AV.stack.slice().reverse().forEach(function (l) { l.close(); }); };
  /* Android hardware back / Esc */
  (function () {
    var prev = window.__gfBack;
    window.__gfBack = function () {
      if (AV.stack.length) { AV.stack[AV.stack.length - 1].requestClose(); return true; }
      return prev ? prev() : false;
    };
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && AV.stack.length) {
        var top = AV.stack[AV.stack.length - 1];
        if (top.opt && top.opt.noEsc) return;
        e.preventDefault(); e.stopPropagation(); top.requestClose();
      }
    }, true);
  })();

  AV.toast = function (msg, act, fn) {
    var old = Q('.av-toast'); if (old) old.remove();
    var e = D.createElement('div'); e.className = 'av-toast'; e.innerHTML = '<span>' + esc(msg) + '</span>' + (act ? '<button>' + esc(act) + '</button>' : '');
    D.body.appendChild(e); requestAnimationFrame(function () { e.classList.add('in'); });
    var k = function () { e.classList.remove('in'); setTimeout(function () { e.remove(); }, 220); };
    if (act) Q('button', e).onclick = function () { k(); fn && fn(); };
    clearTimeout(AV.toast.t); AV.toast.t = setTimeout(k, 4200);
  };

  AV.sheet = function (title, sub, items) {
    var h = '<div class="av-sc"></div><div class="av-sh"><i class="av-gr"></i>' + (title ? '<div class="av-sht"><b>' + esc(title) + '</b>' + (sub ? '<span>' + esc(sub) + '</span>' : '') + '</div>' : '') +
      items.map(function (x, i) {
        if (x === '-') return '<hr>';
        return '<button class="av-si' + (x.d ? ' dg' : '') + '" data-i="' + i + '">' + (x.i ? AV.ic(x.i) : '') + '<span>' + esc(x.t) + '</span>' + (x.on ? AV.ic('check', 'ck') : '') + (x.k ? '<em>' + esc(x.k) + '</em>' : '') + '</button>';
      }).join('') + '</div>';
    var L = AV.layer('av-ovl', h);
    Q('.av-sc', L.el).onclick = L.close;
    QA('.av-si', L.el).forEach(function (b) { b.onclick = function () { var x = items[+b.dataset.i]; L.close(); if (x.fn) setTimeout(x.fn, 80); }; });
    return L;
  };

  /* dropdown menu anchored to an element (Notepad++ menubar etc). items: {t,fn,k:'shortcut',on:true/false,dis:true} | '-' */
  AV.menu = function (anchor, items, opt) {
    opt = opt || {};
    var L = AV.layer('av-ovl', '<div class="av-sc" style="background:transparent"></div><div class="av-pop"></div>', { dark: opt.dark });
    var pop = Q('.av-pop', L.el);
    pop.innerHTML = items.map(function (x, i) {
      if (x === '-') return '<hr>';
      return '<button class="av-mi' + (x.on ? ' on' : '') + '" data-i="' + i + '"' + (x.dis ? ' disabled' : '') + '>' + AV.ic('check', 'ck') + '<span>' + esc(x.t) + '</span>' + (x.k ? '<kbd>' + esc(x.k) + '</kbd>' : '') + '</button>';
    }).join('');
    var r = anchor.getBoundingClientRect(), vw = innerWidth, vh = innerHeight;
    pop.style.left = '0px'; pop.style.top = '0px';
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var x = Math.min(Math.max(6, r.left), vw - pw - 6), y = r.bottom + 2;
    if (y + ph > vh - 6) y = Math.max(6, Math.min(r.top - ph - 2, vh - ph - 6));
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
    Q('.av-sc', L.el).onclick = L.close;
    QA('.av-mi', L.el).forEach(function (b) { b.onclick = function () { var it = items[+b.dataset.i]; L.close(); if (it.fn) setTimeout(it.fn, 40); }; });
    return L;
  };

  /* dialog: {t,b,inp,ph,type,ok,cancel,d,chk,sel:[start,end],extra:html} -> Promise(value | null) */
  AV.dialog = function (o) {
    return new Promise(function (res) {
      var done = false, fin = function (v) { if (done) return; done = true; res(v); };
      var h = '<div class="av-sc"></div><div class="av-dl" role="dialog"><h2>' + esc(o.t || '') + '</h2>' + (o.b ? '<p>' + o.b + '</p>' : '') +
        (o.extra || '') +
        (o.inp != null ? '<input class="av-in" type="' + (o.type || 'text') + '" value="' + esc(o.inp) + '" placeholder="' + esc(o.ph || '') + '" spellcheck="false" autocomplete="off" autocapitalize="off"><em class="av-er"></em>' : '') +
        '<div class="av-ac">' + (o.cancel === false ? '' : '<button class="av-btn t" data-a="0">' + esc(o.cancelText || 'Cancel') + '</button>') +
        (o.alt ? '<button class="av-btn t' + (o.altDanger ? ' dg' : '') + '" data-a="2">' + esc(o.alt) + '</button>' : '') +
        '<button class="av-btn t' + (o.d ? ' dg' : '') + '" data-a="1">' + esc(o.ok || 'OK') + '</button></div></div>';
      var L = AV.layer('av-ovl', h, { onClose: function () { fin(null); }, noEsc: false });
      var inp = Q('input', L.el), er = Q('.av-er', L.el);
      var ok = function () {
        var v = true;
        if (inp) { v = inp.value; if (o.trim !== false) v = v.trim(); var e = o.chk && o.chk(v); if (e) { er.textContent = e; return; } }
        if (o.getExtra) v = { value: v, extra: o.getExtra(L.el) };
        fin(v); L.close();
      };
      Q('[data-a="1"]', L.el).onclick = ok;
      var c = Q('[data-a="0"]', L.el); if (c) c.onclick = L.close;
      var a = Q('[data-a="2"]', L.el); if (a) a.onclick = function () { fin('alt'); L.close(); };
      Q('.av-sc', L.el).onclick = L.close;
      if (inp) {
        setTimeout(function () { inp.focus(); try { inp.setSelectionRange(o.sel ? o.sel[0] : 0, o.sel ? o.sel[1] : inp.value.length); } catch (e) {} }, 260);
        inp.onkeydown = function (e) { if (e.key === 'Enter') ok(); };
        inp.oninput = function () { er.textContent = ''; };
      }
    });
  };

  /* ------------------------------------------------ vault file helpers ------------------------------------------------ */
  AV.records = async function () { return (await rows()).filter(function (x) { return !x.trash; }); };
  AV.rec = async function (id) { return (await rows()).find(function (x) { return String(x.id) === String(id); }); };
  AV.bytes = async function (f) { return new Uint8Array(await de(f.d)); };
  AV.refresh = function () { try { window.__gvRefresh && window.__gvRefresh(); } catch (e) {} };
  AV.mimeFor = function (name, fallback) {
    var m = { txt: 'text/plain', md: 'text/markdown', html: 'text/html', htm: 'text/html', css: 'text/css', js: 'text/javascript', json: 'application/json', xml: 'application/xml', csv: 'text/csv', pdf: 'application/pdf', pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' };
    return m[AV.ext(name)] || fallback || 'text/plain';
  };
  /* create a brand-new record in the vault */
  AV.createRec = async function (name, bytes, type, cat) {
    var t = Date.now(), rec = { id: t + Math.random(), name: name, type: type || AV.mimeFor(name), size: bytes.length, d: await en(bytes), added: t, edited: t, trash: 0 };
    if (cat) rec.cat = cat;
    await svf(rec); AV.refresh(); return rec;
  };
  AV.updateRec = async function (rec, bytes) {
    rec.d = await en(bytes); rec.size = bytes.length; rec.edited = Date.now();
    await svf(rec); AV.refresh(); return rec;
  };
  AV.saveBlob = function (name, blob) {          /* in the Android app, alpha-native.js turns this into the save / share sheet */
    var u = URL.createObjectURL(blob), a = D.createElement('a');
    a.href = u; a.download = name; D.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(u); }, 60000);
  };
  AV.share = async function (name, blob) {
    try {
      var file = new File([blob], name, { type: blob.type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file] }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    AV.saveBlob(name, blob);
  };
  AV.nameFree = async function (name, ignoreId) {
    var all = await AV.records();
    return !all.some(function (x) { return String(x.id) !== String(ignoreId) && x.name.toLowerCase() === name.toLowerCase(); });
  };
  AV.uniqueName = async function (base, ext) {
    var all = (await AV.records()).map(function (x) { return x.name.toLowerCase(); }), n = base + '.' + ext, i = 1;
    while (all.indexOf(n.toLowerCase()) >= 0) n = base + ' ' + (++i) + '.' + ext;
    return n;
  };
  AV.validName = function (v) { return !v ? 'Enter a name' : /[\\/:*?"<>|]/.test(v) ? 'Name can’t contain \\ / : * ? " < > |' : ''; };
  AV.info = function (f, extra) {
    var r = function (a, b) { return '<div class="av-ir"><span>' + a + '</span><b>' + b + '</b></div>'; };
    var h = r('Name', esc(f.name)) + r('Type', esc(f.type || AV.ext(f.name) || 'file')) + r('Size', AV.fmtSize(f.size || 0) + ' (' + (f.size || 0).toLocaleString() + ' bytes)') +
      r('Modified', esc(new Date(f.edited || f.id).toLocaleString())) + r('Added', esc(new Date(f.added || f.id).toLocaleString())) + (extra || '');
    var L = AV.layer('av-ovl', '<div class="av-sc"></div><div class="av-sh"><i class="av-gr"></i><div class="av-sht"><b>Details</b></div>' + h + '</div>');
    Q('.av-sc', L.el).onclick = L.close;
  };
  /* common "⋮" actions for a vault file; `after(rec)` is called when the record changes */
  AV.fileActions = function (f, o) {
    o = o || {};
    return [
      { i: 'share', t: 'Share', fn: function () { o.share ? o.share() : AV.bytes(f).then(function (b) { return AV.share(f.name, new Blob([b], { type: f.type || AV.mimeFor(f.name) })); }); } },
      { i: 'dl', t: 'Save to device', fn: function () { o.save ? o.save() : AV.bytes(f).then(function (b) { AV.saveBlob(f.name, new Blob([b], { type: f.type || AV.mimeFor(f.name) })); }); } },
      { i: f.starred ? 'star' : 'starO', t: f.starred ? 'Remove from favorites' : 'Add to favorites', fn: async function () { if (f.starred) delete f.starred; else f.starred = true; await svf(f); AV.refresh(); AV.toast(f.starred ? 'Added to favorites' : 'Removed from favorites'); } },
      { i: 'edit', t: 'Rename', fn: async function () {
        var n0 = f.name, dot = n0.lastIndexOf('.');
        var v = await AV.dialog({ t: 'Rename', inp: n0, ok: 'OK', sel: [0, dot > 0 ? dot : n0.length], chk: function (v) { return AV.validName(v) || (v !== n0 && !(AV.nameFreeSync(v, f)) ? 'A file with this name already exists' : ''); } });
        if (typeof v !== 'string' || v === n0) return;
        f.name = v; f.edited = Date.now(); await svf(f); AV.refresh(); o.renamed && o.renamed(f); AV.toast('Renamed');
      } },
      '-',
      { i: 'info', t: 'Details', fn: function () { AV.info(f, o.infoExtra && o.infoExtra()); } },
      { i: 'del', t: 'Move to trash', d: 1, fn: async function () {
        if (o.beforeTrash && (await o.beforeTrash()) === false) return;
        f.trash = Date.now(); await svf(f); AV.refresh(); o.trashed && o.trashed(f);
        AV.toast('Moved to trash', 'Undo', async function () { f.trash = 0; await svf(f); AV.refresh(); });
      } }
    ];
  };
  /* synchronous duplicate check against the names cached by AV.records() (kept fresh whenever a viewer opens) */
  AV.nameCache = [];
  AV.nameFreeSync = function (name, f) { return !AV.nameCache.some(function (x) { return String(x.id) !== String(f && f.id) && x.name.toLowerCase() === name.toLowerCase(); }); };
  AV.primeNames = function () { AV.records().then(function (a) { AV.nameCache = a; }).catch(function () {}); };

  /* ------------------------------------------------ routing ------------------------------------------------ */
  var TXT_EXT = 'txt log text md markdown json jsonc json5 csv tsv xml html htm xhtml svg css scss sass less js mjs cjs jsx ts tsx py pyw java kt kts c h cpp cc cxx hpp hh cs go rs swift php rb pl lua r sql sh bash zsh bat cmd ps1 yml yaml toml ini cfg conf properties env gradle makefile mk dockerfile gitignore vue svelte dart scala groovy m mm vb asm tex rtf diff patch srt vtt ipynb lock'.split(' ');
  AV.TXT_EXT = TXT_EXT;
  AV.kind = function (f) {
    var e = AV.ext(f.name), t = (f.type || '').toLowerCase();
    if (e === 'pdf' || t.indexOf('pdf') >= 0) return 'pdf';
    if (/^(pptx|pptm|ppsx|potx)$/.test(e)) return 'pptx';
    if (/^(png|jpe?g|gif|webp|bmp|avif|heic|heif|mp3|m4a|wav|ogg|flac|aac|mp4|mkv|webm|mov|avi|zip|rar|7z|gz|apk|exe|docx?|xlsx?|odt|ods|odp|ppt|key|pages|numbers)$/.test(e)) return null;
    if (/^(image|audio|video)\//.test(t)) return null;
    if (TXT_EXT.indexOf(e) >= 0 || /^text\//.test(t) || /json|xml|javascript/.test(t)) return (f.size || 0) <= 6e6 ? 'text' : null;
    try { var c = fcat(f); if ((c === 'txt' || c === 'code') && (f.size || 0) <= 6e6) return 'text'; } catch (x) {}
    return null;
  };
  AV.open = function (f, o) {
    if (!f) return false;
    AV.primeNames();
    var k = AV.kind(f);
    try {
      if (k === 'pdf') { AV.pdf(f, o); return true; }
      if (k === 'text' && AV.editor) { AV.editor.open(f, o); return true; }
      if (k === 'pptx' && AV.slides) { AV.slides.open(f, o); return true; }
    } catch (e) { console.error(e); AV.toast('Couldn’t open ' + f.name); return true; }
    return false;
  };
  /* "+" button: upload or create */
  AV.addMenu = function (upload, cat) {
    AV.primeNames();
    var items = [{ i: 'dl', t: 'Upload files', fn: upload }, '-'];
    var mk = [
      { i: 'text', t: 'New text file', fn: function () { AV.editor && AV.editor.create('txt'); }, c: 'txt' },
      { i: 'code', t: 'New code file', fn: function () { AV.editor && AV.editor.create('code'); }, c: 'code' },
      { i: 'present', t: 'New presentation', fn: function () { AV.slides && AV.slides.create(); }, c: 'ppt' }
    ];
    mk.sort(function (a, b) { return (a.c === cat ? -1 : 0) - (b.c === cat ? -1 : 0); });
    AV.sheet('Add', '', items.concat(mk));
  };

  /* ================================================================================================================
     PDF viewer — Google Drive layout: top bar (back / title / search / more), continuous scroll on a grey canvas,
     pinch + double-tap + button zoom, tap to hide the bars, floating page counter, find-in-document, selectable text.
     ================================================================================================================ */
  var pdfP = null;
  AV.loadScript = function (src) {
    return new Promise(function (res, rej) { var s = D.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { rej(new Error('load ' + src)); }; D.head.appendChild(s); });
  };
  AV.pdfLib = function () {
    if (pdfP) return pdfP;
    pdfP = (async function () {
      var keep = window.pdfjsLib;     /* never clobber another pdf.js the old reader may have loaded */
      try { await AV.loadScript(new URL('vendor/pdf.min.js', location.href).href); }
      catch (e) { await AV.loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'); }
      var lib = window['pdfjs-dist/build/pdf'] || window.pdfjsLib;
      if (keep) window.pdfjsLib = keep;
      if (!lib || !lib.getDocument) throw new Error('PDF engine not available');
      lib.GlobalWorkerOptions.workerSrc = new URL('vendor/pdf.worker.min.js', location.href).href;
      return lib;
    })();
    pdfP.catch(function () { pdfP = null; });
    return pdfP;
  };

  AV.pdf = function (f0) {
    var f = f0, doc = null, lib = null, N = 0, zoom = 1, baseW = 600, dead = false, pages = [], ratio0 = 1.4142, barsHidden = false;
    var dpr = Math.min(window.devicePixelRatio || 1, 2.5), posKey = 'alpha.av.pos.' + f.id;
    var L = AV.layer('av-pdf',
      '<header class="av-bar"><button class="av-ib" data-a="x" aria-label="Back">' + AV.ic('back') + '</button>' +
      '<div class="av-ttl"><b></b><span>PDF</span></div>' +
      '<button class="av-ib" data-a="find" aria-label="Find in document">' + AV.ic('search') + '</button>' +
      '<button class="av-ib" data-a="more" aria-label="More">' + AV.ic('more') + '</button></header>' +
      '<div class="av-find" hidden><input type="search" placeholder="Find in document" enterkeyhint="search" autocomplete="off"><small></small>' +
      '<button class="av-ib" data-a="fp" aria-label="Previous match">' + AV.ic('up') + '</button><button class="av-ib" data-a="fn" aria-label="Next match">' + AV.ic('down') + '</button><button class="av-ib" data-a="fx" aria-label="Close find">' + AV.ic('close') + '</button></div>' +
      '<div class="av-load"><div class="av-spin"></div><div>Opening PDF…</div></div>' +
      '<div class="av-pdf-sc" hidden><div class="av-pages"></div></div>' +
      '<button class="av-pill" data-a="goto" hidden>– / –</button>' +
      '<div class="av-zb" hidden><button data-a="zi" aria-label="Zoom in">' + AV.ic('zin') + '</button><button data-a="zo" aria-label="Zoom out">' + AV.ic('zout') + '</button></div>',
      { onClose: function () { dead = true; try { doc && doc.destroy(); } catch (e) {} pages.forEach(function (p) { p.dead = true; }); } });
    var el = L.el, sc = Q('.av-pdf-sc', el), box = Q('.av-pages', el), pill = Q('.av-pill', el), load = Q('.av-load', el);
    var fbar = Q('.av-find', el), finp = Q('input', fbar), fcnt = Q('small', fbar);
    Q('.av-ttl b', el).textContent = f.name;

    /* ----- layout & rendering ----- */
    var pw = function () { return baseW * zoom; };
    function measure() { var cw = sc.clientWidth || innerWidth, pad = cw < 700 ? 8 : 24; baseW = Math.max(120, Math.min(cw - pad * 2, 980)); box.style.paddingLeft = box.style.paddingRight = pad + 'px'; }
    function sizePage(p) { var w = pw(); p.el.style.width = w + 'px'; p.el.style.height = (w * p.ratio) + 'px'; }
    function relayout() { measure(); pages.forEach(sizePage); }
    var io = null, queue = [], busy = 0, waiters = {};
    function key() { return Math.round(pw()); }
    function want(p) { if (p.st === 'done' && p.key === key()) return; if (p.st === 'busy' || queue.indexOf(p) >= 0) { if (p.st === 'busy' && p.key !== key()) p.redo = true; return; } queue.push(p); pump(); }
    function pump() {
      while (busy < 2 && queue.length) {
        var vis = queue.filter(function (p) { return p.vis; }), p = vis.length ? vis[0] : queue[0];
        queue.splice(queue.indexOf(p), 1); if (!p.vis && p.st !== 'idle') continue;
        busy++; render(p).catch(function (e) { if (!(e && e.name === 'RenderingCancelledException')) console.warn('pdf page', p.n, e); }).then(function () { busy--; if (p.redo) { p.redo = false; want(p); } pump(); });
      }
    }
    async function render(p) {
      if (dead) return;
      p.st = 'busy'; var k = key(); p.key = k;
      var page = p.page || (p.page = await doc.getPage(p.n)), v1 = page.getViewport({ scale: 1 }), r = v1.height / v1.width;
      if (Math.abs(r - p.ratio) > .004) {
        var before = p.el.offsetHeight; p.ratio = r; sizePage(p); var dh = p.el.offsetHeight - before;
        if (p.el.offsetTop + before <= sc.scrollTop + 1) sc.scrollTop += dh;
      }
      if (k !== key()) { p.st = 'idle'; return; }
      var css = pw() / v1.width, out = css * dpr, px = v1.width * out * v1.height * out;
      if (px > 1.6e7) out *= Math.sqrt(1.6e7 / px);
      var vp = page.getViewport({ scale: out }), cv = D.createElement('canvas');
      cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height); cv.className = 'av-cv';
      var task = page.render({ canvasContext: cv.getContext('2d', { alpha: false }), viewport: vp, background: '#ffffff' });
      p.task = task; await task.promise; p.task = null;
      if (dead || p.st !== 'busy') { cv.width = 0; return; }
      if (p.cv) { p.cv.width = 0; p.cv.remove(); } p.el.insertBefore(cv, p.el.firstChild); p.cv = cv;
      var pn = Q('.pn', p.el); if (pn) pn.remove();
      /* selectable text layer */
      try {
        var tc = await page.getTextContent(), tl = D.createElement('div'); tl.className = 'av-tl';
        p.divs = []; p.strs = [];
        var rt = lib.renderTextLayer({ textContentSource: tc, container: tl, viewport: page.getViewport({ scale: css }), textDivs: p.divs, textContentItemsStr: p.strs });
        await rt.promise;
        if (p.tl) p.tl.remove(); p.el.appendChild(tl); p.tl = tl; applyHL(p);
      } catch (e) { console.warn('text layer', p.n, e); }
      p.st = 'done';
      var w = waiters[p.n]; if (w) { delete waiters[p.n]; w.forEach(function (fn) { fn(); }); }
    }
    function release(p) {
      if (p.task) { try { p.task.cancel(); } catch (e) {} p.task = null; }
      if (p.cv) { p.cv.width = 0; p.cv.remove(); p.cv = null; } if (p.tl) { p.tl.remove(); p.tl = null; }
      if (p.page) { try { p.page.cleanup(); } catch (e) {} }
      p.st = 'idle'; p.divs = null; p.strs = null;
      if (!Q('.pn', p.el)) p.el.insertAdjacentHTML('beforeend', '<span class="pn">' + p.n + '</span>');
    }
    function whenRendered(p) { return new Promise(function (res) { if (p.st === 'done' && p.key === key()) return res(); (waiters[p.n] = waiters[p.n] || []).push(res); want(p); }); }

    /* ----- current page tracking ----- */
    var cur = 1, ticking = false;
    function pageAt() {
      var y = sc.scrollTop + sc.clientHeight / 3, lo = 0, hi = pages.length - 1;
      while (lo < hi) { var m = (lo + hi + 1) >> 1; if (pages[m].el.offsetTop <= y) lo = m; else hi = m - 1; }
      return lo + 1;
    }
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        ticking = false; if (dead) return;
        cur = pageAt(); pill.textContent = cur + ' / ' + N; Q('.av-ttl span', el).textContent = 'Page ' + cur + ' of ' + N;
        clearTimeout(onScroll.t); onScroll.t = setTimeout(function () { try { localStorage.setItem(posKey, String(cur)); } catch (e) {} }, 400);
      });
    }
    sc.addEventListener('scroll', onScroll, { passive: true });
    function gotoPage(n, smooth) { n = clamp(n, 1, N); var p = pages[n - 1]; sc.scrollTo({ top: Math.max(0, p.el.offsetTop - 8), behavior: smooth ? 'smooth' : 'auto' }); }

    /* ----- zoom ----- */
    function setZoom(z, cx, cy) {
      z = clamp(z, .5, 6); if (Math.abs(z - zoom) < .001) return;
      if (cx == null) { cx = sc.clientWidth / 2; cy = sc.clientHeight / 2; }
      var r = z / zoom, sx = sc.scrollLeft + cx, sy = sc.scrollTop + cy;
      zoom = z; relayout(); sc.scrollLeft = sx * r - cx; sc.scrollTop = sy * r - cy;
      pages.forEach(function (p) { if (p.vis) want(p); });
      onScroll();
    }
    var tz = { on: false, d0: 0, z0: 1, cx: 0, cy: 0, k: 1 }, lastTap = 0, tapT = 0, tmoved = false, tstart = null;
    function dist(t) { return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY); }
    sc.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) {
        var r = sc.getBoundingClientRect(); tz.on = true; tz.d0 = dist(e.touches); tz.z0 = zoom; tz.k = 1;
        tz.cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left; tz.cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
        box.style.transformOrigin = (sc.scrollLeft + tz.cx) + 'px ' + (sc.scrollTop + tz.cy) + 'px'; tmoved = true;
      } else if (e.touches.length === 1) { tmoved = false; tstart = [e.touches[0].clientX, e.touches[0].clientY]; }
    }, { passive: true });
    sc.addEventListener('touchmove', function (e) {
      if (tz.on && e.touches.length === 2) {
        e.preventDefault(); tz.k = clamp(dist(e.touches) / tz.d0, .5 / tz.z0, 6 / tz.z0);
        box.style.transform = 'scale(' + tz.k + ')';
      } else if (tstart && e.touches.length === 1 && Math.hypot(e.touches[0].clientX - tstart[0], e.touches[0].clientY - tstart[1]) > 10) tmoved = true;
    }, { passive: false });
    sc.addEventListener('touchend', function (e) {
      if (tz.on) {
        if (e.touches.length < 2) { tz.on = false; box.style.transform = ''; box.style.transformOrigin = ''; setZoom(tz.z0 * tz.k, tz.cx, tz.cy); }
        return;
      }
      if (tmoved || e.changedTouches.length !== 1) return;
      var t = e.changedTouches[0], r = sc.getBoundingClientRect(), now = Date.now();
      if (window.getSelection && String(getSelection()).length) return;
      if (now - lastTap < 300) { clearTimeout(tapT); lastTap = 0; if (zoom > 1.05) setZoom(1, t.clientX - r.left, t.clientY - r.top); else setZoom(2.5, t.clientX - r.left, t.clientY - r.top); }
      else { lastTap = now; tapT = setTimeout(function () { toggleBars(); }, 300); }
    }, { passive: true });
    sc.addEventListener('wheel', function (e) { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); var r = sc.getBoundingClientRect(); setZoom(zoom * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX - r.left, e.clientY - r.top); }, { passive: false });
    function toggleBars(force) { barsHidden = force != null ? force : !barsHidden; el.classList.toggle('av-hide', barsHidden && fbar.hidden); }
    var resizeT = 0, ro = window.ResizeObserver ? new ResizeObserver(function () { clearTimeout(resizeT); resizeT = setTimeout(function () { if (dead || !pages.length) return; var c = cur; var old = baseW; measure(); if (Math.abs(old - baseW) > 1) { relayout(); pages.forEach(function (p) { if (p.vis) want(p); }); gotoPage(c); } }, 150); }) : null;

    /* ----- find in document ----- */
    var hits = [], hi = -1, query = '', texts = {}, sid = 0;
    async function pageStrs(n) {
      if (texts[n]) return texts[n];
      var pg = await doc.getPage(n), tc = await pg.getTextContent(), strs = tc.items.map(function (i) { return i.str || ''; });
      return (texts[n] = strs);
    }
    function applyHL(p) {
      if (!p.divs) return;
      var mine = {}; hits.forEach(function (h, idx) { if (h.n === p.n) h.segs.forEach(function (s) { (mine[s.i] = mine[s.i] || []).push({ a: s.a, b: s.b, cur: idx === hi }); }); });
      Object.keys(mine).forEach(function (i) {
        var d = p.divs[i]; if (!d) return; var s = p.strs[i] || '', segs = mine[i].sort(function (x, y) { return x.a - y.a; }), out = '', pos = 0;
        segs.forEach(function (g) { if (g.a < pos) return; out += esc(s.slice(pos, g.a)) + '<mark' + (g.cur ? ' class="cur"' : '') + '>' + esc(s.slice(g.a, g.b)) + '</mark>'; pos = g.b; });
        d.innerHTML = out + esc(s.slice(pos));
      });
    }
    function clearHL() { pages.forEach(function (p) { if (p.divs) QA('mark', p.tl).forEach(function (m) { var d = m.parentNode; d.textContent = d.textContent; }); }); }
    async function runFind(q) {
      var my = ++sid; query = q; hits = []; hi = -1; clearHL(); fcnt.textContent = '';
      if (!q) return;
      var re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      fcnt.textContent = '…';
      for (var n = 1; n <= N; n++) {
        if (my !== sid || dead) return;
        var strs = await pageStrs(n), S = strs.join(''), starts = [], acc = 0;
        for (var i = 0; i < strs.length; i++) { starts.push(acc); acc += strs[i].length; }
        re.lastIndex = 0; var m;
        while ((m = re.exec(S)) && hits.length < 3000) {
          if (!m[0].length) { re.lastIndex++; continue; }
          var a = m.index, b = a + m[0].length, segs = [];
          for (var j = 0; j < strs.length; j++) { var s0 = starts[j], e0 = s0 + strs[j].length; if (e0 <= a) continue; if (s0 >= b) break; segs.push({ i: j, a: Math.max(a, s0) - s0, b: Math.min(b, e0) - s0 }); }
          if (segs.length) hits.push({ n: n, segs: segs });
        }
        if (n === 1 || n % 10 === 0) { fcnt.textContent = hits.length ? (hi < 0 ? '' : (hi + 1) + '/') + hits.length : '…'; if (hi < 0 && hits.length) { hi = 0; await showHit(); } }
      }
      if (my !== sid) return;
      if (!hits.length) fcnt.textContent = 'No results'; else { if (hi < 0) { hi = 0; await showHit(); } fcnt.textContent = (hi + 1) + '/' + hits.length; }
    }
    async function showHit() {
      if (hi < 0 || !hits[hi]) return; var h = hits[hi], p = pages[h.n - 1]; fcnt.textContent = (hi + 1) + '/' + hits.length;
      gotoPage(h.n); await whenRendered(p); pages.forEach(function (x) { if (x.divs) { QA('mark', x.tl).forEach(function (m) { var d = m.parentNode; d.textContent = d.textContent; }); applyHL(x); } });
      var m = p.tl && Q('mark.cur', p.tl); if (m) m.scrollIntoView({ block: 'center', inline: 'center' });
    }
    function stepHit(d) { if (!hits.length) return; hi = (hi + d + hits.length) % hits.length; showHit(); }
    function openFind() { fbar.hidden = false; el.classList.remove('av-hide'); barsHidden = false; finp.focus(); finp.select(); }
    function closeFind() { fbar.hidden = true; sid++; hits = []; hi = -1; clearHL(); finp.blur(); }
    var ft = 0; finp.oninput = function () { clearTimeout(ft); ft = setTimeout(function () { runFind(finp.value.trim()); }, 250); };
    finp.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); if (finp.value.trim() !== query) runFind(finp.value.trim()); else stepHit(e.shiftKey ? -1 : 1); } };

    /* ----- actions ----- */
    function more() {
      var items = [{ i: 'search', t: 'Find in document', fn: openFind }, { i: 'chev', t: 'Go to page…', fn: gotoDialog }, { i: 'zin', t: 'Fit to width', fn: function () { setZoom(1); } }, '-']
        .concat(AV.fileActions(f, { renamed: function () { Q('.av-ttl b', el).textContent = f.name; }, trashed: function () { L.close(); }, infoExtra: function () { return '<div class="av-ir"><span>Pages</span><b>' + N + '</b></div>' + (meta.title ? '<div class="av-ir"><span>Title</span><b>' + esc(meta.title) + '</b></div>' : '') + (meta.author ? '<div class="av-ir"><span>Author</span><b>' + esc(meta.author) + '</b></div>' : ''); } }));
      AV.sheet(f.name, N ? N + (N === 1 ? ' page' : ' pages') + ' · ' + AV.fmtSize(f.size || 0) : '', items);
    }
    async function gotoDialog() {
      var v = await AV.dialog({ t: 'Go to page', b: 'Enter a page number from 1 to ' + N, inp: String(cur), type: 'number', ok: 'Go', chk: function (v) { var n = +v; return !(n >= 1 && n <= N) ? 'Enter 1 – ' + N : ''; } });
      if (v) gotoPage(+v, false);
    }
    var meta = {};
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]'); if (!b) return; var a = b.dataset.a;
      if (a === 'x') L.close(); else if (a === 'more') more(); else if (a === 'find') (fbar.hidden ? openFind() : closeFind());
      else if (a === 'fp') stepHit(-1); else if (a === 'fn') stepHit(1); else if (a === 'fx') closeFind();
      else if (a === 'goto') gotoDialog(); else if (a === 'zi') setZoom(zoom * 1.3); else if (a === 'zo') setZoom(zoom / 1.3);
    });
    addEventListener('keydown', function kd(e) {
      if (dead) return removeEventListener('keydown', kd);
      if (AV.stack[AV.stack.length - 1] !== L) return;
      var inp = /INPUT|TEXTAREA/.test((e.target || {}).tagName || '');
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') { e.preventDefault(); openFind(); }
      else if (!inp && (e.key === '+' || e.key === '=')) setZoom(zoom * 1.2); else if (!inp && e.key === '-') setZoom(zoom / 1.2);
      else if (!inp && e.key === 'PageDown') { e.preventDefault(); gotoPage(cur + 1, true); } else if (!inp && e.key === 'PageUp') { e.preventDefault(); gotoPage(cur - 1, true); }
    });

    /* ----- open ----- */
    (async function () {
      try {
        lib = await AV.pdfLib();
        var buf = await de(f.d), task = lib.getDocument({ data: new Uint8Array(buf), isEvalSupported: false });
        task.onPassword = function (update, reason) {
          AV.dialog({ t: 'Password required', b: reason === 2 ? 'Incorrect password. Try again.' : 'This PDF is protected.', inp: '', type: 'password', ok: 'Open', trim: false }).then(function (v) { if (v) update(v); else { task.destroy(); L.close(); } });
        };
        doc = await task.promise; if (dead) return; N = doc.numPages;
        try { var m = await doc.getMetadata(); meta = { title: m.info && m.info.Title, author: m.info && m.info.Author }; } catch (e) {}
        var p1 = await doc.getPage(1), v = p1.getViewport({ scale: 1 }); ratio0 = v.height / v.width;
        load.remove(); sc.hidden = false; pill.hidden = false; Q('.av-zb', el).hidden = AV.touch();
        measure();
        io = new IntersectionObserver(function (es) {
          es.forEach(function (en) { var p = en.target._p; p.vis = en.isIntersecting; if (p.vis) want(p); else if (p.st === 'done' || p.st === 'busy') { var d = Math.abs(p.n - cur); if (d > 4) release(p); } });
        }, { root: sc, rootMargin: '1400px 0px 1400px 0px' });
        for (var n = 1; n <= N; n++) {
          var d = D.createElement('div'); d.className = 'av-pg'; d.innerHTML = '<span class="pn">' + n + '</span>';
          var p = { n: n, el: d, ratio: ratio0, st: 'idle', vis: false, key: 0 }; d._p = p; pages.push(p); sizePage(p); box.appendChild(d); io.observe(d);
        }
        if (ro) ro.observe(sc);
        var saved = +(localStorage.getItem(posKey) || 1); if (saved > 1 && saved <= N) gotoPage(saved); onScroll();
      } catch (e) {
        console.error(e); if (dead) return;
        load.innerHTML = '<div>' + AV.ic('info') + '</div><div>Couldn’t open this PDF.<br><small>' + esc((e && e.message) || e) + '</small></div><button class="av-btn" data-a="x">Close</button>';
      }
    })();
    return L;
  };
})();
