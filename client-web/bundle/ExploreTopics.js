"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExploreTopics"],
    {
        789831: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(807896),
                n = o(202784),
                r = o(325686),
                s = o(392237),
                c = o(655352);
            const i = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: o, shouldRenderFab: s = !0, style: l, withoutBottomPadding: p, ...d }) => {
                    const m = t || r.Z,
                        u = s && !(0, c.ZP)();
                    return n.createElement(m, (0, a.Z)({}, d, { style: [u && !p && i.root, l] }), e, u ? o : null);
                };
        },
        349035: (e, t, o) => {
            o.d(t, { Z: () => r });
            var a = o(202784),
                n = o(272175);
            const r = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(n.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(807896),
                n = o(202784),
                r = o(325686),
                s = o(292627),
                c = o(537392),
                i = o(392237),
                l = o(365023),
                p = o(392027),
                d = o(774654),
                m = o(725516),
                u = o(443781);
            const h = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: g, ...f } = e,
                        { loggedInUserId: Z } = n.useContext(u.rC),
                        y = (0, m.z)(),
                        E = n.useCallback(
                            (e) => {
                                y.scribe({ component: g, action: "click" }), b && b(e);
                            },
                            [y, b, g],
                        ),
                        w = d.ZM.useCollapsibleNavBars(),
                        x = [...d.Ah({ elementPosition: "bottom" }), w && h.fabStaysAboveSafeArea];
                    return Z
                        ? n.createElement(
                              s.Z.FloatingAction,
                              null,
                              n.createElement(c.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > i.default.theme.breakpoints.large,
                                      c = e > i.default.theme.breakpoints.medium,
                                      d = e < i.default.theme.breakpoints.micro,
                                      m = [h.root, c && h.rootMedium, s && h.rootLarge],
                                      u = [h.fab, s && h.fabLarge, d && h.fabMicro, x];
                                  return n.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      n.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, c) => n.createElement(r.Z, (0, a.Z)({ ref: e() }, c({ style: u })), n.createElement(p.Z, (0, a.Z)({}, f, { "aria-label": t, label: s ? o : void 0, onPress: E, style: d && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => i });
            o(136728);
            var a = o(202784),
                n = o(387524),
                r = o(635510);
            const s = "/compose/post";
            class c extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                a = { pathname: s, state: (t && t()) || {} };
                            o.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: c } = this.props;
                    return a.createElement(n.Z, { "aria-label": e, href: s, icon: t, label: o, onPress: this._handlePress, scribeComponent: c, testID: r.Z.tweet });
                }
            }
            const i = c;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                n = o(111677),
                r = o.n(n),
                s = o(186444),
                c = o(355883);
            const i = r().j0179e90,
                l = r().ee69d769({ verb: "" }),
                p = a.createElement(s.default, null),
                d = ({ getLocationState: e, history: t }) => a.createElement(c.Z, { "aria-label": i, getLocationState: e, history: t, icon: p, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(202784),
                n = o(420740),
                r = o(108362),
                s = o(731708),
                c = o(154003),
                i = o(392237),
                l = o(111677),
                p = o.n(l),
                d = o(349035);
            const m = "error-detail",
                u = p().e49537c2,
                h = p().a9ae1e78;
            class b extends a.PureComponent {
                render() {
                    return a.createElement(n.Z, { testID: m }, a.createElement(d.Z, null), a.createElement(r.Z, { style: g.root }, a.createElement(s.ZP, { align: "center", color: "gray700", style: g.retryText }, u), a.createElement(c.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const g = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => p });
            var a = o(202784),
                n = o(500002),
                r = o(668214),
                s = o(997174),
                c = o(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: c,
                        } = e;
                    let i = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const l = n || c;
                    ((l && n !== c) || (!l && o !== r) || a !== s || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const p = (0, n.ZP)(i(l));
        },
        849078: (e, t, o) => {
            o.r(t), o.d(t, { ExploreTopicsScreen: () => T, default: () => F });
            var a = o(202784),
                n = o(457311),
                r = o(108362),
                s = o(111677),
                c = o.n(s),
                i = o(718e3),
                l = o(789831),
                p = o(252021),
                d = o(32677),
                m = o(56851),
                u = o(652904),
                h = o(810641),
                b = o(163889),
                g = o(519896),
                f = o(24949),
                Z = o(668214),
                y = o(644829),
                E = o(218951);
            const w = { news: "url", sim_cluster: "cluster_id", ttt: "ttt_id", semantic_core: "entity_id" };
            var x = o(312771);
            const v = c().fcf3e54c,
                P = (e, t) => t.match.params.topicId,
                _ = (e, t) => t.match.params.taxonomy,
                C = (0, f.P1)(P, _, (e, t) => (({ taxonomy: e, topicId: t }) => (0, E.Z)({ timelineId: `guide-${t}-${e}-topic`, network: { getEndpoint: (e) => e.withEndpoint(y.Z).fetchExploreTopic, getEndpointParams: (o) => ({ [w[e]]: t, ...o }) }, context: "FETCH_EXPLORE_TOPIC", perfKey: "guide-topic" }))({ topicId: e, taxonomy: t })),
                I = (e, t) => {
                    const o = C(e, t);
                    if (o.selectInitialFetchStatus(e, t) !== x.ZP.LOADED) return "";
                    const { title: a = v } = o.selectMetadata(e);
                    return a;
                },
                k = (0, Z.Z)()
                    .propsFromState(() => ({ module: C, topicId: P, taxonomy: _, title: I }))
                    .withAnalytics({ page: "guide", section: "topic" });
            const M = { ...(0, o(335632).G)({ withMessageGaps: !1 }) },
                B = c().a2a3824a,
                S = c().ed827af6,
                L = () => a.createElement(m.Z, null),
                A = () => a.createElement(n.Z, { message: S }),
                D = ["news", "ttt", "semantic_core", "sim_cluster"];
            function T(e) {
                const { history: t, title: o } = e,
                    n = a.createElement(d.Z, { history: t }),
                    s = () => {
                        const { taxonomy: t } = e;
                        return D.indexOf(t) >= 0;
                    };
                return a.createElement(
                    u.Z,
                    null,
                    a.createElement(p.Z, {
                        backLocation: "/explore",
                        documentTitle: B,
                        history: t,
                        primaryContent: a.createElement(
                            l.Z,
                            { container: r.Z, fab: n },
                            (() => {
                                if (s()) {
                                    const { module: t } = e;
                                    return a.createElement(h.Z, { entryConfiguration: M, module: t, prerollDisplayLocation: g.Nw.OTHER, renderEmptyState: L, renderUnavailable: A, title: B });
                                }
                                {
                                    const { taxonomy: t, topicId: o } = e;
                                    return t && o ? (0, b.ZP)(`Unexpected guide topic: Taxonomy '${t}' requested with topicId '${o}'`) : (0, b.ZP)("Missing taxonomy and/or topic id for guide topic:"), L();
                                }
                            })(),
                        ),
                        sidebarContent: a.createElement(i.Z, { withWhoToFollow: !1 }),
                        title: o,
                    }),
                );
            }
            const F = k(T);
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => i });
            var a = o(202784),
                n = o(154003),
                r = o(392237);
            class s extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: r, href: s, icon: i, label: l, onPress: p, renderMenu: d, style: m, testID: u } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return a.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: r, icon: i, link: s, onPress: p, renderMenu: d, size: "xLarge", style: [c.root, !l && c.iconOnly, m], testID: u }, l);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const c = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = s;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var a = o(202784),
                n = o(890601),
                r = o(783427),
                s = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExploreTopics.a21f04ea.js.map
