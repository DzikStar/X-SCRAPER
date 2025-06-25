"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-bc6ccf4c", "icons/IconBirdwatchFlagStroke-js", "icons/IconBookmarkPlusStroke-js", "icons/IconCameraPlusStroke-js", "icons/IconClosedcaptioningStroke-js", "icons/IconFilm-js", "icons/IconMediaSlowmotion-js", "icons/IconMicrophone-js", "icons/IconMicrophoneStroke-js", "icons/IconNumberedList-js", "icons/IconSearchPlusStroke-js", "icons/IconShareStrokeBold-js", "icons/IconSound-js", "icons/IconStar-js"],
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
                v = n(365023),
                g = n(292627),
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
                                v = h - i,
                                g = d + u >= n,
                                f = h + s >= t,
                                b = l - d >= n,
                                y = a - h >= t,
                                E = l >= d + u / 2 + n / 2 && d >= n / 2 - u / 2,
                                Z = this.props.preferredVerticalOrientation,
                                z = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                C = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: Z, canOrientUp: f, canOrientDown: y }),
                                _ = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && n) ? "right" : "left"))({ horizontalPreference: z, canOrientLeft: g, canOrientRight: b, canOrientCenter: E }),
                                x = this.props.isFixed ? d : p,
                                S = this.props.isFixed ? h : v,
                                k = "up" === C ? S + s - t : S;
                            let H = l - x - u - m;
                            "center" === _ && (H = l - x - u / 2 - n / 2 - m), "right" === _ && (H = l - x - n - m), this.setState({ top: Math.max(k, 0), right: H, verticalOrientation: C, horizontalOrientation: _ });
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
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: o, disableMask: l, isFixed: s, onDismiss: u, preventFocusShift: Z, withKeyboardNavigation: z } = this.props,
                        { right: C, top: _, verticalOrientation: x } = this.state,
                        S = void 0 === _,
                        k = z ? d.Z : i.Fragment,
                        H = `calc(100vh - ${_ || 0}px)`,
                        M = (d) => {
                            const h = "rtl" === d,
                                m = [E.content, S && E.contentInitialRender, s && [E.contentFixed, { maxHeight: H }], { top: _, end: h ? void 0 : C, start: h ? C : void 0 }, o];
                            return i.createElement(
                                i.Fragment,
                                null,
                                l ? null : i.createElement(a.Z, { onClick: u, style: E.mask }),
                                i.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: E.bodyRectHelper }),
                                i.createElement(w.ZP, null, ({ windowWidth: o }) => i.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? E.rootNarrow : E.rootWide, m] }, S && "slide" === t ? n : i.createElement(c.Z, { animateMount: "up" !== x, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => i.createElement(v.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => i.createElement(a.Z, (0, r.Z)({ ref: e() }, t({})), n))))),
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
                                    g.Z.Dropdown,
                                    null,
                                    i.createElement(p.Z.Consumer, null, (t) => i.createElement(b.Z.Consumer, null, ({ isModal: n }) => i.createElement(m.Z, { history: t, isModal: n, onDismiss: u }, Z ? M(e) : i.createElement(h.Z, null, i.createElement(k, null, M(e)))))),
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
            n.d(t, { ZP: () => g });
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
            function g(e) {
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
            g.Prepare = function () {
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
                const v = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), s && s(e);
                        },
                        [s],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: i, isDisabled: o, onPress: v, preventFocusShift: d, renderMenu: h, style: u, testID: m });
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
                p = c.default.create({ root: { overflow: "hidden" } }),
                v = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [v, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
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
                                if (a.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== v.pendingText) {
                                    t === v.text || ((0, o.Z)(e.count) && v.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), v.animating || h(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            f.current &&
                                !1 === v.animating &&
                                (v.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : v.pendingText && h(v.pendingCount, v.pendingText, g));
                        }, [v.animating, v.oldText]),
                        r.useMemo(() => {
                            const e = u[v.transitionDirection],
                                t = v.oldText && !a.Z.reducedMotionEnabled,
                                o = !v.animating && v.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...m, ...(v.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                i.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(l.ZP, d, v.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, g),
                                        style: s,
                                    },
                                    r.createElement(l.ZP, d, v.text),
                                ),
                            );
                        }, [n, d, v, f, g])
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
                p = n.n(m),
                v = n(891198),
                g = n(537392),
                f = n(280278);
            const b = p().e8d93005,
                w = h.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                y = ({ color: e, count: t }) => {
                    const n = (0, v.wl)(t, !0);
                    return r.createElement(g.ZP, null, ({ containerWidth: i }) => {
                        return r.createElement(f.ZP, { color: e, count: t, size: "subtext2", style: [w.count, ((o = i), o < h.default.theme.breakpoints.small && w.narrowCount)] }, t > 0 ? (((e) => e < h.default.theme.breakpoints.xxSmall)(i) || n.length >= 5 ? b(t) : n) : void 0);
                        var o;
                    });
                };
            class E extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: l } = this.props;
                            return r.createElement(s.ZP.Consumer, null, ({ direction: c }) => r.createElement(a.ZP, { color: e ? n : o, dir: c, style: [C.inner, e && "blue500" === n && C.blue500] }, r.createElement(i.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: i, iconSize: o, isActive: a, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                u = l.Z.generate({ backgroundColor: h.default.theme.colors[n], color: h.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && a && !e?.isHovered;
                            return r.createElement(c.Z, { hoverLabel: i, interactiveStyles: u, interactivityState: e, style: [h.default.absoluteFill, z[m ? "haloBackground" : n], !s && C.iconBackground, "small" === o && C.iconSmallBoundingBox, m && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: i, isFaded: a, onAnimationEnd: l, onAnimationStart: c, onError: s, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && m) return r.createElement(d.ZP, { animation: p || u.Bf, animationContainerStyle: Z[t], animationStyle: x, onAnimationEnd: l, onAnimationStart: c, onError: s });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return r.createElement(o, { style: [Z[t], !i && a && C.iconFaded] });
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
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: a, isDisabled: l, isPresentational: s, keyboardShortcut: u, link: m, preventFocusShift: p, renderMenu: v, renderWrapper: g = r.Fragment, style: f, testID: b } = this.props,
                        w = !h.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return r.createElement(
                        i.Z,
                        { style: [C.root, f] },
                        r.createElement(
                            g,
                            null,
                            s
                                ? this._renderContent(a)
                                : r.createElement(c.Z, { "aria-haspopup": v ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: u, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: v, style: [C.triggerAreaRoot, C.outlineNone], testID: b }, (e) => {
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
                z = h.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = h.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                _ = "224.5%",
                x = { width: _, height: _ };
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
                    const { "aria-label": t, backgroundStyles: n, description: a, disabled: s, horizontal: d, label: h, name: u, onChange: m, options: p, renderBorderWhenSelected: v, renderSelector: g, selectorBackgroundStyles: f, switchStyle: b, value: w } = e,
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
                            { style: [d && c.row, b && c.switchVariant, n] },
                            p.map((e, t) => g({ "aria-posinset": t + 1, "aria-setsize": p.length, checked: e.value === w, disabled: s, name: u, switchStyle: b, horizontal: d, renderBorderWhenSelected: v, selectorBackgroundStyles: f, onChange: E(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(157396);
            const i = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
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
        293615: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        804579: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        926981: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM7 20H5.5c-.28 0-.5-.22-.5-.5v-2h2V20zm0-4.5H5V13h2v2.5zM7 11H5V8.5h2V11zm0-4.5H5v-2c0-.28.22-.5.5-.5H7v2.5zM15 20H9v-7h6v7zm0-9H9V4h6v7zm4 8.5c0 .28-.22.5-.5.5H17v-2.5h2v2zm0-4h-2V13h2v2.5zm0-4.5h-2V8.5h2V11zm0-4.5h-2V4h1.5c.28 0 .5.22.5.5v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        518532: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 74 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 74, height: 24 };
            const c = l;
        },
        913315: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        315951: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        133272: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        620763: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        648539: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
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
        406727: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        158910: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm8-1V7.5h2V10h2.5v2H12v2.5h-2V12H7.5v-2H10z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        786272: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        926628: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        258292: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-bc6ccf4c.5400628a.js.map
