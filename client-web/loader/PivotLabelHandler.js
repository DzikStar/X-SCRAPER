"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PivotLabelHandler"],
    {
        901547: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var n = r(351322),
                l = r(202784),
                s = r(731708),
                a = r(779610),
                c = r(946409),
                o = r(725516);
            const i = ({ entry: e }) => {
                    const t = (0, o.z)(),
                        {
                            content: { subtext: r, text: n, url: i },
                        } = e,
                        b = i && (0, c.s9)(i),
                        u = l.useCallback(() => {
                            t.scribe({ action: "click_label" });
                        }, [t]),
                        p = l.useMemo(() => l.createElement(s.ZP, { color: b ? "primary" : "text" }, n), [b, n]);
                    return l.createElement(a.Z, { description: r, label: p, link: b, onPress: u });
                },
                b = l.memo(i),
                u = n.iH({ component: b }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PivotLabelHandler.4326c0aa.js.map
