"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-bc6ccf4c"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(202784),
                r = n(325686),
                o = n(392237);
            function a({ spacing: e, style: t }) {
                return i.createElement(r.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        557707: (e, t, n) => {
            n.d(t, { ZP: () => b });
            var i = n(807896),
                r = n(202784),
                o = n(466999),
                a = n(325686),
                s = n(674132),
                l = n.n(s),
                c = n(837020),
                h = n(540820),
                d = n(731708),
                g = n(154003),
                u = n(108362),
                m = n(661810),
                p = n(365023),
                w = n(292627),
                f = n(537392),
                E = n(392237);
            const y = l().af8fa2ae,
                v = r.createElement(c.default, null);
            class _ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return r.createElement(a.Z, { role: "alert", style: E.default.visuallyHidden, testID: e }, r.createElement(o.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && r.createElement(h.default, { style: T.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && r.createElement(a.Z, null, r.createElement(d.ZP, { color: "whiteOnColor", style: T.titleText }, e.payload.message), r.createElement(m.Z, { spacing: "space12", style: T.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: n, withClearButton: i } = this.props;
                            return r.createElement(r.Fragment, null, r.createElement(d.ZP, { color: "whiteOnColor", style: T.titleText }, t), r.createElement(a.Z, { "aria-hidden": n, style: T.actionButtons }, e && this._renderActionLabel(e), i && r.createElement(g.ZP, { "aria-label": y, borderColor: "transparent", color: "white", icon: v, onPress: this._handleClose, style: T.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return r.createElement(r.Fragment, null, this._renderIcon(), r.createElement(a.Z, { style: T.body }, this._renderDecoration(), r.createElement(a.Z, { style: T.content }, e)));
                                    }
                                    case "jetfuel":
                                        return r.createElement(r.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return T.rootVariantJp;
                                    case "jetfuel":
                                        return T.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: n, testID: o, variant: s } = this.props,
                                l = n?.length ? [...n] : [n],
                                c = s ? this._renderVariantContent() : this._renderContent();
                            return r.createElement(
                                t,
                                null,
                                r.createElement(
                                    u.Z,
                                    { style: T.noPointerEvents },
                                    r.createElement(p.Z, { id: "Toast" }, (t, n) => r.createElement(a.Z, (0, i.Z)({ ref: t() }, n({ role: "alert", style: [T.root, s && this._getRootVariantStyle(), ...l, e > E.default.theme.breakpoints.medium && T.rootWide], testID: o })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return r.createElement(u.Z, null, r.createElement(a.Z, { role: "alert", style: [T.root, e > E.default.theme.breakpoints.medium && T.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: n, text: i, withAutoDismiss: r } = this.props;
                            if (r) {
                                const r = t || _.calculateDismissDelay(i, !!e);
                                this._timerId = setTimeout(n, r);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: t, onClose: n } = this.props;
                            t?.onAction && t.onAction(e), n(e);
                        }),
                        (this._handleClose = (e) => {
                            this._stopTimer(), this.props.onClose(e);
                        });
                }
                componentDidMount() {
                    this._createTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                render() {
                    const { ariaOnly: e, withoutLayer: t } = this.props;
                    return e ? this._renderAriaOnly() : r.createElement(f.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: n } = e;
                    return r.createElement(d.ZP, { children: t, color: "whiteOnColor", link: n, onClick: this._handleActionPress, style: [T.actionText, !n && T.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const n = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (n < 4e3 ? 4e3 : n) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            _.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: w.Z.ModalToasts };
            const T = E.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                b = _;
        },
        971657: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        19697: (e, t, n) => {
            n.d(t, { q8: () => c, $i: () => o });
            n(571372);
            var i = n(790187);
            const r = (e, t) => {
                const n = document.createElement("canvas");
                (n.width = e), (n.height = t);
                const i = n.getContext("2d");
                return (i.fillStyle = "#FFFFFF"), i.fillRect(0, 0, e, t), n;
            };
            function o(e, t, n, r, o) {
                return l(t, n).then(
                    (t) => (
                        (function (e, t, n, r, o, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = s.left,
                                c = s.top,
                                h = s.width,
                                d = s.height,
                                g = 0,
                                u = 0,
                                m = n,
                                p = r;
                            switch ((e.save(), o)) {
                                case i.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - s.width - s.left), (g = -n);
                                    break;
                                case i.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - s.width - s.left), (c = t.height - s.height - s.top), (g = -n), (u = -r);
                                    break;
                                case i.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - s.height - s.top), (u = -r);
                                    break;
                                case i.Z.LEFT_TOP:
                                    e.translate(n / 2, r / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = s.top), (c = s.left), (h = s.height), (d = s.width), (g = -r / 2), (u = -n / 2), (m = r), (p = n);
                                    break;
                                case i.Z.LEFT_BOTTOM:
                                    e.translate(n / 2, r / 2), e.rotate(Math.PI / 2), (l = s.top), (c = t.height - s.width - s.left), (h = s.height), (d = s.width), (g = -r / 2), (u = -n / 2), (m = r), (p = n);
                                    break;
                                case i.Z.RIGHT_BOTTOM:
                                    e.translate(n / 2, r / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - s.height - s.top), (c = t.height - s.width - s.left), (h = s.height), (d = s.width), (g = -r / 2), (u = -n / 2), (m = r), (p = n);
                                    break;
                                case i.Z.RIGHT_TOP:
                                    e.translate(n / 2, r / 2), e.rotate(-Math.PI / 2), (l = t.width - s.height - s.top), (c = s.left), (h = s.height), (d = s.width), (g = -r / 2), (u = -n / 2), (m = r), (p = n);
                            }
                            e.drawImage(t, l, c, h, d, g, u, m, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, r, o),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const n = r(e, t);
                    return c(n)
                        .then(() => n)
                        .catch(() => {
                            const n = e * t;
                            if (n > s) {
                                const n = h(s, e, t);
                                return l(n.width, n.height);
                            }
                            if (n > a) {
                                const n = h(a, e, t);
                                return l(n.width, n.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, n) => {
                    const i = e.toDataURL("image/jpeg");
                    i && "data:," !== i ? t(i) : n(new Error("Malformed canvas"));
                });
            }
            function h(e, t, n) {
                const i = Math.sqrt((e * n) / t),
                    r = (t * i) / n;
                return { height: Math.floor(i), width: Math.floor(r) };
            }
        },
        790187: (e, t, n) => {
            n.d(t, { C: () => o, Z: () => i });
            n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157);
            const i = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                r = (e, t, n = 65536) => {
                    let i = new Uint8Array([]),
                        r = 0;
                    function o(o, a, s) {
                        const l = o - r,
                            c = l + a;
                        if (l >= 0 && c <= i.length) s(i.subarray(l, c), o);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (i = new Uint8Array(this.result)), (r = o), s(i.subarray(0, a), o);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(o, o + Math.max(n, a)));
                        }
                    }
                    function a(e) {
                        const n = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === n) return void t(0);
                        function i(t, i) {
                            let r = 0;
                            for (let o = 0; o < i; o++) r = (r << 8) + e[t + (n ? o : i - 1 - o)];
                            return r;
                        }
                        const r = e.length > 8 && i(4, 4);
                        if (!r || r + 2 > e.length) return void t(0);
                        let o = i(r, 2);
                        if (r + 12 * o + 6 > e.length) return void t(0);
                        let a = r + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === i(a, 2) && 3 === i(a + 2, 2) && 1 === i(a + 4, 4))) return void t(i(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? o(0, 10, function e(n, i) {
                              const r = n[1];
                              if (n.length < 4 || 255 !== n[0] || 217 === r) return void t(0);
                              const s = r < 208 || r > 217 ? (n[2] << 8) + n[3] : 0;
                              225 === r && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, n.subarray(4, 10)) ? o(i + 10, s - 8, a) : o(i + 2 + s, 10, e);
                          })
                        : t(0);
                },
                o = (e, t) => {
                    const n = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        n
                            ? o(i.TOP_LEFT)
                            : r(
                                  e,
                                  (e) => {
                                      o(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, n) => {
            n.d(t, { Lw: () => r, Re: () => d, VJ: () => s, ZF: () => g, hv: () => l, ku: () => i, qp: () => o, uv: () => a, v5: () => h });
            n(571372), n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(543673), n(240753), n(128399);
            function i(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function r(e) {
                return new Promise((t, n) => {
                    const i = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== i.length) n(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, n] = i,
                                    r = atob(n),
                                    o = r.length,
                                    a = Array(o);
                                for (let e = 0; e < o; e++) a[e] = r.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else n(Error("The Uint8Array type is not available"));
                        else n(Error("The atob API is not available"));
                    else n(Error("The Blob API is not available"));
                });
            }
            const o = (e, t) =>
                    new Promise((n, i) => {
                        const r = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                r.abort?.(), i(Error(g));
                            }),
                            (r.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? n(e.target.result) : i(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (r.onerror = (e) => {
                                i(e);
                            }),
                            r.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const n = document.createElement("a");
                    (n.href = e), (n.download = t), (n.target = "_blank"), n.click(), n.remove();
                },
                s = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const n = new Image();
                            (n.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = n.width), (e.height = n.height), e.getContext("2d").drawImage(n, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (n.crossOrigin = "anonymous"),
                                (n.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let n = e,
                        i = 1;
                    for (; n && n.size > t; )
                        try {
                            i > 0.2 ? ((i *= 0.7), (n = await c(n, 1, i))) : (n = await c(n, 0.7, i));
                        } catch (e) {
                            n = void 0;
                        }
                    return n;
                },
                c = (e, t, n) =>
                    new Promise((i, r) => {
                        const o = new Image();
                        (o.onload = () => {
                            const e = document.createElement("canvas"),
                                r = e.getContext("2d"),
                                a = o.width * t,
                                s = o.height * t;
                            (e.width = a),
                                (e.height = s),
                                r.drawImage(o, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        i(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    n,
                                );
                        }),
                            (o.onerror = () => r(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(e));
                    }),
                h = ["image/jpeg", "image/png", "image/webp"],
                d = "image/gif",
                g = "Reading aborted";
        },
        549755: (e, t, n) => {
            n.d(t, { Z: () => i });
            n(571372);
            class i extends Error {
                constructor(e, t, n) {
                    super(e), (this.code = t), (this.type = n || null);
                }
            }
        },
        205074: (e, t, n) => {
            n.d(t, { DS: () => s, ZP: () => l });
            n(543673), n(240753), n(128399);
            var i = n(790187),
                r = n(276259),
                o = n(122123);
            function a(e, t) {
                const n = (function (e) {
                        return [i.Z.LEFT_BOTTOM, i.Z.LEFT_TOP, i.Z.RIGHT_BOTTOM, i.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [r, o] = n ? [e.height, e.width] : [e.width, e.height];
                return { width: r, height: o };
            }
            const s = (e) => {
                const t = e instanceof l,
                    n = e.isImage || e.isGif,
                    i = e.orientation,
                    r = e.width && e.height,
                    o = e.img;
                return !!(t && n && i && r && o);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === r.Re), (this.isImage = r.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: n, width: i } = a(e, t);
                                  return (this.img = e), (this.width = i), (this.height = n), (this.orientation = t), this;
                              };
                              return (0, i.C)(this.fileHandle)
                                  .then((e) => t(e === i.Z.UNKNOWN ? i.Z.TOP_LEFT : e))
                                  .catch(() => t(i.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, n) => {
            n.d(t, { gK: () => r, o2: () => a, po: () => o });
            var i = n(549755);
            const r = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(e) {
                return new Promise((t, n) => {
                    const o = (e, t) => {
                            const o = new i.Z(e, t, r.type);
                            n(o);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : o("Image lacks height or width", r.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, n) => {
                    const o = (e, t) => {
                            const o = new i.Z(e, t, r.type);
                            n(o);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    n = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    n.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const n = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(n);
                                        } else o("Failed to convert image to blob", r.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", r.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, n) => {
            n.d(t, { Q: () => l, S: () => s });
            var i = n(332775),
                r = n.n(i),
                o = n(276259),
                a = n(549755);
            const s = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, o.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === o.ZF ? s.HASHING_ABORTED : s.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = r()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", s.INVALID_HASH);
                        });
        },
        653843: (e, t, n) => {
            n.d(t, { Y7: () => u, ZP: () => _, m2: () => E });
            var i = n(19697),
                r = n(790187),
                o = n(549755),
                a = n(205074),
                s = n(276259);
            function l(e, { maxDimension: t, maxFileSize: n, targetQuality: i }) {
                return (function (e, t, n, i) {
                    function r(o, a) {
                        return c(e, e.width, e.height, o, a).then((e) => {
                            const l = e.width > n || e.height > n,
                                c = e.toDataURL("image/jpeg", i),
                                h = c.split(";base64,")[1],
                                d = (0, s.ku)(h);
                            if (l || d > t) {
                                let e = 0.8;
                                return l && (e = o > a ? n / o : n / a), r(o * e, a * e);
                            }
                            return c;
                        });
                    }
                    return r(e.width, e.height);
                })(e, n, t, i).then(s.Lw);
            }
            function c(e, t, n, r, o) {
                const a = t / 2,
                    s = n / 2;
                return e instanceof HTMLCanvasElement && t <= r && n <= o ? Promise.resolve(e) : a <= r && s <= o ? (0, i.$i)(e, r, o) : (0, i.$i)(e, a, s).then((e) => c(e, e.width, e.height, r, o));
            }
            const h = 5242880,
                d = 4096,
                g = 0.85,
                u = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (e) => e.orientation !== r.Z.TOP_LEFT && e.orientation !== r.Z.UNKNOWN,
                p = (e, t = h, n = d) => {
                    const { height: i, size: r, width: o } = e;
                    return o > n || i > n || r > t;
                },
                w = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                f = (e, t) => {
                    const { height: n, left: i, top: r, width: o } = w(e, t);
                    return !(0 === r && 0 === i && o === e.width && n === e.height);
                };
            function E(e, t) {
                const { maxFileSize: n = h, maxDimension: i = d, cropData: r, jpgPixelsPerByteForResize: o } = t || {},
                    a = "image/jpeg" === e.type,
                    s = (e.width * e.height) / e.size;
                return m(e) || p(e, n, i) || f(e, r) || (a && !!o && s < o);
            }
            const y = (e, t) => {
                    const { height: n, width: i } = e;
                    return i <= t && n <= t ? { width: i, height: n } : i > n ? { width: t, height: Math.round(n / (i / t)) } : { width: Math.round(i / (n / t)), height: t };
                },
                v = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function _(e, t) {
                const { maxFileSize: n = h, maxDimension: r = d, targetQuality: s = g, cropData: c } = t || {},
                    m = w(e, c);
                if (!E(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new o.Z("The provided file is not a valid image", u.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new o.Z("Gifs cannot be processed.", u.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => l(e, { maxFileSize: n, maxDimension: r, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const n = ({ height: n, width: r }) => (0, i.$i)(e, r, n, t, m);
                        return v(e)
                            .then(() => ((e) => e(y(m, r)))(n))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new o.Z("Image cannot be processed", u.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-bc6ccf4c.58ba087a.js.map
