"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        110512: (e, l, a) => {
            a.d(l, { ZP: () => B, V7: () => O });
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
                h = a(325686),
                k = (a(585488), a(712696)),
                v = a.n(k),
                _ = a(107267),
                b = a(731708),
                F = a(661810),
                w = a(642153),
                f = a(392237),
                K = a(111677),
                L = a.n(K),
                S = a(899667),
                T = a(487552),
                E = a(516951),
                U = a(621416),
                C = a(125363),
                Z = a(175856),
                A = a(390387),
                D = a(114084),
                I = a(736063);
            const R = (0, a(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: A.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                H = m,
                M = L().daffabde,
                x = L().eccbfa26,
                q = L().a1b7a904,
                z = { context: "DelegateGroups" },
                P = ({ activeUserId: e, delegateUser: l, isUpdatedManageAccounts: a, onDelegateSwitch: n, renderUserDecoration: t, setDelegateUser: i }) => {
                    const r = (0, C.I0)(),
                        s = (0, _.useHistory)(),
                        [o] = (0, U.m)(Z.s7),
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
                        r(A.po(g.length));
                    }, [g, r]);
                    const k = y.useCallback(
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
                              a ? y.createElement(h.Z, { style: W.updatedDelegateAccountsLabel }, y.createElement(b.ZP, { color: "gray700", weight: "bold" }, x)) : y.createElement(h.Z, { onClick: m, style: W.delegateAccountsLabel }, y.createElement(b.ZP, { color: "gray700", weight: "bold" }, p ? M : x), !p && (d ? y.createElement(S.default, { style: W.IconChevronUp }) : y.createElement(T.default, { style: W.IconChevronDown }))),
                              a || d || p
                                  ? g.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            i = n === l?.userId,
                                            r = t ? t({ withBadges: !1, isActiveUser: i }) : void 0,
                                            s = k({ userId: n });
                                        return y.createElement(y.Fragment, { key: e.rest_id }, y.createElement(D.Z, { "aria-label": q, badgeContext: "account", decoration: r, displayMode: "UserCompact", onCellClick: i ? E.Z : s, user: e, withInteractiveStyling: !i, withLink: !1 }), a && y.createElement(F.Z, { style: W.accountDivider }));
                                    })
                                  : y.createElement(h.Z, { style: W.facePileContainer }, y.createElement(w.Z, { userAvatarSize: "large", userAvatarUrls: g.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function O() {
                const e = v()(H, {}),
                    l = (0, C.v9)(A.x0);
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
            const W = f.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                B = R((e) => y.createElement(I.H, { errorConfig: z }, y.createElement(P, e)));
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
        58399: (e, l, a) => {
            a.r(l), a.d(l, { default: () => d });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(717683),
                s = a(347101);
            const o = (e = {}) => {
                const l = n.useContext(r.Z),
                    { direction: a } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, l && s.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
        246492: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        264171: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: l });
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
        262009: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        452693: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                i = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~bundle.MultiAccount~bundle.JobSearch.8b18513a.js.map
