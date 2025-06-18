(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-6107ac1a", "ondemand.Dropdown"],
    {
        797553: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => Z });
            var i = n(807896),
                r = n(202784),
                o = n(878052),
                a = n(325686),
                s = n(666536),
                l = n(815858),
                c = n(67877),
                d = n(743618),
                u = n(745153),
                h = n(666305),
                p = n(667115),
                m = n(175993),
                f = n(365023),
                g = n(292627),
                v = n(224162),
                b = n(386802),
                w = n(537392),
                y = n(392237);
            const _ = y.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: y.default.absoluteFillObject, mask: { ...y.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...y.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class Z extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: n, ctrlKey: i, key: r, metaKey: o } = e;
                            !(n || i || o) && "Escape" === r && t();
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
                                { left: i, top: r, width: o } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: s } = (0, w.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: u, width: h } = l,
                                p = s - o,
                                m = d - i,
                                f = u - r,
                                g = d + h >= n,
                                v = u + c >= t,
                                b = s - d >= n,
                                y = a - u >= t,
                                _ = s >= d + h / 2 + n / 2 && d >= n / 2 - h / 2,
                                Z = this.props.preferredVerticalOrientation,
                                E = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                x = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: Z, canOrientUp: v, canOrientDown: y }),
                                R = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: i }) => ("center" === i && e ? "center" : !t || ("left" !== i && n) ? "right" : "left"))({ horizontalPreference: E, canOrientLeft: g, canOrientRight: b, canOrientCenter: _ }),
                                D = this.props.isFixed ? d : m,
                                C = this.props.isFixed ? u : f,
                                M = "up" === x ? C + c - t : C;
                            let O = s - D - h - p;
                            "center" === R && (O = s - D - h / 2 - n / 2 - p), "right" === R && (O = s - D - n - p), this.setState({ top: Math.max(M, 0), right: O, verticalOrientation: x, horizontalOrientation: R });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, s.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), o.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), o.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: o, disableMask: s, isFixed: c, onDismiss: h, preventFocusShift: Z, withKeyboardNavigation: E } = this.props,
                        { right: x, top: R, verticalOrientation: D } = this.state,
                        C = void 0 === R,
                        M = E ? d.Z : r.Fragment,
                        O = `calc(100vh - ${R || 0}px)`,
                        T = (d) => {
                            const u = "rtl" === d,
                                p = [_.content, C && _.contentInitialRender, c && [_.contentFixed, { maxHeight: O }], { top: R, end: u ? void 0 : x, start: u ? x : void 0 }, o];
                            return r.createElement(
                                r.Fragment,
                                null,
                                s ? null : r.createElement(a.Z, { onClick: h, style: _.mask }),
                                r.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: _.bodyRectHelper }),
                                r.createElement(w.ZP, null, ({ windowWidth: o }) => r.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? _.rootNarrow : _.rootWide, p] }, C && "slide" === t ? n : r.createElement(l.Z, { animateMount: "up" !== D, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => r.createElement(f.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => r.createElement(a.Z, (0, i.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return r.createElement(
                        v.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            r.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: _.anchor },
                                r.createElement(
                                    g.Z.Dropdown,
                                    null,
                                    r.createElement(m.Z.Consumer, null, (t) => r.createElement(b.Z.Consumer, null, ({ isModal: n }) => r.createElement(p.Z, { history: t, isModal: n, onDismiss: h }, Z ? T(e) : r.createElement(u.Z, null, r.createElement(M, null, T(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            Z.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var i = n(202784),
                r = n(476984),
                o = n.n(r),
                a = n(143778),
                s = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends i.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: o, loadingMessage: a, onRequestRetry: d, render: p, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? i.createElement(s.Z, { icon: o, onRequestRetry: d, retryMessage: f }) : n ? i.createElement(l.m, { failureMessage: n }) : m();
                        case u:
                            return i.createElement(l.J, { "aria-label": e, color: t, loadingMessage: a });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        247056: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(111677),
                o = n.n(r),
                a = n(149170),
                s = n(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = a.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: h, testID: p, withDarkBackground: m = !1 }) {
                const f = i.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = i.useMemo(() => ({ label: t }), [t]);
                return i.createElement(s.ZP, { Icon: n, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: o, onPress: f, preventFocusShift: d, renderMenu: u, style: h, testID: p });
            };
        },
        30183: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i = n(202784),
                r = n(731708),
                o = n(952428);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: n, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return i.createElement(o.Z, { link: t, onPress: n, style: [a.root, c && a.withBottomRadius], withDarkerInteractiveBackground: d }, i.createElement(r.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
        280278: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => f });
            var i = n(202784),
                r = n(325686),
                o = n(827515),
                a = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const i = (0, o.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                m = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [f, g] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        v = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (v.current = !0),
                                function () {
                                    v.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (v.current)
                                if (a.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, o.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            v.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              v.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        i.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !a.Z.reducedMotionEnabled,
                                o = !f.animating && f.oldText && !a.Z.reducedMotionEnabled,
                                l = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return i.createElement(
                                r.Z,
                                { style: [m.root, n] },
                                t ? i.createElement("span", { style: l }, i.createElement(s.ZP, d, f.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(v.current, g),
                                        style: c,
                                    },
                                    i.createElement(s.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, v, g])
                    );
                };
        },
        67877: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            const i = (e, t) => {
                let n = null;
                const i = () => {
                    (n = null), e();
                };
                return () => (n || (n = t(i)), n);
            };
        },
        98440: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        465233: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var i = n(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, i.Z)(e, (e) => r(e));
            }
        },
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(936386),
                r = n.n(i);
            const o = (e, t, n) => r()(e, t, n);
        },
        936386: (e) => {
            function t(e, t, n) {
                var i, r, o, a, s;
                function l() {
                    var c = Date.now() - a;
                    c < t && c >= 0 ? (i = setTimeout(l, t - c)) : ((i = null), n || ((s = e.apply(o, r)), (o = r = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (o = this), (r = arguments), (a = Date.now());
                    var c = n && !i;
                    return i || (i = setTimeout(l, t)), c && ((s = e.apply(o, r)), (o = r = null)), s;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((s = e.apply(o, r)), (o = r = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-6107ac1a.83aa4e7a.js.map
