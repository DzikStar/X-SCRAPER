"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"],
    {
        194504: (e, t, i) => {
            i.d(t, { Z: () => k });
            var n = i(202784),
                o = i(325686),
                r = i(111677),
                a = i.n(r),
                s = i(894966),
                l = i(568320),
                d = i(161821),
                c = i(666536),
                h = i(837880),
                u = i(323265),
                v = i(461756),
                g = i(154003),
                p = i(530732),
                w = i(224162),
                m = i(392237),
                f = i(301049),
                b = i(145858);
            let _;
            const y = a().gea7aa3c,
                x = a().b6462b32,
                I = (e) =>
                    (function () {
                        if (void 0 !== _) return _;
                        const e = document.createElement("template");
                        e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const t = e.content.firstChild;
                        if (!(t && t instanceof window.HTMLElement)) return _;
                        document.body && document.body.appendChild(t);
                        const i = t.scrollLeft;
                        return t.remove(), (_ = 0 === i), _;
                    })() || !e,
                C = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function S(e) {
                switch (e.paletteName) {
                    case "light":
                        return b.bs.white(1);
                    case "dark":
                    case "business":
                        return b.bs.dim(1);
                    case "darker":
                        return b.bs.black(1);
                    default:
                        return e.colors.alwaysBlack;
                }
            }
            function B({ event: e, isCarouselLocked: t }) {
                const { key: i, target: n } = e;
                return (
                    [f.Z.ArrowLeft, f.Z.ArrowRight].includes(i) &&
                    !t &&
                    !(
                        (function (e) {
                            return e instanceof HTMLElement && e.isContentEditable;
                        })(n) ||
                        (function (e) {
                            return e instanceof HTMLElement && C.includes(e.nodeName);
                        })(n)
                    )
                );
            }
            class E extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._list = n.createRef()),
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
                                { buttonWidth: i } = this.state;
                            t > 0 && t !== i && this.setState({ buttonWidth: t });
                        }),
                        (this._handleItemClick = (e) => () => {
                            this._goToItem(e), (this._focusedTabIndex = e);
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t } = e,
                                { isLocked: i } = this.props,
                                n = this._isRTL();
                            !B({ event: e, isCarouselLocked: i }) || (e.preventDefault(), ((!n && t === f.Z.ArrowLeft) || (n && t === f.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && t === f.Z.ArrowRight) || (n && t === f.Z.ArrowLeft)) && this._goToNextIndex());
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
                            const { children: i, onVisibleRangeChange: n } = this.props;
                            this._handleScrollDebounce(),
                                e.forEach((e) => {
                                    const o = Array.from(t.root.children).indexOf(e.target);
                                    0 === o ? this.setState({ hidePrevButton: 1 === e.intersectionRatio }) : o === i.length - 1 && this.setState({ hideNextButton: 1 === e.intersectionRatio }), -1 !== o && n && n({ index: o, intersectionRatio: e.intersectionRatio });
                                });
                        }),
                        (this._handleScroll = () => {
                            const { onScroll: e } = this.props,
                                { swipeableWidth: t } = this.state;
                            if (e && t) {
                                const i = this._getLeftOffset(t);
                                e({ previous: this._scrollLeft, next: i }), (this._scrollLeft = i);
                            }
                        }),
                        (this._handleScrollDebounce = (0, c.Z)(this._handleScroll, 500)),
                        (this._scrollToOffset = (e, t) => {
                            const i = this._list.current;
                            i && i.scrollTo && i.scrollTo({ left: e, behavior: this._getScrollBehavior(t) });
                        }),
                        (this._getLeftOffset = (e) => {
                            const t = this._list.current,
                                i = t ? t.scrollLeft : 0,
                                n = t ? t.scrollWidth : 0,
                                o = this._isRTL();
                            let r = 0;
                            return (r = o ? (I(o) && o ? -1 * Math.min(0, i) : -1 * Math.min(0, i - (n - e))) : i), Math.ceil(r);
                        }),
                        (this._goToClosestOffScreen = (e) => {
                            const t = this._list.current,
                                { children: i, withSingleIndexButtons: n, withWraparound: o } = this.props,
                                r = this._isRTL(),
                                a = r !== ("Next" === e);
                            let s = this._focusedTabIndex;
                            if (t && t.children.length === i.length) {
                                const i = t.getBoundingClientRect(),
                                    n = "Previous" === e ? [...t.children] : [...t.children].reverse();
                                if (a) {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().right < i.right);
                                    s = r ? e - 1 : t.children.length - e;
                                } else {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().left > i.left);
                                    s = r ? t.children.length - e : e - 1;
                                }
                            }
                            (s = o ? (s + i.length) % i.length : (0, h.Z)(s, 0, i.length - 1)), this._focusItem(s, n ? void 0 : "Next" === e ? "start" : "end");
                        }),
                        (this._goToPreviousIndex = () => {
                            const { children: e, withWraparound: t } = this.props,
                                i = this._focusedTabIndex,
                                n = t ? e.length - 1 : 0,
                                o = 0 === i ? n : i - 1;
                            this._focusItem(o);
                        }),
                        (this._goToNextIndex = () => {
                            const { children: e, withWraparound: t } = this.props,
                                i = this._focusedTabIndex,
                                n = t ? 0 : e.length - 1,
                                o = i === e.length - 1 ? n : i + 1;
                            this._focusItem(o);
                        }),
                        (this._updateListScrollPadding = (e) => {
                            const { listScrollPaddingStyle: t } = this.state;
                            let i;
                            void 0 !== this.props.swipeablePaddingLeft && void 0 !== this.props.swipeablePaddingRight ? (i = `0 ${this.props.swipeablePaddingRight}px 0 ${this.props.swipeablePaddingLeft}px`) : this.state.buttonWidth && (i = `0 ${this.state.buttonWidth}px`), t?.scrollPadding !== i && this.setState({ listScrollPaddingStyle: { scrollPadding: i } });
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
                    return n.createElement(o.Z, { "aria-label": e, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [L.root, t] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: e, children: t, childrenStyle: i, contentPadding: r, isLocked: a, showOverflow: s } = this.props,
                        { listScrollPaddingStyle: l } = this.state,
                        d = this._getWithOffscreenItems(),
                        c = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(p.Z, { interactiveStyles: null, style: L.swipeableContainer }, ({ isFocused: h, isFocusedWithin: u, isHovered: v }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(v || h || u),
                            n.createElement(
                                o.Z,
                                { onLayout: this._handleSwipeableLayout, style: [L.swipeable, d || s ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    o.Z,
                                    { ref: this._list, role: "tablist", style: [L.list, a ? L.notScrollable : L.scrollable, c && L.listSafariRtl, d && L.addRoomForOffscreenItems, e, l], testID: "ScrollSnap-List" },
                                    t.map((e, a) => (e ? n.createElement(o.Z, { key: a, onClick: this._handleItemClick(a), ref: this._setChildRef(a), role: "presentation", style: [L.item, i, r ? (0 === a ? { marginStart: r } : a === t.length - 1 ? { marginEnd: r } : void 0) : void 0] }, e) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(v || h || u),
                        ),
                    );
                }
                _renderPreviousButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: a, withAddedNavButtonClickArea: l } = this.props,
                        { hidePrevButton: d } = this.state,
                        c = d || (a && !e) || i,
                        h = n.createElement(s.default, { style: [L.navButtonIcon, c && L.navButtonIconDisabled] }),
                        u = l && [L.navClickableArea, L.navClickableAreaPrev];
                    return n.createElement(o.Z, { onClick: this._handlePreviousClick, style: [L.navButton, u, r, c && L.hiddenNavButton, !v.Z.reducedMotionEnabled && L.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(g.ZP, { "aria-label": x, disabled: c, dominantColor: t, icon: h, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: a, withAddedNavButtonClickArea: s } = this.props,
                        { hideNextButton: d } = this.state,
                        c = d || (a && !e) || i,
                        h = n.createElement(l.default, { style: [L.navButtonIcon, c && L.navButtonIconDisabled] }),
                        u = s && [L.navClickableArea, L.navClickableAreaNext];
                    return n.createElement(o.Z, { onClick: this._handleNextClick, style: [L.navButton, L.navButtonNext, u, r, c && L.hiddenNavButton, !v.Z.reducedMotionEnabled && L.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(g.ZP, { "aria-label": y, disabled: c, dominantColor: t, icon: h, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _getWithOffscreenItems() {
                    const { withOffscreenItems: e } = this.props;
                    return !u.ZP.isSafari() && e;
                }
                _focusItem(e, t) {
                    const i = this._childRefs[e];
                    i && i.firstChild instanceof HTMLElement && (i.firstChild.focus({ preventScroll: !0 }), (this._focusedTabIndex = e), this._goToItem(e, t));
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
                                i = this._childRefs[0]?.getBoundingClientRect().left || 0;
                            this._scrollToOffset(e - i, !0);
                        }
                    }
                }
                _goToItem(e, t) {
                    const { isLocked: i, scrollToCenter: n, withScrollIntoView: o } = this.props;
                    if (this._childRefs[e] && !i) {
                        const i = this._childRefs[e];
                        if (o) {
                            if (i && i.scrollIntoView)
                                try {
                                    i.scrollIntoView({ behavior: this._getScrollBehavior(), block: "nearest", inline: n ? "center" : (t ?? "nearest") });
                                } catch (e) {
                                    i.scrollIntoView(!1);
                                }
                        } else this._list.current && (this._list.current.scrollLeft = i.offsetLeft);
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
                        { hideNextButton: i } = this.state;
                    return t ? n.createElement(o.Z, { style: [L.rightGradientOverlay, e, !v.Z.reducedMotionEnabled && L.shadowAnimation, i && L.hiddenShadow] }) : null;
                }
                _renderLeftShadowOverlay() {
                    const { shadowStyle: e, withShadow: t } = this.props,
                        { hidePrevButton: i } = this.state;
                    return t ? n.createElement(o.Z, { style: [L.leftGradientOverlay, e, !v.Z.reducedMotionEnabled && L.shadowAnimation, i && L.hiddenShadow] }) : null;
                }
            }
            (E.contextType = w.ZP), (E.defaultProps = { children: [], dominantButtonColor: m.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const L = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: e.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: e.colors.white }, navButtonIconDisabled: { color: e.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: e.spaces.space12 }, navClickableAreaPrev: { paddingEnd: e.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${S(e)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${S(e)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                k = E;
        },
        806143: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        263272: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        804579: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        315951: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        133272: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        620763: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        406727: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        786272: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        926628: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => o, Re: () => h, VJ: () => s, ZF: () => u, hv: () => l, ku: () => n, qp: () => r, uv: () => a, v5: () => c });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, i) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = n,
                                    o = atob(i),
                                    r = o.length,
                                    a = Array(r);
                                for (let e = 0; e < r; e++) a[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const r = (e, t) =>
                    new Promise((i, n) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), n(Error(u));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                n(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                s = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const i = new Image();
                            (i.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = i.width), (e.height = i.height), e.getContext("2d").drawImage(i, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let i = e,
                        n = 1;
                    for (; i && i.size > t; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (i = await d(i, 1, n))) : (i = await d(i, 0.7, n));
                        } catch (e) {
                            i = void 0;
                        }
                    return i;
                },
                d = (e, t, i) =>
                    new Promise((n, o) => {
                        const r = new Image();
                        (r.onload = () => {
                            const e = document.createElement("canvas"),
                                o = e.getContext("2d"),
                                a = r.width * t,
                                s = r.height * t;
                            (e.width = a),
                                (e.height = s),
                                o.drawImage(r, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (r.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (r.src = URL.createObjectURL(e));
                    }),
                c = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                u = "Reading aborted";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06.1d07665a.js.map
