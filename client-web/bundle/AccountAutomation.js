(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAutomation"],
    {
        294718: (e) => {
            e.exports = { queryId: "_ckHEj05gan2VfNHG6thBA", operationName: "DisableUserAccountLabel", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        523085: (e) => {
            e.exports = { queryId: "rD5gLxVmMvtdtYU1UHWlFQ", operationName: "UserAccountLabel", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        625661: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                a = n.n(r),
                s = n(325686),
                i = n(370006),
                l = n(786998),
                c = n(929028),
                u = n(386802);
            function d(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: a, isFullWidth: s, isLarge: c, leftControl: u, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: g, subtitle: C, title: f, titleDomId: E, titleIconCell: _, titleIconCellSize: y, withBackground: S, withWideContainer: w } = this.props,
                        { isModal: L } = this.context,
                        Z = a ? u : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!S, L, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: Z, middleControl: h, position: d(p, L, r), rightControl: m, style: g, subtitle: C, title: f, titleDomId: E, titleIconCell: _, titleIconCellSize: y, withBackground: B, withWideContainer: w }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = u.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                a = n(182056),
                s = n(879113),
                i = n(392237),
                l = n(674132),
                c = n.n(l),
                u = n(968478);
            const d = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, o.Z)({}, t, { icon: i ? void 0 : r.createElement(u.default, { style: p.icon }), retryMessage: i ? e : d }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        253493: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            var o = n(202784),
                r = n(107267),
                a = n(791632),
                s = n(325686),
                i = n(537392),
                l = n(10656),
                c = n(655352),
                u = n(555079),
                d = n(500002),
                h = n(625661),
                p = n(449067),
                m = n(655543),
                b = n(715601),
                g = n(392237);
            const C = g.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...g.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(s.Z, { style: C.fill }, o.createElement(b.Z, { style: C.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, withBottomBorder: i, withDetailOpen: l, ...u } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(p.Z.Configure, u), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: a, documentTitle: i, headerless: l, history: c, leftControl: d, middleControl: m, onBackClick: b, rightControl: g, screenType: f, searchBoxOptions: E, secondaryBar: _, showSubtitleOnRoot: y, showSubtitleOnWideDetail: S, subtitle: w, title: L, titleIconCell: Z, titleIconCellSize: B, withDetailOpen: A, withSearchBox: x, withTweetButton: k, withWideContainer: D } = this.props,
                        T = "root" === f,
                        P = "secondaryRoot" === f,
                        U = "primaryDetail" === f,
                        F = (U && S) || (T && y),
                        I = T || (U && e),
                        v = T ? u.ey : U ? u.vX : void 0,
                        O = o.createElement(s.Z, { style: C.appBarContainer }, o.createElement(h.ZP, { backLocation: a, fixed: !1, hideBackButton: I, history: c, leftControl: d, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: _, style: r, subtitle: F ? w : void 0, title: L, titleDomId: v, titleIconCell: Z, titleIconCellSize: B, withWideContainer: D })),
                        M = T || (P && A) ? null : o.createElement(p.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: i, headerless: l, middleControl: m, onBackClick: b, rightControl: g, searchBoxOptions: E, subtitle: w, title: L, withSearchBox: x, withTweetButton: k });
                    return o.createElement(o.Fragment, null, M, O);
                }
            }
            (f.contextType = m.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const E = (0, d.ZP)(f),
                _ = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, a.HD)(t) ? e.children || null : o.createElement(E, e);
                };
        },
        652904: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(500002),
                a = n(668214),
                s = n(997174),
                i = n(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: a, search: s },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && n !== a) || o !== s || l) && this._performPageUpdates(this.props);
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
            const u = (0, r.ZP)(l(c));
        },
        181617: (e, t, n) => {
            "use strict";
            n.d(t, { PP: () => B, cs: () => Z, ET: () => L, MB: () => S, iR: () => w });
            var o = n(424869),
                r = n.n(o),
                a = n(163889),
                s = n(414742),
                i = n(294718),
                l = n.n(i),
                c = n(523085),
                u = n.n(c),
                d = n(503768);
            const h = (e, t) => {
                    const n = t?.user?.result;
                    return n || (0, a.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                p = (e, t) => {
                    const n = t?.disable_user_account_label;
                    return n || (0, a.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                m = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(u(), { rest_id: t }, h), disableUserAccountLabel: () => e.graphQL(l(), {}, p) });
            var b = n(499627),
                g = n(917799),
                C = n(312771);
            const f = "accountTaxonomy",
                E = r()({ account_label: { disableStatus: C.ZP.NONE, fetchStatus: C.ZP.NONE, managed_label: void 0 } }),
                _ = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            b.Z.register({
                [f]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case _.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: C.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: C.ZP.LOADED } };
                        case _.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: C.ZP.FAILED } };
                        case y.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: C.ZP.LOADING } };
                        case y.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: C.ZP.LOADED, disableStatus: C.ZP.LOADED } };
                        case y.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: C.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[f]?.account_label?.managed_label?.owner_screen_name,
                w = (e) => e[f]?.account_label?.fetchStatus || C.ZP.NONE,
                L = (e) => e[f]?.account_label?.disableStatus || C.ZP.NONE,
                Z =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, g._O)(t, { request: o.withEndpoint(m).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: _, context: "FETCH_USER_ACCOUNT_LABEL" }),
                B =
                    () =>
                    (e, t, { api: n }) =>
                        (0, g._O)(e, { request: n.withEndpoint(m).disableUserAccountLabel, params: {} })({ actionTypes: y, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        82999: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { AccountAutomationScreen: () => q, changeManagingAccountLabel: () => U, default: () => Y, setManagingAccountLabel: () => F });
            var o = n(202784),
                r = n(325686),
                a = n(688715),
                s = n(731708),
                i = n(834324),
                l = n(779610),
                c = n(88307),
                u = n(420412),
                d = n(242454),
                h = n(529356),
                p = n(943401),
                m = n(392237),
                b = n(674132),
                g = n.n(b),
                C = n(47086),
                f = n(293723),
                E = n(290402),
                _ = n(443781),
                y = n(652904),
                S = n(293115),
                w = n(312771),
                L = n(264922),
                Z = n(668214),
                B = n(181617),
                A = n(919022);
            const x = (0, Z.Z)()
                    .propsFromState(() => ({ managingAccount: B.MB, managingAccountFetchStatus: B.iR, disableAccountLabelStatus: B.ET, user: A.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: B.PP, fetchUserAccountLabel: B.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                k = (0, a.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                D = g().d12d42dc,
                T = g().ad31b476,
                P = g().a2981062,
                U = g().aff4540e,
                F = g().b8b9d100,
                I = o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, o.createElement(g().I18NFormatMessage, { $i18n: "d79b6b7b" }, o.createElement(s.ZP, { link: k, size: "subtext2" }, g().f79acef3))),
                v = g().e0bc51f6,
                O = g().i9028824,
                M = g().b92190c2,
                R = g().fb03b39a,
                z = g().bd51ddfa,
                N = { page: "settings", section: "account_information", component: "automation" },
                H = { page: "system", section: "message" },
                V = g().e91c15f6,
                W = g().df035b80,
                j = g().bd12cf34,
                G = g().cfd2f35e,
                Q = "/i/flow/enable_automated_account";
            class q extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleHideCallout = () => {
                            this.setState({ showCallout: !1 });
                        }),
                        (this._handleShowCallout = (e, t = !1) => {
                            this.setState({ showCallout: !0, calloutIsError: t, calloutLabel: e });
                        }),
                        (this._renderCallout = () => {
                            const { calloutIsError: e, calloutLabel: t } = this.state,
                                n = e ? C.default : f.default,
                                a = e ? "danger" : "success";
                            return o.createElement(r.Z, { style: $.inlineCallout }, o.createElement(i.Z, { Icon: n, headline: t || "", onClose: this._handleHideCallout, type: a }));
                        }),
                        (this._handleFetchUserAccountLabel = () => {
                            const { fetchUserAccountLabel: e, user: t } = this.props,
                                n = t?.id_str;
                            n && e(n);
                        }),
                        (this._handleDisableUserAccountLabel = () => {
                            const { disableUserAccountLabel: e } = this.props;
                            e(), this._handleToggleDisableConfirmation();
                        }),
                        (this._handleToggleDisableConfirmation = () => {
                            this.setState({ showDisableConfirmation: !this.state.showDisableConfirmation });
                        }),
                        (this._renderUnassignedManagingAccountView = () => o.createElement(r.Z, null, o.createElement(l.Z, { description: I, label: F, link: Q }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => o.createElement(r.Z, null, o.createElement(c.Z, { label: P, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), o.createElement(l.Z, { label: U, link: Q }), this.state.showCallout && this._renderCallout(), o.createElement(u.Z, null), o.createElement(d.Z, { color: "red500", label: v, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => o.createElement(h.Z, { actionLabel: j, graphicDisplayMode: "none", headline: V, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: G, subtext: W, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return o.createElement(L.Z, { title: D }, t && this._renderDisconnectConfirmation(), o.createElement(p.Z, { description: T }), e);
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        }),
                        (this._initialPath = this._previousPath = window.location.pathname),
                        (this.state = { hasExitedOCF: !1, showCallout: !1, showDisableConfirmation: !1, calloutIsError: !1, calloutLabel: void 0 });
                }
                componentDidMount() {
                    this._handleFetchUserAccountLabel();
                }
                shouldComponentUpdate(e, t) {
                    this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchUserAccountLabel(), this.setState({ hasExitedOCF: !0 })), (this._previousPath = location.pathname);
                    const { disableAccountLabelStatus: n, managingAccount: o, managingAccountFetchStatus: r } = this.props,
                        { disableAccountLabelStatus: a, managingAccount: s, managingAccountFetchStatus: i } = e,
                        { hasExitedOCF: l } = this.state,
                        c = s && o !== s,
                        u = i === w.ZP.LOADED || r === w.ZP.LOADED;
                    if ((c && u && l && (this._handleShowCallout(M), this._scribe({ ...N, action: "enabled" })), n !== a))
                        switch (a) {
                            case w.ZP.LOADED:
                                this._handleShowCallout(R), this._scribe({ ...N, action: "disabled" });
                                break;
                            case w.ZP.FAILED:
                                this._handleShowCallout(z, !0), this._scribe({ ...H, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return o.createElement(S.nO, { namespace: N }, o.createElement(y.Z, null, o.createElement(E.Z, { "aria-label": O, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            q.contextType = _.rC;
            const $ = m.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                Y = x(q);
        },
        264922: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => y });
            var o = n(202784),
                r = n(108362),
                a = n(420412),
                s = n(154003),
                i = n(392237),
                l = n(674132),
                c = n.n(l),
                u = n(290402),
                d = n(253493),
                h = n(71620),
                p = n(668214),
                m = n(38562),
                b = n(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                C = "settingsDetailSave",
                f = c().i2209530;
            class E extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return o.createElement(u.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: i, submitType: l, withMarginBottom: c } = this.props;
                            return o.createElement(r.Z, { style: [_.contentRoot, c && _.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(a.Z, null), o.createElement(r.Z, { style: _.buttonContainer }, o.createElement(s.ZP, { disabled: n, onPress: t, style: _.button, testID: C, type: l }, i))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, title: a, viewerUser: s, withBottomBorder: i } = this.props,
                        l = this.getBackLocation(),
                        c = s ? `@${s.screen_name}` : void 0;
                    return o.createElement(d.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: c, title: a, withBottomBorder: i }, s ? this._renderWithFetchSettings() : this._render());
                }
            }
            E.defaultProps = { submitLabel: f, submitType: "brandFilled", withMarginBottom: !0 };
            const _ = i.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${i.default.iPhoneOffsetBottom})` } })),
                y = g(E);
        },
        242454: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(731708),
                i = n(58881),
                l = n(530732),
                c = n(392237);
            const u = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: n, ...d }) => {
                    const h = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(a.Z, { style: u.container }, r.createElement(l.Z, (0, o.Z)({}, d, { interactiveStyles: h, style: u.root }), r.createElement(s.ZP, { align: e, color: t }, n)));
                };
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                s = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                u = "loaded",
                d = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: s, onRequestRetry: u, render: p, renderFailure: m, retryMessage: b, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? o.createElement(i.Z, { icon: a, onRequestRetry: u, retryMessage: b }) : n ? o.createElement(l.m, { failureMessage: n }) : m();
                        case d:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(235902),
                s = n(885015),
                i = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? o.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, u] })), o.createElement(r.Z, { style: c.gapText }, n), o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, u] }))) : o.createElement(r.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, u] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return r.createElement(a.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        779610: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(325686),
                a = n(191796),
                s = n(58399),
                i = n(731708),
                l = n(952428),
                c = n(392237);
            const u = (e) => {
                    const { decoration: t, description: n, disabled: u = !1, isActive: h = !1, label: p, link: m, onPress: b, paddingHorizontal: g, renderRightContent: C, role: f = "tab", styleOverride: E, testID: _ = "pivot", thumbnail: y, thumbnailSize: S, withoutArrow: w = !1 } = e,
                        L = [d.thumbnailContainer, "medium" === S && d.thumbnailContainerMedium],
                        Z = "string" == typeof p ? o.createElement(i.ZP, null, p) : p,
                        B = "object" == typeof m && m.external && !m.openInSameFrame,
                        A = n ? ("string" == typeof n ? o.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${_}-description` }, n) : n) : null,
                        x = o.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === f ? h : null, disabled: u, link: u ? void 0 : m, onPress: b, role: f, style: [d.root, x, u && d.disabled, E], testID: _, withInteractiveStyling: !!m || !!b }, o.createElement(r.Z, { style: d.contentContainer }, y ? o.createElement(r.Z, { style: L }, y) : null, o.createElement(r.Z, { style: d.content }, Z, A), C ? C() : null, (!m && !b) || u || w ? null : B ? o.createElement(a.default, { style: d.icon }) : o.createElement(s.default, { style: d.icon })), t);
                },
                d = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(731708),
                a = n(392237);
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(r.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        a = i.root;
                    return t && n ? o.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : o.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const i = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = s;
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                s = n(392237);
            class i extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return o.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? o.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: s, withBottomBorder: i } = this.props;
                    return o.createElement(r.Z, { style: [l.root, i && l.bottomBorder] }, o.createElement(a.ZP, null, e), s ? (t && n ? this._renderSubtextAndLink() : o.createElement(a.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const l = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = i;
        },
        424869: (e) => {
            e.exports = function e(t) {
                return (
                    Object.freeze(t),
                    Object.getOwnPropertyNames(t).forEach(function (n) {
                        !t.hasOwnProperty(n) || null === t[n] || ("object" != typeof t[n] && "function" != typeof t[n]) || Object.isFrozen(t[n]) || e(t[n]);
                    }),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAutomation.099497aa.js.map
