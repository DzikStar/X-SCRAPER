"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ThreadHeaderHandler"],
    {
        79056: (e, r, t) => {
            t.r(r), t.d(r, { default: () => u });
            var s = t(459643),
                i = t(351322),
                a = t(202784),
                n = t(673510),
                d = t(668214),
                o = t(919022);
            const l = (e, r) => {
                    const t = r.entry.content?.userThreadHeader?.userScreenName || "";
                    return o.ZP.selectByScreenName(e, t);
                },
                c = (0, d.Z)().propsFromState(() => ({ user: l }))(({ user: e }) => (e ? a.createElement(n.ZP, { avatarUri: e.profile_image_url_https, displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, userId: e.id_str, withLink: !0 }) : null)),
                u = i.iH({ component: c, shouldDisplayBorder: (0, s.Z)(!1), divider: { top: !1, bottom: !1 } }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ThreadHeaderHandler.961a6a8a.js.map
