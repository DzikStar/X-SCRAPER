"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.UserProfile~ondemand.Verified"],
    {
        454948: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r,
                n,
                l,
                o,
                i = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "CountriesBreakdown_metrics",
                    selections: [
                        { alias: null, args: [(r = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (o = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, r, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [n, l, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: o, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            i.hash = "2d403a85148074a9bcb76e1fa79b1b48";
            const s = i;
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                l = a(107267),
                o = a(403556),
                i = a(791632);
            const s = (e) => {
                    const t = (0, l.useHistory)();
                    return n.createElement(o.Z, (0, r.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                c = n.memo(s);
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => l, x: () => o });
            var r = a(674132),
                n = a.n(r);
            const l = { AED: n().d857e44d, ALL: n().cb87e3db, ARS: n().a9d5ffd1, AUD: n().a0e8371d, BAM: n().gcc50dc9, BDT: n().a6a43585, BGN: n().a0cc8f2d, BHD: n().i31c32c5, BRL: n().i7dc69e9, BYR: n().c14a6c03, CAD: n().jaa3d537, CHF: n().a824080b, CLP: n().d9c0bedb, CNY: n().bf8c0613, COP: n().i8163625, CZK: n().adb53ba1, DKK: n().iabf697d, DZD: n().a1a0555b, EGP: n().f266f3d9, EUR: n().a9a8652b, GBP: n().dbf40761, GHS: n().b0d993d9, GTQ: n().ac1308e1, HKD: n().a7889ab3, HRK: n().c614f5cd, HUF: n().i55d57e3, IDR: n().e4b6002b, ILS: n().d28e983b, INR: n().e8c9232d, IQD: n().c8994ae1, ISK: n().f821c2a5, JPY: n().j348b9c9, KES: n().i6f93b9b, KRW: n().c6150bd5, KWD: n().i8921e09, KZT: n().ef239279, LBP: n().hecdb149, MAD: n().fdd039b7, MKD: n().f30c2c37, MXN: n().d9ea7bff, MYR: n().ea3df4b7, NGN: n().jaac21bb, NOK: n().hb435ced, NZD: n().ce699d81, PEN: n().bc56d3d7, PHP: n().f8561913, PKR: n().g6485d53, PLN: n().ff561cc1, QAR: n().b42011d3, RON: n().a6660bcd, RSD: n().f9b80449, RUB: n().gdee4d5d, SAR: n().h36f2103, SEK: n().a19ad037, SGD: n().g713f699, THB: n().ff2e39af, TND: n().be34316d, TRY: n().aef81b75, TWD: n().fcce70a5, TZS: n().jc9d352f, UAH: n().be1cb8c5, UGX: n().j9371501, USD: n().j7d4397d, VEF: n().d61441dd, VND: n().e2a99e97, ZAR: n().f7ce19ab, ZMW: n().b2a0213f },
                o = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: r = !1, strictAmount: n = !1 }) => {
                    const o = n ? e : parseInt(e, 10) / a,
                        s = l[t]?.(o);
                    return r ? i(s) : s;
                },
                i = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        665979: (e, t, a) => {
            a.d(t, { F1: () => p, HM: () => f, Jl: () => u, VS: () => s, YR: () => g, b7: () => l, uf: () => m, xP: () => b, zv: () => c });
            a(130724), a(106406);
            var r = a(674132),
                n = a.n(r);
            const l = (e, t = 0) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + t)),
                o = (e, t = 0) => {
                    const a = e.getUTCDay(),
                        r = new Date(e),
                        n = 7 * t - a;
                    return r.setUTCDate(e.getUTCDate() + n), r.setUTCHours(0, 0, 0, 0), r;
                },
                i = (e) => {
                    const t = new Date(e);
                    return t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0), t;
                },
                s = (e, t) => {
                    const a = Math.abs(t.getTime() - e.getTime());
                    return Math.ceil(a / 864e5);
                },
                c = (e, t) => {
                    if (!e) return {};
                    let a = {};
                    const r = Object.keys(e)[0] || new Date().toISOString(),
                        n = Object.keys(e).at(-1) || new Date().toISOString();
                    for (const s in e) {
                        const c = new Date(s),
                            d = (() => ("daily" === t ? l(c).toISOString() : "weekly" === t ? (o(c).getTime() < new Date(r).getTime() ? new Date(r).toISOString() : o(c).toISOString()) : i(c).toISOString()))();
                        a[d] || (a = { ...a, [d]: { metrics: {}, fromTime: d, toTime: "daily" === t ? l(c, 1).toISOString() : o(c, 1).getTime() > new Date(n).getTime() ? new Date(n).toISOString() : o(c, 1).toISOString() } });
                        const u = e[s]?.metrics;
                        for (const e in u) a[d] && !a[d]?.metrics[e] && (a[d].metrics[e] = 0), a[d] && (a[d].metrics[e] += u[e]);
                    }
                    return a;
                },
                d = (e, t, a, r) => {
                    let n = {};
                    for (let l = new Date(e); l < new Date(t); l.setUTCDate(l.getUTCDate() + 1)) {
                        const e = l.toISOString(),
                            t = new Date(l);
                        t.setUTCDate(t.getUTCDate() + 1), (n = { ...n, [e]: { metrics: a.reduce((t, a) => ({ ...t, [a]: r[e]?.metrics[a] || 0 }), {}), fromTime: e, toTime: t.toISOString() } });
                    }
                    return n;
                },
                u = (e, t, a, r, n) => {
                    const o =
                        e.result.result?.organic_metrics_time_series?.reduce((e, t) => {
                            const a = l(new Date(t.timestamp.iso8601_time)).toISOString();
                            return { ...e, [a]: t.metric_values.reduce((t, r) => ({ ...t, metrics: { ...t.metrics, [String(r.metric_type)]: (t[String(r.metric_type)] || 0) + (r.metric_value || 0) + (e[a]?.metrics?.[String(r.metric_type)] || 0) } }), { metrics: {}, fromTime: "", toTime: "" }) };
                        }, {}) || null;
                    if (!o) return { metricsList: null, compareData: null };
                    return { metricsList: d(a, t, n, o), compareData: r ? d(r, a, n, o) : null };
                },
                m = (e) => {
                    let t = e;
                    const a = ["", "K", "M", "B", "T"];
                    let r = 0;
                    for (; t >= 1e3 && r < a.length - 1; ) (t /= 1e3), r++;
                    const n = Math.round(10 * t) / 10;
                    return n % 1 == 0 ? `${n}${a[r]}` : `${n.toFixed(1)}${a[r]}`;
                },
                p = (e) => {
                    const t = e.getTimezoneOffset();
                    return new Date(e.getTime() + 6e4 * t);
                },
                g = (e, t) => {
                    const a = new Date(e.fromTime);
                    let r = new Date(e.toTime);
                    const i = s(a, r);
                    r = o(a).getTime() === a.getTime() && 7 !== i ? l(r) : l(r, -1);
                    const c = n().jade381b,
                        d = n().ccaa970f,
                        u = n().a20c68af;
                    switch (t) {
                        case "daily":
                            return c(p(a));
                        case "weekly":
                            if (!r || r.getTime() <= a.getTime()) return c(p(a));
                            return `${d(p(a))} - ${c(p(r))}`;
                        case "monthly":
                            return u(p(a));
                        default:
                            return "";
                    }
                };
            const b = (e, t = 4) => {
                    const a = ((e, t) => {
                        const a = e.toString();
                        if (a.length <= 2)
                            return ((e, t) => {
                                let a = e + 1;
                                for (; a % t != 0; ) a += 1;
                                return a;
                            })(e, t);
                        let r = parseInt(a[0], 10),
                            n = parseInt(a[1], 10);
                        return (n = 2 * Math.ceil((n + 1) / 2)), n >= 10 && ((r += 1), (n = 0)), +(r.toString() + n.toString() + "0".repeat(a.length - 2));
                    })(e, t);
                    return (function (e, t) {
                        const a = e / t;
                        return Array.from({ length: t + 1 }, (e, t) => t * a);
                    })(a, t);
                },
                f = (e, t, a) => {
                    let r = {};
                    return e
                        ? (Object.entries(e).forEach(([e, n]) => {
                              const l = t.reduce((e, t) => e + (n?.metrics?.[t] || 0), 0);
                              r = { ...r, [e]: { ...n, metrics: { ...n?.metrics, [a]: l } } };
                          }),
                          r)
                        : e;
                };
        },
        47329: (e, t, a) => {
            a.d(t, { Bb: () => y, E6: () => s, MN: () => h, Mu: () => d, U0: () => g, Z2: () => c, _$: () => i, __: () => p, c6: () => u, m5: () => m, mo: () => b, nj: () => v, nn: () => l, px: () => f, sM: () => o });
            var r = a(674132),
                n = a.n(r);
            const l = ["Impressions", "EngagementRate", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share"],
                o = ["VideoViews", "MediaViews"],
                i = ["Engagements", "Impressions", "LinkClicks", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share"],
                s = ["Engagements", "Impressions", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share", "UrlClicks", "CreateTweet", "CreateQuote"],
                c = ["Engagements", "Impressions", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share", "UrlClicks"],
                d = [
                    { label: n().e5fe61e0, value: "Impressions" },
                    { label: n().d7b8ebaa, value: "Likes" },
                    { label: n().dbe9353e, value: "Engagements" },
                    { label: n().i3145aa0, value: "Bookmark" },
                    { label: n().ifea3114, value: "Share" },
                    { label: n().j761451e, value: "Follows" },
                    { label: n().jdceda60, value: "Replies" },
                    { label: n().ja42739e, value: "Retweets" },
                    { label: n().aeee0182, value: "ProfileVisits" },
                    { label: n().fa4e68ca, value: "Posts" },
                ],
                u = [
                    { label: n().d7b8ebaa, value: "Fav" },
                    { label: n().e5fe61e0, value: "Displayed" },
                    { label: n().i3145aa0, value: "Bookmark" },
                    { label: n().ifea3114, value: "Share" },
                    { label: n().j761451e, value: "Follow" },
                    { label: n().jdceda60, value: "Reply" },
                    { label: n().ja42739e, value: "Retweet" },
                    { label: n().aeee0182, value: "ProfilePic|ScreenName|UserName" },
                ],
                m = [
                    { label: n().fcad1e2e, value: "daily" },
                    { label: n().h9e0dfde, value: "weekly" },
                    { label: n().a3a4e8f8, value: "monthly" },
                ],
                p = [
                    { label: n().eb2e0272, value: "line" },
                    { label: n().e298b08e, value: "bar" },
                ],
                g = { Fav: "Likes", Displayed: "Impressions", Follow: "Follows", Reply: "Replies", Retweet: "Retweets", "ProfilePic|ScreenName|UserName": "ProfileVisits", Bookmark: "Bookmark", Share: "Share" },
                b = (n().bbc6e7c6, n().h88ad664, n().gd139910, n().e08feda2, n().fad772ce, n().a396dd6c, n().j942b16c, n().j3cc0c00, n().c365dcc6, { age13to17: n().fe90a642, age18to24: n().a5c91a8e, age25to34: n().cf30cdfa, age35to44: n().gf672f7c, age45to54: n().jf28b41c, age55to64: n().ja78da94, ageover65: n().g42ea0b0 }),
                f = { true: n().c64974fc, false: n().f21807e0 },
                h = [
                    { label: n().f8321d82, value: "All" },
                    { label: n().fa4e68ca, value: "Posts" },
                    { label: n().jdceda60, value: "Replies" },
                    { label: n().d61b2bcc, value: "CommunityPosts" },
                ],
                y = { 129032: "ios", 258901: "android", 3033300: "web", 191841: "ios", 557701: "ios", 28551627: "other", 0: "other" },
                v = { ios: { label: n().h201c4c2, color: "blue500" }, android: { label: n().i8385a2c, color: "plum500" }, web: { label: n().g33f3050, color: "orange500" }, other: { label: n().c365dcc6, color: "purple500" } };
        },
        464703: (e, t, a) => {
            a.d(t, { iX: () => C, yw: () => v, o: () => T, a: () => h, VS: () => E, Tb: () => y, t_: () => S, MA: () => b, Yg: () => w, FZ: () => g, Hk: () => k });
            a(136728), a(130724);
            var r = a(202784),
                n = a(992942),
                l = a(674132),
                o = a.n(l),
                i = a(270321),
                s = a(47329),
                c = a(731708);
            const d = a(392237).default.create((e) => ({ popover: { margin: e.spaces.space8 } })),
                u = ({ count: e }) => r.createElement(c.ZP, { style: d.popover }, r.createElement(o().I18NFormatMessage, { $i18n: "ff60a139" }, e)),
                m = o().c365dcc6,
                p = { height: "30px", width: "30px", marginEnd: "20px" },
                g = (e) => {
                    const t = { true: 0, false: 0 };
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              e.is_in_network && (t[e.is_in_network] += e.count);
                          }),
                          [
                              { label: s.px.true, value: t.true, color: "blue500", popover: r.createElement(u, { count: t.true }) },
                              { label: s.px.false, value: t.false, color: "plum500", popover: r.createElement(u, { count: t.false }) },
                          ])
                        : [];
                },
                b = (e) => {
                    const t = { Male: 0, Female: 0, Unknown: 0 };
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              const a = e.gender;
                              a && (t[a] += e.count);
                          }),
                          [
                              { label: o().b6ab31be, value: t.Male || 0, color: "blue500", popover: r.createElement(u, { count: t.Male || 0 }) },
                              { label: o().de323650, value: t.Female || 0, color: "plum500", popover: r.createElement(u, { count: t.Female || 0 }) },
                              { label: o().h3525cb8, value: t.Unknown || 0, color: "yellow500", popover: r.createElement(u, { count: t.Unknown || 0 }) },
                          ])
                        : [];
                },
                f = (e, t) => {
                    if ("OTHER" === e) return m;
                    return new Intl.DisplayNames([t], { type: "region" }).of(e);
                },
                h = (e, t) => {
                    const a = {};
                    if (!e || 0 === e.length) return [];
                    let l = 0;
                    e.forEach((e) => {
                        const t = e.country?.toUpperCase();
                        if (!t) return [];
                        (l += e.count), "OTHER" !== t && (a[t] || (a[t] = 0), (a[t] += e.count));
                    });
                    const o = Object.keys(a).map((e) => {
                        return { label: f(e, t), value: a[e] || 0, color: "blue500", icon: ((l = (0, i.v$)(e) || null), l ? r.createElement(n.Z, { source: l, style: p }) : null), popover: r.createElement(u, { count: a[e] || 0 }) };
                        var l;
                    });
                    o.sort((e, t) => t.value - e.value);
                    const s = o.slice(0, Math.min(o.length, 5)),
                        c = s.reduce((e, t) => e + t.value, 0);
                    return l !== c && s.push({ label: m, value: l - c, color: "blue500", icon: null, popover: r.createElement(u, { count: l - c }) }), s;
                },
                y = (e) => {
                    const t = {};
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              const a = e.client_app_id;
                              if (!a || !(a in s.Bb)) return;
                              const r = s.Bb[a];
                              t[r] || (t[r] = 0), (t[r] += e.count);
                          }),
                          Object.keys(s.nj).map((e) => ({ label: s.nj[e].label, value: t[e] || 0, color: s.nj[e].color, popover: r.createElement(u, { count: t[e] || 0 }) })))
                        : [];
                },
                v = (e) => {
                    const t = {};
                    return e && 0 !== e.length
                        ? ([...e].forEach((e) => {
                              const a = e.age?.toLowerCase();
                              a && "Unknown" !== a && (t[a] || (t[a] = 0), (t[a] += e.count));
                          }),
                          Object.keys(s.mo).map((e) => ({ label: s.mo[e], value: t[e] || 0, color: "blue500", popover: r.createElement(u, { count: t[e] || 0 }) })))
                        : [];
                },
                w = (e) => {
                    if (!e || 0 === e.length) return [];
                    let t = !1;
                    const a = Array.from({ length: 24 }, () => Array(7).fill(0));
                    return (
                        e?.forEach((e) => {
                            const { count: r, timestamp: n } = e;
                            r > 0 && (t = !0);
                            const l = new Date(n);
                            a[l.getHours()][(l.getDay() - 1 + 7) % 7] += r;
                        }),
                        t ? a : []
                    );
                },
                k = (e) => (t) => {
                    const a = new Date(e.getTime() - 864e5 * t);
                    return new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate() + 1));
                },
                C = (e) => {
                    const t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
                    return t.setUTCDate(t.getUTCDate() + 1), t.setUTCMilliseconds(t.getUTCMilliseconds() - 1), t;
                },
                E = (e, t) => {
                    const a = Math.abs(t.getTime() - e.getTime());
                    return Math.ceil(a / 864e5);
                },
                T = (e, t) => {
                    const a = E(new Date(t.getTime() + 1), e),
                        r = new Date(e);
                    return r.setDate(e.getDate() - a), r;
                },
                S = (e, t) => {
                    const a = ["Age", "Gender", "EngagementType"];
                    return e && a.push("IsInNetwork"), t && a.push("ClientAppId"), a;
                };
        },
        270321: (e, t, a) => {
            a.d(t, { v$: () => v, yL: () => w });
            var r = a(454948),
                n = a(202784),
                l = a(325686),
                o = (a(585488), a(277660)),
                i = a.n(o),
                s = a(899492),
                c = a(992942),
                d = a(731708),
                u = a(98996),
                m = a(392237),
                p = a(674132),
                g = a.n(p),
                b = a(952793);
            const f = g().a3c544e8,
                h = g().c365dcc6,
                y = r.Z,
                v = (e) => {
                    if (!e || 2 !== e.length) return null;
                    const t = e
                            .toUpperCase()
                            .split("")
                            .map((e) => 127397 + e.charCodeAt(0)),
                        a = String.fromCodePoint(...t);
                    return s.Z.getTwemojiUrl(a);
                },
                w = (e) => {
                    const t = (0, b.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = ((e, t, a) => {
                            const r = [...(a ? (e?.audience_top_countries ?? []) : []), ...(e?.ad?.creative?.audience_top_countries?.items ?? [])],
                                l = (e) => ("Other" === e ? h : new Intl.DisplayNames([t], { type: "region" }).of(e)),
                                o = {};
                            r.forEach((e) => {
                                const t = e.breakdown_segment?.segment_name;
                                if (!t || (2 !== t.length && "Other" !== t)) return null;
                                if (o[t]) o[t].value += e.metric_value ?? 0;
                                else {
                                    const a = v(t),
                                        r = a ? n.createElement(c.Z, { source: a, style: { height: "30px", width: "30px", marginEnd: "20px" } }) : null;
                                    o[t] = { label: l(t), value: e.metric_value ?? 0, color: "blue900", icon: r };
                                }
                            });
                            const i = Object.keys(o)
                                .map((e) => o[e])
                                .filter(Boolean);
                            return 0 === i.length ? null : i;
                        })(i()(y, e.metricsRef), e.lang, t);
                    return a && a.length > 1 ? n.createElement(l.Z, { "aria-label": f, role: "region", style: k.container }, n.createElement(d.ZP, { "aria-label": f, role: "heading", size: "headline1", style: k.title, weight: "heavy" }, f), n.createElement(u.Z, { data: a })) : null;
                },
                k = m.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } }));
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => E });
            var r = a(202784),
                n = a(325686),
                l = a(674132),
                o = a.n(l),
                i = a(212145),
                s = a(568320),
                c = a(123588),
                d = a(731708),
                u = a(280278),
                m = a(392237),
                p = a(635998);
            const g = o().i2785009,
                b = o().c778d80b,
                f = o().d9687d23,
                h = o().ac73eb5a,
                y = o().c5a9f921,
                v = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? r.createElement(n.Z, { style: C.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? r.createElement(p.Z, { label: t, popover: a }) : null) : null;
                },
                w = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? r.createElement(d.ZP, { color: "gray700", style: [C.unitText, t], weight: "medium" }, a) : null;
                },
                k = (e) => {
                    let t,
                        a,
                        { trendValue: l } = e;
                    return void 0 === l ? null : (Math.abs(l) < 0.1 ? ((l = Math.round(1e3 * l) / 1e3), (t = b(l))) : ((l = Math.round(100 * l) / 100), (t = g(l))), (a = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? h : y({ trendValuePositivePercent: t })))(l, t)), l < 0 ? r.createElement(n.Z, { style: C.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": a, style: C.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === l ? r.createElement(n.Z, { style: C.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": a, style: C.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(n.Z, { style: C.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": a, style: C.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                C = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                E = (e) => {
                    const { animated: t, count: a, label: l, popover: o, size: i, subTextList: s, trendValue: c, unit: m, value: p } = e,
                        g = m || void 0 !== c ? C.textWithMargin : void 0,
                        b = void 0 !== c ? C.textWithMargin : void 0;
                    return r.createElement(n.Z, { style: C.dataPoint }, r.createElement(v, { label: l, popover: o }), r.createElement(n.Z, { style: C.valueBar }, t ? r.createElement(u.ZP, { count: a, size: i, style: g, weight: "bold" }, p) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, p), r.createElement(w, { style: b, unit: m }), r.createElement(k, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(202784),
                n = a(325686),
                l = a(674132),
                o = a.n(l),
                i = a(711223),
                s = a(731708),
                c = a(154003),
                d = a(157130),
                u = a(392237);
            const m = o().affbaf62,
                p = o().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                b = (e) => {
                    const { label: t, popover: a } = e;
                    return r.createElement(n.Z, null, r.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(n.Z, { role: "dialog", style: g.popover }, r.createElement(n.Z, { style: g.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(n.Z, { style: g.popoverText }, a), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, r.createElement(n.Z, { role: "button" }, r.createElement(i.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        98996: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                n = a(325686),
                l = a(674132),
                o = a.n(l),
                i = a(536606),
                s = a(157130),
                c = a(392237);
            const d = o().h39fbf33,
                u = o().c778d80b;
            const m = c.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                p = (e) => {
                    const { barConfig: t, data: a, style: l } = e,
                        { normalizer: o, valueLabelsFormatter: c } = (function (e, t) {
                            const a = (function (e, t) {
                                    switch (e) {
                                        case "none":
                                            return 1;
                                        case "max":
                                            return Math.max.apply(
                                                Math,
                                                t.map(function (e) {
                                                    return e.value;
                                                }),
                                            );
                                        default:
                                            return t.map((e) => e.value).reduce((e, t) => e + t);
                                    }
                                })(e?.normalizer ?? "sum", t),
                                r = e?.valueLabelsFormatter ?? u;
                            return { normalizer: a, valueLabelsFormatter: r };
                        })(t, a),
                        p = d({ minValue: c(Math.min(...a.map((e) => e.value)) / o), maxValue: c(Math.max(...a.map((e) => e.value)) / o) }),
                        g = r.useCallback((e) => () => e.popover ?? null, []),
                        b = a.map((e, a) => {
                            const { icon: l, label: d, value: u } = e;
                            if (!d) return null;
                            const p = c(u / o),
                                b = (function (e, t) {
                                    const a = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return a;
                                })(t, e),
                                f = (function (e) {
                                    return { label: e };
                                })(p),
                                h = g(e);
                            return r.createElement(s.Z, { contentStyle: m.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${a}Popover`, preferredVerticalOrientation: "up", renderContent: h, withArrow: !0 }, r.createElement(n.Z, { focusable: !0 }, r.createElement(i.Z, { decoration: l, isCompact: !0, key: `progressBar${a}`, progressBarConfig: b, statConfig: f, title: d, valueCurrent: u, valueMax: o })));
                        });
                    return r.createElement(n.Z, { "aria-label": p, focusable: !0, role: "figure", style: [m.chart, l] }, b);
                };
        },
        536606: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(325686),
                l = a(731708),
                o = a(352924),
                i = a(822399),
                s = a(98538),
                c = a(392237);
            const d = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: d, statConfig: m, title: p, valueCurrent: g, valueMax: b } = e,
                    f = (0, o.F)(),
                    h = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const v = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    w = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(n.Z, { style: u.root }, r.createElement(n.Z, { style: u.decoration }, t), r.createElement(n.Z, { style: u.title }, r.createElement(l.ZP, { size: "subtext2", weight: "medium" }, p)), r.createElement(n.Z, { id: f, style: u.valueLabel }, m.value ? r.createElement(s.Z, null, r.createElement(s.Z.Value, null, m.value), r.createElement(s.Z.Label, null, m.label)) : r.createElement(l.ZP, { weight: "bold" }, m.label)), r.createElement(n.Z, { style: a ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(i.Z, { "aria-describedby": f, "aria-valuemax": b, colorValue: h, progress: g / b, progressStyle: v, style: w })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => S });
            var r = a(807896),
                n = a(202784),
                l = a(194504),
                o = a(235902),
                i = a(392237),
                s = a(325686),
                c = a(674132),
                d = a.n(c),
                u = a(912021),
                m = a(516951),
                p = a(731708),
                g = a(310088),
                b = a(175993),
                f = a(58881),
                h = a(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class k extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: r, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: r, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, r) => {
                            const n = i.default.theme.colors.text,
                                l = i.default.theme.colors.gray700;
                            return a || r ? (e || t ? n : l) : e ? n : l;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: r, children: l, color: o, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: m, isWebRedesign: b, retainScrollPosition: k, style: E, to: T } = this.props,
                        { location: S } = this.state,
                        D = T ? this._getMemoizedLink(T, k) : void 0,
                        x = c ? c(T) : S?.pathname === D?.pathname,
                        Z = f.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        R = b ? "medium" : x ? "bold" : "medium";
                    return n.createElement(h.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: Z, link: D, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? C.pill : C.link, u && x ? C.active : null, d ? (u ? C.compactPill : C.compactLink) : null, m ? C.roundedRect : null, E], withoutInteractiveStyles: b || u }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: u && C.flexGrow }, n.createElement(p.ZP, { size: b ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(x, c, b, u) }, d && C.compactText, b && t && C.focusedText], weight: R }, e && n.createElement(e, { style: C.icon }), l, b || u ? null : n.createElement(s.Z, { style: x && [C.border, { backgroundColor: i.default.theme.colors[o] }] })), a ? n.createElement(g.Z, { count: a, standalone: !0, style: [C.badge, a >= 10 && C.multiDigitBadge, a >= 20 && C.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : r ? n.createElement(g.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (k.contextType = b.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = i.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                E = k,
                T = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: i, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = o.ZP.useProps(),
                        g = p() && !i,
                        b = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...o }, c) => {
                                    const d = g ? [T.linkRedesign, 0 === c && T.firstLinkRedesign, e && 0 === c && T.withNoPaddingStart] : void 0;
                                    return n.createElement(E, (0, r.Z)({ viewType: l }, o, { isCompact: a, isPillLink: i, isRoundedRect: s, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, i, s, g, c],
                        );
                    return n.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: i && T.gap, childrenStyle: !g && T.flexGrow, key: m, style: [i ? null : T.segmentedControl, g && T.leftAligned, d], visibleItemIndex: u }, b);
                };
        },
        165822: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(325686),
                l = a(58881),
                o = a(530732),
                i = a(392237);
            const s = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: a, isCompact: c, link: d, lower: u, onClick: m, stackLayoutLowerStyle: p, stackLayoutUpperStyle: g, upper: b, withInsetFocusRing: f = !0, withInteractiveStyling: h = !1 }) => {
                    const y = l.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        v = r.createElement(r.Fragment, null, r.createElement(n.Z, { style: [s.defaultUpperContainerStyle, g, c && { height: "auto" }] }, b), u ? r.createElement(n.Z, { style: [s.defaultLowerContainerStyle, p] }, u) : null);
                    return r.createElement(o.Z, { "aria-label": e, disabled: a, interactive: h, interactiveStyles: h ? y : void 0, link: d, onClick: m, style: [s.root, t] }, v);
                };
        },
        130724: (e, t, a) => {
            var r = a(23103),
                n = a(492991),
                l = a(639646),
                o = a(643329),
                i = a(609736);
            r(
                { target: "Array", proto: !0 },
                {
                    at: function (e) {
                        var t = n(this),
                            a = l(t),
                            r = o(e),
                            i = r >= 0 ? r : a + r;
                        return i < 0 || i >= a ? void 0 : t[i];
                    },
                },
            ),
                i("at");
        },
        106406: (e, t, a) => {
            var r = a(23103),
                n = a(265968),
                l = a(558885),
                o = a(643329),
                i = a(783326),
                s = a(824229),
                c = n("".charAt);
            r(
                {
                    target: "String",
                    proto: !0,
                    forced: s(function () {
                        return "\ud842" !== "𠮷".at(-2);
                    }),
                },
                {
                    at: function (e) {
                        var t = i(l(this)),
                            a = t.length,
                            r = o(e),
                            n = r >= 0 ? r : a + r;
                        return n < 0 || n >= a ? void 0 : c(t, n);
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.UserProfile~ondemand.Verified.e3ab405a.js.map
