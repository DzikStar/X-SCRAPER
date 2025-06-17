"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Explore"],
    {
        233935: (e, n, a) => {
            a.d(n, { Z: () => h });
            var t = a(202784),
                d = a(154003),
                o = a(392237),
                r = a(111677),
                l = a.n(r),
                s = a(698891);
            const i = "settingsAppBar",
                c = l().bb081ea2,
                u = t.memo(({ onPress: e, pullRight: n, to: a }) => t.createElement(d.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: t.createElement(s.default, null), link: a, onPress: e, pullRight: n, style: b.button, testID: i, type: "primaryText" })),
                b = o.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                h = u;
        },
        529256: (e, n, a) => {
            a.d(n, { Z: () => s });
            var t = a(202784),
                d = a(272175),
                o = a(38293),
                r = a(572067);
            const l = ({ children: e, description: n, includeOpenGraphMeta: a = !0, title: l }) => t.createElement(t.Fragment, null, l && t.createElement(o.Z, { title: l, withMeta: a }), a && t.createElement(r.Z, { description: n, title: l }), t.createElement(d.ql, null, t.createElement("meta", { description: n, name: "description" })), e),
                s = t.memo(l);
        },
        349035: (e, n, a) => {
            a.d(n, { Z: () => o });
            var t = a(202784),
                d = a(272175);
            const o = (0, a(500002).ZP)(({ staticContext: e, status: n = 404 }) => (e && (e.statusCode = n), t.createElement(d.ql, null, t.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        387524: (e, n, a) => {
            a.d(n, { Z: () => p });
            var t = a(807896),
                d = a(202784),
                o = a(325686),
                r = a(292627),
                l = a(537392),
                s = a(392237),
                i = a(365023),
                c = a(392027),
                u = a(774654),
                b = a(725516),
                h = a(443781);
            const m = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                p = (e) => {
                    const { "aria-label": n, label: a, onPress: p, scribeComponent: w, ...g } = e,
                        { loggedInUserId: f } = d.useContext(h.rC),
                        D = (0, b.z)(),
                        E = d.useCallback(
                            (e) => {
                                D.scribe({ component: w, action: "click" }), p && p(e);
                            },
                            [D, p, w],
                        ),
                        y = u.ZM.useCollapsibleNavBars(),
                        M = [...u.Ah({ elementPosition: "bottom" }), y && m.fabStaysAboveSafeArea];
                    return f
                        ? d.createElement(
                              r.Z.FloatingAction,
                              null,
                              d.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > s.default.theme.breakpoints.large,
                                      l = e > s.default.theme.breakpoints.medium,
                                      u = e < s.default.theme.breakpoints.micro,
                                      b = [m.root, l && m.rootMedium, r && m.rootLarge],
                                      h = [m.fab, r && m.fabLarge, u && m.fabMicro, M];
                                  return d.createElement(
                                      o.Z,
                                      { "aria-label": n, pointerEvents: "box-none", role: "complementary", style: b },
                                      d.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, l) => d.createElement(o.Z, (0, t.Z)({ ref: e() }, l({ style: h })), d.createElement(c.Z, (0, t.Z)({}, g, { "aria-label": n, label: r ? a : void 0, onPress: E, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, n, a) => {
            a.d(n, { Z: () => s });
            a(136728);
            var t = a(202784),
                d = a(387524),
                o = a(635510);
            const r = "/compose/post";
            class l extends t.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: n, history: a } = this.props,
                                t = { pathname: r, state: (n && n()) || {} };
                            a.push(t);
                        });
                }
                render() {
                    const { "aria-label": e, icon: n, label: a, scribeComponent: l } = this.props;
                    return t.createElement(d.Z, { "aria-label": e, href: r, icon: n, label: a, onPress: this._handlePress, scribeComponent: l, testID: o.Z.tweet });
                }
            }
            const s = l;
        },
        32677: (e, n, a) => {
            a.d(n, { Z: () => u });
            var t = a(202784),
                d = a(111677),
                o = a.n(d),
                r = a(186444),
                l = a(355883);
            const s = o().j0179e90,
                i = o().ee69d769({ verb: "" }),
                c = t.createElement(r.default, null),
                u = ({ getLocationState: e, history: n }) => t.createElement(l.Z, { "aria-label": s, getLocationState: e, history: n, icon: c, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, n, a) => {
            a.d(n, { Z: () => t });
            const t = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        56851: (e, n, a) => {
            a.d(n, { Z: () => p });
            var t = a(202784),
                d = a(420740),
                o = a(108362),
                r = a(731708),
                l = a(154003),
                s = a(392237),
                i = a(111677),
                c = a.n(i),
                u = a(349035);
            const b = "error-detail",
                h = c().e49537c2,
                m = c().a9ae1e78;
            class p extends t.PureComponent {
                render() {
                    return t.createElement(d.Z, { testID: b }, t.createElement(u.Z, null), t.createElement(o.Z, { style: w.root }, t.createElement(r.ZP, { align: "center", color: "gray700", style: w.retryText }, h), t.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const w = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        371493: (e, n, a) => {
            a.d(n, { $N: () => D, G0: () => f, Jj: () => E, O9: () => m, S: () => p, fy: () => w, jz: () => y, nm: () => g, qk: () => u, uI: () => b });
            var t = a(912021),
                d = a(644829),
                o = a(740527),
                r = a(750085),
                l = a(555875),
                s = a(899105),
                i = a(218951);
            const c = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                b = "explore-",
                h = 9e5;
            const m = ({ contentType: e, displayLocation: n, exploreGraphQLEnabled: a = !1, focalTweetId: t, includePageConfiguration: r = !1, initialTabId: l, profileUserId: c }) => {
                    const u = e || n || "main",
                        m = (function (e, n, a, t) {
                            return a ? `${e}${n}-tweet-${a}` : t ? `${e}${n}-user-${t}` : `${e}${n}`;
                        })(a ? "explore-graphql-" : b, u, t, c),
                        p = { timelineId: m, formatResponse: s.Z, network: { getEndpoint: (e) => e.withEndpoint(d.Z).fetchExplore, getEndpointParams: (a) => ({ ...a, candidate_source: e, display_location: n, focal_tweet_id: t, include_page_configuration: r, initial_tab_id: l, profile_user_id: c, entity_tokens: !1 }) }, context: a ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${b}${u}`, staleIntervalMs: h };
                    return a ? (0, i.Z)({ ...p, formatResponse: o.Z, network: { ...p.network, getEndpoint: (e) => e.withEndpoint(d.Z).fetchExploreGraphQL } }) : (0, i.Z)(p);
                },
                p = () => {
                    const e = "explore-sidebar-gql",
                        n = { timelineId: e, formatResponse: r.Z, network: { getEndpoint: (e) => e.withEndpoint(d.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: h };
                    return (0, i.Z)(n);
                },
                w = (e, n) => m({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: n }),
                g = (0, t.Z)((e) => m({ exploreGraphQLEnabled: e, contentType: c.Trends })),
                f = (0, t.Z)((e) => m({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                D = () => (e, n) =>
                    e(
                        (0, l.CY)(n())
                            .filter((e) => 0 === e.indexOf(b))
                            .map((e) => (0, l.$q)(e)),
                    ),
                E = (e) => {
                    const n = `trend-relevant-users-${e}-gql`,
                        a = { timelineId: n, formatResponse: r.Z, network: { getEndpoint: (e) => e.withEndpoint(d.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: n, staleIntervalMs: h };
                    return (0, i.Z)(a);
                },
                y = (e) => (0, i.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(d.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: r.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        16800: (e, n, a) => {
            a.r(n), a.d(n, { ExploreScreen: () => v, default: () => L });
            var t = a(202784),
                d = a(457311),
                o = a(688715),
                r = a(111677),
                l = a.n(r),
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
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
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
                            a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
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
                g = a(56851),
                f = a(337523),
                D = a(519896),
                E = a(371493),
                y = a(24949),
                M = a(912021),
                A = a(668214),
                k = a(558369);
            const I = (e, n) => n.match?.params?.tabId || void 0,
                _ = () => {
                    const e = (0, M.Z)((e) => (0, E.fy)(e)),
                        n = (0, M.Z)((e, n) => (0, E.fy)(e, n));
                    return (0, y.P1)(
                        (e) => !0 === (0, k.FG)(e, "explore_graphql_enabled"),
                        I,
                        (n) => e(!0 === (0, k.FG)(n, "explore_graphql_enabled")).selectPageConfiguration(n),
                        (e, a, t) => n(e, t ? t?.tabs?.initialTabId : a),
                    );
                },
                x = (0, A.Z)()
                    .propsFromState(() => ({ initialTabModule: _(), selectedTabId: I }))
                    .withAnalytics({ page: "guide", section: "main" });
            const Z = { ...(0, a(335632).G)({ withThirdPartyCards: !0, errorContext: "EXPLORE_SCREEN" }) },
                C = l().fcf3e54c,
                P = l().c797b44e,
                T = l().a19ce060,
                S = () => t.createElement(g.Z, null),
                N = () => t.createElement(d.Z, { message: T }),
                B = 600,
                R = 315,
                G = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
            class v extends t.Component {
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
                    const { analytics: e, history: n, initialTabModule: a, location: d, selectedTabId: r } = this.props,
                        { featureSwitches: l } = this.context,
                        b = t.createElement(w.Z, { history: n }),
                        p = l.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends",
                        g = t.createElement(s.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: p }),
                        y = d.state && d.state.searchFocused,
                        M = this.context.featureSwitches.isTrue("responsive_web_grok_05221996"),
                        A = M && !!r && "news" !== r && "for_you" !== r,
                        k = M && "news" === r,
                        I = M && "news" === r,
                        _ = t.createElement(i.Z, { withNews: A, withSearchBox: !1, withTrends: !1 }, t.createElement(t.Fragment, null, k && t.createElement(h, null), I && t.createElement(m, null))),
                        x = this.context.featureSwitches.isTrue("rweb_enable_logged_out_search_search_bar_enabled"),
                        T = e.contextualScribeNamespace;
                    return t.createElement(t.Fragment, null, t.createElement(c.Z, { description: P, includeOpenGraphMeta: !1, title: C }), t.createElement(u.Z, { canonical: (0, o.ju)("https://x.com/explore"), description: P, image: G, imageH: R, imageW: B, title: C, type: "article" }), t.createElement(f.Z, { entryConfiguration: Z, fab: b, getTabLink: this._getTabLink, history: n, initialPageNamespace: T, module: a, onBackClick: y ? this._handleBackClick : void 0, prerollDisplayLocation: D.Nw.OTHER, renderEmptyState: S, renderUnavailable: N, rightControl: g, selectedTabId: r, sidebarContent: _, timelinePrefix: E.uI, title: C, withBottomLoginSignupBar: !0, withDeferredView: !0, withSearchBox: x }), !1);
                }
            }
            v.contextType = p.rC;
            const L = x(v);
        },
        392027: (e, n, a) => {
            a.d(n, { Z: () => s });
            var t = a(202784),
                d = a(154003),
                o = a(392237);
            class r extends t.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: n, color: a, disabled: o, href: r, icon: s, label: i, onPress: c, renderMenu: u, style: b, testID: h } = this.props,
                        m = ((e, n) => ("primary" === e && "white" === n ? "whiteOnColor" : "white" === e && "primary" === n ? "primaryOnWhite" : n))(n, a);
                    return t.createElement(d.ZP, { "aria-label": e, backgroundColor: n, color: m, disabled: o, icon: s, link: r, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !i && l.iconOnly, b], testID: h }, i);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = o.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.94dd22ba.js.map
