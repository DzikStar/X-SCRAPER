"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Topics"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                i = o(614983),
                n = o.n(i),
                a = o(325686),
                s = o(370006),
                c = o(786998),
                l = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: n, isFullWidth: a, isLarge: l, leftControl: d, middleControl: h, position: m, rightControl: u, secondaryBar: g, style: E, subtitle: f, title: _, titleDomId: b, titleIconCell: y, titleIconCellSize: T, withBackground: Z, withWideContainer: w } = this.props,
                        { isModal: k } = this.context,
                        C = n ? d : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        I = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!Z, k, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(c.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: l, leftControl: C, middleControl: h, position: p(m, k, i), rightControl: u, style: E, subtitle: f, title: _, titleDomId: b, titleIconCell: y, titleIconCellSize: T, withBackground: I, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var r = o(202784),
                i = o(325686),
                n = o(108362),
                a = o(386802),
                s = o(392237),
                c = o(652904),
                l = o(555079),
                d = o(625661),
                p = o(449067),
                h = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: s, history: c, isFullWidth: p, isLarge: h, middleControl: m, onBackClick: g, rightControl: E, secondaryBar: f, subtitle: _, title: b } = this.props,
                                { isModal: y } = this.context;
                            return r.createElement(i.Z, { style: y ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !y, hideBackButton: s, history: c, isFullWidth: p, isLarge: h, middleControl: m, onBackClick: g, ref: e, rightControl: E, secondaryBar: f, style: [y && u.appBarModal, t], subtitle: _, title: b, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: l, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: E } = this.props,
                        { isModal: f } = this.context,
                        _ = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(c.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: g }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, f && u.rootModal] }, !f && _, r.createElement(n.Z, { isFullWidth: l, isLarge: d, style: [u.container, f && u.containerModal, a] }, f ? r.createElement(h.Z, { style: u.viewport }, _, o) : o), t ? r.createElement(i.Z, { style: [u.bottomBarModal, !f && !E && u.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = a.Z);
            const u = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        983389: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                i = o(272175);
            const n = ({ description: e }) => r.createElement(i.ql, null, r.createElement("meta", { content: e, name: "description" }));
        },
        42508: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, o) => {
            o.d(t, { ZP: () => i, n5: () => a });
            var r = o(42508);
            const i = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: o, isWithheld: r, user: i, userProfileInterstitialType: a, viewerUserId: s }) => {
                    const c = !!s && s === i.id_str,
                        l = i.blocked_by,
                        d = i.blocking,
                        p = n({ displaySensitiveMedia: e, isOwnProfile: c, user: i, userProfileInterstitialType: a }),
                        h = (c || !r) && !o;
                    return { avatar: c || (!p && !t && !o && !r), badges: c || !r, description: c || (!d && !l && !p && !o && !r), followButton: !(c || l || p || t || o || r), followersYouKnow: !c && !l && !d && !p && !t && !o && !r && (i.following || !i.protected), followIndicator: !r, fullName: h, label: h, stats: c || (!l && !p && !o && !r), subscriptionsCount: c || !i.has_hidden_subscriptions_on_profile };
                },
                n = ({ displaySensitiveMedia: e, isOwnProfile: t, user: o, userProfileInterstitialType: i }) => (i === r.Z.SensitiveMedia || i === r.Z.OffensiveProfileContent) && !(t || o.following || e),
                a = ({ isOwnProfile: e, user: t }) => {
                    const o = t.protected && !t.following;
                    return e || !o;
                };
        },
        371493: (e, t, o) => {
            o.d(t, { $N: () => b, G0: () => _, Jj: () => y, O9: () => u, S: () => g, fy: () => E, jz: () => T, nm: () => f, qk: () => p, uI: () => h });
            var r = o(912021),
                i = o(644829),
                n = o(740527),
                a = o(750085),
                s = o(555875),
                c = o(899105),
                l = o(218951);
            const d = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                h = "explore-",
                m = 9e5;
            const u = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: o = !1, focalTweetId: r, includePageConfiguration: a = !1, initialTabId: s, profileUserId: d }) => {
                    const p = e || t || "main",
                        u = (function (e, t, o, r) {
                            return o ? `${e}${t}-tweet-${o}` : r ? `${e}${t}-user-${r}` : `${e}${t}`;
                        })(o ? "explore-graphql-" : h, p, r, d),
                        g = { timelineId: u, formatResponse: c.Z, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchExplore, getEndpointParams: (o) => ({ ...o, candidate_source: e, display_location: t, focal_tweet_id: r, include_page_configuration: a, initial_tab_id: s, profile_user_id: d, entity_tokens: !1 }) }, context: o ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${h}${p}`, staleIntervalMs: m };
                    return o ? (0, l.Z)({ ...g, formatResponse: n.Z, network: { ...g.network, getEndpoint: (e) => e.withEndpoint(i.Z).fetchExploreGraphQL } }) : (0, l.Z)(g);
                },
                g = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: m };
                    return (0, l.Z)(t);
                },
                E = (e, t) => u({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, r.Z)((e) => u({ exploreGraphQLEnabled: e, contentType: d.Trends })),
                _ = (0, r.Z)((e) => u({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                b = () => (e, t) =>
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(h))
                            .map((e) => (0, s.$q)(e)),
                    ),
                y = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        o = { timelineId: t, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: m };
                    return (0, l.Z)(o);
                },
                T = (e) => (0, l.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: a.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        642081: (e, t, o) => {
            o.r(t), o.d(t, { TopicLandingPage: () => Q, default: () => q });
            var r = o(202784),
                i = o(688715),
                n = o(457311),
                a = o(111677),
                s = o.n(a),
                c = o(718e3),
                l = o(651930),
                d = o(983389),
                p = o(572067),
                h = o(337523),
                m = o(293115),
                u = o(807469),
                g = o(740527),
                E = o(218951);
            const f = "topic-landing-page";
            var _ = o(912021),
                b = o(903019),
                y = o(668214),
                T = o(466380);
            const Z = (e, t) => t.location.state?.referringScribeNamespace,
                w = (e, t) => t.match.params.topicId,
                k = (e, t) => {
                    const o = w(0, t);
                    return o ? T.Z.select(e, o) : void 0;
                },
                C = (0, y.Z)().propsFromState(() => {
                    const e = (0, _.Z)((e, t) => (({ params: e, topicId: t }) => (0, E.Z)({ context: "FETCH_TOPIC_TIMELINE", network: { getEndpoint: (e) => e.withEndpoint(u.ZP).fetchTopicLandingPage, getEndpointParams: ({ cursor: o, ...r }) => ({ ...r, ...e, cursor: "string" == typeof o ? o : void 0, topicId: t }) }, formatResponse: g.Z, perfKey: f, timelineId: `${f}-${t}` }))({ topicId: e, params: t ? { data_lookup_id: t } : void 0 }));
                    return {
                        module: (t, o) => {
                            const r = w(0, o),
                                i = (0, b.XN)(t, o);
                            return e(r, i);
                        },
                        referringScribeNamespace: Z,
                        topic: k,
                        topicId: w,
                    };
                });
            var I = o(269011),
                P = o(335632),
                S = o(962741);
            const v = { ...(0, P.G)({}), [S.ZP.User]: (0, I.Z)({ shouldScribeImpression: !0 }) };
            var x = o(840647),
                B = o(942893);
            const L = (0, _.Z)((e, t) => {
                    let o;
                    if (e) {
                        const { action: t = "", component: r = "", element: i = "", page: n = "", section: a = "" } = e;
                        o = `${(0, x.Z)().clientName}:${n}:${a}:${r}:${i}:${t}`;
                    }
                    return { items: t ? [{ ...B.Z.forTopic(t) }] : void 0, referring_event: o };
                }),
                N = (e) => (0, i.ju)(`https://x.com/i/topics/${e}`),
                F = (e) => `twitter://topics_timeline?id=${e}`,
                R = s().a2a3824a,
                M = s().b8533bac,
                O = s().g3e87c61,
                $ = s().g02269ba,
                H = s().e80d2509,
                A = "Talk about Topics",
                G = "Be the first to post about this Topic and see it here.",
                U = "/",
                W = r.createElement(c.Z, { withWhoToFollow: !1 }),
                z = { page: "topic_landing", section: "main" };
            function Q({ history: e, module: t, referringScribeNamespace: o, topic: i, topicId: a }) {
                const s = i?.name ? O({ topicName: i?.name }) : M,
                    c = i?.name ? H({ topicName: i?.name }) : $;
                return r.createElement(m.nO, { data: L(o, a) }, r.createElement(r.Fragment, null, r.createElement(d.Z, { description: c }), r.createElement(p.Z, { canonical: N(a), description: c, title: s, type: "article" }), r.createElement(l.Z, { deepLink: F(a) }), r.createElement(h.Z, { backLocation: U, documentTitle: s, entryConfiguration: v, history: e, initialPageNamespace: z, module: t, renderEmptyState: () => r.createElement(n.Z, { header: A, message: G }), sidebarContent: W, timelinePrefix: f, title: R })));
            }
            const q = C(Q);
        },
        204819: (e, t, o) => {
            o.r(t), o.d(t, { TopicsEducationScreen: () => y, default: () => Z });
            var r = o(202784),
                i = o(325686),
                n = o(731708),
                a = o(946847),
                s = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(452693),
                p = o(980407),
                h = o(615027),
                m = o(668214),
                u = o(919022);
            const g = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: u.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ screenName: e && e.screen_name }))
                    .withAnalytics({ page: "topic_education" }),
                E = l().g931a6e5,
                f = l().j24c37b2,
                _ = l().h3f9027a,
                b = l().e241095e;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = (e) => null),
                        (this._handleClose = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._getSubtext = () => r.createElement(i.Z, null, r.createElement(n.ZP, { color: "gray700" }, _), r.createElement(n.ZP, { color: "gray700", style: T.paddingTop }, this._getSecondaryText()))),
                        (this._getSecondaryText = () => {
                            const { screenName: e } = this.props,
                                t = { pathname: e ? `/${e}/topics` : "/home", method: "replace" },
                                o = { yourTopicsLink: r.createElement(n.ZP, { "aria-label": b, color: "link", link: t, role: "link", withInteractiveStyling: !0 }) };
                            return r.createElement(l().I18NFormatMessage, { $i18n: "e1d95725" }, r.cloneElement(o.yourTopicsLink, null, l().f8bc75e2));
                        });
                }
                render() {
                    const { location: e } = this.props;
                    return e.state && e.state.topicName ? r.createElement(p.Z, { renderHeader: this._renderHeader }, this._renderContent(e.state.topicName)) : r.createElement(h.Z, { to: "/home" });
                }
                _renderContent(e) {
                    return r.createElement(a.Z, { actionLabel: f, graphic: d.default, headline: E({ topic: e }), onAction: this._handleClose, onClose: this._handleClose, subtext: this._getSubtext() });
                }
            }
            const T = s.default.create((e) => ({ paddingTop: { paddingTop: e.spaces.space16 } })),
                Z = g(y);
        },
        191855: (e, t, o) => {
            o.r(t), o.d(t, { TopicsPicker: () => I, default: () => P });
            var r = o(202784),
                i = o(111677),
                n = o.n(i),
                a = o(187669),
                s = o(718e3),
                c = o(651930),
                l = o(337523),
                d = o(24949),
                p = o(668214),
                h = o(807469),
                m = o(740527),
                u = o(218951);
            var g = o(735313);
            const E = (e, t) => "PUSH" === t.history.action || "REPLACE" === t.history.action,
                f = (e, t) => t.location.state?.previousPath,
                _ = (e, t) => t.match?.params?.tabId || void 0,
                b = () =>
                    (0, d.P1)(_, (e) => {
                        return (t = e), (0, u.Z)({ context: "FETCH_TOPICS_PICKER_PAGE", network: { getEndpoint: (e) => e.withEndpoint(h.ZP).fetchTopicsPickerPage, getEndpointParams: () => ({ topicId: t }) }, perfKey: "topics-picker", formatResponse: m.Z, timelineId: `topics-picker-${t || "home"}` });
                        var t;
                    }),
                y = (0, p.Z)()
                    .propsFromState(() => ({ isForwardNavigation: E, module: b(), previousPath: f, selectedTabId: _ }))
                    .propsFromActions(() => ({ clearTimelineCache: g.Z })),
                T = n().d094c720,
                Z = { page: "topics_picker", section: "main" },
                w = (e) => (e ? `twitter://topics/picker/${e}` : "twitter://topics/picker"),
                k = (e) => ({ pathname: `/i/topics/picker/${e}` }),
                C = r.createElement(s.Z, { withTopicsToFollow: !1 }),
                I = (e) => {
                    const { clearTimelineCache: t, history: o, isForwardNavigation: i, module: n, previousPath: s, selectedTabId: d } = e;
                    return (
                        (0, a.q)(() => {
                            i && !s?.includes("/i/topics/picker") && t(n);
                        }),
                        r.createElement(r.Fragment, null, r.createElement(c.Z, { deepLink: w(d) }), r.createElement(l.Z, { backLocation: "/home", getTabLink: k, history: o, initialPageNamespace: Z, module: n, selectedTabId: d, sidebarContent: C, timelinePrefix: "topics-picker-", title: T }))
                    );
                },
                P = y(I);
        },
        55123: (e, t, o) => {
            o.r(t), o.d(t, { TrendingEventHistoryScreen: () => Z, default: () => w });
            var r = o(202784),
                i = o(457311),
                n = o(111677),
                a = o.n(n),
                s = o(912021),
                c = o(718e3),
                l = o(252021),
                d = o(443781),
                p = o(652904),
                h = o(810641),
                m = o(371493),
                u = o(668214);
            const g = { page: "trend_history" },
                E = (e, t) => t.match.params.trendId,
                f = () => g,
                _ = (0, u.Z)()
                    .propsFromState(() => ({ trendId: E, scribeNamespace: f }))
                    .withAnalytics(g),
                b = a().e44b4256,
                y = a().a74af3f8,
                T = () => r.createElement(i.Z, { header: y });
            class Z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => r.createElement(h.Z, { module: this._getModule(), renderEmptyState: T, title: "Story History" })),
                        (this._getMemoizedModule = (0, s.Z)((e) => (0, m.jz)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    const { history: e, trendId: t } = this.props;
                    return r.createElement(p.Z, null, r.createElement(l.Z, { backLocation: `/i/trending/${t}`, documentTitle: b, history: e, primaryContent: this._render(), sidebarContent: r.createElement(c.Z, null), title: b }));
                }
            }
            Z.contextType = d.rC;
            const w = _(Z);
        },
        193048: (e, t, o) => {
            o.r(t), o.d(t, { TOPICS_MANAGEMENT_PREFIX: () => P, UserTopicsScreen: () => x, VIEWING_OTHER_USERS_TOPICS_PREFIX: () => S, default: () => B });
            var r = o(202784),
                i = o(457311),
                n = o(111677),
                a = o.n(n),
                s = o(912021),
                c = o(718e3),
                l = o(443781),
                d = o(337523),
                p = o(835546),
                h = o(807469),
                m = o(740527),
                u = o(218951);
            const g = (0, u.Z)({ timelineId: "topics-management-graphql", network: { getEndpoint: (e) => e.withEndpoint(h.ZP).fetchTopicsManagementPage, getEndpointParams: ({ cursor: e }) => ({ cursor: "string" == typeof e ? e : void 0 }) }, formatResponse: m.Z, context: "FETCH_TOPICS_MANAGEMENT", perfKey: "topics-management-GraphQL" });
            var E = o(615027),
                f = o(71620),
                _ = o(668214),
                b = o(735313),
                y = o(919022);
            const T = (e, t) => t.location.pathname,
                Z = (e, t) => "PUSH" === t.history.action || "REPLACE" === t.history.action,
                w = (e, t) => t.match.params.tabId || void 0,
                k = (e, t) => y.ZP.selectByScreenName(e, t.match.params.screenName),
                C = (0, _.Z)()
                    .propsFromState(() => ({ isForwardNavigation: Z, pathname: T, selectedTabId: w, user: k }))
                    .propsFromActions(() => ({ clearTimelineCache: b.Z, createLocalApiErrorHandler: (0, f.zr)("USER_TOPICS_SCREEN"), fetchUserByScreenNameIfNeeded: y.ZP.fetchOneByScreenNameIfNeeded })),
                I = a().b8533bac,
                P = "topics-management-",
                S = "viewing-other-users-topics-",
                v = r.createElement(c.Z, { withTopicsToFollow: !1 });
            class x extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderNotInterestedEmptyState = () => r.createElement(i.Z, { header: "No interest? No problem.", message: "When you tell us you're not interested in a Topic, it will show up here. We won't recommend Tweets, events, or ads related to Topics you aren't into." })),
                        (this._getScreenName = () => {
                            const { match: e } = this.props;
                            return e.params.screenName;
                        }),
                        (this._getTabLink = (e) => `/${this._getScreenName()}/topics/${e}`),
                        (this._getScribeNamespace = (0, s.Z)((e, t) => ({ page: e ? "not_interested_topics" : "followed_topics", section: t ? "self" : "other" })));
                    const { isForwardNavigation: o } = e;
                    o && this._clearTimelineCache();
                }
                componentDidMount() {
                    const { fetchUserByScreenNameIfNeeded: e } = this.props;
                    e(this._getScreenName());
                }
                componentDidUpdate(e) {
                    ((e.isForwardNavigation && !this.props.isForwardNavigation) || e.pathname !== this.props.pathname) && this._clearTimelineCache();
                }
                render() {
                    const { history: e, selectedTabId: t, user: o } = this.props,
                        i = this._isOwnProfile(),
                        n = o && (0, p.n5)({ isOwnProfile: i, user: o }),
                        a = !i && this._isOnNotInterestedPage(),
                        s = o && (!n || a),
                        c = `/${this._getScreenName()}`;
                    if (s) {
                        const e = a ? c.concat("/topics") : c;
                        return r.createElement(E.Z, { to: e });
                    }
                    {
                        const n = this._getScribeNamespace(this._isOnNotInterestedPage(), i),
                            a = i ? g : ((l = (o && o.id_str) || ""), (0, u.Z)({ timelineId: `viewing-user-${l}-topics-page-graphql`, network: { getEndpoint: (e) => e.withEndpoint(h.ZP).fetchViewingOtherUsersTopicsPagePage, getEndpointParams: ({ count: e }) => ({ count: e, userId: l }) }, formatResponse: m.Z, context: "FETCH_OTHER_USERS_TOPICS_PAGE", perfKey: "viewing-other-users-topics-page-GraphQL" })),
                            s = i ? P : S;
                        return r.createElement(d.Z, { backLocation: c, getTabLink: this._getTabLink, history: e, initialPageNamespace: n, module: a, renderEmptyState: "not_interested" === this.props.selectedTabId ? this._renderNotInterestedEmptyState : void 0, selectedTabId: t, sidebarContent: v, timelinePrefix: s, title: I });
                    }
                    var l;
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
                    this._isOwnProfile() && e(g).catch(t());
                }
                _getNotInterestedUrl() {
                    return `/${this._getScreenName()}/topics/not_interested`;
                }
            }
            x.contextType = l.rC;
            const B = C(x);
        },
        76388: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                i = o(890601),
                n = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Topics.64698b5a.js.map
