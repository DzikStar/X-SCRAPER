"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-a2dee9c7"],
    {
        427369: (e, l, a) => {
            a.d(l, { Z: () => _ });
            var n,
                r,
                t,
                i,
                s,
                u,
                o,
                d,
                c,
                g,
                m,
                p,
                k,
                y,
                f,
                F,
                P,
                b = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "referringPage" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PremiumContentQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { fields: [{ kind: "Variable", name: "referring_page", variableName: "referringPage" }], kind: "ObjectValue", name: "view" },
                                ]),
                                concreteType: "TwitterBlueMarketingPageConfig",
                                kind: "LinkedField",
                                name: "blue_marketing_page_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), (p = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [i, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "badge", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), i, (o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }), (c = { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }), i, o, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_product" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [i, o, (k = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_header" }], storageKey: null },
                                    (y = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCard", kind: "LinkedField", name: "card", plural: !1, selections: [i, o, u, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCardItemBadge", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }], storageKey: null }], storageKey: null }),
                                    (f = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [i, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [s, u, i, o, d, c, g, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [m, i, o], storageKey: null }], storageKey: null }], storageKey: null }),
                                    (F = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarousel", kind: "LinkedField", name: "carousel", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarouselItem", kind: "LinkedField", name: "items", plural: !0, selections: [u, { alias: null, args: null, kind: "ScalarField", name: "headline", storageKey: null }, i, o], storageKey: null }], storageKey: null }),
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "PremiumContentQuery_disclaimer" }, (P = { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null })], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "PremiumContentQuery", selections: [{ alias: null, args: r, concreteType: "TwitterBlueMarketingPageConfig", kind: "LinkedField", name: "blue_marketing_page_config", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [t, i, p, u, o, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [o, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [i, o, m], storageKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [i, o, k], storageKey: null }, y, f, F, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null }, P, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null }], storageKey: null }], storageKey: null }] },
                    params: { id: "XiSXQPFu8S8e_TwAC0AOTw", metadata: {}, name: "PremiumContentQuery", operationKind: "query", text: null },
                };
            b.hash = "6e8667466f84f7f3a126460c56847b74";
            const _ = b;
        },
        391416: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_disclaimer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageSubscribeButton",
                abstractKey: null,
                hash: "92bde70cde3c2bc74e3a06d1ad582ad3",
            };
            const r = n;
        },
        461904: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_header",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageHeader",
                abstractKey: null,
                hash: "f469778f3ae5649dffcafbaae5f8c124",
            };
            const r = n;
        },
        553659: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                r,
                t,
                i = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PremiumContentQuery_product", selections: [{ alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [r, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [n, r, (t = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null })], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [n, r, t, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "TwitterBlueMarketingPageProduct", abstractKey: null };
            i.hash = "03d9bfe21a2a9a527aeb7d6ca79c64bb";
            const s = i;
        },
        310456: (e, l, a) => {
            a.d(l, { p: () => n });
            const n = Object.freeze({ Advertising: "Advertising", BlueVerified: "BlueVerified", BlueVerifiedPlus: "BlueVerifiedPlus", Chirps: "Chirps", Coins: "Coins", OneDollar: "OneDollar", OneDollarSubscription: "OneDollarSubscription", PremiumBasic: "PremiumBasic", PremiumGift: "PremiumGift", PremiumPlusGift: "PremiumPlusGift", QuickFreeTrial: "QuickFreeTrial", QuickPromoteBudget: "QuickPromoteBudget", Seeds: "Seeds", Spaces: "Spaces", Subscriptions: "Subscriptions", SuperFollows: "SuperFollows", SuperLikes: "SuperLikes", VerifiedOrganizations: "VerifiedOrganizations", VerifiedOrganizationsBasic: "VerifiedOrganizationsBasic" });
        },
        225258: (e, l, a) => {
            a.d(l, { Z: () => r });
            const n = window?.location?.host ? `https://${window?.location?.host}` : "https://www.x.com",
                r = ({ apiClient: e, featureSwitches: l }) => ({
                    postConversion(l, a, r, t = {}) {
                        const i = { conversions: [{ basePixel: l, eventPixel: a, twclid: r }] };
                        return e.postUnversioned("/i/capi", i, { ...t, "content-type": "application/json" }, n).then((e) => e.data);
                    },
                });
        },
        507651: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n = a(807896),
                r = a(202784),
                t = a(107267),
                i = a(403556),
                s = a(791632);
            const u = (e) => {
                    const l = (0, t.useHistory)();
                    return r.createElement(i.Z, (0, n.Z)({}, e, { isCompact: (0, s.HD)(l) }));
                },
                o = r.memo(u);
        },
        847579: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                t = a(731708);
            const i = a(392237).default.create((e) => ({ positionRelative: { position: "relative" }, termsFullWidth: { width: "100%" }, termsOfService: { flexDirection: "row", marginHorizontal: "auto", textAlign: "center" }, termsBorder: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium } })),
                s = ({ children: e, styleOverrides: l, withoutBorder: a }) => {
                    const { disclaimerFontColor: s, disclaimerFontSize: u } = l ?? {};
                    return n.createElement(r.Z, { style: [i.termsOfService, i.positionRelative, i.termsFullWidth, a ? null : i.termsBorder], testID: "terms_disclaimer" }, n.createElement(t.ZP, { align: "left", color: s || "gray900", size: u || "subtext2" }, e));
                };
        },
        292546: (e, l, a) => {
            a.d(l, { Z: () => t });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                r = a(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    l = (0, r.useHistory)(),
                    [a, t] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const i = n.useCallback(
                    (n, r) => {
                        const t = new URLSearchParams(a);
                        t.set(n, r), l.push(`${e.pathname}?${t.toString()}`);
                    },
                    [l, e.pathname, a],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        562041: (e, l, a) => {
            a.d(l, { G: () => o });
            var n = a(202784),
                r = a(400752),
                t = a(565058),
                i = a(708852),
                s = a(403808),
                u = a(811322);
            function o(e) {
                const l = (0, s.r)(e),
                    a = (0, i.tj)(),
                    t = (0, r.b9)(d(l)),
                    u = (0, r.b9)(c);
                return n.useEffect(() => () => u(), [u]), { ref: a ? void 0 : t };
            }
            const d = (0, u.X)((e) =>
                    (0, t.cn)(null, (l, a, n) => {
                        const r = n?.parentElement;
                        if (r && r instanceof HTMLElement) {
                            a(c);
                            const l = a(m(e), r);
                            a(g, { fn: l });
                        }
                    }),
                ),
                c = (0, t.cn)(null, (e, l) => {
                    l(g, (e) => {
                        e && e.fn();
                    });
                }),
                g = (0, t.cn)(),
                m = (0, u.X)((e) =>
                    (0, t.cn)(null, (l, a, n) => {
                        let r = null,
                            t = null,
                            i = null,
                            s = null;
                        function u(e) {
                            const { touches: l } = e;
                            if (1 !== l.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== n.scrollTop) return;
                            const [a] = l;
                            r = a.clientY;
                        }
                        function o(e) {
                            if (null === r) return;
                            const { touches: l } = e;
                            if (0 !== n.scrollTop) return void c();
                            const [a] = l;
                            null !== t && (s = a.clientY > t), (t = a.clientY);
                            const u = a.clientY - r;
                            e.preventDefault(), u > 0 ? ((i = u), (n.style.transform = `translateY(${u}px)`)) : ((i = 0), (n.style.transform = ""));
                        }
                        function d(l) {
                            if (s && i) {
                                if ("animate" in n) {
                                    n.animate([{ transform: `translateY(${i}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                n.style.transform = "translateY(100%)";
                            } else i && ("animate" in n && n.animate([{ transform: `translateY(${i}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (n.style.transform = ""));
                            c();
                        }
                        function c() {
                            (r = null), (t = null), (s = null), (i = null);
                        }
                        return (
                            n.addEventListener("touchstart", u),
                            n.addEventListener("touchmove", o),
                            n.addEventListener("touchend", d),
                            () => {
                                n.removeEventListener("touchstart", u), n.removeEventListener("touchmove", o), n.removeEventListener("touchend", d);
                            }
                        );
                    }),
                );
        },
        488645: (e, l, a) => {
            a.d(l, { q: () => t });
            var n = a(225258),
                r = a(917799);
            const t =
                    (e, l, a, t, s) =>
                    async (u, o, { api: d, userPersistence: c }) => {
                        const g = await i(c, a, t, s);
                        return g ? (0, r.Vg)(u, { params: { basePixel: e, eventPixel: l, twclid: g }, request: ({ basePixel: e, eventPixel: l, twclid: a } = {}, r) => d.withEndpoint(n.Z).postConversion(e, l, a, r) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                i = async (e, l, a, n) => {
                    let r = l;
                    if (n && r) await e.set(a, { twclid: r });
                    else {
                        const l = await e.get(a, 1728e5);
                        l && "string" == typeof l.twclid && ((r = l.twclid), await e.delete(a));
                    }
                    return r;
                };
        },
        757771: (e, l, a) => {
            e.exports = a.p + "V3GrokDark.c3fb24fa.png";
        },
        822669: (e, l, a) => {
            e.exports = a.p + "V3GrokLight.3795881a.png";
        },
        249202: (e, l, a) => {
            e.exports = a.p + "V3PremiumAdsRemovedDark.cb6948fa.png";
        },
        748234: (e, l, a) => {
            e.exports = a.p + "V3PremiumAdsRemovedLight.82fef29a.png";
        },
        837835: (e, l, a) => {
            e.exports = a.p + "V3PremiumPlusAdsRemoved.c93c1e1a.png";
        },
        951737: (e, l, a) => {
            e.exports = a.p + "V3PremiumPlusReplyBoostDark.45eb567a.png";
        },
        872211: (e, l, a) => {
            e.exports = a.p + "V3PremiumPlusReplyBoostLight.4fa2ffba.png";
        },
        468573: (e, l, a) => {
            e.exports = a.p + "V3PremiumReplyBoostDark.136e0eea.png";
        },
        809369: (e, l, a) => {
            e.exports = a.p + "V3PremiumReplyBoostLight.7b92650a.png";
        },
        966299: (e, l, a) => {
            e.exports = a.p + "black_hole.341c6f7a.png";
        },
        590021: (e, l, a) => {
            e.exports = a.p + "grok_logo_black.9a6a7f1a.png";
        },
        195811: (e, l, a) => {
            e.exports = a.p + "grok_logo_gray.7c81b50a.png";
        },
        605879: (e, l, a) => {
            e.exports = a.p + "premiumAdsRemovedDark.71a87bea.png";
        },
        70375: (e, l, a) => {
            e.exports = a.p + "premiumAdsRemovedLight.491b9f3a.png";
        },
        656415: (e, l, a) => {
            e.exports = a.p + "premiumBoostedReplyDark.bfc42fca.png";
        },
        269541: (e, l, a) => {
            e.exports = a.p + "premiumBoostedReplyLight.2c65460a.png";
        },
        671809: (e, l, a) => {
            e.exports = a.p + "premiumPlusAdsRemovedDark.bedd7daa.png";
        },
        219759: (e, l, a) => {
            e.exports = a.p + "premiumPlusAdsRemovedLight.4f0dd73a.png";
        },
        51959: (e, l, a) => {
            e.exports = a.p + "premiumPlusBoostedReplyDark.25930eaa.png";
        },
        165806: (e, l, a) => {
            e.exports = a.p + "premiumPlusBoostedReplyLight.0b6b07da.png";
        },
        473301: (e, l, a) => {
            e.exports = a.p + "premiumPlusGrokDark.79b1fc1a.png";
        },
        603044: (e, l, a) => {
            e.exports = a.p + "premiumPlusGrokLight.37251b1a.png";
        },
        607178: (e, l, a) => {
            e.exports = a.p + "tierFrameDarkMode.da41b47a.png";
        },
        13266: (e, l, a) => {
            e.exports = a.p + "tierFrameLightMode.f476c13a.png";
        },
        716110: (e, l, a) => {
            e.exports = a.p + "v3PaywallBackground.784f6d6a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-a2dee9c7.e8aa973a.js.map
