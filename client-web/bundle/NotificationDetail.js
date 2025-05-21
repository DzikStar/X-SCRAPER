"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.NotificationDetail"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                i = o(614983),
                a = o.n(i),
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
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: a, isFullWidth: n, isLarge: d, leftControl: c, middleControl: h, position: u, rightControl: m, secondaryBar: f, style: g, subtitle: b, title: w, titleDomId: y, titleIconCell: B, titleIconCellSize: k, withBackground: x, withWideContainer: _ } = this.props,
                        { isModal: C } = this.context,
                        Z = a ? c : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, C, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: d, leftControl: Z, middleControl: h, position: p(u, C, i), rightControl: m, style: g, subtitle: b, title: w, titleDomId: y, titleIconCell: B, titleIconCellSize: k, withBackground: v, withWideContainer: _ }), f || null);
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
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => u });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, rightControl: g, secondaryBar: b, subtitle: w, title: y } = this.props,
                                { isModal: B } = this.context;
                            return r.createElement(i.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !B, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, ref: e, rightControl: g, secondaryBar: b, style: [B && m.appBarModal, t], subtitle: w, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: b } = this.context,
                        w = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && w, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, b && m.containerModal, n] }, b ? r.createElement(h.Z, { style: m.viewport }, w, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !b && !g && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                n = o(997174),
                s = o(118823);
            const l = (0, a.Z)()
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
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: a, search: n },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = i || s;
                    ((d && i !== s) || (!d && o !== a) || r !== n || l) && this._performPageUpdates(this.props);
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
            const c = (0, i.ZP)(l(d));
        },
        728054: (e, t, o) => {
            o.r(t), o.d(t, { SafetyReportNotificationScreen: () => y, default: () => k });
            o(543673), o(240753), o(128399);
            var r = o(202784),
                i = o(154003),
                a = o(362075),
                n = o(392237),
                s = o(332920),
                l = o.n(s),
                d = o(840647),
                c = o(980407),
                p = o(782826),
                h = o(615027),
                u = o(2430);
            const m = (0, o(668214).Z)()
                    .propsFromState(() => ({ relativeUrl: (0, u.cI)("relativeUrl") }))
                    .withAnalytics({ page: "ntab", section: "safety_report_notification" }),
                f = l().c380d684,
                g = l().f15bfdb4,
                b = l().da7cf0d8,
                w = l().b772cd66;
            class y extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleDone = () => {
                            const { history: e } = this.props;
                            e.replace("/notifications");
                        });
                }
                render() {
                    const { history: e } = this.props,
                        t = this._getSafeUrl(),
                        o = this._getTitle(t),
                        n = this._getParams(),
                        s = r.createElement(i.ZP, { onPress: this._handleDone, size: "small", type: "brandFilled" }, w),
                        l = -1 !== t?.indexOf("appealable_label"),
                        d = new URL(`${t}?${n}`, window.location.origin);
                    return t ? r.createElement(c.Z, { backButtonType: l ? "back" : "close", backLocation: "/notifications", history: e, rightControl: l ? s : void 0, title: o }, r.createElement(a.Z, { allowForms: !0, src: d.toString(), style: B.iframe })) : r.createElement(h.Z, { to: "/notifications" });
                }
                _getSafeUrl() {
                    const { relativeUrl: e } = this.props;
                    return e && p.ZP.isSafetyNotificationsUrl(e) ? e : "";
                }
                _getTitle(e) {
                    return e?.endsWith("review_settings") ? g : -1 !== e?.indexOf("appealable_label") ? b : f;
                }
                _getParams() {
                    const { analytics: e } = this.props,
                        t = e.contextualScribeNamespace,
                        o = { client_location: [t.page, t.section, t.component].join(":"), client_referer: window.location.pathname, client_app_id: (0, d.Z)().clientAppId };
                    return Object.keys(o)
                        .filter((e) => !!o[e])
                        .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(o[e])}`)
                        .join("&");
                }
            }
            const B = n.default.create((e) => ({ iframe: { flexGrow: 1, flexShrink: 1 } })),
                k = m(y);
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(688715),
                s = o(950822),
                l = o(386802),
                d = o(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
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
                    return i.createElement(a.Z, { style: h ? [p.root, p.modalPadding, d] : [p.root, d] }, m);
                }
            }
            c.contextType = l.t;
            const p = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = i.forwardRef((e, t) => i.createElement(c, (0, r.Z)({ forwardedRef: t }, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NotificationDetail.db60ad3a.js.map
