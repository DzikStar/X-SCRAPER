"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler"],
    {
        631449: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
            var a = n(459643),
                r = n(942893),
                i = n(351322),
                s = n(807896),
                l = {
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
            const o = l;
            var d = n(202784),
                c = (n(585488), n(277660)),
                m = n.n(c),
                u = n(952793),
                g = n(576469),
                p = n(281743),
                h = n(53821),
                b = n(668214),
                v = n(709318),
                f = n(38562),
                y = n(919022),
                Z = n(510588);
            const S = (e, t) => (t.listId ? g.Z.select(e, t.listId) : void 0),
                k = (e, t) => {
                    const n = S(e, t),
                        a = n?.user;
                    return a ? y.ZP.select(e, a) : void 0;
                },
                w = (e, t) => Z.tt(e, t.listId);
            const _ = (0, b.Z)().propsFromState(() => ({ list: S, author: k, dataSaverMode: f.IX, pinnedTimelinesCount: v.Hm, media: w }))(function (e) {
                    const { list: t, onClick: n } = e;
                    return t ? d.createElement(h.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls, followersContext: t.followers_context, isFollowing: Boolean(t.following), isListPinned: t.pinning, isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode, media: e.media, memberCount: t.member_count, membersContext: t.members_context, mode: e.mode, name: t.name, onClick: n, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                I = d.memo(_);
            var C = n(269950),
                M = n(379873);
            const E = ({ entry: e, feedbackItems: t, module: n, renderEntry: a, shouldDisplayPin: r, ...i }) => {
                    const l = r ? C.H.Pinning : void 0;
                    return e.itemContentRef ? d.createElement(x, (0, s.Z)({}, i, { itemContentRef: e.itemContentRef, mode: l })) : d.createElement(T, (0, s.Z)({}, i, { itemContent: e.content, mode: l }));
                },
                P = d.memo(E),
                L = o,
                x = ({ itemContentRef: e, shouldDisplayPin: t, ...n }) => {
                    const a = m()(L, e);
                    return d.createElement(M.ZP, (0, s.Z)({}, n, { isMember: a.list.isMember ?? void 0, listRef: a.list }));
                },
                T = ({ itemContent: e, mode: t, shouldDisplayPin: n, ...a }) => {
                    const r = (0, u.hC)("responsive_web_redux_use_fragment_enabled"),
                        i = d.useMemo(() => (0, p.D9)(M.Dx, g.Z, e.id), [e.id]);
                    return r ? d.createElement(M.ZP, (0, s.Z)({ isMember: e.isMember, listRef: i, mode: t }, a)) : d.createElement(I, (0, s.Z)({ isMember: e.isMember, listId: e.id, mode: t }, a));
                },
                F = (e) =>
                    i
                        .iH({
                            component: P,
                            isFocusable: (0, a.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: t } = e.content;
                                return r.Z.forList(t);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, t, n) => {
            n.r(t), n.d(t, { default: () => G });
            var a = n(459643),
                r = n(942893),
                i = n(351322),
                s = n(202784),
                l = n(952793),
                o = n(576469),
                d = n(281743),
                c = n(325686),
                m = n(952428),
                u = n(731708),
                g = n(392237),
                p = n(111677),
                h = n.n(p),
                b = n(121791),
                v = n(346252),
                f = n(878162),
                y = n(725516);
            const Z = h().j681933e,
                S = (e) => {
                    const { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: i } = e,
                        l = (0, y.z)(),
                        o = `/i/lists/${a}`,
                        d = s.useCallback(() => {
                            l.scribeAction("click");
                        }, [l]);
                    return s.createElement(f.Z, { basePath: o, listId: a }, s.createElement(m.Z, { link: o, onPress: d, style: k.root }, s.createElement(v.Z, { cropCandidates: r.crop, dataSaverMode: t, icon: "lists", image: r.image }), s.createElement(c.Z, { style: k.name }, s.createElement(u.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, i ? i.trim() : null), n ? s.createElement(b.default, { "aria-label": Z, style: k.iconLock }) : null)));
                },
                k = g.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                w = s.memo(S);
            var _ = n(668214),
                I = n(38562),
                C = n(510588);
            const M = (e, t) => t.entry.content.id,
                E = (e, t) => o.Z.select(e, M(0, t)),
                P = (e, t) => C.tt(e, M(0, t)),
                L = (0, _.Z)()
                    .propsFromState(() => ({ listId: M, list: E, dataSaverMode: I.IX, media: P }))
                    .adjustStateProps(({ dataSaverMode: e, list: t, listId: n, media: a }) => ({ name: t?.name, isPrivate: "private" === t?.mode, listId: n, dataSaverMode: e, media: a }))
                    .withAnalytics();
            var x = {
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
            const T = x;
            var F = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const B = F;
            n(585488);
            var D = n(277660),
                R = n.n(D),
                z = n(161082);
            const A = B,
                K = ({ dataSaverMode: e, listRef: t }) => {
                    const n = R()(A, t).list;
                    return s.createElement($, { dataSaverMode: e, list: n });
                },
                N = s.memo(K),
                H = T,
                $ = (e) => {
                    const t = R()(H, e.list),
                        n = (0, z.u)(t);
                    return s.createElement(w, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === t.mode, listId: t.id_str, media: n, name: t.name || "" });
                },
                j = (e) => {
                    const { dataSaverMode: t, entry: n, listId: a } = e,
                        { itemContentRef: r } = n,
                        i = (0, l.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = s.useMemo(() => (0, d.D9)(H, o.Z, a), [a]);
                    if (r) return s.createElement(N, { dataSaverMode: t, listRef: r });
                    if (i) return s.createElement($, { dataSaverMode: t, list: c });
                    {
                        const { isPrivate: n, media: r, name: i } = e;
                        return s.createElement(w, { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: i });
                    }
                },
                U = L(s.memo(j)),
                G = i
                    .iH({
                        component: U,
                        isFocusable: (0, a.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: t } = e.content;
                            return r.Z.forList(t);
                        },
                        shouldDisplayBorder: (0, a.Z)(!1),
                    })
                    .getHandler();
        },
        286e3: (e, t, n) => {
            n.d(t, { Rc: () => u, nx: () => d });
            var a = n(499627),
                r = n(576469),
                i = n(390387);
            const s = "rweb.channelsTimelineBehavior",
                l = "channelsTimelineBehavior",
                o = Object.freeze({});
            const d = (e) => e[l],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                m = (e) => ({ payload: e, type: c }),
                u =
                    ({ listId: e, useRanked: t }) =>
                    (n, a, { userPersistence: i }) => {
                        const l = a(),
                            o = { ...d(l), [e]: { useRanked: t } };
                        n(m(o));
                        const c = r.Z.select(l, e);
                        return c && c.following ? i.get(s).then((n) => i.set(s, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            a.Z.register(
                {
                    [l]: function (e = o, t) {
                        return t && t.type === c ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, i.Qb)(t())
                            ? n.get(s).then((t) => {
                                  t && e(m(t));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, t, n) => {
            n.d(t, { $5: () => m, By: () => v, DV: () => S, Fz: () => h, Ge: () => y, Ns: () => I, Wy: () => p, _g: () => w, ax: () => f, cx: () => b, l1: () => k, tt: () => _, xh: () => g });
            var a = n(614983),
                r = n.n(a),
                i = n(842799),
                s = n(286e3),
                l = n(576469),
                o = n(919022),
                d = n(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                m = (e, t) => {
                    const n = p(e, t),
                        a = f(e, t),
                        r = y(e, t);
                    return n ? `/i/lists/${n}` : a && r ? `/${a}/lists/${r}` : "";
                },
                u = (e, t) => t.match.params.listId || void 0,
                g = (e, t) => {
                    const n = t.match.params.listId;
                    return r()(n, "listId should always be specified"), n;
                },
                p = (e, t) =>
                    u(0, t) ||
                    ((e, t) => {
                        const n = h(e, t);
                        return n && n.id_str;
                    })(e, t),
                h = (e, t) => {
                    const n = u(0, t);
                    return n ? l.Z.select(e, n) : l.Z.selectByKey(e, Z(e, t));
                },
                b = (e, t) => {
                    const n = h(e, t);
                    return n && n.following;
                },
                v = (e, t) => {
                    const n = h(e, t);
                    return n && n.name;
                },
                f = (e, t) => {
                    const n = u(0, t);
                    return t.match.params.screenName || void 0 || (n && l.Z.selectListAuthorScreenName(e, n));
                },
                y = (e, t) => {
                    const n = h(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                Z = (e, t) => {
                    const n = t.match.params.slug,
                        a = t.match.params.screenName;
                    return n && a ? (0, i.Z)(a, n) : "";
                },
                S = (e, t) => {
                    const n =
                        p(e, t) ||
                        ((e, t) => {
                            const n = y(e, t),
                                a = f(e, t);
                            return n && a ? (0, i.Z)(a, n) : "";
                        })(e, t);
                    return l.Z.selectFetchStatus(e, n) || d.ZP.NONE;
                },
                k = (e, t) => {
                    const n = f(e, t);
                    return n ? o.ZP.selectByScreenName(e, n) : void 0;
                },
                w = (e, t) => {
                    const n = p(e, t),
                        a = (0, s.nx)(e);
                    return (n && a[n] && a[n].useRanked) || !1;
                },
                _ = (e, t) => {
                    const n = l.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                I = (e, t) => {
                    const n = h(e, t);
                    return n?.mode;
                };
        },
        642153: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                i = n(392237),
                s = n(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: l, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: m } = e,
                        u = c.length,
                        g = "transparent" === t;
                    return a.createElement(
                        r.Z,
                        { style: [o.root, l, { height: s.default.getSizeStyle(d)?.height }] },
                        c.map((e, r) => a.createElement(s.default, { backgroundColor: t, borderColor: t, borderWidth: g ? "none" : n, key: r, size: d, style: [0 !== r && { marginStart: -1 * i.default.theme.spacesPx[m ? "space4" : "space12"] }, { zIndex: u - r }], uri: e })),
                    );
                },
                o = i.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var a = n(202784),
                r = n(325686),
                i = n(124964),
                s = n(392237);
            const l = ({ children: e, color: t = "gray700", size: n, style: s }) => {
                    const l = [];
                    return (
                        a.Children.forEach(e, (e) => {
                            const r = l.length;
                            e && (r > 0 && l.push(a.createElement(i.Z, { color: t, key: `middot-${r}`, size: n })), l.push(e));
                        }),
                        l.length ? a.createElement(r.Z, { style: [o.middotGroup, s] }, l) : null
                    );
                },
                o = s.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.6774236a.js.map
