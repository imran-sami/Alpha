/* ===================================================================================================================
   ALPHA viewers, part 3: Google-Slides-style presentations.
   - Any .pptx opens in a Slides-style viewer (filmstrip, slide canvas, Slideshow with laser pointer / auto-advance,
     speaker notes) using the app's existing OFX.pptx renderer.
   - "New presentation" creates a real .pptx in the vault. Decks made in ALPHA open in the Slides-style EDITOR:
     filmstrip, editable title / body boxes, layouts, themes, add / duplicate / delete / reorder slides, undo / redo,
     autosave ("Saved"), Slideshow, Save to device (.pptx that opens in PowerPoint / Google Slides).
   =================================================================================================================== */
(function () {
  'use strict';
  var AV = window.AV; if (!AV) return;
  var D = document, Q = AV.Q, QA = AV.QA, esc = AV.esc;

  /* ------------------------------------------------ zip writer (stored) ------------------------------------------------ */
  var CRCT = null;
  function crc32(u) {
    if (!CRCT) { CRCT = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; CRCT[n] = c >>> 0; } }
    var x = -1; for (var i = 0; i < u.length; i++) x = CRCT[(x ^ u[i]) & 255] ^ (x >>> 8); return (x ^ -1) >>> 0;
  }
  function zip(files) {
    var te = new TextEncoder(), parts = [], cd = [], off = 0, time = 0, date = ((2025 - 1980) << 9) | (1 << 5) | 1;
    files.forEach(function (f) {
      var nb = te.encode(f[0]), data = typeof f[1] === 'string' ? te.encode(f[1]) : f[1], crc = crc32(data);
      var lh = new Uint8Array(30 + nb.length), dv = new DataView(lh.buffer);
      dv.setUint32(0, 0x04034b50, true); dv.setUint16(4, 20, true); dv.setUint16(6, 0x0800, true); dv.setUint16(8, 0, true); dv.setUint16(10, time, true); dv.setUint16(12, date, true);
      dv.setUint32(14, crc, true); dv.setUint32(18, data.length, true); dv.setUint32(22, data.length, true); dv.setUint16(26, nb.length, true); dv.setUint16(28, 0, true); lh.set(nb, 30);
      var ch = new Uint8Array(46 + nb.length), cv = new DataView(ch.buffer);
      cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint16(8, 0x0800, true); cv.setUint16(10, 0, true); cv.setUint16(12, time, true); cv.setUint16(14, date, true);
      cv.setUint32(16, crc, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, nb.length, true); cv.setUint32(42, off, true); ch.set(nb, 46);
      parts.push(lh, data); cd.push(ch); off += lh.length + data.length;
    });
    var cdSize = cd.reduce(function (a, b) { return a + b.length; }, 0), end = new Uint8Array(22), ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true); ev.setUint32(12, cdSize, true); ev.setUint32(16, off, true);
    var all = parts.concat(cd, [end]), total = all.reduce(function (a, b) { return a + b.length; }, 0), out = new Uint8Array(total), p = 0;
    all.forEach(function (b) { out.set(b, p); p += b.length; }); return out;
  }

  /* ------------------------------------------------ deck model <-> .pptx ------------------------------------------------ */
  var THEMES = {
    light: { name: 'Simple light', bg: 'FFFFFF', title: '202124', text: '3C4043', accent: '1A73E8' },
    dark: { name: 'Simple dark', bg: '202124', title: 'FFFFFF', text: 'E8EAED', accent: '8AB4F8' },
    ocean: { name: 'Ocean', bg: '0B3C5D', title: 'FFFFFF', text: 'D9E8F2', accent: '5DADE2' },
    focus: { name: 'Focus', bg: 'FDF6E3', title: '073642', text: '586E75', accent: 'CB4B16' },
    mint: { name: 'Mint', bg: 'E8F5E9', title: '1B5E20', text: '2E3B2F', accent: '2E7D32' }
  };
  var LAYOUTS = { title: 'Title slide', body: 'Title and body', section: 'Section header', titleonly: 'Title only', blank: 'Blank' };
  var LAY_NO = { title: 1, body: 2, section: 3, titleonly: 4, blank: 5 }, NO_LAY = ['', 'title', 'body', 'section', 'titleonly', 'blank'];
  /* geometry in px on a 960 x 540 slide (1 px = 12700 EMU, 1 pt = 1 px) */
  var GEO = {
    title: { title: { x: 72, y: 174, w: 816, h: 108, sz: 54, b: 1, al: 'ctr', ph: 'ctrTitle' }, body: { x: 72, y: 294, w: 816, h: 90, sz: 28, al: 'ctr', ph: 'subTitle', sub: 1 } },
    body: { title: { x: 48, y: 30, w: 864, h: 90, sz: 40, b: 1, al: 'l', ph: 'title' }, body: { x: 48, y: 138, w: 864, h: 342, sz: 24, al: 'l', ph: 'body', idx: 1 } },
    section: { title: { x: 72, y: 192, w: 816, h: 108, sz: 50, b: 1, al: 'l', ph: 'title' }, body: { x: 72, y: 306, w: 816, h: 72, sz: 24, al: 'l', ph: 'body', idx: 1, acc: 1 } },
    titleonly: { title: { x: 48, y: 30, w: 864, h: 90, sz: 40, b: 1, al: 'l', ph: 'title' } },
    blank: {}
  };
  var EMU = 12700;
  var NS = 'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"';
  var X = function (s) { return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var UX = function (s) { return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&'); };
  var HDR = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';

  function paras(text, g, th, acc) {
    var color = acc ? th.accent : (g.ph === 'title' || g.ph === 'ctrTitle' ? th.title : th.text), lines = String(text || '').split('\n');
    if (lines.length === 1 && lines[0] === '') return '<a:p><a:pPr algn="' + g.al + '"/><a:endParaRPr lang="en-US" sz="' + g.sz * 100 + '"/></a:p>';
    return lines.map(function (ln) {
      var bullet = !g.sub && g.ph === 'body' && !acc && /^\s*[-•*]\s+/.test(ln), t = bullet ? ln.replace(/^\s*[-•*]\s+/, '') : ln;
      var ppr = bullet ? '<a:pPr marL="342900" indent="-342900" algn="l"><a:buFont typeface="Arial"/><a:buChar char="•"/></a:pPr>' : '<a:pPr marL="0" indent="0" algn="' + g.al + '"><a:buNone/></a:pPr>';
      return '<a:p>' + ppr + (t ? '<a:r><a:rPr lang="en-US" sz="' + g.sz * 100 + '"' + (g.b ? ' b="1"' : '') + ' dirty="0"><a:solidFill><a:srgbClr val="' + color + '"/></a:solidFill><a:latin typeface="Arial"/></a:rPr><a:t>' + X(t) + '</a:t></a:r>' : '<a:endParaRPr lang="en-US" sz="' + g.sz * 100 + '"/>') + '</a:p>';
    }).join('');
  }
  function sp(id, name, g, text, th) {
    var anchor = g.ph === 'title' || g.ph === 'ctrTitle' ? 'b' : 't';
    if (g.ph === 'ctrTitle' || (g.ph === 'title' && g.al === 'l' && g.y > 100 && g.y < 200)) anchor = 'ctr';
    return '<p:sp><p:nvSpPr><p:cNvPr id="' + id + '" name="' + name + '"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="' + g.ph + '"' + (g.idx ? ' idx="' + g.idx + '"' : '') + '/></p:nvPr></p:nvSpPr>' +
      '<p:spPr><a:xfrm><a:off x="' + g.x * EMU + '" y="' + g.y * EMU + '"/><a:ext cx="' + g.w * EMU + '" cy="' + g.h * EMU + '"/></a:xfrm></p:spPr>' +
      '<p:txBody><a:bodyPr wrap="square" lIns="91440" tIns="45720" rIns="91440" bIns="45720" anchor="' + anchor + '"><a:normAutofit/></a:bodyPr><a:lstStyle/>' + paras(text, g, th, g.acc) + '</p:txBody></p:sp>';
  }
  function slideXml(s, th) {
    var G = GEO[s.layout] || GEO.body, shapes = '';
    if (G.title) shapes += sp(2, 'Title 1', G.title, s.title, th);
    if (G.body) shapes += sp(3, G.body.sub ? 'Subtitle 2' : 'Content Placeholder 2', G.body, s.body, th);
    return HDR + '<p:sld ' + NS + '><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>' + shapes + '</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>';
  }
  function layoutXml(key, name, th) {
    var G = GEO[key], shapes = '', empty = { title: '', body: '' };
    if (G.title) shapes += sp(2, 'Title 1', G.title, 'Click to edit title', th);
    if (G.body) shapes += sp(3, 'Text Placeholder 2', G.body, 'Click to edit text', th);
    return HDR + '<p:sldLayout ' + NS + ' type="' + ({ title: 'title', body: 'obj', section: 'secHead', titleonly: 'titleOnly', blank: 'blank' })[key] + '" preserve="1"><p:cSld name="' + name + '"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>' + shapes + '</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>';
  }
  function masterXml(th) {
    var tG = GEO.body.title, bG = GEO.body.body, lvl = function (sz, color, b) { return '<a:lvl1pPr algn="l"><a:defRPr sz="' + sz + '"' + (b ? ' b="1"' : '') + '><a:solidFill><a:srgbClr val="' + color + '"/></a:solidFill><a:latin typeface="Arial"/></a:defRPr></a:lvl1pPr>'; };
    var ids = [1, 2, 3, 4, 5].map(function (i) { return '<p:sldLayoutId id="' + (2147483648 + i) + '" r:id="rId' + i + '"/>'; }).join('');
    return HDR + '<p:sldMaster ' + NS + '><p:cSld><p:bg><p:bgPr><a:solidFill><a:srgbClr val="' + th.bg + '"/></a:solidFill><a:effectLst/></p:bgPr></p:bg><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>' +
      sp(2, 'Title Placeholder 1', tG, 'Click to edit Master title style', th) + sp(3, 'Text Placeholder 2', bG, 'Click to edit Master text styles', th) + '</p:spTree></p:cSld>' +
      '<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst>' + ids + '</p:sldLayoutIdLst>' +
      '<p:txStyles><p:titleStyle>' + lvl(4000, th.title, 1) + '</p:titleStyle><p:bodyStyle>' + lvl(2400, th.text) + '</p:bodyStyle><p:otherStyle>' + lvl(1800, th.text) + '</p:otherStyle></p:txStyles></p:sldMaster>';
  }
  function themeXml(th) {
    var fill = '<a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>';
    var ln = '<a:lnStyleLst><a:ln w="6350"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="12700"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="19050"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>';
    var ef = '<a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>';
    var bg = '<a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>';
    var c = function (n, v) { return '<a:' + n + '><a:srgbClr val="' + v + '"/></a:' + n + '>'; };
    return HDR + '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="ALPHA ' + X(th.name) + '"><a:themeElements><a:clrScheme name="ALPHA">' + c('dk1', th.title) + c('lt1', th.bg) + c('dk2', th.text) + c('lt2', th.bg) + c('accent1', th.accent) + c('accent2', '34A853') + c('accent3', 'FBBC04') + c('accent4', 'EA4335') + c('accent5', 'A142F4') + c('accent6', '24C1E0') + c('hlink', th.accent) + c('folHlink', '7E57C2') + '</a:clrScheme>' +
      '<a:fontScheme name="ALPHA"><a:majorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont><a:minorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont></a:fontScheme><a:fmtScheme name="ALPHA">' + fill + ln + ef + bg + '</a:fmtScheme></a:themeElements></a:theme>';
  }
  var RELNS = 'http://schemas.openxmlformats.org/package/2006/relationships', RT = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
  var rels = function (arr) { return HDR + '<Relationships xmlns="' + RELNS + '">' + arr.map(function (r) { return '<Relationship Id="' + r[0] + '" Type="' + RT + r[1] + '" Target="' + r[2] + '"/>'; }).join('') + '</Relationships>'; };
  function buildPptx(model, title) {
    var th = THEMES[model.theme] || THEMES.light, n = model.slides.length, ct = '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/><Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>' +
      '<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/><Override PartName="/ppt/presProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"/><Override PartName="/ppt/viewProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml"/><Override PartName="/ppt/tableStyles.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml"/>' +
      '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>';
    for (var i = 1; i <= 5; i++) ct += '<Override PartName="/ppt/slideLayouts/slideLayout' + i + '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>';
    for (i = 1; i <= n; i++) ct += '<Override PartName="/ppt/slides/slide' + i + '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>';
    var files = [['[Content_Types].xml', HDR + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' + ct + '</Types>'],
      ['_rels/.rels', HDR + '<Relationships xmlns="' + RELNS + '"><Relationship Id="rId1" Type="' + RT + 'officeDocument" Target="ppt/presentation.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="' + RT + 'extended-properties" Target="docProps/app.xml"/></Relationships>'],
      ['docProps/core.xml', HDR + '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>' + X(title || 'Presentation') + '</dc:title><dc:creator>ALPHA</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString().replace(/\.\d+Z$/, 'Z') + '</dcterms:created></cp:coreProperties>'],
      ['docProps/app.xml', HDR + '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>ALPHA</Application><AppVersion>1.0000</AppVersion><Company>alpha-theme:' + (model.theme || 'light') + '</Company><Slides>' + n + '</Slides></Properties>'],
      ['ppt/presentation.xml', HDR + '<p:presentation ' + NS + ' saveSubsetFonts="1"><p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst><p:sldIdLst>' + model.slides.map(function (s, k) { return '<p:sldId id="' + (256 + k) + '" r:id="rId' + (10 + k) + '"/>'; }).join('') + '</p:sldIdLst><p:sldSz cx="12192000" cy="6858000"/><p:notesSz cx="6858000" cy="9144000"/></p:presentation>'],
      ['ppt/_rels/presentation.xml.rels', rels([['rId1', 'slideMaster', 'slideMasters/slideMaster1.xml'], ['rId2', 'presProps', 'presProps.xml'], ['rId3', 'viewProps', 'viewProps.xml'], ['rId4', 'theme', 'theme/theme1.xml'], ['rId5', 'tableStyles', 'tableStyles.xml']].concat(model.slides.map(function (s, k) { return ['rId' + (10 + k), 'slide', 'slides/slide' + (k + 1) + '.xml']; })))],
      ['ppt/presProps.xml', HDR + '<p:presentationPr ' + NS + '/>'], ['ppt/viewProps.xml', HDR + '<p:viewPr ' + NS + '><p:normalViewPr><p:restoredLeft sz="15620"/><p:restoredTop sz="94660"/></p:normalViewPr></p:viewPr>'],
      ['ppt/tableStyles.xml', HDR + '<a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def="{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}"/>'],
      ['ppt/theme/theme1.xml', themeXml(th)], ['ppt/slideMasters/slideMaster1.xml', masterXml(th)],
      ['ppt/slideMasters/_rels/slideMaster1.xml.rels', rels([1, 2, 3, 4, 5].map(function (k) { return ['rId' + k, 'slideLayout', '../slideLayouts/slideLayout' + k + '.xml']; }).concat([['rId6', 'theme', '../theme/theme1.xml']]))]];
    for (i = 1; i <= 5; i++) {
      files.push(['ppt/slideLayouts/slideLayout' + i + '.xml', layoutXml(NO_LAY[i], LAYOUTS[NO_LAY[i]], th)]);
      files.push(['ppt/slideLayouts/_rels/slideLayout' + i + '.xml.rels', rels([['rId1', 'slideMaster', '../slideMasters/slideMaster1.xml']])]);
    }
    model.slides.forEach(function (s, k) {
      files.push(['ppt/slides/slide' + (k + 1) + '.xml', slideXml(s, th)]);
      files.push(['ppt/slides/_rels/slide' + (k + 1) + '.xml.rels', rels([['rId1', 'slideLayout', '../slideLayouts/slideLayout' + (LAY_NO[s.layout] || 2) + '.xml']])]);
    });
    return zip(files);
  }
  /* read back a deck that ALPHA wrote (regex based: we know the exact structure we emit) */
  async function parseModel(z) {
    var app = await z.get('docProps/app.xml'); if (!app || !/<Application>ALPHA<\/Application>/.test(app)) return null;
    var tm = /<Company>alpha-theme:(\w+)<\/Company>/.exec(app), model = { theme: tm && THEMES[tm[1]] ? tm[1] : 'light', slides: [] };
    var pres = await z.get('ppt/presentation.xml'), prel = await z.get('ppt/_rels/presentation.xml.rels'); if (!pres || !prel) return null;
    var map = {}; prel.replace(/<Relationship\b[^>]*>/g, function (r) { var id = /Id="([^"]+)"/.exec(r), t = /Target="([^"]+)"/.exec(r); if (id && t) map[id[1]] = t[1]; return r; });
    var ids = []; pres.replace(/<p:sldId\b[^>]*r:id="([^"]+)"/g, function (m, id) { ids.push(id); return m; });
    for (var i = 0; i < ids.length; i++) {
      var path = 'ppt/' + String(map[ids[i]] || '').replace(/^\/?(ppt\/)?/, ''), xml = await z.get(path); if (!xml) continue;
      var rp = path.replace(/([^/]+)$/, '_rels/$1.rels'), rx = await z.get(rp), ln = rx && /slideLayout(\d+)\.xml/.exec(rx), s = { layout: NO_LAY[ln ? +ln[1] : 2] || 'body', title: '', body: '' };
      (xml.match(/<p:sp>[\s\S]*?<\/p:sp>/g) || []).forEach(function (sh) {
        var ph = /<p:ph type="(\w+)"/.exec(sh); if (!ph) return; var key = /^(title|ctrTitle)$/.test(ph[1]) ? 'title' : 'body';
        var text = (sh.match(/<a:p>[\s\S]*?<\/a:p>/g) || []).map(function (p) { var t = (p.match(/<a:t>([\s\S]*?)<\/a:t>/g) || []).map(function (x) { return UX(x.replace(/<\/?a:t>/g, '')); }).join(''); return (/<a:buChar/.test(p) ? '- ' : '') + t; }).join('\n');
        s[key] = text;
      });
      model.slides.push(s);
    }
    return model.slides.length ? model : null;
  }
  AV.slidesBuild = buildPptx; AV.slidesParse = parseModel; AV.zipStore = zip;

  /* ------------------------------------------------ styles ------------------------------------------------ */
  AV.css('alpha-sl-css', [
    '.av-sl{--slac:#f9ab00}',
    '.sl-main{flex:1;min-height:0;display:flex;background:var(--avbg)}',
    '.sl-rail{flex:none;width:168px;overflow-y:auto;background:var(--avbar);border-right:1px solid var(--avbd);padding:12px 8px;-webkit-overflow-scrolling:touch}',
    '.sl-th{display:flex;gap:6px;margin-bottom:10px;cursor:pointer}.sl-th i{flex:none;width:18px;text-align:right;font:12px/1 Roboto,sans-serif;font-style:normal;color:var(--avmu);padding-top:4px}',
    '.sl-th .b{position:relative;flex:1;border:2px solid var(--avbd);border-radius:4px;overflow:hidden;background:#fff;aspect-ratio:16/9}.sl-th.on .b{border-color:var(--slac);box-shadow:0 0 0 1px var(--slac)}.sl-th.on i{color:var(--slac);font-weight:700}',
    '.sl-stage{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;padding:16px;position:relative}',
    '.sl-cv{position:relative;flex:none;box-shadow:0 1px 3px rgba(0,0,0,.3),0 4px 16px rgba(0,0,0,.2);background:#fff;overflow:hidden}',
    '.sl-sd{position:absolute;left:0;top:0;width:960px;height:540px;transform-origin:0 0;overflow:hidden}',
    '.sl-bx{position:absolute;box-sizing:border-box;padding:6px 10px;white-space:pre-wrap;overflow:hidden;word-break:break-word;outline:0;font-family:Arial,Helvetica,sans-serif;line-height:1.2;display:flex;flex-direction:column}',
    '.sl-bx.ed{cursor:text}.sl-bx.ed:hover{outline:1px dashed rgba(128,128,128,.7)}.sl-bx.ed:focus{outline:2px solid #1a73e8}.sl-bx.ed:empty::before{content:attr(data-ph);opacity:.45}',
    '.sl-tools{flex:none;display:flex;gap:4px;padding:6px max(8px,var(--sa-right)) calc(6px + var(--sa-bottom)) max(8px,var(--sa-left));background:var(--avbar);border-top:1px solid var(--avbd);overflow-x:auto;scrollbar-width:none}',
    '.sl-tools button{flex:none;display:flex;align-items:center;gap:8px;height:40px;padding:0 14px;border:1px solid var(--avbd);border-radius:20px;background:none;color:var(--avtx);font:500 13px Roboto,system-ui,sans-serif;cursor:pointer;white-space:nowrap}.sl-tools button:active{background:var(--avhi)}.sl-tools .avi{width:20px;height:20px}',
    '.sl-nt{flex:none;width:100%;max-width:960px;margin-top:10px;max-height:22vh;overflow:auto;background:var(--avbar);border:1px solid var(--avbd);border-radius:8px;padding:10px 14px;font-size:14px;line-height:20px;white-space:pre-wrap}.sl-nt small{display:block;color:var(--avmu);margin-bottom:4px;font-size:12px}',
    '.av-sl .sl-save{font-size:12px;color:var(--avmu)}',
    '.sl-vw{flex:1;min-height:0;position:relative;overflow:hidden}',
    /* restyle the existing PowerPoint-style viewer like Google Slides */
    '.av-sl .pt-app{background:var(--avbg);color:var(--avtx);font-family:Roboto,system-ui,sans-serif}.av-sl .pt-tools{display:none}',
    '.av-sl .pt-rail{background:var(--avbar);border-color:var(--avbd)}.av-sl .pt-th i{color:var(--avmu)}.av-sl .pt-th .b{border-color:var(--avbd);box-shadow:none;border-radius:4px}.av-sl .pt-th.on .b{border-color:var(--slac);box-shadow:0 0 0 1px var(--slac)}.av-sl .pt-th.on i{color:var(--slac)}',
    '.av-sl .pt-st{background:var(--avbar);border-color:var(--avbd);color:var(--avmu)}.av-sl .pt-st button{background:none;border-color:var(--avbd);color:var(--avtx);border-radius:16px}',
    '.av-sl .pt-narrow .pt-rail{border-color:var(--avbd)}',
    '.av-sl .av-play{background:var(--avacb);color:#fff;border-radius:20px;width:auto;padding:0 16px;gap:6px;font:500 14px Roboto,sans-serif;height:40px}',
    '@media(max-width:700px){.sl-main{flex-direction:column}.sl-rail{order:2;width:auto;height:92px;display:flex;gap:8px;overflow-x:auto;overflow-y:hidden;border-right:0;border-top:1px solid var(--avbd);padding:8px}.sl-th{flex:none;width:118px;margin:0}.sl-th i{display:none}.sl-stage{padding:8px}}'
  ].join('\n'));

  /* ------------------------------------------------ slideshow (reuses OFX presenter) ------------------------------------------------ */
  async function playBytes(bytes, from) {
    var O = window.OFX; if (!O || !O.unzip || !O.pptx) return AV.toast('Slideshow is not available');
    var z = await O.unzip(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
    var host = D.createElement('div'); host.style.cssText = 'position:fixed;left:-9999px;top:0;width:800px;height:500px;overflow:hidden'; D.body.appendChild(host);
    var c = await O.pptx(z, host, { fill: true }), seen = false;
    var L = AV.layer('av-ovl', '', { noEsc: true, onRequestClose: function () { try { O.closeShow(); } catch (e) {} } });
    L.el.style.pointerEvents = 'none';
    var done = function () { clearInterval(iv); try { c.destroy(); } catch (e) {} host.remove(); L.close(); };
    var iv = setInterval(function () { var n = O._shows ? O._shows.size : 0; if (n) seen = true; else if (seen) done(); }, 400);
    setTimeout(function () { if (!seen) done(); }, 8000);
    c.startShow(from || 0);
  }

  /* ------------------------------------------------ viewer for any .pptx ------------------------------------------------ */
  async function notesFor(z) {
    var out = [], pres = await z.get('ppt/presentation.xml'), prel = await z.get('ppt/_rels/presentation.xml.rels'); if (!pres || !prel) return out;
    var map = {}; prel.replace(/<Relationship\b[^>]*>/g, function (r) { var id = /Id="([^"]+)"/.exec(r), t = /Target="([^"]+)"/.exec(r); if (id && t) map[id[1]] = t[1]; return r; });
    var ids = []; pres.replace(/<p:sldId\b[^>]*r:id="([^"]+)"/g, function (m, id) { ids.push(id); return m; });
    for (var i = 0; i < ids.length; i++) {
      var path = 'ppt/' + String(map[ids[i]] || '').replace(/^\/?(ppt\/)?/, ''), rx = await z.get(path.replace(/([^/]+)$/, '_rels/$1.rels')), m = rx && /Target="([^"]*notesSlide[^"]*)"/.exec(rx), txt = '';
      if (m) {
        var np = m[1].replace(/^\.\.\//, 'ppt/').replace(/^\/?/, ''); if (!/^ppt\//.test(np)) np = 'ppt/' + np;
        var nx = await z.get(np); if (nx) txt = (nx.match(/<p:sp>[\s\S]*?<\/p:sp>/g) || []).filter(function (s) { return !/type="(sldImg|sldNum|hdr|dt|ftr)"/.test(s); }).map(function (s) { return (s.match(/<a:p>[\s\S]*?<\/a:p>/g) || []).map(function (p) { return UX((p.match(/<a:t>([\s\S]*?)<\/a:t>/g) || []).map(function (x) { return x.replace(/<\/?a:t>/g, ''); }).join('')); }).join('\n'); }).join('\n').trim();
      }
      out.push(txt);
    }
    return out;
  }
  function openViewer(f, z) {
    var dead = false, ctl = null, bytesP = null, showNotes = false, notes = [];
    var L = AV.layer('av-sl',
      '<header class="av-bar"><button class="av-ib" data-a="x" aria-label="Back">' + AV.ic('back') + '</button><div class="av-ttl"><b></b><span>Presentation</span></div>' +
      '<button class="av-ib av-play" data-a="play">' + AV.ic('play') + 'Slideshow</button><button class="av-ib" data-a="more" aria-label="More">' + AV.ic('more') + '</button></header>' +
      '<div class="sl-vw"></div><div class="sl-nt" hidden></div>', { onClose: function () { dead = true; try { ctl && ctl.destroy(); } catch (e) {} } });
    var el = L.el, host = Q('.sl-vw', el), nt = Q('.sl-nt', el); Q('.av-ttl b', el).textContent = f.name; host.style.cssText = 'position:relative;overflow:hidden';
    var cur = function () { var m = /Slide (\d+)/.exec((Q('.pt-no', host) || {}).textContent || ''); return m ? +m[1] - 1 : 0; };
    function showNote() { nt.hidden = !showNotes; if (!showNotes) return; var i = cur(); nt.innerHTML = '<small>Speaker notes · slide ' + (i + 1) + '</small>' + (notes[i] ? esc(notes[i]) : '<span style="opacity:.6">No notes for this slide</span>'); }
    function more() {
      AV.sheet(f.name, 'Presentation · ' + AV.fmtSize(f.size || 0), [
        { i: 'play', t: 'Slideshow from this slide', fn: function () { ctl && ctl.startShow(cur()); } },
        { i: 'text', t: showNotes ? 'Hide speaker notes' : 'Show speaker notes', fn: function () { showNotes = !showNotes; showNote(); } }, '-'
      ].concat(AV.fileActions(f, { renamed: function () { Q('.av-ttl b', el).textContent = f.name; }, trashed: function () { L.close(); } })));
    }
    el.addEventListener('click', function (e) { var b = e.target.closest('[data-a]'); if (!b) return; var a = b.dataset.a; if (a === 'x') L.close(); else if (a === 'play') ctl && ctl.startShow(0); else if (a === 'more') more(); });
    (async function () {
      try {
        ctl = await window.OFX.pptx(z, host, { fill: true }); if (dead) { ctl.destroy(); return; }
        notes = await notesFor(z); var no = Q('.pt-no', host); if (no) new MutationObserver(showNote).observe(no, { childList: true, characterData: true, subtree: true });
        try { host.firstChild.focus({ preventScroll: true }); } catch (e) {}
      } catch (e) { console.error(e); host.innerHTML = '<div class="av-load"><div>Couldn’t display this presentation.</div><button class="av-btn" data-a="x">Close</button></div>'; }
    })();
    return L;
  }

  /* ------------------------------------------------ editor for ALPHA decks ------------------------------------------------ */
  function boxHtml(key, g, s, th, editable) {
    var color = g.acc ? th.accent : key === 'title' ? th.title : th.text, txt = s[key] || '', ph = key === 'title' ? 'Click to add title' : (g.sub ? 'Click to add subtitle' : 'Click to add text — start a line with - for bullets');
    if (!editable && !txt) return '';
    return '<div class="sl-bx' + (editable ? ' ed' : '') + '" data-k="' + key + '"' + (editable ? ' contenteditable="plaintext-only" spellcheck="false" data-ph="' + esc(ph) + '"' : '') +
      ' style="left:' + g.x + 'px;top:' + g.y + 'px;width:' + g.w + 'px;height:' + g.h + 'px;font-size:' + g.sz + 'px;color:#' + color + ';font-weight:' + (g.b ? 700 : 400) + ';text-align:' + (g.al === 'ctr' ? 'center' : 'left') + ';justify-content:' + (key === 'title' && (g.ph === 'ctrTitle' || g.al === 'l' && g.y > 100) ? 'center' : key === 'title' ? 'flex-end' : 'flex-start') + '">' + esc(txt) + '</div>';
  }
  function slideHtml(s, th, editable) {
    var G = GEO[s.layout] || GEO.body; return (G.title ? boxHtml('title', G.title, s, th, editable) : '') + (G.body ? boxHtml('body', G.body, s, th, editable) : '');
  }
  function openEditor(f, model) {
    var dead = false, idx = 0, saveT = 0, savingP = Promise.resolve(), undo = [], redo = [], lastEdit = 0, fileTitle = f.name.replace(/\.pptx$/i, ''), rec = f;
    var L = AV.layer('av-sl',
      '<header class="av-bar"><button class="av-ib" data-a="x" aria-label="Back">' + AV.ic('back') + '</button><div class="av-ttl"><b></b><span class="sl-save">Saved</span></div>' +
      '<button class="av-ib" data-a="undo" aria-label="Undo">' + AV.ic('undo') + '</button><button class="av-ib" data-a="redo" aria-label="Redo">' + AV.ic('redo') + '</button>' +
      '<button class="av-ib av-play" data-a="play">' + AV.ic('play') + 'Slideshow</button><button class="av-ib" data-a="more" aria-label="More">' + AV.ic('more') + '</button></header>' +
      '<div class="sl-main"><div class="sl-rail"></div><div class="sl-stage"><div class="sl-cv"><div class="sl-sd"></div></div></div></div>' +
      '<div class="sl-tools"><button data-a="add">' + AV.ic('add') + 'Slide</button><button data-a="layout">' + AV.ic('layout') + 'Layout</button><button data-a="theme">' + AV.ic('palette') + 'Theme</button><button data-a="dup">' + AV.ic('copy') + 'Duplicate</button><button data-a="move">' + AV.ic('aup') + 'Move</button><button data-a="del">' + AV.ic('del') + 'Delete</button></div>',
      { noEsc: true, onRequestClose: function () { exit(); }, onClose: function () { dead = true; } });
    var el = L.el, rail = Q('.sl-rail', el), stage = Q('.sl-stage', el), cv = Q('.sl-cv', el), sd = Q('.sl-sd', el), saveEl = Q('.sl-save', el);
    Q('.av-ttl b', el).textContent = fileTitle;
    var th = function () { return THEMES[model.theme] || THEMES.light; };
    var snap = function () { undo.push(JSON.stringify(model)); if (undo.length > 100) undo.shift(); redo.length = 0; };
    var btnState = function () { Q('[data-a=undo]', el).disabled = !undo.length; Q('[data-a=redo]', el).disabled = !redo.length; };
    /* ---- saving ---- */
    function touch() { saveEl.textContent = 'Saving…'; clearTimeout(saveT); saveT = setTimeout(save, 1100); btnState(); }
    function save() {
      clearTimeout(saveT);
      savingP = savingP.then(async function () {
        try { var fresh = await AV.rec(rec.id); if (!fresh) { saveEl.textContent = 'File was deleted'; return; } await AV.updateRec(fresh, buildPptx(model, fileTitle)); rec = fresh; if (!dead) saveEl.textContent = 'Saved'; }
        catch (e) { console.error(e); if (!dead) saveEl.textContent = 'Couldn’t save'; }
      });
      return savingP;
    }
    async function exit() { await save(); L.close(); }
    /* ---- drawing ---- */
    function fit() {
      var w = stage.clientWidth - (innerWidth < 700 ? 16 : 32), h = stage.clientHeight - (innerWidth < 700 ? 16 : 32), s = Math.max(.1, Math.min(w / 960, h / 540));
      cv.style.width = 960 * s + 'px'; cv.style.height = 540 * s + 'px'; sd.style.transform = 'scale(' + s + ')'; cv.dataset.s = s;
      sd.style.background = '#' + th().bg;
    }
    function drawCanvas() {
      sd.style.background = '#' + th().bg; sd.innerHTML = slideHtml(model.slides[idx], th(), true); fit();
    }
    function thumbInner(s) { return '<div style="position:absolute;left:0;top:0;width:960px;height:540px;transform-origin:0 0;background:#' + th().bg + ';transform:scale(var(--ts))">' + slideHtml(s, th(), false) + '</div>'; }
    function drawRail(only) {
      if (only != null) { var b = Q('.sl-th[data-i="' + only + '"] .b', rail); if (b) { b.innerHTML = thumbInner(model.slides[only]); setScale(b); } return; }
      rail.innerHTML = model.slides.map(function (s, i) { return '<div class="sl-th' + (i === idx ? ' on' : '') + '" data-i="' + i + '"><i>' + (i + 1) + '</i><div class="b">' + thumbInner(s) + '</div></div>'; }).join('');
      QA('.sl-th .b', rail).forEach(setScale);
      var on = Q('.sl-th.on', rail); if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    function setScale(b) { var w = b.clientWidth || 120; b.style.setProperty('--ts', w / 960); }
    function selectSlide(i) { idx = AV.clamp(i, 0, model.slides.length - 1); drawCanvas(); QA('.sl-th', rail).forEach(function (t) { t.classList.toggle('on', +t.dataset.i === idx); }); var on = Q('.sl-th.on', rail); if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
    function all() { drawRail(); drawCanvas(); btnState(); }
    /* ---- operations ---- */
    var op = function (fn) { snap(); fn(); touch(); all(); };
    function addSlide(layout) { op(function () { model.slides.splice(idx + 1, 0, { layout: layout || 'body', title: '', body: '' }); idx++; }); }
    function layoutSheet() { AV.sheet('Layout', '', Object.keys(LAYOUTS).map(function (k) { return { i: 'layout', t: LAYOUTS[k], on: model.slides[idx].layout === k, fn: function () { op(function () { model.slides[idx].layout = k; }); } }; })); }
    function themeSheet() { AV.sheet('Theme', 'Applies to every slide', Object.keys(THEMES).map(function (k) { return { i: 'palette', t: THEMES[k].name, on: model.theme === k, fn: function () { op(function () { model.theme = k; }); } }; })); }
    function moveSheet() {
      var n = model.slides.length, mv = function (to) { return function () { op(function () { var s = model.slides.splice(idx, 1)[0]; model.slides.splice(to, 0, s); idx = to; }); }; };
      AV.sheet('Move slide', '', [{ i: 'aup', t: 'Move up', k: idx > 0 ? '' : '–', fn: idx > 0 ? mv(idx - 1) : null }, { i: 'adown', t: 'Move down', fn: idx < n - 1 ? mv(idx + 1) : null }, { i: 'aup', t: 'Move to beginning', fn: idx > 0 ? mv(0) : null }, { i: 'adown', t: 'Move to end', fn: idx < n - 1 ? mv(n - 1) : null }]);
    }
    function doUndo(from, to) { if (!from.length) return; to.push(JSON.stringify(model)); model = JSON.parse(from.pop()); idx = Math.min(idx, model.slides.length - 1); touch(); all(); }
    function more() {
      var bytes = function () { return new Blob([buildPptx(model, fileTitle)], { type: AV.mimeFor('x.pptx') }); };
      AV.sheet(fileTitle, model.slides.length + ' slide' + (model.slides.length === 1 ? '' : 's'), [
        { i: 'play', t: 'Slideshow from this slide', fn: function () { present(idx); } },
        { i: 'dl', t: 'Save to device (.pptx)', fn: function () { AV.saveBlob(fileTitle + '.pptx', bytes()); } },
        { i: 'share', t: 'Share', fn: function () { AV.share(fileTitle + '.pptx', bytes()); } }, '-',
        { i: 'edit', t: 'Rename', fn: async function () {
          AV.nameCache = await AV.records();
          var v = await AV.dialog({ t: 'Rename presentation', inp: fileTitle, ok: 'OK', chk: function (v) { return AV.validName(v) || (AV.nameCache.some(function (x) { return x.name.toLowerCase() === (v + '.pptx').toLowerCase() && x.id !== rec.id; }) ? 'A file with this name already exists' : ''); } });
          if (typeof v !== 'string' || v === fileTitle) return; fileTitle = v; var fr = await AV.rec(rec.id); if (fr) { fr.name = v + '.pptx'; rec = fr; await svf(fr); } Q('.av-ttl b', el).textContent = v; touch(); } },
        { i: 'info', t: 'Details', fn: function () { save().then(function () { AV.info(rec, '<div class="av-ir"><span>Slides</span><b>' + model.slides.length + '</b></div>'); }); } },
        { i: 'del', t: 'Move to trash', d: 1, fn: async function () { await save(); var fr = await AV.rec(rec.id); if (fr) { fr.trash = Date.now(); await svf(fr); AV.refresh(); } AV.toast('Moved to trash'); L.close(); } }
      ].map(function (x) { return x; }));
    }
    async function present(from) { await save(); try { await playBytes(buildPptx(model, fileTitle), from); } catch (e) { console.error(e); AV.toast('Couldn’t start the slideshow'); } }
    /* ---- events ---- */
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]'), t = e.target.closest('.sl-th');
      if (t) return selectSlide(+t.dataset.i);
      if (!b) return; var a = b.dataset.a;
      if (a === 'x') exit(); else if (a === 'undo') doUndo(undo, redo); else if (a === 'redo') doUndo(redo, undo); else if (a === 'play') present(0); else if (a === 'more') more();
      else if (a === 'add') addSlide(model.slides[idx].layout === 'title' ? 'body' : model.slides[idx].layout === 'blank' ? 'body' : model.slides[idx].layout);
      else if (a === 'layout') layoutSheet(); else if (a === 'theme') themeSheet(); else if (a === 'move') moveSheet();
      else if (a === 'dup') op(function () { model.slides.splice(idx + 1, 0, JSON.parse(JSON.stringify(model.slides[idx]))); idx++; });
      else if (a === 'del') { if (model.slides.length < 2) return AV.toast('A presentation needs at least one slide'); op(function () { model.slides.splice(idx, 1); idx = Math.min(idx, model.slides.length - 1); }); AV.toast('Slide deleted', 'Undo', function () { doUndo(undo, redo); }); }
    });
    sd.addEventListener('input', function (e) {
      var bx = e.target.closest('.sl-bx'); if (!bx) return; var now = Date.now();
      if (now - lastEdit > 900) snap(); lastEdit = now;
      model.slides[idx][bx.dataset.k] = String(bx.innerText != null ? bx.innerText : bx.textContent).replace(/\n$/, ''); touch(); drawRail(idx);
    });
    sd.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.dataset.k === 'title') e.preventDefault(); });
    addEventListener('keydown', function kd(e) {
      if (dead) return removeEventListener('keydown', kd); if (AV.stack[AV.stack.length - 1] !== L) return;
      var typing = e.target && e.target.isContentEditable, c = e.ctrlKey || e.metaKey;
      if (c && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? doUndo(redo, undo) : doUndo(undo, redo); } else if (c && e.key.toLowerCase() === 'y') { e.preventDefault(); doUndo(redo, undo); }
      else if (c && e.key.toLowerCase() === 's') { e.preventDefault(); save(); }
      else if (!typing && (e.key === 'ArrowDown' || e.key === 'PageDown')) selectSlide(idx + 1); else if (!typing && (e.key === 'ArrowUp' || e.key === 'PageUp')) selectSlide(idx - 1);
      else if (!typing && e.key === 'F5') present(e.shiftKey ? idx : 0);
    });
    if (window.ResizeObserver) new ResizeObserver(function () { fit(); QA('.sl-th .b', rail).forEach(setScale); }).observe(stage);
    requestAnimationFrame(function () { all(); });
    return L;
  }

  /* ------------------------------------------------ public API ------------------------------------------------ */
  AV.slides = {
    open: async function (f) {
      try {
        var O = window.OFX; if (!O || !O.unzip || !O.pptx) throw new Error('presentation engine missing');
        var bytes = await AV.bytes(f), z = await O.unzip(bytes.buffer), model = await parseModel(z);
        if (model) openEditor(f, model); else openViewer(f, z);
      } catch (e) { console.error(e); AV.toast('Couldn’t open ' + f.name); }
    },
    create: async function () {
      AV.nameCache = await AV.records();
      var def = (await AV.uniqueName('Untitled presentation', 'pptx')).replace(/\.pptx$/, '');
      var extra = '<label class="av-lb">Theme</label><select id="avth">' + Object.keys(THEMES).map(function (k) { return '<option value="' + k + '">' + THEMES[k].name + '</option>'; }).join('') + '</select>';
      var r = await AV.dialog({ t: 'New presentation', inp: def, ok: 'Create', extra: extra, getExtra: function (root) { return Q('#avth', root).value; },
        chk: function (v) { return AV.validName(v) || (AV.nameCache.some(function (x) { return x.name.toLowerCase() === (v + '.pptx').toLowerCase(); }) ? 'A file with this name already exists' : ''); } });
      if (r == null) return;
      var title = r.value.replace(/\.pptx$/i, ''), model = { theme: r.extra || 'light', slides: [{ layout: 'title', title: title, body: '' }] };
      var rec = await AV.createRec(title + '.pptx', buildPptx(model, title), AV.mimeFor('x.pptx'), null);
      AV.toast('Created “' + rec.name + '”'); openEditor(rec, model);
    }
  };
})();
