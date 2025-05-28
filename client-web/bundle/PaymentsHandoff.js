"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentsHandoff"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var a = o(202784),
                r = o(614983),
                i = o.n(r),
                n = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: n, isLarge: c, leftControl: d, middleControl: h, position: u, rightControl: m, secondaryBar: b, style: g, subtitle: k, title: y, titleDomId: B, titleIconCell: f, titleIconCellSize: C, withBackground: w, withWideContainer: x } = this.props,
                        { isModal: Z } = this.context,
                        L = i ? d : a.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, Z, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: c, leftControl: L, middleControl: h, position: p(u, Z, r), rightControl: m, style: g, subtitle: k, title: y, titleDomId: B, titleIconCell: f, titleIconCellSize: C, withBackground: E, withWideContainer: x }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? a.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => u });
            var a = o(202784),
                r = o(325686),
                i = o(108362),
                n = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: n, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: b, rightControl: g, secondaryBar: k, subtitle: y, title: B } = this.props,
                                { isModal: f } = this.context;
                            return a.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !f, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: b, ref: e, rightControl: g, secondaryBar: k, style: [f && m.appBarModal, t], subtitle: y, title: B, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: k } = this.context,
                        y = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(s.Z, null, a.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && y, a.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, k && m.containerModal, n] }, k ? a.createElement(h.Z, { style: m.viewport }, y, o) : o), t ? a.createElement(r.Z, { style: [m.bottomBarModal, !k && !g && m.bottomBarMobile] }, a.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(500002),
                i = o(668214),
                n = o(997174),
                l = o(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== i) || a !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        299884: (e, t, o) => {
            o.r(t), o.d(t, { default: () => B });
            o(136728);
            var a = o(202784),
                r = o(325686),
                i = o(107267),
                n = o(731708),
                l = o(154003),
                s = o(661810),
                c = o(392237),
                d = o(111677),
                p = o.n(d),
                h = o(261214),
                u = o(760286),
                m = o(980407),
                b = o(951790);
            const g = { android: p().i8385a2c, ios: p().h201c4c2 },
                k = { android: { downloadLabel: "Download X for Android" }, ios: { downloadLabel: "Download X for iOS", Icon: h.default } },
                y = () => {
                    const e = (0, i.useHistory)(),
                        t = b.Z.getAppStoreURLs("download"),
                        o = 1 === t.length,
                        c = t[0].platform,
                        d = a.useCallback(() => {
                            b.Z.openApp("twitter://money");
                        }, []),
                        p = a.useCallback(() => {
                            e.push("/");
                        }, [e]);
                    return a.createElement(
                        m.Z,
                        { backButtonType: "close", history: e, onBackClick: p },
                        a.createElement(
                            r.Z,
                            { style: f.content },
                            a.createElement(u.default, { style: f.illustration }),
                            a.createElement(n.ZP, { size: "title1", weight: "bold" }, o ? (({ platformLabel: e }) => `Download X for ${e} to get access to Money`)({ platformLabel: g[c] }) : "Download the X mobile app to get access to Money"),
                            a.createElement(
                                r.Z,
                                { style: f.gap },
                                t.map(({ matches: e, platform: t, url: o, webUrl: r }, i) => {
                                    const { Icon: n, downloadLabel: s } = k[t];
                                    return a.createElement(l.ZP, { icon: n && a.createElement(n, null), key: i, link: { external: !0, pathname: e() ? o : r }, type: "primaryFilled" }, s);
                                }),
                            ),
                            a.createElement(s.Z, { spacing: "space8" }),
                            a.createElement(r.Z, { style: f.textRow }, a.createElement(n.ZP, { color: "gray700", size: "subtext2", style: f.marginEnd }, "Already have the app installed?"), a.createElement(n.ZP, { onPress: d, size: "subtext2", style: f.openLink }, "Tap here to open it")),
                        ),
                    );
                },
                B = a.memo(y),
                f = c.default.create((e) => ({ content: { gap: e.spaces.space32, margin: e.spaces.space32 }, gap: { gap: e.spaces.space24 }, illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text }, textRow: { display: "inline-block" }, marginEnd: { marginEnd: e.spaces.space4 }, openLink: { cursor: "pointer", textDecoration: "underline" } }));
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => n });
            var a = o(202784),
                r = o(325686),
                i = o(392237);
            function n({ spacing: e, style: t }) {
                return a.createElement(r.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentsHandoff.53cafb4a.js.map
