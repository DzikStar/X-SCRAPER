(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"],
    {
        164918: (e) => {
            e.exports = { queryId: "QEMLEzEMzoPNbeauKCCLbg", operationName: "SetDefault", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        795357: (e) => {
            e.exports = { queryId: "VaaLGwK5KNLoc7wsOmp4uw", operationName: "DeletePaymentMethod", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        814142: (e) => {
            e.exports = { queryId: "mPF_G9okpbZuLcD6mN8K9g", operationName: "PaymentMethods", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        903860: (e) => {
            e.exports = { queryId: "a8KxGfFQAmm3WxqemuqSRA", operationName: "AdAccounts", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        859096: (e) => {
            e.exports = { queryId: "1LYVUabJBYkPlUAWRabB3g", operationName: "AudienceEstimate", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        356886: (e) => {
            e.exports = { queryId: "hiAXpFX4zFb6vOvGctGYyQ", operationName: "BoostAudienceEstimate", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        891742: (e) => {
            e.exports = { queryId: "mbK3oSQotwcJXyQIBE3uYw", operationName: "Budgets", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        39022: (e) => {
            e.exports = { queryId: "R1h43jnAl2bsDoUkgZb7NQ", operationName: "Coupons", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        720584: (e) => {
            e.exports = { queryId: "oDSoVgHhJxnd5IkckgPZdg", operationName: "CreateQuickPromotion", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        127498: (e) => {
            e.exports = { queryId: "LtpCXh66W-uXh7u7XSRA8Q", operationName: "QuickPromoteEligibility", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        959909: (e) => {
            e.exports = { queryId: "SOyGmNGaEXcvk15s5bqDrA", operationName: "EnrollCoupon", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        746633: (e) => {
            e.exports = { queryId: "z7Ij1OnFDsb1Is08hkBDKw", operationName: "TargetingCatalogSearch", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        321099: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => C });
            o(136728);
            var a = o(401388),
                r = o(414742),
                n = o(164918),
                i = o.n(n),
                c = o(795357),
                u = o.n(c),
                s = o(814142),
                l = o.n(s),
                d = o(903860),
                g = o.n(d),
                p = o(859096),
                _ = o.n(p),
                m = o(356886),
                y = o.n(m),
                b = o(891742),
                h = o.n(b),
                E = o(39022),
                A = o.n(E),
                f = o(720584),
                k = o.n(f),
                P = o(127498),
                S = o.n(P),
                v = o(959909),
                w = o.n(v);
            const C = ({ apiClient: e, featureSwitches: t }) => ({
                    getQuickPromoteEligibility: (t) =>
                        e.graphQL(S(), t).then((e) => {
                            const t = e.tweet_result_by_rest_id?.result;
                            return "Tweet" === t?.__typename ? t.quick_promote_eligibility?.eligibility : "TweetWithVisibilityResults" === t?.__typename ? t.tweet.quick_promote_eligibility?.eligibility : void 0;
                        }),
                    getCoupons: (t) =>
                        e.graphQL(A(), t).then((e) => {
                            const t = e.viewer?.user_results?.result,
                                o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0,
                                a = (function (e) {
                                    const t = e.viewer?.user_results?.result,
                                        o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0;
                                    let a;
                                    if (o?.eligible_coupon_v2)
                                        switch (o.eligible_coupon_v2.__typename) {
                                            case "QuickPromoteConditionalCoupon":
                                                a = { type: "ConditionalCoupon", currency_code: o.eligible_coupon_v2.currency_code, credit_amount: o.eligible_coupon_v2.credit_amount, spend_amount: o.eligible_coupon_v2.spend_amount };
                                                break;
                                            case "QuickPromoteStandardCoupon":
                                                a = { type: "StandardCoupon", currency_code: o.eligible_coupon_v2.currency_code, total_amount: o.eligible_coupon_v2.total_amount };
                                                break;
                                            default:
                                                o.eligible_coupon_v2.__typename;
                                        }
                                    else o?.eligible_coupon?.total_amount && o?.eligible_coupon.currency_code && (a = { type: "StandardCoupon", currency_code: o.eligible_coupon.currency_code, total_amount: o.eligible_coupon.total_amount });
                                    return a;
                                })(e),
                                r = (function (e) {
                                    const t = e.viewer?.user_results?.result,
                                        o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0,
                                        a = o?.pending_coupons && o?.pending_coupons[0];
                                    return a && { type: "ConditionalCoupon", credit_amount: a.credit_amount, spend_amount: a.spend_amount, currency_code: a.currency_code };
                                })(e);
                            a?.total_amount && (a.total_amount = a.total_amount / 1e6), a?.credit_amount && (a.credit_amount = a.credit_amount / 1e6), a?.spend_amount && (a.spend_amount = a.spend_amount / 1e6), r?.credit_amount && (r.credit_amount = r.credit_amount / 1e6), r?.spend_amount && (r.spend_amount = r.spend_amount / 1e6), o?.existing_balance && (o.existing_balance = o.existing_balance.map(({ currency_code: e, total_amount: t }) => ({ currency_code: e, total_amount: t ? t / 1e6 : 0 })));
                            const n = o?.experiment_end_timestamp ? new Date(o.experiment_end_timestamp) : void 0;
                            return o && { eligible_coupon: a, pending_coupon: r, existing_balance: o.existing_balance, eligible_coupon_experiment: o.eligible_coupon_experiment, experiment_end_date: n };
                        }),
                    getBudgets: (t) =>
                        e.graphQL(h(), t).then((e) => {
                            const t = e.viewer?.quick_promote_budget_by_country;
                            return t ? { budgets: t.values.map((e) => parseInt(e, 10) / 1e6), currencyCode: t.currency_code, defaultBudget: parseInt(t.default_budget, 10) / 1e6 } : q;
                        }),
                    getAudienceEstimate: (t) =>
                        e.graphQL(_(), t).then((e) => {
                            const t = e.quick_promote_audience_estimation_v2?.impressions;
                            return t && t.low && t.high ? { estimatedImpressions: { low: parseInt(t.low, 10), high: parseInt(t.high, 10) } } : { estimatedImpressions: void 0 };
                        }),
                    getBoostAudienceEstimate: (t) =>
                        e.graphQL(y(), t).then((e) => {
                            const t = e.quick_promote_audience_estimation_v3?.impressions;
                            return t && t.low && t.high ? { estimatedImpressions: { low: parseInt(t.low, 10), high: parseInt(t.high, 10) } } : { estimatedImpressions: void 0 };
                        }),
                    getPaymentMethods: (t) =>
                        e.graphQL(l(), t).then((e) => {
                            const t = e.payment_methods,
                                o = ["Active", "New", "Invalid"],
                                r = [];
                            return (
                                t?.forEach((e) => {
                                    "CreditCard" === e.payment_method_type && !(0, a.Z)(e.details) && e.details.card_status && o.includes(e.details.card_status) && r.push({ id: e.id, cardStatus: e.details.is_expired ? "Expired" : "Active" === e.details.card_status ? "Active" : "Invalid", lastFourDigits: e.details.last_four_digits, fullName: e.details.full_name, isDefault: e.is_default, imgSrcUrl: e.details.CreditCardImgSrcUrl });
                                }),
                                r
                            );
                        }),
                    deletePaymentMethod: (t) => e.graphQL(u(), t),
                    setDefaultPaymentMethod: (t) => e.graphQL(i(), t),
                    createPromotion: (t) => e.graphQL(k(), t),
                    enrollCoupon: (t) =>
                        e.graphQL(w(), t).then((e) => {
                            const t = e.quick_promote_enroll_coupons;
                            return t?.available_balance && (t.available_balance = t.available_balance.map(({ currency_code: e, total_amount: t }) => ({ currency_code: e, total_amount: t ? t / 1e6 : 0 }))), t?.enrolled_coupon && t.enrolled_coupon.total_amount && (t.enrolled_coupon.total_amount = t.enrolled_coupon.total_amount / 1e6), t?.enrolled_coupon_v2 && t.enrolled_coupon_v2.spend_amount && (t.enrolled_coupon_v2.spend_amount = t.enrolled_coupon_v2.spend_amount / 1e6), t?.enrolled_coupon_v2 && t.enrolled_coupon_v2.credit_amount && (t.enrolled_coupon_v2.credit_amount = t.enrolled_coupon_v2.credit_amount / 1e6), e;
                        }),
                    getAdAccounts: (t) =>
                        e.graphQL(
                            g(),
                            t,
                            (0, r.kj)(() => !1, "GQL AdAccounts: Failed to fetch ad accounts"),
                        ),
                }),
                q = { budgets: [50, 100, 250, 500, 1e3, 2500, 5e3], currencyCode: "USD", defaultBudget: 100 };
        },
        441408: (e, t, o) => {
            "use strict";
            o.d(t, { iA: () => i, uB: () => r, zk: () => n });
            var a = o(774717);
            const r = "quick-promote",
                n = (e, t, o = "promise") => a.lN(`${r}:${o}:${e}`, t),
                i = (e, t, o) => {
                    a.IM(`${r}:promotion:${e}:${t}:value`, { duration_ms: o, event_value: o });
                };
        },
        852657: (e, t, o) => {
            "use strict";
            o.d(t, { $L: () => d.$L, A_: () => le, Co: () => ve, DA: () => qe, DY: () => J, Dg: () => ie, E6: () => d.E6, Ek: () => d.Ek, Ik: () => Se, Jk: () => d.Jk, Ku: () => we, LK: () => d.LK, L_: () => W, P6: () => oe, PU: () => Ae, QE: () => j, Uc: () => ee, Um: () => Ee, WD: () => d.WD, WK: () => $, WS: () => d.WS, XJ: () => Y, Yv: () => ne, _B: () => fe, au: () => ae, b2: () => ge, br: () => d.br, ch: () => de, e3: () => X, fN: () => d.fN, g_: () => me, gp: () => d.gp, hI: () => ce, hs: () => te, k6: () => re, kb: () => d.kb, kn: () => ke, l$: () => se, mS: () => Ce, ni: () => pe, oA: () => he, oE: () => d.oE, oo: () => H, pY: () => be, p_: () => _e, qA: () => Pe, qL: () => d.qL, rS: () => ye, rb: () => Te, sN: () => d.sN, yW: () => d.c7, zu: () => ue });
            var a = o(744531),
                r = o(401388),
                n = o(321099),
                i = o(499627),
                c = o(917799),
                u = o(312771),
                s = o(390387),
                l = o(315032),
                d = o(813604);
            const g = { account: { adsAccount: null, accountDataFetchStatus: u.ZP.NONE, fundingInstruments: [], selectedFundingInstrument: null, campaigns: null }, targeting: { initialTargetedLocationsFetchStatus: u.ZP.NONE, targetedLocations: [], locationQuery: "", ageBucket: l.s.AGE_OVER_18, gender: l.Y0.Any, keywords: [], contextualKeywords: [] }, budget: { errorMessage: null, dailyBudget: 100, durationDays: 5, availableBudgets: null, availableBudgetsFetchStatus: u.ZP.NONE, currency: null }, eligibility: {}, coupons: void 0, couponsFetchStatus: u.ZP.NONE, enrollCouponStatus: u.ZP.NONE, enrollCouponErrorCode: null, firstLoad: !1, paymentMethods: [], selectedPaymentMethod: null, paymentMethodsFetchStatus: u.ZP.NONE, promoteStatus: u.ZP.NONE, promoteErrorCode: null, objective: l.CH.Engagements },
                p = "quickPromote",
                _ = "rweb/quickPromote/reset",
                m = "rweb/quickPromote/account/set",
                y = "rweb/quickPromote/account/setAdsAccount",
                b = "rweb/quickPromote/account/setFundingInstruments",
                h = "rweb/quickPromote/account/setCampaigns",
                E = "rweb/quickPromote/account/setSelectedFundingInstrument",
                A = "rweb/quickPromote/account/setAccountDataFetchStatus",
                f = "rweb/quickPromote/targeting/set",
                k = "rweb/quickPromote/targeting/setLocationQuery",
                P = "rweb/quickPromote/targeting/setInitialTargetedLocationsFetchStatus",
                S = "rweb/quickPromote/targeting/setTargetedLocations",
                v = "rweb/quickPromote/targeting/setTargetedAgeBucket",
                w = "rweb/quickPromote/targeting/setTargetedGender",
                C = "rweb/quickPromote/targeting/setTargetedKeywords",
                q = "rweb/quickPromote/targeting/setTargetedContextualKeywords",
                T = "rweb/quickPromote/budget/set",
                I = "rweb/quickPromote/budget/setAvailableBudgetsFetchStatus",
                L = "rweb/quickPromote/budget/setAvailableBudgets",
                O = "rweb/quickPromote/budget/setDailyBudget",
                D = "rweb/quickPromote/budget/setBudgetDuration",
                N = "rweb/quickPromote/budget/setBudgetErrorMessage",
                G = "rweb/quickPromote/budget/setObjective",
                B = "rweb/quickPromote/setCouponsFetchStatus",
                M = "rweb/quickPromote/setCoupons",
                U = "rweb/quickPromote/setEnrollCouponStatus",
                R = "rweb/quickPromote/setEnrollCouponErrorCode",
                F = "rweb/quickPromote/eligibility",
                Z = "rweb/quickPromote/setPromoteFetchStatus",
                x = "rweb/quickPromote/setPromoteErrorCode",
                Q = "rweb/quickPromote/paymentMethods",
                z = "rweb/quickPromote/setPaymentMethodsFetchStatus",
                V = Object.freeze({ REQUEST: "rweb/quickPromote/eligibilityRequest", SUCCESS: "rweb/quickPromote/eligibilitySuccess", FAILURE: "rweb/quickPromote/eligibilityFailure" }),
                K = Object.freeze({ REQUEST: "rweb/quickPromote/promoteRequest", SUCCESS: "rweb/quickPromote/promoteSuccess", FAILURE: "rweb/quickPromote/promoteFailure" }),
                j = (e) => {
                    const t = e.quickPromote.account?.adsAccount?.country_code || (0, s.GG)(e) || "US";
                    return "XX" === t ? "US" : t.toUpperCase();
                },
                W = (e) => {
                    const {
                            targeting: {
                                targetedLocations: [{ targeting_value: t }],
                                ...o
                            },
                            budget: { currency: r, dailyBudget: n },
                            objective: i,
                        } = e.quickPromote,
                        c = (0, a.Z)(o, ["initialTargetedLocationsFetchStatus", "locationQuery"]);
                    return JSON.stringify({ ...c, location: t, dailyBudget: n, currency: r, objective: i });
                },
                $ = (e) => (t) => {
                    const {
                        targeting: {
                            targetedLocations: [{ targeting_value: o }],
                            keywords: a,
                            initialTargetedLocationsFetchStatus: r,
                            locationQuery: n,
                            contextualKeywords: i,
                            ...c
                        },
                        budget: { currency: u },
                        objective: s,
                    } = t.quickPromote;
                    return JSON.stringify({ ...c, location: o, dailyBudget: e, currency: u, objective: s });
                },
                Y = (e, t) => e.quickPromote.eligibility[t]?.eligibility,
                H = (e, t) => e.quickPromote.eligibility[t]?.eligibilityFetchStatus || u.ZP.NONE,
                J = (e) => (e.quickPromote.selectedPaymentMethod ? e.quickPromote.selectedPaymentMethod : (0, r.Z)(e.quickPromote.paymentMethods) ? null : e.quickPromote.paymentMethods.find((e) => e.isDefault) || e.quickPromote.paymentMethods.find((e) => "Active" === e.cardStatus) || null),
                X = (e) => ({ type: f, payload: { targeting: e } }),
                ee = (e) => ({ type: T, payload: { budget: e } }),
                te = (e) => ({ type: y, payload: { adsAccount: e } }),
                oe = (e) => ({ type: h, payload: { campaigns: e } }),
                ae = (e) => ({ type: b, payload: { fundingInstruments: e } }),
                re = (e) => ({ type: E, payload: { selectedFundingInstrument: e } }),
                ne = (e) => ({ type: A, payload: { fetchStatus: e } }),
                ie = (e) => ({ type: P, payload: { fetchStatus: e } }),
                ce = (e) => ({ type: S, payload: { targetedLocations: e } }),
                ue = (e) => ({ type: k, payload: { locationQuery: e } }),
                se = (e) => ({ type: v, payload: { ageBucket: e } }),
                le = (e) => ({ type: w, payload: { gender: e } }),
                de = (e) => ({ type: q, payload: { contextualKeywords: e } }),
                ge = (e) => ({ type: I, payload: { fetchStatus: e } }),
                pe = (e, t) => ({ type: L, payload: { availableBudgets: e, currency: t } }),
                _e = (e) => ({ type: O, payload: { dailyBudget: e } }),
                me = (e) => ({ type: D, payload: { durationDays: e } }),
                ye = (e) => ({ type: N, payload: { errorMessage: e } }),
                be =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, c._O)(t, { request: a.withEndpoint(n.Z).getQuickPromoteEligibility, params: e })({ actionTypes: V, context: "FETCH_ELIGIBILITY", meta: e });
            function he() {
                return { type: _ };
            }
            const Ee = (e, t) => ({ type: F, payload: { eligibility: t, tweetId: e } }),
                Ae = (e) => ({ type: B, payload: { fetchStatus: e } }),
                fe = (e) => ({ type: M, payload: { coupons: e } }),
                ke = (e) => ({ type: U, payload: { enrollCouponStatus: e } }),
                Pe = (e) => ({ type: R, payload: { enrollCouponErrorCode: e } }),
                Se = (e) => ({ type: Z, payload: { promoteFetchStatus: e } }),
                ve = (e) => ({ type: x, payload: { promoteErrorCode: e } }),
                we =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, c._O)(t, { request: a.withEndpoint(n.Z).createPromotion, params: e })({ actionTypes: K, context: "FETCH_PROMOTE" }),
                Ce = (e) => ({ type: G, payload: { objective: e } }),
                qe = (e) => ({ type: Q, payload: { paymentMethods: e } }),
                Te = (e) => ({ type: z, payload: { fetchStatus: e } });
            i.Z.register({
                [p]: (e = g, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case _:
                            return g;
                        case m:
                            if (t.payload) {
                                const { account: o } = t.payload;
                                return { ...e, account: { ...e.account, ...o } };
                            }
                            break;
                        case f:
                            if (t.payload) {
                                const { targeting: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, ...o } };
                            }
                            break;
                        case T:
                            if (t.payload) {
                                const { budget: o } = t.payload;
                                return { ...e, budget: { ...e.budget, ...o } };
                            }
                            break;
                        case y:
                            if (t.payload) {
                                const { adsAccount: o } = t.payload;
                                return { ...e, account: { ...e.account, adsAccount: o } };
                            }
                            break;
                        case h:
                            if (t.payload) {
                                const { campaigns: o } = t.payload;
                                return { ...e, account: { ...e.account, campaigns: o } };
                            }
                            break;
                        case b:
                            if (t.payload) {
                                const { fundingInstruments: o } = t.payload;
                                return { ...e, account: { ...e.account, fundingInstruments: o } };
                            }
                            break;
                        case E:
                            if (t.payload) {
                                const { selectedFundingInstrument: o } = t.payload;
                                return { ...e, account: { ...e.account, selectedFundingInstrument: o } };
                            }
                            break;
                        case A:
                            if (t.payload) {
                                const { fetchStatus: o } = t.payload;
                                return { ...e, account: { ...e.account, accountDataFetchStatus: o } };
                            }
                            break;
                        case P:
                            if (t.payload) {
                                const { fetchStatus: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, initialTargetedLocationsFetchStatus: o } };
                            }
                            break;
                        case k:
                            if (t.payload) {
                                const { locationQuery: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, locationQuery: o } };
                            }
                            break;
                        case S:
                            if (t.payload) {
                                const { targetedLocations: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, targetedLocations: o } };
                            }
                            break;
                        case v:
                            if (t.payload) {
                                const { ageBucket: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, ageBucket: o } };
                            }
                            break;
                        case w:
                            if (t.payload) {
                                const { gender: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, gender: o } };
                            }
                            break;
                        case C:
                            if (t.payload) {
                                const { keywords: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, keywords: o } };
                            }
                            break;
                        case q:
                            if (t.payload) {
                                const { contextualKeywords: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, contextualKeywords: o } };
                            }
                            break;
                        case I:
                            if (t.payload) {
                                const { fetchStatus: o } = t.payload;
                                return { ...e, budget: { ...e.budget, availableBudgetsFetchStatus: o } };
                            }
                            break;
                        case L:
                            if (t.payload) {
                                const { availableBudgets: o, currency: a } = t.payload;
                                return { ...e, budget: { ...e.budget, availableBudgets: o, currency: a } };
                            }
                            break;
                        case O:
                            if (t.payload) {
                                const { dailyBudget: o } = t.payload;
                                return { ...e, budget: { ...e.budget, dailyBudget: o } };
                            }
                            break;
                        case D:
                            if (t.payload) {
                                const { durationDays: o } = t.payload;
                                return { ...e, budget: { ...e.budget, durationDays: o } };
                            }
                            break;
                        case N:
                            if (t.payload) {
                                const { errorMessage: o } = t.payload;
                                return { ...e, budget: { ...e.budget, errorMessage: o } };
                            }
                            break;
                        case F:
                            if (t.payload) {
                                const { eligibility: o, tweetId: a } = t.payload;
                                return { ...e, eligibility: { [a]: { ...e.eligibility[a], eligibility: o } } };
                            }
                            break;
                        case V.REQUEST: {
                            const { tweetId: o } = t.meta;
                            return { ...e, eligibility: { ...e.eligibility, [o]: { eligibilityFetchStatus: u.ZP.LOADING } } };
                        }
                        case V.FAILURE: {
                            const { tweetId: o } = t.meta;
                            return { ...e, eligibility: { ...e.eligibility, [o]: { eligibilityFetchStatus: u.ZP.FAILED } } };
                        }
                        case V.SUCCESS: {
                            const { tweetId: o } = t.meta;
                            return { ...e, eligibility: { ...e.eligibility, [o]: { eligibilityFetchStatus: u.ZP.LOADED, eligibility: t.payload } } };
                        }
                        case B:
                            if (t.payload) {
                                const { fetchStatus: o } = t.payload;
                                return { ...e, couponsFetchStatus: o };
                            }
                            break;
                        case M:
                            if (t.payload) {
                                const { coupons: o } = t.payload;
                                return { ...e, coupons: o };
                            }
                            break;
                        case G:
                            if (t.payload) {
                                const { objective: o } = t.payload;
                                return { ...e, objective: o };
                            }
                            break;
                        case Z:
                            if (t.payload) {
                                const { promoteFetchStatus: o } = t.payload;
                                return { ...e, promoteStatus: o };
                            }
                            break;
                        case x:
                            if (t.payload) {
                                const { promoteErrorCode: o } = t.payload;
                                return { ...e, promoteErrorCode: o };
                            }
                            break;
                        case U:
                            if (t.payload) {
                                const { enrollCouponStatus: o } = t.payload;
                                return { ...e, enrollCouponStatus: o };
                            }
                            break;
                        case R:
                            if (t.payload) {
                                const { enrollCouponErrorCode: o } = t.payload;
                                return { ...e, enrollCouponErrorCode: o };
                            }
                            break;
                        case Q:
                            if (t.payload) {
                                const { paymentMethods: o } = t.payload;
                                return { ...e, paymentMethods: o };
                            }
                            break;
                        case z:
                            if (t.payload) {
                                const { fetchStatus: o } = t.payload;
                                return { ...e, paymentMethodsFetchStatus: o };
                            }
                            break;
                        case K.REQUEST:
                            return { ...e, promoteStatus: u.ZP.LOADING };
                        case K.FAILURE:
                            return { ...e, promoteStatus: u.ZP.FAILED };
                        case K.SUCCESS:
                            return { ...e, promoteStatus: u.ZP.LOADED };
                        default:
                            return t.type, e;
                    }
                    return e;
                },
            });
        },
        813604: (e, t, o) => {
            "use strict";
            o.d(t, { kb: () => $, gp: () => ge, br: () => le, Ek: () => ae, WS: () => ue, Lm: () => H, fN: () => se, c7: () => ce, qL: () => Y, E6: () => oe, Jk: () => te, tN: () => ee, oE: () => X, WD: () => ie, sN: () => ne, $L: () => pe, LK: () => W });
            o(136728), o(571372);
            var a = o(111677),
                r = o.n(a),
                n = o(852657);
            const i = ["ar", "da", "de", "en", "es", "fi", "fil", "fr", "id", "it", "ja", "ko", "nl", "no", "pt", "ru", "sv", "th", "tr", "zh-cn", "zh-tw"];
            function c(e) {
                const t = e.toLowerCase();
                if (i.includes(t)) return t;
                return i.find((e) => e.includes(t) || t.includes(e)) || "en";
            }
            var u = o(746633),
                s = o.n(u);
            const l = (0, o(370751).Z)(["US", "IE", "GB", "CA", "ZA", "IL", "ES", "FR", "JP", "BE", "LU", "NL", "IT", "AR", "CL", "CO", "EC", "GT", "MX", "PE", "AU", "NZ", "SG", "PA", "DK", "FI", "NO", "SE", "DE", "AT", "CH", "LI", "ID", "BR", "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AM", "AW", "AZ", "BS", "BH", "BD", "BB", "BY", "BZ", "BJ", "BM", "BT", "BQ", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CX", "CC", "KM", "CK", "CR", "CI", "HR", "CW", "CY", "CZ", "CD", "DM", "DO", "EG", "SV", "ER", "EE", "ET", "FK", "FO", "FJ", "GF", "TF", "GA", "GM", "GE", "GI", "GR", "GL", "GD", "GP", "GU", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "IQ", "IM", "JM", "JE", "JO", "KZ", "KE", "KI", "KW", "LA", "LV", "LB", "LR", "LY", "LI", "LT", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "YT", "MD", "MC", "MN", "ME", "MS", "MZ", "NA", "NR", "NP", "NC", "NI", "NE", "NG", "NU", "NF", "MP", "PK", "PW", "PS", "PG", "PY", "PH", "PN", "PL", "PT", "QA", "CG", "RE", "RO", "RW", "BL", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SB", "SO", "GS", "LK", "SR", "SJ", "SZ", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "UM", "UY", "UZ", "VU", "VA", "VE", "VI", "WF", "EH", "YE", "ZM", "ZW"]),
                d = "https://aa.twitter.com",
                g = ({ apiClient: e, featureSwitches: t }) => ({
                    getTargetableLocations: ({ countryCode: t, lang: o, locationType: a }) =>
                        e
                            .getUnversioned("/12/targeting_criteria/locations", { location_type: a, lang: c(o), country_code: t }, {}, d)
                            .then((e) => e.data)
                            .then((e) => e.filter((e) => l.has(e.country_code))),
                    getQueriedTargetableLocations: ({ countryCode: t, lang: o, locationType: a, query: r }) =>
                        e
                            .getUnversioned("/12/targeting_criteria/locations", { q: r, location_type: a, lang: c(o), country_code: t }, {}, d)
                            .then((e) => e.data)
                            .then(([e]) => [{ ...e, locations: e.locations.filter((e) => l.has(e.country_code)) }]),
                    getTargetingCatalogSearch: ({ accountId: t, query: o }) => e.graphQL(s(), { accountId: parseInt(t, 10), query: o }).then((e) => (e.targeting_catalog_search || []).map((e) => ({ api_targeting_type: e.api_targeting_type || "", api_targeting_value: e.api_targeting_value || "", audience_size: e.audience_size, label: e.label || "", rich_label: e.rich_label || "", targeting_type_label: e.targeting_type_label || "" }))),
                });
            var p = o(321099),
                _ = o(163889),
                m = o(323265);
            function y() {
                const e = m.ZP.getTwitterAppVersion(),
                    t = /TwitterAndroid/.test(m.ZP.userAgent);
                return !!(!t && e && e.major >= 8 && e.minor >= 84) || !!(t && e && e.major >= 9 && e.minor >= 13) || !e;
            }
            var b = o(441408),
                h = o(363895),
                E = o(312771),
                A = o(118717),
                f = o(499627),
                k = o(917799);
            const P = Object.freeze({});
            function S(e, t) {
                const o = { REQUEST: `${(a = "rweb/ads/typeahead")}/${(r = e)}/REQUEST`, SUCCESS: `${a}/${r}/SUCCESS`, FAILURE: `${a}/${r}/FAILURE` };
                var a, r;
                return {
                    typeaheadApiActionTypes: o,
                    getTypeaheadResults:
                        (a, r) =>
                        (n, i, { api: c }) => {
                            const u = i().ads.typeahead[e][a];
                            if (u?.result) return Promise.resolve(u.result);
                            return (0, k._O)(n, { request: t(c), params: r })({ actionTypes: o, context: `ADS_TYPEAHEAD_${e}`, meta: { query: a } });
                        },
                    reducer: (e = P, t) => {
                        if (!t) return e;
                        switch (t.type) {
                            case o.REQUEST: {
                                const { query: o } = t.meta;
                                return { ...e, [o]: { fetchStatus: E.ZP.LOADING } };
                            }
                            case o.FAILURE: {
                                const {
                                    error: o,
                                    meta: { query: a },
                                } = t;
                                return { ...e, [a]: { fetchStatus: E.ZP.FAILED, error: o } };
                            }
                            case o.SUCCESS: {
                                const {
                                    meta: { query: o },
                                    payload: a,
                                } = t;
                                return { ...e, [o]: { fetchStatus: E.ZP.LOADED, result: a } };
                            }
                            default:
                                return e;
                        }
                    },
                };
            }
            const v = "ads",
                w = S("targetingLocation", (e) => e.withEndpoint(g).getQueriedTargetableLocations),
                C = S("targetingCatalogSearch", (e) => e.withEndpoint(g).getTargetingCatalogSearch),
                q = S("forecastAudience", (e) => e.withEndpoint(p.Z).getAudienceEstimate),
                T = S("forecastAudience", (e) => e.withEndpoint(p.Z).getBoostAudienceEstimate),
                I = { targetingLocation: w.reducer, targetingCatalogSearch: C.reducer, forecastAudience: q.reducer },
                L = { typeahead: (0, A.UY)(I) },
                O = (0, A.UY)(L);
            f.Z.register({ [v]: O });
            var D = o(390387),
                N = o(601576),
                G = o(836255),
                B = o(919022),
                M = o(315032);
            const U = ["Eligible", "EligibleWithPreviousCampaign", "ReplyTweet"],
                R = ["IneligibleNotProfessional", "IneligibleNotProfessionalAndAdAccountEligible", "IneligibleNotProfessionalAndAdAccountIneligible", "IneligibleNotProfessionalAndPendingPayment"],
                F = [...U, "IneligibleCampaignPaused", "IneligibleCampaignRunning", "IneligibleBoostCampaignRunning", "IneligibleCampaignUnderReview", "IneligibleTweet"],
                Z = (e) => R.includes(e),
                x = (e) => !U.includes(e),
                Q = { NonExclusiveIo: "INSERTION_ORDER", NonExclusiveRevolvingIo: "CREDIT_LINE", AgencyCreditLine: "AGENCY_CREDIT_LINE", PartnerManaged: "PARTNER_MANAGED", CreditCard: "CREDIT_CARD" },
                z = r().i976aff4,
                V = r().ef4602ec,
                K = r().e1e912f2,
                j = "NetworkError",
                W = [E.ZP.LOADING, E.ZP.LOADED],
                $ =
                    ({ analytics: e, fromComposer: t, history: o, nextPath: a, statusId: r }) =>
                    (i, c, { api: u, featureSwitches: s }) => {
                        const l = J(c()),
                            {
                                session: { user_id: d },
                                quickPromote: {
                                    targeting: {
                                        ageBucket: g,
                                        gender: p,
                                        keywords: _,
                                        targetedLocations: [{ targeting_value: m }],
                                    },
                                    budget: { currency: y, dailyBudget: E, durationDays: A },
                                    account: { selectedFundingInstrument: f },
                                    objective: k,
                                    coupons: P,
                                },
                            } = c(),
                            S = c().quickPromote.account.adsAccount?.country_code,
                            v = c().quickPromote.account.adsAccount?.id,
                            w = f?.id;
                        if (W.includes(c().quickPromote.promoteStatus)) return Promise.resolve();
                        if (!v || !d) return (0, h.hq)(e)(h.Ur.promotionError("Unauthorized")), i((0, n.Co)("Unauthorized")), Promise.resolve();
                        if (!w) return (0, h.hq)(e)(h.Ur.promotionError("MissingFundingInstrument")), i((0, n.Co)("MissingFundingInstrument")), Promise.resolve();
                        i((0, n.Co)(null));
                        const C = Math.round(1e6 * E),
                            q = C * A,
                            T = !!P?.existing_balance.length;
                        return (
                            (0, h.hq)(e)(h.Ur.promotionCall({ dailyBudgetMicros: C, totalBudgetMicros: q, ageBucket: g, gender: p, keywords: _, location: m, objective: k, withCoupon: T })),
                            (0, b.zk)("fetchPromote", i((0, n.Ku)({ userId: d, adsAccountId: v, fundingInstrumentId: w, tweetId: r, budget: { daily_local_micros: `${C}`, total_local_micros: `${q}` }, targeting: l, objective: k })))
                                .catch(() => (t && i((0, N.fz)({ text: K })), i((0, n.Co)(j)), (0, h.hq)(e)(h.Ur.promotionError(j)), { type: "fail" }))
                                .then((t) => {
                                    if ("fail" !== t.type) {
                                        if ("QuickPromoteError" === t.quick_promote_campaign_v3?.__typename) return i((0, n.Co)(t.quick_promote_campaign_v3.error_code)), (0, h.hq)(e)(h.Ur.promotionError(t.quick_promote_campaign_v3?.error_code || "QuickPromoteError")), i(ae(d, e, !0));
                                        if ("PromotionIneligible" === t.quick_promote_campaign_v3?.response_code) (0, h.hq)(e)(h.Ur.promotionError("PromotionIneligible")), i((0, n.Co)("PromotionIneligible"));
                                        else if (t.quick_promote_campaign_v3?.response_code) {
                                            const c = t.quick_promote_campaign_v3.campaign;
                                            return (0, h.hq)(e)(h.Ur.promotionSuccess(c?.rest_id)), (0, b.iA)(S ?? "NOWHERE", y ?? "UNKNOWN-CURR", q), o.push(a), i(G.Z.setTweetPromotionRunning(r)), void i((0, n.Um)(r, "IneligibleCampaignRunning"));
                                        }
                                    }
                                })
                        );
                    },
                Y =
                    (e, t) =>
                    (e, o, { api: a }) => {
                        const { objective: r } = o().quickPromote,
                            { currency: i, dailyBudget: c } = o().quickPromote.budget,
                            u = (0, n.L_)(o()),
                            { user_id: s } = o().session,
                            l = o().quickPromote.account.adsAccount?.id,
                            {
                                ageBucket: d,
                                gender: g,
                                keywords: p,
                                targetedLocations: [{ targeting_value: _ }],
                            } = o().quickPromote.targeting;
                        if (W.includes(o().ads.typeahead.forecastAudience[u]?.fetchStatus) || !s || !d) return Promise.resolve();
                        const m = Math.round(1e6 * c),
                            y = m,
                            E = J(o());
                        return (
                            (0, h.hq)(t)(h.Ur.audienceEstimateCall({ dailyBudgetMicros: m, totalBudgetMicros: y, ageBucket: d, gender: g, keywords: p, location: _, objective: r })),
                            (0, b.zk)("forecastAudience", e(T.getTypeaheadResults(u, { userId: s, adAccountId: parseInt(l, 10).toString(36), dailyBudgetMicros: `${m}`, totalBudgetMicros: `${y}`, currency: i ?? "USD", targeting: E, objective: r }))).then(() => {
                                const e = o().ads.typeahead.forecastAudience[u]?.result?.estimatedImpressions;
                                e ? (0, h.hq)(t)(h.Ur.audienceEstimateSuccess({ dailyBudgetMicros: m, totalBudgetMicros: y, ageBucket: d, gender: g, keywords: p, location: _, estimatedImpressions: e, objective: r })) : (0, h.hq)(t)(h.Ur.audienceEstimateFail({ dailyBudgetMicros: m, totalBudgetMicros: y, ageBucket: d, gender: g, keywords: p, location: _, objective: r }));
                            })
                        );
                    },
                H =
                    (e, t) =>
                    (t, o, { api: a }) => {
                        const { objective: r } = o().quickPromote,
                            { currency: i } = o().quickPromote.budget,
                            c = (0, n.WK)(e)(o()),
                            { user_id: u } = o().session,
                            s = o().quickPromote.account.adsAccount?.id,
                            { ageBucket: l } = o().quickPromote.targeting;
                        if (W.includes(o().ads.typeahead.forecastAudience[c]?.fetchStatus) || !u || !l) return Promise.resolve();
                        const d = Math.round(1e6 * e),
                            g = d,
                            p = J(o());
                        return (0, b.zk)("forecastAudience", t(T.getTypeaheadResults(c, { userId: u, adAccountId: parseInt(s, 10).toString(36), dailyBudgetMicros: `${d}`, totalBudgetMicros: `${g}`, currency: i ?? "USD", targeting: p, objective: r }))).then(() => {});
                    };
            function J(e) {
                const { ageBucket: t, contextualKeywords: o, gender: a, keywords: r, targetedLocations: n } = e.quickPromote.targeting;
                return { geos: n.map(({ targeting_value: e }) => ({ location_id: e })), age_buckets: [{ age_bucket: t }], gender: { gender: a }, keywords: r.map((e) => ({ keyword: e })), contextual_entities: o.map((e) => ({ entity: e })) };
            }
            const X =
                    (e) =>
                    (t, o, { userPersistence: a }) => {
                        const { quickPromote: r } = o(),
                            {
                                budget: { currency: n, dailyBudget: i, durationDays: c },
                                objective: u,
                                targeting: { ageBucket: s, gender: l, keywords: d, targetedLocations: g },
                            } = r;
                        return a.set("rweb.quickPromoteRedirectBack", e ? { platformType: e, ageBucket: s, gender: l, keywords: d, targetedLocations: g, dailyBudget: i, durationDays: c, objective: u, lastPersisted: new Date().getTime(), currency: n } : null);
                    },
                ee =
                    (e, t, o) =>
                    (a, r, { featureSwitches: n, userPersistence: i }) =>
                        i
                            .get("rweb.quickPromoteRedirectBack")
                            .catch(() => {})
                            .then((a) => {
                                const { eligibility: n } = r().quickPromote.eligibility[t] || { eligibilityFetchStatus: E.ZP.NONE, eligibility: void 0 };
                                x(n) && o.replace((0, h.gC)(e, t));
                            }),
                te =
                    (e, t, o, a, r, i, c) =>
                    (u, s, { featureSwitches: l, userPersistence: d }) =>
                        d
                            .get("rweb.quickPromoteRedirectBack")
                            .catch(() => {})
                            .then((d) => {
                                if (y()) {
                                    const { eligibility: a } = s().quickPromote.eligibility[t] || { eligibilityFetchStatus: E.ZP.NONE, eligibility: void 0 };
                                    if (Z(a)) {
                                        if ("true" === i.pa_signup_complete) return (0, h.hq)(c)(h.Ur.professionalAccountsNotRetrieved()), void r.replace((0, h.gC)(e, t));
                                        {
                                            (0, h.hq)(c)(h.Ur.professionalAccountsSignup());
                                            const e = { requested_variant: `qp-${t}-${o === h.ZV.Webview ? "true" : "false"}` },
                                                a = encodeURIComponent(JSON.stringify(e));
                                            return void r.replace(`/i/flow/convert_to_professional?input_flow_data=${a}`);
                                        }
                                    }
                                    if (x(a)) return (0, h.hq)(c)(h.Ur.professionalAccountsIneligible()), void r.replace((0, h.gC)(e, t));
                                    (0, h.hq)(c)(h.Ur.professionalAccountsEligible());
                                }
                                if (d && d.platformType && d.lastPersisted && new Date().getTime() - d.lastPersisted < 36e5) {
                                    const { ageBucket: o, currency: a, dailyBudget: i, durationDays: c, gender: l, keywords: g, objective: p, platformType: _, targetedLocations: m } = d,
                                        { currency: y } = s().quickPromote.budget;
                                    u((0, n.mS)(p)), u((0, n.e3)({ ageBucket: o, gender: l, keywords: g, targetedLocations: m })), a === y ? (u((0, n.Uc)({ dailyBudget: i, durationDays: c })), r.replace((0, h.WS)(e, t, _, h.MN.BudgetSelect))) : (u((0, n.Uc)({ errorMessage: z })), r.replace((0, h.WS)(e, t, _, h.MN.BudgetSelect)));
                                } else {
                                    const n = l.isTrue("responsive_web_qp_two_screens_enabled") ? h.MN.Targeting : h.MN.Intro;
                                    a !== n && r.replace((0, h.WS)(e, t, a ? o : h.ZV.Rweb, n));
                                }
                            }),
                oe =
                    ({ statusId: e }) =>
                    (t, o, { api: a, featureSwitches: r }) => {
                        const { eligibility: i, eligibilityFetchStatus: c } = o().quickPromote.eligibility[e] || { eligibilityFetchStatus: E.ZP.NONE, eligibility: void 0 };
                        if (c === E.ZP.LOADING) return Promise.resolve();
                        if (c === E.ZP.LOADED) {
                            const e = B.ZP.selectViewerUser(o()),
                                t = !e?.professional,
                                a = !!e?.professional;
                            if (t === Z(i) || (a && ((e) => F.includes(e))(i))) return Promise.resolve();
                        }
                        return (0, b.zk)("fetchQuickPromoteEligibility", t((0, n.pY)({ tweetId: e })), "shared-promise");
                    },
                ae =
                    (e, t, o) =>
                    (e, t, { api: a, featureSwitches: r }) =>
                        !o && W.includes(t().quickPromote.account.accountDataFetchStatus)
                            ? Promise.resolve()
                            : (e((0, n.Yv)(E.ZP.LOADING)),
                              (0, b.zk)("fetchAdsAccountForUserGraphQl", re(a))
                                  .then((t) => {
                                      if (!t) return;
                                      const { adsAccount: o, campaigns: a, fundingInstruments: r } = t;
                                      return e((0, n.hs)(o)), e((0, n.au)(r)), e((0, n.k6)(r[0] || null)), e((0, n.P6)(a)), o.isHousingAndUrbanDevelopmentLimitations && e((0, n.l$)(M.s.AGE_OVER_18)), e(de(!0));
                                  })
                                  .then(() => e((0, n.Yv)(E.ZP.LOADED)))
                                  .catch((t) => {
                                      throw (e((0, n.Yv)(E.ZP.FAILED)), t);
                                  })),
                re = (e) =>
                    e
                        .withEndpoint(p.Z)
                        .getAdAccounts({})
                        .then((e) => {
                            const t = e.quick_promote_advertiser_accounts?.items.filter((e) => e.country_code && e.timezone)[0];
                            if (!t || !t.country_code || !t.timezone) return;
                            const { campaigns: o, country_code: a, funding_sources: r, permissions: n, perspective: i, quick_promote_needs_vat: c, rest_id: u, timezone: s } = t,
                                l = { country_code: a, id: u, timezone: s, needs_vat: !!c, isCanWriteBilling: n?.permission_set.includes("AccountAdmin") ?? !0, isHousingAndUrbanDevelopmentLimitations: i?.features.includes("HousingAndUrbanDevelopmentLimitations") ?? !1 },
                                d =
                                    r?.slice?.items
                                        ?.map((e) => {
                                            const { credit_limit: t, currency: o, description: a, is_able_to_fund: r, is_in_app_purchase: n, rest_id: i, type: c } = e,
                                                u = ((e) => {
                                                    if (e) return Q[e];
                                                })(c);
                                            if (i && o && u && a && r && !1 === n && !/no payment method/.test(a) && ("CREDIT_CARD" !== u || (t && !(t <= 0)))) return { credit_limit_local_micro: t ?? null, currency: o, description: a, id: i, type: u };
                                        })
                                        ?.filter(Boolean) ?? [];
                            return {
                                adsAccount: l,
                                fundingInstruments: d,
                                campaigns:
                                    o?.slice?.items
                                        ?.map((e) => {
                                            if (e.rest_id) return { id: e.rest_id };
                                        })
                                        ?.filter(Boolean) ?? [],
                            };
                        }),
                ne = (e) => (t, o) => {
                    t((0, n.zu)(e));
                    const a = (0, D.VT)(o());
                    return (0, b.zk)("targetingLocation", t(w.getTypeaheadResults(e, { query: e, lang: a })));
                },
                ie = (e) => (t, o) => {
                    t((0, n.zu)(e));
                    const a = o().quickPromote.account.adsAccount?.id;
                    return a ? (0, b.zk)("targetingCatalogSearch", t(C.getTypeaheadResults(e, { accountId: a, query: e }))) : Promise.reject(new Error("No ads account ID available"));
                },
                ce =
                    () =>
                    (e, t, { api: o, scribe: a }) => {
                        if (W.includes(t().quickPromote.targeting.initialTargetedLocationsFetchStatus) || t().quickPromote.targeting.targetedLocations.length) return Promise.resolve();
                        const r = (0, D.GG)(t()) || "US",
                            i = (0, D.VT)(t());
                        return (
                            e((0, n.Dg)(E.ZP.LOADING)),
                            (0, b.zk)(
                                "fetchCurrentTargetingLocation",
                                o
                                    .withEndpoint(g)
                                    .getTargetableLocations({ countryCode: r, lang: i, locationType: "COUNTRIES" })
                                    .then((e) => (e.length ? e : o.withEndpoint(g).getTargetableLocations({ countryCode: "US", lang: i, locationType: "COUNTRIES" })))
                                    .then((o) => {
                                        if (!o.length) {
                                            const e = Error("Could not find targetable country for US!");
                                            throw ((0, _.ZP)(e), e);
                                        }
                                        if (t().quickPromote.targeting.targetedLocations.length) return Promise.resolve();
                                        e((0, n.hI)(o)), e((0, n.Dg)(E.ZP.LOADED));
                                    }),
                            ).catch((t) => {
                                throw (e((0, n.Dg)(E.ZP.FAILED)), t);
                            })
                        );
                    },
                ue =
                    () =>
                    (e, t, { api: o }) => {
                        if (W.includes(t().quickPromote.budget.availableBudgetsFetchStatus)) return Promise.resolve();
                        e((0, n.b2)(E.ZP.LOADING));
                        const a = (0, n.QE)(t());
                        return (0, b.zk)("fetchAvailableBudgets", o.withEndpoint(p.Z).getBudgets({ countryCode: a }))
                            .then(({ budgets: t, currencyCode: o, defaultBudget: a }) => {
                                e((0, n.ni)(t, o)), e((0, n.p_)(a)), e((0, n.b2)(E.ZP.LOADED));
                            })
                            .catch((t) => {
                                throw (e((0, n.b2)(E.ZP.FAILED)), t);
                            });
                    },
                se =
                    (e) =>
                    (t, o, { api: a, featureSwitches: r }) => {
                        const { couponsFetchStatus: i } = o().quickPromote;
                        return W.includes(i)
                            ? Promise.resolve()
                            : (t((0, n.PU)(E.ZP.LOADING)),
                              (0, b.zk)(
                                  "fetchCoupons",
                                  a
                                      .withEndpoint(p.Z)
                                      .getCoupons({})
                                      .then((o) => {
                                          t((0, n._B)(o)), t((0, n.PU)(E.ZP.LOADED)), (0, h.hq)(e)(h.Ur.fetchCouponSuccess(o?.eligible_coupon));
                                      })
                                      .catch((o) => {
                                          t((0, n._B)()), t((0, n.PU)(E.ZP.LOADED)), (0, h.hq)(e)(h.Ur.fetchCouponFailed(o));
                                      }),
                              ));
                    };
            const le =
                    (e) =>
                    (t, o, { api: a, featureSwitches: r }) => {
                        const { enrollCouponStatus: i } = o().quickPromote;
                        return W.includes(i)
                            ? Promise.resolve()
                            : (t((0, n.kn)(E.ZP.LOADING)),
                              (0, b.zk)(
                                  "enrollCoupon",
                                  a
                                      .withEndpoint(p.Z)
                                      .enrollCoupon({})
                                      .then((o) => {
                                          const a = o.quick_promote_enroll_coupons;
                                          if ("QuickPromoteCouponEnrollmentError" === a?.__typename) {
                                              const { error_code: o } = a;
                                              t((0, n.qA)(o)), (0, h.hq)(e)(h.Ur.enrollCouponFail(o));
                                          } else if ("QuickPromoteCouponEnrollmentDetails" === a?.__typename) {
                                              const r = a.available_balance,
                                                  i = (function (e) {
                                                      const t = e.quick_promote_enroll_coupons;
                                                      let o;
                                                      if (t?.enrolled_coupon_v2)
                                                          switch (t.enrolled_coupon_v2.__typename) {
                                                              case "QuickPromoteConditionalCoupon":
                                                                  o = { type: "ConditionalCoupon", currency_code: t.enrolled_coupon_v2.currency_code, credit_amount: t.enrolled_coupon_v2.credit_amount, spend_amount: t.enrolled_coupon_v2.spend_amount };
                                                                  break;
                                                              case "QuickPromoteStandardCoupon":
                                                                  o = { type: "StandardCoupon", currency_code: t.enrolled_coupon_v2.currency_code, total_amount: t.enrolled_coupon_v2.total_amount };
                                                                  break;
                                                              default:
                                                                  t.enrolled_coupon_v2.__typename;
                                                          }
                                                      else t?.enrolled_coupon && t.enrolled_coupon.total_amount && t.enrolled_coupon.currency_code && (o = { type: "StandardCoupon", total_amount: t.enrolled_coupon.total_amount, currency_code: t.enrolled_coupon.currency_code });
                                                      return o;
                                                  })(o),
                                                  c = "ConditionalCoupon" === i?.type ? i : void 0;
                                              t((0, n._B)({ existing_balance: r, pending_coupon: c })), t((0, n.qA)(null)), (0, h.hq)(e)(h.Ur.enrollCouponSuccess(i));
                                          }
                                          t((0, n.kn)(E.ZP.LOADED));
                                      })
                                      .catch((o) => {
                                          throw (t((0, n.qA)(j)), (0, h.hq)(e)(h.Ur.enrollCouponFail(j)), t((0, n.kn)(E.ZP.FAILED)), o);
                                      }),
                              ));
                    },
                de =
                    (e) =>
                    (t, o, { api: a, featureSwitches: r }) => {
                        const {
                            account: { adsAccount: i },
                            paymentMethodsFetchStatus: c,
                        } = o().quickPromote;
                        if (!e && W.includes(c)) return Promise.resolve();
                        if (!i?.id) throw (t((0, n.rb)(E.ZP.FAILED)), Error("Missing ads account id"));
                        return (
                            t((0, n.rb)(E.ZP.LOADING)),
                            (0, b.zk)(
                                "fetchPaymentMethods",
                                a
                                    .withEndpoint(p.Z)
                                    .getPaymentMethods({ ads_account_id: parseInt(i.id, 10).toString(36) })
                                    .then((e) => {
                                        t((0, n.DA)(e)), t((0, n.rb)(E.ZP.LOADED));
                                    })
                                    .catch((e) => {
                                        throw (t((0, n.rb)(E.ZP.FAILED)), e);
                                    }),
                            )
                        );
                    },
                ge =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, b.zk)(
                            "deletePaymentMethod",
                            a
                                .withEndpoint(p.Z)
                                .deletePaymentMethod({ payment_method_id: e })
                                .then((e) => {
                                    if (e && !e.delete_payment_method?.success) throw Error(`Error deleting payment method ${e.delete_payment_method?.reason || ""}`);
                                    return t(de(!0));
                                })
                                .catch((e) => {
                                    throw (t((0, N.fz)({ text: V })), e);
                                }),
                        ),
                pe =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, b.zk)(
                            "setDefaultPaymentMethod",
                            a
                                .withEndpoint(p.Z)
                                .setDefaultPaymentMethod({ payment_method_id: e })
                                .then((o) => {
                                    if (o && !o.set_payment_method_as_default?.changed) throw Error(`Error setting payment method ${e} as default because ${o.set_payment_method_as_default?.reason || ""}`);
                                    return t(de(!0));
                                })
                                .catch((e) => {
                                    throw (t((0, N.fz)({ text: V })), e);
                                }),
                        );
        },
        315032: (e, t, o) => {
            "use strict";
            o.d(t, { CH: () => c, E4: () => i, Y0: () => a, gT: () => n, s: () => r });
            const a = Object.freeze({ Any: "AnyGender", Male: "Male", Female: "Female" }),
                r = Object.freeze({ AGE_18_TO_24: "Age18To24", AGE_18_TO_34: "Age18To34", AGE_18_TO_49: "Age18To49", AGE_18_TO_54: "Age18To54", AGE_21_TO_34: "Age21To34", AGE_21_TO_49: "Age21To49", AGE_21_TO_54: "Age21To54", AGE_25_TO_49: "Age25To49", AGE_25_TO_54: "Age25To54", AGE_35_TO_49: "Age35To49", AGE_35_TO_54: "Age35To54", AGE_OVER_18: "AgeOver18", AGE_OVER_21: "AgeOver21", AGE_OVER_25: "AgeOver25", AGE_OVER_35: "AgeOver35", AGE_OVER_50: "AgeOver50" }),
                n = Object.freeze({ [r.AGE_18_TO_24]: { minAge: "18", maxAge: "24" }, [r.AGE_18_TO_34]: { minAge: "18", maxAge: "34" }, [r.AGE_18_TO_49]: { minAge: "18", maxAge: "49" }, [r.AGE_18_TO_54]: { minAge: "18", maxAge: "54" }, [r.AGE_21_TO_34]: { minAge: "21", maxAge: "34" }, [r.AGE_21_TO_49]: { minAge: "21", maxAge: "49" }, [r.AGE_21_TO_54]: { minAge: "21", maxAge: "54" }, [r.AGE_25_TO_49]: { minAge: "25", maxAge: "49" }, [r.AGE_25_TO_54]: { minAge: "25", maxAge: "54" }, [r.AGE_35_TO_49]: { minAge: "35", maxAge: "49" }, [r.AGE_35_TO_54]: { minAge: "35", maxAge: "54" }, [r.AGE_OVER_18]: { minAge: "18" }, [r.AGE_OVER_21]: { minAge: "21" }, [r.AGE_OVER_25]: { minAge: "25" }, [r.AGE_OVER_35]: { minAge: "35" }, [r.AGE_OVER_50]: { minAge: "50" } }),
                i = Object.freeze({ 18: { 24: r.AGE_18_TO_24, 34: r.AGE_18_TO_34, 49: r.AGE_18_TO_49, 54: r.AGE_18_TO_54, over: r.AGE_OVER_18 }, 21: { 34: r.AGE_21_TO_34, 49: r.AGE_21_TO_49, 54: r.AGE_21_TO_54, over: r.AGE_OVER_21 }, 25: { 49: r.AGE_25_TO_49, 54: r.AGE_25_TO_54, over: r.AGE_OVER_25 }, 35: { 49: r.AGE_35_TO_49, 54: r.AGE_35_TO_54, over: r.AGE_OVER_35 }, 50: { over: r.AGE_OVER_50 } }),
                c = Object.freeze({ Engagements: "Engagements", Followers: "Followers", WebsiteClicks: "WebsiteClicks" });
        },
        155353: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => u });
            var a = o(202784),
                r = o(890601),
                n = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const u = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose.0d12e77a.js.map
