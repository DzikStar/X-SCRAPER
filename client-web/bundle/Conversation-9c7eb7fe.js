"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-9c7eb7fe"],
    {
        861286: (e, t, o) => {
            o.d(t, { ZP: () => pe });
            var n = o(202784),
                r = o(325686),
                a = o(834324),
                i = o(224162),
                c = o(779610),
                s = o(731708),
                l = o(696591),
                u = o(154003),
                d = o(392237),
                g = o(674132),
                m = o.n(g),
                p = o(847016),
                h = o(347720),
                y = o(443781),
                E = o(852657),
                b = o(315032),
                C = o(312771),
                P = o(934878),
                f = o(728300),
                _ = o(953884),
                k = o(144528),
                Z = o(457637),
                w = o(363895),
                T = o(71620),
                S = o(668214),
                x = o(390387);
            const v = (e) => e.quickPromote.objective,
                L = (e, t) => e.quickPromote.targeting.targetedLocations,
                A = (e, t) => e.quickPromote.targeting.ageBucket,
                D = (e, t) => e.quickPromote.targeting.gender,
                q = (e, t) => e.quickPromote.targeting.keywords,
                I = (e, t) => e.quickPromote.budget.dailyBudget,
                B = (e, t) => e.quickPromote.budget.durationDays,
                M = (e) => e.quickPromote.budget.currency || "USD",
                F = (e) => e.quickPromote.account.selectedFundingInstrument,
                N = (e) => e.quickPromote.account.adsAccount,
                z = (e) => e.quickPromote.promoteStatus,
                U = (e) => e.quickPromote.promoteErrorCode,
                O = (e) => e.quickPromote.coupons,
                K = (e) => e.quickPromote.enrollCouponErrorCode,
                R =
                    ({ history: e, match: t }) =>
                    (o) => {
                        const { quickPromotePlatform: n, screenName: r, statusId: a } = t.params,
                            i = (0, w.WS)(r, a, n, w.MN.Done);
                        return (0, E.kb)({ history: e, statusId: a, nextPath: i, analytics: o });
                    },
                G = (0, S.Z)()
                    .propsFromState(() => ({ objective: v, targetedLocations: L, ageBucket: A, gender: D, keywords: q, dailyBudget: I, durationDays: B, lang: x.VT, country: E.QE, currency: M, fundingInstrument: F, adsAccount: N, promoteStatus: z, promoteErrorCode: U, coupons: O, enrollCouponErrorCode: K, selectedPaymentMethod: E.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, T.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, E.oE)(), createPromotion: R(e), enrollCoupon: E.br }))
                    .withAnalytics(w.EP),
                H = m().db443ae2,
                W = m().a96f811e,
                Q = m().b069d89c,
                V = m().fbd44e96,
                j = m().e36bce64,
                $ = m().c602f5b8,
                Y = m().ia83756c,
                J = m().cc217a04,
                X = m().c602f5b8,
                ee = m().g4f2b588,
                te = m().i41612da,
                oe = m().cdae1af0,
                ne = m().ed8bb5a0,
                re = m().fc640c20,
                ae = m().be2dc078,
                ie = m().iaefd4de,
                ce = m().e5e42640,
                se = m().e85dfd66,
                le = m().ef4602ec,
                ue = m().a4db098c,
                de = m().ef7e3916;
            class ge extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getPaymentDescription = (e, t) => {
                            const { adsAccount: o } = this.props;
                            return o && o.timezone && o.country_code ? (e ? oe : t ? re : ne) : t ? ie : ae;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, w.hq)(e)(w.Ur.promotionClick()), t(e);
                        }),
                        (this._handleEnrollCoupon = () => {
                            const { analytics: e, coupons: t, enrollCoupon: o, fundingInstrument: n } = this.props,
                                r = this._getCouponErrorMessage();
                            n && t?.eligible_coupon && !r && o(e);
                        }),
                        (this._getPromoteErrorMessage = () => {
                            const { promoteErrorCode: e, promoteStatus: t } = this.props;
                            if (!e) return t === C.ZP.LOADED ? se : null;
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
                        (this._getCouponVariables = ({ coupons: e, currency: t, lang: o }) => {
                            const n = e?.existing_balance.length ? e.existing_balance.find((e) => e.currency_code === t) : null,
                                r = !!n?.total_amount && n.total_amount > 0,
                                a = !!e?.eligible_coupon,
                                i = !(!e?.pending_coupon?.credit_amount || !e?.pending_coupon.spend_amount),
                                c = i || "ConditionalCouponExperiment" === e?.eligible_coupon_experiment ? "conditionalCoupon" : r || a ? "standardCoupon" : void 0,
                                s = this._getCouponErrorMessage();
                            return { existingCouponBalance: n, hasCouponCredit: r, isEligibleForCoupon: a, showCouponTerms: (i || r || a) && !s, couponType: c, couponErrorMessage: s };
                        }),
                        (this._getCouponCalloutVariables = ({ coupons: e, currency: t, lang: o }) => {
                            const { enrollCouponErrorCode: n } = this.props,
                                r = "ConditionalCouponExperiment" === e?.eligible_coupon_experiment && e?.eligible_coupon?.credit_amount && e?.eligible_coupon?.spend_amount && !n,
                                a = e?.pending_coupon?.credit_amount && e?.pending_coupon.spend_amount,
                                i = r && e?.eligible_coupon?.credit_amount ? e.eligible_coupon.credit_amount : e?.pending_coupon?.credit_amount,
                                c = r && e?.eligible_coupon?.spend_amount ? e?.eligible_coupon?.spend_amount : e?.pending_coupon?.spend_amount,
                                s = r ? "eligibleCoupon" : "pendingCoupon";
                            return { showCouponCallout: r || a, couponCalloutText: (0, k.sV)({ calloutType: s, couponAmount: i || 0, spendAmount: c || 0, currency: t, lang: o }) };
                        });
                }
                componentDidMount() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fundingInstrument: o } = this.props;
                    t();
                    const n = !!o;
                    (0, w.hq)(e)(w.Ur.reviewPageLoad({ hasFundingInstrument: n })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: o, coupons: d, currency: g, dailyBudget: y, durationDays: C, fundingInstrument: T, gender: S, keywords: x, lang: v, match: L, objective: A, promoteStatus: D, selectedPaymentMethod: q, targetedLocations: I } = this.props,
                        B = e?.needs_vat,
                        M = e?.isCanWriteBilling ?? !0,
                        F = (0, k.n9)(b.gT[t]),
                        N = (0, k.WF)(A),
                        z = x.length ? (0, k.R9)({ locations: I.map(({ localized_name: e }) => e), formattedAge: F, gender: (0, k.nW)(S), keywords: x }) : (0, k.HB)({ locations: I.map(({ localized_name: e }) => e), formattedAge: F, gender: (0, k.nW)(S) }),
                        { couponErrorMessage: U, couponType: O, existingCouponBalance: K, hasCouponCredit: R, isEligibleForCoupon: G, showCouponTerms: oe } = this._getCouponVariables({ coupons: d, currency: g, lang: v }),
                        ne = (0, k.Wl)({ dailyBudgetNum: y, durationDays: C, lang: v, currency: g }),
                        re = R ? "" : (0, k.Sy)({ amount: y * C, lang: v, currency: g }),
                        { quickPromotePlatform: ae, screenName: ie, statusId: ce } = L.params,
                        se = this._getPromoteErrorMessage(),
                        le = !!T,
                        { couponCalloutText: ue, showCouponCallout: de } = this._getCouponCalloutVariables({ coupons: d, currency: g, lang: v });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(P.O, { screenType: w.MN.Review }),
                        n.createElement(
                            r.Z,
                            { style: me.qpContainer, testID: Z.Z.reviewScreen },
                            n.createElement(
                                _.ZP,
                                null,
                                se && n.createElement(r.Z, { style: me.gutter }, n.createElement(a.Z, { text: se, type: "danger" })),
                                U && n.createElement(r.Z, { style: me.gutter }, n.createElement(a.Z, { text: U, type: "warning" })),
                                n.createElement(h.Y, { title: H }),
                                !this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled") && n.createElement(p.t, { description: N, descriptionTestID: Z.Z.reviewObjectiveDescription, label: W, withBottomBorder: !1 }),
                                n.createElement(p.t, { description: z, descriptionTestID: Z.Z.reviewTargetingDescription, label: Q, withBottomBorder: !1 }),
                                n.createElement(i.RD.Consumer, null, ({ direction: e }) => n.createElement(p.t, { children: de && n.createElement(a.Z, { style: me.couponCallout, text: ue }), description: ne, descriptionDir: e, descriptionTestID: Z.Z.reviewBudgetAndDurationDescription, label: V, withBottomBorder: !1 })),
                            ),
                            (0, _.FR)((e) => n.createElement(c.Z, { description: M && "CREDIT_CARD" === T?.type && q && !B ? n.createElement(f.XL, { id: q.id, imgSrcUrl: q.imgSrcUrl, lastFourDigits: q.lastFourDigits, paymentDescriptionStyle: me.paymentDescription, status: q.cardStatus }) : T && !B ? T.description : n.createElement(s.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(le, G)), label: n.createElement(s.ZP, { weight: "bold" }, j), link: M ? (!T || B ? (0, w.WS)(ie, ce, ae, w.MN.Payment) : "CREDIT_CARD" === T?.type ? (0, w.WS)(ie, ce, ae, w.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: Z.Z.reviewPaymentPivot })),
                        ),
                        n.createElement(
                            r.Z,
                            { style: me.bottomElements },
                            n.createElement(
                                _.ZP,
                                null,
                                n.createElement(
                                    p.t,
                                    { description: re, descriptionTestID: Z.Z.reviewPromotionTotalDescription, label: $, withBottomBorder: !1 },
                                    R
                                        ? (function ({ balance: e, currency: t, lang: o, subtotal: a }) {
                                              const i = (0, k.Sy)({ amount: a, currency: t, lang: o }),
                                                  c = (0, k.Sy)({ amount: Math.min(a, e), currency: t, lang: o }),
                                                  l = (0, k.Sy)({ amount: Math.max(0, a - e), currency: t, lang: o }),
                                                  u = e > a ? (0, k.Sy)({ amount: e - a, currency: t, lang: o }) : null;
                                              return n.createElement(n.Fragment, null, n.createElement(r.Z, { style: me.promotionTotalRow }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, Y), n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, i)), n.createElement(r.Z, { style: me.promotionTotalRow }, n.createElement(s.ZP, { color: "blue500", size: "subtext2" }, J), n.createElement(s.ZP, { color: "blue500", size: "subtext2" }, "-", c)), n.createElement(r.Z, { style: me.promotionTotalRow }, n.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, X), n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: Z.Z.reviewPromotionTotalDescription, weight: "bold" }, l)), u && n.createElement(r.Z, { style: me.promotionTotalRow }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, ee), n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, u)));
                                          })({ subtotal: y * C, balance: K?.total_amount || 0, currency: g, lang: v })
                                        : null,
                                ),
                                n.createElement(
                                    l.Z,
                                    { align: "left", style: me.terms },
                                    (function (e, t, o, r) {
                                        return o ? n.createElement(m().I18NFormatMessage, { $i18n: "fc2dfb3f" }, n.createElement(s.ZP, { link: (0, w.s0)(e) }, m().c1134966), n.createElement(s.ZP, { link: (0, w.bx)(t, r) }, m().he45cc43)) : n.createElement(m().I18NFormatMessage, { $i18n: "fcf4b2a5" }, n.createElement(s.ZP, { link: (0, w.s0)(e) }, m().c9439a82));
                                    })(o, v, oe, O),
                                ),
                                n.createElement(u.ZP, { disabled: !T || B || E.LK.includes(D), onPress: this._handlePromote, size: "xLarge", testID: Z.Z.reviewButton, type: "primaryFilled" }, te),
                            ),
                        ),
                    );
                }
            }
            ge.contextType = y.rC;
            const me = d.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, couponCallout: { marginTop: e.spaces.space12 }, childContainer: { paddingHorizontal: 0 }, terms: { textAlign: "start", color: e.colors.gray700, fontSize: e.fontSizes.subtext3, paddingBottom: e.spaces.space24 }, gutter: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" }, paymentDescription: { flexDirection: "row", marginStart: void 0, marginVertical: void 0, backgroundColor: void 0 } })),
                pe = G(ge);
        },
        301080: (e, t, o) => {
            o.d(t, { ZP: () => Y });
            o(571372);
            var n = o(202784),
                r = o(325686),
                a = o(779610),
                i = o(976145),
                c = o(731708),
                s = o(84679),
                l = o(834324),
                u = o(392237),
                d = o(674132),
                g = o.n(d),
                m = o(933277),
                p = o(161821),
                h = o(908478),
                y = o(847016),
                E = o(347720),
                b = o(443781),
                C = o(315032),
                P = o(934878),
                f = o(953884),
                _ = o(144528),
                k = o(457637),
                Z = o(363895),
                w = o(668214),
                T = o(852657),
                S = o(390387);
            const x = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                v = (e, t) => e.quickPromote.targeting.targetedLocations,
                L = (e, t) => e.quickPromote.targeting.gender,
                A = (e, t) => e.quickPromote.targeting.ageBucket,
                D = (e, t) => e.quickPromote.targeting.keywords,
                q = (e, t) => e.quickPromote.objective,
                I = (0, w.Z)()
                    .propsFromState(() => ({ lang: S.VT, isHousingAndUrbanDevelopmentLimitations: x, targetedLocations: v, selectedGender: L, selectedAgeBucket: A, selectedKeywords: D, objective: q }))
                    .propsFromActions(() => ({ setTargetedAgeBucket: T.l$ }))
                    .withAnalytics(Z.EP),
                B = g().c672105a,
                M = g().e1efbeae,
                F = g().c6ff7c10,
                N = g().b555fb46,
                z = g().a8d0108e,
                U = g().j2c03e12,
                O = ["18", "21", "25", "35", "50"],
                K = [void 0, void 0, "24", "34", "49", "54"],
                R = (0, m.Z)((0, p.Z)(C.gT), (e) => e.maxAge || "over"),
                G = K.length;
            function H(e, t) {
                if (e && t) return C.E4[e]?.[t];
            }
            class W extends n.PureComponent {
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, Z.hq)(e)(Z.Ur.targetingPageLoad());
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: o, objective: l, selectedAgeBucket: u, selectedGender: d, selectedKeywords: g, targetedLocations: m } = this.props,
                        { featureSwitches: p } = this.context,
                        b = p.isTrue("responsive_web_qp_keyword_targeting_enabled") && l === C.CH.WebsiteClicks,
                        { quickPromotePlatform: w, screenName: T, statusId: S } = o.params,
                        x = (0, _.Un)({ numLocations: m.length }),
                        { maxAge: v, minAge: L } = C.gT[u],
                        A = Q(u),
                        D = v || U;
                    return n.createElement(
                        r.Z,
                        { style: $.qpContainer, testID: k.Z.targetingScreen },
                        n.createElement(P.O, { screenType: Z.MN.Targeting }),
                        n.createElement(f.ZP, null, n.createElement(E.Y, { callout: e ? n.createElement(j, { lang: t }) : void 0, style: $.titleContainer, title: B })),
                        (0, f.FR)((t) => {
                            return n.createElement(
                                r.Z,
                                { style: $.targetingContainer },
                                n.createElement(a.Z, { description: (0, i.Z)(m.map(({ localized_name: e }) => e)), label: n.createElement(c.ZP, { weight: "bold" }, x), link: (0, Z.WS)(T, S, w, Z.MN.TargetingLocation), paddingHorizontal: t, testID: k.Z.targetingLocationPivot }),
                                n.createElement(
                                    f.ZP,
                                    null,
                                    n.createElement(
                                        y.t,
                                        { label: M, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        n.createElement(s.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: N,
                                            endThumbAccessibilityLabelValueText: `"${D}"`,
                                            endThumbLabel: D,
                                            max: G,
                                            min: 0,
                                            onChange:
                                                ((o = this.props),
                                                ([e, t], n) => {
                                                    const { analytics: r, selectedAgeBucket: a, setTargetedAgeBucket: i } = o,
                                                        c = Q(a);
                                                    if (!(0, h.Z)(c, [e, t]))
                                                        if (n) {
                                                            const n = O[e];
                                                            if (!n) return;
                                                            const a = t === G ? "over" : K[t],
                                                                c = H(n, a);
                                                            if (c) (0, Z.hq)(r)(Z.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const e = Object.keys(C.E4[n])[0];
                                                                V({ minAge: n, maxAge: e, props: o });
                                                            }
                                                        } else {
                                                            const n = t === G ? "over" : K[t];
                                                            if (!n) return;
                                                            const a = O[e],
                                                                c = H(a, n);
                                                            if (c) (0, Z.hq)(r)(Z.Ur.setTargetingAgeBucket(c)), i(c);
                                                            else {
                                                                const { minAge: e } = R[n].slice(-1)[0];
                                                                V({ minAge: e, maxAge: n, props: o });
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
                                n.createElement(a.Z, { description: (0, _.nW)(d), disabled: e, label: n.createElement(c.ZP, { weight: "bold" }, z), link: (0, Z.WS)(T, S, w, Z.MN.TargetingGender), paddingHorizontal: t, testID: k.Z.targetingGenderPivot }),
                                b && n.createElement(a.Z, { description: (0, i.Z)(g), label: n.createElement(c.ZP, { weight: "bold" }, "Keywords"), link: (0, Z.WS)(T, S, w, Z.MN.TargetingKeywords), paddingHorizontal: t, testID: k.Z.targetingKeywordsPivot }),
                            );
                            var o;
                        }),
                    );
                }
            }
            function Q(e) {
                const { maxAge: t, minAge: o } = C.gT[e];
                return [O.indexOf(o), t ? K.indexOf(t) : G];
            }
            function V({ maxAge: e, minAge: t, props: o }) {
                const { analytics: n, setTargetedAgeBucket: r } = o,
                    a = C.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, Z.hq)(n)(Z.Ur.setTargetingAgeBucket(a)), r(a);
            }
            function j({ lang: e }) {
                const t = (0, Z.C0)(e),
                    o = n.useMemo(() => ({ termsLink: n.createElement(c.ZP, { link: t }) }), [t]);
                return n.createElement(l.Z, { text: n.createElement(g().I18NFormatMessage, { $i18n: "f54ad505" }, n.cloneElement(o.termsLink, null, g().d4e01892)) });
            }
            W.contextType = b.rC;
            const $ = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                Y = I(W);
        },
        3918: (e, t, o) => {
            o.d(t, { ZP: () => T });
            var n = o(202784),
                r = o(325686),
                a = o(370006),
                i = o(786998),
                c = o(449479),
                s = o(392237),
                l = o(674132),
                u = o.n(l),
                d = o(315032),
                g = o(934878),
                m = o(953884),
                p = o(144528),
                h = o(457637),
                y = o(363895),
                E = o(668214),
                b = o(852657);
            const C = (e, t) => e.quickPromote.targeting.gender,
                P = (e, t) => e.quickPromote.account.campaigns,
                f = (0, E.Z)()
                    .propsFromState(() => ({ selectedGender: C, campaigns: P }))
                    .propsFromActions(() => ({ setTargetedGender: b.A_ }))
                    .withAnalytics(y.EP),
                _ = [d.Y0.Any, d.Y0.Female, d.Y0.Male].map((e) => ({ label: (0, p.nW)(e), value: e, testID: h.Z.getTargetingGender(e) })),
                k = u().df8d4fa0,
                Z = ({ children: e, onBack: t }) => {
                    const o = n.useMemo(() => n.createElement(a.Z, { onClick: t }), [t]);
                    return n.createElement(r.Z, { style: w.qpContainer, testID: h.Z.targetingGenderScreen }, n.createElement(i.Z, { leftControl: o, style: w.appBar, title: k }), e);
                },
                w = s.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                T = f(({ analytics: e, selectedGender: t, setTargetedGender: o, ...a }) => {
                    const i = n.useCallback(() => {
                            const { history: e, location: t, match: o } = a,
                                { quickPromotePlatform: n, quickPromoteScreenName: r, screenName: i, statusId: c } = o.params;
                            (0, y.Mi)(e, t)(i, c, n, r);
                        }, [a]),
                        s = n.useCallback(
                            (t, n) => {
                                o(n), (0, y.hq)(e)(y.Ur.setTargetingGender(n)), i();
                            },
                            [e, o, i],
                        );
                    return (0, g.d)(y.MN.TargetingGender), n.createElement(Z, { onBack: i }, n.createElement(m.ZP, null, n.createElement(r.Z, { style: w.selectionGroupContainer }, n.createElement(c.Z, { name: "gender", onChange: s, options: _, value: t }))));
                });
        },
        963379: (e, t, o) => {
            o.d(t, { Z: () => L });
            var n = o(202784),
                r = o(953884),
                a = o(363895),
                i = o(668214),
                c = o(852657);
            const s = (e) => e.quickPromote.targeting.contextualKeywords,
                l = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: s }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP),
                u = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: s }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP);
            var d = o(325686),
                g = o(370006),
                m = o(786998),
                p = o(392237),
                h = o(457637);
            function y({ children: e, onBack: t }) {
                const o = n.useMemo(() => n.createElement(g.Z, { onClick: t }), [t]);
                return n.createElement(d.Z, { style: E.qpContainer, testID: h.Z.targetingKeywordsScreen }, n.createElement(m.Z, { leftControl: o, style: E.appBar, title: "Select some keywords" }), e);
            }
            const E = p.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var b = o(855488),
                C = o(674132),
                P = o.n(C),
                f = o(187669),
                _ = o(934878),
                k = o(599190),
                Z = o(973014);
            function w({ contextualKeywords: e, index: t, keyword: o, setTargetedContextualKeywords: r }) {
                const a = n.useCallback(() => r(e.filter((e, o) => o !== t)), [e, t, r]),
                    i = n.useMemo(() => ({ disabled: !1, mode: k.D.Remove, onSecondaryClick: a }), [a]);
                return n.createElement(Z.Z, { secondaryAction: i, style: T.withMarginEnd, text: o });
            }
            const T = p.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                S = P().fe26420a;
            function x({ analytics: e, contextualKeywords: t, recommendedKeywords: o = [], setTargetedContextualKeywords: r }) {
                const [i, c] = n.useState(""),
                    s = n.useCallback((e) => {
                        const t = e.target.value;
                        c(t);
                    }, []),
                    l = n.useCallback(
                        (e) => {
                            switch (e.key) {
                                case ",":
                                case "Enter": {
                                    e.preventDefault();
                                    const o = i.trim(),
                                        n = t.some((e) => e.toLowerCase() === o.toLowerCase());
                                    "" === o || n || (r(t.concat(o)), c(""));
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
                        r(o);
                    }),
                    (0, _.d)(a.MN.TargetingKeywords),
                    n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.Z, { style: v.selectionGroupContainer }, n.createElement(b.Z, { editable: t.length < 200, label: S, name: "keywords", onChange: s, onKeyDown: l, style: v.noSpacing, testID: h.Z.targetingKeywordsInput, value: i })),
                        n.createElement(
                            d.Z,
                            { style: v.row },
                            t.map((e, o) => n.createElement(w, { contextualKeywords: t, index: o, key: o, keyword: e, setTargetedContextualKeywords: r })),
                        ),
                    )
                );
            }
            u(x);
            const v = p.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const L = l(function (e) {
                const { analytics: t, contextualKeywords: o, history: i, location: c, match: s, setTargetedContextualKeywords: l } = e,
                    u = n.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: o, statusId: n } = s.params;
                        (0, a.Mi)(i, c)(o, n, e, t);
                    }, [i, c, s.params]),
                    d = { analytics: t, contextualKeywords: o, setTargetedContextualKeywords: l };
                return n.createElement(y, { onBack: u }, n.createElement(r.ZP, null, n.createElement(x, d)));
            });
        },
        489601: (e, t, o) => {
            o.d(t, { Z: () => W });
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                i = o(879113),
                c = o(954110),
                s = o(834324),
                l = o(67369),
                u = o(786998),
                d = o(370006),
                g = o(371344),
                m = o(392237),
                p = o(674132),
                h = o.n(p),
                y = o(956272),
                E = o(370751),
                b = o(326399),
                C = o(443781),
                P = o(163889),
                f = o(934878),
                _ = o(953884),
                k = o(144528),
                Z = o(457637),
                w = o(363895),
                T = o(71620),
                S = o(668214),
                x = o(852657),
                v = o(390387);
            const L = (e, t) => {
                    const o = D(e, t);
                    return e.ads.typeahead.targetingLocation[o];
                },
                A = (e, t) => {
                    const o = D(e, t);
                    return e.ads.typeahead.targetingLocation[o]?.fetchStatus;
                },
                D = (e, t) => e.quickPromote.targeting.locationQuery,
                q = (e, t) => e.quickPromote.targeting.targetedLocations,
                I = (e, t) => e.quickPromote.account.campaigns,
                B = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                M = (0, S.Z)()
                    .propsFromState(() => ({ targetingLocationQuery: D, targetingLocations: L, targetedLocations: q, fetchStatus: A, userCountry: v.GG, campaigns: I, isHousingAndUrbanDevelopmentLimitations: B }))
                    .propsFromActions(() => ({ setTargetedLocations: x.hI, setAndFetchTargetingLocationQuery: x.sN, setTargetingLocationQuery: x.zu, createLocalApiErrorHandler: (0, T.zr)("QUICK_PROMOTE_TARGETING_LOCATION_SCREEN") }))
                    .withAnalytics(w.EP),
                F = h().cc642518,
                N = h().i0e8c3c6,
                z = h().deaf5b16,
                U = h().f69ad048,
                O = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
                K = Object.freeze({ [w.cU.CurrentCountryMatch]: 0, [w.cU.Match]: 1, [w.cU.NoMatch]: 2 });
            class R extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: null }),
                        (this._renderSearch = () => {
                            const { fetchStatus: e, targetingLocationQuery: t } = this.props;
                            return n.createElement(G, { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t }, n.createElement(r.Z, { style: H.border }, n.createElement(_.ZP, null, n.createElement(a.ZP, { style: H.headingText, weight: "heavy" }, N))), n.createElement(i.Z, { fetchStatus: e, render: this._renderSearchList, retryMessage: z }));
                        }),
                        (this._handleClear = () => {
                            const { setTargetingLocationQuery: e } = this.props;
                            e("");
                        }),
                        (this._renderSearchList = () => {
                            const { targetedLocations: e } = this.props,
                                t = (0, E.Z)(e.map(({ targeting_value: e }) => e)),
                                o = this._getTargetingLocationOptions();
                            return n.createElement(
                                r.Z,
                                { style: H.overflow },
                                n.createElement(
                                    _.ZP,
                                    null,
                                    o.map(({ localized_name: e, location_type: o, targeting_value: r }) => n.createElement(c.Z, { checked: t.has(r), helpText: (0, k.sA)(o), key: r, label: e, name: r, onChange: this._handleSearchSelect, testID: Z.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._getTargetingLocationOptions = () => {
                            const { isHousingAndUrbanDevelopmentLimitations: e, targetingLocationQuery: t, targetingLocations: o, userCountry: n } = this.props,
                                r = o?.result?.[0]?.locations ?? [],
                                a = (0, w.Jy)(n || "US"),
                                i = r.filter(({ country_code: o, localized_name: n, location_type: r }) => {
                                    if (e && "POSTAL_CODES" === r) return !1;
                                    return a(n, o, t) !== w.cU.NoMatch;
                                });
                            return (0, b.Z)(
                                i,
                                [
                                    ({ country_code: e, localized_name: o }) => {
                                        const n = a(o, e, t);
                                        return K[n];
                                    },
                                    ({ localized_name: e, location_type: t }) =>
                                        O[t] ??
                                        (((e) => {
                                            (0, P.ZP)(`Quick Promote: Unknown location type: ${e}. Expected one of {${Object.keys(O).join(", ")}}`);
                                        })(t) ||
                                            Object.keys(O).length),
                                    ({ localized_name: e }) => e,
                                ],
                                "asc",
                            );
                        }),
                        (this._handleSearchSelect = (e, t) => {
                            const { analytics: o, setTargetedLocations: n, setTargetingLocationQuery: r } = this.props;
                            if (t) {
                                this.setState({ errorMessage: null });
                                const t = this._getTargetingLocationOptions().find(({ targeting_value: t }) => t === e);
                                t ? ((0, w.hq)(o)(w.Ur.setTargetingLocation({ id: t.targeting_value, locationType: t.location_type, countryCode: t.country_code })), n([t]), this._handleGoBack()) : (0, P.ZP)(`Quick Promote: could not find "${e}" in list of targeting options`);
                            } else (0, w.hq)(o)(w.Ur.targetingLocationInvalid()), this.setState({ errorMessage: U });
                            r("");
                        }),
                        (this._renderSelected = () => {
                            const { targetedLocations: e, targetingLocationQuery: t } = this.props,
                                { errorMessage: o } = this.state;
                            return n.createElement(
                                G,
                                { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t },
                                n.createElement(r.Z, null, o && n.createElement(_.ZP, null, n.createElement(r.Z, { style: H.gutterVertical }, n.createElement(s.Z, { text: o, type: "danger" }))), n.createElement(r.Z, { style: H.border }, n.createElement(_.ZP, null, n.createElement(a.ZP, { style: H.headingText, weight: "heavy" }, (0, k.Un)({ numLocations: e.length }))))),
                                n.createElement(
                                    _.ZP,
                                    null,
                                    e.map(({ localized_name: e, location_type: t, targeting_value: o }) => n.createElement(c.Z, { checked: !0, helpText: (0, k.sA)(t), key: o, label: e, name: o, onChange: this._handleSearchSelect, testID: Z.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._handleGoBack = () => {
                            const { history: e, location: t, match: o } = this.props,
                                { quickPromotePlatform: n, quickPromoteScreenName: r, screenName: a, statusId: i } = o.params;
                            (0, w.Mi)(e, t)(a, i, n, r);
                        }),
                        (this._handleTargetingLocationChange = (e) => {
                            const t = e.target.value,
                                { analytics: o, createLocalApiErrorHandler: n, setAndFetchTargetingLocationQuery: r } = this.props;
                            (0, w.hq)(o)(w.Ur.targetingLocationSearch(t)), r(t).catch(n());
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, w.hq)(e)(w.Ur.targetingLocationPageLoad());
                }
                componentWillUnmount() {
                    this._handleClear();
                }
                render() {
                    const { targetingLocationQuery: e } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(f.O, { screenType: w.MN.TargetingLocation }), e ? this._renderSearch() : this._renderSelected());
                }
            }
            R.contextType = C.rC;
            const G = ({ children: e, onBack: t, onChange: o, onClear: a, targetingLocationQuery: i }) => {
                    const c = (0, l.Zz)();
                    return n.createElement(r.Z, { style: H.qpContainer, testID: Z.Z.targetingLocationScreen }, n.createElement(u.Z, { leftControl: n.createElement(d.Z, { onClick: t }), middleControl: n.createElement(r.Z, { style: c ? H.mobileInputContainer : H.inputContainer }, n.createElement(g.Z, { Icon: y.default, autoFocus: !0, name: "locationTargetingInput", onChange: o, onClear: a, placeholder: F, style: H.input, testID: Z.Z.targetingLocationSearch, value: i, withClearButton: !0 })) }), e);
                },
                H = m.default.create((e) => ({ qpContainer: { flex: 1 }, inputContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space64 }, mobileInputContainer: { paddingEnd: e.spaces.space16 }, input: { marginVertical: e.spaces.space12 }, border: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, headingText: { fontSize: e.fontSizes.headline1, paddingVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, overflow: { flexGrow: 1, flexShrink: 1, flexBasis: "200px", overflowY: "auto" } })),
                W = M(R);
        },
        764940: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(71620),
                r = o(668214),
                a = o(852657),
                i = o(836255),
                c = o(312771),
                s = o(363895);
            const l = (e, t) => t.match.params.statusId,
                u = (e, t) => i.Z.selectHydrated(e, l(0, t)),
                d = (e, t) => (0, c.h1)(i.Z.selectFetchStatus(e, l(0, t)), e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus, e.quickPromote.couponsFetchStatus),
                g = (e, t) => e.quickPromote.promoteStatus,
                m = (e, t) => e.quickPromote.promoteErrorCode,
                p = (e, t) => e.quickPromote.account.campaigns,
                h = (0, r.Z)()
                    .propsFromState(() => ({ statusId: l, fetchStatus: d, tweet: u, campaigns: p, promoteFetchStatus: g, promoteErrorCode: m }))
                    .propsFromActions((e) => ({
                        createLocalApiErrorHandler: (0, n.zr)("QUICK_PROMOTE_SCREEN"),
                        fetchTweetIfNeeded: i.Z.fetchOneIfNeeded,
                        fetchCurrentTargetingLocationIfNeeded: a.yW,
                        fetchAvailableBudgetsIfNeeded: a.WS,
                        fetchAdsAccountDataIfNeeded: a.Ek,
                        fetchQuickPromoteEligibilityIfNeeded: a.E6,
                        fetchCouponsIfNeeded: a.fN,
                        handleFirstLoad: () =>
                            ((e) => {
                                const { analytics: t, history: o, location: n, match: r } = e,
                                    { quickPromotePlatform: i, quickPromoteScreenName: c, screenName: s, statusId: l } = r.params,
                                    u = { pa_signup_complete: n.query.pa_signup_complete || "" };
                                return (0, a.Jk)(s, l, i, c, o, u, t);
                            })(e),
                        setObjective: a.mS,
                        setPromoteFetchStatus: a.Ik,
                    }))
                    .withAnalytics(s.EP);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-9c7eb7fe.fab1bb7a.js.map
