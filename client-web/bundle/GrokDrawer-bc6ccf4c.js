"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-bc6ccf4c", "icons/IconBoldCompact-js", "icons/IconBookmarkCloseStroke-js", "icons/IconChevronDownNoMargin-js", "icons/IconCropSquare-js", "icons/IconDrafts-js", "icons/IconItalic-js", "icons/IconMediaExpand-js", "icons/IconPlus-js", "icons/IconQuoteStroke-js", "icons/IconRepliesStroke-js"],
    {
        797553: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var r = n(807896),
                i = n(202784),
                o = n(878052),
                a = n(325686),
                l = n(666536),
                c = n(815858),
                s = n(67877),
                d = n(743618),
                h = n(745153),
                u = n(666305),
                m = n(667115),
                p = n(175993),
                g = n(365023),
                v = n(292627),
                f = n(224162),
                b = n(386802),
                w = n(537392),
                y = n(392237);
            const E = y.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: y.default.absoluteFillObject, mask: { ...y.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...y.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class Z extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: n, ctrlKey: r, key: i, metaKey: o } = e;
                            !(n || r || o) && "Escape" === i && t();
                        }),
                        (this._receiveBodyRectHelperRef = (e) => {
                            e && this._bodyRectHelperNode !== e && ((this._bodyRectHelperNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (e) => {
                            e && this._anchorNode !== e && ((this._anchorNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (e) => {
                            e && this._contentNode !== e && ((this._contentNode = e), this._scheduleUpdate(), this._observe(e));
                        }),
                        (this._observe = (e) => {
                            const t = () => {
                                this._scheduleUpdate();
                            };
                            u.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    u.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                n = this._contentNode.scrollWidth,
                                { left: r, top: i, width: o } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: l } = (0, w.iv)();
                            let c = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (c = { ...c, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (c = this._anchorNode.getBoundingClientRect());
                            const { height: s, left: d, top: h, width: u } = c,
                                m = l - o,
                                p = d - r,
                                g = h - i,
                                v = d + u >= n,
                                f = h + s >= t,
                                b = l - d >= n,
                                y = a - h >= t,
                                E = l >= d + u / 2 + n / 2 && d >= n / 2 - u / 2,
                                Z = this.props.preferredVerticalOrientation,
                                C = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                _ = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: Z, canOrientUp: f, canOrientDown: y }),
                                x = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && n) ? "right" : "left"))({ horizontalPreference: C, canOrientLeft: v, canOrientRight: b, canOrientCenter: E }),
                                z = this.props.isFixed ? d : p,
                                k = this.props.isFixed ? h : g,
                                D = "up" === _ ? k + s - t : k;
                            let P = l - z - u - m;
                            "center" === x && (P = l - z - u / 2 - n / 2 - m), "right" === x && (P = l - z - n - m), this.setState({ top: Math.max(D, 0), right: P, verticalOrientation: _, horizontalOrientation: x });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, s.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, l.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), o.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), o.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: o, disableMask: l, isFixed: s, onDismiss: u, preventFocusShift: Z, withKeyboardNavigation: C } = this.props,
                        { right: _, top: x, verticalOrientation: z } = this.state,
                        k = void 0 === x,
                        D = C ? d.Z : i.Fragment,
                        P = `calc(100vh - ${x || 0}px)`,
                        B = (d) => {
                            const h = "rtl" === d,
                                m = [E.content, k && E.contentInitialRender, s && [E.contentFixed, { maxHeight: P }], { top: x, end: h ? void 0 : _, start: h ? _ : void 0 }, o];
                            return i.createElement(
                                i.Fragment,
                                null,
                                l ? null : i.createElement(a.Z, { onClick: u, style: E.mask }),
                                i.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: E.bodyRectHelper }),
                                i.createElement(w.ZP, null, ({ windowWidth: o }) => i.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? E.rootNarrow : E.rootWide, m] }, k && "slide" === t ? n : i.createElement(c.Z, { animateMount: "up" !== z, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => i.createElement(g.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => i.createElement(a.Z, (0, r.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return i.createElement(
                        f.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            i.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: E.anchor },
                                i.createElement(
                                    v.Z.Dropdown,
                                    null,
                                    i.createElement(p.Z.Consumer, null, (t) => i.createElement(b.Z.Consumer, null, ({ isModal: n }) => i.createElement(m.Z, { history: t, isModal: n, onDismiss: u }, Z ? B(e) : i.createElement(h.Z, null, i.createElement(D, null, B(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            Z.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807896),
                i = n(202784),
                o = n(111677),
                a = n.n(o),
                l = n(154003),
                c = n(950822),
                s = n(392237);
            const d = a().i5450bec,
                h = a().f7432494;
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: o, testID: a, ...s } = this.props,
                        u = !(e?.includes("video") || e?.includes("gif"));
                    return i.createElement(i.Fragment, null, i.createElement(l.ZP, (0, r.Z)({ hoverLabel: e ? { label: u ? h : d } : void 0 }, s, { disabled: t, onPress: this._handlePress })), (0, c.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: m.input, tabIndex: -1, testID: a, type: "file" }));
                }
            }
            u.defaultProps = { disabled: !1, multiple: !1 };
            const m = s.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                p = u;
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => r });
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
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => v });
            n(571372);
            var r = n(202784),
                i = n(325686),
                o = n(392237),
                a = n(111677),
                l = n.n(a),
                c = n(643442),
                s = n(466445),
                d = n(731708),
                h = n(154003),
                u = n(173739);
            const m = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, o] = r.useState(t),
                    [a, l] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        i.Z,
                        { style: g.container },
                        r.createElement(h.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(c.default, null) : r.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: g.frames }, `${a}/${e.totalFrames}`),
                        r.createElement(
                            i.Z,
                            { style: g.slider },
                            r.createElement(u.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: a,
                            }),
                        ),
                    )
                );
            }
            const g = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function v(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: o, onAnimationStart: a, onError: l, withControls: c } = e,
                    s = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    h = r.useRef(null),
                    [u, m] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: i } = d.current;
                        i ||
                            ((d.current.animationLoaded = !0),
                            f.load().then((i) => {
                                if (i && h.current) {
                                    const o = { container: h.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        c = i.loadAnimation(o);
                                    (s.current = c),
                                        (c.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof l && l(t), r(c, t);
                                        }),
                                        c.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (c.play(), a && a());
                                        }),
                                        c.addEventListener("complete", () => {
                                            r(c);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, o, a, l, c]),
                    r.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    r.createElement(i.Z, null, r.createElement(i.Z, { style: [e.animationContainerStyle, w.centerAnimation] }, r.createElement("div", { ref: h, style: e.animationStyle }), c && s.current && u && r.createElement(p, { animation: s.current, autoplay: t })))
                );
            }
            v.Prepare = function () {
                return (
                    r.useEffect(() => {
                        f.load();
                    }, []),
                    null
                );
            };
            const f = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const w = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                i = n(111677),
                o = n.n(i),
                a = n(149170),
                l = n(40644);
            const c = o().gaeb997e;
            const s = function ({ activeColor: e, label: t = c, Icon: n = a.default, iconSize: i = "normal", isDisabled: o, onClick: s, preventFocusShift: d, renderActionMenu: h, style: u, testID: m, withDarkBackground: p = !1 }) {
                const g = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), s && s(e);
                        },
                        [s],
                    ),
                    v = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: v, iconSize: i, isDisabled: o, onPress: g, preventFocusShift: d, renderMenu: h, style: u, testID: m });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                i = n(325686),
                o = n(827515),
                a = n(461756),
                l = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                h = (e, t, n) => {
                    n((n) => {
                        const r = (0, o.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                u = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                u[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = c.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [g, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        f = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (f.current)
                                if (a.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, o.Z)(e.count) && g.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || h(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            f.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && h(g.pendingCount, g.pendingText, v));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = u[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                o = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...m, ...(g.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                i.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(l.ZP, d, g.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, v),
                                        style: s,
                                    },
                                    r.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, f, v])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var r = n(202784),
                i = n(325686),
                o = n(461756),
                a = n(731708),
                l = n(58881),
                c = n(530732),
                s = n(224162),
                d = n(491915),
                h = n(392237),
                u = n(551611),
                m = n(111677),
                p = n.n(m),
                g = n(891198),
                v = n(537392),
                f = n(280278);
            const b = p().e8d93005,
                w = h.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                y = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return r.createElement(v.ZP, null, ({ containerWidth: i }) => {
                        return r.createElement(f.ZP, { color: e, count: t, size: "subtext2", style: [w.count, ((o = i), o < h.default.theme.breakpoints.small && w.narrowCount)] }, t > 0 ? (((e) => e < h.default.theme.breakpoints.xxSmall)(i) || n.length >= 5 ? b(t) : n) : void 0);
                        var o;
                    });
                };
            class E extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: l } = this.props;
                            return r.createElement(s.ZP.Consumer, null, ({ direction: c }) => r.createElement(a.ZP, { color: e ? n : o, dir: c, style: [_.inner, e && "blue500" === n && _.blue500] }, r.createElement(i.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: i, iconSize: o, isActive: a, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                u = l.Z.generate({ backgroundColor: h.default.theme.colors[n], color: h.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && a && !e?.isHovered;
                            return r.createElement(c.Z, { hoverLabel: i, interactiveStyles: u, interactivityState: e, style: [h.default.absoluteFill, C[m ? "haloBackground" : n], !s && _.iconBackground, "small" === o && _.iconSmallBoundingBox, m && _.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: i, isFaded: a, onAnimationEnd: l, onAnimationStart: c, onError: s, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && m) return r.createElement(d.ZP, { animation: p || u.Bf, animationContainerStyle: Z[t], animationStyle: z, onAnimationEnd: l, onAnimationStart: c, onError: s });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return r.createElement(o, { style: [Z[t], !i && a && _.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(y, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: a, isDisabled: l, isPresentational: s, keyboardShortcut: u, link: m, preventFocusShift: p, renderMenu: g, renderWrapper: v = r.Fragment, style: f, testID: b } = this.props,
                        w = !h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return r.createElement(
                        i.Z,
                        { style: [_.root, f] },
                        r.createElement(
                            v,
                            null,
                            s
                                ? this._renderContent(a)
                                : r.createElement(c.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: u, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: g, style: [_.triggerAreaRoot, _.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          i = a || n || r || t;
                                      return this._renderContent(i, e);
                                  }),
                        ),
                        w ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const Z = h.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                C = h.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                _ = h.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                z = { width: x, height: x };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => i, ZP: () => a });
            var r = n(941978);
            const i = "https://abs.twimg.com/sticky/animations/like.4.json";
            class o extends r.C {
                check(e) {
                    return super.check(e ?? i);
                }
            }
            const a = new o();
        },
        67877: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = (e, t) => {
                let n = null;
                const r = () => {
                    (n = null), e();
                };
                return () => (n || (n = t(r)), n);
            };
        },
        394123: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        738398: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        63274: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 17 10", children: r.createElement("g", null, r.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 17, height: 10 };
            const c = l;
        },
        390587: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        266151: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        856661: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        841972: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(717683),
                l = n(347101);
            const c = (e = {}) => {
                const t = r.useContext(a.Z),
                    { direction: n } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" })) }, { writingDirection: n });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        784732: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        314948: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        74514: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        42635: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75zm.571 12.75v2.857L12 18.5l-.571-1.143V14.5H7.36l1.783-3.566V7.928c0-.789.64-1.429 1.429-1.429h2.857c.789 0 1.429.64 1.429 1.429v3.006l1.783 3.566h-4.069z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        379327: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        474761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        368761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        276259: (e, t, n) => {
            n.d(t, { Lw: () => i, Re: () => h, VJ: () => l, ZF: () => u, hv: () => c, ku: () => r, qp: () => o, uv: () => a, v5: () => d });
            n(571372), n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(543673), n(240753), n(128399);
            function r(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function i(e) {
                return new Promise((t, n) => {
                    const r = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== r.length) n(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, n] = r,
                                    i = atob(n),
                                    o = i.length,
                                    a = Array(o);
                                for (let e = 0; e < o; e++) a[e] = i.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else n(Error("The Uint8Array type is not available"));
                        else n(Error("The atob API is not available"));
                    else n(Error("The Blob API is not available"));
                });
            }
            const o = (e, t) =>
                    new Promise((n, r) => {
                        const i = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                i.abort?.(), r(Error(u));
                            }),
                            (i.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? n(e.target.result) : r(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (i.onerror = (e) => {
                                r(e);
                            }),
                            i.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const n = document.createElement("a");
                    (n.href = e), (n.download = t), (n.target = "_blank"), n.click(), n.remove();
                },
                l = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const n = new Image();
                            (n.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = n.width), (e.height = n.height), e.getContext("2d").drawImage(n, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (n.crossOrigin = "anonymous"),
                                (n.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                c = async (e, t) => {
                    if (e.size <= t) return e;
                    let n = e,
                        r = 1;
                    for (; n && n.size > t; )
                        try {
                            r > 0.2 ? ((r *= 0.7), (n = await s(n, 1, r))) : (n = await s(n, 0.7, r));
                        } catch (e) {
                            n = void 0;
                        }
                    return n;
                },
                s = (e, t, n) =>
                    new Promise((r, i) => {
                        const o = new Image();
                        (o.onload = () => {
                            const e = document.createElement("canvas"),
                                i = e.getContext("2d"),
                                a = o.width * t,
                                l = o.height * t;
                            (e.width = a),
                                (e.height = l),
                                i.drawImage(o, 0, 0, a, l),
                                e.toBlob(
                                    (e) => {
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    n,
                                );
                        }),
                            (o.onerror = () => i(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                u = "Reading aborted";
        },
        666536: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(936386),
                i = n.n(r);
            const o = (e, t, n) => i()(e, t, n);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-bc6ccf4c.7d2f02aa.js.map
