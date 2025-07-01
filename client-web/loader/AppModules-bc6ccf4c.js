"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-bc6ccf4c", "icons/IconXHeart-js"],
    {
        661810: (t, e, i) => {
            i.d(e, { Z: () => r });
            var s = i(202784),
                n = i(325686),
                o = i(392237);
            function r({ spacing: t, style: e }) {
                return s.createElement(n.Z, { role: "separator", style: [a.divider, { marginVertical: null != t ? o.default.theme.spaces[t] : void 0 }, e] });
            }
            const a = o.default.create((t) => ({ divider: { backgroundColor: t.colors.borderColor, height: t.borderWidths.small } }));
        },
        557707: (t, e, i) => {
            i.d(e, { ZP: () => w });
            var s = i(807896),
                n = i(202784),
                o = i(466999),
                r = i(325686),
                a = i(111677),
                h = i.n(a),
                c = i(837020),
                l = i(540820),
                d = i(731708),
                u = i(154003),
                p = i(108362),
                m = i(661810),
                g = i(365023),
                f = i(292627),
                _ = i(537392),
                S = i(392237);
            const E = h().af8fa2ae,
                T = n.createElement(c.default, null);
            class y extends n.Component {
                constructor(...t) {
                    super(...t),
                        (this._renderAriaOnly = () => {
                            const { testID: t, text: e } = this.props;
                            return n.createElement(r.Z, { role: "alert", style: S.default.visuallyHidden, testID: t }, n.createElement(o.Z, null, e));
                        }),
                        (this._renderIcon = () => {
                            const { variant: t } = this.props;
                            return "jp-holiday-labor-thanksgiving" === t?.type && n.createElement(l.default, { style: I.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: t } = this.props;
                            return "jp-holiday-labor-thanksgiving" === t?.type && n.createElement(r.Z, null, n.createElement(d.ZP, { color: "whiteOnColor", style: I.titleText }, t.payload.message), n.createElement(m.Z, { spacing: "space12", style: I.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: t, text: e, withAutoDismiss: i, withClearButton: s } = this.props;
                            return n.createElement(n.Fragment, null, n.createElement(d.ZP, { color: "whiteOnColor", style: I.titleText }, e), n.createElement(r.Z, { "aria-hidden": i, style: I.actionButtons }, t && this._renderActionLabel(t), s && n.createElement(u.ZP, { "aria-label": E, borderColor: "transparent", color: "white", icon: T, onPress: this._handleClose, style: I.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: t } = this.props;
                            if (t)
                                switch (t.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const t = this._renderContent();
                                        return n.createElement(n.Fragment, null, this._renderIcon(), n.createElement(r.Z, { style: I.body }, this._renderDecoration(), n.createElement(r.Z, { style: I.content }, t)));
                                    }
                                    case "jetfuel":
                                        return n.createElement(n.Fragment, null, t.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: t } = this.props;
                            if (t)
                                switch (t.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return I.rootVariantJp;
                                    case "jetfuel":
                                        return I.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: t }) => {
                            const { LayerComponent: e, style: i, testID: o, variant: a } = this.props,
                                h = i?.length ? [...i] : [i],
                                c = a ? this._renderVariantContent() : this._renderContent();
                            return n.createElement(
                                e,
                                null,
                                n.createElement(
                                    p.Z,
                                    { style: I.noPointerEvents },
                                    n.createElement(g.Z, { id: "Toast" }, (e, i) => n.createElement(r.Z, (0, s.Z)({ ref: e() }, i({ role: "alert", style: [I.root, a && this._getRootVariantStyle(), ...h, t > S.default.theme.breakpoints.medium && I.rootWide], testID: o })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: t }) => {
                            const { testID: e } = this.props;
                            return n.createElement(p.Z, null, n.createElement(r.Z, { role: "alert", style: [I.root, t > S.default.theme.breakpoints.medium && I.rootWide], testID: e }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: t, autoDismissDelay: e, onClose: i, text: s, withAutoDismiss: n } = this.props;
                            if (n) {
                                const n = e || y.calculateDismissDelay(s, !!t);
                                this._timerId = setTimeout(i, n);
                            }
                        }),
                        (this._handleActionPress = (t) => {
                            this._stopTimer();
                            const { action: e, onClose: i } = this.props;
                            e?.onAction && e.onAction(t), i(t);
                        }),
                        (this._handleClose = (t) => {
                            this._stopTimer(), this.props.onClose(t);
                        });
                }
                componentDidMount() {
                    this._createTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                render() {
                    const { ariaOnly: t, withoutLayer: e } = this.props;
                    return t ? this._renderAriaOnly() : n.createElement(_.ZP, null, e ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(t) {
                    const { label: e, link: i } = t;
                    return n.createElement(d.ZP, { children: e, color: "whiteOnColor", link: i, onClick: this._handleActionPress, style: [I.actionText, !i && I.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(t, e) {
                    const i = (1e3 * ("string" == typeof t ? t.split(" ").length : 0)) / 5 + 225;
                    return (i < 4e3 ? 4e3 : i) + (e ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            y.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: f.Z.ModalToasts };
            const I = S.default.create((t) => ({ root: { alignItems: "center", backgroundColor: t.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: t.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: t.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: t.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: t.spaces.space12, backgroundColor: t.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: t.borderRadii.small, marginBottom: t.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: t.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: t.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: t.spaces.space12 }, closeButton: { marginStart: t.spaces.space12, paddingHorizontal: t.spaces.space4 } })),
                w = y;
        },
        540820: (t, e, i) => {
            i.r(e), i.d(e, { default: () => h });
            var s = i(202784),
                n = i(890601),
                o = i(783427),
                r = i(347101);
            const a = (t = {}) => {
                const { direction: e } = (0, o.Z)();
                return (0, n.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 50 50", children: s.createElement("g", null, s.createElement("path", { d: "M25.23 12.24l-2.1-2.1c-4.54-4.54-11.9-4.54-16.45 0h0c-4.54 4.54-4.54 11.9 0 16.45l18.55 18.55 16.45-16.45 2.1-2.1c4.54-4.54 4.54-11.9 0-16.45h0c-4.54-4.54-11.9-4.54-16.45 0l-2.1 2.1h0z", fill: "none", stroke: "#fff", strokeMiterlimit: "10" }), s.createElement("path", { d: "M26.86 23.19l6.39-7.29h-1.51l-5.55 6.33-4.43-6.33h-5.11l6.7 9.57-6.7 7.64h1.51l5.86-6.68 4.68 6.68h5.11l-6.95-9.92zm-2.07 2.37l-.68-.95-5.4-7.58h2.33l4.36 6.12.68.95 5.67 7.95h-2.33l-4.62-6.49z", fill: "#fff" })) }, { writingDirection: e });
            };
            a.metadata = { width: 50, height: 50 };
            const h = a;
        },
        19697: (t, e, i) => {
            i.d(e, { q8: () => c, $i: () => o });
            i(571372);
            var s = i(790187);
            const n = (t, e) => {
                const i = document.createElement("canvas");
                (i.width = t), (i.height = e);
                const s = i.getContext("2d");
                return (s.fillStyle = "#FFFFFF"), s.fillRect(0, 0, t, e), i;
            };
            function o(t, e, i, n, o) {
                return h(e, i).then(
                    (e) => (
                        (function (t, e, i, n, o, r) {
                            const a = r || { top: 0, left: 0, width: e.width, height: e.height };
                            let h = a.left,
                                c = a.top,
                                l = a.width,
                                d = a.height,
                                u = 0,
                                p = 0,
                                m = i,
                                g = n;
                            switch ((t.save(), o)) {
                                case s.Z.TOP_RIGHT:
                                    t.scale(-1, 1), (h = e.width - a.width - a.left), (u = -i);
                                    break;
                                case s.Z.BOTTOM_RIGHT:
                                    t.rotate(Math.PI), (h = e.width - a.width - a.left), (c = e.height - a.height - a.top), (u = -i), (p = -n);
                                    break;
                                case s.Z.BOTTOM_LEFT:
                                    t.scale(1, -1), (c = e.height - a.height - a.top), (p = -n);
                                    break;
                                case s.Z.LEFT_TOP:
                                    t.translate(i / 2, n / 2), t.rotate(-Math.PI / 2), t.scale(-1, 1), (h = a.top), (c = a.left), (l = a.height), (d = a.width), (u = -n / 2), (p = -i / 2), (m = n), (g = i);
                                    break;
                                case s.Z.LEFT_BOTTOM:
                                    t.translate(i / 2, n / 2), t.rotate(Math.PI / 2), (h = a.top), (c = e.height - a.width - a.left), (l = a.height), (d = a.width), (u = -n / 2), (p = -i / 2), (m = n), (g = i);
                                    break;
                                case s.Z.RIGHT_BOTTOM:
                                    t.translate(i / 2, n / 2), t.rotate(Math.PI / 2), t.scale(-1, 1), (h = e.width - a.height - a.top), (c = e.height - a.width - a.left), (l = a.height), (d = a.width), (u = -n / 2), (p = -i / 2), (m = n), (g = i);
                                    break;
                                case s.Z.RIGHT_TOP:
                                    t.translate(i / 2, n / 2), t.rotate(-Math.PI / 2), (h = e.width - a.height - a.top), (c = a.left), (l = a.height), (d = a.width), (u = -n / 2), (p = -i / 2), (m = n), (g = i);
                            }
                            t.drawImage(e, h, c, l, d, u, p, m, g), t.restore();
                        })(e.getContext("2d"), t, e.width, e.height, n, o),
                        e
                    ),
                );
            }
            const r = 3145728,
                a = 5242880;
            function h(t, e) {
                if (window.CanvasRenderingContext2D) {
                    const i = n(t, e);
                    return c(i)
                        .then(() => i)
                        .catch(() => {
                            const i = t * e;
                            if (i > a) {
                                const i = l(a, t, e);
                                return h(i.width, i.height);
                            }
                            if (i > r) {
                                const i = l(r, t, e);
                                return h(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(t) {
                return new Promise((e, i) => {
                    const s = t.toDataURL("image/jpeg");
                    s && "data:," !== s ? e(s) : i(new Error("Malformed canvas"));
                });
            }
            function l(t, e, i) {
                const s = Math.sqrt((t * i) / e),
                    n = (e * s) / i;
                return { height: Math.floor(s), width: Math.floor(n) };
            }
        },
        790187: (t, e, i) => {
            i.d(e, { C: () => o, Z: () => s });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const s = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                n = (t, e, i = 65536) => {
                    let s = new Uint8Array([]),
                        n = 0;
                    function o(o, r, a) {
                        const h = o - n,
                            c = h + r;
                        if (h >= 0 && c <= s.length) a(s.subarray(h, c), o);
                        else {
                            const h = new FileReader();
                            (h.onload = function () {
                                (s = new Uint8Array(this.result)), (n = o), a(s.subarray(0, r), o);
                            }),
                                (h.onerror = e.bind(null, 0)),
                                null !== t && h.readAsArrayBuffer(t.slice(o, o + Math.max(i, r)));
                        }
                    }
                    function r(t) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, t.subarray(0, 4))];
                        if (void 0 === i) return void e(0);
                        function s(e, s) {
                            let n = 0;
                            for (let o = 0; o < s; o++) n = (n << 8) + t[e + (i ? o : s - 1 - o)];
                            return n;
                        }
                        const n = t.length > 8 && s(4, 4);
                        if (!n || n + 2 > t.length) return void e(0);
                        let o = s(n, 2);
                        if (n + 12 * o + 6 > t.length) return void e(0);
                        let r = n + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === s(r, 2) && 3 === s(r + 2, 2) && 1 === s(r + 4, 4))) return void e(s(r + 8, 2));
                            r += 12;
                        }
                        e(0);
                    }
                    t instanceof Blob
                        ? o(0, 10, function t(i, s) {
                              const n = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === n) return void e(0);
                              const a = n < 208 || n > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === n && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? o(s + 10, a - 8, r) : o(s + 2 + a, 10, t);
                          })
                        : e(0);
                },
                o = (t, e) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        i
                            ? o(s.TOP_LEFT)
                            : n(
                                  t,
                                  (t) => {
                                      o(t);
                                  },
                                  e,
                              );
                    });
                };
        },
        276259: (t, e, i) => {
            i.d(e, { Lw: () => n, Re: () => d, VJ: () => a, ZF: () => u, hv: () => h, ku: () => s, qp: () => o, uv: () => r, v5: () => l });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function s(t) {
                const e = t.match(/=*$/);
                return e ? Math.floor(0.75 * (t.length - e[0].length)) : 0.75 * t.length;
            }
            function n(t) {
                return new Promise((e, i) => {
                    const s = t.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== s.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, t, i] = s,
                                    n = atob(i),
                                    o = n.length,
                                    r = Array(o);
                                for (let t = 0; t < o; t++) r[t] = n.charCodeAt(t);
                                e(new Blob([new Uint8Array(r)], { type: t }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const o = (t, e) =>
                    new Promise((i, s) => {
                        const n = new FileReader();
                        e &&
                            (e.signal.onabort = () => {
                                n.abort?.(), s(Error(u));
                            }),
                            (n.onload = (t) => {
                                t.target instanceof FileReader && t.target.result instanceof ArrayBuffer ? i(t.target.result) : s(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (n.onerror = (t) => {
                                s(t);
                            }),
                            n.readAsArrayBuffer(t);
                    }),
                r = (t, e) => {
                    const i = document.createElement("a");
                    (i.href = t), (i.download = e), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (t) =>
                    ((t) =>
                        new Promise((e) => {
                            const i = new Image();
                            (i.onload = function () {
                                const t = document.createElement("canvas");
                                (t.width = i.width), (t.height = i.height), t.getContext("2d").drawImage(i, 0, 0), t.toBlob((t) => e(t), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = t);
                        }))(t).then((t) => navigator.clipboard.write([new ClipboardItem({ "image/png": t })])),
                h = async (t, e) => {
                    if (t.size <= e) return t;
                    let i = t,
                        s = 1;
                    for (; i && i.size > e; )
                        try {
                            s > 0.2 ? ((s *= 0.7), (i = await c(i, 1, s))) : (i = await c(i, 0.7, s));
                        } catch (t) {
                            i = void 0;
                        }
                    return i;
                },
                c = (t, e, i) =>
                    new Promise((s, n) => {
                        const o = new Image();
                        (o.onload = () => {
                            const t = document.createElement("canvas"),
                                n = t.getContext("2d"),
                                r = o.width * e,
                                a = o.height * e;
                            (t.width = r),
                                (t.height = a),
                                n.drawImage(o, 0, 0, r, a),
                                t.toBlob(
                                    (t) => {
                                        s(new File([t], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (o.onerror = () => n(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(t));
                    }),
                l = ["image/jpeg", "image/png", "image/webp"],
                d = "image/gif",
                u = "Reading aborted";
        },
        549755: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(571372);
            class s extends Error {
                constructor(t, e, i) {
                    super(t), (this.code = e), (this.type = i || null);
                }
            }
        },
        205074: (t, e, i) => {
            i.d(e, { DS: () => a, ZP: () => h });
            i(543673), i(240753), i(128399);
            var s = i(790187),
                n = i(276259),
                o = i(122123);
            function r(t, e) {
                const i = (function (t) {
                        return [s.Z.LEFT_BOTTOM, s.Z.LEFT_TOP, s.Z.RIGHT_BOTTOM, s.Z.RIGHT_TOP].indexOf(t) >= 0;
                    })(e),
                    [n, o] = i ? [t.height, t.width] : [t.width, t.height];
                return { width: n, height: o };
            }
            const a = (t) => {
                const e = t instanceof h,
                    i = t.isImage || t.isGif,
                    s = t.orientation,
                    n = t.width && t.height,
                    o = t.img;
                return !!(e && i && s && n && o);
            };
            class h {
                constructor(t) {
                    (this.fileHandle = t), t instanceof File && (this.name = t.name), (this.size = t.size), (this.type = t.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === n.Re), (this.isImage = n.v5.some((t) => t === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((t) => {
                              const e = (e) => {
                                  const { height: i, width: s } = r(t, e);
                                  return (this.img = t), (this.width = s), (this.height = i), (this.orientation = e), this;
                              };
                              return (0, s.C)(this.fileHandle)
                                  .then((t) => e(t === s.Z.UNKNOWN ? s.Z.TOP_LEFT : t))
                                  .catch(() => e(s.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (t, e, i) => {
            i.d(e, { gK: () => n, o2: () => r, po: () => o });
            var s = i(549755);
            const n = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(t) {
                return new Promise((e, i) => {
                    const o = (t, e) => {
                            const o = new s.Z(t, e, n.type);
                            i(o);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? e(r) : o("Image lacks height or width", n.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            o("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
            function r(t) {
                return new Promise((e, i) => {
                    const o = (t, e) => {
                            const o = new s.Z(t, e, n.type);
                            i(o);
                        },
                        r = new Image();
                    r.setAttribute("crossorigin", "anonymous"),
                        (r.onload = () => {
                            if (r.width && r.height) {
                                const t = document.createElement("canvas"),
                                    i = t.getContext("2d");
                                (t.width = r.width),
                                    (t.height = r.height),
                                    i.drawImage(r, 0, 0),
                                    t.toBlob((t) => {
                                        if (t) {
                                            const i = new File([t], "file.jpg", { type: "image/jpeg" });
                                            e(i);
                                        } else o("Failed to convert image to blob", n.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", n.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            o("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = t);
                });
            }
        },
        514354: (t, e, i) => {
            i.d(e, { Q: () => h, S: () => a });
            var s = i(332775),
                n = i.n(s),
                o = i(276259),
                r = i(549755);
            const a = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                h = (t, e) =>
                    (0, o.qp)(t, e)
                        .catch((t) => {
                            throw new r.Z(`An error occurred while reading the image file: ${t}`, t.message === o.ZF ? a.HASHING_ABORTED : a.ERROR_READING_IMAGE_FILE);
                        })
                        .then((t) => {
                            const e = n()(t);
                            if (e && "string" == typeof e) return e;
                            throw new r.Z("Hash is not a non-empty string", a.INVALID_HASH);
                        });
        },
        653843: (t, e, i) => {
            i.d(e, { Y7: () => p, ZP: () => y, m2: () => S });
            var s = i(19697),
                n = i(790187),
                o = i(549755),
                r = i(205074),
                a = i(276259);
            function h(t, { maxDimension: e, maxFileSize: i, targetQuality: s }) {
                return (function (t, e, i, s) {
                    function n(o, r) {
                        return c(t, t.width, t.height, o, r).then((t) => {
                            const h = t.width > i || t.height > i,
                                c = t.toDataURL("image/jpeg", s),
                                l = c.split(";base64,")[1],
                                d = (0, a.ku)(l);
                            if (h || d > e) {
                                let t = 0.8;
                                return h && (t = o > r ? i / o : i / r), n(o * t, r * t);
                            }
                            return c;
                        });
                    }
                    return n(t.width, t.height);
                })(t, i, e, s).then(a.Lw);
            }
            function c(t, e, i, n, o) {
                const r = e / 2,
                    a = i / 2;
                return t instanceof HTMLCanvasElement && e <= n && i <= o ? Promise.resolve(t) : r <= n && a <= o ? (0, s.$i)(t, n, o) : (0, s.$i)(t, r, a).then((t) => c(t, t.width, t.height, n, o));
            }
            const l = 5242880,
                d = 4096,
                u = 0.85,
                p = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (t) => t.orientation !== n.Z.TOP_LEFT && t.orientation !== n.Z.UNKNOWN,
                g = (t, e = l, i = d) => {
                    const { height: s, size: n, width: o } = t;
                    return o > i || s > i || n > e;
                },
                f = (t, e) => e || { top: 0, left: 0, width: t.width, height: t.height },
                _ = (t, e) => {
                    const { height: i, left: s, top: n, width: o } = f(t, e);
                    return !(0 === n && 0 === s && o === t.width && i === t.height);
                };
            function S(t, e) {
                const { maxFileSize: i = l, maxDimension: s = d, cropData: n, jpgPixelsPerByteForResize: o } = e || {},
                    r = "image/jpeg" === t.type,
                    a = (t.width * t.height) / t.size;
                return m(t) || g(t, i, s) || _(t, n) || (r && !!o && a < o);
            }
            const E = (t, e) => {
                    const { height: i, width: s } = t;
                    return s <= e && i <= e ? { width: s, height: i } : s > i ? { width: e, height: Math.round(i / (s / e)) } : { width: Math.round(s / (i / e)), height: e };
                },
                T = (t) => ("function" == typeof t.decode ? t.decode() : Promise.resolve());
            function y(t, e) {
                const { maxFileSize: i = l, maxDimension: n = d, targetQuality: a = u, cropData: c } = e || {},
                    m = f(t, c);
                if (!S(t, e)) return Promise.resolve(t.fileHandle);
                if (!(0, r.DS)(t)) {
                    const t = new o.Z("The provided file is not a valid image", p.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(t);
                }
                if (t.isGif) {
                    const t = new o.Z("Gifs cannot be processed.", p.GIF_IS_TOO_LARGE);
                    return Promise.reject(t);
                }
                const g = (t) => h(t, { maxFileSize: i, maxDimension: n, targetQuality: a });
                return t
                    .withDimensionsAndOrientation()
                    .then(({ img: t, orientation: e }) => {
                        const i = ({ height: i, width: n }) => (0, s.$i)(t, n, i, e, m);
                        return T(t)
                            .then(() => ((t) => t(E(m, n)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const t = new o.Z("Image cannot be processed", p.CANNOT_BE_PROCESSED);
                        return Promise.reject(t);
                    });
            }
        },
        2027: (t, e, i) => {
            i.d(e, { Z: () => l });
            i(136728), i(571372);
            function s(t) {
                return Object.keys(n(t));
            }
            function n(t) {
                return t.reduce((t, e) => ((t[e] = !0), t), {});
            }
            class o {
                constructor({ callback: t, makeEventSource: e, topics: i }) {
                    (this.topics = []),
                        (this.backoffDuration = 0),
                        (this._handleMessage = ({ data: t }) => {
                            try {
                                const e = JSON.parse(t);
                                this.connection && "/system/config" === e.topic && (this.connection.hasConfig = !0), this.callback(e);
                            } catch (t) {}
                        }),
                        (this._handleError = () => {
                            if (!this.connection || this.connection.eventSource.readyState === this.connection.eventSource.OPEN) return;
                            const t = this.connection;
                            (t &&
                                t.eventSource.readyState === t.eventSource.CONNECTING &&
                                (function (t, e) {
                                    const i = n(t),
                                        o = Object.keys(i),
                                        r = s(e);
                                    return o.length === r.length && r.every((t) => i[t]);
                                })(t.topics, this._getTopicsForAutoSubscribe())) ||
                                (this._cleanup(), this.connection && this.connection.hasConfig ? (this.backoffDuration = 1e3) : (this.backoffDuration = Math.max(1e3, Math.min(2 * this.backoffDuration, 6e4))), (this.backoffTimeoutId = setTimeout(this._connect, this.backoffDuration * (0.5 + Math.random()))));
                        }),
                        (this._connect = () => {
                            this._cleanup();
                            const t = this._getTopicsForAutoSubscribe();
                            this.makeEventSource(t)
                                .then((e) => {
                                    if ("object" != typeof e) throw new Error("EventSource must be defined");
                                    e.addEventListener("message", this._handleMessage), e.addEventListener("error", this._handleError), (this.connection = { eventSource: e, topics: t, hasConfig: !1 });
                                })
                                .catch(() => {
                                    this._handleError();
                                });
                        }),
                        (this.makeEventSource = e),
                        (this.callback = t),
                        this.setTopics(i),
                        this._connect();
                }
                setTopics(t) {
                    this.topics = t;
                }
                getAutoSubscribedTopics() {
                    return this.connection ? this.connection.topics : [];
                }
                _getTopicsForAutoSubscribe() {
                    return this.topics.slice(0, o.MAX_AUTO_SUBSCRIBE_TOPICS);
                }
                _cleanup() {
                    const t = this.connection;
                    t && (t.eventSource.removeEventListener("message", this._handleMessage), t.eventSource.removeEventListener("error", this._handleError), t.eventSource.close(), (this.connection = null)), clearTimeout(this.backoffTimeoutId);
                }
                teardown() {
                    this._cleanup();
                }
            }
            o.MAX_AUTO_SUBSCRIBE_TOPICS = 20;
            function r(t) {
                try {
                    return Promise.resolve(400 === t.status && JSON.parse(t.body).errors.some((t) => 392 === t.code));
                } catch {
                    return Promise.resolve(!1);
                }
            }
            var a = i(2138);
            class h {
                constructor(t) {
                    (this.sessionId = ""),
                        (this.pendingState = { topics: [], forceSubscribeAll: !1 }),
                        (this.appliedState = { topics: [] }),
                        (this.setTopics = (t = []) => {
                            (this.pendingState.topics = s(t)), this._applyPendingState();
                        }),
                        (this._subscribeAll = () => {
                            (this.pendingState.forceSubscribeAll = !0), this._applyPendingState();
                        }),
                        (this._applyPendingState = () => {
                            const t = this.pendingState.forceSubscribeAll ? this.pendingState.topics : this.pendingState.topics.filter((t) => -1 === this.appliedState.topics.indexOf(t)),
                                e = this.appliedState.topics.filter((t) => -1 === this.pendingState.topics.indexOf(t)),
                                i = !this.sessionId,
                                s = 0 === t.length && 0 === e.length;
                            i || s || ((this.appliedState = { topics: this.pendingState.topics }), (this.pendingState = { topics: this.appliedState.topics, forceSubscribeAll: !1 }), this.updateSubscriptions({ toSubscribe: t, toUnsubscribe: e, sessionId: this.sessionId }));
                        });
                    const { updateSubscriptions: e, throttlePeriod: i = h.UPDATE_SUBSCRIPTIONS_THROTTLE } = t;
                    (this.updateSubscriptions = e), (this.throttlePeriod = i), null !== i && i >= 0 && (this._applyPendingState = (0, a.Z)(this._applyPendingState, i, { leading: !1 }));
                }
                setConfig(t = null, e = []) {
                    if ((clearInterval(this.intervalId), !t || !t.config)) return;
                    (this.sessionId = t.config.session_id), (this.appliedState = { topics: e }), this._applyPendingState();
                    const i = (t.config.subscription_ttl_millis || h.DEFAULT_TTL) - h.TIMEOUT_PREEMPT_DURATION;
                    this.intervalId = setInterval(this._subscribeAll, i);
                }
                teardown() {
                    clearInterval(this.intervalId), this.updateSubscriptions({ toSubscribe: [], toUnsubscribe: this.appliedState.topics, sessionId: this.sessionId });
                }
            }
            function c({ condition: t, promiseFactory: e, sideEffect: i }) {
                return (...s) => {
                    const n = e(...s);
                    return n
                        .then(t)
                        .then((t) => {
                            t && i();
                        })
                        .then(
                            () => n,
                            () => n,
                        );
                };
            }
            (h.DEFAULT_TTL = 12e4), (h.TIMEOUT_PREEMPT_DURATION = 2e4), (h.UPDATE_SUBSCRIPTIONS_THROTTLE = 1e3);
            class l {
                constructor({ makeEventSource: t, updateSubscriptions: e }) {
                    (this.isSuspended = !1),
                        (this.eventSourceConnector = null),
                        (this.subscriptionsByTopic = {}),
                        (this._closeEventSource = () => {
                            this._clearExpiryTimeout(), this.livePipelineResubscriber.setConfig(null), this.eventSourceConnector && (this.eventSourceConnector.teardown(), (this.eventSourceConnector = null));
                        }),
                        (this.restartEventSource = () => {
                            this._closeEventSource(), this._reconcileTopics();
                        }),
                        (this._handleMessage = ({ payload: t, topic: e }) => {
                            e === l.SYSTEM_CONFIG_TOPIC && this.eventSourceConnector && this.livePipelineResubscriber.setConfig(t, this.eventSourceConnector.getAutoSubscribedTopics());
                            const i = Promise.resolve(t);
                            return (this.subscriptionsByTopic[e] || []).map((t) => i.then(t.callback));
                        }),
                        (this.makeEventSource = t),
                        (this.livePipelineResubscriber = new h({ updateSubscriptions: c({ promiseFactory: e, condition: r, sideEffect: this.restartEventSource }) }));
                }
                teardown() {
                    this._clearExpiryTimeout(), (this.subscriptionsByTopic = {}), this.livePipelineResubscriber.teardown(), this.eventSourceConnector && (this.eventSourceConnector.teardown(), (this.eventSourceConnector = null));
                }
                suspend() {
                    (this.isSuspended = !0), this._reconcileTopics();
                }
                resume() {
                    (this.isSuspended = !1), this._reconcileTopics();
                }
                subscribeTopic(t, e) {
                    if (!t) return { teardown: () => {} };
                    const i = { topic: t, callback: e };
                    return (
                        (this.subscriptionsByTopic[t] = this.subscriptionsByTopic[t] || []),
                        this.subscriptionsByTopic[t].push(i),
                        this._reconcileTopics(),
                        {
                            teardown: () => {
                                const e = (this.subscriptionsByTopic[t] || []).filter((t) => t !== i);
                                0 === e.length ? delete this.subscriptionsByTopic[t] : (this.subscriptionsByTopic[t] = e), this._reconcileTopics();
                            },
                        }
                    );
                }
                _reconcileTopics() {
                    const t = this.isSuspended ? [] : Object.keys(this.subscriptionsByTopic),
                        e = t.length > 0;
                    e && this._clearExpiryTimeout(), this.livePipelineResubscriber.setTopics(t), this.eventSourceConnector && this.eventSourceConnector.setTopics(t), e && !this.eventSourceConnector ? (this._closeEventSource(), (this.eventSourceConnector = new o({ makeEventSource: this.makeEventSource, callback: this._handleMessage, topics: t }))) : e || !this.eventSourceConnector || this.connectionExpiryTimeoutId || (this.connectionExpiryTimeoutId = setTimeout(this._closeEventSource, l.UNUSED_CONNECTION_EXPIRY));
                }
                _clearExpiryTimeout() {
                    clearTimeout(this.connectionExpiryTimeoutId), (this.connectionExpiryTimeoutId = null);
                }
            }
            (l.SYSTEM_CONFIG_TOPIC = "/system/config"), (l.UNUSED_CONNECTION_EXPIRY = 3e4);
        },
        666536: (t, e, i) => {
            i.d(e, { Z: () => o });
            var s = i(936386),
                n = i.n(s);
            const o = (t, e, i) => n()(t, e, i);
        },
        417144: (t, e, i) => {
            function s(t, e = 1) {
                let i = e;
                const s = new Map();
                let n = 0,
                    o = 0,
                    r = 0,
                    a = null;
                function h() {
                    s.clear(), (n = 0), (o = 0), (r = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        s.set(t, { time: Date.now(), bytes: e }), o || (o = Date.now());
                    },
                    uploadFinish: function (c, l) {
                        const d = s.get(c);
                        d &&
                            ((n += l - d.bytes),
                            s.delete(c),
                            ++r === i &&
                                (function () {
                                    if (!o) return;
                                    const s = Date.now() - o;
                                    if (s <= 0) return;
                                    if (1 !== e) return;
                                    const r = n / s;
                                    if (r < 5e3 && 1 === i) return;
                                    !a || a.byterate < r ? ((i += 1), t(), (a = { byterate: r, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    h();
                                })());
                    },
                    reset: h,
                    getPoolSize: () => i,
                    start: function () {
                        for (let e = 0; e < i; ++e) t();
                    },
                };
            }
            i.d(e, { Z: () => l, d: () => S });
            i(543673), i(240753), i(128399);
            function n(t) {
                const e = new URLSearchParams();
                for (const i of Object.keys(t)) {
                    const s = t[i];
                    s && e.set(i, s);
                }
                return `&${String(e)}`;
            }
            function o(t, e = a, i = r) {
                const s = Math.max(t, e);
                return Math.min(s, i);
            }
            const r = 5242880,
                a = 65536,
                h = 2e3,
                c = 1e4;
            class l {
                constructor(t, e = y) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || m), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), o(Math.ceil(i / c)))), this._clearState();
                }
                upload(t) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== t.trimRanges || this.uploadOptions.extraFinalizeParams !== t.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== t.extraInitParams) && this._clearState(),
                        (this.uploadOptions = t),
                        this.state !== T.SUCCEEDED && this.state !== T.PENDING && ((this.state = T.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = t.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, t.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: S.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(t, e) {
                    (this.mediaId = t), (this.uploadOptions = e || y), (this.state = T.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const t of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[t]), delete this.timeoutIdMap[t];
                    (this.state = T.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = y),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const t = window.navigator.connection;
                                if (t) {
                                    const e = t.type || t.effectiveType;
                                    if (t.downlink) return o(((1e3 * t.downlink) / 8 / 2) * h);
                                    if ("wifi" === e) return o(5 * a);
                                }
                                return o(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: t }) => t.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(t, e, i, s = y) {
                    (this.uploadOptions = s), (this.state = T.PENDING), (this.progressMode = "uploading");
                    let o = n({ source_url: t, media_type: e, media_category: i });
                    (o += this.uploadOptions.extraInitParams || ""), (o += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        o,
                        (t) => {
                            (this.mediaId = t.media_id_string), this._getStatus();
                        },
                        (...t) => this._uploadError(...t),
                        u,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const t = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (t.enable_1080p_variant = String(!0));
                        const { mediaItem: e } = this.uploadOptions;
                        if (e?.mediaFile?.duration) {
                            const i = 1e3 * e.mediaFile.duration;
                            t.video_duration_ms = String(i);
                        }
                        let i = n(t);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...t) => this._initSuccess(...t),
                                (...t) => this._uploadError(...t),
                                u,
                            );
                    } else this._uploadError({ code: S.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === T.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(d, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: S.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, e);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let t = 0;
                    this.inflightSegments.forEach(({ bytes: e }) => (t += e));
                    const e = t + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - e);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const t = this.fileHandle.slice(e, e + i);
                        s.append("media", t);
                    }
                    const o = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = n({ media_id: this.mediaId, segment_index: String(o) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === T.PENDING) {
                                    const t = this.inflightSegments.get(o);
                                    t && (this.inflightSegments.delete(o), (this.uploadedBytes += t.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...t) => this._uploadError(...t),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(o, { bytes: i, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = T.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const t = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (t.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (t.allow_async = String(!0)), this.retainMediaForever && (t.ttl = "infinite");
                        let e = n(t);
                        (e += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                e,
                                (...t) => this._finalizeOrStatusSuccess(...t),
                                (...t) => this._uploadError(...t),
                                u,
                            );
                    }
                }
                _finalizeOrStatusSuccess(t) {
                    this._setSessionTimeout(t.expires_after_secs);
                    const e = t.processing_info;
                    if (!e) return void this._finalizeSuccess(t);
                    let i = 0;
                    switch (e.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof e.progress_percent && (i = e.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(t);
                        case "failed": {
                            const t = e.error;
                            let i;
                            return (i = t?.code ? E[String(t.code)] : S.INTERNAL_ERROR), void this._uploadError({ ...t, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = e.check_after_secs || 10;
                    setTimeout((...t) => this._getStatus(...t), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === T.PENDING) {
                        const t = n({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            t,
                            (...t) => this._finalizeOrStatusSuccess(...t),
                            (...t) => this._uploadError(...t),
                            u,
                        );
                    }
                }
                _finalizeSuccess(t) {
                    this.state === T.PENDING && ((this.state = T.SUCCEEDED), this._notifyResult());
                }
                _uploadError(t) {
                    if (this.state !== T.PENDING) return;
                    const e = t.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (e) {
                        const t = JSON.parse(e[0]);
                        this.error = { code: S.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: S.INTERNAL_ERROR, message: t?.error });
                    (this.state = T.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(t, e, i) {
                    this.state !== T.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(t, this.progressMode, e, i);
                }
                _notifyResult() {
                    this.state === T.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === T.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(t, e, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        n = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += n), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: t, status: e, duration: n, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(t, e, i, s, n, r, a, c, l = 0) {
                    const d = `${this.uploadUrl}?command=${e}${i}`;
                    let u = !1;
                    const m = new Date(),
                        g = (o) => {
                            if (r) {
                                const o = [d, r].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, i, s, n, r - 1, a, c, l);
                                }, _);
                            } else E(o);
                        },
                        E = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: m, segmentBytes: l }), "function" == typeof n && n(I(T) || { code: S.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        T = new XMLHttpRequest();
                    T.open(t, d, !0),
                        (T.withCredentials = !0),
                        (T.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || p),
                        (T.onload = () => {
                            if (T.status >= 200 && T.status < 400) {
                                const t = I(T);
                                204 === T.status || t ? (this._stats(e, "success", { requestStartTime: m, segmentBytes: l }), s(t || {}), !u && c && c()) : g("parsererror");
                            } else T.status && 503 !== T.status ? E("invalid-response") : g("503");
                        }),
                        (T.onerror = () => g("error")),
                        (T.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let y = !1;
                    T.upload.onprogress = (t) => {
                        y ? t.loaded === t.total && this._bitrateMonitor?.uploadFinish(d, t.total) : ((y = !0), this._bitrateMonitor?.uploadStart(d, t.loaded));
                        const e = t.loaded,
                            i = ((this.uploadedBytes + e) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), e / t.total > f && !u && ((u = !0), a))) {
                            const t = Math.max(1, new Date().getTime() - m.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (t) {
                                const e = t.idealUploadTimeMs || h,
                                    i = t.sentBytes / t.uploadTimeMs;
                                return o(Math.round(e * i), t.minSegmentBytes, t.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: e, uploadTimeMs: t, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof c && c();
                        }
                    };
                    for (const t in this.sruHeaders) T.setRequestHeader(t, this.sruHeaders[t]);
                    return a ? T.send(a) : T.send(), T;
                }
            }
            const d = 2147483647,
                u = 1,
                p = 45e3,
                m = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                _ = 1e3,
                S = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                E = Object.freeze({ 0: S.INTERNAL_ERROR, 1: S.INVALID_MEDIA, 2: S.FILE_TOO_LARGE, 3: S.UNSUPPORTED_MEDIA, 4: S.TIMEOUT }),
                T = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                y = {};
            function I(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-bc6ccf4c.fa19598a.js.map
