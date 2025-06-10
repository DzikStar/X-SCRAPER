"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-6107ac1a"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                a = o(614983),
                i = o.n(a),
                n = o(325686),
                s = o(370006),
                l = o(786998),
                d = o(929028),
                c = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: i, isFullWidth: n, isLarge: d, leftControl: c, middleControl: h, position: u, rightControl: m, secondaryBar: f, style: g, subtitle: w, title: b, titleDomId: y, titleIconCell: B, titleIconCellSize: k, withBackground: v, withWideContainer: C } = this.props,
                        { isModal: Z } = this.context,
                        x = i ? c : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        M = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!v, Z, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: d, leftControl: x, middleControl: h, position: p(u, Z, a), rightControl: m, style: g, subtitle: w, title: b, titleDomId: y, titleIconCell: B, titleIconCellSize: k, withBackground: M, withWideContainer: C }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                a = o(202784),
                i = o(182056),
                n = o(879113),
                s = o(392237),
                l = o(111677),
                d = o.n(l),
                c = o(968478);
            const p = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const s = i.Z.isOnline();
                    return a.createElement(n.Z, (0, r.Z)({}, t, { icon: s ? void 0 : a.createElement(c.default, { style: u.icon }), retryMessage: s ? e : p }));
                },
                u = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => u });
            var r = o(202784),
                a = o(325686),
                i = o(108362),
                n = o(386802),
                s = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: n, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, rightControl: g, secondaryBar: w, subtitle: b, title: y } = this.props,
                                { isModal: B } = this.context;
                            return r.createElement(a.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !B, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, ref: e, rightControl: g, secondaryBar: w, style: [B && m.appBarModal, t], subtitle: b, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: w } = this.context,
                        b = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && b, r.createElement(i.Z, { isFullWidth: d, isLarge: c, style: [m.container, w && m.containerModal, n] }, w ? r.createElement(h.Z, { style: m.viewport }, b, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !w && !g && m.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = u;
        },
        705079: (e, t, o) => {
            o.d(t, { s: () => a });
            var r = o(99107);
            const a = (e) => e === r.p_;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                a = o(500002),
                i = o(668214),
                n = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class d extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: i, search: n },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = a || s;
                    ((d && a !== s) || (!d && o !== i) || r !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, a.ZP)(l(d));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(202784),
                a = o(476984),
                i = o.n(a),
                n = o(143778),
                s = o(750410),
                l = o(682830);
            const d = "failed",
                c = "loaded",
                p = "loading",
                h = "none";
            class u extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: i, loadingMessage: n, onRequestRetry: c, render: u, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (a) {
                        case d:
                            return g ? r.createElement(s.Z, { icon: i, onRequestRetry: c, retryMessage: f }) : o ? r.createElement(l.m, { failureMessage: o }) : m();
                        case p:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: n });
                        case h:
                            return null;
                        default:
                            return u();
                    }
                }
            }
            u.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                a = o(202784),
                i = o(325686),
                n = o(688715),
                s = o(950822),
                l = o(386802),
                d = o(392237);
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: o } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return o ? o(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: l, style: d, title: c } = this.props,
                        { isModal: h } = this.context,
                        u = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, s.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(l), style: p.iframe, title: c, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(i.Z, { style: h ? [p.root, p.modalPadding, d] : [p.root, d] }, m);
                }
            }
            c.contextType = l.t;
            const p = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = a.forwardRef((e, t) => a.createElement(c, (0, r.Z)({ forwardedRef: t }, e)));
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        391366: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        364837: (e, t, o) => {
            o.d(t, { R: () => d });
            var r = o(19697),
                a = o(549755),
                i = o(205074);
            const n = 1,
                s = 2,
                l = 3,
                d = (e) => {
                    if ((0, i.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: o, orientation: i, width: n } = e;
                            return (0, r.$i)(o, n, t, i).then(
                                (e) => (0, r.q8)(e),
                                (e) => {
                                    throw new a.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new a.Z("The provided image must be a gif", s);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new a.Z("The provided file is not a valid image", n);
                        return Promise.reject(e);
                    }
                };
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => a, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (o, r, a) => {
                        const i = t ? t(r, a, e) : !!r;
                        return i && o[0].push(r), !i && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-6107ac1a.0911813a.js.map
