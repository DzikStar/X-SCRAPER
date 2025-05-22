"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-920f3364"],
    {
        192933: (e, t, r) => {
            r.d(t, { Z: () => F });
            var a = r(202784),
                n = r(174326),
                l = r(392237),
                o = r(332920),
                i = r.n(o),
                c = r(725405),
                s = r(285919),
                d = r(960844),
                u = r(325686),
                m = r(731708),
                p = r(530732),
                g = r(215337),
                f = r(19578),
                h = r(934912),
                y = r(30899),
                b = r(154003),
                E = r(711223);
            const w = i().i859a9d4,
                Z = ({ changeToTier: e, feature: t }) => {
                    return a.createElement(u.Z, { style: x.feature }, a.createElement(u.Z, { style: x.featureInner }, a.createElement(m.ZP, { size: "headline1", style: [x.emoji, t.iconColor && { color: l.default.theme.colors[t.iconColor] }] }, t.locked ? t?.icon : t?.emoji || t?.icon), a.createElement(u.Z, { style: x.text }, a.createElement(m.ZP, { weight: "bold" }, t.header), t.subtext ? a.createElement(m.ZP, { color: "gray700", size: "subtext1" }, t.subtext) : null), t.description ? ((r = t.header), (n = t.description), a.createElement(y.Z, { contentStyle: x.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(u.Z, { style: x.infoContainer }, a.createElement(m.ZP, { color: "text", size: "title4", style: x.infoDescription, weight: "heavy" }, r), a.createElement(m.ZP, { color: "gray700", size: "body", style: x.infoDescription }, n)), withArrow: !0 }, a.createElement(b.ZP, { "aria-label": w, icon: P, size: "xSmall", style: x.infoButton, type: "primaryText" }))) : null), t.cta ? a.createElement(b.ZP, { onClick: () => e(t.cta?.targetTier), size: "xSmall", type: "brandText" }, t.cta.label) : null);
                    var r, n;
                },
                x = l.default.create((e) => ({ feature: { width: "100%", paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, flexDirection: "row" }, featureInner: { paddingHorizontal: e.spaces.space20, flexDirection: "row", alignItems: "center", flex: 1 }, emoji: { marginEnd: e.spaces.space16, minWidth: 25 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray600 }, infoPopoverContent: { maxWidth: "2em" }, iconInfo: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 }, infoContainer: { padding: e.spaces.space24, paddingBottom: e.spaces.space48 }, infoDescription: { marginTop: e.spaces.space8 }, text: { flexShrink: 1, gap: e.spaces.space4 } })),
                P = a.createElement(E.default, { style: x.iconInfo });
            var v = r(985529);
            const C = (e, t) => e?.filter((e) => !t?.map((e) => e.header).includes(e.header)),
                k = i().dfc5f972,
                S = ({ content: e, hideTitle: t, prices: r, productCategory: n, productContent: o, referringPage: i, selectedInterval: c, selectedProduct: s, setSelectedProduct: d, setShowExtraFeatures: y, showExtraFeatures: b, withExtraFeatures: E, withFeatureFocus: w, withOfferCard: x, withUpsellTier: P }) => {
                    const S = (0, f.Z)(),
                        { gray0: I, gray50: T } = l.default.theme.colors,
                        _ = a.useRef(null);
                    a.useEffect(() => {
                        const { current: e } = _;
                        if (e)
                            if (b) {
                                const t = window?.visualViewport?.height,
                                    r = t - (S?.headerHeight || 0) - e.getBoundingClientRect().height;
                                window.scrollBy({ top: r, behavior: "smooth" });
                            } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }, [b, S]);
                    const F = a.useCallback(
                            (e) => {
                                e && (b && y(!1), d(e), window.scrollTo(0, 0));
                            },
                            [d, b, y],
                        ),
                        B = !!r.find((e) => e.introductoryOffer && e.productCategory === n)?.introductoryOffer,
                        D = i ? e.localContent.refererContent[i] : null,
                        H = w && i && !!D?.features;
                    return a.createElement(
                        a.Fragment,
                        null,
                        x ? a.createElement(v.Z, { content: e, prices: r, selectedProduct: n }) : null,
                        B || H ? (B ? null : a.createElement(u.Z, { style: z.featureFocusSection, testID: "feature_focus_section" }, a.createElement(u.Z, { style: z.featureHeadline, testID: "dynamic-header" }, a.createElement(m.ZP, { align: "center", size: "title2", style: z.title, weight: "heavy" }, D?.title), D?.subtitle ? a.createElement(m.ZP, { align: "center", style: z.description }, D.subtitle) : null), D?.features?.[0] ? a.createElement(u.Z, { style: z.featureFocusFeature }, a.createElement(Z, { changeToTier: F, feature: D?.features?.[0] })) : null, a.createElement(m.ZP, { align: "center", color: "gray700", style: z.muchMoreLabel, weight: "medium" }, k))) : a.createElement(h.Z, { content: e, fallbackHeader: o.header, referringPage: i }),
                        a.createElement(
                            u.Z,
                            { style: z.container, testID: `product-features-${n}` },
                            (H ? C(o.features, D?.features) : o.features)?.map((e, t) => a.createElement(Z, { changeToTier: F, feature: e, key: `feature_${t}` })),
                            P && o.upsellFeature ? a.createElement(p.Z, { onClick: () => F(o.upsellFeature?.targetTier), style: z.feature }, a.createElement(g.Z, { colors: [T, I], style: z.gradient }), a.createElement(u.Z, { style: z.featureInner }, a.createElement(m.ZP, { size: "headline1", style: z.emoji }, o.upsellFeature?.icon), a.createElement(m.ZP, { weight: "bold" }, o.upsellFeature.header))) : null,
                            E && o.extraFeatures
                                ? o.extraFeatures.map((e, t) =>
                                      a.createElement(
                                          a.Fragment,
                                          { key: t },
                                          e.label ? a.createElement(m.ZP, { align: "center", color: "gray700", style: z.extraFeaturesLabel, weight: "medium" }, e.label) : null,
                                          a.createElement(
                                              u.Z,
                                              { style: z.extraFeatures, testID: "extra-features" },
                                              (H ? C(e.features, D?.features) : e.features)?.map((e, r) => a.createElement(Z, { changeToTier: F, feature: e, key: `extra_feature_${t}_feautre_${r}` })),
                                          ),
                                      ),
                                  )
                                : null,
                        ),
                    );
                },
                z = l.default.create((e) => ({ container: { gap: e.spaces.space8, paddingHorizontal: e.spaces.space4 }, extraFeatures: { gap: e.spaces.space8 }, gradient: { position: "absolute", width: "100%", height: "100%", top: 0, borderRadius: e.borderRadii.medium }, title: { marginBottom: e.spaces.space16 }, extraFeaturesLabel: { marginVertical: e.spaces.space4 }, feature: { width: "100%", paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, flexDirection: "row" }, featureInner: { paddingHorizontal: e.spaces.space20, flexDirection: "row", alignItems: "center", flex: 1 }, emoji: { marginEnd: e.spaces.space16, minWidth: 25 }, featureHeadline: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space8 }, description: { textAlign: "center" }, featureFocusSection: { paddingHorizontal: e.spaces.space4 }, featureFocusFeature: { marginTop: e.spaces.space16 }, muchMoreLabel: { paddingVertical: e.spaces.space12 } })),
                I = i().i7fbacc4,
                T = ({ content: e, hideTitle: t, prices: r, productListLayout: l, products: o, referringPage: i, selectedInterval: u, selectedProduct: m, selectedProductIndex: p, setSelectedProduct: g, setShowAllFeaturesPage: f, setShowExtraFeatures: h, showExtraFeatures: y, withExtraFeatures: b, withFeatureFocus: E, withOfferCard: w, withUpsellTier: Z }) => {
                    const x = (0, c.Z)(),
                        P = a.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                if (1 === t && o?.[e].product_category) {
                                    const t = o?.[e].product_category;
                                    g(t), h(!1), window.scrollTo(0, 0), x.scribe({ component: "product_selector", element: t, action: "click", data: { referring_page: i ?? void 0 } });
                                }
                            },
                            [x, i, o, g, h],
                        ),
                        v = "V2" === l ? s.Z : "V3" === l ? d.Z : S;
                    return a.createElement(
                        n.Z,
                        { "aria-label": I, childrenStyle: [_.children, { alignItems: "V3" === l ? "center" : null }], navButtonStyle: _.navButtonStyle, onVisibleRangeChange: P, scrollToCenter: !0, showNavButtonsOnHover: !0, showOverflow: !0, style: _.carousel, visibleItemIndex: p, withScrollIntoView: !1 },
                        o?.map((n, l) => (n.product_category ? a.createElement(v, { content: e, hideTitle: t, key: l, prices: r, productCategory: n.product_category, productContent: e.localContent.productContent[n.product_category], referringPage: i, selectedInterval: u, selectedProduct: m, selectedProductIndex: p, setSelectedProduct: g, setShowAllFeaturesPage: f || (() => {}), setShowExtraFeatures: h, showExtraFeatures: y, withExtraFeatures: b, withFeatureFocus: E, withOfferCard: w, withUpsellTier: Z }) : null)),
                    );
                },
                _ = l.default.create((e) => ({ navButtonStyle: { top: 0, height: "100%", justifyContent: "start", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space8 }, children: { width: "100%", scrollSnapAlign: "center" }, carousel: { flexGrow: 1 } })),
                F = a.memo(T);
        },
        381214: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(202784),
                n = r(325686),
                l = r(67369),
                o = r(708852),
                i = r(30899),
                c = r(731708),
                s = r(154003),
                d = r(721266),
                u = r(392237),
                m = r(332920),
                p = r.n(m),
                g = r(837020),
                f = r(913973),
                h = r(711223);
            r(136728);
            const y = (e) => {
                    const t = [],
                        r = ((e) => {
                            const t = new Set();
                            return (
                                e.forEach((e) => {
                                    e.feature_buckets &&
                                        e.feature_buckets.buckets.forEach((e) => {
                                            t.add(e.title);
                                        });
                                }),
                                t
                            );
                        })(e);
                    return (
                        r.forEach((r) => {
                            const a = ((e, t) => {
                                    const r = new Set();
                                    return (
                                        e.forEach((e) => {
                                            e.feature_buckets?.buckets.find((e) => e.title === t)?.features.forEach((e) => r.add(e.title));
                                        }),
                                        r
                                    );
                                })(e, r),
                                n = ((e, t, r) => ({
                                    header: [t, ...e.map((e) => e.title ?? "")],
                                    rows: Array.from(r).map((r) => [
                                        r,
                                        ...e.map((e) => {
                                            const a = e.feature_buckets?.buckets?.find((e) => e.title === t),
                                                n = a?.features.find((e) => e.title === r);
                                            return "Checkmark" === n?.icon ? n : null;
                                        }),
                                    ]),
                                }))(e, r, a);
                            t.push(n);
                        }),
                        t
                    );
                },
                b = "compareTitle",
                E = p().i859a9d4,
                w = p().acfaf7a0,
                Z = ({ products: e }) => {
                    const t = (0, l.Mv)(),
                        r = (0, o.Gz)(),
                        u = a.useMemo(() => y(e), [e]),
                        m = t ? x.marginSmall : r ? x.marginLarge : x.marginMedium,
                        p = (e) => {
                            const t = e.find((e) => "object" == typeof e && e?.description);
                            if ("object" == typeof t && t) return a.createElement(i.Z, { contentStyle: x.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(n.Z, { style: x.infoContainer }, a.createElement(c.ZP, { size: "title4", weight: "medium" }, t.title), a.createElement(c.ZP, { color: "gray700", style: x.infoDescription }, t.description)) }, a.createElement(s.ZP, { "aria-label": E, icon: P, size: "xSmall", style: x.infoButton, type: "primaryText" }));
                        },
                        h = a.useCallback((e) => (null === e ? (t ? a.createElement(g.default, { styles: x.iconDivider }) : null) : "string" == typeof e ? a.createElement(c.ZP, null, e) : "object" == typeof e ? (e.variant ? a.createElement(n.Z, { style: x.cellVariant }, a.createElement(c.ZP, { color: "text" }, e.variant), p([e])) : a.createElement(f.default, { style: x.iconCheckmark })) : void 0), [t]),
                        Z = a.useMemo(() => ({ width: `${t ? 100 / e.length : 100 / (e.length + 1)}%` }), [e.length, t]);
                    return a.createElement(
                        n.Z,
                        { style: [x.table, m] },
                        a.createElement(c.ZP, { size: "title3", testID: b, weight: "bold" }, w),
                        u.map((e, r) =>
                            a.createElement(
                                n.Z,
                                { key: `table-section-${r}`, style: x.section },
                                ((e, r) =>
                                    a.createElement(
                                        a.Fragment,
                                        null,
                                        t ? a.createElement(n.Z, { style: x.row }, a.createElement(n.Z, { style: x.cell }, a.createElement(c.ZP, { size: "headline2", weight: "bold" }, e[0]))) : null,
                                        a.createElement(
                                            n.Z,
                                            { style: x.row },
                                            e.slice(t ? 1 : 0).map((e, t) => a.createElement(n.Z, { key: `table-header-${r}-col-${t}`, style: [x.cell, Z] }, a.createElement(c.ZP, { size: "headline2", weight: "bold" }, e))),
                                        ),
                                    ))(e.header, r),
                                a.createElement(d.Z, { size: "space1", style: x.spacer }),
                                ((e, r) =>
                                    e.map((e, l) => {
                                        const o = e.find((e) => "string" != typeof e && e?.variant && e?.variant.length > 0);
                                        return a.createElement(
                                            a.Fragment,
                                            { key: `table-section-${r}-row-${l}` },
                                            t ? a.createElement(n.Z, { style: x.row }, a.createElement(c.ZP, { color: "gray900" }, h(e[0])), o ? null : p(e)) : null,
                                            a.createElement(
                                                n.Z,
                                                { style: x.row },
                                                e.slice(t ? 1 : 0).map((i, s) => a.createElement(n.Z, { key: `table-section-${r}-row-${l}-cell-${s}`, style: [x.cell, Z] }, a.createElement(c.ZP, { color: "gray900" }, h(i)), 0 !== s || t || o ? null : p(e))),
                                            ),
                                            a.createElement(d.Z, { size: "space1", style: x.spacer }),
                                        );
                                    }))(e.rows, r),
                            ),
                        ),
                    );
                },
                x = u.default.create((e) => ({ marginSmall: { marginTop: e.spaces.space48 }, marginMedium: { marginTop: e.spaces.space72 }, marginLarge: { marginTop: e.spaces.space64 }, table: { width: "100%", maxWidth: "980px", paddingBottom: 300 * e.scaleMultiplier }, section: { marginTop: e.spaces.space32 }, row: { flexDirection: "row", paddingVertical: e.spaces.space8, alignItems: "center" }, cell: { alignItems: "center", flexDirection: "row" }, spacer: { backgroundColor: e.colors.gray50 }, iconInfo: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 }, iconCheckmark: { fontSize: e.fontSizes.headline2, color: e.colors.text }, iconDivider: { fontSize: e.fontSizes.body, color: e.colors.gray700 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 }, infoContainer: { padding: e.spaces.space24 }, infoDescription: { marginTop: e.spaces.space8 }, infoPopoverContent: { maxWidth: "2em" }, cellVariant: { alignItems: "center", flexDirection: "row" } })),
                P = a.createElement(h.default, { style: x.iconInfo }),
                v = a.memo(Z);
        },
        278637: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                l = r(280278),
                o = r(731708),
                i = r(392237),
                c = r(332920),
                s = r.n(c),
                d = r(392446);
            const u = s().g93586be,
                m = s().d073b644,
                p = s().a2f0728e,
                g = s().j4b4310e,
                f = ({ endsAtMsec: e }) => {
                    const [t] = (0, d.Z)(e);
                    return a.createElement(n.Z, { style: h.container }, a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.days), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, u)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.hours), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, m)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.minutes), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, p)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.seconds), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, g)));
                },
                h = i.default.create((e) => ({ container: { flexDirection: "row", borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray50 }, section: { alignItems: "center", flexDirection: "column", flexGrow: 1, padding: e.spaces.space16 } }));
        },
        392446: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784);
            const n = (e) => {
                    const t = e - Date.now();
                    return { days: Math.floor(t / 864e5), hours: Math.floor((t % 864e5) / 36e5), minutes: Math.floor((t % 36e5) / 6e4), seconds: Math.floor((t % 6e4) / 1e3) };
                },
                l = (e) => {
                    const [t, r] = a.useState(n(e)),
                        [l, o] = a.useState(0);
                    return (
                        a.useEffect(() => {
                            let t = null;
                            const a = () => {
                                const a = Date.now(),
                                    l = e - a;
                                o(l), l < 0 ? (clearInterval(t), r({ days: 0, hours: 0, minutes: 0, seconds: 0 })) : r(n(e));
                            };
                            return (
                                a(),
                                (t = setInterval(a, 1e3)),
                                () => {
                                    clearInterval(t);
                                }
                            );
                        }, [e]),
                        [t, l]
                    );
                };
        },
        690559: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(277660),
                l = r.n(n),
                o = r(731708),
                i = r(688715),
                c = r(332920),
                s = r.n(c),
                d = r(847579),
                u = r(725405),
                m = r(512923);
            const p = ({ disclaimerRef: e, freeTrialInfo: t, styleOverrides: r }) => {
                    const n = (0, u.Z)(),
                        c = l()(m.WL, e),
                        { disclaimerFontColor: p, disclaimerFontSize: g, withoutDisclaimerBorder: f } = r ?? {},
                        { disclaimer_cancel_url: h, disclaimer_cancel_url_text: y, disclaimer_text: b, disclaimer_url: E, disclaimer_url_text: w } = c,
                        Z = a.useMemo(() => ("string" == typeof b && b.includes("@#!") ? b.split("@#!") : new Array(2)), [b]),
                        x = a.useCallback(() => {
                            n.scribe({ action: "click", element: "terms_of_service" });
                        }, [n]);
                    return t ? a.createElement(d.Z, null, a.createElement(o.ZP, null, a.createElement(s().I18NFormatMessage, { $i18n: "bec92f3b", numberOfDays: t.metadata.free_trial_days || 14 }, a.createElement(o.ZP, { color: "text", link: (0, i.ju)("https://help.x.com/using-x/x-premium-trial-promotion"), onPress: x, weight: "medium", withUnderline: !0 }, s().af863ee9), a.createElement(o.ZP, { color: "text", link: E || (0, i.ju)("https://legal.x.com/purchaser-terms"), weight: "medium", withUnderline: !0 }, s().f5705987), a.createElement(o.ZP, { color: "text", link: h || (0, i.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"), onPress: x, weight: "medium", withUnderline: !0 }, y, s().h89dabac)))) : a.createElement(d.Z, { styleOverrides: { disclaimerFontSize: g, disclaimerFontColor: p }, withoutBorder: f }, 2 === Z.length ? a.createElement(a.Fragment, null, a.createElement(o.ZP, null, Z[0]), a.createElement(o.ZP, { color: p || "text", link: E || (0, i.ju)("https://legal.x.com/purchaser-terms"), onPress: x, weight: "medium", withUnderline: !0 }, w), a.createElement(o.ZP, null, Z[1])) : 3 === Z.length ? a.createElement(a.Fragment, null, a.createElement(o.ZP, null, Z[0]), a.createElement(o.ZP, { color: p || "text", link: E || (0, i.ju)("https://legal.x.com/purchaser-terms"), onPress: x, weight: "medium", withUnderline: !0 }, w), a.createElement(o.ZP, null, Z[1]), a.createElement(o.ZP, { color: p || "text", link: h || (0, i.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"), onPress: x, weight: "medium", withUnderline: !0 }, y), a.createElement(o.ZP, null, Z[2])) : null);
                },
                g = a.memo(p);
        },
        439607: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(325686),
                l = r(392237);
            const o = ({ activeIndex: e, totalDots: t = 3 }) =>
                    a.createElement(
                        n.Z,
                        { style: i.dotContainer },
                        Array.from({ length: t }).map((t, r) => a.createElement(n.Z, { key: r, style: [i.dot, r === e && i.dotActive] })),
                    ),
                i = l.default.create((e) => ({ dotContainer: { flexDirection: "row", justifyContent: "center" }, dot: { width: 7, height: 7, borderRadius: 5, marginHorizontal: 4, backgroundColor: e.colors.gray500 }, dotActive: { backgroundColor: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.whiteOnColor } }));
        },
        934912: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(325686),
                l = r(731708),
                o = r(392237);
            const i = ["grok", "get_verified", "verification_reason_dialog", "analytics", "ads_rev_share", "monetization_promo_page", "creator_subs", "radar", "reply_boost", "bookmark", "offline_videos"],
                c = (e, t, r = !1) => (t ? ({ darkMode: { color: r ? o.default.theme.colors.alwaysDarkGray700 : o.default.theme.colors.white, textAlign: "start", fontWeight: r ? null : o.default.theme.fontWeights.medium, fontSize: r ? null : o.default.theme.fontSizes.title4, marginBottom: r ? null : o.default.theme.spaces.space12 } }[t] ?? void 0) : void 0),
                s = ({ content: e, fallbackDescription: t, fallbackHeader: r, referringPage: s, variant: u, withoutDescription: m }) => (i.find((e) => s?.includes(e)) ? a.createElement(n.Z, { style: d.featureHeadline, testID: "dynamic-header" }, a.createElement(l.ZP, { size: "title3", style: [d.title, c(o.default.theme, u)], weight: "heavy" }, e.apiContent?.header?.title), !m && a.createElement(l.ZP, { style: [d.description, c(o.default.theme, u, !0)] }, e.apiContent?.header?.description)) : r ? a.createElement(n.Z, { style: d.featureHeadline, testID: "dynamic-header" }, a.createElement(l.ZP, { align: "center", size: "title2", style: [d.title, c(o.default.theme, u)], weight: "heavy" }, r), t && a.createElement(l.ZP, { style: [d.description, c(o.default.theme, u, !0)] }, t)) : null),
                d = o.default.create((e) => ({ featureHeadline: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space8 }, title: { textAlign: "center", marginBottom: e.spaces.space8 }, description: { textAlign: "center" } }));
        },
        867754: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                n = r(202784),
                l = r(325686),
                o = r(67369),
                i = r(708852),
                c = r(731708),
                s = r(392237),
                d = r(332920),
                u = r.n(d),
                m = r(323265),
                p = r(278637);
            const g = u().e1606e52,
                f = ({ content: e, header: t, isMobile: r, isTierSwitching: s, offerContent: d, offerEndsAtMsec: f, renderOfferContent: h }) => {
                    const b = (0, o.Mv)(),
                        E = m.ZP.isWebView(),
                        w = (0, i.Gz)(),
                        Z = b ? y.marginSmall : w ? y.marginLarge : y.marginMedium,
                        x = b ? { size: "title3", style: y.titleSmall } : w ? { style: y.titleLarge } : { size: "title1", style: y.titleMedium },
                        P = b ? "body" : w ? "headline1" : "headline2",
                        v = b ? y.countdownSmall : w ? y.countdownLarge : y.countdownMedium;
                    return n.createElement(l.Z, null, n.createElement(l.Z, { style: [y.header, Z, y.container] }, n.createElement(c.ZP, (0, a.Z)({}, x, { weight: "bold" }), s ? g : h ? d.title : t.title), n.createElement(c.ZP, { color: "gray900", size: P }, h ? null : t.description), h && f ? n.createElement(l.Z, { style: [y.countdown, v] }, n.createElement(p.Z, { endsAtMsec: f })) : null, h || E ? null : n.createElement(c.ZP, { color: "gray900", size: P, style: y.voLink }, n.createElement(u().I18NFormatMessage, { $i18n: "c57cd3a3" }, n.createElement(c.ZP, { color: "text", link: "/i/verified-orgs-signup", underlineWeight: "heavy", weight: "bold", withUnderline: !0 }, u().d2f2b91a)))));
                },
                h = n.memo(f),
                y = s.default.create((e) => ({ container: { alignItems: "center", flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto", paddingHorizontal: e.spaces.space16 }, marginSmall: { marginTop: e.spaces.space56 }, marginMedium: { marginTop: e.spaces.space48 }, marginLarge: { marginTop: 144 * e.scaleMultiplier }, header: { textAlign: "center", maxWidth: 900, alignItems: "center", zIndex: 1, top: 20 }, titleSmall: { marginBottom: e.spaces.space16 }, titleMedium: { marginBottom: e.spaces.space16, fontSize: 54 * e.scaleMultiplier, lineHeight: 60 * e.scaleMultiplier }, titleLarge: { marginBottom: e.spaces.space24, fontSize: 64 * e.scaleMultiplier, lineHeight: 70 * e.scaleMultiplier }, countdown: { maxWidth: "500px", width: "100%" }, countdownSmall: { marginTop: e.spaces.space16 }, countdownMedium: { marginTop: e.spaces.space48 }, countdownLarge: { marginTop: e.spaces.space48 }, voLink: { marginTop: e.spaces.space8 } }));
        },
        985529: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                l = r(731708),
                o = r(392237),
                i = r(332920),
                c = r.n(i),
                s = r(952793),
                d = r(968831),
                u = r(789769);
            const m = c().h3629783,
                p = ({ content: e, prices: t, selectedProduct: r }) => {
                    const o = t.find((e) => e.introductoryOffer && e.productCategory === r)?.introductoryOffer,
                        i = (0, s.wW)("premium_webview_paywall_offer_image_url"),
                        c = i.length > 0,
                        { cardSubtitle: p, cardTitle: f } = (0, d.Z)({ content: e });
                    if (!o?.percentageSaved) return null;
                    const h = { backgroundImage: `url(${i})`, backgroundSize: "cover" },
                        y = new Date(parseInt(o.endsAtMs, 10)),
                        b = m(y);
                    return a.createElement(n.Z, { style: [g.card, c ? h : null] }, a.createElement(l.ZP, { align: "center", color: "whiteOnColor", size: "headline2", weight: "bold" }, f?.({ percentage: o?.percentageSaved, tier: "Premium", plan: u.Z.Year })), a.createElement(l.ZP, { align: "center", color: "whiteOnColor", size: "subtext1" }, p?.({ date: b })));
                },
                g = o.default.create((e) => ({ card: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, gap: e.spaces.space4, backgroundColor: e.colors.alwaysBlack, marginBottom: e.spaces.space8 }, image: {} }));
        },
        330463: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                l = r(154003),
                o = r(731708),
                i = r(392237),
                c = r(332920),
                s = r.n(c),
                d = r(894966),
                u = r(913973),
                m = r(627706);
            const p = s().acfaf7a0,
                g = s().b601cfbb,
                f = ({ catalogItems: e, content: t, selectedInterval: r, selectedProduct: i, setShowAllFeaturesPage: c, stripePriceConfig: s, withStripePurchaseButton: f }) => {
                    const y = t.localContent.productContent,
                        b = t.apiContent?.products?.map((e) => e.product_category);
                    return a.createElement(
                        n.Z,
                        { style: h.container },
                        a.createElement(
                            n.Z,
                            { style: h.header },
                            a.createElement(l.ZP, {
                                icon: a.createElement(d.default, null),
                                onPress: () => {
                                    c(!1);
                                },
                                style: h.dismissButton,
                            }),
                            a.createElement(o.ZP, { style: h.title }, p),
                        ),
                        b?.map((r) => {
                            if (r) {
                                const l = y[r],
                                    i = e.filter((e) => e.productCategory === r),
                                    c = i.find((e) => "Month" === e.chargeInterval),
                                    d = c ? g({ price: c.localisedMonthlyPrice || "undefined" }) : "Currently unavailable";
                                return a.createElement(
                                    n.Z,
                                    { key: r, style: h.section },
                                    a.createElement(n.Z, { style: h.separator }),
                                    a.createElement(o.ZP, { style: h.sectionTitle }, l.productName),
                                    y[r].featureAddOnLabel && a.createElement(o.ZP, { style: h.premiumFeatureUpgrades }, y[r].featureAddOnLabel),
                                    l.allFeatureHeaders?.map((e, t) => a.createElement(n.Z, { key: t, style: h.featureRow }, a.createElement(o.ZP, { style: h.featureText }, e), a.createElement(u.default, { style: h.checkmark }))),
                                    a.createElement(n.Z, { style: h.buttonContainer }, a.createElement(m.Z, { catalogItemsForProduct: i, content: t, label: d, selectedProduct: r, stripePriceConfig: s, withStripePurchaseButton: f })),
                                );
                            }
                        }),
                    );
                },
                h = i.default.create((e) => ({ container: { flex: 1, paddingHorizontal: e.spaces.space24, paddingTop: e.spaces.space16, marginTop: e.spaces.space20, marginBottom: e.spaces.space4, position: "relative" }, dismissButton: { border: "transparent", start: -8 }, header: { flexDirection: "row", alignItems: "center" }, separator: { borderBottomColor: e.colors.gray200, borderBottomWidth: 1, marginBottom: e.spaces.space12 }, title: { fontSize: e.fontSizes.headline1, fontWeight: "700", lineHeight: e.spaces.space24 }, section: { marginBottom: e.spaces.space8 }, sectionTitle: { fontSize: e.fontSizes.headline2, fontWeight: "700", marginBottom: e.spaces.space8 }, featureRow: { flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space12 }, featureText: { fontSize: e.fontSizes.body, flex: 1, fontWeight: "400" }, premiumFeatureUpgrades: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700, marginBottom: e.spaces.space8 }, checkmark: { color: e.colors.green500, marginStart: e.spaces.space8, fontSize: e.fontSizes.body, fontWeight: "bold" }, buttonContainer: { marginVertical: e.spaces.space4 } }));
        },
        632396: (e, t, r) => {
            r.d(t, { Z: () => B });
            var a = r(202784),
                n = r(174326),
                l = r(392237),
                o = r(332920),
                i = r.n(o),
                c = r(725405),
                s = r(325686),
                d = r(277660),
                u = r.n(d),
                m = r(731708),
                p = r(30899),
                g = r(154003),
                f = r(868634),
                h = r(711223),
                y = r(562041),
                b = r(548797),
                E = r(498514),
                w = r(512923),
                Z = r(985529);
            const x = i().be103b84,
                P = i().i859a9d4,
                v = i().c9cc122b,
                C = i().bff35771,
                k = ({ dismiss: e, feature: t }) => {
                    const { ref: r } = (0, y.G)(e);
                    return a.createElement(s.Z, { ref: r, style: S.infoContainer }, a.createElement(m.ZP, { size: "title4", weight: "medium" }, t.title), a.createElement(m.ZP, { color: "gray700", style: S.infoDescription }, t.description));
                },
                S = l.default.create((e) => ({ carouselHeader: { paddingHorizontal: e.spaces.space48, paddingVertical: e.spaces.space12, borderRadius: e.borderRadii.large, position: "sticky", justifyContent: "center", marginVertical: e.spaces.space8, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: e.colors.gray50, flexDirection: "row" }, carouselItem: { width: "100%", height: "100%", flexGrow: 1, display: "flex", flexDirection: "column" }, activeLabel: { marginStart: e.spaces.space8 }, featureBucketFeatureTextContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, variantText: { maxWidth: "60%", textAlign: "end" }, featureCard: { paddingHorizontal: e.spaces.space24, paddingTop: e.spaces.space20, paddingBottom: e.spaces.space8, marginVertical: e.spaces.space8, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large }, featureCardTitle: { marginBottom: e.spaces.space12 }, featureHeadlineContainer: { display: "flex", flexDirection: "row", marginBottom: e.spaces.space8 }, iconGrey: { color: e.colors.gray700 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 }, infoContainer: { padding: e.spaces.space24 }, infoDescription: { marginTop: e.spaces.space8 }, infoPopoverContent: { paddingVertical: e.spaces.space24, maxWidth: "2em" }, checkmarkIcon: { color: e.colors.green500 } })),
                z = a.createElement(h.default, { style: S.iconGrey }),
                I = ({ activeSubscription: e, content: t, index: r, isTargettedUpsellFlow: n, prices: l, productRef: o, productsLength: i, selectedProduct: c }) => {
                    const d = u()(w.oD, o),
                        h = d.product_category === c;
                    let y = `premium-product-${d.product_category || ""}`;
                    h && (y += "-selected");
                    const I = "active" === (0, b.yv)({ activeSubscription: e, tier: d.product_category }),
                        T = a.useCallback((e) => [S.carouselHeader, e ? { backgroundImage: `url(${e})` } : null], []),
                        _ = a.useCallback(
                            (e, t) => {
                                const r = (0, E.U)(e.icon),
                                    n = "LockStroke" === e.icon,
                                    l = "Checkmark" === e.icon,
                                    o = n ? C({ feature: e.title, title: d.title }) : v({ feature: e.title, title: d.title }),
                                    i = [l && S.checkmarkIcon, n && S.iconGrey];
                                return a.createElement(s.Z, { "aria-label": o, focusable: !0, key: t, role: "text", style: S.featureHeadlineContainer }, a.createElement(s.Z, { style: S.featureBucketFeatureTextContainer }, a.createElement(m.ZP, { color: n ? "gray700" : "text", size: "body" }, e.title), e.description ? a.createElement(p.Z, { contentStyle: S.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: (t) => a.createElement(k, { dismiss: t, feature: e }) }, a.createElement(g.ZP, { "aria-label": P, icon: z, size: "xSmall", style: S.infoButton, testID: `feature_info_${t}`, type: "primaryText" })) : null), null !== r && null === e.variant ? a.createElement(r, { style: i }) : a.createElement(m.ZP, { style: S.variantText }, e.variant));
                            },
                            [d.title],
                        ),
                        F = a.useCallback(
                            (e) =>
                                a.createElement(
                                    s.Z,
                                    null,
                                    e?.feature_buckets?.buckets.map((e, t) => {
                                        const r = e?.features?.length > 0;
                                        return a.createElement(a.Fragment, { key: t }, a.createElement(s.Z, { style: S.featureCard }, a.createElement(m.ZP, { size: "headline2", style: S.featureCardTitle, weight: "bold" }, e.title), r ? e.features?.map(_) : null));
                                    }),
                                ),
                            [_],
                        ),
                        B = a.useMemo(() => (0 === r ? (3 === i ? { paddingStart: 24 } : { paddingStart: 24, paddingEnd: 16 }) : r === i - 1 ? (3 === i ? { paddingEnd: 24 } : { paddingEnd: 24, paddingStart: 16 }) : { paddingHorizontal: 16 }), [r, i]);
                    return a.createElement(s.Z, { key: `product-${r}`, style: [S.carouselItem, B], testID: y }, n && 1 === i ? null : a.createElement(s.Z, { style: T(d.image_url) }, a.createElement(m.ZP, { align: "center", color: "white", size: "headline2", weight: "medium" }, d.title), I ? a.createElement(f.ZP, { style: S.activeLabel, type: "subscriptionActive" }, x) : null), a.createElement(s.Z, null, a.createElement(Z.Z, { content: t, prices: l, selectedProduct: d.product_category })), F(d));
                },
                T = i().i7fbacc4,
                _ = ({ activeSubscription: e, content: t, isTargettedUpsellFlow: r, prices: l, products: o, referringPage: i, selectedProduct: s, selectedProductIndex: d, setSelectedProduct: u }) => {
                    const m = (0, c.Z)(),
                        p = a.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                if (1 === t) {
                                    const t = o?.[e].product_category || "BlueVerified";
                                    u(t), m.scribe({ component: "product_selector", element: t, action: "click", data: { referring_page: i ?? void 0 } });
                                }
                            },
                            [m, i, o, u],
                        );
                    return a.createElement(
                        n.Z,
                        { "aria-label": T, childrenStyle: F.children, navButtonStyle: F.navButtonStyle, onVisibleRangeChange: p, scrollToCenter: !0, showNavButtonsOnHover: !0, showOverflow: !0, visibleItemIndex: d, withScrollIntoView: !1 },
                        o?.map((n, i) => a.createElement(I, { activeSubscription: e, content: t, index: i, isTargettedUpsellFlow: r, key: i, prices: l, productRef: n, productsLength: o.length, selectedProduct: s })),
                    );
                },
                F = l.default.create((e) => ({ navButtonStyle: { top: 0, height: "100%", justifyContent: "start", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space8 }, children: { width: "93%", scrollSnapAlign: "center" } })),
                B = a.memo(_);
        },
        145278: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(325686),
                l = r(392237),
                o = r(731708),
                i = r(154003),
                c = r(332920),
                s = r.n(c),
                d = r(58399);
            const u = s().j8d53b64,
                m = (e, t, r = !1) => (t ? ({ condensed: { fontWeight: r ? l.default.theme.fontWeights.regular : l.default.theme.fontWeights.medium } }[t] ?? void 0) : void 0),
                p = (e, t) => (t ? ({ condensed: { width: "95%" } }[t] ?? void 0) : void 0),
                g = ({ productCategory: e, productContent: t, setShowAllFeaturesPage: r, variant: c }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            n.Z,
                            { style: [f.featureContainer, p(l.default.theme, c)], testID: `product-features-${e}` },
                            t.features.map((e, t) => a.createElement(n.Z, { key: `feature_${t}`, style: f.feature, testID: `feature_${t}` }, a.createElement(o.ZP, { size: "headline1", style: f.icon }, e?.icon), a.createElement(n.Z, { style: f.textContainer }, a.createElement(o.ZP, { style: [f.heading, m(l.default.theme, c)], testID: "feature-header", weight: "bold" }, e.header), e.description && a.createElement(o.ZP, { style: [f.description, m(l.default.theme, c, !0)], testID: "feature-description" }, e.description)))),
                        ),
                        a.createElement(
                            n.Z,
                            { style: p(l.default.theme, c) },
                            a.createElement(
                                i.ZP,
                                {
                                    onPress: () => {
                                        r(!0);
                                    },
                                    style: f.benefitsButton,
                                    type: "primaryOutlined",
                                },
                                a.createElement(n.Z, { style: f.buttonContent }, a.createElement(o.ZP, { style: f.buttonText }, u), a.createElement(d.default, { style: f.arrowIcon })),
                            ),
                        ),
                    ),
                f = l.default.create((e) => ({ featureContainer: { gap: e.spaces.space8, marginTop: e.spaces.space12, width: "100%", paddingHorizontal: l.default.theme.spaces.space20 }, feature: { width: "100%", flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space8 }, icon: { maxWidth: 20 }, textContainer: { flexDirection: "column", flexShrink: 1, marginStart: e.spaces.space20, paddingEnd: e.spaces.space4 }, heading: { marginBottom: e.spaces.space2, fontSize: e.fontSizes.body }, description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, benefitsButton: { width: "100%", alignItems: "flex-start", marginTop: e.spaces.space20, marginBottom: e.spaces.space36, borderWidth: 0, borderBottomWidth: 0, borderColor: "transparent" }, buttonContent: { flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", paddingHorizontal: l.default.theme.spaces.space4 }, buttonText: { fontSize: e.fontSizes.body, fontWeight: "600", color: e.colors.gray1000, flex: 1, textAlign: "left" }, arrowIcon: { fontSize: 16, color: e.colors.gray500 } }));
        },
        612450: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(136728);
            var a = r(202784),
                n = r(392237),
                l = r(507651);
            const o = ({ onChange: e, primaryColor: t, products: r, selectedProduct: n, setSelectedProduct: o }) => {
                    const c = a.useMemo(() => {
                        const a = [];
                        return (
                            r?.forEach((r) => {
                                r.product_category &&
                                    a.push({
                                        key: r.product_category,
                                        label: r.title,
                                        isActive: () => r.product_category === n,
                                        onClick: () => {
                                            e?.(), window.scrollTo(0, 0), r.product_category && o(r.product_category);
                                        },
                                        color: "gold" === t ? "gold100" : "primary",
                                    });
                            }),
                            a
                        );
                    }, [r, n, o, t, e]);
                    return a.createElement(l.Z, { links: c, style: i.tabs });
                },
                i = n.default.create((e) => ({ tabs: { border: "none" } }));
        },
        731862: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(807896),
                n = r(202784),
                l = r(325686),
                o = r(392237),
                i = r(154003),
                c = r(167630),
                s = r(731708),
                d = r(690559);
            const u = (e, t) => (t ? ({ blue: { backgroundImage: `\n            linear-gradient(90.38deg, \n            ${e.colors.blue500} 0.23%, \n            ${e.colors.blue600} 32.73%, \n            ${e.colors.blue500} 50.37%,\n            ${e.colors.blue500} 98.27%)\n          ` }, gold: { backgroundImage: `\n            linear-gradient(90.38deg, \n            ${e.colors.gold50} 0.23%, \n            ${e.colors.gold0} 32.73%, \n            ${e.colors.gold50} 50.37%,\n            ${e.colors.gold100} 98.27%)\n          ` }, special: { borderRadius: 16 }, leftAligned: { borderRadius: o.default.theme.spaces.space12 } }[t] ?? void 0) : void 0),
                m = (e) => (e ? ({ blue: "whiteOnColor", gold: "alwaysBlack", special: void 0, leftAligned: void 0 }[e] ?? void 0) : void 0),
                p = (e) => (e ? { blue: void 0, gold: void 0, special: "primaryFilled", leftAligned: "primaryFilled" }[e] : "primaryFilled"),
                g = ({ buttonFontSize: e, buttonSize: t, disabled: r, disclaimerRef: g, label: h, loading: y, onClick: b, savePill: E, stripeButton: w, styleOverrides: Z, subtext: x, variant: P }) => {
                    const v = n.useCallback(() => {
                            b();
                        }, [b]),
                        { disclaimerFontColor: C, disclaimerFontSize: k, marginBottom: S, withoutDisclaimerBorder: z } = Z ?? {},
                        I = S ? o.default.theme.spaces[S] : null;
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { style: [f.buttonWrapper, I && { marginBottom: I }] }, E, n.createElement(i.ZP, (0, a.Z)({}, "leftAligned" === P ? { alignContent: "left" } : {}, { allowTextWrap: !0, color: m(P), disabled: r, onClick: v, size: t || "xLarge", style: [u(o.default.theme, P), f.button], textSizeOverride: e || "headline2", type: p(P) }), y ? n.createElement(c.Z, null) : h), w ? n.createElement(l.Z, { style: f.stripeButton }, w) : null, x ? n.createElement(s.ZP, { align: "center", size: "subtext2", style: f.subtext, testID: "purchase-button-subtext" }, x) : null), g ? n.createElement(l.Z, null, n.createElement(d.Z, { disclaimerRef: g, freeTrialInfo: null, styleOverrides: { disclaimerFontSize: k, disclaimerFontColor: C, withoutDisclaimerBorder: z } })) : null);
                },
                f = o.default.create((e) => ({ buttonWrapper: { marginBottom: e.spaces.space16, position: "relative" }, button: { border: "none" }, subtext: { marginTop: e.spaces.space4 }, stripeButton: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-920f3364.126ba8ca.js.map
