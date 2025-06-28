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
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                l = o(890601),
                n = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.5623f78a.js.map
