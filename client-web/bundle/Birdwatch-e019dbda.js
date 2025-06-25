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
            o.d(t, { Z: () => we });
            var n = o(202784),
                a = o(457311),
                r = o(708852),
                s = o(108362),
                d = o(111677),
                i = o.n(d),
                l = o(769471),
                c = o(718e3),
                u = o(789831),
                E = o(252021),
                _ = o(293115),
                b = o(87063),
                h = o(652904),
                p = o(507651),
                S = o(3138),
                m = o(655352),
                w = o(503229),
                T = o(71620),
                C = o(668214);
            const I = (e, t) => t.module.selectInitialFetchStatus(e),
                A = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                N = (e, t) => {
                    const o = t.selectedTabId,
                        n = A(e, t);
                    return n && n.tabs && n.tabs.tabs.find((e) => e.id === o);
                },
                D = (0, C.Z)()
                    .propsFromState(() => ({ initialFetchStatus: I, pageConfiguration: A, selectedTab: N }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, T.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class f extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: o, pageConfiguration: n } = this.props,
                                a = n ? n.scribeConfig : void 0;
                            return o().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(a), action: "get_initial" });
                            }, t(S.M));
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
                                return n.createElement(n.Fragment, null, n.createElement(p.Z, { alignFirstItem: (0, m.ZP)(), links: l, visibleItemIndex: i }));
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
                    return e === b.Z.LOADED ? this._render() : null;
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
            const R = D((0, w.Z)(f));
            var O = o(912021),
                g = o(383675),
                U = o(611423),
                L = o(443781);
            const y = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.0"),
                        o.e("icons.5"),
                        o.e("icons.12"),
                        o.e("icons.20"),
                        o.e("icons.2"),
                        o.e("icons.21"),
                        o.e("icons.28"),
                        o.e("icons.10"),
                        o.e("icons.17"),
                        o.e("icons.9"),
                        o.e("icons.23"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.22"),
                        o.e("icons.14"),
                        o.e("icons.25"),
                        o.e("icons.13"),
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
                        o.e("icons.6"),
                        o.e("icons.3"),
                        o.e("icons.4"),
                        o.e("icons.1"),
                        o.e("icons.8"),
                        o.e("icons.18"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
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
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
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
            var M = o(810641);
            const F = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                P = (e, t) => {
                    const o = t.selectedTabId,
                        n = F(e, t);
                    return n && n.tabs && n.tabs.tabs.find((e) => e.id === o);
                },
                B = (0, C.Z)()
                    .propsFromState(() => ({ pageConfiguration: F, selectedTab: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, T.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class Z extends n.Component {
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
                                if (e?.urtEndpoint) return (0, U.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: n });
                                if (e?.graphQLTimelineId) return (0, g.R)(e.graphQLTimelineId);
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
                    return n.createElement(_.nO, { namespace: this._getTimelineNamespace() }, n.createElement(M.Z, { entryConfiguration: e, module: E, pollingIntervalMsOverride: h, prerollDisplayLocation: a, refreshControl: r, renderEmptyState: s, renderUnavailable: d, title: c, withoutHeadroom: u }));
                }
            }
            Z.contextType = L.rC;
            const v = B(Z);
            var H = o(929482),
                k = o(335632),
                x = o(325686),
                G = o(392237),
                Q = o(950708),
                W = o(187669),
                q = o(725516),
                j = o(942893);
            const z = (e, t) => {
                const o = (0, q.z)(),
                    { component: a, element: r } = t || {},
                    s = n.useMemo(() => ({ items: [j.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, W.q)(() => {
                        o.scribe({ component: a, element: r, action: "impression", data: s });
                    }),
                    { namespace: { component: a, element: r }, data: s }
                );
            };
            function V(e) {
                const {
                        header: { clientEventInfo: t, displayType: o, facepile: a, landingContext: r, topicId: s },
                        onHeaderVisible: d,
                    } = e,
                    { data: i, namespace: l } = z(s, t);
                return n.createElement(x.Z, { style: K.root }, n.createElement(_.nO, { data: i, namespace: l }, n.createElement(Q.Z, { displayType: o, facepile: a, onFollowHeaderOffscreen: ({ isOffscreen: e }) => d(!e), topicId: s, topicLandingContext: r, withDivider: !0 })));
            }
            const K = G.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var Y = o(24949);
            const $ = (e, t) => t.module.selectPageConfiguration(e),
                J = (e, t) => t.module.selectInitialFetchStatus(e),
                X = (0, Y.P1)($, J, (e, t) => t !== b.Z.LOADED || (!!e && !!e.tabs)),
                ee = (0, C.Z)()
                    .propsFromState(() => ({ hasTabNavigation: X, pageConfiguration: $, initialFetchStatus: J }))
                    .withAnalytics();
            var te = o(688715),
                oe = o(815858),
                ne = o(651930),
                ae = o(572067),
                re = o(265196),
                se = o(421575),
                de = o(907552),
                ie = o(466380);
            const le = (e, t) => {
                    const o = t.navBar.topicId ? t.navBar.topicId : "";
                    return ie.Z.select(e, o);
                },
                ce = (0, C.Z)().propsFromState(() => ({ topic: le })),
                ue = (e) => (0, te.ju)(`https://x.com/i/topics/${e}`),
                Ee = (e) => `twitter://topics_timeline?id=${e}`,
                _e = i().ed88e742;
            const be = G.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                he = ce(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: o,
                            navBar: { clientEventInfo: a },
                            pageNamespace: r,
                            topic: s,
                            withAppLinks: d,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = n.useContext(L.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: E, namespace: b } = z(t, a),
                        h = (0, l.Z)({}, r, b);
                    return s ? n.createElement(_.nO, { data: E, namespace: h }, n.createElement(n.Fragment, null, i ? n.createElement(ae.Z, { canonical: ue(t), description: s.description, title: s.name, type: "article" }) : null, d ? n.createElement(ne.Z, { deepLink: Ee(t) }) : null, n.createElement(x.Z, { style: be.rightControl }, n.createElement(x.Z, { style: be.followButtonContainer }, n.createElement(oe.Z, { animateMount: !0, show: o, type: "fade" }, n.createElement(re.ZP, { size: "medium", textMode: se.q.FollowTopic, topic: s }))), u ? n.createElement(de.ZP, { copyLinkShareLabel: _e, scribeNamespace: h, url: ue(t) }) : null))) : null;
                }),
                pe = i().e9f1fbcc,
                Se = n.createElement(c.Z, null),
                me = (e) => {
                    const { TabBar: t, backLocation: o, documentTitle: a, entryConfiguration: d, fab: i, getTabLink: c, hasTabNavigation: p, history: S, initialFetchStatus: m, initialPageNamespace: w, logoButton: T, module: C, onBackClick: I, pageConfiguration: A, prerollDisplayLocation: N, renderEmptyState: D, renderUnavailable: f, rightControl: O, selectedTabId: g, sidebarContent: U, timelinePrefix: L, title: y, withAppLinks: M, withBottomLoginSignupBar: F, withOpenGraphMeta: P, withSearchBox: B, withTweetButton: Z } = e,
                        k = (0, r.tj)(),
                        x = n.useMemo(() => ({ ...d, ...(0, H.Z)({ isLegacy: !0, isWide: k }) }), [d, k]),
                        [G, Q] = n.useState(!0),
                        { header: W, navBar: q, subtitle: j, title: z } = A || {},
                        K = m === b.Z.LOADED ? z || y : "",
                        Y = ((e, t, o) => {
                            const n = t?.scribeConfig,
                                { entityToken: a, ...r } = n || {},
                                s = t?.tabs,
                                d = e || s?.initialTabId,
                                i = s?.tabs.find((e) => e.id === d),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, l.Z)({}, o, r, u);
                        })(g, A, w),
                        $ = W ? n.createElement(V, { header: W, onHeaderVisible: Q }) : null,
                        J = q ? n.createElement(he, { isHeaderOffscreen: !G, navBar: q, pageNamespace: Y, withAppLinks: M, withOpenGraphMeta: P }) : null,
                        X = n.createElement(n.Fragment, null, $, n.createElement(v, { entryConfiguration: x, initialModule: C, prerollDisplayLocation: N, renderEmptyState: D, renderUnavailable: f, selectedTabId: g, timelinePrefix: L, title: y, withoutHeadroom: !0 })),
                        ee = i ? n.createElement(u.Z, { component: s.Z, fab: i }, X) : X,
                        te = c && p ? n.createElement(R, { getTabLink: c, module: C, selectedTabId: g }) : void 0;
                    return n.createElement(_.nO, { namespace: Y }, n.createElement(h.Z, null, n.createElement(E.Z, { TabBar: t, backLocation: o, documentTitle: a, history: S, logoButton: T, onBackClick: I, primaryContent: ee, rightControl: J || O, secondaryBar: te, sidebarContent: U, subtitle: j, title: $ && G ? y : K, withBottomLoginSignupBar: F, withSearchBox: B, withTweetButton: Z })));
                };
            me.defaultProps = { entryConfiguration: (0, k.G)({}), renderEmptyState: () => n.createElement(a.Z, { header: pe }), sidebarContent: Se, withAppLinks: !1, withOpenGraphMeta: !1 };
            const we = ee(me);
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
                _ = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: E }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, l.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                b = s().i9028824,
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
                    return t ? n.createElement(d.Z, { "aria-label": b, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: o, retryable: !0 }) : null;
                }
            }
            S.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const m = _(S);
        },
        890655: (e, t, o) => {
            o.d(t, { Q: () => n });
            const n = (e, t = !1) =>
                e
                    .split("-")
                    .map((e) => (t ? e[0].toUpperCase() + e.substring(1) : e))
                    .join(" ");
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
            o.d(t, { $e: () => Oe, BG: () => re, Bb: () => ve, Bs: () => de, C7: () => fe, EW: () => De, HO: () => he, JL: () => ue, Jn: () => me, Kc: () => ye, Ld: () => Ze, Lt: () => te, Ly: () => J, OV: () => ae, PL: () => ie, Pi: () => Te, Qg: () => j, SZ: () => xe, V0: () => Pe, Wk: () => oe, X3: () => Me, _T: () => qe, _b: () => ke, aZ: () => Ue, ap: () => ce, cS: () => se, dw: () => X, eD: () => le, eY: () => Ie, et: () => Y, f3: () => pe, f_: () => Fe, gH: () => be, gP: () => Qe, jm: () => V, kT: () => Be, kX: () => Ge, lC: () => ge, lW: () => Ee, lw: () => Re, mZ: () => We, mv: () => Ce, oV: () => je, pN: () => Ne, qm: () => Le, r9: () => z, sz: () => ee, tk: () => $, vF: () => we, w6: () => _e, wK: () => He, wd: () => Se, ww: () => Ae });
            o(571372), o(136728);
            var n = o(744531),
                a = o(401388),
                r = o(106067),
                s = o(256563),
                d = o(497461),
                i = o(163889),
                l = o(499627),
                c = o(917799),
                u = o(312771),
                E = o(56519),
                _ = o(3693),
                b = o(298219);
            const h = "birdwatchNotes",
                p = `rweb/${h}`,
                S = (0, c.dg)(p, "DELETE_NOTE"),
                m = (0, c.dg)(p, "CREATE_RATING"),
                w = (0, c.dg)(p, "DELETE_RATING"),
                T = (0, c.dg)(p, "SELECT_ALIAS"),
                C = (0, c.dg)(p, "CREATE_APPEAL"),
                I = (0, c.dg)(p, "EDIT_NOTIFICATION_SETTINGS"),
                A = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                N = Object.freeze({ REQUEST: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL", FAILURE: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL" }),
                D = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                f = (Object.freeze({ REQUEST: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_REQUEST", SUCCESS: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_SUCCESS", FAILURE: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_FAILURE" }), Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_DATA_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_DATA_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_DATA_FAILURE" })),
                R = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/birdwatchNotes/ADMIT_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/ADMIT_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/ADMIT_USER_FAILURE" }),
                U = Object.freeze({ REQUEST: "rweb/birdwatchNotes/REMOVE_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/REMOVE_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/REMOVE_USER_FAILURE" }),
                L = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_FAILURE" }),
                M = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_FAILURE" }),
                F = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE" }),
                P = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_NOTE_FAILURE" }),
                B = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE" }),
                Z = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE" }),
                v = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE" }),
                H = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_FAILURE" }),
                k = Object.freeze({ REQUEST: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_REQUEST", SUCCESS: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_SUCCESS", FAILURE: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_FAILURE" }),
                x = "rweb/birdwatchNotes/UPDATE_STREAMED_NOTE_TRANSLATION",
                G = "rweb/birdwatchNotes/SAVE_FORM_DRAFT",
                Q = "rweb/birdwatchNotes/SAVE_BIRDWATCH_PATH",
                W = { drafts: {}, notes: {}, noteRequests: {}, tweetNotes: {}, contributor: {}, publicData: {}, matchData: { fetchStatus: u.ZP.LOADING }, sourceLinks: {}, sources: {}, paths: {} };
            l.Z.register({
                [h]: function (e = W, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case P.SUCCESS: {
                            const o = t.payload?.result;
                            if (o) {
                                const n = t.payload?.entities?.birdwatchNotes[o],
                                    a = n.tweet.rest_id,
                                    r = "MisinformedOrPotentiallyMisleading" === n.data_v1?.classification;
                                return { ...e, notes: { ...e.notes, [o]: n }, tweetNotes: { ...e.tweetNotes, [a]: { ...(e.tweetNotes && e.tweetNotes[a]), misleadingIds: r ? [...e.tweetNotes[a].misleadingIds, o] : e.tweetNotes[a].misleadingIds, notMisleadingIds: r ? e.tweetNotes[a].notMisleadingIds : [...e.tweetNotes[a].notMisleadingIds, o], ownNoteId: o, fetchStatus: u.ZP.LOADED } } };
                            }
                            return e;
                        }
                        case N.SUCCESS: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: (0, n.Z)(e.noteRequests, o) } : e;
                        }
                        case S.SUCCESS: {
                            const o = t.meta?.note_id;
                            return o ? { ...e, notes: (0, n.Z)(e.notes, o) } : e;
                        }
                        case R.REQUEST: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { fetchStatus: u.ZP.LOADING } } : e;
                        }
                        case R.SUCCESS: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { canBeMediaNote: t.payload.tweet_result_by_rest_id.result.can_be_media_note, canBeUrlNote: t.payload.tweet_result_by_rest_id.result.can_be_url_note, mediaNoteCategory: t.payload.tweet_result_by_rest_id.result.media_note_category, noteMatchUrl: t.payload.tweet_result_by_rest_id.result.note_match_url, fetchStatus: u.ZP.LOADED } } : e;
                        }
                        case O.REQUEST: {
                            const o = t.meta?.note_id;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { fetchStatus: u.ZP.LOADING } } } } : e;
                        }
                        case O.SUCCESS: {
                            const o = t.meta?.note_id;
                            if (o) {
                                const n = t.payload.birdwatch_note_by_rest_id.translated_summary;
                                return { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { result: n && (0, s.Z)((0, d.$)(), n), fetchStatus: u.ZP.LOADED } } } };
                            }
                            return e;
                        }
                        case O.FAILURE: {
                            const o = t.meta?.noteId;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], noteTranslation: { fetchStatus: u.ZP.FAILED } } } } : e;
                        }
                        case y.SUCCESS: {
                            const o = t.payload;
                            return { ...e, signupEligibility: o?.birdwatch_sign_up_eligibility?.eligible };
                        }
                        case D.REQUEST: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { fetchStatus: u.ZP.LOADING } } } : e;
                        }
                        case D.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { fetchStatus: u.ZP.FAILED } } } : e;
                        }
                        case D.SUCCESS: {
                            const o = t.meta?.tweet_id,
                                n = t.payload?.birdwatch_bat_signal_by_rest_id.created_at;
                            return o ? { ...e, noteRequests: { ...e.noteRequests, [o]: { created_at: n, fetchStatus: u.ZP.LOADED } } } : e;
                        }
                        case A.SUCCESS: {
                            const o = t.meta?.tweet_id,
                                n = t.payload?.created_at;
                            return o && n ? { ...e, noteRequests: { ...e.noteRequests, [o]: { created_at: n } } } : e;
                        }
                        case m.SUCCESS: {
                            const o = t.meta?.note_id,
                                n = t.payload;
                            return o ? { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], rating: n } } } : e;
                        }
                        case w.SUCCESS: {
                            const o = t.meta?.note_id;
                            if (o) {
                                const { rating: t, ...n } = e.notes[o];
                                return { ...e, notes: { ...e.notes, [o]: { ...n } } };
                            }
                            return e;
                        }
                        case B.REQUEST: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { ...(e.tweetNotes && e.tweetNotes[o]), fetchStatus: u.ZP.LOADING } } } : e;
                        }
                        case B.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, tweetNotes: { ...e.tweetNotes, [o]: { ...e.tweetNotes[o], fetchStatus: u.ZP.FAILED } } } : e;
                        }
                        case B.SUCCESS: {
                            const o = t.payload?.result,
                                n = t.meta?.tweet_id;
                            if (o) {
                                const a = t.payload?.entities?.birdwatchNotes[o],
                                    r = a?.misleading_ids || [],
                                    s = r.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    d = r.map((e) => e.rest_id),
                                    i = a?.not_misleading_ids || [],
                                    l = i.reduce((e, t) => ((e[t.rest_id] = t), e), {}),
                                    c = { misleadingIds: d, notMisleadingIds: i.map((e) => e.rest_id), fetchStatus: u.ZP.LOADED };
                                return a?.ownNoteId && (c.ownNoteId = a?.ownNoteId), (c.canUserWriteNotesOnPost = a?.canUserWriteNotesOnPost), t.meta ? { ...e, notes: { ...e.notes, ...s, ...l }, tweetNotes: { ...e.tweetNotes, [n]: c } } : e;
                            }
                            return n ? { ...e, tweetNotes: { ...e.tweetNotes, [n]: { fetchStatus: u.ZP.LOADED } } } : e;
                        }
                        case Z.REQUEST: {
                            const o = t.meta?.alias;
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: u.ZP.LOADING } } } : e;
                        }
                        case Z.FAILURE: {
                            const o = t.meta?.alias;
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: u.ZP.FAILED } } } : e;
                        }
                        case Z.SUCCESS: {
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
                                return { ...e, notes: { ...e.notes, ...r }, contributor: { ...e.contributor, [n]: { ratingsCount: d, notesCount: i, isTopWriter: l, deletedNotesCount: o?.deleted_notes_count, notes: s, fetchStatus: u.ZP.LOADED } } };
                            }
                            return o ? { ...e, contributor: { ...e.contributor, [o]: { ...e.contributor[o], fetchStatus: u.ZP.FAILED } } } : e;
                        }
                        case L.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, notificationSettings: o?.notification_settings?.needs_your_help_frequency, ownAlias: o?.alias, canWriteNotes: o?.can_write_notes, enrollmentStatus: o?.user_enrollment, isTopWriter: o?.is_top_writer, showMobileNavigationSettings: o?.user_settings?.show_in_app_navigation } };
                        }
                        case v.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, showAliasSelfSelect: o?.can_select && !o?.has_selected } };
                        }
                        case F.SUCCESS: {
                            const o = t.payload;
                            return { ...e, contributor: { ...e.contributor, aliasSelfSelectOptions: o } };
                        }
                        case H.SUCCESS: {
                            const o = t.payload,
                                n = o?.result;
                            return n ? { ...e, notes: { ...e.notes, [n]: { ...o?.entities?.birdwatchNotes[n], fetchStatus: u.ZP.LOADED } } } : e;
                        }
                        case H.REQUEST: {
                            const o = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [o]: { ...(e.notes && e.notes[o]), fetchStatus: u.ZP.LOADING } } };
                        }
                        case H.FAILURE: {
                            const o = t.meta?.note_id;
                            return { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], fetchStatus: u.ZP.FAILED } } };
                        }
                        case f.SUCCESS: {
                            const o = t.payload;
                            return o ? { ...e, publicData: o } : e;
                        }
                        case T.SUCCESS: {
                            const o = t.meta?.alias;
                            return { ...e, contributor: { ...e.contributor, ownAlias: o } };
                        }
                        case G: {
                            const o = t.payload;
                            if ((0, a.Z)(o)) return e;
                            {
                                const t = o.updates,
                                    n = o.tweetId;
                                return { ...e, drafts: { ...e.drafts, [n]: t } };
                            }
                        }
                        case Q: {
                            const o = t.payload;
                            if ((0, a.Z)(o)) return e;
                            {
                                const t = o.count,
                                    n = o.path;
                                return { ...e, paths: { ...e.paths, [t]: n } };
                            }
                        }
                        case k.SUCCESS:
                            return { ...e, contributor: { ...e.contributor, enrollmentStatus: { ...e.contributor.enrollmentStatus, enrollment_state: "EarnedOutAcknowledged" } } };
                        case M.REQUEST: {
                            const o = t.meta?.tweetId;
                            return o ? { ...e, matchData: { fetchStatus: u.ZP.LOADING } } : e;
                        }
                        case M.FAILURE: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, sourceLinks: { ...e.sourceLinks, [o]: { fetchStatus: u.ZP.FAILED } } } : e;
                        }
                        case M.SUCCESS: {
                            const o = t.meta?.tweet_id;
                            return o ? { ...e, sourceLinks: { ...e.sourceLinks, [o]: { source_preview_tweet_for_notes: t.payload.tweet_result_by_rest_id.result.source_preview_tweet_for_notes, source_tweet_count_for_notes: t.payload.tweet_result_by_rest_id.result.source_tweet_count_for_notes, has_note_request: t.payload.tweet_result_by_rest_id.result.has_note_request, fetchStatus: u.ZP.LOADED } } } : e;
                        }
                        case x: {
                            const { note_id: o, translation: n } = t.payload;
                            return { ...e, notes: { ...e.notes, [o]: { ...e.notes[o], streamedNoteTranslation: n } } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const q = [],
                j = (e, t) => e[h].notes[t],
                z = (e, t) => e[h].noteRequests[t],
                V = (e) => e[h].paths,
                K = (e, t) => e[h].tweetNotes[t]?.misleadingIds,
                Y = (e) => e[h].matchData,
                $ = (e, t) => e[h].sourceLinks[t],
                J = (e, t) => {
                    const o = e[h].tweetNotes[t];
                    return o ? o.canUserWriteNotesOnPost : void 0;
                },
                X = (e, t) => {
                    if (!t) return null;
                    const o = ((e, t) => e[h].tweetNotes[t]?.ownNoteId)(e, t);
                    return o ? j(e, o) : null;
                },
                ee = (e) => e[h].publicData,
                te = (e, t) => {
                    const o = t ? K(e, t) : void 0;
                    if (o) {
                        return o.map((t) => j(e, t)).filter(Boolean);
                    }
                    return q;
                },
                oe = (e, t) => {
                    const o = t ? ((e, t) => e[h].tweetNotes[t]?.notMisleadingIds)(e, t) : void 0;
                    if (o) {
                        return o.map((t) => j(e, t)).filter(Boolean);
                    }
                    return q;
                },
                ne = (e, t) => {
                    const o = e[h].contributor[t];
                    return o ? o.notes : void 0;
                },
                ae = (e) => {
                    const t = e[h].contributor;
                    return t ? t.ownAlias : void 0;
                },
                re = (e) => {
                    const t = e[h].contributor;
                    return t ? t.showAliasSelfSelect : void 0;
                },
                se = (e) => {
                    const t = e[h]?.contributor?.ownAlias;
                    if (!t) return !1;
                    const o = `birdwatchContributorNotesSlice-${t}`,
                        n = e.slices[o];
                    return n?.items?.length > 0 || !1;
                },
                de = (e) => {
                    const t = e[h].contributor;
                    return t ? t.aliasSelfSelectOptions : void 0;
                },
                ie = (e) => {
                    const t = e[h].contributor;
                    return t ? t.enrollmentStatus : void 0;
                },
                le = (e, t) => !!(e[h].contributor[t]?.isTopWriter || e[h].contributor?.isTopWriter),
                ce = (e, t) => e[h].contributor[t]?.isTopWriter || !1,
                ue = (e) => {
                    const t = e[h].contributor;
                    return t ? t.notificationSettings : void 0;
                },
                Ee = (e) => {
                    const t = e[h].contributor;
                    return t ? t.canWriteNotes : void 0;
                },
                _e = (e, t) => {
                    if (!t) return;
                    const o = e[h].contributor[t];
                    return o ? o.ratingsCount : void 0;
                },
                be = (e, t) => {
                    if (!t) return;
                    const o = e[h].contributor[t];
                    return o ? o.notesCount : void 0;
                },
                he = (e, t) => {
                    const o = e[h].contributor[t];
                    return o ? o.deletedNotesCount : void 0;
                },
                pe = (e, t) => {
                    const o = e[h].tweetNotes[t];
                    return o ? o.fetchStatus : u.ZP.NONE;
                },
                Se = (e, t) => {
                    const o = e[h].notes[t];
                    return o ? o.fetchStatus : u.ZP.NONE;
                },
                me = (e, t) => {
                    if (!t) return;
                    const o = e[h].drafts;
                    return o ? o[t] : void 0;
                },
                we =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchBirdwatchBatSignal, params: e })({ actionTypes: D, context: "FETCH_BIRDWATCH_BAT_SIGNAL", meta: { tweet_id: e } }),
                Te =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!K(o(), e),
                            s = pe(o(), e) === u.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchNotes, params: { tweet_id: e } })({ actionTypes: B, context: "FETCH_TWEET_NOTES", meta: { tweet_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, E.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
                    },
                Ce =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!e && !!ne(o(), e),
                            s =
                                ((e, t) => {
                                    const o = e[h].contributor[t];
                                    return o ? o.fetchStatus : u.ZP.NONE;
                                })(o(), e) === u.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          e
                                              ? (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchBirdwatchProfile, params: { alias: e } })({ actionTypes: Z, context: "FETCH_BIRDWATCH_PROFILE", meta: { alias: e } }, (e) => {
                                                    if (e) {
                                                        const { entities: t } = e;
                                                        return t && [(0, E.dP)(t)];
                                                    }
                                                })
                                              : Promise.resolve()
                                  )(e),
                              );
                    },
                Ie =
                    () =>
                    (e, t, { api: o }) =>
                        !!ie(t()) ? Promise.resolve() : e(ge()),
                Ae =
                    (e) =>
                    (t, o, { api: n }) => {
                        const a = !!j(o(), e),
                            s = Se(o(), e) === u.ZP.LOADING;
                        return a || s
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: n }) =>
                                          (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchOneNote, params: { note_id: e } })({ actionTypes: H, context: "FETCH_NOTE", meta: { note_id: e } })
                                  )(e),
                              );
                    },
                Ne =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchCanTweetBeMediaNote, params: e })({ actionTypes: R, context: "FETCH_CAN_BE_MEDIA_NOTE", meta: { tweetId: e } }),
                De =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchNoteTranslation, params: e })({ actionTypes: O, context: "FETCH_NOTE_TRANSLATION", meta: { note_id: e } }),
                fe =
                    (e) =>
                    async (t, o, { api: n }) => {
                        const a = { content_type: "COMMUNITY_NOTE", id: e },
                            r = { fetchStatus: u.ZP.LOADING, result: { text: "", entities: [] } },
                            l = (e, o) => {
                                var n;
                                t(((n = { note_id: e, translation: { ...o, result: o.result ? (0, s.Z)((0, d.$)(), o.result) : void 0 } }), { type: x, payload: n }));
                            };
                        l(e, r);
                        const c = new AbortController();
                        try {
                            const t = await n.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(a), signal: c.signal });
                            if (!t.ok) throw ((r.state = _.H.ERROR), (r.fetchStatus = u.ZP.FAILED), l(e, r), new Error(`invalid response ${t.status}`));
                            const o = t.body?.getReader();
                            if (!o) throw ((r.state = _.H.ERROR), (r.fetchStatus = u.ZP.FAILED), l(e, r), new Error("reader not present"));
                            const s = new TextDecoder();
                            let d = "";
                            const i = async (t) => {
                                const n = t ? b.T9 : b.UG,
                                    { done: a, value: c } = await (0, b.yE)("COMMUNITY_NOTE_TIMEOUT_BETWEEN_CHUNKS", () => o.read(), n, t ? "timeout to first chunk" : "timeout between chunks");
                                if (a) {
                                    if (0 === (r.result?.text.length ?? 0)) throw new Error("empty string when done");
                                    return (r.state = _.H.SUCCESS), (r.fetchStatus = u.ZP.LOADED), void l(e, r);
                                }
                                if (c) {
                                    const t = s.decode(c);
                                    if (((d += t), d.includes("\n"))) {
                                        const t = d.split("\n");
                                        d = t.pop();
                                        for (const o of t) {
                                            const t = JSON.parse(o);
                                            if (t.error) throw new Error(t.error);
                                            t.result && r.result && (t.result.text && (r.result.text += t.result.text), t.result.rich_text_entities && r.result.entities.push(...t.result.rich_text_entities)), l(e, r);
                                        }
                                    }
                                }
                                await i();
                            };
                            await i(!0);
                        } catch (t) {
                            (r.state = _.H.ERROR), (r.fetchStatus = u.ZP.FAILED), l(e, r), (0, i.ZP)(`Failed to translate community note:${e} - ${String(t)}`), c.abort();
                        }
                    },
                Re =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).fetchTweetSourceLink, params: e })({ actionTypes: M, context: "FETCH_SOURCE_LINK_TWEET", meta: { tweet_id: e } }),
                Oe =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).fetchSignUpEligiblity })({ actionTypes: y, context: "FETCH_SIGNUP_ELIGIBILITY" }),
                ge =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).fetchAuthenticatedUserProfile, params: {} })({ actionTypes: L, context: "FETCH_AUTHENTICATED_USER_PROFILE" }),
                Ue =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).fetchAliasSelfSelectStatus, params: {} })({ actionTypes: v, context: "FETCH_SHOW_ALIAS_SELECT", meta: {} }),
                Le =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).fetchAliasSelfSelectOptions, params: {} })({ actionTypes: F, context: "FETCH_ALIAS_SELECT_OPTIONS", meta: {} }),
                ye =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).selectAlias, params: { alias: e } })({ actionTypes: T, context: "SELECT_ALIAS", meta: { alias: e } }),
                Me =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).acknowledgeEarnOut, params: {} })({ actionTypes: k, context: "PROFILE_ACKNOWLEDGE_EARN_OUT", meta: {} }),
                Fe = (e) => ({ meta: { note_id: e }, type: S.SUCCESS }),
                Pe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).deleteBirdwatchBatSignal, params: { tweet_id: e } })({ actionTypes: N, context: "DELETE_BIRDWATCH_BATSIGNAL", meta: { tweet_id: e } }),
                Be =
                    (e, t, o, n) =>
                    (a, s, { api: d }) =>
                        (0, c._O)(a, { request: d.withEndpoint(r.Z).createNote, params: { tweet_id: e, is_media_note: o, is_helpful_for_all_posts: n, data: t } })({ actionTypes: P, context: "CREATE_NOTE" }),
                Ze = (e) => (t) => {
                    t(((e) => ({ type: G, payload: e }))(e));
                },
                ve = (e) => (t) => {
                    t(((e) => ({ type: Q, payload: e }))(e));
                },
                He =
                    (e, t, o, n, a) =>
                    (s, d, { api: i }) =>
                        (0, c._O)(s, { request: i.withEndpoint(r.Z).createRating, params: { note_id: e, tweet_id: o, data: t, rating_source: n, source_platform: a } })({ actionTypes: m, context: "CREATE_RATING", meta: { note_id: e } }),
                ke =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).deleteRating, params: { note_id: e } })({ actionTypes: w, context: "DELETE_RATING", meta: { note_id: e } }),
                xe =
                    (e, t) =>
                    (o, n, { api: a }) =>
                        (0, c._O)(o, { request: a.withEndpoint(r.Z).admitUser, params: { admit_date: e, user_id: t } })({ actionTypes: g, context: "ADMIT_USER", meta: { admit_date: e, user_id: t } }),
                Ge =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).removeUser, params: {} })({ actionTypes: U, context: "REMOVE_USER", meta: {} }),
                Qe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).createAppeal, params: { note_id: e } })({ actionTypes: C, context: "CREATE_APPEAL", meta: { note_id: e } }),
                We =
                    (e, t) =>
                    (o, n, { api: a }) =>
                        (0, c._O)(o, { request: a.withEndpoint(r.Z).createBirdwatchBatSignal, params: { tweet_id: e, source_link: t } })({ actionTypes: A, context: "CREATE_BAT_SIGNAL", meta: { tweet_id: e } }),
                qe =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, c._O)(t, { request: n.withEndpoint(r.Z).editNotificationSettings, params: { settings: e } })({ actionTypes: I, context: "EDIT_NOTIFICATION_SETTINGS", meta: { settings: e } }),
                je =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c._O)(e, { request: o.withEndpoint(r.Z).fetchPublicData, params: {} })({ actionTypes: f, context: "FETCH_DATA", meta: {} });
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
            o.d(t, { K2: () => h, Sl: () => _, aC: () => b, oI: () => E });
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
                _ =
                    (e, t) =>
                    (o, a, { api: s }) =>
                        (0, r._O)(o, { request: s.withEndpoint(n.Z).deleteBoostRating, params: { boost_id: t } })({ actionTypes: c, context: "DELETE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: e } }),
                b =
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-e019dbda.314c9caa.js.map
