"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentsHandoff"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                a = o(614983),
                i = o.n(a),
                n = o(325686),
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
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: i, isFullWidth: n, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: b, style: g, subtitle: k, title: y, titleDomId: B, titleIconCell: f, titleIconCellSize: w, withBackground: C, withWideContainer: x } = this.props,
                        { isModal: Z } = this.context,
                        L = i ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!C, Z, !!b);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: c, leftControl: L, middleControl: u, position: p(h, Z, a), rightControl: m, style: g, subtitle: k, title: y, titleDomId: B, titleIconCell: f, titleIconCellSize: w, withBackground: E, withWideContainer: x }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => h });
            var r = o(202784),
                a = o(325686),
                i = o(108362),
                n = o(386802),
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: n, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, rightControl: g, secondaryBar: k, subtitle: y, title: B } = this.props,
                                { isModal: f } = this.context;
                            return r.createElement(a.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !f, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, ref: e, rightControl: g, secondaryBar: k, style: [f && m.appBarModal, t], subtitle: y, title: B, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: k } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && y, r.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, k && m.containerModal, n] }, k ? r.createElement(u.Z, { style: m.viewport }, y, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !k && !g && m.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = n.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                i = o(668214),
                n = o(997174),
                l = o(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
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
                            location: { pathname: i, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = a || l;
                    ((c && a !== l) || (!c && o !== i) || r !== n || s) && this._performPageUpdates(this.props);
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
        951790: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(323265);
            const a = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = i(e),
                            o = [t.android, t.ios],
                            r = o.find((e) => e.matches());
                        return r ? [r] : o;
                    },
                    getiOSAppStoreLink(e) {
                        const t = i(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = i(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && a.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        a.setLocation(e);
                    },
                },
                i = (e = "rwoiah") => ({ android: { platform: "android", matches: () => r.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => r.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                n = a;
        },
        299884: (e, t, o) => {
            o.r(t), o.d(t, { default: () => B });
            o(136728);
            var r = o(202784),
                a = o(325686),
                i = o(107267),
                n = o(731708),
                l = o(154003),
                s = o(661810),
                c = o(392237),
                d = o(111677),
                p = o.n(d),
                u = o(261214),
                h = o(760286),
                m = o(980407),
                b = o(951790);
            const g = { android: p().i8385a2c, ios: p().h201c4c2 },
                k = { android: { downloadLabel: "Download X for Android" }, ios: { downloadLabel: "Download X for iOS", Icon: u.default } },
                y = () => {
                    const e = (0, i.useHistory)(),
                        t = b.Z.getAppStoreURLs("download"),
                        o = 1 === t.length,
                        c = t[0].platform,
                        d = r.useCallback(() => {
                            b.Z.openApp("twitter://money");
                        }, []),
                        p = r.useCallback(() => {
                            e.push("/");
                        }, [e]);
                    return r.createElement(
                        m.Z,
                        { backButtonType: "close", history: e, onBackClick: p },
                        r.createElement(
                            a.Z,
                            { style: f.content },
                            r.createElement(h.default, { style: f.illustration }),
                            r.createElement(n.ZP, { size: "title1", weight: "bold" }, o ? (({ platformLabel: e }) => `Download X for ${e} to get access to Money`)({ platformLabel: g[c] }) : "Download the X mobile app to get access to Money"),
                            r.createElement(
                                a.Z,
                                { style: f.gap },
                                t.map(({ matches: e, platform: t, url: o, webUrl: a }, i) => {
                                    const { Icon: n, downloadLabel: s } = k[t];
                                    return r.createElement(l.ZP, { icon: n && r.createElement(n, null), key: i, link: { external: !0, pathname: e() ? o : a }, type: "primaryFilled" }, s);
                                }),
                            ),
                            r.createElement(s.Z, { spacing: "space8" }),
                            r.createElement(a.Z, { style: f.textRow }, r.createElement(n.ZP, { color: "gray700", size: "subtext2", style: f.marginEnd }, "Already have the app installed?"), r.createElement(n.ZP, { onPress: d, size: "subtext2", style: f.openLink }, "Tap here to open it")),
                        ),
                    );
                },
                B = r.memo(y),
                f = c.default.create((e) => ({ content: { gap: e.spaces.space32, margin: e.spaces.space32 }, gap: { gap: e.spaces.space24 }, illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text }, textRow: { display: "inline-block" }, marginEnd: { marginEnd: e.spaces.space4 }, openLink: { cursor: "pointer", textDecoration: "underline" } }));
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                a = o(325686),
                i = o(392237);
            function n({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentsHandoff.1badfa8a.js.map
