"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-e019dbda"],
    {
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var o = a(202784),
                n = a(500002),
                r = a(668214),
                d = a(997174),
                s = a(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: d },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const l = n || s;
                    ((l && n !== s) || (!l && a !== r) || o !== d || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, n.ZP)(i(l));
        },
        337523: (e, t, a) => {
            a.d(t, { Z: () => Te });
            var o = a(202784),
                n = a(457311),
                r = a(708852),
                d = a(108362),
                s = a(332920),
                i = a.n(s),
                l = a(769471),
                c = a(718e3),
                u = a(33104),
                E = a(789831),
                _ = a(252021),
                b = a(293115),
                h = a(87063),
                S = a(652904),
                p = a(507651),
                m = a(3138),
                w = a(655352),
                T = a(503229),
                C = a(71620),
                A = a(668214);
            const I = (e, t) => t.module.selectInitialFetchStatus(e),
                N = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                D = (e, t) => {
                    const a = t.selectedTabId,
                        o = N(e, t);
                    return o && o.tabs && o.tabs.tabs.find((e) => e.id === a);
                },
                f = (0, A.Z)()
                    .propsFromState(() => ({ initialFetchStatus: I, pageConfiguration: N, selectedTab: D }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class R extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: a, pageConfiguration: o } = this.props,
                                n = o ? o.scribeConfig : void 0;
                            return a().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(n), action: "get_initial" });
                            }, t(m.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: a, selectedTab: n } = this.props,
                                r = a?.tabs;
                            if (r && r.tabs) {
                                const d = (n && n.id) || r.initialTabId,
                                    s = a ? a.scribeConfig : void 0;
                                let i;
                                const l = r.tabs.map((a, o) => {
                                    const n = a.id === d;
                                    return (
                                        n && (i = o),
                                        {
                                            isActive: () => n,
                                            key: a.labelText,
                                            label: a.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(s), this._getScribeNamespace(a.scribeConfig)));
                                            },
                                            to: t(a.id),
                                            token: a.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return o.createElement(o.Fragment, null, o.createElement(p.Z, { alignFirstItem: (0, w.ZP)(), links: l, visibleItemIndex: i }));
                            }
                            return null;
                        });
                }
                componentDidMount() {
                    this._fetchPageModule();
                }
                componentDidUpdate(e) {
                    (e.module === this.props.module && this.props.initialFetchStatus) || this._fetchPageModule();
                }
                render() {
                    const { initialFetchStatus: e } = this.props;
                    return e === h.Z.LOADED ? this._render() : null;
                }
                _buildTabNamespace(e, t) {
                    let a;
                    return e && (a = e), t && (a = { ...a, ...t }), { ...a, element: "tab", action: "navigate" };
                }
                _getScribeNamespace(e) {
                    if (e) {
                        const { entityToken: t, ...a } = e;
                        return a;
                    }
                }
            }
            const O = f((0, T.Z)(R));
            var g = a(912021),
                U = a(383675),
                L = a(611423),
                M = a(443781);
            const y = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.17"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.22"),
                        a.e("modules.audio-6107ac1a"),
                        a.e("modules.audio-b953418a"),
                        a.e("modules.audio-7c51e6a7"),
                        a.e("modules.audio-04db59e9"),
                        a.e("modules.audio-76583d6c"),
                        a.e("modules.audio-b7a8a5fb"),
                        a.e("modules.audio-51f6e793"),
                        a.e("modules.audio-e019dbda"),
                        a.e("modules.audio-262c94d4"),
                        a.e("modules.audio-c6fe4ea4"),
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
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
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
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        a.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
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
                        a.e("shared~bundle.News~ondemand.News~loader.ExploreNews"),
                        a.e("loader.ExploreNews"),
                    ]).then(a.bind(a, 169698)),
            });
            var F = a(810641);
            const P = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                B = (e, t) => {
                    const a = t.selectedTabId,
                        o = P(e, t);
                    return o && o.tabs && o.tabs.tabs.find((e) => e.id === a);
                },
                Z = (0, A.Z)()
                    .propsFromState(() => ({ pageConfiguration: P, selectedTab: B }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class v extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: t, selectedTab: a } = this.props,
                                o = a?.scribeConfig || t?.scribeConfig;
                            if (o) {
                                const { entityToken: e, ...t } = o;
                                return t;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, g.Z)((e, t, a, o) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, L.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: o });
                                if (e?.graphQLTimelineId) return (0, U.R)(e.graphQLTimelineId);
                            }
                            return a;
                        })),
                        (this._getRefreshIntervalSecForCurrentTab = () => {
                            const { pageConfiguration: e, selectedTab: t } = this.props,
                                a = e?.tabs?.initialTabId;
                            if (t) return t.refreshIntervalSec;
                            if (a) {
                                const t = e?.tabs?.tabs.find((e) => a === e.id);
                                return t?.refreshIntervalSec;
                            }
                        });
                }
                render() {
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: a, prerollDisplayLocation: n, refreshControl: r, renderEmptyState: d, renderUnavailable: s, selectedTab: i, timelinePrefix: l, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return o.createElement(y, null);
                    const E = this._getModule(i, a?.tabs?.initialTabId, t, l),
                        _ = this._getRefreshIntervalSecForCurrentTab(),
                        h = _ ? 1e3 * _ : void 0;
                    return o.createElement(b.nO, { namespace: this._getTimelineNamespace() }, o.createElement(F.Z, { entryConfiguration: e, module: E, pollingIntervalMsOverride: h, prerollDisplayLocation: n, refreshControl: r, renderEmptyState: d, renderUnavailable: s, title: c, withoutHeadroom: u }));
                }
            }
            v.contextType = M.rC;
            const H = Z(v);
            var k = a(929482),
                G = a(335632),
                x = a(325686),
                Q = a(392237),
                W = a(950708),
                q = a(187669),
                z = a(725516),
                V = a(942893);
            const j = (e, t) => {
                const a = (0, z.z)(),
                    { component: n, element: r } = t || {},
                    d = o.useMemo(() => ({ items: [V.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, q.q)(() => {
                        a.scribe({ component: n, element: r, action: "impression", data: d });
                    }),
                    { namespace: { component: n, element: r }, data: d }
                );
            };
            function K(e) {
                const {
                        header: { clientEventInfo: t, displayType: a, facepile: n, landingContext: r, topicId: d },
                        onHeaderVisible: s,
                    } = e,
                    { data: i, namespace: l } = j(d, t);
                return o.createElement(x.Z, { style: Y.root }, o.createElement(b.nO, { data: i, namespace: l }, o.createElement(W.Z, { displayType: a, facepile: n, onFollowHeaderOffscreen: ({ isOffscreen: e }) => s(!e), topicId: d, topicLandingContext: r, withDivider: !0 })));
            }
            const Y = Q.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var $ = a(24949);
            const J = (e, t) => t.module.selectPageConfiguration(e),
                X = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, $.P1)(J, X, (e, t) => t !== h.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, A.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var ae = a(688715),
                oe = a(815858),
                ne = a(651930),
                re = a(572067),
                de = a(265196),
                se = a(421575),
                ie = a(907552),
                le = a(466380);
            const ce = (e, t) => {
                    const a = t.navBar.topicId ? t.navBar.topicId : "";
                    return le.Z.select(e, a);
                },
                ue = (0, A.Z)().propsFromState(() => ({ topic: ce })),
                Ee = (e) => (0, ae.ju)(`https://x.com/i/topics/${e}`),
                _e = (e) => `twitter://topics_timeline?id=${e}`,
                be = i().ed88e742;
            const he = Q.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                Se = ue(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: a,
                            navBar: { clientEventInfo: n },
                            pageNamespace: r,
                            topic: d,
                            withAppLinks: s,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = o.useContext(M.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: E, namespace: _ } = j(t, n),
                        h = (0, l.Z)({}, r, _);
                    return d ? o.createElement(b.nO, { data: E, namespace: h }, o.createElement(o.Fragment, null, i ? o.createElement(re.Z, { canonical: Ee(t), description: d.description, title: d.name, type: "article" }) : null, s ? o.createElement(ne.Z, { deepLink: _e(t) }) : null, o.createElement(x.Z, { style: he.rightControl }, o.createElement(x.Z, { style: he.followButtonContainer }, o.createElement(oe.Z, { animateMount: !0, show: a, type: "fade" }, o.createElement(de.ZP, { size: "medium", textMode: se.q.FollowTopic, topic: d }))), u ? o.createElement(ie.ZP, { copyLinkShareLabel: be, scribeNamespace: h, url: Ee(t) }) : null))) : null;
                }),
                pe = i().e9f1fbcc,
                me = o.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: t, backLocation: a, documentTitle: n, entryConfiguration: s, fab: i, getTabLink: c, hasTabNavigation: p, history: m, initialFetchStatus: w, initialPageNamespace: T, logoButton: C, module: A, onBackClick: I, pageConfiguration: N, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, rightControl: g, selectedTabId: U, sidebarContent: L, timelinePrefix: M, title: y, withAppLinks: F, withBottomLoginSignupBar: P, withDeferredView: B, withOpenGraphMeta: Z, withSearchBox: v, withTweetButton: G } = e,
                        x = (0, r.tj)(),
                        Q = o.useMemo(() => ({ ...s, ...(0, k.Z)({ isLegacy: !0, isWide: x }) }), [s, x]),
                        [W, q] = o.useState(!0),
                        { header: z, navBar: V, subtitle: j, title: Y } = N || {},
                        $ = w === h.Z.LOADED ? Y || y : "",
                        J = ((e, t, a) => {
                            const o = t?.scribeConfig,
                                { entityToken: n, ...r } = o || {},
                                d = t?.tabs,
                                s = e || d?.initialTabId,
                                i = d?.tabs.find((e) => e.id === s),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, l.Z)({}, a, r, u);
                        })(U, N, T),
                        X = z ? o.createElement(K, { header: z, onHeaderVisible: q }) : null,
                        ee = V ? o.createElement(Se, { isHeaderOffscreen: !W, navBar: V, pageNamespace: J, withAppLinks: F, withOpenGraphMeta: Z }) : null,
                        te = B ? u.Z : o.Fragment,
                        ae = o.createElement(o.Fragment, null, X, o.createElement(te, null, o.createElement(H, { entryConfiguration: Q, initialModule: A, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, selectedTabId: U, timelinePrefix: M, title: y, withoutHeadroom: !0 }))),
                        oe = i ? o.createElement(E.Z, { component: d.Z, fab: i }, ae) : ae,
                        ne = c && p ? o.createElement(O, { getTabLink: c, module: A, selectedTabId: U }) : void 0;
                    return o.createElement(b.nO, { namespace: J }, o.createElement(S.Z, null, o.createElement(_.Z, { TabBar: t, backLocation: a, documentTitle: n, history: m, logoButton: C, onBackClick: I, primaryContent: oe, rightControl: ee || g, secondaryBar: ne, sidebarContent: L, subtitle: j, title: X && W ? y : $, withBottomLoginSignupBar: P, withSearchBox: v, withTweetButton: G })));
                };
            we.defaultProps = { entryConfiguration: (0, G.G)({}), renderEmptyState: () => o.createElement(n.Z, { header: pe }), sidebarContent: me, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const Te = te(we);
        },
        709070: (e, t, a) => {
            a.d(t, { Z: () => r });
            var o = a(351322);
            const n = { loader: () => a.e("loader.PivotLabelHandler").then(a.bind(a, 901547)), loaderKey: "pivotLabelLoader", strategy: a(509738).Z.OnDemand },
                r = o.OZ(n);
        },
        26232: (e, t, a) => {
            a.d(t, { Z: () => m });
            var o = a(202784),
                n = a(555874),
                r = a(332920),
                d = a.n(r),
                s = a(290402),
                i = a(965245),
                l = a(71620),
                c = a(668214);
            const u = (e, t) => t.module.selectFetchStatus(e),
                E = (e, t) => t.module.selectItems(e),
                _ = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: E }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, l.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                b = d().i9028824,
                h = (e) => e,
                S = (e) => (t) => e(t.item);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: a, numColumns: r, onScrollEnd: d, renderer: s, withoutHeadroom: l } = this.props;
                            return !t || r < 1 ? null : 1 === r ? o.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: h, items: t, noItemsRenderer: a, onNearEnd: this._handleNearEnd, onScrollEnd: d, renderer: s, withoutHeadroom: l }) : o.createElement(n.Z, { ListEmptyComponent: a, data: t, keyExtractor: h, numColumns: r, renderItem: S(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: a, fetchIfNeeded: o } = this.props;
                            (e ? a : o)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: a } = this.props;
                    return t ? o.createElement(s.Z, { "aria-label": b, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: a, retryable: !0 }) : null;
                }
            }
            p.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const m = _(p);
        },
        890655: (e, t, a) => {
            a.d(t, { Q: () => o });
            const o = (e, t = !1) =>
                e
                    .split("-")
                    .map((e) => (t ? e[0].toUpperCase() + e.substring(1) : e))
                    .join(" ");
        },
        337455: (e, t, a) => {
            a.d(t, { Z: () => i });
            var o = a(202784),
                n = a(411916),
                r = a.n(n),
                d = a(373463),
                s = a.n(d);
            function i(e) {
                class t extends o.Component {
                    constructor(e, t) {
                        super(e, t), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        r()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? o.createElement(e, this.props) : null;
                    }
                }
                return s()(t, e);
            }
        },
        553093: (e, t, a) => {
            a.d(t, { Sz: () => o });
            const o = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const a = t.join("");
                    return n(a, 0).toString();
                },
                n = (e, t) => {
                    const a = "string" == typeof e ? e : String(e);
                    let o = t;
                    for (let e = 0; e < a.length; e++) {
                        (o = (o << 5) - o + a.charCodeAt(e)), (o |= 0);
                    }
                    return o;
                };
        },
        68738: (e, t, a) => {
            a.d(t, { E: () => r });
            var o = a(106067),
                n = a(545521);
            const r = (e) => (0, n.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_DELETED_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchContributorDeletedNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorDeletedNotesSlice-${e}` });
        },
        44836: (e, t, a) => {
            a.d(t, { Z: () => c, f: () => l });
            var o = a(979090),
                n = a(106067),
                r = a(917799),
                d = a(502909),
                s = a(600823);
            const i = (0, d.ZP)({ namespace: "birdwatchContributorNotes" }),
                l =
                    (e) =>
                    (t, a, { api: d }) =>
                        r._O(t, { request: d.withEndpoint(n.Z).deleteNote, params: { note_id: e } })({ actionTypes: i.actionTypes.OPTIMISTIC_UPDATE, context: "DELETE_NOTE" }, (t) => {
                            if (t) return [i.deleteOne(e), (0, o.f_)(e)];
                        }),
                c = s.Z.register(i);
        },
        78014: (e, t, a) => {
            a.d(t, { _: () => r });
            var o = a(106067),
                n = a(545521);
            const r = (e) => (0, n.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchContributorNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorNotesSlice-${e}` });
        },
        979090: (e, t, a) => {
            a.d(t, { $e: () => Ae, BG: () => ee, Bb: () => Me, Bs: () => ae, EW: () => Te, HO: () => ce, JL: () => de, Jn: () => _e, Kc: () => fe, Ld: () => Le, Lt: () => Y, OV: () => X, PL: () => oe, Pi: () => he, Qg: () => x, SZ: () => Pe, V0: () => ge, Wk: () => $, X3: () => Re, _T: () => He, _b: () => Fe, aZ: () => Ne, ap: () => re, cS: () => te, dw: () => j, eD: () => ne, eY: () => pe, et: () => z, f3: () => ue, f_: () => Oe, gH: () => le, gP: () => Ze, jm: () => W, kT: () => Ue, kX: () => Be, lC: () => Ie, lW: () => se, lw: () => Ce, mZ: () => ve, mv: () => Se, oV: () => ke, pN: () => we, qm: () => De, r9: () => Q, sz: () => K, tk: () => V, vF: () => be, w6: () => ie, wK: () => ye, wd: () => Ee, ww: () => me });
            var o = a(744531),
                n = a(401388),
                r = a(106067),
                d = a(256563),
                s = a(497461),
                i = a(499627),
                l = a(917799),
                c = a(312771),
                u = a(56519);
            const E = "birdwatchNotes",
                _ = `rweb/${E}`,
                b = (0, l.dg)(_, "DELETE_NOTE"),
                h = (0, l.dg)(_, "CREATE_RATING"),
                S = (0, l.dg)(_, "DELETE_RATING"),
                p = (0, l.dg)(_, "SELECT_ALIAS"),
                m = (0, l.dg)(_, "CREATE_APPEAL"),
                w = (0, l.dg)(_, "EDIT_NOTIFICATION_SETTINGS"),
                T = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL", FAILURE: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL" }),
                A = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                I = (Object.freeze({ REQUEST: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_REQUEST", SUCCESS: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_SUCCESS", FAILURE: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_FAILURE" }), Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_DATA_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_DATA_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_DATA_FAILURE" })),
                N = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_FAILURE" }),
                D = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_FAILURE" }),
                f = Object.freeze({ REQUEST: "rweb/birdwatchNotes/ADMIT_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/ADMIT_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/ADMIT_USER_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/birdwatchNotes/REMOVE_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/REMOVE_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/REMOVE_USER_FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_FAILURE" }),
                U = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_FAILURE" }),
                L = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE" }),
                M = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_NOTE_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE" }),
                F = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE" }),
                P = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE" }),
                B = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_FAILURE" }),
                Z = Object.freeze({ REQUEST: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_REQUEST", SUCCESS: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_SUCCESS", FAILURE: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_FAILURE" }),
                v = "rweb/birdwatchNotes/SAVE_FORM_DRAFT",
                H = "rweb/birdwatchNotes/SAVE_BIRDWATCH_PATH",
                k = { drafts: {}, notes: {}, noteRequests: {}, tweetNotes: {}, contributor: {}, publicData: {}, matchData: { fetchStatus: c.ZP.LOADING }, sourceLinks: {}, sources: {}, paths: {} };
            i.Z.register({
                [E]: function (e = k, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case M.SUCCESS: {
                            const a = t.payload?.result;
                            if (a) {
                                const o = t.payload?.entities?.birdwatchNotes[a],
                                    n = o.tweet.rest_id,
                                    r = "MisinformedOrPotentiallyMisleading" === o.data_v1?.classification;
                                return { ...e, notes: { ...e.notes, [a]: o }, tweetNotes: { ...e.tweetNotes, [n]: { ...(e.tweetNotes && e.tweetNotes[n]), misleadingIds: r ? [...e.tweetNotes[n].misleadingIds, a] : e.tweetNotes[n].misleadingIds, notMisleadingIds: r ? e.tweetNotes[n].notMisleadingIds : [...e.tweetNotes[n].notMisleadingIds, a], ownNoteId: a, fetchStatus: c.ZP.LOADED } } };
                            }
                            return e;
                        }
                        case C.SUCCESS: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, noteRequests: (0, o.Z)(e.noteRequests, a) } : e;
                        }
                        case b.SUCCESS: {
                            const a = t.meta?.note_id;
                            return a ? { ...e, notes: (0, o.Z)(e.notes, a) } : e;
                        }
                        case N.REQUEST: {
                            const a = t.meta?.tweetId;
                            return a ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case N.SUCCESS: {
                            const a = t.meta?.tweetId;
                            return a ? { ...e, matchData: { canBeMediaNote: t.payload.tweet_result_by_rest_id.result.can_be_media_note, canBeUrlNote: t.payload.tweet_result_by_rest_id.result.can_be_url_note, mediaNoteCategory: t.payload.tweet_result_by_rest_id.result.media_note_category, noteMatchUrl: t.payload.tweet_result_by_rest_id.result.note_match_url, fetchStatus: c.ZP.LOADED } } : e;
                        }
                        case D.REQUEST: {
                            const a = t.meta?.note_id;
                            return a ? { ...e, notes: { ...e.notes, [a]: { ...e.notes[a], noteTranslation: { fetchStatus: c.ZP.LOADING } } } } : e;
                        }
                        case D.SUCCESS: {
                            const a = t.meta?.note_id;
                            if (a) {
                                const o = t.payload.birdwatch_note_by_rest_id.translated_summary;
                                return { ...e, notes: { ...e.notes, [a]: { ...e.notes[a], noteTranslation: { result: o && (0, d.Z)((0, s.$)(), o), fetchStatus: c.ZP.LOADED } } } };
                            }
                            return e;
                        }
                        case D.FAILURE: {
                            const a = t.meta?.noteId;
                            return a ? { ...e, notes: { ...e.notes, [a]: { ...e.notes[a], noteTranslation: { fetchStatus: c.ZP.FAILED } } } } : e;
                        }
                        case g.SUCCESS: {
                            const a = t.payload;
                            return { ...e, signupEligibility: a?.birdwatch_sign_up_eligibility?.eligible };
                        }
                        case A.REQUEST: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, noteRequests: { ...e.noteRequests, [a]: { fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case A.FAILURE: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, noteRequests: { ...e.noteRequests, [a]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case A.SUCCESS: {
                            const a = t.meta?.tweet_id,
                                o = t.payload?.birdwatch_bat_signal_by_rest_id.created_at;
                            return a ? { ...e, noteRequests: { ...e.noteRequests, [a]: { created_at: o, fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case T.SUCCESS: {
                            const a = t.meta?.tweet_id,
                                o = t.payload?.created_at;
                            return a && o ? { ...e, noteRequests: { ...e.noteRequests, [a]: { created_at: o } } } : e;
                        }
                        case h.SUCCESS: {
                            const a = t.meta?.note_id,
                                o = t.payload;
                            return a ? { ...e, notes: { ...e.notes, [a]: { ...e.notes[a], rating: o } } } : e;
                        }
                        case S.SUCCESS: {
                            const a = t.meta?.note_id;
                            if (a) {
                                const { rating: t, ...o } = e.notes[a];
                                return { ...e, notes: { ...e.notes, [a]: { ...o } } };
                            }
                            return e;
                        }
                        case y.REQUEST: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, tweetNotes: { ...e.tweetNotes, [a]: { ...(e.tweetNotes && e.tweetNotes[a]), fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case y.FAILURE: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, tweetNotes: { ...e.tweetNotes, [a]: { ...e.tweetNotes[a], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case y.SUCCESS: {
                            const a = t.payload?.result,
                                o = t.meta?.tweet_id;
                            if (a) {
                                const n = t.payload?.entities?.birdwatchNotes[a],
                                    r = n?.misleading_ids || [],
                                    d = r.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    s = r.map((e) => e.rest_id),
                                    i = n?.not_misleading_ids || [],
                                    l = i.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    u = { misleadingIds: s, notMisleadingIds: i.map((e) => e.rest_id), fetchStatus: c.ZP.LOADED };
                                return n?.ownNoteId && (u.ownNoteId = n?.ownNoteId), t.meta ? { ...e, notes: { ...e.notes, ...d, ...l }, tweetNotes: { ...e.tweetNotes, [o]: u } } : e;
                            }
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case F.REQUEST: {
                            const a = t.meta?.alias;
                            return a ? { ...e, contributor: { ...e.contributor, [a]: { ...e.contributor[a], fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case F.FAILURE: {
                            const a = t.meta?.alias;
                            return a ? { ...e, contributor: { ...e.contributor, [a]: { ...e.contributor[a], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case F.SUCCESS: {
                            const a = t.meta?.alias,
                                o = t.payload?.result;
                            if (o && t.meta) {
                                const a = t.payload?.entities?.birdwatchNotes[o],
                                    n = a?.notes || [],
                                    r = n.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    d = n.map((e) => e.rest_id),
                                    s = a?.ratings_count,
                                    i = a?.notes_count,
                                    l = a?.is_top_writer;
                                return { ...e, notes: { ...e.notes, ...r }, contributor: { ...e.contributor, [o]: { ratingsCount: s, notesCount: i, isTopWriter: l, deletedNotesCount: a?.deleted_notes_count, notes: d, fetchStatus: c.ZP.LOADED } } };
                            }
                            return a ? { ...e, contributor: { ...e.contributor, [a]: { ...e.contributor[a], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case O.SUCCESS: {
                            const a = t.payload;
                            return { ...e, contributor: { ...e.contributor, notificationSettings: a?.notification_settings?.needs_your_help_frequency, ownAlias: a?.alias, canWriteNotes: a?.can_write_notes, enrollmentStatus: a?.user_enrollment, isTopWriter: a?.is_top_writer, showMobileNavigationSettings: a?.user_settings?.show_in_app_navigation } };
                        }
                        case P.SUCCESS: {
                            const a = t.payload;
                            return { ...e, contributor: { ...e.contributor, showAliasSelfSelect: a?.can_select && !a?.has_selected } };
                        }
                        case L.SUCCESS: {
                            const a = t.payload;
                            return { ...e, contributor: { ...e.contributor, aliasSelfSelectOptions: a } };
                        }
                        case B.SUCCESS: {
                            const a = t.payload,
                                o = a?.result;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...a?.entities?.birdwatchNotes[o], fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case B.REQUEST: {
                            const a = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [a]: { ...(e.notes && e.notes[a]), fetchStatus: c.ZP.LOADING } } };
                        }
                        case B.FAILURE: {
                            const a = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [a]: { ...e.notes[a], fetchStatus: c.ZP.FAILED } } };
                        }
                        case I.SUCCESS: {
                            const a = t.payload;
                            return a ? { ...e, publicData: a } : e;
                        }
                        case p.SUCCESS: {
                            const a = t.meta?.alias;
                            return { ...e, contributor: { ...e.contributor, ownAlias: a } };
                        }
                        case v: {
                            const a = t.payload;
                            if ((0, n.Z)(a)) return e;
                            {
                                const t = a.updates,
                                    o = a.tweetId;
                                return { ...e, drafts: { ...e.drafts, [o]: t } };
                            }
                        }
                        case H: {
                            const a = t.payload;
                            if ((0, n.Z)(a)) return e;
                            {
                                const t = a.count,
                                    o = a.path;
                                return { ...e, paths: { ...e.paths, [t]: o } };
                            }
                        }
                        case Z.SUCCESS:
                            return { ...e, contributor: { ...e.contributor, enrollmentStatus: { ...e.contributor.enrollmentStatus, enrollment_state: "EarnedOutAcknowledged" } } };
                        case U.REQUEST: {
                            const a = t.meta?.tweetId;
                            return a ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case U.FAILURE: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, sourceLinks: { ...e.sourceLinks, [a]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case U.SUCCESS: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, sourceLinks: { ...e.sourceLinks, [a]: { source_preview_tweet_for_notes: t.payload.tweet_result_by_rest_id.result.source_preview_tweet_for_notes, source_tweet_count_for_notes: t.payload.tweet_result_by_rest_id.result.source_tweet_count_for_notes, has_note_request: t.payload.tweet_result_by_rest_id.result.has_note_request, fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        default:
                            return e;
                    }
                },
            });
            const G = [],
                x = (e, t) => e[E].notes[t],
                Q = (e, t) => e[E].noteRequests[t],
                W = (e) => e[E].paths,
                q = (e, t) => e[E].tweetNotes[t]?.misleadingIds,
                z = (e) => e[E].matchData,
                V = (e, t) => e[E].sourceLinks[t],
                j = (e, t) => {
                    if (!t) return null;
                    const a = ((e, t) => e[E].tweetNotes[t]?.ownNoteId)(e, t);
                    return a ? x(e, a) : null;
                },
                K = (e) => e[E].publicData,
                Y = (e, t) => {
                    const a = t ? q(e, t) : void 0;
                    if (a) {
                        return a.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                $ = (e, t) => {
                    const a = t ? ((e, t) => e[E].tweetNotes[t]?.notMisleadingIds)(e, t) : void 0;
                    if (a) {
                        return a.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                J = (e, t) => {
                    const a = e[E].contributor[t];
                    return a ? a.notes : void 0;
                },
                X = (e) => {
                    const t = e[E].contributor;
                    return t ? t.ownAlias : void 0;
                },
                ee = (e) => {
                    const t = e[E].contributor;
                    return t ? t.showAliasSelfSelect : void 0;
                },
                te = (e) => {
                    const t = e[E]?.contributor?.ownAlias;
                    if (!t) return !1;
                    const a = `birdwatchContributorNotesSlice-${t}`,
                        o = e.slices[a];
                    return o?.items?.length > 0 || !1;
                },
                ae = (e) => {
                    const t = e[E].contributor;
                    return t ? t.aliasSelfSelectOptions : void 0;
                },
                oe = (e) => {
                    const t = e[E].contributor;
                    return t ? t.enrollmentStatus : void 0;
                },
                ne = (e, t) => !!(e[E].contributor[t]?.isTopWriter || e[E].contributor?.isTopWriter),
                re = (e, t) => e[E].contributor[t]?.isTopWriter || !1,
                de = (e) => {
                    const t = e[E].contributor;
                    return t ? t.notificationSettings : void 0;
                },
                se = (e) => {
                    const t = e[E].contributor;
                    return t ? t.canWriteNotes : void 0;
                },
                ie = (e, t) => {
                    if (!t) return;
                    const a = e[E].contributor[t];
                    return a ? a.ratingsCount : void 0;
                },
                le = (e, t) => {
                    if (!t) return;
                    const a = e[E].contributor[t];
                    return a ? a.notesCount : void 0;
                },
                ce = (e, t) => {
                    const a = e[E].contributor[t];
                    return a ? a.deletedNotesCount : void 0;
                },
                ue = (e, t) => {
                    const a = e[E].tweetNotes[t];
                    return a ? a.fetchStatus : c.ZP.NONE;
                },
                Ee = (e, t) => {
                    const a = e[E].notes[t];
                    return a ? a.fetchStatus : c.ZP.NONE;
                },
                _e = (e, t) => {
                    if (!t) return;
                    const a = e[E].drafts;
                    return a ? a[t] : void 0;
                },
                be =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchBirdwatchBatSignal, params: e })({ actionTypes: A, context: "FETCH_BIRDWATCH_BAT_SIGNAL", meta: { tweet_id: e } }),
                he =
                    (e) =>
                    (t, a, { api: o }) => {
                        const n = !!q(a(), e),
                            d = ue(a(), e) === c.ZP.LOADING;
                        return n || d
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, a, { api: o }) =>
                                          (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchNotes, params: { tweet_id: e } })({ actionTypes: y, context: "FETCH_TWEET_NOTES", meta: { tweet_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, u.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
                    },
                Se =
                    (e) =>
                    (t, a, { api: o }) => {
                        const n = !!e && !!J(a(), e),
                            d =
                                ((e, t) => {
                                    const a = e[E].contributor[t];
                                    return a ? a.fetchStatus : c.ZP.NONE;
                                })(a(), e) === c.ZP.LOADING;
                        return n || d
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, a, { api: o }) =>
                                          e
                                              ? (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchBirdwatchProfile, params: { alias: e } })({ actionTypes: F, context: "FETCH_BIRDWATCH_PROFILE", meta: { alias: e } }, (e) => {
                                                    if (e) {
                                                        const { entities: t } = e;
                                                        return t && [(0, u.dP)(t)];
                                                    }
                                                })
                                              : Promise.resolve()
                                  )(e),
                              );
                    },
                pe =
                    () =>
                    (e, t, { api: a }) =>
                        !!oe(t()) ? Promise.resolve() : e(Ie()),
                me =
                    (e) =>
                    (t, a, { api: o }) => {
                        const n = !!x(a(), e),
                            d = Ee(a(), e) === c.ZP.LOADING;
                        return n || d
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, a, { api: o }) =>
                                          (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchOneNote, params: { note_id: e } })({ actionTypes: B, context: "FETCH_NOTE", meta: { note_id: e } })
                                  )(e),
                              );
                    },
                we =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchCanTweetBeMediaNote, params: e })({ actionTypes: N, context: "FETCH_CAN_BE_MEDIA_NOTE", meta: { tweetId: e } }),
                Te =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchNoteTranslation, params: e })({ actionTypes: D, context: "FETCH_NOTE_TRANSLATION", meta: { note_id: e } }),
                Ce =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchTweetSourceLink, params: e })({ actionTypes: U, context: "FETCH_SOURCE_LINK_TWEET", meta: { tweet_id: e } }),
                Ae =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).fetchSignUpEligiblity })({ actionTypes: g, context: "FETCH_SIGNUP_ELIGIBILITY" }),
                Ie =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).fetchAuthenticatedUserProfile, params: {} })({ actionTypes: O, context: "FETCH_AUTHENTICATED_USER_PROFILE" }),
                Ne =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).fetchAliasSelfSelectStatus, params: {} })({ actionTypes: P, context: "FETCH_SHOW_ALIAS_SELECT", meta: {} }),
                De =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).fetchAliasSelfSelectOptions, params: {} })({ actionTypes: L, context: "FETCH_ALIAS_SELECT_OPTIONS", meta: {} }),
                fe =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).selectAlias, params: { alias: e } })({ actionTypes: p, context: "SELECT_ALIAS", meta: { alias: e } }),
                Re =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).acknowledgeEarnOut, params: {} })({ actionTypes: Z, context: "PROFILE_ACKNOWLEDGE_EARN_OUT", meta: {} }),
                Oe = (e) => ({ meta: { note_id: e }, type: b.SUCCESS }),
                ge =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).deleteBirdwatchBatSignal, params: { tweet_id: e } })({ actionTypes: C, context: "DELETE_BIRDWATCH_BATSIGNAL", meta: { tweet_id: e } }),
                Ue =
                    (e, t, a, o) =>
                    (n, d, { api: s }) =>
                        (0, l._O)(n, { request: s.withEndpoint(r.Z).createNote, params: { tweet_id: e, is_media_note: a, is_helpful_for_all_posts: o, data: t } })({ actionTypes: M, context: "CREATE_NOTE" }),
                Le = (e) => (t) => {
                    t(((e) => ({ type: v, payload: e }))(e));
                },
                Me = (e) => (t) => {
                    t(((e) => ({ type: H, payload: e }))(e));
                },
                ye =
                    (e, t, a, o, n) =>
                    (d, s, { api: i }) =>
                        (0, l._O)(d, { request: i.withEndpoint(r.Z).createRating, params: { note_id: e, tweet_id: a, data: t, rating_source: o, source_platform: n } })({ actionTypes: h, context: "CREATE_RATING", meta: { note_id: e } }),
                Fe =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).deleteRating, params: { note_id: e } })({ actionTypes: S, context: "DELETE_RATING", meta: { note_id: e } }),
                Pe =
                    (e, t) =>
                    (a, o, { api: n }) =>
                        (0, l._O)(a, { request: n.withEndpoint(r.Z).admitUser, params: { admit_date: e, user_id: t } })({ actionTypes: f, context: "ADMIT_USER", meta: { admit_date: e, user_id: t } }),
                Be =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).removeUser, params: {} })({ actionTypes: R, context: "REMOVE_USER", meta: {} }),
                Ze =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).createAppeal, params: { note_id: e } })({ actionTypes: m, context: "CREATE_APPEAL", meta: { note_id: e } }),
                ve =
                    (e, t) =>
                    (a, o, { api: n }) =>
                        (0, l._O)(a, { request: n.withEndpoint(r.Z).createBirdwatchBatSignal, params: { tweet_id: e, source_link: t } })({ actionTypes: T, context: "CREATE_BAT_SIGNAL", meta: { tweet_id: e } }),
                He =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).editNotificationSettings, params: { settings: e } })({ actionTypes: w, context: "EDIT_NOTIFICATION_SETTINGS", meta: { settings: e } }),
                ke =
                    () =>
                    (e, t, { api: a }) =>
                        (0, l._O)(e, { request: a.withEndpoint(r.Z).fetchPublicData, params: {} })({ actionTypes: I, context: "FETCH_DATA", meta: {} });
        },
        302101: (e, t, a) => {
            a.d(t, { N: () => r });
            var o = a(106067),
                n = a(545521);
            const r = (e) => (0, n.Z)({ contextSuffix: "BIRDWATCH_NOTE_MATCHES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchAuthenticatedBirdwatchMatchSlice, getEndpointParams: (t) => ({ ...t, note_id: e }), sliceKey: `birdwatchNoteMatchesSlice-${e}` });
        },
        304373: (e, t, a) => {
            a.d(t, { d: () => r });
            var o = a(106067),
                n = a(545521);
            const r = (e) => (0, n.Z)({ contextSuffix: "BIRDWATCH_SOURCE_LINKS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchSourceLinkSlice, getEndpointParams: (t) => ({ ...t, tweet_id: e }), sliceKey: `birdwatchSourceLinkSlice-${e}` });
        },
        245422: (e, t, a) => {
            a.d(t, { K2: () => h, Sl: () => _, aC: () => b, oI: () => E });
            var o = a(717193),
                n = a(499627),
                r = a(917799),
                d = a(312771);
            const s = "communityBoost",
                i = Object.freeze({ REQUEST: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_REQUEST", SUCCESS: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_SUCCESS", FAILURE: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                u = { pivots: {} };
            n.Z.register({
                [s]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, pivots: { ...e.pivots, [a]: { fetchStatus: d.ZP.LOADING } } } : e;
                        }
                        case i.FAILURE: {
                            const a = t.meta?.tweet_id;
                            return a ? { ...e, pivots: { ...e.pivots, [a]: { fetchStatus: d.ZP.FAILED } } } : e;
                        }
                        case i.SUCCESS: {
                            const a = t.meta?.tweet_id,
                                o = t.payload?.community_boost_pivot_by_rest_id,
                                n = o?.like_tags,
                                r = o?.has_pivot,
                                s = o?.dislike_tags,
                                i = o?.boost_id,
                                l = o?.rating;
                            return a ? { ...e, pivots: { ...e.pivots, [a]: { like_tags: n, dislike_tags: s, has_pivot: r, boost_id: i, rating: l, fetchStatus: d.ZP.LOADED } } } : e;
                        }
                        case l.SUCCESS: {
                            const a = t.meta?.post_id,
                                o = t.payload;
                            return a ? { ...e, pivots: { ...e.pivots, [a]: { ...e.pivots[a], rating: o } } } : e;
                        }
                        case c.SUCCESS: {
                            const a = t.meta?.post_id;
                            return a ? { ...e, pivots: { ...e.pivots, [a]: { ...e.pivots[a], rating: void 0 } } } : e;
                        }
                        default:
                            return e;
                    }
                },
            });
            const E =
                    (e, t, a) =>
                    (n, d, { api: s }) =>
                        (0, r._O)(n, { request: s.withEndpoint(o.Z).createBoostRating, params: { postId: e, boostId: t, data: a } })({ actionTypes: l, context: "CREATE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                _ =
                    (e, t) =>
                    (a, n, { api: d }) =>
                        (0, r._O)(a, { request: d.withEndpoint(o.Z).deleteBoostRating, params: { boost_id: t } })({ actionTypes: c, context: "DELETE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                b =
                    (e) =>
                    (t, a, { api: n }) =>
                        (0, r._O)(t, { request: n.withEndpoint(o.Z).fetchCommunityBoostPivot, params: e })({ actionTypes: i, context: "FETCH_COMMUNITYBOOST_PIVOT", meta: { tweet_id: e } }),
                h = (e, t) => e[s].pivots[t];
        },
        371184: (e, t, a) => {
            a.d(t, { Z: () => d });
            var o = a(106067),
                n = a(740527),
                r = a(218951);
            const d = (e) => (0, r.Z)({ timelineId: "birdwatch-global-timeline", network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGlobalTimeline, getEndpointParams: () => ({ tabId: e }) }, context: "FETCH_BIRDWATCH_GLOBAL_TIMELINE", perfKey: "birdwatch-global-timeline", formatResponse: n.Z });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-e019dbda.aaa7ca6a.js.map
