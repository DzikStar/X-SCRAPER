"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards"],
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
                u = (a(585488), a(107267)),
                d = a(443781),
                m = a(883229),
                p = a(725516),
                g = a(535338),
                y = a(615027),
                k = (a(136728), a(325686)),
                w = a(688715),
                b = a(731708),
                _ = a(154003),
                f = a(167630),
                h = a(392237),
                v = a(332920),
                E = a.n(v),
                F = a(980407),
                Z = a(698537),
                K = a(782642),
                R = a(892541),
                T = a(87908),
                A = a(491369);
            const S = h.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                x = [
                    { illustration: c.createElement(R.default, { style: S.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: c.createElement(T.default, { style: S.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: c.createElement(A.default, { style: S.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                C = () =>
                    c.createElement(
                        k.Z,
                        { role: "list", style: S.list },
                        x.map((e) => c.createElement(k.Z, { key: e.title, role: "listitem", style: S.listItem }, e.illustration, c.createElement(k.Z, { style: S.listItemContent }, c.createElement(b.ZP, { style: S.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                I = "/settings/monetization";
            var q = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            q.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const P = q;
            var z = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const L = z;
            var D = a(614983),
                H = a.n(D),
                M = a(277660),
                Q = a.n(M),
                B = a(351743),
                W = a.n(B);
            const O = L,
                U = P,
                j = (e) => {
                    const t = Q()(O, e),
                        [a, l] = W()(U);
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
                                            H()(l, "userId must be specified");
                                            const n = e.get(l);
                                            H()(n, "userRecord must be specified"), n.invalidateRecord();
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
                $ = (0, w.ju)("https://legal.x.com/creator-terms"),
                J = h.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = c.memo(
                    (0, p.Z)(
                        ({ user: e }) => {
                            const t = (0, u.useHistory)(),
                                a = c.useCallback(() => {
                                    t.push(I);
                                }, [t]),
                                l = (0, K.p)(),
                                [n, i] = j(e),
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
                                o = c.useMemo(() => c.createElement(k.Z, { style: J.footer }, c.createElement(b.ZP, { align: "center", color: "gray700", style: J.spacing }, c.createElement(E().I18NFormatMessage, { $i18n: "d4b0b963" }, c.cloneElement(r.link, null, E().d604fb32))), c.createElement(_.ZP, { disabled: i, onPress: s, type: "primaryFilled" }, i ? c.createElement(f.Z, null) : Y)), [i, s, r]);
                            return c.createElement(F.Z, { backButtonType: "close", bottomBar: o, documentTitle: G, history: t, onBackClick: a }, c.createElement(k.Z, { style: J.root }, c.createElement(b.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), c.createElement(b.ZP, { size: "headline1", style: J.headline, weight: "medium" }, X), c.createElement(Z.Z, { style: J.spacing, type: Z.j.DiscoGlobe }), c.createElement(C, null)));
                        },
                        { page: "onboarding", section: "Coins" },
                    ),
                ),
                te = o,
                ae = () => {
                    const { featureSwitches: e } = c.useContext(d.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: l } = (0, g.p)(te, {}),
                        n = l.user_results.result,
                        i = a && n.award_eligible,
                        s = 0 === n.awards_eligibility?.length;
                    return c.createElement(u.Switch, null, t && s && !i ? null : c.createElement(u.Route, null, c.createElement(y.Z, { to: I })), c.createElement(u.Route, { exact: !0, path: "/settings/awards" }, c.createElement(ee, { user: n })));
                },
                le = { context: "AWARD_SETTINGS" },
                ne = { type: "CustomRetry", content: () => null },
                ie = c.memo((0, p.Z)(() => c.createElement(m.N, { errorConfig: le, fallback: ne }, c.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.a02ebc0a.js.map
