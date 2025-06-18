"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.JetfuelFrame"],
    {
        654907: (e, t, a) => {
            a.r(t), a.d(t, { JetfuelFrame: () => c, default: () => i });
            var r = a(202784),
                l = a(163889),
                n = a(313129),
                o = a(738124);
            const c = (e) => {
                    const { payload: t } = e;
                    let a;
                    try {
                        a = (0, n.$P)(t);
                    } catch {
                        return (0, l.ZP)("Failed to parse Jetfuel payload"), null;
                    }
                    return a && a.jfResponse ? r.createElement(o.Z, { payload: a.jfResponse.root.value }) : null;
                },
                i = c;
        },
        487606: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.JetfuelFrame.275da3fa.js.map
