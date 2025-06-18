"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-bc6ccf4c", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconAtBold-js", "icons/IconBook-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
    {
        661810: (e, t, o) => {
            o.d(t, { Z: () => s });
            var i = o(202784),
                r = o(325686),
                n = o(392237);
            function s({ spacing: e, style: t }) {
                return i.createElement(r.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                r = o(325686),
                n = o(235902),
                s = o(885015),
                a = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? h[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? i.createElement(s.Z, { style: !t && h.root, withGutter: !0 }, i.createElement(r.Z, { style: h.gapColumn }, i.createElement(r.Z, { style: [h.gap, c] })), i.createElement(r.Z, { style: h.gapText }, o), i.createElement(r.Z, { style: h.gapColumn }, i.createElement(r.Z, { style: [h.gap, c] }))) : i.createElement(r.Z, { style: [!t && h.root, l() && h.rootRedesign, h.gap, c] });
            }
            const h = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => h });
            var i = o(807896),
                r = o(202784),
                n = o(325686),
                s = o(392237);
            class a extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...s } = this.props,
                        a = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return r.createElement(n.Z, (0, i.Z)({ style: [t, l.root, o && l.withGutter] }, s), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                h = a;
        },
        7022: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var i = o(202784),
                r = o(196001),
                n = o(325686),
                s = o(837880),
                a = o(516951),
                l = o(933895),
                h = o(392237);
            const c = o(401339).Z.isTouchSupported(),
                d = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                m = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                u = (e, t, o) => Math.min(t, Math.max(e, o)),
                v = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class p extends i.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = m),
                        (this._ref = i.createRef()),
                        (this._setTouchableNode = (e) => {
                            this._touchableNode !== e && ((this._touchableNode = e), this._removeTouchListener && this._removeTouchListener(), this._touchableNode && (this._removeTouchListener = (0, l.O)(this._touchableNode, this._handleTouchMove, !1)));
                        }),
                        (this._isTouching = !1),
                        (this._handleTouchStart = (e) => {
                            this._ref.current && (this._zoomedDimensions = this._ref.current.getBoundingClientRect()), (this._moved = !1);
                            const t = e.touches.length;
                            (this._isTouching = !0), 2 === t ? (e.preventDefault(), this._handlePinchStart(e)) : 1 === t && this._handleTapStart(e);
                        }),
                        (this._handleTouchMove = (e) => {
                            const t = e.touches.length;
                            2 === t ? (e.preventDefault(), this._handlePinchMove(e)) : 1 === t && ((this._moved = !0), this._handlePanMove(e));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { maxZoom: t, minZoom: o, onTap: i } = this.props,
                                r = u(o, t, this.state.zoom),
                                { zoom: n } = this.state;
                            n !== r && 1 === r ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: r }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : n <= 1 && !this._moved && (this._clickTimer = setTimeout(i, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...d });
                }
                static getDerivedStateFromProps(e, t) {
                    return c && e.resetZoom ? (e.onZoomed(!1), { ...d }) : t;
                }
                render() {
                    if (!c) return this.props.children;
                    const { zoom: e, zoomCenter: t } = this.state,
                        o = this._moved,
                        s = { zoom: this._isTouching ? e : (0, r.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, r.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, r.ST)(t.y) };
                    return i.createElement(
                        n.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: Z.fill },
                        i.createElement(r.y_, { style: s }, ({ zoom: e, zoomCenterX: r, zoomCenterY: s }) => i.createElement(n.Z, { ref: this._ref, style: [Z.fill, { transform: [{ scale: e }], transformOrigin: `${o ? r : t.x}px ${o ? s : t.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    c && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: d.zoom });
                }
                _handlePanMove(e) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: t, clientY: o } = e.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: t, lastY: o });
                    const {
                            lastX: i,
                            lastY: r,
                            zoomCenter: { x: n, y: a },
                        } = this.state,
                        { height: l, width: h } = this._windowDimensions,
                        { height: c, width: d } = this._zoomedDimensions;
                    let m = 0,
                        u = 0;
                    d - h > 0 && (m = t - i), c - l > 0 && (u = o - r), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, s.Z)(n - m, 0, h), y: (0, s.Z)(a - u, 0, l) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = v(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = g(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: o, lastY: i, zoom: r, zoomCenter: n } = this.state,
                        { maxZoom: a, maxZoomBounce: l, minZoom: h, minZoomBounce: c } = this.props;
                    if (0 === n.x && 0 === n.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const d = v(t[0], t[1]),
                        m = this._lastDistance ? d / this._lastDistance : 1,
                        p = u(h - c, a + l, r * m),
                        Z = g(t[0], t[1]),
                        _ = (() => {
                            if (!this._windowDimensions || !o) return n;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, s.Z)(n.x - (Z.x - o), 0, t), y: (0, s.Z)(n.y - (Z.y - i), 0, e) };
                        })();
                    (this._lastDistance = d), this.setState({ lastX: Z.x, lastY: Z.y, zoom: p, zoomCenter: _ });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || d.zoomCenter }), o(!0));
                }
                _getZoomCenter(e, t) {
                    this._ref.current && (this._itemDimensions = this._ref.current.getBoundingClientRect());
                    const { left: o, top: i } = this._itemDimensions;
                    return { x: e - o, y: t - i };
                }
                _updateWindowDimensions() {
                    this._windowDimensions = { height: window.innerHeight, width: window.innerWidth };
                }
            }
            p.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const Z = h.default.create((e) => ({ fill: { flex: 1 } })),
                _ = p;
        },
        388941: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        355586: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        899174: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.909 4.14C9.541 4.05 9.157 4 8.766 4H1.002v16h8.146c.758 0 1.45.43 1.789 1.11l.065.13V5.76c0-.73-.388-1.44-1.093-1.62zM8 15H4v-2h4v2zm0-4H4V9h4v2zm7.238-7c-.391 0-.774.05-1.143.14-.705.18-1.093.89-1.093 1.62v15.49c.461-.82 1.076-1.25 1.854-1.25h8.146V4h-7.764zM20 15h-4v-2h4v2zm0-4h-4V9h4v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        416276: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        738398: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        194417: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        913315: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        856661: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        89085: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        946474: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        465233: (e, t, o) => {
            o.d(t, { Z: () => r });
            var i = o(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, i.Z)(e, (e) => r(e));
            }
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => r, Z: () => i });
            o(136728);
            const i = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (o, i, r) => {
                        const n = t ? t(i, r, e) : !!i;
                        return n && o[0].push(i), !n && o[1].push(i), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-bc6ccf4c.c9ee37aa.js.map
