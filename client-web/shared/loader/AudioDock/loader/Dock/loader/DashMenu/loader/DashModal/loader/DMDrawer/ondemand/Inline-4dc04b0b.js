"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"],
    {
        797553: (t, e, i) => {
            i.r(e), i.d(e, { default: () => E });
            var n = i(807896),
                s = i(202784),
                o = i(878052),
                r = i(325686),
                a = i(666536),
                l = i(815858),
                h = i(67877),
                d = i(743618),
                c = i(745153),
                u = i(666305),
                p = i(667115),
                m = i(175993),
                g = i(365023),
                f = i(292627),
                _ = i(224162),
                w = i(386802),
                v = i(537392),
                y = i(392237);
            const b = y.default.create((t) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${t.spaces.space64} * 6)` }, anchor: y.default.absoluteFillObject, mask: { ...y.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...y.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: t.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: t.colors.navigationBackground, boxShadow: t.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class E extends s.Component {
                constructor(t, e) {
                    super(t, e),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: t } = this.props;
                            t && t();
                        }),
                        (this._handleEsc = (t) => {
                            const { onDismiss: e } = this.props,
                                { altKey: i, ctrlKey: n, key: s, metaKey: o } = t;
                            !(i || n || o) && "Escape" === s && e();
                        }),
                        (this._receiveBodyRectHelperRef = (t) => {
                            t && this._bodyRectHelperNode !== t && ((this._bodyRectHelperNode = t), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (t) => {
                            t && this._anchorNode !== t && ((this._anchorNode = t), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (t) => {
                            t && this._contentNode !== t && ((this._contentNode = t), this._scheduleUpdate(), this._observe(t));
                        }),
                        (this._observe = (t) => {
                            const e = () => {
                                this._scheduleUpdate();
                            };
                            u.Z.observe(t, e),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    u.Z.unobserve(t, e), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const t = "rtl" === this._languageDirection,
                                e = this._contentNode.scrollHeight,
                                i = this._contentNode.scrollWidth,
                                { left: n, top: s, width: o } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: r, width: a } = (0, v.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: h, left: d, top: c, width: u } = l,
                                p = a - o,
                                m = d - n,
                                g = c - s,
                                f = d + u >= i,
                                _ = c + h >= e,
                                w = a - d >= i,
                                y = r - c >= e,
                                b = a >= d + u / 2 + i / 2 && d >= i / 2 - u / 2,
                                E = this.props.preferredVerticalOrientation,
                                I = ((t, e) => (t && "center" !== e ? ("left" === e ? "right" : "left") : e))(t, this.props.preferredHorizontalOrientation),
                                S = this.state.verticalOrientation || (({ canOrientDown: t, canOrientUp: e, verticalPreference: i }) => ((e && t) || (!e && !t) ? i : e ? "up" : "down"))({ verticalPreference: E, canOrientUp: _, canOrientDown: y }),
                                O = this.state.horizontalOrientation || (({ canOrientCenter: t, canOrientLeft: e, canOrientRight: i, horizontalPreference: n }) => ("center" === n && t ? "center" : !e || ("left" !== n && i) ? "right" : "left"))({ horizontalPreference: I, canOrientLeft: f, canOrientRight: w, canOrientCenter: b }),
                                T = this.props.isFixed ? d : m,
                                R = this.props.isFixed ? c : g,
                                x = "up" === S ? R + h - e : R;
                            let P = a - T - u - p;
                            "center" === O && (P = a - T - u / 2 - i / 2 - p), "right" === O && (P = a - T - i - p), this.setState({ top: Math.max(x, 0), right: P, verticalOrientation: S, horizontalOrientation: O });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, h.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, a.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), o.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), o.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: t, animateType: e, children: i, contentStyle: o, disableMask: a, isFixed: h, onDismiss: u, preventFocusShift: E, withKeyboardNavigation: I } = this.props,
                        { right: S, top: O, verticalOrientation: T } = this.state,
                        R = void 0 === O,
                        x = I ? d.Z : s.Fragment,
                        P = `calc(100vh - ${O || 0}px)`,
                        N = (d) => {
                            const c = "rtl" === d,
                                p = [b.content, R && b.contentInitialRender, h && [b.contentFixed, { maxHeight: P }], { top: O, end: c ? void 0 : S, start: c ? S : void 0 }, o];
                            return s.createElement(
                                s.Fragment,
                                null,
                                a ? null : s.createElement(r.Z, { onClick: u, style: b.mask }),
                                s.createElement(r.Z, { ref: this._receiveBodyRectHelperRef, style: b.bodyRectHelper }),
                                s.createElement(v.ZP, null, ({ windowWidth: o }) => s.createElement(r.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? b.rootNarrow : b.rootWide, p] }, R && "slide" === e ? i : s.createElement(l.Z, { animateMount: "up" !== T, duration: t, onAnimateComplete: this._handleAnimateComplete, show: !0, type: e }, ({ isAnimating: t }) => s.createElement(g.Z, { id: "Dropdown", minimizeReporting: t }, (t, e) => s.createElement(r.Z, (0, n.Z)({ ref: t() }, e({})), i))))),
                            );
                        };
                    return s.createElement(
                        _.ZP.Consumer,
                        null,
                        ({ direction: t }) => (
                            (this._languageDirection = t),
                            s.createElement(
                                r.Z,
                                { ref: this._receiveAnchorRef, style: b.anchor },
                                s.createElement(
                                    f.Z.Dropdown,
                                    null,
                                    s.createElement(m.Z.Consumer, null, (e) => s.createElement(w.Z.Consumer, null, ({ isModal: i }) => s.createElement(p.Z, { history: e, isModal: i, onDismiss: u }, E ? N(t) : s.createElement(c.Z, null, s.createElement(x, null, N(t)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            E.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        393058: (t, e, i) => {
            i.d(e, { Z: () => o });
            const n = {},
                s = ["touchend", "touchmove", "touchstart"];
            const o = {
                isTouchSupported: () =>
                    s.some(
                        (t) =>
                            !!(function (t, e) {
                                if (void 0 !== n[t]) return n[t];
                                const i = document.createElement(e || "div"),
                                    s = `on${t}`;
                                let o = s in i;
                                return o || (i.setAttribute(s, "return;"), (o = "function" == typeof i[s])), (n[t] = o), o;
                            })(t),
                    ),
            };
        },
        586035: (t, e, i) => {
            function n(t) {
                return Boolean(t.voiceInfo?.clipIndex);
            }
            i.d(e, { B: () => n });
        },
        67877: (t, e, i) => {
            i.d(e, { Z: () => n });
            const n = (t, e) => {
                let i = null;
                const n = () => {
                    (i = null), t();
                };
                return () => (i || (i = e(n)), i);
            };
        },
        194504: (t, e, i) => {
            i.d(e, { Z: () => P });
            var n = i(202784),
                s = i(325686),
                o = i(111677),
                r = i.n(o),
                a = i(894966),
                l = i(568320),
                h = i(161821),
                d = i(666536),
                c = i(837880),
                u = i(323265),
                p = i(461756),
                m = i(154003),
                g = i(530732),
                f = i(224162),
                _ = i(392237),
                w = i(301049),
                v = i(145858);
            let y;
            const b = r().gea7aa3c,
                E = r().b6462b32,
                I = (t) =>
                    (function () {
                        if (void 0 !== y) return y;
                        const t = document.createElement("template");
                        t.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const e = t.content.firstChild;
                        if (!(e && e instanceof window.HTMLElement)) return y;
                        document.body && document.body.appendChild(e);
                        const i = e.scrollLeft;
                        return e.remove(), (y = 0 === i), y;
                    })() || !t,
                S = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function O(t) {
                switch (t.paletteName) {
                    case "light":
                        return v.bs.white(1);
                    case "dark":
                    case "business":
                        return v.bs.dim(1);
                    case "darker":
                        return v.bs.black(1);
                    default:
                        return t.colors.alwaysBlack;
                }
            }
            function T({ event: t, isCarouselLocked: e }) {
                const { key: i, target: n } = t;
                return (
                    [w.Z.ArrowLeft, w.Z.ArrowRight].includes(i) &&
                    !e &&
                    !(
                        (function (t) {
                            return t instanceof HTMLElement && t.isContentEditable;
                        })(n) ||
                        (function (t) {
                            return t instanceof HTMLElement && S.includes(t.nodeName);
                        })(n)
                    )
                );
            }
            class R extends n.Component {
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
                            !T({ event: t, isCarouselLocked: i }) || (t.preventDefault(), ((!n && e === w.Z.ArrowLeft) || (n && e === w.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && e === w.Z.ArrowRight) || (n && e === w.Z.ArrowLeft)) && this._goToNextIndex());
                        }),
                        (this._setupIntersectionObserver = () => {
                            window.IntersectionObserver && ((this._observer = new window.IntersectionObserver(this._handleIntersection, { root: this._list.current, rootMargin: "5px", threshold: [0.5, 1] })), this._observeChildRefs());
                        }),
                        (this._observeChildRefs = () => {
                            this._observer &&
                                (this._observer.disconnect(),
                                (0, h.Z)(this._childRefs).forEach((t) => {
                                    t && this._observer.observe(t);
                                }));
                        }),
                        (this._handleIntersection = (t, e) => {
                            const { children: i, onVisibleRangeChange: n } = this.props;
                            this._handleScrollDebounce(),
                                t.forEach((t) => {
                                    const s = Array.from(e.root.children).indexOf(t.target);
                                    0 === s ? this.setState({ hidePrevButton: 1 === t.intersectionRatio }) : s === i.length - 1 && this.setState({ hideNextButton: 1 === t.intersectionRatio }), -1 !== s && n && n({ index: s, intersectionRatio: t.intersectionRatio });
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
                        (this._handleScrollDebounce = (0, d.Z)(this._handleScroll, 500)),
                        (this._scrollToOffset = (t, e) => {
                            const i = this._list.current;
                            i && i.scrollTo && i.scrollTo({ left: t, behavior: this._getScrollBehavior(e) });
                        }),
                        (this._getLeftOffset = (t) => {
                            const e = this._list.current,
                                i = e ? e.scrollLeft : 0,
                                n = e ? e.scrollWidth : 0,
                                s = this._isRTL();
                            let o = 0;
                            return (o = s ? (I(s) && s ? -1 * Math.min(0, i) : -1 * Math.min(0, i - (n - t))) : i), Math.ceil(o);
                        }),
                        (this._goToClosestOffScreen = (t) => {
                            const e = this._list.current,
                                { children: i, withSingleIndexButtons: n, withWraparound: s } = this.props,
                                o = this._isRTL(),
                                r = o !== ("Next" === t);
                            let a = this._focusedTabIndex;
                            if (e && e.children.length === i.length) {
                                const i = e.getBoundingClientRect(),
                                    n = "Previous" === t ? [...e.children] : [...e.children].reverse();
                                if (r) {
                                    const t = n.findIndex((t) => t.getBoundingClientRect().right < i.right);
                                    a = o ? t - 1 : e.children.length - t;
                                } else {
                                    const t = n.findIndex((t) => t.getBoundingClientRect().left > i.left);
                                    a = o ? e.children.length - t : t - 1;
                                }
                            }
                            (a = s ? (a + i.length) % i.length : (0, c.Z)(a, 0, i.length - 1)), this._focusItem(a, n ? void 0 : "Next" === t ? "start" : "end");
                        }),
                        (this._goToPreviousIndex = () => {
                            const { children: t, withWraparound: e } = this.props,
                                i = this._focusedTabIndex,
                                n = e ? t.length - 1 : 0,
                                s = 0 === i ? n : i - 1;
                            this._focusItem(s);
                        }),
                        (this._goToNextIndex = () => {
                            const { children: t, withWraparound: e } = this.props,
                                i = this._focusedTabIndex,
                                n = e ? 0 : t.length - 1,
                                s = i === t.length - 1 ? n : i + 1;
                            this._focusItem(s);
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
                    return n.createElement(s.Z, { "aria-label": t, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [x.root, e] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: t, children: e, childrenStyle: i, contentPadding: o, isLocked: r, showOverflow: a } = this.props,
                        { listScrollPaddingStyle: l } = this.state,
                        h = this._getWithOffscreenItems(),
                        d = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(g.Z, { interactiveStyles: null, style: x.swipeableContainer }, ({ isFocused: c, isFocusedWithin: u, isHovered: p }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(p || c || u),
                            n.createElement(
                                s.Z,
                                { onLayout: this._handleSwipeableLayout, style: [x.swipeable, h || a ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    s.Z,
                                    { ref: this._list, role: "tablist", style: [x.list, r ? x.notScrollable : x.scrollable, d && x.listSafariRtl, h && x.addRoomForOffscreenItems, t, l], testID: "ScrollSnap-List" },
                                    e.map((t, r) => (t ? n.createElement(s.Z, { key: r, onClick: this._handleItemClick(r), ref: this._setChildRef(r), role: "presentation", style: [x.item, i, o ? (0 === r ? { marginStart: o } : r === e.length - 1 ? { marginEnd: o } : void 0) : void 0] }, t) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(p || c || u),
                        ),
                    );
                }
                _renderPreviousButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: o, showNavButtonsOnHover: r, withAddedNavButtonClickArea: l } = this.props,
                        { hidePrevButton: h } = this.state,
                        d = h || (r && !t) || i,
                        c = n.createElement(a.default, { style: [x.navButtonIcon, d && x.navButtonIconDisabled] }),
                        u = l && [x.navClickableArea, x.navClickableAreaPrev];
                    return n.createElement(s.Z, { onClick: this._handlePreviousClick, style: [x.navButton, u, o, d && x.hiddenNavButton, !p.Z.reducedMotionEnabled && x.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(m.ZP, { "aria-label": E, disabled: d, dominantColor: e, icon: c, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: o, showNavButtonsOnHover: r, withAddedNavButtonClickArea: a } = this.props,
                        { hideNextButton: h } = this.state,
                        d = h || (r && !t) || i,
                        c = n.createElement(l.default, { style: [x.navButtonIcon, d && x.navButtonIconDisabled] }),
                        u = a && [x.navClickableArea, x.navClickableAreaNext];
                    return n.createElement(s.Z, { onClick: this._handleNextClick, style: [x.navButton, x.navButtonNext, u, o, d && x.hiddenNavButton, !p.Z.reducedMotionEnabled && x.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(m.ZP, { "aria-label": b, disabled: d, dominantColor: e, icon: c, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
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
                    const { isLocked: i, scrollToCenter: n, withScrollIntoView: s } = this.props;
                    if (this._childRefs[t] && !i) {
                        const i = this._childRefs[t];
                        if (s) {
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
                    return e ? n.createElement(s.Z, { style: [x.rightGradientOverlay, t, !p.Z.reducedMotionEnabled && x.shadowAnimation, i && x.hiddenShadow] }) : null;
                }
                _renderLeftShadowOverlay() {
                    const { shadowStyle: t, withShadow: e } = this.props,
                        { hidePrevButton: i } = this.state;
                    return e ? n.createElement(s.Z, { style: [x.leftGradientOverlay, t, !p.Z.reducedMotionEnabled && x.shadowAnimation, i && x.hiddenShadow] }) : null;
                }
            }
            (R.contextType = f.ZP), (R.defaultProps = { children: [], dominantButtonColor: _.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const x = _.default.create((t) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: t.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: t.colors.white }, navButtonIconDisabled: { color: t.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: t.spaces.space12 }, navClickableAreaPrev: { paddingEnd: t.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${O(t)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${O(t)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                P = R;
        },
        213279: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm7.992 9c1.933 0 3.5-1.567 3.5-3.5S11.933 8.5 10 8.5 6.5 10.067 6.5 12s1.567 3.5 3.5 3.5z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        63274: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 17 10", children: n.createElement("g", null, n.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 17, height: 10 };
            const l = a;
        },
        161335: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        620763: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        833057: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 9.76V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5v5.26L3.88 16H11v5l1 2 1-2v-5h7.12L17 9.76zM7.12 14L9 10.24V4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5.74L16.88 14H7.12z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        398170: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M8.414 3H12c5.247 0 9.5 4.25 9.5 9.5S17.247 22 12 22s-9.5-4.25-9.5-9.5v-1h2v1c0 4.14 3.358 7.5 7.5 7.5s7.5-3.36 7.5-7.5S16.142 5 12 5H8.414l1.543 1.54-1.414 1.42L4.586 4 8.543.04l1.414 1.42L8.414 3zm.632 6.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        19697: (t, e, i) => {
            i.d(e, { q8: () => h, $i: () => o });
            i(571372);
            var n = i(790187);
            const s = (t, e) => {
                const i = document.createElement("canvas");
                (i.width = t), (i.height = e);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, t, e), i;
            };
            function o(t, e, i, s, o) {
                return l(e, i).then(
                    (e) => (
                        (function (t, e, i, s, o, r) {
                            const a = r || { top: 0, left: 0, width: e.width, height: e.height };
                            let l = a.left,
                                h = a.top,
                                d = a.width,
                                c = a.height,
                                u = 0,
                                p = 0,
                                m = i,
                                g = s;
                            switch ((t.save(), o)) {
                                case n.Z.TOP_RIGHT:
                                    t.scale(-1, 1), (l = e.width - a.width - a.left), (u = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    t.rotate(Math.PI), (l = e.width - a.width - a.left), (h = e.height - a.height - a.top), (u = -i), (p = -s);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    t.scale(1, -1), (h = e.height - a.height - a.top), (p = -s);
                                    break;
                                case n.Z.LEFT_TOP:
                                    t.translate(i / 2, s / 2), t.rotate(-Math.PI / 2), t.scale(-1, 1), (l = a.top), (h = a.left), (d = a.height), (c = a.width), (u = -s / 2), (p = -i / 2), (m = s), (g = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    t.translate(i / 2, s / 2), t.rotate(Math.PI / 2), (l = a.top), (h = e.height - a.width - a.left), (d = a.height), (c = a.width), (u = -s / 2), (p = -i / 2), (m = s), (g = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    t.translate(i / 2, s / 2), t.rotate(Math.PI / 2), t.scale(-1, 1), (l = e.width - a.height - a.top), (h = e.height - a.width - a.left), (d = a.height), (c = a.width), (u = -s / 2), (p = -i / 2), (m = s), (g = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    t.translate(i / 2, s / 2), t.rotate(-Math.PI / 2), (l = e.width - a.height - a.top), (h = a.left), (d = a.height), (c = a.width), (u = -s / 2), (p = -i / 2), (m = s), (g = i);
                            }
                            t.drawImage(e, l, h, d, c, u, p, m, g), t.restore();
                        })(e.getContext("2d"), t, e.width, e.height, s, o),
                        e
                    ),
                );
            }
            const r = 3145728,
                a = 5242880;
            function l(t, e) {
                if (window.CanvasRenderingContext2D) {
                    const i = s(t, e);
                    return h(i)
                        .then(() => i)
                        .catch(() => {
                            const i = t * e;
                            if (i > a) {
                                const i = d(a, t, e);
                                return l(i.width, i.height);
                            }
                            if (i > r) {
                                const i = d(r, t, e);
                                return l(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function h(t) {
                return new Promise((e, i) => {
                    const n = t.toDataURL("image/jpeg");
                    n && "data:," !== n ? e(n) : i(new Error("Malformed canvas"));
                });
            }
            function d(t, e, i) {
                const n = Math.sqrt((t * i) / e),
                    s = (e * n) / i;
                return { height: Math.floor(n), width: Math.floor(s) };
            }
        },
        790187: (t, e, i) => {
            i.d(e, { C: () => o, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                s = (t, e, i = 65536) => {
                    let n = new Uint8Array([]),
                        s = 0;
                    function o(o, r, a) {
                        const l = o - s,
                            h = l + r;
                        if (l >= 0 && h <= n.length) a(n.subarray(l, h), o);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (n = new Uint8Array(this.result)), (s = o), a(n.subarray(0, r), o);
                            }),
                                (l.onerror = e.bind(null, 0)),
                                null !== t && l.readAsArrayBuffer(t.slice(o, o + Math.max(i, r)));
                        }
                    }
                    function r(t) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, t.subarray(0, 4))];
                        if (void 0 === i) return void e(0);
                        function n(e, n) {
                            let s = 0;
                            for (let o = 0; o < n; o++) s = (s << 8) + t[e + (i ? o : n - 1 - o)];
                            return s;
                        }
                        const s = t.length > 8 && n(4, 4);
                        if (!s || s + 2 > t.length) return void e(0);
                        let o = n(s, 2);
                        if (s + 12 * o + 6 > t.length) return void e(0);
                        let r = s + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === n(r, 2) && 3 === n(r + 2, 2) && 1 === n(r + 4, 4))) return void e(n(r + 8, 2));
                            r += 12;
                        }
                        e(0);
                    }
                    t instanceof Blob
                        ? o(0, 10, function t(i, n) {
                              const s = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === s) return void e(0);
                              const a = s < 208 || s > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === s && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? o(n + 10, a - 8, r) : o(n + 2 + a, 10, t);
                          })
                        : e(0);
                },
                o = (t, e) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        i
                            ? o(n.TOP_LEFT)
                            : s(
                                  t,
                                  (t) => {
                                      o(t);
                                  },
                                  e,
                              );
                    });
                };
        },
        276259: (t, e, i) => {
            i.d(e, { Lw: () => s, Re: () => c, VJ: () => a, ZF: () => u, hv: () => l, ku: () => n, qp: () => o, uv: () => r, v5: () => d });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function n(t) {
                const e = t.match(/=*$/);
                return e ? Math.floor(0.75 * (t.length - e[0].length)) : 0.75 * t.length;
            }
            function s(t) {
                return new Promise((e, i) => {
                    const n = t.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, t, i] = n,
                                    s = atob(i),
                                    o = s.length,
                                    r = Array(o);
                                for (let t = 0; t < o; t++) r[t] = s.charCodeAt(t);
                                e(new Blob([new Uint8Array(r)], { type: t }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const o = (t, e) =>
                    new Promise((i, n) => {
                        const s = new FileReader();
                        e &&
                            (e.signal.onabort = () => {
                                s.abort?.(), n(Error(u));
                            }),
                            (s.onload = (t) => {
                                t.target instanceof FileReader && t.target.result instanceof ArrayBuffer ? i(t.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (s.onerror = (t) => {
                                n(t);
                            }),
                            s.readAsArrayBuffer(t);
                    }),
                r = (t, e) => {
                    const i = document.createElement("a");
                    (i.href = t), (i.download = e), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (t) =>
                    ((t) =>
                        new Promise((e) => {
                            const i = new Image();
                            (i.onload = function () {
                                const t = document.createElement("canvas");
                                (t.width = i.width), (t.height = i.height), t.getContext("2d").drawImage(i, 0, 0), t.toBlob((t) => e(t), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = t);
                        }))(t).then((t) => navigator.clipboard.write([new ClipboardItem({ "image/png": t })])),
                l = async (t, e) => {
                    if (t.size <= e) return t;
                    let i = t,
                        n = 1;
                    for (; i && i.size > e; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (i = await h(i, 1, n))) : (i = await h(i, 0.7, n));
                        } catch (t) {
                            i = void 0;
                        }
                    return i;
                },
                h = (t, e, i) =>
                    new Promise((n, s) => {
                        const o = new Image();
                        (o.onload = () => {
                            const t = document.createElement("canvas"),
                                s = t.getContext("2d"),
                                r = o.width * e,
                                a = o.height * e;
                            (t.width = r),
                                (t.height = a),
                                s.drawImage(o, 0, 0, r, a),
                                t.toBlob(
                                    (t) => {
                                        n(new File([t], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (o.onerror = () => s(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(t));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                c = "image/gif",
                u = "Reading aborted";
        },
        549755: (t, e, i) => {
            i.d(e, { Z: () => n });
            i(571372);
            class n extends Error {
                constructor(t, e, i) {
                    super(t), (this.code = e), (this.type = i || null);
                }
            }
        },
        205074: (t, e, i) => {
            i.d(e, { DS: () => a, ZP: () => l });
            i(543673), i(240753), i(128399);
            var n = i(790187),
                s = i(276259),
                o = i(122123);
            function r(t, e) {
                const i = (function (t) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(t) >= 0;
                    })(e),
                    [s, o] = i ? [t.height, t.width] : [t.width, t.height];
                return { width: s, height: o };
            }
            const a = (t) => {
                const e = t instanceof l,
                    i = t.isImage || t.isGif,
                    n = t.orientation,
                    s = t.width && t.height,
                    o = t.img;
                return !!(e && i && n && s && o);
            };
            class l {
                constructor(t) {
                    (this.fileHandle = t), t instanceof File && (this.name = t.name), (this.size = t.size), (this.type = t.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === s.Re), (this.isImage = s.v5.some((t) => t === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((t) => {
                              const e = (e) => {
                                  const { height: i, width: n } = r(t, e);
                                  return (this.img = t), (this.width = n), (this.height = i), (this.orientation = e), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((t) => e(t === n.Z.UNKNOWN ? n.Z.TOP_LEFT : t))
                                  .catch(() => e(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (t, e, i) => {
            i.d(e, { gK: () => s, o2: () => r, po: () => o });
            var n = i(549755);
            const s = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(t) {
                return new Promise((e, i) => {
                    const o = (t, e) => {
                            const o = new n.Z(t, e, s.type);
                            i(o);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? e(r) : o("Image lacks height or width", s.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            o("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
            function r(t) {
                return new Promise((e, i) => {
                    const o = (t, e) => {
                            const o = new n.Z(t, e, s.type);
                            i(o);
                        },
                        r = new Image();
                    r.setAttribute("crossorigin", "anonymous"),
                        (r.onload = () => {
                            if (r.width && r.height) {
                                const t = document.createElement("canvas"),
                                    i = t.getContext("2d");
                                (t.width = r.width),
                                    (t.height = r.height),
                                    i.drawImage(r, 0, 0),
                                    t.toBlob((t) => {
                                        if (t) {
                                            const i = new File([t], "file.jpg", { type: "image/jpeg" });
                                            e(i);
                                        } else o("Failed to convert image to blob", s.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", s.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            o("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
        },
        514354: (t, e, i) => {
            i.d(e, { Q: () => l, S: () => a });
            var n = i(332775),
                s = i.n(n),
                o = i(276259),
                r = i(549755);
            const a = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (t, e) =>
                    (0, o.qp)(t, e)
                        .catch((t) => {
                            throw new r.Z(`An error occurred while reading the image file: ${t}`, t.message === o.ZF ? a.HASHING_ABORTED : a.ERROR_READING_IMAGE_FILE);
                        })
                        .then((t) => {
                            const e = s()(t);
                            if (e && "string" == typeof e) return e;
                            throw new r.Z("Hash is not a non-empty string", a.INVALID_HASH);
                        });
        },
        653843: (t, e, i) => {
            i.d(e, { Y7: () => p, ZP: () => b, m2: () => w });
            var n = i(19697),
                s = i(790187),
                o = i(549755),
                r = i(205074),
                a = i(276259);
            function l(t, { maxDimension: e, maxFileSize: i, targetQuality: n }) {
                return (function (t, e, i, n) {
                    function s(o, r) {
                        return h(t, t.width, t.height, o, r).then((t) => {
                            const l = t.width > i || t.height > i,
                                h = t.toDataURL("image/jpeg", n),
                                d = h.split(";base64,")[1],
                                c = (0, a.ku)(d);
                            if (l || c > e) {
                                let t = 0.8;
                                return l && (t = o > r ? i / o : i / r), s(o * t, r * t);
                            }
                            return h;
                        });
                    }
                    return s(t.width, t.height);
                })(t, i, e, n).then(a.Lw);
            }
            function h(t, e, i, s, o) {
                const r = e / 2,
                    a = i / 2;
                return t instanceof HTMLCanvasElement && e <= s && i <= o ? Promise.resolve(t) : r <= s && a <= o ? (0, n.$i)(t, s, o) : (0, n.$i)(t, r, a).then((t) => h(t, t.width, t.height, s, o));
            }
            const d = 5242880,
                c = 4096,
                u = 0.85,
                p = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (t) => t.orientation !== s.Z.TOP_LEFT && t.orientation !== s.Z.UNKNOWN,
                g = (t, e = d, i = c) => {
                    const { height: n, size: s, width: o } = t;
                    return o > i || n > i || s > e;
                },
                f = (t, e) => e || { top: 0, left: 0, width: t.width, height: t.height },
                _ = (t, e) => {
                    const { height: i, left: n, top: s, width: o } = f(t, e);
                    return !(0 === s && 0 === n && o === t.width && i === t.height);
                };
            function w(t, e) {
                const { maxFileSize: i = d, maxDimension: n = c, cropData: s, jpgPixelsPerByteForResize: o } = e || {},
                    r = "image/jpeg" === t.type,
                    a = (t.width * t.height) / t.size;
                return m(t) || g(t, i, n) || _(t, s) || (r && !!o && a < o);
            }
            const v = (t, e) => {
                    const { height: i, width: n } = t;
                    return n <= e && i <= e ? { width: n, height: i } : n > i ? { width: e, height: Math.round(i / (n / e)) } : { width: Math.round(n / (i / e)), height: e };
                },
                y = (t) => ("function" == typeof t.decode ? t.decode() : Promise.resolve());
            function b(t, e) {
                const { maxFileSize: i = d, maxDimension: s = c, targetQuality: a = u, cropData: h } = e || {},
                    m = f(t, h);
                if (!w(t, e)) return Promise.resolve(t.fileHandle);
                if (!(0, r.DS)(t)) {
                    const t = new o.Z("The provided file is not a valid image", p.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(t);
                }
                if (t.isGif) {
                    const t = new o.Z("Gifs cannot be processed.", p.GIF_IS_TOO_LARGE);
                    return Promise.reject(t);
                }
                const g = (t) => l(t, { maxFileSize: i, maxDimension: s, targetQuality: a });
                return t
                    .withDimensionsAndOrientation()
                    .then(({ img: t, orientation: e }) => {
                        const i = ({ height: i, width: s }) => (0, n.$i)(t, s, i, e, m);
                        return y(t)
                            .then(() => ((t) => t(v(m, s)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const t = new o.Z("Image cannot be processed", p.CANNOT_BE_PROCESSED);
                        return Promise.reject(t);
                    });
            }
        },
        465233: (t, e, i) => {
            i.d(e, { Z: () => s });
            var n = i(716406);
            function s(t) {
                return "object" != typeof t || null === t ? t : Array.isArray(t) ? t.map(s) : (0, n.Z)(t, (t) => s(t));
            }
        },
        459643: (t, e, i) => {
            i.d(e, { Z: () => n });
            const n = (t) => () => t;
        },
        666536: (t, e, i) => {
            i.d(e, { Z: () => o });
            var n = i(936386),
                s = i.n(n);
            const o = (t, e, i) => s()(t, e, i);
        },
        417144: (t, e, i) => {
            function n(t, e = 1) {
                let i = e;
                const n = new Map();
                let s = 0,
                    o = 0,
                    r = 0,
                    a = null;
                function l() {
                    n.clear(), (s = 0), (o = 0), (r = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        n.set(t, { time: Date.now(), bytes: e }), o || (o = Date.now());
                    },
                    uploadFinish: function (h, d) {
                        const c = n.get(h);
                        c &&
                            ((s += d - c.bytes),
                            n.delete(h),
                            ++r === i &&
                                (function () {
                                    if (!o) return;
                                    const n = Date.now() - o;
                                    if (n <= 0) return;
                                    if (1 !== e) return;
                                    const r = s / n;
                                    if (r < 5e3 && 1 === i) return;
                                    !a || a.byterate < r ? ((i += 1), t(), (a = { byterate: r, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    l();
                                })());
                    },
                    reset: l,
                    getPoolSize: () => i,
                    start: function () {
                        for (let e = 0; e < i; ++e) t();
                    },
                };
            }
            i.d(e, { Z: () => d, d: () => w });
            i(543673), i(240753), i(128399);
            function s(t) {
                const e = new URLSearchParams();
                for (const i of Object.keys(t)) {
                    const n = t[i];
                    n && e.set(i, n);
                }
                return `&${String(e)}`;
            }
            function o(t, e = a, i = r) {
                const n = Math.max(t, e);
                return Math.min(n, i);
            }
            const r = 5242880,
                a = 65536,
                l = 2e3,
                h = 1e4;
            class d {
                constructor(t, e = b) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || m), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), o(Math.ceil(i / h)))), this._clearState();
                }
                upload(t) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== t.trimRanges || this.uploadOptions.extraFinalizeParams !== t.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== t.extraInitParams) && this._clearState(),
                        (this.uploadOptions = t),
                        this.state !== y.SUCCEEDED && this.state !== y.PENDING && ((this.state = y.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = t.withMultiRequests
                            ? n(() => {
                                  this._startNextAppendSegment();
                              }, t.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: w.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(t, e) {
                    (this.mediaId = t), (this.uploadOptions = e || b), (this.state = y.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const t of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[t]), delete this.timeoutIdMap[t];
                    (this.state = y.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = b),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const t = window.navigator.connection;
                                if (t) {
                                    const e = t.type || t.effectiveType;
                                    if (t.downlink) return o(((1e3 * t.downlink) / 8 / 2) * l);
                                    if ("wifi" === e) return o(5 * a);
                                }
                                return o(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: t }) => t.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(t, e, i, n = b) {
                    (this.uploadOptions = n), (this.state = y.PENDING), (this.progressMode = "uploading");
                    let o = s({ source_url: t, media_type: e, media_category: i });
                    (o += this.uploadOptions.extraInitParams || ""), (o += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        o,
                        (t) => {
                            (this.mediaId = t.media_id_string), this._getStatus();
                        },
                        (...t) => this._uploadError(...t),
                        u,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const t = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (t.enable_1080p_variant = String(!0));
                        const { mediaItem: e } = this.uploadOptions;
                        if (e?.mediaFile?.duration) {
                            const i = 1e3 * e.mediaFile.duration;
                            t.video_duration_ms = String(i);
                        }
                        let i = s(t);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...t) => this._initSuccess(...t),
                                (...t) => this._uploadError(...t),
                                u,
                            );
                    } else this._uploadError({ code: w.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === y.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(c, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: w.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, e);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let t = 0;
                    this.inflightSegments.forEach(({ bytes: e }) => (t += e));
                    const e = t + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - e);
                    if (i <= 0) return;
                    const n = new FormData();
                    if (this.fileHandle) {
                        const t = this.fileHandle.slice(e, e + i);
                        n.append("media", t);
                    }
                    const o = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = s({ media_id: this.mediaId, segment_index: String(o) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === y.PENDING) {
                                    const t = this.inflightSegments.get(o);
                                    t && (this.inflightSegments.delete(o), (this.uploadedBytes += t.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...t) => this._uploadError(...t),
                            5,
                            n,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(o, { bytes: i, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = y.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const t = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (t.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (t.allow_async = String(!0)), this.retainMediaForever && (t.ttl = "infinite");
                        let e = s(t);
                        (e += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                e,
                                (...t) => this._finalizeOrStatusSuccess(...t),
                                (...t) => this._uploadError(...t),
                                u,
                            );
                    }
                }
                _finalizeOrStatusSuccess(t) {
                    this._setSessionTimeout(t.expires_after_secs);
                    const e = t.processing_info;
                    if (!e) return void this._finalizeSuccess(t);
                    let i = 0;
                    switch (e.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof e.progress_percent && (i = e.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(t);
                        case "failed": {
                            const t = e.error;
                            let i;
                            return (i = t?.code ? v[String(t.code)] : w.INTERNAL_ERROR), void this._uploadError({ ...t, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const n = e.check_after_secs || 10;
                    setTimeout((...t) => this._getStatus(...t), 1e3 * n);
                }
                _getStatus() {
                    if (this.state === y.PENDING) {
                        const t = s({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            t,
                            (...t) => this._finalizeOrStatusSuccess(...t),
                            (...t) => this._uploadError(...t),
                            u,
                        );
                    }
                }
                _finalizeSuccess(t) {
                    this.state === y.PENDING && ((this.state = y.SUCCEEDED), this._notifyResult());
                }
                _uploadError(t) {
                    if (this.state !== y.PENDING) return;
                    const e = t.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (e) {
                        const t = JSON.parse(e[0]);
                        this.error = { code: w.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: w.INTERNAL_ERROR, message: t?.error });
                    (this.state = y.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(t, e, i) {
                    this.state !== y.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(t, this.progressMode, e, i);
                }
                _notifyResult() {
                    this.state === y.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === y.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(t, e, i = {}) {
                    const n = i.requestStartTime || this.initStartTime,
                        s = new Date().getTime() - n.getTime();
                    if (((this.totalUploadDuration += s), this.uploadOptions.stats)) {
                        const n = { mediaType: this.mediaType || "", command: t, status: e, duration: s, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (n.appendByteSize = i.segmentBytes), this.uploadOptions.stats(n);
                    }
                }
                _sendXhr(t, e, i, n, s, r, a, h, d = 0) {
                    const c = `${this.uploadUrl}?command=${e}${i}`;
                    let u = !1;
                    const m = new Date(),
                        g = (o) => {
                            if (r) {
                                const o = [c, r].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, i, n, s, r - 1, a, h, d);
                                }, _);
                            } else v(o);
                        },
                        v = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: m, segmentBytes: d }), "function" == typeof s && s(E(y) || { code: w.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        y = new XMLHttpRequest();
                    y.open(t, c, !0),
                        (y.withCredentials = !0),
                        (y.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || p),
                        (y.onload = () => {
                            if (y.status >= 200 && y.status < 400) {
                                const t = E(y);
                                204 === y.status || t ? (this._stats(e, "success", { requestStartTime: m, segmentBytes: d }), n(t || {}), !u && h && h()) : g("parsererror");
                            } else y.status && 503 !== y.status ? v("invalid-response") : g("503");
                        }),
                        (y.onerror = () => g("error")),
                        (y.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let b = !1;
                    y.upload.onprogress = (t) => {
                        b ? t.loaded === t.total && this._bitrateMonitor?.uploadFinish(c, t.total) : ((b = !0), this._bitrateMonitor?.uploadStart(c, t.loaded));
                        const e = t.loaded,
                            i = ((this.uploadedBytes + e) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), e / t.total > f && !u && ((u = !0), a))) {
                            const t = Math.max(1, new Date().getTime() - m.getTime()),
                                i = this.minSegmentBytes,
                                n = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (t) {
                                const e = t.idealUploadTimeMs || l,
                                    i = t.sentBytes / t.uploadTimeMs;
                                return o(Math.round(e * i), t.minSegmentBytes, t.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: e, uploadTimeMs: t, maxSegmentBytes: n, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof h && h();
                        }
                    };
                    for (const t in this.sruHeaders) y.setRequestHeader(t, this.sruHeaders[t]);
                    return a ? y.send(a) : y.send(), y;
                }
            }
            const c = 2147483647,
                u = 1,
                p = 45e3,
                m = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                _ = 1e3,
                w = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                v = Object.freeze({ 0: w.INTERNAL_ERROR, 1: w.INVALID_MEDIA, 2: w.FILE_TOO_LARGE, 3: w.UNSUPPORTED_MEDIA, 4: w.TIMEOUT }),
                y = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                b = {};
            function E(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b.72342bda.js.map
