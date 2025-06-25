"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceReport", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(807896),
                n = o(202784),
                l = o(325686),
                a = o(731708),
                s = o(58881),
                c = o(530732),
                i = o(392237);
            const u = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: o, ...d }) => {
                    const p = s.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(l.Z, { style: u.container }, n.createElement(c.Z, (0, r.Z)({}, d, { interactiveStyles: p, style: u.root }), n.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(325686),
                l = o(235902),
                a = o(885015),
                s = o(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: c } = l.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? r.createElement(a.Z, { style: !t && i.root, withGutter: !0 }, r.createElement(n.Z, { style: i.gapColumn }, r.createElement(n.Z, { style: [i.gap, u] })), r.createElement(n.Z, { style: i.gapText }, o), r.createElement(n.Z, { style: i.gapColumn }, r.createElement(n.Z, { style: [i.gap, u] }))) : r.createElement(n.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, u] });
            }
            const i = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                n = o(202784),
                l = o(325686),
                a = o(392237);
            class s extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        s = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, c.column, o && c.withGutterColumn] }));
                    return n.createElement(l.Z, (0, r.Z)({ style: [t, c.root, o && c.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = s;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => n, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (o, r, n) => {
                        const l = t ? t(r, n, e) : !!r;
                        return l && o[0].push(r), !l && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceReport.fb1f529a.js.map
