"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ShowMoreHandler"],
    {
        882623: (e, t, o) => {
            o.r(t), o.d(t, { default: () => M });
            var n = o(459643),
                r = o(351322),
                s = o(202784),
                l = o(242454),
                i = o(111677),
                a = o.n(i),
                c = o(668214);
            const u = (e, t) => t.entry.content,
                d = (e, t) => u(0, t).timelineModule,
                m = (e, t) => u(0, t).showMore,
                p = (0, c.Z)()
                    .propsFromState(() => ({ showMoreModule: m, timelineModule: d }))
                    .propsFromActions(({ module: e }) => ({ updateEntry: e.updateEntry }))
                    .withAnalytics({ element: "footer" }),
                h = a().d228a9a0,
                b = ({ analytics: e, showMoreModule: t, timelineModule: o, updateEntry: n }) => {
                    s.useEffect(() => {
                        t.shouldScribeImpression && e.scribeAction("impression");
                    }, [e, t.shouldScribeImpression]);
                    const r = s.useCallback(() => {
                        const {
                                content: { items: r, numItemsShown: s },
                                entryId: l,
                            } = o,
                            { initialItemsCount: i, showMoreItemsCount: a } = t,
                            c = s || i;
                        n(l, { ...o.content, numItemsShown: Math.min(c + a, r.length), showMore: { ...t, entryToFocus: `verticalGridItem-${c}-${l}`, shouldScribeImpression: !1 } }), e.scribeAction("click");
                    }, [e, t, o, n]);
                    return s.createElement(l.Z, { color: "primary", label: h, onPress: r });
                },
                w = p(s.memo(b)),
                y = (0, n.Z)(!1),
                g = (0, n.Z)(!0),
                f = { element: "footer" },
                M = ({ isInSidebar: e }) => r.iH({ shouldDisplayBorder: e ? y : void 0, component: w, defaultScribeNamespace: f, isFocusable: g }).getHandler();
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                r = o(202784),
                s = o(325686),
                l = o(731708),
                i = o(58881),
                a = o(530732),
                c = o(392237);
            const u = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: o, ...d }) => {
                    const m = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(s.Z, { style: u.container }, r.createElement(a.Z, (0, n.Z)({}, d, { interactiveStyles: m, style: u.root }), r.createElement(l.ZP, { align: e, color: t }, o)));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ShowMoreHandler.c9588c2a.js.map
