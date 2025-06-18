"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch-6107ac1a"],
    {
        174647: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, r) => e.get("foundmedia/categories", t, r),
                category(t, r) {
                    const { category: o, ...a } = t;
                    return e.get(`foundmedia/categories/${o}`, a, r);
                },
                search: (t, r) => e.get("foundmedia/search", t, r),
            });
        },
        229333: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(466999),
                n = r(325686),
                i = r(392237),
                l = r(111677);
            const s = r.n(l)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        r = s({ title: t });
                    return o.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), o.createElement(n.Z, { "aria-label": r }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, r) => {
            r.d(t, { ZP: () => h });
            var o = r(202784),
                a = r(614983),
                n = r.n(a),
                i = r(325686),
                l = r(370006),
                s = r(786998),
                c = r(929028),
                d = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: w, titleIconCell: Z, titleIconCellSize: C, withBackground: v, withWideContainer: B } = this.props,
                        { isModal: k } = this.context,
                        x = n ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!v, k, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: r, isFullWidth: i, isLarge: c, leftControl: x, middleControl: h, position: u(p, k, a), rightControl: m, style: b, subtitle: f, title: y, titleDomId: w, titleIconCell: Z, titleIconCellSize: C, withBackground: E, withWideContainer: B }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            class i extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(a.Z, { style: l.root });
                }
            }
            const l = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(807896),
                a = r(202784),
                n = r(182056),
                i = r(879113),
                l = r(392237),
                s = r(111677),
                c = r.n(s),
                d = r(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const l = n.Z.isOnline();
                    return a.createElement(i.Z, (0, o.Z)({}, t, { icon: l ? void 0 : a.createElement(d.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => g, w: () => p });
            var o = r(202784),
                a = r(325686),
                n = r(108362),
                i = r(386802),
                l = r(392237),
                s = r(652904),
                c = r(555079),
                d = r(625661),
                u = r(449067),
                h = r(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: w } = this.props,
                                { isModal: Z } = this.context;
                            return o.createElement(a.Z, { style: Z ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (Z ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !Z, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [Z && m.appBarModal, t], subtitle: y, title: w, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: p, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: g }), o.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && y, o.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, f && m.containerModal, i] }, f ? o.createElement(h.Z, { style: m.viewport }, y, r) : r), t ? o.createElement(a.Z, { style: [m.bottomBarModal, !f && !b && m.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = p;
        },
        965245: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(807896),
                a = r(202784),
                n = r(229333),
                i = r(414939),
                l = r(334346);
            const s = ({ accessibilityTitle: e, footer: t = a.createElement(i.Z, null), ...r }) => {
                const s = a.createElement(l.C, (0, o.Z)({}, r, { footer: t }));
                return e ? a.createElement(n.Z, { title: e }, s) : s;
            };
        },
        349035: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(202784),
                a = r(272175);
            const n = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), o.createElement(a.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => s, Z: () => l });
            var o = r(807896),
                a = r(202784),
                n = r(524084),
                i = r(768572);
            const l = "stable_sort_index",
                s = a.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return a.createElement(i.ZP, { identifier: r }, a.createElement(n.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        705079: (e, t, r) => {
            r.d(t, { s: () => a });
            var o = r(99107);
            const a = (e) => e === o.p_;
        },
        56851: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                a = r(420740),
                n = r(108362),
                i = r(731708),
                l = r(154003),
                s = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(349035);
            const h = "error-detail",
                p = d().e49537c2,
                m = d().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(a.Z, { testID: h }, o.createElement(u.Z, null), o.createElement(n.Z, { style: b.root }, o.createElement(i.ZP, { align: "center", color: "gray700", style: b.retryText }, p), o.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(500002),
                n = r(668214),
                i = r(997174),
                l = r(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const c = a || l;
                    ((c && a !== l) || (!c && r !== n) || o !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(s(c));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                a = r(476984),
                n = r.n(a),
                i = r(143778),
                l = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (a) {
                        case c:
                            return b ? o.createElement(l.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : r ? o.createElement(s.m, { failureMessage: r }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        451566: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                a = r(202784),
                n = r(928316),
                i = r(372612),
                l = r(392237);
            class s extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = n.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = l.default.theme;
                    return a.createElement(i.Z, (0, o.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const c = s;
        },
        276259: (e, t, r) => {
            r.d(t, { Lw: () => a, Re: () => u, VJ: () => l, ZF: () => h, hv: () => s, ku: () => o, qp: () => n, uv: () => i, v5: () => d });
            r(571372), r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(543673), r(240753), r(128399);
            function o(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function a(e) {
                return new Promise((t, r) => {
                    const o = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== o.length) r(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, r] = o,
                                    a = atob(r),
                                    n = a.length,
                                    i = Array(n);
                                for (let e = 0; e < n; e++) i[e] = a.charCodeAt(e);
                                t(new Blob([new Uint8Array(i)], { type: e }));
                            } else r(Error("The Uint8Array type is not available"));
                        else r(Error("The atob API is not available"));
                    else r(Error("The Blob API is not available"));
                });
            }
            const n = (e, t) =>
                    new Promise((r, o) => {
                        const a = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                a.abort?.(), o(Error(h));
                            }),
                            (a.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? r(e.target.result) : o(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (a.onerror = (e) => {
                                o(e);
                            }),
                            a.readAsArrayBuffer(e);
                    }),
                i = (e, t) => {
                    const r = document.createElement("a");
                    (r.href = e), (r.download = t), (r.target = "_blank"), r.click(), r.remove();
                },
                l = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const r = new Image();
                            (r.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = r.width), (e.height = r.height), e.getContext("2d").drawImage(r, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (r.crossOrigin = "anonymous"),
                                (r.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                s = async (e, t) => {
                    if (e.size <= t) return e;
                    let r = e,
                        o = 1;
                    for (; r && r.size > t; )
                        try {
                            o > 0.2 ? ((o *= 0.7), (r = await c(r, 1, o))) : (r = await c(r, 0.7, o));
                        } catch (e) {
                            r = void 0;
                        }
                    return r;
                },
                c = (e, t, r) =>
                    new Promise((o, a) => {
                        const n = new Image();
                        (n.onload = () => {
                            const e = document.createElement("canvas"),
                                a = e.getContext("2d"),
                                i = n.width * t,
                                l = n.height * t;
                            (e.width = i),
                                (e.height = l),
                                a.drawImage(n, 0, 0, i, l),
                                e.toBlob(
                                    (e) => {
                                        o(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    r,
                                );
                        }),
                            (n.onerror = () => a(new Error("Failed to load image while resizing"))),
                            (n.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
                h = "Reading aborted";
        },
        364837: (e, t, r) => {
            r.d(t, { R: () => c });
            var o = r(19697),
                a = r(549755),
                n = r(205074);
            const i = 1,
                l = 2,
                s = 3,
                c = (e) => {
                    if ((0, n.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: r, orientation: n, width: i } = e;
                            return (0, o.$i)(r, i, t, n).then(
                                (e) => (0, o.q8)(e),
                                (e) => {
                                    throw new a.Z("Gif preview could not be generated", s);
                                },
                            );
                        }
                        {
                            const e = new a.Z("The provided image must be a gif", l);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new a.Z("The provided file is not a valid image", i);
                        return Promise.reject(e);
                    }
                };
        },
        372612: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var o = r(133028),
                a = r(807896),
                n = r(231461),
                i = r(202784),
                l = r(890601),
                s = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const c = (e, t) => {
                var r;
                return "string" == typeof e ? "" + parseFloat(e) * t + e.match(s)[1] : ((r = e), !isNaN(parseFloat(r)) && isFinite(r) ? e * t : void 0);
            };
            var d = r(297689),
                u = r(325686),
                h = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                p = {},
                m = "0px 1px 3px rgba(0,0,0,0.5)",
                g = m + ", 0 0 0 10px rgba(0,0,0,0.1)",
                b = "#D5D5D5",
                f = "#BDBDBD",
                y = i.forwardRef((e, t) => {
                    var r = e["aria-label"],
                        o = e.accessibilityLabel,
                        s = e.activeThumbColor,
                        y = e.activeTrackColor,
                        Z = e.disabled,
                        C = void 0 !== Z && Z,
                        v = e.onValueChange,
                        B = e.style,
                        k = void 0 === B ? p : B,
                        x = e.thumbColor,
                        E = e.trackColor,
                        T = e.value,
                        F = void 0 !== T && T,
                        S = (0, n.Z)(e, h),
                        _ = i.useRef(null);
                    function I(e) {
                        var t = "focus" === e.nativeEvent.type ? g : m;
                        null != _.current && (_.current.style.boxShadow = t);
                    }
                    var L = d.Z.flatten(k),
                        R = L.height,
                        M = L.width,
                        A = R || "20px",
                        P = c(A, 2),
                        D = M > P ? M : P,
                        j = c(A, 0.5),
                        W = !0 === F ? (null != E && "object" == typeof E ? E.true : null != y ? y : "#A3D3CF") : null != E && "object" == typeof E ? E.false : null != E ? E : "#939393",
                        U = F ? (null != s ? s : "#009688") : null != x ? x : "#FAFAFA",
                        N = A,
                        V = N,
                        z = [w.root, k, C && w.cursorDefault, { height: A, width: D }],
                        G = !0 === F ? (("string" == typeof y && null != y) || ("object" == typeof E && null != E && E.true) ? W : b) : ("string" == typeof E && null != E) || ("object" == typeof E && null != E && E.false) ? W : b,
                        O = !0 === F ? (null == s ? f : U) : null == x ? f : U,
                        q = [w.track, { backgroundColor: C ? G : W, borderRadius: j }],
                        H = [w.thumb, F && w.thumbActive, { backgroundColor: C ? O : U, height: N, marginStart: F ? c(V, -1) : 0, width: V }],
                        $ = (0, l.Z)("input", {
                            "aria-label": r || o,
                            checked: F,
                            disabled: C,
                            onBlur: I,
                            onChange: function (e) {
                                null != v && v(e.nativeEvent.target.checked);
                            },
                            onFocus: I,
                            ref: t,
                            style: [w.nativeControl, w.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return i.createElement(u.Z, (0, a.Z)({}, S, { style: z }), i.createElement(u.Z, { style: q }), i.createElement(u.Z, { ref: _, style: H }), $);
                });
            y.displayName = "Switch";
            var w = d.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, o.Z)((0, o.Z)({ forcedColorAdjust: "none" }, d.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: m, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, o.Z)((0, o.Z)({}, d.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const Z = y;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch-6107ac1a.a8ed01ea.js.map
