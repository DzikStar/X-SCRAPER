"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceReport", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconFeedback-js"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                l = r(202784),
                n = r(325686),
                a = r(731708),
                s = r(58881),
                c = r(530732),
                i = r(392237);
            const d = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const m = s.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(n.Z, { style: d.container }, l.createElement(c.Z, (0, o.Z)({}, u, { interactiveStyles: m, style: d.root }), l.createElement(a.ZP, { align: e, color: t }, r)));
                };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                l = r(325686),
                n = r(235902),
                a = r(885015),
                s = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? o.createElement(a.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, d] })), o.createElement(l.Z, { style: i.gapText }, r), o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, d] }))) : o.createElement(l.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, d] });
            }
            const i = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                l = r(202784),
                n = r(325686),
                a = r(392237);
            class s extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        s = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return l.createElement(n.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = s;
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                n = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                n = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.4199661a.js.map
