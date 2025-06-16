"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.UserProfile~ondemand.Verified"],
    {
        507651: (e, t, a) => {
            a.d(t, { Z: () => c });
            var l = a(807896),
                r = a(202784),
                n = a(107267),
                o = a(403556),
                i = a(791632);
            const s = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: a, ...s } = e;
                    return r.createElement(o.Z, (0, l.Z)({}, s, { isCompact: a || (0, i.HD)(t) }));
                },
                c = r.memo(s);
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => n, x: () => o });
            var l = a(111677),
                r = a.n(l);
            const n = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                o = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: l = !1, strictAmount: r = !1 }) => {
                    const o = r ? e : parseInt(e, 10) / a,
                        s = n[t]?.(o);
                    return l ? i(s) : s;
                },
                i = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        665979: (e, t, a) => {
            a.d(t, { F1: () => m, HM: () => f, Jl: () => u, VS: () => s, YR: () => g, b7: () => n, uf: () => p, xP: () => b, zv: () => c });
            a(130724), a(106406);
            var l = a(111677),
                r = a.n(l);
            const n = (e, t = 0) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + t)),
                o = (e, t = 0) => {
                    const a = e.getUTCDay(),
                        l = new Date(e),
                        r = 7 * t - a;
                    return l.setUTCDate(e.getUTCDate() + r), l.setUTCHours(0, 0, 0, 0), l;
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
                    const l = Object.keys(e)[0] || new Date().toISOString(),
                        r = Object.keys(e).at(-1) || new Date().toISOString();
                    for (const s in e) {
                        const c = new Date(s),
                            d = (() => ("daily" === t ? n(c).toISOString() : "weekly" === t ? (o(c).getTime() < new Date(l).getTime() ? new Date(l).toISOString() : o(c).toISOString()) : i(c).toISOString()))();
                        a[d] || (a = { ...a, [d]: { metrics: {}, fromTime: d, toTime: "daily" === t ? n(c, 1).toISOString() : o(c, 1).getTime() > new Date(r).getTime() ? new Date(r).toISOString() : o(c, 1).toISOString() } });
                        const u = e[s]?.metrics;
                        for (const e in u) a[d] && !a[d]?.metrics[e] && (a[d].metrics[e] = 0), a[d] && (a[d].metrics[e] += u[e]);
                    }
                    return a;
                },
                d = (e, t, a, l) => {
                    let r = {};
                    for (let n = new Date(e); n < new Date(t); n.setUTCDate(n.getUTCDate() + 1)) {
                        const e = n.toISOString(),
                            t = new Date(n);
                        t.setUTCDate(t.getUTCDate() + 1), (r = { ...r, [e]: { metrics: a.reduce((t, a) => ({ ...t, [a]: l[e]?.metrics[a] || 0 }), {}), fromTime: e, toTime: t.toISOString() } });
                    }
                    return r;
                },
                u = (e, t, a, l, r) => {
                    const o =
                        e.result.result?.organic_metrics_time_series?.reduce((e, t) => {
                            const a = n(new Date(t.timestamp.iso8601_time)).toISOString();
                            return { ...e, [a]: t.metric_values.reduce((t, l) => ({ ...t, metrics: { ...t.metrics, [String(l.metric_type)]: (t[String(l.metric_type)] || 0) + (l.metric_value || 0) + (e[a]?.metrics?.[String(l.metric_type)] || 0) } }), { metrics: {}, fromTime: "", toTime: "" }) };
                        }, {}) || null;
                    if (!o) return { metricsList: null, compareData: null };
                    return { metricsList: d(a, t, r, o), compareData: l ? d(l, a, r, o) : null };
                },
                p = (e) => {
                    let t = e;
                    const a = ["", "K", "M", "B", "T"];
                    let l = 0;
                    for (; t >= 1e3 && l < a.length - 1; ) (t /= 1e3), l++;
                    const r = Math.round(10 * t) / 10;
                    return r % 1 == 0 ? `${r}${a[l]}` : `${r.toFixed(1)}${a[l]}`;
                },
                m = (e) => {
                    const t = e.getTimezoneOffset();
                    return new Date(e.getTime() + 6e4 * t);
                },
                g = (e, t) => {
                    const a = new Date(e.fromTime);
                    let l = new Date(e.toTime);
                    const i = s(a, l);
                    l = o(a).getTime() === a.getTime() && 7 !== i ? n(l) : n(l, -1);
                    const c = r().jade381b,
                        d = r().ccaa970f,
                        u = r().a20c68af;
                    switch (t) {
                        case "daily":
                            return c(m(a));
                        case "weekly":
                            if (!l || l.getTime() <= a.getTime()) return c(m(a));
                            return `${d(m(a))} - ${c(m(l))}`;
                        case "monthly":
                            return u(m(a));
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
                        let l = parseInt(a[0], 10),
                            r = parseInt(a[1], 10);
                        return (r = 2 * Math.ceil((r + 1) / 2)), r >= 10 && ((l += 1), (r = 0)), +(l.toString() + r.toString() + "0".repeat(a.length - 2));
                    })(e, t);
                    return (function (e, t) {
                        const a = e / t;
                        return Array.from({ length: t + 1 }, (e, t) => t * a);
                    })(a, t);
                },
                f = (e, t, a) => {
                    let l = {};
                    return e
                        ? (Object.entries(e).forEach(([e, r]) => {
                              const n = t.reduce((e, t) => e + (r?.metrics?.[t] || 0), 0);
                              l = { ...l, [e]: { ...r, metrics: { ...r?.metrics, [a]: n } } };
                          }),
                          l)
                        : e;
                };
        },
        47329: (e, t, a) => {
            a.d(t, { Bb: () => y, E6: () => s, MN: () => h, Mu: () => d, U0: () => g, Z2: () => c, _$: () => i, __: () => m, c6: () => u, m5: () => p, mo: () => b, nj: () => v, nn: () => n, px: () => f, sM: () => o });
            var l = a(111677),
                r = a.n(l);
            const n = ["Impressions", "EngagementRate", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share"],
                o = ["VideoViews", "MediaViews"],
                i = ["Engagements", "Impressions", "LinkClicks", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share"],
                s = ["Engagements", "Impressions", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share", "UrlClicks", "CreateTweet", "CreateQuote"],
                c = ["Engagements", "Impressions", "ProfileVisits", "Follows", "VideoViews", "Replies", "Likes", "Retweets", "MediaViews", "Bookmark", "Share", "UrlClicks"],
                d = [
                    { label: r().e5fe61e0, value: "Impressions" },
                    { label: r().d7b8ebaa, value: "Likes" },
                    { label: r().dbe9353e, value: "Engagements" },
                    { label: r().i3145aa0, value: "Bookmark" },
                    { label: r().ifea3114, value: "Share" },
                    { label: r().j761451e, value: "Follows" },
                    { label: r().jdceda60, value: "Replies" },
                    { label: r().ja42739e, value: "Retweets" },
                    { label: r().aeee0182, value: "ProfileVisits" },
                    { label: r().fa4e68ca, value: "Posts" },
                ],
                u = [
                    { label: r().d7b8ebaa, value: "Fav" },
                    { label: r().e5fe61e0, value: "Displayed" },
                    { label: r().i3145aa0, value: "Bookmark" },
                    { label: r().ifea3114, value: "Share" },
                    { label: r().j761451e, value: "Follow" },
                    { label: r().jdceda60, value: "Reply" },
                    { label: r().ja42739e, value: "Retweet" },
                    { label: r().aeee0182, value: "ProfilePic|ScreenName|UserName" },
                ],
                p = [
                    { label: r().fcad1e2e, value: "daily" },
                    { label: r().h9e0dfde, value: "weekly" },
                    { label: r().a3a4e8f8, value: "monthly" },
                ],
                m = [
                    { label: r().eb2e0272, value: "line" },
                    { label: r().e298b08e, value: "bar" },
                ],
                g = { Fav: "Likes", Displayed: "Impressions", Follow: "Follows", Reply: "Replies", Retweet: "Retweets", "ProfilePic|ScreenName|UserName": "ProfileVisits", Bookmark: "Bookmark", Share: "Share" },
                b = (r().bbc6e7c6, r().h88ad664, r().gd139910, r().e08feda2, r().fad772ce, r().a396dd6c, r().j942b16c, r().j3cc0c00, r().c365dcc6, { age13to17: r().fe90a642, age18to24: r().a5c91a8e, age25to34: r().cf30cdfa, age35to44: r().gf672f7c, age45to54: r().jf28b41c, age55to64: r().ja78da94, ageover65: r().g42ea0b0 }),
                f = { true: r().c64974fc, false: r().f21807e0 },
                h = [
                    { label: r().f8321d82, value: "All" },
                    { label: r().fa4e68ca, value: "Posts" },
                    { label: r().jdceda60, value: "Replies" },
                    { label: r().d61b2bcc, value: "CommunityPosts" },
                ],
                y = { 129032: "ios", 258901: "android", 3033300: "web", 191841: "ios", 557701: "ios", 28551627: "other", 0: "other" },
                v = { ios: { label: r().h201c4c2, color: "blue500" }, android: { label: r().i8385a2c, color: "plum500" }, web: { label: r().g33f3050, color: "orange500" }, other: { label: r().c365dcc6, color: "purple500" } };
        },
        44988: (e, t, a) => {
            a.d(t, { iX: () => P, yw: () => E, o: () => Z, a: () => C, VS: () => _, Tb: () => D, t_: () => B, MA: () => S, Yg: () => x, FZ: () => k, Hk: () => R });
            a(136728), a(130724);
            var l,
                r,
                n,
                o,
                i = a(202784),
                s = a(992942),
                c = a(111677),
                d = a.n(c),
                u = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "CountriesBreakdown_metrics",
                    selections: [
                        { alias: null, args: [(l = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (n = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (o = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, l, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [r, n, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: o, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            u.hash = "2d403a85148074a9bcb76e1fa79b1b48";
            a(585488), a(277660);
            var p = a(899492),
                m = a(392237);
            a(952793);
            d().a3c544e8, d().c365dcc6;
            const g = (e) => {
                if (!e || 2 !== e.length) return null;
                const t = e
                        .toUpperCase()
                        .split("")
                        .map((e) => 127397 + e.charCodeAt(0)),
                    a = String.fromCodePoint(...t);
                return p.Z.getTwemojiUrl(a);
            };
            m.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } }));
            var b = a(47329),
                f = a(731708);
            const h = m.default.create((e) => ({ popover: { margin: e.spaces.space8 } })),
                y = ({ count: e }) => i.createElement(f.ZP, { style: h.popover }, i.createElement(d().I18NFormatMessage, { $i18n: "ff60a139" }, e)),
                v = d().c365dcc6,
                w = { height: "30px", width: "30px", marginEnd: "20px" },
                k = (e) => {
                    const t = { true: 0, false: 0 };
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              e.is_in_network && (t[e.is_in_network] += e.count);
                          }),
                          [
                              { label: b.px.true, value: t.true, color: "blue500", popover: i.createElement(y, { count: t.true }) },
                              { label: b.px.false, value: t.false, color: "plum500", popover: i.createElement(y, { count: t.false }) },
                          ])
                        : [];
                },
                S = (e) => {
                    const t = { Male: 0, Female: 0, Unknown: 0 };
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              const a = e.gender;
                              a && (t[a] += e.count);
                          }),
                          [
                              { label: d().b6ab31be, value: t.Male || 0, color: "blue500", popover: i.createElement(y, { count: t.Male || 0 }) },
                              { label: d().de323650, value: t.Female || 0, color: "plum500", popover: i.createElement(y, { count: t.Female || 0 }) },
                              { label: d().h3525cb8, value: t.Unknown || 0, color: "yellow500", popover: i.createElement(y, { count: t.Unknown || 0 }) },
                          ])
                        : [];
                },
                T = (e, t) => {
                    if ("OTHER" === e) return v;
                    return new Intl.DisplayNames([t], { type: "region" }).of(e);
                },
                C = (e, t) => {
                    const a = {};
                    if (!e || 0 === e.length) return [];
                    let l = 0;
                    e.forEach((e) => {
                        const t = e.country?.toUpperCase();
                        if (!t) return [];
                        (l += e.count), "OTHER" !== t && (a[t] || (a[t] = 0), (a[t] += e.count));
                    });
                    const r = Object.keys(a).map((e) => {
                        return { label: T(e, t), value: a[e] || 0, color: "blue500", icon: ((l = g(e) || null), l ? i.createElement(s.Z, { source: l, style: w }) : null), popover: i.createElement(y, { count: a[e] || 0 }) };
                        var l;
                    });
                    r.sort((e, t) => t.value - e.value);
                    const n = r.slice(0, Math.min(r.length, 5)),
                        o = n.reduce((e, t) => e + t.value, 0);
                    return l !== o && n.push({ label: v, value: l - o, color: "blue500", icon: null, popover: i.createElement(y, { count: l - o }) }), n;
                },
                D = (e) => {
                    const t = {};
                    return e && 0 !== e.length
                        ? (e.forEach((e) => {
                              const a = e.client_app_id;
                              if (!a || !(a in b.Bb)) return;
                              const l = b.Bb[a];
                              t[l] || (t[l] = 0), (t[l] += e.count);
                          }),
                          Object.keys(b.nj).map((e) => ({ label: b.nj[e].label, value: t[e] || 0, color: b.nj[e].color, popover: i.createElement(y, { count: t[e] || 0 }) })))
                        : [];
                },
                E = (e) => {
                    const t = {};
                    return e && 0 !== e.length
                        ? ([...e].forEach((e) => {
                              const a = e.age?.toLowerCase();
                              a && "Unknown" !== a && (t[a] || (t[a] = 0), (t[a] += e.count));
                          }),
                          Object.keys(b.mo).map((e) => ({ label: b.mo[e], value: t[e] || 0, color: "blue500", popover: i.createElement(y, { count: t[e] || 0 }) })))
                        : [];
                },
                x = (e) => {
                    if (!e || 0 === e.length) return [];
                    let t = !1;
                    const a = Array.from({ length: 24 }, () => Array(7).fill(0));
                    return (
                        e?.forEach((e) => {
                            const { count: l, timestamp: r } = e;
                            l > 0 && (t = !0);
                            const n = new Date(r);
                            a[n.getHours()][(n.getDay() - 1 + 7) % 7] += l;
                        }),
                        t ? a : []
                    );
                },
                R = (e) => (t) => {
                    const a = new Date(e.getTime() - 864e5 * t);
                    return new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate() + 1));
                },
                P = (e) => {
                    const t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
                    return t.setUTCDate(t.getUTCDate() + 1), t.setUTCMilliseconds(t.getUTCMilliseconds() - 1), t;
                },
                _ = (e, t) => {
                    const a = Math.abs(t.getTime() - e.getTime());
                    return Math.ceil(a / 864e5);
                },
                Z = (e, t) => {
                    const a = _(new Date(t.getTime() + 1), e),
                        l = new Date(e);
                    return l.setDate(e.getDate() - a), l;
                },
                B = (e, t) => {
                    const a = ["Age", "Gender", "EngagementType"];
                    return e && a.push("IsInNetwork"), t && a.push("ClientAppId"), a;
                };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => T });
            var l = a(202784),
                r = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(212145),
                s = a(568320),
                c = a(123588),
                d = a(731708),
                u = a(280278),
                p = a(392237),
                m = a(635998);
            const g = o().i2785009,
                b = o().c778d80b,
                f = o().d9687d23,
                h = o().ac73eb5a,
                y = o().c5a9f921,
                v = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? l.createElement(r.Z, { style: S.labelBar }, l.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? l.createElement(m.Z, { label: t, popover: a }) : null) : null;
                },
                w = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? l.createElement(d.ZP, { color: "gray700", style: [S.unitText, t], weight: "medium" }, a) : null;
                },
                k = (e) => {
                    let t,
                        a,
                        { trendValue: n } = e;
                    return void 0 === n ? null : (Math.abs(n) < 0.1 ? ((n = Math.round(1e3 * n) / 1e3), (t = b(n))) : ((n = Math.round(100 * n) / 100), (t = g(n))), (a = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? h : y({ trendValuePositivePercent: t })))(n, t)), n < 0 ? l.createElement(r.Z, { style: S.trendBar, testID: "trendLabel" }, l.createElement(i.default, { "aria-label": a, style: S.trendIconNeg }), l.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === n ? l.createElement(r.Z, { style: S.trendBar, testID: "trendLabel" }, l.createElement(s.default, { "aria-label": a, style: S.trendIconZero }), l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : l.createElement(r.Z, { style: S.trendBar, testID: "trendLabel" }, l.createElement(c.default, { "aria-label": a, style: S.trendIconPos }), l.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                S = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                T = (e) => {
                    const { animated: t, count: a, label: n, popover: o, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        g = p || void 0 !== c ? S.textWithMargin : void 0,
                        b = void 0 !== c ? S.textWithMargin : void 0;
                    return l.createElement(r.Z, { style: S.dataPoint }, l.createElement(v, { label: n, popover: o }), l.createElement(r.Z, { style: S.valueBar }, t ? l.createElement(u.ZP, { count: a, size: i, style: g, weight: "bold" }, m) : l.createElement(d.ZP, { size: i, style: g, weight: "bold" }, m), l.createElement(w, { style: b, unit: p }), l.createElement(k, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => b });
            var l = a(202784),
                r = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(711223),
                s = a(731708),
                c = a(154003),
                d = a(157130),
                u = a(392237);
            const p = o().affbaf62,
                m = o().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                b = (e) => {
                    const { label: t, popover: a } = e;
                    return l.createElement(r.Z, null, l.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => l.createElement(r.Z, { role: "dialog", style: g.popover }, l.createElement(r.Z, { style: g.popoverTitle }, l.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), l.createElement(r.Z, { style: g.popoverText }, a), l.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, l.createElement(r.Z, { role: "button" }, l.createElement(i.default, { "aria-label": p, style: g.iconInformation }))));
                };
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => D });
            var l = a(807896),
                r = a(202784),
                n = a(194504),
                o = a(235902),
                i = a(392237),
                s = a(325686),
                c = a(111677),
                d = a.n(c),
                u = a(912021),
                p = a(516951),
                m = a(731708),
                g = a(310088),
                b = a(175993),
                f = a(58881),
                h = a(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: l, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: l, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, l) => {
                            const r = i.default.theme.colors.text,
                                n = i.default.theme.colors.gray700;
                            return a || l ? (e || t ? r : n) : e ? r : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: l, children: n, color: o, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: k, style: T, to: C } = this.props,
                        { location: D } = this.state,
                        E = C ? this._getMemoizedLink(C, k) : void 0,
                        x = c ? c(C) : D?.pathname === E?.pathname,
                        R = f.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        P = b ? "medium" : x ? "bold" : "medium";
                    return r.createElement(h.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: R, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && x ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, T], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: u && S.flexGrow }, r.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(x, c, b, u) }, d && S.compactText, b && t && S.focusedText, u && S.pillTextStyle, u && x && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: P }, e && r.createElement(e, { style: S.icon }), n, b || u ? null : r.createElement(s.Z, { style: x && [S.border, { backgroundColor: i.default.theme.colors[o] }] })), a ? r.createElement(g.Z, { count: a, standalone: !0, style: [S.badge, a >= 10 && S.multiDigitBadge, a >= 20 && S.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : l ? r.createElement(g.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (k.contextType = b.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = i.default.create((e) => ({
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
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                T = k,
                C = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                D = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: i, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = o.ZP.useProps(),
                        g = m() && !i,
                        b = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: n, ...o }, c) => {
                                    const d = g ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return r.createElement(T, (0, l.Z)({ viewType: n }, o, { isCompact: a, isPillLink: i, isRoundedRect: s, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, i, s, g, c],
                        );
                    return r.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: i && C.gap, childrenStyle: !g && C.flexGrow, key: p, style: [i ? null : C.segmentedControl, g && C.leftAligned, d], visibleItemIndex: u }, b);
                };
        },
        165822: (e, t, a) => {
            a.d(t, { Z: () => c });
            var l = a(202784),
                r = a(325686),
                n = a(58881),
                o = a(530732),
                i = a(392237);
            const s = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: a, interactiveStyles: c, isCompact: d, link: u, lower: p, onClick: m, stackLayoutLowerStyle: g, stackLayoutUpperStyle: b, upper: f, withInsetFocusRing: h = !0, withInteractiveStyling: y = !1 }) => {
                    const v = c ?? n.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: h }),
                        w = l.createElement(l.Fragment, null, l.createElement(r.Z, { style: [s.defaultUpperContainerStyle, b, d && { height: "auto" }] }, f), p ? l.createElement(r.Z, { style: [s.defaultLowerContainerStyle, g] }, p) : null);
                    return l.createElement(o.Z, { "aria-label": e, disabled: a, interactive: y, interactiveStyles: y ? v : void 0, link: u, onClick: m, style: [s.root, t] }, w);
                };
        },
        130724: (e, t, a) => {
            var l = a(23103),
                r = a(492991),
                n = a(639646),
                o = a(643329),
                i = a(609736);
            l(
                { target: "Array", proto: !0 },
                {
                    at: function (e) {
                        var t = r(this),
                            a = n(t),
                            l = o(e),
                            i = l >= 0 ? l : a + l;
                        return i < 0 || i >= a ? void 0 : t[i];
                    },
                },
            ),
                i("at");
        },
        106406: (e, t, a) => {
            var l = a(23103),
                r = a(265968),
                n = a(558885),
                o = a(643329),
                i = a(783326),
                s = a(824229),
                c = r("".charAt);
            l(
                {
                    target: "String",
                    proto: !0,
                    forced: s(function () {
                        return "\ud842" !== "𠮷".at(-2);
                    }),
                },
                {
                    at: function (e) {
                        var t = i(n(this)),
                            a = t.length,
                            l = o(e),
                            r = l >= 0 ? l : a + l;
                        return r < 0 || r >= a ? void 0 : c(t, r);
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.UserProfile~ondemand.Verified.ea17199a.js.map
