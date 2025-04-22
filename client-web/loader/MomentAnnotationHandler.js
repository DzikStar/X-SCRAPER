"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MomentAnnotationHandler"],
    {
        223912: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                l = n(325686),
                s = n(392237),
                a = n(686689);
            const c = ({ header: e = {}, body: t = {}, controls: n = null, focusable: o = !0 }) => r.createElement(l.Z, { focusable: o, style: d.root, tabIndex: 0 }, e.text ? r.createElement(l.Z, { style: d.textContainer }, r.createElement(a.Z, { entities: e.entities, forceAutoTextDirection: !0, size: "headline1", style: [d.text, t.text && d.headerWithBody], text: e.text, weight: "bold" }), n) : null, t.text ? r.createElement(l.Z, { style: d.textContainer }, r.createElement(a.Z, { entities: t.entities, forceAutoTextDirection: !0, style: d.text, text: t.text }), e.text ? null : n) : null),
                d = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, text: { overflow: "visible" }, headerWithBody: { marginBottom: e.componentDimensions.gutterVertical }, textContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" } })),
                m = r.memo(c);
            var u = n(725516);
            const x = (e) => {
                    const { header: t, text: n } = e.entry.content,
                        o = (0, u.z)();
                    return (
                        r.useEffect(() => {
                            o.scribeAction("impression");
                        }, []),
                        r.createElement(m, { body: n, header: t })
                    );
                },
                b = r.memo(x),
                p = i.iH({ component: b, divider: { bottom: !0, top: !0 }, isFocusable: (0, o.Z)(!0) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MomentAnnotationHandler.963056ca.js.map
