"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-20ca922c"],
    {
        684841: (e, t, r) => {
            r.d(t, { Z: () => w });
            var a = r(202784),
                i = r(325686),
                c = r(731708),
                n = r(750410),
                o = r(392237),
                l = r(883229),
                s = r(943914),
                d = r(952793),
                u = r(685731),
                p = r(137070),
                m = r(690559),
                g = r(393866),
                h = r(754962);
            const b = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: n, productName: o, selectedInterval: l, selectedProduct: s }) => {
                    const b = (0, d.hC)("subscriptions_marketing_page_web_refresh_enabled"),
                        f = (0, p.Z)(),
                        y = n.productDetailsMap[s],
                        w = f[s].hashed,
                        S = f[s].unhashed,
                        E = y ? (0, u.Gi)(l, y.prices) : null,
                        P = E ? (0, u.Mk)(E) : null,
                        v = y ? a.createElement(h.ZP, { activeSubscription: void 0, buttonSize: b ? "xLarge" : void 0, buttonStyle: _.checkoutButton, buttonType: b ? "primaryFilled" : "brandFilled", isTierSwitching: !1, premiumPriceConfig: n, productPrices: y, selectedInterval: l, selectedProduct: s, stripeProductId: w, stripeProductIdUnhashed: S }) : null;
                    return t ? a.createElement(i.Z, { style: _.footer, testID: "premium_signup_footer" }, a.createElement(i.Z, { style: [_.column, _.marginEnd] }, a.createElement(i.Z, { style: _.row }, a.createElement(c.ZP, { size: "headline1", weight: "medium" }, o)), a.createElement(g.Z, { activeSubscription: e, isTierSwitching: r, productCategory: s, productPrices: y, selectedInterval: l, shouldRemoveExtraStep: !0, withAnnualPriceMonthly: !1, withAnnualSavingLabel: !1 })), a.createElement(i.Z, { style: _.column }, v, a.createElement(m.Z, { disclaimerRef: t, freeTrialInfo: P }))) : null;
                },
                f = { context: "PremiumContentFooter" },
                y = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: (e) => a.createElement(i.Z, { style: _.footer }, a.createElement(n.Z, { onRequestRetry: e })) }), []);
                    return a.createElement(l.N, { errorConfig: f, fallback: t, key: e.productName }, a.createElement(s.B, null, a.createElement(b, e)));
                },
                w = a.memo(y),
                _ = o.default.create((e) => ({ footer: { position: "fixed", bottom: 0, minHeight: 100, backgroundColor: e.colors.navigationBackground95, width: "100%", padding: e.spaces.space16, flexDirection: "row", justifyContent: "center", borderStyle: "solid", borderTopWidth: e.spaces.space1, borderEndWidth: 0, borderBottomWidth: 0, borderStartWidth: 0, borderColor: e.colors.gray300 }, column: { flexDirection: "column", maxWidth: 475, minWidth: 225 }, checkoutButton: { marginBottom: e.spaces.space12 }, marginEnd: { marginEnd: e.spaces.space16 }, row: { flexDirection: "row" } }));
        },
        336629: (e, t, r) => {
            r.d(t, { T: () => c });
            var a = r(97882),
                i = r(685731);
            const c = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: r, percentOff: c, price: n }) => {
                const o = (0, i.aU)(n, t, c),
                    l = e ? o / 12 : r ? 12 * o : o;
                return (0, a.x)({ amount: l, currencyCode: n?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, r) => {
            r.d(t, { V: () => y, f: () => f });
            var a = r(202784),
                i = r(325686),
                c = r(731708),
                n = r(392237),
                o = r(111677),
                l = r.n(o),
                s = r(336629);
            const d = l().i57aeafb,
                u = l().ae3e3723,
                p = l().ade4c757,
                m = l().f7798e11,
                g = l().e0b39888,
                h = l().b67c37de,
                b = l().a8363765,
                f = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: r, includeTax: a, isFreeTrial: i, isTierSwitching: c, price: n, selectedInterval: o, shouldRemoveExtraStep: l, withAnnualPriceMonthly: d }) => (i ? ("Month" === o ? p({ price: r }) : m({ price: r })) : t || e ? y({ formattedPrice: r, selectedInterval: o, includeDiscountedPrice: "Year" === o && d, discountedFormattedPrice: (0, s.T)({ price: n, includeTax: a, percentOff: c ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: c ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === o && l ? b({ price: r }) : "Month" === o ? g : h),
                y = ({ discountedFormattedPrice: e, duration: t, formattedPrice: r, includeDiscountedPrice: n, includeThenLabel: o, selectedInterval: s }) => {
                    let g;
                    return (g = "Month" === s ? (n ? a.createElement(l().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(c.ZP, { style: { textDecorationLine: "line-through" } }, l().df3ed1c8({ standardPrice: r }))) : d({ duration: t, standardPrice: r })) : n ? a.createElement(l().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(c.ZP, { style: { textDecorationLine: "line-through" } }, l().g261b098({ standardPrice: r }))) : u({ duration: t, standardPrice: r })), o && (g = a.createElement(i.Z, null, a.createElement(c.ZP, { style: w.marginBottom }, g), a.createElement(c.ZP, null, "Year" === s ? m({ price: r }) : p({ price: r })))), g;
                },
                w = n.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        393866: (e, t, r) => {
            r.d(t, { Z: () => E });
            var a = r(202784),
                i = r(325686),
                c = r(40610),
                n = r(868634),
                o = r(731708),
                l = r(392237),
                s = r(111677),
                d = r.n(s),
                u = r(952793),
                p = r(97882),
                m = r(548797),
                g = r(685731),
                h = r(336629),
                b = r(862695);
            const f = d().f36b8e14,
                y = d().f1756574,
                w = d().i650ff14,
                _ = d().dbcd25db,
                S = ({ activeSubscription: e, isTierSwitching: t, productCategory: r, productPrices: l, selectedInterval: s, shouldRemoveExtraStep: d, withAnnualPriceMonthly: S, withAnnualSavingLabel: E }) => {
                    const v = (0, u.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        C = (0, u.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        k = (0, u.hC)("subscriptions_marketing_page_discounts_enabled"),
                        x = "active" === (0, m.yv)({ activeSubscription: e, tier: r }) && s === e?.charge_interval,
                        Z = (0, u.hC)("subscriptions_management_use_active_price") && t && x,
                        T = (0, g.Gi)(s, Z ? e?.prices : l?.prices),
                        M = T ? (0, g.Mk)(T) : null,
                        I = M && C && !t,
                        R = x ? (0, m.gS)(e, "Discount", { status: "active" }) : null,
                        B = T ? (0, g.fS)(T, k, t) : null,
                        D = (0, h.T)({ price: T, includeTax: v, annualPriceMonthly: !1 }),
                        L = (0, h.T)({ price: T, includeTax: v, annualPriceMonthly: !0 }),
                        W = (0, b.f)({ isFreeTrial: !!I, selectedInterval: s, formattedPrice: D, discountInfo: B, activeDiscountInfo: R, price: T, shouldRemoveExtraStep: d, withAnnualPriceMonthly: S, includeTax: v, isTierSwitching: t });
                    if (!T) return a.createElement(c.Z.Danger, { text: f });
                    const F = l ? (0, m.pB)(l) : null,
                        N = a.createElement(n.ZP, { style: P.saveLabel, type: "subscriptionSaving" }, F),
                        $ = I ? a.createElement(o.ZP, { style: P.intervalLabel }, _({ numberOfDays: M?.metadata.free_trial_days })) : a.createElement(o.ZP, { size: "body", style: P.intervalLabel }, "Month" === s || S ? y : w),
                        z = a.createElement(a.Fragment, null, a.createElement(o.ZP, { style: P.priceLabel, weight: "bold" }, "Year" === s && S ? L : D), $),
                        A = a.createElement(a.Fragment, null, a.createElement(o.ZP, { style: P.priceLabel, weight: "bold" }, (0, p.x)({ amount: 0, currencyCode: T?.currency_code.toUpperCase(), removeTrailingZeros: !0 })), $),
                        O = a.createElement(a.Fragment, null, a.createElement(o.ZP, { style: [P.priceLabel, P.strikethrough] }, "Year" === s && S ? L : D), a.createElement(o.ZP, { style: [P.priceLabel, P.discountPriceLabel], weight: "bold" }, (0, h.T)({ price: T, includeTax: v, percentOff: B?.metadata.percent_off || R?.promotion_metadata?.percent_off, annualPriceMonthly: S && "Year" === s })), $);
                    let G = z;
                    return I ? (G = A) : (B || R) && (G = O), a.createElement(i.Z, null, a.createElement(i.Z, { style: P.priceRow }, G), a.createElement(i.Z, { style: P.billingRow }, a.createElement(o.ZP, { color: "gray900" }, W), "Year" !== s || !E || B || R ? null : N));
                },
                E = a.memo(S),
                P = l.default.create((e) => ({ priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16, flexWrap: "wrap" }, billingRow: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, discountPriceLabel: { marginStart: e.spaces.space8, color: e.colors.green500 }, intervalLabel: { marginStart: e.spaces.space4 }, saveLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite }, strikethrough: { textDecorationLine: "line-through", fontWeight: "lighter", color: e.colors.gray900 } }));
        },
        778e3: (e, t, r) => {
            r.d(t, { Z: () => ge });
            r(74882);
            var a = r(202784),
                i = r(325686),
                c = r(67369),
                n = r(708852),
                o = r(392237),
                l = r(443781),
                s = r(807896),
                d = r(277660),
                u = r.n(d),
                p = r(731708),
                m = r(30899),
                g = r(154003),
                h = r(58881),
                b = r(530732),
                f = r(868634),
                y = r(111677),
                w = r.n(y),
                _ = r(202560),
                S = r(913973),
                E = r(711223),
                P = r(187669),
                v = r(883229),
                C = r(943914),
                k = r(952793),
                x = r(548797),
                Z = r(685731),
                T = r(725405),
                M = r(498514),
                I = r(512923),
                R = r(137070),
                B = r(393866);
            const D = w().g1be3530,
                L = w().b10b4f1f,
                W = w().a9f397f3,
                F = ({ isTierSwitching: e, price: t }) => {
                    const r = (0, k.hC)("subscriptions_marketing_page_discounts_enabled"),
                        i = (0, k.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        c = (t ? (0, Z.Mk)(t) : null) && i && !e,
                        n = t ? (0, Z.fS)(t, r, e) : null;
                    if (c) return a.createElement(f.ZP, { style: N.promoLabel, type: "subscriptionPromo" }, D);
                    if (n) {
                        const e = n.ends_at_msec,
                            t = e ? new Date(parseInt(e, 10)) : void 0,
                            r = t ? W(t) : void 0;
                        return a.createElement(f.ZP, { style: N.promoLabel, type: "subscriptionPromo" }, L({ percentOff: n.metadata.percent_off, date: r }));
                    }
                    return null;
                },
                N = o.default.create((e) => ({ promoLabel: { borderRadius: e.borderRadiiPx.infinite, paddingHorizontal: e.spaces.space8, alignSelf: "center", position: "absolute", top: `-${e.spaces.space16}`, padding: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.green300, width: "70%" } }));
            var $ = r(754962),
                z = r(529356),
                A = r(516951),
                O = r(690559);
            const G = w().b8d0bd19,
                U = ({ activeSubscription: e, checkoutButton: t, disclaimerRef: r, interval: c, isTierSwitching: n, onClose: o, product: l, productCategory: s, productTitle: d, shouldRemoveExtraStep: u }) => {
                    const p = (0, k.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        m = l ? (0, Z.Gi)(c, l.prices) : null,
                        g = m ? (0, Z.Mk)(m) : null;
                    if (!r || !d) return null;
                    const h = g && p ? G({ productName: d }) : d,
                        b = a.createElement(i.Z, { style: X.body, testID: "purchase-sheet" }, a.createElement(B.Z, { activeSubscription: e, isTierSwitching: n, productCategory: s, productPrices: l, selectedInterval: c, shouldRemoveExtraStep: u, withAnnualPriceMonthly: !1, withAnnualSavingLabel: !0 }), t, a.createElement(O.Z, { disclaimerRef: r, freeTrialInfo: g }));
                    return a.createElement(z.Z, { graphicDisplayMode: "none", headline: h, onAction: A.Z, onClose: o, subtext: b });
                },
                V = a.memo(U),
                X = o.default.create((e) => ({ body: { color: e.colors.text }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16 }, billingRow: { marginBottom: e.spaces.space32, flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, intervalLabel: { marginStart: e.spaces.space4 } })),
                H = ({ index: e, numProducts: t }) => {
                    const r = (0, c.Mv)(),
                        n = (0, c.pj)(),
                        o = r ? j.cardSmall : n ? j.cardXLarge : j.cardXXLarge;
                    return a.createElement(i.Z, { style: [j.productCard, o, e !== t && 0 !== t && r ? j.cardMarginBottom : null] });
                },
                j = o.default.create((e) => ({ productCard: { width: 303 * e.scaleMultiplier, padding: e.spaces.space32, borderRadius: e.borderRadii.large, minHeight: 432 * e.scaleMultiplier, backgroundColor: e.colors.gray50 }, cardSmall: { width: "100%" }, cardXLarge: { minWidth: 230 * e.scaleMultiplier, maxWidth: 250 * e.scaleMultiplier }, cardXXLarge: { minWidth: 300 * e.scaleMultiplier, maxWidth: 300 * e.scaleMultiplier }, cardMarginBottom: { marginBottom: e.spaces.space48 } })),
                Y = "subscribeButton",
                q = w().be103b84,
                Q = w().ab0decc0,
                J = w().a73d39fb,
                K = w().i859a9d4,
                ee = w().f36b8e14,
                te = w().ae095fe8,
                re = w().d4e60288,
                ae = w().abaa4274,
                ie = w().e0d53864,
                ce = w().cfe836d1,
                ne = ({ activeSubscription: e, disclaimerRef: t, index: r, isSelected: n, isTierSwitching: l, numProducts: s, premiumPriceConfig: d, productContent: y, productPrices: w, selectedInterval: E, shouldRemoveExtraStep: v }) => {
                    const C = (0, k.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        D = (0, k.hC)("subscriptions_marketing_page_new_grok_content_enabled"),
                        L = (0, k.hC)("subscriptions_marketing_page_supergrok_content_enabled"),
                        W = (0, k.hC)("subscriptions_marketing_page_web_refresh_enabled"),
                        N = (0, T.Z)(),
                        z = (0, c.Mv)(),
                        A = (0, c.pj)(),
                        [O, G] = a.useState(!1),
                        U = u()(I.oD, y),
                        X = (0, R.Z)(),
                        H = U.product_category,
                        j = "active" === (0, x.yv)({ activeSubscription: e, tier: H }),
                        ee = X[H].hashed,
                        ne = X[H].unhashed,
                        oe = w ? (0, Z.Gi)(E, w.prices) : null,
                        le = oe ? (0, Z.fS)(oe, !0, l) : null,
                        se = oe ? (0, Z.Mk)(oe) : null,
                        pe = se && C && !l;
                    if (
                        ((0, P.q)(() => {
                            pe && H && se?.program_id && N.scribe({ component: "product_card_promotion", element: `${se.program_id}`, action: "impression" });
                        }),
                        !H)
                    )
                        return null;
                    const me = a.createElement(
                            i.Z,
                            { style: de.featureList },
                            U.summary_bucket?.description ? a.createElement(i.Z, { style: de.featureRow }, a.createElement(p.ZP, null, U.summary_bucket.description)) : null,
                            U.summary_bucket?.features.map((e, t) => {
                                const c = (0, M.U)(e.icon);
                                return a.createElement(i.Z, { key: `product-${r}-summary-feature-${t}`, style: de.featureRow }, a.createElement(c, { style: de.icon }), a.createElement(p.ZP, null, e.title, e.description ? a.createElement(m.Z, { contentStyle: de.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(i.Z, { style: de.infoContainer }, a.createElement(p.ZP, { size: "title4", weight: "medium" }, e.title), a.createElement(p.ZP, { color: "gray700", style: de.infoDescription }, e.description)) }, a.createElement(g.ZP, { "aria-label": K, icon: ue, size: "xSmall", style: de.infoButton, type: "primaryText" })) : null));
                            }),
                            D && "BlueVerifiedPlus" === H
                                ? L
                                    ? a.createElement(
                                          i.Z,
                                          { style: de.supergrokContainer },
                                          a.createElement(_.default, { style: de.supergrokSvg }),
                                          [re, ae, ie].map((e, t) => a.createElement(i.Z, { key: `product-${r}-grok-summary-feature-${t}`, style: de.supergrokFeatureRow }, a.createElement(S.default, { style: de.icon }), a.createElement(p.ZP, { color: "gray1100" }, e))),
                                      )
                                    : a.createElement(
                                          i.Z,
                                          null,
                                          a.createElement(p.ZP, { style: de.featureRow, weight: "medium" }, te),
                                          [re, ae, ie].map((e, t) => a.createElement(i.Z, { key: `product-${r}-grok-summary-feature-${t}`, style: de.featureRow }, a.createElement(S.default, { style: de.icon }), a.createElement(p.ZP, null, e))),
                                      )
                                : null,
                        ),
                        ge = w ? a.createElement($.ZP, { activeSubscription: e, buttonStyle: l ? de.tierSwitchButton : de.checkoutButton, isTierSwitching: l, premiumPriceConfig: d, productPrices: w, selectedInterval: E, selectedProduct: H, stripeProductId: ee, stripeProductIdUnhashed: ne, style: de.checkoutButtonInner }) : null,
                        he = z ? de.cardSmall : A ? de.cardXLarge : de.cardXXLarge,
                        be = a.createElement(
                            g.ZP,
                            {
                                onClick: () => {
                                    G(!0), N.scribe({ action: "click", element: "subscribe-intermediate", component: ne });
                                },
                                style: de.purchaseConfirmButton,
                                testID: Y,
                                type: "primaryFilled",
                            },
                            pe ? J({ numberOfDays: se?.metadata.free_trial_days }) : Q,
                        ),
                        fe = l ? ge : be,
                        ye = h.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: n ? o.default.theme.colors.primary : o.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return a.createElement(a.Fragment, null, O ? a.createElement(V, { activeSubscription: e, checkoutButton: ge, disclaimerRef: t, interval: E, isTierSwitching: l, onClose: () => G(!1), product: w, productCategory: H, productTitle: U.title, shouldRemoveExtraStep: v }) : null, a.createElement(i.Z, { style: [de.productCard, he, W ? de.cardBackgroundNew : de.cardBackgroundOld, r !== s && 0 !== s && z ? de.cardMarginBottom : null, n && v ? (W ? de.selectedNew : de.selectedOld) : W ? de.unselectedNew : de.unselectedOld], testID: `product-card-${H}` }, oe && pe ? a.createElement(F, { isTierSwitching: l, price: oe }) : null, a.createElement(i.Z, { style: de.productCardInner }, v ? a.createElement(i.Z, { style: de.radioContainer }, a.createElement(b.Z, { interactiveStyles: ye, style: de.radioBackground }, a.createElement(i.Z, { style: [de.circle, n ? (W ? de.circleActiveNew : de.circleActiveOld) : null] }, n ? a.createElement(S.default, { style: W ? de.checkMarkNew : de.checkMarkOld }) : null))) : null, a.createElement(i.Z, { style: de.titleRow }, a.createElement(p.ZP, { size: "headline1", weight: "medium" }, U.title), le?.metadata.percent_off ? a.createElement(i.Z, { style: de.discountPercentage }, a.createElement(p.ZP, { color: "alwaysBlack", size: "subtext1", weight: "medium" }, ce({ percent: le.metadata.percent_off }))) : null, j ? a.createElement(f.ZP, { background: "blue500", bold: !0, fontSize: "subtext3", style: de.activeLabel }, q) : null), a.createElement(B.Z, { activeSubscription: e, isTierSwitching: l, productCategory: H, productPrices: w, selectedInterval: E, shouldRemoveExtraStep: v, withAnnualPriceMonthly: !0, withAnnualSavingLabel: !le }), v ? null : fe, me)));
                },
                oe = { context: "PremiumContentProductCard" },
                le = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: () => a.createElement(i.Z, { style: [de.productCard, de.cardBackgroundNew] }, a.createElement(p.ZP, null, ee)) }), []),
                        r = e.shouldRemoveExtraStep
                            ? a.createElement(
                                  b.Z,
                                  {
                                      "aria-posinset": e.index,
                                      "aria-setsize": e.numProducts,
                                      onClick: () => {
                                          e.productContent.product_category && e.setSelectedProduct(e.productContent.product_category);
                                      },
                                      style: de.interactiveView,
                                  },
                                  a.createElement(ne, (0, s.Z)({ isSelected: e.isSelected }, e)),
                              )
                            : a.createElement(ne, e);
                    return a.createElement(v.N, { errorConfig: oe, fallback: t }, a.createElement(C.B, { fallback: a.createElement(H, { index: e.index, numProducts: e.numProducts }) }, r));
                },
                se = a.memo(le),
                de = o.default.create((e) => ({
                    activeLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite },
                    cardSmall: { width: "100%" },
                    cardXLarge: { minWidth: 230 * e.scaleMultiplier, maxWidth: 250 * e.scaleMultiplier },
                    cardXXLarge: { minWidth: 330 * e.scaleMultiplier, maxWidth: 330 * e.scaleMultiplier },
                    productCard: { borderRadius: e.borderRadii.large, flexGrow: 1 },
                    productCardInner: { padding: e.spaces.space24, paddingTop: e.spaces.space32, flexGrow: 1 },
                    cardMarginBottom: { marginBottom: e.spaces.space32 },
                    cardBackgroundNew: { backgroundColor: e.colors.gray0 },
                    cardBackgroundOld: { backgroundColor: e.colors.gray50 },
                    titleRow: { flexDirection: "row", alignItems: "center" },
                    discountPercentage: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.small, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2, marginStart: e.spaces.space8, flexDirection: "row", alignItems: "center", gap: e.spaces.space2 },
                    featureList: { marginTop: e.spaces.space16, flexGrow: 1 },
                    featureRow: { marginBottom: e.spaces.space8, flexDirection: "row", color: e.colors.text, display: "block" },
                    icon: { marginEnd: e.spaces.space4 },
                    checkoutButtonInner: { backgroundColor: "unset", boxShadow: "none", paddingBottom: 0 },
                    checkoutButton: { width: "100%", marginVertical: e.spaces.space16 },
                    tierSwitchButton: { marginTop: e.spaces.space16 },
                    purchaseConfirmButton: { marginTop: e.spaces.space16 },
                    selectedOld: { borderWidth: e.borderWidths.medium, borderColor: e.colors.primary },
                    selectedNew: { borderWidth: e.borderWidths.small, borderColor: e.colors.text, backgroundColor: e.colors.gray0, boxShadow: e.boxShadows.large },
                    unselectedOld: { borderWidth: e.borderWidths.medium, borderColor: "transparent" },
                    unselectedNew: { borderWidth: e.borderWidths.small, borderColor: "transparent" },
                    interactiveView: { borderRadius: e.borderRadii.large },
                    circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 },
                    circleActiveOld: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
                    circleActiveNew: { borderColor: e.colors.text, backgroundColor: e.colors.text },
                    checkMarkNew: { width: "18px", height: "18px", color: e.colors.cellBackground },
                    checkMarkOld: { width: "18px", height: "18px", color: e.colors.whiteOnColor },
                    radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 },
                    radioContainer: { userSelect: "none", marginEnd: e.spaces.space24, marginTop: e.spaces.space32, position: "absolute", end: "0px", top: "0px" },
                    infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 },
                    infoContainer: { padding: e.spaces.space24 },
                    infoDescription: { marginTop: e.spaces.space8 },
                    infoPopoverContent: { maxWidth: "2em" },
                    iconInfo: { color: e.colors.gray700, fontSize: e.fontSizes.headline2 },
                    supergrokContainer: { width: "100%", borderRadius: e.borderRadii.medium, padding: e.spaces.space12, backgroundColor: e.colors.gray50, marginTop: e.spaces.space4 },
                    supergrokSvg: { height: "28px", width: "125px", marginBottom: e.spaces.space8 },
                    supergrokFeatureRow: { marginBottom: e.spaces.space4, flexDirection: "row", color: e.colors.text, display: "block", marginStart: e.spaces.space4 },
                })),
                ue = a.createElement(E.default, { style: de.iconInfo });
            function pe(e, t) {
                const r = new Map(t.map((e, t) => [e, t]));
                return e.slice().sort((e, t) => {
                    const a = e.product_category ? r.get(e.product_category) : void 0,
                        i = t.product_category ? r.get(t.product_category) : void 0;
                    return void 0 === a && void 0 === i ? 0 : void 0 === a ? 1 : void 0 === i ? -1 : a - i;
                });
            }
            const me = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: o, products: s, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m }) => {
                    const g = (0, c.Mv)(),
                        h = (0, n.Gz)(),
                        { featureSwitches: b } = (0, l.QZ)(),
                        f = ((e, t, r) => {
                            if (e) {
                                const e = r.getStringValue("subscriptions_premium_tiers_order_variant");
                                if (3 === t.length)
                                    switch (e) {
                                        case "variant_a":
                                            return pe(t, ["BlueVerified", "BlueVerifiedPlus", "PremiumBasic"]);
                                        case "variant_b":
                                            return pe(t, ["BlueVerified", "PremiumBasic", "BlueVerifiedPlus"]);
                                        default:
                                            return t.toReversed();
                                    }
                                return t.toReversed();
                            }
                            return t;
                        })(g, s, b);
                    return a.createElement(
                        i.Z,
                        { role: m ? "radiogroup" : null, style: [he.productCards, g ? he.productCardsSmall : h ? he.productCardsLarge : he.productCardsMedium] },
                        f.map((i, c) => {
                            const n = u === i.product_category,
                                l = i.product_category ? o.productDetailsMap[i.product_category] : null;
                            return a.createElement(se, { activeSubscription: e, disclaimerRef: t, index: c, isSelected: n, isTierSwitching: r, key: c, numProducts: s.length - 1, premiumPriceConfig: o, productContent: i, productPrices: l, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m });
                        }),
                    );
                },
                ge = a.memo(me),
                he = o.default.create((e) => ({ productCards: { minHeight: 150 * e.scaleMultiplier }, productCardsSmall: { marginTop: e.spaces.space16, flexDirection: "column", width: "100%" }, productCardsMedium: { marginTop: e.spaces.space24, flexDirection: "row", width: "100%", gap: e.spaces.space16, justifyContent: "center" }, productCardsLarge: { marginTop: e.spaces.space40, flexDirection: "row", gap: e.spaces.space32, width: "100%", justifyContent: "center" } }));
        },
        701273: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(202784),
                i = r(325686),
                c = r(67369),
                n = r(708852),
                o = r(782947),
                l = r(392237),
                s = r(111677),
                d = r.n(s),
                u = r(337394);
            const p = d().f89dfa74,
                m = d().b9a4d8c6,
                g = d().a3a4e8f8,
                h = ({ formattedMonthlyPrice: e, isMobile: t, productDetails: r, productDetailsFetchStatus: l, selectedInterval: s, setSelectedInterval: d }) => {
                    const h = (0, c.Mv)(),
                        b = (0, n.Gz)(),
                        y = [
                            { value: u.rv.Year, pillText: p, pillType: "subscriptionSaving", label: m },
                            { value: u.rv.Month, label: g },
                        ],
                        w = a.useCallback(
                            (e, t) => {
                                d?.(t);
                            },
                            [d],
                        ),
                        _ = h ? f.marginSmall : b ? f.marginLarge : f.marginMedium;
                    return d ? a.createElement(i.Z, { style: _ }, a.createElement(o.Z, { horizontal: !0, name: "interval-selector", onChange: w, options: y, switchStyle: !0, value: s })) : null;
                },
                b = a.memo(h),
                f = l.default.create((e) => ({ intervalSelector: { marginBottom: e.spaces.space16 }, intervalSelectorMobile: { marginBottom: e.spaces.space24 }, marginSmall: { marginTop: e.spaces.space16 }, marginMedium: { marginTop: e.spaces.space16 }, marginLarge: { marginTop: e.spaces.space64 } }));
        },
        275158: (e, t, r) => {
            r.d(t, { _r: () => o, d9: () => i, gV: () => n, iG: () => c });
            const a = `https://${window.location.host}`,
                i = `${a}/settings/subscription`,
                c = "/i/premium_sign_up",
                n = `${a}${c}`,
                o = `${n}/successful`;
        },
        754962: (e, t, r) => {
            r.d(t, { ZP: () => he });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                i = r(325686),
                c = r(107267),
                n = r(154003),
                o = r(167630),
                l = r(40610),
                s = r(392237),
                d = r(111677),
                u = r.n(d),
                p = r(952793),
                m = r(782826),
                g = r(685731),
                h = r(668214),
                b = r(365265);
            const f = (0, h.Z)()
                .propsFromState(() => ({ checkoutUrlFetchStatus: (e, t) => (0, b.$B)(e, ((e, t) => t.stripeProductId)(0, t)), switchTierFetchStatus: b.RC }))
                .propsFromActions(() => ({ fetchSubscriptionProductCheckoutUrl: b.qB, switchTier: b.xN }))
                .withAnalytics();
            var y = r(275158);
            const w = "subscribeButton",
                _ = "tierSwitchButton";
            var S = r(548797),
                E = r(87063),
                P = r(725405),
                v = r(731708),
                C = r(529356),
                k = r(97882),
                x = r(337394),
                Z = r(321330),
                T = r(688715);
            const M = (0, T.ju)("https://legal.x.com/purchaser-terms.html"),
                I = (0, T.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"),
                R = a.createElement(v.ZP, { link: M }),
                B = a.createElement(v.ZP, { link: I }),
                D = a.createElement(u().I18NFormatMessage, { $i18n: "b2138d0f" }, a.cloneElement(R, null, u().ia08113f), a.cloneElement(R, null, u().d2962b73), a.cloneElement(B, null, u().b421795a)),
                L = a.createElement(u().I18NFormatMessage, { $i18n: "c2255911" }, a.cloneElement(R, null, u().f8d88ac7), a.cloneElement(R, null, u().ca220fe9), a.cloneElement(B, null, u().ab8beda0)),
                W = a.createElement(u().I18NFormatMessage, { $i18n: "e647175f" }, a.cloneElement(R, null, u().ife2636d), a.cloneElement(R, null, u().fb57be65), a.cloneElement(B, null, u().e468a6c2)),
                F = a.createElement(u().I18NFormatMessage, { $i18n: "eaccb9c9" }, a.cloneElement(R, null, u().e9f4c89b), a.cloneElement(R, null, u().hce73b41), a.cloneElement(B, null, u().i4db5c92)),
                N = ({ chargeInterval: e, tierSwitchType: t }) => {
                    let r = "";
                    return "active" === t ? (r = "Year" === e ? W : F) : "upgrade" === t ? (r = D) : "downgrade" === t && (r = L), a.createElement(i.Z, { style: [$.termsOfService, $.positionRelative] }, a.createElement(v.ZP, { align: "left", color: "gray900", size: "subtext2", style: $.justifyText }, r));
                },
                $ = s.default.create((e) => ({ justifyText: { textAlign: "justify" }, termsOfService: { flexDirection: "row", maxWidth: "32em", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space12, marginHorizontal: "auto", textAlign: "center", borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium }, positionRelative: { position: "relative" } })),
                z = u().ba2e82a1,
                A = u().i2c32253,
                O = u().c41e1023,
                G = u().gf6b66b8,
                U = u().e83daf87,
                V = u().f27022d6,
                X = u().i9d5f4b6,
                H = u().ia390d8a,
                j = u().fd80b875,
                Y = u().c8fb177a,
                q = u().df776505,
                Q = u().c8fb177a,
                J = u().d7efb6ba,
                K = u().a5f2cf70,
                ee = u().ef1c0208,
                te = ({ activeSubscription: e, premiumPriceConfig: t, price: r, productPrices: n, selectedInterval: o, selectedProduct: l, setShowTierSwitchConfirm: s, setTierSwitchError: d, switchTier: u, tierSwitchType: h }) => {
                    const b = (0, P.Z)(),
                        f = (0, c.useHistory)(),
                        { label: y } = (0, Z.Z)(),
                        w = (0, p.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        _ = a.useCallback(() => {
                            const e = r?.external_price_id;
                            b.scribe({ action: "click", element: "tier_switch", component: e, data: { referring_page: (0, m.G3)(f.location) } }),
                                e &&
                                    u(e).then((e) => {
                                        const t = e?.switch_tier?.__typename;
                                        if ("WebPaymentsTierSwitchResultSuccess" === t) {
                                            b.scribe({ action: "success", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } });
                                            const e = { tierSwitchTarget: x.MW[l], tierSwitchType: h };
                                            f.push("/i/premium", e);
                                        } else "WebPaymentsTierSwitchResultError" === t && (b.scribe({ action: "failure", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } }), d(!0));
                                    });
                        }, [f, b, u, l, r, h, d]),
                        S = x.v5.premium[e.product?.rest_id ?? ""],
                        E = S ? t.productDetailsMap[S] : null,
                        T = (0, p.hC)("subscriptions_management_use_active_price"),
                        M = (0, g.Gi)(e.charge_interval, T ? e.prices : E?.prices),
                        I = M ? (0, g.d3)(M, w, e) : "";
                    let R = null,
                        B = "";
                    if (n && l) {
                        const e = (0, g.Gi)(o, n.prices),
                            t = (0, k.x)({ amount: (0, g.aU)(e, w), currencyCode: e?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
                        "Year" === o ? (R = O({ price: t })) : "Month" === o && (R = A({ price: t })), (B = x.St[l]);
                    }
                    const D = z(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))),
                        L = a.useMemo(() => {
                            let e, t;
                            switch (h) {
                                case "downgrade":
                                    (e = H), (t = j({ nextBillingDate: D, newTierName: B }));
                                    break;
                                case "upgrade":
                                    (e = Y), (t = q({ newTierName: B }));
                                    break;
                                case "active":
                                    (e = Q), (t = "Year" === o ? J : K);
                                    break;
                                default:
                                    return null;
                            }
                            return a.createElement(i.Z, { style: re.callout }, a.createElement(i.Z, { style: re.column }, a.createElement(v.ZP, { color: "text", weight: "medium" }, e), a.createElement(v.ZP, { color: "text" }, t)));
                        }, [h, D, B, o]),
                        W = a.createElement(i.Z, { style: re.container }, a.createElement(i.Z, { style: re.tierSwitchConfirmBody }, I ? a.createElement(i.Z, { style: re.tierSwitchPlanContent, testID: "current-plan" }, a.createElement(v.ZP, { color: "text", style: re.marginBottom, weight: "bold" }, V), a.createElement(v.ZP, { color: "text", style: re.marginBottom }, y), a.createElement(v.ZP, { color: "text" }, I)) : null, R ? a.createElement(i.Z, { style: re.tierSwitchPlanContent, testID: "new-plan" }, a.createElement(v.ZP, { color: "text", style: re.marginBottom, weight: "bold" }, X), a.createElement(v.ZP, { color: "text", style: re.marginBottom }, B), a.createElement(v.ZP, { color: "text" }, R)) : null), L),
                        F = a.useCallback(() => s(!1), [s]),
                        $ = "downgrade" === h ? U({ date: D }) : G;
                    return a.createElement(C.Z, { actionLabel: ee, footer: a.createElement(N, { chargeInterval: o, tierSwitchType: h }), graphicDisplayMode: "none", headline: $, onAction: _, onClose: F, subtext: W });
                },
                re = s.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 }, tierSwitchPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, flexGrow: 1, maxWidth: "50%" }, tierSwitchConfirmBody: { marginTop: e.spaces.space8, flexDirection: "row", display: "flex", gap: e.spaces.space16 }, container: { width: "100%", gap: e.spaces.space16 }, callout: { padding: e.spaces.space8, gap: e.spaces.space8, borderRadius: e.borderRadii.small, backgroundColor: e.colors.blue50, flexDirection: "row" }, column: { gap: e.spaces.space8, maxWidth: "100%" } })),
                ae = u().aaa798fc,
                ie = u().c906ad94,
                ce = u().db5c77e0,
                ne = u().h77ef73e,
                oe = u().d723d44a,
                le = ({ activeSubscription: e, buttonStyles: t, isMobile: r, premiumPriceConfig: i, price: o, productPrices: l, selectedInterval: s, selectedProduct: d, setShowSheet: u, setTierSwitchError: p, showSheet: g, stripeProductId: h, switchTier: b, switchTierFetchStatus: f }) => {
                    const y = (0, P.Z)(),
                        w = (0, c.useHistory)(),
                        [v, C] = a.useState(!1),
                        k = a.useMemo(() => (0, S.yv)({ activeSubscription: e, tier: d }), [d, e]),
                        [x, Z] = a.useMemo(() => {
                            let t = !1,
                                a = null;
                            if ("upgrade" === k) a = ae;
                            else if ("downgrade" === k) a = ie;
                            else {
                                if ("active" !== k) return [null, null];
                                {
                                    const i = e.charge_interval;
                                    i !== s || (!g && r) ? ("Month" === i ? (a = oe) : "Year" === i && (a = ne)) : ((a = ce), (t = !0));
                                }
                            }
                            return [a, t];
                        }, [e, r, s, k, g]),
                        T = a.useCallback(() => {
                            C(!0);
                        }, [C]),
                        M = a.useCallback(() => {
                            y.scribe({ action: "click", component: h, element: "starting_at", data: { referring_page: (0, m.G3)(w.location) } }), u(!0);
                        }, [y, w.location, h, u]);
                    return a.createElement(a.Fragment, null, v ? a.createElement(te, { activeSubscription: e, premiumPriceConfig: i, price: o, productPrices: l, selectedInterval: s, selectedProduct: d, setShowTierSwitchConfirm: C, setTierSwitchError: p, switchTier: b, tierSwitchType: k }) : null, a.createElement(n.ZP, { disabled: Z || f === E.Z.LOADING, onPress: r && !g ? M : T, style: t, testID: _, type: "primaryFilled" }, x));
                },
                se = u().a73d39fb,
                de = u().e4a6e006,
                ue = u().i61a221c,
                pe = u().bd40d5b5,
                me = u().i36a0b6e,
                ge = s.default.create((e) => ({ errorCallout: { marginBottom: e.spaces.space16 }, positionSticky: { position: "sticky" }, inlineCallout: { width: "75%" }, footerWrapper: { alignItems: "center", justifyContent: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space16 }, width75Percent: { width: "75%" }, fullWidth: { width: "100%" }, button: { cursor: "pointer", alignItems: "center" }, tierSwitchCallout: { marginTop: e.spaces.space8 } })),
                he = a.memo(
                    f((e) => {
                        const { activeSubscription: t, analytics: r, buttonSize: s, buttonStyle: d, buttonType: u, checkoutUrlFetchStatus: h, disabledText: b, disclaimer: f, fetchSubscriptionProductCheckoutUrl: _, isMobile: S, isTierSwitching: E, onClick: P, premiumPriceConfig: v, productPrices: C, selectedInterval: k, selectedProduct: x, stripeProductId: Z, stripeProductIdUnhashed: T, style: M, supportedReferringPage: I, switchTier: R, switchTierFetchStatus: B, title: D } = e,
                            L = (0, p.hC)("responsive_web_twitter_blue_subscriptions_disabled"),
                            W = (0, p.hC)("subscriptions_marketing_page_free_trial_enabled"),
                            F = (0, p.hC)("subscriptions_marketing_page_discounts_enabled"),
                            N = (0, c.useHistory)(),
                            [$, z] = a.useState(!1),
                            [A, O] = a.useState(!1),
                            G = a.useCallback((e) => {
                                const t = e.query?.redirect_after_success;
                                if (t && "string" == typeof t && m.ZP.isXOrXaiUrl(decodeURIComponent(t))) return t;
                            }, []),
                            U = a.useCallback(() => {
                                const e = G(N.location),
                                    t = (0, m.G3)(N.location),
                                    r = {};
                                x && (r.selectedProduct = x), k && (r.selectedInterval = k), t && (r.referring_page = t), e && (r.redirectAfterSuccess = e);
                                const a = new URLSearchParams(r).toString();
                                return a ? `${y._r}?${a}` : y._r;
                            }, [x, N.location, k, G]),
                            V = b || me,
                            X = a.useMemo(() => "failure" === N.location?.query?.flow_status, [N]),
                            H = a.useCallback(() => {
                                N.push({ pathname: "/i/flow/subscription_eligibility_check", query: { return_path: y.iG, referring_page: I } });
                            }, [N, I]),
                            j = (0, g.Gi)(k, C?.prices),
                            Y = j ? (0, g.Mk)(j) : null,
                            q = j ? (0, g.fS)(j, F, E ?? !1) : null,
                            Q = a.useCallback(() => {
                                const e = j?.external_price_id,
                                    t = Y?.program_id,
                                    r = q?.program_id;
                                if (e) {
                                    const a = [];
                                    return t && a.push({ program_id: t }), r && a.push({ program_id: r }), _({ id: Z, externalProductId: T, successUrl: U(), cancelUrl: I ? `${y.gV}?referring_page=${I}` : y.gV, externalPriceId: e, promotion_data: a.length > 0 ? a : void 0 });
                                }
                            }, [_, Z, T, I, U, j, Y, q]),
                            J = a.useCallback((e) => ((window.location.href = e), null), []),
                            K = a.useCallback(() => {
                                const e = (0, m.G3)(N.location);
                                r.scribe({ action: "click", element: "subscribe", component: Z, data: { referring_page: e, referer: e } }),
                                    X
                                        ? H()
                                        : (Q()
                                              ?.then((e) => {
                                                  e && J(e);
                                              })
                                              .catch(() => {
                                                  H();
                                              }),
                                          P && P());
                            }, [Q, r, N.location, P, H, X, Z, J]),
                            ee = a.useMemo(() => [M, S ? null : ge.positionSticky], [S, M]),
                            te = a.useMemo(() => [ge.footerWrapper, M], [M]),
                            re = a.useMemo(() => [ge.button, S && !$ ? ge.width75Percent : ge.fullWidth, d], [d, S, $]),
                            ae = a.useMemo(() => (Y && W ? se({ numberOfDays: Y.metadata.free_trial_days }) : ue), [Y, W]),
                            ie = a.useMemo(() => {
                                const e = a.createElement(n.ZP, { "aria-label": D ? pe({ title: D }) : ae, disabled: !C || "loading" === h || X, onPress: K, size: s, style: re, testID: w, type: u || "primaryFilled" }, "loading" === h ? a.createElement(o.Z, { color: "brandFilled" === u ? "white" : void 0, size: "small" }) : ae),
                                    r = "failed" === h || "failed" === B || A ? a.createElement(l.Z.Danger, { style: ge.errorCallout, text: de }) : null;
                                return a.createElement(i.Z, { style: ee }, r, E && t ? a.createElement(le, { activeSubscription: t, buttonStyles: re, isMobile: S, premiumPriceConfig: v, price: j, productPrices: C, selectedInterval: k, selectedProduct: x, setShowSheet: z, setTierSwitchError: O, showSheet: $, stripeProductId: Z, switchTier: R, switchTierFetchStatus: B }) : e, f);
                            }, [D, C, A, h, X, K, ee, re, B, f, E, u, ae, t, s, S, k, $, Z, v, x, R, j]),
                            ce = a.useCallback(() => (L ? a.createElement(i.Z, { style: te }, a.createElement(i.Z, { style: ge.inlineCallout }, a.createElement(l.Z.Custom, { text: V }))) : a.createElement(i.Z, { style: ee, testID: "container" }, ie)), [L, ee, ie, te, V]);
                        return a.createElement(i.Z, null, ce());
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-20ca922c.bedf85da.js.map
