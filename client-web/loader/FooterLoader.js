"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.FooterLoader"],
    {
        854906: (e, t, r) => {
            r.r(t), r.d(t, { default: () => B });
            var a = r(459643),
                i = r(351322),
                n = r(202784),
                o = r(154003),
                s = r(30183),
                l = r(392237),
                c = r(946409);
            Object.freeze({ Classic: "Classic", ClassicNoDivider: "ClassicNoDivider", ContextEmphasis: "ContextEmphasis", Feedback: "Feedback" });
            const d = Object.freeze({ Classic: "Classic", Footnote: "Footnote", Button: "Button" });
            var u = r(147735),
                m = r(725516);
            const p = ({ displayType: e, isInSidebar: t, landingUrl: r, text: a, url: i }) => {
                    const l = (0, m.z)();
                    n.useEffect(() => {
                        l.scribe({ element: "footer", action: "impression" });
                    }, [l]);
                    const p = n.useCallback(() => l.scribe({ element: "footer", action: "click" }), [l]),
                        k = r || (i && { urlType: u.Z.DeepLink, url: i }),
                        g = k && (0, c.s9)(k);
                    switch (e) {
                        case d.Button:
                            return n.createElement(o.ZP, { children: a, link: g, onPress: p, style: b.containerStyle, type: "brandOutlined" });
                        case d.Classic:
                            return n.createElement(s.Z, { link: g, onPress: p, text: a, withDarkerInteractiveBackground: t });
                        default:
                            return null;
                    }
                },
                b = l.default.create((e) => ({ containerStyle: { width: "90%", marginVertical: e.spaces.space12, marginHorizontal: "auto" } })),
                k = n.memo(p),
                g = ({ entry: e, feedbackItems: t, isInSidebar: r, module: a }) => {
                    const { displayType: i, landingUrl: o, text: s, url: l } = e.content;
                    return n.createElement(k, { displayType: i, isInSidebar: r, landingUrl: o, text: s, url: l });
                },
                h = n.memo(g),
                f = (0, a.Z)(!0),
                w = (0, a.Z)(!1),
                y = { element: "footer" },
                B = (e) => i.iH({ shouldDisplayBorder: e.isInSidebar ? w : void 0, component: h, defaultScribeNamespace: y, isFocusable: f }).getHandler(() => ({ ...e }));
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                i = r(731708),
                n = r(952428);
            const o = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: r, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(n.Z, { link: t, onPress: r, style: [o.root, c && o.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(i.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.FooterLoader.19ed865a.js.map
