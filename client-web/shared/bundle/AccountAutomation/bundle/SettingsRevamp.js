(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAutomation~bundle.SettingsRevamp"],
    {
        200111: (e) => {
            e.exports = { queryId: "_ckHEj05gan2VfNHG6thBA", operationName: "DisableUserAccountLabel", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        661490: (e) => {
            e.exports = { queryId: "rD5gLxVmMvtdtYU1UHWlFQ", operationName: "UserAccountLabel", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var o = n(807896),
                a = n(202784),
                r = n(182056),
                s = n(879113),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                u = n(968478);
            const d = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const i = r.Z.isOnline();
                    return a.createElement(s.Z, (0, o.Z)({}, t, { icon: i ? void 0 : a.createElement(u.default, { style: m.icon }), retryMessage: i ? e : d }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = a.forwardRef(h);
        },
        253493: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var o = n(202784),
                a = n(107267),
                r = n(791632),
                s = n(325686),
                i = n(537392),
                l = n(10656),
                c = n(655352),
                u = n(555079),
                d = n(500002),
                h = n(625661),
                m = n(449067),
                p = n(655543),
                b = n(715601),
                g = n(392237);
            const C = g.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...g.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class E extends o.Component {
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
                    const { appBarStyle: e, children: t, leftControl: n, screenType: a, showSubtitleOnRoot: r, showSubtitleOnWideDetail: s, withBottomBorder: i, withDetailOpen: l, ...u } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(m.Z.Configure, u), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: a, backLocation: r, documentTitle: i, headerless: l, history: c, leftControl: d, middleControl: p, onBackClick: b, rightControl: g, screenType: E, searchBoxOptions: _, secondaryBar: f, showSubtitleOnRoot: S, showSubtitleOnWideDetail: L, subtitle: y, title: w, titleIconCell: A, titleIconCellSize: Z, withDetailOpen: B, withSearchBox: D, withTweetButton: T, withWideContainer: U } = this.props,
                        x = "root" === E,
                        P = "secondaryRoot" === E,
                        k = "primaryDetail" === E,
                        F = (k && L) || (x && S),
                        I = x || (k && e),
                        v = x ? u.ey : k ? u.vX : void 0,
                        O = o.createElement(s.Z, { style: C.appBarContainer }, o.createElement(h.ZP, { backLocation: r, fixed: !1, hideBackButton: I, history: c, leftControl: d, middleControl: p, onBackClick: b, rightControl: g, secondaryBar: f, style: a, subtitle: F ? y : void 0, title: w, titleDomId: v, titleIconCell: A, titleIconCellSize: Z, withWideContainer: U })),
                        R = x || (P && B) ? null : o.createElement(m.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: r, documentTitle: i, headerless: l, middleControl: p, onBackClick: b, rightControl: g, searchBoxOptions: _, subtitle: y, title: w, withSearchBox: D, withTweetButton: T });
                    return o.createElement(o.Fragment, null, R, O);
                }
            }
            (E.contextType = p.Z), (E.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const _ = (0, d.ZP)(E),
                f = (e) => {
                    const t = (0, a.useHistory)();
                    return (0, r.HD)(t) ? e.children || null : o.createElement(_, e);
                };
        },
        181617: (e, t, n) => {
            "use strict";
            n.d(t, { PP: () => Z, cs: () => A, ET: () => w, MB: () => L, iR: () => y });
            var o = n(424869),
                a = n.n(o),
                r = n(163889),
                s = n(414742),
                i = n(200111),
                l = n.n(i),
                c = n(661490),
                u = n.n(c),
                d = n(503768);
            const h = (e, t) => {
                    const n = t?.user?.result;
                    return n || (0, r.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                m = (e, t) => {
                    const n = t?.disable_user_account_label;
                    return n || (0, r.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                p = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(u(), { rest_id: t }, h), disableUserAccountLabel: () => e.graphQL(l(), {}, m) });
            var b = n(499627),
                g = n(917799),
                C = n(312771);
            const E = "accountTaxonomy",
                _ = a()({ account_label: { disableStatus: C.ZP.NONE, fetchStatus: C.ZP.NONE, managed_label: void 0 } }),
                f = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            b.Z.register({
                [E]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case f.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: C.ZP.LOADING } };
                        case f.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: C.ZP.LOADED } };
                        case f.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: C.ZP.FAILED } };
                        case S.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: C.ZP.LOADING } };
                        case S.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: C.ZP.LOADED, disableStatus: C.ZP.LOADED } };
                        case S.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: C.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const L = (e) => e[E]?.account_label?.managed_label?.owner_screen_name,
                y = (e) => e[E]?.account_label?.fetchStatus || C.ZP.NONE,
                w = (e) => e[E]?.account_label?.disableStatus || C.ZP.NONE,
                A =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, g._O)(t, { request: o.withEndpoint(p).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: f, context: "FETCH_USER_ACCOUNT_LABEL" }),
                Z =
                    () =>
                    (e, t, { api: n }) =>
                        (0, g._O)(e, { request: n.withEndpoint(p).disableUserAccountLabel, params: {} })({ actionTypes: S, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        82999: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { AccountAutomationScreen: () => q, changeManagingAccountLabel: () => k, default: () => Y, setManagingAccountLabel: () => F });
            var o = n(202784),
                a = n(325686),
                r = n(688715),
                s = n(731708),
                i = n(834324),
                l = n(779610),
                c = n(88307),
                u = n(420412),
                d = n(242454),
                h = n(529356),
                m = n(943401),
                p = n(392237),
                b = n(111677),
                g = n.n(b),
                C = n(47086),
                E = n(293723),
                _ = n(290402),
                f = n(443781),
                S = n(652904),
                L = n(293115),
                y = n(312771),
                w = n(264922),
                A = n(668214),
                Z = n(181617),
                B = n(919022);
            const D = (0, A.Z)()
                    .propsFromState(() => ({ managingAccount: Z.MB, managingAccountFetchStatus: Z.iR, disableAccountLabelStatus: Z.ET, user: B.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: Z.PP, fetchUserAccountLabel: Z.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                T = (0, r.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                U = g().d12d42dc,
                x = g().ad31b476,
                P = g().a2981062,
                k = g().aff4540e,
                F = g().b8b9d100,
                I = o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, o.createElement(g().I18NFormatMessage, { $i18n: "d79b6b7b" }, o.createElement(s.ZP, { link: T, size: "subtext2" }, g().f79acef3))),
                v = g().e0bc51f6,
                O = g().i9028824,
                R = g().b92190c2,
                M = g().fb03b39a,
                z = g().bd51ddfa,
                N = { page: "settings", section: "account_information", component: "automation" },
                H = { page: "system", section: "message" },
                V = g().e91c15f6,
                j = g().df035b80,
                W = g().bd12cf34,
                Q = g().cfd2f35e,
                G = "/i/flow/enable_automated_account";
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
                                n = e ? C.default : E.default,
                                r = e ? "danger" : "success";
                            return o.createElement(a.Z, { style: $.inlineCallout }, o.createElement(i.Z, { Icon: n, headline: t || "", onClose: this._handleHideCallout, type: r }));
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
                        (this._renderUnassignedManagingAccountView = () => o.createElement(a.Z, null, o.createElement(l.Z, { description: I, label: F, link: G }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => o.createElement(a.Z, null, o.createElement(c.Z, { label: P, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), o.createElement(l.Z, { label: k, link: G }), this.state.showCallout && this._renderCallout(), o.createElement(u.Z, null), o.createElement(d.Z, { color: "red500", label: v, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => o.createElement(h.Z, { actionLabel: W, graphicDisplayMode: "none", headline: V, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: Q, subtext: j, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return o.createElement(w.Z, { title: U }, t && this._renderDisconnectConfirmation(), o.createElement(m.Z, { description: x }), e);
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
                    const { disableAccountLabelStatus: n, managingAccount: o, managingAccountFetchStatus: a } = this.props,
                        { disableAccountLabelStatus: r, managingAccount: s, managingAccountFetchStatus: i } = e,
                        { hasExitedOCF: l } = this.state,
                        c = s && o !== s,
                        u = i === y.ZP.LOADED || a === y.ZP.LOADED;
                    if ((c && u && l && (this._handleShowCallout(R), this._scribe({ ...N, action: "enabled" })), n !== r))
                        switch (r) {
                            case y.ZP.LOADED:
                                this._handleShowCallout(M), this._scribe({ ...N, action: "disabled" });
                                break;
                            case y.ZP.FAILED:
                                this._handleShowCallout(z, !0), this._scribe({ ...H, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return o.createElement(L.nO, { namespace: N }, o.createElement(S.Z, null, o.createElement(_.Z, { "aria-label": O, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            q.contextType = f.rC;
            const $ = p.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                Y = D(q);
        },
        264922: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var o = n(202784),
                a = n(108362),
                r = n(420412),
                s = n(154003),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                u = n(290402),
                d = n(253493),
                h = n(71620),
                m = n(668214),
                p = n(38562),
                b = n(919022);
            const g = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: p.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: p.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                C = "settingsDetailSave",
                E = c().i2209530;
            class _ extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return o.createElement(u.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: i, submitType: l, withMarginBottom: c } = this.props;
                            return o.createElement(a.Z, { style: [f.contentRoot, c && f.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(r.Z, null), o.createElement(a.Z, { style: f.buttonContainer }, o.createElement(s.ZP, { disabled: n, onPress: t, style: f.button, testID: C, type: l }, i))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: a, title: r, viewerUser: s, withBottomBorder: i } = this.props,
                        l = this.getBackLocation(),
                        c = s ? `@${s.screen_name}` : void 0;
                    return o.createElement(d.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: n, secondaryBar: a, showSubtitleOnWideDetail: !1, subtitle: c, title: r, withBottomBorder: i }, s ? this._renderWithFetchSettings() : this._render());
                }
            }
            _.defaultProps = { submitLabel: E, submitType: "brandFilled", withMarginBottom: !0 };
            const f = i.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${i.default.iPhoneOffsetBottom})` } })),
                S = g(_);
        },
        242454: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                s = n(731708),
                i = n(58881),
                l = n(530732),
                c = n(392237);
            const u = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: n, ...d }) => {
                    const h = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(r.Z, { style: u.container }, a.createElement(l.Z, (0, o.Z)({}, d, { interactiveStyles: h, style: u.root }), a.createElement(s.ZP, { align: e, color: t }, n)));
                };
        },
        779610: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(325686),
                r = n(191796),
                s = n(58399),
                i = n(731708),
                l = n(952428),
                c = n(392237);
            const u = (e) => {
                    const { decoration: t, description: n, disabled: u = !1, isActive: h = !1, label: m, link: p, onPress: b, paddingHorizontal: g, renderRightContent: C, role: E = "tab", styleOverride: _, testID: f = "pivot", thumbnail: S, thumbnailSize: L, withoutArrow: y = !1 } = e,
                        w = [d.thumbnailContainer, "medium" === L && d.thumbnailContainerMedium],
                        A = "string" == typeof m ? o.createElement(i.ZP, null, m) : m,
                        Z = "object" == typeof p && p.external && !p.openInSameFrame,
                        B = n ? ("string" == typeof n ? o.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${f}-description` }, n) : n) : null,
                        D = o.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === E ? h : null, disabled: u, link: u ? void 0 : p, onPress: b, role: E, style: [d.root, D, u && d.disabled, _], testID: f, withInteractiveStyling: !!p || !!b }, o.createElement(a.Z, { style: d.contentContainer }, S ? o.createElement(a.Z, { style: w }, S) : null, o.createElement(a.Z, { style: d.content }, A, B), C ? C() : null, (!p && !b) || u || y ? null : Z ? o.createElement(r.default, { style: d.icon }) : o.createElement(s.default, { style: d.icon })), t);
                },
                d = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(731708),
                r = n(392237);
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(a.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        r = i.root;
                    return t && n ? o.createElement(a.ZP, { color: "gray700", size: "subtext2", style: r }, e, " ", this._renderLearnMore()) : o.createElement(a.ZP, { color: "gray700", size: "subtext2", style: r }, e);
                }
            }
            const i = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = s;
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                s = n(392237);
            class i extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? o.createElement(r.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: s, withBottomBorder: i } = this.props;
                    return o.createElement(a.Z, { style: [l.root, i && l.bottomBorder] }, o.createElement(r.ZP, null, e), s ? (t && n ? this._renderSubtextAndLink() : o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const l = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAutomation~bundle.SettingsRevamp.6846619a.js.map
