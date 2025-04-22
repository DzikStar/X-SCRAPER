"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.RichTextCompose"],
    {
        728455: (e, t, n) => {
            n.r(t), n.d(t, { InlineComposeContainer: () => u, default: () => p });
            var o = n(807896),
                r = n(202784),
                l = n(325686),
                s = n(386802),
                c = n(537392),
                i = n(392237),
                a = n(472826);
            function u(e) {
                const { isModal: t } = r.useContext(s.Z);
                return r.createElement(c.ZP, null, ({ containerWidth: n }) => r.createElement(l.Z, { style: d.root }, r.createElement(a.Z, (0, o.Z)({}, e, { containerWidth: n, isInline: !0, isModal: t }))));
            }
            const d = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } })),
                p = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.RichTextCompose.d09a82da.js.map
