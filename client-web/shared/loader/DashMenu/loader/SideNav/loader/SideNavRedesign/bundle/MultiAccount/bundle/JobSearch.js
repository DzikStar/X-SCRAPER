"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch", "icons/IconChevronDown-js", "icons/IconExiting-js"],
    {
        110512: (e, l, a) => {
            a.d(l, { ZP: () => B, V7: () => W });
            a(136728);
            var n,
                i,
                t,
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
                                        args: (i = [{ kind: "Literal", name: "status", value: "Accepted" }]),
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
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                                        args: i,
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
                                                            t,
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
            const y = p;
            var m = a(202784),
                k = a(325686),
                _ = (a(585488), a(712696)),
                v = a.n(_),
                h = a(107267),
                F = a(731708),
                b = a(661810),
                f = a(642153),
                K = a(392237),
                w = a(111677),
                L = a.n(w),
                T = a(899667),
                S = a(487552),
                U = a(516951),
                E = a(621416),
                C = a(125363),
                A = a(175856),
                I = a(390387),
                D = a(114084),
                R = a(736063);
            const Z = (0, a(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: I.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                H = y,
                q = L().daffabde,
                P = L().eccbfa26,
                x = L().a1b7a904,
                M = { context: "DelegateGroups" },
                O = ({ activeUserId: e, delegateUser: l, isUpdatedManageAccounts: a, onDelegateSwitch: n, renderUserDecoration: i, setDelegateUser: t }) => {
                    const r = (0, C.I0)(),
                        s = (0, h.useHistory)(),
                        [o] = (0, E.m)(A.s7),
                        [d, c] = m.useState(!0),
                        u = v()(H, {}),
                        g = m.useMemo(() => {
                            const l = [];
                            return (
                                u.viewer_v2?.list_delegation_groups?.forEach((a) => {
                                    const { result: n } = a.handle || {};
                                    ("User" === n?.__typename && n?.rest_id === e) || ("User" === n?.__typename && l.push(n));
                                }),
                                l
                            );
                        }, [e, u.viewer_v2?.list_delegation_groups]),
                        p = m.useMemo(() => l?.userId && g.some((e) => e?.rest_id && l?.userId === e?.rest_id), [l, g]),
                        y = m.useCallback(() => {
                            c(!d);
                        }, [d]);
                    m.useEffect(() => {
                        r(I.po(g.length));
                    }, [g, r]);
                    const _ = m.useCallback(
                        (e) => () => {
                            o ? s.push("/i/delegate/switch", { delegateUser: e }) : t && t(e), n();
                        },
                        [o, t, n, s],
                    );
                    return g.length < 1
                        ? null
                        : m.createElement(
                              m.Fragment,
                              null,
                              a ? m.createElement(k.Z, { style: V.updatedDelegateAccountsLabel }, m.createElement(F.ZP, { color: "gray700", weight: "bold" }, P)) : m.createElement(k.Z, { onClick: y, style: V.delegateAccountsLabel }, m.createElement(F.ZP, { color: "gray700", weight: "bold" }, p ? q : P), !p && (d ? m.createElement(T.default, { style: V.IconChevronUp }) : m.createElement(S.default, { style: V.IconChevronDown }))),
                              a || d || p
                                  ? g.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            t = n === l?.userId,
                                            r = i ? i({ withBadges: !1, isActiveUser: t }) : void 0,
                                            s = _({ userId: n });
                                        return m.createElement(m.Fragment, { key: e.rest_id }, m.createElement(D.Z, { "aria-label": x, badgeContext: "account", decoration: r, displayMode: "UserCompact", onCellClick: t ? U.Z : s, user: e, withInteractiveStyling: !t, withLink: !1 }), a && m.createElement(b.Z, { style: V.accountDivider }));
                                    })
                                  : m.createElement(k.Z, { style: V.facePileContainer }, m.createElement(f.Z, { userAvatarSize: "large", userAvatarUrls: g.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function W() {
                const e = v()(H, {}),
                    l = (0, C.v9)(I.x0);
                return m.useMemo(() => {
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
            const V = K.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                B = Z((e) => m.createElement(R.H, { errorConfig: M }, m.createElement(O, e)));
        },
        621416: (e, l, a) => {
            a.d(l, { m: () => t });
            a(890103);
            var n = a(202784),
                i = a(175698);
            function t(e) {
                const l = (0, i.A)();
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
                i = a.n(n),
                t = a(615656),
                r = a(51525);
            const s = i().b20a3894,
                o = { [t.ZP.AppInReadOnlyMode]: { customAction: r.w1 }, [t.ZP.TargetUserNotFound]: { toast: { text: s } }, showToast: !0 };
        },
        956817: (e, l, a) => {
            a.d(l, { y: () => o });
            var n = a(734540),
                i = a(917799),
                t = a(24546),
                r = a(923488);
            const s = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                o =
                    (e) =>
                    (l, a, { api: o }) => {
                        const d = (0, i._O)(l, { request: o.withEndpoint(n.Z).switch, params: e });
                        return l((0, t.MH)()).then(() =>
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
                i = a(325686),
                t = a(392237);
            function r({ spacing: e, style: l }) {
                return n.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? t.default.theme.spaces[e] : void 0 }, l] });
            }
            const s = t.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        487552: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                i = a(890601),
                t = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, t.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        297896: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                i = a(890601),
                t = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, t.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch.3eac2a1a.js.map
