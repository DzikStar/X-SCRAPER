"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.IconLabelHandler"],
    {
        406722: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var c = n(459643),
                a = n(351322),
                s = n(202784),
                r = n(593866),
                o = n(392237),
                l = n(70882),
                i = n(97043),
                u = n(161335),
                m = n(665468),
                d = n(406727),
                p = n(576513),
                E = n(686689);
            const f = (e) => {
                switch (e) {
                    case p.Z.BALLOON_STROKE:
                        return s.createElement(l.default, { style: b.icon });
                    case p.Z.CALENDAR:
                        return s.createElement(i.default, { style: b.icon });
                    case p.Z.EYE_OFF:
                        return s.createElement(u.default, { style: b.icon });
                    case p.Z.LOCATION_STROKE:
                        return s.createElement(m.default, { style: b.icon });
                    case p.Z.SAFETY:
                        return s.createElement(d.default, { style: b.icon });
                }
            };
            function _(e) {
                const {
                        content: { icon: t, iconLabelText: n },
                    } = e.entry,
                    c = s.useMemo(() => [{ label: s.createElement(E.Z, { entities: n.entities, style: b.textItem, text: n.text }), decoration: f(t) }], [t, n]);
                return s.createElement(r.Z, { containerStyle: b.container, items: c });
            }
            const b = o.default.create((e) => ({ icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.text }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, textItem: { textAlign: "start" } })),
                w = s.memo(_),
                y = a.iH({ component: w, isFocusable: (0, c.Z)(!0) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.IconLabelHandler.9948b61a.js.map
