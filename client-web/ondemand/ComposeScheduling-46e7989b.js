"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-46e7989b"],
    {
        564619: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(323265),
                s = n(731708),
                c = n(855488),
                u = n(466818),
                d = n(392237);
            const m = (() => {
                    const e = {};
                    return (t) => {
                        const n = void 0 === t ? "undefined" : t.toString();
                        if (!e.hasOwnProperty(n)) {
                            const o = { use24HourTime: !!t, hourFormat: t ? "2-digit" : "numeric", minuteFormat: "2-digit" };
                            if ("object" == typeof window.Intl) {
                                const e = new window.Intl.DateTimeFormat("default", { hour12: void 0 === t ? void 0 : !t, hour: "numeric", minute: "numeric" }).resolvedOptions();
                                (o.use24HourTime = !e.hour12), (o.hourFormat = e.hour || o.hourFormat), (o.minuteFormat = e.minute || o.minuteFormat);
                            }
                            e[n] = o;
                        }
                        return e[n];
                    };
                })(),
                b = (e, t = 2, n = "0") => {
                    const o = n.repeat(t),
                        i = "number" == typeof e ? `${e}` : "";
                    return i.length >= t ? i : `${o}${i}`.slice(-t);
                },
                p = r().eb124f96,
                h = r().i7a6f114,
                y = r().ccc99ff2,
                f = [...Array(24).keys()],
                C = [...Array(13).keys()].slice(1),
                w = [...Array(60).keys()];
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { hour: t, minute: n, onChange: o } = this.props;
                            (e.hour === t && e.minute === n) || o(e);
                        }),
                        (this._handleNativeChange = (e) => {
                            const { value: t } = e.target;
                            this._handleChange(v.parse(t));
                        }),
                        (this._handleHourChange = (e) => {
                            const { use24HourTime: t } = this._getLocale(),
                                { hour: n, minute: o } = this.props;
                            let i;
                            e && ((i = parseInt(e, 10)), t || "number" != typeof n || (n > 12 ? (i = (i + 12) % 24) : (i %= 12))), this._handleChange(new v(i, o));
                        }),
                        (this._handleMinuteChange = (e) => {
                            const { hour: t } = this.props,
                                n = e ? parseInt(e, 10) : void 0;
                            this._handleChange(new v(t, n));
                        }),
                        (this._handleAmPmChange = (e) => {
                            let { hour: t } = this.props;
                            const { minute: n } = this.props;
                            switch (e) {
                                case "am":
                                    "number" == typeof t && t >= 12 && (t -= 12);
                                    break;
                                case "pm":
                                    "number" == typeof t && t < 12 && (t += 12);
                            }
                            this._handleChange(new v(t, n));
                        });
                }
                render() {
                    const { "aria-label": e, disabled: t, errorText: n, helperText: a, invalid: r, label: c, style: u } = this.props,
                        d = !!r,
                        m = l.ZP.isMobileOS();
                    return o.createElement(i.Z, { style: [t && E.disabled, u] }, o.createElement(i.Z, { "aria-label": e || c, role: "group" }, o.createElement(s.ZP, { color: "gray700" }, c), m ? o.createElement(i.Z, { style: E.containerNative }, this._renderNativeInput()) : o.createElement(i.Z, { style: E.containerSelectors }, this._renderSelectors())), o.createElement(i.Z, { style: E.subtextWrapper }, a ? this._renderHelperText() : null, d && n ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return m(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: n, minute: o } = new v(e, t),
                        { hourFormat: i, minuteFormat: a, use24HourTime: r } = this._getLocale(),
                        l = "number" == typeof n ? (n < 12 ? "am" : "pm") : void 0,
                        s = r ? f : C,
                        c = w,
                        u = "2-digit" === i ? 2 : 1,
                        d = "2-digit" === a ? 2 : 1,
                        m = [];
                    return (
                        m.push({ label: h, options: s.map((e) => ({ label: b(e, u), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof n ? `${r ? n : n % 12 || 12}` : "", withEmptyOption: !0 }),
                        m.push({ label: y, options: c.map((e) => ({ label: b(e, d), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof o ? `${o}` : "", withEmptyOption: !0 }),
                        r ||
                            m.push({
                                label: p,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== l ? l : "",
                                withEmptyOption: void 0 === n || void 0 === o,
                            }),
                        m
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: n, label: i, minute: a } = this.props,
                        r = new v(n, a);
                    return o.createElement(c.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: i, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: E.native, type: "time", value: r.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: n } = this.props,
                        i = !!n,
                        a = this._getFields();
                    return o.createElement(
                        o.Fragment,
                        null,
                        a.map((n, a) => o.createElement(u.ZP, { autofocus: 0 === a ? e : void 0, disabled: t, hasError: i, key: n.label, label: n.label, onChange: n.onChange, options: n.options, value: n.value, withEmptyOption: n.withEmptyOption })),
                    );
                }
                _renderHelperText() {
                    const { helperText: e } = this.props;
                    return o.createElement(i.Z, { "aria-live": "polite" }, o.createElement(s.ZP, { color: "gray700", style: E.subtext }, e));
                }
                _renderErrorText() {
                    const { errorText: e } = this.props;
                    return o.createElement(i.Z, { "aria-live": "assertive" }, o.createElement(s.ZP, { color: "red500", style: E.subtext }, e));
                }
            }
            class v {
                constructor(e, t) {
                    const n = "number" == typeof e ? Math.max(Math.min(e, 23), 0) : void 0,
                        o = "number" == typeof t ? Math.max(Math.min(t, 59), 0) : void 0;
                    Object.defineProperty(this, "hour", { value: n, enumerable: !0 }), Object.defineProperty(this, "minute", { value: o, enumerable: !0 });
                }
                static parse(e) {
                    let t, n;
                    if (e && e.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                        const [o, i] = e.split(":");
                        (t = parseInt(o, 10)), (n = parseInt(i, 10));
                    }
                    return new v(t, n);
                }
                toString() {
                    const e = "number" == typeof this.hour,
                        t = "number" == typeof this.minute;
                    return e && t ? `${b(this.hour)}:${b(this.minute)}` : "";
                }
            }
            const E = d.default.create((e) => ({ containerNative: { paddingTop: e.spaces.space2 }, containerSelectors: { display: "grid", gridColumnGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr 1fr", paddingTop: e.spaces.space2 }, disabled: { cursor: "default", opacity: 0.5 }, native: { paddingVertical: 0, paddingHorizontal: 0 }, subtextWrapper: { flexDirection: "column", flex: 1 }, subtext: { paddingTop: e.spaces.space4 } }));
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
        721083: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(807896),
                i = (n(571372), n(202784)),
                a = n(900664),
                r = n(111677),
                l = n.n(r),
                s = n(432181),
                c = n(761744),
                u = n(323265),
                d = n(811176),
                m = n(233184),
                b = n(522171),
                p = n(40644),
                h = n(439481);
            const y = l().d636ebc6,
                f = l().eb3a8b0c,
                C = l().j472ecfc,
                w = l().a0af935c,
                g = l().dac92b0d,
                v = l().aa650427;
            function E(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function x({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: r, enableActionMenu: l = !1, enableKeyboardShortcuts: m, iconSize: x, isDisabled: k, isFaded: I, isLiked: S, isPresentational: _, likeActionIconContainerRef: A, likeTransitionAnimation: T, link: Z, onAnimationStart: P, onError: L = E, onLikeActionSelect: F, onMenuCancel: R, onPress: M, style: D, testIDs: O, withCount: N }) {
                const B = N && "number" == typeof r;
                let V = S ? w : y;
                const W = i.useMemo(() => ({ label: S ? f : y }), [S]);
                B && (V = S ? v({ count: r }) : g({ count: r }));
                const z = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = i.useState(!1),
                        a = i.useRef(e);
                    return (
                        i.useEffect(() => {
                            ("object" == typeof t || h.ZP.check(t)) && e !== a.current && (o(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: i.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: S, likeTransitionAnimation: T });
                const K = i.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: C,
                                onClick() {
                                    t(), F?.();
                                },
                                testID: O?.like,
                                Icon: s.default,
                            },
                        ];
                        return i.createElement(d.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), R?.();
                            },
                        });
                    },
                    [e, F, R, O?.like],
                );
                return i.createElement(
                    p.ZP,
                    (0, o.Z)({}, z, {
                        ActiveIcon: c.default,
                        Icon: s.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": V,
                        color: n,
                        count: r,
                        enableKeyboardShortcuts: m,
                        hoverLabel: W,
                        iconSize: x,
                        isActive: S,
                        isDisabled: k,
                        isFaded: I,
                        isPresentational: _,
                        keyboardShortcut: b.Z.shortcuts.like,
                        link: Z,
                        onAnimationStart: P,
                        onError: L,
                        onPress: function () {
                            u.ZP.isFirefox() || a.Z.vibrate(5), M?.();
                        },
                        renderMenu: l ? K : void 0,
                        style: D,
                        testID: O && (S ? O.unlike : O.like),
                        withCount: B,
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
            n.d(t, { d: () => x, Z: () => k });
            var o = n(202784),
                i = n(111677),
                a = n.n(i),
                r = n(720600),
                l = n(155353),
                s = n(522171),
                c = n(40644),
                u = (n(136728), n(885724)),
                d = n(53674),
                m = n(811176);
            const b = a().f2919fb8,
                p = a().fd1e5446,
                h = a().bb5c5864,
                y = a().f65198c2;
            function f(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: i, onMenuCancel: a, onQuoteTweetActionSelect: r, onRetweetActionSelect: s, onUnretweetActionSelect: c, onViewEngagementsActionSelect: m, retweetActionSubText: f, retweetWithCommentLink: C, testIDs: w, viewQuotesRetweetsLink: g }) {
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
                                            a?.(), s?.();
                                        },
                                        testID: v,
                                        Icon: l.default,
                                    }),
                                i &&
                                    o.push({
                                        text: p,
                                        onClick() {
                                            a?.(), c?.();
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
                                        Icon: u.default,
                                        link: C,
                                    }),
                                n ||
                                    o.push({
                                        text: y,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: d.default,
                                        link: g,
                                    }),
                                o
                            );
                        }, [e, t, n, i, a, r, s, c, m, f, C, v, E, g]);
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
                x = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function k({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: i, enableActionMenu: a = !1, enableKeyboardShortcuts: u, excludeRetweetAction: d, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: b, iconSize: p, isDisabled: h, isFaded: y, isPresentational: x, isRetweeted: k, onMenuCancel: I, onPress: S, onQuoteTweetActionSelect: _, onRetweetActionSelect: A, onUnretweetActionSelect: T, onViewEngagementsActionSelect: Z, retweetActionSubText: P, retweetWithCommentLink: L, style: F, testIDs: R, viewQuotesRetweetsLink: M, withCount: D }) {
                const O = D && "number" == typeof i;
                let N = k ? g : C;
                O && (N = k ? E({ count: i }) : v({ count: i }));
                const B = o.useMemo(() => ({ label: k ? w : C }), [k]),
                    V = o.useMemo(() => ({ retweetConfirm: R?.retweetConfirm, unretweetConfirm: R?.unretweetConfirm }), [R?.retweetConfirm, R?.unretweetConfirm]),
                    W = o.useCallback(
                        (t) =>
                            o.createElement(f, {
                                actionMenuDescription: e,
                                excludeRetweetAction: d,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: b,
                                isRetweeted: k,
                                onMenuCancel: () => {
                                    t(), I?.();
                                },
                                onQuoteTweetActionSelect: _,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: T,
                                onViewEngagementsActionSelect: Z,
                                retweetActionSubText: P,
                                retweetWithCommentLink: L,
                                testIDs: V,
                                viewQuotesRetweetsLink: M,
                            }),
                        [e, d, m, b, k, I, _, A, T, Z, P, V, L, M],
                    );
                return o.createElement(c.ZP, { ActiveIcon: r.default, Icon: l.default, activeColor: t, "aria-label": N, color: n, count: i, enableKeyboardShortcuts: u, hoverLabel: B, iconSize: p, isActive: k, isDisabled: h, isFaded: y, isPresentational: x, keyboardShortcut: s.Z.shortcuts.retweet, onPress: S, renderMenu: a ? W : void 0, style: F, testID: k ? R?.unretweet : R?.retweet, withCount: O });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => se });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(976145),
                s = n(235902),
                c = n(392237);
            function u({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: a = "inline", id: r, style: l }) {
                const c = s.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(i.Z, { "aria-label": e, "aria-labelledby": t, id: r, role: "group", style: [d.container, d[`${a}Container`], c && d.noMaxWidth, l] }, n);
            }
            const d = c.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
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
                x = n(233184),
                k = n(522171);
            const I = r().dbc0c2f4,
                S = r().hf417cf0,
                _ = r().c7a989ce,
                A = r().febd30ed,
                T = r().a8dc9587;
            function Z(e = new Error("TweetActionBookmark.onError")) {
                x.Z.report(e);
            }
            var P = n(721083),
                L = n(194661);
            const F = r().hdf7226a,
                R = { label: F },
                M = r().c9940955;
            function D({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isPresentational: s, link: c, onPress: u, renderWrapper: d, style: m, testID: b, withCount: h }) {
                const y = h && "number" == typeof n,
                    f = y ? M({ count: n }) : F;
                return o.createElement(p.ZP, { Icon: L.default, activeColor: e, "aria-label": f, color: t, count: n, enableKeyboardShortcuts: i, hoverLabel: R, iconSize: a, isDisabled: r, isFaded: l, isPresentational: s, keyboardShortcut: k.Z.shortcuts.reply, link: c, onPress: u, renderWrapper: d, style: m, testID: b, withCount: y });
            }
            const O = o.memo(D);
            var N = n(15342),
                B = n(744610),
                V = n(137937),
                W = n(461756),
                z = n(811176),
                K = n(638236);
            const j = { label: r().dc63da16 },
                H = r().cee0585c,
                $ = V.Z.bezier(0.45, 0, 0, 1);
            const U = function ({ activeColor: e, color: t, count: n, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, onPress: s, style: c, tweetLink: u, withCount: d }) {
                    const m = d && void 0 !== n;
                    return o.createElement(p.ZP, { Icon: b.default, activeColor: e, "aria-label": m ? C({ count: n }) : y, color: t, count: n, hoverLabel: m ? f : h, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, link: !u || a || r ? void 0 : `${u}/analytics`, onPress: s, style: c, withCount: m });
                },
                Q = P.Z,
                q = O,
                G = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: i, enableKeyboardShortcuts: a, iconSize: r, isDisabled: l, isFaded: s, isPresentational: c, onMenuCancel: u, onPress: d, shouldAnimatePrompt: m, style: b, withCount: h }) {
                    const y = o.useRef({ wiggle: new B.Z.Value(0), scale: new B.Z.Value(1) }).current,
                        f = o.useCallback(
                            (n) =>
                                o.createElement(z.Z, {
                                    description: t,
                                    items: e,
                                    onCloseRequested: function () {
                                        n(), u?.();
                                    },
                                    shouldCloseOnClick: !0,
                                }),
                            [e, t, u],
                        );
                    o.useEffect(() => {
                        m && !W.Z.reducedMotionEnabled && B.Z.parallel([B.Z.timing(y.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), B.Z.sequence([B.Z.timing(y.scale, w({ toValue: 1.45 })), B.Z.timing(y.scale, w({ toValue: 1 }))])]).start();
                    }, [y.scale, m, y.wiggle]);
                    const C = y.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function w(e) {
                        return { ...e, useNativeDriver: !1, easing: $, duration: 250 };
                    }
                    const g = o.useRef([{}, { transform: [{ rotate: C }, { scale: y.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(B.Z.View, { style: g.current }, o.createElement(p.ZP, { Icon: K.Z, activeColor: n, "aria-label": H, color: i, enableKeyboardShortcuts: a, hoverLabel: j, iconSize: r, isDisabled: l, isFaded: s, isPresentational: c, keyboardShortcut: k.Z.shortcuts.share, onPress: d, renderMenu: s ? void 0 : f, style: b, withCount: h }));
                },
                J = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isBookmarked: s, isPresentational: c, onError: u = Z, onPress: d, style: m, testIDs: b, withCount: h }) {
                    const y = h && "number" == typeof n;
                    let f = s ? _ : I;
                    const C = o.useMemo(() => ({ label: s ? S : I }), [s]);
                    return (
                        y && (f = s ? T({ count: n }) : A({ count: n })),
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
                            isActive: s,
                            isDisabled: r,
                            isFaded: l,
                            isPresentational: c,
                            keyboardShortcut: k.Z.shortcuts.bookmark,
                            onError: u,
                            onPress: function () {
                                E.ZP.isFirefox() || w.Z.vibrate(5), d?.();
                            },
                            style: m,
                            testID: b && (s ? b.removeBookmark : b.bookmark),
                            withCount: y,
                        })
                    );
                };
            const X = r().a0af935c,
                Y = r().b8c465e2,
                ee = r().c7a989ce,
                te = (e) => o.createElement(se.ActionAnalytics, e),
                ne = (e) => o.createElement(se.ActionLike, e),
                oe = (e) => o.createElement(se.ActionReply, e),
                ie = (e) => o.createElement(se.ActionRetweet, e),
                ae = (e) => o.createElement(se.ActionShare, e),
                re = (e) => o.createElement(se.ActionBookmark, e),
                le = [];
            function se({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: a = "gray700", displayStyle: c, enableKeyboardShortcuts: d = !0, isDisabled: m = !1, isBookmarked: b = !1, isFocalTweet: p = !1, isFromProtectedAccount: h, isLiked: y, isRetweeted: f, isPresentational: C, likeCount: w, id: g, renderAnalyticsAction: v = te, renderLikeAction: E = ne, renderReplyAction: x = oe, renderRetweetAction: k = ie, renderShareAction: I = ae, renderBookmarkAction: S = re, replyCount: _, retweetCount: A, style: T, tweetLink: Z, viewCount: P, viewState: L, withAnalytics: F = !1, withCount: R = !1, withBookmark: M = !1 }) {
                const D = o.useRef(null),
                    O = s.ZP.useProps(),
                    N = O.tweetViewCountsEnabled(),
                    B = O.testViewCountShow(),
                    V = N || B,
                    W = F && V,
                    z = F && !W,
                    K = V ? "EnabledWithCount" === L && R : R,
                    j = o.useMemo(() => {
                        if (!R) return;
                        const e = r().b03835c7,
                            t = r().g4a195e7,
                            o = r().e089b42d,
                            i = r().e0a8fe39,
                            a = r().c58b2ab7;
                        return (0, l.Z)([_ ? e({ replyCount: _ }) : null, A ? t({ retweetCount: A }) : null, f ? Y : null, w ? o({ likeCount: w }) : null, y ? X : null, b && M ? ee : null, n ? i({ bookmarkCount: n }) : null, P ? a({ viewCount: P }) : null].filter(Boolean), !0);
                    }, [n, b, y, f, w, _, A, P, R, M]),
                    H = o.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    $ = o.useMemo(() => x({ ...H, activeColor: t, count: _, enableKeyboardShortcuts: d, isPresentational: C, withCount: R }), [H, t, _, d, C, R, x]),
                    U = o.useMemo(() => k({ ...H, activeColor: t, count: A, enableKeyboardShortcuts: d, isFromProtectedAccount: h, isRetweeted: f, isPresentational: C, withCount: R }), [H, t, A, d, h, f, C, R, k]),
                    Q = o.useMemo(() => E({ ...H, activeColor: t, count: w, enableKeyboardShortcuts: d, isLiked: y, isPresentational: C, withCount: R }), [H, t, w, d, y, C, R, E]),
                    q = o.useMemo(() => (W ? v({ ...H, count: P, isPresentational: C, tweetLink: Z, withCount: K }) : null), [W, H, P, C, Z, K, v]),
                    G = o.useMemo(() => (M ? S({ ...H, activeColor: t, count: n, enableKeyboardShortcuts: d, isPresentational: C, isBookmarked: b, withCount: R }) : null), [M, H, t, n, d, C, b, R, S]),
                    J = o.useMemo(() => (z ? v({ ...H, isPresentational: C, tweetLink: Z }) : null), [z, H, C, Z, v]),
                    se = o.useMemo(() => I({ ...H, actionItems: le, activeColor: t, enableKeyboardShortcuts: d, isPresentational: C, withCount: R && z }), [H, t, d, C, z, R, I]);
                return o.createElement(i.Z, { ref: D }, o.createElement(u, { "aria-label": j, displayStyle: c, id: g, style: T }, $, U, Q, q, G, J, se));
            }
            (se.ActionAnalytics = U),
                (se.ActionLike = Q),
                (se.ActionReply = q),
                (se.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(N.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (se.ActionShare = G),
                (se.ActionBookmark = J);
        },
        737082: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                i = n(495232),
                a = n(235902),
                r = n(392237),
                l = n(495580),
                s = n(830911),
                c = n(782261);
            const u = r.default.create((e) => ({ compact: { alignSelf: "flex-start" }, inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 }, detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 } })),
                d = ({ displayStyle: e = "inline", ...t }) => {
                    const n = { displayStyle: e, ...t },
                        r = (({ displayStyle: e, exclusivityInfoLabelNativeID: t, hideExclusivityInfoEducationTextInReplies: n, loggedInUser: o, tweet: i }) => {
                            const a = c.Z.getOriginalTweet(i),
                                r = !!a.in_reply_to_status_id_str,
                                { exclusivity_info: l, permalink: s, user: u } = a;
                            if (!l || ("inline" === e && r && n)) return;
                            const d = l.screen_name,
                                m = d === o?.screen_name,
                                b = u.screen_name === o?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : "compact", id: t, screenName: d, scribeElement: "exclusivity_info_context", tweetPermalink: s, type: m ? "exclusiveToSuperFollowersCreator" : b ? "exclusiveToSuperFollowersReplyOwn" : "exclusiveToSuperFollowersReplyOthers" };
                        })(n),
                        d = (({ displayStyle: e, hideTrustedFriendsEducationTextInReplies: t, loggedInUser: n, trustedFriendsLabelNativeID: o, tweet: i }) => {
                            const r = a.ZP.useProps(),
                                l = r.trustedFriendsEnabled(),
                                s = r.trustedFriendsCreationEnabled(),
                                u = c.Z.getOriginalTweet(i),
                                d = !!u.in_reply_to_status_id_str,
                                { permalink: m, trusted_friends_info: b, user: p } = u;
                            if (!l || !b || ("inline" === e && d && t)) return;
                            const h = b.screen_name,
                                y = h === n?.screen_name,
                                f = p.screen_name === n?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : d ? "compact" : "inline", id: o, screenName: h, scribeElement: "exclusivity_info_context", tweetPermalink: m, type: y && s ? "trustedFriendsCreator" : f ? "trustedFriendsReplyOwn" : "trustedFriendsReplyOthers" };
                        })(n),
                        m = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const r = !!o,
                                l = c.Z.getOriginalTweet(a),
                                { conversation_control: s, limited_actions: u, permalink: d } = l,
                                m = c.Z.getDisabledActions(l),
                                b = m?.includes("Reply") || u,
                                p = r && !b;
                            if (!s || ("inline" === t && (!p || n))) return;
                            const h = s.conversation_owner.screen_name,
                                y = s.policy,
                                f = i.Z.getEducationType(y, p);
                            return f ? { displayMode: "detail" === t ? "detail" : "compact", id: e, tweetPermalink: d, screenName: h, scribeElement: "conversation_control_context", type: f } : void 0;
                        })(n),
                        b = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(r),
                                { community_id_str: u, limited_actions: d } = s,
                                m = "community_tweet_hidden" === d,
                                b = i.Z.getEducationType("community_hidden_tweet");
                            if (l && u && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "hidden_community_tweet_education", type: b };
                        })(n),
                        p = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(r),
                                { community_id_str: u, limited_actions: d } = s,
                                m = "community_tweet_member_removed" === d,
                                b = i.Z.getEducationType("community_tweet_member_removed");
                            if (l && u && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "removed_member_community_tweet_education", type: b };
                        })(n),
                        h = (({ premiumInfoLabelNativeID: e, tweet: t }) => {
                            const n = c.Z.getOriginalTweet(t),
                                o = n.premium_info,
                                i = !!n.in_reply_to_status_id_str;
                            if (o && !i) return { type: "premiumExclusive", displayMode: "compact", id: e, screenName: o.screen_name, scribeElement: "premium_info_context" };
                        })(n),
                        y = r || d || m || b || p || h;
                    if (!y) return null;
                    const { handleAnchorAction: f, handleAnchorOpen: C, handleAnchorSecondaryAction: w } = n,
                        { anchorless: g, displayMode: v, id: E, screenName: x, scribeElement: k, tweetPermalink: I, type: S } = y,
                        _ = u[v];
                    return "inline" !== e || g ? o.createElement(s.Z, { displayMode: v, id: E, screenName: x, style: _, type: S }) : o.createElement(l.Z, { onAction: f, onOpen: C ? () => C(k) : void 0, onSecondaryAction: w, screenName: x, style: _, tweetPermalink: I, type: S }, o.createElement(s.Z, { displayMode: v, id: E, screenName: x, type: S }));
                };
        },
        495580: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                u = n(144251),
                d = n(47086),
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
                    const { Icon: t, actionLabel: n, actionLink: a, children: r, headline: l, onAction: s, onDismiss: c, onOpen: u, onSecondaryAction: d, style: m, subtext: b, thumbnailColor: p, tweetPermalink: C } = e;
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
                                renderContent: (e, r) => {
                                    const c = () => {
                                            d && d(), e();
                                        },
                                        u =
                                            C || (n && a)
                                                ? {
                                                      actionLabel: n ?? w,
                                                      actionLink: a ?? C,
                                                      onAction: () => {
                                                          s && s(), e();
                                                      },
                                                      secondaryActionLabel: g,
                                                      onSecondaryAction: c,
                                                  }
                                                : { actionLabel: g, onAction: c };
                                    return o.createElement(i.Z, { style: "popover" === r ? E.interstitialPopover : void 0 }, o.createElement(y.Z, (0, h.Z)({}, u, { contentStyle: E.content, graphic: t, graphicDisplayMode: "thumbnail", graphicThumbnailColor: p, headline: l, subtext: b, withBottomPadding: !1, withCloseButton: !1 })));
                                },
                                withFixedPosition: !0,
                            },
                            o.createElement(i.Z, { onClick: u, role: "button", style: E.cursor }, r),
                        ),
                    );
                },
                E = C.default.create((e) => ({ interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 }, cursor: { cursor: "pointer" }, content: { marginVertical: 0, marginBottom: e.spaces.space28 } })),
                x = {
                    conversationControlsFollowersCanEngage: { Icon: l.default, headline: r().bb7b821a, subtext: r().fc41217b },
                    conversationControlsFollowersCannotEngage: { Icon: l.default, headline: r().ab105904, subtext: r().fc41217b },
                    conversationControlsCommunityCanEngage: { Icon: s.default, headline: r().bb7b821a, subtext: r().f064f477 },
                    conversationControlsCommunityCannotEngage: { Icon: s.default, headline: r().ab105904, subtext: r().f064f477 },
                    conversationControlsByInvitationCanEngage: { Icon: c.default, headline: r().bb7b821a, subtext: r().ea9ac5c9 },
                    conversationControlsByInvitationCannotEngage: { Icon: c.default, headline: r().ab105904, subtext: r().ea9ac5c9 },
                    conversationControlsSubscribersCanEngage: { Icon: c.default, headline: r().bb7b821a, subtext: r().d2ae1499 },
                    conversationControlsSubscribersCannotEngage: { Icon: c.default, headline: r().ab105904, subtext: r().d2ae1499 },
                    conversationControlsVerifiedCanEngage: { Icon: u.default, headline: r().bb7b821a, subtext: r().a4e254ff },
                    conversationControlsVerifiedCannotEngage: { Icon: u.default, headline: r().ab105904, subtext: r().a4e254ff },
                    communityHiddenTweetEducation: { Icon: d.default, headline: r().daba4484, subtext: r().f956070a },
                    communityRemovedMemberEducation: { Icon: d.default, headline: r().daba4484, subtext: r().ceb6841c },
                    exclusiveToSuperFollowersCreator: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().bd414b44 },
                    exclusiveToSuperFollowersReplyOwn: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().dd0da5d9 },
                    exclusiveToSuperFollowersReplyOthers: { Icon: m.default, thumbnailColor: "exclusive", headline: r().g1c6a77e, subtext: r().d3b143d7 },
                    trustedFriendsCreator: { Icon: b.default, actionLabel: r().cb731cae, actionLink: "/i/circles", thumbnailColor: "success", headline: r().c33d3a84, subtext: () => o.createElement(r().I18NFormatMessage, { $i18n: "b6a393af" }, o.createElement(p.ZP, { color: "text", link: "https://help.x.com/using-twitter/twitter-circle", weight: "bold", withUnderline: !0 }, r().c4f10e71)) },
                },
                k = (e) => {
                    const { children: t, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, screenName: s, style: c, tweetPermalink: u, type: d } = e;
                    if (!x[d]) return o.createElement(i.Z, { style: c }, t);
                    const { Icon: m, actionLabel: b, actionLink: p, headline: h, subtext: y, thumbnailColor: f } = x[d],
                        C = ((e, t) => ("string" != typeof e ? e({ screenName: t }) : e))(y, s);
                    return o.createElement(v, { Icon: m, actionLabel: b, actionLink: p, headline: h, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, style: c, subtext: C, thumbnailColor: f, tweetPermalink: u }, t);
                };
        },
        830911: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                i = n(325686),
                a = n(111677),
                r = n.n(a),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                u = n(144251),
                d = n(47086),
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
                            conversationControlsCommunityCanEngage: { Icon: s.default, calloutType: "primary", headline: r().bb7b821a, detail: r().f064f477, inline: r().e5dc76d0 },
                            conversationControlsCommunityCannotEngage: { Icon: s.default, calloutType: "primary", headline: r().ab105904, detail: r().f064f477, inline: r().fd1cda7a },
                            conversationControlsByInvitationCanEngage: { Icon: c.default, calloutType: "primary", headline: r().bb7b821a, detail: r().ea9ac5c9, inline: r().e5dc76d0 },
                            conversationControlsByInvitationCannotEngage: { Icon: c.default, calloutType: "primary", headline: r().ab105904, detail: r().ea9ac5c9, inline: r().fd1cda7a },
                            conversationControlsSubscribersCanEngage: { Icon: c.default, calloutType: "primary", headline: r().bb7b821a, detail: r().d2ae1499, inline: r().e5dc76d0 },
                            conversationControlsSubscribersCannotEngage: { Icon: c.default, calloutType: "primary", headline: r().ab105904, detail: r().d2ae1499, inline: r().fd1cda7a },
                            conversationControlsVerifiedCanEngage: { Icon: u.default, calloutType: "primary", headline: r().bb7b821a, detail: r().a4e254ff, inline: r().e5dc76d0 },
                            conversationControlsVerifiedCannotEngage: { Icon: u.default, calloutType: "primary", headline: r().ab105904, detail: r().a4e254ff, detailAction: { label: r().j1b02fd8, link: { pathname: "/i/premium_sign_up", state: { referring_page: "verified_only_replies" } } }, inline: r().fd1cda7a },
                            communityHiddenTweetEducation: { Icon: d.default, calloutType: "primary", headline: r().daba4484, detail: r().f956070a, inline: r().daba4484 },
                            communityRemovedMemberEducation: { Icon: d.default, calloutType: "primary", headline: r().daba4484, detail: r().cc17f408, inline: r().daba4484 },
                            exclusiveToSuperFollowersCreator: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().bd414b44, inline: r().bd414b44 },
                            exclusiveToSuperFollowersReplyOwn: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().dd0da5d9, inline: r().dd0da5d9 },
                            exclusiveToSuperFollowersReplyOthers: { Icon: m.default, calloutType: "exclusive", headline: r().g1c6a77e, detail: r().d3b143d7, inline: r().f6337117 },
                            trustedFriendsCreator: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOwn: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOthers: { Icon: b.default, calloutType: "success", detail: r().g766a06d, detailAction: { label: r().d7e50a66, link: "https://help.x.com/using-twitter/twitter-circle" }, inline: r().g766a06d },
                            linksDisabledInReplies: { Icon: p.default, calloutType: "primary", headline: r().j040a368, detail: r().b31d0af7, inline: r().eab0f780 },
                            premiumExclusive: { Icon: u.default, calloutType: "primary", headline: r().f17a1f54, detail: r().f17a1f54, inline: r().f17a1f54 },
                        }))({ redesignedLabelForSubscribedTweets: t }),
                        { displayMode: a, id: C, screenName: v, style: x, type: k } = e,
                        { Icon: I, calloutType: S, detail: _, detailAction: A, headline: T, inline: Z } = n[k],
                        P = "compact" === a,
                        L = "detail" === a,
                        F = L ? A : void 0,
                        R = L ? T : void 0,
                        M = w(L ? _ : Z, v),
                        D = "exclusiveToSuperFollowersCreator" === k ? r().bd414b44 : r().a0953370,
                        O = g.includes(k) && t && o.createElement(f.ZP, { background: "gray0", style: P ? E.marginTop : null }, D),
                        N = "premiumExclusive" === k ? o.createElement(f.ZP, { background: "gray0", style: P ? E.marginTop : null }, T) : null;
                    return o.createElement(i.Z, { style: x }, N || O || (P ? null : o.createElement(y.Z, { Icon: I, action: F, headline: R, id: C, text: M, type: S, withThumbnail: !0 })));
                },
                E = C.default.create((e) => ({ marginTop: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-46e7989b.a68c5cea.js.map
