"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-8eba0336"],
    {
        994542: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(552322),
                i = l(596017),
                s = l(699629),
                t = l(534002),
                r = l(624656),
                c = l(202784),
                d = l(520003),
                o = l(430962),
                u = l(921347);
            const g = ({ targetDate: e }) => {
                    const { business: a } = (0, o.M1)(),
                        l = (0, c.useCallback)(() => {
                            const l = new Date(),
                                n = new Date(Number.parseInt(e, 10));
                            return { days: { value: (0, i.j)(n, l), label: a.landing.offerBanner.days }, hours: { value: (0, s.A)(n, l) % 24, label: a.landing.offerBanner.hours }, minutes: { value: (0, t.X)(n, l) % 60, label: a.landing.offerBanner.minutes }, seconds: { value: (0, r.c)(n, l) % 60, label: a.landing.offerBanner.seconds } };
                        }, [e, a]),
                        [d, u] = c.useState(!1),
                        [g, m] = (0, c.useState)(l());
                    if (
                        ((0, c.useEffect)(() => {
                            u(!0);
                            const e = setInterval(() => {
                                m(l());
                            }, 1e3);
                            return () => clearInterval(e);
                        }, [l]),
                        d)
                    )
                        return (0, n.jsx)("div", { className: "rounded-xl p-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#6FCA6C]", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-12px)] p-3 dark:bg-black bg-white", children: (0, n.jsx)("div", { className: "flex gap-4", children: Object.entries(g).map(([e, a]) => (0, n.jsxs)("div", { className: "flex flex-col items-center text-center min-w-[50px]", children: [(0, n.jsx)("span", { className: "text-title4 font-extrabold", children: a.value }), (0, n.jsx)("span", { className: "text-subtext1 font-medium text-gray-900", children: a.label })] }, e)) }) }) });
                },
                m = ({ targetDate: e }) => {
                    const { business: a } = (0, o.M1)();
                    if (!e) return null;
                    const l = (0, u.v)(e);
                    return (0, n.jsxs)(d.$0, { children: [(0, n.jsx)("div", { className: "p-px rounded-2xl bg-gradient-to-r rtl:bg-gradient-to-l from-[#6FCA6C] to-transparent", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-8px)] p-0 dark:bg-black bg-white", children: (0, n.jsxs)("div", { className: "relative rounded-[calc(1.5rem-8px)] p-8 bg-gradient-to-r from-[rgba(118,170,153,0.2)] to-[rgba(60,154,123,0.2)]", children: [(0, n.jsx)("div", { className: "absolute md:top-1/3 md:-end-10 hidden md:flex", children: (0, n.jsx)(g, { targetDate: e }) }), (0, n.jsxs)("div", { className: "md:w-[60%]", children: [(0, n.jsx)("h2", { className: "text-title2 font-bold", children: a.landing.offerBanner.title }), (0, n.jsxs)("p", { className: "mt-4 text-[20px] font-light", children: [a.landing.offerBanner.description, " ", (0, n.jsx)("span", { className: "font-bold", children: l }), "."] })] })] }) }) }), (0, n.jsx)("div", { className: "-mt-6 md:hidden z-10", children: (0, n.jsx)(g, { targetDate: e }) })] });
                };
        },
        313270: (e, a, l) => {
            l.d(a, { n: () => p });
            var n = l(552322),
                i = l(261012),
                s = l(322506),
                t = l(993165),
                r = l(332161),
                c = l(305399),
                d = l(840489),
                o = l(202784),
                u = l(520003),
                g = l(430962),
                m = l(921347),
                x = l(699416);
            const f = ({ SubscribeButton: e, cta: a, description: l, disclaimer: i, disclaimerLink: t, features: c, featuresTitle: o, highlight: f, priceElements: p, selectedInterval: h, selectedTier: b, title: v }) => {
                const { business: y } = (0, g.M1)();
                if (!p) return null;
                const k = "month" === p.baseInterval ? p.baseCost : p.annualBaseMonthly,
                    { discountedCost: j, annualBaseMonthly: N, percentOff: _, endsAtMsec: w, promoLabel: F } = p.promotionInfo || {},
                    C = (w && (0, m.v)(w)) || "",
                    L = "Custom" === p.baseCost ? null : y.landing.month,
                    S = "Custom" === p.baseCost ? l : "year" === p.baseInterval ? y.landing.pricing.billedAnnually({ cost: p.baseCost ?? "" }) : y.landing.pricing.billedMonthly,
                    M = j && y.landing.pricing.offerAnualBilling({ discountedCost: j ?? "", baseCost: p.baseCost ?? "" });
                return (0, n.jsxs)(u.Zb, {
                    decoration: F,
                    className: "flex w-full max-w-[360px] flex-col justify-between gap-8 px-7 py-6",
                    children: [(0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, n.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [(0, n.jsx)(r.x, { size: "headline1", weight: "bold", children: v }), _ ? (0, n.jsx)("div", { className: "rounded-full text-subtext3 dark:text-white text-black flex h-[18px] items-center justify-center bg-green-50 p-2 font-medium", children: y.landing.pricing.percentageOff({ percentOff: _, endDate: C }) }) : f && (0, n.jsx)("div", { className: "rounded-full text-subtext3 text-background flex h-[18px] items-center justify-center bg-green-500 px-2 font-[600]", children: f })] }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsxs)("div", { className: "items-baseline flex flex-row flex-wrap", children: [(0, n.jsx)("span", { className: (0, d.Z)("text-title1", j ? "md:text-title3 text-title3 line-through font-normal" : "font-extrabold"), children: k }), N && (0, n.jsx)("span", { className: "text-title3 font-extrabold text-green-500 ms-1", children: N }), L && (0, n.jsxs)(r.x, { size: "body", className: "opacity-60", children: ["/ ", L] })] }), (0, n.jsx)(r.x, { size: "body", className: "opacity-60 mt-1", children: M || S })] }), "Enterprise" !== b && "string" == typeof a ? (0, n.jsx)(e, { priceElements: p, selectedTier: b, selectedInterval: h, buttonLabel: p.buttonLabel || a }) : a, (0, n.jsxs)("div", { className: "mt-2 flex flex-col gap-2.5", children: [(0, n.jsx)(r.x, { weight: "normal", children: o }), c.map((e) => (0, n.jsxs)("div", { className: "flex items-start gap-2", children: [(0, n.jsx)(x.Z, { className: "text-text size-5 shrink-0" }), (0, n.jsx)(r.x, { weight: "normal", children: e })] }, e))] })] }), i && (0, n.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [i, " ", t && (0, n.jsx)(s.r, { href: t, className: "text-blue-300", children: y.landing.pricing.learnMore })] })],
                });
            };
            const p = ({ SubscribeButton: e, basicPrices: a, enterpriseUrl: l, fullAccessPrices: x, interval: p = "Year", onIntervalChange: h, showTitle: b = !0, includeHandleMarketing: v = !1 }) => {
                const y = (0, c.a)("(max-width: 768px)"),
                    [k, j] = (0, o.useState)(p),
                    { business: N } = (0, g.M1)(),
                    _ = b ? N.landing.pricing.title : void 0,
                    w = a?.Year?.promotionInfo?.endsAtMsec || x?.Year?.promotionInfo?.endsAtMsec,
                    F = w && (0, m.v)(w),
                    C = F ? (y ? N.landing.pricing.offer : N.landing.pricing.offerEnds({ endDate: F })) : void 0,
                    L = { affiliateCost: N.landing.pricing.enterprisePrice, affiliateInterval: "month", affiliateTaxLabel: "plus any applicable tax", baseCost: N.landing.pricing.enterprisePrice, baseInterval: "month", basePriceCurrency: "USD", link: null, monthlyTaxLabel: "plus any applicable tax", percentageSavedLabel: null },
                    S = (e) => {
                        h ? h(e) : j(e);
                    },
                    M = N.landing.pricing.basicFeaturesOffer(k),
                    T = N.landing.pricing.fullAccessFeaturesOffer(k, v);
                return (0, n.jsxs)(u.$0, {
                    title: _,
                    className: "gap-5 pb-8",
                    id: "pricing",
                    children: [
                        (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("span", { className: (0, d.Z)("cursor-pointer transition-colors", { "text-gray-500": "Year" === k, "text-text": "Month" === k }), onClick: () => S("Month"), children: N.landing.pricing.monthly }), (0, n.jsx)(i.r, { checked: "Year" === k, onCheckedChange: (e) => S(e ? "Year" : "Month"), size: "small", className: "data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-400", thumbClassName: "data-[state=checked]:bg-text data-[state=unchecked]:bg-text" }), (0, n.jsxs)("div", { className: (0, d.Z)("relative flex cursor-pointer items-baseline gap-1 transition-colors", { "text-gray-500": "Month" === k, "text-text": "Year" === k }), onClick: () => S("Year"), children: [N.landing.pricing.yearly, (C || a?.Year.percentageSavedLabel) && (0, n.jsx)("div", { className: (0, d.Z)("pointer-events-none absolute start-[calc(100%+8px)] cursor-default select-none transition-opacity", { "opacity-0": "Month" === k, "opacity-100": "Year" === k }), children: (0, n.jsx)("span", { className: "text-subtext2 whitespace-nowrap text-green-500", children: C || a?.Year.percentageSavedLabel }) })] })] }),
                        (0, n.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-stretch", children: [(0, n.jsx)(f, { title: N.landing.pricing.basic, priceElements: a?.[k], features: M, featuresTitle: N.landing.pricing.basicFeaturesTitle, SubscribeButton: e, selectedTier: "Basic", selectedInterval: k, cta: N.landing.pricing.basicCta }), (0, n.jsx)(f, { title: N.landing.pricing.fullAccess, priceElements: x?.[k], features: T, featuresTitle: N.landing.pricing.fullAccessFeaturesTitle, highlight: N.landing.pricing.highlight, SubscribeButton: e, selectedTier: "FullAccess", selectedInterval: k, cta: N.landing.pricing.fullAccessCta, disclaimer: "Month" === k ? N.landing.pricing.affiliatesDisclaimerMonthly : N.landing.pricing.affiliatesDisclaimerYearly, disclaimerLink: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing" }), l && (0, n.jsx)(f, { title: N.landing.pricing.enterprise, description: N.landing.pricing.enterpriseDescription, priceElements: L, features: [...N.landing.pricing.enterpriseFeatures], featuresTitle: N.landing.pricing.enterpriseFeaturesTitle, SubscribeButton: e, selectedTier: "Enterprise", selectedInterval: k, cta: (0, n.jsx)(s.r, { href: l, className: "mt-auto w-full", children: (0, n.jsx)(t.z, { variant: "insightsBright", className: "my-4 h-[36px] w-full", children: N.landing.pricing.enterpriseCta }) }) })] }),
                        (0, n.jsx)("div", { className: "flex flex-col items-center justify-center gap-4", children: (0, n.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [N.landing.pricing.disclaimer, " ", (0, n.jsx)(s.r, { className: "text-blue-300", href: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing", children: N.landing.pricing.learnMore })] }) }),
                    ],
                });
            };
        },
        520003: (e, a, l) => {
            l.d(a, { $0: () => o, ZQ: () => u, Zb: () => d, ad: () => c });
            var n = l(552322),
                i = l(993165),
                s = l(332161),
                t = l(31674),
                r = l(430962);
            const c = ({ ctaUrl: e }) => {
                    const { business: a } = (0, r.M1)();
                    return (0, n.jsx)("a", { href: e || "#pricing", className: "focus:outline-none", children: (0, n.jsx)(i.z, { variant: "insightsBright", className: "w-60 py-5", children: (0, n.jsx)(s.x, { size: "headline2", weight: "bold", color: "background", children: a.landing.subscribeButton }) }) });
                },
                d = ({ children: e, className: a, decoration: l }) => {
                    const i = (0, n.jsx)("div", { className: (0, t.cn)("rounded-2xl bg-gray-0 from-background/50 overflow-hidden bg-gradient-to-tl from-10% to-transparent", a), children: e });
                    return l ? (0, n.jsxs)("div", { className: "relative", children: [l && (0, n.jsx)("span", { className: "absolute -top-2 -right-2 text-subtext3 px-2 py-1 rounded border border-nested-border/25 bg-gray-100 text-text", children: l }), i] }) : i;
                },
                o = ({ children: e, className: a, id: l, title: i }) => (0, n.jsxs)("div", { className: (0, t.cn)("flex w-full max-w-5xl flex-col items-center", a), id: l, children: [i && (0, n.jsx)("div", { className: "relative bg-clip-text py-1 text-[40px] font-[600] leading-[40px]", children: (0, n.jsx)("span", { className: "from-text bg-gradient-to-r from-70% to-gray-500 bg-clip-text text-transparent", children: i }) }), e] }),
                u = ({ children: e, className: a, comingSoon: l = !1, description: i, title: c }) => {
                    const { business: o } = (0, r.M1)();
                    return (0, n.jsxs)(d, { className: (0, t.cn)("relative flex h-full flex-col items-start", a), children: [(0, n.jsxs)("div", { className: "relative flex flex-col items-start gap-6 p-8", children: [(0, n.jsx)(s.x, { size: "title4", weight: "bold", className: "text-balance", children: c }), (0, n.jsx)(s.x, { size: "headline1", className: "opacity-60", children: i })] }), e, l && (0, n.jsx)("div", { className: "absolute top-2 flex w-full items-center justify-center", children: (0, n.jsx)("div", { className: "text-subtext3 bg-background rounded-lg px-2 py-1 text-gray-700", children: o.landing.comingSoon }) })] });
                };
        },
        921347: (e, a, l) => {
            l.d(a, { v: () => i });
            var n = l(152935);
            const i = (e, a = "MMMM dd, yyyy") => (0, n.WU)(new Date(Number.parseInt(e, 10)), a);
        },
        509345: (e, a, l) => {
            l.r(a), l.d(a, { default: () => i });
            const n = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "avatar_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, action: "LOG" }], storageKey: null }, action: "LOG" },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "LOG" }], storageKey: null }, action: "LOG" },
                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "9db7537240a533242b96d0411a860f4b",
                },
                i = n;
        },
        971046: (e, a, l) => {
            l.d(a, { q: () => r });
            var n = l(552322),
                i = l(378364),
                s = l(889906);
            l(703383);
            const t = l(509345);
            function r({ user: e, ...a }) {
                const l = (0, s.useFragment)(t, e);
                if (!l) return null;
                const r = "Square" === l.profile_image_shape ? "square" : "circle";
                return (0, n.jsx)(i.q, { ...a, screenName: l.core.screen_name, shape: r, url: l.avatar.image_url });
            }
        },
        340629: (e, a, l) => {
            l.r(a), l.d(a, { default: () => i });
            const n = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "username_user",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "HighlightedUserLabelResponse",
                            kind: "LinkedField",
                            name: "affiliates_highlighted_label",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "HighlightedUserLabel",
                                    kind: "LinkedField",
                                    name: "label",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "UserCore",
                                kind: "LinkedField",
                                name: "core",
                                plural: !1,
                                selections: [
                                    { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "LOG" },
                                    { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "LOG" },
                                ],
                                storageKey: null,
                            },
                            action: "LOG",
                        },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, action: "LOG" },
                        { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "UserVerification",
                                kind: "LinkedField",
                                name: "verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            action: "LOG",
                        },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "4edcd837e5969a7574ad1274556b94cc",
                },
                i = n;
        },
        323048: (e, a, l) => {
            l.d(a, { R: () => r });
            var n = l(552322),
                i = l(589259),
                s = l(889906);
            l(703383);
            const t = l(340629);
            function r({ user: e, ...a }) {
                const l = (0, s.useFragment)(t, e);
                if (!l) return null;
                const r = (function (e) {
                    let a, l;
                    switch (("Badge" === e.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === e.affiliates_highlighted_label?.label?.user_label_type && e.affiliates_highlighted_label.label.badge && (a = { label: e.affiliates_highlighted_label.label.description, url: e.affiliates_highlighted_label.label.badge.url }), e.verification.verified_type)) {
                        case "Business":
                            l = "business";
                            break;
                        case "Government":
                            l = "government";
                            break;
                        case "User":
                            l = "user";
                            break;
                        default:
                            l = e.verification.is_blue_verified ? "user" : void 0;
                    }
                    return { affiliation: a, isProtected: !!e.privacy.protected, isSubscriber: !!e.super_following, verifiedType: l };
                })(l);
                return (0, n.jsx)(i.R, { ...a, badges: r, name: l.core.name, screenName: l.core.screen_name });
            }
        },
        261012: (e, a, l) => {
            l.d(a, { r: () => r });
            var n = l(552322),
                i = l(199237),
                s = l(202784),
                t = l(31674);
            const r = (0, s.forwardRef)(function ({ className: e, size: a = "medium", thumbClassName: l, ...s }, r) {
                return (0, n.jsx)(i.fC, { className: (0, t.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === a ? "h-3 w-10" : "h-2 w-6", e), ...s, ref: r, children: (0, n.jsx)(i.bU, { className: (0, t.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === a ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", l) }) });
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-8eba0336.7260e47a.js.map
