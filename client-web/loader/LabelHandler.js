"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.LabelHandler"],
    {
        941165: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(351322),
                i = r(202784),
                a = r(844685);
            function o(e) {
                const {
                    entry: {
                        content: { subtext: t, text: r },
                    },
                } = e;
                return i.createElement(a.Z, { subtext: t, text: r });
            }
            const l = i.memo(o),
                c = n.iH({ divider: { top: !0, bottom: !1 }, component: l }).getHandler();
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                i = r(890601),
                a = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.LabelHandler.f1d15dda.js.map
