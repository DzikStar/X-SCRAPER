"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TransparentLabelHandler"],
    {
        133257: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(351322),
                n = a(202784),
                i = a(593866),
                s = a(392237);
            const d = [{ label: "Other replies", description: "These may include replies that are potentially spammy, harmful, or offensive." }];
            function o(e) {
                return n.createElement(i.Z, { containerStyle: p.header, items: d });
            }
            const p = s.default.create((e) => ({ header: { paddingTop: 26, paddingEnd: 26, paddingBottom: 25, paddingStart: e.spaces.space24 } })),
                l = n.memo(o),
                c = r.iH({ divider: { top: !0, bottom: !1 }, component: l }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TransparentLabelHandler.5a2c000a.js.map
