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
                d = (a(585488), a(107267)),
                u = a(443781),
                m = a(883229),
                g = a(725516),
                p = a(535338),
                y = a(615027),
                w = (a(136728), a(325686)),
                k = a(688715),
                b = a(731708),
                _ = a(154003),
                h = a(167630),
                f = a(392237),
                v = a(111677),
                E = a.n(v),
                F = a(980407),
                Z = a(698537),
                K = a(782642),
                R = a(892541),
                S = a(87908),
                T = a(491369);
            const A = f.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                C = [
                    { illustration: c.createElement(R.default, { style: A.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: c.createElement(S.default, { style: A.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: c.createElement(T.default, { style: A.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                x = () =>
                    c.createElement(
                        w.Z,
                        { role: "list", style: A.list },
                        C.map((e) => c.createElement(w.Z, { key: e.title, role: "listitem", style: A.listItem }, e.illustration, c.createElement(w.Z, { style: A.listItemContent }, c.createElement(b.ZP, { style: A.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                z = "/settings/monetization";
            var I = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            I.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const q = I;
            var L = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const M = L;
            var P = a(614983),
                D = a.n(P),
                H = a(277660),
                B = a.n(H),
                Q = a(351743),
                W = a.n(Q);
            const O = M,
                U = q,
                j = (e) => {
                    const t = B()(O, e),
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
                V = E().ecdbece0,
                N = E().ef4602ec,
                G = E().j087774e,
                X = E().db3f0bbe,
                Y = E().a1f40cf8,
                $ = (0, k.ju)("https://legal.x.com/creator-terms"),
                J = f.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = c.memo(
                    (0, g.Z)(
                        ({ user: e }) => {
                            const t = (0, d.useHistory)(),
                                a = c.useCallback(() => {
                                    t.push(z);
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
                                o = c.useMemo(() => c.createElement(w.Z, { style: J.footer }, c.createElement(b.ZP, { align: "center", color: "gray700", style: J.spacing }, c.createElement(E().I18NFormatMessage, { $i18n: "d4b0b963" }, c.cloneElement(r.link, null, E().d604fb32))), c.createElement(_.ZP, { disabled: i, onPress: s, type: "primaryFilled" }, i ? c.createElement(h.Z, null) : Y)), [i, s, r]);
                            return c.createElement(F.Z, { backButtonType: "close", bottomBar: o, documentTitle: G, history: t, onBackClick: a }, c.createElement(w.Z, { style: J.root }, c.createElement(b.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), c.createElement(b.ZP, { size: "headline1", style: J.headline, weight: "medium" }, X), c.createElement(Z.Z, { style: J.spacing, type: Z.j.DiscoGlobe }), c.createElement(x, null)));
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
                    return c.createElement(d.Switch, null, t && s && !i ? null : c.createElement(d.Route, null, c.createElement(y.Z, { to: z })), c.createElement(d.Route, { exact: !0, path: "/settings/awards" }, c.createElement(ee, { user: n })));
                },
                le = { context: "AWARD_SETTINGS" },
                ne = { type: "CustomRetry", content: () => null },
                ie = c.memo((0, g.Z)(() => c.createElement(m.N, { errorConfig: le, fallback: ne }, c.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var l = a(202784),
                n = a(890601),
                i = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.51e8323a.js.map
