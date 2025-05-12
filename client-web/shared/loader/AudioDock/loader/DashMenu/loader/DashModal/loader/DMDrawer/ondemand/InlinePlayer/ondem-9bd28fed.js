"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"],
    {
        194504: (e, t, i) => {
            i.d(t, { Z: () => k });
            var n = i(202784),
                o = i(325686),
                r = i(674132),
                l = i.n(r),
                a = i(894966),
                s = i(568320),
                d = i(161821),
                c = i(666536),
                h = i(837880),
                u = i(323265),
                p = i(461756),
                g = i(154003),
                v = i(530732),
                m = i(224162),
                b = i(392237),
                f = i(301049);
            let w;
            const y = l().gea7aa3c,
                _ = l().b6462b32,
                C = (e) =>
                    (function () {
                        if (void 0 !== w) return w;
                        const e = document.createElement("template");
                        e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const t = e.content.firstChild;
                        if (!(t && t instanceof window.HTMLElement)) return w;
                        document.body && document.body.appendChild(t);
                        const i = t.scrollLeft;
                        return t.remove(), (w = 0 === i), w;
                    })() || !e,
                S = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function x({ event: e, isCarouselLocked: t }) {
                const { key: i, target: n } = e;
                return (
                    [f.Z.ArrowLeft, f.Z.ArrowRight].includes(i) &&
                    !t &&
                    !(
                        (function (e) {
                            return e instanceof HTMLElement && e.isContentEditable;
                        })(n) ||
                        (function (e) {
                            return e instanceof HTMLElement && S.includes(e.nodeName);
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
                            !x({ event: e, isCarouselLocked: i }) || (e.preventDefault(), ((!n && t === f.Z.ArrowLeft) || (n && t === f.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && t === f.Z.ArrowRight) || (n && t === f.Z.ArrowLeft)) && this._goToNextIndex());
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
                            return (r = o ? (C(o) && o ? -1 * Math.min(0, i) : -1 * Math.min(0, i - (n - e))) : i), Math.ceil(r);
                        }),
                        (this._goToClosestOffScreen = (e) => {
                            const t = this._list.current,
                                { children: i, withSingleIndexButtons: n, withWraparound: o } = this.props,
                                r = this._isRTL(),
                                l = r !== ("Next" === e);
                            let a = this._focusedTabIndex;
                            if (t && t.children.length === i.length) {
                                const i = t.getBoundingClientRect(),
                                    n = "Previous" === e ? [...t.children] : [...t.children].reverse();
                                if (l) {
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
                    return n.createElement(o.Z, { "aria-label": e, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [Z.root, t] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: e, children: t, childrenStyle: i, contentPadding: r, isLocked: l, showOverflow: a } = this.props,
                        { listScrollPaddingStyle: s } = this.state,
                        d = this._getWithOffscreenItems(),
                        c = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(v.Z, { interactiveStyles: null, style: Z.swipeableContainer }, ({ isFocused: h, isFocusedWithin: u, isHovered: p }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(p || h || u),
                            n.createElement(
                                o.Z,
                                { onLayout: this._handleSwipeableLayout, style: [Z.swipeable, d || a ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    o.Z,
                                    { ref: this._list, role: "tablist", style: [Z.list, l ? Z.notScrollable : Z.scrollable, c && Z.listSafariRtl, d && Z.addRoomForOffscreenItems, e, s], testID: "ScrollSnap-List" },
                                    t.map((e, l) => (e ? n.createElement(o.Z, { key: l, onClick: this._handleItemClick(l), ref: this._setChildRef(l), role: "presentation", style: [Z.item, i, r ? (0 === l ? { marginStart: r } : l === t.length - 1 ? { marginEnd: r } : void 0) : void 0] }, e) : null)),
                                ),
                            ),
                            this._renderNextButton(p || h || u),
                        ),
                    );
                }
                _renderPreviousButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: l, withAddedNavButtonClickArea: s } = this.props,
                        { hidePrevButton: d } = this.state,
                        c = d || (l && !e) || i,
                        h = n.createElement(a.default, { style: [Z.navButtonIcon, c && Z.navButtonIconDisabled] }),
                        u = s && [Z.navClickableArea, Z.navClickableAreaPrev];
                    return n.createElement(o.Z, { onClick: this._handlePreviousClick, style: [Z.navButton, u, r, c && Z.hiddenNavButton, !p.Z.reducedMotionEnabled && Z.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(g.ZP, { "aria-label": _, disabled: c, dominantColor: t, icon: h, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: l, withAddedNavButtonClickArea: a } = this.props,
                        { hideNextButton: d } = this.state,
                        c = d || (l && !e) || i,
                        h = n.createElement(s.default, { style: [Z.navButtonIcon, c && Z.navButtonIconDisabled] }),
                        u = a && [Z.navClickableArea, Z.navClickableAreaNext];
                    return n.createElement(o.Z, { onClick: this._handleNextClick, style: [Z.navButton, Z.navButtonNext, u, r, c && Z.hiddenNavButton, !p.Z.reducedMotionEnabled && Z.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(g.ZP, { "aria-label": y, disabled: c, dominantColor: t, icon: h, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
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
                    return p.Z.reducedMotionEnabled || e ? "auto" : "smooth";
                }
                handleNextSlide(e) {
                    this._handleNextClick(e);
                }
            }
            (E.contextType = m.ZP), (E.defaultProps = { children: [], dominantButtonColor: b.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0 });
            const Z = b.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: e.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: e.colors.white }, navButtonIconDisabled: { color: e.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: e.spaces.space12 }, navClickableAreaPrev: { paddingEnd: e.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" } })),
                k = E;
        },
        796684: (e, t, i) => {
            i.d(t, { Z: () => u });
            var n = i(202784),
                o = i(325686),
                r = i(913973),
                l = i(516951),
                a = i(731708),
                s = i(454740),
                d = i(58881),
                c = i(530732),
                h = i(392237);
            const u = (e) => {
                    const { "aria-label": t, "aria-posinset": i, "aria-setsize": u, checked: v, containerStyle: m, decoration: b, description: f, disabled: w, label: y, name: _, onChange: C, testID: S } = e,
                        x = "string" == typeof y ? n.createElement(a.ZP, { weight: "bold" }, y) : y,
                        E = "string" == typeof f,
                        Z = f ? (E ? n.createElement(a.ZP, { color: "gray700", style: s.W.description }, f) : n.createElement(o.Z, { style: p.descriptionComponent }, f)) : null,
                        k = d.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, customHoverBackgroundColor: h.default.theme.colors.transparent, customPressedBackgroundColor: h.default.theme.colors.transparent }),
                        I = d.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: v ? h.default.theme.colors.primary : h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(c.Z, { disabled: w, interactiveStyles: k, role: "label", style: [s.W.root, m], testID: S }, (e) => n.createElement(n.Fragment, null, b ? n.createElement(o.Z, { style: s.W.decorationContainer }, b) : null, n.createElement(o.Z, { style: s.W.content }, x, E && Z), n.createElement(o.Z, { style: p.radioContainer }, n.createElement(c.Z, { disabled: w, interactiveStyles: I, interactivityState: e, style: p.radioBackground }, n.createElement(o.Z, { style: [p.circle, v && p.circleActive, w && p.circleDisabled, v && w && p.circleCheckedAndDisabled] }, v ? n.createElement(r.default, { style: p.checkMark }) : null)), n.createElement("input", { "aria-label": t, "aria-posinset": i, "aria-setsize": u, checked: v, disabled: w, name: _, onChange: v ? l.Z : C, style: g, type: "radio" })))),
                        E ? null : Z,
                    );
                },
                p = h.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                g = { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        896632: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                o = i(325686),
                r = i(731708),
                l = i(392237);
            let a = 1;
            const s = l.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.infinite } })),
                d = (e) => {
                    const { "aria-label": t, backgroundStyles: i, description: l, disabled: d, horizontal: c, label: h, name: u, onChange: p, options: g, renderBorderWhenSelected: v, renderSelector: m, selectorBackgroundStyles: b, switchStyle: f, value: w } = e,
                        y = (() => {
                            const e = n.useRef("");
                            return (
                                n.useEffect(() => {
                                    (e.current = `CONTROL_${a}_LABEL`), (a += 1);
                                }, []),
                                e
                            );
                        })(),
                        _ = (e) => () => {
                            p(u, e);
                        };
                    return n.createElement(
                        o.Z,
                        { "aria-label": t, "aria-labelledby": h && !t ? y.current : void 0, role: "radiogroup", style: d && s.disabled },
                        h ? n.createElement(o.Z, { id: y.current, role: "label", style: s.header }, n.createElement(r.ZP, { style: s.label, weight: "bold" }, h), l ? n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, l) : null) : null,
                        n.createElement(
                            o.Z,
                            { style: [c && s.row, f && s.switchVariant, i] },
                            g.map((e, t) => m({ "aria-posinset": t + 1, "aria-setsize": g.length, checked: e.value === w, disabled: d, name: u, switchStyle: f, horizontal: c, renderBorderWhenSelected: v, selectorBackgroundStyles: b, onChange: _(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(157396);
            const o = (0, i(587878).Z)({ palette: n.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        213279: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm7.992 9c1.933 0 3.5-1.567 3.5-3.5S11.933 8.5 10 8.5 6.5 10.067 6.5 12s1.567 3.5 3.5 3.5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        63274: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 17 10", children: n.createElement("g", null, n.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 17, height: 10 };
            const s = a;
        },
        58399: (e, t, i) => {
            i.r(t), i.d(t, { default: () => d });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(717683),
                a = i(347101);
            const s = (e = {}) => {
                const t = n.useContext(l.Z),
                    { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: i });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        161335: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        620763: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        833057: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 9.76V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5v5.26L3.88 16H11v5l1 2 1-2v-5h7.12L17 9.76zM7.12 14L9 10.24V4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5.74L16.88 14H7.12z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        398170: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                l = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M8.414 3H12c5.247 0 9.5 4.25 9.5 9.5S17.247 22 12 22s-9.5-4.25-9.5-9.5v-1h2v1c0 4.14 3.358 7.5 7.5 7.5s7.5-3.36 7.5-7.5S16.142 5 12 5H8.414l1.543 1.54-1.414 1.42L4.586 4 8.543.04l1.414 1.42L8.414 3zm.632 6.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.b174b8aa.js.map
