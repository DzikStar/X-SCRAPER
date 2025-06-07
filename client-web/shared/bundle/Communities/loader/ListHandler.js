"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Communities~loader.ListHandler", "icons/IconNewsStroke-js"],
    {
        346252: (e, a, l) => {
            l.d(a, { Z: () => f });
            var t = l(202784),
                r = l(325686),
                n = l(530525),
                o = l(439592),
                i = l(682474),
                s = l(745185),
                d = l(392237),
                c = l(401388),
                u = l(250672),
                m = l(741692);
            const h = Object.freeze({ Fixed: "fixed", Variable: "variable" }),
                p = (e) => {
                    const { category: a, eventState: l, gameClock: r, gameClockPeriod: n, participants: o, startTimeMillis: i, winnerId: d } = e,
                        c = (0, u.bH)(a, l, o, n, d);
                    return t.createElement(s.Z, { "aria-label": c, category: a, containerStyle: g.scoreCardTile, gameClock: r, gameClockPeriod: n, gameState: l, isCompact: !0, startTimeMillis: i, teams: o, winnerId: d });
                },
                b = ({ isCellWithProminentSocialContext: e, type: a }) => {
                    switch (a) {
                        case h.Fixed:
                            return (e && g.fixedCellThumbnailWithProminentSocialContext) || g.fixedCellThumbnail;
                        case h.Variable:
                            return g.variableCellThumbnail;
                        default:
                            return;
                    }
                },
                g = d.default.create((e) => ({ coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, fixedCellThumbnail: { height: d.default.theme.spaces.space48, width: d.default.theme.spaces.space48 }, fixedCellThumbnailWithProminentSocialContext: { height: `calc(${d.default.theme.spaces.space48} + ${d.default.theme.spaces.space40} + ${d.default.theme.spaces.space1} + ${d.default.theme.spaces.space2})`, width: `calc(${d.default.theme.spaces.space48} + ${d.default.theme.spaces.space40} + ${d.default.theme.spaces.space1} + ${d.default.theme.spaces.space2})` }, scoreCardTile: { padding: 0 }, variableCellThumbnail: { maxHeight: `calc(${d.default.theme.spaces.space48} * 2)`, maxWidth: `calc(${d.default.theme.spaces.space48} * 2)`, minHeight: `calc(${d.default.theme.spaces.space48} + ${d.default.theme.spaces.space20})`, minWidth: `calc(${d.default.theme.spaces.space48} + ${d.default.theme.spaces.space20})`, height: "25%", width: "25%" } })),
                f = (e) => {
                    const { cropCandidates: a, dataSaverMode: l, icon: s, image: d, isCellWithProminentSocialContext: u, scoreEvent: h, type: f = "variable" } = e,
                        y = b({ isCellWithProminentSocialContext: u, type: f });
                    return t.createElement(r.Z, { style: [g.coverContainer, y] }, h ? p(h) : !d || (0, c.Z)(d) || l ? (l || (0, c.Z)(d) ? t.createElement(i.Z, { ratio: 1 }, t.createElement(m.Vm, { icon: s })) : null) : t.createElement(n.Z, { "aria-label": "", aspectMode: o.Z.SQUARE, cropCandidates: a, image: d }));
                };
        },
        53821: (e, a, l) => {
            l.d(a, { Z: () => W });
            var t = l(202784),
                r = l(325686),
                n = l(731708),
                o = l(952428),
                i = l(124964),
                s = l(642153),
                d = l(366635),
                c = l(392237),
                u = l(111677),
                m = l.n(u),
                h = l(121791),
                p = l(913973),
                b = l(443781),
                g = l(989816),
                f = l(269950),
                y = l(154003),
                w = l(678773),
                C = l(492140),
                S = l(833057),
                D = l(872788),
                k = l(71620),
                _ = l(668214),
                v = l(709318),
                M = l(601576);
            const E = (0, _.Z)()
                    .propsFromActions(() => ({ addToast: M.fz, createLocalApiErrorHandler: (0, k.zr)("TOGGLE_PIN_LIST"), pinTimeline: v.qM, unpinTimeline: v.bK }))
                    .withAnalytics(),
                I = m().c5d23126,
                P = m().j44ec610,
                T = m().d8a032a2,
                A = m().fa816a0a,
                Z = m().ac832ae4,
                x = m().cdb33880,
                F = (e) => {
                    const { addToast: a, analytics: l, couldPinList: r, createLocalApiErrorHandler: n, isListPinned: o, listId: i, mode: s, name: d, pinTimeline: c, unpinTimeline: u } = e,
                        m = t.useMemo(() => (s === f.H.Reordering ? t.createElement(w.default, null) : o ? t.createElement(C.default, null) : t.createElement(S.default, { style: r ? null : R.disabledPin })), [r, o, s]),
                        h = t.useMemo(() => {
                            if (s === f.H.Pinning) return { label: o ? P : I };
                        }, [o, s]),
                        p = t.useCallback(() => {
                            if (r || o) {
                                const e = o ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), o ? u({ id: i, name: d, type: D.FO.LIST }).catch(n) : c({ id: i, name: d, type: D.FO.LIST }).catch(n);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: T });
                        }, [a, l, r, n, o, i, d, c, u]),
                        b = t.useMemo(() => (s === f.H.Reordering ? A : o ? x : Z), [o, s]);
                    return t.createElement(y.ZP, { "aria-label": b, hoverLabel: h, icon: m, onPress: s === f.H.Pinning ? p : void 0, testID: "list-icon-button", type: "brandText" });
                },
                R = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                L = E(t.memo(F));
            var B = l(725516),
                z = l(346252),
                H = l(878162),
                K = l(845738);
            const U = "cellThumbnail",
                N = "listCell",
                O = (m().d58baa7f, m().j681933e),
                $ = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: w, listId: C, listVisibility: S, media: D, memberCount: k, membersContext: _, mode: v, name: M, onClick: E, pinnedTimelinesCount: I, role: P, user: T, withBottomBorder: A, withHoverCard: Z, withSubscribe: x = !1 } = e,
                        { featureSwitches: F } = (0, b.QZ)(),
                        R = F.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", K.F),
                        $ = !I || I < R,
                        W = `/i/lists/${C}`,
                        j = t.useCallback((e) => (e ? t.createElement(H.Z, { basePath: W, listId: C, wrapperStyle: { maxWidth: "100%" } }, e) : null), [W, C]),
                        G = t.useMemo(() => t.createElement(r.Z, { style: V.name }, t.createElement(n.ZP, { numberOfLines: 1, weight: "bold" }, M), "private" === S ? t.createElement(n.ZP, { size: "body", style: V.icon }, t.createElement(h.default, { "aria-label": O, style: V.iconLock })) : null), [S, M]),
                        Q = t.useMemo(() => t.createElement(r.Z, { style: V.thumbnailImage, testID: U }, t.createElement(z.Z, { cropCandidates: D.crop, dataSaverMode: a, icon: "lists", image: D.image, type: "fixed" })), [a, D.crop, D.image]),
                        Y = t.useMemo(() => l || (w ? t.createElement(p.default, { style: V.iconCheckmark }) : v === f.H.Reordering || v === f.H.Pinning ? t.createElement(L, { couldPinList: $, isListPinned: y, listId: C, mode: v, name: M }) : x ? t.createElement(g.Z, { isFollowing: m, isMinimal: !0, listId: C, listName: M, user: T }) : void 0), [$, l, y, m, w, C, v, M, T, x]),
                        q = (0, B.z)(),
                        X = t.useCallback(
                            (e) => {
                                q.contextualScribeNamespace.element ? q.scribeAction("click") : q.scribe({ component: "list", action: "click" }), E?.(e, { listId: C, member_count: k });
                            },
                            [q, E, C, k],
                        );
                    return t.createElement(o.Z, { "aria-checked": w, link: { pathname: W, anchorless: !0 }, onPress: X, role: P, style: [V.root, A && V.bottomBorder], testID: N }, t.createElement(r.Z, { style: V.listContainer }, t.createElement(r.Z, { style: V.leftColumn }, j(Q), t.createElement(r.Z, { style: V.listAttribution }, t.createElement(r.Z, { style: V.nameContainer }, j(G), _ ? t.createElement(n.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, t.createElement(i.Z, null), _) : null), c && u ? t.createElement(r.Z, { style: V.rowContainer }, t.createElement(s.Z, { style: V.facepile, userAvatarUrls: c }), t.createElement(n.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : T ? t.createElement(d.Z, { affiliateBadgeInfo: T.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: T.is_blue_verified, isProtected: T.protected, isVerified: T.verified, name: T.name, nameSize: "subtext2", profileImageUrl: T.profile_image_url_https, screenName: T.screen_name, screenNameSize: "subtext2", verifiedType: T.verified_type, withHoverCard: Z, withLink: !0, withScreenName: !0 }) : null)), t.createElement(r.Z, { style: V.rightColumn }, Y)));
                },
                V = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                W = t.memo($);
        },
        845738: (e, a, l) => {
            l.d(a, { F: () => t });
            l(202784);
            const t = 5;
        },
        878162: (e, a, l) => {
            l.d(a, { Z: () => h });
            var t = l(202784),
                r = l(325686),
                n = l(818199),
                o = l(392237),
                i = l(136185);
            const s = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.0"),
                        l.e("icons.5"),
                        l.e("icons.12"),
                        l.e("icons.20"),
                        l.e("icons.2"),
                        l.e("icons.21"),
                        l.e("icons.28"),
                        l.e("icons.17"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
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
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        l.e("shared~bundle.UserLists~ondemand.HoverCard"),
                        l.e("ondemand.HoverCard-6107ac1a"),
                        l.e("ondemand.HoverCard-9f4db315"),
                    ]).then(l.bind(l, 527409)),
            });
            var d = l(521514),
                c = l(125363);
            function u(e) {
                const { basePath: a, children: l, listId: o, wrapperStyle: d } = e,
                    u = (0, c.oR)(),
                    h = t.useCallback(() => (0, i.Dd)(u.getState()), [u]);
                return t.createElement(n.Z, { renderContent: () => t.createElement(r.Z, { style: m.root }, t.createElement(s, { basePath: a, listId: o, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: h, wrapperStyle: d }, l);
            }
            const m = o.default.create((e) => ({ root: { minHeight: 130, width: d.Z.cardWidth.normal } })),
                h = t.memo(u);
        },
        741692: (e, a, l) => {
            l.d(a, { S3: () => m, nn: () => h, Vm: () => p });
            var t = l(202784),
                r = l(325686),
                n = l(366635),
                o = l(392237),
                i = l(453333),
                s = l(784732),
                d = l(689582),
                c = l(68290);
            const u = "placeholderIcon",
                m = ({ author: e, color: a = "text", size: l = "subtext2", style: r, withHoverCard: o = !0, withLink: i = !1, withScreenName: s = !1 }) => t.createElement(n.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[l], color: a, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: l, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: l, style: [b.authorUserName, r], verifiedType: e.verified_type, withHoverCard: o, withLink: i, withScreenName: s }),
                h = ({ style: e }) => t.createElement(r.Z, { style: [b.lightningBadge, e] }, t.createElement(i.default, { style: b.lightningIcon })),
                p = ({ icon: e }) => t.createElement(r.Z, { style: b.placeholderIconContainer, testID: u }, "news" === e ? t.createElement(s.default, { style: b.placeholderIcon }) : "lists" === e ? t.createElement(d.default, { style: b.placeholderIcon }) : t.createElement(c.default, { style: b.placeholderIcon })),
                b = o.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        989816: (e, a, l) => {
            l.d(a, { Z: () => y });
            var t = l(202784),
                r = l(970187),
                n = l(392237),
                o = l(379327),
                i = l(913973),
                s = l(320588),
                d = l(233391),
                c = l(288955),
                u = l(71620),
                m = l(668214),
                h = l(576469);
            const p = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: h.Z.subscribe, unfollow: h.Z.unsubscribe }))
                    .withAnalytics(),
                b = { followIcon: t.createElement(o.default, null), followingIcon: t.createElement(i.default, null) },
                g = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: n, follow: o, isFollowing: i, isMinimal: u, listId: m, listName: h, unfollow: p, user: g } = e,
                        y = t.useCallback(() => {
                            a.scribeAction("follow"), o(m).catch(l(s.lg));
                        }, [a, l, o, m]),
                        w = t.useCallback(() => {
                            a.scribeAction("unfollow"), p(m).catch(l(s.Sm));
                        }, [a, l, m, p]);
                    return t.createElement(c.Z, { customText: h, displayMode: d.BH.subscribe, userFullName: g?.name }, (e) => t.createElement(r.Z, { buttonIcons: u ? b : void 0, disabled: n, displayMode: u ? "only-icon" : void 0, isFollowing: i, onFollow: e(y), onUnfollow: e(w), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = n.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                y = p(t.memo(g));
        },
        269950: (e, a, l) => {
            l.d(a, { H: () => t });
            l(202784);
            const t = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        379873: (e, a, l) => {
            l.d(a, { z4: () => y, ZP: () => w, Dx: () => g });
            var t,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "relayListCell_list",
                    selections: [
                        { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                        (t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                        { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "owner_results",
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
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                                { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
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
                        { args: null, kind: "FragmentSpread", name: "useBannerImage_list" },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "a768b241795f7686944d39bc8f540980";
            const n = r;
            var o = l(202784),
                i = (l(585488), l(277660)),
                s = l.n(i),
                d = l(53821),
                c = l(161082),
                u = l(668214),
                m = l(709318),
                h = l(38562);
            const p = (0, u.Z)().propsFromState(() => ({ dataSaverMode: h.IX, pinnedTimelinesCount: m.Hm })),
                b = [],
                g = n,
                f = (e, a, l, t, r) => ({ id_str: e.id_str, name: l?.name ?? "", screen_name: l?.screen_name ?? "", profile_image_url_https: a?.image_url ?? "", protected: t?.protected ?? !1, verified: r ?? !1 }),
                y = (e) => {
                    const a = s()(g, e.listRef),
                        l = (0, c.u)(a),
                        t = a.owner_results?.result?.author,
                        r = a.owner_results?.result?.privacy,
                        n = a.owner_results?.result?.verification?.verified,
                        i = a.owner_results?.result?.avatar,
                        u = a.owner_results?.result?.core;
                    return o.createElement(d.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? b, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: t ? f(t, i, u, r, n) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                w = o.memo(p(y));
        },
        250672: (e, a, l) => {
            l.d(a, { bH: () => u });
            var t = l(111677),
                r = l.n(t),
                n = l(93074),
                o = l(810495);
            const i = r().a3484d22,
                s = r().aab2efa9,
                d = r().ba21c289,
                c = (e) => `${e.fullName || ""} ${e.score || ""}`,
                u = (e, a, l, t, r) => {
                    const u = l && r ? ((e, a) => (e && a ? e.find((e) => e.id === a) : void 0))(l, r) : void 0,
                        m = (0, n.Z)(a),
                        h = e || "",
                        p = l && l[0] ? c(l[0]) : "",
                        b = l && l[1] ? c(l[1]) : "",
                        g = t || "",
                        f = u ? s({ winner: u.fullName }) : "",
                        y = a === o.D.Completed ? (u ? f : i) : g;
                    return d({ gameCategory: h, gameState: m, accessibleGameClockPeriod: y, teamOneLabel: p, teamTwoLabel: b });
                };
        },
        161082: (e, a, l) => {
            l.d(a, { u: () => p });
            var t,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useBannerImage_list",
                    selections: [
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "custom_banner_media_results", plural: !1, selections: (t = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useBannerImage_apiMedia" }], storageKey: null }]), storageKey: null },
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: t, storageKey: null },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "cdbab01a2d01f274e4520afbd9ab33f4";
            const n = r;
            var o = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useBannerImage_apiMedia",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "media_info",
                        plural: !1,
                        selections: [
                            {
                                kind: "InlineFragment",
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiMediaRect",
                                        kind: "LinkedField",
                                        name: "salient_rect",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                type: "ApiImage",
                                abstractKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ApiMedia",
                abstractKey: null,
                hash: "26e87b5a3276722491009451177bea37",
            };
            const i = o;
            l(585488);
            var s = l(277660),
                d = l.n(s),
                c = l(401388),
                u = l(506363);
            const m = i,
                h = (e, a = !1) => {
                    const l = d()(m, e),
                        t = l?.media_info?.original_img_height,
                        r = l?.media_info?.original_img_url,
                        n = l?.media_info?.original_img_width;
                    if (t && r && n) {
                        const e = l?.media_info?.salient_rect;
                        let o = [];
                        if (e && !(0, c.Z)(e) && !a) {
                            const { height: a, left: l, top: t, width: r } = e;
                            o = [{ x: l, y: t, w: r, h: a }];
                        }
                        return { image: { url: r, height: t, width: n }, crop: o };
                    }
                },
                p = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: l } = e,
                            t = h(a?.result),
                            r = h(l?.result, !0);
                        return t ?? r ?? void 0;
                    })(d()(n, e)) || { image: u.bU, crop: [] };
        },
        320588: (e, a, l) => {
            l.d(a, { Mt: () => h, Sm: () => m, lg: () => u });
            var t = l(111677),
                r = l.n(t),
                n = l(615656),
                o = l(601576);
            const i = r().add55942,
                s = r().ib8f5f3c,
                d = r().e20fc756,
                c = r().hae1c934,
                u = { customErrorHandler: () => (0, o.mf)({ text: i }), showToast: !0 },
                m = { customErrorHandler: () => (0, o.mf)({ text: s }), showToast: !0 },
                h = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === n.ZP.ListAdminRightsError).length) return (0, o.mf)({ text: d });
                        }
                        return (0, o.mf)({ text: c });
                    },
                    showToast: !0,
                };
        },
        93074: (e, a, l) => {
            l.d(a, { Z: () => u });
            var t = l(111677),
                r = l.n(t),
                n = l(810495);
            const o = r().f178e38c,
                i = r().b6da6b02,
                s = r().i9f615c8,
                d = r().f897267a,
                c = r().f93c4b6a,
                u = (e) => {
                    switch (e) {
                        case n.D.Scheduled:
                            return o;
                        case n.D.InProgress:
                            return i;
                        case n.D.Completed:
                            return s;
                        case n.D.Postponed:
                            return d;
                        case n.D.Cancelled:
                            return c;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, a, l) => {
            l.d(a, { D: () => t });
            const t = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        165822: (e, a, l) => {
            l.d(a, { Z: () => d });
            var t = l(202784),
                r = l(325686),
                n = l(58881),
                o = l(530732),
                i = l(392237);
            const s = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                d = ({ "aria-label": e, containerStyle: a, disabled: l, interactiveStyles: d, isCompact: c, link: u, lower: m, onClick: h, stackLayoutLowerStyle: p, stackLayoutUpperStyle: b, upper: g, withInsetFocusRing: f = !0, withInteractiveStyling: y = !1 }) => {
                    const w = d ?? n.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        C = t.createElement(t.Fragment, null, t.createElement(r.Z, { style: [s.defaultUpperContainerStyle, b, c && { height: "auto" }] }, g), m ? t.createElement(r.Z, { style: [s.defaultLowerContainerStyle, p] }, m) : null);
                    return t.createElement(o.Z, { "aria-label": e, disabled: l, interactive: y, interactiveStyles: y ? w : void 0, link: u, onClick: h, style: [s.root, a] }, C);
                };
        },
        745185: (e, a, l) => {
            l.d(a, { Z: () => y });
            var t = l(202784),
                r = l(165822),
                n = l(854582),
                o = l(325686),
                i = l(530525),
                s = l(731708),
                d = l(439592),
                c = l(626202),
                u = l(392237),
                m = l(615084);
            const h = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class p extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: a },
                            } = this.props;
                            return t.createElement(o.Z, { style: g.teamNameContainer }, t.createElement(s.ZP, { color: b(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, a));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: a, logo: l },
                                } = this.props,
                                { imageError: r } = this.state,
                                n = (!l && !a) || r ? g.translucent : {},
                                s = l ? d.Z.exact(l.width / l.height) : d.Z.SQUARE;
                            return t.createElement(o.Z, { style: [g.imageContainer, n, e && g.compactImageContainer] }, t.createElement(i.Z, { "aria-label": "", aspectMode: s, image: l || a || "", onError: this._handleImageError, rounded: !l }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: a, team: l, winnerId: r } = this.props,
                                { color: n, id: i, score: d, secondaryScore: c } = l,
                                u = i === r,
                                p = !r,
                                f = a === m.D.Completed && !u && !p,
                                y = this._shouldRenderScore(),
                                w = this._getTeamScoreSize(h.SCORE),
                                C = c ? this._getTeamScoreSize(h.SECONDARY_SCORE) : void 0,
                                S = "Cricket" === e ? d?.split(" ")[0] : d;
                            return y ? t.createElement(o.Z, { style: [g.teamScore, f && g.losingTeamScore] }, t.createElement(s.ZP, { color: b(n), numberOfLines: 1, size: w, weight: "heavy" }, S), c ? t.createElement(s.ZP, { color: b(n), numberOfLines: 1, size: C, weight: "bold" }, c) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: a,
                                team: { secondaryScore: l },
                            } = this.props;
                            if (!!!l) return a ? "headline1" : "title4";
                            switch (e) {
                                case h.SCORE:
                                    return a ? "subtext2" : "body";
                                case h.SECONDARY_SCORE:
                                    return a ? "subtext3" : "subtext2";
                                default:
                                    return;
                            }
                        }),
                        (this._shouldRenderScore = () => {
                            const { gameState: e } = this.props;
                            return e === m.D.Completed || e === m.D.InProgress;
                        });
                }
                render() {
                    const {
                            fallbackColor: e,
                            isCompact: a,
                            team: { color: l },
                        } = this.props,
                        r = { backgroundColor: (l && `rgb(${l.red}, ${l.green}, ${l.blue})`) || u.default.theme.colors[e] },
                        n = this._shouldRenderScore(),
                        i = !a || !n;
                    return t.createElement(o.Z, { style: [g.root, r, a && g.compactRoot] }, this._renderImage(), i ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function b(e) {
                return e
                    ? (function (e) {
                          return (0, c.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            p.defaultProps = { isCompact: !1 };
            const g = u.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${u.default.theme.spaces.space1} + ${u.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                f = p;
            class y extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: a, gameClockPeriod: l, gameState: r, isCompact: o, startTimeMillis: i, teams: s, winnerId: d } = this.props;
                            return t.createElement(n.Z, { category: e, gameClock: a, gameClockPeriod: l, gameState: r, startTimeMillis: i, teams: s, winnerId: d, withCategory: !o });
                        }),
                        (this._renderTeamRow = (e, a) => {
                            const { category: l, gameState: r, isCompact: n, winnerId: o } = this.props,
                                { id: i } = e;
                            return t.createElement(f, { category: l, fallbackColor: a % 2 == 0 ? "gray300" : "gray700", gameState: r, isCompact: n, key: i, team: e, winnerId: o });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: a, isCompact: l, link: n, onClick: o, teams: i } = this.props;
                    if (i) {
                        const s = i && i.map(this._renderTeamRow);
                        return t.createElement(r.Z, { "aria-label": e, containerStyle: a, isCompact: l, link: n, lower: l ? void 0 : this._renderGameStatus(), onClick: o, upper: s, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            y.defaultProps = { isCompact: !1 };
        },
        854582: (e, a, l) => {
            l.d(a, { Z: () => C });
            var t = l(202784),
                r = l(111677),
                n = l.n(r),
                o = l(731708),
                i = l(470397),
                s = l(615084);
            const d = 864e5,
                c = n().ccaa970f,
                u = n().d725a289,
                m = n().db355331,
                h = n().a8428d5e,
                p = n().a7aad8ba,
                b = n().e431f1aa,
                g = n().a7391708,
                f = n().d2dbfa92,
                y = n().cd734f66,
                w = n().c8891d06;
            class C extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? t.createElement(o.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const a = new Date(parseInt(e, 10)),
                                    l = ((e) => {
                                        const a = new Date().setHours(0, 0, 0, 0),
                                            l = a + d;
                                        return e >= a && e < l ? 0 : e >= l && e < a + 1728e5 ? 1 : -1;
                                    })(a);
                                return -1 === l ? this._renderDateTime(a) : this._renderTodayTomorrow(l, a);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, a) => {
                            const l = u(a);
                            return t.createElement(i.Z, null, t.createElement(o.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? y : w), t.createElement(o.ZP, { color: "gray700", size: "subtext2" }, l));
                        }),
                        (this._renderDateTime = (e) => {
                            const a = u(e),
                                l = c(e);
                            return t.createElement(i.Z, null, t.createElement(o.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, l), t.createElement(o.ZP, { color: "gray700", size: "subtext2" }, a));
                        }),
                        (this._renderGameStateValue = (e, a) => {
                            const { gameClockPeriod: l } = this.props,
                                r = this._getWinnerName(),
                                n = e && r ? m({ team: r }) : a && l ? l : void 0;
                            return n ? t.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: a } = this.props,
                                l = e && e.find((e) => e.id === a);
                            return l && l.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: a } = this.props,
                        l = e === s.D.Scheduled,
                        r = e === s.D.InProgress,
                        n = e === s.D.Completed;
                    return t.createElement(
                        t.Fragment,
                        null,
                        l
                            ? this._renderGameScheduledDateTime()
                            : t.createElement(
                                  i.Z,
                                  null,
                                  t.createElement(
                                      o.ZP,
                                      { color: r ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case s.D.Scheduled:
                                                  return h;
                                              case s.D.InProgress:
                                                  return p;
                                              case s.D.Completed:
                                                  return b;
                                              case s.D.Postponed:
                                                  return g;
                                              case s.D.Cancelled:
                                                  return f;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(n, r),
                              ),
                        a ? this._renderCategory() : null,
                    );
                }
            }
            C.defaultProps = { withCategory: !0 };
        },
        615084: (e, a, l) => {
            l.d(a, { D: () => t });
            const t = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        784732: (e, a, l) => {
            l.r(a), l.d(a, { default: () => s });
            var t = l(202784),
                r = l(890601),
                n = l(783427),
                o = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Communities~loader.ListHandler.93648b7a.js.map
