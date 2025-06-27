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
                s = o(58881),
                c = o(530732),
                i = o(392237);
            const d = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const p = s.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(n.Z, { style: d.container }, l.createElement(c.Z, (0, r.Z)({}, u, { interactiveStyles: p, style: d.root }), l.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                l = o(325686),
                n = o(235902),
                a = o(885015),
                s = o(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: c } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? r.createElement(a.Z, { style: !t && i.root, withGutter: !0 }, r.createElement(l.Z, { style: i.gapColumn }, r.createElement(l.Z, { style: [i.gap, d] })), r.createElement(l.Z, { style: i.gapText }, o), r.createElement(l.Z, { style: i.gapColumn }, r.createElement(l.Z, { style: [i.gap, d] }))) : r.createElement(l.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, d] });
            }
            const i = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                l = o(202784),
                n = o(325686),
                a = o(392237);
            class s extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        s = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, o && c.withGutterColumn] }));
                    return l.createElement(n.Z, (0, r.Z)({ style: [t, c.root, o && c.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = s;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                l = o(890601),
                n = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.7524dc2a.js.map
