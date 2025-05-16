"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewsLiveTimelineSidebar"],
    {
        485513: (e, t, i) => {
            i.r(t), i.d(t, { default: () => _ });
            var n = i(202784),
                l = i(325686),
                s = i(392237),
                a = i(306677),
                r = i(725405),
                c = i(448301),
                d = i(274234),
                o = i(768431);
            function _({ articleId: e }) {
                const t = (0, r.Z)(),
                    i = (0, o.Z)({ trendId: e }),
                    s = n.useCallback(() => {
                        t.scribe({ element: "news_timeline_sidebar", action: "impression", data: { event_info: e } });
                    }, [t, e]);
                return i && (0, c.ZW)(i) ? n.createElement(n.Fragment, null, n.createElement(a.D, { id: "news_live_timeline_sidebar", onFullyVisible: s, position: "top", testID: "news_live_timeline_sidebar" }), n.createElement(l.Z, { style: u.container }, n.createElement(d.Z, { article: i, hideTitle: !0 }))) : null;
            }
            const u = s.default.create((e) => ({ container: { flex: 1, padding: e.spaces.space16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewsLiveTimelineSidebar.b79ddeaa.js.map
