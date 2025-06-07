(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-a9e5c193"],
    {
        55850: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => w });
            var r = i(202784),
                n = i(187468),
                s = i(325686),
                a = i(107267),
                o = i(67369),
                l = i(392237),
                d = i(323265),
                h = i(545457),
                c = i(252021),
                u = i(234622),
                _ = (i(139249), i(90311));
            const g = l.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                w = () => {
                    (0, h.ph)();
                    const e = (0, a.useHistory)(),
                        t = d.ZP.isWebView(),
                        i = (0, o.JS)();
                    return r.createElement(u.i, null, r.createElement(c.Z, { centeredLogo: r.createElement(_.y, null), history: e, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [g.root, t && g.webviewRoot, i && g.narrowRoot] }, r.createElement(n.H, { settings: { path: "/i/radar", isWebView: t } })), sidebarContent: null, withTweetButton: !1 }));
                };
        },
        916566: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => m });
            var r = i(202784),
                n = i(440638),
                s = i(325686),
                a = i(107267),
                o = i(89613),
                l = i(67369),
                d = i(392237),
                h = i(323265),
                c = i(545457),
                u = i(252021),
                _ = i(234622),
                g = i(952793),
                w = i(4452),
                b = (i(768239), i(90311));
            const p = d.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                m = () => {
                    (0, c.ph)(), (0, w.ZP)();
                    const e = (0, a.useHistory)(),
                        t = (0, o.UO)(),
                        i = (0, l.JS)(),
                        d = h.ZP.isWebView(),
                        m = (0, g.hC)("insights_chart_filter_enabled"),
                        y = (0, g.hC)("insights_ai_trends_enabled"),
                        v = (0, g.JY)("insights_ai_trends_limit", 5),
                        E = (0, g.JY)("insights_ai_trends_score_threshold", 0.6),
                        f = (0, g.JY)("insights_premium_initial_days_back", 7),
                        C = (0, g.hC)("insights_paginated_metrics_backend_enabled"),
                        Z = { chartFilterEnabled: m, aiTrendsEnabled: y, aiTrendsLimit: v, aiTrendsScoreThreshold: E, path: "/i/radar", initialDaysBack: f, isWebView: d, paginatedMetricsBackendEnabled: C };
                    return (
                        r.useEffect(() => {
                            (0, w.jW)("radar-content-ready");
                        }, []),
                        r.createElement(_.i, null, r.createElement(u.Z, { centeredLogo: r.createElement(b.y, null), history: e, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [p.root, d && p.webviewRoot, i && p.narrowRoot] }, r.createElement(n.u, { id: t.insightId, settings: Z })), sidebarContent: null, withTweetButton: !1 }))
                    );
                };
        },
        90311: (e, t, i) => {
            "use strict";
            i.d(t, { y: () => h });
            var r = i(202784),
                n = i(325686),
                s = i(731708),
                a = i(392237),
                o = i(111677),
                l = i.n(o),
                d = i(520489);
            function h() {
                return r.createElement(n.Z, { style: c.centeredLogo }, r.createElement(d.default, { style: c.logo }), r.createElement(s.ZP, { size: "title4", style: c.logoText, weight: "heavy" }, l().h70bdf0a));
            }
            const c = a.default.create((e) => ({ centeredLogo: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, width: "max-content" }, logo: { width: "28px", height: "28px" }, logoText: { whiteSpace: "nowrap" } }));
        },
        50393: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => p });
            var r = i(202784),
                n = i(122778),
                s = i(325686),
                a = i(107267),
                o = i(67369),
                l = i(392237),
                d = i(323265),
                h = i(545457),
                c = i(252021),
                u = i(234622),
                _ = i(952793),
                g = (i(432331), i(4452)),
                w = i(90311);
            const b = l.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                p = () => {
                    (0, h.ph)(), (0, g.ZP)();
                    const e = d.ZP.isWebView(),
                        t = (0, o.JS)(),
                        i = (0, a.useHistory)(),
                        l = (0, _.hC)("insights_chart_filter_enabled"),
                        p = (0, _.hC)("insights_ai_trends_enabled"),
                        m = (0, _.JY)("insights_ai_trends_limit", 5),
                        y = (0, _.JY)("insights_ai_trends_score_threshold", 0.6),
                        v = (0, _.JY)("insights_premium_initial_days_back", 7),
                        E = (0, _.hC)("insights_paginated_metrics_backend_enabled");
                    r.useEffect(() => {
                        (0, g.jW)("radar-content-ready");
                    }, []);
                    const f = { chartFilterEnabled: l, aiTrendsEnabled: p, aiTrendsLimit: m, aiTrendsScoreThreshold: y, previewSplashMetricsEnabled: !0, path: "/i/radar", initialDaysBack: v, isWebView: e, paginatedMetricsBackendEnabled: E };
                    return r.createElement(u.i, null, r.createElement(c.Z, { centeredLogo: r.createElement(w.y, null), history: i, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [b.root, e && b.webviewRoot, t && b.narrowRoot] }, r.createElement(n.w, { settings: f })), sidebarContent: null, withTweetButton: !1 }));
                };
        },
        497043: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => b });
            var r = i(202784),
                n = i(187468),
                s = i(325686),
                a = i(107267),
                o = i(67369),
                l = i(392237),
                d = i(323265),
                h = i(545457),
                c = i(252021),
                u = i(234622),
                _ = i(90311),
                g = i(358981);
            i(96e3);
            const w = l.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                b = () => {
                    (0, h.ph)();
                    const e = (0, a.useHistory)(),
                        t = d.ZP.isWebView(),
                        i = (0, o.JS)();
                    return r.createElement(u.i, null, r.createElement(c.Z, { TabBar: g.Z, centeredLogo: r.createElement(_.y, null), history: e, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [w.root, t && w.webviewRoot, i && w.narrowRoot] }, r.createElement(n.H, { settings: { path: "/i/business/radar" } })), sidebarContent: null, withTweetButton: !1 }));
                };
        },
        166793: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => y });
            var r = i(202784),
                n = i(440638),
                s = i(325686),
                a = i(107267),
                o = i(89613),
                l = i(67369),
                d = i(392237),
                h = i(323265),
                c = i(545457),
                u = i(252021),
                _ = i(234622),
                g = i(952793),
                w = i(4452),
                b = i(90311),
                p = i(358981);
            i(626824);
            const m = d.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                y = () => {
                    (0, c.ph)(), (0, w.ZP)();
                    const e = (0, a.useHistory)(),
                        t = (0, o.UO)(),
                        i = (0, l.JS)(),
                        d = h.ZP.isWebView(),
                        y = { chartFilterEnabled: (0, g.hC)("insights_chart_filter_enabled"), aiTrendsEnabled: (0, g.hC)("insights_ai_trends_enabled"), aiTrendsLimit: (0, g.JY)("insights_ai_trends_limit", 5), aiTrendsScoreThreshold: (0, g.JY)("insights_ai_trends_score_threshold", 0.6), paginatedMetricsBackendEnabled: (0, g.hC)("insights_paginated_metrics_backend_enabled"), path: "/i/business/radar" };
                    return (
                        r.useEffect(() => {
                            (0, w.jW)("radar-content-ready");
                        }, []),
                        r.createElement(_.i, null, r.createElement(u.Z, { TabBar: p.Z, centeredLogo: r.createElement(b.y, null), history: e, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [m.root, d && m.webviewRoot, i && m.narrowRoot] }, r.createElement(n.u, { id: t.insightId, settings: y })), sidebarContent: null, withTweetButton: !1 }))
                    );
                };
        },
        733454: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => m });
            var r = i(202784),
                n = i(122778),
                s = i(325686),
                a = i(107267),
                o = i(67369),
                l = i(392237),
                d = i(323265),
                h = i(545457),
                c = i(252021),
                u = i(234622),
                _ = i(952793),
                g = i(4452),
                w = i(90311),
                b = i(358981);
            i(909122);
            const p = l.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                m = () => {
                    (0, h.ph)(), (0, g.ZP)();
                    const e = d.ZP.isWebView(),
                        t = (0, o.JS)(),
                        i = (0, a.useHistory)(),
                        l = (0, _.hC)("insights_chart_filter_enabled"),
                        m = (0, _.hC)("insights_ai_trends_enabled"),
                        y = (0, _.JY)("insights_ai_trends_limit", 5),
                        v = (0, _.JY)("insights_ai_trends_score_threshold", 0.6),
                        E = (0, _.hC)("insights_previews_enabled"),
                        f = (0, _.hC)("insights_preview_splash_metrics_enabled"),
                        C = (0, _.hC)("insights_paginated_metrics_backend_enabled");
                    r.useEffect(() => {
                        (0, g.jW)("radar-content-ready");
                    }, []);
                    const Z = { chartFilterEnabled: l, aiTrendsEnabled: m, aiTrendsLimit: y, aiTrendsScoreThreshold: v, previewsEnabled: E, previewSplashMetricsEnabled: f, paginatedMetricsBackendEnabled: C, path: "/i/business/radar" };
                    return r.createElement(u.i, null, r.createElement(c.Z, { TabBar: b.Z, centeredLogo: r.createElement(w.y, null), history: i, isFullWidth: !0, primaryContent: () => r.createElement(s.Z, { style: [p.root, e && p.webviewRoot, t && p.narrowRoot] }, r.createElement(n.w, { settings: Z })), sidebarContent: null, withTweetButton: !1 }));
                };
        },
        358981: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            i(202784);
            const r = (0, i(523561).Z)({ loader: () => Promise.resolve().then(i.bind(i, 8262)) });
        },
        320627: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        705082: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        567955: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        767156: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        173466: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        961368: (e, t, i) => {
            var r = i(482609),
                n = i(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        139249: (e, t, i) => {
            var r = i(46062),
                n = i(320627);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
        768239: (e, t, i) => {
            var r = i(46062),
                n = i(705082);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
        432331: (e, t, i) => {
            var r = i(46062),
                n = i(567955);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
        96e3: (e, t, i) => {
            var r = i(46062),
                n = i(767156);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
        626824: (e, t, i) => {
            var r = i(46062),
                n = i(173466);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
        909122: (e, t, i) => {
            var r = i(46062),
                n = i(961368);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-a9e5c193.e90b62ba.js.map
