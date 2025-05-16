"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler"],
    {
        424250: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "relayListCell_list",
                    selections: [
                        { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                        (n = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
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
                                                { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, n, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
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
            r.hash = "a3aa9cb9151cc508dfd8bc74b8f3ccde";
            const t = r;
        },
        220070: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n = {
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
            const r = n;
        },
        903039: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useBannerImage_list",
                    selections: [
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "custom_banner_media_results", plural: !1, selections: (n = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useBannerImage_apiMedia" }], storageKey: null }]), storageKey: null },
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: n, storageKey: null },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "cdbab01a2d01f274e4520afbd9ab33f4";
            const t = r;
        },
        53821: (e, a, l) => {
            l.d(a, { Z: () => W });
            var n = l(202784),
                r = l(325686),
                t = l(731708),
                i = l(952428),
                o = l(124964),
                d = l(642153),
                s = l(366635),
                c = l(392237),
                u = l(674132),
                m = l.n(u),
                h = l(121791),
                b = l(913973),
                g = l(443781),
                p = l(989816),
                f = l(269950),
                y = l(154003),
                D = l(678773),
                w = l(492140),
                M = l(833057),
                k = l(872788),
                v = l(71620),
                _ = l(668214),
                S = l(709318),
                Z = l(601576);
            const C = (0, _.Z)()
                    .propsFromActions(() => ({ addToast: Z.fz, createLocalApiErrorHandler: (0, v.zr)("TOGGLE_PIN_LIST"), pinTimeline: S.qM, unpinTimeline: S.bK }))
                    .withAnalytics(),
                I = m().c5d23126,
                P = m().j44ec610,
                A = m().d8a032a2,
                E = m().fa816a0a,
                F = m().ac832ae4,
                T = m().cdb33880,
                L = (e) => {
                    const { addToast: a, analytics: l, couldPinList: r, createLocalApiErrorHandler: t, isListPinned: i, listId: o, mode: d, name: s, pinTimeline: c, unpinTimeline: u } = e,
                        m = n.useMemo(() => (d === f.H.Reordering ? n.createElement(D.default, null) : i ? n.createElement(w.default, null) : n.createElement(M.default, { style: r ? null : x.disabledPin })), [r, i, d]),
                        h = n.useMemo(() => {
                            if (d === f.H.Pinning) return { label: i ? P : I };
                        }, [i, d]),
                        b = n.useCallback(() => {
                            if (r || i) {
                                const e = i ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), i ? u({ id: o, name: s, type: k.FO.LIST }).catch(t) : c({ id: o, name: s, type: k.FO.LIST }).catch(t);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: A });
                        }, [a, l, r, t, i, o, s, c, u]),
                        g = n.useMemo(() => (d === f.H.Reordering ? E : i ? T : F), [i, d]);
                    return n.createElement(y.ZP, { "aria-label": g, hoverLabel: h, icon: m, onPress: d === f.H.Pinning ? b : void 0, testID: "list-icon-button", type: "brandText" });
                },
                x = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                B = C(n.memo(L));
            var K = l(725516),
                R = l(346252),
                z = l(374235),
                H = l(845738);
            const N = "cellThumbnail",
                U = "listCell",
                O = (m().d58baa7f, m().j681933e),
                V = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: D, listId: w, listVisibility: M, media: k, memberCount: v, membersContext: _, mode: S, name: Z, onClick: C, pinnedTimelinesCount: I, role: P, user: A, withBottomBorder: E, withHoverCard: F, withSubscribe: T = !1 } = e,
                        { featureSwitches: L } = (0, g.QZ)(),
                        x = L.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", H.F),
                        V = !I || I < x,
                        W = `/i/lists/${w}`,
                        $ = n.useCallback((e) => (e ? n.createElement(z.Z, { basePath: W, listId: w, wrapperStyle: { maxWidth: "100%" } }, e) : null), [W, w]),
                        G = n.useMemo(() => n.createElement(r.Z, { style: j.name }, n.createElement(t.ZP, { numberOfLines: 1, weight: "bold" }, Z), "private" === M ? n.createElement(t.ZP, { size: "body", style: j.icon }, n.createElement(h.default, { "aria-label": O, style: j.iconLock })) : null), [M, Z]),
                        X = n.useMemo(() => n.createElement(r.Z, { style: j.thumbnailImage, testID: N }, n.createElement(R.Z, { cropCandidates: k.crop, dataSaverMode: a, icon: "lists", image: k.image, type: "fixed" })), [a, k.crop, k.image]),
                        Q = n.useMemo(() => l || (D ? n.createElement(b.default, { style: j.iconCheckmark }) : S === f.H.Reordering || S === f.H.Pinning ? n.createElement(B, { couldPinList: V, isListPinned: y, listId: w, mode: S, name: Z }) : T ? n.createElement(p.Z, { isFollowing: m, isMinimal: !0, listId: w, listName: Z, user: A }) : void 0), [V, l, y, m, D, w, S, Z, A, T]),
                        q = (0, K.z)(),
                        J = n.useCallback(
                            (e) => {
                                q.contextualScribeNamespace.element ? q.scribeAction("click") : q.scribe({ component: "list", action: "click" }), C?.(e, { listId: w, member_count: v });
                            },
                            [q, C, w, v],
                        );
                    return n.createElement(i.Z, { "aria-checked": D, link: { pathname: W, anchorless: !0 }, onPress: J, role: P, style: [j.root, E && j.bottomBorder], testID: U }, n.createElement(r.Z, { style: j.listContainer }, n.createElement(r.Z, { style: j.leftColumn }, $(X), n.createElement(r.Z, { style: j.listAttribution }, n.createElement(r.Z, { style: j.nameContainer }, $(G), _ ? n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n.createElement(o.Z, null), _) : null), c && u ? n.createElement(r.Z, { style: j.rowContainer }, n.createElement(d.Z, { style: j.facepile, userAvatarUrls: c }), n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : A ? n.createElement(s.Z, { affiliateBadgeInfo: A.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: A.is_blue_verified, isProtected: A.protected, isVerified: A.verified, name: A.name, nameSize: "subtext2", profileImageUrl: A.profile_image_url_https, screenName: A.screen_name, screenNameSize: "subtext2", verifiedType: A.verified_type, withHoverCard: F, withLink: !0, withScreenName: !0 }) : null)), n.createElement(r.Z, { style: j.rightColumn }, Q)));
                },
                j = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                W = n.memo(V);
        },
        845738: (e, a, l) => {
            l.d(a, { F: () => n });
            l(202784);
            const n = 5;
        },
        374235: (e, a, l) => {
            l.d(a, { Z: () => h });
            var n = l(202784),
                r = l(325686),
                t = l(818199),
                i = l(392237),
                o = l(136185),
                d = l(564509),
                s = l(521514),
                c = l(125363);
            function u(e) {
                const { basePath: a, children: l, listId: i, wrapperStyle: s } = e,
                    u = (0, c.oR)(),
                    h = n.useCallback(() => (0, o.Dd)(u.getState()), [u]);
                return n.createElement(t.Z, { renderContent: () => n.createElement(r.Z, { style: m.root }, n.createElement(d.Z, { basePath: a, listId: i, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: h, wrapperStyle: s }, l);
            }
            const m = i.default.create((e) => ({ root: { minHeight: 130, width: s.Z.cardWidth.normal } })),
                h = n.memo(u);
        },
        989816: (e, a, l) => {
            l.d(a, { Z: () => y });
            var n = l(202784),
                r = l(970187),
                t = l(392237),
                i = l(379327),
                o = l(913973),
                d = l(320588),
                s = l(233391),
                c = l(288955),
                u = l(71620),
                m = l(668214),
                h = l(576469);
            const b = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: h.Z.subscribe, unfollow: h.Z.unsubscribe }))
                    .withAnalytics(),
                g = { followIcon: n.createElement(i.default, null), followingIcon: n.createElement(o.default, null) },
                p = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: t, follow: i, isFollowing: o, isMinimal: u, listId: m, listName: h, unfollow: b, user: p } = e,
                        y = n.useCallback(() => {
                            a.scribeAction("follow"), i(m).catch(l(d.lg));
                        }, [a, l, i, m]),
                        D = n.useCallback(() => {
                            a.scribeAction("unfollow"), b(m).catch(l(d.Sm));
                        }, [a, l, m, b]);
                    return n.createElement(c.Z, { customText: h, displayMode: s.BH.subscribe, userFullName: p?.name }, (e) => n.createElement(r.Z, { buttonIcons: u ? g : void 0, disabled: t, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(y), onUnfollow: e(D), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = t.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                y = b(n.memo(p));
        },
        269950: (e, a, l) => {
            l.d(a, { H: () => n });
            l(202784);
            const n = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        358869: (e, a, l) => {
            l.d(a, { z4: () => p, ZP: () => f, Dx: () => b });
            var n = l(424250),
                r = l(202784),
                t = (l(585488), l(277660)),
                i = l.n(t),
                o = l(53821),
                d = l(268260),
                s = l(668214),
                c = l(709318),
                u = l(38562);
            const m = (0, s.Z)().propsFromState(() => ({ dataSaverMode: u.IX, pinnedTimelinesCount: c.Hm })),
                h = [],
                b = n.Z,
                g = (e, a, l) => ({ id_str: e.id_str, name: e?.name ?? "", screen_name: e?.screen_name ?? "", profile_image_url_https: e?.profile_image_url_https ?? "", protected: a?.protected ?? !1, verified: l ?? !1 }),
                p = (e) => {
                    const a = i()(b, e.listRef),
                        l = (0, d.u)(a),
                        n = a.owner_results?.result?.author,
                        t = a.owner_results?.result?.privacy,
                        s = a.owner_results?.result?.verification?.verified;
                    return r.createElement(o.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? h, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: n ? g(n, t, s) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                f = r.memo(m(p));
        },
        631449: (e, a, l) => {
            l.r(a), l.d(a, { default: () => T });
            var n = l(459643),
                r = l(942893),
                t = l(351322),
                i = l(807896),
                o = {
                    argumentDefinitions: [{ kind: "RootArgument", name: "isListMemberTargetUserId" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "ListCell_timelineTwitterList",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "List",
                            kind: "LinkedField",
                            name: "list",
                            plural: !1,
                            selections: [
                                { alias: "isMember", args: [{ kind: "Variable", name: "user_id", variableName: "isListMemberTargetUserId" }], kind: "ScalarField", name: "is_member", storageKey: null },
                                { args: null, kind: "FragmentSpread", name: "relayListCell_list" },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "TimelineTwitterList",
                    abstractKey: null,
                    hash: "7e7a19762022f1028b747f9ce5709ceb",
                };
            const d = o;
            var s = l(202784),
                c = (l(585488), l(277660)),
                u = l.n(c),
                m = l(952793),
                h = l(576469),
                b = l(281743),
                g = l(53821),
                p = l(668214),
                f = l(709318),
                y = l(38562),
                D = l(919022),
                w = l(510588);
            const M = (e, a) => (a.listId ? h.Z.select(e, a.listId) : void 0),
                k = (e, a) => {
                    const l = M(e, a),
                        n = l?.user;
                    return n ? D.ZP.select(e, n) : void 0;
                },
                v = (e, a) => w.tt(e, a.listId);
            const _ = (0, p.Z)().propsFromState(() => ({ list: M, author: k, dataSaverMode: y.IX, pinnedTimelinesCount: f.Hm, media: v }))(function (e) {
                    const { list: a, onClick: l } = e;
                    return a ? s.createElement(g.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls, followersContext: a.followers_context, isFollowing: Boolean(a.following), isListPinned: a.pinning, isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode, media: e.media, memberCount: a.member_count, membersContext: a.members_context, mode: e.mode, name: a.name, onClick: l, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                S = s.memo(_);
            var Z = l(269950),
                C = l(358869);
            const I = ({ entry: e, feedbackItems: a, module: l, renderEntry: n, shouldDisplayPin: r, ...t }) => {
                    const o = r ? Z.H.Pinning : void 0;
                    return e.itemContentRef ? s.createElement(E, (0, i.Z)({}, t, { itemContentRef: e.itemContentRef, mode: o })) : s.createElement(F, (0, i.Z)({}, t, { itemContent: e.content, mode: o }));
                },
                P = s.memo(I),
                A = d,
                E = ({ itemContentRef: e, shouldDisplayPin: a, ...l }) => {
                    const n = u()(A, e);
                    return s.createElement(C.ZP, (0, i.Z)({}, l, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                F = ({ itemContent: e, mode: a, shouldDisplayPin: l, ...n }) => {
                    const r = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        t = s.useMemo(() => (0, b.D9)(C.Dx, h.Z, e.id), [e.id]);
                    return r ? s.createElement(C.ZP, (0, i.Z)({ isMember: e.isMember, listRef: t, mode: a }, n)) : s.createElement(S, (0, i.Z)({ isMember: e.isMember, listId: e.id, mode: a }, n));
                },
                T = (e) =>
                    t
                        .iH({
                            component: P,
                            isFocusable: (0, n.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: a } = e.content;
                                return r.Z.forList(a);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, a, l) => {
            l.r(a), l.d(a, { default: () => j });
            var n = l(459643),
                r = l(942893),
                t = l(351322),
                i = l(202784),
                o = l(952793),
                d = l(576469),
                s = l(281743),
                c = l(325686),
                u = l(952428),
                m = l(731708),
                h = l(392237),
                b = l(674132),
                g = l.n(b),
                p = l(121791),
                f = l(346252),
                y = l(374235),
                D = l(725516);
            const w = g().j681933e,
                M = (e) => {
                    const { dataSaverMode: a, isPrivate: l, listId: n, media: r, name: t } = e,
                        o = (0, D.z)(),
                        d = `/i/lists/${n}`,
                        s = i.useCallback(() => {
                            o.scribeAction("click");
                        }, [o]);
                    return i.createElement(y.Z, { basePath: d, listId: n }, i.createElement(u.Z, { link: d, onPress: s, style: k.root }, i.createElement(f.Z, { cropCandidates: r.crop, dataSaverMode: a, icon: "lists", image: r.image }), i.createElement(c.Z, { style: k.name }, i.createElement(m.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, t ? t.trim() : null), l ? i.createElement(p.default, { "aria-label": w, style: k.iconLock }) : null)));
                },
                k = h.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                v = i.memo(M);
            var _ = l(668214),
                S = l(38562),
                Z = l(510588);
            const C = (e, a) => a.entry.content.id,
                I = (e, a) => d.Z.select(e, C(0, a)),
                P = (e, a) => Z.tt(e, C(0, a)),
                A = (0, _.Z)()
                    .propsFromState(() => ({ listId: C, list: I, dataSaverMode: S.IX, media: P }))
                    .adjustStateProps(({ dataSaverMode: e, list: a, listId: l, media: n }) => ({ name: a?.name, isPrivate: "private" === a?.mode, listId: l, dataSaverMode: e, media: n }))
                    .withAnalytics();
            var E = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "relayListTile_list",
                selections: [
                    { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "useBannerImage_list" },
                ],
                type: "List",
                abstractKey: null,
                hash: "542fe456d2a5eac6598eb3b9371343be",
            };
            const F = E;
            var T = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const L = T;
            l(585488);
            var x = l(277660),
                B = l.n(x),
                K = l(268260);
            const R = L,
                z = ({ dataSaverMode: e, listRef: a }) => {
                    const l = B()(R, a).list;
                    return i.createElement(U, { dataSaverMode: e, list: l });
                },
                H = i.memo(z),
                N = F,
                U = (e) => {
                    const a = B()(N, e.list),
                        l = (0, K.u)(a);
                    return i.createElement(v, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === a.mode, listId: a.id_str, media: l, name: a.name || "" });
                },
                O = (e) => {
                    const { dataSaverMode: a, entry: l, listId: n } = e,
                        { itemContentRef: r } = l,
                        t = (0, o.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = i.useMemo(() => (0, s.D9)(N, d.Z, n), [n]);
                    if (r) return i.createElement(H, { dataSaverMode: a, listRef: r });
                    if (t) return i.createElement(U, { dataSaverMode: a, list: c });
                    {
                        const { isPrivate: l, media: r, name: t } = e;
                        return i.createElement(v, { dataSaverMode: a, isPrivate: l, listId: n, media: r, name: t });
                    }
                },
                V = A(i.memo(O)),
                j = t
                    .iH({
                        component: V,
                        isFocusable: (0, n.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: a } = e.content;
                            return r.Z.forList(a);
                        },
                        shouldDisplayBorder: (0, n.Z)(!1),
                    })
                    .getHandler();
        },
        268260: (e, a, l) => {
            l.d(a, { u: () => u });
            var n = l(903039),
                r = l(220070),
                t = (l(585488), l(277660)),
                i = l.n(t),
                o = l(401388),
                d = l(506363);
            const s = r.Z,
                c = (e, a = !1) => {
                    const l = i()(s, e),
                        n = l?.media_info?.original_img_height,
                        r = l?.media_info?.original_img_url,
                        t = l?.media_info?.original_img_width;
                    if (n && r && t) {
                        const e = l?.media_info?.salient_rect;
                        let i = [];
                        if (e && !(0, o.Z)(e) && !a) {
                            const { height: a, left: l, top: n, width: r } = e;
                            i = [{ x: l, y: n, w: r, h: a }];
                        }
                        return { image: { url: r, height: n, width: t }, crop: i };
                    }
                },
                u = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: l } = e,
                            n = c(a?.result),
                            r = c(l?.result, !0);
                        return n ?? r ?? void 0;
                    })(i()(n.Z, e)) || { image: d.bU, crop: [] };
        },
        564509: (e, a, l) => {
            l.d(a, { Z: () => n });
            l(202784);
            const n = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.23"),
                        l.e("icons.16"),
                        l.e("icons.2"),
                        l.e("icons.10"),
                        l.e("icons.19"),
                        l.e("icons.24"),
                        l.e("icons.17"),
                        l.e("icons.21"),
                        l.e("icons.18"),
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
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
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
                        l.e("ondemand.HoverCard-6107ac1a"),
                        l.e("ondemand.HoverCard-9f4db315"),
                        l.e("ondemand.HoverCard-63cb1cc4"),
                    ]).then(l.bind(l, 527409)),
            });
        },
        320588: (e, a, l) => {
            l.d(a, { Mt: () => h, Sm: () => m, lg: () => u });
            var n = l(674132),
                r = l.n(n),
                t = l(615656),
                i = l(601576);
            const o = r().add55942,
                d = r().ib8f5f3c,
                s = r().e20fc756,
                c = r().hae1c934,
                u = { customErrorHandler: () => (0, i.mf)({ text: o }), showToast: !0 },
                m = { customErrorHandler: () => (0, i.mf)({ text: d }), showToast: !0 },
                h = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === t.ZP.ListAdminRightsError).length) return (0, i.mf)({ text: s });
                        }
                        return (0, i.mf)({ text: c });
                    },
                    showToast: !0,
                };
        },
        286e3: (e, a, l) => {
            l.d(a, { Rc: () => m, nx: () => s });
            var n = l(499627),
                r = l(576469),
                t = l(390387);
            const i = "rweb.channelsTimelineBehavior",
                o = "channelsTimelineBehavior",
                d = Object.freeze({});
            const s = (e) => e[o],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: c }),
                m =
                    ({ listId: e, useRanked: a }) =>
                    (l, n, { userPersistence: t }) => {
                        const o = n(),
                            d = { ...s(o), [e]: { useRanked: a } };
                        l(u(d));
                        const c = r.Z.select(o, e);
                        return c && c.following ? t.get(i).then((l) => t.set(i, { ...l, [e]: { useRanked: a } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [o]: function (e = d, a) {
                        return a && a.type === c ? { ...a.payload } : e;
                    },
                },
                () =>
                    (e, a, { userPersistence: l }) =>
                        (0, t.Qb)(a())
                            ? l.get(i).then((a) => {
                                  a && e(u(a));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, a, l) => {
            l.d(a, { $5: () => u, By: () => f, DV: () => M, Fz: () => g, Ge: () => D, Ns: () => S, Wy: () => b, _g: () => v, ax: () => y, cx: () => p, l1: () => k, tt: () => _, xh: () => h });
            var n = l(614983),
                r = l.n(n),
                t = l(842799),
                i = l(286e3),
                o = l(576469),
                d = l(919022),
                s = l(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const l = b(e, a),
                        n = y(e, a),
                        r = D(e, a);
                    return l ? `/i/lists/${l}` : n && r ? `/${n}/lists/${r}` : "";
                },
                m = (e, a) => a.match.params.listId || void 0,
                h = (e, a) => {
                    const l = a.match.params.listId;
                    return r()(l, "listId should always be specified"), l;
                },
                b = (e, a) =>
                    m(0, a) ||
                    ((e, a) => {
                        const l = g(e, a);
                        return l && l.id_str;
                    })(e, a),
                g = (e, a) => {
                    const l = m(0, a);
                    return l ? o.Z.select(e, l) : o.Z.selectByKey(e, w(e, a));
                },
                p = (e, a) => {
                    const l = g(e, a);
                    return l && l.following;
                },
                f = (e, a) => {
                    const l = g(e, a);
                    return l && l.name;
                },
                y = (e, a) => {
                    const l = m(0, a);
                    return a.match.params.screenName || void 0 || (l && o.Z.selectListAuthorScreenName(e, l));
                },
                D = (e, a) => {
                    const l = g(e, a);
                    return a.match.params.slug || (l && l.slug);
                },
                w = (e, a) => {
                    const l = a.match.params.slug,
                        n = a.match.params.screenName;
                    return l && n ? (0, t.Z)(n, l) : "";
                },
                M = (e, a) => {
                    const l =
                        b(e, a) ||
                        ((e, a) => {
                            const l = D(e, a),
                                n = y(e, a);
                            return l && n ? (0, t.Z)(n, l) : "";
                        })(e, a);
                    return o.Z.selectFetchStatus(e, l) || s.ZP.NONE;
                },
                k = (e, a) => {
                    const l = y(e, a);
                    return l ? d.ZP.selectByScreenName(e, l) : void 0;
                },
                v = (e, a) => {
                    const l = b(e, a),
                        n = (0, i.nx)(e);
                    return (l && n[l] && n[l].useRanked) || !1;
                },
                _ = (e, a) => {
                    const l = o.Z.select(e, a);
                    if (l) {
                        const e = l.customBanner;
                        return e || l.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                S = (e, a) => {
                    const l = g(e, a);
                    return l?.mode;
                };
        },
        642153: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                r = l(325686),
                t = l(392237),
                i = l(823161);
            const o = (e) => {
                    const { borderColor: a = "cellBackground", borderWidth: l = "small", style: o, userAvatarSize: s = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        m = c.length,
                        h = "transparent" === a;
                    return n.createElement(
                        r.Z,
                        { style: [d.root, o, { height: i.default.getSizeStyle(s)?.height }] },
                        c.map((e, r) => n.createElement(i.default, { backgroundColor: a, borderColor: a, borderWidth: h ? "none" : l, key: r, size: s, style: [0 !== r && { marginStart: -1 * t.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                d = t.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, a, l) => {
            l.d(a, { Z: () => o });
            l(136728);
            var n = l(202784),
                r = l(325686),
                t = l(124964),
                i = l(392237);
            const o = ({ children: e, color: a = "gray700", size: l, style: i }) => {
                    const o = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const r = o.length;
                            e && (r > 0 && o.push(n.createElement(t.Z, { color: a, key: `middot-${r}`, size: l })), o.push(e));
                        }),
                        o.length ? n.createElement(r.Z, { style: [d.middotGroup, i] }, o) : null
                    );
                },
                d = i.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        971657: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
        678773: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
        98440: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.8fc3a36a.js.map
