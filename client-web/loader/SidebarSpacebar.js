"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.SidebarSpacebar"],
    {
        755418: (e, t, r) => {
            r.r(t), r.d(t, { SidebarSpacebar: () => g });
            var a = r(202784),
                n = r(844685),
                i = r(30183),
                o = r(111677),
                s = r.n(o),
                c = r(399398),
                d = r(771099),
                l = r(530568),
                u = r(109808);
            const h = s().d961a4a0,
                m = s().d228a9a0;
            function g({ maxThreads: e = 5 }) {
                const [t, r] = a.useState(!1),
                    o = d.eY(),
                    s = (0, u.e)(),
                    g = s?.threads ?? [];
                if (!g.length) return null;
                const w = g.length > e,
                    p = w && !t ? g.slice(0, e) : g;
                return a.createElement(
                    c.g,
                    null,
                    a.createElement(n.Z, { text: h }),
                    p.map((e, t) => a.createElement(l.B, { key: t, thread: e })),
                    w &&
                        !t &&
                        a.createElement(i.Z, {
                            onPress: function () {
                                r(!0);
                            },
                            text: m,
                            withBottomRadius: !0,
                            withDarkerInteractiveBackground: o,
                        }),
                );
            }
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(731708),
                i = r(952428);
            const o = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: r, text: s, weight: c, withBottomRadius: d, withDarkerInteractiveBackground: l }) {
                    return a.createElement(i.Z, { link: t, onPress: r, style: [o.root, d && o.withBottomRadius], withDarkerInteractiveBackground: l }, a.createElement(n.ZP, { align: e, color: "primary", weight: c }, s));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SidebarSpacebar.64b2775a.js.map
