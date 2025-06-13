(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp"],
    {
        946194: (E, I, e) => {
            "use strict";
            e.d(I, { $J: () => PE, ls: () => FE, yE: () => ME, q0: () => YE, kb: () => fE, pD: () => HE, Eo: () => dE, DA: () => xE, QH: () => BE, UZ: () => vE, S5: () => yE, g9: () => WE, kD: () => Q, YC: () => k, sn: () => j, Z$: () => J, EK: () => q, rX: () => $, zH: () => IE, XV: () => EE, $G: () => eE, XC: () => TE, Sb: () => NE, aN: () => _E, TC: () => nE, J9: () => tE, kg: () => RE, QO: () => aE, rT: () => rE, _z: () => CE, Od: () => OE, B_: () => oE, Xu: () => iE, Wv: () => cE, _g: () => SE, P6: () => LE, tC: () => pE, Ep: () => sE, Sh: () => lE, Bf: () => UE, St: () => DE, h8: () => uE, Tc: () => bE, eW: () => kE, $q: () => GE, k8: () => mE, Rg: () => VE, JA: () => gE, Jj: () => wE, yw: () => hE, AM: () => ZE, s8: () => KE, O2: () => QE });
            var T = e(424869),
                N = e.n(T);
            const _ = ({ apiClient: E, featureSwitches: I }) => ({
                fetchAccess: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/access", I, e),
                fetchAccountEligibility: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/account-eligibility", I, e),
                fetchAccountViolations: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/badge-violation/violations", I, e),
                fetchAuthenticationResult: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/id-document", I, e),
                fetchBadgeViolations: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/badge-violation", I, e),
                fetchDocumentFormats: (I = {}, e = {}) => E.getUnversioned("/verify/1.0/document-formats", I, e),
                verifyAccount: (I, e = {}) => E.postUnversioned("/verify/1.0/intake", I, { ...e, "content-type": "application/json" }),
                verifyIdDocument(I, e = {}) {
                    const T = { ...e, "content-type": "multipart/form-data" },
                        { backImage: N, country: _, frontImage: t, idType: n } = I,
                        R = new FormData();
                    return n && R.append("id_type", n), _ && R.append("country", _), N && R.append("back", N), t && R.append("front", t), E.postUnversioned("/verify/1.0/id-document", R, T);
                },
            });
            var t = e(499627),
                n = e(917799),
                R = e(312771),
                A = e(257166),
                a = e(497294),
                O = e(316325);
            const C = "accountVerification",
                r = "rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA",
                o = "rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA",
                i = "rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA",
                c = "rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA",
                S = "rweb/accountVerification/RESET_AUTHENTICATION_RESULT",
                L = "rweb/accountVerification/RESET_AUTHENTICITY_TYPE",
                s = "rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS",
                U = "rweb/accountVerification/RESET_FLOW",
                l = "rweb/accountVerification/RESET_INTAKE_UPLOAD",
                D = "rweb/accountVerification/RESET_SUBMIT_VERIFICATION",
                u = "rweb/accountVerification/SET_AUTHENTICITY_DATA",
                p = "rweb/accountVerification/SET_AUTHENTICITY_TYPE",
                F = "rweb/accountVerification/SET_BACK_ID",
                P = "rweb/accountVerification/SET_FRONT_ID",
                M = "rweb/accountVerification/SET_ID_COUNTRY",
                Y = "rweb/accountVerification/SET_ID_TYPE",
                f = "rweb/accountVerification/SET_NEXT_FLOW",
                d = "rweb/accountVerification/SET_NOTABILITY_CATEGORY",
                b = "rweb/accountVerification/SET_NOTABILITY_DATA",
                G = "rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY",
                m = "rweb/accountVerification/SET_PREV_FLOW",
                V = "rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION",
                y = "rweb/accountVerification/UPDATE_FORM_HISTORY",
                B = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCESS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCESS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCESS_FAILURE" }),
                W = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE" }),
                H = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_FAILURE" }),
                x = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_BADGE_VIOLATIONS_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_REQUEST", SUCCESS: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_SUCCESS", FAILURE: "rweb/accountVerification/FETCH_DOCUMENT_FORMATS_FAILURE" }),
                w = Object.freeze({ REQUEST: "rweb/accountVerification/VERIFY_ACCOUNT_REQUEST", SUCCESS: "rweb/accountVerification/VERIFY_ACCOUNT_SUCCESS", FAILURE: "rweb/accountVerification/VERIFY_ACCOUNT_FAILURE" }),
                v = Object.freeze({ REQUEST: "rweb/accountVerification/VERIFY_ID_DOCUMENT_REQUEST", SUCCESS: "rweb/accountVerification/VERIFY_ID_DOCUMENT_SUCCESS", FAILURE: "rweb/accountVerification/VERIFY_ID_DOCUMENT_FAILURE" }),
                Z = O.pl.LANDING_PAGE,
                K = N()({ access: { data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: O.pY.DISABLED }, error: null, fetchStatus: R.ZP.NONE }, accountEligibility: { data: { followers_eligible: !1, mentions_eligible: !1 }, error: null, fetchStatus: R.ZP.NONE }, accountViolations: { data: { violations: [] }, error: null, fetchStatus: R.ZP.NONE }, authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: R.ZP.NONE }, badgeViolations: { data: { button_text: "", debadge_timestamp_ms: 0, violation_modal_title: "", violation_modal_desc: { entities: [], text: "" }, violations: [] }, error: null, fetchStatus: R.ZP.NONE }, documentFormats: { data: void 0, error: null, fetchStatus: R.ZP.NONE }, documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: R.ZP.NONE }, formData: { authenticityType: void 0, authenticityData: void 0, notabilityCategory: void 0, notabilityData: void 0, notabilitySubcategory: void 0 }, backID: void 0, formHistory: {}, frontID: void 0, idCountry: void 0, idCountryName: void 0, idType: void 0, idTypeName: void 0, isConfirmed: !1, currentStep: Z, stepsTaken: [Z], surveyUrl: void 0, verifyAccount: { error: null, fetchStatus: R.ZP.NONE } });
            t.Z.register({
                [C]: function (E = K, I) {
                    if (!I) return E;
                    switch (I.type) {
                        case B.REQUEST:
                            return { ...E, access: { ...E.access, fetchStatus: R.ZP.LOADING, error: null } };
                        case B.SUCCESS:
                            if (I.payload) return { ...E, access: { data: { ...E.access.data, applicationSubmissionTimeInMs: I.payload.application_submission_time_in_ms, decisionMadeTimeInMs: I.payload.decision_made_time_in_ms, status: I.payload.status || O.pY.DISABLED }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case B.FAILURE:
                            return { ...E, access: { ...E.access, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case W.REQUEST:
                            return { ...E, accountEligibility: { ...E.accountEligibility, fetchStatus: R.ZP.LOADING, error: null } };
                        case W.SUCCESS:
                            if (I.payload) return { ...E, accountEligibility: { data: { ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case W.FAILURE:
                            return { ...E, accountEligibility: { ...E.accountEligibility, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case H.REQUEST:
                            return { ...E, accountViolations: { ...E.accountViolations, fetchStatus: R.ZP.LOADING, error: null } };
                        case H.SUCCESS:
                            if (I.payload) return { ...E, accountViolations: { data: { ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case H.FAILURE:
                            return { ...E, accountViolations: { ...E.accountViolations, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case h.REQUEST:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: null, fetchStatus: R.ZP.LOADING } };
                        case h.SUCCESS:
                            return { ...E, authenticationResult: { data: { ...E.authenticationResult.data, ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                        case h.FAILURE:
                            return { ...E, authenticationResult: { ...E.authenticationResult, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case x.REQUEST:
                            return { ...E, badgeViolations: { ...E.badgeViolations, fetchStatus: R.ZP.LOADING } };
                        case x.SUCCESS:
                            if (I.payload) return { ...E, badgeViolations: { data: { ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case x.FAILURE:
                            return { ...E, badgeViolations: { ...E.badgeViolations, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case g.REQUEST:
                            return { ...E, documentFormats: { ...E.documentFormats, error: null, fetchStatus: R.ZP.LOADING } };
                        case g.SUCCESS:
                            if (I.payload) return { ...E, documentFormats: { data: { ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                            break;
                        case g.FAILURE:
                            return { ...E, documentFormats: { ...E.documentFormats, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case w.REQUEST:
                            return { ...E, verifyAccount: { error: null, fetchStatus: R.ZP.LOADING } };
                        case w.SUCCESS: {
                            let e;
                            return I.payload && (e = I.payload.survey_url), { ...E, surveyUrl: e, verifyAccount: { error: null, fetchStatus: R.ZP.LOADED } };
                        }
                        case w.FAILURE:
                            return { ...E, verifyAccount: { error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case v.REQUEST:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: null, fetchStatus: R.ZP.LOADING } };
                        case v.SUCCESS:
                            return { ...E, documentIdProcess: { data: { ...E.documentIdProcess.data, ...I.payload }, error: null, fetchStatus: R.ZP.LOADED } };
                        case v.FAILURE:
                            return { ...E, documentIdProcess: { ...E.documentIdProcess, error: I.payload, fetchStatus: R.ZP.FAILED } };
                        case r:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, articleReferenceUrls: I.payload?.articleReferenceUrls } } };
                        case o:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, mainReferenceUrl: I.payload?.mainReferenceUrl } } };
                        case i:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, newsReferenceUrls: I.payload?.newsReferenceUrls } } };
                        case c:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...E.formData.notabilityData, publicReferenceUrl: I.payload?.publicReferenceUrl } } };
                        case F:
                            return { ...E, backID: I.payload };
                        case P:
                            return { ...E, frontID: I.payload };
                        case M:
                            if (I.payload) return { ...E, idCountry: I.payload.countryCode, idCountryName: I.payload.countryName, idType: void 0, idTypeName: void 0 };
                            break;
                        case Y:
                            if (I.payload) return { ...E, idType: I.payload.idType, idTypeName: I.payload.idTypeName };
                            break;
                        case l:
                            return { ...E, backID: K.backID, frontID: K.frontID, isConfirmed: K.isConfirmed };
                        case D: {
                            const { previousStep: I, remainingSteps: e } = jE(E.stepsTaken);
                            return { ...E, currentStep: I, stepsTaken: [...e], verifyAccount: { error: null, fetchStatus: R.ZP.NONE } };
                        }
                        case V:
                            return { ...E, isConfirmed: !E.isConfirmed };
                        case s:
                            return { ...E, documentIdProcess: { ...K.documentIdProcess } };
                        case S:
                            return { ...E, authenticationResult: { ...K.authenticationResult } };
                        case f:
                            if (I.payload) return { ...E, currentStep: I.payload, stepsTaken: [...E.stepsTaken, I.payload] };
                            break;
                        case m: {
                            const { previousStep: I, remainingSteps: e } = jE(E.stepsTaken);
                            return { ...E, currentStep: I, stepsTaken: [...e] };
                        }
                        case d:
                            return { ...E, formData: { ...E.formData, notabilityCategory: I.payload } };
                        case "rweb/accountVerification/RESET_NOTABILITY_CATEGORY":
                            return { ...E, formData: { ...E.formData, notabilityCategory: K.formData.notabilityCategory, notabilitySubcategory: K.formData.notabilitySubcategory } };
                        case b:
                            return { ...E, formData: { ...E.formData, notabilityData: { ...I.payload } } };
                        case "rweb/accountVerification/RESET_NOTABILITY_DATA":
                            return { ...E, formData: { ...E.formData, notabilityData: K.formData.notabilityData } };
                        case G:
                            return { ...E, formData: { ...E.formData, notabilitySubcategory: I.payload } };
                        case p:
                            return { ...E, backID: K.backID, frontID: K.frontID, isConfirmed: K.isConfirmed, idType: K.idType, idTypeName: K.idTypeName, formData: { ...E.formData, authenticityType: I.payload, authenticityData: K.formData.authenticityData } };
                        case L:
                            return { ...E, formData: { ...E.formData, authenticityType: K.formData.authenticityType } };
                        case u:
                            return { ...E, formData: { ...E.formData, authenticityData: { ...I.payload } } };
                        case "rweb/accountVerification/RESET_AUTHENTICITY_DATA":
                            return { ...E, formData: { ...E.formData, authenticityData: K.formData.authenticityData } };
                        case y: {
                            const e = E.currentStep.toString();
                            return { ...E, formHistory: { ...E.formHistory, [e]: { ...I.payload } } };
                        }
                        case U:
                            return K;
                        default:
                            return E;
                    }
                    return E;
                },
            });
            const Q = (E) => E[C].access.data,
                k = (E) => E[C].access.fetchStatus,
                j = (E) => E[C].accountEligibility.data,
                z = (E) => E[C].accountEligibility.fetchStatus,
                J = (E) => E[C].accountViolations.data,
                X = (E) => E[C].accountViolations.fetchStatus,
                q = (E) => E[C].authenticationResult.data.errors || [],
                $ = (E) => E[C].authenticationResult.data.status,
                EE = (E) => E[C].formData.authenticityType,
                IE = (E) => E[C].formData.authenticityData,
                eE = (E) => E[C].backID,
                TE = (E) => E[C].badgeViolations.data,
                NE = (E) => E[C].badgeViolations.fetchStatus,
                _E = (E) => E[C].isConfirmed,
                tE = (E) => E[C].currentStep,
                nE = (E) => {
                    const I = tE(E);
                    return E[C].formHistory[I] || void 0;
                },
                RE = (E) => E[C].documentFormats.data,
                AE = (E) => E[C].documentFormats.fetchStatus,
                aE = (E) => E[C].documentIdProcess.data.entity_id,
                OE = (E) => E[C].documentIdProcess.error,
                CE = (E) => E[C].documentIdProcess.fetchStatus,
                rE = (E) => E[C].documentIdProcess.data.errors || [],
                oE = (E) => E[C].frontID,
                iE = (E) => E[C].idCountry,
                cE = (E) => E[C].idCountryName,
                SE = (E) => E[C].idType,
                LE = (E) => E[C].idTypeName,
                sE = (E) => E[C].formData.notabilityCategory,
                UE = (E) => {
                    const { notabilityCategory: I, notabilityData: e, notabilitySubcategory: T } = E[C].formData;
                    return I === O.eV.NEWS ? e?.newsType : T;
                },
                lE = (E) => E[C].formData.notabilityData,
                DE = (E) => E[C].surveyUrl,
                uE = (E) => E[C].verifyAccount.fetchStatus,
                pE = (E) => {
                    const I = k(E),
                        e = z(E),
                        T = X(E),
                        N = (0, A.selectFetchStatus)(E),
                        _ = AE(E);
                    return [I, e, T, N, _].includes(R.ZP.FAILED) ? R.ZP.FAILED : ((E) => E.includes(R.ZP.LOADING))([I, e, T, N, _]) ? R.ZP.LOADING : R.ZP.LOADED;
                },
                FE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = k(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E(PE()) : Promise.resolve();
                    },
                PE =
                    () =>
                    (E, I, { api: e }) =>
                        (0, n._O)(E, { request: e.withEndpoint(_).fetchAccess })({ actionTypes: B, context: "FETCH_ACCESS" }),
                ME =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = z(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, I, { api: e }) => (0, n._O)(E, { request: e.withEndpoint(_).fetchAccountEligibility })({ actionTypes: W, context: "FETCH_ACCOUNT_ELIGIBILITY" })) : Promise.resolve();
                    },
                YE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = X(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, I, { api: e }) => (0, n._O)(E, { request: e.withEndpoint(_).fetchAccountViolations })({ actionTypes: H, context: "FETCH_ACCOUNT_VIOLATIONS" })) : Promise.resolve();
                    },
                fE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = ((E) => E[C].authenticationResult.fetchStatus)(I());
                        return T !== R.ZP.LOADING ? E((E, I, { api: e }) => (0, n._O)(E, { request: e.withEndpoint(_).fetchAuthenticationResult })({ actionTypes: h, context: "FETCH_AUTHENTICATION_RESULT" })) : Promise.resolve();
                    },
                dE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = AE(T);
                        return N !== R.ZP.LOADING && N !== R.ZP.LOADED ? E((E, I, { api: e }) => (0, n._O)(E, { request: e.withEndpoint(_).fetchDocumentFormats })({ actionTypes: g, context: "FETCH_DOCUMENT_FORMATS" })) : Promise.resolve();
                    },
                bE =
                    (E) =>
                    (I, e, { api: T }) => {
                        I({ type: F, payload: E });
                    },
                GE =
                    (E) =>
                    (I, e, { api: T }) => {
                        I({ type: P, payload: E });
                    },
                mE =
                    (E, I) =>
                    (e, T, { api: N }) => {
                        e({ type: M, payload: { countryCode: E, countryName: I } });
                    },
                VE =
                    (E, I) =>
                    (e, T, { api: N }) => {
                        e({ type: Y, payload: { idType: E, idTypeName: I } });
                    },
                yE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: l });
                    },
                BE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: s });
                    },
                WE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: D });
                    },
                HE =
                    () =>
                    (E, I, { api: e }) =>
                        (0, n._O)(E, { request: e.withEndpoint(_).fetchBadgeViolations })({ actionTypes: x, context: "FETCH_BADGE_VIOLATIONS" }),
                hE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: V });
                    },
                xE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: S });
                    },
                gE =
                    (E) =>
                    (I, e, { api: T }) => {
                        I({ payload: E || O.CT[tE(e())].next, type: f });
                    },
                wE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: m });
                    },
                vE =
                    () =>
                    (E, I, { api: e }) => {
                        E({ type: U });
                    },
                ZE =
                    (E) =>
                    (I, e, { api: T }) => {
                        I({ payload: "string" == typeof E ? { radioData: E } : { inputData: E }, type: y });
                    },
                KE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = EE(T) || void 0,
                            t = IE(T) || void 0,
                            R = sE(T) || void 0,
                            A = lE(T) || {},
                            a = UE(T) || void 0,
                            C = a && R !== O.eV.NEWS;
                        let r = { authenticity_type: N };
                        t?.siteUrl && (r = { ...r, site_url: t?.siteUrl?.[0] }), t?.email && (r = { ...r, verified_email: t?.email?.[0] });
                        let o = { category: R };
                        C && (o = { ...o, notability_subcategory: a }), A?.articleReferenceUrls && (o = { ...o, article_reference_urls: A?.articleReferenceUrls }), A?.authorReferenceUrl && (o = { ...o, author_reference_url: A?.authorReferenceUrl?.[0] }), A?.googleTrendsReferenceUrl && (o = { ...o, google_trends_reference_url: A?.googleTrendsReferenceUrl?.[0] }), A?.hashtagReferenceUrl && (o = { ...o, hashtag_reference_url: A?.hashtagReferenceUrl?.[0] }), A?.imdbReferenceUrl && (o = { ...o, imdb_reference_url: A?.imdbReferenceUrl?.[0] }), A?.leadershipReferenceUrl && (o = { ...o, leadership_reference_url: A?.leadershipReferenceUrl?.[0] }), A?.mainReferenceUrl && (o = { ...o, main_reference_url: A?.mainReferenceUrl?.[0] }), A?.newsReferenceUrls && (o = { ...o, news_reference_urls: A?.newsReferenceUrls }), A?.newsType && (o = { ...o, news_type: A?.newsType }), A?.publicReferenceUrl && (o = { ...o, public_reference_url: A?.publicReferenceUrl?.[0] }), A?.publicationReferenceUrl && (o = { ...o, publication_reference_url: A?.publicationReferenceUrl?.[0] }), A?.stockReferenceUrl && (o = { ...o, stock_reference_url: A?.stockReferenceUrl?.[0] }), A?.teamReferenceUrl && (o = { ...o, team_reference_url: A?.teamReferenceUrl?.[0] }), A?.wikipediaReferenceUrl && (o = { ...o, wikipedia_reference_url: A?.wikipediaReferenceUrl?.[0] });
                        const i = { authenticity_claim: r, notability_claim: o };
                        return (0, n._O)(E, { params: i, request: e.withEndpoint(_).verifyAccount })({ actionTypes: w, context: "VERIFY_ACCOUNT" });
                    },
                QE =
                    () =>
                    (E, I, { api: e }) => {
                        const T = I(),
                            N = eE(T),
                            t = oE(T),
                            R = SE(T),
                            A = iE(T);
                        let O, C;
                        if (N) {
                            const [E] = (0, a.m3)(T, N);
                            C = E?.originalMediaFile?.fileHandle;
                        }
                        if (t) {
                            const [E] = (0, a.m3)(T, t);
                            O = E?.originalMediaFile?.fileHandle;
                        }
                        const r = { backImage: C, country: A, frontImage: O, idType: R };
                        return (0, n._O)(E, { params: r, request: e.withEndpoint(_).verifyIdDocument })({ actionTypes: v, context: "VERIFY_ID_DOCUMENT" });
                    },
                kE =
                    (E, I) =>
                    (e, T, { api: N }) => {
                        const _ = T(),
                            t = lE(_)?.newsType,
                            { followers_eligible: n, mentions_eligible: R } = j(_);
                        switch (E) {
                            case O.pl.NOTABILITY_CATEGORY_SELECT:
                                e({ payload: I, type: d });
                                break;
                            case O.pl.ACTIVIST_SUBCATEGORY:
                            case O.pl.COMPANY_SUBCATEGORY:
                            case O.pl.ENTERTAINMENT_QUALIFICATIONS:
                            case O.pl.GAMING_SUBCATEGORY:
                            case O.pl.GOVERNMENT_SUBCATEGORY:
                            case O.pl.INFLUENCER_SUBCATEGORY:
                            case O.pl.SPORTS_SUBCATEGORY:
                                "string" == typeof I && (e({ payload: O.W5[I], type: d }), O.W5[I] === O.eV.NEWS ? e({ payload: { newsType: I }, type: b }) : e({ payload: I, type: G }));
                                break;
                            case O.pl.NEWS_QUALIFICATIONS:
                                e({ payload: { newsType: I }, type: b });
                                break;
                            case O.pl.ACTIVIST_QUALIFICATIONS:
                                e({ payload: O.Y_.ACTIVIST, type: G });
                                break;
                            case O.pl.ACTIVIST_GOOGLE_TRENDS:
                            case O.pl.ACTIVIST_LEADERSHIP:
                            case O.pl.ACTIVIST_NEWS:
                            case O.pl.ACTIVIST_WIKIPEDIA:
                            case O.pl.COMPANY_GOOGLE_TRENDS:
                            case O.pl.COMPANY_INDIVIDUAL_LEADERSHIP:
                            case O.pl.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
                            case O.pl.COMPANY_STOCK_EXCHANGE:
                            case O.pl.COMPANY_WIKIPEDIA:
                            case O.pl.CONTENT_CREATOR_GOOGLE_TRENDS:
                            case O.pl.CONTENT_CREATOR_NEWS:
                            case O.pl.CONTENT_CREATOR_WIKIPEDIA:
                            case O.pl.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
                            case O.pl.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
                            case O.pl.ENTERTAINMENT_COMPANY_WIKIPEDIA:
                            case O.pl.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
                            case O.pl.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
                            case O.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
                            case O.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
                            case O.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
                            case O.pl.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
                            case O.pl.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
                            case O.pl.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
                            case O.pl.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
                            case O.pl.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
                            case O.pl.INFLUENCER_GOOGLE_TRENDS:
                            case O.pl.INFLUENCER_NEWS:
                            case O.pl.INFLUENCER_WIKIPEDIA:
                            case O.pl.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
                            case O.pl.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
                            case O.pl.SPORTS_ENTITY_GOOGLE_TRENDS:
                            case O.pl.SPORTS_ENTITY_STOCK_REFERENCE:
                            case O.pl.SPORTS_ENTITY_WEBSITE:
                            case O.pl.SPORTS_ENTITY_WIKIPEDIA:
                                e({ payload: I, type: b });
                                break;
                            case O.pl.COMPANY_NEWS_REFERENCE:
                            case O.pl.SPORTS_ENTITY_NEWS_REFERENCE:
                                e(n ? { payload: I, type: b } : { payload: I, type: i });
                                break;
                            case O.pl.CREATOR_PROFILE:
                            case O.pl.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                                e({ payload: I, type: o });
                                break;
                            case O.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
                            case O.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                                e(n || R ? { payload: I, type: b } : { payload: I, type: i });
                                break;
                            case O.pl.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
                            case O.pl.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
                            case O.pl.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                                e({ payload: I, type: c });
                                break;
                            case O.pl.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                            case O.pl.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
                            case O.pl.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
                            case O.pl.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
                            case O.pl.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
                            case O.pl.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
                            case O.pl.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                                e({ payload: { ...I, newsType: t }, type: b });
                                break;
                            case O.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                                e(n || R ? { payload: { ...I, newsType: t }, type: b } : { payload: { ...I }, type: r });
                                break;
                            case O.pl.AUTHENTICITY_TYPE_SELECT:
                                e({ payload: I, type: p });
                                break;
                            case O.pl.EMAIL_VERIFICATION:
                                e({ payload: { email: [I] }, type: u });
                                break;
                            case O.pl.SITE_VERIFICATION:
                                e({ payload: I, type: u });
                                break;
                            default:
                                return;
                        }
                    },
                jE = (E) => {
                    const [I = Z] = E.slice(-2),
                        e = [Z, ...E.slice(1, -1)];
                    return I === O.pl.INTAKE_LOADING ? jE(e) : { previousStep: I, remainingSteps: e };
                };
        },
        316325: (E, I, e) => {
            "use strict";
            e.d(I, { CT: () => D, DY: () => c, GG: () => a, L_: () => t, M_: () => U, QP: () => C, R2: () => S, S: () => n, Tq: () => T, W5: () => s, WS: () => R, Y_: () => O, Yp: () => i, aF: () => o, an: () => L, eV: () => A, fX: () => N, nS: () => r, pY: () => _, pl: () => l });
            const T = Object.freeze({ IN_COMPLIANCE: "in_compliance", OUT_OF_COMPLIANCE: "out_of_compliance" }),
                N = Object.freeze({ PROFILE_COMPLETION: "profile_completion", ACCOUNT_SECURITY: "account_security" }),
                _ = Object.freeze({ DISABLED: "disabled", INTAKE_PROGRESS: "intake_progress", LOCKED: "locked", NEW_ACCOUNT: "new_account", NOT_ELIGIBLE: "not_eligible", NOT_STARTED: "not_started", VERIFICATION_DENIED: "verification_denied", VERIFICATION_PENDING: "verification_pending", VERIFIED: "verified" }),
                t = Object.freeze({ IDENTITY_DOCUMENT: "identity_document", EMAIL: "email", WEBSITE: "website" }),
                n = { WEBSITE: "siteUrl" },
                R = Object.freeze({ CONCLUSIVE: "conclusive", INCONCLUSIVE: "inconclusive", NOT_STARTED: "not_started", PENDING: "pending" }),
                A = Object.freeze({ ACTIVISM: "activism", COMPANY: "brand_company_organization", ENTERTAINMENT: "entertainment", GAMING: "gaming", GOVERNMENT: "government", INFLUENCER_OTHER: "influencer_other", NEWS: "news", SPORTS: "sports" }),
                a = { ARTICLES: "articleReferenceUrls", AUTHOR: "authorReferenceUrl", GOOGLE: "googleTrendsReferenceUrl", HASHTAG: "hashtagReferenceUrl", IMDB: "imdbReferenceUrl", LEADERSHIP: "leadershipReferenceUrl", MAIN: "mainReferenceUrl", NEWS: "newsReferenceUrls", PUBLIC: "publicReferenceUrl", PUBLICATION: "publicationReferenceUrl", STOCK: "stockReferenceUrl", TEAM: "teamReferenceUrl", WIKIPEDIA: "wikipediaReferenceUrl" },
                O = Object.freeze({ ACTIVIST: "activist" }),
                C = Object.freeze({ COMPANY: "company", EXECUTIVE: "executive" }),
                r = Object.freeze({ ENTERTAINMENT_COMPANY: "entertainment_company", ENTERTAINMENT_INDIVIDUAL: "entertainment_individual", PRODUCTION: "production" }),
                o = Object.freeze({ CANDIDATE: "candidate", OFFICE: "office", OFFICIAL: "official" }),
                i = Object.freeze({ CONTENT_CREATOR: "content_creator", INFLUENTIAL_INDIVIDUAL: "influential_individual" }),
                c = Object.freeze({ FREELANCER: "freelancer", JOURNALIST: "journalist", ORGANIZATION: "organization" }),
                S = Object.freeze({ SPORTS_INDIVIDUAL: "sports_individual", SPORTS_ENTITY: "sports_entity", GAMING_INDIVIDUAL: "gaming_individual" }),
                L = Object.freeze({ ...O, ...C, ...r, ...o, ...i, ...c, ...S }),
                s = Object.freeze({ [O.ACTIVIST]: A.ACTIVISM, [C.COMPANY]: A.COMPANY, [C.EXECUTIVE]: A.COMPANY, [r.ENTERTAINMENT_COMPANY]: A.ENTERTAINMENT, [r.ENTERTAINMENT_INDIVIDUAL]: A.ENTERTAINMENT, [r.PRODUCTION]: A.ENTERTAINMENT, [o.CANDIDATE]: A.GOVERNMENT, [o.OFFICE]: A.GOVERNMENT, [o.OFFICIAL]: A.GOVERNMENT, [i.CONTENT_CREATOR]: A.INFLUENCER_OTHER, [i.INFLUENTIAL_INDIVIDUAL]: A.INFLUENCER_OTHER, [c.FREELANCER]: A.NEWS, [c.JOURNALIST]: A.NEWS, [c.ORGANIZATION]: A.NEWS, [S.SPORTS_INDIVIDUAL]: A.SPORTS, [S.SPORTS_ENTITY]: A.SPORTS, [S.GAMING_INDIVIDUAL]: A.SPORTS }),
                U = Object.freeze({ LANDING_PAGE: "landing_page", NOTABILITY_CATEGORY: "notability_category_select", NOTABILITY_SUBCATEGORY: "notability_subtype_select", NOTABILITY_METHOD: "notability_qualifications_select", NOTABILITY_INPUT: "notability_qualifications_input", AUTHENTICITY_TYPE: "authenticity_type_select", ADD_EMAIL: "authenticity_add_email", ADD_WEBSITE: "authenticity_add_website", ID_UPLOAD: "authenticity_id_upload", REVIEW_SUBMIT: "review_submit", THANK_YOU: "thank_you" }),
                l = Object.freeze({
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
                    [l.LANDING_PAGE]: { next: l.NOTABILITY_CATEGORY_SELECT, scribeComponent: U.LANDING_PAGE },
                    [l.NOTABILITY_CATEGORY_SELECT]: { next: null, scribeComponent: U.NOTABILITY_CATEGORY },
                    [l.ACTIVIST_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.ACTIVIST_GOOGLE_TRENDS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ACTIVIST_LEADERSHIP]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ACTIVIST_NEWS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ACTIVIST_QUALIFICATIONS_INELIGIBLE]: { next: null, scribeComponent: null },
                    [l.ACTIVIST_SUBCATEGORY]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.ACTIVIST_WIKIPEDIA]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_SUBCATEGORY]: { next: l.COMPANY_NOTABILITY_METHOD, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.COMPANY_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.COMPANY_GOOGLE_TRENDS]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_WIKIPEDIA]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_STOCK_EXCHANGE]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_NEWS_REFERENCE]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: l.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [l.COMPANY_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.COMPANY_INDIVIDUAL_LEADERSHIP]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.COMPANY_INDIVIDUAL_NEWS_REFERENCE]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.CREATOR_PROFILE]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null },
                    [l.CONTENT_CREATOR_GOOGLE_TRENDS]: { next: l.CREATOR_PROFILE, scribeComponent: U.NOTABILITY_INPUT },
                    [l.CONTENT_CREATOR_NEWS]: { next: l.CREATOR_PROFILE, scribeComponent: U.NOTABILITY_INPUT },
                    [l.CONTENT_CREATOR_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.CONTENT_CREATOR_WIKIPEDIA]: { next: l.CREATOR_PROFILE, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_COMPANY_NEWS_REFERENCE]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.ENTERTAINMENT_COMPANY_STOCK_REFERENCE]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_COMPANY_WIKIPEDIA]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_INDIVIDUAL_IMDB_URL]: { next: l.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS]: { next: l.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.ENTERTAINMENT_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM]: { next: l.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, scribeComponent: null },
                    [l.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS]: { next: l.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM]: { next: l.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [l.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS]: { next: l.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_OFFICE_PROFILE_CONFIRM]: { next: l.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [l.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM]: { next: l.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, scribeComponent: null },
                    [l.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS]: { next: l.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM]: { next: l.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, scribeComponent: null },
                    [l.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GOVERNMENT_SUBCATEGORY]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.INFLUENCER_GOOGLE_TRENDS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.INFLUENCER_NEWS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.INFLUENCER_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.INFLUENCER_QUALIFICATIONS_INELIGIBLE]: { next: null, scribeComponent: null },
                    [l.INFLUENCER_SUBCATEGORY]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.INFLUENCER_WIKIPEDIA]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_STOCK_REFERENCE_URL]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: l.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_JOURNALIST_CRITERIA_CONFIRMATION]: { next: l.NEWS_JOURNALIST_QUALIFICATIONS, scribeComponent: null },
                    [l.NEWS_JOURNALIST_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.NEWS_NOTABILITY_CRITERIA_CONFIRMATION]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: null },
                    [l.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION]: { next: l.NEWS_ORGANIZATION_QUALIFICATIONS, scribeComponent: null },
                    [l.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION]: { next: l.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, scribeComponent: null },
                    [l.NEWS_ORGANIZATION_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.NEWS_QUALIFICATIONS]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GAMING_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: l.GAMING_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [l.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.GAMING_INDIVIDUAL_INELIGIBLE]: { next: null, scribeComponent: null },
                    [l.GAMING_SUBCATEGORY]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.SPORTS_ENTITY_GOOGLE_TRENDS]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_ENTITY_NEWS_REFERENCE]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_ENTITY_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.SPORTS_ENTITY_STOCK_REFERENCE]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_ENTITY_WEBSITE]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_ENTITY_WIKIPEDIA]: { next: null, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS]: { next: l.AUTHENTICITY_TYPE_SELECT, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_INDIVIDUAL_NOTABILITY_METHOD]: { next: null, scribeComponent: U.NOTABILITY_METHOD },
                    [l.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM]: { next: l.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, scribeComponent: null },
                    [l.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL]: { next: l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: U.NOTABILITY_INPUT },
                    [l.SPORTS_SUBCATEGORY]: { next: null, scribeComponent: U.NOTABILITY_SUBCATEGORY },
                    [l.WEBSITE_REFERENCE_CONFIRM_AUTOFILL]: { next: null, scribeComponent: U.ADD_WEBSITE },
                    [l.WEBSITE_REFERENCE_CONFIRM_PROCEED]: { next: l.REVIEW_SUBMIT, scribeComponent: U.ADD_WEBSITE },
                    [l.AUTHENTICITY_TYPE_SELECT]: { next: null, scribeComponent: U.AUTHENTICITY_TYPE },
                    [l.INTAKE_TYPE_SELECT]: { next: l.INTAKE_UPLOAD, scribeComponent: null },
                    [l.ID_COUNTRY_SELECT]: { next: l.INTAKE_TYPE_SELECT, scribeComponent: null },
                    [l.ID_TYPE_SELECT]: { next: l.INTAKE_TYPE_SELECT, scribeComponent: null },
                    [l.INTAKE_UPLOAD]: { next: l.INTAKE_LOADING, scribeComponent: U.ID_UPLOAD },
                    [l.INTAKE_LOADING]: { next: l.REVIEW_SUBMIT, scribeComponent: U.ID_UPLOAD },
                    [l.EMAIL_VERIFICATION]: { next: l.REVIEW_SUBMIT, scribeComponent: U.ADD_EMAIL },
                    [l.SITE_VERIFICATION]: { next: l.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null },
                    [l.REVIEW_SUBMIT]: { next: l.THANK_YOU, scribeComponent: U.REVIEW_SUBMIT },
                    [l.THANK_YOU]: { next: null, scribeComponent: U.THANK_YOU },
                    [l.TEST_INPUT]: { next: l.TEST_RADIO, scribeComponent: null },
                    [l.TEST_PIVOT]: { next: l.THANK_YOU, scribeComponent: null },
                    [l.TEST_RADIO]: { next: l.THANK_YOU, scribeComponent: null },
                });
        },
        879113: (E, I, e) => {
            "use strict";
            e.d(I, { Z: () => r });
            var T = e(202784),
                N = e(476984),
                _ = e.n(N),
                t = e(143778),
                n = e(750410),
                R = e(682830);
            const A = "failed",
                a = "loaded",
                O = "loading",
                C = "none";
            class r extends T.Component {
                shouldComponentUpdate(E) {
                    const I = E.fetchStatus === a,
                        e = this.props.fetchStatus !== E.fetchStatus;
                    return !(!I && !e) || !_()(E, this.props);
                }
                render() {
                    const { "aria-label": E, color: I, failureMessage: e, fetchStatus: N, icon: _, loadingMessage: t, onRequestRetry: a, render: r, renderFailure: o, retryMessage: i, retryable: c } = this.props;
                    switch (N) {
                        case A:
                            return c ? T.createElement(n.Z, { icon: _, onRequestRetry: a, retryMessage: i }) : e ? T.createElement(R.m, { failureMessage: e }) : o();
                        case O:
                            return T.createElement(R.J, { "aria-label": E, color: I, loadingMessage: t });
                        case C:
                            return null;
                        default:
                            return r();
                    }
                }
            }
            r.defaultProps = { renderFailure: t.Z, retryable: !0 };
        },
        424869: (E) => {
            E.exports = function E(I) {
                return (
                    Object.freeze(I),
                    Object.getOwnPropertyNames(I).forEach(function (e) {
                        !I.hasOwnProperty(e) || null === I[e] || ("object" != typeof I[e] && "function" != typeof I[e]) || Object.isFrozen(I[e]) || E(I[e]);
                    }),
                    I
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.BadgeViolationsNotification~bundle.SettingsRevamp.a5cdc23a.js.map
