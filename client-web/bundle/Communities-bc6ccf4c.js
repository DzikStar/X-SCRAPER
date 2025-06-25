"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c", "icons/IconCropSquare-js"],
    {
        738545: (e, t, o) => {
            o.d(t, { ZP: () => E });
            var n = o(202784),
                a = o(325686),
                i = o(111677),
                r = o.n(i),
                s = o(212145),
                l = o(568320),
                c = o(123588),
                d = o(731708),
                h = o(280278),
                p = o(392237),
                u = o(635998);
            const m = r().i2785009,
                g = r().c778d80b,
                f = r().d9687d23,
                y = r().ac73eb5a,
                b = r().c5a9f921,
                v = (e) => {
                    const { label: t, popover: o } = e;
                    return t ? n.createElement(a.Z, { style: C.labelBar }, n.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), o ? n.createElement(u.Z, { label: t, popover: o }) : null) : null;
                },
                _ = (e) => {
                    const { style: t, unit: o } = e;
                    return o ? n.createElement(d.ZP, { color: "gray700", style: [C.unitText, t], weight: "medium" }, o) : null;
                },
                S = (e) => {
                    let t,
                        o,
                        { trendValue: i } = e;
                    return void 0 === i ? null : (Math.abs(i) < 0.1 ? ((i = Math.round(1e3 * i) / 1e3), (t = g(i))) : ((i = Math.round(100 * i) / 100), (t = m(i))), (o = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? y : b({ trendValuePositivePercent: t })))(i, t)), i < 0 ? n.createElement(a.Z, { style: C.trendBar, testID: "trendLabel" }, n.createElement(s.default, { "aria-label": o, style: C.trendIconNeg }), n.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === i ? n.createElement(a.Z, { style: C.trendBar, testID: "trendLabel" }, n.createElement(l.default, { "aria-label": o, style: C.trendIconZero }), n.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : n.createElement(a.Z, { style: C.trendBar, testID: "trendLabel" }, n.createElement(c.default, { "aria-label": o, style: C.trendIconPos }), n.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                C = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                E = (e) => {
                    const { animated: t, count: o, label: i, popover: r, size: s, subTextList: l, trendValue: c, unit: p, value: u } = e,
                        m = p || void 0 !== c ? C.textWithMargin : void 0,
                        g = void 0 !== c ? C.textWithMargin : void 0;
                    return n.createElement(a.Z, { style: C.dataPoint }, n.createElement(v, { label: i, popover: r }), n.createElement(a.Z, { style: C.valueBar }, t ? n.createElement(h.ZP, { count: o, size: s, style: m, weight: "bold" }, u) : n.createElement(d.ZP, { size: s, style: m, weight: "bold" }, u), n.createElement(_, { style: g, unit: p }), n.createElement(S, { trendValue: c })), l);
                };
        },
        635998: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                a = o(325686),
                i = o(111677),
                r = o.n(i),
                s = o(711223),
                l = o(731708),
                c = o(154003),
                d = o(157130),
                h = o(392237);
            const p = r().affbaf62,
                u = r().c388d026,
                m = h.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: o } = e;
                    return n.createElement(a.Z, null, n.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => n.createElement(a.Z, { role: "dialog", style: m.popover }, n.createElement(a.Z, { style: m.popoverTitle }, n.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), n.createElement(a.Z, { style: m.popoverText }, o), n.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, u)), withArrow: !0 }, n.createElement(a.Z, { role: "button" }, n.createElement(s.default, { "aria-label": p, style: m.iconInformation }))));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                a = o(154003),
                i = o(392237);
            class r extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: i, href: r, icon: l, label: c, onPress: d, renderMenu: h, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: i, icon: l, link: r, onPress: d, renderMenu: h, size: "xLarge", style: [s.root, !c && s.iconOnly, p], testID: u }, c);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                a = o(325686),
                i = o(235902),
                r = o(885015),
                s = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? n.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(a.Z, { style: c.gapColumn }, n.createElement(a.Z, { style: [c.gap, d] })), n.createElement(a.Z, { style: c.gapText }, o), n.createElement(a.Z, { style: c.gapColumn }, n.createElement(a.Z, { style: [c.gap, d] }))) : n.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                i = o(325686),
                r = o(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...r } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return a.createElement(i.Z, (0, n.Z)({ style: [t, l.root, o && l.withGutter] }, r), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => z });
            var n = o(202784),
                a = o(928316),
                i = o(325686),
                r = o(111677),
                s = o.n(r),
                l = o(553007),
                c = o(723951),
                d = o(390587),
                h = o(158910),
                p = o(614991),
                u = o(323265),
                m = o(154003),
                g = o(992942),
                f = o(782578),
                y = o(173739),
                b = o(392237),
                v = o(401339);
            const _ = b.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: o }) => n.createElement(i.Z, { pointerEvents: "none", style: [_.mask, { width: o, height: t }, e && _.circle] });
            var C = o(807896),
                E = o(452661),
                w = o(933895);
            class x extends n.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: o, onPinchMove: n, onWheel: a } = this.props;
                            if (e) {
                                (o || t || n) && (this._removeTouchMoveToScrollListener = (0, w.O)(e, this._preventDefaultEvent, !1)), a && (this._removeScrollToScaleListener = (0, w.Y)(e, this._preventDefaultEvent, !1));
                                const i = e.getBoundingClientRect();
                                this._centerPosition = { x: i.width / 2 + i.left, y: i.height / 2 + i.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: o, onPinchMove: n } = this.props,
                                a = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (n) {
                                    const e = ((i = a[0]), (r = a[1]), Math.sqrt(Math.pow(i.pageY - r.pageY, 2) + Math.pow(i.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: o } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(a[0], a[1]),
                                        s = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? o - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: d, y: h } = this._centerPosition;
                                    n(c, d - t, h - o, s, l);
                                }
                            } else o && o(t.dx, t.dy);
                            var i, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: o, deltaX: n, deltaY: a } = e,
                                { x: i, y: r } = this._centerPosition,
                                s = i - t,
                                l = r - o;
                            this.props.onWheel && this.props.onWheel(n, a, s, l);
                        }),
                        (this._panResponder = E.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: a, onWheel: r, ...s } = this.props;
                    return n.createElement(i.Z, (0, C.Z)({}, s, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const P = x,
                Z = s().d85bc1b8,
                k = s().f596ace8,
                D = s().df031fca,
                B = s().b40332c6,
                M = s().e547b368,
                R = s().f7571204,
                T = s().e6e16812,
                W =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class I extends n.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !v.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: o } = this.state,
                                a = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? n.createElement(i.Z, { style: L.controlsContainer }, t ? n.createElement(i.Z, { style: L.ratioContainer }, n.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: o === a ? "primary" : "gray700", hoverLabel: { label: M }, icon: n.createElement(l.default, null), onPress: this._setAspectRatio(a), size: "medium" }), n.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: R }, icon: n.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), n.createElement(m.ZP, { "aria-label": B, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: T }, icon: n.createElement(d.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? n.createElement(i.Z, { style: L.zoomContainer }, n.createElement(y.Z, { "aria-label": Z, max: this._maxScale, maxIcon: n.createElement(h.default, { style: L.icon }), min: 0, minIcon: n.createElement(p.default, { style: L.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: n } = this._getMaskDimensions(),
                                { height: a, width: i } = f.Z.getCoverDimensions({ width: n, height: o }, t);
                            return { width: i * Math.pow(2, e), height: a * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: n, width: a } = f.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
                            return { width: a, height: n };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: o } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: o }) : (this.setState({ containerHeight: t, containerWidth: o }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: o } = this._getImageDimensions(),
                                { width: n } = this._getMaskDimensions(),
                                a = o / t.width,
                                i = W(n / (e.width * a));
                            this.setState({ imageScale: i });
                            const { left: r, top: s } = this._getUnscaledCropData();
                            (this._panStyles.top = s - e.top * a * Math.pow(2, i)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * a * Math.pow(2, i)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, o, n) => {
                            const a = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += o * (t - e)), (this._panStyles.top += n * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, o, n, a) => {
                            const i = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + i, 0));
                                return (this._panStyles.left += t * (r - e) + n), (this._panStyles.top += o * (r - e) + a), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                o = e.left,
                                n = e.top,
                                a = e.left + e.width - t.width,
                                i = e.top + e.height - t.height;
                            let r = !1;
                            o < 0 && ((r = !0), (this._panStyles.left += o), (this._previousLeft += o)), n < 0 && ((r = !0), (this._panStyles.top += n), (this._previousTop += n)), a > 0 && ((r = !0), (this._panStyles.left += a), (this._previousLeft += a)), i > 0 && ((r = !0), (this._panStyles.top += i), (this._previousTop += i)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: o } = this.state,
                                n = o?.transform[0]?.translate3d,
                                i = `${e}px, ${t}px, 0`;
                            n !== i &&
                                (0, a.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: i }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: o, width: n } = this._getMaskDimensions(),
                                { left: a, top: i } = this._panStyles;
                            return { top: (e - o) / 2 - i, left: (t - n) / 2 - a, width: n, height: o };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(W(t.width / 150), W(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: a } = this.state,
                        { height: r, width: s } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        d = this.state.containerWidth && this.state.containerHeight;
                    return n.createElement(i.Z, { style: L.container }, n.createElement(P, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: L.root }, d ? n.createElement(n.Fragment, null, n.createElement(g.Z, { source: { uri: t.src, width: s, height: r }, style: [L.image, a] }), n.createElement(S, { circle: e, height: l, width: c })) : null), d ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        o = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * o.top), left: Math.round(t * o.left), width: Math.round(t * o.width), height: Math.round(t * o.height) };
                }
            }
            I.defaultProps = { circle: !1, withZoomControl: !0 };
            const L = b.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = I;
        },
        941978: (e, t, o) => {
            o.d(t, { C: () => n });
            class n {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const o = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = o), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new n();
        },
        491915: (e, t, o) => {
            o.d(t, { ZP: () => f });
            o(571372);
            var n = o(202784),
                a = o(325686),
                i = o(392237),
                r = o(111677),
                s = o.n(r),
                l = o(643442),
                c = o(466445),
                d = o(731708),
                h = o(154003),
                p = o(173739);
            const u = s().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [o, i] = n.useState(t),
                    [r, s] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        a.Z,
                        { style: g.container },
                        n.createElement(h.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(l.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                o ? (e.pause(), i(!1)) : (e.play(), i(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: g.frames }, `${r}/${e.totalFrames}`),
                        n.createElement(
                            a.Z,
                            { style: g.slider },
                            n.createElement(p.Z, {
                                "aria-label": u,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), i(!1);
                                },
                                value: r,
                            }),
                        ),
                    )
                );
            }
            const g = i.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: i, onAnimationStart: r, onError: s, withControls: l } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    h = n.useRef(null),
                    [p, u] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof i && i(t), e && e.destroy();
                        }
                        const { animationLoaded: a } = d.current;
                        a ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((a) => {
                                if (a && h.current) {
                                    const i = { container: h.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = a.loadAnimation(i);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof s && s(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            u(!0), t && (l.play(), r && r());
                                        }),
                                        l.addEventListener("complete", () => {
                                            n(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, i, r, s, l]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(a.Z, null, n.createElement(a.Z, { style: [e.animationContainerStyle, v.centerAnimation] }, n.createElement("div", { ref: h, style: e.animationStyle }), l && c.current && p && n.createElement(m, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    n.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const v = i.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                a = o(111677),
                i = o.n(a),
                r = o(149170),
                s = o(40644);
            const l = i().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: o = r.default, iconSize: a = "normal", isDisabled: i, onClick: c, preventFocusShift: d, renderActionMenu: h, style: p, testID: u, withDarkBackground: m = !1 }) {
                const g = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(s.ZP, { Icon: o, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: f, iconSize: a, isDisabled: i, onPress: g, preventFocusShift: d, renderMenu: h, style: p, testID: u });
            };
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                a = o(731708),
                i = o(952428);
            const r = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: o, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return n.createElement(i.Z, { link: t, onPress: o, style: [r.root, c && r.withBottomRadius], withDarkerInteractiveBackground: d }, n.createElement(a.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => x });
            var n = o(807896),
                a = o(202784),
                i = o(194504),
                r = o(235902),
                s = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                h = o(912021),
                p = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                y = o(530732);
            const b = d().d2414d31,
                v = () => d().ce4e85ae,
                _ = d().fb9f6f39;
            class S extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: o, query: n, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const a = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: i, color: r, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: S, style: E, to: w } = this.props,
                        { location: x } = this.state,
                        P = w ? this._getMemoizedLink(w, S) : void 0,
                        Z = c ? c(w) : x?.pathname === P?.pathname,
                        k = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: h ? C.pillHoverStyle.backgroundColor : void 0 }),
                        D = g ? "medium" : Z ? "bold" : "medium";
                    return a.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: k, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(h ? [C.pillStyle] : [C.link]), ...(h && Z ? [C.pillActiveStyle] : []), d ? (h ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, E], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: h && C.flexGrow }, a.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(Z, c, g, h) }, d && C.compactText, g && t && C.focusedText, h && C.pillTextStyle, h && Z && C.pillActiveTextStyle, h && c && C.pillHoverTextStyle], weight: D }, e && a.createElement(e, { style: C.icon }), i, g || h ? null : a.createElement(l.Z, { style: Z && [C.border, { backgroundColor: s.default.theme.colors[r] }] })), o ? a.createElement(m.Z, { count: o, standalone: !0, style: [C.badge, o >= 10 && C.multiDigitBadge, o >= 20 && C.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: b, withBorder: !1 }) : n ? a.createElement(m.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (S.contextType = g.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = s.default.create((e) => ({
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
                E = S,
                w = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: h }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        m = u() && !s,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = m ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return a.createElement(E, (0, n.Z)({ viewType: i }, r, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: s && w.gap, childrenStyle: !m && w.flexGrow, key: p, style: [s ? null : w.segmentedControl, m && w.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => S });
            var n = o(202784),
                a = o(325686),
                i = o(461756),
                r = o(731708),
                s = o(58881),
                l = o(530732),
                c = o(224162),
                d = o(491915),
                h = o(392237),
                p = o(551611),
                u = o(111677),
                m = o.n(u),
                g = o(891198),
                f = o(537392),
                y = o(280278);
            const b = m().e8d93005,
                v = h.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                _ = ({ color: e, count: t }) => {
                    const o = (0, g.wl)(t, !0);
                    return n.createElement(f.ZP, null, ({ containerWidth: a }) => {
                        return n.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [v.count, ((i = a), i < h.default.theme.breakpoints.small && v.narrowCount)] }, t > 0 ? (((e) => e < h.default.theme.breakpoints.xxSmall)(a) || o.length >= 5 ? b(t) : o) : void 0);
                        var i;
                    });
                };
            class S extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: i, decoration: s } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: l }) => n.createElement(r.ZP, { color: e ? o : i, dir: l, style: [w.inner, e && "blue500" === o && w.blue500] }, n.createElement(a.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: a, iconSize: i, isActive: r, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = s.Z.generate({ backgroundColor: h.default.theme.colors[o], color: h.default.theme.colors[t], insetFocusRing: !0 }),
                                u = d && r && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: a, interactiveStyles: p, interactivityState: e, style: [h.default.absoluteFill, E[u ? "haloBackground" : o], !c && w.iconBackground, "small" === i && w.iconSmallBoundingBox, u && w.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: a, isFaded: r, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: u, transitionAnimationUrl: m } = this.props;
                            if (!h.default.theme.highContrastEnabled && !i.Z.reducedMotionEnabled && e && u) return n.createElement(d.ZP, { animation: m || p.Bf, animationContainerStyle: C[t], animationStyle: P, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const i = o && e ? e : this.props.Icon;
                                return n.createElement(i, { style: [C[t], !a && r && w.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(_, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: r, isDisabled: s, isPresentational: c, keyboardShortcut: p, link: u, preventFocusShift: m, renderMenu: g, renderWrapper: f = n.Fragment, style: y, testID: b } = this.props,
                        v = !h.default.theme.highContrastEnabled && !i.Z.reducedMotionEnabled;
                    return n.createElement(
                        a.Z,
                        { style: [w.root, y] },
                        n.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(r)
                                : n.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: u, onClick: this._handlePress, preventFocusShift: m, renderMenu: g, style: [w.triggerAreaRoot, w.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          a = r || o || n || t;
                                      return this._renderContent(a, e);
                                  }),
                        ),
                        v ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            S.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const C = h.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                E = h.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                w = h.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                P = { width: x, height: x };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => a, ZP: () => r });
            var n = o(941978);
            const a = "https://abs.twimg.com/sticky/animations/like.4.json";
            class i extends n.C {
                check(e) {
                    return super.check(e ?? a);
                }
            }
            const r = new i();
        },
        390587: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        143095: (e, t, o) => {
            o.d(t, { O: () => a });
            var n = o(202784);
            function a(e) {
                const [t, o] = n.useState(e);
                return [
                    t,
                    n.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return o(e);
                            o((e) => !e);
                        };
                        return (e.toTrue = o.bind(null, !0)), (e.toFalse = o.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
        338940: (e, t, o) => {
            o.d(t, { Z: () => a });
            o(136728);
            var n = o(688356);
            function a(e) {
                const t = [],
                    o = (0, n.Z)(e);
                for (let e = 0; e < o.length; e++) {
                    const n = o[e].screenName;
                    t.push(n);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.92962dba.js.map
