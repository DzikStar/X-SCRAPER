"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-bc6ccf4c", "icons/IconAward-js", "icons/IconBirdwatchFlagStroke-js", "icons/IconBookmarkPlusStroke-js", "icons/IconCameraVideo-js", "icons/IconClipStroke-js", "icons/IconClosedcaptioningNone-js", "icons/IconDraggable-js", "icons/IconFeedback-js", "icons/IconFilterFill-js", "icons/IconFlask-js", "icons/IconGovernmentFlag-js", "icons/IconMediaCollapse-js", "icons/IconPencilStroke-js", "icons/IconRepliesStroke-js", "icons/IconSearchMinusStroke-js", "icons/IconSkipForward-js", "icons/IconStarRising-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
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
                g = n(175993),
                v = n(365023),
                p = n(292627),
                b = n(224162),
                f = n(386802),
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
                                g = d - r,
                                v = h - i,
                                p = d + u >= n,
                                b = h + s >= t,
                                f = l - d >= n,
                                y = a - h >= t,
                                E = l >= d + u / 2 + n / 2 && d >= n / 2 - u / 2,
                                Z = this.props.preferredVerticalOrientation,
                                C = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                z = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: Z, canOrientUp: b, canOrientDown: y }),
                                x = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && n) ? "right" : "left"))({ horizontalPreference: C, canOrientLeft: p, canOrientRight: f, canOrientCenter: E }),
                                _ = this.props.isFixed ? d : g,
                                S = this.props.isFixed ? h : v,
                                k = "up" === z ? S + s - t : S;
                            let M = l - _ - u - m;
                            "center" === x && (M = l - _ - u / 2 - n / 2 - m), "right" === x && (M = l - _ - n - m), this.setState({ top: Math.max(k, 0), right: M, verticalOrientation: z, horizontalOrientation: x });
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
                        { right: z, top: x, verticalOrientation: _ } = this.state,
                        S = void 0 === x,
                        k = C ? d.Z : i.Fragment,
                        M = `calc(100vh - ${x || 0}px)`,
                        B = (d) => {
                            const h = "rtl" === d,
                                m = [E.content, S && E.contentInitialRender, s && [E.contentFixed, { maxHeight: M }], { top: x, end: h ? void 0 : z, start: h ? z : void 0 }, o];
                            return i.createElement(
                                i.Fragment,
                                null,
                                l ? null : i.createElement(a.Z, { onClick: u, style: E.mask }),
                                i.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: E.bodyRectHelper }),
                                i.createElement(w.ZP, null, ({ windowWidth: o }) => i.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? E.rootNarrow : E.rootWide, m] }, S && "slide" === t ? n : i.createElement(c.Z, { animateMount: "up" !== _, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => i.createElement(v.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => i.createElement(a.Z, (0, r.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return i.createElement(
                        b.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            i.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: E.anchor },
                                i.createElement(
                                    p.Z.Dropdown,
                                    null,
                                    i.createElement(g.Z.Consumer, null, (t) => i.createElement(f.Z.Consumer, null, ({ isModal: n }) => i.createElement(m.Z, { history: t, isModal: n, onDismiss: u }, Z ? B(e) : i.createElement(h.Z, null, i.createElement(k, null, B(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            Z.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => g });
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
                g = u;
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
            n.d(t, { ZP: () => p });
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
            function g({ animation: e, autoplay: t }) {
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
                        { style: v.container },
                        r.createElement(h.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(c.default, null) : r.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: v.frames }, `${a}/${e.totalFrames}`),
                        r.createElement(
                            i.Z,
                            { style: v.slider },
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
            const v = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function p(e) {
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
                            b.load().then((i) => {
                                if (i && h.current) {
                                    const o = { container: h.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        c = i.loadAnimation(o);
                                    (s.current = c),
                                        (c.onError = (e) => {
                                            const t = new f(e);
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
                    r.createElement(i.Z, null, r.createElement(i.Z, { style: [e.animationContainerStyle, w.centerAnimation] }, r.createElement("div", { ref: h, style: e.animationStyle }), c && s.current && u && r.createElement(g, { animation: s.current, autoplay: t })))
                );
            }
            p.Prepare = function () {
                return (
                    r.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class f extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, f), (this.name = "LottieAnimationError"), (this.lottieError = e);
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
            const s = function ({ activeColor: e, label: t = c, Icon: n = a.default, iconSize: i = "normal", isDisabled: o, onClick: s, preventFocusShift: d, renderActionMenu: h, style: u, testID: m, withDarkBackground: g = !1 }) {
                const v = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), s && s(e);
                        },
                        [s],
                    ),
                    p = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (g ? "white" : void 0), "aria-label": t, backgroundColor: g ? "translucentBlack77" : "transparent", color: g ? "white" : "gray700", hoverLabel: p, iconSize: i, isDisabled: o, onPress: v, preventFocusShift: d, renderMenu: h, style: u, testID: m });
            };
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                i = n(31501),
                o = n(879891);
            const a = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: a, thumbLabel: l, value: c, ...s }) => {
                const { direction: d } = (0, o.Z)(),
                    h = { ...s, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: a, value: [s.min, c], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(i.Z, h);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => v });
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
                g = c.default.create({ root: { overflow: "hidden" } }),
                v = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [v, p] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
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
                                if (a.Z.reducedMotionEnabled) p((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== v.pendingText) {
                                    t === v.text || ((0, o.Z)(e.count) && v.count === e.count) ? p((e) => ({ ...e, pendingCount: null, pendingText: null })) : (p((n) => ({ ...n, pendingCount: e.count, pendingText: t })), v.animating || h(e.count, t, p));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === v.animating &&
                                (v.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && p((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : v.pendingText && h(v.pendingCount, v.pendingText, p));
                        }, [v.animating, v.oldText]),
                        r.useMemo(() => {
                            const e = u[v.transitionDirection],
                                t = v.oldText && !a.Z.reducedMotionEnabled,
                                o = !v.animating && v.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...m, ...(v.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                i.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(l.ZP, d, v.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, p),
                                        style: s,
                                    },
                                    r.createElement(l.ZP, d, v.text),
                                ),
                            );
                        }, [n, d, v, b, p])
                    );
                };
        },
        451566: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                i = n(202784),
                o = n(928316),
                a = n(372612),
                l = n(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = o.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = l.default.theme;
                    return i.createElement(a.Z, (0, r.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const s = c;
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
                g = n.n(m),
                v = n(891198),
                p = n(537392),
                b = n(280278);
            const f = g().e8d93005,
                w = h.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                y = ({ color: e, count: t }) => {
                    const n = (0, v.wl)(t, !0);
                    return r.createElement(p.ZP, null, ({ containerWidth: i }) => {
                        return r.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [w.count, ((o = i), o < h.default.theme.breakpoints.small && w.narrowCount)] }, t > 0 ? (((e) => e < h.default.theme.breakpoints.xxSmall)(i) || n.length >= 5 ? f(t) : n) : void 0);
                        var o;
                    });
                };
            class E extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: l } = this.props;
                            return r.createElement(s.ZP.Consumer, null, ({ direction: c }) => r.createElement(a.ZP, { color: e ? n : o, dir: c, style: [z.inner, e && "blue500" === n && z.blue500] }, r.createElement(i.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: i, iconSize: o, isActive: a, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                u = l.Z.generate({ backgroundColor: h.default.theme.colors[n], color: h.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && a && !e?.isHovered;
                            return r.createElement(c.Z, { hoverLabel: i, interactiveStyles: u, interactivityState: e, style: [h.default.absoluteFill, C[m ? "haloBackground" : n], !s && z.iconBackground, "small" === o && z.iconSmallBoundingBox, m && z.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: i, isFaded: a, onAnimationEnd: l, onAnimationStart: c, onError: s, showAnimation: m, transitionAnimationUrl: g } = this.props;
                            if (!h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && m) return r.createElement(d.ZP, { animation: g || u.Bf, animationContainerStyle: Z[t], animationStyle: _, onAnimationEnd: l, onAnimationStart: c, onError: s });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return r.createElement(o, { style: [Z[t], !i && a && z.iconFaded] });
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
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: a, isDisabled: l, isPresentational: s, keyboardShortcut: u, link: m, preventFocusShift: g, renderMenu: v, renderWrapper: p = r.Fragment, style: b, testID: f } = this.props,
                        w = !h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return r.createElement(
                        i.Z,
                        { style: [z.root, b] },
                        r.createElement(
                            p,
                            null,
                            s
                                ? this._renderContent(a)
                                : r.createElement(c.Z, { "aria-haspopup": v ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: u, link: m, onClick: this._handlePress, preventFocusShift: g, renderMenu: v, style: [z.triggerAreaRoot, z.outlineNone], testID: f }, (e) => {
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
                z = h.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                _ = { width: x, height: x };
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
        896632: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                i = n(325686),
                o = n(731708),
                a = n(392237);
            let l = 1;
            const c = a.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                s = (e) => {
                    const { "aria-label": t, backgroundStyles: n, description: a, disabled: s, horizontal: d, label: h, name: u, onChange: m, options: g, renderBorderWhenSelected: v, renderSelector: p, selectorBackgroundStyles: b, switchStyle: f, value: w } = e,
                        y = (() => {
                            const e = r.useRef("");
                            return (
                                r.useEffect(() => {
                                    (e.current = `CONTROL_${l}_LABEL`), (l += 1);
                                }, []),
                                e
                            );
                        })(),
                        E = (e) => () => {
                            m(u, e);
                        };
                    return r.createElement(
                        i.Z,
                        { "aria-label": t, "aria-labelledby": h && !t ? y.current : void 0, role: "radiogroup", style: s && c.disabled },
                        h ? r.createElement(i.Z, { id: y.current, role: "label", style: c.header }, r.createElement(o.ZP, { style: c.label, weight: "bold" }, h), a ? r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        r.createElement(
                            i.Z,
                            { style: [d && c.row, f && c.switchVariant, n] },
                            g.map((e, t) => p({ "aria-posinset": t + 1, "aria-setsize": g.length, checked: e.value === w, disabled: s, name: u, switchStyle: f, horizontal: d, renderBorderWhenSelected: v, selectorBackgroundStyles: b, onChange: E(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(157396);
            const i = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        916910: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        262754: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        355586: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        806143: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        818088: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        213279: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm7.992 9c1.933 0 3.5-1.567 3.5-3.5S11.933 8.5 10 8.5 6.5 10.067 6.5 12s1.567 3.5 3.5 3.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        804417: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23.367 8.254l-3.455-2.878c-.73-.608-1.763-.751-2.63-.358L12.471 7.19c-.895.403-1.472 1.298-1.472 2.279v.692l-1.771-.8c.492-.673.771-1.496.771-2.361 0-2.206-1.794-4-4-4S2 4.794 2 7s1.794 4 4 4c.486 0 .969-.089 1.421-.261L10.212 12l-2.791 1.261C6.968 13.089 6.485 13 6 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-.865-.278-1.688-.771-2.361l1.771-.8v.692c0 .981.578 1.876 1.471 2.278l4.812 2.173c.869.393 1.9.25 2.629-.357l3.455-2.879L15.073 12l8.294-3.746zm-16.42.509C6.654 8.92 6.335 9 6 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2c0 .736-.403 1.412-1.053 1.763zM6 19c-1.103 0-2-.897-2-2s.897-2 2-2c.335 0 .654.08.947.237C7.596 15.588 8 16.263 8 17c0 1.103-.897 2-2 2zm7-9.531c0-.196.115-.375.294-.456l4.812-2.173c.065-.029.135-.044.205-.044.116 0 .23.04.321.116l1.001.834L13 10.741V9.469zm6.633 6.785l-1.001.835c-.146.121-.352.149-.525.071l-4.812-2.174c-.178-.08-.293-.259-.293-.455v-1.272l6.633 2.995z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        498844: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16.043 6.54l4.75-4.75 1.414 1.42-4.75 4.75-1.414-1.42zM3.207 22.21l4.75-4.75-1.414-1.42-4.75 4.75 1.414 1.42zm5.727-7h.002c1.369 0 2.154-.59 2.737-1.39l-1.22-.87c-.303.44-.812.73-1.39.73-.93 0-1.685-.75-1.685-1.68s.754-1.69 1.684-1.69c.559 0 1.051.28 1.357.7l1.207-.94c-.545-.76-1.36-1.29-2.62-1.29-1.872 0-3.26 1.42-3.26 3.22v.02c0 1.84 1.421 3.19 3.187 3.19zm9.319-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39zM3 5.74V15h2V5.74c0-.27.224-.5.5-.5h9.258l2-2H5.5C4.119 3.24 3 4.36 3 5.74zM18.5 19H9.243l-2 2H18.5c1.381 0 2.5-1.12 2.5-2.5V9h-2v9.5c0 .28-.224.5-.5.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        971657: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        194417: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        373595: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7 6h10v2h-1v2.7l3.316 4.97c.446.67.684 1.46.684 2.26 0 2.25-1.822 4.07-4.07 4.07H8.07C5.822 22 4 20.18 4 17.93c0-.8.238-1.59.684-2.26L8 10.7V8H7V6zm9.742 9.42c-.227-.04-.531-.08-.873-.12-.757-.08-1.62-.13-2.25-.06-.572.07-.983.15-1.424.24h-.005c-.445.09-.92.19-1.571.26-.869.11-1.922.03-2.707-.05-.288-.04-.55-.07-.769-.1l-.795 1.19c-.227.34-.348.74-.348 1.15C6 19.07 6.927 20 8.07 20h7.86c1.143 0 2.07-.93 2.07-2.07 0-.41-.121-.81-.348-1.15l-.91-1.36zM10 3c-.552 0-1 .45-1 1s.448 1 1 1 1-.45 1-1-.448-1-1-1zm3.5-2c-.828 0-1.5.67-1.5 1.5S12.672 4 13.5 4 15 3.33 15 2.5 14.328 1 13.5 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        410547: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6 3v1.5S7.504 4 8.5 4c3 0 4.5 2 7 2 1.782 0 4.5-.75 4.5-.75v11s-2.7.75-4.5.75c-3 0-4.756-2-7-2-1 0-2.5.75-2.5.75V21H4V3h2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        647174: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(717683),
                l = n(347101);
            const c = (e = {}) => {
                const t = r.useContext(a.Z),
                    { direction: n } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21.457 3.96L16.414 9H21v2h-8V3h2v4.59l5.043-5.05 1.414 1.42zM3 13h8v8H9v-4.59l-5.043 5.05-1.414-1.42L7.586 15H3v-2z" })) }, { writingDirection: n });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        885724: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: t });
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
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
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
        614991: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm12.5 1h-7v-2h7v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        415269: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.457.04L19.414 4l-3.957 3.96-1.414-1.42L15.586 5H12c-4.142 0-7.5 3.36-7.5 7.5S7.858 20 12 20s7.5-3.36 7.5-7.5v-1h2v1c0 5.25-4.253 9.5-9.5 9.5s-9.5-4.25-9.5-9.5S6.753 3 12 3h3.586l-1.543-1.54L15.457.04zM9.046 9.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        17412: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16.81 1.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15 2.95-4.02zM7.05 9.54l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5-1.41-1.42zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        976898: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.5 8l1.75 1.75L7.5 11.5m4.5 0h2M5 20h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H5c-.552 0-1 .448-1 1v14c0 .552.448 1 1 1z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        922449: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-bc6ccf4c.7851f38a.js.map
