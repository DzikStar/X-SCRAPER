"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-b8334df9"],
    {
        684841: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(202784),
                o = r(325686),
                i = r(731708),
                n = r(750410),
                l = r(392237),
                c = r(883229),
                s = r(943914),
                d = r(337394),
                u = r(685731),
                p = r(137070),
                m = r(690559),
                g = r(393866),
                h = r(754962);
            const b = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: n, productName: l, selectedInterval: c, selectedProduct: s }) => {
                    const b = (0, p.Z)(),
                        f = n.productDetailsMap[s],
                        y = b[s].hashed,
                        v = b[s].unhashed,
                        E = f ? (0, u.Gi)(c, f) : null,
                        S = E ? (0, u.Mk)(E) : null,
                        _ = d.v5.premium[e?.product?.rest_id ?? ""],
                        P = b[_]?.hashed,
                        C = f ? a.createElement(h.ZP, { activeStripeProductId: P, activeSubscription: void 0, buttonStyle: w.checkoutButton, buttonType: "brandFilled", isTierSwitching: !1, premiumPriceConfig: n, productPrices: f, selectedInterval: c, selectedProduct: s, stripeProductId: y, stripeProductIdUnhashed: v }) : null;
                    return t ? a.createElement(o.Z, { style: w.footer, testID: "premium_signup_footer" }, a.createElement(o.Z, { style: [w.column, w.marginEnd] }, a.createElement(o.Z, { style: w.row }, a.createElement(i.ZP, { size: "headline1", weight: "medium" }, l)), a.createElement(g.Z, { activeSubscription: e, isTierSwitching: r, productCategory: s, productPrices: f, selectedInterval: c, shouldRemoveExtraStep: !0, withAnnualPriceMonthly: !1, withSavingLabel: !1 })), a.createElement(o.Z, { style: w.column }, C, a.createElement(m.Z, { disclaimerRef: t, freeTrialInfo: S }))) : null;
                },
                f = { context: "PremiumContentFooter" },
                y = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: (e) => a.createElement(o.Z, { style: w.footer }, a.createElement(n.Z, { onRequestRetry: e })) }), []);
                    return a.createElement(c.N, { errorConfig: f, fallback: t, key: e.productName }, a.createElement(s.B, null, a.createElement(b, e)));
                },
                v = a.memo(y),
                w = l.default.create((e) => ({ footer: { position: "fixed", bottom: 0, minHeight: 100, backgroundColor: e.colors.navigationBackground95, width: "100%", padding: e.spaces.space16, flexDirection: "row", justifyContent: "center", borderStyle: "solid", borderTopWidth: e.spaces.space1, borderEndWidth: 0, borderBottomWidth: 0, borderStartWidth: 0, borderColor: e.colors.gray300 }, column: { flexDirection: "column", maxWidth: 475, minWidth: 225 }, checkoutButton: { marginBottom: e.spaces.space12 }, marginEnd: { marginEnd: e.spaces.space16 }, row: { flexDirection: "row" } }));
        },
        393866: (e, t, r) => {
            r.d(t, { Z: () => S });
            var a = r(202784),
                o = r(325686),
                i = r(40610),
                n = r(868634),
                l = r(731708),
                c = r(392237),
                s = r(674132),
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
                E = ({ activeSubscription: e, isTierSwitching: t, productCategory: r, productPrices: c, selectedInterval: s, shouldRemoveExtraStep: d, withAnnualPriceMonthly: E, withSavingLabel: S }) => {
                    const P = (0, u.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        C = (0, u.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        Z = (0, u.hC)("subscriptions_marketing_page_discounts_enabled"),
                        k = "active" === (0, m.yv)({ activeSubscription: e, tier: r }) && s === e?.charge_interval,
                        x = c ? (0, g.Gi)(s, c) : null,
                        I = x ? (0, g.Mk)(x) : null,
                        M = I && C && !t,
                        T = k ? (0, m.gS)(e, "Discount", { status: "active" }) : null,
                        B = x ? (0, g.fS)(x, Z, t) : null,
                        z = (0, h.T)({ price: x, includeTax: P, annualPriceMonthly: !1 }),
                        R = (0, h.T)({ price: x, includeTax: P, annualPriceMonthly: !0 }),
                        D = (0, b.f)({ isFreeTrial: !!M, selectedInterval: s, formattedPrice: z, discountInfo: B, activeDiscountInfo: T, price: x, shouldRemoveExtraStep: d, withAnnualPriceMonthly: E, includeTax: P, isTierSwitching: t });
                    if (!x) return a.createElement(i.Z.Danger, { text: f });
                    const L = c ? (0, m.pB)(c) : null,
                        W = a.createElement(n.ZP, { style: _.saveLabel, type: "subscriptionSaving" }, L),
                        $ = M ? a.createElement(l.ZP, { style: _.intervalLabel }, w({ numberOfDays: I?.metadata.free_trial_days })) : a.createElement(l.ZP, { size: "body", style: _.intervalLabel }, "Month" === s || E ? y : v),
                        F = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: _.priceLabel, weight: "bold" }, "Year" === s && E ? R : z), $),
                        O = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: _.priceLabel, weight: "bold" }, (0, p.x)({ amount: 0, currencyCode: x?.currency_code.toUpperCase(), removeTrailingZeros: !0 })), $),
                        G = a.createElement(a.Fragment, null, a.createElement(l.ZP, { style: [_.priceLabel, _.strikethrough] }, "Year" === s && E ? R : z), a.createElement(l.ZP, { style: [_.priceLabel, _.discountPriceLabel], weight: "bold" }, (0, h.T)({ price: x, includeTax: P, percentOff: B?.metadata.percent_off || T?.promotion_metadata?.percent_off, annualPriceMonthly: E && "Year" === s })), $);
                    let Y = F;
                    return M ? (Y = O) : (B || T) && (Y = G), a.createElement(o.Z, null, a.createElement(o.Z, { style: _.priceRow }, Y), a.createElement(o.Z, { style: _.billingRow }, a.createElement(l.ZP, { color: "gray900" }, D), "Year" !== s || !S || B || T ? null : W));
                },
                S = a.memo(E),
                _ = c.default.create((e) => ({ priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16, flexWrap: "wrap" }, billingRow: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, discountPriceLabel: { marginStart: e.spaces.space8, color: e.colors.green500 }, intervalLabel: { marginStart: e.spaces.space4 }, saveLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite }, strikethrough: { textDecorationLine: "line-through", fontWeight: "lighter", color: e.colors.gray900 } }));
        },
        778e3: (e, t, r) => {
            r.d(t, { Z: () => me });
            r(74882);
            var a = r(202784),
                o = r(325686),
                i = r(67369),
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
                y = r(674132),
                v = r.n(y),
                w = r(913973),
                E = r(711223),
                S = r(187669),
                _ = r(883229),
                P = r(943914),
                C = r(952793),
                Z = r(337394),
                k = r(548797),
                x = r(685731),
                I = r(725405),
                M = r(498514),
                T = r(512923),
                B = r(137070),
                z = r(393866);
            const R = v().g1be3530,
                D = v().b10b4f1f,
                L = v().a9f397f3,
                W = ({ isTierSwitching: e, price: t }) => {
                    const r = (0, C.hC)("subscriptions_marketing_page_discounts_enabled"),
                        o = (0, C.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        i = (t ? (0, x.Mk)(t) : null) && o && !e,
                        n = t ? (0, x.fS)(t, r, e) : null;
                    if (i) return a.createElement(f.ZP, { style: $.promoLabel, type: "subscriptionPromo" }, R);
                    if (n) {
                        const e = n.ends_at_msec,
                            t = e ? new Date(parseInt(e, 10)) : void 0,
                            r = t ? L(t) : void 0;
                        return a.createElement(f.ZP, { style: $.promoLabel, type: "subscriptionPromo" }, D({ percentOff: n.metadata.percent_off, date: r }));
                    }
                    return null;
                },
                $ = l.default.create((e) => ({ promoLabel: { borderRadius: e.borderRadiiPx.infinite, paddingHorizontal: e.spaces.space8, alignSelf: "center", position: "absolute", top: `-${e.spaces.space16}`, padding: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.green300, width: "70%" } }));
            var F = r(754962),
                O = r(529356),
                G = r(516951),
                Y = r(690559);
            const N = v().b8d0bd19,
                A = ({ activeSubscription: e, checkoutButton: t, disclaimerRef: r, interval: i, isTierSwitching: n, onClose: l, product: c, productCategory: s, productTitle: d, shouldRemoveExtraStep: u }) => {
                    const p = (0, C.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        m = c ? (0, x.Gi)(i, c) : null,
                        g = m ? (0, x.Mk)(m) : null;
                    if (!r || !d) return null;
                    const h = g && p ? N({ productName: d }) : d,
                        b = a.createElement(o.Z, { style: U.body, testID: "purchase-sheet" }, a.createElement(z.Z, { activeSubscription: e, isTierSwitching: n, productCategory: s, productPrices: c, selectedInterval: i, shouldRemoveExtraStep: u, withAnnualPriceMonthly: !1, withSavingLabel: !0 }), t, a.createElement(Y.Z, { disclaimerRef: r, freeTrialInfo: g }));
                    return a.createElement(O.Z, { graphicDisplayMode: "none", headline: h, onAction: G.Z, onClose: l, subtext: b });
                },
                H = a.memo(A),
                U = l.default.create((e) => ({ body: { color: e.colors.text }, priceLabel: { fontSize: 36 * e.scaleMultiplier, lineHeight: 36 * e.scaleMultiplier }, priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: e.spaces.space16 }, billingRow: { marginBottom: e.spaces.space32, flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, intervalLabel: { marginStart: e.spaces.space4 } })),
                j = ({ index: e, numProducts: t }) => {
                    const r = (0, i.Mv)(),
                        n = (0, i.pj)(),
                        l = r ? V.cardSmall : n ? V.cardXLarge : V.cardXXLarge;
                    return a.createElement(o.Z, { style: [V.productCard, l, e !== t && 0 !== t && r ? V.cardMarginBottom : null] });
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
                oe = v().e0d53864,
                ie = ({ activeSubscription: e, disclaimerRef: t, index: r, isSelected: n, isTierSwitching: c, numProducts: s, premiumPriceConfig: d, productContent: y, productPrices: v, selectedInterval: E, shouldRemoveExtraStep: _ }) => {
                    const P = (0, C.hC)("subscriptions_marketing_page_free_trial_enabled"),
                        R = (0, C.hC)("subscriptions_marketing_page_new_grok_content_enabled"),
                        D = (0, I.Z)(),
                        L = (0, i.Mv)(),
                        $ = (0, i.pj)(),
                        [O, G] = a.useState(!1),
                        Y = u()(T.oD, y),
                        N = (0, B.Z)(),
                        A = Y.product_category,
                        U = "active" === (0, k.yv)({ activeSubscription: e, tier: A }),
                        j = N[A].hashed,
                        V = N[A].unhashed,
                        ee = v ? (0, x.Gi)(E, v) : null,
                        ie = ee ? (0, x.Mk)(ee) : null,
                        ne = ie && P && !c;
                    if (
                        ((0, S.q)(() => {
                            ne && A && ie?.program_id && D.scribe({ component: "product_card_promotion", element: `${ie.program_id}`, action: "impression" });
                        }),
                        !A)
                    )
                        return null;
                    const le = a.createElement(
                            o.Z,
                            { style: se.featureList },
                            Y.summary_bucket?.description ? a.createElement(o.Z, { style: se.featureRow }, a.createElement(p.ZP, { weight: "medium" }, Y.summary_bucket.description)) : null,
                            Y.summary_bucket?.features.map((e, t) => {
                                const i = (0, M.U)(e.icon);
                                return a.createElement(o.Z, { key: `product-${r}-summary-feature-${t}`, style: se.featureRow }, a.createElement(i, { style: se.icon }), a.createElement(p.ZP, null, e.title, e.description ? a.createElement(m.Z, { contentStyle: se.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(o.Z, { style: se.infoContainer }, a.createElement(p.ZP, { size: "title4", weight: "medium" }, e.title), a.createElement(p.ZP, { color: "gray700", style: se.infoDescription }, e.description)) }, a.createElement(g.ZP, { "aria-label": K, icon: de, size: "xSmall", style: se.infoButton, type: "primaryText" })) : null));
                            }),
                            R && "BlueVerifiedPlus" === A
                                ? a.createElement(
                                      o.Z,
                                      null,
                                      a.createElement(p.ZP, { style: se.featureRow, weight: "medium" }, te),
                                      [re, ae, oe].map((e, t) => a.createElement(o.Z, { key: `product-${r}-grok-summary-feature-${t}`, style: se.featureRow }, a.createElement(w.default, { style: se.icon }), a.createElement(p.ZP, null, e))),
                                  )
                                : null,
                        ),
                        ce = Z.v5.premium[e?.product?.rest_id ?? ""],
                        ue = N[ce]?.hashed,
                        pe = v ? a.createElement(F.ZP, { activeStripeProductId: ue, activeSubscription: e, buttonStyle: c ? se.tierSwitchButton : se.checkoutButton, isTierSwitching: c, premiumPriceConfig: d, productPrices: v, selectedInterval: E, selectedProduct: A, stripeProductId: j, stripeProductIdUnhashed: V, style: se.checkoutButtonInner }) : null,
                        me = L ? se.cardSmall : $ ? se.cardXLarge : se.cardXXLarge,
                        ge = a.createElement(
                            g.ZP,
                            {
                                onClick: () => {
                                    G(!0), D.scribe({ action: "click", element: "subscribe-intermediate", component: V });
                                },
                                style: se.purchaseConfirmButton,
                                testID: X,
                                type: "primaryFilled",
                            },
                            ne ? J({ numberOfDays: ie?.metadata.free_trial_days }) : Q,
                        ),
                        he = c ? pe : ge,
                        be = h.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: n ? l.default.theme.colors.primary : l.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return a.createElement(a.Fragment, null, O ? a.createElement(H, { activeSubscription: e, checkoutButton: pe, disclaimerRef: t, interval: E, isTierSwitching: c, onClose: () => G(!1), product: v, productCategory: A, productTitle: Y.title, shouldRemoveExtraStep: _ }) : null, a.createElement(o.Z, { style: [se.productCard, me, se.cardBackground, r !== s && 0 !== s && L ? se.cardMarginBottom : null, n && _ ? se.selected : se.unselected], testID: `product-card-${A}` }, ee && ne ? a.createElement(W, { isTierSwitching: c, price: ee }) : null, a.createElement(o.Z, { style: se.productCardInner }, _ ? a.createElement(o.Z, { style: se.radioContainer }, a.createElement(b.Z, { interactiveStyles: be, style: se.radioBackground }, a.createElement(o.Z, { style: [se.circle, n && se.circleActive] }, n ? a.createElement(w.default, { style: se.checkMark }) : null))) : null, a.createElement(o.Z, { style: se.titleRow }, a.createElement(p.ZP, { size: "headline1", weight: "medium" }, Y.title), U ? a.createElement(f.ZP, { background: "blue500", bold: !0, fontSize: "subtext3", style: se.activeLabel }, q) : null), a.createElement(z.Z, { activeSubscription: e, isTierSwitching: c, productCategory: A, productPrices: v, selectedInterval: E, shouldRemoveExtraStep: _, withAnnualPriceMonthly: !0, withSavingLabel: !0 }), _ ? null : he, le)));
                },
                ne = { context: "PremiumContentProductCard" },
                le = (e) => {
                    const t = a.useMemo(() => ({ type: "CustomRetry", content: () => a.createElement(o.Z, { style: [se.productCard, se.cardBackground] }, a.createElement(p.ZP, null, ee)) }), []),
                        r = e.shouldRemoveExtraStep
                            ? a.createElement(
                                  b.Z,
                                  {
                                      "aria-posinset": e.index,
                                      "aria-setsize": e.numProducts,
                                      onClick: () => {
                                          e.productContent.product_category && e.setSelectedProduct(e.productContent.product_category);
                                      },
                                      style: se.interactiveView,
                                  },
                                  a.createElement(ie, (0, s.Z)({ isSelected: e.isSelected }, e)),
                              )
                            : a.createElement(ie, e);
                    return a.createElement(_.N, { errorConfig: ne, fallback: t }, a.createElement(P.B, { fallback: a.createElement(j, { index: e.index, numProducts: e.numProducts }) }, r));
                },
                ce = a.memo(le),
                se = l.default.create((e) => ({
                    activeLabel: { marginStart: e.spaces.space8, borderRadius: e.borderRadiiPx.infinite },
                    cardSmall: { width: "100%" },
                    cardXLarge: { minWidth: 230 * e.scaleMultiplier, maxWidth: 250 * e.scaleMultiplier },
                    cardXXLarge: { minWidth: 330 * e.scaleMultiplier, maxWidth: 330 * e.scaleMultiplier },
                    productCard: { borderRadius: e.borderRadii.large, flexGrow: 1 },
                    productCardInner: { padding: e.spaces.space24, paddingTop: e.spaces.space32, flexGrow: 1 },
                    cardMarginBottom: { marginBottom: e.spaces.space32 },
                    cardBackground: { backgroundColor: e.colors.gray50 },
                    titleRow: { flexDirection: "row" },
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
                })),
                de = a.createElement(E.default, { style: se.iconInfo });
            function ue(e, t) {
                const r = new Map(t.map((e, t) => [e, t]));
                return e.slice().sort((e, t) => {
                    const a = e.product_category ? r.get(e.product_category) : void 0,
                        o = t.product_category ? r.get(t.product_category) : void 0;
                    return void 0 === a && void 0 === o ? 0 : void 0 === a ? 1 : void 0 === o ? -1 : a - o;
                });
            }
            const pe = ({ activeSubscription: e, disclaimerRef: t, isTierSwitching: r, premiumPriceConfig: l, products: s, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m }) => {
                    const g = (0, i.Mv)(),
                        h = (0, n.Gz)(),
                        { featureSwitches: b } = (0, c.QZ)(),
                        f = ((e, t, r) => {
                            if (e) {
                                const e = r.getStringValue("subscriptions_premium_tiers_order_variant");
                                if (3 === t.length)
                                    switch (e) {
                                        case "variant_a":
                                            return ue(t, ["BlueVerified", "BlueVerifiedPlus", "PremiumBasic"]);
                                        case "variant_b":
                                            return ue(t, ["BlueVerified", "PremiumBasic", "BlueVerifiedPlus"]);
                                        default:
                                            return t.toReversed();
                                    }
                                return t.toReversed();
                            }
                            return t;
                        })(g, s, b);
                    return a.createElement(
                        o.Z,
                        { role: m ? "radiogroup" : null, style: [ge.productCards, g ? ge.productCardsSmall : h ? ge.productCardsLarge : ge.productCardsMedium] },
                        f.map((o, i) => {
                            const n = u === o.product_category,
                                c = o.product_category ? l.productDetailsMap[o.product_category] : null;
                            return a.createElement(ce, { activeSubscription: e, disclaimerRef: t, index: i, isSelected: n, isTierSwitching: r, key: i, numProducts: s.length - 1, premiumPriceConfig: l, productContent: o, productPrices: c, selectedInterval: d, selectedProduct: u, setSelectedProduct: p, shouldRemoveExtraStep: m });
                        }),
                    );
                },
                me = a.memo(pe),
                ge = l.default.create((e) => ({ productCards: { minHeight: 150 * e.scaleMultiplier }, productCardsSmall: { marginTop: e.spaces.space16, flexDirection: "column", width: "100%" }, productCardsMedium: { marginTop: e.spaces.space24, flexDirection: "row", width: "100%", gap: e.spaces.space16, justifyContent: "center" }, productCardsLarge: { marginTop: e.spaces.space40, flexDirection: "row", gap: e.spaces.space32, width: "100%", justifyContent: "center" } }));
        },
        701273: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(202784),
                o = r(325686),
                i = r(67369),
                n = r(708852),
                l = r(782947),
                c = r(392237),
                s = r(674132),
                d = r.n(s),
                u = r(337394);
            const p = d().f89dfa74,
                m = d().b9a4d8c6,
                g = d().a3a4e8f8,
                h = ({ formattedMonthlyPrice: e, isMobile: t, productDetails: r, productDetailsFetchStatus: c, selectedInterval: s, setSelectedInterval: d }) => {
                    const h = (0, i.Mv)(),
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
                    return d ? a.createElement(o.Z, { style: w }, a.createElement(l.Z, { horizontal: !0, name: "interval-selector", onChange: v, options: y, switchStyle: !0, value: s })) : null;
                },
                b = a.memo(h),
                f = c.default.create((e) => ({ intervalSelector: { marginBottom: e.spaces.space16 }, intervalSelectorMobile: { marginBottom: e.spaces.space24 }, marginSmall: { marginTop: e.spaces.space16 }, marginMedium: { marginTop: e.spaces.space16 }, marginLarge: { marginTop: e.spaces.space64 } }));
        },
        754962: (e, t, r) => {
            r.d(t, { ZP: () => Se });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                o = r(325686),
                i = r(107267),
                n = r(154003),
                l = r(167630),
                c = r(40610),
                s = r(392237),
                d = r(674132),
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
            var E = r(548797),
                S = r(87063),
                _ = r(725405),
                P = r(731708),
                C = r(529356),
                Z = r(97882),
                k = r(337394),
                x = r(321330),
                I = r(688715);
            const M = (0, I.ju)("https://legal.x.com/purchaser-terms.html"),
                T = (0, I.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"),
                B = a.createElement(P.ZP, { link: M }),
                z = a.createElement(P.ZP, { link: T }),
                R = a.createElement(u().I18NFormatMessage, { $i18n: "ca87939f" }, a.cloneElement(B, null, u().c20806d5), a.cloneElement(B, null, u().i10be4c9), a.cloneElement(z, null, u().cdda96d6)),
                D = a.createElement(u().I18NFormatMessage, { $i18n: "ed2a6ba9" }, a.cloneElement(B, null, u().cc67158f), a.cloneElement(B, null, u().eb420831), a.cloneElement(z, null, u().c7d49608)),
                L = a.createElement(u().I18NFormatMessage, { $i18n: "db638a21" }, a.cloneElement(B, null, u().ab176bd1), a.cloneElement(B, null, u().cea928a5), a.cloneElement(z, null, u().e37c69e0)),
                W = a.createElement(u().I18NFormatMessage, { $i18n: "b2138d0f" }, a.cloneElement(B, null, u().ia08113f), a.cloneElement(B, null, u().d2962b73), a.cloneElement(z, null, u().b421795a)),
                $ = a.createElement(u().I18NFormatMessage, { $i18n: "c2255911" }, a.cloneElement(B, null, u().f8d88ac7), a.cloneElement(B, null, u().ca220fe9), a.cloneElement(z, null, u().ab8beda0)),
                F = a.createElement(u().I18NFormatMessage, { $i18n: "e647175f" }, a.cloneElement(B, null, u().ife2636d), a.cloneElement(B, null, u().fb57be65), a.cloneElement(z, null, u().e468a6c2)),
                O = a.createElement(u().I18NFormatMessage, { $i18n: "eaccb9c9" }, a.cloneElement(B, null, u().e9f4c89b), a.cloneElement(B, null, u().hce73b41), a.cloneElement(z, null, u().i4db5c92)),
                G = ({ chargeInterval: e, tierSwitchType: t }) => {
                    const r = (0, p.hC)("subscriptions_management_tier_switch_improvements_enabled");
                    let i = "";
                    return "active" === t ? (i = r ? ("Year" === e ? F : O) : L) : "upgrade" === t ? (i = r ? W : R) : "downgrade" === t && (i = r ? $ : D), a.createElement(o.Z, { style: [Y.termsOfService, Y.positionRelative] }, a.createElement(P.ZP, { align: "left", color: "gray900", size: "subtext2", style: Y.justifyText }, i));
                },
                Y = s.default.create((e) => ({ justifyText: { textAlign: "justify" }, termsOfService: { flexDirection: "row", maxWidth: "32em", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space12, marginHorizontal: "auto", textAlign: "center", borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium }, positionRelative: { position: "relative" } })),
                N = u().ba2e82a1,
                A = u().i2c32253,
                H = u().c41e1023,
                U = u().i253b5c6,
                j = u().d2beeaaa,
                V = u().acf719d4,
                X = u().ieafe1c6,
                q = u().gf6b66b8,
                Q = u().e83daf87,
                J = u().f27022d6,
                K = u().i9d5f4b6,
                ee = u().ia390d8a,
                te = u().fd80b875,
                re = u().c8fb177a,
                ae = u().df776505,
                oe = u().c8fb177a,
                ie = u().d7efb6ba,
                ne = u().a5f2cf70,
                le = u().ef1c0208,
                ce = ({ activeSubscription: e, premiumPriceConfig: t, price: r, productPrices: n, selectedInterval: l, selectedProduct: c, setShowTierSwitchConfirm: s, setTierSwitchError: d, switchTier: u, tierSwitchType: h }) => {
                    const b = (0, _.Z)(),
                        f = (0, i.useHistory)(),
                        { label: y } = (0, x.Z)(),
                        v = (0, p.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        w = (0, p.hC)("subscriptions_management_tier_switch_improvements_enabled"),
                        E = a.useCallback(() => {
                            s(!1);
                            const e = r?.external_price_id;
                            b.scribe({ action: "click", element: "tier_switch", component: e, data: { referring_page: (0, m.G3)(f.location) } }),
                                e &&
                                    u(e).then((e) => {
                                        const t = e?.switch_tier?.__typename;
                                        if ("WebPaymentsTierSwitchResultSuccess" === t) {
                                            b.scribe({ action: "success", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } });
                                            const e = { tierSwitchTarget: c, tierSwitchType: h };
                                            f.push("/i/premium", e);
                                        } else "WebPaymentsTierSwitchResultError" === t && (b.scribe({ action: "failure", element: "tier_switch", component: h, data: { referring_page: (0, m.G3)(f.location) } }), d(!0));
                                    });
                        }, [f, b, u, c, r, h, s, d]),
                        S = k.v5.premium[e.product?.rest_id ?? ""],
                        I = S ? t.productDetailsMap[S] : null,
                        M = I ? (0, g.Gi)(e.charge_interval, I) : null;
                    let T = "";
                    w ? (T = le) : "upgrade" === h ? (T = U) : "downgrade" === h ? (T = j) : "active" === h && (T = V);
                    const B = M ? (0, g.d3)(M, v, e) : "";
                    let z = null,
                        R = "";
                    if (n && c) {
                        const e = (0, g.Gi)(l, n),
                            t = (0, Z.x)({ amount: (0, g.aU)(e, v), currencyCode: e?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
                        "Year" === l ? (z = H({ price: t })) : "Month" === l && (z = A({ price: t })), (R = k.St[c]);
                    }
                    const D = N(new Date(parseInt(e.next_billing_at?.time_in_millis, 10))),
                        L = a.useMemo(() => {
                            let e, t;
                            switch (h) {
                                case "downgrade":
                                    (e = ee), (t = te({ nextBillingDate: D, newTierName: R }));
                                    break;
                                case "upgrade":
                                    (e = re), (t = ae({ newTierName: R }));
                                    break;
                                case "active":
                                    (e = oe), (t = "Year" === l ? ie : ne);
                                    break;
                                default:
                                    return null;
                            }
                            return a.createElement(o.Z, { style: se.callout }, a.createElement(o.Z, { style: se.column }, a.createElement(P.ZP, { color: "text", weight: "medium" }, e), a.createElement(P.ZP, { color: "text" }, t)));
                        }, [h, D, R, l]),
                        W = a.createElement(o.Z, { style: se.container }, a.createElement(o.Z, { style: se.tierSwitchConfirmBody }, B ? a.createElement(o.Z, { style: se.tierSwitchPlanContent, testID: "current-plan" }, a.createElement(P.ZP, { color: "text", style: se.marginBottom, weight: "bold" }, J), a.createElement(P.ZP, { color: "text", style: se.marginBottom }, y), a.createElement(P.ZP, { color: "text" }, B)) : null, z ? a.createElement(o.Z, { style: se.tierSwitchPlanContent, testID: "new-plan" }, a.createElement(P.ZP, { color: "text", style: se.marginBottom, weight: "bold" }, K), a.createElement(P.ZP, { color: "text", style: se.marginBottom }, R), a.createElement(P.ZP, { color: "text" }, z)) : null), w ? L : null),
                        $ = a.useCallback(() => s(!1), [s]),
                        F = w ? ("downgrade" === h ? Q({ date: D }) : q) : X;
                    return a.createElement(C.Z, { actionLabel: T, footer: a.createElement(G, { chargeInterval: l, tierSwitchType: h }), graphicDisplayMode: "none", headline: F, onAction: E, onClose: $, subtext: W });
                },
                se = s.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 }, tierSwitchPlanContent: { backgroundColor: e.colors.gray50, padding: e.spaces.space8, borderRadius: e.borderRadii.medium, flexGrow: 1, maxWidth: "50%" }, tierSwitchConfirmBody: { marginTop: e.spaces.space8, flexDirection: "row", display: "flex", gap: e.spaces.space16 }, container: { width: "100%", gap: e.spaces.space16 }, callout: { padding: e.spaces.space8, gap: e.spaces.space8, borderRadius: e.borderRadii.small, backgroundColor: e.colors.blue50, flexDirection: "row" }, column: { gap: e.spaces.space8, maxWidth: "100%" } })),
                de = u().aaa798fc,
                ue = u().c906ad94,
                pe = u().db5c77e0,
                me = u().h77ef73e,
                ge = u().d723d44a,
                he = ({ activeSubscription: e, buttonStyles: t, isMobile: r, premiumPriceConfig: o, price: l, productPrices: c, selectedInterval: s, selectedProduct: d, setShowSheet: u, setTierSwitchError: p, showSheet: g, stripeProductId: h, switchTier: b, switchTierFetchStatus: f }) => {
                    const y = (0, _.Z)(),
                        v = (0, i.useHistory)(),
                        [P, C] = a.useState(!1),
                        Z = a.useMemo(() => (0, E.yv)({ activeSubscription: e, tier: d }), [d, e]),
                        [k, x] = a.useMemo(() => {
                            let t = !1,
                                a = null;
                            if ("upgrade" === Z) a = de;
                            else if ("downgrade" === Z) a = ue;
                            else {
                                if ("active" !== Z) return [null, null];
                                {
                                    const o = e.charge_interval;
                                    o !== s || (!g && r) ? ("Month" === o ? (a = ge) : "Year" === o && (a = me)) : ((a = pe), (t = !0));
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
                    return a.createElement(a.Fragment, null, P ? a.createElement(ce, { activeSubscription: e, premiumPriceConfig: o, price: l, productPrices: c, selectedInterval: s, selectedProduct: d, setShowTierSwitchConfirm: C, setTierSwitchError: p, switchTier: b, tierSwitchType: Z }) : null, a.createElement(n.ZP, { disabled: x || f === S.Z.LOADING, onPress: r && !g ? M : I, style: t, testID: w, type: "primaryFilled" }, k));
                },
                be = u().a73d39fb,
                fe = u().e4a6e006,
                ye = u().i61a221c,
                ve = u().bd40d5b5,
                we = u().i36a0b6e,
                Ee = s.default.create((e) => ({ errorCallout: { marginBottom: e.spaces.space16 }, positionSticky: { position: "sticky" }, inlineCallout: { width: "75%" }, footerWrapper: { alignItems: "center", justifyContent: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space16 }, width75Percent: { width: "75%" }, fullWidth: { width: "100%" }, button: { cursor: "pointer", alignItems: "center" }, tierSwitchCallout: { marginTop: e.spaces.space8 } })),
                Se = a.memo(
                    f((e) => {
                        const { activeSubscription: t, analytics: r, buttonStyle: s, buttonType: d, checkoutUrlFetchStatus: u, disabledText: h, disclaimer: b, fetchSubscriptionProductCheckoutUrl: f, isMobile: w, isTierSwitching: E, onClick: S, premiumPriceConfig: _, productPrices: P, selectedInterval: C, selectedProduct: Z, stripeProductId: k, stripeProductIdUnhashed: x, style: I, supportedReferringPage: M, switchTier: T, switchTierFetchStatus: B, title: z } = e,
                            R = (0, p.hC)("responsive_web_twitter_blue_subscriptions_disabled"),
                            D = (0, p.hC)("subscriptions_marketing_page_free_trial_enabled"),
                            L = (0, p.hC)("subscriptions_marketing_page_discounts_enabled"),
                            W = (0, i.useHistory)(),
                            [$, F] = a.useState(!1),
                            [O, G] = a.useState(!1),
                            Y = a.useCallback((e) => {
                                const t = e.query?.redirect_after_success;
                                if (t && "string" == typeof t && m.ZP.isXOrXaiUrl(decodeURIComponent(t))) return t;
                            }, []),
                            N = a.useCallback(() => {
                                const e = Y(W.location),
                                    t = (0, m.G3)(W.location),
                                    r = {};
                                Z && (r.selectedProduct = Z), C && (r.selectedInterval = C), t && (r.referring_page = t), e && (r.redirectAfterSuccess = e);
                                const a = new URLSearchParams(r).toString();
                                return a ? `${y._r}?${a}` : y._r;
                            }, [Z, W.location, C, Y]),
                            A = h || we,
                            H = a.useMemo(() => "failure" === W.location?.query?.flow_status, [W]),
                            U = a.useCallback(() => {
                                W.push({ pathname: "/i/flow/subscription_eligibility_check", query: { return_path: y.iG, referring_page: M } });
                            }, [W, M]),
                            j = (0, g.Gi)(C, P),
                            V = j ? (0, g.Mk)(j) : null,
                            X = j ? (0, g.fS)(j, L, E ?? !1) : null,
                            q = a.useCallback(() => {
                                const e = j?.external_price_id,
                                    t = V?.program_id,
                                    r = X?.program_id;
                                if (e) {
                                    const a = [];
                                    return t && a.push({ program_id: t }), r && a.push({ program_id: r }), f({ id: k, externalProductId: x, successUrl: N(), cancelUrl: M ? `${y.gV}?referring_page=${M}` : y.gV, externalPriceId: e, promotion_data: a.length > 0 ? a : void 0 });
                                }
                            }, [f, k, x, M, N, j, V, X]),
                            Q = a.useCallback((e) => ((window.location.href = e), null), []),
                            J = a.useCallback(() => {
                                const e = (0, m.G3)(W.location);
                                r.scribe({ action: "click", element: "subscribe", component: k, data: { referring_page: e, referer: e } }),
                                    H
                                        ? U()
                                        : (q()
                                              ?.then((e) => {
                                                  e && Q(e);
                                              })
                                              .catch(() => {
                                                  U();
                                              }),
                                          S && S());
                            }, [q, r, W.location, S, U, H, k, Q]),
                            K = a.useMemo(() => [I, w ? null : Ee.positionSticky], [w, I]),
                            ee = a.useMemo(() => [Ee.footerWrapper, I], [I]),
                            te = a.useMemo(() => [Ee.button, w && !$ ? Ee.width75Percent : Ee.fullWidth, s], [s, w, $]),
                            re = a.useMemo(() => (V && D ? be({ numberOfDays: V.metadata.free_trial_days }) : ye), [V, D]),
                            ae = a.useMemo(() => {
                                const e = a.createElement(n.ZP, { "aria-label": z ? ve({ title: z }) : re, disabled: !P || "loading" === u || H, onPress: J, style: te, testID: v, type: d || "primaryFilled" }, "loading" === u ? a.createElement(l.Z, { color: "brandFilled" === d ? "white" : void 0, size: "small" }) : re),
                                    r = "failed" === u || "failed" === B || O ? a.createElement(c.Z.Danger, { style: Ee.errorCallout, text: fe }) : null;
                                return a.createElement(o.Z, { style: K }, r, E && t ? a.createElement(he, { activeSubscription: t, buttonStyles: te, isMobile: w, premiumPriceConfig: _, price: j, productPrices: P, selectedInterval: C, selectedProduct: Z, setShowSheet: F, setTierSwitchError: G, showSheet: $, stripeProductId: k, switchTier: T, switchTierFetchStatus: B }) : e, b);
                            }, [z, P, O, u, H, J, K, te, B, b, E, d, re, t, w, C, $, k, _, Z, T, j]),
                            oe = a.useCallback(() => (R ? a.createElement(o.Z, { style: ee }, a.createElement(o.Z, { style: Ee.inlineCallout }, a.createElement(c.Z.Custom, { text: A }))) : a.createElement(o.Z, { style: K, testID: "container" }, ae)), [R, K, ae, ee, A]);
                        return a.createElement(o.Z, null, oe());
                    }),
                );
        },
        188142: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                o = r(202784),
                i = r(154003),
                n = r(674132),
                l = r.n(n),
                c = r(837020),
                s = r(4452);
            const d = l().ia5e7488,
                u = ({ show: e, style: t, type: r, variant: n }) => {
                    if (!e) return null;
                    const l = "darkMode" === n ? { backgroundColor: "transparent", borderColor: "transparent", color: "alwaysDarkGray700" } : { type: r || "primaryText" };
                    return o.createElement(
                        i.ZP,
                        (0, a.Z)({ "aria-label": d }, l, {
                            icon: o.createElement(c.default, null),
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
                o = r(202784),
                i = r(325686),
                n = r(731708),
                l = r(392237),
                c = r(674132),
                s = r.n(c),
                d = r(930925),
                u = r(961951);
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
                        E = `${p({ price: f || h })} · ${g}`,
                        S = o.createElement(i.Z, { style: y.pill }, o.createElement(n.ZP, { style: y.pillText }, (0, d.$)(e)));
                    return o.createElement(i.Z, null, o.createElement(n.ZP, { style: y.subscribeLabel }, b), o.createElement(u.Z, (0, a.Z)({}, l, { buttonFontSize: "body", buttonSize: "large", customLabel: w, disclaimerRef: null, price: s, savePill: S })), o.createElement(u.Z, (0, a.Z)({}, l, { customLabel: E, disclaimerRef: r.apiContent?.subscribe_button, price: c })));
                },
                y = l.default.create((e) => ({ pill: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, position: "absolute", top: "50%", end: "3%", transform: [{ translateY: "-50%" }], zIndex: 1 }, pillText: { color: e.colors.whiteOnColor, fontSize: e.fontSizes.subtext3, fontWeight: "normal" }, subscribeLabel: { marginBottom: e.spaces.space12, marginTop: e.spaces.space4, fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium } }));
        },
        287510: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                o = r(325686),
                i = r(392237);
            const n = ({ children: e, footerRef: t, variant: r }) => {
                    const n = (e, t, r) => (t ? ({ condensed: { ...(r ? { paddingTop: e.spaces.space12, paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 } : { height: 0, top: 0, borderTopWidth: 1, borderTopColor: e.colors.gray50, borderTopStyle: "solid" }) } }[t] ?? void 0) : void 0);
                    return a.createElement(o.Z, { ref: t, style: [l.root, n(i.default.theme, r, !0)] }, a.createElement(o.Z, { style: [l.gradient, n(i.default.theme, r)] }), e);
                },
                l = i.default.create((e) => ({ root: { bottom: 0, position: "fixed", width: "100%", backgroundColor: e.colors.navigationBackground, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingTop: e.spaces.space16, paddingBottom: i.default.supports("top: env(safe-area-inset-bottom)") ? "env(safe-area-inset-bottom)" : 0 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" } }));
        },
        361780: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                o = r(325686),
                i = r(392237),
                n = r(952793);
            const l = ({ children: e, headerRef: t, style: r, withFade: i = !0 }) => {
                    const l = (0, n.hC)("ios_premium_paywall_preloaded_webview_pagesheet_modal");
                    return a.createElement(o.Z, { ref: t, style: [c.header, r, l ? c.headerFullScreen : c.headerHalfSheet] }, i ? a.createElement(o.Z, { style: c.gradient }) : null, e);
                },
                c = i.default.create((e) => ({ header: { flexDirection: "row", position: "fixed", zIndex: 1, backgroundColor: e.colors.cellBackground, width: "100%", paddingBottom: e.spaces.space8 }, headerHalfSheet: { paddingTop: i.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space8} + env(safe-area-inset-top))` : e.spaces.space8 }, headerFullScreen: { paddingTop: i.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space20} + env(safe-area-inset-top))` : e.spaces.space20 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.navigationBackground} 0%, ${e.colors.transparent} 100%)`, width: "100%", bottom: -28, start: 0 } }));
        },
        627706: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var a = r(202784),
                o = r(815858),
                i = r(154003),
                n = r(392237),
                l = r(674132),
                c = r.n(l),
                s = r(325686),
                d = r(731708),
                u = r(138099),
                p = r(562041),
                m = r(789769),
                g = r(930925),
                h = r(961951);
            const b = c().bb4998fb,
                f = c().a9f397f3,
                y = ({ catalogItems: e, defaultChargeInterval: t, disclaimerRef: r, productTitle: o, setPurchaseSheetOpen: i, variant: n }) => {
                    const [l, c] = a.useState(t),
                        { ref: y } = (0, p.G)(() => i(!1)),
                        w = e.find((e) => e.chargeInterval === l),
                        E = w?.introductoryOffer,
                        S = a.useMemo(() => a.createElement(h.Z, { disclaimerRef: r, price: w, variant: n }), [w, r, n]),
                        _ = a.useMemo(() => (w?.introductoryOffer ? (0, m.u)({ percentage: w.introductoryOffer.percentageSaved, tier: o, plan: m.Z[l] }) : o), [o, w, l]),
                        P = a.useMemo(() => {
                            if (E?.endsAtMs) {
                                const e = new Date(parseInt(E.endsAtMs, 10)),
                                    t = f(e);
                                return a.createElement(d.ZP, { color: "gray700", style: v.subtitle }, b({ date: t }));
                            }
                            return null;
                        }, [E]);
                    if (!r) return null;
                    const C = a.createElement(s.Z, { style: v.dragHandleOuter }, a.createElement(s.Z, { style: v.dragHandle }));
                    return a.createElement(u.Z, { enableMaskForDismiss: !0, onMaskClick: () => i(!1), style: v.sheetOuter, testID: `purchase_sheet_${o}`, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, C, a.createElement(s.Z, { ref: y, style: v.sheet }, a.createElement(d.ZP, { size: "title4", weight: "bold" }, _), P, a.createElement(g.Z, { catalogItems: e, selectedInterval: l, setSelectedInterval: c, variant: "default" }), S));
                },
                v = n.default.create((e) => ({ sheetOuter: { backgroundColor: e.colors.gray0 }, sheet: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space28 }, dragHandle: { width: 36, height: 5, borderRadius: 10, backgroundColor: e.colors.gray100 }, dragHandleOuter: { top: 10, position: "absolute", alignItems: "center", width: "100%" }, subtitle: { marginTop: e.spaces.space4 } })),
                w = c().a69fd369,
                E = c().e563a5d1,
                S = c().a0dc6e4c,
                _ = ({ catalogItemsForProduct: e, content: { apiContent: t }, label: r, selectedProduct: n, variant: l }) => {
                    const [c, s] = a.useState(!1),
                        d = e.find((e) => "Month" === e.chargeInterval),
                        u = t?.products?.find((e) => e.product_category === n),
                        p = a.useMemo(() => {
                            if (r) return r;
                            const t = e.find((e) => !!e?.introductoryOffer);
                            return t ? E({ percentage: t.introductoryOffer?.percentageSaved }) : d ? w({ price: d.localisedMonthlyPrice || "undefined" }) : S;
                        }, [e, d, r]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        u?.title && c ? a.createElement(o.Z, { animateMount: !0, duration: "normal", show: c, type: "slide" }, a.createElement(y, { catalogItems: e, defaultChargeInterval: "Year", disclaimerRef: t?.subscribe_button, productTitle: u?.title, setPurchaseSheetOpen: s, variant: l })) : null,
                        a.createElement(
                            i.ZP,
                            {
                                allowTextWrap: !0,
                                color: "gold" === l ? "alwaysBlack" : "blue" === l ? "whiteOnColor" : void 0,
                                disabled: !d,
                                onClick: () => {
                                    s(!0);
                                },
                                size: l ? "xLarge" : void 0,
                                style: "gold" === l ? P.goldButton : "blue" === l ? P.blueButton : null,
                                type: l ? void 0 : "primaryFilled",
                            },
                            p,
                        ),
                    );
                },
                P = n.default.create((e) => ({ goldButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.gold50} 0.23%, \n      ${e.colors.gold0} 32.73%, \n      ${e.colors.gold50} 50.37%,\n       ${e.colors.gold100} 98.27%)`, border: "none" }, blueButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.blue500} 0.23%, \n      ${e.colors.blue600} 32.73%, \n      ${e.colors.blue500} 50.37%,\n       ${e.colors.blue500} 98.27%)` } }));
        },
        930925: (e, t, r) => {
            r.d(t, { Z: () => D, $: () => B });
            var a = r(807896),
                o = r(202784),
                i = r(325686),
                n = r(896632),
                l = r(392237),
                c = r(674132),
                s = r.n(c),
                d = r(352924),
                u = r(731708),
                p = r(868634),
                m = r(952428),
                g = r(516951);
            const h = (e) => (e ? ({ default: E.blueBorder, horizontal_blue: E.blueBorder, horizontal_gold: E.goldBorder, special: E.whiteBorder, horizontal_green: E.whiteBorder }[e] ?? void 0) : void 0),
                b = (e) => (e ? ({ default: "headline2", horizontal_blue: "headline2", horizontal_gold: "headline2", horizontal_green: "headline2", special: "headline1" }[e] ?? void 0) : void 0),
                f = (e) => (e ? ({ default: "subtext2", horizontal_blue: "subtext2", horizontal_gold: "subtext2", horizontal_green: "subtext2", special: "body" }[e] ?? void 0) : void 0),
                y = (e) => (e ? ({ default: E.blueBackground, horizontal_gold: E.goldBackground, horizontal_blue: E.blueBackground, horizontal_green: E.greenBackground, special: E.blueBackground }[e] ?? void 0) : void 0),
                v = (e) => (e ? ({ default: "whiteOnColor", horizontal_gold: "alwaysBlack", horizontal_blue: "whiteOnColor", horizontal_green: "buttonWhite", special: "whiteOnColor" }[e] ?? "whiteOnColor") : "whiteOnColor"),
                w = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, label: n, name: l, onChange: c, price: s, subtext: w, title: _, variant: P = "default" }) => {
                    const C = d.b(),
                        Z = d.b(),
                        k = d.b();
                    let x, I, M, T;
                    switch (P) {
                        case "horizontal_gold":
                        case "horizontal_blue":
                        case "horizontal_green":
                        case "special":
                            (M = E.horizontalNonLast), (I = [E.horizontalChecked, h(P)]), (T = E.horizontal), (x = o.createElement(o.Fragment, null, n ? o.createElement(i.Z, { style: E.horizontalLabelContainer }, o.createElement(i.Z, { style: [E.horizontalLabel, y(P)] }, o.createElement(u.ZP, { color: v(P), size: "subtext3", weight: "bold" }, n))) : null, o.createElement(i.Z, { style: E.horizontalInner }, o.createElement(u.ZP, { size: f(P) }, _), o.createElement(u.ZP, { size: b(P), style: E.horizontalPrice, weight: "bold" }, s))));
                            break;
                        default:
                            (M = E.defaultNonLast), (I = E.defaultChecked), (T = E.default), (x = o.createElement(o.Fragment, null, o.createElement(i.Z, { style: E.row }, o.createElement(i.Z, { style: [E.row, E.titleRow] }, o.createElement(u.ZP, { size: "body" }, _), n ? o.createElement(p.ZP, { style: E.label, type: "subscriptionSaving" }, n) : null), o.createElement(u.ZP, { size: "headline2", style: E.price }, s)), o.createElement(u.ZP, { color: "gray700", size: "subtext1", style: E.subtext }, w)));
                    }
                    return o.createElement(m.Z, { style: [E.common, T, a ? I : null, t !== r ? M : null], testID: `interval_radio_${t || ""}` }, x, o.createElement("input", { "aria-describedby": `${Z} ${k}`, "aria-label": e, "aria-labelledby": C, "aria-posinset": t, "aria-setsize": r, checked: a, name: l, onChange: a ? g.Z : c, style: S, type: "radio" }));
                },
                E = l.default.create((e) => ({ common: { borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.medium }, default: { backgroundColor: e.colors.gray50, borderColor: e.colors.transparent, padding: e.spaces.space12 }, defaultNonLast: { marginBottom: e.spaces.space12 }, defaultChecked: { borderWidth: e.borderWidths.medium, borderColor: e.colors.primary }, horizontal: { flexGrow: 1, borderColor: e.colors.gray200, maxWidth: "50%", padding: e.spaces.space20 }, horizontalNonLast: { marginEnd: e.spaces.space12 }, horizontalChecked: { borderWidth: e.borderWidths.medium }, goldBorder: { borderColor: e.colors.gold100 }, blueBorder: { borderColor: e.colors.blue500 }, whiteBorder: { borderColor: e.colors.text }, horizontalInner: { alignItems: "center" }, horizontalPrice: { marginTop: e.spaces.space8 }, horizontalLabel: { fontWeight: "normal", borderRadius: 9999, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, goldBackground: { backgroundImage: `\n    linear-gradient(90.38deg, \n    ${e.colors.gold50} 0.23%, \n    ${e.colors.gold0} 32.73%, \n    ${e.colors.gold50} 50.37%,\n     ${e.colors.gold100} 98.27%)` }, blueBackground: { backgroundColor: e.colors.blue500 }, greenBackground: { backgroundColor: e.colors.text }, horizontalLabelContainer: { position: "absolute", top: -10, width: "100%", alignItems: "center", start: 0 }, row: { flexDirection: "row" }, titleRow: { alignItems: "center", flexGrow: 1 }, price: { alignSelf: "flex-end" }, label: { marginStart: e.spaces.space8, fontWeight: "normal" }, subtext: { marginTop: e.spaces.space8 } })),
                S = { ...l.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                _ = s().ga482a88,
                P = s().hc64d5b0,
                C = s().ce7c21de,
                Z = s().a3a4e8f8,
                k = s().b47d123d,
                x = s().i2c32253,
                I = s().de7db957,
                M = s().d8982437,
                T = (e, t) => {
                    switch (t) {
                        case "Year":
                            return "special" === e ? C : _;
                        case "Month":
                            return "special" === e ? Z : P;
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
                        o = Math.floor(((t.rawPrice - a) / a) * -100);
                    return k({ percentage: o });
                },
                z = (e, t) => {
                    switch (e) {
                        case "Year":
                            return I({ price: t });
                        case "Month":
                            return M({ price: t });
                        default:
                            return "Unsupported interval";
                    }
                },
                R = (e, t) => (e.chargeInterval === t.chargeInterval ? 0 : "Year" === e.chargeInterval ? -1 : "Year" === t.chargeInterval ? 1 : 0),
                D = ({ catalogItems: e, selectedInterval: t, setSelectedInterval: r, variant: l }) => {
                    const c = o.useCallback(
                            (e, t) => {
                                r(t);
                            },
                            [r],
                        ),
                        s = o.useMemo(
                            () =>
                                e.sort(R).map((t, r) => {
                                    const a = t?.introductoryOffer?.localisedMonthlyPrice || t.localisedMonthlyPrice,
                                        o = t?.introductoryOffer?.localisedYearlyPrice || t.localisedYearlyPrice;
                                    return { value: t.chargeInterval, title: T(l, t.chargeInterval), subtext: z(t.chargeInterval, o), price: "special" === l ? ("Month" === t.chargeInterval ? a : o) : x({ price: a }), label: "Year" === t.chargeInterval && "special" !== l ? B(e) : null };
                                }),
                            [e, l],
                        ),
                        d = o.useCallback((e) => o.createElement(w, (0, a.Z)({ key: e.value, variant: l }, e)), [l]);
                    return o.createElement(i.Z, { style: L.selectionGroup }, o.createElement(n.Z, { horizontal: ["horizontal_gold", "horizontal_blue", "special", "horizontal_green"].includes(l), name: "interval-select", onChange: c, options: s, renderSelector: d, value: t }));
                },
                L = l.default.create((e) => ({ selectionGroup: { marginVertical: e.spaces.space16, gap: "40px" } }));
        },
        961951: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                o = r(731708),
                i = r(392237),
                n = r(674132),
                l = r.n(n),
                c = r(4452),
                s = r(731862);
            const d = l().aa0d60aa,
                u = l().f0ad5cc8,
                p = l().a0dc6e4c,
                m = l().jd8b2e66,
                g = ({ buttonFontSize: e, buttonSize: t, customLabel: r, disclaimerRef: i, price: n, savePill: g, styleOverrides: b, variant: f, withAnnualPriceMonthly: y }) => {
                    const { productAppStoreID: v } = n || {},
                        w = a.useMemo(() => {
                            if (n?.introductoryOffer) {
                                const e = y ? n?.localisedMonthlyPrice : n?.localisedYearlyPrice,
                                    t = y ? n?.introductoryOffer?.localisedMonthlyPrice : n?.introductoryOffer?.localisedYearlyPrice;
                                return a.createElement(l().I18NFormatMessage, { $i18n: "db11f87d", newPrice: t || "", interval: y ? d : u }, a.createElement(o.ZP, { style: h.strike }, l().aa5df29f({ oldPrice: e || "" })));
                            }
                            return r || m;
                        }, [y, n, r]),
                        E = a.useMemo(() => {
                            if (y) {
                                const e = n?.localisedYearlyPrice,
                                    t = n?.introductoryOffer?.localisedYearlyPrice;
                                return a.createElement(l().I18NFormatMessage, { $i18n: "e4219e13", newPrice: t || "", interval: u }, a.createElement(o.ZP, { style: h.strike }, l().g1c4f7a1({ oldPrice: e || "" })));
                            }
                            return null;
                        }, [y, n]),
                        S = a.useCallback(() => {
                            v && (0, c.jW)("make-purchase", { productAppStoreID: v });
                        }, [v]);
                    return a.createElement(s.Z, { buttonFontSize: e, buttonSize: t, disabled: !v, disclaimerRef: i, label: v ? w : p, loading: !1, onClick: S, savePill: g, styleOverrides: b, subtext: E || void 0, variant: f });
                },
                h = i.default.create((e) => ({ strike: { textDecorationLine: "line-through" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-b8334df9.3aae151a.js.map
