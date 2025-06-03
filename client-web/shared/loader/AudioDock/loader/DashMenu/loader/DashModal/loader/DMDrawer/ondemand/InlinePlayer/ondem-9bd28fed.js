"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed", "icons/IconMediaDock-js", "icons/IconPlus-js"],
    {
        194504: (e, t, i) => {
            i.d(t, { Z: () => Z });
            var n = i(202784),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(894966),
                a = i(568320),
                d = i(161821),
                c = i(666536),
                h = i(837880),
                u = i(323265),
                p = i(461756),
                g = i(154003),
                v = i(530732),
                b = i(224162),
                m = i(392237),
                f = i(301049),
                w = i(145858);
            let y;
            const _ = s().gea7aa3c,
                C = s().b6462b32,
                S = (e) =>
                    (function () {
                        if (void 0 !== y) return y;
                        const e = document.createElement("template");
                        e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        const t = e.content.firstChild;
                        if (!(t && t instanceof window.HTMLElement)) return y;
                        document.body && document.body.appendChild(t);
                        const i = t.scrollLeft;
                        return t.remove(), (y = 0 === i), y;
                    })() || !e,
                x = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);
            function k(e) {
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
            function I({ event: e, isCarouselLocked: t }) {
                const { key: i, target: n } = e;
                return (
                    [f.Z.ArrowLeft, f.Z.ArrowRight].includes(i) &&
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
            class B extends n.Component {
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
                            !I({ event: e, isCarouselLocked: i }) || (e.preventDefault(), ((!n && t === f.Z.ArrowLeft) || (n && t === f.Z.ArrowRight)) && this._goToPreviousIndex(), ((!n && t === f.Z.ArrowRight) || (n && t === f.Z.ArrowLeft)) && this._goToNextIndex());
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
                            let l = this._focusedTabIndex;
                            if (t && t.children.length === i.length) {
                                const i = t.getBoundingClientRect(),
                                    n = "Previous" === e ? [...t.children] : [...t.children].reverse();
                                if (s) {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().right < i.right);
                                    l = r ? e - 1 : t.children.length - e;
                                } else {
                                    const e = n.findIndex((e) => e.getBoundingClientRect().left > i.left);
                                    l = r ? t.children.length - e : e - 1;
                                }
                            }
                            (l = o ? (l + i.length) % i.length : (0, h.Z)(l, 0, i.length - 1)), this._focusItem(l, n ? void 0 : "Next" === e ? "start" : "end");
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
                    return n.createElement(o.Z, { "aria-label": e, "aria-live": "polite", onKeyDown: this._handleKeyDown, role: "navigation", style: [E.root, t] }, this._renderChildren());
                }
                _renderChildren() {
                    const { buttonsContainerStyle: e, children: t, childrenStyle: i, contentPadding: r, isLocked: s, showOverflow: l } = this.props,
                        { listScrollPaddingStyle: a } = this.state,
                        d = this._getWithOffscreenItems(),
                        c = this._isRTL() && ((u.ZP.isIOS() && u.ZP.iOSVersion() < 14) || (u.ZP.isSafari() && u.ZP.isMac() && u.ZP.safariVersion() < 14));
                    return n.createElement(v.Z, { interactiveStyles: null, style: E.swipeableContainer }, ({ isFocused: h, isFocusedWithin: u, isHovered: p }) =>
                        n.createElement(
                            n.Fragment,
                            null,
                            this._renderPreviousButton(p || h || u),
                            n.createElement(
                                o.Z,
                                { onLayout: this._handleSwipeableLayout, style: [E.swipeable, d || l ? null : { overflow: "hidden" }], testID: "ScrollSnap-SwipeableList" },
                                n.createElement(
                                    o.Z,
                                    { ref: this._list, role: "tablist", style: [E.list, s ? E.notScrollable : E.scrollable, c && E.listSafariRtl, d && E.addRoomForOffscreenItems, e, a], testID: "ScrollSnap-List" },
                                    t.map((e, s) => (e ? n.createElement(o.Z, { key: s, onClick: this._handleItemClick(s), ref: this._setChildRef(s), role: "presentation", style: [E.item, i, r ? (0 === s ? { marginStart: r } : s === t.length - 1 ? { marginEnd: r } : void 0) : void 0] }, e) : null)),
                                ),
                                this._renderRightShadowOverlay(),
                            ),
                            this._renderNextButton(p || h || u),
                        ),
                    );
                }
                _renderPreviousButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: s, withAddedNavButtonClickArea: a } = this.props,
                        { hidePrevButton: d } = this.state,
                        c = d || (s && !e) || i,
                        h = n.createElement(l.default, { style: [E.navButtonIcon, c && E.navButtonIconDisabled] }),
                        u = a && [E.navClickableArea, E.navClickableAreaPrev];
                    return n.createElement(o.Z, { onClick: this._handlePreviousClick, style: [E.navButton, u, r, c && E.hiddenNavButton, !p.Z.reducedMotionEnabled && E.navButtonAnimation], testID: "ScrollSnap-prevButtonWrapper" }, n.createElement(g.ZP, { "aria-label": C, disabled: c, dominantColor: t, icon: h, onClick: this._handlePreviousClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
                }
                _renderNextButton(e) {
                    const { dominantButtonColor: t, isLocked: i, navButtonStyle: r, showNavButtonsOnHover: s, withAddedNavButtonClickArea: l } = this.props,
                        { hideNextButton: d } = this.state,
                        c = d || (s && !e) || i,
                        h = n.createElement(a.default, { style: [E.navButtonIcon, c && E.navButtonIconDisabled] }),
                        u = l && [E.navClickableArea, E.navClickableAreaNext];
                    return n.createElement(o.Z, { onClick: this._handleNextClick, style: [E.navButton, E.navButtonNext, u, r, c && E.hiddenNavButton, !p.Z.reducedMotionEnabled && E.navButtonAnimation], testID: "ScrollSnap-nextButtonWrapper" }, n.createElement(g.ZP, { "aria-label": _, disabled: c, dominantColor: t, icon: h, onClick: this._handleNextClick, onLayout: this._handleButtonLayout, type: "onMediaDominantColorFilled" }));
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
                _renderRightShadowOverlay() {
                    const { shadowStyle: e, withShadow: t } = this.props,
                        { hideNextButton: i } = this.state;
                    return !t || i ? null : n.createElement(o.Z, { style: [E.rightGradientOverlay, e] });
                }
            }
            (B.contextType = b.ZP), (B.defaultProps = { children: [], dominantButtonColor: m.default.theme.colors.alwaysBaseGray1100, isLocked: !1, scrollToCenter: !1, showNavButtonsOnHover: !0, withAddedNavButtonClickArea: !1, withGlobalKeyboardNavigation: !1, withOffscreenItems: !1, withScrollIntoView: !0, withWraparound: !0, withShadow: !1, shadowStyle: void 0 });
            const E = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, swipeable: { display: "block", flexGrow: 1, flexShrink: 1, height: "100%" }, swipeableContainer: { alignItems: "center", flexGrow: 1, flexBasis: "0%", flexDirection: "row", height: "100%" }, list: { flexGrow: 1, flexDirection: "row", flexShrink: 1, flexWrap: "nowrap", height: "100%", scrollSnapType: "x mandatory", scrollbarWidth: "none", transform: [{ translate3d: "0,0,0" }], overflowY: "hidden" }, scrollable: { overflowX: "auto" }, notScrollable: { overflowX: "hidden" }, listSafariRtl: { scrollSnapType: "none" }, item: { paddingHorizontal: "0", scrollSnapAlign: "start" }, navButton: { marginHorizontal: e.spaces.space4, position: "absolute", zIndex: 1 }, hiddenNavButton: { opacity: 0, pointerEvents: "none" }, navButtonNext: { end: 0 }, navButtonIcon: { color: e.colors.white }, navButtonIconDisabled: { color: e.colors.gray200 }, navButtonAnimation: { transitionProperty: "opacity", transitionDuration: "0.2s" }, navClickableArea: { justifyContent: "center", height: "50%", width: "auto", zIndex: 1 }, navClickableAreaNext: { paddingStart: e.spaces.space12 }, navClickableAreaPrev: { paddingEnd: e.spaces.space12 }, addRoomForOffscreenItems: { marginStart: "-100%", marginEnd: "-100%", paddingStart: "100%", paddingEnd: "100%" }, rightGradientOverlay: { position: "absolute", top: 0, end: 0, width: e.spaces.space80, height: "100%", pointerEvents: "none", backgroundImage: `linear-gradient(90deg, transparent 0%, ${k(e)} 100%)`, zIndex: 0 } })),
                Z = B;
        },
        796684: (e, t, i) => {
            i.d(t, { Z: () => u });
            var n = i(202784),
                o = i(325686),
                r = i(913973),
                s = i(516951),
                l = i(731708),
                a = i(454740),
                d = i(58881),
                c = i(530732),
                h = i(392237);
            const u = (e) => {
                    const { "aria-label": t, "aria-posinset": i, "aria-setsize": u, checked: v, containerStyle: b, decoration: m, description: f, disabled: w, label: y, name: _, onChange: C, testID: S } = e,
                        x = "string" == typeof y ? n.createElement(l.ZP, { weight: "bold" }, y) : y,
                        k = "string" == typeof f,
                        I = f ? (k ? n.createElement(l.ZP, { color: "gray700", style: a.W.description }, f) : n.createElement(o.Z, { style: p.descriptionComponent }, f)) : null,
                        B = d.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, customHoverBackgroundColor: h.default.theme.colors.transparent, customPressedBackgroundColor: h.default.theme.colors.transparent }),
                        E = d.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: v ? h.default.theme.colors.primary : h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(c.Z, { disabled: w, interactiveStyles: B, role: "label", style: [a.W.root, b], testID: S }, (e) => n.createElement(n.Fragment, null, m ? n.createElement(o.Z, { style: a.W.decorationContainer }, m) : null, n.createElement(o.Z, { style: a.W.content }, x, k && I), n.createElement(o.Z, { style: p.radioContainer }, n.createElement(c.Z, { disabled: w, interactiveStyles: E, interactivityState: e, style: p.radioBackground }, n.createElement(o.Z, { style: [p.circle, v && p.circleActive, w && p.circleDisabled, v && w && p.circleCheckedAndDisabled] }, v ? n.createElement(r.default, { style: p.checkMark }) : null)), n.createElement("input", { "aria-label": t, "aria-posinset": i, "aria-setsize": u, checked: v, disabled: w, name: _, onChange: v ? s.Z : C, style: g, type: "radio" })))),
                        k ? null : I,
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
                s = i(392237);
            let l = 1;
            const a = s.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                d = (e) => {
                    const { "aria-label": t, backgroundStyles: i, description: s, disabled: d, horizontal: c, label: h, name: u, onChange: p, options: g, renderBorderWhenSelected: v, renderSelector: b, selectorBackgroundStyles: m, switchStyle: f, value: w } = e,
                        y = (() => {
                            const e = n.useRef("");
                            return (
                                n.useEffect(() => {
                                    (e.current = `CONTROL_${l}_LABEL`), (l += 1);
                                }, []),
                                e
                            );
                        })(),
                        _ = (e) => () => {
                            p(u, e);
                        };
                    return n.createElement(
                        o.Z,
                        { "aria-label": t, "aria-labelledby": h && !t ? y.current : void 0, role: "radiogroup", style: d && a.disabled },
                        h ? n.createElement(o.Z, { id: y.current, role: "label", style: a.header }, n.createElement(r.ZP, { style: a.label, weight: "bold" }, h), s ? n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, s) : null) : null,
                        n.createElement(
                            o.Z,
                            { style: [c && a.row, f && a.switchVariant, i] },
                            g.map((e, t) => b({ "aria-posinset": t + 1, "aria-setsize": g.length, checked: e.value === w, disabled: d, name: u, switchStyle: f, horizontal: c, renderBorderWhenSelected: v, selectorBackgroundStyles: m, onChange: _(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(157396);
            const o = (0, i(587878).Z)({ palette: n.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        568320: (e, t, i) => {
            i.r(t), i.d(t, { default: () => d });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(717683),
                l = i(347101);
            const a = (e = {}) => {
                const t = n.useContext(s.Z),
                    { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        63274: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 17 10", children: n.createElement("g", null, n.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 17, height: 10 };
            const a = l;
        },
        360816: (e, t, i) => {
            i.r(t), i.d(t, { default: () => d });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(717683),
                l = i(347101);
            const a = (e = {}) => {
                const t = n.useContext(s.Z),
                    { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        133272: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        379327: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            var n = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.9987c50a.js.map
