"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceAnalytics", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        738545: (e, t, n) => {
            n.d(t, { ZP: () => v });
            var r = n(202784),
                o = n(325686),
                a = n(332920),
                l = n.n(a),
                i = n(212145),
                s = n(568320),
                c = n(123588),
                d = n(731708),
                u = n(280278),
                p = n(392237),
                m = n(635998);
            const g = l().i2785009,
                f = l().c778d80b,
                E = l().d9687d23,
                x = l().ac73eb5a,
                h = l().c5a9f921,
                y = (e) => {
                    const { label: t, popover: n } = e;
                    return t ? r.createElement(o.Z, { style: w.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), n ? r.createElement(m.Z, { label: t, popover: n }) : null) : null;
                },
                b = (e) => {
                    const { style: t, unit: n } = e;
                    return n ? r.createElement(d.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, n) : null;
                },
                Z = (e) => {
                    let t,
                        n,
                        { trendValue: a } = e;
                    return void 0 === a ? null : (Math.abs(a) < 0.1 ? ((a = Math.round(1e3 * a) / 1e3), (t = f(a))) : ((a = Math.round(100 * a) / 100), (t = g(a))), (n = ((e, t) => (e < 0 ? E({ trendValueNegativePercent: t }) : 0 === e ? x : h({ trendValuePositivePercent: t })))(a, t)), a < 0 ? r.createElement(o.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": n, style: w.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === a ? r.createElement(o.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": n, style: w.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(o.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": n, style: w.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                v = (e) => {
                    const { animated: t, count: n, label: a, popover: l, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        g = p || void 0 !== c ? w.textWithMargin : void 0,
                        f = void 0 !== c ? w.textWithMargin : void 0;
                    return r.createElement(o.Z, { style: w.dataPoint }, r.createElement(y, { label: a, popover: l }), r.createElement(o.Z, { style: w.valueBar }, t ? r.createElement(u.ZP, { count: n, size: i, style: g, weight: "bold" }, m) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, m), r.createElement(b, { style: f, unit: p }), r.createElement(Z, { trendValue: c })), s);
                };
        },
        635998: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(332920),
                l = n.n(a),
                i = n(711223),
                s = n(731708),
                c = n(154003),
                d = n(157130),
                u = n(392237);
            const p = l().affbaf62,
                m = l().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                f = (e) => {
                    const { label: t, popover: n } = e;
                    return r.createElement(o.Z, null, r.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(o.Z, { role: "dialog", style: g.popover }, r.createElement(o.Z, { style: g.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(o.Z, { style: g.popoverText }, n), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, r.createElement(o.Z, { role: "button" }, r.createElement(i.default, { "aria-label": p, style: g.iconInformation }))));
                };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                l = n(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return o.createElement(a.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                l = n(461756),
                i = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
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
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [f, E] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        x = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (x.current = !0),
                                function () {
                                    x.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (x.current)
                                if (l.Z.reducedMotionEnabled) E((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? E((e) => ({ ...e, pendingCount: null, pendingText: null })) : (E((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, E));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            x.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              x.current && E((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, E));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !l.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...m, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(i.ZP, d, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(x.current, E),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, x, E])
                    );
                };
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const a = t ? t(r, o, e) : !!r;
                        return a && n[0].push(r), !a && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceAnalytics.d2d1dc6a.js.map
