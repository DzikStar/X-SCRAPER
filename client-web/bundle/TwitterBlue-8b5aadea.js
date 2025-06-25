"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-8b5aadea"],
    {
        188142: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                o = r(202784),
                l = r(154003),
                n = r(111677),
                i = r.n(n),
                c = r(837020),
                s = r(4452);
            const d = i().ia5e7488,
                u = ({ show: e, style: t, type: r, variant: n }) => {
                    if (!e) return null;
                    const i = "darkMode" === n ? { backgroundColor: "transparent", borderColor: "transparent", color: "alwaysDarkGray700" } : { type: r || "primaryText" };
                    return o.createElement(
                        l.ZP,
                        (0, a.Z)({ "aria-label": d }, i, {
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
                l = r(325686),
                n = r(731708),
                i = r(392237),
                c = r(111677),
                s = r.n(c),
                d = r(930925),
                u = r(25591);
            const p = s().i2c32253,
                g = s().ga482a88,
                h = s().hc64d5b0,
                b = s().i3e90e20,
                m = s().d9e9ce26,
                f = ({ catalogItems: e, catalogItemsForProduct: t, content: r }) => {
                    const i = { buttonFontSize: "body", buttonSize: "large", styleOverrides: { marginBottom: "space8", disclaimerFontColor: "gray700", disclaimerFontSize: "subtext2" }, variant: "leftAligned" },
                        c = t.find((e) => "Month" === e.chargeInterval),
                        s = t.find((e) => "Year" === e.chargeInterval),
                        f = c?.localisedMonthlyPrice,
                        v = s?.localisedMonthlyPrice,
                        P = `${p({ price: v || b })} · ${g}`,
                        w = `${p({ price: f || b })} · ${h}`,
                        z = o.createElement(l.Z, { style: y.pill }, o.createElement(n.ZP, { style: y.pillText }, (0, d.$)(e)));
                    return o.createElement(l.Z, null, o.createElement(n.ZP, { style: y.subscribeLabel }, m), o.createElement(u.Z, (0, a.Z)({}, i, { buttonFontSize: "body", buttonSize: "large", customLabel: P, disclaimerRef: null, price: s, savePill: z })), o.createElement(u.Z, (0, a.Z)({}, i, { customLabel: w, disclaimerRef: r.apiContent?.subscribe_button, price: c })));
                },
                y = i.default.create((e) => ({ pill: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, position: "absolute", top: "50%", end: "3%", transform: [{ translateY: "-50%" }], zIndex: 1 }, pillText: { color: e.colors.whiteOnColor, fontSize: e.fontSizes.subtext3, fontWeight: "normal" }, subscribeLabel: { marginBottom: e.spaces.space12, marginTop: e.spaces.space4, fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium } }));
        },
        287510: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                o = r(325686),
                l = r(392237);
            const n = ({ children: e, footerRef: t, variant: r }) => {
                    const n = (e, t, r) => (t ? ({ condensed: { ...(r ? { paddingTop: e.spaces.space12, paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 } : { height: 0, top: 0, borderTopWidth: 1, borderTopColor: e.colors.gray50, borderTopStyle: "solid" }) } }[t] ?? void 0) : void 0);
                    return a.createElement(o.Z, { ref: t, style: [i.root, n(l.default.theme, r, !0)] }, a.createElement(o.Z, { style: [i.gradient, n(l.default.theme, r)] }), e);
                },
                i = l.default.create((e) => ({ root: { bottom: 0, position: "fixed", width: "100%", backgroundColor: e.colors.navigationBackground, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingTop: e.spaces.space16, paddingBottom: l.default.supports("top: env(safe-area-inset-bottom)") ? "env(safe-area-inset-bottom)" : 0 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" } }));
        },
        361780: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                l = r(392237),
                n = r(952793);
            const i = ({ children: e, headerRef: t, style: r, withFade: l = !0 }) => {
                    const i = (0, n.hC)("ios_premium_paywall_preloaded_webview_pagesheet_modal");
                    return a.createElement(o.Z, { ref: t, style: [c.header, r, i ? c.headerFullScreen : c.headerHalfSheet] }, l ? a.createElement(o.Z, { style: c.gradient }) : null, e);
                },
                c = l.default.create((e) => ({ header: { flexDirection: "row", position: "fixed", zIndex: 1, backgroundColor: e.colors.cellBackground, width: "100%", paddingBottom: e.spaces.space8 }, headerHalfSheet: { paddingTop: l.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space8} + env(safe-area-inset-top))` : e.spaces.space8 }, headerFullScreen: { paddingTop: l.default.supports("top: env(safe-area-inset-top)") ? `calc(${e.spaces.space20} + env(safe-area-inset-top))` : e.spaces.space20 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.navigationBackground} 0%, ${e.colors.transparent} 100%)`, width: "100%", bottom: -28, start: 0 } }));
        },
        627706: (e, t, r) => {
            r.d(t, { Z: () => k });
            var a = r(202784),
                o = r(815858),
                l = r(154003),
                n = r(392237),
                i = r(111677),
                c = r.n(i),
                s = r(325686),
                d = r(731708),
                u = r(138099),
                p = r(562041),
                g = r(789769),
                h = r(930925),
                b = r(25591);
            const m = c().bb4998fb,
                f = c().a9f397f3,
                y = ({ catalogItems: e, defaultChargeInterval: t, disclaimerRef: r, productTitle: o, selectedProduct: l, setPurchaseSheetOpen: n, stripePriceConfig: i, variant: c, withStripePurchaseButton: y }) => {
                    const [P, w] = a.useState(t),
                        { ref: z } = (0, p.G)(() => n(!1)),
                        k = e.find((e) => e.chargeInterval === P),
                        C = k?.introductoryOffer,
                        I = a.useMemo(() => a.createElement(b.Z, { disclaimerRef: r, price: k, selectedInterval: P, selectedProduct: l, stripePriceConfig: i, variant: c, withStripePurchaseButton: y }), [k, r, c, l, P, i, y]),
                        Z = a.useMemo(() => (k?.introductoryOffer ? (0, g.u)({ percentage: k.introductoryOffer.percentageSaved, tier: o, plan: g.Z[P] }) : o), [o, k, P]),
                        E = a.useMemo(() => {
                            if (C?.endsAtMs) {
                                const e = new Date(parseInt(C.endsAtMs, 10)),
                                    t = f(e);
                                return a.createElement(d.ZP, { color: "gray700", style: v.subtitle }, m({ date: t }));
                            }
                            return null;
                        }, [C]);
                    if (!r) return null;
                    const S = a.createElement(s.Z, { style: v.dragHandleOuter }, a.createElement(s.Z, { style: v.dragHandle }));
                    return a.createElement(u.Z, { enableMaskForDismiss: !0, onMaskClick: () => n(!1), style: v.sheetOuter, testID: `purchase_sheet_${o}`, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, S, a.createElement(s.Z, { ref: z, style: v.sheet }, a.createElement(d.ZP, { size: "title4", weight: "bold" }, Z), E, a.createElement(h.Z, { catalogItems: e, selectedInterval: P, setSelectedInterval: w, variant: "default" }), I));
                },
                v = n.default.create((e) => ({ sheetOuter: { backgroundColor: e.colors.gray0 }, sheet: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space28 }, dragHandle: { width: 36, height: 5, borderRadius: 10, backgroundColor: e.colors.gray100 }, dragHandleOuter: { top: 10, position: "absolute", alignItems: "center", width: "100%" }, subtitle: { marginTop: e.spaces.space4 } })),
                P = c().a69fd369,
                w = c().e563a5d1,
                z = c().a0dc6e4c,
                k = ({ catalogItemsForProduct: e, content: { apiContent: t }, label: r, selectedProduct: n, stripePriceConfig: i, variant: c, withStripePurchaseButton: s }) => {
                    const [d, u] = a.useState(!1),
                        p = e.find((e) => "Month" === e.chargeInterval),
                        g = t?.products?.find((e) => e.product_category === n),
                        h = a.useMemo(() => {
                            if (r) return r;
                            const t = e.find((e) => !!e?.introductoryOffer);
                            return t ? w({ percentage: t.introductoryOffer?.percentageSaved }) : p ? P({ price: p.localisedMonthlyPrice || "undefined" }) : z;
                        }, [e, p, r]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        g?.title && d ? a.createElement(o.Z, { animateMount: !0, duration: "normal", show: d, type: "slide" }, a.createElement(y, { catalogItems: e, defaultChargeInterval: "Year", disclaimerRef: t?.subscribe_button, productTitle: g?.title, selectedProduct: n, setPurchaseSheetOpen: u, stripePriceConfig: i, variant: c, withStripePurchaseButton: s })) : null,
                        a.createElement(
                            l.ZP,
                            {
                                allowTextWrap: !0,
                                color: "gold" === c ? "alwaysBlack" : "blue" === c ? "whiteOnColor" : void 0,
                                disabled: !p,
                                onClick: () => {
                                    u(!0);
                                },
                                size: c ? "xLarge" : void 0,
                                style: "gold" === c ? C.goldButton : "blue" === c ? C.blueButton : null,
                                type: c ? void 0 : "primaryFilled",
                            },
                            h,
                        ),
                    );
                },
                C = n.default.create((e) => ({ goldButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.gold50} 0.23%, \n      ${e.colors.gold0} 32.73%, \n      ${e.colors.gold50} 50.37%,\n       ${e.colors.gold100} 98.27%)`, border: "none" }, blueButton: { backgroundImage: `\n      linear-gradient(90.38deg, \n      ${e.colors.blue500} 0.23%, \n      ${e.colors.blue600} 32.73%, \n      ${e.colors.blue500} 50.37%,\n       ${e.colors.blue500} 98.27%)` } }));
        },
        930925: (e, t, r) => {
            r.d(t, { Z: () => F, $: () => M });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                n = r(896632),
                i = r(392237),
                c = r(111677),
                s = r.n(c),
                d = r(352924),
                u = r(731708),
                p = r(868634),
                g = r(952428),
                h = r(516951);
            const b = (e) => (e ? ({ default: w.blueBorder, horizontal_blue: w.blueBorder, horizontal_gold: w.goldBorder, special: w.whiteBorder, horizontal_green: w.whiteBorder }[e] ?? void 0) : void 0),
                m = (e) => (e ? ({ default: "headline2", horizontal_blue: "headline2", horizontal_gold: "headline2", horizontal_green: "headline2", special: "headline1" }[e] ?? void 0) : void 0),
                f = (e) => (e ? ({ default: "subtext2", horizontal_blue: "subtext2", horizontal_gold: "subtext2", horizontal_green: "subtext2", special: "body" }[e] ?? void 0) : void 0),
                y = (e) => (e ? ({ default: w.blueBackground, horizontal_gold: w.goldBackground, horizontal_blue: w.blueBackground, horizontal_green: w.greenBackground, special: w.blueBackground }[e] ?? void 0) : void 0),
                v = (e) => (e ? ({ default: "whiteOnColor", horizontal_gold: "alwaysBlack", horizontal_blue: "whiteOnColor", horizontal_green: "buttonWhite", special: "whiteOnColor" }[e] ?? "whiteOnColor") : "whiteOnColor"),
                P = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, label: n, name: i, onChange: c, price: s, subtext: P, title: k, variant: C = "default" }) => {
                    const I = d.b(),
                        Z = d.b(),
                        E = d.b();
                    let S, _, B, x;
                    switch (C) {
                        case "horizontal_gold":
                        case "horizontal_blue":
                        case "horizontal_green":
                        case "special":
                            (B = w.horizontalNonLast), (_ = [w.horizontalChecked, b(C)]), (x = w.horizontal), (S = o.createElement(o.Fragment, null, n ? o.createElement(l.Z, { style: w.horizontalLabelContainer }, o.createElement(l.Z, { style: [w.horizontalLabel, y(C)] }, o.createElement(u.ZP, { color: v(C), size: "subtext3", weight: "bold" }, n))) : null, o.createElement(l.Z, { style: w.horizontalInner }, o.createElement(u.ZP, { size: f(C) }, k), o.createElement(u.ZP, { size: m(C), style: w.horizontalPrice, weight: "bold" }, s))));
                            break;
                        default:
                            (B = w.defaultNonLast), (_ = w.defaultChecked), (x = w.default), (S = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: w.row }, o.createElement(l.Z, { style: [w.row, w.titleRow] }, o.createElement(u.ZP, { size: "body" }, k), n ? o.createElement(p.ZP, { style: w.label, type: "subscriptionSaving" }, n) : null), o.createElement(u.ZP, { size: "headline2", style: w.price }, s)), o.createElement(u.ZP, { color: "gray700", size: "subtext1", style: w.subtext }, P)));
                    }
                    return o.createElement(g.Z, { style: [w.common, x, a ? _ : null, t !== r ? B : null], testID: `interval_radio_${t || ""}` }, S, o.createElement("input", { "aria-describedby": `${Z} ${E}`, "aria-label": e, "aria-labelledby": I, "aria-posinset": t, "aria-setsize": r, checked: a, name: i, onChange: a ? h.Z : c, style: z, type: "radio" }));
                },
                w = i.default.create((e) => ({ common: { borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.medium }, default: { backgroundColor: e.colors.gray50, borderColor: e.colors.transparent, padding: e.spaces.space12 }, defaultNonLast: { marginBottom: e.spaces.space12 }, defaultChecked: { borderWidth: e.borderWidths.medium, borderColor: e.colors.primary }, horizontal: { flexGrow: 1, borderColor: e.colors.gray200, maxWidth: "50%", padding: e.spaces.space20 }, horizontalNonLast: { marginEnd: e.spaces.space12 }, horizontalChecked: { borderWidth: e.borderWidths.medium }, goldBorder: { borderColor: e.colors.gold100 }, blueBorder: { borderColor: e.colors.blue500 }, whiteBorder: { borderColor: e.colors.text }, horizontalInner: { alignItems: "center" }, horizontalPrice: { marginTop: e.spaces.space8 }, horizontalLabel: { fontWeight: "normal", borderRadius: 9999, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, goldBackground: { backgroundImage: `\n    linear-gradient(90.38deg, \n    ${e.colors.gold50} 0.23%, \n    ${e.colors.gold0} 32.73%, \n    ${e.colors.gold50} 50.37%,\n     ${e.colors.gold100} 98.27%)` }, blueBackground: { backgroundColor: e.colors.blue500 }, greenBackground: { backgroundColor: e.colors.text }, horizontalLabelContainer: { position: "absolute", top: -10, width: "100%", alignItems: "center", start: 0 }, row: { flexDirection: "row" }, titleRow: { alignItems: "center", flexGrow: 1 }, price: { alignSelf: "flex-end" }, label: { marginStart: e.spaces.space8, fontWeight: "normal" }, subtext: { marginTop: e.spaces.space8 } })),
                z = { ...i.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                k = s().ga482a88,
                C = s().hc64d5b0,
                I = s().ce7c21de,
                Z = s().a3a4e8f8,
                E = s().b47d123d,
                S = s().i2c32253,
                _ = s().de7db957,
                B = s().d8982437,
                x = (e, t) => {
                    switch (t) {
                        case "Year":
                            return "special" === e ? I : k;
                        case "Month":
                            return "special" === e ? Z : C;
                        default:
                            return "Unsupported interval";
                    }
                },
                M = (e) => {
                    const t = e.find((e) => "Year" === e.chargeInterval),
                        r = e.find((e) => "Month" === e.chargeInterval);
                    if (!t?.rawPrice || !r?.rawPrice) return null;
                    if (t.introductoryOffer) return E({ percentage: t.introductoryOffer.percentageSaved });
                    const a = 12 * r.rawPrice,
                        o = Math.floor(((t.rawPrice - a) / a) * -100);
                    return E({ percentage: o });
                },
                $ = (e, t) => {
                    switch (e) {
                        case "Year":
                            return _({ price: t });
                        case "Month":
                            return B({ price: t });
                        default:
                            return "Unsupported interval";
                    }
                },
                O = (e, t) => (e.chargeInterval === t.chargeInterval ? 0 : "Year" === e.chargeInterval ? -1 : "Year" === t.chargeInterval ? 1 : 0),
                F = ({ catalogItems: e, selectedInterval: t, setSelectedInterval: r, variant: i }) => {
                    const c = o.useCallback(
                            (e, t) => {
                                r(t);
                            },
                            [r],
                        ),
                        s = o.useMemo(
                            () =>
                                e.sort(O).map((t, r) => {
                                    const a = t?.introductoryOffer?.localisedMonthlyPrice || t.localisedMonthlyPrice,
                                        o = t?.introductoryOffer?.localisedYearlyPrice || t.localisedYearlyPrice;
                                    return { value: t.chargeInterval, title: x(i, t.chargeInterval), subtext: $(t.chargeInterval, o), price: "special" === i ? ("Month" === t.chargeInterval ? a : o) : S({ price: a }), label: "Year" === t.chargeInterval && "special" !== i ? M(e) : null };
                                }),
                            [e, i],
                        ),
                        d = o.useCallback((e) => o.createElement(P, (0, a.Z)({ key: e.value, variant: i }, e)), [i]);
                    return o.createElement(l.Z, { style: T.selectionGroup }, o.createElement(n.Z, { horizontal: ["horizontal_gold", "horizontal_blue", "special", "horizontal_green"].includes(i), name: "interval-select", onChange: c, options: s, renderSelector: d, value: t }));
                },
                T = i.default.create((e) => ({ selectionGroup: { marginVertical: e.spaces.space16, gap: "40px" } }));
        },
        25591: (e, t, r) => {
            r.d(t, { Z: () => z });
            var a = r(202784),
                o = r(731708),
                l = r(392237),
                n = r(111677),
                i = r.n(n),
                c = r(4452),
                s = r(137070),
                d = r(731862),
                u = r(154003),
                p = r(685731),
                g = r(725405);
            const h = i().afd61c76,
                b = ({ interval: e, stripePriceConfig: t, tier: r }) => {
                    const o = (0, g.Z)();
                    a.useEffect(() => {
                        o.scribe({ element: "stripe-purchase-button", action: "impression" });
                    }, [o]);
                    const l = (0, s.Z)()[r].unhashed,
                        n = (0, p.Gi)(e, t?.productDetailsMap[r]?.prices)?.external_price_id,
                        i = a.useCallback(() => {
                            n && (o.scribe({ element: "stripe-purchase-button", action: "click" }), (0, c.jW)("make-purchase-with-stripe", { interval: e, tier: r, stripeProductId: l, stripePriceId: n }));
                        }, [e, r, n, l, o]);
                    return n ? a.createElement(u.ZP, { color: "whiteOnColor", onClick: i, size: "xLarge", style: m.button }, h) : null;
                },
                m = l.default.create((e) => ({ button: { backgroundImage: `\n  linear-gradient(90.38deg, \n  ${e.colors.blue500} 0.23%, \n  ${e.colors.blue600} 32.73%, \n  ${e.colors.blue500} 50.37%,\n  ${e.colors.blue500} 98.27%)\n` } })),
                f = i().aa0d60aa,
                y = i().f0ad5cc8,
                v = i().a0dc6e4c,
                P = i().jd8b2e66,
                w = i().ca784c0c,
                z = ({ buttonFontSize: e, buttonSize: t, customLabel: r, disclaimerRef: l, price: n, savePill: u, selectedInterval: p, selectedProduct: g, stripePriceConfig: h, styleOverrides: m, variant: z, withAnnualPriceMonthly: C, withStripePurchaseButton: I }) => {
                    const Z = (0, s.Z)(),
                        { productAppStoreID: E } = n || {},
                        S = a.useMemo(() => {
                            if (E || "apple" !== n?.paymentPlatform) {
                                if (n?.introductoryOffer) {
                                    const e = C ? n?.localisedMonthlyPrice : n?.localisedYearlyPrice,
                                        t = C ? n?.introductoryOffer?.localisedMonthlyPrice : n?.introductoryOffer?.localisedYearlyPrice;
                                    return a.createElement(i().I18NFormatMessage, { $i18n: "db11f87d", newPrice: t || "", interval: C ? f : y }, a.createElement(o.ZP, { style: k.strike }, i().aa5df29f({ oldPrice: e || "" })));
                                }
                                return r || (I ? w : P);
                            }
                            return v;
                        }, [C, n, r, I, E]),
                        _ = a.useMemo(() => {
                            if (C) {
                                const e = n?.localisedYearlyPrice,
                                    t = n?.introductoryOffer?.localisedYearlyPrice;
                                return a.createElement(i().I18NFormatMessage, { $i18n: "e4219e13", newPrice: t || "", interval: y }, a.createElement(o.ZP, { style: k.strike }, i().g1c4f7a1({ oldPrice: e || "" })));
                            }
                            return null;
                        }, [C, n]),
                        B = a.useCallback(() => {
                            "apple" === n?.paymentPlatform && E ? (0, c.jW)("make-purchase", { productAppStoreID: E }) : "stripe" === n?.paymentPlatform && p && g && n.productAppStoreID && (0, c.jW)("make-purchase-with-stripe", { interval: p, tier: g, stripeProductId: Z[g].unhashed, stripePriceId: n.productAppStoreID });
                        }, [n, E, p, g, Z]),
                        x = a.useMemo(() => (I && g && p ? a.createElement(b, { interval: p, stripePriceConfig: h, tier: g }) : null), [p, g, I, h]),
                        M = a.useMemo(() => "apple" === n?.paymentPlatform && !E, [n, E]);
                    return a.createElement(d.Z, { buttonFontSize: e, buttonSize: t, disabled: M, disclaimerRef: l, label: S, loading: !1, onClick: B, savePill: u, stripeButton: x, styleOverrides: m, subtext: _ || void 0, variant: z });
                },
                k = l.default.create((e) => ({ strike: { textDecorationLine: "line-through" }, stripePurchaseButton: { borderRadius: 16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-8b5aadea.f75694ba.js.map
