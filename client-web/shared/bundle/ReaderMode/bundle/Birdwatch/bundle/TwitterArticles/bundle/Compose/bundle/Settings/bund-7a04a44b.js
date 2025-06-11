"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"],
    {
        98538: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                i = n(325686),
                r = n(731708),
                a = n(891198),
                l = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: i } = this.props;
                    return o.createElement(r.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
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
                (u.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(r.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: a = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? o.createElement(l.ZP, { children: t, count: n, size: c, style: i, weight: a }) : o.createElement(r.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: a }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                b = u;
        },
        409981: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                i = n(325686),
                r = n(432181),
                a = n(517330),
                l = n(392237);
            function s({ children: e, deceleration: t = 0.7, isSwipeLeftEnabled: n = !0, isSwipeRightEnabled: s = !0, leftBackgroundColor: d = "cellBackground", leftColor: u = "blue500", leftIcon: m = r.default, onSwipeLeft: b, onSwipeRight: p, rightBackgroundColor: f = "cellBackground", rightColor: h = "red500", rightIcon: y = a.default, threshold: w = 0.3 }) {
                const C = o.useRef(),
                    v = o.useRef(),
                    g = o.useRef(),
                    E = o.useRef(),
                    x = o.useRef(0),
                    _ = o.useRef(0),
                    k = o.useRef(!1);
                o.useEffect(
                    function () {
                        const e = v.current,
                            o = E.current,
                            i = g.current;
                        if (i && (e || o))
                            return (
                                i.addEventListener("mousedown", h),
                                i.addEventListener("touchstart", y, { passive: !0 }),
                                function () {
                                    i.removeEventListener("mousedown", h), i.removeEventListener("touchstart", y);
                                }
                            );
                        function r(e) {
                            return (n && s) || (n && e < 0) || (s && e > 0);
                        }
                        function a(e) {
                            e.cancelable && e.preventDefault();
                            const n = (e.clientX - x.current) * t;
                            r(n) && (_.current = n);
                        }
                        function l(e) {
                            const n = (e.targetTouches[0].clientX - x.current) * t;
                            r(n) && (_.current = n);
                        }
                        function c() {
                            k.current && ((k.current = !1), Math.abs(_.current) > i.offsetWidth * w && (_.current > 0 ? p?.() : b?.()), (_.current = 0), (i.style.transform = "translateX(0)"), e && (e.style.transform = "none"), o && (o.style.transform = "none"));
                        }
                        function d() {
                            window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", d), c();
                        }
                        function u() {
                            i.removeEventListener("touchmove", l), i.removeEventListener("touchend", u), c();
                        }
                        function m() {
                            k.current && requestAnimationFrame(m), Math.abs(_.current) < i.offsetWidth / 2 && (i.style.transform = `translateX(${_.current}px)`), Math.abs(_.current) > i.offsetWidth * w && (_.current > 0 ? e && (e.style.transform = "rotate(360deg)") : o && (o.style.transform = "rotate(-360deg)"));
                        }
                        function f(e) {
                            (k.current = !0), (x.current = e), requestAnimationFrame(m);
                        }
                        function h(e) {
                            f(e.clientX), window.addEventListener("mousemove", a), window.addEventListener("mouseup", d);
                        }
                        function y(e) {
                            f(e.targetTouches[0].clientX), i.addEventListener("touchmove", l), i.addEventListener("touchend", u);
                        }
                    },
                    [t, n, s, b, p, w],
                );
                const I = o.useMemo(() => ({ leftAction: [c.action, { color: l.default.theme.colors[u], fill: l.default.theme.colors[u] }], leftActionContainer: [c.actionContainer, { backgroundColor: l.default.theme.colors[d] }], rightAction: [c.action, { color: l.default.theme.colors[h], fill: l.default.theme.colors[h] }], rightActionContainer: [c.actionContainer, { backgroundColor: l.default.theme.colors[f], justifyContent: "flex-end" }] }), [d, u, f, h]);
                return o.createElement(i.Z, { style: c.container }, o.createElement(i.Z, { ref: C, style: c.background }, s && o.createElement(i.Z, { style: I.leftActionContainer }, o.createElement(i.Z, { ref: v, style: I.leftAction }, o.createElement(m, { style: c.icon }))), n && o.createElement(i.Z, { style: I.rightActionContainer }, o.createElement(i.Z, { ref: E, style: I.rightAction }, o.createElement(y, { style: c.icon })))), o.createElement(i.Z, { ref: g, style: c.swipeable }, e));
            }
            const c = l.default.create((e) => ({ container: { overflow: "hidden", position: "relative", width: "100%" }, background: { display: "flex", flexDirection: "row", height: "100%", position: "absolute", width: "100%" }, actionContainer: { alignItems: "center", display: "flex", flex: 1, flexDirection: "row" }, action: { color: e.colors.whiteOnColor, paddingHorizontal: e.spaces.space16, transition: "transform 0.2s ease-in-out" }, icon: { height: e.spaces.space24, width: e.spaces.space24 }, swipeable: { backgroundColor: e.colors.cellBackground } }));
        },
        366985: (e, t, n) => {
            n.d(t, { L: () => r, j: () => a });
            n(202784);
            var o = n(352924),
                i = n(782261);
            function r(e) {
                const t = i.Z.getOriginalTweet(e),
                    n = !!(t.favorite_count || t.reply_count || t.quote_count || t.retweet_count),
                    r = { actionsBar: (0, o.b)(), avatar: (0, o.b)(), conversationControlLabel: (0, o.b)(), conversationLevel: (0, o.b)(), editCallout: (0, o.b)(), exclusivityInfoLabel: (0, o.b)(), premiumInfoLabel: (0, o.b)(), longformNotesLabel: (0, o.b)(), media: (0, o.b)(), promotedLabel: (0, o.b)(), promotionStatusLabel: (0, o.b)(), replyContext: (0, o.b)(), richContent: (0, o.b)(), socialContext: (0, o.b)(), text: (0, o.b)(), timestamp: (0, o.b)(), tombstone: (0, o.b)(), trustedFriendsLabel: (0, o.b)(), userLabel: (0, o.b)(), username: (0, o.b)() };
                return [r, [r.promotedLabel, r.promotionStatusLabel, r.conversationLevel, r.socialContext, r.username, r.avatar, r.userLabel, r.timestamp, r.tombstone, r.replyContext, r.text, r.media, r.richContent, r.editCallout, r.exclusivityInfoLabel, r.premiumInfoLabel, r.trustedFriendsLabel, r.conversationControlLabel, r.longformNotesLabel, n ? r.actionsBar : void 0].filter(Boolean)];
            }
            function a({ children: e, tweet: t }) {
                return e(r(t));
            }
        },
        137181: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(648539),
                l = n(40644);
            const s = r().d9fd5570,
                c = ({ link: e, onPress: t }) => o.createElement(l.ZP, { Icon: a.default, activeColor: "primary", "aria-label": s, link: e, onPress: t });
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(807896),
                i = (n(571372), n(202784)),
                r = n(900664),
                a = n(111677),
                l = n.n(a),
                s = n(432181),
                c = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                b = n(522171),
                p = n(40644),
                f = n(439481);
            const h = l().d636ebc6,
                y = l().eb3a8b0c,
                w = l().j472ecfc,
                C = l().a0af935c,
                v = l().dac92b0d,
                g = l().aa650427;
            function E(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function x({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: a, enableActionMenu: l = !1, enableKeyboardShortcuts: m, iconSize: x, isDisabled: _, isFaded: k, isLiked: I, isPresentational: T, likeActionIconContainerRef: A, likeTransitionAnimation: Z, link: S, onAnimationStart: L, onError: P = E, onLikeActionSelect: R, onMenuCancel: M, onPress: D, style: F, testIDs: N, withCount: B }) {
                const U = B && "number" == typeof a;
                let O = I ? C : h;
                const V = i.useMemo(() => ({ label: I ? y : h }), [I]);
                U && (O = I ? g({ count: a }) : v({ count: a }));
                const W = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = i.useState(!1),
                        r = i.useRef(e);
                    return (
                        i.useEffect(() => {
                            ("object" == typeof t || f.ZP.check(t)) && e !== r.current && (o(e), (r.current = e));
                        }, [e, t]),
                        { onAnimationEnd: i.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: I, likeTransitionAnimation: Z });
                const z = i.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: w,
                                onClick() {
                                    t(), R?.();
                                },
                                testID: N?.like,
                                Icon: s.default,
                            },
                        ];
                        return i.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), M?.();
                            },
                        });
                    },
                    [e, R, M, N?.like],
                );
                return i.createElement(
                    p.ZP,
                    (0, o.Z)({}, W, {
                        ActiveIcon: c.default,
                        Icon: s.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": O,
                        color: n,
                        count: a,
                        enableKeyboardShortcuts: m,
                        hoverLabel: V,
                        iconSize: x,
                        isActive: I,
                        isDisabled: _,
                        isFaded: k,
                        isPresentational: T,
                        keyboardShortcut: b.Z.shortcuts.like,
                        link: S,
                        onAnimationStart: L,
                        onError: P,
                        onPress: function () {
                            d.ZP.isFirefox() || r.Z.vibrate(5), D?.();
                        },
                        renderMenu: l ? z : void 0,
                        style: F,
                        testID: N && (I ? N.unlike : N.like),
                        withCount: U,
                    }),
                );
            }
        },
        982266: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                i = n(811176),
                r = n(247056);
            function a({ Icon: e, isDisabled: t, items: n, onOpen: a }) {
                const l = o.useCallback((e) => o.createElement(i.Z, { items: n, onCloseRequested: e }), [n]);
                return n.length ? o.createElement(r.Z, { Icon: e, isDisabled: t, onClick: a, renderActionMenu: l }) : null;
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => x, Z: () => _ });
            var o = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(720600),
                l = n(155353),
                s = n(522171),
                c = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const b = r().f2919fb8,
                p = r().fd1e5446,
                f = r().bb5c5864,
                h = r().f65198c2;
            function y(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: i, onMenuCancel: r, onQuoteTweetActionSelect: a, onRetweetActionSelect: s, onUnretweetActionSelect: c, onViewEngagementsActionSelect: m, retweetActionSubText: y, retweetWithCommentLink: w, testIDs: C, viewQuotesRetweetsLink: v }) {
                        const g = C?.retweetConfirm,
                            E = C?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                i ||
                                    e ||
                                    o.push({
                                        text: b,
                                        subText: y,
                                        onClick() {
                                            r?.(), s?.();
                                        },
                                        testID: g,
                                        Icon: l.default,
                                    }),
                                i &&
                                    o.push({
                                        text: p,
                                        onClick() {
                                            r?.(), c?.();
                                        },
                                        testID: E,
                                        Icon: l.default,
                                    }),
                                t ||
                                    o.push({
                                        text: f,
                                        onClick() {
                                            r?.(), a?.();
                                        },
                                        Icon: d.default,
                                        link: w,
                                    }),
                                n ||
                                    o.push({
                                        text: h,
                                        onClick() {
                                            r?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: v,
                                    }),
                                o
                            );
                        }, [e, t, n, i, r, a, s, c, m, y, w, g, E, v]);
                    })(e),
                    { onMenuCancel: n } = e,
                    i = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: i });
            }
            const w = r().f2919fb8,
                C = r().fd1e5446,
                v = r().b8c465e2,
                g = r().dfad425d,
                E = r().a386dc55,
                x = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function _({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: i, enableActionMenu: r = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: b, iconSize: p, isDisabled: f, isFaded: h, isPresentational: x, isRetweeted: _, onMenuCancel: k, onPress: I, onQuoteTweetActionSelect: T, onRetweetActionSelect: A, onUnretweetActionSelect: Z, onViewEngagementsActionSelect: S, retweetActionSubText: L, retweetWithCommentLink: P, style: R, testIDs: M, viewQuotesRetweetsLink: D, withCount: F }) {
                const N = F && "number" == typeof i;
                let B = _ ? v : w;
                N && (B = _ ? E({ count: i }) : g({ count: i }));
                const U = o.useMemo(() => ({ label: _ ? C : w }), [_]),
                    O = o.useMemo(() => ({ retweetConfirm: M?.retweetConfirm, unretweetConfirm: M?.unretweetConfirm }), [M?.retweetConfirm, M?.unretweetConfirm]),
                    V = o.useCallback(
                        (t) =>
                            o.createElement(y, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: b,
                                isRetweeted: _,
                                onMenuCancel: () => {
                                    t(), k?.();
                                },
                                onQuoteTweetActionSelect: T,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: Z,
                                onViewEngagementsActionSelect: S,
                                retweetActionSubText: L,
                                retweetWithCommentLink: P,
                                testIDs: O,
                                viewQuotesRetweetsLink: D,
                            }),
                        [e, u, m, b, _, k, T, A, Z, S, L, O, P, D],
                    );
                return o.createElement(c.ZP, { ActiveIcon: a.default, Icon: l.default, activeColor: t, "aria-label": B, color: n, count: i, enableKeyboardShortcuts: d, hoverLabel: U, iconSize: p, isActive: _, isDisabled: f, isFaded: h, isPresentational: x, keyboardShortcut: s.Z.shortcuts.retweet, onPress: I, renderMenu: r ? V : void 0, style: R, testID: _ ? M?.unretweet : M?.retweet, withCount: N });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => se });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(976145),
                s = n(235902),
                c = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: r = "inline", id: a, style: l }) {
                const c = s.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(i.Z, { "aria-label": e, "aria-labelledby": t, id: a, role: "group", style: [u.container, u[`${r}Container`], c && u.noMaxWidth, l] }, n);
            }
            const u = c.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                b = n(53674),
                p = n(40644);
            const f = { label: a().f2849136 },
                h = a().f206e970,
                y = { label: a().b05a39b2 },
                w = a().c7073f5b;
            n(571372);
            var C = n(900664),
                v = n(73416),
                g = n(883069),
                E = n(323265),
                x = n(233184),
                _ = n(522171);
            const k = a().dbc0c2f4,
                I = a().hf417cf0,
                T = a().c7a989ce,
                A = a().febd30ed,
                Z = a().a8dc9587;
            function S(e = new Error("TweetActionBookmark.onError")) {
                x.Z.report(e);
            }
            var L = n(721083),
                P = n(194661);
            const R = a().hdf7226a,
                M = { label: R },
                D = a().c9940955;
            function F({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: r, isDisabled: a, isFaded: l, isPresentational: s, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: f }) {
                const h = f && "number" == typeof n,
                    y = h ? D({ count: n }) : R;
                return o.createElement(p.ZP, { Icon: P.default, activeColor: e, "aria-label": y, color: t, count: n, enableKeyboardShortcuts: i, hoverLabel: M, iconSize: r, isDisabled: a, isFaded: l, isPresentational: s, keyboardShortcut: _.Z.shortcuts.reply, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: h });
            }
            const N = o.memo(F);
            var B = n(15342),
                U = n(744610),
                O = n(137937),
                V = n(461756),
                W = n(811176),
                z = n(638236);
            const q = { label: a().dc63da16 },
                H = a().cee0585c,
                K = O.Z.bezier(0.45, 0, 0, 1);
            const j = function ({ activeColor: e, color: t, count: n, iconSize: i, isDisabled: r, isFaded: a, isPresentational: l, onPress: s, style: c, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(p.ZP, { Icon: b.default, activeColor: e, "aria-label": m ? w({ count: n }) : h, color: t, count: n, hoverLabel: m ? y : f, iconSize: i, isDisabled: r, isFaded: a, isPresentational: l, link: !d || r || a ? void 0 : `${d}/analytics`, onPress: s, style: c, withCount: m });
                },
                Q = L.Z,
                $ = N,
                G = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: i, enableKeyboardShortcuts: r, iconSize: a, isDisabled: l, isFaded: s, isPresentational: c, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: b, withCount: f }) {
                    const h = o.useRef({ wiggle: new U.Z.Value(0), scale: new U.Z.Value(1) }).current,
                        y = o.useCallback(
                            (n) =>
                                o.createElement(W.Z, {
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
                        m && !V.Z.reducedMotionEnabled && U.Z.parallel([U.Z.timing(h.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), U.Z.sequence([U.Z.timing(h.scale, C({ toValue: 1.45 })), U.Z.timing(h.scale, C({ toValue: 1 }))])]).start();
                    }, [h.scale, m, h.wiggle]);
                    const w = h.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function C(e) {
                        return { ...e, useNativeDriver: !1, easing: K, duration: 250 };
                    }
                    const v = o.useRef([{}, { transform: [{ rotate: w }, { scale: h.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(U.Z.View, { style: v.current }, o.createElement(p.ZP, { Icon: z.Z, activeColor: n, "aria-label": H, color: i, enableKeyboardShortcuts: r, hoverLabel: q, iconSize: a, isDisabled: l, isFaded: s, isPresentational: c, keyboardShortcut: _.Z.shortcuts.share, onPress: u, renderMenu: s ? void 0 : y, style: b, withCount: f }));
                },
                X = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: r, isDisabled: a, isFaded: l, isBookmarked: s, isPresentational: c, onError: d = S, onPress: u, style: m, testIDs: b, withCount: f }) {
                    const h = f && "number" == typeof n;
                    let y = s ? T : k;
                    const w = o.useMemo(() => ({ label: s ? I : k }), [s]);
                    return (
                        h && (y = s ? Z({ count: n }) : A({ count: n })),
                        o.createElement(p.ZP, {
                            ActiveIcon: v.default,
                            Icon: g.default,
                            activeColor: e,
                            "aria-label": y,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: i,
                            hoverLabel: w,
                            iconSize: r,
                            isActive: s,
                            isDisabled: a,
                            isFaded: l,
                            isPresentational: c,
                            keyboardShortcut: _.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                E.ZP.isFirefox() || C.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: b && (s ? b.removeBookmark : b.bookmark),
                            withCount: h,
                        })
                    );
                };
            const J = a().a0af935c,
                Y = a().b8c465e2,
                ee = a().c7a989ce,
                te = (e) => o.createElement(se.ActionAnalytics, e),
                ne = (e) => o.createElement(se.ActionLike, e),
                oe = (e) => o.createElement(se.ActionReply, e),
                ie = (e) => o.createElement(se.ActionRetweet, e),
                re = (e) => o.createElement(se.ActionShare, e),
                ae = (e) => o.createElement(se.ActionBookmark, e),
                le = [];
            function se({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: r = "gray700", displayStyle: c, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: b = !1, isFocalTweet: p = !1, isFromProtectedAccount: f, isLiked: h, isRetweeted: y, isPresentational: w, likeCount: C, id: v, renderAnalyticsAction: g = te, renderLikeAction: E = ne, renderReplyAction: x = oe, renderRetweetAction: _ = ie, renderShareAction: k = re, renderBookmarkAction: I = ae, replyCount: T, retweetCount: A, style: Z, tweetLink: S, viewCount: L, viewState: P, withAnalytics: R = !1, withCount: M = !1, withBookmark: D = !1 }) {
                const F = o.useRef(null),
                    N = s.ZP.useProps(),
                    B = N.tweetViewCountsEnabled(),
                    U = N.testViewCountShow(),
                    O = B || U,
                    V = R && O,
                    W = R && !V,
                    z = O ? "EnabledWithCount" === P && M : M,
                    q = o.useMemo(() => {
                        if (!M) return;
                        const e = a().b03835c7,
                            t = a().g4a195e7,
                            o = a().e089b42d,
                            i = a().e0a8fe39,
                            r = a().c58b2ab7;
                        return (0, l.Z)([T ? e({ replyCount: T }) : null, A ? t({ retweetCount: A }) : null, y ? Y : null, C ? o({ likeCount: C }) : null, h ? J : null, b && D ? ee : null, n ? i({ bookmarkCount: n }) : null, L ? r({ viewCount: L }) : null].filter(Boolean), !0);
                    }, [n, b, h, y, C, T, A, L, M, D]),
                    H = o.useMemo(() => ({ color: r, iconSize: e, isDisabled: m }), [r, e, m]),
                    K = o.useMemo(() => x({ ...H, activeColor: t, count: T, enableKeyboardShortcuts: u, isPresentational: w, withCount: M }), [H, t, T, u, w, M, x]),
                    j = o.useMemo(() => _({ ...H, activeColor: t, count: A, enableKeyboardShortcuts: u, isFromProtectedAccount: f, isRetweeted: y, isPresentational: w, withCount: M }), [H, t, A, u, f, y, w, M, _]),
                    Q = o.useMemo(() => E({ ...H, activeColor: t, count: C, enableKeyboardShortcuts: u, isLiked: h, isPresentational: w, withCount: M }), [H, t, C, u, h, w, M, E]),
                    $ = o.useMemo(() => (V ? g({ ...H, count: L, isPresentational: w, tweetLink: S, withCount: z }) : null), [V, H, L, w, S, z, g]),
                    G = o.useMemo(() => (D ? I({ ...H, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: w, isBookmarked: b, withCount: M }) : null), [D, H, t, n, u, w, b, M, I]),
                    X = o.useMemo(() => (W ? g({ ...H, isPresentational: w, tweetLink: S }) : null), [W, H, w, S, g]),
                    se = o.useMemo(() => k({ ...H, actionItems: le, activeColor: t, enableKeyboardShortcuts: u, isPresentational: w, withCount: M && W }), [H, t, u, w, W, M, k]);
                return o.createElement(i.Z, { ref: F }, o.createElement(d, { "aria-label": q, displayStyle: c, id: v, style: Z }, K, j, Q, $, G, X, se));
            }
            (se.ActionAnalytics = j),
                (se.ActionLike = Q),
                (se.ActionReply = $),
                (se.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(B.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (se.ActionShare = G),
                (se.ActionBookmark = X);
        },
        737082: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                i = n(495232),
                r = n(235902),
                a = n(392237),
                l = n(495580),
                s = n(830911),
                c = n(782261);
            const d = a.default.create((e) => ({ compact: { alignSelf: "flex-start" }, inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 }, detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 } })),
                u = ({ displayStyle: e = "inline", ...t }) => {
                    const n = { displayStyle: e, ...t },
                        a = (({ displayStyle: e, exclusivityInfoLabelNativeID: t, hideExclusivityInfoEducationTextInReplies: n, loggedInUser: o, tweet: i }) => {
                            const r = c.Z.getOriginalTweet(i),
                                a = !!r.in_reply_to_status_id_str,
                                { exclusivity_info: l, permalink: s, user: d } = r;
                            if (!l || ("inline" === e && a && n)) return;
                            const u = l.screen_name,
                                m = u === o?.screen_name,
                                b = d.screen_name === o?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : "compact", id: t, screenName: u, scribeElement: "exclusivity_info_context", tweetPermalink: s, type: m ? "exclusiveToSuperFollowersCreator" : b ? "exclusiveToSuperFollowersReplyOwn" : "exclusiveToSuperFollowersReplyOthers" };
                        })(n),
                        u = (({ displayStyle: e, hideTrustedFriendsEducationTextInReplies: t, loggedInUser: n, trustedFriendsLabelNativeID: o, tweet: i }) => {
                            const a = r.ZP.useProps(),
                                l = a.trustedFriendsEnabled(),
                                s = a.trustedFriendsCreationEnabled(),
                                d = c.Z.getOriginalTweet(i),
                                u = !!d.in_reply_to_status_id_str,
                                { permalink: m, trusted_friends_info: b, user: p } = d;
                            if (!l || !b || ("inline" === e && u && t)) return;
                            const f = b.screen_name,
                                h = f === n?.screen_name,
                                y = p.screen_name === n?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : u ? "compact" : "inline", id: o, screenName: f, scribeElement: "exclusivity_info_context", tweetPermalink: m, type: h && s ? "trustedFriendsCreator" : y ? "trustedFriendsReplyOwn" : "trustedFriendsReplyOthers" };
                        })(n),
                        m = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const a = !!o,
                                l = c.Z.getOriginalTweet(r),
                                { conversation_control: s, limited_actions: d, permalink: u } = l,
                                m = c.Z.getDisabledActions(l),
                                b = m?.includes("Reply") || d,
                                p = a && !b;
                            if (!s || ("inline" === t && (!p || n))) return;
                            const f = s.conversation_owner.screen_name,
                                h = s.policy,
                                y = i.Z.getEducationType(h, p);
                            return y ? { displayMode: "detail" === t ? "detail" : "compact", id: e, tweetPermalink: u, screenName: f, scribeElement: "conversation_control_context", type: y } : void 0;
                        })(n),
                        b = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const l = r.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(a),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_hidden" === u,
                                b = i.Z.getEducationType("community_hidden_tweet");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "hidden_community_tweet_education", type: b };
                        })(n),
                        p = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const l = r.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(a),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_member_removed" === u,
                                b = i.Z.getEducationType("community_tweet_member_removed");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "removed_member_community_tweet_education", type: b };
                        })(n),
                        f = (({ premiumInfoLabelNativeID: e, tweet: t }) => {
                            const n = c.Z.getOriginalTweet(t),
                                o = n.premium_info,
                                i = !!n.in_reply_to_status_id_str;
                            if (o && !i) return { type: "premiumExclusive", displayMode: "compact", id: e, screenName: o.screen_name, scribeElement: "premium_info_context" };
                        })(n),
                        h = a || u || m || b || p || f;
                    if (!h) return null;
                    const { handleAnchorAction: y, handleAnchorOpen: w, handleAnchorSecondaryAction: C } = n,
                        { anchorless: v, displayMode: g, id: E, screenName: x, scribeElement: _, tweetPermalink: k, type: I } = h,
                        T = d[g];
                    return "inline" !== e || v ? o.createElement(s.Z, { displayMode: g, id: E, screenName: x, style: T, type: I }) : o.createElement(l.Z, { onAction: y, onOpen: w ? () => w(_) : void 0, onSecondaryAction: C, screenName: x, style: T, tweetPermalink: k, type: I }, o.createElement(s.Z, { displayMode: g, id: E, screenName: x, type: I }));
                };
        },
        495580: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(731708),
                f = n(807896),
                h = n(946847),
                y = n(30899),
                w = n(392237);
            const C = a().b09adb0c,
                v = a().c2637ef6,
                g = (e) => {
                    const { Icon: t, actionLabel: n, actionLink: r, children: a, headline: l, onAction: s, onDismiss: c, onOpen: d, onSecondaryAction: u, style: m, subtext: b, thumbnailColor: p, tweetPermalink: w } = e;
                    return o.createElement(
                        i.Z,
                        {
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            style: m,
                        },
                        o.createElement(
                            y.Z,
                            {
                                onDismiss: c,
                                renderContent: (e, a) => {
                                    const c = () => {
                                            u && u(), e();
                                        },
                                        d =
                                            w || (n && r)
                                                ? {
                                                      actionLabel: n ?? C,
                                                      actionLink: r ?? w,
                                                      onAction: () => {
                                                          s && s(), e();
                                                      },
                                                      secondaryActionLabel: v,
                                                      onSecondaryAction: c,
                                                  }
                                                : { actionLabel: v, onAction: c };
                                    return o.createElement(i.Z, { style: "popover" === a ? E.interstitialPopover : void 0 }, o.createElement(h.Z, (0, f.Z)({}, d, { contentStyle: E.content, graphic: t, graphicDisplayMode: "thumbnail", graphicThumbnailColor: p, headline: l, subtext: b, withBottomPadding: !1, withCloseButton: !1 })));
                                },
                                withFixedPosition: !0,
                            },
                            o.createElement(i.Z, { onClick: d, role: "button", style: E.cursor }, a),
                        ),
                    );
                },
                E = w.default.create((e) => ({ interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 }, cursor: { cursor: "pointer" }, content: { marginVertical: 0, marginBottom: e.spaces.space28 } })),
                x = {
                    conversationControlsFollowersCanEngage: { Icon: l.default, headline: a().bb7b821a, subtext: a().fc41217b },
                    conversationControlsFollowersCannotEngage: { Icon: l.default, headline: a().ab105904, subtext: a().fc41217b },
                    conversationControlsCommunityCanEngage: { Icon: s.default, headline: a().bb7b821a, subtext: a().f064f477 },
                    conversationControlsCommunityCannotEngage: { Icon: s.default, headline: a().ab105904, subtext: a().f064f477 },
                    conversationControlsByInvitationCanEngage: { Icon: c.default, headline: a().bb7b821a, subtext: a().ea9ac5c9 },
                    conversationControlsByInvitationCannotEngage: { Icon: c.default, headline: a().ab105904, subtext: a().ea9ac5c9 },
                    conversationControlsSubscribersCanEngage: { Icon: c.default, headline: a().bb7b821a, subtext: a().d2ae1499 },
                    conversationControlsSubscribersCannotEngage: { Icon: c.default, headline: a().ab105904, subtext: a().d2ae1499 },
                    conversationControlsVerifiedCanEngage: { Icon: d.default, headline: a().bb7b821a, subtext: a().a4e254ff },
                    conversationControlsVerifiedCannotEngage: { Icon: d.default, headline: a().ab105904, subtext: a().a4e254ff },
                    communityHiddenTweetEducation: { Icon: u.default, headline: a().daba4484, subtext: a().f956070a },
                    communityRemovedMemberEducation: { Icon: u.default, headline: a().daba4484, subtext: a().ceb6841c },
                    exclusiveToSuperFollowersCreator: { Icon: m.default, thumbnailColor: "exclusive", headline: a().j620ce06, subtext: a().bd414b44 },
                    exclusiveToSuperFollowersReplyOwn: { Icon: m.default, thumbnailColor: "exclusive", headline: a().j620ce06, subtext: a().dd0da5d9 },
                    exclusiveToSuperFollowersReplyOthers: { Icon: m.default, thumbnailColor: "exclusive", headline: a().g1c6a77e, subtext: a().d3b143d7 },
                    trustedFriendsCreator: { Icon: b.default, actionLabel: a().cb731cae, actionLink: "/i/circles", thumbnailColor: "success", headline: a().c33d3a84, subtext: () => o.createElement(a().I18NFormatMessage, { $i18n: "b6a393af" }, o.createElement(p.ZP, { color: "text", link: "https://help.x.com/using-twitter/twitter-circle", weight: "bold", withUnderline: !0 }, a().c4f10e71)) },
                },
                _ = (e) => {
                    const { children: t, onAction: n, onDismiss: r, onOpen: a, onSecondaryAction: l, screenName: s, style: c, tweetPermalink: d, type: u } = e;
                    if (!x[u]) return o.createElement(i.Z, { style: c }, t);
                    const { Icon: m, actionLabel: b, actionLink: p, headline: f, subtext: h, thumbnailColor: y } = x[u],
                        w = ((e, t) => ("string" != typeof e ? e({ screenName: t }) : e))(h, s);
                    return o.createElement(g, { Icon: m, actionLabel: b, actionLink: p, headline: f, onAction: n, onDismiss: r, onOpen: a, onSecondaryAction: l, style: c, subtext: w, thumbnailColor: y, tweetPermalink: d }, t);
                };
        },
        830911: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(883437),
                f = n(235902),
                h = n(834324),
                y = n(868634),
                w = n(392237);
            const C = (e, t) => ("string" != typeof e ? e({ screenName: t }) : e),
                v = ["exclusiveToSuperFollowersCreator", "exclusiveToSuperFollowersReplyOwn", "exclusiveToSuperFollowersReplyOthers"],
                g = (e) => {
                    const t = f.ZP.useProps().redesignedLabelForSubscribedTweets(),
                        n = (({ redesignedLabelForSubscribedTweets: e }) => ({
                            conversationControlsFollowersCanEngage: { Icon: l.default, calloutType: "primary", headline: a().bb7b821a, detail: a().fc41217b, inline: a().e5dc76d0 },
                            conversationControlsFollowersCannotEngage: { Icon: l.default, calloutType: "primary", headline: a().ab105904, detail: a().fc41217b, inline: a().fd1cda7a },
                            conversationControlsCommunityCanEngage: { Icon: s.default, calloutType: "primary", headline: a().bb7b821a, detail: a().f064f477, inline: a().e5dc76d0 },
                            conversationControlsCommunityCannotEngage: { Icon: s.default, calloutType: "primary", headline: a().ab105904, detail: a().f064f477, inline: a().fd1cda7a },
                            conversationControlsByInvitationCanEngage: { Icon: c.default, calloutType: "primary", headline: a().bb7b821a, detail: a().ea9ac5c9, inline: a().e5dc76d0 },
                            conversationControlsByInvitationCannotEngage: { Icon: c.default, calloutType: "primary", headline: a().ab105904, detail: a().ea9ac5c9, inline: a().fd1cda7a },
                            conversationControlsSubscribersCanEngage: { Icon: c.default, calloutType: "primary", headline: a().bb7b821a, detail: a().d2ae1499, inline: a().e5dc76d0 },
                            conversationControlsSubscribersCannotEngage: { Icon: c.default, calloutType: "primary", headline: a().ab105904, detail: a().d2ae1499, inline: a().fd1cda7a },
                            conversationControlsVerifiedCanEngage: { Icon: d.default, calloutType: "primary", headline: a().bb7b821a, detail: a().a4e254ff, inline: a().e5dc76d0 },
                            conversationControlsVerifiedCannotEngage: { Icon: d.default, calloutType: "primary", headline: a().ab105904, detail: a().a4e254ff, detailAction: { label: a().j1b02fd8, link: { pathname: "/i/premium_sign_up", state: { referring_page: "verified_only_replies" } } }, inline: a().fd1cda7a },
                            communityHiddenTweetEducation: { Icon: u.default, calloutType: "primary", headline: a().daba4484, detail: a().f956070a, inline: a().daba4484 },
                            communityRemovedMemberEducation: { Icon: u.default, calloutType: "primary", headline: a().daba4484, detail: a().cc17f408, inline: a().daba4484 },
                            exclusiveToSuperFollowersCreator: { Icon: m.default, calloutType: "exclusive", headline: a().j620ce06, detail: a().bd414b44, inline: a().bd414b44 },
                            exclusiveToSuperFollowersReplyOwn: { Icon: m.default, calloutType: "exclusive", headline: a().j620ce06, detail: a().dd0da5d9, inline: a().dd0da5d9 },
                            exclusiveToSuperFollowersReplyOthers: { Icon: m.default, calloutType: "exclusive", headline: a().g1c6a77e, detail: a().d3b143d7, inline: a().f6337117 },
                            trustedFriendsCreator: { Icon: b.default, calloutType: "success", detail: a().g766a06d, inline: a().g766a06d },
                            trustedFriendsReplyOwn: { Icon: b.default, calloutType: "success", detail: a().g766a06d, inline: a().g766a06d },
                            trustedFriendsReplyOthers: { Icon: b.default, calloutType: "success", detail: a().g766a06d, detailAction: { label: a().d7e50a66, link: "https://help.x.com/using-twitter/twitter-circle" }, inline: a().g766a06d },
                            linksDisabledInReplies: { Icon: p.default, calloutType: "primary", headline: a().j040a368, detail: a().b31d0af7, inline: a().eab0f780 },
                            premiumExclusive: { Icon: d.default, calloutType: "primary", headline: a().f17a1f54, detail: a().f17a1f54, inline: a().f17a1f54 },
                        }))({ redesignedLabelForSubscribedTweets: t }),
                        { displayMode: r, id: w, screenName: g, style: x, type: _ } = e,
                        { Icon: k, calloutType: I, detail: T, detailAction: A, headline: Z, inline: S } = n[_],
                        L = "compact" === r,
                        P = "detail" === r,
                        R = P ? A : void 0,
                        M = P ? Z : void 0,
                        D = C(P ? T : S, g),
                        F = "exclusiveToSuperFollowersCreator" === _ ? a().bd414b44 : a().a0953370,
                        N = v.includes(_) && t && o.createElement(y.ZP, { background: "gray0", style: L ? E.marginTop : null }, F),
                        B = "premiumExclusive" === _ ? o.createElement(y.ZP, { background: "gray0", style: L ? E.marginTop : null }, Z) : null;
                    return o.createElement(i.Z, { style: x }, B || N || (L ? null : o.createElement(h.Z, { Icon: k, action: R, headline: M, id: w, text: D, type: I, withThumbnail: !0 })));
                },
                E = w.default.create((e) => ({ marginTop: { marginTop: e.spaces.space8 } }));
        },
        418462: (e, t, n) => {
            n.d(t, { a: () => D, q: () => P });
            var o = n(807896),
                i = (n(543673), n(240753), n(128399), n(202784)),
                r = n(731708),
                a = n(154003),
                l = n(276563),
                s = n(235902),
                c = n(649846),
                d = n(638009),
                u = n(32471),
                m = n(966582),
                b = n(966886),
                p = n(308158),
                f = n(126962),
                h = n(54989),
                y = n(366985),
                w = n(982266),
                C = n(990804),
                v = n(530338),
                g = n(16037),
                E = n(737082),
                x = n(103737),
                _ = n(189655),
                k = n(650028),
                I = n(774526),
                T = n(451051),
                A = n(5273),
                Z = n(528647),
                S = n(782261),
                L = n(782299);
            const P = Object.freeze({ ActionsBar: C.Z, ActionMenu: w.Z, CallToAction: a.ZP, EditCallout: g.Z, Education: E.Z, HighlightedUserLabel: c.Z, Media: x.Z, Place: r.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: _.Z, ReplyContext: k.ZP, RichContent: I.Z, SocialContext: f.Z, Text: T.Z, Tombstone: h.Z, Timestamp: b.Z, UserAvatar: A.Z, UserFollowIndicator: L.Z, UserName: Z.Z, ArticleCard: v.Z }),
                R = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function M(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(d.zt, t.current, e);
                }, []);
            }
            function D({ renderActionsBar: e = B, renderActionMenu: t = N, renderArticleCard: n = F, renderCallToAction: o = U, renderEditCallout: r = V, renderEducation: a = O, renderHighlightedUserLabel: c = W, renderPlace: d = z, renderPromotedUserProfileCard: u = H, renderPromotedDetails: b = q, renderPromotionStatusBadge: f = K, renderReplyContext: h = j, renderRichContent: w = Q, renderMedia: C = $, renderTweetHeader: v = G, renderStats: g = X, renderText: E = Y, renderTimestamp: x = J, renderTombstone: _ = ee, renderUserAvatar: k = te, renderUserFollowIndicator: I = ne, renderUserName: T = oe, promotedContent: A, quotedTweetTombstoneInfo: Z, socialContext: L, tweetContext: P, staticLinkConfig: D = R, tweet: ie, ...re }) {
                const ae = S.Z.getOriginalTweet(ie),
                    [le, se] = (0, y.L)(ae),
                    ce = s.ZP.useProps(),
                    de = ce.c9sHashtagsEnabled(),
                    ue = ce.renderArticleCardInTweet(),
                    me = "true" === A?.experiment_values?.pac_in_timeline && l.default.isFollowerCard(A?.adMetadataContainer?.dynamicCardContent?.card_type),
                    be = {
                        renderArticleCard: (e) => (S.Z.isArticlePost(ae) && ae.article && ue ? n({ articleEntity: ae.article, hasSensitiveContent: ae.possibly_sensitive, mediaVisibilityResults: ae.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: ae.bookmark_count, enableKeyboardShortcuts: !1, isLiked: ae.favorited, isRetweeted: ae.retweeted, likeCount: ae.favorite_count, id: le.actionsBar, replyCount: ae.reply_count, retweetCount: (ae.quote_count ?? 0) + (ae.retweet_count ?? 0), tweetLink: ae.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => o({ ...e }),
                        renderEditCallout: (e) => (ae.isEdited ? r({ editType: ae.isStaleEdit ? "stale" : "latest", id: le.editCallout, ...e }) : null),
                        renderEducation: (e) => a({ conversationControlLabelNativeID: le.conversationControlLabel, exclusivityInfoLabelNativeID: le.exclusivityInfoLabel, trustedFriendsLabelNativeID: le.trustedFriendsLabel, tweet: ie, ...e }),
                        renderHighlightedUserLabel: (e) => (ae.user.highlightedLabel ? c({ label: ae.user.highlightedLabel, id: le.userLabel, ...e }) : null),
                        renderMedia: (e) => (S.Z.hasMedia(ae) ? C({ authorId: ae.user.id_str, authorScreenName: ae.user.screen_name, forwardPivotInfo: ie.softIntervention, hasSensitiveMedia: ae.possibly_sensitive, mediaTagsLink: `${ae.permalink}/media_tags`, mediaDetails: ae.extended_entities?.media, id: le.media, promotedContent: A, tweetCreatedAt: ae.created_at, tweetId: ae.id_str, tweetText: ae.text, mediaVisibilityResults: ae.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (ae.place ? d({ children: ae.place.full_name, link: `/places/${ae.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === A?.experiment_values?.pac_in_timeline ? u({ isUserProtected: ae.user.protected, isUserVerified: ae.user.verified, promotedContent: A, userDescription: ae.user.description, userId: ae.user.id_str, userName: ae.user.name, userScreenName: ae.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (A && m.Z.isPromoted(A) ? b({ contentAuthorId: ae.user.id_str, screenName: ae.user.screen_name, id: le.promotedLabel, promotedContent: A, ...e }) : null),
                        renderPromotionStatusBadge: (e) => f({ id: le.promotionStatusLabel }),
                        renderReplyContext: (e) => (ae.in_reply_to_status_id_str ? h({ displayTextRange: ae.display_text_range, inReplyToName: ae.in_reply_to_name, inReplyToScreenName: ae.in_reply_to_screen_name, inReplyToStatusIdStr: ae.in_reply_to_status_id_str, inReplyToUserIdStr: ae.in_reply_to_user_id_str, id: le.replyContext, tweetPermalink: ae.permalink, unmentionedUserIds: ae.unmentioned_user_ids, userMentionsEntities: ae.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => w({ forwardPivotInfo: ie.softIntervention, id: le.richContent, quotedTweetTombstoneInfo: Z, tweet: ie, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (L ? v({ contextType: L.contextType, link: L.link, id: le.socialContext, retweetData: { isSelfRetweet: L.isSelfRetweet, name: L.name, screenName: L.screenName }, text: L.text, ...e }) : v()),
                        renderStats: () => g(),
                        renderText: (e) => {
                            const t = ae?.community_id_str,
                                n = t && de ? (e, n) => new URL(`/i/communities/${t}/hashtag/${n}`, e) : void 0,
                                o = l.default.isCardDisabled(ae.card?.name),
                                i = !ae.card || ie.is_quote_status || o || me ? void 0 : ae.card.url;
                            return E({ transformHashtagLink: n, article: ue ? ae.article : void 0, displayTextRange: ae.display_text_range, entities: ae.entities, excludeCardUrl: i, lang: ae.lang, linkify: !0, id: le.text, quotedTweetId: ae.quoted_status?.id_str, quotedTweetPermalink: ae.quoted_status_permalink, text: ae.text, unmentionedUserIds: ae.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => x({ id: le.timestamp, link: { pathname: ae.permalink, state: { contextTweetId: ae.id_str, promotedContent: A } }, timestamp: ae.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = ae.tombstoneInfo || ie.tombstoneInfo;
                            return t?.richText ? _({ children: i.createElement(p.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: le.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => k({ id: le.avatar, promotedContent: A, screenName: ae.user.screen_name, uri: ae.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => T({ userData: { isProtected: ae.user.protected, isBlueVerified: ae.user.is_blue_verified, isVerified: ae.user.verified, name: ae.user.name, screenName: ae.user.screen_name, userId: ae.user.id_str, verifiedType: ae.user.verified_type, isSubscriber: ae.has_super_follower, affiliateBadgeInfo: ae.user.highlightedLabel, communityModeratorStatus: ae.author_community_relationship?.role }, id: le.username, promotedContent: A, tweetId: ae.id_str, ...e }),
                    };
                return { LinkConfigProvider: M(D), a11yIds: le, a11yIdList: se, props: { ...be, tweet: ie, promotedContent: A, socialContext: L, quotedTweetTombstoneInfo: Z, ...re } };
            }
            const F = (e) => i.createElement(P.ArticleCard, e),
                N = (e) => i.createElement(P.ActionMenu, e),
                B = (e) => i.createElement(P.ActionsBar, (0, o.Z)({}, e, { isDisabled: !0 })),
                U = (e) => null,
                O = (e) => i.createElement(P.Education, e),
                V = (e) => i.createElement(P.EditCallout, e),
                W = (e) => i.createElement(P.HighlightedUserLabel, e),
                z = (e) => i.createElement(P.Place, e),
                q = (e) => i.createElement(P.PromotedDetails, e),
                H = (e) => null,
                K = (e) => null,
                j = (e) => i.createElement(P.ReplyContext, e),
                Q = (e) => i.createElement(P.RichContent, e),
                $ = (e) => i.createElement(P.Media, e),
                G = (e) => (e ? i.createElement(P.SocialContext, e) : null),
                X = () => null,
                J = (e) => i.createElement(P.Timestamp, e),
                Y = (e) => i.createElement(P.Text, e),
                ee = (e) => i.createElement(P.Tombstone, e),
                te = (e) => i.createElement(P.UserAvatar, e),
                ne = (e) => i.createElement(P.UserFollowIndicator, e),
                oe = (e) => i.createElement(P.UserName, e);
        },
        449945: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(54989);
            const l = r().b05a39b2;
            const s = (e) => o.createElement(a.Z, e),
                c = o.forwardRef(({ children: e, label: t, lang: n, onReveal: i, render: r = s, revealLabel: a = l }, c) => {
                    const [d, u] = (function () {
                        const [e, t] = o.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), i?.(e);
                    }
                    return o.useImperativeHandle(c, () => ({ reveal: () => m("synthetic") })), d ? e : r({ actionText: a, children: t, lang: n, onActionClick: () => m("organic") });
                });
            c.displayName = "TweetInterstitial";
            const d = c;
        },
        655317: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                i = n(466999),
                r = n(325686),
                a = n(111677),
                l = n.n(a),
                s = n(165010),
                c = n(731708),
                d = n(470397),
                u = n(352924),
                m = n(392237);
            const b = l().a897c4d6;
            const p = m.default.create((e) => ({ middotGroup: { display: "inline" }, displayNone: { display: "none" } })),
                f = function (e) {
                    const { linkColor: t = "link", renderCoinCount: n, renderEditCallout: a, renderPlace: m, renderTimestamp: f, renderViewCount: h, style: y } = e,
                        w = a?.({ editType: "latest", textMode: "standalone" }),
                        C = (0, u.b)(),
                        v = w ? o.createElement(o.Fragment, null, w, o.createElement(i.Z, { id: C, style: p.displayNone }, b)) : null,
                        g = m?.(),
                        E = f?.({ "aria-describedby": C, prefix: v }),
                        x = g ? o.createElement(l().I18NFormatMessage, { $i18n: "ge9aefd5" }, E, g) : E;
                    return o.createElement(r.Z, { style: (0, s.dW)(y) }, o.createElement(d.Z, { style: p.middotGroup }, o.createElement(c.ZP, { color: t }, x), h?.(), n?.()));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b.393f0c9a.js.map
