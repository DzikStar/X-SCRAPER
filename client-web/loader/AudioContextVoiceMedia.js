"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextVoiceMedia", "loader.AudioDock"],
    {
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                l = r(325686),
                n = r(235902),
                s = r(885015),
                a = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return r ? o.createElement(s.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, d] })), o.createElement(l.Z, { style: i.gapText }, r), o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, d] }))) : o.createElement(l.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, d] });
            }
            const i = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                l = r(202784),
                n = r(325686),
                s = r(392237);
            class a extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        a = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return l.createElement(n.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, s), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const c = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = a;
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                n = r(783427),
                s = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => l, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (r, o, l) => {
                        const n = t ? t(o, l, e) : !!o;
                        return n && r[0].push(o), !n && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextVoiceMedia.e67ee8ea.js.map
