"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler"],
    {
        631449: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
            var a = n(459643),
                r = n(942893),
                s = n(351322),
                i = n(807896),
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
                p = n(576469),
                g = n(281743),
                b = n(53821),
                h = n(668214),
                f = n(709318),
                v = n(38562),
                y = n(919022),
                S = n(510588);
            const Z = (e, t) => (t.listId ? p.Z.select(e, t.listId) : void 0),
                k = (e, t) => {
                    const n = Z(e, t),
                        a = n?.user;
                    return a ? y.ZP.select(e, a) : void 0;
                },
                _ = (e, t) => S.tt(e, t.listId);
            const w = (0, h.Z)().propsFromState(() => ({ list: Z, author: k, dataSaverMode: v.IX, pinnedTimelinesCount: f.Hm, media: _ }))(function (e) {
                    const { list: t, onClick: n } = e;
                    return t ? d.createElement(b.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls, followersContext: t.followers_context, isFollowing: Boolean(t.following), isListPinned: t.pinning, isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode, media: e.media, memberCount: t.member_count, membersContext: t.members_context, mode: e.mode, name: t.name, onClick: n, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                I = d.memo(w);
            var C = n(269950),
                M = n(379873);
            const E = ({ entry: e, feedbackItems: t, module: n, renderEntry: a, shouldDisplayPin: r, ...s }) => {
                    const l = r ? C.H.Pinning : void 0;
                    return e.itemContentRef ? d.createElement(x, (0, i.Z)({}, s, { itemContentRef: e.itemContentRef, mode: l })) : d.createElement(T, (0, i.Z)({}, s, { itemContent: e.content, mode: l }));
                },
                P = d.memo(E),
                L = o,
                x = ({ itemContentRef: e, shouldDisplayPin: t, ...n }) => {
                    const a = m()(L, e);
                    return d.createElement(M.ZP, (0, i.Z)({}, n, { isMember: a.list.isMember ?? void 0, listRef: a.list }));
                },
                T = ({ itemContent: e, mode: t, shouldDisplayPin: n, ...a }) => {
                    const r = (0, u.hC)("responsive_web_redux_use_fragment_enabled"),
                        s = d.useMemo(() => (0, g.D9)(M.Dx, p.Z, e.id), [e.id]);
                    return r ? d.createElement(M.ZP, (0, i.Z)({ isMember: e.isMember, listRef: s, mode: t }, a)) : d.createElement(I, (0, i.Z)({ isMember: e.isMember, listId: e.id, mode: t }, a));
                },
                F = (e) =>
                    s
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
                s = n(351322),
                i = n(202784),
                l = n(952793),
                o = n(576469),
                d = n(281743),
                c = n(325686),
                m = n(952428),
                u = n(731708),
                p = n(392237),
                g = n(111677),
                b = n.n(g),
                h = n(121791),
                f = n(346252),
                v = n(878162),
                y = n(725516);
            const S = b().j681933e,
                Z = (e) => {
                    const { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: s } = e,
                        l = (0, y.z)(),
                        o = `/i/lists/${a}`,
                        d = i.useCallback(() => {
                            l.scribeAction("click");
                        }, [l]);
                    return i.createElement(v.Z, { basePath: o, listId: a }, i.createElement(m.Z, { link: o, onPress: d, style: k.root }, i.createElement(f.Z, { cropCandidates: r.crop, dataSaverMode: t, icon: "lists", image: r.image }), i.createElement(c.Z, { style: k.name }, i.createElement(u.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, s ? s.trim() : null), n ? i.createElement(h.default, { "aria-label": S, style: k.iconLock }) : null)));
                },
                k = p.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                _ = i.memo(Z);
            var w = n(668214),
                I = n(38562),
                C = n(510588);
            const M = (e, t) => t.entry.content.id,
                E = (e, t) => o.Z.select(e, M(0, t)),
                P = (e, t) => C.tt(e, M(0, t)),
                L = (0, w.Z)()
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
                A = n(161082);
            const z = B,
                K = ({ dataSaverMode: e, listRef: t }) => {
                    const n = R()(z, t).list;
                    return i.createElement($, { dataSaverMode: e, list: n });
                },
                N = i.memo(K),
                H = T,
                $ = (e) => {
                    const t = R()(H, e.list),
                        n = (0, A.u)(t);
                    return i.createElement(_, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === t.mode, listId: t.id_str, media: n, name: t.name || "" });
                },
                j = (e) => {
                    const { dataSaverMode: t, entry: n, listId: a } = e,
                        { itemContentRef: r } = n,
                        s = (0, l.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = i.useMemo(() => (0, d.D9)(H, o.Z, a), [a]);
                    if (r) return i.createElement(N, { dataSaverMode: t, listRef: r });
                    if (s) return i.createElement($, { dataSaverMode: t, list: c });
                    {
                        const { isPrivate: n, media: r, name: s } = e;
                        return i.createElement(_, { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: s });
                    }
                },
                U = L(i.memo(j)),
                G = s
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
                s = n(390387);
            const i = "rweb.channelsTimelineBehavior",
                l = "channelsTimelineBehavior",
                o = Object.freeze({});
            const d = (e) => e[l],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                m = (e) => ({ payload: e, type: c }),
                u =
                    ({ listId: e, useRanked: t }) =>
                    (n, a, { userPersistence: s }) => {
                        const l = a(),
                            o = { ...d(l), [e]: { useRanked: t } };
                        n(m(o));
                        const c = r.Z.select(l, e);
                        return c && c.following ? s.get(i).then((n) => s.set(i, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            a.Z.register(
                {
                    [l]: function (e = o, t) {
                        return t && t.type === c ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, s.Qb)(t())
                            ? n.get(i).then((t) => {
                                  t && e(m(t));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, t, n) => {
            n.d(t, { $5: () => m, By: () => f, DV: () => Z, Fz: () => b, Ge: () => y, Ns: () => I, Wy: () => g, _g: () => _, ax: () => v, cx: () => h, l1: () => k, tt: () => w, xh: () => p });
            var a = n(614983),
                r = n.n(a),
                s = n(842799),
                i = n(286e3),
                l = n(576469),
                o = n(919022),
                d = n(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                m = (e, t) => {
                    const n = g(e, t),
                        a = v(e, t),
                        r = y(e, t);
                    return n ? `/i/lists/${n}` : a && r ? `/${a}/lists/${r}` : "";
                },
                u = (e, t) => t.match.params.listId || void 0,
                p = (e, t) => {
                    const n = t.match.params.listId;
                    return r()(n, "listId should always be specified"), n;
                },
                g = (e, t) =>
                    u(0, t) ||
                    ((e, t) => {
                        const n = b(e, t);
                        return n && n.id_str;
                    })(e, t),
                b = (e, t) => {
                    const n = u(0, t);
                    return n ? l.Z.select(e, n) : l.Z.selectByKey(e, S(e, t));
                },
                h = (e, t) => {
                    const n = b(e, t);
                    return n && n.following;
                },
                f = (e, t) => {
                    const n = b(e, t);
                    return n && n.name;
                },
                v = (e, t) => {
                    const n = u(0, t);
                    return t.match.params.screenName || void 0 || (n && l.Z.selectListAuthorScreenName(e, n));
                },
                y = (e, t) => {
                    const n = b(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                S = (e, t) => {
                    const n = t.match.params.slug,
                        a = t.match.params.screenName;
                    return n && a ? (0, s.Z)(a, n) : "";
                },
                Z = (e, t) => {
                    const n =
                        g(e, t) ||
                        ((e, t) => {
                            const n = y(e, t),
                                a = v(e, t);
                            return n && a ? (0, s.Z)(a, n) : "";
                        })(e, t);
                    return l.Z.selectFetchStatus(e, n) || d.ZP.NONE;
                },
                k = (e, t) => {
                    const n = v(e, t);
                    return n ? o.ZP.selectByScreenName(e, n) : void 0;
                },
                _ = (e, t) => {
                    const n = g(e, t),
                        a = (0, i.nx)(e);
                    return (n && a[n] && a[n].useRanked) || !1;
                },
                w = (e, t) => {
                    const n = l.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                I = (e, t) => {
                    const n = b(e, t);
                    return n?.mode;
                };
        },
        642153: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                s = n(392237),
                i = n(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: l, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: m } = e,
                        u = c.length,
                        p = "transparent" === t;
                    return a.createElement(
                        r.Z,
                        { style: [o.root, l, { height: i.default.getSizeStyle(d)?.height }] },
                        c.map((e, r) => a.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: p ? "none" : n, key: r, size: d, style: [0 !== r && { marginStart: -1 * s.default.theme.spacesPx[m ? "space4" : "space12"] }, { zIndex: u - r }], uri: e })),
                    );
                },
                o = s.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var a = n(202784),
                r = n(325686),
                s = n(124964),
                i = n(392237);
            const l = ({ children: e, color: t = "gray700", size: n, style: i }) => {
                    const l = [];
                    return (
                        a.Children.forEach(e, (e) => {
                            const r = l.length;
                            e && (r > 0 && l.push(a.createElement(s.Z, { color: t, key: `middot-${r}`, size: n })), l.push(e));
                        }),
                        l.length ? a.createElement(r.Z, { style: [o.middotGroup, i] }, l) : null
                    );
                },
                o = i.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.337ee04a.js.map
