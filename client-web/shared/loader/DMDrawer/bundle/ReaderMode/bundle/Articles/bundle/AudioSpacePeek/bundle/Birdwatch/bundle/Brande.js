"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"],
    {
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(332920),
                c = n.n(i),
                l = n(643442),
                s = n(466445),
                u = n(731708),
                d = n(154003),
                m = n(173739);
            const h = c().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, c] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && c(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: f.container },
                        r.createElement(d.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(l.default, null) : r.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(u.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: f.slider },
                            r.createElement(m.Z, {
                                "aria-label": h,
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
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: c, withControls: l } = e,
                    s = r.useRef(void 0),
                    u = r.useRef({ animationLoaded: !1 }),
                    d = r.useRef(null),
                    [m, h] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = u.current;
                        o ||
                            ((u.current.animationLoaded = !0),
                            b.load().then((o) => {
                                if (o && d.current) {
                                    const a = { container: d.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = o.loadAnimation(a);
                                    (s.current = l),
                                        (l.onError = (e) => {
                                            const t = new E(e);
                                            "function" == typeof c && c(t), r(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            r(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, c, l]),
                    r.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, r.createElement("div", { ref: d, style: e.animationStyle }), l && s.current && m && r.createElement(p, { animation: s.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    r.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class E extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, E), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(332920),
                a = n.n(o),
                i = n(149170),
                c = n(40644);
            const l = a().gaeb997e;
            const s = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: s, preventFocusShift: u, renderActionMenu: d, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), s && s(e);
                        },
                        [s],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(c.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: a, onPress: f, preventFocusShift: u, renderMenu: d, style: m, testID: h });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                c = n(731708),
                l = n(392237);
            const s = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? s : u) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                p = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...u } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        b = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...h, ...(f.animating ? e.post : e.active) },
                                s = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: l }, r.createElement(c.ZP, u, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, g),
                                        style: s,
                                    },
                                    r.createElement(c.ZP, u, f.text),
                                ),
                            );
                        }, [n, u, f, b, g])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => C });
            var r = n(202784),
                o = n(325686),
                a = n(461756),
                i = n(731708),
                c = n(58881),
                l = n(530732),
                s = n(224162),
                u = n(491915),
                d = n(392237),
                m = n(439481),
                h = n(332920),
                p = n.n(h),
                f = n(891198),
                g = n(537392),
                b = n(280278);
            const E = p().e8d93005,
                y = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return r.createElement(g.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = o), a < d.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? E(t) : n) : void 0);
                        var a;
                    });
                };
            class C extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: c } = this.props;
                            return r.createElement(s.ZP.Consumer, null, ({ direction: l }) => r.createElement(i.ZP, { color: e ? n : a, dir: l, style: [S.inner, e && "blue500" === n && S.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), c, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: a, isActive: i, isDisabled: s, showBackgroundWhenActive: u } = this.props,
                                m = c.Z.generate({ backgroundColor: d.default.theme.colors[n], color: d.default.theme.colors[t], insetFocusRing: !0 }),
                                h = u && i && !e?.isHovered;
                            return r.createElement(l.Z, { hoverLabel: o, interactiveStyles: m, interactivityState: e, style: [d.default.absoluteFill, w[h ? "haloBackground" : n], !s && S.iconBackground, "small" === a && S.iconSmallBoundingBox, h && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: i, onAnimationEnd: c, onAnimationStart: l, onError: s, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!d.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return r.createElement(u.ZP, { animation: p || m.Bf, animationContainerStyle: x[t], animationStyle: P, onAnimationEnd: c, onAnimationStart: l, onError: s });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [x[t], !o && i && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: c, isPresentational: s, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: g = r.Fragment, style: b, testID: E } = this.props,
                        y = !d.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [S.root, b] },
                        r.createElement(
                            g,
                            null,
                            s
                                ? this._renderContent(i)
                                : r.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: c, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [S.triggerAreaRoot, S.outlineNone], testID: E }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = i || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        y ? r.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            C.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const x = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                w = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                P = { width: k, height: k };
        },
        439481: (e, t, n) => {
            n.d(t, { Bf: () => o, ZP: () => a });
            class r {
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
            new r();
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            const a = new (class extends r {
                check(e) {
                    return super.check(e ?? o);
                }
            })();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande.1b6b51ca.js.map
