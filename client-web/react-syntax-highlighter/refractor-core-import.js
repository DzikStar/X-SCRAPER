(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter/refractor-core-import", "react-syntax-highlighter_languages_refractor_clike", "react-syntax-highlighter_languages_refractor_css", "react-syntax-highlighter_languages_refractor_javascript", "react-syntax-highlighter_languages_refractor_markup"],
    {
        297327: (e, n) => {
            "use strict";
            n.Q = function (e) {
                var n,
                    a = [],
                    l = String(e || r),
                    o = l.indexOf(t),
                    i = 0,
                    s = !1;
                for (; !s; ) -1 === o && ((o = l.length), (s = !0)), (!(n = l.slice(i, o).trim()) && s) || a.push(n), (i = o + 1), (o = l.indexOf(t, i));
                return a;
            };
            var t = ",",
                a = " ",
                r = "";
        },
        674163: (e) => {
            "use strict";
            e.exports = function (e, a) {
                var r,
                    l,
                    o,
                    i,
                    s,
                    u = e || "",
                    c = a || "div",
                    p = {},
                    g = -1,
                    d = u.length;
                for (; ++g <= d; ) ((o = u.charCodeAt(g)) && o !== t && o !== n) || ((i = u.slice(s, g)) && (l === t ? (r ? r.push(i) : ((r = [i]), (p.className = r))) : l === n ? (p.id = i) : (c = i)), (s = g + 1), (l = o));
                return { type: "element", tagName: c, properties: p, children: [] };
            };
            var n = 35,
                t = 46;
        },
        568924: (e, n, t) => {
            "use strict";
            var a = t(70521),
                r = t(902939),
                l = t(674163),
                o = t(993113).Q,
                i = t(297327).Q;
            e.exports = function (e, n, t) {
                var r = t
                    ? (function (e) {
                          var n,
                              t = e.length,
                              a = -1,
                              r = {};
                          for (; ++a < t; ) r[(n = e[a]).toLowerCase()] = n;
                          return r;
                      })(t)
                    : null;
                return function (e, t) {
                    var a,
                        o = l(e, n),
                        i = Array.prototype.slice.call(arguments, 2),
                        c = o.tagName.toLowerCase();
                    (o.tagName = r && s.call(r, c) ? r[c] : c),
                        t &&
                            (function (e, n) {
                                return (
                                    "string" == typeof e ||
                                    "length" in e ||
                                    (function (e, n) {
                                        var t = n.type;
                                        if ("input" === e || !t || "string" != typeof t) return !1;
                                        if ("object" == typeof n.children && "length" in n.children) return !0;
                                        if (((t = t.toLowerCase()), "button" === e)) return "menu" !== t && "submit" !== t && "reset" !== t && "button" !== t;
                                        return "value" in n;
                                    })(n.tagName, e)
                                );
                            })(t, o) &&
                            (i.unshift(t), (t = null));
                    if (t) for (a in t) p(o.properties, a, t[a]);
                    u(o.children, i), "template" === o.tagName && ((o.content = { type: "root", children: o.children }), (o.children = []));
                    return o;
                };
                function p(n, t, r) {
                    var l, s, u;
                    null != r &&
                        r == r &&
                        ((s = (l = a(e, t)).property),
                        "string" == typeof (u = r) && (l.spaceSeparated ? (u = o(u)) : l.commaSeparated ? (u = i(u)) : l.commaOrSpaceSeparated && (u = o(i(u).join(" ")))),
                        "style" === s &&
                            "string" != typeof r &&
                            (u = (function (e) {
                                var n,
                                    t = [];
                                for (n in e) t.push([n, e[n]].join(": "));
                                return t.join("; ");
                            })(u)),
                        "className" === s && n.className && (u = n.className.concat(u)),
                        (n[s] = (function (e, n, t) {
                            var a, r, l;
                            if ("object" != typeof t || !("length" in t)) return c(e, n, t);
                            (r = t.length), (a = -1), (l = []);
                            for (; ++a < r; ) l[a] = c(e, n, t[a]);
                            return l;
                        })(l, s, u)));
                }
            };
            var s = {}.hasOwnProperty;
            function u(e, n) {
                var t, a;
                if ("string" != typeof n && "number" != typeof n)
                    if ("object" == typeof n && "length" in n) for (t = -1, a = n.length; ++t < a; ) u(e, n[t]);
                    else {
                        if ("object" != typeof n || !("type" in n)) throw new Error("Expected node, nodes, or string, got `" + n + "`");
                        e.push(n);
                    }
                else e.push({ type: "text", value: String(n) });
            }
            function c(e, n, t) {
                var a = t;
                return e.number || e.positiveNumber ? isNaN(a) || "" === a || (a = Number(a)) : (e.boolean || e.overloadedBoolean) && ("string" != typeof a || ("" !== a && r(t) !== r(n)) || (a = !0)), a;
            }
        },
        88977: (e, n, t) => {
            "use strict";
            var a = t(559209),
                r = t(568924)(a, "div");
            (r.displayName = "html"), (e.exports = r);
        },
        22896: (e, n, t) => {
            "use strict";
            e.exports = t(88977);
        },
        273756: (e) => {
            "use strict";
            e.exports = function (e) {
                var n = "string" == typeof e ? e.charCodeAt(0) : e;
                return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
            };
        },
        365279: (e, n, t) => {
            "use strict";
            var a = t(273756),
                r = t(261278);
            e.exports = function (e) {
                return a(e) || r(e);
            };
        },
        261278: (e) => {
            "use strict";
            e.exports = function (e) {
                var n = "string" == typeof e ? e.charCodeAt(0) : e;
                return n >= 48 && n <= 57;
            };
        },
        348833: (e) => {
            "use strict";
            e.exports = function (e) {
                var n = "string" == typeof e ? e.charCodeAt(0) : e;
                return (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57);
            };
        },
        668108: (e) => {
            "use strict";
            var n;
            e.exports = function (e) {
                var t,
                    a = "&" + e + ";";
                if ((((n = n || document.createElement("i")).innerHTML = a), 59 === (t = n.textContent).charCodeAt(t.length - 1) && "semi" !== e)) return !1;
                return t !== a && t;
            };
        },
        818309: (e, n, t) => {
            "use strict";
            var a = t(93562),
                r = t(71216),
                l = t(261278),
                o = t(348833),
                i = t(365279),
                s = t(668108);
            e.exports = function (e, n) {
                var t,
                    l,
                    o = {};
                n || (n = {});
                for (l in g) (t = n[l]), (o[l] = null == t ? g[l] : t);
                (o.position.indent || o.position.start) && ((o.indent = o.position.indent || []), (o.position = o.position.start));
                return (function (e, n) {
                    var t,
                        l,
                        o,
                        g,
                        I,
                        B,
                        U,
                        H,
                        q,
                        W,
                        Z,
                        V,
                        K,
                        G,
                        Q,
                        J,
                        Y,
                        X,
                        ee,
                        ne = n.additional,
                        te = n.nonTerminated,
                        ae = n.text,
                        re = n.reference,
                        le = n.warning,
                        oe = n.textContext,
                        ie = n.referenceContext,
                        se = n.warningContext,
                        ue = n.position,
                        ce = n.indent || [],
                        pe = e.length,
                        ge = 0,
                        de = -1,
                        fe = ue.column || 1,
                        he = ue.line || 1,
                        me = "",
                        ve = [];
                    "string" == typeof ne && (ne = ne.charCodeAt(0));
                    (J = ye()), (H = le ? be : p), ge--, pe++;
                    for (; ++ge < pe; )
                        if ((I === f && (fe = ce[de] || 1), (I = e.charCodeAt(ge)) === v)) {
                            if ((U = e.charCodeAt(ge + 1)) === d || U === f || U === h || U === m || U === v || U === b || U != U || (ne && U === ne)) {
                                (me += c(I)), fe++;
                                continue;
                            }
                            for (V = K = ge + 1, ee = K, U === w ? ((ee = ++V), (U = e.charCodeAt(ee)) === k || U === F ? ((G = C), (ee = ++V)) : (G = E)) : (G = S), t = "", Z = "", g = "", Q = L[G], ee--; ++ee < pe && Q((U = e.charCodeAt(ee))); ) (g += c(U)), G === S && u.call(a, g) && ((t = g), (Z = a[g]));
                            (o = e.charCodeAt(ee) === y) && (ee++, (l = G === S && s(g)) && ((t = g), (Z = l))), (X = 1 + ee - K), (o || te) && (g ? (G === S ? (o && !Z ? H(N, 1) : (t !== g && ((X = 1 + (ee = V + t.length) - V), (o = !1)), o || ((q = t ? O : _), n.attribute ? ((U = e.charCodeAt(ee)) === x ? (H(q, X), (Z = null)) : i(U) ? (Z = null) : H(q, X)) : H(q, X))), (B = Z)) : (o || H($, X), z((B = parseInt(g, P[G]))) ? (H(T, X), (B = c(A))) : B in r ? (H(M, X), (B = r[B])) : ((W = ""), R(B) && H(M, X), B > 65535 && ((W += c(((B -= 65536) >>> 10) | 55296)), (B = 56320 | (1023 & B))), (B = W + c(B))))) : G !== S && H(j, X)), B ? (xe(), (J = ye()), (ge = ee - 1), (fe += ee - K + 1), ve.push(B), (Y = ye()).offset++, re && re.call(ie, B, { start: J, end: Y }, e.slice(K - 1, ee)), (J = Y)) : ((g = e.slice(K - 1, ee)), (me += g), (fe += g.length), (ge = ee - 1));
                        } else 10 === I && (he++, de++, (fe = 0)), I == I ? ((me += c(I)), fe++) : xe();
                    return ve.join("");
                    function ye() {
                        return { line: he, column: fe, offset: ge + (ue.offset || 0) };
                    }
                    function be(e, n) {
                        var t = ye();
                        (t.column += n), (t.offset += n), le.call(se, D[e], t, e);
                    }
                    function xe() {
                        me && (ve.push(me), ae && ae.call(oe, me, { start: J, end: ye() }), (me = ""));
                    }
                })(e, o);
            };
            var u = {}.hasOwnProperty,
                c = String.fromCharCode,
                p = Function.prototype,
                g = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 },
                d = 9,
                f = 10,
                h = 12,
                m = 32,
                v = 38,
                y = 59,
                b = 60,
                x = 61,
                w = 35,
                k = 88,
                F = 120,
                A = 65533,
                S = "named",
                C = "hexadecimal",
                E = "decimal",
                P = {};
            (P[C] = 16), (P[E] = 10);
            var L = {};
            (L[S] = i), (L[E] = l), (L[C] = o);
            var O = 1,
                $ = 2,
                _ = 3,
                j = 4,
                N = 5,
                M = 6,
                T = 7,
                D = {};
            function z(e) {
                return (e >= 55296 && e <= 57343) || e > 1114111;
            }
            function R(e) {
                return (e >= 1 && e <= 8) || 11 === e || (e >= 13 && e <= 31) || (e >= 127 && e <= 159) || (e >= 64976 && e <= 65007) || !(65535 & ~e) || 65534 == (65535 & e);
            }
            (D[O] = "Named character references must be terminated by a semicolon"), (D[$] = "Numeric character references must be terminated by a semicolon"), (D[_] = "Named character references cannot be empty"), (D[j] = "Numeric character references cannot be empty"), (D[N] = "Named character references must be known"), (D[M] = "Numeric character references cannot be disallowed"), (D[T] = "Numeric character references cannot be outside the permissible Unicode range");
        },
        70521: (e, n, t) => {
            "use strict";
            var a = t(902939),
                r = t(454688),
                l = t(209975),
                o = "data";
            e.exports = function (e, n) {
                var t = a(n),
                    g = n,
                    d = l;
                if (t in e.normal) return e.property[e.normal[t]];
                t.length > 4 &&
                    t.slice(0, 4) === o &&
                    i.test(n) &&
                    ("-" === n.charAt(4)
                        ? (g = (function (e) {
                              var n = e.slice(5).replace(s, p);
                              return o + n.charAt(0).toUpperCase() + n.slice(1);
                          })(n))
                        : (n = (function (e) {
                              var n = e.slice(4);
                              if (s.test(n)) return e;
                              (n = n.replace(u, c)), "-" !== n.charAt(0) && (n = "-" + n);
                              return o + n;
                          })(n)),
                    (d = r));
                return new d(g, n);
            };
            var i = /^data[-\w.:]+$/i,
                s = /-[a-z]/g,
                u = /[A-Z]/g;
            function c(e) {
                return "-" + e.toLowerCase();
            }
            function p(e) {
                return e.charAt(1).toUpperCase();
            }
        },
        559209: (e, n, t) => {
            "use strict";
            var a = t(602706),
                r = t(762322),
                l = t(613837),
                o = t(545367),
                i = t(212024),
                s = t(661921);
            e.exports = a([l, r, o, i, s]);
        },
        212024: (e, n, t) => {
            "use strict";
            var a = t(387311),
                r = t(996486),
                l = a.booleanish,
                o = a.number,
                i = a.spaceSeparated;
            e.exports = r({
                transform: function (e, n) {
                    return "role" === n ? n : "aria-" + n.slice(4).toLowerCase();
                },
                properties: { ariaActiveDescendant: null, ariaAtomic: l, ariaAutoComplete: null, ariaBusy: l, ariaChecked: l, ariaColCount: o, ariaColIndex: o, ariaColSpan: o, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: l, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: l, ariaFlowTo: i, ariaGrabbed: l, ariaHasPopup: null, ariaHidden: l, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: o, ariaLive: null, ariaModal: l, ariaMultiLine: l, ariaMultiSelectable: l, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: o, ariaPressed: l, ariaReadOnly: l, ariaRelevant: null, ariaRequired: l, ariaRoleDescription: i, ariaRowCount: o, ariaRowIndex: o, ariaRowSpan: o, ariaSelected: l, ariaSetSize: o, ariaSort: null, ariaValueMax: o, ariaValueMin: o, ariaValueNow: o, ariaValueText: null, role: null },
            });
        },
        661921: (e, n, t) => {
            "use strict";
            var a = t(387311),
                r = t(996486),
                l = t(512660),
                o = a.boolean,
                i = a.overloadedBoolean,
                s = a.booleanish,
                u = a.number,
                c = a.spaceSeparated,
                p = a.commaSeparated;
            e.exports = r({
                space: "html",
                attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" },
                transform: l,
                mustUseProperty: ["checked", "multiple", "muted", "selected"],
                properties: {
                    abbr: null,
                    accept: p,
                    acceptCharset: c,
                    accessKey: c,
                    action: null,
                    allow: null,
                    allowFullScreen: o,
                    allowPaymentRequest: o,
                    allowUserMedia: o,
                    alt: null,
                    as: null,
                    async: o,
                    autoCapitalize: null,
                    autoComplete: c,
                    autoFocus: o,
                    autoPlay: o,
                    capture: o,
                    charSet: null,
                    checked: o,
                    cite: null,
                    className: c,
                    cols: u,
                    colSpan: null,
                    content: null,
                    contentEditable: s,
                    controls: o,
                    controlsList: c,
                    coords: u | p,
                    crossOrigin: null,
                    data: null,
                    dateTime: null,
                    decoding: null,
                    default: o,
                    defer: o,
                    dir: null,
                    dirName: null,
                    disabled: o,
                    download: i,
                    draggable: s,
                    encType: null,
                    enterKeyHint: null,
                    form: null,
                    formAction: null,
                    formEncType: null,
                    formMethod: null,
                    formNoValidate: o,
                    formTarget: null,
                    headers: c,
                    height: u,
                    hidden: o,
                    high: u,
                    href: null,
                    hrefLang: null,
                    htmlFor: c,
                    httpEquiv: c,
                    id: null,
                    imageSizes: null,
                    imageSrcSet: p,
                    inputMode: null,
                    integrity: null,
                    is: null,
                    isMap: o,
                    itemId: null,
                    itemProp: c,
                    itemRef: c,
                    itemScope: o,
                    itemType: c,
                    kind: null,
                    label: null,
                    lang: null,
                    language: null,
                    list: null,
                    loading: null,
                    loop: o,
                    low: u,
                    manifest: null,
                    max: null,
                    maxLength: u,
                    media: null,
                    method: null,
                    min: null,
                    minLength: u,
                    multiple: o,
                    muted: o,
                    name: null,
                    nonce: null,
                    noModule: o,
                    noValidate: o,
                    onAbort: null,
                    onAfterPrint: null,
                    onAuxClick: null,
                    onBeforePrint: null,
                    onBeforeUnload: null,
                    onBlur: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onContextMenu: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFormData: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLanguageChange: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadEnd: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMessageError: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRejectionHandled: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSecurityPolicyViolation: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onSlotChange: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnhandledRejection: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onWheel: null,
                    open: o,
                    optimum: u,
                    pattern: null,
                    ping: c,
                    placeholder: null,
                    playsInline: o,
                    poster: null,
                    preload: null,
                    readOnly: o,
                    referrerPolicy: null,
                    rel: c,
                    required: o,
                    reversed: o,
                    rows: u,
                    rowSpan: u,
                    sandbox: c,
                    scope: null,
                    scoped: o,
                    seamless: o,
                    selected: o,
                    shape: null,
                    size: u,
                    sizes: null,
                    slot: null,
                    span: u,
                    spellCheck: s,
                    src: null,
                    srcDoc: null,
                    srcLang: null,
                    srcSet: p,
                    start: u,
                    step: null,
                    style: null,
                    tabIndex: u,
                    target: null,
                    title: null,
                    translate: null,
                    type: null,
                    typeMustMatch: o,
                    useMap: null,
                    value: s,
                    width: u,
                    wrap: null,
                    align: null,
                    aLink: null,
                    archive: c,
                    axis: null,
                    background: null,
                    bgColor: null,
                    border: u,
                    borderColor: null,
                    bottomMargin: u,
                    cellPadding: null,
                    cellSpacing: null,
                    char: null,
                    charOff: null,
                    classId: null,
                    clear: null,
                    code: null,
                    codeBase: null,
                    codeType: null,
                    color: null,
                    compact: o,
                    declare: o,
                    event: null,
                    face: null,
                    frame: null,
                    frameBorder: null,
                    hSpace: u,
                    leftMargin: u,
                    link: null,
                    longDesc: null,
                    lowSrc: null,
                    marginHeight: u,
                    marginWidth: u,
                    noResize: o,
                    noHref: o,
                    noShade: o,
                    noWrap: o,
                    object: null,
                    profile: null,
                    prompt: null,
                    rev: null,
                    rightMargin: u,
                    rules: null,
                    scheme: null,
                    scrolling: s,
                    standby: null,
                    summary: null,
                    text: null,
                    topMargin: u,
                    valueType: null,
                    version: null,
                    vAlign: null,
                    vLink: null,
                    vSpace: u,
                    allowTransparency: null,
                    autoCorrect: null,
                    autoSave: null,
                    disablePictureInPicture: o,
                    disableRemotePlayback: o,
                    prefix: null,
                    property: null,
                    results: u,
                    security: null,
                    unselectable: null,
                },
            });
        },
        512660: (e, n, t) => {
            "use strict";
            var a = t(772003);
            e.exports = function (e, n) {
                return a(e, n.toLowerCase());
            };
        },
        772003: (e) => {
            "use strict";
            e.exports = function (e, n) {
                return n in e ? e[n] : n;
            };
        },
        996486: (e, n, t) => {
            "use strict";
            var a = t(902939),
                r = t(374362),
                l = t(454688);
            e.exports = function (e) {
                var n,
                    t,
                    o = e.space,
                    i = e.mustUseProperty || [],
                    s = e.attributes || {},
                    u = e.properties,
                    c = e.transform,
                    p = {},
                    g = {};
                for (n in u) (t = new l(n, c(s, n), u[n], o)), -1 !== i.indexOf(n) && (t.mustUseProperty = !0), (p[n] = t), (g[a(n)] = n), (g[a(t.attribute)] = n);
                return new r(p, g, o);
            };
        },
        454688: (e, n, t) => {
            "use strict";
            var a = t(209975),
                r = t(387311);
            (e.exports = i), (i.prototype = new a()), (i.prototype.defined = !0);
            var l = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
                o = l.length;
            function i(e, n, t, i) {
                var u,
                    c = -1;
                for (s(this, "space", i), a.call(this, e, n); ++c < o; ) s(this, (u = l[c]), (t & r[u]) === r[u]);
            }
            function s(e, n, t) {
                t && (e[n] = t);
            }
        },
        209975: (e) => {
            "use strict";
            e.exports = t;
            var n = t.prototype;
            function t(e, n) {
                (this.property = e), (this.attribute = n);
            }
            (n.space = null), (n.attribute = null), (n.property = null), (n.boolean = !1), (n.booleanish = !1), (n.overloadedBoolean = !1), (n.number = !1), (n.commaSeparated = !1), (n.spaceSeparated = !1), (n.commaOrSpaceSeparated = !1), (n.mustUseProperty = !1), (n.defined = !1);
        },
        602706: (e, n, t) => {
            "use strict";
            var a = t(551960),
                r = t(374362);
            e.exports = function (e) {
                var n,
                    t,
                    l = e.length,
                    o = [],
                    i = [],
                    s = -1;
                for (; ++s < l; ) (n = e[s]), o.push(n.property), i.push(n.normal), (t = n.space);
                return new r(a.apply(null, o), a.apply(null, i), t);
            };
        },
        374362: (e) => {
            "use strict";
            e.exports = t;
            var n = t.prototype;
            function t(e, n, t) {
                (this.property = e), (this.normal = n), t && (this.space = t);
            }
            (n.space = null), (n.normal = {}), (n.property = {});
        },
        387311: (e, n) => {
            "use strict";
            var t = 0;
            function a() {
                return Math.pow(2, ++t);
            }
            (n.boolean = a()), (n.booleanish = a()), (n.overloadedBoolean = a()), (n.number = a()), (n.spaceSeparated = a()), (n.commaSeparated = a()), (n.commaOrSpaceSeparated = a());
        },
        762322: (e, n, t) => {
            "use strict";
            var a = t(996486);
            e.exports = a({
                space: "xlink",
                transform: function (e, n) {
                    return "xlink:" + n.slice(5).toLowerCase();
                },
                properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null },
            });
        },
        613837: (e, n, t) => {
            "use strict";
            var a = t(996486);
            e.exports = a({
                space: "xml",
                transform: function (e, n) {
                    return "xml:" + n.slice(3).toLowerCase();
                },
                properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
            });
        },
        545367: (e, n, t) => {
            "use strict";
            var a = t(996486),
                r = t(512660);
            e.exports = a({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: r, properties: { xmlns: null, xmlnsXLink: null } });
        },
        902939: (e) => {
            "use strict";
            e.exports = function (e) {
                return e.toLowerCase();
            };
        },
        692037: (e, n, t) => {
            "use strict";
            var a,
                r,
                l = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof t.g ? t.g : {},
                o =
                    ((r = (a = "Prism" in l) ? l.Prism : void 0),
                    function () {
                        a ? (l.Prism = r) : delete l.Prism, (a = void 0), (r = void 0);
                    });
            l.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
            var i = t(22896),
                s = t(818309),
                u = t(739399),
                c = t(226495),
                p = t(840614),
                g = t(342449),
                d = t(528473);
            o();
            var f = {}.hasOwnProperty;
            function h() {}
            h.prototype = u;
            var m = new h();
            function v(e) {
                if ("function" != typeof e || !e.displayName) throw new Error("Expected `function` for `grammar`, got `" + e + "`");
                void 0 === m.languages[e.displayName] && e(m);
            }
            (e.exports = m),
                (m.highlight = function (e, n) {
                    var t,
                        a = u.highlight;
                    if ("string" != typeof e) throw new Error("Expected `string` for `value`, got `" + e + "`");
                    if ("Object" === m.util.type(n)) (t = n), (n = null);
                    else {
                        if ("string" != typeof n) throw new Error("Expected `string` for `name`, got `" + n + "`");
                        if (!f.call(m.languages, n)) throw new Error("Unknown language: `" + n + "` is not registered");
                        t = m.languages[n];
                    }
                    return a.call(this, e, t, n);
                }),
                (m.register = v),
                (m.alias = function (e, n) {
                    var t,
                        a,
                        r,
                        l,
                        o = m.languages,
                        i = e;
                    n && ((i = {})[e] = n);
                    for (t in i) for (r = (a = "string" == typeof (a = i[t]) ? [a] : a).length, l = -1; ++l < r; ) o[a[l]] = o[t];
                }),
                (m.registered = function (e) {
                    if ("string" != typeof e) throw new Error("Expected `string` for `language`, got `" + e + "`");
                    return f.call(m.languages, e);
                }),
                (m.listLanguages = function () {
                    var e,
                        n = m.languages,
                        t = [];
                    for (e in n) f.call(n, e) && "object" == typeof n[e] && t.push(e);
                    return t;
                }),
                v(c),
                v(p),
                v(g),
                v(d),
                (m.util.encode = function (e) {
                    return e;
                }),
                (m.Token.stringify = function (e, n, t) {
                    var a;
                    if ("string" == typeof e) return { type: "text", value: e };
                    if ("Array" === m.util.type(e))
                        return (function (e, n) {
                            var t,
                                a = [],
                                r = e.length,
                                l = -1;
                            for (; ++l < r; ) "" !== (t = e[l]) && null != t && a.push(t);
                            (l = -1), (r = a.length);
                            for (; ++l < r; ) (t = a[l]), (a[l] = m.Token.stringify(t, n, a));
                            return a;
                        })(e, n);
                    (a = { type: e.type, content: m.Token.stringify(e.content, n, t), tag: "span", classes: ["token", e.type], attributes: {}, language: n, parent: t }), e.alias && (a.classes = a.classes.concat(e.alias));
                    return (
                        m.hooks.run("wrap", a),
                        i(
                            a.tag + "." + a.classes.join("."),
                            (function (e) {
                                var n;
                                for (n in e) e[n] = s(e[n]);
                                return e;
                            })(a.attributes),
                            a.content,
                        )
                    );
                });
        },
        342449: (e) => {
            "use strict";
            function n(e) {
                e.languages.clike = {
                    comment: [
                        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
                        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                    ],
                    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                    "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
                    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                    boolean: /\b(?:false|true)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/,
                };
            }
            (e.exports = n), (n.displayName = "clike"), (n.aliases = []);
        },
        840614: (e) => {
            "use strict";
            function n(e) {
                !(function (e) {
                    var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                    (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }), (e.languages.css.atrule.inside.rest = e.languages.css);
                    var t = e.languages.markup;
                    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
                })(e);
            }
            (e.exports = n), (n.displayName = "css"), (n.aliases = []);
        },
        528473: (e) => {
            "use strict";
            function n(e) {
                (e.languages.javascript = e.languages.extend("clike", {
                    "class-name": [e.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }],
                    keyword: [
                        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
                        { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 },
                    ],
                    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 },
                    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
                })),
                    (e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
                    e.languages.insertBefore("javascript", "keyword", {
                        regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: e.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } },
                        "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" },
                        parameter: [
                            { pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: e.languages.javascript },
                            { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: e.languages.javascript },
                            { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: e.languages.javascript },
                            { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: e.languages.javascript },
                        ],
                        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                    }),
                    e.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: e.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }),
                    e.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }),
                    e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")),
                    (e.languages.js = e.languages.javascript);
            }
            (e.exports = n), (n.displayName = "javascript"), (n.aliases = ["js"]);
        },
        226495: (e) => {
            "use strict";
            function n(e) {
                (e.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }),
                    (e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity),
                    (e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup),
                    e.hooks.add("wrap", function (e) {
                        "entity" === e.type && (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
                    }),
                    Object.defineProperty(e.languages.markup.tag, "addInlined", {
                        value: function (n, t) {
                            var a = {};
                            (a["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: e.languages[t] }), (a.cdata = /^<!\[CDATA\[|\]\]>$/i);
                            var r = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a } };
                            r["language-" + t] = { pattern: /[\s\S]+/, inside: e.languages[t] };
                            var l = {};
                            (l[n] = {
                                pattern: RegExp(
                                    /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                                        return n;
                                    }),
                                    "i",
                                ),
                                lookbehind: !0,
                                greedy: !0,
                                inside: r,
                            }),
                                e.languages.insertBefore("markup", "cdata", l);
                        },
                    }),
                    Object.defineProperty(e.languages.markup.tag, "addAttribute", {
                        value: function (n, t) {
                            e.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: e.languages[t] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
                        },
                    }),
                    (e.languages.html = e.languages.markup),
                    (e.languages.mathml = e.languages.markup),
                    (e.languages.svg = e.languages.markup),
                    (e.languages.xml = e.languages.extend("markup", {})),
                    (e.languages.ssml = e.languages.xml),
                    (e.languages.atom = e.languages.xml),
                    (e.languages.rss = e.languages.xml);
            }
            (e.exports = n), (n.displayName = "markup"), (n.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
        },
        739399: (e, n, t) => {
            var a = (function (e) {
                var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                    t = 0,
                    a = {},
                    r = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(n) {
                                return n instanceof l
                                    ? new l(n.type, e(n.content), n.alias)
                                    : Array.isArray(n)
                                      ? n.map(e)
                                      : n
                                            .replace(/&/g, "&amp;")
                                            .replace(/</g, "&lt;")
                                            .replace(/\u00a0/g, " ");
                            },
                            type: function (e) {
                                return Object.prototype.toString.call(e).slice(8, -1);
                            },
                            objId: function (e) {
                                return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
                            },
                            clone: function e(n, t) {
                                var a, l;
                                switch (((t = t || {}), r.util.type(n))) {
                                    case "Object":
                                        if (((l = r.util.objId(n)), t[l])) return t[l];
                                        for (var o in ((a = {}), (t[l] = a), n)) n.hasOwnProperty(o) && (a[o] = e(n[o], t));
                                        return a;
                                    case "Array":
                                        return (
                                            (l = r.util.objId(n)),
                                            t[l]
                                                ? t[l]
                                                : ((a = []),
                                                  (t[l] = a),
                                                  n.forEach(function (n, r) {
                                                      a[r] = e(n, t);
                                                  }),
                                                  a)
                                        );
                                    default:
                                        return n;
                                }
                            },
                            getLanguage: function (e) {
                                for (; e; ) {
                                    var t = n.exec(e.className);
                                    if (t) return t[1].toLowerCase();
                                    e = e.parentElement;
                                }
                                return "none";
                            },
                            setLanguage: function (e, t) {
                                (e.className = e.className.replace(RegExp(n, "gi"), "")), e.classList.add("language-" + t);
                            },
                            currentScript: function () {
                                if ("undefined" == typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error();
                                } catch (a) {
                                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
                                    if (e) {
                                        var n = document.getElementsByTagName("script");
                                        for (var t in n) if (n[t].src == e) return n[t];
                                    }
                                    return null;
                                }
                            },
                            isActive: function (e, n, t) {
                                for (var a = "no-" + n; e; ) {
                                    var r = e.classList;
                                    if (r.contains(n)) return !0;
                                    if (r.contains(a)) return !1;
                                    e = e.parentElement;
                                }
                                return !!t;
                            },
                        },
                        languages: {
                            plain: a,
                            plaintext: a,
                            text: a,
                            txt: a,
                            extend: function (e, n) {
                                var t = r.util.clone(r.languages[e]);
                                for (var a in n) t[a] = n[a];
                                return t;
                            },
                            insertBefore: function (e, n, t, a) {
                                var l = (a = a || r.languages)[e],
                                    o = {};
                                for (var i in l)
                                    if (l.hasOwnProperty(i)) {
                                        if (i == n) for (var s in t) t.hasOwnProperty(s) && (o[s] = t[s]);
                                        t.hasOwnProperty(i) || (o[i] = l[i]);
                                    }
                                var u = a[e];
                                return (
                                    (a[e] = o),
                                    r.languages.DFS(r.languages, function (n, t) {
                                        t === u && n != e && (this[n] = o);
                                    }),
                                    o
                                );
                            },
                            DFS: function e(n, t, a, l) {
                                l = l || {};
                                var o = r.util.objId;
                                for (var i in n)
                                    if (n.hasOwnProperty(i)) {
                                        t.call(n, i, n[i], a || i);
                                        var s = n[i],
                                            u = r.util.type(s);
                                        "Object" !== u || l[o(s)] ? "Array" !== u || l[o(s)] || ((l[o(s)] = !0), e(s, t, i, l)) : ((l[o(s)] = !0), e(s, t, null, l));
                                    }
                            },
                        },
                        plugins: {},
                        highlightAll: function (e, n) {
                            r.highlightAllUnder(document, e, n);
                        },
                        highlightAllUnder: function (e, n, t) {
                            var a = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                            r.hooks.run("before-highlightall", a), (a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector))), r.hooks.run("before-all-elements-highlight", a);
                            for (var l, o = 0; (l = a.elements[o++]); ) r.highlightElement(l, !0 === n, a.callback);
                        },
                        highlightElement: function (n, t, a) {
                            var l = r.util.getLanguage(n),
                                o = r.languages[l];
                            r.util.setLanguage(n, l);
                            var i = n.parentElement;
                            i && "pre" === i.nodeName.toLowerCase() && r.util.setLanguage(i, l);
                            var s = { element: n, language: l, grammar: o, code: n.textContent };
                            function u(e) {
                                (s.highlightedCode = e), r.hooks.run("before-insert", s), (s.element.innerHTML = s.highlightedCode), r.hooks.run("after-highlight", s), r.hooks.run("complete", s), a && a.call(s.element);
                            }
                            if ((r.hooks.run("before-sanity-check", s), (i = s.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !s.code)) return r.hooks.run("complete", s), void (a && a.call(s.element));
                            if ((r.hooks.run("before-highlight", s), s.grammar))
                                if (t && e.Worker) {
                                    var c = new Worker(r.filename);
                                    (c.onmessage = function (e) {
                                        u(e.data);
                                    }),
                                        c.postMessage(JSON.stringify({ language: s.language, code: s.code, immediateClose: !0 }));
                                } else u(r.highlight(s.code, s.grammar, s.language));
                            else u(r.util.encode(s.code));
                        },
                        highlight: function (e, n, t) {
                            var a = { code: e, grammar: n, language: t };
                            if ((r.hooks.run("before-tokenize", a), !a.grammar)) throw new Error('The language "' + a.language + '" has no grammar.');
                            return (a.tokens = r.tokenize(a.code, a.grammar)), r.hooks.run("after-tokenize", a), l.stringify(r.util.encode(a.tokens), a.language);
                        },
                        tokenize: function (e, n) {
                            var t = n.rest;
                            if (t) {
                                for (var a in t) n[a] = t[a];
                                delete n.rest;
                            }
                            var r = new s();
                            return (
                                u(r, r.head, e),
                                i(e, r, n, r.head, 0),
                                (function (e) {
                                    var n = [],
                                        t = e.head.next;
                                    for (; t !== e.tail; ) n.push(t.value), (t = t.next);
                                    return n;
                                })(r)
                            );
                        },
                        hooks: {
                            all: {},
                            add: function (e, n) {
                                var t = r.hooks.all;
                                (t[e] = t[e] || []), t[e].push(n);
                            },
                            run: function (e, n) {
                                var t = r.hooks.all[e];
                                if (t && t.length) for (var a, l = 0; (a = t[l++]); ) a(n);
                            },
                        },
                        Token: l,
                    };
                function l(e, n, t, a) {
                    (this.type = e), (this.content = n), (this.alias = t), (this.length = 0 | (a || "").length);
                }
                function o(e, n, t, a) {
                    e.lastIndex = n;
                    var r = e.exec(t);
                    if (r && a && r[1]) {
                        var l = r[1].length;
                        (r.index += l), (r[0] = r[0].slice(l));
                    }
                    return r;
                }
                function i(e, n, t, a, s, p) {
                    for (var g in t)
                        if (t.hasOwnProperty(g) && t[g]) {
                            var d = t[g];
                            d = Array.isArray(d) ? d : [d];
                            for (var f = 0; f < d.length; ++f) {
                                if (p && p.cause == g + "," + f) return;
                                var h = d[f],
                                    m = h.inside,
                                    v = !!h.lookbehind,
                                    y = !!h.greedy,
                                    b = h.alias;
                                if (y && !h.pattern.global) {
                                    var x = h.pattern.toString().match(/[imsuy]*$/)[0];
                                    h.pattern = RegExp(h.pattern.source, x + "g");
                                }
                                for (var w = h.pattern || h, k = a.next, F = s; k !== n.tail && !(p && F >= p.reach); F += k.value.length, k = k.next) {
                                    var A = k.value;
                                    if (n.length > e.length) return;
                                    if (!(A instanceof l)) {
                                        var S,
                                            C = 1;
                                        if (y) {
                                            if (!(S = o(w, F, e, v)) || S.index >= e.length) break;
                                            var E = S.index,
                                                P = S.index + S[0].length,
                                                L = F;
                                            for (L += k.value.length; E >= L; ) L += (k = k.next).value.length;
                                            if (((F = L -= k.value.length), k.value instanceof l)) continue;
                                            for (var O = k; O !== n.tail && (L < P || "string" == typeof O.value); O = O.next) C++, (L += O.value.length);
                                            C--, (A = e.slice(F, L)), (S.index -= F);
                                        } else if (!(S = o(w, 0, A, v))) continue;
                                        E = S.index;
                                        var $ = S[0],
                                            _ = A.slice(0, E),
                                            j = A.slice(E + $.length),
                                            N = F + A.length;
                                        p && N > p.reach && (p.reach = N);
                                        var M = k.prev;
                                        if ((_ && ((M = u(n, M, _)), (F += _.length)), c(n, M, C), (k = u(n, M, new l(g, m ? r.tokenize($, m) : $, b, $))), j && u(n, k, j), C > 1)) {
                                            var T = { cause: g + "," + f, reach: N };
                                            i(e, n, t, k.prev, F, T), p && T.reach > p.reach && (p.reach = T.reach);
                                        }
                                    }
                                }
                            }
                        }
                }
                function s() {
                    var e = { value: null, prev: null, next: null },
                        n = { value: null, prev: e, next: null };
                    (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
                }
                function u(e, n, t) {
                    var a = n.next,
                        r = { value: t, prev: n, next: a };
                    return (n.next = r), (a.prev = r), e.length++, r;
                }
                function c(e, n, t) {
                    for (var a = n.next, r = 0; r < t && a !== e.tail; r++) a = a.next;
                    (n.next = a), (a.prev = n), (e.length -= r);
                }
                if (
                    ((e.Prism = r),
                    (l.stringify = function e(n, t) {
                        if ("string" == typeof n) return n;
                        if (Array.isArray(n)) {
                            var a = "";
                            return (
                                n.forEach(function (n) {
                                    a += e(n, t);
                                }),
                                a
                            );
                        }
                        var l = { type: n.type, content: e(n.content, t), tag: "span", classes: ["token", n.type], attributes: {}, language: t },
                            o = n.alias;
                        o && (Array.isArray(o) ? Array.prototype.push.apply(l.classes, o) : l.classes.push(o)), r.hooks.run("wrap", l);
                        var i = "";
                        for (var s in l.attributes) i += " " + s + '="' + (l.attributes[s] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + i + ">" + l.content + "</" + l.tag + ">";
                    }),
                    !e.document)
                )
                    return e.addEventListener
                        ? (r.disableWorkerMessageHandler ||
                              e.addEventListener(
                                  "message",
                                  function (n) {
                                      var t = JSON.parse(n.data),
                                          a = t.language,
                                          l = t.code,
                                          o = t.immediateClose;
                                      e.postMessage(r.highlight(l, r.languages[a], a)), o && e.close();
                                  },
                                  !1,
                              ),
                          r)
                        : r;
                var p = r.util.currentScript();
                function g() {
                    r.manual || r.highlightAll();
                }
                if ((p && ((r.filename = p.src), p.hasAttribute("data-manual") && (r.manual = !0)), !r.manual)) {
                    var d = document.readyState;
                    "loading" === d || ("interactive" === d && p && p.defer) ? document.addEventListener("DOMContentLoaded", g) : window.requestAnimationFrame ? window.requestAnimationFrame(g) : window.setTimeout(g, 16);
                }
                return r;
            })("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            /**
             * Prism: Lightweight, robust, elegant syntax highlighting
             *
             * @license MIT <https://opensource.org/licenses/MIT>
             * @author Lea Verou <https://lea.verou.me>
             * @namespace
             * @public
             */ e.exports && (e.exports = a), void 0 !== t.g && (t.g.Prism = a);
        },
        993113: (e, n) => {
            "use strict";
            n.Q = function (e) {
                var n = String(e || t).trim();
                return n === t ? [] : n.split(r);
            };
            var t = "",
                a = " ",
                r = /[ \t\n\r\f]+/g;
        },
        551960: (e) => {
            e.exports = function () {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a) n.call(a, r) && (e[r] = a[r]);
                }
                return e;
            };
            var n = Object.prototype.hasOwnProperty;
        },
        93562: (e) => {
            "use strict";
            e.exports = JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}');
        },
        71216: (e) => {
            "use strict";
            e.exports = JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}');
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter/refractor-core-import.2921ef3a.js.map
