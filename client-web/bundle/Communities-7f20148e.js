"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-7f20148e"],
    {
        907353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => z });
            n(543673), n(240753), n(128399);
            var r = n(202784),
                a = n(325686),
                o = n(107267),
                c = n(674132),
                l = n.n(c),
                i = n(718e3),
                s = n(252021),
                m = n(507651),
                u = n(652904),
                p = n(952793),
                d = n(45836),
                h = n(844685),
                E = n(443781),
                f = n(736063),
                y = n(810641),
                _ = n(688688),
                C = n(317979),
                b = n(376273),
                g = n(986564),
                Z = (n(585488), n(457311)),
                w = n(965245),
                v = n(127218),
                x = n(206427);
            const k = (e) => e.__id,
                S = l().cae9962e,
                T = g.Z,
                A = (e) => ("Community" !== e?.result?.__typename ? null : r.createElement(x.Z, { item: e.result }));
            function M(e) {
                const { data: t, fetchNext: n } = (0, v.C)(T, { topicId: e.topicId ? e.topicId : "1" }),
                    a = t?.fetch_popular_communities?.items_results.filter((e) => "Community" === e.result?.__typename);
                return 0 === a.length ? r.createElement(Z.Z, { message: S }) : r.createElement(w.Z, { cacheKey: "CommunitiesTopicSearch", identityFunction: k, items: a, onNearEnd: n, renderer: A });
            }
            const I = l().cb6adb10,
                H = () => r.createElement(y.Z, { entryConfiguration: C.Z, module: _.Z, refreshControl: null, title: "" }),
                U = { context: "TopicExplorerCarousel" },
                B = { context: "TopicExplorerTimeline" };
            function P() {
                const { featureSwitches: e } = r.useContext(E.rC),
                    t = e.isTrue("communities_topic_carousel_enabled"),
                    [n, a] = r.useState(null);
                return r.createElement(u.Z, null, r.createElement(h.Z, { text: I }), r.createElement(f.H, { errorConfig: U }, t ? r.createElement(b.Z, { setTopic: a, topic: n }) : null, r.createElement(f.H, { errorConfig: B }, n && t ? r.createElement(M, { topicId: n }) : r.createElement(H, null))));
            }
            const L = l().d7d9be8a,
                N = l().h02a6fe6,
                O = l().i66136aa,
                R = l().d601fc20,
                D = (e) => {
                    const t = (0, p.hC)("communities_global_communities_post_search_enabled"),
                        n = (0, p.hC)("communities_global_communities_latest_post_search_enabled"),
                        c = (0, o.useHistory)(),
                        l = (0, o.useLocation)(),
                        h = r.useMemo(
                            () => [
                                { to: { pathname: `/i/communities/suggested${l.search}` }, key: N, label: N, isActive: () => "/i/communities/suggested" === l.pathname },
                                { to: { pathname: `/i/communities/top${l.search}` }, key: O, label: O, isActive: () => "/i/communities/top" === l.pathname },
                                { to: { pathname: `/i/communities/latest${l.search}` }, key: R, label: R, isActive: () => "/i/communities/latest" === l.pathname },
                            ],
                            [l.pathname, l.search],
                        ),
                        E = r.useMemo(() => new URLSearchParams(l.search).get("q") ?? void 0, [l.search]),
                        f = r.useMemo(() => (E ? (t && n ? r.createElement(a.Z, null, r.createElement(m.Z, { links: h }), "/i/communities/top" === l.pathname ? r.createElement(d.mI, { query: E }) : "/i/communities/latest" === l.pathname ? r.createElement(d.FP, { query: E }) : r.createElement(d.gH, { query: E })) : r.createElement(d.gH, { query: E })) : r.createElement(P, null)), [h, E, l.pathname, t, n]);
                    return r.createElement(u.Z, null, r.createElement(s.Z, { backLocation: "/", customSearchBox: r.createElement(d.DO, { initialValue: E }), history: c, primaryContent: f, sidebarContent: r.createElement(i.Z, { withSearchBox: !1 }), title: L, withSearchBox: !0 }));
                },
                z = r.memo(D);
        },
        206427: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(887421),
                a = n(202784),
                o = (n(585488), n(277660)),
                c = n.n(o),
                l = n(392237),
                i = n(544239),
                s = n(784380),
                m = n(910805);
            const u = ({ item: e }) => {
                    const t = c()(r.Z, e),
                        n = (0, m.L)(t),
                        o = t.is_nsfw || !1;
                    return a.createElement(i.Z, { communityId: t.rest_id, isNsfw: o, media: n, memberCount: t.member_count, membersFacepile: a.createElement(s.Z, { community: t, style: p.facepile }), name: t.name, topic: t.primary_community_topic?.topic_name });
                },
                p = l.default.create((e) => ({ facepile: { justifyContent: "flex-start" } })),
                d = a.memo(u);
        },
        45836: (e, t, n) => {
            n.d(t, { DO: () => S, l1: () => H, gH: () => b, FP: () => Q, mI: () => $ });
            var r = n(548622),
                a = n(202784),
                o = (n(585488), n(457311)),
                c = n(674132),
                l = n.n(c),
                i = n(965245),
                s = n(736063),
                m = n(127218),
                u = n(206427);
            const p = { context: "CommunitiesSearchQuery" },
                d = l().c170a564,
                h = l().ae111c99,
                E = (e) => e.__id,
                f = r.Z,
                y = (e) => ("Community" !== e?.result?.__typename ? null : a.createElement(u.Z, { item: e.result })),
                _ = ({ query: e = "" }) => {
                    const { data: t, fetchNext: n } = (0, m.C)(f, { query: e }),
                        r = t?.communities_search_slice?.items_results.filter((e) => "Community" === e.result?.__typename);
                    return 0 === r.length ? a.createElement(o.Z, { header: h({ query: e }), message: d }) : a.createElement(i.Z, { cacheKey: "CommunitiesSearch", identityFunction: E, items: r, onNearEnd: n, renderer: y });
                },
                C = ({ query: e }) => (e ? a.createElement(s.H, { errorConfig: p }, a.createElement(_, { query: e })) : null),
                b = a.memo(C);
            var g = n(107267),
                Z = n(371344),
                w = n(956272),
                v = n(666536);
            const x = l().cbd1aef8,
                k = ({ initialValue: e = "" }) => {
                    const t = a.useRef(!1);
                    a.useEffect(
                        () => (
                            (t.current = !0),
                            () => {
                                t.current = !1;
                            }
                        ),
                        [],
                    );
                    const [n, r] = a.useState(e),
                        o = (0, g.useHistory)(),
                        c = (0, g.useLocation)(),
                        l = a.useCallback(() => {
                            r(""), o.replace(c.pathname);
                        }, [o, c.pathname]),
                        i = a.useMemo(
                            () =>
                                (0, v.Z)((e) => {
                                    t.current && (e.length > 0 ? o.replace(`${c.pathname}?q=${e}`) : l());
                                }, 1e3),
                            [l, o, c.pathname],
                        ),
                        s = a.useCallback(
                            (e) => {
                                const { value: t } = e.target;
                                r(t), i(t);
                            },
                            [i],
                        );
                    return a.createElement(Z.Z, { Icon: w.default, autoComplete: "off", isCompact: !0, onChange: s, onClear: l, placeholder: x, value: n, withClearButton: !0 });
                },
                S = a.memo(k);
            var T = n(154003),
                A = n(392237);
            const M = l().fbf01e52,
                I = (e) => a.createElement(T.ZP, { icon: a.createElement(w.default, { "aria-label": M, style: U.searchButton }), link: "/i/communities/suggested", size: "medium", type: "brandText" }),
                H = a.memo(I),
                U = A.default.create((e) => ({ searchButton: { color: e.colors.text } }));
            var B = n(810641),
                P = n(65241);
            const L = l().af05a978,
                N = l().eb4d2cd0;
            const O = function ({ noQuery: e }) {
                return a.createElement(o.Z, { message: e ? L : N });
            };
            var R = n(71620),
                D = n(668214),
                z = n(735313);
            const q = (0, D.Z)()
                    .propsFromActions(() => ({ clearTimelineCache: (e) => (0, z.Z)(e), createLocalApiErrorHandler: (0, R.zr)("GLOBAL_COMMUNITIES_POST_SEARCH") }))
                    .withAnalytics(),
                F = l().c8a6499c,
                $ = q(({ clearTimelineCache: e, createLocalApiErrorHandler: t, query: n }) => {
                    const r = a.useMemo(() => (0, P.Z)(n), [n]);
                    a.useEffect(() => {
                        e(r).catch(t());
                    }, [r, e, t]);
                    return a.createElement(B.Z, { module: r, renderEmptyState: () => a.createElement(O, { noQuery: !0 }), title: F });
                });
            var V = n(35633);
            const Y = (0, D.Z)()
                    .propsFromActions(() => ({ clearTimelineCache: (e) => (0, z.Z)(e), createLocalApiErrorHandler: (0, R.zr)("GLOBAL_COMMUNITIES_LATEST_POST_SEARCH") }))
                    .withAnalytics(),
                G = l().a8ecdb4c,
                Q = Y(({ clearTimelineCache: e, createLocalApiErrorHandler: t, query: n }) => {
                    const r = a.useMemo(() => (0, V.Z)(n), [n]);
                    a.useEffect(() => {
                        e(r).catch(t());
                    }, [r, e, t]);
                    return a.createElement(B.Z, { module: r, renderEmptyState: () => a.createElement(O, { noQuery: !0 }), title: G });
                });
        },
        376273: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var r = n(47350),
                a = n(202784),
                o = n(325686),
                c = (n(585488), n(154003)),
                l = n(174326),
                i = n(973014),
                s = n(392237),
                m = n(123588),
                u = n(535338);
            const p = r.Z,
                d = (e, t) => {
                    const n = [];
                    if (null == e)
                        t?.map((e) => {
                            n.push({ topic_id: e.topic_id, topic_name: e.topic_name });
                        });
                    else {
                        const r = t?.find((t) => t.topic_id === e);
                        r &&
                            0 !== r.subtopics?.length &&
                            (n.push({ topic_id: e, topic_name: r?.topic_name }),
                            r?.subtopics?.map((e) => {
                                n.push({ topic_id: e.topic_id, topic_name: e.topic_name });
                            }));
                    }
                    return n;
                },
                h = (e, t) => {
                    if (null == e || !t) return null;
                    for (const n of t) {
                        if (n.topic_id === e) return n.topic_id;
                        if (n.subtopics?.find((t) => t.topic_id === e)) return n.topic_id;
                    }
                    return null;
                };
            function E({ setTopic: e, topic: t }) {
                const { communityTopicResults: n } = (0, u.p)(p, {}),
                    r = n?.community_topics,
                    [s, E] = a.useState(h(t, r));
                return a.createElement(
                    o.Z,
                    null,
                    a.createElement(
                        l.Z,
                        { childrenStyle: f.pill, contentPadding: 10, style: f.carousel, updateObserverWithChildren: !0, visibleItemIndex: 0 },
                        ((n) => {
                            const o = r?.find((e) => e.topic_id === t);
                            return null === n || (o && 0 === o.subtopics?.length) ? [] : [a.createElement(c.ZP, { icon: a.createElement(m.default, null), key: "backButton", onPress: () => (e(null), void E(null)), size: "small", style: f.backButton })];
                        })(t).concat(
                            d(s, r)?.map((n) =>
                                a.createElement(i.Z, {
                                    compact: !0,
                                    key: `Select-Pill-${n?.topic_id}`,
                                    onClick: () => {
                                        return (a = n?.topic_id), void (a === t ? (E(null), e(null)) : (0 !== d(a, r).length && E(a), e(a || null)));
                                        var a;
                                    },
                                    selected: n?.topic_id === t,
                                    text: n?.topic_name ? n.topic_name : "",
                                }),
                            ),
                        ),
                    ),
                );
            }
            const f = s.default.create((e) => ({ backButton: { width: "fit-content", height: "fit-content", marginEnd: e.spaces.space4 }, carousel: { marginBottom: e.spaces.space12 }, pill: { margin: e.spaces.space2 } }));
        },
        317979: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = (0, n(335632).G)({});
        },
        929569: (e, t, n) => {
            n.r(t), n.d(t, { CommunitiesScreen: () => Ft, default: () => Vt });
            var r = n(202784),
                a = n(325686),
                o = n(107267),
                c = n(392237),
                l = n(674132),
                i = n.n(l),
                s = n(718e3),
                m = n(252021),
                u = n(443781),
                p = n(666670),
                d = n(615027),
                h = n(189244),
                E = n(71620),
                f = n(668214),
                y = n(172497),
                _ = n(919022),
                C = n(182846);
            const b = (e, t) => {
                    const n = C.be(e, t);
                    if (n) return _.ZP.selectByScreenName(e, n);
                },
                g = (0, f.Z)()
                    .propsFromState(() => ({ hasCommunityMemberships: y.fn, screenName: C.be, user: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("USER_COMMUNITIES"), fetchOneUserByScreenNameIfNeeded: _.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "communities" });
            var Z = n(26363),
                w = (n(585488), n(736063)),
                v = n(535338),
                x = n(997661),
                k = n(277660),
                S = n.n(k),
                T = n(154003),
                A = n(971657);
            const M = i().a226497c,
                I = r.memo((e) => {
                    const t = S()(x.Z, e.createActionResult);
                    if ("CommunityCreateActionUnavailable" === t.__typename && "NotVerified" !== t.reason) return null;
                    const n = "CommunityCreateActionUnavailable" === t.__typename ? { pathname: "/i/verified-get-verified", state: { variant: "CreateCommunity" } } : "/i/communities/create";
                    return r.createElement(T.ZP, { icon: r.createElement(A.default, { "aria-label": M, style: H.createButton }), link: n, size: "medium", type: "brandText" });
                }),
                H = c.default.create((e) => ({ createButton: { color: e.colors.text } })),
                U = r.memo(I),
                B = { context: "CommunityCreateButton" },
                P = Z.Z,
                L = (e) => {
                    const t = (0, v.p)(P, {}, { fetchPolicy: "store-and-network" }),
                        n = t.viewer?.create_community_action_result;
                    return n ? r.createElement(U, { createActionResult: n }) : null;
                },
                N = (e) => r.createElement(w.H, { errorConfig: B }, r.createElement(L, null)),
                O = r.memo(N);
            n(136728);
            var R = n(457311),
                D = n(108362),
                z = n(487552),
                q = n(899667),
                F = n(791632),
                $ = n(789831),
                V = n(507651),
                Y = n(32677),
                G = n(810641),
                Q = n(703738),
                j = n(952793),
                K = n(519896),
                X = n(872788),
                W = n(543066),
                J = n(208078),
                ee = n(446546),
                te = n(266073),
                ne = n(712696),
                re = n.n(ne),
                ae = n(883897),
                oe = n(174326),
                ce = n(568320),
                le = n(338114);
            const ie = i().d228a9a0,
                se = r.createElement(ce.default, null),
                me = ae.Z;
            function ue({ user: e }) {
                const t = S()(me, e),
                    n = t.legacy?.screen_name,
                    o = t.community_memberships_slice.items_results.map((e) => e.result).filter(Boolean),
                    c = r.useMemo(() => {
                        const e = o.slice(0, 10).map((e) => r.createElement(le.Z, { community: e, key: e.id_str }));
                        return o.length > 10 && n && e.push(r.createElement(a.Z, { key: "show-more", style: pe.buttonContainer }, r.createElement(T.ZP, { "aria-label": ie, icon: se, link: `/${n}/communities/memberships`, size: "large" }))), e;
                    }, [o, n]);
                return o.length ? r.createElement(oe.Z, { style: pe.carousel }, c) : null;
            }
            const pe = c.default.create((e) => ({ buttonContainer: { display: "flex", height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space8 }, carousel: { borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", paddingHorizontal: e.spaces.space8 } })),
                de = { context: "COMMUNITY_CAROUSEL" },
                he = te.Z,
                Ee = () => {
                    const { viewer_v2: e } = re()(he, {}),
                        t = e?.user_results?.result;
                    return t && "User" === t.__typename ? r.createElement(ue, { user: t }) : null;
                },
                fe = () => r.createElement(w.H, { errorConfig: de }, r.createElement(Ee, null));
            var ye = n(317979),
                _e = n(402180),
                Ce = n(321155),
                be = n(844685),
                ge = n(401388),
                Ze = n(952428),
                we = n(731708),
                ve = n(178519);
            const xe = i().df362964,
                ke = () => r.createElement(Ze.Z, { link: "/i/communities/suggested", style: Te.root }, r.createElement(a.Z, { style: Te.container }, r.createElement(a.Z, { style: Te.thumbnailContainer }, r.createElement(ve.default, { style: Te.icon })), r.createElement(we.ZP, { numberOfLines: 1, weight: "bold" }, xe))),
                Se = r.memo(ke),
                Te = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, container: { flexDirection: "row", alignItems: "center" }, icon: { color: e.colors.blue500, width: e.spaces.space28, height: e.spaces.space28 }, thumbnailContainer: { width: "96px", height: "96px", marginEnd: e.spaces.space12, borderRadius: e.borderRadii.large, overflow: "hidden", backgroundColor: e.colors.unreadCellBackground, alignItems: "center", justifyContent: "center" } }));
            var Ae = n(36862),
                Me = n(530525),
                Ie = n(439592),
                He = n(910805),
                Ue = n(508585),
                Be = n(966886),
                Pe = n(310088),
                Le = n(470397),
                Ne = n(917164),
                Oe = n(468651);
            const Re = "community-stat-1",
                De = "community-stat-2",
                ze = "community-thumbnail-image",
                qe = i().dfd5031f,
                Fe = i().ha4bb8a9,
                $e = i().caf003b3,
                Ve = () => i().d9ef2842,
                Ye = ({ community: e }) => {
                    const t = S()(Ue.Z, e),
                        n = (0, Ne.B)(t),
                        o = (0, Oe.b)(t),
                        { lastActiveTime: c, newTweets: l } = t,
                        s = [];
                    if ((o > 0 && s.push(r.createElement(we.ZP, { color: "gray700" }, Fe({ reportedTweets: o }))), l > 0 && s.push(r.createElement(we.ZP, { color: "gray700" }, qe({ newTweets: l }))), n > 0 && s.push(r.createElement(we.ZP, { color: "gray700" }, $e({ memberRequests: n }))), 0 === s.length && c && c > 0)) {
                        const e = r.createElement(Be.Z, { cutoff: "years", timestamp: c });
                        s.push(r.createElement(i().I18NFormatMessage, { $i18n: "b3a3ce8d" }, e));
                    }
                    const [m, u] = s,
                        p = n + o > 0,
                        d = l > 0;
                    return r.createElement(a.Z, { style: Qe.stats }, (p || d) && r.createElement(Pe.Z, { pip: !0, standalone: !0, style: Qe.indicator, unreadCountLabel: Ve }), r.createElement(Le.Z, null, m && r.createElement(we.ZP, { color: "gray700", numberOfLines: 1, style: Qe.firstMessage, testID: Re }, m), u && r.createElement(we.ZP, { color: "gray700", numberOfLines: 1, style: Qe.secondMessage, testID: De }, u)));
                },
                Ge = r.memo(Ye),
                Qe = c.default.create((e) => ({ stats: { marginTop: e.spaces.space4, flexDirection: "row" }, firstMessage: { flexGrow: 1, flexShrink: 0 }, secondMessage: { flexGrow: 0, flexShrink: 1 }, indicator: { alignSelf: "center", marginEnd: e.spaces.space4 } })),
                je = ({ community: e }) => {
                    const t = S()(Ae.Z, e),
                        { crop: n, image: o } = (0, He.L)(t),
                        { id_str: l, name: i } = t,
                        s = `/i/communities/${l}`;
                    return r.createElement(Ze.Z, { link: s, style: Xe.root }, r.createElement(a.Z, { style: Xe.container }, r.createElement(a.Z, { style: Xe.thumbnailContainer }, r.createElement(Me.Z, { "aria-label": "", aspectMode: Ie.Z.SQUARE, backgroundColor: c.default.theme.colors.gray300, cropCandidates: n, image: o, testID: ze })), r.createElement(a.Z, { style: Xe.description }, r.createElement(a.Z, { style: Xe.name }, r.createElement(we.ZP, { numberOfLines: 1, weight: "bold" }, i)), r.createElement(Ge, { community: t }))));
                },
                Ke = r.memo(je),
                Xe = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, container: { flexDirection: "row", alignItems: "center", flex: 1, flexShrink: 1 }, description: { flexShrink: 1 }, name: { marginBottom: e.spaces.space2, flexDirection: "row" }, thumbnailContainer: { width: "96px", marginEnd: e.spaces.space12, borderRadius: e.borderRadii.large, overflow: "hidden" } })),
                We = i().cb6adb10,
                Je = Ce.Z,
                et = i().c63602d4,
                tt = r.memo(({ handleAtTop: e, user: t }) => {
                    const {
                        community_memberships_slice: { items_results: n },
                    } = S()(Je, t);
                    r.useEffect(() => {
                        e();
                    }, [e]);
                    const o = r.useMemo(
                        () =>
                            n
                                .map((e) => e.result)
                                .filter(Boolean)
                                .map((e) => r.createElement(Ke, { community: e, key: e.id_str })),
                        [n],
                    );
                    return (0, ge.Z)(o) ? null : r.createElement(a.Z, { style: nt.paddingHorizontal }, r.createElement(be.Z, { text: et }), o, r.createElement(Se, null), r.createElement(G.Z, { entryConfiguration: ye.Z, module: W.tD, refreshControl: null, title: We }));
                }),
                nt = c.default.create((e) => ({ paddingHorizontal: { paddingHorizontal: e.spaces.space8 } })),
                rt = r.memo(tt),
                at = { context: "COMMUNITY_LIST_ACTIVITY" },
                ot = _e.Z,
                ct = ({ handleAtTop: e }) => {
                    const { viewer_v2: t } = re()(ot, {}),
                        n = t?.user_results?.result;
                    return "User" === n?.__typename ? r.createElement(rt, { handleAtTop: e, user: n }) : null;
                },
                lt = ({ handleAtTop: e }) => r.createElement(w.H, { errorConfig: at }, r.createElement(ct, { handleAtTop: e })),
                it = r.memo(lt);
            var st = n(376273),
                mt = n(138099),
                ut = n(449479);
            const pt = i().a2118086,
                dt = [
                    { label: i().edf7bc2e, value: X.UO.RELEVANCE },
                    { label: i().d16c1ab6, value: X.UO.RECENCY },
                ];
            function ht({ onChange: e, onDismiss: t, value: n }) {
                return r.createElement(
                    mt.Z,
                    { onMaskClick: t, style: Et.sheet, type: "bottom", withMask: !0 },
                    r.createElement(we.ZP, { align: "center", size: "headline1", weight: "bold" }, pt),
                    r.createElement(ut.Z, {
                        name: "sort",
                        onChange: function (n, r) {
                            e(r), t();
                        },
                        options: dt,
                        value: n,
                    }),
                );
            }
            const Et = c.default.create((e) => ({ sheet: { padding: e.spaces.space16 } })),
                ft = i().c63602d4,
                yt = i().ha8209bc,
                _t = i().fcf3e54c,
                Ct = i().d7346632,
                bt = i().b732a4cc,
                gt = i().hff48914,
                Zt = i().hb52cc4a;
            function wt({ hasCommunityMemberships: e, viewerUserId: t }) {
                const { featureSwitches: n } = r.useContext(u.rC),
                    c = n.isTrue("communities_enable_explore_tab"),
                    l = n.isTrue("communities_enable_explore_topic_carousel"),
                    i = n.isTrue("communities_home_top_timeline_enabled"),
                    s = (0, j.hC)("c9s_nav_list_activity_details_enabled"),
                    m = (0, o.useHistory)(),
                    p = r.useMemo(() => (e ? r.createElement(Y.Z, { history: m }) : null), [e, m]),
                    d = r.useCallback(() => r.createElement(R.Z, { header: Ct, message: bt }), []),
                    h = r.useCallback(() => r.createElement(R.Z, { header: gt, message: Zt }), []),
                    E = (0, J.g)(),
                    f = r.useCallback(() => {
                        E(t);
                    }, [t, E]),
                    y = (0, o.useParams)().screenName || "",
                    _ = (0, o.matchPath)(location.pathname, { path: `/${y}/communities/explore`, exact: !0 }),
                    [C, b] = r.useState(!1),
                    [g, Z] = r.useState(() => {
                        const e = m.location.state?.sort;
                        return i ? (e ?? X.UO.RELEVANCE) : X.UO.RECENCY;
                    }),
                    w = r.useCallback(() => {
                        b(!1);
                    }, []),
                    [v, x] = r.useState(() => {
                        const e = m.location.state?.topic;
                        return e ?? null;
                    });
                r.useEffect(() => {
                    e || m.push(`/${y}/communities/explore`);
                }, [m, y, e]);
                const k = r.createElement(z.default, null),
                    S = r.createElement(q.default, null),
                    T = C ? S : k,
                    A = r.useMemo(() => {
                        const t = { to: `/${y}/communities`, label: i && !_ ? r.createElement(r.Fragment, null, yt, " ", T) : yt, key: yt, onClick: () => (i ? b(!0) : null) },
                            n = e ? [t, { to: `/${y}/communities/explore`, label: _t, key: _t }] : [];
                        return r.createElement(V.Z, { "aria-label": ft, links: n, style: xt.tabContainer });
                    }, [y, T, i, _, e]),
                    M =
                        c && _
                            ? l
                                ? r.createElement(st.Z, {
                                      setTopic: (e) => {
                                          x(e), m.replace({ pathname: `/${y}/communities/explore`, state: { topic: e } });
                                      },
                                      topic: v,
                                  })
                                : null
                            : (0, F.HD)(m)
                              ? null
                              : r.createElement(fe, null),
                    I = (0, Q.z)();
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(ee.ZP, null),
                    r.createElement(
                        $.Z,
                        { container: D.Z, fab: p },
                        s
                            ? r.createElement(it, { handleAtTop: f })
                            : r.createElement(
                                  r.Fragment,
                                  null,
                                  r.createElement(a.Z, { style: I && xt.headerContentRedesign }, c ? A : null, M),
                                  r.createElement(G.Z, { entryConfiguration: ye.Z, module: c && _ ? (0, W.F7)(v || void 0) : g === X.UO.RECENCY ? W.S_ : W.Kc, onAtTop: f, prerollDisplayLocation: K.Nw.OTHER, refreshControl: null, renderEmptyState: c && _ ? h : d, title: ft }),
                                  C &&
                                      r.createElement(ht, {
                                          onChange: (e) => {
                                              Z(e), m.replace({ pathname: `/${y}/communities`, state: { sort: e } });
                                          },
                                          onDismiss: w,
                                          value: g,
                                      }),
                              ),
                    ),
                );
            }
            const vt = r.memo(wt),
                xt = c.default.create((e) => ({ tabContainer: { marginBottom: e.spaces.space8 }, headerContentRedesign: { paddingHorizontal: e.spaces.space16 } }));
            var kt = n(652904),
                St = n(935114),
                Tt = n(962741),
                At = n(125363),
                Mt = n(709318),
                It = n(24949),
                Ht = n(764443);
            const Ut = (e, t) => {
                    const { user: n } = t;
                    return n ? n.id_str : void 0;
                },
                Bt = (0, f.Z)()
                    .propsFromState(() => ({ urtModule: (0, It.P1)(Ut, (e) => (e ? (0, Ht.Z)(e) : void 0)) }))
                    .withAnalytics({ page: "communities", section: "memberships" }),
                Pt = i().c63602d4,
                Lt = i().d7346632,
                Nt = i().hb01fe46;
            const Ot = { ...ye.Z, [Tt.UZ.Community]: (0, St.Z)({ shouldDisplayPin: !0 }) },
                Rt = Bt(function (e) {
                    const { isViewerUser: t, urtModule: n } = e,
                        a = r.useCallback(() => (t ? r.createElement(R.Z, { header: Lt, message: Nt }) : null), [t]),
                        o = (0, At.I0)();
                    return (
                        r.useEffect(() => {
                            o((0, Mt.Mq)());
                        }, [o]),
                        n ? r.createElement(kt.Z, null, r.createElement(G.Z, { entryConfiguration: Ot, module: n, refreshControl: null, renderEmptyState: a, title: Pt })) : null
                    );
                });
            var Dt = n(45836);
            const zt = i().h02a6fe6,
                qt = i().c63602d4;
            class Ft extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderRightControl = () => r.createElement(a.Z, { style: $t.rightControl }, r.createElement(Dt.l1, null), r.createElement(O, null))),
                        (this._renderPrimaryContent = () => {
                            const { hasCommunityMemberships: e, user: t } = this.props,
                                { viewerUserId: n } = this.context,
                                a = this._isViewerUser();
                            return r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: [`/${h.qX}/communities`, `/${h.qX}/communities/explore`] }, r.createElement(vt, { hasCommunityMemberships: e, viewerUserId: n })), r.createElement(o.Route, { exact: !0, path: `/${h.qX}/communities/memberships` }, r.createElement(Rt, { isViewerUser: a, user: t })));
                        }),
                        (this._handleFetchUser = (e) => {
                            const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: n, screenName: r } = e || this.props;
                            r && n(r).catch(t(p.F));
                        });
                }
                componentDidMount() {
                    this._handleFetchUser();
                }
                _isViewerUser() {
                    const { user: e } = this.props,
                        { viewerUserId: t } = this.context;
                    return e?.id_str === t;
                }
                _isMembershipsView() {
                    const { location: e } = this.props;
                    return e.pathname.indexOf("memberships") >= 0;
                }
                render() {
                    const { history: e } = this.props;
                    if (this._isViewerUser()) {
                        const t = this._isMembershipsView() ? qt : zt;
                        return r.createElement(m.Z, { backLocation: "/", history: e, primaryContent: this._renderPrimaryContent(), rightControl: this._renderRightControl(), sidebarContent: r.createElement(s.Z, null), title: t });
                    }
                    return r.createElement(d.Z, { to: "/" });
                }
            }
            Ft.contextType = u.rC;
            const $t = c.default.create((e) => ({ rightControl: { color: e.colors.text, display: "flex", flexDirection: "row" } })),
                Vt = g(Ft);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-7f20148e.4b50ddda.js.map
