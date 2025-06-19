"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu-a2dee9c7"],
    {
        395337: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                r,
                i,
                t,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (i = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [i], storageKey: null }, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, t], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = o;
        },
        110512: (e, a, l) => {
            l.d(a, { ZP: () => q, V7: () => V });
            l(136728);
            var n,
                r,
                i,
                t,
                o,
                s,
                d,
                c,
                u,
                m,
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
                                        args: (r = [{ kind: "Literal", name: "status", value: "Accepted" }]),
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
                                                                    (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), action: "THROW" }], storageKey: null },
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
                                                                                { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" },
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
                                        args: r,
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
                                                                    t,
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [o], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [s, d], storageKey: null },
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                                    m,
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    m,
                                                ],
                                                storageKey: null,
                                            },
                                            m,
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
            const g = p;
            var _ = l(202784),
                f = l(325686),
                y = (l(585488), l(712696)),
                h = l.n(y),
                k = l(107267),
                b = l(731708),
                w = l(661810),
                v = l(642153),
                D = l(392237),
                C = l(111677),
                M = l.n(C),
                F = l(899667),
                I = l(487552),
                A = l(516951),
                S = l(621416),
                E = l(125363),
                T = l(175856),
                U = l(390387),
                Z = l(114084),
                P = l(736063);
            const L = (0, l(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: U.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                K = g,
                x = M().daffabde,
                O = M().eccbfa26,
                R = M().a1b7a904,
                W = { context: "DelegateGroups" },
                H = ({ activeUserId: e, delegateUser: a, isUpdatedManageAccounts: l, onDelegateSwitch: n, renderUserDecoration: r, setDelegateUser: i }) => {
                    const t = (0, E.I0)(),
                        o = (0, k.useHistory)(),
                        [s] = (0, S.m)(T.s7),
                        [d, c] = _.useState(!0),
                        u = h()(K, {}),
                        m = _.useMemo(() => {
                            const a = [];
                            return (
                                u.viewer_v2?.list_delegation_groups?.forEach((l) => {
                                    const { result: n } = l.handle || {};
                                    ("User" === n?.__typename && n?.rest_id === e) || ("User" === n?.__typename && a.push(n));
                                }),
                                a
                            );
                        }, [e, u.viewer_v2?.list_delegation_groups]),
                        p = _.useMemo(() => a?.userId && m.some((e) => e?.rest_id && a?.userId === e?.rest_id), [a, m]),
                        g = _.useCallback(() => {
                            c(!d);
                        }, [d]);
                    _.useEffect(() => {
                        t(U.po(m.length));
                    }, [m, t]);
                    const y = _.useCallback(
                        (e) => () => {
                            s ? o.push("/i/delegate/switch", { delegateUser: e }) : i && i(e), n();
                        },
                        [s, i, n, o],
                    );
                    return m.length < 1
                        ? null
                        : _.createElement(
                              _.Fragment,
                              null,
                              l ? _.createElement(f.Z, { style: N.updatedDelegateAccountsLabel }, _.createElement(b.ZP, { color: "gray700", weight: "bold" }, O)) : _.createElement(f.Z, { onClick: g, style: N.delegateAccountsLabel }, _.createElement(b.ZP, { color: "gray700", weight: "bold" }, p ? x : O), !p && (d ? _.createElement(F.default, { style: N.IconChevronUp }) : _.createElement(I.default, { style: N.IconChevronDown }))),
                              l || d || p
                                  ? m.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            i = n === a?.userId,
                                            t = r ? r({ withBadges: !1, isActiveUser: i }) : void 0,
                                            o = y({ userId: n });
                                        return _.createElement(_.Fragment, { key: e.rest_id }, _.createElement(Z.Z, { "aria-label": R, badgeContext: "account", decoration: t, displayMode: "UserCompact", onCellClick: i ? A.Z : o, user: e, withInteractiveStyling: !i, withLink: !1 }), l && _.createElement(w.Z, { style: N.accountDivider }));
                                    })
                                  : _.createElement(f.Z, { style: N.facePileContainer }, _.createElement(v.Z, { userAvatarSize: "large", userAvatarUrls: m.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function V() {
                const e = h()(K, {}),
                    a = (0, E.v9)(U.x0);
                return _.useMemo(() => {
                    const l = [];
                    return (
                        e.viewer_v2?.list_delegation_groups?.forEach((e) => {
                            const { result: n } = e.handle || {};
                            ("User" === n?.__typename && n?.rest_id === a) || ("User" === n?.__typename && l.push(n));
                        }),
                        l
                    );
                }, [e.viewer_v2?.list_delegation_groups, a]);
            }
            const N = D.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                q = L((e) => _.createElement(P.H, { errorConfig: W }, _.createElement(H, e)));
        },
        906433: (e, a, l) => {
            l.d(a, { Z: () => _ });
            l(136728);
            var n = l(202784),
                r = l(325686),
                i = l(952428),
                t = l(731708),
                o = l(310088),
                s = l(392237),
                d = l(111677),
                c = l.n(d),
                u = l(206962);
            const m = () => c().d9ef2842,
                p = c().d86bbf0f,
                g = c().h6beb5fb,
                _ = ({ badgeCount: e, decoration: a, icon: l, iconColor: s, label: d, link: c, onClick: _, pip: y, rightControl: h, testID: k }) =>
                    n.createElement(
                        r.Z,
                        { style: f.dashMenuItem },
                        n.createElement(
                            i.Z,
                            { link: c, onClick: _, style: f.link, testID: k },
                            n.createElement(
                                r.Z,
                                { style: f.item },
                                l
                                    ? n.createElement(l, {
                                          style: (() => {
                                              const e = [f.icon, f.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(t.ZP, { numberOfLines: 1, size: "headline1", style: f.itemLabel, weight: "bold" }, d),
                                e || y ? n.createElement(r.Z, { style: f.itemAccessory }, n.createElement(o.Z, { count: e, pip: y, standalone: !0, truncatedCountFormatter: g, unreadCountLabel: y ? m : p })) : null,
                                a ? n.createElement(r.Z, { style: f.leftMargin }, a) : null,
                            ),
                        ),
                        h,
                    ),
                f = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, a, l) => {
            l.d(a, { Z: () => v });
            var n = l(202784),
                r = l(325686),
                i = l(661810),
                t = l(952428),
                o = l(731708),
                s = l(392237),
                d = l(516951),
                c = l(500002),
                u = l(443781),
                m = l(71620),
                p = l(668214),
                g = l(172497),
                _ = l(466036),
                f = l(390387),
                y = l(919022);
            const h = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: f.yK, hasCommunityMemberships: g.fn, pendingFollowersInfo: _.sC, viewerUser: y.ZP.selectViewerUser, userFeatures: f.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: a, pendingFollowersInfo: l, userFeatures: n, viewerUser: r }) => {
                    const { acceptedIds: i, ids: t } = l;
                    return { communitiesActions: e, acceptedFollowerCount: i.length, hasCommunityMemberships: a, viewerUser: r, pendingFollowerCount: t.length - i.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: _.GE }))
                .withAnalytics();
            var k = l(906433),
                b = l(879526);
            const w = ({ acceptedFollowerCount: e, analytics: a, pendingFollowerCount: l, viewerUser: s, onClose: c = d.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: g, countrySpecificItems: _ } = (0, b.O)({ analytics: a, featureSwitches: m, onClose: c, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: l });
                    return n.createElement(
                        n.Fragment,
                        null,
                        ((e) =>
                            e.map((e, a) => {
                                const { component: l = k.Z, ...r } = e,
                                    i = { ...r },
                                    t = n.createElement(l, i);
                                return n.createElement(n.Fragment, { key: a }, t);
                            }))(g),
                        ((f = _),
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(r.Z, { style: D.redesignDivider }, n.createElement(i.Z, { space: "space12", style: D.divider })),
                            f.map((e, a) => n.createElement(t.Z, { key: a, link: e.link, onClick: e.onClick, style: D.countrySpecificItem }, n.createElement(o.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var f;
                },
                v = (0, c.ZP)(h(n.memo(w))),
                D = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        879526: (e, a, l) => {
            l.d(a, { O: () => Ce });
            var n = l(202784),
                r = l(400752),
                i = l(537392),
                t = l(688715),
                o = l(868634),
                s = l(111677),
                d = l.n(s),
                c = l(1753),
                u = l(625271),
                m = l(883069),
                p = l(279849),
                g = l(197318),
                _ = l(689582),
                f = l(256260),
                y = l(511323),
                h = l(80361),
                k = l(856151),
                b = l(53674),
                w = l(792618),
                v = l(520913),
                D = l(297896),
                C = l(175564),
                M = l(748138),
                F = l(698891),
                I = l(68290),
                A = l(707570),
                S = l(839),
                E = l(593875),
                T = l(829110),
                U = l(720930),
                Z = l(516951),
                P = l(450681),
                L = l(400915),
                K = l(420182),
                x = l(997657),
                O = l(306114),
                R = l(279918),
                W = l(722517),
                H = l(880647),
                V = l(655352),
                N = l(125363),
                q = l(466036),
                z = l(390387),
                B = l(76920),
                j = l(477403),
                G = l(104119),
                Q = l(484633),
                Y = l(381904),
                $ = l(206962);
            const J = d().a15648a4,
                X = d().i3145aa0,
                ee = d().cdf89b84,
                ae = d().i83d4f14,
                le = d().aeede01a,
                ne = d().b0041756,
                re = d().ae1bbb26,
                ie = d().d299431c,
                te = d().fa98627a,
                oe = d().fd442790,
                se = d().da137d9a,
                de = d().e0cb0c72,
                ce = d().j087774e,
                ue = d().e2eef3c2,
                me = d().b55d8a78,
                pe = d().e5323e36,
                ge = d().h02a6fe6,
                _e = d().f75d1806,
                fe = d().a5a30af0,
                ye = d().b007440a,
                he = d().a5cbc19a,
                ke = d().d13d697c,
                be = d().j0e2cfa8,
                we = d().h5e38204,
                ve = d().h7d5d9fa,
                De = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: a, onClose: l = Z.Z, userClaims: s, viewerUser: d, acceptedFollowerCount: Ce, pendingFollowerCount: Me }) => {
                    let Fe = [],
                        Ie = [];
                    const Ae = (0, W.Z)("PremiumNav"),
                        Se = a.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Ee = (0, r.Dv)(K.lZ),
                        [Te, Ue] = n.useState(!1),
                        [Ze, Pe] = n.useState(!1),
                        Le = a.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ke = a.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        xe = (0, G.Md)(Ke);
                    n.useEffect(() => {
                        xe &&
                            Ee.get(De).then((e) => {
                                Ue(!e?.analyticsClickedV2), Pe(!e?.[xe?.key]);
                            });
                    }, [Ee, xe]);
                    const Oe = (0, N.I0)();
                    n.useEffect(() => {
                        d?.protected && Oe(q.GE());
                    }, [Oe, d]);
                    const Re = (0, B.Zy)();
                    Re.size > 0 && Re.add("/settings");
                    const We = (0, N.v9)(z.Lz),
                        He = ({ link: e }) => !(We && (("string" == typeof e && ((e.startsWith("/settings") && !Re.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Ve = d?.screen_name || "",
                        Ne = (0, i.iv)().width,
                        qe = H.Z.isOneColumnLayout(Ne) || H.Z.isOneColumnSquishedLayout(Ne),
                        ze = a.isTrue("responsive_web_birdwatch_note_writing_enabled") && !We,
                        Be = a.isTrue("branded_like_preview_enabled"),
                        je = a.isTrue("subscriptions_sign_up_enabled"),
                        Ge = a.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        Qe = a.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ye = a.isTrue("rweb_xchat_enabled"),
                        $e = s.isAnyPremiumSubscriber(),
                        Je = s.isVerifiedOrg(),
                        Xe = s.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ea = $e,
                        aa = s.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, V.ZP)(),
                        { role: la } = (0, L.l7)(),
                        { activeItem: na } = (0, Y.Y)(),
                        ra = a.isTrue("voice_rooms_web_space_creation") && la !== Q.Q.host && na?.type !== Q.W.space,
                        ia = a.isTrue("rweb_go_live_enabled"),
                        ta = a.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oa = a.isTrue("payments_enabled"),
                        sa = a.isTrue("recruiting_global_jobs_search_enabled"),
                        da = (0, j.vC)(),
                        ca = a.isTrue("c9s_enabled") && !!d,
                        ua = (0, O.Z)(),
                        ma = n.useMemo(() => !($e || !ua) && a.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [$e, a, ua]),
                        pa = (a) => () => {
                            a && e.scribe({ section: "overflow_menu", element: a, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        ga = { icon: c.default, label: fe, link: "/compose/articles", onClick: pa("article_composer") },
                        _a = { label: se, link: (0, t.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: pa("german_transparency_item") },
                        fa = { label: le, link: (0, t.ju)("https://legal.x.com/imprint.html"), onClick: pa("imprint_item") },
                        ya = { icon: u.default, label: J, link: "/i/communitynotes", onClick: pa("birdwatch") },
                        ha = { icon: m.default, label: X, link: "/i/bookmarks", onClick: pa("bookmarks_overflow_item") },
                        ka = { icon: p.default, label: ee, link: "/i/branded_likes_preview", onClick: pa("branded_likes_preview_overflow_item") },
                        ba = (g.default, pa("labs_item"), { icon: _.default, label: ne, link: `/${Ve}/lists`, onClick: pa("lists_overflow_item") }),
                        wa = { badgeCount: Me, icon: f.default, label: ae, link: "/follower_requests", onClick: pa("follower_requests_overflow_item") },
                        va = { icon: y.default, label: te, link: `/${Ve}`, onClick: pa("profile_overflow_item") },
                        Da = { icon: h.default, label: "Money", link: "/i/money", onClick: pa("payments_overflow_item") },
                        Ca = { icon: k.default, label: ce, link: "/i/coins", onClick: pa("twitter_coins") },
                        Ma = () => ({
                            icon: b.default,
                            label: he,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Ee.get(De).then((e) => {
                                    const a = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Ee.set(De, a);
                                }),
                                pa("analytics")),
                            decoration: Te ? n.createElement(o.ZP, { background: "blue500" }, ke) : null,
                        }),
                        Fa = () => {
                            const e = a.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? Ae : {},
                                r = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : _e,
                                i = "UpsellButtonRenderProperties" === Ae?.upsellContent?.render_properties.__typename ? Ae.upsellContent.render_properties.decoration_label : null;
                            return { icon: Se ? w.default : v.default, label: r, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: pa("verified_overflow_item"), decoration: i ? n.createElement(o.ZP, { background: "blue500" }, i) : null };
                        },
                        Ia = { icon: Se ? w.default : v.default, label: _e, link: "/i/premium", onClick: pa("premium_hub") },
                        Aa = { label: re, link: "/logout", icon: D.default, onClick: pa("logout_overflow_item"), testID: $.Z.logout },
                        Sa = { icon: C.default, label: de, link: (0, t.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: pa("twitter_ads_item") },
                        Ea = a.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ta = { icon: M.default, label: ie, link: Ea ? "/i/monetization" : "/settings/monetization", onClick: pa("monetization") },
                        Ua = { icon: F.default, label: oe, link: "/settings", onClick: pa("settings_overflow_item"), testID: $.Z.settings },
                        Za = () => ({
                            label: Le ? be : ue,
                            onClick: () => (
                                Le &&
                                    xe &&
                                    Ee.get(De).then((e) => {
                                        const a = { ...e, [xe?.key]: !0 };
                                        Ee.set(De, a);
                                    }),
                                pa("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: I.default,
                            decoration: Ze && Le && xe ? n.createElement(o.ZP, { background: "blue500" }, xe.label) : null,
                        }),
                        Pa = { label: ue, onClick: pa("verified_organization_dashboard_item"), link: "/i/verified", icon: I.default },
                        La = { label: me, onClick: pa("create_space_item"), link: "/i/spaces/start", icon: A.default },
                        Ka = { label: pe, onClick: pa("go_live_item"), link: "/i/go-live", icon: S.default },
                        xa = d ? { label: ge, onClick: pa("communities_item"), link: `/${d.screen_name}/communities`, icon: E.default } : void 0,
                        Oa = Ye && d ? { label: we, onClick: pa("chat_item"), link: "/i/chat", icon: T.default, decoration: n.createElement(o.ZP, { background: "blue500" }, ve) } : void 0,
                        Ra = a.isTrue("spaces_conference_enabled") || !!da,
                        Wa = { label: "Conferences", onClick: pa("conferences_item"), link: "/i/conferences", icon: S.default },
                        Ha = { label: ye, onClick: pa("jobs_item"), link: "/jobs", icon: U.default },
                        Va = [_a, fa],
                        Na = je && !$e,
                        qa = Qe,
                        za = (0, P.Z)([Oa, va, ea ? Ia : void 0, oa ? Da : void 0, Na ? Fa() : void 0, ca ? xa : void 0, Ve ? ba : void 0, ha, aa ? ga : void 0, qa ? (Je ? Pa : Za()) : void 0, ta ? Ca : void 0, ze ? ya : void 0, Me || Ce ? wa : void 0, ma ? Ma() : void 0, Ta, Sa, sa ? Ha : void 0, Ra ? Wa : void 0, Ua, Aa]).filter(He),
                        Ba = n.useContext(x.hC),
                        ja = (0, P.Z)([Oa, R.yw.Lists > Ba && Ve ? ba : void 0, R.yw.Premium > Ba && ea ? Ia : void 0, R.yw.PremiumSignup > Ba && Na ? Fa() : void 0, R.yw.Bookmarks > Ba ? ha : void 0, R.yw.Payments > Ba && oa ? Da : void 0, R.yw.Communities > Ba && ca ? xa : void 0, R.yw.Articles > Ba && Xe ? ga : void 0, R.yw.CommunityNotes > Ba && ze ? ya : void 0, R.yw.Analytics > Ba && ma ? Ma() : void 0, Ta, R.yw.VerifiedOrgDash > Ba && qa && Je ? Pa : void 0, (((!Je || s.isLegacyVerifiedOrg()) && R.yw.VerifiedOrgSignup > Ba) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && a.isTrue("blue_business_vo_nav_for_legacy_verified") ? Za() : void 0, ta ? Ca : void 0, Be ? ka : void 0, Me || Ce ? wa : void 0, Sa, R.yw.Jobs > Ba && sa ? Ha : void 0, void 0, ra ? La : void 0, ia ? Ka : void 0, Ra ? Wa : void 0, Ua]).filter(He);
                    return (0, V.ZP)() ? ((Fe = Fe.concat(ja)), Ge && qe && (Ie = Va)) : ((Fe = Fe.concat(za)), Ge && (Ie = Va)), { coreItems: Fe, countrySpecificItems: Ie };
                };
        },
        569591: (e, a, l) => {
            l.r(a), l.d(a, { DashMenu: () => j, default: () => G });
            var n = l(202784),
                r = l(325686),
                i = l(266704),
                t = l(525271),
                o = l(392237),
                s = l(111677),
                d = l.n(s),
                c = l(952793),
                u = l(839090),
                m = l(655352),
                p = l(943914),
                g = l(310088),
                _ = l(530732),
                f = l(823161),
                y = l(154003),
                h = l(379327),
                k = l(149170),
                b = l(380155),
                w = l(725516),
                v = l(125363),
                D = l(390387),
                C = l(919022),
                M = l(110512),
                F = l(105131),
                I = l(206962),
                A = l(71620),
                S = l(668214),
                E = l(454319),
                T = l(956817);
            const U = (0, S.Z)()
                    .propsFromState(() => ({ multiAccountUsers: E.$4, showMultiAccountOverflowPip: E.Zt, delegateUser: D.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, A.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: T.y })),
                Z = d().da4691aa,
                P = d().c7e55ccf,
                L = d().d86bbf0f,
                K = d().h6beb5fb,
                x = { page: "dash" },
                O = ({ createLocalApiErrorHandler: e, delegateUser: a, multiAccountUsers: l, onClose: i, showMultiAccountOverflowPip: t, switchAccount: o }) => {
                    const s = (0, w.z)(),
                        d = (0, v.v9)(C.ZP.selectLoggedInUser),
                        c = (0, M.V7)(),
                        u = (0, v.I0)(),
                        m = a || c.length || l.length > 0,
                        p = (e) => (e ? n.createElement(g.Z, { count: e, truncatedCountFormatter: K, unreadCountLabel: L }) : null),
                        F = n.useCallback(
                            (a, l, n) => () => {
                                s.scribe({ ...x, section: n ? "switch_to_protected_account" : "switch_account", element: l ? "account_bubble_badged" : "account_bubble", action: "click" }), o({ user_id: a }).catch(e(b.y));
                            },
                            [s, e, o],
                        ),
                        A = n.useCallback(() => {
                            s.scribe({ ...x, section: "switch_account", element: "dash_account_switcher", action: "click" }), i && i();
                        }, [s, i]);
                    return n.createElement(
                        r.Z,
                        { style: R.root },
                        (() => {
                            if (d && c.length) {
                                const e = c.map((e) => ({ screenName: e.core.screen_name, userId: e.legacy.id_str, badgeCount: void 0, avatarImageUrl: e.avatar?.image_url })),
                                    l = { screenName: d.screen_name, userId: d.id_str, badgeCount: void 0, avatarImageUrl: d.profile_image_url_https };
                                return [l, ...e.slice(0, 2)]
                                    .filter(({ userId: e }) => e !== (a?.userId ?? l.userId))
                                    .slice(0, 2)
                                    .map((e) => n.createElement(_.Z, { "aria-label": P({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === d.id_str ? u((0, D.YJ)()) : u((0, D.vU)({ userId: e.userId }))), role: "button", style: R.link }, n.createElement(f.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return l.map((e) => n.createElement(_.Z, { "aria-label": P({ screenname: e.screen_name }), key: e.user_id, onPress: F(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: R.link }, n.createElement(f.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? n.createElement(k.default, { testID: I.Z.iconMore }) : n.createElement(h.default, { testID: I.Z.iconPlus });
                            return n.createElement(r.Z, null, n.createElement(y.ZP, { "aria-label": Z, icon: e, link: "/account/switch", onPress: A, size: "small", testID: I.Z.switcher, type: "primaryOutlined" }), t ? n.createElement(g.Z, { pip: !0, truncatedCountFormatter: K, unreadCountLabel: L }) : null);
                        })(),
                    );
                },
                R = o.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                W = (0, F.P3)(U(n.memo(O)));
            var H = l(659773);
            const V = (0, S.Z)()
                .propsFromState(() => ({ viewerUser: C.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: H.MJ }))
                .withAnalytics({ page: "dash" });
            var N = l(120735);
            const q = d().i5f7b6b8,
                z = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                B = n.createElement(p.B, null, n.createElement(W, null)),
                j = (e) => {
                    const { alignMenu: a, analytics: l, fetchDataUsageSettingsIfNeeded: o, onClose: s, renderCustomMenuItems: d, viewerUser: p, withMoreSideNavOverflow: g } = e,
                        _ = (0, c.hC)("creator_subscriptions_subscription_count_enabled");
                    n.useEffect(() => {
                        o(), l.scribePageImpression();
                    }, [l, o]);
                    const f =
                        ((y = "profile_overflow_item"),
                        () => {
                            y && l.scribe({ section: "overflow_menu", element: y, action: "click" }), s && s();
                        });
                    var y;
                    const h = (e) => {
                        if (!p) return null;
                        const { creator_subscriptions_count: a, followers_count: l, friends_count: t, highlightedLabel: o, is_blue_verified: c, name: u, profile_image_url_https: y, protected: h, screen_name: k, translator_type: b, verified: w, verified_type: v } = p;
                        return (0, m.ZP)() ? n.createElement(r.Z, { style: Q.dropdownMinWidth }, d ? d() : n.createElement(N.Z, { onClose: s, withMoreSideNavOverflow: g })) : n.createElement(r.Z, { style: [e && Q.scrollableContentPadding, (0, m.ZP)() && Q.menuContentWidth] }, n.createElement(r.Z, { "aria-label": q, style: Q.header }, n.createElement(i.Z, { decoration: B, isAllowedToViewOptions: z(_), isLoggedIn: !0, isUserBlueVerified: c, isUserProtected: h, isUserStatsWithLink: !0, isUserVerified: w, onAvatarClick: f, onScreenNameClick: f, subscriptionsCount: a, userAvatarSize: "xLarge", userAvatarUri: y, userFollowersCount: l, userFriendsCount: t, userHighlightedLabel: o, userName: u, userScreenName: k, userTranslatorType: b, userVerifiedType: v, withNameWrap: !0 })), d ? d() : n.createElement(N.Z, { onClose: s }));
                    };
                    return (0, m.ZP)() ? n.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: s, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, h(!1)) : n.createElement(t.Z, { align: a, onDismissed: s, style: Q.drawer, withTopBar: !1 }, h(!0));
                },
                G = V(j),
                Q = o.default.create((e) => ({ backgroundArea: { backgroundColor: e.colors.activeBlack }, drawer: { maxWidth: "70%" }, dropdownMinWidth: { minWidth: "318px" }, wrapper: { alignSelf: "flex-start", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }, scrollableItems: { overflow: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", flexGrow: 1, flexShrink: 1 }, scrollableContentPadding: { paddingBottom: "44px" }, header: { flexGrow: 0, flexShrink: 0 }, avatarWrapper: { flexGrow: 1 }, userNames: { display: "flex", flexDirection: "column", paddingVertical: e.spaces.space12 }, menuContentWidth: { width: `calc(${e.spaces.space64} * 4.25)` } }));
        },
        206962: (e, a, l) => {
            l.d(a, { Z: () => n });
            const n = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        621416: (e, a, l) => {
            l.d(a, { m: () => i });
            l(890103);
            var n = l(202784),
                r = l(175698);
            function i(e) {
                const a = (0, r.A)();
                return [
                    !!a && !a.flags[e],
                    n.useCallback(() => {
                        a?.addFlag(e);
                    }, [a, e]),
                ];
            }
        },
        839090: (e, a, l) => {
            l.d(a, { Z: () => n });
            l(202784);
            const n = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.5"),
                        l.e("icons.25"),
                        l.e("icons.22"),
                        l.e("icons.6"),
                        l.e("icons.4"),
                        l.e("icons.9"),
                        l.e("icons.15"),
                        l.e("icons.7"),
                        l.e("icons.3"),
                        l.e("icons.20"),
                        l.e("icons.2"),
                        l.e("icons.27"),
                        l.e("icons.13"),
                        l.e("modules.common-e907d115"),
                        l.e("modules.common-e019dbda"),
                        l.e("icons.0"),
                        l.e("icons.24"),
                        l.e("icons.17"),
                        l.e("icons.12"),
                        l.e("icons.11"),
                        l.e("icons.26"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        l.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        l.e("loader.WideLayout-6107ac1a"),
                        l.e("loader.WideLayout-2e365fe7"),
                        l.e("loader.WideLayout-9f4db315"),
                    ]).then(l.bind(l, 616753)),
            });
        },
        380155: (e, a, l) => {
            l.d(a, { y: () => s });
            var n = l(111677),
                r = l.n(n),
                i = l(615656),
                t = l(51525);
            const o = r().b20a3894,
                s = { [i.ZP.AppInReadOnlyMode]: { customAction: t.w1 }, [i.ZP.TargetUserNotFound]: { toast: { text: o } }, showToast: !0 };
        },
        16222: (e, a, l) => {
            function n(e, a) {
                try {
                    return e();
                } catch (e) {
                    return a(e);
                }
            }
            l.d(a, { o: () => n });
        },
        956817: (e, a, l) => {
            l.d(a, { y: () => s });
            var n = l(734540),
                r = l(917799),
                i = l(24546),
                t = l(923488);
            const o = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                s =
                    (e) =>
                    (a, l, { api: s }) => {
                        const d = (0, r._O)(a, { request: s.withEndpoint(n.Z).switch, params: e });
                        return a((0, i.MH)()).then(() =>
                            a((0, t.nB)()).then(() =>
                                d({ actionTypes: o, context: "SWITCH" }).then(() => {
                                    window.location.assign("/home");
                                }),
                            ),
                        );
                    };
        },
        477403: (e, a, l) => {
            l.d(a, { eY: () => m, si: () => y, vC: () => u });
            l(543673), l(240753), l(128399);
            var n = l(395337),
                r = l(202784),
                i = (l(585488), l(516951)),
                t = l(952793),
                o = l(16222),
                s = l(125363),
                d = l(919022),
                c = l(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const a = (0, o.o)(() => new URL(e), i.Z);
                    if (!a || !p.includes(a.host)) return;
                    const l = a.pathname.slice(1).toLowerCase();
                    return g[l];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const p = ["twitter.com", "x.com"],
                g = { xai: "1661523610111193088" },
                _ = Object.values(g),
                f = n.Z;
            function y() {
                const e = (0, c.p)(f, {}),
                    a = (0, t.hC)("spaces_conference_enabled");
                return r.useMemo(() => {
                    const l = e.affiliations?.affiliated_account_ids_results,
                        n = (
                            l?.flatMap(({ rest_id: e, result: a }) => {
                                if ("User" !== a?.__typename) return [];
                                return [{ name: a.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => _.includes(e));
                    return a && !n.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...n] : n;
                }, [e.affiliations?.affiliated_account_ids_results, a]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu-a2dee9c7.ada36c8a.js.map
