"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards", "icons/IconIllustrationConnectAudience-js"],
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
                A = a(892541),
                R = a(87908),
                T = a(491369);
            const x = h.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                C = [
                    { illustration: c.createElement(A.default, { style: x.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: c.createElement(R.default, { style: x.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: c.createElement(T.default, { style: x.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                S = () =>
                    c.createElement(
                        w.Z,
                        { role: "list", style: x.list },
                        C.map((e) => c.createElement(w.Z, { key: e.title, role: "listitem", style: x.listItem }, e.illustration, c.createElement(w.Z, { style: x.listItemContent }, c.createElement(b.ZP, { style: x.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                I = "/settings/monetization";
            var z = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            z.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const L = z;
            var q = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const P = q;
            var D = a(614983),
                M = a.n(D),
                B = a(277660),
                H = a.n(B),
                Q = a(351743),
                W = a.n(Q);
            const j = P,
                O = L,
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
        491369: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var l = a(202784),
                n = a(890601),
                i = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 50 50", children: l.createElement("g", null, l.createElement("circle", { cx: "25", cy: "25", fill: "#0f1419", r: "25" }), l.createElement("path", { d: "M25 14.75c-2.027 0-4.009.601-5.695 1.727-1.685 1.127-2.999 2.728-3.775 4.6-.776 1.873-.978 3.934-.583 5.923.396 1.988 1.372 3.814 2.805 5.248 1.434 1.433 3.26 2.41 5.248 2.805 1.989.396 4.05.193 5.922-.583 1.873-.776 3.474-2.09 4.6-3.775C34.65 29.009 35.25 27.027 35.25 25c0-2.718-1.08-5.325-3.002-7.248-1.923-1.922-4.53-3.002-7.248-3.002zm-.25 10.48L23.5 30.5l-2-1.5v-3.5l-1-3.5-2.47-1.41c.721-1.14 1.711-2.086 2.882-2.756 1.172-.67 2.49-1.041 3.838-1.084L24 19l-2 .5-.5 2.5 5 1.5zM30 27v-3l-1.5-3 2.88-1.23c1 1.22 1.63 2.701 1.814 4.268s-.085 3.153-.774 4.572z", fill: "#fff" })) }, { writingDirection: t });
            };
            r.metadata = { width: 50, height: 50 };
            const o = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.47cf1f7a.js.map
