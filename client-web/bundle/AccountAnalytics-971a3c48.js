"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-971a3c48"],
    {
        321910: (e, t, r) => {
            r.d(t, { D: () => s, w: () => a });
            var i = r(552322),
                n = r(202784);
            const o = (0, n.createContext)(null);
            function s({ children: e, value: t }) {
                return (0, i.jsx)(o.Provider, { value: t, children: e });
            }
            function a() {
                const e = (0, n.useContext)(o);
                if (!e) throw new Error("useAccountOverview must be used within an AccountOverviewProvider");
                return e;
            }
        },
        674836: (e, t, r) => {
            r.d(t, { V: () => d, x: () => f });
            var i = r(552322),
                n = r(202784),
                o = r(441353),
                s = r(82143);
            const a = { chartType: "bar", granularity: "daily", primaryMetric: "Impressions", secondaryMetric: "none", timeRange: 7, version: 2 },
                c = o.A;
            function l(e) {
                return c.includes(e);
            }
            const u = (0, n.createContext)(void 0),
                d = () => {
                    const e = (0, n.useContext)(u);
                    if (void 0 === e) throw new Error("useAnalyticsConfig must be used within an AnalyticsConfigProvider");
                    return e;
                };
            function m(e) {
                const t = { ...e };
                return t.primaryMetric === t.secondaryMetric && (t.secondaryMetric = "none"), l(t.primaryMetric) || (t.primaryMetric = a.primaryMetric), "none" === t.secondaryMetric || l(t.secondaryMetric) || (t.secondaryMetric = "none"), s.nb.includes(t.granularity) || (t.granularity = "daily"), s.__.includes(t.chartType) || (t.chartType = "bar"), t.timeRange < 7 && (t.timeRange = 7), (t.version = 2), t;
            }
            const f = ({ children: e, fallbackConfig: t }) => {
                const r = (0, n.useCallback)(() => {
                        if ("undefined" == typeof window) return m({ ...a, ...t });
                        const e = localStorage.getItem("accountAnalyticsConfig");
                        if (e) {
                            const t = JSON.parse(e);
                            if (2 === t.version) return m(t);
                            return m(
                                (function (e) {
                                    let t = { ...e },
                                        r = t.version || 0;
                                    for (; r < 2; ) 1 === r && (t = { ...t, timeRange: 7, version: 2 }), (r = t.version || 1);
                                    return localStorage.setItem("accountAnalyticsConfig", JSON.stringify(t)), t;
                                })(t),
                            );
                        }
                        const r = m({ ...a, ...t });
                        return localStorage.setItem("accountAnalyticsConfig", JSON.stringify(r)), r;
                    }, [t]),
                    [o, s] = (0, n.useState)(r);
                (0, n.useEffect)(() => {
                    s(r());
                }, [r]);
                const c = (0, n.useCallback)(
                    (e) => {
                        const t = m({ ...o, ...e });
                        s(t), localStorage.setItem("accountAnalyticsConfig", JSON.stringify(t));
                    },
                    [o],
                );
                return (0, i.jsx)(u.Provider, { value: { config: o, updateConfig: c }, children: e });
            };
        },
        211205: (e, t, r) => {
            r.d(t, { a: () => s, d: () => o });
            var i = r(202784);
            const n = (0, i.createContext)(null),
                o = n.Provider;
            function s() {
                const e = (0, i.useContext)(n);
                if (!e) throw new Error("useAudienceOverview must be used within an AudienceOverviewProvider");
                return e;
            }
        },
        163436: (e, t, r) => {
            r.d(t, { C: () => a, o: () => s });
            var i = r(552322),
                n = r(202784);
            const o = (0, n.createContext)(null);
            function s({ children: e, value: t }) {
                return (0, i.jsx)(o.Provider, { value: t, children: e });
            }
            function a() {
                const e = (0, n.useContext)(o);
                if (!e) throw new Error("useMediaMetrics must be used within an MediaMetricsProvider");
                return e;
            }
        },
        262843: (e, t, r) => {
            r.d(t, { x: () => n });
            var i = r(202784);
            function n() {
                const [e, t] = (0, i.useState)("undefined" == typeof document || "visible" === document.visibilityState);
                return (
                    (0, i.useEffect)(() => {
                        if ("undefined" == typeof document) return;
                        const e = () => {
                            t("visible" === document.visibilityState);
                        };
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, []),
                    e
                );
            }
        },
        991732: (e, t, r) => {
            r.d(t, { T: () => s });
            var i = r(202784),
                n = r(430962),
                o = r(82143);
            function s() {
                const { analytics: e } = (0, n.M1)();
                return (0, i.useMemo)(() => {
                    const t = {};
                    return (
                        o.b2.forEach((r) => {
                            t[r] = { info: e[`${r}Info`], label: e[`${r}Label`] };
                        }),
                        t
                    );
                }, [e]);
            }
        },
        746659: (e, t, r) => {
            r.d(t, { BE: () => p, Gx: () => b, r0: () => y });
            var i = r(552322),
                n = r(702024),
                o = r(202784),
                s = r(889906),
                a = r(607499),
                c = r(326618),
                l = r(733936);
            const u = "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
                d = ["business", "government", "user"],
                m = ["Just released a new feature! Check it out at https://example.com/feature", "Excited to announce our latest update to our product. What do you think?", "Working on something big. Can't wait to share it with you all! #excited", "Thanks for all the feedback on our product. We're listening and making improvements.", "Happy to be part of this amazing community. Your support means everything!", "Just hit a major milestone: 10000 users! Thank you all for your support.", "Looking for beta testers for our new product. DM if interested!", "What features would you like to see in our next update? Let us know in the comments!", "We've been working on this for months, and it's finally here! https://example.com/launch", "Celebrating 5 years of building products people love. Here's to many more!"],
                f = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
                h = (e, t) => {
                    const r = Math.floor((t.to.getTime() - t.from.getTime()) / 864e5),
                        i = f(0, r),
                        n = (0, l.k)(t.to, i),
                        o = Math.random() < 0.1,
                        s = !o && Math.random() < 0.1,
                        a = 1 - i / r,
                        c = f(50, 200),
                        h = f(0, m.length - 1),
                        g = m[h] || "Sample post text",
                        p = Math.random() < 0.3,
                        y = d[f(0, d.length - 1)],
                        v = { id: `mock_post_${e}`, text: g, createdAt: n, author: { id: "12345", name: "Mock User", screenName: "mockuser", verifiedType: y || "user", profileImageUrl: u, badges: { verifiedType: y || "user", isProtected: Math.random() < 0.2, isSubscriber: Math.random() < 0.1, isTranslator: Math.random() < 0.05 } }, replyToId: o ? `mock_post_${f(0, 999)}` : void 0, communityId: s ? `mock_community_${f(1, 10)}` : void 0, publicMetrics: { impressions: Math.floor(c * f(50, 200) * (0.5 + 0.5 * a)), likes: Math.floor(c * f(1, 10) * (0.5 + 0.5 * a)), replies: Math.floor(c * f(0, 5) * (0.5 + 0.5 * a)), reposts: Math.floor(c * f(0, 8) * (0.5 + 0.5 * a)), quotes: Math.floor(c * f(0, 3) * (0.5 + 0.5 * a)), bookmarks: Math.floor(c * f(0, 4) * (0.5 + 0.5 * a)) } };
                    if (p) {
                        const t = Math.random() < 0.5;
                        v.media = [{ type: t ? "video" : "photo", url: `https://picsum.photos/seed/${e}/400/300`, ...(t ? { duration: f(1e4, 6e4) } : {}) }];
                    }
                    return v;
                };
            function g({ children: e, timeRange: t }) {
                const [r, n] = (0, o.useState)([]),
                    [s, a] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    n(
                        (function (e, t = 1e3) {
                            const r = [];
                            for (let i = 0; i < t; i++) r.push(h(i, e));
                            return r.sort((e, t) => {
                                const r = e.createdAt ? e.createdAt.getTime() : 0;
                                return (t.createdAt ? t.createdAt.getTime() : 0) - r;
                            });
                        })(t),
                    );
                }, [t]);
                const c = { posts: r, isLoading: s, isFetching: !1, timeRange: t };
                return (0, i.jsx)(p.Provider, { value: c, children: e });
            }
            const p = (0, o.createContext)(null);
            function y() {
                const e = (0, o.useContext)(p);
                if (null === e) throw new Error("useContent must be used within a ContentProvider");
                return e;
            }
            const v = (e) => {
                if (!e?.viewer_v2?.user_results?.result) return [];
                const t = e.viewer_v2.user_results.result;
                if (!t.tweets_results || !Array.isArray(t.tweets_results)) return [];
                const r = t.tweets_results.filter((e) => e?.result).map((e) => e.result),
                    i = t.rest_id,
                    n = t.legacy?.name || "",
                    o = t.legacy?.screen_name || "",
                    s = t.legacy?.profile_image_url_https || "",
                    a = t.legacy?.verified_type || "";
                let c, l;
                t.affiliates_highlighted_label?.label?.badge?.url && (c = { label: t.affiliates_highlighted_label.label.description || "Company", url: t.affiliates_highlighted_label.label.badge.url || "" }), a ? ("Business" === a ? (l = "business") : "Government" === a ? (l = "government") : "User" === a && (l = "user")) : t.is_blue_verified && (l = "user");
                const u = l || c ? { ...(l && { verifiedType: l }), ...(c && { affiliation: c }) } : void 0;
                return r.map((e) => {
                    const t = {};
                    e.organic_metrics_total &&
                        Array.isArray(e.organic_metrics_total) &&
                        e.organic_metrics_total.forEach((e) => {
                            t[e.metric_type] = Number(e.metric_value) || 0;
                        });
                    const r = [];
                    e.legacy?.entities?.media &&
                        Array.isArray(e.legacy.entities.media) &&
                        e.legacy.entities.media.forEach((e) => {
                            const t = { type: e.type, url: e.media_url_https, height: e.original_info?.height, width: e.original_info?.width };
                            "video" === e.type && e.video_info && e.video_info.duration_millis && (t.duration = e.video_info.duration_millis), r.push(t);
                        });
                    let a = null;
                    try {
                        a = e.legacy?.created_at ? new Date(e.legacy.created_at) : null;
                    } catch (e) {}
                    return { id: e.rest_id, text: e.legacy?.full_text || "", createdAt: a, author: { id: i, name: n, screenName: o, verifiedType: l, profileImageUrl: s, badges: u }, replyToId: e.reply_to_results?.rest_id, communityId: e.community_results?.rest_id, media: r.length > 0 ? r : void 0, publicMetrics: { impressions: t.Impressions || 0, likes: t.Likes || 0, replies: t.Replies || 0, reposts: t.Retweets || 0, quotes: t.CreateQuote || 0, bookmarks: t.Bookmark || 0 }, rawMetrics: t, display_text_range: e.legacy?.display_text_range || void 0 };
                });
            };
            function _({ children: e, timeRange: t }) {
                const r = (0, s.useRelayEnvironment)(),
                    n = (0, o.useRef)(t),
                    a = (0, o.useRef)(!0),
                    [l, u] = (0, o.useState)(!1),
                    [d, m] = (0, o.useState)([]),
                    [f, h] = (0, o.useState)(!1),
                    [g, y] = (0, o.useState)({ from_time: t.from.toISOString(), to_time: t.to.toISOString(), max_results: 1e3, query_page_size: 100, requested_metrics: ["Impressions", "Likes", "Engagements", "Bookmark", "Share", "Follows", "Replies", "Retweets", "ProfileVisits", "DetailExpands", "UrlClicks", "HashtagClicks", "PermalinkClicks"] }),
                    _ = (0, s.useLazyLoadQuery)(c.x, g, { fetchPolicy: "store-or-network" });
                (0, o.useEffect)(() => {
                    if (_) {
                        const e = v(_);
                        m(e), h(!1), u(!1);
                    }
                }, [_]),
                    (0, o.useEffect)(() => {
                        if (((n.current = t), a.current)) return void (a.current = !1);
                        u(!0);
                        const e = { from_time: t.from.toISOString(), to_time: t.to.toISOString(), max_results: 1e3, query_page_size: 100, requested_metrics: ["Impressions", "Likes", "Engagements", "Bookmark", "Share", "Follows", "Replies", "Retweets", "ProfileVisits", "DetailExpands", "UrlClicks", "HashtagClicks", "PermalinkClicks"] };
                        (0, s.fetchQuery)(r, c.x, e, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then((t) => {
                                if (t) {
                                    const e = v(t);
                                    m(e);
                                }
                                y(e), u(!1), h(!1);
                            })
                            .catch((e) => {
                                u(!1), h(!1);
                            });
                    }, [r, t]);
                const b = { isFetching: l, timeRange: t, posts: d, isLoading: f };
                return (0, i.jsx)(p.Provider, { value: b, children: e });
            }
            function b({ children: e, timeRange: t, isMockData: r = !1 }) {
                const s = r ? g : _;
                return (0, i.jsx)(a.S, { fallback: (0, i.jsx)("div", { children: "Error loading content analytics" }), children: (0, i.jsx)(o.Suspense, { fallback: (0, i.jsx)("div", { className: "pt-16", children: (0, i.jsx)(n.P, { size: "large" }) }), children: (0, i.jsx)(s, { timeRange: t, children: e }) }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-971a3c48.5f4a449a.js.map
