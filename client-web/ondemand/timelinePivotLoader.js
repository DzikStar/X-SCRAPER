"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.timelinePivotLoader"],
    {
        270216: (e, t, i) => {
            i.r(t), i.d(t, { default: () => m });
            var n = i(351322),
                a = i(202784),
                l = i(45843),
                r = i(325686),
                o = i(392237),
                s = i(530732),
                c = i(731708),
                d = i(154003),
                u = i(568320),
                p = i(725405);
            const h = o.default.create((e) => ({ container: { width: "100%", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, pivot: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.blue500, width: "100%", height: e.spaces.space64, padding: e.spaces.space16, display: "grid", alignItems: "center" }, inlineBlock: { display: "inline-block" }, buttonContainer: { position: "absolute", end: 0, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingEnd: e.spaces.space32 }, button: { opacity: 0.5 } })),
                g = (e) => {
                    const t = (0, p.Z)(),
                        { destinationUrl: i, detailText: n, detailTextImage: g, image: m, titleText: b } = e.entry.content,
                        w = a.useCallback(() => {
                            t.scribeAction("click");
                        }, [t]);
                    a.useEffect(() => {
                        t.scribeAction("impression");
                    }, [t]);
                    const k = a.useMemo(() => {
                            if (m?.url && m?.width && m?.height) {
                                const e = (m.height / m.width) * 450;
                                return { backgroundImage: `url('${m?.url}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: e };
                            }
                            return {};
                        }, [m?.height, m?.width, m?.url]),
                        y = a.useMemo(() => {
                            if (g?.height && g?.width) {
                                const e = 20 / g?.height,
                                    t = g.width * e;
                                return { marginStart: o.default.theme.spaces.space4, height: o.default.theme.spaces.space20, width: t, verticalAlign: "bottom", marginBottom: 2 };
                            }
                            return {};
                        }, [g?.height, g?.width]);
                    return a.createElement(s.Z, { accessibilityLabel: b, "aria-label": b, link: i, onPress: w, style: h.container }, a.createElement(r.Z, { style: [h.pivot, k] }, a.createElement(r.Z, null, a.createElement(c.ZP, { color: "whiteOnColor", size: "headline2", weight: "bold" }, b)), n && a.createElement(r.Z, { style: h.inlineBlock }, a.createElement(c.ZP, { color: "whiteOnColor", size: "body", style: h.inlineBlock }, n), g?.url ? a.createElement(l.Z, { source: g?.url, style: [h.inlineBlock, y] }) : null)), a.createElement(r.Z, { style: h.buttonContainer }, a.createElement(d.ZP, { icon: a.createElement(u.default, null), size: "small", style: h.button, type: "onMediaDominantColorFilled" })));
                },
                m = n.iH({ component: g }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.timelinePivotLoader.996a605a.js.map
