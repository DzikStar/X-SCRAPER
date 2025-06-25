"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "loader.AudioContextVoiceMedia"],
    {
        37475: (e, t, s) => {
            s.d(t, { d: () => o });
            const o = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        661810: (e, t, s) => {
            s.d(t, { Z: () => r });
            var o = s(202784),
                i = s(325686),
                a = s(392237);
            function r({ spacing: e, style: t }) {
                return o.createElement(i.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                i = s(154003),
                a = s(392237);
            class r extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: s, disabled: a, href: r, icon: l, label: h, onPress: c, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, s);
                    return o.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: r, onPress: c, renderMenu: d, size: "xLarge", style: [n.root, !h && n.iconOnly, p], testID: u }, h);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                i = s(325686),
                a = s(235902),
                r = s(885015),
                n = s(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: s }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? h[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return s ? o.createElement(r.Z, { style: !t && h.root, withGutter: !0 }, o.createElement(i.Z, { style: h.gapColumn }, o.createElement(i.Z, { style: [h.gap, c] })), o.createElement(i.Z, { style: h.gapText }, s), o.createElement(i.Z, { style: h.gapColumn }, o.createElement(i.Z, { style: [h.gap, c] }))) : o.createElement(i.Z, { style: [!t && h.root, l() && h.rootRedesign, h.gap, c] });
            }
            const h = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => h });
            var o = s(807896),
                i = s(202784),
                a = s(325686),
                r = s(392237);
            class n extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...r } = this.props,
                        n = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return i.createElement(a.Z, (0, o.Z)({ style: [t, l.root, s && l.withGutter] }, r), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                h = n;
        },
        548485: (e, t, s) => {
            s.d(t, { Z: () => z });
            var o = s(202784),
                i = s(928316),
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
                b = s(392237),
                v = s(401339);
            const y = b.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: s }) => o.createElement(a.Z, { pointerEvents: "none", style: [y.mask, { width: s, height: t }, e && y.circle] });
            var S = s(807896),
                w = s(452661),
                P = s(933895);
            class E extends o.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: s, onPinchMove: o, onWheel: i } = this.props;
                            if (e) {
                                (s || t || o) && (this._removeTouchMoveToScrollListener = (0, P.O)(e, this._preventDefaultEvent, !1)), i && (this._removeScrollToScaleListener = (0, P.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: s, onPinchMove: o } = this.props,
                                i = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (o) {
                                    const e = ((a = i[0]), (r = i[1]), Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: s } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(i[0], i[1]),
                                        n = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? s - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = s), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    o(h, c - t, d - s, n, l);
                                }
                            } else s && s(t.dx, t.dy);
                            var a, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: s, deltaX: o, deltaY: i } = e,
                                { x: a, y: r } = this._centerPosition,
                                n = a - t,
                                l = r - s;
                            this.props.onWheel && this.props.onWheel(o, i, n, l);
                        }),
                        (this._panResponder = w.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: s, onPinchMove: i, onWheel: r, ...n } = this.props;
                    return o.createElement(a.Z, (0, S.Z)({}, n, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const x = E,
                Z = n().d85bc1b8,
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
            class W extends o.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !v.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: s } = this.state,
                                i = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? o.createElement(a.Z, { style: G.controlsContainer }, t ? o.createElement(a.Z, { style: G.ratioContainer }, o.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: s === i ? "primary" : "gray700", hoverLabel: { label: k }, icon: o.createElement(l.default, null), onPress: this._setAspectRatio(i), size: "medium" }), o.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: s === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: o.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), o.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: 1 === s ? "primary" : "gray700", hoverLabel: { label: I }, icon: o.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? o.createElement(a.Z, { style: G.zoomContainer }, o.createElement(f.Z, { "aria-label": Z, max: this._maxScale, maxIcon: o.createElement(d.default, { style: G.icon }), min: 0, minIcon: o.createElement(p.default, { style: G.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: s, width: o } = this._getMaskDimensions(),
                                { height: i, width: a } = _.Z.getCoverDimensions({ width: o, height: s }, t);
                            return { width: a * Math.pow(2, e), height: i * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: s } = this.state,
                                { height: o, width: i } = _.Z.getContainDimensions({ width: s - 50, height: t - 50 }, e);
                            return { width: i, height: o };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: s } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: s }) : (this.setState({ containerHeight: t, containerWidth: s }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: s } = this._getImageDimensions(),
                                { width: o } = this._getMaskDimensions(),
                                i = s / t.width,
                                a = L(o / (e.width * i));
                            this.setState({ imageScale: a });
                            const { left: r, top: n } = this._getUnscaledCropData();
                            (this._panStyles.top = n - e.top * i * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * i * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, s, o) => {
                            const i = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + i, 0));
                                return (this._panStyles.left += s * (t - e)), (this._panStyles.top += o * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, s, o, i) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (r - e) + o), (this._panStyles.top += s * (r - e) + i), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                s = e.left,
                                o = e.top,
                                i = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let r = !1;
                            s < 0 && ((r = !0), (this._panStyles.left += s), (this._previousLeft += s)), o < 0 && ((r = !0), (this._panStyles.top += o), (this._previousTop += o)), i > 0 && ((r = !0), (this._panStyles.left += i), (this._previousLeft += i)), a > 0 && ((r = !0), (this._panStyles.top += a), (this._previousTop += a)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: s } = this.state,
                                o = s?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            o !== a &&
                                (0, i.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: s, width: o } = this._getMaskDimensions(),
                                { left: i, top: a } = this._panStyles;
                            return { top: (e - s) / 2 - a, left: (t - o) / 2 - i, width: o, height: s };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: s } = this.props,
                        { transformStyle: i } = this.state,
                        { height: r, width: n } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return o.createElement(a.Z, { style: G.container }, o.createElement(x, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: s ? this._handlePinchMove : void 0, onWheel: s ? this._handleWheel : void 0, style: G.root }, c ? o.createElement(o.Fragment, null, o.createElement(g.Z, { source: { uri: t.src, width: n, height: r }, style: [G.image, i] }), o.createElement(C, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            const G = b.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = W;
        },
        449479: (e, t, s) => {
            s.d(t, { Z: () => b });
            var o = s(202784),
                i = s(325686),
                a = s(913973),
                r = s(731708),
                n = s(950822),
                l = s(466792),
                h = s(58881),
                c = s(530732),
                d = s(352924),
                p = s(392237);
            class u extends o.Component {
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
                        b = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        v = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = s ? b : v;
                    return o.createElement(l.Z, { disabled: d }, (l) => o.createElement(i.Z, { role: "label", style: [m.root, !d && m.interactive], testID: f }, o.createElement(i.Z, { style: m.topContainer }, o.createElement(r.ZP, { id: this.labelId }, g), o.createElement(i.Z, { style: m.radioContainer }, o.createElement(c.Z, { interactiveStyles: y, interactivityState: l, style: m.radioBackground }, o.createElement(i.Z, { style: [m.circle, s && m.circleActive, d && m.circleDisabled, s && d && m.circleCheckedAndDisabled] }, s ? o.createElement(a.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: s, disabled: d, name: _, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? o.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
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
            class b extends o.Component {
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
                    return o.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: s && v.disabled, testID: `${_}${n}` },
                        a ? o.createElement(i.Z, { id: this._labelId, role: "label", style: v.header }, o.createElement(r.ZP, { style: v.label, weight: "bold" }, a), t ? o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === h, disabled: s, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === h), testID: e.testID })),
                    );
                }
            }
            b.defaultProps = { disabled: !1 };
            const v = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        662678: (e, t, s) => {
            s.d(t, { G: () => i, Z: () => o });
            s(136728);
            const o = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (s, o, i) => {
                        const a = t ? t(o, i, e) : !!o;
                        return a && s[0].push(o), !a && s[1].push(o), s;
                    },
                    [[], []],
                );
            }
        },
        125568: (e, t, s) => {
            s.d(t, { t: () => i });
            var o = s(202784);
            function i() {
                const e = o.useRef(!0);
                return (
                    o.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    o.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.9de7432a.js.map
