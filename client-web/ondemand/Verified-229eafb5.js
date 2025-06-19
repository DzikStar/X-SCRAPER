"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-229eafb5"],
    {
        279043: (e, l, a) => {
            a.d(l, { v: () => h });
            var n = a(552322),
                s = a(994542),
                i = a(313270),
                t = a(430962),
                r = a(520003);
            const c = () => {
                    const { business: e } = (0, t.M1)();
                    return (0, n.jsxs)("div", { className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12", children: [(0, n.jsx)(r.ZQ, { title: e.hiring.benefits.jobListings.title, description: e.hiring.benefits.jobListings.description, className: "col-span-6 justify-between", children: (0, n.jsx)(o, { children: (0, n.jsx)("div", { children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Listing.e89f66aa.png", alt: "Job Listings", className: "object-cove w-full origin-top -translate-y-[90px]" }) }) }) }), (0, n.jsx)(r.ZQ, { title: e.hiring.benefits.careerPages.title, description: e.hiring.benefits.careerPages.description, className: "col-span-6 justify-between", children: (0, n.jsx)(o, { children: (0, n.jsx)("div", { children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Career-Page.93a8a04a.png", alt: "Career Landing Page", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, n.jsx)(r.ZQ, { title: e.hiring.benefits.promotion.title, description: e.hiring.benefits.promotion.description, className: "col-span-6 justify-between", children: (0, n.jsx)(o, { children: (0, n.jsx)("div", { children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Promotion.dd36976a.png", alt: "Job Promotion", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, n.jsx)(r.ZQ, { title: e.hiring.benefits.connect.title, description: e.hiring.benefits.connect.description, comingSoon: !0, className: "col-span-6 justify-between", children: (0, n.jsx)(o, { children: (0, n.jsx)("div", { children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Keywords.04854b2a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) })] });
                },
                o = ({ children: e }) => (0, n.jsx)("div", { className: "h-[270px] w-full px-8", children: (0, n.jsx)("div", { className: "relative flex h-full w-full justify-center", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))" }, children: e }) });
            var d = a(993165);
            const u = ({ subscribeUrl: e }) => {
                const { business: l } = (0, t.M1)();
                return (0, n.jsx)(r.$0, { className: "flex flex-col items-center text-center focus:outline-none", children: (0, n.jsx)("a", { href: e, className: "w-full items-center md:px-36", children: (0, n.jsx)(d.z, { variant: "insightsBright", className: "w-full py-5", children: l.hiring.footer.getStarted }) }) });
            };
            var g = a(332161);
            const m = () => {
                    const { business: e } = (0, t.M1)();
                    return (0, n.jsx)(r.$0, { className: "gap-12", children: (0, n.jsxs)("div", { className: "items-space flex w-full flex-col justify-around gap-12 pb-8 md:flex-row lg:gap-8", children: [(0, n.jsx)(p, { title: e.hiring.stats.users.title, description: e.hiring.stats.users.description }), (0, n.jsx)(p, { title: e.hiring.stats.companies.title, description: e.hiring.stats.companies.description }), (0, n.jsx)(p, { title: e.hiring.stats.applications.title, description: e.hiring.stats.applications.description })] }) });
                },
                p = ({ description: e, title: l }) => (0, n.jsxs)("div", { className: "flex flex-col items-center md:items-start", children: [(0, n.jsx)(g.x, { size: "title1", weight: "bold", className: "mt-4 text-balance", children: l }), (0, n.jsx)(g.x, { size: "headline1", weight: "bold", color: "gray700", className: "mt-1 text-left", children: e })] });
            var f = a(322506),
                x = a(428897);
            const b = ({ subscribeUrl: e, withCTA: l }) => {
                    const { business: a } = (0, t.M1)();
                    return (0, n.jsxs)(r.$0, { className: "flex flex-col items-center gap-6 pb-6 text-center", children: [(0, n.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, n.jsx)(x.Z, { className: "h-[18px] w-[18px]" }), a.landing.organizations] }), (0, n.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, n.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: a.hiring.hero.title }) }), (0, n.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: a.hiring.hero.description }), l && (0, n.jsx)(f.r, { href: e, className: "mt-auto", children: (0, n.jsx)(d.z, { variant: "insightsBright", className: "w-60 py-5", children: a.hiring.hero.cta }) })] });
                },
                h = ({ SubscribeButton: e, basicPrices: l, fullAccessPrices: a, interval: t = "Year", onIntervalChange: r, sectionConfig: o, subscribeUrl: d, includeHandleMarketing: g = !1 }) => {
                    const p = { benefits: { order: 4, visible: !0 }, footer: { order: 5, visible: !0 }, pricing: { order: 2, visible: !0 }, stats: { order: 3, visible: !0 }, title: { order: 1, visible: !0, withCTA: !1 }, offerBanner: { order: 2, visible: !1 }, ...o },
                        f = Object.entries(p)
                            .filter(([e, l]) => l.visible)
                            .sort(([e, l], [a, n]) => l.order - n.order)
                            .map(([e]) => e);
                    return (0, n.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: f.map((o) => {
                            const { withCTA: f } = p[o],
                                x = l?.Year?.promotionInfo?.endsAtMsec || a?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (o) {
                                    case "title":
                                        return (0, n.jsx)(b, { withCTA: f, subscribeUrl: d }, o);
                                    case "benefits":
                                        return (0, n.jsx)(c, {}, o);
                                    case "stats":
                                        return (0, n.jsx)(m, {}, o);
                                    case "footer":
                                        return (0, n.jsx)(u, { subscribeUrl: d }, o);
                                    case "offerBanner":
                                        return (0, n.jsx)(s.Z, { targetDate: x }, o);
                                    case "pricing":
                                        return (0, n.jsx)(i.n, { basicPrices: l, fullAccessPrices: a, interval: t, showTitle: !1, onIntervalChange: r, SubscribeButton: e, includeHandleMarketing: g }, o);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        156888: (e, l, a) => {
            a.r(l), a.d(l, { default: () => r });
            const n = {
                fragment: {
                    argumentDefinitions: (s = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "VOCardsQuery",
                    selections: [
                        {
                            alias: null,
                            args: (i = [
                                { kind: "Literal", name: "safety_level", value: "UserProfileHeader" },
                                { kind: "Variable", name: "screen_name", variableName: "screenName" },
                            ]),
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "user_result_by_screen_name",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { args: null, kind: "FragmentSpread", name: "avatar_user" },
                                                { args: null, kind: "FragmentSpread", name: "username_user" },
                                            ],
                                            type: "User",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: s,
                    kind: "Operation",
                    name: "VOCardsQuery",
                    selections: [
                        {
                            alias: null,
                            args: i,
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "user_result_by_screen_name",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "UserCore",
                                                    kind: "LinkedField",
                                                    name: "core",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
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
                                                { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                                                {
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
                                                (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            ],
                                            type: "User",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                t,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "nsVPuj1x3k3I7Bi9LHBScA", metadata: {}, name: "VOCardsQuery", operationKind: "query", text: null },
            };
            var s, i, t;
            n.hash = "54318311254590f476633b574e37081d";
            const r = n;
        },
        73367: (e, l, a) => {
            a.r(l), a.d(l, { default: () => r });
            const n = {
                fragment: {
                    argumentDefinitions: (s = [{ defaultValue: null, kind: "LocalArgument", name: "screen_names" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "WallOfLoveCardQuery",
                    selections: [
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                                    { kind: "Variable", name: "screen_names", variableName: "screen_names" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_results_by_screen_names",
                                plural: !0,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "result",
                                            plural: !1,
                                            selections: [
                                                { args: null, kind: "FragmentSpread", name: "avatar_user" },
                                                { args: null, kind: "FragmentSpread", name: "username_user" },
                                            ],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                    },
                                ],
                                storageKey: null,
                            },
                            action: "THROW",
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: s,
                    kind: "Operation",
                    name: "WallOfLoveCardQuery",
                    selections: [
                        {
                            alias: null,
                            args: i,
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "user_results_by_screen_names",
                            plural: !0,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "UserCore",
                                                    kind: "LinkedField",
                                                    name: "core",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
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
                                                { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                                                {
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
                                                (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            ],
                                            type: "User",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                t,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "GJ7-0PSozgOrXIEMGRKi3g", metadata: {}, name: "WallOfLoveCardQuery", operationKind: "query", text: null },
            };
            var s, i, t;
            n.hash = "26217b84d3e85be8b5bd57a2eb182760";
            const r = n;
        },
        392772: (e, l, a) => {
            a.d(l, { v: () => C });
            var n = a(552322),
                s = a(520003),
                i = a(994542),
                t = a(313270),
                r = a(332161),
                c = a(995348),
                o = a(177697),
                d = a(428897),
                u = a(430962);
            const g = ({ showTitle: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, n.jsx)(s.$0, { title: e ? l.landing.andMore.title : void 0, className: "gap-12", children: (0, n.jsxs)("div", { className: "flex flex-col items-center gap-12 pb-8 text-center lg:flex-row lg:gap-8", children: [(0, n.jsx)(m, { title: l.landing.andMore.analytics.title, description: l.landing.andMore.analytics.description, Icon: c.Z }), (0, n.jsx)(m, { title: l.landing.andMore.premiumSupport.title, description: l.landing.andMore.premiumSupport.description, Icon: o.Z }), (0, n.jsx)(m, { title: l.landing.andMore.premiumPlus.title, description: l.landing.andMore.premiumPlus.description, Icon: d.Z })] }) });
                },
                m = ({ Icon: e, description: l, title: a }) => (0, n.jsxs)("div", { className: "flex w-full max-w-xs flex-col items-center", children: [(0, n.jsx)("div", { className: "rounded-full bg-text text-background flex h-8 w-8 items-center justify-center p-1.5", children: (0, n.jsx)(e, { className: "h-full w-full" }) }), (0, n.jsx)(r.x, { size: "headline1", weight: "bold", className: "mt-4 text-balance", children: a }), (0, n.jsx)(r.x, { size: "headline2", className: "mt-2 opacity-60", children: l })] });
            var p = a(322506),
                f = a(889906),
                x = a(971046),
                b = a(323048);
            const h = () => (0, n.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, n.jsxs)("div", { className: "relative flex w-full max-w-lg", children: [(0, n.jsx)("div", { className: "absolute left-0 top-4 h-full rounded-xl opacity-80", children: (0, n.jsx)(y, { screenName: "coinbase" }) }), (0, n.jsx)("div", { className: "absolute right-0 top-28 opacity-60", children: (0, n.jsx)(y, { screenName: "tesla" }) }), (0, n.jsx)("div", { className: "absolute left-1/2 top-16 h-16 w-max -translate-x-1/2 transform", children: (0, n.jsx)(y, { screenName: "tobi" }) })] }) }),
                v = a(156888);
            function y({ screenName: e }) {
                const l = (0, f.useLazyLoadQuery)(v, { screenName: e });
                return l.user_result_by_screen_name?.result ? (0, n.jsxs)("div", { className: "flex items-center gap-2 rounded-xl border p-4", style: { backgroundColor: "#161818", borderColor: "#2d2f2f" }, children: [(0, n.jsx)(x.q, { resolution: "400x400", size: "large", user: l.user_result_by_screen_name.result }), (0, n.jsx)(b.R, { color: "white", size: "headline2", user: l.user_result_by_screen_name.result })] }) : null;
            }
            const j = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, n.jsxs)("div", {
                        className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12",
                        children: [
                            (0, n.jsx)(s.ZQ, { title: e.landing.goldBadgeAndAffiliations.title, description: e.landing.goldBadgeAndAffiliations.description, className: "col-span-5", children: (0, n.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, n.jsx)(h, {}) }) }),
                            (0, n.jsx)(s.ZQ, { title: e.landing.insights.title, description: e.landing.insights.description, className: "col-span-7", children: (0, n.jsxs)("div", { className: "relative w-full pb-16 pl-12", style: { WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: [(0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-1.d5954f7a.png", alt: "Insights", className: "w-[215px] object-contain opacity-60", loading: "lazy" }), (0, n.jsx)("div", { className: "absolute left-40 right-0 top-14 h-[150px] overflow-hidden", children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-2.2f2ccbaa.png", alt: "Insights", className: "absolute left-0 h-full w-auto max-w-none", loading: "lazy" }) })] }) }),
                            (0, n.jsx)(s.ZQ, { title: e.landing.advertisingCapabilities.title, description: e.landing.advertisingCapabilities.description, className: "col-span-7", children: (0, n.jsxs)("div", { className: "relative flex h-full w-full items-center justify-between  px-16 pb-8 flex-col", children: [(0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Advertising.8ece7b2a.png", alt: "Advertising capabilities", className: "w-full object-contain", loading: "lazy" }), (0, n.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [e.landing.advertisingCapabilities.disclaimer, " ", (0, n.jsx)(p.r, { href: "https://help.x.com/en/using-x/verified-organizations/ads-terms", className: "text-blue-300", children: e.landing.pricing.learnMore })] })] }) }),
                            (0, n.jsx)(s.ZQ, { title: e.landing.people.title, description: e.landing.people.description, comingSoon: !0, className: "col-span-5", children: (0, n.jsx)("div", { className: "h-[250px] w-full px-16", children: (0, n.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, n.jsx)("div", { className: "absolute left-0 right-0", children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-People-Search.b7b136da.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, n.jsx)(s.ZQ, { title: e.landing.jobs.title, description: e.landing.jobs.description, className: "col-span-6", children: (0, n.jsx)("div", { className: "h-full w-full px-24", children: (0, n.jsx)("div", { className: "relative h-full min-h-40 w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, n.jsx)("div", { className: "absolute left-0 right-0", children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Jobs.85c5f03a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, n.jsx)(s.ZQ, { title: e.landing.jobPromotion.title, description: e.landing.jobPromotion.description, className: "col-span-6", children: (0, n.jsx)("div", { className: "h-[250px] w-full px-20", children: (0, n.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, n.jsx)("div", { className: "absolute left-0 right-0", children: (0, n.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Job-Promotion.8f36409a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                        ],
                    });
                },
                w = ({ ctaUrl: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, n.jsx)(s.$0, { children: (0, n.jsxs)(s.Zb, { className: "flex w-full flex-col items-center justify-center gap-8 px-10 py-10 max-md:text-center md:flex-row md:px-20 md:py-[60px]", children: [(0, n.jsxs)(r.x, { size: "title3", weight: "medium", className: "md:text-title1 w-full md:leading-[56px]", children: [l.landing.footer.title1, " ", (0, n.jsx)("br", {}), l.landing.footer.title2] }), (0, n.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-6", children: [(0, n.jsx)(s.ad, { ctaUrl: e }), (0, n.jsx)(p.r, { href: "https://verified.x.com/en/verfied-organizations-interest-form", className: "text-text font-medium", children: l.landing.footer.cta })] })] }) });
                },
                k = () => (0, n.jsxs)(s.$0, { className: "relative aspect-[16/9] w-full shrink-0 items-center", children: [(0, n.jsx)("img", { alt: "", src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Hero-v2.918f06fa.png", className: "h-fulls w-full object-contain" }), (0, n.jsx)("div", { className: "to-background absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-80%" })] }),
                N = [
                    { name: "SpaceX", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-SpaceX.73d54a1a.png" },
                    { name: "Coinbase", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Coinbase.8994752a.png" },
                    { name: "Vercel", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Vercel.c174922a.png" },
                    { name: "Shopify", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Shopify.80684bfa.png" },
                ],
                _ = () => (0, n.jsx)(s.$0, { className: "w-full overflow-hidden pb-16", children: (0, n.jsxs)("div", { className: "relative flex w-full rtl:flex-row-reverse", children: [[0, 1].map((e) => (0, n.jsx)("div", { className: "animate-marquee flex opacity-75", style: { animationDuration: "20s", animationIterationCount: "infinite", animationTimingFunction: "linear" }, children: N.map((e) => (0, n.jsx)("div", { className: "mx-4 w-20 flex-shrink-0 md:mx-8 md:w-40", children: (0, n.jsx)("img", { src: e.url, alt: `${e.name} logo`, className: "h-9 w-full object-contain brightness-0 dark:invert" }) }, e.name)) }, `marquee-${e}`)), (0, n.jsxs)("div", { className: "pointer-events-none absolute h-full w-full", children: [(0, n.jsx)("div", { className: "from-background absolute start-0 top-0 h-full w-1/12 bg-gradient-to-r rtl:bg-gradient-to-l to-transparent" }), (0, n.jsx)("div", { className: "from-background absolute end-0 top-0 h-full w-1/12 bg-gradient-to-l rtl:bg-gradient-to-r to-transparent" })] })] }) }),
                L = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, n.jsxs)(s.$0, { className: "flex flex-col items-center gap-6 pb-8 text-center", children: [(0, n.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, n.jsx)(d.Z, { className: "h-[18px] w-[18px]" }), e.landing.organizations] }), (0, n.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, n.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: e.landing.hero.title }) }), (0, n.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: e.landing.hero.description })] });
                };
            var F = a(607499);
            const S = a(73367),
                K = ({ businessScreenName: e, text: l, userScreenName: a, userTitle: i }) => {
                    const t = (0, f.useLazyLoadQuery)(S, { screen_names: [e, a] }),
                        c = t.user_results_by_screen_names[0]?.result,
                        o = t.user_results_by_screen_names[1]?.result;
                    if (!c || !o) throw new Error("Required user data is missing");
                    return (0, n.jsxs)(s.Zb, { className: "flex w-full flex-col gap-10 p-8", children: [(0, n.jsxs)("div", { className: "flex flex-col gap-5", children: [(0, n.jsxs)("div", { className: "flex flex-row gap-2", children: [(0, n.jsx)("div", { className: "size-7", children: (0, n.jsx)(x.q, { resolution: "400x400", size: "fill", user: c }) }), (0, n.jsx)(b.R, { size: "headline1", user: c })] }), (0, n.jsx)(r.x, { size: "headline1", className: "opacity-70", children: l })] }), (0, n.jsxs)("div", { className: "flex flex-row gap-4", children: [(0, n.jsx)("div", { className: "size-12", children: (0, n.jsx)(x.q, { resolution: "400x400", size: "fill", user: o }) }), (0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, n.jsx)(b.R, { size: "body", user: o }), (0, n.jsx)(r.x, { size: "body", className: "opacity-70", weight: "bold", children: i })] })] })] });
                },
                T = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, n.jsx)(s.$0, { title: "Wall of love", className: "gap-12", children: (0, n.jsxs)("div", { className: "flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-stretch", children: [(0, n.jsx)(F.S, { fallback: null, children: (0, n.jsx)(K, { businessScreenName: "coinbase", text: e.landing.wallOfLove.coinbase.text, userScreenName: "brian_armstrong", userTitle: e.landing.wallOfLove.coinbase.userTitle }) }), (0, n.jsx)(F.S, { fallback: null, children: (0, n.jsx)(K, { businessScreenName: "vercel", text: e.landing.wallOfLove.vercel.text, userScreenName: "rauchg", userTitle: e.landing.wallOfLove.vercel.userTitle }) })] }) });
                },
                C = ({ SubscribeButton: e, basicPrices: l, enterpriseUrl: a, fullAccessPrices: r, interval: c = "Year", onIntervalChange: o, sectionConfig: d, includeHandleMarketing: u = !1 }) => {
                    const m = (Array.isArray(d) ? d : Object.entries({ andMore: { order: 6, showTitle: !0, visible: !0 }, benefits: { order: 5, visible: !0 }, footer: { order: 9, visible: !0 }, hero: { order: 8, visible: !0 }, pricing: { order: 3, showTitle: !1, visible: !0 }, socialProof: { order: 4, visible: !0 }, subscribeButtonCTA: { order: 2, visible: !1 }, title: { order: 1, visible: !0 }, wallOfLove: { order: 7, showTitle: !0, visible: !1 }, offerBanner: { order: 3, visible: !1 }, voCards: { order: 10, visible: !1 }, ...d }).map(([e, l]) => ({ ...l, key: e }))).filter((e) => e.visible).sort((e, l) => e.order - l.order);
                    return (0, n.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: m.map((d, m) => {
                            const { ctaUrl: p, showTitle: f, key: x } = d,
                                b = l?.Year?.promotionInfo?.endsAtMsec || r?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (x) {
                                    case "title":
                                        return (0, n.jsx)(L, {}, `${x}-${m}`);
                                    case "hero":
                                        return (0, n.jsx)(k, {}, `${x}-${m}`);
                                    case "socialProof":
                                        return (0, n.jsx)(_, {}, `${x}-${m}`);
                                    case "subscribeButtonCTA":
                                        return (0, n.jsx)(s.ad, { ctaUrl: p }, `${x}-${m}`);
                                    case "benefits":
                                        return (0, n.jsx)(j, {}, `${x}-${m}`);
                                    case "andMore":
                                        return (0, n.jsx)(g, { showTitle: f }, `${x}-${m}`);
                                    case "offerBanner":
                                        return (0, n.jsx)(i.Z, { targetDate: b }, `${x}-${m}`);
                                    case "voCards":
                                        return (0, n.jsx)(h, {}, `${x}-${m}`);
                                    case "pricing":
                                        return (0, n.jsx)(t.n, { basicPrices: l, fullAccessPrices: r, interval: c, onIntervalChange: o, SubscribeButton: e, showTitle: f, enterpriseUrl: a, includeHandleMarketing: u }, `${x}-${m}`);
                                    case "wallOfLove":
                                        return (0, n.jsx)(T, {}, `${x}-${m}`);
                                    case "footer":
                                        return (0, n.jsx)(w, { ctaUrl: p }, `${x}-${m}`);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        46062: (e, l, a) => {
            var n,
                s = function () {
                    return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
                },
                i = (function () {
                    var e = {};
                    return function (l) {
                        if (void 0 === e[l]) {
                            var a = document.querySelector(l);
                            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement)
                                try {
                                    a = a.contentDocument.head;
                                } catch (e) {
                                    a = null;
                                }
                            e[l] = a;
                        }
                        return e[l];
                    };
                })(),
                t = [];
            function r(e) {
                for (var l = -1, a = 0; a < t.length; a++)
                    if (t[a].identifier === e) {
                        l = a;
                        break;
                    }
                return l;
            }
            function c(e, l) {
                for (var a = {}, n = [], s = 0; s < e.length; s++) {
                    var i = e[s],
                        c = l.base ? i[0] + l.base : i[0],
                        o = a[c] || 0,
                        d = "".concat(c, " ").concat(o);
                    a[c] = o + 1;
                    var u = r(d),
                        g = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== u ? (t[u].references++, t[u].updater(g)) : t.push({ identifier: d, updater: x(g, l), references: 1 }), n.push(d);
                }
                return n;
            }
            function o(e) {
                var l = document.createElement("style"),
                    n = e.attributes || {};
                if (void 0 === n.nonce) {
                    var s = a.nc;
                    s && (n.nonce = s);
                }
                if (
                    (Object.keys(n).forEach(function (e) {
                        l.setAttribute(e, n[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(l);
                else {
                    var t = i(e.insert || "head");
                    if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    t.appendChild(l);
                }
                return l;
            }
            var d,
                u =
                    ((d = []),
                    function (e, l) {
                        return (d[e] = l), d.filter(Boolean).join("\n");
                    });
            function g(e, l, a, n) {
                var s = a ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
                if (e.styleSheet) e.styleSheet.cssText = u(l, s);
                else {
                    var i = document.createTextNode(s),
                        t = e.childNodes;
                    t[l] && e.removeChild(t[l]), t.length ? e.insertBefore(i, t[l]) : e.appendChild(i);
                }
            }
            function m(e, l, a) {
                var n = a.css,
                    s = a.media,
                    i = a.sourceMap;
                if ((s ? e.setAttribute("media", s) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet)) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            var p = null,
                f = 0;
            function x(e, l) {
                var a, n, s;
                if (l.singleton) {
                    var i = f++;
                    (a = p || (p = o(l))), (n = g.bind(null, a, i, !1)), (s = g.bind(null, a, i, !0));
                } else
                    (a = o(l)),
                        (n = m.bind(null, a, l)),
                        (s = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(a);
                        });
                return (
                    n(e),
                    function (l) {
                        if (l) {
                            if (l.css === e.css && l.media === e.media && l.sourceMap === e.sourceMap) return;
                            n((e = l));
                        } else s();
                    }
                );
            }
            e.exports = function (e, l) {
                (l = l || {}).singleton || "boolean" == typeof l.singleton || (l.singleton = s());
                var a = c((e = e || []), l);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var n = 0; n < a.length; n++) {
                            var s = r(a[n]);
                            t[s].references--;
                        }
                        for (var i = c(e, l), o = 0; o < a.length; o++) {
                            var d = r(a[o]);
                            0 === t[d].references && (t[d].updater(), t.splice(d, 1));
                        }
                        a = i;
                    }
                };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-229eafb5.0ac784da.js.map
