"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DockPeek", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        292546: (e, t, a) => {
            a.d(t, { Z: () => o });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                r = a(107267);
            const o = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [a, o] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const l = n.useCallback(
                    (n, r) => {
                        const o = new URLSearchParams(a);
                        o.set(n, r), t.push(`${e.pathname}?${o.toString()}`);
                    },
                    [t, e.pathname, a],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), l];
            };
        },
        149103: (e, t, a) => {
            a.r(t), a.d(t, { default: () => M });
            var n = a(202784),
                r = a(400752),
                o = a(83825),
                l = a(292546),
                i = a(807896),
                c = a(325686),
                s = a(537392),
                d = a(392237),
                h = a(138099),
                u = a(154003),
                m = a(111677),
                g = a.n(m),
                p = a(487552),
                v = a(837020),
                w = a(715601),
                f = a(996223),
                b = a(731708),
                Z = a(530732),
                y = a(215337);
            function E({ "aria-label": e, children: t, onPress: a, style: r }) {
                return n.createElement(Z.Z, { "aria-label": e, onPress: a, style: [x.button, r] }, n.createElement(y.Z, { angle: 80, colors: [d.default.theme.colors.blue500, d.default.theme.colors.blue700], style: x.gradient }, t));
            }
            const x = d.default.create((e) => ({ button: { overflow: "hidden", width: "100%", boxShadow: e.boxShadows.small, height: e.spacesPx.space48, borderRadius: e.spacesPx.space48 }, gradient: { height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space24 } }));
            function P({ onPress: e }) {
                const t = g().g4743c56;
                return n.createElement(n.Fragment, null, n.createElement(c.Z, { style: C.ctaButtonContainer }, n.createElement(E, { "aria-label": t, onPress: e, style: C.ctaButton }, n.createElement(b.ZP, { align: "center", color: "white", numberOfLines: 1, size: "headline1", weight: "bold" }, t))));
            }
            const C = d.default.create((e) => ({ ctaButtonContainer: { width: "100%", gap: e.spaces.space8, marginTop: e.spaces.space24 }, ctaButton: { width: "100%" } }));
            function L(e) {
                const t = (0, s.iv)().width < d.default.theme.breakpoints.medium,
                    a = { type: "bottom", role: "menu", onMaskClick: e.onClose, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0 },
                    [r, o] = (function () {
                        const [e, t] = n.useState(null),
                            a = n.useMemo(() => {
                                if (!e)
                                    return function (e) {
                                        const a = e.nativeEvent.layout;
                                        a && t(a);
                                    };
                            }, [e]);
                        return [e, a];
                    })();
                return n.createElement(h.Z, a, n.createElement(w.Z, { onLayout: o, style: k.sheetContainer }, n.createElement(c.Z, { style: k.header }, t && n.createElement(c.Z, { style: k.headerLeft }, n.createElement(u.ZP, (0, i.Z)({ "aria-label": B.collapse, icon: n.createElement(p.default, { style: k.closeIcon }), onPress: e.onJoin, pullLeft: !0 }, z))), n.createElement(c.Z, { style: k.headerRight }, n.createElement(u.ZP, (0, i.Z)({ "aria-label": B.close, icon: n.createElement(v.default, { style: k.closeIcon }), onPress: e.onClose, pullLeft: !0 }, z)))), n.createElement(c.Z, { style: [k.withoutPadding, k.content, ...(t ? [] : [k.contentNarrow])] }, n.createElement(f.J, { path: e.path ?? "" })), !t && n.createElement(P, { onPress: e.onJoin })));
            }
            const k = d.default.create((e) => ({ sheetContainer: { flex: 1, padding: e.spacesPx.space24, paddingTop: e.spacesPx.space12 }, withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 }, content: { overflowY: "auto", flex: 1, scrollbarWidth: "none" }, contentNarrow: { maxHeight: "60vh" }, header: { flexDirection: "row", marginBottom: e.spacesPx.space12 }, headerLeft: { flex: 1, alignItems: "flex-start" }, headerRight: { flex: 1, alignItems: "flex-end" }, closeIcon: { width: e.spacesPx.space24, height: e.spacesPx.space24 } })),
                z = { borderColor: "transparent", color: "text", size: "medium" },
                B = { collapse: g().d227d19e, close: g().ia5e7488 };
            function M(e) {
                const [t] = (0, l.Z)(),
                    a = t.get("peek"),
                    i = t.get("collapsed"),
                    c = t.get("expanded"),
                    s = (0, r.b9)(o.P);
                return n.createElement(L, {
                    onClose: () => {
                        e.history.goBackThroughModals();
                    },
                    onJoin: () => {
                        i && c && s([i, c]), e.history.goBackThroughModals();
                    },
                    path: a,
                });
            }
        },
        215337: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686);
            class o extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, a) => {
                                    const n = t[a];
                                    let r = "";
                                    return n && (r = ` ${100 * n}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: a, style: o } = this.props;
                    return n.createElement(r.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, a);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = o;
        },
        58399: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(717683),
                i = a(347101);
            const c = (e = {}) => {
                const t = n.useContext(l.Z),
                    { direction: a } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        246492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        264171: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        262009: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        465233: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DockPeek.c865e6da.js.map
