"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Explore"],
    {
        233935: (e, n, a) => {
            a.d(n, { Z: () => h });
            var d = a(202784),
                o = a(154003),
                r = a(392237),
                t = a(674132),
                l = a.n(t),
                s = a(698891);
            const i = "settingsAppBar",
                c = l().bb081ea2,
                u = d.memo(({ onPress: e, pullRight: n, to: a }) => d.createElement(o.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: d.createElement(s.default, null), link: a, onPress: e, pullRight: n, style: b.button, testID: i, type: "primaryText" })),
                b = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                h = u;
        },
        529256: (e, n, a) => {
            a.d(n, { Z: () => s });
            var d = a(202784),
                o = a(272175),
                r = a(38293),
                t = a(572067);
            const l = ({ children: e, description: n, includeOpenGraphMeta: a = !0, title: l }) => d.createElement(d.Fragment, null, l && d.createElement(r.Z, { title: l, withMeta: a }), a && d.createElement(t.Z, { description: n, title: l }), d.createElement(o.ql, null, d.createElement("meta", { description: n, name: "description" })), e),
                s = d.memo(l);
        },
        387524: (e, n, a) => {
            a.d(n, { Z: () => p });
            var d = a(807896),
                o = a(202784),
                r = a(325686),
                t = a(292627),
                l = a(537392),
                s = a(392237),
                i = a(365023),
                c = a(392027),
                u = a(774654),
                b = a(725516),
                h = a(443781);
            const m = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                p = (e) => {
                    const { "aria-label": n, label: a, onPress: p, scribeComponent: w, ...D } = e,
                        { loggedInUserId: g } = o.useContext(h.rC),
                        M = (0, b.z)(),
                        f = o.useCallback(
                            (e) => {
                                M.scribe({ component: w, action: "click" }), p && p(e);
                            },
                            [M, p, w],
                        ),
                        y = u.ZM.useCollapsibleNavBars(),
                        A = [...u.Ah({ elementPosition: "bottom" }), y && m.fabStaysAboveSafeArea];
                    return g
                        ? o.createElement(
                              t.Z.FloatingAction,
                              null,
                              o.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const t = e > s.default.theme.breakpoints.large,
                                      l = e > s.default.theme.breakpoints.medium,
                                      u = e < s.default.theme.breakpoints.micro,
                                      b = [m.root, l && m.rootMedium, t && m.rootLarge],
                                      h = [m.fab, t && m.fabLarge, u && m.fabMicro, A];
                                  return o.createElement(
                                      r.Z,
                                      { "aria-label": n, pointerEvents: "box-none", role: "complementary", style: b },
                                      o.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, l) => o.createElement(r.Z, (0, d.Z)({ ref: e() }, l({ style: h })), o.createElement(c.Z, (0, d.Z)({}, D, { "aria-label": n, label: t ? a : void 0, onPress: f, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, n, a) => {
            a.d(n, { Z: () => s });
            a(136728);
            var d = a(202784),
                o = a(387524),
                r = a(635510);
            const t = "/compose/post";
            class l extends d.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: n, history: a } = this.props,
                                d = { pathname: t, state: (n && n()) || {} };
                            a.push(d);
                        });
                }
                render() {
                    const { "aria-label": e, icon: n, label: a, scribeComponent: l } = this.props;
                    return d.createElement(o.Z, { "aria-label": e, href: t, icon: n, label: a, onPress: this._handlePress, scribeComponent: l, testID: r.Z.tweet });
                }
            }
            const s = l;
        },
        32677: (e, n, a) => {
            a.d(n, { Z: () => u });
            var d = a(202784),
                o = a(674132),
                r = a.n(o),
                t = a(186444),
                l = a(355883);
            const s = r().j0179e90,
                i = r().ee69d769({ verb: "" }),
                c = d.createElement(t.default, null),
                u = ({ getLocationState: e, history: n }) => d.createElement(l.Z, { "aria-label": s, getLocationState: e, history: n, icon: c, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, n, a) => {
            a.d(n, { Z: () => d });
            const d = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        371493: (e, n, a) => {
            a.d(n, { $N: () => M, G0: () => g, Jj: () => f, O9: () => m, S: () => p, fy: () => w, jz: () => y, nm: () => D, qk: () => u, uI: () => b });
            var d = a(912021),
                o = a(644829),
                r = a(740527),
                t = a(750085),
                l = a(555875),
                s = a(899105),
                i = a(218951);
            const c = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                b = "explore-",
                h = 9e5;
            const m = ({ contentType: e, displayLocation: n, exploreGraphQLEnabled: a = !1, focalTweetId: d, includePageConfiguration: t = !1, initialTabId: l, profileUserId: c }) => {
                    const u = e || n || "main",
                        m = (function (e, n, a, d) {
                            return a ? `${e}${n}-tweet-${a}` : d ? `${e}${n}-user-${d}` : `${e}${n}`;
                        })(a ? "explore-graphql-" : b, u, d, c),
                        p = { timelineId: m, formatResponse: s.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExplore, getEndpointParams: (a) => ({ ...a, candidate_source: e, display_location: n, focal_tweet_id: d, include_page_configuration: t, initial_tab_id: l, profile_user_id: c, entity_tokens: !1 }) }, context: a ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${b}${u}`, staleIntervalMs: h };
                    return a ? (0, i.Z)({ ...p, formatResponse: r.Z, network: { ...p.network, getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreGraphQL } }) : (0, i.Z)(p);
                },
                p = () => {
                    const e = "explore-sidebar-gql",
                        n = { timelineId: e, formatResponse: t.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: h };
                    return (0, i.Z)(n);
                },
                w = (e, n) => m({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: n }),
                D = (0, d.Z)((e) => m({ exploreGraphQLEnabled: e, contentType: c.Trends })),
                g = (0, d.Z)((e) => m({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                M = () => (e, n) =>
                    e(
                        (0, l.CY)(n())
                            .filter((e) => 0 === e.indexOf(b))
                            .map((e) => (0, l.$q)(e)),
                    ),
                f = (e) => {
                    const n = `trend-relevant-users-${e}-gql`,
                        a = { timelineId: n, formatResponse: t.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: n, staleIntervalMs: h };
                    return (0, i.Z)(a);
                },
                y = (e) => (0, i.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: t.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        16800: (e, n, a) => {
            a.r(n), a.d(n, { ExploreScreen: () => L, default: () => v });
            var d = a(202784),
                o = a(457311),
                r = a(688715),
                t = a(674132),
                l = a.n(t),
                s = a(233935),
                i = a(718e3),
                c = a(529256),
                u = a(572067),
                b = a(523561);
            const h = (0, b.Z)({
                    loader: () =>
                        Promise.all([
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-3ba4c741"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                            a.e("loader.NewsSentimentSidebar"),
                        ]).then(a.bind(a, 254274)),
                }),
                m = (0, b.Z)({ loader: () => a.e("loader.TryFullNewsSidebar").then(a.bind(a, 426873)) });
            var p = a(443781),
                w = a(32677),
                D = a(231035),
                g = a(337523),
                M = a(519896),
                f = a(371493),
                y = a(24949),
                A = a(912021),
                E = a(668214),
                k = a(558369);
            const I = (e, n) => n.match?.params?.tabId || void 0,
                _ = () => {
                    const e = (0, A.Z)((e) => (0, f.fy)(e)),
                        n = (0, A.Z)((e, n) => (0, f.fy)(e, n));
                    return (0, y.P1)(
                        (e) => !0 === (0, k.FG)(e, "explore_graphql_enabled"),
                        I,
                        (n) => e(!0 === (0, k.FG)(n, "explore_graphql_enabled")).selectPageConfiguration(n),
                        (e, a, d) => n(e, d ? d?.tabs?.initialTabId : a),
                    );
                },
                P = (0, E.Z)()
                    .propsFromState(() => ({ initialTabModule: _(), selectedTabId: I }))
                    .withAnalytics({ page: "guide", section: "main" });
            const x = { ...(0, a(335632).G)({ withThirdPartyCards: !0, errorContext: "EXPLORE_SCREEN" }) },
                Z = l().fcf3e54c,
                C = l().c797b44e,
                T = l().a19ce060,
                N = () => d.createElement(D.Z, null),
                S = () => d.createElement(o.Z, { message: T }),
                B = 600,
                R = 315,
                G = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
            class L extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTabLink = (e) => ({ pathname: `/explore/tabs/${e}` })),
                        (this._handleSettingsClick = (e) => {
                            const { analytics: n } = this.props;
                            n.scribe({ element: "settings_button", action: "click" });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                render() {
                    const { analytics: e, history: n, initialTabModule: a, location: o, selectedTabId: t } = this.props,
                        { featureSwitches: l } = this.context,
                        b = d.createElement(w.Z, { history: n }),
                        p = l.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends",
                        D = d.createElement(s.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: p }),
                        y = o.state && o.state.searchFocused,
                        A = this.context.featureSwitches.isTrue("responsive_web_grok_05221996"),
                        E = A && !!t && "news" !== t && "for_you" !== t,
                        k = A && "news" === t,
                        I = A && "news" === t,
                        _ = d.createElement(i.Z, { withNews: E, withSearchBox: !1, withTrends: !1 }, k && d.createElement(h, null), I && d.createElement(m, null)),
                        P = this.context.featureSwitches.isTrue("rweb_enable_logged_out_search_search_bar_enabled"),
                        T = e.contextualScribeNamespace;
                    return d.createElement(d.Fragment, null, d.createElement(c.Z, { description: C, includeOpenGraphMeta: !1, title: Z }), d.createElement(u.Z, { canonical: (0, r.ju)("https://x.com/explore"), description: C, image: G, imageH: R, imageW: B, title: Z, type: "article" }), d.createElement(g.Z, { entryConfiguration: x, fab: b, getTabLink: this._getTabLink, history: n, initialPageNamespace: T, module: a, onBackClick: y ? this._handleBackClick : void 0, prerollDisplayLocation: M.Nw.OTHER, renderEmptyState: N, renderUnavailable: S, rightControl: D, selectedTabId: t, sidebarContent: _, timelinePrefix: f.uI, title: Z, withBottomLoginSignupBar: !0, withDeferredView: !0, withSearchBox: P }), !1);
                }
            }
            L.contextType = p.rC;
            const v = P(L);
        },
        392027: (e, n, a) => {
            a.d(n, { Z: () => s });
            var d = a(202784),
                o = a(154003),
                r = a(392237);
            class t extends d.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: n, color: a, disabled: r, href: t, icon: s, label: i, onPress: c, renderMenu: u, style: b, testID: h } = this.props,
                        m = ((e, n) => ("primary" === e && "white" === n ? "whiteOnColor" : "white" === e && "primary" === n ? "primaryOnWhite" : n))(n, a);
                    return d.createElement(o.ZP, { "aria-label": e, backgroundColor: n, color: m, disabled: r, icon: s, link: t, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !i && l.iconOnly, b], testID: h }, i);
                }
            }
            t.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.242c2b8a.js.map
