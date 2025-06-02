"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-e019dbda"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(500002),
                r = n(668214),
                s = n(997174),
                d = n(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const l = a || d;
                    ((l && a !== d) || (!l && n !== r) || o !== s || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, a.ZP)(i(l));
        },
        337523: (e, t, n) => {
            n.d(t, { Z: () => Te });
            var o = n(202784),
                a = n(457311),
                r = n(708852),
                s = n(108362),
                d = n(111677),
                i = n.n(d),
                l = n(769471),
                c = n(718e3),
                u = n(33104),
                E = n(789831),
                _ = n(252021),
                b = n(293115),
                h = n(87063),
                p = n(652904),
                S = n(507651),
                m = n(3138),
                w = n(655352),
                T = n(503229),
                C = n(71620),
                I = n(668214);
            const A = (e, t) => t.module.selectInitialFetchStatus(e),
                N = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                D = (e, t) => {
                    const n = t.selectedTabId,
                        o = N(e, t);
                    return o && o.tabs && o.tabs.tabs.find((e) => e.id === n);
                },
                f = (0, I.Z)()
                    .propsFromState(() => ({ initialFetchStatus: A, pageConfiguration: N, selectedTab: D }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class R extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: n, pageConfiguration: o } = this.props,
                                a = o ? o.scribeConfig : void 0;
                            return n().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(a), action: "get_initial" });
                            }, t(m.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: n, selectedTab: a } = this.props,
                                r = n?.tabs;
                            if (r && r.tabs) {
                                const s = (a && a.id) || r.initialTabId,
                                    d = n ? n.scribeConfig : void 0;
                                let i;
                                const l = r.tabs.map((n, o) => {
                                    const a = n.id === s;
                                    return (
                                        a && (i = o),
                                        {
                                            isActive: () => a,
                                            key: n.labelText,
                                            label: n.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(d), this._getScribeNamespace(n.scribeConfig)));
                                            },
                                            to: t(n.id),
                                            token: n.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return o.createElement(o.Fragment, null, o.createElement(S.Z, { alignFirstItem: (0, w.ZP)(), links: l, visibleItemIndex: i }));
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
                    let n;
                    return e && (n = e), t && (n = { ...n, ...t }), { ...n, element: "tab", action: "navigate" };
                }
                _getScribeNamespace(e) {
                    if (e) {
                        const { entityToken: t, ...n } = e;
                        return n;
                    }
                }
            }
            const g = f((0, T.Z)(R));
            var O = n(912021),
                U = n(383675),
                L = n(611423),
                M = n(443781);
            const y = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.10"),
                        n.e("icons.1"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.23"),
                        n.e("icons.8"),
                        n.e("icons.2"),
                        n.e("icons.3"),
                        n.e("icons.15"),
                        n.e("icons.4"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.9"),
                        n.e("icons.7"),
                        n.e("icons.28"),
                        n.e("icons.26"),
                        n.e("icons.24"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("icons.18"),
                        n.e("icons.13"),
                        n.e("icons.29"),
                        n.e("icons.25"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        n.e("shared~bundle.News~ondemand.News~loader.ExploreNews"),
                        n.e("loader.ExploreNews"),
                    ]).then(n.bind(n, 568527)),
            });
            var F = n(810641);
            const P = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                B = (e, t) => {
                    const n = t.selectedTabId,
                        o = P(e, t);
                    return o && o.tabs && o.tabs.tabs.find((e) => e.id === n);
                },
                Z = (0, I.Z)()
                    .propsFromState(() => ({ pageConfiguration: P, selectedTab: B }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class v extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: t, selectedTab: n } = this.props,
                                o = n?.scribeConfig || t?.scribeConfig;
                            if (o) {
                                const { entityToken: e, ...t } = o;
                                return t;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, O.Z)((e, t, n, o) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, L.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: o });
                                if (e?.graphQLTimelineId) return (0, U.R)(e.graphQLTimelineId);
                            }
                            return n;
                        })),
                        (this._getRefreshIntervalSecForCurrentTab = () => {
                            const { pageConfiguration: e, selectedTab: t } = this.props,
                                n = e?.tabs?.initialTabId;
                            if (t) return t.refreshIntervalSec;
                            if (n) {
                                const t = e?.tabs?.tabs.find((e) => n === e.id);
                                return t?.refreshIntervalSec;
                            }
                        });
                }
                render() {
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: n, prerollDisplayLocation: a, refreshControl: r, renderEmptyState: s, renderUnavailable: d, selectedTab: i, timelinePrefix: l, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return o.createElement(y, null);
                    const E = this._getModule(i, n?.tabs?.initialTabId, t, l),
                        _ = this._getRefreshIntervalSecForCurrentTab(),
                        h = _ ? 1e3 * _ : void 0;
                    return o.createElement(b.nO, { namespace: this._getTimelineNamespace() }, o.createElement(F.Z, { entryConfiguration: e, module: E, pollingIntervalMsOverride: h, prerollDisplayLocation: a, refreshControl: r, renderEmptyState: s, renderUnavailable: d, title: c, withoutHeadroom: u }));
                }
            }
            v.contextType = M.rC;
            const H = Z(v);
            var k = n(929482),
                G = n(335632),
                x = n(325686),
                Q = n(392237),
                W = n(950708),
                q = n(187669),
                z = n(725516),
                V = n(942893);
            const j = (e, t) => {
                const n = (0, z.z)(),
                    { component: a, element: r } = t || {},
                    s = o.useMemo(() => ({ items: [V.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, q.q)(() => {
                        n.scribe({ component: a, element: r, action: "impression", data: s });
                    }),
                    { namespace: { component: a, element: r }, data: s }
                );
            };
            function K(e) {
                const {
                        header: { clientEventInfo: t, displayType: n, facepile: a, landingContext: r, topicId: s },
                        onHeaderVisible: d,
                    } = e,
                    { data: i, namespace: l } = j(s, t);
                return o.createElement(x.Z, { style: Y.root }, o.createElement(b.nO, { data: i, namespace: l }, o.createElement(W.Z, { displayType: n, facepile: a, onFollowHeaderOffscreen: ({ isOffscreen: e }) => d(!e), topicId: s, topicLandingContext: r, withDivider: !0 })));
            }
            const Y = Q.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var $ = n(24949);
            const J = (e, t) => t.module.selectPageConfiguration(e),
                X = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, $.P1)(J, X, (e, t) => t !== h.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, I.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var ne = n(688715),
                oe = n(815858),
                ae = n(651930),
                re = n(572067),
                se = n(265196),
                de = n(421575),
                ie = n(907552),
                le = n(466380);
            const ce = (e, t) => {
                    const n = t.navBar.topicId ? t.navBar.topicId : "";
                    return le.Z.select(e, n);
                },
                ue = (0, I.Z)().propsFromState(() => ({ topic: ce })),
                Ee = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                _e = (e) => `twitter://topics_timeline?id=${e}`,
                be = i().ed88e742;
            const he = Q.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                pe = ue(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: a },
                            pageNamespace: r,
                            topic: s,
                            withAppLinks: d,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = o.useContext(M.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: E, namespace: _ } = j(t, a),
                        h = (0, l.Z)({}, r, _);
                    return s ? o.createElement(b.nO, { data: E, namespace: h }, o.createElement(o.Fragment, null, i ? o.createElement(re.Z, { canonical: Ee(t), description: s.description, title: s.name, type: "article" }) : null, d ? o.createElement(ae.Z, { deepLink: _e(t) }) : null, o.createElement(x.Z, { style: he.rightControl }, o.createElement(x.Z, { style: he.followButtonContainer }, o.createElement(oe.Z, { animateMount: !0, show: n, type: "fade" }, o.createElement(se.ZP, { size: "medium", textMode: de.q.FollowTopic, topic: s }))), u ? o.createElement(ie.ZP, { copyLinkShareLabel: be, scribeNamespace: h, url: Ee(t) }) : null))) : null;
                }),
                Se = i().e9f1fbcc,
                me = o.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: t, backLocation: n, documentTitle: a, entryConfiguration: d, fab: i, getTabLink: c, hasTabNavigation: S, history: m, initialFetchStatus: w, initialPageNamespace: T, logoButton: C, module: I, onBackClick: A, pageConfiguration: N, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, rightControl: O, selectedTabId: U, sidebarContent: L, timelinePrefix: M, title: y, withAppLinks: F, withBottomLoginSignupBar: P, withDeferredView: B, withOpenGraphMeta: Z, withSearchBox: v, withTweetButton: G } = e,
                        x = (0, r.tj)(),
                        Q = o.useMemo(() => ({ ...d, ...(0, k.Z)({ isLegacy: !0, isWide: x }) }), [d, x]),
                        [W, q] = o.useState(!0),
                        { header: z, navBar: V, subtitle: j, title: Y } = N || {},
                        $ = w === h.Z.LOADED ? Y || y : "",
                        J = ((e, t, n) => {
                            const o = t?.scribeConfig,
                                { entityToken: a, ...r } = o || {},
                                s = t?.tabs,
                                d = e || s?.initialTabId,
                                i = s?.tabs.find((e) => e.id === d),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, l.Z)({}, n, r, u);
                        })(U, N, T),
                        X = z ? o.createElement(K, { header: z, onHeaderVisible: q }) : null,
                        ee = V ? o.createElement(pe, { isHeaderOffscreen: !W, navBar: V, pageNamespace: J, withAppLinks: F, withOpenGraphMeta: Z }) : null,
                        te = B ? u.Z : o.Fragment,
                        ne = o.createElement(o.Fragment, null, X, o.createElement(te, null, o.createElement(H, { entryConfiguration: Q, initialModule: I, prerollDisplayLocation: D, renderEmptyState: f, renderUnavailable: R, selectedTabId: U, timelinePrefix: M, title: y, withoutHeadroom: !0 }))),
                        oe = i ? o.createElement(E.Z, { component: s.Z, fab: i }, ne) : ne,
                        ae = c && S ? o.createElement(g, { getTabLink: c, module: I, selectedTabId: U }) : void 0;
                    return o.createElement(b.nO, { namespace: J }, o.createElement(p.Z, null, o.createElement(_.Z, { TabBar: t, backLocation: n, documentTitle: a, history: m, logoButton: C, onBackClick: A, primaryContent: oe, rightControl: ee || O, secondaryBar: ae, sidebarContent: L, subtitle: j, title: X && W ? y : $, withBottomLoginSignupBar: P, withSearchBox: v, withTweetButton: G })));
                };
            we.defaultProps = { entryConfiguration: (0, G.G)({}), renderEmptyState: () => o.createElement(a.Z, { header: Se }), sidebarContent: me, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const Te = te(we);
        },
        709070: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(351322);
            const a = { loader: () => n.e("loader.PivotLabelHandler").then(n.bind(n, 901547)), loaderKey: "pivotLabelLoader", strategy: n(509738).Z.OnDemand },
                r = o.OZ(a);
        },
        26232: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(555874),
                r = n(111677),
                s = n.n(r),
                d = n(290402),
                i = n(965245),
                l = n(71620),
                c = n(668214);
            const u = (e, t) => t.module.selectFetchStatus(e),
                E = (e, t) => t.module.selectItems(e),
                _ = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: E }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, l.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                b = s().i9028824,
                h = (e) => e,
                p = (e) => (t) => e(t.item);
            class S extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: n, numColumns: r, onScrollEnd: s, renderer: d, withoutHeadroom: l } = this.props;
                            return !t || r < 1 ? null : 1 === r ? o.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: h, items: t, noItemsRenderer: n, onNearEnd: this._handleNearEnd, onScrollEnd: s, renderer: d, withoutHeadroom: l }) : o.createElement(a.Z, { ListEmptyComponent: n, data: t, keyExtractor: h, numColumns: r, renderItem: p(d) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: n, fetchIfNeeded: o } = this.props;
                            (e ? n : o)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: n } = this.props;
                    return t ? o.createElement(d.Z, { "aria-label": b, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: n, retryable: !0 }) : null;
                }
            }
            S.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const m = _(S);
        },
        890655: (e, t, n) => {
            n.d(t, { Q: () => o });
            const o = (e, t = !1) =>
                e
                    .split("-")
                    .map((e) => (t ? e[0].toUpperCase() + e.substring(1) : e))
                    .join(" ");
        },
        337455: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                a = n(411916),
                r = n.n(a),
                s = n(373463),
                d = n.n(s);
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
                return d()(t, e);
            }
        },
        553093: (e, t, n) => {
            n.d(t, { Sz: () => o });
            const o = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const n = t.join("");
                    return a(n, 0).toString();
                },
                a = (e, t) => {
                    const n = "string" == typeof e ? e : String(e);
                    let o = t;
                    for (let e = 0; e < n.length; e++) {
                        (o = (o << 5) - o + n.charCodeAt(e)), (o |= 0);
                    }
                    return o;
                };
        },
        68738: (e, t, n) => {
            n.d(t, { E: () => r });
            var o = n(106067),
                a = n(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_DELETED_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchContributorDeletedNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorDeletedNotesSlice-${e}` });
        },
        44836: (e, t, n) => {
            n.d(t, { Z: () => c, f: () => l });
            var o = n(979090),
                a = n(106067),
                r = n(917799),
                s = n(502909),
                d = n(600823);
            const i = (0, s.ZP)({ namespace: "birdwatchContributorNotes" }),
                l =
                    (e) =>
                    (t, n, { api: s }) =>
                        r._O(t, { request: s.withEndpoint(a.Z).deleteNote, params: { note_id: e } })({ actionTypes: i.actionTypes.OPTIMISTIC_UPDATE, context: "DELETE_NOTE" }, (t) => {
                            if (t) return [i.deleteOne(e), (0, o.f_)(e)];
                        }),
                c = d.Z.register(i);
        },
        78014: (e, t, n) => {
            n.d(t, { _: () => r });
            var o = n(106067),
                a = n(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_NOTES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchContributorNotesSlice, getEndpointParams: (t) => ({ ...t, alias: e }), sliceKey: `birdwatchContributorNotesSlice-${e}` });
        },
        979090: (e, t, n) => {
            n.d(t, { $e: () => Ie, BG: () => ee, Bb: () => Me, Bs: () => ne, EW: () => Te, HO: () => ce, JL: () => se, Jn: () => _e, Kc: () => fe, Ld: () => Le, Lt: () => Y, OV: () => X, PL: () => oe, Pi: () => he, Qg: () => x, SZ: () => Pe, V0: () => Oe, Wk: () => $, X3: () => Re, _T: () => He, _b: () => Fe, aZ: () => Ne, ap: () => re, cS: () => te, dw: () => j, eD: () => ae, eY: () => Se, et: () => z, f3: () => ue, f_: () => ge, gH: () => le, gP: () => Ze, jm: () => W, kT: () => Ue, kX: () => Be, lC: () => Ae, lW: () => de, lw: () => Ce, mZ: () => ve, mv: () => pe, oV: () => ke, pN: () => we, qm: () => De, r9: () => Q, sz: () => K, tk: () => V, vF: () => be, w6: () => ie, wK: () => ye, wd: () => Ee, ww: () => me });
            var o = n(744531),
                a = n(401388),
                r = n(106067),
                s = n(256563),
                d = n(497461),
                i = n(499627),
                l = n(917799),
                c = n(312771),
                u = n(56519);
            const E = "birdwatchNotes",
                _ = `rweb/${E}`,
                b = (0, l.dg)(_, "DELETE_NOTE"),
                h = (0, l.dg)(_, "CREATE_RATING"),
                p = (0, l.dg)(_, "DELETE_RATING"),
                S = (0, l.dg)(_, "SELECT_ALIAS"),
                m = (0, l.dg)(_, "CREATE_APPEAL"),
                w = (0, l.dg)(_, "EDIT_NOTIFICATION_SETTINGS"),
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
                            const n = t.payload?.result;
                            if (n) {
                                const o = t.payload?.entities?.birdwatchNotes[n],
                                    a = o.tweet.rest_id,
                                    r = "MisinformedOrPotentiallyMisleading" === o.data_v1?.classification;
                                return { ...e, notes: { ...e.notes, [n]: o }, tweetNotes: { ...e.tweetNotes, [a]: { ...(e.tweetNotes && e.tweetNotes[a]), misleadingIds: r ? [...e.tweetNotes[a].misleadingIds, n] : e.tweetNotes[a].misleadingIds, notMisleadingIds: r ? e.tweetNotes[a].notMisleadingIds : [...e.tweetNotes[a].notMisleadingIds, n], ownNoteId: n, fetchStatus: c.ZP.LOADED } } };
                            }
                            return e;
                        }
                        case C.SUCCESS: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, noteRequests: (0, o.Z)(e.noteRequests, n) } : e;
                        }
                        case b.SUCCESS: {
                            const n = t.meta?.note_id;
                            return n ? { ...e, notes: (0, o.Z)(e.notes, n) } : e;
                        }
                        case N.REQUEST: {
                            const n = t.meta?.tweetId;
                            return n ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case N.SUCCESS: {
                            const n = t.meta?.tweetId;
                            return n ? { ...e, matchData: { canBeMediaNote: t.payload.tweet_result_by_rest_id.result.can_be_media_note, canBeUrlNote: t.payload.tweet_result_by_rest_id.result.can_be_url_note, mediaNoteCategory: t.payload.tweet_result_by_rest_id.result.media_note_category, noteMatchUrl: t.payload.tweet_result_by_rest_id.result.note_match_url, fetchStatus: c.ZP.LOADED } } : e;
                        }
                        case D.REQUEST: {
                            const n = t.meta?.note_id;
                            return n ? { ...e, notes: { ...e.notes, [n]: { ...e.notes[n], noteTranslation: { fetchStatus: c.ZP.LOADING } } } } : e;
                        }
                        case D.SUCCESS: {
                            const n = t.meta?.note_id;
                            if (n) {
                                const o = t.payload.birdwatch_note_by_rest_id.translated_summary;
                                return { ...e, notes: { ...e.notes, [n]: { ...e.notes[n], noteTranslation: { result: o && (0, s.Z)((0, d.$)(), o), fetchStatus: c.ZP.LOADED } } } };
                            }
                            return e;
                        }
                        case D.FAILURE: {
                            const n = t.meta?.noteId;
                            return n ? { ...e, notes: { ...e.notes, [n]: { ...e.notes[n], noteTranslation: { fetchStatus: c.ZP.FAILED } } } } : e;
                        }
                        case O.SUCCESS: {
                            const n = t.payload;
                            return { ...e, signupEligibility: n?.birdwatch_sign_up_eligibility?.eligible };
                        }
                        case I.REQUEST: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, noteRequests: { ...e.noteRequests, [n]: { fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case I.FAILURE: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, noteRequests: { ...e.noteRequests, [n]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case I.SUCCESS: {
                            const n = t.meta?.tweet_id,
                                o = t.payload?.birdwatch_bat_signal_by_rest_id.created_at;
                            return n ? { ...e, noteRequests: { ...e.noteRequests, [n]: { created_at: o, fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case T.SUCCESS: {
                            const n = t.meta?.tweet_id,
                                o = t.payload?.created_at;
                            return n && o ? { ...e, noteRequests: { ...e.noteRequests, [n]: { created_at: o } } } : e;
                        }
                        case h.SUCCESS: {
                            const n = t.meta?.note_id,
                                o = t.payload;
                            return n ? { ...e, notes: { ...e.notes, [n]: { ...e.notes[n], rating: o } } } : e;
                        }
                        case p.SUCCESS: {
                            const n = t.meta?.note_id;
                            if (n) {
                                const { rating: t, ...o } = e.notes[n];
                                return { ...e, notes: { ...e.notes, [n]: { ...o } } };
                            }
                            return e;
                        }
                        case y.REQUEST: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, tweetNotes: { ...e.tweetNotes, [n]: { ...(e.tweetNotes && e.tweetNotes[n]), fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case y.FAILURE: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, tweetNotes: { ...e.tweetNotes, [n]: { ...e.tweetNotes[n], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case y.SUCCESS: {
                            const n = t.payload?.result,
                                o = t.meta?.tweet_id;
                            if (n) {
                                const a = t.payload?.entities?.birdwatchNotes[n],
                                    r = a?.misleading_ids || [],
                                    s = r.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    d = r.map((e) => e.rest_id),
                                    i = a?.not_misleading_ids || [],
                                    l = i.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    u = { misleadingIds: d, notMisleadingIds: i.map((e) => e.rest_id), fetchStatus: c.ZP.LOADED };
                                return a?.ownNoteId && (u.ownNoteId = a?.ownNoteId), t.meta ? { ...e, notes: { ...e.notes, ...s, ...l }, tweetNotes: { ...e.tweetNotes, [o]: u } } : e;
                            }
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case F.REQUEST: {
                            const n = t.meta?.alias;
                            return n ? { ...e, contributor: { ...e.contributor, [n]: { ...e.contributor[n], fetchStatus: c.ZP.LOADING } } } : e;
                        }
                        case F.FAILURE: {
                            const n = t.meta?.alias;
                            return n ? { ...e, contributor: { ...e.contributor, [n]: { ...e.contributor[n], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case F.SUCCESS: {
                            const n = t.meta?.alias,
                                o = t.payload?.result;
                            if (o && t.meta) {
                                const n = t.payload?.entities?.birdwatchNotes[o],
                                    a = n?.notes || [],
                                    r = a.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    s = a.map((e) => e.rest_id),
                                    d = n?.ratings_count,
                                    i = n?.notes_count,
                                    l = n?.is_top_writer;
                                return { ...e, notes: { ...e.notes, ...r }, contributor: { ...e.contributor, [o]: { ratingsCount: d, notesCount: i, isTopWriter: l, deletedNotesCount: n?.deleted_notes_count, notes: s, fetchStatus: c.ZP.LOADED } } };
                            }
                            return n ? { ...e, contributor: { ...e.contributor, [n]: { ...e.contributor[n], fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case g.SUCCESS: {
                            const n = t.payload;
                            return { ...e, contributor: { ...e.contributor, notificationSettings: n?.notification_settings?.needs_your_help_frequency, ownAlias: n?.alias, canWriteNotes: n?.can_write_notes, enrollmentStatus: n?.user_enrollment, isTopWriter: n?.is_top_writer, showMobileNavigationSettings: n?.user_settings?.show_in_app_navigation } };
                        }
                        case P.SUCCESS: {
                            const n = t.payload;
                            return { ...e, contributor: { ...e.contributor, showAliasSelfSelect: n?.can_select && !n?.has_selected } };
                        }
                        case L.SUCCESS: {
                            const n = t.payload;
                            return { ...e, contributor: { ...e.contributor, aliasSelfSelectOptions: n } };
                        }
                        case B.SUCCESS: {
                            const n = t.payload,
                                o = n?.result;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...n?.entities?.birdwatchNotes[o], fetchStatus: c.ZP.LOADED } } } : e;
                        }
                        case B.REQUEST: {
                            const n = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [n]: { ...(e.notes && e.notes[n]), fetchStatus: c.ZP.LOADING } } };
                        }
                        case B.FAILURE: {
                            const n = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [n]: { ...e.notes[n], fetchStatus: c.ZP.FAILED } } };
                        }
                        case A.SUCCESS: {
                            const n = t.payload;
                            return n ? { ...e, publicData: n } : e;
                        }
                        case S.SUCCESS: {
                            const n = t.meta?.alias;
                            return { ...e, contributor: { ...e.contributor, ownAlias: n } };
                        }
                        case v: {
                            const n = t.payload;
                            if ((0, a.Z)(n)) return e;
                            {
                                const t = n.updates,
                                    o = n.tweetId;
                                return { ...e, drafts: { ...e.drafts, [o]: t } };
                            }
                        }
                        case H: {
                            const n = t.payload;
                            if ((0, a.Z)(n)) return e;
                            {
                                const t = n.count,
                                    o = n.path;
                                return { ...e, paths: { ...e.paths, [t]: o } };
                            }
                        }
                        case Z.SUCCESS:
                            return { ...e, contributor: { ...e.contributor, enrollmentStatus: { ...e.contributor.enrollmentStatus, enrollment_state: "EarnedOutAcknowledged" } } };
                        case U.REQUEST: {
                            const n = t.meta?.tweetId;
                            return n ? { ...e, matchData: { fetchStatus: c.ZP.LOADING } } : e;
                        }
                        case U.FAILURE: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, sourceLinks: { ...e.sourceLinks, [n]: { fetchStatus: c.ZP.FAILED } } } : e;
                        }
                        case U.SUCCESS: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, sourceLinks: { ...e.sourceLinks, [n]: { source_preview_tweet_for_notes: t.payload.tweet_result_by_rest_id.result.source_preview_tweet_for_notes, source_tweet_count_for_notes: t.payload.tweet_result_by_rest_id.result.source_tweet_count_for_notes, has_note_request: t.payload.tweet_result_by_rest_id.result.has_note_request, fetchStatus: c.ZP.LOADED } } } : e;
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
                    const n = ((e, t) => e[E].tweetNotes[t]?.ownNoteId)(e, t);
                    return n ? x(e, n) : null;
                },
                K = (e) => e[E].publicData,
                Y = (e, t) => {
                    const n = t ? q(e, t) : void 0;
                    if (n) {
                        return n.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                $ = (e, t) => {
                    const n = t ? ((e, t) => e[E].tweetNotes[t]?.notMisleadingIds)(e, t) : void 0;
                    if (n) {
                        return n.map((t) => x(e, t)).filter(Boolean);
                    }
                    return G;
                },
                J = (e, t) => {
                    const n = e[E].contributor[t];
                    return n ? n.notes : void 0;
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
                    const n = `birdwatchContributorNotesSlice-${t}`,
                        o = e.slices[n];
                    return o?.items?.length > 0 || !1;
                },
                ne = (e) => {
                    const t = e[E].contributor;
                    return t ? t.aliasSelfSelectOptions : void 0;
                },
                oe = (e) => {
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
                    const n = e[E].contributor[t];
                    return n ? n.ratingsCount : void 0;
                },
                le = (e, t) => {
                    if (!t) return;
                    const n = e[E].contributor[t];
                    return n ? n.notesCount : void 0;
                },
                ce = (e, t) => {
                    const n = e[E].contributor[t];
                    return n ? n.deletedNotesCount : void 0;
                },
                ue = (e, t) => {
                    const n = e[E].tweetNotes[t];
                    return n ? n.fetchStatus : c.ZP.NONE;
                },
                Ee = (e, t) => {
                    const n = e[E].notes[t];
                    return n ? n.fetchStatus : c.ZP.NONE;
                },
                _e = (e, t) => {
                    if (!t) return;
                    const n = e[E].drafts;
                    return n ? n[t] : void 0;
                },
                be =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchBirdwatchBatSignal, params: e })({ actionTypes: I, context: "FETCH_BIRDWATCH_BAT_SIGNAL", meta: { tweet_id: e } }),
                he =
                    (e) =>
                    (t, n, { api: o }) => {
                        const a = !!q(n(), e),
                            s = ue(n(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
                                          (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchNotes, params: { tweet_id: e } })({ actionTypes: y, context: "FETCH_TWEET_NOTES", meta: { tweet_id: e } }, (e) => {
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
                    (t, n, { api: o }) => {
                        const a = !!e && !!J(n(), e),
                            s =
                                ((e, t) => {
                                    const n = e[E].contributor[t];
                                    return n ? n.fetchStatus : c.ZP.NONE;
                                })(n(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
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
                Se =
                    () =>
                    (e, t, { api: n }) =>
                        !!oe(t()) ? Promise.resolve() : e(Ae()),
                me =
                    (e) =>
                    (t, n, { api: o }) => {
                        const a = !!x(n(), e),
                            s = Ee(n(), e) === c.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
                                          (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchOneNote, params: { note_id: e } })({ actionTypes: B, context: "FETCH_NOTE", meta: { note_id: e } })
                                  )(e),
                              );
                    },
                we =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchCanTweetBeMediaNote, params: e })({ actionTypes: N, context: "FETCH_CAN_BE_MEDIA_NOTE", meta: { tweetId: e } }),
                Te =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchNoteTranslation, params: e })({ actionTypes: D, context: "FETCH_NOTE_TRANSLATION", meta: { note_id: e } }),
                Ce =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).fetchTweetSourceLink, params: e })({ actionTypes: U, context: "FETCH_SOURCE_LINK_TWEET", meta: { tweet_id: e } }),
                Ie =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).fetchSignUpEligiblity })({ actionTypes: O, context: "FETCH_SIGNUP_ELIGIBILITY" }),
                Ae =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).fetchAuthenticatedUserProfile, params: {} })({ actionTypes: g, context: "FETCH_AUTHENTICATED_USER_PROFILE" }),
                Ne =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).fetchAliasSelfSelectStatus, params: {} })({ actionTypes: P, context: "FETCH_SHOW_ALIAS_SELECT", meta: {} }),
                De =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).fetchAliasSelfSelectOptions, params: {} })({ actionTypes: L, context: "FETCH_ALIAS_SELECT_OPTIONS", meta: {} }),
                fe =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).selectAlias, params: { alias: e } })({ actionTypes: S, context: "SELECT_ALIAS", meta: { alias: e } }),
                Re =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).acknowledgeEarnOut, params: {} })({ actionTypes: Z, context: "PROFILE_ACKNOWLEDGE_EARN_OUT", meta: {} }),
                ge = (e) => ({ meta: { note_id: e }, type: b.SUCCESS }),
                Oe =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).deleteBirdwatchBatSignal, params: { tweet_id: e } })({ actionTypes: C, context: "DELETE_BIRDWATCH_BATSIGNAL", meta: { tweet_id: e } }),
                Ue =
                    (e, t, n, o) =>
                    (a, s, { api: d }) =>
                        (0, l._O)(a, { request: d.withEndpoint(r.Z).createNote, params: { tweet_id: e, is_media_note: n, is_helpful_for_all_posts: o, data: t } })({ actionTypes: M, context: "CREATE_NOTE" }),
                Le = (e) => (t) => {
                    t(((e) => ({ type: v, payload: e }))(e));
                },
                Me = (e) => (t) => {
                    t(((e) => ({ type: H, payload: e }))(e));
                },
                ye =
                    (e, t, n, o, a) =>
                    (s, d, { api: i }) =>
                        (0, l._O)(s, { request: i.withEndpoint(r.Z).createRating, params: { note_id: e, tweet_id: n, data: t, rating_source: o, source_platform: a } })({ actionTypes: h, context: "CREATE_RATING", meta: { note_id: e } }),
                Fe =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).deleteRating, params: { note_id: e } })({ actionTypes: p, context: "DELETE_RATING", meta: { note_id: e } }),
                Pe =
                    (e, t) =>
                    (n, o, { api: a }) =>
                        (0, l._O)(n, { request: a.withEndpoint(r.Z).admitUser, params: { admit_date: e, user_id: t } })({ actionTypes: f, context: "ADMIT_USER", meta: { admit_date: e, user_id: t } }),
                Be =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).removeUser, params: {} })({ actionTypes: R, context: "REMOVE_USER", meta: {} }),
                Ze =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).createAppeal, params: { note_id: e } })({ actionTypes: m, context: "CREATE_APPEAL", meta: { note_id: e } }),
                ve =
                    (e, t) =>
                    (n, o, { api: a }) =>
                        (0, l._O)(n, { request: a.withEndpoint(r.Z).createBirdwatchBatSignal, params: { tweet_id: e, source_link: t } })({ actionTypes: T, context: "CREATE_BAT_SIGNAL", meta: { tweet_id: e } }),
                He =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { request: o.withEndpoint(r.Z).editNotificationSettings, params: { settings: e } })({ actionTypes: w, context: "EDIT_NOTIFICATION_SETTINGS", meta: { settings: e } }),
                ke =
                    () =>
                    (e, t, { api: n }) =>
                        (0, l._O)(e, { request: n.withEndpoint(r.Z).fetchPublicData, params: {} })({ actionTypes: A, context: "FETCH_DATA", meta: {} });
        },
        302101: (e, t, n) => {
            n.d(t, { N: () => r });
            var o = n(106067),
                a = n(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_NOTE_MATCHES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchAuthenticatedBirdwatchMatchSlice, getEndpointParams: (t) => ({ ...t, note_id: e }), sliceKey: `birdwatchNoteMatchesSlice-${e}` });
        },
        304373: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(106067),
                a = n(545521);
            const r = (e) => (0, a.Z)({ contextSuffix: "BIRDWATCH_SOURCE_LINKS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchBirdwatchSourceLinkSlice, getEndpointParams: (t) => ({ ...t, tweet_id: e }), sliceKey: `birdwatchSourceLinkSlice-${e}` });
        },
        245422: (e, t, n) => {
            n.d(t, { K2: () => h, Sl: () => _, aC: () => b, oI: () => E });
            var o = n(717193),
                a = n(499627),
                r = n(917799),
                s = n(312771);
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
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, pivots: { ...e.pivots, [n]: { fetchStatus: s.ZP.LOADING } } } : e;
                        }
                        case i.FAILURE: {
                            const n = t.meta?.tweet_id;
                            return n ? { ...e, pivots: { ...e.pivots, [n]: { fetchStatus: s.ZP.FAILED } } } : e;
                        }
                        case i.SUCCESS: {
                            const n = t.meta?.tweet_id,
                                o = t.payload?.community_boost_pivot_by_rest_id,
                                a = o?.like_tags,
                                r = o?.has_pivot,
                                d = o?.dislike_tags,
                                i = o?.boost_id,
                                l = o?.rating;
                            return n ? { ...e, pivots: { ...e.pivots, [n]: { like_tags: a, dislike_tags: d, has_pivot: r, boost_id: i, rating: l, fetchStatus: s.ZP.LOADED } } } : e;
                        }
                        case l.SUCCESS: {
                            const n = t.meta?.post_id,
                                o = t.payload;
                            return n ? { ...e, pivots: { ...e.pivots, [n]: { ...e.pivots[n], rating: o } } } : e;
                        }
                        case c.SUCCESS: {
                            const n = t.meta?.post_id;
                            return n ? { ...e, pivots: { ...e.pivots, [n]: { ...e.pivots[n], rating: void 0 } } } : e;
                        }
                        default:
                            return e;
                    }
                },
            });
            const E =
                    (e, t, n) =>
                    (a, s, { api: d }) =>
                        (0, r._O)(a, { request: d.withEndpoint(o.Z).createBoostRating, params: { postId: e, boostId: t, data: n } })({ actionTypes: l, context: "CREATE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                _ =
                    (e, t) =>
                    (n, a, { api: s }) =>
                        (0, r._O)(n, { request: s.withEndpoint(o.Z).deleteBoostRating, params: { boost_id: t } })({ actionTypes: c, context: "DELETE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                b =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, r._O)(t, { request: a.withEndpoint(o.Z).fetchCommunityBoostPivot, params: e })({ actionTypes: i, context: "FETCH_COMMUNITYBOOST_PIVOT", meta: { tweet_id: e } }),
                h = (e, t) => e[d].pivots[t];
        },
        371184: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(106067),
                a = n(740527),
                r = n(218951);
            const s = (e) => (0, r.Z)({ timelineId: "birdwatch-global-timeline", network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGlobalTimeline, getEndpointParams: () => ({ tabId: e }) }, context: "FETCH_BIRDWATCH_GLOBAL_TIMELINE", perfKey: "birdwatch-global-timeline", formatResponse: a.Z });
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => i, Z: () => d });
            var o = n(503768),
                a = n(644829),
                r = n(750085),
                s = n(218951);
            const d = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: o }) => (0, s.Z)({ timelineId: o, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: o }) => ({ ...e, cursor: "string" == typeof o ? o : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: r.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-e019dbda.7529771a.js.map
