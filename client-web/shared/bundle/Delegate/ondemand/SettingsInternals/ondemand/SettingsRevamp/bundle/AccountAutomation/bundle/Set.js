"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Delegate~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.AccountAutomation~bundle.Set"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: C, subtitle: b, title: y, titleDomId: w, titleIconCell: B, titleIconCellSize: f, withBackground: k, withWideContainer: S } = this.props,
                        { isModal: Z } = this.context,
                        x = i ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, Z, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: x, middleControl: h, position: u(p, Z, r), rightControl: m, style: C, subtitle: b, title: y, titleDomId: w, titleIconCell: B, titleIconCellSize: f, withBackground: E, withWideContainer: S }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        222718: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                r = n(325686),
                i = n(537392),
                a = n(10656),
                l = n(655352),
                s = n(555079),
                c = n(500002),
                d = n(625661),
                u = n(449067),
                h = n(655543),
                p = n(715601),
                m = n(392237);
            const g = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(r.Z, { style: g.fill }, o.createElement(p.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (a.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: i, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: h, ...p } = this.props;
                    return o.createElement(o.Fragment, null, (0, l.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, p), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: i, backLocation: a, documentTitle: l, headerless: c, history: h, leftControl: p, middleControl: m, onBackClick: C, rightControl: b, screenType: y, searchBoxOptions: w, secondaryBar: B, showBackButtonOnRoot: f, showSubtitleOnRoot: k, showSubtitleOnWideDetail: S, showTitleOnRoot: Z, subtitle: x, title: E, titleIconCell: _, titleIconCellSize: v, withDetailOpen: D, withSearchBox: L, withTweetButton: I, withWideContainer: T } = this.props,
                        P = "root" === y,
                        F = "secondaryRoot" === y,
                        O = "primaryDetail" === y,
                        z = (O && S) || (P && k),
                        M = (P && !f) || (O && e),
                        H = (P && !Z) || (O && e && !Z),
                        R = P ? s.ey : O ? s.vX : void 0,
                        N = o.createElement(r.Z, { style: g.appBarContainer }, o.createElement(d.ZP, { backLocation: a, fixed: !1, hideBackButton: M, history: h, leftControl: p, middleControl: m, onBackClick: C, rightControl: b, secondaryBar: B, style: i, subtitle: z ? x : void 0, title: H ? void 0 : E, titleDomId: R, titleIconCell: _, titleIconCellSize: v, withWideContainer: T })),
                        W = P || (F && D) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: l, headerless: c, middleControl: m, onBackClick: C, rightControl: b, searchBoxOptions: w, subtitle: x, title: E, withSearchBox: L, withTweetButton: I });
                    return o.createElement(o.Fragment, null, W, N);
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const b = (0, c.ZP)(C);
        },
        496364: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(107267),
                i = n(791632),
                a = n(222718);
            const l = (e) => {
                const t = (0, r.useHistory)();
                return (0, i.HD)(t) ? e.children || null : o.createElement(a.Z, e);
            };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                i = n(668214),
                a = n(997174),
                l = n(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && n !== i) || o !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(108362),
                i = n(420412),
                a = n(154003),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(290402),
                u = n(496364),
                h = n(71620),
                p = n(668214),
                m = n(38562),
                g = n(919022);
            const C = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                b = "settingsDetailSave",
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
                            return o.createElement(r.Z, { style: [B.contentRoot, c && B.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(i.Z, null), o.createElement(r.Z, { style: B.buttonContainer }, o.createElement(a.ZP, { disabled: n, onPress: t, style: B.button, testID: b, type: s }, l))) : null);
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
            const B = l.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${l.default.iPhoneOffsetBottom})` } })),
                f = C(w);
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
                    const { decoration: t, description: n, disabled: d = !1, isActive: h = !1, label: p, link: m, onPress: g, paddingHorizontal: C, renderRightContent: b, role: y = "tab", styleOverride: w, testID: B = "pivot", thumbnail: f, thumbnailSize: k, withoutArrow: S = !1 } = e,
                        Z = [u.thumbnailContainer, "medium" === k && u.thumbnailContainerMedium],
                        x = "string" == typeof p ? o.createElement(l.ZP, null, p) : p,
                        E = "object" == typeof m && m.external && !m.openInSameFrame,
                        _ = n ? ("string" == typeof n ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${B}-description` }, n) : n) : null,
                        v = o.useMemo(() => ("space0" === C ? { paddingHorizontal: 0 } : { paddingHorizontal: C ? c.default.theme.spaces[C] : c.default.theme.componentDimensions.gutterHorizontal }), [C]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, v, d && u.disabled, w], testID: B, withInteractiveStyling: !!m || !!g }, o.createElement(r.Z, { style: u.contentContainer }, f ? o.createElement(r.Z, { style: Z }, f) : null, o.createElement(r.Z, { style: u.content }, x, _), b ? b() : null, (!m && !g) || d || S ? null : E ? o.createElement(i.default, { style: u.icon }) : o.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(731708),
                i = n(392237);
            class a extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(r.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        i = l.root;
                    return t && n ? o.createElement(r.ZP, { color: "gray700", size: "subtext2", style: i }, e, " ", this._renderLearnMore()) : o.createElement(r.ZP, { color: "gray700", size: "subtext2", style: i }, e);
                }
            }
            const l = i.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Delegate~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.AccountAutomation~bundle.Set.a6d0a6aa.js.map
