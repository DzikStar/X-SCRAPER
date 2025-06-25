(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"],
    {
        521812: (t, e, n) => {
            "use strict";
            n.d(e, { Nr: () => k, ZP: () => C });
            var i = n(202784),
                r = n(325686),
                a = n(111677),
                s = n.n(a),
                o = n(894966),
                l = n(568320),
                u = n(516951),
                c = n(614983),
                d = n.n(c),
                f = n(196001),
                h = n(184605),
                p = n(461756),
                m = n(224162),
                y = n(392237),
                v = n(401339),
                g = n(933895);
            const _ = { stiffness: 267, damping: 20 };
            class b extends i.PureComponent {
                constructor(t, e) {
                    super(t, e),
                        (this._handleResize = () => {
                            window.requestAnimationFrame(() => window.requestAnimationFrame(() => this._setDimensions(!0)));
                        }),
                        (this._handleLayout = () => {
                            this._setDimensions(!0);
                        }),
                        (this._handleUpdatingParentAspectRatio = (t) => {
                            const { itemWidth: e } = this.state,
                                { setParentAspectRatio: n } = this.props;
                            if (n) {
                                const { height: i } = t.nativeEvent.layout;
                                n(e / i);
                            }
                        }),
                        (this._shouldRenderItem = (t) => {
                            const { shouldRenderAll: e } = this.props,
                                { currentItem: n, itemsToShow: i } = this.state,
                                r = n + 2 * Math.ceil(i);
                            return t <= n || t < r || !!e;
                        }),
                        (this._handleKeyPress = (t) => {
                            this.props.locked || (39 === t.keyCode ? this._handleKeyRight(t) : 37 === t.keyCode && this._handleKeyLeft(t));
                        }),
                        (this._handleKeyRight = (t) => {
                            t && t.stopPropagation(), this._goToItem(this.state.currentItem + (this._isRTL() ? -1 : 1));
                        }),
                        (this._handleKeyLeft = (t) => {
                            t && t.stopPropagation(), this._goToItem(this.state.currentItem - (this._isRTL() ? -1 : 1));
                        }),
                        (this._handleTouchStart = (t) => {
                            if (t.touches && t.touches.length > 1) return;
                            const e = t.changedTouches[0].clientX;
                            this._handleSwipeStart(t, e);
                        }),
                        (this._handleTouchMove = (t) => {
                            if (t.touches && t.touches.length > 1) return;
                            const e = t.changedTouches[0].clientX;
                            this._handleSwipeMove(t, e);
                        }),
                        (this._handleTouchEnd = (t) => {
                            const e = t.changedTouches[0].clientX;
                            this._handleSwipeEnd(t, e);
                        }),
                        (this._handleSwipeStart = (t, e) => {
                            this.props.locked || (t.preventDefault(), (this._xPos = e), (this._swipeStart = Date.now()), (this._isSwiping = !1));
                        }),
                        (this._handleSwipeMove = (t, e) => {
                            if (this.props.locked || null == this._xPos) return;
                            const n = this._xPos - e;
                            Math.abs(n) < 10 ||
                                (t.preventDefault(),
                                this.setState((t) => {
                                    if ("number" == typeof t.itemWidth) return { disableAnimation: !1, transformLeft: (this._isRTL() ? 1 : -1) * t.itemWidth * t.currentItem - n };
                                }),
                                (this._isSwiping = !0));
                        }),
                        (this._handleSwipeEnd = (t, e) => {
                            const { currentItem: n, itemWidth: i } = this.state;
                            if (!this._isSwiping || "number" != typeof this._xPos || "number" != typeof i || "number" != typeof this._swipeStart) return (this._isSwiping = !1), void (this._xPos = null);
                            t.preventDefault();
                            const r = (this._xPos || 0) - e,
                                a = Math.abs(r),
                                s = a / (Date.now() - (this._swipeStart || 0));
                            a > i / 3 || s > 0.6 ? this._goToItem(n + (this._isRTL() ? -1 : 1) * Math.sign(r)) : this._goToItem(n), (this._isSwiping = !1), (this._xPos = null);
                        }),
                        (this._handleOnRest = () => {
                            const { onRest: t } = this.props,
                                { currentItem: e } = this.state;
                            t && t(e);
                        }),
                        (this._transitionComplete = () => {
                            const { onChange: t } = this.props,
                                { currentItem: e, direction: n } = this.state;
                            t(e, n), this._animationDisabled() && this._handleOnRest();
                        }),
                        (this._setDimensions = (t = !1) => {
                            const { itemWidth: e, itemsToShow: n } = this.props,
                                i = !e && n ? this._getFrameOffsetWidth() / n : e,
                                r = e ? this._getFrameOffsetWidth() / e : n || 1;
                            "number" == typeof i &&
                                this.setState({ itemWidth: i, itemsToShow: r }, () => {
                                    this.setState((e) => ({ areDimensionsSet: !0, disableAnimation: t, transformLeft: this._getLeftForItem(e.currentItem, i) }));
                                });
                        }),
                        (this._setSwipeableNode = (t) => {
                            this._swipeableNode = t;
                        }),
                        (this._animationDisabled = () => (p.Z.reducedMotionEnabled && !this._isSwiping) || this.state.disableAnimation),
                        (this._isRTL = () => {
                            const { direction: t } = this.context;
                            return "rtl" === t;
                        });
                    const { itemWidth: n, itemsToShow: i } = this.props;
                    this._checkComponentPropsUsageCorrectness(i, n), (this.state = { disableAnimation: !1, areDimensionsSet: !1, currentItem: t.currentItem, transformLeft: 0, ...(n ? { itemsToShow: 0, itemWidth: n } : { itemWidth: 0, itemsToShow: i || 1 }) }), (this._springOptions = v.Z.isTouchSupported() ? _ : f.um.noWobble), (this._isSwiping = !1), (this._xPos = null);
                }
                componentDidMount() {
                    this._setDimensions(), window.addEventListener("resize", this._handleResize), this.props.disabledKeyboardNavigation || window.document.addEventListener("keydown", this._handleKeyPress), this._swipeableNode && (this._removeTouchListener = (0, g.O)(this._swipeableNode, this._handleTouchMove, !1));
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this._handleResize), this._removeTouchListener && this._removeTouchListener(), window.document.removeEventListener("keydown", this._handleKeyPress);
                }
                UNSAFE_componentWillReceiveProps(t) {
                    t.currentItem !== this.props.currentItem && t.currentItem !== this.state.currentItem && this._goToItem(t.currentItem, !0);
                }
                componentDidUpdate(t) {
                    const { disabledKeyboardNavigation: e, itemWidth: n, itemsToShow: i } = this.props;
                    this._checkComponentPropsUsageCorrectness(i, n), t.disabledKeyboardNavigation !== e && (e ? window.document.removeEventListener("keydown", this._handleKeyPress) : window.document.addEventListener("keydown", this._handleKeyPress));
                }
                render() {
                    const { cellSpacing: t, children: e, setParentAspectRatio: n, style: a } = this.props,
                        s = i.Children.count(e),
                        o = t * s,
                        { itemWidth: l, transformLeft: u } = this.state,
                        c = { transformLeft: this._animationDisabled() ? u : (0, f.ST)(u, this._springOptions) },
                        d = this._renderItems(e);
                    return i.createElement(r.Z, { onLayout: this._handleLayout, onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setSwipeableNode, style: [S.root, a] }, this.state.areDimensionsSet ? i.createElement(f.y_, { onRest: this._handleOnRest, style: c }, ({ transformLeft: e }) => i.createElement(i.Fragment, null, i.createElement(r.Z, { onLayout: this._handleUpdatingParentAspectRatio, role: "list", style: [S.list, n && S.autoHeight, { marginStart: -0.5 * t, marginEnd: -0.5 * t, transform: [{ translate3d: `${e}px, 0, 0` }], width: l && s ? `${l * s + o}px` : "100%" }] }, d))) : null);
                }
                _renderItems(t) {
                    const { cellSpacing: e, fullHeightItems: n } = this.props,
                        { itemWidth: a } = this.state;
                    return i.Children.toArray(i.Children.map(t, (t, s) => i.createElement(r.Z, { role: "listitem", style: [S.item, { width: a ? `${a}px` : "100%", marginStart: e / 2 + "px", marginEnd: e / 2 + "px" }, n && S.fullHeightItem] }, this._shouldRenderItem(s) ? t : null)));
                }
                _goToItem(t, e) {
                    const { currentItem: n, itemWidth: r } = this.state,
                        { children: a } = this.props;
                    let s = t;
                    const o = s > n ? "next" : "prev";
                    (t < 0 || t >= i.Children.count(a)) && (s = n), "number" == typeof r && this.setState({ disableAnimation: !1, currentItem: s, transformLeft: this._getLeftForItem(s, r), direction: o }, n === s || e ? u.Z : this._transitionComplete);
                }
                _getLeftForItem(t, e) {
                    return (e * t + this.props.cellSpacing * t) * (this._isRTL() ? 1 : -1);
                }
                _getFrameOffsetWidth() {
                    const t = this._swipeableNode;
                    return t && t instanceof window.HTMLElement ? t.offsetWidth : 0;
                }
                _checkComponentPropsUsageCorrectness(t, e) {
                    const n = !t && (0, h.Z)(e),
                        i = !e && (0, h.Z)(t),
                        r = !e && !t;
                    d()(n || i || r, "Requires itemsToShow OR itemWidth, both cannot be set");
                }
                getItemsToShow() {
                    return this.state.itemsToShow;
                }
                getItemWidth() {
                    return this.state.itemWidth;
                }
                goToNextItem() {
                    this._goToItem(this.state.currentItem + Math.max(Math.floor(this.state.itemsToShow), 1));
                }
                goToPreviousItem() {
                    const t = this.state.currentItem - Math.max(Math.floor(this.state.itemsToShow), 1);
                    this._goToItem(t >= 0 ? t : 0);
                }
            }
            (b.contextType = m.ZP), (b.defaultProps = { cellSpacing: 0, currentItem: 0, disabledKeyboardNavigation: !1, locked: !1, onChange: u.Z, shouldRenderAll: !1 });
            const S = y.default.create((t) => ({ root: { flexGrow: 1, transform: [{ translate3d: "0,0,0" }] }, list: { height: "100%", padding: "0", position: "absolute", transform: [{ translate3d: "0,0,0" }], display: "flex", flexDirection: "row" }, item: { boxSizing: "border-box", display: "inline-flex", flexDirection: "column", height: "100%", marginVertical: "auto" }, autoHeight: { height: "auto" }, fullHeightItem: { height: "auto", marginVertical: 0 } }));
            var w = n(731708),
                I = n(154003),
                T = n(840065),
                P = n(530732);
            const R = s().d70740da,
                O = s().c4d53ba2,
                x = s().h6405c17,
                k = Object.freeze({ navButtons: "navigationButtons", carouselRoot: "carouselRoot" });
            class C extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._nextButtonRef = i.createRef()),
                        (this._prevButtonRef = i.createRef()),
                        (this._swipeableRef = i.createRef()),
                        (this._rootRef = i.createRef()),
                        (this._enableAccessibilityAlert = !1),
                        (this.state = { navButtonHeight: 0 }),
                        (this._handleChange = (t, e) => {
                            const { onChange: n } = this.props;
                            (this._enableAccessibilityAlert = !0), n(t, e), this._handleFocus(t, e);
                        }),
                        (this._handleNavButtonHeightChange = (t) => {
                            this.setState({ navButtonHeight: t.nativeEvent.layout.height });
                        }),
                        (this._getNavigationOffset = () => {
                            const { navigationOffsetValue: t } = this.props,
                                { navButtonHeight: e } = this.state;
                            if (void 0 === t) return 0;
                            const n = t - e / 2;
                            return n < 0 ? 0 : n;
                        }),
                        (this._handleNextSlide = (t) => {
                            t.stopPropagation(), this._swipeableRef.current && this._swipeableRef.current.goToNextItem();
                        }),
                        (this._handlePreviousSlide = (t) => {
                            t.stopPropagation(), this._swipeableRef.current && this._swipeableRef.current.goToPreviousItem();
                        });
                }
                render() {
                    const { cellSpacing: t, childContainerStyle: e, childWidth: n, children: r, currentSlide: a, fullHeightSlides: s, locked: o, onRest: l, receivesFocusOnChange: u, setParentAspectRatio: c, shouldAlwaysEnableKeyboardNavigation: d, shouldRenderAll: f, slidesToShow: h, transitionAccessibilityLabel: p } = this.props,
                        m = i.Children.count(r),
                        g = x({ currentSlide: a + 1, itemCount: m }),
                        _ = p || g,
                        S = u === k.carouselRoot || void 0;
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(w.ZP, { style: y.default.visuallyHidden }, g),
                        i.createElement(P.Z, { "aria-roledescription": "carousel", focusable: S, interactiveStyles: null, ref: this._rootRef, role: "group", style: D.root }, ({ isFocused: u, isFocusedWithin: p, isHovered: m }) => i.createElement(i.Fragment, null, i.createElement(b, { cellSpacing: t, children: r, currentItem: a, disabledKeyboardNavigation: !(d || m || u || p), fullHeightItems: s, itemWidth: h ? void 0 : n, itemsToShow: n ? void 0 : h || 1, locked: o, onChange: this._handleChange, onRest: l, ref: this._swipeableRef, setParentAspectRatio: c, shouldRenderAll: f, style: e }), !v.Z.isTouchSupported() || T.Z.isEnabled ? this._renderNavButtons(m || p) : null)),
                        i.createElement(w.ZP, { "aria-label": this._enableAccessibilityAlert ? _ : "", "aria-live": "polite", style: y.default.visuallyHidden }),
                    );
                }
                _handleFocus(t, e) {
                    const { receivesFocusOnChange: n } = this.props,
                        r = 0 === t,
                        a = t === i.Children.count(this.props.children) - 1;
                    if (n === k.carouselRoot) {
                        const t = this._rootRef.current;
                        t && t.focus({ preventScroll: !0 });
                    }
                    if (n === k.navButtons) {
                        "next" === e && !a && this._nextButtonRef && this._nextButtonRef.current && this._nextButtonRef.current.focus();
                        "prev" === e && !r && this._prevButtonRef && this._prevButtonRef.current && this._prevButtonRef.current.focus(), r && this._prevButtonRef && this._prevButtonRef.current && this._prevButtonRef.current.blur(), a && this._nextButtonRef && this._nextButtonRef.current && this._nextButtonRef.current.blur();
                    }
                }
                _renderNavButtons(t) {
                    const { currentSlide: e, dominantColor: n, navigationOffsetValue: a, showNavButtonsOnHover: s } = this.props,
                        u = i.Children.count(this.props.children),
                        c = u <= this._getSlidesToShow() && 0 === e,
                        d = 0 === e,
                        f = e + this._getSlidesToShow() >= u,
                        h = void 0 !== a;
                    return c ? null : i.createElement(r.Z, { pointerEvents: "box-none", style: [D.navButtons, d && D.navButtonsRight, f && D.navButtonsLeft, s && !t && D.navButtonsHidden, h && !!a && D.navButtonsWithOffset] }, d ? null : i.createElement(P.Z, { focusable: !1, interactiveStyles: null, onClick: this._handlePreviousSlide, style: [D.navButtonContainer, { height: "auto" }] }, (t) => i.createElement(i.Fragment, null, i.createElement(r.Z, { onLayout: this._handleNavButtonHeightChange, style: [D.navButtonContainer, h && { top: `${this._getNavigationOffset()}px`, start: 0, position: "absolute" }, D.navButtonLeft], testID: "Carousel-NavLeft" }, i.createElement(I.ZP, { "aria-label": O, dominantColor: n, icon: i.createElement(o.default, null), interactivityState: t, onClick: this._handlePreviousSlide, ref: this._prevButtonRef, style: D.navButton, type: "onMediaDominantColorFilled" })))), f ? null : i.createElement(P.Z, { focusable: !1, interactiveStyles: null, onClick: this._handleNextSlide, style: [D.navButtonContainer, { height: "auto" }] }, (t) => i.createElement(i.Fragment, null, i.createElement(r.Z, { onLayout: this._handleNavButtonHeightChange, style: [D.navButtonContainer, h && { top: `${this._getNavigationOffset()}px`, end: 0, position: "absolute" }, D.navButtonRight], testID: "Carousel-NavRight" }, i.createElement(I.ZP, { "aria-label": R, dominantColor: n, icon: i.createElement(l.default, null), interactivityState: t, onClick: this._handleNextSlide, ref: this._nextButtonRef, style: D.navButton, type: "onMediaDominantColorFilled" })))));
                }
                _getSlidesToShow() {
                    const { slidesToShow: t } = this.props;
                    return t || (this._swipeableRef.current && this._swipeableRef.current.getItemsToShow()) || 1;
                }
            }
            C.defaultProps = { cellSpacing: 0, currentSlide: 0, locked: !1, onChange: u.Z, receivesFocusOnChange: k.navButtons, shouldAlwaysEnableKeyboardNavigation: !1 };
            const D = y.default.create((t) => ({ root: { flex: 1 }, navButtons: { height: "100%", position: "absolute", transitionProperty: "opacity", transitionDuration: "0.2s", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, navButtonContainer: { height: "100%", justifyContent: "center", pointer: "cursor", position: "static" }, navButtonLeft: { paddingEnd: 10 }, navButtonRight: { paddingStart: 10 }, navButtonsWithOffset: { alignItems: "flex-start" }, navButtonsRight: { justifyContent: "flex-end" }, navButtonsLeft: { justifyContent: "flex-start" }, navButton: { margin: t.spaces.space12 }, navButtonsHidden: { opacity: 0 }, offscreenNavOverlay: { bottom: 0, cursor: "pointer", position: "absolute", top: 0 }, nextOffscreenNavOverlay: { start: "100%" }, prevOffscreenNavOverlay: { end: "100%" } }));
        },
        209057: function (t, e, n) {
            var i = n(834406);
            (function () {
                var e, n, r, a, s, o;
                "undefined" != typeof performance && null !== performance && performance.now
                    ? (t.exports = function () {
                          return performance.now();
                      })
                    : null != i && i.hrtime
                      ? ((t.exports = function () {
                            return (e() - s) / 1e6;
                        }),
                        (n = i.hrtime),
                        (a = (e = function () {
                            var t;
                            return 1e9 * (t = n())[0] + t[1];
                        })()),
                        (o = 1e9 * i.uptime()),
                        (s = a - o))
                      : Date.now
                        ? ((t.exports = function () {
                              return Date.now() - r;
                          }),
                          (r = Date.now()))
                        : ((t.exports = function () {
                              return new Date().getTime() - r;
                          }),
                          (r = new Date().getTime()));
            }).call(this);
        },
        23493: (t, e, n) => {
            for (var i = n(209057), r = "undefined" == typeof window ? n.g : window, a = ["moz", "webkit"], s = "AnimationFrame", o = r["request" + s], l = r["cancel" + s] || r["cancelRequest" + s], u = 0; !o && u < a.length; u++) (o = r[a[u] + "Request" + s]), (l = r[a[u] + "Cancel" + s] || r[a[u] + "CancelRequest" + s]);
            if (!o || !l) {
                var c = 0,
                    d = 0,
                    f = [],
                    h = 1e3 / 60;
                (o = function (t) {
                    if (0 === f.length) {
                        var e = i(),
                            n = Math.max(0, h - (e - c));
                        (c = n + e),
                            setTimeout(function () {
                                var t = f.slice(0);
                                f.length = 0;
                                for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled)
                                        try {
                                            t[e].callback(c);
                                        } catch (t) {
                                            setTimeout(function () {
                                                throw t;
                                            }, 0);
                                        }
                            }, Math.round(n));
                    }
                    return f.push({ handle: ++d, callback: t, cancelled: !1 }), d;
                }),
                    (l = function (t) {
                        for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0);
                    });
            }
            (t.exports = function (t) {
                return o.call(r, t);
            }),
                (t.exports.cancel = function () {
                    l.apply(r, arguments);
                }),
                (t.exports.polyfill = function (t) {
                    t || (t = r), (t.requestAnimationFrame = o), (t.cancelAnimationFrame = l);
                });
        },
        283190: (t, e, n) => {
            "use strict";
            e.__esModule = !0;
            var i =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    },
                r = (function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e;
                    };
                })();
            function a(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var s = a(n(981526)),
                o = a(n(894606)),
                l = a(n(906005)),
                u = a(n(444075)),
                c = a(n(23493)),
                d = a(n(299925)),
                f = a(n(202784)),
                h = a(n(213980)),
                p = 1e3 / 60,
                m = (function (t) {
                    function e(n) {
                        var r = this;
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            t.call(this, n),
                            (this.wasAnimating = !1),
                            (this.animationID = null),
                            (this.prevTime = 0),
                            (this.accumulatedTime = 0),
                            (this.unreadPropStyle = null),
                            (this.clearUnreadPropStyle = function (t) {
                                var e = !1,
                                    n = r.state,
                                    a = n.currentStyle,
                                    s = n.currentVelocity,
                                    o = n.lastIdealStyle,
                                    l = n.lastIdealVelocity;
                                for (var u in t)
                                    if (Object.prototype.hasOwnProperty.call(t, u)) {
                                        var c = t[u];
                                        "number" == typeof c && (e || ((e = !0), (a = i({}, a)), (s = i({}, s)), (o = i({}, o)), (l = i({}, l))), (a[u] = c), (s[u] = 0), (o[u] = c), (l[u] = 0));
                                    }
                                e && r.setState({ currentStyle: a, currentVelocity: s, lastIdealStyle: o, lastIdealVelocity: l });
                            }),
                            (this.startAnimationIfNecessary = function () {
                                r.animationID = c.default(function (t) {
                                    var e = r.props.style;
                                    if (d.default(r.state.currentStyle, e, r.state.currentVelocity)) return r.wasAnimating && r.props.onRest && r.props.onRest(), (r.animationID = null), (r.wasAnimating = !1), void (r.accumulatedTime = 0);
                                    r.wasAnimating = !0;
                                    var n = t || u.default(),
                                        i = n - r.prevTime;
                                    if (((r.prevTime = n), (r.accumulatedTime = r.accumulatedTime + i), r.accumulatedTime > 10 * p && (r.accumulatedTime = 0), 0 === r.accumulatedTime)) return (r.animationID = null), void r.startAnimationIfNecessary();
                                    var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / p) * p) / p,
                                        s = Math.floor(r.accumulatedTime / p),
                                        o = {},
                                        c = {},
                                        f = {},
                                        h = {};
                                    for (var m in e)
                                        if (Object.prototype.hasOwnProperty.call(e, m)) {
                                            var y = e[m];
                                            if ("number" == typeof y) (f[m] = y), (h[m] = 0), (o[m] = y), (c[m] = 0);
                                            else {
                                                for (var v = r.state.lastIdealStyle[m], g = r.state.lastIdealVelocity[m], _ = 0; _ < s; _++) {
                                                    var b = l.default(p / 1e3, v, g, y.val, y.stiffness, y.damping, y.precision);
                                                    (v = b[0]), (g = b[1]);
                                                }
                                                var S = l.default(p / 1e3, v, g, y.val, y.stiffness, y.damping, y.precision),
                                                    w = S[0],
                                                    I = S[1];
                                                (f[m] = v + (w - v) * a), (h[m] = g + (I - g) * a), (o[m] = v), (c[m] = g);
                                            }
                                        }
                                    (r.animationID = null), (r.accumulatedTime -= s * p), r.setState({ currentStyle: f, currentVelocity: h, lastIdealStyle: o, lastIdealVelocity: c }), (r.unreadPropStyle = null), r.startAnimationIfNecessary();
                                });
                            }),
                            (this.state = this.defaultState());
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                        })(e, t),
                        r(e, null, [{ key: "propTypes", value: { defaultStyle: h.default.objectOf(h.default.number), style: h.default.objectOf(h.default.oneOfType([h.default.number, h.default.object])).isRequired, children: h.default.func.isRequired, onRest: h.default.func }, enumerable: !0 }]),
                        (e.prototype.defaultState = function () {
                            var t = this.props,
                                e = t.defaultStyle,
                                n = t.style,
                                i = e || o.default(n),
                                r = s.default(i);
                            return { currentStyle: i, currentVelocity: r, lastIdealStyle: i, lastIdealVelocity: r };
                        }),
                        (e.prototype.componentDidMount = function () {
                            (this.prevTime = u.default()), this.startAnimationIfNecessary();
                        }),
                        (e.prototype.componentWillReceiveProps = function (t) {
                            null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), (this.unreadPropStyle = t.style), null == this.animationID && ((this.prevTime = u.default()), this.startAnimationIfNecessary());
                        }),
                        (e.prototype.componentWillUnmount = function () {
                            null != this.animationID && (c.default.cancel(this.animationID), (this.animationID = null));
                        }),
                        (e.prototype.render = function () {
                            var t = this.props.children(this.state.currentStyle);
                            return t && f.default.Children.only(t);
                        }),
                        e
                    );
                })(f.default.Component);
            (e.default = m), (t.exports = e.default);
        },
        14125: (t, e, n) => {
            "use strict";
            e.__esModule = !0;
            var i =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    },
                r = (function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e;
                    };
                })();
            function a(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var s = a(n(981526)),
                o = a(n(894606)),
                l = a(n(906005)),
                u = a(n(444075)),
                c = a(n(23493)),
                d = a(n(299925)),
                f = a(n(202784)),
                h = a(n(213980)),
                p = 1e3 / 60;
            var m = (function (t) {
                function e(n) {
                    var r = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        t.call(this, n),
                        (this.animationID = null),
                        (this.prevTime = 0),
                        (this.accumulatedTime = 0),
                        (this.unreadPropStyles = null),
                        (this.clearUnreadPropStyle = function (t) {
                            for (var e = r.state, n = e.currentStyles, a = e.currentVelocities, s = e.lastIdealStyles, o = e.lastIdealVelocities, l = !1, u = 0; u < t.length; u++) {
                                var c = t[u],
                                    d = !1;
                                for (var f in c)
                                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                                        var h = c[f];
                                        "number" == typeof h && (d || ((d = !0), (l = !0), (n[u] = i({}, n[u])), (a[u] = i({}, a[u])), (s[u] = i({}, s[u])), (o[u] = i({}, o[u]))), (n[u][f] = h), (a[u][f] = 0), (s[u][f] = h), (o[u][f] = 0));
                                    }
                            }
                            l && r.setState({ currentStyles: n, currentVelocities: a, lastIdealStyles: s, lastIdealVelocities: o });
                        }),
                        (this.startAnimationIfNecessary = function () {
                            r.animationID = c.default(function (t) {
                                var e = r.props.styles(r.state.lastIdealStyles);
                                if (
                                    (function (t, e, n) {
                                        for (var i = 0; i < t.length; i++) if (!d.default(t[i], e[i], n[i])) return !1;
                                        return !0;
                                    })(r.state.currentStyles, e, r.state.currentVelocities)
                                )
                                    return (r.animationID = null), void (r.accumulatedTime = 0);
                                var n = t || u.default(),
                                    i = n - r.prevTime;
                                if (((r.prevTime = n), (r.accumulatedTime = r.accumulatedTime + i), r.accumulatedTime > 10 * p && (r.accumulatedTime = 0), 0 === r.accumulatedTime)) return (r.animationID = null), void r.startAnimationIfNecessary();
                                for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / p) * p) / p, s = Math.floor(r.accumulatedTime / p), o = [], c = [], f = [], h = [], m = 0; m < e.length; m++) {
                                    var y = e[m],
                                        v = {},
                                        g = {},
                                        _ = {},
                                        b = {};
                                    for (var S in y)
                                        if (Object.prototype.hasOwnProperty.call(y, S)) {
                                            var w = y[S];
                                            if ("number" == typeof w) (v[S] = w), (g[S] = 0), (_[S] = w), (b[S] = 0);
                                            else {
                                                for (var I = r.state.lastIdealStyles[m][S], T = r.state.lastIdealVelocities[m][S], P = 0; P < s; P++) {
                                                    var R = l.default(p / 1e3, I, T, w.val, w.stiffness, w.damping, w.precision);
                                                    (I = R[0]), (T = R[1]);
                                                }
                                                var O = l.default(p / 1e3, I, T, w.val, w.stiffness, w.damping, w.precision),
                                                    x = O[0],
                                                    k = O[1];
                                                (v[S] = I + (x - I) * a), (g[S] = T + (k - T) * a), (_[S] = I), (b[S] = T);
                                            }
                                        }
                                    (f[m] = v), (h[m] = g), (o[m] = _), (c[m] = b);
                                }
                                (r.animationID = null), (r.accumulatedTime -= s * p), r.setState({ currentStyles: f, currentVelocities: h, lastIdealStyles: o, lastIdealVelocities: c }), (r.unreadPropStyles = null), r.startAnimationIfNecessary();
                            });
                        }),
                        (this.state = this.defaultState());
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                    })(e, t),
                    r(e, null, [{ key: "propTypes", value: { defaultStyles: h.default.arrayOf(h.default.objectOf(h.default.number)), styles: h.default.func.isRequired, children: h.default.func.isRequired }, enumerable: !0 }]),
                    (e.prototype.defaultState = function () {
                        var t = this.props,
                            e = t.defaultStyles,
                            n = t.styles,
                            i = e || n().map(o.default),
                            r = i.map(function (t) {
                                return s.default(t);
                            });
                        return { currentStyles: i, currentVelocities: r, lastIdealStyles: i, lastIdealVelocities: r };
                    }),
                    (e.prototype.componentDidMount = function () {
                        (this.prevTime = u.default()), this.startAnimationIfNecessary();
                    }),
                    (e.prototype.componentWillReceiveProps = function (t) {
                        null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), (this.unreadPropStyles = t.styles(this.state.lastIdealStyles)), null == this.animationID && ((this.prevTime = u.default()), this.startAnimationIfNecessary());
                    }),
                    (e.prototype.componentWillUnmount = function () {
                        null != this.animationID && (c.default.cancel(this.animationID), (this.animationID = null));
                    }),
                    (e.prototype.render = function () {
                        var t = this.props.children(this.state.currentStyles);
                        return t && f.default.Children.only(t);
                    }),
                    e
                );
            })(f.default.Component);
            (e.default = m), (t.exports = e.default);
        },
        178302: (t, e, n) => {
            "use strict";
            e.__esModule = !0;
            var i =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    },
                r = (function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e;
                    };
                })();
            function a(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var s = a(n(981526)),
                o = a(n(894606)),
                l = a(n(906005)),
                u = a(n(486827)),
                c = a(n(444075)),
                d = a(n(23493)),
                f = a(n(299925)),
                h = a(n(202784)),
                p = a(n(213980)),
                m = 1e3 / 60;
            function y(t, e, n) {
                var i = e;
                return null == i
                    ? t.map(function (t, e) {
                          return { key: t.key, data: t.data, style: n[e] };
                      })
                    : t.map(function (t, e) {
                          for (var r = 0; r < i.length; r++) if (i[r].key === t.key) return { key: i[r].key, data: i[r].data, style: n[e] };
                          return { key: t.key, data: t.data, style: n[e] };
                      });
            }
            function v(t, e, n, i, r, a, o, l, c) {
                for (
                    var d = u.default(i, r, function (t, i) {
                            var r = e(i);
                            return null == r || f.default(a[t], r, o[t]) ? (n({ key: i.key, data: i.data }), null) : { key: i.key, data: i.data, style: r };
                        }),
                        h = [],
                        p = [],
                        m = [],
                        y = [],
                        v = 0;
                    v < d.length;
                    v++
                ) {
                    for (var g = d[v], _ = null, b = 0; b < i.length; b++)
                        if (i[b].key === g.key) {
                            _ = b;
                            break;
                        }
                    if (null == _) {
                        var S = t(g);
                        (h[v] = S), (m[v] = S);
                        var w = s.default(g.style);
                        (p[v] = w), (y[v] = w);
                    } else (h[v] = a[_]), (m[v] = l[_]), (p[v] = o[_]), (y[v] = c[_]);
                }
                return [d, h, p, m, y];
            }
            var g = (function (t) {
                function e(n) {
                    var r = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        t.call(this, n),
                        (this.unmounting = !1),
                        (this.animationID = null),
                        (this.prevTime = 0),
                        (this.accumulatedTime = 0),
                        (this.unreadPropStyles = null),
                        (this.clearUnreadPropStyle = function (t) {
                            for (var e = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, t, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), n = e[0], a = e[1], s = e[2], o = e[3], l = e[4], u = 0; u < t.length; u++) {
                                var c = t[u].style,
                                    d = !1;
                                for (var f in c)
                                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                                        var h = c[f];
                                        "number" == typeof h && (d || ((d = !0), (a[u] = i({}, a[u])), (s[u] = i({}, s[u])), (o[u] = i({}, o[u])), (l[u] = i({}, l[u])), (n[u] = { key: n[u].key, data: n[u].data, style: i({}, n[u].style) })), (a[u][f] = h), (s[u][f] = 0), (o[u][f] = h), (l[u][f] = 0), (n[u].style[f] = h));
                                    }
                            }
                            r.setState({ currentStyles: a, currentVelocities: s, mergedPropsStyles: n, lastIdealStyles: o, lastIdealVelocities: l });
                        }),
                        (this.startAnimationIfNecessary = function () {
                            r.unmounting ||
                                (r.animationID = d.default(function (t) {
                                    if (!r.unmounting) {
                                        var e = r.props.styles,
                                            n = "function" == typeof e ? e(y(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : e;
                                        if (
                                            (function (t, e, n, i) {
                                                if (i.length !== e.length) return !1;
                                                for (var r = 0; r < i.length; r++) if (i[r].key !== e[r].key) return !1;
                                                for (r = 0; r < i.length; r++) if (!f.default(t[r], e[r].style, n[r])) return !1;
                                                return !0;
                                            })(r.state.currentStyles, n, r.state.currentVelocities, r.state.mergedPropsStyles)
                                        )
                                            return (r.animationID = null), void (r.accumulatedTime = 0);
                                        var i = t || c.default(),
                                            a = i - r.prevTime;
                                        if (((r.prevTime = i), (r.accumulatedTime = r.accumulatedTime + a), r.accumulatedTime > 10 * m && (r.accumulatedTime = 0), 0 === r.accumulatedTime)) return (r.animationID = null), void r.startAnimationIfNecessary();
                                        for (var s = (r.accumulatedTime - Math.floor(r.accumulatedTime / m) * m) / m, o = Math.floor(r.accumulatedTime / m), u = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, n, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), d = u[0], h = u[1], p = u[2], g = u[3], _ = u[4], b = 0; b < d.length; b++) {
                                            var S = d[b].style,
                                                w = {},
                                                I = {},
                                                T = {},
                                                P = {};
                                            for (var R in S)
                                                if (Object.prototype.hasOwnProperty.call(S, R)) {
                                                    var O = S[R];
                                                    if ("number" == typeof O) (w[R] = O), (I[R] = 0), (T[R] = O), (P[R] = 0);
                                                    else {
                                                        for (var x = g[b][R], k = _[b][R], C = 0; C < o; C++) {
                                                            var D = l.default(m / 1e3, x, k, O.val, O.stiffness, O.damping, O.precision);
                                                            (x = D[0]), (k = D[1]);
                                                        }
                                                        var E = l.default(m / 1e3, x, k, O.val, O.stiffness, O.damping, O.precision),
                                                            B = E[0],
                                                            A = E[1];
                                                        (w[R] = x + (B - x) * s), (I[R] = k + (A - k) * s), (T[R] = x), (P[R] = k);
                                                    }
                                                }
                                            (g[b] = T), (_[b] = P), (h[b] = w), (p[b] = I);
                                        }
                                        (r.animationID = null), (r.accumulatedTime -= o * m), r.setState({ currentStyles: h, currentVelocities: p, lastIdealStyles: g, lastIdealVelocities: _, mergedPropsStyles: d }), (r.unreadPropStyles = null), r.startAnimationIfNecessary();
                                    }
                                }));
                        }),
                        (this.state = this.defaultState());
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                    })(e, t),
                    r(e, null, [
                        { key: "propTypes", value: { defaultStyles: p.default.arrayOf(p.default.shape({ key: p.default.string.isRequired, data: p.default.any, style: p.default.objectOf(p.default.number).isRequired })), styles: p.default.oneOfType([p.default.func, p.default.arrayOf(p.default.shape({ key: p.default.string.isRequired, data: p.default.any, style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired }))]).isRequired, children: p.default.func.isRequired, willEnter: p.default.func, willLeave: p.default.func, didLeave: p.default.func }, enumerable: !0 },
                        {
                            key: "defaultProps",
                            value: {
                                willEnter: function (t) {
                                    return o.default(t.style);
                                },
                                willLeave: function () {
                                    return null;
                                },
                                didLeave: function () {},
                            },
                            enumerable: !0,
                        },
                    ]),
                    (e.prototype.defaultState = function () {
                        var t = this.props,
                            e = t.defaultStyles,
                            n = t.styles,
                            i = t.willEnter,
                            r = t.willLeave,
                            a = t.didLeave,
                            l = "function" == typeof n ? n(e) : n,
                            u = void 0;
                        u =
                            null == e
                                ? l
                                : e.map(function (t) {
                                      for (var e = 0; e < l.length; e++) if (l[e].key === t.key) return l[e];
                                      return t;
                                  });
                        var c =
                                null == e
                                    ? l.map(function (t) {
                                          return o.default(t.style);
                                      })
                                    : e.map(function (t) {
                                          return o.default(t.style);
                                      }),
                            d =
                                null == e
                                    ? l.map(function (t) {
                                          return s.default(t.style);
                                      })
                                    : e.map(function (t) {
                                          return s.default(t.style);
                                      }),
                            f = v(i, r, a, u, l, c, d, c, d),
                            h = f[0];
                        return { currentStyles: f[1], currentVelocities: f[2], lastIdealStyles: f[3], lastIdealVelocities: f[4], mergedPropsStyles: h };
                    }),
                    (e.prototype.componentDidMount = function () {
                        (this.prevTime = c.default()), this.startAnimationIfNecessary();
                    }),
                    (e.prototype.componentWillReceiveProps = function (t) {
                        this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                        var e = t.styles;
                        (this.unreadPropStyles = "function" == typeof e ? e(y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : e), null == this.animationID && ((this.prevTime = c.default()), this.startAnimationIfNecessary());
                    }),
                    (e.prototype.componentWillUnmount = function () {
                        (this.unmounting = !0), null != this.animationID && (d.default.cancel(this.animationID), (this.animationID = null));
                    }),
                    (e.prototype.render = function () {
                        var t = y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                            e = this.props.children(t);
                        return e && h.default.Children.only(e);
                    }),
                    e
                );
            })(h.default.Component);
            (e.default = g), (t.exports = e.default);
        },
        981526: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function (t) {
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = 0);
                    return e;
                }),
                (t.exports = e.default);
        },
        486827: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function (t, e, n) {
                    for (var i = {}, r = 0; r < t.length; r++) i[t[r].key] = r;
                    var a = {};
                    for (r = 0; r < e.length; r++) a[e[r].key] = r;
                    var s = [];
                    for (r = 0; r < e.length; r++) s[r] = e[r];
                    for (r = 0; r < t.length; r++)
                        if (!Object.prototype.hasOwnProperty.call(a, t[r].key)) {
                            var o = n(r, t[r]);
                            null != o && s.push(o);
                        }
                    return s.sort(function (t, n) {
                        var r = a[t.key],
                            s = a[n.key],
                            o = i[t.key],
                            l = i[n.key];
                        if (null != r && null != s) return a[t.key] - a[n.key];
                        if (null != o && null != l) return i[t.key] - i[n.key];
                        if (null != r) {
                            for (var u = 0; u < e.length; u++) {
                                var c = e[u].key;
                                if (Object.prototype.hasOwnProperty.call(i, c)) {
                                    if (r < a[c] && l > i[c]) return -1;
                                    if (r > a[c] && l < i[c]) return 1;
                                }
                            }
                            return 1;
                        }
                        for (u = 0; u < e.length; u++) {
                            c = e[u].key;
                            if (Object.prototype.hasOwnProperty.call(i, c)) {
                                if (s < a[c] && o > i[c]) return 1;
                                if (s > a[c] && o < i[c]) return -1;
                            }
                        }
                        return -1;
                    });
                }),
                (t.exports = e.default);
        },
        106217: (t, e) => {
            "use strict";
            (e.__esModule = !0), (e.default = { noWobble: { stiffness: 170, damping: 26 }, gentle: { stiffness: 120, damping: 14 }, wobbly: { stiffness: 180, damping: 12 }, stiff: { stiffness: 210, damping: 20 } }), (t.exports = e.default);
        },
        196001: (t, e, n) => {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t.default : t;
            }
            var r = n(283190);
            (e.y_ = i(r)), i(n(14125));
            var a = n(178302);
            e.bg = i(a);
            var s = n(540840);
            e.ST = i(s);
            var o = n(106217);
            (e.um = i(o)), i(n(894606)), i(n(785061));
        },
        785061: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function () {
                    0;
                });
            t.exports = e.default;
        },
        299925: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function (t, e, n) {
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            if (0 !== n[i]) return !1;
                            var r = "number" == typeof e[i] ? e[i] : e[i].val;
                            if (t[i] !== r) return !1;
                        }
                    return !0;
                }),
                (t.exports = e.default);
        },
        540840: (t, e, n) => {
            "use strict";
            e.__esModule = !0;
            var i =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    }
                    return t;
                };
            e.default = function (t, e) {
                return i({}, o, e, { val: t });
            };
            var r,
                a = n(106217),
                s = (r = a) && r.__esModule ? r : { default: r },
                o = i({}, s.default.noWobble, { precision: 0.01 });
            t.exports = e.default;
        },
        906005: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function (t, e, i, r, a, s, o) {
                    var l = i + (-a * (e - r) + -s * i) * t,
                        u = e + l * t;
                    if (Math.abs(l) < o && Math.abs(u - r) < o) return (n[0] = r), (n[1] = 0), n;
                    return (n[0] = u), (n[1] = l), n;
                });
            var n = [0, 0];
            t.exports = e.default;
        },
        894606: (t, e) => {
            "use strict";
            (e.__esModule = !0),
                (e.default = function (t) {
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = "number" == typeof t[n] ? t[n] : t[n].val);
                    return e;
                }),
                (t.exports = e.default);
        },
        444075: function (t, e, n) {
            var i = n(834406);
            (function () {
                var e, n, r;
                "undefined" != typeof performance && null !== performance && performance.now
                    ? (t.exports = function () {
                          return performance.now();
                      })
                    : null != i && i.hrtime
                      ? ((t.exports = function () {
                            return (e() - r) / 1e6;
                        }),
                        (n = i.hrtime),
                        (r = (e = function () {
                            var t;
                            return 1e9 * (t = n())[0] + t[1];
                        })()))
                      : Date.now
                        ? ((t.exports = function () {
                              return Date.now() - r;
                          }),
                          (r = Date.now()))
                        : ((t.exports = function () {
                              return new Date().getTime() - r;
                          }),
                          (r = new Date().getTime()));
            }).call(this);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle.08d7e52a.js.map
