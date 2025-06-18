"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Explore~bundle.Topics"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(769471),
                o = n(934309),
                r = n(750085),
                d = n(401388),
                l = n(626421),
                i = n(497461);
            const s = (e) => {
                    const t = (0, i.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, d.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        a = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: a, facepile: o, topic: r, ...d } = n,
                                i = o && (0, l.Zn)(e, o);
                            return { ...d, topicId: (0, l.S0)(e, r), facepile: i };
                        })(t, e),
                        o = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, l.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: a, navBar: o.navBar && o.navBar, title: o.title, subtitle: o.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                c = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, r.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, r.Z)(n.initialTimeline.timeline.timeline) : (0, r.Z)(o.cY);
                    var n;
                    const { globalObjects: d, pageConfiguration: l } = s(e);
                    return { ...t, globalObjects: (0, a.Z)(d, t.globalObjects), pageConfiguration: l };
                };
        },
        33104: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            var a = n(325686);
            const o = (0, n(337455).Z)(a.Z);
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                d = n(392237),
                l = n(655352);
            const i = d.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: t, fab: n, shouldRenderFab: d = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const p = t || r.Z,
                        m = d && !(0, l.ZP)();
                    return o.createElement(p, (0, a.Z)({}, u, { style: [m && !c && i.root, s] }), e, m ? n : null);
                };
        },
        651930: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(99107),
                r = n(272175),
                d = n(111677);
            const l = n.n(d)().c39b0e24,
                i = ({ deepLink: e }) => {
                    const t = l;
                    return e ? a.createElement(r.ql, null, a.createElement("meta", { content: e, property: "al:ios:url" }), a.createElement("meta", { content: o.AF, property: "al:ios:app_store_id" }), a.createElement("meta", { content: t, property: "al:ios:app_name" }), a.createElement("meta", { content: e, property: "al:android:url" }), a.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), a.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                o = n(272175);
            const r = (e) => {
                const { canonical: t, description: n = "", image: r, imageAlt: d, imageH: l, imageType: i, imageW: s, title: c, ttl: u, type: p } = e;
                return a.createElement(o.ql, null, p ? a.createElement("meta", { content: p, property: "og:type" }) : null, t ? a.createElement("meta", { content: t, property: "og:url" }) : null, c ? a.createElement("meta", { content: c, property: "og:title" }) : null, a.createElement("meta", { content: n, property: "og:description" }), r ? a.createElement("meta", { content: r, property: "og:image" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:type" }) : null, s ? a.createElement("meta", { content: s, property: "og:image:width" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:height" }) : null, d ? a.createElement("meta", { content: d, property: "og:image:alt" }) : null, u ? a.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(807896),
                o = n(202784),
                r = n(107267),
                d = n(403556),
                l = n(791632);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: n, ...i } = e;
                    return o.createElement(d.Z, (0, a.Z)({}, i, { isCompact: n || (0, l.HD)(t) }));
                },
                s = o.memo(i);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                o = n(500002),
                r = n(668214),
                d = n(997174),
                l = n(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class s extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: d },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const s = o || l;
                    ((s && o !== l) || (!s && n !== r) || a !== d || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, o.ZP)(i(s));
        },
        337523: (e, t, n) => {
            n.d(t, { Z: () => ye });
            var a = n(202784),
                o = n(457311),
                r = n(708852),
                d = n(108362),
                l = n(111677),
                i = n.n(l),
                s = n(769471),
                c = n(718e3),
                u = n(33104),
                p = n(789831),
                m = n(252021),
                b = n(293115),
                h = n(87063),
                g = n(652904),
                f = n(507651),
                D = n(3138),
                w = n(655352),
                y = n(503229),
                M = n(71620),
                C = n(668214);
            const k = (e, t) => t.module.selectInitialFetchStatus(e),
                E = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                S = (e, t) => {
                    const n = t.selectedTabId,
                        a = E(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                A = (0, C.Z)()
                    .propsFromState(() => ({ initialFetchStatus: k, pageConfiguration: E, selectedTab: S }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class T extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: n, pageConfiguration: a } = this.props,
                                o = a ? a.scribeConfig : void 0;
                            return n().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(o), action: "get_initial" });
                            }, t(D.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: n, selectedTab: o } = this.props,
                                r = n?.tabs;
                            if (r && r.tabs) {
                                const d = (o && o.id) || r.initialTabId,
                                    l = n ? n.scribeConfig : void 0;
                                let i;
                                const s = r.tabs.map((n, a) => {
                                    const o = n.id === d;
                                    return (
                                        o && (i = a),
                                        {
                                            isActive: () => o,
                                            key: n.labelText,
                                            label: n.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(l), this._getScribeNamespace(n.scribeConfig)));
                                            },
                                            to: t(n.id),
                                            token: n.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return a.createElement(a.Fragment, null, a.createElement(f.Z, { alignFirstItem: (0, w.ZP)(), links: s, visibleItemIndex: i }));
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
            const I = A((0, y.Z)(T));
            var v = n(912021),
                x = n(383675),
                N = n(611423),
                Z = n(443781);
            const _ = (0, n(523561).Z)({
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
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
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
                    ]).then(n.bind(n, 169698)),
            });
            var B = n(810641);
            const P = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                R = (e, t) => {
                    const n = t.selectedTabId,
                        a = P(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                L = (0, C.Z)()
                    .propsFromState(() => ({ pageConfiguration: P, selectedTab: R }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class G extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: t, selectedTab: n } = this.props,
                                a = n?.scribeConfig || t?.scribeConfig;
                            if (a) {
                                const { entityToken: e, ...t } = a;
                                return t;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, v.Z)((e, t, n, a) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, N.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: a });
                                if (e?.graphQLTimelineId) return (0, x.R)(e.graphQLTimelineId);
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
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: n, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: d, renderUnavailable: l, selectedTab: i, timelinePrefix: s, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return a.createElement(_, null);
                    const p = this._getModule(i, n?.tabs?.initialTabId, t, s),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        h = m ? 1e3 * m : void 0;
                    return a.createElement(b.nO, { namespace: this._getTimelineNamespace() }, a.createElement(B.Z, { entryConfiguration: e, module: p, pollingIntervalMsOverride: h, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: d, renderUnavailable: l, title: c, withoutHeadroom: u }));
                }
            }
            G.contextType = Z.rC;
            const H = L(G);
            var F = n(929482),
                W = n(335632),
                O = n(325686),
                z = n(392237),
                U = n(950708),
                $ = n(187669),
                j = n(725516),
                q = n(942893);
            const V = (e, t) => {
                const n = (0, j.z)(),
                    { component: o, element: r } = t || {},
                    d = a.useMemo(() => ({ items: [q.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, $.q)(() => {
                        n.scribe({ component: o, element: r, action: "impression", data: d });
                    }),
                    { namespace: { component: o, element: r }, data: d }
                );
            };
            function Q(e) {
                const {
                        header: { clientEventInfo: t, displayType: n, facepile: o, landingContext: r, topicId: d },
                        onHeaderVisible: l,
                    } = e,
                    { data: i, namespace: s } = V(d, t);
                return a.createElement(O.Z, { style: K.root }, a.createElement(b.nO, { data: i, namespace: s }, a.createElement(U.Z, { displayType: n, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => l(!e), topicId: d, topicLandingContext: r, withDivider: !0 })));
            }
            const K = z.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var Y = n(24949);
            const J = (e, t) => t.module.selectPageConfiguration(e),
                X = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, Y.P1)(J, X, (e, t) => t !== h.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, C.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var ne = n(688715),
                ae = n(815858),
                oe = n(651930),
                re = n(572067),
                de = n(265196),
                le = n(421575),
                ie = n(907552),
                se = n(466380);
            const ce = (e, t) => {
                    const n = t.navBar.topicId ? t.navBar.topicId : "";
                    return se.Z.select(e, n);
                },
                ue = (0, C.Z)().propsFromState(() => ({ topic: ce })),
                pe = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                be = i().ed88e742;
            const he = z.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                ge = ue(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: o },
                            pageNamespace: r,
                            topic: d,
                            withAppLinks: l,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = a.useContext(Z.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: p, namespace: m } = V(t, o),
                        h = (0, s.Z)({}, r, m);
                    return d ? a.createElement(b.nO, { data: p, namespace: h }, a.createElement(a.Fragment, null, i ? a.createElement(re.Z, { canonical: pe(t), description: d.description, title: d.name, type: "article" }) : null, l ? a.createElement(oe.Z, { deepLink: me(t) }) : null, a.createElement(O.Z, { style: he.rightControl }, a.createElement(O.Z, { style: he.followButtonContainer }, a.createElement(ae.Z, { animateMount: !0, show: n, type: "fade" }, a.createElement(de.ZP, { size: "medium", textMode: le.q.FollowTopic, topic: d }))), u ? a.createElement(ie.ZP, { copyLinkShareLabel: be, scribeNamespace: h, url: pe(t) }) : null))) : null;
                }),
                fe = i().e9f1fbcc,
                De = a.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: t, backLocation: n, documentTitle: o, entryConfiguration: l, fab: i, getTabLink: c, hasTabNavigation: f, history: D, initialFetchStatus: w, initialPageNamespace: y, logoButton: M, module: C, onBackClick: k, pageConfiguration: E, prerollDisplayLocation: S, renderEmptyState: A, renderUnavailable: T, rightControl: v, selectedTabId: x, sidebarContent: N, timelinePrefix: Z, title: _, withAppLinks: B, withBottomLoginSignupBar: P, withDeferredView: R, withOpenGraphMeta: L, withSearchBox: G, withTweetButton: W } = e,
                        O = (0, r.tj)(),
                        z = a.useMemo(() => ({ ...l, ...(0, F.Z)({ isLegacy: !0, isWide: O }) }), [l, O]),
                        [U, $] = a.useState(!0),
                        { header: j, navBar: q, subtitle: V, title: K } = E || {},
                        Y = w === h.Z.LOADED ? K || _ : "",
                        J = ((e, t, n) => {
                            const a = t?.scribeConfig,
                                { entityToken: o, ...r } = a || {},
                                d = t?.tabs,
                                l = e || d?.initialTabId,
                                i = d?.tabs.find((e) => e.id === l),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, s.Z)({}, n, r, u);
                        })(x, E, y),
                        X = j ? a.createElement(Q, { header: j, onHeaderVisible: $ }) : null,
                        ee = q ? a.createElement(ge, { isHeaderOffscreen: !U, navBar: q, pageNamespace: J, withAppLinks: B, withOpenGraphMeta: L }) : null,
                        te = R ? u.Z : a.Fragment,
                        ne = a.createElement(a.Fragment, null, X, a.createElement(te, null, a.createElement(H, { entryConfiguration: z, initialModule: C, prerollDisplayLocation: S, renderEmptyState: A, renderUnavailable: T, selectedTabId: x, timelinePrefix: Z, title: _, withoutHeadroom: !0 }))),
                        ae = i ? a.createElement(p.Z, { component: d.Z, fab: i }, ne) : ne,
                        oe = c && f ? a.createElement(I, { getTabLink: c, module: C, selectedTabId: x }) : void 0;
                    return a.createElement(b.nO, { namespace: J }, a.createElement(g.Z, null, a.createElement(m.Z, { TabBar: t, backLocation: n, documentTitle: o, history: D, logoButton: M, onBackClick: k, primaryContent: ae, rightControl: ee || v, secondaryBar: oe, sidebarContent: N, subtitle: V, title: X && U ? _ : Y, withBottomLoginSignupBar: P, withSearchBox: G, withTweetButton: W })));
                };
            we.defaultProps = { entryConfiguration: (0, W.G)({}), renderEmptyState: () => a.createElement(o.Z, { header: fe }), sidebarContent: De, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const ye = te(we);
        },
        337455: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(411916),
                r = n.n(o),
                d = n(373463),
                l = n.n(d);
            function i(e) {
                class t extends a.Component {
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
                        return this.state.shouldRender ? a.createElement(e, this.props) : null;
                    }
                }
                return l()(t, e);
            }
        },
        553093: (e, t, n) => {
            n.d(t, { Sz: () => a });
            const a = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const n = t.join("");
                    return o(n, 0).toString();
                },
                o = (e, t) => {
                    const n = "string" == typeof e ? e : String(e);
                    let a = t;
                    for (let e = 0; e < n.length; e++) {
                        (a = (a << 5) - a + n.charCodeAt(e)), (a |= 0);
                    }
                    return a;
                };
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => i, Z: () => l });
            var a = n(503768),
                o = n(644829),
                r = n(750085),
                d = n(218951);
            const l = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: a }) => (0, d.Z)({ timelineId: a, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: a }) => ({ ...e, cursor: "string" == typeof a ? a : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, t) => (0, d.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: r.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(553093),
                o = n(383675);
            const r = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: r } = t,
                    { cacheId: d, requestParams: l, timeline: i } = r || {};
                return i?.id ? (0, o.R)(i.id) : (0, o.Z)({ timelineId: d || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: l || {} });
            };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => S });
            var a = n(807896),
                o = n(202784),
                r = n(194504),
                d = n(235902),
                l = n(392237),
                i = n(325686),
                s = n(111677),
                c = n.n(s),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                b = n(310088),
                h = n(175993),
                g = n(58881),
                f = n(530732);
            const D = c().d2414d31,
                w = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class M extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, a) => {
                            const o = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return n || a ? (e || t ? o : r) : e ? o : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: r, color: d, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: M, style: k, to: E } = this.props,
                        { location: S } = this.state,
                        A = E ? this._getMemoizedLink(E, M) : void 0,
                        T = s ? s(E) : S?.pathname === A?.pathname,
                        I = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? C.pillHoverStyle.backgroundColor : void 0 }),
                        v = h ? "medium" : T ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: I, link: A, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [C.pillStyle] : [C.link]), ...(u && T ? [C.pillActiveStyle] : []), c ? (u ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, k], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: s }) => o.createElement(i.Z, { style: u && C.flexGrow }, o.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(T, s, h, u) }, c && C.compactText, h && t && C.focusedText, u && C.pillTextStyle, u && T && C.pillActiveTextStyle, u && s && C.pillHoverTextStyle], weight: v }, e && o.createElement(e, { style: C.icon }), r, h || u ? null : o.createElement(i.Z, { style: T && [C.border, { backgroundColor: l.default.theme.colors[d] }] })), n ? o.createElement(b.Z, { count: n, standalone: !0, style: [C.badge, n >= 10 && C.multiDigitBadge, n >= 20 && C.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: D, withBorder: !1 }) : a ? o.createElement(b.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (M.contextType = h.Z), (M.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                k = M,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = d.ZP.useProps(),
                        b = m() && !l,
                        h = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: t, viewType: r, ...d }, s) => {
                                    const c = b ? [E.linkRedesign, 0 === s && E.firstLinkRedesign, e && 0 === s && E.withNoPaddingStart] : void 0;
                                    return o.createElement(k, (0, a.Z)({ viewType: r }, d, { isCompact: n, isPillLink: l, isRoundedRect: i, isWebRedesign: b, style: c }), t);
                                }),
                            [e, n, l, i, b, s],
                        );
                    return o.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !b && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, b && E.leftAligned, c], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Explore~bundle.Topics.62cc349a.js.map
