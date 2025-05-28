"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountVerification-3ccae474"],
    {
        492767: (e, t, o) => {
            o.r(t), o.d(t, { AccountVerification: () => Y, default: () => K, renderNullHeader: () => U });
            var n = o(807896),
                i = o(202784),
                r = o(537392),
                a = o(392237),
                c = o(111677),
                s = o.n(c),
                p = o(912021),
                l = o(143778),
                d = o(323265),
                h = o(290402),
                u = o(980407),
                m = o(443781),
                _ = o(293115),
                y = o(316325),
                T = o(312771),
                b = o(615027),
                g = o(537668),
                S = o(57435),
                E = o(201325),
                C = o(886225),
                I = o(400796),
                k = o(133931),
                f = o(399656),
                A = o(708203),
                P = o(479736),
                w = o(853137),
                Z = o(878432),
                N = o(748869),
                M = o(197110),
                B = o(71448),
                L = o(240550),
                D = o(778434),
                O = o(594610),
                R = o(782535),
                F = o(695829),
                G = o(804582),
                v = o(971092);
            const V = "INITIAL_FETCH_STATUS_RENDERER",
                x = "SUBMIT_FETCH_STATUS_RENDERER",
                H = s().g61ed8a4,
                U = (e) => null;
            class Y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._accountSettingsLink = d.ZP.isTwitterApp() ? "twitter://settings/account" : "/settings/account"),
                        (this._hasBadgeViolations = (e) => e.violations?.some((e) => e.violation_status === y.Tq.OUT_OF_COMPLIANCE)),
                        (this._isVerificationIntakeEnabled = this.context.featureSwitches.isTrue("identity_verification_intake_enabled")),
                        (this._shouldStartFlow = this.props.accessStatus === y.pY.NOT_STARTED || this.props.accessStatus === y.pY.INTAKE_PROGRESS),
                        (this._fetchFormInformationIfNeeded = () => {
                            const { fetchAccountEligibility: e, fetchAccountViolations: t, fetchDevices: o, fetchDocumentFormats: n } = this.props;
                            return this._shouldStartFlow ? Promise.all([e(), t(), o(), n()]) : Promise.resolve();
                        }),
                        (this._initialFetchRetry = () => {
                            const { createLocalApiErrorHandler: e, fetchAccessIfNeeded: t } = this.props;
                            t()
                                .then(() => this._fetchFormInformationIfNeeded())
                                .catch(e());
                        }),
                        (this._getMemoizedVerificationScribeNamespace = (0, p.Z)((e) => (0, R.qP)(e))),
                        (this._getMemoizedVerificationScribeData = (0, p.Z)(({ accessStatus: e, authenticityType: t, currentStep: o, followersEligible: n, idType: i, mentionsEligible: r, notabilityCategory: a, notabilityData: c, notabilitySubcategory: s }) => (0, R.gE)(e, t, o, n, i, r, a, c, s))),
                        (this._scribeAction = (e, t) => {
                            const { accessStatus: o, analytics: n, authenticityType: i, currentStep: r, followersEligible: a, idType: c, mentionsEligible: s, notabilityCategory: p, notabilityData: l, notabilitySubcategory: d } = this.props;
                            n.scribe({ ...this._getMemoizedVerificationScribeNamespace(r), action: e, data: this._getMemoizedVerificationScribeData({ accessStatus: o, authenticityType: i, currentStep: r, followersEligible: a, idType: c, mentionsEligible: s, notabilityCategory: p, notabilityData: l, notabilitySubcategory: d }), element: t });
                        }),
                        (this._formComponentOptions = () => {
                            const { accessStatus: e, createLocalApiErrorHandler: t, currentStep: o, decisionMadeTimeInMs: n, documentFormats: i, idCountry: r, initialIntakeFetchStatus: a, resetSubmitVerification: c, setIdCountry: s, setIdType: p, setNextFlow: u, setPreviousFlow: m, surveyUrl: _, userEmail: b, verifyAccount: S, verifyAccountFetchStatus: E } = this.props;
                            return {
                                [Z.Z.name]: {
                                    ComponentToRender: Z.Z,
                                    componentProps: {
                                        handleOnClick: () => {
                                            this._scribeAction("click", "CTA"), u();
                                        },
                                    },
                                    genericModalProps: { renderHeader: U },
                                },
                                [O.FW.name]: {
                                    ComponentToRender: O.ZP,
                                    componentProps: {
                                        createLocalApiErrorHandler: t,
                                        handleOnClick: () => {
                                            this._scribeAction("click", "CTA"), u();
                                        },
                                    },
                                    genericModalProps: { onBackClick: m },
                                },
                                [v.ZP.name]: { ComponentToRender: v.ZP, componentProps: { decisionMadeTimeInMs: n, link: this._accountSettingsLink, status: e }, genericModalProps: { backButtonType: "close", hideBackButton: d.ZP.isTwitterApp() } },
                                [B.Z.name]: {
                                    ComponentToRender: B.Z,
                                    componentProps: {
                                        documentFormats: i,
                                        onCountryClick: (e, t) => {
                                            s(e, t), m();
                                        },
                                    },
                                    genericModalProps: { onBackClick: m },
                                },
                                [L.Z.name]: {
                                    ComponentToRender: L.Z,
                                    componentProps: {
                                        documentFormats: i,
                                        idCountry: r,
                                        onTypeClick: (e, t) => {
                                            p(e, t), m();
                                        },
                                    },
                                    genericModalProps: { onBackClick: m },
                                },
                                [y.pl.INTAKE_LOADING]: { ComponentToRender: N.ZP, componentProps: {}, genericModalProps: { hideBackButton: !0, renderHeader: U } },
                                [y.pl.INTAKE_TYPE_SELECT]: { ComponentToRender: M.ZP, componentProps: {}, genericModalProps: { onBackClick: m } },
                                [y.pl.INTAKE_UPLOAD]: { ComponentToRender: D.Z, componentProps: { handleOnClick: () => this._scribeAction("click", "CTA") }, genericModalProps: { onBackClick: m } },
                                [G.ZP.name]: { ComponentToRender: G.ZP, componentProps: { link: this._accountSettingsLink, onSurveyClick: () => this._scribeAction("click", "survey_link"), surveyUrl: _ }, genericModalProps: { renderHeader: U } },
                                [g.ZP.name]: { ComponentToRender: g.ZP, componentProps: { accountViolations: this.props.accountViolations }, genericModalProps: { backButtonType: "close", hideBackButton: d.ZP.isTwitterApp() } },
                                [w.ZP.name]: {
                                    ComponentToRender: w.ZP,
                                    componentProps: {
                                        accountSettingsLink: this._accountSettingsLink,
                                        email: b || "",
                                        handleOnClickValid: () => {
                                            b && this.props.setFormStepData(o, b), this._scribeAction("click", "CTA"), u();
                                        },
                                        handleOnClickInvalid: () => {
                                            m();
                                        },
                                    },
                                    genericModalProps: { onBackClick: m },
                                },
                                [x]: {
                                    ComponentToRender: h.Z,
                                    componentProps: {
                                        fetchStatus: E,
                                        onRequestRetry: () => {
                                            S().catch(t());
                                        },
                                        render: l.Z,
                                        retryMessage: H,
                                    },
                                    genericModalProps: { hideBackButton: E === T.ZP.LOADING, onBackClick: c },
                                },
                                [V]: { ComponentToRender: h.Z, componentProps: { fetchStatus: a, onRequestRetry: this._initialFetchRetry, render: l.Z, retryMessage: H }, genericModalProps: { backButtonType: "close", hideBackButton: d.ZP.isTwitterApp() } },
                            };
                        }),
                        (this._wrapInGenericModalScreen = (e) => {
                            const { ComponentToRender: t, componentProps: o, genericModalProps: r } = this._formComponentOptions()[e];
                            return i.createElement(u.Z, (0, n.Z)({ backButtonType: "back", backLocation: this._accountSettingsLink, containerStyle: r.renderHeader ? F.Z.rootNoAppBar : F.Z.root, hideBackButton: !1, history: this.props.history, withBottomBorder: !1 }, r), i.createElement(t, (0, n.Z)({}, o, { isNarrow: this._isNarrow, key: `${this.props.currentStep}-screen` })));
                        }),
                        (this._createFormFromLayout = (e) => {
                            const { history: t, setPreviousFlow: o } = this.props;
                            if (e && C.C[e]) {
                                const n = C.C[e],
                                    r = "function" == typeof n ? n({ ...this.props }) : n;
                                return i.createElement(u.Z, { backButtonType: "back", containerStyle: F.Z.root, hideBackButton: !1, history: t, onBackClick: o }, this._renderLayoutComponent(r, e));
                            }
                            return i.createElement(b.Z, { to: "/settings/account" });
                        }),
                        (this._renderLayoutComponent = (e, t) => {
                            const o = { isNarrow: this._isNarrow, key: `${t}-screen` };
                            switch (e.type) {
                                case I.S.Info:
                                    return i.createElement(S.Z, (0, n.Z)({}, e.props, { key: `${t}-screen` }));
                                case I.S.Input:
                                    return i.createElement(E.ZP, (0, n.Z)({}, e.props, o));
                                case I.S.Pivot:
                                    return i.createElement(k.Z, (0, n.Z)({}, e.props, o));
                                case I.S.Radio:
                                    return i.createElement(f.Z, (0, n.Z)({}, e.props, o));
                                case I.S.ScreenName:
                                    return i.createElement(A.Z, (0, n.Z)({}, e.props, o));
                                default:
                                    return null;
                            }
                        }),
                        (this._renderFlowStep = () => {
                            const { accountViolations: e, currentStep: t, initialIntakeFetchStatus: o, verifyAccountFetchStatus: n } = this.props;
                            if (o !== T.ZP.LOADED) return this._wrapInGenericModalScreen(V);
                            if (n === T.ZP.LOADING || n === T.ZP.FAILED) return this._wrapInGenericModalScreen(x);
                            if (this._hasBadgeViolations(e)) return this._wrapInGenericModalScreen(g.ZP.name);
                            switch (t) {
                                case y.pl.LANDING_PAGE:
                                    return this._wrapInGenericModalScreen(this._shouldStartFlow ? Z.Z.name : v.ZP.name);
                                case y.pl.INTAKE_TYPE_SELECT:
                                    return this._wrapInGenericModalScreen(y.pl.INTAKE_TYPE_SELECT);
                                case y.pl.ID_COUNTRY_SELECT:
                                    return this._wrapInGenericModalScreen(B.Z.name);
                                case y.pl.ID_TYPE_SELECT:
                                    return this._wrapInGenericModalScreen(L.Z.name);
                                case y.pl.INTAKE_UPLOAD:
                                    return this._wrapInGenericModalScreen(y.pl.INTAKE_UPLOAD);
                                case y.pl.INTAKE_LOADING:
                                    return this._wrapInGenericModalScreen(y.pl.INTAKE_LOADING);
                                case y.pl.EMAIL_VERIFICATION:
                                    return this._wrapInGenericModalScreen(w.ZP.name);
                                case y.pl.REVIEW_SUBMIT:
                                    return this._wrapInGenericModalScreen(O.FW.name);
                                case y.pl.THANK_YOU:
                                    return this._wrapInGenericModalScreen(G.ZP.name);
                                default:
                                    return this._createFormFromLayout(t);
                            }
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAccessIfNeeded: t } = this.props;
                    t()
                        .then(() => this._fetchFormInformationIfNeeded())
                        .then(() => this._scribeAction("get_initial"))
                        .catch(e());
                }
                componentDidUpdate(e) {
                    const { accessStatus: t, createLocalApiErrorHandler: o, currentStep: n } = this.props;
                    e.accessStatus !== t && ((this._shouldStartFlow = t === y.pY.NOT_STARTED || t === y.pY.INTAKE_PROGRESS), this._shouldStartFlow && this._fetchFormInformationIfNeeded().catch(o())), e.currentStep !== n && this._scribeAction("show");
                }
                componentWillUnmount() {
                    this.props.resetFlow();
                }
                render() {
                    const { accessStatus: e, authenticityType: t, currentStep: o, followersEligible: n, idType: c, mentionsEligible: s, notabilityCategory: p, notabilityData: l, notabilitySubcategory: d } = this.props;
                    return this._isVerificationIntakeEnabled
                        ? i.createElement(r.ZP, null, ({ windowWidth: r }) => {
                              const h = r < a.default.theme.breakpoints.small;
                              return h !== this._isNarrow && (this._isNarrow = h), i.createElement(_.nO, { data: this._getMemoizedVerificationScribeData({ accessStatus: e, authenticityType: t, currentStep: o, followersEligible: n, idType: c, mentionsEligible: s, notabilityCategory: p, notabilityData: l, notabilitySubcategory: d }), namespace: this._getMemoizedVerificationScribeNamespace(o) }, this._renderFlowStep());
                          })
                        : null;
                }
            }
            Y.contextType = m.rC;
            const K = (0, P.Z)(Y);
        },
        782535: (e, t, o) => {
            o.d(t, { D1: () => i, gE: () => a, qP: () => r });
            var n = o(316325);
            const i = (e) => e.charAt(0).toLowerCase() + e.slice(1, e.length).replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`),
                r = (e) => ({ component: n.CT[e].scribeComponent || e }),
                a = (e, t, o, r, a, c, s, p, l) => {
                    const d = r || c,
                        h =
                            p &&
                            ((e) => {
                                const { newsType: t, ...o } = e;
                                return Object.keys(o).map((e) => i(e));
                            })(p);
                    let u = {};
                    switch (n.CT[o].scribeComponent) {
                        case n.M_.LANDING_PAGE:
                            u = { access_status: e };
                            break;
                        case n.M_.NOTABILITY_CATEGORY:
                            u = { meets_threshold: d, notability_category: s };
                            break;
                        case n.M_.NOTABILITY_SUBCATEGORY:
                            u = { meets_threshold: d, notability_category: s, category_subtype: l };
                            break;
                        case n.M_.NOTABILITY_METHOD:
                        case n.M_.NOTABILITY_INPUT:
                            u = { meets_threshold: d, notability_category: s, category_subtype: l, notability_method: h };
                            break;
                        case n.M_.AUTHENTICITY_TYPE:
                            u = { notability_category: s, category_subtype: l, authenticity_type: t };
                            break;
                        case n.M_.ID_UPLOAD:
                            u = { notability_category: s, category_subtype: l, authenticity_type: t, id_type: a };
                            break;
                        case n.M_.REVIEW_SUBMIT:
                        case n.M_.THANK_YOU:
                            u = { meets_threshold: d, notability_category: s, category_subtype: l, notability_method: h, authenticity_type: t, id_type: a };
                    }
                    return (u = Object.entries(u).reduce((e, [t, o]) => (void 0 === o || (e[t] = o), e), {})), { verification_application_details: u };
                };
        },
        695829: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(392237);
            const i = n.default.create((e) => ({ root: { height: `calc(600px - ${e.componentDimensions.appBarHeight})`, paddingBottom: e.spaces.space48 }, rootNoAppBar: { height: 600, paddingBottom: e.spaces.space48 }, appBarOffset: { marginTop: `calc(-0.5 * ${e.componentDimensions.appBarHeight})` }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, buttonFixed: { marginTop: e.spaces.space16, marginBottom: e.borderWidths.medium }, buttonPadded: { marginTop: e.spaces.space32, marginBottom: e.borderWidths.medium }, checkbox: { alignItems: "flex-start" }, checkboxContainer: { flexDirection: "row-reverse", flexWrap: "nowrap", paddingEnd: `calc(${e.spaces.space12} + ${e.borderWidths.medium})` }, checkboxText: { flexShrink: 1, marginEnd: e.spaces.space8 }, container: { flex: 1, marginHorizontal: `calc(2 * ${e.spaces.space48})` }, contentContainer: { paddingVertical: e.spaces.space16 }, fixedContainer: { flexGrow: 0 }, header: { paddingVertical: e.spaces.space12 }, largeBannerContainer: { flex: 1 }, listItem: { justifyContent: "space-between", minHeight: `calc(${n.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, narrowContainer: { marginHorizontal: e.spaces.space16 }, scrollableContainer: { flexGrow: 1, flexShrink: 1, flexBasis: 0, overflowY: "auto" }, subheading: { paddingTop: e.spaces.space24 }, subtext: { paddingTop: e.spaces.space4 }, text: { paddingTop: e.spaces.space12 }, topPaddingSmall: { paddingTop: e.spaces.space4 }, verticalCenter: { justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountVerification-3ccae474.f9b1721a.js.map
