"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceReport", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                l = o(202784),
                n = o(325686),
                a = o(731708),
                c = o(58881),
                s = o(530732),
                i = o(392237);
            const d = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const m = c.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(n.Z, { style: d.container }, l.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: m, style: d.root }), l.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                l = o(325686),
                n = o(235902),
                a = o(885015),
                c = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: c.default.theme.colors[e] ?? c.default.theme.colors.borderColor };
                return o ? r.createElement(a.Z, { style: !t && i.root, withGutter: !0 }, r.createElement(l.Z, { style: i.gapColumn }, r.createElement(l.Z, { style: [i.gap, d] })), r.createElement(l.Z, { style: i.gapText }, o), r.createElement(l.Z, { style: i.gapColumn }, r.createElement(l.Z, { style: [i.gap, d] }))) : r.createElement(l.Z, { style: [!t && i.root, s() && i.rootRedesign, i.gap, d] });
            }
            const i = c.default.create((e) => ({ borderColor: { backgroundColor: c.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: c.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                l = o(202784),
                n = o(325686),
                a = o(392237);
            class c extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        c = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return l.createElement(n.Z, (0, r.Z)({ style: [t, s.root, o && s.withGutter] }, a), c);
                }
            }
            c.defaultProps = { withGutter: !1 };
            const s = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = c;
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                l = o(890601),
                n = o(783427),
                a = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => l, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (o, r, l) => {
                        const n = t ? t(r, l, e) : !!r;
                        return n && o[0].push(r), !n && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.2b78259a.js.map
