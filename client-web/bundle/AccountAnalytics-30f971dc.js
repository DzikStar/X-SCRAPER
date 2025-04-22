"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-30f971dc"],
    {
        598705: (e, t, a) => {
            a.d(t, { Bi: () => G, DN: () => b, EB: () => x, I7: () => T, LU: () => _, M5: () => h, Mb: () => J, NW: () => V, Nn: () => O, P: () => j, Q3: () => v, R$: () => y, UM: () => U, ZT: () => B, bK: () => L, c9: () => D, dw: () => K, eS: () => k, fI: () => w, fz: () => Z, od: () => R, pD: () => N, pI: () => F, pw: () => $, r2: () => C, rl: () => z, s: () => f, sf: () => P, uf: () => A, vd: () => I, xy: () => E });
            var n = a(970430),
                r = a(808106),
                i = a(364597),
                o = a(524145),
                s = a(889957),
                u = a(262014),
                l = a(200210),
                c = a(395121),
                m = a(961596),
                d = a(596017),
                g = a(178016),
                p = a(733936);
            function f(e, t) {
                if (!e?.viewer_v2?.user_results?.result || "User" !== e.viewer_v2?.user_results?.result.__typename) return { currentMetricData: {}, prevMetricData: null, currentTotals: {}, prevTotals: null };
                const a = e.viewer_v2.user_results.result.media_metrics_time_series_for_publisher?.metric_values;
                if (!a) return { currentMetricData: {}, prevMetricData: null, currentTotals: {}, prevTotals: null };
                const n = e.viewer_v2.user_results.result.amplify_revenue_by_day;
                return (function (e, t) {
                    const a = b(e),
                        { currentMetricData: n, prevMetricData: r } = w(a, t.from, t.to),
                        i = y(n),
                        o = r ? y(r) : null;
                    return { currentMetricData: n, currentTotals: i, prevMetricData: r, prevTotals: o };
                })(
                    a.map((e, t) => ({ ...e, metric_values: [...e.metric_values, ...(void 0 !== n?.[t]?.revenue?.revenue_usd ? [{ metric_type: "EstimatedRevenue", metric_value: n[t].revenue?.revenue_usd ? +(n[t].revenue.revenue_usd / 1e6).toFixed(2) : 0 }] : [])] })),
                    t,
                );
            }
            function h(e) {
                const t = e.viewer_v2?.user_results?.result;
                if (!t || "User" !== t?.__typename) return [];
                return (t.get_media_filtered?.media_results ?? [])
                    .map((e) => {
                        const t = e.result;
                        let a, n;
                        if (t?.get_media_posts_results) {
                            const e = t.get_media_posts_results;
                            let r = null;
                            if (Array.isArray(e))
                                for (const t of e) {
                                    const e = t?.result;
                                    e?.rest_id && e.legacy?.created_at_ms && (!r || !r.legacy || e.legacy.created_at_ms < r.legacy.created_at_ms) && (r = e);
                                }
                            r?.legacy && ((a = r.rest_id), (n = r.legacy.created_at_ms));
                        }
                        const r = a ? `https://x.com/i/status/${a}` : void 0;
                        return { createdAt: D(t?.media_key?.split("_")[1] ?? ""), duration: t?.media_info?.duration_millis ?? 0, mediaKey: t?.media_key ?? "", id: t?.id ?? "", mediaUrl: t?.media_key ? `https://studio.x.com/library/${t?.media_key}/edit` : "", name: t?.video_media_name ?? "", previewImage: t?.media_info?.preview_image?.original_img_url ?? "", viewCount: t?.video_view_count?.total ?? t?.public_video_view_count ?? 0, estimatedRevenue: t?.amplify_revenue?.revenue_usd ? +(t.amplify_revenue.revenue_usd / 1e6).toFixed(2) : null, monetized: t?.monetized ?? !1, postId: a, postCreatedAt: n, postUrl: r };
                    })
                    .filter((e) => e.mediaKey.startsWith("13_") || e.mediaKey.startsWith("7_"))
                    .sort((e, t) => t.createdAt - e.createdAt);
            }
            function b(e) {
                const t = {};
                return e
                    ? (e.forEach((e) => {
                          const a = {};
                          e.metric_values.forEach((e) => {
                              a[e.metric_type] = e.metric_value ?? 0;
                          }),
                              (a.CreateTweet || a.CreateQuote) && (a.CreatePost = (a.CreateTweet || 0) + (a.CreateQuote || 0)),
                              (a.Engagements || a.Impressions) && (a.EngagementRate = 0 === a.Impressions ? 0 : a.Engagements > a.Impressions ? 1 : a.Engagements / a.Impressions),
                              a.WatchTime && a.PlaybackStart && (a.AverageWatchTime = +a.WatchTime / a.PlaybackStart),
                              a.PlaybackComplete && a.PlaybackStart && (a.VideoCompletionRate = +a.PlaybackComplete / a.PlaybackStart),
                              (t[new Date("object" == typeof e.timestamp ? e.timestamp.iso8601_time : e.timestamp).getTime()] = a);
                      }),
                      t)
                    : t;
            }
            function y(e) {
                const t = {};
                return (
                    Object.values(e).forEach((e) => {
                        Object.entries(e).forEach(([e, a]) => {
                            t[e] = (t[e] || 0) + a;
                        });
                    }),
                    t.Engagements && t.Impressions && (t.EngagementRate = t.Engagements / t.Impressions),
                    t.WatchTime && t.PlaybackStart && (t.AverageWatchTime = +t.WatchTime / t.PlaybackStart),
                    t.PlaybackComplete && t.PlaybackStart && (t.VideoCompletionRate = +t.PlaybackComplete / t.PlaybackStart),
                    t
                );
            }
            function v(e, t) {
                const a = {};
                return (
                    new Set([...Object.keys(e), ...Object.keys(t ?? {})]).forEach((n) => {
                        const r = e[n] || 0,
                            i = t ? t[n] || 0 : null,
                            o = null === i ? null : 0 === i ? (r > 0 ? 100 : 0) : (r - i) / i;
                        a[n] = { current: r, percentChange: o, previous: i };
                    }),
                    a
                );
            }
            function w(e, t, a) {
                const s = {},
                    u = {},
                    l = (0, r.b)(t).getTime(),
                    c = (0, i.i)(a).getTime();
                Object.entries(e).forEach(([e, t]) => {
                    const a = Number.parseInt(e);
                    a >= l && a <= c ? (s[a] = t) : a < l && (u[a] = t);
                });
                const m = (0, o.l)(new n.eJ(), { days: 356 }),
                    d = Object.keys(u).some((e) => Number.parseInt(e) < m.getTime());
                return { currentMetricData: s, prevMetricData: d || 0 === Object.keys(u).length ? null : u };
            }
            function k(e) {
                return [
                    { stage: "Start", value: e.PlaybackStart },
                    { stage: "25%", value: e.Playback25 },
                    { stage: "50%", value: e.Playback50 },
                    { stage: "75%", value: e.Playback75 },
                    { stage: "Complete", value: e.PlaybackComplete },
                ];
            }
            const _ = (e) => {
                    const t = e / 1e3;
                    if ("number" != typeof t || Number.isNaN(t) || t < 0) return "0:00";
                    const a = Math.floor(t / 3600),
                        n = Math.floor((t % 3600) / 60),
                        r = Math.floor(t % 60),
                        i = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
                    return 0 === a && 0 === n ? `0:${i.format(r)}` : 0 === a ? `${n}:${i.format(r)}` : `${a}:${i.format(n)}:${i.format(r)}`;
                },
                T = (e, t) => {
                    const a = Object.entries(e);
                    if (!a.length) return [];
                    const r = (e, t) => {
                        const a = e.reduce((e, [a, n]) => {
                            const r = t(+a);
                            return (
                                e[r]
                                    ? Object.keys(n).forEach((t) => {
                                          const a = t;
                                          "EngagementRate" !== a && e[r] && n[a] && (e[r][a] = (e[r][a] || 0) + n[a]);
                                      })
                                    : (e[r] = { ...n }),
                                e
                            );
                        }, {});
                        return (
                            Object.values(a).forEach((e) => {
                                e.EngagementRate = 0 === e.Impressions ? 0 : e.Engagements > e.Impressions ? 1 : e.Engagements / e.Impressions;
                            }),
                            Object.entries(a).map(([e, t], a) => ({ index: a, timestamp: +e, ...t }))
                        );
                    };
                    switch (t) {
                        case "weekly":
                            return r(a, (e) => (0, s.h)((0, u.z)(new n.eJ(e), { weekStartsOn: 0 })));
                        case "monthly":
                            return r(a, (e) => (0, s.h)((0, l.N)(new n.eJ(e))));
                        case "payPeriod":
                            return r(a, (e) => (0, s.h)(S(new n.eJ(e)).startDate));
                        default:
                            return a.map(([e, t], a) => ({ index: a, timestamp: +e, ...t }));
                    }
                };
            function S(e = new n.eJ(), t = new n.eJ("2024-11-08")) {
                const a = (0, c.L)(e) ? e : (0, m.c)(e),
                    i = (0, r.b)(a),
                    o = (0, r.b)(t),
                    s = Math.abs((0, d.j)(i, o)),
                    u = Math.floor(s / 7) % 2 == 0 ? a : (0, g.E)(a, 7);
                return { endDate: u, startDate: (0, p.k)(u, 13) };
            }
            function C(e, t = "daily", a) {
                const r = new n.eJ(e);
                switch (t) {
                    case "hourly": {
                        const t = new Date(e);
                        return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(t);
                    }
                    case "daily":
                        return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", weekday: "short" }).format(r);
                    case "weekly": {
                        const e = new n.eJ(r),
                            t = new n.eJ(r);
                        return t.setUTCDate(t.getUTCDate() + 6), a && (e.getTime() < a.from.getTime() && e.setTime(a.from.getTime()), t.getTime() > a.to.getTime() && t.setTime(a.to.getTime())), `${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(e)} - ${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }).format(t)}`;
                    }
                    case "payPeriod": {
                        const { endDate: e, startDate: t } = S(r);
                        return a && e.getTime() > a.to.getTime() && e.setTime(a.to.getTime()), `${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(t)} - ${new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }).format(e)}`;
                    }
                    case "monthly":
                        return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC", year: "numeric" }).format(r);
                }
            }
            const j = (e, t = "daily") => {
                const a = new n.eJ(e);
                switch (t) {
                    case "hourly": {
                        const t = new Date(e);
                        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", hour12: !0 }).format(t);
                    }
                    case "daily":
                    case "weekly":
                    case "payPeriod":
                        return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", timeZone: "UTC" }).format(a);
                    case "monthly":
                        return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(a);
                }
            };
            function x(e, t, a = !0) {
                const n = [];
                for (let r = 0; r < 2 * (0, d.j)(e.to, e.from); r++) n.push(M((0, g.E)(e.from, r), t, a));
                return n;
            }
            function I(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }
            function M(e, t, a = !1) {
                const n = {};
                return (
                    t.forEach((e) => {
                        const [t, a] = { Bookmark: [0, 0], CreateQuote: [1, 10], CreateTweet: [1, 10], Engagements: [100, 1e3], Follows: [5, 50], Impressions: [1e3, 1e4], Likes: [50, 500], MediaViews: [500, 5e3], Playback25: [250, 500], Playback50: [100, 250], Playback75: [50, 100], PlaybackComplete: [0, 50], PlaybackStart: [500, 1e3], ProfileVisits: [50, 500], Replies: [10, 100], Retweets: [20, 200], Share: [10, 100], Unfollows: [0, 100], UrlClicks: [30, 300], VideoView: [200, 2e4], VideoViews: [200, 2e3], WatchTime: [0, 1e8] }[e] ?? [0, 100];
                        n[e] = I(t, a);
                    }),
                    a && (n.EstimatedRevenue = I(100, 1e4)),
                    { metric_values: Object.entries(n).map(([e, t]) => ({ metric_type: e, metric_value: t })), timestamp: { iso8601_time: e.toISOString() } }
                );
            }
            function P(e) {
                const t = e / 1e3 / 60,
                    a = t / 60;
                return Math.floor(a) > 0 ? "h" : Math.floor(t) > 0 ? "m" : "s";
            }
            function U(e) {
                const t = e / 1e3,
                    a = t / 60,
                    n = a / 60;
                return Math.floor(n) > 0 ? n : Math.floor(a) > 0 ? a : t;
            }
            function N(e) {
                return e / 1e3 / 60 / 60;
            }
            function D(e) {
                const t = BigInt(e);
                return Number((t >> BigInt(22)) + BigInt(1288834974657));
            }
            function F(e) {
                const t = Math.floor(e / 36e5),
                    a = Math.floor((e % 36e5) / 6e4),
                    n = Math.floor((e % 6e4) / 1e3),
                    r = t.toString().padStart(1, "0"),
                    i = a.toString().padStart(1, "0"),
                    o = n.toString().padStart(2, "0");
                return 0 === t ? `${i}:${o}` : `${r}:${i}:${o}`;
            }
            function E(e, t = e ?? !1) {
                return null === e ? "-" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: t ? "compact" : "standard" }).format(e);
            }
            const A = (e) => new Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact" }).format(e),
                z = (e, t = 1, a = 1) => new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: t, maximumFractionDigits: a }).format(e / 100);
            function B(e, t, a) {
                if (!e) return [];
                const n = e.filter((e) => !("age" === t && !e.age) && !("gender" === t && !e.gender) && !("device" === t && !e.client_app_id) && !("network" === t && !e.is_in_network) && null != e.engagement_type),
                    r = { Likes: "Fav", Replies: "Reply", Follows: "Follow", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Retweets: "TweetCreate", Impressions: "Displayed" },
                    i = { 129032: "iOS", 258901: "Android", 3033300: "Web", 191841: "iOS", 557701: "iOS", 28551627: "Other", 0: "Other" },
                    o = (a ? n.filter((e) => e.engagement_type === r[a]) : n.filter((e) => "Displayed" === e.engagement_type)).reduce((e, a) => {
                        let n;
                        if ("age" === t) n = "Unknown" !== a.age ? a.age : null;
                        else if ("gender" === t) n = "Male" === a.gender ? "Male" : "Female" === a.gender ? "Female" : "Unknown";
                        else if ("device" === t) {
                            if (!a.client_app_id || !(a.client_app_id in i)) return e;
                            n = i[a.client_app_id];
                        } else "network" === t && a.is_in_network && (n = "true" === a.is_in_network ? "inNetwork" : "outNetwork");
                        return n && (e[n] = (e[n] || 0) + a.count), e;
                    }, {});
                if ("device" === t) {
                    ["iOS", "Android", "Web", "Other"].forEach((e) => {
                        o[e] || (o[e] = 0);
                    });
                } else if ("network" === t) {
                    ["inNetwork", "outNetwork"].forEach((e) => {
                        o[e] || (o[e] = 0);
                    });
                }
                const s = Object.values(o).reduce((e, t) => e + t, 0);
                if (0 === s) return "device" === t ? ["iOS", "Android", "Web", "Other"].map((e) => ({ name: e, count: 0, formattedCount: "0", value: 0 })) : "network" === t ? ["inNetwork", "outNetwork"].map((e) => ({ name: e, count: 0, formattedCount: "0", value: 0 })) : [];
                const u = Object.entries(o).map(([e, t]) => ({ count: t, formattedCount: A(t), name: e, value: (t / s) * 100 }));
                u.sort((e, t) => t.value - e.value);
                let l = 100;
                const c = u.map((e) => {
                        const t = Math.floor(10 * e.value) / 10;
                        return (l -= t), { ...e, value: t };
                    }),
                    m = c[0];
                if ((l > 0 && m && (m.value = Number((m.value + l).toFixed(1))), "device" === t)) {
                    return ["iOS", "Android", "Web", "Other"].map((e) => c.find((t) => t.name === e) || { name: e, count: 0, formattedCount: "0", value: 0 });
                }
                return c;
            }
            function O(e, t) {
                return t.map((t) => e.find((e) => e.name === t) || { name: t, count: 0, value: 0, formattedCount: "0" });
            }
            function R(e, t) {
                if (!e) return [];
                const a = e.filter((e) => null != e.country && null != e.engagement_type && "Other" !== e.country),
                    n = { Likes: "Fav", Replies: "Reply", Follows: "Follow", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Retweets: "TweetCreate", Impressions: "Displayed" },
                    r = (t ? a.filter((e) => e.engagement_type === n[t]) : a.filter((e) => "Displayed" === e.engagement_type)).reduce((e, t) => {
                        const a = t.country;
                        return (e[a] = (e[a] || 0) + t.count), e;
                    }, {}),
                    i = Object.values(r).reduce((e, t) => e + t, 0);
                return Object.entries(r)
                    .map(([e, t]) => ({ name: e, count: t, formattedCount: A(t), value: i > 0 ? (t / i) * 100 : 0 }))
                    .filter((e) => e.value >= 0.1)
                    .sort((e, t) => t.value - e.value);
            }
            function L(e) {
                if (e && 2 === e.length)
                    try {
                        const t = e
                                .toUpperCase()
                                .split("")
                                .map((e) => 127397 + e.charCodeAt(0)),
                            a = String.fromCodePoint(...t);
                        return `${"https://abs-0.twimg.com/emoji/v2/svg"}/${[...a].map((e) => e.codePointAt(0)?.toString(16)).join("-")}.svg`;
                    } catch (e) {
                        return;
                    }
            }
            function $(e) {
                return e.from.getTime() === new n.eJ(1970, 0, 1).getTime();
            }
            function G(e) {
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
            function V(e, t) {
                return [e.join(","), ...t.map((e) => e.join(","))].join("\n");
            }
            function J(e, t, a, r, i) {
                if (0 === e.length) return [];
                const o = [...e].sort((e, t) => Number(e.timestamp) - Number(t.timestamp)),
                    s = Number(o[0]?.timestamp) || 0,
                    u = Number(o[o.length - 1]?.timestamp) || 0;
                if (0 === s) return o;
                const l = r ?? s,
                    c = new n.eJ(l);
                let m;
                if (("hourly" === a ? c.setUTCMinutes(0, 0, 0) : c.setUTCHours(0, 0, 0, 0), i)) m = i;
                else {
                    const e = new n.eJ();
                    "hourly" === a ? e.setUTCMinutes(0, 0, 0) : e.setUTCHours(0, 0, 0, 0);
                    const t = e.getTime();
                    m = Math.max(u, t);
                }
                const d = new Map();
                o.forEach((e) => {
                    d.set(e.timestamp, e);
                });
                const g = [];
                for (; c.getTime() <= m; ) {
                    const e = c.getTime().toString();
                    d.has(e) ? g.push(d.get(e)) : g.push(t(e)), "hourly" === a ? c.setUTCHours(c.getUTCHours() + 1) : c.setUTCDate(c.getUTCDate() + 1);
                }
                return g;
            }
            function K(e) {
                const t = e <= 9999 ? "standard" : "compact";
                return new Intl.NumberFormat("en-US", { notation: t, compactDisplay: "short", maximumFractionDigits: 2 }).format(e);
            }
        },
        881120: (e, t, a) => {
            a.d(t, { e: () => n });
            const n = {
                ad: "Andorra",
                ae: "United Arab Emirates",
                af: "Afghanistan",
                ag: "Antigua & Barbuda",
                ai: "Anguilla",
                al: "Albania",
                am: "Armenia",
                ao: "Angola",
                ar: "Argentina",
                as: "American Samoa",
                at: "Austria",
                au: "Australia",
                aw: "Aruba",
                ax: "Åland Islands",
                az: "Azerbaijan",
                ba: "Bosnia & Herzegovina",
                bb: "Barbados",
                bd: "Bangladesh",
                be: "Belgium",
                bf: "Burkina Faso",
                bg: "Bulgaria",
                bh: "Bahrain",
                bi: "Burundi",
                bj: "Benin",
                bl: "St. Barthélemy",
                bm: "Bermuda",
                bn: "Brunei",
                bo: "Bolivia",
                bq: "Caribbean Netherlands",
                br: "Brazil",
                bs: "Bahamas",
                bt: "Bhutan",
                bv: "Bouvet Island",
                bw: "Botswana",
                by: "Belarus",
                bz: "Belize",
                ca: "Canada",
                cc: "Cocos (Keeling) Islands",
                cd: "Congo - Kinshasa",
                cf: "Central African Republic",
                cg: "Congo - Brazzaville",
                ch: "Switzerland",
                ci: "Côte d’Ivoire",
                ck: "Cook Islands",
                cl: "Chile",
                cm: "Cameroon",
                co: "Colombia",
                cr: "Costa Rica",
                cu: "Cuba",
                cv: "Cape Verde",
                cw: "Curaçao",
                cx: "Christmas Island",
                cy: "Cyprus",
                cz: "Czechia",
                de: "Germany",
                dj: "Djibouti",
                dk: "Denmark",
                dm: "Dominica",
                do: "Dominican Republic",
                dz: "Algeria",
                ec: "Ecuador",
                ee: "Estonia",
                eg: "Egypt",
                er: "Eritrea",
                es: "Spain",
                et: "Ethiopia",
                fi: "Finland",
                fj: "Fiji",
                fk: "Falkland Islands",
                fm: "Micronesia",
                fo: "Faroe Islands",
                fr: "France",
                ga: "Gabon",
                gb: "United Kingdom",
                gd: "Grenada",
                ge: "Georgia",
                gf: "French Guiana",
                gg: "Guernsey",
                gh: "Ghana",
                gi: "Gibraltar",
                gl: "Greenland",
                gm: "Gambia",
                gn: "Guinea",
                gp: "Guadeloupe",
                gq: "Equatorial Guinea",
                gr: "Greece",
                gs: "South Georgia & South Sandwich Islands",
                gt: "Guatemala",
                gu: "Guam",
                gw: "Guinea-Bissau",
                gy: "Guyana",
                hk: "Hong Kong SAR China",
                hn: "Honduras",
                hr: "Croatia",
                ht: "Haiti",
                hu: "Hungary",
                id: "Indonesia",
                ie: "Ireland",
                il: "Israel",
                im: "Isle of Man",
                in: "India",
                io: "British Indian Ocean Territory",
                iq: "Iraq",
                ir: "Iran",
                is: "Iceland",
                it: "Italy",
                je: "Jersey",
                jm: "Jamaica",
                jo: "Jordan",
                jp: "Japan",
                ke: "Kenya",
                kg: "Kyrgyzstan",
                kh: "Cambodia",
                ki: "Kiribati",
                km: "Comoros",
                kn: "St. Kitts & Nevis",
                kr: "South Korea",
                kw: "Kuwait",
                ky: "Cayman Islands",
                kz: "Kazakhstan",
                la: "Laos",
                lb: "Lebanon",
                lc: "St. Lucia",
                li: "Liechtenstein",
                lk: "Sri Lanka",
                lr: "Liberia",
                ls: "Lesotho",
                lt: "Lithuania",
                lu: "Luxembourg",
                lv: "Latvia",
                ly: "Libya",
                ma: "Morocco",
                mc: "Monaco",
                md: "Moldova",
                me: "Montenegro",
                mf: "St. Martin",
                mg: "Madagascar",
                mh: "Marshall Islands",
                mk: "Macedonia",
                ml: "Mali",
                mn: "Mongolia",
                mo: "Macau SAR China",
                mp: "Northern Mariana Islands",
                mq: "Martinique",
                mr: "Mauritania",
                ms: "Montserrat",
                mt: "Malta",
                mu: "Mauritius",
                mv: "Maldives",
                mw: "Malawi",
                mx: "Mexico",
                my: "Malaysia",
                mz: "Mozambique",
                na: "Namibia",
                nc: "New Caledonia",
                ne: "Niger",
                nf: "Norfolk Island",
                ng: "Nigeria",
                ni: "Nicaragua",
                nl: "Netherlands",
                no: "Norway",
                np: "Nepal",
                nr: "Nauru",
                nu: "Niue",
                nz: "New Zealand",
                om: "Oman",
                pa: "Panama",
                pe: "Peru",
                pf: "French Polynesia",
                pg: "Papua New Guinea",
                ph: "Philippines",
                pk: "Pakistan",
                pl: "Poland",
                pm: "St. Pierre & Miquelon",
                pn: "Pitcairn Islands",
                pr: "Puerto Rico",
                ps: "Palestinian Territories",
                pt: "Portugal",
                pw: "Palau",
                py: "Paraguay",
                qa: "Qatar",
                re: "Réunion",
                ro: "Romania",
                rs: "Serbia",
                ru: "Russia",
                rw: "Rwanda",
                sa: "Saudi Arabia",
                sb: "Solomon Islands",
                sc: "Seychelles",
                se: "Sweden",
                sg: "Singapore",
                sh: "St. Helena",
                si: "Slovenia",
                sk: "Slovakia",
                sl: "Sierra Leone",
                sm: "San Marino",
                sn: "Senegal",
                so: "Somalia",
                sr: "Suriname",
                st: "São Tomé & Príncipe",
                sv: "El Salvador",
                sx: "Sint Maarten",
                sz: "Swaziland",
                tc: "Turks & Caicos Islands",
                td: "Chad",
                tf: "French Southern Territories",
                tg: "Togo",
                th: "Thailand",
                tj: "Tajikistan",
                tk: "Tokelau",
                tl: "Timor-Leste",
                tm: "Turkmenistan",
                tn: "Tunisia",
                to: "Tonga",
                tr: "Turkey",
                tt: "Trinidad & Tobago",
                tv: "Tuvalu",
                tw: "Taiwan",
                tz: "Tanzania",
                ua: "Ukraine",
                ug: "Uganda",
                us: "United States",
                uy: "Uruguay",
                uz: "Uzbekistan",
                va: "Vatican City",
                vc: "St. Vincent & Grenadines",
                ve: "Venezuela",
                vi: "U.S. Virgin Islands",
                vn: "Vietnam",
                vu: "Vanuatu",
                wf: "Wallis & Futuna",
                ws: "Samoa",
                xk: "Kosovo",
                ye: "Yemen",
                yt: "Mayotte",
                za: "South Africa",
                zm: "Zambia",
                zw: "Zimbabwe",
            };
        },
        755152: (e, t, a) => {
            a.d(t, { q: () => P });
            var n = a(552322),
                r = a(853425),
                i = a(325033),
                o = a(202784),
                s = a(288037);
            function u() {
                const { api: e, state: t } = (0, s.g)();
                return (0, n.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var l = a(436059),
                c = a(383807),
                m = a(373702);
            function d(e) {
                const { api: t, state: a } = (0, s.g)(),
                    r = a.isFullscreen ? (0, n.jsx)(c.Z, {}) : (0, n.jsx)(m.Z, {}),
                    i = "Full screen";
                return (0, n.jsx)(l.z, { "aria-label": i, hoverLabel: i, icon: r, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            var g = a(832179),
                p = a(419374);
            function f(e) {
                const { api: t, state: a } = (0, s.g)(),
                    r = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    i = a.isPictureInPicture ? (0, n.jsx)(g.Z, {}) : (0, n.jsx)(p.Z, {}),
                    o = "Picture-in-Picture";
                return (0, n.jsx)(l.z, { "aria-label": o, disabled: r, hoverLabel: o, icon: i, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var h = a(285446),
                b = a(170028),
                y = a(942027);
            function v(e) {
                const { api: t, state: a } = (0, s.g)(),
                    r = a.ended ? (0, n.jsx)(h.Z, {}) : a.paused ? (0, n.jsx)(b.Z, {}) : (0, n.jsx)(y.Z, {}),
                    i = a.ended ? "Replay" : a.paused ? "Play" : "Pause";
                return (0, n.jsx)(l.z, { "aria-label": i, hoverLabel: i, icon: r, onClick: a.ended || a.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var w = a(110386);
            function k() {
                const [e, t] = (0, o.useState)(!1),
                    [a, r] = (0, o.useState)(0),
                    { api: i, state: u } = (0, s.g)();
                return (0, n.jsx)(w.i, {
                    "aria-label": "Scrubber",
                    maxValue: u.duration,
                    minValue: 0,
                    onChange: function (e) {
                        t(!0), Array.isArray(e) || (r(e), (i.currentTime = e));
                    },
                    onChangeEnd: function () {
                        t(!1);
                    },
                    step: 0.01,
                    value: e ? a : u.currentTime,
                    withThumb: !1,
                });
            }
            var _ = a(941204),
                T = a(983486);
            function S() {
                const { state: e } = (0, s.g)();
                return (0, n.jsx)(_.x, { color: "white", children: `${(0, T.p)(e.currentTime, "seconds")} / ${(0, T.p)(e.duration, "seconds")}` });
            }
            var C = a(584042);
            function j() {
                const { state: e } = (0, s.g)(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, n.jsx)(C._, { children: (0, T.p)(t, "seconds") });
            }
            var x = a(39183),
                I = a(735585);
            function M(e) {
                const { api: t, state: a } = (0, s.g)(),
                    r = a.muted ? (0, n.jsx)(x.Z, {}) : (0, n.jsx)(I.Z, {}),
                    i = a.muted ? "Unmute" : "Mute";
                return (0, n.jsx)(l.z, {
                    "aria-label": i,
                    hoverLabel: i,
                    icon: r,
                    onClick: function () {
                        t.muted = !a.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function P({ children: e, ...t }) {
                const a = (0, o.useRef)(null),
                    s = (0, r.X)(a);
                return (0, n.jsx)(i.J, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: a, children: [(0, n.jsx)(u, {}), e, s ? (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, n.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, n.jsx)(k, {}) }), (0, n.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(v, {}) }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(S, {}), (0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(M, {}), (0, n.jsx)(f, {}), (0, n.jsx)(d, {})] })] })] })] }) : (0, n.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, n.jsx)(j, {}) })] }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-30f971dc.77aa4c1a.js.map
