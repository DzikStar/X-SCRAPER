"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.collectionHeaderHandler"],
    {
        283172: (e, t, a) => {
            a.r(t), a.d(t, { default: () => b });
            var n = a(351322),
                r = a(202784),
                s = a(325686),
                c = a(731708),
                o = a(392237),
                p = a(111677),
                l = a.n(p),
                i = a(668214),
                d = a(919022);
            const m = (0, i.Z)().propsFromState(() => ({ author: (e, { entry: t }) => d.ZP.select(e, t.content.authorId) })),
                u = l().jb0429b1,
                h = (e) => {
                    const { author: t, entry: a } = e,
                        { description: n, name: o } = a.content,
                        p = r.useMemo(() => t && r.createElement(c.ZP, { color: "gray700" }, u({ name: t.name, screenName: t.screen_name })), [t]);
                    return r.createElement(s.Z, { style: g.header }, r.createElement(c.ZP, { role: "heading", size: "title4" }, o), p, n ? r.createElement(c.ZP, { style: g.description }, n) : null);
                },
                g = o.default.create((e) => ({ header: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space12, paddingBottom: e.spaces.space20 }, description: { marginTop: e.spaces.space12 } })),
                _ = m(r.memo(h)),
                b = n.iH({ component: _ }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.collectionHeaderHandler.4e7e7e7a.js.map
