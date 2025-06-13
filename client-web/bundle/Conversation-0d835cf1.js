"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-0d835cf1"],
    {
        364753: (e, t, n) => {
            n.d(t, { Z: () => h });
            n(136728);
            var o = n(202784),
                a = n(111677),
                r = n.n(a),
                i = n(202205),
                c = n(190286),
                s = n(203421),
                l = n(192731);
            const u = ({ analytics: e, cancelButtonLabel: t, confirmButtonLabel: n, headline: a, onCancel: r, onConfirm: i, subtext: u }) => ((0, s.d)("drop_off_screen"), o.createElement(c.Z, { cancelButtonLabel: t, confirmButtonLabel: n, confirmButtonType: "primary", headline: a, onCancel: r, onConfirm: i, testID: l.Z.dropoffScreen, text: u })),
                d = r().j7a2af7a,
                p = r().a78bce8e,
                m = r().cfd2f35e,
                g = r().g8844150,
                h = ({ analytics: e, children: t, clearPersistedRedirectBackState: n, history: a, qpRouteParams: r, screensAllowedToNavigate: c }) => {
                    const [s, l] = o.useState(null),
                        h = o.useMemo(() => {
                            const { quickPromotePlatform: e, screenName: t, statusId: n } = r;
                            return Object.keys(i.MN).map((o) => (0, i.WS)(t, n, e, i.MN[o]));
                        }, [r]),
                        y = o.useMemo(() => {
                            const { quickPromotePlatform: e, screenName: t, statusId: n } = r;
                            return c ? c.map((o) => (0, i.WS)(t, n, e, o)) : [];
                        }, [r, c]),
                        b = o.useCallback(
                            (e, t) => {
                                const n = a.location,
                                    o = h.some((t) => e.pathname.includes(t)),
                                    r = y.some((e) => n.pathname.includes(e));
                                return !!(s || o || r) || (l({ nextLocation: e, action: t, currentLocation: n }), !1);
                            },
                            [a.location, h, y, s],
                        );
                    o.useEffect(() => a.block(b), [b, a]);
                    const C = o.useCallback(() => {
                            (0, i.hq)(e)(i.Ur.dropOffScreenCancel()), l(null);
                        }, [l, e]),
                        _ = o.useCallback(() => {
                            if (((0, i.hq)(e)(i.Ur.dropOffScreenConfirm()), n && n(), null == s)) return;
                            const { action: t, nextLocation: o } = s;
                            switch (t) {
                                case "PUSH":
                                    a.push(o);
                                    break;
                                case "REPLACE":
                                    a.replace(o);
                                    break;
                                case "POP":
                                    a.goBackThroughModals();
                            }
                        }, [s, a, e, n]);
                    return s ? o.createElement(u, { analytics: e, cancelButtonLabel: m, confirmButtonLabel: g, headline: d, onCancel: C, onConfirm: _, subtext: p }) : t;
                };
        },
        649038: (e, t, n) => {
            n.d(t, { ZP: () => he });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(58881),
                c = n(392237),
                s = n(834324),
                l = n(173739),
                u = n(731708),
                d = n(537392),
                p = n(530732),
                m = n(779610),
                g = n(154003),
                h = n(696591),
                y = n(111677),
                b = n.n(y),
                C = n(190636),
                _ = n(58399),
                f = n(847016),
                E = n(347720),
                P = n(443781),
                S = n(943245),
                x = n(852657),
                w = n(203421),
                D = n(896449),
                Z = n(200904),
                k = n(752500),
                T = n(192731),
                B = n(202205),
                I = (n(571372), n(71620)),
                v = n(668214),
                M = n(390387);
            const L = (e) => e.quickPromote.budget.dailyBudget,
                q = (e) => e.quickPromote.budget.durationDays,
                A = (e) => e.quickPromote.budget.errorMessage,
                N = (e) =>
                    e.quickPromote.budget.availableBudgets ||
                    ((e) => {
                        throw new Error(e);
                    })("No budgets found"),
                F = (e) => e.quickPromote.budget.currency || "USD",
                R = (e) => e.quickPromote.account.selectedFundingInstrument,
                O = (e) => e.quickPromote.account.adsAccount,
                W = (e) => e.quickPromote.promoteStatus,
                z = (e, t) => {
                    const n = (0, x.L_)(e);
                    return e.ads.typeahead.forecastAudience[n]?.result?.estimatedImpressions;
                },
                U = (e) => e.quickPromote.coupons,
                V = (e) => e.quickPromote.enrollCouponErrorCode,
                $ = (e, t) => e.quickPromote.targeting.targetedLocations,
                H =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: o, screenName: a, statusId: r } = t.params,
                            i = (0, B.WS)(a, r, o, B.MN.Done);
                        return (0, x.kb)({ history: e, statusId: r, nextPath: i, analytics: n });
                    },
                j = (0, v.Z)()
                    .propsFromState(() => ({ dailyBudget: L, durationDays: q, availableBudgets: N, lang: M.VT, country: x.QE, currency: F, audience: z, errorMessage: A, coupons: U, enrollCouponErrorCode: V, fundingInstrument: R, adsAccount: O, promoteStatus: W, selectedPaymentMethod: x.DY, targetedLocations: $ }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, I.zr)("QUICK_PROMOTE_BUDGET_SELECT_SCREEN"), createPromotion: H(e), setDailyBudget: x.p_, setBudgetDuration: x.g_, fetchForecastedAudienceIfNeeded: x.qL, setBudgetErrorMessage: x.rS }))
                    .withAnalytics(B.EP),
                G = b().i982d424,
                Y = b().e7eb3684,
                K = b().d9f6e3ce,
                Q = b().d9d6e10e,
                X = b().b3954eca,
                J = b().i0c3b95c,
                ee = b().e36bce64,
                te = b().ia83756c,
                ne = b().cc217a04,
                oe = b().c602f5b8,
                ae = b().j619ec94,
                re = b().cdae1af0,
                ie = b().ed8bb5a0,
                ce = b().fc640c20,
                se = b().be2dc078,
                le = b().iaefd4de,
                ue = b().e5e42640,
                de = b().b9ff6cb0,
                pe = Array(30)
                    .fill(null)
                    .map((e, t) => t + 1);
            class me extends a.PureComponent {
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
                                a = pe[e];
                            n !== a && ((0, B.hq)(t)(B.Ur.setBudgetDuration(`${a}`)), o(a), this._fetchForecastedAudienceIfNeeded());
                        }),
                        (this._handleBudgetSlider = (e) => {
                            const { analytics: t, availableBudgets: n, dailyBudget: o, setDailyBudget: a } = this.props,
                                r = n[e];
                            o !== r && ((0, B.hq)(t)(B.Ur.setDailyBudget(`${r}`)), a(r), this._fetchForecastedAudienceIfNeeded());
                        }),
                        (this._getCouponCalloutVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const o = "ConditionalCouponExperiment" === e?.eligible_coupon_experiment && e?.eligible_coupon?.credit_amount && e?.eligible_coupon?.spend_amount,
                                a = e?.pending_coupon?.credit_amount && e?.pending_coupon.spend_amount,
                                r = o && e?.eligible_coupon?.credit_amount ? e.eligible_coupon.credit_amount : e?.pending_coupon?.credit_amount,
                                i = o && e?.eligible_coupon?.spend_amount ? e?.eligible_coupon?.spend_amount : e?.pending_coupon?.spend_amount,
                                c = o ? "eligibleCoupon" : "pendingCoupon",
                                s = (0, k.ep)({ calloutType: c, couponAmount: r || 0, spendAmount: i || 0, currency: t, lang: n });
                            return { showCouponCallout: o || a, couponCalloutHeadline: "eligibleCoupon" === c ? J : void 0, couponCalloutText: s };
                        }),
                        (this._getPaymentDescription = (e, t) => {
                            const { adsAccount: n } = this.props;
                            return n && n.timezone && n.country_code ? (e ? re : t ? ce : ie) : t ? le : se;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, B.hq)(e)(B.Ur.promotionClick()), t(e);
                        }),
                        (this._getCouponErrorMessage = () => {
                            const { enrollCouponErrorCode: e } = this.props;
                            return e ? ue : null;
                        }),
                        (this._getCouponVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const o = e?.existing_balance.length ? e.existing_balance.find((e) => e.currency_code === t) : null,
                                a = !!o?.total_amount && o.total_amount > 0,
                                r = !!e?.eligible_coupon,
                                i = !(!e?.pending_coupon?.credit_amount || !e?.pending_coupon.spend_amount),
                                c = i || "ConditionalCouponExperiment" === e?.eligible_coupon_experiment ? "conditionalCoupon" : a || r ? "standardCoupon" : void 0,
                                s = this._getCouponErrorMessage();
                            return { existingCouponBalance: o, hasCouponCredit: a, isEligibleForCoupon: r, showCouponTerms: (i || a || r) && !s, couponType: c, couponErrorMessage: s };
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, B.hq)(e)(B.Ur.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded();
                }
                componentWillUnmount() {
                    const { setBudgetErrorMessage: e } = this.props;
                    e(null);
                }
                render() {
                    const { adsAccount: e, audience: t, availableBudgets: n, country: y, coupons: P, currency: I, dailyBudget: v, durationDays: M, errorMessage: L, fundingInstrument: q, lang: A, match: N, promoteStatus: F, selectedPaymentMethod: R, targetedLocations: O } = this.props,
                        W = v.toLocaleString((0, S.It)(A), { currency: I, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 }),
                        z = (0, k.d2)({ durationDays: M }),
                        U = this._getSliderProps(n, v),
                        V = this._getSliderProps(pe, M),
                        $ = { COUNTRIES: 1, REGIONS: 0.9, CITIES: 0.8, METROS: 0.8, POSTAL_CODES: 1 }[O && O.length > 0 ? O[0].location_type : "COUNTRIES"],
                        H = t && t.low > 0 && t.high > 0 ? (0, k.xE)({ high: t.high * $, low: t.low }) : "        -        ",
                        { couponCalloutHeadline: j, couponCalloutText: J, showCouponCallout: re } = this._getCouponCalloutVariables({ coupons: P, lang: A, currency: I }),
                        { couponType: ie, existingCouponBalance: ce, hasCouponCredit: se, isEligibleForCoupon: le, showCouponTerms: ue } = this._getCouponVariables({ coupons: P, currency: I, lang: A }),
                        me = (0, k.ib)({ durationDays: M }),
                        he = se ? "" : (0, k.Sy)({ amount: v * M, lang: A, currency: I }),
                        { quickPromotePlatform: ye, screenName: be, statusId: Ce } = N.params,
                        _e = e?.needs_vat,
                        fe = e?.isCanWriteBilling ?? !0,
                        Ee = !!q,
                        Pe = fe ? (!q || _e ? (0, B.WS)(be, Ce, ye, B.MN.Payment) : "CREDIT_CARD" === q?.type ? (0, B.WS)(be, Ce, ye, B.MN.PaymentSelect) : void 0) : void 0,
                        Se = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text, customHoverBackgroundColor: c.default.theme.colors.gray0, customPressedBackgroundColor: c.default.theme.colors.gray0 });
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(r.Z, { style: ge.qpContainer, testID: T.Z.budgetSelectScreen }, a.createElement(w.O, { screenType: B.MN.BudgetSelect }), a.createElement(Z.ZP, null, L && a.createElement(r.Z, { style: ge.gutterVertical }, a.createElement(s.Z, { text: L, type: "danger" })), a.createElement(E.Y, { callout: re && a.createElement(s.Z, { Icon: C.default, headline: j, text: J }), title: G }), a.createElement(f.t, { label: Y, withBottomBorder: !1 }, a.createElement(r.Z, { style: ge.childSpacing }, a.createElement(l.Z, (0, o.Z)({ accessibilityLabelValueText: `"${W}"`, "aria-label": K }, U, { color: c.default.isDarkMode() ? "white" : "primary", onChange: this._handleBudgetSlider, thumbLabel: W })))), a.createElement(f.t, { label: Q, withBottomBorder: !1 }, a.createElement(r.Z, { style: ge.childSpacing }, a.createElement(l.Z, (0, o.Z)({ accessibilityLabelValueText: `"${z}"`, "aria-label": X }, V, { color: c.default.isDarkMode() ? "white" : "primary", onChange: this._handleDurationSlider, thumbLabel: z })))), a.createElement(r.Z, { style: ge.reachContainer }, a.createElement(u.ZP, { style: ge.reachLabel }, "Estimated Daily Reach"), a.createElement(r.Z, { style: ge.reachStatsWrapper }, a.createElement(u.ZP, { style: ge.reachStatsText }, H))))),
                        a.createElement(
                            r.Z,
                            { style: ge.bottomElements },
                            a.createElement(
                                Z.ZP,
                                null,
                                a.createElement(d.ZP, null, ({ windowWidth: e }) => {
                                    const t = e < c.default.theme.breakpoints.small;
                                    return a.createElement(
                                        p.Z,
                                        { interactiveStyles: Se, link: fe ? (!q || _e ? (0, B.WS)(be, Ce, ye, B.MN.Payment) : "CREDIT_CARD" === q?.type ? (0, B.WS)(be, Ce, ye, B.MN.PaymentSelect) : void 0) : void 0, style: t ? ge.mobilePaymentContainer : ge.paymentContainer },
                                        a.createElement(r.Z, { style: ge.paymentMethodContainer }, a.createElement(m.Z, { description: fe && "CREDIT_CARD" === q?.type && R && !_e ? a.createElement(D.XL, { id: R.id, imgSrcUrl: R.imgSrcUrl, lastFourDigits: R.lastFourDigits, paymentDescriptionStyle: ge.paymentMethod, status: R.cardStatus }) : q && !_e ? q.description : a.createElement(u.ZP, { color: "gray700", size: "subtext2" }, de), label: a.createElement(u.ZP, { weight: "bold" }, ee), paddingHorizontal: "space12", styleOverride: t ? ge.mobilePaymentPivot : ge.paymentPivot, testID: T.Z.reviewPaymentPivot }), a.createElement(r.Z, { style: ge.paymentIconContainer }, a.createElement(_.default, { style: ge.paymentIcon }))),
                                        a.createElement(
                                            f.t,
                                            { containerStyle: se || t ? ge.paymentDescriptionContainer : ge.paymentDescriptionContainerRightAligned, description: he, descriptionTestID: T.Z.reviewPromotionTotalDescription, label: me, withBottomBorder: !1 },
                                            se
                                                ? (function ({ balance: e, currency: t, lang: n, subtotal: o }) {
                                                      const i = (0, k.Sy)({ amount: o, currency: t, lang: n }),
                                                          c = (0, k.Sy)({ amount: Math.min(o, e), currency: t, lang: n }),
                                                          s = (0, k.Sy)({ amount: Math.max(0, o - e), currency: t, lang: n });
                                                      return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: ge.promotionTotalRow }, a.createElement(u.ZP, { color: "gray700", size: "subtext2" }, te), a.createElement(u.ZP, { color: "gray700", size: "subtext2" }, i)), a.createElement(r.Z, { style: ge.promotionTotalRow }, a.createElement(u.ZP, { color: "blue500", size: "subtext2" }, ne), a.createElement(u.ZP, { color: "blue500", size: "subtext2" }, "-", c)), a.createElement(r.Z, { style: ge.promotionTotalRow }, a.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, oe), a.createElement(u.ZP, { color: "gray700", size: "subtext2", testID: T.Z.reviewPromotionTotalDescription, weight: "bold" }, s)));
                                                  })({ subtotal: v * M, balance: ce?.total_amount || 0, currency: I, lang: A })
                                                : null,
                                        ),
                                    );
                                }),
                                q ? a.createElement(g.ZP, { disabled: _e || x.LK.includes(F), onPress: this._handlePromote, size: "xLarge", testID: T.Z.reviewButton, type: "primaryFilled" }, ae) : a.createElement(g.ZP, { disabled: _e || x.LK.includes(F), link: Pe, size: "xLarge", testID: T.Z.reviewButton, type: "primaryFilled" }, this._getPaymentDescription(Ee, le)),
                                a.createElement(
                                    h.Z,
                                    { align: "center", style: ge.terms },
                                    (function (e, t, n, o) {
                                        return n ? a.createElement(b().I18NFormatMessage, { $i18n: "b3816c8b" }, a.createElement(u.ZP, { link: (0, B.s0)(e) }, b().i8b90688), a.createElement(u.ZP, { link: (0, B.bx)(t, o) }, b().a93bd26d)) : a.createElement(b().I18NFormatMessage, { $i18n: "ee48f791" }, a.createElement(u.ZP, { link: (0, B.s0)(e) }, b().d31dc460));
                                    })(y, A, ue, ie),
                                ),
                            ),
                        ),
                    );
                }
            }
            me.contextType = P.rC;
            const ge = c.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "auto" }, disclaimer: { marginVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, childSpacing: { marginTop: e.spaces.space8 }, iconText: { verticalAlign: "text-bottom" }, reachContainer: { flexDirection: "row", alignItems: "center", marginVertical: e.spaces.space20 }, reachLabel: { flex: 1, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.bold }, reachStatsWrapper: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.blue100 }, reachStatsText: { fontSize: e.fontSizes.headline1, fontWeight: e.fontWeights.bold }, paymentContainer: { flexDirection: "row", marginBottom: e.spaces.space12 }, mobilePaymentContainer: { flexDirection: "column" }, paymentMethodContainer: { flexDirection: "row" }, paymentPivot: { marginEnd: e.spaces.space16 }, mobilePaymentPivot: { flex: 1 }, paymentIconContainer: { flexDirection: "row", alignItems: "center" }, paymentIcon: { color: e.colors.gray700, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space4, height: e.spaces.space32, flexShrink: 0 }, paymentDescriptionContainer: { backgroundColor: "transparent", paddingHorizontal: e.spaces.space12, flex: 1 }, paymentDescriptionContainerRightAligned: { backgroundColor: "transparent", alignItems: "flex-end", paddingHorizontal: e.spaces.space12, flex: 1 }, paymentMethod: { flexDirection: "row", marginStart: "0", backgroundColor: "transparent" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40 }, terms: { textAlign: "center", color: e.colors.gray500, fontSize: e.fontSizes.subtext3, paddingTop: e.spaces.space4 }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" } })),
                he = j(me);
        },
        581505: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                a = n(529356),
                r = n(111677),
                i = n.n(r),
                c = n(443781),
                s = n(203421),
                l = n(202205);
            const u = (0, n(668214).Z)().withAnalytics(l.EP),
                d = i().h8b6e32a,
                p = i().ee8014a6,
                m = i().j24c37b2;
            class g extends o.PureComponent {
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
            g.contextType = c.rC;
            const h = u(g);
        },
        203421: (e, t, n) => {
            n.d(t, { O: () => c, d: () => i });
            n(202784);
            var o = n(187669),
                a = n(774717),
                r = n(441408);
            const i = (e) => {
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
                c = ({ screenType: e }) => (i(e), null);
        },
        107456: (e, t, n) => {
            n.d(t, { s: () => l });
            n(202784);
            var o = n(537392),
                a = n(392237),
                r = n(879122),
                i = n(82750),
                c = n(188804);
            function s(e) {
                new Image().src = e;
            }
            function l() {
                return (
                    (0, o.Zx)(({ windowHeight: e, windowWidth: t }) => {
                        s(t > a.default.theme.breakpoints.medium ? r : t <= 375 ? c : i);
                    }),
                    null
                );
            }
        },
        661345: (e, t, n) => {
            n.d(t, { Z: () => L });
            n(136728), n(543673), n(240753), n(128399);
            var o = n(202784),
                a = n(529356),
                r = n(111677),
                i = n.n(r),
                c = n(443781),
                s = n(203421),
                l = n(752500),
                u = n(192731),
                d = n(202205),
                p = n(668214),
                m = n(390387);
            const g = (e) => !!e.quickPromote.account.selectedFundingInstrument,
                h = (e) => e.quickPromote.coupons,
                y = (e) => e.quickPromote.budget.currency || "USD",
                b = (0, p.Z)()
                    .propsFromState(() => ({ hasFundingInstrument: g, coupons: h, lang: m.VT, currency: y }))
                    .withAnalytics(d.EP);
            var C = n(708852),
                _ = n(537392),
                f = n(82750),
                E = n(188804),
                P = n(325686),
                S = n(530525),
                x = n(439592),
                w = n(879122);
            function D({ style: e }) {
                return o.createElement(P.Z, { style: e }, o.createElement(S.Z, { "aria-label": "", aspectMode: x.Z.exact(600 / 406), image: w }));
            }
            function Z({ headerImage: e, style: t }) {
                return o.createElement(P.Z, { style: t }, o.createElement(S.Z, { "aria-label": "", aspectMode: x.Z.COVER, image: e }));
            }
            function k({ style: e }) {
                const t = (0, C.D2)(),
                    n = (0, _.Zx)(({ windowWidth: e }) => (e <= 375 ? E : f));
                return t ? o.createElement(D, { style: e }) : o.createElement(Z, { headerImage: n, style: e });
            }
            const T = i().h1fcb36c,
                B = i().db841200,
                I = i().hc67be9e,
                v = i().h1fcb36c;
            class M extends o.PureComponent {
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
                            let i = null;
                            switch (e?.eligible_coupon_experiment) {
                                case "ConditionalCouponExperiment":
                                    i = (0, l.$D)({ coupon: { type: "ConditionalCoupon", credit_amount: o, spend_amount: e?.eligible_coupon?.spend_amount || 0, currency_code: a }, lang: n });
                                    break;
                                case "WelcomeCouponExperiment":
                                    r && (i = (0, l.mL)({ coupon: { type: "StandardCoupon", total_amount: o, currency_code: a }, lang: n, enrolByDate: r }));
                                    break;
                                case "WinBackCouponExperiment":
                                    r && (i = (0, l.Ul)({ coupon: { type: "StandardCoupon", total_amount: o, currency_code: a }, lang: n, enrolByDate: r }));
                            }
                            return { withCoupons: o > 0 && !!i, couponScreenTitle: (0, l.Uk)({ couponAmount: o, currency: a, lang: n }), couponScreenSubtitle: i, couponButtonLabel: v };
                        });
                }
                componentDidMount() {
                    const { analytics: e, coupons: t, hasFundingInstrument: n, location: o, match: a } = this.props,
                        { screenName: r, statusId: i } = a.params,
                        c = (function (e, t, n) {
                            if (!e) return "none";
                            {
                                const o = new URL(e, window.location.origin);
                                if (o.pathname === `/${t}`) return "me";
                                if (o.pathname === `/${t}/status/${n}`) return "tweet";
                                if (o.pathname === `/${t}/status/${n}/analytics`) return "analytics";
                                if ("/i/flow/convert_to_professional" === o.pathname) return "ptt";
                            }
                            return "other";
                        })(o.state?.previousPath, r, i),
                        s = "other" === c ? o.state?.previousPath : void 0,
                        l = (t?.eligible_coupon?.total_amount || 0) > 0;
                    (0, d.hq)(e)(d.Ur.introPageLoad({ hasFundingInstrument: n, entryPoint: c, otherEntryPoint: s, withCoupon: l }));
                }
                render() {
                    const { coupons: e, currency: t, lang: n, match: r } = this.props,
                        { quickPromotePlatform: i } = r.params,
                        c = i === d.ZV.Rweb,
                        { couponButtonLabel: l, couponScreenSubtitle: p, couponScreenTitle: m, withCoupons: g } = this._getCouponVariables({ coupons: e, currency: t, lang: n }),
                        h = g ? m : T,
                        y = g ? p : B,
                        b = g ? l : I;
                    return o.createElement(o.Fragment, null, o.createElement(s.O, { screenType: d.MN.Intro }), o.createElement(a.Z, { actionLabel: b, graphic: k, graphicDisplayMode: "illustrationFullWidth", headline: h, isFullHeightOnMobile: !0, onAction: this._handleGoToNextPage, onClose: this._handleClose, primaryButtonTestID: u.Z.introButton, subtext: y, withCloseButton: c }));
                }
            }
            M.contextType = c.rC;
            const L = b(M);
        },
        879122: (e, t, n) => {
            e.exports = n.p + "desktop_header_image.0fe2a91a.png";
        },
        82750: (e, t, n) => {
            e.exports = n.p + "mobile_header_image_sm.1de0deca.png";
        },
        188804: (e, t, n) => {
            e.exports = n.p + "mobile_header_image_xs.a6014e9a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-0d835cf1.f835508a.js.map
