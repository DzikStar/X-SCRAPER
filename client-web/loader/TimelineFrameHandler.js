"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler"],
    {
        151889: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var n = r(351322),
                o = r(202784),
                l = r(420740),
                s = r(313129),
                a = r(738124),
                i = r(725405),
                c = r(56851);
            const d = (e) => {
                    const t = (0, i.Z)(),
                        { payload: r } = e.entry.content;
                    o.useEffect(() => {
                        t.scribeAction("impression");
                    }, [t]);
                    const n = (0, s.$P)(r);
                    return n ? (n.jfResponse ? o.createElement(a.Z, { payload: n.jfResponse.root.value }) : o.createElement(l.Z, { onRetry: null, title: n.error })) : o.createElement(c.Z, null);
                },
                u = n.iH({ component: d }).getHandler();
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                o = r(325686),
                l = r(392237);
            function s({ spacing: e, style: t }) {
                return n.createElement(o.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        730895: (e, t, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.c3281e2a.js.map
