"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-6df79b50"],
    {
        289160: (e, a, d) => {
            d.d(a, { Z: () => I });
            var r = d(301327),
                o = d(464258),
                n = d(202784),
                l = (d(585488), d(351743)),
                s = d.n(l),
                i = d(154003),
                t = d(111677),
                c = d.n(t),
                u = d(725516),
                D = d(668214),
                m = d(601576),
                h = d(137204);
            const M = (e) => {
                    const a = (0, h.Ln)(e);
                    return a?.length ? a[0].member_count : void 0;
                },
                b = (0, D.Z)()
                    .propsFromState(() => ({ memberCount: M }))
                    .propsFromActions(() => ({ addToast: m.fz, setTrustedFriendsMemberCount: h.MI })),
                p = c().e68b09b4,
                f = c().af40a8e0,
                A = c().ef4602ec,
                y = c().a4d60c94,
                w = c().a1ba3bd8,
                _ = o.Z,
                S = r.Z,
                I = b((e) => {
                    const { addToast: a, isMember: d, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: l, sliceItemID: t, trustedFriendsId: c, type: D, userId: m } = e,
                        [h, M] = s()(_),
                        [b, I] = s()(S),
                        [k, g] = n.useState(d || !1),
                        P = (0, u.z)(),
                        v = n.useCallback(() => {
                            h({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) g(!1), a("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: w } : { text: y });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        P.scribe({ component: `trusted_friends_${D}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!0);
                        }, [a, P, h, r, o, l, c, m, D]),
                        E = n.useCallback(() => {
                            b({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""], itemID: t || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) g(!0), a({ text: A });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        P.scribe({ component: `trusted_friends_${D}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!1);
                        }, [a, P, r, b, o, c, m, l, t, D]);
                    return k ? n.createElement(i.ZP, { "aria-label": p, disabled: I, onPress: E, size: "small", type: "primaryOutlined" }, p) : n.createElement(i.ZP, { "aria-label": f, disabled: M, onPress: v, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, a, d) => {
            d.d(a, { Z: () => w });
            var r = d(438532),
                o = d(202784),
                n = (d(585488), d(277660)),
                l = d.n(n),
                s = d(457311),
                i = d(166852),
                t = d(459679),
                c = d(965245),
                u = d(966722),
                D = d(836640),
                m = d(535708),
                h = d(289160);
            const M = u.Z;
            function b({ membersSliceID: e, trustedFriendsId: a, user: d }) {
                const r = l()(M, d),
                    n = o.useCallback(() => o.createElement(h.Z, { isMember: r.is_trusted_friends_list_member, sliceID: e, sliceItemID: r.id, trustedFriendsId: a, type: m.C.Recommendations, userId: r.rest_id }), [e, a, r.id, r.is_trusted_friends_list_member, r.rest_id]);
                return o.createElement(D.J, { decoration: n, user: r });
            }
            const p = o.memo(b),
                f = (e) => e.id,
                A = r.Z;
            function y({ cacheKey: e, emptyStateHeader: a, emptyStateMessage: d, items: r, membersSliceID: n, onFetchNext: u, trustedFriendsId: D }) {
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
                    b = o.useCallback(() => o.createElement(s.Z, { header: a, message: d }), [a, d]);
                return o.createElement(c.Z, { cacheKey: e, identityFunction: f, items: h, noItemsRenderer: b, onNearEnd: u, renderer: M, withoutHeadroom: !0 });
            }
            const w = o.memo(y);
        },
        696705: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsMembers: () => A, default: () => w, errorConfig: () => f, trustedFriendsMembersQuery: () => b });
            var r = d(917874),
                o = d(202784),
                n = d(325686),
                l = (d(585488), d(731708)),
                s = d(392237),
                i = d(111677),
                t = d.n(i),
                c = d(273945),
                u = d(736063),
                D = d(127218),
                m = d(592240);
            const h = t().ec13f9cc,
                M = t().dab58e32,
                b = r.Z,
                p = "TRUSTED_FRIENDS_MEMBERS",
                f = { context: p },
                A = (e) => {
                    const { trustedFriendsId: a } = e,
                        { data: d, fetchNext: r } = (0, D.C)(b, { trustedFriendsId: a }),
                        s = d.trusted_friends_list_by_rest_id.members_slice;
                    return o.createElement(n.Z, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: y.education }, o.createElement(t().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: y.learnMore, weight: "bold", withUnderline: !0 }, t().f43112a4))), o.createElement(m.Z, { cacheKey: p, emptyStateHeader: h, emptyStateMessage: M, items: s.items_results, membersSliceID: s.__id, onFetchNext: r, trustedFriendsId: a }));
                },
                y = s.default.create((e) => ({ education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space4 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function w(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(A, e));
            }
        },
        582313: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsRecommended: () => P, default: () => E, trustedFriendsRecommendedQuery: () => I });
            var r = d(319145),
                o = d(202784),
                n = d(325686),
                l = (d(585488), d(731708)),
                s = d(392237),
                i = d(111677),
                t = d.n(i),
                c = d(273945),
                u = d(736063),
                D = d(874088),
                m = d(735e3),
                h = d(339110),
                M = d(700797),
                b = d(127218),
                p = d(535708),
                f = d(289160),
                A = d(592240);
            const y = t().fc9dd578,
                w = t().ac3fd6e2,
                _ = t().eeb4d3f0,
                S = [h.my.TrustedFriendsSuggested],
                I = r.Z,
                k = "TRUSTED_FRIENDS_RECOMMENDED",
                g = { context: k },
                P = (e) => {
                    const [a, d] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: s, fetchNext: i } = (0, b.C)(I, { trustedFriendsId: r }),
                        u = s.trusted_friends_list_by_rest_id.recommended_members_slice,
                        g = (0, M.oR)(s.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        P = u?.items_results ?? (0, m.o)(),
                        E = o.useCallback(({ user: e, userId: a }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: g, trustedFriendsId: r, type: p.C.Search, userId: a }), [g, r]);
                    return o.createElement(n.Z, null, o.createElement(D.default, { alwaysOpen: !0, filter: S, isModal: !0, onQueryChange: d, placeholder: y, renderUserDecoration: E, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: h._4.TrustedFriendsSuggested, style: v.input, trustedFriendsId: r }), a ? null : o.createElement(o.Fragment, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: v.education }, o.createElement(t().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: v.learnMore, weight: "bold", withUnderline: !0 }, t().f43112a4))), o.createElement(A.Z, { cacheKey: k, emptyStateHeader: w, emptyStateMessage: _, items: P, membersSliceID: g, onFetchNext: i, trustedFriendsId: r })));
                },
                v = s.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function E(e) {
                return o.createElement(u.H, { errorConfig: g }, o.createElement(P, e));
            }
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => w, default: () => _ });
            var r = d(202784),
                o = d(107267),
                n = d(688715),
                l = d(111677),
                s = d.n(l),
                i = d(980407),
                t = d(507651),
                c = d(293115),
                u = d(725516),
                D = d(717988),
                m = d(466441);
            const h = s().e1e5d552,
                M = s().cf44066a,
                b = s().ef8f5d90,
                p = (0, n.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                A = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                y = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                w = (e) => {
                    const { history: a, location: d } = e,
                        n = e.match.params.trustedFriendsId,
                        l = (0, u.z)(),
                        s = r.useCallback(() => {
                            if (!n) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${n}/members`, state: d.state }, label: M, key: M },
                                { to: { pathname: `/i/circles/${n}/members/suggested`, state: d.state }, label: b, key: b },
                            ];
                            return r.createElement(t.Z, { "aria-label": h, links: e });
                        }, [d, n]);
                    return r.createElement(
                        c.nO,
                        { namespace: f },
                        r.createElement(
                            i.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    l.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: s(),
                                title: h,
                            },
                            n ? r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members` }, r.createElement(A, { trustedFriendsId: n })), r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members/suggested` }, r.createElement(y, { trustedFriendsId: n }))) : r.createElement(m.default, e),
                        ),
                    );
                },
                _ = w;
        },
        535708: (e, a, d) => {
            d.d(a, { C: () => r });
            const r = Object.freeze({ Recommendations: "recommendations", Search: "search" });
        },
        235521: (e, a, d) => {
            d.r(a), d.d(a, { UserListsDiscoveryScreen: () => p, default: () => f });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(718e3),
                i = d(252021),
                t = d(443781),
                c = d(652904),
                u = d(810641),
                D = d(412171);
            const m = (0, d(668214).Z)().withAnalytics({ page: "list_discovery" }),
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
        188856: (e, a, d) => {
            d.r(a), d.d(a, { UserListMembershipsScreen: () => k, default: () => g });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(443781),
                i = d(38293),
                t = d(652904),
                c = d(810641),
                u = d(503229),
                D = d(49128),
                m = d(24949),
                h = d(668214),
                M = d(206795),
                b = d(823885);
            const p = (e, a) => a.user.id_str,
                f = (e, a) => M.g$(e, a.user.id_str),
                A = (0, h.Z)()
                    .propsFromState(() => ({ listIds: (0, m.P1)(f, (e) => e), module: (0, m.P1)(p, (e) => (0, b.Z)(e)) }))
                    .withAnalytics({ page: "lists", section: "memberships" }),
                y = l().b69e2f71,
                w = l().e05568cc,
                _ = l().b86a098a,
                S = l().h06e09a2,
                I = l().gbaa5489;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, D.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(o.Z, { header: d ? _ : y({ screenName: e.screen_name }), message: d ? S : w });
                        });
                }
                render() {
                    const { module: e, user: a } = this.props,
                        d = I({ screenName: a.screen_name });
                    return r.createElement(t.Z, null, r.createElement(i.Z, { title: d }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: d }));
                }
            }
            k.contextType = s.rC;
            const g = A((0, u.Z)(k));
        },
        49128: (e, a, d) => {
            d.d(a, { Z: () => l });
            var r = d(515110),
                o = d(335632),
                n = d(962741);
            const l = (e, a) => ({ ...(0, o.G)({ withMessageGaps: a?.withMessageGaps }), [n.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, a, d) => {
            d.r(a), d.d(a, { UserListsScreen: () => Se, default: () => ke });
            d(136728);
            var r = d(202784),
                o = d(325686),
                n = d(107267),
                l = d(457311),
                s = d(108362),
                i = d(601413),
                t = d(392237),
                c = d(111677),
                u = d.n(c),
                D = d(689582),
                m = d(516951),
                h = d(399887),
                M = d(805104),
                b = d(718e3),
                p = d(774426),
                f = d(789831),
                A = d(252021),
                y = d(443781),
                w = d(841993),
                _ = d(421730),
                S = d(666670),
                I = d(655352),
                k = d(835546),
                g = d(503229),
                P = d(615027),
                v = d(189244),
                E = d(717988),
                N = d(187669),
                Z = d(38293),
                C = d(652904),
                F = d(810641),
                R = d(952793),
                U = d(293115),
                T = d(725405),
                L = d(876963),
                x = d(49128);
            const V = u().bbcaa24b,
                O = u().gbc2cf50,
                B = u().b081cdf7,
                H = u().f5978664,
                $ = (0, x.Z)({ shouldDisplayPin: !1 }),
                z = { page: "spheres_list", section: "all" };
            function G(e) {
                const a = (0, T.Z)(),
                    { user: d } = e,
                    { id_str: o, screen_name: n } = d,
                    s = (0, R.hC)("responsive_web_timeline_relay_user_lists_enabled"),
                    i = r.useMemo(() => (0, L.Z)(o, s ? "relay" : "redux"), [o, s]),
                    t = r.useCallback(() => r.createElement(l.Z, { header: B({ screenName: n }), message: H }), [n]);
                return (
                    (0, N.q)(() => {
                        a.scribe({ action: "impression", ...z });
                    }),
                    r.createElement(U.nO, { namespace: z }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(Z.Z, { title: V({ screenName: d.screen_name }) }), r.createElement(F.Z, { entryConfiguration: $, module: i, renderEmptyState: t, title: O }))))
                );
            }
            const X = r.memo(G);
            var K = d(71620),
                W = d(668214),
                q = d(919022);
            const Q = (e, a) => a.match.params.screenName || void 0,
                j = (e, a) => {
                    const d = Q(0, a);
                    if (d) return q.ZP.selectByScreenName(e, d);
                },
                J = (0, W.Z)()
                    .propsFromState(() => ({ screenName: Q, user: j }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, K.zr)("USER_LISTS"), fetchOneUserByScreenNameIfNeeded: q.ZP.fetchOneByScreenNameIfNeeded }));
            var Y = d(912021),
                ee = d(24949),
                ae = d(558369),
                de = d(652881);
            const re = (0, Y.Z)((e) => (0, de.ZP)(e)),
                oe = (e) => !0 === (0, ae.FG)(e, "responsive_web_timeline_relay_lists_management_enabled"),
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
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(l.Z, { buttonLink: d ? "/i/lists/create" : void 0, buttonText: d ? te : void 0, header: d ? ue : ce({ screenName: e.screen_name }), message: d ? ie : se });
                        }),
                        (this._getEntryConfiguration = (0, Y.Z)((e) => (0, x.Z)({}, { withMessageGaps: !1 })));
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { viewerUserId: e } = this.context,
                        { module: a, user: d } = this.props,
                        o = e === d.id_str,
                        n = this._getEntryConfiguration(o);
                    return r.createElement(C.Z, null, r.createElement(Z.Z, { title: De({ screenName: d.screen_name }) }), r.createElement(F.Z, { entryConfiguration: n, module: a, renderEmptyState: this._renderEmptyTimeline, title: le }));
                }
            }
            me.contextType = y.rC;
            const he = ne(me),
                Me = u().h63a5c3c,
                be = u().d2004da3,
                pe = u().b0041756,
                fe = u().a64512a4,
                Ae = u().i0bcc456,
                ye = u().d8315ca0,
                we = u().e74be9ac,
                _e = (0, E.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class Se extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMembershipsLabel = () => (this._isViewerUserView() ? ye : we)),
                        (this._getOverflowMenuItems = () => {
                            const { user: e } = this.props,
                                a = [];
                            return e && a.push(this._getViewMembershipsAction(e)), a;
                        }),
                        (this._getViewMembershipsAction = (e) => ({ text: this._getMembershipsLabel(), Icon: D.default, onClick: m.Z, link: { pathname: `/${e.screen_name}/lists/memberships` } })),
                        (this._handleFetchUser = (e) => {
                            const { createLocalApiErrorHandler: a, fetchOneUserByScreenNameIfNeeded: d, screenName: r } = e || this.props;
                            r && d(r).catch(a(S.F));
                        }),
                        (this._renderActionMenu = (e) => {
                            const a = this._getOverflowMenuItems();
                            return r.createElement(p.default, { actionItems: a, onClose: e });
                        }),
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(M.Z, { "aria-label": Me, renderMenu: this._renderActionMenu, style: Ie.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(h.Z, null) : null,
                                a = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: Ie.rightControl }, (0, I.ZP)() ? e : null, a);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: a } = this.props,
                                d = this._isOwnManagementView() ? r.createElement(w.Z, { history: e, page: "list_management" }) : void 0;
                            if (a) {
                                return a?.protected && !a?.following && !this._isViewerUserView() ? r.createElement(l.Z, { header: be({ screenName: a.screen_name }), message: Ae }) : r.createElement(f.Z, { component: s.Z, fab: d }, r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: `/${v.qX}/lists` }, this._isViewerUserView() ? r.createElement(he, { user: a }) : r.createElement(X, { user: a })), r.createElement(n.Route, { exact: !0, path: `/${v.qX}/lists/memberships` }, r.createElement(_e, { user: a }))));
                            }
                            return null;
                        });
                }
                componentDidMount() {
                    this._handleFetchUser();
                }
                _isViewerUserView() {
                    const { user: e } = this.props,
                        { viewerUserId: a } = this.context;
                    return e?.id_str === a;
                }
                _isMembershipsView() {
                    const { location: e } = this.props;
                    return e.pathname.indexOf("/lists/memberships") >= 0;
                }
                _isOwnManagementView() {
                    return this._isViewerUserView() && !this._isMembershipsView();
                }
                render() {
                    const { history: e, screenName: a, user: d } = this.props,
                        o = !d || (d && (0, k.n5)({ isOwnProfile: this._isViewerUserView(), user: d })),
                        n = this._isOwnManagementView(),
                        l = this._isMembershipsView() ? this._getMembershipsLabel() : pe;
                    return a ? (o ? r.createElement(A.Z, { backLocation: "/", customSearchBox: n ? r.createElement(_.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(b.Z, null), subtitle: n ? void 0 : r.createElement(i.Z, { screenName: a }), title: l, withSearchBox: n }) : r.createElement(P.Z, { to: `/${a}` })) : null;
                }
            }
            Se.contextType = y.rC;
            const Ie = t.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                ke = J((0, g.Z)(Se));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-6df79b50.5fb0d15a.js.map
