"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-e019dbda"],
    {
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                a = o(500002),
                r = o(668214),
                s = o(997174),
                d = o(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const l = a || d;
                    ((l && a !== d) || (!l && o !== r) || n !== s || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, a.ZP)(i(l));
        },
        337523: (e, t, o) => {
            o.d(t, { Z: () => Te });
            var n = o(202784),
                a = o(457311),
                r = o(708852),
                s = o(108362),
                d = o(111677),
                i = o.n(d),
                l = o(769471),
                c = o(718e3),
                u = o(33104),
                E = o(789831),
                b = o(252021),
                _ = o(293115),
                h = o(87063),
                p = o(652904),
                S = o(507651),
                m = o(3138),
                w = o(655352),
                T = o(503229),
                C = o(71620),
                I = o(668214);
            const A = (e, t) => t.module.selectInitialFetchStatus(e),
                N = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                D = (e, t) => {
                    const o = t.selectedTabId,
                        n = N(e, t);
                    return n && n.tabs && n.tabs.tabs.find((e) => e.id === o);
                },
                f = (0, I.Z)()
                    .propsFromState(() => ({ initialFetchStatus: A, pageConfiguration: N, selectedTab: D }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class R extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: o, pageConfiguration: n } = this.props,
                                a = n ? n.scribeConfig : void 0;
                            return o().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(a), action: "get_initial" });
                            }, t(m.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: o, selectedTab: a } = this.props,
                                r = o?.tabs;
                            if (r && r.tabs) {
                                const s = (a && a.id) || r.initialTabId,
                                    d = o ? o.scribeConfig : void 0;
                                let i;
                                const l = r.tabs.map((o, n) => {
                                    const a = o.id === s;
                                    return (
                                        a && (i = n),
                                        {
                                            isActive: () => a,
                                            key: o.labelText,
                                            label: o.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(d), this._getScribeNamespace(o.scribeConfig)));
                                            },
                                            to: t(o.id),
                                            token: o.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return n.createElement(n.Fragment, null, n.createElement(S.Z, { alignFirstItem: (0, w.ZP)(), links: l, visibleItemIndex: i }));
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
                    let o;
                    return e && (o = e), t && (o = { ...o, ...t }), { ...o, element: "tab", action: "navigate" };
                }
                _getScribeNamespace(e) {
                    if (e) {
                        const { entityToken: t, ...o } = e;
                        return o;
                    }
                }
            }
            const g = f((0, T.Z)(R));
            var O = o(912021),
                U = o(383675),
                L = o(611423),
                M = o(443781);
            const y = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.8"),
                        o.e("icons.15"),
                        o.e("icons.7"),
                        o.e("icons.3"),
                        o.e("icons.24"),
                        o.e("icons.12"),
                        o.e("icons.22"),
                        o.e("icons.2"),
                        o.e("icons.18"),
                        o.e("icons.9"),
                        o.e("icons.1"),
                        o.e("icons.6"),
                        o.e("icons.14"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.5"),
                        o.e("modules.audio-6107ac1a"),
                        o.e("modules.audio-b953418a"),
                        o.e("modules.audio-7c51e6a7"),
                        o.e("modules.audio-04db59e9"),
                        o.e("modules.audio-76583d6c"),
                        o.e("modules.audio-b7a8a5fb"),
                        o.e("modules.audio-51f6e793"),
                        o.e("modules.audio-e019dbda"),
                        o.e("modules.audio-262c94d4"),
                        o.e("modules.audio-c6fe4ea4"),
                        o.e("icons.21"),
                        o.e("icons.16"),
                        o.e("icons.28"),
                        o.e("icons.17"),
                        o.e("icons.27"),
                        o.e("icons.19"),
                        o.e("icons.0"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        o.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-3ba4c741"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        o.e("shared~bundle.News~ondemand.News~loader.ExploreNews"),
                        o.e("loader.ExploreNews"),
                    ]).then(o.bind(o, 568527)),
            });
            var F = o(810641);
            const B = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                P = (e, t) => {
                    const o = t.selectedTabId,
                        n = B(e, t);
                    return n && n.tabs && n.tabs.tabs.find((e) => e.id === o);
                },
                Z = (0, I.Z)()
                    .propsFromState(() => ({ pageConfiguration: B, selectedTab: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: t, selectedTab: o } = this.props,
                                n = o?.scribeConfig || t?.scribeConfig;
                            if (n) {
                                const { entityToken: e, ...t } = n;
                                return t;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, O.Z)((e, t, o, n) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, L.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: n });
                                if (e?.graphQLTimelineId) return (0, U.R)(e.graphQLTimelineId);
                            }
                            return o;
                        })),
                        (this._getRefreshIntervalSecForCurrentTab = () => {
                            const { pageConfiguration: e, selectedTab: t } = this.props,
                                o = e?.tabs?.initialTabId;
                            if (t) return t.refreshIntervalSec;
                            if (o) {
                                const t = e?.tabs?.tabs.find((e) => o === e.id);
                                return t?.refreshIntervalSec;
                            }
                        });
                }
                render() {
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: o, prerollDisplayLocation: a, refreshControl: r, renderEmptyState: s, renderUnavailable: d, selectedTab: i, timelinePrefix: l, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return n.createElement(y, null);
                    const E = this._getModule(i, o?.tabs?.initialTabId, t, l),
                        b = this._getRefreshIntervalSecForCurrentTab(),
                        h = b ? 1e3 * b : void 0;
                    return n.createElement(_.nO, { namespace: this._getTimelineNamespace() }, n.createElement(F.Z, { entryConfiguration: e, module: E, pollingIntervalMsOverride: h, prerollDisplayLocation: a, refreshControl: r, renderEmptyState: s, renderUnavailable: d, title: c, withoutHeadroom: u }));
                }
            }
            v.contextType = M.rC;
            const k = Z(v);
            var H = o(929482),
                G = o(335632),
                x = o(325686),
                Q = o(392237),
                W = o(950708),
                q = o(187669),
                z = o(725516),
                V = o(942893);
            const j = (e, t) => {
                const o = (0, z.z)(),
                    { component: a, element: r } = t || {},
                    s = n.useMemo(() => ({ items: [V.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, q.q)(() => {
                        o.scribe({ component: a, element: r, action: "impression", data: s });
                    }),
                    { namespace: { component: a, element: r }, data: s }
                );
            };
            function K(e) {
                const {
                        header: { clientEventInfo: t, displayType: o, facepile: a, landingContext: r, topicId: s },
                        onHeaderVisible: d,
                    } = e,
                    { data: i, namespace: l } = j(s, t);
                return n.createElement(x.Z, { style: Y.root }, n.createElement(_.nO, { data: i, namespace: l }, n.createElement(W.Z, { displayType: o, facepile: a, onFollowHeaderOffscreen: ({ isOffscreen: e }) => d(!e), topicId: s, topicLandingContext: r, withDivider: !0 })));
            }
            const Y = Q.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var $ = o(24949);
            const J = (e, t) => t.module.selectPageConfiguration(e),
                X = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, $.P1)(J, X, (e, t) => t !== h.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, I.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var oe = o(688715),
                ne = o(815858),
                ae = o(651930),
                re = o(572067),
                se = o(265196),
                de = o(421575),
                ie = o(907552),
                le = o(466380);
            const ce = (e, t) => {
                    const o = t.navBar.topicId ? t.navBar.topicId : "";
                    return le.Z.select(e, o);
                },
                ue = (0, I.Z)().propsFromState(() => ({ topic: ce })),
                Ee = (e) => (0, oe.ju)(`https://x.com/i/topics/${e}`),
                be = (e) => `twitter://topics_timeline?id=${e}`,
                _e = i().ed88e742;
            const he = Q.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                pe = ue(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: o,
                            navBar: { clientEventInfo: a },
                            pageNamespace: r,
                            topic: s,
                            withAppLinks: d,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = n.useContext(M.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: E, namespace: b } = j(t, a),
                        h = (0, l.Z)({}, r, b);
                    return s ? n.createElement(_.nO, { data: E, namespace: h }, n.createElement(n.Fragment, null, i ? n.createElement(re.Z, { canonical: Ee(t), description: s.description, title: s.name, type: "article" }) : null, d ? n.createElement(ae.Z, { deepLink: be(t) }) : null, n.createElement(x.Z, { style: he.rightControl }, n.createElement(x.Z, { style: he.followButtonContainer }, n.createElement(ne.Z, { animateMount: !0, show: o, type: "fade" }, n.createElement(se.ZP, { size: "medium", textMode: de.q.FollowTopic, topic: s }))), u ? n.createElement(ie.ZP, { copyLinkShareLabel: _e, scribeNamespace: h, url: Ee(t) }) : null))) : null;
                }),
                Se = i().e9f1fbcc,
                me = n.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: t, backLocation: o, documentTitle: a, entryConfiguration: d, fab: i, getTabLink: c, hasTabNavigation: S, history: m, initialFetchStatus: w, initialPageNamespace: T, logoButton: C, module: I, onBackClick: A, pageConfiguration: N, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, rightControl: O, selectedTabId: U, sidebarContent: L, timelinePrefix: M, title: y, withAppLinks: F, withBottomLoginSignupBar: B, withDeferredView: P, withOpenGraphMeta: Z, withSearchBox: v, withTweetButton: G } = e,
                        x = (0, r.tj)(),
                        Q = n.useMemo(() => ({ ...d, ...(0, H.Z)({ isLegacy: !0, isWide: x }) }), [d, x]),
                        [W, q] = n.useState(!0),
                        { header: z, navBar: V, subtitle: j, title: Y } = N || {},
                        $ = w === h.Z.LOADED ? Y || y : "",
                        J = ((e, t, o) => {
                            const n = t?.scribeConfig,
                                { entityToken: a, ...r } = n || {},
                                s = t?.tabs,
                                d = e || s?.initialTabId,
                                i = s?.tabs.find((e) => e.id === d),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, l.Z)({}, o, r, u);
                        })(U, N, T),
                        X = z ? n.createElement(K, { header: z, onHeaderVisible: q }) : null,
                        ee = V ? n.createElement(pe, { isHeaderOffscreen: !W, navBar: V, pageNamespace: J, withAppLinks: F, withOpenGraphMeta: Z }) : null,
                        te = P ? u.Z : n.Fragment,
                        oe = n.createElement(n.Fragment, null, X, n.createElement(te, null, n.createElement(k, { entryConfiguration: Q, initialModule: I, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, selectedTabId: U, timelinePrefix: M, title: y, withoutHeadroom: !0 }))),
                        ne = i ? n.createElement(E.Z, { component: s.Z, fab: i }, oe) : oe,
                        ae = c && S ? n.createElement(g, { getTabLink: c, module: I, selectedTabId: U }) : void 0;
                    return n.createElement(_.nO, { namespace: J }, n.createElement(p.Z, null, n.createElement(b.Z, { TabBar: t, backLocation: o, documentTitle: a, history: m, logoButton: C, onBackClick: A, primaryContent: ne, rightControl: ee || O, secondaryBar: ae, sidebarContent: L, subtitle: j, title: X && W ? y : $, withBottomLoginSignupBar: B, withSearchBox: v, withTweetButton: G })));
                };
            we.defaultProps = { entryConfiguration: (0, G.G)({}), renderEmptyState: () => n.createElement(a.Z, { header: Se }), sidebarContent: me, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const Te = te(we);
        },
        709070: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(351322);
            const a = { loader: () => o.e("loader.PivotLabelHandler").then(o.bind(o, 901547)), loaderKey: "pivotLabelLoader", strategy: o(509738).Z.OnDemand },
                r = n.OZ(a);
        },
        26232: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                a = o(555874),
                r = o(111677),
                s = o.n(r),
                d = o(290402),
                i = o(965245),
                l = o(71620),
                c = o(668214);
            const u = (e, t) => t.module.selectFetchStatus(e),
                E = (e, t) => t.module.selectItems(e),
                b = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: E }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, l.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                _ = s().i9028824,
                h = (e) => e,
                p = (e) => (t) => e(t.item);
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: o, numColumns: r, onScrollEnd: s, renderer: d, withoutHeadroom: l } = this.props;
                            return !t || r < 1 ? null : 1 === r ? n.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: h, items: t, noItemsRenderer: o, onNearEnd: this._handleNearEnd, onScrollEnd: s, renderer: d, withoutHeadroom: l }) : n.createElement(a.Z, { ListEmptyComponent: o, data: t, keyExtractor: h, numColumns: r, renderItem: p(d) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: o, fetchIfNeeded: n } = this.props;
                            (e ? o : n)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: o } = this.props;
                    return t ? n.createElement(d.Z, { "aria-label": _, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: o, retryable: !0 }) : null;
                }
            }
            S.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const m = b(S);
        },
        890655: (e, t, o) => {
            o.d(t, { Q: () => n });
            const n = (e, t = !1) =>
                e
                    .split("-")
                    .map((e) => (t ? e[0].toUpperCase() + e.substring(1) : e))
                    .join(" ");
        },
        337455: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                a = o(411916),
                r = o.n(a),
                s = o(373463),
                d = o.n(s);
            function i(e) {
                class t extends n.Component {
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
                        return this.state.shouldRender ? n.createElement(e, this.props) : null;
                    }
                }
                return d()(t, e);
            }
        },
        553093: (e, t, o) => {
            o.d(t, { Sz: () => n });
            const n = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const o = t.join("");
                    return a(o, 0).toString();
                },
                a = (e, t) => {
                    const o = "string" == typeof e ? e : String(e);
                    let n = t;
                    for (let e = 0; e < o.length; e++) {
                        (n = (n << 5) - n + o.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        68738: (e, t, o) => {
            o.d(t, { E: () => r });
            var n = o(106067),
                a = o(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_DELETED_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchBirdwatchContributorDeletedNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorDeletedNotesSlice-${e}` });
        },
        44836: (e, t, o) => {
            o.d(t, { Z: () => c, f: () => l });
            var n = o(979090),
                a = o(106067),
                r = o(917799),
                s = o(502909),
                d = o(600823);
            const i = (0, s.ZP)({ namespace: "birdwatchContributorNotes" }),
                l =
                    (e) =>
                    (t, o, { api: s }) =>
                        r._O(t, { request: s.withEndpoint(a.Z).deleteNote, params: { note_id: e } })({ actionTypes: i.actionTypes.OPTIMISTIC_UPDATE, context: "DELETE_NOTE" }, (t) => {
                            if (t) return [i.deleteOne(e), (0, n.f_)(e)];
                        }),
                c = d.Z.register(i);
        },
        78014: (e, t, o) => {
            o.d(t, { _: () => r });
            var n = o(106067),
                a = o(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchBirdwatchContributorNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorNotesSlice-${e}` });
        },
        979090: (e, t, o) => {
            o.d(t, { $e: () => Ie, BG: () => ee, Bb: () => Me, Bs: () => oe, EW: () => Te, HO: () => ce, JL: () => se, Jn: () => be, Kc: () => fe, Ld: () => Le, Lt: () => Y, OV: () => X, PL: () => ne, Pi: () => he, Qg: () => x, SZ: () => Be, V0: () => Oe, Wk: () => $, X3: () => Re, _T: () => ke, _b: () => Fe, aZ: () => Ne, ap: () => re, cS: () => te, dw: () => j, eD: () => ae, eY: () => Se, et: () => z, f3: () => ue, f_: () => ge, gH: () => le, gP: () => Ze, jm: () => W, kT: () => Ue, kX: () => Pe, lC: () => Ae, lW: () => de, lw: () => Ce, mZ: () => ve, mv: () => pe, oV: () => He, pN: () => we, qm: () => De, r9: () => Q, sz: () => K, tk: () => V, vF: () => _e, w6: () => ie, wK: () => ye, wd: () => Ee, ww: () => me });
            var n = o(744531),
                a = o(401388),
                r = o(106067),
                s = o(256563),
                d = o(497461),
                i = o(499627),
                l = o(917799),
                c = o(312771),
                u = o(56519);
            const E = "birdwatchNotes",
                b = `rweb/${E}`,
                _ = (0, l.dg)(b, "DELETE_NOTE"),
                h = (0, l.dg)(b, "CREATE_RATING"),
                p = (0, l.dg)(b, "DELETE_RATING"),
                S = (0, l.dg)(b, "SELECT_ALIAS"),
                m = (0, l.dg)(b, "CREATE_APPEAL"),
                w = (0, l.dg)(b, "EDIT_NOTIFICATION_SETTINGS"),
                T = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL", FAILURE: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL" }),
                I = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                A = (Object.freeze({ REQUEST: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_REQUEST", SUCCESS: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_SUCCESS", FAILURE: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_FAILURE" }), Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_DATA_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_DATA_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_DATA_FAILURE" })),
                N = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_FAILURE" }),
                D = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_FAILURE" }),
                f = Object.freeze({ REQUEST: "rweb/birdwatchNotes/ADMIT_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/ADMIT_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/ADMIT_USER_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/birdwatchNotes/REMOVE_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/REMOVE_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/REMOVE_USER_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_FAILURE" }),
                U = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_FAILURE" }),
                L = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE" }),
                M = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_NOTE_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE" }),
                F = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE" }),
                B = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE" }),
                P = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_FAILURE" }),
                Z = Object.freeze({ REQUEST: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_REQUEST", SUCCESS: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_SUCCESS", FAILURE: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_FAILURE" }),
                v = "rweb/birdwatchNotes/SAVE_FORM_DRAFT",
                k = "rweb/birdwatchNotes/SAVE_BIRDWATCH_PATH",
                H = { drafts: {}, notes: {}, noteRequests: {}, tweetNotes: {}, contributor: {}, publicData: {}, matchData: { fetchStatus: c.ZP.LOADING }, sourceLinks: {}, sources: {}, paths: {} };
            i.Z.register({
                [E]: function (e = H, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case M.SUCCESS: {
                            const o = t.payload?.result;
                            if (o) {
                                const n = t.payload?.entities?.birdwatchNotes[o],
                                    a = n.tweet.rest_id,
                                    r = "MisinformedOrPotentiallyMisleading" === n.data_v1?.classification;
                                return { ...e, notes: { ...e.notes, [o]: n }, tweetNotes: { ...e.tweetNotes, [a]: { ...(e.tweetNotes && e.tweetNotes[a]), misleadingIds: r ? [...e.tweetNotes[a].misleadingIds, o] : e.tweetNotes[a].misleadingIds, notMisleadingIds: r ? e.tweetNotes[a].notMisleadingIds : [...e.tweetNotes[a].notMisleadingIds, o], ownNoteId: o, fetchStatus: c.ZP.LOADED } } };
                            }
                            return e;
                        }
                        case C.SUCCESS: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: (0, n.Z)(e.noteRequests, o) } : e;
                        }
                        case _.SUCCESS: {
                            const o = t.meta?.note_id;
                            return o ? { ...e, notes: (0, n.Z)(e.notes, o) } : e;
                        }
                        case N.REQUEST: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case N.SUCCESS: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { canBeMediaNote: t.payload.tweet_result_by_rest_id.result.can_be_media_note, canBeUrlNote: t.payload.tweet_result_by_rest_id.result.can_be_url_note, mediaNoteCategory: t.payload.tweet_result_by_rest_id.result.media_note_category, noteMatchUrl: t.payload.tweet_result_by_rest_id.result.note_match_url, fetchStatus: c.ZP.LOADED } } : e;
                        }
                        case D.REQUEST: {
                            const o = t.meta?.note_id;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { fetchStatus: c.ZP.LOADING } } } } : e;
                        }
                        case D.SUCCESS: {
                            const o = t.meta?.note_id;
                            if (o) {
                                const n = t.payload.birdwatch_note_by_rest_id.translated_summary;
                                return { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { result: n && (0, s.Z)((0, d.$)(), n), fetchStatus: c.ZP.LOADED } } } };
                            }
                            return e;
                        }
                        case D.FAILURE: {
                            const o = t.meta?.noteId;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { fetchStatus: c.ZP.FAILED } } } } : e;
                        }
                        case O.SUCCESS: {
                            const o = t.payload;
                            return { ...e, signupEligibility: o?.birdwatch_sign_up_eligibility?.eligible };
                        }
                        case I.REQUEST: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case I.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case I.SUCCESS: {
                            const o = t.meta?.tweet_id,
                                n = t.payload?.birdwatch_bat_signal_by_rest_id.created_at;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { created_at: n, fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case T.SUCCESS: {
                            const o = t.meta?.tweet_id,
                                n = t.payload?.created_at;
                            return o && n ? { ...e, noteRequests: { ...e.noteRequests, [o]: { created_at: n } } } : e;
                        }
                        case h.SUCCESS: {
                            const o = t.meta?.note_id,
                                n = t.payload;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], rating: n } } } : e;
                        }
                        case p.SUCCESS: {
                            const o = t.meta?.note_id;
                            if (o) {
                                const { rating: t, ...n } = e.notes[o];
                                return { ...e, notes: { ...e.notes, [o]: { ...n } } };
                            }
                            return e;
                        }
                        case y.REQUEST: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { ...(e.tweetNotes && e.tweetNotes[o]), fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case y.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { ...e.tweetNotes[o], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case y.SUCCESS: {
                            const o = t.payload?.result,
                                n = t.meta?.tweet_id;
                            if (o) {
                                const a = t.payload?.entities?.birdwatchNotes[o],
                                    r = a?.misleading_ids || [],
                                    s = r.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    d = r.map((e) => e.rest_id),
                                    i = a?.not_misleading_ids || [],
                                    l = i.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    u = { misleadingIds: d, notMisleadingIds: i.map((e) => e.rest_id), fetchStatus: c.ZP.LOADED };
                                return a?.ownNoteId && (u.ownNoteId = a?.ownNoteId), t.meta ? { ...e, notes: { ...e.notes, ...s, ...l }, tweetNotes: { ...e.tweetNotes, [n]: u } } : e;
                            }
                            return n ? { ...e, tweetNotes: { ...e.tweetNotes, [n]: { fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case F.REQUEST: {
                            const o = t.meta?.alias;
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case F.FAILURE: {
                            const o = t.meta?.alias;
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case F.SUCCESS: {
                            const o = t.meta?.alias,
                                n = t.payload?.result;
                            if (n && t.meta) {
                                const o = t.payload?.entities?.birdwatchNotes[n],
                                    a = o?.notes || [],
                                    r = a.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    s = a.map((e) => e.rest_id),
                                    d = o?.ratings_count,
                                    i = o?.notes_count,
                                    l = o?.is_top_writer;
                                return { ...e, notes: { ...e.notes, ...r }, contributor: { ...e.contributor, [n]: { ratingsCount: d, notesCount: i, isTopWriter: l, deletedNotesCount: o?.deleted_notes_count, notes: s, fetchStatus: c.ZP.LOADED } } };
                            }
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case g.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, notificationSettings: o?.notification_settings?.needs_your_help_frequency, ownAlias: o?.alias, canWriteNotes: o?.can_write_notes, enrollmentStatus: o?.user_enrollment, isTopWriter: o?.is_top_writer, showMobileNavigationSettings: o?.user_settings?.show_in_app_navigation } };
                        }
                        case B.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, showAliasSelfSelect: o?.can_select && !o?.has_selected } };
                        }
                        case L.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, aliasSelfSelectOptions: o } };
                        }
                        case P.SUCCESS: {
                            const o = t.payload,
                                n = o?.result;
                            return n ? { ...e, notes: { ...e.notes, [n]: { ...o?.entities?.birdwatchNotes[n], fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case P.REQUEST: {
                            const o = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [o]: { ...(e.notes && e.notes[o]), fetchStatus: c.ZP.LOADING } } };
                        }
                        case P.FAILURE: {
                            const o = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], fetchStatus: c.ZP.FAILED } } };
                        }
                        case A.SUCCESS: {
                            const o = t.payload;
                            return o ? { ...e, publicData: o } : e;
                        }
                        case S.SUCCESS: {
                            const o = t.meta?.alias;
                            return { ...e, contributor: { ...e.contributor, ownAlias: o } };
                        }
                        case v: {
                            const o = t.payload;
                            if ((0, a.Z)(o)) return e;
                            {
                                const t = o.updates,
                                    n = o.tweetId;
                                return { ...e, drafts: { ...e.drafts, [n]: t } };
                            }
                        }
                        case k: {
                            const o = t.payload;
                            if ((0, a.Z)(o)) return e;
                            {
                                const t = o.count,
                                    n = o.path;
                                return { ...e, paths: { ...e.paths, [t]: n } };
                            }
                        }
                        case Z.SUCCESS:
                            return { ...e, contributor: { ...e.contributor, enrollmentStatus: { ...e.contributor.enrollmentStatus, enrollment_state: "EarnedOutAcknowledged" } } };
                        case U.REQUEST: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case U.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, sourceLinks: { ...e.sourceLinks, [o]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case U.SUCCESS: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, sourceLinks: { ...e.sourceLinks, [o]: { source_preview_tweet_for_notes: t.payload.tweet_result_by_rest_id.result.source_preview_tweet_for_notes, source_tweet_count_for_notes: t.payload.tweet_result_by_rest_id.result.source_tweet_count_for_notes, has_note_request: t.payload.tweet_result_by_rest_id.result.has_note_request, fetchStatus: c.ZP.LOADED } } } : e;
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
                    const o = ((e, t) => e[E].tweetNotes[t]?.ownNoteId)(e, t);
                    return o ? x(e, o) : null;
                },
                K = (e) => e[E].publicData,
                Y = (e, t) => {
                    const o = t ? q(e, t) : void 0;
                    if (o) {
                        return o.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                $ = (e, t) => {
                    const o = t ? ((e, t) => e[E].tweetNotes[t]?.notMisleadingIds)(e, t) : void 0;
                    if (o) {
                        return o.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                J = (e, t) => {
                    const o = e[E].contributor[t];
                    return o ? o.notes : void 0;
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
                    const o = `birdwatchContributorNotesSlice-${t}`,
                        n = e.slices[o];
                    return n?.items?.length > 0 || !1;
                },
                oe = (e) => {
                    const t = e[E].contributor;
                    return t ? t.aliasSelfSelectOptions : void 0;
                },
                ne = (e) => {
                    const t = e[E].contributor;
                    return t ? t.enrollmentStatus : void 0;
                },
                ae = (e, t) => !!(e[E].contributor[t]?.isTopWriter || e[E].contributor?.isTopWriter),
                re = (e, t) => e[E].contributor[t]?.isTopWriter || !1,
                se = (e) => {
                    const t = e[E].contributor;
                    return t ? t.notificationSettings : void 0;
                },
                de = (e) => {
                    const t = e[E].contributor;
                    return t ? t.canWriteNotes : void 0;
                },
                ie = (e, t) => {
                    if (!t) return;
                    const o = e[E].contributor[t];
                    return o ? o.ratingsCount : void 0;
                },
                le = (e, t) => {
                    if (!t) return;
                    const o = e[E].contributor[t];
                    return o ? o.notesCount : void 0;
                },
                ce = (e, t) => {
                    const o = e[E].contributor[t];
                    return o ? o.deletedNotesCount : void 0;
                },
                ue = (e, t) => {
                    const o = e[E].tweetNotes[t];
                    return o ? o.fetchStatus : c.ZP.NONE;
                },
                Ee = (e, t) => {
                    const o = e[E].notes[t];
                    return o ? o.fetchStatus : c.ZP.NONE;
                },
                be = (e, t) => {
                    if (!t) return;
                    const o = e[E].drafts;
                    return o ? o[t] : void 0;
                },
                _e =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchBirdwatchBatSignal, params: e })({ actionTypes: I, context: "FETCH_BIRDWATCH_BAT_SIGNAL", meta: { tweet_id: e } }),
                he =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!q(o(), e),
                            s = ue(o(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchNotes, params: { tweet_id: e } })({ actionTypes: y, context: "FETCH_TWEET_NOTES", meta: { tweet_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, u.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
                    },
                pe =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!e && !!J(o(), e),
                            s =
                                ((e, t) => {
                                    const o = e[E].contributor[t];
                                    return o ? o.fetchStatus : c.ZP.NONE;
                                })(o(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          e
                                              ? (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchBirdwatchProfile, params: { alias: e } })({ actionTypes: F, context: "FETCH_BIRDWATCH_PROFILE", meta: { alias: e } }, (e) => {
                                                    if (e) {
                                                        const { entities: t } = e;
                                                        return t && [(0, u.dP)(t)];
                                                    }
                                                })
                                              : Promise.resolve()
                                  )(e),
                              );
                    },
                Se =
                    () =>
                    (e, t, { api: o }) =>
                        !!ne(t()) ? Promise.resolve() : e(Ae()),
                me =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!x(o(), e),
                            s = Ee(o(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchOneNote, params: { note_id: e } })({ actionTypes: P, context: "FETCH_NOTE", meta: { note_id: e } })
                                  )(e),
                              );
                    },
                we =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchCanTweetBeMediaNote, params: e })({ actionTypes: N, context: "FETCH_CAN_BE_MEDIA_NOTE", meta: { tweetId: e } }),
                Te =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchNoteTranslation, params: e })({ actionTypes: D, context: "FETCH_NOTE_TRANSLATION", meta: { note_id: e } }),
                Ce =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).fetchTweetSourceLink, params: e })({ actionTypes: U, context: "FETCH_SOURCE_LINK_TWEET", meta: { tweet_id: e } }),
                Ie =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).fetchSignUpEligiblity })({ actionTypes: O, context: "FETCH_SIGNUP_ELIGIBILITY" }),
                Ae =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).fetchAuthenticatedUserProfile, params: {} })({ actionTypes: g, context: "FETCH_AUTHENTICATED_USER_PROFILE" }),
                Ne =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).fetchAliasSelfSelectStatus, params: {} })({ actionTypes: B, context: "FETCH_SHOW_ALIAS_SELECT", meta: {} }),
                De =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).fetchAliasSelfSelectOptions, params: {} })({ actionTypes: L, context: "FETCH_ALIAS_SELECT_OPTIONS", meta: {} }),
                fe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).selectAlias, params: { alias: e } })({ actionTypes: S, context: "SELECT_ALIAS", meta: { alias: e } }),
                Re =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).acknowledgeEarnOut, params: {} })({ actionTypes: Z, context: "PROFILE_ACKNOWLEDGE_EARN_OUT", meta: {} }),
                ge = (e) => ({ meta: { note_id: e }, type: _.SUCCESS }),
                Oe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).deleteBirdwatchBatSignal, params: { tweet_id: e } })({ actionTypes: C, context: "DELETE_BIRDWATCH_BATSIGNAL", meta: { tweet_id: e } }),
                Ue =
                    (e, t, o, n) =>
                    (a, s, { api: d }) =>
                        (0, l._O)(a, { request: d.withEndpoint(r.Z).createNote, params: { tweet_id: e, is_media_note: o, is_helpful_for_all_posts: n, data: t } })({ actionTypes: M, context: "CREATE_NOTE" }),
                Le = (e) => (t) => {
                    t(((e) => ({ type: v, payload: e }))(e));
                },
                Me = (e) => (t) => {
                    t(((e) => ({ type: k, payload: e }))(e));
                },
                ye =
                    (e, t, o, n, a) =>
                    (s, d, { api: i }) =>
                        (0, l._O)(s, { request: i.withEndpoint(r.Z).createRating, params: { note_id: e, tweet_id: o, data: t, rating_source: n, source_platform: a } })({ actionTypes: h, context: "CREATE_RATING", meta: { note_id: e } }),
                Fe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).deleteRating, params: { note_id: e } })({ actionTypes: p, context: "DELETE_RATING", meta: { note_id: e } }),
                Be =
                    (e, t) =>
                    (o, n, { api: a }) =>
                        (0, l._O)(o, { request: a.withEndpoint(r.Z).admitUser, params: { admit_date: e, user_id: t } })({ actionTypes: f, context: "ADMIT_USER", meta: { admit_date: e, user_id: t } }),
                Pe =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).removeUser, params: {} })({ actionTypes: R, context: "REMOVE_USER", meta: {} }),
                Ze =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).createAppeal, params: { note_id: e } })({ actionTypes: m, context: "CREATE_APPEAL", meta: { note_id: e } }),
                ve =
                    (e, t) =>
                    (o, n, { api: a }) =>
                        (0, l._O)(o, { request: a.withEndpoint(r.Z).createBirdwatchBatSignal, params: { tweet_id: e, source_link: t } })({ actionTypes: T, context: "CREATE_BAT_SIGNAL", meta: { tweet_id: e } }),
                ke =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { request: n.withEndpoint(r.Z).editNotificationSettings, params: { settings: e } })({ actionTypes: w, context: "EDIT_NOTIFICATION_SETTINGS", meta: { settings: e } }),
                He =
                    () =>
                    (e, t, { api: o }) =>
                        (0, l._O)(e, { request: o.withEndpoint(r.Z).fetchPublicData, params: {} })({ actionTypes: A, context: "FETCH_DATA", meta: {} });
        },
        302101: (e, t, o) => {
            o.d(t, { N: () => r });
            var n = o(106067),
                a = o(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_NOTE_MATCHES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchAuthenticatedBirdwatchMatchSlice, getEndpointParams: (t) => ({ ...t, note_id: e }), sliceKey: `birdwatchNoteMatchesSlice-${e}` });
        },
        304373: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(106067),
                a = o(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_SOURCE_LINKS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchBirdwatchSourceLinkSlice, getEndpointParams: (t) => ({ ...t, tweet_id: e }), sliceKey: `birdwatchSourceLinkSlice-${e}` });
        },
        245422: (e, t, o) => {
            o.d(t, { K2: () => h, Sl: () => b, aC: () => _, oI: () => E });
            var n = o(717193),
                a = o(499627),
                r = o(917799),
                s = o(312771);
            const d = "communityBoost",
                i = Object.freeze({ REQUEST: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_REQUEST", SUCCESS: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_SUCCESS", FAILURE: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                u = { pivots: {} };
            a.Z.register({
                [d]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, pivots: { ...e.pivots, [o]: { fetchStatus: s.ZP.LOADING } } } : e;
                        }
                        case i.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, pivots: { ...e.pivots, [o]: { fetchStatus: s.ZP.FAILED } } } : e;
                        }
                        case i.SUCCESS: {
                            const o = t.meta?.tweet_id,
                                n = t.payload?.community_boost_pivot_by_rest_id,
                                a = n?.like_tags,
                                r = n?.has_pivot,
                                d = n?.dislike_tags,
                                i = n?.boost_id,
                                l = n?.rating;
                            return o ? { ...e, pivots: { ...e.pivots, [o]: { like_tags: a, dislike_tags: d, has_pivot: r, boost_id: i, rating: l, fetchStatus: s.ZP.LOADED } } } : e;
                        }
                        case l.SUCCESS: {
                            const o = t.meta?.post_id,
                                n = t.payload;
                            return o ? { ...e, pivots: { ...e.pivots, [o]: { ...e.pivots[o], rating: n } } } : e;
                        }
                        case c.SUCCESS: {
                            const o = t.meta?.post_id;
                            return o ? { ...e, pivots: { ...e.pivots, [o]: { ...e.pivots[o], rating: void 0 } } } : e;
                        }
                        default:
                            return e;
                    }
                },
            });
            const E =
                    (e, t, o) =>
                    (a, s, { api: d }) =>
                        (0, r._O)(a, { request: d.withEndpoint(n.Z).createBoostRating, params: { postId: e, boostId: t, data: o } })({ actionTypes: l, context: "CREATE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                b =
                    (e, t) =>
                    (o, a, { api: s }) =>
                        (0, r._O)(o, { request: s.withEndpoint(n.Z).deleteBoostRating, params: { boost_id: t } })({ actionTypes: c, context: "DELETE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                _ =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, r._O)(t, { request: a.withEndpoint(n.Z).fetchCommunityBoostPivot, params: e })({ actionTypes: i, context: "FETCH_COMMUNITYBOOST_PIVOT", meta: { tweet_id: e } }),
                h = (e, t) => e[d].pivots[t];
        },
        371184: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(106067),
                a = o(740527),
                r = o(218951);
            const s = (e) => (0, r.Z)({ timelineId: "birdwatch-global-timeline", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchGlobalTimeline, getEndpointParams: () => ({ tabId: e }) }, context: "FETCH_BIRDWATCH_GLOBAL_TIMELINE", perfKey: "birdwatch-global-timeline", formatResponse: a.Z });
        },
        383675: (e, t, o) => {
            o.d(t, { R: () => i, Z: () => d });
            var n = o(503768),
                a = o(644829),
                r = o(750085),
                s = o(218951);
            const d = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: o, timelineId: n }) => (0, s.Z)({ timelineId: n, isUserRefreshable: o, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchGeneric, getEndpointParams: ({ count: o, cursor: n }) => ({ ...e, cursor: "string" == typeof n ? n : void 0, count: o, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: o }) => ({ cursor: "string" == typeof o ? o : void 0, count: t, timelineId: e }) }, formatResponse: r.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-e019dbda.fcb60c4a.js.map
