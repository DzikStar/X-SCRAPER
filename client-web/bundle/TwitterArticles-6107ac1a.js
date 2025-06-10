"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconCropSquare-js", "icons/IconMediaExpand-js"],
    {
        37475: (e, t, s) => {
            s.d(t, { d: () => i });
            const i = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        661810: (e, t, s) => {
            s.d(t, { Z: () => r });
            var i = s(202784),
                o = s(325686),
                a = s(392237);
            function r({ spacing: e, style: t }) {
                return i.createElement(o.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, s) => {
            s.d(t, { Z: () => l });
            var i = s(202784),
                o = s(154003),
                a = s(392237);
            class r extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: s, disabled: a, href: r, icon: l, label: h, onPress: c, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, s);
                    return i.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: r, onPress: c, renderMenu: d, size: "xLarge", style: [n.root, !h && n.iconOnly, p], testID: u }, h);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, s) => {
            s.d(t, { Z: () => l });
            var i = s(202784),
                o = s(325686),
                a = s(235902),
                r = s(885015),
                n = s(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: s }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? h[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return s ? i.createElement(r.Z, { style: !t && h.root, withGutter: !0 }, i.createElement(o.Z, { style: h.gapColumn }, i.createElement(o.Z, { style: [h.gap, c] })), i.createElement(o.Z, { style: h.gapText }, s), i.createElement(o.Z, { style: h.gapColumn }, i.createElement(o.Z, { style: [h.gap, c] }))) : i.createElement(o.Z, { style: [!t && h.root, l() && h.rootRedesign, h.gap, c] });
            }
            const h = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => h });
            var i = s(807896),
                o = s(202784),
                a = s(325686),
                r = s(392237);
            class n extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...r } = this.props,
                        n = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return o.createElement(a.Z, (0, i.Z)({ style: [t, l.root, s && l.withGutter] }, r), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                h = n;
        },
        548485: (e, t, s) => {
            s.d(t, { Z: () => B });
            var i = s(202784),
                o = s(928316),
                a = s(325686),
                r = s(111677),
                n = s.n(r),
                l = s(553007),
                h = s(723951),
                c = s(390587),
                d = s(158910),
                p = s(614991),
                u = s(323265),
                m = s(154003),
                g = s(992942),
                _ = s(782578),
                f = s(173739),
                v = s(392237),
                b = s(393058);
            const y = v.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: s }) => i.createElement(a.Z, { pointerEvents: "none", style: [y.mask, { width: s, height: t }, e && y.circle] });
            var S = s(807896),
                w = s(452661),
                E = s(933895);
            class P extends i.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: s, onPinchMove: i, onWheel: o } = this.props;
                            if (e) {
                                (s || t || i) && (this._removeTouchMoveToScrollListener = (0, E.O)(e, this._preventDefaultEvent, !1)), o && (this._removeScrollToScaleListener = (0, E.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: s, onPinchMove: i } = this.props,
                                o = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (i) {
                                    const e = ((a = o[0]), (r = o[1]), Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: s } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(o[0], o[1]),
                                        n = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? s - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = s), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    i(h, c - t, d - s, n, l);
                                }
                            } else s && s(t.dx, t.dy);
                            var a, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: s, deltaX: i, deltaY: o } = e,
                                { x: a, y: r } = this._centerPosition,
                                n = a - t,
                                l = r - s;
                            this.props.onWheel && this.props.onWheel(i, o, n, l);
                        }),
                        (this._panResponder = w.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: s, onPinchMove: o, onWheel: r, ...n } = this.props;
                    return i.createElement(a.Z, (0, S.Z)({}, n, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const Z = P,
                x = n().d85bc1b8,
                M = n().f596ace8,
                R = n().df031fca,
                D = n().b40332c6,
                k = n().e547b368,
                T = n().f7571204,
                I = n().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class W extends i.Component {
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
                                o = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? i.createElement(a.Z, { style: z.controlsContainer }, t ? i.createElement(a.Z, { style: z.ratioContainer }, i.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: s === o ? "primary" : "gray700", hoverLabel: { label: k }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(o), size: "medium" }), i.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: s === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: i.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: 1 === s ? "primary" : "gray700", hoverLabel: { label: I }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? i.createElement(a.Z, { style: z.zoomContainer }, i.createElement(f.Z, { "aria-label": x, max: this._maxScale, maxIcon: i.createElement(d.default, { style: z.icon }), min: 0, minIcon: i.createElement(p.default, { style: z.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: s, width: i } = this._getMaskDimensions(),
                                { height: o, width: a } = _.Z.getCoverDimensions({ width: i, height: s }, t);
                            return { width: a * Math.pow(2, e), height: o * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: s } = this.state,
                                { height: i, width: o } = _.Z.getContainDimensions({ width: s - 50, height: t - 50 }, e);
                            return { width: o, height: i };
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
                                o = s / t.width,
                                a = L(i / (e.width * o));
                            this.setState({ imageScale: a });
                            const { left: r, top: n } = this._getUnscaledCropData();
                            (this._panStyles.top = n - e.top * o * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * o * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, s, i) => {
                            const o = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + o, 0));
                                return (this._panStyles.left += s * (t - e)), (this._panStyles.top += i * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, s, i, o) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (r - e) + i), (this._panStyles.top += s * (r - e) + o), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                s = e.left,
                                i = e.top,
                                o = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let r = !1;
                            s < 0 && ((r = !0), (this._panStyles.left += s), (this._previousLeft += s)), i < 0 && ((r = !0), (this._panStyles.top += i), (this._previousTop += i)), o > 0 && ((r = !0), (this._panStyles.left += o), (this._previousLeft += o)), a > 0 && ((r = !0), (this._panStyles.top += a), (this._previousTop += a)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: s } = this.state,
                                i = s?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            i !== a &&
                                (0, o.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: s, width: i } = this._getMaskDimensions(),
                                { left: o, top: a } = this._panStyles;
                            return { top: (e - s) / 2 - a, left: (t - i) / 2 - o, width: i, height: s };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: s } = this.props,
                        { transformStyle: o } = this.state,
                        { height: r, width: n } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(a.Z, { style: z.container }, i.createElement(Z, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: s ? this._handlePinchMove : void 0, onWheel: s ? this._handleWheel : void 0, style: z.root }, c ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: n, height: r }, style: [z.image, o] }), i.createElement(C, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            W.defaultProps = { circle: !1, withZoomControl: !0 };
            const z = v.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                B = W;
        },
        449479: (e, t, s) => {
            s.d(t, { Z: () => v });
            var i = s(202784),
                o = s(325686),
                a = s(913973),
                r = s(731708),
                n = s(950822),
                l = s(466792),
                h = s(58881),
                c = s(530732),
                d = s(352924),
                p = s(392237);
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, d.F)()),
                        (this.descriptionId = (0, d.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: s } = this.props;
                            s && !t && s(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: s, disabled: d, helpText: u, label: g, name: _, testID: f } = this.props,
                        v = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        b = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = s ? v : b;
                    return i.createElement(l.Z, { disabled: d }, (l) => i.createElement(o.Z, { role: "label", style: [m.root, !d && m.interactive], testID: f }, i.createElement(o.Z, { style: m.topContainer }, i.createElement(r.ZP, { id: this.labelId }, g), i.createElement(o.Z, { style: m.radioContainer }, i.createElement(c.Z, { interactiveStyles: y, interactivityState: l, style: m.radioBackground }, i.createElement(o.Z, { style: [m.circle, s && m.circleActive, d && m.circleDisabled, s && d && m.circleCheckedAndDisabled] }, s ? i.createElement(a.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: s, disabled: d, name: _, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? i.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                _ = "radioGroup";
            let f = 1;
            class v extends i.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: s } = this.props;
                            s(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (s) => {
                            (this._radioRefs[e] = s), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: s, label: a, name: n, options: l, value: h } = this.props;
                    return i.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: s && b.disabled, testID: `${_}${n}` },
                        a ? i.createElement(o.Z, { id: this._labelId, role: "label", style: b.header }, i.createElement(r.ZP, { style: b.label, weight: "bold" }, a), t ? i.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => i.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === h, disabled: s, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === h), testID: e.testID })),
                    );
                }
            }
            v.defaultProps = { disabled: !1 };
            const b = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        390587: (e, t, s) => {
            s.r(t), s.d(t, { default: () => l });
            var i = s(202784),
                o = s(890601),
                a = s(783427),
                r = s(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        841972: (e, t, s) => {
            s.r(t), s.d(t, { default: () => h });
            var i = s(202784),
                o = s(890601),
                a = s(783427),
                r = s(717683),
                n = s(347101);
            const l = (e = {}) => {
                const t = i.useContext(r.Z),
                    { direction: s } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" })) }, { writingDirection: s });
            };
            l.metadata = { width: 24, height: 24 };
            const h = l;
        },
        314948: (e, t, s) => {
            s.r(t), s.d(t, { default: () => l });
            var i = s(202784),
                o = s(890601),
                a = s(783427),
                r = s(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        662678: (e, t, s) => {
            s.d(t, { G: () => o, Z: () => i });
            s(136728);
            const i = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (s, i, o) => {
                        const a = t ? t(i, o, e) : !!i;
                        return a && s[0].push(i), !a && s[1].push(i), s;
                    },
                    [[], []],
                );
            }
        },
        125568: (e, t, s) => {
            s.d(t, { t: () => o });
            var i = s(202784);
            function o() {
                const e = i.useRef(!0);
                return (
                    i.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    i.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.d2a0043a.js.map
