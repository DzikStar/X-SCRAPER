"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a"],
    {
        37475: (e, t, s) => {
            s.d(t, { d: () => o });
            const o = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        15038: (e, t, s) => {
            s.d(t, { ZP: () => c });
            var o = s(202784),
                n = s(325686),
                i = s(950822),
                r = s(392237);
            const a = (e) => (0, i.Z)("div", e);
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: s, style: i } = this.props,
                        { active: r } = this.state,
                        l = t ? h.dragBorderValid : h.dragBorderInvalid;
                    return o.createElement(a, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [h.root, i, r && l, r && e] }, o.createElement(n.Z, { style: h.inner }, "function" == typeof s ? s(r) : s));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const h = r.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = l;
        },
        392027: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                n = s(154003),
                i = s(392237);
            class r extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: s, disabled: i, href: r, icon: l, label: h, onPress: c, renderMenu: d, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, s);
                    return o.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: i, icon: l, link: r, onPress: c, renderMenu: d, size: "xLarge", style: [a.root, !h && a.iconOnly, p], testID: u }, h);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const a = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        420412: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                n = s(325686),
                i = s(235902),
                r = s(885015),
                a = s(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: s }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? h[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return s ? o.createElement(r.Z, { style: !t && h.root, withGutter: !0 }, o.createElement(n.Z, { style: h.gapColumn }, o.createElement(n.Z, { style: [h.gap, c] })), o.createElement(n.Z, { style: h.gapText }, s), o.createElement(n.Z, { style: h.gapColumn }, o.createElement(n.Z, { style: [h.gap, c] }))) : o.createElement(n.Z, { style: [!t && h.root, l() && h.rootRedesign, h.gap, c] });
            }
            const h = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => h });
            var o = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(392237);
            class a extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...r } = this.props,
                        a = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return n.createElement(i.Z, (0, o.Z)({ style: [t, l.root, s && l.withGutter] }, r), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                h = a;
        },
        548485: (e, t, s) => {
            s.d(t, { Z: () => W });
            var o = s(202784),
                n = s(928316),
                i = s(325686),
                r = s(674132),
                a = s.n(r),
                l = s(553007),
                h = s(723951),
                c = s(390587),
                d = s(158910),
                p = s(614991),
                u = s(323265),
                m = s(154003),
                g = s(992942),
                f = s(782578),
                _ = s(173739),
                y = s(392237),
                b = s(393058);
            const C = y.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: s }) => o.createElement(i.Z, { pointerEvents: "none", style: [C.mask, { width: s, height: t }, e && C.circle] });
            var v = s(807896),
                w = s(151624),
                x = s(933895);
            class E extends o.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: s, onPinchMove: o, onWheel: n } = this.props;
                            if (e) {
                                (s || t || o) && (this._removeTouchMoveToScrollListener = (0, x.O)(e, this._preventDefaultEvent, !1)), n && (this._removeScrollToScaleListener = (0, x.Y)(e, this._preventDefaultEvent, !1));
                                const i = e.getBoundingClientRect();
                                this._centerPosition = { x: i.width / 2 + i.left, y: i.height / 2 + i.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: s, onPinchMove: o } = this.props,
                                n = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (o) {
                                    const e = ((i = n[0]), (r = n[1]), Math.sqrt(Math.pow(i.pageY - r.pageY, 2) + Math.pow(i.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: s } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(n[0], n[1]),
                                        a = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? s - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = s), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    o(h, c - t, d - s, a, l);
                                }
                            } else s && s(t.dx, t.dy);
                            var i, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: s, deltaX: o, deltaY: n } = e,
                                { x: i, y: r } = this._centerPosition,
                                a = i - t,
                                l = r - s;
                            this.props.onWheel && this.props.onWheel(o, n, a, l);
                        }),
                        (this._panResponder = w.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: s, onPinchMove: n, onWheel: r, ...a } = this.props;
                    return o.createElement(i.Z, (0, v.Z)({}, a, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const D = E,
                P = a().d85bc1b8,
                k = a().f596ace8,
                R = a().df031fca,
                T = a().b40332c6,
                M = a().e547b368,
                Z = a().f7571204,
                F = a().e6e16812,
                I =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class L extends o.Component {
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
                            return t || r ? o.createElement(i.Z, { style: B.controlsContainer }, t ? o.createElement(i.Z, { style: B.ratioContainer }, o.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: s === n ? "primary" : "gray700", hoverLabel: { label: M }, icon: o.createElement(l.default, null), onPress: this._setAspectRatio(n), size: "medium" }), o.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: s === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: Z }, icon: o.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), o.createElement(m.ZP, { "aria-label": T, borderColor: "transparent", color: 1 === s ? "primary" : "gray700", hoverLabel: { label: F }, icon: o.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? o.createElement(i.Z, { style: B.zoomContainer }, o.createElement(_.Z, { "aria-label": P, max: this._maxScale, maxIcon: o.createElement(d.default, { style: B.icon }), min: 0, minIcon: o.createElement(p.default, { style: B.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: s, width: o } = this._getMaskDimensions(),
                                { height: n, width: i } = f.Z.getCoverDimensions({ width: o, height: s }, t);
                            return { width: i * Math.pow(2, e), height: n * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: s } = this.state,
                                { height: o, width: n } = f.Z.getContainDimensions({ width: s - 50, height: t - 50 }, e);
                            return { width: n, height: o };
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
                                n = s / t.width,
                                i = I(o / (e.width * n));
                            this.setState({ imageScale: i });
                            const { left: r, top: a } = this._getUnscaledCropData();
                            (this._panStyles.top = a - e.top * n * Math.pow(2, i)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * n * Math.pow(2, i)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, s, o) => {
                            const n = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + n, 0));
                                return (this._panStyles.left += s * (t - e)), (this._panStyles.top += o * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, s, o, n) => {
                            const i = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + i, 0));
                                return (this._panStyles.left += t * (r - e) + o), (this._panStyles.top += s * (r - e) + n), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                s = e.left,
                                o = e.top,
                                n = e.left + e.width - t.width,
                                i = e.top + e.height - t.height;
                            let r = !1;
                            s < 0 && ((r = !0), (this._panStyles.left += s), (this._previousLeft += s)), o < 0 && ((r = !0), (this._panStyles.top += o), (this._previousTop += o)), n > 0 && ((r = !0), (this._panStyles.left += n), (this._previousLeft += n)), i > 0 && ((r = !0), (this._panStyles.top += i), (this._previousTop += i)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: s } = this.state,
                                o = s?.transform[0]?.translate3d,
                                i = `${e}px, ${t}px, 0`;
                            o !== i &&
                                (0, n.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: i }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: s, width: o } = this._getMaskDimensions(),
                                { left: n, top: i } = this._panStyles;
                            return { top: (e - s) / 2 - i, left: (t - o) / 2 - n, width: o, height: s };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(I(t.width / 150), I(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: s } = this.props,
                        { transformStyle: n } = this.state,
                        { height: r, width: a } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return o.createElement(i.Z, { style: B.container }, o.createElement(D, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: s ? this._handlePinchMove : void 0, onWheel: s ? this._handleWheel : void 0, style: B.root }, c ? o.createElement(o.Fragment, null, o.createElement(g.Z, { source: { uri: t.src, width: a, height: r }, style: [B.image, n] }), o.createElement(S, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            const B = y.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                W = L;
        },
        977952: (e, t, s) => {
            s.d(t, { Z: () => R });
            var o = s(807896),
                n = s(202784),
                i = (s(136728), s(301503)),
                r = s(516951),
                a = s(950822),
                l = s(233184),
                h = s(745153),
                c = s(392237),
                d = s(989272),
                p = (s(571372), s(370751)),
                u = s(122375),
                m = s(835305),
                g = s(899492);
            function f(e) {
                let t;
                if (e.html)
                    try {
                        t = (function (e) {
                            if (!e.html) return null;
                            if (
                                ((function (e) {
                                    const t = e.html;
                                    if (!t) return;
                                    const s = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${g.S()}[^>]*>`, "g");
                                    let o,
                                        n = t;
                                    for (; (o = s.exec(t)); ) {
                                        const e = o.groups?.emoji;
                                        if (!e) continue;
                                        const t = o.index,
                                            i = s.lastIndex;
                                        n = [n.substring(0, t), e, n.substring(i, n.length)].join("");
                                    }
                                    e.html = n;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, i.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const s = i.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let o = (0, i.convertToRaw)(s);
                            e.longformRichTextTransform ||
                                (o.blocks = (function (e, t) {
                                    const s = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let o;
                                    const n = [];
                                    for (; (o = s.exec(e.text)); ) {
                                        const t = o.index,
                                            i = s.lastIndex,
                                            r = e.text.substring(t, i),
                                            a = S(r, v.start_newline),
                                            l = S(r, v.end_newline);
                                        n.push([a, l]);
                                    }
                                    const r = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [s, o] = n[e];
                                        0 === e && s && s++, e === t.blocks.length - 1 && o && o++;
                                        for (let e = 0; e < s; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ...w(), key: e };
                                            r.push(t);
                                        }
                                        r.push(t.blocks[e]);
                                        for (let e = 0; e < o; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ...w(), key: e };
                                            r.push(t);
                                        }
                                    }
                                    return r;
                                })(e, o));
                            o = (function (e, t) {
                                const s = [];
                                for (const o of t.blocks)
                                    switch (o.type) {
                                        case u.Wo:
                                            s.push(_(e, o));
                                            break;
                                        case u.p8:
                                        case u.r$:
                                        case u.Mm:
                                        case u.Z4:
                                        case u.Re:
                                            if (e.allowExtendedPasteStyles) s.push(_(e, o));
                                            else {
                                                const t = { ...o, type: u.Wo };
                                                s.push(_(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...o, type: u.Wo };
                                            s.push(_(e, t));
                                        }
                                    }
                                return { blocks: s, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, o);
                            const n = (0, i.convertFromRaw)(o);
                            return n;
                        })(e);
                    } catch (t) {
                        const s = "warning",
                            { html: o, text: n } = e,
                            i = { extra: { text: n, html: o, error: t }, level: s };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), i);
                    }
                return !t && e.text && (t = i.ContentState.createFromText(e.text)), t || null;
            }
            function _(e, t) {
                const s = t.inlineStyleRanges || [],
                    o = [],
                    n = e.longformRichTextTransform ? C : b;
                for (const t of s) !e.stripPastedStyles && n.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const y = [m.DraftJS.Bold, m.DraftJS.Italic],
                b = (0, p.Z)(y),
                C = (0, p.Z)([...b, m.DraftJS.Strikethrough]);
            function S(e, t) {
                const s = e.match(t);
                if (!s) return 0;
                const [o] = s;
                return o.length - 1;
            }
            const v = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function w() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class x extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { containerClass: void 0 }),
                        (this.focus = () => {
                            this._editor && this._editor.focus();
                        }),
                        (this.blur = () => {
                            this._editor && this._editor.blur();
                        }),
                        (this.getValue = () => this.props.editorState.getCurrentContent().getPlainText()),
                        (this.getOffsetHeight = () => {
                            const { editor: e } = this._editor || {};
                            return (e && e.offsetHeight) || 0;
                        }),
                        (this.clear = () => {}),
                        (this._setSelectionToStart = () => {
                            const { editorState: e } = this.props,
                                t = e.getCurrentContent().getFirstBlock().getKey();
                            return i.EditorState.acceptSelection(e, new i.SelectionState({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1 }));
                        }),
                        (this._setFocusToStart = () => {
                            const e = this._setSelectionToStart();
                            return i.EditorState.forceSelection(e, e.getSelection());
                        }),
                        (this._setFocusToEnd = () => {
                            const { autoFocus: e, editorState: t, onChange: s } = this.props;
                            s?.(e ? i.EditorState.moveFocusToEnd(t) : i.EditorState.moveSelectionToEnd(t));
                        }),
                        (this._setDraftJsStyle = () => {
                            const { contentHorizontalPadding: e, placeholderTextColor: t } = this.props,
                                s = (0, d.w3)({ placeholderTextColor: t, contentHorizontalPadding: e });
                            this.setState({ containerClass: s });
                        }),
                        (this._setEditorRef = (e) => {
                            this._editor = e;
                        }),
                        (this._handleViewClick = () => this.focus()),
                        (this._handleFiles = (e) => {
                            const { onFilesAdded: t } = this.props,
                                s = [];
                            if (
                                (e.forEach((e) => {
                                    e instanceof File && s.push(e);
                                }),
                                s.length)
                            ) {
                                const e = t?.(s);
                                return e ? "handled" : "not-handled";
                            }
                            return "not-handled";
                        }),
                        (this._onPastedFiles = (e) => this._handleFiles(e)),
                        (this._onDroppedFiles = (e, t) => this._handleFiles(t)),
                        (this._onPastedText = (e, t, s) => {
                            const { multiline: o, onChange: n } = this.props;
                            if (!n) return "not-handled";
                            const { allowExtendedPasteStyles: r, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let h = f({ text: e, html: t, editorState: s, stripPastedStyles: l, allowExtendedPasteStyles: r, longformRichTextTransform: a });
                            if (!h) return "not-handled";
                            if (!o) {
                                const e = (function (e) {
                                    return e.replace(P.all_newlines, " ");
                                })(h.getPlainText());
                                h = i.ContentState.createFromText(e);
                            }
                            return (h = i.Modifier.replaceWithFragment(s.getCurrentContent(), s.getSelection(), h.getBlockMap())), n(i.EditorState.push(s, h, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: s, sendTweetCommandName: o } = this.props,
                                { hasCommandModifier: n } = i.KeyBindingUtil;
                            return e.keyCode === D.enter && n(e) ? o : e.keyCode === D.esc ? t : s?.(e) || (0, i.getDefaultKeyBinding)(e);
                        }),
                        (this._onKeyCommand = (e) => {
                            const { keyCommandHandlers: t } = this.props,
                                s = t && t[e];
                            return s ? (s(), "handled") : "not-handled";
                        }),
                        (this._onSingleLineReturn = (e, t) => {
                            const { handleReturn: s } = this.props;
                            return s?.(e, t), "handled";
                        }),
                        (this._getContainerStyle = () => {
                            const e = k[this.props.appTextSize],
                                t = c.default.theme.lineHeightsPx[e];
                            let s = 1,
                                o = 1;
                            this.props.multiline && (this.props.numberOfLines && (s = this.props.numberOfLines), this.props.maxNumberOfLines && (o = this.props.maxNumberOfLines));
                            const n = s * t,
                                i = o * t;
                            return this.props.withMaxHeight ? { minHeight: n, maxHeight: i, overflowX: "hidden", overflowY: "auto" } : { minHeight: n, height: "100%" };
                        });
                }
                componentDidMount() {
                    const { onChange: e, positionCursorAtBeginning: t, positionCursorAtEnd: s } = this.props;
                    s ? this._setFocusToEnd() : t ? e?.(this._setFocusToStart()) : this.props.autoFocus && this.focus(), this._setDraftJsStyle();
                }
                static getDerivedStateFromError() {
                    return {};
                }
                componentDidCatch(e) {
                    l.Z.report(e, { tags: { userVisible: !0, draftJs: !0 } });
                }
                render() {
                    const { multiline: e, onKeyPress: t, onKeyUp: s, testID: o } = this.props;
                    return n.createElement(E, { className: [!e && d._i.single_line, this.state.containerClass, this.props.withFormatInline && d._i.format_inline].join(" ") }, n.createElement(E, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: o ? `${o}RichTextInputContainer` : void 0 }, n.createElement(i.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [h.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: s }, customStyleMap: { overflow: { backgroundColor: c.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: o }), this.props.dragPlaceholder));
                }
            }
            x.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: r.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const E = (e) => (0, a.Z)("div", e),
                D = { enter: 13, esc: 27 };
            const P = { all_newlines: /[\r\n]/g },
                k = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                R = n.forwardRef((e, t) =>
                    n.createElement(
                        x,
                        (0, o.Z)({}, e, {
                            onFocus: function (t) {
                                e.onFocus && e.onFocus(t);
                            },
                            ref: t,
                        }),
                    ),
                );
        },
        449479: (e, t, s) => {
            s.d(t, { Z: () => y });
            var o = s(202784),
                n = s(325686),
                i = s(913973),
                r = s(731708),
                a = s(950822),
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: s, disabled: d, helpText: u, label: g, name: f, testID: _ } = this.props,
                        y = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        b = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = s ? y : b;
                    return o.createElement(l.Z, { disabled: d }, (l) => o.createElement(n.Z, { role: "label", style: [m.root, !d && m.interactive], testID: _ }, o.createElement(n.Z, { style: m.topContainer }, o.createElement(r.ZP, { id: this.labelId }, g), o.createElement(n.Z, { style: m.radioContainer }, o.createElement(c.Z, { interactiveStyles: C, interactivityState: l, style: m.radioBackground }, o.createElement(n.Z, { style: [m.circle, s && m.circleActive, d && m.circleDisabled, s && d && m.circleCheckedAndDisabled] }, s ? o.createElement(i.default, { style: m.checkMark }) : null)), (0, a.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: s, disabled: d, name: f, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? o.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                f = "radioGroup";
            let _ = 1;
            class y extends o.Component {
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
                        (this._labelId = `RADIO_GROUP_${_}_LABEL`),
                        (_ += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: s, label: i, name: a, options: l, value: h } = this.props;
                    return o.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: s && b.disabled, testID: `${f}${a}` },
                        i ? o.createElement(n.Z, { id: this._labelId, role: "label", style: b.header }, o.createElement(r.ZP, { style: b.label, weight: "bold" }, i), t ? o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === h, disabled: s, helpText: e.helpText, key: e.value, label: e.label, name: a, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === h), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const b = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        125568: (e, t, s) => {
            s.d(t, { t: () => n });
            var o = s(202784);
            function n() {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.0d99467a.js.map
