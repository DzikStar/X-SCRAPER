(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-6107ac1a"],
    {
        879113: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => d });
            var i = o(202784),
                s = o(476984),
                n = o.n(s),
                r = o(143778),
                a = o(750410),
                h = o(682830);
            const c = "failed",
                l = "loaded",
                u = "loading",
                m = "none";
            class d extends i.Component {
                shouldComponentUpdate(t) {
                    const e = t.fetchStatus === l,
                        o = this.props.fetchStatus !== t.fetchStatus;
                    return !(!e && !o) || !n()(t, this.props);
                }
                render() {
                    const { "aria-label": t, color: e, failureMessage: o, fetchStatus: s, icon: n, loadingMessage: r, onRequestRetry: l, render: d, renderFailure: p, retryMessage: _, retryable: g } = this.props;
                    switch (s) {
                        case c:
                            return g ? i.createElement(a.Z, { icon: n, onRequestRetry: l, retryMessage: _ }) : o ? i.createElement(h.m, { failureMessage: o }) : p();
                        case u:
                            return i.createElement(h.J, { "aria-label": t, color: e, loadingMessage: r });
                        case m:
                            return null;
                        default:
                            return d();
                    }
                }
            }
            d.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        401339: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => n });
            const i = {},
                s = ["touchend", "touchmove", "touchstart"];
            const n = {
                isTouchSupported: () =>
                    s.some(
                        (t) =>
                            !!(function (t, e) {
                                if (void 0 !== i[t]) return i[t];
                                const o = document.createElement(e || "div"),
                                    s = `on${t}`;
                                let n = s in o;
                                return n || (o.setAttribute(s, "return;"), (n = "function" == typeof o[s])), (i[t] = n), n;
                            })(t),
                    ),
            };
        },
        7022: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => v });
            var i = o(202784),
                s = o(196001),
                n = o(325686),
                r = o(837880),
                a = o(516951),
                h = o(933895),
                c = o(392237);
            const l = o(401339).Z.isTouchSupported(),
                u = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                m = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                d = (t, e, o) => Math.min(e, Math.max(t, o)),
                p = (t, e) => Math.sqrt(Math.pow(t.clientY - e.clientY, 2) + Math.pow(t.clientX - e.clientX, 2)),
                _ = (t, e) => ({ x: (t.clientX + e.clientX) / 2, y: (t.clientY + e.clientY) / 2 });
            class g extends i.Component {
                constructor(t) {
                    super(t),
                        (this._itemDimensions = m),
                        (this._ref = i.createRef()),
                        (this._setTouchableNode = (t) => {
                            this._touchableNode !== t && ((this._touchableNode = t), this._removeTouchListener && this._removeTouchListener(), this._touchableNode && (this._removeTouchListener = (0, h.O)(this._touchableNode, this._handleTouchMove, !1)));
                        }),
                        (this._isTouching = !1),
                        (this._handleTouchStart = (t) => {
                            this._ref.current && (this._zoomedDimensions = this._ref.current.getBoundingClientRect()), (this._moved = !1);
                            const e = t.touches.length;
                            (this._isTouching = !0), 2 === e ? (t.preventDefault(), this._handlePinchStart(t)) : 1 === e && this._handleTapStart(t);
                        }),
                        (this._handleTouchMove = (t) => {
                            const e = t.touches.length;
                            2 === e ? (t.preventDefault(), this._handlePinchMove(t)) : 1 === e && ((this._moved = !0), this._handlePanMove(t));
                        }),
                        (this._handleTouchEnd = (t) => {
                            const { maxZoom: e, minZoom: o, onTap: i } = this.props,
                                s = d(o, e, this.state.zoom),
                                { zoom: n } = this.state;
                            n !== s && 1 === s ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: s }), 0 === t.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > t.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(t)) : n <= 1 && !this._moved && (this._clickTimer = setTimeout(i, 300)), (this._lastTouchTime = t.timeStamp)) : t.preventDefault();
                        }),
                        (this.state = { ...u });
                }
                static getDerivedStateFromProps(t, e) {
                    return l && t.resetZoom ? (t.onZoomed(!1), { ...u }) : e;
                }
                render() {
                    if (!l) return this.props.children;
                    const { zoom: t, zoomCenter: e } = this.state,
                        o = this._moved,
                        r = { zoom: this._isTouching ? t : (0, s.ST)(t), zoomCenterX: this._isTouching ? e.x : (0, s.ST)(e.x), zoomCenterY: this._isTouching ? e.y : (0, s.ST)(e.y) };
                    return i.createElement(
                        n.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: f.fill },
                        i.createElement(s.y_, { style: r }, ({ zoom: t, zoomCenterX: s, zoomCenterY: r }) => i.createElement(n.Z, { ref: this._ref, style: [f.fill, { transform: [{ scale: t }], transformOrigin: `${o ? s : e.x}px ${o ? r : e.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    l && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: u.zoom });
                }
                _handlePanMove(t) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: e, clientY: o } = t.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: e, lastY: o });
                    const {
                            lastX: i,
                            lastY: s,
                            zoomCenter: { x: n, y: a },
                        } = this.state,
                        { height: h, width: c } = this._windowDimensions,
                        { height: l, width: u } = this._zoomedDimensions;
                    let m = 0,
                        d = 0;
                    u - c > 0 && (m = e - i), l - h > 0 && (d = o - s), this.setState({ lastX: e, lastY: o, zoomCenter: { x: (0, r.Z)(n - m, 0, c), y: (0, r.Z)(a - d, 0, h) } });
                }
                _handlePinchStart(t) {
                    const { touches: e } = t;
                    if ((this._updateWindowDimensions(), (this._lastDistance = p(e[0], e[1])), 1 === this.state.zoom)) {
                        const t = _(e[0], e[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(t.x, t.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(t) {
                    const { touches: e } = t,
                        { lastX: o, lastY: i, zoom: s, zoomCenter: n } = this.state,
                        { maxZoom: a, maxZoomBounce: h, minZoom: c, minZoomBounce: l } = this.props;
                    if (0 === n.x && 0 === n.y) return void (2 === t.touches.length && this._handlePinchStart(t));
                    const u = p(e[0], e[1]),
                        m = this._lastDistance ? u / this._lastDistance : 1,
                        g = d(c - l, a + h, s * m),
                        f = _(e[0], e[1]),
                        v = (() => {
                            if (!this._windowDimensions || !o) return n;
                            const { height: t, width: e } = this._windowDimensions;
                            return { x: (0, r.Z)(n.x - (f.x - o), 0, e), y: (0, r.Z)(n.y - (f.y - i), 0, t) };
                        })();
                    (this._lastDistance = u), this.setState({ lastX: f.x, lastY: f.y, zoom: g, zoomCenter: v });
                }
                _handleTapStart(t) {
                    const { touches: e } = t;
                    this._tapCenter = this._getZoomCenter(e[0].clientX, e[0].clientY);
                }
                _handleDoubleTap(t) {
                    const { maxZoom: e, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: e, zoomCenter: this._tapCenter || u.zoomCenter }), o(!0));
                }
                _getZoomCenter(t, e) {
                    this._ref.current && (this._itemDimensions = this._ref.current.getBoundingClientRect());
                    const { left: o, top: i } = this._itemDimensions;
                    return { x: t - o, y: e - i };
                }
                _updateWindowDimensions() {
                    this._windowDimensions = { height: window.innerHeight, width: window.innerWidth };
                }
            }
            g.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const f = c.default.create((t) => ({ fill: { flex: 1 } })),
                v = g;
        },
        355586: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, { default: () => h });
            var i = o(202784),
                s = o(890601),
                n = o(783427),
                r = o(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, n.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const h = a;
        },
        913315: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, { default: () => h });
            var i = o(202784),
                s = o(890601),
                n = o(783427),
                r = o(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, n.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: e });
            };
            a.metadata = { width: 24, height: 24 };
            const h = a;
        },
        549755: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => i });
            o(571372);
            class i extends Error {
                constructor(t, e, o) {
                    super(t), (this.code = e), (this.type = o || null);
                }
            }
        },
        122123: (t, e, o) => {
            "use strict";
            o.d(e, { gK: () => s, o2: () => r, po: () => n });
            var i = o(549755);
            const s = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function n(t) {
                return new Promise((e, o) => {
                    const n = (t, e) => {
                            const n = new i.Z(t, e, s.type);
                            o(n);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? e(r) : n("Image lacks height or width", s.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            n("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
            function r(t) {
                return new Promise((e, o) => {
                    const n = (t, e) => {
                            const n = new i.Z(t, e, s.type);
                            o(n);
                        },
                        r = new Image();
                    r.setAttribute("crossorigin", "anonymous"),
                        (r.onload = () => {
                            if (r.width && r.height) {
                                const t = document.createElement("canvas"),
                                    o = t.getContext("2d");
                                (t.width = r.width),
                                    (t.height = r.height),
                                    o.drawImage(r, 0, 0),
                                    t.toBlob((t) => {
                                        if (t) {
                                            const o = new File([t], "file.jpg", { type: "image/jpeg" });
                                            e(o);
                                        } else n("Failed to convert image to blob", s.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else n("Image lacks height or width", s.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            n("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
        },
        666536: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => n });
            var i = o(936386),
                s = o.n(i);
            const n = (t, e, o) => s()(t, e, o);
        },
        730895: (t, e, o) => {
            "use strict";
            var i = o(821176);
            t.exports = function () {
                var t = i(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        890103: (t, e, o) => {
            "use strict";
            var i = o(609859),
                s = o(807400),
                n = o(396616),
                r = o(730895),
                a = o(824229),
                h = i.RegExp,
                c = h.prototype;
            s &&
                a(function () {
                    var t = !0;
                    try {
                        h(".", "d");
                    } catch (e) {
                        t = !1;
                    }
                    var e = {},
                        o = "",
                        i = t ? "dgimsy" : "gimsy",
                        s = function (t, i) {
                            Object.defineProperty(e, t, {
                                get: function () {
                                    return (o += i), !0;
                                },
                            });
                        },
                        n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (t && (n.hasIndices = "d"), n)) s(r, n[r]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(e) !== i || o !== i;
                }) &&
                n(c, "flags", { configurable: !0, get: r });
        },
        936386: (t) => {
            function e(t, e, o) {
                var i, s, n, r, a;
                function h() {
                    var c = Date.now() - r;
                    c < e && c >= 0 ? (i = setTimeout(h, e - c)) : ((i = null), o || ((a = t.apply(n, s)), (n = s = null)));
                }
                null == e && (e = 100);
                var c = function () {
                    (n = this), (s = arguments), (r = Date.now());
                    var c = o && !i;
                    return i || (i = setTimeout(h, e)), c && ((a = t.apply(n, s)), (n = s = null)), a;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((a = t.apply(n, s)), (n = s = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (e.debounce = e), (t.exports = e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-6107ac1a.8da61e7a.js.map
