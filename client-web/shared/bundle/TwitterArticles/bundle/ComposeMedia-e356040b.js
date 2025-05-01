"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-e356040b"],
    {
        449161: (e, t, r) => {
            r.d(t, { Z: () => m });
            var s = r(807896),
                i = r(202784),
                a = r(674132),
                n = r.n(a),
                o = r(154003),
                l = r(950822),
                d = r(392237);
            const c = n().i5450bec,
                p = n().f7432494;
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                r = e.target,
                                s = r.files;
                            s.length && t && t(s), (r.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: r, onChange: a, testID: n, ...d } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return i.createElement(i.Fragment, null, i.createElement(o.ZP, (0, s.Z)({ hoverLabel: e ? { label: h ? p : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: r, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: n, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const u = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
        403556: (e, t, r) => {
            r.d(t, { Z: () => R });
            var s = r(807896),
                i = r(202784),
                a = r(194504),
                n = r(235902),
                o = r(392237),
                l = r(325686),
                d = r(674132),
                c = r.n(d),
                p = r(912021),
                h = r(516951),
                u = r(731708),
                m = r(310088),
                g = r(175993),
                b = r(58881),
                y = r(530732);
            const f = c().d2414d31,
                v = () => c().ce4e85ae,
                _ = c().fb9f6f39;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: r, query: s, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: s, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, s) => {
                            const i = o.default.theme.colors.text,
                                a = o.default.theme.colors.gray700;
                            return r || s ? (e || t ? i : a) : e ? i : a;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: s, children: a, color: n, isActive: d, isCompact: c, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: S, style: C, to: w } = this.props,
                        { location: R } = this.state,
                        k = w ? this._getMemoizedLink(w, S) : void 0,
                        x = d ? d(w) : R?.pathname === k?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = g ? "medium" : x ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: P, link: k, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? T.pill : T.link, p && x ? T.active : null, c ? (p ? T.compactPill : T.compactLink) : null, h ? T.roundedRect : null, C], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: d }) => i.createElement(l.Z, { style: p && T.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [T.text, { color: this._getTextColor(x, d, g, p) }, c && T.compactText, g && t && T.focusedText], weight: Z }, e && i.createElement(e, { style: T.icon }), a, g || p ? null : i.createElement(l.Z, { style: x && [T.border, { backgroundColor: o.default.theme.colors[n] }] })), r ? i.createElement(m.Z, { count: r, standalone: !0, style: [T.badge, r >= 10 && T.multiDigitBadge, r >= 20 && T.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: f, withBorder: !1 }) : s ? i.createElement(m.Z, { pip: !0, standalone: !0, style: T.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (S.contextType = g.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const T = o.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                C = S,
                w = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: o, isRoundedRect: l, links: d, style: c, visibleItemIndex: p }) => {
                    const h = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !o,
                        g = i.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: a, ...n }, d) => {
                                    const c = m ? [w.linkRedesign, 0 === d && w.firstLinkRedesign, e && 0 === d && w.withNoPaddingStart] : void 0;
                                    return i.createElement(C, (0, s.Z)({ viewType: a }, n, { isCompact: r, isPillLink: o, isRoundedRect: l, isWebRedesign: m, style: c }), t);
                                }),
                            [e, r, o, l, m, d],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: o && w.gap, childrenStyle: !m && w.flexGrow, key: h, style: [o ? null : w.segmentedControl, m && w.leftAligned, c], visibleItemIndex: p }, g);
                };
        },
        815479: (e, t, r) => {
            r.d(t, { Z: () => X });
            var s = r(202784),
                i = r(325686),
                a = r(640290),
                n = r(614425),
                o = r(682474),
                l = r(58881),
                d = r(530732),
                c = r(782578),
                p = r(392237),
                h = r(738584),
                u = r(395367),
                m = r(336961),
                g = r(807896),
                b = r(151624),
                y = r(674132),
                f = r.n(y),
                v = r(933895),
                _ = r(868634),
                S = r(224162);
            const T = "decrease",
                C = "increase",
                w = "left",
                R = "right";
            var k = r(731708),
                x = r(879891);
            r(136728);
            function P(e) {
                const t = Math.round(e / 1e3);
                if (t < 10) return `0:0${t}`;
                if (t < 60) return `0:${t}`;
                const r = Math.floor(t / 60);
                return `${r}:${("" + (t - 60 * r)).padStart(2, "0")}`;
            }
            const Z = (e, t) =>
                    e.map((e) =>
                        ((e, t) => {
                            if ("tenths" === t) {
                                const t = Math.round(e / 100),
                                    r = t % 10;
                                return `0:${("" + (t - r) / 10).padStart(2, "0")}.${r}`;
                            }
                            return P(e);
                        })(e, t),
                    ),
                E = (e, t) => {
                    const {
                        intervalsMs: r,
                        numIntervals: s,
                        numSubintervals: i,
                        precision: a,
                    } = ((e, t) => {
                        let r, s, i;
                        const a = t / e;
                        a >= 0.25 ? ((r = 200), (s = "tenths"), (i = 4)) : a >= 0.1 ? ((r = 500), (s = "tenths"), (i = 5)) : a >= 0.05 ? ((r = 1e3), (s = "seconds"), (i = 5)) : a >= 0.025 ? ((r = 2e3), (s = "seconds"), (i = 4)) : a >= 0.01 ? ((r = 5e3), (s = "seconds"), (i = 5)) : a >= 0.005 ? ((r = 1e4), (s = "seconds"), (i = 5)) : a >= 0.0025 ? ((r = 2e4), (s = "seconds"), (i = 4)) : a >= 0.001 ? ((r = 5e4), (s = "seconds"), (i = 4)) : ((r = 1e5), (s = "seconds"), (i = 4));
                        const n = [];
                        let o = 0;
                        for (; o < e; ) n.push(o), (o += r);
                        return { intervalsMs: n, precision: s, numSubintervals: i, numIntervals: Number((e / r).toFixed(1)) };
                    })(e, t);
                    return { intervalStrings: Z(r, a), numSubintervals: i, numIntervals: s };
                };
            const D = p.default.create((e) => ({ root: { flexDirection: "column", width: "100%", position: "absolute", height: "65%", bottom: 0, overflow: "hidden" }, intervalRow: { flexDirection: "row" }, intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: "none" }, intervalRowTicks: { flexGrow: 1, overflow: "hidden" }, borderLeft: { borderStartColor: e.colors.gray700, borderStartWidth: 1 }, borderRight: { borderEndColor: e.colors.gray700, borderEndWidth: 1 }, bigTicks: { flexDirection: "row", alignItems: "flex-end" }, smallTicks: { flexGrow: 1, height: "50%" }, intervalStrings: { display: "flex", justifyContent: "center" } })),
                W = function ({ duration: e, trimmerWidth: t }) {
                    const { intervalStrings: r, numIntervals: a, numSubintervals: n } = E(e, t),
                        { direction: o } = (0, x.Z)(),
                        l = "rtl" === o ? D.borderRight : D.borderLeft,
                        d = (100 * Math.ceil(a)) / a;
                    return s.createElement(
                        i.Z,
                        { style: D.root },
                        s.createElement(
                            i.Z,
                            { style: [D.intervalRow, D.intervalRowStrings, { width: `${d}%` }] },
                            r.map((e, r) => s.createElement(k.ZP, { color: "gray700", key: r, size: "subtext3", style: [{ width: 0 === r ? t / a / 2 + "px" : t / a + "px" }, D.intervalStrings] }, 0 !== r ? e : null)),
                        ),
                        s.createElement(
                            i.Z,
                            { style: [D.intervalRow, D.intervalRowTicks] },
                            r.map((e, t) =>
                                s.createElement(
                                    i.Z,
                                    { key: t, style: [{ width: 100 / a + "%" }, D.bigTicks, 0 !== t && l] },
                                    Array.from({ length: n }, (e, t) => s.createElement(i.Z, { key: t, style: [D.smallTicks, 0 !== t && l] })),
                                ),
                            ),
                        ),
                    );
                };
            var B = r(165010),
                I = r(301049);
            const A = f().a394f905,
                M = f().f42c0c80,
                L = f().i667afe8,
                V = f().c0bdd345;
            class $ extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._panResponders = b.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderGrant: () => this.props.onMoveStart(this.props.side), onPanResponderMove: (e, { dx: t }) => this.props.onMoveChange(t, this.props.side), onPanResponderRelease: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminate: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminationRequest: () => !0 })),
                        (this._handleOnKeyDown = (e, t) => {
                            const { onKeyDown: r } = this.props,
                                { key: s } = e,
                                i = s === I.Z.ArrowUp || s === I.Z.ArrowRight,
                                a = s === I.Z.ArrowDown || s === I.Z.ArrowLeft;
                            if (i || a) {
                                e.preventDefault();
                                r(i ? C : T, t);
                            }
                        }),
                        (this._handleOnKeyUp = (e) => {
                            const { onKeyUp: t } = this.props,
                                { key: r } = e;
                            [I.Z.ArrowDown, I.Z.ArrowLeft, I.Z.ArrowRight, I.Z.ArrowUp].includes(r) && t();
                        }),
                        (this._generateBorderStyles = (e) => {
                            const { side: t } = this.props,
                                r = "rtl" === e;
                            return t === w ? (r ? G.rightScrubberRadius : G.leftScrubberRadius) : t === R ? (r ? G.leftScrubberRadius : G.rightScrubberRadius) : void 0;
                        });
                }
                render() {
                    const { currentValue: e, maxValue: t, minValue: r, side: a, style: n } = this.props;
                    return s.createElement(S.ZP.Consumer, null, ({ direction: o }) => s.createElement(d.Z, (0, g.Z)({ "aria-label": a === w ? L : M, "aria-valuemax": parseFloat(V(t / 1e3)), "aria-valuemin": parseFloat(V(r / 1e3)), "aria-valuenow": parseFloat(V(e / 1e3)), "aria-valuetext": A({ seconds: V(e / 1e3) }), focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: p.default.theme.colors.primary, color: p.default.theme.colors.primary, customFocusBackgroundColor: p.default.theme.colors.primary, customHoverBackgroundColor: p.default.theme.colors.primary, customPressedBackgroundColor: p.default.theme.colors.primary, insetFocusRing: !0 }), onKeyDown: (e) => this._handleOnKeyDown(e, a), onKeyUp: (e) => this._handleOnKeyUp(e), role: "adjustable", style: [G.root, this._generateBorderStyles(o), n] }, (0, B.dW)(this._panResponders.panHandlers)), ({ isFocused: e, isHovered: t, isPressed: r }) => s.createElement(s.Fragment, null, s.createElement(i.Z, { style: [G.trimmerScrubberGrips, (e || t || r) && G.trimmerScrubberGripsOpacity] }), s.createElement(i.Z, { style: [G.trimmerScrubberGrips, (e || t || r) && G.trimmerScrubberGripsOpacity] }))));
                }
            }
            const G = p.default.create((e) => ({ root: { backgroundColor: e.colors.primary, cursor: "grab", flexDirection: "row", height: e.spaces.space48, justifyContent: "space-between", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space12, width: `calc(${e.spaces.space4} * 2 + ${e.spaces.space2} * 3)` }, leftScrubberRadius: { borderBottomStartRadius: e.borderRadii.small, borderTopStartRadius: e.borderRadii.small }, rightScrubberRadius: { borderBottomEndRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, trimmerScrubberGrips: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, height: "100%", width: e.spaces.space2 }, trimmerScrubberGripsOpacity: { opacity: 0.8 } })),
                F = $,
                j = f().af2a65d9,
                H = f().d46781af,
                K = f().e8733ed9,
                z = f().j3d49e93,
                U = (e, t) => (e / t) * 100 + "%";
            class O extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._keyPressAccumulatedDistance = 0),
                        (this._keyPressValueDelta = 1),
                        (this._panResponderTermination = b.Z.create({ onMoveShouldSetPanResponderCapture: (e, { dx: t }) => this._shouldTerminateChildrenPanResponders(t) })),
                        (this.state = { isActive: !1, trimmerWidth: 0 }),
                        (this._generateTimestampLabelString = () => {
                            const { endTime: e, startTime: t } = this.props,
                                r = e - t;
                            if (r >= 6e4) {
                                const e = P(r);
                                return z({ timestamp: e });
                            }
                            return r < 4e3 ? H(Math.floor((10 * r) / 1e3) / 10) : K(Math.floor(r / 1e3));
                        }),
                        (this._getTrimmerScrubberWidth = () => 2 * p.default.theme.spacesPx.space4 + 3 * p.default.theme.spacesPx.space2),
                        (this._handleKeyDown = (e, t) => {
                            const { trimmerWidth: r } = this.state;
                            1 === this._keyPressValueDelta && this._handlePanResponderGrant(t), (this._keyPressAccumulatedDistance += this._keyPressValueDelta * (e === C ? 1 : -1)), this._handlePanResponderChange(this._keyPressAccumulatedDistance, t);
                            const s = 0.05 * r;
                            this._keyPressValueDelta = Math.min(1.4 * this._keyPressValueDelta, s);
                        }),
                        (this._handleKeyUp = () => {
                            (this._keyPressValueDelta = 1), (this._keyPressAccumulatedDistance = 0), this.setState({ isActive: !1 });
                        }),
                        (this._handleLayout = (e) => {
                            this.setState({ trimmerWidth: e.nativeEvent.layout.width });
                        }),
                        (this._handlePanResponderChange = (e, t) => {
                            this._triggerChange(e, t);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this._handlePanResponderChange(e, t), this.setState({ isActive: !1 });
                        }),
                        (this._handlePanResponderGrant = (e) => {
                            const { endTime: t, startTime: r } = this.props;
                            (this._baseTime = e === w ? r : t), this.setState({ isActive: !0 });
                        }),
                        (this._renderTimestampLabel = () => {
                            const { isActive: e } = this.state,
                                { duration: t, endTime: r, startTime: a } = this.props,
                                n = "rtl" === this._languageDirection,
                                o = n ? "marginEnd" : "marginStart",
                                l = n ? "marginStart" : "marginEnd";
                            return s.createElement(i.Z, { style: [q.labelWrapper, { [o]: U(a, t), [l]: U(t - r, t), width: U(r - a, t) }] }, s.createElement(_.ZP, { background: "maskColor", style: [q.label, !e && q.visibilityHidden] }, j({ timestamp: this._generateTimestampLabelString() })));
                        }),
                        (this._setRootRef = (e) => {
                            e && (this._removeTouchMoveToScrollListener = (0, v.O)(e, this._handleTouchMoveToScroll, !1));
                        }),
                        (this._handleTouchMoveToScroll = (e) => e.preventDefault()),
                        (this._scaleDistanceByTrimmerWidth = (e) => {
                            const { duration: t } = this.props,
                                { trimmerWidth: r } = this.state;
                            return (e / r) * t;
                        }),
                        (this._shouldTerminateChildrenPanResponders = (e) => {
                            const { duration: t } = this.props,
                                r = this._baseTime + this._scaleDistanceByTrimmerWidth(e);
                            return r < 0 || r > t;
                        }),
                        (this._triggerChange = (e, t) => {
                            const { duration: r, endTime: s, onScrub: i, startTime: a } = this.props,
                                n = this._baseTime + this._scaleDistanceByTrimmerWidth(e),
                                o = 1e3;
                            if (t === w) {
                                let e = n;
                                n <= 0 ? (e = 0) : s - o <= n && (e = s - o), i(w, e);
                            }
                            if (t === R) {
                                let e = n;
                                n >= r ? (e = r) : n - a <= o && (e = a + o), i(R, e);
                            }
                        });
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener();
                }
                render() {
                    const { duration: e, endTime: t, playTime: r, startTime: a } = this.props,
                        { isActive: n, trimmerWidth: o } = this.state,
                        l = this._getTrimmerScrubberWidth();
                    return s.createElement(S.ZP.Consumer, null, ({ direction: d }) => {
                        this._languageDirection = d;
                        const c = "rtl" === this._languageDirection,
                            p = c ? "marginEnd" : "marginStart",
                            h = c ? "marginStart" : "marginEnd";
                        return s.createElement(i.Z, (0, g.Z)({ ref: this._setRootRef, style: [q.root, n && q.cursorGrab] }, this._panResponderTermination.panHandlers), this._renderTimestampLabel(), s.createElement(i.Z, { onLayout: this._handleLayout, style: q.trimmerWrapper }, s.createElement(i.Z, { style: q.intervalsContainer }, s.createElement(W, { duration: e, trimmerWidth: o })), s.createElement(s.Fragment, null, s.createElement(i.Z, { style: [q.discardArea, q.transition, { width: U(a, e) }] }), s.createElement(i.Z, { style: q.keepArea }, s.createElement(F, { currentValue: a, maxValue: t, minValue: 0, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: w, style: [q.trimmerScrubber, { [p]: `-${l}px` }] }), s.createElement(i.Z, { style: q.keepAreaCenter }, n ? null : s.createElement(i.Z, { style: [q.playBarArea, q.transition, { width: U(r, t - a) }] })), s.createElement(F, { currentValue: t, maxValue: e, minValue: a, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: R, style: [q.trimmerScrubber, { [h]: `-${l}px` }] })), s.createElement(i.Z, { style: [q.discardArea, q.transition, { width: `calc(100% - ${U(t, e)})` }] }))));
                    });
                }
            }
            const q = p.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space40, width: "100%" }, cursorGrab: { cursor: "grab" }, trimmerWrapper: { alignItems: "center", writingDirection: "ltr", flexGrow: 1, flexDirection: "row", height: e.spaces.space48, position: "relative" }, discardArea: { backgroundColor: e.colors.maskColor, height: `calc(100% - (${e.spaces.space4} * 2))` }, keepArea: { flexDirection: "row", flexGrow: 1, height: "100%", zIndex: 1 }, keepAreaCenter: { borderColor: e.colors.primary, borderStyle: "solid", borderBottomWidth: e.spaces.space4, borderTopWidth: e.spaces.space4, height: "100%", position: "relative", width: "100%" }, intervalsContainer: { backgroundColor: e.colors.gray50, height: `calc(${e.spaces.space48} - ${e.spaces.space4} * 2)`, position: "absolute", start: 0, end: 0 }, label: { userSelect: "none" }, labelWrapper: { flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 }, playBarArea: { backgroundColor: e.colors.primary, height: "100%", opacity: 0.5 }, trimmerScrubber: { zIndex: 1 }, transition: { transitionDuration: "0.01s", transitionProperty: "width" }, visibilityHidden: { visibility: "hidden" } })),
                N = O,
                Y = new a.ZP({});
            class J extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._isScrubbed = !1),
                        (this.state = { endTime: this.props.defaultTrimData?.endTime || this.props.video.duration, isPlaying: !1, startTime: this.props.defaultTrimData?.startTime || 0, playTime: 0 }),
                        (this._handleScrub = (e) => (t, r) => {
                            const { endTime: s, startTime: i } = this.state,
                                {
                                    video: { duration: a },
                                } = this.props,
                                n = t === w;
                            if (e) {
                                const t = n ? r : i,
                                    o = n ? s : r;
                                e.pause(), e.scrubToFraction(r / a), e.setPlaybackTimeRange({ startTimeS: t / 1e3, endTimeS: o / 1e3 });
                            }
                            this._isScrubbed = !0;
                            const o = n ? { startTime: r } : { endTime: r };
                            this.setState({ playTime: 0, ...o });
                        }),
                        (this._handleOnVideoContainerLayout = (e) => {
                            const { height: t, width: r } = e.nativeEvent.layout,
                                { height: s, width: i } = this.props.video,
                                a = i / s,
                                { height: n, width: o } = c.Z.getContainDimensions({ height: t, width: r }, a);
                            (n === this.state.adjustedVideoHeight && o === this.state.adjustedVideoWidth) || this.setState({ adjustedVideoHeight: n, adjustedVideoWidth: o });
                        }),
                        (this._handleVideoClick = (e) => () => {
                            const { endTime: t, isPlaying: r, startTime: s } = this.state,
                                {
                                    video: { duration: i },
                                } = this.props;
                            e && (this._isScrubbed ? (e.scrubToFraction(s / i), (this._isScrubbed = !1)) : this._isScrubbed || (!s && t === i) || (e.scrubToFraction(s / i), e.setPlaybackTimeRange({ startTimeS: s / 1e3, endTimeS: t / 1e3 })), r ? e.pause() : e.play());
                        }),
                        (this._handlePlayerStateUpdate = (e) => {
                            const { startTime: t } = this.state,
                                r = e.tracks[e.currentTrackId];
                            if (r) {
                                const s = r.currentTimeMs - t;
                                this.setState({ isPlaying: e.isPlaying, ...(e.isPlaying ? { playTime: s } : {}) });
                            }
                        });
                }
                render() {
                    const { video: e } = this.props,
                        { adjustedVideoHeight: t, adjustedVideoWidth: r, endTime: a, isPlaying: c, playTime: g, startTime: b } = this.state;
                    return s.createElement(
                        i.Z,
                        { style: Q.root },
                        s.createElement(
                            u.Z,
                            null,
                            s.createElement(
                                i.Z,
                                { style: Q.videoContainer },
                                s.createElement(
                                    i.Z,
                                    { onLayout: this._handleOnVideoContainerLayout, style: Q.video },
                                    s.createElement(
                                        o.Z,
                                        { ratio: e.width / e.height, style: !!t && !!r && { height: t, width: r } },
                                        s.createElement(h.Z, { aspectRatio: e.width / e.height, basePlayerClass: n.Y7, configType: "static", contentId: "", contentType: "media_entity", httpClient: Y, onStateUpdate: this._handlePlayerStateUpdate, playerId: "trimmer", size: "fill", variants: e.variants }, ({ playerApi: e }) => s.createElement(d.Z, { focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, customFocusBackgroundColor: p.default.theme.colors.transparent, customHoverBackgroundColor: p.default.theme.colors.transparent, customPressedBackgroundColor: p.default.theme.colors.transparent, insetFocusRing: !0 }), onClick: this._handleVideoClick(e), style: Q.overlay }, c ? null : s.createElement(m.Z, null))),
                                    ),
                                ),
                            ),
                            s.createElement(u.Z.MetadataSubscriber, { playerId: "trimmer" }, ({ playerApi: t }) => s.createElement(N, { duration: e.duration, endTime: a, onScrub: this._handleScrub(t), playTime: g, startTime: b })),
                        ),
                    );
                }
                getTrimData() {
                    const { endTime: e, startTime: t } = this.state;
                    return { startTime: t, endTime: e };
                }
            }
            const Q = p.default.create((e) => ({ root: { flex: 1 }, overlay: { ...p.default.absoluteFillObject, alignItems: "center", justifyContent: "center" }, video: { alignItems: "center", flex: 1, justifyContent: "center", width: "100%" }, videoContainer: { alignItems: "center", backgroundColor: e.colors.gray0, flex: 1, padding: e.spaces.space20, width: "100%" } })),
                X = J;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-e356040b.9eca386a.js.map
