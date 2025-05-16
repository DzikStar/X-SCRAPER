"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.NotFound"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                i = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: b, style: B, subtitle: g, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: C, withBackground: x, withWideContainer: Z } = this.props,
                        { isModal: w } = this.context,
                        E = n ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, w, !!b);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: E, middleControl: u, position: p(h, w, a), rightControl: m, style: B, subtitle: g, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: C, withBackground: _, withWideContainer: Z }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => h });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, rightControl: B, secondaryBar: g, subtitle: k, title: y } = this.props,
                                { isModal: f } = this.context;
                            return r.createElement(a.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !f, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, ref: e, rightControl: B, secondaryBar: g, style: [f && m.appBarModal, t], subtitle: k, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: b, withoutBottomBarMobile: B } = this.props,
                        { isModal: g } = this.context,
                        k = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && k, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, g && m.containerModal, i] }, g ? r.createElement(u.Z, { style: m.viewport }, k, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !g && !B && m.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        231035: (e, t, o) => {
            o.d(t, { Z: () => B });
            var r = o(202784),
                a = o(420740),
                n = o(108362),
                i = o(731708),
                l = o(154003),
                s = o(392237),
                c = o(674132),
                d = o.n(c),
                p = o(272175);
            const u = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(p.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                h = "error-detail",
                m = d().e49537c2,
                b = d().a9ae1e78;
            class B extends r.PureComponent {
                render() {
                    return r.createElement(a.Z, { testID: h }, r.createElement(u, null), r.createElement(n.Z, { style: g.root }, r.createElement(i.ZP, { align: "center", color: "gray700", style: g.retryText }, m), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, b)));
                }
            }
            const g = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                i = o(997174),
                l = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends r.Component {
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
                            location: { pathname: n, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = a || l;
                    ((c && a !== l) || (!c && o !== n) || r !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(s(c));
        },
        956331: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                a = o(466441),
                n = o(980407);
            const i = (e) => r.createElement(n.Z, { history: e.history }, r.createElement(a.default, { history: e.history, location: e.location, match: e.match }));
        },
        466441: (e, t, o) => {
            o.r(t), o.d(t, { NotFoundScreen: () => y, default: () => C });
            o(571372);
            var r = o(202784),
                a = o(386802),
                n = o(108362),
                i = o(392237),
                l = o(674132),
                s = o.n(l),
                c = o(187669),
                d = o(449067),
                p = o(38293),
                u = o(231035),
                h = o(652904),
                m = o(952793),
                b = o(163889),
                B = o(725516);
            const g = s().ba929da8,
                k = s().d203e242;
            function y(e) {
                const { splat: t } = e.match.params,
                    { isModal: o } = r.useContext(a.Z),
                    i = (0, m.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        i && t && (0, b.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(h.Z, null, r.createElement(d.Z.Configure, { backLocation: "/", documentTitle: g, title: k }), r.createElement(n.Z, { style: o && f.modal }, r.createElement(u.Z, null)), r.createElement(p.Z, { title: g, withMeta: !1 }))
                );
            }
            const f = i.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                C = (0, B.Z)(y, { page: "not_found" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.NotFound.d8b33bea.js.map
