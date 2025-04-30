"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler"],
    {
        424250: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "relayListCell_list",
                    selections: [
                        { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                        (l = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                        { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, l, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW" }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                        { args: null, kind: "FragmentSpread", name: "useBannerImage_list" },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "76a4e2bef500a63f094981909c5eb075";
            const t = r;
        },
        220070: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
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
            const r = l;
        },
        903039: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useBannerImage_list",
                    selections: [
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "custom_banner_media_results", plural: !1, selections: (l = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useBannerImage_apiMedia" }], storageKey: null }]), storageKey: null },
                        { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: l, storageKey: null },
                    ],
                    type: "List",
                    abstractKey: null,
                };
            r.hash = "cdbab01a2d01f274e4520afbd9ab33f4";
            const t = r;
        },
        53821: (e, a, n) => {
            n.d(a, { Z: () => j });
            var l = n(202784),
                r = n(325686),
                t = n(731708),
                i = n(952428),
                o = n(124964),
                d = n(642153),
                s = n(366635),
                c = n(392237),
                u = n(674132),
                m = n.n(u),
                b = n(121791),
                h = n(913973),
                g = n(443781),
                p = n(989816),
                f = n(269950),
                y = n(154003),
                D = n(678773),
                w = n(492140),
                M = n(833057),
                k = n(872788),
                _ = n(71620),
                S = n(668214),
                v = n(709318),
                C = n(601576);
            const I = (0, S.Z)()
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, _.zr)("TOGGLE_PIN_LIST"), pinTimeline: v.qM, unpinTimeline: v.bK }))
                    .withAnalytics(),
                Z = m().c5d23126,
                P = m().j44ec610,
                A = m().d8a032a2,
                E = m().fa816a0a,
                F = m().ac832ae4,
                T = m().cdb33880,
                B = (e) => {
                    const { addToast: a, analytics: n, couldPinList: r, createLocalApiErrorHandler: t, isListPinned: i, listId: o, mode: d, name: s, pinTimeline: c, unpinTimeline: u } = e,
                        m = l.useMemo(() => (d === f.H.Reordering ? l.createElement(D.default, null) : i ? l.createElement(w.default, null) : l.createElement(M.default, { style: r ? null : x.disabledPin })), [r, i, d]),
                        b = l.useMemo(() => {
                            if (d === f.H.Pinning) return { label: i ? P : Z };
                        }, [i, d]),
                        h = l.useCallback(() => {
                            if (r || i) {
                                const e = i ? "unpin_button" : "pin_button";
                                n.scribe({ element: e, action: "click" }), i ? u({ id: o, name: s, type: k.FO.LIST }).catch(t) : c({ id: o, name: s, type: k.FO.LIST }).catch(t);
                            } else n.scribe({ element: "unpinnable_button", action: "click" }), a({ text: A });
                        }, [a, n, r, t, i, o, s, c, u]),
                        g = l.useMemo(() => (d === f.H.Reordering ? E : i ? T : F), [i, d]);
                    return l.createElement(y.ZP, { "aria-label": g, hoverLabel: b, icon: m, onPress: d === f.H.Pinning ? h : void 0, testID: "list-icon-button", type: "brandText" });
                },
                x = c.default.create((e) => ({ disabledPin: { color: e.colors.gray300 } })),
                L = I(l.memo(B));
            var R = n(725516),
                K = n(346252),
                H = n(374235),
                z = n(845738);
            const N = "cellThumbnail",
                O = "listCell",
                U = (m().d58baa7f, m().j681933e),
                V = (e) => {
                    const { dataSaverMode: a, decoration: n, facepileUrls: c, followersContext: u, isFollowing: m, isListPinned: y, isSelected: D, listId: w, listVisibility: M, media: k, memberCount: _, membersContext: S, mode: v, name: C, onClick: I, pinnedTimelinesCount: Z, role: P, user: A, withBottomBorder: E, withHoverCard: F, withSubscribe: T = !1 } = e,
                        { featureSwitches: B } = (0, g.QZ)(),
                        x = B.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", z.F),
                        V = !Z || Z < x,
                        j = `/i/lists/${w}`,
                        $ = l.useCallback((e) => (e ? l.createElement(H.Z, { basePath: j, listId: w, wrapperStyle: { maxWidth: "100%" } }, e) : null), [j, w]),
                        G = l.useMemo(() => l.createElement(r.Z, { style: W.name }, l.createElement(t.ZP, { numberOfLines: 1, weight: "bold" }, C), "private" === M ? l.createElement(t.ZP, { size: "body", style: W.icon }, l.createElement(b.default, { "aria-label": U, style: W.iconLock })) : null), [M, C]),
                        X = l.useMemo(() => l.createElement(r.Z, { style: W.thumbnailImage, testID: N }, l.createElement(K.Z, { cropCandidates: k.crop, dataSaverMode: a, icon: "lists", image: k.image, type: "fixed" })), [a, k.crop, k.image]),
                        q = l.useMemo(() => n || (D ? l.createElement(h.default, { style: W.iconCheckmark }) : v === f.H.Reordering || v === f.H.Pinning ? l.createElement(L, { couldPinList: V, isListPinned: y, listId: w, mode: v, name: C }) : T ? l.createElement(p.Z, { isFollowing: m, isMinimal: !0, listId: w, listName: C, user: A }) : void 0), [V, n, y, m, D, w, v, C, A, T]),
                        Q = (0, R.z)(),
                        J = l.useCallback(
                            (e) => {
                                Q.contextualScribeNamespace.element ? Q.scribeAction("click") : Q.scribe({ component: "list", action: "click" }), I?.(e, { listId: w, member_count: _ });
                            },
                            [Q, I, w, _],
                        );
                    return l.createElement(i.Z, { "aria-checked": D, link: { pathname: j, anchorless: !0 }, onPress: J, role: P, style: [W.root, E && W.bottomBorder], testID: O }, l.createElement(r.Z, { style: W.listContainer }, l.createElement(r.Z, { style: W.leftColumn }, $(X), l.createElement(r.Z, { style: W.listAttribution }, l.createElement(r.Z, { style: W.nameContainer }, $(G), S ? l.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, l.createElement(o.Z, null), S) : null), c && u ? l.createElement(r.Z, { style: W.rowContainer }, l.createElement(d.Z, { style: W.facepile, userAvatarUrls: c }), l.createElement(t.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, u)) : A ? l.createElement(s.Z, { affiliateBadgeInfo: A.highlightedLabel, avatarSize: "small", color: "text", isBlueVerified: A.is_blue_verified, isProtected: A.protected, isVerified: A.verified, name: A.name, nameSize: "subtext2", profileImageUrl: A.profile_image_url_https, screenName: A.screen_name, screenNameSize: "subtext2", verifiedType: A.verified_type, withHoverCard: F, withLink: !0, withScreenName: !0 }) : null)), l.createElement(r.Z, { style: W.rightColumn }, q)));
                },
                W = c.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, description: { marginBottom: e.spaces.space2 }, facepile: { marginEnd: e.spaces.space4 }, followButton: { marginStart: e.spaces.space12 }, icon: { paddingStart: e.spaces.space4 }, iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 }, iconLock: { color: e.colors.text }, listAttribution: { flex: 1, alignItems: "flex-start" }, listContainer: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, name: { flexDirection: "row" }, nameContainer: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space2, width: "100%" }, rightColumn: { flexShrink: 0, justifyContent: "center" }, rowContainer: { alignItems: "center", flexDirection: "row", width: "100%" }, root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, thumbnailImage: { alignItems: "flex-start", height: "100%", marginEnd: e.spaces.space16 } })),
                j = l.memo(V);
        },
        845738: (e, a, n) => {
            n.d(a, { F: () => l });
            n(202784);
            const l = 5;
        },
        374235: (e, a, n) => {
            n.d(a, { Z: () => b });
            var l = n(202784),
                r = n(325686),
                t = n(818199),
                i = n(392237),
                o = n(136185),
                d = n(564509),
                s = n(521514),
                c = n(125363);
            function u(e) {
                const { basePath: a, children: n, listId: i, wrapperStyle: s } = e,
                    u = (0, c.oR)(),
                    b = l.useCallback(() => (0, o.Dd)(u.getState()), [u]);
                return l.createElement(t.Z, { renderContent: () => l.createElement(r.Z, { style: m.root }, l.createElement(d.Z, { basePath: a, listId: i, withEditButton: !1, withRoundedCorners: !0 })), shouldDisable: b, wrapperStyle: s }, n);
            }
            const m = i.default.create((e) => ({ root: { minHeight: 130, width: s.Z.cardWidth.normal } })),
                b = l.memo(u);
        },
        989816: (e, a, n) => {
            n.d(a, { Z: () => y });
            var l = n(202784),
                r = n(970187),
                t = n(392237),
                i = n(379327),
                o = n(913973),
                d = n(320588),
                s = n(233391),
                c = n(288955),
                u = n(71620),
                m = n(668214),
                b = n(576469);
            const h = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: b.Z.subscribe, unfollow: b.Z.unsubscribe }))
                    .withAnalytics(),
                g = { followIcon: l.createElement(i.default, null), followingIcon: l.createElement(o.default, null) },
                p = (e) => {
                    const { analytics: a, createLocalApiErrorHandler: n, disabled: t, follow: i, isFollowing: o, isMinimal: u, listId: m, listName: b, unfollow: h, user: p } = e,
                        y = l.useCallback(() => {
                            a.scribeAction("follow"), i(m).catch(n(d.lg));
                        }, [a, n, i, m]),
                        D = l.useCallback(() => {
                            a.scribeAction("unfollow"), h(m).catch(n(d.Sm));
                        }, [a, n, m, h]);
                    return l.createElement(c.Z, { customText: b, displayMode: s.BH.subscribe, userFullName: p?.name }, (e) => l.createElement(r.Z, { buttonIcons: u ? g : void 0, disabled: t, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(y), onUnfollow: e(D), showRelationshipChangeConfirmation: !1, size: "small", style: f.followButton, type: "list" }));
                },
                f = t.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                y = h(l.memo(p));
        },
        269950: (e, a, n) => {
            n.d(a, { H: () => l });
            n(202784);
            const l = Object.freeze({ Pinning: "Pinning", Reordering: "Reordering" });
        },
        358869: (e, a, n) => {
            n.d(a, { z4: () => p, ZP: () => f, Dx: () => h });
            var l = n(424250),
                r = n(202784),
                t = (n(585488), n(277660)),
                i = n.n(t),
                o = n(53821),
                d = n(268260),
                s = n(668214),
                c = n(709318),
                u = n(38562);
            const m = (0, s.Z)().propsFromState(() => ({ dataSaverMode: u.IX, pinnedTimelinesCount: c.Hm })),
                b = [],
                h = l.Z,
                g = (e) => ({ id_str: e.id_str, name: e?.name ?? "", screen_name: e?.screen_name ?? "", profile_image_url_https: e?.profile_image_url_https ?? "", protected: e.protected, verified: e.verified }),
                p = (e) => {
                    const a = i()(h, e.listRef),
                        n = (0, d.u)(a),
                        l = a.owner_results?.result?.author;
                    return r.createElement(o.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls ?? b, followersContext: a.followers_context ?? "", isFollowing: Boolean(a.following), isListPinned: Boolean(a.pinning), isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode?.toLowerCase() ?? "public", media: n, memberCount: a.member_count ?? 0, membersContext: a.members_context ?? "", mode: e.mode, name: a.name ?? "", onClick: e.onClick, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: l ? g(l) : void 0, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe });
                },
                f = r.memo(m(p));
        },
        631449: (e, a, n) => {
            n.r(a), n.d(a, { default: () => T });
            var l = n(459643),
                r = n(942893),
                t = n(351322),
                i = n(807896),
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
            var s = n(202784),
                c = (n(585488), n(277660)),
                u = n.n(c),
                m = n(952793),
                b = n(576469),
                h = n(281743),
                g = n(53821),
                p = n(668214),
                f = n(709318),
                y = n(38562),
                D = n(919022),
                w = n(510588);
            const M = (e, { listId: a }) => (a ? b.Z.select(e, a) : void 0),
                k = (e, a) => {
                    const n = M(e, a),
                        l = n?.user;
                    return l ? D.ZP.select(e, l) : void 0;
                },
                _ = (e, { listId: a }) => w.tt(e, a);
            const S = (0, p.Z)().propsFromState(() => ({ list: M, author: k, dataSaverMode: y.IX, pinnedTimelinesCount: f.Hm, media: _ }))(function (e) {
                    const { list: a, onClick: n } = e;
                    return a ? s.createElement(g.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: a.facepile_urls, followersContext: a.followers_context, isFollowing: Boolean(a.following), isListPinned: a.pinning, isSelected: e.isMember, listId: a.id_str, listVisibility: a.mode, media: e.media, memberCount: a.member_count, membersContext: a.members_context, mode: e.mode, name: a.name, onClick: n, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                v = s.memo(S);
            var C = n(269950),
                I = n(358869);
            const Z = ({ entry: e, feedbackItems: a, module: n, renderEntry: l, shouldDisplayPin: r, ...t }) => {
                    const o = r ? C.H.Pinning : void 0;
                    return e.itemContentRef ? s.createElement(E, (0, i.Z)({}, t, { itemContentRef: e.itemContentRef, mode: o })) : s.createElement(F, (0, i.Z)({}, t, { itemContent: e.content, mode: o }));
                },
                P = s.memo(Z),
                A = d,
                E = ({ itemContentRef: e, shouldDisplayPin: a, ...n }) => {
                    const l = u()(A, e);
                    return s.createElement(I.ZP, (0, i.Z)({}, n, { isMember: l.list.isMember ?? void 0, listRef: l.list }));
                },
                F = ({ itemContent: e, mode: a, shouldDisplayPin: n, ...l }) => {
                    const r = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        t = s.useMemo(() => (0, h.D9)(I.Dx, b.Z, e.id), [e.id]);
                    return r ? s.createElement(I.ZP, (0, i.Z)({ isMember: e.isMember, listRef: t, mode: a }, l)) : s.createElement(v, (0, i.Z)({ isMember: e.isMember, listId: e.id, mode: a }, l));
                },
                T = (e) =>
                    t
                        .iH({
                            component: P,
                            isFocusable: (0, l.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: a } = e.content;
                                return r.Z.forList(a);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, a, n) => {
            n.r(a), n.d(a, { default: () => W });
            var l = n(459643),
                r = n(942893),
                t = n(351322),
                i = n(202784),
                o = n(952793),
                d = n(576469),
                s = n(281743),
                c = n(325686),
                u = n(952428),
                m = n(731708),
                b = n(392237),
                h = n(674132),
                g = n.n(h),
                p = n(121791),
                f = n(346252),
                y = n(374235),
                D = n(725516);
            const w = g().j681933e,
                M = (e) => {
                    const { dataSaverMode: a, isPrivate: n, listId: l, media: r, name: t } = e,
                        o = (0, D.z)(),
                        d = `/i/lists/${l}`,
                        s = i.useCallback(() => {
                            o.scribeAction("click");
                        }, [o]);
                    return i.createElement(y.Z, { basePath: d, listId: l }, i.createElement(u.Z, { link: d, onPress: s, style: k.root }, i.createElement(f.Z, { cropCandidates: r.crop, dataSaverMode: a, icon: "lists", image: r.image }), i.createElement(c.Z, { style: k.name }, i.createElement(m.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, t ? t.trim() : null), n ? i.createElement(p.default, { "aria-label": w, style: k.iconLock }) : null)));
                },
                k = b.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                _ = i.memo(M);
            var S = n(668214),
                v = n(38562),
                C = n(510588);
            const I = (e, a) => a.entry.content.id,
                Z = (e, a) => d.Z.select(e, I(0, a)),
                P = (e, a) => C.tt(e, I(0, a)),
                A = (0, S.Z)()
                    .propsFromState(() => ({ listId: I, list: Z, dataSaverMode: v.IX, media: P }))
                    .adjustStateProps(({ dataSaverMode: e, list: a, listId: n, media: l }) => ({ name: a?.name, isPrivate: "private" === a?.mode, listId: n, dataSaverMode: e, media: l }))
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
            n(585488);
            var x = n(277660),
                L = n.n(x),
                R = n(268260);
            const K = B,
                H = ({ dataSaverMode: e, listRef: a }) => {
                    const n = L()(K, a).list;
                    return i.createElement(O, { dataSaverMode: e, list: n });
                },
                z = i.memo(H),
                N = F,
                O = (e) => {
                    const a = L()(N, e.list),
                        n = (0, R.u)(a);
                    return i.createElement(_, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === a.mode, listId: a.id_str, media: n, name: a.name || "" });
                },
                U = (e) => {
                    const { dataSaverMode: a, entry: n, listId: l } = e,
                        { itemContentRef: r } = n,
                        t = (0, o.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = i.useMemo(() => (0, s.D9)(N, d.Z, l), [l]);
                    if (r) return i.createElement(z, { dataSaverMode: a, listRef: r });
                    if (t) return i.createElement(O, { dataSaverMode: a, list: c });
                    {
                        const { isPrivate: n, media: r, name: t } = e;
                        return i.createElement(_, { dataSaverMode: a, isPrivate: n, listId: l, media: r, name: t });
                    }
                },
                V = A(i.memo(U)),
                W = t
                    .iH({
                        component: V,
                        isFocusable: (0, l.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: a } = e.content;
                            return r.Z.forList(a);
                        },
                        shouldDisplayBorder: (0, l.Z)(!1),
                    })
                    .getHandler();
        },
        268260: (e, a, n) => {
            n.d(a, { u: () => u });
            var l = n(903039),
                r = n(220070),
                t = (n(585488), n(277660)),
                i = n.n(t),
                o = n(401388),
                d = n(506363);
            const s = r.Z,
                c = (e, a = !1) => {
                    const n = i()(s, e),
                        l = n?.media_info?.original_img_height,
                        r = n?.media_info?.original_img_url,
                        t = n?.media_info?.original_img_width;
                    if (l && r && t) {
                        const e = n?.media_info?.salient_rect;
                        let i = [];
                        if (e && !(0, o.Z)(e) && !a) {
                            const { height: a, left: n, top: l, width: r } = e;
                            i = [{ x: n, y: l, w: r, h: a }];
                        }
                        return { image: { url: r, height: l, width: t }, crop: i };
                    }
                },
                u = (e) =>
                    ((e) => {
                        const { custom_banner_media_results: a, default_banner_media_results: n } = e,
                            l = c(a?.result),
                            r = c(n?.result, !0);
                        return l ?? r ?? void 0;
                    })(i()(l.Z, e)) || { image: d.bU, crop: [] };
        },
        564509: (e, a, n) => {
            n.d(a, { Z: () => l });
            n(202784);
            const l = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.10"),
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.1"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.8"),
                        n.e("icons.23"),
                        n.e("icons.2"),
                        n.e("icons.9"),
                        n.e("icons.26"),
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
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("ondemand.HoverCard-6107ac1a"),
                        n.e("ondemand.HoverCard-9f4db315"),
                        n.e("ondemand.HoverCard-63cb1cc4"),
                    ]).then(n.bind(n, 527409)),
            });
        },
        320588: (e, a, n) => {
            n.d(a, { Mt: () => b, Sm: () => m, lg: () => u });
            var l = n(674132),
                r = n.n(l),
                t = n(615656),
                i = n(601576);
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
        286e3: (e, a, n) => {
            n.d(a, { Rc: () => m, nx: () => s });
            var l = n(499627),
                r = n(576469),
                t = n(390387);
            const i = "rweb.channelsTimelineBehavior",
                o = "channelsTimelineBehavior",
                d = Object.freeze({});
            const s = (e) => e[o],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: c }),
                m =
                    ({ listId: e, useRanked: a }) =>
                    (n, l, { userPersistence: t }) => {
                        const o = l(),
                            d = { ...s(o), [e]: { useRanked: a } };
                        n(u(d));
                        const c = r.Z.select(o, e);
                        return c && c.following ? t.get(i).then((n) => t.set(i, { ...n, [e]: { useRanked: a } })) : Promise.resolve();
                    };
            l.Z.register(
                {
                    [o]: function (e = d, a) {
                        return a && a.type === c ? { ...a.payload } : e;
                    },
                },
                () =>
                    (e, a, { userPersistence: n }) =>
                        (0, t.Qb)(a())
                            ? n.get(i).then((a) => {
                                  a && e(u(a));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, a, n) => {
            n.d(a, { $5: () => u, By: () => f, DV: () => M, Fz: () => g, Ge: () => D, Ns: () => v, Wy: () => h, _g: () => _, ax: () => y, cx: () => p, l1: () => k, tt: () => S, xh: () => b });
            var l = n(614983),
                r = n.n(l),
                t = n(842799),
                i = n(286e3),
                o = n(576469),
                d = n(919022),
                s = n(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const n = h(e, a),
                        l = y(e, a),
                        r = D(e, a);
                    return n ? `/i/lists/${n}` : l && r ? `/${l}/lists/${r}` : "";
                },
                m = (e, a) => a.match.params.listId || void 0,
                b = (e, a) => {
                    const n = a.match.params.listId;
                    return r()(n, "listId should always be specified"), n;
                },
                h = (e, a) =>
                    m(0, a) ||
                    ((e, a) => {
                        const n = g(e, a);
                        return n && n.id_str;
                    })(e, a),
                g = (e, a) => {
                    const n = m(0, a);
                    return n ? o.Z.select(e, n) : o.Z.selectByKey(e, w(e, a));
                },
                p = (e, a) => {
                    const n = g(e, a);
                    return n && n.following;
                },
                f = (e, a) => {
                    const n = g(e, a);
                    return n && n.name;
                },
                y = (e, a) => {
                    const n = m(0, a);
                    return a.match.params.screenName || void 0 || (n && o.Z.selectListAuthorScreenName(e, n));
                },
                D = (e, a) => {
                    const n = g(e, a);
                    return a.match.params.slug || (n && n.slug);
                },
                w = (e, a) => {
                    const n = a.match.params.slug,
                        l = a.match.params.screenName;
                    return n && l ? (0, t.Z)(l, n) : "";
                },
                M = (e, a) => {
                    const n =
                        h(e, a) ||
                        ((e, a) => {
                            const n = D(e, a),
                                l = y(e, a);
                            return n && l ? (0, t.Z)(l, n) : "";
                        })(e, a);
                    return o.Z.selectFetchStatus(e, n) || s.ZP.NONE;
                },
                k = (e, a) => {
                    const n = y(e, a);
                    return n ? d.ZP.selectByScreenName(e, n) : void 0;
                },
                _ = (e, a) => {
                    const n = h(e, a),
                        l = (0, i.nx)(e);
                    return (n && l[n] && l[n].useRanked) || !1;
                },
                S = (e, a) => {
                    const n = o.Z.select(e, a);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                v = (e, a) => {
                    const n = g(e, a);
                    return n?.mode;
                };
        },
        642153: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l = n(202784),
                r = n(325686),
                t = n(392237),
                i = n(823161);
            const o = (e) => {
                    const { borderColor: a = "cellBackground", borderWidth: n = "small", style: o, userAvatarSize: s = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        m = c.length,
                        b = "transparent" === a;
                    return l.createElement(
                        r.Z,
                        { style: [d.root, o, { height: i.default.getSizeStyle(s)?.height }] },
                        c.map((e, r) => l.createElement(i.default, { backgroundColor: a, borderColor: a, borderWidth: b ? "none" : n, key: r, size: s, style: [0 !== r && { marginStart: -1 * t.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                d = t.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(136728);
            var l = n(202784),
                r = n(325686),
                t = n(124964),
                i = n(392237);
            const o = ({ children: e, color: a = "gray700", size: n, style: i }) => {
                    const o = [];
                    return (
                        l.Children.forEach(e, (e) => {
                            const r = o.length;
                            e && (r > 0 && o.push(l.createElement(t.Z, { color: a, key: `middot-${r}`, size: n })), o.push(e));
                        }),
                        o.length ? l.createElement(r.Z, { style: [d.middotGroup, i] }, o) : null
                    );
                },
                d = i.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        98440: (e, a, n) => {
            n.r(a), n.d(a, { default: () => d });
            var l = n(202784),
                r = n(890601),
                t = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
        452693: (e, a, n) => {
            n.r(a), n.d(a, { default: () => d });
            var l = n(202784),
                r = n(890601),
                t = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: a });
            };
            o.metadata = { width: 24, height: 24 };
            const d = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.7f11587a.js.map
