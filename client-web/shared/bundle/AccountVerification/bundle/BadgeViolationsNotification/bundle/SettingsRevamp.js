(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp"],
    {
        625661: (E, e, I) => {
            "use strict";
            I.d(e, { ZP: () => C });
            var T = I(202784),
                N = I(614983),
                _ = I.n(N),
                t = I(325686),
                n = I(370006),
                R = I(786998),
                a = I(929028),
                A = I(386802);
            function o(E, e, I) {
                return E || (!e && I ? "fixed" : void 0);
            }
            class C extends T.Component {
                constructor(...E) {
                    super(...E),
                        (this._handleBackClick = () => {
                            const { history: E, onBackClick: e } = this.props;
                            _()(e || E, "Either onBackClick must be specified, or history should be supplied"), e ? e(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: E, history: e } = this.props;
                            e && e.goBack({ backLocation: E });
                        });
                }
                _renderContent() {
                    const { backButtonType: E, centerTitle: e, centeredLogo: I, fixed: N, hideBackButton: _, isFullWidth: t, isLarge: a, leftControl: A, middleControl: C, position: O, rightControl: r, secondaryBar: i, style: c, subtitle: S, title: L, titleDomId: s, titleIconCell: l, titleIconCellSize: U, withBackground: D, withWideContainer: u } = this.props,
                        { isModal: p } = this.context,
                        F = _ ? A : T.createElement(n.Z, { backButtonType: E, onClick: this._handleBackClick }),
                        P = (function (E, e, I) {
                            return E && !(e && I);
                        })(!!D, p, !!i);
                    return T.createElement(T.Fragment, null, T.createElement(R.Z, { centerTitle: e, centeredLogo: I, isFullWidth: t, isLarge: a, leftControl: F, middleControl: C, position: o(O, p, N), rightControl: r, style: c, subtitle: S, title: L, titleDomId: s, titleIconCell: l, titleIconCellSize: U, withBackground: P, withWideContainer: u }), i || null);
                }
                render() {
                    const { secondaryBar: E } = this.props,
                        { isModal: e } = this.context,
                        I = a.Z.getBackgroundStyles();
                    return e ? T.createElement(t.Z, { style: !!E && I }, this._renderContent()) : this._renderContent();
                }
            }
            (C.contextType = A.Z), (C.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (E, e, I) => {
            "use strict";
            I.d(e, { Z: () => A });
            var T = I(202784),
                N = I(500002),
                _ = I(668214),
                t = I(997174),
                n = I(118823);
            const R = (0, _.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: t.NH }))
                .withAnalytics();
            class a extends T.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(E) {
                    const {
                            history: { location: e },
                            location: { pathname: I, search: T },
                            locationKey: N,
                        } = this.props,
                        {
                            location: { pathname: _, search: t },
                            locationKey: n,
                        } = E;
                    let R = !1;
                    e.pathname !== I ? (this._isInBackground = !0) : this._isInBackground && e.pathname === I && ((this._isInBackground = !1), (R = !0));
                    const a = N || n;
                    ((a && N !== n) || (!a && I !== _) || T !== t || R) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(E) {
                    const { analytics: e, updateLocation: I, updateTweetDetailNav: T } = E;
                    e.scribePageImpression(), I(e.contextualScribeNamespace, e.contextualScribeData), T(e.contextualScribeNamespace);
                }
            }
            a.defaultProps = { children: null };
            const A = (0, N.ZP)(R(a));
        },
        946194: (E, e, I) => {
            "use strict";
            I.d(e, { $J: () => PE, ls: () => FE, yE: () => ME, q0: () => YE, kb: () => dE, pD: () => hE, Eo: () => fE, DA: () => xE, QH: () => VE, UZ: () => vE, S5: () => BE, g9: () => WE, kD: () => K, YC: () => Q, sn: () => z, Z$: () => J, EK: () => q, rX: () => $, zH: () => eE, XV: () => EE, $G: () => IE, XC: () => TE, Sb: () => NE, aN: () => _E, TC: () => nE, J9: () => tE, kg: () => RE, QO: () => AE, rT: () => OE, _z: () => CE, Od: () => oE, B_: () => rE, Xu: () => iE, Wv: () => cE, _g: () => SE, P6: () => LE, tC: () => pE, Ep: () => sE, Sh: () => UE, Bf: () => lE, St: () => DE, h8: () => uE, Tc: () => bE, eW: () => QE, $q: () => GE, k8: () => mE, Rg: () => yE, JA: () => gE, Jj: () => wE, yw: () => HE, AM: () => ZE, s8: () => kE, O2: () => KE });
            var T = I(424869),
                N = I.n(T);
            const _ = ({ apiClient: E, featureSwitches: e }) => ({
                fetchAccess: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/access", e, I),
                fetchAccountEligibility: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/account-eligibility", e, I),
                fetchAccountViolations: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/badge-violation/violations", e, I),
                fetchAuthenticationResult: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/id-document", e, I),
                fetchBadgeViolations: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/badge-violation", e, I),
                fetchDocumentFormats: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/document-formats", e, I),
                verifyAccount: (e, I = {}) => E.postUnversioned("/verify/1.0/intake", e, { ...I, "content-type": "application/json" }),
                verifyIdDocument(e, I = {}) {
                    const T = { ...I, "content-type": "multipart/form-data" },
                        { backImage: N, country: _, frontImage: t, idType: n } = e,
                        R = new FormData();
                    return n && R.append("id_type", n), _ && R.append("country", _), N && R.append("back", N), t && R.append("front", t), E.postUnversioned("/verify/1.0/id-document", R, T);
                },
            });
            var t = I(499627),
                n = I(917799),
                R = I(312771),
                a = I(257166),
                A = I(497294),
                o = I(316325);
            const C = "accountVerification",
                O = "rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA",
                r = "rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA",
                i = "rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA",
                c = "rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA",
                S = "rweb/accountVerification/RESET_AUTHENTICATION_RESULT",
                L = "rweb/accountVerification/RESET_AUTHENTICITY_TYPE",
                s = "rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS",
                l = "rweb/accountVerification/RESET_FLOW",
                U = "rweb/accountVerification/RESET_INTAKE_UPLOAD",
                D = "rweb/accountVerification/RESET_SUBMIT_VERIFICATION",
                u = "rweb/accountVerification/SET_AUTHENTICITY_DATA",
                p = "rweb/accountVerification/SET_AUTHENTICITY_TYPE",
                F = "rweb/accountVerification/SET_BACK_ID",
                P = "rweb/accountVerification/SET_FRONT_ID",
                M = "rweb/accountVerification/SET_ID_COUNTRY",
                Y = "rweb/accountVerification/SET_ID_TYPE",
                d = "rweb/accountVerification/SET_NEXT_FLOW",
                f = "rweb/accountVerification/SET_NOTABILITY_CATEGORY",
                b = "rweb/accountVerification/SET_NOTABILITY_DATA",
                G = "rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY",
                m = "rweb/accountVerification/SET_PREV_FLOW",
                y = "rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION",
                B = "rweb/accountVerification/UPDATE_FORM_HISTORY",
                V = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCESS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCESS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCESS_FAILURE" }),
                W = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_FAILURE" }),
                H = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_FAILURE" }),
                x = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_FAILURE" }),
                w = Object.freeze({ REQUEST: "rweb/accountVerification/VERIFY_ACCOUNT_REQUEST", SUCCESS: "rweb/accountVerification/VERIFY_ACCOUNT_SUCCESS", FAILURE: "rweb/accountVerification/VERIFY_ACCOUNT_FAILURE" }),
                v = Object.freeze({ REQUEST: "rweb/accountVerification/VERIFY_ID_DOCUMENT_REQUEST", SUCCESS: "rweb/accountVerification/VERIFY_ID_DOCUMENT_SUCCESS", FAILURE: "rweb/accountVerification/VERIFY_ID_DOCUMENT_FAILURE" }),
                Z = o.pl.LANDING_PAGE,
                k = N()({ access: { data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: o.pY.DISABLED }, error: null, fetchStatus: R.ZP.NONE }, accountEligibility: { data: { followers_eligible: !1, mentions_eligible: !1 }, error: null, fetchStatus: R.ZP.NONE }, accountViolations: { data: { violations: [] }, error: null, fetchStatus: R.ZP.NONE }, authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: R.ZP.NONE }, badgeViolations: { data: { button_text: "", debadge_timestamp_ms: 0, violation_modal_title: "", violation_modal_desc: { entities: [], text: "" }, violations: [] }, error: null, fetchStatus: R.ZP.NONE }, documentFormats: { data: void 0, error: null, fetchStatus: R.ZP.NONE }, documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: R.ZP.NONE }, formData: { authenticityType: void 0, authenticityData: void 0, notabilityCategory: void 0, notabilityData: void 0, notabilitySubcategory: void 0 }, backID: void 0, formHistory: {}, frontID: void 0, idCountry: void 0, idCountryName: void 0, idType: void 0, idTypeName: void 0, isConfirmed: !1, currentStep: Z, stepsTaken: [Z], surveyUrl: void 0, verifyAccount: { error: null, fetchStatus: R.ZP.NONE } });
            t.Z.register({
                [C]: function (E = k, e) {
                    if (!e) return E;
                    switch (e.type) {
                        case V.REQUEST:
                            return { ...E, access: { ...E.access, fetchStatus: R.ZP.LOADING, error: null } };
                        case V.SUCCESS:
                            if (e.payload) return { ...E, access: { data: { ...E.access.data, applicationSubmissionTimeInMs: e.payload.application_submission_time_in_ms, decisionMadeTimeInMs: e.payload.decision_made_time_in_ms, status: e.payload.status || o.pY.DISABLED }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case V.FAILURE:
                            return { ...E, access: { ...E.access, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case W.REQUEST:
                            return { ...E, accountEligibility: { ...E.accountEligibility, fetchStatus: R.ZP.LOADING, error: null } };
                        case W.SUCCESS:
                            if (e.payload) return { ...E, accountEligibility: { data: { ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case W.FAILURE:
                            return { ...E, accountEligibility: { ...E.accountEligibility, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case h.REQUEST:
                            return { ...E, accountViolations: { ...E.accountViolations, fetchStatus: R.ZP.LOADING, error: null } };
                        case h.SUCCESS:
                            if (e.payload) return { ...E, accountViolations: { data: { ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case h.FAILURE:
                            return { ...E, accountViolations: { ...E.accountViolations, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case H.REQUEST:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: null, fetchStatus: R.ZP.LOADING } };
                        case H.SUCCESS:
                            return { ...E, authenticationResult: { data: { ...E.authenticationResult.data, ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                        case H.FAILURE:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case x.REQUEST:
                            return { ...E, badgeViolations: { ...E.badgeViolations, fetchStatus: R.ZP.LOADING } };
                        case x.SUCCESS:
                            if (e.payload) return { ...E, badgeViolations: { data: { ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case x.FAILURE:
                            return { ...E, badgeViolations: { ...E.badgeViolations, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case g.REQUEST:
                            return { ...E, documentFormats: { ...E.documentFormats, error: null, fetchStatus: R.ZP.LOADING } };
                        case g.SUCCESS:
                            if (e.payload) return { ...E, documentFormats: { data: { ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case g.FAILURE:
                            return { ...E, documentFormats: { ...E.documentFormats, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case w.REQUEST:
                            return { ...E, verifyAccount: { error: null, fetchStatus: R.ZP.LOADING } };
                        case w.SUCCESS: {
                            let I;
                            return e.payload && (I = e.payload.survey_url), { ...E, surveyUrl: I, verifyAccount: { error: null, fetchStatus: R.ZP.LOADED } };
                        }
                        case w.FAILURE:
                            return { ...E, verifyAccount: { error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case v.REQUEST:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: null, fetchStatus: R.ZP.LOADING } };
                        case v.SUCCESS:
                            return { ...E, documentIdProcess: { data: { ...E.documentIdProcess.data, ...e.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                        case v.FAILURE:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: e.payload, fetchStatus: R.ZP.FAILED } };
                        case O:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, articleReferenceUrls: e.payload?.articleReferenceUrls } } };
                        case r:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, mainReferenceUrl: e.payload?.mainReferenceUrl } } };
                        case i:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, newsReferenceUrls: e.payload?.newsReferenceUrls } } };
                        case c:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, publicReferenceUrl: e.payload?.publicReferenceUrl } } };
                        case F:
                            return { ...E, backID: e.payload };
                        case P:
                            return { ...E, frontID: e.payload };
                        case M:
                            if (e.payload) return { ...E, idCountry: e.payload.countryCode, idCountryName: e.payload.countryName, idType: void 0, idTypeName: void 0 };
                            break;
                        case Y:
                            if (e.payload) return { ...E, idType: e.payload.idType, idTypeName: e.payload.idTypeName };
                            break;
                        case U:
                            return { ...E, backID: k.backID, frontID: k.frontID, isConfirmed: k.isConfirmed };
                        case D: {
                            const { previousStep: e, remainingSteps: I } = zE(E.stepsTaken);
                            return { ...E, currentStep: e, stepsTaken: [...I], verifyAccount: { error: null, fetchStatus: R.ZP.NONE } };
                        }
                        case y:
                            return { ...E, isConfirmed: !E.isConfirmed };
                        case s:
                            return { ...E, documentIdProcess: { ...k.documentIdProcess } };
                        case S:
                            return { ...E, authenticationResult: { ...k.authenticationResult } };
                        case d:
                            if (e.payload) return { ...E, currentStep: e.payload, stepsTaken: [...E.stepsTaken, e.payload] };
                            break;
                        case m: {
                            const { previousStep: e, remainingSteps: I } = zE(E.stepsTaken);
                            return { ...E, currentStep: e, stepsTaken: [...I] };
                        }
                        case f:
                            return { ...E, formData: { ...E.formData, notabilityCategory: e.payload } };
                        case "rweb/accountVerification/RESET_NOTABILITY_CATEGORY":
                            return { ...E, formData: { ...E.formData, notabilityCategory: k.formData.notabilityCategory, notabilitySubcategory: k.formData.notabilitySubcategory } };
                        case b:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...e.payload } } };
                        case "rweb/accountVerification/RESET_NOTABILITY_DATA":
                            return { ...E, formData: { ...E.formData, notabilityData: k.formData.notabilityData } };
                        case G:
                            return { ...E, formData: { ...E.formData, notabilitySubcategory: e.payload } };
                        case p:
                            return { ...E, backID: k.backID, frontID: k.frontID, isConfirmed: k.isConfirmed, idType: k.idType, idTypeName: k.idTypeName, formData: { ...E.formData, authenticityType: e.payload, authenticityData: k.formData.authenticityData } };
                        case L:
                            return { ...E, formData: { ...E.formData, authenticityType: k.formData.authenticityType } };
                        case u:
                            return { ...E, formData: { ...E.formData, authenticityData: { ...e.payload } } };
                        case "rweb/accountVerification/RESET_AUTHENTICITY_DATA":
                            return { ...E, formData: { ...E.formData, authenticityData: k.formData.authenticityData } };
                        case B: {
                            const I = E.currentStep.toString();
                            return { ...E, formHistory: { ...E.formHistory, [I]: { ...e.payload } } };
                        }
                        case l:
                            return k;
                        default:
                            return E;
                    }
                    return E;
                },
            });
            const K = (E) => E[C].access.data,
                Q = (E) => E[C].access.fetchStatus,
                z = (E) => E[C].accountEligibility.data,
                j = (E) => E[C].accountEligibility.fetchStatus,
                J = (E) => E[C].accountViolations.data,
                X = (E) => E[C].accountViolations.fetchStatus,
                q = (E) => E[C].authenticationResult.data.errors || [],
                $ = (E) => E[C].authenticationResult.data.status,
                EE = (E) => E[C].formData.authenticityType,
                eE = (E) => E[C].formData.authenticityData,
                IE = (E) => E[C].backID,
                TE = (E) => E[C].badgeViolations.data,
                NE = (E) => E[C].badgeViolations.fetchStatus,
                _E = (E) => E[C].isConfirmed,
                tE = (E) => E[C].currentStep,
                nE = (E) => {
                    const e = tE(E);
                    return E[C].formHistory[e] || void 0;
                },
                RE = (E) => E[C].documentFormats.data,
                aE = (E) => E[C].documentFormats.fetchStatus,
                AE = (E) => E[C].documentIdProcess.data.entity_id,
                oE = (E) => E[C].documentIdProcess.error,
                CE = (E) => E[C].documentIdProcess.fetchStatus,
                OE = (E) => E[C].documentIdProcess.data.errors || [],
                rE = (E) => E[C].frontID,
                iE = (E) => E[C].idCountry,
                cE = (E) => E[C].idCountryName,
                SE = (E) => E[C].idType,
                LE = (E) => E[C].idTypeName,
                sE = (E) => E[C].formData.notabilityCategory,
                lE = (E) => {
                    const { notabilityCategory: e, notabilityData: I, notabilitySubcategory: T } = E[C].formData;
                    return e === o.eV.NEWS ? I?.newsType : T;
                },
                UE = (E) => E[C].formData.notabilityData,
                DE = (E) => E[C].surveyUrl,
                uE = (E) => E[C].verifyAccount.fetchStatus,
                pE = (E) => {
                    const e = Q(E),
                        I = j(E),
                        T = X(E),
                        N = (0, a.selectFetchStatus)(E),
                        _ = aE(E);
                    return [e, I, T, N, _].includes(R.ZP.FAILED) ? R.ZP.FAILED : ((E) => E.includes(R.ZP.LOADING))([e, I, T, N, _]) ? R.ZP.LOADING : R.ZP.LOADED;
                },
                FE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = Q(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E(PE()) : Promise.resolve();
                    },
                PE =
                    () =>
                    (E, e, { api: I }) =>
                        (0, n._O)(E, { request: I.withEndpoint(_).fetchAccess })({ actionTypes: V, context: "FETCH_ACCESS" }),
                ME =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = j(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(_).fetchAccountEligibility })({ actionTypes: W, context: "FETCH_ACCOUNT_ELIGIBILITY" })) : Promise.resolve();
                    },
                YE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = X(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(_).fetchAccountViolations })({ actionTypes: h, context: "FETCH_ACCOUNT_VIOLATIONS" })) : Promise.resolve();
                    },
                dE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = ((E) => E[C].authenticationResult.fetchStatus)(e());
                        return T !== R.ZP.LOADING ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(_).fetchAuthenticationResult })({ actionTypes: H, context: "FETCH_AUTHENTICATION_RESULT" })) : Promise.resolve();
                    },
                fE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = aE(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(_).fetchDocumentFormats })({ actionTypes: g, context: "FETCH_DOCUMENT_FORMATS" })) : Promise.resolve();
                    },
                bE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ type: F, payload: E });
                    },
                GE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ type: P, payload: E });
                    },
                mE =
                    (E, e) =>
                    (I, T, { api: N }) => {
                        I({ type: M, payload: { countryCode: E, countryName: e } });
                    },
                yE =
                    (E, e) =>
                    (I, T, { api: N }) => {
                        I({ type: Y, payload: { idType: E, idTypeName: e } });
                    },
                BE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: U });
                    },
                VE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: s });
                    },
                WE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: D });
                    },
                hE =
                    () =>
                    (E, e, { api: I }) =>
                        (0, n._O)(E, { request: I.withEndpoint(_).fetchBadgeViolations })({ actionTypes: x, context: "FETCH_BADGE_VIOLATIONS" }),
                HE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: y });
                    },
                xE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: S });
                    },
                gE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ payload: E || o.CT[tE(I())].next, type: d });
                    },
                wE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: m });
                    },
                vE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: l });
                    },
                ZE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ payload: "string" == typeof E ? { radioData: E } : { inputData: E }, type: B });
                    },
                kE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = EE(T) || void 0,
                            t = eE(T) || void 0,
                            R = sE(T) || void 0,
                            a = UE(T) || {},
                            A = lE(T) || void 0,
                            C = A && R !== o.eV.NEWS;
                        let O = { authenticity_type: N };
                        t?.siteUrl && (O = { ...O, site_url: t?.siteUrl?.[0] }), t?.email && (O = { ...O, verified_email: t?.email?.[0] });
                        let r = { category: R };
                        C && (r = { ...r, notability_subcategory: A }), a?.articleReferenceUrls && (r = { ...r, article_reference_urls: a?.articleReferenceUrls }), a?.authorReferenceUrl && (r = { ...r, author_reference_url: a?.authorReferenceUrl?.[0] }), a?.googleTrendsReferenceUrl && (r = { ...r, google_trends_reference_url: a?.googleTrendsReferenceUrl?.[0] }), a?.hashtagReferenceUrl && (r = { ...r, hashtag_reference_url: a?.hashtagReferenceUrl?.[0] }), a?.imdbReferenceUrl && (r = { ...r, imdb_reference_url: a?.imdbReferenceUrl?.[0] }), a?.leadershipReferenceUrl && (r = { ...r, leadership_reference_url: a?.leadershipReferenceUrl?.[0] }), a?.mainReferenceUrl && (r = { ...r, main_reference_url: a?.mainReferenceUrl?.[0] }), a?.newsReferenceUrls && (r = { ...r, news_reference_urls: a?.newsReferenceUrls }), a?.newsType && (r = { ...r, news_type: a?.newsType }), a?.publicReferenceUrl && (r = { ...r, public_reference_url: a?.publicReferenceUrl?.[0] }), a?.publicationReferenceUrl && (r = { ...r, publication_reference_url: a?.publicationReferenceUrl?.[0] }), a?.stockReferenceUrl && (r = { ...r, stock_reference_url: a?.stockReferenceUrl?.[0] }), a?.teamReferenceUrl && (r = { ...r, team_reference_url: a?.teamReferenceUrl?.[0] }), a?.wikipediaReferenceUrl && (r = { ...r, wikipedia_reference_url: a?.wikipediaReferenceUrl?.[0] });
                        const i = { authenticity_claim: O, notability_claim: r };
                        return (0, n._O)(E, { params: i, request: I.withEndpoint(_).verifyAccount })({ actionTypes: w, context: "VERIFY_ACCOUNT" });
                    },
                KE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = IE(T),
                            t = rE(T),
                            R = SE(T),
                            a = iE(T);
                        let o, C;
                        if (N) {
                            const [E] = (0, A.m3)(T, N);
                            C = E?.originalMediaFile?.fileHandle;
                        }
                        if (t) {
                            const [E] = (0, A.m3)(T, t);
                            o = E?.originalMediaFile?.fileHandle;
                        }
                        const O = { backImage: C, country: a, frontImage: o, idType: R };
                        return (0, n._O)(E, { params: O, request: I.withEndpoint(_).verifyIdDocument })({ actionTypes: v, context: "VERIFY_ID_DOCUMENT" });
                    },
                QE =
                    (E, e) =>
                    (I, T, { api: N }) => {
                        const _ = T(),
                            t = UE(_)?.newsType,
                            { followers_eligible: n, mentions_eligible: R } = z(_);
                        switch (E) {
                            case o.pl.NOTABILITY_CATEGORY_SELECT:
                                I({ payload: e, type: f });
                                break;
                            case o.pl.ACTIVIST_SUBCATEGORY:
                            case o.pl.COMPANY_SUBCATEGORY:
                            case o.pl.ENTERTAINMENT_QUALIFICATIONS:
                            case o.pl.GAMING_SUBCATEGORY:
                            case o.pl.GOVERNMENT_SUBCATEGORY:
                            case o.pl.INFLUENCER_SUBCATEGORY:
                            case o.pl.SPORTS_SUBCATEGORY:
                                "string" == typeof e && (I({ payload: o.W5[e], type: f }), o.W5[e] === o.eV.NEWS ? I({ payload: { newsType: e }, type: b }) : I({ payload: e, type: G }));
                                break;
                            case o.pl.NEWS_QUALIFICATIONS:
                                I({ payload: { newsType: e }, type: b });
                                break;
                            case o.pl.ACTIVIST_QUALIFICATIONS:
                                I({ payload: o.Y_.ACTIVIST, type: G });
                                break;
                            case o.pl.ACTIVIST_GOOGLE_TRENDS:
                            case o.pl.ACTIVIST_LEADERSHIP:
                            case o.pl.ACTIVIST_NEWS:
                            case o.pl.ACTIVIST_WIKIPEDIA:
                            case o.pl.COMPANY_GOOGLE_TRENDS:
                            case o.pl.COMPANY_INDIVIDUAL_LEADERSHIP:
                            case o.pl.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
                            case o.pl.COMPANY_STOCK_EXCHANGE:
                            case o.pl.COMPANY_WIKIPEDIA:
                            case o.pl.CONTENT_CREATOR_GOOGLE_TRENDS:
                            case o.pl.CONTENT_CREATOR_NEWS:
                            case o.pl.CONTENT_CREATOR_WIKIPEDIA:
                            case o.pl.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
                            case o.pl.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
                            case o.pl.ENTERTAINMENT_COMPANY_WIKIPEDIA:
                            case o.pl.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
                            case o.pl.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
                            case o.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
                            case o.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
                            case o.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
                            case o.pl.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
                            case o.pl.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
                            case o.pl.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
                            case o.pl.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
                            case o.pl.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
                            case o.pl.INFLUENCER_GOOGLE_TRENDS:
                            case o.pl.INFLUENCER_NEWS:
                            case o.pl.INFLUENCER_WIKIPEDIA:
                            case o.pl.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
                            case o.pl.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
                            case o.pl.SPORTS_ENTITY_GOOGLE_TRENDS:
                            case o.pl.SPORTS_ENTITY_STOCK_REFERENCE:
                            case o.pl.SPORTS_ENTITY_WEBSITE:
                            case o.pl.SPORTS_ENTITY_WIKIPEDIA:
                                I({ payload: e, type: b });
                                break;
                            case o.pl.COMPANY_NEWS_REFERENCE:
                            case o.pl.SPORTS_ENTITY_NEWS_REFERENCE:
                                I(n ? { payload: e, type: b } : { payload: e, type: i });
                                break;
                            case o.pl.CREATOR_PROFILE:
                            case o.pl.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                                I({ payload: e, type: r });
                                break;
                            case o.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
                            case o.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                                I(n || R ? { payload: e, type: b } : { payload: e, type: i });
                                break;
                            case o.pl.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
                            case o.pl.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
                            case o.pl.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                                I({ payload: e, type: c });
                                break;
                            case o.pl.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                            case o.pl.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
                            case o.pl.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
                            case o.pl.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
                            case o.pl.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
                            case o.pl.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
                            case o.pl.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                                I({ payload: { ...e, newsType: t }, type: b });
                                break;
                            case o.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                                I(n || R ? { payload: { ...e, newsType: t }, type: b } : { payload: { ...e }, type: O });
                                break;
                            case o.pl.AUTHENTICITY_TYPE_SELECT:
                                I({ payload: e, type: p });
                                break;
                            case o.pl.EMAIL_VERIFICATION:
                                I({ payload: { email: [e] }, type: u });
                                break;
                            case o.pl.SITE_VERIFICATION:
                                I({ payload: e, type: u });
                                break;
                            default:
                                return;
                        }
                    },
                zE = (E) => {
                    const [e = Z] = E.slice(-2),
                        I = [Z, ...E.slice(1, -1)];
                    return e === o.pl.INTAKE_LOADING ? zE(I) : { previousStep: e, remainingSteps: I };
                };
        },
        316325: (E, e, I) => {
            "use strict";
            I.d(e, { CT: () => D, DY: () => c, GG: () => A, L_: () => t, M_: () => l, QP: () => C, R2: () => S, S: () => n, Tq: () => T, W5: () => s, WS: () => R, Y_: () => o, Yp: () => i, aF: () => r, an: () => L, eV: () => a, fX: () => N, nS: () => O, pY: () => _, pl: () => U });
            const T = Object.freeze({ IN_COMPLIANCE: "in_compliance", OUT_OF_COMPLIANCE: "out_of_compliance" }),
                N = Object.freeze({ PROFILE_COMPLETION: "profile_completion", ACCOUNT_SECURITY: "account_security" }),
                _ = Object.freeze({ DISABLED: "disabled", INTAKE_PROGRESS: "intake_progress", LOCKED: "locked", NEW_ACCOUNT: "new_account", NOT_ELIGIBLE: "not_eligible", NOT_STARTED: "not_started", VERIFICATION_DENIED: "verification_denied", VERIFICATION_PENDING: "verification_pending", VERIFIED: "verified" }),
                t = Object.freeze({ IDENTITY_DOCUMENT: "identity_document", EMAIL: "email", WEBSITE: "website" }),
                n = { WEBSITE: "siteUrl" },
                R = Object.freeze({ CONCLUSIVE: "conclusive", INCONCLUSIVE: "inconclusive", NOT_STARTED: "not_started", PENDING: "pending" }),
                a = Object.freeze({ ACTIVISM: "activism", COMPANY: "brand_company_organization", ENTERTAINMENT: "entertainment", GAMING: "gaming", GOVERNMENT: "government", INFLUENCER_OTHER: "influencer_other", NEWS: "news", SPORTS: "sports" }),
                A = { ARTICLES: "articleReferenceUrls", AUTHOR: "authorReferenceUrl", GOOGLE: "googleTrendsReferenceUrl", HASHTAG: "hashtagReferenceUrl", IMDB: "imdbReferenceUrl", LEADERSHIP: "leadershipReferenceUrl", MAIN: "mainReferenceUrl", NEWS: "newsReferenceUrls", PUBLIC: "publicReferenceUrl", PUBLICATION: "publicationReferenceUrl", STOCK: "stockReferenceUrl", TEAM: "teamReferenceUrl", WIKIPEDIA: "wikipediaReferenceUrl" },
                o = Object.freeze({ ACTIVIST: "activist" }),
                C = Object.freeze({ COMPANY: "company", EXECUTIVE: "executive" }),
                O = Object.freeze({ ENTERTAINMENT_COMPANY: "entertainment_company", ENTERTAINMENT_INDIVIDUAL: "entertainment_individual", PRODUCTION: "production" }),
                r = Object.freeze({ CANDIDATE: "candidate", OFFICE: "office", OFFICIAL: "official" }),
                i = Object.freeze({ CONTENT_CREATOR: "content_creator", INFLUENTIAL_INDIVIDUAL: "influential_individual" }),
                c = Object.freeze({ FREELANCER: "freelancer", JOURNALIST: "journalist", ORGANIZATION: "organization" }),
                S = Object.freeze({ SPORTS_INDIVIDUAL: "sports_individual", SPORTS_ENTITY: "sports_entity", GAMING_INDIVIDUAL: "gaming_individual" }),
                L = Object.freeze({ ...o, ...C, ...O, ...r, ...i, ...c, ...S }),
                s = Object.freeze({ [o.ACTIVIST]: a.ACTIVISM, [C.COMPANY]: a.COMPANY, [C.EXECUTIVE]: a.COMPANY, [O.ENTERTAINMENT_COMPANY]: a.ENTERTAINMENT, [O.ENTERTAINMENT_INDIVIDUAL]: a.ENTERTAINMENT, [O.PRODUCTION]: a.ENTERTAINMENT, [r.CANDIDATE]: a.GOVERNMENT, [r.OFFICE]: a.GOVERNMENT, [r.OFFICIAL]: a.GOVERNMENT, [i.CONTENT_CREATOR]: a.INFLUENCER_OTHER, [i.INFLUENTIAL_INDIVIDUAL]: a.INFLUENCER_OTHER, [c.FREELANCER]: a.NEWS, [c.JOURNALIST]: a.NEWS, [c.ORGANIZATION]: a.NEWS, [S.SPORTS_INDIVIDUAL]: a.SPORTS, [S.SPORTS_ENTITY]: a.SPORTS, [S.GAMING_INDIVIDUAL]: a.SPORTS }),
                l = Object.freeze({ LANDING_PAGE: "landing_page", NOTABILITY_CATEGORY: "notability_category_select", NOTABILITY_SUBCATEGORY: "notability_subtype_select", NOTABILITY_METHOD: "notability_qualifications_select", NOTABILITY_INPUT: "notability_qualifications_input", AUTHENTICITY_TYPE: "authenticity_type_select", ADD_EMAIL: "authenticity_add_email", ADD_WEBSITE: "authenticity_add_website", ID_UPLOAD: "authenticity_id_upload", REVIEW_SUBMIT: "review_submit", THANK_YOU: "thank_you" }),
                U = Object.freeze({
                    ACTIVIST_GOOGLE_TRENDS: "ACTIVIST_GOOGLE_TRENDS",
                    ACTIVIST_LEADERSHIP: "ACTIVIST_LEADERSHIP",
                    ACTIVIST_NEWS: "ACTIVIST_NEWS",
                    ACTIVIST_QUALIFICATIONS: "ACTIVIST_QUALIFICATIONS",
                    ACTIVIST_QUALIFICATIONS_INELIGIBLE: "ACTIVIST_QUALIFICATIONS_INELIGIBLE",
                    ACTIVIST_SUBCATEGORY: "ACTIVIST_SUBCATEGORY",
                    ACTIVIST_WIKIPEDIA: "ACTIVIST_WIKIPEDIA",
                    AUTHENTICITY_TYPE_SELECT: "AUTHENTICITY_TYPE_SELECT",
                    COMPANY_GOOGLE_TRENDS: "COMPANY_GOOGLE_TRENDS",
                    COMPANY_INDIVIDUAL_LEADERSHIP: "COMPANY_INDIVIDUAL_LEADERSHIP",
                    COMPANY_INDIVIDUAL_NEWS_REFERENCE: "COMPANY_INDIVIDUAL_NEWS_REFERENCE",
                    COMPANY_INDIVIDUAL_NOTABILITY_METHOD: "COMPANY_INDIVIDUAL_NOTABILITY_METHOD",
                    COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM: "COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM",
                    COMPANY_NEWS_REFERENCE: "COMPANY_NEWS_REFERENCE",
                    COMPANY_NOTABILITY_METHOD: "COMPANY_NOTABILITY_METHOD",
                    COMPANY_STOCK_EXCHANGE: "COMPANY_STOCK_EXCHANGE",
                    COMPANY_SUBCATEGORY: "COMPANY_SUBCATEGORY",
                    COMPANY_WIKIPEDIA: "COMPANY_WIKIPEDIA",
                    CONTENT_CREATOR_GOOGLE_TRENDS: "CONTENT_CREATOR_GOOGLE_TRENDS",
                    CONTENT_CREATOR_NEWS: "CONTENT_CREATOR_NEWS",
                    CONTENT_CREATOR_QUALIFICATIONS: "CONTENT_CREATOR_QUALIFICATIONS",
                    CONTENT_CREATOR_WIKIPEDIA: "CONTENT_CREATOR_WIKIPEDIA",
                    CREATOR_PROFILE: "CREATOR_PROFILE",
                    EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
                    ENTERTAINMENT_COMPANY_GOOGLE_TRENDS: "ENTERTAINMENT_COMPANY_GOOGLE_TRENDS",
                    ENTERTAINMENT_COMPANY_NEWS_REFERENCE: "ENTERTAINMENT_COMPANY_NEWS_REFERENCE",
                    ENTERTAINMENT_COMPANY_NOTABILITY_METHOD: "ENTERTAINMENT_COMPANY_NOTABILITY_METHOD",
                    ENTERTAINMENT_COMPANY_STOCK_REFERENCE: "ENTERTAINMENT_COMPANY_STOCK_REFERENCE",
                    ENTERTAINMENT_COMPANY_WIKIPEDIA: "ENTERTAINMENT_COMPANY_WIKIPEDIA",
                    ENTERTAINMENT_INDIVIDUAL_IMDB_URL: "ENTERTAINMENT_INDIVIDUAL_IMDB_URL",
                    ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL: "ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL",
                    ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS: "ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS",
                    ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS: "ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS",
                    ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS: "ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS",
                    ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE: "ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE",
                    ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD: "ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD",
                    ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE: "ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE",
                    ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA: "ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA",
                    ENTERTAINMENT_QUALIFICATIONS: "ENTERTAINMENT_QUALIFICATIONS",
                    GAMING_INDIVIDUAL_INELIGIBLE: "GAMING_INDIVIDUAL_INELIGIBLE",
                    GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS: "GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS",
                    GAMING_INDIVIDUAL_NOTABILITY_METHOD: "GAMING_INDIVIDUAL_NOTABILITY_METHOD",
                    GAMING_INDIVIDUAL_SCREENNAME_CONFIRM: "GAMING_INDIVIDUAL_SCREENNAME_CONFIRM",
                    GAMING_INDIVIDUAL_TEAM_REFERENCE_URL: "GAMING_INDIVIDUAL_TEAM_REFERENCE_URL",
                    GAMING_SUBCATEGORY: "GAMING_SUBCATEGORY",
                    GOVERNMENT_CANDIDATE_LEVEL_CONFIRM: "GOVERNMENT_CANDIDATE_LEVEL_CONFIRM",
                    GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS: "GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS",
                    GOVERNMENT_CANDIDATE_PROFILE_CONFIRM: "GOVERNMENT_CANDIDATE_PROFILE_CONFIRM",
                    GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL: "GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL",
                    GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS: "GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS",
                    GOVERNMENT_OFFICE_PROFILE_CONFIRM: "GOVERNMENT_OFFICE_PROFILE_CONFIRM",
                    GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL: "GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL",
                    GOVERNMENT_OFFICIAL_LEVEL_CONFIRM: "GOVERNMENT_OFFICIAL_LEVEL_CONFIRM",
                    GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS: "GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS",
                    GOVERNMENT_OFFICIAL_PROFILE_CONFIRM: "GOVERNMENT_OFFICIAL_PROFILE_CONFIRM",
                    GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL: "GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL",
                    GOVERNMENT_SUBCATEGORY: "GOVERNMENT_SUBCATEGORY",
                    ID_COUNTRY_SELECT: "ID_COUNTRY_SELECT",
                    ID_TYPE_SELECT: "ID_TYPE_SELECT",
                    INFLUENCER_GOOGLE_TRENDS: "INFLUENCER_GOOGLE_TRENDS",
                    INFLUENCER_NEWS: "INFLUENCER_NEWS",
                    INFLUENCER_QUALIFICATIONS: "INFLUENCER_QUALIFICATIONS",
                    INFLUENCER_QUALIFICATIONS_INELIGIBLE: "INFLUENCER_QUALIFICATIONS_INELIGIBLE",
                    INFLUENCER_SUBCATEGORY: "INFLUENCER_SUBCATEGORY",
                    INFLUENCER_WIKIPEDIA: "INFLUENCER_WIKIPEDIA",
                    INTAKE_LOADING: "INTAKE_LOADING",
                    INTAKE_TYPE_SELECT: "INTAKE_TYPE_SELECT",
                    INTAKE_UPLOAD: "INTAKE_UPLOAD",
                    LANDING_PAGE: "LANDING_PAGE",
                    NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS: "NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS",
                    NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL: "NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL",
                    NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL: "NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL",
                    NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL: "NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL",
                    NEWS_CREDIBILITY_STOCK_REFERENCE_URL: "NEWS_CREDIBILITY_STOCK_REFERENCE_URL",
                    NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL: "NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL",
                    NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS: "NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS",
                    NEWS_JOURNALIST_CRITERIA_CONFIRMATION: "NEWS_JOURNALIST_CRITERIA_CONFIRMATION",
                    NEWS_JOURNALIST_QUALIFICATIONS: "NEWS_JOURNALIST_QUALIFICATIONS",
                    NEWS_JOURNALIST_SCREENNAME_CONFIRMATION: "NEWS_JOURNALIST_SCREENNAME_CONFIRMATION",
                    NEWS_NOTABILITY_CRITERIA_CONFIRMATION: "NEWS_NOTABILITY_CRITERIA_CONFIRMATION",
                    NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS: "NEWS_ORGANIZATION_CREDIBILITY_ARTICLES_REFERENCE_URLS",
                    NEWS_ORGANIZATION_QUALIFICATIONS: "NEWS_ORGANIZATION_QUALIFICATIONS",
                    NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION: "NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION",
                    NEWS_QUALIFICATIONS: "NEWS_QUALIFICATIONS",
                    NOTABILITY_CATEGORY_SELECT: "NOTABILITY_CATEGORY_SELECT",
                    REVIEW_SUBMIT: "REVIEW_SUBMIT",
                    SITE_VERIFICATION: "SITE_VERIFICATION",
                    SPORTS_ENTITY_GOOGLE_TRENDS: "SPORTS_ENTITY_GOOGLE_TRENDS",
                    SPORTS_ENTITY_NEWS_REFERENCE: "SPORTS_ENTITY_NEWS_REFERENCE",
                    SPORTS_ENTITY_NOTABILITY_METHOD: "SPORTS_ENTITY_NOTABILITY_METHOD",
                    SPORTS_ENTITY_STOCK_REFERENCE: "SPORTS_ENTITY_STOCK_REFERENCE",
                    SPORTS_ENTITY_WEBSITE: "SPORTS_ENTITY_WEBSITE",
                    SPORTS_ENTITY_WIKIPEDIA: "SPORTS_ENTITY_WIKIPEDIA",
                    SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS: "SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS",
                    SPORTS_INDIVIDUAL_NOTABILITY_METHOD: "SPORTS_INDIVIDUAL_NOTABILITY_METHOD",
                    SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM: "SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM",
                    SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL: "SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL",
                    SPORTS_SUBCATEGORY: "SPORTS_SUBCATEGORY",
                    TEST_INPUT: "TEST_INPUT",
                    TEST_PIVOT: "TEST_PIVOT",
                    TEST_RADIO: "TEST_RADIO",
                    THANK_YOU: "THANK_YOU",
                    WEBSITE_REFERENCE_CONFIRM_AUTOFILL: "WEBSITE_REFERENCE_CONFIRM_AUTOFILL",
                    WEBSITE_REFERENCE_CONFIRM_PROCEED: "WEBSITE_REFERENCE_CONFIRM_PROCEED",
                }),
                D = Object.freeze({
                    [U.LANDING_PAGE]: { next: U.NOTABILITY_CATEGORY_SELECT, scribeComponent: l.LANDING_PAGE },
                    [U.NOTABILITY_CATEGORY_SELECT]: { next: null, scribeComponent: l.NOTABILITY_CATEGORY },
                    [U.ACTIVIST_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.ACTIVIST_GOOGLE_TRENDS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ACTIVIST_LEADERSHIP]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ACTIVIST_NEWS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ACTIVIST_QUALIFICATIONS_INELIGIBLE]: { next: null, scribeComponent: null },
                    [U.ACTIVIST_SUBCATEGORY]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.ACTIVIST_WIKIPEDIA]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_SUBCATEGORY]: { next: U.COMPANY_NOTABILITY_METHOD, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.COMPANY_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.COMPANY_GOOGLE_TRENDS]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_WIKIPEDIA]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_STOCK_EXCHANGE]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_NEWS_REFERENCE]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: U.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [U.COMPANY_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.COMPANY_INDIVIDUAL_LEADERSHIP]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.COMPANY_INDIVIDUAL_NEWS_REFERENCE]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.CREATOR_PROFILE]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null },
                    [U.CONTENT_CREATOR_GOOGLE_TRENDS]: { next: U.CREATOR_PROFILE, scribeComponent: l.NOTABILITY_INPUT },
                    [U.CONTENT_CREATOR_NEWS]: { next: U.CREATOR_PROFILE, scribeComponent: l.NOTABILITY_INPUT },
                    [U.CONTENT_CREATOR_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.CONTENT_CREATOR_WIKIPEDIA]: { next: U.CREATOR_PROFILE, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_COMPANY_NEWS_REFERENCE]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.ENTERTAINMENT_COMPANY_STOCK_REFERENCE]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_COMPANY_WIKIPEDIA]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_INDIVIDUAL_IMDB_URL]: { next: U.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS]: { next: U.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.ENTERTAINMENT_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM]: { next: U.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, scribeComponent: null },
                    [U.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS]: { next: U.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM]: { next: U.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [U.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS]: { next: U.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_OFFICE_PROFILE_CONFIRM]: { next: U.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [U.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM]: { next: U.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, scribeComponent: null },
                    [U.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS]: { next: U.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM]: { next: U.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [U.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GOVERNMENT_SUBCATEGORY]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.INFLUENCER_GOOGLE_TRENDS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.INFLUENCER_NEWS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.INFLUENCER_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.INFLUENCER_QUALIFICATIONS_INELIGIBLE]: { next: null, scribeComponent: null },
                    [U.INFLUENCER_SUBCATEGORY]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.INFLUENCER_WIKIPEDIA]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_STOCK_REFERENCE_URL]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: U.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_JOURNALIST_CRITERIA_CONFIRMATION]: { next: U.NEWS_JOURNALIST_QUALIFICATIONS, scribeComponent: null },
                    [U.NEWS_JOURNALIST_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.NEWS_NOTABILITY_CRITERIA_CONFIRMATION]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: null },
                    [U.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION]: { next: U.NEWS_ORGANIZATION_QUALIFICATIONS, scribeComponent: null },
                    [U.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION]: { next: U.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, scribeComponent: null },
                    [U.NEWS_ORGANIZATION_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.NEWS_QUALIFICATIONS]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GAMING_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: U.GAMING_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [U.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.GAMING_INDIVIDUAL_INELIGIBLE]: { next: null, scribeComponent: null },
                    [U.GAMING_SUBCATEGORY]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.SPORTS_ENTITY_GOOGLE_TRENDS]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_ENTITY_NEWS_REFERENCE]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_ENTITY_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.SPORTS_ENTITY_STOCK_REFERENCE]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_ENTITY_WEBSITE]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_ENTITY_WIKIPEDIA]: { next: null, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS]: { next: U.AUTHENTICITY_TYPE_SELECT, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: l.NOTABILITY_METHOD },
                    [U.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: U.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [U.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL]: { next: U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: l.NOTABILITY_INPUT },
                    [U.SPORTS_SUBCATEGORY]: { next: null, scribeComponent: l.NOTABILITY_SUBCATEGORY },
                    [U.WEBSITE_REFERENCE_CONFIRM_AUTOFILL]: { next: null, scribeComponent: l.ADD_WEBSITE },
                    [U.WEBSITE_REFERENCE_CONFIRM_PROCEED]: { next: U.REVIEW_SUBMIT, scribeComponent: l.ADD_WEBSITE },
                    [U.AUTHENTICITY_TYPE_SELECT]: { next: null, scribeComponent: l.AUTHENTICITY_TYPE },
                    [U.INTAKE_TYPE_SELECT]: { next: U.INTAKE_UPLOAD, scribeComponent: null },
                    [U.ID_COUNTRY_SELECT]: { next: U.INTAKE_TYPE_SELECT, scribeComponent: null },
                    [U.ID_TYPE_SELECT]: { next: U.INTAKE_TYPE_SELECT, scribeComponent: null },
                    [U.INTAKE_UPLOAD]: { next: U.INTAKE_LOADING, scribeComponent: l.ID_UPLOAD },
                    [U.INTAKE_LOADING]: { next: U.REVIEW_SUBMIT, scribeComponent: l.ID_UPLOAD },
                    [U.EMAIL_VERIFICATION]: { next: U.REVIEW_SUBMIT, scribeComponent: l.ADD_EMAIL },
                    [U.SITE_VERIFICATION]: { next: U.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null },
                    [U.REVIEW_SUBMIT]: { next: U.THANK_YOU, scribeComponent: l.REVIEW_SUBMIT },
                    [U.THANK_YOU]: { next: null, scribeComponent: l.THANK_YOU },
                    [U.TEST_INPUT]: { next: U.TEST_RADIO, scribeComponent: null },
                    [U.TEST_PIVOT]: { next: U.THANK_YOU, scribeComponent: null },
                    [U.TEST_RADIO]: { next: U.THANK_YOU, scribeComponent: null },
                });
        },
        424869: (E) => {
            E.exports = function E(e) {
                return (
                    Object.freeze(e),
                    Object.getOwnPropertyNames(e).forEach(function (I) {
                        !e.hasOwnProperty(I) || null === e[I] || ("object" != typeof e[I] && "function" != typeof e[I]) || Object.isFrozen(e[I]) || E(e[I]);
                    }),
                    e
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp.192783ea.js.map
