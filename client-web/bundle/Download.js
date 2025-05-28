"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Download"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                l = n(325686),
                a = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: l, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: C, subtitle: y, title: b, titleDomId: f, titleIconCell: w, titleIconCellSize: k, withBackground: B, withWideContainer: S } = this.props,
                        { isModal: Z } = this.context,
                        E = i ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!B, Z, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: l, isLarge: c, leftControl: E, middleControl: h, position: u(p, Z, r), rightControl: m, style: C, subtitle: y, title: b, titleDomId: f, titleIconCell: w, titleIconCellSize: k, withBackground: x, withWideContainer: S }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(l.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                i = n(182056),
                l = n(879113),
                a = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const a = i.Z.isOnline();
                    return r.createElement(l.Z, (0, o.Z)({}, t, { icon: a ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                r = n(107267),
                i = n(791632),
                l = n(325686),
                a = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                h = n(625661),
                p = n(449067),
                m = n(655543),
                g = n(715601),
                C = n(392237);
            const y = C.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...C.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class b extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(l.Z, { style: y.fill }, o.createElement(g.Z, { style: y.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(a.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: i, showSubtitleOnWideDetail: l, withBottomBorder: a, withDetailOpen: s, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(p.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: i, documentTitle: a, headerless: s, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: C, screenType: b, searchBoxOptions: f, secondaryBar: w, showSubtitleOnRoot: k, showSubtitleOnWideDetail: B, subtitle: S, title: Z, titleIconCell: E, titleIconCellSize: x, withDetailOpen: _, withSearchBox: v, withTweetButton: D, withWideContainer: L } = this.props,
                        I = "root" === b,
                        T = "secondaryRoot" === b,
                        F = "primaryDetail" === b,
                        P = (F && B) || (I && k),
                        z = I || (F && e),
                        M = I ? d.ey : F ? d.vX : void 0,
                        O = o.createElement(l.Z, { style: y.appBarContainer }, o.createElement(h.ZP, { backLocation: i, fixed: !1, hideBackButton: z, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: C, secondaryBar: w, style: r, subtitle: P ? S : void 0, title: Z, titleDomId: M, titleIconCell: E, titleIconCellSize: x, withWideContainer: L })),
                        R = I || (T && _) ? null : o.createElement(p.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: i, documentTitle: a, headerless: s, middleControl: m, onBackClick: g, rightControl: C, searchBoxOptions: f, subtitle: S, title: Z, withSearchBox: v, withTweetButton: D });
                    return o.createElement(o.Fragment, null, R, O);
                }
            }
            (b.contextType = m.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, u.ZP)(b),
                w = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : o.createElement(f, e);
                };
        },
        57314: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var o = n(202784),
                r = n(325686),
                i = n(688715),
                l = n(731708),
                a = n(779610),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(951790),
                h = n(725516),
                p = n(264922);
            const m = d().afcad7f2,
                g = d().a6b0b41a,
                C = d().c365dcc6,
                y = (0, i.ju)("https://help.x.com/using-twitter#twitter-on-your-device"),
                b = { android: d().i8385a2c, ios: d().h201c4c2 };
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._appStoreUrls = u.Z.getAppStoreURLs("download")),
                        (this._handleDownloadClick = () => {
                            this.props.analytics.scribeAction("done");
                        });
                }
                render() {
                    return o.createElement(
                        p.Z,
                        { title: m },
                        o.createElement(r.Z, { style: w.itemContainer }, o.createElement(l.ZP, { color: "gray700", size: "subtext2" }, g)),
                        this._appStoreUrls.map(({ matches: e, platform: t, url: n, webUrl: o }, r) => this._renderAppStoreLink(e() ? n : o, b[t], r)),
                        o.createElement(a.Z, { key: "other", label: C, link: { external: !0, pathname: y }, onPress: this._handleDownloadClick }),
                    );
                }
                _renderAppStoreLink(e, t, n = 0) {
                    return o.createElement(a.Z, { key: n, label: t, link: { external: !0, pathname: e }, onPress: this._handleDownloadClick });
                }
            }
            const w = s.default.create((e) => ({ itemContainer: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, flexDirection: "row", paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space12, width: "100%" } })),
                k = (0, h.Z)(f, { page: "download", section: "download" });
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(202784),
                r = n(108362),
                i = n(420412),
                l = n(154003),
                a = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(290402),
                u = n(253493),
                h = n(71620),
                p = n(668214),
                m = n(38562),
                g = n(919022);
            const C = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                y = "settingsDetailSave",
                b = c().i2209530;
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return o.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: a, submitType: s, withMarginBottom: c } = this.props;
                            return o.createElement(r.Z, { style: [w.contentRoot, c && w.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(i.Z, null), o.createElement(r.Z, { style: w.buttonContainer }, o.createElement(l.ZP, { disabled: n, onPress: t, style: w.button, testID: y, type: s }, a))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, title: i, viewerUser: l, withBottomBorder: a } = this.props,
                        s = this.getBackLocation(),
                        c = l ? `@${l.screen_name}` : void 0;
                    return o.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: c, title: i, withBottomBorder: a }, l ? this._renderWithFetchSettings() : this._render());
                }
            }
            f.defaultProps = { submitLabel: b, submitType: "brandFilled", withMarginBottom: !0 };
            const w = a.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${a.default.iPhoneOffsetBottom})` } })),
                k = C(f);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                r = n(476984),
                i = n.n(r),
                l = n(143778),
                a = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: i, loadingMessage: l, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: C } = this.props;
                    switch (r) {
                        case c:
                            return C ? o.createElement(a.Z, { icon: i, onRequestRetry: d, retryMessage: g }) : n ? o.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(325686),
                i = n(191796),
                l = n(58399),
                a = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: h = !1, label: p, link: m, onPress: g, paddingHorizontal: C, renderRightContent: y, role: b = "tab", styleOverride: f, testID: w = "pivot", thumbnail: k, thumbnailSize: B, withoutArrow: S = !1 } = e,
                        Z = [u.thumbnailContainer, "medium" === B && u.thumbnailContainerMedium],
                        E = "string" == typeof p ? o.createElement(a.ZP, null, p) : p,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        _ = n ? ("string" == typeof n ? o.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, n) : n) : null,
                        v = o.useMemo(() => ("space0" === C ? { paddingHorizontal: 0 } : { paddingHorizontal: C ? c.default.theme.spaces[C] : c.default.theme.componentDimensions.gutterHorizontal }), [C]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === b ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: b, style: [u.root, v, d && u.disabled, f], testID: w, withInteractiveStyling: !!m || !!g }, o.createElement(r.Z, { style: u.contentContainer }, k ? o.createElement(r.Z, { style: Z }, k) : null, o.createElement(r.Z, { style: u.content }, E, _), y ? y() : null, (!m && !g) || d || S ? null : x ? o.createElement(i.default, { style: u.icon }) : o.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Download.3618f09a.js.map
