"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.tweetUnavailableTombstoneHandler"],
    {
        603269: (e, t, n) => {
            n.r(t), n.d(t, { default: () => v });
            var o = n(351322),
                a = n(202784),
                r = n(674132),
                s = n.n(r),
                i = n(177371);
            const c = s().b52a940c,
                l = ({
                    entry: {
                        content: { tombstoneInfo: e },
                        conversationPosition: t,
                        conversationTreeMetadata: n,
                    },
                }) => a.createElement(i.Z, { children: e?.text || c, conversationPosition: t, conversationTreeMetadata: n }),
                d = a.memo(l),
                v = o.iH({ component: d, shouldDisplayBorder: (e) => !e.conversationTreeMetadata }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.tweetUnavailableTombstoneHandler.795a17aa.js.map
