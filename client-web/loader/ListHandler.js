"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler", "icons/IconPlus-js"],
    {
        631449: (e, t, a) => {
            a.r(t), a.d(t, { default: () => B });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                s = a(807896),
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
            var c = a(202784),
                d = (a(585488), a(277660)),
                m = a.n(d),
                u = a(952793),
                h = a(576469),
                g = a(281743),
                v = a(53821),
                p = a(668214),
                b = a(709318),
                f = a(38562),
                y = a(919022),
                Z = a(510588);
            const w = (e, t) => (t.listId ? h.Z.select(e, t.listId) : void 0),
                S = (e, t) => {
                    const a = w(e, t),
                        n = a?.user;
                    return n ? y.ZP.select(e, n) : void 0;
                },
                k = (e, t) => Z.tt(e, t.listId);
            const M = (0, p.Z)().propsFromState(() => ({ list: w, author: S, dataSaverMode: f.IX, pinnedTimelinesCount: b.Hm, media: k }))(function (e) {
                    const { list: t, onClick: a } = e;
                    return t ? c.createElement(v.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls, followersContext: t.followers_context, isFollowing: Boolean(t.following), isListPinned: t.pinning, isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode, media: e.media, memberCount: t.member_count, membersContext: t.members_context, mode: e.mode, name: t.name, onClick: a, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                _ = c.memo(M);
            var E = a(269950),
                C = a(379873);
            const I = ({ entry: e, feedbackItems: t, module: a, renderEntry: n, shouldDisplayPin: r, ...i }) => {
                    const l = r ? E.H.Pinning : void 0;
                    return e.itemContentRef ? c.createElement(L, (0, s.Z)({}, i, { itemContentRef: e.itemContentRef, mode: l })) : c.createElement(z, (0, s.Z)({}, i, { itemContent: e.content, mode: l }));
                },
                P = c.memo(I),
                x = o,
                L = ({ itemContentRef: e, shouldDisplayPin: t, ...a }) => {
                    const n = m()(x, e);
                    return c.createElement(C.ZP, (0, s.Z)({}, a, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                z = ({ itemContent: e, mode: t, shouldDisplayPin: a, ...n }) => {
                    const r = (0, u.hC)("responsive_web_redux_use_fragment_enabled"),
                        i = c.useMemo(() => (0, g.D9)(C.Dx, h.Z, e.id), [e.id]);
                    return r ? c.createElement(C.ZP, (0, s.Z)({ isMember: e.isMember, listRef: i, mode: t }, n)) : c.createElement(_, (0, s.Z)({ isMember: e.isMember, listId: e.id, mode: t }, n));
                },
                B = (e) =>
                    i
                        .iH({
                            component: P,
                            isFocusable: (0, n.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: t } = e.content;
                                return r.Z.forList(t);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, t, a) => {
            a.r(t), a.d(t, { default: () => U });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                s = a(202784),
                l = a(952793),
                o = a(576469),
                c = a(281743),
                d = a(325686),
                m = a(952428),
                u = a(731708),
                h = a(392237),
                g = a(111677),
                v = a.n(g),
                p = a(121791),
                b = a(346252),
                f = a(878162),
                y = a(725516);
            const Z = v().j681933e,
                w = (e) => {
                    const { dataSaverMode: t, isPrivate: a, listId: n, media: r, name: i } = e,
                        l = (0, y.z)(),
                        o = `/i/lists/${n}`,
                        c = s.useCallback(() => {
                            l.scribeAction("click");
                        }, [l]);
                    return s.createElement(f.Z, { basePath: o, listId: n }, s.createElement(m.Z, { link: o, onPress: c, style: S.root }, s.createElement(b.Z, { cropCandidates: r.crop, dataSaverMode: t, icon: "lists", image: r.image }), s.createElement(d.Z, { style: S.name }, s.createElement(u.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, i ? i.trim() : null), a ? s.createElement(p.default, { "aria-label": Z, style: S.iconLock }) : null)));
                },
                S = h.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                k = s.memo(w);
            var M = a(668214),
                _ = a(38562),
                E = a(510588);
            const C = (e, t) => t.entry.content.id,
                I = (e, t) => o.Z.select(e, C(0, t)),
                P = (e, t) => E.tt(e, C(0, t)),
                x = (0, M.Z)()
                    .propsFromState(() => ({ listId: C, list: I, dataSaverMode: _.IX, media: P }))
                    .adjustStateProps(({ dataSaverMode: e, list: t, listId: a, media: n }) => ({ name: t?.name, isPrivate: "private" === t?.mode, listId: a, dataSaverMode: e, media: n }))
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
            var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const D = B;
            a(585488);
            var T = a(277660),
                F = a.n(T),
                R = a(161082);
            const H = D,
                A = ({ dataSaverMode: e, listRef: t }) => {
                    const a = F()(H, t).list;
                    return s.createElement(j, { dataSaverMode: e, list: a });
                },
                K = s.memo(A),
                N = z,
                j = (e) => {
                    const t = F()(N, e.list),
                        a = (0, R.u)(t);
                    return s.createElement(k, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === t.mode, listId: t.id_str, media: a, name: t.name || "" });
                },
                V = (e) => {
                    const { dataSaverMode: t, entry: a, listId: n } = e,
                        { itemContentRef: r } = a,
                        i = (0, l.hC)("responsive_web_redux_use_fragment_enabled"),
                        d = s.useMemo(() => (0, c.D9)(N, o.Z, n), [n]);
                    if (r) return s.createElement(K, { dataSaverMode: t, listRef: r });
                    if (i) return s.createElement(j, { dataSaverMode: t, list: d });
                    {
                        const { isPrivate: a, media: r, name: i } = e;
                        return s.createElement(k, { dataSaverMode: t, isPrivate: a, listId: n, media: r, name: i });
                    }
                },
                $ = x(s.memo(V)),
                U = i
                    .iH({
                        component: $,
                        isFocusable: (0, n.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: t } = e.content;
                            return r.Z.forList(t);
                        },
                        shouldDisplayBorder: (0, n.Z)(!1),
                    })
                    .getHandler();
        },
        286e3: (e, t, a) => {
            a.d(t, { Rc: () => u, nx: () => c });
            var n = a(499627),
                r = a(576469),
                i = a(390387);
            const s = "rweb.channelsTimelineBehavior",
                l = "channelsTimelineBehavior",
                o = Object.freeze({});
            const c = (e) => e[l],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                m = (e) => ({ payload: e, type: d }),
                u =
                    ({ listId: e, useRanked: t }) =>
                    (a, n, { userPersistence: i }) => {
                        const l = n(),
                            o = { ...c(l), [e]: { useRanked: t } };
                        a(m(o));
                        const d = r.Z.select(l, e);
                        return d && d.following ? i.get(s).then((a) => i.set(s, { ...a, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [l]: function (e = o, t) {
                        return t && t.type === d ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: a }) =>
                        (0, i.Qb)(t())
                            ? a.get(s).then((t) => {
                                  t && e(m(t));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, t, a) => {
            a.d(t, { $5: () => m, By: () => b, DV: () => w, Fz: () => v, Ge: () => y, Ns: () => _, Wy: () => g, _g: () => k, ax: () => f, cx: () => p, l1: () => S, tt: () => M, xh: () => h });
            var n = a(614983),
                r = a.n(n),
                i = a(842799),
                s = a(286e3),
                l = a(576469),
                o = a(919022),
                c = a(312771);
            const d = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                m = (e, t) => {
                    const a = g(e, t),
                        n = f(e, t),
                        r = y(e, t);
                    return a ? `/i/lists/${a}` : n && r ? `/${n}/lists/${r}` : "";
                },
                u = (e, t) => t.match.params.listId || void 0,
                h = (e, t) => {
                    const a = t.match.params.listId;
                    return r()(a, "listId should always be specified"), a;
                },
                g = (e, t) =>
                    u(0, t) ||
                    ((e, t) => {
                        const a = v(e, t);
                        return a && a.id_str;
                    })(e, t),
                v = (e, t) => {
                    const a = u(0, t);
                    return a ? l.Z.select(e, a) : l.Z.selectByKey(e, Z(e, t));
                },
                p = (e, t) => {
                    const a = v(e, t);
                    return a && a.following;
                },
                b = (e, t) => {
                    const a = v(e, t);
                    return a && a.name;
                },
                f = (e, t) => {
                    const a = u(0, t);
                    return t.match.params.screenName || void 0 || (a && l.Z.selectListAuthorScreenName(e, a));
                },
                y = (e, t) => {
                    const a = v(e, t);
                    return t.match.params.slug || (a && a.slug);
                },
                Z = (e, t) => {
                    const a = t.match.params.slug,
                        n = t.match.params.screenName;
                    return a && n ? (0, i.Z)(n, a) : "";
                },
                w = (e, t) => {
                    const a =
                        g(e, t) ||
                        ((e, t) => {
                            const a = y(e, t),
                                n = f(e, t);
                            return a && n ? (0, i.Z)(n, a) : "";
                        })(e, t);
                    return l.Z.selectFetchStatus(e, a) || c.ZP.NONE;
                },
                S = (e, t) => {
                    const a = f(e, t);
                    return a ? o.ZP.selectByScreenName(e, a) : void 0;
                },
                k = (e, t) => {
                    const a = g(e, t),
                        n = (0, s.nx)(e);
                    return (a && n[a] && n[a].useRanked) || !1;
                },
                M = (e, t) => {
                    const a = l.Z.select(e, t);
                    if (a) {
                        const e = a.customBanner;
                        return e || a.defaultBanner;
                    }
                    return { crop: [], image: d };
                },
                _ = (e, t) => {
                    const a = v(e, t);
                    return a?.mode;
                };
        },
        642153: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686),
                i = a(392237),
                s = a(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: a = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: m } = e,
                        u = d.length,
                        h = "transparent" === t;
                    return n.createElement(
                        r.Z,
                        { style: [o.root, l, { height: s.default.getSizeStyle(c)?.height }] },
                        d.map((e, r) => n.createElement(s.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : a, key: r, size: c, style: [0 !== r && { marginStart: -1 * i.default.theme.spacesPx[m ? "space4" : "space12"] }, { zIndex: u - r }], uri: e })),
                    );
                },
                o = i.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        470397: (e, t, a) => {
            a.d(t, { Z: () => l });
            a(136728);
            var n = a(202784),
                r = a(325686),
                i = a(124964),
                s = a(392237);
            const l = ({ children: e, color: t = "gray700", size: a, style: s }) => {
                    const l = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const r = l.length;
                            e && (r > 0 && l.push(n.createElement(i.Z, { color: t, key: `middot-${r}`, size: a })), l.push(e));
                        }),
                        l.length ? n.createElement(r.Z, { style: [o.middotGroup, s] }, l) : null
                    );
                },
                o = s.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        379327: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.9c0c5b7a.js.map
