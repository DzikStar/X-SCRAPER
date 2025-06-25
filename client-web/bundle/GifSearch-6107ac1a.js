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
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: f, subtitle: g, title: y, titleDomId: Z, titleIconCell: C, titleIconCellSize: k, withBackground: B, withWideContainer: v } = this.props,
                        { isModal: x } = this.context,
                        w = n ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!B, x, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: r, isFullWidth: i, isLarge: c, leftControl: w, middleControl: h, position: u(p, x, a), rightControl: m, style: f, subtitle: g, title: y, titleDomId: Z, titleIconCell: C, titleIconCellSize: k, withBackground: E, withWideContainer: v }), b || null);
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
            r.d(t, { Z: () => b, w: () => p });
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: y, title: Z } = this.props,
                                { isModal: C } = this.context;
                            return o.createElement(a.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (C ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [C && m.appBarModal, t], subtitle: y, title: Z, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: p, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), o.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && y, o.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, g && m.containerModal, i] }, g ? o.createElement(h.Z, { style: m.viewport }, y, r) : r), t ? o.createElement(a.Z, { style: [m.bottomBarModal, !g && !f && m.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
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
            r.d(t, { Z: () => b });
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
            class b extends o.PureComponent {
                render() {
                    return o.createElement(a.Z, { testID: h }, o.createElement(u.Z, null), o.createElement(n.Z, { style: f.root }, o.createElement(i.ZP, { align: "center", color: "gray700", style: f.retryText }, p), o.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const f = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
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
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: b, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? o.createElement(l.Z, { icon: n, onRequestRetry: d, retryMessage: b }) : r ? o.createElement(s.m, { failureMessage: r }) : m();
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
            r.d(t, { Z: () => C });
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
                b = m + ", 0 0 0 10px rgba(0,0,0,0.1)",
                f = "#D5D5D5",
                g = "#BDBDBD",
                y = i.forwardRef((e, t) => {
                    var r = e["aria-label"],
                        o = e.accessibilityLabel,
                        s = e.activeThumbColor,
                        y = e.activeTrackColor,
                        C = e.disabled,
                        k = void 0 !== C && C,
                        B = e.onValueChange,
                        v = e.style,
                        x = void 0 === v ? p : v,
                        w = e.thumbColor,
                        E = e.trackColor,
                        S = e.value,
                        T = void 0 !== S && S,
                        _ = (0, n.Z)(e, h),
                        L = i.useRef(null);
                    function M(e) {
                        var t = "focus" === e.nativeEvent.type ? b : m;
                        null != L.current && (L.current.style.boxShadow = t);
                    }
                    var F = d.Z.flatten(x),
                        D = F.height,
                        R = F.width,
                        I = D || "20px",
                        P = c(I, 2),
                        A = R > P ? R : P,
                        W = c(I, 0.5),
                        j = !0 === T ? (null != E && "object" == typeof E ? E.true : null != y ? y : "#A3D3CF") : null != E && "object" == typeof E ? E.false : null != E ? E : "#939393",
                        N = T ? (null != s ? s : "#009688") : null != w ? w : "#FAFAFA",
                        V = I,
                        G = V,
                        z = [Z.root, x, k && Z.cursorDefault, { height: I, width: A }],
                        H = !0 === T ? (("string" == typeof y && null != y) || ("object" == typeof E && null != E && E.true) ? j : f) : ("string" == typeof E && null != E) || ("object" == typeof E && null != E && E.false) ? j : f,
                        U = !0 === T ? (null == s ? g : N) : null == w ? g : N,
                        q = [Z.track, { backgroundColor: k ? H : j, borderRadius: W }],
                        O = [Z.thumb, T && Z.thumbActive, { backgroundColor: k ? U : N, height: V, marginStart: T ? c(G, -1) : 0, width: G }],
                        K = (0, l.Z)("input", {
                            "aria-label": r || o,
                            checked: T,
                            disabled: k,
                            onBlur: M,
                            onChange: function (e) {
                                null != B && B(e.nativeEvent.target.checked);
                            },
                            onFocus: M,
                            ref: t,
                            style: [Z.nativeControl, Z.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return i.createElement(u.Z, (0, a.Z)({}, _, { style: z }), i.createElement(u.Z, { style: q }), i.createElement(u.Z, { ref: L, style: O }), K);
                });
            y.displayName = "Switch";
            var Z = d.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, o.Z)((0, o.Z)({ forcedColorAdjust: "none" }, d.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: m, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, o.Z)((0, o.Z)({}, d.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const C = y;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch-6107ac1a.8020df7a.js.map
