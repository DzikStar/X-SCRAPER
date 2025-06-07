"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b", "icons/IconPlus-js"],
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
                m = i(667115),
                p = i(175993),
                g = i(365023),
                f = i(292627),
                v = i(224162),
                _ = i(386802),
                w = i(537392),
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
                                { height: r, width: a } = (0, w.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: h, left: d, top: c, width: u } = l,
                                m = a - o,
                                p = d - n,
                                g = c - s,
                                f = d + u >= i,
                                v = c + h >= e,
                                _ = a - d >= i,
                                y = r - c >= e,
                                b = a >= d + u / 2 + i / 2 && d >= i / 2 - u / 2,
                                E = this.props.preferredVerticalOrientation,
                                I = ((t, e) => (t && "center" !== e ? ("left" === e ? "right" : "left") : e))(t, this.props.preferredHorizontalOrientation),
                                S = this.state.verticalOrientation || (({ canOrientDown: t, canOrientUp: e, verticalPreference: i }) => ((e && t) || (!e && !t) ? i : e ? "up" : "down"))({ verticalPreference: E, canOrientUp: v, canOrientDown: y }),
                                O = this.state.horizontalOrientation || (({ canOrientCenter: t, canOrientLeft: e, canOrientRight: i, horizontalPreference: n }) => ("center" === n && t ? "center" : !e || ("left" !== n && i) ? "right" : "left"))({ horizontalPreference: I, canOrientLeft: f, canOrientRight: _, canOrientCenter: b }),
                                T = this.props.isFixed ? d : p,
                                x = this.props.isFixed ? c : g,
                                R = "up" === S ? x + h - e : x;
                            let L = a - T - u - m;
                            "center" === O && (L = a - T - u / 2 - i / 2 - m), "right" === O && (L = a - T - i - m), this.setState({ top: Math.max(R, 0), right: L, verticalOrientation: S, horizontalOrientation: O });
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
                        x = void 0 === O,
                        R = I ? d.Z : s.Fragment,
                        L = `calc(100vh - ${O || 0}px)`,
                        B = (d) => {
                            const c = "rtl" === d,
                                m = [b.content, x && b.contentInitialRender, h && [b.contentFixed, { maxHeight: L }], { top: O, end: c ? void 0 : S, start: c ? S : void 0 }, o];
                            return s.createElement(
                                s.Fragment,
                                null,
                                a ? null : s.createElement(r.Z, { onClick: u, style: b.mask }),
                                s.createElement(r.Z, { ref: this._receiveBodyRectHelperRef, style: b.bodyRectHelper }),
                                s.createElement(w.ZP, null, ({ windowWidth: o }) => s.createElement(r.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < y.default.theme.breakpoints.medium ? b.rootNarrow : b.rootWide, m] }, x && "slide" === e ? i : s.createElement(l.Z, { animateMount: "up" !== T, duration: t, onAnimateComplete: this._handleAnimateComplete, show: !0, type: e }, ({ isAnimating: t }) => s.createElement(g.Z, { id: "Dropdown", minimizeReporting: t }, (t, e) => s.createElement(r.Z, (0, n.Z)({ ref: t() }, e({})), i))))),
                            );
                        };
                    return s.createElement(
                        v.ZP.Consumer,
                        null,
                        ({ direction: t }) => (
                            (this._languageDirection = t),
                            s.createElement(
                                r.Z,
                                { ref: this._receiveAnchorRef, style: b.anchor },
                                s.createElement(
                                    f.Z.Dropdown,
                                    null,
                                    s.createElement(p.Z.Consumer, null, (e) => s.createElement(_.Z.Consumer, null, ({ isModal: i }) => s.createElement(m.Z, { history: e, isModal: i, onDismiss: u }, E ? B(t) : s.createElement(c.Z, null, s.createElement(R, null, B(t)))))),
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
            i.d(e, { Z: () => L });
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
                m = i(461756),
                p = i(154003),
                g = i(530732),
                f = i(224162),
                v = i(392237),
                _ = i(301049),
                w = i(145858);
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
                        return w.bs.white(1);
                    case "dark":
                    case "business":
                        return w.bs.dim(1);
                    case "darker":
                        return w.bs.black(1);
                    default:
                        return t.colors.alwaysBlack;
                }
            }
            function T({ event: t, isCarouselLocked: e }) {
                const { key: i, target: n } = t;
                return (
                    [_.Z.ArrowLeft, _.Z.ArrowRight].includes(i) &&
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
            class x extends n.Component {
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
                            !T({ event: t, isCarouselLocked: i }) || (t.preventDefault(), ((!n && e === _.Z.ArrowLeft) || (n && e === _.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && e === _.Z.ArrowRight) || (n && e === _.Z.ArrowLeft)) && this._goToNextIndex());
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
                    return n.createElement(s.Z, { "aria-label": t, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [R.root, e] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: t, children: e, childrenStyle: i, contentPadding: o, isLocked: r, showOverflow: a } = this.props,
                        { listScrollPaddingStyle: l } = this.state,
                        h = this._getWithOffscreenItems(),
                        d = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(g.Z, { interactiveStyles: null, style: R.swipeableContainer }, ({ isFocused: c, isFocusedWithin: u, isHovered: m }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(m || c || u),
                            n.createElement(
                                s.Z,
                                { onLayout: this._handleSwipeableLayout, style: [R.swipeable, h || a ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    s.Z,
                                    { ref: this._list, role: "tablist", style: [R.list, r ? R.notScrollable : R.scrollable, d && R.listSafariRtl, h && R.addRoomForOffscreenItems, t, l], testID: "ScrollSnap-List" },
                                    e.map((t, r) => (t ? n.createElement(s.Z, { key: r, onClick: this._handleItemClick(r), ref: this._setChildRef(r), role: "presentation", style: [R.item, i, o ? (0 === r ? { marginStart: o } : r === e.length - 1 ? { marginEnd: o } : void 0) : void 0] }, t) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(m || c || u),
                        ),
                    );
                }
                _renderPreviousButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: o, showNavButtonsOnHover: r, withAddedNavButtonClickArea: l } = this.props,
                        { hidePrevButton: h } = this.state,
                        d = h || (r && !t) || i,
                        c = n.createElement(a.default, { style: [R.navButtonIcon, d && R.navButtonIconDisabled] }),
                        u = l && [R.navClickableArea, R.navClickableAreaPrev];
                    return n.createElement(s.Z, { onClick: this._handlePreviousClick, style: [R.navButton, u, o, d && R.hiddenNavButton, !m.Z.reducedMotionEnabled && R.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(p.ZP, { "aria-label": E, disabled: d, dominantColor: e, icon: c, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(t) {
                    const { dominantButtonColor: e, isLocked: i, navButtonStyle: o, showNavButtonsOnHover: r, withAddedNavButtonClickArea: a } = this.props,
                        { hideNextButton: h } = this.state,
                        d = h || (r && !t) || i,
                        c = n.createElement(l.default, { style: [R.navButtonIcon, d && R.navButtonIconDisabled] }),
                        u = a && [R.navClickableArea, R.navClickableAreaNext];
                    return n.createElement(s.Z, { onClick: this._handleNextClick, style: [R.navButton, R.navButtonNext, u, o, d && R.hiddenNavButton, !m.Z.reducedMotionEnabled && R.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(p.ZP, { "aria-label": b, disabled: d, dominantColor: e, icon: c, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
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
                    return m.Z.reducedMotionEnabled || t ? "auto" : "smooth";
                }
                handleNextSlide(t) {
                    this._handleNextClick(t);
                }
                _renderRightShadowOverlay() {
                    const { shadowStyle: t, withShadow: e } = this.props,
                        { hideNextButton: i } = this.state;
                    return e ? n.createElement(s.Z, { style: [R.rightGradientOverlay, t, !m.Z.reducedMotionEnabled && R.shadowAnimation, i && R.hiddenShadow] }) : null;
                }
                _renderLeftShadowOverlay() {
                    const { shadowStyle: t, withShadow: e } = this.props,
                        { hidePrevButton: i } = this.state;
                    return e ? n.createElement(s.Z, { style: [R.leftGradientOverlay, t, !m.Z.reducedMotionEnabled && R.shadowAnimation, i && R.hiddenShadow] }) : null;
                }
            }
            (x.contextType = f.ZP), (x.defaultProps = { children: [], dominantButtonColor: v.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const R = v.default.create((t) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: t.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: t.colors.white }, navButtonIconDisabled: { color: t.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: t.spaces.space12 }, navClickableAreaPrev: { paddingEnd: t.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${O(t)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: t.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${O(t)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                L = x;
        },
        568320: (t, e, i) => {
            i.r(e), i.d(e, { default: () => h });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(717683),
                a = i(347101);
            const l = (t = {}) => {
                const e = n.useContext(r.Z),
                    { direction: i } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [a.Z.root, t.style, e && a.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z" })) }, { writingDirection: i });
            };
            l.metadata = { width: 24, height: 24 };
            const h = l;
        },
        267352: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M20.579 3.098c-3.035 1.41-5.521.931-8.154.422C10.1 3.072 7.704 2.624 5 3.515V2.001H3V22h2v-4.346c2.466-1.033 4.603-.641 7.047-.17 1.354.261 2.798.539 4.359.539 1.548 0 3.212-.273 5.015-1.11l.579-.269V2.438l-1.421.659zm-2.501 8.672c-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496h.001c.182.372.025.82-.348 1z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
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
        166074: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.423 19.999l-1.708 1.708-1.414-1.414 1.244-1.244c-.336-.426-.537-.964-.537-1.549v-11c0-1.381 1.119-2.5 2.5-2.5h11.5c.446 0 .859.146 1.192.394l2.101-2.101 1.414 1.414L4.508 19.914V20h-.085zm-.409-2.421l2.966-2.965c-1.36-1.572-1.293-3.95.199-5.442s3.871-1.559 5.443-.2l2.972-2.972H4.508c-.276 0-.5.224-.5.5v11c0 .027.002.054.006.079zm7.186-7.185c-.783-.583-1.896-.519-2.606.192-.711.71-.775 1.823-.192 2.606l2.798-2.798zm10.808-4.394v12l-4-3v2.5c0 1.381-1.12 2.5-2.5 2.5h-6.5v-2h6.5c.276 0 .5-.224.5-.5v-7l6-4.5zm-4 6.5l2 1.5v-4l-2 1.5v1z" })) }, { writingDirection: e });
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
        315951: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        133272: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        123638: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M20.28 1.293l-3.718 3.718C15.791 3.246 14.046 2 12 2 9.243 2 7 4.243 7 7v4c0 1.014.308 1.956.829 2.745L6.38 15.194c-.971-1.225-1.397-2.409-1.431-2.51l-1.897.633c.303.908.951 2.129 1.922 3.283l-2.693 2.693 1.414 1.414 17.999-18-1.414-1.414zM9 11V7c0-1.654 1.346-3 3-3 1.522 0 2.768 1.143 2.961 2.612l-5.664 5.664C9.112 11.887 9 11.458 9 10.999zm5.056 2.174c.04-.038.079-.077.117-.117L17 10.23v.771c0 2.757-2.243 5-5 5-.24 0-.469-.038-.7-.071l2.756-2.756zm4.996-.492l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631v2.053h-2v-2.053c-1.073-.116-2.029-.419-2.882-.836l1.517-1.517c.697.249 1.478.406 2.365.406 5.187 0 6.979-5.102 7.052-5.318z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        254944: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M22.21 2.793c-1.22-1.217-3.18-1.26-4.45-.097l-10.17 9.32C5.02 12.223 3 14.376 3 17v5h5c2.62 0 4.78-2.022 4.98-4.593L22.3 7.239c1.17-1.269 1.12-3.229-.09-4.446zM8 20H5v-3c0-1.657 1.34-3 3-3s3 1.343 3 3-1.34 3-3 3zM20.83 5.888l-8.28 9.033c-.5-1.09-1.38-1.971-2.47-2.47l9.03-8.28c.48-.44 1.22-.424 1.68.036s.48 1.201.04 1.681z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        885724: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        379327: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        406727: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        415269: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.457.04L19.414 4l-3.957 3.96-1.414-1.42L15.586 5H12c-4.142 0-7.5 3.36-7.5 7.5S7.858 20 12 20s7.5-3.36 7.5-7.5v-1h2v1c0 5.25-4.253 9.5-9.5 9.5s-9.5-4.25-9.5-9.5S6.753 3 12 3h3.586l-1.543-1.54L15.457.04zM9.046 9.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        17412: (t, e, i) => {
            i.r(e), i.d(e, { default: () => l });
            var n = i(202784),
                s = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M16.81 1.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15 2.95-4.02zM7.05 9.54l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5-1.41-1.42zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42z" })) }, { writingDirection: e });
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
                                m = 0,
                                p = i,
                                g = s;
                            switch ((t.save(), o)) {
                                case n.Z.TOP_RIGHT:
                                    t.scale(-1, 1), (l = e.width - a.width - a.left), (u = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    t.rotate(Math.PI), (l = e.width - a.width - a.left), (h = e.height - a.height - a.top), (u = -i), (m = -s);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    t.scale(1, -1), (h = e.height - a.height - a.top), (m = -s);
                                    break;
                                case n.Z.LEFT_TOP:
                                    t.translate(i / 2, s / 2), t.rotate(-Math.PI / 2), t.scale(-1, 1), (l = a.top), (h = a.left), (d = a.height), (c = a.width), (u = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    t.translate(i / 2, s / 2), t.rotate(Math.PI / 2), (l = a.top), (h = e.height - a.width - a.left), (d = a.height), (c = a.width), (u = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    t.translate(i / 2, s / 2), t.rotate(Math.PI / 2), t.scale(-1, 1), (l = e.width - a.height - a.top), (h = e.height - a.width - a.left), (d = a.height), (c = a.width), (u = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    t.translate(i / 2, s / 2), t.rotate(-Math.PI / 2), (l = e.width - a.height - a.top), (h = a.left), (d = a.height), (c = a.width), (u = -s / 2), (m = -i / 2), (p = s), (g = i);
                            }
                            t.drawImage(e, l, h, d, c, u, m, p, g), t.restore();
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
            i.d(e, { Y7: () => m, ZP: () => b, m2: () => _ });
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
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (t) => t.orientation !== s.Z.TOP_LEFT && t.orientation !== s.Z.UNKNOWN,
                g = (t, e = d, i = c) => {
                    const { height: n, size: s, width: o } = t;
                    return o > i || n > i || s > e;
                },
                f = (t, e) => e || { top: 0, left: 0, width: t.width, height: t.height },
                v = (t, e) => {
                    const { height: i, left: n, top: s, width: o } = f(t, e);
                    return !(0 === s && 0 === n && o === t.width && i === t.height);
                };
            function _(t, e) {
                const { maxFileSize: i = d, maxDimension: n = c, cropData: s, jpgPixelsPerByteForResize: o } = e || {},
                    r = "image/jpeg" === t.type,
                    a = (t.width * t.height) / t.size;
                return p(t) || g(t, i, n) || v(t, s) || (r && !!o && a < o);
            }
            const w = (t, e) => {
                    const { height: i, width: n } = t;
                    return n <= e && i <= e ? { width: n, height: i } : n > i ? { width: e, height: Math.round(i / (n / e)) } : { width: Math.round(n / (i / e)), height: e };
                },
                y = (t) => ("function" == typeof t.decode ? t.decode() : Promise.resolve());
            function b(t, e) {
                const { maxFileSize: i = d, maxDimension: s = c, targetQuality: a = u, cropData: h } = e || {},
                    p = f(t, h);
                if (!_(t, e)) return Promise.resolve(t.fileHandle);
                if (!(0, r.DS)(t)) {
                    const t = new o.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(t);
                }
                if (t.isGif) {
                    const t = new o.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(t);
                }
                const g = (t) => l(t, { maxFileSize: i, maxDimension: s, targetQuality: a });
                return t
                    .withDimensionsAndOrientation()
                    .then(({ img: t, orientation: e }) => {
                        const i = ({ height: i, width: s }) => (0, n.$i)(t, s, i, e, p);
                        return y(t)
                            .then(() => ((t) => t(w(p, s)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const t = new o.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
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
            i.d(e, { Z: () => d, d: () => _ });
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
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || p), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), o(Math.ceil(i / h)))), this._clearState();
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
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: _.CANCELED }), this._clearState();
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
                    } else this._uploadError({ code: _.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === y.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(c, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: _.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
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
                            return (i = t?.code ? w[String(t.code)] : _.INTERNAL_ERROR), void this._uploadError({ ...t, code: i });
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
                        this.error = { code: _.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: _.INTERNAL_ERROR, message: t?.error });
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
                    const p = new Date(),
                        g = (o) => {
                            if (r) {
                                const o = [c, r].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, i, n, s, r - 1, a, h, d);
                                }, v);
                            } else w(o);
                        },
                        w = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: p, segmentBytes: d }), "function" == typeof s && s(E(y) || { code: _.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        y = new XMLHttpRequest();
                    y.open(t, c, !0),
                        (y.withCredentials = !0),
                        (y.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (y.onload = () => {
                            if (y.status >= 200 && y.status < 400) {
                                const t = E(y);
                                204 === y.status || t ? (this._stats(e, "success", { requestStartTime: p, segmentBytes: d }), n(t || {}), !u && h && h()) : g("parsererror");
                            } else y.status && 503 !== y.status ? w("invalid-response") : g("503");
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
                            const t = Math.max(1, new Date().getTime() - p.getTime()),
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
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                v = 1e3,
                _ = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                w = Object.freeze({ 0: _.INTERNAL_ERROR, 1: _.INVALID_MEDIA, 2: _.FILE_TOO_LARGE, 3: _.UNSUPPORTED_MEDIA, 4: _.TIMEOUT }),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b.6e23071a.js.map
