"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-6df79b50"],
    {
        289160: (e, a, d) => {
            d.d(a, { Z: () => k });
            var r = d(301327),
                o = d(464258),
                l = d(202784),
                n = (d(585488), d(351743)),
                s = d.n(n),
                t = d(154003),
                i = d(111677),
                c = d.n(i),
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
                w = c().ef4602ec,
                _ = c().a4d60c94,
                A = c().a1ba3bd8,
                y = o.Z,
                S = r.Z,
                k = b((e) => {
                    const { addToast: a, isMember: d, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: n, sliceItemID: i, trustedFriendsId: c, type: D, userId: m } = e,
                        [h, M] = s()(y),
                        [b, k] = s()(S),
                        [I, g] = l.useState(d || !1),
                        v = (0, u.z)(),
                        E = l.useCallback(() => {
                            h({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) g(!1), a("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: A } : { text: _ });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        v.scribe({ component: `trusted_friends_${D}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!0);
                        }, [a, v, h, r, o, n, c, m, D]),
                        P = l.useCallback(() => {
                            b({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""], itemID: i || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) g(!0), a({ text: w });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        v.scribe({ component: `trusted_friends_${D}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!1);
                        }, [a, v, r, b, o, c, m, n, i, D]);
                    return I ? l.createElement(t.ZP, { "aria-label": p, disabled: k, onPress: P, size: "small", type: "primaryOutlined" }, p) : l.createElement(t.ZP, { "aria-label": f, disabled: M, onPress: E, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, a, d) => {
            d.d(a, { Z: () => A });
            var r = d(438532),
                o = d(202784),
                l = (d(585488), d(277660)),
                n = d.n(l),
                s = d(457311),
                t = d(166852),
                i = d(459679),
                c = d(965245),
                u = d(966722),
                D = d(836640),
                m = d(535708),
                h = d(289160);
            const M = u.Z;
            function b({ membersSliceID: e, trustedFriendsId: a, user: d }) {
                const r = n()(M, d),
                    l = o.useCallback(() => o.createElement(h.Z, { isMember: r.is_trusted_friends_list_member, sliceID: e, sliceItemID: r.id, trustedFriendsId: a, type: m.C.Recommendations, userId: r.rest_id }), [e, a, r.id, r.is_trusted_friends_list_member, r.rest_id]);
                return o.createElement(D.J, { decoration: l, user: r });
            }
            const p = o.memo(b),
                f = (e) => e.id,
                w = r.Z;
            function _({ cacheKey: e, emptyStateHeader: a, emptyStateMessage: d, items: r, membersSliceID: l, onFetchNext: u, trustedFriendsId: D }) {
                const m = n()(w, r),
                    h = o.useMemo(
                        () =>
                            (0, t.Z)(
                                (0, i.Z)(m, (e) => ("User" === e.result?.__typename ? e.result : void 0)),
                                (e) => e.id,
                            ),
                        [m],
                    ),
                    M = o.useCallback((e) => o.createElement(p, { membersSliceID: l, trustedFriendsId: D, user: e }), [l, D]),
                    b = o.useCallback(() => o.createElement(s.Z, { header: a, message: d }), [a, d]);
                return o.createElement(c.Z, { cacheKey: e, identityFunction: f, items: h, noItemsRenderer: b, onNearEnd: u, renderer: M, withoutHeadroom: !0 });
            }
            const A = o.memo(_);
        },
        696705: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsMembers: () => w, default: () => A, errorConfig: () => f, trustedFriendsMembersQuery: () => b });
            var r = d(917874),
                o = d(202784),
                l = d(325686),
                n = (d(585488), d(731708)),
                s = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(273945),
                u = d(736063),
                D = d(127218),
                m = d(592240);
            const h = i().ec13f9cc,
                M = i().dab58e32,
                b = r.Z,
                p = "TRUSTED_FRIENDS_MEMBERS",
                f = { context: p },
                w = (e) => {
                    const { trustedFriendsId: a } = e,
                        { data: d, fetchNext: r } = (0, D.C)(b, { trustedFriendsId: a }),
                        s = d.trusted_friends_list_by_rest_id.members_slice;
                    return o.createElement(l.Z, null, o.createElement(n.ZP, { color: "gray700", size: "body", style: _.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(n.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: _.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(m.Z, { cacheKey: p, emptyStateHeader: h, emptyStateMessage: M, items: s.items_results, membersSliceID: s.__id, onFetchNext: r, trustedFriendsId: a }));
                },
                _ = s.default.create((e) => ({ education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space4 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function A(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(w, e));
            }
        },
        582313: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsRecommended: () => v, default: () => P, trustedFriendsRecommendedQuery: () => k });
            var r = d(319145),
                o = d(202784),
                l = d(325686),
                n = (d(585488), d(731708)),
                s = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(273945),
                u = d(736063),
                D = d(874088),
                m = d(735e3),
                h = d(339110),
                M = d(700797),
                b = d(127218),
                p = d(535708),
                f = d(289160),
                w = d(592240);
            const _ = i().fc9dd578,
                A = i().ac3fd6e2,
                y = i().eeb4d3f0,
                S = [h.my.TrustedFriendsSuggested],
                k = r.Z,
                I = "TRUSTED_FRIENDS_RECOMMENDED",
                g = { context: I },
                v = (e) => {
                    const [a, d] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: s, fetchNext: t } = (0, b.C)(k, { trustedFriendsId: r }),
                        u = s.trusted_friends_list_by_rest_id.recommended_members_slice,
                        g = (0, M.oR)(s.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        v = u?.items_results ?? (0, m.o)(),
                        P = o.useCallback(({ user: e, userId: a }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: g, trustedFriendsId: r, type: p.C.Search, userId: a }), [g, r]);
                    return o.createElement(l.Z, null, o.createElement(D.default, { alwaysOpen: !0, filter: S, isModal: !0, onQueryChange: d, placeholder: _, renderUserDecoration: P, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: h._4.TrustedFriendsSuggested, style: E.input, trustedFriendsId: r }), a ? null : o.createElement(o.Fragment, null, o.createElement(n.ZP, { color: "gray700", size: "body", style: E.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(n.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: E.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(w.Z, { cacheKey: I, emptyStateHeader: A, emptyStateMessage: y, items: v, membersSliceID: g, onFetchNext: t, trustedFriendsId: r })));
                },
                E = s.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function P(e) {
                return o.createElement(u.H, { errorConfig: g }, o.createElement(v, e));
            }
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => A, default: () => y });
            var r = d(202784),
                o = d(107267),
                l = d(688715),
                n = d(111677),
                s = d.n(n),
                t = d(980407),
                i = d(507651),
                c = d(293115),
                u = d(725516),
                D = d(717988),
                m = d(466441);
            const h = s().e1e5d552,
                M = s().cf44066a,
                b = s().ef8f5d90,
                p = (0, l.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                w = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.15"),
                            d.e("icons.7"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.12"),
                            d.e("icons.22"),
                            d.e("icons.2"),
                            d.e("icons.18"),
                            d.e("icons.6"),
                            d.e("icons.1"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.14"),
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
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.28"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
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
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                _ = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.15"),
                            d.e("icons.7"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.12"),
                            d.e("icons.22"),
                            d.e("icons.2"),
                            d.e("icons.18"),
                            d.e("icons.6"),
                            d.e("icons.1"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.14"),
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
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.28"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
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
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                A = (e) => {
                    const { history: a, location: d } = e,
                        l = e.match.params.trustedFriendsId,
                        n = (0, u.z)(),
                        s = r.useCallback(() => {
                            if (!l) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${l}/members`, state: d.state }, label: M, key: M },
                                { to: { pathname: `/i/circles/${l}/members/suggested`, state: d.state }, label: b, key: b },
                            ];
                            return r.createElement(i.Z, { "aria-label": h, links: e });
                        }, [d, l]);
                    return r.createElement(
                        c.nO,
                        { namespace: f },
                        r.createElement(
                            t.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    n.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: s(),
                                title: h,
                            },
                            l ? r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: `/i/circles/${l}/members` }, r.createElement(w, { trustedFriendsId: l })), r.createElement(o.Route, { exact: !0, path: `/i/circles/${l}/members/suggested` }, r.createElement(_, { trustedFriendsId: l }))) : r.createElement(m.default, e),
                        ),
                    );
                },
                y = A;
        },
        535708: (e, a, d) => {
            d.d(a, { C: () => r });
            const r = Object.freeze({ Recommendations: "recommendations", Search: "search" });
        },
        235521: (e, a, d) => {
            d.r(a), d.d(a, { UserListsDiscoveryScreen: () => p, default: () => f });
            var r = d(202784),
                o = d(457311),
                l = d(111677),
                n = d.n(l),
                s = d(718e3),
                t = d(252021),
                i = d(443781),
                c = d(652904),
                u = d(810641),
                D = d(412171);
            const m = (0, d(668214).Z)().withAnalytics({ page: "list_discovery" }),
                h = n().h421e74c,
                M = n().aa62dea8,
                b = n().e5e4d3aa;
            class p extends r.Component {
                constructor(...e) {
                    super(...e), (this._renderPrimaryContent = () => r.createElement(u.Z, { module: (0, D.Z)(), renderEmptyState: this._renderEmptyState, title: h })), (this._renderEmptyState = () => r.createElement(o.Z, { header: M, message: b }));
                }
                render() {
                    const { history: e } = this.props;
                    return r.createElement(c.Z, null, r.createElement(t.Z, { backLocation: "/", history: e, primaryContent: this._renderPrimaryContent, sidebarContent: r.createElement(s.Z, { withWhoToFollow: !1 }), title: h }));
                }
            }
            p.contextType = i.rC;
            const f = m(p);
        },
        188856: (e, a, d) => {
            d.r(a), d.d(a, { UserListMembershipsScreen: () => I, default: () => g });
            var r = d(202784),
                o = d(457311),
                l = d(111677),
                n = d.n(l),
                s = d(443781),
                t = d(38293),
                i = d(652904),
                c = d(810641),
                u = d(503229),
                D = d(49128),
                m = d(24949),
                h = d(668214),
                M = d(206795),
                b = d(823885);
            const p = (e, a) => a.user.id_str,
                f = (e, a) => M.g$(e, a.user.id_str),
                w = (0, h.Z)()
                    .propsFromState(() => ({ listIds: (0, m.P1)(f, (e) => e), module: (0, m.P1)(p, (e) => (0, b.Z)(e)) }))
                    .withAnalytics({ page: "lists", section: "memberships" }),
                _ = n().b69e2f71,
                A = n().e05568cc,
                y = n().b86a098a,
                S = n().h06e09a2,
                k = n().gbaa5489;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, D.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(o.Z, { header: d ? y : _({ screenName: e.screen_name }), message: d ? S : A });
                        });
                }
                render() {
                    const { module: e, user: a } = this.props,
                        d = k({ screenName: a.screen_name });
                    return r.createElement(i.Z, null, r.createElement(t.Z, { title: d }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: d }));
                }
            }
            I.contextType = s.rC;
            const g = w((0, u.Z)(I));
        },
        49128: (e, a, d) => {
            d.d(a, { Z: () => n });
            var r = d(515110),
                o = d(335632),
                l = d(962741);
            const n = (e, a) => ({ ...(0, o.G)({ withMessageGaps: a?.withMessageGaps }), [l.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, a, d) => {
            d.r(a), d.d(a, { UserListsScreen: () => Se, default: () => Ie });
            d(136728);
            var r = d(202784),
                o = d(325686),
                l = d(107267),
                n = d(457311),
                s = d(108362),
                t = d(601413),
                i = d(392237),
                c = d(111677),
                u = d.n(c),
                D = d(689582),
                m = d(516951),
                h = d(399887),
                M = d(805104),
                b = d(718e3),
                p = d(774426),
                f = d(789831),
                w = d(252021),
                _ = d(443781),
                A = d(841993),
                y = d(421730),
                S = d(666670),
                k = d(655352),
                I = d(835546),
                g = d(503229),
                v = d(615027),
                E = d(189244),
                P = d(717988),
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
                B = u().gbc2cf50,
                O = u().b081cdf7,
                G = u().f5978664,
                H = (0, x.Z)({ shouldDisplayPin: !1 }),
                $ = { page: "spheres_list", section: "all" };
            function z(e) {
                const a = (0, T.Z)(),
                    { user: d } = e,
                    { id_str: o, screen_name: l } = d,
                    s = (0, R.hC)("responsive_web_timeline_relay_user_lists_enabled"),
                    t = r.useMemo(() => (0, L.Z)(o, s ? "relay" : "redux"), [o, s]),
                    i = r.useCallback(() => r.createElement(n.Z, { header: O({ screenName: l }), message: G }), [l]);
                return (
                    (0, N.q)(() => {
                        a.scribe({ action: "impression", ...$ });
                    }),
                    r.createElement(U.nO, { namespace: $ }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(Z.Z, { title: V({ screenName: d.screen_name }) }), r.createElement(F.Z, { entryConfiguration: H, module: t, renderEmptyState: i, title: B }))))
                );
            }
            const X = r.memo(z);
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
                le = (0, W.Z)()
                    .propsFromState(() => ({ module: (0, ee.P1)(oe, (e) => re(e)) }))
                    .withAnalytics({ page: "list_management" }),
                ne = u().gbc2cf50,
                se = u().f5978664,
                te = u().d1e5e328,
                ie = u().c09609d8,
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
                            return r.createElement(n.Z, { buttonLink: d ? "/i/lists/create" : void 0, buttonText: d ? ie : void 0, header: d ? ue : ce({ screenName: e.screen_name }), message: d ? te : se });
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
                        l = this._getEntryConfiguration(o);
                    return r.createElement(C.Z, null, r.createElement(Z.Z, { title: De({ screenName: d.screen_name }) }), r.createElement(F.Z, { entryConfiguration: l, module: a, renderEmptyState: this._renderEmptyTimeline, title: ne }));
                }
            }
            me.contextType = _.rC;
            const he = le(me),
                Me = u().h63a5c3c,
                be = u().d2004da3,
                pe = u().b0041756,
                fe = u().a64512a4,
                we = u().i0bcc456,
                _e = u().d8315ca0,
                Ae = u().e74be9ac,
                ye = (0, P.p)(
                    () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.15"),
                            d.e("icons.7"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.12"),
                            d.e("icons.22"),
                            d.e("icons.2"),
                            d.e("icons.18"),
                            d.e("icons.6"),
                            d.e("icons.1"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.14"),
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
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.28"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
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
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class Se extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMembershipsLabel = () => (this._isViewerUserView() ? _e : Ae)),
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
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(M.Z, { "aria-label": Me, renderMenu: this._renderActionMenu, style: ke.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(h.Z, null) : null,
                                a = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: ke.rightControl }, (0, k.ZP)() ? e : null, a);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: a } = this.props,
                                d = this._isOwnManagementView() ? r.createElement(A.Z, { history: e, page: "list_management" }) : void 0;
                            if (a) {
                                return a?.protected && !a?.following && !this._isViewerUserView() ? r.createElement(n.Z, { header: be({ screenName: a.screen_name }), message: we }) : r.createElement(f.Z, { component: s.Z, fab: d }, r.createElement(l.Switch, null, r.createElement(l.Route, { exact: !0, path: `/${E.qX}/lists` }, this._isViewerUserView() ? r.createElement(he, { user: a }) : r.createElement(X, { user: a })), r.createElement(l.Route, { exact: !0, path: `/${E.qX}/lists/memberships` }, r.createElement(ye, { user: a }))));
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
                        o = !d || (d && (0, I.n5)({ isOwnProfile: this._isViewerUserView(), isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: d })),
                        l = this._isOwnManagementView(),
                        n = this._isMembershipsView() ? this._getMembershipsLabel() : pe;
                    return a ? (o ? r.createElement(w.Z, { backLocation: "/", customSearchBox: l ? r.createElement(y.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(b.Z, null), subtitle: l ? void 0 : r.createElement(t.Z, { screenName: a }), title: n, withSearchBox: l }) : r.createElement(v.Z, { to: `/${a}` })) : null;
                }
            }
            Se.contextType = _.rC;
            const ke = i.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                Ie = J((0, g.Z)(Se));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-6df79b50.311f8d4a.js.map
