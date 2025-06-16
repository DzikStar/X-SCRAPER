"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-c93e0a41"],
    {
        98538: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                i = n(325686),
                a = n(731708),
                l = n(891198),
                r = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: i } = this.props;
                    return o.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                o.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => o.createElement(i.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: l = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? o.createElement(r.ZP, { children: t, count: n, size: c, style: i, weight: l }) : o.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: l }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                b = u;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(807896),
                i = n(202784),
                a = n(194504),
                l = n(235902),
                r = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                m = n(516951),
                b = n(731708),
                p = n(310088),
                h = n(175993),
                y = n(58881),
                f = n(530732);
            const g = d().d2414d31,
                C = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: o, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const i = r.default.theme.colors.text,
                                a = r.default.theme.colors.gray700;
                            return n || o ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: a, color: l, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: m, isWebRedesign: h, retainScrollPosition: v, style: k, to: S } = this.props,
                        { location: E } = this.state,
                        I = S ? this._getMemoizedLink(S, v) : void 0,
                        A = c ? c(S) : E?.pathname === I?.pathname,
                        T = y.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? x.pillHoverStyle.backgroundColor : void 0 }),
                        Z = h ? "medium" : A ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": A, focusable: !!A, interactiveStyles: T, link: I, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [x.pillStyle] : [x.link]), ...(u && A ? [x.pillActiveStyle] : []), d ? (u ? x.compactPill : x.compactLink) : null, m ? x.roundedRect : null, k], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: u && x.flexGrow }, i.createElement(b.ZP, { size: h ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(A, c, h, u) }, d && x.compactText, h && t && x.focusedText, u && x.pillTextStyle, u && A && x.pillActiveTextStyle, u && c && x.pillHoverTextStyle], weight: Z }, e && i.createElement(e, { style: x.icon }), a, h || u ? null : i.createElement(s.Z, { style: A && [x.border, { backgroundColor: r.default.theme.colors[l] }] })), n ? i.createElement(p.Z, { count: n, standalone: !0, style: [x.badge, n >= 10 && x.multiDigitBadge, n >= 20 && x.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: g, withBorder: !1 }) : o ? i.createElement(p.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (v.contextType = h.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = r.default.create((e) => ({
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
                k = v,
                S = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: r, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: b } = l.ZP.useProps(),
                        p = b() && !r,
                        h = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...l }, c) => {
                                    const d = p ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return i.createElement(k, (0, o.Z)({ viewType: a }, l, { isCompact: n, isPillLink: r, isRoundedRect: s, isWebRedesign: p, style: d }), t);
                                }),
                            [e, n, r, s, p, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: r && S.gap, childrenStyle: !p && S.flexGrow, key: m, style: [r ? null : S.segmentedControl, p && S.leftAligned, d], visibleItemIndex: u }, h);
                };
        },
        366985: (e, t, n) => {
            n.d(t, { L: () => a, j: () => l });
            n(202784);
            var o = n(352924),
                i = n(782261);
            function a(e) {
                const t = i.Z.getOriginalTweet(e),
                    n = !!(t.favorite_count || t.reply_count || t.quote_count || t.retweet_count),
                    a = { actionsBar: (0, o.b)(), avatar: (0, o.b)(), conversationControlLabel: (0, o.b)(), conversationLevel: (0, o.b)(), editCallout: (0, o.b)(), exclusivityInfoLabel: (0, o.b)(), premiumInfoLabel: (0, o.b)(), longformNotesLabel: (0, o.b)(), media: (0, o.b)(), promotedLabel: (0, o.b)(), promotionStatusLabel: (0, o.b)(), replyContext: (0, o.b)(), richContent: (0, o.b)(), socialContext: (0, o.b)(), text: (0, o.b)(), timestamp: (0, o.b)(), tombstone: (0, o.b)(), trustedFriendsLabel: (0, o.b)(), userLabel: (0, o.b)(), username: (0, o.b)() };
                return [a, [a.promotedLabel, a.promotionStatusLabel, a.conversationLevel, a.socialContext, a.username, a.avatar, a.userLabel, a.timestamp, a.tombstone, a.replyContext, a.text, a.media, a.richContent, a.editCallout, a.exclusivityInfoLabel, a.premiumInfoLabel, a.trustedFriendsLabel, a.conversationControlLabel, a.longformNotesLabel, n ? a.actionsBar : void 0].filter(Boolean)];
            }
            function l({ children: e, tweet: t }) {
                return e(a(t));
            }
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                i = (n(571372), n(202784)),
                a = n(900664),
                l = n(111677),
                r = n.n(l),
                s = n(432181),
                c = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                b = n(522171),
                p = n(40644),
                h = n(439481);
            const y = r().d636ebc6,
                f = r().eb3a8b0c,
                g = r().j472ecfc,
                C = r().a0af935c,
                w = r().dac92b0d,
                v = r().aa650427;
            function x(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function k({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: l, enableActionMenu: r = !1, enableKeyboardShortcuts: m, iconSize: k, isDisabled: S, isFaded: E, isLiked: I, isPresentational: A, likeActionIconContainerRef: T, likeTransitionAnimation: Z, link: P, onAnimationStart: _, onError: R = x, onLikeActionSelect: L, onMenuCancel: D, onPress: M, style: F, testIDs: W, withCount: B }) {
                const z = B && "number" == typeof l;
                let N = I ? C : y;
                const O = i.useMemo(() => ({ label: I ? f : y }), [I]);
                z && (N = I ? v({ count: l }) : w({ count: l }));
                const V = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = i.useState(!1),
                        a = i.useRef(e);
                    return (
                        i.useEffect(() => {
                            ("object" == typeof t || h.ZP.check(t)) && e !== a.current && (o(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: i.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: I, likeTransitionAnimation: Z });
                const H = i.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: g,
                                onClick() {
                                    t(), L?.();
                                },
                                testID: W?.like,
                                Icon: s.default,
                            },
                        ];
                        return i.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), D?.();
                            },
                        });
                    },
                    [e, L, D, W?.like],
                );
                return i.createElement(
                    p.ZP,
                    (0, o.Z)({}, V, {
                        ActiveIcon: c.default,
                        Icon: s.default,
                        actionIconContainerRef: T,
                        activeColor: t,
                        "aria-label": N,
                        color: n,
                        count: l,
                        enableKeyboardShortcuts: m,
                        hoverLabel: O,
                        iconSize: k,
                        isActive: I,
                        isDisabled: S,
                        isFaded: E,
                        isPresentational: A,
                        keyboardShortcut: b.Z.shortcuts.like,
                        link: P,
                        onAnimationStart: _,
                        onError: R,
                        onPress: function () {
                            d.ZP.isFirefox() || a.Z.vibrate(5), M?.();
                        },
                        renderMenu: r ? H : void 0,
                        style: F,
                        testID: W && (I ? W.unlike : W.like),
                        withCount: z,
                    }),
                );
            }
        },
        982266: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                i = n(811176),
                a = n(247056);
            function l({ Icon: e, isDisabled: t, items: n, onOpen: l }) {
                const r = o.useCallback((e) => o.createElement(i.Z, { items: n, onCloseRequested: e }), [n]);
                return n.length ? o.createElement(a.Z, { Icon: e, isDisabled: t, onClick: l, renderActionMenu: r }) : null;
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => k, Z: () => S });
            var o = n(202784),
                i = n(111677),
                a = n.n(i),
                l = n(720600),
                r = n(155353),
                s = n(522171),
                c = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const b = a().f2919fb8,
                p = a().fd1e5446,
                h = a().bb5c5864,
                y = a().f65198c2;
            function f(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: i, onMenuCancel: a, onQuoteTweetActionSelect: l, onRetweetActionSelect: s, onUnretweetActionSelect: c, onViewEngagementsActionSelect: m, retweetActionSubText: f, retweetWithCommentLink: g, testIDs: C, viewQuotesRetweetsLink: w }) {
                        const v = C?.retweetConfirm,
                            x = C?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                i ||
                                    e ||
                                    o.push({
                                        text: b,
                                        subText: f,
                                        onClick() {
                                            a?.(), s?.();
                                        },
                                        testID: v,
                                        Icon: r.default,
                                    }),
                                i &&
                                    o.push({
                                        text: p,
                                        onClick() {
                                            a?.(), c?.();
                                        },
                                        testID: x,
                                        Icon: r.default,
                                    }),
                                t ||
                                    o.push({
                                        text: h,
                                        onClick() {
                                            a?.(), l?.();
                                        },
                                        Icon: d.default,
                                        link: g,
                                    }),
                                n ||
                                    o.push({
                                        text: y,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: w,
                                    }),
                                o
                            );
                        }, [e, t, n, i, a, l, s, c, m, f, g, v, x, w]);
                    })(e),
                    { onMenuCancel: n } = e,
                    i = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: i });
            }
            const g = a().f2919fb8,
                C = a().fd1e5446,
                w = a().b8c465e2,
                v = a().dfad425d,
                x = a().a386dc55,
                k = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function S({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: i, enableActionMenu: a = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: b, iconSize: p, isDisabled: h, isFaded: y, isPresentational: k, isRetweeted: S, onMenuCancel: E, onPress: I, onQuoteTweetActionSelect: A, onRetweetActionSelect: T, onUnretweetActionSelect: Z, onViewEngagementsActionSelect: P, retweetActionSubText: _, retweetWithCommentLink: R, style: L, testIDs: D, viewQuotesRetweetsLink: M, withCount: F }) {
                const W = F && "number" == typeof i;
                let B = S ? w : g;
                W && (B = S ? x({ count: i }) : v({ count: i }));
                const z = o.useMemo(() => ({ label: S ? C : g }), [S]),
                    N = o.useMemo(() => ({ retweetConfirm: D?.retweetConfirm, unretweetConfirm: D?.unretweetConfirm }), [D?.retweetConfirm, D?.unretweetConfirm]),
                    O = o.useCallback(
                        (t) =>
                            o.createElement(f, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: b,
                                isRetweeted: S,
                                onMenuCancel: () => {
                                    t(), E?.();
                                },
                                onQuoteTweetActionSelect: A,
                                onRetweetActionSelect: T,
                                onUnretweetActionSelect: Z,
                                onViewEngagementsActionSelect: P,
                                retweetActionSubText: _,
                                retweetWithCommentLink: R,
                                testIDs: N,
                                viewQuotesRetweetsLink: M,
                            }),
                        [e, u, m, b, S, E, A, T, Z, P, _, N, R, M],
                    );
                return o.createElement(c.ZP, { ActiveIcon: l.default, Icon: r.default, activeColor: t, "aria-label": B, color: n, count: i, enableKeyboardShortcuts: d, hoverLabel: z, iconSize: p, isActive: S, isDisabled: h, isFaded: y, isPresentational: k, keyboardShortcut: s.Z.shortcuts.retweet, onPress: I, renderMenu: a ? O : void 0, style: L, testID: S ? D?.unretweet : D?.retweet, withCount: W });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => se });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                l = n.n(a),
                r = n(976145),
                s = n(235902),
                c = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: a = "inline", id: l, style: r }) {
                const c = s.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(i.Z, { "aria-label": e, "aria-labelledby": t, id: l, role: "group", style: [u.container, u[`${a}Container`], c && u.noMaxWidth, r] }, n);
            }
            const u = c.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                b = n(53674),
                p = n(40644);
            const h = { label: l().f2849136 },
                y = l().f206e970,
                f = { label: l().b05a39b2 },
                g = l().c7073f5b;
            n(571372);
            var C = n(900664),
                w = n(73416),
                v = n(883069),
                x = n(323265),
                k = n(233184),
                S = n(522171);
            const E = l().dbc0c2f4,
                I = l().hf417cf0,
                A = l().c7a989ce,
                T = l().febd30ed,
                Z = l().a8dc9587;
            function P(e = new Error("TweetActionBookmark.onError")) {
                k.Z.report(e);
            }
            var _ = n(721083),
                R = n(194661);
            const L = l().hdf7226a,
                D = { label: L },
                M = l().c9940955;
            function F({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: l, isFaded: r, isPresentational: s, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: h }) {
                const y = h && "number" == typeof n,
                    f = y ? M({ count: n }) : L;
                return o.createElement(p.ZP, { Icon: R.default, activeColor: e, "aria-label": f, color: t, count: n, enableKeyboardShortcuts: i, hoverLabel: D, iconSize: a, isDisabled: l, isFaded: r, isPresentational: s, keyboardShortcut: S.Z.shortcuts.reply, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: y });
            }
            const W = o.memo(F);
            var B = n(15342),
                z = n(744610),
                N = n(137937),
                O = n(461756),
                V = n(811176),
                H = n(638236);
            const j = { label: l().dc63da16 },
                K = l().cee0585c,
                G = N.Z.bezier(0.45, 0, 0, 1);
            const $ = function ({ activeColor: e, color: t, count: n, iconSize: i, isDisabled: a, isFaded: l, isPresentational: r, onPress: s, style: c, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(p.ZP, { Icon: b.default, activeColor: e, "aria-label": m ? g({ count: n }) : y, color: t, count: n, hoverLabel: m ? f : h, iconSize: i, isDisabled: a, isFaded: l, isPresentational: r, link: !d || a || l ? void 0 : `${d}/analytics`, onPress: s, style: c, withCount: m });
                },
                U = _.Z,
                q = W,
                Q = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: i, enableKeyboardShortcuts: a, iconSize: l, isDisabled: r, isFaded: s, isPresentational: c, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: b, withCount: h }) {
                    const y = o.useRef({ wiggle: new z.Z.Value(0), scale: new z.Z.Value(1) }).current,
                        f = o.useCallback(
                            (n) =>
                                o.createElement(V.Z, {
                                    description: t,
                                    items: e,
                                    onCloseRequested: function () {
                                        n(), d?.();
                                    },
                                    shouldCloseOnClick: !0,
                                }),
                            [e, t, d],
                        );
                    o.useEffect(() => {
                        m && !O.Z.reducedMotionEnabled && z.Z.parallel([z.Z.timing(y.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), z.Z.sequence([z.Z.timing(y.scale, C({ toValue: 1.45 })), z.Z.timing(y.scale, C({ toValue: 1 }))])]).start();
                    }, [y.scale, m, y.wiggle]);
                    const g = y.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function C(e) {
                        return { ...e, useNativeDriver: !1, easing: G, duration: 250 };
                    }
                    const w = o.useRef([{}, { transform: [{ rotate: g }, { scale: y.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(z.Z.View, { style: w.current }, o.createElement(p.ZP, { Icon: H.Z, activeColor: n, "aria-label": K, color: i, enableKeyboardShortcuts: a, hoverLabel: j, iconSize: l, isDisabled: r, isFaded: s, isPresentational: c, keyboardShortcut: S.Z.shortcuts.share, onPress: u, renderMenu: s ? void 0 : f, style: b, withCount: h }));
                },
                J = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: l, isFaded: r, isBookmarked: s, isPresentational: c, onError: d = P, onPress: u, style: m, testIDs: b, withCount: h }) {
                    const y = h && "number" == typeof n;
                    let f = s ? A : E;
                    const g = o.useMemo(() => ({ label: s ? I : E }), [s]);
                    return (
                        y && (f = s ? Z({ count: n }) : T({ count: n })),
                        o.createElement(p.ZP, {
                            ActiveIcon: w.default,
                            Icon: v.default,
                            activeColor: e,
                            "aria-label": f,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: i,
                            hoverLabel: g,
                            iconSize: a,
                            isActive: s,
                            isDisabled: l,
                            isFaded: r,
                            isPresentational: c,
                            keyboardShortcut: S.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                x.ZP.isFirefox() || C.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: b && (s ? b.removeBookmark : b.bookmark),
                            withCount: y,
                        })
                    );
                };
            const X = l().a0af935c,
                Y = l().b8c465e2,
                ee = l().c7a989ce,
                te = (e) => o.createElement(se.ActionAnalytics, e),
                ne = (e) => o.createElement(se.ActionLike, e),
                oe = (e) => o.createElement(se.ActionReply, e),
                ie = (e) => o.createElement(se.ActionRetweet, e),
                ae = (e) => o.createElement(se.ActionShare, e),
                le = (e) => o.createElement(se.ActionBookmark, e),
                re = [];
            function se({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: a = "gray700", displayStyle: c, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: b = !1, isFocalTweet: p = !1, isFromProtectedAccount: h, isLiked: y, isRetweeted: f, isPresentational: g, likeCount: C, id: w, renderAnalyticsAction: v = te, renderLikeAction: x = ne, renderReplyAction: k = oe, renderRetweetAction: S = ie, renderShareAction: E = ae, renderBookmarkAction: I = le, replyCount: A, retweetCount: T, style: Z, tweetLink: P, viewCount: _, viewState: R, withAnalytics: L = !1, withCount: D = !1, withBookmark: M = !1 }) {
                const F = o.useRef(null),
                    W = s.ZP.useProps(),
                    B = W.tweetViewCountsEnabled(),
                    z = W.testViewCountShow(),
                    N = B || z,
                    O = L && N,
                    V = L && !O,
                    H = N ? "EnabledWithCount" === R && D : D,
                    j = o.useMemo(() => {
                        if (!D) return;
                        const e = l().b03835c7,
                            t = l().g4a195e7,
                            o = l().e089b42d,
                            i = l().e0a8fe39,
                            a = l().c58b2ab7;
                        return (0, r.Z)([A ? e({ replyCount: A }) : null, T ? t({ retweetCount: T }) : null, f ? Y : null, C ? o({ likeCount: C }) : null, y ? X : null, b && M ? ee : null, n ? i({ bookmarkCount: n }) : null, _ ? a({ viewCount: _ }) : null].filter(Boolean), !0);
                    }, [n, b, y, f, C, A, T, _, D, M]),
                    K = o.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    G = o.useMemo(() => k({ ...K, activeColor: t, count: A, enableKeyboardShortcuts: u, isPresentational: g, withCount: D }), [K, t, A, u, g, D, k]),
                    $ = o.useMemo(() => S({ ...K, activeColor: t, count: T, enableKeyboardShortcuts: u, isFromProtectedAccount: h, isRetweeted: f, isPresentational: g, withCount: D }), [K, t, T, u, h, f, g, D, S]),
                    U = o.useMemo(() => x({ ...K, activeColor: t, count: C, enableKeyboardShortcuts: u, isLiked: y, isPresentational: g, withCount: D }), [K, t, C, u, y, g, D, x]),
                    q = o.useMemo(() => (O ? v({ ...K, count: _, isPresentational: g, tweetLink: P, withCount: H }) : null), [O, K, _, g, P, H, v]),
                    Q = o.useMemo(() => (M ? I({ ...K, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: g, isBookmarked: b, withCount: D }) : null), [M, K, t, n, u, g, b, D, I]),
                    J = o.useMemo(() => (V ? v({ ...K, isPresentational: g, tweetLink: P }) : null), [V, K, g, P, v]),
                    se = o.useMemo(() => E({ ...K, actionItems: re, activeColor: t, enableKeyboardShortcuts: u, isPresentational: g, withCount: D && V }), [K, t, u, g, V, D, E]);
                return o.createElement(i.Z, { ref: F }, o.createElement(d, { "aria-label": j, displayStyle: c, id: w, style: Z }, G, $, U, q, Q, J, se));
            }
            (se.ActionAnalytics = $),
                (se.ActionLike = U),
                (se.ActionReply = q),
                (se.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(B.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (se.ActionShare = Q),
                (se.ActionBookmark = J);
        },
        737082: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                i = n(495232),
                a = n(235902),
                l = n(392237),
                r = n(495580),
                s = n(830911),
                c = n(782261);
            const d = l.default.create((e) => ({ compact: { alignSelf: "flex-start" }, inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 }, detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 } })),
                u = ({ displayStyle: e = "inline", ...t }) => {
                    const n = { displayStyle: e, ...t },
                        l = (({ displayStyle: e, exclusivityInfoLabelNativeID: t, hideExclusivityInfoEducationTextInReplies: n, loggedInUser: o, tweet: i }) => {
                            const a = c.Z.getOriginalTweet(i),
                                l = !!a.in_reply_to_status_id_str,
                                { exclusivity_info: r, permalink: s, user: d } = a;
                            if (!r || ("inline" === e && l && n)) return;
                            const u = r.screen_name,
                                m = u === o?.screen_name,
                                b = d.screen_name === o?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : "compact", id: t, screenName: u, scribeElement: "exclusivity_info_context", tweetPermalink: s, type: m ? "exclusiveToSuperFollowersCreator" : b ? "exclusiveToSuperFollowersReplyOwn" : "exclusiveToSuperFollowersReplyOthers" };
                        })(n),
                        u = (({ displayStyle: e, hideTrustedFriendsEducationTextInReplies: t, loggedInUser: n, trustedFriendsLabelNativeID: o, tweet: i }) => {
                            const l = a.ZP.useProps(),
                                r = l.trustedFriendsEnabled(),
                                s = l.trustedFriendsCreationEnabled(),
                                d = c.Z.getOriginalTweet(i),
                                u = !!d.in_reply_to_status_id_str,
                                { permalink: m, trusted_friends_info: b, user: p } = d;
                            if (!r || !b || ("inline" === e && u && t)) return;
                            const h = b.screen_name,
                                y = h === n?.screen_name,
                                f = p.screen_name === n?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : u ? "compact" : "inline", id: o, screenName: h, scribeElement: "exclusivity_info_context", tweetPermalink: m, type: y && s ? "trustedFriendsCreator" : f ? "trustedFriendsReplyOwn" : "trustedFriendsReplyOthers" };
                        })(n),
                        m = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const l = !!o,
                                r = c.Z.getOriginalTweet(a),
                                { conversation_control: s, limited_actions: d, permalink: u } = r,
                                m = c.Z.getDisabledActions(r),
                                b = m?.includes("Reply") || d,
                                p = l && !b;
                            if (!s || ("inline" === t && (!p || n))) return;
                            const h = s.conversation_owner.screen_name,
                                y = s.policy,
                                f = i.Z.getEducationType(y, p);
                            return f ? { displayMode: "detail" === t ? "detail" : "compact", id: e, tweetPermalink: u, screenName: h, scribeElement: "conversation_control_context", type: f } : void 0;
                        })(n),
                        b = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: l }) => {
                            const r = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(l),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_hidden" === u,
                                b = i.Z.getEducationType("community_hidden_tweet");
                            if (r && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "hidden_community_tweet_education", type: b };
                        })(n),
                        p = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: l }) => {
                            const r = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(l),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_member_removed" === u,
                                b = i.Z.getEducationType("community_tweet_member_removed");
                            if (r && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "removed_member_community_tweet_education", type: b };
                        })(n),
                        h = (({ premiumInfoLabelNativeID: e, tweet: t }) => {
                            const n = c.Z.getOriginalTweet(t),
                                o = n.premium_info,
                                i = !!n.in_reply_to_status_id_str;
                            if (o && !i) return { type: "premiumExclusive", displayMode: "compact", id: e, screenName: o.screen_name, scribeElement: "premium_info_context" };
                        })(n),
                        y = l || u || m || b || p || h;
                    if (!y) return null;
                    const { handleAnchorAction: f, handleAnchorOpen: g, handleAnchorSecondaryAction: C } = n,
                        { anchorless: w, displayMode: v, id: x, screenName: k, scribeElement: S, tweetPermalink: E, type: I } = y,
                        A = d[v];
                    return "inline" !== e || w ? o.createElement(s.Z, { displayMode: v, id: x, screenName: k, style: A, type: I }) : o.createElement(r.Z, { onAction: f, onOpen: g ? () => g(S) : void 0, onSecondaryAction: C, screenName: k, style: A, tweetPermalink: E, type: I }, o.createElement(s.Z, { displayMode: v, id: x, screenName: k, type: I }));
                };
        },
        495580: (e, t, n) => {
            n.d(t, { Z: () => S });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                l = n.n(a),
                r = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(731708),
                h = n(807896),
                y = n(946847),
                f = n(30899),
                g = n(392237);
            const C = l().b09adb0c,
                w = l().c2637ef6,
                v = (e) => {
                    const { Icon: t, actionLabel: n, actionLink: a, children: l, headline: r, onAction: s, onDismiss: c, onOpen: d, onSecondaryAction: u, style: m, subtext: b, thumbnailColor: p, tweetPermalink: g } = e;
                    return o.createElement(
                        i.Z,
                        {
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            style: m,
                        },
                        o.createElement(
                            f.Z,
                            {
                                onDismiss: c,
                                renderContent: (e, l) => {
                                    const c = () => {
                                            u && u(), e();
                                        },
                                        d =
                                            g || (n && a)
                                                ? {
                                                      actionLabel: n ?? C,
                                                      actionLink: a ?? g,
                                                      onAction: () => {
                                                          s && s(), e();
                                                      },
                                                      secondaryActionLabel: w,
                                                      onSecondaryAction: c,
                                                  }
                                                : { actionLabel: w, onAction: c };
                                    return o.createElement(i.Z, { style: "popover" === l ? x.interstitialPopover : void 0 }, o.createElement(y.Z, (0, h.Z)({}, d, { contentStyle: x.content, graphic: t, graphicDisplayMode: "thumbnail", graphicThumbnailColor: p, headline: r, subtext: b, withBottomPadding: !1, withCloseButton: !1 })));
                                },
                                withFixedPosition: !0,
                            },
                            o.createElement(i.Z, { onClick: d, role: "button", style: x.cursor }, l),
                        ),
                    );
                },
                x = g.default.create((e) => ({ interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 }, cursor: { cursor: "pointer" }, content: { marginVertical: 0, marginBottom: e.spaces.space28 } })),
                k = {
                    conversationControlsFollowersCanEngage: { Icon: r.default, headline: l().bb7b821a, subtext: l().fc41217b },
                    conversationControlsFollowersCannotEngage: { Icon: r.default, headline: l().ab105904, subtext: l().fc41217b },
                    conversationControlsCommunityCanEngage: { Icon: s.default, headline: l().bb7b821a, subtext: l().f064f477 },
                    conversationControlsCommunityCannotEngage: { Icon: s.default, headline: l().ab105904, subtext: l().f064f477 },
                    conversationControlsByInvitationCanEngage: { Icon: c.default, headline: l().bb7b821a, subtext: l().ea9ac5c9 },
                    conversationControlsByInvitationCannotEngage: { Icon: c.default, headline: l().ab105904, subtext: l().ea9ac5c9 },
                    conversationControlsSubscribersCanEngage: { Icon: c.default, headline: l().bb7b821a, subtext: l().d2ae1499 },
                    conversationControlsSubscribersCannotEngage: { Icon: c.default, headline: l().ab105904, subtext: l().d2ae1499 },
                    conversationControlsVerifiedCanEngage: { Icon: d.default, headline: l().bb7b821a, subtext: l().a4e254ff },
                    conversationControlsVerifiedCannotEngage: { Icon: d.default, headline: l().ab105904, subtext: l().a4e254ff },
                    communityHiddenTweetEducation: { Icon: u.default, headline: l().daba4484, subtext: l().f956070a },
                    communityRemovedMemberEducation: { Icon: u.default, headline: l().daba4484, subtext: l().ceb6841c },
                    exclusiveToSuperFollowersCreator: { Icon: m.default, thumbnailColor: "exclusive", headline: l().j620ce06, subtext: l().bd414b44 },
                    exclusiveToSuperFollowersReplyOwn: { Icon: m.default, thumbnailColor: "exclusive", headline: l().j620ce06, subtext: l().dd0da5d9 },
                    exclusiveToSuperFollowersReplyOthers: { Icon: m.default, thumbnailColor: "exclusive", headline: l().g1c6a77e, subtext: l().d3b143d7 },
                    trustedFriendsCreator: { Icon: b.default, actionLabel: l().cb731cae, actionLink: "/i/circles", thumbnailColor: "success", headline: l().c33d3a84, subtext: () => o.createElement(l().I18NFormatMessage, { $i18n: "b6a393af" }, o.createElement(p.ZP, { color: "text", link: "https://help.x.com/using-twitter/twitter-circle", weight: "bold", withUnderline: !0 }, l().c4f10e71)) },
                },
                S = (e) => {
                    const { children: t, onAction: n, onDismiss: a, onOpen: l, onSecondaryAction: r, screenName: s, style: c, tweetPermalink: d, type: u } = e;
                    if (!k[u]) return o.createElement(i.Z, { style: c }, t);
                    const { Icon: m, actionLabel: b, actionLink: p, headline: h, subtext: y, thumbnailColor: f } = k[u],
                        g = ((e, t) => ("string" != typeof e ? e({ screenName: t }) : e))(y, s);
                    return o.createElement(v, { Icon: m, actionLabel: b, actionLink: p, headline: h, onAction: n, onDismiss: a, onOpen: l, onSecondaryAction: r, style: c, subtext: g, thumbnailColor: f, tweetPermalink: d }, t);
                };
        },
        830911: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                l = n.n(a),
                r = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(883437),
                h = n(235902),
                y = n(834324),
                f = n(868634),
                g = n(392237);
            const C = (e, t) => ("string" != typeof e ? e({ screenName: t }) : e),
                w = ["exclusiveToSuperFollowersCreator", "exclusiveToSuperFollowersReplyOwn", "exclusiveToSuperFollowersReplyOthers"],
                v = (e) => {
                    const t = h.ZP.useProps().redesignedLabelForSubscribedTweets(),
                        n = (({ redesignedLabelForSubscribedTweets: e }) => ({
                            conversationControlsFollowersCanEngage: { Icon: r.default, calloutType: "primary", headline: l().bb7b821a, detail: l().fc41217b, inline: l().e5dc76d0 },
                            conversationControlsFollowersCannotEngage: { Icon: r.default, calloutType: "primary", headline: l().ab105904, detail: l().fc41217b, inline: l().fd1cda7a },
                            conversationControlsCommunityCanEngage: { Icon: s.default, calloutType: "primary", headline: l().bb7b821a, detail: l().f064f477, inline: l().e5dc76d0 },
                            conversationControlsCommunityCannotEngage: { Icon: s.default, calloutType: "primary", headline: l().ab105904, detail: l().f064f477, inline: l().fd1cda7a },
                            conversationControlsByInvitationCanEngage: { Icon: c.default, calloutType: "primary", headline: l().bb7b821a, detail: l().ea9ac5c9, inline: l().e5dc76d0 },
                            conversationControlsByInvitationCannotEngage: { Icon: c.default, calloutType: "primary", headline: l().ab105904, detail: l().ea9ac5c9, inline: l().fd1cda7a },
                            conversationControlsSubscribersCanEngage: { Icon: c.default, calloutType: "primary", headline: l().bb7b821a, detail: l().d2ae1499, inline: l().e5dc76d0 },
                            conversationControlsSubscribersCannotEngage: { Icon: c.default, calloutType: "primary", headline: l().ab105904, detail: l().d2ae1499, inline: l().fd1cda7a },
                            conversationControlsVerifiedCanEngage: { Icon: d.default, calloutType: "primary", headline: l().bb7b821a, detail: l().a4e254ff, inline: l().e5dc76d0 },
                            conversationControlsVerifiedCannotEngage: { Icon: d.default, calloutType: "primary", headline: l().ab105904, detail: l().a4e254ff, detailAction: { label: l().j1b02fd8, link: { pathname: "/i/premium_sign_up", state: { referring_page: "verified_only_replies" } } }, inline: l().fd1cda7a },
                            communityHiddenTweetEducation: { Icon: u.default, calloutType: "primary", headline: l().daba4484, detail: l().f956070a, inline: l().daba4484 },
                            communityRemovedMemberEducation: { Icon: u.default, calloutType: "primary", headline: l().daba4484, detail: l().cc17f408, inline: l().daba4484 },
                            exclusiveToSuperFollowersCreator: { Icon: m.default, calloutType: "exclusive", headline: l().j620ce06, detail: l().bd414b44, inline: l().bd414b44 },
                            exclusiveToSuperFollowersReplyOwn: { Icon: m.default, calloutType: "exclusive", headline: l().j620ce06, detail: l().dd0da5d9, inline: l().dd0da5d9 },
                            exclusiveToSuperFollowersReplyOthers: { Icon: m.default, calloutType: "exclusive", headline: l().g1c6a77e, detail: l().d3b143d7, inline: l().f6337117 },
                            trustedFriendsCreator: { Icon: b.default, calloutType: "success", detail: l().g766a06d, inline: l().g766a06d },
                            trustedFriendsReplyOwn: { Icon: b.default, calloutType: "success", detail: l().g766a06d, inline: l().g766a06d },
                            trustedFriendsReplyOthers: { Icon: b.default, calloutType: "success", detail: l().g766a06d, detailAction: { label: l().d7e50a66, link: "https://help.x.com/using-twitter/twitter-circle" }, inline: l().g766a06d },
                            linksDisabledInReplies: { Icon: p.default, calloutType: "primary", headline: l().j040a368, detail: l().b31d0af7, inline: l().eab0f780 },
                            premiumExclusive: { Icon: d.default, calloutType: "primary", headline: l().f17a1f54, detail: l().f17a1f54, inline: l().f17a1f54 },
                        }))({ redesignedLabelForSubscribedTweets: t }),
                        { displayMode: a, id: g, screenName: v, style: k, type: S } = e,
                        { Icon: E, calloutType: I, detail: A, detailAction: T, headline: Z, inline: P } = n[S],
                        _ = "compact" === a,
                        R = "detail" === a,
                        L = R ? T : void 0,
                        D = R ? Z : void 0,
                        M = C(R ? A : P, v),
                        F = "exclusiveToSuperFollowersCreator" === S ? l().bd414b44 : l().a0953370,
                        W = w.includes(S) && t && o.createElement(f.ZP, { background: "gray0", style: _ ? x.marginTop : null }, F),
                        B = "premiumExclusive" === S ? o.createElement(f.ZP, { background: "gray0", style: _ ? x.marginTop : null }, Z) : null;
                    return o.createElement(i.Z, { style: k }, B || W || (_ ? null : o.createElement(y.Z, { Icon: E, action: L, headline: D, id: g, text: M, type: I, withThumbnail: !0 })));
                },
                x = g.default.create((e) => ({ marginTop: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-c93e0a41.408d2e1a.js.map
