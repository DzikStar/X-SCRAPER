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
                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, n, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW", path: "owner_results.result.author.protected" }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW", path: "owner_results.result.author.verified" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                        { args: null, kind: "FragmentSpread", name: "useBannerImage_list" },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "76a4e2bef500a63f094981909c5eb075";
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
            l.d(a, { Z: () => j });
            var n = l(202784),
                r = l(325686),
                t = l(731708),
                o = l(952428),
                i = l(124964),
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
                D = l(154003),
                y = l(678773),
                w = l(492140),
                M = l(833057),
                k = l(872788),
                _ = l(71620),
                v = l(668214),
                S = l(709318),
                Z = l(601576);
            const C = (0, v.Z)()
                    .propsFromActions(() => ({ addToast: Z.fz, createLocalApiErrorHandler: (0, _.zr)("TOGGLE_PIN_LIST"), pinTimeline: S.qM, unpinTimeline: S.bK }))
                    .withAnalytics(),
                I = m().c5d23126,
                P = m().j44ec610,
                A = m().d8a032a2,
                E = m().fa816a0a,
                F = m().ac832ae4,
                T = m().cdb33880,
                B = (e) => {
                    const { addToast: a, analytics: l, couldPinList: r, createLocalApiErrorHandler: t, isListPinned: o, listId: i, mode: d, name: s, pinTimeline: c, unpinTimeline: u } = e,
                        m = n.useMemo(() => (d === f.H.Reordering ? n.createElement(y.default, null) : o ? n.createElement(w.default, null) : n.createElement(M.default, { style: r ? null : x.disabledPin })), [r, o, d]),
                        h = n.useMemo(() => {
                            if (d === f.H.Pinning) return { label: o ? P : I };
                        }, [o, d]),
                        b = n.useCallback(() => {
                            if (r || o) {
                                const e = o ? "unpin_button" : "pin_button";
                                l.scribe({ element: e, action: "click" }), o ? u({ id: i, name: s, type: k.FO.LIST }).catch(t) : c({ id: i, name: s, type: k.FO.LIST }).catch(t);
                            } else l.scribe({ element: "unpinnable_button", action: "click" }), a({ text: A });
                        }, [a, l, r, t, o, i, s, c, u]),
                        g = n.useMemo(() => (d === f.H.Reordering ? E : o ? T : F), [o, d]);
                    return n.createElement(D.ZP, { "aria-label": g, hoverLabel: h, icon: m, onPress: d === f.H.Pinning ? b : void 0, testID: "list-icon-button", type: "brandText" });
                },
                x = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                L = C(n.memo(B));
            var R = l(725516),
                K = l(346252),
                H = l(374235),
                z = l(845738);
            const N = "cellThumbnail",
                O = "listCell",
                U = (m().d58baa7f, m().j681933e),
                V = (e) => {
                    const { dataSaverMode: a, decoration: l, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: D, isSelected: y, listId: w, listVisibility: M, media: k, memberCount: _, membersContext: v, mode: S, name: Z, onClick: C, pinnedTimelinesCount: I, role: P, user: A, withBottomBorder: E, withHoverCard: F, withSubscribe: T = !1 } = e,
                        { featureSwitches: B } = (0, g.QZ)(),
                        x = B.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", z.F),
                        V = !I || I < x,
                        j = `/i/lists/${w}`,
                        $ = n.useCallback((e) => (e ? n.createElement(H.Z, { basePath: j, listId: w, wrapperStyle: { maxWidth: "100%" } }, e) : null), [j, w]),
                        G = n.useMemo(() => n.createElement(r.Z, { style: W.name }, n.createElement(t.ZP, { numberOfLines: 1, weight: "bold" }, Z), "private" === M ? n.createElement(t.ZP, { size: "body", style: W.icon }, n.createElement(h.default, { "aria-label": U, style: W.iconLock })) : null), [M, Z]),
                        X = n.useMemo(() => n.createElement(r.Z, { style: W.thumbnailImage, testID: N }, n.createElement(K.Z, { cropCandidates: k.crop, dataSaverMode: a, icon: "lists", image: k.image, type: "fixed" })), [a, k.crop, k.image]),
                        q = n.useMemo(() => l || (y ? n.createElement(b.default, { style: W.iconCheckmark }) : S === f.H.Reordering || S === f.H.Pinning ? n.createElement(L, { couldPinList: V, isListPinned: D, listId: w, mode: S, name: Z }) : T ? n.createElement(p.Z, { isFollowing: m, isMinimal: !0, listId: w, listName: Z, user: A }) : void 0), [V, l, D, m, y, w, S, Z, A, T]),
                        Q = (0, R.z)(),
                        J = n.useCallback(
                            (e) => {
                                Q.contextualScribeNamespace.element ? Q.scribeAction("click") : Q.scribe({ component: "list", action: "click" }), C?.(e, { listId: w, member_count: _ });
                            },
                            [Q, C, w, _],
                        );
                    return n.createElement(o.Z, { "aria-checked": y, link: { pathname: j, anchorless: !0 }, onPress: J, role: P, style: [W.root, E && W.bottomBorder], testID: O }, n.createElement(r.Z, { style: W.listContainer }, n.createElement(r.Z, { style: W.leftColumn }, $(X), n.createElement(r.Z, { style: W.listAttribution }, n.createElement(r.Z, { style: W.nameContainer }, $(G), v ? n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, n.createElement(i.Z, null), v) : null), c && u ? n.createElement(r.Z, { style: W.rowContainer }, n.createElement(d.Z, { style: W.facepile, userAvatarUrls: c }), n.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : A ? n.createElement(s.Z, { affiliateBadgeInfo: A.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: A.is_blue_verified, isProtected: A.protected, isVerified: A.verified, name: A.name, nameSize: "subtext2", profileImageUrl: A.profile_image_url_https, screenName: A.screen_name, screenNameSize: "subtext2", verifiedType: A.verified_type, withHoverCard: F, withLink: !0, withScreenName: !0 }) : null)), n.createElement(r.Z, { style: W.rightColumn }, q)));
                },
                W = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                j = n.memo(V);
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
                o = l(392237),
                i = l(136185),
                d = l(564509),
                s = l(521514),
                c = l(125363);
            function u(e) {
                const { basePath: a, children: l, listId: o, wrapperStyle: s } = e,
                    u = (0, c.oR)(),
                    h = n.useCallback(() => (0, i.Dd)(u.getState()), [u]);
                return n.createElement(t.Z, { renderContent: () => n.createElement(r.Z, { style: m.root }, n.createElement(d.Z, { basePath: a, listId: o, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: h, wrapperStyle: s }, l);
            }
            const m = o.default.create((e) => ({ root: { minHeight: 130, width: s.Z.cardWidth.normal } })),
                h = n.memo(u);
        },
        989816: (e, a, l) => {
            l.d(a, { Z: () => D });
            var n = l(202784),
                r = l(970187),
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
                g = { followIcon: n.createElement(o.default, null), followingIcon: n.createElement(i.default, null) },
                p = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: l, disabled: t, follow: o, isFollowing: i, isMinimal: u, listId: m, listName: h, unfollow: b, user: p } = e,
                        D = n.useCallback(() => {
                            a.scribeAction("follow"), o(m).catch(l(d.lg));
                        }, [a, l, o, m]),
                        y = n.useCallback(() => {
                            a.scribeAction("unfollow"), b(m).catch(l(d.Sm));
                        }, [a, l, m, b]);
                    return n.createElement(c.Z, { customText: h, displayMode: s.BH.subscribe, userFullName: p?.name }, (e) => n.createElement(r.Z, { buttonIcons: u ? g : void 0, disabled: t, displayMode: u ? "only-icon" : void 0, isFollowing: i, onFollow: e(D), onUnfollow: e(y), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = t.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                D = b(n.memo(p));
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
                o = l.n(t),
                i = l(53821),
                d = l(268260),
                s = l(668214),
                c = l(709318),
                u = l(38562);
            const m = (0, s.Z)().propsFromState(() => ({ dataSaverMode: u.IX, pinnedTimelinesCount: c.Hm })),
                h = [],
                b = n.Z,
                g = (e) => ({ id_str: e.id_str, name: e?.name ?? "", screen_name: e?.screen_name ?? "", profile_image_url_https: e?.profile_image_url_https ?? "", protected: e.protected, verified: e.verified }),
                p = (e) => {
                    const a = o()(b, e.listRef),
                        l = (0, d.u)(a),
                        n = a.owner_results?.result?.author;
                    return r.createElement(i.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? h, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: l, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: n ? g(n) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                f = r.memo(m(p));
        },
        631449: (e, a, l) => {
            l.r(a), l.d(a, { default: () => T });
            var n = l(459643),
                r = l(942893),
                t = l(351322),
                o = l(807896),
                i = {
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
            const d = i;
            var s = l(202784),
                c = (l(585488), l(277660)),
                u = l.n(c),
                m = l(952793),
                h = l(576469),
                b = l(281743),
                g = l(53821),
                p = l(668214),
                f = l(709318),
                D = l(38562),
                y = l(919022),
                w = l(510588);
            const M = (e, { listId: a }) => (a ? h.Z.select(e, a) : void 0),
                k = (e, a) => {
                    const l = M(e, a),
                        n = l?.user;
                    return n ? y.ZP.select(e, n) : void 0;
                },
                _ = (e, { listId: a }) => w.tt(e, a);
            const v = (0, p.Z)().propsFromState(() => ({ list: M, author: k, dataSaverMode: D.IX, pinnedTimelinesCount: f.Hm, media: _ }))(function (e) {
                    const { list: a, onClick: l } = e;
                    return a ? s.createElement(g.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls, followersContext: a.followers_context, isFollowing: Boolean(a.following), isListPinned: a.pinning, isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode, media: e.media, memberCount: a.member_count, membersContext: a.members_context, mode: e.mode, name: a.name, onClick: l, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                S = s.memo(v);
            var Z = l(269950),
                C = l(358869);
            const I = ({ entry: e, feedbackItems: a, module: l, renderEntry: n, shouldDisplayPin: r, ...t }) => {
                    const i = r ? Z.H.Pinning : void 0;
                    return e.itemContentRef ? s.createElement(E, (0, o.Z)({}, t, { itemContentRef: e.itemContentRef, mode: i })) : s.createElement(F, (0, o.Z)({}, t, { itemContent: e.content, mode: i }));
                },
                P = s.memo(I),
                A = d,
                E = ({ itemContentRef: e, shouldDisplayPin: a, ...l }) => {
                    const n = u()(A, e);
                    return s.createElement(C.ZP, (0, o.Z)({}, l, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                F = ({ itemContent: e, mode: a, shouldDisplayPin: l, ...n }) => {
                    const r = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        t = s.useMemo(() => (0, b.D9)(C.Dx, h.Z, e.id), [e.id]);
                    return r ? s.createElement(C.ZP, (0, o.Z)({ isMember: e.isMember, listRef: t, mode: a }, n)) : s.createElement(S, (0, o.Z)({ isMember: e.isMember, listId: e.id, mode: a }, n));
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
            l.r(a), l.d(a, { default: () => W });
            var n = l(459643),
                r = l(942893),
                t = l(351322),
                o = l(202784),
                i = l(952793),
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
                D = l(374235),
                y = l(725516);
            const w = g().j681933e,
                M = (e) => {
                    const { dataSaverMode: a, isPrivate: l, listId: n, media: r, name: t } = e,
                        i = (0, y.z)(),
                        d = `/i/lists/${n}`,
                        s = o.useCallback(() => {
                            i.scribeAction("click");
                        }, [i]);
                    return o.createElement(D.Z, { basePath: d, listId: n }, o.createElement(u.Z, { link: d, onPress: s, style: k.root }, o.createElement(f.Z, { cropCandidates: r.crop, dataSaverMode: a, icon: "lists", image: r.image }), o.createElement(c.Z, { style: k.name }, o.createElement(m.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, t ? t.trim() : null), l ? o.createElement(p.default, { "aria-label": w, style: k.iconLock }) : null)));
                },
                k = h.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                _ = o.memo(M);
            var v = l(668214),
                S = l(38562),
                Z = l(510588);
            const C = (e, a) => a.entry.content.id,
                I = (e, a) => d.Z.select(e, C(0, a)),
                P = (e, a) => Z.tt(e, C(0, a)),
                A = (0, v.Z)()
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
            const B = T;
            l(585488);
            var x = l(277660),
                L = l.n(x),
                R = l(268260);
            const K = B,
                H = ({ dataSaverMode: e, listRef: a }) => {
                    const l = L()(K, a).list;
                    return o.createElement(O, { dataSaverMode: e, list: l });
                },
                z = o.memo(H),
                N = F,
                O = (e) => {
                    const a = L()(N, e.list),
                        l = (0, R.u)(a);
                    return o.createElement(_, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === a.mode, listId: a.id_str, media: l, name: a.name || "" });
                },
                U = (e) => {
                    const { dataSaverMode: a, entry: l, listId: n } = e,
                        { itemContentRef: r } = l,
                        t = (0, i.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = o.useMemo(() => (0, s.D9)(N, d.Z, n), [n]);
                    if (r) return o.createElement(z, { dataSaverMode: a, listRef: r });
                    if (t) return o.createElement(O, { dataSaverMode: a, list: c });
                    {
                        const { isPrivate: l, media: r, name: t } = e;
                        return o.createElement(_, { dataSaverMode: a, isPrivate: l, listId: n, media: r, name: t });
                    }
                },
                V = A(o.memo(U)),
                W = t
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
                o = l.n(t),
                i = l(401388),
                d = l(506363);
            const s = r.Z,
                c = (e, a = !1) => {
                    const l = o()(s, e),
                        n = l?.media_info?.original_img_height,
                        r = l?.media_info?.original_img_url,
                        t = l?.media_info?.original_img_width;
                    if (n && r && t) {
                        const e = l?.media_info?.salient_rect;
                        let o = [];
                        if (e && !(0, i.Z)(e) && !a) {
                            const { height: a, left: l, top: n, width: r } = e;
                            o = [{ x: l, y: n, w: r, h: a }];
                        }
                        return { image: { url: r, height: n, width: t }, crop: o };
                    }
                },
                u = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: l } = e,
                            n = c(a?.result),
                            r = c(l?.result, !0);
                        return n ?? r ?? void 0;
                    })(o()(n.Z, e)) || { image: d.bU, crop: [] };
        },
        564509: (e, a, l) => {
            l.d(a, { Z: () => n });
            l(202784);
            const n = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.5"),
                        l.e("icons.6"),
                        l.e("icons.22"),
                        l.e("icons.25"),
                        l.e("icons.9"),
                        l.e("icons.4"),
                        l.e("icons.15"),
                        l.e("icons.20"),
                        l.e("icons.0"),
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
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
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
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
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
                o = l(601576);
            const i = r().add55942,
                d = r().ib8f5f3c,
                s = r().e20fc756,
                c = r().hae1c934,
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
        286e3: (e, a, l) => {
            l.d(a, { Rc: () => m, nx: () => s });
            var n = l(499627),
                r = l(576469),
                t = l(390387);
            const o = "rweb.channelsTimelineBehavior",
                i = "channelsTimelineBehavior",
                d = Object.freeze({});
            const s = (e) => e[i],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: c }),
                m =
                    ({ listId: e, useRanked: a }) =>
                    (l, n, { userPersistence: t }) => {
                        const i = n(),
                            d = { ...s(i), [e]: { useRanked: a } };
                        l(u(d));
                        const c = r.Z.select(i, e);
                        return c && c.following ? t.get(o).then((l) => t.set(o, { ...l, [e]: { useRanked: a } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [i]: function (e = d, a) {
                        return a && a.type === c ? { ...a.payload } : e;
                    },
                },
                () =>
                    (e, a, { userPersistence: l }) =>
                        (0, t.Qb)(a())
                            ? l.get(o).then((a) => {
                                  a && e(u(a));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, a, l) => {
            l.d(a, { $5: () => u, By: () => f, DV: () => M, Fz: () => g, Ge: () => y, Ns: () => S, Wy: () => b, _g: () => _, ax: () => D, cx: () => p, l1: () => k, tt: () => v, xh: () => h });
            var n = l(614983),
                r = l.n(n),
                t = l(842799),
                o = l(286e3),
                i = l(576469),
                d = l(919022),
                s = l(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const l = b(e, a),
                        n = D(e, a),
                        r = y(e, a);
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
                    return l ? i.Z.select(e, l) : i.Z.selectByKey(e, w(e, a));
                },
                p = (e, a) => {
                    const l = g(e, a);
                    return l && l.following;
                },
                f = (e, a) => {
                    const l = g(e, a);
                    return l && l.name;
                },
                D = (e, a) => {
                    const l = m(0, a);
                    return a.match.params.screenName || void 0 || (l && i.Z.selectListAuthorScreenName(e, l));
                },
                y = (e, a) => {
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
                            const l = y(e, a),
                                n = D(e, a);
                            return l && n ? (0, t.Z)(n, l) : "";
                        })(e, a);
                    return i.Z.selectFetchStatus(e, l) || s.ZP.NONE;
                },
                k = (e, a) => {
                    const l = D(e, a);
                    return l ? d.ZP.selectByScreenName(e, l) : void 0;
                },
                _ = (e, a) => {
                    const l = b(e, a),
                        n = (0, o.nx)(e);
                    return (l && n[l] && n[l].useRanked) || !1;
                },
                v = (e, a) => {
                    const l = i.Z.select(e, a);
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
            l.d(a, { Z: () => i });
            var n = l(202784),
                r = l(325686),
                t = l(392237),
                o = l(823161);
            const i = (e) => {
                    const { borderColor: a = "cellBackground", borderWidth: l = "small", style: i, userAvatarSize: s = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        m = c.length,
                        h = "transparent" === a;
                    return n.createElement(
                        r.Z,
                        { style: [d.root, i, { height: o.default.getSizeStyle(s)?.height }] },
                        c.map((e, r) => n.createElement(o.default, { backgroundColor: a, borderColor: a, borderWidth: h ? "none" : l, key: r, size: s, style: [0 !== r && { marginStart: -1 * t.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                d = t.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, a, l) => {
            l.d(a, { Z: () => i });
            l(136728);
            var n = l(202784),
                r = l(325686),
                t = l(124964),
                o = l(392237);
            const i = ({ children: e, color: a = "gray700", size: l, style: o }) => {
                    const i = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const r = i.length;
                            e && (r > 0 && i.push(n.createElement(t.Z, { color: a, key: `middot-${r}`, size: l })), i.push(e));
                        }),
                        i.length ? n.createElement(r.Z, { style: [d.middotGroup, o] }, i) : null
                    );
                },
                d = o.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        678773: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                o = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
        76388: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                o = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
        452693: (e, a, l) => {
            l.r(a), l.d(a, { default: () => d });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                o = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.02901cca.js.map
