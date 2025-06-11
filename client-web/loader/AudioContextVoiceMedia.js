"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextVoiceMedia"],
    {
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                l = r(325686),
                s = r(235902),
                n = r(885015),
                a = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = s.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return r ? o.createElement(n.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, u] })), o.createElement(l.Z, { style: i.gapText }, r), o.createElement(l.Z, { style: i.gapColumn }, o.createElement(l.Z, { style: [i.gap, u] }))) : o.createElement(l.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, u] });
            }
            const i = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                l = r(202784),
                s = r(325686),
                n = r(392237);
            class a extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        a = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return l.createElement(s.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, n), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const c = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = a;
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
                        const s = t ? t(o, l, e) : !!o;
                        return s && r[0].push(o), !s && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextVoiceMedia.9df333ea.js.map
