"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceMedia", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        668371: (e, l, t) => {
            t.d(l, { Z: () => o });
            var a,
                n,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "restId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (n = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: n,
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
            i.hash = "db24c8717c0ec5cd1bc10a4703756569";
            const o = i;
        },
        813323: (e, l, t) => {
            t.d(l, { Z: () => n });
            var a = {
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
            const n = a;
        },
        420412: (e, l, t) => {
            t.d(l, { Z: () => s });
            var a = t(202784),
                n = t(325686),
                r = t(235902),
                i = t(885015),
                o = t(392237);
            function s({ borderColor: e = "borderColor", isSlim: l = !1, label: t }) {
                const { isWebRedesign: s } = r.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return t ? a.createElement(i.Z, { style: !l && d.root, withGutter: !0 }, a.createElement(n.Z, { style: d.gapColumn }, a.createElement(n.Z, { style: [d.gap, c] })), a.createElement(n.Z, { style: d.gapText }, t), a.createElement(n.Z, { style: d.gapColumn }, a.createElement(n.Z, { style: [d.gap, c] }))) : a.createElement(n.Z, { style: [!l && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, t) => {
            t.d(l, { Z: () => d });
            var a = t(807896),
                n = t(202784),
                r = t(325686),
                i = t(392237);
            class o extends n.Component {
                render() {
                    const { children: e, style: l, withGutter: t, ...i } = this.props,
                        o = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, t && s.withGutterColumn] }));
                    return n.createElement(r.Z, (0, a.Z)({ style: [l, s.root, t && s.withGutter] }, i), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = o;
        },
        58399: (e, l, t) => {
            t.r(l), t.d(l, { default: () => d });
            var a = t(202784),
                n = t(890601),
                r = t(783427),
                i = t(717683),
                o = t(347101);
            const s = (e = {}) => {
                const l = a.useContext(i.Z),
                    { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, l && o.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        246492: (e, l, t) => {
            t.r(l), t.d(l, { default: () => s });
            var a = t(202784),
                n = t(890601),
                r = t(783427),
                i = t(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        264171: (e, l, t) => {
            t.r(l), t.d(l, { default: () => s });
            var a = t(202784),
                n = t(890601),
                r = t(783427),
                i = t(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, l, t) => {
            t.r(l), t.d(l, { default: () => s });
            var a = t(202784),
                n = t(890601),
                r = t(783427),
                i = t(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        262009: (e, l, t) => {
            t.r(l), t.d(l, { default: () => s });
            var a = t(202784),
                n = t(890601),
                r = t(783427),
                i = t(347101);
            const o = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: l });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        662678: (e, l, t) => {
            t.d(l, { G: () => n, Z: () => a });
            t(136728);
            const a = function (e, l) {
                return n(e, l);
            };
            function n(e, l) {
                return e.reduce(
                    (t, a, n) => {
                        const r = l ? l(a, n, e) : !!a;
                        return r && t[0].push(a), !r && t[1].push(a), t;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceMedia.c8c0498a.js.map
