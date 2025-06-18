"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceReport", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                n = r(202784),
                l = r(325686),
                a = r(731708),
                s = r(58881),
                c = r(530732),
                i = r(392237);
            const d = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = s.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(l.Z, { style: d.container }, n.createElement(c.Z, (0, o.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(a.ZP, { align: e, color: t }, r)));
                };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                n = r(325686),
                l = r(235902),
                a = r(885015),
                s = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? o.createElement(a.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(n.Z, { style: i.gapColumn }, o.createElement(n.Z, { style: [i.gap, d] })), o.createElement(n.Z, { style: i.gapText }, r), o.createElement(n.Z, { style: i.gapColumn }, o.createElement(n.Z, { style: [i.gap, d] }))) : o.createElement(n.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, d] });
            }
            const i = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                n = r(202784),
                l = r(325686),
                a = r(392237);
            class s extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        s = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return n.createElement(l.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                n = r(890601),
                l = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, o.Z)(e, (e) => n(e));
            }
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => n, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (r, o, n) => {
                        const l = t ? t(o, n, e) : !!o;
                        return l && r[0].push(o), !l && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.745ab23a.js.map
