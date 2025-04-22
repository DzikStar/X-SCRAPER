(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-d0d5c4c2"],
    {
        164588: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => g });
            var r = a(202784),
                n = a(325686),
                l = a(731708),
                i = a(392237),
                o = a(674132),
                s = a.n(o);
            const c = [0.15, 0.3, 0.5, 0.65, 1],
                d = [s().a92e62bd({ date: "" }), s().h8f395b3({ date: "" }), s().b8710b43({ date: "" }), s().ddb16777({ date: "" }), s().addd5575({ date: "" }), s().g7450c57({ date: "" }), s().h08883e7({ date: "" })],
                u = [s().j9f65603({ date: "" }), s().d6ad20d7({ date: "" }), s().d9bcb257({ date: "" }), s().b83b49f1({ date: "" }), s().h52ae229({ date: "" }), s().i07e47b9({ date: "" })],
                m = s().baf120a6,
                p = s().a1d642c8,
                y = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", justifyContent: "space-between" }, containerLeft: { display: "flex", flexDirection: "column", flex: "90%" }, containerRight: { flex: "10%", marginStart: e.spaces.space4, justifyContent: "space-between" }, heatmap: { display: "grid", borderRadius: e.borderRadii.medium, overflow: "hidden", gap: "2px", gridTemplateColumns: "repeat(7, 1fr)" }, cell: { height: "16px", backgroundColor: e.colors.blue500 }, legendCell: { flex: "8%", height: e.spaces.space8, backgroundColor: e.colors.blue500 }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, legendTextLeft: { color: e.colors.gray700, marginEnd: e.spaces.space8 }, legendTextRight: { color: e.colors.gray700, marginStart: e.spaces.space8 }, labels: { color: e.colors.gray700 }, dayLabel: { textAlign: "center", flex: "14%" }, dayLabelContainer: { display: "flex", flexDirection: "row", marginTop: e.spaces.space4 }, lastTimeLabel: { marginBottom: e.spaces.space72 }, hoverLabel: { backgroundColor: e.colors.gray100, padding: e.spaces.space12, borderRadius: e.borderRadii.large, position: "fixed", zIndex: 2 } })),
                g = ({ data: e, hoverLabel: t }) => {
                    const [a, i] = r.useState(0),
                        [o, g] = r.useState(!1),
                        [f, h] = r.useState([0, 0]),
                        b = r.useMemo(() => {
                            const { count: t, squaredDiffSum: a, sum: r } = e.flat().reduce((e, t) => ({ sum: e.sum + t, count: e.count + 1, squaredDiffSum: e.squaredDiffSum + t * t }), { sum: 0, count: 0, squaredDiffSum: 0 }),
                                n = r / t,
                                l = a / t - n * n;
                            return n + 3 * Math.sqrt(l);
                        }, [e]);
                    r.useEffect(() => {
                        const e = () => {
                            g(!1);
                        };
                        return (
                            window.addEventListener("scroll", e),
                            () => {
                                window.removeEventListener("scroll", e);
                            }
                        );
                    }, [g]);
                    const v = (e) => Math.min(0.15 + (e / b) * 0.85, 1);
                    return r.createElement(
                        n.Z,
                        { onMouseMove: (e) => h([e.clientX - 50, e.clientY - 50]) },
                        o && r.createElement(n.Z, { style: [y.hoverLabel, { top: f[1], start: f[0] }] }, r.createElement(l.ZP, null, r.createElement(s().I18NFormatMessage, { $i18n: "ad69fd83" }, t, a))),
                        r.createElement(
                            n.Z,
                            { style: y.container },
                            r.createElement(
                                n.Z,
                                { style: y.containerLeft },
                                r.createElement(
                                    n.Z,
                                    { style: y.heatmap },
                                    e.map((t, a) =>
                                        t.map((t, l) =>
                                            r.createElement(n.Z, {
                                                key: `${a}-${l}`,
                                                onMouseEnter: () => {
                                                    i(e[a][l]), g(!0);
                                                },
                                                onMouseLeave: () => g(!1),
                                                style: [{ opacity: v(t) }, y.cell],
                                            }),
                                        ),
                                    ),
                                ),
                                r.createElement(
                                    n.Z,
                                    { style: y.dayLabelContainer },
                                    d.map((e) => r.createElement(n.Z, { key: e, style: y.dayLabel }, r.createElement(l.ZP, { size: "subtext2", style: y.labels }, e))),
                                ),
                            ),
                            r.createElement(
                                n.Z,
                                { style: y.containerRight },
                                u.map((e, t) => r.createElement(l.ZP, { key: e, size: "subtext2", style: [y.labels, t === u.length - 1 && y.lastTimeLabel] }, e)),
                            ),
                        ),
                        r.createElement(
                            n.Z,
                            { style: y.legendContainer },
                            r.createElement(l.ZP, { size: "subtext2", style: y.legendTextLeft }, m),
                            c.map((e) => r.createElement(n.Z, { key: e, style: [{ opacity: e }, y.legendCell] })),
                            r.createElement(l.ZP, { size: "subtext2", style: y.legendTextRight }, p),
                        ),
                    );
                };
        },
        58222: (e, t, a) => {
            "use strict";
            a.d(t, { $: () => u, N: () => p });
            a(543673), a(240753), a(128399);
            var r = a(202784),
                n = a(325686),
                l = a(154003),
                i = a(392237),
                o = a(674132),
                s = a.n(o),
                c = a(72591);
            const d = s().b1f77a7c,
                u = ({ columns: e, data: t, fileName: a }) =>
                    r.createElement(
                        n.Z,
                        { style: m.container },
                        r.createElement(
                            l.ZP,
                            {
                                hoverLabel: { label: d },
                                onClick: () => {
                                    const r = (() => {
                                            let a = "",
                                                r = "";
                                            for (const t of e) "" !== r && (r += ","), (r += t.label);
                                            (a += r), (a += "\r\n");
                                            for (const n in t) {
                                                r = "";
                                                for (const a of e) {
                                                    "" !== r && (r += ",");
                                                    const e = a.value;
                                                    r += "date" === e ? new Date(n).toDateString() : "id" === e ? (n ?? "") : "timestamp" === e ? new Date(+(t[n]?.timestamp ?? 0)).toDateString() : "link" === e || "text" === e ? (t[n]?.[e] ?? "") : (t[n]?.metrics[e] ?? "0");
                                                }
                                                (a += r), (a += "\r\n");
                                            }
                                            return a;
                                        })(),
                                        n = new Blob([r], { type: "text/csv" }),
                                        l = URL.createObjectURL(n),
                                        i = document.createElement("a");
                                    (i.href = l), (i.download = a), document.body.appendChild(i), i.click(), document.body.removeChild(i);
                                },
                                size: "small",
                            },
                            r.createElement(c.default, null),
                        ),
                    ),
                m = i.default.create((e) => ({ container: { width: "fit-content", marginStart: e.spaces.space8 } }));
            function p(e) {
                return e
                    ? e
                          .replace(/[\n\r\t]+/g, " ")
                          .replace(/\s+/g, " ")
                          .trim()
                          .replace(/"/g, '""')
                          .replace(/^(.*)$/g, (e, t) => (/[,"\s]/.test(t) ? `"${t}"` : t))
                    : "";
            }
        },
        347485: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => X });
            var r = a(202784),
                n = a(325686),
                l = a(392237),
                i = a(67369),
                o = a(731708),
                s = a(674132),
                c = a.n(s),
                d = a(952793),
                u = a(293115),
                m = a(125363),
                p = a(919022),
                y = a(47329),
                g = a(453527),
                f = a(459777);
            const h = () => {
                const { chartType: e, setChartType: t } = (0, g.J)();
                return r.createElement(f.C, { options: y.__, selected: e, setOption: t });
            };
            var b = a(58222);
            const v = () => {
                    const { granularity: e, setGranularity: t } = (0, g.J)();
                    return r.createElement(f.C, { options: y.m5, selected: e, setOption: t });
                },
                w = c().jb38600c,
                _ = c().fef3bfae,
                E = c().abf2d13c,
                x = ({ color: e, primary: t, type: a }) => {
                    const n = (0, i.LX)(),
                        { metric: l, secondaryMetric: o, setMetric: s, setSecondaryMetric: c } = (0, g.J)(),
                        d = r.useMemo(() => ("post" === a ? y.Mu.filter((e) => "Posts" !== e.value) : y.Mu), [a]),
                        u = t ? d : [{ label: w, value: "none" }, ...d];
                    return r.createElement(f.C, {
                        color: o ? e : void 0,
                        disabledOptions: t ? (o ? [o] : void 0) : [l],
                        options: u,
                        placeholder: n ? E : _,
                        selected: t ? l : o || "none",
                        setOption: (e) => {
                            t ? s(e) : c("none" !== e ? e : null);
                        },
                    });
                };
            var C = a(148642),
                T = a(737667),
                S = (a(130724), a(106406), a(666305));
            const k = (e) => {
                const t = parseInt(e.slice(1), 16);
                return `${(t >> 16) & 255}, ${(t >> 8) & 255}, ${255 & t}`;
            };
            function D(e, t) {
                let a = e.replace("#", "");
                3 === a.length &&
                    (a = a
                        .split("")
                        .map((e) => e + e)
                        .join(""));
                const r = parseInt(a, 16);
                let n = (r >> 16) + t,
                    l = ((r >> 8) & 255) + t,
                    i = (255 & r) + t;
                return (n = Math.min(255, Math.max(0, n))), (l = Math.min(255, Math.max(0, l))), (i = Math.min(255, Math.max(0, i))), `#${((1 << 24) + (n << 16) + (l << 8) + i).toString(16).slice(1).toUpperCase()}`;
            }
            const Z = (e, t) => {
                    const a = t || Math.max(...e.map(({ value: e }) => e));
                    return e.map((e) => ({ ...e, value: e.value / a }));
                },
                M = ({ chartType: e = "line", height: t, onHoverChange: a, padding: n = { horizontal: 40, vertical: 20 }, points: i, secondaryPoints: o = [], primaryStrokeColor: s, secondaryStrokeColor: c, strokeWidth: d, width: u, xAxisTicks: m, yAxisLabel: p, secondaryYAxisLabel: y, drawXAxisTicks: g = !1 }) => {
                    const f = r.useMemo(() => Z(i, p?.at(-1)?.value), [i, p]),
                        h = r.useMemo(() => Z(o, y?.at(-1)?.value), [o, y]),
                        b = r.useRef(),
                        [v, w] = r.useState(null),
                        [_, E] = r.useState(f.map(() => 0)),
                        x = r.useCallback(
                            (e, t, a, r, n) => {
                                if (0 === t.length) return;
                                const l = e.createLinearGradient(0, Math.min(...t), 0, r);
                                l.addColorStop(0, `rgba(${k(n)}, 0.5)`), l.addColorStop(1, `rgba(${k(n)}, 0)`), e.beginPath(), e.moveTo(0, t[0]);
                                for (let r = 1; r < f.length; r++) {
                                    const n = (r * a) / (f.length - 1),
                                        l = t[r];
                                    e.lineTo(n, l);
                                }
                                e.lineTo(a, r), e.lineTo(0, r), e.closePath(), (e.fillStyle = l), e.fill();
                            },
                            [f],
                        ),
                        C = r.useCallback(
                            ({ ctx: e, adjustedHeight: t, labels: a, side: r = "left", color: i = l.default.theme.colors.gray600 }) => {
                                e.beginPath(), (e.font = "10px Arial"), (e.textAlign = "start"), (e.fillStyle = i);
                                const o = "left" === r ? 8 - n.horizontal : u - 2 * n.horizontal + 8;
                                a?.forEach(({ label: a, percentile: r }) => {
                                    const n = t * Math.abs(1 - r);
                                    e.fillText(a, o, n);
                                }),
                                    e.stroke();
                            },
                            [n.horizontal, u],
                        ),
                        T = ({ color: e, ctx: t, drawTicks: a, label: r, x: n, y: l }) => {
                            a && (t.beginPath(), t.moveTo(n, l), t.lineTo(n, l + 6), (t.strokeStyle = e), (t.lineWidth = 1), t.stroke()), (t.font = "10px Arial"), (t.fillStyle = e), t.fillText(r, n, l + 16);
                        },
                        S = r.useCallback(
                            (e, t, a) => {
                                const r = l.default.theme.colors.gray600;
                                (e.textAlign = "center"),
                                    m?.forEach(({ label: n, percentile: l }) => {
                                        T({ x: t * l, y: a, ctx: e, color: r, label: n, drawTicks: g });
                                    });
                            },
                            [m, g],
                        ),
                        M = r.useCallback(
                            (e, t, a, r) => {
                                if (0 !== t.length) {
                                    e.beginPath(), e.moveTo(0, t[0]), (e.lineWidth = d), (e.strokeStyle = r), (e.lineJoin = "round"), (e.lineCap = "round");
                                    for (let r = 1; r < f.length; r++) {
                                        const n = r * a,
                                            l = t[r];
                                        e.lineTo(n, l);
                                    }
                                    e.stroke();
                                }
                            },
                            [f, d],
                        ),
                        R = r.useCallback(
                            (e, t, a, r) => {
                                e.beginPath(), e.arc(t, a, 2 * d, 0, 2 * Math.PI), (e.fillStyle = r), e.fill(), e.beginPath(), e.arc(t, a, 5 * d, 0, 2 * Math.PI), (e.fillStyle = `rgba(${k(r)}, 0.2)`), e.fill();
                            },
                            [d],
                        ),
                        P = r.useCallback(
                            (e, t, a, r, n) => {
                                if (null !== v) {
                                    const l = v * t;
                                    if (void 0 !== f[v]) {
                                        const t = a - f[v].value * a;
                                        R(e, l, t, r);
                                    }
                                    if (void 0 !== h[v]) {
                                        const t = a - h[v].value * a;
                                        R(e, l, t, n);
                                    }
                                    e.beginPath(), e.setLineDash([5, 3]), e.moveTo(l, 0), e.lineTo(l, a), (e.strokeStyle = "gray"), (e.lineWidth = 1), e.stroke(), e.setLineDash([]);
                                }
                            },
                            [v, f, h, R],
                        ),
                        I = r.useCallback(
                            (e, t, a, r) => {
                                f.forEach((n, l) => {
                                    const i = l * a,
                                        o = t[l];
                                    o && (e.beginPath(), e.arc(i, o, 2 * d, 0, 2 * Math.PI), (e.fillStyle = r), e.fill());
                                });
                            },
                            [f, d],
                        ),
                        L = r.useCallback(
                            (e, a) => {
                                e.scale(a, a), (e.fillStyle = "gray"), (e.font = '30px TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'), (e.textAlign = "center"), e.fillText("No Data", u / 2, t / 2);
                            },
                            [t, u],
                        ),
                        O = r.useCallback(
                            (e, a, r, i, o, s) => {
                                if (0 === a.length) return;
                                const c = a.length,
                                    u = 0.3 * i,
                                    p = u / (c - 1),
                                    y = (i - u) / c,
                                    f = r ? p / 4 : 0,
                                    h = r ? y / 2 - f / 2 : y;
                                (e.lineWidth = d), e.beginPath();
                                for (let r = 0; r < a.length; r++) {
                                    (e.strokeStyle = v === r ? D(o, 30) : o), (e.fillStyle = v === r ? D(o, 30) : o);
                                    const i = r * (y + p),
                                        s = a[r] || 0;
                                    e.fillRect(i, s, h, t - 2 * n.vertical - s);
                                    const c = m?.find((e) => e.index === r);
                                    c && ((e.textAlign = "start"), T({ ctx: e, x: i, y: t - 2 * n.vertical, label: c.label || "", color: l.default.theme.colors.gray600, drawTicks: g }));
                                }
                                if (((e.strokeStyle = l.default.theme.colors.gray600), (e.lineWidth = 1), e.stroke(), r))
                                    for (let a = 0; a < r.length; a++) {
                                        (e.strokeStyle = v === a ? D(s, 30) : s), (e.fillStyle = v === a ? D(s, 30) : s);
                                        const l = a * (y + p) + h + f,
                                            i = r[a] || 0;
                                        e.fillRect(l, i, h, t - 2 * n.vertical - i);
                                    }
                            },
                            [t, v, n.vertical, d, m, g],
                        );
                    r.useEffect(() => {
                        const a = b.current;
                        if (!a) return;
                        const r = a.getContext("2d");
                        if (!r) return;
                        const i = window.devicePixelRatio || 1;
                        if (((a.width = u * i), (a.height = t * i), (a.style.width = `${u}px`), (a.style.height = `${t}px`), r.clearRect(0, 0, r.canvas.width, r.canvas.height), 0 === f.length)) return void L(r, i);
                        return (
                            ((a, r) => {
                                a.scale(r, r);
                                const i = t - 2 * n.vertical,
                                    o = f.map((e) => i - e.value * i),
                                    d = h.length ? h.map((e) => i - e.value * i) : void 0,
                                    m = u - n.horizontal * (d ? 2 : 1);
                                if (
                                    (a.translate(n.horizontal, n.vertical),
                                    ((e, t, a, r) => {
                                        e.beginPath(),
                                            (e.strokeStyle = l.default.theme.colors.gray100),
                                            (e.lineWidth = 1),
                                            Array.from({ length: a }, (e, t) => t).map((n) => {
                                                const l = t * Math.abs(1 - n / (a - 1));
                                                e.moveTo(0, l), e.lineTo(r, l);
                                            }),
                                            e.stroke();
                                    })(a, i, p?.length || 5, m),
                                    C({ ctx: a, adjustedHeight: i, labels: p, color: d ? s : l.default.theme.colors.gray600, side: "left" }),
                                    d && C({ ctx: a, adjustedHeight: i, labels: y, color: c, side: "right" }),
                                    "line" === e)
                                ) {
                                    const e = m / (f.length - 1);
                                    d ? M(a, d, e, c) : x(a, o, m, i, s), S(a, m, i), M(a, o, e, s), P(a, e, i, s, c);
                                } else "bar" === e && O(a, o, d, m, s, c);
                            })(r, i),
                            () => {
                                r.clearRect(0, 0, r.canvas.width, r.canvas.height);
                            }
                        );
                    }, [f, h, p, y, s, c, d, u, t, v, _, n, x, C, M, P, I, S, L, e, O]),
                        r.useEffect(() => {
                            const e = () => {
                                w(null), a?.(null);
                            };
                            return (
                                window.addEventListener("scroll", e),
                                () => {
                                    window.removeEventListener("scroll", e);
                                }
                            );
                        }, [a]);
                    return f.length
                        ? r.createElement("canvas", {
                              onMouseLeave: () => {
                                  null !== v && a?.(null), w(null), E(f.map(() => 0));
                              },
                              onMouseMove: (t) => {
                                  if (0 === f.length) return;
                                  const r = b.current;
                                  if (!r) return;
                                  const l = r.getBoundingClientRect(),
                                      i = "line" === e,
                                      o = "bar" === e,
                                      s = t.clientX - l.left - n.horizontal,
                                      c = u - (h.length ? 2 * n.horizontal : n.horizontal);
                                  let m = null;
                                  if (i) {
                                      const e = c / (f.length - 1);
                                      for (let t = 0; t < f.length; t++) {
                                          const a = t * e,
                                              r = e / 2,
                                              n = 0 === t ? 0 : a - e / 2,
                                              l = t === f.length - 1 ? c : a + r;
                                          if (s >= n && s <= l) {
                                              m = t;
                                              break;
                                          }
                                      }
                                  } else if (o) {
                                      const e = 0.3 * c,
                                          t = e / (f.length - 1),
                                          a = (c - e) / f.length + t;
                                      for (let e = 0; e < f.length; e++) {
                                          if (s >= e * a - t / 2 && s < (e + 1) * a - t / 2) {
                                              m = e;
                                              break;
                                          }
                                      }
                                  }
                                  v !== m && a?.(m), w(m), E(_.map((e, t) => (t === m ? 2 * d : 0)));
                              },
                              ref: b,
                              style: { width: "100%", height: "100%" },
                          })
                        : null;
                };
            var R = a(665979);
            function P({ chartType: e, data: t, secondaryData: a = [], getXAxisTickLabel: i, getYAxisTickLabel: o, renderTooltip: s, primaryColor: c, secondaryColor: d }) {
                const u = r.useRef(),
                    m = r.useRef(),
                    p = r.useCallback(
                        (e, t) => {
                            const a = Math.max(...t.map((e) => e.value)),
                                r = (0, R.xP)(a, e);
                            return r.map((e, t) => ({ label: o ? o(e) : String(e), percentile: t / (r.length - 1), value: e }));
                        },
                        [o],
                    ),
                    y = r.useCallback(
                        (a) => {
                            const r = t
                                .map((e, t) => ({ ...e, index: t }))
                                .filter((e, r) => r % Math.ceil(t.length / (a + 1)) == 0)
                                .map(({ index: a, ...r }) => {
                                    const n = a / (t.length - ("line" === e ? 1 : 0)) + ("line" === e ? 0 : 1 / t.length / 2);
                                    return { label: i ? i(r.key) : r.key, percentile: n, index: a };
                                });
                            return 1 === r.at(-1)?.percentile && r.pop(), r;
                        },
                        [t, e, i],
                    ),
                    [{ height: g, width: f }, h] = r.useState({ height: 0, width: 0 });
                r.useLayoutEffect(() => {
                    const e = u.current,
                        t = (e) => {
                            e.contentRect && h({ height: e.contentRect.height, width: e.contentRect.width });
                        };
                    return (
                        S.Z.observe(e, t),
                        () => {
                            e && S.Z.unobserve(e, t);
                        }
                    );
                }, []);
                const [b, v] = r.useState(null),
                    [w, _] = r.useState({ x: 0, y: 0 }),
                    E = (b && t.find((e) => e.key === b)) || null,
                    x = () => {
                        const e = b && E;
                        return r.createElement(n.Z, { ref: m, style: { start: `-${l.default.theme.spaces.space16}`, top: `-${l.default.theme.spaces.space16}`, transform: `translate(${w.x}px, ${w.y}px)`, position: "fixed", backgroundColor: l.default.theme.colors.gray100, padding: l.default.theme.spaces.space8, borderRadius: l.default.theme.borderRadii.large, pointerEvents: "none", visibility: e ? "visible" : "hidden", zIndex: 5 } }, s(E || t.at(0) || { key: "", value: 0 }));
                    };
                return r.createElement(
                    n.Z,
                    {
                        onMouseMove: (e) => {
                            const t = u.current?.getBoundingClientRect(),
                                a = m.current?.getBoundingClientRect();
                            if (!t || !a) return;
                            const r = e.clientX - a.width / 2,
                                n = e.clientY - a.height - 20,
                                l = Math.min(Math.max(r, 24), window.innerWidth - 24 - a.width),
                                i = Math.min(Math.max(n, 24), window.innerHeight - 24 - a.height);
                            _({ x: l, y: i });
                        },
                        ref: u,
                        style: { width: "100%", height: "100%", position: "absolute", zIndex: 1 },
                    },
                    r.createElement(x, null),
                    r.createElement(M, { chartType: e, height: g, onHoverChange: (e) => v((null !== e && t.at(e)?.key) || null), points: t, primaryStrokeColor: c, secondaryPoints: a, secondaryStrokeColor: d, secondaryYAxisLabel: a.length ? p(4, a) : void 0, strokeWidth: 2, width: f, xAxisTicks: y(6), yAxisLabel: p(4, t) }),
                );
            }
            const I = (e, t) => (e ? Object.entries(e).map(([e, a]) => ({ key: e, value: a?.metrics[t] || 0 })) : []),
                L = ({ color: e, label: t, value: a }) => r.createElement(n.Z, { style: { flexDirection: "row", gap: 16, justifyContent: "space-between" } }, r.createElement(n.Z, { style: { flexDirection: "row", gap: 4 } }, r.createElement(n.Z, { style: { width: 8, height: "100%", backgroundColor: e, borderRadius: 8 } }), r.createElement(o.ZP, null, t)), r.createElement(o.ZP, null, a)),
                O = c().ccaa970f,
                V = c().a20c68af;
            function A({ primaryColor: e, secondaryColor: t }) {
                const { chartType: a, granularity: i, metric: s, secondaryMetric: c } = (0, g.J)(),
                    { data: d, isFetching: u } = (0, C.N)(),
                    [m, p] = r.useState(d);
                return (
                    r.useEffect(() => {
                        p((0, R.zv)(d, i));
                    }, [i, d]),
                    r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(P, {
                            chartType: a,
                            data: I(m, s),
                            getXAxisTickLabel: (e) => ("monthly" === i ? V((0, R.F1)(new Date(e))) : O((0, R.F1)(new Date(e)))),
                            getYAxisTickLabel: (e) => (0, R.uf)(e),
                            primaryColor: e,
                            renderTooltip: (a) => {
                                const d = m?.[a.key];
                                if (!d) return null;
                                const u = (0, R.YR)({ toTime: d.toTime, fromTime: d.fromTime }, i);
                                return r.createElement(n.Z, { style: { flexDirection: "column", gap: 8, backgroundColor: l.default.theme.colors.gray100, padding: 8, borderRadius: 8 } }, r.createElement(o.ZP, { style: { whiteSpace: "nowrap" } }, u), r.createElement(L, { color: e, label: y.Mu.find((e) => e.value === s)?.label || s, value: d.metrics[s].toLocaleString() }), c && r.createElement(L, { color: t, label: y.Mu.find((e) => e.value === c)?.label || c, value: d.metrics[c].toLocaleString() }));
                            },
                            secondaryColor: t,
                            secondaryData: c ? I(m, c) : void 0,
                        }),
                        r.createElement(n.Z, { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: l.default.theme.colors.gray0, zIndex: 1, borderRadius: l.default.theme.borderRadii.large, opacity: u ? 0.5 : 0, pointerEvents: "none" } }),
                    )
                );
            }
            var z = a(945181);
            const W = c().ac248548,
                $ = c().j62d2af4,
                j = c().bd37f68e,
                H = [{ label: c().edeff232, value: "date" }, ...y.Mu, { label: c().b1b4d57e, value: "VideoViews" }, { label: c().ca826772, value: "MediaViews" }],
                F = ["blue500", "green500", "magenta500", "orange500", "purple500", "red500", "yellow500", "teal500", "plum500"];
            function N({ maxDays: e }) {
                const { range: t, setRange: a } = (0, g.J)();
                return r.createElement(T.X, { maxDays: e, onRangeChange: a, range: t });
            }
            function B({ type: e }) {
                const { data: t } = (0, C.N)(),
                    { restId: a } = (0, g.J)(),
                    n = (0, m.v9)(p.ZP.selectViewerUser);
                if (!t || !a) return null;
                const l = "user" === e ? `account_overview_analytics${n?.screen_name ? `_${n.screen_name}` : ""}.csv` : `post_overview_analytics_${a}.csv`;
                return r.createElement(b.$, { columns: H, data: t, fileName: l });
            }
            const U = l.default.create((e) => ({ container: { marginTop: e.spaces.space12 }, heading: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, justifyContent: "space-between", gap: e.spaces.space16 }, chartWrapper: { backgroundColor: e.colors.gray0, width: "100%", borderRadius: e.borderRadii.large, padding: e.spaces.space32, position: "relative", gap: e.spaces.space12 }, chartWrapperMobile: { padding: e.spaces.space12, gap: e.spaces.space8 }, row: { flexDirection: "row", gap: l.default.theme.spaces.space8, flexWrap: "wrap", height: "fit-content" }, col: { gap: l.default.theme.spaces.space8, height: "fit-content" }, title: { whiteSpace: "no-wrap", flexShrink: 0 }, timeRangePickerContainer: { display: "flex", flexDirection: "row", alignItems: "center" } })),
                X = ({ initialRange: e, maxDays: t = 365, restId: a, type: s }) => {
                    const c = (0, d.hC)("rweb_analytics_theme"),
                        m = (0, d.hC)("rweb_analytics_export_data_enabled"),
                        { primaryColor: p, secondaryColor: f } = ((e) => {
                            const t = e ? ((a = F), (r = l.default.theme.primaryColorName), a.slice(a.indexOf(r)).concat(a.slice(0, a.indexOf(r)))) : ["blue500", "green500"];
                            var a, r;
                            return { primaryColor: l.default.theme.colors[t[0]], secondaryColor: l.default.theme.colors[t[1]] };
                        })(c),
                        b = (0, i.Mv)(),
                        w = (0, i.LX)();
                    return r.createElement(u.nO, { namespace: { page: "account_analytics", section: "overview" } }, r.createElement(g.T, { initialRange: e, restId: a, type: s }, r.createElement(C.X, { type: s }, r.createElement(n.Z, { style: U.container }, r.createElement(n.Z, { style: [U.heading, { flexDirection: b ? "column-reverse" : "row" }] }, r.createElement(o.ZP, { size: "headline1", style: U.title, weight: "bold" }, "user" === s ? W : $), r.createElement(n.Z, { style: U.timeRangePickerContainer }, r.createElement(N, { maxDays: t }), m && !w && r.createElement(B, { type: s }))), r.createElement(n.Z, { style: { paddingHorizontal: l.default.theme.spaces.space16 } }, r.createElement(n.Z, { style: [U.chartWrapper, w && U.chartWrapperMobile] }, r.createElement(n.Z, { style: { display: "grid", gridTemplateColumns: "auto auto" } }, r.createElement(n.Z, { style: b ? U.col : U.row }, r.createElement(x, { color: p, primary: !0, type: s }), r.createElement(x, { color: f, primary: !1, type: s })), r.createElement(n.Z, { style: [b ? U.col : U.row, { alignItems: "flex-end", justifyContent: "flex-end" }] }, r.createElement(h, null), r.createElement(v, null))), r.createElement(n.Z, { style: { justifyContent: "space-around", alignItems: "flex-end", height: "300px", position: "relative", flexDirection: "row" } }, r.createElement(r.Suspense, null, r.createElement(A, { primaryColor: p, secondaryColor: f }))))), r.createElement(z.WO, { metrics: y.nn }), r.createElement(o.ZP, { size: "headline1", style: U.heading, weight: "bold" }, j), r.createElement(z.WO, { metrics: y.sM })))));
                };
        },
        148642: (e, t, a) => {
            "use strict";
            a.d(t, { N: () => _, X: () => w });
            a(571372);
            var r = a(720672),
                n = a(828253),
                l = a(202784),
                i = a(10622),
                o = a.n(i),
                s = (a(585488), a(712696)),
                c = a.n(s),
                d = a(437429),
                u = a.n(d),
                m = a(47329),
                p = a(453527),
                y = a(665979);
            const g = n.Z,
                f = r.Z,
                h = (e) => (0, y.VS)(e.fromTime, e.toTime) < 180,
                b = (e, t, a) => {
                    const r = (0, y.VS)(e.fromTime, e.toTime);
                    return { from_time: h(e) ? (0, y.b7)(e.fromTime, -r).toISOString() : e.fromTime.toISOString(), requested_metrics: "user" === a ? m.E6 : m.Z2, rest_id: t, to_time: e.toTime.toISOString() };
                },
                v = l.createContext(void 0),
                w = ({ children: e, type: t }) => {
                    const [a] = l.useState("user" === t ? g : f),
                        { range: r, restId: n } = (0, p.J)(),
                        i = u()(),
                        [s, d] = l.useState(b(r, n, t)),
                        [m, w] = l.useState(null),
                        [_, E] = l.useState(null),
                        [x, C] = l.useState(!1),
                        T = l.useRef(r);
                    l.useEffect(() => {
                        T.current = r;
                    }, [r]);
                    const S = c()(a, { ...s, granularity: "Daily" });
                    l.useEffect(() => {
                        C(!0);
                        const e = b(r, n, t);
                        o()(i, a, { ...e, granularity: "Daily" }, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then(() => {
                                d(e), C(!1);
                            });
                    }, [i, r, n, a, t]);
                    const k = l.useCallback((e, t, a) => {
                        const { compareRange: r, selectedRange: n } = ((e) => ({ compareRange: h(e) ? { fromTime: (0, y.b7)(e.fromTime, -(0, y.VS)(e.fromTime, e.toTime)), toTime: e.fromTime } : null, selectedRange: e }))(t),
                            { compareData: l, metricsList: i } = (0, y.Jl)(e, n.toTime.toISOString(), n.fromTime.toISOString(), r?.fromTime.toISOString(), a),
                            o = (0, y.HM)(i, ["CreateTweet", "CreateQuote"], "Posts");
                        w(o), E(l);
                    }, []);
                    return (
                        l.useEffect(() => {
                            S && k(S, T.current, s.requested_metrics);
                        }, [k, S, s]),
                        l.createElement(v.Provider, { value: { data: m, compareData: _, isFetching: x } }, e)
                    );
                },
                _ = () => {
                    const e = l.useContext(v);
                    if (void 0 === e) throw new Error("useOverviewData must be used within an OverviewDataProvider");
                    return e;
                };
        },
        453527: (e, t, a) => {
            "use strict";
            a.d(t, { J: () => d, T: () => m });
            a(571372);
            var r = a(202784),
                n = a(400752),
                l = a(420182),
                i = a(47329),
                o = a(665979);
            const s = { chartType: "line", granularity: "daily", range: { fromTime: (0, o.b7)(new Date(), -6), toTime: (0, o.b7)(new Date(), 1) }, restId: "", setChartType: () => {}, setGranularity: () => {}, setRange: () => {}, metric: i.Mu[0].value, setMetric: () => {}, secondaryMetric: null, setSecondaryMetric: () => {} },
                c = r.createContext(s),
                d = () => {
                    const e = r.useContext(c);
                    if (null === e) throw new Error("useOverviewData must be used within a OverviewDataProvider");
                    return e;
                },
                u = "rweb.accountAnalytics",
                m = ({ children: e, initialRange: t, restId: a, type: o }) => {
                    const d = (0, n.Dv)(l.lZ),
                        [m, p] = r.useState(!1),
                        [y, g] = r.useState(t || s.range),
                        [f, h] = r.useState(s.granularity),
                        [b] = r.useState(a),
                        [v, w] = r.useState(s.chartType),
                        [_, E] = r.useState(s.metric),
                        [x, C] = r.useState(s.secondaryMetric),
                        T = r.useRef({ chartType: v, primaryMetric: { value: _, label: _ }, secondaryMetric: x ? { value: x, label: x } : null }),
                        S = r.useCallback(
                            (e) => {
                                T.current && ((T.current = { ...T.current, ...e }), d.set(u, T.current));
                            },
                            [d],
                        );
                    r.useEffect(() => {
                        d.get(u).then((e) => {
                            if (e) {
                                w(e.chartType);
                                const t = e.primaryMetric?.value || s.metric,
                                    a = e.secondaryMetric?.value || null,
                                    r = (e) => i.Mu.some((t) => t.value === e) && ("post" !== o || "Posts" !== e),
                                    n = r(t) ? t : s.metric,
                                    l = a && r(a) ? a : null;
                                E(n), C(l), (T.current = { chartType: e.chartType, primaryMetric: { value: n, label: n }, secondaryMetric: l ? { value: l, label: l } : null });
                            }
                            p(!0);
                        });
                    }, [o, d]);
                    const k = r.useCallback(
                            (e) => {
                                w(e), S({ chartType: e });
                            },
                            [S],
                        ),
                        D = r.useCallback(
                            (e) => {
                                E(e), S({ primaryMetric: { value: e, label: e } });
                            },
                            [S],
                        ),
                        Z = r.useCallback(
                            (e) => {
                                C(e), S({ secondaryMetric: e ? { value: e, label: e } : null });
                            },
                            [S],
                        );
                    if (m) return r.createElement(c.Provider, { value: { chartType: v, granularity: f, range: y, restId: b, setChartType: k, setGranularity: h, setRange: g, metric: _, setMetric: D, secondaryMetric: x, setSecondaryMetric: Z } }, e);
                };
        },
        459777: (e, t, a) => {
            "use strict";
            a.d(t, { C: () => p });
            var r = a(202784),
                n = a(325686),
                l = a(466792),
                i = a(731708),
                o = a(797553),
                s = a(392237),
                c = a(674132),
                d = a.n(c),
                u = a(487552),
                m = a(913973);
            const p = ({ color: e, disabledOptions: t, options: a, selected: s, setOption: c, placeholder: p = d().abf2d13c }) => {
                    const [g, f] = r.useState(!1),
                        h = "none" === s,
                        b = a.find((e) => e.value === s);
                    return r.createElement(l.Z, null, ({ isHovered: d }) =>
                        r.createElement(
                            n.Z,
                            { onClick: () => f(!g), style: [y.metricDropdownButton, d && y.hovered] },
                            e && r.createElement(n.Z, { style: [y.labelColor, { backgroundColor: e }] }),
                            r.createElement(n.Z, { style: y.metricDropdownInner }, r.createElement(i.ZP, { style: h && y.unselected, weight: "bold" }, h ? p : b?.label), r.createElement(u.default, { style: h && y.unselected })),
                            g
                                ? r.createElement(
                                      o.default,
                                      { contentStyle: y.dropdownContent, onDismiss: () => f(!1) },
                                      a.map((e) => {
                                          const a = !!t?.find((t) => t === e.value),
                                              o = s !== e.value;
                                          return r.createElement(l.Z, { key: e.value }, ({ isHovered: t }) =>
                                              r.createElement(
                                                  n.Z,
                                                  {
                                                      onClick: () => {
                                                          a || (c(e.value), f(!1));
                                                      },
                                                      style: [y.item, t && y.itemHovered],
                                                  },
                                                  r.createElement(m.default, { style: [y.checkmark, o && y.hidden] }),
                                                  r.createElement(i.ZP, { style: [y.optionLabel, a && y.disabledText] }, e.label),
                                              ),
                                          );
                                      }),
                                  )
                                : null,
                        ),
                    );
                },
                y = s.default.create((e) => ({ metricDropdownButton: { overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", width: "fit-content", cursor: "pointer", position: "relative", backgroundColor: "transparent", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.nestedBorderColor, borderRadius: e.borderRadii.medium }, metricDropdownInner: { display: "flex", flexDirection: "row", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, alignItems: "center", width: "fit-content", backgroundColor: "transparent" }, hovered: { backgroundColor: e.colors.gray50 }, labelColor: { width: "5px", height: "100%" }, unselected: { color: e.colors.gray600 }, dropdownContent: { boxShadow: "none", borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, minWidth: "max-content" }, item: { backgroundColor: e.colors.gray0, paddingHorizontal: e.spaces.space24, paddingVertical: e.spaces.space8, flexDirection: "row", gap: e.spaces.space8, cursor: "pointer", alignItems: "center" }, itemHovered: { backgroundColor: e.colors.gray50 }, hidden: { visibility: "hidden" }, checkmark: { width: e.spaces.space16, height: e.spaces.space16 }, disabledText: { textDecorationLine: "line-through" }, optionLabel: { whiteSpace: "no-wrap" } }));
        },
        737667: (e, t, a) => {
            "use strict";
            a.d(t, { X: () => u });
            var r = a(202784),
                n = a(214997),
                l = a(154003),
                i = a(392237),
                o = a(725516),
                s = a(508469),
                c = a(665979);
            const d = [
                { from: 7, label: "7D", to: 0 },
                { from: 14, label: "2W", to: 0 },
                { from: 28, label: "4W", to: 0 },
                { from: 90, label: "3M", to: 0 },
                { from: 365, label: "1Y", to: 0 },
            ];
            function u({ maxDays: e = 365, onRangeChange: t, range: a }) {
                const i = (0, o.z)(),
                    u = (e) => (0, c.b7)(new Date(), 1 - e.from).getTime() === a.fromTime.getTime(),
                    [p, y] = r.useState(!d.some((e, t) => u(e)));
                return r.createElement(
                    n.Z,
                    { alignItems: "center", contentContainerStyle: m.root, justifyContent: "end", showsHorizontalScrollIndicator: !1, showsVerticalScrollIndicator: !1, style: { flexGrow: 0, overflow: "auto" } },
                    r.createElement(s.D, {
                        endDate: (0, c.b7)(a.toTime, -1),
                        maxDays: e,
                        onChange: (e) => {
                            t({ fromTime: (0, c.b7)(e.startDate), toTime: (0, c.b7)(e.endDate, 1) }), y(!0), i.scribe({ component: "DateRangePicker", action: "click" });
                        },
                        selected: p,
                        startDate: a.fromTime,
                    }),
                    d
                        .filter((t) => t.from <= e)
                        .map((e) =>
                            r.createElement(
                                l.ZP,
                                {
                                    key: e.label,
                                    onMouseDown: (a) => {
                                        a.preventDefault(), t({ fromTime: (0, c.b7)(new Date(), 1 - e.from), toTime: (0, c.b7)(new Date(), 1 + e.to) }), y(!1), i.scribe({ component: "TimeFrameSelector", action: "click", data: { time_frame: e.label } });
                                    },
                                    size: "small",
                                    type: !p && u(e) ? "primaryFilled" : "primaryOutlined",
                                },
                                e.label,
                            ),
                        ),
                );
            }
            const m = i.default.create((e) => ({ root: { display: "flex", flexDirection: "row", alignItems: "center", width: "fit-content", gap: e.spaces.space8 }, button: { height: e.spaces.space32, paddingHorizontal: e.spaces.space12 } }));
        },
        945181: (e, t, a) => {
            "use strict";
            a.d(t, { Fd: () => b, Kg: () => y, WO: () => v, fX: () => h });
            var r = a(202784),
                n = a(325686),
                l = a(731708),
                i = a(738545),
                o = a(67369),
                s = a(165822),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(148642),
                p = a(665979);
            const y = {
                    Impressions: { popover: u().b15df4b4, label: u().e5fe61e0, summary: u().d1018321 },
                    EngagementRate: {
                        label: u().e623137c,
                        popover: u().d9d34182,
                        calculate: (e, t) => {
                            const a = f(e, "Engagements"),
                                r = f(e, "Impressions"),
                                n = t ? f(t, "Engagements") : null,
                                l = t ? f(t, "Impressions") : null;
                            return { current: e ? (a ?? 0) / (r ?? 0) : null, compare: t ? (n ?? 0) / (l ?? 0) : null };
                        },
                        format: "percent",
                    },
                    ProfileVisits: { label: u().aeee0182, popover: u().b2bde01a, summary: u().faf4c1f5 },
                    LinkClicks: { label: u().d5f1e554, popover: u().cf573986 },
                    Follows: { label: u().j761451e, popover: u().e1a87d14 },
                    Replies: { label: u().jdceda60, popover: u().j590577e },
                    Likes: { label: u().d7b8ebaa, popover: u().ia1da622, summary: u().cfd1036b },
                    Retweets: { label: u().ja42739e, popover: u().ca6e8de0 },
                    VideoViews: { label: u().b1b4d57e, popover: u().bdaf100e },
                    MediaViews: { label: u().ca826772, popover: u().j43b8f52 },
                    CompletionRate: {
                        label: u().d3969c06,
                        popover: u().c58c3476,
                        calculate: (e, t) => {
                            const a = f(e, "VideoCompletions"),
                                r = f(e, "VideoViews"),
                                n = t ? f(t, "VideoCompletions") : null,
                                l = t ? f(t, "VideoViews") : null;
                            return { current: e ? (a ?? 0) / (r ?? 0) : null, compare: t ? (n ?? 0) / (l ?? 0) : null };
                        },
                        format: "percent",
                    },
                    Bookmark: { label: u().i3145aa0, popover: u().c8aae62a },
                    Share: { label: u().g70825e0, popover: u().c6fbefd4 },
                },
                g = u().c778d80b;
            function f(e, t) {
                return e ? Object.values(e).reduce((e, a) => (a ? e + (a.metrics[t] || 0) : e), 0) : null;
            }
            const h = ({ compareData: e, data: t, metric: a }) => {
                    const r = y[a];
                    let n, l;
                    r.calculate ? ({ compare: l, current: n } = r.calculate(t, e)) : ((n = f(t, a)), (l = f(e, a)));
                    const i = null != n && isFinite(n) ? Math.max(0, n) : void 0;
                    let o,
                        s = "-";
                    return null != n && isFinite(n) && (s = "percent" === r.format ? g(Math.max(0, Math.min(1, n))) : (0, p.uf)(Math.max(0, n))), null != n && null != l && 0 !== l && ((o = (n - l) / l), isFinite(o) || (o = void 0)), { count: i, trendValue: o, value: s };
                },
                b = (e) => {
                    const t = y[e.metric],
                        { count: a, trendValue: o, value: s } = h(e);
                    return r.createElement(i.ZP, { animated: !0, count: a, label: t.label, popover: ((c = t.popover), r.createElement(n.Z, null, r.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, c))), size: "title2", trendValue: o, value: s });
                    var c;
                },
                v = ({ metrics: e }) => {
                    const t = (0, o.LX)(),
                        { compareData: a, data: l } = (0, m.N)();
                    return r.createElement(
                        n.Z,
                        { style: t ? w.gridMobile : w.gridDesktop },
                        e.map((e) => r.createElement(s.Z, { "aria-label": e, key: e, upper: r.createElement(n.Z, { style: w.tile }, r.createElement(b, { compareData: a, data: l, metric: e })) })),
                    );
                },
                w = c.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, rowGap: e.spaces.space2 };
                    return { root: { padding: e.spaces.space16 }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, tile: { backgroundColor: e.colors.gray0, flexGrow: 1, justifyContent: "center", paddingStart: e.spaces.space16 } };
                });
        },
        792522: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => ne });
            a(136728);
            var r = a(977868),
                n = a(202784),
                l = a(325686),
                i = (a(585488), a(107267)),
                o = a(67369),
                s = a(451051),
                c = a(731708),
                d = a(124964),
                u = a(392237),
                m = a(674132),
                p = a.n(m),
                y = a(53674),
                g = a(432181),
                f = a(194661),
                h = a(155353),
                b = a(323265),
                v = a(984932),
                w = a(252021),
                _ = a(507651),
                E = a(736063),
                x = a(725405),
                C = a(125363),
                T = a(390387),
                S = a(919022),
                k = a(535338),
                D = a(979673),
                Z = a(347485),
                M = a(665979),
                R = a(907357),
                P = a(133737),
                I = a(926330),
                L = a(920760),
                O = a(952793),
                V = a(333416),
                A = a(47329),
                z = a(459777),
                W = a(464703);
            const $ = L.Z,
                j = I.Z,
                H = P.Z,
                F = { context: "ACCOUNT_ANALYTICS_SCREEN" },
                N = new Date(),
                B = ({ endTime: e, engagementType: t, startTime: a, tweetId: r }) => {
                    const l = (0, C.v9)(T.VT),
                        i = (0, O.hC)("rweb_analytics_in_out_network_enabled"),
                        o = (0, k.p)($, { rest_id: r, from_time_incl: a, to_time_excl: e, dimensions: (0, W.t_)(i, !0) }),
                        s = (0, k.p)(H, { rest_id: r, from_time_incl: a, to_time_excl: e }),
                        c = (0, k.p)(j, { rest_id: r, from_time_incl: (0, W.Hk)(N)(28).toISOString(), to_time_excl: N.toISOString(), requested_metrics: A._$ }),
                        d = n.useCallback(
                            (e) => {
                                const a = t.split("|"),
                                    r = e?.tweet_result_by_rest_id?.result?.uec_metrics_daily_time_series_count;
                                return r?.filter((e) => a.includes(e.engagement_type));
                            },
                            [t],
                        ),
                        u = n.useCallback(
                            (e) => {
                                const a = A.U0[t],
                                    r = [];
                                return (
                                    (e?.tweet_result_by_rest_id?.result?.organic_metrics_time_series || []).forEach((e) => {
                                        const { metric_values: t, timestamp: n } = e;
                                        t.forEach((e) => {
                                            e.metric_type === a && r.push({ timestamp: n.iso8601_time, count: e.metric_value || 0 });
                                        });
                                    }),
                                    r
                                );
                            },
                            [t],
                        ),
                        m = n.useCallback(
                            (e) => {
                                const a = t.split("|"),
                                    r = e?.tweet_result_by_rest_id?.result?.uec_country_metrics_daily_time_series_count;
                                return r?.filter((e) => a.includes(e.engagement_type));
                            },
                            [t],
                        ),
                        p = n.useMemo(() => {
                            const e = d(o),
                                t = u(c),
                                a = m(s);
                            return { ageData: (0, W.yw)(e), deviceData: (0, W.Tb)(e), locationData: (0, W.a)(a, l), genderData: (0, W.MA)(e), inNetworkData: (0, W.FZ)(e), heatmapData: (0, W.Yg)(t) };
                        }, [o, c, d, u, l, m, s]);
                    return n.createElement(V.Z, { data: p, engagementType: A.c6.find((e) => e.value === t)?.label || A.c6[0].label });
                },
                U = u.default.create((e) => ({ selector: { marginStart: e.spaces.space16 } })),
                X = ({ endTime: e, startTime: t, tweetId: a }) => {
                    const [r, i] = n.useState(A.c6[0].value);
                    return a ? n.createElement(l.Z, null, n.createElement(l.Z, { style: U.selector }, n.createElement(z.C, { options: A.c6, selected: r, setOption: i })), n.createElement(E.H, { errorConfig: F }, n.createElement(B, { endTime: e, engagementType: r, startTime: t, tweetId: a }))) : null;
                },
                J = p().dc70a568,
                Y = p().d59dbf8a,
                q = p().b069d89c,
                G = r.Z,
                K = { context: "ACCOUNT_ANALYTICS_SCREEN" },
                Q = new Date(),
                ee = (e) => (0, W.Hk)(Q)(e),
                te = () => n.createElement(E.H, { errorConfig: K }, n.createElement(ae, null)),
                ae = () => {
                    const e = (0, i.useHistory)(),
                        t = (0, i.useLocation)(),
                        { tweetId: a } = (0, i.useParams)(),
                        r = (0, C.v9)(T.Js),
                        u = (0, C.v9)(S.ZP.selectViewerUser),
                        m = r,
                        [E, P] = n.useState("Overview"),
                        I = (0, k.p)(G, { rest_id: a || "" }),
                        L = (0, x.Z)(),
                        O = Boolean(b.ZP.getTwitterAppVersion()),
                        V = O ? b.ZP.osString() : "web",
                        A = (0, o.JS)();
                    n.useEffect(() => {
                        L.scribePageImpression({ page: "account_analytics", section: V, component: "home", action: "show" });
                    }, [V, L]);
                    const { created_at: z } = I?.tweet?.result?.legacy || {},
                        $ = z ? (0, W.VS)(Q, new Date(z)) : 7,
                        j = z ? (0, M.b7)(new Date(z)) : (0, M.b7)(Q, -6),
                        [H, F] = n.useState({ now: (0, W.iX)(Q).toISOString(), past: (0, M.b7)(ee($)).toISOString(), pastCompare: (0, M.b7)(ee(2 * $)).toISOString() });
                    if (!a || !m || !I) return null;
                    const N = p().jade381b,
                        B = () => {
                            u && u.screen_name && e.push(`/${u.screen_name}/status/${a}`);
                        },
                        U = [
                            { key: Y, label: Y, isActive: () => "Overview" === E, onClick: () => P("Overview"), to: t.pathname },
                            { key: q, label: q, isActive: () => "Audience" === E, onClick: () => P("Audience"), to: t.pathname },
                        ];
                    return n.createElement(w.Z, {
                        backLocation: "/i/account_analytics/content",
                        headerless: O,
                        history: e,
                        isFullWidth: !0,
                        primaryContent: n.createElement(
                            l.Z,
                            null,
                            (() => {
                                const e = I?.tweet?.result?.legacy,
                                    { created_at: t, display_text_range: a, entities: r, favorite_count: i, full_text: o, reply_count: u, retweet_count: m } = e || {},
                                    p = ((e) =>
                                        e.map((e) => {
                                            const { ext_alt_text: t, id_str: a, media_url_https: r, type: n, video_info: l } = e,
                                                i = { media_url_https: r || "", id_str: a || "", ext_alt_text: t || "" };
                                            if ("photo" === n) return { type: "photo", ...i };
                                            {
                                                const [e, t] = l?.aspect_ratio || [0, 0];
                                                return { type: "video" === n || "animated_gif" === n || "vine" === n ? n : "video", video_info: { aspect_ratio: [e, t], duration_millis: l?.duration_millis || 0, variants: [] }, ...i };
                                            }
                                        }))(r?.media || []),
                                    [b, w] = A ? [85, 150] : [56, 100],
                                    [_, E] = a || [0, (o?.length || 1) - 1],
                                    x = p && p.length > 0 ? n.createElement(l.Z, { style: re.media }, n.createElement(v.Z, { height: b, media: p, shouldDisplaySensitiveMedia: !1, useImage: !0, width: w })) : null;
                                return A ? n.createElement(l.Z, { onClick: B, style: { ...re.tweetSummary, justifyContent: "flex-start" } }, n.createElement(l.Z, { style: re.media }, x), n.createElement(l.Z, { style: { flexBasis: x ? "50%" : "100%" } }, n.createElement(s.Z, { displayTextRange: [_, E], style: re.tweetDetailsMobile, text: o || "" }), n.createElement(c.ZP, { size: "body", style: re.tweetDetailsMobile }, N(new Date(t || 0)), n.createElement(d.Z, null), n.createElement(y.default, { style: re.icon }), (0, D.fV)(parseFloat(I?.tweet?.result?.views?.count))), n.createElement(c.ZP, { size: "body", style: re.tweetDetailsMobile }, n.createElement(g.default, { style: re.icon }), (0, D.fV)(i), n.createElement(d.Z, null), n.createElement(f.default, { style: re.icon }), (0, D.fV)(u), n.createElement(d.Z, null), n.createElement(h.default, { style: re.icon }), (0, D.fV)(m)))) : n.createElement(l.Z, { onClick: B, style: re.tweetSummary }, n.createElement(c.ZP, { size: "body", style: re.tweet }, x, n.createElement(s.Z, { displayTextRange: [_, E], text: o || "" })), n.createElement(c.ZP, { size: "body" }, N(new Date(t || 0))), n.createElement(c.ZP, { size: "body" }, n.createElement(y.default, { style: re.icon }), (0, D.fV)(parseFloat(I?.tweet?.result?.views?.count))), n.createElement(c.ZP, { size: "body" }, n.createElement(g.default, { style: re.icon }), (0, D.fV)(i)), n.createElement(c.ZP, { size: "body" }, n.createElement(f.default, { style: re.icon }), (0, D.fV)(u)), n.createElement(c.ZP, { size: "body" }, n.createElement(h.default, { style: re.icon }), (0, D.fV)(m)));
                            })(),
                            n.createElement(_.Z, { links: U }),
                            "Overview" === E
                                ? n.createElement(Z.Z, { initialRange: { fromTime: j, toTime: (0, M.b7)(new Date(H.now), 1) }, maxDays: $, restId: a, type: "post" })
                                : n.createElement(
                                      n.Fragment,
                                      null,
                                      n.createElement(
                                          l.Z,
                                          { style: re.timeFrameSelector },
                                          n.createElement(R.Z, {
                                              defaultTimeRange: { endDate: Q, startDate: new Date(H.past), compareStartDate: new Date(H.pastCompare) },
                                              maxDays: 90,
                                              onChange: (e) => {
                                                  const t = (0, W.o)(e.startDate, e.endDate);
                                                  F({ now: (0, W.iX)(e.endDate).toISOString(), past: (0, M.b7)(e.startDate).toISOString(), pastCompare: (0, M.b7)(t).toISOString() });
                                              },
                                          }),
                                      ),
                                      n.createElement(X, { endTime: new Date(H.now).getTime(), startTime: new Date(H.past).getTime(), tweetId: a }),
                                  ),
                        ),
                        sidebarContent: null,
                        title: O ? null : J,
                        withBackButton: !0,
                    });
                },
                re = u.default.create((e) => ({ tweetSummary: { display: "flex", flexDirection: "row", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, alignItems: "center", justifyContent: "space-between", padding: e.spaces.space12, paddingEnd: e.spaces.space48, margin: e.spaces.space12, cursor: "pointer" }, tweetDetailsMobile: { marginBottom: e.spaces.space4 }, icon: { marginEnd: e.spaces.space4 }, tweet: { display: "flex", flexDirection: "row", maxWidth: "50%" }, media: { marginEnd: e.spaces.space12 }, timeFrameSelector: { marginEnd: e.spaces.space8, display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: e.spaces.space16 } })),
                ne = n.memo(te);
        },
        409700: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => M });
            a(136728);
            var r = a(36886),
                n = a(185038),
                l = a(130872),
                i = a(202784),
                o = a(325686),
                s = (a(585488), a(392237)),
                c = a(443781),
                d = a(736063),
                u = a(952793),
                m = a(125363),
                p = a(390387),
                y = a(535338),
                g = a(267240),
                f = a(234622);
            a(754164);
            function h() {
                const e = (0, u.hC)("rweb_analytics_in_out_network_enabled"),
                    t = (0, u.hC)("rweb_analytics_audience_compact_mode");
                return i.createElement(f.i, null, i.createElement(g.g1, { enableCompactOnMobile: t, showFollowersChart: e }));
            }
            var b = a(333416),
                v = a(47329),
                w = a(459777),
                _ = a(907357),
                E = a(464703);
            const x = l.Z,
                C = n.Z,
                T = r.Z,
                S = { context: "ACCOUNT_ANALYTICS_SCREEN" },
                k = new Date(),
                D = ({ endTime: e, engagementType: t, startTime: a, userId: r }) => {
                    const n = (0, m.v9)(p.VT),
                        l = (0, u.hC)("rweb_analytics_in_out_network_enabled"),
                        o = (0, y.p)(x, { rest_id: r, from_time_incl: a, to_time_excl: k.getTime(), dimensions: (0, E.t_)(l, !0) }),
                        s = (0, y.p)(T, { rest_id: r, from_time_incl: a, to_time_excl: k.getTime() }),
                        c = (0, y.p)(C, { rest_id: r, from_time_incl: (0, E.Hk)(k)(28).toISOString(), to_time_excl: k.toISOString(), requested_metrics: v._$ }),
                        d = i.useCallback(
                            (e) => {
                                const a = t.split("|"),
                                    r = e?.user_result_by_rest_id?.result?.uec_metrics_daily_time_series_count;
                                return r?.filter((e) => a.includes(e.engagement_type));
                            },
                            [t],
                        ),
                        g = i.useCallback(
                            (e) => {
                                const a = v.U0[t],
                                    r = [];
                                return (
                                    (e?.user_result_by_rest_id?.result?.organic_metrics_time_series || []).forEach((e) => {
                                        const { metric_values: t, timestamp: n } = e;
                                        t.forEach((e) => {
                                            e.metric_type === a && r.push({ timestamp: n.iso8601_time, count: e.metric_value || 0 });
                                        });
                                    }),
                                    r
                                );
                            },
                            [t],
                        ),
                        f = i.useCallback(
                            (e) => {
                                const a = t.split("|"),
                                    r = e?.user_result_by_rest_id?.result?.uec_country_metrics_daily_time_series_count;
                                return r?.filter((e) => a.includes(e.engagement_type));
                            },
                            [t],
                        ),
                        h = i.useMemo(() => {
                            const e = d(o),
                                t = g(c),
                                a = f(s);
                            return { ageData: (0, E.yw)(e), deviceData: (0, E.Tb)(e), locationData: (0, E.a)(a, n), genderData: (0, E.MA)(e), inNetworkData: (0, E.FZ)(e), heatmapData: (0, E.Yg)(t) };
                        }, [o, c, s, d, g, f, n]);
                    return i.createElement(b.Z, { data: h, engagementType: v.c6.find((e) => e.value === t)?.label || v.c6[0].label });
                },
                Z = s.default.create((e) => ({ timeframeSelector: { display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 } })),
                M = () => {
                    const { viewerUserId: e } = i.useContext(c.rC),
                        t = (0, u.hC)("rweb_analytics_audience_xweb_enabled"),
                        [a, r] = i.useState({ startTime: (0, E.Hk)(k)(7), endDate: k }),
                        [n, l] = i.useState(v.c6[0].value);
                    return e ? (t ? i.createElement(h, null) : i.createElement(o.Z, null, i.createElement(o.Z, { style: Z.timeframeSelector }, i.createElement(w.C, { options: v.c6, selected: n, setOption: l }), i.createElement(_.Z, { maxDays: 90, onChange: (e) => r({ startTime: e.startDate, endDate: e.endDate }) })), i.createElement(d.H, { errorConfig: S }, i.createElement(D, { endTime: a.endDate.getTime(), engagementType: n, startTime: a.startTime.getTime(), userId: e })))) : null;
                };
        },
        339433: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => d });
            var r = a(202784),
                n = a(107267),
                l = a(545457),
                i = a(4452),
                o = a(189244),
                s = a(979434);
            const c = () => (
                    (0, i.ZP)(),
                    (0, l.ph)(),
                    r.useEffect(() => {
                        (0, i.jW)("account-analytics-content-ready");
                        const e = document.documentElement;
                        if (e) {
                            const t = e.style.cssText;
                            return (
                                (e.style.height = "auto"),
                                () => {
                                    e.style.cssText = t;
                                }
                            );
                        }
                    }, []),
                    r.createElement(
                        n.Switch,
                        null,
                        ["/i/account_analytics", "/i/account_analytics/overview", "/i/account_analytics/content", `/i/account_analytics/content/${o.A2}`, "/i/account_analytics/audience", "/i/account_analytics/video", `/i/account_analytics/video/${o.i5}`, "/i/account_analytics/live", `/i/account_analytics/live/${o.cD}`, "/i/account_analytics/spaces", `/i/account_analytics/spaces/${o.cD}`].map((e) => r.createElement(n.Route, { exact: !0, key: e, path: e }, r.createElement(s.Z, null))),
                    )
                ),
                d = r.memo(c);
        },
        807267: (e, t, a) => {
            "use strict";
            a.d(t, { c: () => c });
            var r = a(202784),
                n = a(10714),
                l = a(400752),
                i = a(323265),
                o = a(420182),
                s = a(234622);
            a(754164);
            function c() {
                const e = (function () {
                    const e = (0, l.Dv)(o.lZ),
                        [t, a] = r.useState(null);
                    return (
                        r.useEffect(() => {
                            e.get(d).then((e) => {
                                const t = "line" === e?.chartType ? "area" : "bar",
                                    r = e?.primaryMetric?.value,
                                    n = e?.secondaryMetric?.value;
                                a({ chartType: t, primaryMetric: r, secondaryMetric: n });
                            });
                        }, [e]),
                        t
                    );
                })();
                return e ? r.createElement(s.i, null, r.createElement(n.RV, { fallbackConfig: e, isWebView: i.ZP.isWebView(), newMediaMetricsEnabled: !0, showCreateReply: !0, showFollowsOverTimeWidget: !0, showPostsOverTimeWidget: !0, showVerifiedFollowers: !0 })) : null;
            }
            const d = "rweb.accountAnalytics";
        },
        494938: (e, t, a) => {
            "use strict";
            a.d(t, { O: () => i });
            var r = a(202784),
                n = a(411924),
                l = a(234622);
            a(754164);
            function i() {
                return r.createElement(l.i, null, r.createElement(n.LF, { url: "/i/account_analytics/content" }));
            }
        },
        547073: (e, t, a) => {
            "use strict";
            a.d(t, { N: () => o });
            var r = a(202784),
                n = a(948138),
                l = a(107267),
                i = a(234622);
            a(754164);
            function o() {
                const { broadcastId: e } = (0, l.useParams)();
                return r.createElement(i.i, null, r.createElement(n.j, { broadcastId: e }));
            }
        },
        329699: (e, t, a) => {
            "use strict";
            a.d(t, { H: () => i });
            var r = a(202784),
                n = a(280322),
                l = a(234622);
            a(754164);
            function i() {
                return r.createElement(l.i, null, r.createElement(n.V, { getBroadcastUrl: (e) => `/i/account_analytics/live/${e}`, path: "/i/account_analytics/live" }));
            }
        },
        146486: (e, t, a) => {
            "use strict";
            a.d(t, { W: () => c });
            a(543673), a(240753), a(128399);
            var r = a(202784),
                n = a(902958),
                l = a(325686),
                i = a(107267),
                o = a(234622),
                s = a(952793);
            a(754164);
            function c() {
                const { tweetId: e } = (0, i.useParams)(),
                    t = (0, i.useLocation)(),
                    a = new URLSearchParams(t.search).get("referrerUrl") || "/i/account_analytics/content",
                    c = (0, s.hC)("rweb_analytics_in_out_network_enabled"),
                    d = (0, s.hC)("rweb_analytics_post_details_realtime_enabled");
                return r.createElement(l.Z, { style: { paddingBottom: "5rem" } }, r.createElement(o.i, null, r.createElement(n.e, { contentPageUrl: "/i/account_analytics/content", referrerUrl: a, restId: e, showFollowersChart: c, showRealtimeChart: d })));
            }
        },
        843512: (e, t, a) => {
            "use strict";
            a.d(t, { t: () => o });
            var r = a(202784),
                n = a(481899),
                l = a(107267),
                i = a(234622);
            a(754164);
            function o() {
                const { broadcastId: e } = (0, l.useParams)();
                return r.createElement(i.i, null, r.createElement(n.o, { id: e, spacesOverviewUrl: "/i/account_analytics/spaces" }));
            }
        },
        130701: (e, t, a) => {
            "use strict";
            a.d(t, { M: () => i });
            var r = a(202784),
                n = a(47649),
                l = a(234622);
            a(754164);
            function i() {
                return r.createElement(l.i, null, r.createElement(n.l, { getSpaceAnalyticsUrl: (e) => `/i/account_analytics/spaces/${e}`, getSpaceUrl: (e) => `https://x.com/i/spaces/${e}` }));
            }
        },
        994585: (e, t, a) => {
            "use strict";
            a.d(t, { O: () => s });
            var r = a(202784),
                n = a(438885),
                l = a(325686),
                i = a(107267),
                o = a(234622);
            a(754164);
            function s() {
                const { analyticsMediaId: e } = (0, i.useParams)();
                return r.createElement(l.Z, { style: { paddingBottom: "5rem" } }, r.createElement(o.i, null, r.createElement(n.J, { estimatedRevenueVideoDetails: !0, mediaKey: e, videoOverviewUrl: "/i/account_analytics/video" })));
            }
        },
        733393: (e, t, a) => {
            "use strict";
            a.d(t, { R: () => s });
            var r = a(202784),
                n = a(367286),
                l = a(325686),
                i = a(323265),
                o = a(234622);
            a(754164);
            function s() {
                return r.createElement(l.Z, { style: { paddingBottom: "5rem" } }, r.createElement(o.i, null, r.createElement(n.iT, { enableCSVExport: !0, estimatedRevenueByDay: !0, estimatedRevenueEnabled: !0, isWebView: i.ZP.isWebView(), newListEnabled: !0, newVideoDetailsEnabled: !0, videoDetailsPath: "/i/account_analytics/video" })));
            }
        },
        555519: (e, t, a) => {
            var r = a(482609),
                n = a(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        754164: (e, t, a) => {
            var r = a(46062),
                n = a(555519);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var l = { insert: "head", singleton: !1 };
            r(n, l);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-d0d5c4c2.9fdec39a.js.map
