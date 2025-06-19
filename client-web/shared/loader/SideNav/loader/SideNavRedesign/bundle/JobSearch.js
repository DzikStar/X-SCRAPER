"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch", "icons/IconChevronDown-js"],
    {
        110512: (e, t, n) => {
            n.d(t, { ZP: () => O, V7: () => W });
            n(136728);
            var r,
                a,
                l,
                s,
                i,
                o,
                c,
                u,
                d,
                p,
                m = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "DelegatedAccountListQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: (a = [{ kind: "Literal", name: "status", value: "Accepted" }]),
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
                                                            (l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: (i = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), action: "THROW" }], storageKey: null },
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
                                                                                { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), action: "THROW" },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        action: "THROW",
                                                                    },
                                                                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (u = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" },
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
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: a,
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
                                                            l,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    s,
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [i], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [o, c], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [u], storageKey: null },
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
                                                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [d], storageKey: null },
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
                                                                    p,
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    p,
                                                ],
                                                storageKey: null,
                                            },
                                            p,
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
            m.hash = "1e0a77d9768f003fab71a100e8291dbc";
            const g = m;
            var h = n(202784),
                f = n(325686),
                y = (n(585488), n(712696)),
                w = n.n(y),
                _ = n(107267),
                b = n(731708),
                E = n(661810),
                C = n(642153),
                k = n(392237),
                v = n(111677),
                U = n.n(v),
                A = n(899667),
                S = n(487552),
                F = n(516951),
                Z = n(621416),
                I = n(125363),
                T = n(175856),
                L = n(390387),
                x = n(114084),
                D = n(736063);
            const M = (0, n(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: L.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                B = g,
                P = U().daffabde,
                N = U().eccbfa26,
                K = U().a1b7a904,
                H = { context: "DelegateGroups" },
                R = ({ activeUserId: e, delegateUser: t, isUpdatedManageAccounts: n, onDelegateSwitch: r, renderUserDecoration: a, setDelegateUser: l }) => {
                    const s = (0, I.I0)(),
                        i = (0, _.useHistory)(),
                        [o] = (0, Z.m)(T.s7),
                        [c, u] = h.useState(!0),
                        d = w()(B, {}),
                        p = h.useMemo(() => {
                            const t = [];
                            return (
                                d.viewer_v2?.list_delegation_groups?.forEach((n) => {
                                    const { result: r } = n.handle || {};
                                    ("User" === r?.__typename && r?.rest_id === e) || ("User" === r?.__typename && t.push(r));
                                }),
                                t
                            );
                        }, [e, d.viewer_v2?.list_delegation_groups]),
                        m = h.useMemo(() => t?.userId && p.some((e) => e?.rest_id && t?.userId === e?.rest_id), [t, p]),
                        g = h.useCallback(() => {
                            u(!c);
                        }, [c]);
                    h.useEffect(() => {
                        s(L.po(p.length));
                    }, [p, s]);
                    const y = h.useCallback(
                        (e) => () => {
                            o ? i.push("/i/delegate/switch", { delegateUser: e }) : l && l(e), r();
                        },
                        [o, l, r, i],
                    );
                    return p.length < 1
                        ? null
                        : h.createElement(
                              h.Fragment,
                              null,
                              n ? h.createElement(f.Z, { style: V.updatedDelegateAccountsLabel }, h.createElement(b.ZP, { color: "gray700", weight: "bold" }, N)) : h.createElement(f.Z, { onClick: g, style: V.delegateAccountsLabel }, h.createElement(b.ZP, { color: "gray700", weight: "bold" }, m ? P : N), !m && (c ? h.createElement(A.default, { style: V.IconChevronUp }) : h.createElement(S.default, { style: V.IconChevronDown }))),
                              n || c || m
                                  ? p.map((e) => {
                                        const { id_str: r } = e.legacy,
                                            l = r === t?.userId,
                                            s = a ? a({ withBadges: !1, isActiveUser: l }) : void 0,
                                            i = y({ userId: r });
                                        return h.createElement(h.Fragment, { key: e.rest_id }, h.createElement(x.Z, { "aria-label": K, badgeContext: "account", decoration: s, displayMode: "UserCompact", onCellClick: l ? F.Z : i, user: e, withInteractiveStyling: !l, withLink: !1 }), n && h.createElement(E.Z, { style: V.accountDivider }));
                                    })
                                  : h.createElement(f.Z, { style: V.facePileContainer }, h.createElement(C.Z, { userAvatarSize: "large", userAvatarUrls: p.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function W() {
                const e = w()(B, {}),
                    t = (0, I.v9)(L.x0);
                return h.useMemo(() => {
                    const n = [];
                    return (
                        e.viewer_v2?.list_delegation_groups?.forEach((e) => {
                            const { result: r } = e.handle || {};
                            ("User" === r?.__typename && r?.rest_id === t) || ("User" === r?.__typename && n.push(r));
                        }),
                        n
                    );
                }, [e.viewer_v2?.list_delegation_groups, t]);
            }
            const V = k.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                O = M((e) => h.createElement(D.H, { errorConfig: H }, h.createElement(R, e)));
        },
        229412: (e, t, n) => {
            n.d(t, { a: () => R });
            n(136728);
            var r = n(202784),
                a = n(325686),
                l = n(530732),
                s = n(310088),
                i = n(731708),
                o = n(673510),
                c = n(661810),
                u = n(392237),
                d = n(111677),
                p = n.n(d),
                m = n(297896),
                g = n(293723),
                h = n(58399),
                f = n(913973),
                y = n(516951),
                w = n(725516),
                _ = n(125363),
                b = n(806960);
            const E = p().h6beb5fb,
                C = p().d86bbf0f,
                k = u.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                v = ({ notificationCount: e = 0 }) => (e > 0 ? r.createElement(s.Z, { count: e, style: e > 9 && k.notificationBadge, truncatedCountFormatter: E, unreadCountLabel: C }) : null);
            var U = n(110512),
                A = n(642153),
                S = n(899667),
                F = n(487552),
                Z = n(390387);
            const I = p().c61eea74,
                T = p().b7dc3885,
                L = p().d86bbf0f,
                x = p().h6beb5fb,
                D = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: n, isUpdatedManageAccounts: l, renderUserDecoration: u, userTestId: d, withBadges: p }) => {
                    const m = (0, _.v9)(Z.BP),
                        g = !0,
                        [h, f] = r.useState(!1),
                        y = r.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        w = r.useMemo(() => y.reduce((e, t) => e + (t.badgeCount || 0), 0), [y]),
                        b = r.useCallback(() => {
                            f(!h);
                        }, [h]),
                        E = r.useMemo(() => (m && m > 0 ? r.createElement(a.Z, { onClick: b, style: M.personalAccountsLabel }, r.createElement(i.ZP, { color: "gray700", weight: "bold" }, I), h ? r.createElement(S.default, { style: M.IconChevronUp }) : r.createElement(F.default, { style: M.IconChevronDown })) : null), [g, m, b, h]),
                        C = r.useMemo(
                            () =>
                                y.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return r.createElement(r.Fragment, { key: e.user_id }, r.createElement(o.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": T({ screenName: e.screen_name }), avatarDecoration: l && r.createElement(v, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: u({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: n({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: d, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), l && r.createElement(c.Z, { style: M.accountDivider }));
                                }),
                            [n, y, u, d, p, l],
                        ),
                        k = r.useMemo(() => r.createElement(a.Z, { style: M.facePileContainer }, r.createElement(A.Z, { userAvatarSize: "large", userAvatarUrls: y.map((e) => e.avatar_image_url) }), w > 0 ? r.createElement(s.Z, { count: w, standalone: !0, truncatedCountFormatter: x, unreadCountLabel: L }) : null), [y, w]);
                    return y.length > 0 ? r.createElement(r.Fragment, null, !l && E, l || h || void 0 === m || 0 === m ? C : k) : null;
                },
                M = u.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                B = r.memo(D);
            var P = n(22132);
            const N = p().c61eea74,
                K = p().d86bbf0f,
                H = p().h6beb5fb;
            function R(e) {
                const { accountSwitch: t, accountUsers: n, activeUser: u, clearDelegateUser: d, delegateAccountCount: p, delegateUser: E, isDelegateEnabled: C, isUpdatedManageAccounts: k, onDelegateSwitch: A, onUserSwitch: S, userTestId: F, withBadges: Z = !1 } = e,
                    I = !!E,
                    T = n.some((e) => e.user_id === u.id_str) || (p && p > 0) || I,
                    L = r.useCallback(() => {
                        d && d();
                    }, [d]),
                    x = r.useCallback(
                        ({ hasBadge: e, isProtected: n, userId: r }) =>
                            () => {
                                t({ hasBadge: e, isProtected: n, userId: r }), S?.();
                            },
                        [t, S],
                    ),
                    D = (0, _.v9)(b.pm),
                    M = (0, _.v9)(b.QA),
                    R = (0, w.z)(),
                    V = r.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const n = [];
                            return (
                                t &&
                                    n.push(
                                        r.createElement(
                                            l.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    R.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            r.createElement(m.default, { style: W.IconExiting }),
                                        ),
                                    ),
                                n.push(e ? r.createElement(g.default, { style: W.updatedIconCheckmarkCircleFill }) : r.createElement(h.default, { style: W.IconChevronRight })),
                                r.createElement(
                                    a.Z,
                                    { style: W.decorationsContainer },
                                    n.map((e, t) => r.createElement(r.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [R],
                    ),
                    O = r.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: n }) => (t ? (C ? r.createElement(g.default, { style: [W.IconCheckmarkCircleFill, W.userDecoration] }) : r.createElement(f.default, { style: [W.iconCheckMark, W.userDecoration] })) : e && n ? r.createElement(s.Z, { count: e, standalone: !0, style: W.userDecoration, truncatedCountFormatter: H, unreadCountLabel: K }) : void 0), [C]),
                    z = r.useMemo(() => (k ? V : O), [k, O, V]),
                    q = r.useMemo(() => r.createElement(U.ZP, { activeUserId: u.id_str, delegateUser: E, isUpdatedManageAccounts: k, key: 0, onDelegateSwitch: A ?? y.Z, renderUserDecoration: z }), [u.id_str, E, k, A, z]),
                    $ = r.useMemo(() => r.createElement(B, { accountUsers: n, activeUser: u, handleMultiAccountSwitch: x, isUpdatedManageAccounts: !!k, key: 1, renderUserDecoration: z, userTestId: F, withBadges: Z }), [n, u, x, k, z, F, Z]),
                    G = [];
                return !k && C && G.push(q), G.push($), k && C && G.push(q), r.createElement(r.Fragment, null, k && C && r.createElement(a.Z, { style: W.personalAccountsLabel }, r.createElement(i.ZP, { color: "gray700", weight: "bold" }, N)), T ? r.createElement(r.Fragment, null, r.createElement(o.ZP, { affiliateBadgeInfo: u.highlightedLabel, avatarDecoration: k && r.createElement(v, { notificationCount: D + M }), avatarUri: u.profile_image_url_https, badgeContext: "account", decoration: z({ withBadges: Z, isActiveUser: !E, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: u.is_blue_verified, isProtected: u.protected, isVerified: u.verified, name: u.name, onCellClick: I ? L : void 0, screenName: u.screen_name, testID: F, userId: u.id_str, verifiedType: u.verified_type, withLink: !1 }), k && r.createElement(c.Z, { style: W.accountDivider })) : null, G, !k && (T || p || n.length) ? r.createElement(c.Z, { spacing: "space12" }) : null);
            }
            const W = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, n) => {
            n.d(t, { Z: () => fe });
            n(136728);
            var r = n(202784),
                a = n(400752),
                l = n(111677),
                s = n.n(l),
                i = n(325686),
                o = n(58881),
                c = n(392237),
                u = n(157130),
                d = n(530732),
                p = n(443781),
                m = n(884161),
                g = n(521514),
                h = n(614983),
                f = n.n(h),
                y = n(618186),
                w = n(366635),
                _ = n(310088),
                b = n(149170),
                E = n(952793),
                C = n(125363),
                k = n(919022);
            const v = s().d86bbf0f,
                U = s().h6beb5fb;
            function A(e) {
                const { isExpanded: t } = e,
                    n = (0, E.hC)("rweb_sourcemap_migration"),
                    a = (0, C.v9)(k.ZP.selectViewerUser);
                f()(a, "user must be defined");
                const { highlightedLabel: l, is_blue_verified: s, name: o, profile_image_url_https: c, protected: u, screen_name: d, verified: p, verified_type: m } = a;
                return r.createElement(r.Fragment, null, r.createElement(i.Z, null, r.createElement(y.Z, { "aria-label": o, screenName: d, size: "xLarge", style: n && F.userAvatarRedesign, uri: c }), t ? null : S(e)), t ? r.createElement(r.Fragment, null, r.createElement(w.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: s, isProtected: u, isVerified: p, name: o, screenName: d, style: F.userName, verifiedType: m, withStackedLayout: !0 }), r.createElement(i.Z, { style: F.iconContainer }, r.createElement(b.default, { style: F.icon }), t ? S(e) : null)) : null);
            }
            function S({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? r.createElement(_.Z, { pip: !0, style: t && F.pip, truncatedCountFormatter: U, unreadCountLabel: v }) : null;
            }
            const F = c.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                Z = s().b8e1d524,
                I = s().gef27c4c;
            class T extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? r.createElement(i.Z, { style: L.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: n, hasMultiAccountBadges: a, hoverLabel: l, interactiveViewTestId: s, isExpanded: i, renderEmptyState: p, renderMenuSheet: g, style: h } = this.props,
                        f = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        y = [L.anchorContainer, f && L.anchorContainerRedesign, h];
                    return t || p ? r.createElement(u.Z, { contentStyle: L.menuContainer, enableEnterKeyToggle: !0, renderContent: g, withArrow: !0, withFixedPosition: !0 }, r.createElement(d.Z, { "aria-label": e || I, hoverLabel: i ? void 0 : { label: l || Z }, interactiveStyles: o.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: y, testID: s }, n ? r.createElement(m.p, { forceUserId: n.userId }, r.createElement(A, { hasMultiAccountBadges: a, isExpanded: i })) : t ? r.createElement(A, { hasMultiAccountBadges: a, isExpanded: i }) : this._renderEmptyState())) : null;
                }
            }
            T.contextType = p.rC;
            const L = c.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: g.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var x = n(380155),
                D = n(755296),
                M = n(725516),
                B = n(193850),
                P = n(823161),
                N = n(879113),
                K = n(266704),
                H = n(550475),
                R = n(516951),
                W = n(615656);
            const V = ({ children: e }) => {
                const t = r.useRef(null);
                return (
                    r.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const n = e.getElementsByTagName("svg")[0],
                            { height: r, width: a, x: l, y: s } = n.getBBox(),
                            i = [l, s, a, r].join(" ");
                        n.setAttribute("viewBox", i);
                    }),
                    r.createElement("div", { ref: t }, e)
                );
            };
            var O = n(725405);
            const z = s().h6beb5fb,
                q = s().d86bbf0f,
                $ = s().b7dc3885,
                G = c.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                j = ({ accountSwitch: e, accountUsers: t, activeUser: n, createLocalApiErrorHandlerAccountsFetch: a, fetchAccounts: l, fetchStatus: s, handleClose: o, manageAccountsMenuItem: c, shouldDisplayFetchRenderer: u }) => {
                    const p = t.filter((e) => e.user_id !== n?.id_str),
                        m = p.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        g = (0, O.Z)(),
                        h = r.useCallback(() => {
                            g.scribe({ element: c.scribeElement, action: "click" }), o();
                        }, [g, o, c]),
                        f = r.useMemo(() => r.createElement(d.Z, { link: c.link, onClick: h, style: G.IconMoreCircleContainer, testID: c.testID, withoutInteractiveStyles: !0 }, r.createElement(V, null, r.createElement(H.default, { style: G.IconMoreCircle })), m > 0 && r.createElement(_.Z, { count: m, style: m > 9 && G.notificationBadge, truncatedCountFormatter: z, unreadCountLabel: q })), [h, c.link, c.testID, m]),
                        y = r.useCallback(
                            ({ hasBadge: t, isProtected: n, userId: r }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: n, userId: r }), o?.();
                                },
                            [e, o],
                        ),
                        w = r.useMemo(
                            () => () =>
                                p.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return r.createElement(d.Z, { key: e.user_id, onClick: y({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, r.createElement(P.default, { "aria-label": $({ screenName: e.screen_name }), decoration: t ? r.createElement(_.Z, { count: t, style: t > 9 && G.notificationBadge, truncatedCountFormatter: z, unreadCountLabel: q }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [y, p],
                        ),
                        b = r.useCallback(() => {
                            l().catch(a({ [W.ZP.AppInReadOnlyMode]: { customAction: R.Z } }));
                        }, [a, l]),
                        E = r.useMemo(() => r.createElement(r.Fragment, null, u ? r.createElement(N.Z, { fetchStatus: s, onRequestRetry: b, render: w }) : w()), [s, b, w, u]);
                    return r.createElement(i.Z, null, r.createElement(K.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: n.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: n.verified, userAvatarUri: n.profile_image_url_https, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userName: n.name, userScreenName: n.screen_name }), r.createElement(i.Z, { style: G.avatarListWithOverflowContainer }, E, f));
                };
            var Y = n(71620),
                Q = n(668214),
                J = n(454319),
                X = n(956817),
                ee = n(390387),
                te = n(312771);
            const ne = (0, Q.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: J.UD, loggedInUser: k.ZP.selectLoggedInUser, multiAccountUsers: J.pc, hasMultiAccountBadges: J.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, Y.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, Y.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: J.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: n, hasMultiAccountBadges: r, loggedInUser: a, multiAccountUsers: l }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: n === te.ZP.NONE ? te.ZP.LOADING : n, hasMultiAccountBadges: !!a && r, loggedInUser: a, multiAccountUsers: l }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var re = n(143670),
                ae = n(731708),
                le = n(229412);
            class se extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => r.createElement(re.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? r.createElement(ae.ZP, { size: "headline1", style: ie.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: n, clearDelegateUser: a, delegateAccountCount: l, delegateUser: s, handleClose: i, withBadges: o = !1 } = this.props,
                                c = { accountSwitch: e, accountUsers: t, activeUser: n, clearDelegateUser: a, delegateAccountCount: l, delegateUser: s, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: i, onDelegateSwitch: i, withBadges: o };
                            return r.createElement(le.a, c);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [W.ZP.AppInReadOnlyMode]: { customAction: R.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: n, handleClose: r } = this.props;
                            e && n.scribe({ element: e, action: "click" }), t?.(), r();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), r.createElement(i.Z, { style: ie.menuContainer }, this._renderTitle(), t ? r.createElement(N.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            se.contextType = p.rC;
            const ie = c.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                oe = (0, M.Z)(se);
            var ce = n(22132);
            const ue = s().j0a8da6e,
                de = s().c6f2bf00,
                pe = s().a58e0e51,
                me = s().j62f43a6,
                ge = s().d4c52015,
                he = { actionText: de, link: "/account/switch", scribeElement: "manage_accounts", testID: ce.Z.manageAccounts },
                fe = ne(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: n, delegateAccountCount: l, delegateUser: s, fetchMultiAccountList: i, fetchStatus: o, hasMultiAccountBadges: c, isExpanded: u, loggedInUser: d, multiAccountUsers: p, style: m, switchAccount: g, withUpdatedAccountSwitcher: h }) => {
                    const f = (0, M.z)();
                    (0, B.ip)();
                    const [y, w] = (0, a.KO)(B.lA),
                        _ = r.useCallback(() => {
                            const e = p.length > 1,
                                t = [];
                            return p.length >= 5 || s || t.push({ actionText: ue, link: "/i/flow/login", scribeElement: "add_existing_account", testID: ce.Z.addAccount }), e && t.push(he), (l || y > 0) && t.push({ actionText: me, link: l || y > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: ce.Z.manageAccounts, badge: { count: y, label: ge } }), d && t.push({ actionText: pe({ screenName: d.screen_name }), link: "/logout", scribeElement: "log_out", testID: ce.Z.logout }), t;
                        }, [l, s, d, p.length, y]),
                        b = r.useCallback(
                            ({ hasBadge: e, isProtected: n, userId: r }) => {
                                f.scribe({ component: n ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), g({ user_id: r }).catch(t(x.y));
                            },
                            [f, t, g],
                        ),
                        E = r.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, D.s)();
                            return e;
                        }, []),
                        C = r.useCallback((t) => (w(), d ? (h ? r.createElement(j, { accountSwitch: b, accountUsers: p, activeUser: d, createLocalApiErrorHandlerAccountsFetch: n, fetchAccounts: i, fetchStatus: o, handleClose: t, manageAccountsMenuItem: he, shouldDisplayFetchRenderer: E() }) : r.createElement(oe, { accountSwitch: b, accountUsers: p, activeUser: d, additionalMenuItems: _(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: n, delegateAccountCount: l, delegateUser: s, fetchAccounts: i, fetchStatus: o, handleClose: t, shouldDisplayFetchRenderer: E(), withBadges: !0 })) : null), [e, n, l, s, i, o, _, E, w, d, b, p, h]);
                    return r.createElement(T, { analytics: f, currentUser: d, delegateUser: s, hasMultiAccountBadges: c, interactiveViewTestId: ce.Z.accountSwitcher, isExpanded: u, renderMenuSheet: C, style: m });
                });
        },
        22132: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        621416: (e, t, n) => {
            n.d(t, { m: () => l });
            n(890103);
            var r = n(202784),
                a = n(175698);
            function l(e) {
                const t = (0, a.A)();
                return [
                    !!t && !t.flags[e],
                    r.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        380155: (e, t, n) => {
            n.d(t, { y: () => o });
            var r = n(111677),
                a = n.n(r),
                l = n(615656),
                s = n(51525);
            const i = a().b20a3894,
                o = { [l.ZP.AppInReadOnlyMode]: { customAction: s.w1 }, [l.ZP.TargetUserNotFound]: { toast: { text: i } }, showToast: !0 };
        },
        956817: (e, t, n) => {
            n.d(t, { y: () => o });
            var r = n(734540),
                a = n(917799),
                l = n(24546),
                s = n(923488);
            const i = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                o =
                    (e) =>
                    (t, n, { api: o }) => {
                        const c = (0, a._O)(t, { request: o.withEndpoint(r.Z).switch, params: e });
                        return t((0, l.MH)()).then(() =>
                            t((0, s.nB)()).then(() =>
                                c({ actionTypes: i, context: "SWITCH" }).then(() => {
                                    window.location.assign("/home");
                                }),
                            ),
                        );
                    };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                a = n(325686),
                l = n(392237);
            function s({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(476984),
                l = n.n(a),
                s = n(143778),
                i = n(750410),
                o = n(682830);
            const c = "failed",
                u = "loaded",
                d = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: l, loadingMessage: s, onRequestRetry: u, render: m, renderFailure: g, retryMessage: h, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? r.createElement(i.Z, { icon: l, onRequestRetry: u, retryMessage: h }) : n ? r.createElement(o.m, { failureMessage: n }) : g();
                        case d:
                            return r.createElement(o.J, { "aria-label": e, color: t, loadingMessage: s });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                l = n(111677),
                s = n.n(l),
                i = n(815858),
                o = n(731708),
                c = n(642153),
                u = n(530732),
                d = n(392237);
            const p = s().a35a5b10,
                m = s().fc8cd112,
                g = (e) => r.createElement(o.ZP, null, e);
            class h extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: l, userScreenName: s, withFacepile: d } = this.props,
                        m = this._renderMessage();
                    return r.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(u.Z, { "aria-label": p, interactiveStyles: null, link: s ? ((g = s), `/${g}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => r.createElement(a.Z, { style: f.content }, !e && d ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (n || i) && !!s && f.underline, l] }, e && d ? r.createElement(c.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, m))) : r.createElement(a.Z, { style: f.content }, r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, m)));
                    var g;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : m;
                }
                _renderOneUsername(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "c9e6167d" }, g(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "ha91d1eb" }, g(e[0]), g(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "f1069f9b" }, g(e[0]), g(e[1]), g(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(s().I18NFormatMessage, { $i18n: "e8404c1f" }, g(e[0]), g(e[1]), n);
                }
            }
            h.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = d.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                a = n(325686),
                l = n(827515),
                s = n(461756),
                i = n(731708),
                o = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const r = (0, l.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = o.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: o, ...u } = e,
                        [h, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        y = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (y.current)
                                if (s.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, l.Z)(e.count) && h.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || d(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            y.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && d(h.pendingCount, h.pendingText, f));
                        }, [h.animating, h.oldText]),
                        r.useMemo(() => {
                            const e = p[h.transitionDirection],
                                t = h.oldText && !s.Z.reducedMotionEnabled,
                                l = !h.animating && h.oldText && !s.Z.reducedMotionEnabled,
                                o = { ...m, ...(h.animating ? e.post : e.active) },
                                c = { ...(l ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: o }, r.createElement(i.ZP, u, h.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, f),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, u, h.text),
                                ),
                            );
                        }, [n, u, h, y, f])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(325686),
                l = n(731708),
                s = n(891198),
                i = n(280278),
                o = n(392237);
            const c = "subtext1",
                u = r.createContext({ onMedia: !1 });
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: a } = this.props;
                    return r.createElement(l.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, r.createElement(u.Provider, { value: { onMedia: n } }, e));
                }
            }
            (d.Group = (e) =>
                r.createElement(
                    a.Z,
                    { style: [p.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(a.Z, { key: t, style: t < n.length - 1 && p.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => r.createElement(u.Consumer, null, ({ onMedia: n }) => r.createElement(l.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (d.Value = ({ animated: e, children: t, count: n, style: a, weight: s = "bold" }) => r.createElement(u.Consumer, null, ({ onMedia: o }) => (e ? r.createElement(i.ZP, { children: t, count: n, size: c, style: a, weight: s }) : r.createElement(l.ZP, { children: t, color: o ? "white" : "text", size: c, style: a, weight: s }))));
            const p = o.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = d;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                a = n(325686),
                l = n(731708),
                s = n(235902),
                i = n(649846),
                o = n(529509),
                c = n(392237),
                u = n(823161),
                d = n(238406),
                p = n(366635),
                m = n(646797);
            const g = () => !1;
            class h extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: l } = this.props,
                                { followersYouKnow: s } = e;
                            if (s && t && n) {
                                const { avatarUrls: e, count: t, names: s } = n;
                                return t ? r.createElement(a.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && r.createElement(o.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: s, userScreenName: l })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(s.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(a.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(a.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(a.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: l, userAvatarSize: i, userAvatarUri: o, userScreenName: c } = this.props,
                        { avatar: d } = e;
                    return r.createElement(a.Z, { style: f.row }, r.createElement(s.ZP.Provider, { value: { userAvatarLabel: g } }, r.createElement(u.default, { link: n, onClick: t, promotedContent: l, screenName: c, size: i, uri: d ? o : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: l } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(a.Z, { style: f.marginTop8 }, this._renderUserName(), l && this._renderHighlightedUserLabel())) : r.createElement(a.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: a, onScreenNameClick: l, profileLink: s, promotedContent: i, userHighlightedLabel: o, userName: c, userScreenName: u, userTranslatorType: d, userVerifiedType: m, userWithFollowsYou: g, withNameWrap: h } = this.props,
                        { badges: f, followIndicator: y, fullName: w } = e;
                    return r.createElement(p.Z, { affiliateBadgeInfo: o, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? n : void 0, isVerified: f ? a : void 0, link: s, name: w ? c : u, nameSize: "headline2", onLinkClick: l, promotedContent: i, screenName: u, translatorType: f ? d : void 0, verifiedType: f ? m : void 0, withFollowsYou: y && g, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(i.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(a.Z, { style: f.marginTop4 }, r.createElement(l.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: l, userWithheldDescription: s, userWithheldEntities: i } = this.props,
                        { description: o } = e;
                    return o && t && n && l ? r.createElement(a.Z, { style: [f.row, f.marginTop12] }, r.createElement(d.Z, { description: t, entities: n, userId: l, withheldDescription: s, withheldEntities: i })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: l, userFollowersCount: s, userFriendsCount: i, userScreenName: o } = this.props,
                        { stats: c } = e;
                    return c ? r.createElement(a.Z, { style: [f.row, f.marginTop12] }, r.createElement(m.Z, { followersCount: s, friendsCount: i, onPress: n, screenName: o, subscriptionsCount: l, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            h.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var y = n(807896);
            var w = n(111677);
            const _ = n.n(w)().ef633578;
            class b extends r.PureComponent {
                render() {
                    return r.createElement(h, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: a, knownFollowers: l, onAvatarClick: s, onScreenNameClick: i, promotedContent: o, userDescription: c, userId: u, userName: d, userScreenName: p, ...m } = e,
                    g = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(h, (0, y.Z)({}, m, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: g.isUserStatsWithLink, isUserVerified: a, knownFollowers: l, onAvatarClick: s, onScreenNameClick: i, promotedContent: o, userAvatarUri: g.profile_image_url_https, userDescription: c, userEntities: g.entities, userFollowersCount: g.followers_count, userFriendsCount: g.friends_count, userId: u, userName: d, userScreenName: p, userWithFollowsYou: g.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const a = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(h, { errorMessage: _, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: a.protected, isUserStatsWithLink: a.isUserStatsWithLink, isUserVerified: a.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: a.profile_image_url_https, userDescription: a.description, userEntities: a.entities, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userId: a.id_str, userName: n, userScreenName: n, userWithFollowsYou: a.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(111677),
                l = n.n(a),
                s = n(891198),
                i = n(98538);
            class o extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: a, style: o, subscribersCount: c, subscriptionsCount: u, withLink: d, withSubscribersCount: p, withSubscriptionsCount: m } = this.props,
                        g = `/${a}/verified_followers`;
                    return r.createElement(i.Z.Group, { style: o }, r.createElement(i.Z, { count: t, link: d ? `/${a}/following` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(i.Z.Value, null, l().e4f1e6e4({ formattedCount: (0, s.wl)(t) })), r.createElement(i.Z.Label, null, l().daf8a75f({ count: t })))), r.createElement(i.Z, { count: e, link: d ? g : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(i.Z.Value, null, l().ef1f4fc6({ formattedCount: (0, s.wl)(e) })), r.createElement(i.Z.Label, null, l().ad9b5988({ count: e })))), p && void 0 !== c && r.createElement(i.Z, { count: c, link: d ? `/${a}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(i.Z.Value, null, l().a9980948({ formattedCount: (0, s.wl)(c) })), r.createElement(i.Z.Label, null, l().ce44a35c({ count: c })))), m && u && r.createElement(i.Z, { count: u, link: d ? `/${a}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(i.Z.Value, null, l().id949f68({ formattedCount: (0, s.wl)(u) })), r.createElement(i.Z.Label, null, l().hb608cfc({ count: u })))));
                }
            }
            o.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        487552: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var r = n(202784),
                a = n(890601),
                l = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        76388: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var r = n(202784),
                a = n(890601),
                l = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch.5fcdd2da.js.map
