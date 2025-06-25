"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-6107ac1a"],
    {
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                i = n(143778),
                c = n(750410),
                s = n(682830);
            const l = "failed",
                u = "loaded",
                d = "loading",
                h = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: u, render: m, renderFailure: p, retryMessage: f, retryable: v } = this.props;
                    switch (r) {
                        case l:
                            return v ? o.createElement(c.Z, { icon: a, onRequestRetry: u, retryMessage: f }) : n ? o.createElement(s.m, { failureMessage: n }) : p();
                        case d:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => v });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(111677),
                c = n.n(i),
                s = n(643442),
                l = n(466445),
                u = n(731708),
                d = n(154003),
                h = n(173739);
            const m = c().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, c] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && c(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: f.container },
                        o.createElement(d.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(s.default, null) : o.createElement(l.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(u.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: f.slider },
                            o.createElement(h.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function v(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: c, withControls: s } = e,
                    l = o.useRef(void 0),
                    u = o.useRef({ animationLoaded: !1 }),
                    d = o.useRef(null),
                    [h, m] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = u.current;
                        r ||
                            ((u.current.animationLoaded = !0),
                            g.load().then((r) => {
                                if (r && d.current) {
                                    const a = { container: d.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = r.loadAnimation(a);
                                    (l.current = s),
                                        (s.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof c && c(t), o(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            o(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, c, s]),
                    o.useEffect(
                        () =>
                            function () {
                                l.current && l.current.destroy();
                            },
                        [l],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, C.centerAnimation] }, o.createElement("div", { ref: d, style: e.animationStyle }), s && l.current && h && o.createElement(p, { animation: l.current, autoplay: t })))
                );
            }
            v.Prepare = function () {
                return (
                    o.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const C = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                c = n(40644);
            const s = a().gaeb997e;
            const l = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: l, preventFocusShift: u, renderActionMenu: d, style: h, testID: m, withDarkBackground: p = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), l && l(e);
                        },
                        [l],
                    ),
                    v = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(c.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: v, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: u, renderMenu: d, style: h, testID: m });
            };
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: c, value: s, ...l }) => {
                const { direction: u } = (0, a.Z)(),
                    d = { ...l, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: c, onDarkBackground: i, value: [l.min, s], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: u };
                return o.createElement(r.Z, d);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                c = n(731708),
                s = n(392237);
            const l = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? l : u) : l;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                h = {};
            [l, u].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === l ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === l ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...u } = e,
                        [f, v] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: l }),
                        g = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (g.current)
                                if (i.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, v));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            g.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, v));
                        }, [f.animating, f.oldText]),
                        o.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...m, ...(f.animating ? e.post : e.active) },
                                l = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [p.root, n] },
                                t ? o.createElement("span", { style: s }, o.createElement(c.ZP, u, f.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, v),
                                        style: l,
                                    },
                                    o.createElement(c.ZP, u, f.text),
                                ),
                            );
                        }, [n, u, f, g, v])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                c = n(58881),
                s = n(530732),
                l = n(224162),
                u = n(491915),
                d = n(392237),
                h = n(551611),
                m = n(111677),
                p = n.n(m),
                f = n(891198),
                v = n(537392),
                g = n(280278);
            const b = p().e8d93005,
                C = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                S = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(v.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(g.ZP, { color: e, count: t, size: "subtext2", style: [C.count, ((a = r), a < d.default.theme.breakpoints.small && C.narrowCount)] }, t > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? b(t) : n) : void 0);
                        var a;
                    });
                };
            class y extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: c } = this.props;
                            return o.createElement(l.ZP.Consumer, null, ({ direction: s }) => o.createElement(i.ZP, { color: e ? n : a, dir: s, style: [P.inner, e && "blue500" === n && P.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), c, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: l, showBackgroundWhenActive: u } = this.props,
                                h = c.Z.generate({ backgroundColor: d.default.theme.colors[n], color: d.default.theme.colors[t], insetFocusRing: !0 }),
                                m = u && i && !e?.isHovered;
                            return o.createElement(s.Z, { hoverLabel: r, interactiveStyles: h, interactivityState: e, style: [d.default.absoluteFill, T[m ? "haloBackground" : n], !l && P.iconBackground, "small" === a && P.iconSmallBoundingBox, m && P.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: c, onAnimationStart: s, onError: l, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!d.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return o.createElement(u.ZP, { animation: p || h.Bf, animationContainerStyle: E[t], animationStyle: R, onAnimationEnd: c, onAnimationStart: s, onError: l });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [E[t], !r && i && P.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(S, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: c, isPresentational: l, keyboardShortcut: h, link: m, preventFocusShift: p, renderMenu: f, renderWrapper: v = o.Fragment, style: g, testID: b } = this.props,
                        C = !d.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [P.root, g] },
                        o.createElement(
                            v,
                            null,
                            l
                                ? this._renderContent(i)
                                : o.createElement(s.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: c, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [P.triggerAreaRoot, P.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        C ? o.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            y.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const E = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                T = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                P = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                R = { width: x, height: x };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(157396);
            const r = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        151624: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(18198),
                r = n(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                i = r.Z.currentCentroidYOfTouchesChangedAfter,
                c = r.Z.previousCentroidXOfTouchesChangedAfter,
                s = r.Z.previousCentroidYOfTouchesChangedAfter,
                l = r.Z.currentCentroidX,
                u = r.Z.currentCentroidY,
                d = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = c(t, n),
                            r = a(t, n),
                            l = s(t, n),
                            u = i(t, n),
                            d = e.dx + (r - o),
                            h = e.dy + (u - l),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (d - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = d), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && d._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (d._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = l(r.touchHistory)),
                                    (n.y0 = u(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(o) {
                                    h(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    h(t, e.onPanResponderRelease, o, n), m(t), d._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (d._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), h(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    h(t, e.onPanResponderTerminate, o, n), m(t), d._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, n, r) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const p = d;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = {
                centroidDimension: function (e, t, n, r) {
                    var a = e.touchBank,
                        i = 0,
                        c = 0,
                        s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== s) s.touchActive && s.currentTimeStamp > t && ((i += r && n ? s.currentPageX : r && !n ? s.currentPageY : !r && n ? s.previousPageX : s.previousPageY), (c = 1));
                    else
                        for (var l = 0; l < a.length; l++) {
                            var u = a[l];
                            if (null != u && u.touchActive && u.currentTimeStamp >= t) {
                                (i += r && n ? u.currentPageX : r && !n ? u.currentPageY : !r && n ? u.previousPageX : u.previousPageY), c++;
                            }
                        }
                    return c > 0 ? i / c : o.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return o.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return o.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-6107ac1a.040fcafa.js.map
