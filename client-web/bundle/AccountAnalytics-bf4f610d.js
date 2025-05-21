"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bf4f610d"],
    {
        598705: (e, t, r) => {
            r.d(t, { Bi: () => V, DN: () => h, EB: () => D, I7: () => T, LU: () => k, M5: () => y, Mb: () => z, NW: () => L, Nn: () => W, P: () => U, Q3: () => w, R$: () => _, UM: () => F, ZT: () => A, bK: () => x, c9: () => E, dw: () => H, eS: () => b, fI: () => v, fz: () => Z, od: () => J, pD: () => O, pI: () => N, pw: () => B, r2: () => C, rl: () => R, s: () => g, sf: () => M, uf: () => $, vd: () => I, xy: () => j });
            var n = r(970430),
                a = r(808106),
                o = r(364597),
                i = r(524145),
                s = r(889957),
                m = r(262014),
                u = r(200210),
                c = r(395121),
                l = r(961596),
                f = r(596017),
                d = r(178016),
                p = r(733936);
            function g(e, t) {
                if (!e?.viewer_v2?.user_results?.result || "User" !== e.viewer_v2?.user_results?.result.__typename) return { currentMetricData: {}, prevMetricData: null, currentTotals: {}, prevTotals: null };
                const r = e.viewer_v2.user_results.result.media_metrics_time_series_for_publisher?.metric_values;
                if (!r) return { currentMetricData: {}, prevMetricData: null, currentTotals: {}, prevTotals: null };
                const n = e.viewer_v2.user_results.result.amplify_revenue_by_day;
                return (function (e, t) {
                    const r = h(e),
                        { currentMetricData: n, prevMetricData: a } = v(r, t.from, t.to),
                        o = _(n),
                        i = a ? _(a) : null;
                    return { currentMetricData: n, currentTotals: o, prevMetricData: a, prevTotals: i };
                })(
                    r.map((e, t) => ({ ...e, metric_values: [...e.metric_values, ...(void 0 !== n?.[t]?.revenue?.revenue_usd ? [{ metric_type: "EstimatedRevenue", metric_value: n[t].revenue?.revenue_usd ? +(n[t].revenue.revenue_usd / 1e6).toFixed(2) : 0 }] : [])] })),
                    t,
                );
            }
            function y(e) {
                const t = e.viewer_v2?.user_results?.result;
                if (!t || "User" !== t?.__typename) return [];
                return (t.get_media_filtered?.media_results ?? [])
                    .map((e) => {
                        const t = e.result;
                        let r, n;
                        if (t?.get_media_posts_results) {
                            const e = t.get_media_posts_results;
                            let a = null;
                            if (Array.isArray(e))
                                for (const t of e) {
                                    const e = t?.result;
                                    e?.rest_id && e.legacy?.created_at_ms && (!a || !a.legacy || e.legacy.created_at_ms < a.legacy.created_at_ms) && (a = e);
                                }
                            a?.legacy && ((r = a.rest_id), (n = a.legacy.created_at_ms));
                        }
                        const a = r ? `https://x.com/i/status/${r}` : void 0;
                        return { createdAt: E(t?.media_key?.split("_")[1] ?? ""), duration: t?.media_info?.duration_millis ?? 0, mediaKey: t?.media_key ?? "", id: t?.id ?? "", mediaUrl: t?.media_key ? `https://studio.x.com/library/${t?.media_key}/edit` : "", name: t?.video_media_name ?? "", previewImage: t?.media_info?.preview_image?.original_img_url ?? "", viewCount: t?.video_view_count?.total ?? t?.public_video_view_count ?? 0, estimatedRevenue: t?.amplify_revenue?.revenue_usd ? +(t.amplify_revenue.revenue_usd / 1e6).toFixed(2) : null, monetized: t?.monetized ?? !1, postId: r, postCreatedAt: n, postUrl: a };
                    })
                    .filter((e) => e.mediaKey.startsWith("13_") || e.mediaKey.startsWith("7_"))
                    .sort((e, t) => t.createdAt - e.createdAt);
            }
            function h(e) {
                const t = {};
                return e
                    ? (e.forEach((e) => {
                          const r = {};
                          e.metric_values.forEach((e) => {
                              r[e.metric_type] = e.metric_value ?? 0;
                          }),
                              (r.CreateTweet || r.CreateQuote) && (r.CreatePost = (r.CreateTweet || 0) + (r.CreateQuote || 0)),
                              (r.Engagements || r.Impressions) && (r.EngagementRate = 0 === r.Impressions ? 0 : r.Engagements > r.Impressions ? 1 : r.Engagements / r.Impressions),
                              r.WatchTime && r.PlaybackStart && (r.AverageWatchTime = +r.WatchTime / r.PlaybackStart),
                              r.PlaybackComplete && r.PlaybackStart && (r.VideoCompletionRate = +r.PlaybackComplete / r.PlaybackStart),
                              (t[new Date("object" == typeof e.timestamp ? e.timestamp.iso8601_time : e.timestamp).getTime()] = r);
                      }),
                      t)
                    : t;
            }
            function _(e) {
                const t = {};
                return (
                    Object.values(e).forEach((e) => {
                        Object.entries(e).forEach(([e, r]) => {
                            t[e] = (t[e] || 0) + r;
                        });
                    }),
                    t.Engagements && t.Impressions && (t.EngagementRate = t.Engagements / t.Impressions),
                    t.WatchTime && t.PlaybackStart && (t.AverageWatchTime = +t.WatchTime / t.PlaybackStart),
                    t.PlaybackComplete && t.PlaybackStart && (t.VideoCompletionRate = +t.PlaybackComplete / t.PlaybackStart),
                    t
                );
            }
            function w(e, t) {
                const r = {};
                return (
                    new Set([...Object.keys(e), ...Object.keys(t ?? {})]).forEach((n) => {
                        const a = e[n] || 0,
                            o = t ? t[n] || 0 : null,
                            i = null === o ? null : 0 === o ? (a > 0 ? 100 : 0) : (a - o) / o;
                        r[n] = { current: a, percentChange: i, previous: o };
                    }),
                    r
                );
            }
            function v(e, t, r) {
                const s = {},
                    m = {},
                    u = (0, a.b)(t).getTime(),
                    c = (0, o.i)(r).getTime();
                Object.entries(e).forEach(([e, t]) => {
                    const r = Number.parseInt(e);
                    r >= u && r <= c ? (s[r] = t) : r < u && (m[r] = t);
                });
                const l = (0, i.l)(new n.eJ(), { days: 356 }),
                    f = Object.keys(m).some((e) => Number.parseInt(e) < l.getTime());
                return { currentMetricData: s, prevMetricData: f || 0 === Object.keys(m).length ? null : m };
            }
            function b(e) {
                return [
                    { stage: "Start", value: e.PlaybackStart },
                    { stage: "25%", value: e.Playback25 },
                    { stage: "50%", value: e.Playback50 },
                    { stage: "75%", value: e.Playback75 },
                    { stage: "Complete", value: e.PlaybackComplete },
                ];
            }
            const k = (e) => {
                    const t = e / 1e3;
                    if ("number" != typeof t || Number.isNaN(t) || t < 0) return "0:00";
                    const r = Math.floor(t / 3600),
                        n = Math.floor((t % 3600) / 60),
                        a = Math.floor(t % 60),
                        o = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
                    return 0 === r && 0 === n ? `0:${o.format(a)}` : 0 === r ? `${n}:${o.format(a)}` : `${r}:${o.format(n)}:${o.format(a)}`;
                },
                T = (e, t) => {
                    const r = Object.entries(e);
                    if (!r.length) return [];
                    const a = (e, t) => {
                        const r = e.reduce((e, [r, n]) => {
                            const a = t(+r);
                            return (
                                e[a]
                                    ? Object.keys(n).forEach((t) => {
                                          const r = t;
                                          "EngagementRate" !== r && e[a] && n[r] && (e[a][r] = (e[a][r] || 0) + n[r]);
                                      })
                                    : (e[a] = { ...n }),
                                e
                            );
                        }, {});
                        return (
                            Object.values(r).forEach((e) => {
                                e.EngagementRate = 0 === e.Impressions ? 0 : e.Engagements > e.Impressions ? 1 : e.Engagements / e.Impressions;
                            }),
                            Object.entries(r).map(([e, t], r) => ({ index: r, timestamp: +e, ...t }))
                        );
                    };
                    switch (t) {
                        case "weekly":
                            return a(r, (e) => (0, s.h)((0, m.z)(new n.eJ(e), { weekStartsOn: 0 })));
                        case "monthly":
                            return a(r, (e) => (0, s.h)((0, u.N)(new n.eJ(e))));
                        case "payPeriod":
                            return a(r, (e) => (0, s.h)(S(new n.eJ(e)).startDate));
                        default:
                            return r.map(([e, t], r) => ({ index: r, timestamp: +e, ...t }));
                    }
                };
            function S(e = new n.eJ(), t = new n.eJ("2024-11-08")) {
                const r = (0, c.L)(e) ? e : (0, l.c)(e),
                    o = (0, a.b)(r),
                    i = (0, a.b)(t),
                    s = Math.abs((0, f.j)(o, i)),
                    m = Math.floor(s / 7) % 2 == 0 ? r : (0, d.E)(r, 7);
                return { endDate: m, startDate: (0, p.k)(m, 13) };
            }
            function C(e, t = "daily", r) {
                const a = new n.eJ(e);
                switch (t) {
                    case "hourly": {
                        const t = new Date(e);
                        return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(t);
                    }
                    case "daily":
                        return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", weekday: "short" }).format(a);
                    case "weekly": {
                        const e = new n.eJ(a),
                            t = new n.eJ(a);
                        return t.setUTCDate(t.getUTCDate() + 6), r && (e.getTime() < r.from.getTime() && e.setTime(r.from.getTime()), t.getTime() > r.to.getTime() && t.setTime(r.to.getTime())), `${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(e)} - ${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }).format(t)}`;
                    }
                    case "payPeriod": {
                        const { endDate: e, startDate: t } = S(a);
                        return r && e.getTime() > r.to.getTime() && e.setTime(r.to.getTime()), `${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(t)} - ${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }).format(e)}`;
                    }
                    case "monthly":
                        return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC", year: "numeric" }).format(a);
                }
            }
            const U = (e, t = "daily") => {
                const r = new n.eJ(e);
                switch (t) {
                    case "hourly": {
                        const t = new Date(e);
                        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", hour12: !0 }).format(t);
                    }
                    case "daily":
                    case "weekly":
                    case "payPeriod":
                        return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(r);
                    case "monthly":
                        return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(r);
                }
            };
            function D(e, t, r = !0) {
                const n = [];
                for (let a = 0; a < 2 * (0, f.j)(e.to, e.from); a++) n.push(P((0, d.E)(e.from, a), t, r));
                return n;
            }
            function I(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }
            function P(e, t, r = !1) {
                const n = {};
                return (
                    t.forEach((e) => {
                        const [t, r] = { Bookmark: [0, 0], CreateQuote: [1, 10], CreateTweet: [1, 10], Engagements: [100, 1e3], Follows: [5, 50], Impressions: [1e3, 1e4], Likes: [50, 500], MediaViews: [500, 5e3], Playback25: [250, 500], Playback50: [100, 250], Playback75: [50, 100], PlaybackComplete: [0, 50], PlaybackStart: [500, 1e3], ProfileVisits: [50, 500], Replies: [10, 100], Retweets: [20, 200], Share: [10, 100], Unfollows: [0, 100], UrlClicks: [30, 300], VideoView: [200, 2e4], VideoViews: [200, 2e3], WatchTime: [0, 1e8] }[e] ?? [0, 100];
                        n[e] = I(t, r);
                    }),
                    r && (n.EstimatedRevenue = I(100, 1e4)),
                    { metric_values: Object.entries(n).map(([e, t]) => ({ metric_type: e, metric_value: t })), timestamp: { iso8601_time: e.toISOString() } }
                );
            }
            function M(e) {
                const t = e / 1e3 / 60,
                    r = t / 60;
                return Math.floor(r) > 0 ? "h" : Math.floor(t) > 0 ? "m" : "s";
            }
            function F(e) {
                const t = e / 1e3,
                    r = t / 60,
                    n = r / 60;
                return Math.floor(n) > 0 ? n : Math.floor(r) > 0 ? r : t;
            }
            function O(e) {
                return e / 1e3 / 60 / 60;
            }
            function E(e) {
                const t = BigInt(e);
                return Number((t >> BigInt(22)) + BigInt(1288834974657));
            }
            function N(e) {
                const t = Math.floor(e / 36e5),
                    r = Math.floor((e % 36e5) / 6e4),
                    n = Math.floor((e % 6e4) / 1e3),
                    a = t.toString().padStart(1, "0"),
                    o = r.toString().padStart(1, "0"),
                    i = n.toString().padStart(2, "0");
                return 0 === t ? `${o}:${i}` : `${a}:${o}:${i}`;
            }
            function j(e, t = e ?? !1) {
                return null === e ? "-" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: t ? "compact" : "standard" }).format(e);
            }
            const $ = (e) => new Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact" }).format(e),
                R = (e, t = 1, r = 1) => new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: t, maximumFractionDigits: r }).format(e / 100);
            function A(e, t, r) {
                if (!e) return [];
                const n = e.filter((e) => !("age" === t && !e.age) && !("gender" === t && !e.gender) && !("device" === t && !e.client_app_id) && !("network" === t && !e.is_in_network) && null != e.engagement_type),
                    a = { Likes: "Fav", Replies: "Reply", Follows: "Follow", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Retweets: "TweetCreate", Impressions: "Displayed" },
                    o = { 129032: "iOS", 258901: "Android", 3033300: "Web", 191841: "iOS", 557701: "iOS", 28551627: "Other", 0: "Other" },
                    i = (r ? n.filter((e) => e.engagement_type === a[r]) : n.filter((e) => "Displayed" === e.engagement_type)).reduce((e, r) => {
                        let n;
                        if ("age" === t) n = "Unknown" !== r.age ? r.age : null;
                        else if ("gender" === t) n = "Male" === r.gender ? "Male" : "Female" === r.gender ? "Female" : "Unknown";
                        else if ("device" === t) {
                            if (!r.client_app_id || !(r.client_app_id in o)) return e;
                            n = o[r.client_app_id];
                        } else "network" === t && r.is_in_network && (n = "true" === r.is_in_network ? "inNetwork" : "outNetwork");
                        return n && (e[n] = (e[n] || 0) + r.count), e;
                    }, {});
                if ("device" === t) {
                    ["iOS", "Android", "Web", "Other"].forEach((e) => {
                        i[e] || (i[e] = 0);
                    });
                } else if ("network" === t) {
                    ["inNetwork", "outNetwork"].forEach((e) => {
                        i[e] || (i[e] = 0);
                    });
                }
                const s = Object.values(i).reduce((e, t) => e + t, 0);
                if (0 === s) return "device" === t ? ["iOS", "Android", "Web", "Other"].map((e) => ({ name: e, count: 0, formattedCount: "0", value: 0 })) : "network" === t ? ["inNetwork", "outNetwork"].map((e) => ({ name: e, count: 0, formattedCount: "0", value: 0 })) : [];
                const m = Object.entries(i).map(([e, t]) => ({ count: t, formattedCount: $(t), name: e, value: (t / s) * 100 }));
                m.sort((e, t) => t.value - e.value);
                let u = 100;
                const c = m.map((e) => {
                        const t = Math.floor(10 * e.value) / 10;
                        return (u -= t), { ...e, value: t };
                    }),
                    l = c[0];
                if ((u > 0 && l && (l.value = Number((l.value + u).toFixed(1))), "device" === t)) {
                    return ["iOS", "Android", "Web", "Other"].map((e) => c.find((t) => t.name === e) || { name: e, count: 0, formattedCount: "0", value: 0 });
                }
                return c;
            }
            function W(e, t) {
                return t.map((t) => e.find((e) => e.name === t) || { name: t, count: 0, value: 0, formattedCount: "0" });
            }
            function J(e, t) {
                if (!e) return [];
                const r = e.filter((e) => null != e.country && null != e.engagement_type && "Other" !== e.country),
                    n = { Likes: "Fav", Replies: "Reply", Follows: "Follow", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Retweets: "TweetCreate", Impressions: "Displayed" },
                    a = (t ? r.filter((e) => e.engagement_type === n[t]) : r.filter((e) => "Displayed" === e.engagement_type)).reduce((e, t) => {
                        const r = t.country;
                        return (e[r] = (e[r] || 0) + t.count), e;
                    }, {}),
                    o = Object.values(a).reduce((e, t) => e + t, 0);
                return Object.entries(a)
                    .map(([e, t]) => ({ name: e, count: t, formattedCount: $(t), value: o > 0 ? (t / o) * 100 : 0 }))
                    .filter((e) => e.value >= 0.1)
                    .sort((e, t) => t.value - e.value);
            }
            function x(e) {
                if (e && 2 === e.length)
                    try {
                        const t = e
                                .toUpperCase()
                                .split("")
                                .map((e) => 127397 + e.charCodeAt(0)),
                            r = String.fromCodePoint(...t);
                        return `${"https://abs-0.twimg.com/emoji/v2/svg"}/${[...r].map((e) => e.codePointAt(0)?.toString(16)).join("-")}.svg`;
                    } catch (e) {
                        return;
                    }
            }
            function B(e) {
                return e.from.getTime() === new n.eJ(1970, 0, 1).getTime();
            }
            function V(e) {
                if (!e) return "";
                const t = e
                    .toString()
                    .replace(/[\n\r\t]+/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();
                return t.includes(",") || t.includes("\n") || t.includes('"') ? `"${t.replace(/"/g, '""')}"` : t;
            }
            function Z(e, t = {}) {
                if (!e) return "";
                return e.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "UTC", ...t });
            }
            function L(e, t) {
                return [e.join(","), ...t.map((e) => e.join(","))].join("\n");
            }
            function z(e, t, r, a, o) {
                if (0 === e.length) return [];
                const i = [...e].sort((e, t) => Number(e.timestamp) - Number(t.timestamp)),
                    s = Number(i[0]?.timestamp) || 0,
                    m = Number(i[i.length - 1]?.timestamp) || 0;
                if (0 === s) return i;
                const u = a ?? s,
                    c = new n.eJ(u);
                let l;
                if (("hourly" === r ? c.setUTCMinutes(0, 0, 0) : c.setUTCHours(0, 0, 0, 0), o)) l = o;
                else {
                    const e = new n.eJ();
                    "hourly" === r ? e.setUTCMinutes(0, 0, 0) : e.setUTCHours(0, 0, 0, 0);
                    const t = e.getTime();
                    l = Math.max(m, t);
                }
                const f = new Map();
                i.forEach((e) => {
                    f.set(e.timestamp, e);
                });
                const d = [];
                for (; c.getTime() <= l; ) {
                    const e = c.getTime().toString();
                    f.has(e) ? d.push(f.get(e)) : d.push(t(e)), "hourly" === r ? c.setUTCHours(c.getUTCHours() + 1) : c.setUTCDate(c.getUTCDate() + 1);
                }
                return d;
            }
            function H(e) {
                const t = e <= 9999 ? "standard" : "compact";
                return new Intl.NumberFormat("en-US", { notation: t, compactDisplay: "short", maximumFractionDigits: 2 }).format(e);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bf4f610d.5db9bada.js.map
