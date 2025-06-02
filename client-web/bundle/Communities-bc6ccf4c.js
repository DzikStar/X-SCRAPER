"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c", "icons/IconFollowingStroke-js", "icons/IconHashStroke-js", "icons/IconPinStrokeOff-js", "icons/IconSearchPlusStroke-js", "icons/IconSound-js", "icons/IconStarStroke-js"],
    {
        738545: (e, t, o) => {
            o.d(t, { ZP: () => w });
            var i = o(202784),
                a = o(325686),
                s = o(111677),
                r = o.n(s),
                n = o(212145),
                l = o(568320),
                c = o(123588),
                d = o(731708),
                h = o(280278),
                p = o(392237),
                u = o(635998);
            const m = r().i2785009,
                g = r().c778d80b,
                f = r().d9687d23,
                b = r().ac73eb5a,
                y = r().c5a9f921,
                v = (e) => {
                    const { label: t, popover: o } = e;
                    return t ? i.createElement(a.Z, { style: S.labelBar }, i.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), o ? i.createElement(u.Z, { label: t, popover: o }) : null) : null;
                },
                _ = (e) => {
                    const { style: t, unit: o } = e;
                    return o ? i.createElement(d.ZP, { color: "gray700", style: [S.unitText, t], weight: "medium" }, o) : null;
                },
                C = (e) => {
                    let t,
                        o,
                        { trendValue: s } = e;
                    return void 0 === s ? null : (Math.abs(s) < 0.1 ? ((s = Math.round(1e3 * s) / 1e3), (t = g(s))) : ((s = Math.round(100 * s) / 100), (t = m(s))), (o = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? b : y({ trendValuePositivePercent: t })))(s, t)), s < 0 ? i.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, i.createElement(n.default, { "aria-label": o, style: S.trendIconNeg }), i.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === s ? i.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, i.createElement(l.default, { "aria-label": o, style: S.trendIconZero }), i.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : i.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, i.createElement(c.default, { "aria-label": o, style: S.trendIconPos }), i.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                S = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: o, label: s, popover: r, size: n, subTextList: l, trendValue: c, unit: p, value: u } = e,
                        m = p || void 0 !== c ? S.textWithMargin : void 0,
                        g = void 0 !== c ? S.textWithMargin : void 0;
                    return i.createElement(a.Z, { style: S.dataPoint }, i.createElement(v, { label: s, popover: r }), i.createElement(a.Z, { style: S.valueBar }, t ? i.createElement(h.ZP, { count: o, size: n, style: m, weight: "bold" }, u) : i.createElement(d.ZP, { size: n, style: m, weight: "bold" }, u), i.createElement(_, { style: g, unit: p }), i.createElement(C, { trendValue: c })), l);
                };
        },
        635998: (e, t, o) => {
            o.d(t, { Z: () => g });
            var i = o(202784),
                a = o(325686),
                s = o(111677),
                r = o.n(s),
                n = o(711223),
                l = o(731708),
                c = o(154003),
                d = o(157130),
                h = o(392237);
            const p = r().affbaf62,
                u = r().c388d026,
                m = h.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: o } = e;
                    return i.createElement(a.Z, null, i.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => i.createElement(a.Z, { role: "dialog", style: m.popover }, i.createElement(a.Z, { style: m.popoverTitle }, i.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), i.createElement(a.Z, { style: m.popoverText }, o), i.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, u)), withArrow: !0 }, i.createElement(a.Z, { role: "button" }, i.createElement(n.default, { "aria-label": p, style: m.iconInformation }))));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                a = o(154003),
                s = o(392237);
            class r extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: s, href: r, icon: l, label: c, onPress: d, renderMenu: h, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return i.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: s, icon: l, link: r, onPress: d, renderMenu: h, size: "xLarge", style: [n.root, !c && n.iconOnly, p], testID: u }, c);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = s.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                a = o(325686),
                s = o(235902),
                r = o(885015),
                n = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return o ? i.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] })), i.createElement(a.Z, { style: c.gapText }, o), i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] }))) : i.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var i = o(807896),
                a = o(202784),
                s = o(325686),
                r = o(392237);
            class n extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...r } = this.props,
                        n = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return a.createElement(s.Z, (0, i.Z)({ style: [t, l.root, o && l.withGutter] }, r), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = n;
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => W });
            var i = o(202784),
                a = o(928316),
                s = o(325686),
                r = o(111677),
                n = o.n(r),
                l = o(553007),
                c = o(723951),
                d = o(390587),
                h = o(158910),
                p = o(614991),
                u = o(323265),
                m = o(154003),
                g = o(992942),
                f = o(782578),
                b = o(173739),
                y = o(392237),
                v = o(393058);
            const _ = y.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: o }) => i.createElement(s.Z, { pointerEvents: "none", style: [_.mask, { width: o, height: t }, e && _.circle] });
            var S = o(807896),
                w = o(151624),
                x = o(933895);
            class E extends i.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: o, onPinchMove: i, onWheel: a } = this.props;
                            if (e) {
                                (o || t || i) && (this._removeTouchMoveToScrollListener = (0, x.O)(e, this._preventDefaultEvent, !1)), a && (this._removeScrollToScaleListener = (0, x.Y)(e, this._preventDefaultEvent, !1));
                                const s = e.getBoundingClientRect();
                                this._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: o, onPinchMove: i } = this.props,
                                a = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (i) {
                                    const e = ((s = a[0]), (r = a[1]), Math.sqrt(Math.pow(s.pageY - r.pageY, 2) + Math.pow(s.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: o } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(a[0], a[1]),
                                        n = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? o - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: d, y: h } = this._centerPosition;
                                    i(c, d - t, h - o, n, l);
                                }
                            } else o && o(t.dx, t.dy);
                            var s, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: o, deltaX: i, deltaY: a } = e,
                                { x: s, y: r } = this._centerPosition,
                                n = s - t,
                                l = r - o;
                            this.props.onWheel && this.props.onWheel(i, a, n, l);
                        }),
                        (this._panResponder = w.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: a, onWheel: r, ...n } = this.props;
                    return i.createElement(s.Z, (0, S.Z)({}, n, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const Z = E,
                P = n().d85bc1b8,
                k = n().f596ace8,
                R = n().df031fca,
                D = n().b40332c6,
                M = n().e547b368,
                I = n().f7571204,
                T = n().e6e16812,
                z =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class B extends i.Component {
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
                            return t || r ? i.createElement(s.Z, { style: L.controlsContainer }, t ? i.createElement(s.Z, { style: L.ratioContainer }, i.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: o === a ? "primary" : "gray700", hoverLabel: { label: M }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(a), size: "medium" }), i.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: I }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: T }, icon: i.createElement(d.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? i.createElement(s.Z, { style: L.zoomContainer }, i.createElement(b.Z, { "aria-label": P, max: this._maxScale, maxIcon: i.createElement(h.default, { style: L.icon }), min: 0, minIcon: i.createElement(p.default, { style: L.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: i } = this._getMaskDimensions(),
                                { height: a, width: s } = f.Z.getCoverDimensions({ width: i, height: o }, t);
                            return { width: s * Math.pow(2, e), height: a * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: i, width: a } = f.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
                            return { width: a, height: i };
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
                                a = o / t.width,
                                s = z(i / (e.width * a));
                            this.setState({ imageScale: s });
                            const { left: r, top: n } = this._getUnscaledCropData();
                            (this._panStyles.top = n - e.top * a * Math.pow(2, s)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * a * Math.pow(2, s)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, o, i) => {
                            const a = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += o * (t - e)), (this._panStyles.top += i * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, o, i, a) => {
                            const s = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + s, 0));
                                return (this._panStyles.left += t * (r - e) + i), (this._panStyles.top += o * (r - e) + a), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                o = e.left,
                                i = e.top,
                                a = e.left + e.width - t.width,
                                s = e.top + e.height - t.height;
                            let r = !1;
                            o < 0 && ((r = !0), (this._panStyles.left += o), (this._previousLeft += o)), i < 0 && ((r = !0), (this._panStyles.top += i), (this._previousTop += i)), a > 0 && ((r = !0), (this._panStyles.left += a), (this._previousLeft += a)), s > 0 && ((r = !0), (this._panStyles.top += s), (this._previousTop += s)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: o } = this.state,
                                i = o?.transform[0]?.translate3d,
                                s = `${e}px, ${t}px, 0`;
                            i !== s &&
                                (0, a.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: s }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: o, width: i } = this._getMaskDimensions(),
                                { left: a, top: s } = this._panStyles;
                            return { top: (e - o) / 2 - s, left: (t - i) / 2 - a, width: i, height: o };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(z(t.width / 150), z(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: a } = this.state,
                        { height: r, width: n } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        d = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(s.Z, { style: L.container }, i.createElement(Z, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: L.root }, d ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: n, height: r }, style: [L.image, a] }), i.createElement(C, { circle: e, height: l, width: c })) : null), d ? this._renderControls() : null);
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
            B.defaultProps = { circle: !1, withZoomControl: !0 };
            const L = y.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                W = B;
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => n });
            var i = o(202784),
                a = o(731708),
                s = o(952428);
            const r = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                n = function ({ align: e, link: t, onPress: o, text: n, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return i.createElement(s.Z, { link: t, onPress: o, style: [r.root, c && r.withBottomRadius], withDarkerInteractiveBackground: d }, i.createElement(a.ZP, { align: e, color: "primary", weight: l }, n));
                };
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var i = o(202784),
                a = o(325686),
                s = o(913973),
                r = o(731708),
                n = o(950822),
                l = o(466792),
                c = o(58881),
                d = o(530732),
                h = o(352924),
                p = o(392237);
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: o } = this.props;
                            o && !t && o(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: h, helpText: u, label: g, name: f, testID: b } = this.props,
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        v = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = o ? y : v;
                    return i.createElement(l.Z, { disabled: h }, (l) => i.createElement(a.Z, { role: "label", style: [m.root, !h && m.interactive], testID: b }, i.createElement(a.Z, { style: m.topContainer }, i.createElement(r.ZP, { id: this.labelId }, g), i.createElement(a.Z, { style: m.radioContainer }, i.createElement(d.Z, { interactiveStyles: _, interactivityState: l, style: m.radioBackground }, i.createElement(a.Z, { style: [m.circle, o && m.circleActive, h && m.circleDisabled, o && h && m.circleCheckedAndDisabled] }, o ? i.createElement(s.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: h, name: f, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? i.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                f = "radioGroup";
            let b = 1;
            class y extends i.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: o } = this.props;
                            o(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (o) => {
                            (this._radioRefs[e] = o), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${b}_LABEL`),
                        (b += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: s, name: n, options: l, value: c } = this.props;
                    return i.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: o && v.disabled, testID: `${f}${n}` },
                        s ? i.createElement(a.Z, { id: this._labelId, role: "label", style: v.header }, i.createElement(r.ZP, { style: v.label, weight: "bold" }, s), t ? i.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => i.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const v = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, o) => {
            o.d(t, { Z: () => n });
            var i = o(202784),
                a = o(325686),
                s = o(449479),
                r = o(392237);
            const n = (e) => i.createElement(a.Z, { style: l.root }, i.createElement(s.Z, e)),
                l = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => E });
            var i = o(807896),
                a = o(202784),
                s = o(194504),
                r = o(235902),
                n = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                h = o(912021),
                p = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                _ = d().fb9f6f39;
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: o, query: i, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const a = n.default.theme.colors.text,
                                s = n.default.theme.colors.gray700;
                            return o || i ? (e || t ? a : s) : e ? a : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: s, color: r, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: C, style: w, to: x } = this.props,
                        { location: E } = this.state,
                        Z = x ? this._getMemoizedLink(x, C) : void 0,
                        P = c ? c(x) : E?.pathname === Z?.pathname,
                        k = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: h ? S.pillHoverStyle.backgroundColor : void 0 }),
                        R = g ? "medium" : P ? "bold" : "medium";
                    return a.createElement(b.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: k, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(h ? [S.pillStyle] : [S.link]), ...(h && P ? [S.pillActiveStyle] : []), d ? (h ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: h && S.flexGrow }, a.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(P, c, g, h) }, d && S.compactText, g && t && S.focusedText, h && S.pillTextStyle, h && P && S.pillActiveTextStyle, h && c && S.pillHoverTextStyle], weight: R }, e && a.createElement(e, { style: S.icon }), s, g || h ? null : a.createElement(l.Z, { style: P && [S.border, { backgroundColor: n.default.theme.colors[r] }] })), o ? a.createElement(m.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: y, withBorder: !1 }) : i ? a.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = n.default.create((e) => ({
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
                w = C,
                x = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: h }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        m = u() && !n,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...r }, c) => {
                                    const d = m ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return a.createElement(w, (0, i.Z)({ viewType: s }, r, { isCompact: o, isPillLink: n, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, n, l, m, c],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: n && x.gap, childrenStyle: !m && x.flexGrow, key: p, style: [n ? null : x.segmentedControl, m && x.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
        705865: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.75-7.22l-4.141 6.21L16.1 9.7l1.2-1.6 1.954 1.47 2.969-4.46 1.664 1.11z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        721569: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        963879: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M17.896 11.553L20.12 16H13v5l-1 2-1-2v-3.752L14.248 14h2.636l-.776-1.553 1.789-.895zm3.813-7.843l-17.999 18-.707-.707-.707-.707L6.592 16H3.88L7 9.76V4.5C7 3.121 8.122 2 9.5 2h5C15.878 2 17 3.121 17 4.5v1.092l3.296-3.296.707.707.707.707zm-6.71 3.882V4.5c0-.275-.224-.5-.5-.5h-5c-.276 0-.5.225-.5.5v5.732L7.115 14h1.476l6.408-6.408z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        158910: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm8-1V7.5h2V10h2.5v2H12v2.5h-2V12H7.5v-2H10z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        926628: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        106186: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                a = o(890601),
                s = o(783427),
                r = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        143095: (e, t, o) => {
            o.d(t, { O: () => a });
            var i = o(202784);
            function a(e) {
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
            o.d(t, { Z: () => a });
            o(136728);
            var i = o(688356);
            function a(e) {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.21583f8a.js.map
