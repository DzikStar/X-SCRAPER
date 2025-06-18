"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                l = r(325686),
                n = r(235902),
                a = r(885015),
                s = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? o.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(l.Z, { style: c.gapColumn }, o.createElement(l.Z, { style: [c.gap, d] })), o.createElement(l.Z, { style: c.gapText }, r), o.createElement(l.Z, { style: c.gapColumn }, o.createElement(l.Z, { style: [c.gap, d] }))) : o.createElement(l.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                l = r(202784),
                n = r(325686),
                a = r(392237);
            class s extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        s = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return l.createElement(n.Z, (0, o.Z)({ style: [t, i.root, r && i.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                l = r(890601),
                n = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(716406);
            function l(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(l) : (0, o.Z)(e, (e) => l(e));
            }
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioDock.d20a5dca.js.map
