"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-bc6ccf4c", "icons/IconCameraPlusStroke-js", "icons/IconChevronRight-js", "icons/IconConnectArrows-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                l = n(731708),
                a = n(58881),
                c = n(530732),
                s = n(392237);
            const d = s.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = a.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(i.Z, { style: d.container }, o.createElement(c.Z, (0, r.Z)({}, u, { interactiveStyles: m, style: d.root }), o.createElement(l.ZP, { align: e, color: t }, n)));
                };
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                i = n(191796),
                l = n(58399),
                a = n(731708),
                c = n(952428),
                s = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: m = !1, label: h, link: g, onPress: p, paddingHorizontal: v, renderRightContent: b, role: f = "tab", styleOverride: w, testID: y = "pivot", thumbnail: Z, thumbnailSize: x, withoutArrow: E = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        z = "string" == typeof h ? r.createElement(a.ZP, null, h) : h,
                        M = "object" == typeof g && g.external && !g.openInSameFrame,
                        D = n ? ("string" == typeof n ? r.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${y}-description` }, n) : n) : null,
                        H = r.useMemo(() => ("space0" === v ? { paddingHorizontal: 0 } : { paddingHorizontal: v ? s.default.theme.spaces[v] : s.default.theme.componentDimensions.gutterHorizontal }), [v]);
                    return r.createElement(c.Z, { "aria-selected": "tab" === f ? m : null, disabled: d, link: d ? void 0 : g, onPress: p, role: f, style: [u.root, H, d && u.disabled, w], testID: y, withInteractiveStyling: !!g || !!p }, r.createElement(o.Z, { style: u.contentContainer }, Z ? r.createElement(o.Z, { style: C }, Z) : null, r.createElement(o.Z, { style: u.content }, z, D), b ? b() : null, (!g && !p) || d || E ? null : M ? r.createElement(i.default, { style: u.icon }) : r.createElement(l.default, { style: u.icon })), t);
                },
                u = s.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                o = n(325686),
                i = n(827515),
                l = n(461756),
                a = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                g = c.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [p, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        b = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (b.current)
                                if (l.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, i.Z)(e.count) && p.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && u(p.pendingCount, p.pendingText, v));
                        }, [p.animating, p.oldText]),
                        r.useMemo(() => {
                            const e = m[p.transitionDirection],
                                t = p.oldText && !l.Z.reducedMotionEnabled,
                                i = !p.animating && p.oldText && !l.Z.reducedMotionEnabled,
                                c = { ...h, ...(p.animating ? e.post : e.active) },
                                s = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(a.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, v),
                                        style: s,
                                    },
                                    r.createElement(a.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, b, v])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                l = n(891198),
                a = n(280278),
                c = n(392237);
            const s = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(i.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(i.ZP, { children: e, color: n ? "white" : "gray700", size: s, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: l = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(a.ZP, { children: t, count: n, size: s, style: o, weight: l }) : r.createElement(i.ZP, { children: t, color: c ? "white" : "text", size: s, style: o, weight: l }))));
            const m = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        293615: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(717683),
                a = n(347101);
            const c = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: n } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        170397: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.6dd5b9ca.js.map
