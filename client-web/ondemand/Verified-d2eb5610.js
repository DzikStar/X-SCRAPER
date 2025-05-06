"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d2eb5610"],
    {
        279043: (e, l, s) => {
            s.d(l, { v: () => h });
            var a = s(552322),
                n = s(994542),
                i = s(313270),
                r = s(430962),
                t = s(520003);
            const c = () => {
                    const { business: e } = (0, r.M1)();
                    return (0, a.jsxs)("div", { className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12", children: [(0, a.jsx)(t.ZQ, { title: e.hiring.benefits.jobListings.title, description: e.hiring.benefits.jobListings.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Listing.e89f66aa.png", alt: "Job Listings", className: "object-cove w-full origin-top -translate-y-[90px]" }) }) }) }), (0, a.jsx)(t.ZQ, { title: e.hiring.benefits.careerPages.title, description: e.hiring.benefits.careerPages.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Career-Page.93a8a04a.png", alt: "Career Landing Page", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, a.jsx)(t.ZQ, { title: e.hiring.benefits.promotion.title, description: e.hiring.benefits.promotion.description, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Promotion.dd36976a.png", alt: "Job Promotion", className: "w-full origin-top -translate-y-[50px] scale-[0.8] object-cover lg:-translate-y-[125px]" }) }) }) }), (0, a.jsx)(t.ZQ, { title: e.hiring.benefits.connect.title, description: e.hiring.benefits.connect.description, comingSoon: !0, className: "col-span-6 justify-between", children: (0, a.jsx)(o, { children: (0, a.jsx)("div", { children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/Hiring-Landing-Keywords.04854b2a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) })] });
                },
                o = ({ children: e }) => (0, a.jsx)("div", { className: "h-[270px] w-full px-8", children: (0, a.jsx)("div", { className: "relative flex h-full w-full justify-center", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3))" }, children: e }) });
            var d = s(436059);
            const u = ({ subscribeUrl: e }) => {
                const { business: l } = (0, r.M1)();
                return (0, a.jsx)(t.$0, { className: "flex flex-col items-center text-center focus:outline-none", children: (0, a.jsx)("a", { href: e, className: "w-full items-center md:px-36", children: (0, a.jsx)(d.z, { variant: "insightsBright", className: "w-full py-5", children: l.hiring.footer.getStarted }) }) });
            };
            var g = s(941204);
            const m = () => {
                    const { business: e } = (0, r.M1)();
                    return (0, a.jsx)(t.$0, { className: "gap-12", children: (0, a.jsxs)("div", { className: "items-space flex w-full flex-col justify-around gap-12 pb-8 md:flex-row lg:gap-8", children: [(0, a.jsx)(p, { title: e.hiring.stats.users.title, description: e.hiring.stats.users.description }), (0, a.jsx)(p, { title: e.hiring.stats.companies.title, description: e.hiring.stats.companies.description }), (0, a.jsx)(p, { title: e.hiring.stats.applications.title, description: e.hiring.stats.applications.description })] }) });
                },
                p = ({ description: e, title: l }) => (0, a.jsxs)("div", { className: "flex flex-col items-center md:items-start", children: [(0, a.jsx)(g.x, { size: "title1", weight: "bold", className: "mt-4 text-balance", children: l }), (0, a.jsx)(g.x, { size: "headline1", weight: "bold", color: "gray700", className: "mt-1 text-left", children: e })] });
            var x = s(812115),
                b = s(428897);
            const f = ({ subscribeUrl: e, withCTA: l }) => {
                    const { business: s } = (0, r.M1)();
                    return (0, a.jsxs)(t.$0, { className: "flex flex-col items-center gap-6 pb-6 text-center", children: [(0, a.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, a.jsx)(b.Z, { className: "h-[18px] w-[18px]" }), s.landing.organizations] }), (0, a.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, a.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: s.hiring.hero.title }) }), (0, a.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: s.hiring.hero.description }), l && (0, a.jsx)(x.r, { href: e, className: "mt-auto", children: (0, a.jsx)(d.z, { variant: "insightsBright", className: "w-60 py-5", children: s.hiring.hero.cta }) })] });
                },
                h = ({ SubscribeButton: e, basicPrices: l, fullAccessPrices: s, interval: r = "Year", onIntervalChange: t, sectionConfig: o, subscribeUrl: d, includeHandleMarketing: g = !1 }) => {
                    const p = { benefits: { order: 4, visible: !0 }, footer: { order: 5, visible: !0 }, pricing: { order: 2, visible: !0 }, stats: { order: 3, visible: !0 }, title: { order: 1, visible: !0, withCTA: !1 }, offerBanner: { order: 2, visible: !1 }, ...o },
                        x = Object.entries(p)
                            .filter(([e, l]) => l.visible)
                            .sort(([e, l], [s, a]) => l.order - a.order)
                            .map(([e]) => e);
                    return (0, a.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: x.map((o) => {
                            const { withCTA: x } = p[o],
                                b = l?.Year?.promotionInfo?.endsAtMsec || s?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (o) {
                                    case "title":
                                        return (0, a.jsx)(f, { withCTA: x, subscribeUrl: d }, o);
                                    case "benefits":
                                        return (0, a.jsx)(c, {}, o);
                                    case "stats":
                                        return (0, a.jsx)(m, {}, o);
                                    case "footer":
                                        return (0, a.jsx)(u, { subscribeUrl: d }, o);
                                    case "offerBanner":
                                        return (0, a.jsx)(n.Z, { targetDate: b }, o);
                                    case "pricing":
                                        return (0, a.jsx)(i.n, { basicPrices: l, fullAccessPrices: s, interval: r, showTitle: !1, onIntervalChange: t, SubscribeButton: e, includeHandleMarketing: g }, o);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        156888: (e, l, s) => {
            s.r(l), s.d(l, { default: () => t });
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
                                                (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            ],
                                            type: "User",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                r,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "nsVPuj1x3k3I7Bi9LHBScA", metadata: {}, name: "VOCardsQuery", operationKind: "query", text: null },
            };
            var n, i, r;
            a.hash = "54318311254590f476633b574e37081d";
            const t = a;
        },
        73367: (e, l, s) => {
            s.r(l), s.d(l, { default: () => t });
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
                                                (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            ],
                                            type: "User",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                r,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "GJ7-0PSozgOrXIEMGRKi3g", metadata: {}, name: "WallOfLoveCardQuery", operationKind: "query", text: null },
            };
            var n, i, r;
            a.hash = "26217b84d3e85be8b5bd57a2eb182760";
            const t = a;
        },
        392772: (e, l, s) => {
            s.d(l, { v: () => C });
            var a = s(552322),
                n = s(520003),
                i = s(994542),
                r = s(313270),
                t = s(941204),
                c = s(995348),
                o = s(177697),
                d = s(428897),
                u = s(430962);
            const g = ({ showTitle: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { title: e ? l.landing.andMore.title : void 0, className: "gap-12", children: (0, a.jsxs)("div", { className: "flex flex-col items-center gap-12 pb-8 text-center lg:flex-row lg:gap-8", children: [(0, a.jsx)(m, { title: l.landing.andMore.analytics.title, description: l.landing.andMore.analytics.description, Icon: c.Z }), (0, a.jsx)(m, { title: l.landing.andMore.premiumSupport.title, description: l.landing.andMore.premiumSupport.description, Icon: o.Z }), (0, a.jsx)(m, { title: l.landing.andMore.premiumPlus.title, description: l.landing.andMore.premiumPlus.description, Icon: d.Z })] }) });
                },
                m = ({ Icon: e, description: l, title: s }) => (0, a.jsxs)("div", { className: "flex w-full max-w-xs flex-col items-center", children: [(0, a.jsx)("div", { className: "rounded-full bg-text text-background flex h-8 w-8 items-center justify-center p-1.5", children: (0, a.jsx)(e, { className: "h-full w-full" }) }), (0, a.jsx)(t.x, { size: "headline1", weight: "bold", className: "mt-4 text-balance", children: s }), (0, a.jsx)(t.x, { size: "headline2", className: "mt-2 opacity-60", children: l })] });
            var p = s(812115),
                x = s(889906),
                b = s(971046),
                f = s(323048);
            const h = () => (0, a.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, a.jsxs)("div", { className: "relative flex w-full max-w-lg", children: [(0, a.jsx)("div", { className: "absolute left-0 top-4 h-full rounded-xl opacity-80", children: (0, a.jsx)(y, { screenName: "coinbase" }) }), (0, a.jsx)("div", { className: "absolute right-0 top-28 opacity-60", children: (0, a.jsx)(y, { screenName: "tesla" }) }), (0, a.jsx)("div", { className: "absolute left-1/2 top-16 h-16 w-max -translate-x-1/2 transform", children: (0, a.jsx)(y, { screenName: "tobi" }) })] }) }),
                v = s(156888);
            function y({ screenName: e }) {
                const l = (0, x.useLazyLoadQuery)(v, { screenName: e });
                return l.user_result_by_screen_name?.result ? (0, a.jsxs)("div", { className: "flex items-center gap-2 rounded-xl border p-4", style: { backgroundColor: "#161818", borderColor: "#2d2f2f" }, children: [(0, a.jsx)(b.q, { resolution: "400x400", size: "large", user: l.user_result_by_screen_name.result }), (0, a.jsx)(f.R, { color: "white", size: "headline2", user: l.user_result_by_screen_name.result })] }) : null;
            }
            const j = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsxs)("div", {
                        className: "flex w-full max-w-5xl flex-col gap-6 pb-8 md:grid md:grid-cols-12",
                        children: [
                            (0, a.jsx)(n.ZQ, { title: e.landing.goldBadgeAndAffiliations.title, description: e.landing.goldBadgeAndAffiliations.description, className: "col-span-5", children: (0, a.jsx)("div", { className: "flex h-52 w-full justify-center px-4", children: (0, a.jsx)(h, {}) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.insights.title, description: e.landing.insights.description, className: "col-span-7", children: (0, a.jsxs)("div", { className: "relative w-full pb-16 pl-12", style: { WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: [(0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-1.d5954f7a.png", alt: "Insights", className: "w-[215px] object-contain opacity-60", loading: "lazy" }), (0, a.jsx)("div", { className: "absolute left-40 right-0 top-14 h-[150px] overflow-hidden", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Insights-2.2f2ccbaa.png", alt: "Insights", className: "absolute left-0 h-full w-auto max-w-none", loading: "lazy" }) })] }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.advertisingCapabilities.title, description: e.landing.advertisingCapabilities.description, className: "col-span-7", children: (0, a.jsxs)("div", { className: "relative flex h-full w-full items-center justify-between  px-16 pb-8 flex-col", children: [(0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Advertising.8ece7b2a.png", alt: "Advertising capabilities", className: "w-full object-contain", loading: "lazy" }), (0, a.jsxs)(t.x, { size: "subtext3", color: "gray700", children: [e.landing.advertisingCapabilities.disclaimer, " ", (0, a.jsx)(p.r, { href: "https://help.x.com/en/using-x/verified-organizations/ads-terms", className: "text-blue-300", children: e.landing.pricing.learnMore })] })] }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.people.title, description: e.landing.people.description, comingSoon: !0, className: "col-span-5", children: (0, a.jsx)("div", { className: "h-[250px] w-full px-16", children: (0, a.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-People-Search.b7b136da.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.jobs.title, description: e.landing.jobs.description, className: "col-span-6", children: (0, a.jsx)("div", { className: "h-full w-full px-24", children: (0, a.jsx)("div", { className: "relative h-full min-h-40 w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Jobs.85c5f03a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                            (0, a.jsx)(n.ZQ, { title: e.landing.jobPromotion.title, description: e.landing.jobPromotion.description, className: "col-span-6", children: (0, a.jsx)("div", { className: "h-[250px] w-full px-20", children: (0, a.jsx)("div", { className: "relative h-full w-full", style: { WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))", maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))" }, children: (0, a.jsx)("div", { className: "absolute left-0 right-0", children: (0, a.jsx)("img", { src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Job-Promotion.8f36409a.png", alt: "People search", className: "w-full object-cover", loading: "lazy" }) }) }) }) }),
                        ],
                    });
                },
                w = ({ ctaUrl: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { children: (0, a.jsxs)(n.Zb, { className: "flex w-full flex-col items-center justify-center gap-8 px-10 py-10 max-md:text-center md:flex-row md:px-20 md:py-[60px]", children: [(0, a.jsxs)(t.x, { size: "title3", weight: "medium", className: "md:text-title1 w-full md:leading-[56px]", children: [l.landing.footer.title1, " ", (0, a.jsx)("br", {}), l.landing.footer.title2] }), (0, a.jsxs)("div", { className: "flex w-full flex-col items-center justify-center gap-6", children: [(0, a.jsx)(n.ad, { ctaUrl: e }), (0, a.jsx)(p.r, { href: "https://verified.x.com/en/verfied-organizations-interest-form", className: "text-text font-medium", children: l.landing.footer.cta })] })] }) });
                },
                k = () => (0, a.jsxs)(n.$0, { className: "relative aspect-[16/9] w-full shrink-0 items-center", children: [(0, a.jsx)("img", { alt: "", src: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Hero-v2.918f06fa.png", className: "h-fulls w-full object-contain" }), (0, a.jsx)("div", { className: "to-background absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-80%" })] }),
                N = [
                    { name: "SpaceX", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-SpaceX.73d54a1a.png" },
                    { name: "Coinbase", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Coinbase.8994752a.png" },
                    { name: "Vercel", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Vercel.c174922a.png" },
                    { name: "Shopify", url: "https://abs.twimg.com/responsive-web/client-web/VO-Landing-Logo-Shopify.80684bfa.png" },
                ],
                _ = () => (0, a.jsx)(n.$0, { className: "w-full overflow-hidden pb-16", children: (0, a.jsxs)("div", { className: "relative flex w-full rtl:flex-row-reverse", children: [[0, 1].map((e) => (0, a.jsx)("div", { className: "animate-marquee flex opacity-75", style: { animationDuration: "20s", animationIterationCount: "infinite", animationTimingFunction: "linear" }, children: N.map((e) => (0, a.jsx)("div", { className: "mx-4 w-20 flex-shrink-0 md:mx-8 md:w-40", children: (0, a.jsx)("img", { src: e.url, alt: `${e.name} logo`, className: "h-9 w-full object-contain brightness-0 dark:invert" }) }, e.name)) }, `marquee-${e}`)), (0, a.jsxs)("div", { className: "pointer-events-none absolute h-full w-full", children: [(0, a.jsx)("div", { className: "from-background absolute start-0 top-0 h-full w-1/12 bg-gradient-to-r rtl:bg-gradient-to-l to-transparent" }), (0, a.jsx)("div", { className: "from-background absolute end-0 top-0 h-full w-1/12 bg-gradient-to-l rtl:bg-gradient-to-r to-transparent" })] })] }) }),
                L = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsxs)(n.$0, { className: "flex flex-col items-center gap-6 pb-8 text-center", children: [(0, a.jsxs)("p", { className: "text-headline1 flex items-center gap-2 font-bold", children: [(0, a.jsx)(d.Z, { className: "h-[18px] w-[18px]" }), e.landing.organizations] }), (0, a.jsx)("h1", { className: "text-title1 text-balance font-bold md:text-[64px] md:leading-[70px]", children: (0, a.jsx)("span", { className: "from-text to-text/30 bg-gradient-to-r from-90% bg-clip-text text-transparent", children: e.landing.hero.title }) }), (0, a.jsx)("p", { className: "text-headline1 max-w-[740px] text-pretty opacity-60", children: e.landing.hero.description })] });
                };
            var S = s(607499);
            const F = s(73367),
                K = ({ businessScreenName: e, text: l, userScreenName: s, userTitle: i }) => {
                    const r = (0, x.useLazyLoadQuery)(F, { screen_names: [e, s] }),
                        c = r.user_results_by_screen_names[0]?.result,
                        o = r.user_results_by_screen_names[1]?.result;
                    if (!c || !o) throw new Error("Required user data is missing");
                    return (0, a.jsxs)(n.Zb, { className: "flex w-full flex-col gap-10 p-8", children: [(0, a.jsxs)("div", { className: "flex flex-col gap-5", children: [(0, a.jsxs)("div", { className: "flex flex-row gap-2", children: [(0, a.jsx)("div", { className: "size-7", children: (0, a.jsx)(b.q, { resolution: "400x400", size: "fill", user: c }) }), (0, a.jsx)(f.R, { size: "headline1", user: c })] }), (0, a.jsx)(t.x, { size: "headline1", className: "opacity-70", children: l })] }), (0, a.jsxs)("div", { className: "flex flex-row gap-4", children: [(0, a.jsx)("div", { className: "size-12", children: (0, a.jsx)(b.q, { resolution: "400x400", size: "fill", user: o }) }), (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, a.jsx)(f.R, { size: "body", user: o }), (0, a.jsx)(t.x, { size: "body", className: "opacity-70", weight: "bold", children: i })] })] })] });
                },
                T = () => {
                    const { business: e } = (0, u.M1)();
                    return (0, a.jsx)(n.$0, { title: "Wall of love", className: "gap-12", children: (0, a.jsxs)("div", { className: "flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-stretch", children: [(0, a.jsx)(S.S, { fallback: null, children: (0, a.jsx)(K, { businessScreenName: "coinbase", text: e.landing.wallOfLove.coinbase.text, userScreenName: "brian_armstrong", userTitle: e.landing.wallOfLove.coinbase.userTitle }) }), (0, a.jsx)(S.S, { fallback: null, children: (0, a.jsx)(K, { businessScreenName: "vercel", text: e.landing.wallOfLove.vercel.text, userScreenName: "rauchg", userTitle: e.landing.wallOfLove.vercel.userTitle }) })] }) });
                },
                C = ({ SubscribeButton: e, basicPrices: l, enterpriseUrl: s, fullAccessPrices: t, interval: c = "Year", onIntervalChange: o, sectionConfig: d, includeHandleMarketing: u = !1 }) => {
                    const m = (Array.isArray(d) ? d : Object.entries({ andMore: { order: 6, showTitle: !0, visible: !0 }, benefits: { order: 5, visible: !0 }, footer: { order: 9, visible: !0 }, hero: { order: 8, visible: !0 }, pricing: { order: 3, showTitle: !1, visible: !0 }, socialProof: { order: 4, visible: !0 }, subscribeButtonCTA: { order: 2, visible: !1 }, title: { order: 1, visible: !0 }, wallOfLove: { order: 7, showTitle: !0, visible: !1 }, offerBanner: { order: 3, visible: !1 }, voCards: { order: 10, visible: !1 }, ...d }).map(([e, l]) => ({ ...l, key: e }))).filter((e) => e.visible).sort((e, l) => e.order - l.order);
                    return (0, a.jsx)("div", {
                        className: "text-text flex w-full flex-col items-center gap-10 pb-40 pt-10 max-md:px-4",
                        children: m.map((d, m) => {
                            const { ctaUrl: p, showTitle: x, key: b } = d,
                                f = l?.Year?.promotionInfo?.endsAtMsec || t?.Year?.promotionInfo?.endsAtMsec;
                            return (() => {
                                switch (b) {
                                    case "title":
                                        return (0, a.jsx)(L, {}, `${b}-${m}`);
                                    case "hero":
                                        return (0, a.jsx)(k, {}, `${b}-${m}`);
                                    case "socialProof":
                                        return (0, a.jsx)(_, {}, `${b}-${m}`);
                                    case "subscribeButtonCTA":
                                        return (0, a.jsx)(n.ad, { ctaUrl: p }, `${b}-${m}`);
                                    case "benefits":
                                        return (0, a.jsx)(j, {}, `${b}-${m}`);
                                    case "andMore":
                                        return (0, a.jsx)(g, { showTitle: x }, `${b}-${m}`);
                                    case "offerBanner":
                                        return (0, a.jsx)(i.Z, { targetDate: f }, `${b}-${m}`);
                                    case "voCards":
                                        return (0, a.jsx)(h, {}, `${b}-${m}`);
                                    case "pricing":
                                        return (0, a.jsx)(r.n, { basicPrices: l, fullAccessPrices: t, interval: c, onIntervalChange: o, SubscribeButton: e, showTitle: x, enterpriseUrl: s, includeHandleMarketing: u }, `${b}-${m}`);
                                    case "wallOfLove":
                                        return (0, a.jsx)(T, {}, `${b}-${m}`);
                                    case "footer":
                                        return (0, a.jsx)(w, { ctaUrl: p }, `${b}-${m}`);
                                    default:
                                        return null;
                                }
                            })();
                        }),
                    });
                };
        },
        735079: (e, l, s) => {
            var a = s(609859);
            e.exports = function (e) {
                return a[e].prototype;
            };
        },
        278945: (e, l, s) => {
            var a = s(23103),
                n = s(265968),
                i = s(277111),
                r = s(910905),
                t = s(341253),
                c = s(735079),
                o = s(609736),
                d = Array,
                u = n(c("Array").sort);
            a(
                { target: "Array", proto: !0 },
                {
                    toSorted: function (e) {
                        void 0 !== e && i(e);
                        var l = r(this),
                            s = t(d, l);
                        return u(s, e);
                    },
                },
            ),
                o("toSorted");
        },
        199237: (e, l, s) => {
            s.d(l, { fC: () => w, bU: () => k });
            var a = s(202784),
                n = s(717998),
                i = s(262656),
                r = s(552322);
            function t(...e) {
                const l = e[0];
                if (1 === e.length) return l;
                const s = () => {
                    const s = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const n = s.reduce((l, { useScope: s, scopeName: a }) => ({ ...l, ...s(e)[`__scope${a}`] }), {});
                        return a.useMemo(() => ({ [`__scope${l.scopeName}`]: n }), [n]);
                    };
                };
                return (s.scopeName = l.scopeName), s;
            }
            var c = s(387695),
                o = s(890022),
                d = s(335019),
                u = s(172714),
                g = "Switch",
                [m, p] = (function (e, l = []) {
                    let s = [];
                    const n = () => {
                        const l = s.map((e) => a.createContext(e));
                        return function (s) {
                            const n = s?.[e] || l;
                            return a.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: n } }), [s, n]);
                        };
                    };
                    return (
                        (n.scopeName = e),
                        [
                            function (l, n) {
                                const i = a.createContext(n),
                                    t = s.length;
                                function c(l) {
                                    const { scope: s, children: n, ...c } = l,
                                        o = s?.[e][t] || i,
                                        d = a.useMemo(() => c, Object.values(c));
                                    return (0, r.jsx)(o.Provider, { value: d, children: n });
                                }
                                return (
                                    (s = [...s, n]),
                                    (c.displayName = l + "Provider"),
                                    [
                                        c,
                                        function (s, r) {
                                            const c = r?.[e][t] || i,
                                                o = a.useContext(c);
                                            if (o) return o;
                                            if (void 0 !== n) return n;
                                            throw new Error(`\`${s}\` must be used within \`${l}\``);
                                        },
                                    ]
                                );
                            },
                            t(n, ...l),
                        ]
                    );
                })(g),
                [x, b] = m(g),
                f = a.forwardRef((e, l) => {
                    const { __scopeSwitch: s, name: t, checked: o, defaultChecked: d, required: g, disabled: m, value: p = "on", onCheckedChange: b, ...f } = e,
                        [h, v] = a.useState(null),
                        w = (0, i.e)(l, (e) => v(e)),
                        k = a.useRef(!1),
                        N = !h || Boolean(h.closest("form")),
                        [_ = !1, L] = (0, c.T)({ prop: o, defaultProp: d, onChange: b });
                    return (0, r.jsxs)(x, {
                        scope: s,
                        checked: _,
                        disabled: m,
                        children: [
                            (0, r.jsx)(u.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": _,
                                "aria-required": g,
                                "data-state": j(_),
                                "data-disabled": m ? "" : void 0,
                                disabled: m,
                                value: p,
                                ...f,
                                ref: w,
                                onClick: (0, n.M)(e.onClick, (e) => {
                                    L((e) => !e), N && ((k.current = e.isPropagationStopped()), k.current || e.stopPropagation());
                                }),
                            }),
                            N && (0, r.jsx)(y, { control: h, bubbles: !k.current, name: t, value: p, checked: _, required: g, disabled: m, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            f.displayName = g;
            var h = "SwitchThumb",
                v = a.forwardRef((e, l) => {
                    const { __scopeSwitch: s, ...a } = e,
                        n = b(h, s);
                    return (0, r.jsx)(u.WV.span, { "data-state": j(n.checked), "data-disabled": n.disabled ? "" : void 0, ...a, ref: l });
                });
            v.displayName = h;
            var y = (e) => {
                const { control: l, checked: s, bubbles: n = !0, ...i } = e,
                    t = a.useRef(null),
                    c = (0, o.D)(s),
                    u = (0, d.t)(l);
                return (
                    a.useEffect(() => {
                        const e = t.current,
                            l = window.HTMLInputElement.prototype,
                            a = Object.getOwnPropertyDescriptor(l, "checked").set;
                        if (c !== s && a) {
                            const l = new Event("click", { bubbles: n });
                            a.call(e, s), e.dispatchEvent(l);
                        }
                    }, [c, s, n]),
                    (0, r.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: s, ...i, tabIndex: -1, ref: t, style: { ...e.style, ...u, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function j(e) {
                return e ? "checked" : "unchecked";
            }
            var w = f,
                k = v;
        },
        890022: (e, l, s) => {
            s.d(l, { D: () => n });
            var a = s(202784);
            function n(e) {
                const l = a.useRef({ value: e, previous: e });
                return a.useMemo(() => (l.current.value !== e && ((l.current.previous = l.current.value), (l.current.value = e)), l.current.previous), [e]);
            }
        },
        787321: (e, l, s) => {
            function a(e) {
                return (l) => {
                    const s = (e ? Math[e] : Math.trunc)(l);
                    return 0 === s ? 0 : s;
                };
            }
            s.d(l, { u: () => a });
        },
        699629: (e, l, s) => {
            s.d(l, { A: () => r });
            var a = s(787321),
                n = s(31418),
                i = s(641645);
            function r(e, l, s) {
                const r = (0, i._)(e, l) / n.vh;
                return (0, a.u)(s?.roundingMethod)(r);
            }
        },
        641645: (e, l, s) => {
            s.d(l, { _: () => n });
            var a = s(150729);
            function n(e, l) {
                return +(0, a.Q)(e) - +(0, a.Q)(l);
            }
        },
        534002: (e, l, s) => {
            s.d(l, { X: () => r });
            var a = s(787321),
                n = s(31418),
                i = s(641645);
            function r(e, l, s) {
                const r = (0, i._)(e, l) / n.yJ;
                return (0, a.u)(s?.roundingMethod)(r);
            }
        },
        624656: (e, l, s) => {
            s.d(l, { c: () => i });
            var a = s(787321),
                n = s(641645);
            function i(e, l, s) {
                const i = (0, n._)(e, l) / 1e3;
                return (0, a.u)(s?.roundingMethod)(i);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d2eb5610.dd05120a.js.map
