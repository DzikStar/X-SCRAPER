"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists", "icons/IconCropSquare-js", "icons/IconEye-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var i = o(202784),
                s = o(614983),
                a = o.n(s),
                n = o(325686),
                r = o(370006),
                l = o(786998),
                h = o(929028),
                c = o(386802);
            function d(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: s, hideBackButton: a, isFullWidth: n, isLarge: h, leftControl: c, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: _, subtitle: v, title: f, titleDomId: y, titleIconCell: b, titleIconCellSize: S, withBackground: w, withWideContainer: C } = this.props,
                        { isModal: M } = this.context,
                        x = a ? c : i.createElement(r.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, M, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: h, leftControl: x, middleControl: p, position: d(u, M, s), rightControl: m, style: _, subtitle: v, title: f, titleDomId: y, titleIconCell: b, titleIconCellSize: S, withBackground: B, withWideContainer: C }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = h.Z.getBackgroundStyles();
                    return t ? i.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => u });
            var i = o(202784),
                s = o(325686),
                a = o(108362),
                n = o(386802),
                r = o(392237),
                l = o(652904),
                h = o(555079),
                c = o(625661),
                d = o(449067),
                p = o(715601);
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: r, history: l, isFullWidth: d, isLarge: p, middleControl: u, onBackClick: g, rightControl: _, secondaryBar: v, subtitle: f, title: y } = this.props,
                                { isModal: b } = this.context;
                            return i.createElement(s.Z, { style: b ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, i.createElement(c.ZP, { backButtonType: o || (b ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !b, hideBackButton: r, history: l, isFullWidth: d, isLarge: p, middleControl: u, onBackClick: g, ref: e, rightControl: _, secondaryBar: v, style: [b && m.appBarModal, t], subtitle: f, title: y, titleDomId: h.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: r, isFullWidth: h, isLarge: c, renderHeader: u, title: g, withoutBottomBarMobile: _ } = this.props,
                        { isModal: v } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(l.Z, null, i.createElement(d.Z.Configure, { documentTitle: r, headerless: !0, title: g }), i.createElement(s.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, v && m.rootModal] }, !v && f, i.createElement(a.Z, { isFullWidth: h, isLarge: c, style: [m.container, v && m.containerModal, n] }, v ? i.createElement(p.Z, { style: m.viewport }, f, o) : o), t ? i.createElement(s.Z, { style: [m.bottomBarModal, !v && !_ && m.bottomBarMobile] }, i.createElement(a.Z, { isFullWidth: h, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: r.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        873637: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var i = o(807896),
                s = o(202784),
                a = o(325686),
                n = o(167630),
                r = o(548485),
                l = o(392237),
                h = o(111677),
                c = o.n(h),
                d = o(205074),
                p = o(653843);
            const u = c().gff1f69e;
            class m extends s.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof d.ZP &&
                        (0, p.ZP)(t).then((e) =>
                            new d.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : s.createElement(n.Z, { "aria-label": u, style: g.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: o, media: i, withAspectRatioOptions: n, withZoomControl: l } = this.props,
                        { orientedImage: h } = this.state,
                        { cropData: c, originalMediaFile: d = {} } = i || {};
                    return h ? s.createElement(a.Z, { style: g.cropper }, s.createElement(r.Z, { circle: this.props.circle, defaultAspectRatio: (o && o.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: o || c, image: { src: h.url, width: d.width, height: d.height }, ref: e, withAspectRatioOptions: n, withZoomControl: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                _ = s.forwardRef((e, t) => s.createElement(m, (0, i.Z)({}, e, { cropperRef: t })));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var i = o(202784),
                s = o(500002),
                a = o(668214),
                n = o(997174),
                r = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class h extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: i },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const h = s || r;
                    ((h && s !== r) || (!h && o !== a) || i !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            h.defaultProps = { children: null };
            const c = (0, s.ZP)(l(h));
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => z });
            var i = o(202784),
                s = o(928316),
                a = o(325686),
                n = o(111677),
                r = o.n(n),
                l = o(553007),
                h = o(723951),
                c = o(390587),
                d = o(158910),
                p = o(614991),
                u = o(323265),
                m = o(154003),
                g = o(992942),
                _ = o(782578),
                v = o(173739),
                f = o(392237),
                y = o(401339);
            const b = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: o }) => i.createElement(a.Z, { pointerEvents: "none", style: [b.mask, { width: o, height: t }, e && b.circle] });
            var w = o(807896),
                C = o(452661),
                M = o(933895);
            class x extends i.Component {
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
                                (o || t || i) && (this._removeTouchMoveToScrollListener = (0, M.O)(e, this._preventDefaultEvent, !1)), s && (this._removeScrollToScaleListener = (0, M.Y)(e, this._preventDefaultEvent, !1));
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
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    i(h, c - t, d - o, r, l);
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
                        (this._panResponder = C.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: s, onWheel: n, ...r } = this.props;
                    return i.createElement(a.Z, (0, w.Z)({}, r, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const B = x,
                k = r().d85bc1b8,
                Z = r().f596ace8,
                E = r().df031fca,
                P = r().b40332c6,
                R = r().e547b368,
                D = r().f7571204,
                L = r().e6e16812,
                T =
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
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !y.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: o } = this.state,
                                s = e.width / e.height,
                                n = this._shouldShowZoomControl();
                            return t || n ? i.createElement(a.Z, { style: W.controlsContainer }, t ? i.createElement(a.Z, { style: W.ratioContainer }, i.createElement(m.ZP, { "aria-label": Z, borderColor: "transparent", color: o === s ? "primary" : "gray700", hoverLabel: { label: R }, icon: i.createElement(l.default, null), onPress: this._setAspectRatio(s), size: "medium" }), i.createElement(m.ZP, { "aria-label": E, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: D }, icon: i.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), i.createElement(m.ZP, { "aria-label": P, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: L }, icon: i.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, n ? i.createElement(a.Z, { style: W.zoomContainer }, i.createElement(v.Z, { "aria-label": k, max: this._maxScale, maxIcon: i.createElement(d.default, { style: W.icon }), min: 0, minIcon: i.createElement(p.default, { style: W.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: i } = this._getMaskDimensions(),
                                { height: s, width: a } = _.Z.getCoverDimensions({ width: i, height: o }, t);
                            return { width: a * Math.pow(2, e), height: s * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: i, width: s } = _.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
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
                                a = T(i / (e.width * s));
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
                        (this._maxScale = ((t = e.image), Math.max(Math.min(T(t.width / 150), T(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: s } = this.state,
                        { height: n, width: r } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return i.createElement(a.Z, { style: W.container }, i.createElement(B, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: W.root }, c ? i.createElement(i.Fragment, null, i.createElement(g.Z, { source: { uri: t.src, width: r, height: n }, style: [W.image, s] }), i.createElement(S, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            const W = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = I;
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => i });
            const i = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
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
        988227: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                s = o(890601),
                a = o(783427),
                n = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                s = o(890601),
                a = o(783427),
                n = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists.328f207a.js.map
