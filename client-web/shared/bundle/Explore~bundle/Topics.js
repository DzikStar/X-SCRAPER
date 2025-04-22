"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Explore~bundle.Topics", "bundle.AudioSpaceDetail"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(769471),
                a = n(934309),
                o = n(750085),
                r = n(401388),
                s = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, r.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: a, topic: o, ...r } = n,
                                l = a && (0, s.Zn)(e, a);
                            return { ...r, topicId: (0, s.S0)(e, o), facepile: l };
                        })(t, e),
                        a = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, s.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: a.navBar && a.navBar, title: a.title, subtitle: a.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, o.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, o.Z)(n.initialTimeline.timeline.timeline) : (0, o.Z)(a.cY);
                    var n;
                    const { globalObjects: r, pageConfiguration: s } = c(e);
                    return { ...t, globalObjects: (0, i.Z)(r, t.globalObjects), pageConfiguration: s };
                };
        },
        33104: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            var i = n(325686);
            const a = (0, n(337455).Z)(i.Z);
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                o = n(325686),
                r = n(392237),
                s = n(655352);
            const l = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: r = !0, style: c, withoutBottomPadding: d, ...p }) => {
                    const m = t || o.Z,
                        u = r && !(0, s.ZP)();
                    return a.createElement(m, (0, i.Z)({}, p, { style: [u && !d && l.root, c] }), e, u ? n : null);
                };
        },
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(202784),
                a = n(99107),
                o = n(272175),
                r = n(674132);
            const s = n.n(r)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = s;
                    return e ? i.createElement(o.ql, null, i.createElement("meta", { content: e, property: "al:ios:url" }), i.createElement("meta", { content: a.AF, property: "al:ios:app_store_id" }), i.createElement("meta", { content: t, property: "al:ios:app_name" }), i.createElement("meta", { content: e, property: "al:android:url" }), i.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), i.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(202784),
                a = n(272175);
            const o = (e) => {
                const { canonical: t, description: n = "", image: o, imageAlt: r, imageH: s, imageType: l, imageW: c, title: d, ttl: p, type: m } = e;
                return i.createElement(a.ql, null, m ? i.createElement("meta", { content: m, property: "og:type" }) : null, t ? i.createElement("meta", { content: t, property: "og:url" }) : null, d ? i.createElement("meta", { content: d, property: "og:title" }) : null, i.createElement("meta", { content: n, property: "og:description" }), o ? i.createElement("meta", { content: o, property: "og:image" }) : null, l ? i.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? i.createElement("meta", { content: c, property: "og:image:width" }) : null, s ? i.createElement("meta", { content: s, property: "og:image:height" }) : null, r ? i.createElement("meta", { content: r, property: "og:image:alt" }) : null, p ? i.createElement("meta", { content: p, property: "og:ttl" }) : null);
            };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                o = n(107267),
                r = n(403556),
                s = n(791632);
            const l = (e) => {
                    const t = (0, o.useHistory)();
                    return a.createElement(r.Z, (0, i.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = a.memo(l);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                a = n(500002),
                o = n(668214),
                r = n(997174),
                s = n(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class c extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: i },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: o, search: r },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && n !== o) || i !== r || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(l(c));
        },
        784917: (e, t, n) => {
            n.d(t, { Z: () => be });
            var i = n(202784),
                a = n(457311),
                o = n(708852),
                r = n(108362),
                s = n(674132),
                l = n.n(s),
                c = n(769471),
                d = n(718e3),
                p = n(33104),
                m = n(789831),
                u = n(252021),
                g = n(293115),
                h = n(87063),
                b = n(652904),
                f = n(507651),
                y = n(3138),
                C = n(655352),
                E = n(503229),
                T = n(71620),
                v = n(668214);
            const Z = (e, t) => t.module.selectInitialFetchStatus(e),
                _ = (e, t) => t.module.selectPageConfiguration && t.module.selectPageConfiguration(e),
                S = (e, t) => {
                    const n = t.selectedTabId,
                        i = _(e, t);
                    return i && i.tabs && i.tabs.tabs.find((e) => e.id === n);
                },
                x = (0, v.Z)()
                    .propsFromState(() => ({ initialFetchStatus: Z, pageConfiguration: _, selectedTab: S }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, T.zr)("RICH_SEGMENTED_TIMELINE"), fetchInitial: e.fetchInitial }))
                    .withAnalytics();
            class w extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchPageModule = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, fetchInitial: n, pageConfiguration: i } = this.props,
                                a = i ? i.scribeConfig : void 0;
                            return n().then(({ performed: t }) => {
                                t && e.scribe({ ...this._getScribeNamespace(a), action: "get_initial" });
                            }, t(y.M));
                        }),
                        (this._render = () => {
                            const { analytics: e, getTabLink: t, pageConfiguration: n, selectedTab: a } = this.props,
                                o = n?.tabs;
                            if (o && o.tabs) {
                                const r = (a && a.id) || o.initialTabId,
                                    s = n ? n.scribeConfig : void 0;
                                let l;
                                const c = o.tabs.map((n, i) => {
                                    const a = n.id === r;
                                    return (
                                        a && (l = i),
                                        {
                                            isActive: () => a,
                                            key: n.labelText,
                                            label: n.labelText,
                                            onClick: () => {
                                                e.scribe(this._buildTabNamespace(this._getScribeNamespace(s), this._getScribeNamespace(n.scribeConfig)));
                                            },
                                            to: t(n.id),
                                            token: n.scribeConfig?.entityToken,
                                        }
                                    );
                                });
                                return i.createElement(i.Fragment, null, i.createElement(f.Z, { alignFirstItem: (0, C.ZP)(), links: c, visibleItemIndex: l }));
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
            const I = x((0, E.Z)(w));
            var k = n(912021),
                B = n(383675),
                P = n(611423),
                L = n(810641);
            const D = (e, t) => t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e),
                R = (e, t) => {
                    const n = t.selectedTabId,
                        i = D(e, t);
                    return i && i.tabs && i.tabs.tabs.find((e) => e.id === n);
                },
                F = (0, v.Z)()
                    .propsFromState(() => ({ pageConfiguration: D, selectedTab: R }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, T.zr)("RICH_SEGMENTED_TIMELINE") }))
                    .withAnalytics();
            class M extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTimelineNamespace = () => {
                            const { analytics: e, pageConfiguration: t, selectedTab: n } = this.props,
                                i = n?.scribeConfig || t?.scribeConfig;
                            if (i) {
                                const { entityToken: e, ...t } = i;
                                return t;
                            }
                            return e.contextualScribeNamespace;
                        }),
                        (this._getModule = (0, k.Z)((e, t, n, i) => {
                            if (e?.id !== t) {
                                if (e?.urtEndpoint) return (0, P.Z)({ urtUrl: e?.urtEndpoint, timelinePrefix: i });
                                if (e?.graphQLTimelineId) return (0, B.R)(e.graphQLTimelineId);
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
                    const { entryConfiguration: e, initialModule: t, pageConfiguration: n, prerollDisplayLocation: a, refreshControl: o, renderEmptyState: r, renderUnavailable: s, selectedTab: l, timelinePrefix: c, title: d, withoutHeadroom: p } = this.props,
                        m = this._getModule(l, n?.tabs?.initialTabId, t, c),
                        u = this._getRefreshIntervalSecForCurrentTab(),
                        h = u ? 1e3 * u : void 0;
                    return i.createElement(g.nO, { namespace: this._getTimelineNamespace() }, i.createElement(L.Z, { entryConfiguration: e, module: m, pollingIntervalMsOverride: h, prerollDisplayLocation: a, refreshControl: o, renderEmptyState: r, renderUnavailable: s, title: d, withoutHeadroom: p }));
                }
            }
            const N = F(M);
            var A = n(929482),
                H = n(335632),
                O = n(325686),
                W = n(392237),
                $ = n(950708),
                z = n(647712);
            function G(e) {
                const {
                        header: { clientEventInfo: t, displayType: n, facepile: a, landingContext: o, topicId: r },
                        onHeaderVisible: s,
                    } = e,
                    { data: l, namespace: c } = (0, z.Z)(r, t);
                return i.createElement(O.Z, { style: U.root }, i.createElement(g.nO, { data: l, namespace: c }, i.createElement($.Z, { displayType: n, facepile: a, onFollowHeaderOffscreen: ({ isOffscreen: e }) => s(!e), topicId: r, topicLandingContext: o, withDivider: !0 })));
            }
            const U = W.default.create((e) => ({ root: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" } }));
            var j = n(24949);
            const q = (e, t) => t.module.selectPageConfiguration(e),
                V = (e, t) => t.module.selectInitialFetchStatus(e),
                Q = (0, j.P1)(q, V, (e, t) => t !== h.Z.LOADED || (!!e && !!e.tabs)),
                K = (0, v.Z)()
                    .propsFromState(() => ({ hasTabNavigation: Q, pageConfiguration: q, initialFetchStatus: V }))
                    .withAnalytics();
            var Y = n(688715),
                J = n(815858),
                X = n(651930),
                ee = n(572067),
                te = n(443781),
                ne = n(265196),
                ie = n(421575),
                ae = n(907552),
                oe = n(466380);
            const re = (e, t) => {
                    const n = t.navBar.topicId ? t.navBar.topicId : "";
                    return oe.Z.select(e, n);
                },
                se = (0, v.Z)().propsFromState(() => ({ topic: re })),
                le = (e) => (0, Y.ju)(`https://x.com/i/topics/${e}`),
                ce = (e) => `twitter://topics_timeline?id=${e}`,
                de = l().ed88e742;
            const pe = W.default.create((e) => ({ rightControl: { flexDirection: "row" }, followButtonContainer: { justifyContent: "center", paddingEnd: e.spaces.space4 } })),
                me = se(function (e) {
                    const t = e.navBar.topicId ? e.navBar.topicId : "",
                        {
                            isHeaderOffscreen: n,
                            navBar: { clientEventInfo: a },
                            pageNamespace: o,
                            topic: r,
                            withAppLinks: s,
                            withOpenGraphMeta: l,
                        } = e,
                        { featureSwitches: d } = i.useContext(te.rC),
                        p = d.isTrue("topic_landing_page_share_enabled"),
                        { data: m, namespace: u } = (0, z.Z)(t, a),
                        h = (0, c.Z)({}, o, u);
                    return r ? i.createElement(g.nO, { data: m, namespace: h }, i.createElement(i.Fragment, null, l ? i.createElement(ee.Z, { canonical: le(t), description: r.description, title: r.name, type: "article" }) : null, s ? i.createElement(X.Z, { deepLink: ce(t) }) : null, i.createElement(O.Z, { style: pe.rightControl }, i.createElement(O.Z, { style: pe.followButtonContainer }, i.createElement(J.Z, { animateMount: !0, show: n, type: "fade" }, i.createElement(ne.ZP, { size: "medium", textMode: ie.q.FollowTopic, topic: r }))), p ? i.createElement(ae.ZP, { copyLinkShareLabel: de, scribeNamespace: h, url: le(t) }) : null))) : null;
                }),
                ue = l().e9f1fbcc,
                ge = i.createElement(d.Z, null),
                he = (e) => {
                    const { TabBar: t, backLocation: n, documentTitle: a, entryConfiguration: s, fab: l, getTabLink: d, hasTabNavigation: f, history: y, initialFetchStatus: C, initialPageNamespace: E, logoButton: T, module: v, onBackClick: Z, pageConfiguration: _, prerollDisplayLocation: S, renderEmptyState: x, renderUnavailable: w, rightControl: k, selectedTabId: B, sidebarContent: P, timelinePrefix: L, title: D, withAppLinks: R, withBottomLoginSignupBar: F, withDeferredView: M, withOpenGraphMeta: H, withSearchBox: O, withTweetButton: W } = e,
                        $ = (0, o.tj)(),
                        z = i.useMemo(() => ({ ...s, ...(0, A.Z)({ isLegacy: !0, isWide: $ }) }), [s, $]),
                        [U, j] = i.useState(!0),
                        { header: q, navBar: V, subtitle: Q, title: K } = _ || {},
                        Y = C === h.Z.LOADED ? K || D : "",
                        J = ((e, t, n) => {
                            const i = t?.scribeConfig,
                                { entityToken: a, ...o } = i || {},
                                r = t?.tabs,
                                s = e || r?.initialTabId,
                                l = r?.tabs.find((e) => e.id === s),
                                { entityToken: d, ...p } = l?.scribeConfig || {};
                            return (0, c.Z)({}, n, o, p);
                        })(B, _, E),
                        X = q ? i.createElement(G, { header: q, onHeaderVisible: j }) : null,
                        ee = V ? i.createElement(me, { isHeaderOffscreen: !U, navBar: V, pageNamespace: J, withAppLinks: R, withOpenGraphMeta: H }) : null,
                        te = M ? p.Z : i.Fragment,
                        ne = i.createElement(i.Fragment, null, X, i.createElement(te, null, i.createElement(N, { entryConfiguration: z, initialModule: v, prerollDisplayLocation: S, renderEmptyState: x, renderUnavailable: w, selectedTabId: B, timelinePrefix: L, title: D, withoutHeadroom: !0 }))),
                        ie = l ? i.createElement(m.Z, { component: r.Z, fab: l }, ne) : ne,
                        ae = d && f ? i.createElement(I, { getTabLink: d, module: v, selectedTabId: B }) : void 0;
                    return i.createElement(g.nO, { namespace: J }, i.createElement(b.Z, null, i.createElement(u.Z, { TabBar: t, backLocation: n, documentTitle: a, history: y, logoButton: T, onBackClick: Z, primaryContent: ie, rightControl: ee || k, secondaryBar: ae, sidebarContent: P, subtitle: Q, title: X && U ? D : Y, withBottomLoginSignupBar: F, withSearchBox: O, withTweetButton: W })));
                };
            he.defaultProps = { entryConfiguration: (0, H.G)({}), renderEmptyState: () => i.createElement(a.Z, { header: ue }), sidebarContent: ge, withDeferredView: !1, withAppLinks: !1, withOpenGraphMeta: !1 };
            const be = K(he);
        },
        337455: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(202784),
                a = n(411916),
                o = n.n(a),
                r = n(373463),
                s = n.n(r);
            function l(e) {
                class t extends i.Component {
                    constructor(e, t) {
                        super(e, t), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        o()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? i.createElement(e, this.props) : null;
                    }
                }
                return s()(t, e);
            }
        },
        553093: (e, t, n) => {
            n.d(t, { Sz: () => i });
            const i = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const n = t.join("");
                    return a(n, 0).toString();
                },
                a = (e, t) => {
                    const n = "string" == typeof e ? e : String(e);
                    let i = t;
                    for (let e = 0; e < n.length; e++) {
                        (i = (i << 5) - i + n.charCodeAt(e)), (i |= 0);
                    }
                    return i;
                };
        },
        647712: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                a = n(187669),
                o = n(725516),
                r = n(942893);
            const s = (e, t) => {
                const n = (0, o.z)(),
                    { component: s, element: l } = t || {},
                    c = i.useMemo(() => ({ items: [r.Z.forTopic(e, t)] }), [t, e]);
                return (
                    (0, a.q)(() => {
                        n.scribe({ component: s, element: l, action: "impression", data: c });
                    }),
                    { namespace: { component: s, element: l }, data: c }
                );
            };
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(553093),
                a = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: r, requestParams: s, timeline: l } = o || {};
                return l?.id ? (0, a.R)(l.id) : (0, a.Z)({ timelineId: r || `${e}${(0, i.Sz)(t)}`, endpointUrl: n, endpointParams: s || {} });
            };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => S });
            var i = n(807896),
                a = n(202784),
                o = n(194504),
                r = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(674132),
                d = n.n(c),
                p = n(912021),
                m = n(516951),
                u = n(731708),
                g = n(310088),
                h = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                E = d().fb9f6f39;
            class T extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: i, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const a = s.default.theme.colors.text,
                                o = s.default.theme.colors.gray700;
                            return n || i ? (e || t ? a : o) : e ? a : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: o, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: m, isWebRedesign: h, retainScrollPosition: T, style: Z, to: _ } = this.props,
                        { location: S } = this.state,
                        x = _ ? this._getMemoizedLink(_, T) : void 0,
                        w = c ? c(_) : S?.pathname === x?.pathname,
                        I = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        k = h ? "medium" : w ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": w, focusable: !!w, interactiveStyles: I, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? v.pill : v.link, p && w ? v.active : null, d ? (p ? v.compactPill : v.compactLink) : null, m ? v.roundedRect : null, Z], withoutInteractiveStyles: h || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && v.flexGrow }, a.createElement(u.ZP, { size: h ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(w, c, h, p) }, d && v.compactText, h && t && v.focusedText], weight: k }, e && a.createElement(e, { style: v.icon }), o, h || p ? null : a.createElement(l.Z, { style: w && [v.border, { backgroundColor: s.default.theme.colors[r] }] })), n ? a.createElement(g.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: E, unreadCountLabel: y, withBorder: !1 }) : i ? a.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (T.contextType = h.Z), (T.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = s.default.create((e) => ({
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
                Z = T,
                _ = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        g = u() && !s,
                        h = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...r }, c) => {
                                    const d = g ? [_.linkRedesign, 0 === c && _.firstLinkRedesign, e && 0 === c && _.withNoPaddingStart] : void 0;
                                    return a.createElement(Z, (0, i.Z)({ viewType: o }, r, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: g, style: d }), t);
                                }),
                            [e, n, s, l, g, c],
                        );
                    return a.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: s && _.gap, childrenStyle: !g && _.flexGrow, key: m, style: [s ? null : _.segmentedControl, g && _.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Explore~bundle.Topics.f519ecba.js.map
