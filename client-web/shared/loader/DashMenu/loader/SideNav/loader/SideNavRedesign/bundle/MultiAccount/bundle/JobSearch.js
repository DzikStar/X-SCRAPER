"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch"],
    {
        110512: (e, l, a) => {
            a.d(l, { ZP: () => B, V7: () => M });
            a(136728);
            var n,
                t,
                s,
                i,
                r,
                u,
                o,
                d,
                c,
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
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                    {
                                                                        kind: "RequiredField",
                                                                        field: {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiUser",
                                                                            kind: "LinkedField",
                                                                            name: "legacy",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: (u = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: (d = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), action: "THROW" },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        action: "THROW",
                                                                    },
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
                                                            s,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    i,
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [r, u, o, d, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                                                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [c], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
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
                    params: { id: "t2IpdHtIQtQq9WQGjNd-HQ", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "DelegatedAccountListQuery", operationKind: "query", text: null },
                };
            p.hash = "cecac573042932c41c102e120b1fb720";
            const y = p;
            var m = a(202784),
                _ = a(325686),
                k = (a(585488), a(712696)),
                F = a.n(k),
                h = a(107267),
                b = a(731708),
                f = a(661810),
                v = a(642153),
                K = a(392237),
                S = a(674132),
                w = a.n(S),
                T = a(899667),
                U = a(487552),
                L = a(516951),
                E = a(621416),
                C = a(125363),
                A = a(175856),
                I = a(390387),
                D = a(114084),
                R = a(736063);
            const H = (0, a(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: I.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                Z = y,
                q = w().daffabde,
                O = w().eccbfa26,
                Q = w().a1b7a904,
                W = { context: "DelegateGroups" },
                x = ({ activeUserId: e, delegateUser: l, isUpdatedManageAccounts: a, onDelegateSwitch: n, renderUserDecoration: t, setDelegateUser: s }) => {
                    const i = (0, C.I0)(),
                        r = (0, h.useHistory)(),
                        [u] = (0, E.m)(A.s7),
                        [o, d] = m.useState(!0),
                        c = F()(Z, {}),
                        g = m.useMemo(() => {
                            const l = [];
                            return (
                                c.viewer_v2?.list_delegation_groups?.forEach((a) => {
                                    const { result: n } = a.handle || {};
                                    ("User" === n?.__typename && n?.rest_id === e) || ("User" === n?.__typename && l.push(n));
                                }),
                                l
                            );
                        }, [e, c.viewer_v2?.list_delegation_groups]),
                        p = m.useMemo(() => l?.userId && g.some((e) => e?.rest_id && l?.userId === e?.rest_id), [l, g]),
                        y = m.useCallback(() => {
                            d(!o);
                        }, [o]);
                    m.useEffect(() => {
                        i(I.po(g.length));
                    }, [g, i]);
                    const k = m.useCallback(
                        (e) => () => {
                            u ? r.push("/i/delegate/switch", { delegateUser: e }) : s && s(e), n();
                        },
                        [u, s, n, r],
                    );
                    return g.length < 1
                        ? null
                        : m.createElement(
                              m.Fragment,
                              null,
                              a ? m.createElement(_.Z, { style: P.updatedDelegateAccountsLabel }, m.createElement(b.ZP, { color: "gray700", weight: "bold" }, O)) : m.createElement(_.Z, { onClick: y, style: P.delegateAccountsLabel }, m.createElement(b.ZP, { color: "gray700", weight: "bold" }, p ? q : O), !p && (o ? m.createElement(T.default, { style: P.IconChevronUp }) : m.createElement(U.default, { style: P.IconChevronDown }))),
                              a || o || p
                                  ? g.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            s = n === l?.userId,
                                            i = t ? t({ withBadges: !1, isActiveUser: s }) : void 0,
                                            r = k({ userId: n });
                                        return m.createElement(m.Fragment, { key: e.rest_id }, m.createElement(D.Z, { "aria-label": Q, badgeContext: "account", decoration: i, displayMode: "UserCompact", onCellClick: s ? L.Z : r, user: e, withInteractiveStyling: !s, withLink: !1 }), a && m.createElement(f.Z, { style: P.accountDivider }));
                                    })
                                  : m.createElement(_.Z, { style: P.facePileContainer }, m.createElement(v.Z, { userAvatarSize: "large", userAvatarUrls: g.map((e) => (e?.legacy && e?.legacy?.profile_image_url_https) || "") })),
                          );
                };
            function M() {
                const e = F()(Z, {}),
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
            const P = K.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                B = H((e) => m.createElement(R.H, { errorConfig: W }, m.createElement(x, e)));
        },
        621416: (e, l, a) => {
            a.d(l, { m: () => s });
            a(890103);
            var n = a(202784),
                t = a(175698);
            function s(e) {
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
            a.d(l, { y: () => u });
            var n = a(674132),
                t = a.n(n),
                s = a(615656),
                i = a(51525);
            const r = t().b20a3894,
                u = { [s.ZP.AppInReadOnlyMode]: { customAction: i.w1 }, [s.ZP.TargetUserNotFound]: { toast: { text: r } }, showToast: !0 };
        },
        956817: (e, l, a) => {
            a.d(l, { y: () => u });
            var n = a(734540),
                t = a(917799),
                s = a(24546),
                i = a(923488);
            const r = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                u =
                    (e) =>
                    (l, a, { api: u }) => {
                        const o = (0, t._O)(l, { request: u.withEndpoint(n.Z).switch, params: e });
                        return l((0, s.MH)()).then(() =>
                            l((0, i.nB)()).then(() =>
                                o({ actionTypes: r, context: "SWITCH" }).then(() => {
                                    window.location.assign("/home");
                                }),
                            ),
                        );
                    };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch.6fdabe9a.js.map
