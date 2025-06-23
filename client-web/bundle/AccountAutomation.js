(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAutomation"],
    {
        200111: (e) => {
            e.exports = { queryId: "_ckHEj05gan2VfNHG6thBA", operationName: "DisableUserAccountLabel", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        661490: (e) => {
            e.exports = { queryId: "rD5gLxVmMvtdtYU1UHWlFQ", operationName: "UserAccountLabel", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        290402: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            var o = a(807896),
                n = a(202784),
                r = a(182056),
                s = a(879113),
                c = a(392237),
                l = a(111677),
                i = a.n(l),
                u = a(968478);
            const d = i().aa6e3300,
                h = ({ retryMessage: e, ...t }, a) => {
                    const c = r.Z.isOnline();
                    return n.createElement(s.Z, (0, o.Z)({}, t, { icon: c ? void 0 : n.createElement(u.default, { style: b.icon }), retryMessage: c ? e : d }));
                },
                b = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        181617: (e, t, a) => {
            "use strict";
            a.d(t, { PP: () => w, cs: () => y, ET: () => Z, MB: () => S, iR: () => L });
            var o = a(424869),
                n = a.n(o),
                r = a(163889),
                s = a(414742),
                c = a(200111),
                l = a.n(c),
                i = a(661490),
                u = a.n(i),
                d = a(503768);
            const h = (e, t) => {
                    const a = t?.user?.result;
                    return a || (0, r.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                b = (e, t) => {
                    const a = t?.disable_user_account_label;
                    return a || (0, r.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, d.dL)(e) }), (0, s.jB)(e);
                },
                m = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(u(), { rest_id: t }, h), disableUserAccountLabel: () => e.graphQL(l(), {}, b) });
            var p = a(499627),
                g = a(917799),
                E = a(312771);
            const _ = "accountTaxonomy",
                C = n()({ account_label: { disableStatus: E.ZP.NONE, fetchStatus: E.ZP.NONE, managed_label: void 0 } }),
                f = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                A = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            p.Z.register({
                [_]: function (e = C, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case f.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.LOADING } };
                        case f.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: E.ZP.LOADED } };
                        case f.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.FAILED } };
                        case A.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.LOADING } };
                        case A.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: E.ZP.LOADED, disableStatus: E.ZP.LOADED } };
                        case A.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[_]?.account_label?.managed_label?.owner_screen_name,
                L = (e) => e[_]?.account_label?.fetchStatus || E.ZP.NONE,
                Z = (e) => e[_]?.account_label?.disableStatus || E.ZP.NONE,
                y =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, g._O)(t, { request: o.withEndpoint(m).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: f, context: "FETCH_USER_ACCOUNT_LABEL" }),
                w =
                    () =>
                    (e, t, { api: a }) =>
                        (0, g._O)(e, { request: a.withEndpoint(m).disableUserAccountLabel, params: {} })({ actionTypes: A, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        82999: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { AccountAutomationScreen: () => W, changeManagingAccountLabel: () => F, default: () => J, setManagingAccountLabel: () => O });
            var o = a(202784),
                n = a(325686),
                r = a(688715),
                s = a(731708),
                c = a(834324),
                l = a(779610),
                i = a(88307),
                u = a(420412),
                d = a(242454),
                h = a(529356),
                b = a(943401),
                m = a(392237),
                p = a(111677),
                g = a.n(p),
                E = a(47086),
                _ = a(293723),
                C = a(290402),
                f = a(443781),
                A = a(652904),
                S = a(293115),
                L = a(312771),
                Z = a(264922),
                y = a(668214),
                w = a(181617),
                U = a(919022);
            const x = (0, y.Z)()
                    .propsFromState(() => ({ managingAccount: w.MB, managingAccountFetchStatus: w.iR, disableAccountLabelStatus: w.ET, user: U.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: w.PP, fetchUserAccountLabel: w.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                D = (0, r.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                T = g().d12d42dc,
                P = g().ad31b476,
                B = g().a2981062,
                F = g().aff4540e,
                O = g().b8b9d100,
                v = o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, o.createElement(g().I18NFormatMessage, { $i18n: "d79b6b7b" }, o.createElement(s.ZP, { link: D, size: "subtext2" }, g().f79acef3))),
                R = g().e0bc51f6,
                M = g().i9028824,
                z = g().b92190c2,
                I = g().fb03b39a,
                N = g().bd51ddfa,
                k = { page: "settings", section: "account_information", component: "automation" },
                H = { page: "system", section: "message" },
                V = g().e91c15f6,
                j = g().df035b80,
                G = g().bd12cf34,
                Q = g().cfd2f35e,
                q = "/i/flow/enable_automated_account";
            class W extends o.Component {
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
                                a = e ? E.default : _.default,
                                r = e ? "danger" : "success";
                            return o.createElement(n.Z, { style: $.inlineCallout }, o.createElement(c.Z, { Icon: a, headline: t || "", onClose: this._handleHideCallout, type: r }));
                        }),
                        (this._handleFetchUserAccountLabel = () => {
                            const { fetchUserAccountLabel: e, user: t } = this.props,
                                a = t?.id_str;
                            a && e(a);
                        }),
                        (this._handleDisableUserAccountLabel = () => {
                            const { disableUserAccountLabel: e } = this.props;
                            e(), this._handleToggleDisableConfirmation();
                        }),
                        (this._handleToggleDisableConfirmation = () => {
                            this.setState({ showDisableConfirmation: !this.state.showDisableConfirmation });
                        }),
                        (this._renderUnassignedManagingAccountView = () => o.createElement(n.Z, null, o.createElement(l.Z, { description: v, label: O, link: q }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => o.createElement(n.Z, null, o.createElement(i.Z, { label: B, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), o.createElement(l.Z, { label: F, link: q }), this.state.showCallout && this._renderCallout(), o.createElement(u.Z, null), o.createElement(d.Z, { color: "red500", label: R, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => o.createElement(h.Z, { actionLabel: G, graphicDisplayMode: "none", headline: V, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: Q, subtext: j, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return o.createElement(Z.Z, { title: T }, t && this._renderDisconnectConfirmation(), o.createElement(b.Z, { description: P }), e);
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
                    const { disableAccountLabelStatus: a, managingAccount: o, managingAccountFetchStatus: n } = this.props,
                        { disableAccountLabelStatus: r, managingAccount: s, managingAccountFetchStatus: c } = e,
                        { hasExitedOCF: l } = this.state,
                        i = s && o !== s,
                        u = c === L.ZP.LOADED || n === L.ZP.LOADED;
                    if ((i && u && l && (this._handleShowCallout(z), this._scribe({ ...k, action: "enabled" })), a !== r))
                        switch (r) {
                            case L.ZP.LOADED:
                                this._handleShowCallout(I), this._scribe({ ...k, action: "disabled" });
                                break;
                            case L.ZP.FAILED:
                                this._handleShowCallout(N, !0), this._scribe({ ...H, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return o.createElement(S.nO, { namespace: k }, o.createElement(A.Z, null, o.createElement(C.Z, { "aria-label": M, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            W.contextType = f.rC;
            const $ = m.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                J = x(W);
        },
        242454: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => d });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(731708),
                c = a(58881),
                l = a(530732),
                i = a(392237);
            const u = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: a, ...d }) => {
                    const h = c.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(r.Z, { style: u.container }, n.createElement(l.Z, (0, o.Z)({}, d, { interactiveStyles: h, style: u.root }), n.createElement(s.ZP, { align: e, color: t }, a)));
                };
        },
        879113: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => b });
            var o = a(202784),
                n = a(476984),
                r = a.n(n),
                s = a(143778),
                c = a(750410),
                l = a(682830);
            const i = "failed",
                u = "loaded",
                d = "loading",
                h = "none";
            class b extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: n, icon: r, loadingMessage: s, onRequestRetry: u, render: b, renderFailure: m, retryMessage: p, retryable: g } = this.props;
                    switch (n) {
                        case i:
                            return g ? o.createElement(c.Z, { icon: r, onRequestRetry: u, retryMessage: p }) : a ? o.createElement(l.m, { failureMessage: a }) : m();
                        case d:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return b();
                    }
                }
            }
            b.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => l });
            var o = a(202784),
                n = a(325686),
                r = a(235902),
                s = a(885015),
                c = a(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: l } = r.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: c.default.theme.colors[e] ?? c.default.theme.colors.borderColor };
                return a ? o.createElement(s.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(n.Z, { style: i.gapColumn }, o.createElement(n.Z, { style: [i.gap, u] })), o.createElement(n.Z, { style: i.gapText }, a), o.createElement(n.Z, { style: i.gapColumn }, o.createElement(n.Z, { style: [i.gap, u] }))) : o.createElement(n.Z, { style: [!t && i.root, l() && i.rootRedesign, i.gap, u] });
            }
            const i = c.default.create((e) => ({ borderColor: { backgroundColor: c.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: c.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(392237);
            class c extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...s } = this.props,
                        c = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, a && l.withGutterColumn] }));
                    return n.createElement(r.Z, (0, o.Z)({ style: [t, l.root, a && l.withGutter] }, s), c);
                }
            }
            c.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = c;
        },
        88307: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i });
            var o = a(202784),
                n = a(325686),
                r = a(731708),
                s = a(392237);
            class c extends o.Component {
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
                    const { label: e, learnMoreLabel: t, learnMoreLink: a, subtext: s, withBottomBorder: c } = this.props;
                    return o.createElement(n.Z, { style: [l.root, c && l.bottomBorder] }, o.createElement(r.ZP, null, e), s ? (t && a ? this._renderSubtextAndLink() : o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            c.defaultProps = { withBottomBorder: !0 };
            const l = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                i = c;
        },
        748138: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => l });
            var o = a(202784),
                n = a(890601),
                r = a(783427),
                s = a(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        424869: (e) => {
            e.exports = function e(t) {
                return (
                    Object.freeze(t),
                    Object.getOwnPropertyNames(t).forEach(function (a) {
                        !t.hasOwnProperty(a) || null === t[a] || ("object" != typeof t[a] && "function" != typeof t[a]) || Object.isFrozen(t[a]) || e(t[a]);
                    }),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAutomation.0c7e543a.js.map
