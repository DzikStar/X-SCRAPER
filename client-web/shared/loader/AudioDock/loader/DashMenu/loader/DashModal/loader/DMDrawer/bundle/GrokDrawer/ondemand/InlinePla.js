"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"],
    {
        173739: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                i = n(31501),
                r = n(879891);
            const a = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: a, thumbLabel: l, value: s, ...d }) => {
                const { direction: c } = (0, r.Z)(),
                    h = { ...d, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: a, value: [d.min, s], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: c };
                return o.createElement(i.Z, h);
            };
        },
        401705: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(807896),
                i = n(202784),
                r = n(928316),
                a = n(133028),
                l = n(231461),
                s = n(890601),
                d = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const c = (e, t) => {
                var n;
                return "string" == typeof e ? "" + parseFloat(e) * t + e.match(d)[1] : ((n = e), !isNaN(parseFloat(n)) && isFinite(n) ? e * t : void 0);
            };
            var h = n(297689),
                u = n(325686),
                v = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                p = {},
                m = "0px 1px 3px rgba(0,0,0,0.5)",
                g = m + ", 0 0 0 10px rgba(0,0,0,0.1)",
                f = "#D5D5D5",
                b = "#BDBDBD",
                w = i.forwardRef((e, t) => {
                    var n = e["aria-label"],
                        r = e.accessibilityLabel,
                        a = e.activeThumbColor,
                        d = e.activeTrackColor,
                        w = e.disabled,
                        S = void 0 !== w && w,
                        C = e.onValueChange,
                        _ = e.style,
                        x = void 0 === _ ? p : _,
                        Z = e.thumbColor,
                        T = e.trackColor,
                        R = e.value,
                        E = void 0 !== R && R,
                        k = (0, l.Z)(e, v),
                        B = i.useRef(null);
                    function L(e) {
                        var t = "focus" === e.nativeEvent.type ? g : m;
                        null != B.current && (B.current.style.boxShadow = t);
                    }
                    var I = h.Z.flatten(x),
                        P = I.height,
                        D = I.width,
                        M = P || "20px",
                        A = c(M, 2),
                        z = D > A ? D : A,
                        O = c(M, 0.5),
                        N = !0 === E ? (null != T && "object" == typeof T ? T.true : null != d ? d : "#A3D3CF") : null != T && "object" == typeof T ? T.false : null != T ? T : "#939393",
                        H = E ? (null != a ? a : "#009688") : null != Z ? Z : "#FAFAFA",
                        V = M,
                        F = V,
                        W = [y.root, x, S && y.cursorDefault, { height: M, width: z }],
                        G = !0 === E ? (("string" == typeof d && null != d) || ("object" == typeof T && null != T && T.true) ? N : f) : ("string" == typeof T && null != T) || ("object" == typeof T && null != T && T.false) ? N : f,
                        X = !0 === E ? (null == a ? b : H) : null == Z ? b : H,
                        Y = [y.track, { backgroundColor: S ? G : N, borderRadius: O }],
                        j = [y.thumb, E && y.thumbActive, { backgroundColor: S ? X : H, height: V, marginStart: E ? c(F, -1) : 0, width: F }],
                        K = (0, s.Z)("input", {
                            "aria-label": n || r,
                            checked: E,
                            disabled: S,
                            onBlur: L,
                            onChange: function (e) {
                                null != C && C(e.nativeEvent.target.checked);
                            },
                            onFocus: L,
                            ref: t,
                            style: [y.nativeControl, y.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return i.createElement(u.Z, (0, o.Z)({}, k, { style: W }), i.createElement(u.Z, { style: Y }), i.createElement(u.Z, { ref: B, style: j }), K);
                });
            w.displayName = "Switch";
            var y = h.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, a.Z)((0, a.Z)({ forcedColorAdjust: "none" }, h.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: m, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, a.Z)((0, a.Z)({}, h.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const S = w;
            var C = n(392237);
            class _ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = r.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = C.default.theme;
                    return i.createElement(S, (0, o.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const x = _;
        },
        194504: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(894966),
                s = n(568320),
                d = n(161821),
                c = n(666536),
                h = n(837880),
                u = n(323265),
                v = n(461756),
                p = n(154003),
                m = n(530732),
                g = n(224162),
                f = n(392237),
                b = n(301049),
                w = n(145858);
            let y;
            const S = a().gea7aa3c,
                C = a().b6462b32,
                _ = (e) =>
                    (function () {
                        if (void 0 !== y) return y;
                        const e = document.createElement("template");
                        e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const t = e.content.firstChild;
                        if (!(t && t instanceof window.HTMLElement)) return y;
                        document.body && document.body.appendChild(t);
                        const n = t.scrollLeft;
                        return t.remove(), (y = 0 === n), y;
                    })() || !e,
                x = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function Z(e) {
                switch (e.paletteName) {
                    case "light":
                        return w.bs.white(1);
                    case "dark":
                    case "business":
                        return w.bs.dim(1);
                    case "darker":
                        return w.bs.black(1);
                    default:
                        return e.colors.alwaysBlack;
                }
            }
            function T({ event: e, isCarouselLocked: t }) {
                const { key: n, target: o } = e;
                return (
                    [b.Z.ArrowLeft, b.Z.ArrowRight].includes(n) &&
                    !t &&
                    !(
                        (function (e) {
                            return e instanceof HTMLElement && e.isContentEditable;
                        })(o) ||
                        (function (e) {
                            return e instanceof HTMLElement && x.includes(e.nodeName);
                        })(o)
                    )
                );
            }
            class R extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._list = o.createRef()),
                        (this._focusedTabIndex = this.props.visibleItemIndex || 0),
                        (this._childRefs = {}),
                        (this._scrollLeft = 0),
                        (this._isMounted = !0),
                        (this.state = { buttonWidth: 0, hidePrevButton: !0, hideNextButton: !0, swipeableWidth: void 0 }),
                        (this.getListRef = () => this._list.current),
                        (this._setChildRef = (e) => (t) => {
                            this._childRefs[e] = t;
                        }),
                        (this._isRTL = () => {
                            const { direction: e } = this.context;
                            return "rtl" === e;
                        }),
                        (this._handlePreviousClick = (e) => {
                            e.stopPropagation(), this._goToClosestOffScreen("Previous");
                        }),
                        (this._handleNextClick = (e) => {
                            e.stopPropagation(), this._goToClosestOffScreen("Next");
                        }),
                        (this._handleSwipeableLayout = (e) => {
                            const {
                                nativeEvent: {
                                    layout: { width: t },
                                },
                            } = e;
                            t !== this.state.swipeableWidth && this._isMounted && (this._updateListScrollPadding(), this.setState({ swipeableWidth: t }));
                        }),
                        (this._handleButtonLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { buttonWidth: n } = this.state;
                            t > 0 && t !== n && this.setState({ buttonWidth: t });
                        }),
                        (this._handleItemClick = (e) => () => {
                            this._goToItem(e), (this._focusedTabIndex = e);
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t } = e,
                                { isLocked: n } = this.props,
                                o = this._isRTL();
                            !T({ event: e, isCarouselLocked: n }) || (e.preventDefault(), ((!o && t === b.Z.ArrowLeft) || (o && t === b.Z.ArrowRight)) && this._goToPreviousIndex(), ((!o && t === b.Z.ArrowRight) || (o && t === b.Z.ArrowLeft)) && this._goToNextIndex());
                        }),
                        (this._setupIntersectionObserver = () => {
                            window.IntersectionObserver && ((this._observer = new window.IntersectionObserver(this._handleIntersection, { root: this._list.current, rootMargin: "5px", threshold: [0.5, 1] })), this._observeChildRefs());
                        }),
                        (this._observeChildRefs = () => {
                            this._observer &&
                                (this._observer.disconnect(),
                                (0, d.Z)(this._childRefs).forEach((e) => {
                                    e && this._observer.observe(e);
                                }));
                        }),
                        (this._handleIntersection = (e, t) => {
                            const { children: n, onVisibleRangeChange: o } = this.props;
                            this._handleScrollDebounce(),
                                e.forEach((e) => {
                                    const i = Array.from(t.root.children).indexOf(e.target);
                                    0 === i ? this.setState({ hidePrevButton: 1 === e.intersectionRatio }) : i === n.length - 1 && this.setState({ hideNextButton: 1 === e.intersectionRatio }), -1 !== i && o && o({ index: i, intersectionRatio: e.intersectionRatio });
                                });
                        }),
                        (this._handleScroll = () => {
                            const { onScroll: e } = this.props,
                                { swipeableWidth: t } = this.state;
                            if (e && t) {
                                const n = this._getLeftOffset(t);
                                e({ previous: this._scrollLeft, next: n }), (this._scrollLeft = n);
                            }
                        }),
                        (this._handleScrollDebounce = (0, c.Z)(this._handleScroll, 500)),
                        (this._scrollToOffset = (e, t) => {
                            const n = this._list.current;
                            n && n.scrollTo && n.scrollTo({ left: e, behavior: this._getScrollBehavior(t) });
                        }),
                        (this._getLeftOffset = (e) => {
                            const t = this._list.current,
                                n = t ? t.scrollLeft : 0,
                                o = t ? t.scrollWidth : 0,
                                i = this._isRTL();
                            let r = 0;
                            return (r = i ? (_(i) && i ? -1 * Math.min(0, n) : -1 * Math.min(0, n - (o - e))) : n), Math.ceil(r);
                        }),
                        (this._goToClosestOffScreen = (e) => {
                            const t = this._list.current,
                                { children: n, withSingleIndexButtons: o, withWraparound: i } = this.props,
                                r = this._isRTL(),
                                a = r !== ("Next" === e);
                            let l = this._focusedTabIndex;
                            if (t && t.children.length === n.length) {
                                const n = t.getBoundingClientRect(),
                                    o = "Previous" === e ? [...t.children] : [...t.children].reverse();
                                if (a) {
                                    const e = o.findIndex((e) => e.getBoundingClientRect().right < n.right);
                                    l = r ? e - 1 : t.children.length - e;
                                } else {
                                    const e = o.findIndex((e) => e.getBoundingClientRect().left > n.left);
                                    l = r ? t.children.length - e : e - 1;
                                }
                            }
                            (l = i ? (l + n.length) % n.length : (0, h.Z)(l, 0, n.length - 1)), this._focusItem(l, o ? void 0 : "Next" === e ? "start" : "end");
                        }),
                        (this._goToPreviousIndex = () => {
                            const { children: e, withWraparound: t } = this.props,
                                n = this._focusedTabIndex,
                                o = t ? e.length - 1 : 0,
                                i = 0 === n ? o : n - 1;
                            this._focusItem(i);
                        }),
                        (this._goToNextIndex = () => {
                            const { children: e, withWraparound: t } = this.props,
                                n = this._focusedTabIndex,
                                o = t ? 0 : e.length - 1,
                                i = n === e.length - 1 ? o : n + 1;
                            this._focusItem(i);
                        }),
                        (this._updateListScrollPadding = (e) => {
                            const { listScrollPaddingStyle: t } = this.state;
                            let n;
                            void 0 !== this.props.swipeablePaddingLeft && void 0 !== this.props.swipeablePaddingRight ? (n = `0 ${this.props.swipeablePaddingRight}px 0 ${this.props.swipeablePaddingLeft}px`) : this.state.buttonWidth && (n = `0 ${this.state.buttonWidth}px`), t?.scrollPadding !== n && this.setState({ listScrollPaddingStyle: { scrollPadding: n } });
                        });
                }
                componentDidMount() {
                    const { visibleItemIndex: e, withGlobalKeyboardNavigation: t } = this.props;
                    e && this._goToInitialItem(e), t && window.document.addEventListener("keydown", this._handleKeyDown), this._setupIntersectionObserver();
                }
                componentDidUpdate(e, t) {
                    this.props.updateObserverWithChildren && e.children.length !== this.props.children.length && this._observeChildRefs(), this._handleSelectedItemChange(e), this._updateListScrollPadding(), e.withGlobalKeyboardNavigation !== this.props.withGlobalKeyboardNavigation && (this.props.withGlobalKeyboardNavigation ? window.document.addEventListener("keydown", this._handleKeyDown) : window.document.removeEventListener("keydown", this._handleKeyDown));
                }
                componentWillUnmount() {
                    this._observer && this._observer.disconnect(), window.document.removeEventListener("keydown", this._handleKeyDown), (this._isMounted = !1);
                }
                render() {
                    const { "aria-label": e, style: t } = this.props;
                    return o.createElement(i.Z, { "aria-label": e, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [E.root, t] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: e, children: t, childrenStyle: n, contentPadding: r, isLocked: a, showOverflow: l } = this.props,
                        { listScrollPaddingStyle: s } = this.state,
                        d = this._getWithOffscreenItems(),
                        c = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return o.createElement(m.Z, { interactiveStyles: null, style: E.swipeableContainer }, ({ isFocused: h, isFocusedWithin: u, isHovered: v }) =>
                        o.createElement(
                            o.Fragment,
                            null,
                            this._renderPreviousButton(v || h || u),
                            o.createElement(
                                i.Z,
                                { onLayout: this._handleSwipeableLayout, style: [E.swipeable, d || l ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                o.createElement(
                                    i.Z,
                                    { ref: this._list, role: "tablist", style: [E.list, a ? E.notScrollable : E.scrollable, c && E.listSafariRtl, d && E.addRoomForOffscreenItems, e, s], testID: "ScrollSnap-List" },
                                    t.map((e, a) => (e ? o.createElement(i.Z, { key: a, onClick: this._handleItemClick(a), ref: this._setChildRef(a), role: "presentation", style: [E.item, n, r ? (0 === a ? { marginStart: r } : a === t.length - 1 ? { marginEnd: r } : void 0) : void 0] }, e) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(v || h || u),
                        ),
                    );
                }
                _renderPreviousButton(e) {
                    const { dominantButtonColor: t, isLocked: n, navButtonStyle: r, showNavButtonsOnHover: a, withAddedNavButtonClickArea: s } = this.props,
                        { hidePrevButton: d } = this.state,
                        c = d || (a && !e) || n,
                        h = o.createElement(l.default, { style: [E.navButtonIcon, c && E.navButtonIconDisabled] }),
                        u = s && [E.navClickableArea, E.navClickableAreaPrev];
                    return o.createElement(i.Z, { onClick: this._handlePreviousClick, style: [E.navButton, u, r, c && E.hiddenNavButton, !v.Z.reducedMotionEnabled && E.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, o.createElement(p.ZP, { "aria-label": C, disabled: c, dominantColor: t, icon: h, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(e) {
                    const { dominantButtonColor: t, isLocked: n, navButtonStyle: r, showNavButtonsOnHover: a, withAddedNavButtonClickArea: l } = this.props,
                        { hideNextButton: d } = this.state,
                        c = d || (a && !e) || n,
                        h = o.createElement(s.default, { style: [E.navButtonIcon, c && E.navButtonIconDisabled] }),
                        u = l && [E.navClickableArea, E.navClickableAreaNext];
                    return o.createElement(i.Z, { onClick: this._handleNextClick, style: [E.navButton, E.navButtonNext, u, r, c && E.hiddenNavButton, !v.Z.reducedMotionEnabled && E.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, o.createElement(p.ZP, { "aria-label": S, disabled: c, dominantColor: t, icon: h, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _getWithOffscreenItems() {
                    const { withOffscreenItems: e } = this.props;
                    return !u.ZP.isSafari() && e;
                }
                _focusItem(e, t) {
                    const n = this._childRefs[e];
                    n && n.firstChild instanceof HTMLElement && (n.firstChild.focus({ preventScroll: !0 }), (this._focusedTabIndex = e), this._goToItem(e, t));
                }
                _handleSelectedItemChange(e) {
                    const { visibleItemIndex: t } = this.props;
                    "number" == typeof t && e.visibleItemIndex !== t && this._goToItem(t);
                }
                _goToInitialItem(e) {
                    const { isLocked: t } = this.props;
                    if (this._childRefs[e] && !t) {
                        const t = this._childRefs[e];
                        if (t) {
                            const e = t.getBoundingClientRect().left,
                                n = this._childRefs[0]?.getBoundingClientRect().left || 0;
                            this._scrollToOffset(e - n, !0);
                        }
                    }
                }
                _goToItem(e, t) {
                    const { isLocked: n, scrollToCenter: o, withScrollIntoView: i } = this.props;
                    if (this._childRefs[e] && !n) {
                        const n = this._childRefs[e];
                        if (i) {
                            if (n && n.scrollIntoView)
                                try {
                                    n.scrollIntoView({ behavior: this._getScrollBehavior(), block: "nearest", inline: o ? "center" : (t ?? "nearest") });
                                } catch (e) {
                                    n.scrollIntoView(!1);
                                }
                        } else this._list.current && (this._list.current.scrollLeft = n.offsetLeft);
                    }
                }
                _getScrollBehavior(e) {
                    return v.Z.reducedMotionEnabled || e ? "auto" : "smooth";
                }
                handleNextSlide(e) {
                    this._handleNextClick(e);
                }
                _renderRightShadowOverlay() {
                    const { shadowStyle: e, withShadow: t } = this.props,
                        { hideNextButton: n } = this.state;
                    return t ? o.createElement(i.Z, { style: [E.rightGradientOverlay, e, !v.Z.reducedMotionEnabled && E.shadowAnimation, n && E.hiddenShadow] }) : null;
                }
                _renderLeftShadowOverlay() {
                    const { shadowStyle: e, withShadow: t } = this.props,
                        { hidePrevButton: n } = this.state;
                    return t ? o.createElement(i.Z, { style: [E.leftGradientOverlay, e, !v.Z.reducedMotionEnabled && E.shadowAnimation, n && E.hiddenShadow] }) : null;
                }
            }
            (R.contextType = g.ZP), (R.defaultProps = { children: [], dominantButtonColor: f.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const E = f.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: e.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: e.colors.white }, navButtonIconDisabled: { color: e.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: e.spaces.space12 }, navClickableAreaPrev: { paddingEnd: e.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${Z(e)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${Z(e)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                k = R;
        },
        896632: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                i = n(325686),
                r = n(731708),
                a = n(392237);
            let l = 1;
            const s = a.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                d = (e) => {
                    const { "aria-label": t, backgroundStyles: n, description: a, disabled: d, horizontal: c, label: h, name: u, onChange: v, options: p, renderBorderWhenSelected: m, renderSelector: g, selectorBackgroundStyles: f, switchStyle: b, value: w } = e,
                        y = (() => {
                            const e = o.useRef("");
                            return (
                                o.useEffect(() => {
                                    (e.current = `CONTROL_${l}_LABEL`), (l += 1);
                                }, []),
                                e
                            );
                        })(),
                        S = (e) => () => {
                            v(u, e);
                        };
                    return o.createElement(
                        i.Z,
                        { "aria-label": t, "aria-labelledby": h && !t ? y.current : void 0, role: "radiogroup", style: d && s.disabled },
                        h ? o.createElement(i.Z, { id: y.current, role: "label", style: s.header }, o.createElement(r.ZP, { style: s.label, weight: "bold" }, h), a ? o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        o.createElement(
                            i.Z,
                            { style: [c && s.row, b && s.switchVariant, n] },
                            p.map((e, t) => g({ "aria-posinset": t + 1, "aria-setsize": p.length, checked: e.value === w, disabled: d, name: u, switchStyle: b, horizontal: c, renderBorderWhenSelected: m, selectorBackgroundStyles: f, onChange: S(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(157396);
            const i = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        568320: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(717683),
                l = n(347101);
            const s = (e = {}) => {
                const t = o.useContext(a.Z),
                    { direction: n } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        267352: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M20.579 3.098c-3.035 1.41-5.521.931-8.154.422C10.1 3.072 7.704 2.624 5 3.515V2.001H3V22h2v-4.346c2.466-1.033 4.603-.641 7.047-.17 1.354.261 2.798.539 4.359.539 1.548 0 3.212-.273 5.015-1.11l.579-.269V2.438l-1.421.659zm-2.501 8.672c-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496h.001c.182.372.025.82-.348 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        213279: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm7.992 9c1.933 0 3.5-1.567 3.5-3.5S11.933 8.5 10 8.5 6.5 10.067 6.5 12s1.567 3.5 3.5 3.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        166074: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.423 19.999l-1.708 1.708-1.414-1.414 1.244-1.244c-.336-.426-.537-.964-.537-1.549v-11c0-1.381 1.119-2.5 2.5-2.5h11.5c.446 0 .859.146 1.192.394l2.101-2.101 1.414 1.414L4.508 19.914V20h-.085zm-.409-2.421l2.966-2.965c-1.36-1.572-1.293-3.95.199-5.442s3.871-1.559 5.443-.2l2.972-2.972H4.508c-.276 0-.5.224-.5.5v11c0 .027.002.054.006.079zm7.186-7.185c-.783-.583-1.896-.519-2.606.192-.711.71-.775 1.823-.192 2.606l2.798-2.798zm10.808-4.394v12l-4-3v2.5c0 1.381-1.12 2.5-2.5 2.5h-6.5v-2h6.5c.276 0 .5-.224.5-.5v-7l6-4.5zm-4 6.5l2 1.5v-4l-2 1.5v1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        161335: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        315951: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        133272: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        123638: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M20.28 1.293l-3.718 3.718C15.791 3.246 14.046 2 12 2 9.243 2 7 4.243 7 7v4c0 1.014.308 1.956.829 2.745L6.38 15.194c-.971-1.225-1.397-2.409-1.431-2.51l-1.897.633c.303.908.951 2.129 1.922 3.283l-2.693 2.693 1.414 1.414 17.999-18-1.414-1.414zM9 11V7c0-1.654 1.346-3 3-3 1.522 0 2.768 1.143 2.961 2.612l-5.664 5.664C9.112 11.887 9 11.458 9 10.999zm5.056 2.174c.04-.038.079-.077.117-.117L17 10.23v.771c0 2.757-2.243 5-5 5-.24 0-.469-.038-.7-.071l2.756-2.756zm4.996-.492l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631v2.053h-2v-2.053c-1.073-.116-2.029-.419-2.882-.836l1.517-1.517c.697.249 1.478.406 2.365.406 5.187 0 6.979-5.102 7.052-5.318z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        254944: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M22.21 2.793c-1.22-1.217-3.18-1.26-4.45-.097l-10.17 9.32C5.02 12.223 3 14.376 3 17v5h5c2.62 0 4.78-2.022 4.98-4.593L22.3 7.239c1.17-1.269 1.12-3.229-.09-4.446zM8 20H5v-3c0-1.657 1.34-3 3-3s3 1.343 3 3-1.34 3-3 3zM20.83 5.888l-8.28 9.033c-.5-1.09-1.38-1.971-2.47-2.47l9.03-8.28c.48-.44 1.22-.424 1.68.036s.48 1.201.04 1.681z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        885724: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        406727: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        415269: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M15.457.04L19.414 4l-3.957 3.96-1.414-1.42L15.586 5H12c-4.142 0-7.5 3.36-7.5 7.5S7.858 20 12 20s7.5-3.36 7.5-7.5v-1h2v1c0 5.25-4.253 9.5-9.5 9.5s-9.5-4.25-9.5-9.5S6.753 3 12 3h3.586l-1.543-1.54L15.457.04zM9.046 9.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        17412: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16.81 1.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15 2.95-4.02zM7.05 9.54l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5-1.41-1.42zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452661: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(18198),
                i = {
                    centroidDimension: function (e, t, n, o) {
                        var r = e.touchBank,
                            a = 0,
                            l = 0,
                            s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== s) s.touchActive && s.currentTimeStamp > t && ((a += o && n ? s.currentPageX : o && !n ? s.currentPageY : !o && n ? s.previousPageX : s.previousPageY), (l = 1));
                        else
                            for (var d = 0; d < r.length; d++) {
                                var c = r[d];
                                if (null != c && c.touchActive && c.currentTimeStamp >= t) {
                                    (a += o && n ? c.currentPageX : o && !n ? c.currentPageY : !o && n ? c.previousPageX : c.previousPageY), l++;
                                }
                            }
                        return l > 0 ? a / l : i.noCentroid;
                    },
                    currentCentroidXOfTouchesChangedAfter: function (e, t) {
                        return i.centroidDimension(e, t, !0, !0);
                    },
                    currentCentroidYOfTouchesChangedAfter: function (e, t) {
                        return i.centroidDimension(e, t, !1, !0);
                    },
                    previousCentroidXOfTouchesChangedAfter: function (e, t) {
                        return i.centroidDimension(e, t, !0, !1);
                    },
                    previousCentroidYOfTouchesChangedAfter: function (e, t) {
                        return i.centroidDimension(e, t, !1, !1);
                    },
                    currentCentroidX: function (e) {
                        return i.centroidDimension(e, 0, !0, !0);
                    },
                    currentCentroidY: function (e) {
                        return i.centroidDimension(e, 0, !1, !0);
                    },
                    noCentroid: -1,
                };
            const r = i;
            var a = r.currentCentroidXOfTouchesChangedAfter,
                l = r.currentCentroidYOfTouchesChangedAfter,
                s = r.previousCentroidXOfTouchesChangedAfter,
                d = r.previousCentroidYOfTouchesChangedAfter,
                c = r.currentCentroidX,
                h = r.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = l(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = s(t, n),
                            i = a(t, n),
                            r = d(t, n),
                            c = l(t, n),
                            h = e.dx + (i - o),
                            u = e.dy + (c - r),
                            v = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (h - e.dx) / v), (e.vy = (u - e.dy) / v), (e.dx = h), (e.dy = u), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && u._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (i) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = c(i.touchHistory)),
                                    (n.y0 = h(i.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(i, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(i, n)
                                ),
                                onResponderReject(o) {
                                    v(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    v(t, e.onPanResponderRelease, o, n), p(t), u._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var i = o.touchHistory;
                                    (n.numberActiveTouches = i.numberActiveTouches), v(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    v(t, e.onPanResponderTerminate, o, n), p(t), u._initializeGestureState(n);
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
            function v(e, t, n, i) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, i);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const m = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla.2215004a.js.map
