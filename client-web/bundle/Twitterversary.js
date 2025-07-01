"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Twitterversary"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var i = o(202784),
                r = o(614983),
                a = o.n(r),
                n = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends i.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: n, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: u, secondaryBar: g, style: B, subtitle: b, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: x, withBackground: C, withWideContainer: w } = this.props,
                        { isModal: Z } = this.context,
                        L = a ? d : i.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!C, Z, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: c, leftControl: L, middleControl: h, position: p(m, Z, r), rightControl: u, style: B, subtitle: b, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: x, withBackground: _, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? i.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var i = o(202784),
                r = o(325686),
                a = o(108362),
                n = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                h = o(715601);
            class m extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: m, onBackClick: g, rightControl: B, secondaryBar: b, subtitle: k, title: y } = this.props,
                                { isModal: f } = this.context;
                            return i.createElement(r.Z, { style: f ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, i.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !f, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: m, onBackClick: g, ref: e, rightControl: B, secondaryBar: b, style: [f && u.appBarModal, t], subtitle: k, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: B } = this.props,
                        { isModal: b } = this.context,
                        k = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(l.Z, null, i.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: g }), i.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, b && u.rootModal] }, !b && k, i.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [u.container, b && u.containerModal, n] }, b ? i.createElement(h.Z, { style: u.viewport }, k, o) : o), t ? i.createElement(r.Z, { style: [u.bottomBarModal, !b && !B && u.bottomBarMobile] }, i.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const u = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var i = o(202784),
                r = o(500002),
                a = o(668214),
                n = o(997174),
                s = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class c extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: i },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: n },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== a) || i !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        827399: (e, t, o) => {
            o.r(t), o.d(t, { TwitterversaryScreen: () => g, default: () => b });
            var i = o(202784),
                r = o(325686),
                a = o(682474),
                n = o(992942),
                s = o(731708),
                l = o(154003),
                c = o(392237),
                d = o(980407),
                p = o(2430),
                h = o(668214);
            const m = (e, t) => !!t.location.state?.fromApp,
                u = (0, h.Z)()
                    .propsFromState(() => ({ title: (0, p.cI)("title"), message: (0, p.cI)("message"), action: (0, p.cI)("action"), text: (0, p.cI)("text"), imageAttachment: (0, p.cI)("image_attachment"), fromApp: m }))
                    .withAnalytics({ page: "twitterversary" });
            class g extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = () => {
                            const { analytics: e, history: t, imageAttachment: o, text: i } = this.props;
                            e.scribe({ action: "compose" }), i && t.replace({ pathname: "/compose/post", state: { defaultText: `${i} `, externalMedia: [o] } });
                        });
                }
                componentDidMount() {
                    const { fromApp: e, history: t } = this.props;
                    e || t.replace("/notifications");
                }
                render() {
                    const { action: e, history: t, imageAttachment: o, message: c, text: p, title: h } = this.props;
                    return i.createElement(d.Z, { backLocation: "/notifications", history: t, title: h }, i.createElement(r.Z, { style: B.container }, i.createElement(r.Z, { style: B.imageWrapper }, i.createElement(a.Z, { ratio: 16 / 9 }, i.createElement(n.Z, { source: o, style: B.image }))), i.createElement(s.ZP, { align: "center", size: "headline1", style: B.message, weight: "heavy" }, c), p ? i.createElement(l.ZP, { onPress: this._handleClick, size: "xLarge", type: "brandFilled" }, e) : null));
                }
            }
            const B = c.default.create((e) => ({ container: { alignItems: "center", marginBottom: e.spaces.space32 }, imageWrapper: { width: "100%" }, image: { height: "100%", width: "100%" }, message: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space32 } })),
                b = u(g);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Twitterversary.6e9dc93a.js.map
