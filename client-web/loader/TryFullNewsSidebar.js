"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryFullNewsSidebar"],
    {
        426873: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var l = n(202784),
                a = n(325686),
                i = n(731708),
                s = n(154003),
                r = n(392237),
                c = n(674132),
                o = n.n(c),
                d = n(725405),
                p = n(399398);
            const u = o().da00e00a,
                w = "A fresh news experience, powered by Grok. Now in early beta.",
                f = o().c40666d8;
            function m() {
                const e = (0, d.Z)();
                return l.createElement(
                    p.g,
                    null,
                    l.createElement(
                        a.Z,
                        { style: b.container },
                        l.createElement(i.ZP, { style: b.title, weight: "medium" }, u),
                        l.createElement(i.ZP, null, w),
                        l.createElement(
                            s.ZP,
                            {
                                link: "/i/news",
                                onClick: () => {
                                    e.scribe({ element: "try_full_news_sidebar_cta", action: "click" });
                                },
                                size: "small",
                                style: b.button,
                                type: "primaryFilled",
                            },
                            f,
                        ),
                    ),
                );
            }
            const b = r.default.create((e) => ({ container: { flex: 1, padding: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, button: { width: "max-content" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryFullNewsSidebar.7e8adf7a.js.map
