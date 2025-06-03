"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GoLive"],
    {
        857289: (e, t, a) => {
            a.r(t), a.d(t, { GoLiveSheet: () => g, default: () => g });
            var l = a(202784),
                s = a(325686),
                c = a(107267),
                r = a(786998),
                n = a(154003),
                o = a(731708),
                i = a(371344),
                p = a(138099),
                u = a(392237),
                d = a(111677),
                f = a.n(d),
                h = a(837020),
                m = a(839);
            const w = { close: f().ia5e7488, goLive: f().e5323e36, placeholder: f().ic05a146, startNow: f().cdf630be },
                g = () => {
                    const e = (0, c.useHistory)(),
                        [t, a] = l.useState(""),
                        u = l.useCallback(() => {
                            e.goBack();
                        }, [e]),
                        d = l.useCallback((e) => {
                            a(e.target.value);
                        }, []);
                    return l.createElement(p.Z, { onMaskClick: u, restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 }, l.createElement(l.Fragment, null, l.createElement(r.Z, { leftControl: l.createElement(n.ZP, { "aria-label": w.close, hoverLabel: { label: w.close }, icon: l.createElement(h.default, null), onPress: u, type: "primaryText" }) }), l.createElement(m.default, { style: b.decorationIcon }), l.createElement(s.Z, { style: b.container }, l.createElement(o.ZP, { size: "title3", weight: "bold" }, w.goLive), l.createElement(i.Z, { onChange: d, placeholder: w.placeholder, style: b.textInput, value: t }), l.createElement(s.Z, { style: b.rowGoLive }, l.createElement(n.ZP, { onPress: () => {}, size: "large", style: b.flex, type: "brandFilled" }, w.startNow)))));
                },
                b = u.default.create((e) => ({ container: { gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, decorationIcon: { alignSelf: "center", color: e.colors.magenta500, height: e.spaces.space48, width: e.spaces.space48 }, rowGoLive: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch", gap: e.spaces.space8 }, flex: { flex: 1 }, textInput: { width: "100%" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GoLive.ccc6526a.js.map
