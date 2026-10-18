"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
(function () {
    "use strict";
    var _a;
    var _b, _Util_t, _Util_e, _c, _StatTimer_i, _d, _PDFDateString_n, _EditorToolbar_instances, _e, _EditorToolbar_r, _EditorToolbar_s, _EditorToolbar_a, _EditorToolbar_o, _EditorToolbar_l, _EditorToolbar_h, _EditorToolbar_c, _EditorToolbar_d, _EditorToolbar_u, _EditorToolbar_p, _EditorToolbar_g, _EditorToolbar_m, _EditorToolbar_f, _EditorToolbar_b_get, _FloatingToolbar_instances, _FloatingToolbar_o, _FloatingToolbar_r, _FloatingToolbar_y, _FloatingToolbar_v, _FloatingToolbar_A, _FloatingToolbar_w, _f, _CurrentPointers_x, _CurrentPointers_E, _CurrentPointers__, _CurrentPointers_T, _IdManager_S, _ImageManager_instances, _g, _ImageManager_C, _ImageManager_S, _ImageManager_D, _ImageManager_P, _CommandManager_M, _CommandManager_k, _CommandManager_I, _CommandManager_F, _KeyboardManager_instances, _KeyboardManager_R, _AnnotationEditorUIManager_instances, _AnnotationEditorUIManager_B, _AnnotationEditorUIManager_O, _AnnotationEditorUIManager_L, _AnnotationEditorUIManager_N, _AnnotationEditorUIManager_U, _AnnotationEditorUIManager_H, _AnnotationEditorUIManager_z, _AnnotationEditorUIManager_j, _AnnotationEditorUIManager_G, _AnnotationEditorUIManager_W, _AnnotationEditorUIManager_V, _AnnotationEditorUIManager_$, _AnnotationEditorUIManager_q, _AnnotationEditorUIManager_X, _AnnotationEditorUIManager_Y, _AnnotationEditorUIManager_K, _AnnotationEditorUIManager_J, _AnnotationEditorUIManager_Q, _AnnotationEditorUIManager_Z, _AnnotationEditorUIManager_tt, _AnnotationEditorUIManager_et, _AnnotationEditorUIManager_it, _AnnotationEditorUIManager_nt, _AnnotationEditorUIManager_rt, _AnnotationEditorUIManager_st, _AnnotationEditorUIManager_at, _AnnotationEditorUIManager_ot, _AnnotationEditorUIManager_lt, _AnnotationEditorUIManager_ht, _AnnotationEditorUIManager_ct, _AnnotationEditorUIManager_dt, _AnnotationEditorUIManager_ut, _AnnotationEditorUIManager_pt, _AnnotationEditorUIManager_gt, _AnnotationEditorUIManager_mt, _AnnotationEditorUIManager_ft, _AnnotationEditorUIManager_bt, _AnnotationEditorUIManager_yt, _AnnotationEditorUIManager_vt, _AnnotationEditorUIManager_wt, _AnnotationEditorUIManager_At, _AnnotationEditorUIManager_xt, _AnnotationEditorUIManager_Et, _AnnotationEditorUIManager__t, _AnnotationEditorUIManager_Tt, _AnnotationEditorUIManager_St, _AnnotationEditorUIManager_Ct, _AnnotationEditorUIManager_Dt, _AnnotationEditorUIManager_Pt, _AnnotationEditorUIManager_Mt, _AnnotationEditorUIManager_Bt, _AnnotationEditorUIManager_Ot, _AnnotationEditorUIManager_kt, _AnnotationEditorUIManager_Lt, _AnnotationEditorUIManager_Nt, _AnnotationEditorUIManager_Ht, _AnnotationEditorUIManager_It, _AnnotationEditorUIManager_zt, _AnnotationEditorUIManager_jt, _AnnotationEditorUIManager_Rt, _AnnotationEditorUIManager_Gt, _AnnotationEditorUIManager_Wt, _AnnotationEditorUIManager_Vt, _AnnotationEditorUIManager_Ft, _AnnotationEditorUIManager_Ut, _AnnotationEditorUIManager_Xt, _AnnotationEditorUIManager_Kt, _AnnotationEditorUIManager_Jt, _AnnotationEditorUIManager_$t, _AnnotationEditorUIManager_Qt_get, _AnnotationEditorUIManager_Yt, _AnnotationEditorUIManager_qt, _AltText_instances, _h, _AltText_l, _AltText_Zt, _AltText_te, _AltText_ee, _AltText_ie, _AltText_ne, _AltText_re, _AltText_se, _AltText_a, _AltText_ae, _AltText_oe, _AltText_le, _AltText_he, _AltText_ce_get, _AltText_de, _Comment_instances, _Comment_ue, _Comment_pe, _Comment_ge, _Comment_a, _Comment_me, _Comment_fe, _Comment_be, _Comment_ye, _Comment_ve, _Comment_we, _Comment_v, _TouchManager_instances, _j, _TouchManager_Ct, _TouchManager_Ae, _TouchManager_xe, _TouchManager_Ee, _TouchManager__e, _TouchManager_Te, _TouchManager_Se, _TouchManager_Ce, _TouchManager_De, _TouchManager_Pe, _TouchManager_Me, _TouchManager_ke, _TouchManager_Ie, _TouchManager_Fe, _TouchManager_Re, _AnnotationEditor_instances, _k, _AnnotationEditor_Be, _AnnotationEditor_Oe, _AnnotationEditor_l, _AnnotationEditor_h, _AnnotationEditor_ue, _AnnotationEditor_Le, _AnnotationEditor_Ne, _AnnotationEditor_Ue, _AnnotationEditor_He, _AnnotationEditor_ze, _AnnotationEditor_je, _AnnotationEditor_Ge, _AnnotationEditor_We, _AnnotationEditor_Ve, _AnnotationEditor_$e, _AnnotationEditor_qe, _AnnotationEditor_Xe, _AnnotationEditor_Ye, _AnnotationEditor_Ke, _AnnotationEditor_Je, _AnnotationEditor_Qe, _AnnotationEditor_Ze, _AnnotationEditor_ti, _AnnotationEditor_ei, _AnnotationEditor_ii, _AnnotationEditor_ni, _AnnotationEditor_si, _AnnotationEditor_ai, _AnnotationEditor_oi, _AnnotationEditor_li, _AnnotationEditor_hi, _AnnotationEditor_ui, _AnnotationEditor_di, _AnnotationEditor_ci, _AnnotationEditor_gi, _AnnotationEditor_mi, _AnnotationEditor_fi, _AnnotationEditor_yi, _AnnotationEditor_bi, _AnnotationEditor_pi, _AnnotationEditor_vi, _AnnotationEditor_wi, _AnnotationEditor_Ai, _AnnotationEditor_xi, _AnnotationEditor_ri, _AnnotationStorage_instances, _AnnotationStorage_Ei, _AnnotationStorage__i, _AnnotationStorage_Ti, _AnnotationStorage_Si, _AnnotationStorage_Ci, _PrintAnnotationStorage_Di, _BBoxReader_Pi, _BBoxReader_Mi, _CanvasBBoxTracker_instances, _CanvasBBoxTracker_ki, _CanvasBBoxTracker_Ii, _CanvasBBoxTracker_Fi, _CanvasBBoxTracker_Ri, _CanvasBBoxTracker_Bi, _CanvasBBoxTracker_Oi, _CanvasBBoxTracker_Pi, _CanvasBBoxTracker_Li, _CanvasDependencyTracker_Ni, _CanvasDependencyTracker_Ui, _CanvasDependencyTracker_Hi, _CanvasDependencyTracker_zi, _CanvasDependencyTracker_ji, _CanvasDependencyTracker_Gi, _CanvasDependencyTracker_Wi, _CanvasDependencyTracker_Vi, _CanvasNestedDependencyTracker_$i, _CanvasNestedDependencyTracker_qi, _CanvasNestedDependencyTracker_Xi, _CanvasNestedDependencyTracker_Yi, _CanvasNestedDependencyTracker_Ki, _l, _CanvasImagesTracker_Ri, _CanvasImagesTracker_Bi, _CanvasImagesTracker_Ji, _CanvasImagesTracker_Qi, _CanvasImagesTracker_Mi, _CanvasImagesTracker_Zi, _FontLoader_tn, _FontFaceObject_en, _m, _CssFontInfo_instances, _CssFontInfo_in, _CssFontInfo_nn, _CssFontInfo_rn, _CssFontInfo_sn, _SystemFontInfo_instances, _SystemFontInfo_in, _SystemFontInfo_nn, _SystemFontInfo_rn, _SystemFontInfo_sn, _FontInfo_instances, _FontInfo_in, _FontInfo_nn, _FontInfo_rn, _FontInfo_an, _FontInfo_on, _FontInfo_ln, _FontInfo_sn, _FontInfo_hn, _FontPathInfo_in, _LoopbackPort_cn, _LoopbackPort_dn, _MessageHandler_instances, _MessageHandler_un, _MessageHandler_pn, _MessageHandler_mn, _MessageHandler_gn, _MessageHandler_fn, _BaseBinaryDataFactory_bn, _BaseCanvasFactory_yn, _DOMFilterFactory_instances, _DOMFilterFactory_vn, _DOMFilterFactory_wn, _DOMFilterFactory_An, _DOMFilterFactory_xn, _DOMFilterFactory_En, _DOMFilterFactory__n, _DOMFilterFactory_S, _DOMFilterFactory_D_get, _DOMFilterFactory_Tn_get, _DOMFilterFactory_Sn_get, _DOMFilterFactory_Cn, _DOMFilterFactory_Dn, _DOMFilterFactory_Rn, _DOMFilterFactory_In, _DOMFilterFactory_Pn, _DOMFilterFactory_Bn, _DOMFilterFactory_Mn, _DOMFilterFactory_Fn, _DOMFilterFactory_kn, _WebGPUMesh_instances, _WebGPUMesh_On, _WebGPUMesh_Ln, _WebGPUMesh_Nn, _WebGPUMesh_Un, _WebGPUMesh_Hn, _WebGPUMesh_zn, _o, _CanvasGraphics_instances, _CanvasGraphics_jn, _CanvasGraphics_Gn, _CanvasGraphics_Wn, _BasePDFStream_Vn, _BasePDFStream_$n, _PDFDataTransportStream_instances, _PDFDataTransportStream_qn, _PDFDataTransportStreamReader_Xn, _PDFDataTransportStreamRangeReader_Xn, _PDFNetworkStream_instances, _PDFNetworkStream_Yn, _PDFNetworkStream_Jn, _PDFNetworkStream_Kn, _PDFNetworkStreamReader_instances, _PDFNetworkStreamReader_Xn, _PDFNetworkStreamReader_Qn, _PDFNetworkStreamReader_Zn, _PDFNetworkStreamReader_tr, _PDFNetworkStreamReader_Jn, _PDFNetworkStreamRangeReader_instances, _PDFNetworkStreamRangeReader_Xn, _PDFNetworkStreamRangeReader_Qn, _PDFNetworkStreamRangeReader_Zn, _PDFNetworkStreamRangeReader_tr, _p, _GlobalWorkerOptions_er, _GlobalWorkerOptions_ir, _Metadata_nr, _Metadata_rr, _OptionalContentGroup_sr, _OptionalContentGroup_ar, _OptionalContentGroup_or, _OptionalContentGroup_lr, _OptionalContentConfig_instances, _OptionalContentConfig_hr, _OptionalContentConfig_cr, _OptionalContentConfig_dr, _OptionalContentConfig_ur, _OptionalContentConfig_pr, _PagesMapper_instances, _PagesMapper_gr, _PagesMapper_mr, _PagesMapper_fr, _PagesMapper_br, _PagesMapper_yr, _PagesMapper_vr, _PagesMapper_wr, _PagesMapper_Ar, _PDFObjects_xr, _TextLayer_instances, _q, _TextLayer_Er, _TextLayer_Ct, _TextLayer__r, _TextLayer_Tr, _TextLayer_Sr, _TextLayer_Cr, _TextLayer_Dr, _TextLayer_Pr, _TextLayer_Mr, _TextLayer_kr, _TextLayer_Ir, _TextLayer_Fr, _TextLayer_Rr, _TextLayer_Br, _TextLayer_Or, _TextLayer_Lr, _TextLayer_Nr, _TextLayer_Ur, _TextLayer_Hr, _TextLayer_zr, _TextLayer_jr, _TextLayer_Gr, _TextLayer_Wr, _TextLayer_Vr, _TextLayer_qr, _TextLayer_Kr, _TextLayer_Yr, _TextLayer_Xr, _TextLayer_Qr, _TextLayer_$r, _TextLayer_Jr, _r, _PDFDocumentLoadingTask_xn, _PDFDataRangeTransport_Er, _PDFDataRangeTransport_Zr, _PDFDataRangeTransport_ts, _PDFDataRangeTransport_es, _PDFPageProxy_instances, _PDFPageProxy_is, _PDFPageProxy_ns, _PDFPageProxy_rs, _PDFWorker_instances, _s, _PDFWorker_Er, _PDFWorker_ss, _PDFWorker_er, _PDFWorker_as, _PDFWorker_os, _PDFWorker_ls, _PDFWorker_hs, _PDFWorker_us, _PDFWorker_cs, _PDFWorker_ds, _PDFWorker_gs, _PDFWorker_ps_get, _WorkerTransport_instances, _WorkerTransport_ms, _WorkerTransport_fs, _WorkerTransport_bs, _WorkerTransport_ys, _WorkerTransport_vs, _WorkerTransport_ws, _WorkerTransport_As, _WorkerTransport_xs, _WorkerTransport_Jn, _u, _InternalRenderTask_Es, _InternalRenderTask__s, _ColorPicker_instances, _v, _ColorPicker_Ts, _ColorPicker_Ss, _ColorPicker_Cs, _ColorPicker_Ds, _ColorPicker_Ps, _ColorPicker_Ms, _ColorPicker_a, _ColorPicker_ks, _ColorPicker_Is, _ColorPicker_y, _ColorPicker_Fs, _ColorPicker_Os, _ColorPicker_Ls, _ColorPicker_Bs, _ColorPicker_Rs, _ColorPicker_p, _ColorPicker_Ns_get, _w, _BasicColorPicker_Us, _BasicColorPicker_a, _BasicColorPicker_y, _BasicColorPicker_Fs, _AnnotationElement_instances, _AnnotationElement_Hs, _AnnotationElement_zs, _AnnotationElement_js, _AnnotationElement_Gs, _LinkAnnotationElement_instances, _LinkAnnotationElement_$s, _LinkAnnotationElement_Ws, _LinkAnnotationElement_Vs, _PopupAnnotationElement_instances, _PopupAnnotationElement_qs, _PopupElement_instances, _PopupElement_V, _PopupElement_Xs, _PopupElement_Ys, _PopupElement_Js, _PopupElement_Zs, _PopupElement_ea, _PopupElement_Ct, _PopupElement_ia, _PopupElement_na, _PopupElement_ra, _PopupElement_sa, _PopupElement_aa, _PopupElement_oa, _PopupElement_la, _PopupElement_ha, _PopupElement_F, _PopupElement_ca, _PopupElement_da, _PopupElement_we, _PopupElement_ua, _PopupElement_fe, _PopupElement_pa, _PopupElement_Hs, _PopupElement_ga, _PopupElement_ma, _PopupElement_fa, _PopupElement_ba, _PopupElement_ya, _PopupElement_wa, _PopupElement_va, _PopupElement_Aa_get, _PopupElement_xa_get, _PopupElement_Ea_get, _PopupElement__a, _PopupElement_Bs, _PopupElement_Ta, _PopupElement_ta, _PopupElement_Qs, _PopupElement_Ks, _LineAnnotationElement_Sa, _SquareAnnotationElement_Ca, _CircleAnnotationElement_Da, _PolylineAnnotationElement_Pa, _InkAnnotationElement_instances, _InkAnnotationElement_Ma, _InkAnnotationElement_ka, _InkAnnotationElement_Ia, _FileAttachmentAnnotationElement_instances, _FileAttachmentAnnotationElement_Fa, _FileAttachmentAnnotationElement_Ra, _AnnotationLayer_instances, _AnnotationLayer_Ba, _AnnotationLayer_Oa, _AnnotationLayer_j, _AnnotationLayer_La, _AnnotationLayer_Na, _AnnotationLayer_Ua, _AnnotationLayer_ra, _AnnotationLayer_Ha, _AnnotationLayer_za, _AnnotationLayer_ja, _FreeTextEditor_instances, _x, _FreeTextEditor_Ga, _FreeTextEditor_Wa, _FreeTextEditor_Va, _FreeTextEditor_xa, _FreeTextEditor_$a, _FreeTextEditor_va, _FreeTextEditor_Xa, _FreeTextEditor_qa, _FreeTextEditor_Ya, _FreeTextEditor_Ka, _FreeTextEditor_Qa, _FreeTextEditor_Ja, _FreeTextEditor_Za, _FreeDrawOutliner_instances, _y, _FreeDrawOutliner_to, _FreeDrawOutliner_eo, _FreeDrawOutliner_io, _FreeDrawOutliner_no, _FreeDrawOutliner_ro, _FreeDrawOutliner_so, _FreeDrawOutliner_ao, _FreeDrawOutliner_oo, _FreeDrawOutliner_lo, _FreeDrawOutliner_ho, _FreeDrawOutliner_co, _FreeDrawOutliner_do, _FreeDrawOutliner_uo, _FreeDrawOutliner_po, _FreeDrawOutliner_go, _FreeDrawOutliner_mo, _FreeDrawOutliner_fo, _FreeDrawOutliner_bo, _FreeDrawOutliner_vo, _FreeDrawOutliner_yo, _FreeDrawOutliner_wo, _FreeDrawOutliner_xo, _FreeDrawOutliner_Ao, _FreeDrawOutline_instances, _FreeDrawOutline_to, _FreeDrawOutline_Eo, _FreeDrawOutline_io, _FreeDrawOutline_no, _FreeDrawOutline_uo, _FreeDrawOutline_co, _FreeDrawOutline__o, _FreeDrawOutline_To, _HighlightOutliner_instances, _HighlightOutliner_to, _HighlightOutliner_So, _HighlightOutliner_Co, _HighlightOutliner_Do, _HighlightOutliner_Po, _HighlightOutliner_Fo, _HighlightOutliner_Ro, _HighlightOutliner_ko, _HighlightOutliner_Io, _HighlightOutliner_Mo, _HighlightOutline_to, _HighlightOutline_Bo, _HighlightEditor_instances, _z, _HighlightEditor_Oo, _HighlightEditor_Lo, _HighlightEditor_No, _HighlightEditor_Uo, _HighlightEditor_s, _HighlightEditor_Ho, _HighlightEditor_zo, _HighlightEditor_jo, _HighlightEditor_Go, _HighlightEditor_Wo, _HighlightEditor_S, _HighlightEditor_Vo, _HighlightEditor_So, _HighlightEditor_Co, _HighlightEditor_$o, _HighlightEditor_be, _HighlightEditor_do, _HighlightEditor_qo, _HighlightEditor_Ko, _HighlightEditor_Xo, _HighlightEditor_va, _HighlightEditor_Qo, _HighlightEditor_Zo, _HighlightEditor_el, _HighlightEditor_Yo, _HighlightEditor_Jo, _HighlightEditor_il, _HighlightEditor_nl, _HighlightEditor_tl, _HighlightEditor_rl, _HighlightEditor_sl, _HighlightEditor_ol, _HighlightEditor_al, _HighlightEditor_Za, _DrawingOptions_ll, _DrawingEditor_instances, _0, _DrawingEditor_hl, _DrawingEditor_cl, _DrawingEditor_dl, _DrawingEditor_ul, _DrawingEditor_pl, _DrawingEditor_gl, _DrawingEditor_ml, _DrawingEditor_el, _DrawingEditor_Yo, _DrawingEditor_vl, _DrawingEditor_bl, _DrawingEditor_fl, _DrawingEditor_yl, _InkDrawOutliner_instances, _InkDrawOutliner_so, _InkDrawOutliner_Sa, _InkDrawOutliner_wl, _InkDrawOutliner_Fr, _InkDrawOutliner_do, _InkDrawOutliner_uo, _InkDrawOutliner_Al, _InkDrawOutliner_xl, _InkDrawOutliner_Bo, _InkDrawOutliner_El, _InkDrawOutliner__l, _InkDrawOutliner_Tl, _InkDrawOutline_instances, _InkDrawOutline_Eo, _InkDrawOutline_Sl, _InkDrawOutline_io, _InkDrawOutline_wl, _InkDrawOutline_El, _InkDrawOutline__l, _InkDrawOutline_Cl, _InkDrawOutline_Fr, _InkDrawOutline_do, _InkDrawOutline_Ml, _InkDrawOutline_Pl, _InkDrawOutline_Dl, _InkDrawOutline_Qo, _InkEditor_instances, _InkEditor_Za, _1, _SignatureExtractor_kl, _SignatureExtractor_Il, _SignatureExtractor_Fl, _SignatureExtractor_Rl, _SignatureExtractor_Bl, _SignatureExtractor_Ol, _SignatureExtractor_Ll, _SignatureExtractor_Nl, _SignatureExtractor_Ul, _SignatureExtractor_Hl, _SignatureExtractor_zl, _SignatureExtractor_jl, _SignatureExtractor_Gl, _SignatureEditor_Wl, _SignatureEditor_Vl, _SignatureEditor_$l, _SignatureEditor_ql, _StampEditor_instances, _StampEditor_Xl, _StampEditor_Yl, _StampEditor_Kl, _StampEditor_Jl, _StampEditor_Ql, _StampEditor_Zl, _StampEditor_th, _StampEditor_eh, _StampEditor_ih, _StampEditor_nh, _StampEditor_rh, _StampEditor_sh, _StampEditor_oh, _StampEditor_lh, _StampEditor_ah, _StampEditor_ch, _StampEditor_hh, _StampEditor_dh, _StampEditor_Za, _AnnotationEditorLayer_instances, _2, _AnnotationEditorLayer_Ba, _AnnotationEditorLayer_uh, _AnnotationEditorLayer_ph, _AnnotationEditorLayer_gh, _AnnotationEditorLayer_mh, _AnnotationEditorLayer_fh, _AnnotationEditorLayer_bh, _AnnotationEditorLayer_yh, _AnnotationEditorLayer_vh, _AnnotationEditorLayer_wh, _AnnotationEditorLayer_Ah, _AnnotationEditorLayer_xh, _AnnotationEditorLayer_Eh, _AnnotationEditorLayer__h, _AnnotationEditorLayer_Th, _AnnotationEditorLayer_y, _AnnotationEditorLayer_J, _AnnotationEditorLayer_Ch_get, _AnnotationEditorLayer_Dh, _AnnotationEditorLayer_Ph_get, _AnnotationEditorLayer_Mh, _AnnotationEditorLayer_kh, _AnnotationEditorLayer_Sh, _DrawLayer_instances, _3, _DrawLayer_sa, _DrawLayer_Ih, _DrawLayer_Fh, _DrawLayer_S, _DrawLayer_Rh, _DrawLayer_Bh, _DrawLayer_Oh, _DrawLayer_Lh, _TextLayerImages_instances, _4, _TextLayerImages_Nh, _TextLayerImages_Uh, _TextLayerImages_Hh, _TextLayerImages_zh, _TextLayerImages_Mr, _TextLayerImages_Pr, _TextLayerImages_jh, _TextLayerImages_Gh;
    var t = { 9306(t, e, i) { var n = i(4901), r = i(6823), s = TypeError; t.exports = function (t) { if (n(t))
            return t; throw new s(r(t) + " is not a function"); }; }, 6194(t, e, i) { var n = i(2248).has; t.exports = function (t) { n(t); return t; }; }, 3506(t, e, i) { var n = i(3925), r = String, s = TypeError; t.exports = function (t) { if (n(t))
            return t; throw new s("Can't set " + r(t) + " as a prototype"); }; }, 7080(t, e, i) { var n = i(4402).has; t.exports = function (t) { n(t); return t; }; }, 3463(t) { var e = TypeError; t.exports = function (t) { if ("string" == typeof t)
            return t; throw new e("Argument is not a string"); }; }, 4328(t, e, i) { var n = i(4995), r = new n.WeakMap, s = n.set, a = n.remove; t.exports = function (t) { s(r, t, 1); a(r, t); return t; }; }, 6557(t, e, i) { var n = i(4995).has; t.exports = function (t) { n(t); return t; }; }, 679(t, e, i) { var n = i(1625), r = TypeError; t.exports = function (t, e) { if (n(e, t))
            return t; throw new r("Incorrect invocation"); }; }, 3972(t, e, i) { var n = i(34), r = String, s = TypeError; t.exports = function (t) { if (void 0 === t || n(t))
            return t; throw new s(r(t) + " is not an object or undefined"); }; }, 8551(t, e, i) { var n = i(34), r = String, s = TypeError; t.exports = function (t) { if (n(t))
            return t; throw new s(r(t) + " is not an object"); }; }, 4154(t, e, i) { var n = i(6955), r = TypeError; t.exports = function (t) { if ("Uint8Array" === n(t))
            return t; throw new r("Argument is not an Uint8Array"); }; }, 7811(t) { t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView; }, 7394(t, e, i) { var n = i(4576), r = i(6706), s = i(2195), a = n.ArrayBuffer, o = n.TypeError; t.exports = a && r(a.prototype, "byteLength", "get") || function (t) { if ("ArrayBuffer" !== s(t))
            throw new o("ArrayBuffer expected"); return t.byteLength; }; }, 3238(t, e, i) { var n = i(4576), r = i(7811), s = i(7394), a = n.DataView; t.exports = function (t) { if (!r || 0 !== s(t))
            return !1; try {
            new a(t);
            return !1;
        }
        catch (t) {
            return !0;
        } }; }, 5169(t, e, i) { var n = i(3238), r = TypeError; t.exports = function (t) { if (n(t))
            throw new r("ArrayBuffer is detached"); return t; }; }, 5636(t, e, i) { var n = i(4576), r = i(9504), s = i(6706), a = i(7696), o = i(5169), l = i(7394), h = i(4483), c = i(1548), d = n.structuredClone, u = n.ArrayBuffer, p = n.DataView, g = Math.min, m = u.prototype, f = p.prototype, b = r(m.slice), y = s(m, "resizable", "get"), v = s(m, "maxByteLength", "get"), w = r(f.getInt8), A = r(f.setInt8); t.exports = (c || h) && function (t, e, i) { var n, r = l(t), s = void 0 === e ? r : a(e), m = !y || !y(t); o(t); if (c) {
            t = d(t, { transfer: [t] });
            if (r === s && (i || m))
                return t;
        } if (r >= s && (!i || m))
            n = b(t, 0, s);
        else {
            var f = i && !m && v ? { maxByteLength: v(t) } : void 0;
            n = new u(s, f);
            for (var x = new p(t), E = new p(n), _ = g(s, r), T = 0; T < _; T++)
                A(E, T, w(x, T));
        } c || h(t); return n; }; }, 4644(t, e, i) { var n, r, s, a = i(7811), o = i(3724), l = i(4576), h = i(4901), c = i(34), d = i(9297), u = i(6955), p = i(6823), g = i(6699), m = i(6840), f = i(2106), b = i(1625), y = i(2787), v = i(2967), w = i(8227), A = i(3392), x = i(1181), E = x.enforce, _ = x.get, T = l.Int8Array, S = T && T.prototype, C = l.Uint8ClampedArray, D = C && C.prototype, P = T && y(T), M = S && y(S), k = Object.prototype, I = l.TypeError, R = w("toStringTag"), B = A("TYPED_ARRAY_TAG"), O = "TypedArrayConstructor", L = a && !!v && "Opera" !== u(l.opera), N = !1, U = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, H = { BigInt64Array: 8, BigUint64Array: 8 }, getTypedArrayConstructor = function (t) { var e = y(t); if (c(e)) {
            var i = _(e);
            return i && d(i, O) ? i[O] : getTypedArrayConstructor(e);
        } }, isTypedArray = function (t) { if (!c(t))
            return !1; var e = u(t); return d(U, e) || d(H, e); }; for (n in U)
            (s = (r = l[n]) && r.prototype) ? E(s)[O] = r : L = !1; for (n in H)
            (s = (r = l[n]) && r.prototype) && (E(s)[O] = r); if (!L || !h(P) || P === Function.prototype) {
            P = function TypedArray() { throw new I("Incorrect invocation"); };
            if (L)
                for (n in U)
                    l[n] && v(l[n], P);
        } if (!L || !M || M === k) {
            M = P.prototype;
            if (L)
                for (n in U)
                    l[n] && v(l[n].prototype, M);
        } L && y(D) !== M && v(D, M); if (o && !d(M, R)) {
            N = !0;
            f(M, R, { configurable: !0, get: function () { return c(this) ? this[B] : void 0; } });
            for (n in U)
                l[n] && g(l[n], B, n);
        } t.exports = { NATIVE_ARRAY_BUFFER_VIEWS: L, TYPED_ARRAY_TAG: N && B, aTypedArray: function (t) { if (isTypedArray(t))
                return t; throw new I("Target is not a typed array"); }, aTypedArrayConstructor: function (t) { if (h(t) && (!v || b(P, t)))
                return t; throw new I(p(t) + " is not a typed array constructor"); }, exportTypedArrayMethod: function (t, e, i, n) { if (o) {
                if (i)
                    for (var r in U) {
                        var s = l[r];
                        if (s && d(s.prototype, t))
                            try {
                                delete s.prototype[t];
                            }
                            catch (i) {
                                try {
                                    s.prototype[t] = e;
                                }
                                catch (t) { }
                            }
                    }
                M[t] && !i || m(M, t, i ? e : L && S[t] || e, n);
            } }, exportTypedArrayStaticMethod: function (t, e, i) { var n, r; if (o) {
                if (v) {
                    if (i)
                        for (n in U)
                            if ((r = l[n]) && d(r, t))
                                try {
                                    delete r[t];
                                }
                                catch (t) { }
                    if (P[t] && !i)
                        return;
                    try {
                        return m(P, t, i ? e : L && P[t] || e);
                    }
                    catch (t) { }
                }
                for (n in U)
                    !(r = l[n]) || r[t] && !i || m(r, t, e);
            } }, getTypedArrayConstructor, isView: function isView(t) { if (!c(t))
                return !1; var e = u(t); return "DataView" === e || d(U, e) || d(H, e); }, isTypedArray, TypedArray: P, TypedArrayPrototype: M }; }, 5370(t, e, i) { var n = i(6198); t.exports = function (t, e, i) { for (var r = 0, s = arguments.length > 2 ? i : n(e), a = new t(s); s > r;)
            a[r] = e[r++]; return a; }; }, 9617(t, e, i) { var n = i(5397), r = i(5610), s = i(6198), createMethod = function (t) { return function (e, i, a) { var o = n(e), l = s(o); if (0 === l)
            return !t && -1; var h, c = r(a, l); if (t && i != i) {
            for (; l > c;)
                if ((h = o[c++]) != h)
                    return !0;
        }
        else
            for (; l > c; c++)
                if ((t || c in o) && o[c] === i)
                    return t || c || 0; return !t && -1; }; }; t.exports = { includes: createMethod(!0), indexOf: createMethod(!1) }; }, 4527(t, e, i) { var n = i(3724), r = i(4376), s = TypeError, a = Object.getOwnPropertyDescriptor, o = n && !function () { if (void 0 !== this)
            return !0; try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        }
        catch (t) {
            return t instanceof TypeError;
        } }(); t.exports = o ? function (t, e) { if (r(t) && !a(t, "length").writable)
            throw new s("Cannot set read only .length"); return t.length = e; } : function (t, e) { return t.length = e; }; }, 7680(t, e, i) { var n = i(9504); t.exports = n([].slice); }, 2804(t) { var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = e + "+/", n = e + "-_", inverse = function (t) { for (var e = {}, i = 0; i < 64; i++)
            e[t.charAt(i)] = i; return e; }; t.exports = { i2c: i, c2i: inverse(i), i2cUrl: n, c2iUrl: inverse(n) }; }, 6319(t, e, i) { var n = i(8551), r = i(9539); t.exports = function (t, e, i, s) { try {
            return s ? e(n(i)[0], i[1]) : e(i);
        }
        catch (e) {
            r(t, "throw", e);
        } }; }, 2195(t, e, i) { var n = i(9504), r = n({}.toString), s = n("".slice); t.exports = function (t) { return s(r(t), 8, -1); }; }, 6955(t, e, i) { var n = i(2140), r = i(4901), s = i(2195), a = i(8227)("toStringTag"), o = Object, l = "Arguments" === s(function () { return arguments; }()); t.exports = n ? s : function (t) { var e, i, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) { try {
            return t[e];
        }
        catch (t) { } }(e = o(t), a)) ? i : l ? s(e) : "Object" === (n = s(e)) && r(e.callee) ? "Arguments" : n; }; }, 7740(t, e, i) { var n = i(9297), r = i(5031), s = i(7347), a = i(4913); t.exports = function (t, e, i) { for (var o = r(e), l = a.f, h = s.f, c = 0; c < o.length; c++) {
            var d = o[c];
            n(t, d) || i && n(i, d) || l(t, d, h(e, d));
        } }; }, 2211(t, e, i) { var n = i(9039); t.exports = !n(function () { function F() { } F.prototype.constructor = null; return Object.getPrototypeOf(new F) !== F.prototype; }); }, 2529(t) { t.exports = function (t, e) { return { value: t, done: e }; }; }, 6699(t, e, i) { var n = i(3724), r = i(4913), s = i(6980); t.exports = n ? function (t, e, i) { return r.f(t, e, s(1, i)); } : function (t, e, i) { t[e] = i; return t; }; }, 6980(t) { t.exports = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }; }; }, 4659(t, e, i) { var n = i(3724), r = i(4913), s = i(6980); t.exports = function (t, e, i) { n ? r.f(t, e, s(0, i)) : t[e] = i; }; }, 2106(t, e, i) { var n = i(283), r = i(4913); t.exports = function (t, e, i) { i.get && n(i.get, e, { getter: !0 }); i.set && n(i.set, e, { setter: !0 }); return r.f(t, e, i); }; }, 6840(t, e, i) { var n = i(4901), r = i(4913), s = i(283), a = i(9433); t.exports = function (t, e, i, o) { o || (o = {}); var l = o.enumerable, h = void 0 !== o.name ? o.name : e; n(i) && s(i, h, o); if (o.global)
            l ? t[e] = i : a(e, i);
        else {
            try {
                o.unsafe ? t[e] && (l = !0) : delete t[e];
            }
            catch (t) { }
            l ? t[e] = i : r.f(t, e, { value: i, enumerable: !1, configurable: !o.nonConfigurable, writable: !o.nonWritable });
        } return t; }; }, 6279(t, e, i) { var n = i(6840); t.exports = function (t, e, i) { for (var r in e)
            n(t, r, e[r], i); return t; }; }, 9433(t, e, i) { var n = i(4576), r = Object.defineProperty; t.exports = function (t, e) { try {
            r(n, t, { value: e, configurable: !0, writable: !0 });
        }
        catch (i) {
            n[t] = e;
        } return e; }; }, 3724(t, e, i) { var n = i(9039); t.exports = !n(function () { return 7 !== Object.defineProperty({}, 1, { get: function () { return 7; } })[1]; }); }, 4483(t, e, i) { var n, r, s, a, o = i(4576), l = i(9429), h = i(1548), c = o.structuredClone, d = o.ArrayBuffer, u = o.MessageChannel, p = !1; if (h)
            p = function (t) { c(t, { transfer: [t] }); };
        else if (d)
            try {
                u || (n = l("worker_threads")) && (u = n.MessageChannel);
                if (u) {
                    r = new u;
                    s = new d(2);
                    a = function (t) { r.port1.postMessage(null, [t]); };
                    if (2 === s.byteLength) {
                        a(s);
                        0 === s.byteLength && (p = a);
                    }
                }
            }
            catch (t) { } t.exports = p; }, 4055(t, e, i) { var n = i(4576), r = i(34), s = n.document, a = r(s) && r(s.createElement); t.exports = function (t) { return a ? s.createElement(t) : {}; }; }, 6837(t) { var e = TypeError; t.exports = function (t) { if (t > 9007199254740991)
            throw e("Maximum allowed index exceeded"); return t; }; }, 5002(t) { t.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } }; }, 8727(t) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; }, 6193(t, e, i) { var n = i(4215); t.exports = "NODE" === n; }, 2839(t, e, i) { var n = i(4576).navigator, r = n && n.userAgent; t.exports = r ? String(r) : ""; }, 9519(t, e, i) { var n, r, s = i(4576), a = i(2839), o = s.process, l = s.Deno, h = o && o.versions || l && l.version, c = h && h.v8; c && (r = (n = c.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])); !r && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (r = +n[1]); t.exports = r; }, 4215(t, e, i) { var n = i(4576), r = i(2839), s = i(2195), userAgentStartsWith = function (t) { return r.slice(0, t.length) === t; }; t.exports = userAgentStartsWith("Bun/") ? "BUN" : userAgentStartsWith("Cloudflare-Workers") ? "CLOUDFLARE" : userAgentStartsWith("Deno/") ? "DENO" : userAgentStartsWith("Node.js/") ? "NODE" : n.Bun && "string" == typeof Bun.version ? "BUN" : n.Deno && "object" == typeof Deno.version ? "DENO" : "process" === s(n.process) ? "NODE" : n.window && n.document ? "BROWSER" : "REST"; }, 8574(t, e, i) { var n = i(9504), r = Error, s = n("".replace), a = String(new r("zxcasd").stack), o = /\n\s*at [^:]*:[^\n]*/, l = o.test(a); t.exports = function (t, e) { if (l && "string" == typeof t && !r.prepareStackTrace)
            for (; e--;)
                t = s(t, o, ""); return t; }; }, 6518(t, e, i) { var n = i(4576), r = i(7347).f, s = i(6699), a = i(6840), o = i(9433), l = i(7740), h = i(2796); t.exports = function (t, e) { var i, c, d, u, p, g = t.target, m = t.global, f = t.stat; if (i = m ? n : f ? n[g] || o(g, {}) : n[g] && n[g].prototype)
            for (c in e) {
                u = e[c];
                d = t.dontCallGetSet ? (p = r(i, c)) && p.value : i[c];
                if (!h(m ? c : g + (f ? "." : "#") + c, t.forced) && void 0 !== d) {
                    if (typeof u == typeof d)
                        continue;
                    l(u, d);
                }
                (t.sham || d && d.sham) && s(u, "sham", !0);
                a(i, c, u, t);
            } }; }, 9039(t) { t.exports = function (t) { try {
            return !!t();
        }
        catch (t) {
            return !0;
        } }; }, 8745(t, e, i) { var n = i(616), r = Function.prototype, s = r.apply, a = r.call; t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(s) : function () { return a.apply(s, arguments); }); }, 6080(t, e, i) { var n = i(7476), r = i(9306), s = i(616), a = n(n.bind); t.exports = function (t, e) { r(t); return void 0 === e ? t : s ? a(t, e) : function () { return t.apply(e, arguments); }; }; }, 616(t, e, i) { var n = i(9039); t.exports = !n(function () { var t = function () { }.bind(); return "function" != typeof t || t.hasOwnProperty("prototype"); }); }, 9565(t, e, i) { var n = i(616), r = Function.prototype.call; t.exports = n ? r.bind(r) : function () { return r.apply(r, arguments); }; }, 350(t, e, i) { var n = i(3724), r = i(9297), s = Function.prototype, a = n && Object.getOwnPropertyDescriptor, o = r(s, "name"), l = o && "something" === function something() { }.name, h = o && (!n || n && a(s, "name").configurable); t.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: h }; }, 6706(t, e, i) { var n = i(9504), r = i(9306); t.exports = function (t, e, i) { try {
            return n(r(Object.getOwnPropertyDescriptor(t, e)[i]));
        }
        catch (t) { } }; }, 7476(t, e, i) { var n = i(2195), r = i(9504); t.exports = function (t) { if ("Function" === n(t))
            return r(t); }; }, 9504(t, e, i) { var n = i(616), r = Function.prototype, s = r.call, a = n && r.bind.bind(s, s); t.exports = n ? a : function (t) { return function () { return s.apply(t, arguments); }; }; }, 944(t) { var e = TypeError; t.exports = function (t) { var i = t && t.alphabet; if (void 0 === i || "base64" === i || "base64url" === i)
            return i || "base64"; throw new e("Incorrect `alphabet` option"); }; }, 9429(t, e, i) { var n = i(4576), r = i(6193); t.exports = function (t) { if (r) {
            try {
                return n.process.getBuiltinModule(t);
            }
            catch (t) { }
            try {
                return Function('return require("' + t + '")')();
            }
            catch (t) { }
        } }; }, 7751(t, e, i) { var n = i(4576), r = i(4901); t.exports = function (t, e) { return arguments.length < 2 ? (i = n[t], r(i) ? i : void 0) : n[t] && n[t][e]; var i; }; }, 1767(t) { t.exports = function (t) { return { iterator: t, next: t.next, done: !1 }; }; }, 8646(t, e, i) { var n = i(9565), r = i(8551), s = i(1767), a = i(851); t.exports = function (t, e) { e && "string" == typeof t || r(t); var i = a(t); return s(r(void 0 !== i ? n(i, t) : t)); }; }, 851(t, e, i) { var n = i(6955), r = i(5966), s = i(4117), a = i(6269), o = i(8227)("iterator"); t.exports = function (t) { if (!s(t))
            return r(t, o) || r(t, "@@iterator") || a[n(t)]; }; }, 81(t, e, i) { var n = i(9565), r = i(9306), s = i(8551), a = i(6823), o = i(851), l = TypeError; t.exports = function (t, e) { var i = arguments.length < 2 ? o(t) : e; if (r(i))
            return s(n(i, t)); throw new l(a(t) + " is not iterable"); }; }, 5966(t, e, i) { var n = i(9306), r = i(4117); t.exports = function (t, e) { var i = t[e]; return r(i) ? void 0 : n(i); }; }, 3789(t, e, i) { var n = i(9306), r = i(8551), s = i(9565), a = i(1291), o = i(1767), l = "Invalid size", h = RangeError, c = TypeError, d = Math.max, SetRecord = function (t, e) { this.set = t; this.size = d(e, 0); this.has = n(t.has); this.keys = n(t.keys); }; SetRecord.prototype = { getIterator: function () { return o(r(s(this.keys, this.set))); }, includes: function (t) { return s(this.has, this.set, t); } }; t.exports = function (t) { r(t); var e = +t.size; if (e != e)
            throw new c(l); var i = a(e); if (i < 0)
            throw new h(l); return new SetRecord(t, i); }; }, 4576(t) { var check = function (t) { return t && t.Math === Math && t; }; t.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof global && global) || check("object" == typeof this && this) || function () { return this; }() || Function("return this")(); }, 9297(t, e, i) { var n = i(9504), r = i(8981), s = n({}.hasOwnProperty); t.exports = Object.hasOwn || function hasOwn(t, e) { return s(r(t), e); }; }, 421(t) { t.exports = {}; }, 397(t, e, i) { var n = i(7751); t.exports = n("document", "documentElement"); }, 5917(t, e, i) { var n = i(3724), r = i(9039), s = i(4055); t.exports = !n && !r(function () { return 7 !== Object.defineProperty(s("div"), "a", { get: function () { return 7; } }).a; }); }, 7055(t, e, i) { var n = i(9504), r = i(9039), s = i(2195), a = Object, o = n("".split); t.exports = r(function () { return !a("z").propertyIsEnumerable(0); }) ? function (t) { return "String" === s(t) ? o(t, "") : a(t); } : a; }, 3167(t, e, i) { var n = i(4901), r = i(34), s = i(2967); t.exports = function (t, e, i) { var a, o; s && n(a = e.constructor) && a !== i && r(o = a.prototype) && o !== i.prototype && s(t, o); return t; }; }, 3706(t, e, i) { var n = i(9504), r = i(4901), s = i(7629), a = n(Function.toString); r(s.inspectSource) || (s.inspectSource = function (t) { return a(t); }); t.exports = s.inspectSource; }, 1181(t, e, i) { var n, r, s, a = i(8622), o = i(4576), l = i(34), h = i(6699), c = i(9297), d = i(7629), u = i(6119), p = i(421), g = "Object already initialized", m = o.TypeError, f = o.WeakMap; if (a || d.state) {
            var b = d.state || (d.state = new f);
            b.get = b.get;
            b.has = b.has;
            b.set = b.set;
            n = function (t, e) { if (b.has(t))
                throw new m(g); e.facade = t; b.set(t, e); return e; };
            r = function (t) { return b.get(t) || {}; };
            s = function (t) { return b.has(t); };
        }
        else {
            var y = u("state");
            p[y] = !0;
            n = function (t, e) { if (c(t, y))
                throw new m(g); e.facade = t; h(t, y, e); return e; };
            r = function (t) { return c(t, y) ? t[y] : {}; };
            s = function (t) { return c(t, y); };
        } t.exports = { set: n, get: r, has: s, enforce: function (t) { return s(t) ? r(t) : n(t, {}); }, getterFor: function (t) { return function (e) { var i; if (!l(e) || (i = r(e)).type !== t)
                throw new m("Incompatible receiver, " + t + " required"); return i; }; } }; }, 4209(t, e, i) { var n = i(8227), r = i(6269), s = n("iterator"), a = Array.prototype; t.exports = function (t) { return void 0 !== t && (r.Array === t || a[s] === t); }; }, 4376(t, e, i) { var n = i(2195); t.exports = Array.isArray || function isArray(t) { return "Array" === n(t); }; }, 1108(t, e, i) { var n = i(6955); t.exports = function (t) { var e = n(t); return "BigInt64Array" === e || "BigUint64Array" === e; }; }, 4901(t) { var e = "object" == typeof document && document.all; t.exports = void 0 === e && void 0 !== e ? function (t) { return "function" == typeof t || t === e; } : function (t) { return "function" == typeof t; }; }, 2796(t, e, i) { var n = i(9039), r = i(4901), s = /#|\.prototype\./, isForced = function (t, e) { var i = o[a(t)]; return i === h || i !== l && (r(e) ? n(e) : !!e); }, a = isForced.normalize = function (t) { return String(t).replace(s, ".").toLowerCase(); }, o = isForced.data = {}, l = isForced.NATIVE = "N", h = isForced.POLYFILL = "P"; t.exports = isForced; }, 4117(t) { t.exports = function (t) { return null == t; }; }, 34(t, e, i) { var n = i(4901); t.exports = function (t) { return "object" == typeof t ? null !== t : n(t); }; }, 3925(t, e, i) { var n = i(34); t.exports = function (t) { return n(t) || null === t; }; }, 6395(t) { t.exports = !1; }, 5810(t, e, i) { var n = i(34), r = i(1181).get; t.exports = function isRawJSON(t) { if (!n(t))
            return !1; var e = r(t); return !!e && "RawJSON" === e.type; }; }, 757(t, e, i) { var n = i(7751), r = i(4901), s = i(1625), a = i(7040), o = Object; t.exports = a ? function (t) { return "symbol" == typeof t; } : function (t) { var e = n("Symbol"); return r(e) && s(e.prototype, o(t)); }; }, 507(t, e, i) { var n = i(9565); t.exports = function (t, e, i) { for (var r, s, a = i ? t : t.iterator, o = t.next; !(r = n(o, a)).done;)
            if (void 0 !== (s = e(r.value)))
                return s; }; }, 2652(t, e, i) { var n = i(6080), r = i(9565), s = i(8551), a = i(6823), o = i(4209), l = i(6198), h = i(1625), c = i(81), d = i(851), u = i(9539), p = TypeError, Result = function (t, e) { this.stopped = t; this.result = e; }, g = Result.prototype; t.exports = function (t, e, i) { var m, f, b, y, v, w, A, x = i && i.that, E = !(!i || !i.AS_ENTRIES), _ = !(!i || !i.IS_RECORD), T = !(!i || !i.IS_ITERATOR), S = !(!i || !i.INTERRUPTED), C = n(e, x), stop = function (t) { m && u(m, "normal"); return new Result(!0, t); }, callFn = function (t) { if (E) {
            s(t);
            return S ? C(t[0], t[1], stop) : C(t[0], t[1]);
        } return S ? C(t, stop) : C(t); }; if (_)
            m = t.iterator;
        else if (T)
            m = t;
        else {
            if (!(f = d(t)))
                throw new p(a(t) + " is not iterable");
            if (o(f)) {
                for (b = 0, y = l(t); y > b; b++)
                    if ((v = callFn(t[b])) && h(g, v))
                        return v;
                return new Result(!1);
            }
            m = c(t, f);
        } w = _ ? t.next : m.next; for (; !(A = r(w, m)).done;) {
            try {
                v = callFn(A.value);
            }
            catch (t) {
                u(m, "throw", t);
            }
            if ("object" == typeof v && v && h(g, v))
                return v;
        } return new Result(!1); }; }, 1385(t, e, i) { var n = i(9539); t.exports = function (t, e, i) { for (var r = t.length - 1; r >= 0; r--)
            if (void 0 !== t[r])
                try {
                    i = n(t[r].iterator, e, i);
                }
                catch (t) {
                    e = "throw";
                    i = t;
                } if ("throw" === e)
            throw i; return i; }; }, 9539(t, e, i) { var n = i(9565), r = i(8551), s = i(5966); t.exports = function (t, e, i) { var a, o; r(t); try {
            if (!(a = s(t, "return"))) {
                if ("throw" === e)
                    throw i;
                return i;
            }
            a = n(a, t);
        }
        catch (t) {
            o = !0;
            a = t;
        } if ("throw" === e)
            throw i; if (o)
            throw a; r(a); return i; }; }, 9462(t, e, i) { var n = i(9565), r = i(2360), s = i(6699), a = i(6279), o = i(8227), l = i(1181), h = i(5966), c = i(7657).IteratorPrototype, d = i(2529), u = i(9539), p = i(1385), g = o("toStringTag"), m = "IteratorHelper", f = "WrapForValidIterator", b = "normal", y = "throw", v = l.set, createIteratorProxyPrototype = function (t) { var e = l.getterFor(t ? f : m); return a(r(c), { next: function next() { var i = e(this); if (t)
                return i.nextHandler(); if (i.done)
                return d(void 0, !0); try {
                var n = i.nextHandler();
                return i.returnHandlerResult ? n : d(n, i.done);
            }
            catch (t) {
                i.done = !0;
                throw t;
            } }, return: function () { var i = e(this), r = i.iterator; i.done = !0; if (t) {
                var s = h(r, "return");
                return s ? n(s, r) : d(void 0, !0);
            } if (i.inner)
                try {
                    u(i.inner.iterator, b);
                }
                catch (t) {
                    return u(r, y, t);
                } if (i.openIters)
                try {
                    p(i.openIters, b);
                }
                catch (t) {
                    return u(r, y, t);
                } r && u(r, b); return d(void 0, !0); } }); }, w = createIteratorProxyPrototype(!0), A = createIteratorProxyPrototype(!1); s(A, g, "Iterator Helper"); t.exports = function (t, e, i) { var n = function Iterator(n, r) { if (r) {
            r.iterator = n.iterator;
            r.next = n.next;
        }
        else
            r = n; r.type = e ? f : m; r.returnHandlerResult = !!i; r.nextHandler = t; r.counter = 0; r.done = !1; v(this, r); }; n.prototype = e ? w : A; return n; }; }, 684(t) { t.exports = function (t, e) { var i = "function" == typeof Iterator && Iterator.prototype[t]; if (i)
            try {
                i.call({ next: null }, e).next();
            }
            catch (t) {
                return !0;
            } }; }, 4549(t, e, i) { var n = i(4576); t.exports = function (t, e) { var i = n.Iterator, r = i && i.prototype, s = r && r[t], a = !1; if (s)
            try {
                s.call({ next: function () { return { done: !0 }; }, return: function () { a = !0; } }, -1);
            }
            catch (t) {
                t instanceof e || (a = !1);
            } if (!a)
            return s; }; }, 7657(t, e, i) { var n, r, s, a = i(9039), o = i(4901), l = i(34), h = i(2360), c = i(2787), d = i(6840), u = i(8227), p = i(6395), g = u("iterator"), m = !1; [].keys && ("next" in (s = [].keys()) ? (r = c(c(s))) !== Object.prototype && (n = r) : m = !0); !l(n) || a(function () { var t = {}; return n[g].call(t) !== t; }) ? n = {} : p && (n = h(n)); o(n[g]) || d(n, g, function () { return this; }); t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: m }; }, 6269(t) { t.exports = {}; }, 6198(t, e, i) { var n = i(8014); t.exports = function (t) { return n(t.length); }; }, 283(t, e, i) { var n = i(9504), r = i(9039), s = i(4901), a = i(9297), o = i(3724), l = i(350).CONFIGURABLE, h = i(3706), c = i(1181), d = c.enforce, u = c.get, p = String, g = Object.defineProperty, m = n("".slice), f = n("".replace), b = n([].join), y = o && !r(function () { return 8 !== g(function () { }, "length", { value: 8 }).length; }), v = String(String).split("String"), w = t.exports = function (t, e, i) { "Symbol(" === m(p(e), 0, 7) && (e = "[" + f(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"); i && i.getter && (e = "get " + e); i && i.setter && (e = "set " + e); (!a(t, "name") || l && t.name !== e) && (o ? g(t, "name", { value: e, configurable: !0 }) : t.name = e); y && i && a(i, "arity") && t.length !== i.arity && g(t, "length", { value: i.arity }); try {
            i && a(i, "constructor") && i.constructor ? o && g(t, "prototype", { writable: !1 }) : t.prototype && (t.prototype = void 0);
        }
        catch (t) { } var n = d(t); a(n, "source") || (n.source = b(v, "string" == typeof e ? e : "")); return t; }; Function.prototype.toString = w(function toString() { return s(this) && u(this).source || h(this); }, "toString"); }, 2248(t, e, i) { var n = i(9504), r = Map.prototype; t.exports = { Map, set: n(r.set), get: n(r.get), has: n(r.has), remove: n(r.delete), proto: r }; }, 741(t) { var e = Math.ceil, i = Math.floor; t.exports = Math.trunc || function trunc(t) { var n = +t; return (n > 0 ? i : e)(n); }; }, 7819(t, e, i) { var n = i(9039); t.exports = !n(function () { var t = "9007199254740993", e = JSON.rawJSON(t); return !JSON.isRawJSON(e) || JSON.stringify(e) !== t; }); }, 6043(t, e, i) { var n = i(9306), r = TypeError, PromiseCapability = function (t) { var e, i; this.promise = new t(function (t, n) { if (void 0 !== e || void 0 !== i)
            throw new r("Bad Promise constructor"); e = t; i = n; }); this.resolve = n(e); this.reject = n(i); }; t.exports.f = function (t) { return new PromiseCapability(t); }; }, 2603(t, e, i) { var n = i(655); t.exports = function (t, e) { return void 0 === t ? arguments.length < 2 ? "" : e : n(t); }; }, 4149(t) { var e = RangeError; t.exports = function (t) { if (t == t)
            return t; throw new e("NaN is not allowed"); }; }, 2360(t, e, i) { var n, r = i(8551), s = i(6801), a = i(8727), o = i(421), l = i(397), h = i(4055), c = i(6119), d = "prototype", u = "script", p = c("IE_PROTO"), EmptyConstructor = function () { }, scriptTag = function (t) { return "<" + u + ">" + t + "</" + u + ">"; }, NullProtoObjectViaActiveX = function (t) { t.write(scriptTag("")); t.close(); var e = t.parentWindow.Object; t = null; return e; }, NullProtoObject = function () { try {
            n = new ActiveXObject("htmlfile");
        }
        catch (t) { } NullProtoObject = "undefined" != typeof document ? document.domain && n ? NullProtoObjectViaActiveX(n) : function () { var t, e = h("iframe"), i = "java" + u + ":"; e.style.display = "none"; l.appendChild(e); e.src = String(i); (t = e.contentWindow.document).open(); t.write(scriptTag("document.F=Object")); t.close(); return t.F; }() : NullProtoObjectViaActiveX(n); for (var t = a.length; t--;)
            delete NullProtoObject[d][a[t]]; return NullProtoObject(); }; o[p] = !0; t.exports = Object.create || function create(t, e) { var i; if (null !== t) {
            EmptyConstructor[d] = r(t);
            i = new EmptyConstructor;
            EmptyConstructor[d] = null;
            i[p] = t;
        }
        else
            i = NullProtoObject(); return void 0 === e ? i : s.f(i, e); }; }, 6801(t, e, i) { var n = i(3724), r = i(8686), s = i(4913), a = i(8551), o = i(5397), l = i(1072); e.f = n && !r ? Object.defineProperties : function defineProperties(t, e) { a(t); for (var i, n = o(e), r = l(e), h = r.length, c = 0; h > c;)
            s.f(t, i = r[c++], n[i]); return t; }; }, 4913(t, e, i) { var n = i(3724), r = i(5917), s = i(8686), a = i(8551), o = i(6969), l = TypeError, h = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = "enumerable", u = "configurable", p = "writable"; e.f = n ? s ? function defineProperty(t, e, i) { a(t); e = o(e); a(i); if ("function" == typeof t && "prototype" === e && "value" in i && p in i && !i[p]) {
            var n = c(t, e);
            if (n && n[p]) {
                t[e] = i.value;
                i = { configurable: u in i ? i[u] : n[u], enumerable: d in i ? i[d] : n[d], writable: !1 };
            }
        } return h(t, e, i); } : h : function defineProperty(t, e, i) { a(t); e = o(e); a(i); if (r)
            try {
                return h(t, e, i);
            }
            catch (t) { } if ("get" in i || "set" in i)
            throw new l("Accessors not supported"); "value" in i && (t[e] = i.value); return t; }; }, 7347(t, e, i) { var n = i(3724), r = i(9565), s = i(8773), a = i(6980), o = i(5397), l = i(6969), h = i(9297), c = i(5917), d = Object.getOwnPropertyDescriptor; e.f = n ? d : function getOwnPropertyDescriptor(t, e) { t = o(t); e = l(e); if (c)
            try {
                return d(t, e);
            }
            catch (t) { } if (h(t, e))
            return a(!r(s.f, t, e), t[e]); }; }, 8480(t, e, i) { var n = i(1828), r = i(8727).concat("length", "prototype"); e.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) { return n(t, r); }; }, 3717(t, e) { e.f = Object.getOwnPropertySymbols; }, 2787(t, e, i) { var n = i(9297), r = i(4901), s = i(8981), a = i(6119), o = i(2211), l = a("IE_PROTO"), h = Object, c = h.prototype; t.exports = o ? h.getPrototypeOf : function (t) { var e = s(t); if (n(e, l))
            return e[l]; var i = e.constructor; return r(i) && e instanceof i ? i.prototype : e instanceof h ? c : null; }; }, 1625(t, e, i) { var n = i(9504); t.exports = n({}.isPrototypeOf); }, 1828(t, e, i) { var n = i(9504), r = i(9297), s = i(5397), a = i(9617).indexOf, o = i(421), l = n([].push); t.exports = function (t, e) { var i, n = s(t), h = 0, c = []; for (i in n)
            !r(o, i) && r(n, i) && l(c, i); for (; e.length > h;)
            r(n, i = e[h++]) && (~a(c, i) || l(c, i)); return c; }; }, 1072(t, e, i) { var n = i(1828), r = i(8727); t.exports = Object.keys || function keys(t) { return n(t, r); }; }, 8773(t, e) { var i = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, r = n && !i.call({ 1: 2 }, 1); e.f = r ? function propertyIsEnumerable(t) { var e = n(this, t); return !!e && e.enumerable; } : i; }, 2967(t, e, i) { var n = i(6706), r = i(34), s = i(7750), a = i(3506); t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () { var t, e = !1, i = {}; try {
            (t = n(Object.prototype, "__proto__", "set"))(i, []);
            e = i instanceof Array;
        }
        catch (t) { } return function setPrototypeOf(i, n) { s(i); a(n); if (!r(i))
            return i; e ? t(i, n) : i.__proto__ = n; return i; }; }() : void 0); }, 4270(t, e, i) { var n = i(9565), r = i(4901), s = i(34), a = TypeError; t.exports = function (t, e) { var i, o; if ("string" === e && r(i = t.toString) && !s(o = n(i, t)))
            return o; if (r(i = t.valueOf) && !s(o = n(i, t)))
            return o; if ("string" !== e && r(i = t.toString) && !s(o = n(i, t)))
            return o; throw new a("Can't convert object to primitive value"); }; }, 5031(t, e, i) { var n = i(7751), r = i(9504), s = i(8480), a = i(3717), o = i(8551), l = r([].concat); t.exports = n("Reflect", "ownKeys") || function ownKeys(t) { var e = s.f(o(t)), i = a.f; return i ? l(e, i(t)) : e; }; }, 8235(t, e, i) { var n = i(9504), r = i(9297), s = SyntaxError, a = parseInt, o = String.fromCharCode, l = n("".charAt), h = n("".slice), c = n(/./.exec), d = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": "\n", "\\r": "\r", "\\t": "\t" }, u = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/; t.exports = function (t, e) { for (var i = !0, n = ""; e < t.length;) {
            var g = l(t, e);
            if ("\\" === g) {
                var m = h(t, e, e + 2);
                if (r(d, m)) {
                    n += d[m];
                    e += 2;
                }
                else {
                    if ("\\u" !== m)
                        throw new s('Unknown escape sequence: "' + m + '"');
                    var f = h(t, e += 2, e + 4);
                    if (!c(u, f))
                        throw new s("Bad Unicode escape at: " + e);
                    n += o(a(f, 16));
                    e += 4;
                }
            }
            else {
                if ('"' === g) {
                    i = !1;
                    e++;
                    break;
                }
                if (c(p, g))
                    throw new s("Bad control character in string literal at: " + e);
                n += g;
                e++;
            }
        } if (i)
            throw new s("Unterminated string at: " + e); return { value: n, end: e }; }; }, 1103(t) { t.exports = function (t) { try {
            return { error: !1, value: t() };
        }
        catch (t) {
            return { error: !0, value: t };
        } }; }, 7750(t, e, i) { var n = i(4117), r = TypeError; t.exports = function (t) { if (n(t))
            throw new r("Can't call method on " + t); return t; }; }, 9286(t, e, i) { var n = i(4402), r = i(8469), s = n.Set, a = n.add; t.exports = function (t) { var e = new s; r(t, function (t) { a(e, t); }); return e; }; }, 3440(t, e, i) { var n = i(7080), r = i(4402), s = i(9286), a = i(5170), o = i(3789), l = i(8469), h = i(507), c = r.has, d = r.remove; t.exports = function difference(t) { var e = n(this), i = o(t), r = s(e); a(e) <= i.size ? l(e, function (t) { i.includes(t) && d(r, t); }) : h(i.getIterator(), function (t) { c(r, t) && d(r, t); }); return r; }; }, 4402(t, e, i) { var n = i(9504), r = Set.prototype; t.exports = { Set, add: n(r.add), has: n(r.has), remove: n(r.delete), proto: r }; }, 8750(t, e, i) { var n = i(7080), r = i(4402), s = i(5170), a = i(3789), o = i(8469), l = i(507), h = r.Set, c = r.add, d = r.has; t.exports = function intersection(t) { var e = n(this), i = a(t), r = new h; s(e) > i.size ? l(i.getIterator(), function (t) { d(e, t) && c(r, t); }) : o(e, function (t) { i.includes(t) && c(r, t); }); return r; }; }, 4449(t, e, i) { var n = i(7080), r = i(4402).has, s = i(5170), a = i(3789), o = i(8469), l = i(507), h = i(9539); t.exports = function isDisjointFrom(t) { var e = n(this), i = a(t); if (s(e) <= i.size)
            return !1 !== o(e, function (t) { if (i.includes(t))
                return !1; }, !0); var c = i.getIterator(); return !1 !== l(c, function (t) { if (r(e, t))
            return h(c, "normal", !1); }); }; }, 3838(t, e, i) { var n = i(7080), r = i(5170), s = i(8469), a = i(3789); t.exports = function isSubsetOf(t) { var e = n(this), i = a(t); return !(r(e) > i.size) && !1 !== s(e, function (t) { if (!i.includes(t))
            return !1; }, !0); }; }, 8527(t, e, i) { var n = i(7080), r = i(4402).has, s = i(5170), a = i(3789), o = i(507), l = i(9539); t.exports = function isSupersetOf(t) { var e = n(this), i = a(t); if (s(e) < i.size)
            return !1; var h = i.getIterator(); return !1 !== o(h, function (t) { if (!r(e, t))
            return l(h, "normal", !1); }); }; }, 8469(t, e, i) { var n = i(9504), r = i(507), s = i(4402), a = s.Set, o = s.proto, l = n(o.forEach), h = n(o.keys), c = h(new a).next; t.exports = function (t, e, i) { return i ? r({ iterator: h(t), next: c }, e) : l(t, e); }; }, 4916(t, e, i) { var n = i(7751), createSetLike = function (t) { return { size: t, has: function () { return !1; }, keys: function () { return { next: function () { return { done: !0 }; } }; } }; }, createSetLikeWithInfinitySize = function (t) { return { size: t, has: function () { return !0; }, keys: function () { throw new Error("e"); } }; }; t.exports = function (t, e) { var i = n("Set"); try {
            (new i)[t](createSetLike(0));
            try {
                (new i)[t](createSetLike(-1));
                return !1;
            }
            catch (n) {
                if (!e)
                    return !0;
                try {
                    (new i)[t](createSetLikeWithInfinitySize(-1 / 0));
                    return !1;
                }
                catch (n) {
                    return e(new i([1, 2])[t](createSetLikeWithInfinitySize(1 / 0)));
                }
            }
        }
        catch (t) {
            return !1;
        } }; }, 9835(t) { t.exports = function (t) { try {
            var e = new Set, i = { size: 0, has: function () { return !0; }, keys: function () { return Object.defineProperty({}, "next", { get: function () { e.clear(); e.add(4); return function () { return { done: !0 }; }; } }); } }, n = e[t](i);
            return 1 === n.size && 4 === n.values().next().value;
        }
        catch (t) {
            return !1;
        } }; }, 5170(t, e, i) { var n = i(6706), r = i(4402); t.exports = n(r.proto, "size", "get") || function (t) { return t.size; }; }, 3650(t, e, i) { var n = i(7080), r = i(4402), s = i(9286), a = i(3789), o = i(507), l = r.add, h = r.has, c = r.remove; t.exports = function symmetricDifference(t) { var e = n(this), i = a(t).getIterator(), r = s(e); o(i, function (t) { h(e, t) ? c(r, t) : l(r, t); }); return r; }; }, 4204(t, e, i) { var n = i(7080), r = i(4402).add, s = i(9286), a = i(3789), o = i(507); t.exports = function union(t) { var e = n(this), i = a(t).getIterator(), l = s(e); o(i, function (t) { r(l, t); }); return l; }; }, 6119(t, e, i) { var n = i(5745), r = i(3392), s = n("keys"); t.exports = function (t) { return s[t] || (s[t] = r(t)); }; }, 7629(t, e, i) { var n = i(6395), r = i(4576), s = i(9433), a = "__core-js_shared__", o = t.exports = r[a] || s(a, {}); (o.versions || (o.versions = [])).push({ version: "3.48.0", mode: n ? "pure" : "global", copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.", license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE", source: "https://github.com/zloirock/core-js" }); }, 5745(t, e, i) { var n = i(7629); t.exports = function (t, e) { return n[t] || (n[t] = e || {}); }; }, 1548(t, e, i) { var n = i(4576), r = i(9039), s = i(9519), a = i(4215), o = n.structuredClone; t.exports = !!o && !r(function () { if ("DENO" === a && s > 92 || "NODE" === a && s > 94 || "BROWSER" === a && s > 97)
            return !1; var t = new ArrayBuffer(8), e = o(t, { transfer: [t] }); return 0 !== t.byteLength || 8 !== e.byteLength; }); }, 4495(t, e, i) { var n = i(9519), r = i(9039), s = i(4576).String; t.exports = !!Object.getOwnPropertySymbols && !r(function () { var t = Symbol("symbol detection"); return !s(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41; }); }, 5610(t, e, i) { var n = i(1291), r = Math.max, s = Math.min; t.exports = function (t, e) { var i = n(t); return i < 0 ? r(i + e, 0) : s(i, e); }; }, 5854(t, e, i) { var n = i(2777), r = TypeError; t.exports = function (t) { var e = n(t, "number"); if ("number" == typeof e)
            throw new r("Can't convert number to bigint"); return BigInt(e); }; }, 7696(t, e, i) { var n = i(1291), r = i(8014), s = RangeError; t.exports = function (t) { if (void 0 === t)
            return 0; var e = n(t), i = r(e); if (e !== i)
            throw new s("Wrong length or index"); return i; }; }, 5397(t, e, i) { var n = i(7055), r = i(7750); t.exports = function (t) { return n(r(t)); }; }, 1291(t, e, i) { var n = i(741); t.exports = function (t) { var e = +t; return e != e || 0 === e ? 0 : n(e); }; }, 8014(t, e, i) { var n = i(1291), r = Math.min; t.exports = function (t) { var e = n(t); return e > 0 ? r(e, 9007199254740991) : 0; }; }, 8981(t, e, i) { var n = i(7750), r = Object; t.exports = function (t) { return r(n(t)); }; }, 9590(t, e, i) { var n = i(1291), r = RangeError; t.exports = function (t) { var e = n(t); if (e < 0)
            throw new r("The argument can't be less than 0"); return e; }; }, 2777(t, e, i) { var n = i(9565), r = i(34), s = i(757), a = i(5966), o = i(4270), l = i(8227), h = TypeError, c = l("toPrimitive"); t.exports = function (t, e) { if (!r(t) || s(t))
            return t; var i, l = a(t, c); if (l) {
            void 0 === e && (e = "default");
            i = n(l, t, e);
            if (!r(i) || s(i))
                return i;
            throw new h("Can't convert object to primitive value");
        } void 0 === e && (e = "number"); return o(t, e); }; }, 6969(t, e, i) { var n = i(2777), r = i(757); t.exports = function (t) { var e = n(t, "string"); return r(e) ? e : e + ""; }; }, 2140(t, e, i) { var n = {}; n[i(8227)("toStringTag")] = "z"; t.exports = "[object z]" === String(n); }, 655(t, e, i) { var n = i(6955), r = String; t.exports = function (t) { if ("Symbol" === n(t))
            throw new TypeError("Cannot convert a Symbol value to a string"); return r(t); }; }, 6823(t) { var e = String; t.exports = function (t) { try {
            return e(t);
        }
        catch (t) {
            return "Object";
        } }; }, 3392(t, e, i) { var n = i(9504), r = 0, s = Math.random(), a = n(1.1.toString); t.exports = function (t) { return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++r + s, 36); }; }, 9143(t, e, i) { var n = i(4576), r = i(9504), s = i(3972), a = i(3463), o = i(9297), l = i(2804), h = i(944), c = i(5169), d = l.c2i, u = l.c2iUrl, p = n.SyntaxError, g = n.TypeError, m = r("".charAt), skipAsciiWhitespace = function (t, e) { for (var i = t.length; e < i; e++) {
            var n = m(t, e);
            if (" " !== n && "\t" !== n && "\n" !== n && "\f" !== n && "\r" !== n)
                break;
        } return e; }, decodeBase64Chunk = function (t, e, i) { var n = t.length; n < 4 && (t += 2 === n ? "AA" : "A"); var r = (e[m(t, 0)] << 18) + (e[m(t, 1)] << 12) + (e[m(t, 2)] << 6) + e[m(t, 3)], s = [r >> 16 & 255, r >> 8 & 255, 255 & r]; if (2 === n) {
            if (i && 0 !== s[1])
                throw new p("Extra bits");
            return [s[0]];
        } if (3 === n) {
            if (i && 0 !== s[2])
                throw new p("Extra bits");
            return [s[0], s[1]];
        } return s; }, writeBytes = function (t, e, i) { for (var n = e.length, r = 0; r < n; r++)
            t[i + r] = e[r]; return i + n; }; t.exports = function (t, e, i, n) { a(t); s(e); var r = "base64" === h(e) ? d : u, l = e ? e.lastChunkHandling : void 0; void 0 === l && (l = "loose"); if ("loose" !== l && "strict" !== l && "stop-before-partial" !== l)
            throw new g("Incorrect `lastChunkHandling` option"); i && c(i.buffer); var f = t.length, b = i || [], y = 0, v = 0, w = "", A = 0; if (n)
            for (;;) {
                if ((A = skipAsciiWhitespace(t, A)) === f) {
                    if (w.length > 0) {
                        if ("stop-before-partial" === l)
                            break;
                        if ("loose" !== l)
                            throw new p("Missing padding");
                        if (1 === w.length)
                            throw new p("Malformed padding: exactly one additional character");
                        y = writeBytes(b, decodeBase64Chunk(w, r, !1), y);
                    }
                    v = f;
                    break;
                }
                var x = m(t, A);
                ++A;
                if ("=" === x) {
                    if (w.length < 2)
                        throw new p("Padding is too early");
                    A = skipAsciiWhitespace(t, A);
                    if (2 === w.length) {
                        if (A === f) {
                            if ("stop-before-partial" === l)
                                break;
                            throw new p("Malformed padding: only one =");
                        }
                        if ("=" === m(t, A)) {
                            ++A;
                            A = skipAsciiWhitespace(t, A);
                        }
                    }
                    if (A < f)
                        throw new p("Unexpected character after padding");
                    y = writeBytes(b, decodeBase64Chunk(w, r, "strict" === l), y);
                    v = f;
                    break;
                }
                if (!o(r, x))
                    throw new p("Unexpected character");
                var E = n - y;
                if (1 === E && 2 === w.length || 2 === E && 3 === w.length)
                    break;
                if (4 === (w += x).length) {
                    y = writeBytes(b, decodeBase64Chunk(w, r, !1), y);
                    w = "";
                    v = A;
                    if (y === n)
                        break;
                }
            } return { bytes: b, read: v, written: y }; }; }, 2303(t, e, i) { var n = i(4576), r = i(9504), s = n.Uint8Array, a = n.SyntaxError, o = n.parseInt, l = Math.min, h = /[^\da-f]/i, c = r(h.exec), d = r("".slice); t.exports = function (t, e) { var i = t.length; if (i % 2 != 0)
            throw new a("String should be an even number of characters"); for (var n = e ? l(e.length, i / 2) : i / 2, r = e || new s(n), u = 0, p = 0; p < n;) {
            var g = d(t, u, u += 2);
            if (c(h, g))
                throw new a("String should only contain hex characters");
            r[p++] = o(g, 16);
        } return { bytes: r, read: u }; }; }, 7416(t, e, i) { var n = i(9039), r = i(8227), s = i(3724), a = i(6395), o = r("iterator"); t.exports = !n(function () { var t = new URL("b?a=1&b=2&c=3", "https://a"), e = t.searchParams, i = new URLSearchParams("a=1&a=2&b=3"), n = ""; t.pathname = "c%20d"; e.forEach(function (t, i) { e.delete("b"); n += i + t; }); i.delete("a", 2); i.delete("b", void 0); return a && (!t.toJSON || !i.has("a", 1) || i.has("a", 2) || !i.has("a", void 0) || i.has("b")) || !e.size && (a || !s) || !e.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== n || "x" !== new URL("https://x", void 0).host; }); }, 7040(t, e, i) { var n = i(4495); t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator; }, 8686(t, e, i) { var n = i(3724), r = i(9039); t.exports = n && r(function () { return 42 !== Object.defineProperty(function () { }, "prototype", { value: 42, writable: !1 }).prototype; }); }, 2812(t) { var e = TypeError; t.exports = function (t, i) { if (t < i)
            throw new e("Not enough arguments"); return t; }; }, 8622(t, e, i) { var n = i(4576), r = i(4901), s = n.WeakMap; t.exports = r(s) && /native code/.test(String(s)); }, 4995(t, e, i) { var n = i(9504), r = WeakMap.prototype; t.exports = { WeakMap, set: n(r.set), get: n(r.get), has: n(r.has), remove: n(r.delete) }; }, 8227(t, e, i) { var n = i(4576), r = i(5745), s = i(9297), a = i(3392), o = i(4495), l = i(7040), h = n.Symbol, c = r("wks"), d = l ? h.for || h : h && h.withoutSetter || a; t.exports = function (t) { s(c, t) || (c[t] = o && s(h, t) ? h[t] : d("Symbol." + t)); return c[t]; }; }, 6573(t, e, i) { var n = i(3724), r = i(2106), s = i(3238), a = ArrayBuffer.prototype; n && !("detached" in a) && r(a, "detached", { configurable: !0, get: function detached() { return s(this); } }); }, 7936(t, e, i) { var n = i(6518), r = i(5636); r && n({ target: "ArrayBuffer", proto: !0 }, { transferToFixedLength: function transferToFixedLength() { return r(this, arguments.length ? arguments[0] : void 0, !1); } }); }, 8100(t, e, i) { var n = i(6518), r = i(5636); r && n({ target: "ArrayBuffer", proto: !0 }, { transfer: function transfer() { return r(this, arguments.length ? arguments[0] : void 0, !0); } }); }, 4114(t, e, i) { var n = i(6518), r = i(8981), s = i(6198), a = i(4527), o = i(6837); n({ target: "Array", proto: !0, arity: 1, forced: i(9039)(function () { return 4294967297 !== [].push.call({ length: 4294967296 }, 1); }) || !function () { try {
                Object.defineProperty([], "length", { writable: !1 }).push();
            }
            catch (t) {
                return t instanceof TypeError;
            } }() }, { push: function push(t) { var e = r(this), i = s(e), n = arguments.length; o(i + n); for (var l = 0; l < n; l++) {
                e[i] = arguments[l];
                i++;
            } a(e, i); return i; } }); }, 8111(t, e, i) { var n = i(6518), r = i(4576), s = i(679), a = i(8551), o = i(4901), l = i(2787), h = i(2106), c = i(4659), d = i(9039), u = i(9297), p = i(8227), g = i(7657).IteratorPrototype, m = i(3724), f = i(6395), b = "constructor", y = "Iterator", v = p("toStringTag"), w = TypeError, A = r[y], x = f || !o(A) || A.prototype !== g || !d(function () { A({}); }), E = function Iterator() { s(this, g); if (l(this) === g)
            throw new w("Abstract class Iterator not directly constructable"); }, defineIteratorPrototypeAccessor = function (t, e) { m ? h(g, t, { configurable: !0, get: function () { return e; }, set: function (e) { a(this); if (this === g)
                throw new w("You can't redefine this property"); u(this, t) ? this[t] = e : c(this, t, e); } }) : g[t] = e; }; u(g, v) || defineIteratorPrototypeAccessor(v, y); !x && u(g, b) && g[b] !== Object || defineIteratorPrototypeAccessor(b, E); E.prototype = g; n({ global: !0, constructor: !0, forced: x }, { Iterator: E }); }, 9314(t, e, i) { var n = i(6518), r = i(9565), s = i(8551), a = i(1767), o = i(4149), l = i(9590), h = i(9539), c = i(9462), d = i(684), u = i(4549), p = i(6395), g = !p && !d("drop", 0), m = !p && !g && u("drop", RangeError), f = p || g || m, b = c(function () { for (var t, e = this.iterator, i = this.next; this.remaining;) {
            this.remaining--;
            t = s(r(i, e));
            if (this.done = !!t.done)
                return;
        } t = s(r(i, e)); if (!(this.done = !!t.done))
            return t.value; }); n({ target: "Iterator", proto: !0, real: !0, forced: f }, { drop: function drop(t) { s(this); var e; try {
                e = l(o(+t));
            }
            catch (t) {
                h(this, "throw", t);
            } return m ? r(m, this, e) : new b(a(this), { remaining: e }); } }); }, 1148(t, e, i) { var n = i(6518), r = i(9565), s = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("every", TypeError); n({ target: "Iterator", proto: !0, real: !0, forced: c }, { every: function every(t) { o(this); try {
                a(t);
            }
            catch (t) {
                h(this, "throw", t);
            } if (c)
                return r(c, this, t); var e = l(this), i = 0; return !s(e, function (e, n) { if (!t(e, i++))
                return n(); }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped; } }); }, 2489(t, e, i) { var n = i(6518), r = i(9565), s = i(9306), a = i(8551), o = i(1767), l = i(9462), h = i(6319), c = i(6395), d = i(9539), u = i(684), p = i(4549), g = !c && !u("filter", function () { }), m = !c && !g && p("filter", TypeError), f = c || g || m, b = l(function () { for (var t, e, i = this.iterator, n = this.predicate, s = this.next;;) {
            t = a(r(s, i));
            if (this.done = !!t.done)
                return;
            e = t.value;
            if (h(i, n, [e, this.counter++], !0))
                return e;
        } }); n({ target: "Iterator", proto: !0, real: !0, forced: f }, { filter: function filter(t) { a(this); try {
                s(t);
            }
            catch (t) {
                d(this, "throw", t);
            } return m ? r(m, this, t) : new b(o(this), { predicate: t }); } }); }, 116(t, e, i) { var n = i(6518), r = i(9565), s = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("find", TypeError); n({ target: "Iterator", proto: !0, real: !0, forced: c }, { find: function find(t) { o(this); try {
                a(t);
            }
            catch (t) {
                h(this, "throw", t);
            } if (c)
                return r(c, this, t); var e = l(this), i = 0; return s(e, function (e, n) { if (t(e, i++))
                return n(e); }, { IS_RECORD: !0, INTERRUPTED: !0 }).result; } }); }, 531(t, e, i) { var n = i(6518), r = i(9565), s = i(9306), a = i(8551), o = i(1767), l = i(8646), h = i(9462), c = i(9539), d = i(6395), u = i(684), p = i(4549); var g = !d && !u("flatMap", function () { }), m = !d && !g && p("flatMap", TypeError), f = d || g || m || function throwsOnIteratorWithoutReturn() { try {
            var t = Iterator.prototype.flatMap.call(new Map([[4, 5]]).entries(), function (t) { return t; });
            t.next();
            t.return();
        }
        catch (t) {
            return !0;
        } }(), b = h(function () { for (var t, e, i = this.iterator, n = this.mapper;;) {
            if (e = this.inner)
                try {
                    if (!(t = a(r(e.next, e.iterator))).done)
                        return t.value;
                    this.inner = null;
                }
                catch (t) {
                    c(i, "throw", t);
                }
            t = a(r(this.next, i));
            if (this.done = !!t.done)
                return;
            try {
                this.inner = l(n(t.value, this.counter++), !1);
            }
            catch (t) {
                c(i, "throw", t);
            }
        } }); n({ target: "Iterator", proto: !0, real: !0, forced: f }, { flatMap: function flatMap(t) { a(this); try {
                s(t);
            }
            catch (t) {
                c(this, "throw", t);
            } return m ? r(m, this, t) : new b(o(this), { mapper: t, inner: null }); } }); }, 7588(t, e, i) { var n = i(6518), r = i(9565), s = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("forEach", TypeError); n({ target: "Iterator", proto: !0, real: !0, forced: c }, { forEach: function forEach(t) { o(this); try {
                a(t);
            }
            catch (t) {
                h(this, "throw", t);
            } if (c)
                return r(c, this, t); var e = l(this), i = 0; s(e, function (e) { t(e, i++); }, { IS_RECORD: !0 }); } }); }, 1701(t, e, i) { var n = i(6518), r = i(9565), s = i(9306), a = i(8551), o = i(1767), l = i(9462), h = i(6319), c = i(9539), d = i(684), u = i(4549), p = i(6395), g = !p && !d("map", function () { }), m = !p && !g && u("map", TypeError), f = p || g || m, b = l(function () { var t = this.iterator, e = a(r(this.next, t)); if (!(this.done = !!e.done))
            return h(t, this.mapper, [e.value, this.counter++], !0); }); n({ target: "Iterator", proto: !0, real: !0, forced: f }, { map: function map(t) { a(this); try {
                s(t);
            }
            catch (t) {
                c(this, "throw", t);
            } return m ? r(m, this, t) : new b(o(this), { mapper: t }); } }); }, 8237(t, e, i) { var n = i(6518), r = i(2652), s = i(9306), a = i(8551), o = i(1767), l = i(9539), h = i(4549), c = i(8745), d = i(9039), u = TypeError, p = d(function () { [].keys().reduce(function () { }, void 0); }), g = !p && h("reduce", u); n({ target: "Iterator", proto: !0, real: !0, forced: p || g }, { reduce: function reduce(t) { a(this); try {
                s(t);
            }
            catch (t) {
                l(this, "throw", t);
            } var e = arguments.length < 2, i = e ? void 0 : arguments[1]; if (g)
                return c(g, this, e ? [t] : [t, i]); var n = o(this), h = 0; r(n, function (n) { if (e) {
                e = !1;
                i = n;
            }
            else
                i = t(i, n, h); h++; }, { IS_RECORD: !0 }); if (e)
                throw new u("Reduce of empty iterator with no initial value"); return i; } }); }, 3579(t, e, i) { var n = i(6518), r = i(9565), s = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("some", TypeError); n({ target: "Iterator", proto: !0, real: !0, forced: c }, { some: function some(t) { o(this); try {
                a(t);
            }
            catch (t) {
                h(this, "throw", t);
            } if (c)
                return r(c, this, t); var e = l(this), i = 0; return s(e, function (e, n) { if (t(e, i++))
                return n(); }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped; } }); }, 4972(t, e, i) { var n = i(6518), r = i(9565), s = i(8551), a = i(1767), o = i(4149), l = i(9590), h = i(9462), c = i(9539), d = i(4549), u = i(6395), p = !u && d("take", RangeError), g = h(function () { var t = this.iterator; if (!this.remaining--) {
            this.done = !0;
            return c(t, "normal", void 0);
        } var e = s(r(this.next, t)); if (!(this.done = !!e.done))
            return e.value; }); n({ target: "Iterator", proto: !0, real: !0, forced: u || p }, { take: function take(t) { s(this); var e; try {
                e = l(o(+t));
            }
            catch (t) {
                c(this, "throw", t);
            } return p ? r(p, this, e) : new g(a(this), { remaining: e }); } }); }, 9112(t, e, i) { var n = i(6518), r = i(3724), s = i(4576), a = i(7751), o = i(9504), l = i(9565), h = i(4901), c = i(34), d = i(4376), u = i(9297), p = i(655), g = i(6198), m = i(4659), f = i(9039), b = i(8235), y = i(4495), v = s.JSON, w = s.Number, A = s.SyntaxError, x = v && v.parse, E = a("Object", "keys"), _ = Object.getOwnPropertyDescriptor, T = o("".charAt), S = o("".slice), C = o(/./.exec), D = o([].push), P = /^\d$/, M = /^[1-9]$/, k = /^[\d-]$/, I = /^[\t\n\r ]$/, internalize = function (t, e, i, n) { var r, s, a, o, h, p = t[e], m = n && p === n.value, f = m && "string" == typeof n.source ? { source: n.source } : {}; if (c(p)) {
            var b = d(p), y = m ? n.nodes : b ? [] : {};
            if (b) {
                r = y.length;
                a = g(p);
                for (o = 0; o < a; o++)
                    internalizeProperty(p, o, internalize(p, "" + o, i, o < r ? y[o] : void 0));
            }
            else {
                s = E(p);
                a = g(s);
                for (o = 0; o < a; o++) {
                    h = s[o];
                    internalizeProperty(p, h, internalize(p, h, i, u(y, h) ? y[h] : void 0));
                }
            }
        } return l(i, t, e, p, f); }, internalizeProperty = function (t, e, i) { if (r) {
            var n = _(t, e);
            if (n && !n.configurable)
                return;
        } void 0 === i ? delete t[e] : m(t, e, i); }, Node = function (t, e, i, n) { this.value = t; this.end = e; this.source = i; this.nodes = n; }, Context = function (t, e) { this.source = t; this.index = e; }; Context.prototype = { fork: function (t) { return new Context(this.source, t); }, parse: function () { var t = this.source, e = this.skip(I, this.index), i = this.fork(e), n = T(t, e); if (C(k, n))
                return i.number(); switch (n) {
                case "{": return i.object();
                case "[": return i.array();
                case '"': return i.string();
                case "t": return i.keyword(!0);
                case "f": return i.keyword(!1);
                case "n": return i.keyword(null);
            } throw new A('Unexpected character: "' + n + '" at: ' + e); }, node: function (t, e, i, n, r) { return new Node(e, n, t ? null : S(this.source, i, n), r); }, object: function () { for (var t = this.source, e = this.index + 1, i = !1, n = {}, r = {}; e < t.length;) {
                e = this.until(['"', "}"], e);
                if ("}" === T(t, e) && !i) {
                    e++;
                    break;
                }
                var s = this.fork(e).string(), a = s.value;
                e = s.end;
                e = this.until([":"], e) + 1;
                e = this.skip(I, e);
                s = this.fork(e).parse();
                m(r, a, s);
                m(n, a, s.value);
                e = this.until([",", "}"], s.end);
                var o = T(t, e);
                if ("," === o) {
                    i = !0;
                    e++;
                }
                else if ("}" === o) {
                    e++;
                    break;
                }
            } return this.node(1, n, this.index, e, r); }, array: function () { for (var t = this.source, e = this.index + 1, i = !1, n = [], r = []; e < t.length;) {
                e = this.skip(I, e);
                if ("]" === T(t, e) && !i) {
                    e++;
                    break;
                }
                var s = this.fork(e).parse();
                D(r, s);
                D(n, s.value);
                e = this.until([",", "]"], s.end);
                if ("," === T(t, e)) {
                    i = !0;
                    e++;
                }
                else if ("]" === T(t, e)) {
                    e++;
                    break;
                }
            } return this.node(1, n, this.index, e, r); }, string: function () { var t = this.index, e = b(this.source, this.index + 1); return this.node(0, e.value, t, e.end); }, number: function () { var t = this.source, e = this.index, i = e; "-" === T(t, i) && i++; if ("0" === T(t, i))
                i++;
            else {
                if (!C(M, T(t, i)))
                    throw new A("Failed to parse number at: " + i);
                i = this.skip(P, i + 1);
            } "." === T(t, i) && (i = this.skip(P, i + 1)); if ("e" === T(t, i) || "E" === T(t, i)) {
                i++;
                "+" !== T(t, i) && "-" !== T(t, i) || i++;
                if (i === (i = this.skip(P, i)))
                    throw new A("Failed to parse number's exponent value at: " + i);
            } return this.node(0, w(S(t, e, i)), e, i); }, keyword: function (t) { var e = "" + t, i = this.index, n = i + e.length; if (S(this.source, i, n) !== e)
                throw new A("Failed to parse value at: " + i); return this.node(0, t, i, n); }, skip: function (t, e) { for (var i = this.source; e < i.length && C(t, T(i, e)); e++)
                ; return e; }, until: function (t, e) { e = this.skip(I, e); for (var i = T(this.source, e), n = 0; n < t.length; n++)
                if (t[n] === i)
                    return e; throw new A('Unexpected character: "' + i + '" at: ' + e); } }; var R = f(function () { var t, e = "9007199254740993"; x(e, function (e, i, n) { t = n.source; }); return t !== e; }), B = y && !f(function () { return 1 / x("-0 \t") != -1 / 0; }); n({ target: "JSON", stat: !0, forced: R }, { parse: function parse(t, e) { return B && !h(e) ? x(t) : function (t, e) { t = p(t); var i = new Context(t, 0, ""), n = i.parse(), r = n.value, s = i.skip(I, n.end); if (s < t.length)
                throw new A('Unexpected extra character: "' + T(t, s) + '" after the parsed data at: ' + s); return h(e) ? internalize({ "": r }, "", e, n) : r; }(t, e); } }); }, 3110(t, e, i) { var n = i(6518), r = i(7751), s = i(8745), a = i(9565), o = i(9504), l = i(9039), h = i(4376), c = i(4901), d = i(5810), u = i(757), p = i(2195), g = i(655), m = i(7680), f = i(8235), b = i(3392), y = i(4495), v = i(7819), w = String, A = r("JSON", "stringify"), x = o(/./.exec), E = o("".charAt), _ = o("".charCodeAt), T = o("".replace), S = o("".slice), C = o([].push), D = o(1.1.toString), P = /[\uD800-\uDFFF]/g, M = /^[\uD800-\uDBFF]$/, k = /^[\uDC00-\uDFFF]$/, I = b(), R = I.length, B = !y || l(function () { var t = r("Symbol")("stringify detection"); return "[null]" !== A([t]) || "{}" !== A({ a: t }) || "{}" !== A(Object(t)); }), O = l(function () { return '"\\udf06\\ud834"' !== A("\udf06\ud834") || '"\\udead"' !== A("\udead"); }), L = B ? function (t, e) { var i = m(arguments), n = getReplacerFunction(e); if (c(n) || void 0 !== t && !u(t)) {
            i[1] = function (t, e) { c(n) && (e = a(n, this, w(t), e)); if (!u(e))
                return e; };
            return s(A, null, i);
        } } : A, fixIllFormedJSON = function (t, e, i) { var n = E(i, e - 1), r = E(i, e + 1); return x(M, t) && !x(k, r) || x(k, t) && !x(M, n) ? "\\u" + D(_(t, 0), 16) : t; }, getReplacerFunction = function (t) { if (c(t))
            return t; if (h(t)) {
            for (var e = t.length, i = [], n = 0; n < e; n++) {
                var r = t[n];
                "string" == typeof r ? C(i, r) : "number" != typeof r && "Number" !== p(r) && "String" !== p(r) || C(i, g(r));
            }
            var s = i.length, a = !0;
            return function (t, e) { if (a) {
                a = !1;
                return e;
            } if (h(this))
                return e; for (var n = 0; n < s; n++)
                if (i[n] === t)
                    return e; };
        } }; A && n({ target: "JSON", stat: !0, arity: 3, forced: B || O || !v }, { stringify: function stringify(t, e, i) { var n = getReplacerFunction(e), r = [], s = L(t, function (t, e) { var i = c(n) ? a(n, this, w(t), e) : e; return !v && d(i) ? I + (C(r, i.rawJSON) - 1) : i; }, i); if ("string" != typeof s)
                return s; O && (s = T(s, P, fixIllFormedJSON)); if (v)
                return s; for (var o = "", l = s.length, h = 0; h < l; h++) {
                var u = E(s, h);
                if ('"' === u) {
                    var p = f(s, ++h).end - 1, g = S(s, h, p);
                    o += S(g, 0, R) === I ? r[S(g, R)] : '"' + g + '"';
                    h = p;
                }
                else
                    o += u;
            } return o; } }); }, 2731(t, e, i) { var n = i(6518), r = i(9306), s = i(6194), a = i(2248), o = i(6395), l = a.get, h = a.has, c = a.set; n({ target: "Map", proto: !0, real: !0, forced: o }, { getOrInsertComputed: function getOrInsertComputed(t, e) { s(this); r(e); if (h(this, t))
                return l(this, t); 0 === t && 1 / t == -1 / 0 && (t = 0); var i = e(t); c(this, t, i); return i; } }); }, 5367(t, e, i) { var n = i(6518), r = i(6194), s = i(2248), a = i(6395), o = s.get, l = s.has, h = s.set; n({ target: "Map", proto: !0, real: !0, forced: a }, { getOrInsert: function getOrInsert(t, e) { if (l(r(this), t))
                return o(this, t); h(this, t, e); return e; } }); }, 3068(t, e, i) { var n = i(6518), r = i(9504), s = i(2652), a = RangeError, o = TypeError, l = 1 / 0, h = Math.abs, c = Math.pow, d = r([].push), u = c(2, 1023), p = c(2, 53) - 1, g = Number.MAX_VALUE, m = c(2, 971), f = {}, b = {}, y = {}, v = {}, w = {}, twosum = function (t, e) { var i = t + e; return { hi: i, lo: e - (i - t) }; }; n({ target: "Math", stat: !0 }, { sumPrecise: function sumPrecise(t) { var e = [], i = 0, n = v; s(t, function (t) { if (++i >= p)
                throw new a("Maximum allowed index exceeded"); if ("number" != typeof t)
                throw new o("Value is not a number"); if (n !== f)
                if (t != t)
                    n = f;
                else if (t === l)
                    n = n === b ? f : y;
                else if (t === -1 / 0)
                    n = n === y ? f : b;
                else if (!(0 === t && 1 / t !== l || n !== v && n !== w)) {
                    n = w;
                    d(e, t);
                } }); switch (n) {
                case f: return NaN;
                case b: return -1 / 0;
                case y: return l;
                case v: return -0;
            } for (var r, c, A, x, E, _, T = [], S = 0, C = 0; C < e.length; C++) {
                r = e[C];
                for (var D = 0, P = 0; P < T.length; P++) {
                    c = T[P];
                    if (h(r) < h(c)) {
                        _ = r;
                        r = c;
                        c = _;
                    }
                    x = (A = twosum(r, c)).hi;
                    E = A.lo;
                    if (h(x) === l) {
                        var M = x === l ? 1 : -1;
                        S += M;
                        if (h(r = r - M * u - M * u) < h(c)) {
                            _ = r;
                            r = c;
                            c = _;
                        }
                        x = (A = twosum(r, c)).hi;
                        E = A.lo;
                    }
                    0 !== E && (T[D++] = E);
                    r = x;
                }
                T.length = D;
                0 !== r && d(T, r);
            } var k = T.length - 1; x = 0; E = 0; if (0 !== S) {
                var I = k >= 0 ? T[k] : 0;
                k--;
                if (h(S) > 1 || S > 0 && I > 0 || S < 0 && I < 0)
                    return S > 0 ? l : -1 / 0;
                x = (A = twosum(S * u, I / 2)).hi;
                E = A.lo;
                E *= 2;
                if (h(2 * x) === l)
                    return x > 0 ? x === u && E === -m / 2 && k >= 0 && T[k] < 0 ? g : l : x === -u && E === m / 2 && k >= 0 && T[k] > 0 ? -g : -1 / 0;
                if (0 !== E) {
                    T[++k] = E;
                    E = 0;
                }
                x *= 2;
            } for (; k >= 0;) {
                x = (A = twosum(x, T[k--])).hi;
                if (0 !== (E = A.lo))
                    break;
            } k >= 0 && (E < 0 && T[k] < 0 || E > 0 && T[k] > 0) && (c = 2 * E) === (r = x + c) - x && (x = r); return x; } }); }, 1689(t, e, i) { var n = i(6518), r = i(4576), s = i(8745), a = i(7680), o = i(6043), l = i(9306), h = i(1103), c = r.Promise, d = !1; n({ target: "Promise", stat: !0, forced: !c || !c.try || h(function () { c.try(function (t) { d = 8 === t; }, 8); }).error || !d }, { try: function (t) { var e = arguments.length > 1 ? a(arguments, 1) : [], i = o.f(this), n = h(function () { return s(l(t), void 0, e); }); (n.error ? i.reject : i.resolve)(n.value); return i.promise; } }); }, 4628(t, e, i) { var n = i(6518), r = i(6043); n({ target: "Promise", stat: !0 }, { withResolvers: function withResolvers() { var t = r.f(this); return { promise: t.promise, resolve: t.resolve, reject: t.reject }; } }); }, 7642(t, e, i) { var n = i(6518), r = i(3440), s = i(9039); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("difference", function (t) { return 0 === t.size; }) || s(function () { var t = { size: 1, has: function () { return !0; }, keys: function () { var t = 0; return { next: function () { var i = t++ > 1; e.has(1) && e.clear(); return { done: i, value: 2 }; } }; } }, e = new Set([1, 2, 3, 4]); return 3 !== e.difference(t).size; }) }, { difference: r }); }, 8004(t, e, i) { var n = i(6518), r = i(9039), s = i(8750); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("intersection", function (t) { return 2 === t.size && t.has(1) && t.has(2); }) || r(function () { return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))); }) }, { intersection: s }); }, 3853(t, e, i) { var n = i(6518), r = i(4449); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("isDisjointFrom", function (t) { return !t; }) }, { isDisjointFrom: r }); }, 5876(t, e, i) { var n = i(6518), r = i(3838); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("isSubsetOf", function (t) { return t; }) }, { isSubsetOf: r }); }, 2475(t, e, i) { var n = i(6518), r = i(8527); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("isSupersetOf", function (t) { return !t; }) }, { isSupersetOf: r }); }, 5024(t, e, i) { var n = i(6518), r = i(3650), s = i(9835); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("symmetricDifference") || !s("symmetricDifference") }, { symmetricDifference: r }); }, 1698(t, e, i) { var n = i(6518), r = i(4204), s = i(9835); n({ target: "Set", proto: !0, real: !0, forced: !i(4916)("union") || !s("union") }, { union: r }); }, 9577(t, e, i) { var n = i(4644), r = i(1108), s = i(6198), a = i(1291), o = i(5854), l = n.aTypedArray, h = n.getTypedArrayConstructor, c = n.exportTypedArrayMethod, d = RangeError, u = function () { try {
            new Int8Array(1).with(2, { valueOf: function () { throw 8; } });
        }
        catch (t) {
            return 8 === t;
        } }(), p = u && function () { try {
            new Int8Array(1).with(-.5, 1);
        }
        catch (t) {
            return !0;
        } }(); c("with", { with: function (t, e) { var i = l(this), n = s(i), c = a(t), u = c < 0 ? n + c : c, p = r(i) ? o(e) : +e; if (u >= n || u < 0)
                throw new d("Incorrect index"); for (var g = new (h(i))(n), m = 0; m < n; m++)
                g[m] = m === u ? p : i[m]; return g; } }.with, !u || p); }, 5213(t, e, i) { var n = i(6518), r = i(4576), s = i(5370), a = i(9143), o = r.Uint8Array, l = !o || !o.fromBase64 || !function () { try {
            o.fromBase64("a");
            return;
        }
        catch (t) { } try {
            o.fromBase64("", null);
        }
        catch (t) {
            return !0;
        } }(); o && n({ target: "Uint8Array", stat: !0, forced: l }, { fromBase64: function fromBase64(t) { var e = a(t, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991); return s(o, e.bytes); } }); }, 6632(t, e, i) { var n = i(6518), r = i(4576), s = i(9143), a = i(4154), o = r.Uint8Array, l = !o || !o.prototype.setFromBase64 || !function () { var t = new o([255, 255, 255, 255, 255]); try {
            t.setFromBase64("", null);
            return;
        }
        catch (t) { } try {
            t.setFromBase64("a");
            return;
        }
        catch (t) { } try {
            t.setFromBase64("MjYyZg===");
        }
        catch (e) {
            return 50 === t[0] && 54 === t[1] && 50 === t[2] && 255 === t[3] && 255 === t[4];
        } }(); o && n({ target: "Uint8Array", proto: !0, forced: l }, { setFromBase64: function setFromBase64(t) { a(this); var e = s(t, arguments.length > 1 ? arguments[1] : void 0, this, this.length); return { read: e.read, written: e.written }; } }); }, 4226(t, e, i) { var n = i(6518), r = i(4576), s = i(3463), a = i(4154), o = i(5169), l = i(2303); r.Uint8Array && n({ target: "Uint8Array", proto: !0, forced: function throwsOnLengthTrackingView() { try {
                var t = new ArrayBuffer(16, { maxByteLength: 1024 });
                new Uint8Array(t).setFromHex("cafed00d");
            }
            catch (t) {
                return !0;
            } }() }, { setFromHex: function setFromHex(t) { a(this); s(t); o(this.buffer); var e = l(t, this).read; return { read: e, written: e / 2 }; } }); }, 9486(t, e, i) { var n = i(6518), r = i(4576), s = i(9504), a = i(3972), o = i(4154), l = i(5169), h = i(2804), c = i(944), d = h.i2c, u = h.i2cUrl, p = s("".charAt), g = r.Uint8Array, m = !g || !g.prototype.toBase64 || !function () { try {
            (new g).toBase64(null);
        }
        catch (t) {
            return !0;
        } }(); g && n({ target: "Uint8Array", proto: !0, forced: m }, { toBase64: function toBase64() { var t = o(this), e = arguments.length ? a(arguments[0]) : void 0, i = "base64" === c(e) ? d : u, n = !!e && !!e.omitPadding; l(this.buffer); for (var r, s = "", h = 0, g = t.length, at = function (t) { return p(i, r >> 6 * t & 63); }; h + 2 < g; h += 3) {
                r = (t[h] << 16) + (t[h + 1] << 8) + t[h + 2];
                s += at(3) + at(2) + at(1) + at(0);
            } if (h + 2 === g) {
                r = (t[h] << 16) + (t[h + 1] << 8);
                s += at(3) + at(2) + at(1) + (n ? "" : "=");
            }
            else if (h + 1 === g) {
                r = t[h] << 16;
                s += at(3) + at(2) + (n ? "" : "==");
            } return s; } }); }, 456(t, e, i) { var n = i(6518), r = i(4576), s = i(9504), a = i(4154), o = i(5169), l = s(1.1.toString), h = r.Uint8Array, c = !h || !h.prototype.toHex || !function () { try {
            return "ffffffffffffffff" === new h([255, 255, 255, 255, 255, 255, 255, 255]).toHex();
        }
        catch (t) {
            return !1;
        } }(); h && n({ target: "Uint8Array", proto: !0, forced: c }, { toHex: function toHex() { a(this); o(this.buffer); for (var t = "", e = 0, i = this.length; e < i; e++) {
                var n = l(this[e], 16);
                t += 1 === n.length ? "0" + n : n;
            } return t; } }); }, 9452(t, e, i) { var n = i(6518), r = i(9306), s = i(6557), a = i(4328), o = i(4995), l = i(6395), h = o.get, c = o.has, d = o.set; n({ target: "WeakMap", proto: !0, real: !0, forced: l || !function () { try {
                WeakMap.prototype.getOrInsertComputed && (new WeakMap).getOrInsertComputed(1, function () { throw 1; });
            }
            catch (t) {
                return t instanceof TypeError;
            } }() }, { getOrInsertComputed: function getOrInsertComputed(t, e) { s(this); a(t); r(e); if (c(this, t))
                return h(this, t); var i = e(t); d(this, t, i); return i; } }); }, 8454(t, e, i) { var n = i(6518), r = i(6557), s = i(4995), a = i(6395), o = s.get, l = s.has, h = s.set; n({ target: "WeakMap", proto: !0, real: !0, forced: a }, { getOrInsert: function getOrInsert(t, e) { if (l(r(this), t))
                return o(this, t); h(this, t, e); return e; } }); }, 4979(t, e, i) { var n = i(6518), r = i(4576), s = i(7751), a = i(6980), o = i(4913).f, l = i(9297), h = i(679), c = i(3167), d = i(2603), u = i(5002), p = i(8574), g = i(3724), m = i(6395), f = "DOMException", b = s("Error"), y = s(f), v = function DOMException() { h(this, w); var t = arguments.length, e = d(t < 1 ? void 0 : arguments[0]), i = d(t < 2 ? void 0 : arguments[1], "Error"), n = new y(e, i), r = new b(e); r.name = f; o(n, "stack", a(1, p(r.stack, 1))); c(n, this, v); return n; }, w = v.prototype = y.prototype, A = "stack" in new b(f), x = "stack" in new y(1, 2), E = y && g && Object.getOwnPropertyDescriptor(r, f), _ = !(!E || E.writable && E.configurable), T = A && !_ && !x; n({ global: !0, constructor: !0, forced: m || T }, { DOMException: T ? v : y }); var S = s(f), C = S.prototype; if (C.constructor !== S) {
            m || o(C, "constructor", a(1, S));
            for (var D in u)
                if (l(u, D)) {
                    var P = u[D], M = P.s;
                    l(S, M) || o(S, M, a(6, P.c));
                }
        } }, 4603(t, e, i) { var n = i(6840), r = i(9504), s = i(655), a = i(2812), o = URLSearchParams, l = o.prototype, h = r(l.append), c = r(l.delete), d = r(l.forEach), u = r([].push), p = new o("a=1&a=2&b=3"); p.delete("a", 1); p.delete("b", void 0); p + "" != "a=2" && n(l, "delete", function (t) { var e = arguments.length, i = e < 2 ? void 0 : arguments[1]; if (e && void 0 === i)
            return c(this, t); var n = []; d(this, function (t, e) { u(n, { key: e, value: t }); }); a(e, 1); for (var r, o = s(t), l = s(i), p = 0, g = 0, m = !1, f = n.length; p < f;) {
            r = n[p++];
            if (m || r.key === o) {
                m = !0;
                c(this, r.key);
            }
            else
                g++;
        } for (; g < f;)
            (r = n[g++]).key === o && r.value === l || h(this, r.key, r.value); }, { enumerable: !0, unsafe: !0 }); }, 7566(t, e, i) { var n = i(6840), r = i(9504), s = i(655), a = i(2812), o = URLSearchParams, l = o.prototype, h = r(l.getAll), c = r(l.has), d = new o("a=1"); !d.has("a", 2) && d.has("a", void 0) || n(l, "has", function has(t) { var e = arguments.length, i = e < 2 ? void 0 : arguments[1]; if (e && void 0 === i)
            return c(this, t); var n = h(this, t); a(e, 1); for (var r = s(i), o = 0; o < n.length;)
            if (n[o++] === r)
                return !0; return !1; }, { enumerable: !0, unsafe: !0 }); }, 8721(t, e, i) { var n = i(3724), r = i(9504), s = i(2106), a = URLSearchParams.prototype, o = r(a.forEach); n && !("size" in a) && s(a, "size", { get: function size() { var t = 0; o(this, function () { t++; }); return t; }, configurable: !0, enumerable: !0 }); }, 5781(t, e, i) { var n = i(6518), r = i(7751), s = i(2812), a = i(655), o = i(7416), l = r("URL"); n({ target: "URL", stat: !0, forced: !o }, { parse: function parse(t) { var e = s(arguments.length, 1), i = a(t), n = e < 2 || void 0 === arguments[1] ? void 0 : a(arguments[1]); try {
                return new l(i, n);
            }
            catch (t) {
                return null;
            } } }); } }, e = {};
    function __webpack_require__(i) { var n = e[i]; if (void 0 !== n)
        return n.exports; var r = e[i] = { exports: {} }; t[i].call(r.exports, r, r.exports, __webpack_require__); return r.exports; }
    __webpack_require__.d = (t, e) => { for (var i in e)
        __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] }); };
    __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    __webpack_require__(4114), __webpack_require__(6573), __webpack_require__(8100), __webpack_require__(7936), __webpack_require__(8111), __webpack_require__(8237), __webpack_require__(5367), __webpack_require__(2731), __webpack_require__(3068), __webpack_require__(9577), __webpack_require__(6632), __webpack_require__(4226), __webpack_require__(9486), __webpack_require__(456), __webpack_require__(5781);
    const i = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type), n = [.001, 0, 0, .001, 0, 0], r = 1.35, s = 1, a = 2, o = 4, l = 16, h = 32, c = 64, d = 128, u = 256, p = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, g = "pdfjs_internal_editor_", m = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 }, f = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 }, b = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, y = 1, v = 2, w = 0, A = 1, x = 2, E = 3, _ = 3, T = 4, S = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, C = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, D = 1, P = 2, M = 3, k = 4, I = 5, R = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, B = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 }, O = 0, L = 1, N = 2, U = 3, H = 4, z = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
    let j = R.WARNINGS;
    function setVerbosityLevel(t) { Number.isInteger(t) && (j = t); }
    function getVerbosityLevel() { return j; }
    function info(t) { j >= R.INFOS && console.info(`Info: ${t}`); }
    function warn(t) { j >= R.WARNINGS && console.warn(`Warning: ${t}`); }
    function unreachable(t) { throw new Error(t); }
    function assert(t, e) { t || unreachable(e); }
    function createValidAbsoluteUrl(t, e = null, i = null) { if (!t)
        return null; if (i && "string" == typeof t) {
        if (i.addDefaultProtocol && t.startsWith("www.")) {
            const e = t.match(/\./g);
            (e === null || e === void 0 ? void 0 : e.length) >= 2 && (t = `http://${t}`);
        }
        if (i.tryConvertEncoding)
            try {
                t = function stringToUTF8String(t) { return decodeURIComponent(escape(t)); }(t);
            }
            catch (_a) { }
    } const n = e ? URL.parse(t, e) : URL.parse(t); return function _isValidProtocol(t) { switch (t === null || t === void 0 ? void 0 : t.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "mailto:":
        case "tel:": return !0;
        default: return !1;
    } }(n) ? n : null; }
    function updateUrlHash(t, e, i = !1) { const n = URL.parse(t); if (n) {
        n.hash = e;
        return n.href;
    } return i && createValidAbsoluteUrl(t, "http://example.com") ? t.split("#", 1)[0] + "" + (e ? `#${e}` : "") : ""; }
    function stripPath(t) { return t.substring(t.lastIndexOf("/") + 1); }
    function shadow(t, e, i, n = !1) { Object.defineProperty(t, e, { value: i, enumerable: !n, configurable: !0, writable: !1 }); return i; }
    const G = function BaseExceptionClosure() { function BaseException(t, e) { this.message = t; this.name = e; } BaseException.prototype = new Error; BaseException.constructor = BaseException; return BaseException; }();
    class PasswordException extends G {
        constructor(t, e) { super(t, "PasswordException"); this.code = e; }
    }
    class UnknownErrorException extends G {
        constructor(t, e) { super(t, "UnknownErrorException"); this.details = e; }
    }
    class InvalidPDFException extends G {
        constructor(t) { super(t, "InvalidPDFException"); }
    }
    class ResponseException extends G {
        constructor(t, e, i) { super(t, "ResponseException"); this.status = e; this.missing = i; }
    }
    class FormatError extends G {
        constructor(t) { super(t, "FormatError"); }
    }
    class AbortException extends G {
        constructor(t) { super(t, "AbortException"); }
    }
    function stringToBytes(t) { "string" != typeof t && unreachable("Invalid argument for stringToBytes"); const e = t.length, i = new Uint8Array(e); for (let n = 0; n < e; ++n)
        i[n] = 255 & t.charCodeAt(n); return i; }
    class FeatureTest {
        static get isLittleEndian() { return shadow(this, "isLittleEndian", function isLittleEndian() { const t = new Uint8Array(4); t[0] = 1; return 1 === new Uint32Array(t.buffer, 0, 1)[0]; }()); }
        static get isEvalSupported() { return shadow(this, "isEvalSupported", function isEvalSupported() { try {
            new Function("");
            return !0;
        }
        catch (_a) {
            return !1;
        } }()); }
        static get isOffscreenCanvasSupported() { return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas); }
        static get isImageDecoderSupported() { return shadow(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder); }
        static get isFloat16ArraySupported() { return shadow(this, "isFloat16ArraySupported", "undefined" != typeof Float16Array); }
        static get isSanitizerSupported() { return shadow(this, "isSanitizerSupported", "undefined" != typeof Sanitizer); }
        static get platform() { const { platform: t, userAgent: e } = navigator; return shadow(this, "platform", { isAndroid: e.includes("Android"), isLinux: t.includes("Linux"), isMac: t.includes("Mac"), isWindows: t.includes("Win"), isFirefox: e.includes("Firefox") }); }
        static get isCSSRoundSupported() { var _a, _5; return shadow(this, "isCSSRoundSupported", (_5 = (_a = globalThis.CSS) === null || _a === void 0 ? void 0 : _a.supports) === null || _5 === void 0 ? void 0 : _5.call(_a, "width: round(1.5px, 1px)")); }
    }
    const W = Array.from(Array(256).keys(), t => t.toString(16).padStart(2, "0"));
    class Util {
        static makeHexColor(t, e, i) { return `#${W[t]}${W[e]}${W[i]}`; }
        static domMatrixToTransform(t) { return [t.a, t.b, t.c, t.d, t.e, t.f]; }
        static scaleMinMax(t, e) { let i; if (t[0]) {
            if (t[0] < 0) {
                i = e[0];
                e[0] = e[2];
                e[2] = i;
            }
            e[0] *= t[0];
            e[2] *= t[0];
            if (t[3] < 0) {
                i = e[1];
                e[1] = e[3];
                e[3] = i;
            }
            e[1] *= t[3];
            e[3] *= t[3];
        }
        else {
            i = e[0];
            e[0] = e[1];
            e[1] = i;
            i = e[2];
            e[2] = e[3];
            e[3] = i;
            if (t[1] < 0) {
                i = e[1];
                e[1] = e[3];
                e[3] = i;
            }
            e[1] *= t[1];
            e[3] *= t[1];
            if (t[2] < 0) {
                i = e[0];
                e[0] = e[2];
                e[2] = i;
            }
            e[0] *= t[2];
            e[2] *= t[2];
        } e[0] += t[4]; e[1] += t[5]; e[2] += t[4]; e[3] += t[5]; }
        static transform(t, e) { return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]; }
        static multiplyByDOMMatrix(t, e) { return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]]; }
        static applyTransform(t, e, i = 0) { const n = t[i], r = t[i + 1]; t[i] = n * e[0] + r * e[2] + e[4]; t[i + 1] = n * e[1] + r * e[3] + e[5]; }
        static applyTransformToBezier(t, e, i = 0) { const n = e[0], r = e[1], s = e[2], a = e[3], o = e[4], l = e[5]; for (let e = 0; e < 6; e += 2) {
            const h = t[i + e], c = t[i + e + 1];
            t[i + e] = h * n + c * s + o;
            t[i + e + 1] = h * r + c * a + l;
        } }
        static applyInverseTransform(t, e) { const i = t[0], n = t[1], r = e[0] * e[3] - e[1] * e[2]; t[0] = (i * e[3] - n * e[2] + e[2] * e[5] - e[4] * e[3]) / r; t[1] = (-i * e[1] + n * e[0] + e[4] * e[1] - e[5] * e[0]) / r; }
        static axialAlignedBoundingBox(t, e, i) { const n = e[0], r = e[1], s = e[2], a = e[3], o = e[4], l = e[5], h = t[0], c = t[1], d = t[2], u = t[3]; let p = n * h + o, g = p, m = n * d + o, f = m, b = a * c + l, y = b, v = a * u + l, w = v; if (0 !== r || 0 !== s) {
            const t = r * h, e = r * d, i = s * c, n = s * u;
            p += i;
            f += i;
            m += n;
            g += n;
            b += t;
            w += t;
            v += e;
            y += e;
        } i[0] = Math.min(i[0], p, m, g, f); i[1] = Math.min(i[1], b, v, y, w); i[2] = Math.max(i[2], p, m, g, f); i[3] = Math.max(i[3], b, v, y, w); }
        static inverseTransform(t) { const e = t[0] * t[3] - t[1] * t[2]; return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]; }
        static singularValueDecompose2dScale(t, e) { const i = t[0], n = t[1], r = t[2], s = t[3], a = Math.pow(i, 2) + Math.pow(n, 2), o = i * r + n * s, l = Math.pow(r, 2) + Math.pow(s, 2), h = (a + l) / 2, c = Math.sqrt(Math.pow(h, 2) - (a * l - Math.pow(o, 2))); e[0] = Math.sqrt(h + c || 1); e[1] = Math.sqrt(h - c || 1); }
        static normalizeRect(t) { const e = t.slice(0); if (t[0] > t[2]) {
            e[0] = t[2];
            e[2] = t[0];
        } if (t[1] > t[3]) {
            e[1] = t[3];
            e[3] = t[1];
        } return e; }
        static intersect(t, e) { const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), n = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2])); if (i > n)
            return null; const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), s = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3])); return r > s ? null : [i, r, n, s]; }
        static pointBoundingBox(t, e, i) { i[0] = Math.min(i[0], t); i[1] = Math.min(i[1], e); i[2] = Math.max(i[2], t); i[3] = Math.max(i[3], e); }
        static rectBoundingBox(t, e, i, n, r) { r[0] = Math.min(r[0], t, i); r[1] = Math.min(r[1], e, n); r[2] = Math.max(r[2], t, i); r[3] = Math.max(r[3], e, n); }
        static bezierBoundingBox(t, e, i, n, r, s, a, o, l) { l[0] = Math.min(l[0], t, a); l[1] = Math.min(l[1], e, o); l[2] = Math.max(l[2], t, a); l[3] = Math.max(l[3], e, o); __classPrivateFieldGet(this, _b, "m", _Util_e).call(this, t, i, r, a, e, n, s, o, 3 * (3 * (i - r) - t + a), 6 * (t - 2 * i + r), 3 * (i - t), l); __classPrivateFieldGet(this, _b, "m", _Util_e).call(this, t, i, r, a, e, n, s, o, 3 * (3 * (n - s) - e + o), 6 * (e - 2 * n + s), 3 * (n - e), l); }
    }
    _b = Util, _Util_t = function _Util_t(t, e, i, n, r, s, a, o, l, h) { if (l <= 0 || l >= 1)
        return; const c = 1 - l, d = l * l, u = d * l, p = c * (c * (c * t + 3 * l * e) + 3 * d * i) + u * n, g = c * (c * (c * r + 3 * l * s) + 3 * d * a) + u * o; h[0] = Math.min(h[0], p); h[1] = Math.min(h[1], g); h[2] = Math.max(h[2], p); h[3] = Math.max(h[3], g); }, _Util_e = function _Util_e(t, e, i, n, r, s, a, o, l, h, c, d) { if (Math.abs(l) < 1e-12) {
        Math.abs(h) >= 1e-12 && __classPrivateFieldGet(this, _b, "m", _Util_t).call(this, t, e, i, n, r, s, a, o, -c / h, d);
        return;
    } const u = Math.pow(h, 2) - 4 * c * l; if (u < 0)
        return; const p = Math.sqrt(u), g = 2 * l; __classPrivateFieldGet(this, _b, "m", _Util_t).call(this, t, e, i, n, r, s, a, o, (-h + p) / g, d); __classPrivateFieldGet(this, _b, "m", _Util_t).call(this, t, e, i, n, r, s, a, o, (-h - p) / g, d); };
    let V = null, $ = null;
    function normalizeUnicode(t) { if (!V) {
        V = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
        $ = new Map([["ﬅ", "ſt"]]);
    } return t.replaceAll(V, (t, e, i) => e ? e.normalize("NFKC") : $.get(i)); }
    function getUuid() { if ("function" == typeof crypto.randomUUID)
        return crypto.randomUUID(); const t = new Uint8Array(32); crypto.getRandomValues(t); return function bytesToString(t) { "object" == typeof t && void 0 !== (t === null || t === void 0 ? void 0 : t.length) || unreachable("Invalid argument for bytesToString"); const e = t.length, i = 8192; if (e < i)
        return String.fromCharCode.apply(null, t); const n = []; for (let r = 0; r < e; r += i) {
        const s = Math.min(r + i, e), a = t.subarray(r, s);
        n.push(String.fromCharCode.apply(null, a));
    } return n.join(""); }(t); }
    const q = "pdfjs_internal_id_";
    const makeArr = () => [], makeMap = () => new Map, makeObj = () => Object.create(null);
    function MathClamp(t, e, i) { return Math.min(Math.max(t, e), i); }
    "function" != typeof Blob.prototype.bytes && (Blob.prototype.bytes = function () {
        return __awaiter(this, void 0, void 0, function* () { return new Uint8Array(yield this.arrayBuffer()); });
    });
    "function" != typeof Response.prototype.bytes && (Response.prototype.bytes = function () {
        return __awaiter(this, void 0, void 0, function* () { return new Uint8Array(yield this.arrayBuffer()); });
    });
    "function" != typeof AbortSignal.any && (AbortSignal.any = function (t) { const e = new AbortController, { signal: i } = e; for (const n of t)
        if (n.aborted) {
            e.abort(n.reason);
            return i;
        } for (const n of t)
        n.addEventListener("abort", () => { e.abort(n.reason); }, { signal: i }); return i; });
    __webpack_require__(1701), __webpack_require__(4603), __webpack_require__(7566), __webpack_require__(8721);
    class XfaText {
        static textContent(t) { const e = [], i = { items: e, styles: Object.create(null) }; !function walk(t) { var _a; if (!t)
            return; let i = null; const n = t.name; if ("#text" === n)
            i = t.value;
        else {
            if (!XfaText.shouldBuildText(n))
                return;
            ((_a = t === null || t === void 0 ? void 0 : t.attributes) === null || _a === void 0 ? void 0 : _a.textContent) ? i = t.attributes.textContent : t.value && (i = t.value);
        } null !== i && e.push({ str: i }); if (t.children)
            for (const e of t.children)
                walk(e); }(t); return i; }
        static shouldBuildText(t) { return !("textarea" === t || "input" === t || "option" === t || "select" === t); }
    }
    class XfaLayer {
        static setupStorage(t, e, i, n, r) { const s = n.getValue(e, { value: null }); switch (i.name) {
            case "textarea":
                null !== s.value && (t.textContent = s.value);
                if ("print" === r)
                    break;
                t.addEventListener("input", t => { n.setValue(e, { value: t.target.value }); });
                break;
            case "input":
                if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                    s.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : s.value === i.attributes.xfaOff && t.removeAttribute("checked");
                    if ("print" === r)
                        break;
                    t.addEventListener("change", t => { n.setValue(e, { value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff") }); });
                }
                else {
                    null !== s.value && t.setAttribute("value", s.value);
                    if ("print" === r)
                        break;
                    t.addEventListener("input", t => { n.setValue(e, { value: t.target.value }); });
                }
                break;
            case "select":
                if (null !== s.value) {
                    t.setAttribute("value", s.value);
                    for (const t of i.children)
                        t.attributes.value === s.value ? t.attributes.selected = !0 : t.attributes.hasOwnProperty("selected") && delete t.attributes.selected;
                }
                t.addEventListener("input", t => { const i = t.target.options, r = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value; n.setValue(e, { value: r }); });
        } }
        static setAttributes({ html: t, element: e, storage: i = null, intent: n, linkService: r }) { const { attributes: s } = e, a = t instanceof HTMLAnchorElement; "radio" === s.type && (s.name = `${s.name}-${n}`); for (const [e, i] of Object.entries(s))
            if (null != i)
                switch (e) {
                    case "class":
                        i.length && t.setAttribute(e, i.join(" "));
                        break;
                    case "dataId": break;
                    case "id":
                        t.setAttribute("data-element-id", i);
                        break;
                    case "style":
                        Object.assign(t.style, i);
                        break;
                    case "textContent":
                        t.textContent = i;
                        break;
                    default: (!a || "href" !== e && "newWindow" !== e) && t.setAttribute(e, i);
                } a && r.addLinkAttributes(t, s.href, s.newWindow); i && s.dataId && this.setupStorage(t, s.dataId, e, i); }
        static render(t) { var _a, _5; const e = t.annotationStorage, i = t.linkService, n = t.xfaHtml, r = t.intent || "display", s = document.createElement(n.name); n.attributes && this.setAttributes({ html: s, element: n, intent: r, linkService: i }); const a = "richText" !== r, o = t.div; o.append(s); if (t.viewport) {
            const e = `matrix(${t.viewport.transform.join(",")})`;
            o.style.transform = e;
        } a && o.setAttribute("class", "xfaLayer xfaFont"); const l = []; if (0 === n.children.length) {
            if (n.value) {
                const t = document.createTextNode(n.value);
                s.append(t);
                a && XfaText.shouldBuildText(n.name) && l.push(t);
            }
            return { textDivs: l };
        } const h = [[n, -1, s]]; for (; h.length > 0;) {
            const [t, n, s] = h.at(-1);
            if (n + 1 === t.children.length) {
                h.pop();
                continue;
            }
            const o = t.children[++h.at(-1)[1]];
            if (null === o)
                continue;
            const { name: c } = o;
            if ("#text" === c) {
                const t = document.createTextNode(o.value);
                l.push(t);
                s.append(t);
                continue;
            }
            const d = ((_a = o === null || o === void 0 ? void 0 : o.attributes) === null || _a === void 0 ? void 0 : _a.xmlns) ? document.createElementNS(o.attributes.xmlns, c) : document.createElement(c);
            s.append(d);
            o.attributes && this.setAttributes({ html: d, element: o, storage: e, intent: r, linkService: i });
            if (((_5 = o.children) === null || _5 === void 0 ? void 0 : _5.length) > 0)
                h.push([o, -1, d]);
            else if (o.value) {
                const t = document.createTextNode(o.value);
                a && XfaText.shouldBuildText(c) && l.push(t);
                d.append(t);
            }
        } for (const t of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
            t.setAttribute("readOnly", !0); return { textDivs: l }; }
        static update(t) { const e = `matrix(${t.viewport.transform.join(",")})`; t.div.style.transform = e; t.div.hidden = !1; }
    }
    const X = "http://www.w3.org/2000/svg";
    class PixelsPerInch {
    }
    _c = PixelsPerInch;
    PixelsPerInch.CSS = 96;
    PixelsPerInch.PDF = 72;
    PixelsPerInch.PDF_TO_CSS_UNITS = _c.CSS / _c.PDF;
    function fetchData(t_1) {
        return __awaiter(this, arguments, void 0, function* (t, e = "text") { if (isValidFetchUrl(t, document.baseURI)) {
            const i = yield fetch(t);
            if (!i.ok)
                throw new Error(i.statusText);
            switch (e) {
                case "blob": return i.blob();
                case "bytes": return i.bytes();
                case "json": return i.json();
            }
            return i.text();
        } return new Promise((i, n) => { const r = new XMLHttpRequest; r.open("GET", t, !0); r.responseType = "bytes" === e ? "arraybuffer" : e; r.onreadystatechange = () => { if (r.readyState === XMLHttpRequest.DONE)
            if (200 !== r.status && 0 !== r.status)
                n(new Error(r.statusText));
            else {
                switch (e) {
                    case "bytes":
                        i(new Uint8Array(r.response));
                        return;
                    case "blob":
                    case "json":
                        i(r.response);
                        return;
                }
                i(r.responseText);
            } }; r.send(null); }); });
    }
    class PageViewport {
        constructor({ viewBox: t, userUnit: e, scale: i, rotation: n, offsetX: r = 0, offsetY: s = 0, dontFlip: a = !1 }) { this.viewBox = t; this.userUnit = e; this.scale = i; this.rotation = n; this.offsetX = r; this.offsetY = s; i *= e; const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2; let h, c, d, u, p, g, m, f; (n %= 360) < 0 && (n += 360); switch (n) {
            case 180:
                h = -1;
                c = 0;
                d = 0;
                u = 1;
                break;
            case 90:
                h = 0;
                c = 1;
                d = 1;
                u = 0;
                break;
            case 270:
                h = 0;
                c = -1;
                d = -1;
                u = 0;
                break;
            case 0:
                h = 1;
                c = 0;
                d = 0;
                u = -1;
                break;
            default: throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
        } if (a) {
            d = -d;
            u = -u;
        } if (0 === h) {
            p = Math.abs(l - t[1]) * i + r;
            g = Math.abs(o - t[0]) * i + s;
            m = (t[3] - t[1]) * i;
            f = (t[2] - t[0]) * i;
        }
        else {
            p = Math.abs(o - t[0]) * i + r;
            g = Math.abs(l - t[1]) * i + s;
            m = (t[2] - t[0]) * i;
            f = (t[3] - t[1]) * i;
        } this.transform = [h * i, c * i, d * i, u * i, p - h * i * o - d * i * l, g - c * i * o - u * i * l]; this.width = m; this.height = f; }
        get rawDims() { const t = this.viewBox; return shadow(this, "rawDims", { pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1] }); }
        clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: i = this.offsetX, offsetY: n = this.offsetY, dontFlip: r = !1 } = {}) { return new PageViewport({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t, rotation: e, offsetX: i, offsetY: n, dontFlip: r }); }
        convertToViewportPoint(t, e) { const i = [t, e]; Util.applyTransform(i, this.transform); return i; }
        convertToViewportRectangle(t) { const e = [t[0], t[1]]; Util.applyTransform(e, this.transform); const i = [t[2], t[3]]; Util.applyTransform(i, this.transform); return [e[0], e[1], i[0], i[1]]; }
        convertToPdfPoint(t, e) { const i = [t, e]; Util.applyInverseTransform(i, this.transform); return i; }
    }
    class RenderingCancelledException extends G {
        constructor(t, e = 0) { super(t, "RenderingCancelledException"); this.extraDelay = e; }
    }
    function isDataScheme(t) { const e = t.length; let i = 0; for (; i < e && "" === t[i].trim();)
        i++; return "data:" === t.substring(i, i + 5).toLowerCase(); }
    function isPdfFile(t) { return "string" == typeof t && /\.pdf$/i.test(t); }
    function getFilenameFromUrl(t) { [t] = t.split(/[#?]/, 1); return stripPath(t); }
    function getPdfFilenameFromUrl(t, e = "document.pdf") { var _a; if ("string" != typeof t)
        return e; if (isDataScheme(t)) {
        warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
        return e;
    } const i = (t => { try {
        return new URL(t);
    }
    catch (_a) {
        try {
            return new URL(decodeURIComponent(t));
        }
        catch (_5) {
            try {
                return new URL(t, "https://foo.bar");
            }
            catch (_6) {
                try {
                    return new URL(decodeURIComponent(t), "https://foo.bar");
                }
                catch (_7) {
                    return null;
                }
            }
        }
    } })(t); if (!i)
        return e; const decode = t => { try {
        let e = decodeURIComponent(t);
        if (e.includes("/")) {
            e = stripPath(e);
            if (/^\.pdf$/i.test(e))
                return t;
        }
        return e;
    }
    catch (_a) {
        return t;
    } }, n = /\.pdf$/i, r = stripPath(i.pathname); if (n.test(r))
        return decode(r); if (i.searchParams.size > 0) {
        const getLast = t => [...t].findLast(t => n.test(t)), t = (_a = getLast(i.searchParams.values())) !== null && _a !== void 0 ? _a : getLast(i.searchParams.keys());
        if (t)
            return decode(t);
    } if (i.hash) {
        const t = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
        if (t)
            return decode(t[0]);
    } return e; }
    class StatTimer {
        constructor() {
            _StatTimer_i.set(this, new Map);
            this.times = [];
        }
        time(t) { __classPrivateFieldGet(this, _StatTimer_i, "f").has(t) && warn(`Timer is already running for ${t}`); __classPrivateFieldGet(this, _StatTimer_i, "f").set(t, Date.now()); }
        timeEnd(t) { __classPrivateFieldGet(this, _StatTimer_i, "f").has(t) || warn(`Timer has not been started for ${t}`); this.times.push({ name: t, start: __classPrivateFieldGet(this, _StatTimer_i, "f").get(t), end: Date.now() }); __classPrivateFieldGet(this, _StatTimer_i, "f").delete(t); }
        toString() { const t = Math.max(...this.times.map(t => t.name.length)); return this.times.map(e => `${e.name.padEnd(t)} ${e.end - e.start}ms\n`).join(""); }
    }
    _StatTimer_i = new WeakMap();
    function isValidFetchUrl(t, e) { var _a; const i = e ? URL.parse(t, e) : URL.parse(t); return /https?:/.test((_a = i === null || i === void 0 ? void 0 : i.protocol) !== null && _a !== void 0 ? _a : ""); }
    function noContextMenu(t) { t.preventDefault(); }
    function stopEvent(t) { t.preventDefault(); t.stopPropagation(); }
    class PDFDateString {
        static toDateObject(t) { if (t instanceof Date)
            return t; if (!t || "string" != typeof t)
            return null; __classPrivateFieldSet(this, _d, __classPrivateFieldGet(this, _d, "f", _PDFDateString_n) || new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"), "f", _PDFDateString_n); const e = __classPrivateFieldGet(this, _d, "f", _PDFDateString_n).exec(t); if (!e)
            return null; const i = parseInt(e[1], 10); let n = parseInt(e[2], 10); n = n >= 1 && n <= 12 ? n - 1 : 0; let r = parseInt(e[3], 10); r = r >= 1 && r <= 31 ? r : 1; let s = parseInt(e[4], 10); s = s >= 0 && s <= 23 ? s : 0; let a = parseInt(e[5], 10); a = a >= 0 && a <= 59 ? a : 0; let o = parseInt(e[6], 10); o = o >= 0 && o <= 59 ? o : 0; const l = e[7] || "Z"; let h = parseInt(e[8], 10); h = h >= 0 && h <= 23 ? h : 0; let c = parseInt(e[9], 10) || 0; c = c >= 0 && c <= 59 ? c : 0; if ("-" === l) {
            s += h;
            a += c;
        }
        else if ("+" === l) {
            s -= h;
            a -= c;
        } return new Date(Date.UTC(i, n, r, s, a, o)); }
    }
    _d = PDFDateString;
    _PDFDateString_n = { value: void 0 };
    function getXfaPageViewport(t, { scale: e = 1, rotation: i = 0 }) { const { width: n, height: r } = t.attributes.style, s = [0, 0, parseInt(n), parseInt(r)]; return new PageViewport({ viewBox: s, userUnit: 1, scale: e, rotation: i }); }
    function getRGB(t) { if (t.startsWith("#")) {
        const e = parseInt(t.slice(1), 16);
        return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
    } if (t.startsWith("rgb("))
        return t.slice(4, -1).split(",").map(t => parseInt(t)); if (t.startsWith("rgba("))
        return t.slice(5, -1).split(",", 3).map(t => parseInt(t)); warn(`Not a valid color format: "${t}"`); return [0, 0, 0]; }
    function getCurrentTransform(t) { const { a: e, b: i, c: n, d: r, e: s, f: a } = t.getTransform(); return [e, i, n, r, s, a]; }
    function getCurrentTransformInverse(t) { const { a: e, b: i, c: n, d: r, e: s, f: a } = t.getTransform().invertSelf(); return [e, i, n, r, s, a]; }
    function setLayerDimensions(t, e, i = !1, n = !0) { if (e instanceof PageViewport) {
        const { pageWidth: n, pageHeight: r } = e.rawDims, { style: s } = t, a = FeatureTest.isCSSRoundSupported, o = `var(--total-scale-factor) * ${n}px`, l = `var(--total-scale-factor) * ${r}px`, h = a ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`, c = a ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
        if (i && e.rotation % 180 != 0) {
            s.width = c;
            s.height = h;
        }
        else {
            s.width = h;
            s.height = c;
        }
    } n && t.setAttribute("data-main-rotation", e.rotation); }
    class OutputScale {
        constructor() { const { pixelRatio: t } = OutputScale; this.sx = t; this.sy = t; }
        get scaled() { return 1 !== this.sx || 1 !== this.sy; }
        get symmetric() { return this.sx === this.sy; }
        limitCanvas(t, e, i, n, r = -1) { let s = 1 / 0, a = 1 / 0, o = 1 / 0; (i = OutputScale.capPixels(i, r)) > 0 && (s = Math.sqrt(i / (t * e))); if (-1 !== n) {
            a = n / t;
            o = n / e;
        } const l = Math.min(s, a, o); if (this.sx > l || this.sy > l) {
            this.sx = l;
            this.sy = l;
            return !0;
        } return !1; }
        static get pixelRatio() { return globalThis.devicePixelRatio || 1; }
        static capPixels(t, e) { if (e >= 0) {
            const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * Math.pow(this.pixelRatio, 2) * (1 + e / 100));
            return t > 0 ? Math.min(t, i) : i;
        } return t; }
    }
    const Y = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
    class ColorScheme {
        static get isDarkMode() { var _a; return shadow(this, "isDarkMode", !!((_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches)); }
    }
    class CSSConstants {
        static get commentForegroundColor() { const t = document.createElement("span"); t.classList.add("comment", "sidebar"); const { style: e } = t; e.width = e.height = "0"; e.display = "none"; e.color = "var(--comment-fg-color)"; document.body.append(t); const { color: i } = window.getComputedStyle(t); t.remove(); return shadow(this, "commentForegroundColor", getRGB(i)); }
    }
    function applyOpacity(t, e) { const i = 255 * (1 - (e = MathClamp(e !== null && e !== void 0 ? e : 1, 0, 1))); return t.map(t => Math.round(t * e + i)); }
    function RGBToHSL(t, e) { const i = t[0] / 255, n = t[1] / 255, r = t[2] / 255, s = Math.max(i, n, r), a = Math.min(i, n, r), o = (s + a) / 2; if (s === a)
        e[0] = e[1] = 0;
    else {
        const t = s - a;
        e[1] = o < .5 ? t / (s + a) : t / (2 - s - a);
        switch (s) {
            case i:
                e[0] = 60 * ((n - r) / t + (n < r ? 6 : 0));
                break;
            case n:
                e[0] = 60 * ((r - i) / t + 2);
                break;
            case r: e[0] = 60 * ((i - n) / t + 4);
        }
    } e[2] = o; }
    function HSLToRGB(t, e) { const i = t[0], n = t[1], r = t[2], s = (1 - Math.abs(2 * r - 1)) * n, a = s * (1 - Math.abs(i / 60 % 2 - 1)), o = r - s / 2; switch (Math.floor(i / 60)) {
        case 0:
            e[0] = s + o;
            e[1] = a + o;
            e[2] = o;
            break;
        case 1:
            e[0] = a + o;
            e[1] = s + o;
            e[2] = o;
            break;
        case 2:
            e[0] = o;
            e[1] = s + o;
            e[2] = a + o;
            break;
        case 3:
            e[0] = o;
            e[1] = a + o;
            e[2] = s + o;
            break;
        case 4:
            e[0] = a + o;
            e[1] = o;
            e[2] = s + o;
            break;
        case 5:
        case 6:
            e[0] = s + o;
            e[1] = o;
            e[2] = a + o;
    } }
    function computeLuminance(t) { return t <= .03928 ? t / 12.92 : Math.pow(((t + .055) / 1.055), 2.4); }
    function contrastRatio(t, e, i) { HSLToRGB(t, i); i.map(computeLuminance); const n = .2126 * i[0] + .7152 * i[1] + .0722 * i[2]; HSLToRGB(e, i); i.map(computeLuminance); const r = .2126 * i[0] + .7152 * i[1] + .0722 * i[2]; return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05); }
    const K = new Map;
    function findContrastColor(t, e) { const i = t[0] + 256 * t[1] + 65536 * t[2] + 16777216 * e[0] + 4294967296 * e[1] + 1099511627776 * e[2]; let n = K.get(i); if (n)
        return n; const r = new Float32Array(9), s = r.subarray(0, 3), a = r.subarray(3, 6); RGBToHSL(t, a); const o = r.subarray(6, 9); RGBToHSL(e, o); const l = o[2] < .5, h = l ? 12 : 4.5; a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]); if (contrastRatio(a, o, s) < h) {
        let t, e;
        if (l) {
            t = a[2];
            e = 1;
        }
        else {
            t = 0;
            e = a[2];
        }
        const i = .005;
        for (; e - t > i;) {
            const i = a[2] = (t + e) / 2;
            l === contrastRatio(a, o, s) < h ? t = i : e = i;
        }
        a[2] = l ? e : t;
    } HSLToRGB(a, s); n = Util.makeHexColor(Math.round(255 * s[0]), Math.round(255 * s[1]), Math.round(255 * s[2])); K.set(i, n); return n; }
    function renderRichText({ html: t, dir: e, className: i }, n) { const r = document.createDocumentFragment(); if ("string" == typeof t) {
        const i = document.createElement("p");
        i.dir = e || "auto";
        const n = t.split(/(?:\r\n?|\n)/);
        for (let t = 0, e = n.length; t < e; ++t) {
            const r = n[t];
            i.append(document.createTextNode(r));
            t < e - 1 && i.append(document.createElement("br"));
        }
        r.append(i);
    }
    else
        XfaLayer.render({ xfaHtml: t, div: r, intent: "richText" }); r.firstElementChild.classList.add("richText", i); n.append(r); }
    function makePathFromDrawOPS(t) { const e = new Path2D; if (!t)
        return e; for (let i = 0, n = t.length; i < n;)
        switch (t[i++]) {
            case O:
                e.moveTo(t[i++], t[i++]);
                break;
            case L:
                e.lineTo(t[i++], t[i++]);
                break;
            case N:
                e.bezierCurveTo(t[i++], t[i++], t[i++], t[i++], t[i++], t[i++]);
                break;
            case U:
                e.quadraticCurveTo(t[i++], t[i++], t[i++], t[i++]);
                break;
            case H:
                e.closePath();
                break;
            default: warn(`Unrecognized drawing path operator: ${t[i - 1]}`);
        } return e; }
    __webpack_require__(4972), __webpack_require__(4628), __webpack_require__(7642), __webpack_require__(8004), __webpack_require__(3853), __webpack_require__(5876), __webpack_require__(2475), __webpack_require__(5024), __webpack_require__(1698), __webpack_require__(8454), __webpack_require__(9452), __webpack_require__(4979), __webpack_require__(3579), __webpack_require__(3110), __webpack_require__(9314), __webpack_require__(1148), __webpack_require__(9112);
    class EditorToolbar {
        constructor(t) {
            var _a;
            _EditorToolbar_instances.add(this);
            _EditorToolbar_r.set(this, null);
            _EditorToolbar_s.set(this, null);
            _EditorToolbar_a.set(this, void 0);
            _EditorToolbar_o.set(this, null);
            _EditorToolbar_l.set(this, null);
            _EditorToolbar_h.set(this, null);
            _EditorToolbar_c.set(this, null);
            _EditorToolbar_d.set(this, null);
            __classPrivateFieldSet(this, _EditorToolbar_a, t, "f");
            __classPrivateFieldSet(_a = _e, _e, __classPrivateFieldGet(_a, _e, "f", _EditorToolbar_u) || Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" }), "f", _EditorToolbar_u);
        }
        render() { const t = __classPrivateFieldSet(this, _EditorToolbar_r, document.createElement("div"), "f"); t.classList.add("editToolbar", "hidden"); t.setAttribute("role", "toolbar"); const e = __classPrivateFieldGet(this, _EditorToolbar_a, "f")._uiManager._signal; if (e instanceof AbortSignal && !e.aborted) {
            t.addEventListener("contextmenu", noContextMenu, { signal: e });
            t.addEventListener("pointerdown", __classPrivateFieldGet(_e, _e, "m", _EditorToolbar_p), { signal: e });
        } const i = __classPrivateFieldSet(this, _EditorToolbar_o, document.createElement("div"), "f"); i.className = "buttons"; t.append(i); const n = __classPrivateFieldGet(this, _EditorToolbar_a, "f").toolbarPosition; if (n) {
            const { style: e } = t, i = "ltr" === __classPrivateFieldGet(this, _EditorToolbar_a, "f")._uiManager.direction ? 1 - n[0] : n[0];
            e.insetInlineEnd = 100 * i + "%";
            e.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
        } return t; }
        get div() { return __classPrivateFieldGet(this, _EditorToolbar_r, "f"); }
        hide() { var _a; __classPrivateFieldGet(this, _EditorToolbar_r, "f").classList.add("hidden"); (_a = __classPrivateFieldGet(this, _EditorToolbar_s, "f")) === null || _a === void 0 ? void 0 : _a.hideDropdown(); }
        show() { var _a, _5; __classPrivateFieldGet(this, _EditorToolbar_r, "f").classList.remove("hidden"); (_a = __classPrivateFieldGet(this, _EditorToolbar_l, "f")) === null || _a === void 0 ? void 0 : _a.shown(); (_5 = __classPrivateFieldGet(this, _EditorToolbar_h, "f")) === null || _5 === void 0 ? void 0 : _5.shown(); }
        addDeleteButton() { const { editorType: t, _uiManager: e } = __classPrivateFieldGet(this, _EditorToolbar_a, "f"), i = document.createElement("button"); i.classList.add("basic", "deleteButton"); i.tabIndex = 0; i.setAttribute("data-l10n-id", __classPrivateFieldGet(_e, _e, "f", _EditorToolbar_u)[t]); __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_f).call(this, i) && i.addEventListener("click", t => { e.delete(); }, { signal: e._signal }); __classPrivateFieldGet(this, _EditorToolbar_o, "f").append(i); }
        addAltText(t) {
            return __awaiter(this, void 0, void 0, function* () { const e = yield t.render(); __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_f).call(this, e); __classPrivateFieldGet(this, _EditorToolbar_o, "f").append(e, __classPrivateFieldGet(this, _EditorToolbar_instances, "a", _EditorToolbar_b_get)); __classPrivateFieldSet(this, _EditorToolbar_l, t, "f"); });
        }
        addComment(t, e = null) { if (__classPrivateFieldGet(this, _EditorToolbar_h, "f"))
            return; const i = t.renderForToolbar(); if (!i)
            return; __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_f).call(this, i); const n = __classPrivateFieldSet(this, _EditorToolbar_c, __classPrivateFieldGet(this, _EditorToolbar_instances, "a", _EditorToolbar_b_get), "f"); if (e) {
            __classPrivateFieldGet(this, _EditorToolbar_o, "f").insertBefore(i, e);
            __classPrivateFieldGet(this, _EditorToolbar_o, "f").insertBefore(n, e);
        }
        else
            __classPrivateFieldGet(this, _EditorToolbar_o, "f").append(i, n); __classPrivateFieldSet(this, _EditorToolbar_h, t, "f"); t.toolbar = this; }
        addColorPicker(t) { if (__classPrivateFieldGet(this, _EditorToolbar_s, "f"))
            return; __classPrivateFieldSet(this, _EditorToolbar_s, t, "f"); const e = t.renderButton(); __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_f).call(this, e); __classPrivateFieldGet(this, _EditorToolbar_o, "f").append(e, __classPrivateFieldGet(this, _EditorToolbar_instances, "a", _EditorToolbar_b_get)); }
        addEditSignatureButton(t) {
            return __awaiter(this, void 0, void 0, function* () { const e = __classPrivateFieldSet(this, _EditorToolbar_d, yield t.renderEditButton(__classPrivateFieldGet(this, _EditorToolbar_a, "f")), "f"); __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_f).call(this, e); __classPrivateFieldGet(this, _EditorToolbar_o, "f").append(e, __classPrivateFieldGet(this, _EditorToolbar_instances, "a", _EditorToolbar_b_get)); });
        }
        removeButton(t) { var _a, _5; if ("comment" === t) {
            (_a = __classPrivateFieldGet(this, _EditorToolbar_h, "f")) === null || _a === void 0 ? void 0 : _a.removeToolbarCommentButton();
            __classPrivateFieldSet(this, _EditorToolbar_h, null, "f");
            (_5 = __classPrivateFieldGet(this, _EditorToolbar_c, "f")) === null || _5 === void 0 ? void 0 : _5.remove();
            __classPrivateFieldSet(this, _EditorToolbar_c, null, "f");
        } }
        addButton(t, e) {
            return __awaiter(this, void 0, void 0, function* () { switch (t) {
                case "colorPicker":
                    e && this.addColorPicker(e);
                    break;
                case "altText":
                    e && (yield this.addAltText(e));
                    break;
                case "editSignature":
                    e && (yield this.addEditSignatureButton(e));
                    break;
                case "delete":
                    this.addDeleteButton();
                    break;
                case "comment": e && this.addComment(e);
            } });
        }
        addButtonBefore(t, e, i) {
            return __awaiter(this, void 0, void 0, function* () { if (!e && "comment" === t)
                return; const n = __classPrivateFieldGet(this, _EditorToolbar_o, "f").querySelector(i); n && "comment" === t && this.addComment(e, n); });
        }
        updateEditSignatureButton(t) { __classPrivateFieldGet(this, _EditorToolbar_d, "f") && (__classPrivateFieldGet(this, _EditorToolbar_d, "f").title = t); }
        remove() { var _a; __classPrivateFieldGet(this, _EditorToolbar_r, "f").remove(); (_a = __classPrivateFieldGet(this, _EditorToolbar_s, "f")) === null || _a === void 0 ? void 0 : _a.destroy(); __classPrivateFieldSet(this, _EditorToolbar_s, null, "f"); }
    }
    _e = EditorToolbar, _EditorToolbar_r = new WeakMap(), _EditorToolbar_s = new WeakMap(), _EditorToolbar_a = new WeakMap(), _EditorToolbar_o = new WeakMap(), _EditorToolbar_l = new WeakMap(), _EditorToolbar_h = new WeakMap(), _EditorToolbar_c = new WeakMap(), _EditorToolbar_d = new WeakMap(), _EditorToolbar_instances = new WeakSet(), _EditorToolbar_p = function _EditorToolbar_p(t) { t.stopPropagation(); }, _EditorToolbar_g = function _EditorToolbar_g(t) { __classPrivateFieldGet(this, _EditorToolbar_a, "f")._focusEventsAllowed = !1; stopEvent(t); }, _EditorToolbar_m = function _EditorToolbar_m(t) { __classPrivateFieldGet(this, _EditorToolbar_a, "f")._focusEventsAllowed = !0; stopEvent(t); }, _EditorToolbar_f = function _EditorToolbar_f(t) { const e = __classPrivateFieldGet(this, _EditorToolbar_a, "f")._uiManager._signal; if (!(e instanceof AbortSignal) || e.aborted)
        return !1; t.addEventListener("focusin", __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_g).bind(this), { capture: !0, signal: e }); t.addEventListener("focusout", __classPrivateFieldGet(this, _EditorToolbar_instances, "m", _EditorToolbar_m).bind(this), { capture: !0, signal: e }); t.addEventListener("contextmenu", noContextMenu, { signal: e }); return !0; }, _EditorToolbar_b_get = function _EditorToolbar_b_get() { const t = document.createElement("div"); t.className = "divider"; return t; };
    _EditorToolbar_u = { value: null };
    class FloatingToolbar {
        constructor(t) {
            _FloatingToolbar_instances.add(this);
            _FloatingToolbar_o.set(this, null);
            _FloatingToolbar_r.set(this, null);
            _FloatingToolbar_y.set(this, void 0);
            __classPrivateFieldSet(this, _FloatingToolbar_y, t, "f");
        }
        show(t, e, i) { const [n, r] = __classPrivateFieldGet(this, _FloatingToolbar_instances, "m", _FloatingToolbar_A).call(this, e, i), { style: s } = __classPrivateFieldSet(this, _FloatingToolbar_r, __classPrivateFieldGet(this, _FloatingToolbar_r, "f") || __classPrivateFieldGet(this, _FloatingToolbar_instances, "m", _FloatingToolbar_v).call(this), "f"); t.append(__classPrivateFieldGet(this, _FloatingToolbar_r, "f")); s.insetInlineEnd = 100 * n + "%"; s.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`; }
        hide() { __classPrivateFieldGet(this, _FloatingToolbar_r, "f").remove(); }
    }
    _FloatingToolbar_o = new WeakMap(), _FloatingToolbar_r = new WeakMap(), _FloatingToolbar_y = new WeakMap(), _FloatingToolbar_instances = new WeakSet(), _FloatingToolbar_v = function _FloatingToolbar_v() { const t = __classPrivateFieldSet(this, _FloatingToolbar_r, document.createElement("div"), "f"); t.className = "editToolbar"; t.setAttribute("role", "toolbar"); const e = __classPrivateFieldGet(this, _FloatingToolbar_y, "f")._signal; e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", noContextMenu, { signal: e }); const i = __classPrivateFieldSet(this, _FloatingToolbar_o, document.createElement("div"), "f"); i.className = "buttons"; t.append(i); __classPrivateFieldGet(this, _FloatingToolbar_y, "f").hasCommentManager() && __classPrivateFieldGet(this, _FloatingToolbar_instances, "m", _FloatingToolbar_w).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => { __classPrivateFieldGet(this, _FloatingToolbar_y, "f").commentSelection("floating_button"); }); __classPrivateFieldGet(this, _FloatingToolbar_instances, "m", _FloatingToolbar_w).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => { __classPrivateFieldGet(this, _FloatingToolbar_y, "f").highlightSelection("floating_button"); }); return t; }, _FloatingToolbar_A = function _FloatingToolbar_A(t, e) { let i = 0, n = 0; for (const r of t) {
        const t = r.y + r.height;
        if (t < i)
            continue;
        const s = r.x + (e ? r.width : 0);
        if (t > i) {
            n = s;
            i = t;
        }
        else
            e ? s > n && (n = s) : s < n && (n = s);
    } return [e ? 1 - n : n, i]; }, _FloatingToolbar_w = function _FloatingToolbar_w(t, e, i, n) { const r = document.createElement("button"); r.classList.add("basic", t); r.tabIndex = 0; r.setAttribute("data-l10n-id", e); const s = document.createElement("span"); r.append(s); s.className = "visuallyHidden"; s.setAttribute("data-l10n-id", i); const a = __classPrivateFieldGet(this, _FloatingToolbar_y, "f")._signal; if (a instanceof AbortSignal && !a.aborted) {
        r.addEventListener("contextmenu", noContextMenu, { signal: a });
        r.addEventListener("click", n, { signal: a });
    } __classPrivateFieldGet(this, _FloatingToolbar_o, "f").append(r); };
    function bindEvents(t, e, i) { for (const n of i)
        e.addEventListener(n, t[n].bind(t)); }
    class CurrentPointers {
        static initializeAndAddPointerId(t) { var _a; (__classPrivateFieldSet(_a = _f, _f, __classPrivateFieldGet(_a, _f, "f", _CurrentPointers_E) || new Set, "f", _CurrentPointers_E)).add(t); }
        static setPointer(t, e) { var _a; var _5, _6; __classPrivateFieldSet(_5 = _f, _f, __classPrivateFieldGet(_5, _f, "f", _CurrentPointers_x) || e, "f", _CurrentPointers_x); __classPrivateFieldSet(_6 = _f, _f, (_a = __classPrivateFieldGet(_6, _f, "f", _CurrentPointers_T)) !== null && _a !== void 0 ? _a : t, "f", _CurrentPointers_T); }
        static setTimeStamp(t) { __classPrivateFieldSet(_f, _f, t, "f", _CurrentPointers__); }
        static isSamePointerId(t) { return __classPrivateFieldGet(_f, _f, "f", _CurrentPointers_x) === t; }
        static isSamePointerIdOrRemove(t) { var _a; if (__classPrivateFieldGet(_f, _f, "f", _CurrentPointers_x) === t)
            return !0; (_a = __classPrivateFieldGet(_f, _f, "f", _CurrentPointers_E)) === null || _a === void 0 ? void 0 : _a.delete(t); return !1; }
        static isSamePointerType(t) { return __classPrivateFieldGet(_f, _f, "f", _CurrentPointers_T) === t; }
        static isInitializedAndDifferentPointerType(t) { return null !== __classPrivateFieldGet(_f, _f, "f", _CurrentPointers_T) && !_f.isSamePointerType(t); }
        static isSameTimeStamp(t) { return __classPrivateFieldGet(_f, _f, "f", _CurrentPointers__) === t; }
        static isUsingMultiplePointers() { var _a; return ((_a = __classPrivateFieldGet(_f, _f, "f", _CurrentPointers_E)) === null || _a === void 0 ? void 0 : _a.size) >= 1; }
        static clearPointerType() { __classPrivateFieldSet(_f, _f, null, "f", _CurrentPointers_T); }
        static clearPointerIds() { __classPrivateFieldSet(_f, _f, NaN, "f", _CurrentPointers_x); __classPrivateFieldSet(_f, _f, null, "f", _CurrentPointers_E); }
        static clearTimeStamp() { __classPrivateFieldSet(_f, _f, NaN, "f", _CurrentPointers__); }
    }
    _f = CurrentPointers;
    _CurrentPointers_x = { value: NaN };
    _CurrentPointers_E = { value: null };
    _CurrentPointers__ = { value: NaN };
    _CurrentPointers_T = { value: null };
    class IdManager {
        constructor() {
            _IdManager_S.set(this, 0);
        }
        get id() { var _a, _5; return `${g}${__classPrivateFieldSet(this, _IdManager_S, (_5 = __classPrivateFieldGet(this, _IdManager_S, "f"), _a = _5++, _5), "f"), _a}`; }
    }
    _IdManager_S = new WeakMap();
    class ImageManager {
        constructor() {
            _ImageManager_instances.add(this);
            _ImageManager_C.set(this, getUuid());
            _ImageManager_S.set(this, 0);
            _ImageManager_D.set(this, null);
        }
        static get _isSVGFittingCanvas() { const t = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: !0 }), e = new Image; e.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>'; return shadow(this, "_isSVGFittingCanvas", e.decode().then(() => { t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3); return 0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0]; })); }
        getFromFile(t) {
            return __awaiter(this, void 0, void 0, function* () { const { lastModified: e, name: i, size: n, type: r } = t; return __classPrivateFieldGet(this, _ImageManager_instances, "m", _ImageManager_P).call(this, `${e}_${i}_${n}_${r}`, t); });
        }
        getFromUrl(t) {
            return __awaiter(this, void 0, void 0, function* () { return __classPrivateFieldGet(this, _ImageManager_instances, "m", _ImageManager_P).call(this, t, t); });
        }
        getFromBlob(t, e) {
            return __awaiter(this, void 0, void 0, function* () { const i = yield e; return __classPrivateFieldGet(this, _ImageManager_instances, "m", _ImageManager_P).call(this, t, i); });
        }
        getFromId(t) {
            return __awaiter(this, void 0, void 0, function* () { __classPrivateFieldSet(this, _ImageManager_D, __classPrivateFieldGet(this, _ImageManager_D, "f") || new Map, "f"); const e = __classPrivateFieldGet(this, _ImageManager_D, "f").get(t); if (!e)
                return null; if (e.bitmap) {
                e.refCounter += 1;
                return e;
            } if (e.file)
                return this.getFromFile(e.file); if (e.blobPromise) {
                const { blobPromise: t } = e;
                delete e.blobPromise;
                return this.getFromBlob(e.id, t);
            } return this.getFromUrl(e.url); });
        }
        getFromCanvas(t, e) { var _a, _5; __classPrivateFieldSet(this, _ImageManager_D, __classPrivateFieldGet(this, _ImageManager_D, "f") || new Map, "f"); let i = __classPrivateFieldGet(this, _ImageManager_D, "f").get(t); if (i === null || i === void 0 ? void 0 : i.bitmap) {
            i.refCounter += 1;
            return i;
        } const n = new OffscreenCanvas(e.width, e.height); n.getContext("2d").drawImage(e, 0, 0); i = { bitmap: n.transferToImageBitmap(), id: `image_${__classPrivateFieldGet(this, _ImageManager_C, "f")}_${__classPrivateFieldSet(this, _ImageManager_S, (_5 = __classPrivateFieldGet(this, _ImageManager_S, "f"), _a = _5++, _5), "f"), _a}`, refCounter: 1, isSvg: !1 }; __classPrivateFieldGet(this, _ImageManager_D, "f").set(t, i); __classPrivateFieldGet(this, _ImageManager_D, "f").set(i.id, i); return i; }
        getSvgUrl(t) { const e = __classPrivateFieldGet(this, _ImageManager_D, "f").get(t); return (e === null || e === void 0 ? void 0 : e.isSvg) ? e.svgUrl : null; }
        deleteId(t) { var _a; __classPrivateFieldSet(this, _ImageManager_D, __classPrivateFieldGet(this, _ImageManager_D, "f") || new Map, "f"); const e = __classPrivateFieldGet(this, _ImageManager_D, "f").get(t); if (!e)
            return; e.refCounter -= 1; if (0 !== e.refCounter)
            return; const { bitmap: i } = e; if (!e.url && !e.file) {
            const t = new OffscreenCanvas(i.width, i.height);
            t.getContext("bitmaprenderer").transferFromImageBitmap(i);
            e.blobPromise = t.convertToBlob();
        } (_a = i.close) === null || _a === void 0 ? void 0 : _a.call(i); e.bitmap = null; }
        isValidId(t) { return t.startsWith(`image_${__classPrivateFieldGet(this, _ImageManager_C, "f")}_`); }
    }
    _g = ImageManager, _ImageManager_C = new WeakMap(), _ImageManager_S = new WeakMap(), _ImageManager_D = new WeakMap(), _ImageManager_instances = new WeakSet(), _ImageManager_P = function _ImageManager_P(t, e) {
        return __awaiter(this, void 0, void 0, function* () { var _a, _5; __classPrivateFieldSet(this, _ImageManager_D, __classPrivateFieldGet(this, _ImageManager_D, "f") || new Map, "f"); let i = __classPrivateFieldGet(this, _ImageManager_D, "f").get(t); if (null === i)
            return null; if (i === null || i === void 0 ? void 0 : i.bitmap) {
            i.refCounter += 1;
            return i;
        } try {
            i || (i = { bitmap: null, id: `image_${__classPrivateFieldGet(this, _ImageManager_C, "f")}_${__classPrivateFieldSet(this, _ImageManager_S, (_5 = __classPrivateFieldGet(this, _ImageManager_S, "f"), _a = _5++, _5), "f"), _a}`, refCounter: 0, isSvg: !1 });
            let t;
            if ("string" == typeof e) {
                i.url = e;
                t = yield fetchData(e, "blob");
            }
            else
                e instanceof File ? t = i.file = e : e instanceof Blob && (t = e);
            if ("image/svg+xml" === t.type) {
                const e = _g._isSVGFittingCanvas, n = new FileReader, r = new Image, s = new Promise((t, s) => { r.onload = () => { i.bitmap = r; i.isSvg = !0; t(); }; n.onload = () => __awaiter(this, void 0, void 0, function* () { const t = i.svgUrl = n.result; r.src = (yield e) ? `${t}#svgView(preserveAspectRatio(none))` : t; }); r.onerror = n.onerror = s; });
                n.readAsDataURL(t);
                yield s;
            }
            else
                i.bitmap = yield createImageBitmap(t);
            i.refCounter = 1;
        }
        catch (t) {
            warn(t);
            i = null;
        } __classPrivateFieldGet(this, _ImageManager_D, "f").set(t, i); i && __classPrivateFieldGet(this, _ImageManager_D, "f").set(i.id, i); return i; });
    };
    class CommandManager {
        constructor(t = 128) {
            _CommandManager_M.set(this, []);
            _CommandManager_k.set(this, !1);
            _CommandManager_I.set(this, void 0);
            _CommandManager_F.set(this, -1);
            __classPrivateFieldSet(this, _CommandManager_I, t, "f");
        }
        add({ cmd: t, undo: e, post: i, mustExec: n, type: r = NaN, overwriteIfSameType: s = !1, keepUndo: a = !1 }) { n && t(); if (__classPrivateFieldGet(this, _CommandManager_k, "f"))
            return; const o = { cmd: t, undo: e, post: i, type: r }; if (-1 === __classPrivateFieldGet(this, _CommandManager_F, "f")) {
            __classPrivateFieldGet(this, _CommandManager_M, "f").length > 0 && (__classPrivateFieldGet(this, _CommandManager_M, "f").length = 0);
            __classPrivateFieldSet(this, _CommandManager_F, 0, "f");
            __classPrivateFieldGet(this, _CommandManager_M, "f").push(o);
            return;
        } if (s && __classPrivateFieldGet(this, _CommandManager_M, "f")[__classPrivateFieldGet(this, _CommandManager_F, "f")].type === r) {
            a && (o.undo = __classPrivateFieldGet(this, _CommandManager_M, "f")[__classPrivateFieldGet(this, _CommandManager_F, "f")].undo);
            __classPrivateFieldGet(this, _CommandManager_M, "f")[__classPrivateFieldGet(this, _CommandManager_F, "f")] = o;
            return;
        } const l = __classPrivateFieldGet(this, _CommandManager_F, "f") + 1; if (l === __classPrivateFieldGet(this, _CommandManager_I, "f"))
            __classPrivateFieldGet(this, _CommandManager_M, "f").splice(0, 1);
        else {
            __classPrivateFieldSet(this, _CommandManager_F, l, "f");
            l < __classPrivateFieldGet(this, _CommandManager_M, "f").length && __classPrivateFieldGet(this, _CommandManager_M, "f").splice(l);
        } __classPrivateFieldGet(this, _CommandManager_M, "f").push(o); }
        undo() { if (-1 === __classPrivateFieldGet(this, _CommandManager_F, "f"))
            return; __classPrivateFieldSet(this, _CommandManager_k, !0, "f"); const { undo: t, post: e } = __classPrivateFieldGet(this, _CommandManager_M, "f")[__classPrivateFieldGet(this, _CommandManager_F, "f")]; t(); e === null || e === void 0 ? void 0 : e(); __classPrivateFieldSet(this, _CommandManager_k, !1, "f"); __classPrivateFieldSet(this, _CommandManager_F, __classPrivateFieldGet(this, _CommandManager_F, "f") - 1, "f"); }
        redo() { if (__classPrivateFieldGet(this, _CommandManager_F, "f") < __classPrivateFieldGet(this, _CommandManager_M, "f").length - 1) {
            __classPrivateFieldSet(this, _CommandManager_F, __classPrivateFieldGet(this, _CommandManager_F, "f") + 1, "f");
            __classPrivateFieldSet(this, _CommandManager_k, !0, "f");
            const { cmd: t, post: e } = __classPrivateFieldGet(this, _CommandManager_M, "f")[__classPrivateFieldGet(this, _CommandManager_F, "f")];
            t();
            e === null || e === void 0 ? void 0 : e();
            __classPrivateFieldSet(this, _CommandManager_k, !1, "f");
        } }
        hasSomethingToUndo() { return -1 !== __classPrivateFieldGet(this, _CommandManager_F, "f"); }
        hasSomethingToRedo() { return __classPrivateFieldGet(this, _CommandManager_F, "f") < __classPrivateFieldGet(this, _CommandManager_M, "f").length - 1; }
        cleanType(t) { if (-1 !== __classPrivateFieldGet(this, _CommandManager_F, "f")) {
            for (let e = __classPrivateFieldGet(this, _CommandManager_F, "f"); e >= 0; e--)
                if (__classPrivateFieldGet(this, _CommandManager_M, "f")[e].type !== t) {
                    __classPrivateFieldGet(this, _CommandManager_M, "f").splice(e + 1, __classPrivateFieldGet(this, _CommandManager_F, "f") - e);
                    __classPrivateFieldSet(this, _CommandManager_F, e, "f");
                    return;
                }
            __classPrivateFieldGet(this, _CommandManager_M, "f").length = 0;
            __classPrivateFieldSet(this, _CommandManager_F, -1, "f");
        } }
        destroy() { __classPrivateFieldSet(this, _CommandManager_M, null, "f"); }
    }
    _CommandManager_M = new WeakMap(), _CommandManager_k = new WeakMap(), _CommandManager_I = new WeakMap(), _CommandManager_F = new WeakMap();
    class KeyboardManager {
        constructor(t) {
            _KeyboardManager_instances.add(this);
            this.buffer = [];
            this.callbacks = new Map;
            this.allKeys = new Set;
            const { isMac: e } = FeatureTest.platform;
            for (const [i, n, r = {}] of t)
                for (const t of i) {
                    const i = t.startsWith("mac+");
                    if (e && i) {
                        this.callbacks.set(t.slice(4), { callback: n, options: r });
                        this.allKeys.add(t.split("+").at(-1));
                    }
                    else if (!e && !i) {
                        this.callbacks.set(t, { callback: n, options: r });
                        this.allKeys.add(t.split("+").at(-1));
                    }
                }
        }
        exec(t, e) { if (!this.allKeys.has(e.key))
            return; const i = this.callbacks.get(__classPrivateFieldGet(this, _KeyboardManager_instances, "m", _KeyboardManager_R).call(this, e)); if (!i)
            return; const { callback: n, options: { bubbles: r = !1, args: s = [], checker: a = null } } = i; if (!a || a(t, e)) {
            n.bind(t, ...s, e)();
            r || stopEvent(e);
        } }
    }
    _KeyboardManager_instances = new WeakSet(), _KeyboardManager_R = function _KeyboardManager_R(t) { t.altKey && this.buffer.push("alt"); t.ctrlKey && this.buffer.push("ctrl"); t.metaKey && this.buffer.push("meta"); t.shiftKey && this.buffer.push("shift"); this.buffer.push(t.key); const e = this.buffer.join("+"); this.buffer.length = 0; return e; };
    class ColorManager {
        get _colors() { const t = new Map([["CanvasText", null], ["Canvas", null]]); !function getColorValues(t) { const e = document.createElement("span"); e.style.visibility = "hidden"; e.style.colorScheme = "only light"; document.body.append(e); for (const i of t.keys()) {
            e.style.color = i;
            const n = window.getComputedStyle(e).color;
            t.set(i, getRGB(n));
        } e.remove(); }(t); return shadow(this, "_colors", t); }
        convert(t) { const e = getRGB(t); if (!window.matchMedia("(forced-colors: active)").matches)
            return e; for (const [t, i] of this._colors)
            if (i.every((t, i) => t === e[i]))
                return ColorManager._colorsMapping.get(t); return e; }
        getHexCode(t) { const e = this._colors.get(t); return e ? Util.makeHexColor(...e) : t; }
    }
    ColorManager._colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
    class AnnotationEditorUIManager {
        static get _keyboardManager() { const t = AnnotationEditorUIManager.prototype, arrowChecker = t => __classPrivateFieldGet(t, _AnnotationEditorUIManager_Ct, "f").contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t.hasSomethingToControl(), textInputChecker = (t, { target: e }) => { if (e instanceof HTMLInputElement) {
            const { type: t } = e;
            return "text" !== t && "number" !== t;
        } return !0; }, e = this.TRANSLATE_SMALL, i = this.TRANSLATE_BIG; return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], t.selectAll, { checker: textInputChecker }], [["ctrl+z", "mac+meta+z"], t.undo, { checker: textInputChecker }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, { checker: textInputChecker }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, { checker: textInputChecker }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, { checker: (t, { target: e }) => !(e instanceof HTMLButtonElement) && __classPrivateFieldGet(t, _AnnotationEditorUIManager_Ct, "f").contains(e) && !t.isEnterHandled }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, { checker: (t, { target: e }) => !(e instanceof HTMLButtonElement) && __classPrivateFieldGet(t, _AnnotationEditorUIManager_Ct, "f").contains(document.activeElement) }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, { args: [-e, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, { args: [-i, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, { args: [e, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, { args: [i, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, { args: [0, -e], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, { args: [0, -i], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, { args: [0, e], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, { args: [0, i], checker: arrowChecker }]])); }
        constructor(t, e, i, n, r, s, a, o, l, h, c, d, u, p, g, m) {
            _AnnotationEditorUIManager_instances.add(this);
            _AnnotationEditorUIManager_B.set(this, new AbortController);
            _AnnotationEditorUIManager_O.set(this, null);
            _AnnotationEditorUIManager_L.set(this, null);
            _AnnotationEditorUIManager_N.set(this, new Map);
            _AnnotationEditorUIManager_U.set(this, new Map);
            _AnnotationEditorUIManager_H.set(this, null);
            _AnnotationEditorUIManager_z.set(this, null);
            _AnnotationEditorUIManager_j.set(this, null);
            _AnnotationEditorUIManager_G.set(this, null);
            _AnnotationEditorUIManager_W.set(this, new CommandManager);
            _AnnotationEditorUIManager_V.set(this, null);
            _AnnotationEditorUIManager_$.set(this, null);
            _AnnotationEditorUIManager_q.set(this, null);
            _AnnotationEditorUIManager_X.set(this, 0);
            _AnnotationEditorUIManager_Y.set(this, new Set);
            _AnnotationEditorUIManager_K.set(this, null);
            _AnnotationEditorUIManager_J.set(this, null);
            _AnnotationEditorUIManager_Q.set(this, new Set);
            this._editorUndoBar = null;
            _AnnotationEditorUIManager_Z.set(this, !1);
            _AnnotationEditorUIManager_tt.set(this, !1);
            _AnnotationEditorUIManager_et.set(this, !1);
            _AnnotationEditorUIManager_it.set(this, null);
            _AnnotationEditorUIManager_nt.set(this, null);
            _AnnotationEditorUIManager_rt.set(this, null);
            _AnnotationEditorUIManager_st.set(this, null);
            _AnnotationEditorUIManager_at.set(this, !1);
            _AnnotationEditorUIManager_ot.set(this, null);
            _AnnotationEditorUIManager_lt.set(this, new IdManager);
            _AnnotationEditorUIManager_ht.set(this, !1);
            _AnnotationEditorUIManager_ct.set(this, !1);
            _AnnotationEditorUIManager_dt.set(this, !1);
            _AnnotationEditorUIManager_ut.set(this, null);
            _AnnotationEditorUIManager_pt.set(this, null);
            _AnnotationEditorUIManager_gt.set(this, null);
            _AnnotationEditorUIManager_mt.set(this, null);
            _AnnotationEditorUIManager_ft.set(this, null);
            _AnnotationEditorUIManager_bt.set(this, m.NONE);
            _AnnotationEditorUIManager_yt.set(this, new Set);
            _AnnotationEditorUIManager_vt.set(this, null);
            _AnnotationEditorUIManager_wt.set(this, null);
            _AnnotationEditorUIManager_At.set(this, null);
            _AnnotationEditorUIManager_xt.set(this, null);
            _AnnotationEditorUIManager_Et.set(this, null);
            _AnnotationEditorUIManager__t.set(this, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1, hasSelectedText: !1 });
            _AnnotationEditorUIManager_Tt.set(this, [0, 0]);
            _AnnotationEditorUIManager_St.set(this, null);
            _AnnotationEditorUIManager_Ct.set(this, null);
            _AnnotationEditorUIManager_Dt.set(this, null);
            _AnnotationEditorUIManager_Pt.set(this, null);
            _AnnotationEditorUIManager_Mt.set(this, null);
            const f = this._signal = __classPrivateFieldGet(this, _AnnotationEditorUIManager_B, "f").signal;
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_Ct, t, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_Dt, e, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_Pt, i, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_z, n, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_V, r, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_wt, s, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_Et, o, "f");
            this._eventBus = a;
            a._on("editingaction", this.onEditingAction.bind(this), { signal: f });
            a._on("pagechanging", this.onPageChanging.bind(this), { signal: f });
            a._on("scalechanging", this.onScaleChanging.bind(this), { signal: f });
            a._on("rotationchanging", this.onRotationChanging.bind(this), { signal: f });
            a._on("setpreference", this.onSetPreference.bind(this), { signal: f });
            a._on("switchannotationeditorparams", t => this.updateParams(t.type, t.value), { signal: f });
            window.addEventListener("pointerdown", () => { __classPrivateFieldSet(this, _AnnotationEditorUIManager_ct, !0, "f"); }, { capture: !0, signal: f });
            window.addEventListener("pointerup", () => { __classPrivateFieldSet(this, _AnnotationEditorUIManager_ct, !1, "f"); }, { capture: !0, signal: f });
            window.addEventListener("beforeunload", __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_kt).bind(this), { capture: !0, signal: f });
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_It).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ft).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Rt).call(this);
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_j, o.annotationStorage, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_it, o.filterFactory, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_At, l, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_st, h || null, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_Z, c, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_tt, d, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_et, u, "f");
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_ft, p || null, "f");
            this.viewParameters = { realScale: PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
            this.isShiftKeyDown = !1;
            this._editorUndoBar = g || null;
            this._supportsPinchToZoom = !1 !== m;
            r === null || r === void 0 ? void 0 : r.setSidebarUiManager(this);
        }
        destroy() { var _a, _5, _6, _7, _8, _9, _10, _11, _12; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f")) === null || _a === void 0 ? void 0 : _a.resolve(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_Mt, null, "f"); (_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_B, "f")) === null || _5 === void 0 ? void 0 : _5.abort(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_B, null, "f"); this._signal = null; for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values())
            t.destroy(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").clear(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").clear(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_Q, "f").clear(); (_6 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_mt, "f")) === null || _6 === void 0 ? void 0 : _6.clear(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_O, null, "f"); __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").clear(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").destroy(); (_7 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_z, "f")) === null || _7 === void 0 ? void 0 : _7.destroy(); (_8 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _8 === void 0 ? void 0 : _8.destroy(); (_9 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_wt, "f")) === null || _9 === void 0 ? void 0 : _9.destroy(); (_10 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f")) === null || _10 === void 0 ? void 0 : _10.hide(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_ot, null, "f"); (_11 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_gt, "f")) === null || _11 === void 0 ? void 0 : _11.destroy(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_gt, null, "f"); __classPrivateFieldSet(this, _AnnotationEditorUIManager_L, null, "f"); if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_nt, "f")) {
            clearTimeout(__classPrivateFieldGet(this, _AnnotationEditorUIManager_nt, "f"));
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_nt, null, "f");
        } if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_St, "f")) {
            clearTimeout(__classPrivateFieldGet(this, _AnnotationEditorUIManager_St, "f"));
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_St, null, "f");
        } (_12 = this._editorUndoBar) === null || _12 === void 0 ? void 0 : _12.destroy(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_Et, null, "f"); }
        combinedSignal(t) { return AbortSignal.any([this._signal, t.signal]); }
        get mlManager() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_ft, "f"); }
        get useNewAltTextFlow() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_tt, "f"); }
        get useNewAltTextWhenAddingImage() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_et, "f"); }
        get hcmFilter() { return shadow(this, "hcmFilter", __classPrivateFieldGet(this, _AnnotationEditorUIManager_At, "f") ? __classPrivateFieldGet(this, _AnnotationEditorUIManager_it, "f").addHCMFilter(__classPrivateFieldGet(this, _AnnotationEditorUIManager_At, "f").foreground, __classPrivateFieldGet(this, _AnnotationEditorUIManager_At, "f").background) : "none"); }
        get direction() { return shadow(this, "direction", getComputedStyle(__classPrivateFieldGet(this, _AnnotationEditorUIManager_Ct, "f")).direction); }
        get _highlightColors() { return shadow(this, "_highlightColors", __classPrivateFieldGet(this, _AnnotationEditorUIManager_st, "f") ? new Map(__classPrivateFieldGet(this, _AnnotationEditorUIManager_st, "f").split(",").map(t => { (t = t.split("=").map(t => t.trim()))[1] = t[1].toUpperCase(); return t; })) : null); }
        get highlightColors() { const { _highlightColors: t } = this; if (!t)
            return shadow(this, "highlightColors", null); const e = new Map, i = !!__classPrivateFieldGet(this, _AnnotationEditorUIManager_At, "f"); for (const [n, r] of t) {
            const t = n.endsWith("_HCM");
            i && t ? e.set(n.replace("_HCM", ""), r) : i || t || e.set(n, r);
        } return shadow(this, "highlightColors", e); }
        get highlightColorNames() { return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, t => t.reverse())) : null); }
        getNonHCMColor(t) { if (!this._highlightColors)
            return t; const e = this.highlightColorNames.get(t); return this._highlightColors.get(e) || t; }
        getNonHCMColorName(t) { return this.highlightColorNames.get(t) || t; }
        setCurrentDrawingSession(t) { if (t) {
            this.unselectAll();
            this.disableUserSelect(!0);
        }
        else
            this.disableUserSelect(!1); __classPrivateFieldSet(this, _AnnotationEditorUIManager_q, t, "f"); }
        setMainHighlightColorPicker(t) { __classPrivateFieldSet(this, _AnnotationEditorUIManager_gt, t, "f"); }
        editAltText(t, e = !1) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_z, "f")) === null || _a === void 0 ? void 0 : _a.editAltText(this, t, e); }
        hasCommentManager() { return !!__classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f"); }
        editComment(t, e, i, n) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.showDialog(this, t, e, i, n); }
        selectComment(t, e) { const i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").get(t), n = i === null || i === void 0 ? void 0 : i.getEditorByUID(e); n === null || n === void 0 ? void 0 : n.toggleComment(!0, !0); }
        updateComment(t) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.updateComment(t.getData()); }
        updatePopupColor(t) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.updatePopupColor(t); }
        removeComment(t) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.removeComments([t.uid]); }
        deleteComment(t, e) { const undo = () => { t.comment = e; }; this.addCommands({ cmd: () => { var _a; (_a = this._editorUndoBar) === null || _a === void 0 ? void 0 : _a.show(undo, "comment"); this.toggleComment(null); t.comment = null; }, undo, mustExec: !0 }); }
        toggleComment(t, e, i = void 0) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.toggleCommentPopup(t, e, i); }
        makeCommentColor(t, e) { var _a; return t && ((_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.makeCommentColor(t, e)) || null; }
        getCommentDialogElement() { var _a; return ((_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _a === void 0 ? void 0 : _a.dialogElement) || null; }
        waitForEditorsRendered(t) {
            return __awaiter(this, void 0, void 0, function* () { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").has(t - 1))
                return; const { resolve: e, promise: i } = Promise.withResolvers(), onEditorsRendered = i => { if (i.pageNumber === t) {
                this._eventBus._off("editorsrendered", onEditorsRendered);
                e();
            } }; this._eventBus.on("editorsrendered", onEditorsRendered); yield i; });
        }
        getSignature(t) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_wt, "f")) === null || _a === void 0 ? void 0 : _a.getSignature({ uiManager: this, editor: t }); }
        get signatureManager() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_wt, "f"); }
        switchToMode(t, e) { this._eventBus.on("annotationeditormodechanged", e, { once: !0, signal: this._signal }); this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t }); }
        setPreference(t, e) { this._eventBus.dispatch("setpreference", { source: this, name: t, value: e }); }
        onSetPreference({ name: t, value: e }) { if ("enableNewAltTextWhenAddingImage" === t)
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_et, e, "f"); }
        onPageChanging({ pageNumber: t }) { __classPrivateFieldSet(this, _AnnotationEditorUIManager_X, t - 1, "f"); }
        deletePage(t) { for (const e of this.getEditors(t))
            e.remove(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").delete(t); __classPrivateFieldGet(this, _AnnotationEditorUIManager_X, "f") === t && (__classPrivateFieldSet(this, _AnnotationEditorUIManager_X, 0, "f")); }
        focusMainContainer() { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Ct, "f").focus(); }
        findParent(t, e) { for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values()) {
            const { x: n, y: r, width: s, height: a } = i.div.getBoundingClientRect();
            if (t >= n && t <= n + s && e >= r && e <= r + a)
                return i;
        } return null; }
        disableUserSelect(t = !1) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Dt, "f").classList.toggle("noUserSelect", t); }
        addShouldRescale(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Q, "f").add(t); }
        removeShouldRescale(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Q, "f").delete(t); }
        onScaleChanging({ scale: t }) { var _a; this.commitOrRemove(); this.viewParameters.realScale = t * PixelsPerInch.PDF_TO_CSS_UNITS; for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_Q, "f"))
            t.onScaleChanging(); (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_q, "f")) === null || _a === void 0 ? void 0 : _a.onScaleChanging(); }
        onRotationChanging({ pagesRotation: t }) { this.commitOrRemove(); this.viewParameters.rotation = t; }
        highlightSelection(t = "", e = !1) { const i = document.getSelection(); if (!i || i.isCollapsed)
            return; const { anchorNode: n, anchorOffset: r, focusNode: s, focusOffset: a } = i, o = i.toString(), l = __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Bt).call(this, i).closest(".textLayer"), h = this.getSelectionBoxes(l); if (!h)
            return; i.empty(); const c = __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ot).call(this, l), d = __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.NONE, callback = () => { const i = c === null || c === void 0 ? void 0 : c.createAndAddNewEditor({ x: 0, y: 0 }, !1, { methodOfCreation: t, boxes: h, anchorNode: n, anchorOffset: r, focusNode: s, focusOffset: a, text: o }); d && this.showAllEditors("highlight", !0, !0); e && (i === null || i === void 0 ? void 0 : i.editComment()); }; d ? this.switchToMode(m.HIGHLIGHT, callback) : callback(); }
        commentSelection(t = "") { this.highlightSelection(t, !0); }
        getAndRemoveDataFromAnnotationStorage(t) { if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f"))
            return null; const e = `${g}${t}`, i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").getRawValue(e); i && __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").remove(e); return i; }
        addToAnnotationStorage(t) { t.isEmpty() || !__classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f") || __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").has(t.id) || __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").setValue(t.id, t); }
        a11yAlert(t, e = null) { const i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_Pt, "f"); if (i) {
            i.setAttribute("data-l10n-id", t);
            e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args");
        } }
        blur() { this.isShiftKeyDown = !1; if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_at, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_at, !1, "f");
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ht).call(this, "main_toolbar");
        } if (!this.hasSelection)
            return; const { activeElement: t } = document; for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
            if (e.div.contains(t)) {
                __classPrivateFieldSet(this, _AnnotationEditorUIManager_pt, [e, t], "f");
                e._focusEventsAllowed = !1;
                break;
            } }
        focus() { if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_pt, "f"))
            return; const [t, e] = __classPrivateFieldGet(this, _AnnotationEditorUIManager_pt, "f"); __classPrivateFieldSet(this, _AnnotationEditorUIManager_pt, null, "f"); e.addEventListener("focusin", () => { t._focusEventsAllowed = !0; }, { once: !0, signal: this._signal }); e.focus(); }
        addEditListeners() { __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Rt).call(this); this.setEditingState(!0); }
        removeEditListeners() { __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Gt).call(this); this.setEditingState(!1); }
        dragOver(t) { for (const { type: e } of t.dataTransfer.items)
            for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f"))
                if (i.isHandlingMimeForPasting(e)) {
                    t.dataTransfer.dropEffect = "copy";
                    t.preventDefault();
                    return;
                } }
        drop(t) { for (const e of t.dataTransfer.items)
            for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f"))
                if (i.isHandlingMimeForPasting(e.type)) {
                    i.paste(e, this.currentLayer);
                    t.preventDefault();
                    return;
                } }
        copy(t) { var _a; t.preventDefault(); (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f")) === null || _a === void 0 ? void 0 : _a.commitOrRemove(); if (!this.hasSelection)
            return; const e = []; for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f")) {
            const i = t.serialize(!0);
            i && e.push(i);
        } 0 !== e.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(e)); }
        cut(t) { this.copy(t); this.delete(); }
        paste(t) {
            return __awaiter(this, void 0, void 0, function* () { t.preventDefault(); const { clipboardData: e } = t; for (const t of e.items)
                for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f"))
                    if (e.isHandlingMimeForPasting(t.type)) {
                        e.paste(t, this.currentLayer);
                        return;
                    } let i = e.getData("application/pdfjs"); if (!i)
                return; try {
                i = JSON.parse(i);
            }
            catch (t) {
                warn(`paste: "${t.message}".`);
                return;
            } if (!Array.isArray(i))
                return; this.unselectAll(); const n = this.currentLayer; try {
                const t = [];
                for (const e of i) {
                    const i = yield n.deserialize(e);
                    if (!i)
                        return;
                    t.push(i);
                }
                const cmd = () => { for (const e of t)
                    __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_$t).call(this, e); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_qt).call(this, t); }, undo = () => { for (const e of t)
                    e.remove(); };
                this.addCommands({ cmd, undo, mustExec: !0 });
            }
            catch (t) {
                warn(`paste: "${t.message}".`);
            } });
        }
        keydown(t) { this.isShiftKeyDown || "Shift" !== t.key || (this.isShiftKeyDown = !0); __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.NONE || this.isEditorHandlingKeyboard || AnnotationEditorUIManager._keyboardManager.exec(this, t); }
        keyup(t) { if (this.isShiftKeyDown && "Shift" === t.key) {
            this.isShiftKeyDown = !1;
            if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_at, "f")) {
                __classPrivateFieldSet(this, _AnnotationEditorUIManager_at, !1, "f");
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ht).call(this, "main_toolbar");
            }
        } }
        onEditingAction({ name: t }) { switch (t) {
            case "undo":
            case "redo":
            case "delete":
            case "selectAll":
                this[t]();
                break;
            case "highlightSelection":
                this.highlightSelection("context_menu");
                break;
            case "commentSelection": this.commentSelection("context_menu");
        } }
        updatePageIndex(t, e) { for (const i of this.getEditors(t))
            i.pageIndex = e; const i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_H, "f").get(t); if (i) {
            i.pageIndex = e;
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").set(e, i);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_ht, "f") ? i.enable() : i.disable();
        } }
        startUpdatePages() { __classPrivateFieldSet(this, _AnnotationEditorUIManager_H, new Map(__classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f")), "f"); __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").clear(); }
        endUpdatePages() { __classPrivateFieldSet(this, _AnnotationEditorUIManager_H, null, "f"); }
        clonePage(t, e) { for (const i of this.getEditors(t)) {
            const t = i.serialize(i.mode !== m.HIGHLIGHT);
            if (t) {
                t.pageIndex = e;
                t.id = this.getId();
                t.isClone = !0;
                delete t.popupRef;
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").setValue(t.id, t);
            }
        } }
        findClonesForPage(t) { const e = [], { pageIndex: i } = t; for (const [n, r] of __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f"))
            if (r.pageIndex === i && r.isClone) {
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").remove(n);
                e.push(t.deserialize(r).then(e => { if (e) {
                    e.isClone = !0;
                    t.addOrRebuild(e);
                } }));
            } return Promise.all(e); }
        setEditingState(t) { if (t) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_zt).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Wt).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { isEditing: __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") !== m.NONE, isEmpty: __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Yt).call(this), hasSomethingToUndo: __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").hasSomethingToUndo(), hasSomethingToRedo: __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").hasSomethingToRedo(), hasSelectedEditor: !1 });
        }
        else {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_jt).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Vt).call(this);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { isEditing: !1 });
            this.disableUserSelect(!1);
        } }
        registerEditorTypes(t) { if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_J, t, "f");
            for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f"))
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.defaultPropertiesToUpdate);
        } }
        getId() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_lt, "f").id; }
        get currentLayer() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").get(__classPrivateFieldGet(this, _AnnotationEditorUIManager_X, "f")); }
        getLayer(t) { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").get(t); }
        get currentPageIndex() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_X, "f"); }
        addLayer(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").set(t.pageIndex, t); __classPrivateFieldGet(this, _AnnotationEditorUIManager_ht, "f") ? t.enable() : t.disable(); }
        removeLayer(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").delete(t.pageIndex); }
        updateMode(t_1) {
            return __awaiter(this, arguments, void 0, function* (t, e = null, i = !1, n = !1, r = !1, s = !1) { var _a, _5, _6, _7, _8, _9; if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") !== t) {
                if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f")) {
                    yield __classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f").promise;
                    if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f"))
                        return;
                }
                __classPrivateFieldSet(this, _AnnotationEditorUIManager_Mt, Promise.withResolvers(), "f");
                (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_q, "f")) === null || _a === void 0 ? void 0 : _a.commitOrRemove();
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.POPUP && ((_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _5 === void 0 ? void 0 : _5.hideSidebar());
                (_6 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _6 === void 0 ? void 0 : _6.destroyPopup();
                __classPrivateFieldSet(this, _AnnotationEditorUIManager_bt, t, "f");
                if (t !== m.NONE) {
                    for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
                        t.addStandaloneCommentButton();
                    t === m.SIGNATURE && (yield ((_7 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_wt, "f")) === null || _7 === void 0 ? void 0 : _7.loadSignatures()));
                    i && CurrentPointers.clearPointerType();
                    this.setEditingState(!0);
                    yield __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Kt).call(this);
                    this.unselectAll();
                    for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values())
                        e.updateMode(t);
                    if (t === m.POPUP) {
                        __classPrivateFieldSet(this, _AnnotationEditorUIManager_L, __classPrivateFieldGet(this, _AnnotationEditorUIManager_L, "f") || (yield __classPrivateFieldGet(this, _AnnotationEditorUIManager_Et, "f").getAnnotationsByType(new Set(__classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f").map(t => t._editorType)))), "f");
                        const t = new Set, e = [];
                        for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values()) {
                            const { annotationElementId: n, hasComment: r, deleted: s } = i;
                            n && t.add(n);
                            r && !s && e.push(i.getData());
                        }
                        for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_L, "f")) {
                            const { id: n, popupRef: r, contentsObj: s } = i;
                            r && (s === null || s === void 0 ? void 0 : s.str) && !t.has(n) && !__classPrivateFieldGet(this, _AnnotationEditorUIManager_Y, "f").has(n) && e.push(i);
                        }
                        (_8 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _8 === void 0 ? void 0 : _8.showSidebar(e);
                    }
                    if (e) {
                        for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
                            if (t.uid === e) {
                                this.setSelected(t);
                                s ? t.editComment() : r ? t.enterInEditMode() : t.focus();
                            }
                            else
                                t.unselect();
                        __classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f").resolve();
                    }
                    else {
                        n && this.addNewEditorFromKeyboard();
                        __classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f").resolve();
                    }
                }
                else {
                    this.setEditingState(!1);
                    __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Jt).call(this);
                    for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
                        t.hideStandaloneCommentButton();
                    (_9 = this._editorUndoBar) === null || _9 === void 0 ? void 0 : _9.hide();
                    this.toggleComment(null);
                    __classPrivateFieldGet(this, _AnnotationEditorUIManager_Mt, "f").resolve();
                }
            } });
        }
        addNewEditorFromKeyboard() { this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor(); }
        updateToolbar(t) { t.mode !== __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") && this._eventBus.dispatch("switchannotationeditormode", Object.assign({ source: this }, t)); }
        updateParams(t, e) { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f")) {
            switch (t) {
                case f.CREATE:
                    this.currentLayer.addNewEditor(e);
                    return;
                case f.HIGHLIGHT_SHOW_ALL:
                    this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } });
                    (__classPrivateFieldSet(this, _AnnotationEditorUIManager_xt, __classPrivateFieldGet(this, _AnnotationEditorUIManager_xt, "f") || new Map, "f")).set(t, e);
                    this.showAllEditors("highlight", e);
            }
            if (this.hasSelection)
                for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
                    i.updateParams(t, e);
            else
                for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_J, "f"))
                    i.updateDefaultParams(t, e);
        } }
        showAllEditors(t, e, i = !1) { var _a, _5; for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
            i.editorType === t && i.show(e); ((_5 = (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_xt, "f")) === null || _a === void 0 ? void 0 : _a.get(f.HIGHLIGHT_SHOW_ALL)) !== null && _5 !== void 0 ? _5 : !0) !== e && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, [[f.HIGHLIGHT_SHOW_ALL, e]]); }
        enableWaiting(t = !1) { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_dt, "f") !== t) {
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_dt, t, "f");
            for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values()) {
                t ? e.disableClick() : e.enableClick();
                e.div.classList.toggle("waiting", t);
            }
        } }
        *getEditors(t) { for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
            e.pageIndex === t && (yield e); }
        getEditor(t) { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").get(t); }
        addEditor(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").set(t.id, t); }
        removeEditor(t) { var _a, _5; if (t.div.contains(document.activeElement)) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_nt, "f") && clearTimeout(__classPrivateFieldGet(this, _AnnotationEditorUIManager_nt, "f"));
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_nt, setTimeout(() => { this.focusMainContainer(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_nt, null, "f"); }, 0), "f");
        } __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").delete(t.id); t.annotationElementId && ((_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_mt, "f")) === null || _a === void 0 ? void 0 : _a.delete(t.annotationElementId)); this.unselect(t); t.annotationElementId && __classPrivateFieldGet(this, _AnnotationEditorUIManager_Y, "f").has(t.annotationElementId) || ((_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f")) === null || _5 === void 0 ? void 0 : _5.remove(t.id)); }
        addDeletedAnnotationElement(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Y, "f").add(t.annotationElementId); this.addChangedExistingAnnotation(t); t.deleted = !0; }
        isDeletedAnnotationElement(t) { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_Y, "f").has(t); }
        removeDeletedAnnotationElement(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_Y, "f").delete(t.annotationElementId); this.removeChangedExistingAnnotation(t); t.deleted = !1; }
        setActiveEditor(t) { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f") !== t) {
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_O, t, "f");
            t && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.propertiesToUpdate);
        } }
        updateUI(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "a", _AnnotationEditorUIManager_Qt_get) === t && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.propertiesToUpdate); }
        updateUIForDefaultProperties(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.defaultPropertiesToUpdate); }
        toggleSelected(t) { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").has(t)) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").delete(t);
            t.unselect();
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: this.hasSelection });
        }
        else {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").add(t);
            t.select();
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.propertiesToUpdate);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: !0 });
        } }
        setSelected(t) { var _a, _5; this.updateToolbar({ mode: t.mode, editId: t.uid }); (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_q, "f")) === null || _a === void 0 ? void 0 : _a.commitOrRemove(); for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
            e !== t && e.unselect(); (_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _5 === void 0 ? void 0 : _5.destroyPopup(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").clear(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").add(t); t.select(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, t.propertiesToUpdate); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: !0 }); }
        isSelected(t) { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").has(t); }
        get firstSelectedEditor() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").values().next().value; }
        unselect(t) { t.unselect(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").delete(t); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: this.hasSelection }); }
        get hasSelection() { return 0 !== __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").size; }
        get isEnterHandled() { return 1 === __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").size && this.firstSelectedEditor.isEnterHandled; }
        undo() { var _a; __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").undo(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSomethingToUndo: __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Yt).call(this) }); (_a = this._editorUndoBar) === null || _a === void 0 ? void 0 : _a.hide(); }
        redo() { __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").redo(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").hasSomethingToRedo(), isEmpty: __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Yt).call(this) }); }
        addCommands(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").add(t); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Yt).call(this) }); }
        cleanUndoStack(t) { __classPrivateFieldGet(this, _AnnotationEditorUIManager_W, "f").cleanType(t); }
        delete() { var _a; this.commitOrRemove(); const t = (_a = this.currentLayer) === null || _a === void 0 ? void 0 : _a.endDrawingSession(!0); if (!this.hasSelection && !t)
            return; const e = t ? [t] : [...__classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f")], undo = () => { for (const t of e)
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_$t).call(this, t); }; this.addCommands({ cmd: () => { var _a; (_a = this._editorUndoBar) === null || _a === void 0 ? void 0 : _a.show(undo, 1 === e.length ? e[0].editorType : e.length); for (const t of e)
                t.remove(); }, undo, mustExec: !0 }); }
        commitOrRemove() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f")) === null || _a === void 0 ? void 0 : _a.commitOrRemove(); }
        hasSomethingToControl() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f") || this.hasSelection; }
        selectAll() { for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
            t.commit(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_qt).call(this, __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values()); }
        unselectAll() { var _a, _5; if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f")) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f").commitOrRemove();
            if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") !== m.NONE)
                return;
        } if (!((_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_q, "f")) === null || _a === void 0 ? void 0 : _a.commitOrRemove())) {
            (_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_V, "f")) === null || _5 === void 0 ? void 0 : _5.destroyPopup();
            if (this.hasSelection) {
                for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
                    t.unselect();
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").clear();
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: !1 });
            }
        } }
        translateSelectedEditors(t, e, i = !1) { i || this.commitOrRemove(); if (!this.hasSelection)
            return; __classPrivateFieldGet(this, _AnnotationEditorUIManager_Tt, "f")[0] += t; __classPrivateFieldGet(this, _AnnotationEditorUIManager_Tt, "f")[1] += e; const [n, r] = __classPrivateFieldGet(this, _AnnotationEditorUIManager_Tt, "f"), s = [...__classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f")]; __classPrivateFieldGet(this, _AnnotationEditorUIManager_St, "f") && clearTimeout(__classPrivateFieldGet(this, _AnnotationEditorUIManager_St, "f")); __classPrivateFieldSet(this, _AnnotationEditorUIManager_St, setTimeout(() => { __classPrivateFieldSet(this, _AnnotationEditorUIManager_St, null, "f"); __classPrivateFieldGet(this, _AnnotationEditorUIManager_Tt, "f")[0] = __classPrivateFieldGet(this, _AnnotationEditorUIManager_Tt, "f")[1] = 0; this.addCommands({ cmd: () => { for (const t of s)
                if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").has(t.id)) {
                    t.translateInPage(n, r);
                    t.translationDone();
                } }, undo: () => { for (const t of s)
                if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").has(t.id)) {
                    t.translateInPage(-n, -r);
                    t.translationDone();
                } }, mustExec: !1 }); }, 1e3), "f"); for (const i of s) {
            i.translateInPage(t, e);
            i.translationDone();
        } }
        setUpDragSession() { if (this.hasSelection) {
            this.disableUserSelect(!0);
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_K, new Map, "f");
            for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
                __classPrivateFieldGet(this, _AnnotationEditorUIManager_K, "f").set(t, { savedX: t.x, savedY: t.y, savedPageIndex: t.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
        } }
        endDragSession() { if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_K, "f"))
            return !1; this.disableUserSelect(!1); const t = __classPrivateFieldGet(this, _AnnotationEditorUIManager_K, "f"); __classPrivateFieldSet(this, _AnnotationEditorUIManager_K, null, "f"); let e = !1; for (const [{ x: i, y: n, pageIndex: r }, s] of t) {
            s.newX = i;
            s.newY = n;
            s.newPageIndex = r;
            e || (e = i !== s.savedX || n !== s.savedY || r !== s.savedPageIndex);
        } if (!e)
            return !1; const move = (t, e, i, n) => { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").has(t.id)) {
            const r = __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").get(n);
            if (r)
                t._setParentAndPosition(r, e, i);
            else {
                t.pageIndex = n;
                t.x = e;
                t.y = i;
            }
        } }; this.addCommands({ cmd: () => { for (const [e, { newX: i, newY: n, newPageIndex: r }] of t)
                move(e, i, n, r); }, undo: () => { for (const [e, { savedX: i, savedY: n, savedPageIndex: r }] of t)
                move(e, i, n, r); }, mustExec: !0 }); return !0; }
        dragSelectedEditors(t, e) { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_K, "f"))
            for (const i of __classPrivateFieldGet(this, _AnnotationEditorUIManager_K, "f").keys())
                i.drag(t, e); }
        rebuild(t) { if (null === t.parent) {
            const e = this.getLayer(t.pageIndex);
            if (e) {
                e.changeParent(t);
                e.addOrRebuild(t);
            }
            else {
                this.addEditor(t);
                this.addToAnnotationStorage(t);
                t.rebuild();
            }
        }
        else
            t.parent.addOrRebuild(t); }
        get isEditorHandlingKeyboard() { var _a; return ((_a = this.getActive()) === null || _a === void 0 ? void 0 : _a.shouldGetKeyboardEvents()) || 1 === __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").size && this.firstSelectedEditor.shouldGetKeyboardEvents(); }
        isActive(t) { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f") === t; }
        getActive() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_O, "f"); }
        getMode() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f"); }
        isEditingMode() { return __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") !== m.NONE; }
        get imageManager() { return shadow(this, "imageManager", new ImageManager); }
        getSelectionBoxes(t) { if (!t)
            return null; const e = document.getSelection(); for (let i = 0, n = e.rangeCount; i < n; i++)
            if (!t.contains(e.getRangeAt(i).commonAncestorContainer))
                return null; const { x: i, y: n, width: r, height: s } = t.getBoundingClientRect(); let a; switch (t.getAttribute("data-main-rotation")) {
            case "90":
                a = (t, e, a, o) => ({ x: (e - n) / s, y: 1 - (t + a - i) / r, width: o / s, height: a / r });
                break;
            case "180":
                a = (t, e, a, o) => ({ x: 1 - (t + a - i) / r, y: 1 - (e + o - n) / s, width: a / r, height: o / s });
                break;
            case "270":
                a = (t, e, a, o) => ({ x: 1 - (e + o - n) / s, y: (t - i) / r, width: o / s, height: a / r });
                break;
            default: a = (t, e, a, o) => ({ x: (t - i) / r, y: (e - n) / s, width: a / r, height: o / s });
        } const o = []; for (let t = 0, i = e.rangeCount; t < i; t++) {
            const i = e.getRangeAt(t);
            if (!i.collapsed)
                for (const { x: t, y: e, width: n, height: r } of i.getClientRects())
                    0 !== n && 0 !== r && o.push(a(t, e, n, r));
        } return 0 === o.length ? null : o; }
        addChangedExistingAnnotation({ annotationElementId: t, id: e }) { (__classPrivateFieldSet(this, _AnnotationEditorUIManager_G, __classPrivateFieldGet(this, _AnnotationEditorUIManager_G, "f") || new Map, "f")).set(t, e); }
        removeChangedExistingAnnotation({ annotationElementId: t }) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_G, "f")) === null || _a === void 0 ? void 0 : _a.delete(t); }
        renderAnnotationElement(t) { var _a; const e = (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_G, "f")) === null || _a === void 0 ? void 0 : _a.get(t.data.id); if (!e)
            return; const i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_j, "f").getRawValue(e); i && (__classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") !== m.NONE || i.hasBeenModified) && i.renderAnnotationElement(t); }
        setMissingCanvas(t, e, i) { var _a; const n = (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_mt, "f")) === null || _a === void 0 ? void 0 : _a.get(t); if (n) {
            n.setCanvas(e, i);
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_mt, "f").delete(t);
        } }
        addMissingCanvas(t, e) { (__classPrivateFieldSet(this, _AnnotationEditorUIManager_mt, __classPrivateFieldGet(this, _AnnotationEditorUIManager_mt, "f") || new Map, "f")).set(t, e); }
    }
    _AnnotationEditorUIManager_B = new WeakMap(), _AnnotationEditorUIManager_O = new WeakMap(), _AnnotationEditorUIManager_L = new WeakMap(), _AnnotationEditorUIManager_N = new WeakMap(), _AnnotationEditorUIManager_U = new WeakMap(), _AnnotationEditorUIManager_H = new WeakMap(), _AnnotationEditorUIManager_z = new WeakMap(), _AnnotationEditorUIManager_j = new WeakMap(), _AnnotationEditorUIManager_G = new WeakMap(), _AnnotationEditorUIManager_W = new WeakMap(), _AnnotationEditorUIManager_V = new WeakMap(), _AnnotationEditorUIManager_$ = new WeakMap(), _AnnotationEditorUIManager_q = new WeakMap(), _AnnotationEditorUIManager_X = new WeakMap(), _AnnotationEditorUIManager_Y = new WeakMap(), _AnnotationEditorUIManager_K = new WeakMap(), _AnnotationEditorUIManager_J = new WeakMap(), _AnnotationEditorUIManager_Q = new WeakMap(), _AnnotationEditorUIManager_Z = new WeakMap(), _AnnotationEditorUIManager_tt = new WeakMap(), _AnnotationEditorUIManager_et = new WeakMap(), _AnnotationEditorUIManager_it = new WeakMap(), _AnnotationEditorUIManager_nt = new WeakMap(), _AnnotationEditorUIManager_rt = new WeakMap(), _AnnotationEditorUIManager_st = new WeakMap(), _AnnotationEditorUIManager_at = new WeakMap(), _AnnotationEditorUIManager_ot = new WeakMap(), _AnnotationEditorUIManager_lt = new WeakMap(), _AnnotationEditorUIManager_ht = new WeakMap(), _AnnotationEditorUIManager_ct = new WeakMap(), _AnnotationEditorUIManager_dt = new WeakMap(), _AnnotationEditorUIManager_ut = new WeakMap(), _AnnotationEditorUIManager_pt = new WeakMap(), _AnnotationEditorUIManager_gt = new WeakMap(), _AnnotationEditorUIManager_mt = new WeakMap(), _AnnotationEditorUIManager_ft = new WeakMap(), _AnnotationEditorUIManager_bt = new WeakMap(), _AnnotationEditorUIManager_yt = new WeakMap(), _AnnotationEditorUIManager_vt = new WeakMap(), _AnnotationEditorUIManager_wt = new WeakMap(), _AnnotationEditorUIManager_At = new WeakMap(), _AnnotationEditorUIManager_xt = new WeakMap(), _AnnotationEditorUIManager_Et = new WeakMap(), _AnnotationEditorUIManager__t = new WeakMap(), _AnnotationEditorUIManager_Tt = new WeakMap(), _AnnotationEditorUIManager_St = new WeakMap(), _AnnotationEditorUIManager_Ct = new WeakMap(), _AnnotationEditorUIManager_Dt = new WeakMap(), _AnnotationEditorUIManager_Pt = new WeakMap(), _AnnotationEditorUIManager_Mt = new WeakMap(), _AnnotationEditorUIManager_instances = new WeakSet(), _AnnotationEditorUIManager_Bt = function _AnnotationEditorUIManager_Bt({ anchorNode: t }) { return t.nodeType === Node.TEXT_NODE ? t.parentElement : t; }, _AnnotationEditorUIManager_Ot = function _AnnotationEditorUIManager_Ot(t) { const { currentLayer: e } = this; if (e.hasTextLayer(t))
        return e; for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values())
        if (e.hasTextLayer(t))
            return e; return null; }, _AnnotationEditorUIManager_kt = function _AnnotationEditorUIManager_kt(t) { var _a; this.commitOrRemove(); (_a = this.currentLayer) === null || _a === void 0 ? void 0 : _a.endDrawingSession(!1); }, _AnnotationEditorUIManager_Lt = function _AnnotationEditorUIManager_Lt() { const t = document.getSelection(); if (!t || t.isCollapsed)
        return; const e = __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Bt).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(e); if (i) {
        __classPrivateFieldSet(this, _AnnotationEditorUIManager_ot, __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f") || new FloatingToolbar(this), "f");
        __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f").show(e, i, "ltr" === this.direction);
    } }, _AnnotationEditorUIManager_Nt = function _AnnotationEditorUIManager_Nt() { var _a, _5, _6; const t = document.getSelection(); if (!t || t.isCollapsed) {
        if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_vt, "f")) {
            (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f")) === null || _a === void 0 ? void 0 : _a.hide();
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_vt, null, "f");
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedText: !1 });
        }
        return;
    } const { anchorNode: e } = t; if (e === __classPrivateFieldGet(this, _AnnotationEditorUIManager_vt, "f"))
        return; const i = __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Bt).call(this, t).closest(".textLayer"); if (i) {
        (_5 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f")) === null || _5 === void 0 ? void 0 : _5.hide();
        __classPrivateFieldSet(this, _AnnotationEditorUIManager_vt, e, "f");
        __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedText: !0 });
        if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.HIGHLIGHT || __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.NONE) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.HIGHLIGHT && this.showAllEditors("highlight", !0, !0);
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_at, this.isShiftKeyDown, "f");
            if (!this.isShiftKeyDown) {
                const t = __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.HIGHLIGHT ? __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ot).call(this, i) : null;
                t === null || t === void 0 ? void 0 : t.toggleDrawing();
                if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_ct, "f")) {
                    const e = new AbortController, i = this.combinedSignal(e), pointerup = i => { if ("pointerup" !== i.type || 0 === i.button) {
                        e.abort();
                        t === null || t === void 0 ? void 0 : t.toggleDrawing(!0);
                        "pointerup" === i.type && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ht).call(this, "main_toolbar");
                    } };
                    window.addEventListener("pointerup", pointerup, { signal: i });
                    window.addEventListener("blur", pointerup, { signal: i });
                }
                else {
                    t === null || t === void 0 ? void 0 : t.toggleDrawing(!0);
                    __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ht).call(this, "main_toolbar");
                }
            }
        }
    }
    else if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_vt, "f")) {
        (_6 = __classPrivateFieldGet(this, _AnnotationEditorUIManager_ot, "f")) === null || _6 === void 0 ? void 0 : _6.hide();
        __classPrivateFieldSet(this, _AnnotationEditorUIManager_vt, null, "f");
        __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedText: !1 });
    } }, _AnnotationEditorUIManager_Ht = function _AnnotationEditorUIManager_Ht(t = "") { __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.HIGHLIGHT ? this.highlightSelection(t) : __classPrivateFieldGet(this, _AnnotationEditorUIManager_Z, "f") && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Lt).call(this); }, _AnnotationEditorUIManager_It = function _AnnotationEditorUIManager_It() { document.addEventListener("selectionchange", __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Nt).bind(this), { signal: this._signal }); }, _AnnotationEditorUIManager_zt = function _AnnotationEditorUIManager_zt() { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_rt, "f"))
        return; __classPrivateFieldSet(this, _AnnotationEditorUIManager_rt, new AbortController, "f"); const t = this.combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorUIManager_rt, "f")); window.addEventListener("focus", this.focus.bind(this), { signal: t }); window.addEventListener("blur", this.blur.bind(this), { signal: t }); }, _AnnotationEditorUIManager_jt = function _AnnotationEditorUIManager_jt() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_rt, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_rt, null, "f"); }, _AnnotationEditorUIManager_Rt = function _AnnotationEditorUIManager_Rt() { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_ut, "f"))
        return; __classPrivateFieldSet(this, _AnnotationEditorUIManager_ut, new AbortController, "f"); const t = this.combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorUIManager_ut, "f")); window.addEventListener("keydown", this.keydown.bind(this), { signal: t }); window.addEventListener("keyup", this.keyup.bind(this), { signal: t }); }, _AnnotationEditorUIManager_Gt = function _AnnotationEditorUIManager_Gt() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_ut, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_ut, null, "f"); }, _AnnotationEditorUIManager_Wt = function _AnnotationEditorUIManager_Wt() { if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_$, "f"))
        return; __classPrivateFieldSet(this, _AnnotationEditorUIManager_$, new AbortController, "f"); const t = this.combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorUIManager_$, "f")); document.addEventListener("copy", this.copy.bind(this), { signal: t }); document.addEventListener("cut", this.cut.bind(this), { signal: t }); document.addEventListener("paste", this.paste.bind(this), { signal: t }); }, _AnnotationEditorUIManager_Vt = function _AnnotationEditorUIManager_Vt() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorUIManager_$, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditorUIManager_$, null, "f"); }, _AnnotationEditorUIManager_Ft = function _AnnotationEditorUIManager_Ft() { const t = this._signal; document.addEventListener("dragover", this.dragOver.bind(this), { signal: t }); document.addEventListener("drop", this.drop.bind(this), { signal: t }); }, _AnnotationEditorUIManager_Ut = function _AnnotationEditorUIManager_Ut(t) { if (Object.entries(t).some(([t, e]) => __classPrivateFieldGet(this, _AnnotationEditorUIManager__t, "f")[t] !== e)) {
        this._eventBus.dispatch("editingstateschanged", { source: this, details: Object.assign(__classPrivateFieldGet(this, _AnnotationEditorUIManager__t, "f"), t) });
        __classPrivateFieldGet(this, _AnnotationEditorUIManager_bt, "f") === m.HIGHLIGHT && !1 === t.hasSelectedEditor && __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Xt).call(this, [[f.HIGHLIGHT_FREE, !0]]);
    } }, _AnnotationEditorUIManager_Xt = function _AnnotationEditorUIManager_Xt(t) { this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t }); }, _AnnotationEditorUIManager_Kt = function _AnnotationEditorUIManager_Kt() {
        return __awaiter(this, void 0, void 0, function* () { if (!__classPrivateFieldGet(this, _AnnotationEditorUIManager_ht, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorUIManager_ht, !0, "f");
            const t = [];
            for (const e of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values())
                t.push(e.enable());
            yield Promise.all(t);
            for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
                t.enable();
        } });
    }, _AnnotationEditorUIManager_Jt = function _AnnotationEditorUIManager_Jt() { this.unselectAll(); if (__classPrivateFieldGet(this, _AnnotationEditorUIManager_ht, "f")) {
        __classPrivateFieldSet(this, _AnnotationEditorUIManager_ht, !1, "f");
        for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").values())
            t.disable();
        for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
            t.disable();
    } }, _AnnotationEditorUIManager_$t = function _AnnotationEditorUIManager_$t(t) { const e = __classPrivateFieldGet(this, _AnnotationEditorUIManager_U, "f").get(t.pageIndex); if (e)
        e.addOrRebuild(t);
    else {
        this.addEditor(t);
        this.addToAnnotationStorage(t);
    } }, _AnnotationEditorUIManager_Qt_get = function _AnnotationEditorUIManager_Qt_get() { let t = null; for (t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
        ; return t; }, _AnnotationEditorUIManager_Yt = function _AnnotationEditorUIManager_Yt() { if (0 === __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").size)
        return !0; if (1 === __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").size)
        for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_N, "f").values())
            return t.isEmpty(); return !1; }, _AnnotationEditorUIManager_qt = function _AnnotationEditorUIManager_qt(t) { for (const t of __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f"))
        t.unselect(); __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").clear(); for (const e of t)
        if (!e.isEmpty()) {
            __classPrivateFieldGet(this, _AnnotationEditorUIManager_yt, "f").add(e);
            e.select();
        } __classPrivateFieldGet(this, _AnnotationEditorUIManager_instances, "m", _AnnotationEditorUIManager_Ut).call(this, { hasSelectedEditor: this.hasSelection }); };
    AnnotationEditorUIManager.TRANSLATE_SMALL = 1;
    AnnotationEditorUIManager.TRANSLATE_BIG = 10;
    class AltText {
        constructor(t) {
            var _a;
            _AltText_instances.add(this);
            _AltText_l.set(this, null);
            _AltText_Zt.set(this, !1);
            _AltText_te.set(this, null);
            _AltText_ee.set(this, null);
            _AltText_ie.set(this, null);
            _AltText_ne.set(this, null);
            _AltText_re.set(this, !1);
            _AltText_se.set(this, null);
            _AltText_a.set(this, null);
            _AltText_ae.set(this, null);
            _AltText_oe.set(this, null);
            _AltText_le.set(this, !1);
            __classPrivateFieldSet(this, _AltText_a, t, "f");
            __classPrivateFieldSet(this, _AltText_le, t._uiManager.useNewAltTextFlow, "f");
            __classPrivateFieldSet(_a = _h, _h, __classPrivateFieldGet(_a, _h, "f", _AltText_he) || Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" }), "f", _AltText_he);
        }
        static initialize(t) { var _a; (_a = _h._l10n) !== null && _a !== void 0 ? _a : (_h._l10n = t); }
        render() {
            return __awaiter(this, void 0, void 0, function* () { const t = __classPrivateFieldSet(this, _AltText_te, document.createElement("button"), "f"); t.className = "altText"; t.tabIndex = "0"; const e = __classPrivateFieldSet(this, _AltText_ee, document.createElement("span"), "f"); t.append(e); if (__classPrivateFieldGet(this, _AltText_le, "f")) {
                t.classList.add("new");
                t.setAttribute("data-l10n-id", __classPrivateFieldGet(_h, _h, "f", _AltText_he).missing);
                e.setAttribute("data-l10n-id", __classPrivateFieldGet(_h, _h, "f", _AltText_he)["missing-label"]);
            }
            else {
                t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
                e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
            } const i = __classPrivateFieldGet(this, _AltText_a, "f")._uiManager._signal; t.addEventListener("contextmenu", noContextMenu, { signal: i }); t.addEventListener("pointerdown", t => t.stopPropagation(), { signal: i }); const onClick = t => { t.preventDefault(); __classPrivateFieldGet(this, _AltText_a, "f")._uiManager.editAltText(__classPrivateFieldGet(this, _AltText_a, "f")); __classPrivateFieldGet(this, _AltText_le, "f") && __classPrivateFieldGet(this, _AltText_a, "f")._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: __classPrivateFieldGet(this, _AltText_instances, "a", _AltText_ce_get) } }); }; t.addEventListener("click", onClick, { capture: !0, signal: i }); t.addEventListener("keydown", e => { if (e.target === t && "Enter" === e.key) {
                __classPrivateFieldSet(this, _AltText_re, !0, "f");
                onClick(e);
            } }, { signal: i }); yield __classPrivateFieldGet(this, _AltText_instances, "m", _AltText_de).call(this); return t; });
        }
        finish() { if (__classPrivateFieldGet(this, _AltText_te, "f")) {
            __classPrivateFieldGet(this, _AltText_te, "f").focus({ focusVisible: __classPrivateFieldGet(this, _AltText_re, "f") });
            __classPrivateFieldSet(this, _AltText_re, !1, "f");
        } }
        isEmpty() { return __classPrivateFieldGet(this, _AltText_le, "f") ? null === __classPrivateFieldGet(this, _AltText_l, "f") : !__classPrivateFieldGet(this, _AltText_l, "f") && !__classPrivateFieldGet(this, _AltText_Zt, "f"); }
        hasData() { return __classPrivateFieldGet(this, _AltText_le, "f") ? null !== __classPrivateFieldGet(this, _AltText_l, "f") || !!__classPrivateFieldGet(this, _AltText_ae, "f") : this.isEmpty(); }
        get guessedText() { return __classPrivateFieldGet(this, _AltText_ae, "f"); }
        setGuessedText(t) {
            return __awaiter(this, void 0, void 0, function* () { if (null === __classPrivateFieldGet(this, _AltText_l, "f")) {
                __classPrivateFieldSet(this, _AltText_ae, t, "f");
                __classPrivateFieldSet(this, _AltText_oe, yield _h._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t }), "f");
                __classPrivateFieldGet(this, _AltText_instances, "m", _AltText_de).call(this);
            } });
        }
        toggleAltTextBadge(t = !1) { var _a; if (__classPrivateFieldGet(this, _AltText_le, "f") && !__classPrivateFieldGet(this, _AltText_l, "f")) {
            if (!__classPrivateFieldGet(this, _AltText_se, "f")) {
                const t = __classPrivateFieldSet(this, _AltText_se, document.createElement("div"), "f");
                t.className = "noAltTextBadge";
                __classPrivateFieldGet(this, _AltText_a, "f").div.append(t);
            }
            __classPrivateFieldGet(this, _AltText_se, "f").classList.toggle("hidden", !t);
        }
        else {
            (_a = __classPrivateFieldGet(this, _AltText_se, "f")) === null || _a === void 0 ? void 0 : _a.remove();
            __classPrivateFieldSet(this, _AltText_se, null, "f");
        } }
        serialize(t) { let e = __classPrivateFieldGet(this, _AltText_l, "f"); t || __classPrivateFieldGet(this, _AltText_ae, "f") !== e || (e = __classPrivateFieldGet(this, _AltText_oe, "f")); return { altText: e, decorative: __classPrivateFieldGet(this, _AltText_Zt, "f"), guessedText: __classPrivateFieldGet(this, _AltText_ae, "f"), textWithDisclaimer: __classPrivateFieldGet(this, _AltText_oe, "f") }; }
        get data() { return { altText: __classPrivateFieldGet(this, _AltText_l, "f"), decorative: __classPrivateFieldGet(this, _AltText_Zt, "f") }; }
        set data({ altText: t, decorative: e, guessedText: i, textWithDisclaimer: n, cancel: r = !1 }) { if (i) {
            __classPrivateFieldSet(this, _AltText_ae, i, "f");
            __classPrivateFieldSet(this, _AltText_oe, n, "f");
        } if (__classPrivateFieldGet(this, _AltText_l, "f") !== t || __classPrivateFieldGet(this, _AltText_Zt, "f") !== e) {
            if (!r) {
                __classPrivateFieldSet(this, _AltText_l, t, "f");
                __classPrivateFieldSet(this, _AltText_Zt, e, "f");
            }
            __classPrivateFieldGet(this, _AltText_instances, "m", _AltText_de).call(this);
        } }
        toggle(t = !1) { if (__classPrivateFieldGet(this, _AltText_te, "f")) {
            if (!t && __classPrivateFieldGet(this, _AltText_ne, "f")) {
                clearTimeout(__classPrivateFieldGet(this, _AltText_ne, "f"));
                __classPrivateFieldSet(this, _AltText_ne, null, "f");
            }
            __classPrivateFieldGet(this, _AltText_te, "f").disabled = !t;
        } }
        shown() { __classPrivateFieldGet(this, _AltText_a, "f")._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: __classPrivateFieldGet(this, _AltText_instances, "a", _AltText_ce_get) } }); }
        destroy() { var _a, _5; (_a = __classPrivateFieldGet(this, _AltText_te, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _AltText_te, null, "f"); __classPrivateFieldSet(this, _AltText_ee, null, "f"); __classPrivateFieldSet(this, _AltText_ie, null, "f"); (_5 = __classPrivateFieldGet(this, _AltText_se, "f")) === null || _5 === void 0 ? void 0 : _5.remove(); __classPrivateFieldSet(this, _AltText_se, null, "f"); }
    }
    _h = AltText, _AltText_l = new WeakMap(), _AltText_Zt = new WeakMap(), _AltText_te = new WeakMap(), _AltText_ee = new WeakMap(), _AltText_ie = new WeakMap(), _AltText_ne = new WeakMap(), _AltText_re = new WeakMap(), _AltText_se = new WeakMap(), _AltText_a = new WeakMap(), _AltText_ae = new WeakMap(), _AltText_oe = new WeakMap(), _AltText_le = new WeakMap(), _AltText_instances = new WeakSet(), _AltText_ce_get = function _AltText_ce_get() { return (__classPrivateFieldGet(this, _AltText_l, "f") ? "added" : null === __classPrivateFieldGet(this, _AltText_l, "f") && this.guessedText && "review") || "missing"; }, _AltText_de = function _AltText_de() {
        return __awaiter(this, void 0, void 0, function* () { var _a, _5, _6; const t = __classPrivateFieldGet(this, _AltText_te, "f"); if (!t)
            return; if (__classPrivateFieldGet(this, _AltText_le, "f")) {
            t.classList.toggle("done", !!__classPrivateFieldGet(this, _AltText_l, "f"));
            t.setAttribute("data-l10n-id", __classPrivateFieldGet(_h, _h, "f", _AltText_he)[__classPrivateFieldGet(this, _AltText_instances, "a", _AltText_ce_get)]);
            (_a = __classPrivateFieldGet(this, _AltText_ee, "f")) === null || _a === void 0 ? void 0 : _a.setAttribute("data-l10n-id", __classPrivateFieldGet(_h, _h, "f", _AltText_he)[`${__classPrivateFieldGet(this, _AltText_instances, "a", _AltText_ce_get)}-label`]);
            if (!__classPrivateFieldGet(this, _AltText_l, "f")) {
                (_5 = __classPrivateFieldGet(this, _AltText_ie, "f")) === null || _5 === void 0 ? void 0 : _5.remove();
                return;
            }
        }
        else {
            if (!__classPrivateFieldGet(this, _AltText_l, "f") && !__classPrivateFieldGet(this, _AltText_Zt, "f")) {
                t.classList.remove("done");
                (_6 = __classPrivateFieldGet(this, _AltText_ie, "f")) === null || _6 === void 0 ? void 0 : _6.remove();
                return;
            }
            t.classList.add("done");
            t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
        } let e = __classPrivateFieldGet(this, _AltText_ie, "f"); if (!e) {
            __classPrivateFieldSet(this, _AltText_ie, e = document.createElement("span"), "f");
            e.className = "tooltip";
            e.setAttribute("role", "tooltip");
            e.id = `alt-text-tooltip-${__classPrivateFieldGet(this, _AltText_a, "f").id}`;
            const i = 100, n = __classPrivateFieldGet(this, _AltText_a, "f")._uiManager._signal;
            n.addEventListener("abort", () => { clearTimeout(__classPrivateFieldGet(this, _AltText_ne, "f")); __classPrivateFieldSet(this, _AltText_ne, null, "f"); }, { once: !0 });
            t.addEventListener("mouseenter", () => { __classPrivateFieldSet(this, _AltText_ne, setTimeout(() => { __classPrivateFieldSet(this, _AltText_ne, null, "f"); __classPrivateFieldGet(this, _AltText_ie, "f").classList.add("show"); __classPrivateFieldGet(this, _AltText_a, "f")._reportTelemetry({ action: "alt_text_tooltip" }); }, i), "f"); }, { signal: n });
            t.addEventListener("mouseleave", () => { var _a; if (__classPrivateFieldGet(this, _AltText_ne, "f")) {
                clearTimeout(__classPrivateFieldGet(this, _AltText_ne, "f"));
                __classPrivateFieldSet(this, _AltText_ne, null, "f");
            } (_a = __classPrivateFieldGet(this, _AltText_ie, "f")) === null || _a === void 0 ? void 0 : _a.classList.remove("show"); }, { signal: n });
        } if (__classPrivateFieldGet(this, _AltText_Zt, "f"))
            e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
        else {
            e.removeAttribute("data-l10n-id");
            e.textContent = __classPrivateFieldGet(this, _AltText_l, "f");
        } e.parentNode || t.append(e); const i = __classPrivateFieldGet(this, _AltText_a, "f").getElementForAltText(); i === null || i === void 0 ? void 0 : i.setAttribute("aria-describedby", e.id); });
    };
    _AltText_he = { value: null };
    AltText._l10n = null;
    class Comment {
        constructor(t) {
            _Comment_instances.add(this);
            _Comment_ue.set(this, null);
            _Comment_pe.set(this, null);
            _Comment_ge.set(this, !1);
            _Comment_a.set(this, null);
            _Comment_me.set(this, null);
            _Comment_fe.set(this, null);
            _Comment_be.set(this, null);
            _Comment_ye.set(this, null);
            _Comment_ve.set(this, !1);
            _Comment_we.set(this, null);
            __classPrivateFieldSet(this, _Comment_a, t, "f");
        }
        renderForToolbar() { const t = __classPrivateFieldSet(this, _Comment_pe, document.createElement("button"), "f"); t.className = "comment"; return __classPrivateFieldGet(this, _Comment_instances, "m", _Comment_v).call(this, t, !1); }
        renderForStandalone() { const t = __classPrivateFieldSet(this, _Comment_ue, document.createElement("button"), "f"); t.className = "annotationCommentButton"; const e = __classPrivateFieldGet(this, _Comment_a, "f").commentButtonPosition; if (e) {
            const { style: i } = t;
            i.insetInlineEnd = `calc(${100 * ("ltr" === __classPrivateFieldGet(this, _Comment_a, "f")._uiManager.direction ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`;
            i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
            const n = __classPrivateFieldGet(this, _Comment_a, "f").commentButtonColor;
            n && (i.backgroundColor = n);
        } return __classPrivateFieldGet(this, _Comment_instances, "m", _Comment_v).call(this, t, !0); }
        focusButton() { setTimeout(() => { var _a, _5; (_5 = ((_a = __classPrivateFieldGet(this, _Comment_ue, "f")) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _Comment_pe, "f"))) === null || _5 === void 0 ? void 0 : _5.focus(); }, 0); }
        onUpdatedColor() { if (!__classPrivateFieldGet(this, _Comment_ue, "f"))
            return; const t = __classPrivateFieldGet(this, _Comment_a, "f").commentButtonColor; t && (__classPrivateFieldGet(this, _Comment_ue, "f").style.backgroundColor = t); __classPrivateFieldGet(this, _Comment_a, "f")._uiManager.updatePopupColor(__classPrivateFieldGet(this, _Comment_a, "f")); }
        get commentButtonWidth() { var _a, _5; return ((_5 = (_a = __classPrivateFieldGet(this, _Comment_ue, "f")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) !== null && _5 !== void 0 ? _5 : 0) / __classPrivateFieldGet(this, _Comment_a, "f").parent.boundingClientRect.width; }
        get commentPopupPositionInLayer() { if (__classPrivateFieldGet(this, _Comment_we, "f"))
            return __classPrivateFieldGet(this, _Comment_we, "f"); if (!__classPrivateFieldGet(this, _Comment_ue, "f"))
            return null; const { x: t, y: e, height: i } = __classPrivateFieldGet(this, _Comment_ue, "f").getBoundingClientRect(), { x: n, y: r, width: s, height: a } = __classPrivateFieldGet(this, _Comment_a, "f").parent.boundingClientRect; return [(t - n) / s, (e + i - r) / a]; }
        set commentPopupPositionInLayer(t) { __classPrivateFieldSet(this, _Comment_we, t, "f"); }
        hasDefaultPopupPosition() { return null === __classPrivateFieldGet(this, _Comment_we, "f"); }
        removeStandaloneCommentButton() { var _a; (_a = __classPrivateFieldGet(this, _Comment_ue, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _Comment_ue, null, "f"); }
        removeToolbarCommentButton() { var _a; (_a = __classPrivateFieldGet(this, _Comment_pe, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _Comment_pe, null, "f"); }
        setCommentButtonStates({ selected: t, hasPopup: e }) { if (__classPrivateFieldGet(this, _Comment_ue, "f")) {
            __classPrivateFieldGet(this, _Comment_ue, "f").classList.toggle("selected", t);
            __classPrivateFieldGet(this, _Comment_ue, "f").ariaExpanded = e;
        } }
        edit(t) { const e = this.commentPopupPositionInLayer; let i, n; if (e)
            [i, n] = e;
        else {
            [i, n] = __classPrivateFieldGet(this, _Comment_a, "f").commentButtonPosition;
            const { width: t, height: e, x: r, y: s } = __classPrivateFieldGet(this, _Comment_a, "f");
            i = r + i * t;
            n = s + n * e;
        } const r = __classPrivateFieldGet(this, _Comment_a, "f").parent.boundingClientRect, { x: s, y: a, width: o, height: l } = r; __classPrivateFieldGet(this, _Comment_a, "f")._uiManager.editComment(__classPrivateFieldGet(this, _Comment_a, "f"), s + i * o, a + n * l, Object.assign(Object.assign({}, t), { parentDimensions: r })); }
        finish() { if (__classPrivateFieldGet(this, _Comment_pe, "f")) {
            __classPrivateFieldGet(this, _Comment_pe, "f").focus({ focusVisible: __classPrivateFieldGet(this, _Comment_ge, "f") });
            __classPrivateFieldSet(this, _Comment_ge, !1, "f");
        } }
        isDeleted() { return __classPrivateFieldGet(this, _Comment_ve, "f") || "" === __classPrivateFieldGet(this, _Comment_be, "f"); }
        isEmpty() { return null === __classPrivateFieldGet(this, _Comment_be, "f"); }
        hasBeenEdited() { return this.isDeleted() || __classPrivateFieldGet(this, _Comment_be, "f") !== __classPrivateFieldGet(this, _Comment_me, "f"); }
        serialize() { return this.data; }
        get data() { return { text: __classPrivateFieldGet(this, _Comment_be, "f"), richText: __classPrivateFieldGet(this, _Comment_fe, "f"), date: __classPrivateFieldGet(this, _Comment_ye, "f"), deleted: this.isDeleted() }; }
        set data(t) { t !== __classPrivateFieldGet(this, _Comment_be, "f") && (__classPrivateFieldSet(this, _Comment_fe, null, "f")); if (null !== t) {
            __classPrivateFieldSet(this, _Comment_be, t, "f");
            __classPrivateFieldSet(this, _Comment_ye, new Date, "f");
            __classPrivateFieldSet(this, _Comment_ve, !1, "f");
        }
        else {
            __classPrivateFieldSet(this, _Comment_be, "", "f");
            __classPrivateFieldSet(this, _Comment_ve, !0, "f");
        } }
        restoreData({ text: t, richText: e, date: i }) { __classPrivateFieldSet(this, _Comment_be, t, "f"); __classPrivateFieldSet(this, _Comment_fe, e, "f"); __classPrivateFieldSet(this, _Comment_ye, i, "f"); __classPrivateFieldSet(this, _Comment_ve, !1, "f"); }
        setInitialText(t, e = null) { __classPrivateFieldSet(this, _Comment_me, t, "f"); this.data = t; __classPrivateFieldSet(this, _Comment_ye, null, "f"); __classPrivateFieldSet(this, _Comment_fe, e, "f"); }
        shown() { }
        destroy() { var _a, _5; (_a = __classPrivateFieldGet(this, _Comment_pe, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _Comment_pe, null, "f"); (_5 = __classPrivateFieldGet(this, _Comment_ue, "f")) === null || _5 === void 0 ? void 0 : _5.remove(); __classPrivateFieldSet(this, _Comment_ue, null, "f"); __classPrivateFieldSet(this, _Comment_be, "", "f"); __classPrivateFieldSet(this, _Comment_fe, null, "f"); __classPrivateFieldSet(this, _Comment_ye, null, "f"); __classPrivateFieldSet(this, _Comment_a, null, "f"); __classPrivateFieldSet(this, _Comment_ge, !1, "f"); __classPrivateFieldSet(this, _Comment_ve, !1, "f"); }
    }
    _Comment_ue = new WeakMap(), _Comment_pe = new WeakMap(), _Comment_ge = new WeakMap(), _Comment_a = new WeakMap(), _Comment_me = new WeakMap(), _Comment_fe = new WeakMap(), _Comment_be = new WeakMap(), _Comment_ye = new WeakMap(), _Comment_ve = new WeakMap(), _Comment_we = new WeakMap(), _Comment_instances = new WeakSet(), _Comment_v = function _Comment_v(t, e) { if (!__classPrivateFieldGet(this, _Comment_a, "f")._uiManager.hasCommentManager())
        return null; t.tabIndex = "0"; t.ariaHasPopup = "dialog"; if (e) {
        t.ariaControls = "commentPopup";
        t.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    }
    else {
        t.ariaControlsElements = [__classPrivateFieldGet(this, _Comment_a, "f")._uiManager.getCommentDialogElement()];
        t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button");
    } const i = __classPrivateFieldGet(this, _Comment_a, "f")._uiManager._signal; if (!(i instanceof AbortSignal) || i.aborted)
        return t; t.addEventListener("contextmenu", noContextMenu, { signal: i }); if (e) {
        t.addEventListener("focusin", t => { __classPrivateFieldGet(this, _Comment_a, "f")._focusEventsAllowed = !1; stopEvent(t); }, { capture: !0, signal: i });
        t.addEventListener("focusout", t => { __classPrivateFieldGet(this, _Comment_a, "f")._focusEventsAllowed = !0; stopEvent(t); }, { capture: !0, signal: i });
    } t.addEventListener("pointerdown", t => t.stopPropagation(), { signal: i }); const onClick = e => { e.preventDefault(); t === __classPrivateFieldGet(this, _Comment_pe, "f") ? this.edit() : __classPrivateFieldGet(this, _Comment_a, "f").toggleComment(!0); }; t.addEventListener("click", onClick, { capture: !0, signal: i }); t.addEventListener("keydown", e => { if (e.target === t && "Enter" === e.key) {
        __classPrivateFieldSet(this, _Comment_ge, !0, "f");
        onClick(e);
    } }, { signal: i }); t.addEventListener("pointerenter", () => { __classPrivateFieldGet(this, _Comment_a, "f").toggleComment(!1, !0); }, { signal: i }); t.addEventListener("pointerleave", () => { __classPrivateFieldGet(this, _Comment_a, "f").toggleComment(!1, !1); }, { signal: i }); return t; };
    class TouchManager {
        constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: i = null, onPinchStart: n = null, onPinching: r = null, onPinchEnd: s = null, signal: a }) {
            _TouchManager_instances.add(this);
            _TouchManager_Ct.set(this, void 0);
            _TouchManager_Ae.set(this, !1);
            _TouchManager_xe.set(this, null);
            _TouchManager_Ee.set(this, void 0);
            _TouchManager__e.set(this, void 0);
            _TouchManager_Te.set(this, void 0);
            _TouchManager_Se.set(this, void 0);
            _TouchManager_Ce.set(this, null);
            _TouchManager_De.set(this, void 0);
            _TouchManager_Pe.set(this, null);
            _TouchManager_Me.set(this, void 0);
            _TouchManager_ke.set(this, null);
            __classPrivateFieldSet(this, _TouchManager_Ct, t, "f");
            __classPrivateFieldSet(this, _TouchManager_xe, i, "f");
            __classPrivateFieldSet(this, _TouchManager_Ee, e, "f");
            __classPrivateFieldSet(this, _TouchManager__e, n, "f");
            __classPrivateFieldSet(this, _TouchManager_Te, r, "f");
            __classPrivateFieldSet(this, _TouchManager_Se, s, "f");
            __classPrivateFieldSet(this, _TouchManager_Me, new AbortController, "f");
            __classPrivateFieldSet(this, _TouchManager_De, AbortSignal.any([a, __classPrivateFieldGet(this, _TouchManager_Me, "f").signal]), "f");
            t.addEventListener("touchstart", __classPrivateFieldGet(this, _TouchManager_instances, "m", _TouchManager_Ie).bind(this), { passive: !1, signal: __classPrivateFieldGet(this, _TouchManager_De, "f") });
        }
        get MIN_TOUCH_DISTANCE_TO_PINCH() { return 35 / OutputScale.pixelRatio; }
        destroy() { var _a, _5; (_a = __classPrivateFieldGet(this, _TouchManager_Me, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _TouchManager_Me, null, "f"); (_5 = __classPrivateFieldGet(this, _TouchManager_Ce, "f")) === null || _5 === void 0 ? void 0 : _5.abort(); __classPrivateFieldSet(this, _TouchManager_Ce, null, "f"); }
    }
    _j = TouchManager, _TouchManager_Ct = new WeakMap(), _TouchManager_Ae = new WeakMap(), _TouchManager_xe = new WeakMap(), _TouchManager_Ee = new WeakMap(), _TouchManager__e = new WeakMap(), _TouchManager_Te = new WeakMap(), _TouchManager_Se = new WeakMap(), _TouchManager_Ce = new WeakMap(), _TouchManager_De = new WeakMap(), _TouchManager_Pe = new WeakMap(), _TouchManager_Me = new WeakMap(), _TouchManager_ke = new WeakMap(), _TouchManager_instances = new WeakSet(), _TouchManager_Ie = function _TouchManager_Ie(t) { var _a, _5, _6; if ((_a = __classPrivateFieldGet(this, _TouchManager_Ee, "f")) === null || _a === void 0 ? void 0 : _a.call(this))
        return; if (1 === t.touches.length) {
        if (__classPrivateFieldGet(this, _TouchManager_Ce, "f"))
            return;
        const t = __classPrivateFieldSet(this, _TouchManager_Ce, new AbortController, "f"), e = AbortSignal.any([__classPrivateFieldGet(this, _TouchManager_De, "f"), t.signal]), i = __classPrivateFieldGet(this, _TouchManager_Ct, "f"), n = { capture: !0, signal: e, passive: !1 }, cancelPointerDown = t => { var _a; if ("touch" === t.pointerType) {
            (_a = __classPrivateFieldGet(this, _TouchManager_Ce, "f")) === null || _a === void 0 ? void 0 : _a.abort();
            __classPrivateFieldSet(this, _TouchManager_Ce, null, "f");
        } };
        i.addEventListener("pointerdown", t => { if ("touch" === t.pointerType) {
            stopEvent(t);
            cancelPointerDown(t);
        } }, n);
        i.addEventListener("pointerup", cancelPointerDown, n);
        i.addEventListener("pointercancel", cancelPointerDown, n);
        return;
    } if (!__classPrivateFieldGet(this, _TouchManager_ke, "f")) {
        __classPrivateFieldSet(this, _TouchManager_ke, new AbortController, "f");
        const t = AbortSignal.any([__classPrivateFieldGet(this, _TouchManager_De, "f"), __classPrivateFieldGet(this, _TouchManager_ke, "f").signal]), e = __classPrivateFieldGet(this, _TouchManager_Ct, "f"), i = { signal: t, capture: !1, passive: !1 };
        e.addEventListener("touchmove", __classPrivateFieldGet(this, _TouchManager_instances, "m", _TouchManager_Fe).bind(this), i);
        const n = __classPrivateFieldGet(this, _TouchManager_instances, "m", _TouchManager_Re).bind(this);
        e.addEventListener("touchend", n, i);
        e.addEventListener("touchcancel", n, i);
        i.capture = !0;
        e.addEventListener("pointerdown", stopEvent, i);
        e.addEventListener("pointermove", stopEvent, i);
        e.addEventListener("pointercancel", stopEvent, i);
        e.addEventListener("pointerup", stopEvent, i);
        (_5 = __classPrivateFieldGet(this, _TouchManager__e, "f")) === null || _5 === void 0 ? void 0 : _5.call(this);
    } stopEvent(t); if (2 !== t.touches.length || ((_6 = __classPrivateFieldGet(this, _TouchManager_xe, "f")) === null || _6 === void 0 ? void 0 : _6.call(this))) {
        __classPrivateFieldSet(this, _TouchManager_Pe, null, "f");
        return;
    } let [e, i] = t.touches; e.identifier > i.identifier && ([e, i] = [i, e]); __classPrivateFieldSet(this, _TouchManager_Pe, { touch0X: e.screenX, touch0Y: e.screenY, touch1X: i.screenX, touch1Y: i.screenY }, "f"); }, _TouchManager_Fe = function _TouchManager_Fe(t) { var _a; if (!__classPrivateFieldGet(this, _TouchManager_Pe, "f") || 2 !== t.touches.length)
        return; stopEvent(t); let [e, i] = t.touches; e.identifier > i.identifier && ([e, i] = [i, e]); const { screenX: n, screenY: r } = e, { screenX: s, screenY: a } = i, o = __classPrivateFieldGet(this, _TouchManager_Pe, "f"), { touch0X: l, touch0Y: h, touch1X: c, touch1Y: d } = o, u = c - l, p = d - h, g = s - n, m = a - r, f = Math.hypot(g, m) || 1, b = Math.hypot(u, p) || 1; if (!__classPrivateFieldGet(this, _TouchManager_Ae, "f") && Math.abs(b - f) <= _j.MIN_TOUCH_DISTANCE_TO_PINCH)
        return; o.touch0X = n; o.touch0Y = r; o.touch1X = s; o.touch1Y = a; if (!__classPrivateFieldGet(this, _TouchManager_Ae, "f")) {
        __classPrivateFieldSet(this, _TouchManager_Ae, !0, "f");
        return;
    } const y = [(n + s) / 2, (r + a) / 2]; (_a = __classPrivateFieldGet(this, _TouchManager_Te, "f")) === null || _a === void 0 ? void 0 : _a.call(this, y, b, f); }, _TouchManager_Re = function _TouchManager_Re(t) { var _a; if (!(t.touches.length >= 2)) {
        if (__classPrivateFieldGet(this, _TouchManager_ke, "f")) {
            __classPrivateFieldGet(this, _TouchManager_ke, "f").abort();
            __classPrivateFieldSet(this, _TouchManager_ke, null, "f");
            (_a = __classPrivateFieldGet(this, _TouchManager_Se, "f")) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        if (__classPrivateFieldGet(this, _TouchManager_Pe, "f")) {
            stopEvent(t);
            __classPrivateFieldSet(this, _TouchManager_Pe, null, "f");
            __classPrivateFieldSet(this, _TouchManager_Ae, !1, "f");
        }
    } };
    class AnnotationEditor {
        static get _resizerKeyboardManager() { const t = _k.prototype._resizeWithKeyboard, e = AnnotationEditorUIManager.TRANSLATE_SMALL, i = AnnotationEditorUIManager.TRANSLATE_BIG; return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t, { args: [-e, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, { args: [-i, 0] }], [["ArrowRight", "mac+ArrowRight"], t, { args: [e, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, { args: [i, 0] }], [["ArrowUp", "mac+ArrowUp"], t, { args: [0, -e] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, { args: [0, -i] }], [["ArrowDown", "mac+ArrowDown"], t, { args: [0, e] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, { args: [0, i] }], [["Escape", "mac+Escape"], _k.prototype._stopResizingWithKeyboard]])); }
        constructor(t) {
            _AnnotationEditor_instances.add(this);
            _AnnotationEditor_Be.set(this, null);
            _AnnotationEditor_Oe.set(this, null);
            _AnnotationEditor_l.set(this, null);
            _AnnotationEditor_h.set(this, null);
            _AnnotationEditor_ue.set(this, null);
            _AnnotationEditor_Le.set(this, !1);
            _AnnotationEditor_Ne.set(this, null);
            _AnnotationEditor_Ue.set(this, "");
            _AnnotationEditor_He.set(this, null);
            _AnnotationEditor_ze.set(this, null);
            _AnnotationEditor_je.set(this, null);
            _AnnotationEditor_Ge.set(this, null);
            _AnnotationEditor_We.set(this, null);
            _AnnotationEditor_Ve.set(this, "");
            _AnnotationEditor_$e.set(this, !1);
            _AnnotationEditor_qe.set(this, null);
            _AnnotationEditor_Xe.set(this, !1);
            _AnnotationEditor_Ye.set(this, !1);
            _AnnotationEditor_Ke.set(this, !1);
            _AnnotationEditor_Je.set(this, null);
            _AnnotationEditor_Qe.set(this, 0);
            _AnnotationEditor_Ze.set(this, 0);
            _AnnotationEditor_ti.set(this, null);
            _AnnotationEditor_ei.set(this, null);
            this.isSelected = !1;
            this._isCopy = !1;
            this._editToolbar = null;
            this._initialOptions = Object.create(null);
            this._initialData = null;
            this._isVisible = !0;
            this._uiManager = null;
            this._focusEventsAllowed = !0;
            _AnnotationEditor_ii.set(this, !1);
            _AnnotationEditor_ni.set(this, _k._zIndex++);
            this.parent = t.parent;
            this.id = t.id;
            this.width = this.height = null;
            this.pageIndex = t.parent.pageIndex;
            this.name = t.name;
            this.div = null;
            this._uiManager = t.uiManager;
            this.annotationElementId = null;
            this._willKeepAspectRatio = !1;
            this._initialOptions.isCentered = t.isCentered;
            this._structTreeParentId = null;
            this.annotationElementId = t.annotationElementId || null;
            this.creationDate = t.creationDate || new Date;
            this.modificationDate = t.modificationDate || null;
            this.canAddComment = !0;
            const { rotation: e, rawDims: { pageWidth: i, pageHeight: n, pageX: r, pageY: s } } = this.parent.viewport;
            this.rotation = e;
            this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360;
            this.pageDimensions = [i, n];
            this.pageTranslation = [r, s];
            const [a, o] = this.parentDimensions;
            this.x = t.x / a;
            this.y = t.y / o;
            this.isAttachedToDOM = !1;
            this.deleted = !1;
        }
        updatePageIndex(t) { this.pageIndex = t; }
        get editorType() { return Object.getPrototypeOf(this).constructor._type; }
        get mode() { return Object.getPrototypeOf(this).constructor._editorType; }
        static get isDrawer() { return !1; }
        static get _defaultLineColor() { return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText")); }
        static deleteAnnotationElement(t) { const e = new FakeEditor({ id: t._uiManager.getId(), parent: t.parent, uiManager: t._uiManager }); e.annotationElementId = t.annotationElementId; e.deleted = !0; e._uiManager.addToAnnotationStorage(e); }
        static initialize(t, e) { var _a; (_a = _k._l10n) !== null && _a !== void 0 ? _a : (_k._l10n = t); _k._l10nResizer || (_k._l10nResizer = Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" })); if (-1 !== _k._borderLineWidth)
            return; const i = getComputedStyle(document.documentElement); _k._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0; }
        static updateDefaultParams(t, e) { }
        static get defaultPropertiesToUpdate() { return []; }
        static isHandlingMimeForPasting(t) { return !1; }
        static paste(t, e) { unreachable("Not implemented"); }
        get propertiesToUpdate() { return []; }
        get _isDraggable() { return __classPrivateFieldGet(this, _AnnotationEditor_ii, "f"); }
        set _isDraggable(t) { var _a; __classPrivateFieldSet(this, _AnnotationEditor_ii, t, "f"); (_a = this.div) === null || _a === void 0 ? void 0 : _a.classList.toggle("draggable", t); }
        get uid() { return this.annotationElementId || this.id; }
        get isEnterHandled() { return !0; }
        center() { const [t, e] = this.pageDimensions; switch (this.parentRotation) {
            case 90:
                this.x -= this.height * e / (2 * t);
                this.y += this.width * t / (2 * e);
                break;
            case 180:
                this.x += this.width / 2;
                this.y += this.height / 2;
                break;
            case 270:
                this.x += this.height * e / (2 * t);
                this.y -= this.width * t / (2 * e);
                break;
            default:
                this.x -= this.width / 2;
                this.y -= this.height / 2;
        } this.fixAndSetPosition(); }
        addCommands(t) { this._uiManager.addCommands(t); }
        get currentLayer() { return this._uiManager.currentLayer; }
        setInBackground() { this.div.style.zIndex = 0; }
        setInForeground() { this.div.style.zIndex = __classPrivateFieldGet(this, _AnnotationEditor_ni, "f"); }
        setParent(t) { var _a; if (null !== t) {
            this.pageIndex = t.pageIndex;
            this.pageDimensions = t.pageDimensions;
        }
        else {
            __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ri).call(this);
            (_a = __classPrivateFieldGet(this, _AnnotationEditor_Ge, "f")) === null || _a === void 0 ? void 0 : _a.remove();
            __classPrivateFieldSet(this, _AnnotationEditor_Ge, null, "f");
        } this.parent = t; }
        focusin(t) { this._focusEventsAllowed && (__classPrivateFieldGet(this, _AnnotationEditor_$e, "f") ? __classPrivateFieldSet(this, _AnnotationEditor_$e, !1, "f") : this.parent.setSelected(this)); }
        focusout(t) { var _a; if (!this._focusEventsAllowed)
            return; if (!this.isAttachedToDOM)
            return; const e = t.relatedTarget; if (!(e === null || e === void 0 ? void 0 : e.closest(`#${this.id}`))) {
            t.preventDefault();
            ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isMultipleSelection) || this.commitOrRemove();
        } }
        commitOrRemove() { this.isEmpty() ? this.remove() : this.commit(); }
        commit() { this.isInEditMode() && this.addToAnnotationStorage(); }
        addToAnnotationStorage() { this._uiManager.addToAnnotationStorage(this); }
        setAt(t, e, i, n) { const [r, s] = this.parentDimensions; [i, n] = this.screenToPageTranslation(i, n); this.x = (t + i) / r; this.y = (e + n) / s; this.fixAndSetPosition(); }
        _moveAfterPaste(t, e) { if (this.isClone) {
            delete this.isClone;
            return;
        } const [i, n] = this.parentDimensions; this.setAt(t * i, e * n, this.width * i, this.height * n); this._onTranslated(); }
        translate(t, e) { __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_si).call(this, this.parentDimensions, t, e); }
        translateInPage(t, e) { __classPrivateFieldSet(this, _AnnotationEditor_qe, __classPrivateFieldGet(this, _AnnotationEditor_qe, "f") || [this.x, this.y, this.width, this.height], "f"); __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_si).call(this, this.pageDimensions, t, e); this.div.scrollIntoView({ block: "nearest" }); }
        translationDone() { this._onTranslated(this.x, this.y); }
        drag(t, e) { __classPrivateFieldSet(this, _AnnotationEditor_qe, __classPrivateFieldGet(this, _AnnotationEditor_qe, "f") || [this.x, this.y, this.width, this.height], "f"); const { div: i, parentDimensions: [n, r] } = this; this.x += t / n; this.y += e / r; if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            const { x: t, y: e } = this.div.getBoundingClientRect();
            if (this.parent.findNewParent(this, t, e)) {
                this.x -= Math.floor(this.x);
                this.y -= Math.floor(this.y);
            }
        } let { x: s, y: a } = this; const [o, l] = this.getBaseTranslation(); s += o; a += l; const { style: h } = i; h.left = `${(100 * s).toFixed(2)}%`; h.top = `${(100 * a).toFixed(2)}%`; this._onTranslating(s, a); i.scrollIntoView({ block: "nearest" }); }
        _onTranslating(t, e) { }
        _onTranslated(t, e) { }
        get _hasBeenMoved() { return !!__classPrivateFieldGet(this, _AnnotationEditor_qe, "f") && (__classPrivateFieldGet(this, _AnnotationEditor_qe, "f")[0] !== this.x || __classPrivateFieldGet(this, _AnnotationEditor_qe, "f")[1] !== this.y); }
        get _hasBeenResized() { return !!__classPrivateFieldGet(this, _AnnotationEditor_qe, "f") && (__classPrivateFieldGet(this, _AnnotationEditor_qe, "f")[2] !== this.width || __classPrivateFieldGet(this, _AnnotationEditor_qe, "f")[3] !== this.height); }
        getBaseTranslation() { const [t, e] = this.parentDimensions, { _borderLineWidth: i } = _k, n = i / t, r = i / e; switch (this.rotation) {
            case 90: return [-n, r];
            case 180: return [n, r];
            case 270: return [n, -r];
            default: return [-n, -r];
        } }
        get _mustFixPosition() { return !0; }
        fixAndSetPosition(t = this.rotation) { const { div: { style: e }, pageDimensions: [i, n] } = this; let { x: r, y: s, width: a, height: o } = this; a *= i; o *= n; r *= i; s *= n; if (this._mustFixPosition)
            switch (t) {
                case 0:
                    r = MathClamp(r, 0, i - a);
                    s = MathClamp(s, 0, n - o);
                    break;
                case 90:
                    r = MathClamp(r, 0, i - o);
                    s = MathClamp(s, a, n);
                    break;
                case 180:
                    r = MathClamp(r, a, i);
                    s = MathClamp(s, o, n);
                    break;
                case 270:
                    r = MathClamp(r, o, i);
                    s = MathClamp(s, 0, n - a);
            } this.x = r /= i; this.y = s /= n; const [l, h] = this.getBaseTranslation(); r += l; s += h; e.left = `${(100 * r).toFixed(2)}%`; e.top = `${(100 * s).toFixed(2)}%`; this.moveInDOM(); }
        screenToPageTranslation(t, e) { return __classPrivateFieldGet(_k, _k, "m", _AnnotationEditor_ai).call(_k, t, e, this.parentRotation); }
        pageTranslationToScreen(t, e) { return __classPrivateFieldGet(_k, _k, "m", _AnnotationEditor_ai).call(_k, t, e, 360 - this.parentRotation); }
        get parentScale() { return this._uiManager.viewParameters.realScale; }
        get parentRotation() { return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360; }
        get parentDimensions() { const { parentScale: t, pageDimensions: [e, i] } = this; return [e * t, i * t]; }
        setDims() { const { div: { style: t }, width: e, height: i } = this; t.width = `${(100 * e).toFixed(2)}%`; t.height = `${(100 * i).toFixed(2)}%`; }
        getInitialTranslation() { return [0, 0]; }
        _onResized() { }
        static _round(t) { return Math.round(1e4 * t) / 1e4; }
        _onResizing() { }
        altTextFinish() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.finish(); }
        get toolbarButtons() { return null; }
        addEditToolbar() {
            return __awaiter(this, void 0, void 0, function* () { if (this._editToolbar || __classPrivateFieldGet(this, _AnnotationEditor_Ye, "f"))
                return this._editToolbar; this._editToolbar = new EditorToolbar(this); this.div.append(this._editToolbar.render()); const { toolbarButtons: t } = this; if (t)
                for (const [e, i] of t)
                    yield this._editToolbar.addButton(e, i); this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()); this._editToolbar.addButton("delete"); return this._editToolbar; });
        }
        addCommentButtonInToolbar() { var _a; (_a = this._editToolbar) === null || _a === void 0 ? void 0 : _a.addButtonBefore("comment", this.addCommentButton(), ".deleteButton"); }
        removeCommentButtonFromToolbar() { var _a; (_a = this._editToolbar) === null || _a === void 0 ? void 0 : _a.removeButton("comment"); }
        removeEditToolbar() { var _a, _5; (_a = this._editToolbar) === null || _a === void 0 ? void 0 : _a.remove(); this._editToolbar = null; (_5 = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _5 === void 0 ? void 0 : _5.destroy(); }
        addContainer(t) { var _a; const e = (_a = this._editToolbar) === null || _a === void 0 ? void 0 : _a.div; e ? e.before(t) : this.div.append(t); }
        getClientDimensions() { return this.div.getBoundingClientRect(); }
        createAltText() { if (!__classPrivateFieldGet(this, _AnnotationEditor_l, "f")) {
            AltText.initialize(_k._l10n);
            __classPrivateFieldSet(this, _AnnotationEditor_l, new AltText(this), "f");
            if (__classPrivateFieldGet(this, _AnnotationEditor_Be, "f")) {
                __classPrivateFieldGet(this, _AnnotationEditor_l, "f").data = __classPrivateFieldGet(this, _AnnotationEditor_Be, "f");
                __classPrivateFieldSet(this, _AnnotationEditor_Be, null, "f");
            }
        } return __classPrivateFieldGet(this, _AnnotationEditor_l, "f"); }
        get altTextData() { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.data; }
        set altTextData(t) { __classPrivateFieldGet(this, _AnnotationEditor_l, "f") && (__classPrivateFieldGet(this, _AnnotationEditor_l, "f").data = t); }
        get guessedAltText() { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.guessedText; }
        setGuessedAltText(t) {
            return __awaiter(this, void 0, void 0, function* () { var _a; yield ((_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.setGuessedText(t)); });
        }
        serializeAltText(t) { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.serialize(t); }
        hasAltText() { return !!__classPrivateFieldGet(this, _AnnotationEditor_l, "f") && !__classPrivateFieldGet(this, _AnnotationEditor_l, "f").isEmpty(); }
        hasAltTextData() { var _a, _5; return (_5 = (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.hasData()) !== null && _5 !== void 0 ? _5 : !1; }
        focusCommentButton() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_h, "f")) === null || _a === void 0 ? void 0 : _a.focusButton(); }
        addCommentButton() { return this.canAddComment ? __classPrivateFieldSet(this, _AnnotationEditor_h, __classPrivateFieldGet(this, _AnnotationEditor_h, "f") || new Comment(this), "f") : null; }
        addStandaloneCommentButton() { if (this._uiManager.hasCommentManager())
            if (__classPrivateFieldGet(this, _AnnotationEditor_ue, "f"))
                this._uiManager.isEditingMode() && __classPrivateFieldGet(this, _AnnotationEditor_ue, "f").classList.remove("hidden");
            else if (this.hasComment) {
                __classPrivateFieldSet(this, _AnnotationEditor_ue, __classPrivateFieldGet(this, _AnnotationEditor_h, "f").renderForStandalone(), "f");
                this.div.append(__classPrivateFieldGet(this, _AnnotationEditor_ue, "f"));
            } }
        removeStandaloneCommentButton() { __classPrivateFieldGet(this, _AnnotationEditor_h, "f").removeStandaloneCommentButton(); __classPrivateFieldSet(this, _AnnotationEditor_ue, null, "f"); }
        hideStandaloneCommentButton() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_ue, "f")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden"); }
        get comment() { var _a; if (!__classPrivateFieldGet(this, _AnnotationEditor_h, "f"))
            return null; const { data: { richText: t, text: e, date: i, deleted: n } } = __classPrivateFieldGet(this, _AnnotationEditor_h, "f"); return { text: e, richText: t, date: i, deleted: n, color: this.getNonHCMColor(), opacity: (_a = this.opacity) !== null && _a !== void 0 ? _a : 1 }; }
        set comment(t) { __classPrivateFieldSet(this, _AnnotationEditor_h, __classPrivateFieldGet(this, _AnnotationEditor_h, "f") || new Comment(this), "f"); "object" == typeof t && null !== t ? __classPrivateFieldGet(this, _AnnotationEditor_h, "f").restoreData(t) : __classPrivateFieldGet(this, _AnnotationEditor_h, "f").data = t; if (this.hasComment) {
            this.removeCommentButtonFromToolbar();
            this.addStandaloneCommentButton();
            this._uiManager.updateComment(this);
        }
        else {
            this.addCommentButtonInToolbar();
            this.removeStandaloneCommentButton();
            this._uiManager.removeComment(this);
        } }
        setCommentData({ comment: t, popupRef: e, richText: i }) { if (!e)
            return; __classPrivateFieldSet(this, _AnnotationEditor_h, __classPrivateFieldGet(this, _AnnotationEditor_h, "f") || new Comment(this), "f"); __classPrivateFieldGet(this, _AnnotationEditor_h, "f").setInitialText(t, i); if (!this.annotationElementId)
            return; const n = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId); n && this.updateFromAnnotationLayer(n); }
        get hasEditedComment() { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditor_h, "f")) === null || _a === void 0 ? void 0 : _a.hasBeenEdited(); }
        get hasDeletedComment() { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditor_h, "f")) === null || _a === void 0 ? void 0 : _a.isDeleted(); }
        get hasComment() { return !!__classPrivateFieldGet(this, _AnnotationEditor_h, "f") && !__classPrivateFieldGet(this, _AnnotationEditor_h, "f").isEmpty() && !__classPrivateFieldGet(this, _AnnotationEditor_h, "f").isDeleted(); }
        editComment(t) {
            return __awaiter(this, void 0, void 0, function* () { __classPrivateFieldSet(this, _AnnotationEditor_h, __classPrivateFieldGet(this, _AnnotationEditor_h, "f") || new Comment(this), "f"); __classPrivateFieldGet(this, _AnnotationEditor_h, "f").edit(t); });
        }
        toggleComment(t, e = void 0) { this.hasComment && this._uiManager.toggleComment(this, t, e); }
        setSelectedCommentButton(t) { __classPrivateFieldGet(this, _AnnotationEditor_h, "f").setSelectedButton(t); }
        addComment(t) { if (this.hasEditedComment) {
            const e = 180, i = 100, [, , , n] = t.rect, [r] = this.pageDimensions, [s] = this.pageTranslation, a = s + r + 1, o = n - i, l = a + e;
            t.popup = { contents: this.comment.text, deleted: this.comment.deleted, rect: [a, o, l, n] };
        } }
        updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) { __classPrivateFieldGet(this, _AnnotationEditor_h, "f").data = e ? null : t; }
        get parentBoundingClientRect() { return this.parent.boundingClientRect; }
        render() { var _a; const t = this.div = document.createElement("div"); t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360); t.className = this.name; t.setAttribute("id", this.id); t.tabIndex = __classPrivateFieldGet(this, _AnnotationEditor_Le, "f") ? -1 : 0; t.setAttribute("role", "application"); this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId); this._isVisible || t.classList.add("hidden"); this.setInForeground(); __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_pi).call(this); const [e, i] = this.parentDimensions; if (this.parentRotation % 180 != 0) {
            t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`;
            t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`;
        } const [n, r] = this.getInitialTranslation(); this.translate(n, r); bindEvents(this, t, ["keydown", "pointerdown", "dblclick"]); this.isResizable && this._uiManager._supportsPinchToZoom && (__classPrivateFieldSet(this, _AnnotationEditor_ei, __classPrivateFieldGet(this, _AnnotationEditor_ei, "f") || new TouchManager({ container: t, isPinchingDisabled: () => !this.isSelected, onPinchStart: __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_gi).bind(this), onPinching: __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_mi).bind(this), onPinchEnd: __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_fi).bind(this), signal: this._uiManager._signal }), "f")); this.addStandaloneCommentButton(); (_a = this._uiManager._editorUndoBar) === null || _a === void 0 ? void 0 : _a.hide(); return t; }
        pointerdown(t) { const { isMac: e } = FeatureTest.platform; if (0 !== t.button || t.ctrlKey && e)
            t.preventDefault();
        else {
            __classPrivateFieldSet(this, _AnnotationEditor_$e, !0, "f");
            this._isDraggable ? __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_bi).call(this, t) : __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_yi).call(this, t);
        } }
        _onStartDragging() { }
        _onStopDragging() { }
        moveInDOM() { __classPrivateFieldGet(this, _AnnotationEditor_Je, "f") && clearTimeout(__classPrivateFieldGet(this, _AnnotationEditor_Je, "f")); __classPrivateFieldSet(this, _AnnotationEditor_Je, setTimeout(() => { var _a; __classPrivateFieldSet(this, _AnnotationEditor_Je, null, "f"); (_a = this.parent) === null || _a === void 0 ? void 0 : _a.moveEditorInDOM(this); }, 0), "f"); }
        _setParentAndPosition(t, e, i) { t.changeParent(this); this.x = e; this.y = i; this.fixAndSetPosition(); this._onTranslated(); }
        getRect(t, e, i = this.rotation) { const n = this.parentScale, [r, s] = this.pageDimensions, [a, o] = this.pageTranslation, l = t / n, h = e / n, c = this.x * r, d = this.y * s, u = this.width * r, p = this.height * s; switch (i) {
            case 0: return [c + l + a, s - d - h - p + o, c + l + u + a, s - d - h + o];
            case 90: return [c + h + a, s - d + l + o, c + h + p + a, s - d + l + u + o];
            case 180: return [c - l - u + a, s - d + h + o, c - l + a, s - d + h + p + o];
            case 270: return [c - h - p + a, s - d - l - u + o, c - h + a, s - d - l + o];
            default: throw new Error("Invalid rotation");
        } }
        getRectInCurrentCoords(t, e) { const [i, n, r, s] = t, a = r - i, o = s - n; switch (this.rotation) {
            case 0: return [i, e - s, a, o];
            case 90: return [i, e - n, o, a];
            case 180: return [r, e - n, a, o];
            case 270: return [r, e - s, o, a];
            default: throw new Error("Invalid rotation");
        } }
        getPDFRect() { return this.getRect(0, 0); }
        getNonHCMColor() { return this.color && _k._colorManager.convert(this._uiManager.getNonHCMColor(this.color)); }
        onUpdatedColor() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_h, "f")) === null || _a === void 0 ? void 0 : _a.onUpdatedColor(); }
        getData() { const { comment: { text: t, color: e, date: i, opacity: n, deleted: r, richText: s }, uid: a, pageIndex: o, creationDate: l, modificationDate: h } = this; return { id: a, pageIndex: o, rect: this.getPDFRect(), richText: s, contentsObj: { str: t }, creationDate: l, modificationDate: i || h, popupRef: !r, color: e, opacity: n }; }
        onceAdded(t) { }
        isEmpty() { return !1; }
        enableEditMode() { if (this.isInEditMode())
            return !1; this.parent.setEditingState(!1); __classPrivateFieldSet(this, _AnnotationEditor_Ye, !0, "f"); return !0; }
        disableEditMode() { if (!this.isInEditMode())
            return !1; this.parent.setEditingState(!0); __classPrivateFieldSet(this, _AnnotationEditor_Ye, !1, "f"); return !0; }
        isInEditMode() { return __classPrivateFieldGet(this, _AnnotationEditor_Ye, "f"); }
        shouldGetKeyboardEvents() { return __classPrivateFieldGet(this, _AnnotationEditor_Ke, "f"); }
        needsToBeRebuilt() { return this.div && !this.isAttachedToDOM; }
        get isOnScreen() { const { top: t, left: e, bottom: i, right: n } = this.getClientDimensions(), { innerHeight: r, innerWidth: s } = window; return e < s && n > 0 && t < r && i > 0; }
        rebuild() { __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_pi).call(this); }
        rotate(t) { }
        resize() { }
        serializeDeleted() { var _a; return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex, popupRef: ((_a = this._initialData) === null || _a === void 0 ? void 0 : _a.popupRef) || "" }; }
        serialize(t = !1, e = null) { var _a; return { annotationType: this.mode, pageIndex: this.pageIndex, rect: this.getPDFRect(), rotation: this.rotation, structTreeParentId: this._structTreeParentId, popupRef: ((_a = this._initialData) === null || _a === void 0 ? void 0 : _a.popupRef) || "" }; }
        static deserialize(t, e, i) {
            return __awaiter(this, void 0, void 0, function* () { const n = new this.prototype.constructor({ parent: e, id: i.getId(), uiManager: i, annotationElementId: t.annotationElementId, creationDate: t.creationDate, modificationDate: t.modificationDate }); n.rotation = t.rotation; __classPrivateFieldSet(n, _AnnotationEditor_Be, t.accessibilityData, "f"); n._isCopy = t.isCopy || !1; const [r, s] = n.pageDimensions, [a, o, l, h] = n.getRectInCurrentCoords(t.rect, s); n.x = a / r; n.y = o / s; n.width = l / r; n.height = h / s; return n; });
        }
        get hasBeenModified() { return !!this.annotationElementId && (this.deleted || null !== this.serialize()); }
        remove() { var _a, _5, _6; (_a = __classPrivateFieldGet(this, _AnnotationEditor_We, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditor_We, null, "f"); this.isEmpty() || this.commit(); this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this); this.hideCommentPopup(); if (__classPrivateFieldGet(this, _AnnotationEditor_Je, "f")) {
            clearTimeout(__classPrivateFieldGet(this, _AnnotationEditor_Je, "f"));
            __classPrivateFieldSet(this, _AnnotationEditor_Je, null, "f");
        } __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ri).call(this); this.removeEditToolbar(); if (__classPrivateFieldGet(this, _AnnotationEditor_ti, "f")) {
            for (const t of __classPrivateFieldGet(this, _AnnotationEditor_ti, "f").values())
                clearTimeout(t);
            __classPrivateFieldSet(this, _AnnotationEditor_ti, null, "f");
        } this.parent = null; (_5 = __classPrivateFieldGet(this, _AnnotationEditor_ei, "f")) === null || _5 === void 0 ? void 0 : _5.destroy(); __classPrivateFieldSet(this, _AnnotationEditor_ei, null, "f"); (_6 = __classPrivateFieldGet(this, _AnnotationEditor_Ge, "f")) === null || _6 === void 0 ? void 0 : _6.remove(); __classPrivateFieldSet(this, _AnnotationEditor_Ge, null, "f"); }
        get isResizable() { return !1; }
        makeResizable() { if (this.isResizable) {
            __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_li).call(this);
            __classPrivateFieldGet(this, _AnnotationEditor_He, "f").classList.remove("hidden");
        } }
        get toolbarPosition() { return null; }
        get commentButtonPosition() { return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0]; }
        get commentButtonPositionInPage() { const { commentButtonPosition: [t, e] } = this, [i, n, r, s] = this.getPDFRect(); return [_k._round(i + (r - i) * t), _k._round(n + (s - n) * (1 - e))]; }
        get commentButtonColor() { return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity); }
        get commentPopupPosition() { return __classPrivateFieldGet(this, _AnnotationEditor_h, "f").commentPopupPositionInLayer; }
        set commentPopupPosition(t) { __classPrivateFieldGet(this, _AnnotationEditor_h, "f").commentPopupPositionInLayer = t; }
        hasDefaultPopupPosition() { return __classPrivateFieldGet(this, _AnnotationEditor_h, "f").hasDefaultPopupPosition(); }
        get commentButtonWidth() { return __classPrivateFieldGet(this, _AnnotationEditor_h, "f").commentButtonWidth; }
        get elementBeforePopup() { return this.div; }
        setCommentButtonStates(t) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_h, "f")) === null || _a === void 0 ? void 0 : _a.setCommentButtonStates(t); }
        keydown(t) { if (!this.isResizable || t.target !== this.div || "Enter" !== t.key)
            return; this._uiManager.setSelected(this); __classPrivateFieldSet(this, _AnnotationEditor_je, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }, "f"); const e = __classPrivateFieldGet(this, _AnnotationEditor_He, "f").children; if (!__classPrivateFieldGet(this, _AnnotationEditor_Oe, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditor_Oe, Array.from(e), "f");
            const t = __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_vi).bind(this), i = __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_wi).bind(this), n = this._uiManager._signal;
            for (const e of __classPrivateFieldGet(this, _AnnotationEditor_Oe, "f")) {
                const r = e.getAttribute("data-resizer-name");
                e.setAttribute("role", "spinbutton");
                e.addEventListener("keydown", t, { signal: n });
                e.addEventListener("blur", i, { signal: n });
                e.addEventListener("focus", __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_Ai).bind(this, r), { signal: n });
                e.setAttribute("data-l10n-id", _k._l10nResizer[r]);
            }
        } const i = __classPrivateFieldGet(this, _AnnotationEditor_Oe, "f")[0]; let n = 0; for (const t of e) {
            if (t === i)
                break;
            n++;
        } const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__classPrivateFieldGet(this, _AnnotationEditor_Oe, "f").length / 4); if (r !== n) {
            if (r < n)
                for (let t = 0; t < n - r; t++)
                    __classPrivateFieldGet(this, _AnnotationEditor_He, "f").append(__classPrivateFieldGet(this, _AnnotationEditor_He, "f").firstElementChild);
            else if (r > n)
                for (let t = 0; t < r - n; t++)
                    __classPrivateFieldGet(this, _AnnotationEditor_He, "f").firstElementChild.before(__classPrivateFieldGet(this, _AnnotationEditor_He, "f").lastElementChild);
            let t = 0;
            for (const i of e) {
                const e = __classPrivateFieldGet(this, _AnnotationEditor_Oe, "f")[t++].getAttribute("data-resizer-name");
                i.setAttribute("data-l10n-id", _k._l10nResizer[e]);
            }
        } __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_xi).call(this, 0); __classPrivateFieldSet(this, _AnnotationEditor_Ke, !0, "f"); __classPrivateFieldGet(this, _AnnotationEditor_He, "f").firstElementChild.focus({ focusVisible: !0 }); t.preventDefault(); t.stopImmediatePropagation(); }
        _resizeWithKeyboard(t, e) { __classPrivateFieldGet(this, _AnnotationEditor_Ke, "f") && __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ci).call(this, __classPrivateFieldGet(this, _AnnotationEditor_Ve, "f"), { deltaX: t, deltaY: e, fromKeyboard: !0 }); }
        _stopResizingWithKeyboard() { __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ri).call(this); this.div.focus(); }
        select() { var _a, _5, _6; if (this.isSelected && this._editToolbar)
            this._editToolbar.show();
        else {
            this.isSelected = !0;
            this.makeResizable();
            (_a = this.div) === null || _a === void 0 ? void 0 : _a.classList.add("selectedEditor");
            if (this._editToolbar) {
                (_5 = this._editToolbar) === null || _5 === void 0 ? void 0 : _5.show();
                (_6 = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _6 === void 0 ? void 0 : _6.toggleAltTextBadge(!1);
            }
            else
                this.addEditToolbar().then(() => { var _a, _5; ((_a = this.div) === null || _a === void 0 ? void 0 : _a.classList.contains("selectedEditor")) && ((_5 = this._editToolbar) === null || _5 === void 0 ? void 0 : _5.show()); });
        } }
        focus() { this.div && !this.div.contains(document.activeElement) && setTimeout(() => { var _a; return (_a = this.div) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: !0 }); }, 0); }
        unselect() { var _a, _5, _6, _7, _8; if (this.isSelected) {
            this.isSelected = !1;
            (_a = __classPrivateFieldGet(this, _AnnotationEditor_He, "f")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
            (_5 = this.div) === null || _5 === void 0 ? void 0 : _5.classList.remove("selectedEditor");
            ((_6 = this.div) === null || _6 === void 0 ? void 0 : _6.contains(document.activeElement)) && this._uiManager.currentLayer.div.focus({ preventScroll: !0 });
            (_7 = this._editToolbar) === null || _7 === void 0 ? void 0 : _7.hide();
            (_8 = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _8 === void 0 ? void 0 : _8.toggleAltTextBadge(!0);
            this.hideCommentPopup();
        } }
        hideCommentPopup() { this.hasComment && this._uiManager.toggleComment(null); }
        updateParams(t, e) { }
        disableEditing() { }
        enableEditing() { }
        get canChangeContent() { return !1; }
        enterInEditMode() { if (this.canChangeContent) {
            this.enableEditMode();
            this.div.focus();
        } }
        dblclick(t) { if ("BUTTON" !== t.target.nodeName) {
            this.enterInEditMode();
            this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.uid });
        } }
        getElementForAltText() { return this.div; }
        get contentDiv() { return this.div; }
        get isEditing() { return __classPrivateFieldGet(this, _AnnotationEditor_Xe, "f"); }
        set isEditing(t) { __classPrivateFieldSet(this, _AnnotationEditor_Xe, t, "f"); if (this.parent)
            if (t) {
                this.parent.setSelected(this);
                this.parent.setActiveEditor(this);
            }
            else
                this.parent.setActiveEditor(null); }
        static get MIN_SIZE() { return 16; }
        static canCreateNewEmptyEditor() { return !0; }
        get telemetryInitialData() { return { action: "added" }; }
        get telemetryFinalData() { return null; }
        _reportTelemetry(t, e = !1) { if (e) {
            __classPrivateFieldSet(this, _AnnotationEditor_ti, __classPrivateFieldGet(this, _AnnotationEditor_ti, "f") || new Map, "f");
            const { action: e } = t;
            let i = __classPrivateFieldGet(this, _AnnotationEditor_ti, "f").get(e);
            i && clearTimeout(i);
            i = setTimeout(() => { this._reportTelemetry(t); __classPrivateFieldGet(this, _AnnotationEditor_ti, "f").delete(e); 0 === __classPrivateFieldGet(this, _AnnotationEditor_ti, "f").size && (__classPrivateFieldSet(this, _AnnotationEditor_ti, null, "f")); }, _k._telemetryTimeout);
            __classPrivateFieldGet(this, _AnnotationEditor_ti, "f").set(e, i);
            return;
        } t.type || (t.type = this.editorType); this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t } }); }
        show(t = this._isVisible) { this.div.classList.toggle("hidden", !t); this._isVisible = t; }
        enable() { this.div && (this.div.tabIndex = 0); __classPrivateFieldSet(this, _AnnotationEditor_Le, !1, "f"); }
        disable() { this.div && (this.div.tabIndex = -1); __classPrivateFieldSet(this, _AnnotationEditor_Le, !0, "f"); }
        updateFakeAnnotationElement(t) { if (__classPrivateFieldGet(this, _AnnotationEditor_Ge, "f") || this.deleted)
            if (this.deleted) {
                __classPrivateFieldGet(this, _AnnotationEditor_Ge, "f").remove();
                __classPrivateFieldSet(this, _AnnotationEditor_Ge, null, "f");
            }
            else
                (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && __classPrivateFieldGet(this, _AnnotationEditor_Ge, "f").updateEdited({ rect: this.getPDFRect(), popup: this.comment });
        else
            __classPrivateFieldSet(this, _AnnotationEditor_Ge, t.addFakeAnnotation(this), "f"); }
        renderAnnotationElement(t) { if (this.deleted) {
            t.hide();
            return null;
        } let e = t.container.querySelector(".annotationContent"); if (e) {
            if ("CANVAS" === e.nodeName) {
                const t = e;
                e = document.createElement("div");
                e.classList.add("annotationContent", this.editorType);
                t.before(e);
            }
        }
        else {
            e = document.createElement("div");
            e.classList.add("annotationContent", this.editorType);
            t.container.prepend(e);
        } return e; }
        resetAnnotationElement(t) { const { firstElementChild: e } = t.container; "DIV" === (e === null || e === void 0 ? void 0 : e.nodeName) && e.classList.contains("annotationContent") && e.remove(); }
    }
    _k = AnnotationEditor, _AnnotationEditor_Be = new WeakMap(), _AnnotationEditor_Oe = new WeakMap(), _AnnotationEditor_l = new WeakMap(), _AnnotationEditor_h = new WeakMap(), _AnnotationEditor_ue = new WeakMap(), _AnnotationEditor_Le = new WeakMap(), _AnnotationEditor_Ne = new WeakMap(), _AnnotationEditor_Ue = new WeakMap(), _AnnotationEditor_He = new WeakMap(), _AnnotationEditor_ze = new WeakMap(), _AnnotationEditor_je = new WeakMap(), _AnnotationEditor_Ge = new WeakMap(), _AnnotationEditor_We = new WeakMap(), _AnnotationEditor_Ve = new WeakMap(), _AnnotationEditor_$e = new WeakMap(), _AnnotationEditor_qe = new WeakMap(), _AnnotationEditor_Xe = new WeakMap(), _AnnotationEditor_Ye = new WeakMap(), _AnnotationEditor_Ke = new WeakMap(), _AnnotationEditor_Je = new WeakMap(), _AnnotationEditor_Qe = new WeakMap(), _AnnotationEditor_Ze = new WeakMap(), _AnnotationEditor_ti = new WeakMap(), _AnnotationEditor_ei = new WeakMap(), _AnnotationEditor_ii = new WeakMap(), _AnnotationEditor_ni = new WeakMap(), _AnnotationEditor_instances = new WeakSet(), _AnnotationEditor_si = function _AnnotationEditor_si([t, e], i, n) { [i, n] = this.screenToPageTranslation(i, n); this.x += i / t; this.y += n / e; this._onTranslating(this.x, this.y); this.fixAndSetPosition(); }, _AnnotationEditor_ai = function _AnnotationEditor_ai(t, e, i) { switch (i) {
        case 90: return [e, -t];
        case 180: return [-t, -e];
        case 270: return [-e, t];
        default: return [t, e];
    } }, _AnnotationEditor_oi = function _AnnotationEditor_oi(t) { switch (t) {
        case 90: {
            const [t, e] = this.pageDimensions;
            return [0, -t / e, e / t, 0];
        }
        case 180: return [-1, 0, 0, -1];
        case 270: {
            const [t, e] = this.pageDimensions;
            return [0, t / e, -e / t, 0];
        }
        default: return [1, 0, 0, 1];
    } }, _AnnotationEditor_li = function _AnnotationEditor_li() { if (__classPrivateFieldGet(this, _AnnotationEditor_He, "f"))
        return; __classPrivateFieldSet(this, _AnnotationEditor_He, document.createElement("div"), "f"); __classPrivateFieldGet(this, _AnnotationEditor_He, "f").classList.add("resizers"); const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal; for (const i of t) {
        const t = document.createElement("div");
        __classPrivateFieldGet(this, _AnnotationEditor_He, "f").append(t);
        t.classList.add("resizer", i);
        t.setAttribute("data-resizer-name", i);
        t.addEventListener("pointerdown", __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_hi).bind(this, i), { signal: e });
        t.addEventListener("contextmenu", noContextMenu, { signal: e });
        t.tabIndex = -1;
    } this.div.prepend(__classPrivateFieldGet(this, _AnnotationEditor_He, "f")); }, _AnnotationEditor_hi = function _AnnotationEditor_hi(t, e) { var _a; e.preventDefault(); const { isMac: i } = FeatureTest.platform; if (0 !== e.button || e.ctrlKey && i)
        return; (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.toggle(!1); const n = this._isDraggable; this._isDraggable = !1; __classPrivateFieldSet(this, _AnnotationEditor_ze, [e.screenX, e.screenY], "f"); const r = new AbortController, s = this._uiManager.combinedSignal(r); this.parent.togglePointerEvents(!1); window.addEventListener("pointermove", __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ci).bind(this, t), { passive: !0, capture: !0, signal: s }); window.addEventListener("touchmove", stopEvent, { passive: !1, signal: s }); window.addEventListener("contextmenu", noContextMenu, { signal: s }); __classPrivateFieldSet(this, _AnnotationEditor_je, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }, "f"); const a = this.parent.div.style.cursor, o = this.div.style.cursor; this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor; const pointerUpCallback = () => { var _a; r.abort(); this.parent.togglePointerEvents(!0); (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.toggle(!0); this._isDraggable = n; this.parent.div.style.cursor = a; this.div.style.cursor = o; __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_di).call(this); }; window.addEventListener("pointerup", pointerUpCallback, { signal: s }); window.addEventListener("blur", pointerUpCallback, { signal: s }); }, _AnnotationEditor_ui = function _AnnotationEditor_ui(t, e, i, n) { this.width = i; this.height = n; this.x = t; this.y = e; this.setDims(); this.fixAndSetPosition(); this._onResized(); }, _AnnotationEditor_di = function _AnnotationEditor_di() { if (!__classPrivateFieldGet(this, _AnnotationEditor_je, "f"))
        return; const { savedX: t, savedY: e, savedWidth: i, savedHeight: n } = __classPrivateFieldGet(this, _AnnotationEditor_je, "f"); __classPrivateFieldSet(this, _AnnotationEditor_je, null, "f"); const r = this.x, s = this.y, a = this.width, o = this.height; r === t && s === e && a === i && o === n || this.addCommands({ cmd: __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ui).bind(this, r, s, a, o), undo: __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ui).bind(this, t, e, i, n), mustExec: !0 }); }, _AnnotationEditor_ci = function _AnnotationEditor_ci(t, e) { const [i, n] = this.parentDimensions, r = this.x, s = this.y, a = this.width, o = this.height, l = _k.MIN_SIZE / i, h = _k.MIN_SIZE / n, c = __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_oi).call(this, this.rotation), transf = (t, e) => [c[0] * t + c[2] * e, c[1] * t + c[3] * e], d = __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_oi).call(this, 360 - this.rotation); let u, p, g = !1, m = !1; switch (t) {
        case "topLeft":
            g = !0;
            u = (t, e) => [0, 0];
            p = (t, e) => [t, e];
            break;
        case "topMiddle":
            u = (t, e) => [t / 2, 0];
            p = (t, e) => [t / 2, e];
            break;
        case "topRight":
            g = !0;
            u = (t, e) => [t, 0];
            p = (t, e) => [0, e];
            break;
        case "middleRight":
            m = !0;
            u = (t, e) => [t, e / 2];
            p = (t, e) => [0, e / 2];
            break;
        case "bottomRight":
            g = !0;
            u = (t, e) => [t, e];
            p = (t, e) => [0, 0];
            break;
        case "bottomMiddle":
            u = (t, e) => [t / 2, e];
            p = (t, e) => [t / 2, 0];
            break;
        case "bottomLeft":
            g = !0;
            u = (t, e) => [0, e];
            p = (t, e) => [t, 0];
            break;
        case "middleLeft":
            m = !0;
            u = (t, e) => [0, e / 2];
            p = (t, e) => [t, e / 2];
    } const f = u(a, o), b = p(a, o); let y = transf(...b); const v = _k._round(r + y[0]), w = _k._round(s + y[1]); let A, x, E = 1, _ = 1; if (e.fromKeyboard)
        ({ deltaX: A, deltaY: x } = e);
    else {
        const { screenX: t, screenY: i } = e, [n, r] = __classPrivateFieldGet(this, _AnnotationEditor_ze, "f");
        [A, x] = this.screenToPageTranslation(t - n, i - r);
        __classPrivateFieldGet(this, _AnnotationEditor_ze, "f")[0] = t;
        __classPrivateFieldGet(this, _AnnotationEditor_ze, "f")[1] = i;
    } [A, x] = (T = A / i, S = x / n, [d[0] * T + d[2] * S, d[1] * T + d[3] * S]); var T, S; if (g) {
        const t = Math.hypot(a, o);
        E = _ = Math.max(Math.min(Math.hypot(b[0] - f[0] - A, b[1] - f[1] - x) / t, 1 / a, 1 / o), l / a, h / o);
    }
    else
        m ? E = MathClamp(Math.abs(b[0] - f[0] - A), l, 1) / a : _ = MathClamp(Math.abs(b[1] - f[1] - x), h, 1) / o; const C = _k._round(a * E), D = _k._round(o * _); y = transf(...p(C, D)); const P = v - y[0], M = w - y[1]; __classPrivateFieldSet(this, _AnnotationEditor_qe, __classPrivateFieldGet(this, _AnnotationEditor_qe, "f") || [this.x, this.y, this.width, this.height], "f"); this.width = C; this.height = D; this.x = P; this.y = M; this.setDims(); this.fixAndSetPosition(); this._onResizing(); }, _AnnotationEditor_gi = function _AnnotationEditor_gi() { var _a; __classPrivateFieldSet(this, _AnnotationEditor_je, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }, "f"); (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.toggle(!1); this.parent.togglePointerEvents(!1); }, _AnnotationEditor_mi = function _AnnotationEditor_mi(t, e, i) { let n = i / e * .7 + 1 - .7; if (1 === n)
        return; const r = __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_oi).call(this, this.rotation), transf = (t, e) => [r[0] * t + r[2] * e, r[1] * t + r[3] * e], [s, a] = this.parentDimensions, o = this.x, l = this.y, h = this.width, c = this.height, d = _k.MIN_SIZE / s, u = _k.MIN_SIZE / a; n = Math.max(Math.min(n, 1 / h, 1 / c), d / h, u / c); const p = _k._round(h * n), g = _k._round(c * n); if (p === h && g === c)
        return; __classPrivateFieldSet(this, _AnnotationEditor_qe, __classPrivateFieldGet(this, _AnnotationEditor_qe, "f") || [o, l, h, c], "f"); const m = transf(h / 2, c / 2), f = _k._round(o + m[0]), b = _k._round(l + m[1]), y = transf(p / 2, g / 2); this.x = f - y[0]; this.y = b - y[1]; this.width = p; this.height = g; this.setDims(); this.fixAndSetPosition(); this._onResizing(); }, _AnnotationEditor_fi = function _AnnotationEditor_fi() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditor_l, "f")) === null || _a === void 0 ? void 0 : _a.toggle(!0); this.parent.togglePointerEvents(!0); __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_di).call(this); }, _AnnotationEditor_yi = function _AnnotationEditor_yi(t) { const { isMac: e } = FeatureTest.platform; t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this); }, _AnnotationEditor_bi = function _AnnotationEditor_bi(t) { const { isSelected: e } = this; this._uiManager.setUpDragSession(); let i = !1; const n = new AbortController, r = this._uiManager.combinedSignal(n), s = { capture: !0, passive: !1, signal: r }, cancelDrag = t => { n.abort(); __classPrivateFieldSet(this, _AnnotationEditor_Ne, null, "f"); __classPrivateFieldSet(this, _AnnotationEditor_$e, !1, "f"); this._uiManager.endDragSession() || __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_yi).call(this, t); i && this._onStopDragging(); }; if (e) {
        __classPrivateFieldSet(this, _AnnotationEditor_Qe, t.clientX, "f");
        __classPrivateFieldSet(this, _AnnotationEditor_Ze, t.clientY, "f");
        __classPrivateFieldSet(this, _AnnotationEditor_Ne, t.pointerId, "f");
        __classPrivateFieldSet(this, _AnnotationEditor_Ue, t.pointerType, "f");
        window.addEventListener("pointermove", t => { if (!i) {
            i = !0;
            this._uiManager.toggleComment(this, !0, !1);
            this._onStartDragging();
        } const { clientX: e, clientY: n, pointerId: r } = t; if (r !== __classPrivateFieldGet(this, _AnnotationEditor_Ne, "f")) {
            stopEvent(t);
            return;
        } const [s, a] = this.screenToPageTranslation(e - __classPrivateFieldGet(this, _AnnotationEditor_Qe, "f"), n - __classPrivateFieldGet(this, _AnnotationEditor_Ze, "f")); __classPrivateFieldSet(this, _AnnotationEditor_Qe, e, "f"); __classPrivateFieldSet(this, _AnnotationEditor_Ze, n, "f"); this._uiManager.dragSelectedEditors(s, a); }, s);
        window.addEventListener("touchmove", stopEvent, s);
        window.addEventListener("pointerdown", t => { t.pointerType === __classPrivateFieldGet(this, _AnnotationEditor_Ue, "f") && (__classPrivateFieldGet(this, _AnnotationEditor_ei, "f") || t.isPrimary) && cancelDrag(t); stopEvent(t); }, s);
    } const pointerUpCallback = t => { __classPrivateFieldGet(this, _AnnotationEditor_Ne, "f") && __classPrivateFieldGet(this, _AnnotationEditor_Ne, "f") !== t.pointerId ? stopEvent(t) : cancelDrag(t); }; window.addEventListener("pointerup", pointerUpCallback, { signal: r }); window.addEventListener("blur", pointerUpCallback, { signal: r }); }, _AnnotationEditor_pi = function _AnnotationEditor_pi() { if (__classPrivateFieldGet(this, _AnnotationEditor_We, "f") || !this.div)
        return; __classPrivateFieldSet(this, _AnnotationEditor_We, new AbortController, "f"); const t = this._uiManager.combinedSignal(__classPrivateFieldGet(this, _AnnotationEditor_We, "f")); this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t }); this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t }); }, _AnnotationEditor_vi = function _AnnotationEditor_vi(t) { _k._resizerKeyboardManager.exec(this, t); }, _AnnotationEditor_wi = function _AnnotationEditor_wi(t) { var _a; __classPrivateFieldGet(this, _AnnotationEditor_Ke, "f") && ((_a = t.relatedTarget) === null || _a === void 0 ? void 0 : _a.parentNode) !== __classPrivateFieldGet(this, _AnnotationEditor_He, "f") && __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_ri).call(this); }, _AnnotationEditor_Ai = function _AnnotationEditor_Ai(t) { __classPrivateFieldSet(this, _AnnotationEditor_Ve, __classPrivateFieldGet(this, _AnnotationEditor_Ke, "f") ? t : "", "f"); }, _AnnotationEditor_xi = function _AnnotationEditor_xi(t) { if (__classPrivateFieldGet(this, _AnnotationEditor_Oe, "f"))
        for (const e of __classPrivateFieldGet(this, _AnnotationEditor_Oe, "f"))
            e.tabIndex = t; }, _AnnotationEditor_ri = function _AnnotationEditor_ri() { __classPrivateFieldSet(this, _AnnotationEditor_Ke, !1, "f"); __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_xi).call(this, -1); __classPrivateFieldGet(this, _AnnotationEditor_instances, "m", _AnnotationEditor_di).call(this); };
    AnnotationEditor._l10n = null;
    AnnotationEditor._l10nResizer = null;
    AnnotationEditor._borderLineWidth = -1;
    AnnotationEditor._colorManager = new ColorManager;
    AnnotationEditor._zIndex = 1;
    AnnotationEditor._telemetryTimeout = 1e3;
    class FakeEditor extends AnnotationEditor {
        constructor(t) { super(t); this.annotationElementId = t.annotationElementId; this.deleted = !0; }
        serialize() { return this.serializeDeleted(); }
    }
    const J = 3285377520, Q = 4294901760, Z = 65535;
    class MurmurHash3_64 {
        constructor(t) { this.h1 = t ? 4294967295 & t : J; this.h2 = t ? 4294967295 & t : J; }
        update(t) { let e, i; if ("string" == typeof t) {
            e = new Uint8Array(2 * t.length);
            i = 0;
            for (let n = 0, r = t.length; n < r; n++) {
                const r = t.charCodeAt(n);
                if (r <= 255)
                    e[i++] = r;
                else {
                    e[i++] = r >>> 8;
                    e[i++] = 255 & r;
                }
            }
        }
        else {
            if (!ArrayBuffer.isView(t))
                throw new Error("Invalid data format, must be a string or TypedArray.");
            e = t.slice();
            i = e.byteLength;
        } const n = i >> 2, r = i - 4 * n, s = new Uint32Array(e.buffer, 0, n); let a = 0, o = 0, l = this.h1, h = this.h2; const c = 3432918353, d = 461845907, u = 11601, p = 13715; for (let t = 0; t < n; t++)
            if (1 & t) {
                a = s[t];
                a = a * c & Q | a * u & Z;
                a = a << 15 | a >>> 17;
                a = a * d & Q | a * p & Z;
                l ^= a;
                l = l << 13 | l >>> 19;
                l = 5 * l + 3864292196;
            }
            else {
                o = s[t];
                o = o * c & Q | o * u & Z;
                o = o << 15 | o >>> 17;
                o = o * d & Q | o * p & Z;
                h ^= o;
                h = h << 13 | h >>> 19;
                h = 5 * h + 3864292196;
            } a = 0; switch (r) {
            case 3: a ^= e[4 * n + 2] << 16;
            case 2: a ^= e[4 * n + 1] << 8;
            case 1:
                a ^= e[4 * n];
                a = a * c & Q | a * u & Z;
                a = a << 15 | a >>> 17;
                a = a * d & Q | a * p & Z;
                1 & n ? l ^= a : h ^= a;
        } this.h1 = l; this.h2 = h; }
        hexdigest() { let t = this.h1, e = this.h2; t ^= e >>> 1; t = 3981806797 * t & Q | 36045 * t & Z; e = 4283543511 * e & Q | (2950163797 * (e << 16 | t >>> 16) & Q) >>> 16; t ^= e >>> 1; t = 444984403 * t & Q | 60499 * t & Z; e = 3301882366 * e & Q | (3120437893 * (e << 16 | t >>> 16) & Q) >>> 16; t ^= e >>> 1; return (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0"); }
    }
    const tt = Object.freeze({ map: null, hash: "", transfer: void 0 });
    class AnnotationStorage {
        constructor() {
            _AnnotationStorage_instances.add(this);
            _AnnotationStorage_Ei.set(this, !1);
            _AnnotationStorage__i.set(this, null);
            _AnnotationStorage_Ti.set(this, null);
            _AnnotationStorage_Si.set(this, new Map);
            this.onSetModified = null;
            this.onResetModified = null;
            this.onAnnotationEditor = null;
        }
        getValue(t, e) { const i = __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").get(t); return void 0 === i ? e : Object.assign(e, i); }
        getRawValue(t) { return __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").get(t); }
        remove(t) { var _a; const e = __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").get(t); if (void 0 !== e) {
            e instanceof AnnotationEditor && __classPrivateFieldGet(this, _AnnotationStorage_Ti, "f").delete(e.annotationElementId);
            __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").delete(t);
            0 === __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").size && this.resetModified();
            __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").values().some(t => t instanceof AnnotationEditor) || ((_a = this.onAnnotationEditor) === null || _a === void 0 ? void 0 : _a.call(this, null));
        } }
        setValue(t, e) { var _a; const i = __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").get(t); let n = !1; if (void 0 !== i) {
            for (const [t, r] of Object.entries(e))
                if (i[t] !== r) {
                    n = !0;
                    i[t] = r;
                }
        }
        else {
            n = !0;
            __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").set(t, e);
        } n && __classPrivateFieldGet(this, _AnnotationStorage_instances, "m", _AnnotationStorage_Ci).call(this); if (e instanceof AnnotationEditor) {
            (__classPrivateFieldSet(this, _AnnotationStorage_Ti, __classPrivateFieldGet(this, _AnnotationStorage_Ti, "f") || new Map, "f")).set(e.annotationElementId, e);
            (_a = this.onAnnotationEditor) === null || _a === void 0 ? void 0 : _a.call(this, e.constructor._type);
        } }
        has(t) { return __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").has(t); }
        get size() { return __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").size; }
        resetModified() { var _a; if (__classPrivateFieldGet(this, _AnnotationStorage_Ei, "f")) {
            __classPrivateFieldSet(this, _AnnotationStorage_Ei, !1, "f");
            (_a = this.onResetModified) === null || _a === void 0 ? void 0 : _a.call(this);
        } }
        get print() { return new PrintAnnotationStorage(this); }
        get serializable() { if (0 === __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").size)
            return tt; const t = new Map, e = new MurmurHash3_64, i = [], n = Object.create(null); let r = !1; for (const [i, s] of __classPrivateFieldGet(this, _AnnotationStorage_Si, "f")) {
            const a = s instanceof AnnotationEditor ? s.serialize(!1, n) : s;
            if (s.page) {
                s.pageIndex = s.page._pageIndex;
                delete s.page;
            }
            if (a) {
                t.set(i, a);
                e.update(`${i}:${JSON.stringify(a)}`);
                r || (r = !!a.bitmap);
            }
        } if (r)
            for (const e of t.values())
                e.bitmap && i.push(e.bitmap); return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: i } : tt; }
        get editorStats() { var _a; let t = null; const e = new Map; let i = 0, n = 0; for (const r of __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").values()) {
            if (!(r instanceof AnnotationEditor)) {
                r.popup && (r.popup.deleted ? n += 1 : i += 1);
                continue;
            }
            r.isCommentDeleted ? n += 1 : r.hasEditedComment && (i += 1);
            const s = r.telemetryFinalData;
            if (!s)
                continue;
            const { type: a } = s;
            e.has(a) || e.set(a, Object.getPrototypeOf(r).constructor);
            t || (t = Object.create(null));
            const o = t[a] || (t[a] = new Map);
            for (const [t, e] of Object.entries(s)) {
                if ("type" === t)
                    continue;
                const i = o.getOrInsertComputed(t, makeMap);
                i.set(e, ((_a = i.get(e)) !== null && _a !== void 0 ? _a : 0) + 1);
            }
        } if (n > 0 || i > 0) {
            t || (t = Object.create(null));
            t.comments = { deleted: n, edited: i };
        } if (!t)
            return null; for (const [i, n] of e)
            t[i] = n.computeTelemetryFinalData(t[i]); return t; }
        resetModifiedIds() { __classPrivateFieldSet(this, _AnnotationStorage__i, null, "f"); }
        updateEditor(t, e) { var _a; const i = (_a = __classPrivateFieldGet(this, _AnnotationStorage_Ti, "f")) === null || _a === void 0 ? void 0 : _a.get(t); if (i) {
            i.updateFromAnnotationLayer(e);
            return !0;
        } return !1; }
        getEditor(t) { var _a; return ((_a = __classPrivateFieldGet(this, _AnnotationStorage_Ti, "f")) === null || _a === void 0 ? void 0 : _a.get(t)) || null; }
        get modifiedIds() { if (__classPrivateFieldGet(this, _AnnotationStorage__i, "f"))
            return __classPrivateFieldGet(this, _AnnotationStorage__i, "f"); const t = []; if (__classPrivateFieldGet(this, _AnnotationStorage_Ti, "f"))
            for (const e of __classPrivateFieldGet(this, _AnnotationStorage_Ti, "f").values())
                e.serialize() && t.push(e.annotationElementId); return __classPrivateFieldSet(this, _AnnotationStorage__i, { ids: new Set(t), hash: t.join(",") }, "f"); }
        [(_AnnotationStorage_Ei = new WeakMap(), _AnnotationStorage__i = new WeakMap(), _AnnotationStorage_Ti = new WeakMap(), _AnnotationStorage_Si = new WeakMap(), _AnnotationStorage_instances = new WeakSet(), _AnnotationStorage_Ci = function _AnnotationStorage_Ci() { var _a; if (!__classPrivateFieldGet(this, _AnnotationStorage_Ei, "f")) {
            __classPrivateFieldSet(this, _AnnotationStorage_Ei, !0, "f");
            (_a = this.onSetModified) === null || _a === void 0 ? void 0 : _a.call(this);
        } }, Symbol.iterator)]() { return __classPrivateFieldGet(this, _AnnotationStorage_Si, "f").entries(); }
    }
    class PrintAnnotationStorage extends AnnotationStorage {
        constructor(t) {
            super();
            _PrintAnnotationStorage_Di.set(this, tt);
            const { serializable: e } = t;
            if (e === tt)
                return;
            const { map: i, hash: n, transfer: r } = e, s = structuredClone(i, r ? { transfer: r } : null);
            __classPrivateFieldSet(this, _PrintAnnotationStorage_Di, { map: s, hash: n, transfer: [] }, "f");
        }
        get print() { unreachable("Should not call PrintAnnotationStorage.print"); }
        get serializable() { return __classPrivateFieldGet(this, _PrintAnnotationStorage_Di, "f"); }
        get modifiedIds() { return shadow(this, "modifiedIds", { ids: new Set, hash: "" }); }
    }
    _PrintAnnotationStorage_Di = new WeakMap();
    __webpack_require__(7588);
    const et = "__forcedDependency", { floor: it, ceil: nt } = Math;
    function expandBBox(t, e, i, n, r, s) { t[4 * e + 0] = Math.min(t[4 * e + 0], i); t[4 * e + 1] = Math.min(t[4 * e + 1], n); t[4 * e + 2] = Math.max(t[4 * e + 2], r); t[4 * e + 3] = Math.max(t[4 * e + 3], s); }
    const rt = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
    class BBoxReader {
        constructor(t, e) {
            _BBoxReader_Pi.set(this, void 0);
            _BBoxReader_Mi.set(this, void 0);
            __classPrivateFieldSet(this, _BBoxReader_Pi, t, "f");
            __classPrivateFieldSet(this, _BBoxReader_Mi, e, "f");
        }
        get length() { return __classPrivateFieldGet(this, _BBoxReader_Pi, "f").length; }
        isEmpty(t) { return __classPrivateFieldGet(this, _BBoxReader_Pi, "f")[t] === rt; }
        minX(t) { return __classPrivateFieldGet(this, _BBoxReader_Mi, "f")[4 * t + 0] / 256; }
        minY(t) { return __classPrivateFieldGet(this, _BBoxReader_Mi, "f")[4 * t + 1] / 256; }
        maxX(t) { return (__classPrivateFieldGet(this, _BBoxReader_Mi, "f")[4 * t + 2] + 1) / 256; }
        maxY(t) { return (__classPrivateFieldGet(this, _BBoxReader_Mi, "f")[4 * t + 3] + 1) / 256; }
    }
    _BBoxReader_Pi = new WeakMap(), _BBoxReader_Mi = new WeakMap();
    const ensureDebugMetadata = (t, e) => t === null || t === void 0 ? void 0 : t.getOrInsertComputed(e, () => ({ dependencies: new Set, isRenderingOperation: !1 }));
    class CanvasBBoxTracker {
        constructor(t, e) {
            _CanvasBBoxTracker_instances.add(this);
            _CanvasBBoxTracker_ki.set(this, [[1, 0, 0, 1, 0, 0]]);
            _CanvasBBoxTracker_Ii.set(this, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
            _CanvasBBoxTracker_Fi.set(this, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
            this._pendingBBoxIdx = -1;
            _CanvasBBoxTracker_Ri.set(this, void 0);
            _CanvasBBoxTracker_Bi.set(this, void 0);
            _CanvasBBoxTracker_Oi.set(this, void 0);
            _CanvasBBoxTracker_Pi.set(this, void 0);
            this._savesStack = [];
            this._markedContentStack = [];
            __classPrivateFieldSet(this, _CanvasBBoxTracker_Ri, t.width, "f");
            __classPrivateFieldSet(this, _CanvasBBoxTracker_Bi, t.height, "f");
            __classPrivateFieldGet(this, _CanvasBBoxTracker_instances, "m", _CanvasBBoxTracker_Li).call(this, e);
        }
        growOperationsCount(t) { t >= __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f").length && __classPrivateFieldGet(this, _CanvasBBoxTracker_instances, "m", _CanvasBBoxTracker_Li).call(this, t, __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")); }
        get clipBox() { return __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f"); }
        save(t) { __classPrivateFieldSet(this, _CanvasBBoxTracker_Ii, { __proto__: __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f") }, "f"); this._savesStack.push(t); return this; }
        restore(t, e) { const i = Object.getPrototypeOf(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")); if (null === i)
            return this; __classPrivateFieldSet(this, _CanvasBBoxTracker_Ii, i, "f"); const n = this._savesStack.pop(); if (void 0 !== n) {
            e === null || e === void 0 ? void 0 : e(n, t);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[t] = __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[n];
        } return this; }
        recordOpenMarker(t) { this._savesStack.push(t); return this; }
        getOpenMarker() { return 0 === this._savesStack.length ? null : this._savesStack.at(-1); }
        recordCloseMarker(t, e) { const i = this._savesStack.pop(); if (void 0 !== i) {
            e === null || e === void 0 ? void 0 : e(i, t);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[t] = __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[i];
        } return this; }
        beginMarkedContent(t) { this._markedContentStack.push(t); return this; }
        endMarkedContent(t, e) { const i = this._markedContentStack.pop(); if (void 0 !== i) {
            e === null || e === void 0 ? void 0 : e(i, t);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[t] = __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f")[i];
        } return this; }
        pushBaseTransform(t) { __classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").push(Util.multiplyByDOMMatrix(__classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").at(-1), t.getTransform())); return this; }
        popBaseTransform() { __classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").length > 1 && __classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").pop(); return this; }
        resetBBox(t) { if (this._pendingBBoxIdx !== t) {
            this._pendingBBoxIdx = t;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0] = 1 / 0;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1] = 1 / 0;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2] = -1 / 0;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3] = -1 / 0;
        } return this; }
        recordClipBox(t, e, i, n, r, s) { const a = Util.multiplyByDOMMatrix(__classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").at(-1), e.getTransform()), o = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; Util.axialAlignedBoundingBox([i, r, n, s], a, o); const l = Util.intersect(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f"), o); if (l) {
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[0] = l[0];
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[1] = l[1];
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[2] = l[2];
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[3] = l[3];
        }
        else {
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[0] = __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[1] = 1 / 0;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[2] = __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[3] = -1 / 0;
        } return this; }
        recordBBox(t, e, i, n, r, s) { const a = __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f"); if (a[0] === 1 / 0)
            return this; const o = Util.multiplyByDOMMatrix(__classPrivateFieldGet(this, _CanvasBBoxTracker_ki, "f").at(-1), e.getTransform()); if (a[0] === -1 / 0) {
            Util.axialAlignedBoundingBox([i, r, n, s], o, __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f"));
            return this;
        } const l = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; Util.axialAlignedBoundingBox([i, r, n, s], o, l); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0], Math.max(l[0], a[0])); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1], Math.max(l[1], a[1])); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2] = Math.max(__classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2], Math.min(l[2], a[2])); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3] = Math.max(__classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3], Math.min(l[3], a[3])); return this; }
        recordFullPageBBox(t) { __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0] = Math.max(0, __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[0]); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1] = Math.max(0, __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[1]); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ri, "f"), __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[2]); __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Bi, "f"), __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[3]); return this; }
        recordOperation(t, e = !1, i) { if (this._pendingBBoxIdx !== t)
            return this; const n = it(256 * __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0] / __classPrivateFieldGet(this, _CanvasBBoxTracker_Ri, "f")), r = it(256 * __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1] / __classPrivateFieldGet(this, _CanvasBBoxTracker_Bi, "f")), s = nt(256 * __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2] / __classPrivateFieldGet(this, _CanvasBBoxTracker_Ri, "f")), a = nt(256 * __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3] / __classPrivateFieldGet(this, _CanvasBBoxTracker_Bi, "f")); expandBBox(__classPrivateFieldGet(this, _CanvasBBoxTracker_Oi, "f"), t, n, r, s, a); if (i)
            for (const e of i)
                for (const i of e)
                    i !== t && expandBBox(__classPrivateFieldGet(this, _CanvasBBoxTracker_Oi, "f"), i, n, r, s, a); e || (this._pendingBBoxIdx = -1); return this; }
        bboxToClipBoxDropOperation(t) { if (this._pendingBBoxIdx === t) {
            this._pendingBBoxIdx = -1;
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[0] = Math.max(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[0], __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[0]);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[1] = Math.max(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[1], __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[1]);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[2] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[2], __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[2]);
            __classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[3] = Math.min(__classPrivateFieldGet(this, _CanvasBBoxTracker_Ii, "f")[3], __classPrivateFieldGet(this, _CanvasBBoxTracker_Fi, "f")[3]);
        } return this; }
        take() { return new BBoxReader(__classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f"), __classPrivateFieldGet(this, _CanvasBBoxTracker_Oi, "f")); }
        takeDebugMetadata() { throw new Error("Unreachable"); }
        recordSimpleData(t, e) { return this; }
        recordIncrementalData(t, e) { return this; }
        resetIncrementalData(t, e) { return this; }
        recordNamedData(t, e) { return this; }
        recordSimpleDataFromNamed(t, e, i) { return this; }
        recordFutureForcedDependency(t, e) { return this; }
        inheritSimpleDataAsFutureForcedDependencies(t) { return this; }
        inheritPendingDependenciesAsFutureForcedDependencies() { return this; }
        recordCharacterBBox(t, e, i, n = 1, r = 0, s = 0, a) { return this; }
        getSimpleIndex(t) { }
        recordDependencies(t, e) { return this; }
        recordNamedDependency(t, e) { return this; }
        recordShowTextOperation(t, e = !1) { return this; }
    }
    _CanvasBBoxTracker_ki = new WeakMap(), _CanvasBBoxTracker_Ii = new WeakMap(), _CanvasBBoxTracker_Fi = new WeakMap(), _CanvasBBoxTracker_Ri = new WeakMap(), _CanvasBBoxTracker_Bi = new WeakMap(), _CanvasBBoxTracker_Oi = new WeakMap(), _CanvasBBoxTracker_Pi = new WeakMap(), _CanvasBBoxTracker_instances = new WeakSet(), _CanvasBBoxTracker_Li = function _CanvasBBoxTracker_Li(t, e) { const i = new ArrayBuffer(4 * t); __classPrivateFieldSet(this, _CanvasBBoxTracker_Oi, new Uint8ClampedArray(i), "f"); __classPrivateFieldSet(this, _CanvasBBoxTracker_Pi, new Uint32Array(i), "f"); if (e && e.length > 0) {
        __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f").set(e);
        __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f").fill(rt, e.length);
    }
    else
        __classPrivateFieldGet(this, _CanvasBBoxTracker_Pi, "f").fill(rt); };
    class CanvasDependencyTracker {
        constructor(t, e = !1) {
            _CanvasDependencyTracker_Ni.set(this, { __proto__: null });
            _CanvasDependencyTracker_Ui.set(this, { __proto__: null, transform: [], moveText: [], sameLineText: [], [et]: [] });
            _CanvasDependencyTracker_Hi.set(this, new Map);
            _CanvasDependencyTracker_zi.set(this, new Set);
            _CanvasDependencyTracker_ji.set(this, new Map);
            _CanvasDependencyTracker_Gi.set(this, void 0);
            _CanvasDependencyTracker_Wi.set(this, void 0);
            _CanvasDependencyTracker_Vi.set(this, void 0);
            __classPrivateFieldSet(this, _CanvasDependencyTracker_Vi, t, "f");
            if (e) {
                __classPrivateFieldSet(this, _CanvasDependencyTracker_Gi, new Map, "f");
                __classPrivateFieldSet(this, _CanvasDependencyTracker_Wi, (t, e) => { ensureDebugMetadata(__classPrivateFieldGet(this, _CanvasDependencyTracker_Gi, "f"), e).dependencies.add(t); }, "f");
            }
        }
        get clipBox() { return __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").clipBox; }
        growOperationsCount(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").growOperationsCount(t); }
        save(t) { __classPrivateFieldSet(this, _CanvasDependencyTracker_Ni, { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f") }, "f"); __classPrivateFieldSet(this, _CanvasDependencyTracker_Ui, { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f"), transform: { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f").transform }, moveText: { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f").moveText }, sameLineText: { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f").sameLineText }, [et]: { __proto__: __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f")[et] } }, "f"); __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").save(t); return this; }
        restore(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").restore(t, __classPrivateFieldGet(this, _CanvasDependencyTracker_Wi, "f")); const e = Object.getPrototypeOf(__classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f")); if (null === e)
            return this; __classPrivateFieldSet(this, _CanvasDependencyTracker_Ni, e, "f"); __classPrivateFieldSet(this, _CanvasDependencyTracker_Ui, Object.getPrototypeOf(__classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f")), "f"); return this; }
        recordOpenMarker(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordOpenMarker(t, __classPrivateFieldGet(this, _CanvasDependencyTracker_Wi, "f")); return this; }
        getOpenMarker() { return __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").getOpenMarker(); }
        recordCloseMarker(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordCloseMarker(t, __classPrivateFieldGet(this, _CanvasDependencyTracker_Wi, "f")); return this; }
        beginMarkedContent(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").beginMarkedContent(t); return this; }
        endMarkedContent(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").endMarkedContent(t, __classPrivateFieldGet(this, _CanvasDependencyTracker_Wi, "f")); return this; }
        pushBaseTransform(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").pushBaseTransform(t); return this; }
        popBaseTransform() { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").popBaseTransform(); return this; }
        recordSimpleData(t, e) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f")[t] = e; return this; }
        recordIncrementalData(t, e) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f")[t].push(e); return this; }
        resetIncrementalData(t, e) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f")[t].length = 0; return this; }
        recordNamedData(t, e) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Hi, "f").set(t, e); return this; }
        recordSimpleDataFromNamed(t, e, i) { var _a; __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f")[t] = (_a = __classPrivateFieldGet(this, _CanvasDependencyTracker_Hi, "f").get(e)) !== null && _a !== void 0 ? _a : i; }
        recordFutureForcedDependency(t, e) { this.recordIncrementalData(et, e); return this; }
        inheritSimpleDataAsFutureForcedDependencies(t) { for (const e of t)
            e in __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f") && this.recordFutureForcedDependency(e, __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f")[e]); return this; }
        inheritPendingDependenciesAsFutureForcedDependencies() { for (const t of __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f"))
            this.recordFutureForcedDependency(et, t); return this; }
        resetBBox(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").resetBBox(t); return this; }
        recordClipBox(t, e, i, n, r, s) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordClipBox(t, e, i, n, r, s); return this; }
        recordBBox(t, e, i, n, r, s) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordBBox(t, e, i, n, r, s); return this; }
        recordCharacterBBox(t, e, i, n = 1, r = 0, s = 0, a) { const o = i.bbox; let l, h; if (o) {
            l = o[2] !== o[0] && o[3] !== o[1] && __classPrivateFieldGet(this, _CanvasDependencyTracker_ji, "f").get(i);
            if (!1 !== l) {
                h = [0, 0, 0, 0];
                Util.axialAlignedBoundingBox(o, i.fontMatrix, h);
                1 === n && 0 === r && 0 === s || Util.scaleMinMax([n, 0, 0, -n, r, s], h);
                if (l)
                    return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
            }
        } if (!a)
            return this.recordFullPageBBox(t); const c = a(); if (o && h && void 0 === l) {
            l = h[0] <= r - c.actualBoundingBoxLeft && h[2] >= r + c.actualBoundingBoxRight && h[1] <= s - c.actualBoundingBoxAscent && h[3] >= s + c.actualBoundingBoxDescent;
            __classPrivateFieldGet(this, _CanvasDependencyTracker_ji, "f").set(i, l);
            if (l)
                return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
        } return this.recordBBox(t, e, r - c.actualBoundingBoxLeft, r + c.actualBoundingBoxRight, s - c.actualBoundingBoxAscent, s + c.actualBoundingBoxDescent); }
        recordFullPageBBox(t) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordFullPageBBox(t); return this; }
        getSimpleIndex(t) { return __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f")[t]; }
        recordDependencies(t, e) { const i = __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f"), n = __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f"), r = __classPrivateFieldGet(this, _CanvasDependencyTracker_Ui, "f"); for (const t of e)
            t in __classPrivateFieldGet(this, _CanvasDependencyTracker_Ni, "f") ? i.add(n[t]) : t in r && r[t].forEach(i.add, i); return this; }
        recordNamedDependency(t, e) { __classPrivateFieldGet(this, _CanvasDependencyTracker_Hi, "f").has(e) && __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f").add(__classPrivateFieldGet(this, _CanvasDependencyTracker_Hi, "f").get(e)); return this; }
        recordOperation(t, e = !1) { this.recordDependencies(t, [et]); if (__classPrivateFieldGet(this, _CanvasDependencyTracker_Gi, "f")) {
            const e = ensureDebugMetadata(__classPrivateFieldGet(this, _CanvasDependencyTracker_Gi, "f"), t), { dependencies: i } = e;
            __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f").forEach(i.add, i);
            __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._savesStack.forEach(i.add, i);
            __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._markedContentStack.forEach(i.add, i);
            i.delete(t);
            e.isRenderingOperation = !0;
        } const i = !e && t === __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._pendingBBoxIdx; __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").recordOperation(t, e, [__classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f"), __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._savesStack, __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._markedContentStack]); i && __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f").clear(); return this; }
        recordShowTextOperation(t, e = !1) { const i = Array.from(__classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f")); this.recordOperation(t, e); this.recordIncrementalData("sameLineText", t); for (const t of i)
            this.recordIncrementalData("sameLineText", t); return this; }
        bboxToClipBoxDropOperation(t, e = !1) { const i = !e && t === __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f")._pendingBBoxIdx; __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").bboxToClipBoxDropOperation(t); i && __classPrivateFieldGet(this, _CanvasDependencyTracker_zi, "f").clear(); return this; }
        take() { __classPrivateFieldGet(this, _CanvasDependencyTracker_ji, "f").clear(); return __classPrivateFieldGet(this, _CanvasDependencyTracker_Vi, "f").take(); }
        takeDebugMetadata() { return __classPrivateFieldGet(this, _CanvasDependencyTracker_Gi, "f"); }
    }
    _CanvasDependencyTracker_Ni = new WeakMap(), _CanvasDependencyTracker_Ui = new WeakMap(), _CanvasDependencyTracker_Hi = new WeakMap(), _CanvasDependencyTracker_zi = new WeakMap(), _CanvasDependencyTracker_ji = new WeakMap(), _CanvasDependencyTracker_Gi = new WeakMap(), _CanvasDependencyTracker_Wi = new WeakMap(), _CanvasDependencyTracker_Vi = new WeakMap();
    class CanvasNestedDependencyTracker {
        constructor(t, e, i) {
            _CanvasNestedDependencyTracker_$i.set(this, void 0);
            _CanvasNestedDependencyTracker_qi.set(this, void 0);
            _CanvasNestedDependencyTracker_Xi.set(this, void 0);
            _CanvasNestedDependencyTracker_Yi.set(this, 0);
            _CanvasNestedDependencyTracker_Ki.set(this, 0);
            if (t instanceof CanvasNestedDependencyTracker && __classPrivateFieldGet(t, _CanvasNestedDependencyTracker_Xi, "f") === !!i)
                return t;
            __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_$i, t, "f");
            __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_qi, e, "f");
            __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_Xi, !!i, "f");
        }
        get clipBox() { return __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").clipBox; }
        growOperationsCount() { throw new Error("Unreachable"); }
        save(t) { var _a; __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_Ki, (_a = __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Ki, "f"), _a++, _a), "f"); __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").save(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        restore(t) { var _a; if (__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Ki, "f") > 0) {
            __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").restore(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"));
            __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_Ki, (_a = __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Ki, "f"), _a--, _a), "f");
        } return this; }
        recordOpenMarker(t) { var _a; __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_Yi, (_a = __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Yi, "f"), _a++, _a), "f"); return this; }
        getOpenMarker() { return __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Yi, "f") > 0 ? __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f") : __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").getOpenMarker(); }
        recordCloseMarker(t) { var _a; __classPrivateFieldSet(this, _CanvasNestedDependencyTracker_Yi, (_a = __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Yi, "f"), _a--, _a), "f"); return this; }
        beginMarkedContent(t) { return this; }
        endMarkedContent(t) { return this; }
        pushBaseTransform(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").pushBaseTransform(t); return this; }
        popBaseTransform() { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").popBaseTransform(); return this; }
        recordSimpleData(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordSimpleData(t, __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        recordIncrementalData(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordIncrementalData(t, __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        resetIncrementalData(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").resetIncrementalData(t, __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        recordNamedData(t, e) { return this; }
        recordSimpleDataFromNamed(t, e, i) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordSimpleDataFromNamed(t, e, __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        recordFutureForcedDependency(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordFutureForcedDependency(t, __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        inheritSimpleDataAsFutureForcedDependencies(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").inheritSimpleDataAsFutureForcedDependencies(t); return this; }
        inheritPendingDependenciesAsFutureForcedDependencies() { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").inheritPendingDependenciesAsFutureForcedDependencies(); return this; }
        resetBBox(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").resetBBox(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        recordClipBox(t, e, i, n, r, s) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordClipBox(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), e, i, n, r, s); return this; }
        recordBBox(t, e, i, n, r, s) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordBBox(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), e, i, n, r, s); return this; }
        recordCharacterBBox(t, e, i, n, r, s, a) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordCharacterBBox(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), e, i, n, r, s, a); return this; }
        recordFullPageBBox(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordFullPageBBox(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f")); return this; }
        getSimpleIndex(t) { return __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").getSimpleIndex(t); }
        recordDependencies(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordDependencies(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), e); return this; }
        recordNamedDependency(t, e) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordNamedDependency(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), e); return this; }
        recordOperation(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordOperation(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), !0); return this; }
        recordShowTextOperation(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").recordShowTextOperation(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), !0); return this; }
        bboxToClipBoxDropOperation(t) { __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_Xi, "f") || __classPrivateFieldGet(this, _CanvasNestedDependencyTracker_$i, "f").bboxToClipBoxDropOperation(__classPrivateFieldGet(this, _CanvasNestedDependencyTracker_qi, "f"), !0); return this; }
        take() { throw new Error("Unreachable"); }
        takeDebugMetadata() { throw new Error("Unreachable"); }
    }
    _CanvasNestedDependencyTracker_$i = new WeakMap(), _CanvasNestedDependencyTracker_qi = new WeakMap(), _CanvasNestedDependencyTracker_Xi = new WeakMap(), _CanvasNestedDependencyTracker_Yi = new WeakMap(), _CanvasNestedDependencyTracker_Ki = new WeakMap();
    const st = ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"], ot = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"], lt = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"], ht = ["filter", "fillColor", "fillAlpha"], ct = ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"], dt = ["transform"], ut = ["transform", "fillColor"];
    class CanvasImagesTracker {
        constructor(t) {
            _CanvasImagesTracker_Ri.set(this, void 0);
            _CanvasImagesTracker_Bi.set(this, void 0);
            _CanvasImagesTracker_Ji.set(this, 4);
            _CanvasImagesTracker_Qi.set(this, 0);
            _CanvasImagesTracker_Mi.set(this, new (__classPrivateFieldGet(_l, _l, "f", _CanvasImagesTracker_Zi))(6 * __classPrivateFieldGet(this, _CanvasImagesTracker_Ji, "f")));
            __classPrivateFieldSet(this, _CanvasImagesTracker_Ri, t.width, "f");
            __classPrivateFieldSet(this, _CanvasImagesTracker_Bi, t.height, "f");
        }
        record(t, e, i, n) { var _a; if (__classPrivateFieldGet(this, _CanvasImagesTracker_Qi, "f") === __classPrivateFieldGet(this, _CanvasImagesTracker_Ji, "f")) {
            __classPrivateFieldSet(this, _CanvasImagesTracker_Ji, __classPrivateFieldGet(this, _CanvasImagesTracker_Ji, "f") * 2, "f");
            const t = new (__classPrivateFieldGet(_l, _l, "f", _CanvasImagesTracker_Zi))(6 * __classPrivateFieldGet(this, _CanvasImagesTracker_Ji, "f"));
            t.set(__classPrivateFieldGet(this, _CanvasImagesTracker_Mi, "f"));
            __classPrivateFieldSet(this, _CanvasImagesTracker_Mi, t, "f");
        } const r = Util.domMatrixToTransform(t.getTransform()); let s; if (n[0] !== 1 / 0) {
            const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            Util.axialAlignedBoundingBox([0, -i, e, 0], r, t);
            const a = Util.intersect(n, t);
            if (!a)
                return;
            const [o, l, h, c] = a;
            if (o !== t[0] || l !== t[1] || h !== t[2] || c !== t[3]) {
                const t = Math.atan2(r[1], r[0]), e = Math.abs(Math.sin(t)), i = Math.abs(Math.cos(t));
                if (e < 1e-6 || i < 1e-6 || Math.abs(e - i) < 1e-6)
                    s = [o, l, o, c, h, l];
                else {
                    const t = h - o, n = c - l, r = e * e, a = i * i, d = i * e, u = a - r, p = (n * a - t * d) / u;
                    s = [o + (n * d - t * r) / u, l, o, l + p, h, c - p];
                }
            }
        } if (!s) {
            s = [0, -i, 0, 0, e, -i];
            Util.applyTransform(s, r, 0);
            Util.applyTransform(s, r, 2);
            Util.applyTransform(s, r, 4);
        } s[0] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Ri, "f"); s[1] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Bi, "f"); s[2] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Ri, "f"); s[3] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Bi, "f"); s[4] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Ri, "f"); s[5] /= __classPrivateFieldGet(this, _CanvasImagesTracker_Bi, "f"); __classPrivateFieldGet(this, _CanvasImagesTracker_Mi, "f").set(s, 6 * __classPrivateFieldGet(this, _CanvasImagesTracker_Qi, "f")); __classPrivateFieldSet(this, _CanvasImagesTracker_Qi, (_a = __classPrivateFieldGet(this, _CanvasImagesTracker_Qi, "f"), _a++, _a), "f"); }
        take() { return __classPrivateFieldGet(this, _CanvasImagesTracker_Mi, "f").subarray(0, 6 * __classPrivateFieldGet(this, _CanvasImagesTracker_Qi, "f")); }
    }
    _l = CanvasImagesTracker, _CanvasImagesTracker_Ri = new WeakMap(), _CanvasImagesTracker_Bi = new WeakMap(), _CanvasImagesTracker_Ji = new WeakMap(), _CanvasImagesTracker_Qi = new WeakMap(), _CanvasImagesTracker_Mi = new WeakMap();
    _CanvasImagesTracker_Zi = { value: FeatureTest.isFloat16ArraySupported ? Float16Array : Float32Array };
    class FontLoader {
        constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
            _FontLoader_tn.set(this, new Set);
            this._document = t;
            this.nativeFontFaces = new Set;
            this.styleElement = null;
            this.loadingRequests = [];
            this.loadTestFontId = 0;
        }
        addNativeFontFace(t) { this.nativeFontFaces.add(t); this._document.fonts.add(t); }
        removeNativeFontFace(t) { this.nativeFontFaces.delete(t); this._document.fonts.delete(t); }
        insertRule(t) { if (!this.styleElement) {
            this.styleElement = this._document.createElement("style");
            this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
        } const e = this.styleElement.sheet; e.insertRule(t, e.cssRules.length); }
        clear() { for (const t of this.nativeFontFaces)
            this._document.fonts.delete(t); this.nativeFontFaces.clear(); __classPrivateFieldGet(this, _FontLoader_tn, "f").clear(); if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = null;
        } }
        loadSystemFont(_a) {
            return __awaiter(this, arguments, void 0, function* ({ systemFontInfo: t, disableFontFace: e, _inspectFont: i }) { if (t && !__classPrivateFieldGet(this, _FontLoader_tn, "f").has(t.loadedName)) {
                assert(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
                if (this.isFontLoadingAPISupported) {
                    const { loadedName: e, src: n, style: r } = t, s = new FontFace(e, n, r);
                    this.addNativeFontFace(s);
                    try {
                        yield s.load();
                        __classPrivateFieldGet(this, _FontLoader_tn, "f").add(e);
                        i === null || i === void 0 ? void 0 : i(t);
                    }
                    catch (_5) {
                        warn(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`);
                        this.removeNativeFontFace(s);
                    }
                    return;
                }
                unreachable("Not implemented: loadSystemFont without the Font Loading API.");
            } });
        }
        bind(t) {
            return __awaiter(this, void 0, void 0, function* () { if (t.attached || t.missingFile && !t.systemFontInfo)
                return; t.attached = !0; if (t.systemFontInfo) {
                yield this.loadSystemFont(t);
                return;
            } if (this.isFontLoadingAPISupported) {
                const e = t.createNativeFontFace();
                if (e) {
                    this.addNativeFontFace(e);
                    try {
                        yield e.loaded;
                    }
                    catch (i) {
                        warn(`Failed to load font '${e.family}': '${i}'.`);
                        t.disableFontFace = !0;
                        throw i;
                    }
                }
                return;
            } const e = t.createFontFaceRule(); if (e) {
                this.insertRule(e);
                if (this.isSyncFontLoadingSupported)
                    return;
                yield new Promise(e => { const i = this._queueLoadingCallback(e); this._prepareFontLoadEvent(t, i); });
            } });
        }
        get isFontLoadingAPISupported() { var _a; return shadow(this, "isFontLoadingAPISupported", !!((_a = this._document) === null || _a === void 0 ? void 0 : _a.fonts)); }
        get isSyncFontLoadingSupported() { return shadow(this, "isSyncFontLoadingSupported", i || FeatureTest.platform.isFirefox); }
        _queueLoadingCallback(t) { const { loadingRequests: e } = this, i = { done: !1, complete: function completeRequest() { assert(!i.done, "completeRequest() cannot be called twice."); i.done = !0; for (; e.length > 0 && e[0].done;) {
                const t = e.shift();
                setTimeout(t.callback, 0);
            } }, callback: t }; e.push(i); return i; }
        get _loadTestFont() { return shadow(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")); }
        _prepareFontLoadEvent(t, e) { function int32(t, e) { return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3); } function spliceString(t, e, i, n) { return t.substring(0, e) + n + t.substring(e + i); } let i, n; const r = this._document.createElement("canvas"); r.width = 1; r.height = 1; const s = r.getContext("2d"); let a = 0; const o = `lt${Date.now()}${this.loadTestFontId++}`; let l = this._loadTestFont; l = spliceString(l, 976, o.length, o); const h = 1482184792; let c = int32(l, 16); for (i = 0, n = o.length - 3; i < n; i += 4)
            c = c - h + int32(o, i) | 0; i < o.length && (c = c - h + int32(o + "XXX", i) | 0); l = spliceString(l, 16, 4, function string32(t) { return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t); }(c)); const d = `@font-face {font-family:"${o}";src:${`url(data:font/opentype;base64,${btoa(l)});`}}`; this.insertRule(d); const u = this._document.createElement("div"); u.style.visibility = "hidden"; u.style.width = u.style.height = "10px"; u.style.position = "absolute"; u.style.top = u.style.left = "0px"; for (const e of [t.loadedName, o]) {
            const t = this._document.createElement("span");
            t.textContent = "Hi";
            t.style.fontFamily = e;
            u.append(t);
        } this._document.body.append(u); !function isFontReady(t, e) { if (++a > 30) {
            warn("Load test font never loaded.");
            e();
            return;
        } s.font = "30px " + t; s.fillText(".", 0, 20); s.getImageData(0, 0, 1, 1).data[3] > 0 ? e() : setTimeout(isFontReady.bind(null, t, e)); }(o, () => { u.remove(); e.complete(); }); }
    }
    _FontLoader_tn = new WeakMap();
    class FontFaceObject {
        constructor(t, e = null, i, n) {
            this.compiledGlyphs = Object.create(null);
            _FontFaceObject_en.set(this, void 0);
            __classPrivateFieldSet(this, _FontFaceObject_en, t, "f");
            this._inspectFont = e;
            i && (this.charProcOperatorList = i);
            n && Object.assign(this, n);
        }
        createNativeFontFace() { var _a; if (!this.data || this.disableFontFace)
            return null; let t; if (this.cssFontInfo) {
            const e = { weight: this.cssFontInfo.fontWeight };
            this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
            t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
        }
        else
            t = new FontFace(this.loadedName, this.data, {}); (_a = this._inspectFont) === null || _a === void 0 ? void 0 : _a.call(this, this); return t; }
        createFontFaceRule() { var _a; if (!this.data || this.disableFontFace)
            return null; const t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`; let e; if (this.cssFontInfo) {
            let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
            e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
        }
        else
            e = `@font-face {font-family:"${this.loadedName}";src:${t}}`; (_a = this._inspectFont) === null || _a === void 0 ? void 0 : _a.call(this, this, t); return e; }
        getPathGenerator(t, e) { if (void 0 !== this.compiledGlyphs[e])
            return this.compiledGlyphs[e]; const i = this.loadedName + "_path_" + e; let n; try {
            n = t.get(i);
        }
        catch (t) {
            warn(`getPathGenerator - ignoring character: "${t}".`);
        } const r = makePathFromDrawOPS(n === null || n === void 0 ? void 0 : n.path); this.fontExtraProperties || t.delete(i); return this.compiledGlyphs[e] = r; }
        get black() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").black; }
        get bold() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").bold; }
        get disableFontFace() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").disableFontFace; }
        set disableFontFace(t) { shadow(this, "disableFontFace", !!t); }
        get fontExtraProperties() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").fontExtraProperties; }
        get isInvalidPDFjsFont() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").isInvalidPDFjsFont; }
        get isType3Font() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").isType3Font; }
        get italic() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").italic; }
        get missingFile() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").missingFile; }
        get remeasure() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").remeasure; }
        get vertical() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").vertical; }
        get ascent() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").ascent; }
        get defaultWidth() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").defaultWidth; }
        get descent() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").descent; }
        get bbox() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").bbox; }
        get fontMatrix() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").fontMatrix; }
        get fallbackName() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").fallbackName; }
        get loadedName() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").loadedName; }
        get mimetype() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").mimetype; }
        get name() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").name; }
        get data() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").data; }
        clearData() { __classPrivateFieldGet(this, _FontFaceObject_en, "f").clearData(); }
        get cssFontInfo() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").cssFontInfo; }
        get systemFontInfo() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").systemFontInfo; }
        get defaultVMetrics() { return __classPrivateFieldGet(this, _FontFaceObject_en, "f").defaultVMetrics; }
    }
    _FontFaceObject_en = new WeakMap();
    class CSS_FONT_INFO {
    }
    CSS_FONT_INFO.strings = ["fontFamily", "fontWeight", "italicAngle"];
    class SYSTEM_FONT_INFO {
    }
    SYSTEM_FONT_INFO.strings = ["css", "loadedName", "baseFontName", "src"];
    class FONT_INFO {
    }
    _m = FONT_INFO;
    FONT_INFO.bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
    FONT_INFO.numbers = ["ascent", "defaultWidth", "descent"];
    FONT_INFO.strings = ["fallbackName", "loadedName", "mimetype", "name"];
    FONT_INFO.OFFSET_NUMBERS = Math.ceil(2 * _m.bools.length / 8);
    FONT_INFO.OFFSET_BBOX = _m.OFFSET_NUMBERS + 8 * _m.numbers.length;
    FONT_INFO.OFFSET_FONT_MATRIX = _m.OFFSET_BBOX + 1 + 8;
    FONT_INFO.OFFSET_DEFAULT_VMETRICS = _m.OFFSET_FONT_MATRIX + 1 + 48;
    FONT_INFO.OFFSET_STRINGS = _m.OFFSET_DEFAULT_VMETRICS + 1 + 6;
    class PATTERN_INFO {
    }
    PATTERN_INFO.KIND = 0;
    PATTERN_INFO.HAS_BBOX = 1;
    PATTERN_INFO.HAS_BACKGROUND = 2;
    PATTERN_INFO.SHADING_TYPE = 3;
    PATTERN_INFO.N_COORD = 4;
    PATTERN_INFO.N_COLOR = 8;
    PATTERN_INFO.N_STOP = 12;
    PATTERN_INFO.N_FIGURES = 16;
    class CssFontInfo {
        constructor(t) {
            _CssFontInfo_instances.add(this);
            _CssFontInfo_in.set(this, void 0);
            _CssFontInfo_nn.set(this, new TextDecoder);
            _CssFontInfo_rn.set(this, void 0);
            __classPrivateFieldSet(this, _CssFontInfo_in, t, "f");
            __classPrivateFieldSet(this, _CssFontInfo_rn, new DataView(t), "f");
        }
        get fontFamily() { return __classPrivateFieldGet(this, _CssFontInfo_instances, "m", _CssFontInfo_sn).call(this, 0); }
        get fontWeight() { return __classPrivateFieldGet(this, _CssFontInfo_instances, "m", _CssFontInfo_sn).call(this, 1); }
        get italicAngle() { return __classPrivateFieldGet(this, _CssFontInfo_instances, "m", _CssFontInfo_sn).call(this, 2); }
    }
    _CssFontInfo_in = new WeakMap(), _CssFontInfo_nn = new WeakMap(), _CssFontInfo_rn = new WeakMap(), _CssFontInfo_instances = new WeakSet(), _CssFontInfo_sn = function _CssFontInfo_sn(t) { assert(t < CSS_FONT_INFO.strings.length, "Invalid string index"); let e = 0; for (let i = 0; i < t; i++)
        e += __classPrivateFieldGet(this, _CssFontInfo_rn, "f").getUint32(e) + 4; const i = __classPrivateFieldGet(this, _CssFontInfo_rn, "f").getUint32(e); return __classPrivateFieldGet(this, _CssFontInfo_nn, "f").decode(new Uint8Array(__classPrivateFieldGet(this, _CssFontInfo_in, "f"), e + 4, i)); };
    class SystemFontInfo {
        constructor(t) {
            _SystemFontInfo_instances.add(this);
            _SystemFontInfo_in.set(this, void 0);
            _SystemFontInfo_nn.set(this, new TextDecoder);
            _SystemFontInfo_rn.set(this, void 0);
            __classPrivateFieldSet(this, _SystemFontInfo_in, t, "f");
            __classPrivateFieldSet(this, _SystemFontInfo_rn, new DataView(t), "f");
        }
        get guessFallback() { return 0 !== __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint8(0); }
        get css() { return __classPrivateFieldGet(this, _SystemFontInfo_instances, "m", _SystemFontInfo_sn).call(this, 0); }
        get loadedName() { return __classPrivateFieldGet(this, _SystemFontInfo_instances, "m", _SystemFontInfo_sn).call(this, 1); }
        get baseFontName() { return __classPrivateFieldGet(this, _SystemFontInfo_instances, "m", _SystemFontInfo_sn).call(this, 2); }
        get src() { return __classPrivateFieldGet(this, _SystemFontInfo_instances, "m", _SystemFontInfo_sn).call(this, 3); }
        get style() { let t = 1; t += 4 + __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint32(t); const e = __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint32(t), i = __classPrivateFieldGet(this, _SystemFontInfo_nn, "f").decode(new Uint8Array(__classPrivateFieldGet(this, _SystemFontInfo_in, "f"), t + 4, e)); t += 4 + e; const n = __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint32(t); return { style: i, weight: __classPrivateFieldGet(this, _SystemFontInfo_nn, "f").decode(new Uint8Array(__classPrivateFieldGet(this, _SystemFontInfo_in, "f"), t + 4, n)) }; }
    }
    _SystemFontInfo_in = new WeakMap(), _SystemFontInfo_nn = new WeakMap(), _SystemFontInfo_rn = new WeakMap(), _SystemFontInfo_instances = new WeakSet(), _SystemFontInfo_sn = function _SystemFontInfo_sn(t) { assert(t < SYSTEM_FONT_INFO.strings.length, "Invalid string index"); let e = 5; for (let i = 0; i < t; i++)
        e += __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint32(e) + 4; const i = __classPrivateFieldGet(this, _SystemFontInfo_rn, "f").getUint32(e); return __classPrivateFieldGet(this, _SystemFontInfo_nn, "f").decode(new Uint8Array(__classPrivateFieldGet(this, _SystemFontInfo_in, "f"), e + 4, i)); };
    class FontInfo {
        constructor({ buffer: t, extra: e }) {
            _FontInfo_instances.add(this);
            _FontInfo_in.set(this, void 0);
            _FontInfo_nn.set(this, new TextDecoder);
            _FontInfo_rn.set(this, void 0);
            __classPrivateFieldSet(this, _FontInfo_in, t, "f");
            __classPrivateFieldSet(this, _FontInfo_rn, new DataView(t), "f");
            e && Object.assign(this, e);
        }
        get black() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 0); }
        get bold() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 1); }
        get disableFontFace() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 2); }
        get fontExtraProperties() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 3); }
        get isInvalidPDFjsFont() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 4); }
        get isType3Font() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 5); }
        get italic() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 6); }
        get missingFile() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 7); }
        get remeasure() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 8); }
        get vertical() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_an).call(this, 9); }
        get ascent() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_on).call(this, 0); }
        get defaultWidth() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_on).call(this, 1); }
        get descent() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_on).call(this, 2); }
        get bbox() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_ln).call(this, FONT_INFO.OFFSET_BBOX, 4, "getInt16", 2); }
        get fontMatrix() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_ln).call(this, FONT_INFO.OFFSET_FONT_MATRIX, 6, "getFloat64", 8); }
        get defaultVMetrics() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_ln).call(this, FONT_INFO.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2); }
        get fallbackName() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_sn).call(this, 0); }
        get loadedName() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_sn).call(this, 1); }
        get mimetype() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_sn).call(this, 2); }
        get name() { return __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_sn).call(this, 3); }
        get data() { const { offset: t, length: e } = __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_hn).call(this); return 0 === e ? void 0 : new Uint8Array(__classPrivateFieldGet(this, _FontInfo_in, "f"), t + 4, e); }
        clearData() { const { offset: t, length: e } = __classPrivateFieldGet(this, _FontInfo_instances, "m", _FontInfo_hn).call(this); if (0 !== e) {
            __classPrivateFieldGet(this, _FontInfo_rn, "f").setUint32(t, 0);
            __classPrivateFieldSet(this, _FontInfo_in, new Uint8Array(__classPrivateFieldGet(this, _FontInfo_in, "f"), 0, t + 4).slice().buffer, "f");
            __classPrivateFieldSet(this, _FontInfo_rn, new DataView(__classPrivateFieldGet(this, _FontInfo_in, "f")), "f");
        } }
        get cssFontInfo() { let t = FONT_INFO.OFFSET_STRINGS; t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); const e = __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); if (0 === e)
            return null; const i = new Uint8Array(e); i.set(new Uint8Array(__classPrivateFieldGet(this, _FontInfo_in, "f"), t + 4, e)); return new CssFontInfo(i.buffer); }
        get systemFontInfo() { let t = FONT_INFO.OFFSET_STRINGS; t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); const e = __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); if (0 === e)
            return null; const i = new Uint8Array(e); i.set(new Uint8Array(__classPrivateFieldGet(this, _FontInfo_in, "f"), t + 4, e)); return new SystemFontInfo(i.buffer); }
    }
    _FontInfo_in = new WeakMap(), _FontInfo_nn = new WeakMap(), _FontInfo_rn = new WeakMap(), _FontInfo_instances = new WeakSet(), _FontInfo_an = function _FontInfo_an(t) { assert(t < FONT_INFO.bools.length, "Invalid boolean index"); const e = Math.floor(t / 4), i = 2 * t % 8, n = __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint8(e) >> i & 3; return 0 === n ? void 0 : 2 === n; }, _FontInfo_on = function _FontInfo_on(t) { assert(t < FONT_INFO.numbers.length, "Invalid number index"); return __classPrivateFieldGet(this, _FontInfo_rn, "f").getFloat64(FONT_INFO.OFFSET_NUMBERS + 8 * t); }, _FontInfo_ln = function _FontInfo_ln(t, e, i, n) { const r = __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint8(t); if (0 === r)
        return; assert(r === e, "Invalid array length."); t += 1; const s = new Array(r); for (let e = 0; e < r; e++) {
        s[e] = __classPrivateFieldGet(this, _FontInfo_rn, "f")[i](t, !0);
        t += n;
    } return s; }, _FontInfo_sn = function _FontInfo_sn(t) { assert(t < FONT_INFO.strings.length, "Invalid string index"); let e = FONT_INFO.OFFSET_STRINGS + 4; for (let i = 0; i < t; i++)
        e += __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(e) + 4; const i = __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(e); return __classPrivateFieldGet(this, _FontInfo_nn, "f").decode(new Uint8Array(__classPrivateFieldGet(this, _FontInfo_in, "f"), e + 4, i)); }, _FontInfo_hn = function _FontInfo_hn() { let t = FONT_INFO.OFFSET_STRINGS; t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); t += 4 + __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t); return { offset: t, length: __classPrivateFieldGet(this, _FontInfo_rn, "f").getUint32(t) }; };
    class PatternInfo {
        constructor(t) { this.buffer = t; this.view = new DataView(t); this.data = new Uint8Array(t); }
        getIR() { const t = this.view, e = this.data[PATTERN_INFO.KIND], i = !!this.data[PATTERN_INFO.HAS_BBOX], n = !!this.data[PATTERN_INFO.HAS_BACKGROUND], r = t.getUint32(PATTERN_INFO.N_COORD, !0), s = t.getUint32(PATTERN_INFO.N_COLOR, !0), a = t.getUint32(PATTERN_INFO.N_STOP, !0), o = t.getUint32(PATTERN_INFO.N_FIGURES, !0); let l = 20; const h = new Float32Array(this.buffer, l, 2 * r); l += 8 * r; const c = new Uint8Array(this.buffer, l, 3 * s); l += 3 * s; const d = []; for (let e = 0; e < a; ++e) {
            const e = t.getFloat32(l, !0);
            l += 4;
            const i = t.getUint32(l, !0);
            l += 4;
            d.push([e, `#${i.toString(16).padStart(6, "0")}`]);
        } let u = null; if (i) {
            u = [];
            for (let e = 0; e < 4; ++e) {
                u.push(t.getFloat32(l, !0));
                l += 4;
            }
        } let p = null; if (n) {
            p = new Uint8Array(this.buffer, l, 3);
            l += 3;
        } const g = []; for (let e = 0; e < o; ++e) {
            const e = t.getUint8(l);
            l += 1;
            l = 4 * Math.ceil(l / 4);
            const i = t.getUint32(l, !0);
            l += 4;
            const n = new Int32Array(this.buffer, l, i);
            l += 4 * i;
            const r = t.getUint32(l, !0);
            l += 4;
            const s = new Int32Array(this.buffer, l, r);
            l += 4 * r;
            const a = { type: e, coords: n, colors: s };
            if (e === v) {
                a.verticesPerRow = t.getUint32(l, !0);
                l += 4;
            }
            g.push(a);
        } if (1 === e)
            return ["RadialAxial", "axial", u, d, Array.from(h.slice(0, 2)), Array.from(h.slice(2, 4)), null, null]; if (2 === e)
            return ["RadialAxial", "radial", u, d, [h[0], h[1]], [h[3], h[4]], h[2], h[5]]; if (3 === e) {
            const t = this.data[PATTERN_INFO.SHADING_TYPE];
            let e = null;
            if (h.length > 0) {
                e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
                for (let t = 0, i = h.length; t < i; t += 2)
                    Util.pointBoundingBox(h[t], h[t + 1], e);
            }
            return ["Mesh", t, h, c, g, e, u, p];
        } throw new Error(`Unsupported pattern kind: ${e}`); }
    }
    class FontPathInfo {
        constructor(t) {
            _FontPathInfo_in.set(this, void 0);
            __classPrivateFieldSet(this, _FontPathInfo_in, t, "f");
        }
        get path() { return FeatureTest.isFloat16ArraySupported ? new Float16Array(__classPrivateFieldGet(this, _FontPathInfo_in, "f")) : new Float32Array(__classPrivateFieldGet(this, _FontPathInfo_in, "f")); }
    }
    _FontPathInfo_in = new WeakMap();
    function getFactoryUrlProp(t) { if ("string" != typeof t)
        return null; if (t.endsWith("/"))
        return t; throw new Error(`Invalid factory url: "${t}" must include trailing slash.`); }
    const isRefProxy = t => "object" == typeof t && Number.isInteger(t === null || t === void 0 ? void 0 : t.num) && t.num >= 0 && Number.isInteger(t === null || t === void 0 ? void 0 : t.gen) && t.gen >= 0, pt = function _isValidExplicitDest(t, e, i) { if (!Array.isArray(i) || i.length < 2)
        return !1; const [n, r, ...s] = i; if (!t(n) && !Number.isInteger(n))
        return !1; if (!e(r))
        return !1; const a = s.length; let o = !0; switch (r.name) {
        case "XYZ":
            if (a < 2 || a > 3)
                return !1;
            break;
        case "Fit":
        case "FitB": return 0 === a;
        case "FitH":
        case "FitBH":
        case "FitV":
        case "FitBV":
            if (a > 1)
                return !1;
            break;
        case "FitR":
            if (4 !== a)
                return !1;
            o = !1;
            break;
        default: return !1;
    } for (const t of s)
        if (!("number" == typeof t || o && null === t))
            return !1; return !0; }.bind(null, isRefProxy, t => "object" == typeof t && "string" == typeof (t === null || t === void 0 ? void 0 : t.name));
    class LoopbackPort {
        constructor() {
            _LoopbackPort_cn.set(this, new Map);
            _LoopbackPort_dn.set(this, Promise.resolve());
        }
        postMessage(t, e) { const i = { data: structuredClone(t, e ? { transfer: e } : null) }; __classPrivateFieldGet(this, _LoopbackPort_dn, "f").then(() => { for (const [t] of __classPrivateFieldGet(this, _LoopbackPort_cn, "f"))
            t.call(this, i); }); }
        addEventListener(t, e, i = null) { let n = null; if ((i === null || i === void 0 ? void 0 : i.signal) instanceof AbortSignal) {
            const { signal: r } = i;
            if (r.aborted) {
                warn("LoopbackPort - cannot use an `aborted` signal.");
                return;
            }
            const onAbort = () => this.removeEventListener(t, e);
            n = () => r.removeEventListener("abort", onAbort);
            r.addEventListener("abort", onAbort);
        } __classPrivateFieldGet(this, _LoopbackPort_cn, "f").set(e, n); }
        removeEventListener(t, e) { const i = __classPrivateFieldGet(this, _LoopbackPort_cn, "f").get(e); i === null || i === void 0 ? void 0 : i(); __classPrivateFieldGet(this, _LoopbackPort_cn, "f").delete(e); }
        terminate() { for (const [, t] of __classPrivateFieldGet(this, _LoopbackPort_cn, "f"))
            t === null || t === void 0 ? void 0 : t(); __classPrivateFieldGet(this, _LoopbackPort_cn, "f").clear(); }
    }
    _LoopbackPort_cn = new WeakMap(), _LoopbackPort_dn = new WeakMap();
    __webpack_require__(1689);
    const gt = 1, mt = 2, ft = 1, bt = 2, yt = 3, vt = 4, wt = 5, At = 6, xt = 7, Et = 8;
    function onFn() { }
    function wrapReason(t) { if (t instanceof AbortException || t instanceof InvalidPDFException || t instanceof PasswordException || t instanceof ResponseException || t instanceof UnknownErrorException)
        return t; t instanceof Error || "object" == typeof t && null !== t || unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.'); switch (t.name) {
        case "AbortException": return new AbortException(t.message);
        case "InvalidPDFException": return new InvalidPDFException(t.message);
        case "PasswordException": return new PasswordException(t.message, t.code);
        case "ResponseException": return new ResponseException(t.message, t.status, t.missing);
        case "UnknownErrorException": return new UnknownErrorException(t.message, t.details);
    } return new UnknownErrorException(t.message, t.toString()); }
    class MessageHandler {
        constructor(t, e, i) {
            _MessageHandler_instances.add(this);
            _MessageHandler_un.set(this, new AbortController);
            this.sourceName = t;
            this.targetName = e;
            this.comObj = i;
            this.callbackId = 1;
            this.streamId = 1;
            this.streamSinks = Object.create(null);
            this.streamControllers = Object.create(null);
            this.callbackCapabilities = Object.create(null);
            this.actionHandler = Object.create(null);
            i.addEventListener("message", __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_pn).bind(this), { signal: __classPrivateFieldGet(this, _MessageHandler_un, "f").signal });
        }
        on(t, e) { const i = this.actionHandler; if (i[t])
            throw new Error(`There is already an actionName called "${t}"`); i[t] = e; }
        send(t, e, i) { this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, data: e }, i); }
        sendWithPromise(t, e, i) { const n = this.callbackId++, r = Promise.withResolvers(); this.callbackCapabilities[n] = r; try {
            this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: n, data: e }, i);
        }
        catch (t) {
            r.reject(t);
        } return r.promise; }
        sendWithStream(t, e, i, n) { const r = this.streamId++, s = this.sourceName, a = this.targetName, o = this.comObj; return new ReadableStream({ start: i => { const l = Promise.withResolvers(); this.streamControllers[r] = { controller: i, startCall: l, pullCall: null, cancelCall: null, isClosed: !1 }; o.postMessage({ sourceName: s, targetName: a, action: t, streamId: r, data: e, desiredSize: i.desiredSize }, n); return l.promise; }, pull: t => { const e = Promise.withResolvers(); this.streamControllers[r].pullCall = e; o.postMessage({ sourceName: s, targetName: a, stream: At, streamId: r, desiredSize: t.desiredSize }); return e.promise; }, cancel: t => { assert(t instanceof Error, "cancel must have a valid reason"); const e = Promise.withResolvers(); this.streamControllers[r].cancelCall = e; this.streamControllers[r].isClosed = !0; o.postMessage({ sourceName: s, targetName: a, stream: ft, streamId: r, reason: wrapReason(t) }); return e.promise; } }, i); }
        destroy() { var _a; (_a = __classPrivateFieldGet(this, _MessageHandler_un, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _MessageHandler_un, null, "f"); }
    }
    _MessageHandler_un = new WeakMap(), _MessageHandler_instances = new WeakSet(), _MessageHandler_pn = function _MessageHandler_pn({ data: t }) { if (t.targetName !== this.sourceName)
        return; if (t.stream) {
        __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_gn).call(this, t);
        return;
    } if (t.callback) {
        const e = t.callbackId, i = this.callbackCapabilities[e];
        if (!i)
            throw new Error(`Cannot resolve callback ${e}`);
        delete this.callbackCapabilities[e];
        if (t.callback === gt)
            i.resolve(t.data);
        else {
            if (t.callback !== mt)
                throw new Error("Unexpected callback case");
            i.reject(wrapReason(t.reason));
        }
        return;
    } const e = this.actionHandler[t.action]; if (!e)
        throw new Error(`Unknown action from worker: ${t.action}`); if (t.callbackId) {
        const i = this.sourceName, n = t.sourceName, r = this.comObj;
        Promise.try(e, t.data).then(function (e) { r.postMessage({ sourceName: i, targetName: n, callback: gt, callbackId: t.callbackId, data: e }); }, function (e) { r.postMessage({ sourceName: i, targetName: n, callback: mt, callbackId: t.callbackId, reason: wrapReason(e) }); });
        return;
    } t.streamId ? __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_mn).call(this, t) : e(t.data); }, _MessageHandler_mn = function _MessageHandler_mn(t) { const e = t.streamId, i = this.sourceName, n = t.sourceName, r = this.comObj, s = this, a = this.actionHandler[t.action], o = { enqueue(t, s = 1, a) { if (this.isCancelled)
            return; const o = this.desiredSize; this.desiredSize -= s; if (o > 0 && this.desiredSize <= 0) {
            this.sinkCapability = Promise.withResolvers();
            this.ready = this.sinkCapability.promise;
        } r.postMessage({ sourceName: i, targetName: n, stream: vt, streamId: e, chunk: t }, a); }, close() { if (!this.isCancelled) {
            this.isCancelled = !0;
            r.postMessage({ sourceName: i, targetName: n, stream: yt, streamId: e });
            delete s.streamSinks[e];
        } }, error(t) { assert(t instanceof Error, "error must have a valid reason"); if (!this.isCancelled) {
            this.isCancelled = !0;
            r.postMessage({ sourceName: i, targetName: n, stream: wt, streamId: e, reason: wrapReason(t) });
        } }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: t.desiredSize, ready: null }; o.sinkCapability.resolve(); o.ready = o.sinkCapability.promise; this.streamSinks[e] = o; Promise.try(a, t.data, o).then(function () { r.postMessage({ sourceName: i, targetName: n, stream: Et, streamId: e, success: !0 }); }, function (t) { r.postMessage({ sourceName: i, targetName: n, stream: Et, streamId: e, reason: wrapReason(t) }); }); }, _MessageHandler_gn = function _MessageHandler_gn(t) { const e = t.streamId, i = this.sourceName, n = t.sourceName, r = this.comObj, s = this.streamControllers[e], a = this.streamSinks[e]; switch (t.stream) {
        case Et:
            t.success ? s.startCall.resolve() : s.startCall.reject(wrapReason(t.reason));
            break;
        case xt:
            t.success ? s.pullCall.resolve() : s.pullCall.reject(wrapReason(t.reason));
            break;
        case At:
            if (!a) {
                r.postMessage({ sourceName: i, targetName: n, stream: xt, streamId: e, success: !0 });
                break;
            }
            a.desiredSize <= 0 && t.desiredSize > 0 && a.sinkCapability.resolve();
            a.desiredSize = t.desiredSize;
            Promise.try(a.onPull || onFn).then(function () { r.postMessage({ sourceName: i, targetName: n, stream: xt, streamId: e, success: !0 }); }, function (t) { r.postMessage({ sourceName: i, targetName: n, stream: xt, streamId: e, reason: wrapReason(t) }); });
            break;
        case vt:
            assert(s, "enqueue should have stream controller");
            if (s.isClosed)
                break;
            s.controller.enqueue(t.chunk);
            break;
        case yt:
            assert(s, "close should have stream controller");
            if (s.isClosed)
                break;
            s.isClosed = !0;
            s.controller.close();
            __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_fn).call(this, s, e);
            break;
        case wt:
            assert(s, "error should have stream controller");
            s.controller.error(wrapReason(t.reason));
            __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_fn).call(this, s, e);
            break;
        case bt:
            t.success ? s.cancelCall.resolve() : s.cancelCall.reject(wrapReason(t.reason));
            __classPrivateFieldGet(this, _MessageHandler_instances, "m", _MessageHandler_fn).call(this, s, e);
            break;
        case ft:
            if (!a)
                break;
            const o = wrapReason(t.reason);
            Promise.try(a.onCancel || onFn, o).then(function () { r.postMessage({ sourceName: i, targetName: n, stream: bt, streamId: e, success: !0 }); }, function (t) { r.postMessage({ sourceName: i, targetName: n, stream: bt, streamId: e, reason: wrapReason(t) }); });
            a.sinkCapability.reject(o);
            a.isCancelled = !0;
            delete this.streamSinks[e];
            break;
        default: throw new Error("Unexpected stream case");
    } }, _MessageHandler_fn = function _MessageHandler_fn(t, e) {
        return __awaiter(this, void 0, void 0, function* () { var _a, _5, _6; yield Promise.allSettled([(_a = t.startCall) === null || _a === void 0 ? void 0 : _a.promise, (_5 = t.pullCall) === null || _5 === void 0 ? void 0 : _5.promise, (_6 = t.cancelCall) === null || _6 === void 0 ? void 0 : _6.promise]); delete this.streamControllers[e]; });
    };
    class BaseBinaryDataFactory {
        constructor({ cMapUrl: t = null, standardFontDataUrl: e = null, wasmUrl: i = null }) {
            _BaseBinaryDataFactory_bn.set(this, Object.freeze({ cMapUrl: "CMap", standardFontDataUrl: "font", wasmUrl: "wasm" }));
            this.cMapUrl = t;
            this.standardFontDataUrl = e;
            this.wasmUrl = i;
        }
        fetch(_a) {
            return __awaiter(this, arguments, void 0, function* ({ kind: t, filename: e }) { switch (t) {
                case "cMapUrl":
                case "standardFontDataUrl":
                case "wasmUrl": break;
                default: unreachable(`Not implemented: ${t}`);
            } const i = this[t]; if (!i)
                throw new Error(`Ensure that the \`${t}\` API parameter is provided.`); const n = `${i}${e}`; return this._fetch(n, t).catch(e => { throw new Error(`Unable to load ${__classPrivateFieldGet(this, _BaseBinaryDataFactory_bn, "f")[t]} data at: ${n}`); }); });
        }
        _fetch(t, e) {
            return __awaiter(this, void 0, void 0, function* () { unreachable("Abstract method `_fetch` called."); });
        }
    }
    _BaseBinaryDataFactory_bn = new WeakMap();
    class DOMBinaryDataFactory extends BaseBinaryDataFactory {
        _fetch(t, e) {
            return __awaiter(this, void 0, void 0, function* () { const i = "cMapUrl" !== e || t.endsWith(".bcmap") ? "bytes" : "text", n = yield fetchData(t, i); return n instanceof Uint8Array ? n : stringToBytes(n); });
        }
    }
    class BaseCanvasFactory {
        constructor({ enableHWA: t = !1 }) {
            _BaseCanvasFactory_yn.set(this, !1);
            __classPrivateFieldSet(this, _BaseCanvasFactory_yn, t, "f");
        }
        create(t, e) { if (t <= 0 || e <= 0)
            throw new Error("Invalid canvas size"); const i = this._createCanvas(t, e); return { canvas: i, context: i.getContext("2d", { willReadFrequently: !__classPrivateFieldGet(this, _BaseCanvasFactory_yn, "f") }) }; }
        reset({ canvas: t }, e, i) { if (!t)
            throw new Error("Canvas is not specified"); if (e <= 0 || i <= 0)
            throw new Error("Invalid canvas size"); t.width = e; t.height = i; }
        destroy(t) { const { canvas: e } = t; if (!e)
            throw new Error("Canvas is not specified"); e.width = e.height = 0; t.canvas = null; t.context = null; }
        _createCanvas(t, e) { unreachable("Abstract method `_createCanvas` called."); }
    }
    _BaseCanvasFactory_yn = new WeakMap();
    class DOMCanvasFactory extends BaseCanvasFactory {
        constructor({ ownerDocument: t = globalThis.document, enableHWA: e = !1 }) { super({ enableHWA: e }); this._document = t; }
        _createCanvas(t, e) { const i = this._document.createElement("canvas"); i.width = t; i.height = e; return i; }
    }
    __webpack_require__(2489);
    class BaseFilterFactory {
        addFilter(t) { return "none"; }
        addHCMFilter(t, e) { return "none"; }
        addAlphaFilter(t) { return "none"; }
        addLuminosityFilter(t) { return "none"; }
        addHighlightHCMFilter(t, e, i, n, r) { return "none"; }
        destroy(t = !1) { }
    }
    class DOMFilterFactory extends BaseFilterFactory {
        constructor({ docId: t, ownerDocument: e = globalThis.document }) {
            super();
            _DOMFilterFactory_instances.add(this);
            _DOMFilterFactory_vn.set(this, void 0);
            _DOMFilterFactory_wn.set(this, void 0);
            _DOMFilterFactory_An.set(this, void 0);
            _DOMFilterFactory_xn.set(this, void 0);
            _DOMFilterFactory_En.set(this, void 0);
            _DOMFilterFactory__n.set(this, void 0);
            _DOMFilterFactory_S.set(this, 0);
            __classPrivateFieldSet(this, _DOMFilterFactory_xn, t, "f");
            __classPrivateFieldSet(this, _DOMFilterFactory_En, e, "f");
        }
        addFilter(t) { var _a, _5; if (!t)
            return "none"; let e = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(t); if (e)
            return e; const [i, n, r] = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Cn).call(this, t), s = 1 === t.length ? i : `${i}${n}${r}`; e = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(s); if (e) {
            __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, e);
            return e;
        } const a = `g_${__classPrivateFieldGet(this, _DOMFilterFactory_xn, "f")}_transfer_map_${__classPrivateFieldSet(this, _DOMFilterFactory_S, (_5 = __classPrivateFieldGet(this, _DOMFilterFactory_S, "f"), _a = _5++, _5), "f"), _a}`, o = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Dn).call(this, a); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, o); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(s, o); const l = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Pn).call(this, a); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Mn).call(this, i, n, r, l); return o; }
        addHCMFilter(t, e) { var _a; const i = `${t}-${e}`, n = "base"; let r = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Tn_get).get(n); if ((r === null || r === void 0 ? void 0 : r.key) === i)
            return r.url; if (r) {
            (_a = r.filter) === null || _a === void 0 ? void 0 : _a.remove();
            r.key = i;
            r.url = "none";
            r.filter = null;
        }
        else {
            r = { key: i, url: "none", filter: null };
            __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Tn_get).set(n, r);
        } if (!t || !e)
            return r.url; const s = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_kn).call(this, t); t = Util.makeHexColor(...s); const a = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_kn).call(this, e); e = Util.makeHexColor(...a); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Sn_get).style.color = ""; if ("#000000" === t && "#ffffff" === e || t === e)
            return r.url; const o = new Array(256); for (let t = 0; t <= 255; t++) {
            const e = t / 255;
            o[t] = e <= .03928 ? e / 12.92 : Math.pow(((e + .055) / 1.055), 2.4);
        } const l = o.join(","), h = `g_${__classPrivateFieldGet(this, _DOMFilterFactory_xn, "f")}_hcm_filter`, c = r.filter = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Pn).call(this, h); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Mn).call(this, l, l, l, c); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_In).call(this, c); const getSteps = (t, e) => { const i = s[t] / 255, n = a[t] / 255, r = new Array(e + 1); for (let t = 0; t <= e; t++)
            r[t] = i + t / e * (n - i); return r.join(","); }; __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Mn).call(this, getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), c); r.url = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Dn).call(this, h); return r.url; }
        addAlphaFilter(t) { var _a, _5; let e = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(t); if (e)
            return e; const [i] = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Cn).call(this, [t]), n = `alpha_${i}`; e = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(n); if (e) {
            __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, e);
            return e;
        } const r = `g_${__classPrivateFieldGet(this, _DOMFilterFactory_xn, "f")}_alpha_map_${__classPrivateFieldSet(this, _DOMFilterFactory_S, (_5 = __classPrivateFieldGet(this, _DOMFilterFactory_S, "f"), _a = _5++, _5), "f"), _a}`, s = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Dn).call(this, r); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, s); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(n, s); const a = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Pn).call(this, r); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Fn).call(this, i, a); return s; }
        addLuminosityFilter(t) { var _a, _5; let e, i, n = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(t || "luminosity"); if (n)
            return n; if (t) {
            [e] = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Cn).call(this, [t]);
            i = `luminosity_${e}`;
        }
        else
            i = "luminosity"; n = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).get(i); if (n) {
            __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, n);
            return n;
        } const r = `g_${__classPrivateFieldGet(this, _DOMFilterFactory_xn, "f")}_luminosity_map_${__classPrivateFieldSet(this, _DOMFilterFactory_S, (_5 = __classPrivateFieldGet(this, _DOMFilterFactory_S, "f"), _a = _5++, _5), "f"), _a}`, s = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Dn).call(this, r); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(t, s); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_D_get).set(i, s); const a = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Pn).call(this, r); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Rn).call(this, a); t && __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Fn).call(this, e, a); return s; }
        addHighlightHCMFilter(t, e, i, n, r) { var _a; const s = `${e}-${i}-${n}-${r}`; let a = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Tn_get).get(t); if ((a === null || a === void 0 ? void 0 : a.key) === s)
            return a.url; if (a) {
            (_a = a.filter) === null || _a === void 0 ? void 0 : _a.remove();
            a.key = s;
            a.url = "none";
            a.filter = null;
        }
        else {
            a = { key: s, url: "none", filter: null };
            __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Tn_get).set(t, a);
        } if (!e || !i)
            return a.url; const [o, l] = [e, i].map(__classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_kn).bind(this)); let h = Math.round(.2126 * o[0] + .7152 * o[1] + .0722 * o[2]), c = Math.round(.2126 * l[0] + .7152 * l[1] + .0722 * l[2]), [d, u] = [n, r].map(__classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_kn).bind(this)); c < h && ([h, c, d, u] = [c, h, u, d]); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Sn_get).style.color = ""; const getSteps = (t, e, i) => { const n = new Array(256), r = (c - h) / i, s = t / 255, a = (e - t) / (255 * i); let o = 0; for (let t = 0; t <= i; t++) {
            const e = Math.round(h + t * r), i = s + t * a;
            for (let t = o; t <= e; t++)
                n[t] = i;
            o = e + 1;
        } for (let t = o; t < 256; t++)
            n[t] = n[o - 1]; return n.join(","); }, p = `g_${__classPrivateFieldGet(this, _DOMFilterFactory_xn, "f")}_hcm_${t}_filter`, g = a.filter = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Pn).call(this, p); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_In).call(this, g); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Mn).call(this, getSteps(d[0], u[0], 5), getSteps(d[1], u[1], 5), getSteps(d[2], u[2], 5), g); a.url = __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Dn).call(this, p); return a.url; }
        destroy(t = !1) { var _a, _5, _6, _7; if (!t || !((_a = __classPrivateFieldGet(this, _DOMFilterFactory__n, "f")) === null || _a === void 0 ? void 0 : _a.size)) {
            (_5 = __classPrivateFieldGet(this, _DOMFilterFactory_An, "f")) === null || _5 === void 0 ? void 0 : _5.parentNode.parentNode.remove();
            __classPrivateFieldSet(this, _DOMFilterFactory_An, null, "f");
            (_6 = __classPrivateFieldGet(this, _DOMFilterFactory_wn, "f")) === null || _6 === void 0 ? void 0 : _6.clear();
            __classPrivateFieldSet(this, _DOMFilterFactory_wn, null, "f");
            (_7 = __classPrivateFieldGet(this, _DOMFilterFactory__n, "f")) === null || _7 === void 0 ? void 0 : _7.clear();
            __classPrivateFieldSet(this, _DOMFilterFactory__n, null, "f");
            __classPrivateFieldSet(this, _DOMFilterFactory_S, 0, "f");
        } }
    }
    _DOMFilterFactory_vn = new WeakMap(), _DOMFilterFactory_wn = new WeakMap(), _DOMFilterFactory_An = new WeakMap(), _DOMFilterFactory_xn = new WeakMap(), _DOMFilterFactory_En = new WeakMap(), _DOMFilterFactory__n = new WeakMap(), _DOMFilterFactory_S = new WeakMap(), _DOMFilterFactory_instances = new WeakSet(), _DOMFilterFactory_D_get = function _DOMFilterFactory_D_get() { return __classPrivateFieldSet(this, _DOMFilterFactory_wn, __classPrivateFieldGet(this, _DOMFilterFactory_wn, "f") || new Map, "f"); }, _DOMFilterFactory_Tn_get = function _DOMFilterFactory_Tn_get() { return __classPrivateFieldSet(this, _DOMFilterFactory__n, __classPrivateFieldGet(this, _DOMFilterFactory__n, "f") || new Map, "f"); }, _DOMFilterFactory_Sn_get = function _DOMFilterFactory_Sn_get() { if (!__classPrivateFieldGet(this, _DOMFilterFactory_An, "f")) {
        const t = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElement("div"), { style: e } = t;
        e.visibility = "hidden";
        e.contain = "strict";
        e.width = e.height = 0;
        e.position = "absolute";
        e.top = e.left = 0;
        e.zIndex = -1;
        const i = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "svg");
        i.setAttribute("width", 0);
        i.setAttribute("height", 0);
        __classPrivateFieldSet(this, _DOMFilterFactory_An, __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "defs"), "f");
        t.append(i);
        i.append(__classPrivateFieldGet(this, _DOMFilterFactory_An, "f"));
        __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").body.append(t);
    } return __classPrivateFieldGet(this, _DOMFilterFactory_An, "f"); }, _DOMFilterFactory_Cn = function _DOMFilterFactory_Cn(t) { if (1 === t.length) {
        const e = t[0], i = new Array(256);
        for (let t = 0; t < 256; t++)
            i[t] = e[t] / 255;
        const n = i.join(",");
        return [n, n, n];
    } const [e, i, n] = t, r = new Array(256), s = new Array(256), a = new Array(256); for (let t = 0; t < 256; t++) {
        r[t] = e[t] / 255;
        s[t] = i[t] / 255;
        a[t] = n[t] / 255;
    } return [r.join(","), s.join(","), a.join(",")]; }, _DOMFilterFactory_Dn = function _DOMFilterFactory_Dn(t) { if (void 0 === __classPrivateFieldGet(this, _DOMFilterFactory_vn, "f")) {
        __classPrivateFieldSet(this, _DOMFilterFactory_vn, "", "f");
        const t = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").URL;
        t !== __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").baseURI && (isDataScheme(t) ? warn('#createUrl: ignore "data:"-URL for performance reasons.') : __classPrivateFieldSet(this, _DOMFilterFactory_vn, updateUrlHash(t, ""), "f"));
    } return `url(${__classPrivateFieldGet(this, _DOMFilterFactory_vn, "f")}#${t})`; }, _DOMFilterFactory_Rn = function _DOMFilterFactory_Rn(t) { const e = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "feColorMatrix"); e.setAttribute("type", "matrix"); e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"); t.append(e); }, _DOMFilterFactory_In = function _DOMFilterFactory_In(t) { const e = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "feColorMatrix"); e.setAttribute("type", "matrix"); e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"); t.append(e); }, _DOMFilterFactory_Pn = function _DOMFilterFactory_Pn(t) { const e = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "filter"); e.setAttribute("color-interpolation-filters", "sRGB"); e.setAttribute("id", t); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Sn_get).append(e); return e; }, _DOMFilterFactory_Bn = function _DOMFilterFactory_Bn(t, e, i) { const n = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, e); n.setAttribute("type", "discrete"); n.setAttribute("tableValues", i); t.append(n); }, _DOMFilterFactory_Mn = function _DOMFilterFactory_Mn(t, e, i, n) { const r = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "feComponentTransfer"); n.append(r); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Bn).call(this, r, "feFuncR", t); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Bn).call(this, r, "feFuncG", e); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Bn).call(this, r, "feFuncB", i); }, _DOMFilterFactory_Fn = function _DOMFilterFactory_Fn(t, e) { const i = __classPrivateFieldGet(this, _DOMFilterFactory_En, "f").createElementNS(X, "feComponentTransfer"); e.append(i); __classPrivateFieldGet(this, _DOMFilterFactory_instances, "m", _DOMFilterFactory_Bn).call(this, i, "feFuncA", t); }, _DOMFilterFactory_kn = function _DOMFilterFactory_kn(t) { __classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Sn_get).style.color = t; return getRGB(getComputedStyle(__classPrivateFieldGet(this, _DOMFilterFactory_instances, "a", _DOMFilterFactory_Sn_get)).getPropertyValue("color")); };
    if (i) {
        let t;
        try {
            const e = process.getBuiltinModule("module").createRequire((self.location && self.location.href || ''));
            try {
                t = e("@napi-rs/canvas");
            }
            catch (t) {
                warn(`Cannot load "@napi-rs/canvas" package: "${t}".`);
            }
        }
        catch (t) {
            warn(`Cannot access the \`require\` function: "${t}".`);
        }
        globalThis.DOMMatrix || ((t === null || t === void 0 ? void 0 : t.DOMMatrix) ? globalThis.DOMMatrix = t.DOMMatrix : warn("Cannot polyfill `DOMMatrix`, rendering may be broken."));
        globalThis.ImageData || ((t === null || t === void 0 ? void 0 : t.ImageData) ? globalThis.ImageData = t.ImageData : warn("Cannot polyfill `ImageData`, rendering may be broken."));
        globalThis.Path2D || ((t === null || t === void 0 ? void 0 : t.Path2D) ? globalThis.Path2D = t.Path2D : warn("Cannot polyfill `Path2D`, rendering may be broken."));
        ((_a = globalThis.navigator) === null || _a === void 0 ? void 0 : _a.language) || (globalThis.navigator = { language: "en-US", platform: "", userAgent: "" });
    }
    class NodeFilterFactory extends BaseFilterFactory {
    }
    class NodeCanvasFactory extends BaseCanvasFactory {
        _createCanvas(t, e) { return process.getBuiltinModule("module").createRequire((self.location && self.location.href || ''))("@napi-rs/canvas").createCanvas(t, e); }
    }
    class NodeBinaryDataFactory extends BaseBinaryDataFactory {
        _fetch(t, e) {
            return __awaiter(this, void 0, void 0, function* () { return function node_utils_fetchData(t) {
                return __awaiter(this, void 0, void 0, function* () { const e = process.getBuiltinModule("fs"), i = yield e.promises.readFile(t); return new Uint8Array(i); });
            }(t); });
        }
    }
    const _t = new (_o = class WebGPUMesh {
            constructor() {
                _WebGPUMesh_instances.add(this);
                _WebGPUMesh_On.set(this, null);
                _WebGPUMesh_Ln.set(this, null);
                _WebGPUMesh_Nn.set(this, null);
                _WebGPUMesh_Un.set(this, null);
            }
            init() { null === __classPrivateFieldGet(this, _WebGPUMesh_On, "f") && (__classPrivateFieldSet(this, _WebGPUMesh_On, __classPrivateFieldGet(this, _WebGPUMesh_instances, "m", _WebGPUMesh_Hn).call(this), "f")); }
            get isReady() { return null !== __classPrivateFieldGet(this, _WebGPUMesh_Ln, "f"); }
            draw(t, e, i, n, r, s) { const a = __classPrivateFieldGet(this, _WebGPUMesh_Ln, "f"), { offsetX: o, offsetY: l, scaleX: h, scaleY: c } = e, { posData: d, colData: u, vertexCount: p } = __classPrivateFieldGet(this, _WebGPUMesh_instances, "m", _WebGPUMesh_zn).call(this, t, e), g = a.createBuffer({ size: Math.max(d.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }); d.byteLength > 0 && a.queue.writeBuffer(g, 0, d); const m = a.createBuffer({ size: Math.max(u.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }); u.byteLength > 0 && a.queue.writeBuffer(m, 0, u); const f = a.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }); a.queue.writeBuffer(f, 0, new Float32Array([o, l, h, c, n, r, s, 0])); const b = a.createBindGroup({ layout: __classPrivateFieldGet(this, _WebGPUMesh_Nn, "f").getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: f } }] }), y = new OffscreenCanvas(n, r), v = y.getContext("webgpu"); v.configure({ device: a, format: __classPrivateFieldGet(this, _WebGPUMesh_Un, "f"), alphaMode: i ? "opaque" : "premultiplied" }); const w = i ? { r: i[0] / 255, g: i[1] / 255, b: i[2] / 255, a: 1 } : { r: 0, g: 0, b: 0, a: 0 }, A = a.createCommandEncoder(), x = A.beginRenderPass({ colorAttachments: [{ view: v.getCurrentTexture().createView(), clearValue: w, loadOp: "clear", storeOp: "store" }] }); if (p > 0) {
                x.setPipeline(__classPrivateFieldGet(this, _WebGPUMesh_Nn, "f"));
                x.setBindGroup(0, b);
                x.setVertexBuffer(0, g);
                x.setVertexBuffer(1, m);
                x.draw(p);
            } x.end(); a.queue.submit([A.finish()]); g.destroy(); m.destroy(); f.destroy(); return y.transferToImageBitmap(); }
        },
        _WebGPUMesh_On = new WeakMap(),
        _WebGPUMesh_Ln = new WeakMap(),
        _WebGPUMesh_Nn = new WeakMap(),
        _WebGPUMesh_Un = new WeakMap(),
        _WebGPUMesh_instances = new WeakSet(),
        _WebGPUMesh_Hn = function _WebGPUMesh_Hn() {
            return __awaiter(this, void 0, void 0, function* () { var _a; if (!((_a = globalThis.navigator) === null || _a === void 0 ? void 0 : _a.gpu))
                return !1; try {
                const t = yield navigator.gpu.requestAdapter();
                if (!t)
                    return !1;
                __classPrivateFieldSet(this, _WebGPUMesh_Un, navigator.gpu.getPreferredCanvasFormat(), "f");
                const e = __classPrivateFieldSet(this, _WebGPUMesh_Ln, yield t.requestDevice(), "f"), i = e.createShaderModule({ code: "\nstruct Uniforms {\n  offsetX      : f32,\n  offsetY      : f32,\n  scaleX       : f32,\n  scaleY       : f32,\n  paddedWidth  : f32,\n  paddedHeight : f32,\n  borderSize   : f32,\n  _pad         : f32,\n};\n\n@group(0) @binding(0) var<uniform> u : Uniforms;\n\nstruct VertexInput {\n  @location(0) position : vec2<f32>,\n  @location(1) color    : vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) position : vec4<f32>,\n  @location(0)       color    : vec3<f32>,\n};\n\n@vertex\nfn vs_main(in : VertexInput) -> VertexOutput {\n  var out : VertexOutput;\n  let cx = (in.position.x + u.offsetX) * u.scaleX;\n  let cy = (in.position.y + u.offsetY) * u.scaleY;\n  out.position = vec4<f32>(\n    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,\n    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,\n    0.0,\n    1.0\n  );\n  out.color = in.color.rgb;\n  return out;\n}\n\n@fragment\nfn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {\n  return vec4<f32>(in.color, 1.0);\n}\n" });
                __classPrivateFieldSet(this, _WebGPUMesh_Nn, e.createRenderPipeline({ layout: "auto", vertex: { module: i, entryPoint: "vs_main", buffers: [{ arrayStride: 8, attributes: [{ shaderLocation: 0, offset: 0, format: "float32x2" }] }, { arrayStride: 4, attributes: [{ shaderLocation: 1, offset: 0, format: "unorm8x4" }] }] }, fragment: { module: i, entryPoint: "fs_main", targets: [{ format: __classPrivateFieldGet(this, _WebGPUMesh_Un, "f") }] }, primitive: { topology: "triangle-list" } }), "f");
                return !0;
            }
            catch (_5) {
                return !1;
            } });
        },
        _WebGPUMesh_zn = function _WebGPUMesh_zn(t, e) { const { coords: i, colors: n } = e; let r = 0; for (const e of t) {
            const t = e.coords;
            if (e.type === y)
                r += t.length;
            else if (e.type === v) {
                const i = e.verticesPerRow;
                r += (Math.floor(t.length / i) - 1) * (i - 1) * 6;
            }
        } const s = new Float32Array(2 * r), a = new Uint8Array(4 * r); let o = 0, l = 0; const addVertex = (t, e) => { s[o++] = i[2 * t]; s[o++] = i[2 * t + 1]; a[l++] = n[4 * e]; a[l++] = n[4 * e + 1]; a[l++] = n[4 * e + 2]; l++; }; for (const e of t) {
            const t = e.coords, i = e.colors;
            if (e.type === y)
                for (let e = 0, n = t.length; e < n; e += 3) {
                    addVertex(t[e], i[e]);
                    addVertex(t[e + 1], i[e + 1]);
                    addVertex(t[e + 2], i[e + 2]);
                }
            else if (e.type === v) {
                const n = e.verticesPerRow, r = Math.floor(t.length / n) - 1, s = n - 1;
                for (let e = 0; e < r; e++) {
                    let r = e * n;
                    for (let e = 0; e < s; e++, r++) {
                        addVertex(t[r], i[r]);
                        addVertex(t[r + 1], i[r + 1]);
                        addVertex(t[r + n], i[r + n]);
                        addVertex(t[r + n + 1], i[r + n + 1]);
                        addVertex(t[r + 1], i[r + 1]);
                        addVertex(t[r + n], i[r + n]);
                    }
                }
            }
        } return { posData: s, colData: a, vertexCount: r }; },
        _o);
    const Tt = "Fill", St = "Stroke", Ct = "Shading";
    function applyBoundingBox(t, e) { if (!e)
        return; const i = e[2] - e[0], n = e[3] - e[1], r = new Path2D; r.rect(e[0], e[1], i, n); t.clip(r); }
    class BaseShadingPattern {
        isModifyingCurrentTransform() { return !1; }
        getPattern() { unreachable("Abstract method `getPattern` called."); }
    }
    class RadialAxialShadingPattern extends BaseShadingPattern {
        constructor(t) { super(); this._type = t[1]; this._bbox = t[2]; this._colorStops = t[3]; this._p0 = t[4]; this._p1 = t[5]; this._r0 = t[6]; this._r1 = t[7]; this.matrix = null; }
        isOriginBased() { return 0 === this._p0[0] && 0 === this._p0[1] && (!this.isRadial() || 0 === this._p1[0] && 0 === this._p1[1]); }
        isRadial() { return "radial" === this._type; }
        _isCircleCenterOutside() { if (!this.isRadial() || this._r0 > this._r1)
            return !1; return Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]) > this._r1; }
        _createGradient(t, e = null) { let i, n = this._p0, r = this._p1; if (e) {
            n = n.slice();
            r = r.slice();
            Util.applyTransform(n, e);
            Util.applyTransform(r, e);
        } if ("axial" === this._type)
            i = t.createLinearGradient(n[0], n[1], r[0], r[1]);
        else if ("radial" === this._type) {
            let s = this._r0, a = this._r1;
            if (e) {
                const t = new Float32Array(2);
                Util.singularValueDecompose2dScale(e, t);
                s *= t[0];
                a *= t[0];
            }
            i = t.createRadialGradient(n[0], n[1], s, r[0], r[1], a);
        } for (const t of this._colorStops)
            i.addColorStop(t[0], t[1]); return i; }
        _createReversedGradient(t, e = null) { let i = this._p1, n = this._p0; if (e) {
            i = i.slice();
            n = n.slice();
            Util.applyTransform(i, e);
            Util.applyTransform(n, e);
        } let r = this._r1, s = this._r0; if (e) {
            const t = new Float32Array(2);
            Util.singularValueDecompose2dScale(e, t);
            r *= t[0];
            s *= t[0];
        } const a = t.createRadialGradient(i[0], i[1], r, n[0], n[1], s), o = this._colorStops.map(([t, e]) => [1 - t, e]).reverse(); for (const [t, e] of o)
            a.addColorStop(t, e); return a; }
        getPattern(t, e, i, n) { let r; if (n === St || n === Tt) {
            if (this.isOriginBased()) {
                let n = Util.transform(i, e.baseTransform);
                this.matrix && (n = Util.transform(n, this.matrix));
                const r = .001, s = Math.hypot(n[0], n[1]), a = Math.hypot(n[2], n[3]), o = (n[0] * n[2] + n[1] * n[3]) / (s * a);
                if (Math.abs(o) < r) {
                    if (!this.isRadial())
                        return this._createGradient(t, n);
                    if (Math.abs(s - a) < r)
                        return this._createGradient(t, n);
                }
            }
            const s = e.current.getClippedPathBoundingBox(n, getCurrentTransform(t)) || [0, 0, 0, 0], a = Math.ceil(s[2] - s[0]) || 1, o = Math.ceil(s[3] - s[1]) || 1, l = e.canvasFactory.create(a, o), h = l.context;
            h.clearRect(0, 0, h.canvas.width, h.canvas.height);
            h.beginPath();
            h.rect(0, 0, h.canvas.width, h.canvas.height);
            h.translate(-s[0], -s[1]);
            i = Util.transform(i, [1, 0, 0, 1, s[0], s[1]]);
            h.transform(...e.baseTransform);
            this.matrix && h.transform(...this.matrix);
            applyBoundingBox(h, this._bbox);
            if (this._isCircleCenterOutside()) {
                h.fillStyle = this._createReversedGradient(h);
                h.fill();
            }
            h.fillStyle = this._createGradient(h);
            h.fill();
            r = t.createPattern(l.canvas, "no-repeat");
            e.canvasFactory.destroy(l);
            const c = new DOMMatrix(i);
            r.setTransform(c);
        }
        else {
            if (this._isCircleCenterOutside()) {
                t.save();
                applyBoundingBox(t, this._bbox);
                t.fillStyle = this._createReversedGradient(t);
                t.fillRect(-1e10, -1e10, 2e10, 2e10);
                t.restore();
            }
            applyBoundingBox(t, this._bbox);
            r = this._createGradient(t);
        } return r; }
    }
    function drawTriangle(t, e, i, n, r, s, a, o) { const l = e.coords, h = e.colors, c = t.data, d = 4 * t.width; let u; if (l[2 * i + 1] > l[2 * n + 1]) {
        u = i;
        i = n;
        n = u;
        u = s;
        s = a;
        a = u;
    } if (l[2 * n + 1] > l[2 * r + 1]) {
        u = n;
        n = r;
        r = u;
        u = a;
        a = o;
        o = u;
    } if (l[2 * i + 1] > l[2 * n + 1]) {
        u = i;
        i = n;
        n = u;
        u = s;
        s = a;
        a = u;
    } const p = (l[2 * i] + e.offsetX) * e.scaleX, g = (l[2 * i + 1] + e.offsetY) * e.scaleY, m = (l[2 * n] + e.offsetX) * e.scaleX, f = (l[2 * n + 1] + e.offsetY) * e.scaleY, b = (l[2 * r] + e.offsetX) * e.scaleX, y = (l[2 * r + 1] + e.offsetY) * e.scaleY; if (g >= y)
        return; const v = h[4 * s], w = h[4 * s + 1], A = h[4 * s + 2], x = h[4 * a], E = h[4 * a + 1], _ = h[4 * a + 2], T = h[4 * o], S = h[4 * o + 1], C = h[4 * o + 2], D = Math.round(g), P = Math.round(y); let M, k, I, R, B, O, L, N; for (let t = D; t <= P; t++) {
        if (t < f) {
            const e = t < g ? 0 : (g - t) / (g - f);
            M = p - (p - m) * e;
            k = v - (v - x) * e;
            I = w - (w - E) * e;
            R = A - (A - _) * e;
        }
        else {
            let e;
            e = t > y ? 1 : f === y ? 0 : (f - t) / (f - y);
            M = m - (m - b) * e;
            k = x - (x - T) * e;
            I = E - (E - S) * e;
            R = _ - (_ - C) * e;
        }
        let e;
        e = t < g ? 0 : t > y ? 1 : (g - t) / (g - y);
        B = p - (p - b) * e;
        O = v - (v - T) * e;
        L = w - (w - S) * e;
        N = A - (A - C) * e;
        const i = Math.round(Math.min(M, B)), n = Math.round(Math.max(M, B));
        let r = d * t + 4 * i;
        for (let t = i; t <= n; t++) {
            e = (M - t) / (M - B);
            e < 0 ? e = 0 : e > 1 && (e = 1);
            c[r++] = k - (k - O) * e | 0;
            c[r++] = I - (I - L) * e | 0;
            c[r++] = R - (R - N) * e | 0;
            c[r++] = 255;
        }
    } }
    function drawFigure(t, e, i) { const n = e.coords, r = e.colors; let s, a; switch (e.type) {
        case v:
            const o = e.verticesPerRow, l = Math.floor(n.length / o) - 1, h = o - 1;
            for (s = 0; s < l; s++) {
                let e = s * o;
                for (let s = 0; s < h; s++, e++) {
                    drawTriangle(t, i, n[e], n[e + 1], n[e + o], r[e], r[e + 1], r[e + o]);
                    drawTriangle(t, i, n[e + o + 1], n[e + 1], n[e + o], r[e + o + 1], r[e + 1], r[e + o]);
                }
            }
            break;
        case y:
            for (s = 0, a = n.length; s < a; s += 3)
                drawTriangle(t, i, n[s], n[s + 1], n[s + 2], r[s], r[s + 1], r[s + 2]);
            break;
        default: throw new Error("illegal figure");
    } }
    class MeshShadingPattern extends BaseShadingPattern {
        constructor(t) { super(); this._coords = t[2]; this._colors = t[3]; this._figures = t[4]; this._bounds = t[5]; this._bbox = t[6]; this._background = t[7]; this.matrix = null; }
        _createMeshCanvas(t, e, i) { const n = Math.floor(this._bounds[0]), r = Math.floor(this._bounds[1]), s = Math.ceil(this._bounds[2]) - n, a = Math.ceil(this._bounds[3]) - r, o = Math.min(Math.ceil(Math.abs(s * t[0] * 1.1)), 3e3) || 1, l = Math.min(Math.ceil(Math.abs(a * t[1] * 1.1)), 3e3) || 1, h = s ? s / o : 1, c = a ? a / l : 1, d = { coords: this._coords, colors: this._colors, offsetX: -n, offsetY: -r, scaleX: 1 / h, scaleY: 1 / c }, u = o + 4, p = l + 4, g = i.create(u, p); if (function isWebGPUMeshReady() { return _t.isReady; }())
            g.context.drawImage(function drawMeshWithGPU(t, e, i, n, r, s) { return _t.draw(t, e, i, n, r, s); }(this._figures, d, e, u, p, 2), 0, 0);
        else {
            const t = g.context.createImageData(o, l);
            if (e) {
                const i = t.data;
                for (let t = 0, n = i.length; t < n; t += 4) {
                    i[t] = e[0];
                    i[t + 1] = e[1];
                    i[t + 2] = e[2];
                    i[t + 3] = 255;
                }
            }
            for (const e of this._figures)
                drawFigure(t, e, d);
            g.context.putImageData(t, 2, 2);
        } return { canvas: g.canvas, offsetX: n - 2 * h, offsetY: r - 2 * c, scaleX: h, scaleY: c }; }
        isModifyingCurrentTransform() { return !0; }
        getPattern(t, e, i, n) { applyBoundingBox(t, this._bbox); const r = new Float32Array(2); if (n === Ct)
            Util.singularValueDecompose2dScale(getCurrentTransform(t), r);
        else if (this.matrix) {
            Util.singularValueDecompose2dScale(this.matrix, r);
            const [t, i] = r;
            Util.singularValueDecompose2dScale(e.baseTransform, r);
            r[0] *= t;
            r[1] *= i;
        }
        else
            Util.singularValueDecompose2dScale(e.baseTransform, r); const s = this._createMeshCanvas(r, n === Ct ? null : this._background, e.canvasFactory); if (n !== Ct) {
            t.setTransform(...e.baseTransform);
            this.matrix && t.transform(...this.matrix);
        } t.translate(s.offsetX, s.offsetY); t.scale(s.scaleX, s.scaleY); const a = t.createPattern(s.canvas, "no-repeat"); e.canvasFactory.destroy(s); return a; }
    }
    class DummyShadingPattern extends BaseShadingPattern {
        getPattern() { return "hotpink"; }
    }
    const Dt = 1, Pt = 2;
    class TilingPattern {
        constructor(t, e, i, n) { this.color = t[1]; this.operatorList = t[2]; this.matrix = t[3]; this.bbox = t[4]; this.xstep = t[5]; this.ystep = t[6]; this.paintType = t[7]; this.tilingType = t[8]; this.ctx = e; this.canvasGraphicsFactory = i; this.baseTransform = n; }
        createPatternCanvas(t, e) { var _a, _5; const { bbox: i, operatorList: n, paintType: r, tilingType: s, color: a, canvasGraphicsFactory: o } = this; let { xstep: l, ystep: h } = this; l = Math.abs(l); h = Math.abs(h); info("TilingType: " + s); const c = i[0], d = i[1], u = i[2], p = i[3], g = u - c, m = p - d, f = new Float32Array(2); Util.singularValueDecompose2dScale(this.matrix, f); const [b, y] = f; Util.singularValueDecompose2dScale(this.baseTransform, f); const v = b * f[0], w = y * f[1]; let A = g, x = m, E = !1, _ = !1; const T = Math.ceil(l * v), S = Math.ceil(h * w); T >= Math.ceil(g * v) ? A = l : E = !0; S >= Math.ceil(m * w) ? x = h : _ = !0; const C = this.getSizeAndScale(A, this.ctx.canvas.width, v), D = this.getSizeAndScale(x, this.ctx.canvas.height, w), P = t.canvasFactory.create(C.size, D.size), M = P.context, k = o.createCanvasGraphics(M, e); k.groupLevel = t.groupLevel; this.setFillAndStrokeStyleToContext(k, r, a); M.translate(-C.scale * c, -D.scale * d); k.transform(0, C.scale, 0, 0, D.scale, 0, 0); M.save(); (_a = k.dependencyTracker) === null || _a === void 0 ? void 0 : _a.save(); this.clipBbox(k, c, d, u, p); k.baseTransform = getCurrentTransform(k.ctx); k.executeOperatorList(n); k.endDrawing(); (_5 = k.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.restore(); M.restore(); if (E || _) {
            const e = P.canvas;
            E && (A = l);
            _ && (x = h);
            const i = this.getSizeAndScale(A, this.ctx.canvas.width, v), n = this.getSizeAndScale(x, this.ctx.canvas.height, w), r = i.size, s = n.size, a = t.canvasFactory.create(r, s), o = a.context, u = E ? Math.floor(g / l) : 0, p = _ ? Math.floor(m / h) : 0;
            for (let t = 0; t <= u; t++)
                for (let i = 0; i <= p; i++)
                    o.drawImage(e, r * t, s * i, r, s, 0, 0, r, s);
            t.canvasFactory.destroy(P);
            return { canvas: a.canvas, canvasEntry: a, scaleX: i.scale, scaleY: n.scale, offsetX: c, offsetY: d };
        } return { canvas: P.canvas, canvasEntry: P, scaleX: C.scale, scaleY: D.scale, offsetX: c, offsetY: d }; }
        getSizeAndScale(t, e, i) { const n = Math.max(TilingPattern.MAX_PATTERN_SIZE, e); let r = Math.ceil(t * i); r >= n ? r = n : i = r / t; return { scale: i, size: r }; }
        clipBbox(t, e, i, n, r) { const s = n - e, a = r - i; t.ctx.rect(e, i, s, a); Util.axialAlignedBoundingBox([e, i, n, r], getCurrentTransform(t.ctx), t.current.minMax); t.clip(); t.endPath(); }
        setFillAndStrokeStyleToContext(t, e, i) { const n = t.ctx, r = t.current; switch (e) {
            case Dt:
                const { fillStyle: t, strokeStyle: s } = this.ctx;
                n.fillStyle = r.fillColor = t;
                n.strokeStyle = r.strokeColor = s;
                break;
            case Pt:
                n.fillStyle = n.strokeStyle = i;
                r.fillColor = r.strokeColor = i;
                break;
            default: throw new FormatError(`Unsupported paint type: ${e}`);
        } }
        isModifyingCurrentTransform() { return !1; }
        getPattern(t, e, i, n, r) { let s = i; if (n !== Ct) {
            s = Util.transform(s, e.baseTransform);
            this.matrix && (s = Util.transform(s, this.matrix));
        } const a = this.createPatternCanvas(e, r); let o = new DOMMatrix(s); o = o.translate(a.offsetX, a.offsetY); o = o.scale(1 / a.scaleX, 1 / a.scaleY); const l = t.createPattern(a.canvas, "repeat"); e.canvasFactory.destroy(a.canvasEntry); l.setTransform(o); return l; }
    }
    TilingPattern.MAX_PATTERN_SIZE = 3e3;
    function convertBlackAndWhiteToRGBA({ src: t, srcPos: e = 0, dest: i, width: n, height: r, nonBlackColor: s = 4294967295, inverseDecode: a = !1 }) { const o = FeatureTest.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [s, o] : [o, s], c = n >> 3, d = 7 & n, u = l ^ h, p = t.length; i = new Uint32Array(i.buffer); let g = 0; for (let n = 0; n < r; ++n) {
        for (const n = e + c; e < n; ++e, g += 8) {
            const n = t[e];
            i[g] = l ^ -(n >> 7 & 1) & u;
            i[g + 1] = l ^ -(n >> 6 & 1) & u;
            i[g + 2] = l ^ -(n >> 5 & 1) & u;
            i[g + 3] = l ^ -(n >> 4 & 1) & u;
            i[g + 4] = l ^ -(n >> 3 & 1) & u;
            i[g + 5] = l ^ -(n >> 2 & 1) & u;
            i[g + 6] = l ^ -(n >> 1 & 1) & u;
            i[g + 7] = l ^ -(1 & n) & u;
        }
        if (0 === d)
            continue;
        const n = e < p ? t[e++] : 255;
        for (let t = 0; t < d; ++t, ++g)
            i[g] = l ^ -(n >> 7 - t & 1) & u;
    } return { srcPos: e, destPos: g }; }
    const Mt = 16, kt = new DOMMatrix, It = new Float32Array(2), Ft = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    function drawImageAtIntegerCoords(t, e, i, n, r, s, a, o, l, h) { const [c, d, u, p, g, m] = getCurrentTransform(t); if (0 === d && 0 === u) {
        const f = a * c + g, b = Math.round(f), y = o * p + m, v = Math.round(y), w = (a + l) * c + g, A = Math.abs(Math.round(w) - b) || 1, x = (o + h) * p + m, E = Math.abs(Math.round(x) - v) || 1;
        t.setTransform(Math.sign(c), 0, 0, Math.sign(p), b, v);
        t.drawImage(e, i, n, r, s, 0, 0, A, E);
        t.setTransform(c, d, u, p, g, m);
        return [A, E];
    } if (0 === c && 0 === p) {
        const f = o * u + g, b = Math.round(f), y = a * d + m, v = Math.round(y), w = (o + h) * u + g, A = Math.abs(Math.round(w) - b) || 1, x = (a + l) * d + m, E = Math.abs(Math.round(x) - v) || 1;
        t.setTransform(0, Math.sign(d), Math.sign(u), 0, b, v);
        t.drawImage(e, i, n, r, s, 0, 0, E, A);
        t.setTransform(c, d, u, p, g, m);
        return [E, A];
    } t.drawImage(e, i, n, r, s, a, o, l, h); return [Math.hypot(c, d) * l, Math.hypot(u, p) * h]; }
    class CanvasExtraState {
        constructor(t, e) {
            this.alphaIsShape = !1;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = null;
            this.textMatrixScale = 1;
            this.fontMatrix = n;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = w;
            this.textRise = 0;
            this.fillColor = "#000000";
            this.strokeColor = "#000000";
            this.patternFill = !1;
            this.patternStroke = !1;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.transferMaps = "none";
            this.minMax = Ft.slice();
            this.clipBox = new Float32Array([0, 0, t, e]);
        }
        clone() { const t = Object.create(this); t.clipBox = this.clipBox.slice(); t.minMax = this.minMax.slice(); return t; }
        getPathBoundingBox(t = Tt, e = null) { const i = this.minMax.slice(); if (t === St) {
            e || unreachable("Stroke bounding box must include transform.");
            Util.singularValueDecompose2dScale(e, It);
            const t = It[0] * this.lineWidth / 2, n = It[1] * this.lineWidth / 2;
            i[0] -= t;
            i[1] -= n;
            i[2] += t;
            i[3] += n;
        } return i; }
        updateClipFromPath() { const t = Util.intersect(this.clipBox, this.getPathBoundingBox()); this.startNewPathAndClipBox(t || [0, 0, 0, 0]); }
        isEmptyClip() { return this.minMax[0] === 1 / 0; }
        startNewPathAndClipBox(t) { this.clipBox.set(t, 0); this.minMax.set(Ft, 0); }
        getClippedPathBoundingBox(t = Tt, e = null) { return Util.intersect(this.clipBox, this.getPathBoundingBox(t, e)); }
    }
    function putBinaryImageData(t, e) { if (e instanceof ImageData) {
        t.putImageData(e, 0, 0);
        return;
    } const i = e.height, n = e.width, r = i % Mt, s = (i - r) / Mt, a = 0 === r ? s : s + 1, o = t.createImageData(n, Mt); let l, h = 0; const c = e.data, d = o.data; let u, p, g, m; if (e.kind === S.GRAYSCALE_1BPP) {
        const e = c.byteLength, i = new Uint32Array(d.buffer, 0, d.byteLength >> 2), m = i.length, f = n + 7 >> 3, b = 4294967295, y = FeatureTest.isLittleEndian ? 4278190080 : 255;
        for (u = 0; u < a; u++) {
            g = u < s ? Mt : r;
            l = 0;
            for (p = 0; p < g; p++) {
                const t = e - h;
                let r = 0;
                const s = t > f ? n : 8 * t - 7, a = -8 & s;
                let o = 0, d = 0;
                for (; r < a; r += 8) {
                    d = c[h++];
                    i[l++] = 128 & d ? b : y;
                    i[l++] = 64 & d ? b : y;
                    i[l++] = 32 & d ? b : y;
                    i[l++] = 16 & d ? b : y;
                    i[l++] = 8 & d ? b : y;
                    i[l++] = 4 & d ? b : y;
                    i[l++] = 2 & d ? b : y;
                    i[l++] = 1 & d ? b : y;
                }
                for (; r < s; r++) {
                    if (0 === o) {
                        d = c[h++];
                        o = 128;
                    }
                    i[l++] = d & o ? b : y;
                    o >>= 1;
                }
            }
            for (; l < m;)
                i[l++] = 0;
            t.putImageData(o, 0, u * Mt);
        }
    }
    else if (e.kind === S.RGBA_32BPP) {
        p = 0;
        m = n * Mt * 4;
        for (u = 0; u < s; u++) {
            d.set(c.subarray(h, h + m));
            h += m;
            t.putImageData(o, 0, p);
            p += Mt;
        }
        if (u < a) {
            m = n * r * 4;
            d.set(c.subarray(h, h + m));
            t.putImageData(o, 0, p);
        }
    }
    else {
        if (e.kind !== S.RGB_24BPP)
            throw new Error(`bad image kind: ${e.kind}`);
        g = Mt;
        m = n * g;
        for (u = 0; u < a; u++) {
            if (u >= s) {
                g = r;
                m = n * g;
            }
            l = 0;
            for (p = m; p--;) {
                d[l++] = c[h++];
                d[l++] = c[h++];
                d[l++] = c[h++];
                d[l++] = 255;
            }
            t.putImageData(o, 0, u * Mt);
        }
    } }
    function putBinaryImageMask(t, e) { if (e.bitmap) {
        t.drawImage(e.bitmap, 0, 0);
        return;
    } const i = e.height, n = e.width, r = i % Mt, s = (i - r) / Mt, a = 0 === r ? s : s + 1, o = t.createImageData(n, Mt); let l = 0; const h = e.data, c = o.data; for (let e = 0; e < a; e++) {
        const i = e < s ? Mt : r;
        ({ srcPos: l } = convertBlackAndWhiteToRGBA({ src: h, srcPos: l, dest: c, width: n, height: i, nonBlackColor: 0 }));
        t.putImageData(o, 0, e * Mt);
    } }
    function copyCtxState(t, e) { const i = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"]; for (const n of i)
        void 0 !== t[n] && (e[n] = t[n]); if (void 0 !== t.setLineDash) {
        e.setLineDash(t.getLineDash());
        e.lineDashOffset = t.lineDashOffset;
    } }
    function resetCtxToDefault(t) { t.strokeStyle = t.fillStyle = "#000000"; t.fillRule = "nonzero"; t.globalAlpha = 1; t.lineWidth = 1; t.lineCap = "butt"; t.lineJoin = "miter"; t.miterLimit = 10; t.globalCompositeOperation = "source-over"; t.font = "10px sans-serif"; if (void 0 !== t.setLineDash) {
        t.setLineDash([]);
        t.lineDashOffset = 0;
    } const { filter: e } = t; "none" !== e && "" !== e && (t.filter = "none"); }
    function getImageSmoothingEnabled(t, e) { if (e)
        return !0; Util.singularValueDecompose2dScale(t, It); const i = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS); return It[0] <= i && It[1] <= i; }
    const Rt = ["butt", "round", "square"], Bt = ["miter", "round", "bevel"], Ot = {}, Lt = {};
    class CanvasGraphics {
        constructor(t, e, i, n, r, { optionalContentConfig: s, markedContentStack: a = null }, o, l, h, c) {
            _CanvasGraphics_instances.add(this);
            this.ctx = t;
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = !1;
            this.commonObjs = e;
            this.objs = i;
            this.canvasFactory = n;
            this.filterFactory = r;
            this.groupStack = [];
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.smaskGroupCanvases = [];
            this.suspendedCtx = null;
            this.contentVisible = !0;
            this.markedContentStack = a || [];
            this.optionalContentConfig = s;
            this.cachedPatterns = new Map;
            this.annotationCanvasMap = o;
            this.viewportScale = 1;
            this.outputScaleX = 1;
            this.outputScaleY = 1;
            this.pageColors = l;
            this._cachedScaleForStroking = [-1, 0];
            this._cachedGetSinglePixelWidth = null;
            this._cachedBitmapsMap = new Map;
            this.dependencyTracker = h !== null && h !== void 0 ? h : null;
            this.imagesTracker = c !== null && c !== void 0 ? c : null;
        }
        getObject(t, e, i = null) { var _a; if ("string" == typeof e) {
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordNamedDependency(t, e);
            return e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
        } return i; }
        beginDrawing({ transform: t, viewport: e, transparency: i = !1, background: n = null }) { const r = this.ctx.canvas.width, s = this.ctx.canvas.height, a = this.ctx.fillStyle; this.ctx.fillStyle = n || "#ffffff"; this.ctx.fillRect(0, 0, r, s); this.ctx.fillStyle = a; if (i) {
            const t = this.transparentCanvasEntry = this.canvasFactory.create(r, s);
            this.compositeCtx = this.ctx;
            ({ canvas: this.transparentCanvas, context: this.ctx } = t);
            this.ctx.save();
            this.ctx.transform(...getCurrentTransform(this.compositeCtx));
        } this.ctx.save(); resetCtxToDefault(this.ctx); if (t) {
            this.ctx.transform(...t);
            this.outputScaleX = t[0];
            this.outputScaleY = t[0];
        } this.ctx.transform(...e.transform); this.viewportScale = e.scale; this.baseTransform = getCurrentTransform(this.ctx); }
        executeOperatorList(t, e, i, n, r) { var _a, _5; const s = t.argsArray, a = t.fnArray; let o = e || 0; const l = s.length; if (l === o)
            return o; const h = l - o > 10 && "function" == typeof i, c = h ? Date.now() + 15 : 0; let d = 0; const u = this.commonObjs, p = this.objs; let g, m; for (;;) {
            if (void 0 !== n) {
                if (o === n.nextBreakPoint) {
                    n.breakIt(o, i);
                    return o;
                }
                if (n.shouldSkip(o)) {
                    if (++o === l)
                        return o;
                    continue;
                }
            }
            if (!r || r(o)) {
                g = a[o];
                m = (_a = s[o]) !== null && _a !== void 0 ? _a : null;
                if (g !== B.dependency)
                    null === m ? this[g](o) : this[g](o, ...m);
                else
                    for (const t of m) {
                        (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordNamedData(t, o);
                        const e = t.startsWith("g_") ? u : p;
                        if (!e.has(t)) {
                            e.get(t, i);
                            return o;
                        }
                    }
            }
            o++;
            if (o === l)
                return o;
            if (h && ++d > 10) {
                if (Date.now() > c) {
                    i();
                    return o;
                }
                d = 0;
            }
        } }
        endDrawing() { __classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_jn).call(this); for (const t of this.smaskGroupCanvases)
            this.canvasFactory.destroy(t); this.smaskGroupCanvases.length = 0; this.tempSMask = null; this.smaskStack.length = 0; this.cachedPatterns.clear(); for (const t of this._cachedBitmapsMap.values()) {
            for (const e of t.values())
                "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
            t.clear();
        } this._cachedBitmapsMap.clear(); __classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_Gn).call(this); }
        _scaleImage(t, e) { var _a, _5; const i = (_a = t.width) !== null && _a !== void 0 ? _a : t.displayWidth, n = (_5 = t.height) !== null && _5 !== void 0 ? _5 : t.displayHeight, r = []; let s = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = i, l = n; for (; s > 2 && o > 1 || a > 2 && l > 1;) {
            let t = o, e = l;
            if (s > 2 && o > 1) {
                t = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2);
                s /= o / t;
            }
            if (a > 2 && l > 1) {
                e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2;
                a /= l / e;
            }
            r.push({ newWidth: t, newHeight: e });
            o = t;
            l = e;
        } if (0 === r.length)
            return { img: t, paintWidth: i, paintHeight: n, tmpCanvas: null }; if (1 === r.length) {
            const { newWidth: e, newHeight: s } = r[0], a = this.canvasFactory.create(e, s);
            a.context.drawImage(t, 0, 0, i, n, 0, 0, e, s);
            return { img: a.canvas, paintWidth: e, paintHeight: s, tmpCanvas: a };
        } let h = this.canvasFactory.create(1, 1), c = this.canvasFactory.create(1, 1), d = i, u = n, p = t; for (const { newWidth: t, newHeight: e } of r) {
            this.canvasFactory.reset(c, t, e);
            c.context.drawImage(p, 0, 0, d, u, 0, 0, t, e);
            [h, c] = [c, h];
            p = h.canvas;
            d = t;
            u = e;
        } this.canvasFactory.destroy(c); return { img: h.canvas, paintWidth: d, paintHeight: u, tmpCanvas: h }; }
        _createMaskCanvas(t, e) { var _a, _5; const i = this.ctx, { width: n, height: r } = e, s = this.current.fillColor, a = this.current.patternFill, o = getCurrentTransform(i); let l, h, c, d; if ((e.bitmap || e.data) && e.count > 1) {
            const i = e.bitmap || e.data.buffer;
            h = JSON.stringify(a ? o : [o.slice(0, 4), s]);
            l = this._cachedBitmapsMap.getOrInsertComputed(i, makeMap);
            const n = l.get(h);
            if (n && !a) {
                const e = Math.round(Math.min(o[0], o[2]) + o[4]), i = Math.round(Math.min(o[1], o[3]) + o[5]);
                (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordDependencies(t, ut);
                return { canvas: n, offsetX: e, offsetY: i };
            }
            c = n;
        } if (!c) {
            d = this.canvasFactory.create(n, r);
            putBinaryImageMask(d.context, e);
        } let u = Util.transform(o, [1 / n, 0, 0, -1 / r, 0, 0]); u = Util.transform(u, [1, 0, 0, 1, 0, -r]); const p = Ft.slice(); Util.axialAlignedBoundingBox([0, 0, n, r], u, p); const [g, m, f, b] = p, y = Math.round(f - g) || 1, v = Math.round(b - m) || 1, w = this.canvasFactory.create(y, v), A = w.context, x = g, E = m; A.translate(-x, -E); A.transform(...u); let _ = null; if (!c) {
            const t = this._scaleImage(d.canvas, getCurrentTransformInverse(A));
            c = t.img;
            _ = t.tmpCanvas;
            if (c !== d.canvas) {
                this.canvasFactory.destroy(d);
                d = null;
            }
            if (l && a) {
                l.set(h, c);
                _ = null;
                d = null;
            }
        } A.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(A), e.interpolate); drawImageAtIntegerCoords(A, c, 0, 0, c.width, c.height, 0, 0, n, r); _ && this.canvasFactory.destroy(_); d && this.canvasFactory.destroy(d); A.globalCompositeOperation = "source-in"; const T = Util.transform(getCurrentTransformInverse(A), [1, 0, 0, 1, -x, -E]); A.fillStyle = a ? s.getPattern(i, this, T, Tt, t) : s; A.fillRect(0, 0, n, r); l && !a && l.set(h, w.canvas); (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordDependencies(t, ut); return { canvas: w.canvas, canvasEntry: l && !a ? null : w, offsetX: Math.round(x), offsetY: Math.round(E) }; }
        setLineWidth(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("lineWidth", t); e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1); this.current.lineWidth = e; this.ctx.lineWidth = e; }
        setLineCap(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("lineCap", t); this.ctx.lineCap = Rt[e]; }
        setLineJoin(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("lineJoin", t); this.ctx.lineJoin = Bt[e]; }
        setMiterLimit(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("miterLimit", t); this.ctx.miterLimit = e; }
        setDash(t, e, i) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("dash", t); const n = this.ctx; if (void 0 !== n.setLineDash) {
            n.setLineDash(e);
            n.lineDashOffset = i;
        } }
        setRenderingIntent(t, e) { }
        setFlatness(t, e) { }
        setGState(t, e) { var _a, _5, _6, _7, _8; for (const [i, n] of e)
            switch (i) {
                case "LW":
                    this.setLineWidth(t, n);
                    break;
                case "LC":
                    this.setLineCap(t, n);
                    break;
                case "LJ":
                    this.setLineJoin(t, n);
                    break;
                case "ML":
                    this.setMiterLimit(t, n);
                    break;
                case "D":
                    this.setDash(t, n[0], n[1]);
                    break;
                case "RI":
                    this.setRenderingIntent(t, n);
                    break;
                case "FL":
                    this.setFlatness(t, n);
                    break;
                case "Font":
                    this.setFont(t, n[0], n[1]);
                    break;
                case "CA":
                    (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("strokeAlpha", t);
                    this.current.strokeAlpha = n;
                    break;
                case "ca":
                    (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordSimpleData("fillAlpha", t);
                    this.ctx.globalAlpha = this.current.fillAlpha = n;
                    break;
                case "BM":
                    (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordSimpleData("globalCompositeOperation", t);
                    this.ctx.globalCompositeOperation = n;
                    break;
                case "SMask":
                    (_7 = this.dependencyTracker) === null || _7 === void 0 ? void 0 : _7.recordSimpleData("SMask", t);
                    this.current.activeSMask = n ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;
                case "TR":
                    (_8 = this.dependencyTracker) === null || _8 === void 0 ? void 0 : _8.recordSimpleData("filter", t);
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n);
            } }
        get inSMaskMode() { return !!this.suspendedCtx; }
        checkSMaskState() { const t = this.inSMaskMode; this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode(); }
        beginSMaskMode(t) { if (this.inSMaskMode)
            throw new Error("beginSMaskMode called while already in smask mode"); const e = this.ctx.canvas.width, i = this.ctx.canvas.height, n = this.canvasFactory.create(e, i); this.smaskScratchCanvas = n; this.suspendedCtx = this.ctx; const r = this.ctx = n.context; r.setTransform(this.suspendedCtx.getTransform()); copyCtxState(this.suspendedCtx, r); !function mirrorContextOperations(t, e) { if (t._removeMirroring)
            throw new Error("Context is already forwarding operations."); t.__originalSave = t.save; t.__originalRestore = t.restore; t.__originalRotate = t.rotate; t.__originalScale = t.scale; t.__originalTranslate = t.translate; t.__originalTransform = t.transform; t.__originalSetTransform = t.setTransform; t.__originalResetTransform = t.resetTransform; t.__originalClip = t.clip; t.__originalMoveTo = t.moveTo; t.__originalLineTo = t.lineTo; t.__originalBezierCurveTo = t.bezierCurveTo; t.__originalRect = t.rect; t.__originalClosePath = t.closePath; t.__originalBeginPath = t.beginPath; t._removeMirroring = () => { t.save = t.__originalSave; t.restore = t.__originalRestore; t.rotate = t.__originalRotate; t.scale = t.__originalScale; t.translate = t.__originalTranslate; t.transform = t.__originalTransform; t.setTransform = t.__originalSetTransform; t.resetTransform = t.__originalResetTransform; t.clip = t.__originalClip; t.moveTo = t.__originalMoveTo; t.lineTo = t.__originalLineTo; t.bezierCurveTo = t.__originalBezierCurveTo; t.rect = t.__originalRect; t.closePath = t.__originalClosePath; t.beginPath = t.__originalBeginPath; delete t._removeMirroring; }; t.save = function () { e.save(); this.__originalSave(); }; t.restore = function () { e.restore(); this.__originalRestore(); }; t.translate = function (t, i) { e.translate(t, i); this.__originalTranslate(t, i); }; t.scale = function (t, i) { e.scale(t, i); this.__originalScale(t, i); }; t.transform = function (t, i, n, r, s, a) { e.transform(t, i, n, r, s, a); this.__originalTransform(t, i, n, r, s, a); }; t.setTransform = function (t, i, n, r, s, a) { e.setTransform(t, i, n, r, s, a); this.__originalSetTransform(t, i, n, r, s, a); }; t.resetTransform = function () { e.resetTransform(); this.__originalResetTransform(); }; t.rotate = function (t) { e.rotate(t); this.__originalRotate(t); }; t.clip = function (t) { e.clip(t); this.__originalClip(t); }; t.moveTo = function (t, i) { e.moveTo(t, i); this.__originalMoveTo(t, i); }; t.lineTo = function (t, i) { e.lineTo(t, i); this.__originalLineTo(t, i); }; t.bezierCurveTo = function (t, i, n, r, s, a) { e.bezierCurveTo(t, i, n, r, s, a); this.__originalBezierCurveTo(t, i, n, r, s, a); }; t.rect = function (t, i, n, r) { e.rect(t, i, n, r); this.__originalRect(t, i, n, r); }; t.closePath = function () { e.closePath(); this.__originalClosePath(); }; t.beginPath = function () { e.beginPath(); this.__originalBeginPath(); }; }(r, this.suspendedCtx); this.setGState(t, [["BM", "source-over"]]); }
        endSMaskMode() { if (!this.inSMaskMode)
            throw new Error("endSMaskMode called while not in smask mode"); this.ctx._removeMirroring(); copyCtxState(this.ctx, this.suspendedCtx); this.ctx = this.suspendedCtx; this.suspendedCtx = null; this.canvasFactory.destroy(this.smaskScratchCanvas); this.smaskScratchCanvas = null; }
        compose(t) { if (!this.current.activeSMask)
            return; if (t) {
            t[0] = Math.floor(t[0]);
            t[1] = Math.floor(t[1]);
            t[2] = Math.ceil(t[2]);
            t[3] = Math.ceil(t[3]);
        }
        else
            t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]; const e = this.current.activeSMask, i = this.suspendedCtx; this.composeSMask(i, e, this.ctx, t); this.ctx.save(); this.ctx.setTransform(1, 0, 0, 1, 0, 0); this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); this.ctx.restore(); }
        composeSMask(t, e, i, n) { const r = n[0], s = n[1], a = n[2] - r, o = n[3] - s; if (0 !== a && 0 !== o) {
            this.genericComposeSMask(e.context, i, a, o, e.subtype, e.backdrop, e.transferMap, r, s, e.offsetX, e.offsetY);
            t.save();
            t.globalAlpha = 1;
            t.globalCompositeOperation = "source-over";
            t.setTransform(1, 0, 0, 1, 0, 0);
            t.drawImage(i.canvas, 0, 0);
            t.restore();
        } }
        genericComposeSMask(t, e, i, n, r, s, a, o, l, h, c) { let d = t.canvas, u = o - h, p = l - c, g = null; if (s)
            if (u < 0 || p < 0 || u + i > d.width || p + n > d.height) {
                g = this.canvasFactory.create(i, n);
                const t = g.context;
                t.drawImage(d, -u, -p);
                t.globalCompositeOperation = "destination-atop";
                t.fillStyle = s;
                t.fillRect(0, 0, i, n);
                t.globalCompositeOperation = "source-over";
                d = g.canvas;
                u = p = 0;
            }
            else {
                t.save();
                t.globalAlpha = 1;
                t.setTransform(1, 0, 0, 1, 0, 0);
                const e = new Path2D;
                e.rect(u, p, i, n);
                t.clip(e);
                t.globalCompositeOperation = "destination-atop";
                t.fillStyle = s;
                t.fillRect(u, p, i, n);
                t.restore();
            } e.save(); e.globalAlpha = 1; e.setTransform(1, 0, 0, 1, 0, 0); "Alpha" === r && a ? e.filter = this.filterFactory.addAlphaFilter(a) : "Luminosity" === r && (e.filter = this.filterFactory.addLuminosityFilter(a)); const m = new Path2D; m.rect(o, l, i, n); e.clip(m); e.globalCompositeOperation = "destination-in"; e.drawImage(d, u, p, i, n, o, l, i, n); e.restore(); g && this.canvasFactory.destroy(g); }
        save(t) { var _a; this.inSMaskMode && copyCtxState(this.ctx, this.suspendedCtx); this.ctx.save(); const e = this.current; this.stateStack.push(e); this.current = e.clone(); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.save(t); }
        restore(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.restore(t); if (0 !== this.stateStack.length) {
            this.current = this.stateStack.pop();
            this.ctx.restore();
            this.inSMaskMode && copyCtxState(this.suspendedCtx, this.ctx);
            this.checkSMaskState();
            this.pendingClip = null;
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
        }
        else
            this.inSMaskMode && this.endSMaskMode(); }
        transform(t, e, i, n, r, s, a) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordIncrementalData("transform", t); this.ctx.transform(e, i, n, r, s, a); this._cachedScaleForStroking[0] = -1; this._cachedGetSinglePixelWidth = null; }
        constructPath(t, e, i, n) { let [r] = i; if (n) {
            if (null !== this.dependencyTracker) {
                const i = e === B.stroke ? this.current.lineWidth / 2 : 0;
                this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, n[0] - i, n[2] + i, n[1] - i, n[3] + i).recordDependencies(t, ["transform"]);
            }
            r instanceof Path2D || (r = i[0] = makePathFromDrawOPS(r));
            Util.axialAlignedBoundingBox(n, getCurrentTransform(this.ctx), this.current.minMax);
            this[e](t, r);
            this._pathStartIdx = t;
        }
        else {
            r || (r = i[0] = new Path2D);
            this[e](t, r);
        } }
        closePath(t) { this.ctx.closePath(); }
        stroke(t, e, i = !0) { var _a; const n = this.ctx, r = this.current.strokeColor; n.globalAlpha = this.current.strokeAlpha; if (this.contentVisible)
            if ("object" == typeof r && (r === null || r === void 0 ? void 0 : r.getPattern)) {
                const i = r.isModifyingCurrentTransform() ? n.getTransform() : null;
                n.save();
                n.strokeStyle = r.getPattern(n, this, getCurrentTransformInverse(n), St, t);
                if (i) {
                    const t = new Path2D;
                    t.addPath(e, n.getTransform().invertSelf().multiplySelf(i));
                    e = t;
                }
                this.rescaleAndStroke(e, !1);
                n.restore();
            }
            else
                this.rescaleAndStroke(e, !0); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordDependencies(t, st); i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(St, getCurrentTransform(this.ctx))); n.globalAlpha = this.current.fillAlpha; }
        closeStroke(t, e) { this.stroke(t, e); }
        fill(t, e, i = !0) { var _a, _5, _6; const n = this.ctx, r = this.current.fillColor; let s = !1; if (this.current.patternFill) {
            const i = r.isModifyingCurrentTransform() ? n.getTransform() : null;
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.save(t);
            n.save();
            n.fillStyle = r.getPattern(n, this, getCurrentTransformInverse(n), Tt, t);
            if (i) {
                const t = new Path2D;
                t.addPath(e, n.getTransform().invertSelf().multiplySelf(i));
                e = t;
            }
            s = !0;
        } const a = this.current.getClippedPathBoundingBox(); if (this.contentVisible && null !== a)
            if (this.pendingEOFill) {
                n.fill(e, "evenodd");
                this.pendingEOFill = !1;
            }
            else
                n.fill(e); (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordDependencies(t, ot); if (s) {
            n.restore();
            (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.restore(t);
        } i && this.consumePath(t, e, a); }
        eoFill(t, e) { this.pendingEOFill = !0; this.fill(t, e); }
        fillStroke(t, e) { this.fill(t, e, !1); this.stroke(t, e, !1); this.consumePath(t, e); }
        eoFillStroke(t, e) { this.pendingEOFill = !0; this.fillStroke(t, e); }
        closeFillStroke(t, e) { this.fillStroke(t, e); }
        closeEOFillStroke(t, e) { this.pendingEOFill = !0; this.fillStroke(t, e); }
        endPath(t, e) { this.consumePath(t, e); }
        rawFillPath(t, e) { var _a; this.ctx.fill(e); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordDependencies(t, ht).recordOperation(t); }
        clip(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordFutureForcedDependency("clipMode", t); this.pendingClip = Ot; }
        eoClip(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordFutureForcedDependency("clipMode", t); this.pendingClip = Lt; }
        beginText(t) { var _a; this.current.textMatrix = null; this.current.textMatrixScale = 1; this.current.x = this.current.lineX = 0; this.current.y = this.current.lineY = 0; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t); }
        endText(t) { const e = this.pendingTextPaths, i = this.ctx; if (this.dependencyTracker) {
            const { dependencyTracker: i } = this;
            void 0 !== e && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t);
            i.recordCloseMarker(t);
        } if (void 0 !== e) {
            const t = new Path2D, n = i.getTransform().invertSelf();
            for (const { transform: i, x: r, y: s, fontSize: a, path: o } of e)
                o && t.addPath(o, new DOMMatrix(i).preMultiplySelf(n).translate(r, s).scale(a, -a));
            i.clip(t);
        } delete this.pendingTextPaths; }
        setCharSpacing(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("charSpacing", t); this.current.charSpacing = e; }
        setWordSpacing(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("wordSpacing", t); this.current.wordSpacing = e; }
        setHScale(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("hScale", t); this.current.textHScale = e / 100; }
        setLeading(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("leading", t); this.current.leading = -e; }
        setFont(t, e, i) { var _a, _5; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t); const r = this.commonObjs.get(e), s = this.current; if (!r)
            throw new Error(`Can't find font for ${e}`); s.fontMatrix = r.fontMatrix || n; 0 !== s.fontMatrix[0] && 0 !== s.fontMatrix[3] || warn("Invalid font matrix for font " + e); if (i < 0) {
            i = -i;
            s.fontDirection = -1;
        }
        else
            s.fontDirection = 1; this.current.font = r; this.current.fontSize = i; if (r.isType3Font)
            return; const a = r.loadedName || "sans-serif", o = ((_5 = r.systemFontInfo) === null || _5 === void 0 ? void 0 : _5.css) || `"${a}", ${r.fallbackName}`; let l = "normal"; r.black ? l = "900" : r.bold && (l = "bold"); const h = r.italic ? "italic" : "normal"; let c = i; i < 16 ? c = 16 : i > 100 && (c = 100); this.current.fontSizeScale = i / c; this.ctx.font = `${h} ${l} ${c}px ${o}`; }
        setTextRenderingMode(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("textRenderingMode", t); this.current.textRenderingMode = e; }
        setTextRise(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("textRise", t); this.current.textRise = e; }
        moveText(t, e, i) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t); this.current.x = this.current.lineX += e; this.current.y = this.current.lineY += i; }
        setLeadingMoveText(t, e, i) { this.setLeading(t, -i); this.moveText(t, e, i); }
        setTextMatrix(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t); const { current: i } = this; i.textMatrix = e; i.textMatrixScale = Math.hypot(e[0], e[1]); i.x = i.lineX = 0; i.y = i.lineY = 0; }
        nextLine(t) { var _a, _5; this.moveText(t, 0, this.current.leading); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordIncrementalData("moveText", (_5 = this.dependencyTracker.getSimpleIndex("leading")) !== null && _5 !== void 0 ? _5 : t); }
        paintChar(t, e, i, n, r, s) { var _a, _5, _6, _7; const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, d = h & _, u = !!(h & T), p = o.patternFill && !l.missingFile, g = o.patternStroke && !l.missingFile; let m; (l.disableFontFace || u || p || g) && !l.missingFile && (m = l.getPathGenerator(this.commonObjs, e)); if (m && (l.disableFontFace || p || g)) {
            a.save();
            a.translate(i, n);
            a.scale(c, -c);
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordCharacterBBox(t, a, l);
            let e;
            if (d === w || d === x)
                if (r) {
                    e = a.getTransform();
                    a.setTransform(...r);
                    const t = __classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_Wn).call(this, m, e, r);
                    a.fill(t);
                }
                else
                    a.fill(m);
            if (d === A || d === x)
                if (s) {
                    e || (e = a.getTransform());
                    a.setTransform(...s);
                    const { a: t, b: i, c: n, d: r } = e, o = Util.inverseTransform(s), l = Util.transform([t, i, n, r, 0, 0], o);
                    Util.singularValueDecompose2dScale(l, It);
                    a.lineWidth *= Math.max(It[0], It[1]) / c;
                    a.stroke(__classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_Wn).call(this, m, e, s));
                }
                else {
                    a.lineWidth /= c;
                    a.stroke(m);
                }
            a.restore();
        }
        else {
            if (d === w || d === x) {
                a.fillText(e, i, n);
                (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordCharacterBBox(t, a, l, c, i, n, () => a.measureText(e));
            }
            if (d === A || d === x) {
                this.dependencyTracker && ((_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordCharacterBBox(t, a, l, c, i, n, () => a.measureText(e)).recordDependencies(t, st));
                a.strokeText(e, i, n);
            }
        } if (u) {
            (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: getCurrentTransform(a), x: i, y: n, fontSize: c, path: m });
            (_7 = this.dependencyTracker) === null || _7 === void 0 ? void 0 : _7.recordCharacterBBox(t, a, l, c, i, n);
        } }
        get isFontSubpixelAAEnabled() { const t = this.canvasFactory.create(10, 10), e = t.context; e.scale(1.5, 1); e.fillText("I", 0, 10); const i = e.getImageData(0, 0, 10, 10).data; this.canvasFactory.destroy(t); let n = !1; for (let t = 3; t < i.length; t += 4)
            if (i[t] > 0 && i[t] < 255) {
                n = !0;
                break;
            } return shadow(this, "isFontSubpixelAAEnabled", n); }
        showText(t, e) { var _a, _5, _6, _7; if (this.dependencyTracker) {
            this.dependencyTracker.recordDependencies(t, ct).resetBBox(t);
            this.current.textRenderingMode & T && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies();
        } const i = this.current, n = i.font; if (n.isType3Font) {
            this.showType3Text(t, e);
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordShowTextOperation(t);
            return;
        } const r = i.fontSize; if (0 === r) {
            (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordOperation(t);
            return;
        } const s = this.ctx, a = i.fontSizeScale, o = i.charSpacing, l = i.wordSpacing, h = i.fontDirection, c = i.textHScale * h, d = e.length, u = n.vertical, p = u ? 1 : -1, g = n.defaultVMetrics, m = r * i.fontMatrix[0], f = i.textRenderingMode === w && !n.disableFontFace && !i.patternFill; s.save(); i.textMatrix && s.transform(...i.textMatrix); s.translate(i.x, i.y + i.textRise); h > 0 ? s.scale(c, -1) : s.scale(c, 1); let b, y; const v = i.textRenderingMode & _, E = v === A || v === x; if ((v === w || v === x) && i.patternFill) {
            s.save();
            const e = i.fillColor.getPattern(s, this, getCurrentTransformInverse(s), Tt, t);
            b = getCurrentTransform(s);
            s.restore();
            s.fillStyle = e;
        } if (E && i.patternStroke) {
            s.save();
            const e = i.strokeColor.getPattern(s, this, getCurrentTransformInverse(s), St, t);
            y = getCurrentTransform(s);
            s.restore();
            s.strokeStyle = e;
        } let S = i.lineWidth; const C = i.textMatrixScale; 0 === C || 0 === S ? E && (S = this.getSinglePixelWidth()) : S /= C; if (1 !== a) {
            s.scale(a, a);
            S /= a;
        } s.lineWidth = S; if (n.isInvalidPDFjsFont) {
            const n = [];
            let r = 0;
            for (const t of e) {
                n.push(t.unicode);
                r += t.width;
            }
            const a = n.join("");
            s.fillText(a, 0, 0);
            if (null !== this.dependencyTracker) {
                const e = s.measureText(a);
                this.dependencyTracker.recordBBox(t, this.ctx, -e.actualBoundingBoxLeft, e.actualBoundingBoxRight, -e.actualBoundingBoxAscent, e.actualBoundingBoxDescent).recordShowTextOperation(t);
            }
            i.x += r * m * c;
            s.restore();
            this.compose();
            return;
        } let D, P = 0; for (D = 0; D < d; ++D) {
            const i = e[D];
            if ("number" == typeof i) {
                P += p * i * r / 1e3;
                continue;
            }
            let c = !1;
            const d = (i.isSpace ? l : 0) + o, v = i.fontChar, w = i.accent;
            let A, x, E, _ = i.width;
            if (u) {
                const t = i.vmetric || g, e = -(i.vmetric ? t[1] : .5 * _) * m, n = t[2] * m;
                _ = t ? -t[0] : _;
                A = e / a;
                x = (P + n) / a;
            }
            else {
                A = P / a;
                x = 0;
            }
            if (n.remeasure && _ > 0) {
                E = s.measureText(v);
                const t = 1e3 * E.width / r * a;
                if (_ < t && this.isFontSubpixelAAEnabled) {
                    const e = _ / t;
                    c = !0;
                    s.save();
                    s.scale(e, 1);
                    A /= e;
                }
                else
                    _ !== t && (A += (_ - t) / 2e3 * r / a);
            }
            if (this.contentVisible && (i.isInFont || n.missingFile))
                if (f && !w) {
                    s.fillText(v, A, x);
                    (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordCharacterBBox(t, s, E ? { bbox: null } : n, r / a, A, x, () => E !== null && E !== void 0 ? E : s.measureText(v));
                }
                else {
                    this.paintChar(t, v, A, x, b, y);
                    if (w) {
                        const e = A + r * w.offset.x / a, i = x - r * w.offset.y / a;
                        this.paintChar(t, w.fontChar, e, i, b, y);
                    }
                }
            P += u ? _ * m - d * h : _ * m + d * h;
            c && s.restore();
        } u ? i.y -= P : i.x += P * c; s.restore(); this.compose(); (_7 = this.dependencyTracker) === null || _7 === void 0 ? void 0 : _7.recordShowTextOperation(t); }
        showType3Text(t, e) { const i = this.ctx, r = this.current, s = r.font, a = r.fontSize, o = r.fontDirection, l = s.vertical ? 1 : -1, h = r.charSpacing, c = r.wordSpacing, d = r.textHScale * o, u = r.fontMatrix || n, p = e.length; let g, m, f, b; if (r.textRenderingMode === E || 0 === a)
            return; this._cachedScaleForStroking[0] = -1; this._cachedGetSinglePixelWidth = null; i.save(); r.textMatrix && i.transform(...r.textMatrix); i.translate(r.x, r.y + r.textRise); i.scale(d, o); const y = this.dependencyTracker; this.dependencyTracker = y ? new CanvasNestedDependencyTracker(y, t) : null; for (g = 0; g < p; ++g) {
            m = e[g];
            if ("number" == typeof m) {
                b = l * m * a / 1e3;
                this.ctx.translate(b, 0);
                r.x += b * d;
                continue;
            }
            const t = (m.isSpace ? c : 0) + h, n = s.charProcOperatorList[m.operatorListId];
            if (n) {
                if (this.contentVisible) {
                    this.save();
                    i.scale(a, a);
                    i.transform(...u);
                    this.executeOperatorList(n);
                    this.restore();
                }
            }
            else
                warn(`Type3 character "${m.operatorListId}" is not available.`);
            const o = [m.width, 0];
            Util.applyTransform(o, u);
            f = o[0] * a + t;
            i.translate(f, 0);
            r.x += f * d;
        } i.restore(); y && (this.dependencyTracker = y); }
        setCharWidth(t, e, i) { }
        setCharWidthAndBounds(t, e, i, n, r, s, a) { var _a; const o = new Path2D; o.rect(n, r, s - n, a - r); this.ctx.clip(o); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordBBox(t, this.ctx, n, s, r, a).recordClipBox(t, this.ctx, n, s, r, a); this.endPath(t); }
        getColorN_Pattern(t, e) { let i; if ("TilingPattern" === e[0]) {
            const t = this.baseTransform || getCurrentTransform(this.ctx), n = { createCanvasGraphics: (t, e) => new CanvasGraphics(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new CanvasNestedDependencyTracker(this.dependencyTracker, e, !0) : null) };
            i = new TilingPattern(e, this.ctx, n, t);
        }
        else
            i = this._getPattern(t, e[1], e[2]); return i; }
        setStrokeColorN(t, ...e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("strokeColor", t); this.current.strokeColor = this.getColorN_Pattern(t, e); this.current.patternStroke = !0; }
        setFillColorN(t, ...e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("fillColor", t); this.current.fillColor = this.getColorN_Pattern(t, e); this.current.patternFill = !0; }
        setStrokeRGBColor(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("strokeColor", t); this.ctx.strokeStyle = this.current.strokeColor = e; this.current.patternStroke = !1; }
        setStrokeTransparent(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("strokeColor", t); this.ctx.strokeStyle = this.current.strokeColor = "transparent"; this.current.patternStroke = !1; }
        setFillRGBColor(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("fillColor", t); this.ctx.fillStyle = this.current.fillColor = e; this.current.patternFill = !1; }
        setFillTransparent(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordSimpleData("fillColor", t); this.ctx.fillStyle = this.current.fillColor = "transparent"; this.current.patternFill = !1; }
        _getPattern(t, e, i = null) { let n; if (this.cachedPatterns.has(e))
            n = this.cachedPatterns.get(e);
        else {
            n = function getShadingPattern(t) { switch (t[0]) {
                case "RadialAxial": return new RadialAxialShadingPattern(t);
                case "Mesh": return new MeshShadingPattern(t);
                case "Dummy": return new DummyShadingPattern;
            } throw new Error(`Unknown IR type: ${t[0]}`); }(this.getObject(t, e));
            this.cachedPatterns.set(e, n);
        } i && (n.matrix = i); return n; }
        shadingFill(t, e) { var _a; if (!this.contentVisible)
            return; const i = this.ctx; this.save(t); const n = this._getPattern(t, e); i.fillStyle = n.getPattern(i, this, getCurrentTransformInverse(i), Ct, t); const r = getCurrentTransformInverse(i); if (r) {
            const { width: t, height: e } = i.canvas, n = Ft.slice();
            Util.axialAlignedBoundingBox([0, 0, t, e], r, n);
            const [s, a, o, l] = n;
            this.ctx.fillRect(s, a, o - s, l - a);
        }
        else
            this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, dt).recordDependencies(t, ot).recordOperation(t); this.compose(this.current.getClippedPathBoundingBox()); this.restore(t); }
        beginInlineImage() { unreachable("Should not call beginInlineImage"); }
        beginImageData() { unreachable("Should not call beginImageData"); }
        paintFormXObjectBegin(t, e, i) { var _a; if (this.contentVisible) {
            this.save(t);
            this.baseTransformStack.push(this.baseTransform);
            e && this.transform(t, ...e);
            this.baseTransform = getCurrentTransform(this.ctx);
            if (i) {
                Util.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
                const [e, n, r, s] = i, a = new Path2D;
                a.rect(e, n, r - e, s - n);
                this.ctx.clip(a);
                (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.recordClipBox(t, this.ctx, e, r, n, s);
                this.endPath(t);
            }
        } }
        paintFormXObjectEnd(t) { if (this.contentVisible) {
            this.restore(t);
            this.baseTransform = this.baseTransformStack.pop();
        } }
        beginGroup(t, e) { var _a; if (!this.contentVisible)
            return; this.save(t); if (this.inSMaskMode) {
            this.endSMaskMode();
            this.current.activeSMask = null;
        } const i = this.ctx; e.isolated || info("TODO: Support non-isolated groups."); e.knockout && warn("Knockout groups not supported."); const n = getCurrentTransform(i); e.matrix && i.transform(...e.matrix); const r = [0, 0, i.canvas.width, i.canvas.height]; let s; if (e.bbox) {
            s = Ft.slice();
            Util.axialAlignedBoundingBox(e.bbox, getCurrentTransform(i), s);
            s = Util.intersect(s, r) || [0, 0, 0, 0];
        }
        else
            s = r; const a = Math.floor(s[0]), o = Math.floor(s[1]), l = Math.max(Math.ceil(s[2]) - a, 1), h = Math.max(Math.ceil(s[3]) - o, 1); this.current.startNewPathAndClipBox([0, 0, l, h]); e.smask && this.smaskCounter++; const c = this.canvasFactory.create(l, h); e.smask && this.smaskGroupCanvases.push(c); const d = c.context; d.translate(-a, -o); d.transform(...n); if (e.bbox) {
            let t = new Path2D;
            const [i, n, r, s] = e.bbox;
            t.rect(i, n, r - i, s - n);
            if (e.matrix) {
                const i = new Path2D;
                i.addPath(t, new DOMMatrix(e.matrix));
                t = i;
            }
            d.clip(t);
        } e.smask && this.smaskStack.push({ canvas: c.canvas, context: d, offsetX: a, offsetY: o, subtype: e.smask.subtype, backdrop: e.smask.backdrop, transferMap: e.smask.transferMap || null, startTransformInverse: null }); if (!e.smask || this.dependencyTracker) {
            i.setTransform(1, 0, 0, 1, 0, 0);
            i.translate(a, o);
            i.save();
        } copyCtxState(i, d); this.ctx = d; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i); this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]); this.groupStack.push(i); this.groupLevel++; }
        endGroup(t, e) { var _a; if (!this.contentVisible)
            return; this.groupLevel--; const i = this.ctx, n = this.groupStack.pop(); this.ctx = n; this.ctx.imageSmoothingEnabled = !1; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.popBaseTransform(); if (e.smask) {
            this.tempSMask = this.smaskStack.pop();
            this.restore(t);
            this.dependencyTracker && this.ctx.restore();
        }
        else {
            this.ctx.restore();
            const e = getCurrentTransform(this.ctx);
            this.restore(t);
            this.ctx.save();
            this.ctx.setTransform(...e);
            const n = Ft.slice();
            Util.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], e, n);
            this.ctx.drawImage(i.canvas, 0, 0);
            this.ctx.restore();
            this.canvasFactory.destroy({ canvas: i.canvas, context: i });
            this.compose(n);
        } }
        beginAnnotation(t, e, i, n, r, s) { __classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_jn).call(this); resetCtxToDefault(this.ctx); this.ctx.save(); this.save(t); this.baseTransform && this.ctx.setTransform(...this.baseTransform); if (i) {
            const r = i[2] - i[0], a = i[3] - i[1];
            if (s && this.annotationCanvasMap) {
                (n = n.slice())[4] -= i[0];
                n[5] -= i[1];
                (i = i.slice())[0] = i[1] = 0;
                i[2] = r;
                i[3] = a;
                Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), It);
                const { viewportScale: t } = this, s = Math.ceil(r * this.outputScaleX * t), o = Math.ceil(a * this.outputScaleY * t);
                this.annotationCanvas = this.canvasFactory.create(s, o);
                const { canvas: l, context: h } = this.annotationCanvas;
                this.annotationCanvasMap.set(e, l);
                this.annotationCanvas.savedCtx = this.ctx;
                this.ctx = h;
                this.ctx.save();
                this.ctx.setTransform(It[0], 0, 0, -It[1], 0, a * It[1]);
                resetCtxToDefault(this.ctx);
            }
            else {
                resetCtxToDefault(this.ctx);
                this.endPath(t);
                const e = new Path2D;
                e.rect(i[0], i[1], r, a);
                this.ctx.clip(e);
            }
        } this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height); this.transform(t, ...n); this.transform(t, ...r); }
        endAnnotation(t) { if (this.annotationCanvas) {
            this.ctx.restore();
            __classPrivateFieldGet(this, _CanvasGraphics_instances, "m", _CanvasGraphics_Gn).call(this);
            this.ctx = this.annotationCanvas.savedCtx;
            delete this.annotationCanvas.savedCtx;
            delete this.annotationCanvas;
        } }
        paintImageMaskXObject(t, e) { var _a; if (!this.contentVisible)
            return; const i = e.count; (e = this.getObject(t, e.data, e)).count = i; const n = this.ctx, r = this._createMaskCanvas(t, e), s = r.canvas; n.save(); n.setTransform(1, 0, 0, 1, 0, 0); n.drawImage(s, r.offsetX, r.offsetY); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + s.width, r.offsetY, r.offsetY + s.height).recordOperation(t); n.restore(); r.canvasEntry && this.canvasFactory.destroy(r.canvasEntry); this.compose(); }
        paintImageMaskXObjectRepeat(t, e, i, n = 0, r = 0, s, a) { var _a, _5, _6; if (!this.contentVisible)
            return; e = this.getObject(t, e.data, e); const o = this.ctx; o.save(); const l = getCurrentTransform(o); o.transform(i, n, r, s, 0, 0); const h = this._createMaskCanvas(t, e); o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]); (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t); for (let e = 0, c = a.length; e < c; e += 2) {
            const c = Util.transform(l, [i, n, r, s, a[e], a[e + 1]]);
            o.drawImage(h.canvas, c[4], c[5]);
            (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordBBox(t, this.ctx, c[4], c[4] + h.canvas.width, c[5], c[5] + h.canvas.height);
        } o.restore(); h.canvasEntry && this.canvasFactory.destroy(h.canvasEntry); this.compose(); (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordOperation(t); }
        paintImageMaskXObjectGroup(t, e) { var _a, _5, _6; if (!this.contentVisible)
            return; const i = this.ctx, n = this.current.fillColor, r = this.current.patternFill; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t).recordDependencies(t, ut); for (const s of e) {
            const { data: e, width: a, height: o, transform: l } = s, h = this.canvasFactory.create(a, o), c = h.context;
            c.save();
            putBinaryImageMask(c, this.getObject(t, e, s));
            c.globalCompositeOperation = "source-in";
            c.fillStyle = r ? n.getPattern(c, this, getCurrentTransformInverse(i), Tt, t) : n;
            c.fillRect(0, 0, a, o);
            c.restore();
            i.save();
            i.transform(...l);
            i.scale(1, -1);
            drawImageAtIntegerCoords(i, h.canvas, 0, 0, a, o, 0, -1, 1, 1);
            this.canvasFactory.destroy(h);
            (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordBBox(t, i, 0, a, 0, o);
            i.restore();
        } this.compose(); (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordOperation(t); }
        paintImageXObject(t, e) { if (!this.contentVisible)
            return; const i = this.getObject(t, e); i ? this.paintInlineImageXObject(t, i) : warn("Dependent image isn't ready yet"); }
        paintImageXObjectRepeat(t, e, i, n, r) { if (!this.contentVisible)
            return; const s = this.getObject(t, e); if (!s) {
            warn("Dependent image isn't ready yet");
            return;
        } const a = s.width, o = s.height, l = []; for (let t = 0, e = r.length; t < e; t += 2)
            l.push({ transform: [i, 0, 0, n, r[t], r[t + 1]], x: 0, y: 0, w: a, h: o }); this.paintInlineImageXObjectGroup(t, s, l); }
        applyTransferMapsToCanvas(t) { if ("none" !== this.current.transferMaps) {
            t.filter = this.current.transferMaps;
            t.drawImage(t.canvas, 0, 0);
            t.filter = "none";
        } return t.canvas; }
        applyTransferMapsToBitmap(t) { if ("none" === this.current.transferMaps)
            return { img: t.bitmap, canvasEntry: null }; const { bitmap: e, width: i, height: n } = t, r = this.canvasFactory.create(i, n), s = r.context; s.filter = this.current.transferMaps; s.drawImage(e, 0, 0); s.filter = "none"; return { img: r.canvas, canvasEntry: r }; }
        paintInlineImageXObject(t, e) { var _a; if (!this.contentVisible)
            return; const i = e.width, n = e.height, r = this.ctx; this.save(t); const { filter: s } = r; "none" !== s && "" !== s && (r.filter = "none"); r.scale(1 / i, -1 / n); let a, o = null; if (e.bitmap) {
            const t = this.applyTransferMapsToBitmap(e);
            a = t.img;
            o = t.canvasEntry;
        }
        else if ("function" == typeof HTMLElement && e instanceof HTMLElement || !e.data)
            a = e;
        else {
            const t = this.canvasFactory.create(i, n);
            putBinaryImageData(t.context, e);
            a = this.applyTransferMapsToCanvas(t.context);
            o = t;
        } const l = this._scaleImage(a, getCurrentTransformInverse(r)); r.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(r), e.interpolate); if (this.dependencyTracker) {
            this.dependencyTracker.resetBBox(t).recordBBox(t, r, 0, i, -n, 0).recordDependencies(t, lt).recordOperation(t);
            (_a = this.imagesTracker) === null || _a === void 0 ? void 0 : _a.record(r, i, n, this.dependencyTracker.clipBox);
        } drawImageAtIntegerCoords(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -n, i, n); l.tmpCanvas && this.canvasFactory.destroy(l.tmpCanvas); o && this.canvasFactory.destroy(o); this.compose(); this.restore(t); }
        paintInlineImageXObjectGroup(t, e, i) { var _a, _5, _6; if (!this.contentVisible)
            return; const n = this.ctx; let r, s = null; if (e.bitmap)
            r = e.bitmap;
        else {
            const t = e.width, i = e.height, n = this.canvasFactory.create(t, i);
            putBinaryImageData(n.context, e);
            r = this.applyTransferMapsToCanvas(n.context);
            s = n;
        } (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t); for (const e of i) {
            n.save();
            n.transform(...e.transform);
            n.scale(1, -1);
            drawImageAtIntegerCoords(n, r, e.x, e.y, e.w, e.h, 0, -1, 1, 1);
            (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordBBox(t, n, 0, 1, -1, 0);
            n.restore();
        } s && this.canvasFactory.destroy(s); (_6 = this.dependencyTracker) === null || _6 === void 0 ? void 0 : _6.recordOperation(t); this.compose(); }
        paintSolidColorImageMask(t) { var _a; if (this.contentVisible) {
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, ot).recordOperation(t);
            this.ctx.fillRect(0, 0, 1, 1);
            this.compose();
        } }
        markPoint(t, e) { }
        markPointProps(t, e, i) { }
        beginMarkedContent(t, e) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.beginMarkedContent(t); this.markedContentStack.push({ visible: !0 }); }
        beginMarkedContentProps(t, e, i) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.beginMarkedContent(t); "OC" === e ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i) }) : this.markedContentStack.push({ visible: !0 }); this.contentVisible = this.isContentVisible(); }
        endMarkedContent(t) { var _a; (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.endMarkedContent(t); this.markedContentStack.pop(); this.contentVisible = this.isContentVisible(); }
        beginCompat(t) { }
        endCompat(t) { }
        consumePath(t, e, i) { var _a, _5; const n = this.current.isEmptyClip(); this.pendingClip && this.current.updateClipFromPath(); this.pendingClip || this.compose(i); const r = this.ctx; if (this.pendingClip) {
            n || (this.pendingClip === Lt ? r.clip(e, "evenodd") : r.clip(e));
            this.pendingClip = null;
            (_a = this.dependencyTracker) === null || _a === void 0 ? void 0 : _a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t);
        }
        else
            (_5 = this.dependencyTracker) === null || _5 === void 0 ? void 0 : _5.recordOperation(t); this.current.startNewPathAndClipBox(this.current.clipBox); }
        getSinglePixelWidth() { if (!this._cachedGetSinglePixelWidth) {
            const t = getCurrentTransform(this.ctx);
            if (0 === t[1] && 0 === t[2])
                this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
            else {
                const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), n = Math.hypot(t[1], t[3]);
                this._cachedGetSinglePixelWidth = Math.max(i, n) / e;
            }
        } return this._cachedGetSinglePixelWidth; }
        getScaleForStroking() { if (-1 === this._cachedScaleForStroking[0]) {
            const { lineWidth: t } = this.current, { a: e, b: i, c: n, d: r } = this.ctx.getTransform();
            let s, a;
            if (0 === i && 0 === n) {
                const i = Math.abs(e), n = Math.abs(r);
                if (i === n)
                    if (0 === t)
                        s = a = 1 / i;
                    else {
                        const e = i * t;
                        s = a = e < 1 ? 1 / e : 1;
                    }
                else if (0 === t) {
                    s = 1 / i;
                    a = 1 / n;
                }
                else {
                    const e = i * t, r = n * t;
                    s = e < 1 ? 1 / e : 1;
                    a = r < 1 ? 1 / r : 1;
                }
            }
            else {
                const o = Math.abs(e * r - i * n), l = Math.hypot(e, i), h = Math.hypot(n, r);
                if (0 === t) {
                    s = h / o;
                    a = l / o;
                }
                else {
                    const e = t * o;
                    s = h > e ? h / e : 1;
                    a = l > e ? l / e : 1;
                }
            }
            this._cachedScaleForStroking[0] = s;
            this._cachedScaleForStroking[1] = a;
        } return this._cachedScaleForStroking; }
        rescaleAndStroke(t, e) { const { ctx: i, current: { lineWidth: n } } = this, [r, s] = this.getScaleForStroking(); if (r === s) {
            i.lineWidth = (n || 1) * r;
            i.stroke(t);
            return;
        } const a = i.getLineDash(); e && i.save(); i.scale(r, s); kt.a = 1 / r; kt.d = 1 / s; const o = new Path2D; o.addPath(t, kt); if (a.length > 0) {
            const t = Math.max(r, s);
            i.setLineDash(a.map(e => e / t));
            i.lineDashOffset /= t;
        } i.lineWidth = n || 1; i.stroke(o); e && i.restore(); }
        isContentVisible() { for (let t = this.markedContentStack.length - 1; t >= 0; t--)
            if (!this.markedContentStack[t].visible)
                return !1; return !0; }
    }
    _CanvasGraphics_instances = new WeakSet(), _CanvasGraphics_jn = function _CanvasGraphics_jn() { for (; this.stateStack.length || this.inSMaskMode;)
        this.restore(); this.current.activeSMask = null; this.ctx.restore(); if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.canvasFactory.destroy(this.transparentCanvasEntry);
        this.transparentCanvas = null;
        this.transparentCanvasEntry = null;
    } }, _CanvasGraphics_Gn = function _CanvasGraphics_Gn() { if (this.pageColors) {
        const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if ("none" !== t) {
            const e = this.ctx.filter;
            this.ctx.filter = t;
            this.ctx.drawImage(this.ctx.canvas, 0, 0);
            this.ctx.filter = e;
        }
    } }, _CanvasGraphics_Wn = function _CanvasGraphics_Wn(t, e, i) { const n = new Path2D; n.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)); return n; };
    for (const t in B)
        void 0 !== CanvasGraphics.prototype[t] && (CanvasGraphics.prototype[B[t]] = CanvasGraphics.prototype[t]);
    class BasePDFStream {
        constructor(t, e, i) {
            _BasePDFStream_Vn.set(this, null);
            _BasePDFStream_$n.set(this, null);
            this._fullReader = null;
            this._rangeReaders = new Set;
            this._source = null;
            this._source = t;
            __classPrivateFieldSet(this, _BasePDFStream_Vn, e, "f");
            __classPrivateFieldSet(this, _BasePDFStream_$n, i, "f");
        }
        get _progressiveDataLength() { var _a, _5; return (_5 = (_a = this._fullReader) === null || _a === void 0 ? void 0 : _a._loaded) !== null && _5 !== void 0 ? _5 : 0; }
        getFullReader() { assert(!this._fullReader, "BasePDFStream.getFullReader can only be called once."); return this._fullReader = new (__classPrivateFieldGet(this, _BasePDFStream_Vn, "f"))(this); }
        getRangeReader(t, e) { if (e <= this._progressiveDataLength)
            return null; const i = new (__classPrivateFieldGet(this, _BasePDFStream_$n, "f"))(this, t, e); this._rangeReaders.add(i); return i; }
        cancelAllRequests(t) { var _a; (_a = this._fullReader) === null || _a === void 0 ? void 0 : _a.cancel(t); for (const e of new Set(this._rangeReaders))
            e.cancel(t); }
    }
    _BasePDFStream_Vn = new WeakMap(), _BasePDFStream_$n = new WeakMap();
    class BasePDFStreamReader {
        constructor(t) {
            this.onProgress = null;
            this._contentLength = 0;
            this._filename = null;
            this._headersCapability = Promise.withResolvers();
            this._isRangeSupported = !1;
            this._isStreamingSupported = !1;
            this._loaded = 0;
            this._stream = null;
            this._stream = t;
        }
        _callOnProgress() { var _a; (_a = this.onProgress) === null || _a === void 0 ? void 0 : _a.call(this, { loaded: this._loaded, total: this._contentLength }); }
        get headersReady() { return this._headersCapability.promise; }
        get filename() { return this._filename; }
        get contentLength() { return this._contentLength; }
        get isRangeSupported() { return this._isRangeSupported; }
        get isStreamingSupported() { return this._isStreamingSupported; }
        read() {
            return __awaiter(this, void 0, void 0, function* () { unreachable("Abstract method `read` called"); });
        }
        cancel(t) { unreachable("Abstract method `cancel` called"); }
    }
    class BasePDFStreamRangeReader {
        constructor(t, e, i) {
            this._stream = null;
            this._stream = t;
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { unreachable("Abstract method `read` called"); });
        }
        cancel(t) { unreachable("Abstract method `cancel` called"); }
    }
    function createHeaders(t, e) { const i = new Headers; if (!t || !e || "object" != typeof e)
        return i; for (const t in e) {
        const n = e[t];
        void 0 !== n && i.append(t, n);
    } return i; }
    function getResponseOrigin(t) { var _a, _5; return (_5 = (_a = URL.parse(t)) === null || _a === void 0 ? void 0 : _a.origin) !== null && _5 !== void 0 ? _5 : null; }
    function validateRangeRequestCapabilities({ responseHeaders: t, isHttp: e, rangeChunkSize: i, disableRange: n }) { const r = { contentLength: 0, isRangeSupported: !1 }, s = parseInt(t.get("Content-Length"), 10); if (!Number.isInteger(s))
        return r; r.contentLength = s; if (s <= 2 * i)
        return r; if (n || !e)
        return r; if ("bytes" !== t.get("Accept-Ranges"))
        return r; "identity" === (t.get("Content-Encoding") || "identity") && (r.isRangeSupported = !0); return r; }
    function extractFilenameFromHeader(t) { const e = t.get("Content-Disposition"); if (e) {
        let t = function getFilenameFromContentDispositionHeader(t) { let e = !0, i = toParamRegExp("filename\\*", "i").exec(t); if (i) {
            i = i[1];
            let t = rfc2616unquote(i);
            t = unescape(t);
            t = rfc5987decode(t);
            t = rfc2047decode(t);
            return fixupEncoding(t);
        } i = function rfc2231getparam(t) { const e = []; let i; const n = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig"); for (; null !== (i = n.exec(t));) {
            let [, t, n, r] = i;
            t = parseInt(t, 10);
            if (t in e) {
                if (0 === t)
                    break;
            }
            else
                e[t] = [n, r];
        } const r = []; for (let t = 0; t < e.length && t in e; ++t) {
            let [i, n] = e[t];
            n = rfc2616unquote(n);
            if (i) {
                n = unescape(n);
                0 === t && (n = rfc5987decode(n));
            }
            r.push(n);
        } return r.join(""); }(t); if (i)
            return fixupEncoding(rfc2047decode(i)); i = toParamRegExp("filename", "i").exec(t); if (i) {
            i = i[1];
            let t = rfc2616unquote(i);
            t = rfc2047decode(t);
            return fixupEncoding(t);
        } function toParamRegExp(t, e) { return new RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e); } function textdecode(t, i) { if (t) {
            if (!/^[\x00-\xFF]+$/.test(i))
                return i;
            try {
                const n = new TextDecoder(t, { fatal: !0 }), r = stringToBytes(i);
                i = n.decode(r);
                e = !1;
            }
            catch (_a) { }
        } return i; } function fixupEncoding(t) { if (e && /[\x80-\xff]/.test(t)) {
            t = textdecode("utf-8", t);
            e && (t = textdecode("iso-8859-1", t));
        } return t; } function rfc2616unquote(t) { if (t.startsWith('"')) {
            const e = t.slice(1).split('\\"');
            for (let t = 0; t < e.length; ++t) {
                const i = e[t].indexOf('"');
                if (-1 !== i) {
                    e[t] = e[t].slice(0, i);
                    e.length = t + 1;
                }
                e[t] = e[t].replaceAll(/\\(.)/g, "$1");
            }
            t = e.join('"');
        } return t; } function rfc5987decode(t) { const e = t.indexOf("'"); return -1 === e ? t : textdecode(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, "")); } function rfc2047decode(t) { return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t) ? t : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, i, n) { if ("q" === i || "Q" === i)
            return textdecode(e, n = (n = n.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) { return String.fromCharCode(parseInt(e, 16)); })); try {
            n = atob(n);
        }
        catch (_a) { } return textdecode(e, n); }); } return ""; }(e);
        if (t.includes("%"))
            try {
                t = decodeURIComponent(t);
            }
            catch (_a) { }
        if (isPdfFile(t))
            return t;
    } return null; }
    function createResponseError(t, e) { return new ResponseException(`Unexpected server response (${t}) while retrieving PDF "${e.href}".`, t, 404 === t || 0 === t && "file:" === e.protocol); }
    function ensureResponseOrigin(t, e) { if (t !== e)
        throw new Error(`Expected range response-origin "${t}" to match "${e}".`); }
    function fetchUrl(t, e, i, n) { return fetch(t, { method: "GET", headers: e, signal: n.signal, mode: "cors", credentials: i ? "include" : "same-origin", redirect: "follow" }); }
    function ensureResponseStatus(t, e) { if (200 !== t && 206 !== t)
        throw createResponseError(t, e); }
    function getArrayBuffer(t) { if (t instanceof Uint8Array)
        return t.buffer; if (t instanceof ArrayBuffer)
        return t; throw new Error(`getArrayBuffer - unexpected data: ${t}`); }
    class PDFFetchStream extends BasePDFStream {
        constructor(t) {
            super(t, PDFFetchStreamReader, PDFFetchStreamRangeReader);
            this._responseOrigin = null;
            const { httpHeaders: e, url: i } = t;
            assert(/https?:/.test(i.protocol), "PDFFetchStream only supports http(s):// URLs.");
            this.headers = createHeaders(!0, e);
        }
    }
    class PDFFetchStreamReader extends BasePDFStreamReader {
        constructor(t) {
            super(t);
            this._abortController = new AbortController;
            this._reader = null;
            const { disableRange: e, disableStream: i, rangeChunkSize: n, url: r, withCredentials: s } = t._source;
            this._isStreamingSupported = !i;
            const a = new Headers(t.headers);
            fetchUrl(r, a, s, this._abortController).then(i => { t._responseOrigin = getResponseOrigin(i.url); ensureResponseStatus(i.status, r); this._reader = i.body.getReader(); const s = i.headers, { contentLength: a, isRangeSupported: o } = validateRangeRequestCapabilities({ responseHeaders: s, isHttp: !0, rangeChunkSize: n, disableRange: e }); this._contentLength = a; this._isRangeSupported = o; this._filename = extractFilenameFromHeader(s); !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled.")); this._headersCapability.resolve(); }).catch(this._headersCapability.reject);
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { yield this._headersCapability.promise; const { value: t, done: e } = yield this._reader.read(); if (e)
                return { value: t, done: e }; this._loaded += t.byteLength; this._callOnProgress(); return { value: getArrayBuffer(t), done: !1 }; });
        }
        cancel(t) { var _a; (_a = this._reader) === null || _a === void 0 ? void 0 : _a.cancel(t); this._abortController.abort(); }
    }
    class PDFFetchStreamRangeReader extends BasePDFStreamRangeReader {
        constructor(t, e, i) {
            super(t, e, i);
            this._abortController = new AbortController;
            this._readCapability = Promise.withResolvers();
            this._reader = null;
            const { url: n, withCredentials: r } = t._source, s = new Headers(t.headers);
            s.append("Range", `bytes=${e}-${i - 1}`);
            fetchUrl(n, s, r, this._abortController).then(e => { ensureResponseOrigin(getResponseOrigin(e.url), t._responseOrigin); ensureResponseStatus(e.status, n); this._reader = e.body.getReader(); this._readCapability.resolve(); }).catch(this._readCapability.reject);
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { yield this._readCapability.promise; const { value: t, done: e } = yield this._reader.read(); return e ? { value: t, done: e } : { value: getArrayBuffer(t), done: !1 }; });
        }
        cancel(t) { var _a; (_a = this._reader) === null || _a === void 0 ? void 0 : _a.cancel(t); this._abortController.abort(); }
    }
    __webpack_require__(116);
    function transport_stream_getArrayBuffer(t) { return t instanceof Uint8Array && t.byteLength === t.buffer.byteLength ? t.buffer : new Uint8Array(t).buffer; }
    function endRequests() { for (const t of this._requests)
        t.resolve({ value: void 0, done: !0 }); this._requests.length = 0; }
    class PDFDataTransportStream extends BasePDFStream {
        constructor(t) {
            super(t, PDFDataTransportStreamReader, PDFDataTransportStreamRangeReader);
            _PDFDataTransportStream_instances.add(this);
            this._progressiveDone = !1;
            this._queuedChunks = [];
            const { pdfDataRangeTransport: e } = t, { initialData: i, progressiveDone: n } = e;
            if ((i === null || i === void 0 ? void 0 : i.length) > 0) {
                const t = transport_stream_getArrayBuffer(i);
                this._queuedChunks.push(t);
            }
            this._progressiveDone = n;
            e.addRangeListener((t, e) => { __classPrivateFieldGet(this, _PDFDataTransportStream_instances, "m", _PDFDataTransportStream_qn).call(this, t, e); });
            e.addProgressiveReadListener(t => { __classPrivateFieldGet(this, _PDFDataTransportStream_instances, "m", _PDFDataTransportStream_qn).call(this, void 0, t); });
            e.addProgressiveDoneListener(() => { var _a; (_a = this._fullReader) === null || _a === void 0 ? void 0 : _a.progressiveDone(); this._progressiveDone = !0; });
            e.transportReady();
        }
        getFullReader() { const t = super.getFullReader(); this._queuedChunks = null; return t; }
        getRangeReader(t, e) { const i = super.getRangeReader(t, e); if (i) {
            i.onDone = () => this._rangeReaders.delete(i);
            this._source.pdfDataRangeTransport.requestDataRange(t, e);
        } return i; }
        cancelAllRequests(t) { super.cancelAllRequests(t); this._source.pdfDataRangeTransport.abort(); }
    }
    _PDFDataTransportStream_instances = new WeakSet(), _PDFDataTransportStream_qn = function _PDFDataTransportStream_qn(t, e) { const i = transport_stream_getArrayBuffer(e); if (void 0 === t)
        this._fullReader ? this._fullReader._enqueue(i) : this._queuedChunks.push(i);
    else {
        const e = this._rangeReaders.keys().find(e => e._begin === t);
        assert(e, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        e._enqueue(i);
    } };
    class PDFDataTransportStreamReader extends BasePDFStreamReader {
        constructor(t) {
            super(t);
            _PDFDataTransportStreamReader_Xn.set(this, endRequests.bind(this));
            this._done = !1;
            this._queuedChunks = null;
            this._requests = [];
            const { pdfDataRangeTransport: e, disableRange: i, disableStream: n } = t._source, { length: r, contentDispositionFilename: s } = e;
            this._queuedChunks = t._queuedChunks || [];
            for (const t of this._queuedChunks)
                this._loaded += t.byteLength;
            this._done = t._progressiveDone;
            this._contentLength = r;
            this._isStreamingSupported = !n;
            this._isRangeSupported = !i;
            isPdfFile(s) && (this._filename = s);
            this._headersCapability.resolve();
            const a = this._loaded;
            Promise.resolve().then(() => { a > 0 && this._loaded === a && this._callOnProgress(); });
        }
        _enqueue(t) { if (!this._done) {
            if (this._requests.length > 0) {
                this._requests.shift().resolve({ value: t, done: !1 });
            }
            else
                this._queuedChunks.push(t);
            this._loaded += t.byteLength;
            this._callOnProgress();
        } }
        read() {
            return __awaiter(this, void 0, void 0, function* () { if (this._queuedChunks.length > 0) {
                return { value: this._queuedChunks.shift(), done: !1 };
            } if (this._done)
                return { value: void 0, done: !0 }; const t = Promise.withResolvers(); this._requests.push(t); return t.promise; });
        }
        cancel(t) { this._done = !0; __classPrivateFieldGet(this, _PDFDataTransportStreamReader_Xn, "f").call(this); }
        progressiveDone() { this._done || (this._done = !0); 0 === this._queuedChunks.length && __classPrivateFieldGet(this, _PDFDataTransportStreamReader_Xn, "f").call(this); }
    }
    _PDFDataTransportStreamReader_Xn = new WeakMap();
    class PDFDataTransportStreamRangeReader extends BasePDFStreamRangeReader {
        constructor(t, e, i) {
            super(t, e, i);
            _PDFDataTransportStreamRangeReader_Xn.set(this, endRequests.bind(this));
            this.onDone = null;
            this._begin = -1;
            this._done = !1;
            this._queuedChunk = null;
            this._requests = [];
            this._begin = e;
        }
        _enqueue(t) { var _a; if (!this._done) {
            if (0 === this._requests.length)
                this._queuedChunk = t;
            else {
                this._requests.shift().resolve({ value: t, done: !1 });
                __classPrivateFieldGet(this, _PDFDataTransportStreamRangeReader_Xn, "f").call(this);
            }
            this._done = !0;
            (_a = this.onDone) === null || _a === void 0 ? void 0 : _a.call(this);
        } }
        read() {
            return __awaiter(this, void 0, void 0, function* () { if (this._queuedChunk) {
                const t = this._queuedChunk;
                this._queuedChunk = null;
                return { value: t, done: !1 };
            } if (this._done)
                return { value: void 0, done: !0 }; const t = Promise.withResolvers(); this._requests.push(t); return t.promise; });
        }
        cancel(t) { var _a; this._done = !0; __classPrivateFieldGet(this, _PDFDataTransportStreamRangeReader_Xn, "f").call(this); (_a = this.onDone) === null || _a === void 0 ? void 0 : _a.call(this); }
    }
    _PDFDataTransportStreamRangeReader_Xn = new WeakMap();
    class PDFNetworkStream extends BasePDFStream {
        constructor(t) {
            super(t, PDFNetworkStreamReader, PDFNetworkStreamRangeReader);
            _PDFNetworkStream_instances.add(this);
            _PDFNetworkStream_Yn.set(this, new WeakMap);
            this._responseOrigin = null;
            const { httpHeaders: e, url: i } = t;
            this.url = i;
            this.isHttp = /https?:/.test(i.protocol);
            this.headers = createHeaders(this.isHttp, e);
        }
        _request(t) { const e = new XMLHttpRequest, i = { validateStatus: null, onHeadersReceived: t.onHeadersReceived, onDone: t.onDone, onError: t.onError, onProgress: t.onProgress }; __classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").set(e, i); e.open("GET", this.url); e.withCredentials = this._source.withCredentials; for (const [t, i] of this.headers)
            e.setRequestHeader(t, i); if (this.isHttp && "begin" in t && "end" in t) {
            e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
            i.validateStatus = t => 206 === t || 200 === t;
        }
        else
            i.validateStatus = t => 200 === t; e.responseType = "arraybuffer"; assert(t.onError, "Expected `onError` callback to be provided."); e.onerror = () => t.onError(e.status); e.onreadystatechange = __classPrivateFieldGet(this, _PDFNetworkStream_instances, "m", _PDFNetworkStream_Kn).bind(this, e); e.onprogress = __classPrivateFieldGet(this, _PDFNetworkStream_instances, "m", _PDFNetworkStream_Jn).bind(this, e); e.send(null); return e; }
        _abortRequest(t) { if (__classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").has(t)) {
            __classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").delete(t);
            t.abort();
        } }
        getRangeReader(t, e) { const i = super.getRangeReader(t, e); i && (i.onClosed = () => this._rangeReaders.delete(i)); return i; }
    }
    _PDFNetworkStream_Yn = new WeakMap(), _PDFNetworkStream_instances = new WeakSet(), _PDFNetworkStream_Jn = function _PDFNetworkStream_Jn(t, e) { var _a; const i = __classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").get(t); (_a = i === null || i === void 0 ? void 0 : i.onProgress) === null || _a === void 0 ? void 0 : _a.call(i, e); }, _PDFNetworkStream_Kn = function _PDFNetworkStream_Kn(t, e) { const i = __classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").get(t); if (!i)
        return; if (t.readyState >= 2 && i.onHeadersReceived) {
        i.onHeadersReceived();
        delete i.onHeadersReceived;
    } if (4 !== t.readyState)
        return; if (!__classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").has(t))
        return; __classPrivateFieldGet(this, _PDFNetworkStream_Yn, "f").delete(t); if (0 === t.status && this.isHttp) {
        i.onError(t.status);
        return;
    } const n = t.status || 200; if (!i.validateStatus(n)) {
        i.onError(t.status);
        return;
    } const r = function network_getArrayBuffer(t) { return "string" != typeof t ? t : stringToBytes(t).buffer; }(t.response); if (206 === n) {
        const e = t.getResponseHeader("Content-Range");
        if (/bytes (\d+)-(\d+)\/(\d+)/.test(e))
            i.onDone(r);
        else {
            warn('Missing or invalid "Content-Range" header.');
            i.onError(0);
        }
    }
    else
        r ? i.onDone(r) : i.onError(t.status); };
    class PDFNetworkStreamReader extends BasePDFStreamReader {
        constructor(t) {
            super(t);
            _PDFNetworkStreamReader_instances.add(this);
            _PDFNetworkStreamReader_Xn.set(this, endRequests.bind(this));
            this._cachedChunks = [];
            this._done = !1;
            this._requests = [];
            this._storedError = null;
            this._fullRequestXhr = t._request({ onHeadersReceived: __classPrivateFieldGet(this, _PDFNetworkStreamReader_instances, "m", _PDFNetworkStreamReader_Qn).bind(this), onDone: __classPrivateFieldGet(this, _PDFNetworkStreamReader_instances, "m", _PDFNetworkStreamReader_Zn).bind(this), onError: __classPrivateFieldGet(this, _PDFNetworkStreamReader_instances, "m", _PDFNetworkStreamReader_tr).bind(this), onProgress: __classPrivateFieldGet(this, _PDFNetworkStreamReader_instances, "m", _PDFNetworkStreamReader_Jn).bind(this) });
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { yield this._headersCapability.promise; if (this._storedError)
                throw this._storedError; if (this._cachedChunks.length > 0) {
                return { value: this._cachedChunks.shift(), done: !1 };
            } if (this._done)
                return { value: void 0, done: !0 }; const t = Promise.withResolvers(); this._requests.push(t); return t.promise; });
        }
        cancel(t) { this._done = !0; this._headersCapability.reject(t); __classPrivateFieldGet(this, _PDFNetworkStreamReader_Xn, "f").call(this); this._stream._abortRequest(this._fullRequestXhr); this._fullRequestXhr = null; }
    }
    _PDFNetworkStreamReader_Xn = new WeakMap(), _PDFNetworkStreamReader_instances = new WeakSet(), _PDFNetworkStreamReader_Qn = function _PDFNetworkStreamReader_Qn() { const t = this._stream, { disableRange: e, rangeChunkSize: i } = t._source, n = this._fullRequestXhr; t._responseOrigin = getResponseOrigin(n.responseURL); const r = n.getAllResponseHeaders(), s = new Headers(r ? r.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map(t => { const [e, ...i] = t.split(": "); return [e, i.join(": ")]; }) : []), { contentLength: a, isRangeSupported: o } = validateRangeRequestCapabilities({ responseHeaders: s, isHttp: t.isHttp, rangeChunkSize: i, disableRange: e }); this._contentLength = a; this._isRangeSupported = o; this._filename = extractFilenameFromHeader(s); this._isRangeSupported && t._abortRequest(n); this._headersCapability.resolve(); }, _PDFNetworkStreamReader_Zn = function _PDFNetworkStreamReader_Zn(t) { if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t, done: !1 });
    }
    else
        this._cachedChunks.push(t); this._done = !0; 0 === this._cachedChunks.length && __classPrivateFieldGet(this, _PDFNetworkStreamReader_Xn, "f").call(this); }, _PDFNetworkStreamReader_tr = function _PDFNetworkStreamReader_tr(t) { this._storedError = createResponseError(t, this._stream.url); this._headersCapability.reject(this._storedError); for (const t of this._requests)
        t.reject(this._storedError); this._requests.length = 0; this._cachedChunks.length = 0; }, _PDFNetworkStreamReader_Jn = function _PDFNetworkStreamReader_Jn(t) { var _a; (_a = this.onProgress) === null || _a === void 0 ? void 0 : _a.call(this, { loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength }); };
    class PDFNetworkStreamRangeReader extends BasePDFStreamRangeReader {
        constructor(t, e, i) {
            super(t, e, i);
            _PDFNetworkStreamRangeReader_instances.add(this);
            _PDFNetworkStreamRangeReader_Xn.set(this, endRequests.bind(this));
            this.onClosed = null;
            this._done = !1;
            this._queuedChunk = null;
            this._requests = [];
            this._storedError = null;
            this._requestXhr = t._request({ begin: e, end: i, onHeadersReceived: __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_instances, "m", _PDFNetworkStreamRangeReader_Qn).bind(this), onDone: __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_instances, "m", _PDFNetworkStreamRangeReader_Zn).bind(this), onError: __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_instances, "m", _PDFNetworkStreamRangeReader_tr).bind(this), onProgress: null });
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { if (this._storedError)
                throw this._storedError; if (null !== this._queuedChunk) {
                const t = this._queuedChunk;
                this._queuedChunk = null;
                return { value: t, done: !1 };
            } if (this._done)
                return { value: void 0, done: !0 }; const t = Promise.withResolvers(); this._requests.push(t); return t.promise; });
        }
        cancel(t) { var _a; this._done = !0; __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_Xn, "f").call(this); this._stream._abortRequest(this._requestXhr); (_a = this.onClosed) === null || _a === void 0 ? void 0 : _a.call(this); }
    }
    _PDFNetworkStreamRangeReader_Xn = new WeakMap(), _PDFNetworkStreamRangeReader_instances = new WeakSet(), _PDFNetworkStreamRangeReader_Qn = function _PDFNetworkStreamRangeReader_Qn() { var _a; const t = getResponseOrigin((_a = this._requestXhr) === null || _a === void 0 ? void 0 : _a.responseURL); try {
        ensureResponseOrigin(t, this._stream._responseOrigin);
    }
    catch (t) {
        this._storedError = t;
        __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_instances, "m", _PDFNetworkStreamRangeReader_tr).call(this, 0);
    } }, _PDFNetworkStreamRangeReader_Zn = function _PDFNetworkStreamRangeReader_Zn(t) { var _a; if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t, done: !1 });
    }
    else
        this._queuedChunk = t; this._done = !0; __classPrivateFieldGet(this, _PDFNetworkStreamRangeReader_Xn, "f").call(this); (_a = this.onClosed) === null || _a === void 0 ? void 0 : _a.call(this); }, _PDFNetworkStreamRangeReader_tr = function _PDFNetworkStreamRangeReader_tr(t) { var _a; (_a = this._storedError) !== null && _a !== void 0 ? _a : (this._storedError = createResponseError(t, this._stream.url)); for (const t of this._requests)
        t.reject(this._storedError); this._requests.length = 0; this._queuedChunk = null; };
    function getReadableStream(t) { const { Readable: e } = process.getBuiltinModule("stream"); if ("function" == typeof e.toWeb)
        return e.toWeb(t); return process.getBuiltinModule("module").createRequire((self.location && self.location.href || ''))("node-readable-to-web-readable-stream").makeDefaultReadableStreamFromNodeReadable(t); }
    class PDFNodeStream extends BasePDFStream {
        constructor(t) { super(t, PDFNodeStreamReader, PDFNodeStreamRangeReader); const { url: e } = t; assert("file:" === e.protocol, "PDFNodeStream only supports file:// URLs."); }
    }
    class PDFNodeStreamReader extends BasePDFStreamReader {
        constructor(t) {
            super(t);
            this._reader = null;
            const { disableRange: e, disableStream: i, rangeChunkSize: n, url: r } = t._source;
            this._isStreamingSupported = !i;
            const s = process.getBuiltinModule("fs");
            s.promises.lstat(r).then(t => { const i = getReadableStream(s.createReadStream(r)); this._reader = i.getReader(); const { size: a } = t; this._contentLength = a; this._isRangeSupported = !e && a > 2 * n; !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled.")); this._headersCapability.resolve(); }).catch(t => { "ENOENT" === t.code && (t = createResponseError(0, r)); this._headersCapability.reject(t); });
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { yield this._headersCapability.promise; const { value: t, done: e } = yield this._reader.read(); if (e)
                return { value: t, done: e }; this._loaded += t.byteLength; this._callOnProgress(); return { value: getArrayBuffer(t), done: !1 }; });
        }
        cancel(t) { var _a; (_a = this._reader) === null || _a === void 0 ? void 0 : _a.cancel(t); }
    }
    class PDFNodeStreamRangeReader extends BasePDFStreamRangeReader {
        constructor(t, e, i) {
            super(t, e, i);
            this._readCapability = Promise.withResolvers();
            this._reader = null;
            const { url: n } = t._source, r = process.getBuiltinModule("fs");
            try {
                const t = getReadableStream(r.createReadStream(n, { start: e, end: i - 1 }));
                this._reader = t.getReader();
                this._readCapability.resolve();
            }
            catch (t) {
                this._readCapability.reject(t);
            }
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { yield this._readCapability.promise; const { value: t, done: e } = yield this._reader.read(); return e ? { value: t, done: e } : { value: getArrayBuffer(t), done: !1 }; });
        }
        cancel(t) { var _a; (_a = this._reader) === null || _a === void 0 ? void 0 : _a.cancel(t); }
    }
    class GlobalWorkerOptions {
        static get workerPort() { return __classPrivateFieldGet(this, _p, "f", _GlobalWorkerOptions_er); }
        static set workerPort(t) { if (!("undefined" != typeof Worker && t instanceof Worker) && null !== t)
            throw new Error("Invalid `workerPort` type."); __classPrivateFieldSet(this, _p, t, "f", _GlobalWorkerOptions_er); }
        static get workerSrc() { return __classPrivateFieldGet(this, _p, "f", _GlobalWorkerOptions_ir); }
        static set workerSrc(t) { if ("string" != typeof t)
            throw new Error("Invalid `workerSrc` type."); __classPrivateFieldSet(this, _p, t, "f", _GlobalWorkerOptions_ir); }
    }
    _p = GlobalWorkerOptions;
    _GlobalWorkerOptions_er = { value: null };
    _GlobalWorkerOptions_ir = { value: "" };
    class Metadata {
        constructor({ parsedData: t, rawData: e }) {
            _Metadata_nr.set(this, void 0);
            _Metadata_rr.set(this, void 0);
            __classPrivateFieldSet(this, _Metadata_nr, t, "f");
            __classPrivateFieldSet(this, _Metadata_rr, e, "f");
        }
        getRaw() { return __classPrivateFieldGet(this, _Metadata_rr, "f"); }
        get(t) { var _a; return (_a = __classPrivateFieldGet(this, _Metadata_nr, "f").get(t)) !== null && _a !== void 0 ? _a : null; }
        [(_Metadata_nr = new WeakMap(), _Metadata_rr = new WeakMap(), Symbol.iterator)]() { return __classPrivateFieldGet(this, _Metadata_nr, "f").entries(); }
    }
    const Nt = Symbol("INTERNAL");
    class OptionalContentGroup {
        constructor(t, { name: e, intent: i, usage: n, rbGroups: r }) {
            _OptionalContentGroup_sr.set(this, !1);
            _OptionalContentGroup_ar.set(this, !1);
            _OptionalContentGroup_or.set(this, !1);
            _OptionalContentGroup_lr.set(this, !0);
            __classPrivateFieldSet(this, _OptionalContentGroup_sr, !!(t & a), "f");
            __classPrivateFieldSet(this, _OptionalContentGroup_ar, !!(t & o), "f");
            this.name = e;
            this.intent = i;
            this.usage = n;
            this.rbGroups = r;
        }
        get visible() { if (__classPrivateFieldGet(this, _OptionalContentGroup_or, "f"))
            return __classPrivateFieldGet(this, _OptionalContentGroup_lr, "f"); if (!__classPrivateFieldGet(this, _OptionalContentGroup_lr, "f"))
            return !1; const { print: t, view: e } = this.usage; return __classPrivateFieldGet(this, _OptionalContentGroup_sr, "f") ? "OFF" !== (e === null || e === void 0 ? void 0 : e.viewState) : !__classPrivateFieldGet(this, _OptionalContentGroup_ar, "f") || "OFF" !== (t === null || t === void 0 ? void 0 : t.printState); }
        _setVisible(t, e, i = !1) { t !== Nt && unreachable("Internal method `_setVisible` called."); __classPrivateFieldSet(this, _OptionalContentGroup_or, i, "f"); __classPrivateFieldSet(this, _OptionalContentGroup_lr, e, "f"); }
    }
    _OptionalContentGroup_sr = new WeakMap(), _OptionalContentGroup_ar = new WeakMap(), _OptionalContentGroup_or = new WeakMap(), _OptionalContentGroup_lr = new WeakMap();
    class OptionalContentConfig {
        constructor(t, e = a) {
            _OptionalContentConfig_instances.add(this);
            _OptionalContentConfig_hr.set(this, null);
            _OptionalContentConfig_cr.set(this, new Map);
            _OptionalContentConfig_dr.set(this, null);
            _OptionalContentConfig_ur.set(this, null);
            this.renderingIntent = e;
            this.name = null;
            this.creator = null;
            if (null !== t) {
                this.name = t.name;
                this.creator = t.creator;
                __classPrivateFieldSet(this, _OptionalContentConfig_ur, t.order, "f");
                for (const i of t.groups)
                    __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").set(i.id, new OptionalContentGroup(e, i));
                if ("OFF" === t.baseState)
                    for (const t of __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").values())
                        t._setVisible(Nt, !1);
                for (const e of t.on)
                    __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e)._setVisible(Nt, !0);
                for (const e of t.off)
                    __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e)._setVisible(Nt, !1);
                __classPrivateFieldSet(this, _OptionalContentConfig_dr, this.getHash(), "f");
            }
        }
        isVisible(t) { if (0 === __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").size)
            return !0; if (!t) {
            info("Optional content group not defined.");
            return !0;
        } if ("OCG" === t.type) {
            if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(t.id)) {
                warn(`Optional content group not found: ${t.id}`);
                return !0;
            }
            return __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(t.id).visible;
        } if ("OCMD" === t.type) {
            if (t.expression)
                return __classPrivateFieldGet(this, _OptionalContentConfig_instances, "m", _OptionalContentConfig_pr).call(this, t.expression);
            if (!t.policy || "AnyOn" === t.policy) {
                for (const e of t.ids) {
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(e)) {
                        warn(`Optional content group not found: ${e}`);
                        return !0;
                    }
                    if (__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e).visible)
                        return !0;
                }
                return !1;
            }
            if ("AllOn" === t.policy) {
                for (const e of t.ids) {
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(e)) {
                        warn(`Optional content group not found: ${e}`);
                        return !0;
                    }
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e).visible)
                        return !1;
                }
                return !0;
            }
            if ("AnyOff" === t.policy) {
                for (const e of t.ids) {
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(e)) {
                        warn(`Optional content group not found: ${e}`);
                        return !0;
                    }
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e).visible)
                        return !0;
                }
                return !1;
            }
            if ("AllOff" === t.policy) {
                for (const e of t.ids) {
                    if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(e)) {
                        warn(`Optional content group not found: ${e}`);
                        return !0;
                    }
                    if (__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e).visible)
                        return !1;
                }
                return !0;
            }
            warn(`Unknown optional content policy ${t.policy}.`);
            return !0;
        } warn(`Unknown group type ${t.type}.`); return !0; }
        setVisibility(t, e = !0, i = !0) { var _a; const n = __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(t); if (n) {
            if (i && e && n.rbGroups.length)
                for (const e of n.rbGroups)
                    for (const i of e)
                        i !== t && ((_a = __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(i)) === null || _a === void 0 ? void 0 : _a._setVisible(Nt, !1, !0));
            n._setVisible(Nt, !!e, !0);
            __classPrivateFieldSet(this, _OptionalContentConfig_hr, null, "f");
        }
        else
            warn(`Optional content group not found: ${t}`); }
        setOCGState({ state: t, preserveRB: e }) { let i; for (const n of t) {
            switch (n) {
                case "ON":
                case "OFF":
                case "Toggle":
                    i = n;
                    continue;
            }
            const t = __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(n);
            if (t)
                switch (i) {
                    case "ON":
                        this.setVisibility(n, !0, e);
                        break;
                    case "OFF":
                        this.setVisibility(n, !1, e);
                        break;
                    case "Toggle": this.setVisibility(n, !t.visible, e);
                }
        } __classPrivateFieldSet(this, _OptionalContentConfig_hr, null, "f"); }
        get hasInitialVisibility() { return null === __classPrivateFieldGet(this, _OptionalContentConfig_dr, "f") || this.getHash() === __classPrivateFieldGet(this, _OptionalContentConfig_dr, "f"); }
        getOrder() { return __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").size ? __classPrivateFieldGet(this, _OptionalContentConfig_ur, "f") ? __classPrivateFieldGet(this, _OptionalContentConfig_ur, "f").slice() : [...__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").keys()] : null; }
        getGroup(t) { return __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(t) || null; }
        getHash() { if (null !== __classPrivateFieldGet(this, _OptionalContentConfig_hr, "f"))
            return __classPrivateFieldGet(this, _OptionalContentConfig_hr, "f"); const t = new MurmurHash3_64; for (const [e, i] of __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f"))
            t.update(`${e}:${i.visible}`); return __classPrivateFieldSet(this, _OptionalContentConfig_hr, t.hexdigest(), "f"); }
        [(_OptionalContentConfig_hr = new WeakMap(), _OptionalContentConfig_cr = new WeakMap(), _OptionalContentConfig_dr = new WeakMap(), _OptionalContentConfig_ur = new WeakMap(), _OptionalContentConfig_instances = new WeakSet(), _OptionalContentConfig_pr = function _OptionalContentConfig_pr(t) { const e = t.length; if (e < 2)
            return !0; const i = t[0]; for (let n = 1; n < e; n++) {
            const e = t[n];
            let r;
            if (Array.isArray(e))
                r = __classPrivateFieldGet(this, _OptionalContentConfig_instances, "m", _OptionalContentConfig_pr).call(this, e);
            else {
                if (!__classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").has(e)) {
                    warn(`Optional content group not found: ${e}`);
                    return !0;
                }
                r = __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").get(e).visible;
            }
            switch (i) {
                case "And":
                    if (!r)
                        return !1;
                    break;
                case "Or":
                    if (r)
                        return !0;
                    break;
                case "Not": return !r;
                default: return !0;
            }
        } return "And" === i; }, Symbol.iterator)]() { return __classPrivateFieldGet(this, _OptionalContentConfig_cr, "f").entries(); }
    }
    class PagesMapper {
        constructor() {
            _PagesMapper_instances.add(this);
            _PagesMapper_gr.set(this, null);
            _PagesMapper_mr.set(this, null);
            _PagesMapper_fr.set(this, 0);
            _PagesMapper_br.set(this, null);
            _PagesMapper_yr.set(this, null);
        }
        get pagesNumber() { return __classPrivateFieldGet(this, _PagesMapper_fr, "f"); }
        set pagesNumber(t) { if (__classPrivateFieldGet(this, _PagesMapper_fr, "f") !== t) {
            __classPrivateFieldSet(this, _PagesMapper_fr, t, "f");
            __classPrivateFieldSet(this, _PagesMapper_gr, null, "f");
            __classPrivateFieldSet(this, _PagesMapper_mr, null, "f");
        } }
        movePages(t, e, i) { __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_vr).call(this); const n = __classPrivateFieldGet(this, _PagesMapper_gr, "f"), r = __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_wr).call(this), s = e.length, a = new Uint32Array(s); let o = 0; for (let t = 0; t < s; t++) {
            const r = e[t] - 1;
            a[t] = n[r];
            r < i && o++;
        } const l = __classPrivateFieldGet(this, _PagesMapper_fr, "f"), h = l - s, c = MathClamp(i - o, 0, h); for (let e = 0, i = 0; e < l; e++)
            t.has(e + 1) || (n[i++] = n[e]); n.copyWithin(c + s, c, h); n.set(a, c); __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_Ar).call(this, r); n.every((t, e) => t === e + 1) && (__classPrivateFieldSet(this, _PagesMapper_gr, null, "f")); }
        deletePages(t) { __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_vr).call(this); const e = __classPrivateFieldGet(this, _PagesMapper_gr, "f"), i = __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_wr).call(this); __classPrivateFieldSet(this, _PagesMapper_yr, { pageNumberToId: e.slice(), pagesNumber: __classPrivateFieldGet(this, _PagesMapper_fr, "f"), prevPageNumbers: __classPrivateFieldGet(this, _PagesMapper_mr, "f").slice() }, "f"); const n = __classPrivateFieldGet(this, _PagesMapper_fr, "f") - t.length; __classPrivateFieldSet(this, _PagesMapper_fr, n, "f"); const r = __classPrivateFieldSet(this, _PagesMapper_gr, new Uint32Array(n), "f"); __classPrivateFieldSet(this, _PagesMapper_mr, new Int32Array(n), "f"); let s = 0, a = 0; for (const i of t) {
            const t = i - 1;
            if (t !== s) {
                r.set(e.subarray(s, t), a);
                a += t - s;
            }
            s = t + 1;
        } s < e.length && r.set(e.subarray(s), a); __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_Ar).call(this, i, new Set(t)); }
        cancelDelete() { if (__classPrivateFieldGet(this, _PagesMapper_yr, "f")) {
            __classPrivateFieldSet(this, _PagesMapper_gr, __classPrivateFieldGet(this, _PagesMapper_yr, "f").pageNumberToId, "f");
            __classPrivateFieldSet(this, _PagesMapper_fr, __classPrivateFieldGet(this, _PagesMapper_yr, "f").pagesNumber, "f");
            __classPrivateFieldSet(this, _PagesMapper_mr, __classPrivateFieldGet(this, _PagesMapper_yr, "f").prevPageNumbers, "f");
            __classPrivateFieldSet(this, _PagesMapper_yr, null, "f");
        } }
        cleanSavedData() { __classPrivateFieldSet(this, _PagesMapper_yr, null, "f"); }
        copyPages(t) { __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_vr).call(this); __classPrivateFieldSet(this, _PagesMapper_br, { pageNumbers: t, pageIds: t.map(t => __classPrivateFieldGet(this, _PagesMapper_gr, "f")[t - 1]) }, "f"); }
        cancelCopy() { __classPrivateFieldSet(this, _PagesMapper_br, null, "f"); }
        pastePages(t) { __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_vr).call(this); const e = __classPrivateFieldGet(this, _PagesMapper_gr, "f"), i = __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_wr).call(this), { pageNumbers: n, pageIds: r } = __classPrivateFieldGet(this, _PagesMapper_br, "f"), s = __classPrivateFieldGet(this, _PagesMapper_fr, "f") + n.length; __classPrivateFieldSet(this, _PagesMapper_fr, s, "f"); const a = __classPrivateFieldSet(this, _PagesMapper_gr, new Uint32Array(s), "f"); __classPrivateFieldSet(this, _PagesMapper_mr, new Int32Array(s), "f"); a.set(e.subarray(0, t), 0); a.set(r, t); a.set(e.subarray(t), t + n.length); __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_Ar).call(this, i, null, t, n); __classPrivateFieldSet(this, _PagesMapper_br, null, "f"); }
        hasBeenAltered() { return null !== __classPrivateFieldGet(this, _PagesMapper_gr, "f"); }
        getPageMappingForSaving(t = null) { t !== null && t !== void 0 ? t : (t = __classPrivateFieldGet(this, _PagesMapper_instances, "m", _PagesMapper_wr).call(this)); let e = 0; for (const i of t.values())
            e = Math.max(e, i.length); const i = new Array(e); for (let t = 0; t < e; t++)
            i[t] = { document: null, pageIndices: [], includePages: [] }; for (const [e, n] of t)
            for (let t = 0, r = n.length; t < r; t++)
                i[t].includePages.push([e - 1, n[t] - 1]); for (const { includePages: t, pageIndices: e } of i) {
            t.sort((t, e) => t[0] - e[0]);
            for (let i = 0, n = t.length; i < n; i++) {
                e.push(t[i][1]);
                t[i] = t[i][0];
            }
        } return i; }
        extractPages(t) { t = Array.from(t).sort((t, e) => t - e); const e = new Map; for (let i = 0, n = t.length; i < n; i++) {
            const n = this.getPageId(t[i]);
            e.getOrInsertComputed(n, makeArr).push(i + 1);
        } return this.getPageMappingForSaving(e); }
        getPrevPageNumber(t) { var _a, _5; return (_5 = (_a = __classPrivateFieldGet(this, _PagesMapper_mr, "f")) === null || _a === void 0 ? void 0 : _a[t - 1]) !== null && _5 !== void 0 ? _5 : 0; }
        getPageNumber(t) { if (!__classPrivateFieldGet(this, _PagesMapper_gr, "f"))
            return t; const e = __classPrivateFieldGet(this, _PagesMapper_gr, "f"); for (let i = 0, n = __classPrivateFieldGet(this, _PagesMapper_fr, "f"); i < n; i++)
            if (e[i] === t)
                return i + 1; return 0; }
        getPageId(t) { var _a, _5; return (_5 = (_a = __classPrivateFieldGet(this, _PagesMapper_gr, "f")) === null || _a === void 0 ? void 0 : _a[t - 1]) !== null && _5 !== void 0 ? _5 : t; }
        getMapping() { var _a; return (_a = __classPrivateFieldGet(this, _PagesMapper_gr, "f")) === null || _a === void 0 ? void 0 : _a.subarray(0, this.pagesNumber); }
    }
    _PagesMapper_gr = new WeakMap(), _PagesMapper_mr = new WeakMap(), _PagesMapper_fr = new WeakMap(), _PagesMapper_br = new WeakMap(), _PagesMapper_yr = new WeakMap(), _PagesMapper_instances = new WeakSet(), _PagesMapper_vr = function _PagesMapper_vr() { if (__classPrivateFieldGet(this, _PagesMapper_gr, "f"))
        return; const t = __classPrivateFieldGet(this, _PagesMapper_fr, "f"), e = __classPrivateFieldSet(this, _PagesMapper_gr, new Uint32Array(t), "f"); for (let i = 0; i < t; i++)
        e[i] = i + 1; __classPrivateFieldSet(this, _PagesMapper_mr, new Int32Array(e), "f"); }, _PagesMapper_wr = function _PagesMapper_wr() { const t = new Map, e = __classPrivateFieldGet(this, _PagesMapper_gr, "f"); for (let i = 0, n = __classPrivateFieldGet(this, _PagesMapper_fr, "f"); i < n; i++) {
        const n = e[i], r = t.get(n);
        r ? r.push(i + 1) : t.set(n, [i + 1]);
    } return t; }, _PagesMapper_Ar = function _PagesMapper_Ar(t, e = null, i = -1, n = null) { var _a; const r = __classPrivateFieldGet(this, _PagesMapper_mr, "f"), s = __classPrivateFieldGet(this, _PagesMapper_gr, "f"), a = i + ((_a = n === null || n === void 0 ? void 0 : n.length) !== null && _a !== void 0 ? _a : 0), o = new Map; for (let l = 0, h = __classPrivateFieldGet(this, _PagesMapper_fr, "f"); l < h; l++) {
        if (l >= i && l < a) {
            r[l] = -n[l - i];
            continue;
        }
        const h = s[l], c = t.get(h);
        let d = o.get(h) || 0;
        if (e && c)
            for (; d < c.length && e.has(c[d]);)
                d++;
        r[l] = c === null || c === void 0 ? void 0 : c[d];
        o.set(h, d + 1);
    } };
    const Ut = Symbol("INITIAL_DATA"), dataObj = () => (Object.assign(Object.assign({}, Promise.withResolvers()), { data: Ut }));
    class PDFObjects {
        constructor() {
            _PDFObjects_xr.set(this, new Map);
        }
        get(t, e = null) { if (e) {
            const i = __classPrivateFieldGet(this, _PDFObjects_xr, "f").getOrInsertComputed(t, dataObj);
            i.promise.then(() => e(i.data));
            return null;
        } const i = __classPrivateFieldGet(this, _PDFObjects_xr, "f").get(t); if (!i || i.data === Ut)
            throw new Error(`Requesting object that isn't resolved yet ${t}.`); return i.data; }
        has(t) { const e = __classPrivateFieldGet(this, _PDFObjects_xr, "f").get(t); return !!e && e.data !== Ut; }
        delete(t) { const e = __classPrivateFieldGet(this, _PDFObjects_xr, "f").get(t); if (!e || e.data === Ut)
            return !1; __classPrivateFieldGet(this, _PDFObjects_xr, "f").delete(t); return !0; }
        resolve(t, e = null) { const i = __classPrivateFieldGet(this, _PDFObjects_xr, "f").getOrInsertComputed(t, dataObj); if (i.data !== Ut)
            throw new Error(`Object already resolved ${t}.`); i.data = e; i.resolve(); }
        clear() { var _a; for (const { data: t } of __classPrivateFieldGet(this, _PDFObjects_xr, "f").values())
            (_a = t === null || t === void 0 ? void 0 : t.bitmap) === null || _a === void 0 ? void 0 : _a.close(); __classPrivateFieldGet(this, _PDFObjects_xr, "f").clear(); }
        *[(_PDFObjects_xr = new WeakMap(), Symbol.iterator)]() { for (const [t, { data: e }] of __classPrivateFieldGet(this, _PDFObjects_xr, "f"))
            e !== Ut && (yield [t, e]); }
    }
    class TextLayer {
        constructor({ textContentSource: t, images: e, container: i, viewport: n }) {
            var _a;
            _TextLayer_instances.add(this);
            _TextLayer_Er.set(this, Promise.withResolvers());
            _TextLayer_Ct.set(this, null);
            _TextLayer__r.set(this, !1);
            _TextLayer_Tr.set(this, !!((_a = globalThis.FontInspector) === null || _a === void 0 ? void 0 : _a.enabled));
            _TextLayer_Sr.set(this, null);
            _TextLayer_Cr.set(this, null);
            _TextLayer_Dr.set(this, null);
            _TextLayer_Pr.set(this, 0);
            _TextLayer_Mr.set(this, 0);
            _TextLayer_kr.set(this, null);
            _TextLayer_Ir.set(this, null);
            _TextLayer_Fr.set(this, 0);
            _TextLayer_Rr.set(this, 0);
            _TextLayer_Br.set(this, Object.create(null));
            _TextLayer_Or.set(this, []);
            _TextLayer_Lr.set(this, null);
            _TextLayer_Nr.set(this, []);
            _TextLayer_Ur.set(this, new WeakMap);
            _TextLayer_Hr.set(this, null);
            if (t instanceof ReadableStream)
                __classPrivateFieldSet(this, _TextLayer_Lr, t, "f");
            else {
                if ("object" != typeof t)
                    throw new Error('No "textContentSource" parameter specified.');
                __classPrivateFieldSet(this, _TextLayer_Lr, new ReadableStream({ start(e) { e.enqueue(t); e.close(); } }), "f");
            }
            __classPrivateFieldSet(this, _TextLayer_Ct, __classPrivateFieldSet(this, _TextLayer_Ir, i, "f"), "f");
            __classPrivateFieldSet(this, _TextLayer_Sr, e, "f");
            __classPrivateFieldSet(this, _TextLayer_Rr, n.scale * OutputScale.pixelRatio, "f");
            __classPrivateFieldSet(this, _TextLayer_Fr, n.rotation, "f");
            __classPrivateFieldSet(this, _TextLayer_Dr, { div: null, properties: null, ctx: null }, "f");
            const { pageWidth: r, pageHeight: s, pageX: a, pageY: o } = n.rawDims;
            __classPrivateFieldSet(this, _TextLayer_Hr, [1, 0, 0, -1, -a, o + s], "f");
            __classPrivateFieldSet(this, _TextLayer_Mr, r, "f");
            __classPrivateFieldSet(this, _TextLayer_Pr, s, "f");
            __classPrivateFieldGet(_q, _q, "m", _TextLayer_$r).call(_q);
            i.style.setProperty("--min-font-size", __classPrivateFieldGet(_q, _q, "f", _TextLayer_Wr));
            setLayerDimensions(i, n);
            __classPrivateFieldGet(this, _TextLayer_Er, "f").promise.finally(() => { __classPrivateFieldGet(_q, _q, "f", _TextLayer_Vr).delete(this); __classPrivateFieldSet(this, _TextLayer_Dr, null, "f"); __classPrivateFieldSet(this, _TextLayer_Br, null, "f"); }).catch(() => { });
        }
        static get fontFamilyMap() { const { isWindows: t, isFirefox: e } = FeatureTest.platform; return shadow(this, "fontFamilyMap", new Map([["sans-serif", (t && e ? "Calibri, " : "") + "sans-serif"], ["monospace", (t && e ? "Lucida Console, " : "") + "monospace"]])); }
        render() { __classPrivateFieldGet(this, _TextLayer_Sr, "f") && __classPrivateFieldGet(this, _TextLayer_Ct, "f").append(__classPrivateFieldGet(this, _TextLayer_Sr, "f").render()); const pump = () => { __classPrivateFieldGet(this, _TextLayer_kr, "f").read().then(({ value: t, done: e }) => { var _a; if (e)
            __classPrivateFieldGet(this, _TextLayer_Er, "f").resolve();
        else {
            __classPrivateFieldSet(this, _TextLayer_Cr, (_a = __classPrivateFieldGet(this, _TextLayer_Cr, "f")) !== null && _a !== void 0 ? _a : t.lang, "f");
            Object.assign(__classPrivateFieldGet(this, _TextLayer_Br, "f"), t.styles);
            __classPrivateFieldGet(this, _TextLayer_instances, "m", _TextLayer_qr).call(this, t.items);
            pump();
        } }, __classPrivateFieldGet(this, _TextLayer_Er, "f").reject); }; __classPrivateFieldSet(this, _TextLayer_kr, __classPrivateFieldGet(this, _TextLayer_Lr, "f").getReader(), "f"); __classPrivateFieldGet(_q, _q, "f", _TextLayer_Vr).add(this); pump(); return __classPrivateFieldGet(this, _TextLayer_Er, "f").promise; }
        update({ viewport: t, onBefore: e = null }) { const i = t.scale * OutputScale.pixelRatio, n = t.rotation; if (n !== __classPrivateFieldGet(this, _TextLayer_Fr, "f")) {
            e === null || e === void 0 ? void 0 : e();
            __classPrivateFieldSet(this, _TextLayer_Fr, n, "f");
            setLayerDimensions(__classPrivateFieldGet(this, _TextLayer_Ir, "f"), { rotation: n });
        } if (i !== __classPrivateFieldGet(this, _TextLayer_Rr, "f")) {
            e === null || e === void 0 ? void 0 : e();
            __classPrivateFieldSet(this, _TextLayer_Rr, i, "f");
            const t = { div: null, properties: null, ctx: __classPrivateFieldGet(_q, _q, "m", _TextLayer_Xr).call(_q, __classPrivateFieldGet(this, _TextLayer_Cr, "f")) };
            for (const e of __classPrivateFieldGet(this, _TextLayer_Nr, "f")) {
                t.properties = __classPrivateFieldGet(this, _TextLayer_Ur, "f").get(e);
                t.div = e;
                __classPrivateFieldGet(this, _TextLayer_instances, "m", _TextLayer_Yr).call(this, t);
            }
        } }
        cancel() { var _a; const t = new AbortException("TextLayer task cancelled."); (_a = __classPrivateFieldGet(this, _TextLayer_kr, "f")) === null || _a === void 0 ? void 0 : _a.cancel(t).catch(() => { }); __classPrivateFieldSet(this, _TextLayer_kr, null, "f"); __classPrivateFieldGet(this, _TextLayer_Er, "f").reject(t); }
        get textDivs() { return __classPrivateFieldGet(this, _TextLayer_Nr, "f"); }
        get textContentItemsStr() { return __classPrivateFieldGet(this, _TextLayer_Or, "f"); }
        static cleanup() { if (!(__classPrivateFieldGet(this, _q, "f", _TextLayer_Vr).size > 0)) {
            __classPrivateFieldGet(this, _q, "f", _TextLayer_zr).clear();
            for (const { canvas: t } of __classPrivateFieldGet(this, _q, "f", _TextLayer_jr).values())
                t.remove();
            __classPrivateFieldGet(this, _q, "f", _TextLayer_jr).clear();
        } }
    }
    _q = TextLayer, _TextLayer_Er = new WeakMap(), _TextLayer_Ct = new WeakMap(), _TextLayer__r = new WeakMap(), _TextLayer_Tr = new WeakMap(), _TextLayer_Sr = new WeakMap(), _TextLayer_Cr = new WeakMap(), _TextLayer_Dr = new WeakMap(), _TextLayer_Pr = new WeakMap(), _TextLayer_Mr = new WeakMap(), _TextLayer_kr = new WeakMap(), _TextLayer_Ir = new WeakMap(), _TextLayer_Fr = new WeakMap(), _TextLayer_Rr = new WeakMap(), _TextLayer_Br = new WeakMap(), _TextLayer_Or = new WeakMap(), _TextLayer_Lr = new WeakMap(), _TextLayer_Nr = new WeakMap(), _TextLayer_Ur = new WeakMap(), _TextLayer_Hr = new WeakMap(), _TextLayer_instances = new WeakSet(), _TextLayer_qr = function _TextLayer_qr(t) { var _a; var _5; if (__classPrivateFieldGet(this, _TextLayer__r, "f"))
        return; (_a = (_5 = __classPrivateFieldGet(this, _TextLayer_Dr, "f")).ctx) !== null && _a !== void 0 ? _a : (_5.ctx = __classPrivateFieldGet(_q, _q, "m", _TextLayer_Xr).call(_q, __classPrivateFieldGet(this, _TextLayer_Cr, "f"))); const e = __classPrivateFieldGet(this, _TextLayer_Nr, "f"), i = __classPrivateFieldGet(this, _TextLayer_Or, "f"); for (const n of t) {
        if (e.length > 1e5) {
            warn("Ignoring additional textDivs for performance reasons.");
            __classPrivateFieldSet(this, _TextLayer__r, !0, "f");
            return;
        }
        if (void 0 !== n.str) {
            i.push(n.str);
            __classPrivateFieldGet(this, _TextLayer_instances, "m", _TextLayer_Kr).call(this, n);
        }
        else if ("beginMarkedContentProps" === n.type || "beginMarkedContent" === n.type) {
            const t = __classPrivateFieldGet(this, _TextLayer_Ct, "f");
            __classPrivateFieldSet(this, _TextLayer_Ct, document.createElement("span"), "f");
            __classPrivateFieldGet(this, _TextLayer_Ct, "f").classList.add("markedContent");
            n.id && __classPrivateFieldGet(this, _TextLayer_Ct, "f").setAttribute("id", `${n.id}`);
            "Artifact" === n.tag && (__classPrivateFieldGet(this, _TextLayer_Ct, "f").ariaHidden = !0);
            t.append(__classPrivateFieldGet(this, _TextLayer_Ct, "f"));
        }
        else
            "endMarkedContent" === n.type && (__classPrivateFieldSet(this, _TextLayer_Ct, __classPrivateFieldGet(this, _TextLayer_Ct, "f").parentNode, "f"));
    } }, _TextLayer_Kr = function _TextLayer_Kr(t) { const e = document.createElement("span"), i = { angle: 0, canvasWidth: 0, hasText: "" !== t.str, hasEOL: t.hasEOL, fontSize: 0 }; __classPrivateFieldGet(this, _TextLayer_Nr, "f").push(e); const n = Util.transform(__classPrivateFieldGet(this, _TextLayer_Hr, "f"), t.transform); let r = Math.atan2(n[1], n[0]); const s = __classPrivateFieldGet(this, _TextLayer_Br, "f")[t.fontName]; s.vertical && (r += Math.PI / 2); let a = __classPrivateFieldGet(this, _TextLayer_Tr, "f") && s.fontSubstitution || s.fontFamily; a = _q.fontFamilyMap.get(a) || a; const o = Math.hypot(n[2], n[3]), l = o * __classPrivateFieldGet(_q, _q, "m", _TextLayer_Jr).call(_q, a, s, __classPrivateFieldGet(this, _TextLayer_Cr, "f")); let h, c; if (0 === r) {
        h = n[4];
        c = n[5] - l;
    }
    else {
        h = n[4] + l * Math.sin(r);
        c = n[5] - l * Math.cos(r);
    } const d = e.style; d.left = `${(100 * h / __classPrivateFieldGet(this, _TextLayer_Mr, "f")).toFixed(2)}%`; d.top = `${(100 * c / __classPrivateFieldGet(this, _TextLayer_Pr, "f")).toFixed(2)}%`; d.setProperty("--font-height", `${o.toFixed(2)}px`); d.fontFamily = a; i.fontSize = o; e.setAttribute("role", "presentation"); e.textContent = t.str; e.dir = t.dir; __classPrivateFieldGet(this, _TextLayer_Tr, "f") && (e.dataset.fontName = s.fontSubstitutionLoadedName || t.fontName); 0 !== r && (i.angle = r * (180 / Math.PI)); let u = !1; if (t.str.length > 1)
        u = !0;
    else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
        const e = Math.abs(t.transform[0]), i = Math.abs(t.transform[3]);
        e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (u = !0);
    } u && (i.canvasWidth = s.vertical ? t.height : t.width); __classPrivateFieldGet(this, _TextLayer_Ur, "f").set(e, i); __classPrivateFieldGet(this, _TextLayer_Dr, "f").div = e; __classPrivateFieldGet(this, _TextLayer_Dr, "f").properties = i; __classPrivateFieldGet(this, _TextLayer_instances, "m", _TextLayer_Yr).call(this, __classPrivateFieldGet(this, _TextLayer_Dr, "f")); i.hasText && __classPrivateFieldGet(this, _TextLayer_Ct, "f").append(e); if (i.hasEOL) {
        const t = document.createElement("br");
        t.setAttribute("role", "presentation");
        __classPrivateFieldGet(this, _TextLayer_Ct, "f").append(t);
    } }, _TextLayer_Yr = function _TextLayer_Yr(t) { const { div: e, properties: i, ctx: n } = t, { style: r } = e; if (0 !== i.canvasWidth && i.hasText) {
        const { fontFamily: t } = r, { canvasWidth: s, fontSize: a } = i;
        __classPrivateFieldGet(_q, _q, "m", _TextLayer_Qr).call(_q, n, a * __classPrivateFieldGet(this, _TextLayer_Rr, "f"), t);
        const { width: o } = n.measureText(e.textContent);
        o > 0 && r.setProperty("--scale-x", s * __classPrivateFieldGet(this, _TextLayer_Rr, "f") / o);
    } 0 !== i.angle && r.setProperty("--rotate", `${i.angle}deg`); }, _TextLayer_Xr = function _TextLayer_Xr(t = null) { let e = __classPrivateFieldGet(this, _q, "f", _TextLayer_jr).get(t || (t = "")); if (!e) {
        const i = document.createElement("canvas");
        i.className = "hiddenCanvasElement";
        i.lang = t;
        document.body.append(i);
        e = i.getContext("2d", { alpha: !1, willReadFrequently: !0 });
        __classPrivateFieldGet(this, _q, "f", _TextLayer_jr).set(t, e);
        __classPrivateFieldGet(this, _q, "f", _TextLayer_Gr).set(e, { size: 0, family: "" });
    } return e; }, _TextLayer_Qr = function _TextLayer_Qr(t, e, i) { const n = __classPrivateFieldGet(this, _q, "f", _TextLayer_Gr).get(t); if (e !== n.size || i !== n.family) {
        t.font = `${e}px ${i}`;
        n.size = e;
        n.family = i;
    } }, _TextLayer_$r = function _TextLayer_$r() { if (null !== __classPrivateFieldGet(this, _q, "f", _TextLayer_Wr))
        return; const t = document.createElement("div"); t.style.opacity = 0; t.style.lineHeight = 1; t.style.fontSize = "1px"; t.style.position = "absolute"; t.textContent = "X"; document.body.append(t); __classPrivateFieldSet(this, _q, t.getBoundingClientRect().height, "f", _TextLayer_Wr); t.remove(); }, _TextLayer_Jr = function _TextLayer_Jr(t, e, i) { const n = __classPrivateFieldGet(this, _q, "f", _TextLayer_zr).get(t); if (n)
        return n; const r = __classPrivateFieldGet(this, _q, "m", _TextLayer_Xr).call(this, i); r.canvas.width = r.canvas.height = 30; __classPrivateFieldGet(this, _q, "m", _TextLayer_Qr).call(this, r, 30, t); const s = r.measureText(""), a = s.fontBoundingBoxAscent, o = Math.abs(s.fontBoundingBoxDescent); r.canvas.width = r.canvas.height = 0; let l = .8; if (a)
        l = a / (a + o);
    else {
        FeatureTest.platform.isFirefox && warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.");
        e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent);
    } __classPrivateFieldGet(this, _q, "f", _TextLayer_zr).set(t, l); return l; };
    _TextLayer_zr = { value: new Map };
    _TextLayer_jr = { value: new Map };
    _TextLayer_Gr = { value: new WeakMap };
    _TextLayer_Wr = { value: null };
    _TextLayer_Vr = { value: new Set };
    function getDocument(t = {}) { var _a; "string" == typeof t || t instanceof URL ? t = { url: t } : (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = { data: t }); const e = new PDFDocumentLoadingTask, { docId: n } = e, r = t.url ? function getUrlProp(t) { if (t instanceof URL)
        return t; if ("string" == typeof t) {
        if (i) {
            if (/^[a-z][a-z0-9\-+.]+:/i.test(t))
                return new URL(t);
            const e = process.getBuiltinModule("url");
            return new URL(e.pathToFileURL(t));
        }
        const e = URL.parse(t, window.location);
        if (e)
            return e;
    } throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property."); }(t.url) : null, s = t.data ? function getDataProp(t) { if (i && "undefined" != typeof Buffer && t instanceof Buffer)
        throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`."); if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength)
        return t; if ("string" == typeof t)
        return stringToBytes(t); if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || "object" == typeof t && !isNaN(t === null || t === void 0 ? void 0 : t.length))
        return new Uint8Array(t); throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property."); }(t.data) : null, a = t.httpHeaders || null, o = !0 === t.withCredentials, l = (_a = t.password) !== null && _a !== void 0 ? _a : null, h = t.range instanceof PDFDataRangeTransport ? t.range : null, c = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : 65536; let d = t.worker instanceof PDFWorker ? t.worker : null; const u = t.verbosity, p = "string" != typeof t.docBaseUrl || isDataScheme(t.docBaseUrl) ? null : t.docBaseUrl, g = getFactoryUrlProp(t.cMapUrl), m = !1 !== t.cMapPacked, f = getFactoryUrlProp(t.iccUrl), b = getFactoryUrlProp(t.standardFontDataUrl), y = getFactoryUrlProp(t.wasmUrl), v = !0 !== t.stopAtErrors, w = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1, A = !1 !== t.isEvalSupported, x = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !i, E = "boolean" == typeof t.isImageDecoderSupported ? t.isImageDecoderSupported : !i && (FeatureTest.platform.isFirefox || !globalThis.chrome), _ = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1, T = "boolean" == typeof t.disableFontFace ? t.disableFontFace : i, S = !0 === t.fontExtraProperties, C = !0 === t.enableXfa, D = t.ownerDocument || globalThis.document, P = !0 === t.disableRange, M = !0 === t.disableStream, k = !0 === t.disableAutoFetch, I = !0 === t.pdfBug, R = t.CanvasFactory || (i ? NodeCanvasFactory : DOMCanvasFactory), B = t.FilterFactory || (i ? NodeFilterFactory : DOMFilterFactory), O = t.BinaryDataFactory || (i ? NodeBinaryDataFactory : DOMBinaryDataFactory), L = !0 === t.enableHWA, N = !0 === t.enableWebGPU, U = !1 !== t.useWasm, H = t.pagesMapper || new PagesMapper, z = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !i && !T, j = "boolean" == typeof t.useWorkerFetch ? t.useWorkerFetch : !!(O === DOMBinaryDataFactory && g && m && b && y && isValidFetchUrl(g, document.baseURI) && isValidFetchUrl(b, document.baseURI) && isValidFetchUrl(y, document.baseURI)); setVerbosityLevel(u); const G = { canvasFactory: new R({ ownerDocument: D, enableHWA: L }), filterFactory: new B({ docId: n, ownerDocument: D }), binaryDataFactory: j ? null : new O({ cMapUrl: g, standardFontDataUrl: b, wasmUrl: y }) }; if (!d) {
        d = PDFWorker.create({ verbosity: u, port: GlobalWorkerOptions.workerPort });
        e._worker = d;
    } const W = { docId: n, apiVersion: "5.6.205", data: s, password: l, disableAutoFetch: k, rangeChunkSize: c, docBaseUrl: p, enableXfa: C, evaluatorOptions: { maxImageSize: w, disableFontFace: T, ignoreErrors: v, isEvalSupported: A, isOffscreenCanvasSupported: x, isImageDecoderSupported: E, canvasMaxAreaInBytes: _, fontExtraProperties: S, useSystemFonts: z, useWasm: U, useWorkerFetch: j, cMapUrl: g, cMapPacked: m, iccUrl: f, standardFontDataUrl: b, wasmUrl: y, enableWebGPU: N } }, V = { ownerDocument: D, pdfBug: I, styleElement: null, enableHWA: L, loadingParams: { disableAutoFetch: k, enableXfa: C } }; d.promise.then(function () { if (e.destroyed)
        throw new Error("Loading aborted"); if (d.destroyed)
        throw new Error("Worker was destroyed"); const t = d.messageHandler.sendWithPromise("GetDocRequest", W, s ? [s.buffer] : null); let l; if (s)
        ;
    else if (h)
        l = new PDFDataTransportStream({ pdfDataRangeTransport: h, disableRange: P, disableStream: M });
    else {
        if (!r)
            throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
        {
            const t = function getNetworkStream(t) { return isValidFetchUrl(t) ? PDFFetchStream : i ? PDFNodeStream : PDFNetworkStream; }(r);
            l = new t({ url: r, httpHeaders: a, withCredentials: o, rangeChunkSize: c, disableRange: P, disableStream: M });
        }
    } return t.then(t => { if (e.destroyed)
        throw new Error("Loading aborted"); if (d.destroyed)
        throw new Error("Worker was destroyed"); const i = new MessageHandler(n, t, d.port), r = new WorkerTransport(i, e, l, V, G, H); e._transport = r; i.send("Ready", null); }); }).catch(e._capability.reject); return e; }
    class PDFDocumentLoadingTask {
        constructor() {
            var _a, _5, _6;
            this._capability = Promise.withResolvers();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + (__classPrivateFieldSet(_a = _r, _r, (_6 = __classPrivateFieldGet(_a, _r, "f", _PDFDocumentLoadingTask_xn), _5 = _6++, _6), "f", _PDFDocumentLoadingTask_xn), _5);
            this.destroyed = !1;
            this.onPassword = null;
            this.onProgress = null;
        }
        get promise() { return this._capability.promise; }
        destroy() {
            return __awaiter(this, void 0, void 0, function* () { var _a, _5, _6, _7; this.destroyed = !0; try {
                ((_a = this._worker) === null || _a === void 0 ? void 0 : _a.port) && (this._worker._pendingDestroy = !0);
                yield ((_5 = this._transport) === null || _5 === void 0 ? void 0 : _5.destroy());
            }
            catch (t) {
                ((_6 = this._worker) === null || _6 === void 0 ? void 0 : _6.port) && delete this._worker._pendingDestroy;
                throw t;
            } this._transport = null; (_7 = this._worker) === null || _7 === void 0 ? void 0 : _7.destroy(); this._worker = null; });
        }
        getData() {
            return __awaiter(this, void 0, void 0, function* () { return this._transport.getData(); });
        }
    }
    _r = PDFDocumentLoadingTask;
    _PDFDocumentLoadingTask_xn = { value: 0 };
    class PDFDataRangeTransport {
        constructor(t, e, i = !1, n = null) {
            _PDFDataRangeTransport_Er.set(this, Promise.withResolvers());
            _PDFDataRangeTransport_Zr.set(this, []);
            _PDFDataRangeTransport_ts.set(this, []);
            _PDFDataRangeTransport_es.set(this, []);
            this.length = t;
            this.initialData = e;
            this.progressiveDone = i;
            this.contentDispositionFilename = n;
            Object.defineProperty(this, "onDataProgress", { value: () => { !function deprecated(t) { console.log("Deprecated API usage: " + t); }("`PDFDataRangeTransport.prototype.onDataProgress` - method was removed, since loading progress is now reported automatically through the `PDFDataTransportStream` class (and related code)."); } });
        }
        addRangeListener(t) { __classPrivateFieldGet(this, _PDFDataRangeTransport_es, "f").push(t); }
        addProgressiveReadListener(t) { __classPrivateFieldGet(this, _PDFDataRangeTransport_ts, "f").push(t); }
        addProgressiveDoneListener(t) { __classPrivateFieldGet(this, _PDFDataRangeTransport_Zr, "f").push(t); }
        onDataRange(t, e) { for (const i of __classPrivateFieldGet(this, _PDFDataRangeTransport_es, "f"))
            i(t, e); }
        onDataProgressiveRead(t) { __classPrivateFieldGet(this, _PDFDataRangeTransport_Er, "f").promise.then(() => { for (const e of __classPrivateFieldGet(this, _PDFDataRangeTransport_ts, "f"))
            e(t); }); }
        onDataProgressiveDone() { __classPrivateFieldGet(this, _PDFDataRangeTransport_Er, "f").promise.then(() => { for (const t of __classPrivateFieldGet(this, _PDFDataRangeTransport_Zr, "f"))
            t(); }); }
        transportReady() { __classPrivateFieldGet(this, _PDFDataRangeTransport_Er, "f").resolve(); }
        requestDataRange(t, e) { unreachable("Abstract method PDFDataRangeTransport.requestDataRange"); }
        abort() { }
    }
    _PDFDataRangeTransport_Er = new WeakMap(), _PDFDataRangeTransport_Zr = new WeakMap(), _PDFDataRangeTransport_ts = new WeakMap(), _PDFDataRangeTransport_es = new WeakMap();
    class PDFDocumentProxy {
        constructor(t, e) { this._pdfInfo = t; this._transport = e; }
        get pagesMapper() { return this._transport.pagesMapper; }
        get annotationStorage() { return this._transport.annotationStorage; }
        get canvasFactory() { return this._transport.canvasFactory; }
        get filterFactory() { return this._transport.filterFactory; }
        get numPages() { return this._pdfInfo.numPages; }
        get fingerprints() { return this._pdfInfo.fingerprints; }
        get isPureXfa() { return shadow(this, "isPureXfa", !!this._transport._htmlForXfa); }
        get allXfaHtml() { return this._transport._htmlForXfa; }
        getPage(t) { return this._transport.getPage(t); }
        getPageIndex(t) { return this._transport.getPageIndex(t); }
        getDestinations() { return this._transport.getDestinations(); }
        getDestination(t) { return this._transport.getDestination(t); }
        getPageLabels() { return this._transport.getPageLabels(); }
        getPageLayout() { return this._transport.getPageLayout(); }
        getPageMode() { return this._transport.getPageMode(); }
        getViewerPreferences() { return this._transport.getViewerPreferences(); }
        getOpenAction() { return this._transport.getOpenAction(); }
        getAttachments() { return this._transport.getAttachments(); }
        getAnnotationsByType(t, e) { return this._transport.getAnnotationsByType(t, e); }
        getJSActions() { return this._transport.getDocJSActions(); }
        getOutline() { return this._transport.getOutline(); }
        getOptionalContentConfig({ intent: t = "display" } = {}) { const { renderingIntent: e } = this._transport.getRenderingIntent(t); return this._transport.getOptionalContentConfig(e); }
        getPermissions() { return this._transport.getPermissions(); }
        getMetadata() { return this._transport.getMetadata(); }
        getMarkInfo() { return this._transport.getMarkInfo(); }
        getData() { return this._transport.getData(); }
        saveDocument() { return this._transport.saveDocument(); }
        extractPages(t) { return this._transport.extractPages(t); }
        getDownloadInfo() { return this._transport.downloadInfoCapability.promise; }
        getRawData(t) { return this._transport.getRawData(t); }
        cleanup(t = !1) { return this._transport.startCleanup(t || this.isPureXfa); }
        destroy() { return this.loadingTask.destroy(); }
        cachedPageNumber(t) { return this._transport.cachedPageNumber(t); }
        get loadingParams() { return this._transport.loadingParams; }
        get loadingTask() { return this._transport.loadingTask; }
        getFieldObjects() { return this._transport.getFieldObjects(); }
        hasJSActions() { return this._transport.hasJSActions(); }
        getCalculationOrderIds() { return this._transport.getCalculationOrderIds(); }
    }
    class PDFPageProxy {
        constructor(t, e, i, n, r = !1) {
            _PDFPageProxy_instances.add(this);
            _PDFPageProxy_is.set(this, !1);
            _PDFPageProxy_ns.set(this, null);
            this._pageIndex = t;
            this._pageInfo = e;
            this._transport = i;
            this._stats = r ? new StatTimer : null;
            this._pdfBug = r;
            this.commonObjs = i.commonObjs;
            this.objs = new PDFObjects;
            this._intentStates = new Map;
            this.destroyed = !1;
            this.recordedBBoxes = null;
            __classPrivateFieldSet(this, _PDFPageProxy_ns, n, "f");
            this.imageCoordinates = null;
        }
        clone(t) { var _a; const e = new PDFPageProxy(t, this._pageInfo, this._transport, __classPrivateFieldGet(this, _PDFPageProxy_ns, "f"), this._pdfBug); e.clonedFromIndex = (_a = this.clonedFromIndex) !== null && _a !== void 0 ? _a : this._pageIndex; this._transport.updatePage(e); return e; }
        get pageNumber() { return this._pageIndex + 1; }
        set pageNumber(t) { this._pageIndex = t - 1; this._transport.updatePage(this); }
        get rotate() { return this._pageInfo.rotate; }
        get ref() { return this._pageInfo.ref; }
        get userUnit() { return this._pageInfo.userUnit; }
        get view() { return this._pageInfo.view; }
        getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: n = 0, dontFlip: r = !1 } = {}) { return new PageViewport({ viewBox: this.view, userUnit: this.userUnit, scale: t, rotation: e, offsetX: i, offsetY: n, dontFlip: r }); }
        getAnnotations({ intent: t = "display" } = {}) { const { renderingIntent: e } = this._transport.getRenderingIntent(t); return this._transport.getAnnotations(this._pageIndex, e); }
        getJSActions() { return this._transport.getPageJSActions(this._pageIndex); }
        get filterFactory() { return this._transport.filterFactory; }
        get isPureXfa() { return shadow(this, "isPureXfa", !!this._transport._htmlForXfa); }
        getXfa() {
            return __awaiter(this, void 0, void 0, function* () { var _a; return ((_a = this._transport._htmlForXfa) === null || _a === void 0 ? void 0 : _a.children[this._pageIndex]) || null; });
        }
        render({ canvasContext: t, canvas: e = t.canvas, viewport: i, intent: n = "display", annotationMode: r = p.ENABLE, transform: s = null, background: a = null, optionalContentConfigPromise: l = null, annotationCanvasMap: h = null, pageColors: c = null, printAnnotationStorage: d = null, isEditing: u = !1, recordImages: g = !1, recordOperations: m = !1, operationsFilter: f = null }) { var _a, _5, _6; (_a = this._stats) === null || _a === void 0 ? void 0 : _a.time("Overall"); const b = this._transport.getRenderingIntent(n, r, d, u), { renderingIntent: y, cacheKey: v } = b; __classPrivateFieldSet(this, _PDFPageProxy_is, !1, "f"); l || (l = this._transport.getOptionalContentConfig(y)); const w = this._intentStates.getOrInsertComputed(v, makeObj); if (w.streamReaderCancelTimeout) {
            clearTimeout(w.streamReaderCancelTimeout);
            w.streamReaderCancelTimeout = null;
        } const A = !!(y & o); if (!w.displayReadyCapability) {
            w.displayReadyCapability = Promise.withResolvers();
            w.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null };
            (_5 = this._stats) === null || _5 === void 0 ? void 0 : _5.time("Page Request");
            this._pumpOperatorList(b);
        } const x = !(!this._pdfBug || !((_6 = globalThis.StepperManager) === null || _6 === void 0 ? void 0 : _6.enabled)), E = !!e && !this.recordedBBoxes && (m || x), _ = !!e && !this.imageCoordinates && g, complete = t => { var _a, _5, _6, _7; w.renderTasks.delete(C); if (E) {
            const t = (_a = C.gfx) === null || _a === void 0 ? void 0 : _a.dependencyTracker.take();
            if (t) {
                (_5 = C.stepper) === null || _5 === void 0 ? void 0 : _5.setOperatorBBoxes(t, C.gfx.dependencyTracker.takeDebugMetadata());
                m && (this.recordedBBoxes = t);
            }
        } _ && !t && (this.imageCoordinates = (_6 = C.gfx) === null || _6 === void 0 ? void 0 : _6.imagesTracker.take()); A && (__classPrivateFieldSet(this, _PDFPageProxy_is, !0, "f")); __classPrivateFieldGet(this, _PDFPageProxy_instances, "m", _PDFPageProxy_rs).call(this); if (t) {
            C.capability.reject(t);
            this._abortOperatorList({ intentState: w, reason: t instanceof Error ? t : new Error(t) });
        }
        else
            C.capability.resolve(); if (this._stats) {
            this._stats.timeEnd("Rendering");
            this._stats.timeEnd("Overall");
            ((_7 = globalThis.Stats) === null || _7 === void 0 ? void 0 : _7.enabled) && globalThis.Stats.add(this.pageNumber, this._stats);
        } }; let T = null, S = null; (E || _) && (S = new CanvasBBoxTracker(e, w.operatorList.length)); E && (T = new CanvasDependencyTracker(S, x)); const C = new InternalRenderTask({ callback: complete, params: { canvas: e, canvasContext: t, dependencyTracker: T !== null && T !== void 0 ? T : S, imagesTracker: _ ? new CanvasImagesTracker(e) : null, viewport: i, transform: s, background: a }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h, operatorList: w.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !A, pdfBug: this._pdfBug, pageColors: c, enableHWA: this._transport.enableHWA, operationsFilter: f }); (w.renderTasks || (w.renderTasks = new Set)).add(C); const D = C.task; Promise.all([w.displayReadyCapability.promise, l]).then(([t, e]) => { var _a; if (this.destroyed)
            complete();
        else {
            (_a = this._stats) === null || _a === void 0 ? void 0 : _a.time("Rendering");
            if (!(e.renderingIntent & y))
                throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
            C.initializeGraphics({ transparency: t, optionalContentConfig: e });
            C.operatorListChanged();
        } }).catch(complete); return D; }
        getOperatorList({ intent: t = "display", annotationMode: e = p.ENABLE, printAnnotationStorage: i = null, isEditing: n = !1 } = {}) { var _a; const r = this._transport.getRenderingIntent(t, e, i, n, !0), s = this._intentStates.getOrInsertComputed(r.cacheKey, makeObj); let a; if (!s.opListReadCapability) {
            a = Object.create(null);
            a.operatorListChanged = function operatorListChanged() { if (s.operatorList.lastChunk) {
                s.opListReadCapability.resolve(s.operatorList);
                s.renderTasks.delete(a);
            } };
            s.opListReadCapability = Promise.withResolvers();
            (s.renderTasks || (s.renderTasks = new Set)).add(a);
            s.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null };
            (_a = this._stats) === null || _a === void 0 ? void 0 : _a.time("Page Request");
            this._pumpOperatorList(r);
        } return s.opListReadCapability.promise; }
        streamTextContent({ includeMarkedContent: t = !1, disableNormalization: e = !1 } = {}) { return this._transport.messageHandler.sendWithStream("GetTextContent", { pageId: __classPrivateFieldGet(this, _PDFPageProxy_ns, "f").getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, includeMarkedContent: !0 === t, disableNormalization: !0 === e }, { highWaterMark: 100, size: t => t.items.length }); }
        getTextContent() {
            return __awaiter(this, arguments, void 0, function* (t = {}) { var _a, e_1, _5, _6; var _7; if (this._transport._htmlForXfa)
                return this.getXfa().then(t => XfaText.textContent(t)); const e = this.streamTextContent(t), i = { items: [], styles: Object.create(null), lang: null }; try {
                for (var _8 = true, e_2 = __asyncValues(e), e_2_1; e_2_1 = yield e_2.next(), _a = e_2_1.done, !_a; _8 = true) {
                    _6 = e_2_1.value;
                    _8 = false;
                    const t = _6;
                    (_7 = i.lang) !== null && _7 !== void 0 ? _7 : (i.lang = t.lang);
                    Object.assign(i.styles, t.styles);
                    i.items.push(...t.items);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_8 && !_a && (_5 = e_2.return)) yield _5.call(e_2);
                }
                finally { if (e_1) throw e_1.error; }
            } return i; });
        }
        getStructTree() { return this._transport.getStructTree(this._pageIndex); }
        _destroy() { this.destroyed = !0; const t = []; for (const e of this._intentStates.values()) {
            this._abortOperatorList({ intentState: e, reason: new Error("Page was destroyed."), force: !0 });
            if (!e.opListReadCapability)
                for (const i of e.renderTasks) {
                    t.push(i.completed);
                    i.cancel();
                }
        } this.objs.clear(); __classPrivateFieldSet(this, _PDFPageProxy_is, !1, "f"); return Promise.all(t); }
        cleanup(t = !1) { __classPrivateFieldSet(this, _PDFPageProxy_is, !0, "f"); const e = __classPrivateFieldGet(this, _PDFPageProxy_instances, "m", _PDFPageProxy_rs).call(this); t && e && (this._stats && (this._stats = new StatTimer)); return e; }
        _startRenderPage(t, e) { var _a, _5; const i = this._intentStates.get(e); if (i) {
            (_a = this._stats) === null || _a === void 0 ? void 0 : _a.timeEnd("Page Request");
            (_5 = i.displayReadyCapability) === null || _5 === void 0 ? void 0 : _5.resolve(t);
        } }
        _renderPageChunk(t, e) { for (let i = 0, n = t.length; i < n; i++) {
            e.operatorList.fnArray.push(t.fnArray[i]);
            e.operatorList.argsArray.push(t.argsArray[i]);
        } e.operatorList.lastChunk = t.lastChunk; e.operatorList.separateAnnots = t.separateAnnots; for (const t of e.renderTasks)
            t.operatorListChanged(); t.lastChunk && __classPrivateFieldGet(this, _PDFPageProxy_instances, "m", _PDFPageProxy_rs).call(this); }
        _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i, modifiedIds: n }) { const { map: r, transfer: s } = i, a = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageId: __classPrivateFieldGet(this, _PDFPageProxy_ns, "f").getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, intent: t, cacheKey: e, annotationStorage: r, modifiedIds: n }, void 0, s).getReader(), o = this._intentStates.get(e); o.streamReader = a; const pump = () => { a.read().then(({ value: t, done: e }) => { if (e)
            o.streamReader = null;
        else if (!this._transport.destroyed) {
            this._renderPageChunk(t, o);
            pump();
        } }, t => { o.streamReader = null; if (!this._transport.destroyed) {
            if (o.operatorList) {
                o.operatorList.lastChunk = !0;
                for (const t of o.renderTasks)
                    t.operatorListChanged();
                __classPrivateFieldGet(this, _PDFPageProxy_instances, "m", _PDFPageProxy_rs).call(this);
            }
            if (o.displayReadyCapability)
                o.displayReadyCapability.reject(t);
            else {
                if (!o.opListReadCapability)
                    throw t;
                o.opListReadCapability.reject(t);
            }
        } }); }; pump(); }
        _abortOperatorList({ intentState: t, reason: e, force: i = !1 }) { if (t.streamReader) {
            if (t.streamReaderCancelTimeout) {
                clearTimeout(t.streamReaderCancelTimeout);
                t.streamReaderCancelTimeout = null;
            }
            if (!i) {
                if (t.renderTasks.size > 0)
                    return;
                if (e instanceof RenderingCancelledException) {
                    let i = 100;
                    e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay);
                    t.streamReaderCancelTimeout = setTimeout(() => { t.streamReaderCancelTimeout = null; this._abortOperatorList({ intentState: t, reason: e, force: !0 }); }, i);
                    return;
                }
            }
            t.streamReader.cancel(new AbortException(e.message)).catch(() => { });
            t.streamReader = null;
            if (!this._transport.destroyed) {
                for (const [e, i] of this._intentStates)
                    if (i === t) {
                        this._intentStates.delete(e);
                        break;
                    }
                this.cleanup();
            }
        } }
        get stats() { return this._stats; }
    }
    _PDFPageProxy_is = new WeakMap(), _PDFPageProxy_ns = new WeakMap(), _PDFPageProxy_instances = new WeakSet(), _PDFPageProxy_rs = function _PDFPageProxy_rs() { if (!__classPrivateFieldGet(this, _PDFPageProxy_is, "f") || this.destroyed)
        return !1; for (const { renderTasks: t, operatorList: e } of this._intentStates.values())
        if (t.size > 0 || !e.lastChunk)
            return !1; this._intentStates.clear(); this.objs.clear(); __classPrivateFieldSet(this, _PDFPageProxy_is, !1, "f"); return !0; };
    class PDFWorker {
        constructor({ name: t = null, port: e = null, verbosity: i = getVerbosityLevel() } = {}) {
            _PDFWorker_instances.add(this);
            _PDFWorker_Er.set(this, Promise.withResolvers());
            _PDFWorker_ss.set(this, null);
            _PDFWorker_er.set(this, null);
            _PDFWorker_as.set(this, null);
            this.name = t;
            this.destroyed = !1;
            this.verbosity = i;
            if (e) {
                if (__classPrivateFieldGet(_s, _s, "f", _PDFWorker_hs).has(e))
                    throw new Error("Cannot use more than one PDFWorker per port.");
                __classPrivateFieldGet(_s, _s, "f", _PDFWorker_hs).set(e, this);
                __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_cs).call(this, e);
            }
            else
                __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_ds).call(this);
        }
        get promise() { return __classPrivateFieldGet(this, _PDFWorker_Er, "f").promise; }
        get port() { return __classPrivateFieldGet(this, _PDFWorker_er, "f"); }
        get messageHandler() { return __classPrivateFieldGet(this, _PDFWorker_ss, "f"); }
        destroy() { var _a, _5; this.destroyed = !0; (_a = __classPrivateFieldGet(this, _PDFWorker_as, "f")) === null || _a === void 0 ? void 0 : _a.terminate(); __classPrivateFieldSet(this, _PDFWorker_as, null, "f"); __classPrivateFieldGet(_s, _s, "f", _PDFWorker_hs).delete(__classPrivateFieldGet(this, _PDFWorker_er, "f")); __classPrivateFieldSet(this, _PDFWorker_er, null, "f"); (_5 = __classPrivateFieldGet(this, _PDFWorker_ss, "f")) === null || _5 === void 0 ? void 0 : _5.destroy(); __classPrivateFieldSet(this, _PDFWorker_ss, null, "f"); }
        static create(t) { const e = __classPrivateFieldGet(this, _s, "f", _PDFWorker_hs).get(t === null || t === void 0 ? void 0 : t.port); if (e) {
            if (e._pendingDestroy)
                throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
            return e;
        } return new _s(t); }
        static get workerSrc() { if (GlobalWorkerOptions.workerSrc)
            return GlobalWorkerOptions.workerSrc; throw new Error('No "GlobalWorkerOptions.workerSrc" specified.'); }
        static get _setupFakeWorkerGlobal() {
            return shadow(this, "_setupFakeWorkerGlobal", (() => __awaiter(this, void 0, void 0, function* () {
                if (__classPrivateFieldGet(this, _s, "a", _PDFWorker_ps_get))
                    return __classPrivateFieldGet(this, _s, "a", _PDFWorker_ps_get);
                return (yield Promise.resolve(`${this.workerSrc}`).then(s => __importStar(require(s)))).WorkerMessageHandler;
            }))());
        }
    }
    _s = PDFWorker, _PDFWorker_Er = new WeakMap(), _PDFWorker_ss = new WeakMap(), _PDFWorker_er = new WeakMap(), _PDFWorker_as = new WeakMap(), _PDFWorker_instances = new WeakSet(), _PDFWorker_us = function _PDFWorker_us() { __classPrivateFieldGet(this, _PDFWorker_Er, "f").resolve(); __classPrivateFieldGet(this, _PDFWorker_ss, "f").send("configure", { verbosity: this.verbosity }); }, _PDFWorker_cs = function _PDFWorker_cs(t) { __classPrivateFieldSet(this, _PDFWorker_er, t, "f"); __classPrivateFieldSet(this, _PDFWorker_ss, new MessageHandler("main", "worker", t), "f"); __classPrivateFieldGet(this, _PDFWorker_ss, "f").on("ready", () => { }); __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_us).call(this); }, _PDFWorker_ds = function _PDFWorker_ds() { if (__classPrivateFieldGet(_s, _s, "f", _PDFWorker_ls) || __classPrivateFieldGet(_s, _s, "a", _PDFWorker_ps_get)) {
        __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_gs).call(this);
        return;
    } let { workerSrc: t } = _s; try {
        _s._isSameOrigin(window.location, t) || (t = _s._createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, { type: "module" }), i = new MessageHandler("main", "worker", e), terminateEarly = () => { n.abort(); i.destroy(); e.terminate(); this.destroyed ? __classPrivateFieldGet(this, _PDFWorker_Er, "f").reject(new Error("Worker was destroyed")) : __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_gs).call(this); }, n = new AbortController;
        e.addEventListener("error", () => { __classPrivateFieldGet(this, _PDFWorker_as, "f") || terminateEarly(); }, { signal: n.signal });
        i.on("test", t => { n.abort(); if (!this.destroyed && t) {
            __classPrivateFieldSet(this, _PDFWorker_ss, i, "f");
            __classPrivateFieldSet(this, _PDFWorker_er, e, "f");
            __classPrivateFieldSet(this, _PDFWorker_as, e, "f");
            __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_us).call(this);
        }
        else
            terminateEarly(); });
        i.on("ready", t => { n.abort(); if (this.destroyed)
            terminateEarly();
        else
            try {
                sendTest();
            }
            catch (_a) {
                __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_gs).call(this);
            } });
        const sendTest = () => { const t = new Uint8Array; i.send("test", t, [t.buffer]); };
        sendTest();
        return;
    }
    catch (_a) {
        info("The worker has been disabled.");
    } __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_gs).call(this); }, _PDFWorker_gs = function _PDFWorker_gs() { if (!__classPrivateFieldGet(_s, _s, "f", _PDFWorker_ls)) {
        warn("Setting up fake worker.");
        __classPrivateFieldSet(_s, _s, !0, "f", _PDFWorker_ls);
    } _s._setupFakeWorkerGlobal.then(t => { var _a, _5, _6; if (this.destroyed) {
        __classPrivateFieldGet(this, _PDFWorker_Er, "f").reject(new Error("Worker was destroyed"));
        return;
    } const e = new LoopbackPort; __classPrivateFieldSet(this, _PDFWorker_er, e, "f"); const i = "fake" + (__classPrivateFieldSet(_a = _s, _s, (_6 = __classPrivateFieldGet(_a, _s, "f", _PDFWorker_os), _5 = _6++, _6), "f", _PDFWorker_os), _5), n = new MessageHandler(i + "_worker", i, e); t.setup(n, e); __classPrivateFieldSet(this, _PDFWorker_ss, new MessageHandler(i, i + "_worker", e), "f"); __classPrivateFieldGet(this, _PDFWorker_instances, "m", _PDFWorker_us).call(this); }).catch(t => { __classPrivateFieldGet(this, _PDFWorker_Er, "f").reject(new Error(`Setting up fake worker failed: "${t.message}".`)); }); }, _PDFWorker_ps_get = function _PDFWorker_ps_get() { var _a; try {
        return ((_a = globalThis.pdfjsWorker) === null || _a === void 0 ? void 0 : _a.WorkerMessageHandler) || null;
    }
    catch (_5) {
        return null;
    } };
    _PDFWorker_os = { value: 0 };
    _PDFWorker_ls = { value: !1 };
    _PDFWorker_hs = { value: new WeakMap };
    (() => {
        if (i) {
            __classPrivateFieldSet(_s, _s, !0, "f", _PDFWorker_ls);
            GlobalWorkerOptions.workerSrc || (GlobalWorkerOptions.workerSrc = "./pdf.worker.mjs");
        }
        _s._isSameOrigin = (t, e) => { const i = URL.parse(t); if (!(i === null || i === void 0 ? void 0 : i.origin) || "null" === i.origin)
            return !1; const n = new URL(e, i); return i.origin === n.origin; };
        _s._createCDNWrapper = t => { const e = `await import("${t}");`; return URL.createObjectURL(new Blob([e], { type: "text/javascript" })); };
    })();
    class WorkerTransport {
        constructor(t, e, i, n, r, s) {
            _WorkerTransport_instances.add(this);
            this.downloadInfoCapability = Promise.withResolvers();
            _WorkerTransport_ms.set(this, null);
            _WorkerTransport_fs.set(this, new Map);
            _WorkerTransport_bs.set(this, null);
            _WorkerTransport_ys.set(this, new Map);
            _WorkerTransport_vs.set(this, new Map);
            _WorkerTransport_ws.set(this, new Map);
            _WorkerTransport_As.set(this, null);
            this.messageHandler = t;
            this.loadingTask = e;
            __classPrivateFieldSet(this, _WorkerTransport_bs, i, "f");
            this.commonObjs = new PDFObjects;
            this.fontLoader = new FontLoader({ ownerDocument: n.ownerDocument, styleElement: n.styleElement });
            this.enableHWA = n.enableHWA;
            this.loadingParams = n.loadingParams;
            this._params = n;
            this.canvasFactory = r.canvasFactory;
            this.filterFactory = r.filterFactory;
            this.binaryDataFactory = r.binaryDataFactory;
            this.pagesMapper = s;
            this.destroyed = !1;
            this.destroyCapability = null;
            this.setupMessageHandler();
        }
        updatePage(t) { const { _pageIndex: e } = t; __classPrivateFieldGet(this, _WorkerTransport_ys, "f").set(e, t); __classPrivateFieldGet(this, _WorkerTransport_vs, "f").set(e, Promise.resolve(t)); }
        get annotationStorage() { return shadow(this, "annotationStorage", new AnnotationStorage); }
        getRenderingIntent(t, e = p.ENABLE, i = null, n = !1, r = !1) { let g = a, m = tt; switch (t) {
            case "any":
                g = s;
                break;
            case "display": break;
            case "print":
                g = o;
                break;
            default: warn(`getRenderingIntent - invalid intent: ${t}`);
        } const f = g & o && i instanceof PrintAnnotationStorage ? i : this.annotationStorage; switch (e) {
            case p.DISABLE:
                g += c;
                break;
            case p.ENABLE: break;
            case p.ENABLE_FORMS:
                g += l;
                break;
            case p.ENABLE_STORAGE:
                g += h;
                m = f.serializable;
                break;
            default: warn(`getRenderingIntent - invalid annotationMode: ${e}`);
        } n && (g += d); r && (g += u); const { ids: b, hash: y } = f.modifiedIds; return { renderingIntent: g, cacheKey: [g, m.hash, y].join("_"), annotationStorageSerializable: m, modifiedIds: b }; }
        destroy() { var _a; if (this.destroyCapability)
            return this.destroyCapability.promise; this.destroyed = !0; this.destroyCapability = Promise.withResolvers(); (_a = __classPrivateFieldGet(this, _WorkerTransport_As, "f")) === null || _a === void 0 ? void 0 : _a.reject(new Error("Worker was destroyed during onPassword callback")); const t = []; for (const e of __classPrivateFieldGet(this, _WorkerTransport_ys, "f").values())
            t.push(e._destroy()); __classPrivateFieldGet(this, _WorkerTransport_ys, "f").clear(); __classPrivateFieldGet(this, _WorkerTransport_vs, "f").clear(); __classPrivateFieldGet(this, _WorkerTransport_ws, "f").clear(); this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified(); const e = this.messageHandler.sendWithPromise("Terminate", null); t.push(e); Promise.all(t).then(() => { var _a, _5; this.commonObjs.clear(); this.fontLoader.clear(); __classPrivateFieldGet(this, _WorkerTransport_fs, "f").clear(); this.filterFactory.destroy(); TextLayer.cleanup(); (_a = __classPrivateFieldGet(this, _WorkerTransport_bs, "f")) === null || _a === void 0 ? void 0 : _a.cancelAllRequests(new AbortException("Worker was terminated.")); (_5 = this.messageHandler) === null || _5 === void 0 ? void 0 : _5.destroy(); this.messageHandler = null; this.destroyCapability.resolve(); }, this.destroyCapability.reject); return this.destroyCapability.promise; }
        setupMessageHandler() { const { messageHandler: t, loadingTask: e } = this; t.on("GetReader", (t, e) => { assert(__classPrivateFieldGet(this, _WorkerTransport_bs, "f"), "GetReader - no `BasePDFStream` instance available."); __classPrivateFieldSet(this, _WorkerTransport_ms, __classPrivateFieldGet(this, _WorkerTransport_bs, "f").getFullReader(), "f"); __classPrivateFieldGet(this, _WorkerTransport_ms, "f").onProgress = t => __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_Jn).call(this, t); e.onPull = () => { __classPrivateFieldGet(this, _WorkerTransport_ms, "f").read().then(function ({ value: t, done: i }) { if (i)
            e.close();
        else {
            assert(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
            e.enqueue(new Uint8Array(t), 1, [t]);
        } }).catch(t => { e.error(t); }); }; e.onCancel = t => { __classPrivateFieldGet(this, _WorkerTransport_ms, "f").cancel(t); e.ready.catch(t => { if (!this.destroyed)
            throw t; }); }; }); t.on("ReaderHeadersReady", (t) => __awaiter(this, void 0, void 0, function* () { yield __classPrivateFieldGet(this, _WorkerTransport_ms, "f").headersReady; const { isStreamingSupported: e, isRangeSupported: i, contentLength: n } = __classPrivateFieldGet(this, _WorkerTransport_ms, "f"); e && i && (__classPrivateFieldGet(this, _WorkerTransport_ms, "f").onProgress = null); return { isStreamingSupported: e, isRangeSupported: i, contentLength: n }; })); t.on("GetRangeReader", (t, e) => { assert(__classPrivateFieldGet(this, _WorkerTransport_bs, "f"), "GetRangeReader - no `BasePDFStream` instance available."); const i = __classPrivateFieldGet(this, _WorkerTransport_bs, "f").getRangeReader(t.begin, t.end); if (i) {
            e.onPull = () => { i.read().then(function ({ value: t, done: i }) { if (i)
                e.close();
            else {
                assert(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                e.enqueue(new Uint8Array(t), 1, [t]);
            } }).catch(t => { e.error(t); }); };
            e.onCancel = t => { i.cancel(t); e.ready.catch(t => { if (!this.destroyed)
                throw t; }); };
        }
        else
            e.close(); }); t.on("GetDoc", ({ pdfInfo: t }) => { this.pagesMapper.pagesNumber = t.numPages; this._numPages = t.numPages; this._htmlForXfa = t.htmlForXfa; delete t.htmlForXfa; e._capability.resolve(new PDFDocumentProxy(t, this)); }); t.on("DocException", t => { e._capability.reject(wrapReason(t)); }); t.on("PasswordRequest", t => { __classPrivateFieldSet(this, _WorkerTransport_As, Promise.withResolvers(), "f"); try {
            if (!e.onPassword)
                throw wrapReason(t);
            const updatePassword = t => { t instanceof Error ? __classPrivateFieldGet(this, _WorkerTransport_As, "f").reject(t) : __classPrivateFieldGet(this, _WorkerTransport_As, "f").resolve({ password: t }); };
            e.onPassword(updatePassword, t.code);
        }
        catch (t) {
            __classPrivateFieldGet(this, _WorkerTransport_As, "f").reject(t);
        } return __classPrivateFieldGet(this, _WorkerTransport_As, "f").promise; }); t.on("DataLoaded", t => { __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_Jn).call(this, { loaded: t.length, total: t.length }); this.downloadInfoCapability.resolve(t); }); t.on("StartRenderPage", t => { if (this.destroyed)
            return; __classPrivateFieldGet(this, _WorkerTransport_ys, "f").get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey); }); t.on("commonobj", ([e, i, n]) => { var _a; if (this.destroyed)
            return null; if (this.commonObjs.has(e))
            return null; switch (i) {
            case "Font":
                if ("error" in n) {
                    const t = n.error;
                    warn(`Error during font loading: ${t}`);
                    this.commonObjs.resolve(e, t);
                    break;
                }
                const r = new FontInfo(n), s = this._params.pdfBug && ((_a = globalThis.FontInspector) === null || _a === void 0 ? void 0 : _a.enabled) ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null, a = new FontFaceObject(r, s, n.charProcOperatorList, n.extra);
                this.fontLoader.bind(a).catch(() => t.sendWithPromise("FontFallback", { id: e })).finally(() => { a.fontExtraProperties || a.clearData(); this.commonObjs.resolve(e, a); });
                break;
            case "CopyLocalImage":
                const { imageRef: o } = n;
                assert(o, "The imageRef must be defined.");
                for (const t of __classPrivateFieldGet(this, _WorkerTransport_ys, "f").values())
                    for (const [, i] of t.objs)
                        if ((i === null || i === void 0 ? void 0 : i.ref) === o) {
                            if (!i.dataLen)
                                return null;
                            this.commonObjs.resolve(e, structuredClone(i));
                            return i.dataLen;
                        }
                break;
            case "FontPath":
                this.commonObjs.resolve(e, new FontPathInfo(n));
                break;
            case "Image":
                this.commonObjs.resolve(e, n);
                break;
            case "Pattern":
                const l = new PatternInfo(n);
                this.commonObjs.resolve(e, l.getIR());
                break;
            default: throw new Error(`Got unknown common object type ${i}`);
        } return null; }); t.on("obj", ([t, e, i, n]) => { var _a; if (this.destroyed)
            return; const r = __classPrivateFieldGet(this, _WorkerTransport_ys, "f").get(e); if (!r.objs.has(t))
            if (0 !== r._intentStates.size)
                switch (i) {
                    case "Image":
                    case "Pattern":
                        r.objs.resolve(t, n);
                        break;
                    default: throw new Error(`Got unknown object type ${i}`);
                }
            else
                (_a = n === null || n === void 0 ? void 0 : n.bitmap) === null || _a === void 0 ? void 0 : _a.close(); }); t.on("DocProgress", t => { this.destroyed || __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_Jn).call(this, t); }); t.on("PrepareWebGPU", () => { this.destroyed || function initWebGPUMesh() { _t.init(); }(); }); t.on("FetchBinaryData", (t) => __awaiter(this, void 0, void 0, function* () { if (this.destroyed)
            throw new Error("Worker was destroyed."); if (!this.binaryDataFactory)
            throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter."); return this.binaryDataFactory.fetch(t); })); }
        getData() { return this.messageHandler.sendWithPromise("GetData", null); }
        saveDocument() { var _a, _5; this.annotationStorage.size <= 0 && warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."); const { map: t, transfer: e } = this.annotationStorage.serializable; return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t, filename: (_5 = (_a = __classPrivateFieldGet(this, _WorkerTransport_ms, "f")) === null || _a === void 0 ? void 0 : _a.filename) !== null && _5 !== void 0 ? _5 : null }, e).finally(() => { this.annotationStorage.resetModified(); }); }
        extractPages(t) { const e = { pageInfos: t }; let i; if (this.annotationStorage.size > 0) {
            const { map: t, transfer: n } = this.annotationStorage.serializable;
            e.annotationStorage = t;
            i = n;
        } return this.messageHandler.sendWithPromise("ExtractPages", e, i).finally(() => { this.annotationStorage.resetModified(); }); }
        getPage(t) { if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber)
            return Promise.reject(new Error("Invalid page request.")); const e = t - 1, i = this.pagesMapper.getPageId(t) - 1, n = __classPrivateFieldGet(this, _WorkerTransport_vs, "f").get(e); if (n)
            return n; const r = this.messageHandler.sendWithPromise("GetPage", { pageIndex: i }).then(t => { if (this.destroyed)
            throw new Error("Transport destroyed"); t.refStr && __classPrivateFieldGet(this, _WorkerTransport_ws, "f").set(t.refStr, i); const n = new PDFPageProxy(e, t, this, this.pagesMapper, this._params.pdfBug); __classPrivateFieldGet(this, _WorkerTransport_ys, "f").set(e, n); return n; }); __classPrivateFieldGet(this, _WorkerTransport_vs, "f").set(e, r); return r; }
        getPageIndex(t) {
            return __awaiter(this, void 0, void 0, function* () { if (!isRefProxy(t))
                throw new Error("Invalid pageIndex request."); const e = yield this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen }), i = this.pagesMapper.getPageNumber(e + 1); if (0 === i)
                throw new Error("GetPageIndex: page has been removed."); return i - 1; });
        }
        getAnnotations(t, e) { return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: this.pagesMapper.getPageId(t + 1) - 1, intent: e }); }
        getFieldObjects() { return __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_xs).call(this, "GetFieldObjects"); }
        hasJSActions() { return __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_xs).call(this, "HasJSActions"); }
        getCalculationOrderIds() { return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null); }
        getDestinations() { return this.messageHandler.sendWithPromise("GetDestinations", null); }
        getDestination(t) { return "string" != typeof t ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t }); }
        getPageLabels() { return this.messageHandler.sendWithPromise("GetPageLabels", null); }
        getPageLayout() { return this.messageHandler.sendWithPromise("GetPageLayout", null); }
        getPageMode() { return this.messageHandler.sendWithPromise("GetPageMode", null); }
        getViewerPreferences() { return this.messageHandler.sendWithPromise("GetViewerPreferences", null); }
        getOpenAction() { return this.messageHandler.sendWithPromise("GetOpenAction", null); }
        getAttachments() { return this.messageHandler.sendWithPromise("GetAttachments", null); }
        getAnnotationsByType(t, e) { return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t, pageIndexesToSkip: e }); }
        getDocJSActions() { return __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_xs).call(this, "GetDocJSActions"); }
        getPageJSActions(t) { return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: this.pagesMapper.getPageId(t + 1) - 1 }); }
        getStructTree(t) { return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: this.pagesMapper.getPageId(t + 1) - 1 }); }
        getOutline() { return this.messageHandler.sendWithPromise("GetOutline", null); }
        getOptionalContentConfig(t) { return __classPrivateFieldGet(this, _WorkerTransport_instances, "m", _WorkerTransport_xs).call(this, "GetOptionalContentConfig").then(e => new OptionalContentConfig(e, t)); }
        getPermissions() { return this.messageHandler.sendWithPromise("GetPermissions", null); }
        getMetadata() { const t = "GetMetadata"; return __classPrivateFieldGet(this, _WorkerTransport_fs, "f").getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then(t => { var _a, _5, _6, _7; return ({ info: t[0], metadata: t[1] ? new Metadata(t[1]) : null, contentDispositionFilename: (_5 = (_a = __classPrivateFieldGet(this, _WorkerTransport_ms, "f")) === null || _a === void 0 ? void 0 : _a.filename) !== null && _5 !== void 0 ? _5 : null, contentLength: (_7 = (_6 = __classPrivateFieldGet(this, _WorkerTransport_ms, "f")) === null || _6 === void 0 ? void 0 : _6.contentLength) !== null && _7 !== void 0 ? _7 : null, hasStructTree: t[2] }); })); }
        getMarkInfo() { return this.messageHandler.sendWithPromise("GetMarkInfo", null); }
        getRawData(t) { return this.messageHandler.sendWithPromise("GetRawData", t); }
        startCleanup() {
            return __awaiter(this, arguments, void 0, function* (t = !1) { if (!this.destroyed) {
                yield this.messageHandler.sendWithPromise("Cleanup", null);
                for (const t of __classPrivateFieldGet(this, _WorkerTransport_ys, "f").values()) {
                    if (!t.cleanup())
                        throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                }
                this.commonObjs.clear();
                t || this.fontLoader.clear();
                __classPrivateFieldGet(this, _WorkerTransport_fs, "f").clear();
                this.filterFactory.destroy(!0);
                TextLayer.cleanup();
            } });
        }
        cachedPageNumber(t) { if (!isRefProxy(t))
            return null; const e = 0 === t.gen ? `${t.num}R` : `${t.num}R${t.gen}`, i = __classPrivateFieldGet(this, _WorkerTransport_ws, "f").get(e); if (i >= 0) {
            const t = this.pagesMapper.getPageNumber(i + 1);
            if (0 !== t)
                return t;
        } return null; }
    }
    _WorkerTransport_ms = new WeakMap(), _WorkerTransport_fs = new WeakMap(), _WorkerTransport_bs = new WeakMap(), _WorkerTransport_ys = new WeakMap(), _WorkerTransport_vs = new WeakMap(), _WorkerTransport_ws = new WeakMap(), _WorkerTransport_As = new WeakMap(), _WorkerTransport_instances = new WeakSet(), _WorkerTransport_xs = function _WorkerTransport_xs(t, e = null) { return __classPrivateFieldGet(this, _WorkerTransport_fs, "f").getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e)); }, _WorkerTransport_Jn = function _WorkerTransport_Jn({ loaded: t, total: e }) { var _a, _5; (_5 = (_a = this.loadingTask).onProgress) === null || _5 === void 0 ? void 0 : _5.call(_a, { loaded: t, total: e, percent: e ? MathClamp(Math.round(t / e * 100), 0, 100) : NaN }); };
    class RenderTask {
        constructor(t) {
            this._internalRenderTask = null;
            this.onContinue = null;
            this.onError = null;
            this._internalRenderTask = t;
        }
        get promise() { return this._internalRenderTask.capability.promise; }
        cancel(t = 0) { this._internalRenderTask.cancel(null, t); }
        get separateAnnots() { const { separateAnnots: t } = this._internalRenderTask.operatorList; if (!t)
            return !1; const { annotationCanvasMap: e } = this._internalRenderTask; return t.form || t.canvas && (e === null || e === void 0 ? void 0 : e.size) > 0; }
        get imageCoordinates() { return this._internalRenderTask.imageCoordinates || null; }
    }
    class InternalRenderTask {
        constructor({ callback: t, params: e, objs: i, commonObjs: n, annotationCanvasMap: r, operatorList: s, pageIndex: a, canvasFactory: o, filterFactory: l, useRequestAnimationFrame: h = !1, pdfBug: c = !1, pageColors: d = null, enableHWA: u = !1, operationsFilter: p = null }) {
            _InternalRenderTask_Es.set(this, null);
            this.callback = t;
            this.params = e;
            this.objs = i;
            this.commonObjs = n;
            this.annotationCanvasMap = r;
            this.operatorListIdx = null;
            this.operatorList = s;
            this._pageIndex = a;
            this.canvasFactory = o;
            this.filterFactory = l;
            this._pdfBug = c;
            this.pageColors = d;
            this.running = !1;
            this.graphicsReadyCallback = null;
            this.graphicsReady = !1;
            this._useRequestAnimationFrame = !0 === h && "undefined" != typeof window;
            this.cancelled = !1;
            this.capability = Promise.withResolvers();
            this.task = new RenderTask(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = e.canvas;
            this._canvasContext = e.canvas ? null : e.canvasContext;
            this._enableHWA = u;
            this._dependencyTracker = e.dependencyTracker;
            this._imagesTracker = e.imagesTracker;
            this._operationsFilter = p;
        }
        get completed() { return this.capability.promise.catch(function () { }); }
        initializeGraphics({ transparency: t = !1, optionalContentConfig: e }) { var _a, _5; if (this.cancelled)
            return; if (this._canvas) {
            if (__classPrivateFieldGet(_u, _u, "f", _InternalRenderTask__s).has(this._canvas))
                throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            __classPrivateFieldGet(_u, _u, "f", _InternalRenderTask__s).add(this._canvas);
        } if (this._pdfBug && ((_a = globalThis.StepperManager) === null || _a === void 0 ? void 0 : _a.enabled)) {
            this.stepper = globalThis.StepperManager.create(this._pageIndex);
            this.stepper.init(this.operatorList);
            this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
        } const { viewport: i, transform: n, background: r, dependencyTracker: s, imagesTracker: a } = this.params, o = this._canvasContext || this._canvas.getContext("2d", { alpha: !1, willReadFrequently: !this._enableHWA }); this.gfx = new CanvasGraphics(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e }, this.annotationCanvasMap, this.pageColors, s, a); this.gfx.beginDrawing({ transform: n, viewport: i, transparency: t, background: r }); this.operatorListIdx = 0; this.graphicsReady = !0; (_5 = this.graphicsReadyCallback) === null || _5 === void 0 ? void 0 : _5.call(this); }
        cancel(t = null, e = 0) { var _a, _5, _6; this.running = !1; this.cancelled = !0; (_a = this.gfx) === null || _a === void 0 ? void 0 : _a.endDrawing(); if (__classPrivateFieldGet(this, _InternalRenderTask_Es, "f")) {
            window.cancelAnimationFrame(__classPrivateFieldGet(this, _InternalRenderTask_Es, "f"));
            __classPrivateFieldSet(this, _InternalRenderTask_Es, null, "f");
        } __classPrivateFieldGet(_u, _u, "f", _InternalRenderTask__s).delete(this._canvas); t || (t = new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e)); this.callback(t); (_6 = (_5 = this.task).onError) === null || _6 === void 0 ? void 0 : _6.call(_5, t); }
        operatorListChanged() { var _a, _5; if (this.graphicsReady) {
            (_a = this.gfx.dependencyTracker) === null || _a === void 0 ? void 0 : _a.growOperationsCount(this.operatorList.fnArray.length);
            (_5 = this.stepper) === null || _5 === void 0 ? void 0 : _5.updateOperatorList(this.operatorList);
            this.running || this._continue();
        }
        else
            this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound); }
        _continue() { this.running = !0; this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext()); }
        _scheduleNext() { this._useRequestAnimationFrame ? __classPrivateFieldSet(this, _InternalRenderTask_Es, window.requestAnimationFrame(() => { __classPrivateFieldSet(this, _InternalRenderTask_Es, null, "f"); this._nextBound().catch(this._cancelBound); }), "f") : Promise.resolve().then(this._nextBound).catch(this._cancelBound); }
        _next() {
            return __awaiter(this, void 0, void 0, function* () { if (!this.cancelled) {
                this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
                if (this.operatorListIdx === this.operatorList.argsArray.length) {
                    this.running = !1;
                    if (this.operatorList.lastChunk) {
                        this.gfx.endDrawing();
                        __classPrivateFieldGet(_u, _u, "f", _InternalRenderTask__s).delete(this._canvas);
                        this.callback();
                    }
                }
            } });
        }
    }
    _u = InternalRenderTask, _InternalRenderTask_Es = new WeakMap();
    _InternalRenderTask__s = { value: new WeakSet };
    const Ht = "5.6.205", zt = "ada343803";
    class ColorPicker {
        static get _keyboardManager() { return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], _v.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], _v.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], _v.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], _v.prototype._moveToPrevious], [["Home", "mac+Home"], _v.prototype._moveToBeginning], [["End", "mac+End"], _v.prototype._moveToEnd]])); }
        constructor({ editor: t = null, uiManager: e = null }) {
            var _a, _5;
            var _6;
            _ColorPicker_instances.add(this);
            _ColorPicker_Ts.set(this, null);
            _ColorPicker_Ss.set(this, null);
            _ColorPicker_Cs.set(this, void 0);
            _ColorPicker_Ds.set(this, null);
            _ColorPicker_Ps.set(this, !1);
            _ColorPicker_Ms.set(this, !1);
            _ColorPicker_a.set(this, null);
            _ColorPicker_ks.set(this, void 0);
            _ColorPicker_Is.set(this, null);
            _ColorPicker_y.set(this, null);
            if (t) {
                __classPrivateFieldSet(this, _ColorPicker_Ms, !1, "f");
                __classPrivateFieldSet(this, _ColorPicker_a, t, "f");
            }
            else
                __classPrivateFieldSet(this, _ColorPicker_Ms, !0, "f");
            __classPrivateFieldSet(this, _ColorPicker_y, (t === null || t === void 0 ? void 0 : t._uiManager) || e, "f");
            __classPrivateFieldSet(this, _ColorPicker_ks, __classPrivateFieldGet(this, _ColorPicker_y, "f")._eventBus, "f");
            __classPrivateFieldSet(this, _ColorPicker_Cs, ((_a = t === null || t === void 0 ? void 0 : t.color) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || ((_5 = __classPrivateFieldGet(this, _ColorPicker_y, "f")) === null || _5 === void 0 ? void 0 : _5.highlightColors.values().next().value) || "#FFFF98", "f");
            __classPrivateFieldSet(_6 = _v, _v, __classPrivateFieldGet(_6, _v, "f", _ColorPicker_Fs) || Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" }), "f", _ColorPicker_Fs);
        }
        renderButton() { const t = __classPrivateFieldSet(this, _ColorPicker_Ts, document.createElement("button"), "f"); t.className = "colorPicker"; t.tabIndex = "0"; t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"); t.ariaHasPopup = "true"; __classPrivateFieldGet(this, _ColorPicker_a, "f") && (t.ariaControls = `${__classPrivateFieldGet(this, _ColorPicker_a, "f").id}_colorpicker_dropdown`); const e = __classPrivateFieldGet(this, _ColorPicker_y, "f")._signal; t.addEventListener("click", __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).bind(this), { signal: e }); t.addEventListener("keydown", __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Bs).bind(this), { signal: e }); const i = __classPrivateFieldSet(this, _ColorPicker_Ss, document.createElement("span"), "f"); i.className = "swatch"; i.ariaHidden = "true"; i.style.backgroundColor = __classPrivateFieldGet(this, _ColorPicker_Cs, "f"); t.append(i); return t; }
        renderMainDropdown() { const t = __classPrivateFieldSet(this, _ColorPicker_Ds, __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Os).call(this), "f"); t.ariaOrientation = "horizontal"; t.ariaLabelledBy = "highlightColorPickerLabel"; return t; }
        _colorSelectFromKeyboard(t) { if (t.target === __classPrivateFieldGet(this, _ColorPicker_Ts, "f")) {
            __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).call(this, t);
            return;
        } const e = t.target.getAttribute("data-color"); e && __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Ls).call(this, e, t); }
        _moveToNext(t) { var _a, _5; __classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get) ? t.target !== __classPrivateFieldGet(this, _ColorPicker_Ts, "f") ? (_a = t.target.nextSibling) === null || _a === void 0 ? void 0 : _a.focus() : (_5 = __classPrivateFieldGet(this, _ColorPicker_Ds, "f").firstElementChild) === null || _5 === void 0 ? void 0 : _5.focus() : __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).call(this, t); }
        _moveToPrevious(t) { var _a, _5; if (t.target !== ((_a = __classPrivateFieldGet(this, _ColorPicker_Ds, "f")) === null || _a === void 0 ? void 0 : _a.firstElementChild) && t.target !== __classPrivateFieldGet(this, _ColorPicker_Ts, "f")) {
            __classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get) || __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).call(this, t);
            (_5 = t.target.previousSibling) === null || _5 === void 0 ? void 0 : _5.focus();
        }
        else
            __classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get) && this._hideDropdownFromKeyboard(); }
        _moveToBeginning(t) { var _a; __classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get) ? (_a = __classPrivateFieldGet(this, _ColorPicker_Ds, "f").firstElementChild) === null || _a === void 0 ? void 0 : _a.focus() : __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).call(this, t); }
        _moveToEnd(t) { var _a; __classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get) ? (_a = __classPrivateFieldGet(this, _ColorPicker_Ds, "f").lastElementChild) === null || _a === void 0 ? void 0 : _a.focus() : __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Rs).call(this, t); }
        hideDropdown() { var _a, _5; (_a = __classPrivateFieldGet(this, _ColorPicker_Ds, "f")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden"); __classPrivateFieldGet(this, _ColorPicker_Ts, "f").ariaExpanded = "false"; (_5 = __classPrivateFieldGet(this, _ColorPicker_Is, "f")) === null || _5 === void 0 ? void 0 : _5.abort(); __classPrivateFieldSet(this, _ColorPicker_Is, null, "f"); }
        _hideDropdownFromKeyboard() { var _a; if (!__classPrivateFieldGet(this, _ColorPicker_Ms, "f"))
            if (__classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get)) {
                this.hideDropdown();
                __classPrivateFieldGet(this, _ColorPicker_Ts, "f").focus({ preventScroll: !0, focusVisible: __classPrivateFieldGet(this, _ColorPicker_Ps, "f") });
            }
            else
                (_a = __classPrivateFieldGet(this, _ColorPicker_a, "f")) === null || _a === void 0 ? void 0 : _a.unselect(); }
        updateColor(t) { __classPrivateFieldGet(this, _ColorPicker_Ss, "f") && (__classPrivateFieldGet(this, _ColorPicker_Ss, "f").style.backgroundColor = t); if (!__classPrivateFieldGet(this, _ColorPicker_Ds, "f"))
            return; const e = __classPrivateFieldGet(this, _ColorPicker_y, "f").highlightColors.values(); for (const i of __classPrivateFieldGet(this, _ColorPicker_Ds, "f").children)
            i.ariaSelected = e.next().value === t.toUpperCase(); }
        destroy() { var _a, _5; (_a = __classPrivateFieldGet(this, _ColorPicker_Ts, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _ColorPicker_Ts, null, "f"); __classPrivateFieldSet(this, _ColorPicker_Ss, null, "f"); (_5 = __classPrivateFieldGet(this, _ColorPicker_Ds, "f")) === null || _5 === void 0 ? void 0 : _5.remove(); __classPrivateFieldSet(this, _ColorPicker_Ds, null, "f"); }
    }
    _v = ColorPicker, _ColorPicker_Ts = new WeakMap(), _ColorPicker_Ss = new WeakMap(), _ColorPicker_Cs = new WeakMap(), _ColorPicker_Ds = new WeakMap(), _ColorPicker_Ps = new WeakMap(), _ColorPicker_Ms = new WeakMap(), _ColorPicker_a = new WeakMap(), _ColorPicker_ks = new WeakMap(), _ColorPicker_Is = new WeakMap(), _ColorPicker_y = new WeakMap(), _ColorPicker_instances = new WeakSet(), _ColorPicker_Os = function _ColorPicker_Os() { const t = document.createElement("div"), e = __classPrivateFieldGet(this, _ColorPicker_y, "f")._signal; t.addEventListener("contextmenu", noContextMenu, { signal: e }); t.className = "dropdown"; t.role = "listbox"; t.ariaMultiSelectable = "false"; t.ariaOrientation = "vertical"; t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"); __classPrivateFieldGet(this, _ColorPicker_a, "f") && (t.id = `${__classPrivateFieldGet(this, _ColorPicker_a, "f").id}_colorpicker_dropdown`); for (const [i, n] of __classPrivateFieldGet(this, _ColorPicker_y, "f").highlightColors) {
        const r = document.createElement("button");
        r.tabIndex = "0";
        r.role = "option";
        r.setAttribute("data-color", n);
        r.title = i;
        r.setAttribute("data-l10n-id", __classPrivateFieldGet(_v, _v, "f", _ColorPicker_Fs)[i]);
        const s = document.createElement("span");
        r.append(s);
        s.className = "swatch";
        s.style.backgroundColor = n;
        r.ariaSelected = n === __classPrivateFieldGet(this, _ColorPicker_Cs, "f");
        r.addEventListener("click", __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Ls).bind(this, n), { signal: e });
        t.append(r);
    } t.addEventListener("keydown", __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Bs).bind(this), { signal: e }); return t; }, _ColorPicker_Ls = function _ColorPicker_Ls(t, e) { e.stopPropagation(); __classPrivateFieldGet(this, _ColorPicker_ks, "f").dispatch("switchannotationeditorparams", { source: this, type: f.HIGHLIGHT_COLOR, value: t }); this.updateColor(t); }, _ColorPicker_Bs = function _ColorPicker_Bs(t) { _v._keyboardManager.exec(this, t); }, _ColorPicker_Rs = function _ColorPicker_Rs(t) { if (__classPrivateFieldGet(this, _ColorPicker_instances, "a", _ColorPicker_Ns_get)) {
        this.hideDropdown();
        return;
    } __classPrivateFieldSet(this, _ColorPicker_Ps, 0 === t.detail, "f"); if (!__classPrivateFieldGet(this, _ColorPicker_Is, "f")) {
        __classPrivateFieldSet(this, _ColorPicker_Is, new AbortController, "f");
        window.addEventListener("pointerdown", __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_p).bind(this), { signal: __classPrivateFieldGet(this, _ColorPicker_y, "f").combinedSignal(__classPrivateFieldGet(this, _ColorPicker_Is, "f")) });
    } __classPrivateFieldGet(this, _ColorPicker_Ts, "f").ariaExpanded = "true"; if (__classPrivateFieldGet(this, _ColorPicker_Ds, "f")) {
        __classPrivateFieldGet(this, _ColorPicker_Ds, "f").classList.remove("hidden");
        return;
    } const e = __classPrivateFieldSet(this, _ColorPicker_Ds, __classPrivateFieldGet(this, _ColorPicker_instances, "m", _ColorPicker_Os).call(this), "f"); __classPrivateFieldGet(this, _ColorPicker_Ts, "f").append(e); }, _ColorPicker_p = function _ColorPicker_p(t) { var _a; ((_a = __classPrivateFieldGet(this, _ColorPicker_Ds, "f")) === null || _a === void 0 ? void 0 : _a.contains(t.target)) || this.hideDropdown(); }, _ColorPicker_Ns_get = function _ColorPicker_Ns_get() { return __classPrivateFieldGet(this, _ColorPicker_Ds, "f") && !__classPrivateFieldGet(this, _ColorPicker_Ds, "f").classList.contains("hidden"); };
    _ColorPicker_Fs = { value: null };
    class BasicColorPicker {
        constructor(t) {
            var _a;
            _BasicColorPicker_Us.set(this, null);
            _BasicColorPicker_a.set(this, null);
            _BasicColorPicker_y.set(this, null);
            __classPrivateFieldSet(this, _BasicColorPicker_a, t, "f");
            __classPrivateFieldSet(this, _BasicColorPicker_y, t._uiManager, "f");
            __classPrivateFieldSet(_a = _w, _w, __classPrivateFieldGet(_a, _w, "f", _BasicColorPicker_Fs) || Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" }), "f", _BasicColorPicker_Fs);
        }
        renderButton() { if (__classPrivateFieldGet(this, _BasicColorPicker_Us, "f"))
            return __classPrivateFieldGet(this, _BasicColorPicker_Us, "f"); const { editorType: t, colorType: e, color: i } = __classPrivateFieldGet(this, _BasicColorPicker_a, "f"), n = __classPrivateFieldSet(this, _BasicColorPicker_Us, document.createElement("input"), "f"); n.type = "color"; n.value = i || "#000000"; n.className = "basicColorPicker"; n.tabIndex = 0; n.setAttribute("data-l10n-id", __classPrivateFieldGet(_w, _w, "f", _BasicColorPicker_Fs)[t]); n.addEventListener("input", () => { __classPrivateFieldGet(this, _BasicColorPicker_y, "f").updateParams(e, n.value); }, { signal: __classPrivateFieldGet(this, _BasicColorPicker_y, "f")._signal }); return n; }
        update(t) { __classPrivateFieldGet(this, _BasicColorPicker_Us, "f") && (__classPrivateFieldGet(this, _BasicColorPicker_Us, "f").value = t); }
        destroy() { var _a; (_a = __classPrivateFieldGet(this, _BasicColorPicker_Us, "f")) === null || _a === void 0 ? void 0 : _a.remove(); __classPrivateFieldSet(this, _BasicColorPicker_Us, null, "f"); }
        hideDropdown() { }
    }
    _w = BasicColorPicker, _BasicColorPicker_Us = new WeakMap(), _BasicColorPicker_a = new WeakMap(), _BasicColorPicker_y = new WeakMap();
    _BasicColorPicker_Fs = { value: null };
    __webpack_require__(531);
    function makeColorComp(t) { return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0"); }
    function scaleAndClamp(t) { return Math.max(0, Math.min(255, 255 * t)); }
    class ColorConverters {
        static CMYK_G([t, e, i, n]) { return ["G", 1 - Math.min(1, .3 * t + .59 * i + .11 * e + n)]; }
        static G_CMYK([t]) { return ["CMYK", 0, 0, 0, 1 - t]; }
        static G_RGB([t]) { return ["RGB", t, t, t]; }
        static G_rgb([t]) { return [t = scaleAndClamp(t), t, t]; }
        static G_HTML([t]) { const e = makeColorComp(t); return `#${e}${e}${e}`; }
        static RGB_G([t, e, i]) { return ["G", .3 * t + .59 * e + .11 * i]; }
        static RGB_rgb(t) { return t.map(scaleAndClamp); }
        static RGB_HTML(t) { return `#${t.map(makeColorComp).join("")}`; }
        static T_HTML() { return "#00000000"; }
        static T_rgb() { return [null]; }
        static CMYK_RGB([t, e, i, n]) { return ["RGB", 1 - Math.min(1, t + n), 1 - Math.min(1, i + n), 1 - Math.min(1, e + n)]; }
        static CMYK_rgb([t, e, i, n]) { return [scaleAndClamp(1 - Math.min(1, t + n)), scaleAndClamp(1 - Math.min(1, i + n)), scaleAndClamp(1 - Math.min(1, e + n))]; }
        static CMYK_HTML(t) { const e = this.CMYK_RGB(t).slice(1); return this.RGB_HTML(e); }
        static RGB_CMYK([t, e, i]) { const n = 1 - t, r = 1 - e, s = 1 - i; return ["CMYK", n, r, s, Math.min(n, r, s)]; }
    }
    class BaseSVGFactory {
        create(t, e, i = !1) { if (t <= 0 || e <= 0)
            throw new Error("Invalid SVG dimensions"); const n = this._createSVG("svg:svg"); n.setAttribute("version", "1.1"); if (!i) {
            n.setAttribute("width", `${t}px`);
            n.setAttribute("height", `${e}px`);
        } n.setAttribute("preserveAspectRatio", "none"); n.setAttribute("viewBox", `0 0 ${t} ${e}`); return n; }
        createElement(t) { if ("string" != typeof t)
            throw new Error("Invalid SVG element type"); return this._createSVG(t); }
        _createSVG(t) { unreachable("Abstract method `_createSVG` called."); }
    }
    class DOMSVGFactory extends BaseSVGFactory {
        _createSVG(t) { return document.createElementNS(X, t); }
    }
    const jt = new WeakSet, Gt = 60 * (new Date).getTimezoneOffset() * 1e3;
    class AnnotationElementFactory {
        static create(t) { switch (t.data.annotationType) {
            case C.LINK: return new LinkAnnotationElement(t);
            case C.TEXT: return new TextAnnotationElement(t);
            case C.WIDGET:
                switch (t.data.fieldType) {
                    case "Tx": return new TextWidgetAnnotationElement(t);
                    case "Btn": return t.data.radioButton ? new RadioButtonWidgetAnnotationElement(t) : t.data.checkBox ? new CheckboxWidgetAnnotationElement(t) : new PushButtonWidgetAnnotationElement(t);
                    case "Ch": return new ChoiceWidgetAnnotationElement(t);
                    case "Sig": return new SignatureWidgetAnnotationElement(t);
                }
                return new WidgetAnnotationElement(t);
            case C.POPUP: return new PopupAnnotationElement(t);
            case C.FREETEXT: return new FreeTextAnnotationElement(t);
            case C.LINE: return new LineAnnotationElement(t);
            case C.SQUARE: return new SquareAnnotationElement(t);
            case C.CIRCLE: return new CircleAnnotationElement(t);
            case C.POLYLINE: return new PolylineAnnotationElement(t);
            case C.CARET: return new CaretAnnotationElement(t);
            case C.INK: return new InkAnnotationElement(t);
            case C.POLYGON: return new PolygonAnnotationElement(t);
            case C.HIGHLIGHT: return new HighlightAnnotationElement(t);
            case C.UNDERLINE: return new UnderlineAnnotationElement(t);
            case C.SQUIGGLY: return new SquigglyAnnotationElement(t);
            case C.STRIKEOUT: return new StrikeOutAnnotationElement(t);
            case C.STAMP: return new StampAnnotationElement(t);
            case C.FILEATTACHMENT: return new FileAttachmentAnnotationElement(t);
            default: return new AnnotationElement(t);
        } }
    }
    class AnnotationElement {
        constructor(t, { isRenderable: e = !1, ignoreBorder: i = !1, createQuadrilaterals: n = !1 } = {}) {
            _AnnotationElement_instances.add(this);
            _AnnotationElement_Hs.set(this, null);
            _AnnotationElement_zs.set(this, !1);
            _AnnotationElement_js.set(this, null);
            this.isRenderable = e;
            this.data = t.data;
            this.layer = t.layer;
            this.linkService = t.linkService;
            this.downloadManager = t.downloadManager;
            this.imageResourcesPath = t.imageResourcesPath;
            this.renderForms = t.renderForms;
            this.svgFactory = t.svgFactory;
            this.annotationStorage = t.annotationStorage;
            this.enableComment = t.enableComment;
            this.enableScripting = t.enableScripting;
            this.hasJSActions = t.hasJSActions;
            this._fieldObjects = t.fieldObjects;
            this.parent = t.parent;
            this.hasOwnCommentButton = !1;
            e && (this.contentElement = this.container = this._createContainer(i));
            n && this._createQuadrilaterals();
        }
        static _hasPopupData({ contentsObj: t, richText: e }) { return !(!(t === null || t === void 0 ? void 0 : t.str) && !(e === null || e === void 0 ? void 0 : e.str)); }
        get _isEditable() { return this.data.isEditable; }
        get hasPopupData() { return AnnotationElement._hasPopupData(this.data) || this.enableComment && !!this.commentText; }
        get commentData() { var _a; const { data: t } = this, e = (_a = this.annotationStorage) === null || _a === void 0 ? void 0 : _a.getEditor(t.id); return e ? e.getData() : t; }
        get hasCommentButton() { return this.enableComment && this.hasPopupElement; }
        get commentButtonPosition() { var _a; const t = (_a = this.annotationStorage) === null || _a === void 0 ? void 0 : _a.getEditor(this.data.id); if (t)
            return t.commentButtonPositionInPage; const { quadPoints: e, inkLists: i, rect: n } = this.data; let r = -1 / 0, s = -1 / 0; if ((e === null || e === void 0 ? void 0 : e.length) >= 8) {
            for (let t = 0; t < e.length; t += 8)
                if (e[t + 1] > s) {
                    s = e[t + 1];
                    r = e[t + 2];
                }
                else
                    e[t + 1] === s && (r = Math.max(r, e[t + 2]));
            return [r, s];
        } if ((i === null || i === void 0 ? void 0 : i.length) >= 1) {
            for (const t of i)
                for (let e = 0, i = t.length; e < i; e += 2)
                    if (t[e + 1] > s) {
                        s = t[e + 1];
                        r = t[e];
                    }
                    else
                        t[e + 1] === s && (r = Math.max(r, t[e]));
            if (r !== 1 / 0)
                return [r, s];
        } return n ? [n[2], n[3]] : null; }
        _normalizePoint(t) { const { page: { view: e }, viewport: { rawDims: { pageWidth: i, pageHeight: n, pageX: r, pageY: s } } } = this.parent; t[1] = e[3] - t[1] + e[1]; t[0] = 100 * (t[0] - r) / i; t[1] = 100 * (t[1] - s) / n; return t; }
        get commentText() { var _a, _5, _6; const { data: t } = this; return ((_5 = (_a = this.annotationStorage.getRawValue(`${g}${t.id}`)) === null || _a === void 0 ? void 0 : _a.popup) === null || _5 === void 0 ? void 0 : _5.contents) || ((_6 = t.contentsObj) === null || _6 === void 0 ? void 0 : _6.str) || ""; }
        set commentText(t) { const { data: e } = this, i = { deleted: !t, contents: t || "" }; this.annotationStorage.updateEditor(e.id, { popup: i }) || this.annotationStorage.setValue(`${g}${e.id}`, { id: e.id, annotationType: e.annotationType, page: this.parent.page, popup: i, popupRef: e.popupRef, modificationDate: new Date }); t || this.removePopup(); }
        removePopup() { var _a, _5; (_5 = (((_a = __classPrivateFieldGet(this, _AnnotationElement_js, "f")) === null || _a === void 0 ? void 0 : _a.popup) || this.popup)) === null || _5 === void 0 ? void 0 : _5.remove(); __classPrivateFieldSet(this, _AnnotationElement_js, this.popup = null, "f"); }
        updateEdited(t) { var _a; if (!this.container)
            return; t.rect && (__classPrivateFieldSet(this, _AnnotationElement_Hs, __classPrivateFieldGet(this, _AnnotationElement_Hs, "f") || { rect: this.data.rect.slice(0) }, "f")); const { rect: e, popup: i } = t; e && __classPrivateFieldGet(this, _AnnotationElement_instances, "m", _AnnotationElement_Gs).call(this, e); let n = ((_a = __classPrivateFieldGet(this, _AnnotationElement_js, "f")) === null || _a === void 0 ? void 0 : _a.popup) || this.popup; if (!n && (i === null || i === void 0 ? void 0 : i.text)) {
            this._createPopup(i);
            n = __classPrivateFieldGet(this, _AnnotationElement_js, "f").popup;
        } if (n) {
            n.updateEdited(t);
            if (i === null || i === void 0 ? void 0 : i.deleted) {
                n.remove();
                __classPrivateFieldSet(this, _AnnotationElement_js, null, "f");
                this.popup = null;
            }
        } }
        resetEdited() { var _a; if (__classPrivateFieldGet(this, _AnnotationElement_Hs, "f")) {
            __classPrivateFieldGet(this, _AnnotationElement_instances, "m", _AnnotationElement_Gs).call(this, __classPrivateFieldGet(this, _AnnotationElement_Hs, "f").rect);
            (_a = __classPrivateFieldGet(this, _AnnotationElement_js, "f")) === null || _a === void 0 ? void 0 : _a.popup.resetEdited();
            __classPrivateFieldSet(this, _AnnotationElement_Hs, null, "f");
        } }
        _createContainer(t) { const { data: e, parent: { page: i, viewport: n } } = this, r = document.createElement("section"); r.setAttribute("data-annotation-id", e.id); this instanceof WidgetAnnotationElement || this instanceof LinkAnnotationElement || (r.tabIndex = 0); const { style: s } = r; s.zIndex = this.parent.zIndex; this.parent.zIndex += 2; e.alternativeText && (r.title = e.alternativeText); e.noRotate && r.classList.add("norotate"); if (!e.rect || this instanceof PopupAnnotationElement) {
            const { rotation: t } = e;
            e.hasOwnCanvas || 0 === t || this.setRotation(t, r);
            return r;
        } const { width: a, height: o } = this; if (!t && e.borderStyle.width > 0) {
            s.borderWidth = `${e.borderStyle.width}px`;
            const t = e.borderStyle.horizontalCornerRadius, i = e.borderStyle.verticalCornerRadius;
            if (t > 0 || i > 0) {
                const e = `calc(${t}px * var(--total-scale-factor)) / calc(${i}px * var(--total-scale-factor))`;
                s.borderRadius = e;
            }
            else if (this instanceof RadioButtonWidgetAnnotationElement) {
                const t = `calc(${a}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`;
                s.borderRadius = t;
            }
            switch (e.borderStyle.style) {
                case D:
                    s.borderStyle = "solid";
                    break;
                case P:
                    s.borderStyle = "dashed";
                    break;
                case M:
                    warn("Unimplemented border style: beveled");
                    break;
                case k:
                    warn("Unimplemented border style: inset");
                    break;
                case I: s.borderBottomStyle = "solid";
            }
            const n = e.borderColor || null;
            if (n) {
                __classPrivateFieldSet(this, _AnnotationElement_zs, !0, "f");
                s.borderColor = Util.makeHexColor(0 | n[0], 0 | n[1], 0 | n[2]);
            }
            else
                s.borderWidth = 0;
        } const l = Util.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]), { pageWidth: h, pageHeight: c, pageX: d, pageY: u } = n.rawDims; s.left = 100 * (l[0] - d) / h + "%"; s.top = 100 * (l[1] - u) / c + "%"; const { rotation: p } = e; if (e.hasOwnCanvas || 0 === p) {
            s.width = 100 * a / h + "%";
            s.height = 100 * o / c + "%";
        }
        else
            this.setRotation(p, r); return r; }
        setRotation(t, e = this.container) { if (!this.data.rect)
            return; const { pageWidth: i, pageHeight: n } = this.parent.viewport.rawDims; let { width: r, height: s } = this; t % 180 != 0 && ([r, s] = [s, r]); e.style.width = 100 * r / i + "%"; e.style.height = 100 * s / n + "%"; e.setAttribute("data-main-rotation", (360 - t) % 360); }
        get _commonActions() { const setColor = (t, e, i) => { const n = i.detail[t], r = n[0], s = n.slice(1); i.target.style[e] = ColorConverters[`${r}_HTML`](s); this.annotationStorage.setValue(this.data.id, { [e]: ColorConverters[`${r}_rgb`](s) }); }; return shadow(this, "_commonActions", { display: t => { const { display: e } = t.detail, i = e % 2 == 1; this.container.style.visibility = i ? "hidden" : "visible"; this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: 1 === e || 2 === e }); }, print: t => { this.annotationStorage.setValue(this.data.id, { noPrint: !t.detail.print }); }, hidden: t => { const { hidden: e } = t.detail; this.container.style.visibility = e ? "hidden" : "visible"; this.annotationStorage.setValue(this.data.id, { noPrint: e, noView: e }); }, focus: t => { setTimeout(() => t.target.focus({ preventScroll: !1 }), 0); }, userName: t => { t.target.title = t.detail.userName; }, readonly: t => { t.target.disabled = t.detail.readonly; }, required: t => { this._setRequired(t.target, t.detail.required); }, bgColor: t => { setColor("bgColor", "backgroundColor", t); }, fillColor: t => { setColor("fillColor", "backgroundColor", t); }, fgColor: t => { setColor("fgColor", "color", t); }, textColor: t => { setColor("textColor", "color", t); }, borderColor: t => { setColor("borderColor", "borderColor", t); }, strokeColor: t => { setColor("strokeColor", "borderColor", t); }, rotation: t => { const e = t.detail.rotation; this.setRotation(e); this.annotationStorage.setValue(this.data.id, { rotation: e }); } }); }
        _dispatchEventFromSandbox(t, e) { const i = this._commonActions; for (const n of Object.keys(e.detail)) {
            const r = t[n] || i[n];
            r === null || r === void 0 ? void 0 : r(e);
        } }
        _setDefaultPropertiesFromJS(t) { if (!this.enableScripting)
            return; const e = this.annotationStorage.getRawValue(this.data.id); if (!e)
            return; const i = this._commonActions; for (const [n, r] of Object.entries(e)) {
            const s = i[n];
            if (s) {
                s({ detail: { [n]: r }, target: t });
                delete e[n];
            }
        } }
        _createQuadrilaterals() { if (!this.container)
            return; const { quadPoints: t } = this.data; if (!t)
            return; const [e, i, n, r] = this.data.rect.map(t => Math.fround(t)); if (8 === t.length) {
            const [s, a, o, l] = t.subarray(2, 6);
            if (n === s && r === a && e === o && i === l)
                return;
        } const { style: s } = this.container; let a; if (__classPrivateFieldGet(this, _AnnotationElement_zs, "f")) {
            const { borderColor: t, borderWidth: e } = s;
            s.borderWidth = 0;
            a = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t}" stroke-width="${e}">`];
            this.container.classList.add("hasBorder");
        } const o = n - e, l = r - i, { svgFactory: h } = this, c = h.createElement("svg"); c.classList.add("quadrilateralsContainer"); c.setAttribute("width", 0); c.setAttribute("height", 0); c.role = "none"; const d = h.createElement("defs"); c.append(d); const u = h.createElement("clipPath"), p = `clippath_${this.data.id}`; u.setAttribute("id", p); u.setAttribute("clipPathUnits", "objectBoundingBox"); d.append(u); for (let i = 2, n = t.length; i < n; i += 8) {
            const n = t[i], s = t[i + 1], c = t[i + 2], d = t[i + 3], p = h.createElement("rect"), g = (c - e) / o, m = (r - s) / l, f = (n - c) / o, b = (s - d) / l;
            p.setAttribute("x", g);
            p.setAttribute("y", m);
            p.setAttribute("width", f);
            p.setAttribute("height", b);
            u.append(p);
            a === null || a === void 0 ? void 0 : a.push(`<rect vector-effect="non-scaling-stroke" x="${g}" y="${m}" width="${f}" height="${b}"/>`);
        } if (__classPrivateFieldGet(this, _AnnotationElement_zs, "f")) {
            a.push("</g></svg>')");
            s.backgroundImage = a.join("");
        } this.container.append(c); this.container.style.clipPath = `url(#${p})`; }
        _createPopup(t = null) { const { data: e } = this; let i, n; if (t) {
            i = { str: t.text };
            n = t.date;
        }
        else {
            i = e.contentsObj;
            n = e.modificationDate;
        } __classPrivateFieldSet(this, _AnnotationElement_js, new PopupAnnotationElement({ data: { color: e.color, titleObj: e.titleObj, modificationDate: n, contentsObj: i, richText: e.richText, parentRect: e.rect, borderStyle: 0, id: `popup_${e.id}`, rotation: e.rotation, noRotate: !0 }, linkService: this.linkService, parent: this.parent, elements: [this] }), "f"); }
        get hasPopupElement() { return !!(__classPrivateFieldGet(this, _AnnotationElement_js, "f") || this.popup || this.data.popupRef); }
        get extraPopupElement() { return __classPrivateFieldGet(this, _AnnotationElement_js, "f"); }
        render() { unreachable("Abstract method `AnnotationElement.render` called"); }
        _getElementsByName(t, e = null) { const i = []; if (this._fieldObjects) {
            const n = this._fieldObjects[t];
            if (n)
                for (const { page: t, id: r, exportValues: s } of n) {
                    if (-1 === t)
                        continue;
                    if (r === e)
                        continue;
                    const n = "string" == typeof s ? s : null, a = document.querySelector(`[data-element-id="${r}"]`);
                    !a || jt.has(a) ? i.push({ id: r, exportValue: n, domElement: a }) : warn(`_getElementsByName - element not allowed: ${r}`);
                }
            return i;
        } for (const n of document.getElementsByName(t)) {
            const { exportValue: t } = n, r = n.getAttribute("data-element-id");
            r !== e && (jt.has(n) && i.push({ id: r, exportValue: t, domElement: n }));
        } return i; }
        show() { var _a; this.container && (this.container.hidden = !1); (_a = this.popup) === null || _a === void 0 ? void 0 : _a.maybeShow(); }
        hide() { var _a; this.container && (this.container.hidden = !0); (_a = this.popup) === null || _a === void 0 ? void 0 : _a.forceHide(); }
        getElementsToTriggerPopup() { return this.container; }
        addHighlightArea() { const t = this.getElementsToTriggerPopup(); if (Array.isArray(t))
            for (const e of t)
                e.classList.add("highlightArea");
        else
            t.classList.add("highlightArea"); }
        _editOnDoubleClick() { if (!this._isEditable)
            return; const { annotationEditorType: t, data: { id: e } } = this; this.container.addEventListener("dblclick", () => { var _a; (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("switchannotationeditormode", { source: this, mode: t, editId: e, mustEnterInEditMode: !0 }); }); }
        get width() { return this.data.rect[2] - this.data.rect[0]; }
        get height() { return this.data.rect[3] - this.data.rect[1]; }
    }
    _AnnotationElement_Hs = new WeakMap(), _AnnotationElement_zs = new WeakMap(), _AnnotationElement_js = new WeakMap(), _AnnotationElement_instances = new WeakSet(), _AnnotationElement_Gs = function _AnnotationElement_Gs(t) { const { container: { style: e }, data: { rect: i, rotation: n }, parent: { viewport: { rawDims: { pageWidth: r, pageHeight: s, pageX: a, pageY: o } } } } = this; i === null || i === void 0 ? void 0 : i.splice(0, 4, ...t); e.left = 100 * (t[0] - a) / r + "%"; e.top = 100 * (s - t[3] + o) / s + "%"; if (0 === n) {
        e.width = 100 * (t[2] - t[0]) / r + "%";
        e.height = 100 * (t[3] - t[1]) / s + "%";
    }
    else
        this.setRotation(n); };
    class EditorAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0 }); this.editor = t.editor; }
        render() { this.container.className = "editorAnnotation"; return this.container; }
        createOrUpdatePopup() { const { editor: t } = this; t.hasComment && this._createPopup(t.comment); }
        get hasCommentButton() { return this.enableComment && this.editor.hasComment; }
        get commentButtonPosition() { return this.editor.commentButtonPositionInPage; }
        get commentText() { return this.editor.comment.text; }
        set commentText(t) { this.editor.comment = t; t || this.removePopup(); }
        get commentData() { return this.editor.getData(); }
        remove() { this.parent.removeAnnotation(this.data.id); this.container.remove(); this.container = null; this.removePopup(); }
    }
    class LinkAnnotationElement extends AnnotationElement {
        constructor(t, e = null) {
            super(t, { isRenderable: !0, ignoreBorder: !!(e === null || e === void 0 ? void 0 : e.ignoreBorder), createQuadrilaterals: !0 });
            _LinkAnnotationElement_instances.add(this);
            this.isTooltipOnly = t.data.isTooltipOnly;
        }
        render() { const { data: t, linkService: e } = this, i = document.createElement("a"); i.setAttribute("data-element-id", t.id); let n = !1; if (t.url) {
            e.addLinkAttributes(i, t.url, t.newWindow);
            n = !0;
        }
        else if (t.action) {
            this._bindNamedAction(i, t.action, t.overlaidText);
            n = !0;
        }
        else if (t.attachment) {
            __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_Ws).call(this, i, t.attachment, t.overlaidText, t.attachmentDest);
            n = !0;
        }
        else if (t.setOCGState) {
            __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_Vs).call(this, i, t.setOCGState, t.overlaidText);
            n = !0;
        }
        else if (t.dest) {
            this._bindLink(i, t.dest, t.overlaidText);
            n = !0;
        }
        else {
            if (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                this._bindJSAction(i, t);
                n = !0;
            }
            if (t.resetForm) {
                this._bindResetFormAction(i, t.resetForm);
                n = !0;
            }
            else if (this.isTooltipOnly && !n) {
                this._bindLink(i, "");
                n = !0;
            }
        } this.container.classList.add("linkAnnotation"); if (n) {
            this.contentElement = i;
            this.container.append(i);
        } return this.container; }
        _bindLink(t, e, i = "") { t.href = this.linkService.getDestinationHash(e); t.onclick = () => { e && this.linkService.goToDestination(e); return !1; }; (e || "" === e) && __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); i && (t.title = i); }
        _bindNamedAction(t, e, i = "") { t.href = this.linkService.getAnchorUrl(""); t.onclick = () => { this.linkService.executeNamedAction(e); return !1; }; i && (t.title = i); __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); }
        _bindJSAction(t, e) { t.href = this.linkService.getAnchorUrl(""); const i = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]); for (const n of Object.keys(e.actions)) {
            const r = i.get(n);
            r && (t[r] = () => { var _a; (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e.id, name: n } }); return !1; });
        } e.overlaidText && (t.title = e.overlaidText); t.onclick || (t.onclick = () => !1); __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); }
        _bindResetFormAction(t, e) { const i = t.onclick; i || (t.href = this.linkService.getAnchorUrl("")); __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); if (this._fieldObjects)
            t.onclick = () => { var _a; i === null || i === void 0 ? void 0 : i(); const { fields: t, refs: n, include: r } = e, s = []; if (0 !== t.length || 0 !== n.length) {
                const e = new Set(n);
                for (const i of t) {
                    const t = this._fieldObjects[i] || [];
                    for (const { id: i } of t)
                        e.add(i);
                }
                for (const t of Object.values(this._fieldObjects))
                    for (const i of t)
                        e.has(i.id) === r && s.push(i);
            }
            else
                for (const t of Object.values(this._fieldObjects))
                    s.push(...t); const a = this.annotationStorage, o = []; for (const t of s) {
                const { id: e } = t;
                o.push(e);
                switch (t.type) {
                    case "text": {
                        const i = t.defaultValue || "";
                        a.setValue(e, { value: i });
                        break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                        const i = t.defaultValue === t.exportValues;
                        a.setValue(e, { value: i });
                        break;
                    }
                    case "combobox":
                    case "listbox": {
                        const i = t.defaultValue || "";
                        a.setValue(e, { value: i });
                        break;
                    }
                    default: continue;
                }
                const i = document.querySelector(`[data-element-id="${e}"]`);
                i && (jt.has(i) ? i.dispatchEvent(new Event("resetform")) : warn(`_bindResetFormAction - element not allowed: ${e}`));
            } this.enableScripting && ((_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: o, name: "ResetForm" } })); return !1; };
        else {
            warn('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
            i || (t.onclick = () => !1);
        } }
    }
    _LinkAnnotationElement_instances = new WeakSet(), _LinkAnnotationElement_$s = function _LinkAnnotationElement_$s() { this.container.setAttribute("data-internal-link", ""); }, _LinkAnnotationElement_Ws = function _LinkAnnotationElement_Ws(t, e, i = "", n = null) { t.href = this.linkService.getAnchorUrl(""); e.description ? t.title = e.description : i && (t.title = i); t.onclick = () => { var _a; (_a = this.downloadManager) === null || _a === void 0 ? void 0 : _a.openOrDownloadData(e.content, e.filename, n); return !1; }; __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); }, _LinkAnnotationElement_Vs = function _LinkAnnotationElement_Vs(t, e, i = "") { t.href = this.linkService.getAnchorUrl(""); t.onclick = () => { this.linkService.executeSetOCGState(e); return !1; }; i && (t.title = i); __classPrivateFieldGet(this, _LinkAnnotationElement_instances, "m", _LinkAnnotationElement_$s).call(this); };
    class TextAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0 }); }
        render() { this.container.classList.add("textAnnotation"); const t = document.createElement("img"); t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg"; t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"); t.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })); if (!this.data.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.append(t); return this.container; }
    }
    class WidgetAnnotationElement extends AnnotationElement {
        render() { return this.container; }
        showElementAndHideCanvas(t) { var _a; if (this.data.hasOwnCanvas) {
            "CANVAS" === ((_a = t.previousSibling) === null || _a === void 0 ? void 0 : _a.nodeName) && (t.previousSibling.hidden = !0);
            t.hidden = !1;
        } }
        _getKeyModifier(t) { return FeatureTest.platform.isMac ? t.metaKey : t.ctrlKey; }
        _setEventListener(t, e, i, n, r) { i.includes("mouse") ? t.addEventListener(i, t => { var _a; (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n, value: r(t), shift: t.shiftKey, modifier: this._getKeyModifier(t) } }); }) : t.addEventListener(i, t => { var _a; if ("blur" === i) {
            if (!e.focused || !t.relatedTarget)
                return;
            e.focused = !1;
        }
        else if ("focus" === i) {
            if (e.focused)
                return;
            e.focused = !0;
        } r && ((_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n, value: r(t) } })); }); }
        _setEventListeners(t, e, i, n) { var _a, _5, _6; for (const [r, s] of i)
            if ("Action" === s || ((_a = this.data.actions) === null || _a === void 0 ? void 0 : _a[s])) {
                "Focus" !== s && "Blur" !== s || (e || (e = { focused: !1 }));
                this._setEventListener(t, e, r, s, n);
                "Focus" !== s || ((_5 = this.data.actions) === null || _5 === void 0 ? void 0 : _5.Blur) ? "Blur" !== s || ((_6 = this.data.actions) === null || _6 === void 0 ? void 0 : _6.Focus) || this._setEventListener(t, e, "focus", "Focus", null) : this._setEventListener(t, e, "blur", "Blur", null);
            } }
        _setBackgroundColor(t) { const e = this.data.backgroundColor || null; t.style.backgroundColor = null === e ? "transparent" : Util.makeHexColor(e[0], e[1], e[2]); }
        _setTextStyle(t) { const e = ["left", "center", "right"], { fontColor: i } = this.data.defaultAppearanceData, n = this.data.defaultAppearanceData.fontSize || 9, s = t.style; let a; const roundToOneDecimal = t => Math.round(10 * t) / 10; if (this.data.multiLine) {
            const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e = t / (Math.round(t / (r * n)) || 1);
            a = Math.min(n, roundToOneDecimal(e / r));
        }
        else {
            const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            a = Math.min(n, roundToOneDecimal(t / r));
        } s.fontSize = `calc(${a}px * var(--total-scale-factor))`; s.color = Util.makeHexColor(i[0], i[1], i[2]); null !== this.data.textAlignment && (s.textAlign = e[this.data.textAlignment]); }
        _setRequired(t, e) { e ? t.setAttribute("required", !0) : t.removeAttribute("required"); t.setAttribute("aria-required", e); }
    }
    class TextWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(t) { super(t, { isRenderable: t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue }); }
        setPropertyOnSiblings(t, e, i, n) { const r = this.annotationStorage; for (const s of this._getElementsByName(t.name, t.id)) {
            s.domElement && (s.domElement[e] = i);
            r.setValue(s.id, { [n]: i });
        } }
        render() { var _a, _5; const t = this.annotationStorage, e = this.data.id; this.container.classList.add("textWidgetAnnotation"); let i = null; if (this.renderForms) {
            const n = t.getValue(e, { value: this.data.fieldValue });
            let r = n.value || "";
            const s = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
            s && r.length > s && (r = r.slice(0, s));
            let a = n.formattedValue || ((_a = this.data.textContent) === null || _a === void 0 ? void 0 : _a.join("\n")) || null;
            a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
            const o = { userValue: r, formattedValue: a, lastCommittedValue: null, commitKey: 1, focused: !1 };
            if (this.data.multiLine) {
                i = document.createElement("textarea");
                i.textContent = a !== null && a !== void 0 ? a : r;
                this.data.doNotScroll && (i.style.overflowY = "hidden");
            }
            else {
                i = document.createElement("input");
                i.type = this.data.password ? "password" : "text";
                i.setAttribute("value", a !== null && a !== void 0 ? a : r);
                this.data.doNotScroll && (i.style.overflowX = "hidden");
            }
            this.data.hasOwnCanvas && (i.hidden = !0);
            jt.add(i);
            this.contentElement = i;
            i.setAttribute("data-element-id", e);
            i.disabled = this.data.readOnly;
            i.name = this.data.fieldName;
            i.tabIndex = 0;
            const { datetimeFormat: l, datetimeType: h, timeStep: c } = this.data, d = !!h && this.enableScripting;
            l && (i.title = l);
            this._setRequired(i, this.data.required);
            s && (i.maxLength = s);
            i.addEventListener("input", n => { t.setValue(e, { value: n.target.value }); this.setPropertyOnSiblings(i, "value", n.target.value, "value"); o.formattedValue = null; });
            i.addEventListener("resetform", t => { var _a; const e = (_a = this.data.defaultFieldValue) !== null && _a !== void 0 ? _a : ""; i.value = o.userValue = e; o.formattedValue = null; });
            let blurListener = t => { const { formattedValue: e } = o; null != e && (t.target.value = e); t.target.scrollLeft = 0; };
            if (this.enableScripting && this.hasJSActions) {
                i.addEventListener("focus", t => { var _a; if (o.focused)
                    return; const { target: e } = t; if (d) {
                    e.type = h;
                    c && (e.step = c);
                } if (o.userValue) {
                    const t = o.userValue;
                    if (d)
                        if ("time" === h) {
                            const i = new Date(t), n = [i.getHours(), i.getMinutes(), i.getSeconds()];
                            e.value = n.map(t => t.toString().padStart(2, "0")).join(":");
                        }
                        else
                            e.value = new Date(t - Gt).toISOString().split("date" === h ? "T" : ".", 1)[0];
                    else
                        e.value = t;
                } o.lastCommittedValue = e.value; o.commitKey = 1; ((_a = this.data.actions) === null || _a === void 0 ? void 0 : _a.Focus) || (o.focused = !0); });
                i.addEventListener("updatefromsandbox", i => { this.showElementAndHideCanvas(i.target); const n = { value(i) { var _a; o.userValue = (_a = i.detail.value) !== null && _a !== void 0 ? _a : ""; d || t.setValue(e, { value: o.userValue.toString() }); i.target.value = o.userValue; }, formattedValue(i) { const { formattedValue: n } = i.detail; o.formattedValue = n; null != n && i.target !== document.activeElement && (i.target.value = n); const r = { formattedValue: n }; d && (r.value = n); t.setValue(e, r); }, selRange(t) { t.target.setSelectionRange(...t.detail.selRange); }, charLimit: i => { var _a; const { charLimit: n } = i.detail, { target: r } = i; if (0 === n) {
                        r.removeAttribute("maxLength");
                        return;
                    } r.setAttribute("maxLength", n); let s = o.userValue; if (s && !(s.length <= n)) {
                        s = s.slice(0, n);
                        r.value = o.userValue = s;
                        t.setValue(e, { value: s });
                        (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: s, willCommit: !0, commitKey: 1, selStart: r.selectionStart, selEnd: r.selectionEnd } });
                    } } }; this._dispatchEventFromSandbox(n, i); });
                i.addEventListener("keydown", t => { var _a; o.commitKey = 1; let i = -1; "Escape" === t.key ? i = 0 : "Enter" !== t.key || this.data.multiLine ? "Tab" === t.key && (o.commitKey = 3) : i = 2; if (-1 === i)
                    return; const { value: n } = t.target; if (o.lastCommittedValue !== n) {
                    o.lastCommittedValue = n;
                    o.userValue = n;
                    (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: n, willCommit: !0, commitKey: i, selStart: t.target.selectionStart, selEnd: t.target.selectionEnd } });
                } });
                const n = blurListener;
                blurListener = null;
                i.addEventListener("blur", t => { var _a, _5; if (!o.focused || !t.relatedTarget)
                    return; ((_a = this.data.actions) === null || _a === void 0 ? void 0 : _a.Blur) || (o.focused = !1); const { target: i } = t; let { value: r } = i; if (d) {
                    if (r && "time" === h) {
                        const t = r.split(":").map(t => parseInt(t, 10));
                        r = new Date(2e3, 0, 1, t[0], t[1], t[2] || 0).valueOf();
                        i.step = "";
                    }
                    else {
                        r.includes("T") || (r = `${r}T00:00`);
                        r = new Date(r).valueOf();
                    }
                    i.type = "text";
                } o.userValue = r; o.lastCommittedValue !== r && ((_5 = this.linkService.eventBus) === null || _5 === void 0 ? void 0 : _5.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: r, willCommit: !0, commitKey: o.commitKey, selStart: t.target.selectionStart, selEnd: t.target.selectionEnd } })); n(t); });
                ((_5 = this.data.actions) === null || _5 === void 0 ? void 0 : _5.Keystroke) && i.addEventListener("beforeinput", t => { var _a; o.lastCommittedValue = null; const { data: i, target: n } = t, { value: r, selectionStart: s, selectionEnd: a } = n; let l = s, h = a; switch (t.inputType) {
                    case "deleteWordBackward": {
                        const t = r.substring(0, s).match(/\w*[^\w]*$/);
                        t && (l -= t[0].length);
                        break;
                    }
                    case "deleteWordForward": {
                        const t = r.substring(s).match(/^[^\w]*\w*/);
                        t && (h += t[0].length);
                        break;
                    }
                    case "deleteContentBackward":
                        s === a && (l -= 1);
                        break;
                    case "deleteContentForward": s === a && (h += 1);
                } t.preventDefault(); (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: r, change: i || "", willCommit: !1, selStart: l, selEnd: h } }); });
                this._setEventListeners(i, o, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.value);
            }
            blurListener && i.addEventListener("blur", blurListener);
            if (this.data.comb) {
                const t = (this.data.rect[2] - this.data.rect[0]) / s;
                i.classList.add("comb");
                i.style.letterSpacing = `calc(${t}px * var(--total-scale-factor) - 1ch)`;
            }
        }
        else {
            i = document.createElement("div");
            i.textContent = this.data.fieldValue;
            i.style.verticalAlign = "middle";
            i.style.display = "table-cell";
            this.data.hasOwnCanvas && (i.hidden = !0);
        } this._setTextStyle(i); this._setBackgroundColor(i); this._setDefaultPropertiesFromJS(i); this.container.append(i); return this.container; }
    }
    class SignatureWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(t) { super(t, { isRenderable: !!t.data.hasOwnCanvas }); }
    }
    class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(t) { super(t, { isRenderable: t.renderForms }); }
        render() { const t = this.annotationStorage, e = this.data, i = e.id; let n = t.getValue(i, { value: e.exportValue === e.fieldValue }).value; if ("string" == typeof n) {
            n = "Off" !== n;
            t.setValue(i, { value: n });
        } this.container.classList.add("buttonWidgetAnnotation", "checkBox"); const r = document.createElement("input"); jt.add(r); r.setAttribute("data-element-id", i); r.disabled = e.readOnly; this._setRequired(r, this.data.required); r.type = "checkbox"; r.name = e.fieldName; n && r.setAttribute("checked", !0); r.setAttribute("exportValue", e.exportValue); r.tabIndex = 0; r.addEventListener("change", n => { const { name: r, checked: s } = n.target; for (const n of this._getElementsByName(r, i)) {
            const i = s && n.exportValue === e.exportValue;
            n.domElement && (n.domElement.checked = i);
            t.setValue(n.id, { value: i });
        } t.setValue(i, { value: s }); }); r.addEventListener("resetform", t => { const i = e.defaultFieldValue || "Off"; t.target.checked = i === e.exportValue; }); if (this.enableScripting && this.hasJSActions) {
            r.addEventListener("updatefromsandbox", e => { const n = { value(e) { e.target.checked = "Off" !== e.detail.value; t.setValue(i, { value: e.target.checked }); } }; this._dispatchEventFromSandbox(n, e); });
            this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked);
        } this._setBackgroundColor(r); this._setDefaultPropertiesFromJS(r); this.container.append(r); return this.container; }
    }
    class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(t) { super(t, { isRenderable: t.renderForms }); }
        render() { this.container.classList.add("buttonWidgetAnnotation", "radioButton"); const t = this.annotationStorage, e = this.data, i = e.id; let n = t.getValue(i, { value: e.fieldValue === e.buttonValue }).value; if ("string" == typeof n) {
            n = n !== e.buttonValue;
            t.setValue(i, { value: n });
        } if (n)
            for (const n of this._getElementsByName(e.fieldName, i))
                t.setValue(n.id, { value: !1 }); const r = document.createElement("input"); jt.add(r); r.setAttribute("data-element-id", i); r.disabled = e.readOnly; this._setRequired(r, this.data.required); r.type = "radio"; r.name = e.fieldName; n && r.setAttribute("checked", !0); r.tabIndex = 0; r.addEventListener("change", e => { const { name: n, checked: r } = e.target; for (const e of this._getElementsByName(n, i))
            t.setValue(e.id, { value: !1 }); t.setValue(i, { value: r }); }); r.addEventListener("resetform", t => { const i = e.defaultFieldValue; t.target.checked = null != i && i === e.buttonValue; }); if (this.enableScripting && this.hasJSActions) {
            const n = e.buttonValue;
            r.addEventListener("updatefromsandbox", e => { const r = { value: e => { const r = n === e.detail.value; for (const n of this._getElementsByName(e.target.name)) {
                    const e = r && n.id === i;
                    n.domElement && (n.domElement.checked = e);
                    t.setValue(n.id, { value: e });
                } } }; this._dispatchEventFromSandbox(r, e); });
            this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked);
        } this._setBackgroundColor(r); this._setDefaultPropertiesFromJS(r); this.container.append(r); return this.container; }
    }
    class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
        constructor(t) { super(t, { ignoreBorder: t.data.hasAppearance }); }
        render() { const t = super.render(); t.classList.add("buttonWidgetAnnotation", "pushButton"); const e = t.lastChild; if (this.enableScripting && this.hasJSActions && e) {
            this._setDefaultPropertiesFromJS(e);
            e.addEventListener("updatefromsandbox", t => { this._dispatchEventFromSandbox({}, t); });
        } return t; }
    }
    class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(t) { super(t, { isRenderable: t.renderForms }); }
        render() { this.container.classList.add("choiceWidgetAnnotation"); const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, { value: this.data.fieldValue }), n = document.createElement("select"); jt.add(n); n.setAttribute("data-element-id", e); n.disabled = this.data.readOnly; this._setRequired(n, this.data.required); n.name = this.data.fieldName; n.tabIndex = 0; let r = this.data.combo && this.data.options.length > 0; if (!this.data.combo) {
            n.size = this.data.options.length;
            this.data.multiSelect && (n.multiple = !0);
        } n.addEventListener("resetform", t => { const e = this.data.defaultFieldValue; for (const t of n.options)
            t.selected = t.value === e; }); const fixDisplayValue = (t, e) => { const i = e.replaceAll(" ", " "); t.textContent = i; i !== e && t.setAttribute("display-value", e); }; for (const t of this.data.options) {
            const e = document.createElement("option");
            fixDisplayValue(e, t.displayValue);
            e.value = t.exportValue;
            if (i.value.includes(t.exportValue)) {
                e.setAttribute("selected", !0);
                r = !1;
            }
            n.append(e);
        } let s = null; if (r) {
            const t = document.createElement("option");
            t.value = " ";
            t.setAttribute("hidden", !0);
            t.setAttribute("selected", !0);
            n.prepend(t);
            s = () => { t.remove(); n.removeEventListener("input", s); s = null; };
            n.addEventListener("input", s);
        } const getValue = t => { const e = t ? "value" : "textContent", { options: i, multiple: r } = n; return r ? Array.prototype.filter.call(i, t => t.selected).map(t => t[e]) : -1 === i.selectedIndex ? null : i[i.selectedIndex][e]; }; let a = getValue(!1); const getItems = t => { const e = t.target.options; return Array.prototype.map.call(e, t => ({ displayValue: t.getAttribute("display-value") || t.textContent, exportValue: t.value })); }; if (this.enableScripting && this.hasJSActions) {
            n.addEventListener("updatefromsandbox", i => { const r = { value(i) { s === null || s === void 0 ? void 0 : s(); const r = i.detail.value, o = new Set(Array.isArray(r) ? r : [r]); for (const t of n.options)
                    t.selected = o.has(t.value); t.setValue(e, { value: getValue(!0) }); a = getValue(!1); }, multipleSelection(t) { n.multiple = !0; }, remove(i) { const r = n.options, s = i.detail.remove; r[s].selected = !1; n.remove(s); if (r.length > 0) {
                    -1 === Array.prototype.findIndex.call(r, t => t.selected) && (r[0].selected = !0);
                } t.setValue(e, { value: getValue(!0), items: getItems(i) }); a = getValue(!1); }, clear(i) { for (; 0 !== n.length;)
                    n.remove(0); t.setValue(e, { value: null, items: [] }); a = getValue(!1); }, insert(i) { const { index: r, displayValue: s, exportValue: o } = i.detail.insert, l = n.children[r], h = document.createElement("option"); fixDisplayValue(h, s); h.value = o; l ? l.before(h) : n.append(h); t.setValue(e, { value: getValue(!0), items: getItems(i) }); a = getValue(!1); }, items(i) { const { items: r } = i.detail; for (; 0 !== n.length;)
                    n.remove(0); for (const t of r) {
                    const { displayValue: e, exportValue: i } = t, r = document.createElement("option");
                    fixDisplayValue(r, e);
                    r.value = i;
                    n.append(r);
                } n.options.length > 0 && (n.options[0].selected = !0); t.setValue(e, { value: getValue(!0), items: getItems(i) }); a = getValue(!1); }, indices(i) { const n = new Set(i.detail.indices); for (const t of i.target.options)
                    t.selected = n.has(t.index); t.setValue(e, { value: getValue(!0) }); a = getValue(!1); }, editable(t) { t.target.disabled = !t.detail.editable; } }; this._dispatchEventFromSandbox(r, i); });
            n.addEventListener("input", i => { var _a; const n = getValue(!0), r = getValue(!1); t.setValue(e, { value: n }); i.preventDefault(); (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: a, change: r, changeEx: n, willCommit: !1, commitKey: 1, keyDown: !1 } }); });
            this._setEventListeners(n, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], t => t.target.value);
        }
        else
            n.addEventListener("input", function (i) { t.setValue(e, { value: getValue(!0) }); }); this.data.combo && this._setTextStyle(n); this._setBackgroundColor(n); this._setDefaultPropertiesFromJS(n); this.container.append(n); return this.container; }
    }
    class PopupAnnotationElement extends AnnotationElement {
        constructor(t) {
            const { data: e, elements: i, parent: n } = t, r = !!n._commentManager;
            super(t, { isRenderable: !r && AnnotationElement._hasPopupData(e) });
            _PopupAnnotationElement_instances.add(this);
            this.elements = i;
            if (r && AnnotationElement._hasPopupData(e)) {
                const t = this.popup = __classPrivateFieldGet(this, _PopupAnnotationElement_instances, "m", _PopupAnnotationElement_qs).call(this);
                for (const e of i)
                    e.popup = t;
            }
            else
                this.popup = null;
        }
        render() { const { container: t } = this; t.classList.add("popupAnnotation"); t.role = "comment"; const e = this.popup = __classPrivateFieldGet(this, _PopupAnnotationElement_instances, "m", _PopupAnnotationElement_qs).call(this), i = []; for (const t of this.elements) {
            t.popup = e;
            t.container.ariaHasPopup = "dialog";
            i.push(t.data.id);
            t.addHighlightArea();
        } this.container.setAttribute("aria-controls", i.map(t => `${q}${t}`).join(",")); return this.container; }
    }
    _PopupAnnotationElement_instances = new WeakSet(), _PopupAnnotationElement_qs = function _PopupAnnotationElement_qs() { return new PopupElement({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager }); };
    class PopupElement {
        constructor({ container: t, color: e, elements: i, titleObj: n, modificationDate: r, contentsObj: s, richText: a, parent: o, rect: l, parentRect: h, open: c, commentManager: d = null }) {
            _PopupElement_instances.add(this);
            _PopupElement_V.set(this, null);
            _PopupElement_Xs.set(this, __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Bs).bind(this));
            _PopupElement_Ys.set(this, __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Ks).bind(this));
            _PopupElement_Js.set(this, __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Qs).bind(this));
            _PopupElement_Zs.set(this, __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ta).bind(this));
            _PopupElement_ea.set(this, null);
            _PopupElement_Ct.set(this, null);
            _PopupElement_ia.set(this, null);
            _PopupElement_na.set(this, null);
            _PopupElement_ra.set(this, null);
            _PopupElement_sa.set(this, null);
            _PopupElement_aa.set(this, null);
            _PopupElement_oa.set(this, !1);
            _PopupElement_la.set(this, null);
            _PopupElement_ha.set(this, null);
            _PopupElement_F.set(this, null);
            _PopupElement_ca.set(this, null);
            _PopupElement_da.set(this, null);
            _PopupElement_we.set(this, null);
            _PopupElement_ua.set(this, null);
            _PopupElement_fe.set(this, null);
            _PopupElement_pa.set(this, null);
            _PopupElement_Hs.set(this, null);
            _PopupElement_ga.set(this, !1);
            _PopupElement_ma.set(this, null);
            _PopupElement_fa.set(this, null);
            __classPrivateFieldSet(this, _PopupElement_Ct, t, "f");
            __classPrivateFieldSet(this, _PopupElement_pa, n, "f");
            __classPrivateFieldSet(this, _PopupElement_ia, s, "f");
            __classPrivateFieldSet(this, _PopupElement_fe, a, "f");
            __classPrivateFieldSet(this, _PopupElement_sa, o, "f");
            __classPrivateFieldSet(this, _PopupElement_ea, e, "f");
            __classPrivateFieldSet(this, _PopupElement_ua, l, "f");
            __classPrivateFieldSet(this, _PopupElement_aa, h, "f");
            __classPrivateFieldSet(this, _PopupElement_ra, i, "f");
            __classPrivateFieldSet(this, _PopupElement_V, d, "f");
            __classPrivateFieldSet(this, _PopupElement_ma, i[0], "f");
            __classPrivateFieldSet(this, _PopupElement_na, PDFDateString.toDateObject(r), "f");
            this.trigger = i.flatMap(t => t.getElementsToTriggerPopup());
            if (!d) {
                __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ba).call(this);
                __classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden = !0;
                c && __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ta).call(this);
            }
        }
        renderCommentButton() { if (__classPrivateFieldGet(this, _PopupElement_ca, "f")) {
            __classPrivateFieldGet(this, _PopupElement_ca, "f").parentNode || __classPrivateFieldGet(this, _PopupElement_ma, "f").container.after(__classPrivateFieldGet(this, _PopupElement_ca, "f"));
            return;
        } __classPrivateFieldGet(this, _PopupElement_da, "f") || __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ya).call(this); if (!__classPrivateFieldGet(this, _PopupElement_da, "f"))
            return; const { signal: t } = __classPrivateFieldSet(this, _PopupElement_ha, new AbortController, "f"), e = __classPrivateFieldGet(this, _PopupElement_ma, "f").hasOwnCommentButton, togglePopup = () => { __classPrivateFieldGet(this, _PopupElement_V, "f").toggleCommentPopup(this, !0, void 0, !e); }, showPopup = () => { __classPrivateFieldGet(this, _PopupElement_V, "f").toggleCommentPopup(this, !1, !0, !e); }, hidePopup = () => { __classPrivateFieldGet(this, _PopupElement_V, "f").toggleCommentPopup(this, !1, !1); }; if (e) {
            __classPrivateFieldSet(this, _PopupElement_ca, __classPrivateFieldGet(this, _PopupElement_ma, "f").container, "f");
            for (const e of this.trigger) {
                e.ariaHasPopup = "dialog";
                e.ariaControls = "commentPopup";
                e.addEventListener("keydown", __classPrivateFieldGet(this, _PopupElement_Xs, "f"), { signal: t });
                e.addEventListener("click", togglePopup, { signal: t });
                e.addEventListener("pointerenter", showPopup, { signal: t });
                e.addEventListener("pointerleave", hidePopup, { signal: t });
                e.classList.add("popupTriggerArea");
            }
        }
        else {
            const e = __classPrivateFieldSet(this, _PopupElement_ca, document.createElement("button"), "f");
            e.className = "annotationCommentButton";
            const i = __classPrivateFieldGet(this, _PopupElement_ma, "f").container;
            e.style.zIndex = i.style.zIndex + 1;
            e.tabIndex = 0;
            e.ariaHasPopup = "dialog";
            e.ariaControls = "commentPopup";
            e.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_va).call(this);
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_wa).call(this);
            e.addEventListener("keydown", __classPrivateFieldGet(this, _PopupElement_Xs, "f"), { signal: t });
            e.addEventListener("click", togglePopup, { signal: t });
            e.addEventListener("pointerenter", showPopup, { signal: t });
            e.addEventListener("pointerleave", hidePopup, { signal: t });
            i.after(e);
        } }
        get commentButtonColor() { const { color: t, opacity: e } = __classPrivateFieldGet(this, _PopupElement_ma, "f").commentData; return t ? __classPrivateFieldGet(this, _PopupElement_sa, "f")._commentManager.makeCommentColor(t, e) : null; }
        focusCommentButton() { setTimeout(() => { var _a; (_a = __classPrivateFieldGet(this, _PopupElement_ca, "f")) === null || _a === void 0 ? void 0 : _a.focus(); }, 0); }
        getData() { const { richText: t, color: e, opacity: i, creationDate: n, modificationDate: r } = __classPrivateFieldGet(this, _PopupElement_ma, "f").commentData; return { contentsObj: { str: this.comment }, richText: t, color: e, opacity: i, creationDate: n, modificationDate: r }; }
        get elementBeforePopup() { return __classPrivateFieldGet(this, _PopupElement_ca, "f"); }
        get comment() { __classPrivateFieldSet(this, _PopupElement_fa, __classPrivateFieldGet(this, _PopupElement_fa, "f") || __classPrivateFieldGet(this, _PopupElement_ma, "f").commentText, "f"); return __classPrivateFieldGet(this, _PopupElement_fa, "f"); }
        set comment(t) { t !== this.comment && (__classPrivateFieldGet(this, _PopupElement_ma, "f").commentText = __classPrivateFieldSet(this, _PopupElement_fa, t, "f")); }
        focus() { var _a; (_a = __classPrivateFieldGet(this, _PopupElement_ma, "f").container) === null || _a === void 0 ? void 0 : _a.focus(); }
        get parentBoundingClientRect() { return __classPrivateFieldGet(this, _PopupElement_ma, "f").layer.getBoundingClientRect(); }
        setCommentButtonStates({ selected: t, hasPopup: e }) { if (__classPrivateFieldGet(this, _PopupElement_ca, "f")) {
            __classPrivateFieldGet(this, _PopupElement_ca, "f").classList.toggle("selected", t);
            __classPrivateFieldGet(this, _PopupElement_ca, "f").ariaExpanded = e;
        } }
        setSelectedCommentButton(t) { __classPrivateFieldGet(this, _PopupElement_ca, "f").classList.toggle("selected", t); }
        get commentPopupPosition() { if (__classPrivateFieldGet(this, _PopupElement_we, "f"))
            return __classPrivateFieldGet(this, _PopupElement_we, "f"); const { x: t, y: e, height: i } = __classPrivateFieldGet(this, _PopupElement_ca, "f").getBoundingClientRect(), { x: n, y: r, width: s, height: a } = __classPrivateFieldGet(this, _PopupElement_ma, "f").layer.getBoundingClientRect(); return [(t - n) / s, (e + i - r) / a]; }
        set commentPopupPosition(t) { __classPrivateFieldSet(this, _PopupElement_we, t, "f"); }
        hasDefaultPopupPosition() { return null === __classPrivateFieldGet(this, _PopupElement_we, "f"); }
        get commentButtonPosition() { return __classPrivateFieldGet(this, _PopupElement_da, "f"); }
        get commentButtonWidth() { return __classPrivateFieldGet(this, _PopupElement_ca, "f").getBoundingClientRect().width / this.parentBoundingClientRect.width; }
        editComment(t) { const [e, i] = __classPrivateFieldGet(this, _PopupElement_we, "f") || this.commentButtonPosition.map(t => t / 100), n = this.parentBoundingClientRect, { x: r, y: s, width: a, height: o } = n; __classPrivateFieldGet(this, _PopupElement_V, "f").showDialog(null, this, r + e * a, s + i * o, Object.assign(Object.assign({}, t), { parentDimensions: n })); }
        render() { var _a, _5; if (__classPrivateFieldGet(this, _PopupElement_la, "f"))
            return; const t = __classPrivateFieldSet(this, _PopupElement_la, document.createElement("div"), "f"); t.className = "popup"; if (__classPrivateFieldGet(this, _PopupElement_ea, "f")) {
            const e = t.style.outlineColor = Util.makeHexColor(...__classPrivateFieldGet(this, _PopupElement_ea, "f"));
            t.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
        } const e = document.createElement("span"); e.className = "header"; if ((_a = __classPrivateFieldGet(this, _PopupElement_pa, "f")) === null || _a === void 0 ? void 0 : _a.str) {
            const t = document.createElement("span");
            t.className = "title";
            e.append(t);
            ({ dir: t.dir, str: t.textContent } = __classPrivateFieldGet(this, _PopupElement_pa, "f"));
        } t.append(e); if (__classPrivateFieldGet(this, _PopupElement_na, "f")) {
            const t = document.createElement("time");
            t.className = "popupDate";
            t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
            t.setAttribute("data-l10n-args", JSON.stringify({ dateObj: __classPrivateFieldGet(this, _PopupElement_na, "f").valueOf() }));
            t.dateTime = __classPrivateFieldGet(this, _PopupElement_na, "f").toISOString();
            e.append(t);
        } renderRichText({ html: __classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_Aa_get) || __classPrivateFieldGet(this, _PopupElement_ia, "f").str, dir: (_5 = __classPrivateFieldGet(this, _PopupElement_ia, "f")) === null || _5 === void 0 ? void 0 : _5.dir, className: "popupContent" }, t); __classPrivateFieldGet(this, _PopupElement_Ct, "f").append(t); }
        updateEdited({ rect: t, popup: e, deleted: i }) { var _a; if (__classPrivateFieldGet(this, _PopupElement_V, "f")) {
            if (i) {
                this.remove();
                __classPrivateFieldSet(this, _PopupElement_fa, null, "f");
            }
            else if (e)
                if (e.deleted)
                    this.remove();
                else {
                    __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_va).call(this);
                    __classPrivateFieldSet(this, _PopupElement_fa, e.text, "f");
                }
            if (t) {
                __classPrivateFieldSet(this, _PopupElement_da, null, "f");
                __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ya).call(this);
                __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_wa).call(this);
            }
        }
        else if (i || (e === null || e === void 0 ? void 0 : e.deleted))
            this.remove();
        else {
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ba).call(this);
            __classPrivateFieldSet(this, _PopupElement_Hs, __classPrivateFieldGet(this, _PopupElement_Hs, "f") || { contentsObj: __classPrivateFieldGet(this, _PopupElement_ia, "f"), richText: __classPrivateFieldGet(this, _PopupElement_fe, "f") }, "f");
            t && (__classPrivateFieldSet(this, _PopupElement_F, null, "f"));
            if (e && e.text) {
                __classPrivateFieldSet(this, _PopupElement_fe, __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement__a).call(this, e.text), "f");
                __classPrivateFieldSet(this, _PopupElement_na, PDFDateString.toDateObject(e.date), "f");
                __classPrivateFieldSet(this, _PopupElement_ia, null, "f");
            }
            (_a = __classPrivateFieldGet(this, _PopupElement_la, "f")) === null || _a === void 0 ? void 0 : _a.remove();
            __classPrivateFieldSet(this, _PopupElement_la, null, "f");
        } }
        resetEdited() { var _a; var _5, _6; if (__classPrivateFieldGet(this, _PopupElement_Hs, "f")) {
            (_5 = this, _6 = this, { contentsObj: ({ set value(_a) { __classPrivateFieldSet(_5, _PopupElement_ia, _a, "f"); } }).value, richText: ({ set value(_a) { __classPrivateFieldSet(_6, _PopupElement_fe, _a, "f"); } }).value } = __classPrivateFieldGet(this, _PopupElement_Hs, "f"));
            __classPrivateFieldSet(this, _PopupElement_Hs, null, "f");
            (_a = __classPrivateFieldGet(this, _PopupElement_la, "f")) === null || _a === void 0 ? void 0 : _a.remove();
            __classPrivateFieldSet(this, _PopupElement_la, null, "f");
            __classPrivateFieldSet(this, _PopupElement_F, null, "f");
        } }
        remove() { var _a, _5, _6; (_a = __classPrivateFieldGet(this, _PopupElement_ha, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _PopupElement_ha, null, "f"); (_5 = __classPrivateFieldGet(this, _PopupElement_la, "f")) === null || _5 === void 0 ? void 0 : _5.remove(); __classPrivateFieldSet(this, _PopupElement_la, null, "f"); __classPrivateFieldSet(this, _PopupElement_ga, !1, "f"); __classPrivateFieldSet(this, _PopupElement_oa, !1, "f"); (_6 = __classPrivateFieldGet(this, _PopupElement_ca, "f")) === null || _6 === void 0 ? void 0 : _6.remove(); __classPrivateFieldSet(this, _PopupElement_ca, null, "f"); if (this.trigger)
            for (const t of this.trigger)
                t.classList.remove("popupTriggerArea"); }
        forceHide() { __classPrivateFieldSet(this, _PopupElement_ga, this.isVisible, "f"); __classPrivateFieldGet(this, _PopupElement_ga, "f") && (__classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden = !0); }
        maybeShow() { if (!__classPrivateFieldGet(this, _PopupElement_V, "f")) {
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ba).call(this);
            if (__classPrivateFieldGet(this, _PopupElement_ga, "f")) {
                __classPrivateFieldGet(this, _PopupElement_la, "f") || __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Qs).call(this);
                __classPrivateFieldSet(this, _PopupElement_ga, !1, "f");
                __classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden = !1;
            }
        } }
        get isVisible() { return !__classPrivateFieldGet(this, _PopupElement_V, "f") && !1 === __classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden; }
    }
    _PopupElement_V = new WeakMap(), _PopupElement_Xs = new WeakMap(), _PopupElement_Ys = new WeakMap(), _PopupElement_Js = new WeakMap(), _PopupElement_Zs = new WeakMap(), _PopupElement_ea = new WeakMap(), _PopupElement_Ct = new WeakMap(), _PopupElement_ia = new WeakMap(), _PopupElement_na = new WeakMap(), _PopupElement_ra = new WeakMap(), _PopupElement_sa = new WeakMap(), _PopupElement_aa = new WeakMap(), _PopupElement_oa = new WeakMap(), _PopupElement_la = new WeakMap(), _PopupElement_ha = new WeakMap(), _PopupElement_F = new WeakMap(), _PopupElement_ca = new WeakMap(), _PopupElement_da = new WeakMap(), _PopupElement_we = new WeakMap(), _PopupElement_ua = new WeakMap(), _PopupElement_fe = new WeakMap(), _PopupElement_pa = new WeakMap(), _PopupElement_Hs = new WeakMap(), _PopupElement_ga = new WeakMap(), _PopupElement_ma = new WeakMap(), _PopupElement_fa = new WeakMap(), _PopupElement_instances = new WeakSet(), _PopupElement_ba = function _PopupElement_ba() { var _a; if (__classPrivateFieldGet(this, _PopupElement_ha, "f"))
        return; __classPrivateFieldSet(this, _PopupElement_ha, new AbortController, "f"); const { signal: t } = __classPrivateFieldGet(this, _PopupElement_ha, "f"); for (const e of this.trigger) {
        e.addEventListener("click", __classPrivateFieldGet(this, _PopupElement_Zs, "f"), { signal: t });
        e.addEventListener("pointerenter", __classPrivateFieldGet(this, _PopupElement_Js, "f"), { signal: t });
        e.addEventListener("pointerleave", __classPrivateFieldGet(this, _PopupElement_Ys, "f"), { signal: t });
        e.classList.add("popupTriggerArea");
    } for (const e of __classPrivateFieldGet(this, _PopupElement_ra, "f"))
        (_a = e.container) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", __classPrivateFieldGet(this, _PopupElement_Xs, "f"), { signal: t }); }, _PopupElement_ya = function _PopupElement_ya() { const t = __classPrivateFieldGet(this, _PopupElement_ra, "f").find(t => t.hasCommentButton); t && (__classPrivateFieldSet(this, _PopupElement_da, t._normalizePoint(t.commentButtonPosition), "f")); }, _PopupElement_wa = function _PopupElement_wa() { if (__classPrivateFieldGet(this, _PopupElement_ma, "f").extraPopupElement && !__classPrivateFieldGet(this, _PopupElement_ma, "f").editor)
        return; __classPrivateFieldGet(this, _PopupElement_ca, "f") || this.renderCommentButton(); const [t, e] = __classPrivateFieldGet(this, _PopupElement_da, "f"), { style: i } = __classPrivateFieldGet(this, _PopupElement_ca, "f"); i.left = `calc(${t}%)`; i.top = `calc(${e}% - var(--comment-button-dim))`; }, _PopupElement_va = function _PopupElement_va() { if (!__classPrivateFieldGet(this, _PopupElement_ma, "f").extraPopupElement) {
        __classPrivateFieldGet(this, _PopupElement_ca, "f") || this.renderCommentButton();
        __classPrivateFieldGet(this, _PopupElement_ca, "f").style.backgroundColor = this.commentButtonColor || "";
    } }, _PopupElement_Aa_get = function _PopupElement_Aa_get() { const t = __classPrivateFieldGet(this, _PopupElement_fe, "f"), e = __classPrivateFieldGet(this, _PopupElement_ia, "f"); return !(t === null || t === void 0 ? void 0 : t.str) || (e === null || e === void 0 ? void 0 : e.str) && e.str !== t.str ? null : __classPrivateFieldGet(this, _PopupElement_fe, "f").html || null; }, _PopupElement_xa_get = function _PopupElement_xa_get() { var _a, _5, _6; return ((_6 = (_5 = (_a = __classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_Aa_get)) === null || _a === void 0 ? void 0 : _a.attributes) === null || _5 === void 0 ? void 0 : _5.style) === null || _6 === void 0 ? void 0 : _6.fontSize) || 0; }, _PopupElement_Ea_get = function _PopupElement_Ea_get() { var _a, _5, _6; return ((_6 = (_5 = (_a = __classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_Aa_get)) === null || _a === void 0 ? void 0 : _a.attributes) === null || _5 === void 0 ? void 0 : _5.style) === null || _6 === void 0 ? void 0 : _6.color) || null; }, _PopupElement__a = function _PopupElement__a(t) { const e = [], i = { str: t, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e }] } }, n = { style: { color: __classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_Ea_get), fontSize: __classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_xa_get) ? `calc(${__classPrivateFieldGet(this, _PopupElement_instances, "a", _PopupElement_xa_get)}px * var(--total-scale-factor))` : "" } }; for (const i of t.split("\n"))
        e.push({ name: "span", value: i, attributes: n }); return i; }, _PopupElement_Bs = function _PopupElement_Bs(t) { t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || ("Enter" === t.key || "Escape" === t.key && __classPrivateFieldGet(this, _PopupElement_oa, "f")) && __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_ta).call(this); }, _PopupElement_Ta = function _PopupElement_Ta() { if (null !== __classPrivateFieldGet(this, _PopupElement_F, "f"))
        return; const { page: { view: t }, viewport: { rawDims: { pageWidth: e, pageHeight: i, pageX: n, pageY: r } } } = __classPrivateFieldGet(this, _PopupElement_sa, "f"); let s = !!__classPrivateFieldGet(this, _PopupElement_aa, "f"), a = s ? __classPrivateFieldGet(this, _PopupElement_aa, "f") : __classPrivateFieldGet(this, _PopupElement_ua, "f"); for (const t of __classPrivateFieldGet(this, _PopupElement_ra, "f"))
        if (!a || null !== Util.intersect(t.data.rect, a)) {
            a = t.data.rect;
            s = !0;
            break;
        } const o = Util.normalizeRect([a[0], t[3] - a[1] + t[1], a[2], t[3] - a[3] + t[1]]), l = s ? a[2] - a[0] + 5 : 0, h = o[0] + l, c = o[1]; __classPrivateFieldSet(this, _PopupElement_F, [100 * (h - n) / e, 100 * (c - r) / i], "f"); const { style: d } = __classPrivateFieldGet(this, _PopupElement_Ct, "f"); d.left = `${__classPrivateFieldGet(this, _PopupElement_F, "f")[0]}%`; d.top = `${__classPrivateFieldGet(this, _PopupElement_F, "f")[1]}%`; }, _PopupElement_ta = function _PopupElement_ta() { if (__classPrivateFieldGet(this, _PopupElement_V, "f"))
        __classPrivateFieldGet(this, _PopupElement_V, "f").toggleCommentPopup(this, !1);
    else {
        __classPrivateFieldSet(this, _PopupElement_oa, !__classPrivateFieldGet(this, _PopupElement_oa, "f"), "f");
        if (__classPrivateFieldGet(this, _PopupElement_oa, "f")) {
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Qs).call(this);
            __classPrivateFieldGet(this, _PopupElement_Ct, "f").addEventListener("click", __classPrivateFieldGet(this, _PopupElement_Zs, "f"));
            __classPrivateFieldGet(this, _PopupElement_Ct, "f").addEventListener("keydown", __classPrivateFieldGet(this, _PopupElement_Xs, "f"));
        }
        else {
            __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Ks).call(this);
            __classPrivateFieldGet(this, _PopupElement_Ct, "f").removeEventListener("click", __classPrivateFieldGet(this, _PopupElement_Zs, "f"));
            __classPrivateFieldGet(this, _PopupElement_Ct, "f").removeEventListener("keydown", __classPrivateFieldGet(this, _PopupElement_Xs, "f"));
        }
    } }, _PopupElement_Qs = function _PopupElement_Qs() { __classPrivateFieldGet(this, _PopupElement_la, "f") || this.render(); if (this.isVisible)
        __classPrivateFieldGet(this, _PopupElement_oa, "f") && __classPrivateFieldGet(this, _PopupElement_Ct, "f").classList.add("focused");
    else {
        __classPrivateFieldGet(this, _PopupElement_instances, "m", _PopupElement_Ta).call(this);
        __classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden = !1;
        __classPrivateFieldGet(this, _PopupElement_Ct, "f").style.zIndex = parseInt(__classPrivateFieldGet(this, _PopupElement_Ct, "f").style.zIndex) + 1e3;
    } }, _PopupElement_Ks = function _PopupElement_Ks() { __classPrivateFieldGet(this, _PopupElement_Ct, "f").classList.remove("focused"); if (!__classPrivateFieldGet(this, _PopupElement_oa, "f") && this.isVisible) {
        __classPrivateFieldGet(this, _PopupElement_Ct, "f").hidden = !0;
        __classPrivateFieldGet(this, _PopupElement_Ct, "f").style.zIndex = parseInt(__classPrivateFieldGet(this, _PopupElement_Ct, "f").style.zIndex) - 1e3;
    } };
    class FreeTextAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0 }); this.textContent = t.data.textContent; this.textPosition = t.data.textPosition; this.annotationEditorType = m.FREETEXT; }
        render() { this.container.classList.add("freeTextAnnotation"); if (this.textContent) {
            const t = this.contentElement = document.createElement("div");
            t.classList.add("annotationTextContent");
            t.setAttribute("role", "comment");
            for (const e of this.textContent) {
                const i = document.createElement("span");
                i.textContent = e;
                t.append(i);
            }
            this.container.append(t);
        } if (!this.data.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this._editOnDoubleClick(); return this.container; }
    }
    class LineAnnotationElement extends AnnotationElement {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
            _LineAnnotationElement_Sa.set(this, null);
        }
        render() { this.container.classList.add("lineAnnotation"); const { data: t, width: e, height: i } = this, n = this.svgFactory.create(e, i, !0), r = __classPrivateFieldSet(this, _LineAnnotationElement_Sa, this.svgFactory.createElement("svg:line"), "f"); r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]); r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]); r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]); r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]); r.setAttribute("stroke-width", t.borderStyle.width || 1); r.setAttribute("stroke", "transparent"); r.setAttribute("fill", "transparent"); n.append(r); this.container.append(n); if (!t.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } return this.container; }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _LineAnnotationElement_Sa, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _LineAnnotationElement_Sa = new WeakMap();
    class SquareAnnotationElement extends AnnotationElement {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
            _SquareAnnotationElement_Ca.set(this, null);
        }
        render() { this.container.classList.add("squareAnnotation"); const { data: t, width: e, height: i } = this, n = this.svgFactory.create(e, i, !0), r = t.borderStyle.width, s = __classPrivateFieldSet(this, _SquareAnnotationElement_Ca, this.svgFactory.createElement("svg:rect"), "f"); s.setAttribute("x", r / 2); s.setAttribute("y", r / 2); s.setAttribute("width", e - r); s.setAttribute("height", i - r); s.setAttribute("stroke-width", r || 1); s.setAttribute("stroke", "transparent"); s.setAttribute("fill", "transparent"); n.append(s); this.container.append(n); if (!t.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } return this.container; }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _SquareAnnotationElement_Ca, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _SquareAnnotationElement_Ca = new WeakMap();
    class CircleAnnotationElement extends AnnotationElement {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
            _CircleAnnotationElement_Da.set(this, null);
        }
        render() { this.container.classList.add("circleAnnotation"); const { data: t, width: e, height: i } = this, n = this.svgFactory.create(e, i, !0), r = t.borderStyle.width, s = __classPrivateFieldSet(this, _CircleAnnotationElement_Da, this.svgFactory.createElement("svg:ellipse"), "f"); s.setAttribute("cx", e / 2); s.setAttribute("cy", i / 2); s.setAttribute("rx", e / 2 - r / 2); s.setAttribute("ry", i / 2 - r / 2); s.setAttribute("stroke-width", r || 1); s.setAttribute("stroke", "transparent"); s.setAttribute("fill", "transparent"); n.append(s); this.container.append(n); if (!t.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } return this.container; }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _CircleAnnotationElement_Da, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _CircleAnnotationElement_Da = new WeakMap();
    class PolylineAnnotationElement extends AnnotationElement {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
            _PolylineAnnotationElement_Pa.set(this, null);
            this.containerClassName = "polylineAnnotation";
            this.svgElementName = "svg:polyline";
        }
        render() { this.container.classList.add(this.containerClassName); const { data: { rect: t, vertices: e, borderStyle: i, popupRef: n }, width: r, height: s } = this; if (!e)
            return this.container; const a = this.svgFactory.create(r, s, !0); let o = []; for (let i = 0, n = e.length; i < n; i += 2) {
            const n = e[i] - t[0], r = t[3] - e[i + 1];
            o.push(`${n},${r}`);
        } o = o.join(" "); const l = __classPrivateFieldSet(this, _PolylineAnnotationElement_Pa, this.svgFactory.createElement(this.svgElementName), "f"); l.setAttribute("points", o); l.setAttribute("stroke-width", i.width || 1); l.setAttribute("stroke", "transparent"); l.setAttribute("fill", "transparent"); a.append(l); this.container.append(a); if (!n && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } return this.container; }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _PolylineAnnotationElement_Pa, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _PolylineAnnotationElement_Pa = new WeakMap();
    class PolygonAnnotationElement extends PolylineAnnotationElement {
        constructor(t) { super(t); this.containerClassName = "polygonAnnotation"; this.svgElementName = "svg:polygon"; }
    }
    class CaretAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0 }); }
        render() { this.container.classList.add("caretAnnotation"); if (!this.data.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } return this.container; }
    }
    class InkAnnotationElement extends AnnotationElement {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
            _InkAnnotationElement_instances.add(this);
            _InkAnnotationElement_Ma.set(this, null);
            _InkAnnotationElement_ka.set(this, []);
            this.containerClassName = "inkAnnotation";
            this.svgElementName = "svg:polyline";
            this.annotationEditorType = "InkHighlight" === this.data.it ? m.HIGHLIGHT : m.INK;
        }
        render() { this.container.classList.add(this.containerClassName); const { data: { rect: t, rotation: e, inkLists: i, borderStyle: n, popupRef: r } } = this, { transform: s, width: a, height: o } = __classPrivateFieldGet(this, _InkAnnotationElement_instances, "m", _InkAnnotationElement_Ia).call(this, e, t), l = this.svgFactory.create(a, o, !0), h = __classPrivateFieldSet(this, _InkAnnotationElement_Ma, this.svgFactory.createElement("svg:g"), "f"); l.append(h); h.setAttribute("stroke-width", n.width || 1); h.setAttribute("stroke-linecap", "round"); h.setAttribute("stroke-linejoin", "round"); h.setAttribute("stroke-miterlimit", 10); h.setAttribute("stroke", "transparent"); h.setAttribute("fill", "transparent"); h.setAttribute("transform", s); for (let t = 0, e = i.length; t < e; t++) {
            const e = this.svgFactory.createElement(this.svgElementName);
            __classPrivateFieldGet(this, _InkAnnotationElement_ka, "f").push(e);
            e.setAttribute("points", i[t].join(","));
            h.append(e);
        } if (!r && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.append(l); this._editOnDoubleClick(); return this.container; }
        updateEdited(t) { super.updateEdited(t); const { thickness: e, points: i, rect: n } = t, r = __classPrivateFieldGet(this, _InkAnnotationElement_Ma, "f"); e >= 0 && r.setAttribute("stroke-width", e || 1); if (i)
            for (let t = 0, e = __classPrivateFieldGet(this, _InkAnnotationElement_ka, "f").length; t < e; t++)
                __classPrivateFieldGet(this, _InkAnnotationElement_ka, "f")[t].setAttribute("points", i[t].join(",")); if (n) {
            const { transform: t, width: e, height: i } = __classPrivateFieldGet(this, _InkAnnotationElement_instances, "m", _InkAnnotationElement_Ia).call(this, this.data.rotation, n);
            r.parentElement.setAttribute("viewBox", `0 0 ${e} ${i}`);
            r.setAttribute("transform", t);
        } }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _InkAnnotationElement_ka, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _InkAnnotationElement_Ma = new WeakMap(), _InkAnnotationElement_ka = new WeakMap(), _InkAnnotationElement_instances = new WeakSet(), _InkAnnotationElement_Ia = function _InkAnnotationElement_Ia(t, e) { switch (t) {
        case 90: return { transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`, width: e[3] - e[1], height: e[2] - e[0] };
        case 180: return { transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`, width: e[2] - e[0], height: e[3] - e[1] };
        case 270: return { transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`, width: e[3] - e[1], height: e[2] - e[0] };
        default: return { transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`, width: e[2] - e[0], height: e[3] - e[1] };
    } };
    class HighlightAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }); this.annotationEditorType = m.HIGHLIGHT; }
        render() { const { data: { overlaidText: t, popupRef: e } } = this; if (!e && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.classList.add("highlightAnnotation"); this._editOnDoubleClick(); if (t) {
            const e = document.createElement("mark");
            e.classList.add("overlaidText");
            e.textContent = t;
            this.container.append(e);
        } return this.container; }
    }
    class UnderlineAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }); }
        render() { const { data: { overlaidText: t, popupRef: e } } = this; if (!e && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.classList.add("underlineAnnotation"); if (t) {
            const e = document.createElement("u");
            e.classList.add("overlaidText");
            e.textContent = t;
            this.container.append(e);
        } return this.container; }
    }
    class SquigglyAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }); }
        render() { const { data: { overlaidText: t, popupRef: e } } = this; if (!e && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.classList.add("squigglyAnnotation"); if (t) {
            const e = document.createElement("u");
            e.classList.add("overlaidText");
            e.textContent = t;
            this.container.append(e);
        } return this.container; }
    }
    class StrikeOutAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }); }
        render() { const { data: { overlaidText: t, popupRef: e } } = this; if (!e && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this.container.classList.add("strikeoutAnnotation"); if (t) {
            const e = document.createElement("s");
            e.classList.add("overlaidText");
            e.textContent = t;
            this.container.append(e);
        } return this.container; }
    }
    class StampAnnotationElement extends AnnotationElement {
        constructor(t) { super(t, { isRenderable: !0, ignoreBorder: !0 }); this.annotationEditorType = m.STAMP; }
        render() { this.container.classList.add("stampAnnotation"); this.container.setAttribute("role", "img"); if (!this.data.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        } this._editOnDoubleClick(); return this.container; }
    }
    class FileAttachmentAnnotationElement extends AnnotationElement {
        constructor(t) {
            var _a;
            super(t, { isRenderable: !0 });
            _FileAttachmentAnnotationElement_instances.add(this);
            _FileAttachmentAnnotationElement_Fa.set(this, null);
            const { file: e } = this.data;
            this.filename = e.filename;
            this.content = e.content;
            (_a = this.linkService.eventBus) === null || _a === void 0 ? void 0 : _a.dispatch("fileattachmentannotation", Object.assign({ source: this }, e));
        }
        render() { this.container.classList.add("fileAttachmentAnnotation"); const { container: t, data: e } = this; let i; if (e.hasAppearance || 0 === e.fillAlpha)
            i = document.createElement("div");
        else {
            i = document.createElement("img");
            i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`;
            e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(100 * e.fillAlpha)}%);`);
        } i.addEventListener("dblclick", __classPrivateFieldGet(this, _FileAttachmentAnnotationElement_instances, "m", _FileAttachmentAnnotationElement_Ra).bind(this)); __classPrivateFieldSet(this, _FileAttachmentAnnotationElement_Fa, i, "f"); const { isMac: n } = FeatureTest.platform; t.addEventListener("keydown", t => { "Enter" === t.key && (n ? t.metaKey : t.ctrlKey) && __classPrivateFieldGet(this, _FileAttachmentAnnotationElement_instances, "m", _FileAttachmentAnnotationElement_Ra).call(this); }); if (!e.popupRef && this.hasPopupData) {
            this.hasOwnCommentButton = !0;
            this._createPopup();
        }
        else
            i.classList.add("popupTriggerArea"); t.append(i); return t; }
        getElementsToTriggerPopup() { return __classPrivateFieldGet(this, _FileAttachmentAnnotationElement_Fa, "f"); }
        addHighlightArea() { this.container.classList.add("highlightArea"); }
    }
    _FileAttachmentAnnotationElement_Fa = new WeakMap(), _FileAttachmentAnnotationElement_instances = new WeakSet(), _FileAttachmentAnnotationElement_Ra = function _FileAttachmentAnnotationElement_Ra() { var _a; (_a = this.downloadManager) === null || _a === void 0 ? void 0 : _a.openOrDownloadData(this.content, this.filename); };
    class AnnotationLayer {
        constructor({ div: t, accessibilityManager: e, annotationCanvasMap: i, annotationEditorUIManager: n, page: r, viewport: s, structTreeLayer: a, commentManager: o, linkService: l, annotationStorage: h }) {
            _AnnotationLayer_instances.add(this);
            _AnnotationLayer_Ba.set(this, null);
            _AnnotationLayer_Oa.set(this, null);
            _AnnotationLayer_j.set(this, null);
            _AnnotationLayer_La.set(this, new Map);
            _AnnotationLayer_Na.set(this, null);
            _AnnotationLayer_Ua.set(this, null);
            _AnnotationLayer_ra.set(this, []);
            _AnnotationLayer_Ha.set(this, !1);
            this.div = t;
            __classPrivateFieldSet(this, _AnnotationLayer_Ba, e, "f");
            __classPrivateFieldSet(this, _AnnotationLayer_Oa, i, "f");
            __classPrivateFieldSet(this, _AnnotationLayer_Na, a || null, "f");
            __classPrivateFieldSet(this, _AnnotationLayer_Ua, l || null, "f");
            __classPrivateFieldSet(this, _AnnotationLayer_j, h || new AnnotationStorage, "f");
            this.page = r;
            this.viewport = s;
            this.zIndex = 0;
            this._annotationEditorUIManager = n;
            this._commentManager = o || null;
        }
        hasEditableAnnotations() { return __classPrivateFieldGet(this, _AnnotationLayer_La, "f").size > 0; }
        render(t) {
            return __awaiter(this, void 0, void 0, function* () { var _a; const { annotations: e } = t, i = this.div; setLayerDimensions(i, this.viewport); const n = new Map, r = [], s = { data: null, layer: i, linkService: __classPrivateFieldGet(this, _AnnotationLayer_Ua, "f"), downloadManager: t.downloadManager, imageResourcesPath: t.imageResourcesPath || "", renderForms: !1 !== t.renderForms, svgFactory: new DOMSVGFactory, annotationStorage: __classPrivateFieldGet(this, _AnnotationLayer_j, "f"), enableComment: !0 === t.enableComment, enableScripting: !0 === t.enableScripting, hasJSActions: t.hasJSActions, fieldObjects: t.fieldObjects, parent: this, elements: null }; for (const t of e) {
                if (t.noHTML)
                    continue;
                const e = t.annotationType === C.POPUP;
                if (e) {
                    const e = n.get(t.id);
                    if (!e)
                        continue;
                    if (!this._commentManager) {
                        r.push(t);
                        continue;
                    }
                    s.elements = e;
                }
                else if (t.rect[2] === t.rect[0] || t.rect[3] === t.rect[1])
                    continue;
                s.data = t;
                const i = AnnotationElementFactory.create(s);
                if (!i.isRenderable)
                    continue;
                if (!e) {
                    __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").push(i);
                    t.popupRef && n.getOrInsertComputed(t.popupRef, makeArr).push(i);
                }
                const a = i.render();
                t.hidden && (a.style.visibility = "hidden");
                if (i._isEditable) {
                    __classPrivateFieldGet(this, _AnnotationLayer_La, "f").set(i.data.id, i);
                    (_a = this._annotationEditorUIManager) === null || _a === void 0 ? void 0 : _a.renderAnnotationElement(i);
                }
            } yield __classPrivateFieldGet(this, _AnnotationLayer_instances, "m", _AnnotationLayer_za).call(this); for (const t of r) {
                const e = s.elements = n.get(t.id);
                s.data = t;
                const i = AnnotationElementFactory.create(s);
                if (!i.isRenderable)
                    continue;
                const r = i.render();
                i.contentElement.id = `${q}${t.id}`;
                t.hidden && (r.style.visibility = "hidden");
                e.at(-1).container.after(r);
            } __classPrivateFieldGet(this, _AnnotationLayer_instances, "m", _AnnotationLayer_ja).call(this); });
        }
        addLinkAnnotations(t) {
            return __awaiter(this, void 0, void 0, function* () { const e = { data: null, layer: this.div, linkService: __classPrivateFieldGet(this, _AnnotationLayer_Ua, "f"), svgFactory: new DOMSVGFactory, parent: this }; for (const i of t) {
                i.borderStyle || (i.borderStyle = AnnotationLayer._defaultBorderStyle);
                e.data = i;
                const t = AnnotationElementFactory.create(e);
                if (t.isRenderable) {
                    t.render();
                    t.contentElement.id = `${q}${i.id}`;
                    __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").push(t);
                }
            } yield __classPrivateFieldGet(this, _AnnotationLayer_instances, "m", _AnnotationLayer_za).call(this); });
        }
        update({ viewport: t }) { const e = this.div; this.viewport = t; setLayerDimensions(e, { rotation: t.rotation }); __classPrivateFieldGet(this, _AnnotationLayer_instances, "m", _AnnotationLayer_ja).call(this); e.hidden = !1; }
        getEditableAnnotations() { return __classPrivateFieldGet(this, _AnnotationLayer_La, "f").values(); }
        getEditableAnnotation(t) { return __classPrivateFieldGet(this, _AnnotationLayer_La, "f").get(t); }
        addFakeAnnotation(t) { const { div: e } = this, { id: i, rotation: n } = t, r = new EditorAnnotationElement({ data: { id: i, rect: t.getPDFRect(), rotation: n }, editor: t, layer: e, parent: this, enableComment: !!this._commentManager, linkService: __classPrivateFieldGet(this, _AnnotationLayer_Ua, "f"), annotationStorage: __classPrivateFieldGet(this, _AnnotationLayer_j, "f") }); r.render(); r.contentElement.id = `${q}${i}`; r.createOrUpdatePopup(); __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").push(r); return r; }
        removeAnnotation(t) { var _a; const e = __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").findIndex(e => e.data.id === t); if (e < 0)
            return; const [i] = __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").splice(e, 1); (_a = __classPrivateFieldGet(this, _AnnotationLayer_Ba, "f")) === null || _a === void 0 ? void 0 : _a.removePointerInTextLayer(i.contentElement); }
        updateFakeAnnotations(t) { if (0 !== t.length) {
            for (const e of t)
                e.updateFakeAnnotationElement(this);
            __classPrivateFieldGet(this, _AnnotationLayer_instances, "m", _AnnotationLayer_za).call(this);
        } }
        togglePointerEvents(t = !1) { this.div.classList.toggle("disabled", !t); }
        static get _defaultBorderStyle() { return shadow(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: D, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 })); }
    }
    _AnnotationLayer_Ba = new WeakMap(), _AnnotationLayer_Oa = new WeakMap(), _AnnotationLayer_j = new WeakMap(), _AnnotationLayer_La = new WeakMap(), _AnnotationLayer_Na = new WeakMap(), _AnnotationLayer_Ua = new WeakMap(), _AnnotationLayer_ra = new WeakMap(), _AnnotationLayer_Ha = new WeakMap(), _AnnotationLayer_instances = new WeakSet(), _AnnotationLayer_za = function _AnnotationLayer_za() {
        return __awaiter(this, void 0, void 0, function* () { var _a, _5, _6; if (0 === __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").length)
            return; this.div.replaceChildren(); const t = []; if (!__classPrivateFieldGet(this, _AnnotationLayer_Ha, "f")) {
            __classPrivateFieldSet(this, _AnnotationLayer_Ha, !0, "f");
            for (const { contentElement: e, data: { id: i } } of __classPrivateFieldGet(this, _AnnotationLayer_ra, "f")) {
                const n = e.id = `${q}${i}`;
                t.push((_a = __classPrivateFieldGet(this, _AnnotationLayer_Na, "f")) === null || _a === void 0 ? void 0 : _a.getAriaAttributes(n).then(t => { if (t)
                    for (const [i, n] of t)
                        e.setAttribute(i, n); }));
            }
        } __classPrivateFieldGet(this, _AnnotationLayer_ra, "f").sort(({ data: { rect: [t, e, i, n] } }, { data: { rect: [r, s, a, o] } }) => { if (t === i && e === n)
            return 1; if (r === a && s === o)
            return -1; const l = (e + n) / 2, h = (s + o) / 2; if (l >= o && h <= e)
            return -1; if (h >= n && l <= s)
            return 1; return (t + i) / 2 - (r + a) / 2; }); const e = document.createDocumentFragment(); for (const t of __classPrivateFieldGet(this, _AnnotationLayer_ra, "f")) {
            e.append(t.container);
            this._commentManager ? (_6 = (((_5 = t.extraPopupElement) === null || _5 === void 0 ? void 0 : _5.popup) || t.popup)) === null || _6 === void 0 ? void 0 : _6.renderCommentButton() : t.extraPopupElement && e.append(t.extraPopupElement.render());
        } this.div.append(e); yield Promise.all(t); if (__classPrivateFieldGet(this, _AnnotationLayer_Ba, "f"))
            for (const t of __classPrivateFieldGet(this, _AnnotationLayer_ra, "f"))
                __classPrivateFieldGet(this, _AnnotationLayer_Ba, "f").addPointerInTextLayer(t.contentElement, !1); });
    }, _AnnotationLayer_ja = function _AnnotationLayer_ja() { var _a; if (!__classPrivateFieldGet(this, _AnnotationLayer_Oa, "f"))
        return; const t = this.div; for (const [e, i] of __classPrivateFieldGet(this, _AnnotationLayer_Oa, "f")) {
        const n = t.querySelector(`[data-annotation-id="${e}"]`);
        if (!n)
            continue;
        i.className = "annotationContent";
        const { firstChild: r } = n;
        r ? "CANVAS" === r.nodeName ? r.replaceWith(i) : r.classList.contains("annotationContent") ? r.after(i) : r.before(i) : n.append(i);
        const s = __classPrivateFieldGet(this, _AnnotationLayer_La, "f").get(e);
        if (s)
            if (s._hasNoCanvas) {
                (_a = this._annotationEditorUIManager) === null || _a === void 0 ? void 0 : _a.setMissingCanvas(e, n.id, i);
                s._hasNoCanvas = !1;
            }
            else
                s.canvas = i;
    } __classPrivateFieldGet(this, _AnnotationLayer_Oa, "f").clear(); };
    const Wt = /\r\n?|\n/g;
    class FreeTextEditor extends AnnotationEditor {
        static get _keyboardManager() { const t = _x.prototype, arrowChecker = t => t.isEmpty(), e = AnnotationEditorUIManager.TRANSLATE_SMALL, i = AnnotationEditorUIManager.TRANSLATE_BIG; return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, { bubbles: !0 }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, { args: [-e, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, { args: [-i, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, { args: [e, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, { args: [i, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, { args: [0, -e], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, { args: [0, -i], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, { args: [0, e], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, { args: [0, i], checker: arrowChecker }]])); }
        constructor(t) {
            super(Object.assign(Object.assign({}, t), { name: "freeTextEditor" }));
            _FreeTextEditor_instances.add(this);
            _FreeTextEditor_Ga.set(this, "");
            _FreeTextEditor_Wa.set(this, `${this.id}-editor`);
            _FreeTextEditor_Va.set(this, null);
            _FreeTextEditor_xa.set(this, void 0);
            this._colorPicker = null;
            this.color = t.color || _x._defaultColor || AnnotationEditor._defaultLineColor;
            __classPrivateFieldSet(this, _FreeTextEditor_xa, t.fontSize || _x._defaultFontSize, "f");
            this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
            this.canAddComment = !1;
        }
        static initialize(t, e) { AnnotationEditor.initialize(t, e); const i = getComputedStyle(document.documentElement); this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding")); }
        static updateDefaultParams(t, e) { switch (t) {
            case f.FREETEXT_SIZE:
                _x._defaultFontSize = e;
                break;
            case f.FREETEXT_COLOR: _x._defaultColor = e;
        } }
        updateParams(t, e) { switch (t) {
            case f.FREETEXT_SIZE:
                __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_$a).call(this, e);
                break;
            case f.FREETEXT_COLOR: __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_va).call(this, e);
        } }
        static get defaultPropertiesToUpdate() { return [[f.FREETEXT_SIZE, _x._defaultFontSize], [f.FREETEXT_COLOR, _x._defaultColor || AnnotationEditor._defaultLineColor]]; }
        get propertiesToUpdate() { return [[f.FREETEXT_SIZE, __classPrivateFieldGet(this, _FreeTextEditor_xa, "f")], [f.FREETEXT_COLOR, this.color]]; }
        get toolbarButtons() { this._colorPicker || (this._colorPicker = new BasicColorPicker(this)); return [["colorPicker", this._colorPicker]]; }
        get colorType() { return f.FREETEXT_COLOR; }
        onUpdatedColor() { var _a; this.editorDiv.style.color = this.color; (_a = this._colorPicker) === null || _a === void 0 ? void 0 : _a.update(this.color); super.onUpdatedColor(); }
        _translateEmpty(t, e) { this._uiManager.translateSelectedEditors(t, e, !0); }
        getInitialTranslation() { const t = this.parentScale; return [-_x._internalPadding * t, -(_x._internalPadding + __classPrivateFieldGet(this, _FreeTextEditor_xa, "f")) * t]; }
        rebuild() { if (this.parent) {
            super.rebuild();
            null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
        } }
        enableEditMode() { if (!super.enableEditMode())
            return !1; this.overlayDiv.classList.remove("enabled"); this.editorDiv.contentEditable = !0; this._isDraggable = !1; this.div.removeAttribute("aria-activedescendant"); __classPrivateFieldSet(this, _FreeTextEditor_Va, new AbortController, "f"); const t = this._uiManager.combinedSignal(__classPrivateFieldGet(this, _FreeTextEditor_Va, "f")); this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t }); this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t }); this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t }); this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t }); this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t }); return !0; }
        disableEditMode() { var _a; if (!super.disableEditMode())
            return !1; this.overlayDiv.classList.add("enabled"); this.editorDiv.contentEditable = !1; this.div.setAttribute("aria-activedescendant", __classPrivateFieldGet(this, _FreeTextEditor_Wa, "f")); this._isDraggable = !0; (_a = __classPrivateFieldGet(this, _FreeTextEditor_Va, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _FreeTextEditor_Va, null, "f"); this.div.focus({ preventScroll: !0 }); this.isEditing = !1; this.parent.div.classList.add("freetextEditing"); return !0; }
        focusin(t) { if (this._focusEventsAllowed) {
            super.focusin(t);
            t.target !== this.editorDiv && this.editorDiv.focus();
        } }
        onceAdded(t) { var _a; if (!this.width) {
            this.enableEditMode();
            t && this.editorDiv.focus();
            ((_a = this._initialOptions) === null || _a === void 0 ? void 0 : _a.isCentered) && this.center();
            this._initialOptions = null;
        } }
        isEmpty() { return !this.editorDiv || "" === this.editorDiv.innerText.trim(); }
        remove() { this.isEditing = !1; if (this.parent) {
            this.parent.setEditingState(!0);
            this.parent.div.classList.add("freetextEditing");
        } super.remove(); }
        commit() { if (!this.isInEditMode())
            return; super.commit(); this.disableEditMode(); const t = __classPrivateFieldGet(this, _FreeTextEditor_Ga, "f"), e = __classPrivateFieldSet(this, _FreeTextEditor_Ga, __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Xa).call(this).trimEnd(), "f"); if (t === e)
            return; const setText = t => { __classPrivateFieldSet(this, _FreeTextEditor_Ga, t, "f"); if (t) {
            __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Ka).call(this);
            this._uiManager.rebuild(this);
            __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_qa).call(this);
        }
        else
            this.remove(); }; this.addCommands({ cmd: () => { setText(e); }, undo: () => { setText(t); }, mustExec: !1 }); __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_qa).call(this); }
        shouldGetKeyboardEvents() { return this.isInEditMode(); }
        enterInEditMode() { this.enableEditMode(); this.editorDiv.focus(); }
        keydown(t) { if (t.target === this.div && "Enter" === t.key) {
            this.enterInEditMode();
            t.preventDefault();
        } }
        editorDivKeydown(t) { _x._keyboardManager.exec(this, t); }
        editorDivFocus(t) { this.isEditing = !0; }
        editorDivBlur(t) { this.isEditing = !1; }
        editorDivInput(t) { this.parent.div.classList.toggle("freetextEditing", this.isEmpty()); }
        disableEditing() { this.editorDiv.setAttribute("role", "comment"); this.editorDiv.removeAttribute("aria-multiline"); }
        enableEditing() { this.editorDiv.setAttribute("role", "textbox"); this.editorDiv.setAttribute("aria-multiline", !0); }
        get canChangeContent() { return !0; }
        render() { if (this.div)
            return this.div; let t, e; if (this._isCopy || this.annotationElementId) {
            t = this.x;
            e = this.y;
        } super.render(); this.editorDiv = document.createElement("div"); this.editorDiv.className = "internal"; this.editorDiv.setAttribute("id", __classPrivateFieldGet(this, _FreeTextEditor_Wa, "f")); this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"); this.editorDiv.setAttribute("data-l10n-attrs", "default-content"); this.enableEditing(); this.editorDiv.contentEditable = !0; const { style: i } = this.editorDiv; i.fontSize = `calc(${__classPrivateFieldGet(this, _FreeTextEditor_xa, "f")}px * var(--total-scale-factor))`; i.color = this.color; this.div.append(this.editorDiv); this.overlayDiv = document.createElement("div"); this.overlayDiv.classList.add("overlay", "enabled"); this.div.append(this.overlayDiv); if (this._isCopy || this.annotationElementId) {
            const [i, n] = this.parentDimensions;
            if (this.annotationElementId) {
                const { position: r } = this._initialData;
                let [s, a] = this.getInitialTranslation();
                [s, a] = this.pageTranslationToScreen(s, a);
                const [o, l] = this.pageDimensions, [h, c] = this.pageTranslation;
                let d, u;
                switch (this.rotation) {
                    case 0:
                        d = t + (r[0] - h) / o;
                        u = e + this.height - (r[1] - c) / l;
                        break;
                    case 90:
                        d = t + (r[0] - h) / o;
                        u = e - (r[1] - c) / l;
                        [s, a] = [a, -s];
                        break;
                    case 180:
                        d = t - this.width + (r[0] - h) / o;
                        u = e - (r[1] - c) / l;
                        [s, a] = [-s, -a];
                        break;
                    case 270:
                        d = t + (r[0] - h - this.height * l) / o;
                        u = e + (r[1] - c - this.width * o) / l;
                        [s, a] = [-a, s];
                }
                this.setAt(d * i, u * n, s, a);
            }
            else
                this._moveAfterPaste(t, e);
            __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Ka).call(this);
            this._isDraggable = !0;
            this.editorDiv.contentEditable = !1;
        }
        else {
            this._isDraggable = !1;
            this.editorDiv.contentEditable = !0;
        } return this.div; }
        editorDivPaste(t) { const e = t.clipboardData || window.clipboardData, { types: i } = e; if (1 === i.length && "text/plain" === i[0])
            return; t.preventDefault(); const n = __classPrivateFieldGet(_x, _x, "m", _FreeTextEditor_Ja).call(_x, e.getData("text") || "").replaceAll(Wt, "\n"); if (!n)
            return; const r = window.getSelection(); if (!r.rangeCount)
            return; this.editorDiv.normalize(); r.deleteFromDocument(); const s = r.getRangeAt(0); if (!n.includes("\n")) {
            s.insertNode(document.createTextNode(n));
            this.editorDiv.normalize();
            r.collapseToStart();
            return;
        } const { startContainer: a, startOffset: o } = s, l = [], h = []; if (a.nodeType === Node.TEXT_NODE) {
            const t = a.parentElement;
            h.push(a.nodeValue.slice(o).replaceAll(Wt, ""));
            if (t !== this.editorDiv) {
                let e = l;
                for (const i of this.editorDiv.childNodes)
                    i !== t ? e.push(__classPrivateFieldGet(_x, _x, "m", _FreeTextEditor_Ya).call(_x, i)) : e = h;
            }
            l.push(a.nodeValue.slice(0, o).replaceAll(Wt, ""));
        }
        else if (a === this.editorDiv) {
            let t = l, e = 0;
            for (const i of this.editorDiv.childNodes) {
                e++ === o && (t = h);
                t.push(__classPrivateFieldGet(_x, _x, "m", _FreeTextEditor_Ya).call(_x, i));
            }
        } __classPrivateFieldSet(this, _FreeTextEditor_Ga, `${l.join("\n")}${n}${h.join("\n")}`, "f"); __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Ka).call(this); const c = new Range; let d = Math.sumPrecise(l.map(t => t.length)); for (const { firstChild: t } of this.editorDiv.childNodes)
            if (t.nodeType === Node.TEXT_NODE) {
                const e = t.nodeValue.length;
                if (d <= e) {
                    c.setStart(t, d);
                    c.setEnd(t, d);
                    break;
                }
                d -= e;
            } r.removeAllRanges(); r.addRange(c); }
        get contentDiv() { return this.editorDiv; }
        getPDFRect() { const t = _x._internalPadding * this.parentScale; return this.getRect(t, t); }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { let n = null; if (t instanceof FreeTextAnnotationElement) {
                const { data: { defaultAppearanceData: { fontSize: e, fontColor: i }, rect: r, rotation: s, id: a, popupRef: o, richText: l, contentsObj: h, creationDate: c, modificationDate: d }, textContent: u, textPosition: p, parent: { page: { pageNumber: g } } } = t;
                if (!u || 0 === u.length)
                    return null;
                n = t = { annotationType: m.FREETEXT, color: Array.from(i), fontSize: e, value: u.join("\n"), position: p, pageIndex: g - 1, rect: r.slice(0), rotation: s, annotationElementId: a, id: a, deleted: !1, popupRef: o, comment: (h === null || h === void 0 ? void 0 : h.str) || null, richText: l, creationDate: c, modificationDate: d };
            } const r = yield _super.deserialize.call(this, t, e, i); __classPrivateFieldSet(r, _FreeTextEditor_xa, t.fontSize, "f"); r.color = Util.makeHexColor(...t.color); __classPrivateFieldSet(r, _FreeTextEditor_Ga, __classPrivateFieldGet(_x, _x, "m", _FreeTextEditor_Ja).call(_x, t.value), "f"); r._initialData = n; t.comment && r.setCommentData(t); return r; });
        }
        serialize(t = !1) { if (this.isEmpty())
            return null; if (this.deleted)
            return this.serializeDeleted(); const e = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(t), { color: e, fontSize: __classPrivateFieldGet(this, _FreeTextEditor_xa, "f"), value: __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Qa).call(this) }); this.addComment(i); if (t) {
            i.isCopy = !0;
            return i;
        } if (this.annotationElementId && !__classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_Za).call(this, i))
            return null; i.id = this.annotationElementId; return i; }
        renderAnnotationElement(t) { const e = super.renderAnnotationElement(t); if (!e)
            return null; const { style: i } = e; i.fontSize = `calc(${__classPrivateFieldGet(this, _FreeTextEditor_xa, "f")}px * var(--total-scale-factor))`; i.color = this.color; e.replaceChildren(); for (const t of __classPrivateFieldGet(this, _FreeTextEditor_Ga, "f").split("\n")) {
            const i = document.createElement("div");
            i.append(t ? document.createTextNode(t) : document.createElement("br"));
            e.append(i);
        } t.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: __classPrivateFieldGet(this, _FreeTextEditor_Ga, "f") } }); return e; }
        resetAnnotationElement(t) { super.resetAnnotationElement(t); t.resetEdited(); }
    }
    _x = FreeTextEditor, _FreeTextEditor_Ga = new WeakMap(), _FreeTextEditor_Wa = new WeakMap(), _FreeTextEditor_Va = new WeakMap(), _FreeTextEditor_xa = new WeakMap(), _FreeTextEditor_instances = new WeakSet(), _FreeTextEditor_$a = function _FreeTextEditor_$a(t) { const setFontsize = t => { this.editorDiv.style.fontSize = `calc(${t}px * var(--total-scale-factor))`; this.translate(0, -(t - __classPrivateFieldGet(this, _FreeTextEditor_xa, "f")) * this.parentScale); __classPrivateFieldSet(this, _FreeTextEditor_xa, t, "f"); __classPrivateFieldGet(this, _FreeTextEditor_instances, "m", _FreeTextEditor_qa).call(this); }, e = __classPrivateFieldGet(this, _FreeTextEditor_xa, "f"); this.addCommands({ cmd: setFontsize.bind(this, t), undo: setFontsize.bind(this, e), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: f.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 }); }, _FreeTextEditor_va = function _FreeTextEditor_va(t) { const setColor = t => { this.color = t; this.onUpdatedColor(); }, e = this.color; this.addCommands({ cmd: setColor.bind(this, t), undo: setColor.bind(this, e), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: f.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 }); }, _FreeTextEditor_Xa = function _FreeTextEditor_Xa() { const t = []; this.editorDiv.normalize(); let e = null; for (const i of this.editorDiv.childNodes)
        if ((e === null || e === void 0 ? void 0 : e.nodeType) !== Node.TEXT_NODE || "BR" !== i.nodeName) {
            t.push(__classPrivateFieldGet(_x, _x, "m", _FreeTextEditor_Ya).call(_x, i));
            e = i;
        } return t.join("\n"); }, _FreeTextEditor_qa = function _FreeTextEditor_qa() { const [t, e] = this.parentDimensions; let i; if (this.isAttachedToDOM)
        i = this.div.getBoundingClientRect();
    else {
        const { currentLayer: t, div: e } = this, n = e.style.display, r = e.classList.contains("hidden");
        e.classList.remove("hidden");
        e.style.display = "hidden";
        t.div.append(this.div);
        i = e.getBoundingClientRect();
        e.remove();
        e.style.display = n;
        e.classList.toggle("hidden", r);
    } if (this.rotation % 180 == this.parentRotation % 180) {
        this.width = i.width / t;
        this.height = i.height / e;
    }
    else {
        this.width = i.height / t;
        this.height = i.width / e;
    } this.fixAndSetPosition(); }, _FreeTextEditor_Ya = function _FreeTextEditor_Ya(t) { return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Wt, ""); }, _FreeTextEditor_Ka = function _FreeTextEditor_Ka() { this.editorDiv.replaceChildren(); if (__classPrivateFieldGet(this, _FreeTextEditor_Ga, "f"))
        for (const t of __classPrivateFieldGet(this, _FreeTextEditor_Ga, "f").split("\n")) {
            const e = document.createElement("div");
            e.append(t ? document.createTextNode(t) : document.createElement("br"));
            this.editorDiv.append(e);
        } }, _FreeTextEditor_Qa = function _FreeTextEditor_Qa() { return __classPrivateFieldGet(this, _FreeTextEditor_Ga, "f").replaceAll(" ", " "); }, _FreeTextEditor_Ja = function _FreeTextEditor_Ja(t) { return t.replaceAll(" ", " "); }, _FreeTextEditor_Za = function _FreeTextEditor_Za(t) { const { value: e, fontSize: i, color: n, pageIndex: r } = this._initialData; return this.hasEditedComment || this._hasBeenMoved || t.value !== e || t.fontSize !== i || t.color.some((t, e) => t !== n[e]) || t.pageIndex !== r; };
    FreeTextEditor._freeTextDefaultContent = "";
    FreeTextEditor._internalPadding = 0;
    FreeTextEditor._defaultColor = null;
    FreeTextEditor._defaultFontSize = 10;
    FreeTextEditor._type = "freetext";
    FreeTextEditor._editorType = m.FREETEXT;
    class Outline {
        toSVGPath() { unreachable("Abstract method `toSVGPath` must be implemented."); }
        get box() { unreachable("Abstract getter `box` must be implemented."); }
        serialize(t, e) { unreachable("Abstract method `serialize` must be implemented."); }
        static _rescale(t, e, i, n, r, s) { s || (s = new Float32Array(t.length)); for (let a = 0, o = t.length; a < o; a += 2) {
            s[a] = e + t[a] * n;
            s[a + 1] = i + t[a + 1] * r;
        } return s; }
        static _rescaleAndSwap(t, e, i, n, r, s) { s || (s = new Float32Array(t.length)); for (let a = 0, o = t.length; a < o; a += 2) {
            s[a] = e + t[a + 1] * n;
            s[a + 1] = i + t[a] * r;
        } return s; }
        static _translate(t, e, i, n) { n || (n = new Float32Array(t.length)); for (let r = 0, s = t.length; r < s; r += 2) {
            n[r] = e + t[r];
            n[r + 1] = i + t[r + 1];
        } return n; }
        static svgRound(t) { return Math.round(1e4 * t); }
        static _normalizePoint(t, e, i, n, r) { switch (r) {
            case 90: return [1 - e / i, t / n];
            case 180: return [1 - t / i, 1 - e / n];
            case 270: return [e / i, 1 - t / n];
            default: return [t / i, e / n];
        } }
        static _normalizePagePoint(t, e, i) { switch (i) {
            case 90: return [1 - e, t];
            case 180: return [1 - t, 1 - e];
            case 270: return [e, 1 - t];
            default: return [t, e];
        } }
        static createBezierPoints(t, e, i, n, r, s) { return [(t + 5 * i) / 6, (e + 5 * n) / 6, (5 * i + r) / 6, (5 * n + s) / 6, (i + r) / 2, (n + s) / 2]; }
    }
    Outline.PRECISION = 1e-4;
    class FreeDrawOutliner {
        constructor({ x: t, y: e }, i, n, r, s, a = 0) {
            _FreeDrawOutliner_instances.add(this);
            _FreeDrawOutliner_to.set(this, void 0);
            _FreeDrawOutliner_eo.set(this, []);
            _FreeDrawOutliner_io.set(this, void 0);
            _FreeDrawOutliner_no.set(this, void 0);
            _FreeDrawOutliner_ro.set(this, []);
            _FreeDrawOutliner_so.set(this, new Float32Array(18));
            _FreeDrawOutliner_ao.set(this, void 0);
            _FreeDrawOutliner_oo.set(this, void 0);
            _FreeDrawOutliner_lo.set(this, void 0);
            _FreeDrawOutliner_ho.set(this, void 0);
            _FreeDrawOutliner_co.set(this, void 0);
            _FreeDrawOutliner_do.set(this, void 0);
            _FreeDrawOutliner_uo.set(this, []);
            __classPrivateFieldSet(this, _FreeDrawOutliner_to, i, "f");
            __classPrivateFieldSet(this, _FreeDrawOutliner_do, r * n, "f");
            __classPrivateFieldSet(this, _FreeDrawOutliner_no, s, "f");
            __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([NaN, NaN, NaN, NaN, t, e], 6);
            __classPrivateFieldSet(this, _FreeDrawOutliner_io, a, "f");
            __classPrivateFieldSet(this, _FreeDrawOutliner_ho, __classPrivateFieldGet(_y, _y, "f", _FreeDrawOutliner_po) * n, "f");
            __classPrivateFieldSet(this, _FreeDrawOutliner_lo, __classPrivateFieldGet(_y, _y, "f", _FreeDrawOutliner_mo) * n, "f");
            __classPrivateFieldSet(this, _FreeDrawOutliner_co, n, "f");
            __classPrivateFieldGet(this, _FreeDrawOutliner_uo, "f").push(t, e);
        }
        isEmpty() { return isNaN(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[8]); }
        add({ x: t, y: e }) { var _a; __classPrivateFieldSet(this, _FreeDrawOutliner_ao, t, "f"); __classPrivateFieldSet(this, _FreeDrawOutliner_oo, e, "f"); const [i, n, r, s] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"); let [a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(8, 12); const c = t - l, d = e - h, u = Math.hypot(c, d); if (u < __classPrivateFieldGet(this, _FreeDrawOutliner_lo, "f"))
            return !1; const p = u - __classPrivateFieldGet(this, _FreeDrawOutliner_ho, "f"), g = p / u, m = g * c, f = g * d; let b = a, y = o; a = l; o = h; l += m; h += f; (_a = __classPrivateFieldGet(this, _FreeDrawOutliner_uo, "f")) === null || _a === void 0 ? void 0 : _a.push(t, e); const v = m / p, w = -f / p * __classPrivateFieldGet(this, _FreeDrawOutliner_do, "f"), A = v * __classPrivateFieldGet(this, _FreeDrawOutliner_do, "f"); __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(2, 8), 0); __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([l + w, h + A], 4); __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(14, 18), 12); __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([l - w, h - A], 16); if (isNaN(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[6])) {
            if (0 === __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f").length) {
                __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([a + w, o + A], 2);
                __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f").push(NaN, NaN, NaN, NaN, (a + w - i) / r, (o + A - n) / s);
                __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([a - w, o - A], 14);
                __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f").push(NaN, NaN, NaN, NaN, (a - w - i) / r, (o - A - n) / s);
            }
            __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([b, y, a, o, l, h], 6);
            return !this.isEmpty();
        } __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").set([b, y, a, o, l, h], 6); if (Math.abs(Math.atan2(y - o, b - a) - Math.atan2(f, m)) < Math.PI / 2) {
            [a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(2, 6);
            __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f").push(NaN, NaN, NaN, NaN, ((a + l) / 2 - i) / r, ((o + h) / 2 - n) / s);
            [a, o, b, y] = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(14, 18);
            __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f").push(NaN, NaN, NaN, NaN, ((b + a) / 2 - i) / r, ((y + o) / 2 - n) / s);
            return !0;
        } [b, y, a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(0, 6); __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f").push(((b + 5 * a) / 6 - i) / r, ((y + 5 * o) / 6 - n) / s, ((5 * a + l) / 6 - i) / r, ((5 * o + h) / 6 - n) / s, ((a + l) / 2 - i) / r, ((o + h) / 2 - n) / s); [l, h, a, o, b, y] = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(12, 18); __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f").push(((b + 5 * a) / 6 - i) / r, ((y + 5 * o) / 6 - n) / s, ((5 * a + l) / 6 - i) / r, ((5 * o + h) / 6 - n) / s, ((a + l) / 2 - i) / r, ((o + h) / 2 - n) / s); return !0; }
        toSVGPath() { if (this.isEmpty())
            return ""; const t = __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f"), e = __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f"); if (isNaN(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[6]) && !this.isEmpty())
            return __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_bo).call(this); const i = []; i.push(`M${t[4]} ${t[5]}`); for (let e = 6; e < t.length; e += 6)
            isNaN(t[e]) ? i.push(`L${t[e + 4]} ${t[e + 5]}`) : i.push(`C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`); __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_yo).call(this, i); for (let t = e.length - 6; t >= 6; t -= 6)
            isNaN(e[t]) ? i.push(`L${e[t + 4]} ${e[t + 5]}`) : i.push(`C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`); __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_vo).call(this, i); return i.join(" "); }
        newFreeDrawOutline(t, e, i, n, r, s) { return new FreeDrawOutline(t, e, i, n, r, s); }
        getOutlines() { var _a, _5; const t = __classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f"), e = __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f"), i = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f"), [n, r, s, a] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), o = new Float32Array(((_5 = (_a = __classPrivateFieldGet(this, _FreeDrawOutliner_uo, "f")) === null || _a === void 0 ? void 0 : _a.length) !== null && _5 !== void 0 ? _5 : 0) + 2); for (let t = 0, e = o.length - 2; t < e; t += 2) {
            o[t] = (__classPrivateFieldGet(this, _FreeDrawOutliner_uo, "f")[t] - n) / s;
            o[t + 1] = (__classPrivateFieldGet(this, _FreeDrawOutliner_uo, "f")[t + 1] - r) / a;
        } o[o.length - 2] = (__classPrivateFieldGet(this, _FreeDrawOutliner_ao, "f") - n) / s; o[o.length - 1] = (__classPrivateFieldGet(this, _FreeDrawOutliner_oo, "f") - r) / a; if (isNaN(i[6]) && !this.isEmpty())
            return __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_wo).call(this, o); const l = new Float32Array(__classPrivateFieldGet(this, _FreeDrawOutliner_ro, "f").length + 24 + __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f").length); let h = t.length; for (let e = 0; e < h; e += 2)
            if (isNaN(t[e]))
                l[e] = l[e + 1] = NaN;
            else {
                l[e] = t[e];
                l[e + 1] = t[e + 1];
            } h = __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_Ao).call(this, l, h); for (let t = e.length - 6; t >= 6; t -= 6)
            for (let i = 0; i < 6; i += 2)
                if (isNaN(e[t + i])) {
                    l[h] = l[h + 1] = NaN;
                    h += 2;
                }
                else {
                    l[h] = e[t + i];
                    l[h + 1] = e[t + i + 1];
                    h += 2;
                } __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_xo).call(this, l, h); return this.newFreeDrawOutline(l, o, __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_co, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_io, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_no, "f")); }
    }
    _y = FreeDrawOutliner, _FreeDrawOutliner_to = new WeakMap(), _FreeDrawOutliner_eo = new WeakMap(), _FreeDrawOutliner_io = new WeakMap(), _FreeDrawOutliner_no = new WeakMap(), _FreeDrawOutliner_ro = new WeakMap(), _FreeDrawOutliner_so = new WeakMap(), _FreeDrawOutliner_ao = new WeakMap(), _FreeDrawOutliner_oo = new WeakMap(), _FreeDrawOutliner_lo = new WeakMap(), _FreeDrawOutliner_ho = new WeakMap(), _FreeDrawOutliner_co = new WeakMap(), _FreeDrawOutliner_do = new WeakMap(), _FreeDrawOutliner_uo = new WeakMap(), _FreeDrawOutliner_instances = new WeakSet(), _FreeDrawOutliner_fo = function _FreeDrawOutliner_fo() { const t = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(4, 6), e = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(16, 18), [i, n, r, s] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"); return [(__classPrivateFieldGet(this, _FreeDrawOutliner_ao, "f") + (t[0] - e[0]) / 2 - i) / r, (__classPrivateFieldGet(this, _FreeDrawOutliner_oo, "f") + (t[1] - e[1]) / 2 - n) / s, (__classPrivateFieldGet(this, _FreeDrawOutliner_ao, "f") + (e[0] - t[0]) / 2 - i) / r, (__classPrivateFieldGet(this, _FreeDrawOutliner_oo, "f") + (e[1] - t[1]) / 2 - n) / s]; }, _FreeDrawOutliner_bo = function _FreeDrawOutliner_bo() { const [t, e, i, n] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), [r, s, a, o] = __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_fo).call(this); return `M${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[2] - t) / i} ${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[3] - e) / n} L${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[4] - t) / i} ${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[5] - e) / n} L${r} ${s} L${a} ${o} L${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[16] - t) / i} ${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[17] - e) / n} L${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[14] - t) / i} ${(__classPrivateFieldGet(this, _FreeDrawOutliner_so, "f")[15] - e) / n} Z`; }, _FreeDrawOutliner_vo = function _FreeDrawOutliner_vo(t) { const e = __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f"); t.push(`L${e[4]} ${e[5]} Z`); }, _FreeDrawOutliner_yo = function _FreeDrawOutliner_yo(t) { const [e, i, n, r] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), s = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(4, 6), a = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(16, 18), [o, l, h, c] = __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_fo).call(this); t.push(`L${(s[0] - e) / n} ${(s[1] - i) / r} L${o} ${l} L${h} ${c} L${(a[0] - e) / n} ${(a[1] - i) / r}`); }, _FreeDrawOutliner_wo = function _FreeDrawOutliner_wo(t) { const e = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f"), [i, n, r, s] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), [a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_fo).call(this), c = new Float32Array(36); c.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - n) / s, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - n) / s, NaN, NaN, NaN, NaN, a, o, NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - n) / s, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - n) / s], 0); return this.newFreeDrawOutline(c, t, __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_co, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_io, "f"), __classPrivateFieldGet(this, _FreeDrawOutliner_no, "f")); }, _FreeDrawOutliner_xo = function _FreeDrawOutliner_xo(t, e) { const i = __classPrivateFieldGet(this, _FreeDrawOutliner_eo, "f"); t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e); return e + 6; }, _FreeDrawOutliner_Ao = function _FreeDrawOutliner_Ao(t, e) { const i = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(4, 6), n = __classPrivateFieldGet(this, _FreeDrawOutliner_so, "f").subarray(16, 18), [r, s, a, o] = __classPrivateFieldGet(this, _FreeDrawOutliner_to, "f"), [l, h, c, d] = __classPrivateFieldGet(this, _FreeDrawOutliner_instances, "m", _FreeDrawOutliner_fo).call(this); t.set([NaN, NaN, NaN, NaN, (i[0] - r) / a, (i[1] - s) / o, NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, (n[0] - r) / a, (n[1] - s) / o], e); return e + 24; };
    _FreeDrawOutliner_po = { value: 8 };
    _FreeDrawOutliner_go = { value: 2 };
    _FreeDrawOutliner_mo = { value: __classPrivateFieldGet(_y, _y, "f", _FreeDrawOutliner_po) + __classPrivateFieldGet(_y, _y, "f", _FreeDrawOutliner_go) };
    class FreeDrawOutline extends Outline {
        constructor(t, e, i, n, r, s) {
            super();
            _FreeDrawOutline_instances.add(this);
            _FreeDrawOutline_to.set(this, void 0);
            _FreeDrawOutline_Eo.set(this, new Float32Array(4));
            _FreeDrawOutline_io.set(this, void 0);
            _FreeDrawOutline_no.set(this, void 0);
            _FreeDrawOutline_uo.set(this, void 0);
            _FreeDrawOutline_co.set(this, void 0);
            _FreeDrawOutline__o.set(this, void 0);
            __classPrivateFieldSet(this, _FreeDrawOutline__o, t, "f");
            __classPrivateFieldSet(this, _FreeDrawOutline_uo, e, "f");
            __classPrivateFieldSet(this, _FreeDrawOutline_to, i, "f");
            __classPrivateFieldSet(this, _FreeDrawOutline_co, n, "f");
            __classPrivateFieldSet(this, _FreeDrawOutline_io, r, "f");
            __classPrivateFieldSet(this, _FreeDrawOutline_no, s, "f");
            this.firstPoint = [NaN, NaN];
            this.lastPoint = [NaN, NaN];
            __classPrivateFieldGet(this, _FreeDrawOutline_instances, "m", _FreeDrawOutline_To).call(this, s);
            const [a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutline_Eo, "f");
            for (let e = 0, i = t.length; e < i; e += 2) {
                t[e] = (t[e] - a) / l;
                t[e + 1] = (t[e + 1] - o) / h;
            }
            for (let t = 0, i = e.length; t < i; t += 2) {
                e[t] = (e[t] - a) / l;
                e[t + 1] = (e[t + 1] - o) / h;
            }
        }
        toSVGPath() { const t = [`M${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[4]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[5]}`]; for (let e = 6, i = __classPrivateFieldGet(this, _FreeDrawOutline__o, "f").length; e < i; e += 6)
            isNaN(__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e]) ? t.push(`L${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 4]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 5]}`) : t.push(`C${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 1]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 2]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 3]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 4]} ${__classPrivateFieldGet(this, _FreeDrawOutline__o, "f")[e + 5]}`); t.push("Z"); return t.join(" "); }
        serialize([t, e, i, n], r) { const s = i - t, a = n - e; let o, l; switch (r) {
            case 0:
                o = Outline._rescale(__classPrivateFieldGet(this, _FreeDrawOutline__o, "f"), t, n, s, -a);
                l = Outline._rescale(__classPrivateFieldGet(this, _FreeDrawOutline_uo, "f"), t, n, s, -a);
                break;
            case 90:
                o = Outline._rescaleAndSwap(__classPrivateFieldGet(this, _FreeDrawOutline__o, "f"), t, e, s, a);
                l = Outline._rescaleAndSwap(__classPrivateFieldGet(this, _FreeDrawOutline_uo, "f"), t, e, s, a);
                break;
            case 180:
                o = Outline._rescale(__classPrivateFieldGet(this, _FreeDrawOutline__o, "f"), i, e, -s, a);
                l = Outline._rescale(__classPrivateFieldGet(this, _FreeDrawOutline_uo, "f"), i, e, -s, a);
                break;
            case 270:
                o = Outline._rescaleAndSwap(__classPrivateFieldGet(this, _FreeDrawOutline__o, "f"), i, n, -s, -a);
                l = Outline._rescaleAndSwap(__classPrivateFieldGet(this, _FreeDrawOutline_uo, "f"), i, n, -s, -a);
        } return { outline: Array.from(o), points: [Array.from(l)] }; }
        get box() { return __classPrivateFieldGet(this, _FreeDrawOutline_Eo, "f"); }
        newOutliner(t, e, i, n, r, s = 0) { return new FreeDrawOutliner(t, e, i, n, r, s); }
        getNewOutline(t, e) { const [i, n, r, s] = __classPrivateFieldGet(this, _FreeDrawOutline_Eo, "f"), [a, o, l, h] = __classPrivateFieldGet(this, _FreeDrawOutline_to, "f"), c = r * l, d = s * h, u = i * l + a, p = n * h + o, g = this.newOutliner({ x: __classPrivateFieldGet(this, _FreeDrawOutline_uo, "f")[0] * c + u, y: __classPrivateFieldGet(this, _FreeDrawOutline_uo, "f")[1] * d + p }, __classPrivateFieldGet(this, _FreeDrawOutline_to, "f"), __classPrivateFieldGet(this, _FreeDrawOutline_co, "f"), t, __classPrivateFieldGet(this, _FreeDrawOutline_no, "f"), e !== null && e !== void 0 ? e : __classPrivateFieldGet(this, _FreeDrawOutline_io, "f")); for (let t = 2; t < __classPrivateFieldGet(this, _FreeDrawOutline_uo, "f").length; t += 2)
            g.add({ x: __classPrivateFieldGet(this, _FreeDrawOutline_uo, "f")[t] * c + u, y: __classPrivateFieldGet(this, _FreeDrawOutline_uo, "f")[t + 1] * d + p }); return g.getOutlines(); }
    }
    _FreeDrawOutline_to = new WeakMap(), _FreeDrawOutline_Eo = new WeakMap(), _FreeDrawOutline_io = new WeakMap(), _FreeDrawOutline_no = new WeakMap(), _FreeDrawOutline_uo = new WeakMap(), _FreeDrawOutline_co = new WeakMap(), _FreeDrawOutline__o = new WeakMap(), _FreeDrawOutline_instances = new WeakSet(), _FreeDrawOutline_To = function _FreeDrawOutline_To(t) { const e = __classPrivateFieldGet(this, _FreeDrawOutline__o, "f"); let i = e[4], n = e[5]; const r = [i, n, i, n]; let s = i, a = n, o = i, l = n; const h = t ? Math.max : Math.min, c = new Float32Array(4); for (let t = 6, d = e.length; t < d; t += 6) {
        const d = e[t + 4], u = e[t + 5];
        if (isNaN(e[t])) {
            Util.pointBoundingBox(d, u, r);
            if (a > u) {
                s = d;
                a = u;
            }
            else
                a === u && (s = h(s, d));
            if (l < u) {
                o = d;
                l = u;
            }
            else
                l === u && (o = h(o, d));
        }
        else {
            c[0] = c[1] = 1 / 0;
            c[2] = c[3] = -1 / 0;
            Util.bezierBoundingBox(i, n, ...e.slice(t, t + 6), c);
            Util.rectBoundingBox(c[0], c[1], c[2], c[3], r);
            if (a > c[1]) {
                s = c[0];
                a = c[1];
            }
            else
                a === c[1] && (s = h(s, c[0]));
            if (l < c[3]) {
                o = c[2];
                l = c[3];
            }
            else
                l === c[3] && (o = h(o, c[2]));
        }
        i = d;
        n = u;
    } const d = __classPrivateFieldGet(this, _FreeDrawOutline_Eo, "f"); d[0] = r[0] - __classPrivateFieldGet(this, _FreeDrawOutline_io, "f"); d[1] = r[1] - __classPrivateFieldGet(this, _FreeDrawOutline_io, "f"); d[2] = r[2] - r[0] + 2 * __classPrivateFieldGet(this, _FreeDrawOutline_io, "f"); d[3] = r[3] - r[1] + 2 * __classPrivateFieldGet(this, _FreeDrawOutline_io, "f"); this.firstPoint = [s, a]; this.lastPoint = [o, l]; };
    class HighlightOutliner {
        constructor(t, e = 0, i = 0, n = !0) {
            _HighlightOutliner_instances.add(this);
            _HighlightOutliner_to.set(this, void 0);
            _HighlightOutliner_So.set(this, void 0);
            _HighlightOutliner_Co.set(this, void 0);
            _HighlightOutliner_Do.set(this, []);
            _HighlightOutliner_Po.set(this, []);
            const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], s = 1e-4;
            for (const { x: i, y: n, width: a, height: o } of t) {
                const t = Math.floor((i - e) / s) * s, l = Math.ceil((i + a + e) / s) * s, h = Math.floor((n - e) / s) * s, c = Math.ceil((n + o + e) / s) * s, d = [t, h, c, !0], u = [l, h, c, !1];
                __classPrivateFieldGet(this, _HighlightOutliner_Do, "f").push(d, u);
                Util.rectBoundingBox(t, h, l, c, r);
            }
            const a = r[2] - r[0] + 2 * i, o = r[3] - r[1] + 2 * i, l = r[0] - i, h = r[1] - i;
            let c = n ? -1 / 0 : 1 / 0, d = 1 / 0;
            const u = __classPrivateFieldGet(this, _HighlightOutliner_Do, "f").at(n ? -1 : -2), p = [u[0], u[2]];
            for (const t of __classPrivateFieldGet(this, _HighlightOutliner_Do, "f")) {
                const [e, i, r, s] = t;
                if (!s && n)
                    if (i < d) {
                        d = i;
                        c = e;
                    }
                    else
                        i === d && (c = Math.max(c, e));
                else if (s && !n)
                    if (i < d) {
                        d = i;
                        c = e;
                    }
                    else
                        i === d && (c = Math.min(c, e));
                t[0] = (e - l) / a;
                t[1] = (i - h) / o;
                t[2] = (r - h) / o;
            }
            __classPrivateFieldSet(this, _HighlightOutliner_to, new Float32Array([l, h, a, o]), "f");
            __classPrivateFieldSet(this, _HighlightOutliner_So, [c, d], "f");
            __classPrivateFieldSet(this, _HighlightOutliner_Co, p, "f");
        }
        getOutlines() { __classPrivateFieldGet(this, _HighlightOutliner_Do, "f").sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]); const t = []; for (const e of __classPrivateFieldGet(this, _HighlightOutliner_Do, "f"))
            if (e[3]) {
                t.push(...__classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Mo).call(this, e));
                __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_ko).call(this, e);
            }
            else {
                __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Io).call(this, e);
                t.push(...__classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Mo).call(this, e));
            } return __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Fo).call(this, t); }
    }
    _HighlightOutliner_to = new WeakMap(), _HighlightOutliner_So = new WeakMap(), _HighlightOutliner_Co = new WeakMap(), _HighlightOutliner_Do = new WeakMap(), _HighlightOutliner_Po = new WeakMap(), _HighlightOutliner_instances = new WeakSet(), _HighlightOutliner_Fo = function _HighlightOutliner_Fo(t) { const e = [], i = new Set; for (const i of t) {
        const [t, n, r] = i;
        e.push([t, n, i], [t, r, i]);
    } e.sort((t, e) => t[1] - e[1] || t[0] - e[0]); for (let t = 0, n = e.length; t < n; t += 2) {
        const n = e[t][2], r = e[t + 1][2];
        n.push(r);
        r.push(n);
        i.add(n);
        i.add(r);
    } const n = []; let r; for (; i.size > 0;) {
        const t = i.values().next().value;
        let [e, s, a, o, l] = t;
        i.delete(t);
        let h = e, c = s;
        r = [e, a];
        n.push(r);
        for (;;) {
            let t;
            if (i.has(o))
                t = o;
            else {
                if (!i.has(l))
                    break;
                t = l;
            }
            i.delete(t);
            [e, s, a, o, l] = t;
            if (h !== e) {
                r.push(h, c, e, c === s ? s : a);
                h = e;
            }
            c = c === s ? a : s;
        }
        r.push(h, c);
    } return new HighlightOutline(n, __classPrivateFieldGet(this, _HighlightOutliner_to, "f"), __classPrivateFieldGet(this, _HighlightOutliner_So, "f"), __classPrivateFieldGet(this, _HighlightOutliner_Co, "f")); }, _HighlightOutliner_Ro = function _HighlightOutliner_Ro(t) { const e = __classPrivateFieldGet(this, _HighlightOutliner_Po, "f"); let i = 0, n = e.length - 1; for (; i <= n;) {
        const r = i + n >> 1, s = e[r][0];
        if (s === t)
            return r;
        s < t ? i = r + 1 : n = r - 1;
    } return n + 1; }, _HighlightOutliner_ko = function _HighlightOutliner_ko([, t, e]) { const i = __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Ro).call(this, t); __classPrivateFieldGet(this, _HighlightOutliner_Po, "f").splice(i, 0, [t, e]); }, _HighlightOutliner_Io = function _HighlightOutliner_Io([, t, e]) { const i = __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Ro).call(this, t); for (let n = i; n < __classPrivateFieldGet(this, _HighlightOutliner_Po, "f").length; n++) {
        const [i, r] = __classPrivateFieldGet(this, _HighlightOutliner_Po, "f")[n];
        if (i !== t)
            break;
        if (i === t && r === e) {
            __classPrivateFieldGet(this, _HighlightOutliner_Po, "f").splice(n, 1);
            return;
        }
    } for (let n = i - 1; n >= 0; n--) {
        const [i, r] = __classPrivateFieldGet(this, _HighlightOutliner_Po, "f")[n];
        if (i !== t)
            break;
        if (i === t && r === e) {
            __classPrivateFieldGet(this, _HighlightOutliner_Po, "f").splice(n, 1);
            return;
        }
    } }, _HighlightOutliner_Mo = function _HighlightOutliner_Mo(t) { const [e, i, n] = t, r = [[e, i, n]], s = __classPrivateFieldGet(this, _HighlightOutliner_instances, "m", _HighlightOutliner_Ro).call(this, n); for (let t = 0; t < s; t++) {
        const [i, n] = __classPrivateFieldGet(this, _HighlightOutliner_Po, "f")[t];
        for (let t = 0, s = r.length; t < s; t++) {
            const [, a, o] = r[t];
            if (!(n <= a || o <= i))
                if (a >= i)
                    if (o > n)
                        r[t][1] = n;
                    else {
                        if (1 === s)
                            return [];
                        r.splice(t, 1);
                        t--;
                        s--;
                    }
                else {
                    r[t][2] = i;
                    o > n && r.push([e, n, o]);
                }
        }
    } return r; };
    class HighlightOutline extends Outline {
        constructor(t, e, i, n) {
            super();
            _HighlightOutline_to.set(this, void 0);
            _HighlightOutline_Bo.set(this, void 0);
            __classPrivateFieldSet(this, _HighlightOutline_Bo, t, "f");
            __classPrivateFieldSet(this, _HighlightOutline_to, e, "f");
            this.firstPoint = i;
            this.lastPoint = n;
        }
        toSVGPath() { const t = []; for (const e of __classPrivateFieldGet(this, _HighlightOutline_Bo, "f")) {
            let [i, n] = e;
            t.push(`M${i} ${n}`);
            for (let r = 2; r < e.length; r += 2) {
                const s = e[r], a = e[r + 1];
                if (s === i) {
                    t.push(`V${a}`);
                    n = a;
                }
                else if (a === n) {
                    t.push(`H${s}`);
                    i = s;
                }
            }
            t.push("Z");
        } return t.join(" "); }
        serialize([t, e, i, n], r) { const s = [], a = i - t, o = n - e; for (const e of __classPrivateFieldGet(this, _HighlightOutline_Bo, "f")) {
            const i = new Array(e.length);
            for (let r = 0; r < e.length; r += 2) {
                i[r] = t + e[r] * a;
                i[r + 1] = n - e[r + 1] * o;
            }
            s.push(i);
        } return s; }
        get box() { return __classPrivateFieldGet(this, _HighlightOutline_to, "f"); }
        get classNamesForOutlining() { return ["highlightOutline"]; }
    }
    _HighlightOutline_to = new WeakMap(), _HighlightOutline_Bo = new WeakMap();
    class FreeHighlightOutliner extends FreeDrawOutliner {
        newFreeDrawOutline(t, e, i, n, r, s) { return new FreeHighlightOutline(t, e, i, n, r, s); }
    }
    class FreeHighlightOutline extends FreeDrawOutline {
        newOutliner(t, e, i, n, r, s = 0) { return new FreeHighlightOutliner(t, e, i, n, r, s); }
    }
    class HighlightEditor extends AnnotationEditor {
        static get _keyboardManager() { const t = _z.prototype; return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t._moveCaret, { args: [3] }]])); }
        constructor(t) {
            super(Object.assign(Object.assign({}, t), { name: "highlightEditor" }));
            _HighlightEditor_instances.add(this);
            _HighlightEditor_Oo.set(this, null);
            _HighlightEditor_Lo.set(this, 0);
            _HighlightEditor_No.set(this, void 0);
            _HighlightEditor_Uo.set(this, null);
            _HighlightEditor_s.set(this, null);
            _HighlightEditor_Ho.set(this, null);
            _HighlightEditor_zo.set(this, null);
            _HighlightEditor_jo.set(this, 0);
            _HighlightEditor_Go.set(this, null);
            _HighlightEditor_Wo.set(this, null);
            _HighlightEditor_S.set(this, null);
            _HighlightEditor_Vo.set(this, !1);
            _HighlightEditor_So.set(this, null);
            _HighlightEditor_Co.set(this, null);
            _HighlightEditor_$o.set(this, null);
            _HighlightEditor_be.set(this, "");
            _HighlightEditor_do.set(this, void 0);
            _HighlightEditor_qo.set(this, "");
            this.color = t.color || _z._defaultColor;
            __classPrivateFieldSet(this, _HighlightEditor_do, t.thickness || _z._defaultThickness, "f");
            this.opacity = t.opacity || _z._defaultOpacity;
            __classPrivateFieldSet(this, _HighlightEditor_No, t.boxes || null, "f");
            __classPrivateFieldSet(this, _HighlightEditor_qo, t.methodOfCreation || "", "f");
            __classPrivateFieldSet(this, _HighlightEditor_be, t.text || "", "f");
            this._isDraggable = !1;
            this.defaultL10nId = "pdfjs-editor-highlight-editor";
            if (t.highlightId > -1) {
                __classPrivateFieldSet(this, _HighlightEditor_Vo, !0, "f");
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Xo).call(this, t);
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(this);
            }
            else if (__classPrivateFieldGet(this, _HighlightEditor_No, "f")) {
                __classPrivateFieldSet(this, _HighlightEditor_Oo, t.anchorNode, "f");
                __classPrivateFieldSet(this, _HighlightEditor_Lo, t.anchorOffset, "f");
                __classPrivateFieldSet(this, _HighlightEditor_zo, t.focusNode, "f");
                __classPrivateFieldSet(this, _HighlightEditor_jo, t.focusOffset, "f");
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Ko).call(this);
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(this);
                this.rotate(this.rotation);
            }
            this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
        }
        get telemetryInitialData() { return { action: "added", type: __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: __classPrivateFieldGet(this, _HighlightEditor_do, "f"), methodOfCreation: __classPrivateFieldGet(this, _HighlightEditor_qo, "f") }; }
        get telemetryFinalData() { return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) }; }
        static computeTelemetryFinalData(t) { return { numberOfColors: t.get("color").size }; }
        static initialize(t, e) { var _a; AnnotationEditor.initialize(t, e); _z._defaultColor || (_z._defaultColor = ((_a = e.highlightColors) === null || _a === void 0 ? void 0 : _a.values().next().value) || "#fff066"); }
        static updateDefaultParams(t, e) { switch (t) {
            case f.HIGHLIGHT_COLOR:
                _z._defaultColor = e;
                break;
            case f.HIGHLIGHT_THICKNESS: _z._defaultThickness = e;
        } }
        translateInPage(t, e) { }
        get toolbarPosition() { return __classPrivateFieldGet(this, _HighlightEditor_Co, "f"); }
        get commentButtonPosition() { return __classPrivateFieldGet(this, _HighlightEditor_So, "f"); }
        updateParams(t, e) { switch (t) {
            case f.HIGHLIGHT_COLOR:
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_va).call(this, e);
                break;
            case f.HIGHLIGHT_THICKNESS: __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Qo).call(this, e);
        } }
        static get defaultPropertiesToUpdate() { return [[f.HIGHLIGHT_COLOR, _z._defaultColor], [f.HIGHLIGHT_THICKNESS, _z._defaultThickness]]; }
        get propertiesToUpdate() { return [[f.HIGHLIGHT_COLOR, this.color || _z._defaultColor], [f.HIGHLIGHT_THICKNESS, __classPrivateFieldGet(this, _HighlightEditor_do, "f") || _z._defaultThickness], [f.HIGHLIGHT_FREE, __classPrivateFieldGet(this, _HighlightEditor_Vo, "f")]]; }
        onUpdatedColor() { var _a, _5; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_S, "f"), { root: { fill: this.color, "fill-opacity": this.opacity } }); (_5 = __classPrivateFieldGet(this, _HighlightEditor_s, "f")) === null || _5 === void 0 ? void 0 : _5.updateColor(this.color); super.onUpdatedColor(); }
        get toolbarButtons() { if (this._uiManager.highlightColors) {
            return [["colorPicker", __classPrivateFieldSet(this, _HighlightEditor_s, new ColorPicker({ editor: this }), "f")]];
        } return super.toolbarButtons; }
        disableEditing() { super.disableEditing(); this.div.classList.toggle("disabled", !0); }
        enableEditing() { super.enableEditing(); this.div.classList.toggle("disabled", !1); }
        fixAndSetPosition() { return super.fixAndSetPosition(__classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_tl).call(this)); }
        getBaseTranslation() { return [0, 0]; }
        getRect(t, e) { return super.getRect(t, e, __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_tl).call(this)); }
        onceAdded(t) { this.annotationElementId || this.parent.addUndoableEditor(this); t && this.div.focus(); }
        remove() { __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_el).call(this); this._reportTelemetry({ action: "deleted" }); super.remove(); }
        rebuild() { if (this.parent) {
            super.rebuild();
            if (null !== this.div) {
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(this);
                this.isAttachedToDOM || this.parent.add(this);
            }
        } }
        setParent(t) { var _a; let e = !1; if (this.parent && !t)
            __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_el).call(this);
        else if (t) {
            __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(this, t);
            e = !this.parent && ((_a = this.div) === null || _a === void 0 ? void 0 : _a.classList.contains("selectedEditor"));
        } super.setParent(t); this.show(this._isVisible); e && this.select(); }
        rotate(t) { const { drawLayer: e } = this.parent; let i; if (__classPrivateFieldGet(this, _HighlightEditor_Vo, "f")) {
            t = (t - this.rotation + 360) % 360;
            i = __classPrivateFieldGet(_z, _z, "m", _HighlightEditor_Jo).call(_z, __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").box, t);
        }
        else
            i = __classPrivateFieldGet(_z, _z, "m", _HighlightEditor_Jo).call(_z, [this.x, this.y, this.width, this.height], t); e.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_S, "f"), { bbox: i, root: { "data-main-rotation": t } }); e.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { bbox: __classPrivateFieldGet(_z, _z, "m", _HighlightEditor_Jo).call(_z, __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").box, t), root: { "data-main-rotation": t } }); }
        render() { if (this.div)
            return this.div; const t = super.render(); if (__classPrivateFieldGet(this, _HighlightEditor_be, "f")) {
            t.setAttribute("aria-label", __classPrivateFieldGet(this, _HighlightEditor_be, "f"));
            t.setAttribute("role", "mark");
        } __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") ? t.classList.add("free") : this.div.addEventListener("keydown", __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_il).bind(this), { signal: this._uiManager._signal }); const e = __classPrivateFieldSet(this, _HighlightEditor_Go, document.createElement("div"), "f"); t.append(e); e.setAttribute("aria-hidden", "true"); e.className = "internal"; e.style.clipPath = __classPrivateFieldGet(this, _HighlightEditor_Uo, "f"); this.setDims(); bindEvents(this, __classPrivateFieldGet(this, _HighlightEditor_Go, "f"), ["pointerover", "pointerleave"]); this.enableEditing(); return t; }
        pointerover() { var _a; this.isSelected || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { rootClass: { hovered: !0 } })); }
        pointerleave() { var _a; this.isSelected || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { rootClass: { hovered: !1 } })); }
        _moveCaret(t) { this.parent.unselect(this); switch (t) {
            case 0:
            case 2:
                __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_nl).call(this, !0);
                break;
            case 1:
            case 3: __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_nl).call(this, !1);
        } }
        select() { var _a; super.select(); __classPrivateFieldGet(this, _HighlightEditor_$o, "f") && ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { rootClass: { hovered: !1, selected: !0 } })); }
        unselect() { var _a; super.unselect(); if (__classPrivateFieldGet(this, _HighlightEditor_$o, "f")) {
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { rootClass: { selected: !1 } });
            __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") || __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_nl).call(this, !1);
        } }
        get _mustFixPosition() { return !__classPrivateFieldGet(this, _HighlightEditor_Vo, "f"); }
        show(t = this._isVisible) { super.show(t); if (this.parent) {
            this.parent.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_S, "f"), { rootClass: { hidden: !t } });
            this.parent.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { rootClass: { hidden: !t } });
        } }
        static startHighlighting(t, e, { target: i, x: n, y: r }) { const { x: s, y: a, width: o, height: l } = i.getBoundingClientRect(), h = new AbortController, c = t.combinedSignal(h), pointerUpCallback = e => { h.abort(); __classPrivateFieldGet(this, _z, "m", _HighlightEditor_al).call(this, t, e); }; window.addEventListener("blur", pointerUpCallback, { signal: c }); window.addEventListener("pointerup", pointerUpCallback, { signal: c }); window.addEventListener("pointerdown", stopEvent, { capture: !0, passive: !1, signal: c }); window.addEventListener("contextmenu", noContextMenu, { signal: c }); i.addEventListener("pointermove", __classPrivateFieldGet(this, _z, "m", _HighlightEditor_ol).bind(this, t), { signal: c }); this._freeHighlight = new FreeHighlightOutliner({ x: n, y: r }, [s, a, o, l], t.scale, this._defaultThickness / 2, e, .001); ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: !0, free: !0 }, path: { d: this._freeHighlight.toSVGPath() } }, !0, !0)); }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { let n = null; if (t instanceof HighlightAnnotationElement) {
                const { data: { quadPoints: e, rect: i, rotation: r, id: s, color: a, opacity: o, popupRef: l, richText: h, contentsObj: c, creationDate: d, modificationDate: u }, parent: { page: { pageNumber: p } } } = t;
                n = t = { annotationType: m.HIGHLIGHT, color: Array.from(a), opacity: o, quadPoints: e, boxes: null, pageIndex: p - 1, rect: i.slice(0), rotation: r, annotationElementId: s, id: s, deleted: !1, popupRef: l, richText: h, comment: (c === null || c === void 0 ? void 0 : c.str) || null, creationDate: d, modificationDate: u };
            }
            else if (t instanceof InkAnnotationElement) {
                const { data: { inkLists: e, rect: i, rotation: r, id: s, color: a, borderStyle: { rawWidth: o }, popupRef: l, richText: h, contentsObj: c, creationDate: d, modificationDate: u }, parent: { page: { pageNumber: p } } } = t;
                n = t = { annotationType: m.HIGHLIGHT, color: Array.from(a), thickness: o, inkLists: e, boxes: null, pageIndex: p - 1, rect: i.slice(0), rotation: r, annotationElementId: s, id: s, deleted: !1, popupRef: l, richText: h, comment: (c === null || c === void 0 ? void 0 : c.str) || null, creationDate: d, modificationDate: u };
            } const { color: r, quadPoints: s, inkLists: a, outlines: o, opacity: l } = t, h = yield _super.deserialize.call(this, t, e, i); h.color = Util.makeHexColor(...r); h.opacity = l || 1; a && (__classPrivateFieldSet(h, _HighlightEditor_do, t.thickness, "f")); h._initialData = n; t.comment && h.setCommentData(t); const [c, d] = h.pageDimensions, [u, p] = h.pageTranslation; if (s) {
                const t = __classPrivateFieldSet(h, _HighlightEditor_No, [], "f");
                for (let e = 0; e < s.length; e += 8)
                    t.push({ x: (s[e] - u) / c, y: 1 - (s[e + 1] - p) / d, width: (s[e + 2] - s[e]) / c, height: (s[e + 1] - s[e + 5]) / d });
                __classPrivateFieldGet(h, _HighlightEditor_instances, "m", _HighlightEditor_Ko).call(h);
                __classPrivateFieldGet(h, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(h);
                h.rotate(h.rotation);
            }
            else if (a || o) {
                __classPrivateFieldSet(h, _HighlightEditor_Vo, !0, "f");
                const t = (a || o.points)[0], i = { x: t[0] - u, y: d - (t[1] - p) }, n = new FreeHighlightOutliner(i, [0, 0, c, d], 1, __classPrivateFieldGet(h, _HighlightEditor_do, "f") / 2, !0, .001);
                for (let e = 0, r = t.length; e < r; e += 2) {
                    i.x = t[e] - u;
                    i.y = d - (t[e + 1] - p);
                    n.add(i);
                }
                const { id: r, clipPathId: s } = e.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: h.color, "fill-opacity": h._defaultOpacity }, rootClass: { highlight: !0, free: !0 }, path: { d: n.toSVGPath() } }, !0, !0);
                __classPrivateFieldGet(h, _HighlightEditor_instances, "m", _HighlightEditor_Xo).call(h, { highlightOutlines: n.getOutlines(), highlightId: r, clipPathId: s });
                __classPrivateFieldGet(h, _HighlightEditor_instances, "m", _HighlightEditor_Yo).call(h);
                h.rotate(h.parentRotation);
            } return h; });
        }
        serialize(t = !1) { if (this.isEmpty() || t)
            return null; if (this.deleted)
            return this.serializeDeleted(); const e = AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(t); Object.assign(i, { color: e, opacity: this.opacity, thickness: __classPrivateFieldGet(this, _HighlightEditor_do, "f"), quadPoints: __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_rl).call(this), outlines: __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_sl).call(this, i.rect) }); this.addComment(i); if (this.annotationElementId && !__classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Za).call(this, i))
            return null; i.id = this.annotationElementId; return i; }
        renderAnnotationElement(t) { if (this.deleted) {
            t.hide();
            return null;
        } t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }); return null; }
        static canCreateNewEmptyEditor() { return !1; }
    }
    _z = HighlightEditor, _HighlightEditor_Oo = new WeakMap(), _HighlightEditor_Lo = new WeakMap(), _HighlightEditor_No = new WeakMap(), _HighlightEditor_Uo = new WeakMap(), _HighlightEditor_s = new WeakMap(), _HighlightEditor_Ho = new WeakMap(), _HighlightEditor_zo = new WeakMap(), _HighlightEditor_jo = new WeakMap(), _HighlightEditor_Go = new WeakMap(), _HighlightEditor_Wo = new WeakMap(), _HighlightEditor_S = new WeakMap(), _HighlightEditor_Vo = new WeakMap(), _HighlightEditor_So = new WeakMap(), _HighlightEditor_Co = new WeakMap(), _HighlightEditor_$o = new WeakMap(), _HighlightEditor_be = new WeakMap(), _HighlightEditor_do = new WeakMap(), _HighlightEditor_qo = new WeakMap(), _HighlightEditor_instances = new WeakSet(), _HighlightEditor_Ko = function _HighlightEditor_Ko() { const t = new HighlightOutliner(__classPrivateFieldGet(this, _HighlightEditor_No, "f"), .001); __classPrivateFieldSet(this, _HighlightEditor_Wo, t.getOutlines(), "f"); [this.x, this.y, this.width, this.height] = __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").box; const e = new HighlightOutliner(__classPrivateFieldGet(this, _HighlightEditor_No, "f"), .0025, .001, "ltr" === this._uiManager.direction); __classPrivateFieldSet(this, _HighlightEditor_Ho, e.getOutlines(), "f"); const { firstPoint: i } = __classPrivateFieldGet(this, _HighlightEditor_Wo, "f"); __classPrivateFieldSet(this, _HighlightEditor_So, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height], "f"); const { lastPoint: n } = __classPrivateFieldGet(this, _HighlightEditor_Ho, "f"); __classPrivateFieldSet(this, _HighlightEditor_Co, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height], "f"); }, _HighlightEditor_Xo = function _HighlightEditor_Xo({ highlightOutlines: t, highlightId: e, clipPathId: i }) { __classPrivateFieldSet(this, _HighlightEditor_Wo, t, "f"); __classPrivateFieldSet(this, _HighlightEditor_Ho, t.getNewOutline(__classPrivateFieldGet(this, _HighlightEditor_do, "f") / 2 + 1.5, .0025), "f"); if (e >= 0) {
        __classPrivateFieldSet(this, _HighlightEditor_S, e, "f");
        __classPrivateFieldSet(this, _HighlightEditor_Uo, i, "f");
        this.parent.drawLayer.finalizeDraw(e, { bbox: t.box, path: { d: t.toSVGPath() } });
        __classPrivateFieldSet(this, _HighlightEditor_$o, this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: !0, free: !0 }, bbox: __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").box, path: { d: __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").toSVGPath() } }, !0), "f");
    }
    else if (this.parent) {
        const e = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_S, "f"), { bbox: __classPrivateFieldGet(_z, _z, "m", _HighlightEditor_Jo).call(_z, __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").box, (e - this.rotation + 360) % 360), path: { d: t.toSVGPath() } });
        this.parent.drawLayer.updateProperties(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"), { bbox: __classPrivateFieldGet(_z, _z, "m", _HighlightEditor_Jo).call(_z, __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").box, e), path: { d: __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").toSVGPath() } });
    } const [n, r, s, a] = t.box; switch (this.rotation) {
        case 0:
            this.x = n;
            this.y = r;
            this.width = s;
            this.height = a;
            break;
        case 90: {
            const [t, e] = this.parentDimensions;
            this.x = r;
            this.y = 1 - n;
            this.width = s * e / t;
            this.height = a * t / e;
            break;
        }
        case 180:
            this.x = 1 - n;
            this.y = 1 - r;
            this.width = s;
            this.height = a;
            break;
        case 270: {
            const [t, e] = this.parentDimensions;
            this.x = 1 - r;
            this.y = n;
            this.width = s * e / t;
            this.height = a * t / e;
            break;
        }
    } const { firstPoint: o } = t; __classPrivateFieldSet(this, _HighlightEditor_So, [(o[0] - n) / s, (o[1] - r) / a], "f"); const { lastPoint: l } = __classPrivateFieldGet(this, _HighlightEditor_Ho, "f"); __classPrivateFieldSet(this, _HighlightEditor_Co, [(l[0] - n) / s, (l[1] - r) / a], "f"); }, _HighlightEditor_va = function _HighlightEditor_va(t) { const setColorAndOpacity = (t, e) => { this.color = t; this.opacity = e; this.onUpdatedColor(); }, e = this.color, i = this.opacity; this.addCommands({ cmd: setColorAndOpacity.bind(this, t, _z._defaultOpacity), undo: setColorAndOpacity.bind(this, e, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: f.HIGHLIGHT_COLOR, overwriteIfSameType: !0, keepUndo: !0 }); this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t) }, !0); }, _HighlightEditor_Qo = function _HighlightEditor_Qo(t) { const e = __classPrivateFieldGet(this, _HighlightEditor_do, "f"), setThickness = t => { __classPrivateFieldSet(this, _HighlightEditor_do, t, "f"); __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Zo).call(this, t); }; this.addCommands({ cmd: setThickness.bind(this, t), undo: setThickness.bind(this, e), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: f.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 }); this._reportTelemetry({ action: "thickness_changed", thickness: t }, !0); }, _HighlightEditor_Zo = function _HighlightEditor_Zo(t) { if (__classPrivateFieldGet(this, _HighlightEditor_Vo, "f")) {
        __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_Xo).call(this, { highlightOutlines: __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").getNewOutline(t / 2) });
        this.fixAndSetPosition();
        this.setDims();
    } }, _HighlightEditor_el = function _HighlightEditor_el() { if (null !== __classPrivateFieldGet(this, _HighlightEditor_S, "f") && this.parent) {
        this.parent.drawLayer.remove(__classPrivateFieldGet(this, _HighlightEditor_S, "f"));
        __classPrivateFieldSet(this, _HighlightEditor_S, null, "f");
        this.parent.drawLayer.remove(__classPrivateFieldGet(this, _HighlightEditor_$o, "f"));
        __classPrivateFieldSet(this, _HighlightEditor_$o, null, "f");
    } }, _HighlightEditor_Yo = function _HighlightEditor_Yo(t = this.parent) { var _a, _5; if (null === __classPrivateFieldGet(this, _HighlightEditor_S, "f")) {
        (_a = this, _5 = this, { id: ({ set value(_6) { __classPrivateFieldSet(_a, _HighlightEditor_S, _6, "f"); } }).value, clipPathId: ({ set value(_6) { __classPrivateFieldSet(_5, _HighlightEditor_Uo, _6, "f"); } }).value } = t.drawLayer.draw({ bbox: __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: !0, free: __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") }, path: { d: __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").toSVGPath() } }, !1, !0));
        __classPrivateFieldSet(this, _HighlightEditor_$o, t.drawLayer.drawOutline({ rootClass: { highlightOutline: !0, free: __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") }, bbox: __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").box, path: { d: __classPrivateFieldGet(this, _HighlightEditor_Ho, "f").toSVGPath() } }, __classPrivateFieldGet(this, _HighlightEditor_Vo, "f")), "f");
        __classPrivateFieldGet(this, _HighlightEditor_Go, "f") && (__classPrivateFieldGet(this, _HighlightEditor_Go, "f").style.clipPath = __classPrivateFieldGet(this, _HighlightEditor_Uo, "f"));
    } }, _HighlightEditor_Jo = function _HighlightEditor_Jo([t, e, i, n], r) { switch (r) {
        case 90: return [1 - e - n, t, n, i];
        case 180: return [1 - t - i, 1 - e - n, i, n];
        case 270: return [e, 1 - t - i, n, i];
    } return [t, e, i, n]; }, _HighlightEditor_il = function _HighlightEditor_il(t) { _z._keyboardManager.exec(this, t); }, _HighlightEditor_nl = function _HighlightEditor_nl(t) { if (!__classPrivateFieldGet(this, _HighlightEditor_Oo, "f"))
        return; const e = window.getSelection(); t ? e.setPosition(__classPrivateFieldGet(this, _HighlightEditor_Oo, "f"), __classPrivateFieldGet(this, _HighlightEditor_Lo, "f")) : e.setPosition(__classPrivateFieldGet(this, _HighlightEditor_zo, "f"), __classPrivateFieldGet(this, _HighlightEditor_jo, "f")); }, _HighlightEditor_tl = function _HighlightEditor_tl() { return __classPrivateFieldGet(this, _HighlightEditor_Vo, "f") ? this.rotation : 0; }, _HighlightEditor_rl = function _HighlightEditor_rl() { if (__classPrivateFieldGet(this, _HighlightEditor_Vo, "f"))
        return null; const [t, e] = this.pageDimensions, [i, n] = this.pageTranslation, r = __classPrivateFieldGet(this, _HighlightEditor_No, "f"), s = new Float32Array(8 * r.length); let a = 0; for (const { x: o, y: l, width: h, height: c } of r) {
        const r = o * t + i, d = (1 - l) * e + n;
        s[a] = s[a + 4] = r;
        s[a + 1] = s[a + 3] = d;
        s[a + 2] = s[a + 6] = r + h * t;
        s[a + 5] = s[a + 7] = d - c * e;
        a += 8;
    } return s; }, _HighlightEditor_sl = function _HighlightEditor_sl(t) { return __classPrivateFieldGet(this, _HighlightEditor_Wo, "f").serialize(t, __classPrivateFieldGet(this, _HighlightEditor_instances, "m", _HighlightEditor_tl).call(this)); }, _HighlightEditor_ol = function _HighlightEditor_ol(t, e) { this._freeHighlight.add(e) && t.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } }); }, _HighlightEditor_al = function _HighlightEditor_al(t, e) { this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(e, !1, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" }); this._freeHighlightId = -1; this._freeHighlight = null; this._freeHighlightClipId = ""; }, _HighlightEditor_Za = function _HighlightEditor_Za(t) { const { color: e } = this._initialData; return this.hasEditedComment || t.color.some((t, i) => t !== e[i]); };
    HighlightEditor._defaultColor = null;
    HighlightEditor._defaultOpacity = 1;
    HighlightEditor._defaultThickness = 12;
    HighlightEditor._type = "highlight";
    HighlightEditor._editorType = m.HIGHLIGHT;
    HighlightEditor._freeHighlightId = -1;
    HighlightEditor._freeHighlight = null;
    HighlightEditor._freeHighlightClipId = "";
    class DrawingOptions {
        constructor() {
            _DrawingOptions_ll.set(this, Object.create(null));
        }
        updateProperty(t, e) { this[t] = e; this.updateSVGProperty(t, e); }
        updateProperties(t) { if (t)
            for (const [e, i] of Object.entries(t))
                e.startsWith("_") || this.updateProperty(e, i); }
        updateSVGProperty(t, e) { __classPrivateFieldGet(this, _DrawingOptions_ll, "f")[t] = e; }
        toSVGProperties() { const t = __classPrivateFieldGet(this, _DrawingOptions_ll, "f"); __classPrivateFieldSet(this, _DrawingOptions_ll, Object.create(null), "f"); return { root: t }; }
        reset() { __classPrivateFieldSet(this, _DrawingOptions_ll, Object.create(null), "f"); }
        updateAll(t = this) { this.updateProperties(t); }
        clone() { unreachable("Not implemented"); }
    }
    _DrawingOptions_ll = new WeakMap();
    class DrawingEditor extends AnnotationEditor {
        constructor(t) {
            super(t);
            _DrawingEditor_instances.add(this);
            _DrawingEditor_hl.set(this, null);
            _DrawingEditor_cl.set(this, void 0);
            this._colorPicker = null;
            this._drawId = null;
            __classPrivateFieldSet(this, _DrawingEditor_cl, t.mustBeCommitted || !1, "f");
            this._addOutlines(t);
        }
        onUpdatedColor() { var _a; (_a = this._colorPicker) === null || _a === void 0 ? void 0 : _a.update(this.color); super.onUpdatedColor(); }
        _addOutlines(t) { if (t.drawOutlines) {
            __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_gl).call(this, t);
            __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_Yo).call(this);
        } }
        static _mergeSVGProperties(t, e) { const i = new Set(Object.keys(t)); for (const [n, r] of Object.entries(e))
            i.has(n) ? Object.assign(t[n], r) : t[n] = r; return t; }
        static getDefaultDrawingOptions(t) { unreachable("Not implemented"); }
        static get typesMap() { unreachable("Not implemented"); }
        static get isDrawer() { return !0; }
        static get supportMultipleDrawings() { return !1; }
        static updateDefaultParams(t, e) { const i = this.typesMap.get(t); i && this._defaultDrawingOptions.updateProperty(i, e); if (this._currentParent) {
            __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).updateProperty(i, e);
            this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
        } }
        updateParams(t, e) { const i = this.constructor.typesMap.get(t); i && this._updateProperty(t, i, e); }
        static get defaultPropertiesToUpdate() { const t = [], e = this._defaultDrawingOptions; for (const [i, n] of this.typesMap)
            t.push([i, e[n]]); return t; }
        get propertiesToUpdate() { const t = [], { _drawingOptions: e } = this; for (const [i, n] of this.constructor.typesMap)
            t.push([i, e[n]]); return t; }
        _updateProperty(t, e, i) { const n = this._drawingOptions, r = n[e], setter = i => { var _a; n.updateProperty(e, i); const r = __classPrivateFieldGet(this, _DrawingEditor_hl, "f").updateProperty(e, i); r && __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_fl).call(this, r); (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, n.toSVGProperties()); t === this.colorType && this.onUpdatedColor(); }; this.addCommands({ cmd: setter.bind(this, i), undo: setter.bind(this, r), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: t, overwriteIfSameType: !0, keepUndo: !0 }); }
        _onResizing() { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, _0._mergeSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_hl, "f").getPathResizingSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_bl).call(this)), { bbox: __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_yl).call(this) })); }
        _onResized() { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, _0._mergeSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_hl, "f").getPathResizedSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_bl).call(this)), { bbox: __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_yl).call(this) })); }
        _onTranslating(t, e) { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, { bbox: __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_yl).call(this) }); }
        _onTranslated() { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, _0._mergeSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_hl, "f").getPathTranslatedSVGProperties(__classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_bl).call(this), this.parentDimensions), { bbox: __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_yl).call(this) })); }
        _onStartDragging() { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !0 } }); }
        _onStopDragging() { var _a; (_a = this.parent) === null || _a === void 0 ? void 0 : _a.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !1 } }); }
        commit() { super.commit(); this.disableEditMode(); this.disableEditing(); }
        disableEditing() { super.disableEditing(); this.div.classList.toggle("disabled", !0); }
        enableEditing() { super.enableEditing(); this.div.classList.toggle("disabled", !1); }
        getBaseTranslation() { return [0, 0]; }
        get isResizable() { return !0; }
        onceAdded(t) { this.annotationElementId || this.parent.addUndoableEditor(this); this._isDraggable = !0; if (__classPrivateFieldGet(this, _DrawingEditor_cl, "f")) {
            __classPrivateFieldSet(this, _DrawingEditor_cl, !1, "f");
            this.commit();
            this.parent.setSelected(this);
            t && this.isOnScreen && this.div.focus();
        } }
        remove() { __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_el).call(this); super.remove(); }
        rebuild() { if (this.parent) {
            super.rebuild();
            if (null !== this.div) {
                __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_Yo).call(this);
                __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_fl).call(this, __classPrivateFieldGet(this, _DrawingEditor_hl, "f").box);
                this.isAttachedToDOM || this.parent.add(this);
            }
        } }
        setParent(t) { var _a; let e = !1; if (this.parent && !t) {
            this._uiManager.removeShouldRescale(this);
            __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_el).call(this);
        }
        else if (t) {
            this._uiManager.addShouldRescale(this);
            __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_Yo).call(this, t);
            e = !this.parent && ((_a = this.div) === null || _a === void 0 ? void 0 : _a.classList.contains("selectedEditor"));
        } super.setParent(t); e && this.select(); }
        rotate() { this.parent && this.parent.drawLayer.updateProperties(this._drawId, _0._mergeSVGProperties({ bbox: __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_yl).call(this) }, __classPrivateFieldGet(this, _DrawingEditor_hl, "f").updateRotation((this.parentRotation - this.rotation + 360) % 360))); }
        onScaleChanging() { this.parent && __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_fl).call(this, __classPrivateFieldGet(this, _DrawingEditor_hl, "f").updateParentDimensions(this.parentDimensions, this.parent.scale)); }
        static onScaleChangingWhenDrawing() { }
        render() { if (this.div)
            return this.div; let t, e; if (this._isCopy) {
            t = this.x;
            e = this.y;
        } const i = super.render(); i.classList.add("draw"); const n = document.createElement("div"); i.append(n); n.setAttribute("aria-hidden", "true"); n.className = "internal"; this.setDims(); this._uiManager.addShouldRescale(this); this.disableEditing(); this._isCopy && this._moveAfterPaste(t, e); return i; }
        static createDrawerInstance(t, e, i, n, r) { unreachable("Not implemented"); }
        static startDrawing(t, e, i, n) { var _a; const { target: r, offsetX: s, offsetY: a, pointerId: o, pointerType: l } = n; if (CurrentPointers.isInitializedAndDifferentPointerType(l))
            return; const { viewport: { rotation: h } } = t, { width: c, height: d } = r.getBoundingClientRect(), u = __classPrivateFieldSet(_0, _0, new AbortController, "f", _DrawingEditor_ul), p = t.combinedSignal(u); CurrentPointers.setPointer(l, o); window.addEventListener("pointerup", t => { CurrentPointers.isSamePointerIdOrRemove(t.pointerId) && this._endDraw(t); }, { signal: p }); window.addEventListener("pointercancel", t => { CurrentPointers.isSamePointerIdOrRemove(t.pointerId) && this._currentParent.endDrawingSession(); }, { signal: p }); window.addEventListener("pointerdown", t => { if (CurrentPointers.isSamePointerType(t.pointerType)) {
            CurrentPointers.initializeAndAddPointerId(t.pointerId);
            if (__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).isCancellable()) {
                __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).removeLastElement();
                __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null);
            }
        } }, { capture: !0, passive: !1, signal: p }); window.addEventListener("contextmenu", noContextMenu, { signal: p }); r.addEventListener("pointermove", this._drawMove.bind(this), { signal: p }); r.addEventListener("touchmove", t => { CurrentPointers.isSameTimeStamp(t.timeStamp) && stopEvent(t); }, { signal: p }); t.toggleDrawing(); (_a = e._editorUndoBar) === null || _a === void 0 ? void 0 : _a.hide(); if (__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl))
            t.drawLayer.updateProperties(this._currentDrawId, __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).startNew(s, a, c, d, h));
        else {
            e.updateUIForDefaultProperties(this);
            __classPrivateFieldSet(_0, _0, this.createDrawerInstance(s, a, c, d, h), "f", _DrawingEditor_dl);
            __classPrivateFieldSet(_0, _0, this.getDefaultDrawingOptions(), "f", _DrawingEditor_pl);
            this._currentParent = t;
            ({ id: this._currentDrawId } = t.drawLayer.draw(this._mergeSVGProperties(__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_pl).toSVGProperties(), __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).defaultSVGProperties), !0, !1));
        } }
        static _drawMove(t) { CurrentPointers.isSameTimeStamp(t.timeStamp); if (!__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl))
            return; const { offsetX: e, offsetY: i, pointerId: n } = t; if (CurrentPointers.isSamePointerId(n))
            if (CurrentPointers.isUsingMultiplePointers())
                this._endDraw(t);
            else {
                this._currentParent.drawLayer.updateProperties(this._currentDrawId, __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).add(e, i));
                CurrentPointers.setTimeStamp(t.timeStamp);
                stopEvent(t);
            } }
        static _cleanup(t) { if (t) {
            this._currentDrawId = -1;
            this._currentParent = null;
            __classPrivateFieldSet(_0, _0, null, "f", _DrawingEditor_dl);
            __classPrivateFieldSet(_0, _0, null, "f", _DrawingEditor_pl);
            CurrentPointers.clearTimeStamp();
        } if (__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_ul)) {
            __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_ul).abort();
            __classPrivateFieldSet(_0, _0, null, "f", _DrawingEditor_ul);
            CurrentPointers.clearPointerIds();
        } }
        static _endDraw(t) { const e = this._currentParent; if (e) {
            e.toggleDrawing(!0);
            this._cleanup(!1);
            (t === null || t === void 0 ? void 0 : t.target) === e.div && e.drawLayer.updateProperties(this._currentDrawId, __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).end(t.offsetX, t.offsetY));
            if (this.supportMultipleDrawings) {
                const t = __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl), i = this._currentDrawId, n = t.getLastElement();
                e.addCommands({ cmd: () => { e.drawLayer.updateProperties(i, t.setLastElement(n)); }, undo: () => { e.drawLayer.updateProperties(i, t.removeLastElement()); }, mustExec: !1, type: f.DRAW_STEP });
                return;
            }
            this.endDrawing(!1);
        } }
        static endDrawing(t) { const e = this._currentParent; if (!e)
            return null; e.toggleDrawing(!0); e.cleanUndoStack(f.DRAW_STEP); if (!__classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).isEmpty()) {
            const { pageDimensions: [i, n], scale: r } = e, s = e.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, !1, { drawId: this._currentDrawId, drawOutlines: __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_dl).getOutlines(i * r, n * r, r, this._INNER_MARGIN), drawingOptions: __classPrivateFieldGet(_0, _0, "f", _DrawingEditor_pl), mustBeCommitted: !t });
            this._cleanup(!0);
            return s;
        } e.drawLayer.remove(this._currentDrawId); this._cleanup(!0); return null; }
        createDrawingOptions(t) { }
        static deserializeDraw(t, e, i, n, r, s) { unreachable("Not implemented"); }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { const { rawDims: { pageWidth: n, pageHeight: r, pageX: s, pageY: a } } = e.viewport, o = this.deserializeDraw(s, a, n, r, this._INNER_MARGIN, t), l = yield _super.deserialize.call(this, t, e, i); l.createDrawingOptions(t); __classPrivateFieldGet(l, _DrawingEditor_instances, "m", _DrawingEditor_gl).call(l, { drawOutlines: o }); __classPrivateFieldGet(l, _DrawingEditor_instances, "m", _DrawingEditor_Yo).call(l); l.onScaleChanging(); l.rotate(); return l; });
        }
        serializeDraw(t) { const [e, i] = this.pageTranslation, [n, r] = this.pageDimensions; return __classPrivateFieldGet(this, _DrawingEditor_hl, "f").serialize([e, i, n, r], t); }
        renderAnnotationElement(t) { t.updateEdited({ rect: this.getPDFRect() }); return null; }
        static canCreateNewEmptyEditor() { return !1; }
    }
    _0 = DrawingEditor, _DrawingEditor_hl = new WeakMap(), _DrawingEditor_cl = new WeakMap(), _DrawingEditor_instances = new WeakSet(), _DrawingEditor_gl = function _DrawingEditor_gl({ drawOutlines: t, drawId: e, drawingOptions: i }) { __classPrivateFieldSet(this, _DrawingEditor_hl, t, "f"); this._drawingOptions || (this._drawingOptions = i); this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`); if (e >= 0) {
        this._drawId = e;
        this.parent.drawLayer.finalizeDraw(e, t.defaultProperties);
    }
    else
        this._drawId = __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_ml).call(this, t, this.parent); __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_fl).call(this, t.box); }, _DrawingEditor_ml = function _DrawingEditor_ml(t, e) { const { id: i } = e.drawLayer.draw(_0._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), !1, !1); return i; }, _DrawingEditor_el = function _DrawingEditor_el() { if (null !== this._drawId && this.parent) {
        this.parent.drawLayer.remove(this._drawId);
        this._drawId = null;
        this._drawingOptions.reset();
    } }, _DrawingEditor_Yo = function _DrawingEditor_Yo(t = this.parent) { if (null === this._drawId || this.parent !== t)
        if (null === this._drawId) {
            this._drawingOptions.updateAll();
            this._drawId = __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_ml).call(this, __classPrivateFieldGet(this, _DrawingEditor_hl, "f"), t);
        }
        else
            this.parent.drawLayer.updateParent(this._drawId, t.drawLayer); }, _DrawingEditor_vl = function _DrawingEditor_vl([t, e, i, n]) { const { parentDimensions: [r, s], rotation: a } = this; switch (a) {
        case 90: return [e, 1 - t, i * (s / r), n * (r / s)];
        case 180: return [1 - t, 1 - e, i, n];
        case 270: return [1 - e, t, i * (s / r), n * (r / s)];
        default: return [t, e, i, n];
    } }, _DrawingEditor_bl = function _DrawingEditor_bl() { const { x: t, y: e, width: i, height: n, parentDimensions: [r, s], rotation: a } = this; switch (a) {
        case 90: return [1 - e, t, i * (r / s), n * (s / r)];
        case 180: return [1 - t, 1 - e, i, n];
        case 270: return [e, 1 - t, i * (r / s), n * (s / r)];
        default: return [t, e, i, n];
    } }, _DrawingEditor_fl = function _DrawingEditor_fl(t) { [this.x, this.y, this.width, this.height] = __classPrivateFieldGet(this, _DrawingEditor_instances, "m", _DrawingEditor_vl).call(this, t); if (this.div) {
        this.fixAndSetPosition();
        this.setDims();
    } this._onResized(); }, _DrawingEditor_yl = function _DrawingEditor_yl() { const { x: t, y: e, width: i, height: n, rotation: r, parentRotation: s, parentDimensions: [a, o] } = this; switch ((4 * r + s) / 90) {
        case 1: return [1 - e - n, t, n, i];
        case 2: return [1 - t - i, 1 - e - n, i, n];
        case 3: return [e, 1 - t - i, n, i];
        case 4: return [t, e - i * (a / o), n * (o / a), i * (a / o)];
        case 5: return [1 - e, t, i * (a / o), n * (o / a)];
        case 6: return [1 - t - n * (o / a), 1 - e, n * (o / a), i * (a / o)];
        case 7: return [e - i * (a / o), 1 - t - n * (o / a), i * (a / o), n * (o / a)];
        case 8: return [t - i, e - n, i, n];
        case 9: return [1 - e, t - i, n, i];
        case 10: return [1 - t, 1 - e, i, n];
        case 11: return [e - n, 1 - t, n, i];
        case 12: return [t - n * (o / a), e, n * (o / a), i * (a / o)];
        case 13: return [1 - e - i * (a / o), t - n * (o / a), i * (a / o), n * (o / a)];
        case 14: return [1 - t, 1 - e - i * (a / o), n * (o / a), i * (a / o)];
        case 15: return [e, 1 - t, i * (a / o), n * (o / a)];
        default: return [t, e, i, n];
    } };
    DrawingEditor._currentDrawId = -1;
    DrawingEditor._currentParent = null;
    _DrawingEditor_dl = { value: null };
    _DrawingEditor_ul = { value: null };
    _DrawingEditor_pl = { value: null };
    DrawingEditor._INNER_MARGIN = 3;
    class InkDrawOutliner {
        constructor(t, e, i, n, r, s) {
            _InkDrawOutliner_instances.add(this);
            _InkDrawOutliner_so.set(this, new Float64Array(6));
            _InkDrawOutliner_Sa.set(this, void 0);
            _InkDrawOutliner_wl.set(this, void 0);
            _InkDrawOutliner_Fr.set(this, void 0);
            _InkDrawOutliner_do.set(this, void 0);
            _InkDrawOutliner_uo.set(this, void 0);
            _InkDrawOutliner_Al.set(this, "");
            _InkDrawOutliner_xl.set(this, 0);
            _InkDrawOutliner_Bo.set(this, new InkDrawOutline);
            _InkDrawOutliner_El.set(this, void 0);
            _InkDrawOutliner__l.set(this, void 0);
            __classPrivateFieldSet(this, _InkDrawOutliner_El, i, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner__l, n, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_Fr, r, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_do, s, "f");
            [t, e] = __classPrivateFieldGet(this, _InkDrawOutliner_instances, "m", _InkDrawOutliner_Tl).call(this, t, e);
            const a = __classPrivateFieldSet(this, _InkDrawOutliner_Sa, [NaN, NaN, NaN, NaN, t, e], "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_uo, [t, e], "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_wl, [{ line: a, points: __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f") }], "f");
            __classPrivateFieldGet(this, _InkDrawOutliner_so, "f").set(a, 0);
        }
        updateProperty(t, e) { "stroke-width" === t && (__classPrivateFieldSet(this, _InkDrawOutliner_do, e, "f")); }
        isEmpty() { return !__classPrivateFieldGet(this, _InkDrawOutliner_wl, "f") || 0 === __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").length; }
        isCancellable() { return __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").length <= 10; }
        add(t, e) { [t, e] = __classPrivateFieldGet(this, _InkDrawOutliner_instances, "m", _InkDrawOutliner_Tl).call(this, t, e); const [i, n, r, s] = __classPrivateFieldGet(this, _InkDrawOutliner_so, "f").subarray(2, 6), a = t - r, o = e - s; if (Math.hypot(__classPrivateFieldGet(this, _InkDrawOutliner_El, "f") * a, __classPrivateFieldGet(this, _InkDrawOutliner__l, "f") * o) <= 2)
            return null; __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").push(t, e); if (isNaN(i)) {
            __classPrivateFieldGet(this, _InkDrawOutliner_so, "f").set([r, s, t, e], 2);
            __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").push(NaN, NaN, NaN, NaN, t, e);
            return { path: { d: this.toSVGPath() } };
        } isNaN(__classPrivateFieldGet(this, _InkDrawOutliner_so, "f")[0]) && __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").splice(6, 6); __classPrivateFieldGet(this, _InkDrawOutliner_so, "f").set([i, n, r, s, t, e], 0); __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").push(...Outline.createBezierPoints(i, n, r, s, t, e)); return { path: { d: this.toSVGPath() } }; }
        end(t, e) { const i = this.add(t, e); return i || (2 === __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").length ? { path: { d: this.toSVGPath() } } : null); }
        startNew(t, e, i, n, r) { __classPrivateFieldSet(this, _InkDrawOutliner_El, i, "f"); __classPrivateFieldSet(this, _InkDrawOutliner__l, n, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_Fr, r, "f"); [t, e] = __classPrivateFieldGet(this, _InkDrawOutliner_instances, "m", _InkDrawOutliner_Tl).call(this, t, e); const s = __classPrivateFieldSet(this, _InkDrawOutliner_Sa, [NaN, NaN, NaN, NaN, t, e], "f"); __classPrivateFieldSet(this, _InkDrawOutliner_uo, [t, e], "f"); const a = __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").at(-1); if (a) {
            a.line = new Float32Array(a.line);
            a.points = new Float32Array(a.points);
        } __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").push({ line: s, points: __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f") }); __classPrivateFieldGet(this, _InkDrawOutliner_so, "f").set(s, 0); __classPrivateFieldSet(this, _InkDrawOutliner_xl, 0, "f"); this.toSVGPath(); return null; }
        getLastElement() { return __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").at(-1); }
        setLastElement(t) { if (!__classPrivateFieldGet(this, _InkDrawOutliner_wl, "f"))
            return __classPrivateFieldGet(this, _InkDrawOutliner_Bo, "f").setLastElement(t); __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").push(t); __classPrivateFieldSet(this, _InkDrawOutliner_Sa, t.line, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_uo, t.points, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_xl, 0, "f"); return { path: { d: this.toSVGPath() } }; }
        removeLastElement() { if (!__classPrivateFieldGet(this, _InkDrawOutliner_wl, "f"))
            return __classPrivateFieldGet(this, _InkDrawOutliner_Bo, "f").removeLastElement(); __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").pop(); __classPrivateFieldSet(this, _InkDrawOutliner_Al, "", "f"); for (let t = 0, e = __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").length; t < e; t++) {
            const { line: e, points: i } = __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f")[t];
            __classPrivateFieldSet(this, _InkDrawOutliner_Sa, e, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_uo, i, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_xl, 0, "f");
            this.toSVGPath();
        } return { path: { d: __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f") } }; }
        toSVGPath() { const t = Outline.svgRound(__classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f")[4]), e = Outline.svgRound(__classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f")[5]); if (2 === __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").length) {
            __classPrivateFieldSet(this, _InkDrawOutliner_Al, `${__classPrivateFieldGet(this, _InkDrawOutliner_Al, "f")} M ${t} ${e} Z`, "f");
            return __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f");
        } if (__classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").length <= 6) {
            const i = __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f").lastIndexOf("M");
            __classPrivateFieldSet(this, _InkDrawOutliner_Al, `${__classPrivateFieldGet(this, _InkDrawOutliner_Al, "f").slice(0, i)} M ${t} ${e}`, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_xl, 6, "f");
        } if (4 === __classPrivateFieldGet(this, _InkDrawOutliner_uo, "f").length) {
            const t = Outline.svgRound(__classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f")[10]), e = Outline.svgRound(__classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f")[11]);
            __classPrivateFieldSet(this, _InkDrawOutliner_Al, `${__classPrivateFieldGet(this, _InkDrawOutliner_Al, "f")} L ${t} ${e}`, "f");
            __classPrivateFieldSet(this, _InkDrawOutliner_xl, 12, "f");
            return __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f");
        } const i = []; if (0 === __classPrivateFieldGet(this, _InkDrawOutliner_xl, "f")) {
            i.push(`M ${t} ${e}`);
            __classPrivateFieldSet(this, _InkDrawOutliner_xl, 6, "f");
        } for (let t = __classPrivateFieldGet(this, _InkDrawOutliner_xl, "f"), e = __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").length; t < e; t += 6) {
            const [e, n, r, s, a, o] = __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").slice(t, t + 6).map(Outline.svgRound);
            i.push(`C${e} ${n} ${r} ${s} ${a} ${o}`);
        } __classPrivateFieldSet(this, _InkDrawOutliner_Al, __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f") + i.join(" "), "f"); __classPrivateFieldSet(this, _InkDrawOutliner_xl, __classPrivateFieldGet(this, _InkDrawOutliner_Sa, "f").length, "f"); return __classPrivateFieldGet(this, _InkDrawOutliner_Al, "f"); }
        getOutlines(t, e, i, n) { const r = __classPrivateFieldGet(this, _InkDrawOutliner_wl, "f").at(-1); r.line = new Float32Array(r.line); r.points = new Float32Array(r.points); __classPrivateFieldGet(this, _InkDrawOutliner_Bo, "f").build(__classPrivateFieldGet(this, _InkDrawOutliner_wl, "f"), t, e, i, __classPrivateFieldGet(this, _InkDrawOutliner_Fr, "f"), __classPrivateFieldGet(this, _InkDrawOutliner_do, "f"), n); __classPrivateFieldSet(this, _InkDrawOutliner_so, null, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_Sa, null, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_wl, null, "f"); __classPrivateFieldSet(this, _InkDrawOutliner_Al, null, "f"); return __classPrivateFieldGet(this, _InkDrawOutliner_Bo, "f"); }
        get defaultSVGProperties() { return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: !0 }, bbox: [0, 0, 1, 1] }; }
    }
    _InkDrawOutliner_so = new WeakMap(), _InkDrawOutliner_Sa = new WeakMap(), _InkDrawOutliner_wl = new WeakMap(), _InkDrawOutliner_Fr = new WeakMap(), _InkDrawOutliner_do = new WeakMap(), _InkDrawOutliner_uo = new WeakMap(), _InkDrawOutliner_Al = new WeakMap(), _InkDrawOutliner_xl = new WeakMap(), _InkDrawOutliner_Bo = new WeakMap(), _InkDrawOutliner_El = new WeakMap(), _InkDrawOutliner__l = new WeakMap(), _InkDrawOutliner_instances = new WeakSet(), _InkDrawOutliner_Tl = function _InkDrawOutliner_Tl(t, e) { return Outline._normalizePoint(t, e, __classPrivateFieldGet(this, _InkDrawOutliner_El, "f"), __classPrivateFieldGet(this, _InkDrawOutliner__l, "f"), __classPrivateFieldGet(this, _InkDrawOutliner_Fr, "f")); };
    class InkDrawOutline extends Outline {
        constructor() {
            super(...arguments);
            _InkDrawOutline_instances.add(this);
            _InkDrawOutline_Eo.set(this, void 0);
            _InkDrawOutline_Sl.set(this, 0);
            _InkDrawOutline_io.set(this, void 0);
            _InkDrawOutline_wl.set(this, void 0);
            _InkDrawOutline_El.set(this, void 0);
            _InkDrawOutline__l.set(this, void 0);
            _InkDrawOutline_Cl.set(this, void 0);
            _InkDrawOutline_Fr.set(this, void 0);
            _InkDrawOutline_do.set(this, void 0);
        }
        build(t, e, i, n, r, s, a) { __classPrivateFieldSet(this, _InkDrawOutline_El, e, "f"); __classPrivateFieldSet(this, _InkDrawOutline__l, i, "f"); __classPrivateFieldSet(this, _InkDrawOutline_Cl, n, "f"); __classPrivateFieldSet(this, _InkDrawOutline_Fr, r, "f"); __classPrivateFieldSet(this, _InkDrawOutline_do, s, "f"); __classPrivateFieldSet(this, _InkDrawOutline_io, a !== null && a !== void 0 ? a : 0, "f"); __classPrivateFieldSet(this, _InkDrawOutline_wl, t, "f"); __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Dl).call(this); }
        get thickness() { return __classPrivateFieldGet(this, _InkDrawOutline_do, "f"); }
        setLastElement(t) { __classPrivateFieldGet(this, _InkDrawOutline_wl, "f").push(t); return { path: { d: this.toSVGPath() } }; }
        removeLastElement() { __classPrivateFieldGet(this, _InkDrawOutline_wl, "f").pop(); return { path: { d: this.toSVGPath() } }; }
        toSVGPath() { const t = []; for (const { line: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
            t.push(`M${Outline.svgRound(e[4])} ${Outline.svgRound(e[5])}`);
            if (6 !== e.length)
                if (12 === e.length && isNaN(e[6]))
                    t.push(`L${Outline.svgRound(e[10])} ${Outline.svgRound(e[11])}`);
                else
                    for (let i = 6, n = e.length; i < n; i += 6) {
                        const [n, r, s, a, o, l] = e.subarray(i, i + 6).map(Outline.svgRound);
                        t.push(`C${n} ${r} ${s} ${a} ${o} ${l}`);
                    }
            else
                t.push("Z");
        } return t.join(""); }
        serialize([t, e, i, n], r) { const s = [], a = [], [o, l, h, c] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Pl).call(this); let d, u, p, g, m, f, b, y, v; switch (__classPrivateFieldGet(this, _InkDrawOutline_Fr, "f")) {
            case 0:
                v = Outline._rescale;
                d = t;
                u = e + n;
                p = i;
                g = -n;
                m = t + o * i;
                f = e + (1 - l - c) * n;
                b = t + (o + h) * i;
                y = e + (1 - l) * n;
                break;
            case 90:
                v = Outline._rescaleAndSwap;
                d = t;
                u = e;
                p = i;
                g = n;
                m = t + l * i;
                f = e + o * n;
                b = t + (l + c) * i;
                y = e + (o + h) * n;
                break;
            case 180:
                v = Outline._rescale;
                d = t + i;
                u = e;
                p = -i;
                g = n;
                m = t + (1 - o - h) * i;
                f = e + l * n;
                b = t + (1 - o) * i;
                y = e + (l + c) * n;
                break;
            case 270:
                v = Outline._rescaleAndSwap;
                d = t + i;
                u = e + n;
                p = -i;
                g = -n;
                m = t + (1 - l - c) * i;
                f = e + (1 - o - h) * n;
                b = t + (1 - l) * i;
                y = e + (1 - o) * n;
        } for (const { line: t, points: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
            s.push(v(t, d, u, p, g, r ? new Array(t.length) : null));
            a.push(v(e, d, u, p, g, r ? new Array(e.length) : null));
        } return { lines: s, points: a, rect: [m, f, b, y] }; }
        static deserialize(t, e, i, n, r, { paths: { lines: s, points: a }, rotation: o, thickness: l }) { const h = []; let c, d, u, p, g; switch (o) {
            case 0:
                g = Outline._rescale;
                c = -t / i;
                d = e / n + 1;
                u = 1 / i;
                p = -1 / n;
                break;
            case 90:
                g = Outline._rescaleAndSwap;
                c = -e / n;
                d = -t / i;
                u = 1 / n;
                p = 1 / i;
                break;
            case 180:
                g = Outline._rescale;
                c = t / i + 1;
                d = -e / n;
                u = -1 / i;
                p = 1 / n;
                break;
            case 270:
                g = Outline._rescaleAndSwap;
                c = e / n + 1;
                d = t / i + 1;
                u = -1 / n;
                p = -1 / i;
        } if (!s) {
            s = [];
            for (const t of a) {
                const e = t.length;
                if (2 === e) {
                    s.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1]]));
                    continue;
                }
                if (4 === e) {
                    s.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1], NaN, NaN, NaN, NaN, t[2], t[3]]));
                    continue;
                }
                const i = new Float32Array(3 * (e - 2));
                s.push(i);
                let [n, r, a, o] = t.subarray(0, 4);
                i.set([NaN, NaN, NaN, NaN, n, r], 0);
                for (let s = 4; s < e; s += 2) {
                    const e = t[s], l = t[s + 1];
                    i.set(Outline.createBezierPoints(n, r, a, o, e, l), 3 * (s - 2));
                    [n, r, a, o] = [a, o, e, l];
                }
            }
        } for (let t = 0, e = s.length; t < e; t++)
            h.push({ line: g(s[t].map(t => t !== null && t !== void 0 ? t : NaN), c, d, u, p), points: g(a[t].map(t => t !== null && t !== void 0 ? t : NaN), c, d, u, p) }); const m = new this.prototype.constructor; m.build(h, i, n, 1, o, l, r); return m; }
        get box() { return __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); }
        updateProperty(t, e) { return "stroke-width" === t ? __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Qo).call(this, e) : null; }
        updateParentDimensions([t, e], i) { const [n, r] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this); __classPrivateFieldSet(this, _InkDrawOutline_El, t, "f"); __classPrivateFieldSet(this, _InkDrawOutline__l, e, "f"); __classPrivateFieldSet(this, _InkDrawOutline_Cl, i, "f"); const [s, a] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this), o = s - n, l = a - r, h = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); h[0] -= o; h[1] -= l; h[2] += 2 * o; h[3] += 2 * l; return h; }
        updateRotation(t) { __classPrivateFieldSet(this, _InkDrawOutline_Sl, t, "f"); return { path: { transform: this.rotationTransform } }; }
        get viewBox() { return __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f").map(Outline.svgRound).join(" "); }
        get defaultProperties() { const [t, e] = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t)} ${Outline.svgRound(e)}` } }; }
        get rotationTransform() { const [, , t, e] = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); let i = 0, n = 0, r = 0, s = 0, a = 0, o = 0; switch (__classPrivateFieldGet(this, _InkDrawOutline_Sl, "f")) {
            case 90:
                n = e / t;
                r = -t / e;
                a = t;
                break;
            case 180:
                i = -1;
                s = -1;
                a = t;
                o = e;
                break;
            case 270:
                n = -e / t;
                r = t / e;
                o = e;
                break;
            default: return "";
        } return `matrix(${i} ${n} ${r} ${s} ${Outline.svgRound(a)} ${Outline.svgRound(o)})`; }
        getPathResizingSVGProperties([t, e, i, n]) { const [r, s] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this), [a, o, l, h] = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); if (Math.abs(l - r) <= Outline.PRECISION || Math.abs(h - s) <= Outline.PRECISION) {
            const r = t + i / 2 - (a + l / 2), s = e + n / 2 - (o + h / 2);
            return { path: { "transform-origin": `${Outline.svgRound(t)} ${Outline.svgRound(e)}`, transform: `${this.rotationTransform} translate(${r} ${s})` } };
        } const c = (i - 2 * r) / (l - 2 * r), d = (n - 2 * s) / (h - 2 * s), u = l / i, p = h / n; return { path: { "transform-origin": `${Outline.svgRound(a)} ${Outline.svgRound(o)}`, transform: `${this.rotationTransform} scale(${u} ${p}) translate(${Outline.svgRound(r)} ${Outline.svgRound(s)}) scale(${c} ${d}) translate(${Outline.svgRound(-r)} ${Outline.svgRound(-s)})` } }; }
        getPathResizedSVGProperties([t, e, i, n]) { const [r, s] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this), a = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"), [o, l, h, c] = a; a[0] = t; a[1] = e; a[2] = i; a[3] = n; if (Math.abs(h - r) <= Outline.PRECISION || Math.abs(c - s) <= Outline.PRECISION) {
            const r = t + i / 2 - (o + h / 2), s = e + n / 2 - (l + c / 2);
            for (const { line: t, points: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
                Outline._translate(t, r, s, t);
                Outline._translate(e, r, s, e);
            }
            return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t)} ${Outline.svgRound(e)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
        } const d = (i - 2 * r) / (h - 2 * r), u = (n - 2 * s) / (c - 2 * s), p = -d * (o + r) + t + r, g = -u * (l + s) + e + s; if (1 !== d || 1 !== u || 0 !== p || 0 !== g)
            for (const { line: t, points: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
                Outline._rescale(t, p, g, d, u, t);
                Outline._rescale(e, p, g, d, u, e);
            } return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t)} ${Outline.svgRound(e)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } }; }
        getPathTranslatedSVGProperties([t, e], i) { const [n, r] = i, s = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"), a = t - s[0], o = e - s[1]; if (__classPrivateFieldGet(this, _InkDrawOutline_El, "f") === n && __classPrivateFieldGet(this, _InkDrawOutline__l, "f") === r)
            for (const { line: t, points: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
                Outline._translate(t, a, o, t);
                Outline._translate(e, a, o, e);
            }
        else {
            const t = __classPrivateFieldGet(this, _InkDrawOutline_El, "f") / n, e = __classPrivateFieldGet(this, _InkDrawOutline__l, "f") / r;
            __classPrivateFieldSet(this, _InkDrawOutline_El, n, "f");
            __classPrivateFieldSet(this, _InkDrawOutline__l, r, "f");
            for (const { line: i, points: n } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
                Outline._rescale(i, a, o, t, e, i);
                Outline._rescale(n, a, o, t, e, n);
            }
            s[2] *= t;
            s[3] *= e;
        } s[0] = t; s[1] = e; return { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t)} ${Outline.svgRound(e)}` } }; }
        get defaultSVGProperties() { const t = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); return { root: { viewBox: this.viewBox }, rootClass: { draw: !0 }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t[0])} ${Outline.svgRound(t[1])}`, transform: this.rotationTransform || null }, bbox: t }; }
    }
    _InkDrawOutline_Eo = new WeakMap(), _InkDrawOutline_Sl = new WeakMap(), _InkDrawOutline_io = new WeakMap(), _InkDrawOutline_wl = new WeakMap(), _InkDrawOutline_El = new WeakMap(), _InkDrawOutline__l = new WeakMap(), _InkDrawOutline_Cl = new WeakMap(), _InkDrawOutline_Fr = new WeakMap(), _InkDrawOutline_do = new WeakMap(), _InkDrawOutline_instances = new WeakSet(), _InkDrawOutline_Ml = function _InkDrawOutline_Ml(t = __classPrivateFieldGet(this, _InkDrawOutline_do, "f")) { const e = __classPrivateFieldGet(this, _InkDrawOutline_io, "f") + t / 2 * __classPrivateFieldGet(this, _InkDrawOutline_Cl, "f"); return __classPrivateFieldGet(this, _InkDrawOutline_Fr, "f") % 180 == 0 ? [e / __classPrivateFieldGet(this, _InkDrawOutline_El, "f"), e / __classPrivateFieldGet(this, _InkDrawOutline__l, "f")] : [e / __classPrivateFieldGet(this, _InkDrawOutline__l, "f"), e / __classPrivateFieldGet(this, _InkDrawOutline_El, "f")]; }, _InkDrawOutline_Pl = function _InkDrawOutline_Pl() { const [t, e, i, n] = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"), [r, s] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this, 0); return [t + r, e + s, i - 2 * r, n - 2 * s]; }, _InkDrawOutline_Dl = function _InkDrawOutline_Dl() { const t = __classPrivateFieldSet(this, _InkDrawOutline_Eo, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]), "f"); for (const { line: e } of __classPrivateFieldGet(this, _InkDrawOutline_wl, "f")) {
        if (e.length <= 12) {
            for (let i = 4, n = e.length; i < n; i += 6)
                Util.pointBoundingBox(e[i], e[i + 1], t);
            continue;
        }
        let i = e[4], n = e[5];
        for (let r = 6, s = e.length; r < s; r += 6) {
            const [s, a, o, l, h, c] = e.subarray(r, r + 6);
            Util.bezierBoundingBox(i, n, s, a, o, l, h, c, t);
            i = h;
            n = c;
        }
    } const [e, i] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this); t[0] = MathClamp(t[0] - e, 0, 1); t[1] = MathClamp(t[1] - i, 0, 1); t[2] = MathClamp(t[2] + e, 0, 1); t[3] = MathClamp(t[3] + i, 0, 1); t[2] -= t[0]; t[3] -= t[1]; }, _InkDrawOutline_Qo = function _InkDrawOutline_Qo(t) { const [e, i] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this); __classPrivateFieldSet(this, _InkDrawOutline_do, t, "f"); const [n, r] = __classPrivateFieldGet(this, _InkDrawOutline_instances, "m", _InkDrawOutline_Ml).call(this), [s, a] = [n - e, r - i], o = __classPrivateFieldGet(this, _InkDrawOutline_Eo, "f"); o[0] -= s; o[1] -= a; o[2] += 2 * s; o[3] += 2 * a; return o; };
    class InkDrawingOptions extends DrawingOptions {
        constructor(t) { super(); this._viewParameters = t; super.updateProperties({ fill: "none", stroke: AnnotationEditor._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 }); }
        updateSVGProperty(t, e) { if ("stroke-width" === t) {
            e !== null && e !== void 0 ? e : (e = this["stroke-width"]);
            e *= this._viewParameters.realScale;
        } super.updateSVGProperty(t, e); }
        clone() { const t = new InkDrawingOptions(this._viewParameters); t.updateAll(this); return t; }
    }
    class InkEditor extends DrawingEditor {
        constructor(t) {
            super(Object.assign(Object.assign({}, t), { name: "inkEditor" }));
            _InkEditor_instances.add(this);
            this._willKeepAspectRatio = !0;
            this.defaultL10nId = "pdfjs-editor-ink-editor";
        }
        static initialize(t, e) { AnnotationEditor.initialize(t, e); this._defaultDrawingOptions = new InkDrawingOptions(e.viewParameters); }
        static getDefaultDrawingOptions(t) { const e = this._defaultDrawingOptions.clone(); e.updateProperties(t); return e; }
        static get supportMultipleDrawings() { return !0; }
        static get typesMap() { return shadow(this, "typesMap", new Map([[f.INK_THICKNESS, "stroke-width"], [f.INK_COLOR, "stroke"], [f.INK_OPACITY, "stroke-opacity"]])); }
        static createDrawerInstance(t, e, i, n, r) { return new InkDrawOutliner(t, e, i, n, r, this._defaultDrawingOptions["stroke-width"]); }
        static deserializeDraw(t, e, i, n, r, s) { return InkDrawOutline.deserialize(t, e, i, n, r, s); }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { let n = null; if (t instanceof InkAnnotationElement) {
                const { data: { inkLists: e, rect: i, rotation: r, id: s, color: a, opacity: o, borderStyle: { rawWidth: l }, popupRef: h, richText: c, contentsObj: d, creationDate: u, modificationDate: p }, parent: { page: { pageNumber: g } } } = t;
                n = t = { annotationType: m.INK, color: Array.from(a), thickness: l, opacity: o, paths: { points: e }, boxes: null, pageIndex: g - 1, rect: i.slice(0), rotation: r, annotationElementId: s, id: s, deleted: !1, popupRef: h, richText: c, comment: (d === null || d === void 0 ? void 0 : d.str) || null, creationDate: u, modificationDate: p };
            } const r = yield _super.deserialize.call(this, t, e, i); r._initialData = n; t.comment && r.setCommentData(t); return r; });
        }
        get toolbarButtons() { this._colorPicker || (this._colorPicker = new BasicColorPicker(this)); return [["colorPicker", this._colorPicker]]; }
        get colorType() { return f.INK_COLOR; }
        get color() { return this._drawingOptions.stroke; }
        get opacity() { return this._drawingOptions["stroke-opacity"]; }
        onScaleChanging() { if (!this.parent)
            return; super.onScaleChanging(); const { _drawId: t, _drawingOptions: e, parent: i } = this; e.updateSVGProperty("stroke-width"); i.drawLayer.updateProperties(t, e.toSVGProperties()); }
        static onScaleChangingWhenDrawing() { const t = this._currentParent; if (t) {
            super.onScaleChangingWhenDrawing();
            this._defaultDrawingOptions.updateSVGProperty("stroke-width");
            t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
        } }
        createDrawingOptions({ color: t, thickness: e, opacity: i }) { this._drawingOptions = InkEditor.getDefaultDrawingOptions({ stroke: Util.makeHexColor(...t), "stroke-width": e, "stroke-opacity": i }); }
        serialize(t = !1) { if (this.isEmpty())
            return null; if (this.deleted)
            return this.serializeDeleted(); const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { stroke: n, "stroke-opacity": r, "stroke-width": s } } = this, a = Object.assign(super.serialize(t), { color: AnnotationEditor._colorManager.convert(n), opacity: r, thickness: s, paths: { lines: e, points: i } }); this.addComment(a); if (t) {
            a.isCopy = !0;
            return a;
        } if (this.annotationElementId && !__classPrivateFieldGet(this, _InkEditor_instances, "m", _InkEditor_Za).call(this, a))
            return null; a.id = this.annotationElementId; return a; }
        renderAnnotationElement(t) { if (this.deleted) {
            t.hide();
            return null;
        } const { points: e, rect: i } = this.serializeDraw(!1); t.updateEdited({ rect: i, thickness: this._drawingOptions["stroke-width"], points: e, popup: this.comment }); return null; }
    }
    _InkEditor_instances = new WeakSet(), _InkEditor_Za = function _InkEditor_Za(t) { const { color: e, thickness: i, opacity: n, pageIndex: r } = this._initialData; return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((t, i) => t !== e[i]) || t.thickness !== i || t.opacity !== n || t.pageIndex !== r; };
    InkEditor._type = "ink";
    InkEditor._editorType = m.INK;
    InkEditor._defaultDrawingOptions = null;
    class ContourDrawOutline extends InkDrawOutline {
        toSVGPath() { let t = super.toSVGPath(); t.endsWith("Z") || (t += "Z"); return t; }
    }
    __webpack_require__(5213);
    class SignatureExtractor {
        static extractContoursFromText(t, { fontFamily: e, fontStyle: i, fontWeight: n }, r, s, a, o) { let l = new OffscreenCanvas(1, 1), h = l.getContext("2d", { alpha: !1 }); const c = h.font = `${i} ${n} 200px ${e}`, { actualBoundingBoxLeft: d, actualBoundingBoxRight: u, actualBoundingBoxAscent: p, actualBoundingBoxDescent: g, fontBoundingBoxAscent: m, fontBoundingBoxDescent: f, width: b } = h.measureText(t), y = 1.5, v = Math.ceil(Math.max(Math.abs(d) + Math.abs(u) || 0, b) * y), w = Math.ceil(Math.max(Math.abs(p) + Math.abs(g) || 200, Math.abs(m) + Math.abs(f) || 200) * y); l = new OffscreenCanvas(v, w); h = l.getContext("2d", { alpha: !0, willReadFrequently: !0 }); h.font = c; h.filter = "grayscale(1)"; h.fillStyle = "white"; h.fillRect(0, 0, v, w); h.fillStyle = "black"; h.fillText(t, .5 * v / 2, 1.5 * w / 2); const A = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_zl).call(this, h.getImageData(0, 0, v, w).data), x = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Hl).call(this, A), E = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_jl).call(this, x), _ = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ol).call(this, A, v, w, E); return this.processDrawnLines({ lines: { curves: _, width: v, height: w }, pageWidth: r, pageHeight: s, rotation: a, innerMargin: o, mustSmooth: !0, areContours: !0 }); }
        static process(t, e, i, n, r) { const [s, a, o] = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Gl).call(this, t), [l, h] = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ul).call(this, s, a, o, Math.hypot(a, o) * __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_kl).sigmaSFactor, __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_kl).sigmaR, __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_kl).kernelSize), c = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_jl).call(this, h), d = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ol).call(this, l, a, o, c); return this.processDrawnLines({ lines: { curves: d, width: a, height: o }, pageWidth: e, pageHeight: i, rotation: n, innerMargin: r, mustSmooth: !0, areContours: !0 }); }
        static processDrawnLines({ lines: t, pageWidth: e, pageHeight: i, rotation: n, innerMargin: r, mustSmooth: s, areContours: a }) { var _a; n % 180 != 0 && ([e, i] = [i, e]); const { curves: o, width: l, height: h } = t, c = (_a = t.thickness) !== null && _a !== void 0 ? _a : 0, d = [], u = Math.min(e / l, i / h), p = u / e, g = u / i, m = []; for (const { points: t } of o) {
            const e = s ? __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Nl).call(this, t) : t;
            if (!e)
                continue;
            m.push(e);
            const i = e.length, n = new Float32Array(i), r = new Float32Array(3 * (2 === i ? 2 : i - 2));
            d.push({ line: r, points: n });
            if (2 === i) {
                n[0] = e[0] * p;
                n[1] = e[1] * g;
                r.set([NaN, NaN, NaN, NaN, n[0], n[1]], 0);
                continue;
            }
            let [a, o, l, h] = e;
            a *= p;
            o *= g;
            l *= p;
            h *= g;
            n.set([a, o, l, h], 0);
            r.set([NaN, NaN, NaN, NaN, a, o], 0);
            for (let t = 4; t < i; t += 2) {
                const i = n[t] = e[t] * p, s = n[t + 1] = e[t + 1] * g;
                r.set(Outline.createBezierPoints(a, o, l, h, i, s), 3 * (t - 2));
                [a, o, l, h] = [l, h, i, s];
            }
        } if (0 === d.length)
            return null; const f = a ? new ContourDrawOutline : new InkDrawOutline; f.build(d, e, i, 1, n, a ? 0 : c, r); return { outline: f, newCurves: m, areContours: a, thickness: c, width: l, height: h }; }
        static compressSignature(_a) {
            return __awaiter(this, arguments, void 0, function* ({ outlines: t, areContours: e, thickness: i, width: n, height: r }) { let s, a = 1 / 0, o = -1 / 0, l = 0; for (const e of t) {
                l += e.length;
                for (let t = 2, i = e.length; t < i; t++) {
                    const i = e[t] - e[t - 2];
                    a = Math.min(a, i);
                    o = Math.max(o, i);
                }
            } s = a >= -128 && o <= 127 ? Int8Array : a >= -32768 && o <= 32767 ? Int16Array : Int32Array; const h = t.length, c = 8 + 3 * h, d = new Uint32Array(c); let u = 0; d[u++] = c * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * h) * s.BYTES_PER_ELEMENT; d[u++] = 0; d[u++] = n; d[u++] = r; d[u++] = e ? 0 : 1; d[u++] = Math.max(0, Math.floor(i !== null && i !== void 0 ? i : 0)); d[u++] = h; d[u++] = s.BYTES_PER_ELEMENT; for (const e of t) {
                d[u++] = e.length - 2;
                d[u++] = e[0];
                d[u++] = e[1];
            } const p = new CompressionStream("deflate-raw"), g = p.writable.getWriter(); yield g.ready; g.write(d); const m = s.prototype.constructor; for (const e of t) {
                const t = new m(e.length - 2);
                for (let i = 2, n = e.length; i < n; i++)
                    t[i - 2] = e[i] - e[i - 2];
                g.write(t);
            } g.close(); return (yield new Response(p.readable).bytes()).toBase64(); });
        }
        static decompressSignature(t) {
            return __awaiter(this, void 0, void 0, function* () { var _a, e_3, _5, _6; try {
                const e = Uint8Array.fromBase64(t), { readable: i, writable: n } = new DecompressionStream("deflate-raw"), r = n.getWriter();
                yield r.ready;
                r.write(e).then(() => __awaiter(this, void 0, void 0, function* () { yield r.ready; yield r.close(); })).catch(() => { });
                let s = null, a = 0;
                try {
                    for (var _7 = true, i_1 = __asyncValues(i), i_1_1; i_1_1 = yield i_1.next(), _a = i_1_1.done, !_a; _7 = true) {
                        _6 = i_1_1.value;
                        _7 = false;
                        const t = _6;
                        s || (s = new Uint8Array(new Uint32Array(t.buffer, 0, 4)[0]));
                        s.set(t, a);
                        a += t.length;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (!_7 && !_a && (_5 = i_1.return)) yield _5.call(i_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                const o = new Uint32Array(s.buffer, 0, s.length >> 2), l = o[1];
                if (0 !== l)
                    throw new Error(`Invalid version: ${l}`);
                const h = o[2], c = o[3], d = 0 === o[4], u = o[5], p = o[6], g = o[7], m = [], f = (8 + 3 * p) * Uint32Array.BYTES_PER_ELEMENT;
                let b;
                switch (g) {
                    case Int8Array.BYTES_PER_ELEMENT:
                        b = new Int8Array(s.buffer, f);
                        break;
                    case Int16Array.BYTES_PER_ELEMENT:
                        b = new Int16Array(s.buffer, f);
                        break;
                    case Int32Array.BYTES_PER_ELEMENT: b = new Int32Array(s.buffer, f);
                }
                a = 0;
                for (let t = 0; t < p; t++) {
                    const e = o[3 * t + 8], i = new Float32Array(e + 2);
                    m.push(i);
                    for (let e = 0; e < 2; e++)
                        i[e] = o[3 * t + 8 + e + 1];
                    for (let t = 0; t < e; t++)
                        i[t + 2] = i[t] + b[a++];
                }
                return { areContours: d, thickness: u, outlines: m, width: h, height: c };
            }
            catch (t) {
                warn(`decompressSignature: ${t}`);
                return null;
            } });
        }
    }
    _1 = SignatureExtractor, _SignatureExtractor_Il = function _SignatureExtractor_Il(t, e, i, n) { n -= e; return 0 === (i -= t) ? n > 0 ? 0 : 4 : 1 === i ? n + 6 : 2 - n; }, _SignatureExtractor_Rl = function _SignatureExtractor_Rl(t, e, i, n, r, s, a) { const o = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Il).call(this, i, n, r, s); for (let r = 0; r < 8; r++) {
        const s = (-r + o - a + 16) % 8;
        if (0 !== t[(i + __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * s]) * e + (n + __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * s + 1])])
            return s;
    } return -1; }, _SignatureExtractor_Bl = function _SignatureExtractor_Bl(t, e, i, n, r, s, a) { const o = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Il).call(this, i, n, r, s); for (let r = 0; r < 8; r++) {
        const s = (r + o + a + 16) % 8;
        if (0 !== t[(i + __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * s]) * e + (n + __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * s + 1])])
            return s;
    } return -1; }, _SignatureExtractor_Ol = function _SignatureExtractor_Ol(t, e, i, n) { const r = t.length, s = new Int32Array(r); for (let e = 0; e < r; e++)
        s[e] = t[e] <= n ? 1 : 0; for (let t = 1; t < i - 1; t++)
        s[t * e] = s[t * e + e - 1] = 0; for (let t = 0; t < e; t++)
        s[t] = s[e * i - 1 - t] = 0; let a, o = 1; const l = []; for (let t = 1; t < i - 1; t++) {
        a = 1;
        for (let i = 1; i < e - 1; i++) {
            const n = t * e + i, r = s[n];
            if (0 === r)
                continue;
            let h = t, c = i;
            if (1 === r && 0 === s[n - 1]) {
                o += 1;
                c -= 1;
            }
            else {
                if (!(r >= 1 && 0 === s[n + 1])) {
                    1 !== r && (a = Math.abs(r));
                    continue;
                }
                o += 1;
                c += 1;
                r > 1 && (a = r);
            }
            const d = [i, t], u = c === i + 1, p = { isHole: u, points: d, id: o, parent: 0 };
            l.push(p);
            let g;
            for (const t of l)
                if (t.id === a) {
                    g = t;
                    break;
                }
            g ? g.isHole ? p.parent = u ? g.parent : a : p.parent = u ? a : g.parent : p.parent = u ? a : 0;
            const m = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Rl).call(this, s, e, t, i, h, c, 0);
            if (-1 === m) {
                s[n] = -o;
                1 !== s[n] && (a = Math.abs(s[n]));
                continue;
            }
            let f = __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * m], b = __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * m + 1];
            const y = t + f, v = i + b;
            h = y;
            c = v;
            let w = t, A = i;
            for (;;) {
                const r = __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Bl).call(this, s, e, w, A, h, c, 1);
                f = __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * r];
                b = __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_Fl)[2 * r + 1];
                const l = w + f, u = A + b;
                d.push(u, l);
                const p = w * e + A;
                0 === s[p + 1] ? s[p] = -o : 1 === s[p] && (s[p] = o);
                if (l === t && u === i && w === y && A === v) {
                    1 !== s[n] && (a = Math.abs(s[n]));
                    break;
                }
                h = w;
                c = A;
                w = l;
                A = u;
            }
        }
    } return l; }, _SignatureExtractor_Ll = function _SignatureExtractor_Ll(t, e, i, n) { if (i - e <= 4) {
        for (let r = e; r < i - 2; r += 2)
            n.push(t[r], t[r + 1]);
        return;
    } const r = t[e], s = t[e + 1], a = t[i - 4] - r, o = t[i - 3] - s, l = Math.hypot(a, o), h = a / l, c = o / l, d = h * s - c * r, u = o / a, p = 1 / l, g = Math.atan(u), m = Math.cos(g), f = Math.sin(g), b = p * (Math.abs(m) + Math.abs(f)), y = p * (1 - b + Math.pow(b, 2)), v = Math.max(Math.atan(Math.abs(f + m) * y), Math.atan(Math.abs(f - m) * y)); let w = 0, A = e; for (let n = e + 2; n < i - 2; n += 2) {
        const e = Math.abs(d - h * t[n + 1] + c * t[n]);
        if (e > w) {
            A = n;
            w = e;
        }
    } if (w > Math.pow((l * v), 2)) {
        __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ll).call(this, t, e, A + 2, n);
        __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ll).call(this, t, A, i, n);
    }
    else
        n.push(r, s); }, _SignatureExtractor_Nl = function _SignatureExtractor_Nl(t) { const e = [], i = t.length; __classPrivateFieldGet(this, _1, "m", _SignatureExtractor_Ll).call(this, t, 0, i, e); e.push(t[i - 2], t[i - 1]); return e.length <= 4 ? null : e; }, _SignatureExtractor_Ul = function _SignatureExtractor_Ul(t, e, i, n, r, s) { const a = new Float32Array(Math.pow(s, 2)), o = -2 * Math.pow(n, 2), l = s >> 1; for (let t = 0; t < s; t++) {
        const e = Math.pow((t - l), 2);
        for (let i = 0; i < s; i++)
            a[t * s + i] = Math.exp((e + Math.pow((i - l), 2)) / o);
    } const h = new Float32Array(256), c = -2 * Math.pow(r, 2); for (let t = 0; t < 256; t++)
        h[t] = Math.exp(Math.pow(t, 2) / c); const d = t.length, u = new Uint8Array(d), p = new Uint32Array(256); for (let n = 0; n < i; n++)
        for (let r = 0; r < e; r++) {
            const o = n * e + r, c = t[o];
            let d = 0, g = 0;
            for (let o = 0; o < s; o++) {
                const u = n + o - l;
                if (!(u < 0 || u >= i))
                    for (let i = 0; i < s; i++) {
                        const n = r + i - l;
                        if (n < 0 || n >= e)
                            continue;
                        const p = t[u * e + n], m = a[o * s + i] * h[Math.abs(p - c)];
                        d += p * m;
                        g += m;
                    }
            }
            p[u[o] = Math.round(d / g)]++;
        } return [u, p]; }, _SignatureExtractor_Hl = function _SignatureExtractor_Hl(t) { const e = new Uint32Array(256); for (const i of t)
        e[i]++; return e; }, _SignatureExtractor_zl = function _SignatureExtractor_zl(t) { const e = t.length, i = new Uint8ClampedArray(e >> 2); let n = -1 / 0, r = 1 / 0; for (let e = 0, s = i.length; e < s; e++) {
        const s = i[e] = t[e << 2];
        n = Math.max(n, s);
        r = Math.min(r, s);
    } const s = 255 / (n - r); for (let t = 0, e = i.length; t < e; t++)
        i[t] = (i[t] - r) * s; return i; }, _SignatureExtractor_jl = function _SignatureExtractor_jl(t) { let e, i = -1 / 0, n = -1 / 0; const r = t.findIndex(t => 0 !== t); let s = r, a = r; for (e = r; e < 256; e++) {
        const r = t[e];
        if (r > i) {
            if (e - s > n) {
                n = e - s;
                a = e - 1;
            }
            i = r;
            s = e;
        }
    } for (e = a - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
        ; return e; }, _SignatureExtractor_Gl = function _SignatureExtractor_Gl(t) { const e = t, { width: i, height: n } = t, { maxDim: r } = __classPrivateFieldGet(this, _1, "f", _SignatureExtractor_kl); let s = i, a = n; if (i > r || n > r) {
        let o = i, l = n, h = Math.log2(Math.max(i, n) / r);
        const c = Math.floor(h);
        h = h === c ? c - 1 : c;
        for (let i = 0; i < h; i++) {
            s = Math.ceil(o / 2);
            a = Math.ceil(l / 2);
            const i = new OffscreenCanvas(s, a);
            i.getContext("2d").drawImage(t, 0, 0, o, l, 0, 0, s, a);
            o = s;
            l = a;
            t !== e && t.close();
            t = i.transferToImageBitmap();
        }
        const d = Math.min(r / s, r / a);
        s = Math.round(s * d);
        a = Math.round(a * d);
    } const o = new OffscreenCanvas(s, a).getContext("2d", { willReadFrequently: !0 }); o.fillStyle = "white"; o.fillRect(0, 0, s, a); o.filter = "grayscale(1)"; o.drawImage(t, 0, 0, t.width, t.height, 0, 0, s, a); const l = o.getImageData(0, 0, s, a).data; return [__classPrivateFieldGet(this, _1, "m", _SignatureExtractor_zl).call(this, l), s, a]; };
    _SignatureExtractor_kl = { value: { maxDim: 512, sigmaSFactor: .02, sigmaR: 25, kernelSize: 16 } };
    _SignatureExtractor_Fl = { value: new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]) };
    class SignatureOptions extends DrawingOptions {
        constructor() { super(); super.updateProperties({ fill: AnnotationEditor._defaultLineColor, "stroke-width": 0 }); }
        clone() { const t = new SignatureOptions; t.updateAll(this); return t; }
    }
    class DrawnSignatureOptions extends InkDrawingOptions {
        constructor(t) { super(t); super.updateProperties({ stroke: AnnotationEditor._defaultLineColor, "stroke-width": 1 }); }
        clone() { const t = new DrawnSignatureOptions(this._viewParameters); t.updateAll(this); return t; }
    }
    class SignatureEditor extends DrawingEditor {
        constructor(t) {
            super(Object.assign(Object.assign({}, t), { mustBeCommitted: !0, name: "signatureEditor" }));
            _SignatureEditor_Wl.set(this, !1);
            _SignatureEditor_Vl.set(this, null);
            _SignatureEditor_$l.set(this, null);
            _SignatureEditor_ql.set(this, null);
            this._willKeepAspectRatio = !0;
            __classPrivateFieldSet(this, _SignatureEditor_$l, t.signatureData || null, "f");
            __classPrivateFieldSet(this, _SignatureEditor_Vl, null, "f");
            this.defaultL10nId = "pdfjs-editor-signature-editor1";
        }
        static initialize(t, e) { AnnotationEditor.initialize(t, e); this._defaultDrawingOptions = new SignatureOptions; this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(e.viewParameters); }
        static getDefaultDrawingOptions(t) { const e = this._defaultDrawingOptions.clone(); e.updateProperties(t); return e; }
        static get supportMultipleDrawings() { return !1; }
        static get typesMap() { return shadow(this, "typesMap", new Map); }
        static get isDrawer() { return !1; }
        get telemetryFinalData() { return { type: "signature", hasDescription: !!__classPrivateFieldGet(this, _SignatureEditor_Vl, "f") }; }
        static computeTelemetryFinalData(t) { var _a, _5; const e = t.get("hasDescription"); return { hasAltText: (_a = e.get(!0)) !== null && _a !== void 0 ? _a : 0, hasNoAltText: (_5 = e.get(!1)) !== null && _5 !== void 0 ? _5 : 0 }; }
        get isResizable() { return !0; }
        onScaleChanging() { null !== this._drawId && super.onScaleChanging(); }
        render() { if (this.div)
            return this.div; let t, e; const { _isCopy: i } = this; if (i) {
            this._isCopy = !1;
            t = this.x;
            e = this.y;
        } super.render(); if (null === this._drawId)
            if (__classPrivateFieldGet(this, _SignatureEditor_$l, "f")) {
                const { lines: t, mustSmooth: e, areContours: i, description: n, uuid: r, heightInPage: s } = __classPrivateFieldGet(this, _SignatureEditor_$l, "f"), { rawDims: { pageWidth: a, pageHeight: o }, rotation: l } = this.parent.viewport, h = SignatureExtractor.processDrawnLines({ lines: t, pageWidth: a, pageHeight: o, rotation: l, innerMargin: SignatureEditor._INNER_MARGIN, mustSmooth: e, areContours: i });
                this.addSignature(h, s, n, r);
            }
            else {
                this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" }));
                this.div.hidden = !0;
                this._uiManager.getSignature(this);
            }
        else
            this.div.setAttribute("data-l10n-args", JSON.stringify({ description: __classPrivateFieldGet(this, _SignatureEditor_Vl, "f") || "" })); if (i) {
            this._isCopy = !0;
            this._moveAfterPaste(t, e);
        } return this.div; }
        setUuid(t) { __classPrivateFieldSet(this, _SignatureEditor_ql, t, "f"); this.addEditToolbar(); }
        getUuid() { return __classPrivateFieldGet(this, _SignatureEditor_ql, "f"); }
        get description() { return __classPrivateFieldGet(this, _SignatureEditor_Vl, "f"); }
        set description(t) { __classPrivateFieldSet(this, _SignatureEditor_Vl, t, "f"); if (this.div) {
            this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t }));
            super.addEditToolbar().then(e => { e === null || e === void 0 ? void 0 : e.updateEditSignatureButton(t); });
        } }
        getSignaturePreview() { const { newCurves: t, areContours: e, thickness: i, width: n, height: r } = __classPrivateFieldGet(this, _SignatureEditor_$l, "f"), s = Math.max(n, r); return { areContours: e, outline: SignatureExtractor.processDrawnLines({ lines: { curves: t.map(t => ({ points: t })), thickness: i, width: n, height: r }, pageWidth: s, pageHeight: s, rotation: 0, innerMargin: 0, mustSmooth: !1, areContours: e }).outline }; }
        get toolbarButtons() { return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons; }
        addSignature(t, e, i, n) { const { x: r, y: s } = this, { outline: a } = __classPrivateFieldSet(this, _SignatureEditor_$l, t, "f"); __classPrivateFieldSet(this, _SignatureEditor_Wl, a instanceof ContourDrawOutline, "f"); this.description = i; let o; if (__classPrivateFieldGet(this, _SignatureEditor_Wl, "f"))
            o = SignatureEditor.getDefaultDrawingOptions();
        else {
            o = SignatureEditor._defaultDrawnSignatureOptions.clone();
            o.updateProperties({ "stroke-width": a.thickness });
        } this._addOutlines({ drawOutlines: a, drawingOptions: o }); const [, l] = this.pageDimensions; let h = e / l; h = h >= 1 ? .5 : h; this.width *= h / this.height; if (this.width >= 1) {
            h *= .9 / this.width;
            this.width = .9;
        } this.height = h; this.setDims(); this.x = r; this.y = s; this.center(); this._onResized(); this.onScaleChanging(); this.rotate(); this._uiManager.addToAnnotationStorage(this); this.setUuid(n); this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!n, hasDescription: !!i } }); this.div.hidden = !1; }
        getFromImage(t) { const { rawDims: { pageWidth: e, pageHeight: i }, rotation: n } = this.parent.viewport; return SignatureExtractor.process(t, e, i, n, SignatureEditor._INNER_MARGIN); }
        getFromText(t, e) { const { rawDims: { pageWidth: i, pageHeight: n }, rotation: r } = this.parent.viewport; return SignatureExtractor.extractContoursFromText(t, e, i, n, r, SignatureEditor._INNER_MARGIN); }
        getDrawnSignature(t) { const { rawDims: { pageWidth: e, pageHeight: i }, rotation: n } = this.parent.viewport; return SignatureExtractor.processDrawnLines({ lines: t, pageWidth: e, pageHeight: i, rotation: n, innerMargin: SignatureEditor._INNER_MARGIN, mustSmooth: !1, areContours: !1 }); }
        createDrawingOptions({ areContours: t, thickness: e }) { if (t)
            this._drawingOptions = SignatureEditor.getDefaultDrawingOptions();
        else {
            this._drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
            this._drawingOptions.updateProperties({ "stroke-width": e });
        } }
        serialize(t = !1) { if (this.isEmpty())
            return null; const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { "stroke-width": n } } = this, r = Object.assign(super.serialize(t), { isSignature: !0, areContours: __classPrivateFieldGet(this, _SignatureEditor_Wl, "f"), color: [0, 0, 0], thickness: __classPrivateFieldGet(this, _SignatureEditor_Wl, "f") ? 0 : n }); this.addComment(r); if (t) {
            r.paths = { lines: e, points: i };
            r.uuid = __classPrivateFieldGet(this, _SignatureEditor_ql, "f");
            r.isCopy = !0;
        }
        else
            r.lines = e; __classPrivateFieldGet(this, _SignatureEditor_Vl, "f") && (r.accessibilityData = { type: "Figure", alt: __classPrivateFieldGet(this, _SignatureEditor_Vl, "f") }); return r; }
        static deserializeDraw(t, e, i, n, r, s) { return s.areContours ? ContourDrawOutline.deserialize(t, e, i, n, r, s) : InkDrawOutline.deserialize(t, e, i, n, r, s); }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { var _a; const n = yield _super.deserialize.call(this, t, e, i); __classPrivateFieldSet(n, _SignatureEditor_Wl, t.areContours, "f"); n.description = ((_a = t.accessibilityData) === null || _a === void 0 ? void 0 : _a.alt) || ""; __classPrivateFieldSet(n, _SignatureEditor_ql, t.uuid, "f"); return n; });
        }
    }
    _SignatureEditor_Wl = new WeakMap(), _SignatureEditor_Vl = new WeakMap(), _SignatureEditor_$l = new WeakMap(), _SignatureEditor_ql = new WeakMap();
    SignatureEditor._type = "signature";
    SignatureEditor._editorType = m.SIGNATURE;
    SignatureEditor._defaultDrawingOptions = null;
    class StampEditor extends AnnotationEditor {
        constructor(t) {
            super(Object.assign(Object.assign({}, t), { name: "stampEditor" }));
            _StampEditor_instances.add(this);
            _StampEditor_Xl.set(this, null);
            _StampEditor_Yl.set(this, null);
            _StampEditor_Kl.set(this, null);
            _StampEditor_Jl.set(this, null);
            _StampEditor_Ql.set(this, null);
            _StampEditor_Zl.set(this, "");
            _StampEditor_th.set(this, null);
            _StampEditor_eh.set(this, !1);
            _StampEditor_ih.set(this, null);
            _StampEditor_nh.set(this, !1);
            _StampEditor_rh.set(this, !1);
            __classPrivateFieldSet(this, _StampEditor_Jl, t.bitmapUrl, "f");
            __classPrivateFieldSet(this, _StampEditor_Ql, t.bitmapFile, "f");
            this.defaultL10nId = "pdfjs-editor-stamp-editor";
        }
        static initialize(t, e) { AnnotationEditor.initialize(t, e); }
        static isHandlingMimeForPasting(t) { return Y.includes(t); }
        static paste(t, e) { e.pasteEditor({ mode: m.STAMP }, { bitmapFile: t.getAsFile() }); }
        altTextFinish() { this._uiManager.useNewAltTextFlow && (this.div.hidden = !1); super.altTextFinish(); }
        get telemetryFinalData() { var _a; return { type: "stamp", hasAltText: !!((_a = this.altTextData) === null || _a === void 0 ? void 0 : _a.altText) }; }
        static computeTelemetryFinalData(t) { var _a, _5; const e = t.get("hasAltText"); return { hasAltText: (_a = e.get(!0)) !== null && _a !== void 0 ? _a : 0, hasNoAltText: (_5 = e.get(!1)) !== null && _5 !== void 0 ? _5 : 0 }; }
        mlGuessAltText() {
            return __awaiter(this, arguments, void 0, function* (t = null, e = !0) { if (this.hasAltTextData())
                return null; const { mlManager: i } = this._uiManager; if (!i)
                throw new Error("No ML."); if (!(yield i.isEnabledFor("altText")))
                throw new Error("ML isn't enabled for alt text."); const { data: n, width: r, height: s } = t || this.copyCanvas(null, null, !0).imageData, a = yield i.guess({ name: "altText", request: { data: n, width: r, height: s, channels: n.length / (r * s) } }); if (!a)
                throw new Error("No response from the AI service."); if (a.error)
                throw new Error("Error from the AI service."); if (a.cancel)
                return null; if (!a.output)
                throw new Error("No valid response from the AI service."); const o = a.output; yield this.setGuessedAltText(o); e && !this.hasAltTextData() && (this.altTextData = { alt: o, decorative: !1 }); return o; });
        }
        remove() { var _a; if (__classPrivateFieldGet(this, _StampEditor_Yl, "f")) {
            __classPrivateFieldSet(this, _StampEditor_Xl, null, "f");
            this._uiManager.imageManager.deleteId(__classPrivateFieldGet(this, _StampEditor_Yl, "f"));
            (_a = __classPrivateFieldGet(this, _StampEditor_th, "f")) === null || _a === void 0 ? void 0 : _a.remove();
            __classPrivateFieldSet(this, _StampEditor_th, null, "f");
            if (__classPrivateFieldGet(this, _StampEditor_ih, "f")) {
                clearTimeout(__classPrivateFieldGet(this, _StampEditor_ih, "f"));
                __classPrivateFieldSet(this, _StampEditor_ih, null, "f");
            }
        } super.remove(); }
        rebuild() { if (this.parent) {
            super.rebuild();
            if (null !== this.div) {
                __classPrivateFieldGet(this, _StampEditor_Yl, "f") && null === __classPrivateFieldGet(this, _StampEditor_th, "f") && __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_lh).call(this);
                this.isAttachedToDOM || this.parent.add(this);
            }
        }
        else
            __classPrivateFieldGet(this, _StampEditor_Yl, "f") && __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_lh).call(this); }
        onceAdded(t) { this._isDraggable = !0; t && this.div.focus(); }
        isEmpty() { return !(__classPrivateFieldGet(this, _StampEditor_Kl, "f") || __classPrivateFieldGet(this, _StampEditor_Xl, "f") || __classPrivateFieldGet(this, _StampEditor_Jl, "f") || __classPrivateFieldGet(this, _StampEditor_Ql, "f") || __classPrivateFieldGet(this, _StampEditor_Yl, "f") || __classPrivateFieldGet(this, _StampEditor_eh, "f")); }
        get toolbarButtons() { return [["altText", this.createAltText()]]; }
        get isResizable() { return !0; }
        render() { if (this.div)
            return this.div; let t, e; if (this._isCopy) {
            t = this.x;
            e = this.y;
        } super.render(); this.div.hidden = !0; this.createAltText(); __classPrivateFieldGet(this, _StampEditor_eh, "f") || (__classPrivateFieldGet(this, _StampEditor_Xl, "f") ? __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ah).call(this) : __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_lh).call(this)); this._isCopy && this._moveAfterPaste(t, e); this._uiManager.addShouldRescale(this); return this.div; }
        setCanvas(t, e) { const { id: i, bitmap: n } = this._uiManager.imageManager.getFromCanvas(t, e); e.remove(); if (i && this._uiManager.imageManager.isValidId(i)) {
            __classPrivateFieldSet(this, _StampEditor_Yl, i, "f");
            n && (__classPrivateFieldSet(this, _StampEditor_Xl, n, "f"));
            __classPrivateFieldSet(this, _StampEditor_eh, !1, "f");
            __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ah).call(this);
        } }
        _onResized() { this.onScaleChanging(); }
        onScaleChanging() { if (!this.parent)
            return; null !== __classPrivateFieldGet(this, _StampEditor_ih, "f") && clearTimeout(__classPrivateFieldGet(this, _StampEditor_ih, "f")); __classPrivateFieldSet(this, _StampEditor_ih, setTimeout(() => { __classPrivateFieldSet(this, _StampEditor_ih, null, "f"); __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_hh).call(this); }, 200), "f"); }
        copyCanvas(t, e, i = !1) { t || (t = 224); const { width: n, height: r } = __classPrivateFieldGet(this, _StampEditor_Xl, "f"), s = new OutputScale; let a = __classPrivateFieldGet(this, _StampEditor_Xl, "f"), o = n, l = r, h = null; if (e) {
            if (n > e || r > e) {
                const t = Math.min(e / n, e / r);
                o = Math.floor(n * t);
                l = Math.floor(r * t);
            }
            h = document.createElement("canvas");
            const t = h.width = Math.ceil(o * s.sx), i = h.height = Math.ceil(l * s.sy);
            __classPrivateFieldGet(this, _StampEditor_nh, "f") || (a = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ch).call(this, t, i));
            const c = h.getContext("2d");
            c.filter = this._uiManager.hcmFilter;
            let d = "white", u = "#cfcfd8";
            if ("none" !== this._uiManager.hcmFilter)
                u = "black";
            else if (ColorScheme.isDarkMode) {
                d = "#8f8f9d";
                u = "#42414d";
            }
            const p = 15, g = p * s.sx, m = p * s.sy, f = new OffscreenCanvas(2 * g, 2 * m), b = f.getContext("2d");
            b.fillStyle = d;
            b.fillRect(0, 0, 2 * g, 2 * m);
            b.fillStyle = u;
            b.fillRect(0, 0, g, m);
            b.fillRect(g, m, g, m);
            c.fillStyle = c.createPattern(f, "repeat");
            c.fillRect(0, 0, t, i);
            c.drawImage(a, 0, 0, a.width, a.height, 0, 0, t, i);
        } let c = null; if (i) {
            let e, i;
            if (s.symmetric && a.width < t && a.height < t) {
                e = a.width;
                i = a.height;
            }
            else {
                a = __classPrivateFieldGet(this, _StampEditor_Xl, "f");
                if (n > t || r > t) {
                    const s = Math.min(t / n, t / r);
                    e = Math.floor(n * s);
                    i = Math.floor(r * s);
                    __classPrivateFieldGet(this, _StampEditor_nh, "f") || (a = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ch).call(this, e, i));
                }
            }
            const o = new OffscreenCanvas(e, i).getContext("2d", { willReadFrequently: !0 });
            o.drawImage(a, 0, 0, a.width, a.height, 0, 0, e, i);
            c = { width: e, height: i, data: o.getImageData(0, 0, e, i).data };
        } return { canvas: h, width: o, height: l, imageData: c }; }
        static deserialize(t, e, i) {
            const _super = Object.create(null, {
                deserialize: { get: () => super.deserialize }
            });
            return __awaiter(this, void 0, void 0, function* () { var _a; let n = null, r = !1; if (t instanceof StampAnnotationElement) {
                const { data: { rect: s, rotation: a, id: o, structParent: l, popupRef: h, richText: c, contentsObj: d, creationDate: u, modificationDate: p }, container: g, parent: { page: { pageNumber: f } }, canvas: b } = t;
                let y, v;
                if (b) {
                    delete t.canvas;
                    ({ id: y, bitmap: v } = i.imageManager.getFromCanvas(g.id, b));
                    b.remove();
                }
                else {
                    r = !0;
                    t._hasNoCanvas = !0;
                }
                const w = ((_a = (yield e._structTree.getAriaAttributes(`${q}${o}`))) === null || _a === void 0 ? void 0 : _a.get("aria-label")) || "";
                n = t = { annotationType: m.STAMP, bitmapId: y, bitmap: v, pageIndex: f - 1, rect: s.slice(0), rotation: a, annotationElementId: o, id: o, deleted: !1, accessibilityData: { decorative: !1, altText: w }, isSvg: !1, structParent: l, popupRef: h, richText: c, comment: (d === null || d === void 0 ? void 0 : d.str) || null, creationDate: u, modificationDate: p };
            } const s = yield _super.deserialize.call(this, t, e, i), { rect: a, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: c, accessibilityData: d } = t; if (r) {
                i.addMissingCanvas(t.id, s);
                __classPrivateFieldSet(s, _StampEditor_eh, !0, "f");
            }
            else if (h && i.imageManager.isValidId(h)) {
                __classPrivateFieldSet(s, _StampEditor_Yl, h, "f");
                o && (__classPrivateFieldSet(s, _StampEditor_Xl, o, "f"));
            }
            else
                __classPrivateFieldSet(s, _StampEditor_Jl, l, "f"); __classPrivateFieldSet(s, _StampEditor_nh, c, "f"); const [u, p] = s.pageDimensions; s.width = (a[2] - a[0]) / u; s.height = (a[3] - a[1]) / p; d && (s.altTextData = d); s._initialData = n; t.comment && s.setCommentData(t); __classPrivateFieldSet(s, _StampEditor_rh, !!n, "f"); return s; });
        }
        serialize(t = !1, e = null) { var _a; if (this.isEmpty())
            return null; if (this.deleted)
            return this.serializeDeleted(); const i = Object.assign(super.serialize(t), { bitmapId: __classPrivateFieldGet(this, _StampEditor_Yl, "f"), isSvg: __classPrivateFieldGet(this, _StampEditor_nh, "f") }); this.addComment(i); if (t) {
            i.bitmapUrl = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_dh).call(this, !0);
            i.accessibilityData = this.serializeAltText(!0);
            i.isCopy = !0;
            return i;
        } const { decorative: n, altText: r } = this.serializeAltText(!1); !n && r && (i.accessibilityData = { type: "Figure", alt: r }); if (this.annotationElementId) {
            const t = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_Za).call(this, i);
            if (t.isSame)
                return null;
            t.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = (_a = this._initialData.structParent) !== null && _a !== void 0 ? _a : -1;
            i.id = this.annotationElementId;
            delete i.bitmapId;
            return i;
        } if (null === e)
            return i; e.stamps || (e.stamps = new Map); const s = __classPrivateFieldGet(this, _StampEditor_nh, "f") ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null; if (e.stamps.has(__classPrivateFieldGet(this, _StampEditor_Yl, "f"))) {
            if (__classPrivateFieldGet(this, _StampEditor_nh, "f")) {
                const t = e.stamps.get(__classPrivateFieldGet(this, _StampEditor_Yl, "f"));
                if (s > t.area) {
                    t.area = s;
                    t.serialized.bitmap.close();
                    t.serialized.bitmap = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_dh).call(this, !1);
                }
            }
        }
        else {
            e.stamps.set(__classPrivateFieldGet(this, _StampEditor_Yl, "f"), { area: s, serialized: i });
            i.bitmap = __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_dh).call(this, !1);
        } return i; }
        renderAnnotationElement(t) { if (this.deleted) {
            t.hide();
            return null;
        } t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }); return null; }
    }
    _StampEditor_Xl = new WeakMap(), _StampEditor_Yl = new WeakMap(), _StampEditor_Kl = new WeakMap(), _StampEditor_Jl = new WeakMap(), _StampEditor_Ql = new WeakMap(), _StampEditor_Zl = new WeakMap(), _StampEditor_th = new WeakMap(), _StampEditor_eh = new WeakMap(), _StampEditor_ih = new WeakMap(), _StampEditor_nh = new WeakMap(), _StampEditor_rh = new WeakMap(), _StampEditor_instances = new WeakSet(), _StampEditor_sh = function _StampEditor_sh(t, e = !1) { if (t) {
        __classPrivateFieldSet(this, _StampEditor_Xl, t.bitmap, "f");
        if (!e) {
            __classPrivateFieldSet(this, _StampEditor_Yl, t.id, "f");
            __classPrivateFieldSet(this, _StampEditor_nh, t.isSvg, "f");
        }
        t.file && (__classPrivateFieldSet(this, _StampEditor_Zl, t.file.name, "f"));
        __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ah).call(this);
    }
    else
        this.remove(); }, _StampEditor_oh = function _StampEditor_oh() { __classPrivateFieldSet(this, _StampEditor_Kl, null, "f"); this._uiManager.enableWaiting(!1); if (__classPrivateFieldGet(this, _StampEditor_th, "f"))
        if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __classPrivateFieldGet(this, _StampEditor_Xl, "f"))
            this.addEditToolbar().then(() => { this._editToolbar.hide(); this._uiManager.editAltText(this, !0); });
        else {
            if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __classPrivateFieldGet(this, _StampEditor_Xl, "f")) {
                this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: !1, alt_text_type: "empty" } });
                try {
                    this.mlGuessAltText();
                }
                catch (_a) { }
            }
            this.div.focus();
        } }, _StampEditor_lh = function _StampEditor_lh() { if (__classPrivateFieldGet(this, _StampEditor_Yl, "f")) {
        this._uiManager.enableWaiting(!0);
        this._uiManager.imageManager.getFromId(__classPrivateFieldGet(this, _StampEditor_Yl, "f")).then(t => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_sh).call(this, t, !0)).finally(() => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_oh).call(this));
        return;
    } if (__classPrivateFieldGet(this, _StampEditor_Jl, "f")) {
        const t = __classPrivateFieldGet(this, _StampEditor_Jl, "f");
        __classPrivateFieldSet(this, _StampEditor_Jl, null, "f");
        this._uiManager.enableWaiting(!0);
        __classPrivateFieldSet(this, _StampEditor_Kl, this._uiManager.imageManager.getFromUrl(t).then(t => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_sh).call(this, t)).finally(() => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_oh).call(this)), "f");
        return;
    } if (__classPrivateFieldGet(this, _StampEditor_Ql, "f")) {
        const t = __classPrivateFieldGet(this, _StampEditor_Ql, "f");
        __classPrivateFieldSet(this, _StampEditor_Ql, null, "f");
        this._uiManager.enableWaiting(!0);
        __classPrivateFieldSet(this, _StampEditor_Kl, this._uiManager.imageManager.getFromFile(t).then(t => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_sh).call(this, t)).finally(() => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_oh).call(this)), "f");
        return;
    } const t = document.createElement("input"); t.type = "file"; t.accept = Y.join(","); const e = this._uiManager._signal; __classPrivateFieldSet(this, _StampEditor_Kl, new Promise(i => { t.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () { if (t.files && 0 !== t.files.length) {
        this._uiManager.enableWaiting(!0);
        const e = yield this._uiManager.imageManager.getFromFile(t.files[0]);
        this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } });
        __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_sh).call(this, e);
    }
    else
        this.remove(); i(); }), { signal: e }); t.addEventListener("cancel", () => { this.remove(); i(); }, { signal: e }); }).finally(() => __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_oh).call(this)), "f"); t.click(); }, _StampEditor_ah = function _StampEditor_ah() { var _a; const { div: t } = this; let { width: e, height: i } = __classPrivateFieldGet(this, _StampEditor_Xl, "f"); const [n, r] = this.pageDimensions, s = .75; if (this.width) {
        e = this.width * n;
        i = this.height * r;
    }
    else if (e > s * n || i > s * r) {
        const t = Math.min(s * n / e, s * r / i);
        e *= t;
        i *= t;
    } this._uiManager.enableWaiting(!1); const a = __classPrivateFieldSet(this, _StampEditor_th, document.createElement("canvas"), "f"); a.setAttribute("role", "img"); this.addContainer(a); this.width = e / n; this.height = i / r; this.setDims(); ((_a = this._initialOptions) === null || _a === void 0 ? void 0 : _a.isCentered) ? this.center() : this.fixAndSetPosition(); this._initialOptions = null; this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t.hidden = !1); __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_hh).call(this); if (!__classPrivateFieldGet(this, _StampEditor_rh, "f")) {
        this.parent.addUndoableEditor(this);
        __classPrivateFieldSet(this, _StampEditor_rh, !0, "f");
    } this._reportTelemetry({ action: "inserted_image" }); __classPrivateFieldGet(this, _StampEditor_Zl, "f") && this.div.setAttribute("aria-description", __classPrivateFieldGet(this, _StampEditor_Zl, "f")); this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert"); }, _StampEditor_ch = function _StampEditor_ch(t, e) { const { width: i, height: n } = __classPrivateFieldGet(this, _StampEditor_Xl, "f"); let r = i, s = n, a = __classPrivateFieldGet(this, _StampEditor_Xl, "f"); for (; r > 2 * t || s > 2 * e;) {
        const i = r, n = s;
        r > 2 * t && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2));
        s > 2 * e && (s = s >= 16384 ? Math.floor(s / 2) - 1 : Math.ceil(s / 2));
        const o = new OffscreenCanvas(r, s);
        o.getContext("2d").drawImage(a, 0, 0, i, n, 0, 0, r, s);
        a = o.transferToImageBitmap();
    } return a; }, _StampEditor_hh = function _StampEditor_hh() { const [t, e] = this.parentDimensions, { width: i, height: n } = this, r = new OutputScale, s = Math.ceil(i * t * r.sx), a = Math.ceil(n * e * r.sy), o = __classPrivateFieldGet(this, _StampEditor_th, "f"); if (!o || o.width === s && o.height === a)
        return; o.width = s; o.height = a; const l = __classPrivateFieldGet(this, _StampEditor_nh, "f") ? __classPrivateFieldGet(this, _StampEditor_Xl, "f") : __classPrivateFieldGet(this, _StampEditor_instances, "m", _StampEditor_ch).call(this, s, a), h = o.getContext("2d"); h.filter = this._uiManager.hcmFilter; h.drawImage(l, 0, 0, l.width, l.height, 0, 0, s, a); }, _StampEditor_dh = function _StampEditor_dh(t) { if (t) {
        if (__classPrivateFieldGet(this, _StampEditor_nh, "f")) {
            const t = this._uiManager.imageManager.getSvgUrl(__classPrivateFieldGet(this, _StampEditor_Yl, "f"));
            if (t)
                return t;
        }
        const t = document.createElement("canvas");
        ({ width: t.width, height: t.height } = __classPrivateFieldGet(this, _StampEditor_Xl, "f"));
        t.getContext("2d").drawImage(__classPrivateFieldGet(this, _StampEditor_Xl, "f"), 0, 0);
        return t.toDataURL();
    } if (__classPrivateFieldGet(this, _StampEditor_nh, "f")) {
        const [t, e] = this.pageDimensions, i = Math.round(this.width * t * PixelsPerInch.PDF_TO_CSS_UNITS), n = Math.round(this.height * e * PixelsPerInch.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(i, n);
        r.getContext("2d").drawImage(__classPrivateFieldGet(this, _StampEditor_Xl, "f"), 0, 0, __classPrivateFieldGet(this, _StampEditor_Xl, "f").width, __classPrivateFieldGet(this, _StampEditor_Xl, "f").height, 0, 0, i, n);
        return r.transferToImageBitmap();
    } return structuredClone(__classPrivateFieldGet(this, _StampEditor_Xl, "f")); }, _StampEditor_Za = function _StampEditor_Za(t) { var _a; const { pageIndex: e, accessibilityData: { altText: i } } = this._initialData, n = t.pageIndex === e, r = (((_a = t.accessibilityData) === null || _a === void 0 ? void 0 : _a.alt) || "") === i; return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && n && r, isSameAltText: r }; };
    StampEditor._type = "stamp";
    StampEditor._editorType = m.STAMP;
    class AnnotationEditorLayer {
        constructor({ uiManager: t, pageIndex: e, div: i, structTreeLayer: n, accessibilityManager: r, annotationLayer: s, drawLayer: a, textLayer: o, viewport: l, l10n: h }) {
            _AnnotationEditorLayer_instances.add(this);
            _AnnotationEditorLayer_Ba.set(this, void 0);
            _AnnotationEditorLayer_uh.set(this, !1);
            _AnnotationEditorLayer_ph.set(this, null);
            _AnnotationEditorLayer_gh.set(this, null);
            _AnnotationEditorLayer_mh.set(this, null);
            _AnnotationEditorLayer_fh.set(this, new Map);
            _AnnotationEditorLayer_bh.set(this, !1);
            _AnnotationEditorLayer_yh.set(this, !1);
            _AnnotationEditorLayer_vh.set(this, !1);
            _AnnotationEditorLayer_wh.set(this, null);
            _AnnotationEditorLayer_Ah.set(this, null);
            _AnnotationEditorLayer_xh.set(this, null);
            _AnnotationEditorLayer_Eh.set(this, null);
            _AnnotationEditorLayer__h.set(this, null);
            _AnnotationEditorLayer_Th.set(this, -1);
            _AnnotationEditorLayer_y.set(this, void 0);
            const c = [...__classPrivateFieldGet(_2, _2, "f", _AnnotationEditorLayer_J).values()];
            if (!_2._initialized) {
                _2._initialized = !0;
                for (const e of c)
                    e.initialize(h, t);
            }
            t.registerEditorTypes(c);
            __classPrivateFieldSet(this, _AnnotationEditorLayer_y, t, "f");
            this.pageIndex = e;
            this.div = i;
            __classPrivateFieldSet(this, _AnnotationEditorLayer_Ba, r, "f");
            __classPrivateFieldSet(this, _AnnotationEditorLayer_ph, s, "f");
            this.viewport = l;
            __classPrivateFieldSet(this, _AnnotationEditorLayer_xh, o, "f");
            this.drawLayer = a;
            this._structTree = n;
            __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addLayer(this);
        }
        get isEmpty() { return 0 === __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").size; }
        get isInvisible() { return this.isEmpty && __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getMode() === m.NONE; }
        updateToolbar(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").updateToolbar(t); }
        updateMode(t = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getMode()) { __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Sh).call(this); switch (t) {
            case m.NONE:
                this.div.classList.toggle("nonEditing", !0);
                this.disableTextSelection();
                this.togglePointerEvents(!1);
                this.toggleAnnotationLayerPointerEvents(!0);
                this.disableClick();
                return;
            case m.INK:
                this.disableTextSelection();
                this.togglePointerEvents(!0);
                this.enableClick();
                break;
            case m.HIGHLIGHT:
                this.enableTextSelection();
                this.togglePointerEvents(!1);
                this.disableClick();
                break;
            default:
                this.disableTextSelection();
                this.togglePointerEvents(!0);
                this.enableClick();
        } this.toggleAnnotationLayerPointerEvents(!1); const { classList: e } = this.div; e.toggle("nonEditing", !1); if (t === m.POPUP)
            e.toggle("commentEditing", !0);
        else {
            e.toggle("commentEditing", !1);
            for (const i of __classPrivateFieldGet(_2, _2, "f", _AnnotationEditorLayer_J).values())
                e.toggle(`${i._type}Editing`, t === i._editorType);
        } this.div.hidden = !1; }
        hasTextLayer(t) { var _a; return t === ((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f")) === null || _a === void 0 ? void 0 : _a.div); }
        setEditingState(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setEditingState(t); }
        addCommands(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addCommands(t); }
        cleanUndoStack(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").cleanUndoStack(t); }
        toggleDrawing(t = !1) { this.div.classList.toggle("drawing", !t); }
        togglePointerEvents(t = !1) { this.div.classList.toggle("disabled", !t); }
        toggleAnnotationLayerPointerEvents(t = !1) { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_ph, "f")) === null || _a === void 0 ? void 0 : _a.togglePointerEvents(t); }
        enable() {
            return __awaiter(this, void 0, void 0, function* () { var _a; __classPrivateFieldSet(this, _AnnotationEditorLayer_vh, !0, "f"); this.div.tabIndex = 0; this.togglePointerEvents(!0); this.div.classList.toggle("nonEditing", !1); (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer__h, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditorLayer__h, null, "f"); const t = new Set; for (const e of __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ch_get)) {
                e.enableEditing();
                e.show(!0);
                if (e.annotationElementId) {
                    __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").removeChangedExistingAnnotation(e);
                    t.add(e.annotationElementId);
                }
            } const e = __classPrivateFieldGet(this, _AnnotationEditorLayer_ph, "f"); if (e)
                for (const i of e.getEditableAnnotations()) {
                    i.hide();
                    if (__classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").isDeletedAnnotationElement(i.data.id))
                        continue;
                    if (t.has(i.data.id))
                        continue;
                    const e = yield this.deserialize(i);
                    if (e) {
                        this.addOrRebuild(e);
                        e.enableEditing();
                    }
                } __classPrivateFieldSet(this, _AnnotationEditorLayer_vh, !1, "f"); __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f")._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 }); });
        }
        disable() { var _a; __classPrivateFieldSet(this, _AnnotationEditorLayer_yh, !0, "f"); this.div.tabIndex = -1; this.togglePointerEvents(!1); this.div.classList.toggle("nonEditing", !0); if (__classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f") && !__classPrivateFieldGet(this, _AnnotationEditorLayer__h, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorLayer__h, new AbortController, "f");
            const t = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorLayer__h, "f"));
            __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.addEventListener("pointerdown", t => { const { clientX: e, clientY: i, timeStamp: n } = t; if (n - __classPrivateFieldGet(this, _AnnotationEditorLayer_Th, "f") > 500) {
                __classPrivateFieldSet(this, _AnnotationEditorLayer_Th, n, "f");
                return;
            } __classPrivateFieldSet(this, _AnnotationEditorLayer_Th, -1, "f"); const { classList: r } = this.div; r.toggle("getElements", !0); const s = document.elementsFromPoint(e, i); r.toggle("getElements", !1); if (!this.div.contains(s[0]))
                return; let a; const o = new RegExp(`^${g}[0-9]+$`); for (const t of s)
                if (o.test(t.id)) {
                    a = t.id;
                    break;
                } if (!a)
                return; const l = __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").get(a); if (null === (l === null || l === void 0 ? void 0 : l.annotationElementId)) {
                t.stopPropagation();
                t.preventDefault();
                l.dblclick(t);
            } }, { signal: t, capture: !0 });
        } const t = __classPrivateFieldGet(this, _AnnotationEditorLayer_ph, "f"), e = []; if (t) {
            const i = new Map, n = new Map;
            for (const t of __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ch_get)) {
                t.disableEditing();
                if (t.annotationElementId)
                    if (null === t.serialize()) {
                        n.set(t.annotationElementId, t);
                        (_a = this.getEditableAnnotation(t.annotationElementId)) === null || _a === void 0 ? void 0 : _a.show();
                        t.remove();
                    }
                    else
                        i.set(t.annotationElementId, t);
                else
                    e.push(t);
            }
            for (const e of t.getEditableAnnotations()) {
                const { id: t } = e.data;
                if (__classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").isDeletedAnnotationElement(t)) {
                    e.updateEdited({ deleted: !0 });
                    continue;
                }
                let r = n.get(t);
                if (r) {
                    r.resetAnnotationElement(e);
                    r.show(!1);
                    e.show();
                }
                else {
                    r = i.get(t);
                    if (r) {
                        __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addChangedExistingAnnotation(r);
                        r.renderAnnotationElement(e) && r.show(!1);
                    }
                    e.show();
                }
            }
        } __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Sh).call(this); this.isEmpty && (this.div.hidden = !0); const { classList: i } = this.div; for (const t of __classPrivateFieldGet(_2, _2, "f", _AnnotationEditorLayer_J).values())
            i.remove(`${t._type}Editing`); this.disableTextSelection(); this.toggleAnnotationLayerPointerEvents(!0); t === null || t === void 0 ? void 0 : t.updateFakeAnnotations(e); __classPrivateFieldSet(this, _AnnotationEditorLayer_yh, !1, "f"); }
        getEditableAnnotation(t) { var _a; return ((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_ph, "f")) === null || _a === void 0 ? void 0 : _a.getEditableAnnotation(t)) || null; }
        setActiveEditor(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getActive() !== t && __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setActiveEditor(t); }
        enableTextSelection() { var _a; this.div.tabIndex = -1; if (((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f")) === null || _a === void 0 ? void 0 : _a.div) && !__classPrivateFieldGet(this, _AnnotationEditorLayer_Eh, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorLayer_Eh, new AbortController, "f");
            const t = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorLayer_Eh, "f"));
            __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.addEventListener("pointerdown", __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Dh).bind(this), { signal: t });
            __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.classList.add("highlighting");
        } }
        disableTextSelection() { var _a; this.div.tabIndex = 0; if (((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f")) === null || _a === void 0 ? void 0 : _a.div) && __classPrivateFieldGet(this, _AnnotationEditorLayer_Eh, "f")) {
            __classPrivateFieldGet(this, _AnnotationEditorLayer_Eh, "f").abort();
            __classPrivateFieldSet(this, _AnnotationEditorLayer_Eh, null, "f");
            __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.classList.remove("highlighting");
        } }
        enableClick() { if (__classPrivateFieldGet(this, _AnnotationEditorLayer_gh, "f"))
            return; __classPrivateFieldSet(this, _AnnotationEditorLayer_gh, new AbortController, "f"); const t = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorLayer_gh, "f")); this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t }); const e = this.pointerup.bind(this); this.div.addEventListener("pointerup", e, { signal: t }); this.div.addEventListener("pointercancel", e, { signal: t }); }
        disableClick() { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_gh, "f")) === null || _a === void 0 ? void 0 : _a.abort(); __classPrivateFieldSet(this, _AnnotationEditorLayer_gh, null, "f"); }
        attach(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").set(t.id, t); const { annotationElementId: e } = t; e && __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").isDeletedAnnotationElement(e) && __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").removeDeletedAnnotationElement(t); }
        detach(t) { var _a; __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").delete(t.id); (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_Ba, "f")) === null || _a === void 0 ? void 0 : _a.removePointerInTextLayer(t.contentDiv); !__classPrivateFieldGet(this, _AnnotationEditorLayer_yh, "f") && t.annotationElementId && __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addDeletedAnnotationElement(t); }
        remove(t) { this.detach(t); __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").removeEditor(t); t.div.remove(); t.isAttachedToDOM = !1; }
        changeParent(t) { var _a; if (t.parent !== this) {
            if (t.parent && t.annotationElementId) {
                __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addDeletedAnnotationElement(t);
                AnnotationEditor.deleteAnnotationElement(t);
                t.annotationElementId = null;
            }
            this.attach(t);
            (_a = t.parent) === null || _a === void 0 ? void 0 : _a.detach(t);
            t.setParent(this);
            if (t.div && t.isAttachedToDOM) {
                t.div.remove();
                this.div.append(t.div);
            }
        } }
        add(t) { if (t.parent !== this || !t.isAttachedToDOM) {
            this.changeParent(t);
            __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addEditor(t);
            this.attach(t);
            if (!t.isAttachedToDOM) {
                const e = t.render();
                this.div.append(e);
                t.isAttachedToDOM = !0;
            }
            t.fixAndSetPosition();
            t.onceAdded(!__classPrivateFieldGet(this, _AnnotationEditorLayer_vh, "f"));
            __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").addToAnnotationStorage(t);
            t._reportTelemetry(t.telemetryInitialData);
        } }
        moveEditorInDOM(t) { var _a; if (!t.isAttachedToDOM)
            return; const { activeElement: e } = document; if (t.div.contains(e) && !__classPrivateFieldGet(this, _AnnotationEditorLayer_mh, "f")) {
            t._focusEventsAllowed = !1;
            __classPrivateFieldSet(this, _AnnotationEditorLayer_mh, setTimeout(() => { __classPrivateFieldSet(this, _AnnotationEditorLayer_mh, null, "f"); if (t.div.contains(document.activeElement))
                t._focusEventsAllowed = !0;
            else {
                t.div.addEventListener("focusin", () => { t._focusEventsAllowed = !0; }, { once: !0, signal: __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f")._signal });
                e.focus();
            } }, 0), "f");
        } t._structTreeParentId = (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_Ba, "f")) === null || _a === void 0 ? void 0 : _a.moveElementInDOM(this.div, t.div, t.contentDiv, !0); }
        addOrRebuild(t) { if (t.needsToBeRebuilt()) {
            t.parent || (t.parent = this);
            t.rebuild();
            t.show();
        }
        else
            this.add(t); }
        addUndoableEditor(t) { this.addCommands({ cmd: () => t._uiManager.rebuild(t), undo: () => { t.remove(); }, mustExec: !1 }); }
        getEditorByUID(t) { for (const e of __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").values())
            if (e.uid === t)
                return e; return null; }
        combinedSignal(t) { return __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").combinedSignal(t); }
        canCreateNewEmptyEditor() { var _a; return (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get)) === null || _a === void 0 ? void 0 : _a.canCreateNewEmptyEditor(); }
        pasteEditor(t, e) {
            return __awaiter(this, void 0, void 0, function* () { this.updateToolbar(t); yield __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").updateMode(t.mode); const { offsetX: i, offsetY: n } = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_kh).call(this), r = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getId(), s = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Mh).call(this, Object.assign({ parent: this, id: r, x: i, y: n, uiManager: __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f"), isCentered: !0 }, e)); s && this.add(s); });
        }
        deserialize(t) {
            return __awaiter(this, void 0, void 0, function* () { var _a, _5; return (yield ((_5 = __classPrivateFieldGet(_2, _2, "f", _AnnotationEditorLayer_J).get((_a = t.annotationType) !== null && _a !== void 0 ? _a : t.annotationEditorType)) === null || _5 === void 0 ? void 0 : _5.deserialize(t, this, __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f")))) || null; });
        }
        createAndAddNewEditor(t, e, i = {}) { const n = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getId(), r = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Mh).call(this, Object.assign({ parent: this, id: n, x: t.offsetX, y: t.offsetY, uiManager: __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f"), isCentered: e }, i)); r && this.add(r); return r; }
        get boundingClientRect() { return this.div.getBoundingClientRect(); }
        addNewEditor(t = {}) { this.createAndAddNewEditor(__classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_kh).call(this), !0, t); }
        setSelected(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setSelected(t); }
        toggleSelected(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").toggleSelected(t); }
        unselect(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").unselect(t); }
        pointerup(t) { var _a; const { isMac: e } = FeatureTest.platform; if (0 !== t.button || t.ctrlKey && e)
            return; if (t.target !== this.div)
            return; if (!__classPrivateFieldGet(this, _AnnotationEditorLayer_bh, "f"))
            return; __classPrivateFieldSet(this, _AnnotationEditorLayer_bh, !1, "f"); if (((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get)) === null || _a === void 0 ? void 0 : _a.isDrawer) && __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get).supportMultipleDrawings)
            return; if (!__classPrivateFieldGet(this, _AnnotationEditorLayer_uh, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorLayer_uh, !0, "f");
            return;
        } const i = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getMode(); i !== m.STAMP && i !== m.POPUP && i !== m.SIGNATURE ? this.createAndAddNewEditor(t, !1) : __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").unselectAll(); }
        pointerdown(t) { var _a; __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getMode() === m.HIGHLIGHT && this.enableTextSelection(); if (__classPrivateFieldGet(this, _AnnotationEditorLayer_bh, "f")) {
            __classPrivateFieldSet(this, _AnnotationEditorLayer_bh, !1, "f");
            return;
        } const { isMac: e } = FeatureTest.platform; if (0 !== t.button || t.ctrlKey && e)
            return; if (t.target !== this.div)
            return; __classPrivateFieldSet(this, _AnnotationEditorLayer_bh, !0, "f"); if ((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get)) === null || _a === void 0 ? void 0 : _a.isDrawer) {
            this.startDrawingSession(t);
            return;
        } const i = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getActive(); __classPrivateFieldSet(this, _AnnotationEditorLayer_uh, !i || i.isEmpty(), "f"); }
        startDrawingSession(t) { this.div.focus({ preventScroll: !0 }); if (__classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f")) {
            __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get).startDrawing(this, __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f"), !1, t);
            return;
        } __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setCurrentDrawingSession(this); __classPrivateFieldSet(this, _AnnotationEditorLayer_wh, new AbortController, "f"); const e = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").combinedSignal(__classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f")); this.div.addEventListener("blur", ({ relatedTarget: t }) => { if (t && !this.div.contains(t)) {
            __classPrivateFieldSet(this, _AnnotationEditorLayer_Ah, null, "f");
            this.commitOrRemove();
        } }, { signal: e }); __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get).startDrawing(this, __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f"), !1, t); }
        pause(t) { if (t) {
            const { activeElement: t } = document;
            this.div.contains(t) && (__classPrivateFieldSet(this, _AnnotationEditorLayer_Ah, t, "f"));
            return;
        } __classPrivateFieldGet(this, _AnnotationEditorLayer_Ah, "f") && setTimeout(() => { var _a; (_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_Ah, "f")) === null || _a === void 0 ? void 0 : _a.focus(); __classPrivateFieldSet(this, _AnnotationEditorLayer_Ah, null, "f"); }, 0); }
        endDrawingSession(t = !1) { if (!__classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f"))
            return null; __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setCurrentDrawingSession(null); __classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f").abort(); __classPrivateFieldSet(this, _AnnotationEditorLayer_wh, null, "f"); __classPrivateFieldSet(this, _AnnotationEditorLayer_Ah, null, "f"); return __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get).endDrawing(t); }
        findNewParent(t, e, i) { const n = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").findParent(e, i); if (null === n || n === this)
            return !1; n.changeParent(t); return !0; }
        commitOrRemove() { if (__classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f")) {
            this.endDrawingSession();
            return !0;
        } return !1; }
        onScaleChanging() { __classPrivateFieldGet(this, _AnnotationEditorLayer_wh, "f") && __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get).onScaleChangingWhenDrawing(this); }
        destroy() { var _a, _5; this.commitOrRemove(); if (((_a = __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getActive()) === null || _a === void 0 ? void 0 : _a.parent) === this) {
            __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").commitOrRemove();
            __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").setActiveEditor(null);
        } if (__classPrivateFieldGet(this, _AnnotationEditorLayer_mh, "f")) {
            clearTimeout(__classPrivateFieldGet(this, _AnnotationEditorLayer_mh, "f"));
            __classPrivateFieldSet(this, _AnnotationEditorLayer_mh, null, "f");
        } for (const t of __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").values()) {
            (_5 = __classPrivateFieldGet(this, _AnnotationEditorLayer_Ba, "f")) === null || _5 === void 0 ? void 0 : _5.removePointerInTextLayer(t.contentDiv);
            t.setParent(null);
            t.isAttachedToDOM = !1;
            t.div.remove();
        } this.div = null; __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").clear(); __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").removeLayer(this); }
        render(_a) {
            return __awaiter(this, arguments, void 0, function* ({ viewport: t }) { this.viewport = t; setLayerDimensions(this.div, t); for (const t of __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getEditors(this.pageIndex)) {
                this.add(t);
                t.rebuild();
            } yield __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").findClonesForPage(this); this.div.hidden = this.isEmpty; this.updateMode(); });
        }
        update({ viewport: t }) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").commitOrRemove(); __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "m", _AnnotationEditorLayer_Sh).call(this); const e = this.viewport.rotation, i = t.rotation; this.viewport = t; setLayerDimensions(this.div, { rotation: i }); if (e !== i)
            for (const t of __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").values())
                t.rotate(i); }
        get pageDimensions() { const { pageWidth: t, pageHeight: e } = this.viewport.rawDims; return [t, e]; }
        get scale() { return __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").viewParameters.realScale; }
    }
    _2 = AnnotationEditorLayer, _AnnotationEditorLayer_Ba = new WeakMap(), _AnnotationEditorLayer_uh = new WeakMap(), _AnnotationEditorLayer_ph = new WeakMap(), _AnnotationEditorLayer_gh = new WeakMap(), _AnnotationEditorLayer_mh = new WeakMap(), _AnnotationEditorLayer_fh = new WeakMap(), _AnnotationEditorLayer_bh = new WeakMap(), _AnnotationEditorLayer_yh = new WeakMap(), _AnnotationEditorLayer_vh = new WeakMap(), _AnnotationEditorLayer_wh = new WeakMap(), _AnnotationEditorLayer_Ah = new WeakMap(), _AnnotationEditorLayer_xh = new WeakMap(), _AnnotationEditorLayer_Eh = new WeakMap(), _AnnotationEditorLayer__h = new WeakMap(), _AnnotationEditorLayer_Th = new WeakMap(), _AnnotationEditorLayer_y = new WeakMap(), _AnnotationEditorLayer_instances = new WeakSet(), _AnnotationEditorLayer_Ch_get = function _AnnotationEditorLayer_Ch_get() { return 0 !== __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").size ? __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").values() : __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getEditors(this.pageIndex); }, _AnnotationEditorLayer_Dh = function _AnnotationEditorLayer_Dh(t) { __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").unselectAll(); const { target: e } = t; if (e === __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div || ("img" === e.getAttribute("role") || e.classList.contains("endOfContent")) && __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.contains(e)) {
        const { isMac: e } = FeatureTest.platform;
        if (0 !== t.button || t.ctrlKey && e)
            return;
        __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").showAllEditors("highlight", !0, !0);
        __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.classList.add("free");
        this.toggleDrawing();
        HighlightEditor.startHighlighting(this, "ltr" === __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").direction, { target: __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div, x: t.x, y: t.y });
        __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.addEventListener("pointerup", () => { __classPrivateFieldGet(this, _AnnotationEditorLayer_xh, "f").div.classList.remove("free"); this.toggleDrawing(!0); }, { once: !0, signal: __classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f")._signal });
        t.preventDefault();
    } }, _AnnotationEditorLayer_Ph_get = function _AnnotationEditorLayer_Ph_get() { return __classPrivateFieldGet(_2, _2, "f", _AnnotationEditorLayer_J).get(__classPrivateFieldGet(this, _AnnotationEditorLayer_y, "f").getMode()); }, _AnnotationEditorLayer_Mh = function _AnnotationEditorLayer_Mh(t) { const e = __classPrivateFieldGet(this, _AnnotationEditorLayer_instances, "a", _AnnotationEditorLayer_Ph_get); return e ? new e.prototype.constructor(t) : null; }, _AnnotationEditorLayer_kh = function _AnnotationEditorLayer_kh() { const { x: t, y: e, width: i, height: n } = this.boundingClientRect, r = Math.max(0, t), s = Math.max(0, e), a = (r + Math.min(window.innerWidth, t + i)) / 2 - t, o = (s + Math.min(window.innerHeight, e + n)) / 2 - e, [l, h] = this.viewport.rotation % 180 == 0 ? [a, o] : [o, a]; return { offsetX: l, offsetY: h }; }, _AnnotationEditorLayer_Sh = function _AnnotationEditorLayer_Sh() { for (const t of __classPrivateFieldGet(this, _AnnotationEditorLayer_fh, "f").values())
        t.isEmpty() && t.remove(); };
    AnnotationEditorLayer._initialized = !1;
    _AnnotationEditorLayer_J = { value: new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map(t => [t._editorType, t])) };
    class DrawLayer {
        constructor() {
            _DrawLayer_instances.add(this);
            _DrawLayer_sa.set(this, null);
            _DrawLayer_Ih.set(this, new Map);
            _DrawLayer_Fh.set(this, new Map);
        }
        setParent(t) { if (__classPrivateFieldGet(this, _DrawLayer_sa, "f")) {
            if (__classPrivateFieldGet(this, _DrawLayer_sa, "f") !== t) {
                if (__classPrivateFieldGet(this, _DrawLayer_Ih, "f").size > 0)
                    for (const e of __classPrivateFieldGet(this, _DrawLayer_Ih, "f").values()) {
                        e.remove();
                        t.append(e);
                    }
                __classPrivateFieldSet(this, _DrawLayer_sa, t, "f");
            }
        }
        else
            __classPrivateFieldSet(this, _DrawLayer_sa, t, "f"); }
        static get _svgFactory() { return shadow(this, "_svgFactory", new DOMSVGFactory); }
        draw(t, e = !1, i = !1) { var _a, _5, _6; const n = (__classPrivateFieldSet(_a = _3, _3, (_6 = __classPrivateFieldGet(_a, _3, "f", _DrawLayer_S), _5 = _6++, _6), "f", _DrawLayer_S), _5), r = __classPrivateFieldGet(this, _DrawLayer_instances, "m", _DrawLayer_Bh).call(this), s = _3._svgFactory.createElement("defs"); r.append(s); const a = _3._svgFactory.createElement("path"); s.append(a); const o = `path_${n}`; a.setAttribute("id", o); a.setAttribute("vector-effect", "non-scaling-stroke"); e && __classPrivateFieldGet(this, _DrawLayer_Fh, "f").set(n, a); const l = i ? __classPrivateFieldGet(this, _DrawLayer_instances, "m", _DrawLayer_Oh).call(this, s, o) : null, h = _3._svgFactory.createElement("use"); r.append(h); h.setAttribute("href", `#${o}`); this.updateProperties(r, t); __classPrivateFieldGet(this, _DrawLayer_Ih, "f").set(n, r); return { id: n, clipPathId: `url(#${l})` }; }
        drawOutline(t, e) { var _a, _5, _6; const i = (__classPrivateFieldSet(_a = _3, _3, (_6 = __classPrivateFieldGet(_a, _3, "f", _DrawLayer_S), _5 = _6++, _6), "f", _DrawLayer_S), _5), n = __classPrivateFieldGet(this, _DrawLayer_instances, "m", _DrawLayer_Bh).call(this), r = _3._svgFactory.createElement("defs"); n.append(r); const s = _3._svgFactory.createElement("path"); r.append(s); const a = `path_${i}`; s.setAttribute("id", a); s.setAttribute("vector-effect", "non-scaling-stroke"); let o; if (e) {
            const t = _3._svgFactory.createElement("mask");
            r.append(t);
            o = `mask_${i}`;
            t.setAttribute("id", o);
            t.setAttribute("maskUnits", "objectBoundingBox");
            const e = _3._svgFactory.createElement("rect");
            t.append(e);
            e.setAttribute("width", "1");
            e.setAttribute("height", "1");
            e.setAttribute("fill", "white");
            const n = _3._svgFactory.createElement("use");
            t.append(n);
            n.setAttribute("href", `#${a}`);
            n.setAttribute("stroke", "none");
            n.setAttribute("fill", "black");
            n.setAttribute("fill-rule", "nonzero");
            n.classList.add("mask");
        } const l = _3._svgFactory.createElement("use"); n.append(l); l.setAttribute("href", `#${a}`); o && l.setAttribute("mask", `url(#${o})`); const h = l.cloneNode(); n.append(h); l.classList.add("mainOutline"); h.classList.add("secondaryOutline"); this.updateProperties(n, t); __classPrivateFieldGet(this, _DrawLayer_Ih, "f").set(i, n); return i; }
        finalizeDraw(t, e) { __classPrivateFieldGet(this, _DrawLayer_Fh, "f").delete(t); this.updateProperties(t, e); }
        updateProperties(t, e) { if (!e)
            return; const { root: i, bbox: n, rootClass: r, path: s } = e, a = "number" == typeof t ? __classPrivateFieldGet(this, _DrawLayer_Ih, "f").get(t) : t; if (a) {
            i && __classPrivateFieldGet(this, _DrawLayer_instances, "m", _DrawLayer_Lh).call(this, a, i);
            n && __classPrivateFieldGet(_3, _3, "m", _DrawLayer_Rh).call(_3, a, n);
            if (r) {
                const { classList: t } = a;
                for (const [e, i] of Object.entries(r))
                    t.toggle(e, i);
            }
            if (s) {
                const t = a.firstElementChild.firstElementChild;
                __classPrivateFieldGet(this, _DrawLayer_instances, "m", _DrawLayer_Lh).call(this, t, s);
            }
        } }
        updateParent(t, e) { if (e === this)
            return; const i = __classPrivateFieldGet(this, _DrawLayer_Ih, "f").get(t); if (i) {
            __classPrivateFieldGet(e, _DrawLayer_sa, "f").append(i);
            __classPrivateFieldGet(this, _DrawLayer_Ih, "f").delete(t);
            __classPrivateFieldGet(e, _DrawLayer_Ih, "f").set(t, i);
        } }
        remove(t) { __classPrivateFieldGet(this, _DrawLayer_Fh, "f").delete(t); if (null !== __classPrivateFieldGet(this, _DrawLayer_sa, "f")) {
            __classPrivateFieldGet(this, _DrawLayer_Ih, "f").get(t).remove();
            __classPrivateFieldGet(this, _DrawLayer_Ih, "f").delete(t);
        } }
        destroy() { __classPrivateFieldSet(this, _DrawLayer_sa, null, "f"); for (const t of __classPrivateFieldGet(this, _DrawLayer_Ih, "f").values())
            t.remove(); __classPrivateFieldGet(this, _DrawLayer_Ih, "f").clear(); __classPrivateFieldGet(this, _DrawLayer_Fh, "f").clear(); }
    }
    _3 = DrawLayer, _DrawLayer_sa = new WeakMap(), _DrawLayer_Ih = new WeakMap(), _DrawLayer_Fh = new WeakMap(), _DrawLayer_instances = new WeakSet(), _DrawLayer_Rh = function _DrawLayer_Rh(t, [e, i, n, r]) { const { style: s } = t; s.top = 100 * i + "%"; s.left = 100 * e + "%"; s.width = 100 * n + "%"; s.height = 100 * r + "%"; }, _DrawLayer_Bh = function _DrawLayer_Bh() { const t = _3._svgFactory.create(1, 1, !0); __classPrivateFieldGet(this, _DrawLayer_sa, "f").append(t); t.setAttribute("aria-hidden", !0); return t; }, _DrawLayer_Oh = function _DrawLayer_Oh(t, e) { const i = _3._svgFactory.createElement("clipPath"); t.append(i); const n = `clip_${e}`; i.setAttribute("id", n); i.setAttribute("clipPathUnits", "objectBoundingBox"); const r = _3._svgFactory.createElement("use"); i.append(r); r.setAttribute("href", `#${e}`); r.classList.add("clip"); return n; }, _DrawLayer_Lh = function _DrawLayer_Lh(t, e) { for (const [i, n] of Object.entries(e))
        null === n ? t.removeAttribute(i) : t.setAttribute(i, n); };
    _DrawLayer_S = { value: 0 };
    function percentage(t) { return `${(100 * t).toFixed(2)}%`; }
    class TextLayerImages {
        constructor(t, e, i, n) {
            _TextLayerImages_instances.add(this);
            _TextLayerImages_Nh.set(this, []);
            _TextLayerImages_Uh.set(this, new Map);
            _TextLayerImages_Hh.set(this, null);
            _TextLayerImages_zh.set(this, 0);
            _TextLayerImages_Mr.set(this, 0);
            _TextLayerImages_Pr.set(this, 0);
            __classPrivateFieldSet(this, _TextLayerImages_zh, t, "f");
            __classPrivateFieldSet(this, _TextLayerImages_Nh, e, "f");
            __classPrivateFieldSet(this, _TextLayerImages_Mr, i.rawDims.pageWidth, "f");
            __classPrivateFieldSet(this, _TextLayerImages_Pr, i.rawDims.pageHeight, "f");
            __classPrivateFieldSet(this, _TextLayerImages_Hh, n, "f");
        }
        render() { const t = document.createElement("div"); t.className = "textLayerImages"; for (let e = 0; e < __classPrivateFieldGet(this, _TextLayerImages_Nh, "f").length; e += 6) {
            const i = __classPrivateFieldGet(this, _TextLayerImages_instances, "m", _TextLayerImages_Gh).call(this, __classPrivateFieldGet(this, _TextLayerImages_Nh, "f").subarray(e, e + 6));
            i && t.append(i);
        } t.addEventListener("contextmenu", t => { var _a; if (!(t.target instanceof HTMLCanvasElement))
            return; const e = t.target, i = __classPrivateFieldGet(this, _TextLayerImages_Uh, "f").get(e); if (!i)
            return; const n = (_a = __classPrivateFieldGet(_4, _4, "f", _TextLayerImages_jh)) === null || _a === void 0 ? void 0 : _a.deref(); if (n === e)
            return; if (n) {
            n.width = 0;
            n.height = 0;
        } __classPrivateFieldSet(_4, _4, new WeakRef(e), "f", _TextLayerImages_jh); const { inverseTransform: r, x1: s, y1: a, width: o, height: l } = i, h = __classPrivateFieldGet(this, _TextLayerImages_Hh, "f").call(this), c = Math.ceil(s * h.width), d = Math.ceil(a * h.height), u = Math.floor((s + o / __classPrivateFieldGet(this, _TextLayerImages_Mr, "f")) * h.width), p = Math.floor((a + l / __classPrivateFieldGet(this, _TextLayerImages_Pr, "f")) * h.height); e.width = u - c; e.height = p - d; const g = e.getContext("2d"); g.setTransform(...r); g.translate(-c, -d); g.drawImage(h, 0, 0); }); return t; }
    }
    _4 = TextLayerImages, _TextLayerImages_Nh = new WeakMap(), _TextLayerImages_Uh = new WeakMap(), _TextLayerImages_Hh = new WeakMap(), _TextLayerImages_zh = new WeakMap(), _TextLayerImages_Mr = new WeakMap(), _TextLayerImages_Pr = new WeakMap(), _TextLayerImages_instances = new WeakSet(), _TextLayerImages_Gh = function _TextLayerImages_Gh([t, e, i, n, r, s]) { const a = Math.hypot((r - t) * __classPrivateFieldGet(this, _TextLayerImages_Mr, "f"), (s - e) * __classPrivateFieldGet(this, _TextLayerImages_Pr, "f")), o = Math.hypot((i - t) * __classPrivateFieldGet(this, _TextLayerImages_Mr, "f"), (n - e) * __classPrivateFieldGet(this, _TextLayerImages_Pr, "f")); if (a < __classPrivateFieldGet(this, _TextLayerImages_zh, "f") || o < __classPrivateFieldGet(this, _TextLayerImages_zh, "f"))
        return null; const l = [(r - t) * __classPrivateFieldGet(this, _TextLayerImages_Mr, "f") / a, (s - e) * __classPrivateFieldGet(this, _TextLayerImages_Pr, "f") / a, (i - t) * __classPrivateFieldGet(this, _TextLayerImages_Mr, "f") / o, (n - e) * __classPrivateFieldGet(this, _TextLayerImages_Pr, "f") / o, 0, 0], h = Util.inverseTransform(l), c = document.createElement("canvas"); c.className = "textLayerImagePlaceholder"; c.width = 0; c.height = 0; Object.assign(c.style, { opacity: 0, position: "absolute", left: percentage(t), top: percentage(e), width: percentage(a / __classPrivateFieldGet(this, _TextLayerImages_Mr, "f")), height: percentage(o / __classPrivateFieldGet(this, _TextLayerImages_Pr, "f")), transformOrigin: "0% 0%", transform: `matrix(${l.join(",")})` }); __classPrivateFieldGet(this, _TextLayerImages_Uh, "f").set(c, { inverseTransform: h, width: a, height: o, x1: t, y1: e }); return c; };
    _TextLayerImages_jh = { value: null };
    globalThis._pdfjsTestingUtils = { HighlightOutliner };
    globalThis.pdfjsLib = { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType: f, AnnotationEditorType: m, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode: p, AnnotationType: C, applyOpacity, build: zt, ColorPicker, createValidAbsoluteUrl, CSSConstants, DOMSVGFactory, DrawLayer, FeatureTest, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, GlobalWorkerOptions, ImageKind: S, InvalidPDFException, isDataScheme, isPdfFile, isValidExplicitDest: pt, makeArr, makeMap, makeObj, MathClamp, noContextMenu, normalizeUnicode, OPS: B, OutputScale, PasswordResponses: z, PDFDataRangeTransport, PDFDateString, PDFWorker, PermissionFlag: b, PixelsPerInch, RenderingCancelledException, renderRichText, ResponseException, setLayerDimensions, shadow, SignatureExtractor, stopEvent, SupportedImageMimeTypes: Y, TextLayer, TextLayerImages, TouchManager, updateUrlHash, Util, VerbosityLevel: R, version: Ht, XfaLayer };
    globalThis.pdfjsLibClassic = { AbortException: AbortException, AnnotationEditorLayer: AnnotationEditorLayer, AnnotationEditorParamsType: f, AnnotationEditorType: m, AnnotationEditorUIManager: AnnotationEditorUIManager, AnnotationLayer: AnnotationLayer, AnnotationMode: p, AnnotationType: C, CSSConstants: CSSConstants, ColorPicker: ColorPicker, DOMSVGFactory: DOMSVGFactory, DrawLayer: DrawLayer, FeatureTest: FeatureTest, GlobalWorkerOptions: GlobalWorkerOptions, ImageKind: S, InvalidPDFException: InvalidPDFException, MathClamp: MathClamp, OPS: B, OutputScale: OutputScale, PDFDataRangeTransport: PDFDataRangeTransport, PDFDateString: PDFDateString, PDFWorker: PDFWorker, PasswordResponses: z, PermissionFlag: b, PixelsPerInch: PixelsPerInch, RenderingCancelledException: RenderingCancelledException, ResponseException: ResponseException, SignatureExtractor: SignatureExtractor, SupportedImageMimeTypes: Y, TextLayer: TextLayer, TextLayerImages: TextLayerImages, TouchManager: TouchManager, Util: Util, VerbosityLevel: R, XfaLayer: XfaLayer, applyOpacity: applyOpacity, build: zt, createValidAbsoluteUrl: createValidAbsoluteUrl, fetchData: fetchData, findContrastColor: findContrastColor, getDocument: getDocument, getFilenameFromUrl: getFilenameFromUrl, getPdfFilenameFromUrl: getPdfFilenameFromUrl, getRGB: getRGB, getUuid: getUuid, getXfaPageViewport: getXfaPageViewport, isDataScheme: isDataScheme, isPdfFile: isPdfFile, isValidExplicitDest: pt, makeArr: makeArr, makeMap: makeMap, makeObj: makeObj, noContextMenu: noContextMenu, normalizeUnicode: normalizeUnicode, renderRichText: renderRichText, setLayerDimensions: setLayerDimensions, shadow: shadow, stopEvent: stopEvent, updateUrlHash: updateUrlHash, version: Ht };
})();
