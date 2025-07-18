(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Dropdown"],
    {
        797553: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => R });
            var i = n(807896),
                o = n(202784),
                r = n(878052),
                s = n(325686),
                a = n(666536),
                l = n(815858),
                c = n(67877),
                d = n(743618),
                h = n(745153),
                p = n(666305),
                u = n(667115),
                m = n(175993),
                _ = n(365023),
                f = n(292627),
                v = n(224162),
                b = n(386802),
                w = n(537392),
                g = n(392237);
            const y = g.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: g.default.absoluteFillObject, mask: { ...g.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...g.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class R extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: n, ctrlKey: i, key: o, metaKey: r } = e;
                            !(n || i || r) && "Escape" === o && t();
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
                            p.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    p.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                n = this._contentNode.scrollWidth,
                                { left: i, top: o, width: r } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: s, width: a } = (0, w.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: h, width: p } = l,
                                u = a - r,
                                m = d - i,
                                _ = h - o,
                                f = d + p >= n,
                                v = h + c >= t,
                                b = a - d >= n,
                                g = s - h >= t,
                                y = a >= d + p / 2 + n / 2 && d >= n / 2 - p / 2,
                                R = this.props.preferredVerticalOrientation,
                                O = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                E = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: R, canOrientUp: v, canOrientDown: g }),
                                Z = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: i }) => ("center" === i && e ? "center" : !t || ("left" !== i && n) ? "right" : "left"))({ horizontalPreference: O, canOrientLeft: f, canOrientRight: b, canOrientCenter: y }),
                                N = this.props.isFixed ? d : m,
                                C = this.props.isFixed ? h : _,
                                D = "up" === E ? C + c - t : C;
                            let x = a - N - p - u;
                            "center" === Z && (x = a - N - p / 2 - n / 2 - u), "right" === Z && (x = a - N - n - u), this.setState({ top: Math.max(D, 0), right: x, verticalOrientation: E, horizontalOrientation: Z });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, a.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), r.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), r.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: r, disableMask: a, isFixed: c, onDismiss: p, preventFocusShift: R, withKeyboardNavigation: O } = this.props,
                        { right: E, top: Z, verticalOrientation: N } = this.state,
                        C = void 0 === Z,
                        D = O ? d.Z : o.Fragment,
                        x = `calc(100vh - ${Z || 0}px)`,
                        H = (d) => {
                            const h = "rtl" === d,
                                u = [y.content, C && y.contentInitialRender, c && [y.contentFixed, { maxHeight: x }], { top: Z, end: h ? void 0 : E, start: h ? E : void 0 }, r];
                            return o.createElement(
                                o.Fragment,
                                null,
                                a ? null : o.createElement(s.Z, { onClick: p, style: y.mask }),
                                o.createElement(s.Z, { ref: this._receiveBodyRectHelperRef, style: y.bodyRectHelper }),
                                o.createElement(w.ZP, null, ({ windowWidth: r }) => o.createElement(s.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [r < g.default.theme.breakpoints.medium ? y.rootNarrow : y.rootWide, u] }, C && "slide" === t ? n : o.createElement(l.Z, { animateMount: "up" !== N, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => o.createElement(_.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => o.createElement(s.Z, (0, i.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return o.createElement(
                        v.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            o.createElement(
                                s.Z,
                                { ref: this._receiveAnchorRef, style: y.anchor },
                                o.createElement(
                                    f.Z.Dropdown,
                                    null,
                                    o.createElement(m.Z.Consumer, null, (t) => o.createElement(b.Z.Consumer, null, ({ isModal: n }) => o.createElement(u.Z, { history: t, isModal: n, onDismiss: p }, R ? H(e) : o.createElement(h.Z, null, o.createElement(D, null, H(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            R.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
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
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var i = n(936386),
                o = n.n(i);
            const r = (e, t, n) => o()(e, t, n);
        },
        936386: (e) => {
            function t(e, t, n) {
                var i, o, r, s, a;
                function l() {
                    var c = Date.now() - s;
                    c < t && c >= 0 ? (i = setTimeout(l, t - c)) : ((i = null), n || ((a = e.apply(r, o)), (r = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (r = this), (o = arguments), (s = Date.now());
                    var c = n && !i;
                    return i || (i = setTimeout(l, t)), c && ((a = e.apply(r, o)), (r = o = null)), a;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((a = e.apply(r, o)), (r = o = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Dropdown.578394fa.js.map
