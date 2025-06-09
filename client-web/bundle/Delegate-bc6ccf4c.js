"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-bc6ccf4c", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const h = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(a.Z, { style: d.container }, o.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: h, style: d.root }), o.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(476984),
                a = n.n(o),
                i = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: a, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? r.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(235902),
                i = n(885015),
                l = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return n ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(392237);
            class l extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        l = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return o.createElement(a.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, i), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
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
            n.d(t, { ZP: () => f });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(111677),
                l = n.n(i),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                h = n(173739);
            const p = l().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, l] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: g.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: g.slider },
                            r.createElement(h.Z, {
                                "aria-label": p,
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
            const g = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [h, p] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((o) => {
                                if (o && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = o.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof l && l(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, C.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && h && r.createElement(m, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    r.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const C = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(149170),
                l = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: h, testID: p, withDarkBackground: m = !1 }) {
                const g = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: f, iconSize: o, isDisabled: a, onPress: g, preventFocusShift: d, renderMenu: u, style: h, testID: p });
            };
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                o = n(325686),
                a = n(913973),
                i = n(731708),
                l = n(950822),
                s = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                h = n(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: p, label: g, name: f, testID: b } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = n ? y : C;
                    return r.createElement(s.Z, { disabled: u }, (s) => r.createElement(o.Z, { role: "label", style: [m.root, !u && m.interactive], testID: b }, r.createElement(o.Z, { style: m.topContainer }, r.createElement(i.ZP, { id: this.labelId }, g), r.createElement(o.Z, { style: m.radioContainer }, r.createElement(d.Z, { interactiveStyles: E, interactivityState: s, style: m.radioBackground }, r.createElement(o.Z, { style: [m.circle, n && m.circleActive, u && m.circleDisabled, n && u && m.circleCheckedAndDisabled] }, n ? r.createElement(a.default, { style: m.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: f, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? r.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
                f = "radioGroup";
            let b = 1;
            class y extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${b}_LABEL`),
                        (b += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: a, name: l, options: s, value: c } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: n && C.disabled, testID: `${f}${l}` },
                        a ? r.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, r.createElement(i.ZP, { style: C.label, weight: "bold" }, a), t ? r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        80512: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                o = n(325686),
                a = n(815858),
                i = n(731708),
                l = n(449479),
                s = n(392237),
                c = n(451566);
            let d = 1;
            class u extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: r, options: o, value: a } = this.props;
                            r(t, a === n ? e?.value || o[0].value : n);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: s, name: d, offValue: u, onChange: p, options: m, value: g } = this.props;
                    return r.createElement(o.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [h.root, n && h.disabled] }, r.createElement(r.Fragment, null, s ? r.createElement(o.Z, { id: this._labelId, role: "label", style: h.header }, r.createElement(o.Z, { style: h.label }, r.createElement(i.ZP, { weight: "bold" }, s), r.createElement(c.Z, { disabled: n, onValueChange: this._handleGateToggle, value: g !== u })), t ? r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && r.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, r.createElement(o.Z, null, r.createElement(o.Z, { style: h.radioGroup, tabIndex: 0 }, r.createElement(l.Z, { "aria-label": e || s, disabled: n, name: d, onChange: p, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const h = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [g, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                if (i.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = h[g.transitionDirection],
                                t = g.oldText && !i.Z.reducedMotionEnabled,
                                a = !g.animating && g.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(g.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [m.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, g.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, f),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, b, f])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => v });
            var r = n(202784),
                o = n(325686),
                a = n(461756),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                h = n(551611),
                p = n(111677),
                m = n.n(p),
                g = n(891198),
                f = n(537392),
                b = n(280278);
            const y = m().e8d93005,
                C = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                E = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return r.createElement(f.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [C.count, ((a = o), a < u.default.theme.breakpoints.small && C.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? y(t) : n) : void 0);
                        var a;
                    });
                };
            class v extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: s }) => r.createElement(i.ZP, { color: e ? n : a, dir: s, style: [w.inner, e && "blue500" === n && w.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                h = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                p = d && i && !e?.isHovered;
                            return r.createElement(s.Z, { hoverLabel: o, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, x[p ? "haloBackground" : n], !c && w.iconBackground, "small" === a && w.iconSmallBoundingBox, p && w.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: i, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: p, transitionAnimationUrl: m } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && p) return r.createElement(d.ZP, { animation: m || h.Bf, animationContainerStyle: Z[t], animationStyle: _, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [Z[t], !o && i && w.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(E, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: l, isPresentational: c, keyboardShortcut: h, link: p, preventFocusShift: m, renderMenu: g, renderWrapper: f = r.Fragment, style: b, testID: y } = this.props,
                        C = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [w.root, b] },
                        r.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : r.createElement(s.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: p, onClick: this._handlePress, preventFocusShift: m, renderMenu: g, style: [w.triggerAreaRoot, w.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = i || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        C ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            v.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const Z = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                x = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                w = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                _ = { width: k, height: k };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => o, ZP: () => i });
            var r = n(941978);
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends r.C {
                check(e) {
                    return super.check(e ?? o);
                }
            }
            const i = new a();
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(717683),
                l = n(347101);
            const s = (e = {}) => {
                const t = r.useContext(i.Z),
                    { direction: n } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const a = t ? t(r, o, e) : !!r;
                        return a && n[0].push(r), !a && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-bc6ccf4c.3cb39b3a.js.map
