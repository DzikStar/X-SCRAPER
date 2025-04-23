"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceMedia", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        668371: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                t,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "restId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (t = [
                                    { kind: "Variable", name: "rest_id", variableName: "restId" },
                                    { kind: "Literal", name: "s", value: "2e2a" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "FollowHostButton_user" }], type: "User", abstractKey: null }], storageKey: null }],
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
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: t,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                    params: { id: "kURURMFUKw2d-eHgilgSzA", metadata: {}, name: "FollowHostButtonQuery", operationKind: "query", text: null },
                };
            s.hash = "db24c8717c0ec5cd1bc10a4703756569";
            const o = s;
        },
        813323: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "FollowHostButton_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, action: "THROW", path: "legacy.following" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "512608a490add074c8872fc64bc73649",
            };
            const t = n;
        },
        420412: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = a(202784),
                t = a(325686),
                r = a(235902),
                s = a(885015),
                o = a(392237);
            function i({ borderColor: e = "borderColor", isSlim: l = !1, label: a }) {
                const { isWebRedesign: i } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? u[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return a ? n.createElement(s.Z, { style: !l && u.root, withGutter: !0 }, n.createElement(t.Z, { style: u.gapColumn }, n.createElement(t.Z, { style: [u.gap, d] })), n.createElement(t.Z, { style: u.gapText }, a), n.createElement(t.Z, { style: u.gapColumn }, n.createElement(t.Z, { style: [u.gap, d] }))) : n.createElement(t.Z, { style: [!l && u.root, i() && u.rootRedesign, u.gap, d] });
            }
            const u = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(807896),
                t = a(202784),
                r = a(325686),
                s = a(392237);
            class o extends t.Component {
                render() {
                    const { children: e, style: l, withGutter: a, ...s } = this.props,
                        o = t.Children.map(e, (e) => e && t.cloneElement(e, { style: [e.props.style, i.column, a && i.withGutterColumn] }));
                    return t.createElement(r.Z, (0, n.Z)({ style: [l, i.root, a && i.withGutter] }, s), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                u = o;
        },
        662678: (e, l, a) => {
            a.d(l, { G: () => t, Z: () => n });
            a(136728);
            const n = function (e, l) {
                return t(e, l);
            };
            function t(e, l) {
                return e.reduce(
                    (a, n, t) => {
                        const r = l ? l(n, t, e) : !!n;
                        return r && a[0].push(n), !r && a[1].push(n), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceMedia.3a699f1a.js.map
