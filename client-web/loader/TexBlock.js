"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TexBlock"],
    {
        753440: (e, t, r) => {
            r.r(t), r.d(t, { TexBlock: () => u, default: () => i });
            var l = r(202784),
                n = r(366929),
                c = r(325686),
                o = r(731708),
                s = r(392237),
                a = r(156707);
            function u({ displayMode: e, onError: t, style: r, tex: s }) {
                const u = l.createRef(),
                    [i, d] = l.useState(!1);
                return (
                    l.useLayoutEffect(() => {
                        if (u.current)
                            try {
                                d(!1), n.Z.render(s, u.current, { ...a.W, displayMode: e, throwOnError: !0 });
                            } catch {
                                d(!0), t?.();
                            }
                    }, [s, u, e, t]),
                    l.createElement(l.Fragment, null, l.createElement(c.Z, { ref: u, style: [e ? f.block : null, r], testID: "tex-block" }), i ? l.createElement(o.ZP, { color: "red500" }, " ", s, " ") : null)
                );
            }
            const f = s.default.create((e) => ({ block: { fontSize: e.fontSizes.headline2 } })),
                i = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TexBlock.2890509a.js.map
