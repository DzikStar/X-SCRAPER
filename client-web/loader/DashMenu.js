"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu"],
    {
        906433: (e, r, n) => {
            n.d(r, { Z: () => b });
            n(136728);
            var t = n(202784),
                a = n(325686),
                o = n(952428),
                l = n(731708),
                i = n(310088),
                s = n(392237),
                d = n(674132),
                c = n.n(d),
                u = n(206962);
            const m = () => c().d9ef2842,
                p = c().d86bbf0f,
                h = c().h6beb5fb,
                b = ({ badgeCount: e, decoration: r, icon: n, iconColor: s, label: d, link: c, onClick: b, pip: f, rightControl: D, testID: g }) =>
                    t.createElement(
                        a.Z,
                        { style: w.dashMenuItem },
                        t.createElement(
                            o.Z,
                            { link: c, onClick: b, style: w.link, testID: g },
                            t.createElement(
                                a.Z,
                                { style: w.item },
                                n
                                    ? t.createElement(n, {
                                          style: (() => {
                                              const e = [w.icon, w.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                t.createElement(l.ZP, { numberOfLines: 1, size: "headline1", style: w.itemLabel, weight: "bold" }, d),
                                e || f ? t.createElement(a.Z, { style: w.itemAccessory }, t.createElement(i.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: h, unreadCountLabel: f ? m : p })) : null,
                                r ? t.createElement(a.Z, { style: w.leftMargin }, r) : null,
                            ),
                        ),
                        D,
                    ),
                w = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, r, n) => {
            n.d(r, { Z: () => A });
            var t = n(202784),
                a = n(325686),
                o = n(661810),
                l = n(952428),
                i = n(731708),
                s = n(392237),
                d = n(516951),
                c = n(500002),
                u = n(443781),
                m = n(71620),
                p = n(668214),
                h = n(172497),
                b = n(466036),
                w = n(390387),
                f = n(919022);
            const D = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: w.yK, hasCommunityMemberships: h.fn, pendingFollowersInfo: b.sC, viewerUser: f.ZP.selectViewerUser, userFeatures: w.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: r, pendingFollowersInfo: n, userFeatures: t, viewerUser: a }) => {
                    const { acceptedIds: o, ids: l } = n;
                    return { communitiesActions: e, acceptedFollowerCount: o.length, hasCommunityMemberships: r, viewerUser: a, pendingFollowerCount: l.length - o.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: b.GE }))
                .withAnalytics();
            var g = n(906433),
                S = n(879526);
            const v = ({ acceptedFollowerCount: e, analytics: r, pendingFollowerCount: n, viewerUser: s, onClose: c = d.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: h, countrySpecificItems: b } = (0, S.O)({ analytics: r, featureSwitches: m, onClose: c, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return t.createElement(
                        t.Fragment,
                        null,
                        ((e) =>
                            e.map((e, r) => {
                                const { component: n = g.Z, ...a } = e,
                                    o = { ...a },
                                    l = t.createElement(n, o);
                                return t.createElement(t.Fragment, { key: r }, l);
                            }))(h),
                        ((w = b),
                        t.createElement(
                            t.Fragment,
                            null,
                            t.createElement(a.Z, { style: y.redesignDivider }, t.createElement(o.Z, { space: "space12", style: y.divider })),
                            w.map((e, r) => t.createElement(l.Z, { key: r, link: e.link, onClick: e.onClick, style: y.countrySpecificItem }, t.createElement(i.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var w;
                },
                A = (0, c.ZP)(D(t.memo(v))),
                y = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        569591: (e, r, n) => {
            n.r(r), n.d(r, { DashMenu: () => K, default: () => Y });
            var t = n(202784),
                a = n(325686),
                o = n(266704),
                l = n(525271),
                i = n(392237),
                s = n(674132),
                d = n.n(s),
                c = n(952793),
                u = n(839090),
                m = n(655352),
                p = n(943914),
                h = n(310088),
                b = n(530732),
                w = n(823161),
                f = n(154003),
                D = n(379327),
                g = n(149170),
                S = n(380155),
                v = n(725516),
                A = n(125363),
                y = n(390387),
                E = n(919022),
                k = n(110512),
                C = n(105131),
                M = n(206962),
                _ = n(71620),
                Z = n(668214),
                P = n(454319),
                I = n(956817);
            const x = (0, Z.Z)()
                    .propsFromState(() => ({ multiAccountUsers: P.$4, showMultiAccountOverflowPip: P.Zt, delegateUser: y.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: I.y })),
                B = d().da4691aa,
                U = d().c7e55ccf,
                F = d().d86bbf0f,
                T = d().h6beb5fb,
                N = { page: "dash" },
                L = ({ createLocalApiErrorHandler: e, delegateUser: r, multiAccountUsers: n, onClose: o, showMultiAccountOverflowPip: l, switchAccount: i }) => {
                    const s = (0, v.z)(),
                        d = (0, A.v9)(E.ZP.selectLoggedInUser),
                        c = (0, k.V7)(),
                        u = (0, A.I0)(),
                        m = r || c.length || n.length > 0,
                        p = (e) => (e ? t.createElement(h.Z, { count: e, truncatedCountFormatter: T, unreadCountLabel: F }) : null),
                        C = t.useCallback(
                            (r, n, t) => () => {
                                s.scribe({ ...N, section: t ? "switch_to_protected_account" : "switch_account", element: n ? "account_bubble_badged" : "account_bubble", action: "click" }), i({ user_id: r }).catch(e(S.y));
                            },
                            [s, e, i],
                        ),
                        _ = t.useCallback(() => {
                            s.scribe({ ...N, section: "switch_account", element: "dash_account_switcher", action: "click" }), o && o();
                        }, [s, o]);
                    return t.createElement(
                        a.Z,
                        { style: V.root },
                        (() => {
                            if (d && c.length) {
                                const e = c.map((e) => ({ screenName: e.legacy.screen_name, userId: e.legacy.id_str, badgeCount: void 0, avatarImageUrl: e.legacy.profile_image_url_https })),
                                    n = { screenName: d.screen_name, userId: d.id_str, badgeCount: void 0, avatarImageUrl: d.profile_image_url_https };
                                return [n, ...e.slice(0, 2)]
                                    .filter(({ userId: e }) => e !== (r?.userId ?? n.userId))
                                    .slice(0, 2)
                                    .map((e) => t.createElement(b.Z, { "aria-label": U({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === d.id_str ? u((0, y.YJ)()) : u((0, y.vU)({ userId: e.userId }))), role: "button", style: V.link }, t.createElement(w.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return n.map((e) => t.createElement(b.Z, { "aria-label": U({ screenname: e.screen_name }), key: e.user_id, onPress: C(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: V.link }, t.createElement(w.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? t.createElement(g.default, { testID: M.Z.iconMore }) : t.createElement(D.default, { testID: M.Z.iconPlus });
                            return t.createElement(a.Z, null, t.createElement(f.ZP, { "aria-label": B, icon: e, link: "/account/switch", onPress: _, size: "small", testID: M.Z.switcher, type: "primaryOutlined" }), l ? t.createElement(h.Z, { pip: !0, truncatedCountFormatter: T, unreadCountLabel: F }) : null);
                        })(),
                    );
                },
                V = i.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                W = (0, C.P3)(x(t.memo(L)));
            var z = n(659773);
            const H = (0, Z.Z)()
                .propsFromState(() => ({ viewerUser: E.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: z.MJ }))
                .withAnalytics({ page: "dash" });
            var O = n(120735);
            const G = d().i5f7b6b8,
                $ = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                R = t.createElement(p.B, null, t.createElement(W, null)),
                K = (e) => {
                    const { alignMenu: r, analytics: n, fetchDataUsageSettingsIfNeeded: i, onClose: s, renderCustomMenuItems: d, viewerUser: p, withMoreSideNavOverflow: h } = e,
                        b = (0, c.hC)("creator_subscriptions_subscription_count_enabled");
                    t.useEffect(() => {
                        i(), n.scribePageImpression();
                    }, [n, i]);
                    const w =
                        ((f = "profile_overflow_item"),
                        () => {
                            f && n.scribe({ section: "overflow_menu", element: f, action: "click" }), s && s();
                        });
                    var f;
                    const D = (e) => {
                        if (!p) return null;
                        const { creator_subscriptions_count: r, followers_count: n, friends_count: l, highlightedLabel: i, is_blue_verified: c, name: u, profile_image_url_https: f, protected: D, screen_name: g, translator_type: S, verified: v, verified_type: A } = p;
                        return (0, m.ZP)() ? t.createElement(a.Z, { style: j.dropdownMinWidth }, d ? d() : t.createElement(O.Z, { onClose: s, withMoreSideNavOverflow: h })) : t.createElement(a.Z, { style: [e && j.scrollableContentPadding, (0, m.ZP)() && j.menuContentWidth] }, t.createElement(a.Z, { "aria-label": G, style: j.header }, t.createElement(o.Z, { decoration: R, isAllowedToViewOptions: $(b), isLoggedIn: !0, isUserBlueVerified: c, isUserProtected: D, isUserStatsWithLink: !0, isUserVerified: v, onAvatarClick: w, onScreenNameClick: w, subscriptionsCount: r, userAvatarSize: "xLarge", userAvatarUri: f, userFollowersCount: n, userFriendsCount: l, userHighlightedLabel: i, userName: u, userScreenName: g, userTranslatorType: S, userVerifiedType: A, withNameWrap: !0 })), d ? d() : t.createElement(O.Z, { onClose: s }));
                    };
                    return (0, m.ZP)() ? t.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: s, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, D(!1)) : t.createElement(l.Z, { align: r, onDismissed: s, style: j.drawer, withTopBar: !1 }, D(!0));
                },
                Y = H(K),
                j = i.default.create((e) => ({ backgroundArea: { backgroundColor: e.colors.activeBlack }, drawer: { maxWidth: "70%" }, dropdownMinWidth: { minWidth: "318px" }, wrapper: { alignSelf: "flex-start", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }, scrollableItems: { overflow: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", flexGrow: 1, flexShrink: 1 }, scrollableContentPadding: { paddingBottom: "44px" }, header: { flexGrow: 0, flexShrink: 0 }, avatarWrapper: { flexGrow: 1 }, userNames: { display: "flex", flexDirection: "column", paddingVertical: e.spaces.space12 }, menuContentWidth: { width: `calc(${e.spaces.space64} * 4.25)` } }));
        },
        839090: (e, r, n) => {
            n.d(r, { Z: () => t });
            n(202784);
            const t = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.5"),
                        n.e("icons.12"),
                        n.e("icons.20"),
                        n.e("icons.0"),
                        n.e("icons.21"),
                        n.e("icons.28"),
                        n.e("icons.17"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.22"),
                        n.e("icons.9"),
                        n.e("icons.25"),
                        n.e("icons.6"),
                        n.e("icons.10"),
                        n.e("icons.14"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-34cda585"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        n.e("loader.WideLayout"),
                    ]).then(n.bind(n, 616753)),
            });
        },
        661810: (e, r, n) => {
            n.d(r, { Z: () => l });
            var t = n(202784),
                a = n(325686),
                o = n(392237);
            function l({ spacing: e, style: r }) {
                return t.createElement(a.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, r] });
            }
            const i = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        525271: (e, r, n) => {
            n.d(r, { Z: () => A });
            var t = n(202784),
                a = n(325686),
                o = n(674132),
                l = n.n(o),
                i = n(837020),
                s = n(461756),
                d = n(786998),
                c = n(154003),
                u = n(950822),
                m = n(743618),
                p = n(745153),
                h = n(292627),
                b = n(224162),
                w = n(392237);
            const f = l().af8fa2ae,
                D = t.createElement(i.default, null);
            class g extends t.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: r, ctrlKey: n, key: t, metaKey: a } = e;
                            !(r || n || a) && "Escape" === t && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), s.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: r, buttonType: n, children: o, style: l, subtitle: i, title: c, topBarStyle: w, withBackgroundBlur: f, withTopBar: D, withTransparentMask: g } = this.props,
                        { isVisible: A } = this.state;
                    return t.createElement(b.ZP.Consumer, null, ({ direction: b }) => {
                        const y = "rtl" === b,
                            E = A ? v.visibleDrawer : ("left" === r) === y ? v.offscreenRightDrawer : v.offscreenLeftDrawer,
                            k = A && !g ? v.maskWithBg : v.maskTransparent,
                            C = A ? v.animateOpen : v.animateClose,
                            M = s.Z.reducedMotionEnabled ? null : C;
                        return t.createElement(h.Z.Modal, null, t.createElement(p.Z, null, t.createElement(m.Z, null, t.createElement(a.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [v.mask, k, M, f ? v.backgroundBlur : null, "left" === r ? v.alignLeft : v.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: S, style: [v.root, f ? v.backgroundRootBlur : null, E, M, l], children: t.createElement(t.Fragment, null, D ? t.createElement(d.Z, { leftControl: "left" === r ? e : "right" === r ? this._renderCloseButton(n) : null, rightControl: "left" === r ? this._renderCloseButton(n) : "right" === r ? e : null, style: w, subtitle: i, title: c }) : null, t.createElement(a.Z, { style: v.contentContainer }, o)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return t.createElement(c.ZP, { "aria-label": f, icon: D, onPress: this._handleMaskClick, type: e });
                }
            }
            g.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const S = (e) => {
                    e.stopPropagation();
                },
                v = w.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...w.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                A = g;
        },
        529509: (e, r, n) => {
            n.d(r, { Z: () => b });
            var t = n(202784),
                a = n(325686),
                o = n(674132),
                l = n.n(o),
                i = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const m = l().a35a5b10,
                p = l().fc8cd112,
                h = (e) => t.createElement(s.ZP, null, e);
            class b extends t.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: r, knownFollowersCount: n, textStyle: o, userScreenName: l, withFacepile: u } = this.props,
                        p = this._renderMessage();
                    return t.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? t.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: l ? ((h = l), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => t.createElement(a.Z, { style: w.content }, !e && u ? t.createElement(d.Z, { userAvatarUrls: r }) : null, t.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && w.message, (n || i) && !!l && w.underline, o] }, e && u ? t.createElement(d.Z, { style: w.inlineFacepile, userAvatarUrls: r }) : null, p))) : t.createElement(a.Z, { style: w.content }, t.createElement(s.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: r } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(r, e) : 3 === e ? this._renderThreeUsernames(r) : 2 === e ? this._renderTwoUsernames(r) : 1 === e ? this._renderOneUsername(r) : p;
                }
                _renderOneUsername(e) {
                    return t.createElement(l().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return t.createElement(l().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return t.createElement(l().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, r) {
                    const n = r - 2;
                    return t.createElement(l().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            b.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const w = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, r, n) => {
            n.d(r, { ZP: () => b });
            var t = n(202784),
                a = n(325686),
                o = n(827515),
                l = n(461756),
                i = n(731708),
                s = n(392237);
            const d = "up",
                c = "down",
                u = (e, r, n) => {
                    n((n) => {
                        const t = (0, o.Z)(e) ? (e > (n.count || 0) ? d : c) : d;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: r, transitionDirection: t };
                    });
                },
                m = {};
            [d, c].forEach((e) => {
                const r = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: r, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: r } };
            });
            const p = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                b = (e) => {
                    const { children: r, containerStyle: n, count: s, ...c } = e,
                        [b, w] = t.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        f = t.useRef(!1);
                    return (
                        t.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.useEffect(() => {
                            if (f.current)
                                if (l.Z.reducedMotionEnabled) w((n) => ({ ...n, oldText: null, text: r, pendingText: null, pendingCount: null, count: e.count }));
                                else if (r !== b.pendingText) {
                                    r === b.text || ((0, o.Z)(e.count) && b.count === e.count) ? w((e) => ({ ...e, pendingCount: null, pendingText: null })) : (w((n) => ({ ...n, pendingCount: e.count, pendingText: r })), b.animating || u(e.count, r, w));
                                }
                        }, [r]),
                        t.useEffect(() => {
                            f.current &&
                                !1 === b.animating &&
                                (b.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && w((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : b.pendingText && u(b.pendingCount, b.pendingText, w));
                        }, [b.animating, b.oldText]),
                        t.useMemo(() => {
                            const e = m[b.transitionDirection],
                                r = b.oldText && !l.Z.reducedMotionEnabled,
                                o = !b.animating && b.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...p, ...(b.animating ? e.post : e.active) },
                                d = { ...(o ? e.pre : e.active) };
                            return t.createElement(
                                a.Z,
                                { style: [h.root, n] },
                                r ? t.createElement("span", { style: s }, t.createElement(i.ZP, c, b.oldText)) : null,
                                t.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, r) => {
                                                e && r((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, w),
                                        style: d,
                                    },
                                    t.createElement(i.ZP, c, b.text),
                                ),
                            );
                        }, [n, c, b, f, w])
                    );
                };
        },
        98538: (e, r, n) => {
            n.d(r, { Z: () => p });
            var t = n(202784),
                a = n(325686),
                o = n(731708),
                l = n(891198),
                i = n(280278),
                s = n(392237);
            const d = "subtext1",
                c = t.createContext({ onMedia: !1 });
            class u extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: r, onMedia: n, onPress: a } = this.props;
                    return t.createElement(o.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: r, onClick: a }, t.createElement(c.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                t.createElement(
                    a.Z,
                    { style: [m.row, e.style] },
                    t.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, r, n) => t.createElement(a.Z, { key: r, style: r < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: r }) => t.createElement(c.Consumer, null, ({ onMedia: n }) => t.createElement(o.ZP, { children: e, color: n ? "white" : "gray700", size: d, style: r }))),
                (u.Value = ({ animated: e, children: r, count: n, style: a, weight: l = "bold" }) => t.createElement(c.Consumer, null, ({ onMedia: s }) => (e ? t.createElement(i.ZP, { children: r, count: n, size: d, style: a, weight: l }) : t.createElement(o.ZP, { children: r, color: s ? "white" : "text", size: d, style: a, weight: l }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        266704: (e, r, n) => {
            n.d(r, { Z: () => S });
            var t = n(202784),
                a = n(325686),
                o = n(731708),
                l = n(235902),
                i = n(649846),
                s = n(529509),
                d = n(392237),
                c = n(823161),
                u = n(238406),
                m = n(366635),
                p = n(646797);
            const h = () => !1;
            class b extends t.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: r, knownFollowers: n, userScreenName: o } = this.props,
                                { followersYouKnow: l } = e;
                            if (l && r && n) {
                                const { avatarUrls: e, count: r, names: l } = n;
                                return r ? t.createElement(a.Z, { style: [w.marginTop12, w.minHeight] }, "number" == typeof r && t.createElement(s.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: r, knownFollowersNames: l, userScreenName: o })) : null;
                            }
                        });
                }
                render() {
                    return t.createElement(l.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const r = e();
                        return t.createElement(a.Z, { style: w.root }, this._renderHeader(r), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), r ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: r, isLoggedIn: n } = this.props,
                        { followButton: t } = r;
                    return t && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return t.createElement(a.Z, { style: w.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? t.createElement(a.Z, { style: w.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: r, promotedContent: n, userAvatarSize: o, userAvatarUri: i, userScreenName: s } = this.props,
                        { avatar: d } = e;
                    return t.createElement(a.Z, { style: w.row }, t.createElement(l.ZP.Provider, { value: { userAvatarLabel: h } }, t.createElement(c.default, { onClick: r, promotedContent: n, screenName: s, size: o, uri: d ? i : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: r, withUserAvatar: n } = this.props,
                        { label: o } = r;
                    return n ? t.createElement(t.Fragment, null, this._renderUserAvatar(), t.createElement(a.Z, { style: w.marginTop8 }, this._renderUserName(), o && this._renderHighlightedUserLabel())) : t.createElement(a.Z, { style: w.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: r, isUserProtected: n, isUserVerified: a, onScreenNameClick: o, promotedContent: l, userHighlightedLabel: i, userName: s, userScreenName: d, userTranslatorType: c, userVerifiedType: u, userWithFollowsYou: p, withNameWrap: h } = this.props,
                        { badges: b, followIndicator: w, fullName: f } = e;
                    return t.createElement(m.Z, { affiliateBadgeInfo: i, badgeContext: "account", isBlueVerified: b ? r : void 0, isProtected: b ? n : void 0, isVerified: b ? a : void 0, name: f ? s : d, nameSize: "headline2", onLinkClick: o, promotedContent: l, screenName: d, translatorType: b ? c : void 0, verifiedType: b ? u : void 0, withFollowsYou: w && p, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && t.createElement(i.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? t.createElement(a.Z, { style: w.marginTop4 }, t.createElement(o.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: r, userEntities: n, userId: o, userWithheldDescription: l, userWithheldEntities: i } = this.props,
                        { description: s } = e;
                    return s && r && n && o ? t.createElement(a.Z, { style: [w.row, w.marginTop12] }, t.createElement(u.Z, { description: r, entities: n, userId: o, withheldDescription: l, withheldEntities: i })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: r, onUserStatsPress: n, subscriptionsCount: o, userFollowersCount: l, userFriendsCount: i, userScreenName: s } = this.props,
                        { stats: d } = e;
                    return d ? t.createElement(a.Z, { style: [w.row, w.marginTop12] }, t.createElement(p.Z, { followersCount: l, friendsCount: i, onPress: n, screenName: s, subscriptionsCount: o, withLink: r, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            b.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const w = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var f = n(807896);
            var D = n(674132);
            const g = n.n(D)().ef633578;
            class S extends t.PureComponent {
                render() {
                    return t.createElement(b, this.props);
                }
            }
            (S.Promoted = (e) => {
                const { followButton: r, isUserProtected: n, isUserVerified: a, knownFollowers: o, onAvatarClick: l, onScreenNameClick: i, promotedContent: s, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return t.createElement(b, (0, f.Z)({}, p, { followButton: r, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: a, knownFollowers: o, onAvatarClick: l, onScreenNameClick: i, promotedContent: s, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (S.Suspended = function ({ onAvatarClick: e, onScreenNameClick: r, userScreenName: n }) {
                    const a = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return t.createElement(b, { errorMessage: g, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: a.protected, isUserStatsWithLink: a.isUserStatsWithLink, isUserVerified: a.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: r, userAvatarUri: a.profile_image_url_https, userDescription: a.description, userEntities: a.entities, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userId: a.id_str, userName: n, userScreenName: n, userWithFollowsYou: a.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, r, n) => {
            n.d(r, { Z: () => s });
            var t = n(202784),
                a = n(674132),
                o = n.n(a),
                l = n(891198),
                i = n(98538);
            class s extends t.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: r, onPress: n, screenName: a, style: s, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${a}/verified_followers`;
                    return t.createElement(i.Z.Group, { style: s }, t.createElement(i.Z, { count: r, link: u ? `/${a}/following` : void 0, onPress: n }, t.createElement(o().I18NFormatMessage, { $i18n: "g3ed1dd5" }, t.createElement(i.Z.Value, null, o().e4f1e6e4({ formattedCount: (0, l.wl)(r) })), t.createElement(i.Z.Label, null, o().daf8a75f({ count: r })))), t.createElement(i.Z, { count: e, link: u ? h : void 0, onPress: n }, t.createElement(o().I18NFormatMessage, { $i18n: "i06724fb" }, t.createElement(i.Z.Value, null, o().ef1f4fc6({ formattedCount: (0, l.wl)(e) })), t.createElement(i.Z.Label, null, o().ad9b5988({ count: e })))), m && void 0 !== d && t.createElement(i.Z, { count: d, link: u ? `/${a}/creator-subscriptions/subscribers` : void 0, onPress: n }, t.createElement(o().I18NFormatMessage, { $i18n: "eb0084f3" }, t.createElement(i.Z.Value, null, o().a9980948({ formattedCount: (0, l.wl)(d) })), t.createElement(i.Z.Label, null, o().ce44a35c({ count: d })))), p && c && t.createElement(i.Z, { count: c, link: u ? `/${a}/creator-subscriptions/subscriptions` : void 0, onPress: n }, t.createElement(o().I18NFormatMessage, { $i18n: "fc1b8f67" }, t.createElement(i.Z.Value, null, o().id949f68({ formattedCount: (0, l.wl)(c) })), t.createElement(i.Z.Label, null, o().hb608cfc({ count: c })))));
                }
            }
            s.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        839: (e, r, n) => {
            n.r(r), n.d(r, { default: () => s });
            var t = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: r } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        197318: (e, r, n) => {
            n.r(r), n.d(r, { default: () => s });
            var t = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: r } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        297896: (e, r, n) => {
            n.r(r), n.d(r, { default: () => s });
            var t = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: r } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        748138: (e, r, n) => {
            n.r(r), n.d(r, { default: () => s });
            var t = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: r } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        662678: (e, r, n) => {
            n.d(r, { G: () => a, Z: () => t });
            n(136728);
            const t = function (e, r) {
                return a(e, r);
            };
            function a(e, r) {
                return e.reduce(
                    (n, t, a) => {
                        const o = r ? r(t, a, e) : !!t;
                        return o && n[0].push(t), !o && n[1].push(t), n;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, r, n) => {
            var t = n(821176);
            e.exports = function () {
                var e = t(this),
                    r = "";
                return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu.656e7d5a.js.map
