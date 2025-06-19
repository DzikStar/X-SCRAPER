"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-7c4dcfe2"],
    {
        279043: (e, l, s) => {
            s.d(l, { v: () => h });
            var a = s(552322),
                n = s(994542),
                i = s(313270),
                t = s(430962),
                r = s(520003);
            const c = () => {
                    const { business: e } = (0, t.M1)();
                    return (0, a.jsxs)("div", { className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12", children: [(0, a.jsx)(r.ZQ, { title: e.hiring.benefits.jobListings.title, description: e.hiring.benefits.jobListings.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Listing.e89f66aa.png", alt: "Job Listings", className: "object-cove w-full origin-top -translate-y-[90px]" }) }) }) }), (0, a.jsx)(r.ZQ, { title: e.hiring.benefits.careerPages.title, description: e.hiring.benefits.careerPages.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Career-Page.93a8a04a.png", alt: "Career Landing Page", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, a.jsx)(r.ZQ, { title: e.hiring.benefits.promotion.title, description: e.hiring.benefits.promotion.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Promotion.dd36976a.png", alt: "Job Promotion", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, a.jsx)(r.ZQ, { title: e.hiring.benefits.connect.title, description: e.hiring.benefits.connect.description, comingSoon: !0, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Keywords.04854b2a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) })] });
                },
                o = ({ children: e }) => (0, a.jsx)("div", { className: "h-[270px] w-full px-8", children: (0, a.jsx)("div", { className: "relative flex h-full w-full justify-center", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))" }, children: e }) });
            var d = s(993165);
            const u = ({ subscribeUrl: e }) => {
                const { business: l } = (0, t.M1)();
                return (0, a.jsx)(r.$0, { className: "flex flex-col items-center text-center focus:outline-none", children: (0, a.jsx)("a", { href: e, className: "w-full items-center md:px-36", children: (0, a.jsx)(d.z, { variant: "insightsBright", className: "w-full py-5", children: l.hiring.footer.getStarted }) }) });
            };
            var g = s(332161);
            const m = () => {
                    const { business: e } = (0, t.M1)();
                    return (0, a.jsx)(r.$0, { className: "gap-12", children: (0, a.jsxs)("div", { className: "items-space flex w-full flex-col justify-around gap-12 pb-8 md:flex-row lg:gap-8", children: [(0, a.jsx)(x, { title: e.hiring.stats.users.title, description: e.hiring.stats.users.description }), (0, a.jsx)(x, { title: e.hiring.stats.companies.title, description: e.hiring.stats.companies.description }), (0, a.jsx)(x, { title: e.hiring.stats.applications.title, description: e.hiring.stats.applications.description })] }) });
                },
                x = ({ description: e, title: l }) => (0, a.jsxs)("div", { className: "flex flex-col items-center md:items-start", children: [(0, a.jsx)(g.x, { size: "title1", weight: "bold", className: "mt-4 text-balance", children: l }), (0, a.jsx)(g.x, { size: "headline1", weight: "bold", color: "gray700", className: "mt-1 text-left", children: e })] });
            var p = s(322506),
                b = s(428897);
            const f = ({ subscribeUrl: e, withCTA: l }) => {
                    const { business: s } = (0, t.M1)();
                    return (0, a.jsxs)(r.$0, { className: "flex flex-col items-center gap-6 pb-6 text-center", children: [(0, a.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, a.jsx)(b.Z, { className: "h-[18px] w-[18px]" }), s.landing.organizations] }), (0, a.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, a.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: s.hiring.hero.title }) }), (0, a.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: s.hiring.hero.description }), l && (0, a.jsx)(p.r, { href: e, className: "mt-auto", children: (0, a.jsx)(d.z, { variant: "insightsBright", className: "w-60 py-5", children: s.hiring.hero.cta }) })] });
                },
                h = ({ SubscribeButton: e, basicPrices: l, fullAccessPrices: s, interval: t = "Year", onIntervalChange: r, sectionConfig: o, subscribeUrl: d, includeHandleMarketing: g = !1 }) => {
                    const x = { benefits: { order: 4, visible: !0 }, footer: { order: 5, visible: !0 }, pricing: { order: 2, visible: !0 }, stats: { order: 3, visible: !0 }, title: { order: 1, visible: !0, withCTA: !1 }, offerBanner: { order: 2, visible: !1 }, ...o },
                        p = Object.entries(x)
                            .filter(([e, l]) => l.visible)
                            .sort(([e, l], [s, a]) => l.order - a.order)
                            .map(([e]) => e);
                    return (0, a.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: p.map((o) => {
                            const { withCTA: p } = x[o],
                                b = l?.Year?.promotionInfo?.endsAtMsec || s?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (o) {
                                    case "title":
                                        return (0, a.jsx)(f, { withCTA: p, subscribeUrl: d }, o);
                                    case "benefits":
                                        return (0, a.jsx)(c, {}, o);
                                    case "stats":
                                        return (0, a.jsx)(m, {}, o);
                                    case "footer":
                                        return (0, a.jsx)(u, { subscribeUrl: d }, o);
                                    case "offerBanner":
                                        return (0, a.jsx)(n.Z, { targetDate: b }, o);
                                    case "pricing":
                                        return (0, a.jsx)(i.n, { basicPrices: l, fullAccessPrices: s, interval: t, showTitle: !1, onIntervalChange: r, SubscribeButton: e, includeHandleMarketing: g }, o);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        156888: (e, l, s) => {
            s.r(l), s.d(l, { default: () => r });
            const a = {
                fragment: {
                    argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
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
                    argumentDefinitions: n,
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
            var n, i, t;
            a.hash = "54318311254590f476633b574e37081d";
            const r = a;
        },
        73367: (e, l, s) => {
            s.r(l), s.d(l, { default: () => r });
            const a = {
                fragment: {
                    argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screen_names" }]),
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
                    argumentDefinitions: n,
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
            var n, i, t;
            a.hash = "26217b84d3e85be8b5bd57a2eb182760";
            const r = a;
        },
        392772: (e, l, s) => {
            s.d(l, { v: () => K });
            var a = s(552322),
                n = s(520003),
                i = s(994542),
                t = s(313270),
                r = s(332161),
                c = s(995348),
                o = s(177697),
                d = s(428897),
                u = s(430962);
            const g = ({ showTitle: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { title: e ? l.landing.andMore.title : void 0, className: "gap-12", children: (0, a.jsxs)("div", { className: "flex flex-col items-center gap-12 pb-8 text-center lg:flex-row lg:gap-8", children: [(0, a.jsx)(m, { title: l.landing.andMore.analytics.title, description: l.landing.andMore.analytics.description, Icon: c.Z }), (0, a.jsx)(m, { title: l.landing.andMore.premiumSupport.title, description: l.landing.andMore.premiumSupport.description, Icon: o.Z }), (0, a.jsx)(m, { title: l.landing.andMore.premiumPlus.title, description: l.landing.andMore.premiumPlus.description, Icon: d.Z })] }) });
                },
                m = ({ Icon: e, description: l, title: s }) => (0, a.jsxs)("div", { className: "flex w-full max-w-xs flex-col items-center", children: [(0, a.jsx)("div", { className: "rounded-full bg-text text-background flex h-8 w-8 items-center justify-center p-1.5", children: (0, a.jsx)(e, { className: "h-full w-full" }) }), (0, a.jsx)(r.x, { size: "headline1", weight: "bold", className: "mt-4 text-balance", children: s }), (0, a.jsx)(r.x, { size: "headline2", className: "mt-2 opacity-60", children: l })] });
            var x = s(322506),
                p = s(889906),
                b = s(971046),
                f = s(323048);
            const h = () => (0, a.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, a.jsxs)("div", { className: "relative flex w-full max-w-lg", children: [(0, a.jsx)("div", { className: "absolute left-0 top-4 h-full rounded-xl opacity-80", children: (0, a.jsx)(v, { screenName: "coinbase" }) }), (0, a.jsx)("div", { className: "absolute right-0 top-28 opacity-60", children: (0, a.jsx)(v, { screenName: "tesla" }) }), (0, a.jsx)("div", { className: "absolute left-1/2 top-16 h-16 w-max -translate-x-1/2 transform", children: (0, a.jsx)(v, { screenName: "tobi" }) })] }) }),
                j = s(156888);
            function v({ screenName: e }) {
                const l = (0, p.useLazyLoadQuery)(j, { screenName: e });
                return l.user_result_by_screen_name?.result ? (0, a.jsxs)("div", { className: "flex items-center gap-2 rounded-xl border p-4", style: { backgroundColor: "#161818", borderColor: "#2d2f2f" }, children: [(0, a.jsx)(b.q, { resolution: "400x400", size: "large", user: l.user_result_by_screen_name.result }), (0, a.jsx)(f.R, { color: "white", size: "headline2", user: l.user_result_by_screen_name.result })] }) : null;
            }
            const y = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsxs)("div", {
                        className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12",
                        children: [
                            (0, a.jsx)(n.ZQ, { title: e.landing.goldBadgeAndAffiliations.title, description: e.landing.goldBadgeAndAffiliations.description, className: "col-span-5", children: (0, a.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, a.jsx)(h, {}) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.insights.title, description: e.landing.insights.description, className: "col-span-7", children: (0, a.jsxs)("div", { className: "relative w-full pb-16 pl-12", style: { WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: [(0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-1.d5954f7a.png", alt: "Insights", className: "w-[215px] object-contain opacity-60", loading: "lazy" }), (0, a.jsx)("div", { className: "absolute left-40 right-0 top-14 h-[150px] overflow-hidden", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-2.2f2ccbaa.png", alt: "Insights", className: "absolute left-0 h-full w-auto max-w-none", loading: "lazy" }) })] }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.advertisingCapabilities.title, description: e.landing.advertisingCapabilities.description, className: "col-span-7", children: (0, a.jsxs)("div", { className: "relative flex h-full w-full items-center justify-between  px-16 pb-8 flex-col", children: [(0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Advertising.8ece7b2a.png", alt: "Advertising capabilities", className: "w-full object-contain", loading: "lazy" }), (0, a.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [e.landing.advertisingCapabilities.disclaimer, " ", (0, a.jsx)(x.r, { href: "https://help.x.com/en/using-x/verified-organizations/ads-terms", className: "text-blue-300", children: e.landing.pricing.learnMore })] })] }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.people.title, description: e.landing.people.description, comingSoon: !0, className: "col-span-5", children: (0, a.jsx)("div", { className: "h-[250px] w-full px-16", children: (0, a.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-People-Search.b7b136da.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.jobs.title, description: e.landing.jobs.description, className: "col-span-6", children: (0, a.jsx)("div", { className: "h-full w-full px-24", children: (0, a.jsx)("div", { className: "relative h-full min-h-40 w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Jobs.85c5f03a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.jobPromotion.title, description: e.landing.jobPromotion.description, className: "col-span-6", children: (0, a.jsx)("div", { className: "h-[250px] w-full px-20", children: (0, a.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Job-Promotion.8f36409a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                        ],
                    });
                },
                w = ({ ctaUrl: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { children: (0, a.jsxs)(n.Zb, { className: "flex w-full flex-col items-center justify-center gap-8 px-10 py-10 max-md:text-center md:flex-row md:px-20 md:py-[60px]", children: [(0, a.jsxs)(r.x, { size: "title3", weight: "medium", className: "md:text-title1 w-full md:leading-[56px]", children: [l.landing.footer.title1, " ", (0, a.jsx)("br", {}), l.landing.footer.title2] }), (0, a.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-6", children: [(0, a.jsx)(n.ad, { ctaUrl: e }), (0, a.jsx)(x.r, { href: "https://verified.x.com/en/verfied-organizations-interest-form", className: "text-text font-medium", children: l.landing.footer.cta })] })] }) });
                },
                N = () => (0, a.jsxs)(n.$0, { className: "relative aspect-[16/9] w-full shrink-0 items-center", children: [(0, a.jsx)("img", { alt: "", src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Hero-v2.918f06fa.png", className: "h-fulls w-full object-contain" }), (0, a.jsx)("div", { className: "to-background absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-80%" })] }),
                k = [
                    { name: "SpaceX", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-SpaceX.73d54a1a.png" },
                    { name: "Coinbase", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Coinbase.8994752a.png" },
                    { name: "Vercel", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Vercel.c174922a.png" },
                    { name: "Shopify", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Shopify.80684bfa.png" },
                ],
                _ = () => (0, a.jsx)(n.$0, { className: "w-full overflow-hidden pb-16", children: (0, a.jsxs)("div", { className: "relative flex w-full rtl:flex-row-reverse", children: [[0, 1].map((e) => (0, a.jsx)("div", { className: "animate-marquee flex opacity-75", style: { animationDuration: "20s", animationIterationCount: "infinite", animationTimingFunction: "linear" }, children: k.map((e) => (0, a.jsx)("div", { className: "mx-4 w-20 flex-shrink-0 md:mx-8 md:w-40", children: (0, a.jsx)("img", { src: e.url, alt: `${e.name} logo`, className: "h-9 w-full object-contain brightness-0 dark:invert" }) }, e.name)) }, `marquee-${e}`)), (0, a.jsxs)("div", { className: "pointer-events-none absolute h-full w-full", children: [(0, a.jsx)("div", { className: "from-background absolute start-0 top-0 h-full w-1/12 bg-gradient-to-r rtl:bg-gradient-to-l to-transparent" }), (0, a.jsx)("div", { className: "from-background absolute end-0 top-0 h-full w-1/12 bg-gradient-to-l rtl:bg-gradient-to-r to-transparent" })] })] }) }),
                L = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsxs)(n.$0, { className: "flex flex-col items-center gap-6 pb-8 text-center", children: [(0, a.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, a.jsx)(d.Z, { className: "h-[18px] w-[18px]" }), e.landing.organizations] }), (0, a.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, a.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: e.landing.hero.title }) }), (0, a.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: e.landing.hero.description })] });
                };
            var F = s(607499);
            const S = s(73367),
                C = ({ businessScreenName: e, text: l, userScreenName: s, userTitle: i }) => {
                    const t = (0, p.useLazyLoadQuery)(S, { screen_names: [e, s] }),
                        c = t.user_results_by_screen_names[0]?.result,
                        o = t.user_results_by_screen_names[1]?.result;
                    if (!c || !o) throw new Error("Required user data is missing");
                    return (0, a.jsxs)(n.Zb, { className: "flex w-full flex-col gap-10 p-8", children: [(0, a.jsxs)("div", { className: "flex flex-col gap-5", children: [(0, a.jsxs)("div", { className: "flex flex-row gap-2", children: [(0, a.jsx)("div", { className: "size-7", children: (0, a.jsx)(b.q, { resolution: "400x400", size: "fill", user: c }) }), (0, a.jsx)(f.R, { size: "headline1", user: c })] }), (0, a.jsx)(r.x, { size: "headline1", className: "opacity-70", children: l })] }), (0, a.jsxs)("div", { className: "flex flex-row gap-4", children: [(0, a.jsx)("div", { className: "size-12", children: (0, a.jsx)(b.q, { resolution: "400x400", size: "fill", user: o }) }), (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, a.jsx)(f.R, { size: "body", user: o }), (0, a.jsx)(r.x, { size: "body", className: "opacity-70", weight: "bold", children: i })] })] })] });
                },
                M = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { title: "Wall of love", className: "gap-12", children: (0, a.jsxs)("div", { className: "flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-stretch", children: [(0, a.jsx)(F.S, { fallback: null, children: (0, a.jsx)(C, { businessScreenName: "coinbase", text: e.landing.wallOfLove.coinbase.text, userScreenName: "brian_armstrong", userTitle: e.landing.wallOfLove.coinbase.userTitle }) }), (0, a.jsx)(F.S, { fallback: null, children: (0, a.jsx)(C, { businessScreenName: "vercel", text: e.landing.wallOfLove.vercel.text, userScreenName: "rauchg", userTitle: e.landing.wallOfLove.vercel.userTitle }) })] }) });
                },
                K = ({ SubscribeButton: e, basicPrices: l, enterpriseUrl: s, fullAccessPrices: r, interval: c = "Year", onIntervalChange: o, sectionConfig: d, includeHandleMarketing: u = !1 }) => {
                    const m = (Array.isArray(d) ? d : Object.entries({ andMore: { order: 6, showTitle: !0, visible: !0 }, benefits: { order: 5, visible: !0 }, footer: { order: 9, visible: !0 }, hero: { order: 8, visible: !0 }, pricing: { order: 3, showTitle: !1, visible: !0 }, socialProof: { order: 4, visible: !0 }, subscribeButtonCTA: { order: 2, visible: !1 }, title: { order: 1, visible: !0 }, wallOfLove: { order: 7, showTitle: !0, visible: !1 }, offerBanner: { order: 3, visible: !1 }, voCards: { order: 10, visible: !1 }, ...d }).map(([e, l]) => ({ ...l, key: e }))).filter((e) => e.visible).sort((e, l) => e.order - l.order);
                    return (0, a.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: m.map((d, m) => {
                            const { ctaUrl: x, showTitle: p, key: b } = d,
                                f = l?.Year?.promotionInfo?.endsAtMsec || r?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (b) {
                                    case "title":
                                        return (0, a.jsx)(L, {}, `${b}-${m}`);
                                    case "hero":
                                        return (0, a.jsx)(N, {}, `${b}-${m}`);
                                    case "socialProof":
                                        return (0, a.jsx)(_, {}, `${b}-${m}`);
                                    case "subscribeButtonCTA":
                                        return (0, a.jsx)(n.ad, { ctaUrl: x }, `${b}-${m}`);
                                    case "benefits":
                                        return (0, a.jsx)(y, {}, `${b}-${m}`);
                                    case "andMore":
                                        return (0, a.jsx)(g, { showTitle: p }, `${b}-${m}`);
                                    case "offerBanner":
                                        return (0, a.jsx)(i.Z, { targetDate: f }, `${b}-${m}`);
                                    case "voCards":
                                        return (0, a.jsx)(h, {}, `${b}-${m}`);
                                    case "pricing":
                                        return (0, a.jsx)(t.n, { basicPrices: l, fullAccessPrices: r, interval: c, onIntervalChange: o, SubscribeButton: e, showTitle: p, enterpriseUrl: s, includeHandleMarketing: u }, `${b}-${m}`);
                                    case "wallOfLove":
                                        return (0, a.jsx)(M, {}, `${b}-${m}`);
                                    case "footer":
                                        return (0, a.jsx)(w, { ctaUrl: x }, `${b}-${m}`);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        994542: (e, l, s) => {
            s.d(l, { Z: () => m });
            var a = s(552322),
                n = s(596017),
                i = s(699629),
                t = s(534002),
                r = s(624656),
                c = s(202784),
                o = s(520003),
                d = s(430962),
                u = s(921347);
            const g = ({ targetDate: e }) => {
                    const { business: l } = (0, d.M1)(),
                        s = (0, c.useCallback)(() => {
                            const s = new Date(),
                                a = new Date(Number.parseInt(e, 10));
                            return { days: { value: (0, n.j)(a, s), label: l.landing.offerBanner.days }, hours: { value: (0, i.A)(a, s) % 24, label: l.landing.offerBanner.hours }, minutes: { value: (0, t.X)(a, s) % 60, label: l.landing.offerBanner.minutes }, seconds: { value: (0, r.c)(a, s) % 60, label: l.landing.offerBanner.seconds } };
                        }, [e, l]),
                        [o, u] = c.useState(!1),
                        [g, m] = (0, c.useState)(s());
                    if (
                        ((0, c.useEffect)(() => {
                            u(!0);
                            const e = setInterval(() => {
                                m(s());
                            }, 1e3);
                            return () => clearInterval(e);
                        }, [s]),
                        o)
                    )
                        return (0, a.jsx)("div", { className: "rounded-xl p-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#6FCA6C]", children: (0, a.jsx)("div", { className: "rounded-[calc(1.5rem-12px)] p-3 dark:bg-black bg-white", children: (0, a.jsx)("div", { className: "flex gap-4", children: Object.entries(g).map(([e, l]) => (0, a.jsxs)("div", { className: "flex flex-col items-center text-center min-w-[50px]", children: [(0, a.jsx)("span", { className: "text-title4 font-extrabold", children: l.value }), (0, a.jsx)("span", { className: "text-subtext1 font-medium text-gray-900", children: l.label })] }, e)) }) }) });
                },
                m = ({ targetDate: e }) => {
                    const { business: l } = (0, d.M1)();
                    if (!e) return null;
                    const s = (0, u.v)(e);
                    return (0, a.jsxs)(o.$0, { children: [(0, a.jsx)("div", { className: "p-px rounded-2xl bg-gradient-to-r rtl:bg-gradient-to-l from-[#6FCA6C] to-transparent", children: (0, a.jsx)("div", { className: "rounded-[calc(1.5rem-8px)] p-0 dark:bg-black bg-white", children: (0, a.jsxs)("div", { className: "relative rounded-[calc(1.5rem-8px)] p-8 bg-gradient-to-r from-[rgba(118,170,153,0.2)] to-[rgba(60,154,123,0.2)]", children: [(0, a.jsx)("div", { className: "absolute md:top-1/3 md:-end-10 hidden md:flex", children: (0, a.jsx)(g, { targetDate: e }) }), (0, a.jsxs)("div", { className: "md:w-[60%]", children: [(0, a.jsx)("h2", { className: "text-title2 font-bold", children: l.landing.offerBanner.title }), (0, a.jsxs)("p", { className: "mt-4 text-[20px] font-light", children: [l.landing.offerBanner.description, " ", (0, a.jsx)("span", { className: "font-bold", children: s }), "."] })] })] }) }) }), (0, a.jsx)("div", { className: "-mt-6 md:hidden z-10", children: (0, a.jsx)(g, { targetDate: e }) })] });
                };
        },
        313270: (e, l, s) => {
            s.d(l, { n: () => b });
            var a = s(552322),
                n = s(261012),
                i = s(322506),
                t = s(993165),
                r = s(332161),
                c = s(305399),
                o = s(840489),
                d = s(202784),
                u = s(520003),
                g = s(430962),
                m = s(921347),
                x = s(699416);
            const p = ({ SubscribeButton: e, cta: l, description: s, disclaimer: n, disclaimerLink: t, features: c, featuresTitle: d, highlight: p, priceElements: b, selectedInterval: f, selectedTier: h, title: j }) => {
                const { business: v } = (0, g.M1)();
                if (!b) return null;
                const y = "Month" === f ? b.baseCost : b.annualBaseMonthly,
                    { discountedCost: w, annualBaseMonthly: N, percentOff: k, endsAtMsec: _, promoLabel: L } = b.promotionInfo || {},
                    F = (_ && (0, m.v)(_)) || "",
                    S = "Custom" === b.baseCost ? null : v.landing.month,
                    C = "Custom" === b.baseCost ? s : "Year" === f ? v.landing.pricing.billedAnnually({ cost: b.baseCost ?? "" }) : v.landing.pricing.billedMonthly,
                    M = w && v.landing.pricing.offerAnualBilling({ discountedCost: w ?? "", baseCost: b.baseCost ?? "" });
                return (0, a.jsxs)(u.Zb, {
                    decoration: L,
                    className: "flex w-full max-w-[360px] flex-col justify-between gap-8 px-7 py-6",
                    children: [(0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, a.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [(0, a.jsx)(r.x, { size: "headline1", weight: "bold", children: j }), k ? (0, a.jsx)("div", { className: "rounded-full text-subtext3 dark:text-white text-black flex h-[18px] items-center justify-center bg-green-50 p-2 font-medium", children: v.landing.pricing.percentageOff({ percentOff: k, endDate: F }) }) : p && (0, a.jsx)("div", { className: "rounded-full text-subtext3 text-background flex h-[18px] items-center justify-center bg-green-500 px-2 font-[600]", children: p })] }), (0, a.jsxs)("div", { className: "flex flex-col", children: [(0, a.jsxs)("div", { className: "items-baseline flex flex-row flex-wrap", children: [(0, a.jsx)("span", { className: (0, o.Z)("text-title1", w ? "md:text-title3 text-title3 line-through font-normal" : "font-extrabold"), children: y }), N && (0, a.jsx)("span", { className: "text-title3 font-extrabold text-green-500 ms-1", children: N }), S && (0, a.jsxs)(r.x, { size: "body", className: "opacity-60", children: ["/ ", S] })] }), (0, a.jsx)(r.x, { size: "body", className: "opacity-60 mt-1", children: M || C })] }), "Enterprise" !== h && "string" == typeof l ? (0, a.jsx)(e, { priceElements: b, selectedTier: h, selectedInterval: f, buttonLabel: b.buttonLabel || l }) : l, (0, a.jsxs)("div", { className: "mt-2 flex flex-col gap-2.5", children: [(0, a.jsx)(r.x, { weight: "normal", children: d }), c.map((e) => (0, a.jsxs)("div", { className: "flex items-start gap-2", children: [(0, a.jsx)(x.Z, { className: "text-text size-5 shrink-0" }), (0, a.jsx)(r.x, { weight: "normal", children: e })] }, e))] })] }), n && (0, a.jsxs)(r.x, { size: "subtext3", color: "gray700", children: [n, " ", t && (0, a.jsx)(i.r, { href: t, className: "text-blue-300", children: v.landing.pricing.learnMore })] })],
                });
            };
            const b = ({ SubscribeButton: e, basicPrices: l, enterpriseUrl: s, fullAccessPrices: x, interval: b = "Year", onIntervalChange: f, showTitle: h = !0, includeHandleMarketing: j = !1 }) => {
                const v = (0, c.a)("(max-width: 768px)"),
                    [y, w] = (0, d.useState)(b),
                    { business: N } = (0, g.M1)(),
                    k = h ? N.landing.pricing.title : void 0,
                    _ = l?.Year?.promotionInfo?.endsAtMsec || x?.Year?.promotionInfo?.endsAtMsec,
                    L = _ && (0, m.v)(_),
                    F = L ? (v ? N.landing.pricing.offer : N.landing.pricing.offerEnds({ endDate: L })) : void 0,
                    S = { affiliateCost: N.landing.pricing.enterprisePrice, affiliateInterval: "month", affiliateTaxLabel: "plus any applicable tax", baseCost: N.landing.pricing.enterprisePrice, baseInterval: "month", basePriceCurrency: "USD", link: null, monthlyTaxLabel: "plus any applicable tax", percentageSavedLabel: null },
                    C = (e) => {
                        f ? f(e) : w(e);
                    },
                    M = N.landing.pricing.basicFeaturesOffer(y),
                    K = N.landing.pricing.fullAccessFeaturesOffer(y, j);
                return (0, a.jsxs)(u.$0, {
                    title: k,
                    className: "gap-5 pb-8",
                    id: "pricing",
                    children: [
                        (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)("span", { className: (0, o.Z)("cursor-pointer transition-colors", { "text-gray-500": "Year" === y, "text-text": "Month" === y }), onClick: () => C("Month"), children: N.landing.pricing.monthly }), (0, a.jsx)(n.r, { checked: "Year" === y, onCheckedChange: (e) => C(e ? "Year" : "Month"), size: "small", className: "data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-400", thumbClassName: "data-[state=checked]:bg-text data-[state=unchecked]:bg-text" }), (0, a.jsxs)("div", { className: (0, o.Z)("relative flex cursor-pointer items-baseline gap-1 transition-colors", { "text-gray-500": "Month" === y, "text-text": "Year" === y }), onClick: () => C("Year"), children: [N.landing.pricing.yearly, (F || l?.Year.percentageSavedLabel) && (0, a.jsx)("div", { className: (0, o.Z)("pointer-events-none absolute start-[calc(100%+8px)] cursor-default select-none transition-opacity", { "opacity-0": "Month" === y, "opacity-100": "Year" === y }), children: (0, a.jsx)("span", { className: "text-subtext2 whitespace-nowrap text-green-500", children: F || l?.Year.percentageSavedLabel }) })] })] }),
                        (0, a.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-stretch", children: [(0, a.jsx)(p, { title: N.landing.pricing.basic, priceElements: l?.[y], features: M, featuresTitle: N.landing.pricing.basicFeaturesTitle, SubscribeButton: e, selectedTier: "Basic", selectedInterval: y, cta: N.landing.pricing.basicCta }), (0, a.jsx)(p, { title: N.landing.pricing.fullAccess, priceElements: x?.[y], features: K, featuresTitle: N.landing.pricing.fullAccessFeaturesTitle, highlight: N.landing.pricing.highlight, SubscribeButton: e, selectedTier: "FullAccess", selectedInterval: y, cta: N.landing.pricing.fullAccessCta, disclaimer: "Month" === y ? N.landing.pricing.affiliatesDisclaimerMonthly : N.landing.pricing.affiliatesDisclaimerYearly, disclaimerLink: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing" }), s && (0, a.jsx)(p, { title: N.landing.pricing.enterprise, description: N.landing.pricing.enterpriseDescription, priceElements: S, features: [...N.landing.pricing.enterpriseFeatures], featuresTitle: N.landing.pricing.enterpriseFeaturesTitle, SubscribeButton: e, selectedTier: "Enterprise", selectedInterval: y, cta: (0, a.jsx)(i.r, { href: s, className: "mt-auto w-full", children: (0, a.jsx)(t.z, { variant: "insightsBright", className: "my-4 h-[36px] w-full", children: N.landing.pricing.enterpriseCta }) }) })] }),
                        (0, a.jsx)("div", { className: "flex flex-col items-center justify-center gap-4", children: (0, a.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [N.landing.pricing.disclaimer, " ", (0, a.jsx)(i.r, { className: "text-blue-300", href: "https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing", children: N.landing.pricing.learnMore })] }) }),
                    ],
                });
            };
        },
        520003: (e, l, s) => {
            s.d(l, { $0: () => d, ZQ: () => u, Zb: () => o, ad: () => c });
            var a = s(552322),
                n = s(993165),
                i = s(332161),
                t = s(31674),
                r = s(430962);
            const c = ({ ctaUrl: e }) => {
                    const { business: l } = (0, r.M1)();
                    return (0, a.jsx)("a", { href: e || "#pricing", className: "focus:outline-none", children: (0, a.jsx)(n.z, { variant: "insightsBright", className: "w-60 py-5", children: (0, a.jsx)(i.x, { size: "headline2", weight: "bold", color: "background", children: l.landing.subscribeButton }) }) });
                },
                o = ({ children: e, className: l, decoration: s }) => {
                    const n = (0, a.jsx)("div", { className: (0, t.cn)("rounded-2xl bg-gray-0 from-background/50 overflow-hidden bg-gradient-to-tl from-10% to-transparent", l), children: e });
                    return s ? (0, a.jsxs)("div", { className: "relative", children: [s && (0, a.jsx)("span", { className: "absolute -top-2 -right-2 text-subtext3 px-2 py-1 rounded border border-nested-border/25 bg-gray-100 text-text", children: s }), n] }) : n;
                },
                d = ({ children: e, className: l, id: s, title: n }) => (0, a.jsxs)("div", { className: (0, t.cn)("flex w-full max-w-5xl flex-col items-center", l), id: s, children: [n && (0, a.jsx)("div", { className: "relative bg-clip-text py-1 text-[40px] font-[600] leading-[40px]", children: (0, a.jsx)("span", { className: "from-text bg-gradient-to-r from-70% to-gray-500 bg-clip-text text-transparent", children: n }) }), e] }),
                u = ({ children: e, className: l, comingSoon: s = !1, description: n, title: c }) => {
                    const { business: d } = (0, r.M1)();
                    return (0, a.jsxs)(o, { className: (0, t.cn)("relative flex h-full flex-col items-start", l), children: [(0, a.jsxs)("div", { className: "relative flex flex-col items-start gap-6 p-8", children: [(0, a.jsx)(i.x, { size: "title4", weight: "bold", className: "text-balance", children: c }), (0, a.jsx)(i.x, { size: "headline1", className: "opacity-60", children: n })] }), e, s && (0, a.jsx)("div", { className: "absolute top-2 flex w-full items-center justify-center", children: (0, a.jsx)("div", { className: "text-subtext3 bg-background rounded-lg px-2 py-1 text-gray-700", children: d.landing.comingSoon }) })] });
                };
        },
        921347: (e, l, s) => {
            s.d(l, { v: () => n });
            var a = s(152935);
            const n = (e, l = "MMMM dd, yyyy") => (0, a.WU)(new Date(Number.parseInt(e, 10)), l);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-7c4dcfe2.7f162baa.js.map
