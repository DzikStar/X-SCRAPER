"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-c0214baf"],
    {
        861624: (e, t, n) => {
            n.r(t), n.d(t, { QuickPromoteScreen: () => K, default: () => Q });
            n(571372);
            var r = n(202784),
                o = n(325686),
                c = n(107267),
                a = n(782261),
                i = n(420740),
                s = n(786998),
                u = n(370006),
                d = n(822399),
                l = n(154003),
                g = n(392237),
                m = n(111677),
                h = n.n(m),
                p = n(143778),
                f = n(290402),
                y = n(980407),
                w = n(443781),
                P = n(702001),
                _ = n(427266),
                b = n(441408),
                v = n(315032),
                D = n(312771),
                S = n(152831),
                Z = n(370867),
                E = n(764940),
                A = n(980151),
                k = n(546281),
                R = n(187296),
                B = n(564313),
                L = n(318069),
                N = n(695823),
                T = n(728300),
                I = n(953884),
                O = n(861286),
                C = n(301080),
                q = n(3918),
                H = n(963379),
                x = n(489601),
                G = n(457637),
                M = n(363895);
            const $ = h().d948b978,
                j = h().cfcdb4a2,
                F = h().h1fcb36c,
                U = h().c1df579e;
            class K extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isLoaded: !1 }),
                        (this._getRetweetOrTweet = () => {
                            const { tweet: e } = this.props;
                            return e ? a.Z.getOriginalTweet(e) : e;
                        }),
                        (this._render = () => {
                            const { history: e } = this.props,
                                t = this._getRetweetOrTweet();
                            return !t || (t && t.user.id_str !== this.context.viewerUserId) ? r.createElement(y.Z, { history: e, onBackClick: this._handleGoBack, title: F }, r.createElement(i.Z, { onRetry: null, title: $ })) : this._renderPage();
                        }),
                        (this._renderHeader = p.Z),
                        (this._renderPage = () => {
                            const { match: e, promoteErrorCode: t, promoteFetchStatus: n } = this.props,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: c, statusId: a } = e.params,
                                i = (e) => (0, M.WS)(c, a, r, e);
                            switch (o) {
                                case "intro":
                                case "done":
                                    return this._renderSplashPage();
                                case "objective": {
                                    const e = i(M.MN.Targeting);
                                    return this._renderProgressPage(M.D_.Objective, e);
                                }
                                case "targeting": {
                                    const e = i(M.MN.BudgetSelect);
                                    return this._renderProgressPage(M.D_.Targeting, e);
                                }
                                case "budget_select": {
                                    const e = i(M.MN.Review);
                                    return this._renderProgressPage(M.D_.BudgetSelect, e);
                                }
                                case "review": {
                                    const e = [D.ZP.LOADING, D.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? M.D_.Finish : M.D_.Review);
                                }
                                case "payment":
                                    return this._renderProgressPage(M.D_.Review);
                                case "targeting_location":
                                case "targeting_gender":
                                case "targeting_keywords":
                                    return this._renderPopupPage();
                                case "payment_select":
                                    return this._renderNavigationPage();
                                default:
                                    throw (0, _.q8)(o);
                            }
                        }),
                        (this._renderProgressPage = (e, t) => {
                            const { history: n } = this.props;
                            return r.createElement(y.Z, { documentTitle: F, history: n, renderHeader: this._renderHeader }, r.createElement(s.Z, { leftControl: r.createElement(u.Z, { autofocus: !0, onClick: this._handleGoBack, testID: G.Z.backButton }) }), r.createElement(d.Z, { progress: e, style: W.progressBar }), r.createElement(o.Z, { style: W.noScrollView }, this._renderRoutes(), t && r.createElement(I.ZP, null, r.createElement(l.ZP, { link: t, size: "xLarge", style: W.nextButton, testID: G.Z.nextButton, type: "primaryFilled" }, U))));
                        }),
                        (this._renderNavigationPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: F, history: e, renderHeader: this._renderHeader }, r.createElement(s.Z, { leftControl: r.createElement(u.Z, { autofocus: !0, onClick: this._handleGoBack, testID: G.Z.backButton }) }), r.createElement(o.Z, { style: W.noScrollView }, this._renderRoutes()));
                        }),
                        (this._renderPopupPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: F, history: e, renderHeader: this._renderHeader }, this._renderRoutes());
                        }),
                        (this._renderSplashPage = () => this._renderRoutes()),
                        (this._renderRoutes = () => {
                            const { match: e } = this.props,
                                { quickPromoteScreenName: t } = e.params;
                            switch (t) {
                                case "intro":
                                    return r.createElement(c.Route, { component: k.Z });
                                case "objective":
                                    return r.createElement(c.Route, { component: B.ZP });
                                case "targeting":
                                    return r.createElement(c.Route, { component: C.ZP });
                                case "targeting_location":
                                    return r.createElement(c.Route, { component: x.Z });
                                case "targeting_gender":
                                    return r.createElement(c.Route, { component: q.ZP });
                                case "targeting_keywords":
                                    return r.createElement(c.Route, { component: H.Z });
                                case "budget_select":
                                    return r.createElement(c.Route, { component: Z.ZP });
                                case "review":
                                    return r.createElement(c.Route, { component: O.ZP });
                                case "payment":
                                    return r.createElement(c.Route, { component: N.ZP });
                                case "payment_select":
                                    return r.createElement(c.Route, { component: T.ZP });
                                case "done":
                                    return r.createElement(c.Route, { component: A.ZP });
                                default:
                                    throw (0, _.q8)(t);
                            }
                        }),
                        (this._handleGoBack = () => {
                            const { analytics: e, history: t, location: n, match: r } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: c, screenName: a, statusId: i } = r.params;
                            (0, M.hq)(e)(M.Ur.back(c)), (0, M.Mi)(t, n)(a, i, o, c);
                        }),
                        (this._handleRequestRetry = () => {
                            const { analytics: e, match: t } = this.props,
                                { quickPromoteScreenName: n } = t.params;
                            (0, M.hq)(e)(M.Ur.reload(n)), window.location.reload();
                        });
                }
                componentDidMount() {
                    const { analytics: e, createLocalApiErrorHandler: t, fetchAdsAccountDataIfNeeded: n, fetchAvailableBudgetsIfNeeded: r, fetchCouponsIfNeeded: o, fetchCurrentTargetingLocationIfNeeded: c, fetchQuickPromoteEligibilityIfNeeded: i, fetchTweetIfNeeded: s, match: u, promoteFetchStatus: d, setObjective: l, setPromoteFetchStatus: g, statusId: m, tweet: h } = this.props,
                        { quickPromoteScreenName: p } = u.params,
                        f = this.context.viewerUserId;
                    if (!f) return Promise.resolve();
                    if ((D.ZP.LOADED === d && p !== M.MN.Done && g(D.ZP.NONE), this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled"))) {
                        const e = h ? a.Z.getOriginalTweet(h) : h;
                        l(1 === e?.entities?.urls?.length ? v.CH.WebsiteClicks : v.CH.Engagements);
                    }
                    return (0, b.zk)(
                        "initial-load",
                        Promise.all([s(m), c(), n(f, e), o(e), i({ statusId: m })])
                            .then(() => r())
                            .then(() => {
                                const { handleFirstLoad: e } = this.props;
                                return e();
                            }),
                    )
                        .catch((n) => {
                            t(P.c)(n), (0, M.hq)(e)(M.Ur.pageLoadFail(n.message));
                        })
                        .finally(() => {
                            this.setState({ isLoaded: !0 });
                        });
                }
                render() {
                    const { analytics: e, fetchStatus: t, history: n, match: o } = this.props,
                        c = [M.MN.Done];
                    if (!this.context.viewerUserId) return this._render();
                    const a = (0, D.h1)(t, this.state.isLoaded ? D.ZP.LOADED : D.ZP.LOADING);
                    if (a === D.ZP.NONE) throw new Error("Quick Promote: should never have none state");
                    return a !== D.ZP.LOADED ? r.createElement(y.Z, { documentTitle: F, history: n, renderHeader: this._renderHeader }, r.createElement(R.s, null), r.createElement(L.J, null), r.createElement(f.Z, { fetchStatus: a, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: j })) : r.createElement(S.Z, { analytics: e, history: n, qpRouteParams: o.params, screensAllowedToNavigate: c }, r.createElement(f.Z, { fetchStatus: a, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: j }));
                }
            }
            K.contextType = w.rC;
            const W = g.default.create((e) => ({ progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: "hidden", flex: 1 }, nextButton: { marginBottom: e.spaces.space20, marginTop: e.spaces.space12 } })),
                Q = (0, E.Z)(K);
        },
        144528: (e, t, n) => {
            n.d(t, { $D: () => M, BQ: () => W, HB: () => Q, R9: () => V, Sy: () => q, Uk: () => H, Ul: () => G, Un: () => F, WF: () => z, Wl: () => j, d2: () => K, ep: () => J, hl: () => $, mL: () => x, n9: () => U, nW: () => O, sA: () => C, sV: () => X });
            var r = n(976145),
                o = n(111677),
                c = n.n(o),
                a = n(163889),
                i = n(427266),
                s = n(943245);
            const u = c().e8702feb,
                d = c().e44dc579,
                l = c().hd8df545,
                g = c().f1d32e41,
                m = c().c4d0434b,
                h = c().dc4a9413,
                p = c().bad70c09,
                f = c().c133a39b,
                y = c().ee5da8f5,
                w = c().g4bf9cb7,
                P = c().gc3ce5d9,
                _ = c().c1778029,
                b = ({ formattedAge: e, gender: t, keywords: n, locations: r, locationsHeading: o, newlinePlaceholder: c }) => `${o}: ${r}${c}Age range: ${e}${c}Gender: ${t}${c}Keywords: ${n}`,
                v = c().f1d32e41,
                D = c().a4ab12b9,
                S = c().cb51c854,
                Z = c().bb7b39e2,
                E = c().eb9466d0,
                A = c().c21037d0,
                k = c().b07cc9f2,
                R = c().ce309bee,
                B = c().c6c16a52,
                L = c().cc49d030,
                N = c().c3fca124,
                T = c().d4f57cce,
                I = c().c6daa762;
            function O(e) {
                switch (e) {
                    case "AnyGender":
                        return S;
                    case "Male":
                        return Z;
                    case "Female":
                        return E;
                    default:
                        return (0, a.ZP)(`Unknown gender: ${e}`), e;
                }
            }
            function C(e) {
                switch (e) {
                    case "COUNTRIES":
                        return A;
                    case "REGIONS":
                        return k;
                    case "METROS":
                        return R;
                    case "CITIES":
                        return B;
                    case "POSTAL_CODES":
                        return L;
                    default:
                        return (0, a.ZP)(`Unknown targeting locationType: ${e}`), e;
                }
            }
            function q({ amount: e, currency: t, fractionDigits: n, lang: r }) {
                return e.toLocaleString((0, s.It)(r), { currency: t, style: "currency", maximumFractionDigits: void 0 !== n ? n : 2, minimumFractionDigits: void 0 !== n ? n : 2 });
            }
            function H({ couponAmount: e, currency: t, lang: n }) {
                const r = q({ amount: e, lang: n, currency: t, fractionDigits: 0 });
                return u({ couponAmount: r });
            }
            function x({ coupon: e, enrolByDate: t, lang: n }) {
                const r = q({ amount: e.total_amount, lang: n, currency: e.currency_code, fractionDigits: 0 });
                return d({ couponAmount: r, date: c().ba2e82a1(t) });
            }
            function G({ coupon: e, enrolByDate: t, lang: n }) {
                const r = q({ amount: e.total_amount, lang: n, currency: e.currency_code, fractionDigits: 0 });
                return l({ couponAmount: r, date: c().ba2e82a1(t) });
            }
            function M({ coupon: e, lang: t }) {
                const n = q({ amount: e.credit_amount, lang: t, currency: e.currency_code, fractionDigits: 0 }),
                    r = q({ amount: e.spend_amount, lang: t, currency: e.currency_code, fractionDigits: 0 });
                return g({ couponAmount: n, spendAmount: r });
            }
            function $({ currency: e, durationDays: t, lang: n, totalBudgetNum: r }) {
                const o = q({ amount: r, lang: n, currency: e, fractionDigits: 0 });
                return h({ totalBudget: o, durationLabel: K({ durationDays: t }) });
            }
            function j({ currency: e, dailyBudgetNum: t, durationDays: n, lang: r }) {
                const o = q({ amount: t, lang: r, currency: e, fractionDigits: 0 });
                return m({ dailyBudget: o, durationLabel: K({ durationDays: n }) });
            }
            function F({ numLocations: e }) {
                const t = c().ia24dc8d(e);
                return p({ numLocations: t });
            }
            function U({ maxAge: e, minAge: t }) {
                return e ? f({ minAge: t, maxAge: e }) : y({ minAge: t });
            }
            function K({ durationDays: e }) {
                const t = c().ia24dc8d(e);
                return w({ durationDays: t });
            }
            function W({ high: e, low: t }) {
                const n = c().cf8abf59(t),
                    r = c().cf8abf59(e);
                return P({ audienceLow: n, audienceHigh: r });
            }
            function Q({ formattedAge: e, gender: t, locations: n }) {
                const o = n.length;
                return _({ newlinePlaceholder: "\n", locations: (0, r.Z)(n), locationsHeading: F({ numLocations: o }), formattedAge: e, gender: t });
            }
            function V({ formattedAge: e, gender: t, keywords: n, locations: o }) {
                const c = o.length;
                return b({ newlinePlaceholder: "\n", locations: (0, r.Z)(o), locationsHeading: F({ numLocations: c }), formattedAge: e, gender: t, keywords: (0, r.Z)(n) });
            }
            function z(e) {
                switch (e) {
                    case "Engagements":
                        return N;
                    case "Followers":
                        return T;
                    case "WebsiteClicks":
                        return I;
                    default:
                        throw (0, i.q8)(e);
                }
            }
            function J({ calloutType: e, couponAmount: t, currency: n, lang: r, spendAmount: o }) {
                const c = q({ amount: t, lang: r, currency: n, fractionDigits: 0 }),
                    a = q({ amount: o, lang: r, currency: n, fractionDigits: 0 });
                return "eligibleCoupon" === e ? v({ couponAmount: c, spendAmount: a }) : D({ couponAmount: c, spendAmount: a });
            }
            function X({ calloutType: e, couponAmount: t, currency: n, lang: r, spendAmount: o }) {
                const c = q({ amount: t, lang: r, currency: n, fractionDigits: 0 }),
                    a = q({ amount: o, lang: r, currency: n, fractionDigits: 0 });
                return D({ couponAmount: c, spendAmount: a });
            }
        },
        457637: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { introButton: "introButton", nextButton: "nextButton", objectiveScreen: "objectiveScreen", targetingScreen: "targetingScreen", getObjective: (e) => `objectiveScreenObjective${e}`, targetingLocationScreen: "targetingLocationScreen", targetingGenderScreen: "targetingGenderScreen", targetingKeywordsScreen: "targetingKeywordsScreen", budgetSelectScreen: "budgetSelectScreen", reviewScreen: "reviewScreen", reviewButton: "reviewButton", reviewObjectiveDescription: "reviewObjectiveDescription", reviewTargetingDescription: "reviewTargetingDescription", reviewBudgetAndDurationDescription: "reviewBudgetAndDurationDescription", reviewPaymentPivot: "reviewPaymentPivot", reviewPromotionTotalDescription: "reviewPromotionTotalDescription", targetingLocationPivot: "targetingLocationPivot", targetingGenderPivot: "targetingGenderPivot", targetingKeywordsPivot: "targetingKeywordsPivot", backButton: "backButton", targetingLocationSearch: "targetingLocationSearch", targetingLocationItem: "targetingLocationItem", getTargetingGender: (e) => `targetingGenderScreenGender${e}`, targetingKeywordsInput: "targetingKeywordsInput", paymentMethodSelect: "paymentMethodSelect", dropoffScreen: "dropoffScreen" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-c0214baf.62baca5a.js.map
