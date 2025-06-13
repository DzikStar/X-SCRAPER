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
                _ = n(934878),
                f = n(728300),
                P = n(953884),
                k = n(144528),
                S = n(457637),
                T = n(363895),
                Z = n(71620),
                w = n(668214),
                x = n(390387);
            const v = (e) => e.quickPromote.objective,
                L = (e, t) => e.quickPromote.targeting.targetedLocations,
                A = (e, t) => e.quickPromote.targeting.ageBucket,
                I = (e, t) => e.quickPromote.targeting.gender,
                q = (e, t) => e.quickPromote.targeting.keywords,
                D = (e, t) => e.quickPromote.budget.dailyBudget,
                B = (e, t) => e.quickPromote.budget.durationDays,
                M = (e) => e.quickPromote.budget.currency || "USD",
                F = (e) => e.quickPromote.account.selectedFundingInstrument,
                N = (e) => e.quickPromote.account.adsAccount,
                z = (e) => e.quickPromote.promoteStatus,
                U = (e) => e.quickPromote.promoteErrorCode,
                O = (e) => e.quickPromote.coupons,
                R = (e) => e.quickPromote.enrollCouponErrorCode,
                K =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: o, screenName: r, statusId: a } = t.params,
                            i = (0, T.WS)(r, a, o, T.MN.Done);
                        return (0, E.kb)({ history: e, statusId: a, nextPath: i, analytics: n });
                    },
                G = (0, w.Z)()
                    .propsFromState(() => ({ objective: v, targetedLocations: L, ageBucket: A, gender: I, keywords: q, dailyBudget: D, durationDays: B, lang: x.VT, country: E.QE, currency: M, fundingInstrument: F, adsAccount: N, promoteStatus: z, promoteErrorCode: U, coupons: O, enrollCouponErrorCode: R, selectedPaymentMethod: E.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, Z.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, E.oE)(), createPromotion: K(e), enrollCoupon: E.br }))
                    .withAnalytics(T.EP),
                H = m().db443ae2,
                W = m().a96f811e,
                Q = m().b069d89c,
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
                            return { showCouponCallout: r || a, couponCalloutText: (0, k.sV)({ calloutType: s, couponAmount: i || 0, spendAmount: c || 0, currency: t, lang: n }) };
                        });
                }
                componentDidMount() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fundingInstrument: n } = this.props;
                    t();
                    const o = !!n;
                    (0, T.hq)(e)(T.Ur.reviewPageLoad({ hasFundingInstrument: o })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: n, coupons: d, currency: g, dailyBudget: y, durationDays: b, fundingInstrument: Z, gender: w, keywords: x, lang: v, match: L, objective: A, promoteStatus: I, selectedPaymentMethod: q, targetedLocations: D } = this.props,
                        B = e?.needs_vat,
                        M = e?.isCanWriteBilling ?? !0,
                        F = (0, k.n9)(C.gT[t]),
                        N = (0, k.WF)(A),
                        z = x.length ? (0, k.R9)({ locations: D.map(({ localized_name: e }) => e), formattedAge: F, gender: (0, k.nW)(w), keywords: x }) : (0, k.HB)({ locations: D.map(({ localized_name: e }) => e), formattedAge: F, gender: (0, k.nW)(w) }),
                        { couponErrorMessage: U, couponType: O, existingCouponBalance: R, hasCouponCredit: K, isEligibleForCoupon: G, showCouponTerms: ne } = this._getCouponVariables({ coupons: d, currency: g, lang: v }),
                        oe = (0, k.Wl)({ dailyBudgetNum: y, durationDays: b, lang: v, currency: g }),
                        re = K ? "" : (0, k.Sy)({ amount: y * b, lang: v, currency: g }),
                        { quickPromotePlatform: ae, screenName: ie, statusId: ce } = L.params,
                        se = this._getPromoteErrorMessage(),
                        le = !!Z,
                        { couponCalloutText: ue, showCouponCallout: de } = this._getCouponCalloutVariables({ coupons: d, currency: g, lang: v });
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(_.O, { screenType: T.MN.Review }),
                        o.createElement(
                            r.Z,
                            { style: me.qpContainer, testID: S.Z.reviewScreen },
                            o.createElement(
                                P.ZP,
                                null,
                                se && o.createElement(r.Z, { style: me.gutter }, o.createElement(a.Z, { text: se, type: "danger" })),
                                U && o.createElement(r.Z, { style: me.gutter }, o.createElement(a.Z, { text: U, type: "warning" })),
                                o.createElement(h.Y, { title: H }),
                                !this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled") && o.createElement(p.t, { description: N, descriptionTestID: S.Z.reviewObjectiveDescription, label: W, withBottomBorder: !1 }),
                                o.createElement(p.t, { description: z, descriptionTestID: S.Z.reviewTargetingDescription, label: Q, withBottomBorder: !1 }),
                                o.createElement(i.RD.Consumer, null, ({ direction: e }) => o.createElement(p.t, { children: de && o.createElement(a.Z, { style: me.couponCallout, text: ue }), description: oe, descriptionDir: e, descriptionTestID: S.Z.reviewBudgetAndDurationDescription, label: j, withBottomBorder: !1 })),
                            ),
                            (0, P.FR)((e) => o.createElement(c.Z, { description: M && "CREDIT_CARD" === Z?.type && q && !B ? o.createElement(f.XL, { id: q.id, imgSrcUrl: q.imgSrcUrl, lastFourDigits: q.lastFourDigits, paymentDescriptionStyle: me.paymentDescription, status: q.cardStatus }) : Z && !B ? Z.description : o.createElement(s.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(le, G)), label: o.createElement(s.ZP, { weight: "bold" }, V), link: M ? (!Z || B ? (0, T.WS)(ie, ce, ae, T.MN.Payment) : "CREDIT_CARD" === Z?.type ? (0, T.WS)(ie, ce, ae, T.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: S.Z.reviewPaymentPivot })),
                        ),
                        o.createElement(
                            r.Z,
                            { style: me.bottomElements },
                            o.createElement(
                                P.ZP,
                                null,
                                o.createElement(
                                    p.t,
                                    { description: re, descriptionTestID: S.Z.reviewPromotionTotalDescription, label: $, withBottomBorder: !1 },
                                    K
                                        ? (function ({ balance: e, currency: t, lang: n, subtotal: a }) {
                                              const i = (0, k.Sy)({ amount: a, currency: t, lang: n }),
                                                  c = (0, k.Sy)({ amount: Math.min(a, e), currency: t, lang: n }),
                                                  l = (0, k.Sy)({ amount: Math.max(0, a - e), currency: t, lang: n }),
                                                  u = e > a ? (0, k.Sy)({ amount: e - a, currency: t, lang: n }) : null;
                                              return o.createElement(o.Fragment, null, o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, Y), o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, i)), o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "blue500", size: "subtext2" }, J), o.createElement(s.ZP, { color: "blue500", size: "subtext2" }, "-", c)), o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, X), o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: S.Z.reviewPromotionTotalDescription, weight: "bold" }, l)), u && o.createElement(r.Z, { style: me.promotionTotalRow }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, ee), o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, u)));
                                          })({ subtotal: y * b, balance: R?.total_amount || 0, currency: g, lang: v })
                                        : null,
                                ),
                                o.createElement(
                                    l.Z,
                                    { align: "left", style: me.terms },
                                    (function (e, t, n, r) {
                                        return n ? o.createElement(m().I18NFormatMessage, { $i18n: "fc2dfb3f" }, o.createElement(s.ZP, { link: (0, T.s0)(e) }, m().c1134966), o.createElement(s.ZP, { link: (0, T.bx)(t, r) }, m().he45cc43)) : o.createElement(m().I18NFormatMessage, { $i18n: "fcf4b2a5" }, o.createElement(s.ZP, { link: (0, T.s0)(e) }, m().c9439a82));
                                    })(n, v, ne, O),
                                ),
                                o.createElement(u.ZP, { disabled: !Z || B || E.LK.includes(I), onPress: this._handlePromote, size: "xLarge", testID: S.Z.reviewButton, type: "primaryFilled" }, te),
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
                _ = n(934878),
                f = n(953884),
                P = n(144528),
                k = n(457637),
                S = n(363895),
                T = n(668214),
                Z = n(852657),
                w = n(390387);
            const x = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                v = (e, t) => e.quickPromote.targeting.targetedLocations,
                L = (e, t) => e.quickPromote.targeting.gender,
                A = (e, t) => e.quickPromote.targeting.ageBucket,
                I = (e, t) => e.quickPromote.targeting.keywords,
                q = (e, t) => e.quickPromote.objective,
                D = (0, T.Z)()
                    .propsFromState(() => ({ lang: w.VT, isHousingAndUrbanDevelopmentLimitations: x, targetedLocations: v, selectedGender: L, selectedAgeBucket: A, selectedKeywords: I, objective: q }))
                    .propsFromActions(() => ({ setTargetedAgeBucket: Z.l$ }))
                    .withAnalytics(S.EP),
                B = g().c672105a,
                M = g().e1efbeae,
                F = g().c6ff7c10,
                N = g().b555fb46,
                z = g().a8d0108e,
                U = g().j2c03e12,
                O = ["18", "21", "25", "35", "50"],
                R = [void 0, void 0, "24", "34", "49", "54"],
                K = (0, m.Z)((0, p.Z)(b.gT), (e) => e.maxAge || "over"),
                G = R.length;
            function H(e, t) {
                if (e && t) return b.E4[e]?.[t];
            }
            class W extends o.PureComponent {
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, S.hq)(e)(S.Ur.targetingPageLoad());
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: n, objective: l, selectedAgeBucket: u, selectedGender: d, selectedKeywords: g, targetedLocations: m } = this.props,
                        { featureSwitches: p } = this.context,
                        C = p.isTrue("responsive_web_qp_keyword_targeting_enabled") && l === b.CH.WebsiteClicks,
                        { quickPromotePlatform: T, screenName: Z, statusId: w } = n.params,
                        x = (0, P.Un)({ numLocations: m.length }),
                        { maxAge: v, minAge: L } = b.gT[u],
                        A = Q(u),
                        I = v || U;
                    return o.createElement(
                        r.Z,
                        { style: $.qpContainer, testID: k.Z.targetingScreen },
                        o.createElement(_.O, { screenType: S.MN.Targeting }),
                        o.createElement(f.ZP, null, o.createElement(E.Y, { callout: e ? o.createElement(V, { lang: t }) : void 0, style: $.titleContainer, title: B })),
                        (0, f.FR)((t) => {
                            return o.createElement(
                                r.Z,
                                { style: $.targetingContainer },
                                o.createElement(a.Z, { description: (0, i.Z)(m.map(({ localized_name: e }) => e)), label: o.createElement(c.ZP, { weight: "bold" }, x), link: (0, S.WS)(Z, w, T, S.MN.TargetingLocation), paddingHorizontal: t, testID: k.Z.targetingLocationPivot }),
                                o.createElement(
                                    f.ZP,
                                    null,
                                    o.createElement(
                                        y.t,
                                        { label: M, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        o.createElement(s.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: N,
                                            endThumbAccessibilityLabelValueText: `"${I}"`,
                                            endThumbLabel: I,
                                            max: G,
                                            min: 0,
                                            onChange:
                                                ((n = this.props),
                                                ([e, t], o) => {
                                                    const { analytics: r, selectedAgeBucket: a, setTargetedAgeBucket: i } = n,
                                                        c = Q(a);
                                                    if (!(0, h.Z)(c, [e, t]))
                                                        if (o) {
                                                            const o = O[e];
                                                            if (!o) return;
                                                            const a = t === G ? "over" : R[t],
                                                                c = H(o, a);
                                                            if (c) (0, S.hq)(r)(S.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const e = Object.keys(b.E4[o])[0];
                                                                j({ minAge: o, maxAge: e, props: n });
                                                            }
                                                        } else {
                                                            const o = t === G ? "over" : R[t];
                                                            if (!o) return;
                                                            const a = O[e],
                                                                c = H(a, o);
                                                            if (c) (0, S.hq)(r)(S.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const { minAge: e } = K[o].slice(-1)[0];
                                                                j({ minAge: e, maxAge: o, props: n });
                                                            }
                                                        }
                                                }),
                                            startThumbAccessibilityLabel: F,
                                            startThumbAccessibilityLabelValueText: `"${L}"`,
                                            startThumbLabel: L,
                                            value: A,
                                        }),
                                    ),
                                ),
                                o.createElement(a.Z, { description: (0, P.nW)(d), disabled: e, label: o.createElement(c.ZP, { weight: "bold" }, z), link: (0, S.WS)(Z, w, T, S.MN.TargetingGender), paddingHorizontal: t, testID: k.Z.targetingGenderPivot }),
                                C && o.createElement(a.Z, { description: (0, i.Z)(g), label: o.createElement(c.ZP, { weight: "bold" }, "Keywords"), link: (0, S.WS)(Z, w, T, S.MN.TargetingKeywords), paddingHorizontal: t, testID: k.Z.targetingKeywordsPivot }),
                            );
                            var n;
                        }),
                    );
                }
            }
            function Q(e) {
                const { maxAge: t, minAge: n } = b.gT[e];
                return [O.indexOf(n), t ? R.indexOf(t) : G];
            }
            function j({ maxAge: e, minAge: t, props: n }) {
                const { analytics: o, setTargetedAgeBucket: r } = n,
                    a = b.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, S.hq)(o)(S.Ur.setTargetingAgeBucket(a)), r(a);
            }
            function V({ lang: e }) {
                const t = (0, S.C0)(e),
                    n = o.useMemo(() => ({ termsLink: o.createElement(c.ZP, { link: t }) }), [t]);
                return o.createElement(l.Z, { text: o.createElement(g().I18NFormatMessage, { $i18n: "f54ad505" }, o.cloneElement(n.termsLink, null, g().d4e01892)) });
            }
            W.contextType = C.rC;
            const $ = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                Y = D(W);
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
                _ = (e, t) => e.quickPromote.account.campaigns,
                f = (0, E.Z)()
                    .propsFromState(() => ({ selectedGender: b, campaigns: _ }))
                    .propsFromActions(() => ({ setTargetedGender: C.A_ }))
                    .withAnalytics(y.EP),
                P = [d.Y0.Any, d.Y0.Female, d.Y0.Male].map((e) => ({ label: (0, p.nW)(e), value: e, testID: h.Z.getTargetingGender(e) })),
                k = u().df8d4fa0,
                S = ({ children: e, onBack: t }) => {
                    const n = o.useMemo(() => o.createElement(a.Z, { onClick: t }), [t]);
                    return o.createElement(r.Z, { style: T.qpContainer, testID: h.Z.targetingGenderScreen }, o.createElement(i.Z, { leftControl: n, style: T.appBar, title: k }), e);
                },
                T = s.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                Z = f(({ analytics: e, selectedGender: t, setTargetedGender: n, ...a }) => {
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
                    return (0, g.d)(y.MN.TargetingGender), o.createElement(S, { onBack: i }, o.createElement(m.ZP, null, o.createElement(r.Z, { style: T.selectionGroupContainer }, o.createElement(c.Z, { name: "gender", onChange: s, options: P, value: t }))));
                });
        },
        963379: (e, t, n) => {
            n.d(t, { Z: () => L });
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
                _ = n.n(b),
                f = n(187669),
                P = n(934878),
                k = n(599190),
                S = n(973014);
            function T({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: r }) {
                const a = o.useCallback(() => r(e.filter((e, n) => n !== t)), [e, t, r]),
                    i = o.useMemo(() => ({ disabled: !1, mode: k.D.Remove, onSecondaryClick: a }), [a]);
                return o.createElement(S.Z, { secondaryAction: i, style: Z.withMarginEnd, text: n });
            }
            const Z = p.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                w = _().fe26420a;
            function x({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: r }) {
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
                    (0, f.q)(() => () => {
                        (0, a.hq)(e)(a.Ur.setTargetingKeywords(t.join(",")));
                    }),
                    (0, f.q)(() => {
                        r(n);
                    }),
                    (0, P.d)(a.MN.TargetingKeywords),
                    o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(d.Z, { style: v.selectionGroupContainer }, o.createElement(C.Z, { editable: t.length < 200, label: w, name: "keywords", onChange: s, onKeyDown: l, style: v.noSpacing, testID: h.Z.targetingKeywordsInput, value: i })),
                        o.createElement(
                            d.Z,
                            { style: v.row },
                            t.map((e, n) => o.createElement(T, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: r })),
                        ),
                    )
                );
            }
            u(x);
            const v = p.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const L = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: i, location: c, match: s, setTargetedContextualKeywords: l } = e,
                    u = o.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: o } = s.params;
                        (0, a.Mi)(i, c)(n, o, e, t);
                    }, [i, c, s.params]),
                    d = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return o.createElement(y, { onBack: u }, o.createElement(r.ZP, null, o.createElement(x, d)));
            });
        },
        489601: (e, t, n) => {
            n.d(t, { Z: () => j });
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
                _ = n(163889),
                f = n(934878),
                P = n(953884),
                k = n(144528),
                S = n(457637),
                T = n(363895),
                Z = n(71620),
                w = n(668214),
                x = n(852657),
                v = n(390387);
            const L = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingLocation[n];
                },
                A = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingCatalogSearch[n];
                },
                I = (e, t) => {
                    const n = q(e, t);
                    return e.ads.typeahead.targetingCatalogSearch[n]?.fetchStatus || e.ads.typeahead.targetingLocation[n]?.fetchStatus;
                },
                q = (e, t) => e.quickPromote.targeting.locationQuery,
                D = (e, t) => e.quickPromote.targeting.targetedLocations,
                B = (e, t) => e.quickPromote.account.campaigns,
                M = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                F = (0, w.Z)()
                    .propsFromState(() => ({ targetingLocationQuery: q, targetingLocations: L, targetingCatalogSearch: A, targetedLocations: D, fetchStatus: I, userCountry: v.GG, campaigns: B, isHousingAndUrbanDevelopmentLimitations: M }))
                    .propsFromActions(() => ({ setTargetedLocations: x.hI, setAndFetchTargetingLocationQuery: x.sN, setAndFetchTargetingCatalogSearch: x.WD, setTargetingLocationQuery: x.zu, createLocalApiErrorHandler: (0, Z.zr)("QUICK_PROMOTE_TARGETING_LOCATION_SCREEN") }))
                    .withAnalytics(T.EP),
                N = (e) => {
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
                z = h().cc642518,
                U = h().i0e8c3c6,
                O = h().deaf5b16,
                R = h().f69ad048,
                K = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
                G = Object.freeze({ [T.cU.CurrentCountryMatch]: 0, [T.cU.Match]: 1, [T.cU.NoMatch]: 2 });
            class H extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: null }),
                        (this._renderSearch = () => {
                            const { fetchStatus: e, targetingLocationQuery: t } = this.props;
                            return o.createElement(W, { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t }, o.createElement(r.Z, { style: Q.border }, o.createElement(P.ZP, null, o.createElement(a.ZP, { style: Q.headingText, weight: "heavy" }, U))), o.createElement(i.Z, { fetchStatus: e, render: this._renderSearchList, retryMessage: O }));
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
                                { style: Q.overflow },
                                o.createElement(
                                    P.ZP,
                                    null,
                                    n.map(({ localized_name: e, location_type: n, targeting_value: r }) => o.createElement(c.Z, { checked: t.has(r), helpText: (0, k.sA)(n), key: r, label: e, name: r, onChange: this._handleSearchSelect, testID: S.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._getTargetingLocationOptions = () => {
                            const { isHousingAndUrbanDevelopmentLimitations: e, targetingCatalogSearch: t, targetingLocationQuery: n, targetingLocations: o, userCountry: r } = this.props,
                                { featureSwitches: a } = this.context;
                            let i = [];
                            if (a.isTrue("responsive_web_qp_new_location_search_enabled") && t?.result && Array.isArray(t.result) && t.result.length > 0)
                                try {
                                    i = t.result.map(N);
                                } catch (e) {
                                    if (!o?.result?.[0]?.locations) return [];
                                    i = o.result[0].locations;
                                }
                            else {
                                if (!o?.result?.[0]?.locations) return [];
                                i = o.result[0].locations;
                            }
                            const c = (0, T.Jy)(r || "US"),
                                s = (i || []).filter((t) => {
                                    const o = t?.country_code || "US",
                                        r = t?.localized_name || "";
                                    if (e && "POSTAL_CODES" === (t?.location_type || "CITIES")) return !1;
                                    return c(r, o, n) !== T.cU.NoMatch;
                                });
                            if (!s || 0 === s.length) return [];
                            try {
                                return (0, C.Z)(
                                    s,
                                    [
                                        (e) => {
                                            if (!e) return 999;
                                            const t = e.country_code || "US",
                                                o = e.localized_name || "";
                                            try {
                                                const e = c(o, t, n);
                                                return G[e] ?? 2;
                                            } catch (e) {
                                                return 999;
                                            }
                                        },
                                        (e) => {
                                            if (!e) return 999;
                                            const t = e.location_type || "CITIES",
                                                n = K[t];
                                            return void 0 !== n
                                                ? n
                                                : (((e) => {
                                                      (0, _.ZP)(`Quick Promote: Unknown location type: ${e}. Expected one of {${Object.keys(K).join(", ")}}`);
                                                  })(t),
                                                  Object.keys(K).length);
                                        },
                                        (e) => (e && e.localized_name) || "zzz",
                                    ],
                                    "asc",
                                );
                            } catch (e) {
                                return s;
                            }
                        }),
                        (this._handleSearchSelect = (e, t) => {
                            const { analytics: n, setTargetedLocations: o, setTargetingLocationQuery: r } = this.props;
                            if (t) {
                                this.setState({ errorMessage: null });
                                const t = this._getTargetingLocationOptions().find(({ targeting_value: t }) => t === e);
                                t ? ((0, T.hq)(n)(T.Ur.setTargetingLocation({ id: t.targeting_value, locationType: t.location_type, countryCode: t.country_code })), o([t]), this._handleGoBack()) : (0, _.ZP)(`Quick Promote: could not find "${e}" in list of targeting options`);
                            } else (0, T.hq)(n)(T.Ur.targetingLocationInvalid()), this.setState({ errorMessage: R });
                            r("");
                        }),
                        (this._renderSelected = () => {
                            const { targetedLocations: e, targetingLocationQuery: t } = this.props,
                                { errorMessage: n } = this.state;
                            return o.createElement(
                                W,
                                { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t },
                                o.createElement(r.Z, null, n && o.createElement(P.ZP, null, o.createElement(r.Z, { style: Q.gutterVertical }, o.createElement(s.Z, { text: n, type: "danger" }))), o.createElement(r.Z, { style: Q.border }, o.createElement(P.ZP, null, o.createElement(a.ZP, { style: Q.headingText, weight: "heavy" }, (0, k.Un)({ numLocations: e.length }))))),
                                o.createElement(
                                    P.ZP,
                                    null,
                                    e.map(({ localized_name: e, location_type: t, targeting_value: n }) => o.createElement(c.Z, { checked: !0, helpText: (0, k.sA)(t), key: n, label: e, name: n, onChange: this._handleSearchSelect, testID: S.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._handleGoBack = () => {
                            const { history: e, location: t, match: n } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: r, screenName: a, statusId: i } = n.params;
                            (0, T.Mi)(e, t)(a, i, o, r);
                        }),
                        (this._handleTargetingLocationChange = (e) => {
                            const t = e.target.value,
                                { analytics: n, createLocalApiErrorHandler: o, setAndFetchTargetingCatalogSearch: r, setAndFetchTargetingLocationQuery: a } = this.props;
                            (0, T.hq)(n)(T.Ur.targetingLocationSearch(t));
                            const { featureSwitches: i } = this.context;
                            i.isTrue("responsive_web_qp_new_location_search_enabled")
                                ? r(t)
                                      .catch((e) => ((0, T.hq)(n)(T.Ur.targetingLocationSearchGraphQLFail(e?.message || "GraphQL search failed")), a(t)))
                                      .catch((e) => {
                                          (0, T.hq)(n)(T.Ur.targetingLocationSearchRestFail(e?.message || "REST search failed")), o()(e);
                                      })
                                : a(t).catch((e) => {
                                      (0, T.hq)(n)(T.Ur.targetingLocationSearchRestFail(e?.message || "REST search failed")), o()(e);
                                  });
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, T.hq)(e)(T.Ur.targetingLocationPageLoad());
                }
                componentWillUnmount() {
                    this._handleClear();
                }
                render() {
                    const { targetingLocationQuery: e } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement(f.O, { screenType: T.MN.TargetingLocation }), e ? this._renderSearch() : this._renderSelected());
                }
            }
            H.contextType = b.rC;
            const W = ({ children: e, onBack: t, onChange: n, onClear: a, targetingLocationQuery: i }) => {
                    const c = (0, l.Zz)();
                    return o.createElement(r.Z, { style: Q.qpContainer, testID: S.Z.targetingLocationScreen }, o.createElement(u.Z, { leftControl: o.createElement(d.Z, { onClick: t }), middleControl: o.createElement(r.Z, { style: c ? Q.mobileInputContainer : Q.inputContainer }, o.createElement(g.Z, { Icon: y.default, autoFocus: !0, name: "locationTargetingInput", onChange: n, onClear: a, placeholder: z, style: Q.input, testID: S.Z.targetingLocationSearch, value: i, withClearButton: !0 })) }), e);
                },
                Q = m.default.create((e) => ({ qpContainer: { flex: 1 }, inputContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space64 }, mobileInputContainer: { paddingEnd: e.spaces.space16 }, input: { marginVertical: e.spaces.space12 }, border: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, headingText: { fontSize: e.fontSizes.headline1, paddingVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, overflow: { flexGrow: 1, flexShrink: 1, flexBasis: "200px", overflowY: "auto" } })),
                j = F(H);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-9c7eb7fe.a8cc801a.js.map
