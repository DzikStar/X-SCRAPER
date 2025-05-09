"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExploreTopics"],
    {
        789831: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(807896),
                n = o(202784),
                s = o(325686),
                r = o(392237),
                i = o(655352);
            const c = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: o, shouldRenderFab: r = !0, style: l, withoutBottomPadding: p, ...d }) => {
                    const m = t || s.Z,
                        u = r && !(0, i.ZP)();
                    return n.createElement(m, (0, a.Z)({}, d, { style: [u && !p && c.root, l] }), e, u ? o : null);
                };
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(807896),
                n = o(202784),
                s = o(325686),
                r = o(292627),
                i = o(537392),
                c = o(392237),
                l = o(365023),
                p = o(392027),
                d = o(774654),
                m = o(725516),
                u = o(443781);
            const h = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: g, ...f } = e,
                        { loggedInUserId: y } = n.useContext(u.rC),
                        Z = (0, m.z)(),
                        w = n.useCallback(
                            (e) => {
                                Z.scribe({ component: g, action: "click" }), b && b(e);
                            },
                            [Z, b, g],
                        ),
                        E = d.ZM.useCollapsibleNavBars(),
                        _ = [...d.Ah({ elementPosition: "bottom" }), E && h.fabStaysAboveSafeArea];
                    return y
                        ? n.createElement(
                              r.Z.FloatingAction,
                              null,
                              n.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > c.default.theme.breakpoints.large,
                                      i = e > c.default.theme.breakpoints.medium,
                                      d = e < c.default.theme.breakpoints.micro,
                                      m = [h.root, i && h.rootMedium, r && h.rootLarge],
                                      u = [h.fab, r && h.fabLarge, d && h.fabMicro, _];
                                  return n.createElement(
                                      s.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      n.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => n.createElement(s.Z, (0, a.Z)({ ref: e() }, i({ style: u })), n.createElement(p.Z, (0, a.Z)({}, f, { "aria-label": t, label: r ? o : void 0, onPress: w, style: d && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => c });
            o(136728);
            var a = o(202784),
                n = o(387524),
                s = o(635510);
            const r = "/compose/post";
            class i extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                a = { pathname: r, state: (t && t()) || {} };
                            o.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: i } = this.props;
                    return a.createElement(n.Z, { "aria-label": e, href: r, icon: t, label: o, onPress: this._handlePress, scribeComponent: i, testID: s.Z.tweet });
                }
            }
            const c = i;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                n = o(674132),
                s = o.n(n),
                r = o(186444),
                i = o(355883);
            const c = s().j0179e90,
                l = s().ee69d769({ verb: "" }),
                p = a.createElement(r.default, null),
                d = ({ getLocationState: e, history: t }) => a.createElement(i.Z, { "aria-label": c, getLocationState: e, history: t, icon: p, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => p });
            var a = o(202784),
                n = o(500002),
                s = o(668214),
                r = o(997174),
                i = o(118823);
            const c = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: r.NH }))
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
                            location: { pathname: s, search: r },
                            locationKey: i,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = n || i;
                    ((l && n !== i) || (!l && o !== s) || a !== r || c) && this._performPageUpdates(this.props);
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
            const p = (0, n.ZP)(c(l));
        },
        849078: (e, t, o) => {
            o.r(t), o.d(t, { ExploreTopicsScreen: () => F, default: () => T });
            var a = o(202784),
                n = o(457311),
                s = o(108362),
                r = o(674132),
                i = o.n(r),
                c = o(718e3),
                l = o(789831),
                p = o(252021),
                d = o(32677),
                m = o(231035),
                u = o(652904),
                h = o(810641),
                b = o(163889),
                g = o(519896),
                f = o(24949),
                y = o(668214),
                Z = o(644829),
                w = o(218951);
            const E = { news: "url", sim_cluster: "cluster_id", ttt: "ttt_id", semantic_core: "entity_id" };
            var _ = o(312771);
            const P = i().fcf3e54c,
                x = (e, t) => t.match.params.topicId,
                C = (e, t) => t.match.params.taxonomy,
                v = (0, f.P1)(x, C, (e, t) => (({ taxonomy: e, topicId: t }) => (0, w.Z)({ timelineId: `guide-${t}-${e}-topic`, network: { getEndpoint: (e) => e.withEndpoint(Z.Z).fetchExploreTopic, getEndpointParams: (o) => ({ [E[e]]: t, ...o }) }, context: "FETCH_EXPLORE_TOPIC", perfKey: "guide-topic" }))({ topicId: e, taxonomy: t })),
                k = (e, t) => {
                    const o = v(e, t);
                    if (o.selectInitialFetchStatus(e, t) !== _.ZP.LOADED) return "";
                    const { title: a = P } = o.selectMetadata(e);
                    return a;
                },
                I = (0, y.Z)()
                    .propsFromState(() => ({ module: v, topicId: x, taxonomy: C, title: k }))
                    .withAnalytics({ page: "guide", section: "topic" });
            const S = { ...(0, o(335632).G)({ withMessageGaps: !1 }) },
                B = i().a2a3824a,
                L = i().ed827af6,
                A = () => a.createElement(m.Z, null),
                M = () => a.createElement(n.Z, { message: L }),
                D = ["news", "ttt", "semantic_core", "sim_cluster"];
            function F(e) {
                const { history: t, title: o } = e,
                    n = a.createElement(d.Z, { history: t }),
                    r = () => {
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
                            { container: s.Z, fab: n },
                            (() => {
                                if (r()) {
                                    const { module: t } = e;
                                    return a.createElement(h.Z, { entryConfiguration: S, module: t, prerollDisplayLocation: g.Nw.OTHER, renderEmptyState: A, renderUnavailable: M, title: B });
                                }
                                {
                                    const { taxonomy: t, topicId: o } = e;
                                    return t && o ? (0, b.ZP)(`Unexpected guide topic: Taxonomy '${t}' requested with topicId '${o}'`) : (0, b.ZP)("Missing taxonomy and/or topic id for guide topic:"), A();
                                }
                            })(),
                        ),
                        sidebarContent: a.createElement(c.Z, { withWhoToFollow: !1 }),
                        title: o,
                    }),
                );
            }
            const T = I(F);
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                n = o(154003),
                s = o(392237);
            class r extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: s, href: r, icon: c, label: l, onPress: p, renderMenu: d, style: m, testID: u } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return a.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: s, icon: c, link: r, onPress: p, renderMenu: d, size: "xLarge", style: [i.root, !l && i.iconOnly, m], testID: u }, l);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const i = s.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExploreTopics.9bb8599a.js.map
