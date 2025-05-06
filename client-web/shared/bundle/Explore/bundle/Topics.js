"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Explore~bundle.Topics", "bundle.AudioSpaceDetail"],
    {
        740527: (e, a, n) => {
            n.d(a, { Z: () => c });
            var t = n(769471),
                o = n(934309),
                d = n(750085),
                r = n(401388),
                l = n(626421),
                i = n(497461);
            const s = (e) => {
                    const a = (0, i.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const a = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, r.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: a };
                        })(e),
                        t = ((e, a) => {
                            const { header: n } = a;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: t, facepile: o, topic: d, ...r } = n,
                                i = o && (0, l.Zn)(e, o);
                            return { ...r, topicId: (0, l.S0)(e, d), facepile: i };
                        })(a, e),
                        o = ((e, a) => {
                            const { navBar: n } = a;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, l.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(a, e);
                    return { globalObjects: a, pageConfiguration: { id: e.id, tabs: n, header: t, navBar: o.navBar && o.navBar, title: o.title, subtitle: o.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                c = (e) => {
                    const a = "Timeline" === (n = e.body).__typename && n.timeline ? (0, d.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, d.Z)(n.initialTimeline.timeline.timeline) : (0, d.Z)(o.cY);
                    var n;
                    const { globalObjects: r, pageConfiguration: l } = s(e);
                    return { ...a, globalObjects: (0, t.Z)(r, a.globalObjects), pageConfiguration: l };
                };
        },
        33104: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            var t = n(325686);
            const o = (0, n(337455).Z)(t.Z);
        },
        789831: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(807896),
                o = n(202784),
                d = n(325686),
                r = n(392237),
                l = n(655352);
            const i = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: a, fab: n, shouldRenderFab: r = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const p = a || d.Z,
                        m = r && !(0, l.ZP)();
                    return o.createElement(p, (0, t.Z)({}, u, { style: [m && !c && i.root, s] }), e, m ? n : null);
                };
        },
        651930: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(202784),
                o = n(99107),
                d = n(272175),
                r = n(674132);
            const l = n.n(r)().c39b0e24,
                i = ({ deepLink: e }) => {
                    const a = l;
                    return e ? t.createElement(d.ql, null, t.createElement("meta", { content: e, property: "al:ios:url" }), t.createElement("meta", { content: o.AF, property: "al:ios:app_store_id" }), t.createElement("meta", { content: a, property: "al:ios:app_name" }), t.createElement("meta", { content: e, property: "al:android:url" }), t.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), t.createElement("meta", { content: a, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, a, n) => {
            n.d(a, { Z: () => d });
            var t = n(202784),
                o = n(272175);
            const d = (e) => {
                const { canonical: a, description: n = "", image: d, imageAlt: r, imageH: l, imageType: i, imageW: s, title: c, ttl: u, type: p } = e;
                return t.createElement(o.ql, null, p ? t.createElement("meta", { content: p, property: "og:type" }) : null, a ? t.createElement("meta", { content: a, property: "og:url" }) : null, c ? t.createElement("meta", { content: c, property: "og:title" }) : null, t.createElement("meta", { content: n, property: "og:description" }), d ? t.createElement("meta", { content: d, property: "og:image" }) : null, i ? t.createElement("meta", { content: i, property: "og:image:type" }) : null, s ? t.createElement("meta", { content: s, property: "og:image:width" }) : null, l ? t.createElement("meta", { content: l, property: "og:image:height" }) : null, r ? t.createElement("meta", { content: r, property: "og:image:alt" }) : null, u ? t.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        507651: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(807896),
                o = n(202784),
                d = n(107267),
                r = n(403556),
                l = n(791632);
            const i = (e) => {
                    const a = (0, d.useHistory)();
                    return o.createElement(r.Z, (0, t.Z)({}, e, { isCompact: (0, l.HD)(a) }));
                },
                s = o.memo(i);
        },
        652904: (e, a, n) => {
            n.d(a, { Z: () => c });
            var t = n(202784),
                o = n(500002),
                d = n(668214),
                r = n(997174),
                l = n(118823);
            const i = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class s extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: n, search: t },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: d, search: r },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    a.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && a.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const s = o || l;
                    ((s && o !== l) || (!s && n !== d) || t !== r || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: n, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), n(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, o.ZP)(i(s));
        },
        337523: (e, a, n) => {
            n.d(a, { Z: () => ye });
            var t = n(202784),
                o = n(457311),
                d = n(708852),
                r = n(108362),
                l = n(674132),
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
            const S = (e, a) => a.module.selectInitialFetchStatus(e),
                A = (e, a) => a.module.selectPageConfiguration && a.module.selectPageConfiguration(e),
                k = (e, a) => {
                    const n = a.selectedTabId,
                        t = A(e, a);
                    return t && t.tabs && t.tabs.tabs.find((e) => e.id === n);
                },
                I = (0, C.Z)()
                    .propsFromState(() => ({ initialFetchStatus: S, pageConfiguration: A, selectedTab: k }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class T extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: a, fetchInitial: n, pageConfiguration: t } = this.props,
                                o = t ? t.scribeConfig : void 0;
                            return n().then(({ performed: a }) => {
                                a && e.scribe({ ...this._getScribeNamespace(o), action: "get_initial" });
                            }, a(D.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: a, pageConfiguration: n, selectedTab: o } = this.props,
                                d = n?.tabs;
                            if (d && d.tabs) {
                                const r = (o && o.id) || d.initialTabId,
                                    l = n ? n.scribeConfig : void 0;
                                let i;
                                const s = d.tabs.map((n, t) => {
                                    const o = n.id === r;
                                    return (
                                        o && (i = t),
                                        {
                                            isActive: () => o,
                                            key: n.labelText,
                                            label: n.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(l), this._getScribeNamespace(n.scribeConfig)));
                                            },
                                            to: a(n.id),
                                            token: n.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return t.createElement(t.Fragment, null, t.createElement(f.Z, { alignFirstItem: (0, w.ZP)(), links: s, visibleItemIndex: i }));
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
                _buildTabNamespace(e, a) {
                    let n;
                    return e && (n = e), a && (n = { ...n, ...a }), { ...n, element: "tab", action: "navigate" };
                }
                _getScribeNamespace(e) {
                    if (e) {
                        const { entityToken: a, ...n } = e;
                        return n;
                    }
                }
            }
            const N = I((0, y.Z)(T));
            var v = n(912021),
                E = n(383675),
                P = n(611423),
                B = n(443781);
            const _ = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.15"),
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
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
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
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-df6c0f5f"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-962a9654"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-d35c1f9c"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ff8476c2"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-6e668ce9"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-9fd4b2af"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ad2ef762"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-b67eba62"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ad6d127d"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-829eb18b"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-4fec5af7"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-898c8d51"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-b92a6472"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-67dc3650"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ed7b0ce8"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-7ba852e1"),
                        n.e("shared~bundle.News~ondemand.News~loader.ExploreNews"),
                        n.e("loader.ExploreNews"),
                    ]).then(n.bind(n, 568527)),
            });
            var Z = n(810641);
            const x = (e, a) => a.initialModule.selectPageConfiguration && a.initialModule.selectPageConfiguration(e),
                R = (e, a) => {
                    const n = a.selectedTabId,
                        t = x(e, a);
                    return t && t.tabs && t.tabs.tabs.find((e) => e.id === n);
                },
                L = (0, C.Z)()
                    .propsFromState(() => ({ pageConfiguration: x, selectedTab: R }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class G extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: a, selectedTab: n } = this.props,
                                t = n?.scribeConfig || a?.scribeConfig;
                            if (t) {
                                const { entityToken: e, ...a } = t;
                                return a;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, v.Z)((e, a, n, t) => {
                            if (e?.id !== a) {
                                if (e?.urtEndpoint) return (0, P.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: t });
                                if (e?.graphQLTimelineId) return (0, E.R)(e.graphQLTimelineId);
                            }
                            return n;
                        })),
                        (this._getRefreshIntervalSecForCurrentTab = () => {
                            const { pageConfiguration: e, selectedTab: a } = this.props,
                                n = e?.tabs?.initialTabId;
                            if (a) return a.refreshIntervalSec;
                            if (n) {
                                const a = e?.tabs?.tabs.find((e) => n === e.id);
                                return a?.refreshIntervalSec;
                            }
                        });
                }
                render() {
                    const { entryConfiguration: e, initialModule: a, pageConfiguration: n, prerollDisplayLocation: o, refreshControl: d, renderEmptyState: r, renderUnavailable: l, selectedTab: i, timelinePrefix: s, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return t.createElement(_, null);
                    const p = this._getModule(i, n?.tabs?.initialTabId, a, s),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        h = m ? 1e3 * m : void 0;
                    return t.createElement(b.nO, { namespace: this._getTimelineNamespace() }, t.createElement(Z.Z, { entryConfiguration: e, module: p, pollingIntervalMsOverride: h, prerollDisplayLocation: o, refreshControl: d, renderEmptyState: r, renderUnavailable: l, title: c, withoutHeadroom: u }));
                }
            }
            G.contextType = B.rC;
            const F = L(G);
            var H = n(929482),
                O = n(335632),
                W = n(325686),
                $ = n(392237),
                z = n(950708),
                U = n(187669),
                j = n(725516),
                q = n(942893);
            const V = (e, a) => {
                const n = (0, j.z)(),
                    { component: o, element: d } = a || {},
                    r = t.useMemo(() => ({ items: [q.Z.forTopic(e, a)] }), [a, e]);
                return (
                    (0, U.q)(() => {
                        n.scribe({ component: o, element: d, action: "impression", data: r });
                    }),
                    { namespace: { component: o, element: d }, data: r }
                );
            };
            function Q(e) {
                const {
                        header: { clientEventInfo: a, displayType: n, facepile: o, landingContext: d, topicId: r },
                        onHeaderVisible: l,
                    } = e,
                    { data: i, namespace: s } = V(r, a);
                return t.createElement(W.Z, { style: K.root }, t.createElement(b.nO, { data: i, namespace: s }, t.createElement(z.Z, { displayType: n, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => l(!e), topicId: r, topicLandingContext: d, withDivider: !0 })));
            }
            const K = $.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var Y = n(24949);
            const J = (e, a) => a.module.selectPageConfiguration(e),
                X = (e, a) => a.module.selectInitialFetchStatus(e),
                ee = (0, Y.P1)(J, X, (e, a) => a !== h.Z.LOADED || (!!e && !!e.tabs)),
                ae = (0, C.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var ne = n(688715),
                te = n(815858),
                oe = n(651930),
                de = n(572067),
                re = n(265196),
                le = n(421575),
                ie = n(907552),
                se = n(466380);
            const ce = (e, a) => {
                    const n = a.navBar.topicId ? a.navBar.topicId : "";
                    return se.Z.select(e, n);
                },
                ue = (0, C.Z)().propsFromState(() => ({ topic: ce })),
                pe = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                be = i().ed88e742;
            const he = $.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                ge = ue(function (e) {
                    const a = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: o },
                            pageNamespace: d,
                            topic: r,
                            withAppLinks: l,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = t.useContext(B.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: p, namespace: m } = V(a, o),
                        h = (0, s.Z)({}, d, m);
                    return r ? t.createElement(b.nO, { data: p, namespace: h }, t.createElement(t.Fragment, null, i ? t.createElement(de.Z, { canonical: pe(a), description: r.description, title: r.name, type: "article" }) : null, l ? t.createElement(oe.Z, { deepLink: me(a) }) : null, t.createElement(W.Z, { style: he.rightControl }, t.createElement(W.Z, { style: he.followButtonContainer }, t.createElement(te.Z, { animateMount: !0, show: n, type: "fade" }, t.createElement(re.ZP, { size: "medium", textMode: le.q.FollowTopic, topic: r }))), u ? t.createElement(ie.ZP, { copyLinkShareLabel: be, scribeNamespace: h, url: pe(a) }) : null))) : null;
                }),
                fe = i().e9f1fbcc,
                De = t.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: a, backLocation: n, documentTitle: o, entryConfiguration: l, fab: i, getTabLink: c, hasTabNavigation: f, history: D, initialFetchStatus: w, initialPageNamespace: y, logoButton: M, module: C, onBackClick: S, pageConfiguration: A, prerollDisplayLocation: k, renderEmptyState: I, renderUnavailable: T, rightControl: v, selectedTabId: E, sidebarContent: P, timelinePrefix: B, title: _, withAppLinks: Z, withBottomLoginSignupBar: x, withDeferredView: R, withOpenGraphMeta: L, withSearchBox: G, withTweetButton: O } = e,
                        W = (0, d.tj)(),
                        $ = t.useMemo(() => ({ ...l, ...(0, H.Z)({ isLegacy: !0, isWide: W }) }), [l, W]),
                        [z, U] = t.useState(!0),
                        { header: j, navBar: q, subtitle: V, title: K } = A || {},
                        Y = w === h.Z.LOADED ? K || _ : "",
                        J = ((e, a, n) => {
                            const t = a?.scribeConfig,
                                { entityToken: o, ...d } = t || {},
                                r = a?.tabs,
                                l = e || r?.initialTabId,
                                i = r?.tabs.find((e) => e.id === l),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, s.Z)({}, n, d, u);
                        })(E, A, y),
                        X = j ? t.createElement(Q, { header: j, onHeaderVisible: U }) : null,
                        ee = q ? t.createElement(ge, { isHeaderOffscreen: !z, navBar: q, pageNamespace: J, withAppLinks: Z, withOpenGraphMeta: L }) : null,
                        ae = R ? u.Z : t.Fragment,
                        ne = t.createElement(t.Fragment, null, X, t.createElement(ae, null, t.createElement(F, { entryConfiguration: $, initialModule: C, prerollDisplayLocation: k, renderEmptyState: I, renderUnavailable: T, selectedTabId: E, timelinePrefix: B, title: _, withoutHeadroom: !0 }))),
                        te = i ? t.createElement(p.Z, { component: r.Z, fab: i }, ne) : ne,
                        oe = c && f ? t.createElement(N, { getTabLink: c, module: C, selectedTabId: E }) : void 0;
                    return t.createElement(b.nO, { namespace: J }, t.createElement(g.Z, null, t.createElement(m.Z, { TabBar: a, backLocation: n, documentTitle: o, history: D, logoButton: M, onBackClick: S, primaryContent: te, rightControl: ee || v, secondaryBar: oe, sidebarContent: P, subtitle: V, title: X && z ? _ : Y, withBottomLoginSignupBar: x, withSearchBox: G, withTweetButton: O })));
                };
            we.defaultProps = { entryConfiguration: (0, O.G)({}), renderEmptyState: () => t.createElement(o.Z, { header: fe }), sidebarContent: De, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const ye = ae(we);
        },
        337455: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(202784),
                o = n(411916),
                d = n.n(o),
                r = n(373463),
                l = n.n(r);
            function i(e) {
                class a extends t.Component {
                    constructor(e, a) {
                        super(e, a), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        d()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? t.createElement(e, this.props) : null;
                    }
                }
                return l()(a, e);
            }
        },
        553093: (e, a, n) => {
            n.d(a, { Sz: () => t });
            const t = (e) => {
                    const a = (JSON.stringify(e) || "").split("");
                    a.sort();
                    const n = a.join("");
                    return o(n, 0).toString();
                },
                o = (e, a) => {
                    const n = "string" == typeof e ? e : String(e);
                    let t = a;
                    for (let e = 0; e < n.length; e++) {
                        (t = (t << 5) - t + n.charCodeAt(e)), (t |= 0);
                    }
                    return t;
                };
        },
        611423: (e, a, n) => {
            n.d(a, { Z: () => d });
            var t = n(553093),
                o = n(383675);
            const d = ({ timelinePrefix: e = "generic-timeline-", urtUrl: a }) => {
                const { url: n, urtEndpointOptions: d } = a,
                    { cacheId: r, requestParams: l, timeline: i } = d || {};
                return i?.id ? (0, o.R)(i.id) : (0, o.Z)({ timelineId: r || `${e}${(0, t.Sz)(a)}`, endpointUrl: n, endpointParams: l || {} });
            };
        },
        403556: (e, a, n) => {
            n.d(a, { Z: () => k });
            var t = n(807896),
                o = n(202784),
                d = n(194504),
                r = n(235902),
                l = n(392237),
                i = n(325686),
                s = n(674132),
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
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: n, query: t, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: t, method: "push", state: { ...o, lockScroll: a } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, n, t) => {
                            const o = l.default.theme.colors.text,
                                d = l.default.theme.colors.gray700;
                            return n || t ? (e || a ? o : d) : e ? o : d;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: a } = this.props;
                            a && a(e);
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
                    const { Icon: e, "aria-label": a, badgeCount: n, badgePip: t, children: d, color: r, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: M, style: S, to: A } = this.props,
                        { location: k } = this.state,
                        I = A ? this._getMemoizedLink(A, M) : void 0,
                        T = s ? s(A) : k?.pathname === I?.pathname,
                        N = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        v = h ? "medium" : T ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": a, "aria-selected": T, focusable: !!T, interactiveStyles: N, link: I, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? C.pill : C.link, u && T ? C.active : null, c ? (u ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, S], withoutInteractiveStyles: h || u }, ({ isFocused: a, isHovered: s }) => o.createElement(i.Z, { style: u && C.flexGrow }, o.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(T, s, h, u) }, c && C.compactText, h && a && C.focusedText], weight: v }, e && o.createElement(e, { style: C.icon }), d, h || u ? null : o.createElement(i.Z, { style: T && [C.border, { backgroundColor: l.default.theme.colors[r] }] })), n ? o.createElement(b.Z, { count: n, standalone: !0, style: [C.badge, n >= 10 && C.multiDigitBadge, n >= 20 && C.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: D, withBorder: !1 }) : t ? o.createElement(b.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                S = M,
                A = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": a, isCompact: n, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        b = m() && !l,
                        h = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: a, viewType: d, ...r }, s) => {
                                    const c = b ? [A.linkRedesign, 0 === s && A.firstLinkRedesign, e && 0 === s && A.withNoPaddingStart] : void 0;
                                    return o.createElement(S, (0, t.Z)({ viewType: d }, r, { isCompact: n, isPillLink: l, isRoundedRect: i, isWebRedesign: b, style: c }), a);
                                }),
                            [e, n, l, i, b, s],
                        );
                    return o.createElement(d.Z, { "aria-label": a, buttonsContainerStyle: l && A.gap, childrenStyle: !b && A.flexGrow, key: p, style: [l ? null : A.segmentedControl, b && A.leftAligned, c], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Explore~bundle.Topics.ac98b78a.js.map
