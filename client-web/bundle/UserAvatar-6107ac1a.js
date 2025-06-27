(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-6107ac1a"],
    {
        879113: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => d });
            var i = o(202784),
                n = o(476984),
                s = o.n(n),
                r = o(143778),
                a = o(750410),
                h = o(682830);
            const l = "failed",
                c = "loaded",
                m = "loading",
                u = "none";
            class d extends i.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: s, loadingMessage: r, onRequestRetry: c, render: d, renderFailure: g, retryMessage: p, retryable: _ } = this.props;
                    switch (n) {
                        case l:
                            return _ ? i.createElement(a.Z, { icon: s, onRequestRetry: c, retryMessage: p }) : o ? i.createElement(h.m, { failureMessage: o }) : g();
                        case m:
                            return i.createElement(h.J, { "aria-label": e, color: t, loadingMessage: r });
                        case u:
                            return null;
                        default:
                            return d();
                    }
                }
            }
            d.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        7022: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => w });
            var i = o(202784),
                n = o(196001),
                s = o(325686),
                r = o(837880),
                a = o(516951),
                h = o(933895),
                l = o(392237);
            const c = o(401339).Z.isTouchSupported(),
                m = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                u = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                d = (e, t, o) => Math.min(t, Math.max(e, o)),
                g = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                p = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class _ extends i.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = u),
                        (this._ref = i.createRef()),
                        (this._setTouchableNode = (e) => {
                            this._touchableNode !== e && ((this._touchableNode = e), this._removeTouchListener && this._removeTouchListener(), this._touchableNode && (this._removeTouchListener = (0, h.O)(this._touchableNode, this._handleTouchMove, !1)));
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
                                n = d(o, t, this.state.zoom),
                                { zoom: s } = this.state;
                            s !== n && 1 === n ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: n }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : s <= 1 && !this._moved && (this._clickTimer = setTimeout(i, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...m });
                }
                static getDerivedStateFromProps(e, t) {
                    return c && e.resetZoom ? (e.onZoomed(!1), { ...m }) : t;
                }
                render() {
                    if (!c) return this.props.children;
                    const { zoom: e, zoomCenter: t } = this.state,
                        o = this._moved,
                        r = { zoom: this._isTouching ? e : (0, n.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, n.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, n.ST)(t.y) };
                    return i.createElement(
                        s.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: f.fill },
                        i.createElement(n.y_, { style: r }, ({ zoom: e, zoomCenterX: n, zoomCenterY: r }) => i.createElement(s.Z, { ref: this._ref, style: [f.fill, { transform: [{ scale: e }], transformOrigin: `${o ? n : t.x}px ${o ? r : t.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    c && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: m.zoom });
                }
                _handlePanMove(e) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: t, clientY: o } = e.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: t, lastY: o });
                    const {
                            lastX: i,
                            lastY: n,
                            zoomCenter: { x: s, y: a },
                        } = this.state,
                        { height: h, width: l } = this._windowDimensions,
                        { height: c, width: m } = this._zoomedDimensions;
                    let u = 0,
                        d = 0;
                    m - l > 0 && (u = t - i), c - h > 0 && (d = o - n), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - u, 0, l), y: (0, r.Z)(a - d, 0, h) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = g(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = p(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: o, lastY: i, zoom: n, zoomCenter: s } = this.state,
                        { maxZoom: a, maxZoomBounce: h, minZoom: l, minZoomBounce: c } = this.props;
                    if (0 === s.x && 0 === s.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const m = g(t[0], t[1]),
                        u = this._lastDistance ? m / this._lastDistance : 1,
                        _ = d(l - c, a + h, n * u),
                        f = p(t[0], t[1]),
                        w = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (f.x - o), 0, t), y: (0, r.Z)(s.y - (f.y - i), 0, e) };
                        })();
                    (this._lastDistance = m), this.setState({ lastX: f.x, lastY: f.y, zoom: _, zoomCenter: w });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || m.zoomCenter }), o(!0));
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
            _.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const f = l.default.create((e) => ({ fill: { flex: 1 } })),
                w = _;
        },
        784732: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => h });
            var i = o(202784),
                n = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const h = a;
        },
        276259: (e, t, o) => {
            "use strict";
            o.d(t, { Lw: () => n, Re: () => m, VJ: () => a, ZF: () => u, hv: () => h, ku: () => i, qp: () => s, uv: () => r, v5: () => c });
            o(571372), o(875640), o(694898), o(38857), o(540171), o(157093), o(265688), o(270315), o(592529), o(86943), o(691157), o(543673), o(240753), o(128399);
            function i(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function n(e) {
                return new Promise((t, o) => {
                    const i = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== i.length) o(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, o] = i,
                                    n = atob(o),
                                    s = n.length,
                                    r = Array(s);
                                for (let e = 0; e < s; e++) r[e] = n.charCodeAt(e);
                                t(new Blob([new Uint8Array(r)], { type: e }));
                            } else o(Error("The Uint8Array type is not available"));
                        else o(Error("The atob API is not available"));
                    else o(Error("The Blob API is not available"));
                });
            }
            const s = (e, t) =>
                    new Promise((o, i) => {
                        const n = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                n.abort?.(), i(Error(u));
                            }),
                            (n.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? o(e.target.result) : i(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (n.onerror = (e) => {
                                i(e);
                            }),
                            n.readAsArrayBuffer(e);
                    }),
                r = (e, t) => {
                    const o = document.createElement("a");
                    (o.href = e), (o.download = t), (o.target = "_blank"), o.click(), o.remove();
                },
                a = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const o = new Image();
                            (o.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = o.width), (e.height = o.height), e.getContext("2d").drawImage(o, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (o.crossOrigin = "anonymous"),
                                (o.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                h = async (e, t) => {
                    if (e.size <= t) return e;
                    let o = e,
                        i = 1;
                    for (; o && o.size > t; )
                        try {
                            i > 0.2 ? ((i *= 0.7), (o = await l(o, 1, i))) : (o = await l(o, 0.7, i));
                        } catch (e) {
                            o = void 0;
                        }
                    return o;
                },
                l = (e, t, o) =>
                    new Promise((i, n) => {
                        const s = new Image();
                        (s.onload = () => {
                            const e = document.createElement("canvas"),
                                n = e.getContext("2d"),
                                r = s.width * t,
                                a = s.height * t;
                            (e.width = r),
                                (e.height = a),
                                n.drawImage(s, 0, 0, r, a),
                                e.toBlob(
                                    (e) => {
                                        i(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    o,
                                );
                        }),
                            (s.onerror = () => n(new Error("Failed to load image while resizing"))),
                            (s.src = URL.createObjectURL(e));
                    }),
                c = ["image/jpeg", "image/png", "image/webp"],
                m = "image/gif",
                u = "Reading aborted";
        },
        549755: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            o(571372);
            class i extends Error {
                constructor(e, t, o) {
                    super(e), (this.code = t), (this.type = o || null);
                }
            }
        },
        122123: (e, t, o) => {
            "use strict";
            o.d(t, { gK: () => n, o2: () => r, po: () => s });
            var i = o(549755);
            const n = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function s(e) {
                return new Promise((t, o) => {
                    const s = (e, t) => {
                            const s = new i.Z(e, t, n.type);
                            o(s);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? t(r) : s("Image lacks height or width", n.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            s("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
            function r(e) {
                return new Promise((t, o) => {
                    const s = (e, t) => {
                            const s = new i.Z(e, t, n.type);
                            o(s);
                        },
                        r = new Image();
                    r.setAttribute("crossorigin", "anonymous"),
                        (r.onload = () => {
                            if (r.width && r.height) {
                                const e = document.createElement("canvas"),
                                    o = e.getContext("2d");
                                (e.width = r.width),
                                    (e.height = r.height),
                                    o.drawImage(r, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const o = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(o);
                                        } else s("Failed to convert image to blob", n.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else s("Image lacks height or width", n.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            s("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            var i = o(936386),
                n = o.n(i);
            const s = (e, t, o) => n()(e, t, o);
        },
        730895: (e, t, o) => {
            "use strict";
            var i = o(821176);
            e.exports = function () {
                var e = i(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, o) => {
            "use strict";
            var i = o(609859),
                n = o(807400),
                s = o(396616),
                r = o(730895),
                a = o(824229),
                h = i.RegExp,
                l = h.prototype;
            n &&
                a(function () {
                    var e = !0;
                    try {
                        h(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        o = "",
                        i = e ? "dgimsy" : "gimsy",
                        n = function (e, i) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (o += i), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (e && (s.hasIndices = "d"), s)) n(r, s[r]);
                    return Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== i || o !== i;
                }) &&
                s(l, "flags", { configurable: !0, get: r });
        },
        936386: (e) => {
            function t(e, t, o) {
                var i, n, s, r, a;
                function h() {
                    var l = Date.now() - r;
                    l < t && l >= 0 ? (i = setTimeout(h, t - l)) : ((i = null), o || ((a = e.apply(s, n)), (s = n = null)));
                }
                null == t && (t = 100);
                var l = function () {
                    (s = this), (n = arguments), (r = Date.now());
                    var l = o && !i;
                    return i || (i = setTimeout(h, t)), l && ((a = e.apply(s, n)), (s = n = null)), a;
                };
                return (
                    (l.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (l.flush = function () {
                        i && ((a = e.apply(s, n)), (s = n = null), clearTimeout(i), (i = null));
                    }),
                    l
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-6107ac1a.fa1bd14a.js.map
