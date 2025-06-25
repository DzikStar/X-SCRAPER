"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-84b7dcae"],
    {
        994542: (e, t, s) => {
            s.d(t, { Z: () => p });
            var n = s(552322),
                a = s(596017),
                i = s(699629),
                l = s(534002),
                r = s(624656),
                c = s(202784),
                d = s(520003),
                o = s(430962),
                x = s(921347);
            const g = ({ targetDate: e }) => {
                    const { business: t } = (0, o.M1)(),
                        s = (0, c.useCallback)(() => {
                            const s = new Date(),
                                n = new Date(Number.parseInt(e, 10));
                            return { days: { value: (0, a.j)(n, s), label: t.landing.offerBanner.days }, hours: { value: (0, i.A)(n, s) % 24, label: t.landing.offerBanner.hours }, minutes: { value: (0, l.X)(n, s) % 60, label: t.landing.offerBanner.minutes }, seconds: { value: (0, r.c)(n, s) % 60, label: t.landing.offerBanner.seconds } };
                        }, [e, t]),
                        [d, x] = c.useState(!1),
                        [g, p] = (0, c.useState)(s());
                    if (
                        ((0, c.useEffect)(() => {
                            x(!0);
                            const e = setInterval(() => {
                                p(s());
                            }, 1e3);
                            return () => clearInterval(e);
                        }, [s]),
                        d)
                    )
                        return (0, n.jsx)("div", { className: "rounded-xl p-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#6FCA6C]", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-12px)] p-3 dark:bg-black bg-white", children: (0, n.jsx)("div", { className: "flex gap-4", children: Object.entries(g).map(([e, t]) => (0, n.jsxs)("div", { className: "flex flex-col items-center text-center min-w-[50px]", children: [(0, n.jsx)("span", { className: "text-title4 font-extrabold", children: t.value }), (0, n.jsx)("span", { className: "text-subtext1 font-medium text-gray-900", children: t.label })] }, e)) }) }) });
                },
                p = ({ targetDate: e }) => {
                    const { business: t } = (0, o.M1)();
                    if (!e) return null;
                    const s = (0, x.v)(e);
                    return (0, n.jsxs)(d.$0, { children: [(0, n.jsx)("div", { className: "p-px rounded-2xl bg-gradient-to-r rtl:bg-gradient-to-l from-[#6FCA6C] to-transparent", children: (0, n.jsx)("div", { className: "rounded-[calc(1.5rem-8px)] p-0 dark:bg-black bg-white", children: (0, n.jsxs)("div", { className: "relative rounded-[calc(1.5rem-8px)] p-8 bg-gradient-to-r from-[rgba(118,170,153,0.2)] to-[rgba(60,154,123,0.2)]", children: [(0, n.jsx)("div", { className: "absolute md:top-1/3 md:-end-10 hidden md:flex", children: (0, n.jsx)(g, { targetDate: e }) }), (0, n.jsxs)("div", { className: "md:w-[60%]", children: [(0, n.jsx)("h2", { className: "text-title2 font-bold", children: t.landing.offerBanner.title }), (0, n.jsxs)("p", { className: "mt-4 text-[20px] font-light", children: [t.landing.offerBanner.description, " ", (0, n.jsx)("span", { className: "font-bold", children: s }), "."] })] })] }) }) }), (0, n.jsx)("div", { className: "-mt-6 md:hidden z-10", children: (0, n.jsx)(g, { targetDate: e }) })] });
                };
        },
        313270: (e, t, s) => {
            s.d(t, { n: () => h });
            var n = s(552322),
                a = s(261012),
                i = s(322506),
                l = s(993165),
                r = s(332161),
                c = s(305399),
                d = s(840489),
                o = s(202784),
                x = s(520003),
                g = s(430962),
                p = s(921347),
                m = s(699416);
            const u = ({ SubscribeButton: e, cta: t, description: s, disclaimer: a, disclaimerLink: l, features: c, featuresTitle: o, highlight: u, priceElements: h, selectedInterval: f, selectedTier: b, title: j }) => {
                const { business: v } = (0, g.M1)();
                if (!h) return null;
                const N = "Month" === f ? h.baseCost : h.annualBaseMonthly,
                    { discountedCost: y, annualBaseMonthly: w, percentOff: C, endsAtMsec: k, promoLabel: M } = h.promotionInfo || {},
                    B = (k && (0, p.v)(k)) || "",
                    z = "Custom" === h.baseCost ? null : v.landing.month,
                    I = "Custom" === h.baseCost ? s : "Year" === f ? v.landing.pricing.billedAnnually({ cost: h.baseCost ?? "" }) : v.landing.pricing.billedMonthly,
                    T = y && v.landing.pricing.offerAnualBilling({ discountedCost: y ?? "", baseCost: h.baseCost ?? "" });
                return (0, n.jsxs)(x.Zb, {
                    decoration: M,
                    className: "flex w-full max-w-[360px] flex-col justify-between gap-8 px-7 py-6",
                    children: [(0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, n.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [(0, n.jsx)(r.x, { size: "headline1", weight: "bold", children: j }), C ? (0, n.jsx)("div", { className: "rounded-full text-subtext3 dark:text-white text-black flex h-[18px] items-center justify-center bg-green-50 p-2 font-medium", children: v.landing.pricing.percentageOff({ percentOff: C, endDate: B }) }) : u && (0, n.jsx)("div", { className: "rounded-full text-subtext3 text-background flex h-[18px] items-center justify-center bg-green-500 px-2 font-[600]", children: u })] }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsxs)("div", { className: "items-baseline flex flex-row flex-wrap", children: [(0, n.jsx)("span", { className: (0, d.Z)("text-title1", y ? "md:text-title3 text-title3 line-through font-normal" : "font-extrabold"), children: N }), w && (0, n.jsx)("span", { className: "text-title3 font-extrabold text-green-500 ms-1", children: w }), z && (0, n.jsxs)(r.x, { size: "body", className: "opacity-60", children: ["/ ", z] })] }), (0, n.jsx)(r.x, { size: "body", className: "opacity-60 mt-1", children: T || I })] }), "Enterprise" !== b && "string" == typeof t ? (0, n.jsx)(e, { priceElements: h, selectedTier: b, selectedInterval: f, buttonLabel: h.buttonLabel || t }) : t, (0, n.jsxs)("div", { className: "mt-2 flex flex-col gap-2.5", children: [(0, n.jsx)(r.x, { weight: "normal", children: o }), c.map((e) => (0, n.jsxs)("div", { className: "flex items-start gap-2", children: [(0, n.jsx)(m.Z, { className: "text-text size-5 shrink-0" }), (0, n.jsx)(r.x, { weight: "normal", children: e })] }, e))] })] }), a && (0, n.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [a, " ", l && (0, n.jsx)(i.r, { href: l, className: "text-blue-300", children: v.landing.pricing.learnMore })] })],
                });
            };
            const h = ({ SubscribeButton: e, basicPrices: t, enterpriseUrl: s, fullAccessPrices: m, interval: h = "Year", onIntervalChange: f, showTitle: b = !0, includeHandleMarketing: j = !1 }) => {
                const v = (0, c.a)("(max-width: 768px)"),
                    [N, y] = (0, o.useState)(h),
                    { business: w } = (0, g.M1)(),
                    C = b ? w.landing.pricing.title : void 0,
                    k = t?.Year?.promotionInfo?.endsAtMsec || m?.Year?.promotionInfo?.endsAtMsec,
                    M = k && (0, p.v)(k),
                    B = M ? (v ? w.landing.pricing.offer : w.landing.pricing.offerEnds({ endDate: M })) : void 0,
                    z = { affiliateCost: w.landing.pricing.enterprisePrice, affiliateInterval: "month", affiliateTaxLabel: "plus any applicable tax", baseCost: w.landing.pricing.enterprisePrice, baseInterval: "month", basePriceCurrency: "USD", link: null, monthlyTaxLabel: "plus any applicable tax", percentageSavedLabel: null },
                    I = (e) => {
                        f ? f(e) : y(e);
                    },
                    T = w.landing.pricing.basicFeaturesOffer(N),
                    A = w.landing.pricing.fullAccessFeaturesOffer(N, j);
                return (0, n.jsxs)(x.$0, {
                    title: C,
                    className: "gap-5 pb-8",
                    id: "pricing",
                    children: [
                        (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("span", { className: (0, d.Z)("cursor-pointer transition-colors", { "text-gray-500": "Year" === N, "text-text": "Month" === N }), onClick: () => I("Month"), children: w.landing.pricing.monthly }), (0, n.jsx)(a.r, { checked: "Year" === N, onCheckedChange: (e) => I(e ? "Year" : "Month"), size: "small", className: "data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-400", thumbClassName: "data-[state=checked]:bg-text data-[state=unchecked]:bg-text" }), (0, n.jsxs)("div", { className: (0, d.Z)("relative flex cursor-pointer items-baseline gap-1 transition-colors", { "text-gray-500": "Month" === N, "text-text": "Year" === N }), onClick: () => I("Year"), children: [w.landing.pricing.yearly, (B || t?.Year.percentageSavedLabel) && (0, n.jsx)("div", { className: (0, d.Z)("pointer-events-none absolute start-[calc(100%+8px)] cursor-default select-none transition-opacity", { "opacity-0": "Month" === N, "opacity-100": "Year" === N }), children: (0, n.jsx)("span", { className: "text-subtext2 whitespace-nowrap text-green-500", children: B || t?.Year.percentageSavedLabel }) })] })] }),
                        (0, n.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-stretch", children: [(0, n.jsx)(u, { title: w.landing.pricing.basic, priceElements: t?.[N], features: T, featuresTitle: w.landing.pricing.basicFeaturesTitle, SubscribeButton: e, selectedTier: "Basic", selectedInterval: N, cta: w.landing.pricing.basicCta }), (0, n.jsx)(u, { title: w.landing.pricing.fullAccess, priceElements: m?.[N], features: A, featuresTitle: w.landing.pricing.fullAccessFeaturesTitle, highlight: w.landing.pricing.highlight, SubscribeButton: e, selectedTier: "FullAccess", selectedInterval: N, cta: w.landing.pricing.fullAccessCta, disclaimer: "Month" === N ? w.landing.pricing.affiliatesDisclaimerMonthly : w.landing.pricing.affiliatesDisclaimerYearly, disclaimerLink: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing" }), s && (0, n.jsx)(u, { title: w.landing.pricing.enterprise, description: w.landing.pricing.enterpriseDescription, priceElements: z, features: [...w.landing.pricing.enterpriseFeatures], featuresTitle: w.landing.pricing.enterpriseFeaturesTitle, SubscribeButton: e, selectedTier: "Enterprise", selectedInterval: N, cta: (0, n.jsx)(i.r, { href: s, className: "mt-auto w-full", children: (0, n.jsx)(l.z, { variant: "insightsBright", className: "my-4 h-[36px] w-full", children: w.landing.pricing.enterpriseCta }) }) })] }),
                        (0, n.jsx)("div", { className: "flex flex-col items-center justify-center gap-4", children: (0, n.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [w.landing.pricing.disclaimer, " ", (0, n.jsx)(i.r, { className: "text-blue-300", href: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing", children: w.landing.pricing.learnMore })] }) }),
                    ],
                });
            };
        },
        520003: (e, t, s) => {
            s.d(t, { $0: () => o, ZQ: () => x, Zb: () => d, ad: () => c });
            var n = s(552322),
                a = s(993165),
                i = s(332161),
                l = s(31674),
                r = s(430962);
            const c = ({ ctaUrl: e }) => {
                    const { business: t } = (0, r.M1)();
                    return (0, n.jsx)("a", { href: e || "#pricing", className: "focus:outline-none", children: (0, n.jsx)(a.z, { variant: "insightsBright", className: "w-60 py-5", children: (0, n.jsx)(i.x, { size: "headline2", weight: "bold", color: "background", children: t.landing.subscribeButton }) }) });
                },
                d = ({ children: e, className: t, decoration: s }) => {
                    const a = (0, n.jsx)("div", { className: (0, l.cn)("rounded-2xl bg-gray-0 from-background/50 overflow-hidden bg-gradient-to-tl from-10% to-transparent", t), children: e });
                    return s ? (0, n.jsxs)("div", { className: "relative", children: [s && (0, n.jsx)("span", { className: "absolute -top-2 -right-2 text-subtext3 px-2 py-1 rounded border border-nested-border/25 bg-gray-100 text-text", children: s }), a] }) : a;
                },
                o = ({ children: e, className: t, id: s, title: a }) => (0, n.jsxs)("div", { className: (0, l.cn)("flex w-full max-w-5xl flex-col items-center", t), id: s, children: [a && (0, n.jsx)("div", { className: "relative bg-clip-text py-1 text-[40px] font-[600] leading-[40px]", children: (0, n.jsx)("span", { className: "from-text bg-gradient-to-r from-70% to-gray-500 bg-clip-text text-transparent", children: a }) }), e] }),
                x = ({ children: e, className: t, comingSoon: s = !1, description: a, title: c }) => {
                    const { business: o } = (0, r.M1)();
                    return (0, n.jsxs)(d, { className: (0, l.cn)("relative flex h-full flex-col items-start", t), children: [(0, n.jsxs)("div", { className: "relative flex flex-col items-start gap-6 p-8", children: [(0, n.jsx)(i.x, { size: "title4", weight: "bold", className: "text-balance", children: c }), (0, n.jsx)(i.x, { size: "headline1", className: "opacity-60", children: a })] }), e, s && (0, n.jsx)("div", { className: "absolute top-2 flex w-full items-center justify-center", children: (0, n.jsx)("div", { className: "text-subtext3 bg-background rounded-lg px-2 py-1 text-gray-700", children: o.landing.comingSoon }) })] });
                };
        },
        921347: (e, t, s) => {
            s.d(t, { v: () => a });
            var n = s(152935);
            const a = (e, t = "MMMM dd, yyyy") => (0, n.WU)(new Date(Number.parseInt(e, 10)), t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-84b7dcae.c40f47fa.js.map
