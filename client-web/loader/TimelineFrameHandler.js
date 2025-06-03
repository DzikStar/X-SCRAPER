"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler"],
    {
        151889: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var l = r(351322),
                i = r(202784),
                n = r(420740),
                a = r(313129),
                o = r(738124),
                c = r(725405),
                s = r(56851);
            const d = (e) => {
                    const t = (0, c.Z)(),
                        { payload: r } = e.entry.content;
                    i.useEffect(() => {
                        t.scribeAction("impression");
                    }, [t]);
                    const l = (0, a.$P)(r);
                    return l ? (l.jfResponse ? i.createElement(o.Z, { payload: l.jfResponse.root.value }) : i.createElement(n.Z, { onRetry: null, title: l.error })) : i.createElement(s.Z, null);
                },
                u = l.iH({ component: d }).getHandler();
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => a });
            var l = r(202784),
                i = r(325686),
                n = r(392237);
            function a({ spacing: e, style: t }) {
                return l.createElement(i.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var l = r(202784),
                i = r(890601),
                n = r(783427),
                a = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var l = r(202784),
                i = r(890601),
                n = r(783427),
                a = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        730895: (e, t, r) => {
            var l = r(821176);
            e.exports = function () {
                var e = l(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.2ded4d1a.js.map
