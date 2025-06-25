"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-bc6ccf4c"],
    {
        548485: (e, t, s) => {
            s.d(t, { Z: () => I });
            var i = s(202784),
                r = s(928316),
                a = s(325686),
                n = s(111677),
                o = s.n(n),
                l = s(553007),
                c = s(723951),
                h = s(390587),
                d = s(158910),
                p = s(614991),
                u = s(323265),
                m = s(154003),
                g = s(992942),
                y = s(782578),
                f = s(173739),
                b = s(392237),
                _ = s(401339);
            const S = b.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                v = ({ circle: e, height: t, width: s }) => i.createElement(a.Z, { pointerEvents: "none", style: [S.mask, { width: s, height: t }, e && S.circle] });
            var C = s(807896),
                P = s(151624),
                x = s(933895);
            class R extends i.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: s, onPinchMove: i, onWheel: r } = this.props;
                            if (e) {
                                (s || t || i) && (this._removeTouchMoveToScrollListener = (0, x.O)(e, this._preventDefaultEvent, !1)), r && (this._removeScrollToScaleListener = (0, x.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: s, onPinchMove: i } = this.props,
                                r = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (i) {
                                    const e = ((a = r[0]), (n = r[1]), Math.sqrt(Math.pow(a.pageY - n.pageY, 2) + Math.pow(a.pageX - n.pageX, 2))),
                                        { pageX: t, pageY: s } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(r[0], r[1]),
                                        o = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? s - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = s), (this._previousTouchDistance = e);
                                    const { x: h, y: d } = this._centerPosition;
                                    i(c, h - t, d - s, o, l);
                                }
                            } else s && s(t.dx, t.dy);
                            var a, n;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: s, deltaX: i, deltaY: r } = e,
                                { x: a, y: n } = this._centerPosition,
                                o = a - t,
                                l = n - s;
                            this.props.onWheel && this.props.onWheel(i, r, o, l);
                        }),
                        (this._panResponder = P.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: s, onPinchMove: r, onWheel: n, ...o } = this.props;
                    return i.createElement(a.Z, (0, C.Z)({}, o, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const w = R,
                T = o().d85bc1b8,
                E = o().f596ace8,
                k = o().df031fca,
                Z = o().b40332c6,
                M = o().e547b368,
                D = o().f7571204,
                W = o().e6e16812,
                A =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class L extends i.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !_.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: s } = this.state,
                                r = e.width / e.height,
                                n = this._shouldShowZoomControl();
                            return t || n ? i.createElement(a.Z, { style: B.controlsContainer }, t ? i.createElement(a.Z, { style: B.ratioContainer }, i.createElement(m.ZP, { "aria-label": E, borderColor: "transparent", color: s === r ? "primary" : "gray700", hoverLabel: { label: M }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(r), size: "medium" }), i.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: s === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: D }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": Z, borderColor: "transparent", color: 1 === s ? "primary" : "gray700", hoverLabel: { label: W }, icon: i.createElement(h.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, n ? i.createElement(a.Z, { style: B.zoomContainer }, i.createElement(f.Z, { "aria-label": T, max: this._maxScale, maxIcon: i.createElement(d.default, { style: B.icon }), min: 0, minIcon: i.createElement(p.default, { style: B.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: s, width: i } = this._getMaskDimensions(),
                                { height: r, width: a } = y.Z.getCoverDimensions({ width: i, height: s }, t);
                            return { width: a * Math.pow(2, e), height: r * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: s } = this.state,
                                { height: i, width: r } = y.Z.getContainDimensions({ width: s - 50, height: t - 50 }, e);
                            return { width: r, height: i };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: s } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: s }) : (this.setState({ containerHeight: t, containerWidth: s }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: s } = this._getImageDimensions(),
                                { width: i } = this._getMaskDimensions(),
                                r = s / t.width,
                                a = A(i / (e.width * r));
                            this.setState({ imageScale: a });
                            const { left: n, top: o } = this._getUnscaledCropData();
                            (this._panStyles.top = o - e.top * r * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = n - e.left * r * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, s, i) => {
                            const r = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + r, 0));
                                return (this._panStyles.left += s * (t - e)), (this._panStyles.top += i * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, s, i, r) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const n = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (n - e) + i), (this._panStyles.top += s * (n - e) + r), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: n };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                s = e.left,
                                i = e.top,
                                r = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let n = !1;
                            s < 0 && ((n = !0), (this._panStyles.left += s), (this._previousLeft += s)), i < 0 && ((n = !0), (this._panStyles.top += i), (this._previousTop += i)), r > 0 && ((n = !0), (this._panStyles.left += r), (this._previousLeft += r)), a > 0 && ((n = !0), (this._panStyles.top += a), (this._previousTop += a)), n && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: s } = this.state,
                                i = s?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            i !== a &&
                                (0, r.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: s, width: i } = this._getMaskDimensions(),
                                { left: r, top: a } = this._panStyles;
                            return { top: (e - s) / 2 - a, left: (t - i) / 2 - r, width: i, height: s };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(A(t.width / 150), A(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: s } = this.props,
                        { transformStyle: r } = this.state,
                        { height: n, width: o } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        h = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(a.Z, { style: B.container }, i.createElement(w, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: s ? this._handlePinchMove : void 0, onWheel: s ? this._handleWheel : void 0, style: B.root }, h ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: o, height: n }, style: [B.image, r] }), i.createElement(v, { circle: e, height: l, width: c })) : null), h ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        s = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * s.top), left: Math.round(t * s.left), width: Math.round(t * s.width), height: Math.round(t * s.height) };
                }
            }
            L.defaultProps = { circle: !1, withZoomControl: !0 };
            const B = b.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                I = L;
        },
        403556: (e, t, s) => {
            s.d(t, { Z: () => R });
            var i = s(807896),
                r = s(202784),
                a = s(194504),
                n = s(235902),
                o = s(392237),
                l = s(325686),
                c = s(111677),
                h = s.n(c),
                d = s(912021),
                p = s(516951),
                u = s(731708),
                m = s(310088),
                g = s(175993),
                y = s(58881),
                f = s(530732);
            const b = h().d2414d31,
                _ = () => h().ce4e85ae,
                S = h().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: s, query: i, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: s, query: i, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, s, i) => {
                            const r = o.default.theme.colors.text,
                                a = o.default.theme.colors.gray700;
                            return s || i ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: s, badgePip: i, children: a, color: n, isActive: c, isCompact: h, isPillLink: d, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: v, style: P, to: x } = this.props,
                        { location: R } = this.state,
                        w = x ? this._getMemoizedLink(x, v) : void 0,
                        T = c ? c(x) : R?.pathname === w?.pathname,
                        E = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: d ? C.pillHoverStyle.backgroundColor : void 0 }),
                        k = g ? "medium" : T ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: E, link: w, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(d ? [C.pillStyle] : [C.link]), ...(d && T ? [C.pillActiveStyle] : []), h ? (d ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, P], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: d && C.flexGrow }, r.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(T, c, g, d) }, h && C.compactText, g && t && C.focusedText, d && C.pillTextStyle, d && T && C.pillActiveTextStyle, d && c && C.pillHoverTextStyle], weight: k }, e && r.createElement(e, { style: C.icon }), a, g || d ? null : r.createElement(l.Z, { style: T && [C.border, { backgroundColor: o.default.theme.colors[n] }] })), s ? r.createElement(m.Z, { count: s, standalone: !0, style: [C.badge, s >= 10 && C.multiDigitBadge, s >= 20 && C.truncatedCountBadge], truncatedCountFormatter: S, unreadCountLabel: b, withBorder: !1 }) : i ? r.createElement(m.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (v.contextType = g.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = o.default.create((e) => ({
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
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                P = v,
                x = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: s, isPillLink: o, isRoundedRect: l, links: c, style: h, visibleItemIndex: d }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !o,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const h = m ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return r.createElement(P, (0, i.Z)({ viewType: a }, n, { isCompact: s, isPillLink: o, isRoundedRect: l, isWebRedesign: m, style: h }), t);
                                }),
                            [e, s, o, l, m, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: o && x.gap, childrenStyle: !m && x.flexGrow, key: p, style: [o ? null : x.segmentedControl, m && x.leftAligned, h], visibleItemIndex: d }, g);
                };
        },
        738584: (e, t, s) => {
            s.d(t, { o: () => u, Z: () => y });
            var i = s(807896),
                r = s(202784),
                a = s(928316),
                n = s(682474),
                o = s(392237),
                l = s(893164),
                c = s(395367),
                h = s(908478);
            function d(e) {
                let t = p(e);
                return (e) => {
                    const s = p(e);
                    return (0, h.Z)(t, s) || (t = s), t;
                };
            }
            function p(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function u({ children: e, periodic: t }) {
                const s = t ? m.PeriodicContext.Consumer : m.Context.Consumer;
                return r.createElement(s, null, (t) => {
                    const { aspectRatio: s, containerRef: i, guestsState: r, playerApi: a, playerState: n } = t;
                    return a && i && n ? e({ aspectRatio: s, guestsState: r, playerApi: a, playerState: n, containerRef: i }) : null;
                });
            }
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: d(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: s, playerApi: i, stablePlayerState: r } = this.state;
                            return i && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: s, playerApi: i, playerState: r, containerRef: this._containerRef }) : e) : null;
                        }),
                        (this._handleReload = () => this.setState(() => ({ hasError: null }))),
                        (this._handlePlayerApi = (e) => (t) => {
                            const { playerId: s } = this.props;
                            this.setState({ playerApi: t }),
                                this.props.onApiReady && this.props.onApiReady(t),
                                s && e && (this._unregister = e(s, t)),
                                (this._unsubscribe = t.subscribe((e, t) => {
                                    const s = this._cache.stablePlayerState(e);
                                    this.setState({ stablePlayerState: s, playerState: e, guestsState: t }), this.props.onStateUpdate && this.props.onStateUpdate(e, t);
                                }));
                        });
                }
                componentWillUnmount() {
                    this._unregister && this._unregister(), this._unsubscribe && this._unsubscribe();
                }
                componentDidUpdate() {
                    if (!this._containerRef) {
                        const e = a.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const s = { error: e, info: t };
                    this.setState(() => ({ hasError: s }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: s, stablePlayerState: a } = this.state,
                        { additionalBadges: o, aspectRatio: h, basePlayerClass: d, children: p, includeDisputeLinkInCopyrightErrorMessage: u, isFullScreen: y, objectFitVideo: f, onApiReady: b, onScroll: _, onStateUpdate: S, playerId: v, size: C, ...P } = this.props,
                        x = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: s, containerRef: this._containerRef },
                        R = { ...x, playerState: a };
                    return r.createElement(
                        n.Z,
                        { isFullScreen: y, onScroll: _, ratio: h, style: [g.root, g[C]] },
                        this.state.hasError
                            ? r.createElement(l.Z, { onReloadPress: this._handleReload })
                            : r.createElement(
                                  m.Context.Provider,
                                  { value: R },
                                  r.createElement(
                                      m.PeriodicContext.Provider,
                                      { value: x },
                                      r.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => r.createElement(d, (0, i.Z)({}, P, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: f }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (m.Consumer = u), (m.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (m.Context = r.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (m.PeriodicContext = r.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const g = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                y = m;
        },
        395367: (e, t, s) => {
            s.d(t, { Z: () => n });
            var i,
                r = s(202784);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { playerApi: void 0, playerState: void 0, guestsState: void 0 }),
                        (this._initializeState = (e) => {
                            e && (this._unsubscribe && this._unsubscribe(), this.setState({ playerApi: e }), (this._unsubscribe = e.subscribe((e, t) => this.setState({ playerState: e, guestsState: t }))));
                        });
                }
                componentDidMount() {
                    this._initializeState(this.props.playerApi);
                }
                componentDidUpdate(e) {
                    const { playerApi: t } = this.props;
                    t !== e.playerApi && this._initializeState(t);
                }
                render() {
                    return this.props.children(this.state);
                }
            }
            class n extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { players: {} }),
                        (this._mounted = !1),
                        (this._registerPlayer = (e, t) => {
                            const s = new Promise((s) => {
                                setTimeout(() => {
                                    this._mounted ? this.setState((s) => ({ players: { ...s.players, [e]: t } }), s) : s();
                                });
                            });
                            return () => {
                                s.then(() => this._unregisterPlayer(e));
                            };
                        }),
                        (this._unregisterPlayer = (e) => {
                            this._mounted &&
                                this.setState((t) => {
                                    const { [e]: s, ...i } = this.state.players;
                                    return { players: i };
                                });
                        }),
                        (this._registrationContext = { registerPlayer: this._registerPlayer });
                }
                componentDidMount() {
                    this._mounted = !0;
                }
                componentWillUnmount() {
                    this._mounted = !1;
                }
                render() {
                    return r.createElement(n.RegistrationContext.Provider, { value: this._registrationContext }, r.createElement(n.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (i = n), (n.MetadataSubscriber = ({ children: e, playerId: t }) => r.createElement(i.ProviderContext.Consumer, null, ({ players: s }) => r.createElement(a, { playerApi: s && s[t] }, e))), (n.RegistrationContext = r.createContext({ registerPlayer: void 0 })), (n.ProviderContext = r.createContext({ players: {} }));
        },
        893164: (e, t, s) => {
            s.d(t, { Z: () => u });
            var i = s(202784),
                r = s(325686),
                a = s(111677),
                n = s.n(a),
                o = s(355830),
                l = s(731708),
                c = s(154003),
                h = s(992942),
                d = s(392237);
            const p = n().a9edea48;
            function u(e) {
                const { displayBackgroundImage: t = !1, errorMessage: s, iconPlayError: a, imageSrc: n, onReloadPress: u } = e;
                return i.createElement(r.Z, { style: [d.default.absoluteFill, t ? null : m.blankOverlay] }, t ? i.createElement(i.Fragment, null, i.createElement(r.Z, { style: m.backgroundImage }, n && i.createElement(h.Z, { resizeMode: "cover", source: n, style: d.default.absoluteFill })), i.createElement(r.Z, { style: m.overlay })) : null, i.createElement(r.Z, { style: m.errorContainer }, i.createElement(r.Z, null, a ? i.createElement(o.default, { style: m.playErrorIcon }) : null), i.createElement(r.Z, { focusable: !0 }, i.createElement(l.ZP, { style: t ? m.errorMsgTextWhite : m.errorMsgTextGray }, s)), u ? i.createElement(c.ZP, { onPress: u, style: m.buttonContainer, type: "brandFilled" }, p) : null));
            }
            const m = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        815479: (e, t, s) => {
            s.d(t, { Z: () => Q });
            var i = s(202784),
                r = s(325686),
                a = s(640290),
                n = s(614425),
                o = s(682474),
                l = s(58881),
                c = s(530732),
                h = s(782578),
                d = s(392237),
                p = s(738584),
                u = s(395367),
                m = s(336961),
                g = s(807896),
                y = s(151624),
                f = s(111677),
                b = s.n(f),
                _ = s(933895),
                S = s(868634),
                v = s(224162);
            const C = "decrease",
                P = "increase",
                x = "left",
                R = "right";
            var w = s(731708),
                T = s(879891);
            s(136728);
            function E(e) {
                const t = Math.round(e / 1e3);
                if (t < 10) return `0:0${t}`;
                if (t < 60) return `0:${t}`;
                const s = Math.floor(t / 60);
                return `${s}:${("" + (t - 60 * s)).padStart(2, "0")}`;
            }
            const k = (e, t) =>
                    e.map((e) =>
                        ((e, t) => {
                            if ("tenths" === t) {
                                const t = Math.round(e / 100),
                                    s = t % 10;
                                return `0:${("" + (t - s) / 10).padStart(2, "0")}.${s}`;
                            }
                            return E(e);
                        })(e, t),
                    ),
                Z = (e, t) => {
                    const {
                        intervalsMs: s,
                        numIntervals: i,
                        numSubintervals: r,
                        precision: a,
                    } = ((e, t) => {
                        let s, i, r;
                        const a = t / e;
                        a >= 0.25 ? ((s = 200), (i = "tenths"), (r = 4)) : a >= 0.1 ? ((s = 500), (i = "tenths"), (r = 5)) : a >= 0.05 ? ((s = 1e3), (i = "seconds"), (r = 5)) : a >= 0.025 ? ((s = 2e3), (i = "seconds"), (r = 4)) : a >= 0.01 ? ((s = 5e3), (i = "seconds"), (r = 5)) : a >= 0.005 ? ((s = 1e4), (i = "seconds"), (r = 5)) : a >= 0.0025 ? ((s = 2e4), (i = "seconds"), (r = 4)) : a >= 0.001 ? ((s = 5e4), (i = "seconds"), (r = 4)) : ((s = 1e5), (i = "seconds"), (r = 4));
                        const n = [];
                        let o = 0;
                        for (; o < e; ) n.push(o), (o += s);
                        return { intervalsMs: n, precision: i, numSubintervals: r, numIntervals: Number((e / s).toFixed(1)) };
                    })(e, t);
                    return { intervalStrings: k(s, a), numSubintervals: r, numIntervals: i };
                };
            const M = d.default.create((e) => ({ root: { flexDirection: "column", width: "100%", position: "absolute", height: "65%", bottom: 0, overflow: "hidden" }, intervalRow: { flexDirection: "row" }, intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: "none" }, intervalRowTicks: { flexGrow: 1, overflow: "hidden" }, borderLeft: { borderStartColor: e.colors.gray700, borderStartWidth: 1 }, borderRight: { borderEndColor: e.colors.gray700, borderEndWidth: 1 }, bigTicks: { flexDirection: "row", alignItems: "flex-end" }, smallTicks: { flexGrow: 1, height: "50%" }, intervalStrings: { display: "flex", justifyContent: "center" } })),
                D = function ({ duration: e, trimmerWidth: t }) {
                    const { intervalStrings: s, numIntervals: a, numSubintervals: n } = Z(e, t),
                        { direction: o } = (0, T.Z)(),
                        l = "rtl" === o ? M.borderRight : M.borderLeft,
                        c = (100 * Math.ceil(a)) / a;
                    return i.createElement(
                        r.Z,
                        { style: M.root },
                        i.createElement(
                            r.Z,
                            { style: [M.intervalRow, M.intervalRowStrings, { width: `${c}%` }] },
                            s.map((e, s) => i.createElement(w.ZP, { color: "gray700", key: s, size: "subtext3", style: [{ width: 0 === s ? t / a / 2 + "px" : t / a + "px" }, M.intervalStrings] }, 0 !== s ? e : null)),
                        ),
                        i.createElement(
                            r.Z,
                            { style: [M.intervalRow, M.intervalRowTicks] },
                            s.map((e, t) =>
                                i.createElement(
                                    r.Z,
                                    { key: t, style: [{ width: 100 / a + "%" }, M.bigTicks, 0 !== t && l] },
                                    Array.from({ length: n }, (e, t) => i.createElement(r.Z, { key: t, style: [M.smallTicks, 0 !== t && l] })),
                                ),
                            ),
                        ),
                    );
                };
            var W = s(165010),
                A = s(301049);
            const L = b().a394f905,
                B = b().f42c0c80,
                I = b().i667afe8,
                H = b().c0bdd345;
            class z extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._panResponders = y.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderGrant: () => this.props.onMoveStart(this.props.side), onPanResponderMove: (e, { dx: t }) => this.props.onMoveChange(t, this.props.side), onPanResponderRelease: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminate: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminationRequest: () => !0 })),
                        (this._handleOnKeyDown = (e, t) => {
                            const { onKeyDown: s } = this.props,
                                { key: i } = e,
                                r = i === A.Z.ArrowUp || i === A.Z.ArrowRight,
                                a = i === A.Z.ArrowDown || i === A.Z.ArrowLeft;
                            if (r || a) {
                                e.preventDefault();
                                s(r ? P : C, t);
                            }
                        }),
                        (this._handleOnKeyUp = (e) => {
                            const { onKeyUp: t } = this.props,
                                { key: s } = e;
                            [A.Z.ArrowDown, A.Z.ArrowLeft, A.Z.ArrowRight, A.Z.ArrowUp].includes(s) && t();
                        }),
                        (this._generateBorderStyles = (e) => {
                            const { side: t } = this.props,
                                s = "rtl" === e;
                            return t === x ? (s ? j.rightScrubberRadius : j.leftScrubberRadius) : t === R ? (s ? j.leftScrubberRadius : j.rightScrubberRadius) : void 0;
                        });
                }
                render() {
                    const { currentValue: e, maxValue: t, minValue: s, side: a, style: n } = this.props;
                    return i.createElement(v.ZP.Consumer, null, ({ direction: o }) => i.createElement(c.Z, (0, g.Z)({ "aria-label": a === x ? I : B, "aria-valuemax": parseFloat(H(t / 1e3)), "aria-valuemin": parseFloat(H(s / 1e3)), "aria-valuenow": parseFloat(H(e / 1e3)), "aria-valuetext": L({ seconds: H(e / 1e3) }), focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: d.default.theme.colors.primary, color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.primary, customHoverBackgroundColor: d.default.theme.colors.primary, customPressedBackgroundColor: d.default.theme.colors.primary, insetFocusRing: !0 }), onKeyDown: (e) => this._handleOnKeyDown(e, a), onKeyUp: (e) => this._handleOnKeyUp(e), role: "adjustable", style: [j.root, this._generateBorderStyles(o), n] }, (0, W.dW)(this._panResponders.panHandlers)), ({ isFocused: e, isHovered: t, isPressed: s }) => i.createElement(i.Fragment, null, i.createElement(r.Z, { style: [j.trimmerScrubberGrips, (e || t || s) && j.trimmerScrubberGripsOpacity] }), i.createElement(r.Z, { style: [j.trimmerScrubberGrips, (e || t || s) && j.trimmerScrubberGripsOpacity] }))));
                }
            }
            const j = d.default.create((e) => ({ root: { backgroundColor: e.colors.primary, cursor: "grab", flexDirection: "row", height: e.spaces.space48, justifyContent: "space-between", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space12, width: `calc(${e.spaces.space4} * 2 + ${e.spaces.space2} * 3)` }, leftScrubberRadius: { borderBottomStartRadius: e.borderRadii.small, borderTopStartRadius: e.borderRadii.small }, rightScrubberRadius: { borderBottomEndRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, trimmerScrubberGrips: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, height: "100%", width: e.spaces.space2 }, trimmerScrubberGripsOpacity: { opacity: 0.8 } })),
                G = z,
                F = b().af2a65d9,
                U = b().d46781af,
                V = b().e8733ed9,
                $ = b().j3d49e93,
                O = (e, t) => (e / t) * 100 + "%";
            class K extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._keyPressAccumulatedDistance = 0),
                        (this._keyPressValueDelta = 1),
                        (this._panResponderTermination = y.Z.create({ onMoveShouldSetPanResponderCapture: (e, { dx: t }) => this._shouldTerminateChildrenPanResponders(t) })),
                        (this.state = { isActive: !1, trimmerWidth: 0 }),
                        (this._generateTimestampLabelString = () => {
                            const { endTime: e, startTime: t } = this.props,
                                s = e - t;
                            if (s >= 6e4) {
                                const e = E(s);
                                return $({ timestamp: e });
                            }
                            return s < 4e3 ? U(Math.floor((10 * s) / 1e3) / 10) : V(Math.floor(s / 1e3));
                        }),
                        (this._getTrimmerScrubberWidth = () => 2 * d.default.theme.spacesPx.space4 + 3 * d.default.theme.spacesPx.space2),
                        (this._handleKeyDown = (e, t) => {
                            const { trimmerWidth: s } = this.state;
                            1 === this._keyPressValueDelta && this._handlePanResponderGrant(t), (this._keyPressAccumulatedDistance += this._keyPressValueDelta * (e === P ? 1 : -1)), this._handlePanResponderChange(this._keyPressAccumulatedDistance, t);
                            const i = 0.05 * s;
                            this._keyPressValueDelta = Math.min(1.4 * this._keyPressValueDelta, i);
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
                            const { endTime: t, startTime: s } = this.props;
                            (this._baseTime = e === x ? s : t), this.setState({ isActive: !0 });
                        }),
                        (this._renderTimestampLabel = () => {
                            const { isActive: e } = this.state,
                                { duration: t, endTime: s, startTime: a } = this.props,
                                n = "rtl" === this._languageDirection,
                                o = n ? "marginEnd" : "marginStart",
                                l = n ? "marginStart" : "marginEnd";
                            return i.createElement(r.Z, { style: [Y.labelWrapper, { [o]: O(a, t), [l]: O(t - s, t), width: O(s - a, t) }] }, i.createElement(S.ZP, { background: "maskColor", style: [Y.label, !e && Y.visibilityHidden] }, F({ timestamp: this._generateTimestampLabelString() })));
                        }),
                        (this._setRootRef = (e) => {
                            e && (this._removeTouchMoveToScrollListener = (0, _.O)(e, this._handleTouchMoveToScroll, !1));
                        }),
                        (this._handleTouchMoveToScroll = (e) => e.preventDefault()),
                        (this._scaleDistanceByTrimmerWidth = (e) => {
                            const { duration: t } = this.props,
                                { trimmerWidth: s } = this.state;
                            return (e / s) * t;
                        }),
                        (this._shouldTerminateChildrenPanResponders = (e) => {
                            const { duration: t } = this.props,
                                s = this._baseTime + this._scaleDistanceByTrimmerWidth(e);
                            return s < 0 || s > t;
                        }),
                        (this._triggerChange = (e, t) => {
                            const { duration: s, endTime: i, onScrub: r, startTime: a } = this.props,
                                n = this._baseTime + this._scaleDistanceByTrimmerWidth(e),
                                o = 1e3;
                            if (t === x) {
                                let e = n;
                                n <= 0 ? (e = 0) : i - o <= n && (e = i - o), r(x, e);
                            }
                            if (t === R) {
                                let e = n;
                                n >= s ? (e = s) : n - a <= o && (e = a + o), r(R, e);
                            }
                        });
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener();
                }
                render() {
                    const { duration: e, endTime: t, playTime: s, startTime: a } = this.props,
                        { isActive: n, trimmerWidth: o } = this.state,
                        l = this._getTrimmerScrubberWidth();
                    return i.createElement(v.ZP.Consumer, null, ({ direction: c }) => {
                        this._languageDirection = c;
                        const h = "rtl" === this._languageDirection,
                            d = h ? "marginEnd" : "marginStart",
                            p = h ? "marginStart" : "marginEnd";
                        return i.createElement(r.Z, (0, g.Z)({ ref: this._setRootRef, style: [Y.root, n && Y.cursorGrab] }, this._panResponderTermination.panHandlers), this._renderTimestampLabel(), i.createElement(r.Z, { onLayout: this._handleLayout, style: Y.trimmerWrapper }, i.createElement(r.Z, { style: Y.intervalsContainer }, i.createElement(D, { duration: e, trimmerWidth: o })), i.createElement(i.Fragment, null, i.createElement(r.Z, { style: [Y.discardArea, Y.transition, { width: O(a, e) }] }), i.createElement(r.Z, { style: Y.keepArea }, i.createElement(G, { currentValue: a, maxValue: t, minValue: 0, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: x, style: [Y.trimmerScrubber, { [d]: `-${l}px` }] }), i.createElement(r.Z, { style: Y.keepAreaCenter }, n ? null : i.createElement(r.Z, { style: [Y.playBarArea, Y.transition, { width: O(s, t - a) }] })), i.createElement(G, { currentValue: t, maxValue: e, minValue: a, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: R, style: [Y.trimmerScrubber, { [p]: `-${l}px` }] })), i.createElement(r.Z, { style: [Y.discardArea, Y.transition, { width: `calc(100% - ${O(t, e)})` }] }))));
                    });
                }
            }
            const Y = d.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space40, width: "100%" }, cursorGrab: { cursor: "grab" }, trimmerWrapper: { alignItems: "center", writingDirection: "ltr", flexGrow: 1, flexDirection: "row", height: e.spaces.space48, position: "relative" }, discardArea: { backgroundColor: e.colors.maskColor, height: `calc(100% - (${e.spaces.space4} * 2))` }, keepArea: { flexDirection: "row", flexGrow: 1, height: "100%", zIndex: 1 }, keepAreaCenter: { borderColor: e.colors.primary, borderStyle: "solid", borderBottomWidth: e.spaces.space4, borderTopWidth: e.spaces.space4, height: "100%", position: "relative", width: "100%" }, intervalsContainer: { backgroundColor: e.colors.gray50, height: `calc(${e.spaces.space48} - ${e.spaces.space4} * 2)`, position: "absolute", start: 0, end: 0 }, label: { userSelect: "none" }, labelWrapper: { flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 }, playBarArea: { backgroundColor: e.colors.primary, height: "100%", opacity: 0.5 }, trimmerScrubber: { zIndex: 1 }, transition: { transitionDuration: "0.01s", transitionProperty: "width" }, visibilityHidden: { visibility: "hidden" } })),
                X = K,
                N = new a.ZP({});
            class q extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._isScrubbed = !1),
                        (this.state = { endTime: this.props.defaultTrimData?.endTime || this.props.video.duration, isPlaying: !1, startTime: this.props.defaultTrimData?.startTime || 0, playTime: 0 }),
                        (this._handleScrub = (e) => (t, s) => {
                            const { endTime: i, startTime: r } = this.state,
                                {
                                    video: { duration: a },
                                } = this.props,
                                n = t === x;
                            if (e) {
                                const t = n ? s : r,
                                    o = n ? i : s;
                                e.pause(), e.scrubToFraction(s / a), e.setPlaybackTimeRange({ startTimeS: t / 1e3, endTimeS: o / 1e3 });
                            }
                            this._isScrubbed = !0;
                            const o = n ? { startTime: s } : { endTime: s };
                            this.setState({ playTime: 0, ...o });
                        }),
                        (this._handleOnVideoContainerLayout = (e) => {
                            const { height: t, width: s } = e.nativeEvent.layout,
                                { height: i, width: r } = this.props.video,
                                a = r / i,
                                { height: n, width: o } = h.Z.getContainDimensions({ height: t, width: s }, a);
                            (n === this.state.adjustedVideoHeight && o === this.state.adjustedVideoWidth) || this.setState({ adjustedVideoHeight: n, adjustedVideoWidth: o });
                        }),
                        (this._handleVideoClick = (e) => () => {
                            const { endTime: t, isPlaying: s, startTime: i } = this.state,
                                {
                                    video: { duration: r },
                                } = this.props;
                            e && (this._isScrubbed ? (e.scrubToFraction(i / r), (this._isScrubbed = !1)) : this._isScrubbed || (!i && t === r) || (e.scrubToFraction(i / r), e.setPlaybackTimeRange({ startTimeS: i / 1e3, endTimeS: t / 1e3 })), s ? e.pause() : e.play());
                        }),
                        (this._handlePlayerStateUpdate = (e) => {
                            const { startTime: t } = this.state,
                                s = e.tracks[e.currentTrackId];
                            if (s) {
                                const i = s.currentTimeMs - t;
                                this.setState({ isPlaying: e.isPlaying, ...(e.isPlaying ? { playTime: i } : {}) });
                            }
                        });
                }
                render() {
                    const { video: e } = this.props,
                        { adjustedVideoHeight: t, adjustedVideoWidth: s, endTime: a, isPlaying: h, playTime: g, startTime: y } = this.state;
                    return i.createElement(
                        r.Z,
                        { style: J.root },
                        i.createElement(
                            u.Z,
                            null,
                            i.createElement(
                                r.Z,
                                { style: J.videoContainer },
                                i.createElement(
                                    r.Z,
                                    { onLayout: this._handleOnVideoContainerLayout, style: J.video },
                                    i.createElement(
                                        o.Z,
                                        { ratio: e.width / e.height, style: !!t && !!s && { height: t, width: s } },
                                        i.createElement(p.Z, { aspectRatio: e.width / e.height, basePlayerClass: n.Y7, configType: "static", contentId: "", contentType: "media_entity", httpClient: N, onStateUpdate: this._handlePlayerStateUpdate, playerId: "trimmer", size: "fill", variants: e.variants }, ({ playerApi: e }) => i.createElement(c.Z, { focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.transparent, customHoverBackgroundColor: d.default.theme.colors.transparent, customPressedBackgroundColor: d.default.theme.colors.transparent, insetFocusRing: !0 }), onClick: this._handleVideoClick(e), style: J.overlay }, h ? null : i.createElement(m.Z, null))),
                                    ),
                                ),
                            ),
                            i.createElement(u.Z.MetadataSubscriber, { playerId: "trimmer" }, ({ playerApi: t }) => i.createElement(X, { duration: e.duration, endTime: a, onScrub: this._handleScrub(t), playTime: g, startTime: y })),
                        ),
                    );
                }
                getTrimData() {
                    const { endTime: e, startTime: t } = this.state;
                    return { startTime: t, endTime: e };
                }
            }
            const J = d.default.create((e) => ({ root: { flex: 1 }, overlay: { ...d.default.absoluteFillObject, alignItems: "center", justifyContent: "center" }, video: { alignItems: "center", flex: 1, justifyContent: "center", width: "100%" }, videoContainer: { alignItems: "center", backgroundColor: e.colors.gray0, flex: 1, padding: e.spaces.space20, width: "100%" } })),
                Q = q;
        },
        614425: (e, t, s) => {
            s.d(t, { Y7: () => i });
            const i = s(795897).default;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-bc6ccf4c.c15bb9aa.js.map
