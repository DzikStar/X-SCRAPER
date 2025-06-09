"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconLogoSlack-js", "icons/IconSortArrows-js"],
    {
        403883: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                t,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
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
                        argumentDefinitions: a,
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
        395337: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                t,
                r,
                i,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r], storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            s.hash = "42f499bfb2697230967b662ad70f78f8";
            const o = s;
        },
        420412: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(202784),
                t = n(325686),
                r = n(235902),
                i = n(885015),
                s = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: l = !1, label: n }) {
                const { isWebRedesign: o } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? u[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? a.createElement(i.Z, { style: !l && u.root, withGutter: !0 }, a.createElement(t.Z, { style: u.gapColumn }, a.createElement(t.Z, { style: [u.gap, d] })), a.createElement(t.Z, { style: u.gapText }, n), a.createElement(t.Z, { style: u.gapColumn }, a.createElement(t.Z, { style: [u.gap, d] }))) : a.createElement(t.Z, { style: [!l && u.root, o() && u.rootRedesign, u.gap, d] });
            }
            const u = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(807896),
                t = n(202784),
                r = n(325686),
                i = n(392237);
            class s extends t.Component {
                render() {
                    const { children: e, style: l, withGutter: n, ...i } = this.props,
                        s = t.Children.map(e, (e) => e && t.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return t.createElement(r.Z, (0, a.Z)({ style: [l, o.root, n && o.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                u = s;
        },
        182714: (e, l, n) => {
            n.d(l, { y: () => o });
            var a = n(202784),
                t = n(111677),
                r = n.n(t);
            function i({ listItem1: e, listItem2: l }) {
                return a.createElement(r().I18NFormatMessage, { $i18n: "he2cc06d" }, e, l);
            }
            function s({ listItem1: e, listItem2: l }) {
                return a.createElement(r().I18NFormatMessage, { $i18n: "hf3108d3" }, e, l);
            }
            function o({ items: e, skipFormatLast: l = !1 }) {
                const n = e.length,
                    [t, s] = e;
                switch (n) {
                    case 0:
                        return "";
                    case 1:
                        return t;
                    case 2:
                        return l
                            ? i({ listItem1: t, listItem2: s })
                            : (function ({ listItem1: e, listItem2: l }) {
                                  return a.createElement(r().I18NFormatMessage, { $i18n: "i74be1ef" }, e, l);
                              })({ listItem1: t, listItem2: s });
                    default:
                        return d(e, l);
                }
            }
            const u = (e) => (e ? i : s);
            function d(e, l) {
                if (2 === e.length) {
                    const [n, a] = e;
                    return u(l)({ listItem1: n, listItem2: a });
                }
                const [n, ...a] = e;
                return i({ listItem1: n, listItem2: d(a, l) });
            }
        },
        58399: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(717683),
                s = n(347101);
            const o = (e = {}) => {
                const l = a.useContext(i.Z),
                    { direction: n } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, l && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            o.metadata = { width: 24, height: 24 };
            const u = o;
        },
        340905: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.533 14.488c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.982-.89-1.982-1.98 0-1.09.892-1.98 1.982-1.98h1.98v1.98zm.997 0c0-1.09.892-1.98 1.982-1.98 1.09 0 1.98.89 1.98 1.98v4.96c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96zm1.982-7.955c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v1.98h-1.98zm0 .997c1.09 0 1.98.892 1.98 1.982 0 1.09-.89 1.98-1.98 1.98h-4.96c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98h4.96zm7.955 1.982c0-1.09.89-1.98 1.98-1.98 1.09 0 1.982.89 1.982 1.98 0 1.09-.892 1.98-1.982 1.98h-1.98v-1.98zm-.997 0c0 1.09-.892 1.98-1.982 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96c0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v4.96zm-1.982 7.955c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.982-1.98 1.982-1.09 0-1.98-.892-1.98-1.982v-1.98h1.98zm0-.997c-1.09 0-1.98-.892-1.98-1.982 0-1.09.89-1.98 1.98-1.98h4.96c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98h-4.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        413522: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.54 8.04L7 2.59l5.46 5.45-1.42 1.42L8 6.41V21H6V6.41L2.96 9.46 1.54 8.04zM18 17.59l3.04-3.05 1.42 1.42L17 21.41l-5.46-5.45 1.42-1.42L16 17.59V3h2v14.59z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        662678: (e, l, n) => {
            n.d(l, { G: () => t, Z: () => a });
            n(136728);
            const a = function (e, l) {
                return t(e, l);
            };
            function t(e, l) {
                return e.reduce(
                    (n, a, t) => {
                        const r = l ? l(a, t, e) : !!a;
                        return r && n[0].push(a), !r && n[1].push(a), n;
                    },
                    [[], []],
                );
            }
        },
        34540: (e, l, n) => {
            var a = n(981428),
                t = function (e, l) {
                    return e - l;
                };
            e.exports = function (e, l, n) {
                return (
                    (n = n || t),
                    a(e, l, function (e, l) {
                        return n(l, e);
                    })
                );
            };
        },
        981428: (e) => {
            var l = function (e, l) {
                return e - l;
            };
            e.exports = function (e, n, a) {
                a = a || l;
                var t = void 0,
                    r = void 0,
                    i = !1,
                    s = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var d, c = e[Symbol.iterator](); !(s = (d = c.next()).done); s = !0) {
                        var m = d.value,
                            g = n(m);
                        (!i || a(g, r) < 0) && ((t = m), (r = g), (i = !0));
                    }
                } catch (e) {
                    (o = !0), (u = e);
                } finally {
                    try {
                        s || null == c.return || c.return();
                    } finally {
                        if (o) throw u;
                    }
                }
                return t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.027dec7a.js.map
