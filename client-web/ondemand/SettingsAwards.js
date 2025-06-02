"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards", "icons/IconIllustrationReceiveCoins-js"],
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
            const o = r;
            var c = a(202784),
                d = (a(585488), a(107267)),
                u = a(443781),
                m = a(883229),
                g = a(725516),
                p = a(535338),
                y = a(615027),
                w = (a(136728), a(325686)),
                k = a(688715),
                b = a(731708),
                f = a(154003),
                _ = a(167630),
                h = a(392237),
                v = a(111677),
                E = a.n(v),
                F = a(980407),
                Z = a(698537),
                K = a(782642),
                R = a(892541),
                T = a(87908),
                x = a(491369);
            const A = h.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                C = [
                    { illustration: c.createElement(R.default, { style: A.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: c.createElement(T.default, { style: A.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: c.createElement(x.default, { style: A.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                S = () =>
                    c.createElement(
                        w.Z,
                        { role: "list", style: A.list },
                        C.map((e) => c.createElement(w.Z, { key: e.title, role: "listitem", style: A.listItem }, e.illustration, c.createElement(w.Z, { style: A.listItemContent }, c.createElement(b.ZP, { style: A.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                I = "/settings/monetization";
            var z = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            z.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const q = z;
            var P = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const D = P;
            var L = a(614983),
                M = a.n(L),
                B = a(277660),
                H = a.n(B),
                Q = a(351743),
                W = a.n(Q);
            const j = D,
                O = q,
                U = (e) => {
                    const t = H()(j, e),
                        [a, l] = W()(O);
                    return [
                        c.useCallback(
                            () =>
                                new Promise((e, l) => {
                                    a({
                                        variables: {},
                                        onCompleted: (t, a) => e(),
                                        onError: l,
                                        updater: (e, a) => {
                                            const l = t.__id;
                                            M()(l, "userId must be specified");
                                            const n = e.get(l);
                                            M()(n, "userRecord must be specified"), n.invalidateRecord();
                                        },
                                    });
                                }),
                            [a, t.__id],
                        ),
                        l,
                    ];
                },
                V = E().ecdbece0,
                N = E().ef4602ec,
                G = E().j087774e,
                X = E().db3f0bbe,
                Y = E().a1f40cf8,
                $ = (0, k.ju)("https://legal.x.com/creator-terms"),
                J = h.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = c.memo(
                    (0, g.Z)(
                        ({ user: e }) => {
                            const t = (0, d.useHistory)(),
                                a = c.useCallback(() => {
                                    t.push(I);
                                }, [t]),
                                l = (0, K.p)(),
                                [n, i] = U(e),
                                s = c.useCallback(() => {
                                    n()
                                        .then(() => {
                                            l({ text: V }), t.push("/settings/monetization/awards/dashboard");
                                        })
                                        .catch(() => {
                                            l({ text: N });
                                        });
                                }, [l, n, t]),
                                r = c.useMemo(() => ({ link: c.createElement(b.ZP, { link: $, weight: "bold" }) }), []),
                                o = c.useMemo(() => c.createElement(w.Z, { style: J.footer }, c.createElement(b.ZP, { align: "center", color: "gray700", style: J.spacing }, c.createElement(E().I18NFormatMessage, { $i18n: "d4b0b963" }, c.cloneElement(r.link, null, E().d604fb32))), c.createElement(f.ZP, { disabled: i, onPress: s, type: "primaryFilled" }, i ? c.createElement(_.Z, null) : Y)), [i, s, r]);
                            return c.createElement(F.Z, { backButtonType: "close", bottomBar: o, documentTitle: G, history: t, onBackClick: a }, c.createElement(w.Z, { style: J.root }, c.createElement(b.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), c.createElement(b.ZP, { size: "headline1", style: J.headline, weight: "medium" }, X), c.createElement(Z.Z, { style: J.spacing, type: Z.j.DiscoGlobe }), c.createElement(S, null)));
                        },
                        { page: "onboarding", section: "Coins" },
                    ),
                ),
                te = o,
                ae = () => {
                    const { featureSwitches: e } = c.useContext(u.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: l } = (0, p.p)(te, {}),
                        n = l.user_results.result,
                        i = a && n.award_eligible,
                        s = 0 === n.awards_eligibility?.length;
                    return c.createElement(d.Switch, null, t && s && !i ? null : c.createElement(d.Route, null, c.createElement(y.Z, { to: I })), c.createElement(d.Route, { exact: !0, path: "/settings/awards" }, c.createElement(ee, { user: n })));
                },
                le = { context: "AWARD_SETTINGS" },
                ne = { type: "CustomRetry", content: () => null },
                ie = c.memo((0, g.Z)(() => c.createElement(m.N, { errorConfig: le, fallback: ne }, c.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
        892541: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var l = a(202784),
                n = a(890601),
                i = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 50 50", children: l.createElement("g", null, l.createElement("circle", { cx: "25", cy: "25", fill: "#0f1419", r: "25" }), l.createElement("path", { d: "M29.81 14.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15zm-9.76 8.43l-4.5 4.5 1.41 1.42 4.5-4.5zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5z", fill: "#fff" })) }, { writingDirection: t });
            };
            r.metadata = { width: 50, height: 50 };
            const o = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.bad7404a.js.map
