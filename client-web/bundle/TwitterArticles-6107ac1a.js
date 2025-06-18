"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "icons/IconFolderArrowLeft-js", "icons/IconSearchPlusStroke-js"],
    {
        37475: (e, t, i) => {
            i.d(t, { d: () => s });
            const s = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        661810: (e, t, i) => {
            i.d(t, { Z: () => r });
            var s = i(202784),
                o = i(325686),
                a = i(392237);
            function r({ spacing: e, style: t }) {
                return s.createElement(o.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, i) => {
            i.d(t, { Z: () => l });
            var s = i(202784),
                o = i(154003),
                a = i(392237);
            class r extends s.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: i, disabled: a, href: r, icon: l, label: h, onPress: c, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, i);
                    return s.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: r, onPress: c, renderMenu: d, size: "xLarge", style: [n.root, !h && n.iconOnly, p], testID: u }, h);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => l });
            var s = i(202784),
                o = i(325686),
                a = i(235902),
                r = i(885015),
                n = i(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? h[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return i ? s.createElement(r.Z, { style: !t && h.root, withGutter: !0 }, s.createElement(o.Z, { style: h.gapColumn }, s.createElement(o.Z, { style: [h.gap, c] })), s.createElement(o.Z, { style: h.gapText }, i), s.createElement(o.Z, { style: h.gapColumn }, s.createElement(o.Z, { style: [h.gap, c] }))) : s.createElement(o.Z, { style: [!t && h.root, l() && h.rootRedesign, h.gap, c] });
            }
            const h = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => h });
            var s = i(807896),
                o = i(202784),
                a = i(325686),
                r = i(392237);
            class n extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...r } = this.props,
                        n = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, i && l.withGutterColumn] }));
                    return o.createElement(a.Z, (0, s.Z)({ style: [t, l.root, i && l.withGutter] }, r), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                h = n;
        },
        548485: (e, t, i) => {
            i.d(t, { Z: () => H });
            var s = i(202784),
                o = i(928316),
                a = i(325686),
                r = i(111677),
                n = i.n(r),
                l = i(553007),
                h = i(723951),
                c = i(390587),
                d = i(158910),
                p = i(614991),
                u = i(323265),
                m = i(154003),
                g = i(992942),
                _ = i(782578),
                v = i(173739),
                f = i(392237),
                b = i(401339);
            const y = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: i }) => s.createElement(a.Z, { pointerEvents: "none", style: [y.mask, { width: i, height: t }, e && y.circle] });
            var w = i(807896),
                S = i(452661),
                E = i(933895);
            class P extends s.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: i, onPinchMove: s, onWheel: o } = this.props;
                            if (e) {
                                (i || t || s) && (this._removeTouchMoveToScrollListener = (0, E.O)(e, this._preventDefaultEvent, !1)), o && (this._removeScrollToScaleListener = (0, E.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: i, onPinchMove: s } = this.props,
                                o = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (s) {
                                    const e = ((a = o[0]), (r = o[1]), Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: i } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(o[0], o[1]),
                                        n = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? i - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = i), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    s(h, c - t, d - i, n, l);
                                }
                            } else i && i(t.dx, t.dy);
                            var a, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: i, deltaX: s, deltaY: o } = e,
                                { x: a, y: r } = this._centerPosition,
                                n = a - t,
                                l = r - i;
                            this.props.onWheel && this.props.onWheel(s, o, n, l);
                        }),
                        (this._panResponder = S.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: i, onPinchMove: o, onWheel: r, ...n } = this.props;
                    return s.createElement(a.Z, (0, w.Z)({}, n, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const Z = P,
                x = n().d85bc1b8,
                M = n().f596ace8,
                D = n().df031fca,
                R = n().b40332c6,
                k = n().e547b368,
                T = n().f7571204,
                I = n().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class W extends s.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !b.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: i } = this.state,
                                o = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? s.createElement(a.Z, { style: z.controlsContainer }, t ? s.createElement(a.Z, { style: z.ratioContainer }, s.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: i === o ? "primary" : "gray700", hoverLabel: { label: k }, icon: s.createElement(l.default, null), onPress: this._setAspectRatio(o), size: "medium" }), s.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: i === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: s.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), s.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: 1 === i ? "primary" : "gray700", hoverLabel: { label: I }, icon: s.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? s.createElement(a.Z, { style: z.zoomContainer }, s.createElement(v.Z, { "aria-label": x, max: this._maxScale, maxIcon: s.createElement(d.default, { style: z.icon }), min: 0, minIcon: s.createElement(p.default, { style: z.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: i, width: s } = this._getMaskDimensions(),
                                { height: o, width: a } = _.Z.getCoverDimensions({ width: s, height: i }, t);
                            return { width: a * Math.pow(2, e), height: o * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: i } = this.state,
                                { height: s, width: o } = _.Z.getContainDimensions({ width: i - 50, height: t - 50 }, e);
                            return { width: o, height: s };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: i } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: i }) : (this.setState({ containerHeight: t, containerWidth: i }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: i } = this._getImageDimensions(),
                                { width: s } = this._getMaskDimensions(),
                                o = i / t.width,
                                a = L(s / (e.width * o));
                            this.setState({ imageScale: a });
                            const { left: r, top: n } = this._getUnscaledCropData();
                            (this._panStyles.top = n - e.top * o * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * o * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, i, s) => {
                            const o = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + o, 0));
                                return (this._panStyles.left += i * (t - e)), (this._panStyles.top += s * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, i, s, o) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (r - e) + s), (this._panStyles.top += i * (r - e) + o), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                i = e.left,
                                s = e.top,
                                o = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let r = !1;
                            i < 0 && ((r = !0), (this._panStyles.left += i), (this._previousLeft += i)), s < 0 && ((r = !0), (this._panStyles.top += s), (this._previousTop += s)), o > 0 && ((r = !0), (this._panStyles.left += o), (this._previousLeft += o)), a > 0 && ((r = !0), (this._panStyles.top += a), (this._previousTop += a)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: i } = this.state,
                                s = i?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            s !== a &&
                                (0, o.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: i, width: s } = this._getMaskDimensions(),
                                { left: o, top: a } = this._panStyles;
                            return { top: (e - i) / 2 - a, left: (t - s) / 2 - o, width: s, height: i };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: i } = this.props,
                        { transformStyle: o } = this.state,
                        { height: r, width: n } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return s.createElement(a.Z, { style: z.container }, s.createElement(Z, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: i ? this._handlePinchMove : void 0, onWheel: i ? this._handleWheel : void 0, style: z.root }, c ? s.createElement(s.Fragment, null, s.createElement(g.Z, { source: { uri: t.src, width: n, height: r }, style: [z.image, o] }), s.createElement(C, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        i = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * i.top), left: Math.round(t * i.left), width: Math.round(t * i.width), height: Math.round(t * i.height) };
                }
            }
            W.defaultProps = { circle: !1, withZoomControl: !0 };
            const z = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                H = W;
        },
        449479: (e, t, i) => {
            i.d(t, { Z: () => f });
            var s = i(202784),
                o = i(325686),
                a = i(913973),
                r = i(731708),
                n = i(950822),
                l = i(466792),
                h = i(58881),
                c = i(530732),
                d = i(352924),
                p = i(392237);
            class u extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, d.F)()),
                        (this.descriptionId = (0, d.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: i } = this.props;
                            i && !t && i(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: i, disabled: d, helpText: u, label: g, name: _, testID: v } = this.props,
                        f = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        b = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = i ? f : b;
                    return s.createElement(l.Z, { disabled: d }, (l) => s.createElement(o.Z, { role: "label", style: [m.root, !d && m.interactive], testID: v }, s.createElement(o.Z, { style: m.topContainer }, s.createElement(r.ZP, { id: this.labelId }, g), s.createElement(o.Z, { style: m.radioContainer }, s.createElement(c.Z, { interactiveStyles: y, interactivityState: l, style: m.radioBackground }, s.createElement(o.Z, { style: [m.circle, i && m.circleActive, d && m.circleDisabled, i && d && m.circleCheckedAndDisabled] }, i ? s.createElement(a.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: i, disabled: d, name: _, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? s.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                _ = "radioGroup";
            let v = 1;
            class f extends s.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: i } = this.props;
                            i(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (i) => {
                            (this._radioRefs[e] = i), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${v}_LABEL`),
                        (v += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: i, label: a, name: n, options: l, value: h } = this.props;
                    return s.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: i && b.disabled, testID: `${_}${n}` },
                        a ? s.createElement(o.Z, { id: this._labelId, role: "label", style: b.header }, s.createElement(r.ZP, { style: b.label, weight: "bold" }, a), t ? s.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => s.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === h, disabled: i, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === h), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const b = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        745088: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var s = i(202784),
                o = i(890601),
                a = i(783427),
                r = i(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M11 18v2H4.502c-1.378 0-2.5-1.121-2.5-2.5V3h8.535l2 3h9.465v7h-2V8h-8.535l-2-3H4.002v12.5c0 .275.224.5.5.5H11zm8.502 0h-2.073l2-2-1.414-1.414L13.601 19l4.414 4.414L19.429 22l-2-2H23v-2h-3.498z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var s = i(202784),
                o = i(890601),
                a = i(783427),
                r = i(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        155353: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var s = i(202784),
                o = i(890601),
                a = i(783427),
                r = i(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        158910: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var s = i(202784),
                o = i(890601),
                a = i(783427),
                r = i(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm8-1V7.5h2V10h2.5v2H12v2.5h-2V12H7.5v-2H10z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        465233: (e, t, i) => {
            i.d(t, { Z: () => o });
            var s = i(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, s.Z)(e, (e) => o(e));
            }
        },
        125568: (e, t, i) => {
            i.d(t, { t: () => o });
            var s = i(202784);
            function o() {
                const e = s.useRef(!0);
                return (
                    s.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    s.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.c0d216fa.js.map
