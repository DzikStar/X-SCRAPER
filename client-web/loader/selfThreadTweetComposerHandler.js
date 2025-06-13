"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.selfThreadTweetComposerHandler"],
    {
        285515: (e, t, r) => {
            r.r(t), r.d(t, { default: () => h });
            var n = r(459643),
                s = r(351322),
                o = r(202784),
                a = r(989631),
                i = r(946409),
                l = r(725516),
                c = r(668214),
                d = r(919022);
            const p = (e, t) => d.ZP.selectViewerUser(e),
                u = (e) => {
                    const { entry: t, viewerUser: r = {} } = e,
                        n = (0, l.z)(),
                        s = o.useCallback(() => {
                            n.scribe({ action: "click", element: "add_to_thread" });
                        }, [n]),
                        c = o.useCallback(() => {
                            n.scribe({ action: "impression", element: "add_to_thread" });
                        }, [n]),
                        d = o.useMemo(() => {
                            const e = (0, i.Mh)(t.content.url.url);
                            return e ? { ...e, pathname: e.pathname || "", state: { ...(e.state || {}), isSelfThreadReply: !0 } } : void 0;
                        }, [t.content.url.url]);
                    return o.createElement(a.Z, { avatarUrl: r.profile_image_url_https, onClick: s, onImpression: c, to: d, userName: r.screen_name, withButton: !0, withConversationLine: t.withConversationLine });
                },
                m = (0, c.Z)().propsFromState(() => ({ viewerUser: p }))(o.memo(u)),
                h = s.iH({ component: m, shouldDisplayBorder: (0, n.Z)(!1), divider: { top: !1, bottom: !0 } }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.selfThreadTweetComposerHandler.36f2e00a.js.map
