"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler"],
    {
        151889: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var n = r(351322),
                l = r(202784),
                o = r(420740),
                i = r(313129),
                a = r(738124),
                s = r(725405),
                c = r(56851);
            const d = (e) => {
                    const t = (0, s.Z)(),
                        { payload: r } = e.entry.content;
                    l.useEffect(() => {
                        t.scribeAction("impression");
                    }, [t]);
                    const n = (0, i.$P)(r);
                    return n ? (n.jfResponse ? l.createElement(a.Z, { payload: n.jfResponse.root.value }) : l.createElement(o.Z, { onRetry: null, title: n.error })) : l.createElement(c.Z, null);
                },
                u = n.iH({ component: d }).getHandler();
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                l = r(325686),
                o = r(392237);
            function i({ spacing: e, style: t }) {
                return n.createElement(l.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                i = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.0d36e03a.js.map
