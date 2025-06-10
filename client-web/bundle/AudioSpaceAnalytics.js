"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceAnalytics", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        738545: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                l = n.n(o),
                i = n(212145),
                c = n(568320),
                s = n(123588),
                d = n(731708),
                u = n(280278),
                m = n(392237),
                p = n(635998);
            const g = l().i2785009,
                h = l().c778d80b,
                f = l().d9687d23,
                E = l().ac73eb5a,
                y = l().c5a9f921,
                Z = (e) => {
                    const { label: t, popover: n } = e;
                    return t ? r.createElement(a.Z, { style: v.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), n ? r.createElement(p.Z, { label: t, popover: n }) : null) : null;
                },
                b = (e) => {
                    const { style: t, unit: n } = e;
                    return n ? r.createElement(d.ZP, { color: "gray700", style: [v.unitText, t], weight: "medium" }, n) : null;
                },
                x = (e) => {
                    let t,
                        n,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = h(o))) : ((o = Math.round(100 * o) / 100), (t = g(o))), (n = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? E : y({ trendValuePositivePercent: t })))(o, t)), o < 0 ? r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": n, style: v.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": n, style: v.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": n, style: v.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                v = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: n, label: o, popover: l, size: i, subTextList: c, trendValue: s, unit: m, value: p } = e,
                        g = m || void 0 !== s ? v.textWithMargin : void 0,
                        h = void 0 !== s ? v.textWithMargin : void 0;
                    return r.createElement(a.Z, { style: v.dataPoint }, r.createElement(Z, { label: o, popover: l }), r.createElement(a.Z, { style: v.valueBar }, t ? r.createElement(u.ZP, { count: n, size: i, style: g, weight: "bold" }, p) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, p), r.createElement(b, { style: h, unit: m }), r.createElement(x, { trendValue: s })), c);
                };
        },
        635998: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                l = n.n(o),
                i = n(711223),
                c = n(731708),
                s = n(154003),
                d = n(157130),
                u = n(392237);
            const m = l().affbaf62,
                p = l().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { label: t, popover: n } = e;
                    return r.createElement(a.Z, null, r.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(a.Z, { role: "dialog", style: g.popover }, r.createElement(a.Z, { style: g.popoverTitle }, r.createElement(c.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(a.Z, { style: g.popoverText }, n), r.createElement(s.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, r.createElement(a.Z, { role: "button" }, r.createElement(i.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                a = n(325686),
                o = n(235902),
                l = n(885015),
                i = n(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: c } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? s[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && s.root, withGutter: !0 }, r.createElement(a.Z, { style: s.gapColumn }, r.createElement(a.Z, { style: [s.gap, d] })), r.createElement(a.Z, { style: s.gapText }, n), r.createElement(a.Z, { style: s.gapColumn }, r.createElement(a.Z, { style: [s.gap, d] }))) : r.createElement(a.Z, { style: [!t && s.root, c() && s.rootRedesign, s.gap, d] });
            }
            const s = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                l = n(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, c.column, n && c.withGutterColumn] }));
                    return a.createElement(o.Z, (0, r.Z)({ style: [t, c.root, n && c.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const c = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                s = i;
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                l = n(461756),
                i = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, o.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                g = c.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [h, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        E = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (E.current = !0),
                                function () {
                                    E.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (E.current)
                                if (l.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, o.Z)(e.count) && h.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            E.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              E.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, f));
                        }, [h.animating, h.oldText]),
                        r.useMemo(() => {
                            const e = m[h.transitionDirection],
                                t = h.oldText && !l.Z.reducedMotionEnabled,
                                o = !h.animating && h.oldText && !l.Z.reducedMotionEnabled,
                                c = { ...p, ...(h.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(i.ZP, d, h.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(E.current, f),
                                        style: s,
                                    },
                                    r.createElement(i.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, E, f])
                    );
                };
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => a, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (n, r, a) => {
                        const o = t ? t(r, a, e) : !!r;
                        return o && n[0].push(r), !o && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceAnalytics.b87b043a.js.map
