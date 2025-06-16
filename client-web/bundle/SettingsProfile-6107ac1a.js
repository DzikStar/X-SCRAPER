"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfile-6107ac1a", "icons/IconCameraPlusStroke-js", "icons/IconChevronRight-js", "icons/IconSearchPlusStroke-js"],
    {
        660703: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n,
                o,
                a = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "BlueVerifiedProfileEditCalloutQuery",
                        selections: (o = [
                            {
                                alias: null,
                                args: null,
                                concreteType: "TwitterBlueProfileEditWarningMessageConfig",
                                kind: "LinkedField",
                                name: "blue_profile_edit_warning_message_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TwitterBlueProfileChangeCallout", kind: "LinkedField", name: "callout", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link", storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })], storageKey: null },
                                    { alias: null, args: null, concreteType: "TwitterBlueProfileChangeConfirmation", kind: "LinkedField", name: "confirmation", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "cancel_button_label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "confirm_button_label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "headline", storageKey: null }, n], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "BlueVerifiedProfileEditCalloutQuery", selections: o },
                    params: { id: "myAwUDICwB5gFdJhNB7xsg", metadata: {}, name: "BlueVerifiedProfileEditCalloutQuery", operationKind: "query", text: null },
                };
            a.hash = "451e17c2bc1e752adf2af7cb2591f649";
            const s = a;
        },
        548485: (e, t, i) => {
            i.d(t, { Z: () => H });
            var n = i(202784),
                o = i(928316),
                a = i(325686),
                s = i(111677),
                r = i.n(s),
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
                y = i(393058);
            const S = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                w = ({ circle: e, height: t, width: i }) => n.createElement(a.Z, { pointerEvents: "none", style: [S.mask, { width: i, height: t }, e && S.circle] });
            var b = i(807896),
                C = i(452661),
                P = i(933895);
            class E extends n.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: i, onPinchMove: n, onWheel: o } = this.props;
                            if (e) {
                                (i || t || n) && (this._removeTouchMoveToScrollListener = (0, P.O)(e, this._preventDefaultEvent, !1)), o && (this._removeScrollToScaleListener = (0, P.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: i, onPinchMove: n } = this.props,
                                o = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (n) {
                                    const e = ((a = o[0]), (s = o[1]), Math.sqrt(Math.pow(a.pageY - s.pageY, 2) + Math.pow(a.pageX - s.pageX, 2))),
                                        { pageX: t, pageY: i } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(o[0], o[1]),
                                        r = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? i - this._previousPositionY : 0,
                                        h = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = i), (this._previousTouchDistance = e);
                                    const { x: c, y: d } = this._centerPosition;
                                    n(h, c - t, d - i, r, l);
                                }
                            } else i && i(t.dx, t.dy);
                            var a, s;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: i, deltaX: n, deltaY: o } = e,
                                { x: a, y: s } = this._centerPosition,
                                r = a - t,
                                l = s - i;
                            this.props.onWheel && this.props.onWheel(n, o, r, l);
                        }),
                        (this._panResponder = C.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: i, onPinchMove: o, onWheel: s, ...r } = this.props;
                    return n.createElement(a.Z, (0, b.Z)({}, r, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const M = E,
                x = r().d85bc1b8,
                D = r().f596ace8,
                Z = r().df031fca,
                k = r().b40332c6,
                R = r().e547b368,
                T = r().f7571204,
                L = r().e6e16812,
                I =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class W extends n.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !y.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: i } = this.state,
                                o = e.width / e.height,
                                s = this._shouldShowZoomControl();
                            return t || s ? n.createElement(a.Z, { style: B.controlsContainer }, t ? n.createElement(a.Z, { style: B.ratioContainer }, n.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: i === o ? "primary" : "gray700", hoverLabel: { label: R }, icon: n.createElement(l.default, null), onPress: this._setAspectRatio(o), size: "medium" }), n.createElement(m.ZP, { "aria-label": Z, borderColor: "transparent", color: i === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: n.createElement(h.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), n.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: 1 === i ? "primary" : "gray700", hoverLabel: { label: L }, icon: n.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, s ? n.createElement(a.Z, { style: B.zoomContainer }, n.createElement(v.Z, { "aria-label": x, max: this._maxScale, maxIcon: n.createElement(d.default, { style: B.icon }), min: 0, minIcon: n.createElement(p.default, { style: B.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: i, width: n } = this._getMaskDimensions(),
                                { height: o, width: a } = _.Z.getCoverDimensions({ width: n, height: i }, t);
                            return { width: a * Math.pow(2, e), height: o * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: i } = this.state,
                                { height: n, width: o } = _.Z.getContainDimensions({ width: i - 50, height: t - 50 }, e);
                            return { width: o, height: n };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: i } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: i }) : (this.setState({ containerHeight: t, containerWidth: i }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: i } = this._getImageDimensions(),
                                { width: n } = this._getMaskDimensions(),
                                o = i / t.width,
                                a = I(n / (e.width * o));
                            this.setState({ imageScale: a });
                            const { left: s, top: r } = this._getUnscaledCropData();
                            (this._panStyles.top = r - e.top * o * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = s - e.left * o * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, i, n) => {
                            const o = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + o, 0));
                                return (this._panStyles.left += i * (t - e)), (this._panStyles.top += n * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, i, n, o) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const s = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (s - e) + n), (this._panStyles.top += i * (s - e) + o), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: s };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                i = e.left,
                                n = e.top,
                                o = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let s = !1;
                            i < 0 && ((s = !0), (this._panStyles.left += i), (this._previousLeft += i)), n < 0 && ((s = !0), (this._panStyles.top += n), (this._previousTop += n)), o > 0 && ((s = !0), (this._panStyles.left += o), (this._previousLeft += o)), a > 0 && ((s = !0), (this._panStyles.top += a), (this._previousTop += a)), s && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: i } = this.state,
                                n = i?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            n !== a &&
                                (0, o.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: i, width: n } = this._getMaskDimensions(),
                                { left: o, top: a } = this._panStyles;
                            return { top: (e - i) / 2 - a, left: (t - n) / 2 - o, width: n, height: i };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(I(t.width / 150), I(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: i } = this.props,
                        { transformStyle: o } = this.state,
                        { height: s, width: r } = this._getImageDimensions(),
                        { height: l, width: h } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return n.createElement(a.Z, { style: B.container }, n.createElement(M, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: i ? this._handlePinchMove : void 0, onWheel: i ? this._handleWheel : void 0, style: B.root }, c ? n.createElement(n.Fragment, null, n.createElement(g.Z, { source: { uri: t.src, width: r, height: s }, style: [B.image, o] }), n.createElement(w, { circle: e, height: l, width: h })) : null), c ? this._renderControls() : null);
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
            const B = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                H = W;
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                o = i(325686),
                a = i(191796),
                s = i(58399),
                r = i(731708),
                l = i(952428),
                h = i(392237);
            const c = (e) => {
                    const { decoration: t, description: i, disabled: c = !1, isActive: p = !1, label: u, link: m, onPress: g, paddingHorizontal: _, renderRightContent: v, role: f = "tab", styleOverride: y, testID: S = "pivot", thumbnail: w, thumbnailSize: b, withoutArrow: C = !1 } = e,
                        P = [d.thumbnailContainer, "medium" === b && d.thumbnailContainerMedium],
                        E = "string" == typeof u ? n.createElement(r.ZP, null, u) : u,
                        M = "object" == typeof m && m.external && !m.openInSameFrame,
                        x = i ? ("string" == typeof i ? n.createElement(r.ZP, { color: "gray700", size: "subtext2", testID: `${S}-description` }, i) : i) : null,
                        D = n.useMemo(() => ("space0" === _ ? { paddingHorizontal: 0 } : { paddingHorizontal: _ ? h.default.theme.spaces[_] : h.default.theme.componentDimensions.gutterHorizontal }), [_]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === f ? p : null, disabled: c, link: c ? void 0 : m, onPress: g, role: f, style: [d.root, D, c && d.disabled, y], testID: S, withInteractiveStyling: !!m || !!g }, n.createElement(o.Z, { style: d.contentContainer }, w ? n.createElement(o.Z, { style: P }, w) : null, n.createElement(o.Z, { style: d.content }, E, x), v ? v() : null, (!m && !g) || c || C ? null : M ? n.createElement(a.default, { style: d.icon }) : n.createElement(s.default, { style: d.icon })), t);
                },
                d = h.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${h.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = i(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        293615: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                a = i(783427),
                s = i(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        58399: (e, t, i) => {
            i.r(t), i.d(t, { default: () => h });
            var n = i(202784),
                o = i(890601),
                a = i(783427),
                s = i(717683),
                r = i(347101);
            const l = (e = {}) => {
                const t = n.useContext(s.Z),
                    { direction: i } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style, t && r.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: i });
            };
            l.metadata = { width: 24, height: 24 };
            const h = l;
        },
        158910: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                o = i(890601),
                a = i(783427),
                s = i(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm8-1V7.5h2V10h2.5v2H12v2.5h-2V12H7.5v-2H10z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfile-6107ac1a.875838ca.js.map
