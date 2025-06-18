"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"],
    {
        194504: (e, t, i) => {
            i.d(t, { Z: () => k });
            var n = i(202784),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                a = i(894966),
                l = i(568320),
                d = i(161821),
                c = i(666536),
                h = i(837880),
                u = i(323265),
                v = i(461756),
                g = i(154003),
                p = i(530732),
                w = i(224162),
                f = i(392237),
                m = i(301049),
                b = i(145858);
            let _;
            const y = s().gea7aa3c,
                I = s().b6462b32,
                S = (e) =>
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
                x = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function C(e) {
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
                    [m.Z.ArrowLeft, m.Z.ArrowRight].includes(i) &&
                    !t &&
                    !(
                        (function (e) {
                            return e instanceof HTMLElement && e.isContentEditable;
                        })(n) ||
                        (function (e) {
                            return e instanceof HTMLElement && x.includes(e.nodeName);
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
                            !B({ event: e, isCarouselLocked: i }) || (e.preventDefault(), ((!n && t === m.Z.ArrowLeft) || (n && t === m.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && t === m.Z.ArrowRight) || (n && t === m.Z.ArrowLeft)) && this._goToNextIndex());
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
                            return (r = o ? (S(o) && o ? -1 * Math.min(0, i) : -1 * Math.min(0, i - (n - e))) : i), Math.ceil(r);
                        }),
                        (this._goToClosestOffScreen = (e) => {
                            const t = this._list.current,
                                { children: i, withSingleIndexButtons: n, withWraparound: o } = this.props,
                                r = this._isRTL(),
                                s = r !== ("Next" === e);
                            let a = this._focusedTabIndex;
                            if (t && t.children.length === i.length) {
                                const i = t.getBoundingClientRect(),
                                    n = "Previous" === e ? [...t.children] : [...t.children].reverse();
                                if (s) {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().right < i.right);
                                    a = r ? e - 1 : t.children.length - e;
                                } else {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().left > i.left);
                                    a = r ? t.children.length - e : e - 1;
                                }
                            }
                            (a = o ? (a + i.length) % i.length : (0, h.Z)(a, 0, i.length - 1)), this._focusItem(a, n ? void 0 : "Next" === e ? "start" : "end");
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
                    const { buttonsContainerStyle: e, children: t, childrenStyle: i, contentPadding: r, isLocked: s, showOverflow: a } = this.props,
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
                                { onLayout: this._handleSwipeableLayout, style: [L.swipeable, d || a ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    o.Z,
                                    { ref: this._list, role: "tablist", style: [L.list, s ? L.notScrollable : L.scrollable, c && L.listSafariRtl, d && L.addRoomForOffscreenItems, e, l], testID: "ScrollSnap-List" },
                                    t.map((e, s) => (e ? n.createElement(o.Z, { key: s, onClick: this._handleItemClick(s), ref: this._setChildRef(s), role: "presentation", style: [L.item, i, r ? (0 === s ? { marginStart: r } : s === t.length - 1 ? { marginEnd: r } : void 0) : void 0] }, e) : null)),
                                ),
                                this._renderLeftShadowOverlay(),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(v || h || u),
                        ),
                    );
                }
                _renderPreviousButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: s, withAddedNavButtonClickArea: l } = this.props,
                        { hidePrevButton: d } = this.state,
                        c = d || (s && !e) || i,
                        h = n.createElement(a.default, { style: [L.navButtonIcon, c && L.navButtonIconDisabled] }),
                        u = l && [L.navClickableArea, L.navClickableAreaPrev];
                    return n.createElement(o.Z, { onClick: this._handlePreviousClick, style: [L.navButton, u, r, c && L.hiddenNavButton, !v.Z.reducedMotionEnabled && L.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(g.ZP, { "aria-label": I, disabled: c, dominantColor: t, icon: h, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: s, withAddedNavButtonClickArea: a } = this.props,
                        { hideNextButton: d } = this.state,
                        c = d || (s && !e) || i,
                        h = n.createElement(l.default, { style: [L.navButtonIcon, c && L.navButtonIconDisabled] }),
                        u = a && [L.navClickableArea, L.navClickableAreaNext];
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
            (E.contextType = w.ZP), (E.defaultProps = { children: [], dominantButtonColor: f.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const L = f.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: e.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: e.colors.white }, navButtonIconDisabled: { color: e.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: e.spaces.space12 }, navClickableAreaPrev: { paddingEnd: e.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${C(e)} 100%)`, zIndex: 0 }, leftGradientOverlay: { position: "absolute", top: 0, start: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, ${C(e)} 0%, transparent 100%)`, zIndex: 0 }, shadowAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, hiddenShadow: { opacity: 0 } })),
                k = E;
        },
        267352: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M20.579 3.098c-3.035 1.41-5.521.931-8.154.422C10.1 3.072 7.704 2.624 5 3.515V2.001H3V22h2v-4.346c2.466-1.033 4.603-.641 7.047-.17 1.354.261 2.798.539 4.359.539 1.548 0 3.212-.273 5.015-1.11l.579-.269V2.438l-1.421.659zm-2.501 8.672c-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496h.001c.182.372.025.82-.348 1z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        806143: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        804417: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23.367 8.254l-3.455-2.878c-.73-.608-1.763-.751-2.63-.358L12.471 7.19c-.895.403-1.472 1.298-1.472 2.279v.692l-1.771-.8c.492-.673.771-1.496.771-2.361 0-2.206-1.794-4-4-4S2 4.794 2 7s1.794 4 4 4c.486 0 .969-.089 1.421-.261L10.212 12l-2.791 1.261C6.968 13.089 6.485 13 6 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-.865-.278-1.688-.771-2.361l1.771-.8v.692c0 .981.578 1.876 1.471 2.278l4.812 2.173c.869.393 1.9.25 2.629-.357l3.455-2.879L15.073 12l8.294-3.746zm-16.42.509C6.654 8.92 6.335 9 6 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2c0 .736-.403 1.412-1.053 1.763zM6 19c-1.103 0-2-.897-2-2s.897-2 2-2c.335 0 .654.08.947.237C7.596 15.588 8 16.263 8 17c0 1.103-.897 2-2 2zm7-9.531c0-.196.115-.375.294-.456l4.812-2.173c.065-.029.135-.044.205-.044.116 0 .23.04.321.116l1.001.834L13 10.741V9.469zm6.633 6.785l-1.001.835c-.146.121-.352.149-.525.071l-4.812-2.174c-.178-.08-.293-.259-.293-.455v-1.272l6.633 2.995z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        38502: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3 5.5C3 4.12 4.119 3 5.5 3h13C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13zm2.746 6.52c0 1.85 1.421 3.2 3.187 3.2v-.01h.003c1.369 0 2.154-.59 2.737-1.39l-1.22-.87c-.303.44-.812.73-1.39.73-.93 0-1.685-.75-1.685-1.68s.754-1.68 1.684-1.68c.559 0 1.051.27 1.357.69l1.207-.93c-.545-.76-1.36-1.29-2.62-1.29-1.872 0-3.26 1.41-3.26 3.21v.02zm6.584 0c0 1.85 1.421 3.2 3.185 3.2 1.368 0 2.154-.6 2.738-1.4l-1.22-.87c-.304.44-.813.74-1.39.74-.93 0-1.684-.76-1.684-1.69s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.93c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.41-3.258 3.21v.02z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        774447: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 12v3h-2.998v2h3v3h2v-3h3v-2h-3.001v-3H17zm-5 6.839c-3.871-2.34-6.053-4.639-7.127-6.609-1.112-2.04-1.031-3.7-.479-4.82.561-1.13 1.667-1.84 2.91-1.91 1.222-.06 2.68.51 3.892 2.16l.806 1.09.805-1.09c1.211-1.65 2.668-2.22 3.89-2.16 1.242.07 2.347.78 2.908 1.91.334.677.49 1.554.321 2.59h2.011c.153-1.283-.039-2.469-.539-3.48-.887-1.79-2.647-2.91-4.601-3.01-1.65-.09-3.367.56-4.796 2.01-1.43-1.45-3.147-2.1-4.798-2.01-1.954.1-3.714 1.22-4.601 3.01-.896 1.81-.846 4.17.514 6.67 1.353 2.48 4.003 5.12 8.382 7.67l.502.299v-2.32z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        133272: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        406727: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        398170: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M8.414 3H12c5.247 0 9.5 4.25 9.5 9.5S17.247 22 12 22s-9.5-4.25-9.5-9.5v-1h2v1c0 4.14 3.358 7.5 7.5 7.5s7.5-3.36 7.5-7.5S16.142 5 12 5H8.414l1.543 1.54-1.414 1.42L4.586 4 8.543.04l1.414 1.42L8.414 3zm.632 6.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => o, Re: () => h, VJ: () => a, ZF: () => u, hv: () => l, ku: () => n, qp: () => r, uv: () => s, v5: () => c });
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
                                    s = Array(r);
                                for (let e = 0; e < r; e++) s[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(s)], { type: e }));
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
                s = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (e) =>
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
                                s = r.width * t,
                                a = r.height * t;
                            (e.width = s),
                                (e.height = a),
                                o.drawImage(r, 0, 0, s, a),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06.7495215a.js.map
