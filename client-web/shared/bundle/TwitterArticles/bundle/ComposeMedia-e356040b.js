"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-e356040b"],
    {
        449161: (e, t, s) => {
            s.d(t, { Z: () => m });
            var i = s(807896),
                n = s(202784),
                a = s(674132),
                r = s.n(a),
                o = s(154003),
                l = s(950822),
                h = s(392237);
            const c = r().i5450bec,
                d = r().f7432494;
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                s = e.target,
                                i = s.files;
                            i.length && t && t(i), (s.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: s, onChange: a, testID: r, ...h } = this.props,
                        p = !(e?.includes("video") || e?.includes("gif"));
                    return n.createElement(n.Fragment, null, n.createElement(o.ZP, (0, i.Z)({ hoverLabel: e ? { label: p ? d : c } : void 0 }, h, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: s, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: r, type: "file" }));
                }
            }
            p.defaultProps = { disabled: !1, multiple: !1 };
            const u = h.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = p;
        },
        548485: (e, t, s) => {
            s.d(t, { Z: () => A });
            var i = s(202784),
                n = s(928316),
                a = s(325686),
                r = s(674132),
                o = s.n(r),
                l = s(553007),
                h = s(723951),
                c = s(390587),
                d = s(158910),
                p = s(614991),
                u = s(323265),
                m = s(154003),
                g = s(992942),
                y = s(782578),
                _ = s(173739),
                f = s(392237),
                b = s(393058);
            const v = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: s }) => i.createElement(a.Z, { pointerEvents: "none", style: [v.mask, { width: s, height: t }, e && v.circle] });
            var w = s(807896),
                C = s(151624),
                P = s(933895);
            class T extends i.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: s, onPinchMove: i, onWheel: n } = this.props;
                            if (e) {
                                (s || t || i) && (this._removeTouchMoveToScrollListener = (0, P.O)(e, this._preventDefaultEvent, !1)), n && (this._removeScrollToScaleListener = (0, P.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: s, onPinchMove: i } = this.props,
                                n = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (i) {
                                    const e = ((a = n[0]), (r = n[1]), Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: s } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(n[0], n[1]),
                                        o = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? s - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = s), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    i(h, c - t, d - s, o, l);
                                }
                            } else s && s(t.dx, t.dy);
                            var a, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: s, deltaX: i, deltaY: n } = e,
                                { x: a, y: r } = this._centerPosition,
                                o = a - t,
                                l = r - s;
                            this.props.onWheel && this.props.onWheel(i, n, o, l);
                        }),
                        (this._panResponder = C.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: s, onPinchMove: n, onWheel: r, ...o } = this.props;
                    return i.createElement(a.Z, (0, w.Z)({}, o, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const R = T,
                x = o().d85bc1b8,
                E = o().f596ace8,
                k = o().df031fca,
                D = o().b40332c6,
                Z = o().e547b368,
                M = o().f7571204,
                W = o().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class I extends i.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !b.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: s } = this.state,
                                n = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? i.createElement(a.Z, { style: B.controlsContainer }, t ? i.createElement(a.Z, { style: B.ratioContainer }, i.createElement(m.ZP, { "aria-label": E, borderColor: "transparent", color: s === n ? "primary" : "gray700", hoverLabel: { label: Z }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(n), size: "medium" }), i.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: s === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: M }, icon: i.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: 1 === s ? "primary" : "gray700", hoverLabel: { label: W }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? i.createElement(a.Z, { style: B.zoomContainer }, i.createElement(_.Z, { "aria-label": x, max: this._maxScale, maxIcon: i.createElement(d.default, { style: B.icon }), min: 0, minIcon: i.createElement(p.default, { style: B.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: s, width: i } = this._getMaskDimensions(),
                                { height: n, width: a } = y.Z.getCoverDimensions({ width: i, height: s }, t);
                            return { width: a * Math.pow(2, e), height: n * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: s } = this.state,
                                { height: i, width: n } = y.Z.getContainDimensions({ width: s - 50, height: t - 50 }, e);
                            return { width: n, height: i };
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
                                n = s / t.width,
                                a = L(i / (e.width * n));
                            this.setState({ imageScale: a });
                            const { left: r, top: o } = this._getUnscaledCropData();
                            (this._panStyles.top = o - e.top * n * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * n * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, s, i) => {
                            const n = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + n, 0));
                                return (this._panStyles.left += s * (t - e)), (this._panStyles.top += i * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, s, i, n) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (r - e) + i), (this._panStyles.top += s * (r - e) + n), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                s = e.left,
                                i = e.top,
                                n = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let r = !1;
                            s < 0 && ((r = !0), (this._panStyles.left += s), (this._previousLeft += s)), i < 0 && ((r = !0), (this._panStyles.top += i), (this._previousTop += i)), n > 0 && ((r = !0), (this._panStyles.left += n), (this._previousLeft += n)), a > 0 && ((r = !0), (this._panStyles.top += a), (this._previousTop += a)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: s } = this.state,
                                i = s?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            i !== a &&
                                (0, n.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: s, width: i } = this._getMaskDimensions(),
                                { left: n, top: a } = this._panStyles;
                            return { top: (e - s) / 2 - a, left: (t - i) / 2 - n, width: i, height: s };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: s } = this.props,
                        { transformStyle: n } = this.state,
                        { height: r, width: o } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(a.Z, { style: B.container }, i.createElement(R, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: s ? this._handlePinchMove : void 0, onWheel: s ? this._handleWheel : void 0, style: B.root }, c ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: o, height: r }, style: [B.image, n] }), i.createElement(S, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            I.defaultProps = { circle: !1, withZoomControl: !0 };
            const B = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                A = I;
        },
        403556: (e, t, s) => {
            s.d(t, { Z: () => T });
            var i = s(807896),
                n = s(202784),
                a = s(194504),
                r = s(235902),
                o = s(392237),
                l = s(325686),
                h = s(674132),
                c = s.n(h),
                d = s(912021),
                p = s(516951),
                u = s(731708),
                m = s(310088),
                g = s(175993),
                y = s(58881),
                _ = s(530732);
            const f = c().d2414d31,
                b = () => c().ce4e85ae,
                v = c().fb9f6f39;
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: s, query: i, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: s, query: i, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, s, i) => {
                            const n = o.default.theme.colors.text,
                                a = o.default.theme.colors.gray700;
                            return s || i ? (e || t ? n : a) : e ? n : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: s, badgePip: i, children: a, color: r, isActive: h, isCompact: c, isPillLink: d, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: S, style: C, to: P } = this.props,
                        { location: T } = this.state,
                        R = P ? this._getMemoizedLink(P, S) : void 0,
                        x = h ? h(P) : T?.pathname === R?.pathname,
                        E = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0 }),
                        k = g ? "medium" : x ? "bold" : "medium";
                    return n.createElement(_.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: E, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [d ? w.pill : w.link, d && x ? w.active : null, c ? (d ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, C], withoutInteractiveStyles: g || d }, ({ isFocused: t, isHovered: h }) => n.createElement(l.Z, { style: d && w.flexGrow }, n.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(x, h, g, d) }, c && w.compactText, g && t && w.focusedText], weight: k }, e && n.createElement(e, { style: w.icon }), a, g || d ? null : n.createElement(l.Z, { style: x && [w.border, { backgroundColor: o.default.theme.colors[r] }] })), s ? n.createElement(m.Z, { count: s, standalone: !0, style: [w.badge, s >= 10 && w.multiDigitBadge, s >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: f, withBorder: !1 }) : i ? n.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (S.contextType = g.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = o.default.create((e) => ({
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
                P = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: s, isPillLink: o, isRoundedRect: l, links: h, style: c, visibleItemIndex: d }) => {
                    const p = h
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        m = u() && !o,
                        g = n.useMemo(
                            () =>
                                h.filter(Boolean).map(({ label: t, viewType: a, ...r }, h) => {
                                    const c = m ? [P.linkRedesign, 0 === h && P.firstLinkRedesign, e && 0 === h && P.withNoPaddingStart] : void 0;
                                    return n.createElement(C, (0, i.Z)({ viewType: a }, r, { isCompact: s, isPillLink: o, isRoundedRect: l, isWebRedesign: m, style: c }), t);
                                }),
                            [e, s, o, l, m, h],
                        );
                    return n.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: o && P.gap, childrenStyle: !m && P.flexGrow, key: p, style: [o ? null : P.segmentedControl, m && P.leftAligned, c], visibleItemIndex: d }, g);
                };
        },
        815479: (e, t, s) => {
            s.d(t, { Z: () => Q });
            var i = s(202784),
                n = s(325686),
                a = s(640290),
                r = s(614425),
                o = s(682474),
                l = s(58881),
                h = s(530732),
                c = s(782578),
                d = s(392237),
                p = s(738584),
                u = s(395367),
                m = s(336961),
                g = s(807896),
                y = s(151624),
                _ = s(674132),
                f = s.n(_),
                b = s(933895),
                v = s(868634),
                S = s(224162);
            const w = "decrease",
                C = "increase",
                P = "left",
                T = "right";
            var R = s(731708),
                x = s(879891);
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
                D = (e, t) => {
                    const {
                        intervalsMs: s,
                        numIntervals: i,
                        numSubintervals: n,
                        precision: a,
                    } = ((e, t) => {
                        let s, i, n;
                        const a = t / e;
                        a >= 0.25 ? ((s = 200), (i = "tenths"), (n = 4)) : a >= 0.1 ? ((s = 500), (i = "tenths"), (n = 5)) : a >= 0.05 ? ((s = 1e3), (i = "seconds"), (n = 5)) : a >= 0.025 ? ((s = 2e3), (i = "seconds"), (n = 4)) : a >= 0.01 ? ((s = 5e3), (i = "seconds"), (n = 5)) : a >= 0.005 ? ((s = 1e4), (i = "seconds"), (n = 5)) : a >= 0.0025 ? ((s = 2e4), (i = "seconds"), (n = 4)) : a >= 0.001 ? ((s = 5e4), (i = "seconds"), (n = 4)) : ((s = 1e5), (i = "seconds"), (n = 4));
                        const r = [];
                        let o = 0;
                        for (; o < e; ) r.push(o), (o += s);
                        return { intervalsMs: r, precision: i, numSubintervals: n, numIntervals: Number((e / s).toFixed(1)) };
                    })(e, t);
                    return { intervalStrings: k(s, a), numSubintervals: n, numIntervals: i };
                };
            const Z = d.default.create((e) => ({ root: { flexDirection: "column", width: "100%", position: "absolute", height: "65%", bottom: 0, overflow: "hidden" }, intervalRow: { flexDirection: "row" }, intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: "none" }, intervalRowTicks: { flexGrow: 1, overflow: "hidden" }, borderLeft: { borderStartColor: e.colors.gray700, borderStartWidth: 1 }, borderRight: { borderEndColor: e.colors.gray700, borderEndWidth: 1 }, bigTicks: { flexDirection: "row", alignItems: "flex-end" }, smallTicks: { flexGrow: 1, height: "50%" }, intervalStrings: { display: "flex", justifyContent: "center" } })),
                M = function ({ duration: e, trimmerWidth: t }) {
                    const { intervalStrings: s, numIntervals: a, numSubintervals: r } = D(e, t),
                        { direction: o } = (0, x.Z)(),
                        l = "rtl" === o ? Z.borderRight : Z.borderLeft,
                        h = (100 * Math.ceil(a)) / a;
                    return i.createElement(
                        n.Z,
                        { style: Z.root },
                        i.createElement(
                            n.Z,
                            { style: [Z.intervalRow, Z.intervalRowStrings, { width: `${h}%` }] },
                            s.map((e, s) => i.createElement(R.ZP, { color: "gray700", key: s, size: "subtext3", style: [{ width: 0 === s ? t / a / 2 + "px" : t / a + "px" }, Z.intervalStrings] }, 0 !== s ? e : null)),
                        ),
                        i.createElement(
                            n.Z,
                            { style: [Z.intervalRow, Z.intervalRowTicks] },
                            s.map((e, t) =>
                                i.createElement(
                                    n.Z,
                                    { key: t, style: [{ width: 100 / a + "%" }, Z.bigTicks, 0 !== t && l] },
                                    Array.from({ length: r }, (e, t) => i.createElement(n.Z, { key: t, style: [Z.smallTicks, 0 !== t && l] })),
                                ),
                            ),
                        ),
                    );
                };
            var W = s(165010),
                L = s(301049);
            const I = f().a394f905,
                B = f().f42c0c80,
                A = f().i667afe8,
                G = f().c0bdd345;
            class $ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._panResponders = y.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderGrant: () => this.props.onMoveStart(this.props.side), onPanResponderMove: (e, { dx: t }) => this.props.onMoveChange(t, this.props.side), onPanResponderRelease: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminate: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminationRequest: () => !0 })),
                        (this._handleOnKeyDown = (e, t) => {
                            const { onKeyDown: s } = this.props,
                                { key: i } = e,
                                n = i === L.Z.ArrowUp || i === L.Z.ArrowRight,
                                a = i === L.Z.ArrowDown || i === L.Z.ArrowLeft;
                            if (n || a) {
                                e.preventDefault();
                                s(n ? C : w, t);
                            }
                        }),
                        (this._handleOnKeyUp = (e) => {
                            const { onKeyUp: t } = this.props,
                                { key: s } = e;
                            [L.Z.ArrowDown, L.Z.ArrowLeft, L.Z.ArrowRight, L.Z.ArrowUp].includes(s) && t();
                        }),
                        (this._generateBorderStyles = (e) => {
                            const { side: t } = this.props,
                                s = "rtl" === e;
                            return t === P ? (s ? H.rightScrubberRadius : H.leftScrubberRadius) : t === T ? (s ? H.leftScrubberRadius : H.rightScrubberRadius) : void 0;
                        });
                }
                render() {
                    const { currentValue: e, maxValue: t, minValue: s, side: a, style: r } = this.props;
                    return i.createElement(S.ZP.Consumer, null, ({ direction: o }) => i.createElement(h.Z, (0, g.Z)({ "aria-label": a === P ? A : B, "aria-valuemax": parseFloat(G(t / 1e3)), "aria-valuemin": parseFloat(G(s / 1e3)), "aria-valuenow": parseFloat(G(e / 1e3)), "aria-valuetext": I({ seconds: G(e / 1e3) }), focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: d.default.theme.colors.primary, color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.primary, customHoverBackgroundColor: d.default.theme.colors.primary, customPressedBackgroundColor: d.default.theme.colors.primary, insetFocusRing: !0 }), onKeyDown: (e) => this._handleOnKeyDown(e, a), onKeyUp: (e) => this._handleOnKeyUp(e), role: "adjustable", style: [H.root, this._generateBorderStyles(o), r] }, (0, W.dW)(this._panResponders.panHandlers)), ({ isFocused: e, isHovered: t, isPressed: s }) => i.createElement(i.Fragment, null, i.createElement(n.Z, { style: [H.trimmerScrubberGrips, (e || t || s) && H.trimmerScrubberGripsOpacity] }), i.createElement(n.Z, { style: [H.trimmerScrubberGrips, (e || t || s) && H.trimmerScrubberGripsOpacity] }))));
                }
            }
            const H = d.default.create((e) => ({ root: { backgroundColor: e.colors.primary, cursor: "grab", flexDirection: "row", height: e.spaces.space48, justifyContent: "space-between", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space12, width: `calc(${e.spaces.space4} * 2 + ${e.spaces.space2} * 3)` }, leftScrubberRadius: { borderBottomStartRadius: e.borderRadii.small, borderTopStartRadius: e.borderRadii.small }, rightScrubberRadius: { borderBottomEndRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, trimmerScrubberGrips: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, height: "100%", width: e.spaces.space2 }, trimmerScrubberGripsOpacity: { opacity: 0.8 } })),
                V = $,
                j = f().af2a65d9,
                F = f().d46781af,
                z = f().e8733ed9,
                U = f().j3d49e93,
                K = (e, t) => (e / t) * 100 + "%";
            class Y extends i.Component {
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
                                return U({ timestamp: e });
                            }
                            return s < 4e3 ? F(Math.floor((10 * s) / 1e3) / 10) : z(Math.floor(s / 1e3));
                        }),
                        (this._getTrimmerScrubberWidth = () => 2 * d.default.theme.spacesPx.space4 + 3 * d.default.theme.spacesPx.space2),
                        (this._handleKeyDown = (e, t) => {
                            const { trimmerWidth: s } = this.state;
                            1 === this._keyPressValueDelta && this._handlePanResponderGrant(t), (this._keyPressAccumulatedDistance += this._keyPressValueDelta * (e === C ? 1 : -1)), this._handlePanResponderChange(this._keyPressAccumulatedDistance, t);
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
                            (this._baseTime = e === P ? s : t), this.setState({ isActive: !0 });
                        }),
                        (this._renderTimestampLabel = () => {
                            const { isActive: e } = this.state,
                                { duration: t, endTime: s, startTime: a } = this.props,
                                r = "rtl" === this._languageDirection,
                                o = r ? "marginEnd" : "marginStart",
                                l = r ? "marginStart" : "marginEnd";
                            return i.createElement(n.Z, { style: [O.labelWrapper, { [o]: K(a, t), [l]: K(t - s, t), width: K(s - a, t) }] }, i.createElement(v.ZP, { background: "maskColor", style: [O.label, !e && O.visibilityHidden] }, j({ timestamp: this._generateTimestampLabelString() })));
                        }),
                        (this._setRootRef = (e) => {
                            e && (this._removeTouchMoveToScrollListener = (0, b.O)(e, this._handleTouchMoveToScroll, !1));
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
                            const { duration: s, endTime: i, onScrub: n, startTime: a } = this.props,
                                r = this._baseTime + this._scaleDistanceByTrimmerWidth(e),
                                o = 1e3;
                            if (t === P) {
                                let e = r;
                                r <= 0 ? (e = 0) : i - o <= r && (e = i - o), n(P, e);
                            }
                            if (t === T) {
                                let e = r;
                                r >= s ? (e = s) : r - a <= o && (e = a + o), n(T, e);
                            }
                        });
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener();
                }
                render() {
                    const { duration: e, endTime: t, playTime: s, startTime: a } = this.props,
                        { isActive: r, trimmerWidth: o } = this.state,
                        l = this._getTrimmerScrubberWidth();
                    return i.createElement(S.ZP.Consumer, null, ({ direction: h }) => {
                        this._languageDirection = h;
                        const c = "rtl" === this._languageDirection,
                            d = c ? "marginEnd" : "marginStart",
                            p = c ? "marginStart" : "marginEnd";
                        return i.createElement(n.Z, (0, g.Z)({ ref: this._setRootRef, style: [O.root, r && O.cursorGrab] }, this._panResponderTermination.panHandlers), this._renderTimestampLabel(), i.createElement(n.Z, { onLayout: this._handleLayout, style: O.trimmerWrapper }, i.createElement(n.Z, { style: O.intervalsContainer }, i.createElement(M, { duration: e, trimmerWidth: o })), i.createElement(i.Fragment, null, i.createElement(n.Z, { style: [O.discardArea, O.transition, { width: K(a, e) }] }), i.createElement(n.Z, { style: O.keepArea }, i.createElement(V, { currentValue: a, maxValue: t, minValue: 0, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: P, style: [O.trimmerScrubber, { [d]: `-${l}px` }] }), i.createElement(n.Z, { style: O.keepAreaCenter }, r ? null : i.createElement(n.Z, { style: [O.playBarArea, O.transition, { width: K(s, t - a) }] })), i.createElement(V, { currentValue: t, maxValue: e, minValue: a, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: T, style: [O.trimmerScrubber, { [p]: `-${l}px` }] })), i.createElement(n.Z, { style: [O.discardArea, O.transition, { width: `calc(100% - ${K(t, e)})` }] }))));
                    });
                }
            }
            const O = d.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space40, width: "100%" }, cursorGrab: { cursor: "grab" }, trimmerWrapper: { alignItems: "center", writingDirection: "ltr", flexGrow: 1, flexDirection: "row", height: e.spaces.space48, position: "relative" }, discardArea: { backgroundColor: e.colors.maskColor, height: `calc(100% - (${e.spaces.space4} * 2))` }, keepArea: { flexDirection: "row", flexGrow: 1, height: "100%", zIndex: 1 }, keepAreaCenter: { borderColor: e.colors.primary, borderStyle: "solid", borderBottomWidth: e.spaces.space4, borderTopWidth: e.spaces.space4, height: "100%", position: "relative", width: "100%" }, intervalsContainer: { backgroundColor: e.colors.gray50, height: `calc(${e.spaces.space48} - ${e.spaces.space4} * 2)`, position: "absolute", start: 0, end: 0 }, label: { userSelect: "none" }, labelWrapper: { flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 }, playBarArea: { backgroundColor: e.colors.primary, height: "100%", opacity: 0.5 }, trimmerScrubber: { zIndex: 1 }, transition: { transitionDuration: "0.01s", transitionProperty: "width" }, visibilityHidden: { visibility: "hidden" } })),
                X = Y,
                q = new a.ZP({});
            class N extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._isScrubbed = !1),
                        (this.state = { endTime: this.props.defaultTrimData?.endTime || this.props.video.duration, isPlaying: !1, startTime: this.props.defaultTrimData?.startTime || 0, playTime: 0 }),
                        (this._handleScrub = (e) => (t, s) => {
                            const { endTime: i, startTime: n } = this.state,
                                {
                                    video: { duration: a },
                                } = this.props,
                                r = t === P;
                            if (e) {
                                const t = r ? s : n,
                                    o = r ? i : s;
                                e.pause(), e.scrubToFraction(s / a), e.setPlaybackTimeRange({ startTimeS: t / 1e3, endTimeS: o / 1e3 });
                            }
                            this._isScrubbed = !0;
                            const o = r ? { startTime: s } : { endTime: s };
                            this.setState({ playTime: 0, ...o });
                        }),
                        (this._handleOnVideoContainerLayout = (e) => {
                            const { height: t, width: s } = e.nativeEvent.layout,
                                { height: i, width: n } = this.props.video,
                                a = n / i,
                                { height: r, width: o } = c.Z.getContainDimensions({ height: t, width: s }, a);
                            (r === this.state.adjustedVideoHeight && o === this.state.adjustedVideoWidth) || this.setState({ adjustedVideoHeight: r, adjustedVideoWidth: o });
                        }),
                        (this._handleVideoClick = (e) => () => {
                            const { endTime: t, isPlaying: s, startTime: i } = this.state,
                                {
                                    video: { duration: n },
                                } = this.props;
                            e && (this._isScrubbed ? (e.scrubToFraction(i / n), (this._isScrubbed = !1)) : this._isScrubbed || (!i && t === n) || (e.scrubToFraction(i / n), e.setPlaybackTimeRange({ startTimeS: i / 1e3, endTimeS: t / 1e3 })), s ? e.pause() : e.play());
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
                        { adjustedVideoHeight: t, adjustedVideoWidth: s, endTime: a, isPlaying: c, playTime: g, startTime: y } = this.state;
                    return i.createElement(
                        n.Z,
                        { style: J.root },
                        i.createElement(
                            u.Z,
                            null,
                            i.createElement(
                                n.Z,
                                { style: J.videoContainer },
                                i.createElement(
                                    n.Z,
                                    { onLayout: this._handleOnVideoContainerLayout, style: J.video },
                                    i.createElement(
                                        o.Z,
                                        { ratio: e.width / e.height, style: !!t && !!s && { height: t, width: s } },
                                        i.createElement(p.Z, { aspectRatio: e.width / e.height, basePlayerClass: r.Y7, configType: "static", contentId: "", contentType: "media_entity", httpClient: q, onStateUpdate: this._handlePlayerStateUpdate, playerId: "trimmer", size: "fill", variants: e.variants }, ({ playerApi: e }) => i.createElement(h.Z, { focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.transparent, customHoverBackgroundColor: d.default.theme.colors.transparent, customPressedBackgroundColor: d.default.theme.colors.transparent, insetFocusRing: !0 }), onClick: this._handleVideoClick(e), style: J.overlay }, c ? null : i.createElement(m.Z, null))),
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
                Q = N;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-e356040b.24c0eeda.js.map
