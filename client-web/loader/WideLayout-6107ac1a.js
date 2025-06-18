(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-6107ac1a", "ondemand.Dropdown", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        797553: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => Z });
            var n = i(807896),
                r = i(202784),
                o = i(878052),
                a = i(325686),
                s = i(666536),
                l = i(815858),
                c = i(67877),
                d = i(743618),
                h = i(745153),
                u = i(666305),
                p = i(667115),
                m = i(175993),
                v = i(365023),
                g = i(292627),
                f = i(224162),
                b = i(386802),
                w = i(537392),
                y = i(392237);
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
                                { altKey: i, ctrlKey: n, key: r, metaKey: o } = e;
                            !(i || n || o) && "Escape" === r && t();
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
                                i = this._contentNode.scrollWidth,
                                { left: n, top: r, width: o } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: s } = (0, w.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: h, width: u } = l,
                                p = s - o,
                                m = d - n,
                                v = h - r,
                                g = d + u >= i,
                                f = h + c >= t,
                                b = s - d >= i,
                                y = a - h >= t,
                                _ = s >= d + u / 2 + i / 2 && d >= i / 2 - u / 2,
                                Z = this.props.preferredVerticalOrientation,
                                E = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                R = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: i }) => ((t && e) || (!t && !e) ? i : t ? "up" : "down"))({ verticalPreference: Z, canOrientUp: f, canOrientDown: y }),
                                D = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: i, horizontalPreference: n }) => ("center" === n && e ? "center" : !t || ("left" !== n && i) ? "right" : "left"))({ horizontalPreference: E, canOrientLeft: g, canOrientRight: b, canOrientCenter: _ }),
                                C = this.props.isFixed ? d : m,
                                z = this.props.isFixed ? h : v,
                                x = "up" === R ? z + c - t : z;
                            let M = s - C - u - p;
                            "center" === D && (M = s - C - u / 2 - i / 2 - p), "right" === D && (M = s - C - i - p), this.setState({ top: Math.max(x, 0), right: M, verticalOrientation: R, horizontalOrientation: D });
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
                    const { animateInDuration: e, animateType: t, children: i, contentStyle: o, disableMask: s, isFixed: c, onDismiss: u, preventFocusShift: Z, withKeyboardNavigation: E } = this.props,
                        { right: R, top: D, verticalOrientation: C } = this.state,
                        z = void 0 === D,
                        x = E ? d.Z : r.Fragment,
                        M = `calc(100vh - ${D || 0}px)`,
                        O = (d) => {
                            const h = "rtl" === d,
                                p = [_.content, z && _.contentInitialRender, c && [_.contentFixed, { maxHeight: M }], { top: D, end: h ? void 0 : R, start: h ? R : void 0 }, o];
                            return r.createElement(
                                r.Fragment,
                                null,
                                s ? null : r.createElement(a.Z, { onClick: u, style: _.mask }),
                                r.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: _.bodyRectHelper }),
                                r.createElement(w.ZP, null, ({ windowWidth: o }) => r.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? _.rootNarrow : _.rootWide, p] }, z && "slide" === t ? i : r.createElement(l.Z, { animateMount: "up" !== C, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => r.createElement(v.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => r.createElement(a.Z, (0, n.Z)({ ref: e() }, t({})), i))))),
                            );
                        };
                    return r.createElement(
                        f.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            r.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: _.anchor },
                                r.createElement(
                                    g.Z.Dropdown,
                                    null,
                                    r.createElement(m.Z.Consumer, null, (t) => r.createElement(b.Z.Consumer, null, ({ isModal: i }) => r.createElement(p.Z, { history: t, isModal: i, onDismiss: u }, Z ? O(e) : r.createElement(h.Z, null, r.createElement(x, null, O(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            Z.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        879113: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => p });
            var n = i(202784),
                r = i(476984),
                o = i.n(r),
                a = i(143778),
                s = i(750410),
                l = i(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        i = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !i) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: i, fetchStatus: r, icon: o, loadingMessage: a, onRequestRetry: d, render: p, renderFailure: m, retryMessage: v, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? n.createElement(s.Z, { icon: o, onRequestRetry: d, retryMessage: v }) : i ? n.createElement(l.m, { failureMessage: i }) : m();
                        case h:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: a });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        247056: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(202784),
                r = i(111677),
                o = i.n(r),
                a = i(149170),
                s = i(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: i = a.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: h, style: u, testID: p, withDarkBackground: m = !1 }) {
                const v = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(s.ZP, { Icon: i, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: o, onPress: v, preventFocusShift: d, renderMenu: h, style: u, testID: p });
            };
        },
        30183: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            var n = i(202784),
                r = i(731708),
                o = i(952428);
            const a = i(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: i, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return n.createElement(o.Z, { link: t, onPress: i, style: [a.root, c && a.withBottomRadius], withDarkerInteractiveBackground: d }, n.createElement(r.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
        67877: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = (e, t) => {
                let i = null;
                const n = () => {
                    (i = null), e();
                };
                return () => (i || (i = t(n)), i);
            };
        },
        246492: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        264171: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        262009: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        465233: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            var n = i(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
        666536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var n = i(936386),
                r = i.n(n);
            const o = (e, t, i) => r()(e, t, i);
        },
        936386: (e) => {
            function t(e, t, i) {
                var n, r, o, a, s;
                function l() {
                    var c = Date.now() - a;
                    c < t && c >= 0 ? (n = setTimeout(l, t - c)) : ((n = null), i || ((s = e.apply(o, r)), (o = r = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (o = this), (r = arguments), (a = Date.now());
                    var c = i && !n;
                    return n || (n = setTimeout(l, t)), c && ((s = e.apply(o, r)), (o = r = null)), s;
                };
                return (
                    (c.clear = function () {
                        n && (clearTimeout(n), (n = null));
                    }),
                    (c.flush = function () {
                        n && ((s = e.apply(o, r)), (o = r = null), clearTimeout(n), (n = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-6107ac1a.3bcb414a.js.map
