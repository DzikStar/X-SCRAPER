(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-6107ac1a", "ondemand.Dropdown", "icons/IconBookmarkPlusStroke-js", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconNumberedList-js", "icons/IconSparkle-js", "icons/IconStar-js"],
    {
        797553: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => w });
            var r = n(807896),
                o = n(202784),
                i = n(878052),
                a = n(325686),
                l = n(666536),
                s = n(815858),
                c = n(67877),
                d = n(743618),
                u = n(745153),
                h = n(666305),
                m = n(667115),
                p = n(175993),
                v = n(365023),
                g = n(292627),
                f = n(224162),
                b = n(386802),
                y = n(537392),
                C = n(392237);
            const E = C.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: C.default.absoluteFillObject, mask: { ...C.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...C.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class w extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: n, ctrlKey: r, key: o, metaKey: i } = e;
                            !(n || r || i) && "Escape" === o && t();
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
                            h.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    h.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                n = this._contentNode.scrollWidth,
                                { left: r, top: o, width: i } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: l } = (0, y.iv)();
                            let s = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (s = { ...s, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (s = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: u, width: h } = s,
                                m = l - i,
                                p = d - r,
                                v = u - o,
                                g = d + h >= n,
                                f = u + c >= t,
                                b = l - d >= n,
                                C = a - u >= t,
                                E = l >= d + h / 2 + n / 2 && d >= n / 2 - h / 2,
                                w = this.props.preferredVerticalOrientation,
                                Z = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                S = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: w, canOrientUp: f, canOrientDown: C }),
                                x = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && n) ? "right" : "left"))({ horizontalPreference: Z, canOrientLeft: g, canOrientRight: b, canOrientCenter: E }),
                                _ = this.props.isFixed ? d : p,
                                R = this.props.isFixed ? u : v,
                                T = "up" === S ? R + c - t : R;
                            let k = l - _ - h - m;
                            "center" === x && (k = l - _ - h / 2 - n / 2 - m), "right" === x && (k = l - _ - n - m), this.setState({ top: Math.max(T, 0), right: k, verticalOrientation: S, horizontalOrientation: x });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, l.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), i.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), i.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: i, disableMask: l, isFixed: c, onDismiss: h, preventFocusShift: w, withKeyboardNavigation: Z } = this.props,
                        { right: S, top: x, verticalOrientation: _ } = this.state,
                        R = void 0 === x,
                        T = Z ? d.Z : o.Fragment,
                        k = `calc(100vh - ${x || 0}px)`,
                        P = (d) => {
                            const u = "rtl" === d,
                                m = [E.content, R && E.contentInitialRender, c && [E.contentFixed, { maxHeight: k }], { top: x, end: u ? void 0 : S, start: u ? S : void 0 }, i];
                            return o.createElement(
                                o.Fragment,
                                null,
                                l ? null : o.createElement(a.Z, { onClick: h, style: E.mask }),
                                o.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: E.bodyRectHelper }),
                                o.createElement(y.ZP, null, ({ windowWidth: i }) => o.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [i < C.default.theme.breakpoints.medium ? E.rootNarrow : E.rootWide, m] }, R && "slide" === t ? n : o.createElement(s.Z, { animateMount: "up" !== _, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => o.createElement(v.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => o.createElement(a.Z, (0, r.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return o.createElement(
                        f.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            o.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: E.anchor },
                                o.createElement(
                                    g.Z.Dropdown,
                                    null,
                                    o.createElement(p.Z.Consumer, null, (t) => o.createElement(b.Z.Consumer, null, ({ isModal: n }) => o.createElement(m.Z, { history: t, isModal: n, onDismiss: h }, w ? P(e) : o.createElement(u.Z, null, o.createElement(T, null, P(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            w.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        449161: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var r = n(807896),
                o = n(202784),
                i = n(111677),
                a = n.n(i),
                l = n(154003),
                s = n(950822),
                c = n(392237);
            const d = a().i5450bec,
                u = a().f7432494;
            class h extends o.Component {
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
                    const { accept: e, disabled: t, multiple: n, onChange: i, testID: a, ...c } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, (0, r.Z)({ hoverLabel: e ? { label: h ? u : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: m.input, tabIndex: -1, testID: a, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const m = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                p = h;
        },
        941978: (e, t, n) => {
            "use strict";
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
            "use strict";
            n.d(t, { ZP: () => g });
            n(571372);
            var r = n(202784),
                o = n(325686),
                i = n(392237),
                a = n(111677),
                l = n.n(a),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                h = n(173739);
            const m = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, i] = r.useState(t),
                    [a, l] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: v.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), i(!1)) : (e.play(), i(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: v.frames }, `${a}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: v.slider },
                            r.createElement(h.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), i(!1);
                                },
                                value: a,
                            }),
                        ),
                    )
                );
            }
            const v = i.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: i, onAnimationStart: a, onError: l, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [h, m] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof i && i(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            f.load().then((o) => {
                                if (o && u.current) {
                                    const i = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = o.loadAnimation(i);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof l && l(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (s.play(), a && a());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, i, a, l, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && h && r.createElement(p, { animation: c.current, autoplay: t })))
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
            const y = i.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(111677),
                i = n.n(o),
                a = n(149170),
                l = n(40644);
            const s = i().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = a.default, iconSize: o = "normal", isDisabled: i, onClick: c, preventFocusShift: d, renderActionMenu: u, style: h, testID: m, withDarkBackground: p = !1 }) {
                const v = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: i, onPress: v, preventFocusShift: d, renderMenu: u, style: h, testID: m });
            };
        },
        173739: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(31501),
                i = n(879891);
            const a = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: a, thumbLabel: l, value: s, ...c }) => {
                const { direction: d } = (0, i.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: a, value: [c.min, s], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(o.Z, u);
            };
        },
        280278: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => v });
            var r = n(202784),
                o = n(325686),
                i = n(827515),
                a = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                v = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [v, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                    t === v.text || ((0, i.Z)(e.count) && v.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), v.animating || u(e.count, t, g));
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
                                    : v.pendingText && u(v.pendingCount, v.pendingText, g));
                        }, [v.animating, v.oldText]),
                        r.useMemo(() => {
                            const e = h[v.transitionDirection],
                                t = v.oldText && !a.Z.reducedMotionEnabled,
                                i = !v.animating && v.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...m, ...(v.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, v.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, g),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, v.text),
                                ),
                            );
                        }, [n, d, v, f, g])
                    );
                };
        },
        451566: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                i = n(928316),
                a = n(372612),
                l = n(392237);
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = i.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = l.default.theme;
                    return o.createElement(a.Z, (0, r.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const c = s;
        },
        40644: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => E });
            var r = n(202784),
                o = n(325686),
                i = n(461756),
                a = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                h = n(551611),
                m = n(111677),
                p = n.n(m),
                v = n(891198),
                g = n(537392),
                f = n(280278);
            const b = p().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, v.wl)(t, !0);
                    return r.createElement(g.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(f.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((i = o), i < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? b(t) : n) : void 0);
                        var i;
                    });
                };
            class E extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: i, decoration: l } = this.props;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: s }) => r.createElement(a.ZP, { color: e ? n : i, dir: s, style: [S.inner, e && "blue500" === n && S.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: i, isActive: a, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                h = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && a && !e?.isHovered;
                            return r.createElement(s.Z, { hoverLabel: o, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, Z[m ? "haloBackground" : n], !c && S.iconBackground, "small" === i && S.iconSmallBoundingBox, m && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: a, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !i.Z.reducedMotionEnabled && e && m) return r.createElement(d.ZP, { animation: p || h.Bf, animationContainerStyle: w[t], animationStyle: _, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const i = n && e ? e : this.props.Icon;
                                return r.createElement(i, { style: [w[t], !o && a && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: a, isDisabled: l, isPresentational: c, keyboardShortcut: h, link: m, preventFocusShift: p, renderMenu: v, renderWrapper: g = r.Fragment, style: f, testID: b } = this.props,
                        y = !u.default.theme.highContrastEnabled && !i.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [S.root, f] },
                        r.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(a)
                                : r.createElement(s.Z, { "aria-haspopup": v ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: v, style: [S.triggerAreaRoot, S.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = a || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        y ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                Z = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                _ = { width: x, height: x };
        },
        551611: (e, t, n) => {
            "use strict";
            n.d(t, { Bf: () => o, ZP: () => a });
            var r = n(941978);
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            class i extends r.C {
                check(e) {
                    return super.check(e ?? o);
                }
            }
            const a = new i();
        },
        67877: (e, t, n) => {
            "use strict";
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
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(392237);
            let l = 1;
            const s = a.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                c = (e) => {
                    const { "aria-label": t, backgroundStyles: n, description: a, disabled: c, horizontal: d, label: u, name: h, onChange: m, options: p, renderBorderWhenSelected: v, renderSelector: g, selectorBackgroundStyles: f, switchStyle: b, value: y } = e,
                        C = (() => {
                            const e = r.useRef("");
                            return (
                                r.useEffect(() => {
                                    (e.current = `CONTROL_${l}_LABEL`), (l += 1);
                                }, []),
                                e
                            );
                        })(),
                        E = (e) => () => {
                            m(h, e);
                        };
                    return r.createElement(
                        o.Z,
                        { "aria-label": t, "aria-labelledby": u && !t ? C.current : void 0, role: "radiogroup", style: c && s.disabled },
                        u ? r.createElement(o.Z, { id: C.current, role: "label", style: s.header }, r.createElement(i.ZP, { style: s.label, weight: "bold" }, u), a ? r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        r.createElement(
                            o.Z,
                            { style: [d && s.row, b && s.switchVariant, n] },
                            p.map((e, t) => g({ "aria-posinset": t + 1, "aria-setsize": p.length, checked: e.value === y, disabled: c, name: h, switchStyle: b, horizontal: d, renderBorderWhenSelected: v, selectorBackgroundStyles: f, onChange: E(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r = n(157396);
            const o = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        818088: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        58399: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(717683),
                l = n(347101);
            const s = (e = {}) => {
                const t = r.useContext(a.Z),
                    { direction: n } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        518532: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 74 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 74, height: 24 };
            const s = l;
        },
        913315: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        264171: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        648539: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        262009: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        258292: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            var r = n(936386),
                o = n.n(r);
            const i = (e, t, n) => o()(e, t, n);
        },
        730895: (e, t, n) => {
            "use strict";
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, n) => {
            "use strict";
            var r = n(609859),
                o = n(807400),
                i = n(396616),
                a = n(730895),
                l = n(824229),
                s = r.RegExp,
                c = s.prototype;
            o &&
                l(function () {
                    var e = !0;
                    try {
                        s(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        n = "",
                        r = e ? "dgimsy" : "gimsy",
                        o = function (e, r) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (n += r), !0;
                                },
                            });
                        },
                        i = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var a in (e && (i.hasIndices = "d"), i)) o(a, i[a]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r;
                }) &&
                i(c, "flags", { configurable: !0, get: a });
        },
        936386: (e) => {
            function t(e, t, n) {
                var r, o, i, a, l;
                function s() {
                    var c = Date.now() - a;
                    c < t && c >= 0 ? (r = setTimeout(s, t - c)) : ((r = null), n || ((l = e.apply(i, o)), (i = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (i = this), (o = arguments), (a = Date.now());
                    var c = n && !r;
                    return r || (r = setTimeout(s, t)), c && ((l = e.apply(i, o)), (i = o = null)), l;
                };
                return (
                    (c.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (c.flush = function () {
                        r && ((l = e.apply(i, o)), (i = o = null), clearTimeout(r), (r = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        452661: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var r = n(18198),
                o = {
                    centroidDimension: function (e, t, n, r) {
                        var i = e.touchBank,
                            a = 0,
                            l = 0,
                            s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== s) s.touchActive && s.currentTimeStamp > t && ((a += r && n ? s.currentPageX : r && !n ? s.currentPageY : !r && n ? s.previousPageX : s.previousPageY), (l = 1));
                        else
                            for (var c = 0; c < i.length; c++) {
                                var d = i[c];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    (a += r && n ? d.currentPageX : r && !n ? d.currentPageY : !r && n ? d.previousPageX : d.previousPageY), l++;
                                }
                            }
                        return l > 0 ? a / l : o.noCentroid;
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
            const i = o;
            var a = i.currentCentroidXOfTouchesChangedAfter,
                l = i.currentCentroidYOfTouchesChangedAfter,
                s = i.previousCentroidXOfTouchesChangedAfter,
                c = i.previousCentroidYOfTouchesChangedAfter,
                d = i.currentCentroidX,
                u = i.currentCentroidY,
                h = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = l(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            r = s(t, n),
                            o = a(t, n),
                            i = c(t, n),
                            d = l(t, n),
                            u = e.dx + (o - r),
                            h = e.dy + (d - i),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && h._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (h._updateGestureStateOnMove(n, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (o) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = d(o.touchHistory)),
                                    (n.y0 = u(o.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(o, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(o, n)
                                ),
                                onResponderReject(r) {
                                    m(t, e.onPanResponderReject, r, n);
                                },
                                onResponderRelease(r) {
                                    m(t, e.onPanResponderRelease, r, n), p(t), h._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (h._updateGestureStateOnMove(n, r), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(r) {
                                    var o = r.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), m(t, e.onPanResponderEnd, r, n);
                                },
                                onResponderTerminate(r) {
                                    m(t, e.onPanResponderTerminate, r, n), p(t), h._initializeGestureState(n);
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
            function m(e, t, n, o) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, o);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const v = h;
        },
        372612: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var r = n(133028),
                o = n(807896),
                i = n(231461),
                a = n(202784),
                l = n(890601),
                s = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const c = (e, t) => {
                var n;
                return "string" == typeof e ? "" + parseFloat(e) * t + e.match(s)[1] : ((n = e), !isNaN(parseFloat(n)) && isFinite(n) ? e * t : void 0);
            };
            var d = n(297689),
                u = n(325686),
                h = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                m = {},
                p = "0px 1px 3px rgba(0,0,0,0.5)",
                v = p + ", 0 0 0 10px rgba(0,0,0,0.1)",
                g = "#D5D5D5",
                f = "#BDBDBD",
                b = a.forwardRef((e, t) => {
                    var n = e["aria-label"],
                        r = e.accessibilityLabel,
                        s = e.activeThumbColor,
                        b = e.activeTrackColor,
                        C = e.disabled,
                        E = void 0 !== C && C,
                        w = e.onValueChange,
                        Z = e.style,
                        S = void 0 === Z ? m : Z,
                        x = e.thumbColor,
                        _ = e.trackColor,
                        R = e.value,
                        T = void 0 !== R && R,
                        k = (0, i.Z)(e, h),
                        P = a.useRef(null);
                    function D(e) {
                        var t = "focus" === e.nativeEvent.type ? v : p;
                        null != P.current && (P.current.style.boxShadow = t);
                    }
                    var z = d.Z.flatten(S),
                        M = z.height,
                        A = z.width,
                        H = M || "20px",
                        B = c(H, 2),
                        F = A > B ? A : B,
                        O = c(H, 0.5),
                        L = !0 === T ? (null != _ && "object" == typeof _ ? _.true : null != b ? b : "#A3D3CF") : null != _ && "object" == typeof _ ? _.false : null != _ ? _ : "#939393",
                        I = T ? (null != s ? s : "#009688") : null != x ? x : "#FAFAFA",
                        V = H,
                        N = V,
                        j = [y.root, S, E && y.cursorDefault, { height: H, width: F }],
                        U = !0 === T ? (("string" == typeof b && null != b) || ("object" == typeof _ && null != _ && _.true) ? L : g) : ("string" == typeof _ && null != _) || ("object" == typeof _ && null != _ && _.false) ? L : g,
                        W = !0 === T ? (null == s ? f : I) : null == x ? f : I,
                        Y = [y.track, { backgroundColor: E ? U : L, borderRadius: O }],
                        X = [y.thumb, T && y.thumbActive, { backgroundColor: E ? W : I, height: V, marginStart: T ? c(N, -1) : 0, width: N }],
                        G = (0, l.Z)("input", {
                            "aria-label": n || r,
                            checked: T,
                            disabled: E,
                            onBlur: D,
                            onChange: function (e) {
                                null != w && w(e.nativeEvent.target.checked);
                            },
                            onFocus: D,
                            ref: t,
                            style: [y.nativeControl, y.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return a.createElement(u.Z, (0, o.Z)({}, k, { style: j }), a.createElement(u.Z, { style: Y }), a.createElement(u.Z, { ref: P, style: X }), G);
                });
            b.displayName = "Switch";
            var y = d.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, r.Z)((0, r.Z)({ forcedColorAdjust: "none" }, d.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: p, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, r.Z)((0, r.Z)({}, d.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const C = b;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-6107ac1a.6ac4fc0a.js.map
