"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-1b1c8e3c"],
    {
        256158: (e, t, n) => {
            n.d(t, { $: () => E });
            var o = n(255059),
                c = n(202784),
                i = (n(585488), n(277660)),
                a = n.n(i),
                r = n(457311),
                m = n(332920),
                l = n.n(m),
                s = n(652904),
                u = n(293115),
                d = n(382779);
            const y = l().he8db880,
                h = l().cc684fbc;
            function E(e) {
                const { community: t } = e,
                    n = a()(o.Z, t),
                    { reason: i, subtitle: m, title: l } = n;
                let E;
                switch (i) {
                    case "Suspended":
                        E = "community_suspended";
                        break;
                    case "Deleted":
                        E = "community_deleted";
                        break;
                    default:
                        E = "community_unavailable";
                }
                const p = l ? c.createElement(d.H, { timelineRichText: l }) : y,
                    f = m ? c.createElement(d.H, { timelineRichText: m }) : h,
                    _ = { page: "community", section: E };
                return c.createElement(u.nO, { namespace: _ }, c.createElement(s.Z, null, c.createElement(r.Z, { header: p, message: f })));
            }
        },
        348697: (e, t, n) => {
            n.d(t, { Z: () => N });
            var o = n(807896),
                c = n(888290),
                i = n(202784),
                a = (n(585488), n(277660)),
                r = n.n(a),
                m = n(652904),
                l = n(293115),
                s = n(244522),
                u = n(325686),
                d = n(107267),
                y = n(392237),
                h = n(108362),
                E = n(187669),
                p = n(789831),
                f = n(32677),
                _ = n(952793),
                C = n(870358),
                b = n(274407),
                Z = n(643454),
                S = n(625727),
                g = n(495010),
                M = n(224357),
                k = n(169263),
                w = n(446546),
                I = n(443781),
                T = n(71620),
                v = n(125363),
                L = n(985366),
                R = n(735313),
                x = n(180796);
            function H(e, t) {
                const n = (0, v.I0)(),
                    o = (0, T.n7)("COMMUNITIES_TWEETS"),
                    { viewerUserId: c } = (0, I.QZ)(),
                    a = i.useMemo(() => (t === x.t.Latest ? (c ? (0, L.Qx)(e, { rankingMode: "Recency" }) : (0, L.rK)(e)) : t === x.t.ForYou ? (c ? (0, L.Qx)(e) : (0, L.Y1)(e)) : c ? (0, L.Uu)(e) : (0, L.En)(e)), [e, t, c]),
                    r = (function (e) {
                        const t = "PUSH" === (0, d.useHistory)().action,
                            n = (0, d.useLocation)().pathname,
                            o = i.useRef(),
                            c = n?.includes(e) && o.current?.includes(e);
                        return (o.current = n), t && !c;
                    })(e),
                    m = i.useCallback(() => {
                        n((0, R.Z)(a)).catch(o({}));
                    }, [a, o, n]);
                return (
                    i.useEffect(() => {
                        r && m();
                    }, [r, m]),
                    i.useMemo(() => ({ module: a, refreshModule: m }), [a, m])
                );
            }
            Object.freeze({ Home: "home", Latest: "latest" });
            const $ = y.default.theme.componentDimensions.appBarHeightPx - 2,
                A = (e) => {
                    const { community: t, composeOptions: n, onSelectedTimelineChange: o, selectedTimeline: c } = e,
                        a = r()(s.Z, t),
                        { module: m, refreshModule: l } = H(a.rest_id, c),
                        y = (0, d.useHistory)(),
                        I = (0, d.useLocation)(),
                        T = a.role === C.WW.Admin && void 0 !== I.query.show_creation_summary,
                        v = i.useMemo(() => ({ canJoinCommunity: "CommunityJoinAction" === a.actions?.join_action_result?.__typename }), [a.actions?.join_action_result]),
                        L = i.useMemo(() => i.createElement(f.Z, { getLocationState: () => n, history: y }), [y, n]),
                        R = (0, g.h)();
                    i.useEffect(() => {
                        R(a.rest_id);
                    }, [R, a.rest_id]);
                    const x = (0, _.hC)("c9s_auto_collapse_community_detail_header_enabled"),
                        [A, O] = i.useState(x),
                        D = i.useCallback(() => {
                            O(!1);
                        }, [O]),
                        N = i.useRef(null);
                    return (
                        (0, E.q)(() => {
                            const e = N?.current?.getBoundingClientRect?.().top,
                                t = a.is_member && x;
                            void 0 !== e && t && window.scrollTo(0, e - $);
                        }),
                        i.createElement(p.Z, { component: h.Z, fab: L }, i.createElement(w.ZP, { forSingleCommunity: v }), T && i.createElement(Z.Z, { community: a }), i.createElement(S.Z, { community: a, onCommunityMembershipChange: l, onSelectedTimelineChange: o, selectedTimeline: c, tabsRef: N }), i.createElement(d.Switch, null, i.createElement(d.Route, { exact: !0, path: `/i/communities/${a.rest_id}/` }, i.createElement(M.Z, { communityId: a.rest_id }), i.createElement(k.Z, { community: a, communityId: a.rest_id, onAtTop: x ? D : void 0, timelineModule: m }), A && i.createElement(u.Z, { style: B.spacer })), i.createElement(d.Route, { exact: !0, path: `/i/communities/${a.rest_id}/about` }, i.createElement(b.Z, { community: a }))))
                    );
                },
                B = y.default.create((e) => ({ spacer: { minHeight: "100vh" } }));
            var O = n(457268),
                D = n(561972);
            Object.freeze({ Home: "home", Latest: "latest" });
            const N = (e) => {
                const { community: t } = e,
                    n = r()(c.Z, t),
                    a = (function (e, t) {
                        const n = (0, D.Z)(),
                            o = (0, O.V)(e);
                        let c = x.t.Latest;
                        return (c = n || !t ? x.t.ForYou : x.t.Latest), o.ranked_timeline_selected ? (c = x.t.ForYou) : o.latest_timeline_selected ? (c = x.t.Latest) : o.media_timeline_selected && (c = x.t.Media), c;
                    })(n.rest_id, !!n.is_member),
                    [s, u] = i.useState(a),
                    d = i.useCallback((e) => u(e), [u]),
                    y = { page: "community", section: a };
                return i.createElement(l.nO, { namespace: y }, i.createElement(m.Z, null, i.createElement(A, (0, o.Z)({}, e, { community: n, onSelectedTimelineChange: d, selectedTimeline: s }))));
            };
        },
        475353: (e, t, n) => {
            n.r(t), n.d(t, { CommunityRulesScreen: () => _, default: () => C });
            var o = n(807896),
                c = n(202784),
                i = n(392237),
                a = n(718e3),
                r = n(252021),
                m = n(699910),
                l = n(724328),
                s = n(87063),
                u = n(615027),
                d = n(466441),
                y = n(71620),
                h = n(668214),
                E = n(491963),
                p = n(182846);
            const f = (0, h.Z)()
                    .propsFromState(() => ({ community: p.ZM, fetchStatus: p.YE, isCommunityMember: p.Cp }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("COMMUNITY_RULES_SCREEN"), fetchCommunityIfNeeded: E.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "community", section: "rules" }),
                _ = (e) => {
                    const { community: t, createLocalApiErrorHandler: n, fetchCommunityIfNeeded: i, fetchStatus: y, history: h, isCommunityMember: E, location: p, match: f } = e,
                        _ = f.params.communityId;
                    c.useEffect(() => {
                        _ && !t && y !== s.Z.LOADED && i(_).catch(n());
                    }, [_, t, n, y, i]);
                    const C = c.useMemo(() => ({ selectedCommunityId: _ || "", defaultText: "" }), [_]);
                    if (t && _) {
                        const { name: e, rules: n } = t,
                            i = { composeOptions: C, history: h, sidebarContent: c.createElement(a.Z, null), title: t?.name || null, withTweetButton: E };
                        if (n.length > 0) {
                            const t = c.createElement(m.Z, { badgeStyle: b.badgeStyle, headerContainerStyle: b.containerStyle, headerExplanationStyle: b.explanationStyle, ruleContainerStyle: b.ruleContainerStyle, rules: n, withBottomMargin: !0 });
                            return c.createElement(r.Z, (0, o.Z)({}, i, { backLocation: `/i/communities/${_}`, documentTitle: (0, l.E)({ communityName: e }), primaryContent: t }));
                        }
                        {
                            const e = { ...i, title: null },
                                t = c.createElement(d.default, { history: h, location: p, match: f });
                            return c.createElement(r.Z, (0, o.Z)({}, e, { primaryContent: t }));
                        }
                    }
                    return y === s.Z.LOADED || y === s.Z.FAILED ? c.createElement(u.Z, { to: "/" }) : null;
                },
                C = f(_),
                b = i.default.create((e) => ({ badgeStyle: { marginEnd: e.spaces.space16 }, containerStyle: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal, borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, ruleContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, explanationStyle: { color: e.colors.text } }));
        },
        732403: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                c = n(154003),
                i = n(392237),
                a = n(332920),
                r = n.n(a),
                m = n(956272),
                l = n(952793);
            const s = r().f27a2232,
                u = ({ communityId: e }) => ((0, l.hC)("c9s_community_tweet_search_enabled") ? o.createElement(c.ZP, { icon: o.createElement(m.default, { "aria-label": s, style: y.searchButton }), link: `/i/communities/${e}/search`, size: "medium", type: "brandText" }) : null),
                d = o.memo(u),
                y = i.default.create((e) => ({ searchButton: { marginEnd: e.spaces.space8, color: e.colors.text } }));
        },
        210655: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                c = n(325686),
                i = n(332920),
                a = n.n(i),
                r = n(718e3),
                m = n(252021),
                l = n(507651),
                s = n(652904),
                u = n(952793),
                d = n(293115),
                y = n(615027),
                h = n(107267),
                E = n(371344),
                p = n(956272),
                f = n(666536);
            const _ = a().f27a2232;
            function C({ communityId: e, initialValue: t = "" }) {
                const n = (0, h.useHistory)(),
                    c = `/i/communities/${e}/search`,
                    i = o.useRef(!1);
                o.useEffect(
                    () => (
                        (i.current = !0),
                        () => {
                            i.current = !1;
                        }
                    ),
                    [],
                );
                const [a, r] = o.useState(t),
                    m = o.useCallback(() => {
                        r(""), n.replace(c);
                    }, [c, n]),
                    l = o.useMemo(
                        () =>
                            (0, f.Z)((e) => {
                                i.current && (e.length > 0 ? n.replace(`${c}?q=${e}`) : m());
                            }, 1e3),
                        [c, m, n],
                    ),
                    s = o.useCallback(
                        ({ target: { value: e } }) => {
                            r(e), l(e);
                        },
                        [l],
                    );
                return o.createElement(E.Z, { Icon: p.default, autoComplete: "off", isCompact: !0, onChange: s, onClear: m, placeholder: _, value: a, withClearButton: !0 });
            }
            const b = o.memo(C);
            var Z = n(457311);
            const S = a().af05a978,
                g = a().eb4d2cd0;
            const M = function ({ noQuery: e }) {
                return o.createElement(Z.Z, { message: e ? S : g });
            };
            var k = n(810641),
                w = n(642797),
                I = (n(585488), n(750085)),
                T = n(218951);
            const v = w.Z;
            const L = function (e, t, n) {
                    const o = `communityTweetSearch-${e}-${t}-${n}`;
                    return (0, T.Z)({ context: "FETCH_COMMUNITY_TWEET_SEARCH_TIMELINE", perfKey: "communityTweetSearch", timelineId: o, formatResponse: I.Z, network: { query: v, variables: ({ count: c, cursor: i }, a) => ({ count: c, cursor: "string" == typeof i ? i : void 0, communityId: e, timelineRankingMode: n, query: t, timelineId: o }) } });
                },
                R = a().f2b3fe06,
                x = a().ie2efe36;
            function H() {
                return o.createElement(M, null);
            }
            const $ = function ({ communityId: e, query: t, timelineRankingMode: n }) {
                    const c = o.useMemo(() => L(e, t, n), [e, t, n]);
                    return o.createElement(k.Z, { loadingAccessibilityLabel: R, module: c, refreshControl: null, renderEmptyState: H, title: x });
                },
                A = a().f27a2232,
                B = { page: "community-tweets-search", section: "main" },
                O = a().d601fc20,
                D = a().i66136aa,
                N = ({ history: e, location: t, match: n }) => {
                    const i = (0, u.hC)("c9s_community_tweet_search_enabled"),
                        a = n.params.communityId,
                        h = (0, u.hC)("communities_enable_top_posts_search"),
                        E = o.useMemo(() => new URLSearchParams(t.search).get("q") ?? void 0, [t.search]),
                        p = { key: D, label: D, to: a ? `/i/communities/${a}/search${t.search}` : "/i/communities/", isActive: () => _ === D, onClick: () => C(D) },
                        f = [p, { key: O, label: O, to: a ? `/i/communities/${a}/search${t.search}` : "/i/communities/", isActive: () => _ === O, onClick: () => C(O) }],
                        [_, C] = o.useState(D);
                    if (!i || !a) return o.createElement(y.Z, { to: "/i/communities" });
                    const Z = _ === p.key ? "Likes" : "Recency",
                        S = o.createElement(c.Z, null, h && o.createElement(l.Z, { links: f }), E ? o.createElement($, { communityId: a, query: E, timelineRankingMode: Z }) : o.createElement(M, { noQuery: !0 }));
                    return o.createElement(d.nO, { namespace: B }, o.createElement(s.Z, null, o.createElement(m.Z, { backLocation: `/i/communities/${a}`, customSearchBox: o.createElement(b, { communityId: a, initialValue: E }), history: e, primaryContent: S, sidebarContent: o.createElement(r.Z, { withSearchBox: !1 }), title: A, withSearchBox: i })));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-1b1c8e3c.43f2c33a.js.map
