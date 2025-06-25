"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DividerHandler"],
    {
        990044: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                l = r(420412),
                s = r(459643);
            const a = r(351322).lC({ shouldDisplayBorder: (0, s.Z)(!1), render: (0, s.Z)(o.createElement(l.Z, { withTopBorder: !1 })) });
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                l = r(325686),
                s = r(235902),
                a = r(885015),
                n = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = s.ZP.useProps(),
                    i = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return r ? o.createElement(a.Z, { style: !t && d.root, withGutter: !0 }, o.createElement(l.Z, { style: d.gapColumn }, o.createElement(l.Z, { style: [d.gap, i] })), o.createElement(l.Z, { style: d.gapText }, r), o.createElement(l.Z, { style: d.gapColumn }, o.createElement(l.Z, { style: [d.gap, i] }))) : o.createElement(l.Z, { style: [!t && d.root, c() && d.rootRedesign, d.gap, i] });
            }
            const d = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(807896),
                l = r(202784),
                s = r(325686),
                a = r(392237);
            class n extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        n = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return l.createElement(s.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, a), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DividerHandler.226d8e1a.js.map
