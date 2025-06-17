"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-8eba0336"],
    {
        994542: (e, l, a) => {
            a.d(l, { Z: () => m });
            var n = a(552322),
                i = a(596017),
                s = a(699629),
                t = a(534002),
                r = a(624656),
                c = a(202784),
                d = a(520003),
                o = a(430962),
                u = a(921347);
            const g = ({ targetDate: e }) => {
                    const { business: l } = (0, o.M1)(),
                        a = (0, c.useCallback)(() => {
                            const a = new Date(),
                                n = new Date(Number.parseInt(e, 10));
                            return { days: { value: (0, i.j)(n, a), label: l.landing.offerBanner.days }, hours: { value: (0, s.A)(n, a) % 24, label: l.landing.offerBanner.hours }, minutes: { value: (0, t.X)(n, a) % 60, label: l.landing.offerBanner.minutes }, seconds: { value: (0, r.c)(n, a) % 60, label: l.landing.offerBanner.seconds } };
                        }, [e, l]),
                        [d, u] = c.useState(!1),
                        [g, m] = (0, c.useState)(a());
                    if (
                        ((0, c.useEffect)(() => {
                            u(!0);
                            const e = setInterval(() => {
                                m(a());
                            }, 1e3);
                            return () => clearInterval(e);
                        }, [a]),
                        d)
                    )
                        return (0, n.jsx)("div", { className: "rounded-xl p-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#6FCA6C]", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-12px)] p-3 dark:bg-black bg-white", children: (0, n.jsx)("div", { className: "flex gap-4", children: Object.entries(g).map(([e, l]) => (0, n.jsxs)("div", { className: "flex flex-col items-center text-center min-w-[50px]", children: [(0, n.jsx)("span", { className: "text-title4 font-extrabold", children: l.value }), (0, n.jsx)("span", { className: "text-subtext1 font-medium text-gray-900", children: l.label })] }, e)) }) }) });
                },
                m = ({ targetDate: e }) => {
                    const { business: l } = (0, o.M1)();
                    if (!e) return null;
                    const a = (0, u.v)(e);
                    return (0, n.jsxs)(d.$0, { children: [(0, n.jsx)("div", { className: "p-px rounded-2xl bg-gradient-to-r rtl:bg-gradient-to-l from-[#6FCA6C] to-transparent", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-8px)] p-0 dark:bg-black bg-white", children: (0, n.jsxs)("div", { className: "relative rounded-[calc(1.5rem-8px)] p-8 bg-gradient-to-r from-[rgba(118,170,153,0.2)] to-[rgba(60,154,123,0.2)]", children: [(0, n.jsx)("div", { className: "absolute md:top-1/3 md:-end-10 hidden md:flex", children: (0, n.jsx)(g, { targetDate: e }) }), (0, n.jsxs)("div", { className: "md:w-[60%]", children: [(0, n.jsx)("h2", { className: "text-title2 font-bold", children: l.landing.offerBanner.title }), (0, n.jsxs)("p", { className: "mt-4 text-[20px] font-light", children: [l.landing.offerBanner.description, " ", (0, n.jsx)("span", { className: "font-bold", children: a }), "."] })] })] }) }) }), (0, n.jsx)("div", { className: "-mt-6 md:hidden z-10", children: (0, n.jsx)(g, { targetDate: e }) })] });
                };
        },
        313270: (e, l, a) => {
            a.d(l, { n: () => f });
            var n = a(552322),
                i = a(261012),
                s = a(322506),
                t = a(993165),
                r = a(332161),
                c = a(305399),
                d = a(840489),
                o = a(202784),
                u = a(520003),
                g = a(430962),
                m = a(921347),
                x = a(699416);
            const p = ({ SubscribeButton: e, cta: l, description: a, disclaimer: i, disclaimerLink: t, features: c, featuresTitle: o, highlight: p, priceElements: f, selectedInterval: h, selectedTier: b, title: v }) => {
                const { business: y } = (0, g.M1)();
                if (!f) return null;
                const j = "Month" === h ? f.baseCost : f.annualBaseMonthly,
                    { discountedCost: k, annualBaseMonthly: N, percentOff: w, endsAtMsec: _, promoLabel: F } = f.promotionInfo || {},
                    C = (_ && (0, m.v)(_)) || "",
                    L = "Custom" === f.baseCost ? null : y.landing.month,
                    M = "Custom" === f.baseCost ? a : "Year" === h ? y.landing.pricing.billedAnnually({ cost: f.baseCost ?? "" }) : y.landing.pricing.billedMonthly,
                    S = k && y.landing.pricing.offerAnualBilling({ discountedCost: k ?? "", baseCost: f.baseCost ?? "" });
                return (0, n.jsxs)(u.Zb, {
                    decoration: F,
                    className: "flex w-full max-w-[360px] flex-col justify-between gap-8 px-7 py-6",
                    children: [(0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, n.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [(0, n.jsx)(r.x, { size: "headline1", weight: "bold", children: v }), w ? (0, n.jsx)("div", { className: "rounded-full text-subtext3 dark:text-white text-black flex h-[18px] items-center justify-center bg-green-50 p-2 font-medium", children: y.landing.pricing.percentageOff({ percentOff: w, endDate: C }) }) : p && (0, n.jsx)("div", { className: "rounded-full text-subtext3 text-background flex h-[18px] items-center justify-center bg-green-500 px-2 font-[600]", children: p })] }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsxs)("div", { className: "items-baseline flex flex-row flex-wrap", children: [(0, n.jsx)("span", { className: (0, d.Z)("text-title1", k ? "md:text-title3 text-title3 line-through font-normal" : "font-extrabold"), children: j }), N && (0, n.jsx)("span", { className: "text-title3 font-extrabold text-green-500 ms-1", children: N }), L && (0, n.jsxs)(r.x, { size: "body", className: "opacity-60", children: ["/ ", L] })] }), (0, n.jsx)(r.x, { size: "body", className: "opacity-60 mt-1", children: S || M })] }), "Enterprise" !== b && "string" == typeof l ? (0, n.jsx)(e, { priceElements: f, selectedTier: b, selectedInterval: h, buttonLabel: f.buttonLabel || l }) : l, (0, n.jsxs)("div", { className: "mt-2 flex flex-col gap-2.5", children: [(0, n.jsx)(r.x, { weight: "normal", children: o }), c.map((e) => (0, n.jsxs)("div", { className: "flex items-start gap-2", children: [(0, n.jsx)(x.Z, { className: "text-text size-5 shrink-0" }), (0, n.jsx)(r.x, { weight: "normal", children: e })] }, e))] })] }), i && (0, n.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [i, " ", t && (0, n.jsx)(s.r, { href: t, className: "text-blue-300", children: y.landing.pricing.learnMore })] })],
                });
            };
            const f = ({ SubscribeButton: e, basicPrices: l, enterpriseUrl: a, fullAccessPrices: x, interval: f = "Year", onIntervalChange: h, showTitle: b = !0, includeHandleMarketing: v = !1 }) => {
                const y = (0, c.a)("(max-width: 768px)"),
                    [j, k] = (0, o.useState)(f),
                    { business: N } = (0, g.M1)(),
                    w = b ? N.landing.pricing.title : void 0,
                    _ = l?.Year?.promotionInfo?.endsAtMsec || x?.Year?.promotionInfo?.endsAtMsec,
                    F = _ && (0, m.v)(_),
                    C = F ? (y ? N.landing.pricing.offer : N.landing.pricing.offerEnds({ endDate: F })) : void 0,
                    L = { affiliateCost: N.landing.pricing.enterprisePrice, affiliateInterval: "month", affiliateTaxLabel: "plus any applicable tax", baseCost: N.landing.pricing.enterprisePrice, baseInterval: "month", basePriceCurrency: "USD", link: null, monthlyTaxLabel: "plus any applicable tax", percentageSavedLabel: null },
                    M = (e) => {
                        h ? h(e) : k(e);
                    },
                    S = N.landing.pricing.basicFeaturesOffer(j),
                    B = N.landing.pricing.fullAccessFeaturesOffer(j, v);
                return (0, n.jsxs)(u.$0, {
                    title: w,
                    className: "gap-5 pb-8",
                    id: "pricing",
                    children: [
                        (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("span", { className: (0, d.Z)("cursor-pointer transition-colors", { "text-gray-500": "Year" === j, "text-text": "Month" === j }), onClick: () => M("Month"), children: N.landing.pricing.monthly }), (0, n.jsx)(i.r, { checked: "Year" === j, onCheckedChange: (e) => M(e ? "Year" : "Month"), size: "small", className: "data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-400", thumbClassName: "data-[state=checked]:bg-text data-[state=unchecked]:bg-text" }), (0, n.jsxs)("div", { className: (0, d.Z)("relative flex cursor-pointer items-baseline gap-1 transition-colors", { "text-gray-500": "Month" === j, "text-text": "Year" === j }), onClick: () => M("Year"), children: [N.landing.pricing.yearly, (C || l?.Year.percentageSavedLabel) && (0, n.jsx)("div", { className: (0, d.Z)("pointer-events-none absolute start-[calc(100%+8px)] cursor-default select-none transition-opacity", { "opacity-0": "Month" === j, "opacity-100": "Year" === j }), children: (0, n.jsx)("span", { className: "text-subtext2 whitespace-nowrap text-green-500", children: C || l?.Year.percentageSavedLabel }) })] })] }),
                        (0, n.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-stretch", children: [(0, n.jsx)(p, { title: N.landing.pricing.basic, priceElements: l?.[j], features: S, featuresTitle: N.landing.pricing.basicFeaturesTitle, SubscribeButton: e, selectedTier: "Basic", selectedInterval: j, cta: N.landing.pricing.basicCta }), (0, n.jsx)(p, { title: N.landing.pricing.fullAccess, priceElements: x?.[j], features: B, featuresTitle: N.landing.pricing.fullAccessFeaturesTitle, highlight: N.landing.pricing.highlight, SubscribeButton: e, selectedTier: "FullAccess", selectedInterval: j, cta: N.landing.pricing.fullAccessCta, disclaimer: "Month" === j ? N.landing.pricing.affiliatesDisclaimerMonthly : N.landing.pricing.affiliatesDisclaimerYearly, disclaimerLink: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing" }), a && (0, n.jsx)(p, { title: N.landing.pricing.enterprise, description: N.landing.pricing.enterpriseDescription, priceElements: L, features: [...N.landing.pricing.enterpriseFeatures], featuresTitle: N.landing.pricing.enterpriseFeaturesTitle, SubscribeButton: e, selectedTier: "Enterprise", selectedInterval: j, cta: (0, n.jsx)(s.r, { href: a, className: "mt-auto w-full", children: (0, n.jsx)(t.z, { variant: "insightsBright", className: "my-4 h-[36px] w-full", children: N.landing.pricing.enterpriseCta }) }) })] }),
                        (0, n.jsx)("div", { className: "flex flex-col items-center justify-center gap-4", children: (0, n.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [N.landing.pricing.disclaimer, " ", (0, n.jsx)(s.r, { className: "text-blue-300", href: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing", children: N.landing.pricing.learnMore })] }) }),
                    ],
                });
            };
        },
        520003: (e, l, a) => {
            a.d(l, { $0: () => o, ZQ: () => u, Zb: () => d, ad: () => c });
            var n = a(552322),
                i = a(993165),
                s = a(332161),
                t = a(31674),
                r = a(430962);
            const c = ({ ctaUrl: e }) => {
                    const { business: l } = (0, r.M1)();
                    return (0, n.jsx)("a", { href: e || "#pricing", className: "focus:outline-none", children: (0, n.jsx)(i.z, { variant: "insightsBright", className: "w-60 py-5", children: (0, n.jsx)(s.x, { size: "headline2", weight: "bold", color: "background", children: l.landing.subscribeButton }) }) });
                },
                d = ({ children: e, className: l, decoration: a }) => {
                    const i = (0, n.jsx)("div", { className: (0, t.cn)("rounded-2xl bg-gray-0 from-background/50 overflow-hidden bg-gradient-to-tl from-10% to-transparent", l), children: e });
                    return a ? (0, n.jsxs)("div", { className: "relative", children: [a && (0, n.jsx)("span", { className: "absolute -top-2 -right-2 text-subtext3 px-2 py-1 rounded border border-nested-border/25 bg-gray-100 text-text", children: a }), i] }) : i;
                },
                o = ({ children: e, className: l, id: a, title: i }) => (0, n.jsxs)("div", { className: (0, t.cn)("flex w-full max-w-5xl flex-col items-center", l), id: a, children: [i && (0, n.jsx)("div", { className: "relative bg-clip-text py-1 text-[40px] font-[600] leading-[40px]", children: (0, n.jsx)("span", { className: "from-text bg-gradient-to-r from-70% to-gray-500 bg-clip-text text-transparent", children: i }) }), e] }),
                u = ({ children: e, className: l, comingSoon: a = !1, description: i, title: c }) => {
                    const { business: o } = (0, r.M1)();
                    return (0, n.jsxs)(d, { className: (0, t.cn)("relative flex h-full flex-col items-start", l), children: [(0, n.jsxs)("div", { className: "relative flex flex-col items-start gap-6 p-8", children: [(0, n.jsx)(s.x, { size: "title4", weight: "bold", className: "text-balance", children: c }), (0, n.jsx)(s.x, { size: "headline1", className: "opacity-60", children: i })] }), e, a && (0, n.jsx)("div", { className: "absolute top-2 flex w-full items-center justify-center", children: (0, n.jsx)("div", { className: "text-subtext3 bg-background rounded-lg px-2 py-1 text-gray-700", children: o.landing.comingSoon }) })] });
                };
        },
        921347: (e, l, a) => {
            a.d(l, { v: () => i });
            var n = a(152935);
            const i = (e, l = "MMMM dd, yyyy") => (0, n.WU)(new Date(Number.parseInt(e, 10)), l);
        },
        509345: (e, l, a) => {
            a.r(l), a.d(l, { default: () => i });
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
        971046: (e, l, a) => {
            a.d(l, { q: () => r });
            var n = a(552322),
                i = a(378364),
                s = a(889906);
            a(703383);
            const t = a(509345);
            function r({ user: e, ...l }) {
                const a = (0, s.useFragment)(t, e);
                if (!a) return null;
                const r = "Square" === a.profile_image_shape ? "square" : "circle";
                return (0, n.jsx)(i.q, { ...l, screenName: a.core.screen_name, shape: r, url: a.avatar.image_url });
            }
        },
        340629: (e, l, a) => {
            a.r(l), a.d(l, { default: () => i });
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
        323048: (e, l, a) => {
            a.d(l, { R: () => r });
            var n = a(552322),
                i = a(589259),
                s = a(889906);
            a(703383);
            const t = a(340629);
            function r({ user: e, ...l }) {
                const a = (0, s.useFragment)(t, e);
                if (!a) return null;
                const r = (function (e) {
                    let l, a;
                    switch (("Badge" === e.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === e.affiliates_highlighted_label?.label?.user_label_type && e.affiliates_highlighted_label.label.badge && (l = { label: e.affiliates_highlighted_label.label.description, url: e.affiliates_highlighted_label.label.badge.url }), e.verification.verified_type)) {
                        case "Business":
                            a = "business";
                            break;
                        case "Government":
                            a = "government";
                            break;
                        case "User":
                            a = "user";
                            break;
                        default:
                            a = e.verification.is_blue_verified ? "user" : void 0;
                    }
                    return { affiliation: l, isProtected: !!e.privacy.protected, isSubscriber: !!e.super_following, verifiedType: a };
                })(a);
                return (0, n.jsx)(i.R, { ...l, badges: r, name: a.core.name, screenName: a.core.screen_name });
            }
        },
        177697: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = a(552322);
            const i = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M18.586 7.001L16.707 8.88c-.391.391-1.024.391-1.414 0l-.172-.172c-.39-.391-.39-1.024 0-1.414L17 5.415c1.26-1.26.367-3.414-1.414-3.414h-1.118c-1.845 0-3.615.733-4.92 2.038-1.645 1.645-2.359 4.004-1.903 6.285l.217 1.086c.033.164-.019.333-.137.452l-5.372 5.372c-.976.976-.976 2.559 0 3.536l.879.879c.976.976 2.559.976 3.535 0l5.372-5.372c.118-.118.288-.17.452-.137l1.086.217c2.281.456 4.64-.258 6.285-1.903C21.267 13.149 22 11.379 22 9.534V8.416c0-1.782-2.154-2.674-3.414-1.414zm-.038 6.037c-1.172 1.172-2.853 1.681-4.479 1.356l-1.086-.217c-.82-.164-1.667.093-2.258.684l-5.372 5.372c-.195.195-.512.195-.707 0l-.879-.879c-.195-.195-.195-.512 0-.707l5.372-5.372c.591-.591.848-1.438.684-2.258l-.217-1.086c-.325-1.626.184-3.306 1.356-4.479.93-.93 2.191-1.452 3.506-1.452h1.118l-1.879 1.879c-1.172 1.172-1.172 3.071 0 4.243l.172.172c1.172 1.172 3.071 1.172 4.242 0L20 8.415v1.118c0 1.315-.522 2.576-1.452 3.506z" }) });
        },
        428897: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = a(552322);
            const i = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
        },
        261012: (e, l, a) => {
            a.d(l, { r: () => r });
            var n = a(552322),
                i = a(199237),
                s = a(202784),
                t = a(31674);
            const r = (0, s.forwardRef)(function ({ className: e, size: l = "medium", thumbClassName: a, ...s }, r) {
                return (0, n.jsx)(i.fC, { className: (0, t.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === l ? "h-3 w-10" : "h-2 w-6", e), ...s, ref: r, children: (0, n.jsx)(i.bU, { className: (0, t.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === l ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", a) }) });
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-8eba0336.3a75e59a.js.map
