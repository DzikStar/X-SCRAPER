"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler", "icons/IconDraggable-js"],
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
            r.hash = "a768b241795f7686944d39bc8f540980";
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
                u = l(111677),
                m = l.n(u),
                b = l(121791),
                h = l(913973),
                g = l(443781),
                p = l(989816),
                f = l(269950),
                y = l(154003),
                D = l(678773),
                w = l(492140),
                M = l(833057),
                k = l(872788),
                S = l(71620),
                _ = l(668214),
                v = l(709318),
                C = l(601576);
            const I = (0, _.Z)()
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, S.zr)("TOGGLE_PIN_LIST"), pinTimeline: v.qM, unpinTimeline: v.bK }))
                    .withAnalytics(),
                Z = m().c5d23126,
                A = m().j44ec610,
                P = m().d8a032a2,
                E = m().fa816a0a,
                F = m().ac832ae4,
                T = m().cdb33880,
                L = (e) => {
                    const { addToast: a, analytics: l, couldPinList: r, createLocalApiErrorHandler: t, isListPinned: i, listId: o, mode: d, name: s, pinTimeline: c, unpinTimeline: u } = e,
                        m = n.useMemo(() => (d === f.H.Reordering ? n.createElement(D.default, null) : i ? n.createElement(w.default, null) : n.createElement(M.default, { style: r ? null : x.disabledPin })), [r, i, d]),
                        b = n.useMemo(() => {
                            if (d === f.H.Pinning) return { label: i ? A : Z };
                        }, [i, d]),
                        h = n.useCallback(() => {
                            if (r || i) {
                                const e = i ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), i ? u({ id: o, name: s, type: k.FO.LIST }).catch(t) : c({ id: o, name: s, type: k.FO.LIST }).catch(t);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: P });
                        }, [a, l, r, t, i, o, s, c, u]),
                        g = n.useMemo(() => (d === f.H.Reordering ? E : i ? T : F), [i, d]);
                    return n.createElement(y.ZP, { "aria-label": g, hoverLabel: b, icon: m, onPress: d === f.H.Pinning ? h : void 0, testID: "list-icon-button", type: "brandText" });
                },
                x = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                B = I(n.memo(L));
            var K = l(725516),
                R = l(346252),
                H = l(374235),
                z = l(845738);
            const N = "cellThumbnail",
                U = "listCell",
                O = (m().d58baa7f, m().j681933e),
                V = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: D, listId: w, listVisibility: M, media: k, memberCount: S, membersContext: _, mode: v, name: C, onClick: I, pinnedTimelinesCount: Z, role: A, user: P, withBottomBorder: E, withHoverCard: F, withSubscribe: T = !1 } = e,
                        { featureSwitches: L } = (0, g.QZ)(),
                        x = L.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", z.F),
                        V = !Z || Z < x,
                        W = `/i/lists/${w}`,
                        $ = n.useCallback((e) => (e ? n.createElement(H.Z, { basePath: W, listId: w, wrapperStyle: { maxWidth: "100%" } }, e) : null), [W, w]),
                        G = n.useMemo(() => n.createElement(r.Z, { style: j.name }, n.createElement(t.ZP, { numberOfLines: 1, weight: "bold" }, C), "private" === M ? n.createElement(t.ZP, { size: "body", style: j.icon }, n.createElement(b.default, { "aria-label": O, style: j.iconLock })) : null), [M, C]),
                        X = n.useMemo(() => n.createElement(r.Z, { style: j.thumbnailImage, testID: N }, n.createElement(R.Z, { cropCandidates: k.crop, dataSaverMode: a, icon: "lists", image: k.image, type: "fixed" })), [a, k.crop, k.image]),
                        Q = n.useMemo(() => l || (D ? n.createElement(h.default, { style: j.iconCheckmark }) : v === f.H.Reordering || v === f.H.Pinning ? n.createElement(B, { couldPinList: V, isListPinned: y, listId: w, mode: v, name: C }) : T ? n.createElement(p.Z, { isFollowing: m, isMinimal: !0, listId: w, listName: C, user: P }) : void 0), [V, l, y, m, D, w, v, C, P, T]),
                        q = (0, K.z)(),
                        J = n.useCallback(
                            (e) => {
                                q.contextualScribeNamespace.element ? q.scribeAction("click") : q.scribe({ component: "list", action: "click" }), I?.(e, { listId: w, member_count: S });
                            },
                            [q, I, w, S],
                        );
                    return n.createElement(i.Z, { "aria-checked": D, link: { pathname: W, anchorless: !0 }, onPress: J, role: A, style: [j.root, E && j.bottomBorder], testID: U }, n.createElement(r.Z, { style: j.listContainer }, n.createElement(r.Z, { style: j.leftColumn }, $(X), n.createElement(r.Z, { style: j.listAttribution }, n.createElement(r.Z, { style: j.nameContainer }, $(G), _ ? n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n.createElement(o.Z, null), _) : null), c && u ? n.createElement(r.Z, { style: j.rowContainer }, n.createElement(d.Z, { style: j.facepile, userAvatarUrls: c }), n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : P ? n.createElement(s.Z, { affiliateBadgeInfo: P.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: P.is_blue_verified, isProtected: P.protected, isVerified: P.verified, name: P.name, nameSize: "subtext2", profileImageUrl: P.profile_image_url_https, screenName: P.screen_name, screenNameSize: "subtext2", verifiedType: P.verified_type, withHoverCard: F, withLink: !0, withScreenName: !0 }) : null)), n.createElement(r.Z, { style: j.rightColumn }, Q)));
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
            l.d(a, { Z: () => b });
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
                    b = n.useCallback(() => (0, o.Dd)(u.getState()), [u]);
                return n.createElement(t.Z, { renderContent: () => n.createElement(r.Z, { style: m.root }, n.createElement(d.Z, { basePath: a, listId: i, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: b, wrapperStyle: s }, l);
            }
            const m = i.default.create((e) => ({ root: { minHeight: 130, width: s.Z.cardWidth.normal } })),
                b = n.memo(u);
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
                b = l(576469);
            const h = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: b.Z.subscribe, unfollow: b.Z.unsubscribe }))
                    .withAnalytics(),
                g = { followIcon: n.createElement(i.default, null), followingIcon: n.createElement(o.default, null) },
                p = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: t, follow: i, isFollowing: o, isMinimal: u, listId: m, listName: b, unfollow: h, user: p } = e,
                        y = n.useCallback(() => {
                            a.scribeAction("follow"), i(m).catch(l(d.lg));
                        }, [a, l, i, m]),
                        D = n.useCallback(() => {
                            a.scribeAction("unfollow"), h(m).catch(l(d.Sm));
                        }, [a, l, m, h]);
                    return n.createElement(c.Z, { customText: b, displayMode: s.BH.subscribe, userFullName: p?.name }, (e) => n.createElement(r.Z, { buttonIcons: u ? g : void 0, disabled: t, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(y), onUnfollow: e(D), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = t.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
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
                r = l(202784),
                t = (l(585488), l(277660)),
                i = l.n(t),
                o = l(53821),
                d = l(268260),
                s = l(668214),
                c = l(709318),
                u = l(38562);
            const m = (0, s.Z)().propsFromState(() => ({ dataSaverMode: u.IX, pinnedTimelinesCount: c.Hm })),
                b = [],
                h = n.Z,
                g = (e, a, l, n, r) => ({ id_str: e.id_str, name: l?.name ?? "", screen_name: l?.screen_name ?? "", profile_image_url_https: a?.image_url ?? "", protected: n?.protected ?? !1, verified: r ?? !1 }),
                p = (e) => {
                    const a = i()(h, e.listRef),
                        l = (0, d.u)(a),
                        n = a.owner_results?.result?.author,
                        t = a.owner_results?.result?.privacy,
                        s = a.owner_results?.result?.verification?.verified,
                        c = a.owner_results?.result?.avatar,
                        u = a.owner_results?.result?.core;
                    return r.createElement(o.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? b, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: n ? g(n, c, u, t, s) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
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
                b = l(576469),
                h = l(281743),
                g = l(53821),
                p = l(668214),
                f = l(709318),
                y = l(38562),
                D = l(919022),
                w = l(510588);
            const M = (e, a) => (a.listId ? b.Z.select(e, a.listId) : void 0),
                k = (e, a) => {
                    const l = M(e, a),
                        n = l?.user;
                    return n ? D.ZP.select(e, n) : void 0;
                },
                S = (e, a) => w.tt(e, a.listId);
            const _ = (0, p.Z)().propsFromState(() => ({ list: M, author: k, dataSaverMode: y.IX, pinnedTimelinesCount: f.Hm, media: S }))(function (e) {
                    const { list: a, onClick: l } = e;
                    return a ? s.createElement(g.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls, followersContext: a.followers_context, isFollowing: Boolean(a.following), isListPinned: a.pinning, isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode, media: e.media, memberCount: a.member_count, membersContext: a.members_context, mode: e.mode, name: a.name, onClick: l, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                v = s.memo(_);
            var C = l(269950),
                I = l(358869);
            const Z = ({ entry: e, feedbackItems: a, module: l, renderEntry: n, shouldDisplayPin: r, ...t }) => {
                    const o = r ? C.H.Pinning : void 0;
                    return e.itemContentRef ? s.createElement(E, (0, i.Z)({}, t, { itemContentRef: e.itemContentRef, mode: o })) : s.createElement(F, (0, i.Z)({}, t, { itemContent: e.content, mode: o }));
                },
                A = s.memo(Z),
                P = d,
                E = ({ itemContentRef: e, shouldDisplayPin: a, ...l }) => {
                    const n = u()(P, e);
                    return s.createElement(I.ZP, (0, i.Z)({}, l, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                F = ({ itemContent: e, mode: a, shouldDisplayPin: l, ...n }) => {
                    const r = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        t = s.useMemo(() => (0, h.D9)(I.Dx, b.Z, e.id), [e.id]);
                    return r ? s.createElement(I.ZP, (0, i.Z)({ isMember: e.isMember, listRef: t, mode: a }, n)) : s.createElement(v, (0, i.Z)({ isMember: e.isMember, listId: e.id, mode: a }, n));
                },
                T = (e) =>
                    t
                        .iH({
                            component: A,
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
                b = l(392237),
                h = l(111677),
                g = l.n(h),
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
                k = b.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                S = i.memo(M);
            var _ = l(668214),
                v = l(38562),
                C = l(510588);
            const I = (e, a) => a.entry.content.id,
                Z = (e, a) => d.Z.select(e, I(0, a)),
                A = (e, a) => C.tt(e, I(0, a)),
                P = (0, _.Z)()
                    .propsFromState(() => ({ listId: I, list: Z, dataSaverMode: v.IX, media: A }))
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
                H = ({ dataSaverMode: e, listRef: a }) => {
                    const l = B()(R, a).list;
                    return i.createElement(U, { dataSaverMode: e, list: l });
                },
                z = i.memo(H),
                N = F,
                U = (e) => {
                    const a = B()(N, e.list),
                        l = (0, K.u)(a);
                    return i.createElement(S, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === a.mode, listId: a.id_str, media: l, name: a.name || "" });
                },
                O = (e) => {
                    const { dataSaverMode: a, entry: l, listId: n } = e,
                        { itemContentRef: r } = l,
                        t = (0, o.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = i.useMemo(() => (0, s.D9)(N, d.Z, n), [n]);
                    if (r) return i.createElement(z, { dataSaverMode: a, listRef: r });
                    if (t) return i.createElement(U, { dataSaverMode: a, list: c });
                    {
                        const { isPrivate: l, media: r, name: t } = e;
                        return i.createElement(S, { dataSaverMode: a, isPrivate: l, listId: n, media: r, name: t });
                    }
                },
                V = P(i.memo(O)),
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
                        l.e("icons.5"),
                        l.e("icons.25"),
                        l.e("icons.22"),
                        l.e("icons.6"),
                        l.e("icons.4"),
                        l.e("icons.9"),
                        l.e("icons.15"),
                        l.e("icons.20"),
                        l.e("icons.2"),
                        l.e("icons.18"),
                        l.e("icons.13"),
                        l.e("icons.0"),
                        l.e("icons.24"),
                        l.e("icons.17"),
                        l.e("icons.11"),
                        l.e("icons.26"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
                        l.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
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
                        l.e("ondemand.HoverCard-63cb1cc4"),
                    ]).then(l.bind(l, 527409)),
            });
        },
        320588: (e, a, l) => {
            l.d(a, { Mt: () => b, Sm: () => m, lg: () => u });
            var n = l(111677),
                r = l.n(n),
                t = l(615656),
                i = l(601576);
            const o = r().add55942,
                d = r().ib8f5f3c,
                s = r().e20fc756,
                c = r().hae1c934,
                u = { customErrorHandler: () => (0, i.mf)({ text: o }), showToast: !0 },
                m = { customErrorHandler: () => (0, i.mf)({ text: d }), showToast: !0 },
                b = {
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
            l.d(a, { $5: () => u, By: () => f, DV: () => M, Fz: () => g, Ge: () => D, Ns: () => v, Wy: () => h, _g: () => S, ax: () => y, cx: () => p, l1: () => k, tt: () => _, xh: () => b });
            var n = l(614983),
                r = l.n(n),
                t = l(842799),
                i = l(286e3),
                o = l(576469),
                d = l(919022),
                s = l(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const l = h(e, a),
                        n = y(e, a),
                        r = D(e, a);
                    return l ? `/i/lists/${l}` : n && r ? `/${n}/lists/${r}` : "";
                },
                m = (e, a) => a.match.params.listId || void 0,
                b = (e, a) => {
                    const l = a.match.params.listId;
                    return r()(l, "listId should always be specified"), l;
                },
                h = (e, a) =>
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
                        h(e, a) ||
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
                S = (e, a) => {
                    const l = h(e, a),
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
                v = (e, a) => {
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
                        b = "transparent" === a;
                    return n.createElement(
                        r.Z,
                        { style: [d.root, o, { height: i.default.getSizeStyle(s)?.height }] },
                        c.map((e, r) => n.createElement(i.default, { backgroundColor: a, borderColor: a, borderWidth: b ? "none" : l, key: r, size: s, style: [0 !== r && { marginStart: -1 * t.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
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
        76388: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                i = l(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.890562aa.js.map
