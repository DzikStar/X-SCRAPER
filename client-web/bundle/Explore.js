"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Explore"],
    {
        233935: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(154003),
                o = n(392237),
                i = n(674132),
                s = n.n(i),
                l = n(698891);
            const c = "settingsAppBar",
                p = s().bb081ea2,
                d = a.memo(({ onPress: e, pullRight: t, to: n }) => a.createElement(r.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: a.createElement(l.default, null), link: n, onPress: e, pullRight: t, style: h.button, testID: c, type: "primaryText" })),
                h = o.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = d;
        },
        529256: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(272175),
                o = n(38293),
                i = n(572067);
            const s = ({ children: e, description: t, includeOpenGraphMeta: n = !0, title: s }) => a.createElement(a.Fragment, null, s && a.createElement(o.Z, { title: s, withMeta: n }), n && a.createElement(i.Z, { description: t, title: s }), a.createElement(r.ql, null, a.createElement("meta", { description: t, name: "description" })), e),
                l = a.memo(s);
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                i = n(292627),
                s = n(537392),
                l = n(392237),
                c = n(365023),
                p = n(392027),
                d = n(774654),
                h = n(725516),
                m = n(443781);
            const b = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                u = (e) => {
                    const { "aria-label": t, label: n, onPress: u, scribeComponent: g, ...E } = e,
                        { loggedInUserId: f } = r.useContext(m.rC),
                        _ = (0, h.z)(),
                        w = r.useCallback(
                            (e) => {
                                _.scribe({ component: g, action: "click" }), u && u(e);
                            },
                            [_, u, g],
                        ),
                        Z = d.ZM.useCollapsibleNavBars(),
                        y = [...d.Ah({ elementPosition: "bottom" }), Z && b.fabStaysAboveSafeArea];
                    return f
                        ? r.createElement(
                              i.Z.FloatingAction,
                              null,
                              r.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      d = e < l.default.theme.breakpoints.micro,
                                      h = [b.root, s && b.rootMedium, i && b.rootLarge],
                                      m = [b.fab, i && b.fabLarge, d && b.fabMicro, y];
                                  return r.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: h },
                                      r.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(o.Z, (0, a.Z)({ ref: e() }, s({ style: m })), r.createElement(p.Z, (0, a.Z)({}, E, { "aria-label": t, label: i ? n : void 0, onPress: w, style: d && b.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var a = n(202784),
                r = n(387524),
                o = n(635510);
            const i = "/compose/post";
            class s extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                a = { pathname: i, state: (t && t()) || {} };
                            n.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: s } = this.props;
                    return a.createElement(r.Z, { "aria-label": e, href: i, icon: t, label: n, onPress: this._handlePress, scribeComponent: s, testID: o.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(674132),
                o = n.n(r),
                i = n(186444),
                s = n(355883);
            const l = o().j0179e90,
                c = o().ee69d769({ verb: "" }),
                p = a.createElement(i.default, null),
                d = ({ getLocationState: e, history: t }) => a.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: p, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => _, G0: () => f, Jj: () => w, O9: () => b, S: () => u, fy: () => g, jz: () => Z, nm: () => E, qk: () => d, uI: () => h });
            var a = n(912021),
                r = n(644829),
                o = n(740527),
                i = n(750085),
                s = n(555875),
                l = n(899105),
                c = n(218951);
            const p = Object.freeze({ Trends: "trends" }),
                d = Object.freeze({ WebSidebar: "web_sidebar" }),
                h = "explore-",
                m = 9e5;
            const b = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: a, includePageConfiguration: i = !1, initialTabId: s, profileUserId: p }) => {
                    const d = e || t || "main",
                        b = (function (e, t, n, a) {
                            return n ? `${e}${t}-tweet-${n}` : a ? `${e}${t}-user-${a}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : h, d, a, p),
                        u = { timelineId: b, formatResponse: l.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: a, include_page_configuration: i, initial_tab_id: s, profile_user_id: p, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${h}${d}`, staleIntervalMs: m };
                    return n ? (0, c.Z)({ ...u, formatResponse: o.Z, network: { ...u.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, c.Z)(u);
                },
                u = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: m };
                    return (0, c.Z)(t);
                },
                g = (e, t) => b({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                E = (0, a.Z)((e) => b({ exploreGraphQLEnabled: e, contentType: p.Trends })),
                f = (0, a.Z)((e) => b({ exploreGraphQLEnabled: e, displayLocation: d.WebSidebar })),
                _ = () => (e, t) =>
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(h))
                            .map((e) => (0, s.$q)(e)),
                    ),
                w = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: m };
                    return (0, c.Z)(n);
                },
                Z = (e) => (0, c.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: i.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        849461: (e, t, n) => {
            n.r(t), n.d(t, { ExploreScreen: () => M, default: () => $ });
            var a = n(202784),
                r = n(457311),
                o = n(688715),
                i = n(674132),
                s = n.n(i),
                l = n(233935),
                c = n(718e3),
                p = n(529256),
                d = n(572067),
                h = n(443781),
                m = n(32677),
                b = n(231035),
                u = n(337523),
                g = n(519896),
                E = n(371493),
                f = n(24949),
                _ = n(912021),
                w = n(668214),
                Z = n(558369);
            const y = (e, t) => t.match?.params?.tabId || void 0,
                x = () => {
                    const e = (0, _.Z)((e) => (0, E.fy)(e)),
                        t = (0, _.Z)((e, t) => (0, E.fy)(e, t));
                    return (0, f.P1)(
                        (e) => !0 === (0, Z.FG)(e, "explore_graphql_enabled"),
                        y,
                        (t) => e(!0 === (0, Z.FG)(t, "explore_graphql_enabled")).selectPageConfiguration(t),
                        (e, n, a) => t(e, a ? a?.tabs?.initialTabId : n),
                    );
                },
                C = (0, w.Z)()
                    .propsFromState(() => ({ initialTabModule: x(), selectedTabId: y }))
                    .withAnalytics({ page: "guide", section: "main" });
            const k = { ...(0, n(335632).G)({ withThirdPartyCards: !0, errorContext: "EXPLORE_SCREEN" }) },
                T = s().fcf3e54c,
                L = s().c797b44e,
                P = s().a19ce060,
                S = () => a.createElement(b.Z, null),
                v = () => a.createElement(r.Z, { message: P }),
                I = 600,
                B = 315,
                R = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
            class M extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTabLink = (e) => ({ pathname: `/explore/tabs/${e}` })),
                        (this._handleSettingsClick = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: "settings_button", action: "click" });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                render() {
                    const { analytics: e, history: t, initialTabModule: n, location: r, selectedTabId: i } = this.props,
                        { featureSwitches: s } = this.context,
                        h = a.createElement(m.Z, { history: t }),
                        b = s.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends",
                        f = a.createElement(l.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: b }),
                        _ = r.state && r.state.searchFocused,
                        w = this.context.featureSwitches.isTrue("responsive_web_grok_05221996"),
                        Z = w && !!i && "news" !== i && "for_you" !== i,
                        y = w && "news" === i,
                        x = w && "news" === i,
                        C = a.createElement(c.Z, { withFullNews: x, withNews: Z, withNewsSentiment: y, withSearchBox: !1, withTrends: !1 }),
                        P = this.context.featureSwitches.isTrue("rweb_enable_logged_out_search_search_bar_enabled"),
                        M = e.contextualScribeNamespace;
                    return a.createElement(a.Fragment, null, a.createElement(p.Z, { description: L, includeOpenGraphMeta: !1, title: T }), a.createElement(d.Z, { canonical: (0, o.ju)("https://x.com/explore"), description: L, image: R, imageH: B, imageW: I, title: T, type: "article" }), a.createElement(u.Z, { entryConfiguration: k, fab: h, getTabLink: this._getTabLink, history: t, initialPageNamespace: M, module: n, onBackClick: _ ? this._handleBackClick : void 0, prerollDisplayLocation: g.Nw.OTHER, renderEmptyState: S, renderUnavailable: v, rightControl: f, selectedTabId: i, sidebarContent: C, timelinePrefix: E.uI, title: T, withBottomLoginSignupBar: !0, withDeferredView: !0, withSearchBox: P }), !1);
                }
            }
            M.contextType = h.rC;
            const $ = C(M);
        },
        392027: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(154003),
                o = n(392237);
            class i extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: n, disabled: o, href: i, icon: l, label: c, onPress: p, renderMenu: d, style: h, testID: m } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, n);
                    return a.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: o, icon: l, link: i, onPress: p, renderMenu: d, size: "xLarge", style: [s.root, !c && s.iconOnly, h], testID: m }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = o.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.b0fd193a.js.map
