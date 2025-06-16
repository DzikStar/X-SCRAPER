"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceAnalytics", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
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
                v = l().d9687d23,
                Z = l().ac73eb5a,
                f = l().c5a9f921,
                E = (e) => {
                    const { label: t, popover: n } = e;
                    return t ? r.createElement(a.Z, { style: x.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), n ? r.createElement(p.Z, { label: t, popover: n }) : null) : null;
                },
                y = (e) => {
                    const { style: t, unit: n } = e;
                    return n ? r.createElement(d.ZP, { color: "gray700", style: [x.unitText, t], weight: "medium" }, n) : null;
                },
                b = (e) => {
                    let t,
                        n,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = h(o))) : ((o = Math.round(100 * o) / 100), (t = g(o))), (n = ((e, t) => (e < 0 ? v({ trendValueNegativePercent: t }) : 0 === e ? Z : f({ trendValuePositivePercent: t })))(o, t)), o < 0 ? r.createElement(a.Z, { style: x.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": n, style: x.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? r.createElement(a.Z, { style: x.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": n, style: x.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(a.Z, { style: x.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": n, style: x.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                x = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: n, label: o, popover: l, size: i, subTextList: c, trendValue: s, unit: m, value: p } = e,
                        g = m || void 0 !== s ? x.textWithMargin : void 0,
                        h = void 0 !== s ? x.textWithMargin : void 0;
                    return r.createElement(a.Z, { style: x.dataPoint }, r.createElement(E, { label: o, popover: l }), r.createElement(a.Z, { style: x.valueBar }, t ? r.createElement(u.ZP, { count: n, size: i, style: g, weight: "bold" }, p) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, p), r.createElement(y, { style: h, unit: m }), r.createElement(b, { trendValue: s })), c);
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
                        [h, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        Z = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (Z.current = !0),
                                function () {
                                    Z.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (Z.current)
                                if (l.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, o.Z)(e.count) && h.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            Z.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              Z.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, v));
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
                                            })(Z.current, v),
                                        style: s,
                                    },
                                    r.createElement(i.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, Z, v])
                    );
                };
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(717683),
                i = n(347101);
            const c = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: n } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
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
        926628: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceAnalytics.a998d6fa.js.map
