"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-b8334df9"],
    {
        684841: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                i = r(325686),
                o = r(731708),
                n = r(750410),
                l = r(392237),
                c = r(883229),
                s = r(943914),
                d = r(685731),
                u = r(137070),
                p = r(690559),
                m = r(393866),
                g = r(754962);
            const h = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: n, productName: l, selectedInterval: c, selectedProduct: s }) => {
                    const h = (0, u.Z)(),
                        b = n.productDetailsMap[s],
                        f = h[s].hashed,
                        y = h[s].unhashed,
                        w = b ? (0, d.Gi)(c, b.prices) : null,
                        P = w ? (0, d.Mk)(w) : null,
                        E = b ? a.createElement(g.ZP, { activeSubscription: void 0, buttonStyle: v.checkoutButton, buttonType: "brandFilled", isTierSwitching: !1, premiumPriceConfig: n, productPrices: b, selectedInterval: c, selectedProduct: s, stripeProductId: f, stripeProductIdUnhashed: y }) : null;
                    return t ? a.createElement(i.Z, { style: v.footer, testID: "premium_signup_footer" }, a.createElement(i.Z, { style: [v.column, v.marginEnd] }, a.createElement(i.Z, { style: v.row }, a.createElement(o.ZP, { size: "headline1", weight: "medium" }, l)), a.createElement(m.Z, { activeSubscription: e, isTierSwitching: r, productCategory: s, productPrices: b, selectedInterval: c, shouldRemoveExtraStep: !0, withAnnualPriceMonthly: !1, withAnnualSavingLabel: !1 })), a.createElement(i.Z, { style: v.column }, E, a.createElement(p.Z, { disclaimerRef: t, freeTrialInfo: P }))) : null;
                },
                b = { context: "PremiumContentFooter" },
                f = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: (e) => a.createElement(i.Z, { style: v.footer }, a.createElement(n.Z, { onRequestRetry: e })) }), []);
                    return a.createElement(c.N, { errorConfig: b, fallback: t, key: e.productName }, a.createElement(s.B, null, a.createElement(h, e)));
                },
                y = a.memo(f),
                v = l.default.create((e) => ({ footer: { position: "fixed", bottom: 0, minHeight: 100, backgroundColor: e.colors.navigationBackground95, width: "100%", padding: e.spaces.space16, flexDirection: "row", justifyContent: "center", borderStyle: "solid", borderTopWidth: e.spaces.space1, borderEndWidth: 0, borderBottomWidth: 0, borderStartWidth: 0, borderColor: e.colors.gray300 }, column: { flexDirection: "column", maxWidth: 475, minWidth: 225 }, checkoutButton: { marginBottom: e.spaces.space12 }, marginEnd: { marginEnd: e.spaces.space16 }, row: { flexDirection: "row" } }));
        },
        336629: (e, t, r) => {
            r.d(t, { T: () => o });
            var a = r(97882),
                i = r(685731);
            const o = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: r, percentOff: o, price: n }) => {
                const l = (0, i.aU)(n, t, o),
                    c = e ? l / 12 : r ? 12 * l : l;
                return (0, a.x)({ amount: c, currencyCode: n?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, r) => {
            r.d(t, { V: () => y, f: () => f });
            var a = r(202784),
                i = r(325686),
                o = r(731708),
                n = r(392237),
                l = r(332920),
                c = r.n(l),
                s = r(336629);
            const d = c().i57aeafb,
                u = c().ae3e3723,
                p = c().ade4c757,
                m = c().f7798e11,
                g = c().e0b39888,
                h = c().b67c37de,
                b = c().a8363765,
                f = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: r, includeTax: a, isFreeTrial: i, isTierSwitching: o, price: n, selectedInterval: l, shouldRemoveExtraStep: c, withAnnualPriceMonthly: d }) => (i ? ("Month" === l ? p({ price: r }) : m({ price: r })) : t || e ? y({ formattedPrice: r, selectedInterval: l, includeDiscountedPrice: "Year" === l && d, discountedFormattedPrice: (0, s.T)({ price: n, includeTax: a, percentOff: o ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: o ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === l && c ? b({ price: r }) : "Month" === l ? g : h),
                y = ({ discountedFormattedPrice: e, duration: t, formattedPrice: r, includeDiscountedPrice: n, includeThenLabel: l, selectedInterval: s }) => {
                    let g;
                    return (g = "Month" === s ? (n ? a.createElement(c().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(o.ZP, { style: { textDecorationLine: "line-through" } }, c().df3ed1c8({ standardPrice: r }))) : d({ duration: t, standardPrice: r })) : n ? a.createElement(c().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(o.ZP, { style: { textDecorationLine: "line-through" } }, c().g261b098({ standardPrice: r }))) : u({ duration: t, standardPrice: r })), l && (g = a.createElement(i.Z, null, a.createElement(o.ZP, { style: v.marginBottom }, g), a.createElement(o.ZP, null, "Year" === s ? m({ price: r }) : p({ price: r })))), g;
                },
                v = n.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        393866: (e, t, r) => {
            r.d(t, { Z: () => E });
            var a = r(202784),
                i = r(325686),
                o = r(40610),
                n = r(868634),
                l = r(731708),
                c = r(392237),
                s = r(332920),
                d = r.n(s),
                u = r(952793),
                p = r(97882),
                m = r(548797),
                g = r(685731),
                h = r(336629),
                b = r(862695);
            const f = d().f36b8e14,
                y = d().f1756574,
                v = d().i650ff14,
                w = d().dbcd25db,
                P = ({ activeSubscription: e, isTierSwitching: t, productCategory: r, productPrices: c, selectedInterval: s, shouldRemoveExtraStep: d, withAnnualPriceMonthly: P, withAnnualSavingLabel: E }) => {
                    const _ = (0, u.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        C = (0, u.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        Z = (0, u.hC)("subscriptions_marketing_page_discounts_enabled"),
                        k = "active" === (0, m.yv)({ activeSubscription: e, tier: r }) && s === e?.charge_interval,
                        x = (0, u.hC)("subscriptions_management_use_active_price") && t && k,
                        I = (0, g.Gi)(s, x ? e?.prices : c?.prices),
                        M = I ? (0, g.Mk)(I) : null,
                        T = M && C && !t,
                        B = k ? (0, m.gS)(e, "Discount", { status: "active" }) : null,
                        R = I ? (0, g.fS)(I, Z, t) : null,
                        z = (0, h.T)({ price: I, includeTax: _, annualPriceMonthly: !1 }),
                        D = (0, h.T)({ price: I, includeTax: _, annualPriceMonthly: !0 }),
                        L = (0, b.f)({ isFreeTrial: !!T, selectedInterval: s, formattedPrice: z, discountInfo: R, activeDiscountInfo: B, price: I, shouldRemoveExtraStep: d, withAnnualPriceMonthly: P, includeTax: _, isTierSwitching: t });
                    if (!I) return a.createElement(o.Z.Danger, { text: f });
                    const $ = c ? (0, m.pB)(c) : null,
                        W = a.createElement(n.ZP, { style: S.saveLabel, type: "subscriptionSaving" }, $),
                        F = T ? a.createElement(l.ZP, { style: S.intervalLabel }, w({ numberOfDays: M?.metadata.free_trial_days })) : a.createElement(l.ZP, { size: "body", style: S.intervalLabel }, "Month" === s || P ? y : v),
                        O = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: S.priceLabel, weight: "bold" }, "Year" === s && P ? D : z), F),
                        A = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: S.priceLabel, weight: "bold" }, (0, p.x)({ amount: 0, currencyCode: I?.currency_code.toUpperCase(), removeTrailingZeros: !0 })), F),
                        G = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: [S.priceLabel, S.strikethrough] }, "Year" === s && P ? D : z), a.createElement(l.ZP, { style: [S.priceLabel, S.discountPriceLabel], weight: "bold" }, (0, h.T)({ price: I, includeTax: _, percentOff: R?.metadata.percent_off || B?.promotion_metadata?.percent_off, annualPriceMonthly: P && "Year" === s })), F);
                    let Y = O;
                    return T ? (Y = A) : (R || B) && (Y = G), a.createElement(i.Z, null, a.createElement(i.Z, { style: S.priceRow }, Y), a.createElement(i.Z, { style: S.billingRow }, a.createElement(l.ZP, { color: "gray900" }, L), "Year" !== s || !E || R || B ? null : W));
                },
                E = a.memo(P),
                S = c.default.create((e) => ({ priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16, flexWrap: "wrap" }, billingRow: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, discountPriceLabel: { marginStart: e.spaces.space8, color: e.colors.green500 }, intervalLabel: { marginStart: e.spaces.space4 }, saveLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite }, strikethrough: { textDecorationLine: "line-through", fontWeight: "lighter", color: e.colors.gray900 } }));
        },
        778e3: (e, t, r) => {
            r.d(t, { Z: () => ge });
            r(74882);
            var a = r(202784),
                i = r(325686),
                o = r(67369),
                n = r(708852),
                l = r(392237),
                c = r(443781),
                s = r(807896),
                d = r(277660),
                u = r.n(d),
                p = r(731708),
                m = r(30899),
                g = r(154003),
                h = r(58881),
                b = r(530732),
                f = r(868634),
                y = r(332920),
                v = r.n(y),
                w = r(202560),
                P = r(913973),
                E = r(711223),
                S = r(187669),
                _ = r(883229),
                C = r(943914),
                Z = r(952793),
                k = r(548797),
                x = r(685731),
                I = r(725405),
                M = r(498514),
                T = r(512923),
                B = r(137070),
                R = r(393866);
            const z = v().g1be3530,
                D = v().b10b4f1f,
                L = v().a9f397f3,
                $ = ({ isTierSwitching: e, price: t }) => {
                    const r = (0, Z.hC)("subscriptions_marketing_page_discounts_enabled"),
                        i = (0, Z.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        o = (t ? (0, x.Mk)(t) : null) && i && !e,
                        n = t ? (0, x.fS)(t, r, e) : null;
                    if (o) return a.createElement(f.ZP, { style: W.promoLabel, type: "subscriptionPromo" }, z);
                    if (n) {
                        const e = n.ends_at_msec,
                            t = e ? new Date(parseInt(e, 10)) : void 0,
                            r = t ? L(t) : void 0;
                        return a.createElement(f.ZP, { style: W.promoLabel, type: "subscriptionPromo" }, D({ percentOff: n.metadata.percent_off, date: r }));
                    }
                    return null;
                },
                W = l.default.create((e) => ({ promoLabel: { borderRadius: e.borderRadiiPx.infinite, paddingHorizontal: e.spaces.space8, alignSelf: "center", position: "absolute", top: `-${e.spaces.space16}`, padding: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.green300, width: "70%" } }));
            var F = r(754962),
                O = r(529356),
                A = r(516951),
                G = r(690559);
            const Y = v().b8d0bd19,
                H = ({ activeSubscription: e, checkoutButton: t, disclaimerRef: r, interval: o, isTierSwitching: n, onClose: l, product: c, productCategory: s, productTitle: d, shouldRemoveExtraStep: u }) => {
                    const p = (0, Z.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        m = c ? (0, x.Gi)(o, c.prices) : null,
                        g = m ? (0, x.Mk)(m) : null;
                    if (!r || !d) return null;
                    const h = g && p ? Y({ productName: d }) : d,
                        b = a.createElement(i.Z, { style: U.body, testID: "purchase-sheet" }, a.createElement(R.Z, { activeSubscription: e, isTierSwitching: n, productCategory: s, productPrices: c, selectedInterval: o, shouldRemoveExtraStep: u, withAnnualPriceMonthly: !1, withAnnualSavingLabel: !0 }), t, a.createElement(G.Z, { disclaimerRef: r, freeTrialInfo: g }));
                    return a.createElement(O.Z, { graphicDisplayMode: "none", headline: h, onAction: A.Z, onClose: l, subtext: b });
                },
                N = a.memo(H),
                U = l.default.create((e) => ({ body: { color: e.colors.text }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16 }, billingRow: { marginBottom: e.spaces.space32, flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, intervalLabel: { marginStart: e.spaces.space4 } })),
                j = ({ index: e, numProducts: t }) => {
                    const r = (0, o.Mv)(),
                        n = (0, o.pj)(),
                        l = r ? V.cardSmall : n ? V.cardXLarge : V.cardXXLarge;
                    return a.createElement(i.Z, { style: [V.productCard, l, e !== t && 0 !== t && r ? V.cardMarginBottom : null] });
                },
                V = l.default.create((e) => ({ productCard: { width: 303 * e.scaleMultiplier, padding: e.spaces.space32, borderRadius: e.borderRadii.large, minHeight: 432 * e.scaleMultiplier, backgroundColor: e.colors.gray50 }, cardSmall: { width: "100%" }, cardXLarge: { minWidth: 230 * e.scaleMultiplier, maxWidth: 250 * e.scaleMultiplier }, cardXXLarge: { minWidth: 300 * e.scaleMultiplier, maxWidth: 300 * e.scaleMultiplier }, cardMarginBottom: { marginBottom: e.spaces.space48 } })),
                X = "subscribeButton",
                q = v().be103b84,
                Q = v().ab0decc0,
                J = v().a73d39fb,
                K = v().i859a9d4,
                ee = v().f36b8e14,
                te = v().ae095fe8,
                re = v().d4e60288,
                ae = v().abaa4274,
                ie = v().e0d53864,
                oe = v().cfe836d1,
                ne = ({ activeSubscription: e, disclaimerRef: t, index: r, isSelected: n, isTierSwitching: c, numProducts: s, premiumPriceConfig: d, productContent: y, productPrices: v, selectedInterval: E, shouldRemoveExtraStep: _ }) => {
                    const C = (0, Z.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        z = (0, Z.hC)("subscriptions_marketing_page_new_grok_content_enabled"),
                        D = (0, Z.hC)("subscriptions_marketing_page_supergrok_content_enabled"),
                        L = (0, I.Z)(),
                        W = (0, o.Mv)(),
                        O = (0, o.pj)(),
                        [A, G] = a.useState(!1),
                        Y = u()(T.oD, y),
                        H = (0, B.Z)(),
                        U = Y.product_category,
                        j = "active" === (0, k.yv)({ activeSubscription: e, tier: U }),
                        V = H[U].hashed,
                        ee = H[U].unhashed,
                        ne = v ? (0, x.Gi)(E, v.prices) : null,
                        le = ne ? (0, x.fS)(ne, !0, c) : null,
                        ce = ne ? (0, x.Mk)(ne) : null,
                        se = ce && C && !c;
                    if (
                        ((0, S.q)(() => {
                            se && U && ce?.program_id && L.scribe({ component: "product_card_promotion", element: `${ce.program_id}`, action: "impression" });
                        }),
                        !U)
                    )
                        return null;
                    const pe = a.createElement(
                            i.Z,
                            { style: de.featureList },
                            Y.summary_bucket?.description ? a.createElement(i.Z, { style: de.featureRow }, a.createElement(p.ZP, null, Y.summary_bucket.description)) : null,
                            Y.summary_bucket?.features.map((e, t) => {
                                const o = (0, M.U)(e.icon);
                                return a.createElement(i.Z, { key: `product-${r}-summary-feature-${t}`, style: de.featureRow }, a.createElement(o, { style: de.icon }), a.createElement(p.ZP, null, e.title, e.description ? a.createElement(m.Z, { contentStyle: de.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(i.Z, { style: de.infoContainer }, a.createElement(p.ZP, { size: "title4", weight: "medium" }, e.title), a.createElement(p.ZP, { color: "gray700", style: de.infoDescription }, e.description)) }, a.createElement(g.ZP, { "aria-label": K, icon: ue, size: "xSmall", style: de.infoButton, type: "primaryText" })) : null));
                            }),
                            z && "BlueVerifiedPlus" === U
                                ? D
                                    ? a.createElement(
                                          i.Z,
                                          { style: de.supergrokContainer },
                                          a.createElement(w.default, { style: de.supergrokSvg }),
                                          [re, ae, ie].map((e, t) => a.createElement(i.Z, { key: `product-${r}-grok-summary-feature-${t}`, style: de.supergrokFeatureRow }, a.createElement(P.default, { style: de.icon }), a.createElement(p.ZP, { color: "gray1100" }, e))),
                                      )
                                    : a.createElement(
                                          i.Z,
                                          null,
                                          a.createElement(p.ZP, { style: de.featureRow, weight: "medium" }, te),
                                          [re, ae, ie].map((e, t) => a.createElement(i.Z, { key: `product-${r}-grok-summary-feature-${t}`, style: de.featureRow }, a.createElement(P.default, { style: de.icon }), a.createElement(p.ZP, null, e))),
                                      )
                                : null,
                        ),
                        me = v ? a.createElement(F.ZP, { activeSubscription: e, buttonStyle: c ? de.tierSwitchButton : de.checkoutButton, isTierSwitching: c, premiumPriceConfig: d, productPrices: v, selectedInterval: E, selectedProduct: U, stripeProductId: V, stripeProductIdUnhashed: ee, style: de.checkoutButtonInner }) : null,
                        ge = W ? de.cardSmall : O ? de.cardXLarge : de.cardXXLarge,
                        he = a.createElement(
                            g.ZP,
                            {
                                onClick: () => {
                                    G(!0), L.scribe({ action: "click", element: "subscribe-intermediate", component: ee });
                                },
                                style: de.purchaseConfirmButton,
                                testID: X,
                                type: "primaryFilled",
                            },
                            se ? J({ numberOfDays: ce?.metadata.free_trial_days }) : Q,
                        ),
                        be = c ? me : he,
                        fe = h.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: n ? l.default.theme.colors.primary : l.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return a.createElement(a.Fragment, null, A ? a.createElement(N, { activeSubscription: e, checkoutButton: me, disclaimerRef: t, interval: E, isTierSwitching: c, onClose: () => G(!1), product: v, productCategory: U, productTitle: Y.title, shouldRemoveExtraStep: _ }) : null, a.createElement(i.Z, { style: [de.productCard, ge, de.cardBackground, r !== s && 0 !== s && W ? de.cardMarginBottom : null, n && _ ? de.selected : de.unselected], testID: `product-card-${U}` }, ne && se ? a.createElement($, { isTierSwitching: c, price: ne }) : null, a.createElement(i.Z, { style: de.productCardInner }, _ ? a.createElement(i.Z, { style: de.radioContainer }, a.createElement(b.Z, { interactiveStyles: fe, style: de.radioBackground }, a.createElement(i.Z, { style: [de.circle, n && de.circleActive] }, n ? a.createElement(P.default, { style: de.checkMark }) : null))) : null, a.createElement(i.Z, { style: de.titleRow }, a.createElement(p.ZP, { size: "headline1", weight: "medium" }, Y.title), le?.metadata.percent_off ? a.createElement(i.Z, { style: de.discountPercentage }, a.createElement(p.ZP, { color: "alwaysBlack", size: "subtext1", weight: "medium" }, oe({ percent: le.metadata.percent_off }))) : null, j ? a.createElement(f.ZP, { background: "blue500", bold: !0, fontSize: "subtext3", style: de.activeLabel }, q) : null), a.createElement(R.Z, { activeSubscription: e, isTierSwitching: c, productCategory: U, productPrices: v, selectedInterval: E, shouldRemoveExtraStep: _, withAnnualPriceMonthly: !0, withAnnualSavingLabel: !le }), _ ? null : be, pe)));
                },
                le = { context: "PremiumContentProductCard" },
                ce = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: () => a.createElement(i.Z, { style: [de.productCard, de.cardBackground] }, a.createElement(p.ZP, null, ee)) }), []),
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
                    return a.createElement(_.N, { errorConfig: le, fallback: t }, a.createElement(C.B, { fallback: a.createElement(j, { index: e.index, numProducts: e.numProducts }) }, r));
                },
                se = a.memo(ce),
                de = l.default.create((e) => ({
                    activeLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite },
                    cardSmall: { width: "100%" },
                    cardXLarge: { minWidth: 230 * e.scaleMultiplier, maxWidth: 250 * e.scaleMultiplier },
                    cardXXLarge: { minWidth: 330 * e.scaleMultiplier, maxWidth: 330 * e.scaleMultiplier },
                    productCard: { borderRadius: e.borderRadii.large, flexGrow: 1 },
                    productCardInner: { padding: e.spaces.space24, paddingTop: e.spaces.space32, flexGrow: 1 },
                    cardMarginBottom: { marginBottom: e.spaces.space32 },
                    cardBackground: { backgroundColor: e.colors.gray50 },
                    titleRow: { flexDirection: "row", alignItems: "center" },
                    discountPercentage: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.small, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2, marginStart: e.spaces.space8, flexDirection: "row", alignItems: "center", gap: e.spaces.space2 },
                    featureList: { marginTop: e.spaces.space16, flexGrow: 1 },
                    featureRow: { marginBottom: e.spaces.space8, flexDirection: "row", color: e.colors.text, display: "block" },
                    icon: { marginEnd: e.spaces.space4 },
                    checkoutButtonInner: { backgroundColor: "unset", boxShadow: "none", paddingBottom: 0 },
                    checkoutButton: { width: "100%", marginVertical: e.spaces.space16 },
                    tierSwitchButton: { marginTop: e.spaces.space16 },
                    purchaseConfirmButton: { marginTop: e.spaces.space16 },
                    selected: { borderWidth: e.borderWidths.medium, borderColor: e.colors.primary },
                    unselected: { borderWidth: e.borderWidths.medium, borderColor: "transparent" },
                    interactiveView: { borderRadius: e.borderRadii.large },
                    circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 },
                    circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
                    checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor },
                    radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 },
                    radioContainer: { userSelect: "none", marginEnd: e.spaces.space24, marginTop: e.spaces.space32, position: "absolute", end: "0px", top: "0px" },
                    infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 },
                    infoContainer: { padding: e.spaces.space24 },
                    infoDescription: { marginTop: e.spaces.space8 },
                    infoPopoverContent: { maxWidth: "2em" },
                    iconInfo: { color: e.colors.gray700, fontSize: e.fontSizes.headline2 },
                    supergrokContainer: { width: "100%", borderRadius: e.borderRadii.medium, padding: e.spaces.space12, backgroundColor: e.colors.gray0, marginTop: e.spaces.space4 },
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
            const me = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: l, products: s, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m }) => {
                    const g = (0, o.Mv)(),
                        h = (0, n.Gz)(),
                        { featureSwitches: b } = (0, c.QZ)(),
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
                        f.map((i, o) => {
                            const n = u === i.product_category,
                                c = i.product_category ? l.productDetailsMap[i.product_category] : null;
                            return a.createElement(se, { activeSubscription: e, disclaimerRef: t, index: o, isSelected: n, isTierSwitching: r, key: o, numProducts: s.length - 1, premiumPriceConfig: l, productContent: i, productPrices: c, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m });
                        }),
                    );
                },
                ge = a.memo(me),
                he = l.default.create((e) => ({ productCards: { minHeight: 150 * e.scaleMultiplier }, productCardsSmall: { marginTop: e.spaces.space16, flexDirection: "column", width: "100%" }, productCardsMedium: { marginTop: e.spaces.space24, flexDirection: "row", width: "100%", gap: e.spaces.space16, justifyContent: "center" }, productCardsLarge: { marginTop: e.spaces.space40, flexDirection: "row", gap: e.spaces.space32, width: "100%", justifyContent: "center" } }));
        },
        701273: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(202784),
                i = r(325686),
                o = r(67369),
                n = r(708852),
                l = r(782947),
                c = r(392237),
                s = r(332920),
                d = r.n(s),
                u = r(337394);
            const p = d().f89dfa74,
                m = d().b9a4d8c6,
                g = d().a3a4e8f8,
                h = ({ formattedMonthlyPrice: e, isMobile: t, productDetails: r, productDetailsFetchStatus: c, selectedInterval: s, setSelectedInterval: d }) => {
                    const h = (0, o.Mv)(),
                        b = (0, n.Gz)(),
                        y = [
                            { value: u.rv.Year, pillText: p, pillType: "subscriptionSaving", label: m },
                            { value: u.rv.Month, label: g },
                        ],
                        v = a.useCallback(
                            (e, t) => {
                                d?.(t);
                            },
                            [d],
                        ),
                        w = h ? f.marginSmall : b ? f.marginLarge : f.marginMedium;
                    return d ? a.createElement(i.Z, { style: w }, a.createElement(l.Z, { horizontal: !0, name: "interval-selector", onChange: v, options: y, switchStyle: !0, value: s })) : null;
                },
                b = a.memo(h),
                f = c.default.create((e) => ({ intervalSelector: { marginBottom: e.spaces.space16 }, intervalSelectorMobile: { marginBottom: e.spaces.space24 }, marginSmall: { marginTop: e.spaces.space16 }, marginMedium: { marginTop: e.spaces.space16 }, marginLarge: { marginTop: e.spaces.space64 } }));
        },
        275158: (e, t, r) => {
            r.d(t, { _r: () => l, d9: () => i, gV: () => n, iG: () => o });
            const a = `https://${window.location.host}`,
                i = `${a}/settings/subscription`,
                o = "/i/premium_sign_up",
                n = `${a}${o}`,
                l = `${n}/successful`;
        },
        754962: (e, t, r) => {
            r.d(t, { ZP: () => he });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                i = r(325686),
                o = r(107267),
                n = r(154003),
                l = r(167630),
                c = r(40610),
                s = r(392237),
                d = r(332920),
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
            const v = "subscribeButton",
                w = "tierSwitchButton";
            var P = r(548797),
                E = r(87063),
                S = r(725405),
                _ = r(731708),
                C = r(529356),
                Z = r(97882),
                k = r(337394),
                x = r(321330),
                I = r(688715);
            const M = (0, I.ju)("https://legal.x.com/purchaser-terms.html"),
                T = (0, I.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"),
                B = a.createElement(_.ZP, { link: M }),
                R = a.createElement(_.ZP, { link: T }),
                z = a.createElement(u().I18NFormatMessage, { $i18n: "b2138d0f" }, a.cloneElement(B, null, u().ia08113f), a.cloneElement(B, null, u().d2962b73), a.cloneElement(R, null, u().b421795a)),
                D = a.createElement(u().I18NFormatMessage, { $i18n: "c2255911" }, a.cloneElement(B, null, u().f8d88ac7), a.cloneElement(B, null, u().ca220fe9), a.cloneElement(R, null, u().ab8beda0)),
                L = a.createElement(u().I18NFormatMessage, { $i18n: "e647175f" }, a.cloneElement(B, null, u().ife2636d), a.cloneElement(B, null, u().fb57be65), a.cloneElement(R, null, u().e468a6c2)),
                $ = a.createElement(u().I18NFormatMessage, { $i18n: "eaccb9c9" }, a.cloneElement(B, null, u().e9f4c89b), a.cloneElement(B, null, u().hce73b41), a.cloneElement(R, null, u().i4db5c92)),
                W = ({ chargeInterval: e, tierSwitchType: t }) => {
                    let r = "";
                    return "active" === t ? (r = "Year" === e ? L : $) : "upgrade" === t ? (r = z) : "downgrade" === t && (r = D), a.createElement(i.Z, { style: [F.termsOfService, F.positionRelative] }, a.createElement(_.ZP, { align: "left", color: "gray900", size: "subtext2", style: F.justifyText }, r));
                },
                F = s.default.create((e) => ({ justifyText: { textAlign: "justify" }, termsOfService: { flexDirection: "row", maxWidth: "32em", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space12, marginHorizontal: "auto", textAlign: "center", borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium }, positionRelative: { position: "relative" } })),
                O = u().ba2e82a1,
                A = u().i2c32253,
                G = u().c41e1023,
                Y = u().gf6b66b8,
                H = u().e83daf87,
                N = u().f27022d6,
                U = u().i9d5f4b6,
                j = u().ia390d8a,
                V = u().fd80b875,
                X = u().c8fb177a,
                q = u().df776505,
                Q = u().c8fb177a,
                J = u().d7efb6ba,
                K = u().a5f2cf70,
                ee = u().ef1c0208,
                te = ({ activeSubscription: e, premiumPriceConfig: t, price: r, productPrices: n, selectedInterval: l, selectedProduct: c, setShowTierSwitchConfirm: s, setTierSwitchError: d, switchTier: u, tierSwitchType: h }) => {
                    const b = (0, S.Z)(),
                        f = (0, o.useHistory)(),
                        { label: y } = (0, x.Z)(),
                        v = (0, p.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        w = a.useCallback(() => {
                            const e = r?.external_price_id;
                            b.scribe({ action: "click", element: "tier_switch", component: e, data: { referring_page: (0, m.G3)(f.location) } }),
                                e &&
                                    u(e).then((e) => {
                                        const t = e?.switch_tier?.__typename;
                                        if ("WebPaymentsTierSwitchResultSuccess" === t) {
                                            b.scribe({ action: "success", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } });
                                            const e = { tierSwitchTarget: k.MW[c], tierSwitchType: h };
                                            f.push("/i/premium", e);
                                        } else "WebPaymentsTierSwitchResultError" === t && (b.scribe({ action: "failure", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } }), d(!0));
                                    });
                        }, [f, b, u, c, r, h, d]),
                        P = k.v5.premium[e.product?.rest_id ?? ""],
                        E = P ? t.productDetailsMap[P] : null,
                        I = (0, p.hC)("subscriptions_management_use_active_price"),
                        M = (0, g.Gi)(e.charge_interval, I ? e.prices : E?.prices),
                        T = M ? (0, g.d3)(M, v, e) : "";
                    let B = null,
                        R = "";
                    if (n && c) {
                        const e = (0, g.Gi)(l, n.prices),
                            t = (0, Z.x)({ amount: (0, g.aU)(e, v), currencyCode: e?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
                        "Year" === l ? (B = G({ price: t })) : "Month" === l && (B = A({ price: t })), (R = k.St[c]);
                    }
                    const z = O(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))),
                        D = a.useMemo(() => {
                            let e, t;
                            switch (h) {
                                case "downgrade":
                                    (e = j), (t = V({ nextBillingDate: z, newTierName: R }));
                                    break;
                                case "upgrade":
                                    (e = X), (t = q({ newTierName: R }));
                                    break;
                                case "active":
                                    (e = Q), (t = "Year" === l ? J : K);
                                    break;
                                default:
                                    return null;
                            }
                            return a.createElement(i.Z, { style: re.callout }, a.createElement(i.Z, { style: re.column }, a.createElement(_.ZP, { color: "text", weight: "medium" }, e), a.createElement(_.ZP, { color: "text" }, t)));
                        }, [h, z, R, l]),
                        L = a.createElement(i.Z, { style: re.container }, a.createElement(i.Z, { style: re.tierSwitchConfirmBody }, T ? a.createElement(i.Z, { style: re.tierSwitchPlanContent, testID: "current-plan" }, a.createElement(_.ZP, { color: "text", style: re.marginBottom, weight: "bold" }, N), a.createElement(_.ZP, { color: "text", style: re.marginBottom }, y), a.createElement(_.ZP, { color: "text" }, T)) : null, B ? a.createElement(i.Z, { style: re.tierSwitchPlanContent, testID: "new-plan" }, a.createElement(_.ZP, { color: "text", style: re.marginBottom, weight: "bold" }, U), a.createElement(_.ZP, { color: "text", style: re.marginBottom }, R), a.createElement(_.ZP, { color: "text" }, B)) : null), D),
                        $ = a.useCallback(() => s(!1), [s]),
                        F = "downgrade" === h ? H({ date: z }) : Y;
                    return a.createElement(C.Z, { actionLabel: ee, footer: a.createElement(W, { chargeInterval: l, tierSwitchType: h }), graphicDisplayMode: "none", headline: F, onAction: w, onClose: $, subtext: L });
                },
                re = s.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 }, tierSwitchPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, flexGrow: 1, maxWidth: "50%" }, tierSwitchConfirmBody: { marginTop: e.spaces.space8, flexDirection: "row", display: "flex", gap: e.spaces.space16 }, container: { width: "100%", gap: e.spaces.space16 }, callout: { padding: e.spaces.space8, gap: e.spaces.space8, borderRadius: e.borderRadii.small, backgroundColor: e.colors.blue50, flexDirection: "row" }, column: { gap: e.spaces.space8, maxWidth: "100%" } })),
                ae = u().aaa798fc,
                ie = u().c906ad94,
                oe = u().db5c77e0,
                ne = u().h77ef73e,
                le = u().d723d44a,
                ce = ({ activeSubscription: e, buttonStyles: t, isMobile: r, premiumPriceConfig: i, price: l, productPrices: c, selectedInterval: s, selectedProduct: d, setShowSheet: u, setTierSwitchError: p, showSheet: g, stripeProductId: h, switchTier: b, switchTierFetchStatus: f }) => {
                    const y = (0, S.Z)(),
                        v = (0, o.useHistory)(),
                        [_, C] = a.useState(!1),
                        Z = a.useMemo(() => (0, P.yv)({ activeSubscription: e, tier: d }), [d, e]),
                        [k, x] = a.useMemo(() => {
                            let t = !1,
                                a = null;
                            if ("upgrade" === Z) a = ae;
                            else if ("downgrade" === Z) a = ie;
                            else {
                                if ("active" !== Z) return [null, null];
                                {
                                    const i = e.charge_interval;
                                    i !== s || (!g && r) ? ("Month" === i ? (a = le) : "Year" === i && (a = ne)) : ((a = oe), (t = !0));
                                }
                            }
                            return [a, t];
                        }, [e, r, s, Z, g]),
                        I = a.useCallback(() => {
                            C(!0);
                        }, [C]),
                        M = a.useCallback(() => {
                            y.scribe({ action: "click", component: h, element: "starting_at", data: { referring_page: (0, m.G3)(v.location) } }), u(!0);
                        }, [y, v.location, h, u]);
                    return a.createElement(a.Fragment, null, _ ? a.createElement(te, { activeSubscription: e, premiumPriceConfig: i, price: l, productPrices: c, selectedInterval: s, selectedProduct: d, setShowTierSwitchConfirm: C, setTierSwitchError: p, switchTier: b, tierSwitchType: Z }) : null, a.createElement(n.ZP, { disabled: x || f === E.Z.LOADING, onPress: r && !g ? M : I, style: t, testID: w, type: "primaryFilled" }, k));
                },
                se = u().a73d39fb,
                de = u().e4a6e006,
                ue = u().i61a221c,
                pe = u().bd40d5b5,
                me = u().i36a0b6e,
                ge = s.default.create((e) => ({ errorCallout: { marginBottom: e.spaces.space16 }, positionSticky: { position: "sticky" }, inlineCallout: { width: "75%" }, footerWrapper: { alignItems: "center", justifyContent: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space16 }, width75Percent: { width: "75%" }, fullWidth: { width: "100%" }, button: { cursor: "pointer", alignItems: "center" }, tierSwitchCallout: { marginTop: e.spaces.space8 } })),
                he = a.memo(
                    f((e) => {
                        const { activeSubscription: t, analytics: r, buttonStyle: s, buttonType: d, checkoutUrlFetchStatus: u, disabledText: h, disclaimer: b, fetchSubscriptionProductCheckoutUrl: f, isMobile: w, isTierSwitching: P, onClick: E, premiumPriceConfig: S, productPrices: _, selectedInterval: C, selectedProduct: Z, stripeProductId: k, stripeProductIdUnhashed: x, style: I, supportedReferringPage: M, switchTier: T, switchTierFetchStatus: B, title: R } = e,
                            z = (0, p.hC)("responsive_web_twitter_blue_subscriptions_disabled"),
                            D = (0, p.hC)("subscriptions_marketing_page_free_trial_enabled"),
                            L = (0, p.hC)("subscriptions_marketing_page_discounts_enabled"),
                            $ = (0, o.useHistory)(),
                            [W, F] = a.useState(!1),
                            [O, A] = a.useState(!1),
                            G = a.useCallback((e) => {
                                const t = e.query?.redirect_after_success;
                                if (t && "string" == typeof t && m.ZP.isXOrXaiUrl(decodeURIComponent(t))) return t;
                            }, []),
                            Y = a.useCallback(() => {
                                const e = G($.location),
                                    t = (0, m.G3)($.location),
                                    r = {};
                                Z && (r.selectedProduct = Z), C && (r.selectedInterval = C), t && (r.referring_page = t), e && (r.redirectAfterSuccess = e);
                                const a = new URLSearchParams(r).toString();
                                return a ? `${y._r}?${a}` : y._r;
                            }, [Z, $.location, C, G]),
                            H = h || me,
                            N = a.useMemo(() => "failure" === $.location?.query?.flow_status, [$]),
                            U = a.useCallback(() => {
                                $.push({ pathname: "/i/flow/subscription_eligibility_check", query: { return_path: y.iG, referring_page: M } });
                            }, [$, M]),
                            j = (0, g.Gi)(C, _?.prices),
                            V = j ? (0, g.Mk)(j) : null,
                            X = j ? (0, g.fS)(j, L, P ?? !1) : null,
                            q = a.useCallback(() => {
                                const e = j?.external_price_id,
                                    t = V?.program_id,
                                    r = X?.program_id;
                                if (e) {
                                    const a = [];
                                    return t && a.push({ program_id: t }), r && a.push({ program_id: r }), f({ id: k, externalProductId: x, successUrl: Y(), cancelUrl: M ? `${y.gV}?referring_page=${M}` : y.gV, externalPriceId: e, promotion_data: a.length > 0 ? a : void 0 });
                                }
                            }, [f, k, x, M, Y, j, V, X]),
                            Q = a.useCallback((e) => ((window.location.href = e), null), []),
                            J = a.useCallback(() => {
                                const e = (0, m.G3)($.location);
                                r.scribe({ action: "click", element: "subscribe", component: k, data: { referring_page: e, referer: e } }),
                                    N
                                        ? U()
                                        : (q()
                                              ?.then((e) => {
                                                  e && Q(e);
                                              })
                                              .catch(() => {
                                                  U();
                                              }),
                                          E && E());
                            }, [q, r, $.location, E, U, N, k, Q]),
                            K = a.useMemo(() => [I, w ? null : ge.positionSticky], [w, I]),
                            ee = a.useMemo(() => [ge.footerWrapper, I], [I]),
                            te = a.useMemo(() => [ge.button, w && !W ? ge.width75Percent : ge.fullWidth, s], [s, w, W]),
                            re = a.useMemo(() => (V && D ? se({ numberOfDays: V.metadata.free_trial_days }) : ue), [V, D]),
                            ae = a.useMemo(() => {
                                const e = a.createElement(n.ZP, { "aria-label": R ? pe({ title: R }) : re, disabled: !_ || "loading" === u || N, onPress: J, style: te, testID: v, type: d || "primaryFilled" }, "loading" === u ? a.createElement(l.Z, { color: "brandFilled" === d ? "white" : void 0, size: "small" }) : re),
                                    r = "failed" === u || "failed" === B || O ? a.createElement(c.Z.Danger, { style: ge.errorCallout, text: de }) : null;
                                return a.createElement(i.Z, { style: K }, r, P && t ? a.createElement(ce, { activeSubscription: t, buttonStyles: te, isMobile: w, premiumPriceConfig: S, price: j, productPrices: _, selectedInterval: C, selectedProduct: Z, setShowSheet: F, setTierSwitchError: A, showSheet: W, stripeProductId: k, switchTier: T, switchTierFetchStatus: B }) : e, b);
                            }, [R, _, O, u, N, J, K, te, B, b, P, d, re, t, w, C, W, k, S, Z, T, j]),
                            ie = a.useCallback(() => (z ? a.createElement(i.Z, { style: ee }, a.createElement(i.Z, { style: ge.inlineCallout }, a.createElement(c.Z.Custom, { text: H }))) : a.createElement(i.Z, { style: K, testID: "container" }, ae)), [z, K, ae, ee, H]);
                        return a.createElement(i.Z, null, ie());
                    }),
                );
        },
        188142: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                i = r(202784),
                o = r(154003),
                n = r(332920),
                l = r.n(n),
                c = r(837020),
                s = r(4452);
            const d = l().ia5e7488,
                u = ({ show: e, style: t, type: r, variant: n }) => {
                    if (!e) return null;
                    const l = "darkMode" === n ? { backgroundColor: "transparent", borderColor: "transparent", color: "alwaysDarkGray700" } : { type: r || "primaryText" };
                    return i.createElement(
                        o.ZP,
                        (0, a.Z)({ "aria-label": d }, l, {
                            icon: i.createElement(c.default, null),
                            onClick: () => {
                                (0, s.jW)("dismiss");
                            },
                            size: "large",
                            style: t,
                            testID: "dismiss-button",
                        }),
                    );
                };
        },
        137429: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(807896),
                i = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(392237),
                c = r(332920),
                s = r.n(c),
                d = r(930925),
                u = r(25591);
            const p = s().i2c32253,
                m = s().ga482a88,
                g = s().hc64d5b0,
                h = s().i3e90e20,
                b = s().d9e9ce26,
                f = ({ catalogItems: e, catalogItemsForProduct: t, content: r }) => {
                    const l = { buttonFontSize: "body", buttonSize: "large", styleOverrides: { marginBottom: "space8", disclaimerFontColor: "gray700", disclaimerFontSize: "subtext2" }, variant: "leftAligned" },
                        c = t.find((e) => "Month" === e.chargeInterval),
                        s = t.find((e) => "Year" === e.chargeInterval),
                        f = c?.localisedMonthlyPrice,
                        v = s?.localisedMonthlyPrice,
                        w = `${p({ price: v || h })} · ${m}`,
                        P = `${p({ price: f || h })} · ${g}`,
                        E = i.createElement(o.Z, { style: y.pill }, i.createElement(n.ZP, { style: y.pillText }, (0, d.$)(e)));
                    return i.createElement(o.Z, null, i.createElement(n.ZP, { style: y.subscribeLabel }, b), i.createElement(u.Z, (0, a.Z)({}, l, { buttonFontSize: "body", buttonSize: "large", customLabel: w, disclaimerRef: null, price: s, savePill: E })), i.createElement(u.Z, (0, a.Z)({}, l, { customLabel: P, disclaimerRef: r.apiContent?.subscribe_button, price: c })));
                },
                y = l.default.create((e) => ({ pill: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, position: "absolute", top: "50%", end: "3%", transform: [{ translateY: "-50%" }], zIndex: 1 }, pillText: { color: e.colors.whiteOnColor, fontSize: e.fontSizes.subtext3, fontWeight: "normal" }, subscribeLabel: { marginBottom: e.spaces.space12, marginTop: e.spaces.space4, fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium } }));
        },
        287510: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(325686),
                o = r(392237);
            const n = ({ children: e, footerRef: t, variant: r }) => {
                    const n = (e, t, r) => (t ? ({ condensed: { ...(r ? { paddingTop: e.spaces.space12, paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 } : { height: 0, top: 0, borderTopWidth: 1, borderTopColor: e.colors.gray50, borderTopStyle: "solid" }) } }[t] ?? void 0) : void 0);
                    return a.createElement(i.Z, { ref: t, style: [l.root, n(o.default.theme, r, !0)] }, a.createElement(i.Z, { style: [l.gradient, n(o.default.theme, r)] }), e);
                },
                l = o.default.create((e) => ({ root: { bottom: 0, position: "fixed", width: "100%", backgroundColor: e.colors.navigationBackground, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingTop: e.spaces.space16, paddingBottom: o.default.supports("top: env(safe-area-inset-bottom)") ? "env(safe-area-inset-bottom)" : 0 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" } }));
        },
        361780: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                i = r(325686),
                o = r(392237),
                n = r(952793);
            const l = ({ children: e, headerRef: t, style: r, withFade: o = !0 }) => {
                    const l = (0, n.hC)("ios_premium_paywall_preloaded_webview_pagesheet_modal");
                    return a.createElement(i.Z, { ref: t, style: [c.header, r, l ? c.headerFullScreen : c.headerHalfSheet] }, o ? a.createElement(i.Z, { style: c.gradient }) : null, e);
                },
                c = o.default.create((e) => ({ header: { flexDirection: "row", position: "fixed", zIndex: 1, backgroundColor: e.colors.cellBackground, width: "100%", paddingBottom: e.spaces.space8 }, headerHalfSheet: { paddingTop: o.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space8} + env(safe-area-inset-top))` : e.spaces.space8 }, headerFullScreen: { paddingTop: o.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space20} + env(safe-area-inset-top))` : e.spaces.space20 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.navigationBackground} 0%, ${e.colors.transparent} 100%)`, width: "100%", bottom: -28, start: 0 } }));
        },
        627706: (e, t, r) => {
            r.d(t, { Z: () => S });
            var a = r(202784),
                i = r(815858),
                o = r(154003),
                n = r(392237),
                l = r(332920),
                c = r.n(l),
                s = r(325686),
                d = r(731708),
                u = r(138099),
                p = r(562041),
                m = r(789769),
                g = r(930925),
                h = r(25591);
            const b = c().bb4998fb,
                f = c().a9f397f3,
                y = ({ catalogItems: e, defaultChargeInterval: t, disclaimerRef: r, productTitle: i, selectedProduct: o, setPurchaseSheetOpen: n, stripePriceConfig: l, variant: c, withStripePurchaseButton: y }) => {
                    const [w, P] = a.useState(t),
                        { ref: E } = (0, p.G)(() => n(!1)),
                        S = e.find((e) => e.chargeInterval === w),
                        _ = S?.introductoryOffer,
                        C = a.useMemo(() => a.createElement(h.Z, { disclaimerRef: r, price: S, selectedInterval: w, selectedProduct: o, stripePriceConfig: l, variant: c, withStripePurchaseButton: y }), [S, r, c, o, w, l, y]),
                        Z = a.useMemo(() => (S?.introductoryOffer ? (0, m.u)({ percentage: S.introductoryOffer.percentageSaved, tier: i, plan: m.Z[w] }) : i), [i, S, w]),
                        k = a.useMemo(() => {
                            if (_?.endsAtMs) {
                                const e = new Date(parseInt(_.endsAtMs, 10)),
                                    t = f(e);
                                return a.createElement(d.ZP, { color: "gray700", style: v.subtitle }, b({ date: t }));
                            }
                            return null;
                        }, [_]);
                    if (!r) return null;
                    const x = a.createElement(s.Z, { style: v.dragHandleOuter }, a.createElement(s.Z, { style: v.dragHandle }));
                    return a.createElement(u.Z, { enableMaskForDismiss: !0, onMaskClick: () => n(!1), style: v.sheetOuter, testID: `purchase_sheet_${i}`, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, x, a.createElement(s.Z, { ref: E, style: v.sheet }, a.createElement(d.ZP, { size: "title4", weight: "bold" }, Z), k, a.createElement(g.Z, { catalogItems: e, selectedInterval: w, setSelectedInterval: P, variant: "default" }), C));
                },
                v = n.default.create((e) => ({ sheetOuter: { backgroundColor: e.colors.gray0 }, sheet: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space28 }, dragHandle: { width: 36, height: 5, borderRadius: 10, backgroundColor: e.colors.gray100 }, dragHandleOuter: { top: 10, position: "absolute", alignItems: "center", width: "100%" }, subtitle: { marginTop: e.spaces.space4 } })),
                w = c().a69fd369,
                P = c().e563a5d1,
                E = c().a0dc6e4c,
                S = ({ catalogItemsForProduct: e, content: { apiContent: t }, label: r, selectedProduct: n, stripePriceConfig: l, variant: c, withStripePurchaseButton: s }) => {
                    const [d, u] = a.useState(!1),
                        p = e.find((e) => "Month" === e.chargeInterval),
                        m = t?.products?.find((e) => e.product_category === n),
                        g = a.useMemo(() => {
                            if (r) return r;
                            const t = e.find((e) => !!e?.introductoryOffer);
                            return t ? P({ percentage: t.introductoryOffer?.percentageSaved }) : p ? w({ price: p.localisedMonthlyPrice || "undefined" }) : E;
                        }, [e, p, r]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        m?.title && d ? a.createElement(i.Z, { animateMount: !0, duration: "normal", show: d, type: "slide" }, a.createElement(y, { catalogItems: e, defaultChargeInterval: "Year", disclaimerRef: t?.subscribe_button, productTitle: m?.title, selectedProduct: n, setPurchaseSheetOpen: u, stripePriceConfig: l, variant: c, withStripePurchaseButton: s })) : null,
                        a.createElement(
                            o.ZP,
                            {
                                allowTextWrap: !0,
                                color: "gold" === c ? "alwaysBlack" : "blue" === c ? "whiteOnColor" : void 0,
                                disabled: !p,
                                onClick: () => {
                                    u(!0);
                                },
                                size: c ? "xLarge" : void 0,
                                style: "gold" === c ? _.goldButton : "blue" === c ? _.blueButton : null,
                                type: c ? void 0 : "primaryFilled",
                            },
                            g,
                        ),
                    );
                },
                _ = n.default.create((e) => ({ goldButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.gold50} 0.23%, \n      ${e.colors.gold0} 32.73%, \n      ${e.colors.gold50} 50.37%,\n       ${e.colors.gold100} 98.27%)`, border: "none" }, blueButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.blue500} 0.23%, \n      ${e.colors.blue600} 32.73%, \n      ${e.colors.blue500} 50.37%,\n       ${e.colors.blue500} 98.27%)` } }));
        },
        930925: (e, t, r) => {
            r.d(t, { Z: () => D, $: () => B });
            var a = r(807896),
                i = r(202784),
                o = r(325686),
                n = r(896632),
                l = r(392237),
                c = r(332920),
                s = r.n(c),
                d = r(352924),
                u = r(731708),
                p = r(868634),
                m = r(952428),
                g = r(516951);
            const h = (e) => (e ? ({ default: P.blueBorder, horizontal_blue: P.blueBorder, horizontal_gold: P.goldBorder, special: P.whiteBorder, horizontal_green: P.whiteBorder }[e] ?? void 0) : void 0),
                b = (e) => (e ? ({ default: "headline2", horizontal_blue: "headline2", horizontal_gold: "headline2", horizontal_green: "headline2", special: "headline1" }[e] ?? void 0) : void 0),
                f = (e) => (e ? ({ default: "subtext2", horizontal_blue: "subtext2", horizontal_gold: "subtext2", horizontal_green: "subtext2", special: "body" }[e] ?? void 0) : void 0),
                y = (e) => (e ? ({ default: P.blueBackground, horizontal_gold: P.goldBackground, horizontal_blue: P.blueBackground, horizontal_green: P.greenBackground, special: P.blueBackground }[e] ?? void 0) : void 0),
                v = (e) => (e ? ({ default: "whiteOnColor", horizontal_gold: "alwaysBlack", horizontal_blue: "whiteOnColor", horizontal_green: "buttonWhite", special: "whiteOnColor" }[e] ?? "whiteOnColor") : "whiteOnColor"),
                w = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, label: n, name: l, onChange: c, price: s, subtext: w, title: S, variant: _ = "default" }) => {
                    const C = d.b(),
                        Z = d.b(),
                        k = d.b();
                    let x, I, M, T;
                    switch (_) {
                        case "horizontal_gold":
                        case "horizontal_blue":
                        case "horizontal_green":
                        case "special":
                            (M = P.horizontalNonLast), (I = [P.horizontalChecked, h(_)]), (T = P.horizontal), (x = i.createElement(i.Fragment, null, n ? i.createElement(o.Z, { style: P.horizontalLabelContainer }, i.createElement(o.Z, { style: [P.horizontalLabel, y(_)] }, i.createElement(u.ZP, { color: v(_), size: "subtext3", weight: "bold" }, n))) : null, i.createElement(o.Z, { style: P.horizontalInner }, i.createElement(u.ZP, { size: f(_) }, S), i.createElement(u.ZP, { size: b(_), style: P.horizontalPrice, weight: "bold" }, s))));
                            break;
                        default:
                            (M = P.defaultNonLast), (I = P.defaultChecked), (T = P.default), (x = i.createElement(i.Fragment, null, i.createElement(o.Z, { style: P.row }, i.createElement(o.Z, { style: [P.row, P.titleRow] }, i.createElement(u.ZP, { size: "body" }, S), n ? i.createElement(p.ZP, { style: P.label, type: "subscriptionSaving" }, n) : null), i.createElement(u.ZP, { size: "headline2", style: P.price }, s)), i.createElement(u.ZP, { color: "gray700", size: "subtext1", style: P.subtext }, w)));
                    }
                    return i.createElement(m.Z, { style: [P.common, T, a ? I : null, t !== r ? M : null], testID: `interval_radio_${t || ""}` }, x, i.createElement("input", { "aria-describedby": `${Z} ${k}`, "aria-label": e, "aria-labelledby": C, "aria-posinset": t, "aria-setsize": r, checked: a, name: l, onChange: a ? g.Z : c, style: E, type: "radio" }));
                },
                P = l.default.create((e) => ({ common: { borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.medium }, default: { backgroundColor: e.colors.gray50, borderColor: e.colors.transparent, padding: e.spaces.space12 }, defaultNonLast: { marginBottom: e.spaces.space12 }, defaultChecked: { borderWidth: e.borderWidths.medium, borderColor: e.colors.primary }, horizontal: { flexGrow: 1, borderColor: e.colors.gray200, maxWidth: "50%", padding: e.spaces.space20 }, horizontalNonLast: { marginEnd: e.spaces.space12 }, horizontalChecked: { borderWidth: e.borderWidths.medium }, goldBorder: { borderColor: e.colors.gold100 }, blueBorder: { borderColor: e.colors.blue500 }, whiteBorder: { borderColor: e.colors.text }, horizontalInner: { alignItems: "center" }, horizontalPrice: { marginTop: e.spaces.space8 }, horizontalLabel: { fontWeight: "normal", borderRadius: 9999, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, goldBackground: { backgroundImage: `\n    linear-gradient(90.38deg, \n    ${e.colors.gold50} 0.23%, \n    ${e.colors.gold0} 32.73%, \n    ${e.colors.gold50} 50.37%,\n     ${e.colors.gold100} 98.27%)` }, blueBackground: { backgroundColor: e.colors.blue500 }, greenBackground: { backgroundColor: e.colors.text }, horizontalLabelContainer: { position: "absolute", top: -10, width: "100%", alignItems: "center", start: 0 }, row: { flexDirection: "row" }, titleRow: { alignItems: "center", flexGrow: 1 }, price: { alignSelf: "flex-end" }, label: { marginStart: e.spaces.space8, fontWeight: "normal" }, subtext: { marginTop: e.spaces.space8 } })),
                E = { ...l.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                S = s().ga482a88,
                _ = s().hc64d5b0,
                C = s().ce7c21de,
                Z = s().a3a4e8f8,
                k = s().b47d123d,
                x = s().i2c32253,
                I = s().de7db957,
                M = s().d8982437,
                T = (e, t) => {
                    switch (t) {
                        case "Year":
                            return "special" === e ? C : S;
                        case "Month":
                            return "special" === e ? Z : _;
                        default:
                            return "Unsupported interval";
                    }
                },
                B = (e) => {
                    const t = e.find((e) => "Year" === e.chargeInterval),
                        r = e.find((e) => "Month" === e.chargeInterval);
                    if (!t?.rawPrice || !r?.rawPrice) return null;
                    if (t.introductoryOffer) return k({ percentage: t.introductoryOffer.percentageSaved });
                    const a = 12 * r.rawPrice,
                        i = Math.floor(((t.rawPrice - a) / a) * -100);
                    return k({ percentage: i });
                },
                R = (e, t) => {
                    switch (e) {
                        case "Year":
                            return I({ price: t });
                        case "Month":
                            return M({ price: t });
                        default:
                            return "Unsupported interval";
                    }
                },
                z = (e, t) => (e.chargeInterval === t.chargeInterval ? 0 : "Year" === e.chargeInterval ? -1 : "Year" === t.chargeInterval ? 1 : 0),
                D = ({ catalogItems: e, selectedInterval: t, setSelectedInterval: r, variant: l }) => {
                    const c = i.useCallback(
                            (e, t) => {
                                r(t);
                            },
                            [r],
                        ),
                        s = i.useMemo(
                            () =>
                                e.sort(z).map((t, r) => {
                                    const a = t?.introductoryOffer?.localisedMonthlyPrice || t.localisedMonthlyPrice,
                                        i = t?.introductoryOffer?.localisedYearlyPrice || t.localisedYearlyPrice;
                                    return { value: t.chargeInterval, title: T(l, t.chargeInterval), subtext: R(t.chargeInterval, i), price: "special" === l ? ("Month" === t.chargeInterval ? a : i) : x({ price: a }), label: "Year" === t.chargeInterval && "special" !== l ? B(e) : null };
                                }),
                            [e, l],
                        ),
                        d = i.useCallback((e) => i.createElement(w, (0, a.Z)({ key: e.value, variant: l }, e)), [l]);
                    return i.createElement(o.Z, { style: L.selectionGroup }, i.createElement(n.Z, { horizontal: ["horizontal_gold", "horizontal_blue", "special", "horizontal_green"].includes(l), name: "interval-select", onChange: c, options: s, renderSelector: d, value: t }));
                },
                L = l.default.create((e) => ({ selectionGroup: { marginVertical: e.spaces.space16, gap: "40px" } }));
        },
        25591: (e, t, r) => {
            r.d(t, { Z: () => E });
            var a = r(202784),
                i = r(731708),
                o = r(392237),
                n = r(332920),
                l = r.n(n),
                c = r(4452),
                s = r(137070),
                d = r(731862),
                u = r(154003),
                p = r(685731),
                m = r(725405);
            const g = l().afd61c76,
                h = ({ interval: e, stripePriceConfig: t, tier: r }) => {
                    const i = (0, m.Z)();
                    a.useEffect(() => {
                        i.scribe({ element: "stripe-purchase-button", action: "impression" });
                    }, [i]);
                    const o = (0, s.Z)()[r].unhashed,
                        n = (0, p.Gi)(e, t?.productDetailsMap[r]?.prices)?.external_price_id,
                        l = a.useCallback(() => {
                            n && (i.scribe({ element: "stripe-purchase-button", action: "click" }), (0, c.jW)("make-purchase-with-stripe", { interval: e, tier: r, stripeProductId: o, stripePriceId: n }));
                        }, [e, r, n, o, i]);
                    return n ? a.createElement(u.ZP, { color: "whiteOnColor", onClick: l, size: "xLarge", style: b.button }, g) : null;
                },
                b = o.default.create((e) => ({ button: { backgroundImage: `\n  linear-gradient(90.38deg, \n  ${e.colors.blue500} 0.23%, \n  ${e.colors.blue600} 32.73%, \n  ${e.colors.blue500} 50.37%,\n  ${e.colors.blue500} 98.27%)\n` } })),
                f = l().aa0d60aa,
                y = l().f0ad5cc8,
                v = l().a0dc6e4c,
                w = l().jd8b2e66,
                P = l().ca784c0c,
                E = ({ buttonFontSize: e, buttonSize: t, customLabel: r, disclaimerRef: o, price: n, savePill: u, selectedInterval: p, selectedProduct: m, stripePriceConfig: g, styleOverrides: b, variant: E, withAnnualPriceMonthly: _, withStripePurchaseButton: C }) => {
                    const Z = (0, s.Z)(),
                        { productAppStoreID: k } = n || {},
                        x = a.useMemo(() => {
                            if (k || "apple" !== n?.paymentPlatform) {
                                if (n?.introductoryOffer) {
                                    const e = _ ? n?.localisedMonthlyPrice : n?.localisedYearlyPrice,
                                        t = _ ? n?.introductoryOffer?.localisedMonthlyPrice : n?.introductoryOffer?.localisedYearlyPrice;
                                    return a.createElement(l().I18NFormatMessage, { $i18n: "db11f87d", newPrice: t || "", interval: _ ? f : y }, a.createElement(i.ZP, { style: S.strike }, l().aa5df29f({ oldPrice: e || "" })));
                                }
                                return r || (C ? P : w);
                            }
                            return v;
                        }, [_, n, r, C, k]),
                        I = a.useMemo(() => {
                            if (_) {
                                const e = n?.localisedYearlyPrice,
                                    t = n?.introductoryOffer?.localisedYearlyPrice;
                                return a.createElement(l().I18NFormatMessage, { $i18n: "e4219e13", newPrice: t || "", interval: y }, a.createElement(i.ZP, { style: S.strike }, l().g1c4f7a1({ oldPrice: e || "" })));
                            }
                            return null;
                        }, [_, n]),
                        M = a.useCallback(() => {
                            "apple" === n?.paymentPlatform && k ? (0, c.jW)("make-purchase", { productAppStoreID: k }) : "stripe" === n?.paymentPlatform && p && m && n.productAppStoreID && (0, c.jW)("make-purchase-with-stripe", { interval: p, tier: m, stripeProductId: Z[m].unhashed, stripePriceId: n.productAppStoreID });
                        }, [n, k, p, m, Z]),
                        T = a.useMemo(() => (C && m && p ? a.createElement(h, { interval: p, stripePriceConfig: g, tier: m }) : null), [p, m, C, g]),
                        B = a.useMemo(() => "apple" === n?.paymentPlatform && !k, [n, k]);
                    return a.createElement(d.Z, { buttonFontSize: e, buttonSize: t, disabled: B, disclaimerRef: o, label: x, loading: !1, onClick: M, savePill: u, stripeButton: T, styleOverrides: b, subtext: I || void 0, variant: E });
                },
                S = o.default.create((e) => ({ strike: { textDecorationLine: "line-through" }, stripePurchaseButton: { borderRadius: 16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-b8334df9.5c3d37ba.js.map
