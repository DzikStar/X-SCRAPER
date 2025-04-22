"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.JetfuelFrame"],
    {
        654907: (e, t, a) => {
            a.r(t), a.d(t, { JetfuelFrame: () => o, default: () => u });
            var l = a(202784),
                r = a(163889),
                s = a(313129),
                n = a(738124);
            const o = (e) => {
                    const { payload: t } = e;
                    let a;
                    try {
                        a = (0, s.$P)(t);
                    } catch {
                        return (0, r.ZP)("Failed to parse Jetfuel payload"), null;
                    }
                    return a && a.jfResponse ? l.createElement(n.Z, { payload: a.jfResponse.root.value }) : null;
                },
                u = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.JetfuelFrame.736d8c6a.js.map
