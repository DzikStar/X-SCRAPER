"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards", "icons/IconIllustrationPassiveIncome-js"],
    {
        980633: (e, t, a) => {
            a.r(t), a.d(t, { AwardsSettingsQueryRequest: () => te, default: () => ie });
            var l,
                n,
                i,
                s,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "useAwardsActivate_user" }, (n = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "awards_eligibility", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "AwardsSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: l,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { kind: "InlineFragment", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }, n, i, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "c_ww6XqjHvIqQAZWzaRR2g", metadata: {}, name: "AwardsSettingsQuery", operationKind: "query", text: null },
                };
            r.hash = "69e2417e3a2238129128f7eb4144152b";
            const c = r;
            var o = a(202784),
                d = (a(585488), a(107267)),
                u = a(443781),
                m = a(883229),
                g = a(725516),
                p = a(535338),
                y = a(615027),
                h = (a(136728), a(325686)),
                v = a(688715),
                w = a(731708),
                b = a(154003),
                k = a(167630),
                f = a(392237),
                _ = a(111677),
                E = a.n(_),
                Z = a(980407),
                z = a(698537),
                F = a(782642),
                K = a(892541),
                x = a(87908),
                R = a(491369);
            const T = f.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                A = [
                    { illustration: o.createElement(K.default, { style: T.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: o.createElement(x.default, { style: T.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: o.createElement(R.default, { style: T.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                S = () =>
                    o.createElement(
                        h.Z,
                        { role: "list", style: T.list },
                        A.map((e) => o.createElement(h.Z, { key: e.title, role: "listitem", style: T.listItem }, e.illustration, o.createElement(h.Z, { style: T.listItemContent }, o.createElement(w.ZP, { style: T.listItemTitle, weight: "heavy" }, e.title), o.createElement(w.ZP, { color: "gray700" }, e.description)))),
                    ),
                C = "/settings/monetization";
            var H = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            H.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const I = H;
            var M = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const P = M;
            var q = a(614983),
                D = a.n(q),
                V = a(277660),
                L = a.n(V),
                B = a(351743),
                Q = a.n(B);
            const W = P,
                j = I,
                O = (e) => {
                    const t = L()(W, e),
                        [a, l] = Q()(j);
                    return [
                        o.useCallback(
                            () =>
                                new Promise((e, l) => {
                                    a({
                                        variables: {},
                                        onCompleted: (t, a) => e(),
                                        onError: l,
                                        updater: (e, a) => {
                                            const l = t.__id;
                                            D()(l, "userId must be specified");
                                            const n = e.get(l);
                                            D()(n, "userRecord must be specified"), n.invalidateRecord();
                                        },
                                    });
                                }),
                            [a, t.__id],
                        ),
                        l,
                    ];
                },
                U = E().ecdbece0,
                N = E().ef4602ec,
                G = E().j087774e,
                X = E().db3f0bbe,
                Y = E().a1f40cf8,
                $ = (0, v.ju)("https://legal.x.com/creator-terms"),
                J = f.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = o.memo(
                    (0, g.Z)(
                        ({ user: e }) => {
                            const t = (0, d.useHistory)(),
                                a = o.useCallback(() => {
                                    t.push(C);
                                }, [t]),
                                l = (0, F.p)(),
                                [n, i] = O(e),
                                s = o.useCallback(() => {
                                    n()
                                        .then(() => {
                                            l({ text: U }), t.push("/settings/monetization/awards/dashboard");
                                        })
                                        .catch(() => {
                                            l({ text: N });
                                        });
                                }, [l, n, t]),
                                r = o.useMemo(() => ({ link: o.createElement(w.ZP, { link: $, weight: "bold" }) }), []),
                                c = o.useMemo(() => o.createElement(h.Z, { style: J.footer }, o.createElement(w.ZP, { align: "center", color: "gray700", style: J.spacing }, o.createElement(E().I18NFormatMessage, { $i18n: "d4b0b963" }, o.cloneElement(r.link, null, E().d604fb32))), o.createElement(b.ZP, { disabled: i, onPress: s, type: "primaryFilled" }, i ? o.createElement(k.Z, null) : Y)), [i, s, r]);
                            return o.createElement(Z.Z, { backButtonType: "close", bottomBar: c, documentTitle: G, history: t, onBackClick: a }, o.createElement(h.Z, { style: J.root }, o.createElement(w.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), o.createElement(w.ZP, { size: "headline1", style: J.headline, weight: "medium" }, X), o.createElement(z.Z, { style: J.spacing, type: z.j.DiscoGlobe }), o.createElement(S, null)));
                        },
                        { page: "onboarding", section: "Coins" },
                    ),
                ),
                te = c,
                ae = () => {
                    const { featureSwitches: e } = o.useContext(u.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: l } = (0, p.p)(te, {}),
                        n = l.user_results.result,
                        i = a && n.award_eligible,
                        s = 0 === n.awards_eligibility?.length;
                    return o.createElement(d.Switch, null, t && s && !i ? null : o.createElement(d.Route, null, o.createElement(y.Z, { to: C })), o.createElement(d.Route, { exact: !0, path: "/settings/awards" }, o.createElement(ee, { user: n })));
                },
                le = { context: "AWARD_SETTINGS" },
                ne = { type: "CustomRetry", content: () => null },
                ie = o.memo((0, g.Z)(() => o.createElement(m.N, { errorConfig: le, fallback: ne }, o.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
        87908: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var l = a(202784),
                n = a(890601),
                i = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 50 50", children: l.createElement("g", null, l.createElement("circle", { cx: "25", cy: "25", fill: "#0f1419", r: "25" }), l.createElement("path", { d: "M36 16v14h-2V18H18v-2zm-22 4h18v14H14zm13.5 2c0 .328.065.653.19.957.126.303.31.579.542.81.47.47 1.105.733 1.768.733V22zm0 10H30v-2.5c-.663 0-1.299.263-1.768.732-.469.47-.732 1.105-.732 1.768zM21 27c0 1.66.9 3 2 3s2-1.34 2-3-.9-3-2-3-2 1.34-2 3zm-5-2.5c.328 0 .653-.065.957-.19.303-.126.579-.31.81-.542.233-.232.417-.508.543-.811.125-.304.19-.629.19-.957H16zm0 7.5h2.5c0-.663-.263-1.299-.732-1.768-.47-.469-1.105-.732-1.768-.732z", fill: "#fff" })) }, { writingDirection: t });
            };
            r.metadata = { width: 50, height: 50 };
            const c = r;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var l = a(202784),
                n = a(890601),
                i = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.a984356a.js.map
