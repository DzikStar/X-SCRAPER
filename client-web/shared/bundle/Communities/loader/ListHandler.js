"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Communities~loader.ListHandler"],
    {
        346252: (e, a, l) => {
            l.d(a, { Z: () => f });
            var r = l(202784),
                n = l(325686),
                t = l(530525),
                o = l(439592),
                i = l(682474),
                d = l(745185),
                s = l(392237),
                c = l(401388),
                u = l(250672),
                m = l(741692);
            const h = Object.freeze({ Fixed: "fixed", Variable: "variable" }),
                b = (e) => {
                    const { category: a, eventState: l, gameClock: n, gameClockPeriod: t, participants: o, startTimeMillis: i, winnerId: s } = e,
                        c = (0, u.bH)(a, l, o, t, s);
                    return r.createElement(d.Z, { "aria-label": c, category: a, containerStyle: g.scoreCardTile, gameClock: n, gameClockPeriod: t, gameState: l, isCompact: !0, startTimeMillis: i, teams: o, winnerId: s });
                },
                p = ({ isCellWithProminentSocialContext: e, type: a }) => {
                    switch (a) {
                        case h.Fixed:
                            return (e && g.fixedCellThumbnailWithProminentSocialContext) || g.fixedCellThumbnail;
                        case h.Variable:
                            return g.variableCellThumbnail;
                        default:
                            return;
                    }
                },
                g = s.default.create((e) => ({ coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, fixedCellThumbnail: { height: s.default.theme.spaces.space48, width: s.default.theme.spaces.space48 }, fixedCellThumbnailWithProminentSocialContext: { height: `calc(${s.default.theme.spaces.space48} + ${s.default.theme.spaces.space40} + ${s.default.theme.spaces.space1} + ${s.default.theme.spaces.space2})`, width: `calc(${s.default.theme.spaces.space48} + ${s.default.theme.spaces.space40} + ${s.default.theme.spaces.space1} + ${s.default.theme.spaces.space2})` }, scoreCardTile: { padding: 0 }, variableCellThumbnail: { maxHeight: `calc(${s.default.theme.spaces.space48} * 2)`, maxWidth: `calc(${s.default.theme.spaces.space48} * 2)`, minHeight: `calc(${s.default.theme.spaces.space48} + ${s.default.theme.spaces.space20})`, minWidth: `calc(${s.default.theme.spaces.space48} + ${s.default.theme.spaces.space20})`, height: "25%", width: "25%" } })),
                f = (e) => {
                    const { cropCandidates: a, dataSaverMode: l, icon: d, image: s, isCellWithProminentSocialContext: u, scoreEvent: h, type: f = "variable" } = e,
                        y = p({ isCellWithProminentSocialContext: u, type: f });
                    return r.createElement(n.Z, { style: [g.coverContainer, y] }, h ? b(h) : !s || (0, c.Z)(s) || l ? (l || (0, c.Z)(s) ? r.createElement(i.Z, { ratio: 1 }, r.createElement(m.Vm, { icon: d })) : null) : r.createElement(t.Z, { "aria-label": "", aspectMode: o.Z.SQUARE, cropCandidates: a, image: s }));
                };
        },
        53821: (e, a, l) => {
            l.d(a, { Z: () => W });
            var r = l(202784),
                n = l(325686),
                t = l(731708),
                o = l(952428),
                i = l(124964),
                d = l(642153),
                s = l(366635),
                c = l(392237),
                u = l(111677),
                m = l.n(u),
                h = l(121791),
                b = l(913973),
                p = l(443781),
                g = l(989816),
                f = l(269950),
                y = l(154003),
                D = l(678773),
                w = l(492140),
                S = l(833057),
                C = l(872788),
                k = l(71620),
                _ = l(668214),
                M = l(709318),
                I = l(601576);
            const E = (0, _.Z)()
                    .propsFromActions(() => ({ addToast: I.fz, createLocalApiErrorHandler: (0, k.zr)("TOGGLE_PIN_LIST"), pinTimeline: M.qM, unpinTimeline: M.bK }))
                    .withAnalytics(),
                P = m().c5d23126,
                v = m().j44ec610,
                A = m().d8a032a2,
                T = m().fa816a0a,
                Z = m().ac832ae4,
                x = m().cdb33880,
                F = (e) => {
                    const { addToast: a, analytics: l, couldPinList: n, createLocalApiErrorHandler: t, isListPinned: o, listId: i, mode: d, name: s, pinTimeline: c, unpinTimeline: u } = e,
                        m = r.useMemo(() => (d === f.H.Reordering ? r.createElement(D.default, null) : o ? r.createElement(w.default, null) : r.createElement(S.default, { style: n ? null : R.disabledPin })), [n, o, d]),
                        h = r.useMemo(() => {
                            if (d === f.H.Pinning) return { label: o ? v : P };
                        }, [o, d]),
                        b = r.useCallback(() => {
                            if (n || o) {
                                const e = o ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), o ? u({ id: i, name: s, type: C.FO.LIST }).catch(t) : c({ id: i, name: s, type: C.FO.LIST }).catch(t);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: A });
                        }, [a, l, n, t, o, i, s, c, u]),
                        p = r.useMemo(() => (d === f.H.Reordering ? T : o ? x : Z), [o, d]);
                    return r.createElement(y.ZP, { "aria-label": p, hoverLabel: h, icon: m, onPress: d === f.H.Pinning ? b : void 0, testID: "list-icon-button", type: "brandText" });
                },
                R = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                L = E(r.memo(F));
            var B = l(725516),
                z = l(346252),
                K = l(878162),
                H = l(845738);
            const O = "cellThumbnail",
                U = "listCell",
                N = (m().d58baa7f, m().j681933e),
                $ = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: D, listId: w, listVisibility: S, media: C, memberCount: k, membersContext: _, mode: M, name: I, onClick: E, pinnedTimelinesCount: P, role: v, user: A, withBottomBorder: T, withHoverCard: Z, withSubscribe: x = !1 } = e,
                        { featureSwitches: F } = (0, p.QZ)(),
                        R = F.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", H.F),
                        $ = !P || P < R,
                        W = `/i/lists/${w}`,
                        G = r.useCallback((e) => (e ? r.createElement(K.Z, { basePath: W, listId: w, wrapperStyle: { maxWidth: "100%" } }, e) : null), [W, w]),
                        j = r.useMemo(() => r.createElement(n.Z, { style: V.name }, r.createElement(t.ZP, { numberOfLines: 1, weight: "bold" }, I), "private" === S ? r.createElement(t.ZP, { size: "body", style: V.icon }, r.createElement(h.default, { "aria-label": N, style: V.iconLock })) : null), [S, I]),
                        Q = r.useMemo(() => r.createElement(n.Z, { style: V.thumbnailImage, testID: O }, r.createElement(z.Z, { cropCandidates: C.crop, dataSaverMode: a, icon: "lists", image: C.image, type: "fixed" })), [a, C.crop, C.image]),
                        Y = r.useMemo(() => l || (D ? r.createElement(b.default, { style: V.iconCheckmark }) : M === f.H.Reordering || M === f.H.Pinning ? r.createElement(L, { couldPinList: $, isListPinned: y, listId: w, mode: M, name: I }) : x ? r.createElement(g.Z, { isFollowing: m, isMinimal: !0, listId: w, listName: I, user: A }) : void 0), [$, l, y, m, D, w, M, I, A, x]),
                        q = (0, B.z)(),
                        X = r.useCallback(
                            (e) => {
                                q.contextualScribeNamespace.element ? q.scribeAction("click") : q.scribe({ component: "list", action: "click" }), E?.(e, { listId: w, member_count: k });
                            },
                            [q, E, w, k],
                        );
                    return r.createElement(o.Z, { "aria-checked": D, link: { pathname: W, anchorless: !0 }, onPress: X, role: v, style: [V.root, T && V.bottomBorder], testID: U }, r.createElement(n.Z, { style: V.listContainer }, r.createElement(n.Z, { style: V.leftColumn }, G(Q), r.createElement(n.Z, { style: V.listAttribution }, r.createElement(n.Z, { style: V.nameContainer }, G(j), _ ? r.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, r.createElement(i.Z, null), _) : null), c && u ? r.createElement(n.Z, { style: V.rowContainer }, r.createElement(d.Z, { style: V.facepile, userAvatarUrls: c }), r.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : A ? r.createElement(s.Z, { affiliateBadgeInfo: A.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: A.is_blue_verified, isProtected: A.protected, isVerified: A.verified, name: A.name, nameSize: "subtext2", profileImageUrl: A.profile_image_url_https, screenName: A.screen_name, screenNameSize: "subtext2", verifiedType: A.verified_type, withHoverCard: Z, withLink: !0, withScreenName: !0 }) : null)), r.createElement(n.Z, { style: V.rightColumn }, Y)));
                },
                V = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                W = r.memo($);
        },
        845738: (e, a, l) => {
            l.d(a, { F: () => r });
            l(202784);
            const r = 5;
        },
        878162: (e, a, l) => {
            l.d(a, { Z: () => h });
            var r = l(202784),
                n = l(325686),
                t = l(818199),
                o = l(392237),
                i = l(136185);
            const d = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.21"),
                        l.e("icons.16"),
                        l.e("icons.10"),
                        l.e("icons.1"),
                        l.e("icons.19"),
                        l.e("icons.0"),
                        l.e("icons.23"),
                        l.e("icons.8"),
                        l.e("icons.2"),
                        l.e("icons.9"),
                        l.e("icons.26"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        l.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
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
                        l.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                        l.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                        l.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                        l.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                        l.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                        l.e("ondemand.HoverCard"),
                    ]).then(l.bind(l, 527409)),
            });
            var s = l(521514),
                c = l(125363);
            function u(e) {
                const { basePath: a, children: l, listId: o, wrapperStyle: s } = e,
                    u = (0, c.oR)(),
                    h = r.useCallback(() => (0, i.Dd)(u.getState()), [u]);
                return r.createElement(t.Z, { renderContent: () => r.createElement(n.Z, { style: m.root }, r.createElement(d, { basePath: a, listId: o, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: h, wrapperStyle: s }, l);
            }
            const m = o.default.create((e) => ({ root: { minHeight: 130, width: s.Z.cardWidth.normal } })),
                h = r.memo(u);
        },
        741692: (e, a, l) => {
            l.d(a, { S3: () => m, nn: () => h, Vm: () => b });
            var r = l(202784),
                n = l(325686),
                t = l(366635),
                o = l(392237),
                i = l(453333),
                d = l(784732),
                s = l(689582),
                c = l(68290);
            const u = "placeholderIcon",
                m = ({ author: e, color: a = "text", size: l = "subtext2", style: n, withHoverCard: o = !0, withLink: i = !1, withScreenName: d = !1 }) => r.createElement(t.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[l], color: a, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: l, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: l, style: [p.authorUserName, n], verifiedType: e.verified_type, withHoverCard: o, withLink: i, withScreenName: d }),
                h = ({ style: e }) => r.createElement(n.Z, { style: [p.lightningBadge, e] }, r.createElement(i.default, { style: p.lightningIcon })),
                b = ({ icon: e }) => r.createElement(n.Z, { style: p.placeholderIconContainer, testID: u }, "news" === e ? r.createElement(d.default, { style: p.placeholderIcon }) : "lists" === e ? r.createElement(s.default, { style: p.placeholderIcon }) : r.createElement(c.default, { style: p.placeholderIcon })),
                p = o.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        989816: (e, a, l) => {
            l.d(a, { Z: () => y });
            var r = l(202784),
                n = l(970187),
                t = l(392237),
                o = l(379327),
                i = l(913973),
                d = l(320588),
                s = l(233391),
                c = l(288955),
                u = l(71620),
                m = l(668214),
                h = l(576469);
            const b = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: h.Z.subscribe, unfollow: h.Z.unsubscribe }))
                    .withAnalytics(),
                p = { followIcon: r.createElement(o.default, null), followingIcon: r.createElement(i.default, null) },
                g = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: t, follow: o, isFollowing: i, isMinimal: u, listId: m, listName: h, unfollow: b, user: g } = e,
                        y = r.useCallback(() => {
                            a.scribeAction("follow"), o(m).catch(l(d.lg));
                        }, [a, l, o, m]),
                        D = r.useCallback(() => {
                            a.scribeAction("unfollow"), b(m).catch(l(d.Sm));
                        }, [a, l, m, b]);
                    return r.createElement(c.Z, { customText: h, displayMode: s.BH.subscribe, userFullName: g?.name }, (e) => r.createElement(n.Z, { buttonIcons: u ? p : void 0, disabled: t, displayMode: u ? "only-icon" : void 0, isFollowing: i, onFollow: e(y), onUnfollow: e(D), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = t.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                y = b(r.memo(g));
        },
        269950: (e, a, l) => {
            l.d(a, { H: () => r });
            l(202784);
            const r = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        379873: (e, a, l) => {
            l.d(a, { z4: () => y, ZP: () => D, Dx: () => g });
            var r,
                n = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "relayListCell_list",
                    selections: [
                        { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                        (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
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
                                                { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
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
            n.hash = "a768b241795f7686944d39bc8f540980";
            const t = n;
            var o = l(202784),
                i = (l(585488), l(277660)),
                d = l.n(i),
                s = l(53821),
                c = l(161082),
                u = l(668214),
                m = l(709318),
                h = l(38562);
            const b = (0, u.Z)().propsFromState(() => ({ dataSaverMode: h.IX, pinnedTimelinesCount: m.Hm })),
                p = [],
                g = t,
                f = (e, a, l, r, n) => ({ id_str: e.id_str, name: l?.name ?? "", screen_name: l?.screen_name ?? "", profile_image_url_https: a?.image_url ?? "", protected: r?.protected ?? !1, verified: n ?? !1 }),
                y = (e) => {
                    const a = d()(g, e.listRef),
                        l = (0, c.u)(a),
                        r = a.owner_results?.result?.author,
                        n = a.owner_results?.result?.privacy,
                        t = a.owner_results?.result?.verification?.verified,
                        i = a.owner_results?.result?.avatar,
                        u = a.owner_results?.result?.core;
                    return o.createElement(s.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? p, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: r ? f(r, i, u, n, t) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                D = o.memo(b(y));
        },
        250672: (e, a, l) => {
            l.d(a, { bH: () => u });
            var r = l(111677),
                n = l.n(r),
                t = l(93074),
                o = l(810495);
            const i = n().a3484d22,
                d = n().aab2efa9,
                s = n().ba21c289,
                c = (e) => `${e.fullName || ""} ${e.score || ""}`,
                u = (e, a, l, r, n) => {
                    const u = l && n ? ((e, a) => (e && a ? e.find((e) => e.id === a) : void 0))(l, n) : void 0,
                        m = (0, t.Z)(a),
                        h = e || "",
                        b = l && l[0] ? c(l[0]) : "",
                        p = l && l[1] ? c(l[1]) : "",
                        g = r || "",
                        f = u ? d({ winner: u.fullName }) : "",
                        y = a === o.D.Completed ? (u ? f : i) : g;
                    return s({ gameCategory: h, gameState: m, accessibleGameClockPeriod: y, teamOneLabel: b, teamTwoLabel: p });
                };
        },
        161082: (e, a, l) => {
            l.d(a, { u: () => b });
            var r,
                n = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useBannerImage_list",
                    selections: [
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "custom_banner_media_results", plural: !1, selections: (r = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useBannerImage_apiMedia" }], storageKey: null }]), storageKey: null },
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: r, storageKey: null },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            n.hash = "cdbab01a2d01f274e4520afbd9ab33f4";
            const t = n;
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
            var d = l(277660),
                s = l.n(d),
                c = l(401388),
                u = l(506363);
            const m = i,
                h = (e, a = !1) => {
                    const l = s()(m, e),
                        r = l?.media_info?.original_img_height,
                        n = l?.media_info?.original_img_url,
                        t = l?.media_info?.original_img_width;
                    if (r && n && t) {
                        const e = l?.media_info?.salient_rect;
                        let o = [];
                        if (e && !(0, c.Z)(e) && !a) {
                            const { height: a, left: l, top: r, width: n } = e;
                            o = [{ x: l, y: r, w: n, h: a }];
                        }
                        return { image: { url: n, height: r, width: t }, crop: o };
                    }
                },
                b = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: l } = e,
                            r = h(a?.result),
                            n = h(l?.result, !0);
                        return r ?? n ?? void 0;
                    })(s()(t, e)) || { image: u.bU, crop: [] };
        },
        320588: (e, a, l) => {
            l.d(a, { Mt: () => h, Sm: () => m, lg: () => u });
            var r = l(111677),
                n = l.n(r),
                t = l(615656),
                o = l(601576);
            const i = n().add55942,
                d = n().ib8f5f3c,
                s = n().e20fc756,
                c = n().hae1c934,
                u = { customErrorHandler: () => (0, o.mf)({ text: i }), showToast: !0 },
                m = { customErrorHandler: () => (0, o.mf)({ text: d }), showToast: !0 },
                h = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === t.ZP.ListAdminRightsError).length) return (0, o.mf)({ text: s });
                        }
                        return (0, o.mf)({ text: c });
                    },
                    showToast: !0,
                };
        },
        93074: (e, a, l) => {
            l.d(a, { Z: () => u });
            var r = l(111677),
                n = l.n(r),
                t = l(810495);
            const o = n().f178e38c,
                i = n().b6da6b02,
                d = n().i9f615c8,
                s = n().f897267a,
                c = n().f93c4b6a,
                u = (e) => {
                    switch (e) {
                        case t.D.Scheduled:
                            return o;
                        case t.D.InProgress:
                            return i;
                        case t.D.Completed:
                            return d;
                        case t.D.Postponed:
                            return s;
                        case t.D.Cancelled:
                            return c;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, a, l) => {
            l.d(a, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        165822: (e, a, l) => {
            l.d(a, { Z: () => s });
            var r = l(202784),
                n = l(325686),
                t = l(58881),
                o = l(530732),
                i = l(392237);
            const d = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                s = ({ "aria-label": e, containerStyle: a, disabled: l, interactiveStyles: s, isCompact: c, link: u, lower: m, onClick: h, stackLayoutLowerStyle: b, stackLayoutUpperStyle: p, upper: g, withInsetFocusRing: f = !0, withInteractiveStyling: y = !1 }) => {
                    const D = s ?? t.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        w = r.createElement(r.Fragment, null, r.createElement(n.Z, { style: [d.defaultUpperContainerStyle, p, c && { height: "auto" }] }, g), m ? r.createElement(n.Z, { style: [d.defaultLowerContainerStyle, b] }, m) : null);
                    return r.createElement(o.Z, { "aria-label": e, disabled: l, interactive: y, interactiveStyles: y ? D : void 0, link: u, onClick: h, style: [d.root, a] }, w);
                };
        },
        745185: (e, a, l) => {
            l.d(a, { Z: () => y });
            var r = l(202784),
                n = l(165822),
                t = l(854582),
                o = l(325686),
                i = l(530525),
                d = l(731708),
                s = l(439592),
                c = l(626202),
                u = l(392237),
                m = l(615084);
            const h = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: a },
                            } = this.props;
                            return r.createElement(o.Z, { style: g.teamNameContainer }, r.createElement(d.ZP, { color: p(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, a));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: a, logo: l },
                                } = this.props,
                                { imageError: n } = this.state,
                                t = (!l && !a) || n ? g.translucent : {},
                                d = l ? s.Z.exact(l.width / l.height) : s.Z.SQUARE;
                            return r.createElement(o.Z, { style: [g.imageContainer, t, e && g.compactImageContainer] }, r.createElement(i.Z, { "aria-label": "", aspectMode: d, image: l || a || "", onError: this._handleImageError, rounded: !l }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: a, team: l, winnerId: n } = this.props,
                                { color: t, id: i, score: s, secondaryScore: c } = l,
                                u = i === n,
                                b = !n,
                                f = a === m.D.Completed && !u && !b,
                                y = this._shouldRenderScore(),
                                D = this._getTeamScoreSize(h.SCORE),
                                w = c ? this._getTeamScoreSize(h.SECONDARY_SCORE) : void 0,
                                S = "Cricket" === e ? s?.split(" ")[0] : s;
                            return y ? r.createElement(o.Z, { style: [g.teamScore, f && g.losingTeamScore] }, r.createElement(d.ZP, { color: p(t), numberOfLines: 1, size: D, weight: "heavy" }, S), c ? r.createElement(d.ZP, { color: p(t), numberOfLines: 1, size: w, weight: "bold" }, c) : null) : null;
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
                        n = { backgroundColor: (l && `rgb(${l.red}, ${l.green}, ${l.blue})`) || u.default.theme.colors[e] },
                        t = this._shouldRenderScore(),
                        i = !a || !t;
                    return r.createElement(o.Z, { style: [g.root, n, a && g.compactRoot] }, this._renderImage(), i ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function p(e) {
                return e
                    ? (function (e) {
                          return (0, c.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            b.defaultProps = { isCompact: !1 };
            const g = u.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${u.default.theme.spaces.space1} + ${u.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                f = b;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: a, gameClockPeriod: l, gameState: n, isCompact: o, startTimeMillis: i, teams: d, winnerId: s } = this.props;
                            return r.createElement(t.Z, { category: e, gameClock: a, gameClockPeriod: l, gameState: n, startTimeMillis: i, teams: d, winnerId: s, withCategory: !o });
                        }),
                        (this._renderTeamRow = (e, a) => {
                            const { category: l, gameState: n, isCompact: t, winnerId: o } = this.props,
                                { id: i } = e;
                            return r.createElement(f, { category: l, fallbackColor: a % 2 == 0 ? "gray300" : "gray700", gameState: n, isCompact: t, key: i, team: e, winnerId: o });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: a, isCompact: l, link: t, onClick: o, teams: i } = this.props;
                    if (i) {
                        const d = i && i.map(this._renderTeamRow);
                        return r.createElement(n.Z, { "aria-label": e, containerStyle: a, isCompact: l, link: t, lower: l ? void 0 : this._renderGameStatus(), onClick: o, upper: d, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            y.defaultProps = { isCompact: !1 };
        },
        854582: (e, a, l) => {
            l.d(a, { Z: () => w });
            var r = l(202784),
                n = l(111677),
                t = l.n(n),
                o = l(731708),
                i = l(470397),
                d = l(615084);
            const s = 864e5,
                c = t().ccaa970f,
                u = t().d725a289,
                m = t().db355331,
                h = t().a8428d5e,
                b = t().a7aad8ba,
                p = t().e431f1aa,
                g = t().a7391708,
                f = t().d2dbfa92,
                y = t().cd734f66,
                D = t().c8891d06;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? r.createElement(o.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const a = new Date(parseInt(e, 10)),
                                    l = ((e) => {
                                        const a = new Date().setHours(0, 0, 0, 0),
                                            l = a + s;
                                        return e >= a && e < l ? 0 : e >= l && e < a + 1728e5 ? 1 : -1;
                                    })(a);
                                return -1 === l ? this._renderDateTime(a) : this._renderTodayTomorrow(l, a);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, a) => {
                            const l = u(a);
                            return r.createElement(i.Z, null, r.createElement(o.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? y : D), r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, l));
                        }),
                        (this._renderDateTime = (e) => {
                            const a = u(e),
                                l = c(e);
                            return r.createElement(i.Z, null, r.createElement(o.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, l), r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, a));
                        }),
                        (this._renderGameStateValue = (e, a) => {
                            const { gameClockPeriod: l } = this.props,
                                n = this._getWinnerName(),
                                t = e && n ? m({ team: n }) : a && l ? l : void 0;
                            return t ? r.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, t) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: a } = this.props,
                                l = e && e.find((e) => e.id === a);
                            return l && l.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: a } = this.props,
                        l = e === d.D.Scheduled,
                        n = e === d.D.InProgress,
                        t = e === d.D.Completed;
                    return r.createElement(
                        r.Fragment,
                        null,
                        l
                            ? this._renderGameScheduledDateTime()
                            : r.createElement(
                                  i.Z,
                                  null,
                                  r.createElement(
                                      o.ZP,
                                      { color: n ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case d.D.Scheduled:
                                                  return h;
                                              case d.D.InProgress:
                                                  return b;
                                              case d.D.Completed:
                                                  return p;
                                              case d.D.Postponed:
                                                  return g;
                                              case d.D.Cancelled:
                                                  return f;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(t, n),
                              ),
                        a ? this._renderCategory() : null,
                    );
                }
            }
            w.defaultProps = { withCategory: !0 };
        },
        615084: (e, a, l) => {
            l.d(a, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Communities~loader.ListHandler.b6243afa.js.map
