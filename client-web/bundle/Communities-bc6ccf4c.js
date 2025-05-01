"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c"],
    {
        738545: (e, t, o) => {
            o.d(t, { ZP: () => x });
            var s = o(202784),
                i = o(325686),
                a = o(674132),
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
                _ = n().c5a9f921,
                b = (e) => {
                    const { label: t, popover: o } = e;
                    return t ? s.createElement(i.Z, { style: w.labelBar }, s.createElement(h.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), o ? s.createElement(u.Z, { label: t, popover: o }) : null) : null;
                },
                v = (e) => {
                    const { style: t, unit: o } = e;
                    return o ? s.createElement(h.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, o) : null;
                },
                S = (e) => {
                    let t,
                        o,
                        { trendValue: a } = e;
                    return void 0 === a ? null : (Math.abs(a) < 0.1 ? ((a = Math.round(1e3 * a) / 1e3), (t = g(a))) : ((a = Math.round(100 * a) / 100), (t = m(a))), (o = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? y : _({ trendValuePositivePercent: t })))(a, t)), a < 0 ? s.createElement(i.Z, { style: w.trendBar, testID: "trendLabel" }, s.createElement(r.default, { "aria-label": o, style: w.trendIconNeg }), s.createElement(h.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === a ? s.createElement(i.Z, { style: w.trendBar, testID: "trendLabel" }, s.createElement(l.default, { "aria-label": o, style: w.trendIconZero }), s.createElement(h.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : s.createElement(i.Z, { style: w.trendBar, testID: "trendLabel" }, s.createElement(c.default, { "aria-label": o, style: w.trendIconPos }), s.createElement(h.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                x = (e) => {
                    const { animated: t, count: o, label: a, popover: n, size: r, subTextList: l, trendValue: c, unit: p, value: u } = e,
                        m = p || void 0 !== c ? w.textWithMargin : void 0,
                        g = void 0 !== c ? w.textWithMargin : void 0;
                    return s.createElement(i.Z, { style: w.dataPoint }, s.createElement(b, { label: a, popover: n }), s.createElement(i.Z, { style: w.valueBar }, t ? s.createElement(d.ZP, { count: o, size: r, style: m, weight: "bold" }, u) : s.createElement(h.ZP, { size: r, style: m, weight: "bold" }, u), s.createElement(v, { style: g, unit: p }), s.createElement(S, { trendValue: c })), l);
                };
        },
        635998: (e, t, o) => {
            o.d(t, { Z: () => g });
            var s = o(202784),
                i = o(325686),
                a = o(674132),
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
                    return s.createElement(i.Z, null, s.createElement(h.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => s.createElement(i.Z, { role: "dialog", style: m.popover }, s.createElement(i.Z, { style: m.popoverTitle }, s.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), s.createElement(i.Z, { style: m.popoverText }, o), s.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, u)), withArrow: !0 }, s.createElement(i.Z, { role: "button" }, s.createElement(r.default, { "aria-label": p, style: m.iconInformation }))));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                i = o(154003),
                a = o(392237);
            class n extends s.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: a, href: n, icon: l, label: c, onPress: h, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return s.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: n, onPress: h, renderMenu: d, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: u }, c);
                }
            }
            n.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = n;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                i = o(325686),
                a = o(235902),
                n = o(885015),
                r = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return o ? s.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, s.createElement(i.Z, { style: c.gapColumn }, s.createElement(i.Z, { style: [c.gap, h] })), s.createElement(i.Z, { style: c.gapText }, o), s.createElement(i.Z, { style: c.gapColumn }, s.createElement(i.Z, { style: [c.gap, h] }))) : s.createElement(i.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, h] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(392237);
            class r extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...n } = this.props,
                        r = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return i.createElement(a.Z, (0, s.Z)({ style: [t, l.root, o && l.withGutter] }, n), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => z });
            var s = o(202784),
                i = o(928316),
                a = o(325686),
                n = o(674132),
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
                _ = o(392237),
                b = o(393058);
            const v = _.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: o }) => s.createElement(a.Z, { pointerEvents: "none", style: [v.mask, { width: o, height: t }, e && v.circle] });
            var w = o(807896),
                x = o(151624),
                C = o(933895);
            class P extends s.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: o, onPinchMove: s, onWheel: i } = this.props;
                            if (e) {
                                (o || t || s) && (this._removeTouchMoveToScrollListener = (0, C.O)(e, this._preventDefaultEvent, !1)), i && (this._removeScrollToScaleListener = (0, C.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: o, onPinchMove: s } = this.props,
                                i = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (s) {
                                    const e = ((a = i[0]), (n = i[1]), Math.sqrt(Math.pow(a.pageY - n.pageY, 2) + Math.pow(a.pageX - n.pageX, 2))),
                                        { pageX: t, pageY: o } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(i[0], i[1]),
                                        r = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? o - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: h, y: d } = this._centerPosition;
                                    s(c, h - t, d - o, r, l);
                                }
                            } else o && o(t.dx, t.dy);
                            var a, n;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: o, deltaX: s, deltaY: i } = e,
                                { x: a, y: n } = this._centerPosition,
                                r = a - t,
                                l = n - o;
                            this.props.onWheel && this.props.onWheel(s, i, r, l);
                        }),
                        (this._panResponder = x.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: i, onWheel: n, ...r } = this.props;
                    return s.createElement(a.Z, (0, w.Z)({}, r, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const E = P,
                Z = r().d85bc1b8,
                R = r().f596ace8,
                M = r().df031fca,
                k = r().b40332c6,
                D = r().e547b368,
                T = r().f7571204,
                B = r().e6e16812,
                W =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class L extends s.Component {
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
                                i = e.width / e.height,
                                n = this._shouldShowZoomControl();
                            return t || n ? s.createElement(a.Z, { style: I.controlsContainer }, t ? s.createElement(a.Z, { style: I.ratioContainer }, s.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: o === i ? "primary" : "gray700", hoverLabel: { label: D }, icon: s.createElement(l.default, null), onPress: this._setAspectRatio(i), size: "medium" }), s.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: s.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), s.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: B }, icon: s.createElement(h.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, n ? s.createElement(a.Z, { style: I.zoomContainer }, s.createElement(y.Z, { "aria-label": Z, max: this._maxScale, maxIcon: s.createElement(d.default, { style: I.icon }), min: 0, minIcon: s.createElement(p.default, { style: I.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: s } = this._getMaskDimensions(),
                                { height: i, width: a } = f.Z.getCoverDimensions({ width: s, height: o }, t);
                            return { width: a * Math.pow(2, e), height: i * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: s, width: i } = f.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
                            return { width: i, height: s };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: o } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: o }) : (this.setState({ containerHeight: t, containerWidth: o }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: o } = this._getImageDimensions(),
                                { width: s } = this._getMaskDimensions(),
                                i = o / t.width,
                                a = W(s / (e.width * i));
                            this.setState({ imageScale: a });
                            const { left: n, top: r } = this._getUnscaledCropData();
                            (this._panStyles.top = r - e.top * i * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = n - e.left * i * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, o, s) => {
                            const i = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + i, 0));
                                return (this._panStyles.left += o * (t - e)), (this._panStyles.top += s * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, o, s, i) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const n = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (n - e) + s), (this._panStyles.top += o * (n - e) + i), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: n };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                o = e.left,
                                s = e.top,
                                i = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let n = !1;
                            o < 0 && ((n = !0), (this._panStyles.left += o), (this._previousLeft += o)), s < 0 && ((n = !0), (this._panStyles.top += s), (this._previousTop += s)), i > 0 && ((n = !0), (this._panStyles.left += i), (this._previousLeft += i)), a > 0 && ((n = !0), (this._panStyles.top += a), (this._previousTop += a)), n && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: o } = this.state,
                                s = o?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            s !== a &&
                                (0, i.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: o, width: s } = this._getMaskDimensions(),
                                { left: i, top: a } = this._panStyles;
                            return { top: (e - o) / 2 - a, left: (t - s) / 2 - i, width: s, height: o };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(W(t.width / 150), W(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: i } = this.state,
                        { height: n, width: r } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        h = this.state.containerWidth && this.state.containerHeight;
                    return s.createElement(a.Z, { style: I.container }, s.createElement(E, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: I.root }, h ? s.createElement(s.Fragment, null, s.createElement(g.Z, { source: { uri: t.src, width: r, height: n }, style: [I.image, i] }), s.createElement(S, { circle: e, height: l, width: c })) : null), h ? this._renderControls() : null);
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
            const I = _.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = L;
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => r });
            var s = o(202784),
                i = o(731708),
                a = o(952428);
            const n = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                r = function ({ align: e, link: t, onPress: o, text: r, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: h }) {
                    return s.createElement(a.Z, { link: t, onPress: o, style: [n.root, c && n.withBottomRadius], withDarkerInteractiveBackground: h }, s.createElement(i.ZP, { align: e, color: "primary", weight: l }, r));
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => P });
            var s = o(807896),
                i = o(202784),
                a = o(194504),
                n = o(235902),
                r = o(392237),
                l = o(325686),
                c = o(674132),
                h = o.n(c),
                d = o(912021),
                p = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                y = o(530732);
            const _ = h().d2414d31,
                b = () => h().ce4e85ae,
                v = h().fb9f6f39;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: o, query: s, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: s, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, s) => {
                            const i = r.default.theme.colors.text,
                                a = r.default.theme.colors.gray700;
                            return o || s ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: a, color: n, isActive: c, isCompact: h, isPillLink: d, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: S, style: x, to: C } = this.props,
                        { location: P } = this.state,
                        E = C ? this._getMemoizedLink(C, S) : void 0,
                        Z = c ? c(C) : P?.pathname === E?.pathname,
                        R = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        M = g ? "medium" : Z ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: R, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [d ? w.pill : w.link, d && Z ? w.active : null, h ? (d ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, x], withoutInteractiveStyles: g || d }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: d && w.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(Z, c, g, d) }, h && w.compactText, g && t && w.focusedText], weight: M }, e && i.createElement(e, { style: w.icon }), a, g || d ? null : i.createElement(l.Z, { style: Z && [w.border, { backgroundColor: r.default.theme.colors[n] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: _, withBorder: !1 }) : s ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (S.contextType = g.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = r.default.create((e) => ({
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
                x = S,
                C = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: r, isRoundedRect: l, links: c, style: h, visibleItemIndex: d }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !r,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const h = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, s.Z)({ viewType: a }, n, { isCompact: o, isPillLink: r, isRoundedRect: l, isWebRedesign: m, style: h }), t);
                                }),
                            [e, o, r, l, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: r && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [r ? null : C.segmentedControl, m && C.leftAligned, h], visibleItemIndex: d }, g);
                };
        },
        143095: (e, t, o) => {
            o.d(t, { O: () => i });
            var s = o(202784);
            function i(e) {
                const [t, o] = s.useState(e);
                return [
                    t,
                    s.useMemo(() => {
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
            o.d(t, { Z: () => i });
            o(136728);
            var s = o(688356);
            function i(e) {
                const t = [],
                    o = (0, s.Z)(e);
                for (let e = 0; e < o.length; e++) {
                    const s = o[e].screenName;
                    t.push(s);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.ee9fd9ea.js.map
