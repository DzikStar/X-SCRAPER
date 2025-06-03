"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconExiting-js", "icons/IconLogoSlack-js"],
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
                    d = "borderColor" === e || "nestedBorderColor" === e ? u[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? n.createElement(i.Z, { style: !l && u.root, withGutter: !0 }, n.createElement(t.Z, { style: u.gapColumn }, n.createElement(t.Z, { style: [u.gap, d] })), n.createElement(t.Z, { style: u.gapText }, a), n.createElement(t.Z, { style: u.gapColumn }, n.createElement(t.Z, { style: [u.gap, d] }))) : n.createElement(t.Z, { style: [!l && u.root, o() && u.rootRedesign, u.gap, d] });
            }
            const u = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, a) => {
            a.d(l, { Z: () => u });
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
                u = s;
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
                        return d(e, l);
                }
            }
            const u = (e) => (e ? i : s);
            function d(e, l) {
                if (2 === e.length) {
                    const [a, n] = e;
                    return u(l)({ listItem1: a, listItem2: n });
                }
                const [a, ...n] = e;
                return i({ listItem1: a, listItem2: d(n, l) });
            }
        },
        297896: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        340905: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.533 14.488c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.982-.89-1.982-1.98 0-1.09.892-1.98 1.982-1.98h1.98v1.98zm.997 0c0-1.09.892-1.98 1.982-1.98 1.09 0 1.98.89 1.98 1.98v4.96c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96zm1.982-7.955c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v1.98h-1.98zm0 .997c1.09 0 1.98.892 1.98 1.982 0 1.09-.89 1.98-1.98 1.98h-4.96c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98h4.96zm7.955 1.982c0-1.09.89-1.98 1.98-1.98 1.09 0 1.982.89 1.982 1.98 0 1.09-.892 1.98-1.982 1.98h-1.98v-1.98zm-.997 0c0 1.09-.892 1.98-1.982 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96c0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v4.96zm-1.982 7.955c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.982-1.98 1.982-1.09 0-1.98-.892-1.98-1.982v-1.98h1.98zm0-.997c-1.09 0-1.98-.892-1.98-1.982 0-1.09.89-1.98 1.98-1.98h4.96c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98h-4.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        41065: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: l });
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
        391366: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: l });
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
                    u = void 0;
                try {
                    for (var d, c = e[Symbol.iterator](); !(s = (d = c.next()).done); s = !0) {
                        var m = d.value,
                            g = a(m);
                        (!i || n(g, r) < 0) && ((t = m), (r = g), (i = !0));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.422a23aa.js.map
