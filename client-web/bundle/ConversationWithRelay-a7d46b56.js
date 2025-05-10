"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-a7d46b56"],
    {
        356821: (e, t, a) => {
            a.d(t, { Z: () => Q });
            var r = a(651868),
                o = a(202784),
                n = a(325686),
                i = (a(585488), a(277660)),
                s = a.n(i),
                l = a(661810),
                c = a(731708),
                m = a(392237),
                d = a(674132),
                p = a.n(d),
                u = a(323265),
                g = a(443781),
                b = a(175989),
                _ = a(98996),
                f = a(952793);
            const h = p().bf96fda4,
                y = b.Z,
                w = Object.freeze({ "13 to 19": p().d267afa2, "20 to 29": p().db81cab0, "30 to 39": p().f173716e, "40 to 49": p().ada329e6, "50 and up": p().j2950694 }),
                v = Object.freeze({ "18 to 24": p().a5c91a8e, "25 to 34": p().cf30cdfa, "35 to 44": p().gf672f7c, "45 to 54": p().jf28b41c, "55 to 64": p().ja78da94, "65 and up": p().bcd9cf68 }),
                P = (e) => {
                    const t = (0, f.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = ((e, t) => {
                            const a = [...(t ? (e?.audience_age ?? []) : []), ...(e?.ad?.creative?.audience_age?.items ?? [])],
                                r = t ? v : w,
                                o = Object.fromEntries(Object.entries(r).map(([e, t], a) => [e, a])),
                                n = Array.from({ length: Object.keys(r).length }, () => null);
                            a.forEach((e) => {
                                const t = e?.breakdown_segment?.segment_name;
                                if (!t || !r[t]) return;
                                const a = o[t];
                                if (n[a]) n[a].value += e.metric_value ?? 0;
                                else {
                                    const o = { value: e.metric_value ?? 0, color: "blue900", label: r[t] };
                                    n[a] = o;
                                }
                            });
                            const i = n.filter(Boolean);
                            return 0 === i.length ? null : i;
                        })(s()(y, e.metricsRef), t);
                    return a ? o.createElement(n.Z, { "aria-label": h, role: "region", style: E.container }, o.createElement(c.ZP, { "aria-label": h, role: "heading", size: "headline1", style: E.title, weight: "heavy" }, h), o.createElement(_.Z, { data: a })) : null;
                },
                E = m.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } }));
            var Z = a(668214),
                x = a(390387);
            const T = (0, Z.Z)().propsFromState(() => ({ lang: x.VT }));
            var k = a(241545),
                C = a(386802),
                L = a(247291);
            const D = p().fa5be588,
                V = u.ZP.isMobileOS() ? p().c65126fe : p().c61c6624,
                z = p().c778d80b,
                M = (e) => {
                    const t = o.useMemo(() => e.organicValue + e.promotedValue, [e.organicValue, e.promotedValue]),
                        a = e.promotedLabel || V;
                    return o.createElement(n.Z, { role: "tooltip", style: G.container }, o.createElement(c.ZP, { align: "left", style: G.title, weight: "bold" }, e.label), o.createElement(c.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, D), o.createElement(c.ZP, { align: "right", size: "subtext2", weight: "medium" }, z(e.organicValue / t)), !e.hidePromotionPercent && e.promotedValue > 0 && o.createElement(o.Fragment, null, o.createElement(c.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, a), o.createElement(c.ZP, { align: "right", size: "subtext2", weight: "medium" }, z(e.promotedValue / t))));
                },
                G = m.default.create((e) => ({ container: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(3, min-content)", padding: m.default.theme.spaces.space8 }, title: { gridColumnStart: "1", gridColumnEnd: "3", marginBottom: m.default.theme.spaces.space4 } })),
                S = p().a8d0108e,
                R = k.Z,
                j = Object.freeze({ Women: { label: p().de323650, color: "blue900", index: 0 }, Men: { label: p().b6ab31be, color: "blue300", index: 1 }, "N/A": { label: p().f05f1838, color: "gray100", index: 2 } }),
                q = (e) => {
                    const t = (0, f.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = s()(R, e.metricsRef),
                        r = o.useMemo(
                            () =>
                                ((e, t, a) => {
                                    const r = e?.audience_gender?.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: e.metric_value ?? 0, promoted_value: 0 })) ?? [],
                                        n = [...(t ? r : []), ...(e?.ad?.creative?.audience_gender?.items.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: 0, promoted_value: e.metric_value ?? 0 })) ?? [])],
                                        i = Array.from({ length: Object.keys(j).length }, () => null);
                                    n.forEach((e) => {
                                        const t = e?.breakdown_segment?.segment_name;
                                        if (!t || !j[t]) return;
                                        const a = j[t].index;
                                        if (i[a]) (i[a].organicValue += e.organic_value), (i[a].promotedValue += e.promoted_value);
                                        else {
                                            const r = { label: t, organicValue: e.organic_value, promotedValue: e.promoted_value };
                                            i[a] = r;
                                        }
                                    });
                                    const s = i.filter(Boolean).map((e) => ({ value: e.organicValue + e.promotedValue, color: j[e.label].color, label: j[e.label].label, popover: o.createElement(M, { hidePromotionPercent: a, label: j[e.label].label, organicValue: e.organicValue, promotedLabel: "Promoted", promotedValue: e.promotedValue }) }));
                                    return 0 === s.length ? null : s;
                                })(a, t, e.hidePromotionPercent),
                            [a, t, e.hidePromotionPercent],
                        ),
                        { isModal: i } = o.useContext(C.Z);
                    return r ? o.createElement(n.Z, { "aria-label": S, role: "region", style: [B.container, i && { width: "75%" }] }, o.createElement(L.Z, { arcWidth: 0.5, data: r, legendPosition: "left", radius: i ? 122 : 81, title: S })) : null;
                },
                B = m.default.create((e) => ({ container: { marginVertical: e.spaces.space24, marginBottom: e.spaces.space40, marginTop: e.spaces.space24 } })),
                O = p().b069d89c,
                F = p().de8bcdaa,
                I = u.ZP.isMobileOS() ? p().cfa1ef16 : p().c14cdb18,
                A = r.Z,
                H = (e) => {
                    const { featureSwitches: t } = o.useContext(g.rC),
                        a = t.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        r = s()(A, e.metricsRef),
                        i = (e) => !!e && e.length > 0,
                        m = i(r?.audience_gender),
                        d = i(r?.audience_age),
                        p = i(r?.audience_top_countries),
                        u = i(r?.ad?.creative?.audience_gender?.items),
                        b = i(r?.ad?.creative?.audience_age?.items),
                        _ = i(r?.ad?.creative?.audience_top_countries?.items),
                        f = a && (m || d || p);
                    return f || u || b || _ ? o.createElement(o.Fragment, null, o.createElement(l.Z, { spacing: "space2" }), o.createElement(n.Z, { style: $.container }, f ? null : o.createElement(c.ZP, { color: "primary900", size: "subtext3", style: $.promotionLabel, weight: "bold" }, I), o.createElement(c.ZP, { "aria-label": O, role: "heading", size: "title3", weight: "heavy" }, O), o.createElement(c.ZP, { color: "gray700", size: "subtext2" }, F), o.createElement(q, { hidePromotionPercent: t.isTrue("responsive_web_qp_new_boost_analytics_enabled"), metricsRef: r }), o.createElement(P, { hidePromotionPercent: t.isTrue("responsive_web_qp_new_boost_analytics_enabled"), metricsRef: r }))) : null;
                },
                $ = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space24, marginTop: e.spaces.space12 }, promotionLabel: { backgroundColor: m.default.theme.colors.primary50, borderRadius: m.default.theme.borderRadii.infinite, paddingVertical: m.default.theme.spaces.space4, paddingHorizontal: m.default.theme.spacesPx.space4 + m.default.theme.spacesPx.space2, maxWidth: "fit-content", marginBottom: e.spaces.space8 } })),
                Q = T(o.memo(H));
        },
        381071: (e, t, a) => {
            a.d(t, { L: () => m });
            var r = a(202784),
                o = a(325686),
                n = a(738545),
                i = a(392237),
                s = a(231503),
                l = a(443781),
                c = a(979673);
            const m = (e) => {
                    const { forceDisplayType: t, label: a, metric: i, popover: m, showPromotionPercentages: p } = e,
                        { featureSwitches: u } = r.useContext(l.rC),
                        g = i?.promoted_value,
                        b = i?.total_value,
                        _ = i?.organic_value;
                    let f = b;
                    "organic" === t ? (f = _) : "boosted" === t ? (f = g) : u.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (f = _);
                    const h = (0, c.jf)(g, b),
                        y = [p && (0, s.O$)(h, !1, u)];
                    return r.createElement(o.Z, { style: d.dataPoint }, r.createElement(n.ZP, { animated: !0, count: f ?? 0, label: a, popover: m, size: "title3", subTextList: y, value: (0, c.fV)(f) }));
                },
                d = i.default.create((e) => ({ dataPoint: { flexGrow: 1 } }));
        },
        209961: (e, t, a) => {
            a.d(t, { Z: () => d, c: () => c });
            var r = a(202784),
                o = a(325686),
                n = a(731708),
                i = a(392237),
                s = a(674132);
            const l = a.n(s)().de4def4e,
                c = (e) => r.createElement(o.Z, null, r.createElement(n.ZP, { color: "gray700", size: "body", weight: "normal" }, e.text), e.showPromotion ? r.createElement(n.ZP, { color: "primary900", size: "subtext3", style: [m.promotionLabel, m.popoverPromotionLabel], weight: "bold" }, l) : null),
                m = i.default.create((e) => ({ popoverPromotionLabel: { width: "fit-content", marginTop: e.spaces.space8 }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 } })),
                d = r.memo(c);
        },
        231503: (e, t, a) => {
            a.d(t, { zg: () => be, O$: () => ge, ZP: () => fe });
            a(571372);
            var r = a(173265),
                o = a(202784),
                n = a(858440),
                i = a(325686),
                s = (a(585488), a(277660)),
                l = a.n(s),
                c = a(731708),
                m = a(392237),
                d = a(386802),
                p = a(674132),
                u = a.n(p),
                g = a(323265),
                b = a(443781),
                _ = a(738321),
                f = a(725516),
                h = a(979673),
                y = a(676763),
                w = a(738545),
                v = a(209961);
            const P = u().b32334a0,
                E = u().h142a79c,
                Z = y.Z;
            const x = (e) => {
                const { forceDisplayType: t, metricRef: a, uniqueImpressionsMetric: r } = e,
                    { featureSwitches: n } = o.useContext(b.rC),
                    i = l()(Z, a),
                    s = (function (e, t) {
                        const a = e?.audience_follow_status?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0,
                            r = e?.ad?.creative?.audience_follow_status?.items?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0;
                        return { nonFollowerCount: t && t.isTrue("responsive_web_qp_new_boost_analytics_enabled") ? a : (a + r ?? 0) };
                    })(i, n),
                    c = r?.total_value,
                    m = r?.organic_value,
                    d = r?.promoted_value;
                let p = c;
                "organic" === t ? (p = m) : "boosted" === t ? (p = d) : n.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (p = m);
                const u = !!i?.ad,
                    g = (0, h.jf)(r?.promoted_value, c),
                    _ = (0, h.jf)(s.nonFollowerCount, c),
                    f = o.createElement(v.c, { showPromotion: u, text: E }),
                    y = o.useMemo(() => [be(_, !0), ...(u ? [ge(g, !0, n)] : [])], [_, g, u, n]);
                return o.createElement(w.ZP, { animated: !0, count: p ?? 0, label: P, popover: f, size: "title1", subTextList: y, value: (0, h.fV)(p) });
            };
            a(136728);
            var T = a(470911),
                k = a(595294);
            const C = u().e3390c1e,
                L = u().aead0975,
                D = [{ value: 0 }, { value: 1 }],
                V = T.Z,
                z = (e, t, a, r) => {
                    const o = ((e) => {
                            const t = [];
                            for (let a = 1; a <= 48; a++) {
                                const r = new Date(e.getTime() + 36e5 * a);
                                r.setMilliseconds(0), r.setSeconds(0), r.setMinutes(0), t.push(r.toISOString());
                            }
                            return t;
                        })(new Date(t)),
                        n =
                            e?.reduce((e, t) => {
                                const a = new Date(t?.timestamp.iso8601_time);
                                return { ...e, [a.toISOString()]: t?.metric_values[0]?.metric_value };
                            }, {}) ?? {};
                    let i = o.map((e) => n[e] ?? 0);
                    var s;
                    a ||
                        (i =
                            (s = i).length % 2 != 0
                                ? s
                                : s.reduce((e, t, a) => {
                                      if (a % 2 == 0) return [...e, t];
                                      {
                                          const a = e.pop();
                                          return [...e, a + t];
                                      }
                                  }, []));
                    const l = r ? 0.0415 : 0.083;
                    i = ((e, t) => {
                        const a = Math.max(...e);
                        return e.map((e) => (e < t * a ? 0 : e));
                    })(i, l);
                    const c = Math.max(...i) || 1,
                        m = i?.map((e) => ({ value: 0 === e ? l * c : e, color: 0 === e ? "gray200" : "gray700" }));
                    return m;
                },
                M = ({ createdAt: e, isModal: t = !1, isXSmall: a = !1, metricsRef: r }) => {
                    const n = l()(V, r),
                        i = n?.organic_metrics_time_series,
                        s = z(i, e, t, a),
                        m = o.useMemo(
                            () =>
                                o.createElement(
                                    c.ZP,
                                    { color: "gray700", size: "body", weight: "normal" },
                                    ((e) => {
                                        const t = e.reduce((e, t) => (t.value > e ? t.value : e), 0);
                                        return L({ maxValue: t < 1 ? 0 : t });
                                    })(s),
                                ),
                            [s],
                        ),
                        d = o.useMemo(() => ({ layout: "fixedBarWidth", spacing: "space1", borderRadii: "small", width: a ? "space2" : "space4" }), [a]);
                    return void 0 === i ? null : o.createElement(k.Z, { barConfig: d, data: s, style: G.chart, ticks: D, title: C, titleDescription: m });
                },
                G = m.default.create((e) => ({ chart: { height: e.spaces.space56 } })),
                S = o.memo(M),
                R = (e) => {
                    const { forceDisplayType: t, label: a, metric: r, popover: n, showPromotionPercentages: i } = e,
                        { featureSwitches: s } = o.useContext(b.rC),
                        l = r?.promoted_value,
                        c = r?.total_value,
                        m = r?.organic_value;
                    let d = c;
                    "organic" === t ? (d = m) : "boosted" === t ? (d = l) : s.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (d = m);
                    const p = (0, h.jf)(l, c),
                        u = [i && ge(p, !0, s)];
                    return o.createElement(w.ZP, { animated: !0, count: d ?? 0, label: a, popover: n, size: "title1", subTextList: u, value: (0, h.fV)(d) });
                };
            var j = a(381071);
            const q = g.ZP.isMobileOS(),
                B = q ? u().f1196a04 : u().bb66e3fc,
                O = u().g512ddcc,
                F = q ? u().j9256524 : u().ceeb3016,
                I = u().bf4558fa,
                A = u().e5fe61e0,
                H = u().c69069e6,
                $ = u().dbe9353e,
                Q = u().a0615bac,
                X = u().d8abdaa4,
                W = u().c72f25a8,
                N = u().aeee0182,
                U = u().acc4cf12,
                J = u().d5f1e554,
                K = u().c7d0d1c4,
                Y = u().b40d33e4,
                ee = u().a4da7724,
                te = u().i2785009,
                ae = u().jedd2771,
                re = u().g33fd6b1,
                oe = q ? ae : re,
                ne = u().b71059c3,
                ie = u().h4cbba3e,
                se = u().f4f0094c,
                le = u().h1cdac12,
                ce = q ? se : le,
                me = u().g884b2cc,
                de = r.Z,
                pe = ({ detailExpands: e, displayType: t, engagements: a, follows: r, impressions: n, isFirstDashboard: s, isModal: l, isXSmall: d, linkClicks: p, m2GridGap: u, m2GridTemplate: g, m3GridGap: b, m3GridTemplate: _, metrics: f, profileVisits: h, showPromotionPercentages: y, subtitle: w, title: P, tweet: E, tweetAnalyticsM3Enabled: Z, tweetHasLink: T, uniqueImpressions: k }) => {
                    const C = (e) => (e ? ("organic" === t ? { ...e, total_value: e.organic_value } : "boosted" === t ? { ...e, total_value: e.promoted_value } : e) : null),
                        L = C(n),
                        D = C(a),
                        V = C(e),
                        z = C(r),
                        M = C(h),
                        G = C(p),
                        q = C(k),
                        B = [Z ? o.createElement(j.L, { forceDisplayType: t, key: A, label: A, metric: L, popover: o.createElement(v.Z, { showPromotion: !1, text: H }), showPromotionPercentages: !1 }) : null, o.createElement(j.L, { forceDisplayType: t, key: $, label: $, metric: D, popover: o.createElement(v.Z, { showPromotion: !1, text: Q }), showPromotionPercentages: !1 }), o.createElement(j.L, { forceDisplayType: t, key: Y, label: Y, metric: V, popover: o.createElement(v.Z, { showPromotion: !1, text: ee }), showPromotionPercentages: !1 }), o.createElement(j.L, { forceDisplayType: t, key: X, label: X, metric: z, popover: o.createElement(v.Z, { showPromotion: !1, text: W }), showPromotionPercentages: !1 }), o.createElement(j.L, { forceDisplayType: t, key: N, label: N, metric: M, popover: o.createElement(v.Z, { showPromotion: !1, text: U }), showPromotionPercentages: !1 }), p && T ? o.createElement(j.L, { forceDisplayType: t, key: J, label: J, metric: G, popover: o.createElement(v.Z, { showPromotion: !1, text: K }), showPromotionPercentages: !1 }) : null].filter((e) => e);
                    return o.createElement(
                        i.Z,
                        { style: [_e.dashboardContainer, s && _e.firstDashboardContainer] },
                        P && o.createElement(o.Fragment, null, o.createElement(c.ZP, { "aria-label": P, role: "heading", size: "title3", style: _e.dashboardTitle, weight: "heavy" }, P), w && o.createElement(c.ZP, { color: "gray700", size: "subtext2", style: _e.dashboardSubtitle }, w)),
                        o.createElement(
                            i.Z,
                            { style: [_e.grid, { gridTemplateColumns: Z ? _ : g, gridGap: Z ? b : u, marginTop: m.default.theme.spaces.space12, marginHorizontal: d ? m.default.theme.spaces.space16 : m.default.theme.spaces.space32 }] },
                            Z ? o.createElement(x, { forceDisplayType: t, metricRef: f, uniqueImpressionsMetric: q }) : o.createElement(R, { forceDisplayType: t, label: A, metric: L, popover: o.createElement(v.Z, { showPromotion: !1, text: H }), showPromotionPercentages: !1 }),
                            Z
                                ? o.createElement(
                                      o.Fragment,
                                      null,
                                      o.createElement(i.Z, { style: { gridColumn: l ? "2/4" : "2" } }, o.createElement(S, { createdAt: E.created_at, isModal: l, isXSmall: d, metricsRef: f })),
                                      B.map((e, t) => o.createElement(i.Z, { key: `minorDataPoint${t}` }, e)),
                                  )
                                : o.createElement(
                                      i.Z,
                                      { style: [_e.minorDataPointsGrid, { gridGap: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                                      B.map((e, t) => o.createElement(i.Z, { key: `minorDataPoint${t}` }, e)),
                                  ),
                        ),
                    );
                },
                ue = ({ metrics: e, tweet: t }) => {
                    const a = (0, f.z)(),
                        { isModal: r } = o.useContext(d.Z),
                        s = (0, n.Z)(),
                        c = o.useContext(b.rC),
                        { featureSwitches: p } = c,
                        u = p.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        g = s.width < m.default.theme.breakpoints.xSmall,
                        y = (t?.entities?.urls && t.entities.urls.length > 0) || !!t?.card?.url,
                        w = l()(de, e);
                    if (!w?.datapoints_grid?.length) throw (a.scribe((0, _.X0)("EmptyOrganicMetricsFromBackend", t.user.id_str, t)), new Error("Tweet Analytics: no organic metrics received from the backend"));
                    const P = !!w?.ad,
                        E = (0, h.Qy)("DetailExpands", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        Z = (0, h.Qy)("Engagements", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        T = Math.max(Z?.organic_value ?? 0, Z?.promoted_value ?? 0),
                        k = Z && { metric_type: "Engagements", organic_value: T - (Z.promoted_value ?? 0), promoted_value: Z.promoted_value, total_value: T },
                        C = (0, h.Qy)("UniqueImpressions", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        L = (0, h.Qy)("Follows", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        D = (0, h.Qy)("Impressions", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        V = (0, h.Qy)("LinkClicks", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        z = (0, h.Qy)("ProfileVisits", w?.datapoints_grid, w?.ad?.creative?.datapoints_grid),
                        M = [u ? o.createElement(j.L, { key: A, label: A, metric: D, popover: o.createElement(v.Z, { showPromotion: P, text: H }), showPromotionPercentages: P }) : null, o.createElement(j.L, { key: $, label: $, metric: k ?? Z, popover: o.createElement(v.Z, { showPromotion: P, text: Q }), showPromotionPercentages: P }), o.createElement(j.L, { key: Y, label: Y, metric: E, popover: o.createElement(v.Z, { showPromotion: P, text: ee }), popoverText: ee, showPromotionPercentages: P }), o.createElement(j.L, { key: X, label: X, metric: L, popover: o.createElement(v.Z, { showPromotion: P, text: W }), showPromotionPercentages: P }), o.createElement(j.L, { key: N, label: N, metric: z, popover: o.createElement(v.Z, { showPromotion: P, text: U }), showPromotionPercentages: P }), y ? o.createElement(j.L, { key: J, label: J, metric: V, popover: o.createElement(v.Z, { showPromotion: P, text: K }), showPromotionPercentages: P }) : null].filter((e) => e),
                        G = r ? m.default.theme.spaces.space40 : g ? m.default.theme.spaces.space24 : `${m.default.theme.spaces.space40} ${m.default.theme.spaces.space24}`,
                        q = g ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40,
                        te = r ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                        ae = r ? " 1fr 2fr" : "1fr",
                        re = (D?.promoted_value ?? 0) > 0 || (Z?.promoted_value ?? 0) > 0 || (C?.promoted_value ?? 0) > 0,
                        oe = p.isTrue("responsive_web_qp_new_boost_analytics_enabled") && P && re;
                    return o.createElement(
                        o.Fragment,
                        null,
                        oe && o.createElement(pe, { detailExpands: E, displayType: "boosted", engagements: Z, follows: L, impressions: D, isFirstDashboard: !0, isModal: r, isXSmall: g, linkClicks: V, m2GridGap: q, m2GridTemplate: ae, m3GridGap: G, m3GridTemplate: te, metrics: w, profileVisits: z, showPromotionPercentages: P, subtitle: F, title: B, tweet: t, tweetAnalyticsM3Enabled: u, tweetHasLink: y, uniqueImpressions: C }),
                        oe && o.createElement(i.Z, { style: _e.dashboardDivider }),
                        oe
                            ? o.createElement(pe, { detailExpands: E, displayType: "organic", engagements: Z, follows: L, impressions: D, isFirstDashboard: !1, isModal: r, isXSmall: g, linkClicks: V, m2GridGap: q, m2GridTemplate: ae, m3GridGap: G, m3GridTemplate: te, metrics: w, profileVisits: z, showPromotionPercentages: P, subtitle: I, title: O, tweet: t, tweetAnalyticsM3Enabled: u, tweetHasLink: y, uniqueImpressions: C })
                            : o.createElement(
                                  i.Z,
                                  { style: [_e.grid, { gridTemplateColumns: u ? te : ae, gridGap: u ? G : q, marginTop: g ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40, marginHorizontal: g ? m.default.theme.spaces.space16 : m.default.theme.spaces.space32 }] },
                                  u ? o.createElement(x, { metricRef: w, uniqueImpressionsMetric: C }) : o.createElement(R, { label: A, metric: D, popover: o.createElement(v.Z, { showPromotion: P, text: H }), showPromotionPercentages: P }),
                                  u
                                      ? o.createElement(
                                            o.Fragment,
                                            null,
                                            o.createElement(i.Z, { style: { gridColumn: r ? "2/4" : "2" } }, o.createElement(S, { createdAt: t.created_at, isModal: r, isXSmall: g, metricsRef: w })),
                                            M.map((e, t) => o.createElement(i.Z, { key: `minorDataPoint${t}` }, e)),
                                        )
                                      : o.createElement(
                                            i.Z,
                                            { style: [_e.minorDataPointsGrid, { gridGap: g ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                                            M.map((e, t) => o.createElement(i.Z, { key: `minorDataPoint${t}` }, e)),
                                        ),
                              ),
                    );
                };
            function ge(e, t, a) {
                if (a && a.isTrue("responsive_web_qp_new_boost_analytics_enabled")) return null;
                const r = e >= 0.045 ? te(e) : ie,
                    n = e >= 0.045 ? oe({ percentage: r }) : ce,
                    s = t ? n : r;
                return e > 0 && o.createElement(i.Z, { "aria-label": n, key: s, style: [_e.subTextListItem, _e.promotionLabel] }, o.createElement(c.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, s));
            }
            function be(e, t) {
                const a = e >= 0.045 ? te(e) : ie,
                    r = e >= 0.045 ? ne({ percentage: a }) : me,
                    n = t ? r : a;
                return e > 0 && o.createElement(i.Z, { "aria-label": r, key: n, style: _e.subTextListItem }, o.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2", weight: "medium" }, n));
            }
            const _e = m.default.create((e) => ({ grid: { display: "grid", marginBottom: e.spaces.space40 }, minorDataPointsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 }, subTextListItem: { flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, dashboardContainer: { marginBottom: e.spaces.space16 }, firstDashboardContainer: { marginTop: e.spaces.space32 }, dashboardTitle: { marginStart: e.spaces.space32, marginBottom: e.spaces.space8 }, dashboardSubtitle: { marginStart: e.spaces.space32, marginBottom: e.spaces.space24 }, dashboardDivider: { height: 1, backgroundColor: e.colors.gray100, marginHorizontal: e.spaces.space32, marginBottom: e.spaces.space16 } })),
                fe = o.memo(ue);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-a7d46b56.b641d63a.js.map
