"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridRowHandler"],
    {
        377548: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var o = r(459643),
                s = r(351322),
                a = r(202784),
                i = r(928316),
                n = r(325686),
                c = r(392237),
                l = r(703738);
            const d = (e) => {
                    const t = a.useRef(null),
                        {
                            content: { entryToFocus: r, isLegacy: o, items: s, moduleEntryId: d, numColumns: m = 2, rowIndex: u },
                        } = e.entry,
                        { renderEntry: w } = e;
                    a.useEffect(() => {
                        const e = i.findDOMNode(t.current),
                            r = (e && e instanceof window.HTMLElement && e.querySelector("a, [tabindex='0']")) || void 0;
                        r && r.focus();
                    }, [r, t]);
                    const f = a.useMemo(() => s.map((e, t) => ({ item: w ? w(e) : null, key: e.entryId, id: `verticalGridItem-${u * m + t}-${d}` })), [s, d, m, w, u]),
                        y = a.useMemo(() => (o ? { width: `calc(100% / ${m})` } : { width: `calc((100% - ${2 * c.default.theme.spacesPx.space4}px) / ${m})` }), [o, m]),
                        g = (0, l.z)();
                    return a.createElement(
                        n.Z,
                        { style: [p.root, o ? p.withMarginHorizontal : p.withGaps, g && p.rootRedesign] },
                        f.map((e) => a.createElement(n.Z, { id: e.id, key: e.key, ref: r === e.id ? t : void 0, role: "listitem", style: y }, e.item)),
                    );
                },
                p = c.default.create((e) => ({ root: { flexDirection: "row" }, rootRedesign: { marginHorizontal: e.spaces.space16 }, withGaps: { gap: e.spaces.space4, marginTop: e.spaces.space4, marginHorizontal: e.spaces.space4 }, withMarginHorizontal: { marginHorizontal: e.spaces.space8 } })),
                m = a.memo(d),
                u = s.iH({ component: m, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, o.Z)(!1) }).getHandler();
        },
        703738: (e, t, r) => {
            r.d(t, { z: () => i });
            var o = r(323265),
                s = r(655352),
                a = r(952793);
            const i = () => (0, a.hC)("rweb_sourcemap_migration") && (0, s.ZP)() && !o.ZP.isMobileOS();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridRowHandler.64aa322a.js.map
