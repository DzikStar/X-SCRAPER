"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"],
    {
        194504: (t, e, i) => {
            i.d(e, { Z: () => E });
            var n = i(202784),
                o = i(325686),
                s = i(111677),
                r = i.n(s),
                l = i(894966),
                a = i(568320),
                d = i(161821),
                h = i(666536),
                c = i(837880),
                u = i(323265),
                p = i(461756),
                f = i(154003),
                v = i(530732),
                w = i(224162),
                g = i(392237),
                _ = i(301049),
                b = i(145858);
            let m;
            const y = r().gea7aa3c,
                S = r().b6462b32,
                I = (t) =>
                    (function () {
                        if (void 0 !== m) return m;
                        const t = document.createElement("template");
                        t.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const e = t.content.firstChild;
                        if (!(e && e instanceof window.HTMLElement)) return m;
                        document.body && document.body.appendChild(e);
                        const i = e.scrollLeft;
                        return e.remove(), (m = 0 === i), m;
                    })() || !t,
                x = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function C(t) {
                switch (t.paletteName) {
                    case "light":
                        return b.bs.white(1);
                    case "dark":
                    case "business":
                        return b.bs.dim(1);
                    case "darker":
                        return b.bs.black(1);
                    default:
                        return t.colors.alwaysBlack;
                }
            }
            function B({ event: t, isCarouselLocked: e }) {
                const { key: i, target: n } = t;
                return (
                    [_.Z.ArrowLeft, _.Z.ArrowRight].includes(i) &&
                    !e &&
                    !(
                        (function (t) {
                            return t instanceof HTMLElement && t.isContentEditable;
                        })(n) ||
                        (function (t) {
                            return t instanceof HTMLElement && x.includes(t.nodeName);
                        })(n)
                    )
                );
            }
            class k extends n.Component {
                constructor(...t) {
                    super(...t),
                        (this._list = n.createRef()),
                        (this._focusedTabIndex = this.props.visibleItemIndex || 0),
                        (this._childRefs = {}),
                        (this._scrollLeft = 0),
                        (this._isMounted = !0),
                        (this.state = { buttonWidth: 0, hidePrevButton: !0, hideNextButton: !0, swipeableWidth: void 0 }),
                        (this.getListRef = () => this._list.current),
                        (this._setChildRef = (t) => (e) => {
                            this._childRefs[t] = e;
                        }),
                        (this._isRTL = () => {
                            const { direction: t } = this.context;
                            return "rtl" === t;
                        }),
                        (this._handlePreviousClick = (t) => {
                            t.stopPropagation(), this._goToClosestOffScreen("Previous");
                        }),
                        (this._handleNextClick = (t) => {
                            t.stopPropagation(), this._goToClosestOffScreen("Next");
                        }),
                        (this._handleSwipeableLayout = (t) => {
                            const {
                                nativeEvent: {
                                    layout: { width: e },
                                },
                            } = t;
                            e !== this.state.swipeableWidth && this._isMounted && (this._updateListScrollPadding(), this.setState({ swipeableWidth: e }));
                        }),
                        (this._handleButtonLayout = (t) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: e },
                                    },
                                } = t,
                                { buttonWidth: i } = this.state;
                            e > 0 && e !== i && this.setState({ buttonWidth: e });
                        }),
                        (this._handleItemClick = (t) => () => {
                            this._goToItem(t), (this._focusedTabIndex = t);
                        }),
                        (this._handleKeyDown = (t) => {
                            const { key: e } = t,
                                { isLocked: i } = this.props,
                                n = this._isRTL();
                            !B({ event: t, isCarouselLocked: i }) || (t.preventDefault(), ((!n && e === _.Z.ArrowLeft) || (n && e === _.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && e === _.Z.ArrowRight) || (n && e === _.Z.ArrowLeft)) && this._goToNextIndex());
                        }),
                        (this._setupIntersectionObserver = () => {
                            window.IntersectionObserver && ((this._observer = new window.IntersectionObserver(this._handleIntersection, { root: this._list.current, rootMargin: "5px", threshold: [0.5, 1] })), this._observeChildRefs());
                        }),
                        (this._observeChildRefs = () => {
                            this._observer &&
                                (this._observer.disconnect(),
                                (0, d.Z)(this._childRefs).forEach((t) => {
                                    t && this._observer.observe(t);
                                }));
                        }),
                        (this._handleIntersection = (t, e) => {
                            const { children: i, onVisibleRangeChange: n } = this.props;
                            this._handleScrollDebounce(),
                                t.forEach((t) => {
                                    const o = Array.from(e.root.children).indexOf(t.target);
                                    0 === o ? this.setState({ hidePrevButton: 1 === t.intersectionRatio }) : o === i.length - 1 && this.setState({ hideNextButton: 1 === t.intersectionRatio }), -1 !== o && n && n({ index: o, intersectionRatio: t.intersectionRatio });
                                });
                        }),
                        (this._handleScroll = () => {
                            const { onScroll: t } = this.props,
                                { swipeableWidth: e } = this.state;
                            if (t && e) {
                                const i = this._getLeftOffset(e);
                                t({ previous: this._scrollLeft, next: i }), (this._scrollLeft = i);
                            }
                        }),
                        (this._handleScrollDebounce = (0, h.Z)(this._handleScroll, 500)),
                        (this._scrollToOffset = (t, e) => {
                            const i = this._list.current;
                            i && i.scrollTo && i.scrollTo({ left: t, behavior: this._getScrollBehavior(e) });
                        }),
                        (this._getLeftOffset = (t) => {
                            const e = this._list.current,
                                i = e ? e.scrollLeft : 0,
                                n = e ? e.scrollWidth : 0,
                                o = this._isRTL();
                            let s = 0;
                            return (s = o ? (I(o) && o ? -1 * Math.min(0, i) : -1 * Math.min(0, i - (n - t))) : i), Math.ceil(s);
                        }),
                        (this._goToClosestOffScreen = (t) => {
                            const e = this._list.current,
                                { children: i, withSingleIndexButtons: n, withWraparound: o } = this.props,
                                s = this._isRTL(),
                                r = s !== ("Next" === t);
                            let l = this._focusedTabIndex;
                            if (e && e.children.length === i.length) {
                                const i = e.getBoundingClientRect(),
                                    n = "Previous" === t ? [...e.children] : [...e.children].reverse();
                                if (r) {
                                    const t = n.findIndex((t) => t.getBoundingClientRect().right < i.right);
                                    l = s ? t - 1 : e.children.length - t;
                                } else {
                                    const t = n.findIndex((t) => t.getBoundingClientRect().left > i.left);
                                    l = s ? e.children.length - t : t - 1;
                                }
                            }
                            (l = o ? (l + i.length) % i.length : (0, c.Z)(l, 0, i.length - 1)), this._focusItem(l, n ? void 0 : "Next" === t ? "start" : "end");
                        }),
                        (this._goToPreviousIndex = () => {
                            const { children: t, withWraparound: e } = this.props,
                                i = this._focusedTabIndex,
                                n = e ? t.length - 1 : 0,
                                o = 0 === i ? n : i - 1;
                            this._focusItem(o);
                        }),
                        (this._goToNextIndex = () => {
                            const { children: t, withWraparound: e } = this.props,
                                i = this._focusedTabIndex,
                                n = e ? 0 : t.length - 1,
                                o = i === t.length - 1 ? n : i + 1;
                            this._focusItem(o);
                        }),
                        (this._updateListScrollPadding = (t) => {
                            const { listScrollPaddingStyle: e } = this.state;
                            let i;
                            void 0 !== this.props.swipeablePaddingLeft && void 0 !== this.props.swipeablePaddingRight ? (i = `0 ${this.props.swipeablePaddingRight}px 0 ${this.props.swipeablePaddingLeft}px`) : this.state.buttonWidth && (i = `0 ${this.state.buttonWidth}px`), e?.scrollPadding !== i && this.setState({ listScrollPaddingStyle: { scrollPadding: i } });
                        });
                }
                componentDidMount() {
                    const { visibleItemIndex: t, withGlobalKeyboardNavigation: e } = this.props;
                    t && this._goToInitialItem(t), e && window.document.addEventListener("keydown", this._handleKeyDown), this._setupIntersectionObserver();
                }
                componentDidUpdate(t, e) {
                    this.props.updateObserverWithChildren && t.children.length !== this.props.children.length && this._observeChildRefs(), this._handleSelectedItemChange(t), this._updateListScrollPadding(), t.withGlobalKeyboardNavigation !== this.props.withGlobalKeyboardNavigation && (this.props.withGlobalKeyboardNavigation ? window.document.addEventListener("keydown", this._handleKeyDown) : window.document.removeEventListener("keydown", this._handleKeyDown));
                }
                componentWillUnmount() {
                    this._observer && this._observer.disconnect(), window.document.removeEventListener("keydown", this._handleKeyDown), (this._isMounted = !1);
                }
                render() {
                    const { "aria-label": t, style: e } = this.props;
                    return n.createElement(o.Z, { "aria-label": t, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [L.root, e] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: t, children: e, childrenStyle: i, contentPadding: s, isLocked: r, showOverflow: l } = this.props,
                        { listScrollPaddingStyle: a } = this.state,
                        d = this._getWithOffscreenItems(),
                        h = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(v.Z, { interactiveStyles: null, style: L.swipeableContainer }, ({ isFocused: c, isFocusedWithin: u, isHovered: p }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(p || c || u),
                            n.createElement(
                                o.Z,
                                { onLayout: this._handleSwipeableLayout, style: [L.swipeable, d || l ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    o.Z,
                                    { ref: this._list, role: "tablist", style: [L.list, r ? L.notScrollable : L.scrollable, h && L.listSafariRtl, d && L.addRoomForOffscreenItems, t, a], testID: "ScrollSnap-List" },
                                    e.map((t, r) => (t ? n.createElement(o.Z, { key: r, onClick: this._handleItemClick(r), ref: this._setChildRef(r), role: "presentation", style: [L.item, i, s ? (0 === r ? { marginStart: s } : r === e.length - 1 ? { marginEnd: s } : void 0) : void 0] }, t) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(p || c || u),
                        ),
                    );
                }
                _renderPreviousButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: s, showNavButtonsOnHover: r, withAddedNavButtonClickArea: a } = this.props,
                        { hidePrevButton: d } = this.state,
                        h = d || (r && !t) || i,
                        c = n.createElement(l.default, { style: [L.navButtonIcon, h && L.navButtonIconDisabled] }),
                        u = a && [L.navClickableArea, L.navClickableAreaPrev];
                    return n.createElement(o.Z, { onClick: this._handlePreviousClick, style: [L.navButton, u, s, h && L.hiddenNavButton, !p.Z.reducedMotionEnabled && L.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(f.ZP, { "aria-label": S, disabled: h, dominantColor: e, icon: c, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: s, showNavButtonsOnHover: r, withAddedNavButtonClickArea: l } = this.props,
                        { hideNextButton: d } = this.state,
                        h = d || (r && !t) || i,
                        c = n.createElement(a.default, { style: [L.navButtonIcon, h && L.navButtonIconDisabled] }),
                        u = l && [L.navClickableArea, L.navClickableAreaNext];
                    return n.createElement(o.Z, { onClick: this._handleNextClick, style: [L.navButton, L.navButtonNext, u, s, h && L.hiddenNavButton, !p.Z.reducedMotionEnabled && L.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(f.ZP, { "aria-label": y, disabled: h, dominantColor: e, icon: c, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _getWithOffscreenItems() {
                    const { withOffscreenItems: t } = this.props;
                    return !u.ZP.isSafari() && t;
                }
                _focusItem(t, e) {
                    const i = this._childRefs[t];
                    i && i.firstChild instanceof HTMLElement && (i.firstChild.focus({ preventScroll: !0 }), (this._focusedTabIndex = t), this._goToItem(t, e));
                }
                _handleSelectedItemChange(t) {
                    const { visibleItemIndex: e } = this.props;
                    "number" == typeof e && t.visibleItemIndex !== e && this._goToItem(e);
                }
                _goToInitialItem(t) {
                    const { isLocked: e } = this.props;
                    if (this._childRefs[t] && !e) {
                        const e = this._childRefs[t];
                        if (e) {
                            const t = e.getBoundingClientRect().left,
                                i = this._childRefs[0]?.getBoundingClientRect().left || 0;
                            this._scrollToOffset(t - i, !0);
                        }
                    }
                }
                _goToItem(t, e) {
                    const { isLocked: i, scrollToCenter: n, withScrollIntoView: o } = this.props;
                    if (this._childRefs[t] && !i) {
                        const i = this._childRefs[t];
                        if (o) {
                            if (i && i.scrollIntoView)
                                try {
                                    i.scrollIntoView({ behavior: this._getScrollBehavior(), block: "nearest", inline: n ? "center" : (e ?? "nearest") });
                                } catch (t) {
                                    i.scrollIntoView(!1);
                                }
                        } else this._list.current && (this._list.current.scrollLeft = i.offsetLeft);
                    }
                }
                _getScrollBehavior(t) {
                    return p.Z.reducedMotionEnabled || t ? "auto" : "smooth";
                }
                handleNextSlide(t) {
                    this._handleNextClick(t);
                }
                _renderRightShadowOverlay() {
                    const { shadowStyle: t, withShadow: e } = this.props,
                        { hideNextButton: i } = this.state;
                    return e ? n.createElement(o.Z, { style: [L.rightGradientOverlay, t, !p.Z.reducedMotionEnabled && L.shadowAnimation, i && L.hiddenShadow] }) : null;
                }
                _renderLeftShadowOverlay() {
                    const { shadowStyle: t, withShadow: e } = this.props,
                        { hidePrevButton: i } = this.state;
                    return e ? n.createElement(o.Z, { style: [L.leftGradientOverlay, t, !p.Z.reducedMotionEnabled && L.shadowAnimation, i && L.hiddenShadow] }) : null;
                }
            }
            (k.contextType = w.ZP), (k.defaultProps = { children: [], dominantButtonColor: g.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const L = g.default.create((t) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: t.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: t.colors.white }, navButtonIconDisabled: { color: t.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: t.spaces.space12 }, navClickableAreaPrev: { paddingEnd: t.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${C(t)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${C(t)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                E = k;
        },
        568320: (t, e, i) => {
            i.r(e), i.d(e, { default: () => d });
            var n = i(202784),
                o = i(890601),
                s = i(783427),
                r = i(717683),
                l = i(347101);
            const a = (t = {}) => {
                const e = n.useContext(r.Z),
                    { direction: i } = (0, s.Z)();
                return (0, o.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [l.Z.root, t.style, e && l.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        263272: (t, e, i) => {
            i.r(e), i.d(e, { default: () => a });
            var n = i(202784),
                o = i(890601),
                s = i(783427),
                r = i(347101);
            const l = (t = {}) => {
                const { direction: e } = (0, s.Z)();
                return (0, o.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: e });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla.67f40caa.js.map
