"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler"],
    {
        424250: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                t = {
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
                                                { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
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
            t.hash = "a768b241795f7686944d39bc8f540980";
            const r = t;
        },
        220070: (e, a, l) => {
            l.d(a, { Z: () => t });
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
            const t = n;
        },
        903039: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                t = {
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
            t.hash = "cdbab01a2d01f274e4520afbd9ab33f4";
            const r = t;
        },
        53821: (e, a, l) => {
            l.d(a, { Z: () => W });
            var n = l(202784),
                t = l(325686),
                r = l(731708),
                i = l(952428),
                o = l(124964),
                s = l(642153),
                d = l(366635),
                c = l(392237),
                u = l(111677),
                m = l.n(u),
                b = l(121791),
                h = l(913973),
                g = l(443781),
                p = l(989816),
                f = l(269950),
                y = l(154003),
                w = l(678773),
                D = l(492140),
                k = l(833057),
                M = l(872788),
                S = l(71620),
                v = l(668214),
                _ = l(709318),
                C = l(601576);
            const Z = (0, v.Z)()
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, S.zr)("TOGGLE_PIN_LIST"), pinTimeline: _.qM, unpinTimeline: _.bK }))
                    .withAnalytics(),
                A = m().c5d23126,
                I = m().j44ec610,
                E = m().d8a032a2,
                F = m().fa816a0a,
                P = m().ac832ae4,
                T = m().cdb33880,
                L = (e) => {
                    const { addToast: a, analytics: l, couldPinList: t, createLocalApiErrorHandler: r, isListPinned: i, listId: o, mode: s, name: d, pinTimeline: c, unpinTimeline: u } = e,
                        m = n.useMemo(() => (s === f.H.Reordering ? n.createElement(w.default, null) : i ? n.createElement(D.default, null) : n.createElement(k.default, { style: t ? null : x.disabledPin })), [t, i, s]),
                        b = n.useMemo(() => {
                            if (s === f.H.Pinning) return { label: i ? I : A };
                        }, [i, s]),
                        h = n.useCallback(() => {
                            if (t || i) {
                                const e = i ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), i ? u({ id: o, name: d, type: M.FO.LIST }).catch(r) : c({ id: o, name: d, type: M.FO.LIST }).catch(r);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: E });
                        }, [a, l, t, r, i, o, d, c, u]),
                        g = n.useMemo(() => (s === f.H.Reordering ? F : i ? T : P), [i, s]);
                    return n.createElement(y.ZP, { "aria-label": g, hoverLabel: b, icon: m, onPress: s === f.H.Pinning ? h : void 0, testID: "list-icon-button", type: "brandText" });
                },
                x = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                B = Z(n.memo(L));
            var K = l(725516),
                R = l(346252),
                H = l(374235),
                z = l(845738);
            const N = "cellThumbnail",
                U = "listCell",
                V = (m().d58baa7f, m().j681933e),
                O = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: w, listId: D, listVisibility: k, media: M, memberCount: S, membersContext: v, mode: _, name: C, onClick: Z, pinnedTimelinesCount: A, role: I, user: E, withBottomBorder: F, withHoverCard: P, withSubscribe: T = !1 } = e,
                        { featureSwitches: L } = (0, g.QZ)(),
                        x = L.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", z.F),
                        O = !A || A < x,
                        W = `/i/lists/${D}`,
                        $ = n.useCallback((e) => (e ? n.createElement(H.Z, { basePath: W, listId: D, wrapperStyle: { maxWidth: "100%" } }, e) : null), [W, D]),
                        G = n.useMemo(() => n.createElement(t.Z, { style: j.name }, n.createElement(r.ZP, { numberOfLines: 1, weight: "bold" }, C), "private" === k ? n.createElement(r.ZP, { size: "body", style: j.icon }, n.createElement(b.default, { "aria-label": V, style: j.iconLock })) : null), [k, C]),
                        X = n.useMemo(() => n.createElement(t.Z, { style: j.thumbnailImage, testID: N }, n.createElement(R.Z, { cropCandidates: M.crop, dataSaverMode: a, icon: "lists", image: M.image, type: "fixed" })), [a, M.crop, M.image]),
                        Q = n.useMemo(() => l || (w ? n.createElement(h.default, { style: j.iconCheckmark }) : _ === f.H.Reordering || _ === f.H.Pinning ? n.createElement(B, { couldPinList: O, isListPinned: y, listId: D, mode: _, name: C }) : T ? n.createElement(p.Z, { isFollowing: m, isMinimal: !0, listId: D, listName: C, user: E }) : void 0), [O, l, y, m, w, D, _, C, E, T]),
                        q = (0, K.z)(),
                        J = n.useCallback(
                            (e) => {
                                q.contextualScribeNamespace.element ? q.scribeAction("click") : q.scribe({ component: "list", action: "click" }), Z?.(e, { listId: D, member_count: S });
                            },
                            [q, Z, D, S],
                        );
                    return n.createElement(i.Z, { "aria-checked": w, link: { pathname: W, anchorless: !0 }, onPress: J, role: I, style: [j.root, F && j.bottomBorder], testID: U }, n.createElement(t.Z, { style: j.listContainer }, n.createElement(t.Z, { style: j.leftColumn }, $(X), n.createElement(t.Z, { style: j.listAttribution }, n.createElement(t.Z, { style: j.nameContainer }, $(G), v ? n.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n.createElement(o.Z, null), v) : null), c && u ? n.createElement(t.Z, { style: j.rowContainer }, n.createElement(s.Z, { style: j.facepile, userAvatarUrls: c }), n.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : E ? n.createElement(d.Z, { affiliateBadgeInfo: E.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: E.is_blue_verified, isProtected: E.protected, isVerified: E.verified, name: E.name, nameSize: "subtext2", profileImageUrl: E.profile_image_url_https, screenName: E.screen_name, screenNameSize: "subtext2", verifiedType: E.verified_type, withHoverCard: P, withLink: !0, withScreenName: !0 }) : null)), n.createElement(t.Z, { style: j.rightColumn }, Q)));
                },
                j = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                W = n.memo(O);
        },
        845738: (e, a, l) => {
            l.d(a, { F: () => n });
            l(202784);
            const n = 5;
        },
        374235: (e, a, l) => {
            l.d(a, { Z: () => b });
            var n = l(202784),
                t = l(325686),
                r = l(818199),
                i = l(392237),
                o = l(136185),
                s = l(564509),
                d = l(521514),
                c = l(125363);
            function u(e) {
                const { basePath: a, children: l, listId: i, wrapperStyle: d } = e,
                    u = (0, c.oR)(),
                    b = n.useCallback(() => (0, o.Dd)(u.getState()), [u]);
                return n.createElement(r.Z, { renderContent: () => n.createElement(t.Z, { style: m.root }, n.createElement(s.Z, { basePath: a, listId: i, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: b, wrapperStyle: d }, l);
            }
            const m = i.default.create((e) => ({ root: { minHeight: 130, width: d.Z.cardWidth.normal } })),
                b = n.memo(u);
        },
        989816: (e, a, l) => {
            l.d(a, { Z: () => y });
            var n = l(202784),
                t = l(970187),
                r = l(392237),
                i = l(379327),
                o = l(913973),
                s = l(320588),
                d = l(233391),
                c = l(288955),
                u = l(71620),
                m = l(668214),
                b = l(576469);
            const h = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: b.Z.subscribe, unfollow: b.Z.unsubscribe }))
                    .withAnalytics(),
                g = { followIcon: n.createElement(i.default, null), followingIcon: n.createElement(o.default, null) },
                p = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: r, follow: i, isFollowing: o, isMinimal: u, listId: m, listName: b, unfollow: h, user: p } = e,
                        y = n.useCallback(() => {
                            a.scribeAction("follow"), i(m).catch(l(s.lg));
                        }, [a, l, i, m]),
                        w = n.useCallback(() => {
                            a.scribeAction("unfollow"), h(m).catch(l(s.Sm));
                        }, [a, l, m, h]);
                    return n.createElement(c.Z, { customText: b, displayMode: d.BH.subscribe, userFullName: p?.name }, (e) => n.createElement(t.Z, { buttonIcons: u ? g : void 0, disabled: r, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(y), onUnfollow: e(w), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = r.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                y = h(n.memo(p));
        },
        269950: (e, a, l) => {
            l.d(a, { H: () => n });
            l(202784);
            const n = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        358869: (e, a, l) => {
            l.d(a, { z4: () => p, ZP: () => f, Dx: () => h });
            var n = l(424250),
                t = l(202784),
                r = (l(585488), l(277660)),
                i = l.n(r),
                o = l(53821),
                s = l(268260),
                d = l(668214),
                c = l(709318),
                u = l(38562);
            const m = (0, d.Z)().propsFromState(() => ({ dataSaverMode: u.IX, pinnedTimelinesCount: c.Hm })),
                b = [],
                h = n.Z,
                g = (e, a, l, n, t) => ({ id_str: e.id_str, name: l?.name ?? "", screen_name: l?.screen_name ?? "", profile_image_url_https: a?.image_url ?? "", protected: n?.protected ?? !1, verified: t ?? !1 }),
                p = (e) => {
                    const a = i()(h, e.listRef),
                        l = (0, s.u)(a),
                        n = a.owner_results?.result?.author,
                        r = a.owner_results?.result?.privacy,
                        d = a.owner_results?.result?.verification?.verified,
                        c = a.owner_results?.result?.avatar,
                        u = a.owner_results?.result?.core;
                    return t.createElement(o.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? b, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: n ? g(n, c, u, r, d) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                f = t.memo(m(p));
        },
        631449: (e, a, l) => {
            l.r(a), l.d(a, { default: () => T });
            var n = l(459643),
                t = l(942893),
                r = l(351322),
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
            const s = o;
            var d = l(202784),
                c = (l(585488), l(277660)),
                u = l.n(c),
                m = l(952793),
                b = l(576469),
                h = l(281743),
                g = l(53821),
                p = l(668214),
                f = l(709318),
                y = l(38562),
                w = l(919022),
                D = l(510588);
            const k = (e, a) => (a.listId ? b.Z.select(e, a.listId) : void 0),
                M = (e, a) => {
                    const l = k(e, a),
                        n = l?.user;
                    return n ? w.ZP.select(e, n) : void 0;
                },
                S = (e, a) => D.tt(e, a.listId);
            const v = (0, p.Z)().propsFromState(() => ({ list: k, author: M, dataSaverMode: y.IX, pinnedTimelinesCount: f.Hm, media: S }))(function (e) {
                    const { list: a, onClick: l } = e;
                    return a ? d.createElement(g.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls, followersContext: a.followers_context, isFollowing: Boolean(a.following), isListPinned: a.pinning, isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode, media: e.media, memberCount: a.member_count, membersContext: a.members_context, mode: e.mode, name: a.name, onClick: l, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                _ = d.memo(v);
            var C = l(269950),
                Z = l(358869);
            const A = ({ entry: e, feedbackItems: a, module: l, renderEntry: n, shouldDisplayPin: t, ...r }) => {
                    const o = t ? C.H.Pinning : void 0;
                    return e.itemContentRef ? d.createElement(F, (0, i.Z)({}, r, { itemContentRef: e.itemContentRef, mode: o })) : d.createElement(P, (0, i.Z)({}, r, { itemContent: e.content, mode: o }));
                },
                I = d.memo(A),
                E = s,
                F = ({ itemContentRef: e, shouldDisplayPin: a, ...l }) => {
                    const n = u()(E, e);
                    return d.createElement(Z.ZP, (0, i.Z)({}, l, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                P = ({ itemContent: e, mode: a, shouldDisplayPin: l, ...n }) => {
                    const t = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        r = d.useMemo(() => (0, h.D9)(Z.Dx, b.Z, e.id), [e.id]);
                    return t ? d.createElement(Z.ZP, (0, i.Z)({ isMember: e.isMember, listRef: r, mode: a }, n)) : d.createElement(_, (0, i.Z)({ isMember: e.isMember, listId: e.id, mode: a }, n));
                },
                T = (e) =>
                    r
                        .iH({
                            component: I,
                            isFocusable: (0, n.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: a } = e.content;
                                return t.Z.forList(a);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, a, l) => {
            l.r(a), l.d(a, { default: () => j });
            var n = l(459643),
                t = l(942893),
                r = l(351322),
                i = l(202784),
                o = l(952793),
                s = l(576469),
                d = l(281743),
                c = l(325686),
                u = l(952428),
                m = l(731708),
                b = l(392237),
                h = l(111677),
                g = l.n(h),
                p = l(121791),
                f = l(346252),
                y = l(374235),
                w = l(725516);
            const D = g().j681933e,
                k = (e) => {
                    const { dataSaverMode: a, isPrivate: l, listId: n, media: t, name: r } = e,
                        o = (0, w.z)(),
                        s = `/i/lists/${n}`,
                        d = i.useCallback(() => {
                            o.scribeAction("click");
                        }, [o]);
                    return i.createElement(y.Z, { basePath: s, listId: n }, i.createElement(u.Z, { link: s, onPress: d, style: M.root }, i.createElement(f.Z, { cropCandidates: t.crop, dataSaverMode: a, icon: "lists", image: t.image }), i.createElement(c.Z, { style: M.name }, i.createElement(m.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, r ? r.trim() : null), l ? i.createElement(p.default, { "aria-label": D, style: M.iconLock }) : null)));
                },
                M = b.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                S = i.memo(k);
            var v = l(668214),
                _ = l(38562),
                C = l(510588);
            const Z = (e, a) => a.entry.content.id,
                A = (e, a) => s.Z.select(e, Z(0, a)),
                I = (e, a) => C.tt(e, Z(0, a)),
                E = (0, v.Z)()
                    .propsFromState(() => ({ listId: Z, list: A, dataSaverMode: _.IX, media: I }))
                    .adjustStateProps(({ dataSaverMode: e, list: a, listId: l, media: n }) => ({ name: a?.name, isPrivate: "private" === a?.mode, listId: l, dataSaverMode: e, media: n }))
                    .withAnalytics();
            var F = {
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
            const P = F;
            var T = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const L = T;
            l(585488);
            var x = l(277660),
                B = l.n(x),
                K = l(268260);
            const R = L,
                H = ({ dataSaverMode: e, listRef: a }) => {
                    const l = B()(R, a).list;
                    return i.createElement(U, { dataSaverMode: e, list: l });
                },
                z = i.memo(H),
                N = P,
                U = (e) => {
                    const a = B()(N, e.list),
                        l = (0, K.u)(a);
                    return i.createElement(S, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === a.mode, listId: a.id_str, media: l, name: a.name || "" });
                },
                V = (e) => {
                    const { dataSaverMode: a, entry: l, listId: n } = e,
                        { itemContentRef: t } = l,
                        r = (0, o.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = i.useMemo(() => (0, d.D9)(N, s.Z, n), [n]);
                    if (t) return i.createElement(z, { dataSaverMode: a, listRef: t });
                    if (r) return i.createElement(U, { dataSaverMode: a, list: c });
                    {
                        const { isPrivate: l, media: t, name: r } = e;
                        return i.createElement(S, { dataSaverMode: a, isPrivate: l, listId: n, media: t, name: r });
                    }
                },
                O = E(i.memo(V)),
                j = r
                    .iH({
                        component: O,
                        isFocusable: (0, n.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: a } = e.content;
                            return t.Z.forList(a);
                        },
                        shouldDisplayBorder: (0, n.Z)(!1),
                    })
                    .getHandler();
        },
        268260: (e, a, l) => {
            l.d(a, { u: () => u });
            var n = l(903039),
                t = l(220070),
                r = (l(585488), l(277660)),
                i = l.n(r),
                o = l(401388),
                s = l(506363);
            const d = t.Z,
                c = (e, a = !1) => {
                    const l = i()(d, e),
                        n = l?.media_info?.original_img_height,
                        t = l?.media_info?.original_img_url,
                        r = l?.media_info?.original_img_width;
                    if (n && t && r) {
                        const e = l?.media_info?.salient_rect;
                        let i = [];
                        if (e && !(0, o.Z)(e) && !a) {
                            const { height: a, left: l, top: n, width: t } = e;
                            i = [{ x: l, y: n, w: t, h: a }];
                        }
                        return { image: { url: t, height: n, width: r }, crop: i };
                    }
                },
                u = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: l } = e,
                            n = c(a?.result),
                            t = c(l?.result, !0);
                        return n ?? t ?? void 0;
                    })(i()(n.Z, e)) || { image: s.bU, crop: [] };
        },
        564509: (e, a, l) => {
            l.d(a, { Z: () => n });
            l(202784);
            const n = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.2"),
                        l.e("icons.24"),
                        l.e("icons.10"),
                        l.e("icons.15"),
                        l.e("icons.27"),
                        l.e("icons.16"),
                        l.e("icons.12"),
                        l.e("icons.7"),
                        l.e("icons.5"),
                        l.e("icons.22"),
                        l.e("icons.4"),
                        l.e("icons.1"),
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
                        l.e("ondemand.HoverCard-6107ac1a"),
                        l.e("ondemand.HoverCard-9f4db315"),
                        l.e("ondemand.HoverCard-e6266db0"),
                    ]).then(l.bind(l, 527409)),
            });
        },
        320588: (e, a, l) => {
            l.d(a, { Mt: () => b, Sm: () => m, lg: () => u });
            var n = l(111677),
                t = l.n(n),
                r = l(615656),
                i = l(601576);
            const o = t().add55942,
                s = t().ib8f5f3c,
                d = t().e20fc756,
                c = t().hae1c934,
                u = { customErrorHandler: () => (0, i.mf)({ text: o }), showToast: !0 },
                m = { customErrorHandler: () => (0, i.mf)({ text: s }), showToast: !0 },
                b = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === r.ZP.ListAdminRightsError).length) return (0, i.mf)({ text: d });
                        }
                        return (0, i.mf)({ text: c });
                    },
                    showToast: !0,
                };
        },
        286e3: (e, a, l) => {
            l.d(a, { Rc: () => m, nx: () => d });
            var n = l(499627),
                t = l(576469),
                r = l(390387);
            const i = "rweb.channelsTimelineBehavior",
                o = "channelsTimelineBehavior",
                s = Object.freeze({});
            const d = (e) => e[o],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: c }),
                m =
                    ({ listId: e, useRanked: a }) =>
                    (l, n, { userPersistence: r }) => {
                        const o = n(),
                            s = { ...d(o), [e]: { useRanked: a } };
                        l(u(s));
                        const c = t.Z.select(o, e);
                        return c && c.following ? r.get(i).then((l) => r.set(i, { ...l, [e]: { useRanked: a } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [o]: function (e = s, a) {
                        return a && a.type === c ? { ...a.payload } : e;
                    },
                },
                () =>
                    (e, a, { userPersistence: l }) =>
                        (0, r.Qb)(a())
                            ? l.get(i).then((a) => {
                                  a && e(u(a));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, a, l) => {
            l.d(a, { $5: () => u, By: () => f, DV: () => k, Fz: () => g, Ge: () => w, Ns: () => _, Wy: () => h, _g: () => S, ax: () => y, cx: () => p, l1: () => M, tt: () => v, xh: () => b });
            var n = l(614983),
                t = l.n(n),
                r = l(842799),
                i = l(286e3),
                o = l(576469),
                s = l(919022),
                d = l(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const l = h(e, a),
                        n = y(e, a),
                        t = w(e, a);
                    return l ? `/i/lists/${l}` : n && t ? `/${n}/lists/${t}` : "";
                },
                m = (e, a) => a.match.params.listId || void 0,
                b = (e, a) => {
                    const l = a.match.params.listId;
                    return t()(l, "listId should always be specified"), l;
                },
                h = (e, a) =>
                    m(0, a) ||
                    ((e, a) => {
                        const l = g(e, a);
                        return l && l.id_str;
                    })(e, a),
                g = (e, a) => {
                    const l = m(0, a);
                    return l ? o.Z.select(e, l) : o.Z.selectByKey(e, D(e, a));
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
                w = (e, a) => {
                    const l = g(e, a);
                    return a.match.params.slug || (l && l.slug);
                },
                D = (e, a) => {
                    const l = a.match.params.slug,
                        n = a.match.params.screenName;
                    return l && n ? (0, r.Z)(n, l) : "";
                },
                k = (e, a) => {
                    const l =
                        h(e, a) ||
                        ((e, a) => {
                            const l = w(e, a),
                                n = y(e, a);
                            return l && n ? (0, r.Z)(n, l) : "";
                        })(e, a);
                    return o.Z.selectFetchStatus(e, l) || d.ZP.NONE;
                },
                M = (e, a) => {
                    const l = y(e, a);
                    return l ? s.ZP.selectByScreenName(e, l) : void 0;
                },
                S = (e, a) => {
                    const l = h(e, a),
                        n = (0, i.nx)(e);
                    return (l && n[l] && n[l].useRanked) || !1;
                },
                v = (e, a) => {
                    const l = o.Z.select(e, a);
                    if (l) {
                        const e = l.customBanner;
                        return e || l.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                _ = (e, a) => {
                    const l = g(e, a);
                    return l?.mode;
                };
        },
        642153: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                t = l(325686),
                r = l(392237),
                i = l(823161);
            const o = (e) => {
                    const { borderColor: a = "cellBackground", borderWidth: l = "small", style: o, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        m = c.length,
                        b = "transparent" === a;
                    return n.createElement(
                        t.Z,
                        { style: [s.root, o, { height: i.default.getSizeStyle(d)?.height }] },
                        c.map((e, t) => n.createElement(i.default, { backgroundColor: a, borderColor: a, borderWidth: b ? "none" : l, key: t, size: d, style: [0 !== t && { marginStart: -1 * r.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - t }], uri: e })),
                    );
                },
                s = r.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, a, l) => {
            l.d(a, { Z: () => o });
            l(136728);
            var n = l(202784),
                t = l(325686),
                r = l(124964),
                i = l(392237);
            const o = ({ children: e, color: a = "gray700", size: l, style: i }) => {
                    const o = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const t = o.length;
                            e && (t > 0 && o.push(n.createElement(r.Z, { color: a, key: `middot-${t}`, size: l })), o.push(e));
                        }),
                        o.length ? n.createElement(t.Z, { style: [s.middotGroup, i] }, o) : null
                    );
                },
                s = i.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        748138: (e, a, l) => {
            l.r(a), l.d(a, { default: () => s });
            var n = l(202784),
                t = l(890601),
                r = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, a, l) => {
            l.r(a), l.d(a, { default: () => s });
            var n = l(202784),
                t = l(890601),
                r = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.99e30b9a.js.map
