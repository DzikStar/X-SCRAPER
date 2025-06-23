"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.IconLabelHandler"],
    {
        406722: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var a = n(459643),
                c = n(351322),
                r = n(202784),
                i = n(593866),
                l = n(392237),
                s = n(70882),
                o = n(97043),
                d = n(161335),
                u = n(665468),
                m = n(406727),
                E = n(576513),
                p = n(686689);
            const h = (e) => {
                switch (e) {
                    case E.Z.BALLOON_STROKE:
                        return r.createElement(s.default, { style: g.icon });
                    case E.Z.CALENDAR:
                        return r.createElement(o.default, { style: g.icon });
                    case E.Z.EYE_OFF:
                        return r.createElement(d.default, { style: g.icon });
                    case E.Z.LOCATION_STROKE:
                        return r.createElement(u.default, { style: g.icon });
                    case E.Z.SAFETY:
                        return r.createElement(m.default, { style: g.icon });
                }
            };
            function f(e) {
                const {
                        content: { icon: t, iconLabelText: n },
                    } = e.entry,
                    a = r.useMemo(() => [{ label: r.createElement(p.Z, { entities: n.entities, style: g.textItem, text: n.text }), decoration: h(t) }], [t, n]);
                return r.createElement(i.Z, { containerStyle: g.container, items: a });
            }
            const g = l.default.create((e) => ({ icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.text }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, textItem: { textAlign: "start" } })),
                w = r.memo(f),
                Z = c.iH({ component: w, isFocusable: (0, a.Z)(!0) }).getHandler();
        },
        70882: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                c = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, c.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.IconLabelHandler.799e6c7a.js.map
