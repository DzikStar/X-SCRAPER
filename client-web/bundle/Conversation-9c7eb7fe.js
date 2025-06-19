"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-9c7eb7fe"],
    {
        861286: (e, t, n) => {
            n.d(t, { ZP: () => pe });
            var o = n(202784),
                r = n(325686),
                a = n(834324),
                i = n(224162),
                c = n(779610),
                s = n(731708),
                l = n(696591),
                u = n(154003),
                d = n(392237),
                g = n(111677),
                m = n.n(g),
                p = n(847016),
                h = n(347720),
                y = n(443781),
                E = n(852657),
                C = n(315032),
                b = n(312771),
                f = n(934878),
                _ = n(728300),
                S = n(953884),
                P = n(144528),
                k = n(457637),
                T = n(363895),
                Z = n(71620),
                w = n(668214),
                I = n(390387);
            const A = (e) => e.quickPromote.objective,
                x = (e, t) => e.quickPromote.targeting.targetedLocations,
                L = (e, t) => e.quickPromote.targeting.ageBucket,
                v = (e, t) => e.quickPromote.targeting.gender,
                D = (e, t) => e.quickPromote.targeting.keywords,
                q = (e, t) => e.quickPromote.budget.dailyBudget,
                B = (e, t) => e.quickPromote.budget.durationDays,
                M = (e) => e.quickPromote.budget.currency || "USD",
                R = (e) => e.quickPromote.account.selectedFundingInstrument,
                F = (e) => e.quickPromote.account.adsAccount,
                N = (e) => e.quickPromote.promoteStatus,
                z = (e) => e.quickPromote.promoteErrorCode,
                O = (e) => e.quickPromote.coupons,
                U = (e) => e.quickPromote.enrollCouponErrorCode,
                K =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: o, screenName: r, statusId: a } = t.params,
                            i = (0, T.WS)(r, a, o, T.MN.Done);
                        return (0, E.kb)({ history: e, statusId: a, nextPath: i, analytics: n });
                    },
                G = (0, w.Z)()
                    .propsFromState(() => ({ objective: A, targetedLocations: x, ageBucket: L, gender: v, keywords: D, dailyBudget: q, durationDays: B, lang: I.VT, country: E.QE, currency: M, fundingInstrument: R, adsAccount: F, promoteStatus: N, promoteErrorCode: z, coupons: O, enrollCouponErrorCode: U, selectedPaymentMethod: E.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, Z.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, E.oE)(), createPromotion: K(e), enrollCoupon: E.br }))
                    .withAnalytics(T.EP),
                H = m().db443ae2,
                Q = m().a96f811e,
                W = m().b069d89c,
                j = m().fbd44e96,
                V = m().e36bce64,
                $ = m().c602f5b8,
                Y = m().ia83756c,
                J = m().cc217a04,
                X = m().c602f5b8,
                ee = m().g4f2b588,
                te = m().i41612da,
                ne = m().cdae1af0,
                oe = m().ed8bb5a0,
                re = m().fc640c20,
                ae = m().be2dc078,
                ie = m().iaefd4de,
                ce = m().e5e42640,
                se = m().e85dfd66,
                le = m().ef4602ec,
                ue = m().a4db098c,
                de = m().ef7e3916;
            class ge extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getPaymentDescription = (e, t) => {
                            const { adsAccount: n } = this.props;
                            return n && n.timezone && n.country_code ? (e ? ne : t ? re : oe) : t ? ie : ae;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, T.hq)(e)(T.Ur.promotionClick()), t(e);
                        }),
                        (this._handleEnrollCoupon = () => {
                            const { analytics: e, coupons: t, enrollCoupon: n, fundingInstrument: o } = this.props,
                                r = this._getCouponErrorMessage();
                            o && t?.eligible_coupon && !r && n(e);
                        }),
                        (this._getPromoteErrorMessage = () => {
                            const { promoteErrorCode: e, promoteStatus: t } = this.props;
                            if (!e) return t === b.ZP.LOADED ? se : null;
                            switch (e) {
                                case "MissingFundingInstrument":
                                case "InvalidPaymentMethod":
                                    return de;
                                case "CampaignCreationFailed":
                                case "PromotionIneligible":
                                    return ue;
                                default:
                                    return le;
                            }
                        }),
                        (this._getCouponErrorMessage = () => {
                            const { enrollCouponErrorCode: e } = this.props;
                            return e ? ce : null;
                        }),
                        (this._getCouponVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const o = e?.existing_balance.length ? e.existing_balance.find((e) => e.currency_code === t) : null,
                                r = !!o?.total_amount && o.total_amount > 0,
                                a = !!e?.eligible_coupon,
                                i = !(!e?.pending_coupon?.credit_amount || !e?.pending_coupon.spend_amount),
                                c = i || "ConditionalCouponExperiment" === e?.eligible_coupon_experiment ? "conditionalCoupon" : r || a ? "standardCoupon" : void 0,
                                s = this._getCouponErrorMessage();
                            return { existingCouponBalance: o, hasCouponCredit: r, isEligibleForCoupon: a, showCouponTerms: (i || r || a) && !s, couponType: c, couponErrorMessage: s };
                        }),
                        (this._getCouponCalloutVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const { enrollCouponErrorCode: o } = this.props,
                                r = "ConditionalCouponExperiment" === e?.eligible_coupon_experiment && e?.eligible_coupon?.credit_amount && e?.eligible_coupon?.spend_amount && !o,
                                a = e?.pending_coupon?.credit_amount && e?.pending_coupon.spend_amount,
                                i = r && e?.eligible_coupon?.credit_amount ? e.eligible_coupon.credit_amount : e?.pending_coupon?.credit_amount,
                                c = r && e?.eligible_coupon?.spend_amount ? e?.eligible_coupon?.spend_amount : e?.pending_coupon?.spend_amount,
                                s = r ? "eligibleCoupon" : "pendingCoupon";
                            return { showCouponCallout: r || a, couponCalloutText: (0, P.sV)({ calloutType: s, couponAmount: i || 0, spendAmount: c || 0, currency: t, lang: n }) };
                        });
                }
                componentDidMount() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fundingInstrument: n } = this.props;
                    t();
                    const o = !!n;
                    (0, T.hq)(e)(T.Ur.reviewPageLoad({ hasFundingInstrument: o })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: n, coupons: d, currency: g, dailyBudget: y, durationDays: b, fundingInstrument: Z, gender: w, keywords: I, lang: A, match: x, objective: L, promoteStatus: v, selectedPaymentMethod: D, targetedLocations: q } = this.props,
                        B = e?.needs_vat,
                        M = e?.isCanWriteBilling ?? !0,
                        R = (0, P.n9)(C.gT[t]),
                        F = (0, P.WF)(L),
                        N = I.length ? (0, P.R9)({ locations: q.map(({ localized_name: e }) => e), formattedAge: R, gender: (0, P.nW)(w), keywords: I }) : (0, P.HB)({ locations: q.map(({ localized_name: e }) => e), formattedAge: R, gender: (0, P.nW)(w) }),
                        { couponErrorMessage: z, couponType: O, existingCouponBalance: U, hasCouponCredit: K, isEligibleForCoupon: G, showCouponTerms: ne } = this._getCouponVariables({ coupons: d, currency: g, lang: A }),
                        oe = (0, P.Wl)({ dailyBudgetNum: y, durationDays: b, lang: A, currency: g }),
                        re = K ? "" : (0, P.Sy)({ amount: y * b, lang: A, currency: g }),
                        { quickPromotePlatform: ae, screenName: ie, statusId: ce } = x.params,
                        se = this._getPromoteErrorMessage(),
                        le = !!Z,
                        { couponCalloutText: ue, showCouponCallout: de } = this._getCouponCalloutVariables({ coupons: d, currency: g, lang: A });
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(f.O, { screenType: T.MN.Review }),
                        o.createElement(
                            r.Z,
                            { style: me.qpContainer, testID: k.Z.reviewScreen },
                            o.createElement(
                                S.ZP,
                                null,
                                se && o.createElement(r.Z, { style: me.gutter }, o.createElement(a.Z, { text: se, type: "danger" })),
                                z && o.createElement(r.Z, { style: me.gutter }, o.createElement(a.Z, { text: z, type: "warning" })),
                                o.createElement(h.Y, { title: H }),
                                !this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled") && o.createElement(p.t, { description: F, descriptionTestID: k.Z.reviewObjectiveDescription, label: Q, withBottomBorder: !1 }),
                                o.createElement(p.t, { description: N, descriptionTestID: k.Z.reviewTargetingDescription, label: W, withBottomBorder: !1 }),
                                o.createElement(i.RD.Consumer, null, ({ direction: e }) => o.createElement(p.t, { children: de && o.createElement(a.Z, { style: me.couponCallout, text: ue }), description: oe, descriptionDir: e, descriptionTestID: k.Z.reviewBudgetAndDurationDescription, label: j, withBottomBorder: !1 })),
                            ),
                            (0, S.FR)((e) => o.createElement(c.Z, { description: M && "CREDIT_CARD" === Z?.type && D && !B ? o.createElement(_.XL, { id: D.id, imgSrcUrl: D.imgSrcUrl, lastFourDigits: D.lastFourDigits, paymentDescriptionStyle: me.paymentDescription, status: D.cardStatus }) : Z && !B ? Z.description : o.createElement(s.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(le, G)), label: o.createElement(s.ZP, { weight: "bold" }, V), link: M ? (!Z || B ? (0, T.WS)(ie, ce, ae, T.MN.Payment) : "CREDIT_CARD" === Z?.type ? (0, T.WS)(ie, ce, ae, T.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: k.Z.reviewPaymentPivot })),
                        ),
                        o.createElement(
                            r.Z,
                            { style: me.bottomElements },
                            o.createElement(
                                S.ZP,
                                null,
                                o.createElement(
                                    p.t,
                                    { description: re, descriptionTestID: k.Z.reviewPromotionTotalDescription, label: $, withBottomBorder: !1 },
                                    K
                                        ? (function ({ balance: e, currency: t, lang: n, subtotal: a }) {
                                              const i = (0, P.Sy)({ amount: a, currency: t, lang: n }),
                                                  c = (0, P.Sy)({ amount: Math.min(a, e), currency: t, lang: n }),
                                                  l = (0, P.Sy)({ amount: Math.max(0, a - e), currency: t, lang: n }),
                                                  u = e > a ? (0, P.Sy)({ amount: e - a, currency: t, lang: n }) : null;
                                              return o.createElement(o.Fragment, null, o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, Y), o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, i)), o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "blue500", size: "subtext2" }, J), o.createElement(s.ZP, { color: "blue500", size: "subtext2" }, "-", c)), o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, X), o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: k.Z.reviewPromotionTotalDescription, weight: "bold" }, l)), u && o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, ee), o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, u)));
                                          })({ subtotal: y * b, balance: U?.total_amount || 0, currency: g, lang: A })
                                        : null,
                                ),
                                o.createElement(
                                    l.Z,
                                    { align: "left", style: me.terms },
                                    (function (e, t, n, r) {
                                        return n ? o.createElement(m().I18NFormatMessage, { $i18n: "fc2dfb3f" }, o.createElement(s.ZP, { link: (0, T.s0)(e) }, m().c1134966), o.createElement(s.ZP, { link: (0, T.bx)(t, r) }, m().he45cc43)) : o.createElement(m().I18NFormatMessage, { $i18n: "fcf4b2a5" }, o.createElement(s.ZP, { link: (0, T.s0)(e) }, m().c9439a82));
                                    })(n, A, ne, O),
                                ),
                                o.createElement(u.ZP, { disabled: !Z || B || E.LK.includes(v), onPress: this._handlePromote, size: "xLarge", testID: k.Z.reviewButton, type: "primaryFilled" }, te),
                            ),
                        ),
                    );
                }
            }
            ge.contextType = y.rC;
            const me = d.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, couponCallout: { marginTop: e.spaces.space12 }, childContainer: { paddingHorizontal: 0 }, terms: { textAlign: "start", color: e.colors.gray700, fontSize: e.fontSizes.subtext3, paddingBottom: e.spaces.space24 }, gutter: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" }, paymentDescription: { flexDirection: "row", marginStart: void 0, marginVertical: void 0, backgroundColor: void 0 } })),
                pe = G(ge);
        },
        301080: (e, t, n) => {
            n.d(t, { ZP: () => Y });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(779610),
                i = n(976145),
                c = n(731708),
                s = n(84679),
                l = n(834324),
                u = n(392237),
                d = n(111677),
                g = n.n(d),
                m = n(933277),
                p = n(161821),
                h = n(908478),
                y = n(847016),
                E = n(347720),
                C = n(443781),
                b = n(315032),
                f = n(934878),
                _ = n(953884),
                S = n(144528),
                P = n(457637),
                k = n(363895),
                T = n(668214),
                Z = n(852657),
                w = n(390387);
            const I = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                A = (e, t) => e.quickPromote.targeting.targetedLocations,
                x = (e, t) => e.quickPromote.targeting.gender,
                L = (e, t) => e.quickPromote.targeting.ageBucket,
                v = (e, t) => e.quickPromote.targeting.keywords,
                D = (e, t) => e.quickPromote.objective,
                q = (0, T.Z)()
                    .propsFromState(() => ({ lang: w.VT, isHousingAndUrbanDevelopmentLimitations: I, targetedLocations: A, selectedGender: x, selectedAgeBucket: L, selectedKeywords: v, objective: D }))
                    .propsFromActions(() => ({ setTargetedAgeBucket: Z.l$ }))
                    .withAnalytics(k.EP),
                B = g().c672105a,
                M = g().e1efbeae,
                R = g().c6ff7c10,
                F = g().b555fb46,
                N = g().a8d0108e,
                z = g().j2c03e12,
                O = ["18", "21", "25", "35", "50"],
                U = [void 0, void 0, "24", "34", "49", "54"],
                K = (0, m.Z)((0, p.Z)(b.gT), (e) => e.maxAge || "over"),
                G = U.length;
            function H(e, t) {
                if (e && t) return b.E4[e]?.[t];
            }
            class Q extends o.PureComponent {
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, k.hq)(e)(k.Ur.targetingPageLoad());
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: n, objective: l, selectedAgeBucket: u, selectedGender: d, selectedKeywords: g, targetedLocations: m } = this.props,
                        { featureSwitches: p } = this.context,
                        C = p.isTrue("responsive_web_qp_keyword_targeting_enabled") && l === b.CH.WebsiteClicks,
                        { quickPromotePlatform: T, screenName: Z, statusId: w } = n.params,
                        I = (0, S.Un)({ numLocations: m.length }),
                        { maxAge: A, minAge: x } = b.gT[u],
                        L = W(u),
                        v = A || z;
                    return o.createElement(
                        r.Z,
                        { style: $.qpContainer, testID: P.Z.targetingScreen },
                        o.createElement(f.O, { screenType: k.MN.Targeting }),
                        o.createElement(_.ZP, null, o.createElement(E.Y, { callout: e ? o.createElement(V, { lang: t }) : void 0, style: $.titleContainer, title: B })),
                        (0, _.FR)((t) => {
                            return o.createElement(
                                r.Z,
                                { style: $.targetingContainer },
                                o.createElement(a.Z, { description: (0, i.Z)(m.map(({ localized_name: e }) => e)), label: o.createElement(c.ZP, { weight: "bold" }, I), link: (0, k.WS)(Z, w, T, k.MN.TargetingLocation), paddingHorizontal: t, testID: P.Z.targetingLocationPivot }),
                                o.createElement(
                                    _.ZP,
                                    null,
                                    o.createElement(
                                        y.t,
                                        { label: M, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        o.createElement(s.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: F,
                                            endThumbAccessibilityLabelValueText: `"${v}"`,
                                            endThumbLabel: v,
                                            max: G,
                                            min: 0,
                                            onChange:
                                                ((n = this.props),
                                                ([e, t], o) => {
                                                    const { analytics: r, selectedAgeBucket: a, setTargetedAgeBucket: i } = n,
                                                        c = W(a);
                                                    if (!(0, h.Z)(c, [e, t]))
                                                        if (o) {
                                                            const o = O[e];
                                                            if (!o) return;
                                                            const a = t === G ? "over" : U[t],
                                                                c = H(o, a);
                                                            if (c) (0, k.hq)(r)(k.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const e = Object.keys(b.E4[o])[0];
                                                                j({ minAge: o, maxAge: e, props: n });
                                                            }
                                                        } else {
                                                            const o = t === G ? "over" : U[t];
                                                            if (!o) return;
                                                            const a = O[e],
                                                                c = H(a, o);
                                                            if (c) (0, k.hq)(r)(k.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const { minAge: e } = K[o].slice(-1)[0];
                                                                j({ minAge: e, maxAge: o, props: n });
                                                            }
                                                        }
                                                }),
                                            startThumbAccessibilityLabel: R,
                                            startThumbAccessibilityLabelValueText: `"${x}"`,
                                            startThumbLabel: x,
                                            value: L,
                                        }),
                                    ),
                                ),
                                o.createElement(a.Z, { description: (0, S.nW)(d), disabled: e, label: o.createElement(c.ZP, { weight: "bold" }, N), link: (0, k.WS)(Z, w, T, k.MN.TargetingGender), paddingHorizontal: t, testID: P.Z.targetingGenderPivot }),
                                C && o.createElement(a.Z, { description: (0, i.Z)(g), label: o.createElement(c.ZP, { weight: "bold" }, "Keywords"), link: (0, k.WS)(Z, w, T, k.MN.TargetingKeywords), paddingHorizontal: t, testID: P.Z.targetingKeywordsPivot }),
                            );
                            var n;
                        }),
                    );
                }
            }
            function W(e) {
                const { maxAge: t, minAge: n } = b.gT[e];
                return [O.indexOf(n), t ? U.indexOf(t) : G];
            }
            function j({ maxAge: e, minAge: t, props: n }) {
                const { analytics: o, setTargetedAgeBucket: r } = n,
                    a = b.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, k.hq)(o)(k.Ur.setTargetingAgeBucket(a)), r(a);
            }
            function V({ lang: e }) {
                const t = (0, k.C0)(e),
                    n = o.useMemo(() => ({ termsLink: o.createElement(c.ZP, { link: t }) }), [t]);
                return o.createElement(l.Z, { text: o.createElement(g().I18NFormatMessage, { $i18n: "f54ad505" }, o.cloneElement(n.termsLink, null, g().d4e01892)) });
            }
            Q.contextType = C.rC;
            const $ = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                Y = q(Q);
        },
        3918: (e, t, n) => {
            n.d(t, { ZP: () => Z });
            var o = n(202784),
                r = n(325686),
                a = n(370006),
                i = n(786998),
                c = n(449479),
                s = n(392237),
                l = n(111677),
                u = n.n(l),
                d = n(315032),
                g = n(934878),
                m = n(953884),
                p = n(144528),
                h = n(457637),
                y = n(363895),
                E = n(668214),
                C = n(852657);
            const b = (e, t) => e.quickPromote.targeting.gender,
                f = (e, t) => e.quickPromote.account.campaigns,
                _ = (0, E.Z)()
                    .propsFromState(() => ({ selectedGender: b, campaigns: f }))
                    .propsFromActions(() => ({ setTargetedGender: C.A_ }))
                    .withAnalytics(y.EP),
                S = [d.Y0.Any, d.Y0.Female, d.Y0.Male].map((e) => ({ label: (0, p.nW)(e), value: e, testID: h.Z.getTargetingGender(e) })),
                P = u().df8d4fa0,
                k = ({ children: e, onBack: t }) => {
                    const n = o.useMemo(() => o.createElement(a.Z, { onClick: t }), [t]);
                    return o.createElement(r.Z, { style: T.qpContainer, testID: h.Z.targetingGenderScreen }, o.createElement(i.Z, { leftControl: n, style: T.appBar, title: P }), e);
                },
                T = s.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                Z = _(({ analytics: e, selectedGender: t, setTargetedGender: n, ...a }) => {
                    const i = o.useCallback(() => {
                            const { history: e, location: t, match: n } = a,
                                { quickPromotePlatform: o, quickPromoteScreenName: r, screenName: i, statusId: c } = n.params;
                            (0, y.Mi)(e, t)(i, c, o, r);
                        }, [a]),
                        s = o.useCallback(
                            (t, o) => {
                                n(o), (0, y.hq)(e)(y.Ur.setTargetingGender(o)), i();
                            },
                            [e, n, i],
                        );
                    return (0, g.d)(y.MN.TargetingGender), o.createElement(k, { onBack: i }, o.createElement(m.ZP, null, o.createElement(r.Z, { style: T.selectionGroupContainer }, o.createElement(c.Z, { name: "gender", onChange: s, options: S, value: t }))));
                });
        },
        963379: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(202784),
                r = n(953884),
                a = n(363895),
                i = n(668214),
                c = n(852657);
            const s = (e) => e.quickPromote.targeting.contextualKeywords,
                l = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: s }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP),
                u = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: s }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP);
            var d = n(325686),
                g = n(370006),
                m = n(786998),
                p = n(392237),
                h = n(457637);
            function y({ children: e, onBack: t }) {
                const n = o.useMemo(() => o.createElement(g.Z, { onClick: t }), [t]);
                return o.createElement(d.Z, { style: E.qpContainer, testID: h.Z.targetingKeywordsScreen }, o.createElement(m.Z, { leftControl: n, style: E.appBar, title: "Select some keywords" }), e);
            }
            const E = p.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var C = n(855488),
                b = n(111677),
                f = n.n(b),
                _ = n(187669),
                S = n(934878),
                P = n(599190),
                k = n(973014);
            function T({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: r }) {
                const a = o.useCallback(() => r(e.filter((e, n) => n !== t)), [e, t, r]),
                    i = o.useMemo(() => ({ disabled: !1, mode: P.D.Remove, onSecondaryClick: a }), [a]);
                return o.createElement(k.Z, { secondaryAction: i, style: Z.withMarginEnd, text: n });
            }
            const Z = p.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                w = f().fe26420a;
            function I({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: r }) {
                const [i, c] = o.useState(""),
                    s = o.useCallback((e) => {
                        const t = e.target.value;
                        c(t);
                    }, []),
                    l = o.useCallback(
                        (e) => {
                            switch (e.key) {
                                case ",":
                                case "Enter": {
                                    e.preventDefault();
                                    const n = i.trim(),
                                        o = t.some((e) => e.toLowerCase() === n.toLowerCase());
                                    "" === n || o || (r(t.concat(n)), c(""));
                                    break;
                                }
                            }
                        },
                        [t, i, r],
                    );
                return (
                    (0, _.q)(() => () => {
                        (0, a.hq)(e)(a.Ur.setTargetingKeywords(t.join(",")));
                    }),
                    (0, _.q)(() => {
                        r(n);
                    }),
                    (0, S.d)(a.MN.TargetingKeywords),
                    o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(d.Z, { style: A.selectionGroupContainer }, o.createElement(C.Z, { editable: t.length < 200, label: w, name: "keywords", onChange: s, onKeyDown: l, style: A.noSpacing, testID: h.Z.targetingKeywordsInput, value: i })),
                        o.createElement(
                            d.Z,
                            { style: A.row },
                            t.map((e, n) => o.createElement(T, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: r })),
                        ),
                    )
                );
            }
            u(I);
            const A = p.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const x = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: i, location: c, match: s, setTargetedContextualKeywords: l } = e,
                    u = o.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: o } = s.params;
                        (0, a.Mi)(i, c)(n, o, e, t);
                    }, [i, c, s.params]),
                    d = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return o.createElement(y, { onBack: u }, o.createElement(r.ZP, null, o.createElement(I, d)));
            });
        },
        489601: (e, t, n) => {
            n.d(t, { Z: () => $ });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(879113),
                c = n(954110),
                s = n(834324),
                l = n(67369),
                u = n(786998),
                d = n(370006),
                g = n(371344),
                m = n(392237),
                p = n(111677),
                h = n.n(p),
                y = n(956272),
                E = n(370751),
                C = n(326399),
                b = n(443781),
                f = n(163889),
                _ = n(312771),
                S = n(934878),
                P = n(953884),
                k = n(144528),
                T = n(457637),
                Z = n(363895),
                w = n(71620),
                I = n(668214),
                A = n(852657),
                x = n(390387);
            const L = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingLocation[n];
                },
                v = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingCatalogSearch[n];
                },
                D = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingCatalogSearch[n]?.fetchStatus || e.ads.typeahead.targetingLocation[n]?.fetchStatus;
                },
                q = (e, t) => e.quickPromote.targeting.locationQuery,
                B = (e, t) => e.quickPromote.targeting.targetedLocations,
                M = (e, t) => e.quickPromote.account.campaigns,
                R = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                F = (e, t) => e.quickPromote.account.adsAccount,
                N = (0, I.Z)()
                    .propsFromState(() => ({ targetingLocationQuery: q, targetingLocations: L, targetingCatalogSearch: v, targetedLocations: B, fetchStatus: D, userCountry: x.GG, campaigns: M, isHousingAndUrbanDevelopmentLimitations: R, adsAccount: F }))
                    .propsFromActions(() => ({ setTargetedLocations: A.hI, setAndFetchTargetingLocationQuery: A.sN, setAndFetchTargetingCatalogSearch: A.WD, setTargetingLocationQuery: A.zu, createLocalApiErrorHandler: (0, w.zr)("QUICK_PROMOTE_TARGETING_LOCATION_SCREEN") }))
                    .withAnalytics(Z.EP),
                z = (e) => {
                    if (!e || "object" != typeof e) return { localized_name: "", country_code: "US", parent_ids: [], location_type: "CITIES", targeting_value: "", targeting_type: "LOCATION" };
                    let t = "CITIES";
                    const n = e.rich_label || "";
                    n.includes("Country —") ? (t = "COUNTRIES") : n.includes("Region") || n.includes("state —") ? (t = "REGIONS") : n.includes("Metro —") || n.includes("DMA —") ? (t = "METROS") : n.includes("City —") && (t = "CITIES");
                    let o = "US";
                    try {
                        const e = n.match(/,\s([A-Z]{2})(?:\s|$|,)/);
                        e && e[1] && (o = e[1]);
                    } catch (e) {}
                    let r = e.label || "";
                    if (e.rich_label) {
                        const t = e.rich_label.split(" — ");
                        r = t.length > 1 ? t.slice(1).join(" — ") : e.rich_label;
                    }
                    return { localized_name: r, country_code: o, parent_ids: [], location_type: t, targeting_value: e.api_targeting_value || "", targeting_type: "LOCATION" };
                },
                O = h().cc642518,
                U = h().i0e8c3c6,
                K = h().deaf5b16,
                G = h().f69ad048,
                H = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
                Q = Object.freeze({ [Z.cU.CurrentCountryMatch]: 0, [Z.cU.Match]: 1, [Z.cU.NoMatch]: 2 });
            class W extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: null, retryState: null, currentRetryId: null }),
                        (this._renderSearch = () => {
                            const { fetchStatus: e, targetingLocationQuery: t } = this.props,
                                { retryState: n } = this.state;
                            let c = e;
                            return (n?.isRetrying || (n && e === _.iF.FAILED)) && (c = _.iF.LOADING), o.createElement(j, { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t }, o.createElement(r.Z, { style: V.border }, o.createElement(P.ZP, null, o.createElement(a.ZP, { style: V.headingText, weight: "heavy" }, U))), o.createElement(i.Z, { fetchStatus: c, render: this._renderSearchList, retryMessage: K }));
                        }),
                        (this._handleClear = () => {
                            const { setTargetingLocationQuery: e } = this.props;
                            e("");
                        }),
                        (this._renderSearchList = () => {
                            const { targetedLocations: e } = this.props,
                                t = (0, E.Z)(e.map(({ targeting_value: e }) => e)),
                                n = this._getTargetingLocationOptions();
                            return o.createElement(
                                r.Z,
                                { style: V.overflow },
                                o.createElement(
                                    P.ZP,
                                    null,
                                    n.map(({ localized_name: e, location_type: n, targeting_value: r }) => o.createElement(c.Z, { checked: t.has(r), helpText: (0, k.sA)(n), key: r, label: e, name: r, onChange: this._handleSearchSelect, testID: T.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._getTargetingLocationOptions = () => {
                            const { isHousingAndUrbanDevelopmentLimitations: e, targetingCatalogSearch: t, targetingLocationQuery: n, targetingLocations: o, userCountry: r } = this.props;
                            let a = [];
                            if (t?.result && Array.isArray(t.result) && t.result.length > 0)
                                try {
                                    a = t.result.map(z);
                                } catch (e) {
                                    if (!o?.result?.[0]?.locations) return [];
                                    a = o.result[0].locations;
                                }
                            else {
                                if (!o?.result?.[0]?.locations) return [];
                                a = o.result[0].locations;
                            }
                            const i = (0, Z.Jy)(r || "US"),
                                c = (a || []).filter((t) => {
                                    const o = t?.country_code || "US",
                                        r = t?.localized_name || "";
                                    if (e && "POSTAL_CODES" === (t?.location_type || "CITIES")) return !1;
                                    return i(r, o, n) !== Z.cU.NoMatch;
                                });
                            if (!c || 0 === c.length) return [];
                            try {
                                return (0, C.Z)(
                                    c,
                                    [
                                        (e) => {
                                            if (!e) return 999;
                                            const t = e.country_code || "US",
                                                o = e.localized_name || "";
                                            try {
                                                const e = i(o, t, n);
                                                return Q[e] ?? 2;
                                            } catch (e) {
                                                return 999;
                                            }
                                        },
                                        (e) => {
                                            if (!e) return 999;
                                            const t = e.location_type || "CITIES",
                                                n = H[t];
                                            return void 0 !== n
                                                ? n
                                                : (((e) => {
                                                      (0, f.ZP)(`Quick Promote: Unknown location type: ${e}. Expected one of {${Object.keys(H).join(", ")}}`);
                                                  })(t),
                                                  Object.keys(H).length);
                                        },
                                        (e) => (e && e.localized_name) || "zzz",
                                    ],
                                    "asc",
                                );
                            } catch (e) {
                                return c;
                            }
                        }),
                        (this._handleSearchSelect = (e, t) => {
                            const { analytics: n, setTargetedLocations: o, setTargetingLocationQuery: r } = this.props;
                            if (t) {
                                this.setState({ errorMessage: null });
                                const t = this._getTargetingLocationOptions().find(({ targeting_value: t }) => t === e);
                                t ? ((0, Z.hq)(n)(Z.Ur.setTargetingLocation({ id: t.targeting_value, locationType: t.location_type, countryCode: t.country_code })), o([t]), this._handleGoBack()) : (0, f.ZP)(`Quick Promote: could not find "${e}" in list of targeting options`);
                            } else (0, Z.hq)(n)(Z.Ur.targetingLocationInvalid()), this.setState({ errorMessage: G });
                            r("");
                        }),
                        (this._renderSelected = () => {
                            const { targetedLocations: e, targetingLocationQuery: t } = this.props,
                                { errorMessage: n } = this.state;
                            return o.createElement(
                                j,
                                { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t },
                                o.createElement(r.Z, null, n && o.createElement(P.ZP, null, o.createElement(r.Z, { style: V.gutterVertical }, o.createElement(s.Z, { text: n, type: "danger" }))), o.createElement(r.Z, { style: V.border }, o.createElement(P.ZP, null, o.createElement(a.ZP, { style: V.headingText, weight: "heavy" }, (0, k.Un)({ numLocations: e.length }))))),
                                o.createElement(
                                    P.ZP,
                                    null,
                                    e.map(({ localized_name: e, location_type: t, targeting_value: n }) => o.createElement(c.Z, { checked: !0, helpText: (0, k.sA)(t), key: n, label: e, name: n, onChange: this._handleSearchSelect, testID: T.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._handleGoBack = () => {
                            const { history: e, location: t, match: n } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: r, screenName: a, statusId: i } = n.params;
                            (0, Z.Mi)(e, t)(a, i, o, r);
                        }),
                        (this._handleTargetingLocationChange = (e) => {
                            const t = e.target.value,
                                { analytics: n, createLocalApiErrorHandler: o, setAndFetchTargetingCatalogSearch: r, setAndFetchTargetingLocationQuery: a } = this.props,
                                { retryState: i } = this.state;
                            i && i.originalQuery !== t && this.setState({ retryState: null, currentRetryId: null }), (0, Z.hq)(n)(Z.Ur.targetingLocationSearch(t));
                            const c = async (e = 1, i = null) => {
                                let s = i;
                                if ((s || ((s = `${t}_${Date.now()}_${Math.random()}`), this.setState({ retryState: { attempts: 1, isRetrying: !1, originalQuery: t, cancelled: !1 }, currentRetryId: s })), 1 === e));
                                else {
                                    if (this.state.currentRetryId !== s) return;
                                    if ((this.setState({ retryState: { attempts: e, isRetrying: !0, originalQuery: t, cancelled: !1 }, currentRetryId: s }), await new Promise((e) => setTimeout(e, 500)), this.state.currentRetryId !== s)) return;
                                }
                                try {
                                    if ((await r(t), this.state.currentRetryId !== s)) return;
                                    this.setState({ retryState: null, currentRetryId: null });
                                } catch (r) {
                                    if (this.state.currentRetryId !== s) return;
                                    const i = ((e) => e?.graphqlErrors?.some((e) => 29 === e?.code || "TimeoutError" === e?.name || e?.message?.includes("Timeout")) || e?.errors?.some((e) => 29 === e?.code || e?.message?.includes("Timeout")))(r);
                                    if (i && e < 11) {
                                        if ((this.setState({ retryState: { attempts: e + 1, isRetrying: !0, originalQuery: t, cancelled: !1 }, currentRetryId: s }), await new Promise((e) => setTimeout(e, 500)), this.state.currentRetryId !== s)) return;
                                        return c(e + 1, s);
                                    }
                                    this.setState({ retryState: null, currentRetryId: null });
                                    try {
                                        await a(t);
                                    } catch (e) {
                                        (0, Z.hq)(n)(Z.Ur.targetingLocationSearchRestFail(`REST fallback failed after GraphQL retries: ${e?.message || "REST search failed"}`)), o()(e);
                                    }
                                }
                            };
                            c().catch((e) => {
                                this.setState({ retryState: null }), o()(e);
                            });
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, Z.hq)(e)(Z.Ur.targetingLocationPageLoad());
                }
                componentWillUnmount() {
                    this._handleClear(), this.setState({ retryState: null, currentRetryId: null });
                }
                render() {
                    const { targetingLocationQuery: e } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement(S.O, { screenType: Z.MN.TargetingLocation }), e ? this._renderSearch() : this._renderSelected());
                }
            }
            W.contextType = b.rC;
            const j = ({ children: e, onBack: t, onChange: n, onClear: a, targetingLocationQuery: i }) => {
                    const c = (0, l.Zz)();
                    return o.createElement(r.Z, { style: V.qpContainer, testID: T.Z.targetingLocationScreen }, o.createElement(u.Z, { leftControl: o.createElement(d.Z, { onClick: t }), middleControl: o.createElement(r.Z, { style: c ? V.mobileInputContainer : V.inputContainer }, o.createElement(g.Z, { Icon: y.default, autoFocus: !0, name: "locationTargetingInput", onChange: n, onClear: a, placeholder: O, style: V.input, testID: T.Z.targetingLocationSearch, value: i, withClearButton: !0 })) }), e);
                },
                V = m.default.create((e) => ({ qpContainer: { flex: 1 }, inputContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space64 }, mobileInputContainer: { paddingEnd: e.spaces.space16 }, input: { marginVertical: e.spaces.space12 }, border: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, headingText: { fontSize: e.fontSizes.headline1, paddingVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, overflow: { flexGrow: 1, flexShrink: 1, flexBasis: "200px", overflowY: "auto" } })),
                $ = N(W);
        },
        764940: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(71620),
                r = n(668214),
                a = n(852657),
                i = n(836255),
                c = n(312771),
                s = n(363895);
            const l = (e, t) => t.match.params.statusId,
                u = (e, t) => i.Z.selectHydrated(e, l(0, t)),
                d = (e, t) => (0, c.h1)(i.Z.selectFetchStatus(e, l(0, t)), e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus, e.quickPromote.couponsFetchStatus),
                g = (e, t) => e.quickPromote.promoteStatus,
                m = (e, t) => e.quickPromote.promoteErrorCode,
                p = (e, t) => e.quickPromote.account.campaigns,
                h = (0, r.Z)()
                    .propsFromState(() => ({ statusId: l, fetchStatus: d, tweet: u, campaigns: p, promoteFetchStatus: g, promoteErrorCode: m }))
                    .propsFromActions((e) => ({
                        createLocalApiErrorHandler: (0, o.zr)("QUICK_PROMOTE_SCREEN"),
                        fetchTweetIfNeeded: i.Z.fetchOneIfNeeded,
                        fetchCurrentTargetingLocationIfNeeded: a.yW,
                        fetchAvailableBudgetsIfNeeded: a.WS,
                        fetchAdsAccountDataIfNeeded: a.Ek,
                        fetchQuickPromoteEligibilityIfNeeded: a.E6,
                        fetchCouponsIfNeeded: a.fN,
                        handleFirstLoad: () =>
                            ((e) => {
                                const { analytics: t, history: n, location: o, match: r } = e,
                                    { quickPromotePlatform: i, quickPromoteScreenName: c, screenName: s, statusId: l } = r.params,
                                    u = { pa_signup_complete: o.query.pa_signup_complete || "" };
                                return (0, a.Jk)(s, l, i, c, n, u, t);
                            })(e),
                        setObjective: a.mS,
                        setPromoteFetchStatus: a.Ik,
                    }))
                    .withAnalytics(s.EP);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-9c7eb7fe.6daddc6a.js.map
