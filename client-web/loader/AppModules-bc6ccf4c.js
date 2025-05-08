"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-bc6ccf4c"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                i = n(325686),
                o = n(392237);
            function a({ spacing: e, style: t }) {
                return r.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        557707: (e, t, n) => {
            n.d(t, { ZP: () => b });
            var r = n(807896),
                i = n(202784),
                o = n(466999),
                a = n(325686),
                s = n(674132),
                l = n.n(s),
                h = n(837020),
                c = n(540820),
                d = n(731708),
                u = n(154003),
                g = n(108362),
                m = n(661810),
                p = n(365023),
                w = n(292627),
                f = n(537392),
                _ = n(392237);
            const E = l().af8fa2ae,
                y = i.createElement(h.default, null);
            class T extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return i.createElement(a.Z, { role: "alert", style: _.default.visuallyHidden, testID: e }, i.createElement(o.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && i.createElement(c.default, { style: I.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && i.createElement(a.Z, null, i.createElement(d.ZP, { color: "whiteOnColor", style: I.titleText }, e.payload.message), i.createElement(m.Z, { spacing: "space12", style: I.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: n, withClearButton: r } = this.props;
                            return i.createElement(i.Fragment, null, i.createElement(d.ZP, { color: "whiteOnColor", style: I.titleText }, t), i.createElement(a.Z, { "aria-hidden": n, style: I.actionButtons }, e && this._renderActionLabel(e), r && i.createElement(u.ZP, { "aria-label": E, borderColor: "transparent", color: "white", icon: y, onPress: this._handleClose, style: I.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return i.createElement(i.Fragment, null, this._renderIcon(), i.createElement(a.Z, { style: I.body }, this._renderDecoration(), i.createElement(a.Z, { style: I.content }, e)));
                                    }
                                    case "jetfuel":
                                        return i.createElement(i.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return I.rootVariantJp;
                                    case "jetfuel":
                                        return I.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: n, testID: o, variant: s } = this.props,
                                l = n?.length ? [...n] : [n],
                                h = s ? this._renderVariantContent() : this._renderContent();
                            return i.createElement(
                                t,
                                null,
                                i.createElement(
                                    g.Z,
                                    { style: I.noPointerEvents },
                                    i.createElement(p.Z, { id: "Toast" }, (t, n) => i.createElement(a.Z, (0, r.Z)({ ref: t() }, n({ role: "alert", style: [I.root, s && this._getRootVariantStyle(), ...l, e > _.default.theme.breakpoints.medium && I.rootWide], testID: o })), h)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return i.createElement(g.Z, null, i.createElement(a.Z, { role: "alert", style: [I.root, e > _.default.theme.breakpoints.medium && I.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: n, text: r, withAutoDismiss: i } = this.props;
                            if (i) {
                                const i = t || T.calculateDismissDelay(r, !!e);
                                this._timerId = setTimeout(n, i);
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
                    return e ? this._renderAriaOnly() : i.createElement(f.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: n } = e;
                    return i.createElement(d.ZP, { children: t, color: "whiteOnColor", link: n, onClick: this._handleActionPress, style: [I.actionText, !n && I.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const n = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (n < 4e3 ? 4e3 : n) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            T.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: w.Z.ModalToasts };
            const I = _.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                b = T;
        },
        19697: (e, t, n) => {
            n.d(t, { q8: () => h, $i: () => o });
            n(571372);
            var r = n(790187);
            const i = (e, t) => {
                const n = document.createElement("canvas");
                (n.width = e), (n.height = t);
                const r = n.getContext("2d");
                return (r.fillStyle = "#FFFFFF"), r.fillRect(0, 0, e, t), n;
            };
            function o(e, t, n, i, o) {
                return l(t, n).then(
                    (t) => (
                        (function (e, t, n, i, o, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = s.left,
                                h = s.top,
                                c = s.width,
                                d = s.height,
                                u = 0,
                                g = 0,
                                m = n,
                                p = i;
                            switch ((e.save(), o)) {
                                case r.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - s.width - s.left), (u = -n);
                                    break;
                                case r.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - s.width - s.left), (h = t.height - s.height - s.top), (u = -n), (g = -i);
                                    break;
                                case r.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (h = t.height - s.height - s.top), (g = -i);
                                    break;
                                case r.Z.LEFT_TOP:
                                    e.translate(n / 2, i / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = s.top), (h = s.left), (c = s.height), (d = s.width), (u = -i / 2), (g = -n / 2), (m = i), (p = n);
                                    break;
                                case r.Z.LEFT_BOTTOM:
                                    e.translate(n / 2, i / 2), e.rotate(Math.PI / 2), (l = s.top), (h = t.height - s.width - s.left), (c = s.height), (d = s.width), (u = -i / 2), (g = -n / 2), (m = i), (p = n);
                                    break;
                                case r.Z.RIGHT_BOTTOM:
                                    e.translate(n / 2, i / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - s.height - s.top), (h = t.height - s.width - s.left), (c = s.height), (d = s.width), (u = -i / 2), (g = -n / 2), (m = i), (p = n);
                                    break;
                                case r.Z.RIGHT_TOP:
                                    e.translate(n / 2, i / 2), e.rotate(-Math.PI / 2), (l = t.width - s.height - s.top), (h = s.left), (c = s.height), (d = s.width), (u = -i / 2), (g = -n / 2), (m = i), (p = n);
                            }
                            e.drawImage(t, l, h, c, d, u, g, m, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, i, o),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const n = i(e, t);
                    return h(n)
                        .then(() => n)
                        .catch(() => {
                            const n = e * t;
                            if (n > s) {
                                const n = c(s, e, t);
                                return l(n.width, n.height);
                            }
                            if (n > a) {
                                const n = c(a, e, t);
                                return l(n.width, n.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function h(e) {
                return new Promise((t, n) => {
                    const r = e.toDataURL("image/jpeg");
                    r && "data:," !== r ? t(r) : n(new Error("Malformed canvas"));
                });
            }
            function c(e, t, n) {
                const r = Math.sqrt((e * n) / t),
                    i = (t * r) / n;
                return { height: Math.floor(r), width: Math.floor(i) };
            }
        },
        790187: (e, t, n) => {
            n.d(t, { C: () => o, Z: () => r });
            n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157);
            const r = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                i = (e, t, n = 65536) => {
                    let r = new Uint8Array([]),
                        i = 0;
                    function o(o, a, s) {
                        const l = o - i,
                            h = l + a;
                        if (l >= 0 && h <= r.length) s(r.subarray(l, h), o);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (r = new Uint8Array(this.result)), (i = o), s(r.subarray(0, a), o);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(o, o + Math.max(n, a)));
                        }
                    }
                    function a(e) {
                        const n = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === n) return void t(0);
                        function r(t, r) {
                            let i = 0;
                            for (let o = 0; o < r; o++) i = (i << 8) + e[t + (n ? o : r - 1 - o)];
                            return i;
                        }
                        const i = e.length > 8 && r(4, 4);
                        if (!i || i + 2 > e.length) return void t(0);
                        let o = r(i, 2);
                        if (i + 12 * o + 6 > e.length) return void t(0);
                        let a = i + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === r(a, 2) && 3 === r(a + 2, 2) && 1 === r(a + 4, 4))) return void t(r(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? o(0, 10, function e(n, r) {
                              const i = n[1];
                              if (n.length < 4 || 255 !== n[0] || 217 === i) return void t(0);
                              const s = i < 208 || i > 217 ? (n[2] << 8) + n[3] : 0;
                              225 === i && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, n.subarray(4, 10)) ? o(r + 10, s - 8, a) : o(r + 2 + s, 10, e);
                          })
                        : t(0);
                },
                o = (e, t) => {
                    const n = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        n
                            ? o(r.TOP_LEFT)
                            : i(
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
            n.d(t, { Lw: () => i, Re: () => d, VJ: () => s, ZF: () => u, hv: () => l, ku: () => r, qp: () => o, uv: () => a, v5: () => c });
            n(571372), n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(543673), n(240753), n(128399);
            function r(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function i(e) {
                return new Promise((t, n) => {
                    const r = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== r.length) n(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, n] = r,
                                    i = atob(n),
                                    o = i.length,
                                    a = Array(o);
                                for (let e = 0; e < o; e++) a[e] = i.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else n(Error("The Uint8Array type is not available"));
                        else n(Error("The atob API is not available"));
                    else n(Error("The Blob API is not available"));
                });
            }
            const o = (e, t) =>
                    new Promise((n, r) => {
                        const i = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                i.abort?.(), r(Error(u));
                            }),
                            (i.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? n(e.target.result) : r(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (i.onerror = (e) => {
                                r(e);
                            }),
                            i.readAsArrayBuffer(e);
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
                        r = 1;
                    for (; n && n.size > t; )
                        try {
                            r > 0.2 ? ((r *= 0.7), (n = await h(n, 1, r))) : (n = await h(n, 0.7, r));
                        } catch (e) {
                            n = void 0;
                        }
                    return n;
                },
                h = (e, t, n) =>
                    new Promise((r, i) => {
                        const o = new Image();
                        (o.onload = () => {
                            const e = document.createElement("canvas"),
                                i = e.getContext("2d"),
                                a = o.width * t,
                                s = o.height * t;
                            (e.width = a),
                                (e.height = s),
                                i.drawImage(o, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    n,
                                );
                        }),
                            (o.onerror = () => i(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(e));
                    }),
                c = ["image/jpeg", "image/png", "image/webp"],
                d = "image/gif",
                u = "Reading aborted";
        },
        549755: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(571372);
            class r extends Error {
                constructor(e, t, n) {
                    super(e), (this.code = t), (this.type = n || null);
                }
            }
        },
        205074: (e, t, n) => {
            n.d(t, { DS: () => s, ZP: () => l });
            n(543673), n(240753), n(128399);
            var r = n(790187),
                i = n(276259),
                o = n(122123);
            function a(e, t) {
                const n = (function (e) {
                        return [r.Z.LEFT_BOTTOM, r.Z.LEFT_TOP, r.Z.RIGHT_BOTTOM, r.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [i, o] = n ? [e.height, e.width] : [e.width, e.height];
                return { width: i, height: o };
            }
            const s = (e) => {
                const t = e instanceof l,
                    n = e.isImage || e.isGif,
                    r = e.orientation,
                    i = e.width && e.height,
                    o = e.img;
                return !!(t && n && r && i && o);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === i.Re), (this.isImage = i.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: n, width: r } = a(e, t);
                                  return (this.img = e), (this.width = r), (this.height = n), (this.orientation = t), this;
                              };
                              return (0, r.C)(this.fileHandle)
                                  .then((e) => t(e === r.Z.UNKNOWN ? r.Z.TOP_LEFT : e))
                                  .catch(() => t(r.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, n) => {
            n.d(t, { gK: () => i, o2: () => a, po: () => o });
            var r = n(549755);
            const i = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(e) {
                return new Promise((t, n) => {
                    const o = (e, t) => {
                            const o = new r.Z(e, t, i.type);
                            n(o);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : o("Image lacks height or width", i.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            o("Error loading image", i.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, n) => {
                    const o = (e, t) => {
                            const o = new r.Z(e, t, i.type);
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
                                        } else o("Failed to convert image to blob", i.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", i.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            o("Error loading image", i.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, n) => {
            n.d(t, { Q: () => l, S: () => s });
            var r = n(332775),
                i = n.n(r),
                o = n(276259),
                a = n(549755);
            const s = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, o.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === o.ZF ? s.HASHING_ABORTED : s.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = i()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", s.INVALID_HASH);
                        });
        },
        653843: (e, t, n) => {
            n.d(t, { Y7: () => g, ZP: () => T, m2: () => _ });
            var r = n(19697),
                i = n(790187),
                o = n(549755),
                a = n(205074),
                s = n(276259);
            function l(e, { maxDimension: t, maxFileSize: n, targetQuality: r }) {
                return (function (e, t, n, r) {
                    function i(o, a) {
                        return h(e, e.width, e.height, o, a).then((e) => {
                            const l = e.width > n || e.height > n,
                                h = e.toDataURL("image/jpeg", r),
                                c = h.split(";base64,")[1],
                                d = (0, s.ku)(c);
                            if (l || d > t) {
                                let e = 0.8;
                                return l && (e = o > a ? n / o : n / a), i(o * e, a * e);
                            }
                            return h;
                        });
                    }
                    return i(e.width, e.height);
                })(e, n, t, r).then(s.Lw);
            }
            function h(e, t, n, i, o) {
                const a = t / 2,
                    s = n / 2;
                return e instanceof HTMLCanvasElement && t <= i && n <= o ? Promise.resolve(e) : a <= i && s <= o ? (0, r.$i)(e, i, o) : (0, r.$i)(e, a, s).then((e) => h(e, e.width, e.height, i, o));
            }
            const c = 5242880,
                d = 4096,
                u = 0.85,
                g = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (e) => e.orientation !== i.Z.TOP_LEFT && e.orientation !== i.Z.UNKNOWN,
                p = (e, t = c, n = d) => {
                    const { height: r, size: i, width: o } = e;
                    return o > n || r > n || i > t;
                },
                w = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                f = (e, t) => {
                    const { height: n, left: r, top: i, width: o } = w(e, t);
                    return !(0 === i && 0 === r && o === e.width && n === e.height);
                };
            function _(e, t) {
                const { maxFileSize: n = c, maxDimension: r = d, cropData: i, jpgPixelsPerByteForResize: o } = t || {},
                    a = "image/jpeg" === e.type,
                    s = (e.width * e.height) / e.size;
                return m(e) || p(e, n, r) || f(e, i) || (a && !!o && s < o);
            }
            const E = (e, t) => {
                    const { height: n, width: r } = e;
                    return r <= t && n <= t ? { width: r, height: n } : r > n ? { width: t, height: Math.round(n / (r / t)) } : { width: Math.round(r / (n / t)), height: t };
                },
                y = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function T(e, t) {
                const { maxFileSize: n = c, maxDimension: i = d, targetQuality: s = u, cropData: h } = t || {},
                    m = w(e, h);
                if (!_(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new o.Z("The provided file is not a valid image", g.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new o.Z("Gifs cannot be processed.", g.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => l(e, { maxFileSize: n, maxDimension: i, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const n = ({ height: n, width: i }) => (0, r.$i)(e, i, n, t, m);
                        return y(e)
                            .then(() => ((e) => e(E(m, i)))(n))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new o.Z("Image cannot be processed", g.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-bc6ccf4c.cf5f6a0a.js.map
