"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-6df79b50"],
    {
        289160: (e, d, a) => {
            a.d(d, { Z: () => k });
            var r = a(301327),
                o = a(464258),
                n = a(202784),
                l = (a(585488), a(351743)),
                s = a.n(l),
                i = a(154003),
                t = a(111677),
                c = a.n(t),
                u = a(725516),
                D = a(668214),
                m = a(601576),
                h = a(137204);
            const M = (e) => {
                    const d = (0, h.Ln)(e);
                    return d?.length ? d[0].member_count : void 0;
                },
                b = (0, D.Z)()
                    .propsFromState(() => ({ memberCount: M }))
                    .propsFromActions(() => ({ addToast: m.fz, setTrustedFriendsMemberCount: h.MI })),
                p = c().e68b09b4,
                f = c().af40a8e0,
                A = c().ef4602ec,
                _ = c().a4d60c94,
                w = c().a1ba3bd8,
                y = o.Z,
                S = r.Z,
                k = b((e) => {
                    const { addToast: d, isMember: a, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: l, sliceItemID: t, trustedFriendsId: c, type: D, userId: m } = e,
                        [h, M] = s()(y),
                        [b, k] = s()(S),
                        [I, v] = n.useState(a || !1),
                        g = (0, u.z)(),
                        E = n.useCallback(() => {
                            h({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) v(!1), d("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: w } : { text: _ });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        g.scribe({ component: `trusted_friends_${D}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                v(!0);
                        }, [d, g, h, r, o, l, c, m, D]),
                        P = n.useCallback(() => {
                            b({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""], itemID: t || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) v(!0), d({ text: A });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        g.scribe({ component: `trusted_friends_${D}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                v(!1);
                        }, [d, g, r, b, o, c, m, l, t, D]);
                    return I ? n.createElement(i.ZP, { "aria-label": p, disabled: k, onPress: P, size: "small", type: "primaryOutlined" }, p) : n.createElement(i.ZP, { "aria-label": f, disabled: M, onPress: E, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, d, a) => {
            a.d(d, { Z: () => w });
            var r = a(438532),
                o = a(202784),
                n = (a(585488), a(277660)),
                l = a.n(n),
                s = a(457311),
                i = a(166852),
                t = a(459679),
                c = a(965245),
                u = a(966722),
                D = a(836640),
                m = a(535708),
                h = a(289160);
            const M = u.Z;
            function b({ membersSliceID: e, trustedFriendsId: d, user: a }) {
                const r = l()(M, a),
                    n = o.useCallback(() => o.createElement(h.Z, { isMember: r.is_trusted_friends_list_member, sliceID: e, sliceItemID: r.id, trustedFriendsId: d, type: m.C.Recommendations, userId: r.rest_id }), [e, d, r.id, r.is_trusted_friends_list_member, r.rest_id]);
                return o.createElement(D.J, { decoration: n, user: r });
            }
            const p = o.memo(b),
                f = (e) => e.id,
                A = r.Z;
            function _({ cacheKey: e, emptyStateHeader: d, emptyStateMessage: a, items: r, membersSliceID: n, onFetchNext: u, trustedFriendsId: D }) {
                const m = l()(A, r),
                    h = o.useMemo(
                        () =>
                            (0, i.Z)(
                                (0, t.Z)(m, (e) => ("User" === e.result?.__typename ? e.result : void 0)),
                                (e) => e.id,
                            ),
                        [m],
                    ),
                    M = o.useCallback((e) => o.createElement(p, { membersSliceID: n, trustedFriendsId: D, user: e }), [n, D]),
                    b = o.useCallback(() => o.createElement(s.Z, { header: d, message: a }), [d, a]);
                return o.createElement(c.Z, { cacheKey: e, identityFunction: f, items: h, noItemsRenderer: b, onNearEnd: u, renderer: M, withoutHeadroom: !0 });
            }
            const w = o.memo(_);
        },
        696705: (e, d, a) => {
            a.r(d), a.d(d, { TrustedFriendsMembers: () => A, default: () => w, errorConfig: () => f, trustedFriendsMembersQuery: () => b });
            var r = a(917874),
                o = a(202784),
                n = a(325686),
                l = (a(585488), a(731708)),
                s = a(392237),
                i = a(111677),
                t = a.n(i),
                c = a(273945),
                u = a(736063),
                D = a(127218),
                m = a(592240);
            const h = t().ec13f9cc,
                M = t().dab58e32,
                b = r.Z,
                p = "TRUSTED_FRIENDS_MEMBERS",
                f = { context: p },
                A = (e) => {
                    const { trustedFriendsId: d } = e,
                        { data: a, fetchNext: r } = (0, D.C)(b, { trustedFriendsId: d }),
                        s = a.trusted_friends_list_by_rest_id.members_slice;
                    return o.createElement(n.Z, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: _.education }, o.createElement(t().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: _.learnMore, weight: "bold", withUnderline: !0 }, t().f43112a4))), o.createElement(m.Z, { cacheKey: p, emptyStateHeader: h, emptyStateMessage: M, items: s.items_results, membersSliceID: s.__id, onFetchNext: r, trustedFriendsId: d }));
                },
                _ = s.default.create((e) => ({ education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space4 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function w(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(A, e));
            }
        },
        582313: (e, d, a) => {
            a.r(d), a.d(d, { TrustedFriendsRecommended: () => g, default: () => P, trustedFriendsRecommendedQuery: () => k });
            var r = a(319145),
                o = a(202784),
                n = a(325686),
                l = (a(585488), a(731708)),
                s = a(392237),
                i = a(111677),
                t = a.n(i),
                c = a(273945),
                u = a(736063),
                D = a(874088),
                m = a(735e3),
                h = a(339110),
                M = a(700797),
                b = a(127218),
                p = a(535708),
                f = a(289160),
                A = a(592240);
            const _ = t().fc9dd578,
                w = t().ac3fd6e2,
                y = t().eeb4d3f0,
                S = [h.my.TrustedFriendsSuggested],
                k = r.Z,
                I = "TRUSTED_FRIENDS_RECOMMENDED",
                v = { context: I },
                g = (e) => {
                    const [d, a] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: s, fetchNext: i } = (0, b.C)(k, { trustedFriendsId: r }),
                        u = s.trusted_friends_list_by_rest_id.recommended_members_slice,
                        v = (0, M.oR)(s.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        g = u?.items_results ?? (0, m.o)(),
                        P = o.useCallback(({ user: e, userId: d }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: v, trustedFriendsId: r, type: p.C.Search, userId: d }), [v, r]);
                    return o.createElement(n.Z, null, o.createElement(D.default, { alwaysOpen: !0, filter: S, isModal: !0, onQueryChange: a, placeholder: _, renderUserDecoration: P, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: h._4.TrustedFriendsSuggested, style: E.input, trustedFriendsId: r }), d ? null : o.createElement(o.Fragment, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: E.education }, o.createElement(t().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: E.learnMore, weight: "bold", withUnderline: !0 }, t().f43112a4))), o.createElement(A.Z, { cacheKey: I, emptyStateHeader: w, emptyStateMessage: y, items: g, membersSliceID: v, onFetchNext: i, trustedFriendsId: r })));
                },
                E = s.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function P(e) {
                return o.createElement(u.H, { errorConfig: v }, o.createElement(g, e));
            }
        },
        273945: (e, d, a) => {
            a.r(d), a.d(d, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => w, default: () => y });
            var r = a(202784),
                o = a(107267),
                n = a(688715),
                l = a(111677),
                s = a.n(l),
                i = a(980407),
                t = a(507651),
                c = a(293115),
                u = a(725516),
                D = a(717988),
                m = a(466441);
            const h = s().e1e5d552,
                M = s().cf44066a,
                b = s().ef8f5d90,
                p = (0, n.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                A = (0, D.p)(
                    () =>
                        Promise.all([
                            a.e("icons.23"),
                            a.e("icons.0"),
                            a.e("icons.2"),
                            a.e("icons.16"),
                            a.e("icons.19"),
                            a.e("icons.10"),
                            a.e("icons.13"),
                            a.e("icons.24"),
                            a.e("icons.7"),
                            a.e("icons.22"),
                            a.e("icons.27"),
                            a.e("icons.17"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.11"),
                            a.e("icons.26"),
                            a.e("modules.audio-6107ac1a"),
                            a.e("modules.audio-b953418a"),
                            a.e("modules.audio-7c51e6a7"),
                            a.e("modules.audio-04db59e9"),
                            a.e("modules.audio-76583d6c"),
                            a.e("modules.audio-b7a8a5fb"),
                            a.e("modules.audio-51f6e793"),
                            a.e("modules.audio-e019dbda"),
                            a.e("modules.audio-262c94d4"),
                            a.e("modules.audio-c6fe4ea4"),
                            a.e("icons.8"),
                            a.e("icons.4"),
                            a.e("icons.14"),
                            a.e("icons.21"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            a.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            a.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            a.e("bundle.UserLists-bc6ccf4c"),
                            a.e("bundle.UserLists-2a1252f0"),
                            a.e("bundle.UserLists-e019dbda"),
                            a.e("bundle.UserLists-63cb1cc4"),
                            a.e("bundle.UserLists-6df79b50"),
                        ]).then(a.bind(a, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                _ = (0, D.p)(
                    () =>
                        Promise.all([
                            a.e("icons.23"),
                            a.e("icons.0"),
                            a.e("icons.2"),
                            a.e("icons.16"),
                            a.e("icons.19"),
                            a.e("icons.10"),
                            a.e("icons.13"),
                            a.e("icons.24"),
                            a.e("icons.7"),
                            a.e("icons.22"),
                            a.e("icons.27"),
                            a.e("icons.17"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.11"),
                            a.e("icons.26"),
                            a.e("modules.audio-6107ac1a"),
                            a.e("modules.audio-b953418a"),
                            a.e("modules.audio-7c51e6a7"),
                            a.e("modules.audio-04db59e9"),
                            a.e("modules.audio-76583d6c"),
                            a.e("modules.audio-b7a8a5fb"),
                            a.e("modules.audio-51f6e793"),
                            a.e("modules.audio-e019dbda"),
                            a.e("modules.audio-262c94d4"),
                            a.e("modules.audio-c6fe4ea4"),
                            a.e("icons.8"),
                            a.e("icons.4"),
                            a.e("icons.14"),
                            a.e("icons.21"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            a.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            a.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            a.e("bundle.UserLists-bc6ccf4c"),
                            a.e("bundle.UserLists-2a1252f0"),
                            a.e("bundle.UserLists-e019dbda"),
                            a.e("bundle.UserLists-63cb1cc4"),
                            a.e("bundle.UserLists-6df79b50"),
                        ]).then(a.bind(a, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                w = (e) => {
                    const { history: d, location: a } = e,
                        n = e.match.params.trustedFriendsId,
                        l = (0, u.z)(),
                        s = r.useCallback(() => {
                            if (!n) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${n}/members`, state: a.state }, label: M, key: M },
                                { to: { pathname: `/i/circles/${n}/members/suggested`, state: a.state }, label: b, key: b },
                            ];
                            return r.createElement(t.Z, { "aria-label": h, links: e });
                        }, [a, n]);
                    return r.createElement(
                        c.nO,
                        { namespace: f },
                        r.createElement(
                            i.Z,
                            {
                                backButtonType: "close",
                                history: d,
                                onBackClick: () => {
                                    l.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), d.goBack();
                                },
                                secondaryBar: s(),
                                title: h,
                            },
                            n ? r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members` }, r.createElement(A, { trustedFriendsId: n })), r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members/suggested` }, r.createElement(_, { trustedFriendsId: n }))) : r.createElement(m.default, e),
                        ),
                    );
                },
                y = w;
        },
        535708: (e, d, a) => {
            a.d(d, { C: () => r });
            const r = Object.freeze({ Recommendations: "recommendations", Search: "search" });
        },
        235521: (e, d, a) => {
            a.r(d), a.d(d, { UserListsDiscoveryScreen: () => p, default: () => f });
            var r = a(202784),
                o = a(457311),
                n = a(111677),
                l = a.n(n),
                s = a(718e3),
                i = a(252021),
                t = a(443781),
                c = a(652904),
                u = a(810641),
                D = a(412171);
            const m = (0, a(668214).Z)().withAnalytics({ page: "list_discovery" }),
                h = l().h421e74c,
                M = l().aa62dea8,
                b = l().e5e4d3aa;
            class p extends r.Component {
                constructor(...e) {
                    super(...e), (this._renderPrimaryContent = () => r.createElement(u.Z, { module: (0, D.Z)(), renderEmptyState: this._renderEmptyState, title: h })), (this._renderEmptyState = () => r.createElement(o.Z, { header: M, message: b }));
                }
                render() {
                    const { history: e } = this.props;
                    return r.createElement(c.Z, null, r.createElement(i.Z, { backLocation: "/", history: e, primaryContent: this._renderPrimaryContent, sidebarContent: r.createElement(s.Z, { withWhoToFollow: !1 }), title: h }));
                }
            }
            p.contextType = t.rC;
            const f = m(p);
        },
        188856: (e, d, a) => {
            a.r(d), a.d(d, { UserListMembershipsScreen: () => I, default: () => v });
            var r = a(202784),
                o = a(457311),
                n = a(111677),
                l = a.n(n),
                s = a(443781),
                i = a(38293),
                t = a(652904),
                c = a(810641),
                u = a(503229),
                D = a(49128),
                m = a(24949),
                h = a(668214),
                M = a(206795),
                b = a(823885);
            const p = (e, d) => d.user.id_str,
                f = (e, d) => M.g$(e, d.user.id_str),
                A = (0, h.Z)()
                    .propsFromState(() => ({ listIds: (0, m.P1)(f, (e) => e), module: (0, m.P1)(p, (e) => (0, b.Z)(e)) }))
                    .withAnalytics({ page: "lists", section: "memberships" }),
                _ = l().b69e2f71,
                w = l().e05568cc,
                y = l().b86a098a,
                S = l().h06e09a2,
                k = l().gbaa5489;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, D.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: d } = this.context,
                                a = d === e.id_str;
                            return r.createElement(o.Z, { header: a ? y : _({ screenName: e.screen_name }), message: a ? S : w });
                        });
                }
                render() {
                    const { module: e, user: d } = this.props,
                        a = k({ screenName: d.screen_name });
                    return r.createElement(t.Z, null, r.createElement(i.Z, { title: a }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: a }));
                }
            }
            I.contextType = s.rC;
            const v = A((0, u.Z)(I));
        },
        49128: (e, d, a) => {
            a.d(d, { Z: () => l });
            var r = a(515110),
                o = a(335632),
                n = a(962741);
            const l = (e, d) => ({ ...(0, o.G)({ withMessageGaps: d?.withMessageGaps }), [n.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, d, a) => {
            a.r(d), a.d(d, { UserListsScreen: () => Se, default: () => Ie });
            a(136728);
            var r = a(202784),
                o = a(325686),
                n = a(107267),
                l = a(457311),
                s = a(108362),
                i = a(601413),
                t = a(392237),
                c = a(111677),
                u = a.n(c),
                D = a(689582),
                m = a(516951),
                h = a(399887),
                M = a(805104),
                b = a(718e3),
                p = a(774426),
                f = a(789831),
                A = a(252021),
                _ = a(443781),
                w = a(841993),
                y = a(421730),
                S = a(666670),
                k = a(655352),
                I = a(835546),
                v = a(503229),
                g = a(615027),
                E = a(189244),
                P = a(717988),
                N = a(187669),
                Z = a(38293),
                C = a(652904),
                F = a(810641),
                R = a(952793),
                U = a(293115),
                T = a(725405),
                L = a(876963),
                x = a(49128);
            const V = u().bbcaa24b,
                B = u().gbc2cf50,
                O = u().b081cdf7,
                H = u().f5978664,
                $ = (0, x.Z)({ shouldDisplayPin: !1 }),
                z = { page: "spheres_list", section: "all" };
            function G(e) {
                const d = (0, T.Z)(),
                    { user: a } = e,
                    { id_str: o, screen_name: n } = a,
                    s = (0, R.hC)("responsive_web_timeline_relay_user_lists_enabled"),
                    i = r.useMemo(() => (0, L.Z)(o, s ? "relay" : "redux"), [o, s]),
                    t = r.useCallback(() => r.createElement(l.Z, { header: O({ screenName: n }), message: H }), [n]);
                return (
                    (0, N.q)(() => {
                        d.scribe({ action: "impression", ...z });
                    }),
                    r.createElement(U.nO, { namespace: z }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(Z.Z, { title: V({ screenName: a.screen_name }) }), r.createElement(F.Z, { entryConfiguration: $, module: i, renderEmptyState: t, title: B }))))
                );
            }
            const X = r.memo(G);
            var K = a(71620),
                W = a(668214),
                q = a(919022);
            const Q = (e, d) => d.match.params.screenName || void 0,
                j = (e, d) => {
                    const a = Q(0, d);
                    if (a) return q.ZP.selectByScreenName(e, a);
                },
                J = (0, W.Z)()
                    .propsFromState(() => ({ screenName: Q, user: j }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, K.zr)("USER_LISTS"), fetchOneUserByScreenNameIfNeeded: q.ZP.fetchOneByScreenNameIfNeeded }));
            var Y = a(912021),
                ee = a(24949),
                de = a(558369),
                ae = a(652881);
            const re = (0, Y.Z)((e) => (0, ae.ZP)(e)),
                oe = (e) => !0 === (0, de.FG)(e, "responsive_web_timeline_relay_lists_management_enabled"),
                ne = (0, W.Z)()
                    .propsFromState(() => ({ module: (0, ee.P1)(oe, (e) => re(e)) }))
                    .withAnalytics({ page: "list_management" }),
                le = u().gbc2cf50,
                se = u().f5978664,
                ie = u().d1e5e328,
                te = u().c09609d8,
                ce = u().b081cdf7,
                ue = u().h243711c,
                De = u().bbcaa24b;
            class me extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyTimeline = () => {
                            const { user: e } = this.props,
                                { viewerUserId: d } = this.context,
                                a = d === e.id_str;
                            return r.createElement(l.Z, { buttonLink: a ? "/i/lists/create" : void 0, buttonText: a ? te : void 0, header: a ? ue : ce({ screenName: e.screen_name }), message: a ? ie : se });
                        }),
                        (this._getEntryConfiguration = (0, Y.Z)((e) => (0, x.Z)({}, { withMessageGaps: !1 })));
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { viewerUserId: e } = this.context,
                        { module: d, user: a } = this.props,
                        o = e === a.id_str,
                        n = this._getEntryConfiguration(o);
                    return r.createElement(C.Z, null, r.createElement(Z.Z, { title: De({ screenName: a.screen_name }) }), r.createElement(F.Z, { entryConfiguration: n, module: d, renderEmptyState: this._renderEmptyTimeline, title: le }));
                }
            }
            me.contextType = _.rC;
            const he = ne(me),
                Me = u().h63a5c3c,
                be = u().d2004da3,
                pe = u().b0041756,
                fe = u().a64512a4,
                Ae = u().i0bcc456,
                _e = u().d8315ca0,
                we = u().e74be9ac,
                ye = (0, P.p)(
                    () =>
                        Promise.all([
                            a.e("icons.23"),
                            a.e("icons.0"),
                            a.e("icons.2"),
                            a.e("icons.16"),
                            a.e("icons.19"),
                            a.e("icons.10"),
                            a.e("icons.13"),
                            a.e("icons.24"),
                            a.e("icons.7"),
                            a.e("icons.22"),
                            a.e("icons.27"),
                            a.e("icons.17"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.11"),
                            a.e("icons.26"),
                            a.e("modules.audio-6107ac1a"),
                            a.e("modules.audio-b953418a"),
                            a.e("modules.audio-7c51e6a7"),
                            a.e("modules.audio-04db59e9"),
                            a.e("modules.audio-76583d6c"),
                            a.e("modules.audio-b7a8a5fb"),
                            a.e("modules.audio-51f6e793"),
                            a.e("modules.audio-e019dbda"),
                            a.e("modules.audio-262c94d4"),
                            a.e("modules.audio-c6fe4ea4"),
                            a.e("icons.8"),
                            a.e("icons.4"),
                            a.e("icons.14"),
                            a.e("icons.21"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            a.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            a.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            a.e("bundle.UserLists-bc6ccf4c"),
                            a.e("bundle.UserLists-2a1252f0"),
                            a.e("bundle.UserLists-e019dbda"),
                            a.e("bundle.UserLists-63cb1cc4"),
                            a.e("bundle.UserLists-6df79b50"),
                        ]).then(a.bind(a, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class Se extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMembershipsLabel = () => (this._isViewerUserView() ? _e : we)),
                        (this._getOverflowMenuItems = () => {
                            const { user: e } = this.props,
                                d = [];
                            return e && d.push(this._getViewMembershipsAction(e)), d;
                        }),
                        (this._getViewMembershipsAction = (e) => ({ text: this._getMembershipsLabel(), Icon: D.default, onClick: m.Z, link: { pathname: `/${e.screen_name}/lists/memberships` } })),
                        (this._handleFetchUser = (e) => {
                            const { createLocalApiErrorHandler: d, fetchOneUserByScreenNameIfNeeded: a, screenName: r } = e || this.props;
                            r && a(r).catch(d(S.F));
                        }),
                        (this._renderActionMenu = (e) => {
                            const d = this._getOverflowMenuItems();
                            return r.createElement(p.default, { actionItems: d, onClose: e });
                        }),
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(M.Z, { "aria-label": Me, renderMenu: this._renderActionMenu, style: ke.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(h.Z, null) : null,
                                d = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: ke.rightControl }, (0, k.ZP)() ? e : null, d);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: d } = this.props,
                                a = this._isOwnManagementView() ? r.createElement(w.Z, { history: e, page: "list_management" }) : void 0;
                            if (d) {
                                return d?.protected && !d?.following && !this._isViewerUserView() ? r.createElement(l.Z, { header: be({ screenName: d.screen_name }), message: Ae }) : r.createElement(f.Z, { component: s.Z, fab: a }, r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: `/${E.qX}/lists` }, this._isViewerUserView() ? r.createElement(he, { user: d }) : r.createElement(X, { user: d })), r.createElement(n.Route, { exact: !0, path: `/${E.qX}/lists/memberships` }, r.createElement(ye, { user: d }))));
                            }
                            return null;
                        });
                }
                componentDidMount() {
                    this._handleFetchUser();
                }
                _isViewerUserView() {
                    const { user: e } = this.props,
                        { viewerUserId: d } = this.context;
                    return e?.id_str === d;
                }
                _isMembershipsView() {
                    const { location: e } = this.props;
                    return e.pathname.indexOf("/lists/memberships") >= 0;
                }
                _isOwnManagementView() {
                    return this._isViewerUserView() && !this._isMembershipsView();
                }
                render() {
                    const { history: e, screenName: d, user: a } = this.props,
                        o = !a || (a && (0, I.n5)({ isOwnProfile: this._isViewerUserView(), isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: a })),
                        n = this._isOwnManagementView(),
                        l = this._isMembershipsView() ? this._getMembershipsLabel() : pe;
                    return d ? (o ? r.createElement(A.Z, { backLocation: "/", customSearchBox: n ? r.createElement(y.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(b.Z, null), subtitle: n ? void 0 : r.createElement(i.Z, { screenName: d }), title: l, withSearchBox: n }) : r.createElement(g.Z, { to: `/${d}` })) : null;
                }
            }
            Se.contextType = _.rC;
            const ke = t.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                Ie = J((0, v.Z)(Se));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-6df79b50.7293b2fa.js.map
