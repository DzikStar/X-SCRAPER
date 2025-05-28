(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp"],
    {
        625661: (E, e, I) => {
            "use strict";
            I.d(e, { ZP: () => r });
            var T = I(202784),
                N = I(614983),
                t = I.n(N),
                _ = I(325686),
                n = I(370006),
                a = I(786998),
                R = I(929028),
                A = I(386802);
            function o(E, e, I) {
                return E || (!e && I ? "fixed" : void 0);
            }
            class r extends T.Component {
                constructor(...E) {
                    super(...E),
                        (this._handleBackClick = () => {
                            const { history: E, onBackClick: e } = this.props;
                            t()(e || E, "Either onBackClick must be specified, or history should be supplied"), e ? e(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: E, history: e } = this.props;
                            e && e.goBack({ backLocation: E });
                        });
                }
                _renderContent() {
                    const { backButtonType: E, centerTitle: e, centeredLogo: I, fixed: N, hideBackButton: t, isFullWidth: _, isLarge: R, leftControl: A, middleControl: r, position: C, rightControl: i, secondaryBar: O, style: c, subtitle: S, title: L, titleDomId: s, titleIconCell: l, titleIconCellSize: U, withBackground: D, withWideContainer: u } = this.props,
                        { isModal: p } = this.context,
                        F = t ? A : T.createElement(n.Z, { backButtonType: E, onClick: this._handleBackClick }),
                        P = (function (E, e, I) {
                            return E && !(e && I);
                        })(!!D, p, !!O);
                    return T.createElement(T.Fragment, null, T.createElement(a.Z, { centerTitle: e, centeredLogo: I, isFullWidth: _, isLarge: R, leftControl: F, middleControl: r, position: o(C, p, N), rightControl: i, style: c, subtitle: S, title: L, titleDomId: s, titleIconCell: l, titleIconCellSize: U, withBackground: P, withWideContainer: u }), O || null);
                }
                render() {
                    const { secondaryBar: E } = this.props,
                        { isModal: e } = this.context,
                        I = R.Z.getBackgroundStyles();
                    return e ? T.createElement(_.Z, { style: !!E && I }, this._renderContent()) : this._renderContent();
                }
            }
            (r.contextType = A.Z), (r.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (E, e, I) => {
            "use strict";
            I.d(e, { Z: () => A });
            var T = I(202784),
                N = I(500002),
                t = I(668214),
                _ = I(997174),
                n = I(118823);
            const a = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: _.NH }))
                .withAnalytics();
            class R extends T.Component {
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
                            location: { pathname: t, search: _ },
                            locationKey: n,
                        } = E;
                    let a = !1;
                    e.pathname !== I ? (this._isInBackground = !0) : this._isInBackground && e.pathname === I && ((this._isInBackground = !1), (a = !0));
                    const R = N || n;
                    ((R && N !== n) || (!R && I !== t) || T !== _ || a) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(E) {
                    const { analytics: e, updateLocation: I, updateTweetDetailNav: T } = E;
                    e.scribePageImpression(), I(e.contextualScribeNamespace, e.contextualScribeData), T(e.contextualScribeNamespace);
                }
            }
            R.defaultProps = { children: null };
            const A = (0, N.ZP)(a(R));
        },
        946194: (E, e, I) => {
            "use strict";
            I.d(e, { $J: () => PE, ls: () => FE, yE: () => ME, q0: () => YE, kb: () => dE, pD: () => hE, Eo: () => fE, DA: () => xE, QH: () => VE, UZ: () => vE, S5: () => BE, g9: () => WE, kD: () => K, YC: () => Q, sn: () => z, Z$: () => J, EK: () => q, rX: () => $, zH: () => eE, XV: () => EE, $G: () => IE, XC: () => TE, Sb: () => NE, aN: () => tE, TC: () => nE, J9: () => _E, kg: () => aE, QO: () => AE, rT: () => CE, _z: () => rE, Od: () => oE, B_: () => iE, Xu: () => OE, Wv: () => cE, _g: () => SE, P6: () => LE, tC: () => pE, Ep: () => sE, Sh: () => UE, Bf: () => lE, St: () => DE, h8: () => uE, Tc: () => bE, eW: () => QE, $q: () => mE, k8: () => GE, Rg: () => yE, JA: () => gE, Jj: () => wE, yw: () => HE, AM: () => ZE, s8: () => kE, O2: () => KE });
            var T = I(424869),
                N = I.n(T);
            const t = ({ apiClient: E, featureSwitches: e }) => ({
                fetchAccess: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/access", e, I),
                fetchAccountEligibility: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/account-eligibility", e, I),
                fetchAccountViolations: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/badge-violation/violations", e, I),
                fetchAuthenticationResult: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/id-document", e, I),
                fetchBadgeViolations: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/badge-violation", e, I),
                fetchDocumentFormats: (e = {}, I = {}) => E.getUnversioned("/verify/1.0/document-formats", e, I),
                verifyAccount: (e, I = {}) => E.postUnversioned("/verify/1.0/intake", e, { ...I, "content-type": "application/json" }),
                verifyIdDocument(e, I = {}) {
                    const T = { ...I, "content-type": "multipart/form-data" },
                        { backImage: N, country: t, frontImage: _, idType: n } = e,
                        a = new FormData();
                    return n && a.append("id_type", n), t && a.append("country", t), N && a.append("back", N), _ && a.append("front", _), E.postUnversioned("/verify/1.0/id-document", a, T);
                },
            });
            var _ = I(499627),
                n = I(917799),
                a = I(312771),
                R = I(257166),
                A = I(497294),
                o = I(316325);
            const r = "accountVerification",
                C = "rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA",
                i = "rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA",
                O = "rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA",
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
                m = "rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY",
                G = "rweb/accountVerification/SET_PREV_FLOW",
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
                k = N()({ access: { data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: o.pY.DISABLED }, error: null, fetchStatus: a.ZP.NONE }, accountEligibility: { data: { followers_eligible: !1, mentions_eligible: !1 }, error: null, fetchStatus: a.ZP.NONE }, accountViolations: { data: { violations: [] }, error: null, fetchStatus: a.ZP.NONE }, authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: a.ZP.NONE }, badgeViolations: { data: { button_text: "", debadge_timestamp_ms: 0, violation_modal_title: "", violation_modal_desc: { entities: [], text: "" }, violations: [] }, error: null, fetchStatus: a.ZP.NONE }, documentFormats: { data: void 0, error: null, fetchStatus: a.ZP.NONE }, documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: a.ZP.NONE }, formData: { authenticityType: void 0, authenticityData: void 0, notabilityCategory: void 0, notabilityData: void 0, notabilitySubcategory: void 0 }, backID: void 0, formHistory: {}, frontID: void 0, idCountry: void 0, idCountryName: void 0, idType: void 0, idTypeName: void 0, isConfirmed: !1, currentStep: Z, stepsTaken: [Z], surveyUrl: void 0, verifyAccount: { error: null, fetchStatus: a.ZP.NONE } });
            _.Z.register({
                [r]: function (E = k, e) {
                    if (!e) return E;
                    switch (e.type) {
                        case V.REQUEST:
                            return { ...E, access: { ...E.access, fetchStatus: a.ZP.LOADING, error: null } };
                        case V.SUCCESS:
                            if (e.payload) return { ...E, access: { data: { ...E.access.data, applicationSubmissionTimeInMs: e.payload.application_submission_time_in_ms, decisionMadeTimeInMs: e.payload.decision_made_time_in_ms, status: e.payload.status || o.pY.DISABLED }, error: null, fetchStatus: a.ZP.LOADED } };
                            break;
                        case V.FAILURE:
                            return { ...E, access: { ...E.access, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case W.REQUEST:
                            return { ...E, accountEligibility: { ...E.accountEligibility, fetchStatus: a.ZP.LOADING, error: null } };
                        case W.SUCCESS:
                            if (e.payload) return { ...E, accountEligibility: { data: { ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                            break;
                        case W.FAILURE:
                            return { ...E, accountEligibility: { ...E.accountEligibility, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case h.REQUEST:
                            return { ...E, accountViolations: { ...E.accountViolations, fetchStatus: a.ZP.LOADING, error: null } };
                        case h.SUCCESS:
                            if (e.payload) return { ...E, accountViolations: { data: { ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                            break;
                        case h.FAILURE:
                            return { ...E, accountViolations: { ...E.accountViolations, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case H.REQUEST:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: null, fetchStatus: a.ZP.LOADING } };
                        case H.SUCCESS:
                            return { ...E, authenticationResult: { data: { ...E.authenticationResult.data, ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                        case H.FAILURE:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case x.REQUEST:
                            return { ...E, badgeViolations: { ...E.badgeViolations, fetchStatus: a.ZP.LOADING } };
                        case x.SUCCESS:
                            if (e.payload) return { ...E, badgeViolations: { data: { ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                            break;
                        case x.FAILURE:
                            return { ...E, badgeViolations: { ...E.badgeViolations, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case g.REQUEST:
                            return { ...E, documentFormats: { ...E.documentFormats, error: null, fetchStatus: a.ZP.LOADING } };
                        case g.SUCCESS:
                            if (e.payload) return { ...E, documentFormats: { data: { ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                            break;
                        case g.FAILURE:
                            return { ...E, documentFormats: { ...E.documentFormats, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case w.REQUEST:
                            return { ...E, verifyAccount: { error: null, fetchStatus: a.ZP.LOADING } };
                        case w.SUCCESS: {
                            let I;
                            return e.payload && (I = e.payload.survey_url), { ...E, surveyUrl: I, verifyAccount: { error: null, fetchStatus: a.ZP.LOADED } };
                        }
                        case w.FAILURE:
                            return { ...E, verifyAccount: { error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case v.REQUEST:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: null, fetchStatus: a.ZP.LOADING } };
                        case v.SUCCESS:
                            return { ...E, documentIdProcess: { data: { ...E.documentIdProcess.data, ...e.payload }, error: null, fetchStatus: a.ZP.LOADED } };
                        case v.FAILURE:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: e.payload, fetchStatus: a.ZP.FAILED } };
                        case C:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, articleReferenceUrls: e.payload?.articleReferenceUrls } } };
                        case i:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, mainReferenceUrl: e.payload?.mainReferenceUrl } } };
                        case O:
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
                            return { ...E, currentStep: e, stepsTaken: [...I], verifyAccount: { error: null, fetchStatus: a.ZP.NONE } };
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
                        case G: {
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
                        case m:
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
            const K = (E) => E[r].access.data,
                Q = (E) => E[r].access.fetchStatus,
                z = (E) => E[r].accountEligibility.data,
                j = (E) => E[r].accountEligibility.fetchStatus,
                J = (E) => E[r].accountViolations.data,
                X = (E) => E[r].accountViolations.fetchStatus,
                q = (E) => E[r].authenticationResult.data.errors || [],
                $ = (E) => E[r].authenticationResult.data.status,
                EE = (E) => E[r].formData.authenticityType,
                eE = (E) => E[r].formData.authenticityData,
                IE = (E) => E[r].backID,
                TE = (E) => E[r].badgeViolations.data,
                NE = (E) => E[r].badgeViolations.fetchStatus,
                tE = (E) => E[r].isConfirmed,
                _E = (E) => E[r].currentStep,
                nE = (E) => {
                    const e = _E(E);
                    return E[r].formHistory[e] || void 0;
                },
                aE = (E) => E[r].documentFormats.data,
                RE = (E) => E[r].documentFormats.fetchStatus,
                AE = (E) => E[r].documentIdProcess.data.entity_id,
                oE = (E) => E[r].documentIdProcess.error,
                rE = (E) => E[r].documentIdProcess.fetchStatus,
                CE = (E) => E[r].documentIdProcess.data.errors || [],
                iE = (E) => E[r].frontID,
                OE = (E) => E[r].idCountry,
                cE = (E) => E[r].idCountryName,
                SE = (E) => E[r].idType,
                LE = (E) => E[r].idTypeName,
                sE = (E) => E[r].formData.notabilityCategory,
                lE = (E) => {
                    const { notabilityCategory: e, notabilityData: I, notabilitySubcategory: T } = E[r].formData;
                    return e === o.eV.NEWS ? I?.newsType : T;
                },
                UE = (E) => E[r].formData.notabilityData,
                DE = (E) => E[r].surveyUrl,
                uE = (E) => E[r].verifyAccount.fetchStatus,
                pE = (E) => {
                    const e = Q(E),
                        I = j(E),
                        T = X(E),
                        N = (0, R.selectFetchStatus)(E),
                        t = RE(E);
                    return [e, I, T, N, t].includes(a.ZP.FAILED) ? a.ZP.FAILED : ((E) => E.includes(a.ZP.LOADING))([e, I, T, N, t]) ? a.ZP.LOADING : a.ZP.LOADED;
                },
                FE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = Q(T);
                        return N !== a.ZP.LOADING && N !== a.ZP.LOADED ? E(PE()) : Promise.resolve();
                    },
                PE =
                    () =>
                    (E, e, { api: I }) =>
                        (0, n._O)(E, { request: I.withEndpoint(t).fetchAccess })({ actionTypes: V, context: "FETCH_ACCESS" }),
                ME =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = j(T);
                        return N !== a.ZP.LOADING && N !== a.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(t).fetchAccountEligibility })({ actionTypes: W, context: "FETCH_ACCOUNT_ELIGIBILITY" })) : Promise.resolve();
                    },
                YE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = X(T);
                        return N !== a.ZP.LOADING && N !== a.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(t).fetchAccountViolations })({ actionTypes: h, context: "FETCH_ACCOUNT_VIOLATIONS" })) : Promise.resolve();
                    },
                dE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = ((E) => E[r].authenticationResult.fetchStatus)(e());
                        return T !== a.ZP.LOADING ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(t).fetchAuthenticationResult })({ actionTypes: H, context: "FETCH_AUTHENTICATION_RESULT" })) : Promise.resolve();
                    },
                fE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = RE(T);
                        return N !== a.ZP.LOADING && N !== a.ZP.LOADED ? E((E, e, { api: I }) => (0, n._O)(E, { request: I.withEndpoint(t).fetchDocumentFormats })({ actionTypes: g, context: "FETCH_DOCUMENT_FORMATS" })) : Promise.resolve();
                    },
                bE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ type: F, payload: E });
                    },
                mE =
                    (E) =>
                    (e, I, { api: T }) => {
                        e({ type: P, payload: E });
                    },
                GE =
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
                        (0, n._O)(E, { request: I.withEndpoint(t).fetchBadgeViolations })({ actionTypes: x, context: "FETCH_BADGE_VIOLATIONS" }),
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
                        e({ payload: E || o.CT[_E(I())].next, type: d });
                    },
                wE =
                    () =>
                    (E, e, { api: I }) => {
                        E({ type: G });
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
                            _ = eE(T) || void 0,
                            a = sE(T) || void 0,
                            R = UE(T) || {},
                            A = lE(T) || void 0,
                            r = A && a !== o.eV.NEWS;
                        let C = { authenticity_type: N };
                        _?.siteUrl && (C = { ...C, site_url: _?.siteUrl?.[0] }), _?.email && (C = { ...C, verified_email: _?.email?.[0] });
                        let i = { category: a };
                        r && (i = { ...i, notability_subcategory: A }), R?.articleReferenceUrls && (i = { ...i, article_reference_urls: R?.articleReferenceUrls }), R?.authorReferenceUrl && (i = { ...i, author_reference_url: R?.authorReferenceUrl?.[0] }), R?.googleTrendsReferenceUrl && (i = { ...i, google_trends_reference_url: R?.googleTrendsReferenceUrl?.[0] }), R?.hashtagReferenceUrl && (i = { ...i, hashtag_reference_url: R?.hashtagReferenceUrl?.[0] }), R?.imdbReferenceUrl && (i = { ...i, imdb_reference_url: R?.imdbReferenceUrl?.[0] }), R?.leadershipReferenceUrl && (i = { ...i, leadership_reference_url: R?.leadershipReferenceUrl?.[0] }), R?.mainReferenceUrl && (i = { ...i, main_reference_url: R?.mainReferenceUrl?.[0] }), R?.newsReferenceUrls && (i = { ...i, news_reference_urls: R?.newsReferenceUrls }), R?.newsType && (i = { ...i, news_type: R?.newsType }), R?.publicReferenceUrl && (i = { ...i, public_reference_url: R?.publicReferenceUrl?.[0] }), R?.publicationReferenceUrl && (i = { ...i, publication_reference_url: R?.publicationReferenceUrl?.[0] }), R?.stockReferenceUrl && (i = { ...i, stock_reference_url: R?.stockReferenceUrl?.[0] }), R?.teamReferenceUrl && (i = { ...i, team_reference_url: R?.teamReferenceUrl?.[0] }), R?.wikipediaReferenceUrl && (i = { ...i, wikipedia_reference_url: R?.wikipediaReferenceUrl?.[0] });
                        const O = { authenticity_claim: C, notability_claim: i };
                        return (0, n._O)(E, { params: O, request: I.withEndpoint(t).verifyAccount })({ actionTypes: w, context: "VERIFY_ACCOUNT" });
                    },
                KE =
                    () =>
                    (E, e, { api: I }) => {
                        const T = e(),
                            N = IE(T),
                            _ = iE(T),
                            a = SE(T),
                            R = OE(T);
                        let o, r;
                        if (N) {
                            const [E] = (0, A.m3)(T, N);
                            r = E?.originalMediaFile?.fileHandle;
                        }
                        if (_) {
                            const [E] = (0, A.m3)(T, _);
                            o = E?.originalMediaFile?.fileHandle;
                        }
                        const C = { backImage: r, country: R, frontImage: o, idType: a };
                        return (0, n._O)(E, { params: C, request: I.withEndpoint(t).verifyIdDocument })({ actionTypes: v, context: "VERIFY_ID_DOCUMENT" });
                    },
                QE =
                    (E, e) =>
                    (I, T, { api: N }) => {
                        const t = T(),
                            _ = UE(t)?.newsType,
                            { followers_eligible: n, mentions_eligible: a } = z(t);
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
                                "string" == typeof e && (I({ payload: o.W5[e], type: f }), o.W5[e] === o.eV.NEWS ? I({ payload: { newsType: e }, type: b }) : I({ payload: e, type: m }));
                                break;
                            case o.pl.NEWS_QUALIFICATIONS:
                                I({ payload: { newsType: e }, type: b });
                                break;
                            case o.pl.ACTIVIST_QUALIFICATIONS:
                                I({ payload: o.Y_.ACTIVIST, type: m });
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
                                I(n ? { payload: e, type: b } : { payload: e, type: O });
                                break;
                            case o.pl.CREATOR_PROFILE:
                            case o.pl.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                                I({ payload: e, type: i });
                                break;
                            case o.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
                            case o.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                                I(n || a ? { payload: e, type: b } : { payload: e, type: O });
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
                                I({ payload: { ...e, newsType: _ }, type: b });
                                break;
                            case o.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                                I(n || a ? { payload: { ...e, newsType: _ }, type: b } : { payload: { ...e }, type: C });
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
            I.d(e, { CT: () => D, DY: () => c, GG: () => A, L_: () => _, M_: () => l, QP: () => r, R2: () => S, S: () => n, Tq: () => T, W5: () => s, WS: () => a, Y_: () => o, Yp: () => O, aF: () => i, an: () => L, eV: () => R, fX: () => N, nS: () => C, pY: () => t, pl: () => U });
            const T = Object.freeze({ IN_COMPLIANCE: "in_compliance", OUT_OF_COMPLIANCE: "out_of_compliance" }),
                N = Object.freeze({ PROFILE_COMPLETION: "profile_completion", ACCOUNT_SECURITY: "account_security" }),
                t = Object.freeze({ DISABLED: "disabled", INTAKE_PROGRESS: "intake_progress", LOCKED: "locked", NEW_ACCOUNT: "new_account", NOT_ELIGIBLE: "not_eligible", NOT_STARTED: "not_started", VERIFICATION_DENIED: "verification_denied", VERIFICATION_PENDING: "verification_pending", VERIFIED: "verified" }),
                _ = Object.freeze({ IDENTITY_DOCUMENT: "identity_document", EMAIL: "email", WEBSITE: "website" }),
                n = { WEBSITE: "siteUrl" },
                a = Object.freeze({ CONCLUSIVE: "conclusive", INCONCLUSIVE: "inconclusive", NOT_STARTED: "not_started", PENDING: "pending" }),
                R = Object.freeze({ ACTIVISM: "activism", COMPANY: "brand_company_organization", ENTERTAINMENT: "entertainment", GAMING: "gaming", GOVERNMENT: "government", INFLUENCER_OTHER: "influencer_other", NEWS: "news", SPORTS: "sports" }),
                A = { ARTICLES: "articleReferenceUrls", AUTHOR: "authorReferenceUrl", GOOGLE: "googleTrendsReferenceUrl", HASHTAG: "hashtagReferenceUrl", IMDB: "imdbReferenceUrl", LEADERSHIP: "leadershipReferenceUrl", MAIN: "mainReferenceUrl", NEWS: "newsReferenceUrls", PUBLIC: "publicReferenceUrl", PUBLICATION: "publicationReferenceUrl", STOCK: "stockReferenceUrl", TEAM: "teamReferenceUrl", WIKIPEDIA: "wikipediaReferenceUrl" },
                o = Object.freeze({ ACTIVIST: "activist" }),
                r = Object.freeze({ COMPANY: "company", EXECUTIVE: "executive" }),
                C = Object.freeze({ ENTERTAINMENT_COMPANY: "entertainment_company", ENTERTAINMENT_INDIVIDUAL: "entertainment_individual", PRODUCTION: "production" }),
                i = Object.freeze({ CANDIDATE: "candidate", OFFICE: "office", OFFICIAL: "official" }),
                O = Object.freeze({ CONTENT_CREATOR: "content_creator", INFLUENTIAL_INDIVIDUAL: "influential_individual" }),
                c = Object.freeze({ FREELANCER: "freelancer", JOURNALIST: "journalist", ORGANIZATION: "organization" }),
                S = Object.freeze({ SPORTS_INDIVIDUAL: "sports_individual", SPORTS_ENTITY: "sports_entity", GAMING_INDIVIDUAL: "gaming_individual" }),
                L = Object.freeze({ ...o, ...r, ...C, ...i, ...O, ...c, ...S }),
                s = Object.freeze({ [o.ACTIVIST]: R.ACTIVISM, [r.COMPANY]: R.COMPANY, [r.EXECUTIVE]: R.COMPANY, [C.ENTERTAINMENT_COMPANY]: R.ENTERTAINMENT, [C.ENTERTAINMENT_INDIVIDUAL]: R.ENTERTAINMENT, [C.PRODUCTION]: R.ENTERTAINMENT, [i.CANDIDATE]: R.GOVERNMENT, [i.OFFICE]: R.GOVERNMENT, [i.OFFICIAL]: R.GOVERNMENT, [O.CONTENT_CREATOR]: R.INFLUENCER_OTHER, [O.INFLUENTIAL_INDIVIDUAL]: R.INFLUENCER_OTHER, [c.FREELANCER]: R.NEWS, [c.JOURNALIST]: R.NEWS, [c.ORGANIZATION]: R.NEWS, [S.SPORTS_INDIVIDUAL]: R.SPORTS, [S.SPORTS_ENTITY]: R.SPORTS, [S.GAMING_INDIVIDUAL]: R.SPORTS }),
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
        879113: (E, e, I) => {
            "use strict";
            I.d(e, { Z: () => C });
            var T = I(202784),
                N = I(476984),
                t = I.n(N),
                _ = I(143778),
                n = I(750410),
                a = I(682830);
            const R = "failed",
                A = "loaded",
                o = "loading",
                r = "none";
            class C extends T.Component {
                shouldComponentUpdate(E) {
                    const e = E.fetchStatus === A,
                        I = this.props.fetchStatus !== E.fetchStatus;
                    return !(!e && !I) || !t()(E, this.props);
                }
                render() {
                    const { "aria-label": E, color: e, failureMessage: I, fetchStatus: N, icon: t, loadingMessage: _, onRequestRetry: A, render: C, renderFailure: i, retryMessage: O, retryable: c } = this.props;
                    switch (N) {
                        case R:
                            return c ? T.createElement(n.Z, { icon: t, onRequestRetry: A, retryMessage: O }) : I ? T.createElement(a.m, { failureMessage: I }) : i();
                        case o:
                            return T.createElement(a.J, { "aria-label": E, color: e, loadingMessage: _ });
                        case r:
                            return null;
                        default:
                            return C();
                    }
                }
            }
            C.defaultProps = { renderFailure: _.Z, retryable: !0 };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp.f4a12f6a.js.map
