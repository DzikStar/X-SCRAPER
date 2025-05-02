"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryFullNewsSidebar"],
    {
        426873: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var r = n(202784),
                l = n(325686),
                c = n(154003),
                i = n(392237),
                s = n(674132),
                a = n.n(s),
                o = n(725405),
                u = n(399398);
            const d = a().dc954b88;
            function p() {
                const e = (0, o.Z)();
                return r.createElement(
                    u.g,
                    null,
                    r.createElement(
                        l.Z,
                        { style: f.container },
                        r.createElement(
                            c.ZP,
                            {
                                link: "/i/news",
                                onClick: () => {
                                    e.scribe({ element: "try_full_news_sidebar_cta", action: "click" });
                                },
                                type: "primaryFilled",
                            },
                            d,
                        ),
                    ),
                );
            }
            const f = i.default.create((e) => ({ container: { flex: 1, padding: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryFullNewsSidebar.d9b4efea.js.map
