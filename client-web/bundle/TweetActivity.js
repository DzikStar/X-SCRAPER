"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetActivity"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var s = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                n = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: u, position: m, rightControl: h, secondaryBar: g, style: b, subtitle: y, title: f, titleDomId: w, titleIconCell: k, titleIconCellSize: C, withBackground: x, withWideContainer: Z } = this.props,
                        { isModal: S } = this.context,
                        B = i ? d : s.createElement(n.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, S, !!g);
                    return s.createElement(s.Fragment, null, s.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: B, middleControl: u, position: p(m, S, r), rightControl: h, style: b, subtitle: y, title: f, titleDomId: w, titleIconCell: k, titleIconCellSize: C, withBackground: _, withWideContainer: Z }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? s.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var s = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                n = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class m extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: n, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: y, subtitle: f, title: w } = this.props,
                                { isModal: k } = this.context;
                            return s.createElement(r.Z, { style: k ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, s.createElement(d.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !k, hideBackButton: n, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: y, style: [k && h.appBarModal, t], subtitle: f, title: w, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: n, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: y } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return s.createElement(l.Z, null, s.createElement(p.Z.Configure, { documentTitle: n, headerless: !0, title: g }), s.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, y && h.rootModal] }, !y && f, s.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [h.container, y && h.containerModal, a] }, y ? s.createElement(u.Z, { style: h.viewport }, f, o) : o), t ? s.createElement(r.Z, { style: [h.bottomBarModal, !y && !b && h.bottomBarMobile] }, s.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = a.Z);
            const h = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: n.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                r = o(202784),
                i = o(107267),
                a = o(403556),
                n = o(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return r.createElement(a.Z, (0, s.Z)({}, l, { isCompact: o || (0, n.HD)(t) }));
                },
                c = r.memo(l);
        },
        153386: (e, t, o) => {
            o.d(t, { Z: () => n });
            var s = o(413798),
                r = o(750085),
                i = o(218951),
                a = o(952257);
            const n = (e) => (0, i.Z)({ timelineId: `favoritersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchLikedBy, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, tweetId: e }) }, formatResponse: r.Z, context: "FETCH_TWEET_ACTIVITY_LIKES", perfKey: "favoritersGraphQL", staleIntervalMs: a.J });
        },
        394660: (e, t, o) => {
            o.r(t), o.d(t, { ShowSimilarPostsScreen: () => z, default: () => F });
            var s = o(202784),
                r = o(457311),
                i = o(782261),
                a = o(111677),
                n = o.n(a),
                l = o(912021),
                c = o(718e3),
                d = o(252021),
                p = o(443781),
                u = o(652904),
                m = o(810641),
                h = o(688715),
                g = o(907552),
                b = o(668214),
                y = o(601576);
            const f = (0, b.Z)()
                    .propsFromActions(() => ({ addToast: y.fz }))
                    .withAnalytics(),
                w = n().fd67deaa,
                k = n().f9183bb6;
            const C = f(function (e) {
                    const { postId: t, scribeNamespace: o } = e,
                        r = ((e) => (0, h.ju)(`https://x.com/i/status/${e}/similar`))(t);
                    return s.createElement(g.S0, { scribeNamespace: o, url: r }, s.createElement(g.by, { label: w, type: "dm" }), s.createElement(g.by, { label: k, type: "copy" }));
                }),
                x = C;
            var Z = o(644829),
                S = o(750085),
                B = o(218951);
            const _ = (e) => (0, B.Z)({ timelineId: `similarPostsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(Z.Z).fetchSimilarPosts, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: S.Z, context: "FETCH_SIMILAR_POSTS", perfKey: "similarPostsGraphQL" });
            var E = o(836255);
            const v = { page: "similar_posts", section: "similar_posts" },
                T = (e, t) => t.match.params.statusId,
                L = (e, t) => t.match.params.screenName,
                I = (e, t) => {
                    const o = T(0, t);
                    return o ? E.Z.selectHydrated(e, o) : void 0;
                },
                R = () => v,
                P = (0, b.Z)()
                    .propsFromState(() => ({ screenName: L, statusId: T, scribeNamespace: R, tweet: I }))
                    .withAnalytics(v),
                W = n().hea3f8ac,
                M = n().a09331e0,
                $ = n().a5ab75ae,
                A = n().ce637c0e;
            class z extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = (e) => () => s.createElement(r.Z, { header: e })),
                        (this._render = (e, t, o) => s.createElement(m.Z, { fetchOptions: e, module: this._getModule(), renderEmptyState: this._renderEmptyState(o), title: t })),
                        (this._getMemoizedModule = (0, l.Z)((e) => _(e))),
                        (this._getModule = () => {
                            const { statusId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    const { history: e, screenName: t, scribeNamespace: o, statusId: r, tweet: a } = this.props,
                        { featureSwitches: n } = this.context,
                        l = a && i.Z.isArticlePost(a),
                        p = l ? M : W,
                        m = l ? A : $,
                        h = { count: n.getNumberValue("responsive_web_show_similar_posts_count") || 50 },
                        g = s.createElement(x, { postId: r, scribeNamespace: o });
                    return s.createElement(u.Z, null, s.createElement(d.Z, { backLocation: `/${t}/status/${r}`, documentTitle: p, history: e, primaryContent: this._render(h, p, m), rightControl: g, sidebarContent: s.createElement(c.Z, null), title: p }));
                }
            }
            z.contextType = p.rC;
            const F = P(z);
        },
        955875: (e, t, o) => {
            o.r(t), o.d(t, { TweetActivityScreen: () => _, default: () => E });
            var s = o(202784),
                r = o(457311),
                i = o(111677),
                a = o.n(i),
                n = o(980407),
                l = o(810641),
                c = o(615027),
                d = o(24949),
                p = o(668214),
                u = o(153386),
                m = o(481918);
            const h = (e, t) => t.match.params.statusId,
                g = (e, t) => t.match.params.screenName,
                b = (e, t) => t.match.params.tweetEngagementsSubroute,
                y = { likes: u.Z, retweets: m.Z },
                f = (0, p.Z)()
                    .propsFromState(() => ({ activityType: b, screenName: g, statusId: h, urtModule: (0, d.P1)(b, h, (e, t) => y[e]?.(t)) }))
                    .withAnalytics({ page: "tweet_activity", section: "tweet_activity" }),
                w = a().f08d8d08,
                k = a().f0ccff52,
                C = a().fc1acb54,
                x = a().e3527230,
                Z = { likes: a().i3e8b808, retweets: a().c69fd704 },
                S = { likes: a().f12858d4, retweets: a().fe62cfec },
                B = { likes: () => s.createElement(r.Z, { header: C, message: x }), retweets: () => s.createElement(r.Z, { header: w, message: k }) };
            function _({ activityType: e, history: t, screenName: o, statusId: r, urtModule: i }) {
                const a = `/${o.toLowerCase()}/status/${r}`;
                return i ? s.createElement(n.Z, { backLocation: a, history: t, title: S[e] }, s.createElement(l.Z, { loadingAccessibilityLabel: Z[e], module: i, renderEmptyState: B[e], title: S[e] })) : s.createElement(c.Z, { to: a });
            }
            const E = f(_);
        },
        913162: (e, t, o) => {
            o.r(t), o.d(t, { TweetEngagementsScreen: () => z, default: () => F });
            o(136728);
            var s = o(202784),
                r = o(457311),
                i = o(111677),
                a = o.n(i),
                n = o(718e3),
                l = o(727828),
                c = o(252021),
                d = o(507651),
                p = o(443781),
                u = o(652904),
                m = o(886191),
                h = o(810641),
                g = o(903019),
                b = o(883432),
                y = o(615027),
                f = o(24949),
                w = o(668214),
                k = o(836255),
                C = o(153386),
                x = o(481918),
                Z = o(919022);
            const S = { likes: C.Z, retweets: x.Z, quotes: void 0 },
                B = (e, t) => t.match.params.statusId,
                _ = (e, t) => t.match.params.screenName,
                E = (e, t) => t.match.params.tweetEngagementsSubroute,
                v = (0, w.Z)()
                    .propsFromState(() => ({
                        mode: E,
                        screenName: _,
                        statusId: B,
                        tweet: (0, f.P1)(
                            (e) => e,
                            B,
                            (e, t) => k.Z.selectHydrated(e, t),
                        ),
                        urtModule: (0, f.P1)(E, B, (e, t) => S[e]?.(t)),
                        viewer: Z.ZP.selectViewerUser,
                    }))
                    .withAnalytics({ page: "full_tweet_activity", section: "full_tweet_activity" });
            var T = o(545389);
            const L = a().e35f2534,
                I = a().i60dfa72,
                R = { likes: a().dc604dda, retweets: a().cdd4ef4a, quotes: a().icc72234 },
                P = { likes: a().d7b8ebaa, retweets: a().ja42739e, quotes: a().j45978a8 },
                W = { likes: a().hc35b530, retweets: a().e0d6a246, quotes: a().aea3c420 },
                M = { likes: a().i2a26cb4, retweets: a().f0ccff52, quotes: a().i9b724e8 },
                $ = { vertical: "tweet_detail_quote" };
            function A(e, t) {
                const o = W[t],
                    i = M[t];
                return s.createElement(r.Z, { header: o, message: i });
            }
            class z extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { mode: e, screenName: t, statusId: o, urtModule: r } = this.props,
                                i = `quoted_tweet_id:${o}`,
                                a = `/${t.toLowerCase()}/status/${o}`;
                            if ("likes" === e && !this._isOwnTweet()) return s.createElement(y.Z, { to: a });
                            if ("quotes" === e) return s.createElement(m.Z, { emptyStateComponent: A(0, e), fetchOptions: $, query: i, querySrc: b.Z.TweetDetailQuoteTweet, searchMode: g.N3.Top });
                            return r ? s.createElement(h.Z, { loadingAccessibilityLabel: L, module: r, renderEmptyState: () => A(0, e), title: P[e] }) : s.createElement(y.Z, { to: a });
                        });
                }
                _isOwnTweet() {
                    const { screenName: e, tweet: t, viewer: o } = this.props;
                    return t?.user.id_str === o?.id_str || e === o?.screen_name;
                }
                render() {
                    const { history: e, mode: t, screenName: o, statusId: r } = this.props,
                        i = R[t],
                        a = [
                            { key: "quotes", to: `/${o}/status/${r}/quotes`, label: P.quotes },
                            { key: "retweets", to: `/${o}/status/${r}/retweets`, label: P.retweets },
                        ];
                    this._isOwnTweet() && a.push({ key: "likes", to: `/${o}/status/${r}/likes`, label: P.likes });
                    const p = (0, T.Z)({ featureSwitches: this.context.featureSwitches, isOwnPost: this._isOwnTweet(), isPremium: this.context.userClaims.isAnyPremiumSubscriber(), tweet: this.props.tweet, surface: "engagements_screen" });
                    return s.createElement(u.Z, null, s.createElement(c.Z, { backLocation: `/${o}/status/${r}`, documentTitle: i, history: e, primaryContent: this._render, secondaryBar: s.createElement(s.Fragment, null, p ? s.createElement(l.Z, { variant: "PostAnalytics" }) : null, s.createElement(d.Z, { links: a })), sidebarContent: s.createElement(n.Z, null), title: I }));
                }
            }
            z.contextType = p.rC;
            const F = v(z);
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => B });
            var s = o(807896),
                r = o(202784),
                i = o(194504),
                a = o(235902),
                n = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                g = o(175993),
                b = o(58881),
                y = o(530732);
            const f = d().d2414d31,
                w = () => d().ce4e85ae,
                k = d().fb9f6f39;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: s, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: s, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, s) => {
                            const r = n.default.theme.colors.text,
                                i = n.default.theme.colors.gray700;
                            return o || s ? (e || t ? r : i) : e ? r : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: i, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: Z, to: S } = this.props,
                        { location: B } = this.state,
                        _ = S ? this._getMemoizedLink(S, C) : void 0,
                        E = c ? c(S) : B?.pathname === _?.pathname,
                        v = b.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? x.pillHoverStyle.backgroundColor : void 0 }),
                        T = g ? "medium" : E ? "bold" : "medium";
                    return r.createElement(y.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: v, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [x.pillStyle] : [x.link]), ...(p && E ? [x.pillActiveStyle] : []), d ? (p ? x.compactPill : x.compactLink) : null, u ? x.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && x.flexGrow }, r.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(E, c, g, p) }, d && x.compactText, g && t && x.focusedText, p && x.pillTextStyle, p && E && x.pillActiveTextStyle, p && c && x.pillHoverTextStyle], weight: T }, e && r.createElement(e, { style: x.icon }), i, g || p ? null : r.createElement(l.Z, { style: E && [x.border, { backgroundColor: n.default.theme.colors[a] }] })), o ? r.createElement(h.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: f, withBorder: !1 }) : s ? r.createElement(h.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = n.default.create((e) => ({
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
                Z = C,
                S = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                B = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !n,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...a }, c) => {
                                    const d = h ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return r.createElement(Z, (0, s.Z)({ viewType: i }, a, { isCompact: o, isPillLink: n, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, n, l, h, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: n && S.gap, childrenStyle: !h && S.flexGrow, key: u, style: [n ? null : S.segmentedControl, h && S.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetActivity.e2f402ca.js.map
