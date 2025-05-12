"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Topics", "bundle.AudioSpaceDetail"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(769471),
                o = n(934309),
                r = n(750085),
                i = n(401388),
                d = n(626421),
                l = n(497461);
            const s = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, i.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        a = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: a, facepile: o, topic: r, ...i } = n,
                                l = o && (0, d.Zn)(e, o);
                            return { ...i, topicId: (0, d.S0)(e, r), facepile: l };
                        })(t, e),
                        o = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, d.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: a, navBar: o.navBar && o.navBar, title: o.title, subtitle: o.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                c = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, r.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, r.Z)(n.initialTimeline.timeline.timeline) : (0, r.Z)(o.cY);
                    var n;
                    const { globalObjects: i, pageConfiguration: d } = s(e);
                    return { ...t, globalObjects: (0, a.Z)(i, t.globalObjects), pageConfiguration: d };
                };
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => u });
            var a = n(202784),
                o = n(614983),
                r = n.n(o),
                i = n(325686),
                d = n(370006),
                l = n(786998),
                s = n(929028),
                c = n(386802);
            function p(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: o, hideBackButton: r, isFullWidth: i, isLarge: s, leftControl: c, middleControl: u, position: m, rightControl: h, secondaryBar: b, style: g, subtitle: f, title: w, titleDomId: y, titleIconCell: E, titleIconCellSize: D, withBackground: C, withWideContainer: T } = this.props,
                        { isModal: k } = this.context,
                        M = r ? c : a.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!C, k, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: s, leftControl: M, middleControl: u, position: p(m, k, o), rightControl: h, style: g, subtitle: f, title: w, titleDomId: y, titleIconCell: E, titleIconCellSize: D, withBackground: _, withWideContainer: T }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = s.Z.getBackgroundStyles();
                    return t ? a.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
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
                i = n(392237),
                d = n(655352);
            const l = i.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: t, fab: n, shouldRenderFab: i = !0, style: s, withoutBottomPadding: c, ...p }) => {
                    const u = t || r.Z,
                        m = i && !(0, d.ZP)();
                    return o.createElement(u, (0, a.Z)({}, p, { style: [m && !c && l.root, s] }), e, m ? n : null);
                };
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => b, w: () => m });
            var a = n(202784),
                o = n(325686),
                r = n(108362),
                i = n(386802),
                d = n(392237),
                l = n(652904),
                s = n(555079),
                c = n(625661),
                p = n(449067),
                u = n(715601);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: r, centerTitle: i, hideBackButton: d, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: w, title: y } = this.props,
                                { isModal: E } = this.context;
                            return a.createElement(o.Z, { style: E ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, a.createElement(c.ZP, { backButtonType: n || (E ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !E, hideBackButton: d, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [E && h.appBarModal, t], subtitle: w, title: y, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: i, documentTitle: d, isFullWidth: s, isLarge: c, renderHeader: m, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        w = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(p.Z.Configure, { documentTitle: d, headerless: !0, title: b }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, f && h.rootModal] }, !f && w, a.createElement(r.Z, { isFullWidth: s, isLarge: c, style: [h.container, f && h.containerModal, i] }, f ? a.createElement(u.Z, { style: h.viewport }, w, n) : n), t ? a.createElement(o.Z, { style: [h.bottomBarModal, !f && !g && h.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: s, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const h = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(99107),
                r = n(272175),
                i = n(674132);
            const d = n.n(i)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = d;
                    return e ? a.createElement(r.ql, null, a.createElement("meta", { content: e, property: "al:ios:url" }), a.createElement("meta", { content: o.AF, property: "al:ios:app_store_id" }), a.createElement("meta", { content: t, property: "al:ios:app_name" }), a.createElement("meta", { content: e, property: "al:android:url" }), a.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), a.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        983389: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                o = n(272175);
            const r = ({ description: e }) => a.createElement(o.ql, null, a.createElement("meta", { content: e, name: "description" }));
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                o = n(272175);
            const r = (e) => {
                const { canonical: t, description: n = "", image: r, imageAlt: i, imageH: d, imageType: l, imageW: s, title: c, ttl: p, type: u } = e;
                return a.createElement(o.ql, null, u ? a.createElement("meta", { content: u, property: "og:type" }) : null, t ? a.createElement("meta", { content: t, property: "og:url" }) : null, c ? a.createElement("meta", { content: c, property: "og:title" }) : null, a.createElement("meta", { content: n, property: "og:description" }), r ? a.createElement("meta", { content: r, property: "og:image" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:type" }) : null, s ? a.createElement("meta", { content: s, property: "og:image:width" }) : null, d ? a.createElement("meta", { content: d, property: "og:image:height" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:alt" }) : null, p ? a.createElement("meta", { content: p, property: "og:ttl" }) : null);
            };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(807896),
                o = n(202784),
                r = n(107267),
                i = n(403556),
                d = n(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return o.createElement(i.Z, (0, a.Z)({}, e, { isCompact: (0, d.HD)(t) }));
                },
                s = o.memo(l);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                o = n(500002),
                r = n(668214),
                i = n(997174),
                d = n(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: i.NH }))
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
                            location: { pathname: r, search: i },
                            locationKey: d,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const s = o || d;
                    ((s && o !== d) || (!s && n !== r) || a !== i || l) && this._performPageUpdates(this.props);
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
            const c = (0, o.ZP)(l(s));
        },
        337523: (e, t, n) => {
            n.d(t, { Z: () => Ee });
            var a = n(202784),
                o = n(457311),
                r = n(708852),
                i = n(108362),
                d = n(674132),
                l = n.n(d),
                s = n(769471),
                c = n(718e3),
                p = n(33104),
                u = n(789831),
                m = n(252021),
                h = n(293115),
                b = n(87063),
                g = n(652904),
                f = n(507651),
                w = n(3138),
                y = n(655352),
                E = n(503229),
                D = n(71620),
                C = n(668214);
            const T = (e, t) => t.module.selectInitialFetchStatus(e),
                k = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                M = (e, t) => {
                    const n = t.selectedTabId,
                        a = k(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                _ = (0, C.Z)()
                    .propsFromState(() => ({ initialFetchStatus: T, pageConfiguration: k, selectedTab: M }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, D.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class S extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: n, pageConfiguration: a } = this.props,
                                o = a ? a.scribeConfig : void 0;
                            return n().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(o), action: "get_initial" });
                            }, t(w.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: n, selectedTab: o } = this.props,
                                r = n?.tabs;
                            if (r && r.tabs) {
                                const i = (o && o.id) || r.initialTabId,
                                    d = n ? n.scribeConfig : void 0;
                                let l;
                                const s = r.tabs.map((n, a) => {
                                    const o = n.id === i;
                                    return (
                                        o && (l = a),
                                        {
                                            isActive: () => o,
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
                                return a.createElement(a.Fragment, null, a.createElement(f.Z, { alignFirstItem: (0, y.ZP)(), links: s, visibleItemIndex: l }));
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
            const I = _((0, E.Z)(S));
            var Z = n(912021),
                v = n(383675),
                N = n(611423),
                P = n(443781);
            const x = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.24"),
                        n.e("icons.29"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
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
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
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
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
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
                    ]).then(n.bind(n, 169698)),
            });
            var B = n(810641);
            const A = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                L = (e, t) => {
                    const n = t.selectedTabId,
                        a = A(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                R = (0, C.Z)()
                    .propsFromState(() => ({ pageConfiguration: A, selectedTab: L }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class F extends a.Component {
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
                        (this._getModule = (0, Z.Z)((e, t, n, a) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, N.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: a });
                                if (e?.graphQLTimelineId) return (0, v.R)(e.graphQLTimelineId);
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
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: n, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: i, renderUnavailable: d, selectedTab: l, timelinePrefix: s, title: c, withoutHeadroom: p } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === l?.id) return a.createElement(x, null);
                    const u = this._getModule(l, n?.tabs?.initialTabId, t, s),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        b = m ? 1e3 * m : void 0;
                    return a.createElement(h.nO, { namespace: this._getTimelineNamespace() }, a.createElement(B.Z, { entryConfiguration: e, module: u, pollingIntervalMsOverride: b, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: i, renderUnavailable: d, title: c, withoutHeadroom: p }));
                }
            }
            F.contextType = P.rC;
            const O = R(F);
            var G = n(929482),
                H = n(335632),
                $ = n(325686),
                W = n(392237),
                U = n(950708),
                z = n(187669),
                j = n(725516),
                q = n(942893);
            const Q = (e, t) => {
                const n = (0, j.z)(),
                    { component: o, element: r } = t || {},
                    i = a.useMemo(() => ({ items: [q.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, z.q)(() => {
                        n.scribe({ component: o, element: r, action: "impression", data: i });
                    }),
                    { namespace: { component: o, element: r }, data: i }
                );
            };
            function V(e) {
                const {
                        header: { clientEventInfo: t, displayType: n, facepile: o, landingContext: r, topicId: i },
                        onHeaderVisible: d,
                    } = e,
                    { data: l, namespace: s } = Q(i, t);
                return a.createElement($.Z, { style: K.root }, a.createElement(h.nO, { data: l, namespace: s }, a.createElement(U.Z, { displayType: n, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => d(!e), topicId: i, topicLandingContext: r, withDivider: !0 })));
            }
            const K = W.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var X = n(24949);
            const Y = (e, t) => t.module.selectPageConfiguration(e),
                J = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, X.P1)(Y, J, (e, t) => t !== b.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, C.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: Y, initialFetchStatus: J }))
                    .withAnalytics();
            var ne = n(688715),
                ae = n(815858),
                oe = n(651930),
                re = n(572067),
                ie = n(265196),
                de = n(421575),
                le = n(907552),
                se = n(466380);
            const ce = (e, t) => {
                    const n = t.navBar.topicId ? t.navBar.topicId : "";
                    return se.Z.select(e, n);
                },
                pe = (0, C.Z)().propsFromState(() => ({ topic: ce })),
                ue = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                he = l().ed88e742;
            const be = W.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                ge = pe(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: o },
                            pageNamespace: r,
                            topic: i,
                            withAppLinks: d,
                            withOpenGraphMeta: l,
                        } = e,
                        { featureSwitches: c } = a.useContext(P.rC),
                        p = c.isTrue("topic_landing_page_share_enabled"),
                        { data: u, namespace: m } = Q(t, o),
                        b = (0, s.Z)({}, r, m);
                    return i ? a.createElement(h.nO, { data: u, namespace: b }, a.createElement(a.Fragment, null, l ? a.createElement(re.Z, { canonical: ue(t), description: i.description, title: i.name, type: "article" }) : null, d ? a.createElement(oe.Z, { deepLink: me(t) }) : null, a.createElement($.Z, { style: be.rightControl }, a.createElement($.Z, { style: be.followButtonContainer }, a.createElement(ae.Z, { animateMount: !0, show: n, type: "fade" }, a.createElement(ie.ZP, { size: "medium", textMode: de.q.FollowTopic, topic: i }))), p ? a.createElement(le.ZP, { copyLinkShareLabel: he, scribeNamespace: b, url: ue(t) }) : null))) : null;
                }),
                fe = l().e9f1fbcc,
                we = a.createElement(c.Z, null),
                ye = (e) => {
                    const { TabBar: t, backLocation: n, documentTitle: o, entryConfiguration: d, fab: l, getTabLink: c, hasTabNavigation: f, history: w, initialFetchStatus: y, initialPageNamespace: E, logoButton: D, module: C, onBackClick: T, pageConfiguration: k, prerollDisplayLocation: M, renderEmptyState: _, renderUnavailable: S, rightControl: Z, selectedTabId: v, sidebarContent: N, timelinePrefix: P, title: x, withAppLinks: B, withBottomLoginSignupBar: A, withDeferredView: L, withOpenGraphMeta: R, withSearchBox: F, withTweetButton: H } = e,
                        $ = (0, r.tj)(),
                        W = a.useMemo(() => ({ ...d, ...(0, G.Z)({ isLegacy: !0, isWide: $ }) }), [d, $]),
                        [U, z] = a.useState(!0),
                        { header: j, navBar: q, subtitle: Q, title: K } = k || {},
                        X = y === b.Z.LOADED ? K || x : "",
                        Y = ((e, t, n) => {
                            const a = t?.scribeConfig,
                                { entityToken: o, ...r } = a || {},
                                i = t?.tabs,
                                d = e || i?.initialTabId,
                                l = i?.tabs.find((e) => e.id === d),
                                { entityToken: c, ...p } = l?.scribeConfig || {};
                            return (0, s.Z)({}, n, r, p);
                        })(v, k, E),
                        J = j ? a.createElement(V, { header: j, onHeaderVisible: z }) : null,
                        ee = q ? a.createElement(ge, { isHeaderOffscreen: !U, navBar: q, pageNamespace: Y, withAppLinks: B, withOpenGraphMeta: R }) : null,
                        te = L ? p.Z : a.Fragment,
                        ne = a.createElement(a.Fragment, null, J, a.createElement(te, null, a.createElement(O, { entryConfiguration: W, initialModule: C, prerollDisplayLocation: M, renderEmptyState: _, renderUnavailable: S, selectedTabId: v, timelinePrefix: P, title: x, withoutHeadroom: !0 }))),
                        ae = l ? a.createElement(u.Z, { component: i.Z, fab: l }, ne) : ne,
                        oe = c && f ? a.createElement(I, { getTabLink: c, module: C, selectedTabId: v }) : void 0;
                    return a.createElement(h.nO, { namespace: Y }, a.createElement(g.Z, null, a.createElement(m.Z, { TabBar: t, backLocation: n, documentTitle: o, history: w, logoButton: D, onBackClick: T, primaryContent: ae, rightControl: ee || Z, secondaryBar: oe, sidebarContent: N, subtitle: Q, title: J && U ? x : X, withBottomLoginSignupBar: A, withSearchBox: F, withTweetButton: H })));
                };
            ye.defaultProps = { entryConfiguration: (0, H.G)({}), renderEmptyState: () => a.createElement(o.Z, { header: fe }), sidebarContent: we, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const Ee = te(ye);
        },
        337455: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(411916),
                r = n.n(o),
                i = n(373463),
                d = n.n(i);
            function l(e) {
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
                return d()(t, e);
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
        42508: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => o, n5: () => i });
            var a = n(42508);
            const o = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: a, user: o, userProfileInterstitialType: i, viewerUserId: d }) => {
                    const l = !!d && d === o.id_str,
                        s = o.blocked_by,
                        c = o.blocking,
                        p = r({ displaySensitiveMedia: e, isOwnProfile: l, user: o, userProfileInterstitialType: i }),
                        u = (l || !a) && !n;
                    return { avatar: l || (!p && !t && !n && !a), badges: l || !a, description: l || (!c && !s && !p && !n && !a), followButton: !(l || s || p || t || n || a), followersYouKnow: !l && !s && !c && !p && !t && !n && !a && (o.following || !o.protected), followIndicator: !a, fullName: u, label: u, stats: l || (!s && !p && !n && !a), subscriptionsCount: l || !o.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: o }) => (o === a.Z.SensitiveMedia || o === a.Z.OffensiveProfileContent) && !(t || n.following || e),
                i = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const a = n.blocked_by,
                        o = n.protected && !n.following;
                    return t ? e || !o : e || (!o && !a);
                };
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => y, G0: () => w, Jj: () => E, O9: () => h, S: () => b, fy: () => g, jz: () => D, nm: () => f, qk: () => p, uI: () => u });
            var a = n(912021),
                o = n(644829),
                r = n(740527),
                i = n(750085),
                d = n(555875),
                l = n(899105),
                s = n(218951);
            const c = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                u = "explore-",
                m = 9e5;
            const h = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: a, includePageConfiguration: i = !1, initialTabId: d, profileUserId: c }) => {
                    const p = e || t || "main",
                        h = (function (e, t, n, a) {
                            return n ? `${e}${t}-tweet-${n}` : a ? `${e}${t}-user-${a}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : u, p, a, c),
                        b = { timelineId: h, formatResponse: l.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: a, include_page_configuration: i, initial_tab_id: d, profile_user_id: c, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${u}${p}`, staleIntervalMs: m };
                    return n ? (0, s.Z)({ ...b, formatResponse: r.Z, network: { ...b.network, getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreGraphQL } }) : (0, s.Z)(b);
                },
                b = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: m };
                    return (0, s.Z)(t);
                },
                g = (e, t) => h({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, a.Z)((e) => h({ exploreGraphQLEnabled: e, contentType: c.Trends })),
                w = (0, a.Z)((e) => h({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                y = () => (e, t) =>
                    e(
                        (0, d.CY)(t())
                            .filter((e) => 0 === e.indexOf(u))
                            .map((e) => (0, d.$q)(e)),
                    ),
                E = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: m };
                    return (0, s.Z)(n);
                },
                D = (e) => (0, s.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: i.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(553093),
                o = n(383675);
            const r = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: r } = t,
                    { cacheId: i, requestParams: d, timeline: l } = r || {};
                return l?.id ? (0, o.R)(l.id) : (0, o.Z)({ timelineId: i || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: d || {} });
            };
        },
        642081: (e, t, n) => {
            n.r(t), n.d(t, { TopicLandingPage: () => z, default: () => j });
            var a = n(202784),
                o = n(688715),
                r = n(457311),
                i = n(674132),
                d = n.n(i),
                l = n(718e3),
                s = n(651930),
                c = n(983389),
                p = n(572067),
                u = n(337523),
                m = n(293115),
                h = n(807469),
                b = n(740527),
                g = n(218951);
            const f = "topic-landing-page";
            var w = n(912021),
                y = n(903019),
                E = n(668214),
                D = n(466380);
            const C = (e, t) => t.location.state?.referringScribeNamespace,
                T = (e, t) => t.match.params.topicId,
                k = (e, t) => {
                    const n = T(0, t);
                    return n ? D.Z.select(e, n) : void 0;
                },
                M = (0, E.Z)().propsFromState(() => {
                    const e = (0, w.Z)((e, t) => (({ params: e, topicId: t }) => (0, g.Z)({ context: "FETCH_TOPIC_TIMELINE", network: { getEndpoint: (e) => e.withEndpoint(h.ZP).fetchTopicLandingPage, getEndpointParams: ({ cursor: n, ...a }) => ({ ...a, ...e, cursor: "string" == typeof n ? n : void 0, topicId: t }) }, formatResponse: b.Z, perfKey: f, timelineId: `${f}-${t}` }))({ topicId: e, params: t ? { data_lookup_id: t } : void 0 }));
                    return {
                        module: (t, n) => {
                            const a = T(0, n),
                                o = (0, y.XN)(t, n);
                            return e(a, o);
                        },
                        referringScribeNamespace: C,
                        topic: k,
                        topicId: T,
                    };
                });
            var _ = n(269011),
                S = n(335632),
                I = n(962741);
            const Z = { ...(0, S.G)({}), [I.ZP.User]: (0, _.Z)({ shouldScribeImpression: !0 }) };
            var v = n(840647),
                N = n(942893);
            const P = (0, w.Z)((e, t) => {
                    let n;
                    if (e) {
                        const { action: t = "", component: a = "", element: o = "", page: r = "", section: i = "" } = e;
                        n = `${(0, v.Z)().clientName}:${r}:${i}:${a}:${o}:${t}`;
                    }
                    return { items: t ? [{ ...N.Z.forTopic(t) }] : void 0, referring_event: n };
                }),
                x = (e) => (0, o.ju)(`https://x.com/i/topics/${e}`),
                B = (e) => `twitter://topics_timeline?id=${e}`,
                A = d().a2a3824a,
                L = d().b8533bac,
                R = d().g3e87c61,
                F = d().g02269ba,
                O = d().e80d2509,
                G = "Talk about Topics",
                H = "Be the first to post about this Topic and see it here.",
                $ = "/",
                W = a.createElement(l.Z, { withWhoToFollow: !1 }),
                U = { page: "topic_landing", section: "main" };
            function z({ history: e, module: t, referringScribeNamespace: n, topic: o, topicId: i }) {
                const d = o?.name ? R({ topicName: o?.name }) : L,
                    l = o?.name ? O({ topicName: o?.name }) : F;
                return a.createElement(m.nO, { data: P(n, i) }, a.createElement(a.Fragment, null, a.createElement(c.Z, { description: l }), a.createElement(p.Z, { canonical: x(i), description: l, title: d, type: "article" }), a.createElement(s.Z, { deepLink: B(i) }), a.createElement(u.Z, { backLocation: $, documentTitle: d, entryConfiguration: Z, history: e, initialPageNamespace: U, module: t, renderEmptyState: () => a.createElement(r.Z, { header: G, message: H }), sidebarContent: W, timelinePrefix: f, title: A })));
            }
            const j = M(z);
        },
        204819: (e, t, n) => {
            n.r(t), n.d(t, { TopicsEducationScreen: () => E, default: () => C });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(946847),
                d = n(392237),
                l = n(674132),
                s = n.n(l),
                c = n(452693),
                p = n(980407),
                u = n(615027),
                m = n(668214),
                h = n(919022);
            const b = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: h.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ screenName: e && e.screen_name }))
                    .withAnalytics({ page: "topic_education" }),
                g = s().g931a6e5,
                f = s().j24c37b2,
                w = s().h3f9027a,
                y = s().e241095e;
            class E extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = (e) => null),
                        (this._handleClose = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._getSubtext = () => a.createElement(o.Z, null, a.createElement(r.ZP, { color: "gray700" }, w), a.createElement(r.ZP, { color: "gray700", style: D.paddingTop }, this._getSecondaryText()))),
                        (this._getSecondaryText = () => {
                            const { screenName: e } = this.props,
                                t = { pathname: e ? `/${e}/topics` : "/home", method: "replace" },
                                n = { yourTopicsLink: a.createElement(r.ZP, { "aria-label": y, color: "link", link: t, role: "link", withInteractiveStyling: !0 }) };
                            return a.createElement(s().I18NFormatMessage, { $i18n: "e1d95725" }, a.cloneElement(n.yourTopicsLink, null, s().f8bc75e2));
                        });
                }
                render() {
                    const { location: e } = this.props;
                    return e.state && e.state.topicName ? a.createElement(p.Z, { renderHeader: this._renderHeader }, this._renderContent(e.state.topicName)) : a.createElement(u.Z, { to: "/home" });
                }
                _renderContent(e) {
                    return a.createElement(i.Z, { actionLabel: f, graphic: c.default, headline: g({ topic: e }), onAction: this._handleClose, onClose: this._handleClose, subtext: this._getSubtext() });
                }
            }
            const D = d.default.create((e) => ({ paddingTop: { paddingTop: e.spaces.space16 } })),
                C = b(E);
        },
        191855: (e, t, n) => {
            n.r(t), n.d(t, { TopicsPicker: () => _, default: () => S });
            var a = n(202784),
                o = n(674132),
                r = n.n(o),
                i = n(187669),
                d = n(718e3),
                l = n(651930),
                s = n(337523),
                c = n(24949),
                p = n(668214),
                u = n(807469),
                m = n(740527),
                h = n(218951);
            var b = n(735313);
            const g = (e, t) => "PUSH" === t.history.action || "REPLACE" === t.history.action,
                f = (e, t) => t.location.state?.previousPath,
                w = (e, t) => t.match?.params?.tabId || void 0,
                y = () =>
                    (0, c.P1)(w, (e) => {
                        return (t = e), (0, h.Z)({ context: "FETCH_TOPICS_PICKER_PAGE", network: { getEndpoint: (e) => e.withEndpoint(u.ZP).fetchTopicsPickerPage, getEndpointParams: () => ({ topicId: t }) }, perfKey: "topics-picker", formatResponse: m.Z, timelineId: `topics-picker-${t || "home"}` });
                        var t;
                    }),
                E = (0, p.Z)()
                    .propsFromState(() => ({ isForwardNavigation: g, module: y(), previousPath: f, selectedTabId: w }))
                    .propsFromActions(() => ({ clearTimelineCache: b.Z })),
                D = r().d094c720,
                C = { page: "topics_picker", section: "main" },
                T = (e) => (e ? `twitter://topics/picker/${e}` : "twitter://topics/picker"),
                k = (e) => ({ pathname: `/i/topics/picker/${e}` }),
                M = a.createElement(d.Z, { withTopicsToFollow: !1 }),
                _ = (e) => {
                    const { clearTimelineCache: t, history: n, isForwardNavigation: o, module: r, previousPath: d, selectedTabId: c } = e;
                    return (
                        (0, i.q)(() => {
                            o && !d?.includes("/i/topics/picker") && t(r);
                        }),
                        a.createElement(a.Fragment, null, a.createElement(l.Z, { deepLink: T(c) }), a.createElement(s.Z, { backLocation: "/home", getTabLink: k, history: n, initialPageNamespace: C, module: r, selectedTabId: c, sidebarContent: M, timelinePrefix: "topics-picker-", title: D }))
                    );
                },
                S = E(_);
        },
        55123: (e, t, n) => {
            n.r(t), n.d(t, { TrendingEventHistoryScreen: () => C, default: () => T });
            var a = n(202784),
                o = n(457311),
                r = n(674132),
                i = n.n(r),
                d = n(912021),
                l = n(718e3),
                s = n(252021),
                c = n(443781),
                p = n(652904),
                u = n(810641),
                m = n(371493),
                h = n(668214);
            const b = { page: "trend_history" },
                g = (e, t) => t.match.params.trendId,
                f = () => b,
                w = (0, h.Z)()
                    .propsFromState(() => ({ trendId: g, scribeNamespace: f }))
                    .withAnalytics(b),
                y = i().e44b4256,
                E = i().a74af3f8,
                D = () => a.createElement(o.Z, { header: E });
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => a.createElement(u.Z, { module: this._getModule(), renderEmptyState: D, title: "Story History" })),
                        (this._getMemoizedModule = (0, d.Z)((e) => (0, m.jz)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    const { history: e, trendId: t } = this.props;
                    return a.createElement(p.Z, null, a.createElement(s.Z, { backLocation: `/i/trending/${t}`, documentTitle: y, history: e, primaryContent: this._render(), sidebarContent: a.createElement(l.Z, null), title: y }));
                }
            }
            C.contextType = c.rC;
            const T = w(C);
        },
        193048: (e, t, n) => {
            n.r(t), n.d(t, { TOPICS_MANAGEMENT_PREFIX: () => S, UserTopicsScreen: () => v, VIEWING_OTHER_USERS_TOPICS_PREFIX: () => I, default: () => N });
            var a = n(202784),
                o = n(457311),
                r = n(674132),
                i = n.n(r),
                d = n(912021),
                l = n(718e3),
                s = n(443781),
                c = n(337523),
                p = n(835546),
                u = n(807469),
                m = n(740527),
                h = n(218951);
            const b = (0, h.Z)({ timelineId: "topics-management-graphql", network: { getEndpoint: (e) => e.withEndpoint(u.ZP).fetchTopicsManagementPage, getEndpointParams: ({ cursor: e }) => ({ cursor: "string" == typeof e ? e : void 0 }) }, formatResponse: m.Z, context: "FETCH_TOPICS_MANAGEMENT", perfKey: "topics-management-GraphQL" });
            var g = n(615027),
                f = n(71620),
                w = n(668214),
                y = n(735313),
                E = n(919022);
            const D = (e, t) => t.location.pathname,
                C = (e, t) => "PUSH" === t.history.action || "REPLACE" === t.history.action,
                T = (e, t) => t.match.params.tabId || void 0,
                k = (e, t) => E.ZP.selectByScreenName(e, t.match.params.screenName),
                M = (0, w.Z)()
                    .propsFromState(() => ({ isForwardNavigation: C, pathname: D, selectedTabId: T, user: k }))
                    .propsFromActions(() => ({ clearTimelineCache: y.Z, createLocalApiErrorHandler: (0, f.zr)("USER_TOPICS_SCREEN"), fetchUserByScreenNameIfNeeded: E.ZP.fetchOneByScreenNameIfNeeded })),
                _ = i().b8533bac,
                S = "topics-management-",
                I = "viewing-other-users-topics-",
                Z = a.createElement(l.Z, { withTopicsToFollow: !1 });
            class v extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderNotInterestedEmptyState = () => a.createElement(o.Z, { header: "No interest? No problem.", message: "When you tell us you're not interested in a Topic, it will show up here. We won't recommend Tweets, events, or ads related to Topics you aren't into." })),
                        (this._getScreenName = () => {
                            const { match: e } = this.props;
                            return e.params.screenName;
                        }),
                        (this._getTabLink = (e) => `/${this._getScreenName()}/topics/${e}`),
                        (this._getScribeNamespace = (0, d.Z)((e, t) => ({ page: e ? "not_interested_topics" : "followed_topics", section: t ? "self" : "other" })));
                    const { isForwardNavigation: n } = e;
                    n && this._clearTimelineCache();
                }
                componentDidMount() {
                    const { fetchUserByScreenNameIfNeeded: e } = this.props;
                    e(this._getScreenName());
                }
                componentDidUpdate(e) {
                    ((e.isForwardNavigation && !this.props.isForwardNavigation) || e.pathname !== this.props.pathname) && this._clearTimelineCache();
                }
                render() {
                    const { history: e, selectedTabId: t, user: n } = this.props,
                        o = this._isOwnProfile(),
                        r = n && (0, p.n5)({ isOwnProfile: o, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: n }),
                        i = !o && this._isOnNotInterestedPage(),
                        d = n && (!r || i),
                        l = `/${this._getScreenName()}`;
                    if (d) {
                        const e = i ? l.concat("/topics") : l;
                        return a.createElement(g.Z, { to: e });
                    }
                    {
                        const r = this._getScribeNamespace(this._isOnNotInterestedPage(), o),
                            i = o ? b : ((s = (n && n.id_str) || ""), (0, h.Z)({ timelineId: `viewing-user-${s}-topics-page-graphql`, network: { getEndpoint: (e) => e.withEndpoint(u.ZP).fetchViewingOtherUsersTopicsPagePage, getEndpointParams: ({ count: e }) => ({ count: e, userId: s }) }, formatResponse: m.Z, context: "FETCH_OTHER_USERS_TOPICS_PAGE", perfKey: "viewing-other-users-topics-page-GraphQL" })),
                            d = o ? S : I;
                        return a.createElement(c.Z, { backLocation: l, getTabLink: this._getTabLink, history: e, initialPageNamespace: r, module: i, renderEmptyState: "not_interested" === this.props.selectedTabId ? this._renderNotInterestedEmptyState : void 0, selectedTabId: t, sidebarContent: Z, timelinePrefix: d, title: _ });
                    }
                    var s;
                }
                _isOwnProfile() {
                    const { user: e } = this.props,
                        { viewerUserId: t } = this.context;
                    return !(!e || e.id_str !== t);
                }
                _isOnNotInterestedPage() {
                    const { pathname: e } = this.props;
                    return e.indexOf(this._getNotInterestedUrl()) > -1;
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t } = this.props;
                    this._isOwnProfile() && e(b).catch(t());
                }
                _getNotInterestedUrl() {
                    return `/${this._getScreenName()}/topics/not_interested`;
                }
            }
            v.contextType = s.rC;
            const N = M(v);
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => M });
            var a = n(807896),
                o = n(202784),
                r = n(194504),
                i = n(235902),
                d = n(392237),
                l = n(325686),
                s = n(674132),
                c = n.n(s),
                p = n(912021),
                u = n(516951),
                m = n(731708),
                h = n(310088),
                b = n(175993),
                g = n(58881),
                f = n(530732);
            const w = c().d2414d31,
                y = () => c().ce4e85ae,
                E = c().fb9f6f39;
            class D extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, a) => {
                            const o = d.default.theme.colors.text,
                                r = d.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: r, color: i, isActive: s, isCompact: c, isPillLink: p, isRoundedRect: u, isWebRedesign: b, retainScrollPosition: D, style: T, to: k } = this.props,
                        { location: M } = this.state,
                        _ = k ? this._getMemoizedLink(k, D) : void 0,
                        S = s ? s(k) : M?.pathname === _?.pathname,
                        I = g.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = b ? "medium" : S ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: I, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? C.pill : C.link, p && S ? C.active : null, c ? (p ? C.compactPill : C.compactLink) : null, u ? C.roundedRect : null, T], withoutInteractiveStyles: b || p }, ({ isFocused: t, isHovered: s }) => o.createElement(l.Z, { style: p && C.flexGrow }, o.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(S, s, b, p) }, c && C.compactText, b && t && C.focusedText], weight: Z }, e && o.createElement(e, { style: C.icon }), r, b || p ? null : o.createElement(l.Z, { style: S && [C.border, { backgroundColor: d.default.theme.colors[i] }] })), n ? o.createElement(h.Z, { count: n, standalone: !0, style: [C.badge, n >= 10 && C.multiDigitBadge, n >= 20 && C.truncatedCountBadge], truncatedCountFormatter: E, unreadCountLabel: w, withBorder: !1 }) : a ? o.createElement(h.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (D.contextType = b.Z), (D.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = d.default.create((e) => ({
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
                T = D,
                k = d.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                M = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: d, isRoundedRect: l, links: s, style: c, visibleItemIndex: p }) => {
                    const u = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !d,
                        b = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: t, viewType: r, ...i }, s) => {
                                    const c = h ? [k.linkRedesign, 0 === s && k.firstLinkRedesign, e && 0 === s && k.withNoPaddingStart] : void 0;
                                    return o.createElement(T, (0, a.Z)({ viewType: r }, i, { isCompact: n, isPillLink: d, isRoundedRect: l, isWebRedesign: h, style: c }), t);
                                }),
                            [e, n, d, l, h, s],
                        );
                    return o.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: d && k.gap, childrenStyle: !h && k.flexGrow, key: u, style: [d ? null : k.segmentedControl, h && k.leftAligned, c], visibleItemIndex: p }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Topics.9e4be55a.js.map
