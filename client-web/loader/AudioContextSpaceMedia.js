"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceMedia", "loader.AudioContextVoiceMedia"],
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
                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
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
                    params: { id: "bpY370mwoHjimSkkcTSk4A", metadata: {}, name: "FollowHostButtonQuery", operationKind: "query", text: null },
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
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "96cdf1de6cd036d1367ad367e572a535",
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
        41065: (e, l, a) => {
            a.r(l), a.d(l, { default: () => i });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                s = a(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
        },
        98440: (e, l, a) => {
            a.r(l), a.d(l, { default: () => i });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                s = a(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceMedia.7c79917a.js.map
