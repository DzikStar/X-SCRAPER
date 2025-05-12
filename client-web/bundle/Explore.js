"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Explore", "bundle.AudioSpaceDetail"],
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
        233935: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                o = n(154003),
                r = n(392237),
                d = n(674132),
                l = n.n(d),
                i = n(698891);
            const s = "settingsAppBar",
                c = l().bb081ea2,
                u = a.memo(({ onPress: e, pullRight: t, to: n }) => a.createElement(o.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: a.createElement(i.default, null), link: n, onPress: e, pullRight: t, style: p.button, testID: s, type: "primaryText" })),
                p = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = u;
        },
        33104: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            var a = n(325686);
            const o = (0, n(337455).Z)(a.Z);
        },
        529256: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(272175),
                r = n(38293),
                d = n(572067);
            const l = ({ children: e, description: t, includeOpenGraphMeta: n = !0, title: l }) => a.createElement(a.Fragment, null, l && a.createElement(r.Z, { title: l, withMeta: n }), n && a.createElement(d.Z, { description: t, title: l }), a.createElement(o.ql, null, a.createElement("meta", { description: t, name: "description" })), e),
                i = a.memo(l);
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
                d = n(674132);
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
                    const t = (0, r.useHistory)();
                    return o.createElement(d.Z, (0, a.Z)({}, e, { isCompact: (0, l.HD)(t) }));
                },
                s = o.memo(i);
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => b });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                d = n(292627),
                l = n(537392),
                i = n(392237),
                s = n(365023),
                c = n(392027),
                u = n(774654),
                p = n(725516),
                m = n(443781);
            const h = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: n, onPress: b, scribeComponent: g, ...f } = e,
                        { loggedInUserId: w } = o.useContext(m.rC),
                        y = (0, p.z)(),
                        D = o.useCallback(
                            (e) => {
                                y.scribe({ component: g, action: "click" }), b && b(e);
                            },
                            [y, b, g],
                        ),
                        M = u.ZM.useCollapsibleNavBars(),
                        E = [...u.Ah({ elementPosition: "bottom" }), M && h.fabStaysAboveSafeArea];
                    return w
                        ? o.createElement(
                              d.Z.FloatingAction,
                              null,
                              o.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const d = e > i.default.theme.breakpoints.large,
                                      l = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      p = [h.root, l && h.rootMedium, d && h.rootLarge],
                                      m = [h.fab, d && h.fabLarge, u && h.fabMicro, E];
                                  return o.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      o.createElement(s.Z, { id: "FloatingActionButtonBase" }, (e, l) => o.createElement(r.Z, (0, a.Z)({ ref: e() }, l({ style: m })), o.createElement(c.Z, (0, a.Z)({}, f, { "aria-label": t, label: d ? n : void 0, onPress: D, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => i });
            n(136728);
            var a = n(202784),
                o = n(387524),
                r = n(635510);
            const d = "/compose/post";
            class l extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                a = { pathname: d, state: (t && t()) || {} };
                            n.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: l } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, href: d, icon: t, label: n, onPress: this._handlePress, scribeComponent: l, testID: r.Z.tweet });
                }
            }
            const i = l;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(674132),
                r = n.n(o),
                d = n(186444),
                l = n(355883);
            const i = r().j0179e90,
                s = r().ee69d769({ verb: "" }),
                c = a.createElement(d.default, null),
                u = ({ getLocationState: e, history: t }) => a.createElement(l.Z, { "aria-label": i, getLocationState: e, history: t, icon: c, label: s, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
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
            n.d(t, { Z: () => De });
            var a = n(202784),
                o = n(457311),
                r = n(708852),
                d = n(108362),
                l = n(674132),
                i = n.n(l),
                s = n(769471),
                c = n(718e3),
                u = n(33104),
                p = n(789831),
                m = n(252021),
                h = n(293115),
                b = n(87063),
                g = n(652904),
                f = n(507651),
                w = n(3138),
                y = n(655352),
                D = n(503229),
                M = n(71620),
                E = n(668214);
            const C = (e, t) => t.module.selectInitialFetchStatus(e),
                S = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                k = (e, t) => {
                    const n = t.selectedTabId,
                        a = S(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                I = (0, E.Z)()
                    .propsFromState(() => ({ initialFetchStatus: C, pageConfiguration: S, selectedTab: k }))
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
                            }, t(w.M));
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
                                return a.createElement(a.Fragment, null, a.createElement(f.Z, { alignFirstItem: (0, y.ZP)(), links: s, visibleItemIndex: i }));
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
            const _ = I((0, D.Z)(T));
            var Z = n(912021),
                A = n(383675),
                v = n(611423),
                x = n(443781);
            const N = (0, n(523561).Z)({
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
            var P = n(810641);
            const B = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                R = (e, t) => {
                    const n = t.selectedTabId,
                        a = B(e, t);
                    return a && a.tabs && a.tabs.tabs.find((e) => e.id === n);
                },
                L = (0, E.Z)()
                    .propsFromState(() => ({ pageConfiguration: B, selectedTab: R }))
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
                        (this._getModule = (0, Z.Z)((e, t, n, a) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, v.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: a });
                                if (e?.graphQLTimelineId) return (0, A.R)(e.graphQLTimelineId);
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
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === i?.id) return a.createElement(N, null);
                    const p = this._getModule(i, n?.tabs?.initialTabId, t, s),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        b = m ? 1e3 * m : void 0;
                    return a.createElement(h.nO, { namespace: this._getTimelineNamespace() }, a.createElement(P.Z, { entryConfiguration: e, module: p, pollingIntervalMsOverride: b, prerollDisplayLocation: o, refreshControl: r, renderEmptyState: d, renderUnavailable: l, title: c, withoutHeadroom: u }));
                }
            }
            G.contextType = x.rC;
            const F = L(G);
            var H = n(929482),
                O = n(335632),
                $ = n(325686),
                W = n(392237),
                z = n(950708),
                j = n(187669),
                U = n(725516),
                q = n(942893);
            const Q = (e, t) => {
                const n = (0, U.z)(),
                    { component: o, element: r } = t || {},
                    d = a.useMemo(() => ({ items: [q.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, j.q)(() => {
                        n.scribe({ component: o, element: r, action: "impression", data: d });
                    }),
                    { namespace: { component: o, element: r }, data: d }
                );
            };
            function V(e) {
                const {
                        header: { clientEventInfo: t, displayType: n, facepile: o, landingContext: r, topicId: d },
                        onHeaderVisible: l,
                    } = e,
                    { data: i, namespace: s } = Q(d, t);
                return a.createElement($.Z, { style: K.root }, a.createElement(h.nO, { data: i, namespace: s }, a.createElement(z.Z, { displayType: n, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => l(!e), topicId: d, topicLandingContext: r, withDivider: !0 })));
            }
            const K = W.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var X = n(24949);
            const Y = (e, t) => t.module.selectPageConfiguration(e),
                J = (e, t) => t.module.selectInitialFetchStatus(e),
                ee = (0, X.P1)(Y, J, (e, t) => t !== b.Z.LOADED || (!!e && !!e.tabs)),
                te = (0, E.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: Y, initialFetchStatus: J }))
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
                ue = (0, E.Z)().propsFromState(() => ({ topic: ce })),
                pe = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                he = i().ed88e742;
            const be = W.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
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
                        { featureSwitches: c } = a.useContext(x.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: p, namespace: m } = Q(t, o),
                        b = (0, s.Z)({}, r, m);
                    return d ? a.createElement(h.nO, { data: p, namespace: b }, a.createElement(a.Fragment, null, i ? a.createElement(re.Z, { canonical: pe(t), description: d.description, title: d.name, type: "article" }) : null, l ? a.createElement(oe.Z, { deepLink: me(t) }) : null, a.createElement($.Z, { style: be.rightControl }, a.createElement($.Z, { style: be.followButtonContainer }, a.createElement(ae.Z, { animateMount: !0, show: n, type: "fade" }, a.createElement(de.ZP, { size: "medium", textMode: le.q.FollowTopic, topic: d }))), u ? a.createElement(ie.ZP, { copyLinkShareLabel: he, scribeNamespace: b, url: pe(t) }) : null))) : null;
                }),
                fe = i().e9f1fbcc,
                we = a.createElement(c.Z, null),
                ye = (e) => {
                    const { TabBar: t, backLocation: n, documentTitle: o, entryConfiguration: l, fab: i, getTabLink: c, hasTabNavigation: f, history: w, initialFetchStatus: y, initialPageNamespace: D, logoButton: M, module: E, onBackClick: C, pageConfiguration: S, prerollDisplayLocation: k, renderEmptyState: I, renderUnavailable: T, rightControl: Z, selectedTabId: A, sidebarContent: v, timelinePrefix: x, title: N, withAppLinks: P, withBottomLoginSignupBar: B, withDeferredView: R, withOpenGraphMeta: L, withSearchBox: G, withTweetButton: O } = e,
                        $ = (0, r.tj)(),
                        W = a.useMemo(() => ({ ...l, ...(0, H.Z)({ isLegacy: !0, isWide: $ }) }), [l, $]),
                        [z, j] = a.useState(!0),
                        { header: U, navBar: q, subtitle: Q, title: K } = S || {},
                        X = y === b.Z.LOADED ? K || N : "",
                        Y = ((e, t, n) => {
                            const a = t?.scribeConfig,
                                { entityToken: o, ...r } = a || {},
                                d = t?.tabs,
                                l = e || d?.initialTabId,
                                i = d?.tabs.find((e) => e.id === l),
                                { entityToken: c, ...u } = i?.scribeConfig || {};
                            return (0, s.Z)({}, n, r, u);
                        })(A, S, D),
                        J = U ? a.createElement(V, { header: U, onHeaderVisible: j }) : null,
                        ee = q ? a.createElement(ge, { isHeaderOffscreen: !z, navBar: q, pageNamespace: Y, withAppLinks: P, withOpenGraphMeta: L }) : null,
                        te = R ? u.Z : a.Fragment,
                        ne = a.createElement(a.Fragment, null, J, a.createElement(te, null, a.createElement(F, { entryConfiguration: W, initialModule: E, prerollDisplayLocation: k, renderEmptyState: I, renderUnavailable: T, selectedTabId: A, timelinePrefix: x, title: N, withoutHeadroom: !0 }))),
                        ae = i ? a.createElement(p.Z, { component: d.Z, fab: i }, ne) : ne,
                        oe = c && f ? a.createElement(_, { getTabLink: c, module: E, selectedTabId: A }) : void 0;
                    return a.createElement(h.nO, { namespace: Y }, a.createElement(g.Z, null, a.createElement(m.Z, { TabBar: t, backLocation: n, documentTitle: o, history: w, logoButton: M, onBackClick: C, primaryContent: ae, rightControl: ee || Z, secondaryBar: oe, sidebarContent: v, subtitle: Q, title: J && z ? N : X, withBottomLoginSignupBar: B, withSearchBox: G, withTweetButton: O })));
                };
            ye.defaultProps = { entryConfiguration: (0, O.G)({}), renderEmptyState: () => a.createElement(o.Z, { header: fe }), sidebarContent: we, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const De = te(ye);
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
        371493: (e, t, n) => {
            n.d(t, { $N: () => y, G0: () => w, Jj: () => D, O9: () => h, S: () => b, fy: () => g, jz: () => M, nm: () => f, qk: () => u, uI: () => p });
            var a = n(912021),
                o = n(644829),
                r = n(740527),
                d = n(750085),
                l = n(555875),
                i = n(899105),
                s = n(218951);
            const c = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                p = "explore-",
                m = 9e5;
            const h = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: a, includePageConfiguration: d = !1, initialTabId: l, profileUserId: c }) => {
                    const u = e || t || "main",
                        h = (function (e, t, n, a) {
                            return n ? `${e}${t}-tweet-${n}` : a ? `${e}${t}-user-${a}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : p, u, a, c),
                        b = { timelineId: h, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: a, include_page_configuration: d, initial_tab_id: l, profile_user_id: c, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${p}${u}`, staleIntervalMs: m };
                    return n ? (0, s.Z)({ ...b, formatResponse: r.Z, network: { ...b.network, getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreGraphQL } }) : (0, s.Z)(b);
                },
                b = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: d.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: m };
                    return (0, s.Z)(t);
                },
                g = (e, t) => h({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, a.Z)((e) => h({ exploreGraphQLEnabled: e, contentType: c.Trends })),
                w = (0, a.Z)((e) => h({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                y = () => (e, t) =>
                    e(
                        (0, l.CY)(t())
                            .filter((e) => 0 === e.indexOf(p))
                            .map((e) => (0, l.$q)(e)),
                    ),
                D = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: d.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: m };
                    return (0, s.Z)(n);
                },
                M = (e) => (0, s.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: d.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        849461: (e, t, n) => {
            n.r(t), n.d(t, { ExploreScreen: () => P, default: () => B });
            var a = n(202784),
                o = n(457311),
                r = n(688715),
                d = n(674132),
                l = n.n(d),
                i = n(233935),
                s = n(718e3),
                c = n(529256),
                u = n(572067),
                p = n(443781),
                m = n(32677),
                h = n(231035),
                b = n(337523),
                g = n(519896),
                f = n(371493),
                w = n(24949),
                y = n(912021),
                D = n(668214),
                M = n(558369);
            const E = (e, t) => t.match?.params?.tabId || void 0,
                C = () => {
                    const e = (0, y.Z)((e) => (0, f.fy)(e)),
                        t = (0, y.Z)((e, t) => (0, f.fy)(e, t));
                    return (0, w.P1)(
                        (e) => !0 === (0, M.FG)(e, "explore_graphql_enabled"),
                        E,
                        (t) => e(!0 === (0, M.FG)(t, "explore_graphql_enabled")).selectPageConfiguration(t),
                        (e, n, a) => t(e, a ? a?.tabs?.initialTabId : n),
                    );
                },
                S = (0, D.Z)()
                    .propsFromState(() => ({ initialTabModule: C(), selectedTabId: E }))
                    .withAnalytics({ page: "guide", section: "main" });
            const k = { ...(0, n(335632).G)({ withThirdPartyCards: !0, errorContext: "EXPLORE_SCREEN" }) },
                I = l().fcf3e54c,
                T = l().c797b44e,
                _ = l().a19ce060,
                Z = () => a.createElement(h.Z, null),
                A = () => a.createElement(o.Z, { message: _ }),
                v = 600,
                x = 315,
                N = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
            class P extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTabLink = (e) => ({ pathname: `/explore/tabs/${e}` })),
                        (this._handleSettingsClick = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: "settings_button", action: "click" });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                render() {
                    const { analytics: e, history: t, initialTabModule: n, location: o, selectedTabId: d } = this.props,
                        { featureSwitches: l } = this.context,
                        p = a.createElement(m.Z, { history: t }),
                        h = l.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends",
                        w = a.createElement(i.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: h }),
                        y = o.state && o.state.searchFocused,
                        D = this.context.featureSwitches.isTrue("responsive_web_grok_05221996"),
                        M = D && !!d && "news" !== d && "for_you" !== d,
                        E = D && "news" === d,
                        C = D && "news" === d,
                        S = a.createElement(s.Z, { withFullNews: C, withNews: M, withNewsSentiment: E, withSearchBox: !1, withTrends: !1 }),
                        _ = this.context.featureSwitches.isTrue("rweb_enable_logged_out_search_search_bar_enabled"),
                        P = e.contextualScribeNamespace;
                    return a.createElement(a.Fragment, null, a.createElement(c.Z, { description: T, includeOpenGraphMeta: !1, title: I }), a.createElement(u.Z, { canonical: (0, r.ju)("https://x.com/explore"), description: T, image: N, imageH: x, imageW: v, title: I, type: "article" }), a.createElement(b.Z, { entryConfiguration: k, fab: p, getTabLink: this._getTabLink, history: t, initialPageNamespace: P, module: n, onBackClick: y ? this._handleBackClick : void 0, prerollDisplayLocation: g.Nw.OTHER, renderEmptyState: Z, renderUnavailable: A, rightControl: w, selectedTabId: d, sidebarContent: S, timelinePrefix: f.uI, title: I, withBottomLoginSignupBar: !0, withDeferredView: !0, withSearchBox: _ }), !1);
                }
            }
            P.contextType = p.rC;
            const B = S(P);
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
        392027: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(154003),
                r = n(392237);
            class d extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: n, disabled: r, href: d, icon: i, label: s, onPress: c, renderMenu: u, style: p, testID: m } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, n);
                    return a.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: r, icon: i, link: d, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !s && l.iconOnly, p], testID: m }, s);
                }
            }
            d.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = d;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => k });
            var a = n(807896),
                o = n(202784),
                r = n(194504),
                d = n(235902),
                l = n(392237),
                i = n(325686),
                s = n(674132),
                c = n.n(s),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                h = n(310088),
                b = n(175993),
                g = n(58881),
                f = n(530732);
            const w = c().d2414d31,
                y = () => c().ce4e85ae,
                D = c().fb9f6f39;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: r, color: d, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: M, style: C, to: S } = this.props,
                        { location: k } = this.state,
                        I = S ? this._getMemoizedLink(S, M) : void 0,
                        T = s ? s(S) : k?.pathname === I?.pathname,
                        _ = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = b ? "medium" : T ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: _, link: I, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? E.pill : E.link, u && T ? E.active : null, c ? (u ? E.compactPill : E.compactLink) : null, p ? E.roundedRect : null, C], withoutInteractiveStyles: b || u }, ({ isFocused: t, isHovered: s }) => o.createElement(i.Z, { style: u && E.flexGrow }, o.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(T, s, b, u) }, c && E.compactText, b && t && E.focusedText], weight: Z }, e && o.createElement(e, { style: E.icon }), r, b || u ? null : o.createElement(i.Z, { style: T && [E.border, { backgroundColor: l.default.theme.colors[d] }] })), n ? o.createElement(h.Z, { count: n, standalone: !0, style: [E.badge, n >= 10 && E.multiDigitBadge, n >= 20 && E.truncatedCountBadge], truncatedCountFormatter: D, unreadCountLabel: w, withBorder: !1 }) : a ? o.createElement(h.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (M.contextType = b.Z), (M.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = l.default.create((e) => ({
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
                C = M,
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = d.ZP.useProps(),
                        h = m() && !l,
                        b = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: t, viewType: r, ...d }, s) => {
                                    const c = h ? [S.linkRedesign, 0 === s && S.firstLinkRedesign, e && 0 === s && S.withNoPaddingStart] : void 0;
                                    return o.createElement(C, (0, a.Z)({ viewType: r }, d, { isCompact: n, isPillLink: l, isRoundedRect: i, isWebRedesign: h, style: c }), t);
                                }),
                            [e, n, l, i, h, s],
                        );
                    return o.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && S.gap, childrenStyle: !h && S.flexGrow, key: p, style: [l ? null : S.segmentedControl, h && S.leftAligned, c], visibleItemIndex: u }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.1d599e8a.js.map
