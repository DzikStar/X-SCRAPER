"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconCards-js", "icons/IconChevronDown-js", "icons/IconExiting-js", "icons/IconFeedback-js", "icons/IconLogoSlack-js"],
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
                    u = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? a.createElement(i.Z, { style: !l && c.root, withGutter: !0 }, a.createElement(t.Z, { style: c.gapColumn }, a.createElement(t.Z, { style: [c.gap, u] })), a.createElement(t.Z, { style: c.gapText }, n), a.createElement(t.Z, { style: c.gapColumn }, a.createElement(t.Z, { style: [c.gap, u] }))) : a.createElement(t.Z, { style: [!l && c.root, o() && c.rootRedesign, c.gap, u] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, n) => {
            n.d(l, { Z: () => c });
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
                c = s;
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
                        return u(e, l);
                }
            }
            const c = (e) => (e ? i : s);
            function u(e, l) {
                if (2 === e.length) {
                    const [n, a] = e;
                    return c(l)({ listItem1: n, listItem2: a });
                }
                const [n, ...a] = e;
                return i({ listItem1: n, listItem2: u(a, l) });
            }
        },
        813751: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 3h13.5C21.88 3 23 4.12 23 5.5V15c0 1.1-.9 2-2 2V5.5c0-.28-.22-.5-.5-.5H5c0-1.1.9-2 2-2zm2 10.27v-1.75H5v1.75h4zm0 3.21v-1.75H5v1.75h4zm2 .02h4v-5h-4v5zm-9.88 2c0 1.31 1.07 2.38 2.38 2.38h13c1.31 0 2.38-1.07 2.38-2.38v-9c0-1.31-1.07-2.38-2.38-2.38h-13c-1.31 0-2.38 1.07-2.38 2.38v9zM16.5 8.88c.35 0 .62.27.62.62v9c0 .35-.27.62-.62.62h-13c-.35 0-.62-.27-.62-.62v-9c0-.35.27-.62.62-.62h13z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        487552: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        297896: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        790093: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
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
                    c = void 0;
                try {
                    for (var u, d = e[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) {
                        var m = u.value,
                            g = n(m);
                        (!i || a(g, r) < 0) && ((t = m), (r = g), (i = !0));
                    }
                } catch (e) {
                    (o = !0), (c = e);
                } finally {
                    try {
                        s || null == d.return || d.return();
                    } finally {
                        if (o) throw c;
                    }
                }
                return t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.fbae4b5a.js.map
