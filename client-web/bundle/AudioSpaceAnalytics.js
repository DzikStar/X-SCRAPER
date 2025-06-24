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
                s = n(568320),
                c = n(123588),
                d = n(731708),
                u = n(280278),
                p = n(392237),
                m = n(635998);
            const g = l().i2785009,
                h = l().c778d80b,
                f = l().d9687d23,
                E = l().ac73eb5a,
                y = l().c5a9f921,
                x = (e) => {
                    const { label: t, popover: n } = e;
                    return t ? r.createElement(a.Z, { style: v.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), n ? r.createElement(m.Z, { label: t, popover: n }) : null) : null;
                },
                b = (e) => {
                    const { style: t, unit: n } = e;
                    return n ? r.createElement(d.ZP, { color: "gray700", style: [v.unitText, t], weight: "medium" }, n) : null;
                },
                Z = (e) => {
                    let t,
                        n,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = h(o))) : ((o = Math.round(100 * o) / 100), (t = g(o))), (n = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? E : y({ trendValuePositivePercent: t })))(o, t)), o < 0 ? r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": n, style: v.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": n, style: v.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(a.Z, { style: v.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": n, style: v.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                v = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: n, label: o, popover: l, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        g = p || void 0 !== c ? v.textWithMargin : void 0,
                        h = void 0 !== c ? v.textWithMargin : void 0;
                    return r.createElement(a.Z, { style: v.dataPoint }, r.createElement(x, { label: o, popover: l }), r.createElement(a.Z, { style: v.valueBar }, t ? r.createElement(u.ZP, { count: n, size: i, style: g, weight: "bold" }, m) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, m), r.createElement(b, { style: h, unit: p }), r.createElement(Z, { trendValue: c })), s);
                };
        },
        635998: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                l = n.n(o),
                i = n(711223),
                s = n(731708),
                c = n(154003),
                d = n(157130),
                u = n(392237);
            const p = l().affbaf62,
                m = l().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { label: t, popover: n } = e;
                    return r.createElement(a.Z, null, r.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(a.Z, { role: "dialog", style: g.popover }, r.createElement(a.Z, { style: g.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(a.Z, { style: g.popoverText }, n), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, r.createElement(a.Z, { role: "button" }, r.createElement(i.default, { "aria-label": p, style: g.iconInformation }))));
                };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                a = n(325686),
                o = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, n), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                l = n(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return a.createElement(o.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                l = n(461756),
                i = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, o.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [h, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                            const e = p[h.transitionDirection],
                                t = h.oldText && !l.Z.reducedMotionEnabled,
                                o = !h.animating && h.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...m, ...(h.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(i.ZP, d, h.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(E.current, f),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, E, f])
                    );
                };
        },
        123588: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceAnalytics.804a3baa.js.map
