"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-e019dbda"],
    {
        415725: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                a = r(325686),
                o = r(392237),
                l = r(822228);
            const i = "activeRoute",
                s = o.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...o.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(l.Z, t, (t) => n.createElement(a.Z, { style: t && s.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? n.createElement(a.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        334963: (e, t, r) => {
            r.d(t, { Z: () => j });
            var n = r(529149),
                a = r(202784),
                o = r(325686),
                l = (r(585488), r(277660)),
                i = r.n(l),
                s = r(310088),
                c = r(392237),
                m = r(111677),
                d = r.n(m),
                u = r(870358),
                p = r(917164),
                h = r(468651),
                b = r(732403),
                y = r(807896),
                g = r(154003),
                f = r(698891);
            const E = (e) => {
                    const { "aria-label": t, communityId: r, variant: n } = e,
                        o = f.default;
                    return a.createElement(g.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: a.createElement(o, null), link: `/i/communities/${r}/tools` }, "HeaderDetail" === n ? { style: C.button, type: "onMediaOutlined" } : { size: "large", type: "primaryText" }));
                },
                C = c.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                w = a.memo(E);
            r(136728);
            var Z = r(697916),
                v = r(688715),
                _ = r(811176),
                I = r(415506),
                S = r(178519),
                x = r(692165),
                k = r(149170),
                P = r(443781);
            const M = d().e48fbb02,
                T = d().b1614c34,
                B = (0, v.ju)("https://help.x.com/using-twitter/communities#report-community"),
                R = (0, v.ju)("https://help.x.com/using-twitter/communities"),
                A = d().j1dcedde,
                F = Z.Z,
                N = (e) => {
                    const { "aria-label": t, community: r, variant: n, viewerHasModeratorAccess: o } = e,
                        { featureSwitches: l } = (0, P.QZ)(),
                        { rest_id: s } = i()(F, r),
                        c = `/i/communities/${s}/search`,
                        m = l.isTrue("c9s_community_tweet_search_enabled"),
                        d = a.useCallback(
                            (e) => {
                                const t = [];
                                return o ? m && t.push({ text: A, Icon: S.default, link: c }) : t.push({ text: M, Icon: I.default, link: B }), t.push({ text: T, Icon: x.default, link: R }), a.createElement(_.Z, { items: t, onCloseRequested: e });
                            },
                            [m, c, o],
                        );
                    return a.createElement(g.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: a.createElement(k.default, null), renderMenu: d }, "HeaderDetail" === n ? { style: L.button, type: "primaryOutlined" } : { size: "large", type: "primaryText" }));
                },
                L = c.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                z = a.memo(N),
                H = d().h6beb5fb,
                O = d().d755f47d,
                D = d().h63a5c3c,
                $ = d().dce5e1b4,
                U = d().c5d8c93e,
                W = n.Z,
                V = (e) => {
                    const t = i()(W, e.community),
                        r = (0, p.B)(t),
                        n = (0, h.b)(t),
                        { rest_id: l, role: c } = t,
                        m = r + n,
                        d = (0, u.uA)(c),
                        y = e.variant ?? "AppBar";
                    return a.createElement(o.Z, { style: "HeaderDetail" === y ? q.headerRoot : q.root }, a.createElement(b.Z, { communityId: l }), d ? a.createElement(o.Z, null, a.createElement(w, { "aria-label": c === u.WW.Admin ? $ : U, communityId: l, variant: y }), m > 0 ? a.createElement(s.Z, { count: m, style: q.menuControlBadge, truncatedCountFormatter: H, unreadCountLabel: O, withBorder: !1 }) : null) : a.createElement(z, { "aria-label": D, community: t, variant: y, viewerHasModeratorAccess: d }));
                },
                j = a.memo(V),
                q = c.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space4 }, headerRoot: { flexDirection: "row" }, menuControlBadge: { backgroundColor: e.colors.magenta500, top: e.spacesPx.space4, end: e.spacesPx.space4 } }));
        },
        346252: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(325686),
                o = r(530525),
                l = r(439592),
                i = r(682474),
                s = r(745185),
                c = r(392237),
                m = r(401388),
                d = r(250672),
                u = r(741692);
            const p = Object.freeze({ Fixed: "fixed", Variable: "variable" }),
                h = (e) => {
                    const { category: t, eventState: r, gameClock: a, gameClockPeriod: o, participants: l, startTimeMillis: i, winnerId: c } = e,
                        m = (0, d.bH)(t, r, l, o, c);
                    return n.createElement(s.Z, { "aria-label": m, category: t, containerStyle: y.scoreCardTile, gameClock: a, gameClockPeriod: o, gameState: r, isCompact: !0, startTimeMillis: i, teams: l, winnerId: c });
                },
                b = ({ isCellWithProminentSocialContext: e, type: t }) => {
                    switch (t) {
                        case p.Fixed:
                            return (e && y.fixedCellThumbnailWithProminentSocialContext) || y.fixedCellThumbnail;
                        case p.Variable:
                            return y.variableCellThumbnail;
                        default:
                            return;
                    }
                },
                y = c.default.create((e) => ({ coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, fixedCellThumbnail: { height: c.default.theme.spaces.space48, width: c.default.theme.spaces.space48 }, fixedCellThumbnailWithProminentSocialContext: { height: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})`, width: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})` }, scoreCardTile: { padding: 0 }, variableCellThumbnail: { maxHeight: `calc(${c.default.theme.spaces.space48} * 2)`, maxWidth: `calc(${c.default.theme.spaces.space48} * 2)`, minHeight: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, minWidth: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, height: "25%", width: "25%" } })),
                g = (e) => {
                    const { cropCandidates: t, dataSaverMode: r, icon: s, image: c, isCellWithProminentSocialContext: d, scoreEvent: p, type: g = "variable" } = e,
                        f = b({ isCellWithProminentSocialContext: d, type: g });
                    return n.createElement(a.Z, { style: [y.coverContainer, f] }, p ? h(p) : !c || (0, m.Z)(c) || r ? (r || (0, m.Z)(c) ? n.createElement(i.Z, { ratio: 1 }, n.createElement(u.Vm, { icon: s })) : null) : n.createElement(o.Z, { "aria-label": "", aspectMode: l.Z.SQUARE, cropCandidates: t, image: c }));
                };
        },
        21875: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var n = r(807896),
                a = r(542327),
                o = r(202784),
                l = (r(585488), r(883229)),
                i = r(535338),
                s = r(275355),
                c = r(277660),
                m = r.n(c),
                d = r(154003),
                u = r(111677),
                p = r.n(u),
                h = r(911373);
            const b = p().b139b54a,
                y = o.createElement(h.default, null),
                g = (e) => {
                    const { community: t, ...r } = e,
                        a = m()(s.Z, t);
                    if (!a || "CommunityInvitesUnavailable" === a.invites_result.__typename) return null;
                    const l = `/i/communities/${a.rest_id}/invite`;
                    return o.createElement(d.ZP, (0, n.Z)({ "aria-label": b, icon: y, link: l, type: "primaryText" }, r));
                },
                f = o.memo(g),
                E = { context: "CommunityInviteButtonQuery" },
                C = { type: "CustomRetry", content: () => null },
                w = a.Z,
                Z = (e) => {
                    const { communityId: t, ...r } = e,
                        a = (0, i.p)(w, { communityId: t });
                    return "Community" === a.communityResults?.result?.__typename ? o.createElement(f, (0, n.Z)({ community: a.communityResults.result }, r)) : null;
                },
                v = (e) => o.createElement(l.N, { errorConfig: E, fallback: C }, o.createElement(o.Suspense, { fallback: null }, o.createElement(Z, (0, n.Z)({ communityId: e.communityId }, e)))),
                _ = o.memo(v);
        },
        338114: (e, t, r) => {
            r.d(t, { Z: () => x });
            var n = r(837981),
                a = r(202784),
                o = r(325686),
                l = (r(585488), r(277660)),
                i = r.n(l),
                s = r(392237),
                c = r(952428),
                m = r(682474),
                d = r(530525),
                u = r(439592),
                p = r(731708),
                h = r(310088),
                b = r(111677),
                y = r.n(b),
                g = r(910805),
                f = r(917164),
                E = r(468651),
                C = r(25618);
            const w = "community-thumbnail-image",
                Z = "community-thumbnail-name-container",
                v = n.Z,
                _ = () => y().c8d33380,
                I = (e) => {
                    const t = i()(v, e.community),
                        r = (0, f.B)(t) ?? 0,
                        n = (0, E.b)(t),
                        l = (0, C.c)(t),
                        { id_str: b, name: y } = t,
                        { crop: I, image: x } = (0, g.L)(t),
                        k = s.default.theme.aspectRatios.communityBanner,
                        P = r + n > 0;
                    return a.createElement(c.Z, { link: `/i/communities/${b}`, style: S.root }, a.createElement(o.Z, { style: S.container }, a.createElement(m.Z, { ratio: k }, a.createElement(d.Z, { "aria-label": "", aspectMode: u.Z.exact(k), backgroundColor: s.default.theme.colors.gray300, cropCandidates: I, image: x, testID: w })), a.createElement(o.Z, { style: S.name, testID: Z }, a.createElement(p.ZP, { align: "left", color: "text", numberOfLines: 1, size: "subtext2", weight: "bold" }, y.trim()))), (P || l) && a.createElement(h.Z, { pip: !0, style: S.pip, unreadCountLabel: _, withBorder: !0 }));
                },
                S = s.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4, marginHorizontal: e.spaces.space4, marginTop: e.spaces.space2, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, container: { width: `calc((${s.default.theme.spaces.space36} * 3) + ${s.default.theme.spaces.space24})`, borderRadius: e.borderRadii.large, overflow: "hidden", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: "100%", backgroundColor: e.colors.gray0 }, pipContainer: { position: "absolute", end: 0 }, pip: { width: e.spaces.space12, height: e.spaces.space12 } })),
                x = a.memo(I);
        },
        53821: (e, t, r) => {
            r.d(t, { Z: () => j });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                l = r(952428),
                i = r(124964),
                s = r(642153),
                c = r(366635),
                m = r(392237),
                d = r(111677),
                u = r.n(d),
                p = r(121791),
                h = r(913973),
                b = r(443781),
                y = r(989816),
                g = r(269950),
                f = r(154003),
                E = r(678773),
                C = r(492140),
                w = r(833057),
                Z = r(872788),
                v = r(71620),
                _ = r(668214),
                I = r(709318),
                S = r(601576);
            const x = (0, _.Z)()
                    .propsFromActions(() => ({ addToast: S.fz, createLocalApiErrorHandler: (0, v.zr)("TOGGLE_PIN_LIST"), pinTimeline: I.qM, unpinTimeline: I.bK }))
                    .withAnalytics(),
                k = u().c5d23126,
                P = u().j44ec610,
                M = u().d8a032a2,
                T = u().fa816a0a,
                B = u().ac832ae4,
                R = u().cdb33880,
                A = (e) => {
                    const { addToast: t, analytics: r, couldPinList: a, createLocalApiErrorHandler: o, isListPinned: l, listId: i, mode: s, name: c, pinTimeline: m, unpinTimeline: d } = e,
                        u = n.useMemo(() => (s === g.H.Reordering ? n.createElement(E.default, null) : l ? n.createElement(C.default, null) : n.createElement(w.default, { style: a ? null : F.disabledPin })), [a, l, s]),
                        p = n.useMemo(() => {
                            if (s === g.H.Pinning) return { label: l ? P : k };
                        }, [l, s]),
                        h = n.useCallback(() => {
                            if (a || l) {
                                const e = l ? "unpin_button" : "pin_button";
                                r.scribe({ element: e, action: "click" }), l ? d({ id: i, name: c, type: Z.FO.LIST }).catch(o) : m({ id: i, name: c, type: Z.FO.LIST }).catch(o);
                            } else r.scribe({ element: "unpinnable_button", action: "click" }), t({ text: M });
                        }, [t, r, a, o, l, i, c, m, d]),
                        b = n.useMemo(() => (s === g.H.Reordering ? T : l ? R : B), [l, s]);
                    return n.createElement(f.ZP, { "aria-label": b, hoverLabel: p, icon: u, onPress: s === g.H.Pinning ? h : void 0, testID: "list-icon-button", type: "brandText" });
                },
                F = m.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                N = x(n.memo(A));
            var L = r(725516),
                z = r(346252),
                H = r(374235),
                O = r(845738);
            const D = "cellThumbnail",
                $ = "listCell",
                U = (u().d58baa7f, u().j681933e),
                W = (e) => {
                    const { dataSaverMode: t, decoration: r, facepileUrls: m, followersContext: d, isFollowing: u, isListPinned: f, isSelected: E, listId: C, listVisibility: w, media: Z, memberCount: v, membersContext: _, mode: I, name: S, onClick: x, pinnedTimelinesCount: k, role: P, user: M, withBottomBorder: T, withHoverCard: B, withSubscribe: R = !1 } = e,
                        { featureSwitches: A } = (0, b.QZ)(),
                        F = A.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", O.F),
                        W = !k || k < F,
                        j = `/i/lists/${C}`,
                        q = n.useCallback((e) => (e ? n.createElement(H.Z, { basePath: j, listId: C, wrapperStyle: { maxWidth: "100%" } }, e) : null), [j, C]),
                        K = n.useMemo(() => n.createElement(a.Z, { style: V.name }, n.createElement(o.ZP, { numberOfLines: 1, weight: "bold" }, S), "private" === w ? n.createElement(o.ZP, { size: "body", style: V.icon }, n.createElement(p.default, { "aria-label": U, style: V.iconLock })) : null), [w, S]),
                        Q = n.useMemo(() => n.createElement(a.Z, { style: V.thumbnailImage, testID: D }, n.createElement(z.Z, { cropCandidates: Z.crop, dataSaverMode: t, icon: "lists", image: Z.image, type: "fixed" })), [t, Z.crop, Z.image]),
                        X = n.useMemo(() => r || (E ? n.createElement(h.default, { style: V.iconCheckmark }) : I === g.H.Reordering || I === g.H.Pinning ? n.createElement(N, { couldPinList: W, isListPinned: f, listId: C, mode: I, name: S }) : R ? n.createElement(y.Z, { isFollowing: u, isMinimal: !0, listId: C, listName: S, user: M }) : void 0), [W, r, f, u, E, C, I, S, M, R]),
                        Y = (0, L.z)(),
                        G = n.useCallback(
                            (e) => {
                                Y.contextualScribeNamespace.element ? Y.scribeAction("click") : Y.scribe({ component: "list", action: "click" }), x?.(e, { listId: C, member_count: v });
                            },
                            [Y, x, C, v],
                        );
                    return n.createElement(l.Z, { "aria-checked": E, link: { pathname: j, anchorless: !0 }, onPress: G, role: P, style: [V.root, T && V.bottomBorder], testID: $ }, n.createElement(a.Z, { style: V.listContainer }, n.createElement(a.Z, { style: V.leftColumn }, q(Q), n.createElement(a.Z, { style: V.listAttribution }, n.createElement(a.Z, { style: V.nameContainer }, q(K), _ ? n.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n.createElement(i.Z, null), _) : null), m && d ? n.createElement(a.Z, { style: V.rowContainer }, n.createElement(s.Z, { style: V.facepile, userAvatarUrls: m }), n.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, d)) : M ? n.createElement(c.Z, { affiliateBadgeInfo: M.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: M.is_blue_verified, isProtected: M.protected, isVerified: M.verified, name: M.name, nameSize: "subtext2", profileImageUrl: M.profile_image_url_https, screenName: M.screen_name, screenNameSize: "subtext2", verifiedType: M.verified_type, withHoverCard: B, withLink: !0, withScreenName: !0 }) : null)), n.createElement(a.Z, { style: V.rightColumn }, X)));
                },
                V = m.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                j = n.memo(W);
        },
        845738: (e, t, r) => {
            r.d(t, { F: () => n });
            r(202784);
            const n = 5;
        },
        374235: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(202784),
                a = r(325686),
                o = r(818199),
                l = r(392237),
                i = r(136185),
                s = r(564509),
                c = r(521514),
                m = r(125363);
            function d(e) {
                const { basePath: t, children: r, listId: l, wrapperStyle: c } = e,
                    d = (0, m.oR)(),
                    p = n.useCallback(() => (0, i.Dd)(d.getState()), [d]);
                return n.createElement(o.Z, { renderContent: () => n.createElement(a.Z, { style: u.root }, n.createElement(s.Z, { basePath: t, listId: l, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: p, wrapperStyle: c }, r);
            }
            const u = l.default.create((e) => ({ root: { minHeight: 130, width: c.Z.cardWidth.normal } })),
                p = n.memo(d);
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => u, nn: () => p, Vm: () => h });
            var n = r(202784),
                a = r(325686),
                o = r(366635),
                l = r(392237),
                i = r(453333),
                s = r(784732),
                c = r(689582),
                m = r(68290);
            const d = "placeholderIcon",
                u = ({ author: e, color: t = "text", size: r = "subtext2", style: a, withHoverCard: l = !0, withLink: i = !1, withScreenName: s = !1 }) => n.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [b.authorUserName, a], verifiedType: e.verified_type, withHoverCard: l, withLink: i, withScreenName: s }),
                p = ({ style: e }) => n.createElement(a.Z, { style: [b.lightningBadge, e] }, n.createElement(i.default, { style: b.lightningIcon })),
                h = ({ icon: e }) => n.createElement(a.Z, { style: b.placeholderIconContainer, testID: d }, "news" === e ? n.createElement(s.default, { style: b.placeholderIcon }) : "lists" === e ? n.createElement(c.default, { style: b.placeholderIcon }) : n.createElement(m.default, { style: b.placeholderIcon })),
                b = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        741049: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                a = r(202784),
                o = r(879891),
                l = r(779610),
                i = r(731708),
                s = r(415725);
            const c = (e) => {
                const { direction: t } = (0, o.Z)();
                return a.createElement(s.Z, { exact: !0, path: e.link }, (r) => {
                    const o = t;
                    return a.createElement(l.Z, (0, n.Z)({ isActive: r }, e, { label: a.createElement(i.ZP, { dir: o, testID: "rtl" === o ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        222718: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(325686),
                o = r(537392),
                l = r(10656),
                i = r(655352),
                s = r(555079),
                c = r(500002),
                m = r(625661),
                d = r(449067),
                u = r(655543),
                p = r(715601),
                h = r(392237);
            const b = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(a.Z, { style: b.fill }, n.createElement(p.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(o.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: r, screenType: a, showBackButtonOnRoot: o, showSubtitleOnRoot: l, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: m, withDetailOpen: u, ...p } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(d.Z.Configure, p), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: r, appBarStyle: o, backLocation: l, documentTitle: i, headerless: c, history: u, leftControl: p, middleControl: h, onBackClick: y, rightControl: g, screenType: f, searchBoxOptions: E, secondaryBar: C, showBackButtonOnRoot: w, showSubtitleOnRoot: Z, showSubtitleOnWideDetail: v, showTitleOnRoot: _, subtitle: I, title: S, titleIconCell: x, titleIconCellSize: k, withDetailOpen: P, withSearchBox: M, withTweetButton: T, withWideContainer: B } = this.props,
                        R = "root" === f,
                        A = "secondaryRoot" === f,
                        F = "primaryDetail" === f,
                        N = (F && v) || (R && Z),
                        L = (R && !w) || (F && e),
                        z = (R && !_) || (F && e && !_),
                        H = R ? s.ey : F ? s.vX : void 0,
                        O = n.createElement(a.Z, { style: b.appBarContainer }, n.createElement(m.ZP, { backLocation: l, fixed: !1, hideBackButton: L, history: u, leftControl: p, middleControl: h, onBackClick: y, rightControl: g, secondaryBar: C, style: o, subtitle: N ? I : void 0, title: z ? void 0 : S, titleDomId: H, titleIconCell: x, titleIconCellSize: k, withWideContainer: B })),
                        D = R || (A && P) ? null : n.createElement(d.Z.Configure, { SideNavButton: t, TabBar: r, backLocation: l, documentTitle: i, headerless: c, middleControl: h, onBackClick: y, rightControl: g, searchBoxOptions: E, subtitle: I, title: S, withSearchBox: M, withTweetButton: T });
                    return n.createElement(n.Fragment, null, D, O);
                }
            }
            (y.contextType = u.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const g = (0, c.ZP)(y);
        },
        496364: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(107267),
                o = r(791632),
                l = r(222718);
            const i = (e) => {
                const t = (0, a.useHistory)();
                return (0, o.HD)(t) ? e.children || null : n.createElement(l.Z, e);
            };
        },
        784380: (e, t, r) => {
            r.d(t, { Z: () => m });
            r(136728);
            var n = r(444770),
                a = r(202784),
                o = (r(585488), r(277660)),
                l = r.n(o),
                i = r(642153);
            const s = n.Z,
                c = ({ community: e, style: t, userAvatarSize: r = "large" }) => {
                    const n = l()(s, e),
                        { members_facepile_results: o } = n,
                        c = a.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: t }) => {
                                        if ("User" === t?.__typename) {
                                            const r = t.avatar?.image_url;
                                            r && e.push(r);
                                        }
                                        return e;
                                    }, []))(o),
                            [o],
                        );
                    return c.length > 0 ? a.createElement(i.Z, { style: t, userAvatarSize: r, userAvatarUrls: c }) : null;
                },
                m = a.memo(c);
        },
        281598: (e, t, r) => {
            r.d(t, { IN: () => n, ZC: () => a, eE: () => Z, ZP: () => g, L4: () => w });
            const n = Object.freeze({ Open: "CommunityOpenMembershipSettings", Restricted: "CommunityRestrictedMembershipSettings" }),
                a = Object.freeze({ Member: "MemberInvitesAllowed", Moderator: "ModeratorInvitesAllowed", Admin: "AdminInvitesAllowed" });
            var o = r(202784),
                l = r(731708),
                i = r(101890),
                s = r(954110),
                c = r(392237),
                m = r(111677),
                d = r.n(m);
            const u = [
                    { label: d().fd00a76a, value: n.Open, helpText: d().a0a16d38 },
                    { label: d().ce0523a8, value: n.Restricted, helpText: d().i1aad6ec },
                ],
                p = d().c85960a0,
                h = d().ca373cd2,
                b = d().dfdcc6b4,
                y = (e) => {
                    const { access: t, invitesPolicy: r } = e.state,
                        { setAccess: c, setInvitesPolicy: m } = e.setters,
                        d = !e.hideInvitePolicy,
                        y = o.useCallback(
                            (e, t) => {
                                c(t);
                            },
                            [c],
                        ),
                        g = o.useCallback(
                            (e, t) => {
                                m(t ? a.Member : a.Moderator);
                            },
                            [m],
                        );
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, { color: "gray700", size: "subtext2", style: f.settingsItem }, b), o.createElement(i.Z, { name: "membershipSetting", onChange: y, options: u, value: t }), d && t === n.Restricted && o.createElement(s.Z, { checked: r === a.Member, helpText: h, label: p, name: "allowInvites", onChange: g }));
                },
                g = o.memo(y),
                f = c.default.create((e) => ({ settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                E = { [n.Open]: a.Member, [n.Restricted]: a.Moderator },
                C = { access: n.Open, invitesPolicy: E[n.Open] };
            function w(e = C) {
                const [t, r] = o.useState(e.access),
                    [n, a] = o.useState(e.invitesPolicy),
                    l = o.useMemo(
                        () => ({
                            setAccess(e) {
                                a(E[e]), r(e);
                            },
                            setInvitesPolicy: a,
                        }),
                        [],
                    );
                return [o.useMemo(() => ({ access: t, invitesPolicy: n }), [t, n]), l];
            }
            function Z(e) {
                let t, r;
                switch (e.access) {
                    case n.Open:
                        t = "Open";
                        break;
                    case n.Restricted:
                    default:
                        t = "RestrictedJoinRequestsRequireModeratorApproval";
                }
                switch (e.invitesPolicy) {
                    case a.Moderator:
                        r = "ModeratorInvitesAllowed";
                        break;
                    case a.Member:
                        r = "MemberInvitesAllowed";
                        break;
                    case a.Admin:
                        r = "AdminInvitesAllowed";
                        break;
                    default:
                        r = "NoInvitesAllowed";
                }
                return { joinPolicy: t, invitesPolicy: r };
            }
        },
        714955: (e, t, r) => {
            r.d(t, { Z: () => ie });
            r(136728);
            var n = r(202784),
                a = r(325686),
                o = r(811176),
                l = r(420412),
                i = r(537392),
                s = r(392237),
                c = r(154003),
                m = r(247056),
                d = r(111677),
                u = r.n(d),
                p = r(511323),
                h = r(415506),
                b = r(530813),
                y = r(395067),
                g = r(731708),
                f = r(891198),
                E = r(966886),
                C = r(708852),
                w = r(673510),
                Z = r(872405),
                v = r(30899),
                _ = r(124964),
                I = r(668214),
                S = r(79685),
                x = r(919022);
            const k = (e, t) => {
                    const r = t.tweetCase?.reports;
                    return (r ? S.Z.selectMany(e, r) : []).map((t) => {
                        const r = t.user;
                        return { ...t, reporter: x.ZP.select(e, r) };
                    });
                },
                P = (0, I.Z)().propsFromState(() => ({ reports: k })),
                M = (e, t) => {
                    const r = t ? Math.max(0, e - 1) : e;
                    return (({ count: e, formattedCount: t, isAutoReportedByX: r }) => (r ? (e > 0 ? n.createElement(u().I18NFormatMessage, { $i18n: "j5602f3b" }, n.createElement(g.ZP, { color: "primary" }, u().e2bc5db0), n.createElement(g.ZP, { color: "primary" }, u().d0a1b248({ count: e, formattedCount: t }))) : n.createElement(u().I18NFormatMessage, { $i18n: "dd132edd" }, n.createElement(g.ZP, { color: "primary" }, u().cd4d48d2))) : n.createElement(u().I18NFormatMessage, { $i18n: "je0779b7" }, n.createElement(g.ZP, { color: "primary" }, u().ff0f742a({ count: e, formattedCount: t })))))({ count: r, formattedCount: f.ZP.getFormattedCount(r), isAutoReportedByX: t });
                },
                T = (e) => {
                    const { report: t, withBottomBorder: r } = e,
                        { created_at: o, reporter: l } = t,
                        i = n.createElement(E.Z, { timestamp: o }),
                        s = (0, C.Y4)();
                    return l ? n.createElement(a.Z, { style: r ? R.bottomBorder : null }, n.createElement(w.ZP, { avatarUri: l.profile_image_url_https, decoration: i, displayMode: "UserCompact", isBlueVerified: l.is_blue_verified, isProtected: l.protected, isVerified: l.verified, name: l.name, screenName: l.screen_name, style: s ? R.userCell : void 0, userId: l.id_str }), n.createElement(Z.Z, { avatarCell: null }, n.createElement(g.ZP, { color: "gray700", size: "subtext2", style: R.rule }, t.rule.name))) : null;
                },
                B = P((e) => {
                    const [t, r] = n.useState(!1),
                        { reports: o, tweetCase: l } = e,
                        { report_count: i, report_created_at_max: s } = l,
                        c = o.some((e) => "783214" === e.reporter?.id_str);
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            v.Z,
                            {
                                contentStyle: R.popover,
                                onDismiss: () => {
                                    r(!1);
                                },
                                renderContent: () =>
                                    n.createElement(
                                        a.Z,
                                        { style: R.contentContainer },
                                        o.map((e, t) => n.createElement(T, { key: e.id_str, report: e, withBottomBorder: t < o.length - 1 })),
                                    ),
                                visibilityBehavior: t ? "forceVisible" : "forceHidden",
                            },
                            n.createElement(
                                g.ZP,
                                {
                                    onPress: () => {
                                        r(!0);
                                    },
                                },
                                M(i, c),
                            ),
                        ),
                        n.createElement(_.Z, null),
                        n.createElement(E.Z, { timestamp: s }),
                    );
                }),
                R = s.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12 }, contentContainer: { paddingBottom: e.componentDimensions.gutterVertical }, popover: { maxWidth: "100%" }, userCell: { width: e.breakpoints.small }, rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
            var A = r(301758),
                F = r(491963),
                N = r(533211),
                L = r(836255);
            const z = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? L.Z.selectHydrated(e, r) : void 0;
                },
                H = (e, t) => {
                    const { tweetId: r } = t;
                    return N.Z.select(e, r);
                },
                O = (e, t) => {
                    const r = z(e, t);
                    return !!r && (0, F.n9)(e, r);
                },
                D = (0, I.Z)()
                    .propsFromState(() => ({ tweet: z, tweetCase: H, disableRemoveFromCommunity: O }))
                    .propsFromActions(() => ({ keep: N.Z.keepTweet, dismiss: N.Z.dismissTweet }));
            var $ = r(593866),
                U = r(161335),
                W = r(833458);
            const V = Object.freeze({ Hidden: "hidden", Kept: "kept" }),
                j = u().dca19c06,
                q = u().dd641764,
                K = (e) => n.createElement(g.ZP, null, e),
                Q = ({ screenName: e, type: t }) => {
                    switch (t) {
                        case V.Hidden: {
                            const t = ((e) => n.createElement(u().I18NFormatMessage, { $i18n: "a0071f71" }, e))(e),
                                r = [{ label: K(t), decoration: Y }];
                            return n.createElement($.Z, { "aria-label": j, containerStyle: X.container, items: r });
                        }
                        case V.Kept: {
                            const t = ((e) => n.createElement(u().I18NFormatMessage, { $i18n: "c4ec9d43" }, e))(e),
                                r = [{ label: K(t), decoration: G }];
                            return n.createElement($.Z, { "aria-label": q, containerStyle: X.container, items: r });
                        }
                        default:
                            return null;
                    }
                },
                X = s.default.create((e) => ({ icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                Y = n.createElement(U.default, { style: X.icon }),
                G = n.createElement(W.default, { style: X.icon }),
                J = { page: "reported_tweets", component: "tweet" },
                ee = u().f1d9930c,
                te = u().a219e218,
                re = u().fa524058,
                ne = u().hb21cdb6,
                ae = u().g30bc699,
                oe = u().dc7a9436,
                le = u().a51d671b,
                ie = D((e) => {
                    const { dismiss: t, keep: r, tweet: d, tweetCase: u, tweetId: g } = e,
                        f = d?.user?.screen_name,
                        E = d?.community_id_str,
                        C = d?.user?.id_str,
                        w = n.useCallback(
                            (t) => {
                                if (d && f) {
                                    const r = [
                                        { text: ae({ screenName: f }), Icon: p.default, link: `/${f}` },
                                        {
                                            text: oe,
                                            Icon: h.default,
                                            link: { pathname: `/i/report/${y.C2.Tweet}/${d.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: J } },
                                            onClick: () => {
                                                t();
                                            },
                                        },
                                    ];
                                    return (
                                        !e.disableRemoveFromCommunity &&
                                            C &&
                                            E &&
                                            r.push({
                                                text: le({ screenName: f }),
                                                Icon: b.default,
                                                link: { pathname: `/i/report/${y.C2.RemoveCommunityMember}/${C}?community_id=${E}`, state: { clientReferer: window.location.pathname, scribeNamespace: J } },
                                                onClick: () => {
                                                    t();
                                                },
                                            }),
                                        n.createElement(o.Z, { items: r, onCloseRequested: t })
                                    );
                                }
                                return null;
                            },
                            [d, f, E, C, e.disableRemoveFromCommunity],
                        ),
                        Z = () => {
                            r(g);
                        },
                        v = () => {
                            t(g);
                        };
                    if (f && d?.reportingVisibility === y.az.HiddenCommunityTweet) return n.createElement(n.Fragment, null, n.createElement(Q, { screenName: f, type: V.Hidden }), n.createElement(l.Z, null));
                    if (u?.isDismissed || "community_tweet_member_removed" === d?.limited_actions) return null;
                    if (f && u?.isKept) return n.createElement(n.Fragment, null, n.createElement(Q, { screenName: f, type: V.Kept }), n.createElement(l.Z, null));
                    if (!u) return null;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            a.Z,
                            { style: se.container },
                            n.createElement(a.Z, { style: se.reportsBar }, n.createElement(B, { tweetCase: u }), n.createElement(m.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: w, style: se.menu })),
                            n.createElement(A.Z, { tweetId: g }),
                            d
                                ? n.createElement(i.ZP, null, ({ containerHeight: t, containerWidth: r }) => {
                                      const o = r <= s.default.theme.breakpoints.small;
                                      return n.createElement(a.Z, { style: [se.buttons, o && se.buttonsMobile] }, n.createElement(c.ZP, { onPress: Z, size: "large", style: [se.button, o && se.buttonMobile], type: "primaryOutlined" }, re), n.createElement(c.ZP, { link: { pathname: `/i/report/${y.C2.HideCommunityTweet}/${g}`, state: { scribeNamespace: { ...J, action: "hide_tweet" } } }, size: "large", style: [se.button, o && se.buttonMobile], type: "primaryOutlined" }, ee), !e.disableRemoveFromCommunity && C && E ? n.createElement(c.ZP, { link: { pathname: `/i/report/${y.C2.RemoveCommunityMember}/${C}?community_id=${E}`, state: { clientReferer: window.location.pathname, scribeNamespace: J } }, size: "large", style: [se.button, o && se.buttonMobile], type: "primaryOutlined" }, ne) : null);
                                  })
                                : n.createElement(a.Z, { style: se.buttons }, n.createElement(c.ZP, { onPress: v, style: se.button, type: "primaryOutlined" }, te)),
                        ),
                        n.createElement(l.Z, null),
                    );
                }),
                se = s.default.create((e) => ({ buttons: { flexDirection: "row", marginVertical: e.spaces.space16 }, buttonsMobile: { justifyContent: "space-between" }, button: { marginEnd: e.spaces.space12 }, buttonMobile: { flex: 1 }, container: { marginHorizontal: e.spaces.space20 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, menu: { marginStart: "auto" }, reportsBar: { marginVertical: e.spaces.space16, flexDirection: "row" } }));
        },
        399037: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                a = r(325686),
                o = r(844685),
                l = r(30183),
                i = r(392237),
                s = r(111677),
                c = r.n(s),
                m = r(699910),
                d = r(724328),
                u = r(71620),
                p = r(668214),
                h = r(491963);
            const b = (e, t) => {
                    const r = t.communityId;
                    return r ? h.ZP.select(e, r) : void 0;
                },
                y = (0, p.Z)()
                    .propsFromState(() => ({ community: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("COMMUNITY_RULES"), fetchCommunityIfNeeded: h.ZP.fetchOneIfNeeded })),
                g = c().d228a9a0;
            class f extends n.Component {
                componentDidMount() {
                    const { communityId: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: r } = this.props;
                    r(e).catch(t());
                }
                render() {
                    const { community: e, communityId: t, moderatorArea: r } = this.props;
                    if (!e || 0 === e.rules.length) return null;
                    const { name: i, rules: s } = e,
                        c = r ? s.length : 5;
                    return n.createElement(a.Z, null, n.createElement(o.Z, { text: (0, d.E)({ communityName: i }) }), n.createElement(m.Z, { badgeStyle: E.badgeStyle, limit: c, ruleContainerStyle: E.ruleContainerStyle, rules: s, withHeader: !1 }), s.length > c && n.createElement(l.Z, { link: `/i/communities/${t}/rules`, text: g, withBottomRadius: !0 }));
                }
            }
            const E = i.default.create((e) => ({ badgeStyle: { marginEnd: e.spaces.space12 }, ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: "normal" } })),
                C = y(f);
        },
        979227: (e, t, r) => {
            r.d(t, { Z: () => G });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                l = r(811176),
                i = r(124964),
                s = r(966886),
                c = r(247056),
                m = r(40610),
                d = r(420412),
                u = r(392237),
                p = r(111677),
                h = r.n(p),
                b = r(648539),
                y = r(775042),
                g = r(492140),
                f = r(963879),
                E = r(511323),
                C = r(297938),
                w = r(369676),
                Z = r(323265),
                v = r(125363),
                _ = r(601576),
                I = r(301758),
                S = r(668214),
                x = r(815252),
                k = r(836255);
            const P = (e, t) => {
                    const { logIdentifier: r } = t,
                        n = x.Z.select(e, r),
                        a = n?.tweet_ref_results?.result?.rest_id;
                    return a ? k.Z.selectHydrated(e, a) : void 0;
                },
                M = (e, t) => {
                    const { logIdentifier: r } = t;
                    return x.Z.select(e, r);
                },
                T = (0, S.Z)()
                    .propsFromState(() => ({ tweet: P, moderationLog: M }))
                    .propsFromActions(() => ({ setShowRevertedDialog: x.Z.setShowRevertedDialog }));
            var B = r(282863),
                R = (r(585488), r(351743)),
                A = r.n(R),
                F = r(154003),
                N = r(833458);
            const L = h().f6530972,
                z = h().j68fc824,
                H = h().j9541e18,
                O = B.Z,
                D = (e) => {
                    const { communityId: t, isAlreadyReverted: r, isRevertLog: o, logIdentifier: l, onRevertError: i, setShowRevertedDialog: s, shouldShowRevertedDialog: c, userScreenName: m } = e,
                        [d] = A()(O),
                        u = n.useCallback(() => {
                            d({
                                variables: { logIdentifier: l },
                                onCompleted(e) {
                                    s(l);
                                },
                                updater(e, t) {},
                                onError: i,
                            });
                        }, [d, l, i, s]);
                    return c || o || r ? n.createElement(a.Z, { style: $.buttons }, n.createElement(F.ZP, { icon: n.createElement(N.default, null), size: "small", style: $.button, type: "secondaryFilled" }, z), n.createElement(F.ZP, { link: `/i/communities/${t}/search/?q=(from:${m})`, size: "small", style: $.button, type: "primaryOutlined" }, H)) : n.createElement(a.Z, { style: $.buttons }, n.createElement(F.ZP, { onPress: u, size: "small", style: $.button, type: "primaryOutlined" }, L), n.createElement(F.ZP, { link: `/i/communities/${t}/search/?q=(from:${m})`, size: "small", style: $.button, type: "primaryOutlined" }, H));
                },
                $ = u.default.create((e) => ({ buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space4, marginBottom: e.spaces.space4 }, button: { alignSelf: "flex-start", flex: 1, marginEnd: e.spaces.space1, marginStart: e.spaces.space1 } })),
                U = h().e32e7e1a,
                W = h().ab5a91a4,
                V = h().b53fb7c6,
                j = h().c546ba07,
                q = h().h4516e4f,
                K = h().j4d4a809,
                Q = h().ja589ea5,
                X = h().c904a2ff,
                Y = h().b43358cf,
                G = T((e) => {
                    const t = Z.ZP.isWebView(),
                        r = (0, v.I0)(),
                        { communityId: u, moderationLog: p, setShowRevertedDialog: S, tweet: x } = e,
                        k = p?.id,
                        P = p?.should_show_reverted_dialog ?? !1,
                        M = p?.action_timestamp,
                        T = p?.moderator_log_type,
                        B = p?.moderator_ref_results?.result,
                        R = p?.tweet_ref_results?.result,
                        A = p?.reverted_moderator_ref_results?.result,
                        F = !0 === p?.is_revert_log,
                        N = "TweetHidden" === T,
                        L = "TweetPinned" === T,
                        z = "TweetUnpinned" === T,
                        H = R?.rest_id,
                        O = null != x,
                        $ = R?.core?.user_results?.result?.core?.screen_name,
                        G = R?.core?.user_results?.result?.core?.name || W,
                        ee = B?.core?.name || U,
                        te = B?.core?.screen_name,
                        re = te ? `/${te}` : null,
                        ne = p?.rule_ref?.name,
                        ae = re ? n.createElement(h().I18NFormatMessage, { $i18n: "b160df39" }, n.createElement(o.ZP, { link: re }, h().bb6299a7({ moderatorName: ee }))) : K({ moderatorName: ee }),
                        oe = re ? n.createElement(h().I18NFormatMessage, { $i18n: "h1513297" }, n.createElement(o.ZP, { link: re }, h().f0347599({ moderatorName: ee }))) : X({ moderatorName: ee }),
                        le = re ? n.createElement(h().I18NFormatMessage, { $i18n: "e523e9f1" }, n.createElement(o.ZP, { link: re }, h().e33d133b({ moderatorName: ee }))) : Y({ moderatorName: ee }),
                        ie = null != A?.core?.screen_name,
                        se = A?.core?.name || U,
                        ce = A?.core?.screen_name,
                        me = ce ? `/${ce}` : null,
                        de = me ? n.createElement(h().I18NFormatMessage, { $i18n: "g93119e7" }, n.createElement(o.ZP, { link: me }, h().c29ec092({ revertedModeratorName: se }))) : Q({ revertedModeratorName: se }),
                        ue = n.createElement(n.Fragment, null, F ? n.createElement(n.Fragment, null, n.createElement(y.default, { style: J.topIconStyle }), n.createElement(o.ZP, { style: J.topMessageStyle }, de)) : n.createElement(n.Fragment, null, n.createElement(b.default, { style: J.topIconStyle }), n.createElement(o.ZP, { style: J.topMessageStyle }, ae))),
                        pe = n.createElement(n.Fragment, null, n.createElement(g.default, { style: J.topIconStyle }), n.createElement(o.ZP, { style: J.topMessageStyle }, oe)),
                        he = n.createElement(n.Fragment, null, n.createElement(f.default, { style: J.topIconStyle }), n.createElement(o.ZP, { style: J.topMessageStyle }, le)),
                        be = n.useCallback(
                            (e) => {
                                if ($ && u) {
                                    const t = [
                                        { text: j({ userName: G }), Icon: E.default, link: `/${$}` },
                                        { text: q({ userName: G }), Icon: C.default, link: `/i/communities/${u}/search/?q=(from:${$})` },
                                    ];
                                    return n.createElement(l.Z, { items: t, onCloseRequested: e });
                                }
                                return null;
                            },
                            [u, $, G],
                        ),
                        ye = n.useCallback(() => {
                            r((0, _.fz)({ text: V }));
                        }, [r]),
                        ge = n.createElement(
                            a.Z,
                            null,
                            N &&
                                k &&
                                u &&
                                H &&
                                O &&
                                $ &&
                                n.createElement(D, {
                                    communityId: u,
                                    isAlreadyReverted: ie,
                                    isRevertLog: F,
                                    logIdentifier: k,
                                    onRevertError: ye,
                                    setShowRevertedDialog: (e) => {
                                        S(e);
                                    },
                                    shouldShowRevertedDialog: P,
                                    tweetId: H,
                                    userName: G,
                                    userScreenName: $,
                                }),
                        );
                    return null == p || null == u ? null : n.createElement(a.Z, { style: J.container }, n.createElement(n.Fragment, null, N && H && n.createElement(n.Fragment, null, n.createElement("div", { style: J.topDividerPostStyle }, ue, n.createElement(i.Z, null), n.createElement(s.Z, { timestamp: Number(M) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: be, style: J.menu })), n.createElement(I.Z, { tweetId: H }), ne && n.createElement(m.Z.Custom, { Icon: w.default, "aria-live": "polite", backgroundColor: "gray100", style: J.communityRuleStyle, text: ne }), ge, n.createElement(d.Z, null)), L && H && n.createElement(n.Fragment, null, n.createElement("div", { style: J.topDividerPostStyle }, pe, n.createElement(i.Z, null), n.createElement(s.Z, { timestamp: Number(M) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: be, style: J.menu })), n.createElement(I.Z, { tweetId: H }), n.createElement(d.Z, null)), z && H && n.createElement(n.Fragment, null, n.createElement("div", { style: J.topDividerPostStyle }, he, n.createElement(i.Z, null), n.createElement(s.Z, { timestamp: Number(M) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: be, style: J.menu }), "/>"), n.createElement(I.Z, { tweetId: H }), n.createElement(d.Z, null))));
                }),
                J = u.default.create((e) => ({ menu: { marginStart: "auto", marginEnd: 2 }, actioned: { flexDirection: "row" }, bottomText: { marginTop: e.spaces.space12 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { marginEnd: e.spaces.space16, marginStart: e.spaces.space16 }, topDividerPostStyle: { display: "flex", alignItems: "center", marginTop: 8, marginBottom: 12 }, topIconStyle: { marginStart: 4 }, topMessageStyle: { marginStart: 6 }, communityRuleStyle: { marginTop: 1 } }));
        },
        449950: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(807896),
                a = r(202784),
                o = r(530525),
                l = r(659651),
                i = r(111677),
                s = r.n(i),
                c = r(632658);
            const m = "image",
                d = s().f93bb3ee;
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: i, shouldShowAltLabel: s, ...c } = this.props;
                            return a.createElement(a.Fragment, null, a.createElement(o.Z, (0, n.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: m })), s ? a.createElement(l.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return a.createElement(c.Z, { acceptLabel: d, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        25704: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                a = r(529356),
                o = r(111677),
                l = r.n(o),
                i = r(621416),
                s = r(443781);
            const c = l().j24c37b2,
                m = ({ Content: e, contentStyle: t, actionLabel: r = c, flag: o, graphic: l, graphicDisplayMode: m, headline: d, isFullHeightOnMobile: u, enableMaskForDismiss: p, onAction: h, onClose: b, onSecondaryAction: y, secondaryActionLabel: g, supportUrl: f, subtext: E, withCloseButton: C, shouldShowForLoggedOut: w = !1, shouldAddEducationFlagOnClose: Z = !0, shouldAddEducationFlagOnSecondary: v = !0, shouldAddEducationFlagOnPrimary: _ = !0 }) => {
                    const { loggedInUserId: I } = n.useContext(s.rC),
                        [S, x] = (0, i.m)(o),
                        k = n.useCallback(
                            (e) => {
                                _ && x(), h && h(e);
                            },
                            [x, h, _],
                        ),
                        P = n.useCallback(() => {
                            Z && x(), b && b();
                        }, [x, Z, b]),
                        M = n.useCallback(
                            (e) => {
                                v && x(), y && y(e);
                            },
                            [x, y, v],
                        );
                    if (!S || (!I && !w)) return null;
                    return n.createElement(a.Z, { actionLabel: r, contentStyle: t, enableMaskForDismiss: p, graphic: l, graphicDisplayMode: m || "none", headline: d, isFullHeightOnMobile: u, onAction: k, onClose: P, onSecondaryAction: M, secondaryActionLabel: g, subtext: E, supportUrl: f, withCloseButton: C }, e ? n.createElement(e, null) : null);
                },
                d = n.memo(m);
        },
        856522: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                a = r(9410),
                o = r(202784),
                l = (r(585488), r(277660)),
                i = r.n(l),
                s = r(23134);
            function c({ user: e, ...t }) {
                const r = i()(a.Z, e),
                    l = o.useMemo(() => (r ? { id_str: r.rest_id, screen_name: r.core?.screen_name || "", name: r.core?.name || "", follow_request_sent: r.legacy?.follow_request_sent || !1, protected: r.privacy?.protected || !1, following: r.relationship_perspectives?.following || !1, followed_by: r.relationship_perspectives?.followed_by || !1, super_following: r.super_following || void 0, super_follow_eligible: r.super_follow_eligible || void 0, super_followed_by: r.super_followed_by || void 0, blocking: r.relationship_perspectives?.blocking || void 0, highlightedLabel: r.affiliates_highlighted_label?.label ? { userLabelType: r.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [r]);
                return o.createElement(s.C, (0, n.Z)({}, t, { isRelay: !0, user: l, userId: r?.rest_id ?? "" }));
            }
        },
        253558: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(154003),
                o = r(111677),
                l = r.n(o),
                i = r(71620),
                s = r(668214),
                c = r(92098),
                m = r(299226);
            const d = (e, t) => (t.communityId && t.userId ? c.Z.select(e, `${t.communityId}_${t.userId}`) : void 0),
                u = (0, s.Z)()
                    .propsFromState(() => ({ inviteActionResult: d }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("INVITE_TO_COMMUNITY_BUTTON"), inviteToCommunity: m.tV })),
                p = l().cd133486,
                h = l().hb1e378e,
                b = l().bcd6bb0e,
                y = "primaryFilled";
            const g = u(function (e) {
                const { communityId: t, createLocalApiErrorHandler: r, inviteActionResult: o, inviteToCommunity: l, onInvite: i, onInviteActionResultChange: s, userId: c, viewerInvited: m } = e,
                    d = (function (e) {
                        if (!e || "UserCommunityInviteAction" === e.__typename) return p;
                        switch (e.reason) {
                            case "UserIsMember":
                                return b;
                            case "UserIsInvited":
                                return h;
                            default:
                                return p;
                        }
                    })(o),
                    u = (function (e) {
                        return e && "UserCommunityInviteAction" !== e.__typename ? ("UserIsMember" === e.reason ? y : "primaryOutlined") : y;
                    })(o);
                n.useEffect(() => {
                    o && s(c, o);
                }, [o, c, s]);
                const g = "UserCommunityInviteAction" === o?.__typename;
                return !g && !m
                    ? null
                    : n.createElement(
                          a.ZP,
                          {
                              "aria-label": d,
                              disabled: !g,
                              onPress: () => {
                                  g &&
                                      l(t, c)
                                          .then(() => i && i(c))
                                          .catch(r());
                              },
                              size: "small",
                              type: u,
                          },
                          d,
                      );
            });
        },
        269950: (e, t, r) => {
            r.d(t, { H: () => n });
            r(202784);
            const n = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        358869: (e, t, r) => {
            r.d(t, { z4: () => y, ZP: () => g, Dx: () => h });
            var n = r(424250),
                a = r(202784),
                o = (r(585488), r(277660)),
                l = r.n(o),
                i = r(53821),
                s = r(268260),
                c = r(668214),
                m = r(709318),
                d = r(38562);
            const u = (0, c.Z)().propsFromState(() => ({ dataSaverMode: d.IX, pinnedTimelinesCount: m.Hm })),
                p = [],
                h = n.Z,
                b = (e, t, r, n, a) => ({ id_str: e.id_str, name: r?.name ?? "", screen_name: r?.screen_name ?? "", profile_image_url_https: t?.image_url ?? "", protected: n?.protected ?? !1, verified: a ?? !1 }),
                y = (e) => {
                    const t = l()(h, e.listRef),
                        r = (0, s.u)(t),
                        n = t.owner_results?.result?.author,
                        o = t.owner_results?.result?.privacy,
                        c = t.owner_results?.result?.verification?.verified,
                        m = t.owner_results?.result?.avatar,
                        d = t.owner_results?.result?.core;
                    return a.createElement(i.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls ?? p, followersContext: t.followers_context ?? "", isFollowing: Boolean(t.following), isListPinned: Boolean(t.pinning), isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode?.toLowerCase() ?? "public", media: r, memberCount: t.member_count ?? 0, membersContext: t.members_context ?? "", mode: e.mode, name: t.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: n ? b(n, m, d, o, c) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                g = a.memo(u(y));
        },
        301758: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                a = r(202784),
                o = r(235902),
                l = r(521288),
                i = r(401388),
                s = r(988566),
                c = r(725516),
                m = r(443781),
                d = r(71620),
                u = r(668214),
                p = r(491963),
                h = r(836255);
            const b = (e, t) => t.tweetId,
                y = (e, t) => {
                    const r = t.tweetId,
                        n = r && h.Z.select(e, r);
                    return n ? (0, p.z0)(e, n) : void 0;
                },
                g = (0, u.Z)()
                    .propsFromState(() => ({ community: y, hydratedTweet: h.Z.createHydratedTweetSelector(b) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: r, hydratedTweet: d, onAvatarClick: u, onMediaClick: p, onPress: h, onScreenNameClick: b, tweetId: y, withBirdwatchPivot: g = !0, ...f }) => {
                    const { featureSwitches: E, viewerUserId: C } = a.useContext(m.rC),
                        w = (0, c.z)(),
                        Z = d?.community_id_str;
                    a.useEffect(() => {
                        Z && (0, i.Z)(e) && r(Z).catch(t());
                    }, [e, Z, t, r]);
                    const v = a.useCallback(
                            (e) => {
                                w.scribeAction("click"), h && h(e);
                            },
                            [h, w],
                        ),
                        _ = !!g,
                        I = d && (0, s.D$)(d, C, e),
                        S = I && (0, s.rl)(I);
                    return a.createElement(o.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => E.isTrue("responsive_web_edit_tweet_enabled") || E.isTrue("subscriptions_feature_labs_1004") } }, a.createElement(l.Z, (0, n.Z)({}, f, { loggedInUserId: C, onAvatarClick: u, onMediaClick: p, onPress: v, onScreenNameClick: b, shouldShowAltLabelAlways: !0, socialContextProps: S, tweet: d, withBirdwatchPivot: _ })));
                });
        },
        250672: (e, t, r) => {
            r.d(t, { bH: () => d });
            var n = r(111677),
                a = r.n(n),
                o = r(93074),
                l = r(810495);
            const i = a().a3484d22,
                s = a().aab2efa9,
                c = a().ba21c289,
                m = (e) => `${e.fullName || ""} ${e.score || ""}`,
                d = (e, t, r, n, a) => {
                    const d = r && a ? ((e, t) => (e && t ? e.find((e) => e.id === t) : void 0))(r, a) : void 0,
                        u = (0, o.Z)(t),
                        p = e || "",
                        h = r && r[0] ? m(r[0]) : "",
                        b = r && r[1] ? m(r[1]) : "",
                        y = n || "",
                        g = d ? s({ winner: d.fullName }) : "",
                        f = t === l.D.Completed ? (d ? g : i) : y;
                    return c({ gameCategory: p, gameState: u, accessibleGameClockPeriod: f, teamOneLabel: h, teamTwoLabel: b });
                };
        },
        26232: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                a = r(555874),
                o = r(111677),
                l = r.n(o),
                i = r(290402),
                s = r(965245),
                c = r(71620),
                m = r(668214);
            const d = (e, t) => t.module.selectFetchStatus(e),
                u = (e, t) => t.module.selectItems(e),
                p = (0, m.Z)()
                    .propsFromState((e) => ({ fetchStatus: d, items: u }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = l().i9028824,
                b = (e) => e,
                y = (e) => (t) => e(t.item);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: o, onScrollEnd: l, renderer: i, withoutHeadroom: c } = this.props;
                            return !t || o < 1 ? null : 1 === o ? n.createElement(s.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: b, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: l, renderer: i, withoutHeadroom: c }) : n.createElement(a.Z, { ListEmptyComponent: r, data: t, keyExtractor: b, numColumns: o, renderItem: y(i) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: r, fetchIfNeeded: n } = this.props;
                            (e ? r : n)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: r } = this.props;
                    return t ? n.createElement(i.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            g.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const f = p(g);
        },
        703738: (e, t, r) => {
            r.d(t, { z: () => l });
            var n = r(323265),
                a = r(655352),
                o = r(952793);
            const l = () => (0, o.hC)("rweb_sourcemap_migration") && (0, a.ZP)() && !n.ZP.isMobileOS();
        },
        268260: (e, t, r) => {
            r.d(t, { u: () => d });
            var n = r(903039),
                a = r(220070),
                o = (r(585488), r(277660)),
                l = r.n(o),
                i = r(401388),
                s = r(506363);
            const c = a.Z,
                m = (e, t = !1) => {
                    const r = l()(c, e),
                        n = r?.media_info?.original_img_height,
                        a = r?.media_info?.original_img_url,
                        o = r?.media_info?.original_img_width;
                    if (n && a && o) {
                        const e = r?.media_info?.salient_rect;
                        let l = [];
                        if (e && !(0, i.Z)(e) && !t) {
                            const { height: t, left: r, top: n, width: a } = e;
                            l = [{ x: r, y: n, w: a, h: t }];
                        }
                        return { image: { url: a, height: n, width: o }, crop: l };
                    }
                },
                d = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: t, default_banner_media_results: r } = e,
                            n = m(t?.result),
                            a = m(r?.result, !0);
                        return n ?? a ?? void 0;
                    })(l()(n.Z, e)) || { image: s.bU, crop: [] };
        },
        621416: (e, t, r) => {
            r.d(t, { m: () => o });
            r(890103);
            var n = r(202784),
                a = r(175698);
            function o(e) {
                const t = (0, a.A)();
                return [
                    !!t && !t.flags[e],
                    n.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-e019dbda.ac2caf2a.js.map
