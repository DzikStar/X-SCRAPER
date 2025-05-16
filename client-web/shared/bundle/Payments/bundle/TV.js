"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Payments~bundle.TV"],
    {
        420412: (t, e, r) => {
            r.d(e, { Z: () => c });
            var n = r(202784),
                o = r(325686),
                i = r(235902),
                l = r(885015),
                u = r(392237);
            function c({ borderColor: t = "borderColor", isSlim: e = !1, label: r }) {
                const { isWebRedesign: c } = i.ZP.useProps(),
                    a = "borderColor" === t || "nestedBorderColor" === t ? s[t] : { backgroundColor: u.default.theme.colors[t] ?? u.default.theme.colors.borderColor };
                return r ? n.createElement(l.Z, { style: !e && s.root, withGutter: !0 }, n.createElement(o.Z, { style: s.gapColumn }, n.createElement(o.Z, { style: [s.gap, a] })), n.createElement(o.Z, { style: s.gapText }, r), n.createElement(o.Z, { style: s.gapColumn }, n.createElement(o.Z, { style: [s.gap, a] }))) : n.createElement(o.Z, { style: [!e && s.root, c() && s.rootRedesign, s.gap, a] });
            }
            const s = u.default.create((t) => ({ borderColor: { backgroundColor: u.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: u.default.theme.colors.nestedBorderColor }, gap: { height: t.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: t.spaces.space4 }, rootRedesign: { marginHorizontal: t.spaces.space16 } }));
        },
        885015: (t, e, r) => {
            r.d(e, { Z: () => s });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                l = r(392237);
            class u extends o.Component {
                render() {
                    const { children: t, style: e, withGutter: r, ...l } = this.props,
                        u = o.Children.map(t, (t) => t && o.cloneElement(t, { style: [t.props.style, c.column, r && c.withGutterColumn] }));
                    return o.createElement(i.Z, (0, n.Z)({ style: [e, c.root, r && c.withGutter] }, l), u);
                }
            }
            u.defaultProps = { withGutter: !1 };
            const c = l.default.create((t) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${t.spaces.space4}` }, withGutterColumn: { marginHorizontal: t.spaces.space4 } })),
                s = u;
        },
        429371: (t, e, r) => {
            r.d(e, { Z: () => s });
            var n = r(202784);
            r(543673), r(240753), r(128399);
            const o = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 },
                i = (t, e, r, n, o, i) => {
                    t.beginPath(), t.translate(e, r), t.rotate(n), t.arc(-o, -o, 2.5 * o, Math.PI, -Math.PI / 2), t.lineTo(o, -3.5 * o), t.arc(o, -o, 2.5 * o, -Math.PI / 2, 0), t.lineTo(3.5 * o, -o), t.arc(o, o, 2.5 * o, 0, Math.PI / 2), t.lineTo(-o, 3.5 * o), t.arc(-o, o, 2.5 * o, Math.PI / 2, Math.PI), t.lineTo(-3.5 * o, -o), t.arc(-o, -o, 1.5 * o, Math.PI, -Math.PI / 2), t.lineTo(o, -2.5 * o), t.arc(o, -o, 1.5 * o, -Math.PI / 2, 0), t.lineTo(2.5 * o, -o), t.arc(o, o, 1.5 * o, 0, Math.PI / 2), t.lineTo(-o, 2.5 * o), t.arc(-o, o, 1.5 * o, Math.PI / 2, Math.PI), t.lineTo(-2.5 * o, -o), t.closePath(), t.rotate(-n), t.translate(-e, -r), (t.strokeStyle = i), (t.fillStyle = i), t.fill("evenodd");
                },
                l = (t, e, r, n, o, i) => {
                    t.beginPath(), t.translate(e, r), t.rotate(n), t.arc(0, 0, o / 2, 0, 2 * Math.PI), t.closePath(), t.rotate(-n), t.translate(-e, -r), (t.strokeStyle = i), (t.fillStyle = i), t.fill("evenodd");
                },
                u = async (t, e, r) => {
                    const n = e.getModuleCount(),
                        u = Math.floor(r.dimension / n),
                        c = r.imageSize * o[r.errorCorrectionLevel],
                        s = Math.floor(c * n * n),
                        a = { ...r, count: n, dotSize: u },
                        f = await (async (t) =>
                            new Promise((e) => {
                                const r = new Image(),
                                    n = new Blob([((o = t.fillColor), `<svg fill="${o}" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`)], { type: "image/svg+xml;charset=utf-8" });
                                var o;
                                const i = URL.createObjectURL(n);
                                (r.onload = () => {
                                    e(r);
                                }),
                                    (r.src = i);
                            }))(a),
                        h = ((t, e, r, n) => {
                            const { height: o, width: i } = t,
                                l = o / i,
                                u = Math.min(Math.max(Math.floor(Math.sqrt(e / l)), 1), r),
                                c = u * l - 1,
                                s = (u - 5) * n;
                            return { width: s, height: Math.round(s * l), numYDotHidden: c, numXDotHidden: u };
                        })(f, s, n - 14, u);
                    ((t, e) => {
                        t.clearRect(0, 0, e.dimension, e.dimension);
                    })(t, a),
                        ((t, e) => {
                            (t.fillStyle = e.backgroundColor), t.fillRect(0, 0, e.dimension, e.dimension);
                        })(t, a),
                        ((t, e, r, n) => {
                            const { count: o, dimension: i, dotSize: u, fillColor: c } = n,
                                { numXDotHidden: s, numYDotHidden: a } = r,
                                f = Math.floor((i - o * u) / 2);
                            for (let r = 0; r < o; r++) for (let n = 0; n < o; n++) e.isDark(r, n) && ((r >= (o - s) / 2 && r < (o + s) / 2 && n >= (o - a) / 2 && n < (o + a) / 2) || (r < 7 && n < 7) || (r < 7 && n >= o - 7) || (n < 7 && r >= o - 7) || l(t, f + r * u + u / 2, f + n * u + u / 2, 0, u, c));
                        })(t, e, h, a),
                        ((t, e, r, n) => {
                            const { dimension: o, dotSize: i } = n,
                                { height: l, width: u } = r,
                                c = (o - u + i) / 2,
                                s = (o - l + i) / 2;
                            t.drawImage(e, c, s, u, l);
                        })(t, f, h, a),
                        ((t, e) => {
                            const { count: r, dimension: n, dotSize: o, fillColor: u } = e,
                                c = Math.floor((n - r * o) / 2),
                                s = 7 * o,
                                a = 3 * o,
                                f = { 0: [0, 0, 0], 1: [1, 0, Math.PI / 2], 2: [0, 1, -Math.PI / 2] };
                            for (let e = 0; e < 3; e++) {
                                const [n, h, g] = f[e],
                                    d = c + n * o * (r - 7),
                                    w = c + h * o * (r - 7);
                                i(t, d + s / 2, w + s / 2, g, o, u), l(t, d + 2 * o + a / 2, w + 2 * o + a / 2, g, a, u);
                            }
                        })(t, a);
                };
            var c = r(144739);
            const s = (t) => {
                const { backgroundColor: e = "#000", dimension: r = 512, errorCorrectionLevel: o = "Q", fillColor: i = "#fff", imageSize: l = 0.5, link: s, mode: a = "Byte", typeNumber: f = 0 } = t,
                    h = n.useRef(null),
                    g = n.useMemo(() => {
                        const t = (0, c.r)(f, o);
                        return t.addData(s, a), t.make(), t;
                    }, [s, f, o, a]);
                return (
                    n.useEffect(() => {
                        const t = h.current;
                        if (!t) return;
                        const n = t.getContext("2d");
                        if (!n) return;
                        (t.width = r), (t.height = r);
                        u(n, g, { dimension: r, imageSize: l, errorCorrectionLevel: o, backgroundColor: e, fillColor: i });
                    }, [h, g, r, o, l, e, i]),
                    n.createElement("canvas", { ref: h })
                );
            };
        },
        144739: (t, e, r) => {
            r.d(e, { r: () => n });
            r(571372), r(136728);
            t = r.hmd(t);
            const n = (function () {
                const t = function (t, e) {
                    let r = t;
                    const n = i[e];
                    let o = null,
                        l = 0,
                        u = null;
                    const c = [],
                        s = {},
                        a = function (t, e) {
                            (l = 4 * r + 17),
                                (o = (function (t) {
                                    const e = new Array(t);
                                    for (let r = 0; r < t; r += 1) {
                                        e[r] = new Array(t);
                                        for (let n = 0; n < t; n += 1) e[r][n] = null;
                                    }
                                    return e;
                                })(l)),
                                f(0, 0),
                                f(l - 7, 0),
                                f(0, l - 7),
                                g(),
                                h(),
                                B(t, e),
                                r >= 7 && w(t),
                                null === u && (u = A(r, n, c)),
                                x(u, e);
                        },
                        f = function (t, e) {
                            for (let r = -1; r <= 7; r += 1) if (!(t + r <= -1 || l <= t + r)) for (let n = -1; n <= 7; n += 1) e + n <= -1 || l <= e + n || (o[t + r][e + n] = (r >= 0 && r <= 6 && (0 === n || 6 === n)) || (n >= 0 && n <= 6 && (0 === r || 6 === r)) || (r >= 2 && r <= 4 && n >= 2 && n <= 4));
                        },
                        h = function () {
                            for (let t = 8; t < l - 8; t += 1) null === o[t][6] && (o[t][6] = t % 2 == 0);
                            for (let t = 8; t < l - 8; t += 1) null === o[6][t] && (o[6][t] = t % 2 == 0);
                        },
                        g = function () {
                            const t = d.getPatternPosition(r);
                            for (let e = 0; e < t.length; e += 1)
                                for (let r = 0; r < t.length; r += 1) {
                                    const n = t[e],
                                        i = t[r];
                                    if (null === o[n][i]) for (let t = -2; t <= 2; t += 1) for (let e = -2; e <= 2; e += 1) o[n + t][i + e] = -2 === t || 2 === t || -2 === e || 2 === e || (0 === t && 0 === e);
                                }
                        },
                        w = function (t) {
                            const e = d.getBCHTypeNumber(r);
                            for (let r = 0; r < 18; r += 1) {
                                const n = !t && 1 == ((e >> r) & 1);
                                o[Math.floor(r / 3)][(r % 3) + l - 8 - 3] = n;
                            }
                            for (let r = 0; r < 18; r += 1) {
                                const n = !t && 1 == ((e >> r) & 1);
                                o[(r % 3) + l - 8 - 3][Math.floor(r / 3)] = n;
                            }
                        },
                        B = function (t, e) {
                            const r = (n << 3) | e,
                                i = d.getBCHTypeInfo(r);
                            for (let e = 0; e < 15; e += 1) {
                                const r = !t && 1 == ((i >> e) & 1);
                                e < 6 ? (o[e][8] = r) : e < 8 ? (o[e + 1][8] = r) : (o[l - 15 + e][8] = r);
                            }
                            for (let e = 0; e < 15; e += 1) {
                                const r = !t && 1 == ((i >> e) & 1);
                                e < 8 ? (o[8][l - e - 1] = r) : e < 9 ? (o[8][15 - e - 1 + 1] = r) : (o[8][15 - e - 1] = r);
                            }
                            o[l - 8][8] = !t;
                        },
                        x = function (t, e) {
                            let r = -1,
                                n = l - 1,
                                i = 7,
                                u = 0;
                            const c = d.getMaskFunction(e);
                            for (let e = l - 1; e > 0; e -= 2)
                                for (6 === e && (e -= 1); ; ) {
                                    for (let r = 0; r < 2; r += 1)
                                        if (null === o[n][e - r]) {
                                            let l = !1;
                                            u < t.length && (l = 1 == ((t[u] >>> i) & 1));
                                            c(n, e - r) && (l = !l), (o[n][e - r] = l), (i -= 1), -1 === i && ((u += 1), (i = 7));
                                        }
                                    if (((n += r), n < 0 || l <= n)) {
                                        (n -= r), (r = -r);
                                        break;
                                    }
                                }
                        },
                        A = function (t, e, r) {
                            const n = y.getRSBlocks(t, e),
                                o = m();
                            for (let e = 0; e < r.length; e += 1) {
                                const n = r[e];
                                o.put(n.getMode(), 4), o.put(n.getLength(), d.getLengthInBits(n.getMode(), t)), n.write(o);
                            }
                            let i = 0;
                            for (let t = 0; t < n.length; t += 1) i += n[t].dataCount;
                            if (o.getLengthInBits() > 8 * i) throw new Error(`code length overflow. (${o.getLengthInBits()}>${8 * i})`);
                            for (o.getLengthInBits() + 4 <= 8 * i && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(!1);
                            for (; !(o.getLengthInBits() >= 8 * i || (o.put(236, 8), o.getLengthInBits() >= 8 * i)); ) o.put(17, 8);
                            return (function (t, e) {
                                let r = 0,
                                    n = 0,
                                    o = 0;
                                const i = new Array(e.length),
                                    l = new Array(e.length);
                                for (let u = 0; u < e.length; u += 1) {
                                    const c = e[u].dataCount,
                                        s = e[u].totalCount - c;
                                    (n = Math.max(n, c)), (o = Math.max(o, s)), (i[u] = new Array(c));
                                    for (let e = 0; e < i[u].length; e += 1) i[u][e] = 255 & t.getBuffer()[e + r];
                                    r += c;
                                    const a = d.getErrorCorrectPolynomial(s),
                                        f = p(i[u], a.getLength() - 1).mod(a);
                                    l[u] = new Array(a.getLength() - 1);
                                    for (let t = 0; t < l[u].length; t += 1) {
                                        const e = t + f.getLength() - l[u].length;
                                        l[u][t] = e >= 0 ? f.getAt(e) : 0;
                                    }
                                }
                                let u = 0;
                                for (let t = 0; t < e.length; t += 1) u += e[t].totalCount;
                                const c = new Array(u);
                                let s = 0;
                                for (let t = 0; t < n; t += 1) for (let r = 0; r < e.length; r += 1) t < i[r].length && ((c[s] = i[r][t]), (s += 1));
                                for (let t = 0; t < o; t += 1) for (let r = 0; r < e.length; r += 1) t < l[r].length && ((c[s] = l[r][t]), (s += 1));
                                return c;
                            })(o, n);
                        };
                    (s.addData = function (t, e) {
                        let r = null;
                        switch ((e = e || "Byte")) {
                            case "Numeric":
                                r = C(t);
                                break;
                            case "Alphanumeric":
                                r = b(t);
                                break;
                            case "Byte":
                                r = M(t);
                                break;
                            case "Kanji":
                                r = k(t);
                                break;
                            default:
                                throw new Error(`mode:${e}`);
                        }
                        c.push(r), (u = null);
                    }),
                        (s.isDark = function (t, e) {
                            if (t < 0 || l <= t || e < 0 || l <= e) throw new Error(`${t},${e}`);
                            return o[t][e];
                        }),
                        (s.getModuleCount = function () {
                            return l;
                        }),
                        (s.make = function () {
                            if (r < 1) {
                                let t = 1;
                                for (; t < 40; t++) {
                                    const e = y.getRSBlocks(t, n),
                                        r = m();
                                    for (let e = 0; e < c.length; e++) {
                                        const n = c[e];
                                        r.put(n.getMode(), 4), r.put(n.getLength(), d.getLengthInBits(n.getMode(), t)), n.write(r);
                                    }
                                    let o = 0;
                                    for (let t = 0; t < e.length; t++) o += e[t].dataCount;
                                    if (r.getLengthInBits() <= 8 * o) break;
                                }
                                r = t;
                            }
                            a(
                                !1,
                                (function () {
                                    let t = 0,
                                        e = 0;
                                    for (let r = 0; r < 8; r += 1) {
                                        a(!0, r);
                                        const n = d.getLostPoint(s);
                                        (0 === r || t > n) && ((t = n), (e = r));
                                    }
                                    return e;
                                })(),
                            );
                        }),
                        (s.createTableTag = function (t, e) {
                            t = t || 2;
                            let r = "";
                            (r += '<table style="'), (r += " border-width: 0px; border-style: none;"), (r += " border-collapse: collapse;"), (r += ` padding: 0px; margin: ${(e = void 0 === e ? 4 * t : e)}px;`), (r += '">'), (r += "<tbody>");
                            for (let e = 0; e < s.getModuleCount(); e += 1) {
                                r += "<tr>";
                                for (let n = 0; n < s.getModuleCount(); n += 1) (r += '<td style="'), (r += " border-width: 0px; border-style: none;"), (r += " border-collapse: collapse;"), (r += " padding: 0px; margin: 0px;"), (r += ` width: ${t}px;`), (r += ` height: ${t}px;`), (r += " background-color: "), (r += s.isDark(e, n) ? "#000000" : "#ffffff"), (r += ";"), (r += '"/>');
                                r += "</tr>";
                            }
                            return (r += "</tbody>"), (r += "</table>"), r;
                        }),
                        (s.createSvgTag = function (t, e, r, n) {
                            let o = {};
                            "object" == typeof rest[0] && ((o = rest[0]), (t = o.cellSize), (e = o.margin), (r = o.alt), (n = o.title)), (t = t || 2), (e = void 0 === e ? 4 * t : e), ((r = "string" == typeof r ? { text: r } : r || {}).text = r.text || null), (r.id = r.text ? r.id || "qrcode-description" : null), ((n = "string" == typeof n ? { text: n } : n || {}).text = n.text || null), (n.id = n.text ? n.id || "qrcode-title" : null);
                            const i = s.getModuleCount() * t + 2 * e;
                            let l,
                                u,
                                c,
                                a,
                                f = "";
                            const h = `l${t},0 0,${t} -${t},0 0,-${t}z `;
                            for (f += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', f += o.scalable ? "" : ` width="${i}px" height="${i}px"`, f += ` viewBox="0 0 ${i} ${i}" `, f += ' preserveAspectRatio="xMinYMin meet"', f += n.text || r.text ? ` role="img" aria-labelledby="${L([n.id, r.id].join(" ").trim())}"` : "", f += ">", f += n.text ? `<title id="${L(n.id)}">${L(n.text)}</title>` : "", f += r.text ? `<description id="${L(r.id)}">${L(r.text)}</description>` : "", f += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', f += '<path d="', c = 0; c < s.getModuleCount(); c += 1) for (a = c * t + e, l = 0; l < s.getModuleCount(); l += 1) s.isDark(c, l) && ((u = l * t + e), (f += `M${u},${a}${h}`));
                            return (f += '" stroke="transparent" fill="black"/>'), (f += "</svg>"), f;
                        }),
                        (s.createDataURL = function (t, e) {
                            (t = t || 2), (e = void 0 === e ? 4 * t : e);
                            const r = s.getModuleCount() * t + 2 * e,
                                n = e,
                                o = r - e;
                            return $(r, r, function (e, r) {
                                if (n <= e && e < o && n <= r && r < o) {
                                    const o = Math.floor((e - n) / t),
                                        i = Math.floor((r - n) / t);
                                    return s.isDark(i, o) ? 0 : 1;
                                }
                                return 1;
                            });
                        }),
                        (s.createImgTag = function (t, e, r) {
                            (t = t || 2), (e = void 0 === e ? 4 * t : e);
                            const n = s.getModuleCount() * t + 2 * e;
                            let o = "";
                            return (o += "<img"), (o += ' src="'), (o += s.createDataURL(t, e)), (o += '"'), (o += ' width="'), (o += n), (o += '"'), (o += ' height="'), (o += n), (o += '"'), r && ((o += ' alt="'), (o += L(r)), (o += '"')), (o += "/>"), o;
                        });
                    const L = function (t) {
                        let e = "";
                        for (let r = 0; r < t.length; r += 1) {
                            const n = t.charAt(r);
                            switch (n) {
                                case "<":
                                    e += "&lt;";
                                    break;
                                case ">":
                                    e += "&gt;";
                                    break;
                                case "&":
                                    e += "&amp;";
                                    break;
                                case '"':
                                    e += "&quot;";
                                    break;
                                default:
                                    e += n;
                            }
                        }
                        return e;
                    };
                    return (
                        (s.createASCII = function (t, e) {
                            if ((t = t || 1) < 2)
                                return (function (t) {
                                    t = void 0 === t ? 2 : t;
                                    const e = 1 * s.getModuleCount() + 2 * t,
                                        r = t,
                                        n = e - t;
                                    let o, i, l, u, c;
                                    const a = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
                                        f = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " };
                                    let h = "";
                                    for (o = 0; o < e; o += 2) {
                                        for (l = Math.floor((o - r) / 1), u = Math.floor((o + 1 - r) / 1), i = 0; i < e; i += 1) (c = "█"), r <= i && i < n && r <= o && o < n && s.isDark(l, Math.floor((i - r) / 1)) && (c = " "), r <= i && i < n && r <= o + 1 && o + 1 < n && s.isDark(u, Math.floor((i - r) / 1)) ? (c += " ") : (c += "█"), (h += t < 1 && o + 1 >= n ? f[c] : a[c]);
                                        h += "\n";
                                    }
                                    return e % 2 && t > 0 ? h.substring(0, h.length - e - 1) + Array(e + 1).join("▀") : h.substring(0, h.length - 1);
                                })(e);
                            (t -= 1), (e = void 0 === e ? 2 * t : e);
                            const r = s.getModuleCount() * t + 2 * e,
                                n = e,
                                o = r - e;
                            let i, l, u, c;
                            const a = Array(t + 1).join("██"),
                                f = Array(t + 1).join("  ");
                            let h = "",
                                g = "";
                            for (i = 0; i < r; i += 1) {
                                for (u = Math.floor((i - n) / t), g = "", l = 0; l < r; l += 1) (c = 1), n <= l && l < o && n <= i && i < o && s.isDark(u, Math.floor((l - n) / t)) && (c = 0), (g += c ? a : f);
                                for (u = 0; u < t; u += 1) h += `${g}\n`;
                            }
                            return h.substring(0, h.length - 1);
                        }),
                        (s.renderTo2dContext = function (t, e) {
                            e = e || 2;
                            const r = s.getModuleCount();
                            for (let n = 0; n < r; n++) for (let o = 0; o < r; o++) (t.fillStyle = s.isDark(n, o) ? "black" : "white"), t.fillRect(n * e, o * e, e, e);
                        }),
                        s
                    );
                };
                (t.stringToBytes = (t.stringToBytesFuncs = {
                    default: function (t) {
                        const e = [];
                        for (let r = 0; r < t.length; r += 1) {
                            const n = t.charCodeAt(r);
                            e.push(255 & n);
                        }
                        return e;
                    },
                }).default),
                    (t.createStringToBytes = function (t, e) {
                        const r = (function () {
                                const r = x(t),
                                    n = function () {
                                        const t = r.read();
                                        if (-1 === t) throw new Error("eof");
                                        return t;
                                    };
                                let o = 0;
                                const i = {};
                                for (;;) {
                                    const t = r.read();
                                    if (-1 === t) break;
                                    const e = n(),
                                        l = (n() << 8) | n();
                                    (i[String.fromCharCode((t << 8) | e)] = l), (o += 1);
                                }
                                if (o !== e) throw new Error(`${o} != ${e}`);
                                return i;
                            })(),
                            n = "?".charCodeAt(0);
                        return function (t) {
                            const e = [];
                            for (let o = 0; o < t.length; o += 1) {
                                const i = t.charCodeAt(o);
                                if (i < 128) e.push(i);
                                else {
                                    const i = r[t.charAt(o)];
                                    "number" == typeof i ? ((255 & i) === i ? e.push(i) : (e.push(i >>> 8), e.push(255 & i))) : e.push(n);
                                }
                            }
                            return e;
                        };
                    });
                const e = 1,
                    r = 2,
                    n = 4,
                    o = 8,
                    i = { L: 1, M: 0, Q: 3, H: 2 },
                    l = 0,
                    u = 1,
                    c = 2,
                    s = 3,
                    a = 4,
                    f = 5,
                    h = 6,
                    g = 7,
                    d = (function () {
                        const t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                            i = 1335,
                            d = 7973,
                            y = {},
                            m = function (t) {
                                let e = 0;
                                for (; 0 !== t; ) (e += 1), (t >>>= 1);
                                return e;
                            };
                        return (
                            (y.getBCHTypeInfo = function (t) {
                                let e = t << 10;
                                for (; m(e) - m(i) >= 0; ) e ^= i << (m(e) - m(i));
                                return 21522 ^ ((t << 10) | e);
                            }),
                            (y.getBCHTypeNumber = function (t) {
                                let e = t << 12;
                                for (; m(e) - m(d) >= 0; ) e ^= d << (m(e) - m(d));
                                return (t << 12) | e;
                            }),
                            (y.getPatternPosition = function (e) {
                                return t[e - 1];
                            }),
                            (y.getMaskFunction = function (t) {
                                switch (t) {
                                    case l:
                                        return function (t, e) {
                                            return (t + e) % 2 == 0;
                                        };
                                    case u:
                                        return function (t, e) {
                                            return t % 2 == 0;
                                        };
                                    case c:
                                        return function (t, e) {
                                            return e % 3 == 0;
                                        };
                                    case s:
                                        return function (t, e) {
                                            return (t + e) % 3 == 0;
                                        };
                                    case a:
                                        return function (t, e) {
                                            return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                                        };
                                    case f:
                                        return function (t, e) {
                                            return ((t * e) % 2) + ((t * e) % 3) == 0;
                                        };
                                    case h:
                                        return function (t, e) {
                                            return (((t * e) % 2) + ((t * e) % 3)) % 2 == 0;
                                        };
                                    case g:
                                        return function (t, e) {
                                            return (((t * e) % 3) + ((t + e) % 2)) % 2 == 0;
                                        };
                                    default:
                                        throw new Error(`bad maskPattern:${t}`);
                                }
                            }),
                            (y.getErrorCorrectPolynomial = function (t) {
                                let e = p([1], 0);
                                for (let r = 0; r < t; r += 1) e = e.multiply(p([1, w.gexp(r)], 0));
                                return e;
                            }),
                            (y.getLengthInBits = function (t, i) {
                                if (i >= 1 && i < 10)
                                    switch (t) {
                                        case e:
                                            return 10;
                                        case r:
                                            return 9;
                                        case n:
                                        case o:
                                            return 8;
                                        default:
                                            throw new Error(`mode:${t}`);
                                    }
                                else if (i < 27)
                                    switch (t) {
                                        case e:
                                            return 12;
                                        case r:
                                            return 11;
                                        case n:
                                            return 16;
                                        case o:
                                            return 10;
                                        default:
                                            throw new Error(`mode:${t}`);
                                    }
                                else {
                                    if (!(i < 41)) throw new Error(`type:${i}`);
                                    switch (t) {
                                        case e:
                                            return 14;
                                        case r:
                                            return 13;
                                        case n:
                                            return 16;
                                        case o:
                                            return 12;
                                        default:
                                            throw new Error(`mode:${t}`);
                                    }
                                }
                            }),
                            (y.getLostPoint = function (t) {
                                const e = t.getModuleCount();
                                let r = 0;
                                for (let n = 0; n < e; n += 1)
                                    for (let o = 0; o < e; o += 1) {
                                        let i = 0;
                                        const l = t.isDark(n, o);
                                        for (let r = -1; r <= 1; r += 1) if (!(n + r < 0 || e <= n + r)) for (let u = -1; u <= 1; u += 1) o + u < 0 || e <= o + u || (0 === r && 0 === u) || (l === t.isDark(n + r, o + u) && (i += 1));
                                        i > 5 && (r += 3 + i - 5);
                                    }
                                for (let n = 0; n < e - 1; n += 1)
                                    for (let o = 0; o < e - 1; o += 1) {
                                        let e = 0;
                                        t.isDark(n, o) && (e += 1), t.isDark(n + 1, o) && (e += 1), t.isDark(n, o + 1) && (e += 1), t.isDark(n + 1, o + 1) && (e += 1), (0 !== e && 4 !== e) || (r += 3);
                                    }
                                for (let n = 0; n < e; n += 1) for (let o = 0; o < e - 6; o += 1) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
                                for (let n = 0; n < e; n += 1) for (let o = 0; o < e - 6; o += 1) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
                                let n = 0;
                                for (let r = 0; r < e; r += 1) for (let o = 0; o < e; o += 1) t.isDark(o, r) && (n += 1);
                                return (r += 10 * (Math.abs((100 * n) / e / e - 50) / 5)), r;
                            }),
                            y
                        );
                    })(),
                    w = (function () {
                        const t = new Array(256),
                            e = new Array(256);
                        for (let e = 0; e < 8; e += 1) t[e] = 1 << e;
                        for (let e = 8; e < 256; e += 1) t[e] = t[e - 4] ^ t[e - 5] ^ t[e - 6] ^ t[e - 8];
                        for (let r = 0; r < 255; r += 1) e[t[r]] = r;
                        const r = {
                            glog: function (t) {
                                if (t < 1) throw new Error(`glog(${t})`);
                                return e[t];
                            },
                            gexp: function (e) {
                                for (; e < 0; ) e += 255;
                                for (; e >= 256; ) e -= 255;
                                return t[e];
                            },
                        };
                        return r;
                    })();
                function p(t, e) {
                    if (void 0 === t.length) throw new Error(`${t.length}/${e}`);
                    const r = (function () {
                            let r = 0;
                            for (; r < t.length && 0 === t[r]; ) r += 1;
                            const n = new Array(t.length - r + e);
                            for (let e = 0; e < t.length - r; e += 1) n[e] = t[e + r];
                            return n;
                        })(),
                        n = {
                            getAt: function (t) {
                                return r[t];
                            },
                            getLength: function () {
                                return r.length;
                            },
                            multiply: function (t) {
                                const e = new Array(n.getLength() + t.getLength() - 1);
                                for (let r = 0; r < n.getLength(); r += 1) for (let o = 0; o < t.getLength(); o += 1) e[r + o] ^= w.gexp(w.glog(n.getAt(r)) + w.glog(t.getAt(o)));
                                return p(e, 0);
                            },
                            mod: function (t) {
                                if (n.getLength() - t.getLength() < 0) return n;
                                const e = w.glog(n.getAt(0)) - w.glog(t.getAt(0)),
                                    r = new Array(n.getLength());
                                for (let t = 0; t < n.getLength(); t += 1) r[t] = n.getAt(t);
                                for (let n = 0; n < t.getLength(); n += 1) r[n] ^= w.gexp(w.glog(t.getAt(n)) + e);
                                return p(r, 0).mod(t);
                            },
                        };
                    return n;
                }
                const y = (function () {
                        const t = [
                                [1, 26, 19],
                                [1, 26, 16],
                                [1, 26, 13],
                                [1, 26, 9],
                                [1, 44, 34],
                                [1, 44, 28],
                                [1, 44, 22],
                                [1, 44, 16],
                                [1, 70, 55],
                                [1, 70, 44],
                                [2, 35, 17],
                                [2, 35, 13],
                                [1, 100, 80],
                                [2, 50, 32],
                                [2, 50, 24],
                                [4, 25, 9],
                                [1, 134, 108],
                                [2, 67, 43],
                                [2, 33, 15, 2, 34, 16],
                                [2, 33, 11, 2, 34, 12],
                                [2, 86, 68],
                                [4, 43, 27],
                                [4, 43, 19],
                                [4, 43, 15],
                                [2, 98, 78],
                                [4, 49, 31],
                                [2, 32, 14, 4, 33, 15],
                                [4, 39, 13, 1, 40, 14],
                                [2, 121, 97],
                                [2, 60, 38, 2, 61, 39],
                                [4, 40, 18, 2, 41, 19],
                                [4, 40, 14, 2, 41, 15],
                                [2, 146, 116],
                                [3, 58, 36, 2, 59, 37],
                                [4, 36, 16, 4, 37, 17],
                                [4, 36, 12, 4, 37, 13],
                                [2, 86, 68, 2, 87, 69],
                                [4, 69, 43, 1, 70, 44],
                                [6, 43, 19, 2, 44, 20],
                                [6, 43, 15, 2, 44, 16],
                                [4, 101, 81],
                                [1, 80, 50, 4, 81, 51],
                                [4, 50, 22, 4, 51, 23],
                                [3, 36, 12, 8, 37, 13],
                                [2, 116, 92, 2, 117, 93],
                                [6, 58, 36, 2, 59, 37],
                                [4, 46, 20, 6, 47, 21],
                                [7, 42, 14, 4, 43, 15],
                                [4, 133, 107],
                                [8, 59, 37, 1, 60, 38],
                                [8, 44, 20, 4, 45, 21],
                                [12, 33, 11, 4, 34, 12],
                                [3, 145, 115, 1, 146, 116],
                                [4, 64, 40, 5, 65, 41],
                                [11, 36, 16, 5, 37, 17],
                                [11, 36, 12, 5, 37, 13],
                                [5, 109, 87, 1, 110, 88],
                                [5, 65, 41, 5, 66, 42],
                                [5, 54, 24, 7, 55, 25],
                                [11, 36, 12, 7, 37, 13],
                                [5, 122, 98, 1, 123, 99],
                                [7, 73, 45, 3, 74, 46],
                                [15, 43, 19, 2, 44, 20],
                                [3, 45, 15, 13, 46, 16],
                                [1, 135, 107, 5, 136, 108],
                                [10, 74, 46, 1, 75, 47],
                                [1, 50, 22, 15, 51, 23],
                                [2, 42, 14, 17, 43, 15],
                                [5, 150, 120, 1, 151, 121],
                                [9, 69, 43, 4, 70, 44],
                                [17, 50, 22, 1, 51, 23],
                                [2, 42, 14, 19, 43, 15],
                                [3, 141, 113, 4, 142, 114],
                                [3, 70, 44, 11, 71, 45],
                                [17, 47, 21, 4, 48, 22],
                                [9, 39, 13, 16, 40, 14],
                                [3, 135, 107, 5, 136, 108],
                                [3, 67, 41, 13, 68, 42],
                                [15, 54, 24, 5, 55, 25],
                                [15, 43, 15, 10, 44, 16],
                                [4, 144, 116, 4, 145, 117],
                                [17, 68, 42],
                                [17, 50, 22, 6, 51, 23],
                                [19, 46, 16, 6, 47, 17],
                                [2, 139, 111, 7, 140, 112],
                                [17, 74, 46],
                                [7, 54, 24, 16, 55, 25],
                                [34, 37, 13],
                                [4, 151, 121, 5, 152, 122],
                                [4, 75, 47, 14, 76, 48],
                                [11, 54, 24, 14, 55, 25],
                                [16, 45, 15, 14, 46, 16],
                                [6, 147, 117, 4, 148, 118],
                                [6, 73, 45, 14, 74, 46],
                                [11, 54, 24, 16, 55, 25],
                                [30, 46, 16, 2, 47, 17],
                                [8, 132, 106, 4, 133, 107],
                                [8, 75, 47, 13, 76, 48],
                                [7, 54, 24, 22, 55, 25],
                                [22, 45, 15, 13, 46, 16],
                                [10, 142, 114, 2, 143, 115],
                                [19, 74, 46, 4, 75, 47],
                                [28, 50, 22, 6, 51, 23],
                                [33, 46, 16, 4, 47, 17],
                                [8, 152, 122, 4, 153, 123],
                                [22, 73, 45, 3, 74, 46],
                                [8, 53, 23, 26, 54, 24],
                                [12, 45, 15, 28, 46, 16],
                                [3, 147, 117, 10, 148, 118],
                                [3, 73, 45, 23, 74, 46],
                                [4, 54, 24, 31, 55, 25],
                                [11, 45, 15, 31, 46, 16],
                                [7, 146, 116, 7, 147, 117],
                                [21, 73, 45, 7, 74, 46],
                                [1, 53, 23, 37, 54, 24],
                                [19, 45, 15, 26, 46, 16],
                                [5, 145, 115, 10, 146, 116],
                                [19, 75, 47, 10, 76, 48],
                                [15, 54, 24, 25, 55, 25],
                                [23, 45, 15, 25, 46, 16],
                                [13, 145, 115, 3, 146, 116],
                                [2, 74, 46, 29, 75, 47],
                                [42, 54, 24, 1, 55, 25],
                                [23, 45, 15, 28, 46, 16],
                                [17, 145, 115],
                                [10, 74, 46, 23, 75, 47],
                                [10, 54, 24, 35, 55, 25],
                                [19, 45, 15, 35, 46, 16],
                                [17, 145, 115, 1, 146, 116],
                                [14, 74, 46, 21, 75, 47],
                                [29, 54, 24, 19, 55, 25],
                                [11, 45, 15, 46, 46, 16],
                                [13, 145, 115, 6, 146, 116],
                                [14, 74, 46, 23, 75, 47],
                                [44, 54, 24, 7, 55, 25],
                                [59, 46, 16, 1, 47, 17],
                                [12, 151, 121, 7, 152, 122],
                                [12, 75, 47, 26, 76, 48],
                                [39, 54, 24, 14, 55, 25],
                                [22, 45, 15, 41, 46, 16],
                                [6, 151, 121, 14, 152, 122],
                                [6, 75, 47, 34, 76, 48],
                                [46, 54, 24, 10, 55, 25],
                                [2, 45, 15, 64, 46, 16],
                                [17, 152, 122, 4, 153, 123],
                                [29, 74, 46, 14, 75, 47],
                                [49, 54, 24, 10, 55, 25],
                                [24, 45, 15, 46, 46, 16],
                                [4, 152, 122, 18, 153, 123],
                                [13, 74, 46, 32, 75, 47],
                                [48, 54, 24, 14, 55, 25],
                                [42, 45, 15, 32, 46, 16],
                                [20, 147, 117, 4, 148, 118],
                                [40, 75, 47, 7, 76, 48],
                                [43, 54, 24, 22, 55, 25],
                                [10, 45, 15, 67, 46, 16],
                                [19, 148, 118, 6, 149, 119],
                                [18, 75, 47, 31, 76, 48],
                                [34, 54, 24, 34, 55, 25],
                                [20, 45, 15, 61, 46, 16],
                            ],
                            e = function (t, e) {
                                const r = {};
                                return (r.totalCount = t), (r.dataCount = e), r;
                            },
                            r = {};
                        return (
                            (r.getRSBlocks = function (r, n) {
                                const o = (function (e, r) {
                                    switch (r) {
                                        case i.L:
                                            return t[4 * (e - 1) + 0];
                                        case i.M:
                                            return t[4 * (e - 1) + 1];
                                        case i.Q:
                                            return t[4 * (e - 1) + 2];
                                        case i.H:
                                            return t[4 * (e - 1) + 3];
                                        default:
                                            return;
                                    }
                                })(r, n);
                                if (void 0 === o) throw new Error(`bad rs block @ typeNumber:${r}/errorCorrectionLevel:${n}`);
                                const l = o.length / 3,
                                    u = [];
                                for (let t = 0; t < l; t += 1) {
                                    const r = o[3 * t + 0],
                                        n = o[3 * t + 1],
                                        i = o[3 * t + 2];
                                    for (let t = 0; t < r; t += 1) u.push(e(n, i));
                                }
                                return u;
                            }),
                            r
                        );
                    })(),
                    m = function () {
                        const t = [];
                        let e = 0;
                        const r = {
                            getBuffer: function () {
                                return t;
                            },
                            getAt: function (e) {
                                const r = Math.floor(e / 8);
                                return 1 == ((t[r] >>> (7 - (e % 8))) & 1);
                            },
                            put: function (t, e) {
                                for (let n = 0; n < e; n += 1) r.putBit(1 == ((t >>> (e - n - 1)) & 1));
                            },
                            getLengthInBits: function () {
                                return e;
                            },
                            putBit: function (r) {
                                const n = Math.floor(e / 8);
                                t.length <= n && t.push(0), r && (t[n] |= 128 >>> e % 8), (e += 1);
                            },
                        };
                        return r;
                    },
                    C = function (t) {
                        const r = e,
                            n = t,
                            o = {
                                getMode: function () {
                                    return r;
                                },
                                getLength: function (t) {
                                    return n.length;
                                },
                                write: function (t) {
                                    const e = n;
                                    let r = 0;
                                    for (; r + 2 < e.length; ) t.put(i(e.substring(r, r + 3)), 10), (r += 3);
                                    r < e.length && (e.length - r == 1 ? t.put(i(e.substring(r, r + 1)), 4) : e.length - r == 2 && t.put(i(e.substring(r, r + 2)), 7));
                                },
                            },
                            i = function (t) {
                                let e = 0;
                                for (let r = 0; r < t.length; r += 1) e = 10 * e + l(t.charAt(r));
                                return e;
                            },
                            l = function (t) {
                                if (t >= "0" && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                throw new Error(`illegal char :${t}`);
                            };
                        return o;
                    },
                    b = function (t) {
                        const e = r,
                            n = t,
                            o = {
                                getMode: function () {
                                    return e;
                                },
                                getLength: function (t) {
                                    return n.length;
                                },
                                write: function (t) {
                                    const e = n;
                                    let r = 0;
                                    for (; r + 1 < e.length; ) t.put(45 * i(e.charAt(r)) + i(e.charAt(r + 1)), 11), (r += 2);
                                    r < e.length && t.put(i(e.charAt(r)), 6);
                                },
                            },
                            i = function (t) {
                                if (t >= "0" && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                if (t >= "A" && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                                switch (t) {
                                    case " ":
                                        return 36;
                                    case "$":
                                        return 37;
                                    case "%":
                                        return 38;
                                    case "*":
                                        return 39;
                                    case "+":
                                        return 40;
                                    case "-":
                                        return 41;
                                    case ".":
                                        return 42;
                                    case "/":
                                        return 43;
                                    case ":":
                                        return 44;
                                    default:
                                        throw new Error(`illegal char :${t}`);
                                }
                            };
                        return o;
                    },
                    M = function (e) {
                        const r = n,
                            o = t.stringToBytes(e),
                            i = {
                                getMode: function () {
                                    return r;
                                },
                                getLength: function (t) {
                                    return o.length;
                                },
                                write: function (t) {
                                    for (let e = 0; e < o.length; e += 1) t.put(o[e], 8);
                                },
                            };
                        return i;
                    },
                    k = function (e) {
                        const r = o,
                            n = t.stringToBytesFuncs.SJIS;
                        if (!n) throw new Error("sjis not supported.");
                        !(function () {
                            const t = n("友");
                            if (2 !== t.length || 38726 != ((t[0] << 8) | t[1])) throw new Error("sjis not supported.");
                        })();
                        const i = n(e),
                            l = {
                                getMode: function () {
                                    return r;
                                },
                                getLength: function (t) {
                                    return ~~(i.length / 2);
                                },
                                write: function (t) {
                                    const e = i;
                                    let r = 0;
                                    for (; r + 1 < e.length; ) {
                                        let n = ((255 & e[r]) << 8) | (255 & e[r + 1]);
                                        if (n >= 33088 && n <= 40956) n -= 33088;
                                        else {
                                            if (!(n >= 57408 && n <= 60351)) throw new Error(`illegal char at ${r + 1}/${n}`);
                                            n -= 49472;
                                        }
                                        (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13), (r += 2);
                                    }
                                    if (r < e.length) throw new Error(`illegal char at ${r + 1}`);
                                },
                            };
                        return l;
                    },
                    B = function () {
                        const t = [],
                            e = {
                                writeByte: function (e) {
                                    t.push(255 & e);
                                },
                                writeShort: function (t) {
                                    e.writeByte(t), e.writeByte(t >>> 8);
                                },
                                writeBytes: function (t, r, n) {
                                    (r = r || 0), (n = n || t.length);
                                    for (let o = 0; o < n; o += 1) e.writeByte(t[o + r]);
                                },
                                writeString: function (t) {
                                    for (let r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r));
                                },
                                toByteArray: function () {
                                    return t;
                                },
                                toString: function () {
                                    let e = "";
                                    e += "[";
                                    for (let r = 0; r < t.length; r += 1) r > 0 && (e += ","), (e += t[r]);
                                    return (e += "]"), e;
                                },
                            };
                        return e;
                    },
                    x = function (t) {
                        const e = t;
                        let r = 0,
                            n = 0,
                            o = 0;
                        const i = {
                                read: function () {
                                    for (; o < 8; ) {
                                        if (r >= e.length) {
                                            if (0 === o) return -1;
                                            throw new Error(`unexpected end of file./${o}`);
                                        }
                                        const t = e.charAt(r);
                                        if (((r += 1), "=" === t)) return (o = 0), -1;
                                        t.match(/^\s$/) || ((n = (n << 6) | l(t.charCodeAt(0))), (o += 6));
                                    }
                                    const t = (n >>> (o - 8)) & 255;
                                    return (o -= 8), t;
                                },
                            },
                            l = function (t) {
                                if (t >= 65 && t <= 90) return t - 65;
                                if (t >= 97 && t <= 122) return t - 97 + 26;
                                if (t >= 48 && t <= 57) return t - 48 + 52;
                                if (43 === t) return 62;
                                if (47 === t) return 63;
                                throw new Error(`c:${t}`);
                            };
                        return i;
                    },
                    A = function (t, e) {
                        const r = t,
                            n = e,
                            o = new Array(t * e),
                            i = {
                                setPixel: function (t, e, n) {
                                    o[e * r + t] = n;
                                },
                                write: function (t) {
                                    t.writeString("GIF87a"), t.writeShort(r), t.writeShort(n), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(r), t.writeShort(n), t.writeByte(0);
                                    const e = l(2);
                                    t.writeByte(2);
                                    let o = 0;
                                    for (; e.length - o > 255; ) t.writeByte(255), t.writeBytes(e, o, 255), (o += 255);
                                    t.writeByte(e.length - o), t.writeBytes(e, o, e.length - o), t.writeByte(0), t.writeString(";");
                                },
                            },
                            l = function (t) {
                                const e = 1 << t,
                                    r = 1 + (1 << t);
                                let n = t + 1;
                                const i = u();
                                for (let t = 0; t < e; t += 1) i.add(String.fromCharCode(t));
                                i.add(String.fromCharCode(e)), i.add(String.fromCharCode(r));
                                const l = B(),
                                    c = (function (t) {
                                        const e = t;
                                        let r = 0,
                                            n = 0;
                                        const o = {
                                            write: function (t, o) {
                                                if (t >>> o != 0) throw new Error("length over");
                                                for (; r + o >= 8; ) e.writeByte(255 & ((t << r) | n)), (o -= 8 - r), (t >>>= 8 - r), (n = 0), (r = 0);
                                                (n |= t << r), (r += o);
                                            },
                                            flush: function () {
                                                r > 0 && e.writeByte(n);
                                            },
                                        };
                                        return o;
                                    })(l);
                                c.write(e, n);
                                let s = 0,
                                    a = String.fromCharCode(o[s]);
                                for (s += 1; s < o.length; ) {
                                    const t = String.fromCharCode(o[s]);
                                    (s += 1), i.contains(a + t) ? (a += t) : (c.write(i.indexOf(a), n), i.size() < 4095 && (i.size() === 1 << n && (n += 1), i.add(a + t)), (a = t));
                                }
                                return c.write(i.indexOf(a), n), c.write(r, n), c.flush(), l.toByteArray();
                            },
                            u = function () {
                                const t = {};
                                let e = 0;
                                const r = {
                                    add: function (n) {
                                        if (r.contains(n)) throw new Error(`dup key:${n}`);
                                        (t[n] = e), (e += 1);
                                    },
                                    size: function () {
                                        return e;
                                    },
                                    indexOf: function (e) {
                                        return t[e];
                                    },
                                    contains: function (e) {
                                        return void 0 !== t[e];
                                    },
                                };
                                return r;
                            };
                        return i;
                    },
                    $ = function (t, e, r) {
                        const n = A(t, e);
                        for (let o = 0; o < e; o += 1) for (let e = 0; e < t; e += 1) n.setPixel(e, o, r(e, o));
                        const o = B();
                        n.write(o);
                        const i = (function () {
                                let t = 0,
                                    e = 0,
                                    r = 0,
                                    n = "";
                                const o = {},
                                    i = function (t) {
                                        n += String.fromCharCode(l(63 & t));
                                    },
                                    l = function (t) {
                                        if (t < 0);
                                        else {
                                            if (t < 26) return 65 + t;
                                            if (t < 52) return t - 26 + 97;
                                            if (t < 62) return t - 52 + 48;
                                            if (62 === t) return 43;
                                            if (63 === t) return 47;
                                        }
                                        throw new Error(`n:${t}`);
                                    };
                                return (
                                    (o.writeByte = function (n) {
                                        for (t = (t << 8) | (255 & n), e += 8, r += 1; e >= 6; ) i(t >>> (e - 6)), (e -= 6);
                                    }),
                                    (o.flush = function () {
                                        if ((e > 0 && (i(t << (6 - e)), (t = 0), (e = 0)), r % 3 != 0)) {
                                            const t = 3 - (r % 3);
                                            for (let e = 0; e < t; e += 1) n += "=";
                                        }
                                    }),
                                    (o.toString = function () {
                                        return n;
                                    }),
                                    o
                                );
                            })(),
                            l = o.toByteArray();
                        for (let t = 0; t < l.length; t += 1) i.writeByte(l[t]);
                        return i.flush(), `data:image/gif;base64,${i}`;
                    };
                return t;
            })();
            var o;
            (n.stringToBytesFuncs["UTF-8"] = function (t) {
                return (function (t) {
                    const e = [];
                    for (let r = 0; r < t.length; r++) {
                        let n = t.charCodeAt(r);
                        n < 128 ? e.push(n) : n < 2048 ? e.push(192 | (n >> 6), 128 | (63 & n)) : n < 55296 || n >= 57344 ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n)) : (r++, (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))), e.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
                    }
                    return e;
                })(t);
            }),
                (o = function () {
                    return n;
                }),
                "function" == typeof define && r.amdO ? define([], o) : "object" == typeof exports && (t.exports = o());
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Payments~bundle.TV.fad4e12a.js.map
