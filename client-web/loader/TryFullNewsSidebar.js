"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryFullNewsSidebar"],
    {
        426873: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var l = n(202784),
                a = n(325686),
                i = n(731708),
                r = n(154003),
                s = n(392237),
                c = n(111677),
                o = n.n(c),
                d = n(725405);
            const p = o().da00e00a,
                u = "A fresh news experience, powered by Grok. Now in early beta.",
                w = o().c40666d8;
            function m() {
                const e = (0, d.Z)();
                return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                        a.Z,
                        { style: f.container },
                        l.createElement(i.ZP, { style: f.title, weight: "medium" }, p),
                        l.createElement(i.ZP, null, u),
                        l.createElement(
                            r.ZP,
                            {
                                link: "/i/news",
                                onClick: () => {
                                    e.scribe({ element: "try_full_news_sidebar_cta", action: "click" });
                                },
                                size: "small",
                                style: f.button,
                                type: "primaryFilled",
                            },
                            w,
                        ),
                    ),
                );
            }
            const f = s.default.create((e) => ({ container: { flex: 1, padding: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, button: { width: "max-content" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryFullNewsSidebar.f98f5e7a.js.map
