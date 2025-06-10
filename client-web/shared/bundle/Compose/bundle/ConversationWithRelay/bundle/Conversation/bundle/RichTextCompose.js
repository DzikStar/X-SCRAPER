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
        321099: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => C });
            o(136728);
            var r = o(401388),
                n = o(414742),
                a = o(164918),
                i = o.n(a),
                c = o(795357),
                u = o.n(c),
                s = o(814142),
                l = o.n(s),
                d = o(903860),
                p = o.n(d),
                g = o(859096),
                _ = o.n(g),
                m = o(356886),
                y = o.n(m),
                b = o(891742),
                h = o.n(b),
                A = o(39022),
                E = o.n(A),
                f = o(720584),
                k = o.n(f),
                P = o(127498),
                S = o.n(P),
                w = o(959909),
                v = o.n(w);
            const C = ({ apiClient: e, featureSwitches: t }) => ({
                    getQuickPromoteEligibility: (t) =>
                        e.graphQL(S(), t).then((e) => {
                            const t = e.tweet_result_by_rest_id?.result;
                            return "Tweet" === t?.__typename ? t.quick_promote_eligibility?.eligibility : "TweetWithVisibilityResults" === t?.__typename ? t.tweet.quick_promote_eligibility?.eligibility : void 0;
                        }),
                    getCoupons: (t) =>
                        e.graphQL(E(), t).then((e) => {
                            const t = e.viewer?.user_results?.result,
                                o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0,
                                r = (function (e) {
                                    const t = e.viewer?.user_results?.result,
                                        o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0;
                                    let r;
                                    if (o?.eligible_coupon_v2)
                                        switch (o.eligible_coupon_v2.__typename) {
                                            case "QuickPromoteConditionalCoupon":
                                                r = { type: "ConditionalCoupon", currency_code: o.eligible_coupon_v2.currency_code, credit_amount: o.eligible_coupon_v2.credit_amount, spend_amount: o.eligible_coupon_v2.spend_amount };
                                                break;
                                            case "QuickPromoteStandardCoupon":
                                                r = { type: "StandardCoupon", currency_code: o.eligible_coupon_v2.currency_code, total_amount: o.eligible_coupon_v2.total_amount };
                                                break;
                                            default:
                                                o.eligible_coupon_v2.__typename;
                                        }
                                    else o?.eligible_coupon?.total_amount && o?.eligible_coupon.currency_code && (r = { type: "StandardCoupon", currency_code: o.eligible_coupon.currency_code, total_amount: o.eligible_coupon.total_amount });
                                    return r;
                                })(e),
                                n = (function (e) {
                                    const t = e.viewer?.user_results?.result,
                                        o = "User" === t?.__typename ? t.professional?.quick_promote_coupons_v2 : void 0,
                                        r = o?.pending_coupons && o?.pending_coupons[0];
                                    return r && { type: "ConditionalCoupon", credit_amount: r.credit_amount, spend_amount: r.spend_amount, currency_code: r.currency_code };
                                })(e);
                            r?.total_amount && (r.total_amount = r.total_amount / 1e6), r?.credit_amount && (r.credit_amount = r.credit_amount / 1e6), r?.spend_amount && (r.spend_amount = r.spend_amount / 1e6), n?.credit_amount && (n.credit_amount = n.credit_amount / 1e6), n?.spend_amount && (n.spend_amount = n.spend_amount / 1e6), o?.existing_balance && (o.existing_balance = o.existing_balance.map(({ currency_code: e, total_amount: t }) => ({ currency_code: e, total_amount: t ? t / 1e6 : 0 })));
                            const a = o?.experiment_end_timestamp ? new Date(o.experiment_end_timestamp) : void 0;
                            return o && { eligible_coupon: r, pending_coupon: n, existing_balance: o.existing_balance, eligible_coupon_experiment: o.eligible_coupon_experiment, experiment_end_date: a };
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
                                n = [];
                            return (
                                t?.forEach((e) => {
                                    "CreditCard" === e.payment_method_type && !(0, r.Z)(e.details) && e.details.card_status && o.includes(e.details.card_status) && n.push({ id: e.id, cardStatus: e.details.is_expired ? "Expired" : "Active" === e.details.card_status ? "Active" : "Invalid", lastFourDigits: e.details.last_four_digits, fullName: e.details.full_name, isDefault: e.is_default, imgSrcUrl: e.details.CreditCardImgSrcUrl });
                                }),
                                n
                            );
                        }),
                    deletePaymentMethod: (t) => e.graphQL(u(), t),
                    setDefaultPaymentMethod: (t) => e.graphQL(i(), t),
                    createPromotion: (t) => e.graphQL(k(), t),
                    enrollCoupon: (t) =>
                        e.graphQL(v(), t).then((e) => {
                            const t = e.quick_promote_enroll_coupons;
                            return t?.available_balance && (t.available_balance = t.available_balance.map(({ currency_code: e, total_amount: t }) => ({ currency_code: e, total_amount: t ? t / 1e6 : 0 }))), t?.enrolled_coupon && t.enrolled_coupon.total_amount && (t.enrolled_coupon.total_amount = t.enrolled_coupon.total_amount / 1e6), t?.enrolled_coupon_v2 && t.enrolled_coupon_v2.spend_amount && (t.enrolled_coupon_v2.spend_amount = t.enrolled_coupon_v2.spend_amount / 1e6), t?.enrolled_coupon_v2 && t.enrolled_coupon_v2.credit_amount && (t.enrolled_coupon_v2.credit_amount = t.enrolled_coupon_v2.credit_amount / 1e6), e;
                        }),
                    getAdAccounts: (t) =>
                        e.graphQL(
                            p(),
                            t,
                            (0, n.kj)(() => !1, "GQL AdAccounts: Failed to fetch ad accounts"),
                        ),
                }),
                q = { budgets: [50, 100, 250, 500, 1e3, 2500, 5e3], currencyCode: "USD", defaultBudget: 100 };
        },
        441408: (e, t, o) => {
            "use strict";
            o.d(t, { iA: () => i, uB: () => n, zk: () => a });
            var r = o(774717);
            const n = "quick-promote",
                a = (e, t, o = "promise") => r.lN(`${n}:${o}:${e}`, t),
                i = (e, t, o) => {
                    r.IM(`${n}:promotion:${e}:${t}:value`, { duration_ms: o, event_value: o });
                };
        },
        852657: (e, t, o) => {
            "use strict";
            o.d(t, { $L: () => d.$L, A_: () => le, Co: () => we, DA: () => qe, DY: () => J, Dg: () => ie, E6: () => d.E6, Ek: () => d.Ek, Ik: () => Se, Jk: () => d.Jk, Ku: () => ve, LK: () => d.LK, L_: () => W, P6: () => oe, PU: () => Ee, QE: () => j, Uc: () => ee, Um: () => Ae, WK: () => $, WS: () => d.WS, XJ: () => Y, Yv: () => ae, _B: () => fe, au: () => re, b2: () => pe, br: () => d.br, ch: () => de, e3: () => X, fN: () => d.fN, g_: () => me, gp: () => d.gp, hI: () => ce, hs: () => te, k6: () => ne, kb: () => d.kb, kn: () => ke, l$: () => se, mS: () => Ce, ni: () => ge, oA: () => he, oE: () => d.oE, oo: () => H, pY: () => be, p_: () => _e, qA: () => Pe, qL: () => d.qL, rS: () => ye, rb: () => Te, sN: () => d.sN, yW: () => d.c7, zu: () => ue });
            var r = o(744531),
                n = o(401388),
                a = o(321099),
                i = o(499627),
                c = o(917799),
                u = o(312771),
                s = o(390387),
                l = o(315032),
                d = o(813604);
            const p = { account: { adsAccount: null, accountDataFetchStatus: u.ZP.NONE, fundingInstruments: [], selectedFundingInstrument: null, campaigns: null }, targeting: { initialTargetedLocationsFetchStatus: u.ZP.NONE, targetedLocations: [], locationQuery: "", ageBucket: l.s.AGE_OVER_18, gender: l.Y0.Any, keywords: [], contextualKeywords: [] }, budget: { errorMessage: null, dailyBudget: 100, durationDays: 5, availableBudgets: null, availableBudgetsFetchStatus: u.ZP.NONE, currency: null }, eligibility: {}, coupons: void 0, couponsFetchStatus: u.ZP.NONE, enrollCouponStatus: u.ZP.NONE, enrollCouponErrorCode: null, firstLoad: !1, paymentMethods: [], selectedPaymentMethod: null, paymentMethodsFetchStatus: u.ZP.NONE, promoteStatus: u.ZP.NONE, promoteErrorCode: null, objective: l.CH.Engagements },
                g = "quickPromote",
                _ = "rweb/quickPromote/reset",
                m = "rweb/quickPromote/account/set",
                y = "rweb/quickPromote/account/setAdsAccount",
                b = "rweb/quickPromote/account/setFundingInstruments",
                h = "rweb/quickPromote/account/setCampaigns",
                A = "rweb/quickPromote/account/setSelectedFundingInstrument",
                E = "rweb/quickPromote/account/setAccountDataFetchStatus",
                f = "rweb/quickPromote/targeting/set",
                k = "rweb/quickPromote/targeting/setLocationQuery",
                P = "rweb/quickPromote/targeting/setInitialTargetedLocationsFetchStatus",
                S = "rweb/quickPromote/targeting/setTargetedLocations",
                w = "rweb/quickPromote/targeting/setTargetedAgeBucket",
                v = "rweb/quickPromote/targeting/setTargetedGender",
                C = "rweb/quickPromote/targeting/setTargetedKeywords",
                q = "rweb/quickPromote/targeting/setTargetedContextualKeywords",
                T = "rweb/quickPromote/budget/set",
                I = "rweb/quickPromote/budget/setAvailableBudgetsFetchStatus",
                L = "rweb/quickPromote/budget/setAvailableBudgets",
                O = "rweb/quickPromote/budget/setDailyBudget",
                D = "rweb/quickPromote/budget/setBudgetDuration",
                G = "rweb/quickPromote/budget/setBudgetErrorMessage",
                N = "rweb/quickPromote/budget/setObjective",
                B = "rweb/quickPromote/setCouponsFetchStatus",
                M = "rweb/quickPromote/setCoupons",
                U = "rweb/quickPromote/setEnrollCouponStatus",
                R = "rweb/quickPromote/setEnrollCouponErrorCode",
                F = "rweb/quickPromote/eligibility",
                Z = "rweb/quickPromote/setPromoteFetchStatus",
                x = "rweb/quickPromote/setPromoteErrorCode",
                Q = "rweb/quickPromote/paymentMethods",
                z = "rweb/quickPromote/setPaymentMethodsFetchStatus",
                K = Object.freeze({ REQUEST: "rweb/quickPromote/eligibilityRequest", SUCCESS: "rweb/quickPromote/eligibilitySuccess", FAILURE: "rweb/quickPromote/eligibilityFailure" }),
                V = Object.freeze({ REQUEST: "rweb/quickPromote/promoteRequest", SUCCESS: "rweb/quickPromote/promoteSuccess", FAILURE: "rweb/quickPromote/promoteFailure" }),
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
                            budget: { currency: n, dailyBudget: a },
                            objective: i,
                        } = e.quickPromote,
                        c = (0, r.Z)(o, ["initialTargetedLocationsFetchStatus", "locationQuery"]);
                    return JSON.stringify({ ...c, location: t, dailyBudget: a, currency: n, objective: i });
                },
                $ = (e) => (t) => {
                    const {
                        targeting: {
                            targetedLocations: [{ targeting_value: o }],
                            keywords: r,
                            initialTargetedLocationsFetchStatus: n,
                            locationQuery: a,
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
                J = (e) => (e.quickPromote.selectedPaymentMethod ? e.quickPromote.selectedPaymentMethod : (0, n.Z)(e.quickPromote.paymentMethods) ? null : e.quickPromote.paymentMethods.find((e) => e.isDefault) || e.quickPromote.paymentMethods.find((e) => "Active" === e.cardStatus) || null),
                X = (e) => ({ type: f, payload: { targeting: e } }),
                ee = (e) => ({ type: T, payload: { budget: e } }),
                te = (e) => ({ type: y, payload: { adsAccount: e } }),
                oe = (e) => ({ type: h, payload: { campaigns: e } }),
                re = (e) => ({ type: b, payload: { fundingInstruments: e } }),
                ne = (e) => ({ type: A, payload: { selectedFundingInstrument: e } }),
                ae = (e) => ({ type: E, payload: { fetchStatus: e } }),
                ie = (e) => ({ type: P, payload: { fetchStatus: e } }),
                ce = (e) => ({ type: S, payload: { targetedLocations: e } }),
                ue = (e) => ({ type: k, payload: { locationQuery: e } }),
                se = (e) => ({ type: w, payload: { ageBucket: e } }),
                le = (e) => ({ type: v, payload: { gender: e } }),
                de = (e) => ({ type: q, payload: { contextualKeywords: e } }),
                pe = (e) => ({ type: I, payload: { fetchStatus: e } }),
                ge = (e, t) => ({ type: L, payload: { availableBudgets: e, currency: t } }),
                _e = (e) => ({ type: O, payload: { dailyBudget: e } }),
                me = (e) => ({ type: D, payload: { durationDays: e } }),
                ye = (e) => ({ type: G, payload: { errorMessage: e } }),
                be =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, c._O)(t, { request: r.withEndpoint(a.Z).getQuickPromoteEligibility, params: e })({ actionTypes: K, context: "FETCH_ELIGIBILITY", meta: e });
            function he() {
                return { type: _ };
            }
            const Ae = (e, t) => ({ type: F, payload: { eligibility: t, tweetId: e } }),
                Ee = (e) => ({ type: B, payload: { fetchStatus: e } }),
                fe = (e) => ({ type: M, payload: { coupons: e } }),
                ke = (e) => ({ type: U, payload: { enrollCouponStatus: e } }),
                Pe = (e) => ({ type: R, payload: { enrollCouponErrorCode: e } }),
                Se = (e) => ({ type: Z, payload: { promoteFetchStatus: e } }),
                we = (e) => ({ type: x, payload: { promoteErrorCode: e } }),
                ve =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, c._O)(t, { request: r.withEndpoint(a.Z).createPromotion, params: e })({ actionTypes: V, context: "FETCH_PROMOTE" }),
                Ce = (e) => ({ type: N, payload: { objective: e } }),
                qe = (e) => ({ type: Q, payload: { paymentMethods: e } }),
                Te = (e) => ({ type: z, payload: { fetchStatus: e } });
            i.Z.register({
                [g]: (e = p, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case _:
                            return p;
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
                        case A:
                            if (t.payload) {
                                const { selectedFundingInstrument: o } = t.payload;
                                return { ...e, account: { ...e.account, selectedFundingInstrument: o } };
                            }
                            break;
                        case E:
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
                        case w:
                            if (t.payload) {
                                const { ageBucket: o } = t.payload;
                                return { ...e, targeting: { ...e.targeting, ageBucket: o } };
                            }
                            break;
                        case v:
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
                                const { availableBudgets: o, currency: r } = t.payload;
                                return { ...e, budget: { ...e.budget, availableBudgets: o, currency: r } };
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
                        case G:
                            if (t.payload) {
                                const { errorMessage: o } = t.payload;
                                return { ...e, budget: { ...e.budget, errorMessage: o } };
                            }
                            break;
                        case F:
                            if (t.payload) {
                                const { eligibility: o, tweetId: r } = t.payload;
                                return { ...e, eligibility: { [r]: { ...e.eligibility[r], eligibility: o } } };
                            }
                            break;
                        case K.REQUEST: {
                            const { tweetId: o } = t.meta;
                            return { ...e, eligibility: { ...e.eligibility, [o]: { eligibilityFetchStatus: u.ZP.LOADING } } };
                        }
                        case K.FAILURE: {
                            const { tweetId: o } = t.meta;
                            return { ...e, eligibility: { ...e.eligibility, [o]: { eligibilityFetchStatus: u.ZP.FAILED } } };
                        }
                        case K.SUCCESS: {
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
                        case N:
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
                        case V.REQUEST:
                            return { ...e, promoteStatus: u.ZP.LOADING };
                        case V.FAILURE:
                            return { ...e, promoteStatus: u.ZP.FAILED };
                        case V.SUCCESS:
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
            o.d(t, { kb: () => V, gp: () => ue, br: () => ie, Ek: () => ee, WS: () => ne, Lm: () => W, fN: () => ae, c7: () => re, qL: () => j, E6: () => X, Jk: () => J, tN: () => H, oE: () => Y, sN: () => oe, $L: () => se, LK: () => K });
            o(136728), o(571372);
            var r = o(111677),
                n = o.n(r),
                a = o(852657);
            const i = ["ar", "da", "de", "en", "es", "fi", "fil", "fr", "id", "it", "ja", "ko", "nl", "no", "pt", "ru", "sv", "th", "tr", "zh-cn", "zh-tw"];
            function c(e) {
                const t = e.toLowerCase();
                if (i.includes(t)) return t;
                return i.find((e) => e.includes(t) || t.includes(e)) || "en";
            }
            const u = (0, o(370751).Z)(["US", "IE", "GB", "CA", "ZA", "IL", "ES", "FR", "JP", "BE", "LU", "NL", "IT", "AR", "CL", "CO", "EC", "GT", "MX", "PE", "AU", "NZ", "SG", "PA", "DK", "FI", "NO", "SE", "DE", "AT", "CH", "LI", "ID", "BR", "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AM", "AW", "AZ", "BS", "BH", "BD", "BB", "BY", "BZ", "BJ", "BM", "BT", "BQ", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CX", "CC", "KM", "CK", "CR", "CI", "HR", "CW", "CY", "CZ", "CD", "DM", "DO", "EG", "SV", "ER", "EE", "ET", "FK", "FO", "FJ", "GF", "TF", "GA", "GM", "GE", "GI", "GR", "GL", "GD", "GP", "GU", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "IQ", "IM", "JM", "JE", "JO", "KZ", "KE", "KI", "KW", "LA", "LV", "LB", "LR", "LY", "LI", "LT", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "YT", "MD", "MC", "MN", "ME", "MS", "MZ", "NA", "NR", "NP", "NC", "NI", "NE", "NG", "NU", "NF", "MP", "PK", "PW", "PS", "PG", "PY", "PH", "PN", "PL", "PT", "QA", "CG", "RE", "RO", "RW", "BL", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SB", "SO", "GS", "LK", "SR", "SJ", "SZ", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "UM", "UY", "UZ", "VU", "VA", "VE", "VI", "WF", "EH", "YE", "ZM", "ZW"]),
                s = "https://aa.twitter.com",
                l = ({ apiClient: e, featureSwitches: t }) => ({
                    getTargetableLocations: ({ countryCode: t, lang: o, locationType: r }) =>
                        e
                            .getUnversioned("/12/targeting_criteria/locations", { location_type: r, lang: c(o), country_code: t }, {}, s)
                            .then((e) => e.data)
                            .then((e) => e.filter((e) => u.has(e.country_code))),
                    getQueriedTargetableLocations: ({ countryCode: t, lang: o, locationType: r, query: n }) =>
                        e
                            .getUnversioned("/12/targeting_criteria/locations", { q: n, location_type: r, lang: c(o), country_code: t }, {}, s)
                            .then((e) => e.data)
                            .then(([e]) => [{ ...e, locations: e.locations.filter((e) => u.has(e.country_code)) }]),
                });
            var d = o(321099),
                p = o(163889),
                g = o(323265);
            function _() {
                const e = g.ZP.getTwitterAppVersion(),
                    t = /TwitterAndroid/.test(g.ZP.userAgent);
                return !!(!t && e && e.major >= 8 && e.minor >= 84) || !!(t && e && e.major >= 9 && e.minor >= 13) || !e;
            }
            var m = o(441408),
                y = o(363895),
                b = o(312771),
                h = o(118717),
                A = o(499627),
                E = o(917799);
            const f = Object.freeze({});
            function k(e, t) {
                const o = { REQUEST: `${(r = "rweb/ads/typeahead")}/${(n = e)}/REQUEST`, SUCCESS: `${r}/${n}/SUCCESS`, FAILURE: `${r}/${n}/FAILURE` };
                var r, n;
                return {
                    typeaheadApiActionTypes: o,
                    getTypeaheadResults:
                        (r, n) =>
                        (a, i, { api: c }) => {
                            const u = i().ads.typeahead[e][r];
                            if (u?.result) return Promise.resolve(u.result);
                            return (0, E._O)(a, { request: t(c), params: n })({ actionTypes: o, context: `ADS_TYPEAHEAD_${e}`, meta: { query: r } });
                        },
                    reducer: (e = f, t) => {
                        if (!t) return e;
                        switch (t.type) {
                            case o.REQUEST: {
                                const { query: o } = t.meta;
                                return { ...e, [o]: { fetchStatus: b.ZP.LOADING } };
                            }
                            case o.FAILURE: {
                                const {
                                    error: o,
                                    meta: { query: r },
                                } = t;
                                return { ...e, [r]: { fetchStatus: b.ZP.FAILED, error: o } };
                            }
                            case o.SUCCESS: {
                                const {
                                    meta: { query: o },
                                    payload: r,
                                } = t;
                                return { ...e, [o]: { fetchStatus: b.ZP.LOADED, result: r } };
                            }
                            default:
                                return e;
                        }
                    },
                };
            }
            const P = "ads",
                S = k("targetingLocation", (e) => e.withEndpoint(l).getQueriedTargetableLocations),
                w = k("forecastAudience", (e) => e.withEndpoint(d.Z).getAudienceEstimate),
                v = k("forecastAudience", (e) => e.withEndpoint(d.Z).getBoostAudienceEstimate),
                C = { targetingLocation: S.reducer, forecastAudience: w.reducer },
                q = { typeahead: (0, h.UY)(C) },
                T = (0, h.UY)(q);
            A.Z.register({ [P]: T });
            var I = o(390387),
                L = o(601576),
                O = o(836255),
                D = o(919022),
                G = o(315032);
            const N = ["Eligible", "EligibleWithPreviousCampaign", "ReplyTweet"],
                B = ["IneligibleNotProfessional", "IneligibleNotProfessionalAndAdAccountEligible", "IneligibleNotProfessionalAndAdAccountIneligible", "IneligibleNotProfessionalAndPendingPayment"],
                M = [...N, "IneligibleCampaignPaused", "IneligibleCampaignRunning", "IneligibleBoostCampaignRunning", "IneligibleCampaignUnderReview", "IneligibleTweet"],
                U = (e) => B.includes(e),
                R = (e) => !N.includes(e),
                F = { NonExclusiveIo: "INSERTION_ORDER", NonExclusiveRevolvingIo: "CREDIT_LINE", AgencyCreditLine: "AGENCY_CREDIT_LINE", PartnerManaged: "PARTNER_MANAGED", CreditCard: "CREDIT_CARD" },
                Z = n().i976aff4,
                x = n().ef4602ec,
                Q = n().e1e912f2,
                z = "NetworkError",
                K = [b.ZP.LOADING, b.ZP.LOADED],
                V =
                    ({ analytics: e, fromComposer: t, history: o, nextPath: r, statusId: n }) =>
                    (i, c, { api: u, featureSwitches: s }) => {
                        const l = $(c()),
                            {
                                session: { user_id: d },
                                quickPromote: {
                                    targeting: {
                                        ageBucket: p,
                                        gender: g,
                                        keywords: _,
                                        targetedLocations: [{ targeting_value: b }],
                                    },
                                    budget: { currency: h, dailyBudget: A, durationDays: E },
                                    account: { selectedFundingInstrument: f },
                                    objective: k,
                                    coupons: P,
                                },
                            } = c(),
                            S = c().quickPromote.account.adsAccount?.country_code,
                            w = c().quickPromote.account.adsAccount?.id,
                            v = f?.id;
                        if (K.includes(c().quickPromote.promoteStatus)) return Promise.resolve();
                        if (!w || !d) return (0, y.hq)(e)(y.Ur.promotionError("Unauthorized")), i((0, a.Co)("Unauthorized")), Promise.resolve();
                        if (!v) return (0, y.hq)(e)(y.Ur.promotionError("MissingFundingInstrument")), i((0, a.Co)("MissingFundingInstrument")), Promise.resolve();
                        i((0, a.Co)(null));
                        const C = Math.round(1e6 * A),
                            q = C * E,
                            T = !!P?.existing_balance.length;
                        return (
                            (0, y.hq)(e)(y.Ur.promotionCall({ dailyBudgetMicros: C, totalBudgetMicros: q, ageBucket: p, gender: g, keywords: _, location: b, objective: k, withCoupon: T })),
                            (0, m.zk)("fetchPromote", i((0, a.Ku)({ userId: d, adsAccountId: w, fundingInstrumentId: v, tweetId: n, budget: { daily_local_micros: `${C}`, total_local_micros: `${q}` }, targeting: l, objective: k })))
                                .catch(() => (t && i((0, L.fz)({ text: Q })), i((0, a.Co)(z)), (0, y.hq)(e)(y.Ur.promotionError(z)), { type: "fail" }))
                                .then((t) => {
                                    if ("fail" !== t.type) {
                                        if ("QuickPromoteError" === t.quick_promote_campaign_v3?.__typename) return i((0, a.Co)(t.quick_promote_campaign_v3.error_code)), (0, y.hq)(e)(y.Ur.promotionError(t.quick_promote_campaign_v3?.error_code || "QuickPromoteError")), i(ee(d, e, !0));
                                        if ("PromotionIneligible" === t.quick_promote_campaign_v3?.response_code) (0, y.hq)(e)(y.Ur.promotionError("PromotionIneligible")), i((0, a.Co)("PromotionIneligible"));
                                        else if (t.quick_promote_campaign_v3?.response_code) {
                                            const c = t.quick_promote_campaign_v3.campaign;
                                            return (0, y.hq)(e)(y.Ur.promotionSuccess(c?.rest_id)), (0, m.iA)(S ?? "NOWHERE", h ?? "UNKNOWN-CURR", q), o.push(r), i(O.Z.setTweetPromotionRunning(n)), void i((0, a.Um)(n, "IneligibleCampaignRunning"));
                                        }
                                    }
                                })
                        );
                    },
                j =
                    (e, t) =>
                    (e, o, { api: r }) => {
                        const { objective: n } = o().quickPromote,
                            { currency: i, dailyBudget: c } = o().quickPromote.budget,
                            u = (0, a.L_)(o()),
                            { user_id: s } = o().session,
                            l = o().quickPromote.account.adsAccount?.id,
                            {
                                ageBucket: d,
                                gender: p,
                                keywords: g,
                                targetedLocations: [{ targeting_value: _ }],
                            } = o().quickPromote.targeting;
                        if (K.includes(o().ads.typeahead.forecastAudience[u]?.fetchStatus) || !s || !d) return Promise.resolve();
                        const b = Math.round(1e6 * c),
                            h = b,
                            A = $(o());
                        return (
                            (0, y.hq)(t)(y.Ur.audienceEstimateCall({ dailyBudgetMicros: b, totalBudgetMicros: h, ageBucket: d, gender: p, keywords: g, location: _, objective: n })),
                            (0, m.zk)("forecastAudience", e(v.getTypeaheadResults(u, { userId: s, adAccountId: parseInt(l, 10).toString(36), dailyBudgetMicros: `${b}`, totalBudgetMicros: `${h}`, currency: i ?? "USD", targeting: A, objective: n }))).then(() => {
                                const e = o().ads.typeahead.forecastAudience[u]?.result?.estimatedImpressions;
                                e ? (0, y.hq)(t)(y.Ur.audienceEstimateSuccess({ dailyBudgetMicros: b, totalBudgetMicros: h, ageBucket: d, gender: p, keywords: g, location: _, estimatedImpressions: e, objective: n })) : (0, y.hq)(t)(y.Ur.audienceEstimateFail({ dailyBudgetMicros: b, totalBudgetMicros: h, ageBucket: d, gender: p, keywords: g, location: _, objective: n }));
                            })
                        );
                    },
                W =
                    (e, t) =>
                    (t, o, { api: r }) => {
                        const { objective: n } = o().quickPromote,
                            { currency: i } = o().quickPromote.budget,
                            c = (0, a.WK)(e)(o()),
                            { user_id: u } = o().session,
                            s = o().quickPromote.account.adsAccount?.id,
                            { ageBucket: l } = o().quickPromote.targeting;
                        if (K.includes(o().ads.typeahead.forecastAudience[c]?.fetchStatus) || !u || !l) return Promise.resolve();
                        const d = Math.round(1e6 * e),
                            p = d,
                            g = $(o());
                        return (0, m.zk)("forecastAudience", t(v.getTypeaheadResults(c, { userId: u, adAccountId: parseInt(s, 10).toString(36), dailyBudgetMicros: `${d}`, totalBudgetMicros: `${p}`, currency: i ?? "USD", targeting: g, objective: n }))).then(() => {});
                    };
            function $(e) {
                const { ageBucket: t, contextualKeywords: o, gender: r, keywords: n, targetedLocations: a } = e.quickPromote.targeting;
                return { geos: a.map(({ targeting_value: e }) => ({ location_id: e })), age_buckets: [{ age_bucket: t }], gender: { gender: r }, keywords: n.map((e) => ({ keyword: e })), contextual_entities: o.map((e) => ({ entity: e })) };
            }
            const Y =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        const { quickPromote: n } = o(),
                            {
                                budget: { currency: a, dailyBudget: i, durationDays: c },
                                objective: u,
                                targeting: { ageBucket: s, gender: l, keywords: d, targetedLocations: p },
                            } = n;
                        return r.set("rweb.quickPromoteRedirectBack", e ? { platformType: e, ageBucket: s, gender: l, keywords: d, targetedLocations: p, dailyBudget: i, durationDays: c, objective: u, lastPersisted: new Date().getTime(), currency: a } : null);
                    },
                H =
                    (e, t, o) =>
                    (r, n, { featureSwitches: a, userPersistence: i }) =>
                        i
                            .get("rweb.quickPromoteRedirectBack")
                            .catch(() => {})
                            .then((r) => {
                                const { eligibility: a } = n().quickPromote.eligibility[t] || { eligibilityFetchStatus: b.ZP.NONE, eligibility: void 0 };
                                R(a) && o.replace((0, y.gC)(e, t));
                            }),
                J =
                    (e, t, o, r, n, i, c) =>
                    (u, s, { featureSwitches: l, userPersistence: d }) =>
                        d
                            .get("rweb.quickPromoteRedirectBack")
                            .catch(() => {})
                            .then((d) => {
                                if (_()) {
                                    const { eligibility: r } = s().quickPromote.eligibility[t] || { eligibilityFetchStatus: b.ZP.NONE, eligibility: void 0 };
                                    if (U(r)) {
                                        if ("true" === i.pa_signup_complete) return (0, y.hq)(c)(y.Ur.professionalAccountsNotRetrieved()), void n.replace((0, y.gC)(e, t));
                                        {
                                            (0, y.hq)(c)(y.Ur.professionalAccountsSignup());
                                            const e = { requested_variant: `qp-${t}-${o === y.ZV.Webview ? "true" : "false"}` },
                                                r = encodeURIComponent(JSON.stringify(e));
                                            return void n.replace(`/i/flow/convert_to_professional?input_flow_data=${r}`);
                                        }
                                    }
                                    if (R(r)) return (0, y.hq)(c)(y.Ur.professionalAccountsIneligible()), void n.replace((0, y.gC)(e, t));
                                    (0, y.hq)(c)(y.Ur.professionalAccountsEligible());
                                }
                                if (d && d.platformType && d.lastPersisted && new Date().getTime() - d.lastPersisted < 36e5) {
                                    const { ageBucket: o, currency: r, dailyBudget: i, durationDays: c, gender: l, keywords: p, objective: g, platformType: _, targetedLocations: m } = d,
                                        { currency: b } = s().quickPromote.budget;
                                    u((0, a.mS)(g)), u((0, a.e3)({ ageBucket: o, gender: l, keywords: p, targetedLocations: m })), r === b ? (u((0, a.Uc)({ dailyBudget: i, durationDays: c })), n.replace((0, y.WS)(e, t, _, y.MN.BudgetSelect))) : (u((0, a.Uc)({ errorMessage: Z })), n.replace((0, y.WS)(e, t, _, y.MN.BudgetSelect)));
                                } else {
                                    const a = l.isTrue("responsive_web_qp_two_screens_enabled") ? y.MN.Targeting : y.MN.Intro;
                                    r !== a && n.replace((0, y.WS)(e, t, r ? o : y.ZV.Rweb, a));
                                }
                            }),
                X =
                    ({ statusId: e }) =>
                    (t, o, { api: r, featureSwitches: n }) => {
                        const { eligibility: i, eligibilityFetchStatus: c } = o().quickPromote.eligibility[e] || { eligibilityFetchStatus: b.ZP.NONE, eligibility: void 0 };
                        if (c === b.ZP.LOADING) return Promise.resolve();
                        if (c === b.ZP.LOADED) {
                            const e = D.ZP.selectViewerUser(o()),
                                t = !e?.professional,
                                r = !!e?.professional;
                            if (t === U(i) || (r && ((e) => M.includes(e))(i))) return Promise.resolve();
                        }
                        return (0, m.zk)("fetchQuickPromoteEligibility", t((0, a.pY)({ tweetId: e })), "shared-promise");
                    },
                ee =
                    (e, t, o) =>
                    (e, t, { api: r, featureSwitches: n }) =>
                        !o && K.includes(t().quickPromote.account.accountDataFetchStatus)
                            ? Promise.resolve()
                            : (e((0, a.Yv)(b.ZP.LOADING)),
                              (0, m.zk)("fetchAdsAccountForUserGraphQl", te(r))
                                  .then((t) => {
                                      if (!t) return;
                                      const { adsAccount: o, campaigns: r, fundingInstruments: n } = t;
                                      return e((0, a.hs)(o)), e((0, a.au)(n)), e((0, a.k6)(n[0] || null)), e((0, a.P6)(r)), o.isHousingAndUrbanDevelopmentLimitations && e((0, a.l$)(G.s.AGE_OVER_18)), e(ce(!0));
                                  })
                                  .then(() => e((0, a.Yv)(b.ZP.LOADED)))
                                  .catch((t) => {
                                      throw (e((0, a.Yv)(b.ZP.FAILED)), t);
                                  })),
                te = (e) =>
                    e
                        .withEndpoint(d.Z)
                        .getAdAccounts({})
                        .then((e) => {
                            const t = e.quick_promote_advertiser_accounts?.items.filter((e) => e.country_code && e.timezone)[0];
                            if (!t || !t.country_code || !t.timezone) return;
                            const { campaigns: o, country_code: r, funding_sources: n, permissions: a, perspective: i, quick_promote_needs_vat: c, rest_id: u, timezone: s } = t,
                                l = { country_code: r, id: u, timezone: s, needs_vat: !!c, isCanWriteBilling: a?.permission_set.includes("AccountAdmin") ?? !0, isHousingAndUrbanDevelopmentLimitations: i?.features.includes("HousingAndUrbanDevelopmentLimitations") ?? !1 },
                                d =
                                    n?.slice?.items
                                        ?.map((e) => {
                                            const { credit_limit: t, currency: o, description: r, is_able_to_fund: n, is_in_app_purchase: a, rest_id: i, type: c } = e,
                                                u = ((e) => {
                                                    if (e) return F[e];
                                                })(c);
                                            if (i && o && u && r && n && !1 === a && !/no payment method/.test(r) && ("CREDIT_CARD" !== u || (t && !(t <= 0)))) return { credit_limit_local_micro: t ?? null, currency: o, description: r, id: i, type: u };
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
                oe = (e) => (t, o) => {
                    t((0, a.zu)(e));
                    const r = (0, I.VT)(o());
                    return (0, m.zk)("targetingLocation", t(S.getTypeaheadResults(e, { query: e, lang: r })));
                },
                re =
                    () =>
                    (e, t, { api: o, scribe: r }) => {
                        if (K.includes(t().quickPromote.targeting.initialTargetedLocationsFetchStatus) || t().quickPromote.targeting.targetedLocations.length) return Promise.resolve();
                        const n = (0, I.GG)(t()) || "US",
                            i = (0, I.VT)(t());
                        return (
                            e((0, a.Dg)(b.ZP.LOADING)),
                            (0, m.zk)(
                                "fetchCurrentTargetingLocation",
                                o
                                    .withEndpoint(l)
                                    .getTargetableLocations({ countryCode: n, lang: i, locationType: "COUNTRIES" })
                                    .then((e) => (e.length ? e : o.withEndpoint(l).getTargetableLocations({ countryCode: "US", lang: i, locationType: "COUNTRIES" })))
                                    .then((o) => {
                                        if (!o.length) {
                                            const e = Error("Could not find targetable country for US!");
                                            throw ((0, p.ZP)(e), e);
                                        }
                                        if (t().quickPromote.targeting.targetedLocations.length) return Promise.resolve();
                                        e((0, a.hI)(o)), e((0, a.Dg)(b.ZP.LOADED));
                                    }),
                            ).catch((t) => {
                                throw (e((0, a.Dg)(b.ZP.FAILED)), t);
                            })
                        );
                    },
                ne =
                    () =>
                    (e, t, { api: o }) => {
                        if (K.includes(t().quickPromote.budget.availableBudgetsFetchStatus)) return Promise.resolve();
                        e((0, a.b2)(b.ZP.LOADING));
                        const r = (0, a.QE)(t());
                        return (0, m.zk)("fetchAvailableBudgets", o.withEndpoint(d.Z).getBudgets({ countryCode: r }))
                            .then(({ budgets: t, currencyCode: o, defaultBudget: r }) => {
                                e((0, a.ni)(t, o)), e((0, a.p_)(r)), e((0, a.b2)(b.ZP.LOADED));
                            })
                            .catch((t) => {
                                throw (e((0, a.b2)(b.ZP.FAILED)), t);
                            });
                    },
                ae =
                    (e) =>
                    (t, o, { api: r, featureSwitches: n }) => {
                        const { couponsFetchStatus: i } = o().quickPromote;
                        return K.includes(i)
                            ? Promise.resolve()
                            : (t((0, a.PU)(b.ZP.LOADING)),
                              (0, m.zk)(
                                  "fetchCoupons",
                                  r
                                      .withEndpoint(d.Z)
                                      .getCoupons({})
                                      .then((o) => {
                                          t((0, a._B)(o)), t((0, a.PU)(b.ZP.LOADED)), (0, y.hq)(e)(y.Ur.fetchCouponSuccess(o?.eligible_coupon));
                                      })
                                      .catch((o) => {
                                          t((0, a._B)()), t((0, a.PU)(b.ZP.LOADED)), (0, y.hq)(e)(y.Ur.fetchCouponFailed(o));
                                      }),
                              ));
                    };
            const ie =
                    (e) =>
                    (t, o, { api: r, featureSwitches: n }) => {
                        const { enrollCouponStatus: i } = o().quickPromote;
                        return K.includes(i)
                            ? Promise.resolve()
                            : (t((0, a.kn)(b.ZP.LOADING)),
                              (0, m.zk)(
                                  "enrollCoupon",
                                  r
                                      .withEndpoint(d.Z)
                                      .enrollCoupon({})
                                      .then((o) => {
                                          const r = o.quick_promote_enroll_coupons;
                                          if ("QuickPromoteCouponEnrollmentError" === r?.__typename) {
                                              const { error_code: o } = r;
                                              t((0, a.qA)(o)), (0, y.hq)(e)(y.Ur.enrollCouponFail(o));
                                          } else if ("QuickPromoteCouponEnrollmentDetails" === r?.__typename) {
                                              const n = r.available_balance,
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
                                              t((0, a._B)({ existing_balance: n, pending_coupon: c })), t((0, a.qA)(null)), (0, y.hq)(e)(y.Ur.enrollCouponSuccess(i));
                                          }
                                          t((0, a.kn)(b.ZP.LOADED));
                                      })
                                      .catch((o) => {
                                          throw (t((0, a.qA)(z)), (0, y.hq)(e)(y.Ur.enrollCouponFail(z)), t((0, a.kn)(b.ZP.FAILED)), o);
                                      }),
                              ));
                    },
                ce =
                    (e) =>
                    (t, o, { api: r, featureSwitches: n }) => {
                        const {
                            account: { adsAccount: i },
                            paymentMethodsFetchStatus: c,
                        } = o().quickPromote;
                        if (!e && K.includes(c)) return Promise.resolve();
                        if (!i?.id) throw (t((0, a.rb)(b.ZP.FAILED)), Error("Missing ads account id"));
                        return (
                            t((0, a.rb)(b.ZP.LOADING)),
                            (0, m.zk)(
                                "fetchPaymentMethods",
                                r
                                    .withEndpoint(d.Z)
                                    .getPaymentMethods({ ads_account_id: parseInt(i.id, 10).toString(36) })
                                    .then((e) => {
                                        t((0, a.DA)(e)), t((0, a.rb)(b.ZP.LOADED));
                                    })
                                    .catch((e) => {
                                        throw (t((0, a.rb)(b.ZP.FAILED)), e);
                                    }),
                            )
                        );
                    },
                ue =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, m.zk)(
                            "deletePaymentMethod",
                            r
                                .withEndpoint(d.Z)
                                .deletePaymentMethod({ payment_method_id: e })
                                .then((e) => {
                                    if (e && !e.delete_payment_method?.success) throw Error(`Error deleting payment method ${e.delete_payment_method?.reason || ""}`);
                                    return t(ce(!0));
                                })
                                .catch((e) => {
                                    throw (t((0, L.fz)({ text: x })), e);
                                }),
                        ),
                se =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, m.zk)(
                            "setDefaultPaymentMethod",
                            r
                                .withEndpoint(d.Z)
                                .setDefaultPaymentMethod({ payment_method_id: e })
                                .then((o) => {
                                    if (o && !o.set_payment_method_as_default?.changed) throw Error(`Error setting payment method ${e} as default because ${o.set_payment_method_as_default?.reason || ""}`);
                                    return t(ce(!0));
                                })
                                .catch((e) => {
                                    throw (t((0, L.fz)({ text: x })), e);
                                }),
                        );
        },
        315032: (e, t, o) => {
            "use strict";
            o.d(t, { CH: () => c, E4: () => i, Y0: () => r, gT: () => a, s: () => n });
            const r = Object.freeze({ Any: "AnyGender", Male: "Male", Female: "Female" }),
                n = Object.freeze({ AGE_18_TO_24: "Age18To24", AGE_18_TO_34: "Age18To34", AGE_18_TO_49: "Age18To49", AGE_18_TO_54: "Age18To54", AGE_21_TO_34: "Age21To34", AGE_21_TO_49: "Age21To49", AGE_21_TO_54: "Age21To54", AGE_25_TO_49: "Age25To49", AGE_25_TO_54: "Age25To54", AGE_35_TO_49: "Age35To49", AGE_35_TO_54: "Age35To54", AGE_OVER_18: "AgeOver18", AGE_OVER_21: "AgeOver21", AGE_OVER_25: "AgeOver25", AGE_OVER_35: "AgeOver35", AGE_OVER_50: "AgeOver50" }),
                a = Object.freeze({ [n.AGE_18_TO_24]: { minAge: "18", maxAge: "24" }, [n.AGE_18_TO_34]: { minAge: "18", maxAge: "34" }, [n.AGE_18_TO_49]: { minAge: "18", maxAge: "49" }, [n.AGE_18_TO_54]: { minAge: "18", maxAge: "54" }, [n.AGE_21_TO_34]: { minAge: "21", maxAge: "34" }, [n.AGE_21_TO_49]: { minAge: "21", maxAge: "49" }, [n.AGE_21_TO_54]: { minAge: "21", maxAge: "54" }, [n.AGE_25_TO_49]: { minAge: "25", maxAge: "49" }, [n.AGE_25_TO_54]: { minAge: "25", maxAge: "54" }, [n.AGE_35_TO_49]: { minAge: "35", maxAge: "49" }, [n.AGE_35_TO_54]: { minAge: "35", maxAge: "54" }, [n.AGE_OVER_18]: { minAge: "18" }, [n.AGE_OVER_21]: { minAge: "21" }, [n.AGE_OVER_25]: { minAge: "25" }, [n.AGE_OVER_35]: { minAge: "35" }, [n.AGE_OVER_50]: { minAge: "50" } }),
                i = Object.freeze({ 18: { 24: n.AGE_18_TO_24, 34: n.AGE_18_TO_34, 49: n.AGE_18_TO_49, 54: n.AGE_18_TO_54, over: n.AGE_OVER_18 }, 21: { 34: n.AGE_21_TO_34, 49: n.AGE_21_TO_49, 54: n.AGE_21_TO_54, over: n.AGE_OVER_21 }, 25: { 49: n.AGE_25_TO_49, 54: n.AGE_25_TO_54, over: n.AGE_OVER_25 }, 35: { 49: n.AGE_35_TO_49, 54: n.AGE_35_TO_54, over: n.AGE_OVER_35 }, 50: { over: n.AGE_OVER_50 } }),
                c = Object.freeze({ Engagements: "Engagements", Followers: "Followers", WebsiteClicks: "WebsiteClicks" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose.fb7dc2ca.js.map
