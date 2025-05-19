"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Explore", "bundle.AudioSpaceDetail"],
    {
        740527: (e, a, n) => {
            n.d(a, { Z: () => c });
            var t = n(769471),
                o = n(934309),
                d = n(750085),
                r = n(401388),
                l = n(626421),
                s = n(497461);
            const i = (e) => {
                    const a = (0, s.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const a = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, r.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: a };
                        })(e),
                        t = ((e, a) => {
                            const { header: n } = a;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: t, facepile: o, topic: d, ...r } = n,
                                s = o && (0, l.Zn)(e, o);
                            return { ...r, topicId: (0, l.S0)(e, d), facepile: s };
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
                    const { globalObjects: r, pageConfiguration: l } = i(e);
                    return { ...a, globalObjects: (0, t.Z)(r, a.globalObjects), pageConfiguration: l };
                };
        },
        233935: (e, a, n) => {
            n.d(a, { Z: () => m });
            var t = n(202784),
                o = n(154003),
                d = n(392237),
                r = n(332920),
                l = n.n(r),
                s = n(698891);
            const i = "settingsAppBar",
                c = l().bb081ea2,
                u = t.memo(({ onPress: e, pullRight: a, to: n }) => t.createElement(o.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: t.createElement(s.default, null), link: n, onPress: e, pullRight: a, style: b.button, testID: i, type: "primaryText" })),
                b = d.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = u;
        },
        33104: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            var t = n(325686);
            const o = (0, n(337455).Z)(t.Z);
        },
        529256: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(202784),
                o = n(272175),
                d = n(38293),
                r = n(572067);
            const l = ({ children: e, description: a, includeOpenGraphMeta: n = !0, title: l }) => t.createElement(t.Fragment, null, l && t.createElement(d.Z, { title: l, withMeta: n }), n && t.createElement(r.Z, { description: a, title: l }), t.createElement(o.ql, null, t.createElement("meta", { description: a, name: "description" })), e),
                s = t.memo(l);
        },
        789831: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(807896),
                o = n(202784),
                d = n(325686),
                r = n(392237),
                l = n(655352);
            const s = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: a, fab: n, shouldRenderFab: r = !0, style: i, withoutBottomPadding: c, ...u }) => {
                    const b = a || d.Z,
                        m = r && !(0, l.ZP)();
                    return o.createElement(b, (0, t.Z)({}, u, { style: [m && !c && s.root, i] }), e, m ? n : null);
                };
        },
        651930: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(202784),
                o = n(99107),
                d = n(272175),
                r = n(332920);
            const l = n.n(r)().c39b0e24,
                s = ({ deepLink: e }) => {
                    const a = l;
                    return e ? t.createElement(d.ql, null, t.createElement("meta", { content: e, property: "al:ios:url" }), t.createElement("meta", { content: o.AF, property: "al:ios:app_store_id" }), t.createElement("meta", { content: a, property: "al:ios:app_name" }), t.createElement("meta", { content: e, property: "al:android:url" }), t.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), t.createElement("meta", { content: a, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, a, n) => {
            n.d(a, { Z: () => d });
            var t = n(202784),
                o = n(272175);
            const d = (e) => {
                const { canonical: a, description: n = "", image: d, imageAlt: r, imageH: l, imageType: s, imageW: i, title: c, ttl: u, type: b } = e;
                return t.createElement(o.ql, null, b ? t.createElement("meta", { content: b, property: "og:type" }) : null, a ? t.createElement("meta", { content: a, property: "og:url" }) : null, c ? t.createElement("meta", { content: c, property: "og:title" }) : null, t.createElement("meta", { content: n, property: "og:description" }), d ? t.createElement("meta", { content: d, property: "og:image" }) : null, s ? t.createElement("meta", { content: s, property: "og:image:type" }) : null, i ? t.createElement("meta", { content: i, property: "og:image:width" }) : null, l ? t.createElement("meta", { content: l, property: "og:image:height" }) : null, r ? t.createElement("meta", { content: r, property: "og:image:alt" }) : null, u ? t.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        507651: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(807896),
                o = n(202784),
                d = n(107267),
                r = n(403556),
                l = n(791632);
            const s = (e) => {
                    const a = (0, d.useHistory)();
                    return o.createElement(r.Z, (0, t.Z)({}, e, { isCompact: (0, l.HD)(a) }));
                },
                i = o.memo(s);
        },
        387524: (e, a, n) => {
            n.d(a, { Z: () => p });
            var t = n(807896),
                o = n(202784),
                d = n(325686),
                r = n(292627),
                l = n(537392),
                s = n(392237),
                i = n(365023),
                c = n(392027),
                u = n(774654),
                b = n(725516),
                m = n(443781);
            const h = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                p = (e) => {
                    const { "aria-label": a, label: n, onPress: p, scribeComponent: g, ...D } = e,
                        { loggedInUserId: w } = o.useContext(m.rC),
                        f = (0, b.z)(),
                        M = o.useCallback(
                            (e) => {
                                f.scribe({ component: g, action: "click" }), p && p(e);
                            },
                            [f, p, g],
                        ),
                        y = u.ZM.useCollapsibleNavBars(),
                        A = [...u.Ah({ elementPosition: "bottom" }), y && h.fabStaysAboveSafeArea];
                    return w
                        ? o.createElement(
                              r.Z.FloatingAction,
                              null,
                              o.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > s.default.theme.breakpoints.large,
                                      l = e > s.default.theme.breakpoints.medium,
                                      u = e < s.default.theme.breakpoints.micro,
                                      b = [h.root, l && h.rootMedium, r && h.rootLarge],
                                      m = [h.fab, r && h.fabLarge, u && h.fabMicro, A];
                                  return o.createElement(
                                      d.Z,
                                      { "aria-label": a, pointerEvents: "box-none", role: "complementary", style: b },
                                      o.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, l) => o.createElement(d.Z, (0, t.Z)({ ref: e() }, l({ style: m })), o.createElement(c.Z, (0, t.Z)({}, D, { "aria-label": a, label: r ? n : void 0, onPress: M, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, a, n) => {
            n.d(a, { Z: () => s });
            n(136728);
            var t = n(202784),
                o = n(387524),
                d = n(635510);
            const r = "/compose/post";
            class l extends t.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: a, history: n } = this.props,
                                t = { pathname: r, state: (a && a()) || {} };
                            n.push(t);
                        });
                }
                render() {
                    const { "aria-label": e, icon: a, label: n, scribeComponent: l } = this.props;
                    return t.createElement(o.Z, { "aria-label": e, href: r, icon: a, label: n, onPress: this._handlePress, scribeComponent: l, testID: d.Z.tweet });
                }
            }
            const s = l;
        },
        32677: (e, a, n) => {
            n.d(a, { Z: () => u });
            var t = n(202784),
                o = n(332920),
                d = n.n(o),
                r = n(186444),
                l = n(355883);
            const s = d().j0179e90,
                i = d().ee69d769({ verb: "" }),
                c = t.createElement(r.default, null),
                u = ({ getLocationState: e, history: a }) => t.createElement(l.Z, { "aria-label": s, getLocationState: e, history: a, icon: c, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, a, n) => {
            n.d(a, { Z: () => t });
            const t = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, a, n) => {
            n.d(a, { Z: () => c });
            var t = n(202784),
                o = n(500002),
                d = n(668214),
                r = n(997174),
                l = n(118823);
            const s = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class i extends t.Component {
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
                    let s = !1;
                    a.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && a.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const i = o || l;
                    ((i && o !== l) || (!i && n !== d) || t !== r || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: n, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), n(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(s(i));
        },
        337523: (e, a, n) => {
            n.d(a, { Z: () => Me });
            var t = n(202784),
                o = n(457311),
                d = n(708852),
                r = n(108362),
                l = n(332920),
                s = n.n(l),
                i = n(769471),
                c = n(718e3),
                u = n(33104),
                b = n(789831),
                m = n(252021),
                h = n(293115),
                p = n(87063),
                g = n(652904),
                D = n(507651),
                w = n(3138),
                f = n(655352),
                M = n(503229),
                y = n(71620),
                A = n(668214);
            const E = (e, a) => a.module.selectInitialFetchStatus(e),
                k = (e, a) => a.module.selectPageConfiguration && a.module.selectPageConfiguration(e),
                I = (e, a) => {
                    const n = a.selectedTabId,
                        t = k(e, a);
                    return t && t.tabs && t.tabs.tabs.find((e) => e.id === n);
                },
                C = (0, A.Z)()
                    .propsFromState(() => ({ initialFetchStatus: E, pageConfiguration: k, selectedTab: I }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, y.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class T extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: a, fetchInitial: n, pageConfiguration: t } = this.props,
                                o = t ? t.scribeConfig : void 0;
                            return n().then(({ performed: a }) => {
                                a && e.scribe({ ...this._getScribeNamespace(o), action: "get_initial" });
                            }, a(w.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: a, pageConfiguration: n, selectedTab: o } = this.props,
                                d = n?.tabs;
                            if (d && d.tabs) {
                                const r = (o && o.id) || d.initialTabId,
                                    l = n ? n.scribeConfig : void 0;
                                let s;
                                const i = d.tabs.map((n, t) => {
                                    const o = n.id === r;
                                    return (
                                        o && (s = t),
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
                                return t.createElement(t.Fragment, null, t.createElement(D.Z, { alignFirstItem: (0, f.ZP)(), links: i, visibleItemIndex: s }));
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
                    return e === p.Z.LOADED ? this._render() : null;
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
            const S = C((0, M.Z)(T));
            var x = n(912021),
                P = n(383675),
                _ = n(611423),
                N = n(443781);
            const Z = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.11"),
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
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-3ba4c741"),
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
            var v = n(810641);
            const B = (e, a) => a.initialModule.selectPageConfiguration && a.initialModule.selectPageConfiguration(e),
                R = (e, a) => {
                    const n = a.selectedTabId,
                        t = B(e, a);
                    return t && t.tabs && t.tabs.tabs.find((e) => e.id === n);
                },
                L = (0, A.Z)()
                    .propsFromState(() => ({ pageConfiguration: B, selectedTab: R }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("RICH_SEGMENTED_TIMELINE") }))
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
                        (this._getModule = (0, x.Z)((e, a, n, t) => {
                            if (e?.id !== a) {
                                if (e?.urtEndpoint) return (0, _.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: t });
                                if (e?.graphQLTimelineId) return (0, P.R)(e.graphQLTimelineId);
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
                    const { entryConfiguration: e, initialModule: a, pageConfiguration: n, prerollDisplayLocation: o, refreshControl: d, renderEmptyState: r, renderUnavailable: l, selectedTab: s, timelinePrefix: i, title: c, withoutHeadroom: u } = this.props;
                    if (this.context.featureSwitches.isTrue("responsive_web_grok_05221996") && "news" === s?.id) return t.createElement(Z, null);
                    const b = this._getModule(s, n?.tabs?.initialTabId, a, i),
                        m = this._getRefreshIntervalSecForCurrentTab(),
                        p = m ? 1e3 * m : void 0;
                    return t.createElement(h.nO, { namespace: this._getTimelineNamespace() }, t.createElement(v.Z, { entryConfiguration: e, module: b, pollingIntervalMsOverride: p, prerollDisplayLocation: o, refreshControl: d, renderEmptyState: r, renderUnavailable: l, title: c, withoutHeadroom: u }));
                }
            }
            G.contextType = N.rC;
            const F = L(G);
            var H = n(929482),
                O = n(335632),
                $ = n(325686),
                W = n(392237),
                z = n(950708),
                j = n(187669),
                U = n(725516),
                q = n(942893);
            const Q = (e, a) => {
                const n = (0, U.z)(),
                    { component: o, element: d } = a || {},
                    r = t.useMemo(() => ({ items: [q.Z.forTopic(e, a)] }), [a, e]);
                return (
                    (0, j.q)(() => {
                        n.scribe({ component: o, element: d, action: "impression", data: r });
                    }),
                    { namespace: { component: o, element: d }, data: r }
                );
            };
            function V(e) {
                const {
                        header: { clientEventInfo: a, displayType: n, facepile: o, landingContext: d, topicId: r },
                        onHeaderVisible: l,
                    } = e,
                    { data: s, namespace: i } = Q(r, a);
                return t.createElement($.Z, { style: K.root }, t.createElement(h.nO, { data: s, namespace: i }, t.createElement(z.Z, { displayType: n, facepile: o, onFollowHeaderOffscreen: ({ isOffscreen: e }) => l(!e), topicId: r, topicLandingContext: d, withDivider: !0 })));
            }
            const K = W.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var X = n(24949);
            const Y = (e, a) => a.module.selectPageConfiguration(e),
                J = (e, a) => a.module.selectInitialFetchStatus(e),
                ee = (0, X.P1)(Y, J, (e, a) => a !== p.Z.LOADED || (!!e && !!e.tabs)),
                ae = (0, A.Z)()
                    .propsFromState(() => ({ hasTabNavigation: ee, pageConfiguration: Y, initialFetchStatus: J }))
                    .withAnalytics();
            var ne = n(688715),
                te = n(815858),
                oe = n(651930),
                de = n(572067),
                re = n(265196),
                le = n(421575),
                se = n(907552),
                ie = n(466380);
            const ce = (e, a) => {
                    const n = a.navBar.topicId ? a.navBar.topicId : "";
                    return ie.Z.select(e, n);
                },
                ue = (0, A.Z)().propsFromState(() => ({ topic: ce })),
                be = (e) => (0, ne.ju)(`https://x.com/i/topics/${e}`),
                me = (e) => `twitter://topics_timeline?id=${e}`,
                he = s().ed88e742;
            const pe = W.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                ge = ue(function (e) {
                    const a = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: o },
                            pageNamespace: d,
                            topic: r,
                            withAppLinks: l,
                            withOpenGraphMeta: s,
                        } = e,
                        { featureSwitches: c } = t.useContext(N.rC),
                        u = c.isTrue("topic_landing_page_share_enabled"),
                        { data: b, namespace: m } = Q(a, o),
                        p = (0, i.Z)({}, d, m);
                    return r ? t.createElement(h.nO, { data: b, namespace: p }, t.createElement(t.Fragment, null, s ? t.createElement(de.Z, { canonical: be(a), description: r.description, title: r.name, type: "article" }) : null, l ? t.createElement(oe.Z, { deepLink: me(a) }) : null, t.createElement($.Z, { style: pe.rightControl }, t.createElement($.Z, { style: pe.followButtonContainer }, t.createElement(te.Z, { animateMount: !0, show: n, type: "fade" }, t.createElement(re.ZP, { size: "medium", textMode: le.q.FollowTopic, topic: r }))), u ? t.createElement(se.ZP, { copyLinkShareLabel: he, scribeNamespace: p, url: be(a) }) : null))) : null;
                }),
                De = s().e9f1fbcc,
                we = t.createElement(c.Z, null),
                fe = (e) => {
                    const { TabBar: a, backLocation: n, documentTitle: o, entryConfiguration: l, fab: s, getTabLink: c, hasTabNavigation: D, history: w, initialFetchStatus: f, initialPageNamespace: M, logoButton: y, module: A, onBackClick: E, pageConfiguration: k, prerollDisplayLocation: I, renderEmptyState: C, renderUnavailable: T, rightControl: x, selectedTabId: P, sidebarContent: _, timelinePrefix: N, title: Z, withAppLinks: v, withBottomLoginSignupBar: B, withDeferredView: R, withOpenGraphMeta: L, withSearchBox: G, withTweetButton: O } = e,
                        $ = (0, d.tj)(),
                        W = t.useMemo(() => ({ ...l, ...(0, H.Z)({ isLegacy: !0, isWide: $ }) }), [l, $]),
                        [z, j] = t.useState(!0),
                        { header: U, navBar: q, subtitle: Q, title: K } = k || {},
                        X = f === p.Z.LOADED ? K || Z : "",
                        Y = ((e, a, n) => {
                            const t = a?.scribeConfig,
                                { entityToken: o, ...d } = t || {},
                                r = a?.tabs,
                                l = e || r?.initialTabId,
                                s = r?.tabs.find((e) => e.id === l),
                                { entityToken: c, ...u } = s?.scribeConfig || {};
                            return (0, i.Z)({}, n, d, u);
                        })(P, k, M),
                        J = U ? t.createElement(V, { header: U, onHeaderVisible: j }) : null,
                        ee = q ? t.createElement(ge, { isHeaderOffscreen: !z, navBar: q, pageNamespace: Y, withAppLinks: v, withOpenGraphMeta: L }) : null,
                        ae = R ? u.Z : t.Fragment,
                        ne = t.createElement(t.Fragment, null, J, t.createElement(ae, null, t.createElement(F, { entryConfiguration: W, initialModule: A, prerollDisplayLocation: I, renderEmptyState: C, renderUnavailable: T, selectedTabId: P, timelinePrefix: N, title: Z, withoutHeadroom: !0 }))),
                        te = s ? t.createElement(b.Z, { component: r.Z, fab: s }, ne) : ne,
                        oe = c && D ? t.createElement(S, { getTabLink: c, module: A, selectedTabId: P }) : void 0;
                    return t.createElement(h.nO, { namespace: Y }, t.createElement(g.Z, null, t.createElement(m.Z, { TabBar: a, backLocation: n, documentTitle: o, history: w, logoButton: y, onBackClick: E, primaryContent: te, rightControl: ee || x, secondaryBar: oe, sidebarContent: _, subtitle: Q, title: J && z ? Z : X, withBottomLoginSignupBar: B, withSearchBox: G, withTweetButton: O })));
                };
            fe.defaultProps = { entryConfiguration: (0, O.G)({}), renderEmptyState: () => t.createElement(o.Z, { header: De }), sidebarContent: we, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const Me = ae(fe);
        },
        337455: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(202784),
                o = n(411916),
                d = n.n(o),
                r = n(373463),
                l = n.n(r);
            function s(e) {
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
        371493: (e, a, n) => {
            n.d(a, { $N: () => f, G0: () => w, Jj: () => M, O9: () => h, S: () => p, fy: () => g, jz: () => y, nm: () => D, qk: () => u, uI: () => b });
            var t = n(912021),
                o = n(644829),
                d = n(740527),
                r = n(750085),
                l = n(555875),
                s = n(899105),
                i = n(218951);
            const c = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                b = "explore-",
                m = 9e5;
            const h = ({ contentType: e, displayLocation: a, exploreGraphQLEnabled: n = !1, focalTweetId: t, includePageConfiguration: r = !1, initialTabId: l, profileUserId: c }) => {
                    const u = e || a || "main",
                        h = (function (e, a, n, t) {
                            return n ? `${e}${a}-tweet-${n}` : t ? `${e}${a}-user-${t}` : `${e}${a}`;
                        })(n ? "explore-graphql-" : b, u, t, c),
                        p = { timelineId: h, formatResponse: s.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: a, focal_tweet_id: t, include_page_configuration: r, initial_tab_id: l, profile_user_id: c, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${b}${u}`, staleIntervalMs: m };
                    return n ? (0, i.Z)({ ...p, formatResponse: d.Z, network: { ...p.network, getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreGraphQL } }) : (0, i.Z)(p);
                },
                p = () => {
                    const e = "explore-sidebar-gql",
                        a = { timelineId: e, formatResponse: r.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: m };
                    return (0, i.Z)(a);
                },
                g = (e, a) => h({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: a }),
                D = (0, t.Z)((e) => h({ exploreGraphQLEnabled: e, contentType: c.Trends })),
                w = (0, t.Z)((e) => h({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                f = () => (e, a) =>
                    e(
                        (0, l.CY)(a())
                            .filter((e) => 0 === e.indexOf(b))
                            .map((e) => (0, l.$q)(e)),
                    ),
                M = (e) => {
                    const a = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: a, formatResponse: r.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: a, staleIntervalMs: m };
                    return (0, i.Z)(n);
                },
                y = (e) => (0, i.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: r.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        16800: (e, a, n) => {
            n.r(a), n.d(a, { ExploreScreen: () => L, default: () => G });
            var t = n(202784),
                o = n(457311),
                d = n(688715),
                r = n(332920),
                l = n.n(r),
                s = n(233935),
                i = n(718e3),
                c = n(529256),
                u = n(572067),
                b = n(523561);
            const m = (0, b.Z)({
                    loader: () =>
                        Promise.all([
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
                            n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                            n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-3ba4c741"),
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
                            n.e("loader.NewsSentimentSidebar"),
                        ]).then(n.bind(n, 254274)),
                }),
                h = (0, b.Z)({ loader: () => n.e("loader.TryFullNewsSidebar").then(n.bind(n, 426873)) });
            var p = n(443781),
                g = n(32677),
                D = n(231035),
                w = n(337523),
                f = n(519896),
                M = n(371493),
                y = n(24949),
                A = n(912021),
                E = n(668214),
                k = n(558369);
            const I = (e, a) => a.match?.params?.tabId || void 0,
                C = () => {
                    const e = (0, A.Z)((e) => (0, M.fy)(e)),
                        a = (0, A.Z)((e, a) => (0, M.fy)(e, a));
                    return (0, y.P1)(
                        (e) => !0 === (0, k.FG)(e, "explore_graphql_enabled"),
                        I,
                        (a) => e(!0 === (0, k.FG)(a, "explore_graphql_enabled")).selectPageConfiguration(a),
                        (e, n, t) => a(e, t ? t?.tabs?.initialTabId : n),
                    );
                },
                T = (0, E.Z)()
                    .propsFromState(() => ({ initialTabModule: C(), selectedTabId: I }))
                    .withAnalytics({ page: "guide", section: "main" });
            const S = { ...(0, n(335632).G)({ withThirdPartyCards: !0, errorContext: "EXPLORE_SCREEN" }) },
                x = l().fcf3e54c,
                P = l().c797b44e,
                _ = l().a19ce060,
                N = () => t.createElement(D.Z, null),
                Z = () => t.createElement(o.Z, { message: _ }),
                v = 600,
                B = 315,
                R = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
            class L extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTabLink = (e) => ({ pathname: `/explore/tabs/${e}` })),
                        (this._handleSettingsClick = (e) => {
                            const { analytics: a } = this.props;
                            a.scribe({ element: "settings_button", action: "click" });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                render() {
                    const { analytics: e, history: a, initialTabModule: n, location: o, selectedTabId: r } = this.props,
                        { featureSwitches: l } = this.context,
                        b = t.createElement(g.Z, { history: a }),
                        p = l.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends",
                        D = t.createElement(s.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: p }),
                        y = o.state && o.state.searchFocused,
                        A = this.context.featureSwitches.isTrue("responsive_web_grok_05221996"),
                        E = A && !!r && "news" !== r && "for_you" !== r,
                        k = A && "news" === r,
                        I = A && "news" === r,
                        C = t.createElement(i.Z, { withNews: E, withSearchBox: !1, withTrends: !1 }, k && t.createElement(m, null), I && t.createElement(h, null)),
                        T = this.context.featureSwitches.isTrue("rweb_enable_logged_out_search_search_bar_enabled"),
                        _ = e.contextualScribeNamespace;
                    return t.createElement(t.Fragment, null, t.createElement(c.Z, { description: P, includeOpenGraphMeta: !1, title: x }), t.createElement(u.Z, { canonical: (0, d.ju)("https://x.com/explore"), description: P, image: R, imageH: B, imageW: v, title: x, type: "article" }), t.createElement(w.Z, { entryConfiguration: S, fab: b, getTabLink: this._getTabLink, history: a, initialPageNamespace: _, module: n, onBackClick: y ? this._handleBackClick : void 0, prerollDisplayLocation: f.Nw.OTHER, renderEmptyState: N, renderUnavailable: Z, rightControl: D, selectedTabId: r, sidebarContent: C, timelinePrefix: M.uI, title: x, withBottomLoginSignupBar: !0, withDeferredView: !0, withSearchBox: T }), !1);
                }
            }
            L.contextType = p.rC;
            const G = T(L);
        },
        611423: (e, a, n) => {
            n.d(a, { Z: () => d });
            var t = n(553093),
                o = n(383675);
            const d = ({ timelinePrefix: e = "generic-timeline-", urtUrl: a }) => {
                const { url: n, urtEndpointOptions: d } = a,
                    { cacheId: r, requestParams: l, timeline: s } = d || {};
                return s?.id ? (0, o.R)(s.id) : (0, o.Z)({ timelineId: r || `${e}${(0, t.Sz)(a)}`, endpointUrl: n, endpointParams: l || {} });
            };
        },
        392027: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t = n(202784),
                o = n(154003),
                d = n(392237);
            class r extends t.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: a, color: n, disabled: d, href: r, icon: s, label: i, onPress: c, renderMenu: u, style: b, testID: m } = this.props,
                        h = ((e, a) => ("primary" === e && "white" === a ? "whiteOnColor" : "white" === e && "primary" === a ? "primaryOnWhite" : a))(a, n);
                    return t.createElement(o.ZP, { "aria-label": e, backgroundColor: a, color: h, disabled: d, icon: s, link: r, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !i && l.iconOnly, b], testID: m }, i);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = d.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = r;
        },
        403556: (e, a, n) => {
            n.d(a, { Z: () => I });
            var t = n(807896),
                o = n(202784),
                d = n(194504),
                r = n(235902),
                l = n(392237),
                s = n(325686),
                i = n(332920),
                c = n.n(i),
                u = n(912021),
                b = n(516951),
                m = n(731708),
                h = n(310088),
                p = n(175993),
                g = n(58881),
                D = n(530732);
            const w = c().d2414d31,
                f = () => c().ce4e85ae,
                M = c().fb9f6f39;
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: n, query: t, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: t, method: "push", state: { ...o, lockScroll: a } };
                        })),
                        (this._unlisten = b.Z),
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
                    const { Icon: e, "aria-label": a, badgeCount: n, badgePip: t, children: d, color: r, isActive: i, isCompact: c, isPillLink: u, isRoundedRect: b, isWebRedesign: p, retainScrollPosition: y, style: E, to: k } = this.props,
                        { location: I } = this.state,
                        C = k ? this._getMemoizedLink(k, y) : void 0,
                        T = i ? i(k) : I?.pathname === C?.pathname,
                        S = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        x = p ? "medium" : T ? "bold" : "medium";
                    return o.createElement(D.Z, { "aria-label": a, "aria-selected": T, focusable: !!T, interactiveStyles: S, link: C, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? A.pill : A.link, u && T ? A.active : null, c ? (u ? A.compactPill : A.compactLink) : null, b ? A.roundedRect : null, E], withoutInteractiveStyles: p || u }, ({ isFocused: a, isHovered: i }) => o.createElement(s.Z, { style: u && A.flexGrow }, o.createElement(m.ZP, { size: p ? "headline2" : void 0, style: [A.text, { color: this._getTextColor(T, i, p, u) }, c && A.compactText, p && a && A.focusedText], weight: x }, e && o.createElement(e, { style: A.icon }), d, p || u ? null : o.createElement(s.Z, { style: T && [A.border, { backgroundColor: l.default.theme.colors[r] }] })), n ? o.createElement(h.Z, { count: n, standalone: !0, style: [A.badge, n >= 10 && A.multiDigitBadge, n >= 20 && A.truncatedCountBadge], truncatedCountFormatter: M, unreadCountLabel: w, withBorder: !1 }) : t ? o.createElement(h.Z, { pip: !0, standalone: !0, style: A.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (y.contextType = p.Z), (y.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const A = l.default.create((e) => ({
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
                E = y,
                k = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                I = ({ alignFirstItem: e, "aria-label": a, isCompact: n, isPillLink: l, isRoundedRect: s, links: i, style: c, visibleItemIndex: u }) => {
                    const b = i
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        h = m() && !l,
                        p = o.useMemo(
                            () =>
                                i.filter(Boolean).map(({ label: a, viewType: d, ...r }, i) => {
                                    const c = h ? [k.linkRedesign, 0 === i && k.firstLinkRedesign, e && 0 === i && k.withNoPaddingStart] : void 0;
                                    return o.createElement(E, (0, t.Z)({ viewType: d }, r, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: h, style: c }), a);
                                }),
                            [e, n, l, s, h, i],
                        );
                    return o.createElement(d.Z, { "aria-label": a, buttonsContainerStyle: l && k.gap, childrenStyle: !h && k.flexGrow, key: b, style: [l ? null : k.segmentedControl, h && k.leftAligned, c], visibleItemIndex: u }, p);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.f717586a.js.map
