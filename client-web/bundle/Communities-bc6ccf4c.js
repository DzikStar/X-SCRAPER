"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c", "icons/IconCropSquare-js"],
    {
        738545: (e, t, o) => {
            o.d(t, { ZP: () => w });
            var i = o(202784),
                s = o(325686),
                a = o(111677),
                n = o.n(a),
                r = o(212145),
                l = o(568320),
                c = o(123588),
                h = o(731708),
                d = o(280278),
                p = o(392237),
                u = o(635998);
            const m = n().i2785009,
                g = n().c778d80b,
                f = n().d9687d23,
                y = n().ac73eb5a,
                v = n().c5a9f921,
                b = (e) => {
                    const { label: t, popover: o } = e;
                    return t ? i.createElement(s.Z, { style: x.labelBar }, i.createElement(h.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), o ? i.createElement(u.Z, { label: t, popover: o }) : null) : null;
                },
                _ = (e) => {
                    const { style: t, unit: o } = e;
                    return o ? i.createElement(h.ZP, { color: "gray700", style: [x.unitText, t], weight: "medium" }, o) : null;
                },
                S = (e) => {
                    let t,
                        o,
                        { trendValue: a } = e;
                    return void 0 === a ? null : (Math.abs(a) < 0.1 ? ((a = Math.round(1e3 * a) / 1e3), (t = g(a))) : ((a = Math.round(100 * a) / 100), (t = m(a))), (o = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? y : v({ trendValuePositivePercent: t })))(a, t)), a < 0 ? i.createElement(s.Z, { style: x.trendBar, testID: "trendLabel" }, i.createElement(r.default, { "aria-label": o, style: x.trendIconNeg }), i.createElement(h.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === a ? i.createElement(s.Z, { style: x.trendBar, testID: "trendLabel" }, i.createElement(l.default, { "aria-label": o, style: x.trendIconZero }), i.createElement(h.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : i.createElement(s.Z, { style: x.trendBar, testID: "trendLabel" }, i.createElement(c.default, { "aria-label": o, style: x.trendIconPos }), i.createElement(h.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                x = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: o, label: a, popover: n, size: r, subTextList: l, trendValue: c, unit: p, value: u } = e,
                        m = p || void 0 !== c ? x.textWithMargin : void 0,
                        g = void 0 !== c ? x.textWithMargin : void 0;
                    return i.createElement(s.Z, { style: x.dataPoint }, i.createElement(b, { label: a, popover: n }), i.createElement(s.Z, { style: x.valueBar }, t ? i.createElement(d.ZP, { count: o, size: r, style: m, weight: "bold" }, u) : i.createElement(h.ZP, { size: r, style: m, weight: "bold" }, u), i.createElement(_, { style: g, unit: p }), i.createElement(S, { trendValue: c })), l);
                };
        },
        635998: (e, t, o) => {
            o.d(t, { Z: () => g });
            var i = o(202784),
                s = o(325686),
                a = o(111677),
                n = o.n(a),
                r = o(711223),
                l = o(731708),
                c = o(154003),
                h = o(157130),
                d = o(392237);
            const p = n().affbaf62,
                u = n().c388d026,
                m = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: o } = e;
                    return i.createElement(s.Z, null, i.createElement(h.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => i.createElement(s.Z, { role: "dialog", style: m.popover }, i.createElement(s.Z, { style: m.popoverTitle }, i.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), i.createElement(s.Z, { style: m.popoverText }, o), i.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, u)), withArrow: !0 }, i.createElement(s.Z, { role: "button" }, i.createElement(r.default, { "aria-label": p, style: m.iconInformation }))));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                s = o(154003),
                a = o(392237);
            class n extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: a, href: n, icon: l, label: c, onPress: h, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return i.createElement(s.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: n, onPress: h, renderMenu: d, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: u }, c);
                }
            }
            n.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = n;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                s = o(325686),
                a = o(235902),
                n = o(885015),
                r = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return o ? i.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(s.Z, { style: c.gapColumn }, i.createElement(s.Z, { style: [c.gap, h] })), i.createElement(s.Z, { style: c.gapText }, o), i.createElement(s.Z, { style: c.gapColumn }, i.createElement(s.Z, { style: [c.gap, h] }))) : i.createElement(s.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, h] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var i = o(807896),
                s = o(202784),
                a = o(325686),
                n = o(392237);
            class r extends s.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...n } = this.props,
                        r = s.Children.map(e, (e) => e && s.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return s.createElement(a.Z, (0, i.Z)({ style: [t, l.root, o && l.withGutter] }, n), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => z });
            var i = o(202784),
                s = o(928316),
                a = o(325686),
                n = o(111677),
                r = o.n(n),
                l = o(553007),
                c = o(723951),
                h = o(390587),
                d = o(158910),
                p = o(614991),
                u = o(323265),
                m = o(154003),
                g = o(992942),
                f = o(782578),
                y = o(173739),
                v = o(392237),
                b = o(393058);
            const _ = v.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: o }) => i.createElement(a.Z, { pointerEvents: "none", style: [_.mask, { width: o, height: t }, e && _.circle] });
            var x = o(807896),
                w = o(452661),
                C = o(933895);
            class E extends i.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: o, onPinchMove: i, onWheel: s } = this.props;
                            if (e) {
                                (o || t || i) && (this._removeTouchMoveToScrollListener = (0, C.O)(e, this._preventDefaultEvent, !1)), s && (this._removeScrollToScaleListener = (0, C.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: o, onPinchMove: i } = this.props,
                                s = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (i) {
                                    const e = ((a = s[0]), (n = s[1]), Math.sqrt(Math.pow(a.pageY - n.pageY, 2) + Math.pow(a.pageX - n.pageX, 2))),
                                        { pageX: t, pageY: o } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(s[0], s[1]),
                                        r = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? o - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: h, y: d } = this._centerPosition;
                                    i(c, h - t, d - o, r, l);
                                }
                            } else o && o(t.dx, t.dy);
                            var a, n;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: o, deltaX: i, deltaY: s } = e,
                                { x: a, y: n } = this._centerPosition,
                                r = a - t,
                                l = n - o;
                            this.props.onWheel && this.props.onWheel(i, s, r, l);
                        }),
                        (this._panResponder = w.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: s, onWheel: n, ...r } = this.props;
                    return i.createElement(a.Z, (0, x.Z)({}, r, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const P = E,
                Z = r().d85bc1b8,
                M = r().f596ace8,
                R = r().df031fca,
                k = r().b40332c6,
                D = r().e547b368,
                T = r().f7571204,
                B = r().e6e16812,
                W =
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
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !b.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: o } = this.state,
                                s = e.width / e.height,
                                n = this._shouldShowZoomControl();
                            return t || n ? i.createElement(a.Z, { style: I.controlsContainer }, t ? i.createElement(a.Z, { style: I.ratioContainer }, i.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: o === s ? "primary" : "gray700", hoverLabel: { label: D }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(s), size: "medium" }), i.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: B }, icon: i.createElement(h.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, n ? i.createElement(a.Z, { style: I.zoomContainer }, i.createElement(y.Z, { "aria-label": Z, max: this._maxScale, maxIcon: i.createElement(d.default, { style: I.icon }), min: 0, minIcon: i.createElement(p.default, { style: I.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: i } = this._getMaskDimensions(),
                                { height: s, width: a } = f.Z.getCoverDimensions({ width: i, height: o }, t);
                            return { width: a * Math.pow(2, e), height: s * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: i, width: s } = f.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
                            return { width: s, height: i };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: o } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: o }) : (this.setState({ containerHeight: t, containerWidth: o }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: o } = this._getImageDimensions(),
                                { width: i } = this._getMaskDimensions(),
                                s = o / t.width,
                                a = W(i / (e.width * s));
                            this.setState({ imageScale: a });
                            const { left: n, top: r } = this._getUnscaledCropData();
                            (this._panStyles.top = r - e.top * s * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = n - e.left * s * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, o, i) => {
                            const s = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + s, 0));
                                return (this._panStyles.left += o * (t - e)), (this._panStyles.top += i * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, o, i, s) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const n = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (n - e) + i), (this._panStyles.top += o * (n - e) + s), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: n };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                o = e.left,
                                i = e.top,
                                s = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let n = !1;
                            o < 0 && ((n = !0), (this._panStyles.left += o), (this._previousLeft += o)), i < 0 && ((n = !0), (this._panStyles.top += i), (this._previousTop += i)), s > 0 && ((n = !0), (this._panStyles.left += s), (this._previousLeft += s)), a > 0 && ((n = !0), (this._panStyles.top += a), (this._previousTop += a)), n && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: o } = this.state,
                                i = o?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            i !== a &&
                                (0, s.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: o, width: i } = this._getMaskDimensions(),
                                { left: s, top: a } = this._panStyles;
                            return { top: (e - o) / 2 - a, left: (t - i) / 2 - s, width: i, height: o };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(W(t.width / 150), W(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: s } = this.state,
                        { height: n, width: r } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        h = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(a.Z, { style: I.container }, i.createElement(P, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: I.root }, h ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: r, height: n }, style: [I.image, s] }), i.createElement(S, { circle: e, height: l, width: c })) : null), h ? this._renderControls() : null);
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
            L.defaultProps = { circle: !1, withZoomControl: !0 };
            const I = v.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = L;
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => r });
            var i = o(202784),
                s = o(731708),
                a = o(952428);
            const n = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                r = function ({ align: e, link: t, onPress: o, text: r, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: h }) {
                    return i.createElement(a.Z, { link: t, onPress: o, style: [n.root, c && n.withBottomRadius], withDarkerInteractiveBackground: h }, i.createElement(s.ZP, { align: e, color: "primary", weight: l }, r));
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => E });
            var i = o(807896),
                s = o(202784),
                a = o(194504),
                n = o(235902),
                r = o(392237),
                l = o(325686),
                c = o(111677),
                h = o.n(c),
                d = o(912021),
                p = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                y = o(530732);
            const v = h().d2414d31,
                b = () => h().ce4e85ae,
                _ = h().fb9f6f39;
            class S extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: o, query: i, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const s = r.default.theme.colors.text,
                                a = r.default.theme.colors.gray700;
                            return o || i ? (e || t ? s : a) : e ? s : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: a, color: n, isActive: c, isCompact: h, isPillLink: d, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: S, style: w, to: C } = this.props,
                        { location: E } = this.state,
                        P = C ? this._getMemoizedLink(C, S) : void 0,
                        Z = c ? c(C) : E?.pathname === P?.pathname,
                        M = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: d ? x.pillHoverStyle.backgroundColor : void 0 }),
                        R = g ? "medium" : Z ? "bold" : "medium";
                    return s.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: M, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(d ? [x.pillStyle] : [x.link]), ...(d && Z ? [x.pillActiveStyle] : []), h ? (d ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => s.createElement(l.Z, { style: d && x.flexGrow }, s.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(Z, c, g, d) }, h && x.compactText, g && t && x.focusedText, d && x.pillTextStyle, d && Z && x.pillActiveTextStyle, d && c && x.pillHoverTextStyle], weight: R }, e && s.createElement(e, { style: x.icon }), a, g || d ? null : s.createElement(l.Z, { style: Z && [x.border, { backgroundColor: r.default.theme.colors[n] }] })), o ? s.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: v, withBorder: !1 }) : i ? s.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (S.contextType = g.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = r.default.create((e) => ({
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
                w = S,
                C = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: r, isRoundedRect: l, links: c, style: h, visibleItemIndex: d }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !r,
                        g = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const h = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return s.createElement(w, (0, i.Z)({ viewType: a }, n, { isCompact: o, isPillLink: r, isRoundedRect: l, isWebRedesign: m, style: h }), t);
                                }),
                            [e, o, r, l, m, c],
                        );
                    return s.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: r && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [r ? null : C.segmentedControl, m && C.leftAligned, h], visibleItemIndex: d }, g);
                };
        },
        390587: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                s = o(890601),
                a = o(783427),
                n = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        143095: (e, t, o) => {
            o.d(t, { O: () => s });
            var i = o(202784);
            function s(e) {
                const [t, o] = i.useState(e);
                return [
                    t,
                    i.useMemo(() => {
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
            o.d(t, { Z: () => s });
            o(136728);
            var i = o(688356);
            function s(e) {
                const t = [],
                    o = (0, i.Z)(e);
                for (let e = 0; e < o.length; e++) {
                    const i = o[e].screenName;
                    t.push(i);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.894c585a.js.map
