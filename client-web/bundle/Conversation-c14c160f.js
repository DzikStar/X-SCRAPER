"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-c14c160f"],
    {
        752500: (e, t, n) => {
            n.d(t, { $D: () => G, HB: () => W, R9: () => H, Sy: () => J, Uk: () => I, Ul: () => z, Un: () => F, WF: () => V, Wl: () => Z, d2: () => U, ep: () => Q, ib: () => E, mL: () => M, n9: () => R, nW: () => T, sA: () => B, sV: () => Y, xE: () => K });
            var o = n(976145),
                c = n(111677),
                i = n.n(c),
                a = n(163889),
                r = n(427266),
                u = n(943245);
            const s = i().e8702feb,
                m = i().e44dc579,
                g = i().hd8df545,
                l = i().f1d32e41,
                d = i().c4d0434b,
                p = (i().dc4a9413, i().ga845597),
                f = i().bad70c09,
                h = i().c133a39b,
                _ = i().ee5da8f5,
                y = i().g4bf9cb7,
                b = (i().gc3ce5d9, i().e1945a89),
                v = i().c1778029,
                w = ({ formattedAge: e, gender: t, keywords: n, locations: o, locationsHeading: c, newlinePlaceholder: i }) => `${c}: ${o}${i}Age range: ${e}${i}Gender: ${t}${i}Keywords: ${n}`,
                S = i().f1d32e41,
                x = i().a4ab12b9,
                j = i().cb51c854,
                k = i().bb7b39e2,
                A = i().eb9466d0,
                L = i().c21037d0,
                $ = i().b07cc9f2,
                D = i().ce309bee,
                P = i().c6c16a52,
                O = i().cc49d030,
                C = i().c3fca124,
                q = i().d4f57cce,
                N = i().c6daa762;
            function T(e) {
                switch (e) {
                    case "AnyGender":
                        return j;
                    case "Male":
                        return k;
                    case "Female":
                        return A;
                    default:
                        return (0, a.ZP)(`Unknown gender: ${e}`), e;
                }
            }
            function B(e) {
                switch (e) {
                    case "COUNTRIES":
                        return L;
                    case "REGIONS":
                        return $;
                    case "METROS":
                        return D;
                    case "CITIES":
                        return P;
                    case "POSTAL_CODES":
                        return O;
                    default:
                        return (0, a.ZP)(`Unknown targeting locationType: ${e}`), e;
                }
            }
            function J({ amount: e, currency: t, fractionDigits: n, lang: o }) {
                return e.toLocaleString((0, u.It)(o), { currency: t, style: "currency", maximumFractionDigits: void 0 !== n ? n : 2, minimumFractionDigits: void 0 !== n ? n : 2 });
            }
            function I({ couponAmount: e, currency: t, lang: n }) {
                const o = J({ amount: e, lang: n, currency: t, fractionDigits: 0 });
                return s({ couponAmount: o });
            }
            function M({ coupon: e, enrolByDate: t, lang: n }) {
                const o = J({ amount: e.total_amount, lang: n, currency: e.currency_code, fractionDigits: 0 });
                return m({ couponAmount: o, date: i().ba2e82a1(t) });
            }
            function z({ coupon: e, enrolByDate: t, lang: n }) {
                const o = J({ amount: e.total_amount, lang: n, currency: e.currency_code, fractionDigits: 0 });
                return g({ couponAmount: o, date: i().ba2e82a1(t) });
            }
            function G({ coupon: e, lang: t }) {
                const n = J({ amount: e.credit_amount, lang: t, currency: e.currency_code, fractionDigits: 0 }),
                    o = J({ amount: e.spend_amount, lang: t, currency: e.currency_code, fractionDigits: 0 });
                return l({ couponAmount: n, spendAmount: o });
            }
            function Z({ currency: e, dailyBudgetNum: t, durationDays: n, lang: o }) {
                const c = J({ amount: t, lang: o, currency: e, fractionDigits: 0 });
                return d({ dailyBudget: c, durationLabel: U({ durationDays: n }) });
            }
            function E({ durationDays: e }) {
                return p({ durationLabel: U({ durationDays: e }) });
            }
            function F({ numLocations: e }) {
                const t = i().ia24dc8d(e);
                return f({ numLocations: t });
            }
            function R({ maxAge: e, minAge: t }) {
                return e ? h({ minAge: t, maxAge: e }) : _({ minAge: t });
            }
            function U({ durationDays: e }) {
                const t = i().ia24dc8d(e);
                return y({ durationDays: t });
            }
            function K({ high: e, low: t }) {
                const n = i().cf8abf59(t),
                    o = i().cf8abf59(e);
                return b({ audienceLow: n, audienceHigh: o });
            }
            function W({ formattedAge: e, gender: t, locations: n }) {
                const c = n.length;
                return v({ newlinePlaceholder: "\n", locations: (0, o.Z)(n), locationsHeading: F({ numLocations: c }), formattedAge: e, gender: t });
            }
            function H({ formattedAge: e, gender: t, keywords: n, locations: c }) {
                const i = c.length;
                return w({ newlinePlaceholder: "\n", locations: (0, o.Z)(c), locationsHeading: F({ numLocations: i }), formattedAge: e, gender: t, keywords: (0, o.Z)(n) });
            }
            function V(e) {
                switch (e) {
                    case "Engagements":
                        return C;
                    case "Followers":
                        return q;
                    case "WebsiteClicks":
                        return N;
                    default:
                        throw (0, r.q8)(e);
                }
            }
            function Q({ calloutType: e, couponAmount: t, currency: n, lang: o, spendAmount: c }) {
                const i = J({ amount: t, lang: o, currency: n, fractionDigits: 0 }),
                    a = J({ amount: c, lang: o, currency: n, fractionDigits: 0 });
                return "eligibleCoupon" === e ? S({ couponAmount: i, spendAmount: a }) : x({ couponAmount: i, spendAmount: a });
            }
            function Y({ calloutType: e, couponAmount: t, currency: n, lang: o, spendAmount: c }) {
                const i = J({ amount: t, lang: o, currency: n, fractionDigits: 0 }),
                    a = J({ amount: c, lang: o, currency: n, fractionDigits: 0 });
                return x({ couponAmount: i, spendAmount: a });
            }
        },
        192731: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { introButton: "introButton", nextButton: "nextButton", objectiveScreen: "objectiveScreen", targetingScreen: "targetingScreen", getObjective: (e) => `objectiveScreenObjective${e}`, targetingLocationScreen: "targetingLocationScreen", targetingGenderScreen: "targetingGenderScreen", targetingKeywordsScreen: "targetingKeywordsScreen", budgetSelectScreen: "budgetSelectScreen", reviewScreen: "reviewScreen", reviewButton: "reviewButton", reviewObjectiveDescription: "reviewObjectiveDescription", reviewTargetingDescription: "reviewTargetingDescription", reviewBudgetAndDurationDescription: "reviewBudgetAndDurationDescription", reviewPaymentPivot: "reviewPaymentPivot", reviewPromotionTotalDescription: "reviewPromotionTotalDescription", targetingLocationPivot: "targetingLocationPivot", targetingGenderPivot: "targetingGenderPivot", targetingKeywordsPivot: "targetingKeywordsPivot", backButton: "backButton", targetingLocationSearch: "targetingLocationSearch", targetingLocationItem: "targetingLocationItem", getTargetingGender: (e) => `targetingGenderScreenGender${e}`, targetingKeywordsInput: "targetingKeywordsInput", paymentMethodSelect: "paymentMethodSelect", dropoffScreen: "dropoffScreen" };
        },
        202205: (e, t, n) => {
            n.d(t, { ZV: () => ne, D_: () => oe, MN: () => te, cU: () => ge, gC: () => X, bx: () => ve, C0: () => be, Jy: () => le, lg: () => ce, WS: () => Y, s0: () => fe, YZ: () => re, Mi: () => ee, Ur: () => o, EP: () => se, hq: () => me });
            var o = {};
            n.r(o), n.d(o, { audienceEstimateCall: () => R, audienceEstimateFail: () => K, audienceEstimateSuccess: () => U, back: () => y, boostCreationClick: () => G, budgetSelectPageLoad: () => g, donePageLoad: () => f, dropOffScreenCancel: () => _, dropOffScreenConfirm: () => h, enrollCouponFail: () => M, enrollCouponSuccess: () => I, fetchCouponFailed: () => J, fetchCouponSuccess: () => B, goalSelectionPageLoad: () => m, graphQlFetchReturnedInvalidData: () => T, introPageLoad: () => r, liteLoadFail: () => w, pageLoadFail: () => v, paymentMethodChanged: () => V, paymentMethodDeleted: () => Q, paymentPageLoad: () => l, paymentPageLoadAddingCard: () => d, paymentSelectPageLoad: () => H, professionalAccountsEligible: () => x, professionalAccountsIneligible: () => j, professionalAccountsNotRetrieved: () => k, professionalAccountsSignup: () => S, promotionCall: () => Z, promotionClick: () => z, promotionError: () => E, promotionSuccess: () => F, qpExperimentIntro: () => W, reload: () => b, reviewPageLoad: () => p, setBudgetDuration: () => C, setDailyBudget: () => q, setPromoteGoal: () => A, setTargetingAgeBucket: () => D, setTargetingGender: () => P, setTargetingKeywords: () => O, setTargetingLocation: () => L, targetingLocationInvalid: () => N, targetingLocationPageLoad: () => s, targetingLocationSearch: () => $, targetingPageLoad: () => u });
            n(136728);
            var c = n(688715),
                i = n(323265),
                a = n(163889);
            function r(e) {
                return { component: "intro", element: "page", action: "load", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function u() {
                return { component: "targeting", element: "page", action: "load" };
            }
            function s() {
                return { component: "targeting_location", element: "page", action: "load" };
            }
            function m() {
                return { component: "objective", element: "page", action: "load" };
            }
            function g() {
                return { component: "budget_select", element: "page", action: "load" };
            }
            function l(e) {
                return { component: "payment", element: "page", action: "load", data: { context: e, event_info: e } };
            }
            function d() {
                return { component: "payment", element: "page", action: "load", data: { context: "isAddingCard", event_info: "isAddingCard" } };
            }
            function p(e) {
                return { component: "review", element: "page", action: "load", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function f() {
                return { component: "done", element: "page", action: "load" };
            }
            function h() {
                return { component: "drop_off_screen", element: "interaction", action: "close" };
            }
            function _() {
                return { component: "drop_off_screen", element: "interaction", action: "back" };
            }
            function y(e) {
                return { component: e, element: "interaction", action: "back" };
            }
            function b(e) {
                return { component: e, element: "interaction", action: "reload" };
            }
            function v(e) {
                return { component: "intro", element: "page", action: "fail", data: { context: e, event_info: e } };
            }
            function w(e) {
                return { component: "lite", element: "page", action: "fail", data: { context: e, event_info: e } };
            }
            function S() {
                return { component: "professional_accounts", element: "page", action: "change" };
            }
            function x() {
                return { component: "professional_accounts", element: "page", action: "success" };
            }
            function j() {
                return { component: "professional_accounts", element: "page", action: "fail" };
            }
            function k() {
                return { component: "professional_accounts", element: "page", action: "error" };
            }
            function A(e) {
                return { component: "objective", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function L(e) {
                return { component: "targeting_location", element: "interaction", action: "change", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function $(e) {
                return { component: "targeting_location", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function D(e) {
                return { component: "targeting_age", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function P(e) {
                return { component: "targeting_gender", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function O(e) {
                return { component: "targeting_keywords", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function C(e) {
                return { component: "budget_select_days", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function q(e) {
                return { component: "budget_select_daily_budget", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function N() {
                return { component: "targeting_location", element: "interaction", action: "invalid" };
            }
            function T(e) {
                return { component: "intro", element: "use_gql_ads_account_data", action: "error", data: { context: e, event_info: e } };
            }
            function B(e) {
                return { component: "intro", element: "fetch_coupon", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function J(e) {
                return { component: "intro", element: "fetch_coupon", action: "fail", data: { context: e, event_info: e } };
            }
            function I(e) {
                return { component: "review", element: "enroll_coupon", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function M(e) {
                return { component: "review", element: "enroll_coupon", action: "fail", data: { context: e, event_info: e } };
            }
            function z() {
                return { component: "review", element: "promotion", action: "click" };
            }
            function G() {
                return { component: "boost", element: "promotion", action: "click" };
            }
            function Z(e) {
                return { component: "review", element: "promotion", action: "call", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function E(e) {
                return { component: "review", element: "promotion", action: "error", data: { context: e, event_info: e } };
            }
            function F(e) {
                return { component: "review", element: "promotion", action: "success", data: { context: e, event_info: e } };
            }
            function R(e) {
                return { component: "budget_select", element: "audience_estimate", action: "call", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function U(e) {
                return { component: "budget_select", element: "audience_estimate", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function K(e) {
                return { component: "budget_select", element: "audience_estimate", action: "fail", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function W(e) {
                return { component: "experiment", element: "intro_skip", action: e ? "enabled" : "disabled" };
            }
            function H() {
                return { component: "payment_select", element: "page", action: "load" };
            }
            function V(e) {
                return { component: "payment_select", element: "change_payment_method", action: e ? "fail" : "success", data: e ? { context: e, event_info: e } : void 0 };
            }
            function Q(e) {
                return { component: "payment_select", element: "delete_payment_method", action: e ? "fail" : "success", data: e ? { context: e, event_info: e } : void 0 };
            }
            function Y(e, t, n, o) {
                return `/${e}/status/${t}/${n}/${o}`;
            }
            function X(e, t) {
                return `/${e}/status/${t}/analytics`;
            }
            const ee = (e, t) => (t, n, o, c) => {
                const i = (function (e, t, n, o) {
                    switch (o) {
                        case "intro":
                        case "objective":
                        case "targeting":
                            return X(e, t);
                        case "budget_select":
                        case "targeting_location":
                        case "targeting_gender":
                        case "targeting_keywords":
                            return Y(e, t, n, te.Targeting);
                        case "review":
                            return Y(e, t, n, te.BudgetSelect);
                        case "payment":
                        case "payment_select":
                        case "done":
                            return Y(e, t, n, te.Review);
                        default:
                            (0, a.ZP)(`handleGoBack: screenType ${o} is invalid`);
                    }
                })(t, n, o, c);
                e.goBack({ backLocation: i });
            };
            const te = Object.freeze({ Intro: "intro", Objective: "objective", Targeting: "targeting", TargetingLocation: "targeting_location", TargetingGender: "targeting_gender", TargetingKeywords: "targeting_keywords", BudgetSelect: "budget_select", Review: "review", Payment: "payment", Done: "done", PaymentSelect: "payment_select" }),
                ne = Object.freeze({ Webview: "quick_promote", Rweb: "quick_promote_web" }),
                oe = Object.freeze({ Objective: 0.2, Targeting: 0.4, BudgetSelect: 0.6, Review: 0.8, Finish: 1 });
            function ce(e, t, n, o, c, i) {
                return e === ne.Webview ? { isSameHost: !1, url: c ? ie(n, window.location.hostname) : ae(window.location.hostname, t, n, o, i) } : { isSameHost: !0, url: c ? ie(n, window.location.hostname) : ae(window.location.hostname, t, n, o, i) };
            }
            const ie = (e, t) => (0, c.ju)(`https://${t}/i/tfb/v1/advertiser_signup/${ue()}/payment?tweetId=${e}&isAddingPayment=true`);
            function ae(e, t, n, o, i) {
                if (i && i.isTrue("responsive_web_qp_new_payment_enabled") && t?.id) return (0, c.ju)(`https://x.com/i/payments/${parseInt(t.id, 10).toString(36)}/quick-promote/new`);
                const a = (0, c.ju)(`https://${e}/i/tfb/v1/advertiser_signup`),
                    r = `?tweetId=${n}`,
                    u = ue();
                return t ? (t.timezone && t.country_code ? (o ? `${a}/${u}/vat${r}` : `${a}/${u}/payment${r}`) : `${a}/${u}/setup${r}`) : `${a}/${u}/create_account${r}`;
            }
            const re = (e) => (t, n, o) => {
                switch (o) {
                    case "quick_promote":
                    case "quick_promote_web":
                        return void e.push(X(t, n));
                    default:
                        (0, a.ZP)(`Unknown platformType: "${o}"`), e.push(X(t, n));
                }
            };
            function ue() {
                return i.ZP.isIOS() ? "ios" : i.ZP.isAndroid() ? "android" : "lite";
            }
            const se = { page: "quick_promote" },
                me = (e) => (t) => {
                    const n = i.ZP.osString(),
                        o = i.ZP.isTwitterApp();
                    e.scribe({ section: o ? `${n}-webview` : n, ...t, data: { url: window.location.href, ...t.data } });
                },
                ge = Object.freeze({ CurrentCountryMatch: "currentCountryMatch", Match: "match", NoMatch: "noMatch" }),
                le = (e) => (t, n, o) => (t.toLowerCase().includes(o.toLowerCase()) ? (e.toLowerCase() === n.toLowerCase() ? ge.CurrentCountryMatch : ge.Match) : ge.NoMatch),
                de = Object.freeze({ AU: (0, c.ju)("https://legal.x.com/ads-terms/apac.html"), BR: (0, c.ju)("https://legal.x.com/ads-terms/brazil.html"), GB: (0, c.ju)("https://legal.x.com/ads-terms/uk.html"), ID: (0, c.ju)("https://legal.x.com/ads-terms/indonesia.html"), JP: (0, c.ju)("https://legal.x.com/ads-terms/japan.html"), NZ: (0, c.ju)("https://legal.x.com/ads-terms/apac.html"), US: (0, c.ju)("https://legal.x.com/ads-terms/us.html") }),
                pe = (0, c.ju)("https://legal.x.com/ads-terms/international.html");
            function fe(e) {
                return (e && de[e]) || pe;
            }
            const he = Object.freeze({ en: (0, c.ju)("https://business.x.com/en/campaign/quick-promote-conditional-coupon-terms.html"), de: (0, c.ju)("https://business.x.com/de/campaign/quick-promote-conditional-coupon-terms.html"), es: (0, c.ju)("https://business.x.com/es/campaign/quick-promote-conditional-coupon-terms.html"), fr: (0, c.ju)("https://business.x.com/fr/campaign/quick-promote-conditional-coupon-terms.html"), ja: (0, c.ju)("https://business.x.com/ja/campaign/quick-promote-conditional-coupon-terms.html"), pt: (0, c.ju)("https://business.x.com/pt/campaign/quick-promote-conditional-coupon-terms.html"), ar: (0, c.ju)("https://business.x.com/ar/campaign/quick-promote-conditional-coupon-terms.html"), "zh-cn": (0, c.ju)("https://business.x.com/zh-cn/campaign/quick-promote-conditional-coupon-terms.html") }),
                _e = Object.freeze({ en: (0, c.ju)("https://business.x.com/en/campaign/quick-promote-coupon-terms.html"), de: (0, c.ju)("https://business.x.com/de/campaign/quick-promote-coupon-terms.html"), es: (0, c.ju)("https://business.x.com/es/campaign/quick-promote-coupon-terms.html"), fr: (0, c.ju)("https://business.x.com/fr/campaign/quick-promote-coupon-terms.html"), ja: (0, c.ju)("https://business.x.com/ja/campaign/quick-promote-coupon-terms.html"), pt: (0, c.ju)("https://business.x.com/pt/campaign/quick-promote-coupon-terms.html"), ar: (0, c.ju)("https://business.x.com/ar/campaign/quick-promote-coupon-terms.html"), "zh-cn": (0, c.ju)("https://business.x.com/zh-cn/campaign/quick-promote-coupon-terms.html") }),
                ye = ["en", "de", "es", "fr", "pt", "ja", "ar", "da", "ko", "ru", "zh-cn", "zh-tw", "tr", "no", "sv"];
            function be(e) {
                const t = e.toLowerCase(),
                    n = ye.find((e) => e.startsWith(t)) ? t : "en";
                return (0, c.ju)(`https://business.x.com/${n}/help/ads-policies/campaign-considerations/housing-lending-and-employment-opportunities.html`);
            }
            function ve(e, t) {
                return "conditionalCoupon" === t ? (e && he[e]) || he.en : (e && _e[e]) || he.en;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-c14c160f.bb40879a.js.map
