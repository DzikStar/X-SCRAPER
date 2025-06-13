"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-8e3af64c"],
    {
        152831: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var o = n(202784),
                a = n(111677),
                r = n.n(a),
                c = n(363895),
                i = n(190286),
                s = n(934878),
                l = n(457637);
            const u = ({ analytics: e, cancelButtonLabel: t, confirmButtonLabel: n, headline: a, onCancel: r, onConfirm: c, subtext: u }) => ((0, s.d)("drop_off_screen"), o.createElement(i.Z, { cancelButtonLabel: t, confirmButtonLabel: n, confirmButtonType: "primary", headline: a, onCancel: r, onConfirm: c, testID: l.Z.dropoffScreen, text: u })),
                d = r().j7a2af7a,
                p = r().a78bce8e,
                m = r().cfd2f35e,
                h = r().g8844150,
                g = ({ analytics: e, children: t, history: n, qpRouteParams: a, screensAllowedToNavigate: r }) => {
                    const [i, s] = o.useState(null),
                        l = o.useMemo(() => {
                            const { quickPromotePlatform: e, screenName: t, statusId: n } = a;
                            return Object.keys(c.MN).map((o) => (0, c.WS)(t, n, e, c.MN[o]));
                        }, [a]),
                        g = o.useMemo(() => {
                            const { quickPromotePlatform: e, screenName: t, statusId: n } = a;
                            return r ? r.map((o) => (0, c.WS)(t, n, e, o)) : [];
                        }, [a, r]),
                        y = o.useCallback(
                            (e, t) => {
                                const o = n.location,
                                    a = l.some((t) => e.pathname.includes(t)),
                                    r = g.some((e) => o.pathname.includes(e));
                                return !!(i || a || r) || (s({ nextLocation: e, action: t, currentLocation: o }), !1);
                            },
                            [n.location, l, g, i],
                        );
                    o.useEffect(() => n.block(y), [y, n]);
                    const b = o.useCallback(() => {
                            (0, c.hq)(e)(c.Ur.dropOffScreenCancel()), s(null);
                        }, [s, e]),
                        _ = o.useCallback(() => {
                            if (((0, c.hq)(e)(c.Ur.dropOffScreenConfirm()), null == i)) return;
                            const { action: t, nextLocation: o } = i;
                            switch (t) {
                                case "PUSH":
                                    n.push(o);
                                    break;
                                case "REPLACE":
                                    n.replace(o);
                                    break;
                                case "POP":
                                    n.goBackThroughModals();
                            }
                        }, [i, n, e]);
                    return i ? o.createElement(u, { analytics: e, cancelButtonLabel: m, confirmButtonLabel: h, headline: d, onCancel: b, onConfirm: _, subtext: p }) : t;
                };
        },
        370867: (e, t, n) => {
            n.d(t, { ZP: () => R });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                c = n(834324),
                i = n(173739),
                s = n(731708),
                l = n(696591),
                u = n(392237),
                d = n(111677),
                p = n.n(d),
                m = n(190636),
                h = n(847016),
                g = n(347720),
                y = n(443781),
                b = n(943245),
                _ = n(934878),
                f = n(953884),
                C = n(144528),
                E = n(457637),
                x = n(363895),
                P = (n(571372), n(71620)),
                w = n(668214),
                B = n(852657),
                S = n(390387);
            const Z = (e) => e.quickPromote.budget.dailyBudget,
                D = (e) => e.quickPromote.budget.durationDays,
                T = (e) => e.quickPromote.budget.errorMessage,
                k = (e) =>
                    e.quickPromote.budget.availableBudgets ||
                    ((e) => {
                        throw new Error(e);
                    })("No budgets found"),
                L = (e) => e.quickPromote.budget.currency || "USD",
                I = (e, t) => {
                    const n = (0, B.L_)(e);
                    return e.ads.typeahead.forecastAudience[n]?.result?.estimatedImpressions;
                },
                v = (e) => e.quickPromote.coupons,
                q = (0, w.Z)()
                    .propsFromState(() => ({ dailyBudget: Z, durationDays: D, availableBudgets: k, lang: S.VT, currency: L, audience: I, errorMessage: T, coupons: v }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("QUICK_PROMOTE_BUDGET_SELECT_SCREEN"), setDailyBudget: B.p_, setBudgetDuration: B.g_, fetchForecastedAudienceIfNeeded: B.qL, setBudgetErrorMessage: B.rS }))
                    .withAnalytics({ page: "quick_promote" }),
                M = p().i3656b52,
                A = p().e7eb3684,
                F = p().d9f6e3ce,
                N = p().d9d6e10e,
                U = p().b3954eca,
                V = p().ce665a60,
                O = p().i0c3b95c,
                $ = Array(30)
                    .fill(null)
                    .map((e, t) => t + 1);
            class W extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._fetchForecastedAudienceIfNeeded = () => {
                            const {
                                analytics: e,
                                createLocalApiErrorHandler: t,
                                fetchForecastedAudienceIfNeeded: n,
                                match: {
                                    params: { statusId: o },
                                },
                            } = this.props;
                            n(o, e).catch(t());
                        }),
                        (this._getSliderProps = (e, t) => ({ max: e.length - 1, min: 0, value: e.indexOf(t) })),
                        (this._handleDurationSlider = (e) => {
                            const { analytics: t, durationDays: n, setBudgetDuration: o } = this.props,
                                a = $[e];
                            n !== a && ((0, x.hq)(t)(x.Ur.setBudgetDuration(`${a}`)), o(a), this._fetchForecastedAudienceIfNeeded());
                        }),
                        (this._handleBudgetSlider = (e) => {
                            const { analytics: t, availableBudgets: n, dailyBudget: o, setDailyBudget: a } = this.props,
                                r = n[e];
                            o !== r && ((0, x.hq)(t)(x.Ur.setDailyBudget(`${r}`)), a(r), this._fetchForecastedAudienceIfNeeded());
                        }),
                        (this._getCouponCalloutVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const o = "ConditionalCouponExperiment" === e?.eligible_coupon_experiment && e?.eligible_coupon?.credit_amount && e?.eligible_coupon?.spend_amount,
                                a = e?.pending_coupon?.credit_amount && e?.pending_coupon.spend_amount,
                                r = o && e?.eligible_coupon?.credit_amount ? e.eligible_coupon.credit_amount : e?.pending_coupon?.credit_amount,
                                c = o && e?.eligible_coupon?.spend_amount ? e?.eligible_coupon?.spend_amount : e?.pending_coupon?.spend_amount,
                                i = o ? "eligibleCoupon" : "pendingCoupon",
                                s = (0, C.ep)({ calloutType: i, couponAmount: r || 0, spendAmount: c || 0, currency: t, lang: n });
                            return { showCouponCallout: o || a, couponCalloutHeadline: "eligibleCoupon" === i ? O : void 0, couponCalloutText: s };
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, x.hq)(e)(x.Ur.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded();
                }
                componentWillUnmount() {
                    const { setBudgetErrorMessage: e } = this.props;
                    e(null);
                }
                render() {
                    const { audience: e, availableBudgets: t, coupons: n, currency: u, dailyBudget: d, durationDays: p, errorMessage: y, lang: P } = this.props,
                        w = d.toLocaleString((0, b.It)(P), { currency: u, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 }),
                        B = t[0].toLocaleString((0, b.It)(P), { currency: u, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 }),
                        S = t.slice(-1)[0].toLocaleString((0, b.It)(P), { currency: u, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 }),
                        Z = e && e.low > 0 && e.high > 0 ? (0, C.BQ)(e) : " ",
                        D = (0, C.d2)({ durationDays: p }),
                        T = (0, C.d2)({ durationDays: $[0] }),
                        k = (0, C.d2)({ durationDays: $.slice(-1)[0] }),
                        L = this._getSliderProps(t, d),
                        I = this._getSliderProps($, p),
                        v = (0, C.hl)({ totalBudgetNum: d * p, durationDays: p, lang: P, currency: u }),
                        { couponCalloutHeadline: q, couponCalloutText: O, showCouponCallout: W } = this._getCouponCalloutVariables({ coupons: n, lang: P, currency: u });
                    return a.createElement(r.Z, { style: H.qpContainer, testID: E.Z.budgetSelectScreen }, a.createElement(_.O, { screenType: x.MN.BudgetSelect }), a.createElement(f.ZP, null, y && a.createElement(r.Z, { style: H.gutterVertical }, a.createElement(c.Z, { text: y, type: "danger" })), a.createElement(g.Y, { callout: W && a.createElement(c.Z, { Icon: m.default, headline: q, text: O }), primaryLabel: v, style: H.titleContainer, subtitle: Z, title: M }), a.createElement(h.t, { label: A }, a.createElement(r.Z, { style: H.childSpacing }, a.createElement(i.Z, (0, o.Z)({ accessibilityLabelValueText: `"${w}"`, "aria-label": F }, L, { maxIcon: a.createElement(s.ZP, { style: H.iconText }, S), minIcon: a.createElement(s.ZP, { style: H.iconText }, B), onChange: this._handleBudgetSlider, thumbLabel: w })))), a.createElement(h.t, { label: N }, a.createElement(r.Z, { style: H.childSpacing }, a.createElement(i.Z, (0, o.Z)({ accessibilityLabelValueText: `"${D}"`, "aria-label": U }, I, { maxIcon: a.createElement(s.ZP, { style: H.iconText }, k), minIcon: a.createElement(s.ZP, { style: H.iconText }, T), onChange: this._handleDurationSlider, thumbLabel: D })))), a.createElement(r.Z, { style: H.disclaimer }, a.createElement(l.Z, { align: "left", color: "gray700", size: "subtext2" }, V))));
                }
            }
            W.contextType = y.rC;
            const H = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "auto" }, titleContainer: { paddingBottom: e.spaces.space32 }, disclaimer: { marginVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, childSpacing: { marginTop: e.spaces.space4 }, iconText: { verticalAlign: "text-bottom" } })),
                R = q(W);
        },
        980151: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var o = n(202784),
                a = n(529356),
                r = n(111677),
                c = n.n(r),
                i = n(443781),
                s = n(934878),
                l = n(363895);
            const u = (0, n(668214).Z)().withAnalytics(l.EP),
                d = c().h8b6e32a,
                p = c().ee8014a6,
                m = c().j24c37b2;
            class h extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleGoToAnalytics = () => {
                            const { history: e, match: t } = this.props,
                                { quickPromotePlatform: n, screenName: o, statusId: a } = t.params;
                            (0, l.YZ)(e)(o, a, n);
                        }),
                        (this._handleClose = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, l.hq)(e)(l.Ur.donePageLoad());
                }
                render() {
                    return o.createElement(o.Fragment, null, o.createElement(s.O, { screenType: l.MN.Done }), o.createElement(a.Z, { actionLabel: m, headline: d, isFullHeightOnMobile: !0, onAction: this._handleGoToAnalytics, onClose: this._handleClose, subtext: p, withCloseButton: !1 }));
                }
            }
            h.contextType = i.rC;
            const g = u(h);
        },
        934878: (e, t, n) => {
            n.d(t, { O: () => i, d: () => c });
            n(202784);
            var o = n(187669),
                a = n(774717),
                r = n(441408);
            const c = (e) => {
                    (0, o.q)(() => {
                        const t = a.P_(),
                            n = () => {
                                t.resume();
                            },
                            o = () => {
                                t.pause();
                            };
                        return (
                            window.addEventListener("focus", n),
                            window.addEventListener("blur", o),
                            () => {
                                a.IM(`${r.uB}:dwell:${e}`, t.end()), window.removeEventListener("focus", n), window.removeEventListener("blur", o);
                            }
                        );
                    });
                },
                i = ({ screenType: e }) => (c(e), null);
        },
        187296: (e, t, n) => {
            n.d(t, { s: () => l });
            n(202784);
            var o = n(537392),
                a = n(392237),
                r = n(219087),
                c = n(263090),
                i = n(426686);
            function s(e) {
                new Image().src = e;
            }
            function l() {
                return (
                    (0, o.Zx)(({ windowHeight: e, windowWidth: t }) => {
                        s(t > a.default.theme.breakpoints.medium ? r : t <= 375 ? i : c);
                    }),
                    null
                );
            }
        },
        546281: (e, t, n) => {
            n.d(t, { Z: () => q });
            n(136728), n(543673), n(240753), n(128399);
            var o = n(202784),
                a = n(529356),
                r = n(111677),
                c = n.n(r),
                i = n(443781),
                s = n(934878),
                l = n(144528),
                u = n(457637),
                d = n(363895),
                p = n(668214),
                m = n(390387);
            const h = (e) => !!e.quickPromote.account.selectedFundingInstrument,
                g = (e) => e.quickPromote.coupons,
                y = (e) => e.quickPromote.budget.currency || "USD",
                b = (0, p.Z)()
                    .propsFromState(() => ({ hasFundingInstrument: h, coupons: g, lang: m.VT, currency: y }))
                    .withAnalytics(d.EP);
            var _ = n(708852),
                f = n(537392),
                C = n(263090),
                E = n(426686),
                x = n(325686),
                P = n(530525),
                w = n(439592),
                B = n(219087);
            function S({ style: e }) {
                return o.createElement(x.Z, { style: e }, o.createElement(P.Z, { "aria-label": "", aspectMode: w.Z.exact(600 / 406), image: B }));
            }
            function Z({ headerImage: e, style: t }) {
                return o.createElement(x.Z, { style: t }, o.createElement(P.Z, { "aria-label": "", aspectMode: w.Z.COVER, image: e }));
            }
            function D({ style: e }) {
                const t = (0, _.D2)(),
                    n = (0, f.Zx)(({ windowWidth: e }) => (e <= 375 ? E : C));
                return t ? o.createElement(S, { style: e }) : o.createElement(Z, { headerImage: n, style: e });
            }
            const T = c().h1fcb36c,
                k = c().db841200,
                L = c().hc67be9e,
                I = c().h1fcb36c;
            class v extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleGoToNextPage = () => {
                            const { history: e, match: t } = this.props,
                                { quickPromotePlatform: n, screenName: o, statusId: a } = t.params,
                                r = this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled") ? d.MN.Targeting : d.MN.Objective;
                            e.push((0, d.WS)(o, a, n, r));
                        }),
                        (this._handleClose = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._getCouponVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const o = e?.eligible_coupon?.total_amount || e?.eligible_coupon?.credit_amount || 0,
                                a = e?.eligible_coupon?.currency_code || t,
                                r = e?.experiment_end_date;
                            let c = null;
                            switch (e?.eligible_coupon_experiment) {
                                case "ConditionalCouponExperiment":
                                    c = (0, l.$D)({ coupon: { type: "ConditionalCoupon", credit_amount: o, spend_amount: e?.eligible_coupon?.spend_amount || 0, currency_code: a }, lang: n });
                                    break;
                                case "WelcomeCouponExperiment":
                                    r && (c = (0, l.mL)({ coupon: { type: "StandardCoupon", total_amount: o, currency_code: a }, lang: n, enrolByDate: r }));
                                    break;
                                case "WinBackCouponExperiment":
                                    r && (c = (0, l.Ul)({ coupon: { type: "StandardCoupon", total_amount: o, currency_code: a }, lang: n, enrolByDate: r }));
                            }
                            return { withCoupons: o > 0 && !!c, couponScreenTitle: (0, l.Uk)({ couponAmount: o, currency: a, lang: n }), couponScreenSubtitle: c, couponButtonLabel: I };
                        });
                }
                componentDidMount() {
                    const { analytics: e, coupons: t, hasFundingInstrument: n, location: o, match: a } = this.props,
                        { screenName: r, statusId: c } = a.params,
                        i = (function (e, t, n) {
                            if (!e) return "none";
                            {
                                const o = new URL(e, window.location.origin);
                                if (o.pathname === `/${t}`) return "me";
                                if (o.pathname === `/${t}/status/${n}`) return "tweet";
                                if (o.pathname === `/${t}/status/${n}/analytics`) return "analytics";
                                if ("/i/flow/convert_to_professional" === o.pathname) return "ptt";
                            }
                            return "other";
                        })(o.state?.previousPath, r, c),
                        s = "other" === i ? o.state?.previousPath : void 0,
                        l = (t?.eligible_coupon?.total_amount || 0) > 0;
                    (0, d.hq)(e)(d.Ur.introPageLoad({ hasFundingInstrument: n, entryPoint: i, otherEntryPoint: s, withCoupon: l }));
                }
                render() {
                    const { coupons: e, currency: t, lang: n, match: r } = this.props,
                        { quickPromotePlatform: c } = r.params,
                        i = c === d.ZV.Rweb,
                        { couponButtonLabel: l, couponScreenSubtitle: p, couponScreenTitle: m, withCoupons: h } = this._getCouponVariables({ coupons: e, currency: t, lang: n }),
                        g = h ? m : T,
                        y = h ? p : k,
                        b = h ? l : L;
                    return o.createElement(o.Fragment, null, o.createElement(s.O, { screenType: d.MN.Intro }), o.createElement(a.Z, { actionLabel: b, graphic: D, graphicDisplayMode: "illustrationFullWidth", headline: g, isFullHeightOnMobile: !0, onAction: this._handleGoToNextPage, onClose: this._handleClose, primaryButtonTestID: u.Z.introButton, subtext: y, withCloseButton: i }));
                }
            }
            v.contextType = i.rC;
            const q = b(v);
        },
        219087: (e, t, n) => {
            e.exports = n.p + "desktop_header_image.0fe2a91a.png";
        },
        263090: (e, t, n) => {
            e.exports = n.p + "mobile_header_image_sm.1de0deca.png";
        },
        426686: (e, t, n) => {
            e.exports = n.p + "mobile_header_image_xs.a6014e9a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-8e3af64c.9db09d2a.js.map
