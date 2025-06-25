(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        879113: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m });
            var s = i(202784),
                r = i(476984),
                o = i.n(r),
                n = i(143778),
                a = i(750410),
                l = i(682830);
            const d = "failed",
                h = "loaded",
                c = "loading",
                u = "none";
            class m extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === h,
                        i = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !i) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: i, fetchStatus: r, icon: o, loadingMessage: n, onRequestRetry: h, render: m, renderFailure: p, retryMessage: g, retryable: f } = this.props;
                    switch (r) {
                        case d:
                            return f ? s.createElement(a.Z, { icon: o, onRequestRetry: h, retryMessage: g }) : i ? s.createElement(l.m, { failureMessage: i }) : p();
                        case c:
                            return s.createElement(l.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        420412: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var s = i(202784),
                r = i(325686),
                o = i(235902),
                n = i(885015),
                a = i(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return i ? s.createElement(n.Z, { style: !t && d.root, withGutter: !0 }, s.createElement(r.Z, { style: d.gapColumn }, s.createElement(r.Z, { style: [d.gap, h] })), s.createElement(r.Z, { style: d.gapText }, i), s.createElement(r.Z, { style: d.gapColumn }, s.createElement(r.Z, { style: [d.gap, h] }))) : s.createElement(r.Z, { style: [!t && d.root, l() && d.rootRedesign, d.gap, h] });
            }
            const d = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var s = i(807896),
                r = i(202784),
                o = i(325686),
                n = i(392237);
            class a extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...n } = this.props,
                        a = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, i && l.withGutterColumn] }));
                    return r.createElement(o.Z, (0, s.Z)({ style: [t, l.root, i && l.withGutter] }, n), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = a;
        },
        470397: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            i(136728);
            var s = i(202784),
                r = i(325686),
                o = i(124964),
                n = i(392237);
            const a = ({ children: e, color: t = "gray700", size: i, style: n }) => {
                    const a = [];
                    return (
                        s.Children.forEach(e, (e) => {
                            const r = a.length;
                            e && (r > 0 && a.push(s.createElement(o.Z, { color: t, key: `middot-${r}`, size: i })), a.push(e));
                        }),
                        a.length ? s.createElement(r.Z, { style: [l.middotGroup, n] }, a) : null
                    );
                },
                l = n.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        973014: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => y });
            var s = i(202784),
                r = i(325686),
                o = i(111677),
                n = i.n(o),
                a = i(837020),
                l = i(379327),
                d = i(913973),
                h = i(731708),
                c = i(58881),
                u = i(530732),
                m = i(392237),
                p = i(599190);
            const g = { active: n().e557ad8e, expand: n().e3a58c28, remove: n().h517e8d8 };
            class f extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: i, disabled: o, link: n, mode: a, onClick: l, secondaryAction: d, selected: p, style: f, testID: y, text: w } = this.props,
                        E = this._renderIcon(!0, a),
                        I = d && this._renderIcon(!1, d.mode),
                        S = [_.root, i && _.compact, o && _.disabled, p && _.selected, f],
                        T = [_.content, !!E && _.withIcon, !!t && ((i && _.withAvatarImageCompact) || _.withAvatarImage)],
                        O = c.Z.generate({ backgroundColor: p ? m.default.theme.colors.primary : "transparent", color: p ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return s.createElement(r.Z, { style: S, testID: y }, s.createElement(u.Z, { "aria-label": e || (a ? g[a] : ""), disabled: o, interactiveStyles: O, link: n, onPress: l, style: T }, this._renderAvatar(), s.createElement(h.ZP, { color: p ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: _.text, weight: "bold" }, w), E), d ? s.createElement(u.Z, { "aria-label": d["aria-label"] || (d.mode ? g[d.mode] : ""), disabled: o || d.disabled, hoverLabel: { label: d.hoverLabel || (d.mode ? g[d.mode] : "") }, interactiveStyles: O, onPress: this._handleSecondaryClick, style: _.secondaryControl }, s.createElement(r.Z, { style: _.secondaryBorder }, I)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: i } = this.props,
                        r = [_.icon, i && _.iconSelected],
                        o = [_.icon];
                    switch (t) {
                        case p.D.Remove:
                            return s.createElement(a.default, { style: [_.dismissIcon, e && r] });
                        case p.D.Expand:
                            return s.createElement(l.default, { style: e ? r : o });
                        case p.D.Active:
                            return s.createElement(d.default, { style: r });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? s.createElement(r.Z, { style: [_.avatarContainer, t ? _.avatarCompact : _.avatar] }, e) : null;
                }
            }
            f.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const _ = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                y = f;
        },
        599190: (e, t, i) => {
            "use strict";
            i.d(t, { D: () => s });
            const s = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        19697: (e, t, i) => {
            "use strict";
            i.d(t, { q8: () => d, $i: () => o });
            i(571372);
            var s = i(790187);
            const r = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const s = i.getContext("2d");
                return (s.fillStyle = "#FFFFFF"), s.fillRect(0, 0, e, t), i;
            };
            function o(e, t, i, r, o) {
                return l(t, i).then(
                    (t) => (
                        (function (e, t, i, r, o, n) {
                            const a = n || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = a.left,
                                d = a.top,
                                h = a.width,
                                c = a.height,
                                u = 0,
                                m = 0,
                                p = i,
                                g = r;
                            switch ((e.save(), o)) {
                                case s.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - a.width - a.left), (u = -i);
                                    break;
                                case s.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - a.width - a.left), (d = t.height - a.height - a.top), (u = -i), (m = -r);
                                    break;
                                case s.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - a.height - a.top), (m = -r);
                                    break;
                                case s.Z.LEFT_TOP:
                                    e.translate(i / 2, r / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = a.top), (d = a.left), (h = a.height), (c = a.width), (u = -r / 2), (m = -i / 2), (p = r), (g = i);
                                    break;
                                case s.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, r / 2), e.rotate(Math.PI / 2), (l = a.top), (d = t.height - a.width - a.left), (h = a.height), (c = a.width), (u = -r / 2), (m = -i / 2), (p = r), (g = i);
                                    break;
                                case s.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, r / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - a.height - a.top), (d = t.height - a.width - a.left), (h = a.height), (c = a.width), (u = -r / 2), (m = -i / 2), (p = r), (g = i);
                                    break;
                                case s.Z.RIGHT_TOP:
                                    e.translate(i / 2, r / 2), e.rotate(-Math.PI / 2), (l = t.width - a.height - a.top), (d = a.left), (h = a.height), (c = a.width), (u = -r / 2), (m = -i / 2), (p = r), (g = i);
                            }
                            e.drawImage(t, l, d, h, c, u, m, p, g), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, r, o),
                        t
                    ),
                );
            }
            const n = 3145728,
                a = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = r(e, t);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > a) {
                                const i = h(a, e, t);
                                return l(i.width, i.height);
                            }
                            if (i > n) {
                                const i = h(n, e, t);
                                return l(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function d(e) {
                return new Promise((t, i) => {
                    const s = e.toDataURL("image/jpeg");
                    s && "data:," !== s ? t(s) : i(new Error("Malformed canvas"));
                });
            }
            function h(e, t, i) {
                const s = Math.sqrt((e * i) / t),
                    r = (t * s) / i;
                return { height: Math.floor(s), width: Math.floor(r) };
            }
        },
        790187: (e, t, i) => {
            "use strict";
            i.d(t, { C: () => o, Z: () => s });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const s = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                r = (e, t, i = 65536) => {
                    let s = new Uint8Array([]),
                        r = 0;
                    function o(o, n, a) {
                        const l = o - r,
                            d = l + n;
                        if (l >= 0 && d <= s.length) a(s.subarray(l, d), o);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (s = new Uint8Array(this.result)), (r = o), a(s.subarray(0, n), o);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(o, o + Math.max(i, n)));
                        }
                    }
                    function n(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function s(t, s) {
                            let r = 0;
                            for (let o = 0; o < s; o++) r = (r << 8) + e[t + (i ? o : s - 1 - o)];
                            return r;
                        }
                        const r = e.length > 8 && s(4, 4);
                        if (!r || r + 2 > e.length) return void t(0);
                        let o = s(r, 2);
                        if (r + 12 * o + 6 > e.length) return void t(0);
                        let n = r + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === s(n, 2) && 3 === s(n + 2, 2) && 1 === s(n + 4, 4))) return void t(s(n + 8, 2));
                            n += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? o(0, 10, function e(i, s) {
                              const r = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === r) return void t(0);
                              const a = r < 208 || r > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === r && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? o(s + 10, a - 8, n) : o(s + 2 + a, 10, e);
                          })
                        : t(0);
                },
                o = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        i
                            ? o(s.TOP_LEFT)
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
        276259: (e, t, i) => {
            "use strict";
            i.d(t, { Lw: () => r, Re: () => c, VJ: () => a, ZF: () => u, hv: () => l, ku: () => s, qp: () => o, uv: () => n, v5: () => h });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function s(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function r(e) {
                return new Promise((t, i) => {
                    const s = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== s.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = s,
                                    r = atob(i),
                                    o = r.length,
                                    n = Array(o);
                                for (let e = 0; e < o; e++) n[e] = r.charCodeAt(e);
                                t(new Blob([new Uint8Array(n)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const o = (e, t) =>
                    new Promise((i, s) => {
                        const r = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                r.abort?.(), s(Error(u));
                            }),
                            (r.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : s(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (r.onerror = (e) => {
                                s(e);
                            }),
                            r.readAsArrayBuffer(e);
                    }),
                n = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const i = new Image();
                            (i.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = i.width), (e.height = i.height), e.getContext("2d").drawImage(i, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let i = e,
                        s = 1;
                    for (; i && i.size > t; )
                        try {
                            s > 0.2 ? ((s *= 0.7), (i = await d(i, 1, s))) : (i = await d(i, 0.7, s));
                        } catch (e) {
                            i = void 0;
                        }
                    return i;
                },
                d = (e, t, i) =>
                    new Promise((s, r) => {
                        const o = new Image();
                        (o.onload = () => {
                            const e = document.createElement("canvas"),
                                r = e.getContext("2d"),
                                n = o.width * t,
                                a = o.height * t;
                            (e.width = n),
                                (e.height = a),
                                r.drawImage(o, 0, 0, n, a),
                                e.toBlob(
                                    (e) => {
                                        s(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (o.onerror = () => r(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(e));
                    }),
                h = ["image/jpeg", "image/png", "image/webp"],
                c = "image/gif",
                u = "Reading aborted";
        },
        364837: (e, t, i) => {
            "use strict";
            i.d(t, { R: () => d });
            var s = i(19697),
                r = i(549755),
                o = i(205074);
            const n = 1,
                a = 2,
                l = 3,
                d = (e) => {
                    if ((0, o.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: i, orientation: o, width: n } = e;
                            return (0, s.$i)(i, n, t, o).then(
                                (e) => (0, s.q8)(e),
                                (e) => {
                                    throw new r.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new r.Z("The provided image must be a gif", a);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new r.Z("The provided file is not a valid image", n);
                        return Promise.reject(e);
                    }
                };
        },
        549755: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            i(571372);
            class s extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            "use strict";
            i.d(t, { DS: () => a, ZP: () => l });
            i(543673), i(240753), i(128399);
            var s = i(790187),
                r = i(276259),
                o = i(122123);
            function n(e, t) {
                const i = (function (e) {
                        return [s.Z.LEFT_BOTTOM, s.Z.LEFT_TOP, s.Z.RIGHT_BOTTOM, s.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [r, o] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: r, height: o };
            }
            const a = (e) => {
                const t = e instanceof l,
                    i = e.isImage || e.isGif,
                    s = e.orientation,
                    r = e.width && e.height,
                    o = e.img;
                return !!(t && i && s && r && o);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === r.Re), (this.isImage = r.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: s } = n(e, t);
                                  return (this.img = e), (this.width = s), (this.height = i), (this.orientation = t), this;
                              };
                              return (0, s.C)(this.fileHandle)
                                  .then((e) => t(e === s.Z.UNKNOWN ? s.Z.TOP_LEFT : e))
                                  .catch(() => t(s.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, i) => {
            "use strict";
            i.d(t, { gK: () => r, o2: () => n, po: () => o });
            var s = i(549755);
            const r = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(e) {
                return new Promise((t, i) => {
                    const o = (e, t) => {
                            const o = new s.Z(e, t, r.type);
                            i(o);
                        },
                        n = new Image();
                    (n.onload = () => {
                        n.width && n.height ? t(n) : o("Image lacks height or width", r.NO_DIMENSIONS);
                    }),
                        (n.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (n.src = e);
                });
            }
            function n(e) {
                return new Promise((t, i) => {
                    const o = (e, t) => {
                            const o = new s.Z(e, t, r.type);
                            i(o);
                        },
                        n = new Image();
                    n.setAttribute("crossorigin", "anonymous"),
                        (n.onload = () => {
                            if (n.width && n.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = n.width),
                                    (e.height = n.height),
                                    i.drawImage(n, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else o("Failed to convert image to blob", r.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", r.NO_DIMENSIONS);
                        }),
                        (n.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (n.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            "use strict";
            i.d(t, { Q: () => l, S: () => a });
            var s = i(332775),
                r = i.n(s),
                o = i(276259),
                n = i(549755);
            const a = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, o.qp)(e, t)
                        .catch((e) => {
                            throw new n.Z(`An error occurred while reading the image file: ${e}`, e.message === o.ZF ? a.HASHING_ABORTED : a.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = r()(e);
                            if (t && "string" == typeof t) return t;
                            throw new n.Z("Hash is not a non-empty string", a.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            "use strict";
            i.d(t, { Y7: () => m, ZP: () => I, m2: () => y });
            var s = i(19697),
                r = i(790187),
                o = i(549755),
                n = i(205074),
                a = i(276259);
            function l(e, { maxDimension: t, maxFileSize: i, targetQuality: s }) {
                return (function (e, t, i, s) {
                    function r(o, n) {
                        return d(e, e.width, e.height, o, n).then((e) => {
                            const l = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", s),
                                h = d.split(";base64,")[1],
                                c = (0, a.ku)(h);
                            if (l || c > t) {
                                let e = 0.8;
                                return l && (e = o > n ? i / o : i / n), r(o * e, n * e);
                            }
                            return d;
                        });
                    }
                    return r(e.width, e.height);
                })(e, i, t, s).then(a.Lw);
            }
            function d(e, t, i, r, o) {
                const n = t / 2,
                    a = i / 2;
                return e instanceof HTMLCanvasElement && t <= r && i <= o ? Promise.resolve(e) : n <= r && a <= o ? (0, s.$i)(e, r, o) : (0, s.$i)(e, n, a).then((e) => d(e, e.width, e.height, r, o));
            }
            const h = 5242880,
                c = 4096,
                u = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== r.Z.TOP_LEFT && e.orientation !== r.Z.UNKNOWN,
                g = (e, t = h, i = c) => {
                    const { height: s, size: r, width: o } = e;
                    return o > i || s > i || r > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                _ = (e, t) => {
                    const { height: i, left: s, top: r, width: o } = f(e, t);
                    return !(0 === r && 0 === s && o === e.width && i === e.height);
                };
            function y(e, t) {
                const { maxFileSize: i = h, maxDimension: s = c, cropData: r, jpgPixelsPerByteForResize: o } = t || {},
                    n = "image/jpeg" === e.type,
                    a = (e.width * e.height) / e.size;
                return p(e) || g(e, i, s) || _(e, r) || (n && !!o && a < o);
            }
            const w = (e, t) => {
                    const { height: i, width: s } = e;
                    return s <= t && i <= t ? { width: s, height: i } : s > i ? { width: t, height: Math.round(i / (s / t)) } : { width: Math.round(s / (i / t)), height: t };
                },
                E = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function I(e, t) {
                const { maxFileSize: i = h, maxDimension: r = c, targetQuality: a = u, cropData: d } = t || {},
                    p = f(e, d);
                if (!y(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, n.DS)(e)) {
                    const e = new o.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new o.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const g = (e) => l(e, { maxFileSize: i, maxDimension: r, targetQuality: a });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: r }) => (0, s.$i)(e, r, i, t, p);
                        return E(e)
                            .then(() => ((e) => e(w(p, r)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const e = new o.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        459643: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = (e) => () => e;
        },
        666536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var s = i(936386),
                r = i.n(s);
            const o = (e, t, i) => r()(e, t, i);
        },
        662678: (e, t, i) => {
            "use strict";
            i.d(t, { G: () => r, Z: () => s });
            i(136728);
            const s = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (i, s, r) => {
                        const o = t ? t(s, r, e) : !!s;
                        return o && i[0].push(s), !o && i[1].push(s), i;
                    },
                    [[], []],
                );
            }
        },
        417144: (e, t, i) => {
            "use strict";
            function s(e, t = 1) {
                let i = t;
                const s = new Map();
                let r = 0,
                    o = 0,
                    n = 0,
                    a = null;
                function l() {
                    s.clear(), (r = 0), (o = 0), (n = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        s.set(e, { time: Date.now(), bytes: t }), o || (o = Date.now());
                    },
                    uploadFinish: function (d, h) {
                        const c = s.get(d);
                        c &&
                            ((r += h - c.bytes),
                            s.delete(d),
                            ++n === i &&
                                (function () {
                                    if (!o) return;
                                    const s = Date.now() - o;
                                    if (s <= 0) return;
                                    if (1 !== t) return;
                                    const n = r / s;
                                    if (n < 5e3 && 1 === i) return;
                                    !a || a.byterate < n ? ((i += 1), e(), (a = { byterate: n, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    l();
                                })());
                    },
                    reset: l,
                    getPoolSize: () => i,
                    start: function () {
                        for (let t = 0; t < i; ++t) e();
                    },
                };
            }
            i.d(t, { Z: () => h, d: () => y });
            i(543673), i(240753), i(128399);
            function r(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const s = e[i];
                    s && t.set(i, s);
                }
                return `&${String(t)}`;
            }
            function o(e, t = a, i = n) {
                const s = Math.max(e, t);
                return Math.min(s, i);
            }
            const n = 5242880,
                a = 65536,
                l = 2e3,
                d = 1e4;
            class h {
                constructor(e, t = I) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), o(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== E.SUCCEEDED && this.state !== E.PENDING && ((this.state = E.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: y.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || I), (this.state = E.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = E.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = I),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return o(((1e3 * e.downlink) / 8 / 2) * l);
                                    if ("wifi" === t) return o(5 * a);
                                }
                                return o(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, s = I) {
                    (this.uploadOptions = s), (this.state = E.PENDING), (this.progressMode = "uploading");
                    let o = r({ source_url: e, media_type: t, media_category: i });
                    (o += this.uploadOptions.extraInitParams || ""), (o += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        o,
                        (e) => {
                            (this.mediaId = e.media_id_string), this._getStatus();
                        },
                        (...e) => this._uploadError(...e),
                        u,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const e = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (e.enable_1080p_variant = String(!0));
                        const { mediaItem: t } = this.uploadOptions;
                        if (t?.mediaFile?.duration) {
                            const i = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(i);
                        }
                        let i = r(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                u,
                            );
                    } else this._uploadError({ code: y.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === E.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(c, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: y.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let e = 0;
                    this.inflightSegments.forEach(({ bytes: t }) => (e += t));
                    const t = e + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        s.append("media", e);
                    }
                    const o = this.segmentIndex;
                    this.segmentIndex += 1;
                    const n = r({ media_id: this.mediaId, segment_index: String(o) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            n,
                            () => {
                                if (this.state === E.PENDING) {
                                    const e = this.inflightSegments.get(o);
                                    e && (this.inflightSegments.delete(o), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(o, { bytes: i, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = E.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = r(e);
                        (t += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                t,
                                (...e) => this._finalizeOrStatusSuccess(...e),
                                (...e) => this._uploadError(...e),
                                u,
                            );
                    }
                }
                _finalizeOrStatusSuccess(e) {
                    this._setSessionTimeout(e.expires_after_secs);
                    const t = e.processing_info;
                    if (!t) return void this._finalizeSuccess(e);
                    let i = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (i = t.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let i;
                            return (i = e?.code ? w[String(e.code)] : y.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === E.PENDING) {
                        const e = r({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            u,
                        );
                    }
                }
                _finalizeSuccess(e) {
                    this.state === E.PENDING && ((this.state = E.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== E.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: y.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: y.INTERNAL_ERROR, message: e?.error });
                    (this.state = E.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== E.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === E.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === E.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        r = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += r), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: e, status: t, duration: r, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(e, t, i, s, r, n, a, d, h = 0) {
                    const c = `${this.uploadUrl}?command=${t}${i}`;
                    let u = !1;
                    const p = new Date(),
                        g = (o) => {
                            if (n) {
                                const o = [c, n].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(e, t, i, s, r, n - 1, a, d, h);
                                }, _);
                            } else w(o);
                        },
                        w = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: h }), "function" == typeof r && r(S(E) || { code: y.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(e, c, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const e = S(E);
                                204 === E.status || e ? (this._stats(t, "success", { requestStartTime: p, segmentBytes: h }), s(e || {}), !u && d && d()) : g("parsererror");
                            } else E.status && 503 !== E.status ? w("invalid-response") : g("503");
                        }),
                        (E.onerror = () => g("error")),
                        (E.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let I = !1;
                    E.upload.onprogress = (e) => {
                        I ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(c, e.total) : ((I = !0), this._bitrateMonitor?.uploadStart(c, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > f && !u && ((u = !0), a))) {
                            const e = Math.max(1, new Date().getTime() - p.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || l,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return o(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) E.setRequestHeader(e, this.sruHeaders[e]);
                    return a ? E.send(a) : E.send(), E;
                }
            }
            const c = 2147483647,
                u = 1,
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                _ = 1e3,
                y = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                w = Object.freeze({ 0: y.INTERNAL_ERROR, 1: y.INVALID_MEDIA, 2: y.FILE_TOO_LARGE, 3: y.UNSUPPORTED_MEDIA, 4: y.TIMEOUT }),
                E = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                I = {};
            function S(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        936386: (e) => {
            function t(e, t, i) {
                var s, r, o, n, a;
                function l() {
                    var d = Date.now() - n;
                    d < t && d >= 0 ? (s = setTimeout(l, t - d)) : ((s = null), i || ((a = e.apply(o, r)), (o = r = null)));
                }
                null == t && (t = 100);
                var d = function () {
                    (o = this), (r = arguments), (n = Date.now());
                    var d = i && !s;
                    return s || (s = setTimeout(l, t)), d && ((a = e.apply(o, r)), (o = r = null)), a;
                };
                return (
                    (d.clear = function () {
                        s && (clearTimeout(s), (s = null));
                    }),
                    (d.flush = function () {
                        s && ((a = e.apply(o, r)), (o = r = null), clearTimeout(s), (s = null));
                    }),
                    d
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-6107ac1a.e8734d3a.js.map
