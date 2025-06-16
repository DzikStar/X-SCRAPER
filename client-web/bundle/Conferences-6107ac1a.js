"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        403883: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                t,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "RelayUserNameQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (t = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserName_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }],
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
                        name: "RelayUserNameQuery",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: "affiliates_highlighted_label",
                                                        args: null,
                                                        concreteType: "HighlightedUserLabelResponse",
                                                        kind: "LinkedField",
                                                        name: "identity_profile_labels_highlighted_label",
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
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [r], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "lKr3ZmmyJY-csl0CsKo0Mw", metadata: {}, name: "RelayUserNameQuery", operationKind: "query", text: null },
                };
            s.hash = "a80538e0fb22a0432d8e5d59383cd848";
            const o = s;
        },
        395337: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                t,
                r,
                i,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r], storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            s.hash = "42f499bfb2697230967b662ad70f78f8";
            const o = s;
        },
        420412: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n = a(202784),
                t = a(325686),
                r = a(235902),
                i = a(885015),
                s = a(392237);
            function o({ borderColor: e = "borderColor", isSlim: l = !1, label: a }) {
                const { isWebRedesign: o } = r.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? n.createElement(i.Z, { style: !l && d.root, withGutter: !0 }, n.createElement(t.Z, { style: d.gapColumn }, n.createElement(t.Z, { style: [d.gap, u] })), n.createElement(t.Z, { style: d.gapText }, a), n.createElement(t.Z, { style: d.gapColumn }, n.createElement(t.Z, { style: [d.gap, u] }))) : n.createElement(t.Z, { style: [!l && d.root, o() && d.rootRedesign, d.gap, u] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n = a(807896),
                t = a(202784),
                r = a(325686),
                i = a(392237);
            class s extends t.Component {
                render() {
                    const { children: e, style: l, withGutter: a, ...i } = this.props,
                        s = t.Children.map(e, (e) => e && t.cloneElement(e, { style: [e.props.style, o.column, a && o.withGutterColumn] }));
                    return t.createElement(r.Z, (0, n.Z)({ style: [l, o.root, a && o.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        182714: (e, l, a) => {
            a.d(l, { y: () => o });
            var n = a(202784),
                t = a(111677),
                r = a.n(t);
            function i({ listItem1: e, listItem2: l }) {
                return n.createElement(r().I18NFormatMessage, { $i18n: "he2cc06d" }, e, l);
            }
            function s({ listItem1: e, listItem2: l }) {
                return n.createElement(r().I18NFormatMessage, { $i18n: "hf3108d3" }, e, l);
            }
            function o({ items: e, skipFormatLast: l = !1 }) {
                const a = e.length,
                    [t, s] = e;
                switch (a) {
                    case 0:
                        return "";
                    case 1:
                        return t;
                    case 2:
                        return l
                            ? i({ listItem1: t, listItem2: s })
                            : (function ({ listItem1: e, listItem2: l }) {
                                  return n.createElement(r().I18NFormatMessage, { $i18n: "i74be1ef" }, e, l);
                              })({ listItem1: t, listItem2: s });
                    default:
                        return u(e, l);
                }
            }
            const d = (e) => (e ? i : s);
            function u(e, l) {
                if (2 === e.length) {
                    const [a, n] = e;
                    return d(l)({ listItem1: a, listItem2: n });
                }
                const [a, ...n] = e;
                return i({ listItem1: a, listItem2: u(n, l) });
            }
        },
        58399: (e, l, a) => {
            a.r(l), a.d(l, { default: () => d });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(717683),
                s = a(347101);
            const o = (e = {}) => {
                const l = n.useContext(i.Z),
                    { direction: a } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, l && s.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
        246492: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        264171: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        926628: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        262009: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        452693: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
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
        34540: (e, l, a) => {
            var n = a(981428),
                t = function (e, l) {
                    return e - l;
                };
            e.exports = function (e, l, a) {
                return (
                    (a = a || t),
                    n(e, l, function (e, l) {
                        return a(l, e);
                    })
                );
            };
        },
        981428: (e) => {
            var l = function (e, l) {
                return e - l;
            };
            e.exports = function (e, a, n) {
                n = n || l;
                var t = void 0,
                    r = void 0,
                    i = !1,
                    s = !0,
                    o = !1,
                    d = void 0;
                try {
                    for (var u, c = e[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                        var m = u.value,
                            g = a(m);
                        (!i || n(g, r) < 0) && ((t = m), (r = g), (i = !0));
                    }
                } catch (e) {
                    (o = !0), (d = e);
                } finally {
                    try {
                        s || null == c.return || c.return();
                    } finally {
                        if (o) throw d;
                    }
                }
                return t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.8e5a890a.js.map
