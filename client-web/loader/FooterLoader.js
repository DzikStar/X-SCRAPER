"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.FooterLoader"],
    {
        854906: (e, t, r) => {
            r.r(t), r.d(t, { default: () => B });
            var i = r(459643),
                a = r(351322),
                n = r(202784),
                o = r(154003),
                s = r(30183),
                l = r(392237),
                c = r(946409);
            Object.freeze({ Classic: "Classic", ClassicNoDivider: "ClassicNoDivider", ContextEmphasis: "ContextEmphasis" });
            const d = Object.freeze({ Classic: "Classic", Footnote: "Footnote", Button: "Button" });
            var u = r(147735),
                m = r(725516);
            const p = ({ displayType: e, isInSidebar: t, landingUrl: r, text: i, url: a }) => {
                    const l = (0, m.z)();
                    n.useEffect(() => {
                        l.scribe({ element: "footer", action: "impression" });
                    }, [l]);
                    const p = n.useCallback(() => l.scribe({ element: "footer", action: "click" }), [l]),
                        g = r || (a && { urlType: u.Z.DeepLink, url: a }),
                        k = g && (0, c.s9)(g);
                    switch (e) {
                        case d.Button:
                            return n.createElement(o.ZP, { children: i, link: k, onPress: p, style: b.containerStyle, type: "brandOutlined" });
                        case d.Classic:
                            return n.createElement(s.Z, { link: k, onPress: p, text: i, withDarkerInteractiveBackground: t });
                        default:
                            return null;
                    }
                },
                b = l.default.create((e) => ({ containerStyle: { width: "90%", marginVertical: e.spaces.space12, marginHorizontal: "auto" } })),
                g = n.memo(p),
                k = ({ entry: e, feedbackItems: t, isInSidebar: r, module: i }) => {
                    const { displayType: a, landingUrl: o, text: s, url: l } = e.content;
                    return n.createElement(g, { displayType: a, isInSidebar: r, landingUrl: o, text: s, url: l });
                },
                h = n.memo(k),
                f = (0, i.Z)(!0),
                w = (0, i.Z)(!1),
                y = { element: "footer" },
                B = (e) => a.iH({ shouldDisplayBorder: e.isInSidebar ? w : void 0, component: h, defaultScribeNamespace: y, isFocusable: f }).getHandler(() => ({ ...e }));
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => s });
            var i = r(202784),
                a = r(731708),
                n = r(952428);
            const o = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: r, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return i.createElement(n.Z, { link: t, onPress: r, style: [o.root, c && o.withBottomRadius], withDarkerInteractiveBackground: d }, i.createElement(a.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.FooterLoader.d37fc65a.js.map
