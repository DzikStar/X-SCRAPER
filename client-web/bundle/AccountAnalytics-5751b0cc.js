"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-5751b0cc"],
    {
        854123: (e, t, s) => {
            s.d(t, { h9: () => y, DM: () => p });
            var a = s(552322),
                o = s(193686),
                i = s(202784),
                u = s(889906),
                r = s(607499),
                n = s(290953),
                c = s(149184),
                l = s(82143),
                d = s(739219);
            const m = {
                    counts: { live_counts: { minutes_watched: "120", unique_viewers: "42", views: "45" }, replay_counts: { minutes_watched: "350", unique_viewers: "320", views: "372" }, total_counts: { minutes_watched: "470", unique_viewers: "362", views: "417" } },
                    counts_time_series: [
                        { timestamp: 1741122e6, replay_counts: { minutes_watched: "57", unique_viewers: "177", views: "208" }, live_counts: { minutes_watched: "5", unique_viewers: "28", views: "29" }, total_counts: { minutes_watched: "62", unique_viewers: "205", views: "237" } },
                        { timestamp: 17411256e5, replay_counts: { minutes_watched: "9", unique_viewers: "36", views: "42" }, live_counts: { minutes_watched: "0", unique_viewers: "2", views: "2" }, total_counts: { minutes_watched: "9", unique_viewers: "38", views: "44" } },
                    ],
                    demographic_counts: {
                        live_demographic_counts: {
                            views_by_device: [
                                { value: "17", key: "Iphone" },
                                { value: "5", key: "Android" },
                                { value: "9", key: "Web" },
                            ],
                            views_by_country: [
                                { value: "1", key: "VN" },
                                { value: "14", key: "US" },
                                { value: "5", key: "GB" },
                                { value: "3", key: "CA" },
                                { value: "7", key: "JP" },
                                { value: "4", key: "DE" },
                                { value: "6", key: "FR" },
                                { value: "2", key: "BR" },
                                { value: "3", key: "AU" },
                            ],
                        },
                        replay_demographic_counts: {
                            views_by_device: [
                                { value: "103", key: "Android" },
                                { value: "167", key: "Iphone" },
                                { value: "97", key: "Web" },
                                { value: "5", key: "Ipad" },
                            ],
                            views_by_country: [
                                { value: "27", key: "IN" },
                                { value: "171", key: "US" },
                                { value: "22", key: "GB" },
                                { value: "31", key: "CA" },
                                { value: "19", key: "JP" },
                                { value: "25", key: "DE" },
                                { value: "18", key: "FR" },
                                { value: "23", key: "BR" },
                                { value: "15", key: "AU" },
                                { value: "12", key: "MX" },
                                { value: "9", key: "ES" },
                            ],
                        },
                        total_demographic_counts: {
                            views_by_device: [
                                { value: "184", key: "Iphone" },
                                { value: "108", key: "Android" },
                                { value: "106", key: "Web" },
                                { value: "5", key: "Ipad" },
                            ],
                            views_by_country: [
                                { value: "185", key: "US" },
                                { value: "27", key: "IN" },
                                { value: "27", key: "GB" },
                                { value: "34", key: "CA" },
                                { value: "26", key: "JP" },
                                { value: "29", key: "DE" },
                                { value: "24", key: "FR" },
                                { value: "25", key: "BR" },
                                { value: "18", key: "AU" },
                                { value: "12", key: "MX" },
                                { value: "9", key: "ES" },
                                { value: "7", key: "IT" },
                                { value: "5", key: "NL" },
                            ],
                        },
                    },
                    live_viewers: [0, 1, 2, 4, 5, 7, 9, 11, 13, 14, 16, 18, 19, 21, 22, 24, 25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 39, 40, 40, 41, 41, 41, 42, 42, 41, 41, 41, 40, 40, 39, 38, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                v = { broadcastId: "1MnGnwVwgZkJO", title: "Sample Live Broadcast", state: "Ended", status: "Sample Live Broadcast", previewImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=675", url: "https://example.com/stream/123456789", contentType: "video/mp4", startTime: Date.now() - 1728e5, endTime: Date.now() - 1656e5, privateChat: !1, totalViews: 417, totalViewers: 362, totalMinutesWatched: 470 };
            function _(e) {
                const t = 1e4 * Math.sin(e);
                return t - Math.floor(t);
            }
            function h({ children: e, broadcastId: t, timeRange: s, context: o }) {
                const [u, r] = (0, i.useState)({});
                (0, i.useEffect)(() => {
                    const e = {},
                        t = new Date(v.startTime),
                        a = (0, d.w)(s.to, s.from) + 1,
                        o = Math.min(t.getTime() + 864e5 * a, Date.now()),
                        i = 36e5,
                        u = Math.max(48, Math.ceil((o - t.getTime()) / i)),
                        n = t.getTime();
                    for (let s = 0; s < u; s++) {
                        const a = t.getTime() + s * i,
                            o = new Date(a).getHours(),
                            u = 0.5 + 0.5 * Math.sin((o / 24) * Math.PI * 2),
                            r = 0.7 + 0.6 * _(n + s),
                            c = Math.floor(50 * u * r),
                            l = Math.floor(9e5 * u * r);
                        e[a] = { views: c, watchTimeMs: l };
                    }
                    r(e);
                }, [s]);
                const n = (0, i.useMemo)(() => {
                        const e = m,
                            a = { views: { total: Number(e.counts.total_counts.views), live: Number(e.counts.live_counts.views), replay: Number(e.counts.replay_counts.views) }, minutesWatched: { total: Number(e.counts.total_counts.minutes_watched), live: Number(e.counts.live_counts.minutes_watched), replay: Number(e.counts.replay_counts.minutes_watched) }, uniqueViewers: { total: Number(e.counts.total_counts.unique_viewers), live: Number(e.counts.live_counts.unique_viewers), replay: Number(e.counts.replay_counts.unique_viewers) } },
                            o = ((e) => {
                                const t = {};
                                e.forEach((e) => {
                                    let s = e.key;
                                    (s = "unknown" === s.toLowerCase() || "other" === s.toLowerCase() ? "Other" : s.toLowerCase().includes("iphone") || s.toLowerCase().includes("ipad") || s.toLowerCase().includes("ios") ? "iOS" : s.toLowerCase().includes("android") ? "Android" : s.toLowerCase().includes("web") ? "Web" : "Other"), (t[s] = (t[s] || 0) + Number(e.value));
                                });
                                const s = Object.values(t).reduce((e, t) => e + t, 0);
                                return l.he.map((e) => ({ key: e, value: String(t[e] || 0), percentage: s > 0 ? ((t[e] || 0) / s) * 100 : 0 }));
                            })(e.demographic_counts.total_demographic_counts.views_by_device);
                        return { isFetching: !1, timeSeriesData: u, timeRange: s, broadcastId: t, liveViewers: e.live_viewers, formattedBroadcast: v, viewMetrics: a, deviceData: o, countryData: { live: e.demographic_counts.live_demographic_counts.views_by_country, replay: e.demographic_counts.replay_demographic_counts.views_by_country, total: e.demographic_counts.total_demographic_counts.views_by_country } };
                    }, [t, s, u]),
                    c = o;
                return (0, a.jsx)(c.Provider, { value: n, children: e });
            }
            const w = (0, i.createContext)(null);
            function p() {
                const e = (0, i.useContext)(w);
                if (!e) throw new Error("useLiveDetails must be used within a LiveDetailsProvider");
                return e;
            }
            function y({ children: e, broadcastId: t, timeRange: s, isMockData: u = !1 }) {
                const [n, c] = (0, i.useState)(!1);
                if (
                    ((0, i.useEffect)(() => {
                        c(!0);
                    }, []),
                    !n)
                )
                    return (0, a.jsx)(o.P, { size: "large" });
                const l = u ? h : b;
                return (0, a.jsx)(r.S, { children: (0, a.jsx)(l, { broadcastId: t, timeRange: s, context: w, children: (0, a.jsx)(i.Suspense, { fallback: (0, a.jsx)("div", { className: "pt-16", children: (0, a.jsx)(o.P, { size: "large" }) }), children: e }) }) });
            }
            function b({ children: e, broadcastId: t, timeRange: s }) {
                const o = (0, u.useRelayEnvironment)(),
                    [r, m] = (0, i.useState)(!1),
                    [v, _] = (0, i.useState)(() => ({ broadcastId: t })),
                    [h, p] = (0, i.useState)({}),
                    y = (0, u.useLazyLoadQuery)(n.c, v);
                (0, i.useEffect)(() => {
                    m(!0);
                    const e = { broadcastId: t };
                    (0, u.fetchQuery)(o, n.c, e, { fetchPolicy: "store-or-network" })
                        .toPromise()
                        .finally(() => {
                            _(e), m(!1);
                        });
                }, [o, t]),
                    (0, i.useEffect)(() => {
                        if (!y?.broadcast_by_rest_id?.start_time) return;
                        const e = y.broadcast_by_rest_id.start_time,
                            a = e + 864e5 * ((0, d.w)(s.to, s.from) + 1),
                            i = { broadcastId: t, startTime: 1e3 * Math.floor(e / 1e3), endTime: 1e3 * Math.floor(a / 1e3) };
                        (0, u.fetchQuery)(o, c.o, i, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then((e) => {
                                b(e?.broadcast_by_rest_id?.counts_time_series ? e.broadcast_by_rest_id.counts_time_series : [], i.startTime, i.endTime);
                            })
                            .catch((e) => {
                                b([], i.startTime, i.endTime);
                            });
                    }, [o, t, s, y?.broadcast_by_rest_id?.start_time]);
                const b = (e, t, s) => {
                        const a = {},
                            o = {};
                        e.forEach((e) => {
                            o[e.timestamp] = e;
                        });
                        const i = 36e5;
                        let u = Math.floor(t / i) * i,
                            r = s;
                        if (e.length > 0) {
                            const t = e.map((e) => e.timestamp);
                            (u = Math.min(u, Math.min(...t))), (r = Math.max(r, Math.max(...t)));
                        }
                        if (Math.ceil((r - u) / 864e5) >= 14) {
                            const e = {},
                                t = (e) => {
                                    const t = new Date(e);
                                    return t.setUTCHours(0, 0, 0, 0), t.getTime();
                                };
                            for (let s = u; s <= r; s += i) {
                                const a = o[s],
                                    i = t(s);
                                e[i] || (e[i] = { views: 0, watchTimeMs: 0 }), a && ((e[i].views += Number(a.total_counts.views || 0)), (e[i].watchTimeMs += 60 * Number(a.total_counts.minutes_watched || 0) * 1e3));
                            }
                            Object.entries(e).forEach(([e, t]) => {
                                a[e] = { views: t.views, watchTimeMs: t.watchTimeMs };
                            });
                        } else
                            for (let e = u; e <= r; e += i) {
                                const t = o[e];
                                if (t) {
                                    const s = { views: Number(t.total_counts.views || 0), watchTimeMs: 60 * Number(t.total_counts.minutes_watched || 0) * 1e3 };
                                    a[e] = s;
                                } else a[e] = { views: 0, watchTimeMs: 0 };
                            }
                        const n = Object.fromEntries(Object.entries(a).sort((e, t) => Number(e[0]) - Number(t[0])));
                        p(n);
                    },
                    f = (0, i.useMemo)(() => {
                        if (!y.broadcast_by_rest_id) return null;
                        const e = y.broadcast_by_rest_id,
                            a = { broadcastId: e.broadcast_id, title: e.status || "Untitled Broadcast", previewImage: e.image_url || "", url: "", contentType: "video/mp4", startTime: e.start_time, endTime: e.end_time, state: e.state, status: e.status, privateChat: e.private_chat, totalViews: e.counts?.total_counts?.views ? Number(e.counts.total_counts.views) : 0, totalViewers: e.counts?.total_counts?.unique_viewers ? Number(e.counts.total_counts.unique_viewers) : 0, totalMinutesWatched: e.counts?.total_counts?.minutes_watched ? Number(e.counts.total_counts.minutes_watched) : 0 },
                            o = { views: { total: e.counts?.total_counts?.views ? Number(e.counts.total_counts.views) : 0, live: e.counts?.live_counts?.views ? Number(e.counts.live_counts.views) : 0, replay: e.counts?.replay_counts?.views ? Number(e.counts.replay_counts.views) : 0 }, minutesWatched: { total: e.counts?.total_counts?.minutes_watched ? Number(e.counts.total_counts.minutes_watched) : 0, live: e.counts?.live_counts?.minutes_watched ? Number(e.counts.live_counts.minutes_watched) : 0, replay: e.counts?.replay_counts?.minutes_watched ? Number(e.counts.replay_counts.minutes_watched) : 0 }, uniqueViewers: { total: e.counts?.total_counts?.unique_viewers ? Number(e.counts.total_counts.unique_viewers) : 0, live: e.counts?.live_counts?.unique_viewers ? Number(e.counts.live_counts.unique_viewers) : 0, replay: e.counts?.replay_counts?.unique_viewers ? Number(e.counts.replay_counts.unique_viewers) : 0 } },
                            i = h,
                            u = ((e = []) => {
                                const t = {};
                                e.forEach((e) => {
                                    let s = e.key;
                                    (s = "unknown" === s.toLowerCase() || "other" === s.toLowerCase() ? "Other" : s.toLowerCase().includes("iphone") || s.toLowerCase().includes("ipad") || s.toLowerCase().includes("ios") ? "iOS" : s.toLowerCase().includes("android") ? "Android" : s.toLowerCase().includes("web") ? "Web" : "Other"), (t[s] = (t[s] || 0) + Number(e.value));
                                });
                                const s = Object.values(t).reduce((e, t) => e + t, 0);
                                return l.he.map((e) => ({ key: e, value: String(t[e] || 0), percentage: s > 0 ? ((t[e] || 0) / s) * 100 : 0 }));
                            })(e.demographic_counts?.total_demographic_counts?.views_by_device || []),
                            n = [...(e.demographic_counts?.total_demographic_counts?.views_by_country || [])].sort((e, t) => Number(t.value) - Number(e.value)),
                            c = { live: n, replay: n, total: n };
                        return { isFetching: r, timeSeriesData: i, timeRange: s, broadcastId: t, liveViewers: e.concurrent_viewers_time_series || [], formattedBroadcast: a, viewMetrics: o, deviceData: u, countryData: c };
                    }, [t, y, r, s, h]);
                return (0, a.jsx)(w.Provider, { value: f, children: e });
            }
        },
        976389: (e, t, s) => {
            s.d(t, { RM: () => _, on: () => p, cf: () => h });
            var a = s(552322),
                o = s(202784),
                i = s(889906),
                u = s(607499);
            const r = 3,
                n = 12;
            function c(e, t = 0) {
                const s = Date.now(),
                    a = 36e5,
                    o = 864e5,
                    i = [
                        { broadcastId: "template-1", title: "Product Launch: X Premium Features Walkthrough", state: "Ended", status: "completed", endTime: s - 1728e5, startTime: s - 1728e5 - a, duration: a, scheduledStartTime: s - 1728e5 - 72e5, source: "Producer", imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop", privateChat: !1, totalMinsWatched: 100 * (t + 1), totalViews: 403 * (t + 1), totalViewers: 350 * (t + 1) },
                        { broadcastId: "template-2", title: "LIVE NOW: Weekly Tech News Roundup", state: "Running", status: "live", endTime: null, startTime: s - 18e5, duration: null, scheduledStartTime: s - a, source: "LiveCms", imageUrl: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1632&auto=format&fit=crop", privateChat: !1, totalMinsWatched: 250 * (t + 1), totalViews: 1205 * (t + 1), totalViewers: 980 * (t + 1) },
                        { broadcastId: "template-3", title: "Upcoming: Developer Q&A Session", state: "NotStarted", status: "scheduled", endTime: null, startTime: null, duration: null, scheduledStartTime: s + o, source: "Producer", imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop", privateChat: !1, totalMinsWatched: 0, totalViews: 0, totalViewers: 0 },
                        { title: "Behind the Scenes: Building X Studio", state: "Ended", status: "completed", endTime: s - 432e6, startTime: s - 432e6 - 72e5, duration: 72e5, scheduledStartTime: s - 432e6 - 108e5, source: "ReplayKit", imageUrl: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=1172&auto=format&fit=crop", privateChat: !1, totalMinsWatched: 850 * (t + 1), totalViews: 2500 * (t + 1), totalViewers: 1800 * (t + 1) },
                        { title: "Design Team Livestream: New UI Components", state: "Ended", status: "completed", endTime: s - 2592e5, startTime: s - 2592e5 - a, duration: a, scheduledStartTime: null, source: "LiveCms", imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1170&auto=format&fit=crop", privateChat: !0, totalMinsWatched: 320 * (t + 1), totalViews: 870 * (t + 1), totalViewers: 750 * (t + 1) },
                        { title: "Coming Soon: Marketing Team Strategy Session", state: "NotStarted", status: "scheduled", endTime: null, startTime: null, duration: null, scheduledStartTime: s + 1728e5, source: "Producer", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop", privateChat: !1, totalMinsWatched: 0, totalViews: 0, totalViewers: 0 },
                    ];
                return Array.from({ length: Math.min(e, n - t) }, (e, s) => {
                    const a = Math.floor(Math.random() * i.length);
                    return { ...i[a], broadcastId: `mock-${t + s}` };
                });
            }
            function l({ children: e }) {
                const [t, s] = (0, o.useState)(() => c(r, 0)),
                    [i, u] = (0, o.useState)(r),
                    [l, d] = (0, o.useState)(!1),
                    m = (0, o.useMemo)(() => i < n, [i]),
                    v = (0, o.useCallback)(() => {
                        m &&
                            !l &&
                            (d(!0),
                            setTimeout(() => {
                                const e = c(r, i);
                                s((t) => [...t, ...e]);
                                u(i + r), d(!1);
                            }, 800));
                    }, [m, l, i]),
                    h = (0, o.useMemo)(() => ({ isLoading: l, broadcasts: t, hasMoreData: m, onLoadMore: v }), [t, m, l, v]);
                return (0, a.jsx)(_.Provider, { value: h, children: e });
            }
            var d = s(193686);
            const m = 30,
                v = s(496926),
                _ = (0, o.createContext)(null),
                h = () => {
                    const e = (0, o.useContext)(_);
                    if (!e) throw new Error("useLiveOverview must be used within a LiveOverviewProvider");
                    return e;
                };
            function w({ children: e }) {
                const t = (0, i.useRelayEnvironment)(),
                    [s, u] = (0, o.useState)([]),
                    [r, n] = (0, o.useState)(!1),
                    [c, l] = (0, o.useState)(!0),
                    [d, h] = (0, o.useState)({ offset: "0" }),
                    [w, p] = (0, o.useState)({ cursor: { offset: "0" }, limit: m }),
                    y = (0, i.useLazyLoadQuery)(v, w);
                (0, o.useEffect)(() => {
                    const e = (function (e) {
                        const t = (e, t) => (t && e ? t - e : null);
                        return (
                            e.viewer_v2?.user_results?.result?.broadcasts?.broadcasts
                                ?.map((e) => {
                                    const s = e.start_time ?? null,
                                        a = e.end_time ?? null;
                                    return { broadcastId: e.broadcast_id ?? null, state: e.state ?? null, status: e.status ?? null, endTime: a, startTime: s, duration: t(s, a), scheduledStartTime: e.scheduled_start_time ?? null, source: e.source ?? null, imageUrl: e.image_url ?? null, privateChat: e.private_chat ?? null, totalMinsWatched: +(e.counts?.total_counts?.minutes_watched ?? 0), totalViews: +(e.counts?.total_counts?.views ?? 0), totalViewers: +(e.counts?.total_counts?.unique_viewers ?? 0), title: e.status || void 0 };
                                })
                                .filter((e) => null !== e.broadcastId) ?? []
                        );
                    })(y);
                    u((t) => {
                        const s = e.filter((e) => !t.some((t) => t.broadcastId === e.broadcastId));
                        return [...t, ...s];
                    });
                    try {
                        const e = y.viewer_v2,
                            t = e?.user_results,
                            s = t?.result;
                        if (s && "object" == typeof s && null !== s) {
                            const e = s.broadcasts;
                            e && "object" == typeof e && e.cursor ? ("" === e.cursor.offset ? (l(!1), h(null)) : h({ offset: e.cursor.offset })) : (l(!1), h(null));
                        }
                    } catch (e) {
                        l(!1), h(null);
                    }
                }, [y]);
                const b = (0, o.useCallback)(() => {
                        if (!c || !d || r) return;
                        n(!0);
                        const e = { cursor: d, limit: m };
                        (0, i.fetchQuery)(t, v, e)
                            .toPromise()
                            .then(() => {
                                p(e);
                            })
                            .finally(() => {
                                n(!1);
                            });
                    }, [c, d, t, r]),
                    f = (0, o.useMemo)(() => ({ isLoading: r, broadcasts: s, hasMoreData: c, onLoadMore: b }), [s, c, r, b]);
                return (0, a.jsx)(_.Provider, { value: f, children: e });
            }
            function p({ children: e, isMockData: t = !1 }) {
                const [s, i] = (0, o.useState)(!1);
                if (
                    ((0, o.useEffect)(() => {
                        i(!0);
                    }, []),
                    !s)
                )
                    return null;
                const r = t ? l : w;
                return (0, a.jsx)(u.S, { children: (0, a.jsx)(o.Suspense, { fallback: (0, a.jsx)("div", { className: "p-16", children: (0, a.jsx)(d.P, { size: "large" }) }), children: (0, a.jsx)(r, { children: e }) }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-5751b0cc.b8cf5c1a.js.map
