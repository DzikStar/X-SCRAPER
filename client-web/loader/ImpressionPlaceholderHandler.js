"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ImpressionPlaceholderHandler"],
    {
        591548: (e, s, t) => {
            t.r(s), t.d(s, { default: () => c });
            var o = t(459643),
                n = t(351322),
                i = t(202784),
                r = t(725516);
            const a = ({ entry: e }) => {
                    const s = (0, r.z)();
                    return (
                        i.useEffect(() => {
                            s.scribe({ action: "impression", data: { position: e.position } });
                        }, [s, e.position]),
                        null
                    );
                },
                p = i.memo(a),
                l = (0, o.Z)(!1),
                c = n.iH({ component: p, shouldDisplayBorder: l, defaultScribeNamespace: { component: "module" }, isEmpty: !0 }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ImpressionPlaceholderHandler.3da08eca.js.map
