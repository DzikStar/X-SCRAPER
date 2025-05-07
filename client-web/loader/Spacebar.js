"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Spacebar"],
    {
        641520: (e, t, a) => {
            a.r(t), a.d(t, { Spacebar: () => u });
            a(136728);
            var n = a(202784),
                r = a(325686),
                i = a(184971),
                s = a(174326),
                l = a(392237),
                c = a(774654),
                o = a(952188),
                p = a(530568),
                d = a(109808);
            function u() {
                const e = c.ZM.useVisibilityPercent(),
                    t = c.ZM.useTopNavHeight(),
                    a = (0, d.e)(),
                    l = a?.threads ?? [];
                let u = 0,
                    b = 0;
                l.length && ((b = m()), (u = e)), c.ZM.useReportHeight("Spacebar", b);
                const f = [h.animatedSpacebar],
                    g = (function (e, t) {
                        const a = 1 - e / 100;
                        return -1 * a * t;
                    })(u, t);
                if (u > 0) {
                    const e = i.Z.transform.translateY(g).style;
                    f.push(e), f.push(h.animatedSpacebar_visible);
                } else f.push(h.animatedSpacebar_hidden);
                const _ = 1 === l.length ? h.carouselPillItem_single : h.carouselPillItem_overflow;
                return n.createElement(
                    o.W_,
                    { id: "Spacebar" },
                    n.createElement(
                        r.Z,
                        { style: h.container },
                        n.createElement(
                            r.Z,
                            { "aria-hidden": 0 === u, role: "grid", style: f },
                            n.createElement(
                                r.Z,
                                { style: h.carouselContainer },
                                n.createElement(
                                    s.Z,
                                    { childrenStyle: _, updateObserverWithChildren: !0, visibleItemIndex: 0 },
                                    l.map((e, t) => n.createElement(p.I, { isFirst: 0 === t, key: t, thread: e })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const h = l.default.create((e) => {
                const t = m(),
                    a = t,
                    n = e.componentDimensions.gutterHorizontal;
                return { container: { overflow: "hidden", height: t }, carouselContainer: { flexDirection: "column", justifyContent: "center" }, animatedSpacebar: { height: t + a, paddingTop: a, top: -1 * a, position: "absolute", width: "100%", ...i.Z.transition.spring("transform") }, animatedSpacebar_visible: { pointerEvents: "all" }, animatedSpacebar_hidden: { ...i.Z.transform.translateY(-1 * t).style }, carouselPillItem_single: { width: "100%", paddingEnd: n, paddingVertical: e.spaces.space8 }, carouselPillItem_overflow: { width: "85%", marginEnd: e.spaces.space4, paddingVertical: e.spaces.space8 } };
            });
            function m() {
                return l.default.theme.spacesPx.space56;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Spacebar.bc18b26a.js.map
