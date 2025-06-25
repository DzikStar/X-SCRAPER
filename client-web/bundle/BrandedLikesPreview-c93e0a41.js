"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-c93e0a41", "ondemand.ComposeScheduling-e47ad1c6"],
    {
        98538: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                i = n(325686),
                a = n(731708),
                r = n(891198),
                l = n(280278),
                c = n(392237);
            const s = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
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
                (u.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: s, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: r = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? o.createElement(l.ZP, { children: t, count: n, size: s, style: i, weight: r }) : o.createElement(a.ZP, { children: t, color: c ? "white" : "text", size: s, style: i, weight: r }))));
            const m = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                b = u;
        },
        366985: (e, t, n) => {
            n.d(t, { L: () => a, j: () => r });
            n(202784);
            var o = n(352924),
                i = n(782261);
            function a(e) {
                const t = i.Z.getOriginalTweet(e),
                    n = !!(t.favorite_count || t.reply_count || t.quote_count || t.retweet_count),
                    a = { actionsBar: (0, o.b)(), avatar: (0, o.b)(), conversationControlLabel: (0, o.b)(), conversationLevel: (0, o.b)(), editCallout: (0, o.b)(), exclusivityInfoLabel: (0, o.b)(), premiumInfoLabel: (0, o.b)(), longformNotesLabel: (0, o.b)(), media: (0, o.b)(), promotedLabel: (0, o.b)(), promotionStatusLabel: (0, o.b)(), replyContext: (0, o.b)(), richContent: (0, o.b)(), socialContext: (0, o.b)(), text: (0, o.b)(), timestamp: (0, o.b)(), tombstone: (0, o.b)(), trustedFriendsLabel: (0, o.b)(), userLabel: (0, o.b)(), username: (0, o.b)() };
                return [a, [a.promotedLabel, a.promotionStatusLabel, a.conversationLevel, a.socialContext, a.username, a.avatar, a.userLabel, a.timestamp, a.tombstone, a.replyContext, a.text, a.media, a.richContent, a.editCallout, a.exclusivityInfoLabel, a.premiumInfoLabel, a.trustedFriendsLabel, a.conversationControlLabel, a.longformNotesLabel, n ? a.actionsBar : void 0].filter(Boolean)];
            }
            function r({ children: e, tweet: t }) {
                return e(a(t));
            }
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => v });
            var o = n(202784),
                i = n(325686),
                a = n(461756),
                r = n(731708),
                l = n(58881),
                c = n(530732),
                s = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                b = n(111677),
                p = n.n(b),
                h = n(891198),
                y = n(537392),
                f = n(280278);
            const C = p().e8d93005,
                w = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                g = ({ color: e, count: t }) => {
                    const n = (0, h.wl)(t, !0);
                    return o.createElement(y.ZP, null, ({ containerWidth: i }) => {
                        return o.createElement(f.ZP, { color: e, count: t, size: "subtext2", style: [w.count, ((a = i), a < u.default.theme.breakpoints.small && w.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(i) || n.length >= 5 ? C(t) : n) : void 0);
                        var a;
                    });
                };
            class v extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return o.createElement(s.ZP.Consumer, null, ({ direction: c }) => o.createElement(r.ZP, { color: e ? n : a, dir: c, style: [x.inner, e && "blue500" === n && x.blue500] }, o.createElement(i.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: i, iconSize: a, isActive: r, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                b = d && r && !e?.isHovered;
                            return o.createElement(c.Z, { hoverLabel: i, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, k[b ? "haloBackground" : n], !s && x.iconBackground, "small" === a && x.iconSmallBoundingBox, b && x.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: i, isFaded: r, onAnimationEnd: l, onAnimationStart: c, onError: s, showAnimation: b, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && b) return o.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: E[t], animationStyle: A, onAnimationEnd: l, onAnimationStart: c, onError: s });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [E[t], !i && r && x.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(g, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: r, isDisabled: l, isPresentational: s, keyboardShortcut: m, link: b, preventFocusShift: p, renderMenu: h, renderWrapper: y = o.Fragment, style: f, testID: C } = this.props,
                        w = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        i.Z,
                        { style: [x.root, f] },
                        o.createElement(
                            y,
                            null,
                            s
                                ? this._renderContent(r)
                                : o.createElement(c.Z, { "aria-haspopup": h ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: b, onClick: this._handlePress, preventFocusShift: p, renderMenu: h, style: [x.triggerAreaRoot, x.outlineNone], testID: C }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          i = r || n || o || t;
                                      return this._renderContent(i, e);
                                  }),
                        ),
                        w ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            v.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const E = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                k = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                x = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                S = "224.5%",
                A = { width: S, height: S };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => i, ZP: () => r });
            var o = n(941978);
            const i = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? i);
                }
            }
            const r = new a();
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                i = (n(571372), n(202784)),
                a = n(900664),
                r = n(111677),
                l = n.n(r),
                c = n(432181),
                s = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                b = n(522171),
                p = n(40644),
                h = n(551611);
            const y = l().d636ebc6,
                f = l().eb3a8b0c,
                C = l().j472ecfc,
                w = l().a0af935c,
                g = l().dac92b0d,
                v = l().aa650427;
            function E(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function k({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: r, enableActionMenu: l = !1, enableKeyboardShortcuts: m, iconSize: k, isDisabled: x, isFaded: S, isLiked: A, isPresentational: I, likeActionIconContainerRef: P, likeTransitionAnimation: Z, link: _, onAnimationStart: T, onError: L = E, onLikeActionSelect: R, onMenuCancel: F, onPress: D, style: M, testIDs: B, withCount: N }) {
                const O = N && "number" == typeof r;
                let W = A ? w : y;
                const z = i.useMemo(() => ({ label: A ? f : y }), [A]);
                O && (W = A ? v({ count: r }) : g({ count: r }));
                const V = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = i.useState(!1),
                        a = i.useRef(e);
                    return (
                        i.useEffect(() => {
                            ("object" == typeof t || h.ZP.check(t)) && e !== a.current && (o(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: i.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: A, likeTransitionAnimation: Z });
                const K = i.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: C,
                                onClick() {
                                    t(), R?.();
                                },
                                testID: B?.like,
                                Icon: c.default,
                            },
                        ];
                        return i.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), F?.();
                            },
                        });
                    },
                    [e, R, F, B?.like],
                );
                return i.createElement(
                    p.ZP,
                    (0, o.Z)({}, V, {
                        ActiveIcon: s.default,
                        Icon: c.default,
                        actionIconContainerRef: P,
                        activeColor: t,
                        "aria-label": W,
                        color: n,
                        count: r,
                        enableKeyboardShortcuts: m,
                        hoverLabel: z,
                        iconSize: k,
                        isActive: A,
                        isDisabled: x,
                        isFaded: S,
                        isPresentational: I,
                        keyboardShortcut: b.Z.shortcuts.like,
                        link: _,
                        onAnimationStart: T,
                        onError: L,
                        onPress: function () {
                            d.ZP.isFirefox() || a.Z.vibrate(5), D?.();
                        },
                        renderMenu: l ? K : void 0,
                        style: M,
                        testID: B && (A ? B.unlike : B.like),
                        withCount: O,
                    }),
                );
            }
        },
        982266: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(202784),
                i = n(811176),
                a = n(247056);
            function r({ Icon: e, isDisabled: t, items: n, onOpen: r }) {
                const l = o.useCallback((e) => o.createElement(i.Z, { items: n, onCloseRequested: e }), [n]);
                return n.length ? o.createElement(a.Z, { Icon: e, isDisabled: t, onClick: r, renderActionMenu: l }) : null;
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => k, Z: () => x });
            var o = n(202784),
                i = n(111677),
                a = n.n(i),
                r = n(720600),
                l = n(155353),
                c = n(522171),
                s = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const b = a().f2919fb8,
                p = a().fd1e5446,
                h = a().bb5c5864,
                y = a().f65198c2;
            function f(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: i, onMenuCancel: a, onQuoteTweetActionSelect: r, onRetweetActionSelect: c, onUnretweetActionSelect: s, onViewEngagementsActionSelect: m, retweetActionSubText: f, retweetWithCommentLink: C, testIDs: w, viewQuotesRetweetsLink: g }) {
                        const v = w?.retweetConfirm,
                            E = w?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                i ||
                                    e ||
                                    o.push({
                                        text: b,
                                        subText: f,
                                        onClick() {
                                            a?.(), c?.();
                                        },
                                        testID: v,
                                        Icon: l.default,
                                    }),
                                i &&
                                    o.push({
                                        text: p,
                                        onClick() {
                                            a?.(), s?.();
                                        },
                                        testID: E,
                                        Icon: l.default,
                                    }),
                                t ||
                                    o.push({
                                        text: h,
                                        onClick() {
                                            a?.(), r?.();
                                        },
                                        Icon: d.default,
                                        link: C,
                                    }),
                                n ||
                                    o.push({
                                        text: y,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: g,
                                    }),
                                o
                            );
                        }, [e, t, n, i, a, r, c, s, m, f, C, v, E, g]);
                    })(e),
                    { onMenuCancel: n } = e,
                    i = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: i });
            }
            const C = a().f2919fb8,
                w = a().fd1e5446,
                g = a().b8c465e2,
                v = a().dfad425d,
                E = a().a386dc55,
                k = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function x({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: i, enableActionMenu: a = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: b, iconSize: p, isDisabled: h, isFaded: y, isPresentational: k, isRetweeted: x, onMenuCancel: S, onPress: A, onQuoteTweetActionSelect: I, onRetweetActionSelect: P, onUnretweetActionSelect: Z, onViewEngagementsActionSelect: _, retweetActionSubText: T, retweetWithCommentLink: L, style: R, testIDs: F, viewQuotesRetweetsLink: D, withCount: M }) {
                const B = M && "number" == typeof i;
                let N = x ? g : C;
                B && (N = x ? E({ count: i }) : v({ count: i }));
                const O = o.useMemo(() => ({ label: x ? w : C }), [x]),
                    W = o.useMemo(() => ({ retweetConfirm: F?.retweetConfirm, unretweetConfirm: F?.unretweetConfirm }), [F?.retweetConfirm, F?.unretweetConfirm]),
                    z = o.useCallback(
                        (t) =>
                            o.createElement(f, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: b,
                                isRetweeted: x,
                                onMenuCancel: () => {
                                    t(), S?.();
                                },
                                onQuoteTweetActionSelect: I,
                                onRetweetActionSelect: P,
                                onUnretweetActionSelect: Z,
                                onViewEngagementsActionSelect: _,
                                retweetActionSubText: T,
                                retweetWithCommentLink: L,
                                testIDs: W,
                                viewQuotesRetweetsLink: D,
                            }),
                        [e, u, m, b, x, S, I, P, Z, _, T, W, L, D],
                    );
                return o.createElement(s.ZP, { ActiveIcon: r.default, Icon: l.default, activeColor: t, "aria-label": N, color: n, count: i, enableKeyboardShortcuts: d, hoverLabel: O, iconSize: p, isActive: x, isDisabled: h, isFaded: y, isPresentational: k, keyboardShortcut: c.Z.shortcuts.retweet, onPress: A, renderMenu: a ? z : void 0, style: R, testID: x ? F?.unretweet : F?.retweet, withCount: B });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => ce });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(976145),
                c = n(235902),
                s = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: a = "inline", id: r, style: l }) {
                const s = c.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(i.Z, { "aria-label": e, "aria-labelledby": t, id: r, role: "group", style: [u.container, u[`${a}Container`], s && u.noMaxWidth, l] }, n);
            }
            const u = s.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                b = n(53674),
                p = n(40644);
            const h = { label: r().f2849136 },
                y = r().f206e970,
                f = { label: r().b05a39b2 },
                C = r().c7073f5b;
            n(571372);
            var w = n(900664),
                g = n(73416),
                v = n(883069),
                E = n(323265),
                k = n(233184),
                x = n(522171);
            const S = r().dbc0c2f4,
                A = r().hf417cf0,
                I = r().c7a989ce,
                P = r().febd30ed,
                Z = r().a8dc9587;
            function _(e = new Error("TweetActionBookmark.onError")) {
                k.Z.report(e);
            }
            var T = n(721083),
                L = n(194661);
            const R = r().hdf7226a,
                F = { label: R },
                D = r().c9940955;
            function M({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isPresentational: c, link: s, onPress: d, renderWrapper: u, style: m, testID: b, withCount: h }) {
                const y = h && "number" == typeof n,
                    f = y ? D({ count: n }) : R;
                return o.createElement(p.ZP, { Icon: L.default, activeColor: e, "aria-label": f, color: t, count: n, enableKeyboardShortcuts: i, hoverLabel: F, iconSize: a, isDisabled: r, isFaded: l, isPresentational: c, keyboardShortcut: x.Z.shortcuts.reply, link: s, onPress: d, renderWrapper: u, style: m, testID: b, withCount: y });
            }
            const B = o.memo(M);
            var N = n(15342),
                O = n(744610),
                W = n(137937),
                z = n(461756),
                V = n(811176),
                K = n(638236);
            const j = { label: r().dc63da16 },
                U = r().cee0585c,
                H = W.Z.bezier(0.45, 0, 0, 1);
            const Q = function ({ activeColor: e, color: t, count: n, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, onPress: c, style: s, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(p.ZP, { Icon: b.default, activeColor: e, "aria-label": m ? C({ count: n }) : y, color: t, count: n, hoverLabel: m ? f : h, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, link: !d || a || r ? void 0 : `${d}/analytics`, onPress: c, style: s, withCount: m });
                },
                q = T.Z,
                G = B,
                $ = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: i, enableKeyboardShortcuts: a, iconSize: r, isDisabled: l, isFaded: c, isPresentational: s, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: b, withCount: h }) {
                    const y = o.useRef({ wiggle: new O.Z.Value(0), scale: new O.Z.Value(1) }).current,
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
                        m && !z.Z.reducedMotionEnabled && O.Z.parallel([O.Z.timing(y.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), O.Z.sequence([O.Z.timing(y.scale, w({ toValue: 1.45 })), O.Z.timing(y.scale, w({ toValue: 1 }))])]).start();
                    }, [y.scale, m, y.wiggle]);
                    const C = y.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function w(e) {
                        return { ...e, useNativeDriver: !1, easing: H, duration: 250 };
                    }
                    const g = o.useRef([{}, { transform: [{ rotate: C }, { scale: y.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(O.Z.View, { style: g.current }, o.createElement(p.ZP, { Icon: K.Z, activeColor: n, "aria-label": U, color: i, enableKeyboardShortcuts: a, hoverLabel: j, iconSize: r, isDisabled: l, isFaded: c, isPresentational: s, keyboardShortcut: x.Z.shortcuts.share, onPress: u, renderMenu: c ? void 0 : f, style: b, withCount: h }));
                },
                J = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isBookmarked: c, isPresentational: s, onError: d = _, onPress: u, style: m, testIDs: b, withCount: h }) {
                    const y = h && "number" == typeof n;
                    let f = c ? I : S;
                    const C = o.useMemo(() => ({ label: c ? A : S }), [c]);
                    return (
                        y && (f = c ? Z({ count: n }) : P({ count: n })),
                        o.createElement(p.ZP, {
                            ActiveIcon: g.default,
                            Icon: v.default,
                            activeColor: e,
                            "aria-label": f,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: i,
                            hoverLabel: C,
                            iconSize: a,
                            isActive: c,
                            isDisabled: r,
                            isFaded: l,
                            isPresentational: s,
                            keyboardShortcut: x.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                E.ZP.isFirefox() || w.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: b && (c ? b.removeBookmark : b.bookmark),
                            withCount: y,
                        })
                    );
                };
            const X = r().a0af935c,
                Y = r().b8c465e2,
                ee = r().c7a989ce,
                te = (e) => o.createElement(ce.ActionAnalytics, e),
                ne = (e) => o.createElement(ce.ActionLike, e),
                oe = (e) => o.createElement(ce.ActionReply, e),
                ie = (e) => o.createElement(ce.ActionRetweet, e),
                ae = (e) => o.createElement(ce.ActionShare, e),
                re = (e) => o.createElement(ce.ActionBookmark, e),
                le = [];
            function ce({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: a = "gray700", displayStyle: s, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: b = !1, isFocalTweet: p = !1, isFromProtectedAccount: h, isLiked: y, isRetweeted: f, isPresentational: C, likeCount: w, id: g, renderAnalyticsAction: v = te, renderLikeAction: E = ne, renderReplyAction: k = oe, renderRetweetAction: x = ie, renderShareAction: S = ae, renderBookmarkAction: A = re, replyCount: I, retweetCount: P, style: Z, tweetLink: _, viewCount: T, viewState: L, withAnalytics: R = !1, withCount: F = !1, withBookmark: D = !1 }) {
                const M = o.useRef(null),
                    B = c.ZP.useProps(),
                    N = B.tweetViewCountsEnabled(),
                    O = B.testViewCountShow(),
                    W = N || O,
                    z = R && W,
                    V = R && !z,
                    K = W ? "EnabledWithCount" === L && F : F,
                    j = o.useMemo(() => {
                        if (!F) return;
                        const e = r().b03835c7,
                            t = r().g4a195e7,
                            o = r().e089b42d,
                            i = r().e0a8fe39,
                            a = r().c58b2ab7;
                        return (0, l.Z)([I ? e({ replyCount: I }) : null, P ? t({ retweetCount: P }) : null, f ? Y : null, w ? o({ likeCount: w }) : null, y ? X : null, b && D ? ee : null, n ? i({ bookmarkCount: n }) : null, T ? a({ viewCount: T }) : null].filter(Boolean), !0);
                    }, [n, b, y, f, w, I, P, T, F, D]),
                    U = o.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    H = o.useMemo(() => k({ ...U, activeColor: t, count: I, enableKeyboardShortcuts: u, isPresentational: C, withCount: F }), [U, t, I, u, C, F, k]),
                    Q = o.useMemo(() => x({ ...U, activeColor: t, count: P, enableKeyboardShortcuts: u, isFromProtectedAccount: h, isRetweeted: f, isPresentational: C, withCount: F }), [U, t, P, u, h, f, C, F, x]),
                    q = o.useMemo(() => E({ ...U, activeColor: t, count: w, enableKeyboardShortcuts: u, isLiked: y, isPresentational: C, withCount: F }), [U, t, w, u, y, C, F, E]),
                    G = o.useMemo(() => (z ? v({ ...U, count: T, isPresentational: C, tweetLink: _, withCount: K }) : null), [z, U, T, C, _, K, v]),
                    $ = o.useMemo(() => (D ? A({ ...U, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: C, isBookmarked: b, withCount: F }) : null), [D, U, t, n, u, C, b, F, A]),
                    J = o.useMemo(() => (V ? v({ ...U, isPresentational: C, tweetLink: _ }) : null), [V, U, C, _, v]),
                    ce = o.useMemo(() => S({ ...U, actionItems: le, activeColor: t, enableKeyboardShortcuts: u, isPresentational: C, withCount: F && V }), [U, t, u, C, V, F, S]);
                return o.createElement(i.Z, { ref: M }, o.createElement(d, { "aria-label": j, displayStyle: s, id: g, style: Z }, H, Q, q, G, $, J, ce));
            }
            (ce.ActionAnalytics = Q),
                (ce.ActionLike = q),
                (ce.ActionReply = G),
                (ce.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(N.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (ce.ActionShare = $),
                (ce.ActionBookmark = J);
        },
        737082: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                i = n(495232),
                a = n(235902),
                r = n(392237),
                l = n(495580),
                c = n(830911),
                s = n(782261);
            const d = r.default.create((e) => ({ compact: { alignSelf: "flex-start" }, inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 }, detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 } })),
                u = ({ displayStyle: e = "inline", ...t }) => {
                    const n = { displayStyle: e, ...t },
                        r = (({ displayStyle: e, exclusivityInfoLabelNativeID: t, hideExclusivityInfoEducationTextInReplies: n, loggedInUser: o, tweet: i }) => {
                            const a = s.Z.getOriginalTweet(i),
                                r = !!a.in_reply_to_status_id_str,
                                { exclusivity_info: l, permalink: c, user: d } = a;
                            if (!l || ("inline" === e && r && n)) return;
                            const u = l.screen_name,
                                m = u === o?.screen_name,
                                b = d.screen_name === o?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : "compact", id: t, screenName: u, scribeElement: "exclusivity_info_context", tweetPermalink: c, type: m ? "exclusiveToSuperFollowersCreator" : b ? "exclusiveToSuperFollowersReplyOwn" : "exclusiveToSuperFollowersReplyOthers" };
                        })(n),
                        u = (({ displayStyle: e, hideTrustedFriendsEducationTextInReplies: t, loggedInUser: n, trustedFriendsLabelNativeID: o, tweet: i }) => {
                            const r = a.ZP.useProps(),
                                l = r.trustedFriendsEnabled(),
                                c = r.trustedFriendsCreationEnabled(),
                                d = s.Z.getOriginalTweet(i),
                                u = !!d.in_reply_to_status_id_str,
                                { permalink: m, trusted_friends_info: b, user: p } = d;
                            if (!l || !b || ("inline" === e && u && t)) return;
                            const h = b.screen_name,
                                y = h === n?.screen_name,
                                f = p.screen_name === n?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : u ? "compact" : "inline", id: o, screenName: h, scribeElement: "exclusivity_info_context", tweetPermalink: m, type: y && c ? "trustedFriendsCreator" : f ? "trustedFriendsReplyOwn" : "trustedFriendsReplyOthers" };
                        })(n),
                        m = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const r = !!o,
                                l = s.Z.getOriginalTweet(a),
                                { conversation_control: c, limited_actions: d, permalink: u } = l,
                                m = s.Z.getDisabledActions(l),
                                b = m?.includes("Reply") || d,
                                p = r && !b;
                            if (!c || ("inline" === t && (!p || n))) return;
                            const h = c.conversation_owner.screen_name,
                                y = c.policy,
                                f = i.Z.getEducationType(y, p);
                            return f ? { displayMode: "detail" === t ? "detail" : "compact", id: e, tweetPermalink: u, screenName: h, scribeElement: "conversation_control_context", type: f } : void 0;
                        })(n),
                        b = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                c = s.Z.getOriginalTweet(r),
                                { community_id_str: d, limited_actions: u } = c,
                                m = "community_tweet_hidden" === u,
                                b = i.Z.getEducationType("community_hidden_tweet");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "hidden_community_tweet_education", type: b };
                        })(n),
                        p = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                c = s.Z.getOriginalTweet(r),
                                { community_id_str: d, limited_actions: u } = c,
                                m = "community_tweet_member_removed" === u,
                                b = i.Z.getEducationType("community_tweet_member_removed");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "removed_member_community_tweet_education", type: b };
                        })(n),
                        h = (({ premiumInfoLabelNativeID: e, tweet: t }) => {
                            const n = s.Z.getOriginalTweet(t),
                                o = n.premium_info,
                                i = !!n.in_reply_to_status_id_str;
                            if (o && !i) return { type: "premiumExclusive", displayMode: "compact", id: e, screenName: o.screen_name, scribeElement: "premium_info_context" };
                        })(n),
                        y = r || u || m || b || p || h;
                    if (!y) return null;
                    const { handleAnchorAction: f, handleAnchorOpen: C, handleAnchorSecondaryAction: w } = n,
                        { anchorless: g, displayMode: v, id: E, screenName: k, scribeElement: x, tweetPermalink: S, type: A } = y,
                        I = d[v];
                    return "inline" !== e || g ? o.createElement(c.Z, { displayMode: v, id: E, screenName: k, style: I, type: A }) : o.createElement(l.Z, { onAction: f, onOpen: C ? () => C(x) : void 0, onSecondaryAction: w, screenName: k, style: I, tweetPermalink: S, type: A }, o.createElement(c.Z, { displayMode: v, id: E, screenName: k, type: A }));
                };
        },
        495580: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(430895),
                c = n(283119),
                s = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(731708),
                h = n(807896),
                y = n(946847),
                f = n(30899),
                C = n(392237);
            const w = r().b09adb0c,
                g = r().c2637ef6,
                v = (e) => {
                    const { Icon: t, actionLabel: n, actionLink: a, children: r, headline: l, onAction: c, onDismiss: s, onOpen: d, onSecondaryAction: u, style: m, subtext: b, thumbnailColor: p, tweetPermalink: C } = e;
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
                                onDismiss: s,
                                renderContent: (e, r) => {
                                    const s = () => {
                                            u && u(), e();
                                        },
                                        d =
                                            C || (n && a)
                                                ? {
                                                      actionLabel: n ?? w,
                                                      actionLink: a ?? C,
                                                      onAction: () => {
                                                          c && c(), e();
                                                      },
                                                      secondaryActionLabel: g,
                                                      onSecondaryAction: s,
                                                  }
                                                : { actionLabel: g, onAction: s };
                                    return o.createElement(i.Z, { style: "popover" === r ? E.interstitialPopover : void 0 }, o.createElement(y.Z, (0, h.Z)({}, d, { contentStyle: E.content, graphic: t, graphicDisplayMode: "thumbnail", graphicThumbnailColor: p, headline: l, subtext: b, withBottomPadding: !1, withCloseButton: !1 })));
                                },
                                withFixedPosition: !0,
                            },
                            o.createElement(i.Z, { onClick: d, role: "button", style: E.cursor }, r),
                        ),
                    );
                },
                E = C.default.create((e) => ({ interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 }, cursor: { cursor: "pointer" }, content: { marginVertical: 0, marginBottom: e.spaces.space28 } })),
                k = {
                    conversationControlsFollowersCanEngage: { Icon: l.default, headline: r().bb7b821a, subtext: r().fc41217b },
                    conversationControlsFollowersCannotEngage: { Icon: l.default, headline: r().ab105904, subtext: r().fc41217b },
                    conversationControlsCommunityCanEngage: { Icon: c.default, headline: r().bb7b821a, subtext: r().f064f477 },
                    conversationControlsCommunityCannotEngage: { Icon: c.default, headline: r().ab105904, subtext: r().f064f477 },
                    conversationControlsByInvitationCanEngage: { Icon: s.default, headline: r().bb7b821a, subtext: r().ea9ac5c9 },
                    conversationControlsByInvitationCannotEngage: { Icon: s.default, headline: r().ab105904, subtext: r().ea9ac5c9 },
                    conversationControlsSubscribersCanEngage: { Icon: s.default, headline: r().bb7b821a, subtext: r().d2ae1499 },
                    conversationControlsSubscribersCannotEngage: { Icon: s.default, headline: r().ab105904, subtext: r().d2ae1499 },
                    conversationControlsVerifiedCanEngage: { Icon: d.default, headline: r().bb7b821a, subtext: r().a4e254ff },
                    conversationControlsVerifiedCannotEngage: { Icon: d.default, headline: r().ab105904, subtext: r().a4e254ff },
                    communityHiddenTweetEducation: { Icon: u.default, headline: r().daba4484, subtext: r().f956070a },
                    communityRemovedMemberEducation: { Icon: u.default, headline: r().daba4484, subtext: r().ceb6841c },
                    exclusiveToSuperFollowersCreator: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().bd414b44 },
                    exclusiveToSuperFollowersReplyOwn: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().dd0da5d9 },
                    exclusiveToSuperFollowersReplyOthers: { Icon: m.default, thumbnailColor: "exclusive", headline: r().g1c6a77e, subtext: r().d3b143d7 },
                    trustedFriendsCreator: { Icon: b.default, actionLabel: r().cb731cae, actionLink: "/i/circles", thumbnailColor: "success", headline: r().c33d3a84, subtext: () => o.createElement(r().I18NFormatMessage, { $i18n: "b6a393af" }, o.createElement(p.ZP, { color: "text", link: "https://help.x.com/using-twitter/twitter-circle", weight: "bold", withUnderline: !0 }, r().c4f10e71)) },
                },
                x = (e) => {
                    const { children: t, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, screenName: c, style: s, tweetPermalink: d, type: u } = e;
                    if (!k[u]) return o.createElement(i.Z, { style: s }, t);
                    const { Icon: m, actionLabel: b, actionLink: p, headline: h, subtext: y, thumbnailColor: f } = k[u],
                        C = ((e, t) => ("string" != typeof e ? e({ screenName: t }) : e))(y, c);
                    return o.createElement(v, { Icon: m, actionLabel: b, actionLink: p, headline: h, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, style: s, subtext: C, thumbnailColor: f, tweetPermalink: d }, t);
                };
        },
        830911: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(430895),
                c = n(283119),
                s = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(883437),
                h = n(235902),
                y = n(834324),
                f = n(868634),
                C = n(392237);
            const w = (e, t) => ("string" != typeof e ? e({ screenName: t }) : e),
                g = ["exclusiveToSuperFollowersCreator", "exclusiveToSuperFollowersReplyOwn", "exclusiveToSuperFollowersReplyOthers"],
                v = (e) => {
                    const t = h.ZP.useProps().redesignedLabelForSubscribedTweets(),
                        n = (({ redesignedLabelForSubscribedTweets: e }) => ({
                            conversationControlsFollowersCanEngage: { Icon: l.default, calloutType: "primary", headline: r().bb7b821a, detail: r().fc41217b, inline: r().e5dc76d0 },
                            conversationControlsFollowersCannotEngage: { Icon: l.default, calloutType: "primary", headline: r().ab105904, detail: r().fc41217b, inline: r().fd1cda7a },
                            conversationControlsCommunityCanEngage: { Icon: c.default, calloutType: "primary", headline: r().bb7b821a, detail: r().f064f477, inline: r().e5dc76d0 },
                            conversationControlsCommunityCannotEngage: { Icon: c.default, calloutType: "primary", headline: r().ab105904, detail: r().f064f477, inline: r().fd1cda7a },
                            conversationControlsByInvitationCanEngage: { Icon: s.default, calloutType: "primary", headline: r().bb7b821a, detail: r().ea9ac5c9, inline: r().e5dc76d0 },
                            conversationControlsByInvitationCannotEngage: { Icon: s.default, calloutType: "primary", headline: r().ab105904, detail: r().ea9ac5c9, inline: r().fd1cda7a },
                            conversationControlsSubscribersCanEngage: { Icon: s.default, calloutType: "primary", headline: r().bb7b821a, detail: r().d2ae1499, inline: r().e5dc76d0 },
                            conversationControlsSubscribersCannotEngage: { Icon: s.default, calloutType: "primary", headline: r().ab105904, detail: r().d2ae1499, inline: r().fd1cda7a },
                            conversationControlsVerifiedCanEngage: { Icon: d.default, calloutType: "primary", headline: r().bb7b821a, detail: r().a4e254ff, inline: r().e5dc76d0 },
                            conversationControlsVerifiedCannotEngage: { Icon: d.default, calloutType: "primary", headline: r().ab105904, detail: r().a4e254ff, detailAction: { label: r().j1b02fd8, link: { pathname: "/i/premium_sign_up", state: { referring_page: "verified_only_replies" } } }, inline: r().fd1cda7a },
                            communityHiddenTweetEducation: { Icon: u.default, calloutType: "primary", headline: r().daba4484, detail: r().f956070a, inline: r().daba4484 },
                            communityRemovedMemberEducation: { Icon: u.default, calloutType: "primary", headline: r().daba4484, detail: r().cc17f408, inline: r().daba4484 },
                            exclusiveToSuperFollowersCreator: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().bd414b44, inline: r().bd414b44 },
                            exclusiveToSuperFollowersReplyOwn: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().dd0da5d9, inline: r().dd0da5d9 },
                            exclusiveToSuperFollowersReplyOthers: { Icon: m.default, calloutType: "exclusive", headline: r().g1c6a77e, detail: r().d3b143d7, inline: r().f6337117 },
                            trustedFriendsCreator: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOwn: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOthers: { Icon: b.default, calloutType: "success", detail: r().g766a06d, detailAction: { label: r().d7e50a66, link: "https://help.x.com/using-twitter/twitter-circle" }, inline: r().g766a06d },
                            linksDisabledInReplies: { Icon: p.default, calloutType: "primary", headline: r().j040a368, detail: r().b31d0af7, inline: r().eab0f780 },
                            premiumExclusive: { Icon: d.default, calloutType: "primary", headline: r().f17a1f54, detail: r().f17a1f54, inline: r().f17a1f54 },
                        }))({ redesignedLabelForSubscribedTweets: t }),
                        { displayMode: a, id: C, screenName: v, style: k, type: x } = e,
                        { Icon: S, calloutType: A, detail: I, detailAction: P, headline: Z, inline: _ } = n[x],
                        T = "compact" === a,
                        L = "detail" === a,
                        R = L ? P : void 0,
                        F = L ? Z : void 0,
                        D = w(L ? I : _, v),
                        M = "exclusiveToSuperFollowersCreator" === x ? r().bd414b44 : r().a0953370,
                        B = g.includes(x) && t && o.createElement(f.ZP, { background: "gray0", style: T ? E.marginTop : null }, M),
                        N = "premiumExclusive" === x ? o.createElement(f.ZP, { background: "gray0", style: T ? E.marginTop : null }, Z) : null;
                    return o.createElement(i.Z, { style: k }, N || B || (T ? null : o.createElement(y.Z, { Icon: S, action: R, headline: F, id: C, text: D, type: A, withThumbnail: !0 })));
                },
                E = C.default.create((e) => ({ marginTop: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-c93e0a41.3e5bd91a.js.map
