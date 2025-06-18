"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-bc6ccf4c"],
    {
        392027: (e, t, l) => {
            l.d(t, { Z: () => a });
            var r = l(202784),
                i = l(154003),
                o = l(392237);
            class s extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: l, disabled: o, href: s, icon: a, label: c, onPress: h, renderMenu: d, style: u, testID: p } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, l);
                    return r.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: o, icon: a, link: s, onPress: h, renderMenu: d, size: "xLarge", style: [n.root, !c && n.iconOnly, u], testID: p }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = o.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                a = s;
        },
        420412: (e, t, l) => {
            l.d(t, { Z: () => a });
            var r = l(202784),
                i = l(325686),
                o = l(235902),
                s = l(885015),
                n = l(392237);
            function a({ borderColor: e = "borderColor", isSlim: t = !1, label: l }) {
                const { isWebRedesign: a } = o.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return l ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(i.Z, { style: c.gapColumn }, r.createElement(i.Z, { style: [c.gap, h] })), r.createElement(i.Z, { style: c.gapText }, l), r.createElement(i.Z, { style: c.gapColumn }, r.createElement(i.Z, { style: [c.gap, h] }))) : r.createElement(i.Z, { style: [!t && c.root, a() && c.rootRedesign, c.gap, h] });
            }
            const c = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, l) => {
            l.d(t, { Z: () => c });
            var r = l(807896),
                i = l(202784),
                o = l(325686),
                s = l(392237);
            class n extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: l, ...s } = this.props,
                        n = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, a.column, l && a.withGutterColumn] }));
                    return i.createElement(o.Z, (0, r.Z)({ style: [t, a.root, l && a.withGutter] }, s), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const a = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = n;
        },
        149202: (e, t, l) => {
            l.d(t, { Z: () => b });
            var r = l(202784),
                i = l(928316),
                o = l(196001),
                s = l(900664),
                n = l(325686),
                a = l(111677),
                c = l.n(a),
                h = l(668430),
                d = l(323265),
                u = l(908579),
                p = l(167630),
                m = l(392237),
                g = l(401339);
            const v = c().gdd51574;
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._unmounted = !1),
                        (this._inPTR = !1),
                        (this._pullHeight = 0),
                        (this.state = { pull: 0, pullDistance: 0 }),
                        (this._onScroll = () => window.requestAnimationFrame(() => this._handleScroll())),
                        (this._getListViewRef = (e) => {
                            this._listView = e;
                        }),
                        (this._getPullViewRef = (e) => {
                            this._pullView = e;
                        }),
                        (this._enablePTRIfNeeded = () => {
                            if (!this._unmounted) {
                                this._getScrollTop() <= 0 && this._enablePTR();
                            }
                        }),
                        (this._handleTouchStart = (e) => {
                            this._pullInfo.startY = e.touches[0].clientY;
                        }),
                        (this._handleTouchMove = (e) => {
                            if ("number" != typeof this._pullInfo.startY || e.defaultPrevented) return;
                            const t = e.touches[0].clientY,
                                l = Math.round(0.4 * (t - this._pullInfo.startY));
                            (l <= 0 && 0 === this.state.pullDistance) || (l > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(l), this._updatePullState(this.state.pullDistance, l), this.setState({ pullDistance: l }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: l } = this.state,
                        i = t && l ? r.createElement(p.Z, null) : r.createElement(h.default, { "aria-label": v, style: [_.refreshArrow, 1 === this.state.pull ? _.refreshArrowReady : null] }),
                        s = { pullDistance: (0, o.ST)(l, o.um.stiff) };
                    return r.createElement(
                        n.Z,
                        { style: _.root },
                        r.createElement(o.y_, { style: s }, ({ pullDistance: t }) => r.createElement(n.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, r.createElement(n.Z, { ref: this._getPullViewRef, style: _.ptrCell }, i), r.createElement(n.Z, { style: t ? _.children : void 0 }, e))),
                    );
                }
                componentDidMount() {
                    (this._unmounted = !1), this._pullView && (this._pullHeight = this._pullView.getBoundingClientRect().height), this._listView instanceof HTMLElement && (this._listParent = this._listView);
                    const e = this._getScrollParent();
                    e && e.addEventListener("scroll", this._onScroll), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded);
                }
                componentWillUnmount() {
                    this._unmounted = !0;
                    const e = this._getScrollParent();
                    e && e.removeEventListener("scroll", this._onScroll);
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.isRefreshing && !e.isRefreshing && (this._disablePTR(), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded));
                }
                _getScrollParent() {
                    return (this._scrollParent = this._scrollParent || (0, u.r)(i.findDOMNode(this))), this._scrollParent;
                }
                _getScrollTop() {
                    const e = this._getScrollParent();
                    return e ? (0, u.c)(e) : 0;
                }
                _enablePTR() {
                    if (!this._inPTR) {
                        this._inPTR = !0;
                        const e = this._listParent;
                        e && (e.addEventListener("touchend", this._handleTouchEnd), e.addEventListener("touchmove", this._handleTouchMove), e.addEventListener("touchstart", this._handleTouchStart, { passive: !0 }), (e.style.overflow = "visible"));
                    }
                }
                _disablePTR() {
                    if (((this._pullInfo.moved = !1), this._inPTR)) {
                        (this._inPTR = !1), this.setState({ pull: 0, pullDistance: 0 });
                        const e = this._listParent;
                        e && (e.removeEventListener("touchend", this._handleTouchEnd), e.removeEventListener("touchmove", this._handleTouchMove), e.removeEventListener("touchstart", this._handleTouchStart));
                    }
                }
                _updatePullState(e, t) {
                    const { lastPull: l } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (d.ZP.isFirefox() || s.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < l && 1 === this.state.pull && this.setState({ pull: 0 });
                }
                _updatePullPosition(e) {
                    (this._pullInfo.moved = !0), this.setState({ pullDistance: e });
                }
                _release() {
                    this.state.pullDistance > this._pullHeight && (this._disablePTR(), this.props.isRefreshing || this.props.onRefresh(), this.setState({ pullDistance: this._pullHeight })), this.setState({ pull: 0 });
                }
                _handleScroll() {
                    this._getScrollTop() <= 0 ? this._enablePTR() : this._disablePTR();
                }
                _resetPullInfo() {
                    (this._pullInfo = { lastPull: 0, moved: !1, startY: null }), this.setState({ pullDistance: 0 });
                }
            }
            const _ = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                b = function ({ canRefresh: e = !0, children: t, isRefreshing: l = !1, onRefresh: i }) {
                    return g.Z.isTouchSupported() && e
                        ? r.createElement(f, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: l,
                              onRefresh: () => {
                                  i();
                              },
                          })
                        : Array.isArray(t)
                          ? r.createElement(r.Fragment, null, t)
                          : t;
                };
        },
        355586: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        376180: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M9.338 22.67C3.446 21.202-.141 15.234 1.33 9.34 2.798 3.447 8.767-.14 14.66 1.33c5.894 1.468 9.48 7.438 8.01 13.331-1.469 5.893-7.438 9.48-13.332 8.01zm4.959-19.885c5.09 1.268 8.187 6.424 6.918 11.513-1.269 5.089-6.424 8.186-11.514 6.917-5.088-1.269-8.186-6.423-6.916-11.512 1.268-5.09 6.423-8.187 11.512-6.918zm.133 4.873c1.523.524 2.638 1.311 2.419 2.775-.159 1.071-.753 1.59-1.541 1.772 1.083.564 1.634 1.428 1.109 2.927-.652 1.861-2.2 2.019-4.257 1.629l-.5 2.002-1.207-.301.493-1.975c-.313-.078-.632-.16-.961-.25l-.495 1.985-1.206-.301.5-2.006c-.113-.028-.226-.058-.34-.088-.172-.044-.345-.09-.52-.134l-1.571-.391.599-1.382s.89.237.877.22c.342.084.493-.139.553-.287l.79-3.165.086.022.041.01c-.048-.02-.092-.032-.125-.04l.563-2.259c.014-.256-.074-.58-.563-.702.02-.013-.876-.218-.876-.218l.32-1.289 1.665.416-.001.006c.25.062.508.121.77.181l.495-1.982 1.206.3-.484 1.944c.323.074.65.148.967.228l.48-1.93 1.208.3-.494 1.983zm-3.818 7.188c.985.26 3.137.829 3.48-.546.35-1.406-1.738-1.875-2.756-2.103-.114-.026-.214-.048-.296-.069l-.663 2.657.235.061zm.929-3.882c.82.22 2.612.697 2.924-.553.318-1.278-1.422-1.663-2.273-1.851-.095-.022-.18-.04-.248-.057l-.601 2.41c.056.013.123.031.198.051z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        913315: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        668430: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13 3v13.59l5.043-5.05 1.414 1.42L12 20.41l-7.457-7.45 1.414-1.42L11 16.59V3h2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        98440: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        226597: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        155353: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        707305: (e, t, l) => {
            l.r(t), l.d(t, { default: () => a });
            var r = l(202784),
                i = l(890601),
                o = l(783427),
                s = l(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.1 4c.62 1.02.9 2.072.9 3.4 0 4.235-3.629 9.737-6.574 13.6H6.698L4 4.927l5.89-.557 1.427 11.437c1.333-2.163 2.978-5.563 2.978-7.88 0-1.27-.218-2.134-.56-2.845L19.1 4z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const a = n;
        },
        465233: (e, t, l) => {
            l.d(t, { Z: () => i });
            var r = l(716406);
            function i(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(i) : (0, r.Z)(e, (e) => i(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-bc6ccf4c.1ae6d0fa.js.map
