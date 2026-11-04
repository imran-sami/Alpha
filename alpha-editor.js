/* ===================================================================================================================
   ALPHA viewers, part 2: Notepad++-style text & code editor.
   Menubar (File / Edit / Search / View / Encoding / Language), icon toolbar, document tabs, line-number gutter,
   syntax highlighting, current-line + bracket highlight, Find / Replace (regex, case, whole word, mark all), Go to line,
   line operations, EOL + encoding conversion, status bar (Ln / Col / Sel / length / lines), zoom, word wrap,
   show whitespace / EOL, auto-indent, auto-close brackets, extra key row on phones, New file / Save / Save As.
   =================================================================================================================== */
(function () {
  'use strict';
  var AV = window.AV; if (!AV) return;
  var D = document, Q = AV.Q, QA = AV.QA, esc = AV.esc, R = String.raw;

  /* ------------------------------------------------ syntax definitions ------------------------------------------------ */
  var DQ = R`"(?:[^"\\\n]|\\.)*"?`, SQ = R`'(?:[^'\\\n]|\\.)*'?`, BT = R`\`(?:[^\`\\]|\\[\s\S])*\`?`;
  var BLK = R`/\*[\s\S]*?(?:\*/|(?![\s\S]))`, LC = R`//[^\n]*`, HC = R`#[^\n]*`;
  var NUM = R`\b(?:0[xX][\da-fA-F_]+|0[bB][01_]+|\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?)[fFlLuUnNdD]?\b`;
  var FN = R`\b[A-Za-z_$][\w$]*(?=\s*\()`, CAP = R`\b[A-Z][A-Za-z0-9_$]*\b`;
  var kw = function (w) { return R`\b(?:` + w.trim().split(/\s+/).join('|') + R`)\b`; };
  function htmlTag(t) {
    var out = [], m = /^<\/?[\w:.-]+/.exec(t); if (!m) return [['', t]];
    out.push(['tg', m[0]]);
    var rest = t.slice(m[0].length), re = /("[^"]*"?|'[^']*'?)|([\w:@.-]+)(?==)|(\/?>)/g, last = 0, x;
    while ((x = re.exec(rest))) { if (x.index > last) out.push(['', rest.slice(last, x.index)]); out.push([x[1] ? 'st' : x[2] ? 'at' : 'tg', x[0]]); last = x.index + x[0].length; }
    if (last < rest.length) out.push(['', rest.slice(last)]);
    return out;
  }
  var K = {
    js: 'break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new of return static super switch this throw try typeof var void while with yield async await from as get set',
    jsl: 'true false null undefined NaN Infinity',
    ts: 'interface type enum implements namespace declare readonly public private protected abstract keyof infer is any unknown never string number boolean object symbol bigint satisfies override module',
    java: 'abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while var record sealed permits true false null',
    kt: 'as break class continue do else for fun if in interface is null object package return super this throw try typealias val var when while by catch constructor finally import init abstract companion const data enum final inline inner internal lateinit open operator override private protected public sealed suspend vararg true false',
    c: 'auto break case char const continue default do double else enum extern float for goto if inline int long register restrict return short signed sizeof static struct switch typedef union unsigned void volatile while bool true false NULL',
    cpp: 'alignas alignof and asm catch class constexpr const_cast decltype delete dynamic_cast explicit export friend mutable namespace new noexcept nullptr operator or private protected public reinterpret_cast static_assert static_cast template this throw try typeid typename using virtual override final',
    cs: 'abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using var virtual void volatile while async await record init get set',
    go: 'break default func interface select case defer go map struct chan else goto package switch const fallthrough if range type continue for import return var nil true false iota',
    rs: 'as async await break const continue crate dyn else enum extern false fn for if impl in let loop match mod move mut pub ref return self Self static struct super trait true type unsafe use where while',
    swift: 'associatedtype class deinit enum extension fileprivate func import init inout internal let open operator private protocol public rethrows static struct subscript typealias var break case continue default defer do else fallthrough for guard if in repeat return switch where while as Any catch false is nil super self Self throw throws true try async await',
    php: 'abstract and array as break callable case catch class clone const continue declare default do echo else elseif empty extends final finally fn for foreach function global goto if implements include include_once instanceof interface isset list namespace new or print private protected public require require_once return static switch throw trait try unset use var while xor yield true false null',
    rb: 'alias and begin break case class def defined? do else elsif end ensure false for if in module next nil not or redo rescue retry return self super then true undef unless until when while yield',
    py: 'and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case True False None',
    pyb: 'self cls print len range int str float list dict set tuple bool type isinstance super open enumerate zip map filter sorted sum min max abs',
    lua: 'and break do else elseif end false for function goto if in local nil not or repeat return then true until while',
    sql: 'select from where and or not insert into values update set delete create table drop alter add column index view join inner left right outer full cross on as group by order having limit offset union all distinct case when then else end null is in like between exists primary key foreign references default unique check constraint database schema if begin commit rollback transaction grant revoke asc desc count sum avg min max int integer varchar char text boolean date timestamp float double decimal',
    sh: 'if then else elif fi for while until do done case esac function in select time return exit break continue local export readonly unset source alias echo cd set shift test read eval exec trap',
    css: 'important'
  };
  function cfam(words, o) {
    o = o || {};
    var r = [{ s: BLK, c: 'cm' }, { s: LC, c: 'cm' }];
    if (o.pp) r.push({ s: R`^[ \t]*#[ \t]*\w+`, c: 'pp' });
    r.push({ s: DQ, c: 'st' }, { s: SQ, c: 'st' });
    if (o.bt) r.push({ s: BT, c: 'st' });
    r.push({ s: NUM, c: 'nu' }, { s: kw(words), c: 'kw' }, { s: FN, c: 'fn' });
    if (o.cap !== false) r.push({ s: CAP, c: 'ty' });
    return r;
  }
  var LANGS = {
    txt: { name: 'Normal text file', ext: 'txt log text' },
    js: { name: 'JavaScript', ext: 'js mjs cjs jsx', cm: '//', rules: cfam(K.js + ' ' + K.jsl, { bt: 1 }) },
    ts: { name: 'TypeScript', ext: 'ts tsx', cm: '//', rules: cfam(K.js + ' ' + K.jsl + ' ' + K.ts, { bt: 1 }) },
    json: { name: 'JSON', ext: 'json jsonc json5 ipynb', rules: [{ s: R`"(?:[^"\\\n]|\\.)*"(?=\s*:)`, c: 'at' }, { s: DQ, c: 'st' }, { s: NUM, c: 'nu' }, { s: kw('true false null'), c: 'kw' }] },
    html: { name: 'HTML', ext: 'html htm xhtml vue svelte', cm: ['<!--', '-->'], rules: [{ s: R`<!--[\s\S]*?(?:-->|(?![\s\S]))`, c: 'cm' }, { s: R`<![A-Za-z][^>]*>?`, c: 'pp' }, { s: R`</?[A-Za-z][^<>]*>?`, sub: htmlTag }, { s: R`&#?\w+;`, c: 'nu' }] },
    xml: { name: 'XML', ext: 'xml svg xsl xsd rss plist', cm: ['<!--', '-->'], rules: [{ s: R`<!--[\s\S]*?(?:-->|(?![\s\S]))`, c: 'cm' }, { s: R`<!\[CDATA\[[\s\S]*?(?:\]\]>|(?![\s\S]))`, c: 'st' }, { s: R`<\?[\s\S]*?(?:\?>|(?![\s\S]))`, c: 'pp' }, { s: R`</?[A-Za-z][^<>]*>?`, sub: htmlTag }] },
    css: { name: 'CSS', ext: 'css scss sass less', cm: ['/*', '*/'], rules: [{ s: BLK, c: 'cm' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: R`@[\w-]+`, c: 'kw' }, { s: R`#[0-9a-fA-F]{3,8}\b`, c: 'nu' }, { s: R`\b\d+\.?\d*(?:%|[a-zA-Z]+)?`, c: 'nu' }, { s: R`!\s*important`, c: 'kw' }, { s: R`[\w-]+(?=\s*:(?!:)[^;{}]*[;}])`, c: 'at' }, { s: R`[.#][A-Za-z_][\w-]*`, c: 'ty' }, { s: R`[\w-]+(?=\()`, c: 'fn' }] },
    py: { name: 'Python', ext: 'py pyw', cm: '#', rules: [{ s: R`[rbfuRBFU]{0,2}(?:"""[\s\S]*?(?:"""|(?![\s\S]))|'''[\s\S]*?(?:'''|(?![\s\S])))`, c: 'st' }, { s: HC, c: 'cm' }, { s: R`[rbfuRBFU]{0,2}"(?:[^"\\\n]|\\.)*"?`, c: 'st' }, { s: R`[rbfuRBFU]{0,2}'(?:[^'\\\n]|\\.)*'?`, c: 'st' }, { s: R`@[A-Za-z_][\w.]*`, c: 'pp' }, { s: NUM, c: 'nu' }, { s: kw(K.py), c: 'kw' }, { s: kw(K.pyb), c: 'ty' }, { s: FN, c: 'fn' }] },
    java: { name: 'Java', ext: 'java', cm: '//', rules: cfam(K.java) },
    kt: { name: 'Kotlin', ext: 'kt kts', cm: '//', rules: cfam(K.kt) },
    c: { name: 'C', ext: 'c h', cm: '//', rules: cfam(K.c, { pp: 1, cap: false }) },
    cpp: { name: 'C++', ext: 'cpp cc cxx hpp hh hxx', cm: '//', rules: cfam(K.c + ' ' + K.cpp, { pp: 1, cap: false }) },
    cs: { name: 'C#', ext: 'cs', cm: '//', rules: cfam(K.cs, { pp: 1 }) },
    go: { name: 'Go', ext: 'go', cm: '//', rules: cfam(K.go, { bt: 1, cap: false }) },
    rs: { name: 'Rust', ext: 'rs', cm: '//', rules: cfam(K.rs, { cap: true }) },
    swift: { name: 'Swift', ext: 'swift', cm: '//', rules: cfam(K.swift) },
    php: { name: 'PHP', ext: 'php', cm: '//', rules: [{ s: R`<\?php|<\?=|\?>`, c: 'pp' }, { s: R`\$[A-Za-z_]\w*`, c: 'vr' }, { s: HC, c: 'cm' }].concat(cfam(K.php)) },
    rb: { name: 'Ruby', ext: 'rb', cm: '#', rules: [{ s: HC, c: 'cm' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: R`:[A-Za-z_]\w*`, c: 'nu' }, { s: R`@{1,2}[A-Za-z_]\w*`, c: 'vr' }, { s: NUM, c: 'nu' }, { s: kw(K.rb), c: 'kw' }, { s: FN, c: 'fn' }, { s: CAP, c: 'ty' }] },
    lua: { name: 'Lua', ext: 'lua', cm: '--', rules: [{ s: R`--\[\[[\s\S]*?(?:\]\]|(?![\s\S]))`, c: 'cm' }, { s: R`--[^\n]*`, c: 'cm' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: NUM, c: 'nu' }, { s: kw(K.lua), c: 'kw' }, { s: FN, c: 'fn' }] },
    sql: { name: 'SQL', ext: 'sql', cm: '--', ci: 1, rules: [{ s: R`--[^\n]*`, c: 'cm' }, { s: BLK, c: 'cm' }, { s: SQ, c: 'st' }, { s: DQ, c: 'st' }, { s: NUM, c: 'nu' }, { s: kw(K.sql), c: 'kw' }, { s: FN, c: 'fn' }] },
    sh: { name: 'Shell script', ext: 'sh bash zsh ksh env', cm: '#', rules: [{ s: R`^#![^\n]*`, c: 'pp' }, { s: HC, c: 'cm' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: R`\$\{?[\w@#?*!$-]+\}?`, c: 'vr' }, { s: NUM, c: 'nu' }, { s: kw(K.sh), c: 'kw' }] },
    bat: { name: 'Batch', ext: 'bat cmd', cm: 'REM ', ci: 1, rules: [{ s: R`^[ \t]*(?:rem\b|::)[^\n]*`, c: 'cm' }, { s: DQ, c: 'st' }, { s: R`%[\w~*]+%?|!\w+!`, c: 'vr' }, { s: R`^[ \t]*:\w+`, c: 'pp' }, { s: kw('echo set if else for in do goto call exit pause cd dir copy move del type cls start errorlevel not exist'), c: 'kw' }] },
    yaml: { name: 'YAML', ext: 'yml yaml', cm: '#', rules: [{ s: HC, c: 'cm' }, { s: R`^---|^\.\.\.`, c: 'pp' }, { s: R`^[ \t-]*[\w.\-"']+(?=\s*:(?:\s|$))`, c: 'at' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: R`[&*]\w+`, c: 'pp' }, { s: NUM, c: 'nu' }, { s: kw('true false null yes no on off'), c: 'kw' }] },
    ini: { name: 'INI / Properties / TOML', ext: 'ini cfg conf properties toml gitignore', cm: '#', rules: [{ s: R`[#;][^\n]*`, c: 'cm' }, { s: R`^[ \t]*\[[^\]\n]+\]`, c: 'kw' }, { s: R`^[ \t]*[\w.\-]+(?=[ \t]*[=:])`, c: 'at' }, { s: DQ, c: 'st' }, { s: SQ, c: 'st' }, { s: NUM, c: 'nu' }, { s: kw('true false'), c: 'kw' }] },
    md: { name: 'Markdown', ext: 'md markdown', rules: [{ s: R`^[ \t]*(?:\`\`\`|~~~)[\s\S]*?(?:^[ \t]*(?:\`\`\`|~~~)|(?![\s\S]))`, c: 'st' }, { s: R`^#{1,6}[ \t].*$`, c: 'kw' }, { s: R`\*\*[^*\n]+\*\*|__[^_\n]+__`, c: 'ty' }, { s: R`\`[^\`\n]+\``, c: 'st' }, { s: R`!?\[[^\]\n]*\]\([^)\n]*\)`, c: 'fn' }, { s: R`^[ \t]*(?:[-*+]|\d+\.)[ \t]`, c: 'nu' }, { s: R`^>.*$`, c: 'cm' }] },
    diff: { name: 'Diff', ext: 'diff patch', rules: [{ s: R`^(?:\+\+\+|---)[^\n]*`, c: 'kw' }, { s: R`^@@[^\n]*`, c: 'nu' }, { s: R`^\+[^\n]*`, c: 'da' }, { s: R`^-[^\n]*`, c: 'dd' }] }
  };
  var EXT = {};
  Object.keys(LANGS).forEach(function (id) { var l = LANGS[id]; l.id = id; l.ext.split(' ').forEach(function (e) { EXT[e] = id; }); });
  function compile(l) {
    if (l.re !== undefined) return l;
    if (!l.rules) { l.re = null; return l; }
    try { l.re = new RegExp(l.rules.map(function (r) { return '(' + r.s + ')'; }).join('|'), 'g' + (l.ci ? 'i' : '') + 'm'); }
    catch (e) { console.warn('syntax', l.id, e); l.re = null; }
    return l;
  }
  function langFor(name) { var m = /\.([^.]+)$/.exec(name || ''); var e = m ? m[1].toLowerCase() : ''; if (/^(makefile|dockerfile)$/i.test(name)) return 'sh'; return EXT[e] || 'txt'; }
  function tokenize(text, l) {
    compile(l); if (!l.re) return [['', text]];
    var out = [], last = 0, m, re = l.re; re.lastIndex = 0;
    while ((m = re.exec(text))) {
      if (!m[0].length) { re.lastIndex++; continue; }
      if (m.index > last) out.push(['', text.slice(last, m.index)]);
      var i = 1; while (m[i] === undefined) i++;
      var r = l.rules[i - 1];
      if (r.sub) { var sub = r.sub(m[0]); for (var k = 0; k < sub.length; k++) out.push(sub[k]); } else out.push([r.c, m[0]]);
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push(['', text.slice(last)]);
    return out;
  }
  AV.editorLangs = LANGS; AV.editorTokenize = tokenize; AV.editorLangFor = langFor;

  /* ------------------------------------------------ encodings / EOL ------------------------------------------------ */
  var ENCS = { 'utf-8': 'UTF-8', 'utf-8-bom': 'UTF-8-BOM', 'utf-16le': 'UTF-16 LE BOM', 'utf-16be': 'UTF-16 BE BOM', ansi: 'ANSI (Windows-1252)' };
  var EOLS = { '\n': 'Unix (LF)', '\r\n': 'Windows (CR LF)', '\r': 'Macintosh (CR)' };
  var ansiMap = null;
  function ansiRev() { if (ansiMap) return ansiMap; ansiMap = {}; var d = new TextDecoder('windows-1252'); for (var i = 0; i < 256; i++) { var ch = d.decode(new Uint8Array([i])); if (!(ch in ansiMap)) ansiMap[ch] = i; } return ansiMap; }
  function decode(u8) {
    var enc = 'utf-8', off = 0, text;
    if (u8[0] === 0xEF && u8[1] === 0xBB && u8[2] === 0xBF) { enc = 'utf-8-bom'; off = 3; }
    else if (u8[0] === 0xFF && u8[1] === 0xFE) { enc = 'utf-16le'; off = 2; }
    else if (u8[0] === 0xFE && u8[1] === 0xFF) { enc = 'utf-16be'; off = 2; }
    try { text = new TextDecoder(enc.indexOf('utf-16') === 0 ? enc : 'utf-8', { fatal: true }).decode(u8.subarray(off)); }
    catch (e) { enc = 'ansi'; text = new TextDecoder('windows-1252').decode(u8); }
    var crlf = (text.match(/\r\n/g) || []).length, rest = text.replace(/\r\n/g, ''), lf = (rest.match(/\n/g) || []).length, cr = (rest.match(/\r/g) || []).length;
    var eol = crlf > 0 && crlf >= lf && crlf >= cr ? '\r\n' : cr > lf && cr > crlf ? '\r' : '\n';
    return { text: text.replace(/\r\n?/g, '\n'), enc: enc, eol: eol };
  }
  function encode(t) {
    var s = t.eol === '\n' ? t.text : t.text.replace(/\n/g, t.eol), enc = t.enc, i, o;
    if (enc === 'utf-8') return new TextEncoder().encode(s);
    if (enc === 'utf-8-bom') { var b = new TextEncoder().encode(s); o = new Uint8Array(b.length + 3); o.set([0xEF, 0xBB, 0xBF]); o.set(b, 3); return o; }
    if (enc === 'ansi') { var m = ansiRev(); o = new Uint8Array(s.length); for (i = 0; i < s.length; i++) { var v = m[s[i]]; o[i] = v == null ? 63 : v; } return o; }
    var le = enc === 'utf-16le'; o = new Uint8Array(2 + s.length * 2); o[0] = le ? 0xFF : 0xFE; o[1] = le ? 0xFE : 0xFF;
    for (i = 0; i < s.length; i++) { var c = s.charCodeAt(i); o[2 + i * 2] = le ? c & 255 : c >> 8; o[3 + i * 2] = le ? c >> 8 : c & 255; }
    return o;
  }
  AV.editorDecode = decode; AV.editorEncode = encode;

  /* ------------------------------------------------ settings ------------------------------------------------ */
  var SET = { wrap: false, ln: true, ws: false, eol: false, fs: 14, theme: 'auto', ts: 4, spaces: false, close: true, cl: true, keys: true, hl: true };
  try { Object.assign(SET, JSON.parse(localStorage.getItem('alpha.npp.set') || '{}')); } catch (e) {}
  var saveSet = function () { try { localStorage.setItem('alpha.npp.set', JSON.stringify(SET)); } catch (e) {} };

  /* ------------------------------------------------ styles ------------------------------------------------ */
  AV.css('alpha-ed-css', [
    '.ed{--bg:#fff;--fg:#000;--gut:#e4e4e4;--gutfg:#808080;--curln:#e8e8ff;--sel:rgba(51,153,255,.38);--chrome:#f0f0f0;--chromebd:#c0c0c0;--hover:#d9e6f7;--tabin:#e0e0e0;--acc:#ff8000;--ws:#bbb;--find:#fffbd0;--inbg:#fff;--saved:#1565c0;--mod:#d32f2f}',
    '.ed.dk{--bg:#1e1e1e;--fg:#d4d4d4;--gut:#252526;--gutfg:#858585;--curln:#2a2d3a;--sel:rgba(38,120,220,.5);--chrome:#2d2d30;--chromebd:#3f3f46;--hover:#3e3e42;--tabin:#252526;--ws:#555;--find:#2b2b20;--inbg:#3c3c3c;--saved:#64b5f6;--mod:#ef5350}',
    '.ed{background:var(--bg);color:var(--fg);font-size:13px}',
    '.ed-menubar{flex:none;display:flex;align-items:center;height:calc(40px + var(--sa-top));padding:var(--sa-top) max(0px,var(--sa-right)) 0 max(0px,var(--sa-left));background:var(--chrome);border-bottom:1px solid var(--chromebd);overflow-x:auto;scrollbar-width:none}.ed-menubar::-webkit-scrollbar,.ed-tb::-webkit-scrollbar,.ed-tabs::-webkit-scrollbar,.ed-keys::-webkit-scrollbar,.ed-sb::-webkit-scrollbar{display:none}',
    '.ed-mb{flex:none;height:40px;padding:0 12px;border:0;background:none;color:inherit;font:14px inherit;cursor:pointer;white-space:nowrap}.ed-mb:hover,.ed-mb.on{background:var(--hover)}.ed-menubar .av-ib{width:40px;height:40px;border-radius:0}',
    '.ed-tb{flex:none;display:flex;align-items:center;height:40px;padding:0 max(2px,var(--sa-left));background:var(--chrome);border-bottom:1px solid var(--chromebd);overflow-x:auto;scrollbar-width:none;gap:1px}',
    '.ed-tb button{flex:none;width:38px;height:34px;border:1px solid transparent;border-radius:3px;background:none;color:inherit;display:grid;place-items:center;cursor:pointer;padding:0}.ed-tb button:hover{background:var(--hover);border-color:var(--chromebd)}.ed-tb button:active,.ed-tb button.on{background:var(--hover);border-color:#6a9be0}.ed-tb button[disabled]{opacity:.35;pointer-events:none}.ed-tb .avi{width:20px;height:20px}.ed-tb i{flex:none;width:1px;height:22px;background:var(--chromebd);margin:0 4px}',
    '.ed-tabs{flex:none;display:flex;align-items:flex-end;height:34px;background:var(--chrome);border-bottom:1px solid var(--chromebd);overflow-x:auto;scrollbar-width:none;padding-left:max(0px,var(--sa-left))}',
    '.ed-tab{flex:none;position:relative;display:flex;align-items:center;gap:6px;height:29px;min-width:84px;max-width:190px;padding:0 4px 0 8px;border:1px solid var(--chromebd);border-bottom:0;border-left-width:0;background:var(--tabin);color:inherit;font:13px inherit;cursor:pointer;white-space:nowrap}',
    '.ed-tab.on{height:34px;background:var(--bg);border-top:3px solid var(--acc);margin-bottom:-1px;padding-bottom:1px}.ed-tab span{overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}.ed-tab .dsk{width:14px;height:14px;fill:var(--saved)}.ed-tab.mod .dsk{fill:var(--mod)}',
    '.ed-tab button{flex:none;width:20px;height:20px;border:0;border-radius:3px;background:none;color:inherit;display:grid;place-items:center;cursor:pointer;padding:0;opacity:.7}.ed-tab button:hover{background:var(--hover);opacity:1}.ed-tab button .avi{width:14px;height:14px}',
    '.ed-tabs .add{flex:none;width:32px;height:29px;border:0;background:none;color:inherit;cursor:pointer;display:grid;place-items:center}',
    '.ed-sc{flex:1;min-height:0;overflow:auto;position:relative;background:var(--bg);touch-action:pan-x pan-y;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}',
    '.ed-in{position:relative;width:max-content;min-width:100%;min-height:100%;font-family:"Consolas","Courier New",ui-monospace,Menlo,monospace;font-size:var(--fs,14px);line-height:var(--lh,21px);tab-size:var(--ts,4);-moz-tab-size:var(--ts,4);font-variant-ligatures:none;letter-spacing:0}',
    '.ed.wrap .ed-in{width:100%}',
    '.ed-rows{position:relative;min-height:100%;padding-bottom:40vh}',
    '.ed-ln{display:flex;min-height:var(--lh,21px)}',
    '.ed-n{position:sticky;left:0;z-index:2;flex:none;width:var(--gw,48px);padding:0 8px 0 4px;text-align:right;background:var(--gut);color:var(--gutfg);-webkit-user-select:none;user-select:none;box-sizing:border-box}',
    '.ed-c{position:relative;flex:1;min-width:0;padding:0 24px 0 8px;white-space:pre;box-sizing:border-box}',
    '.ed.wrap .ed-c{white-space:pre-wrap;overflow-wrap:break-word;word-break:normal}',
    '.ed.cl .ed-ln.cur .ed-c{background:var(--curln)}.ed-ln.cur .ed-n{color:var(--fg);font-weight:700}',
    '.ed.nonum .ed-n{display:none}',
    '.ed-ta{position:absolute;left:var(--gw,48px);top:0;right:0;bottom:0;width:auto;margin:0;padding:0 24px 0 8px;border:0;outline:0;resize:none;overflow:hidden;background:transparent;color:transparent;-webkit-text-fill-color:transparent;caret-color:var(--fg);font:inherit;line-height:inherit;letter-spacing:inherit;tab-size:inherit;white-space:pre;box-sizing:border-box;z-index:1;-webkit-tap-highlight-color:transparent}',
    '.ed.wrap .ed-ta{white-space:pre-wrap;overflow-wrap:break-word}',
    '.ed.nonum .ed-ta{left:0}',
    '.ed-ta::selection{background:var(--sel);-webkit-text-fill-color:transparent}',
    '.ed.ws .ed-tabc{box-shadow:inset 0 -1px 0 var(--ws)}.ed.ws .ed-c{--wsc:var(--ws)}',
    '.ed.eol .ed-c::after{content:attr(data-e);display:inline-block;width:0;overflow:visible;white-space:nowrap;margin-left:2px;font-size:.72em;color:var(--gutfg);opacity:.8;font-family:Arial,sans-serif;-webkit-user-select:none;user-select:none}',
    '.fm{background:rgba(255,213,0,.45);border-radius:2px}.fmc{background:rgba(255,140,0,.65);outline:1px solid #ff8c00;border-radius:2px}.bm{background:rgba(0,190,0,.3);outline:1px solid #0a0}',
    /* syntax colours: Notepad++ "Default" (light) and a dark variant */
    '.ed .t-kw{color:#0000ff;font-weight:700}.ed .t-ty{color:#8000ff}.ed .t-st{color:#808080}.ed .t-nu{color:#ff8000}.ed .t-cm{color:#008000}.ed .t-fn{color:#795e26}.ed .t-at{color:#ff0000}.ed .t-tg{color:#0000ff}.ed .t-pp{color:#804000}.ed .t-vr{color:#8000ff}.ed .t-da{color:#007000;background:rgba(0,160,0,.12)}.ed .t-dd{color:#b00000;background:rgba(200,0,0,.1)}',
    '.ed.dk .t-kw{color:#569cd6}.ed.dk .t-ty{color:#4ec9b0}.ed.dk .t-st{color:#ce9178}.ed.dk .t-nu{color:#b5cea8}.ed.dk .t-cm{color:#6a9955}.ed.dk .t-fn{color:#dcdcaa}.ed.dk .t-at{color:#9cdcfe}.ed.dk .t-tg{color:#569cd6}.ed.dk .t-pp{color:#c586c0}.ed.dk .t-vr{color:#9cdcfe}.ed.dk .t-da{color:#89d185;background:rgba(0,160,0,.15)}.ed.dk .t-dd{color:#f48771;background:rgba(200,0,0,.15)}',
    /* find panel */
    '.ed-find{flex:none;padding:6px max(8px,var(--sa-right)) 6px max(8px,var(--sa-left));background:var(--chrome);border-top:1px solid var(--chromebd);display:flex;flex-direction:column;gap:5px}.ed-find[hidden]{display:none}',
    '.ed-find .r{display:flex;align-items:center;gap:4px}',
    '.ed-find input[type=text]{flex:1;min-width:0;height:34px;border:1px solid var(--chromebd);border-radius:3px;background:var(--inbg);color:inherit;padding:0 8px;font:14px "Consolas","Courier New",monospace;outline:0}.ed-find input[type=text]:focus{border-color:#4a90e2}',
    '.ed-find button{flex:none;height:34px;min-width:36px;padding:0 10px;border:1px solid var(--chromebd);border-radius:3px;background:var(--bg);color:inherit;font:13px inherit;cursor:pointer;display:inline-grid;place-items:center}.ed-find button:active,.ed-find button.on{background:var(--hover);border-color:#6a9be0}.ed-find button.on{font-weight:700;box-shadow:inset 0 0 0 1px #6a9be0}',
    '.ed-find .avi{width:18px;height:18px}.ed-find .msg{flex:1;min-width:0;font-size:12px;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:4px}.ed-find .msg.er{color:var(--mod);opacity:1}',
    '.ed-keys{flex:none;display:flex;gap:4px;padding:4px max(6px,var(--sa-left));background:var(--chrome);border-top:1px solid var(--chromebd);overflow-x:auto;scrollbar-width:none}.ed-keys[hidden]{display:none}',
    '.ed-keys button{flex:none;min-width:38px;height:36px;padding:0 8px;border:1px solid var(--chromebd);border-radius:5px;background:var(--bg);color:inherit;font:15px "Consolas","Courier New",monospace;cursor:pointer}.ed-keys button:active{background:var(--hover)}',
    '.ed-status{flex:none;display:flex;align-items:stretch;height:calc(26px + var(--sa-bottom));padding:0 var(--sa-right) var(--sa-bottom) var(--sa-left);background:var(--chrome);border-top:1px solid var(--chromebd);font-size:12px;overflow-x:auto;scrollbar-width:none;white-space:nowrap}',
    '.ed-status button{flex:none;display:flex;align-items:center;padding:0 10px;border:0;border-right:1px solid var(--chromebd);background:none;color:inherit;font:12px inherit;cursor:pointer}.ed-status button:hover{background:var(--hover)}.ed-status .grow{flex:1;min-width:0}',
    '.ed .av-sc,.ed .av-sh{position:fixed}'
  ].join('\n'));

  /* ------------------------------------------------ editor instance ------------------------------------------------ */
  var ED = null, untitled = 0;
  var DISK = '<svg class="dsk" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>';
  var tb = function (a, ic, tip) { return '<button data-t="' + a + '" title="' + tip + '" aria-label="' + tip + '">' + AV.ic(ic) + '</button>'; };
  var isDarkEd = function () { return SET.theme === 'dark' || (SET.theme === 'auto' && AV.isDark()); };

  function mkTab(o) {
    return { id: 'ed' + Math.random().toString(36).slice(2), rec: o.rec || null, name: o.name, text: o.text || '', saved: o.saved != null ? o.saved : (o.text || ''), enc: o.enc || 'utf-8', eol: o.eol || '\n',
      lang: o.lang || langFor(o.name), undo: [], redo: [], sel: [0, 0], lastKind: '', lastT: 0, sy: 0, sx: 0, marks: [], mi: -1 };
  }

  function openEditor() {
    if (ED && !ED.L.closed) return ED;
    var dark = isDarkEd();
    var html =
      '<div class="ed-menubar"><button class="av-ib" data-m="exit" aria-label="Back to vault">' + AV.ic('back') + '</button>' +
      ['file:File', 'edit:Edit', 'search:Search', 'view:View', 'enc:Encoding', 'lang:Language'].map(function (x) { var p = x.split(':'); return '<button class="ed-mb" data-m="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>' +
      '<div class="ed-tb">' + tb('new', 'file', 'New (Ctrl+N)') + tb('open', 'folder', 'Open from vault') + tb('save', 'save', 'Save (Ctrl+S)') + '<i></i>' +
      tb('cut', 'cut', 'Cut') + tb('copy', 'copy', 'Copy') + tb('paste', 'paste', 'Paste') + '<i></i>' +
      tb('undo', 'undo', 'Undo (Ctrl+Z)') + tb('redo', 'redo', 'Redo (Ctrl+Y)') + '<i></i>' +
      tb('find', 'search', 'Find (Ctrl+F)') + tb('replace', 'edit', 'Replace (Ctrl+H)') + '<i></i>' +
      tb('zin', 'zin', 'Zoom in') + tb('zout', 'zout', 'Zoom out') + '<i></i>' + tb('wrap', 'wrap', 'Word wrap') + tb('sym', 'text', 'Show whitespace and EOL') + tb('share', 'share', 'Share') + '</div>' +
      '<div class="ed-tabs"></div>' +
      '<div class="ed-sc"><div class="ed-in"><div class="ed-rows"></div><textarea class="ed-ta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" wrap="off" aria-label="Editor"></textarea></div></div>' +
      '<div class="ed-find" hidden><div class="r"><input type="text" class="f" placeholder="Find what" spellcheck="false" autocapitalize="off" autocomplete="off"><button data-f="prev" title="Previous (Shift+F3)">' + AV.ic('up') + '</button><button data-f="next" title="Next (F3)">' + AV.ic('down') + '</button><button data-f="x" title="Close">' + AV.ic('close') + '</button></div>' +
      '<div class="r rr"><input type="text" class="rp" placeholder="Replace with" spellcheck="false" autocapitalize="off" autocomplete="off"><button data-f="rep">Replace</button><button data-f="all">Replace All</button></div>' +
      '<div class="r"><button data-o="case" title="Match case">Aa</button><button data-o="word" title="Whole word">Ab|</button><button data-o="re" title="Regular expression">.*</button><button data-o="wrap" title="Wrap around">↻</button><button data-f="cnt" title="Count">#</button><span class="msg"></span></div></div>' +
      '<div class="ed-keys" hidden></div>' +
      '<div class="ed-status"><button data-s="len"></button><button data-s="pos"></button><span class="grow"></span><button data-s="eol"></button><button data-s="enc"></button><button data-s="lang"></button><button data-s="ins">INS</button></div>';
    var L = AV.layer('ed' + (dark ? ' dk' : '') + (SET.wrap ? ' wrap' : '') + (SET.cl ? ' cl' : '') + (SET.ws ? ' ws' : '') + (SET.eol ? ' eol' : '') + (SET.ln ? '' : ' nonum'), html,
      { dark: dark, noEsc: true, onRequestClose: function () { requestExit(); }, onClose: function () { ED = null; } });
    var el = L.el;
    ED = { L: L, el: el, tabs: [], cur: null, sc: Q('.ed-sc', el), inn: Q('.ed-in', el), rows: Q('.ed-rows', el), ta: Q('.ed-ta', el), find: { q: '', r: '', case: false, word: false, re: false, wrap: true }, lineStarts: [0], charW: 8, br: null };
    wire(ED);
    applyFont(ED);
    return ED;
  }

  /* ------------------------------------------------ rendering ------------------------------------------------ */
  function applyFont(ed) {
    var fs = SET.fs, lh = Math.round(fs * 1.5);
    ed.inn.style.setProperty('--fs', fs + 'px'); ed.inn.style.setProperty('--lh', lh + 'px'); ed.inn.style.setProperty('--ts', SET.ts);
    var m = D.createElement('span'); m.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font:inherit'; m.textContent = 'M'.repeat(50); ed.inn.appendChild(m);
    ed.charW = m.getBoundingClientRect().width / 50 || fs * .6; m.remove();
  }
  function lineIdx(ed, pos) {
    var a = ed.lineStarts, lo = 0, hi = a.length - 1;
    while (lo < hi) { var m = (lo + hi + 1) >> 1; if (a[m] <= pos) lo = m; else hi = m - 1; }
    return lo;
  }
  function render(ed) {
    ed.pending = 0; var t = ed.cur; if (!t || ed.L.closed) return;
    var text = t.text, big = text.length > 300000, huge = text.length > 1500000, lang = LANGS[t.lang] || LANGS.txt;
    var tokens = (SET.hl && !big && lang.rules) ? tokenize(text, lang) : [['', text]];
    var fm = big ? [] : t.marks, br = ed.br && !big ? ed.br : [], ws = SET.ws && !huge, eolLab = t.eol === '\r\n' ? 'CRLF' : t.eol === '\r' ? 'CR' : 'LF';
    var lines = [], cur = '', pos = 0, fmI = 0, starts = [0];
    function X(s) { s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); if (ws) s = s.replace(/ /g, '·').replace(/\t/g, '<span class="ed-tabc">\t</span>'); return s; }
    function inFm(a) { for (var j = fmI; j < fm.length && fm[j].s <= a; j++) if (a >= fm[j].s && a < fm[j].e) return j === t.mi ? 'fmc' : 'fm'; return ''; }
    function piece(cls, s, start) {
      if (!s.length) return;
      var e = start + s.length, cuts = [start, e];
      if (fm.length) { while (fmI < fm.length && fm[fmI].e <= start) fmI++; for (var j = fmI; j < fm.length && fm[j].s < e; j++) { if (fm[j].s > start) cuts.push(fm[j].s); if (fm[j].e < e) cuts.push(fm[j].e); } }
      for (var q = 0; q < br.length; q++) { if (br[q] > start && br[q] < e) cuts.push(br[q]); if (br[q] + 1 > start && br[q] + 1 < e) cuts.push(br[q] + 1); }
      if (cuts.length > 2) cuts = cuts.sort(function (a, b) { return a - b; }).filter(function (v, i, a) { return !i || v !== a[i - 1]; });
      for (var k = 0; k < cuts.length - 1; k++) {
        var a = cuts[k], b = cuts[k + 1], str = s.slice(a - start, b - start), extra = fm.length ? inFm(a) : '';
        if (br.length && (a === br[0] || a === br[1])) extra += (extra ? ' ' : '') + 'bm';
        var c = (cls ? 't-' + cls : '') + (extra ? ' ' + extra : '');
        cur += c ? '<span class="' + c + '">' + X(str) + '</span>' : X(str);
      }
    }
    for (var i = 0; i < tokens.length; i++) {
      var cls = tokens[i][0], tx = tokens[i][1], parts = tx.indexOf('\n') < 0 ? [tx] : tx.split('\n');
      for (var p = 0; p < parts.length; p++) {
        if (p > 0) { lines.push(cur); cur = ''; pos++; starts.push(pos); }
        piece(cls, parts[p], pos); pos += parts[p].length;
      }
    }
    lines.push(cur);
    var h = '', n = lines.length;
    for (var li = 0; li < n; li++) h += '<div class="ed-ln"><span class="ed-n">' + (li + 1) + '</span><span class="ed-c" data-e="' + eolLab + '">' + lines[li] + '</span></div>';
    ed.rows.innerHTML = h; ed.lineStarts = starts; ed.nl = n;
    var digits = Math.max(3, String(n).length);
    ed.inn.style.setProperty('--gw', SET.ln ? 'calc(' + digits + 'ch + 16px)' : '0px');
    paintCur(ed);
  }
  function renderSoon(ed, now) {
    if (ed.pending) return; ed.pending = 1;
    var big = ed.cur && ed.cur.text.length > 120000;
    if (big) setTimeout(function () { render(ed); }, 140); else requestAnimationFrame(function () { render(ed); });
  }
  function paintCur(ed) {
    var prev = ed.rows.querySelector('.ed-ln.cur'); if (prev) prev.classList.remove('cur');
    if (!ed.cur) return; var li = lineIdx(ed, ed.ta.selectionStart), r = ed.rows.children[li]; if (r) r.classList.add('cur'); ed.curLine = li;
  }
  function rowTop(ed, li) { var r = ed.rows.children[li]; return r ? r.offsetTop : 0; }
  function reveal(ed, pos, center) {
    var sc = ed.sc, li = lineIdx(ed, pos), r = ed.rows.children[li]; if (!r) return;
    var lh = parseFloat(ed.inn.style.getPropertyValue('--lh')) || 21, top = r.offsetTop;
    if (SET.wrap) { var col = pos - ed.lineStarts[li], cw = r.querySelector('.ed-c').clientWidth || 300, perRow = Math.max(1, Math.floor((cw - 32) / ed.charW)); top += Math.floor(col / perRow) * lh; }
    var vh = sc.clientHeight;
    if (center || top < sc.scrollTop + 4 || top + lh > sc.scrollTop + vh - 4) sc.scrollTop = Math.max(0, top - (center ? vh / 2 - lh : vh / 3));
    if (!SET.wrap) {
      var gw = SET.ln ? parseFloat(getComputedStyle(ed.rows.querySelector('.ed-n') || ed.rows).width) || 0 : 0, x = gw + 8 + (pos - ed.lineStarts[li]) * ed.charW;
      if (x < sc.scrollLeft + gw + 20) sc.scrollLeft = Math.max(0, x - gw - 40); else if (x > sc.scrollLeft + sc.clientWidth - 40) sc.scrollLeft = x - sc.clientWidth + 80;
    }
  }

  /* ------------------------------------------------ tabs ------------------------------------------------ */
  function drawTabs(ed) {
    var bar = Q('.ed-tabs', ed.el);
    bar.innerHTML = ed.tabs.map(function (t, i) {
      return '<div class="ed-tab' + (t === ed.cur ? ' on' : '') + (t.text !== t.saved ? ' mod' : '') + '" data-i="' + i + '" title="' + esc(t.name) + '">' + DISK + '<span>' + esc(t.name) + '</span><button data-x="' + i + '" aria-label="Close tab">' + AV.ic('close') + '</button></div>';
    }).join('') + '<button class="add" data-a="new" aria-label="New tab">' + AV.ic('add') + '</button>';
    var on = Q('.ed-tab.on', bar); if (on) { var l = on.offsetLeft, w = on.offsetWidth; if (l < bar.scrollLeft || l + w > bar.scrollLeft + bar.clientWidth) bar.scrollLeft = l - 20; }
  }
  function dirty(t) { return t.text !== t.saved; }
  function switchTab(ed, t) {
    if (ed.cur) { ed.cur.sel = [ed.ta.selectionStart, ed.ta.selectionEnd]; ed.cur.sy = ed.sc.scrollTop; ed.cur.sx = ed.sc.scrollLeft; }
    ed.cur = t; ed.ta.value = t.text; ed.br = null;
    render(ed); drawTabs(ed);
    ed.ta.setSelectionRange(t.sel[0], t.sel[1]); ed.sc.scrollTop = t.sy; ed.sc.scrollLeft = t.sx;
    paintCur(ed); status(ed); toolState(ed); if (ed.find.open) computeMarks(ed, true);
  }
  function addTab(ed, t) { ed.tabs.push(t); switchTab(ed, t); }
  async function closeTab(ed, t, force) {
    if (!force && dirty(t)) {
      var a = await AV.dialog({ t: 'Save changes?', b: 'Save changes to “' + esc(t.name) + '” before closing?', ok: 'Save', alt: 'Don’t save', altDanger: true });
      if (a === null) return false;
      if (a === true) { var ok = await saveTab(ed, t); if (!ok) return false; }
    }
    var i = ed.tabs.indexOf(t); ed.tabs.splice(i, 1);
    if (!ed.tabs.length) { ed.L.close(); return true; }
    if (ed.cur === t) { ed.cur = null; switchTab(ed, ed.tabs[Math.min(i, ed.tabs.length - 1)]); } else drawTabs(ed);
    return true;
  }
  async function requestExit() {
    var ed = ED; if (!ed) return;
    if (ed.find.open) { closeFind(ed); return; }
    var mods = ed.tabs.filter(dirty);
    if (mods.length) {
      var a = await AV.dialog({ t: 'Unsaved changes', b: mods.length === 1 ? 'Save changes to “' + esc(mods[0].name) + '”?' : mods.length + ' documents have unsaved changes. Save them?', ok: mods.length === 1 ? 'Save' : 'Save all', alt: 'Don’t save', altDanger: true });
      if (a === null) return;
      if (a === true) { for (var i = 0; i < mods.length; i++) if (!(await saveTab(ed, mods[i]))) return; }
    }
    ed.L.close();
  }

  /* ------------------------------------------------ status bar / toolbar state ------------------------------------------------ */
  function status(ed) {
    var t = ed.cur; if (!t) return; var ta = ed.ta, s = ta.selectionStart, e = ta.selectionEnd, li = lineIdx(ed, s), col = s - ed.lineStarts[li] + 1;
    var set = function (k, v) { var b = Q('[data-s=' + k + ']', ed.el); if (b) b.textContent = v; };
    set('len', 'length : ' + t.text.length.toLocaleString() + '   lines : ' + (ed.nl || 1).toLocaleString());
    set('pos', 'Ln : ' + (li + 1) + '   Col : ' + col + '   ' + (e > s ? 'Sel : ' + (e - s) + ' | ' + (lineIdx(ed, e) - li + 1) : 'Pos : ' + (s + 1)));
    set('eol', EOLS[t.eol]); set('enc', ENCS[t.enc]); set('lang', (LANGS[t.lang] || LANGS.txt).name);
  }
  function toolState(ed) {
    var t = ed.cur; if (!t) return;
    var s = function (a, on) { var b = Q('[data-t=' + a + ']', ed.el); if (b) { if (on != null) b.classList.toggle('on', on); } return b; };
    Q('[data-t=undo]', ed.el).disabled = !t.undo.length; Q('[data-t=redo]', ed.el).disabled = !t.redo.length;
    s('wrap', SET.wrap); s('sym', SET.ws || SET.eol);
  }

  /* ------------------------------------------------ editing core ------------------------------------------------ */
  var MAXH = 40e6;
  function histSize(t) { var n = 0; for (var i = 0; i < t.undo.length; i++) n += t.undo[i].v.length; return n; }
  function pushUndo(ed, t, sel) {
    t.undo.push({ v: t.text, s: sel[0], e: sel[1] }); t.redo.length = 0;
    while (t.undo.length > 300 || (t.undo.length > 2 && histSize(t) > MAXH)) t.undo.shift();
  }
  function afterChange(ed, t) {
    drawTabsLazy(ed); status(ed); toolState(ed); renderSoon(ed); if (ed.find.open) computeMarksSoon(ed);
  }
  function drawTabsLazy(ed) {
    var cur = ed.cur, i = ed.tabs.indexOf(cur), tabEl = Q('.ed-tab[data-i="' + i + '"]', ed.el);
    if (tabEl) tabEl.classList.toggle('mod', dirty(cur)); else drawTabs(ed);
  }
  /* replace text via a function (programmatic edit, always its own undo step) */
  function transform(ed, fn, label) {
    var t = ed.cur, ta = ed.ta, v = t.text, s = ta.selectionStart, e = ta.selectionEnd, r = fn(v, s, e);
    if (!r || r[0] === v && r[1] === s && r[2] === e) return;
    pushUndo(ed, t, [s, e]); t.lastKind = 'other'; t.text = r[0]; ta.value = r[0]; ta.setSelectionRange(r[1], r[2]);
    afterChange(ed, t); setTimeout(function () { reveal(ed, ta.selectionEnd); }, 30);
  }
  function lineBounds(v, s, e) {
    var ls = v.lastIndexOf('\n', s - 1) + 1, le = e > s && v[e - 1] === '\n' ? e - 1 : e; var ne = v.indexOf('\n', le); return [ls, ne < 0 ? v.length : ne];
  }
  function undo(ed) {
    var t = ed.cur; if (!t.undo.length) return; var ta = ed.ta;
    t.redo.push({ v: t.text, s: ta.selectionStart, e: ta.selectionEnd }); var st = t.undo.pop();
    t.text = st.v; ta.value = st.v; ta.setSelectionRange(st.s, st.e); t.lastKind = 'other'; afterChange(ed, t); reveal(ed, st.e);
  }
  function redo(ed) {
    var t = ed.cur; if (!t.redo.length) return; var ta = ed.ta;
    t.undo.push({ v: t.text, s: ta.selectionStart, e: ta.selectionEnd }); var st = t.redo.pop();
    t.text = st.v; ta.value = st.v; ta.setSelectionRange(st.e, st.e); t.lastKind = 'other'; afterChange(ed, t); reveal(ed, st.e);
  }
  var indentUnit = function () { return SET.spaces ? ' '.repeat(SET.ts) : '\t'; };
  function insertText(ed, txt, selOff) {
    transform(ed, function (v, s, e) { var nv = v.slice(0, s) + txt + v.slice(e), p = s + (selOff != null ? selOff : txt.length); return [nv, p, p]; });
  }
  function indentLines(ed, out) {
    var u = indentUnit();
    transform(ed, function (v, s, e) {
      var b = lineBounds(v, s, e), blk = v.slice(b[0], b[1]), lines = blk.split('\n'), delta0 = 0, total = 0;
      var res = lines.map(function (ln, i) {
        if (!out) { total += u.length; if (i === 0) delta0 = u.length; return u + ln; }
        var m = SET.spaces || /^ /.test(ln) ? new RegExp('^ {1,' + SET.ts + '}').exec(ln) : /^\t/.exec(ln), k = m ? m[0].length : 0; total -= k; if (i === 0) delta0 = -k; return ln.slice(k);
      });
      var nb = res.join('\n'); return [v.slice(0, b[0]) + nb + v.slice(b[1]), Math.max(b[0], s + delta0), Math.max(b[0], e + total)];
    });
  }
  function toggleComment(ed) {
    var t = ed.cur, l = LANGS[t.lang] || LANGS.txt, cm = l.cm; if (!cm) return AV.toast('No comment syntax for this language');
    transform(ed, function (v, s, e) {
      if (Array.isArray(cm)) {
        var a = cm[0], b = cm[1], sel = s === e ? lineBounds(v, s, e) : [s, e], seg = v.slice(sel[0], sel[1]);
        if (seg.trim().indexOf(a) === 0 && seg.trim().slice(-b.length) === b) { var ns = seg.replace(a, '').replace(new RegExp(b.replace(/[*/]/g, '\\$&') + '(?![\\s\\S]*' + b.replace(/[*/]/g, '\\$&') + ')'), ''); return [v.slice(0, sel[0]) + ns + v.slice(sel[1]), sel[0], sel[0] + ns.length]; }
        var wr = a + ' ' + seg + ' ' + b; return [v.slice(0, sel[0]) + wr + v.slice(sel[1]), sel[0], sel[0] + wr.length];
      }
      var bd = lineBounds(v, s, e), lines = v.slice(bd[0], bd[1]).split('\n'), all = lines.every(function (x) { return !x.trim() || x.trim().indexOf(cm) === 0; });
      var out = lines.map(function (x) { if (!x.trim()) return x; if (all) { var i = x.indexOf(cm); return x.slice(0, i) + x.slice(i + cm.length).replace(/^ /, ''); } var ind = /^[ \t]*/.exec(x)[0]; return ind + cm + ' ' + x.slice(ind.length); });
      var nb = out.join('\n'); return [v.slice(0, bd[0]) + nb + v.slice(bd[1]), bd[0], bd[0] + nb.length];
    });
  }
  var LINEOPS = {
    dup: function (v, s, e) { var b = lineBounds(v, s, e), blk = v.slice(b[0], b[1]); return [v.slice(0, b[1]) + '\n' + blk + v.slice(b[1]), s + blk.length + 1, e + blk.length + 1]; },
    del: function (v, s, e) { var b = lineBounds(v, s, e), end = b[1] < v.length ? b[1] + 1 : b[1], st = b[1] >= v.length && b[0] > 0 ? b[0] - 1 : b[0]; return [v.slice(0, st) + v.slice(end), st, st]; },
    up: function (v, s, e) { var b = lineBounds(v, s, e); if (b[0] === 0) return null; var ps = v.lastIndexOf('\n', b[0] - 2) + 1, prev = v.slice(ps, b[0] - 1), blk = v.slice(b[0], b[1]); return [v.slice(0, ps) + blk + '\n' + prev + v.slice(b[1]), s - (prev.length + 1), e - (prev.length + 1)]; },
    down: function (v, s, e) { var b = lineBounds(v, s, e); if (b[1] >= v.length) return null; var ne = v.indexOf('\n', b[1] + 1), nx = v.slice(b[1] + 1, ne < 0 ? v.length : ne), blk = v.slice(b[0], b[1]); return [v.slice(0, b[0]) + nx + '\n' + blk + v.slice(ne < 0 ? v.length : ne), s + nx.length + 1, e + nx.length + 1]; },
    join: function (v, s, e) { var b = lineBounds(v, s, e); if (e === s) { var ne = v.indexOf('\n', b[1] + 1); b = [b[0], ne < 0 ? v.length : ne]; } var blk = v.slice(b[0], b[1]).replace(/\s*\n\s*/g, ' '); return [v.slice(0, b[0]) + blk + v.slice(b[1]), b[0], b[0] + blk.length]; },
    trim: function (v, s, e) { var nv = v.replace(/[ \t]+$/gm, ''); return [nv, Math.min(s, nv.length), Math.min(e, nv.length)]; },
    trimLead: function (v, s, e) { var nv = v.replace(/^[ \t]+/gm, ''); return [nv, 0, 0]; },
    blank: function (v, s, e) { var nv = v.replace(/^[ \t]*\n/gm, '').replace(/\n[ \t]*$/g, ''); return [nv, 0, 0]; },
    dedupe: function (v) { var seen = {}, nv = v.split('\n').filter(function (l) { if (seen[l]) return false; seen[l] = 1; return true; }).join('\n'); return [nv, 0, 0]; },
    rev: function (v, s, e) { var b = s === e ? [0, v.length] : lineBounds(v, s, e), nb = v.slice(b[0], b[1]).split('\n').reverse().join('\n'); return [v.slice(0, b[0]) + nb + v.slice(b[1]), b[0], b[0] + nb.length]; },
    upper: function (v, s, e) { if (s === e) return null; var m = v.slice(s, e).toUpperCase(); return [v.slice(0, s) + m + v.slice(e), s, e]; },
    lower: function (v, s, e) { if (s === e) return null; var m = v.slice(s, e).toLowerCase(); return [v.slice(0, s) + m + v.slice(e), s, e]; },
    title: function (v, s, e) { if (s === e) return null; var m = v.slice(s, e).toLowerCase().replace(/(^|[^A-Za-z0-9])([a-z])/g, function (a, b, c) { return b + c.toUpperCase(); }); return [v.slice(0, s) + m + v.slice(e), s, e]; },
    sortA: function (v, s, e) { return sortLines(v, s, e, 1); }, sortD: function (v, s, e) { return sortLines(v, s, e, -1); },
    date: function (v, s, e) { var d = new Date(), t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + d.toLocaleDateString(); return [v.slice(0, s) + t + v.slice(e), s + t.length, s + t.length]; }
  };
  function sortLines(v, s, e, dir) { var b = s === e ? [0, v.length] : lineBounds(v, s, e), nb = v.slice(b[0], b[1]).split('\n').sort(function (a, c) { return dir * a.localeCompare(c, undefined, { numeric: true }); }).join('\n'); return [v.slice(0, b[0]) + nb + v.slice(b[1]), b[0], b[0] + nb.length]; }

  /* ------------------------------------------------ bracket match ------------------------------------------------ */
  var PAIRS = { '(': ')', '[': ']', '{': '}' }, CLOSE = { ')': '(', ']': '[', '}': '{' };
  function bracket(ed) {
    var t = ed.cur, v = t.text, s = ed.ta.selectionStart, nb = null;
    if (ed.ta.selectionEnd === s && v.length < 200000) {
      var i = -1; if (PAIRS[v[s]] || CLOSE[v[s]]) i = s; else if (PAIRS[v[s - 1]] || CLOSE[v[s - 1]]) i = s - 1;
      if (i >= 0) {
        var ch = v[i], open = !!PAIRS[ch], other = open ? PAIRS[ch] : CLOSE[ch], depth = 0, step = open ? 1 : -1, lim = 30000;
        for (var j = i; j >= 0 && j < v.length && lim-- > 0; j += step) { var c = v[j]; if (c === ch) depth++; else if (c === other && --depth === 0) { nb = [Math.min(i, j), Math.max(i, j)]; break; } }
      }
    }
    var old = ed.br; if ((old && nb && old[0] === nb[0] && old[1] === nb[1]) || (!old && !nb)) return;
    ed.br = nb; renderSoon(ed);
  }

  /* ------------------------------------------------ find / replace ------------------------------------------------ */
  function buildRe(ed, global) {
    var f = ed.find, q = f.q; if (!q) return null;
    var src = f.re ? q : q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (f.word) src = '\\b(?:' + src + ')\\b';
    try { return new RegExp(src, (global === false ? '' : 'g') + (f.case ? '' : 'i') + 'm'); } catch (e) { return false; }
  }
  var markT = 0;
  function computeMarksSoon(ed) { clearTimeout(markT); markT = setTimeout(function () { computeMarks(ed); }, 220); }
  function computeMarks(ed, keep) {
    var t = ed.cur, re = buildRe(ed), marks = [], msg = Q('.msg', ed.el); msg.classList.remove('er');
    if (re === false) { t.marks = []; t.mi = -1; msg.textContent = 'Invalid regular expression'; msg.classList.add('er'); renderSoon(ed); return; }
    if (re && ed.find.open) {
      var m, text = t.text, n = 0; re.lastIndex = 0;
      while ((m = re.exec(text)) && n < 5000) { if (!m[0].length) { re.lastIndex++; continue; } marks.push({ s: m.index, e: m.index + m[0].length }); n++; }
    }
    t.marks = marks;
    var sel = ed.ta.selectionStart; t.mi = marks.findIndex(function (k) { return k.s === sel && k.e === ed.ta.selectionEnd; });
    msg.textContent = re ? (marks.length ? marks.length + (marks.length >= 5000 ? '+' : '') + ' match' + (marks.length === 1 ? '' : 'es') : 'No matches') : '';
    renderSoon(ed);
  }
  function findStep(ed, dir) {
    var t = ed.cur, re = buildRe(ed); if (!re) { openFind(ed); return false; }
    computeMarks(ed); var ms = t.marks; if (!ms.length) return false;
    var ta = ed.ta, from = dir > 0 ? ta.selectionEnd : ta.selectionStart, idx = -1, i;
    if (dir > 0) { for (i = 0; i < ms.length; i++) if (ms[i].s >= from) { idx = i; break; } if (idx < 0 && ed.find.wrap) idx = 0; }
    else { for (i = ms.length - 1; i >= 0; i--) if (ms[i].e <= from && !(ms[i].s === ta.selectionStart && ms[i].e === ta.selectionEnd)) { idx = i; break; } if (idx < 0 && ed.find.wrap) idx = ms.length - 1; }
    if (idx < 0) { Q('.msg', ed.el).textContent = 'Reached the ' + (dir > 0 ? 'end' : 'beginning'); return false; }
    t.mi = idx; ta.setSelectionRange(ms[idx].s, ms[idx].e); renderSoon(ed); status(ed); paintCur(ed); reveal(ed, ms[idx].s, true);
    Q('.msg', ed.el).textContent = 'Match ' + (idx + 1) + ' of ' + ms.length;
    return true;
  }
  function replaceOne(ed) {
    var t = ed.cur, ta = ed.ta, re = buildRe(ed, false); if (!re) return;
    var s = ta.selectionStart, e = ta.selectionEnd, seg = t.text.slice(s, e), full = new RegExp('^(?:' + re.source + ')$', re.flags.replace('g', ''));
    if (e > s && full.test(seg)) {
      var rep = ed.find.re ? seg.replace(re, unesc(ed.find.r)) : ed.find.r;
      transform(ed, function (v) { return [v.slice(0, s) + rep + v.slice(e), s + rep.length, s + rep.length]; });
      computeMarks(ed);
    }
    findStep(ed, 1);
  }
  var unesc = function (r) { return r.replace(/\\n/g, '\n').replace(/\\t/g, '\t'); };
  function replaceAll(ed) {
    var t = ed.cur, re = buildRe(ed); if (!re) return AV.toast('Enter text to find'); var n = 0, f = ed.find;
    var out = t.text.replace(re, function () { n++; if (!f.re) return f.r; var a = [].slice.call(arguments), m = a[0]; return m.replace(new RegExp(re.source, re.flags.replace('g', '')), unesc(f.r)); });
    if (!n) { Q('.msg', ed.el).textContent = 'No matches'; return; }
    transform(ed, function (v, s, e) { return [out, Math.min(s, out.length), Math.min(s, out.length)]; });
    computeMarks(ed); Q('.msg', ed.el).textContent = n + ' occurrence' + (n === 1 ? '' : 's') + ' replaced';
  }
  function openFind(ed, rep) {
    var f = Q('.ed-find', ed.el); f.hidden = false; ed.find.open = true; Q('.rr', f).hidden = !rep; ed.find.rep = !!rep;
    var sel = ed.ta.value.slice(ed.ta.selectionStart, ed.ta.selectionEnd);
    var inp = Q('.f', f); if (sel && sel.indexOf('\n') < 0 && sel.length < 200) { inp.value = sel; ed.find.q = sel; }
    ['case', 'word', 're', 'wrap'].forEach(function (k) { Q('[data-o=' + k + ']', f).classList.toggle('on', !!ed.find[k]); });
    computeMarks(ed); inp.focus(); inp.select();
  }
  function closeFind(ed) { Q('.ed-find', ed.el).hidden = true; ed.find.open = false; if (ed.cur) { ed.cur.marks = []; ed.cur.mi = -1; renderSoon(ed); } ed.ta.focus(); }
  async function gotoLine(ed) {
    var v = await AV.dialog({ t: 'Go to line', b: 'Line 1 – ' + (ed.nl || 1) + '   ·   length ' + ed.cur.text.length, inp: String(lineIdx(ed, ed.ta.selectionStart) + 1), type: 'number', ok: 'Go', chk: function (v) { return !(+v >= 1) ? 'Enter a line number' : ''; } });
    if (!v) return; var li = Math.min(ed.nl - 1, +v - 1), p = ed.lineStarts[li]; ed.ta.focus(); ed.ta.setSelectionRange(p, p); paintCur(ed); status(ed); reveal(ed, p, true);
  }

  /* ------------------------------------------------ files ------------------------------------------------ */
  function catFor(name) {
    var probe = { name: name, type: AV.mimeFor(name) }, c = 'txt'; try { c = fcat(probe); } catch (e) {}
    if (c === 'txt' || c === 'code') return null;
    return langFor(name) === 'txt' ? 'txt' : 'code';
  }
  async function saveTab(ed, t, asNew) {
    try {
      var bytes = encode(t), rec = t.rec;
      if (rec && !asNew) { var fresh = await AV.rec(rec.id); if (fresh) { await AV.updateRec(fresh, bytes); t.rec = fresh; } else { t.rec = null; return saveTab(ed, t, false); } }
      else {
        AV.nameCache = await AV.records();
        var n0 = t.name, dot = n0.lastIndexOf('.');
        var name = await AV.dialog({ t: asNew ? 'Save as' : 'Save', inp: n0, ok: 'Save', sel: [0, dot > 0 ? dot : n0.length], chk: function (v) { return AV.validName(v) || (AV.nameCache.some(function (x) { return x.name.toLowerCase() === v.toLowerCase() && (!t.rec || x.id !== t.rec.id); }) ? 'A file with this name already exists' : ''); } });
        if (typeof name !== 'string') return false;
        var r = await AV.createRec(name, bytes, AV.mimeFor(name), ed.kind && fcat({ name: name, type: AV.mimeFor(name) }) !== ed.kind && /^(txt|code)$/.test(ed.kind) ? ed.kind : catFor(name));
        t.rec = r; t.name = name; if (!t.langSet) t.lang = langFor(name);
      }
      t.saved = t.text; drawTabs(ed); status(ed); renderSoon(ed); AV.toast('Saved “' + t.name + '”'); return true;
    } catch (e) { console.error(e); AV.toast('Couldn’t save: ' + (e && e.message || e)); return false; }
  }
  async function pickFile(ed) {
    var all = (await AV.records()).filter(function (f) { return AV.kind(f) === 'text'; }).sort(function (a, b) { return (b.edited || b.id) - (a.edited || a.id); });
    if (!all.length) return AV.toast('No text or code files in the vault yet');
    AV.sheet('Open from vault', all.length + ' text & code files', all.slice(0, 60).map(function (f) { return { i: 'file', t: f.name, k: AV.fmtSize(f.size || 0), fn: function () { openRec(ed, f); } }; }));
  }
  async function openRec(ed, f) {
    var ex = ed.tabs.find(function (t) { return t.rec && String(t.rec.id) === String(f.id); }); if (ex) return switchTab(ed, ex);
    var d = decode(await AV.bytes(f)); addTab(ed, mkTab({ rec: f, name: f.name, text: d.text, enc: d.enc, eol: d.eol }));
    if (d.text.length > 300000) AV.toast('Large file: syntax highlighting is off');
  }
  function newTab(ed) { addTab(ed, mkTab({ name: 'new ' + (++untitled) + '.txt', lang: 'txt' })); ed.ta.focus(); }

  /* ------------------------------------------------ menus ------------------------------------------------ */
  function menuItems(ed, which) {
    var t = ed.cur, ln = function (k) { return function () { transform(ed, LINEOPS[k]); }; };
    var tg = function (k, after) { return function () { SET[k] = !SET[k]; saveSet(); after && after(); }; };
    var fileA = AV.fileActions(t.rec || { name: t.name }, {});
    switch (which) {
      case 'file': return [
        { t: 'New', k: 'Ctrl+N', fn: function () { newTab(ed); } }, { t: 'Open from vault…', fn: function () { pickFile(ed); } }, '-',
        { t: 'Save', k: 'Ctrl+S', fn: function () { saveTab(ed, t); } }, { t: 'Save as…', k: 'Ctrl+Shift+S', fn: function () { saveTab(ed, t, true); } },
        { t: 'Save all', k: 'Ctrl+Alt+S', fn: async function () { for (var i = 0; i < ed.tabs.length; i++) if (dirty(ed.tabs[i])) await saveTab(ed, ed.tabs[i]); } }, '-',
        { t: 'Rename…', dis: !t.rec, fn: async function () { var n0 = t.name, dot = n0.lastIndexOf('.'), v = await AV.dialog({ t: 'Rename', inp: n0, ok: 'OK', sel: [0, dot > 0 ? dot : n0.length], chk: AV.validName }); if (typeof v !== 'string' || v === n0) return; var fr = await AV.rec(t.rec.id); if (fr) { fr.name = v; fr.edited = Date.now(); await svf(fr); AV.refresh(); t.rec = fr; } t.name = v; if (!t.langSet) t.lang = langFor(v); drawTabs(ed); status(ed); renderSoon(ed); } },
        { t: 'Reload from vault', dis: !t.rec, fn: async function () { if (dirty(t) && !(await AV.dialog({ t: 'Reload?', b: 'Unsaved changes will be lost.', ok: 'Reload', d: 1 }))) return; var fr = await AV.rec(t.rec.id); if (!fr) return; var d = decode(await AV.bytes(fr)); t.rec = fr; t.text = t.saved = d.text; t.enc = d.enc; t.eol = d.eol; t.undo = []; t.redo = []; ed.ta.value = d.text; render(ed); drawTabs(ed); status(ed); toolState(ed); } }, '-',
        { t: 'Save to device', fn: function () { AV.saveBlob(t.name, new Blob([encode(t)], { type: AV.mimeFor(t.name) })); } },
        { t: 'Share', fn: function () { AV.share(t.name, new Blob([encode(t)], { type: AV.mimeFor(t.name) })); } },
        { t: 'File details', dis: !t.rec, fn: function () { AV.info(t.rec); } }, '-',
        { t: 'Close', k: 'Ctrl+W', fn: function () { closeTab(ed, t); } }, { t: 'Close all', fn: async function () { while (ed.tabs.length && ED === ed) { if (!(await closeTab(ed, ed.tabs[0]))) break; } } },
        { t: 'Exit editor', fn: function () { requestExit(); } }
      ];
      case 'edit': return [
        { t: 'Undo', k: 'Ctrl+Z', dis: !t.undo.length, fn: function () { undo(ed); } }, { t: 'Redo', k: 'Ctrl+Y', dis: !t.redo.length, fn: function () { redo(ed); } }, '-',
        { t: 'Cut', k: 'Ctrl+X', fn: function () { act(ed, 'cut'); } }, { t: 'Copy', k: 'Ctrl+C', fn: function () { act(ed, 'copy'); } }, { t: 'Paste', k: 'Ctrl+V', fn: function () { act(ed, 'paste'); } },
        { t: 'Select all', k: 'Ctrl+A', fn: function () { ed.ta.focus(); ed.ta.select(); status(ed); } }, '-',
        { t: 'Indent', k: 'Tab', fn: function () { indentLines(ed, false); } }, { t: 'Outdent', k: 'Shift+Tab', fn: function () { indentLines(ed, true); } },
        { t: 'Toggle comment', k: 'Ctrl+/', fn: function () { toggleComment(ed); } }, '-',
        { t: 'Duplicate line', k: 'Ctrl+D', fn: ln('dup') }, { t: 'Delete line', k: 'Ctrl+L', fn: ln('del') }, { t: 'Move line up', k: 'Alt+↑', fn: ln('up') }, { t: 'Move line down', k: 'Alt+↓', fn: ln('down') }, { t: 'Join lines', k: 'Ctrl+J', fn: ln('join') }, '-',
        { t: 'UPPERCASE', k: 'Ctrl+Shift+U', fn: ln('upper') }, { t: 'lowercase', k: 'Ctrl+U', fn: ln('lower') }, { t: 'Title Case', fn: ln('title') }, '-',
        { t: 'Sort lines A → Z', fn: ln('sortA') }, { t: 'Sort lines Z → A', fn: ln('sortD') }, { t: 'Reverse line order', fn: ln('rev') }, { t: 'Remove duplicate lines', fn: ln('dedupe') }, { t: 'Remove empty lines', fn: ln('blank') }, { t: 'Trim trailing space', fn: ln('trim') }, { t: 'Trim leading space', fn: ln('trimLead') }, '-',
        { t: 'Insert date & time', k: 'F5', fn: ln('date') }, '-',
        { t: 'EOL → Windows (CR LF)', on: t.eol === '\r\n', fn: function () { setEol(ed, '\r\n'); } }, { t: 'EOL → Unix (LF)', on: t.eol === '\n', fn: function () { setEol(ed, '\n'); } }, { t: 'EOL → Macintosh (CR)', on: t.eol === '\r', fn: function () { setEol(ed, '\r'); } }
      ];
      case 'search': return [
        { t: 'Find…', k: 'Ctrl+F', fn: function () { openFind(ed, false); } }, { t: 'Replace…', k: 'Ctrl+H', fn: function () { openFind(ed, true); } }, '-',
        { t: 'Find next', k: 'F3', fn: function () { findStep(ed, 1); } }, { t: 'Find previous', k: 'Shift+F3', fn: function () { findStep(ed, -1); } }, '-',
        { t: 'Go to line…', k: 'Ctrl+G', fn: function () { gotoLine(ed); } }, { t: 'Go to start', fn: function () { ed.ta.setSelectionRange(0, 0); ed.sc.scrollTop = 0; paintCur(ed); status(ed); } }, { t: 'Go to end', fn: function () { var n = t.text.length; ed.ta.setSelectionRange(n, n); paintCur(ed); status(ed); reveal(ed, n, true); } }
      ];
      case 'view': return [
        { t: 'Word wrap', on: SET.wrap, fn: tg('wrap', function () { applyView(ed); }) }, { t: 'Show line numbers', on: SET.ln, fn: tg('ln', function () { applyView(ed); }) },
        { t: 'Show whitespace', on: SET.ws, fn: tg('ws', function () { applyView(ed); }) }, { t: 'Show end of line', on: SET.eol, fn: tg('eol', function () { applyView(ed); }) },
        { t: 'Highlight current line', on: SET.cl, fn: tg('cl', function () { applyView(ed); }) }, { t: 'Syntax highlighting', on: SET.hl, fn: tg('hl', function () { renderSoon(ed); saveSet(); }) }, '-',
        { t: 'Zoom in', k: 'Ctrl++', fn: function () { zoom(ed, 1); } }, { t: 'Zoom out', k: 'Ctrl+-', fn: function () { zoom(ed, -1); } }, { t: 'Restore default zoom', k: 'Ctrl+0', fn: function () { SET.fs = 14; saveSet(); applyFont(ed); render(ed); } }, '-',
        { t: 'Theme: match app', on: SET.theme === 'auto', fn: function () { setTheme(ed, 'auto'); } }, { t: 'Theme: Default (light)', on: SET.theme === 'light', fn: function () { setTheme(ed, 'light'); } }, { t: 'Theme: Dark', on: SET.theme === 'dark', fn: function () { setTheme(ed, 'dark'); } }, '-',
        { t: 'Tab size: 2', on: SET.ts === 2, fn: function () { setTs(ed, 2); } }, { t: 'Tab size: 4', on: SET.ts === 4, fn: function () { setTs(ed, 4); } }, { t: 'Tab size: 8', on: SET.ts === 8, fn: function () { setTs(ed, 8); } },
        { t: 'Replace tab by spaces', on: SET.spaces, fn: tg('spaces') }, { t: 'Auto-close brackets & quotes', on: SET.close, fn: tg('close') }, { t: 'Show extra keys on phones', on: SET.keys, fn: tg('keys', function () { keysState(ed); }) }
      ];
      case 'enc': return Object.keys(ENCS).map(function (k) { return { t: 'Encoding: ' + ENCS[k], on: t.enc === k, fn: function () { if (t.enc !== k) { t.enc = k; t.saved = t.saved + '\u0000'; /* force "modified" so the new encoding gets saved */ drawTabs(ed); status(ed); } } }; });
      case 'lang': return Object.keys(LANGS).map(function (k) { return { t: LANGS[k].name, on: t.lang === k, fn: function () { t.lang = k; t.langSet = true; status(ed); render(ed); } }; });
    }
    return [];
  }
  function setEol(ed, v) { var t = ed.cur; if (t.eol === v) return; t.eol = v; t.saved = t.saved + '\u0000'; ed.rows && renderSoon(ed); drawTabs(ed); status(ed); AV.toast('Line endings: ' + EOLS[v]); }
  function setTheme(ed, v) { SET.theme = v; saveSet(); var d = isDarkEd(); ed.L.el.classList.toggle('dk', d); ed.L.el.classList.toggle('lt', !d); }
  function setTs(ed, n) { SET.ts = n; saveSet(); applyFont(ed); render(ed); }
  function zoom(ed, d) { SET.fs = AV.clamp(SET.fs + d, 8, 40); saveSet(); applyFont(ed); render(ed); }
  function applyView(ed) {
    var c = ed.L.el.classList; c.toggle('wrap', SET.wrap); c.toggle('nonum', !SET.ln); c.toggle('cl', SET.cl); c.toggle('ws', SET.ws); c.toggle('eol', SET.eol);
    saveSet(); render(ed); toolState(ed);
  }
  function act(ed, what) {
    var ta = ed.ta; ta.focus();
    if (what === 'paste') {
      if (navigator.clipboard && navigator.clipboard.readText) navigator.clipboard.readText().then(function (x) { if (x) insertText(ed, x); }).catch(function () { AV.toast('Long-press in the editor and choose Paste'); });
      else AV.toast('Long-press in the editor and choose Paste');
      return;
    }
    if (what === 'copy' || what === 'cut') {
      if (ta.selectionStart === ta.selectionEnd) { var b = lineBounds(ta.value, ta.selectionStart, ta.selectionEnd); ta.setSelectionRange(b[0], Math.min(ta.value.length, b[1] + 1)); }
      var txt = ta.value.slice(ta.selectionStart, ta.selectionEnd), done = false;
      try { done = D.execCommand(what); } catch (e) {}
      if (!done && navigator.clipboard) { navigator.clipboard.writeText(txt).catch(function () {}); if (what === 'cut') transform(ed, function (v, s, e) { return [v.slice(0, s) + v.slice(e), s, s]; }); }
      if (what === 'copy') AV.toast('Copied');
    }
  }

  /* ------------------------------------------------ extra keys (phones) ------------------------------------------------ */
  var KEYS = ['Tab', '{', '}', '(', ')', '[', ']', '<', '>', ';', ':', '"', "'", '=', '/', '\\', '_', '#', '$', '&', '|', '!', '?', '*', '+', '-', '%', '@', '`', '~', '^', '←', '→', '↑', '↓', 'Home', 'End'];
  function keysState(ed) {
    var k = Q('.ed-keys', ed.el), on = SET.keys && AV.touch() && D.activeElement === ed.ta; k.hidden = !on;
  }
  function pressKey(ed, k) {
    var ta = ed.ta, v = ta.value, s = ta.selectionStart, e = ta.selectionEnd, li, col;
    if (k === 'Tab') { if (s !== e && v.slice(s, e).indexOf('\n') >= 0) indentLines(ed, false); else insertText(ed, indentUnit()); return; }
    if (k === '←' || k === '→') { var p = k === '←' ? Math.max(0, (s !== e ? s : s - 1)) : Math.min(v.length, (s !== e ? e : e + 1)); ta.setSelectionRange(p, p); }
    else if (k === '↑' || k === '↓') {
      li = lineIdx(ed, s); col = s - ed.lineStarts[li]; var ni = li + (k === '↑' ? -1 : 1); if (ni < 0 || ni >= ed.nl) return;
      var ls = ed.lineStarts[ni], le = ni + 1 < ed.nl ? ed.lineStarts[ni + 1] - 1 : v.length, p2 = Math.min(ls + col, le); ta.setSelectionRange(p2, p2);
    }
    else if (k === 'Home' || k === 'End') { li = lineIdx(ed, s); var p3 = k === 'Home' ? ed.lineStarts[li] : (li + 1 < ed.nl ? ed.lineStarts[li + 1] - 1 : v.length); ta.setSelectionRange(p3, p3); }
    else { typeChar(ed, k); return; }
    paintCur(ed); status(ed); reveal(ed, ta.selectionStart); bracket(ed);
  }
  function typeChar(ed, ch) {
    var ta = ed.ta, v = ta.value, s = ta.selectionStart, e = ta.selectionEnd, t = ed.cur;
    var now = Date.now(), merge = t.lastKind === 'type' && now - t.lastT < 800 && s === e && t.undo.length;
    if (!merge) pushUndo(ed, t, [s, e]);
    t.lastKind = 'type'; t.lastT = now; t.text = v.slice(0, s) + ch + v.slice(e); ta.value = t.text; ta.setSelectionRange(s + ch.length, s + ch.length);
    afterChange(ed, t); paintCur(ed); reveal(ed, s + 1);
  }

  /* ------------------------------------------------ wiring ------------------------------------------------ */
  function wire(ed) {
    var el = ed.el, ta = ed.ta, sc = ed.sc;
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-m],[data-t],[data-s],[data-f],[data-o],[data-x],.ed-tab,[data-a]'); if (!b || !ed.cur) return;
      if (b.dataset.x != null) { e.stopPropagation(); return closeTab(ed, ed.tabs[+b.dataset.x]); }
      if (b.classList.contains('ed-tab')) { var t0 = ed.tabs[+b.dataset.i]; if (t0 !== ed.cur) switchTab(ed, t0); return; }
      if (b.dataset.a === 'new') return newTab(ed);
      if (b.dataset.m) { if (b.dataset.m === 'exit') return requestExit(); b.classList.add('on'); var m = AV.menu(b, menuItems(ed, b.dataset.m), { dark: ed.L.el.classList.contains('dk') }); var oc = m.opt.onClose; m.opt.onClose = function () { b.classList.remove('on'); }; return; }
      if (b.dataset.t) return tool(ed, b.dataset.t);
      if (b.dataset.o) { var k = b.dataset.o; ed.find[k] = !ed.find[k]; b.classList.toggle('on', !!ed.find[k]); return computeMarks(ed); }
      if (b.dataset.f) { var f = b.dataset.f; if (f === 'next') findStep(ed, 1); else if (f === 'prev') findStep(ed, -1); else if (f === 'x') closeFind(ed); else if (f === 'rep') replaceOne(ed); else if (f === 'all') replaceAll(ed); else if (f === 'cnt') { computeMarks(ed); } return; }
      if (b.dataset.s) {
        var s = b.dataset.s;
        if (s === 'pos') gotoLine(ed);
        else if (s === 'eol') AV.menu(b, ['\r\n', '\n', '\r'].map(function (v) { return { t: EOLS[v], on: ed.cur.eol === v, fn: function () { setEol(ed, v); } }; }), { dark: el.classList.contains('dk') });
        else if (s === 'enc') AV.menu(b, menuItems(ed, 'enc'), { dark: el.classList.contains('dk') });
        else if (s === 'lang') AV.menu(b, menuItems(ed, 'lang'), { dark: el.classList.contains('dk') });
      }
    });
    /* find inputs */
    var fi = Q('.f', el), ri = Q('.rp', el);
    fi.addEventListener('input', function () { ed.find.q = fi.value; computeMarks(ed); });
    ri.addEventListener('input', function () { ed.find.r = ri.value; });
    fi.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); findStep(ed, e.shiftKey ? -1 : 1); } else if (e.key === 'Escape') { e.preventDefault(); closeFind(ed); } });
    ri.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); replaceOne(ed); } else if (e.key === 'Escape') { e.preventDefault(); closeFind(ed); } });
    /* extra keys */
    var kb = Q('.ed-keys', el); kb.innerHTML = KEYS.map(function (k) { return '<button data-k="' + esc(k) + '">' + esc(k) + '</button>'; }).join('');
    kb.addEventListener('pointerdown', function (e) { var b = e.target.closest('[data-k]'); if (!b) return; e.preventDefault(); pressKey(ed, b.dataset.k); });
    ta.addEventListener('focus', function () { keysState(ed); }); ta.addEventListener('blur', function () { setTimeout(function () { keysState(ed); }, 120); });
    /* text input */
    ta.addEventListener('beforeinput', function (e) {
      var t = ed.cur, it = e.inputType;
      if (it === 'historyUndo') { e.preventDefault(); return undo(ed); } if (it === 'historyRedo') { e.preventDefault(); return redo(ed); }
      var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
      if (it === 'insertLineBreak' || it === 'insertParagraph') {
        e.preventDefault();
        var ls = v.lastIndexOf('\n', s - 1) + 1, line = v.slice(ls, s), ind = /^[ \t]*/.exec(line)[0], trimmed = line.replace(/\s+$/, ''), last = trimmed.slice(-1), nx = v[en];
        var extra = (/[{(\[]$/.test(last) || (last === ':' && t.lang === 'py')) ? indentUnit() : '';
        if (PAIRS[last] && nx === PAIRS[last] && s === en && trimmed.length === line.length) { var ins = '\n' + ind + indentUnit() + '\n' + ind; return transform(ed, function (v2) { var p = s + 1 + ind.length + indentUnit().length; return [v2.slice(0, s) + ins + v2.slice(en), p, p]; }); }
        return insertText(ed, '\n' + ind + extra);
      }
      if (it === 'insertText' && e.data && e.data.length === 1 && SET.close) {
        var ch = e.data, closeCh = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'", '`': '`' }[ch];
        if (s === en && (ch === ')' || ch === ']' || ch === '}' || ch === '"' || ch === "'" || ch === '`') && v[s] === ch) { e.preventDefault(); ta.setSelectionRange(s + 1, s + 1); paintCur(ed); status(ed); return; }
        if (closeCh) {
          var prev = v[s - 1] || '', quote = ch === '"' || ch === "'" || ch === '`';
          if (s !== en) { e.preventDefault(); var sel = v.slice(s, en); return transform(ed, function (v2) { return [v2.slice(0, s) + ch + sel + closeCh + v2.slice(en), s + 1, s + 1 + sel.length]; }); }
          if (quote && (/\w/.test(prev) || /\w/.test(v[s] || ''))) return;
          if (!quote && v[s] && /\w/.test(v[s])) return;
          e.preventDefault(); return transform(ed, function (v2) { return [v2.slice(0, s) + ch + closeCh + v2.slice(en), s + 1, s + 1]; });
        }
      }
    });
    ta.addEventListener('input', function (e) {
      var t = ed.cur, v = ta.value; if (v === t.text) return;
      var it = e.inputType || '', kind = /^insertText|insertCompositionText/.test(it) ? 'type' : /^delete(Content|Word)Backward|deleteContentForward/.test(it) ? 'del' : 'other', now = Date.now();
      var merge = kind !== 'other' && t.lastKind === kind && now - t.lastT < 800 && t.undo.length && t.redo.length === 0;
      if (!merge) { var os = t.sel || [0, 0]; t.undo.push({ v: t.text, s: os[0], e: os[1] }); t.redo.length = 0; while (t.undo.length > 300 || (t.undo.length > 2 && histSize(t) > MAXH)) t.undo.shift(); }
      t.lastKind = kind; t.lastT = now; t.text = v; afterChange(ed, t); paintCur(ed); bracket(ed);
      setTimeout(function () { reveal(ed, ta.selectionStart); }, 0);
    });
    D.addEventListener('selectionchange', function sel() {
      if (!D.body.contains(el)) return D.removeEventListener('selectionchange', sel);
      if (D.activeElement !== ta || !ed.cur) return;
      ed.cur.sel = [ta.selectionStart, ta.selectionEnd]; paintCur(ed); status(ed); bracket(ed);
    });
    ta.addEventListener('keydown', function (e) { keydown(ed, e); });
    el.addEventListener('keydown', function (e) { if (e.target !== ta && !/INPUT/.test(e.target.tagName)) keydown(ed, e); });
    /* pinch zoom + tap below text focuses the editor */
    var pz = null;
    sc.addEventListener('touchstart', function (e) { if (e.touches.length === 2) pz = { d: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY), fs: SET.fs }; }, { passive: true });
    sc.addEventListener('touchmove', function (e) { if (pz && e.touches.length === 2) { e.preventDefault(); var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY), n = AV.clamp(Math.round(pz.fs * d / pz.d), 8, 40); if (n !== SET.fs) { SET.fs = n; applyFont(ed); render(ed); } } }, { passive: false });
    sc.addEventListener('touchend', function (e) { if (pz && e.touches.length < 2) { pz = null; saveSet(); } }, { passive: true });
    sc.addEventListener('wheel', function (e) { if (e.ctrlKey) { e.preventDefault(); zoom(ed, e.deltaY < 0 ? 1 : -1); } }, { passive: false });
    sc.addEventListener('mousedown', function (e) { if (e.target === sc || e.target === ed.inn) setTimeout(function () { ta.focus(); }, 0); });
    new (window.ResizeObserver || function () { this.observe = function () {}; })(function () { if (ed.cur && ed.rows.children.length) { applyFont(ed); } }).observe(sc);
  }
  function tool(ed, a) {
    var t = ed.cur;
    ({
      new: function () { newTab(ed); }, open: function () { pickFile(ed); }, save: function () { saveTab(ed, t); }, cut: function () { act(ed, 'cut'); }, copy: function () { act(ed, 'copy'); }, paste: function () { act(ed, 'paste'); },
      undo: function () { undo(ed); }, redo: function () { redo(ed); }, find: function () { openFind(ed, false); }, replace: function () { openFind(ed, true); },
      zin: function () { zoom(ed, 1); }, zout: function () { zoom(ed, -1); }, wrap: function () { SET.wrap = !SET.wrap; applyView(ed); },
      sym: function () { var on = !(SET.ws || SET.eol); SET.ws = SET.eol = on; applyView(ed); },
      share: function () { AV.share(t.name, new Blob([encode(t)], { type: AV.mimeFor(t.name) })); }
    })[a]();
  }
  function keydown(ed, e) {
    var k = e.key, c = e.ctrlKey || e.metaKey, t = ed.cur, ta = ed.ta, l = k.length === 1 ? k.toLowerCase() : k;
    if (!t || AV.stack[AV.stack.length - 1] !== ed.L) return;
    var h = true;
    if (c && !e.altKey) {
      if (l === 's') e.shiftKey ? saveTab(ed, t, true) : saveTab(ed, t);
      else if (l === 'f') openFind(ed, false); else if (l === 'h') openFind(ed, true); else if (l === 'g') gotoLine(ed);
      else if (l === 'n') newTab(ed); else if (l === 'w') closeTab(ed, t);
      else if (l === 'z') e.shiftKey ? redo(ed) : undo(ed); else if (l === 'y') redo(ed);
      else if (l === 'd') transform(ed, LINEOPS.dup); else if (l === 'l') transform(ed, LINEOPS.del); else if (l === 'j') transform(ed, LINEOPS.join);
      else if (l === 'u') transform(ed, e.shiftKey ? LINEOPS.upper : LINEOPS.lower);
      else if (k === '/') toggleComment(ed);
      else if (k === '+' || k === '=') zoom(ed, 1); else if (k === '-') zoom(ed, -1); else if (k === '0') { SET.fs = 14; saveSet(); applyFont(ed); render(ed); }
      else if (k === 'Tab') { var i = ed.tabs.indexOf(t); switchTab(ed, ed.tabs[(i + (e.shiftKey ? -1 : 1) + ed.tabs.length) % ed.tabs.length]); }
      else h = false;
    } else if (c && e.altKey && l === 's') { ed.tabs.forEach(function (x) { if (dirty(x)) saveTab(ed, x); }); }
    else if (e.altKey && !c && (k === 'ArrowUp' || k === 'ArrowDown')) transform(ed, k === 'ArrowUp' ? LINEOPS.up : LINEOPS.down);
    else if (k === 'F3') findStep(ed, e.shiftKey ? -1 : 1);
    else if (k === 'F5') transform(ed, LINEOPS.date);
    else if (k === 'Escape') { if (ed.find.open) closeFind(ed); else h = false; }
    else if (k === 'Tab' && e.target === ta && !c) { if (e.shiftKey) indentLines(ed, true); else if (ta.selectionStart !== ta.selectionEnd && ta.value.slice(ta.selectionStart, ta.selectionEnd).indexOf('\n') >= 0) indentLines(ed, false); else insertText(ed, indentUnit()); }
    else h = false;
    if (h) { e.preventDefault(); e.stopPropagation(); }
  }

  /* ------------------------------------------------ public API ------------------------------------------------ */
  AV.editor = {
    open: async function (f) {
      var ed = openEditor(); if (f && f.cat) ed.kind = f.cat; else { try { var k0 = fcat(f); if (k0 === 'txt' || k0 === 'code') ed.kind = k0; } catch (e) {} }
      try {
        var ex = ed.tabs.find(function (t) { return t.rec && String(t.rec.id) === String(f.id); });
        if (ex) return switchTab(ed, ex);
        var d = decode(await AV.bytes(f));
        addTab(ed, mkTab({ rec: f, name: f.name, text: d.text, enc: d.enc, eol: d.eol }));
        if (d.text.length > 300000) AV.toast('Large file: syntax highlighting is off');
        if (AV.touch() === false) ed.ta.focus();
      } catch (e) { console.error(e); AV.toast('Couldn’t open ' + f.name); if (!ed.tabs.length) ed.L.close(); }
    },
    /* "New text file" / "New code file" from the vault "+" button: creates the file in the vault right away, then edits it */
    create: async function (kind) {
      AV.nameCache = await AV.records();
      var codeLangs = ['js', 'ts', 'py', 'html', 'css', 'json', 'java', 'kt', 'c', 'cpp', 'cs', 'go', 'rs', 'swift', 'php', 'rb', 'sql', 'sh', 'xml', 'yaml', 'md'];
      var extOf = { js: 'js', ts: 'ts', py: 'py', html: 'html', css: 'css', json: 'json', java: 'java', kt: 'kt', c: 'c', cpp: 'cpp', cs: 'cs', go: 'go', rs: 'rs', swift: 'swift', php: 'php', rb: 'rb', sql: 'sql', sh: 'sh', xml: 'xml', yaml: 'yml', md: 'md' };
      var code = kind === 'code', first = code ? 'js' : 'txt';
      var base = code ? 'untitled' : 'Untitled', def = await AV.uniqueName(base, extOf[first] || 'txt');
      var extra = code ? '<label class="av-lb">Language</label><select id="avlang">' + codeLangs.map(function (k) { return '<option value="' + k + '">' + LANGS[k].name + ' (.' + extOf[k] + ')</option>'; }).join('') + '</select>' : '';
      var p = AV.dialog({ t: code ? 'New code file' : 'New text file', inp: def, ok: 'Create', extra: extra, sel: [0, def.lastIndexOf('.')], getExtra: function (root) { var s = Q('#avlang', root); return s ? s.value : null; },
        chk: function (v) { return AV.validName(v) || (AV.nameCache.some(function (x) { return x.name.toLowerCase() === v.toLowerCase(); }) ? 'A file with this name already exists' : ''); } });
      var top = AV.stack[AV.stack.length - 1], sel = top && Q('#avlang', top.el), inp = top && Q('input', top.el);
      if (sel && inp) sel.onchange = async function () { var cur = inp.value, dot = cur.lastIndexOf('.'), stem = dot > 0 ? cur.slice(0, dot) : cur; inp.value = stem + '.' + extOf[sel.value]; };
      var r = await p; if (r == null) return;
      var name = r.value, ext = AV.ext(name);
      if (!ext) name += '.' + (code ? extOf[r.extra] || 'txt' : 'txt');
      /* the file always lands in the category it was created from (Text or Codes), whatever the extension */
      var kcat = null; try { kcat = fcat({ name: name, type: AV.mimeFor(name) }) === (code ? 'code' : 'txt') ? null : (code ? 'code' : 'txt'); } catch (e) {}
      var rec = await AV.createRec(name, new Uint8Array(0), AV.mimeFor(name), kcat);
      AV.toast('Created “' + name + '”');
      AV.editor.open(rec);
    },
    isOpen: function () { return !!(ED && !ED.L.closed); }
  };
})();
