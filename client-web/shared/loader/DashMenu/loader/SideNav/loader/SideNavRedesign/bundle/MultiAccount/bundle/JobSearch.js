"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch", "icons/IconChevronDown-js", "icons/IconExiting-js", "icons/IconFeedback-js"],
    {
        110512: (e, l, a) => {
            a.d(l, { ZP: () => B, V7: () => W });
            a(136728);
            var n,
                t,
                i,
                r,
                s,
                o,
                d,
                c,
                u,
                g,
                p = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "DelegatedAccountListQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: (t = [{ kind: "Literal", name: "status", value: "Accepted" }]),
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: "handle",
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "handle_results",
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
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), action: "THROW" }], storageKey: null },
                                                                    {
                                                                        kind: "RequiredField",
                                                                        field: {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "UserCore",
                                                                            kind: "LinkedField",
                                                                            name: "core",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: (d = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), action: "THROW" },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        action: "THROW",
                                                                    },
                                                                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" },
                                                                    { args: null, kind: "FragmentSpread", name: "UserCell_user" },
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: 'list_delegation_groups(status:"Accepted")',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "DelegatedAccountListQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: t,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: "handle",
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "handle_results",
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
                                                            i,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    r,
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [s], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [o, d], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [c], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                    {
                                                                        alias: null,
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
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "TimelineUrl",
                                                                                        kind: "LinkedField",
                                                                                        name: "url",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                                                            { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                                            {
                                                                                                alias: "urtEndpointOptions",
                                                                                                args: null,
                                                                                                concreteType: "TimelineUrtEndpointOptions",
                                                                                                kind: "LinkedField",
                                                                                                name: "urt_endpoint_options",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                    {
                                                                                                        alias: "requestParams",
                                                                                                        args: null,
                                                                                                        concreteType: "RequestParamsEntry",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "request_params",
                                                                                                        plural: !0,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [u], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                                    g,
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    g,
                                                ],
                                                storageKey: null,
                                            },
                                            g,
                                        ],
                                        storageKey: 'list_delegation_groups(status:"Accepted")',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                    },
                    params: { id: "vPrfbpPK7KoeIHlqqoHLbA", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "DelegatedAccountListQuery", operationKind: "query", text: null },
                };
            p.hash = "1e0a77d9768f003fab71a100e8291dbc";
            const m = p;
            var y = a(202784),
                k = a(325686),
                h = (a(585488), a(712696)),
                v = a.n(h),
                _ = a(107267),
                b = a(731708),
                F = a(661810),
                f = a(642153),
                w = a(392237),
                K = a(111677),
                L = a.n(K),
                S = a(899667),
                T = a(487552),
                E = a(516951),
                U = a(621416),
                C = a(125363),
                A = a(175856),
                Z = a(390387),
                D = a(114084),
                I = a(736063);
            const R = (0, a(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: Z.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                H = m,
                q = L().daffabde,
                x = L().eccbfa26,
                M = L().a1b7a904,
                P = { context: "DelegateGroups" },
                O = ({ activeUserId: e, delegateUser: l, isUpdatedManageAccounts: a, onDelegateSwitch: n, renderUserDecoration: t, setDelegateUser: i }) => {
                    const r = (0, C.I0)(),
                        s = (0, _.useHistory)(),
                        [o] = (0, U.m)(A.s7),
                        [d, c] = y.useState(!0),
                        u = v()(H, {}),
                        g = y.useMemo(() => {
                            const l = [];
                            return (
                                u.viewer_v2?.list_delegation_groups?.forEach((a) => {
                                    const { result: n } = a.handle || {};
                                    ("User" === n?.__typename && n?.rest_id === e) || ("User" === n?.__typename && l.push(n));
                                }),
                                l
                            );
                        }, [e, u.viewer_v2?.list_delegation_groups]),
                        p = y.useMemo(() => l?.userId && g.some((e) => e?.rest_id && l?.userId === e?.rest_id), [l, g]),
                        m = y.useCallback(() => {
                            c(!d);
                        }, [d]);
                    y.useEffect(() => {
                        r(Z.po(g.length));
                    }, [g, r]);
                    const h = y.useCallback(
                        (e) => () => {
                            o ? s.push("/i/delegate/switch", { delegateUser: e }) : i && i(e), n();
                        },
                        [o, i, n, s],
                    );
                    return g.length < 1
                        ? null
                        : y.createElement(
                              y.Fragment,
                              null,
                              a ? y.createElement(k.Z, { style: z.updatedDelegateAccountsLabel }, y.createElement(b.ZP, { color: "gray700", weight: "bold" }, x)) : y.createElement(k.Z, { onClick: m, style: z.delegateAccountsLabel }, y.createElement(b.ZP, { color: "gray700", weight: "bold" }, p ? q : x), !p && (d ? y.createElement(S.default, { style: z.IconChevronUp }) : y.createElement(T.default, { style: z.IconChevronDown }))),
                              a || d || p
                                  ? g.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            i = n === l?.userId,
                                            r = t ? t({ withBadges: !1, isActiveUser: i }) : void 0,
                                            s = h({ userId: n });
                                        return y.createElement(y.Fragment, { key: e.rest_id }, y.createElement(D.Z, { "aria-label": M, badgeContext: "account", decoration: r, displayMode: "UserCompact", onCellClick: i ? E.Z : s, user: e, withInteractiveStyling: !i, withLink: !1 }), a && y.createElement(F.Z, { style: z.accountDivider }));
                                    })
                                  : y.createElement(k.Z, { style: z.facePileContainer }, y.createElement(f.Z, { userAvatarSize: "large", userAvatarUrls: g.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function W() {
                const e = v()(H, {}),
                    l = (0, C.v9)(Z.x0);
                return y.useMemo(() => {
                    const a = [];
                    return (
                        e.viewer_v2?.list_delegation_groups?.forEach((e) => {
                            const { result: n } = e.handle || {};
                            ("User" === n?.__typename && n?.rest_id === l) || ("User" === n?.__typename && a.push(n));
                        }),
                        a
                    );
                }, [e.viewer_v2?.list_delegation_groups, l]);
            }
            const z = w.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                B = R((e) => y.createElement(I.H, { errorConfig: P }, y.createElement(O, e)));
        },
        621416: (e, l, a) => {
            a.d(l, { m: () => i });
            a(890103);
            var n = a(202784),
                t = a(175698);
            function i(e) {
                const l = (0, t.A)();
                return [
                    !!l && !l.flags[e],
                    n.useCallback(() => {
                        l?.addFlag(e);
                    }, [l, e]),
                ];
            }
        },
        380155: (e, l, a) => {
            a.d(l, { y: () => o });
            var n = a(111677),
                t = a.n(n),
                i = a(615656),
                r = a(51525);
            const s = t().b20a3894,
                o = { [i.ZP.AppInReadOnlyMode]: { customAction: r.w1 }, [i.ZP.TargetUserNotFound]: { toast: { text: s } }, showToast: !0 };
        },
        956817: (e, l, a) => {
            a.d(l, { y: () => o });
            var n = a(734540),
                t = a(917799),
                i = a(24546),
                r = a(923488);
            const s = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                o =
                    (e) =>
                    (l, a, { api: o }) => {
                        const d = (0, t._O)(l, { request: o.withEndpoint(n.Z).switch, params: e });
                        return l((0, i.MH)()).then(() =>
                            l((0, r.nB)()).then(() =>
                                d({ actionTypes: s, context: "SWITCH" }).then(() => {
                                    window.location.assign("/home");
                                }),
                            ),
                        );
                    };
        },
        661810: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n = a(202784),
                t = a(325686),
                i = a(392237);
            function r({ spacing: e, style: l }) {
                return n.createElement(t.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, l] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        487552: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        297896: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        790093: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch.7ebbd64a.js.map
