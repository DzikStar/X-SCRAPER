"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Download"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                a = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: g, style: b, subtitle: C, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: k, withBackground: B, withWideContainer: S } = this.props,
                        { isModal: Z } = this.context,
                        E = i ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!B, Z, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: E, middleControl: p, position: u(h, Z, r), rightControl: m, style: b, subtitle: C, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: k, withBackground: _, withWideContainer: S }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                i = n(182056),
                a = n(879113),
                l = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const l = i.Z.isOnline();
                    return r.createElement(a.Z, (0, o.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(107267),
                i = n(791632),
                a = n(325686),
                l = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                p = n(625661),
                h = n(449067),
                m = n(655543),
                g = n(715601),
                b = n(392237);
            const C = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(a.Z, { style: C.fill }, o.createElement(g.Z, { style: C.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: i, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(h.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: i, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: b, screenType: y, searchBoxOptions: w, secondaryBar: f, showSubtitleOnRoot: k, showSubtitleOnWideDetail: B, subtitle: S, title: Z, titleIconCell: E, titleIconCellSize: _, withDetailOpen: x, withSearchBox: L, withTweetButton: D, withWideContainer: v } = this.props,
                        I = "root" === y,
                        T = "secondaryRoot" === y,
                        F = "primaryDetail" === y,
                        P = (F && B) || (I && k),
                        z = I || (F && e),
                        O = I ? d.ey : F ? d.vX : void 0,
                        A = o.createElement(a.Z, { style: C.appBarContainer }, o.createElement(p.ZP, { backLocation: i, fixed: !1, hideBackButton: z, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, style: r, subtitle: P ? S : void 0, title: Z, titleDomId: O, titleIconCell: E, titleIconCellSize: _, withWideContainer: v })),
                        M = I || (T && x) ? null : o.createElement(h.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: i, documentTitle: l, headerless: s, middleControl: m, onBackClick: g, rightControl: b, searchBoxOptions: w, subtitle: S, title: Z, withSearchBox: L, withTweetButton: D });
                    return o.createElement(o.Fragment, null, M, A);
                }
            }
            (y.contextType = m.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const w = (0, u.ZP)(y),
                f = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : o.createElement(w, e);
                };
        },
        951790: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(323265);
            const r = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = i(e),
                            n = [t.android, t.ios],
                            o = n.find((e) => e.matches());
                        return o ? [o] : n;
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
                        t[0] && r.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        r.setLocation(e);
                    },
                },
                i = (e = "rwoiah") => ({ android: { platform: "android", matches: () => o.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => o.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                a = r;
        },
        57314: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var o = n(202784),
                r = n(325686),
                i = n(688715),
                a = n(731708),
                l = n(779610),
                s = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(951790),
                p = n(725516),
                h = n(264922);
            const m = d().afcad7f2,
                g = d().a6b0b41a,
                b = d().c365dcc6,
                C = (0, i.ju)("https://help.x.com/using-twitter#twitter-on-your-device"),
                y = { android: d().i8385a2c, ios: d().h201c4c2 };
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._appStoreUrls = u.Z.getAppStoreURLs("download")),
                        (this._handleDownloadClick = () => {
                            this.props.analytics.scribeAction("done");
                        });
                }
                render() {
                    return o.createElement(
                        h.Z,
                        { title: m },
                        o.createElement(r.Z, { style: f.itemContainer }, o.createElement(a.ZP, { color: "gray700", size: "subtext2" }, g)),
                        this._appStoreUrls.map(({ matches: e, platform: t, url: n, webUrl: o }, r) => this._renderAppStoreLink(e() ? n : o, y[t], r)),
                        o.createElement(l.Z, { key: "other", label: b, link: { external: !0, pathname: C }, onPress: this._handleDownloadClick }),
                    );
                }
                _renderAppStoreLink(e, t, n = 0) {
                    return o.createElement(l.Z, { key: n, label: t, link: { external: !0, pathname: e }, onPress: this._handleDownloadClick });
                }
            }
            const f = s.default.create((e) => ({ itemContainer: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, flexDirection: "row", paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space12, width: "100%" } })),
                k = (0, p.Z)(w, { page: "download", section: "download" });
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(202784),
                r = n(108362),
                i = n(420412),
                a = n(154003),
                l = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(290402),
                u = n(253493),
                p = n(71620),
                h = n(668214),
                m = n(38562),
                g = n(919022);
            const b = (0, h.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, p.zr)("SETTINGS_LOADER") })),
                C = "settingsDetailSave",
                y = c().i2209530;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return o.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: l, submitType: s, withMarginBottom: c } = this.props;
                            return o.createElement(r.Z, { style: [f.contentRoot, c && f.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(i.Z, null), o.createElement(r.Z, { style: f.buttonContainer }, o.createElement(a.ZP, { disabled: n, onPress: t, style: f.button, testID: C, type: s }, l))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        n = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === n ? "/" : n;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, title: i, viewerUser: a, withBottomBorder: l } = this.props,
                        s = this.getBackLocation(),
                        c = a ? `@${a.screen_name}` : void 0;
                    return o.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: c, title: i, withBottomBorder: l }, a ? this._renderWithFetchSettings() : this._render());
                }
            }
            w.defaultProps = { submitLabel: y, submitType: "brandFilled", withMarginBottom: !0 };
            const f = l.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${l.default.iPhoneOffsetBottom})` } })),
                k = b(w);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(476984),
                i = n.n(r),
                a = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: i, loadingMessage: a, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? o.createElement(l.Z, { icon: i, onRequestRetry: d, retryMessage: g }) : n ? o.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(325686),
                i = n(191796),
                a = n(58399),
                l = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: g, paddingHorizontal: b, renderRightContent: C, role: y = "tab", styleOverride: w, testID: f = "pivot", thumbnail: k, thumbnailSize: B, withoutArrow: S = !1 } = e,
                        Z = [u.thumbnailContainer, "medium" === B && u.thumbnailContainerMedium],
                        E = "string" == typeof h ? o.createElement(l.ZP, null, h) : h,
                        _ = "object" == typeof m && m.external && !m.openInSameFrame,
                        x = n ? ("string" == typeof n ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${f}-description` }, n) : n) : null,
                        L = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, L, d && u.disabled, w], testID: f, withInteractiveStyling: !!m || !!g }, o.createElement(r.Z, { style: u.contentContainer }, k ? o.createElement(r.Z, { style: Z }, k) : null, o.createElement(r.Z, { style: u.content }, E, x), C ? C() : null, (!m && !g) || d || S ? null : _ ? o.createElement(i.default, { style: u.icon }) : o.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Download.239f2a7a.js.map
