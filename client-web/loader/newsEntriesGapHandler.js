"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.newsEntriesGapHandler"],
    {
        178372: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                s = n(325686),
                r = n(952428),
                c = n(167630),
                o = n(593866),
                i = n(731708),
                l = n(392237),
                u = n(111677),
                p = n.n(u);
            const m = p().fe76cacc,
                d = p().aebb6546;
            function f(e) {
                const { children: t = m, isLoading: n, link: l, onClick: u, isTransparentCursor: p } = e;
                return a.createElement(r.Z, { link: l, onClick: u, style: h.root }, a.createElement(s.Z, { style: h.inner }, n ? a.createElement(c.Z, { "aria-label": d }) : p ? a.createElement(a.Fragment, null, a.createElement(o.Z, { containerStyle: h.cursor, items: [{ description: "These may include replies that are potentially spammy, harmful, or offensive.", label: "Other replies" }] }), a.createElement(i.ZP, { children: "View Replies", color: "link", style: h.link })) : a.createElement(i.ZP, { align: "center", children: t, color: "link" })));
            }
            const h = l.default.create((e) => ({ root: { justifyContent: "center", minHeight: e.spaces.space48, width: "100%" }, inner: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, cursor: { paddingTop: e.spaces.space20, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, link: { paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space16 } }));
        },
        745638: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var a = n(459643),
                s = n(351322),
                r = n(202784),
                c = n(891198),
                o = n(111677),
                i = n.n(o),
                l = n(187669),
                u = n(178372),
                p = n(87063),
                m = n(38293),
                d = n(668214);
            const f = { component: "new_tweets_bar" },
                h = (e, t) => t.module.selectTopFetchStatus(e),
                w = (0, d.Z)()
                    .propsFromState(() => ({ fetchStatus: h }))
                    .propsFromActions(({ module: e }) => ({ applyInstructions: e.applyNewTweetsBarInstructions }))
                    .withAnalytics(f),
                k = i().i73fff1b;
            function y(e) {
                const { analytics: t, applyInstructions: n, entry: a, fetchStatus: s } = e,
                    { count: o, lastRevealedTimestamp: i } = a.content,
                    [d, f] = r.useState(!1),
                    h = r.useRef(!1);
                (0, l.q)(() => {
                    t.scribe({ action: "impression", data: { event_value: o } });
                });
                const w = r.useCallback(() => {
                        t.scribe({ action: "click", data: { event_value: o } }), n();
                    }, [t, n, o]),
                    y = r.useMemo(() => k({ count: c.ZP.getFormattedCount(o) }), [o]);
                return (
                    r.useEffect(() => {
                        let e = null;
                        return (
                            (function t() {
                                const n = Date.now();
                                if (i && n - i < 2e4) {
                                    f(!1);
                                    e = setTimeout(t, 2e4 + i - n);
                                } else s !== p.Z.LOADING || d || h.current ? (clearTimeout(e), f(!0)) : ((e = setTimeout(t, 5e3)), (h.current = !0));
                            })(),
                            function () {
                                clearTimeout(e);
                            }
                        );
                    }, [s, i, d]),
                    d ? r.createElement(r.Fragment, null, r.createElement(m.Z.Configure, { timelineNewCount: o }), r.createElement(u.Z, { children: y, onClick: w })) : null
                );
            }
            const b = w(r.memo(y)),
                Z = s.iH({ component: b, divider: { top: !0, bottom: !0 }, isFocusable: (0, a.Z)(!0), shouldDisplayBorder: (0, a.Z)(!0) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.newsEntriesGapHandler.8458be5a.js.map
