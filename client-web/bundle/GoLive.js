"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GoLive", "icons/IconCameraVideoStroke-js"],
    {
        857289: (e, t, a) => {
            a.r(t), a.d(t, { GoLiveSheet: () => w, default: () => w });
            var l = a(202784),
                c = a(325686),
                r = a(107267),
                n = a(786998),
                o = a(154003),
                s = a(731708),
                i = a(371344),
                d = a(138099),
                p = a(392237),
                u = a(111677),
                h = a.n(u),
                m = a(837020),
                v = a(839);
            const g = { close: h().ia5e7488, goLive: h().e5323e36, placeholder: h().ic05a146, startNow: h().cdf630be },
                w = () => {
                    const e = (0, r.useHistory)(),
                        [t, a] = l.useState(""),
                        p = l.useCallback(() => {
                            e.goBack();
                        }, [e]),
                        u = l.useCallback((e) => {
                            a(e.target.value);
                        }, []);
                    return l.createElement(d.Z, { onMaskClick: p, restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 }, l.createElement(l.Fragment, null, l.createElement(n.Z, { leftControl: l.createElement(o.ZP, { "aria-label": g.close, hoverLabel: { label: g.close }, icon: l.createElement(m.default, null), onPress: p, type: "primaryText" }) }), l.createElement(v.default, { style: f.decorationIcon }), l.createElement(c.Z, { style: f.container }, l.createElement(s.ZP, { size: "title3", weight: "bold" }, g.goLive), l.createElement(i.Z, { onChange: u, placeholder: g.placeholder, style: f.textInput, value: t }), l.createElement(c.Z, { style: f.rowGoLive }, l.createElement(o.ZP, { onPress: () => {}, size: "large", style: f.flex, type: "brandFilled" }, g.startNow)))));
                },
                f = p.default.create((e) => ({ container: { gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, decorationIcon: { alignSelf: "center", color: e.colors.magenta500, height: e.spaces.space48, width: e.spaces.space48 }, rowGoLive: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch", gap: e.spaces.space8 }, flex: { flex: 1 }, textInput: { width: "100%" } }));
        },
        839: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var l = a(202784),
                c = a(890601),
                r = a(783427),
                n = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, c.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GoLive.15cf947a.js.map
