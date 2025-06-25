"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler"],
    {
        151889: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var r = n(351322),
                s = n(202784),
                a = n(244448),
                i = (n(631673), n(634125)),
                l = n(725405);
            const c = (e) => {
                    const t = (0, l.Z)(),
                        n = (0, a.bk)(),
                        { payload: r } = e.entry.content;
                    return (
                        s.useEffect(() => {
                            t.scribeAction("impression");
                        }, [t]),
                        s.createElement(i.Z, null, s.createElement(a.kb, { payload: r, runtime: n }))
                    );
                },
                o = r.iH({ component: c }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.2067ee1a.js.map
