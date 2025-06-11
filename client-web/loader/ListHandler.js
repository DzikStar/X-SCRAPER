"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler", "icons/IconPlus-js"],
    {
        631449: (e, t, n) => {
            n.r(t), n.d(t, { default: () => T });
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
            var c = n(202784),
                d = (n(585488), n(277660)),
                m = n.n(d),
                u = n(952793),
                h = n(576469),
                g = n(281743),
                v = n(53821),
                p = n(668214),
                b = n(709318),
                f = n(38562),
                y = n(919022),
                Z = n(510588);
            const S = (e, t) => (t.listId ? h.Z.select(e, t.listId) : void 0),
                w = (e, t) => {
                    const n = S(e, t),
                        a = n?.user;
                    return a ? y.ZP.select(e, a) : void 0;
                },
                k = (e, t) => Z.tt(e, t.listId);
            const M = (0, p.Z)().propsFromState(() => ({ list: S, author: w, dataSaverMode: f.IX, pinnedTimelinesCount: b.Hm, media: k }))(function (e) {
                    const { list: t, onClick: n } = e;
                    return t ? c.createElement(v.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls, followersContext: t.followers_context, isFollowing: Boolean(t.following), isListPinned: t.pinning, isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode, media: e.media, memberCount: t.member_count, membersContext: t.members_context, mode: e.mode, name: t.name, onClick: n, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                _ = c.memo(M);
            var E = n(269950),
                I = n(379873);
            const C = ({ entry: e, feedbackItems: t, module: n, renderEntry: a, shouldDisplayPin: r, ...i }) => {
                    const l = r ? E.H.Pinning : void 0;
                    return e.itemContentRef ? c.createElement(L, (0, s.Z)({}, i, { itemContentRef: e.itemContentRef, mode: l })) : c.createElement(z, (0, s.Z)({}, i, { itemContent: e.content, mode: l }));
                },
                P = c.memo(C),
                x = o,
                L = ({ itemContentRef: e, shouldDisplayPin: t, ...n }) => {
                    const a = m()(x, e);
                    return c.createElement(I.ZP, (0, s.Z)({}, n, { isMember: a.list.isMember ?? void 0, listRef: a.list }));
                },
                z = ({ itemContent: e, mode: t, shouldDisplayPin: n, ...a }) => {
                    const r = (0, u.hC)("responsive_web_redux_use_fragment_enabled"),
                        i = c.useMemo(() => (0, g.D9)(I.Dx, h.Z, e.id), [e.id]);
                    return r ? c.createElement(I.ZP, (0, s.Z)({ isMember: e.isMember, listRef: i, mode: t }, a)) : c.createElement(_, (0, s.Z)({ isMember: e.isMember, listId: e.id, mode: t }, a));
                },
                T = (e) =>
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
            n.r(t), n.d(t, { default: () => U });
            var a = n(459643),
                r = n(942893),
                i = n(351322),
                s = n(202784),
                l = n(952793),
                o = n(576469),
                c = n(281743),
                d = n(325686),
                m = n(952428),
                u = n(731708),
                h = n(392237),
                g = n(111677),
                v = n.n(g),
                p = n(121791),
                b = n(346252),
                f = n(878162),
                y = n(725516);
            const Z = v().j681933e,
                S = (e) => {
                    const { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: i } = e,
                        l = (0, y.z)(),
                        o = `/i/lists/${a}`,
                        c = s.useCallback(() => {
                            l.scribeAction("click");
                        }, [l]);
                    return s.createElement(f.Z, { basePath: o, listId: a }, s.createElement(m.Z, { link: o, onPress: c, style: w.root }, s.createElement(b.Z, { cropCandidates: r.crop, dataSaverMode: t, icon: "lists", image: r.image }), s.createElement(d.Z, { style: w.name }, s.createElement(u.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, i ? i.trim() : null), n ? s.createElement(p.default, { "aria-label": Z, style: w.iconLock }) : null)));
                },
                w = h.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                k = s.memo(S);
            var M = n(668214),
                _ = n(38562),
                E = n(510588);
            const I = (e, t) => t.entry.content.id,
                C = (e, t) => o.Z.select(e, I(0, t)),
                P = (e, t) => E.tt(e, I(0, t)),
                x = (0, M.Z)()
                    .propsFromState(() => ({ listId: I, list: C, dataSaverMode: _.IX, media: P }))
                    .adjustStateProps(({ dataSaverMode: e, list: t, listId: n, media: a }) => ({ name: t?.name, isPrivate: "private" === t?.mode, listId: n, dataSaverMode: e, media: a }))
                    .withAnalytics();
            var L = {
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
            const z = L;
            var T = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const B = T;
            n(585488);
            var D = n(277660),
                F = n.n(D),
                R = n(161082);
            const H = B,
                A = ({ dataSaverMode: e, listRef: t }) => {
                    const n = F()(H, t).list;
                    return s.createElement(V, { dataSaverMode: e, list: n });
                },
                K = s.memo(A),
                N = z,
                V = (e) => {
                    const t = F()(N, e.list),
                        n = (0, R.u)(t);
                    return s.createElement(k, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === t.mode, listId: t.id_str, media: n, name: t.name || "" });
                },
                j = (e) => {
                    const { dataSaverMode: t, entry: n, listId: a } = e,
                        { itemContentRef: r } = n,
                        i = (0, l.hC)("responsive_web_redux_use_fragment_enabled"),
                        d = s.useMemo(() => (0, c.D9)(N, o.Z, a), [a]);
                    if (r) return s.createElement(K, { dataSaverMode: t, listRef: r });
                    if (i) return s.createElement(V, { dataSaverMode: t, list: d });
                    {
                        const { isPrivate: n, media: r, name: i } = e;
                        return s.createElement(k, { dataSaverMode: t, isPrivate: n, listId: a, media: r, name: i });
                    }
                },
                $ = x(s.memo(j)),
                U = i
                    .iH({
                        component: $,
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
            n.d(t, { Rc: () => u, nx: () => c });
            var a = n(499627),
                r = n(576469),
                i = n(390387);
            const s = "rweb.channelsTimelineBehavior",
                l = "channelsTimelineBehavior",
                o = Object.freeze({});
            const c = (e) => e[l],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                m = (e) => ({ payload: e, type: d }),
                u =
                    ({ listId: e, useRanked: t }) =>
                    (n, a, { userPersistence: i }) => {
                        const l = a(),
                            o = { ...c(l), [e]: { useRanked: t } };
                        n(m(o));
                        const d = r.Z.select(l, e);
                        return d && d.following ? i.get(s).then((n) => i.set(s, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            a.Z.register(
                {
                    [l]: function (e = o, t) {
                        return t && t.type === d ? { ...t.payload } : e;
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
            n.d(t, { $5: () => m, By: () => b, DV: () => S, Fz: () => v, Ge: () => y, Ns: () => _, Wy: () => g, _g: () => k, ax: () => f, cx: () => p, l1: () => w, tt: () => M, xh: () => h });
            var a = n(614983),
                r = n.n(a),
                i = n(842799),
                s = n(286e3),
                l = n(576469),
                o = n(919022),
                c = n(312771);
            const d = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                m = (e, t) => {
                    const n = g(e, t),
                        a = f(e, t),
                        r = y(e, t);
                    return n ? `/i/lists/${n}` : a && r ? `/${a}/lists/${r}` : "";
                },
                u = (e, t) => t.match.params.listId || void 0,
                h = (e, t) => {
                    const n = t.match.params.listId;
                    return r()(n, "listId should always be specified"), n;
                },
                g = (e, t) =>
                    u(0, t) ||
                    ((e, t) => {
                        const n = v(e, t);
                        return n && n.id_str;
                    })(e, t),
                v = (e, t) => {
                    const n = u(0, t);
                    return n ? l.Z.select(e, n) : l.Z.selectByKey(e, Z(e, t));
                },
                p = (e, t) => {
                    const n = v(e, t);
                    return n && n.following;
                },
                b = (e, t) => {
                    const n = v(e, t);
                    return n && n.name;
                },
                f = (e, t) => {
                    const n = u(0, t);
                    return t.match.params.screenName || void 0 || (n && l.Z.selectListAuthorScreenName(e, n));
                },
                y = (e, t) => {
                    const n = v(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                Z = (e, t) => {
                    const n = t.match.params.slug,
                        a = t.match.params.screenName;
                    return n && a ? (0, i.Z)(a, n) : "";
                },
                S = (e, t) => {
                    const n =
                        g(e, t) ||
                        ((e, t) => {
                            const n = y(e, t),
                                a = f(e, t);
                            return n && a ? (0, i.Z)(a, n) : "";
                        })(e, t);
                    return l.Z.selectFetchStatus(e, n) || c.ZP.NONE;
                },
                w = (e, t) => {
                    const n = f(e, t);
                    return n ? o.ZP.selectByScreenName(e, n) : void 0;
                },
                k = (e, t) => {
                    const n = g(e, t),
                        a = (0, s.nx)(e);
                    return (n && a[n] && a[n].useRanked) || !1;
                },
                M = (e, t) => {
                    const n = l.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: d };
                },
                _ = (e, t) => {
                    const n = v(e, t);
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
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: m } = e,
                        u = d.length,
                        h = "transparent" === t;
                    return a.createElement(
                        r.Z,
                        { style: [o.root, l, { height: s.default.getSizeStyle(c)?.height }] },
                        d.map((e, r) => a.createElement(s.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : n, key: r, size: c, style: [0 !== r && { marginStart: -1 * i.default.theme.spacesPx[m ? "space4" : "space12"] }, { zIndex: u - r }], uri: e })),
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
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        379327: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.0dd58f1a.js.map
