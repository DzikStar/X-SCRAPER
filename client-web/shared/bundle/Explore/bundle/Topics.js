"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Explore~bundle.Topics", "bundle.AudioSpaceDetail"],
    {
        740527: (e, n, t) => {
            t.d(n, { Z: () => c });
            var a = t(769471),
                o = t(934309),
                r = t(750085),
                d = t(401388),
                l = t(626421),
                i = t(497461);
            const s = (e) => {
                    const n = (0, i.$)(),
                        t = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const n = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, d.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: n };
                        })(e),
                        a = ((e, n) => {
                            const { header: t } = n;
                            if (!t || "TopicPageHeader" !== t.__typename) return;
                            const { __typename: a, facepile: o, topic: r, ...d } = t,
                                i = o && (0, l.Zn)(e, o);
                            return { ...d, topicId: (0, l.S0)(e, r), facepile: i };
                        })(n, e),
                        o = ((e, n) => {
                            const { navBar: t } = n;
                            if (!t) return {};
                            switch (t.__typename) {
                                case "TitleNavBar":
                                    return { title: t.title, subtitle: t.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, l.S0)(e, t.topic), clientEventInfo: t.clientEventInfo }, title: t.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(n, e);
                    return { globalObjects: n, pageConfiguration: { id: e.id, tabs: t, header: a, navBar: o.navBar && o.navBar, title: o.title, subtitle: o.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                c = (e) => {
                    const n = "Timeline" === (t = e.body).__typename && t.timeline ? (0, r.Z)(t.timeline) : "SegmentedTimelines" === t.__typename && t.initialTimeline?.timeline.timeline ? (0, r.Z)(t.initialTimeline.timeline.timeline) : (0, r.Z)(o.cY);
                    var t;
                    const { globalObjects: d, pageConfiguration: l } = s(e);
                    return { ...n, globalObjects: (0, a.Z)(d, n.globalObjects), pageConfiguration: l };
                };
        },
        33104: (e, n, t) => {
            t.d(n, { Z: () => o });
            t(202784);
            var a = t(325686);
            const o = (0, t(337455).Z)(a.Z);
        },
        789831: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(807896),
                o = t(202784),
                r = t(325686),
                d = t(392237),
                l = t(655352);
            const i = d.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: n, fab: t, shouldRenderFab: d = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const p = n || r.Z,
                        m = d && !(0, l.ZP)();
                    return o.createElement(p, (0, a.Z)({}, u, { style: [m && !c && i.root, s] }), e, m ? t : null);
                };
        },
        651930: (e, n, t) => {
            t.d(n, { Z: () => i });
            var a = t(202784),
                o = t(99107),
                r = t(272175),
                d = t(111677);
            const l = t.n(d)().c39b0e24,
                i = ({ deepLink: e }) => {
                    const n = l;
                    return e ? a.createElement(r.ql, null, a.createElement("meta", { content: e, property: "al:ios:url" }), a.createElement("meta", { content: o.AF, property: "al:ios:app_store_id" }), a.createElement("meta", { content: n, property: "al:ios:app_name" }), a.createElement("meta", { content: e, property: "al:android:url" }), a.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), a.createElement("meta", { content: n, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, n, t) => {
            t.d(n, { Z: () => r });
            var a = t(202784),
                o = t(272175);
            const r = (e) => {
                const { canonical: n, description: t = "", image: r, imageAlt: d, imageH: l, imageType: i, imageW: s, title: c, ttl: u, type: p } = e;
                return a.createElement(o.ql, null, p ? a.createElement("meta", { content: p, property: "og:type" }) : null, n ? a.createElement("meta", { content: n, property: "og:url" }) : null, c ? a.createElement("meta", { content: c, property: "og:title" }) : null, a.createElement("meta", { content: t, property: "og:description" }), r ? a.createElement("meta", { content: r, property: "og:image" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:type" }) : null, s ? a.createElement("meta", { content: s, property: "og:image:width" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:height" }) : null, d ? a.createElement("meta", { content: d, property: "og:image:alt" }) : null, u ? a.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        507651: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(807896),
                o = t(202784),
                r = t(107267),
                d = t(403556),
                l = t(791632);
            const i = (e) => {
                    const n = (0, r.useHistory)();
                    return o.createElement(d.Z, (0, a.Z)({}, e, { isCompact: (0, l.HD)(n) }));
                },
                s = o.memo(i);
        },
        652904: (e, n, t) => {
            t.d(n, { Z: () => c });
            var a = t(202784),
                o = t(500002),
                r = t(668214),
                d = t(997174),
                l = t(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class s extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: n },
                            location: { pathname: t, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: d },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    n.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && n.pathname === t && ((this._isInBackground = !1), (i = !0));
                    const s = o || l;
                    ((s && o !== l) || (!s && t !== r) || a !== d || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: n, updateLocation: t, updateTweetDetailNav: a } = e;
                    n.scribePageImpression(), t(n.contextualScribeNamespace, n.contextualScribeData), a(n.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, o.ZP)(i(s));
        },
        337523: (e, n, t) => {
            t.d(n, { Z: () => ye });
            var a = t(202784),
                o = t(457311),
                r = t(708852),
                d = t(108362),
                l = t(111677),
                i = t.n(l),
                s = t(769471),
                c = t(718e3),
                u = t(33104),
                p = t(789831),
                m = t(252021),
                h = t(293115),
                b = t(87063),
                g = t(652904),
                f = t(507651),
                D = t(3138),
                w = t(655352),
                y = t(503229),
                M = t(71620),
                C = t(668214);
            const E = (e, n) => n.module.selectInitialFetchStatus(e),
                I = (e, n) => n.module.selectPageConfiguration && n.module.selectPageConfiguration(e),
                A = (e, n) => {
                    const t = n.selectedTabId,
                        a = I(e, n);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === t);
                },
                k = (0, C.Z)()
                    .propsFromState(() => ({ initialFetchStatus: E, pageConfiguration: I, selectedTab: A }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class T extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: n, fetchInitial: t, pageConfiguration: a } = this.props,
                                o = a ? a.scribeConfig : void 0;
                            return t().then(({ performed: n }) => {
                                n && e.scribe({ ...this._getScribeNamespace(o), action: "get_initial" });
                            }, n(D.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: n, pageConfiguration: t, selectedTab: o } = this.props,
                                r = t?.tabs;
                            if (r && r.tabs) {
                                const d = (o && o.id) || r.initialTabId,
                                    l = t ? t.scribeConfig : void 0;
                                let i;
                                const s = r.tabs.map((t, a) => {
                                    const o = t.id === d;
                                    return (
                                        o && (i = a),
                                        {
                                            isActive: () => o,
                                            key: t.labelText,
                                            label: t.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(l), this._getScribeNamespace(t.scribeConfig)));
                                            },
                                            to: n(t.id),
                                            token: t.scribeConfig?.entityToken,
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
                    return e === b.Z.LOADED ? this._render() : null;
                }
                _buildTabNamespace(e, n) {
                    let t;
                    return e && (t = e), n && (t = { ...t, ...n }), { ...t, element: "tab", action: "navigate" };
                }
                _getScribeNamespace(e) {
                    if (e) {
                        const { entityToken: n, ...t } = e;
                        return t;
                    }
                }
            }
            const S = k((0, y.Z)(T));
            var v = t(912021),
                x = t(383675),
                N = t(611423),
                P = t(443781);
            const Z = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("icons.8"),
                        t.e("icons.15"),
                        t.e("icons.7"),
                        t.e("icons.3"),
                        t.e("icons.24"),
                        t.e("icons.12"),
                        t.e("icons.22"),
                        t.e("icons.2"),
                        t.e("icons.18"),
                        t.e("icons.9"),
                        t.e("icons.1"),
                        t.e("icons.6"),
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("icons.14"),
                        t.e("icons.5"),
                        t.e("modules.audio-6107ac1a"),
                        t.e("modules.audio-b953418a"),
                        t.e("modules.audio-7c51e6a7"),
                        t.e("modules.audio-04db59e9"),
                        t.e("modules.audio-76583d6c"),
                        t.e("modules.audio-b7a8a5fb"),
                        t.e("modules.audio-51f6e793"),
                        t.e("modules.audio-e019dbda"),
                        t.e("modules.audio-262c94d4"),
                        t.e("modules.audio-c6fe4ea4"),
                        t.e("icons.21"),
                        t.e("icons.16"),
                        t.e("icons.28"),
                        t.e("icons.17"),
                        t.e("icons.27"),
                        t.e("icons.19"),
                        t.e("icons.0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        t.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        t.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        t.e("shared~bundle.News~ondemand.News~loader.ExploreNews"),
                        t.e("loader.ExploreNews"),
                    ]).then(t.bind(t, 568527)),
            });
            var B = t(810641);
            const _ = (e, n) => n.initialModule.selectPageConfiguration && n.initialModule.selectPageConfiguration(e),
                R = (e, n) => {
                    const t = n.selectedTabId,
                        a = _(e, n);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === t);
                },
                L = (0, C.Z)()
                    .propsFromState(() => ({ pageConfiguration: _, selectedTab: R }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class G extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: n, selectedTab: t } = this.props,
                                a = t?.scribeConfig || n?.scribeConfig;
                            if (a) {
                                const { entityToken: e, ...n } = a;
                                return n;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, v.Z)((e, n, t, a) => {
                            if (e?.id !== n) {
                                if (e?.urtEndpoint) return (0, N.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: a });
                                if (e?.graphQLTimelineId) return (0, x.R)(e.graphQLTimelineId);
                            }
                            return t;
                        })),
                        (this._getRefreshIntervalSecForCurrentTab = () => {
                            const { pageConfiguration: e, selectedTab: n } = this.props,
                                t = e?.tabs?.initialTabId;
                            if (n) return n.refreshIntervalSec;
                            if (t) {
                                const n = e?.tabs?.tabs.find((e) => t === e.id);
                                return n?.refreshIntervalSec;
                            }
                        });
                }
                render() {
                    const { entryConfiguration: e, initialModule: n, pageConfiguration: t, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: d, renderUnavailable: l, selectedTab: i, timelinePrefix: s, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return a.createElement(Z, null);
                    const p = this._getModule(i, t?.tabs?.initialTabId, n, s),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        b = m ? 1e3 * m : void 0;
                    return a.createElement(h.nO, { namespace: this._getTimelineNamespace() }, a.createElement(B.Z, { entryConfiguration: e, module: p, pollingIntervalMsOverride: b, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: d, renderUnavailable: l, title: c, withoutHeadroom: u }));
                }
            }
            G.contextType = P.rC;
            const F = L(G);
            var H = t(929482),
                O = t(335632),
                W = t(325686),
                U = t(392237),
                $ = t(950708),
                z = t(187669),
                j = t(725516),
                q = t(942893);
            const V = (e, n) => {
                const t = (0, j.z)(),
                    { component: o, element: r } = n || {},
                    d = a.useMemo(() => ({ items: [q.Z.forTopic(e, n)] }), [n, e]);
                return (
                    (0, z.q)(() => {
                        t.scribe({ component: o, element: r, action: "impression", data: d });
                    }),
                    { namespace: { component: o, element: r }, data: d }
                );
            };
            function Q(e) {
                const {
                        header: { clientEventInfo: n, displayType: t, facepile: o, landingContext: r, topicId: d },
                        onHeaderVisible: l,
                    } = e,
                    { data: i, namespace: s } = V(d, n);
                return a.createElement(W.Z, { style: K.root }, a.createElement(h.nO, { data: i, namespace: s }, a.createElement($.Z, { displayType: t, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => l(!e), topicId: d, topicLandingContext: r, withDivider: !0 })));
            }
            const K = U.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var Y = t(24949);
            const J = (e, n) => n.module.selectPageConfiguration(e),
                X = (e, n) => n.module.selectInitialFetchStatus(e),
                ee = (0, Y.P1)(J, X, (e, n) => n !== b.Z.LOADED || (!!e && !!e.tabs)),
                ne = (0, C.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: J, initialFetchStatus: X }))
                    .withAnalytics();
            var te = t(688715),
                ae = t(815858),
                oe = t(651930),
                re = t(572067),
                de = t(265196),
                le = t(421575),
                ie = t(907552),
                se = t(466380);
            const ce = (e, n) => {
                    const t = n.navBar.topicId ? n.navBar.topicId : "";
                    return se.Z.select(e, t);
                },
                ue = (0, C.Z)().propsFromState(() => ({ topic: ce })),
                pe = (e) => (0, te.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                he = i().ed88e742;
            const be = U.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                ge = ue(function (e) {
                    const n = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: t,
                            navBar: { clientEventInfo: o },
                            pageNamespace: r,
                            topic: d,
                            withAppLinks: l,
                            withOpenGraphMeta: i,
                        } = e,
                        { featureSwitches: c } = a.useContext(P.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: p, namespace: m } = V(n, o),
                        b = (0, s.Z)({}, r, m);
                    return d ? a.createElement(h.nO, { data: p, namespace: b }, a.createElement(a.Fragment, null, i ? a.createElement(re.Z, { canonical: pe(n), description: d.description, title: d.name, type: "article" }) : null, l ? a.createElement(oe.Z, { deepLink: me(n) }) : null, a.createElement(W.Z, { style: be.rightControl }, a.createElement(W.Z, { style: be.followButtonContainer }, a.createElement(ae.Z, { animateMount: !0, show: t, type: "fade" }, a.createElement(de.ZP, { size: "medium", textMode: le.q.FollowTopic, topic: d }))), u ? a.createElement(ie.ZP, { copyLinkShareLabel: he, scribeNamespace: b, url: pe(n) }) : null))) : null;
                }),
                fe = i().e9f1fbcc,
                De = a.createElement(c.Z, null),
                we = (e) => {
                    const { TabBar: n, backLocation: t, documentTitle: o, entryConfiguration: l, fab: i, getTabLink: c, hasTabNavigation: f, history: D, initialFetchStatus: w, initialPageNamespace: y, logoButton: M, module: C, onBackClick: E, pageConfiguration: I, prerollDisplayLocation: A, renderEmptyState: k, renderUnavailable: T, rightControl: v, selectedTabId: x, sidebarContent: N, timelinePrefix: P, title: Z, withAppLinks: B, withBottomLoginSignupBar: _, withDeferredView: R, withOpenGraphMeta: L, withSearchBox: G, withTweetButton: O } = e,
                        W = (0, r.tj)(),
                        U = a.useMemo(() => ({ ...l, ...(0, H.Z)({ isLegacy: !0, isWide: W }) }), [l, W]),
                        [$, z] = a.useState(!0),
                        { header: j, navBar: q, subtitle: V, title: K } = I || {},
                        Y = w === b.Z.LOADED ? K || Z : "",
                        J = ((e, n, t) => {
                            const a = n?.scribeConfig,
                                { entityToken: o, ...r } = a || {},
                                d = n?.tabs,
                                l = e || d?.initialTabId,
                                i = d?.tabs.find((e) => e.id === l),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, s.Z)({}, t, r, u);
                        })(x, I, y),
                        X = j ? a.createElement(Q, { header: j, onHeaderVisible: z }) : null,
                        ee = q ? a.createElement(ge, { isHeaderOffscreen: !$, navBar: q, pageNamespace: J, withAppLinks: B, withOpenGraphMeta: L }) : null,
                        ne = R ? u.Z : a.Fragment,
                        te = a.createElement(a.Fragment, null, X, a.createElement(ne, null, a.createElement(F, { entryConfiguration: U, initialModule: C, prerollDisplayLocation: A, renderEmptyState: k, renderUnavailable: T, selectedTabId: x, timelinePrefix: P, title: Z, withoutHeadroom: !0 }))),
                        ae = i ? a.createElement(p.Z, { component: d.Z, fab: i }, te) : te,
                        oe = c && f ? a.createElement(S, { getTabLink: c, module: C, selectedTabId: x }) : void 0;
                    return a.createElement(h.nO, { namespace: J }, a.createElement(g.Z, null, a.createElement(m.Z, { TabBar: n, backLocation: t, documentTitle: o, history: D, logoButton: M, onBackClick: E, primaryContent: ae, rightControl: ee || v, secondaryBar: oe, sidebarContent: N, subtitle: V, title: X && $ ? Z : Y, withBottomLoginSignupBar: _, withSearchBox: G, withTweetButton: O })));
                };
            we.defaultProps = { entryConfiguration: (0, O.G)({}), renderEmptyState: () => a.createElement(o.Z, { header: fe }), sidebarContent: De, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const ye = ne(we);
        },
        337455: (e, n, t) => {
            t.d(n, { Z: () => i });
            var a = t(202784),
                o = t(411916),
                r = t.n(o),
                d = t(373463),
                l = t.n(d);
            function i(e) {
                class n extends a.Component {
                    constructor(e, n) {
                        super(e, n), (this.state = { shouldRender: !1 }), (this._mounted = !0);
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
                return l()(n, e);
            }
        },
        553093: (e, n, t) => {
            t.d(n, { Sz: () => a });
            const a = (e) => {
                    const n = (JSON.stringify(e) || "").split("");
                    n.sort();
                    const t = n.join("");
                    return o(t, 0).toString();
                },
                o = (e, n) => {
                    const t = "string" == typeof e ? e : String(e);
                    let a = n;
                    for (let e = 0; e < t.length; e++) {
                        (a = (a << 5) - a + t.charCodeAt(e)), (a |= 0);
                    }
                    return a;
                };
        },
        383675: (e, n, t) => {
            t.d(n, { R: () => i, Z: () => l });
            var a = t(503768),
                o = t(644829),
                r = t(750085),
                d = t(218951);
            const l = ({ endpointParams: e, endpointUrl: n, isUserRefreshable: t, timelineId: a }) => (0, d.Z)({ timelineId: a, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGeneric, getEndpointParams: ({ count: t, cursor: a }) => ({ ...e, cursor: "string" == typeof a ? a : void 0, count: t, endpointUrl: n }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, n) => (0, d.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: n, cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, count: n, timelineId: e }) }, formatResponse: r.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        611423: (e, n, t) => {
            t.d(n, { Z: () => r });
            var a = t(553093),
                o = t(383675);
            const r = ({ timelinePrefix: e = "generic-timeline-", urtUrl: n }) => {
                const { url: t, urtEndpointOptions: r } = n,
                    { cacheId: d, requestParams: l, timeline: i } = r || {};
                return i?.id ? (0, o.R)(i.id) : (0, o.Z)({ timelineId: d || `${e}${(0, a.Sz)(n)}`, endpointUrl: t, endpointParams: l || {} });
            };
        },
        403556: (e, n, t) => {
            t.d(n, { Z: () => A });
            var a = t(807896),
                o = t(202784),
                r = t(194504),
                d = t(235902),
                l = t(392237),
                i = t(325686),
                s = t(111677),
                c = t.n(s),
                u = t(912021),
                p = t(516951),
                m = t(731708),
                h = t(310088),
                b = t(175993),
                g = t(58881),
                f = t(530732);
            const D = c().d2414d31,
                w = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class M extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, n) => {
                            const { pathname: t, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: t, query: a, method: "push", state: { ...o, lockScroll: n } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, n, t, a) => {
                            const o = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return t || a ? (e || n ? o : r) : e ? o : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: n } = this.props;
                            n && n(e);
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
                    const { Icon: e, "aria-label": n, badgeCount: t, badgePip: a, children: r, color: d, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: M, style: E, to: I } = this.props,
                        { location: A } = this.state,
                        k = I ? this._getMemoizedLink(I, M) : void 0,
                        T = s ? s(I) : A?.pathname === k?.pathname,
                        S = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        v = b ? "medium" : T ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": n, "aria-selected": T, focusable: !!T, interactiveStyles: S, link: k, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? C.pill : C.link, u && T ? C.active : null, c ? (u ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, E], withoutInteractiveStyles: b || u }, ({ isFocused: n, isHovered: s }) => o.createElement(i.Z, { style: u && C.flexGrow }, o.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(T, s, b, u) }, c && C.compactText, b && n && C.focusedText], weight: v }, e && o.createElement(e, { style: C.icon }), r, b || u ? null : o.createElement(i.Z, { style: T && [C.border, { backgroundColor: l.default.theme.colors[d] }] })), t ? o.createElement(h.Z, { count: t, standalone: !0, style: [C.badge, t >= 10 && C.multiDigitBadge, t >= 20 && C.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: D, withBorder: !1 }) : a ? o.createElement(h.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (M.contextType = b.Z), (M.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                E = M,
                I = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                A = ({ alignFirstItem: e, "aria-label": n, isCompact: t, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = d.ZP.useProps(),
                        h = m() && !l,
                        b = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: n, viewType: r, ...d }, s) => {
                                    const c = h ? [I.linkRedesign, 0 === s && I.firstLinkRedesign, e && 0 === s && I.withNoPaddingStart] : void 0;
                                    return o.createElement(E, (0, a.Z)({ viewType: r }, d, { isCompact: t, isPillLink: l, isRoundedRect: i, isWebRedesign: h, style: c }), n);
                                }),
                            [e, t, l, i, h, s],
                        );
                    return o.createElement(r.Z, { "aria-label": n, buttonsContainerStyle: l && I.gap, childrenStyle: !h && I.flexGrow, key: p, style: [l ? null : I.segmentedControl, h && I.leftAligned, c], visibleItemIndex: u }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Explore~bundle.Topics.95b6ef3a.js.map
