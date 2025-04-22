"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler"],
    {
        151889: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var r = n(351322),
                s = n(202784),
                o = n(420740),
                l = n(313129),
                a = n(738124),
                c = n(725405),
                i = n(231035);
            const p = (e) => {
                    const t = (0, c.Z)(),
                        { payload: n } = e.entry.content;
                    s.useEffect(() => {
                        t.scribeAction("impression");
                    }, [t]);
                    const r = (0, l.$P)(n);
                    return r ? (r.jfResponse ? s.createElement(a.Z, { payload: r.jfResponse.root.value }) : s.createElement(o.Z, { onRetry: null, title: r.error })) : s.createElement(i.Z, null);
                },
                u = r.iH({ component: p }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.4ad0101a.js.map
