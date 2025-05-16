"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-a7d46b56"],
    {
        16176: (e, t, a) => {
            a.r(t), a.d(t, { ConversationAnalyticsScreen: () => Vr, default: () => zr });
            var r = a(202784),
                o = a(325686),
                i = a(688715),
                n = a(731708),
                s = a(782261),
                l = a(420740),
                c = a(529356),
                m = a(392237),
                d = a(674132),
                p = a.n(d),
                u = a(323265),
                g = a(290402),
                b = a(980407),
                f = a(443781),
                h = a(301758),
                w = a(702001),
                _ = a(738321),
                y = a(312771),
                E = a(71620),
                v = a(668214),
                P = a(549116),
                Z = a(852657),
                x = a(390387),
                I = a(836255);
            const C = "CONVERSATION_ANALYTICS_SCREEN",
                T = (e, t) => t.match.params.statusId,
                k = (e, t) => I.Z.selectHydrated(e, T(0, t)),
                S = (e, t) => (0, Z.oo)(e, T(0, t)),
                V = (e, t) => I.Z.selectFetchStatus(e, T(0, t)),
                D = (e, t) => (0, Z.XJ)(e, T(0, t)),
                z = (e, t) => (0, P.Yt)(e, T(0, t)),
                B = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: V, liveCounts: z, quickPromoteEligibilityFetchStatus: S, statusId: T, tweet: k, quickPromoteEligibility: D, isOwnerOrAdminAllowed: x.Js }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)(C), fetchTweetIfNeeded: I.Z.fetchOneIfNeeded, fetchQuickPromoteEligibilityIfNeeded: Z.E6 }))
                    .withAnalytics({ page: "tweet", section: "analytics", component: "ConversationAnalytics" });
            a(571372);
            var R = a(999325),
                A = (a(585488), a(437429)),
                L = a.n(A),
                G = a(10622),
                M = a.n(G),
                F = a(750410),
                q = a(661810),
                O = a(301410),
                N = a(952793),
                W = a(566220),
                j = a(163889),
                H = a(16222),
                $ = a(725516),
                Q = a(651868),
                U = a(277660),
                X = a.n(U),
                J = a(175989),
                Y = a(98996);
            const K = p().bf96fda4,
                ee = J.Z,
                te = Object.freeze({ "13 to 19": p().d267afa2, "20 to 29": p().db81cab0, "30 to 39": p().f173716e, "40 to 49": p().ada329e6, "50 and up": p().j2950694 }),
                ae = Object.freeze({ "18 to 24": p().a5c91a8e, "25 to 34": p().cf30cdfa, "35 to 44": p().gf672f7c, "45 to 54": p().jf28b41c, "55 to 64": p().ja78da94, "65 and up": p().bcd9cf68 }),
                re = (e) => {
                    const t = (0, N.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = ((e, t) => {
                            const a = [...(t ? (e?.audience_age ?? []) : []), ...(e?.ad?.creative?.audience_age?.items ?? [])],
                                r = t ? ae : te,
                                o = Object.fromEntries(Object.entries(r).map(([e, t], a) => [e, a])),
                                i = Array.from({ length: Object.keys(r).length }, () => null);
                            a.forEach((e) => {
                                const t = e?.breakdown_segment?.segment_name;
                                if (!t || !r[t]) return;
                                const a = o[t];
                                if (i[a]) i[a].value += e.metric_value ?? 0;
                                else {
                                    const o = { value: e.metric_value ?? 0, color: "blue900", label: r[t] };
                                    i[a] = o;
                                }
                            });
                            const n = i.filter(Boolean);
                            return 0 === n.length ? null : n;
                        })(X()(ee, e.metricsRef), t);
                    return a ? r.createElement(o.Z, { "aria-label": K, role: "region", style: oe.container }, r.createElement(n.ZP, { "aria-label": K, role: "heading", size: "headline1", style: oe.title, weight: "heavy" }, K), r.createElement(Y.Z, { data: a })) : null;
                },
                oe = m.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } })),
                ie = (0, v.Z)().propsFromState(() => ({ lang: x.VT }));
            var ne = a(241545),
                se = a(386802),
                le = a(247291);
            const ce = p().fa5be588,
                me = u.ZP.isMobileOS() ? p().c65126fe : p().c61c6624,
                de = p().c778d80b,
                pe = (e) => {
                    const t = r.useMemo(() => e.organicValue + e.promotedValue, [e.organicValue, e.promotedValue]),
                        a = e.promotedLabel || me;
                    return r.createElement(o.Z, { role: "tooltip", style: ue.container }, r.createElement(n.ZP, { align: "left", style: ue.title, weight: "bold" }, e.label), r.createElement(n.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, ce), r.createElement(n.ZP, { align: "right", size: "subtext2", weight: "medium" }, de(e.organicValue / t)), !e.hidePromotionPercent && e.promotedValue > 0 && r.createElement(r.Fragment, null, r.createElement(n.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, a), r.createElement(n.ZP, { align: "right", size: "subtext2", weight: "medium" }, de(e.promotedValue / t))));
                },
                ue = m.default.create((e) => ({ container: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(3, min-content)", padding: m.default.theme.spaces.space8 }, title: { gridColumnStart: "1", gridColumnEnd: "3", marginBottom: m.default.theme.spaces.space4 } })),
                ge = p().a8d0108e,
                be = ne.Z,
                fe = Object.freeze({ Women: { label: p().de323650, color: "blue900", index: 0 }, Men: { label: p().b6ab31be, color: "blue300", index: 1 }, "N/A": { label: p().f05f1838, color: "gray100", index: 2 } }),
                he = (e) => {
                    const t = (0, N.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = X()(be, e.metricsRef),
                        i = r.useMemo(
                            () =>
                                ((e, t, a) => {
                                    const o = e?.audience_gender?.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: e.metric_value ?? 0, promoted_value: 0 })) ?? [],
                                        i = [...(t ? o : []), ...(e?.ad?.creative?.audience_gender?.items.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: 0, promoted_value: e.metric_value ?? 0 })) ?? [])],
                                        n = Array.from({ length: Object.keys(fe).length }, () => null);
                                    i.forEach((e) => {
                                        const t = e?.breakdown_segment?.segment_name;
                                        if (!t || !fe[t]) return;
                                        const a = fe[t].index;
                                        if (n[a]) (n[a].organicValue += e.organic_value), (n[a].promotedValue += e.promoted_value);
                                        else {
                                            const r = { label: t, organicValue: e.organic_value, promotedValue: e.promoted_value };
                                            n[a] = r;
                                        }
                                    });
                                    const s = n.filter(Boolean).map((e) => ({ value: e.organicValue + e.promotedValue, color: fe[e.label].color, label: fe[e.label].label, popover: r.createElement(pe, { hidePromotionPercent: a, label: fe[e.label].label, organicValue: e.organicValue, promotedLabel: "Promoted", promotedValue: e.promotedValue }) }));
                                    return 0 === s.length ? null : s;
                                })(a, t, e.hidePromotionPercent),
                            [a, t, e.hidePromotionPercent],
                        ),
                        { isModal: n } = r.useContext(se.Z);
                    return i ? r.createElement(o.Z, { "aria-label": ge, role: "region", style: [we.container, n && { width: "75%" }] }, r.createElement(le.Z, { arcWidth: 0.5, data: i, legendPosition: "left", radius: n ? 122 : 81, title: ge })) : null;
                },
                we = m.default.create((e) => ({ container: { marginVertical: e.spaces.space24, marginBottom: e.spaces.space40, marginTop: e.spaces.space24 } })),
                _e = p().b069d89c,
                ye = p().de8bcdaa,
                Ee = u.ZP.isMobileOS() ? p().cfa1ef16 : p().c14cdb18,
                ve = Q.Z,
                Pe = (e) => {
                    const { featureSwitches: t } = r.useContext(f.rC),
                        a = t.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        i = X()(ve, e.metricsRef),
                        s = (e) => !!e && e.length > 0,
                        l = s(i?.audience_gender),
                        c = s(i?.audience_age),
                        m = s(i?.audience_top_countries),
                        d = s(i?.ad?.creative?.audience_gender?.items),
                        p = s(i?.ad?.creative?.audience_age?.items),
                        u = s(i?.ad?.creative?.audience_top_countries?.items),
                        g = a && (l || c || m);
                    return g || d || p || u ? r.createElement(r.Fragment, null, r.createElement(q.Z, { spacing: "space2" }), r.createElement(o.Z, { style: Ze.container }, g ? null : r.createElement(n.ZP, { color: "primary900", size: "subtext3", style: Ze.promotionLabel, weight: "bold" }, Ee), r.createElement(n.ZP, { "aria-label": _e, role: "heading", size: "title3", weight: "heavy" }, _e), r.createElement(n.ZP, { color: "gray700", size: "subtext2" }, ye), r.createElement(he, { hidePromotionPercent: t.isTrue("responsive_web_qp_new_boost_analytics_enabled"), metricsRef: i }), r.createElement(re, { hidePromotionPercent: t.isTrue("responsive_web_qp_new_boost_analytics_enabled"), metricsRef: i }))) : null;
                },
                Ze = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space24, marginTop: e.spaces.space12 }, promotionLabel: { backgroundColor: m.default.theme.colors.primary50, borderRadius: m.default.theme.borderRadii.infinite, paddingVertical: m.default.theme.spaces.space4, paddingHorizontal: m.default.theme.spacesPx.space4 + m.default.theme.spacesPx.space2, maxWidth: "fit-content", marginBottom: e.spaces.space8 } })),
                xe = ie(r.memo(Pe));
            var Ie = a(173265),
                Ce = a(858440),
                Te = a(979673),
                ke = a(676763),
                Se = a(738545);
            const Ve = p().de4def4e,
                De = (e) => r.createElement(o.Z, null, r.createElement(n.ZP, { color: "gray700", size: "body", weight: "normal" }, e.text), e.showPromotion ? r.createElement(n.ZP, { color: "primary900", size: "subtext3", style: [ze.promotionLabel, ze.popoverPromotionLabel], weight: "bold" }, Ve) : null),
                ze = m.default.create((e) => ({ popoverPromotionLabel: { width: "fit-content", marginTop: e.spaces.space8 }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 } })),
                Be = r.memo(De),
                Re = p().b32334a0,
                Ae = p().h142a79c,
                Le = ke.Z;
            const Ge = (e) => {
                const { forceDisplayType: t, metricRef: a, uniqueImpressionsMetric: o } = e,
                    { featureSwitches: i } = r.useContext(f.rC),
                    n = X()(Le, a),
                    s = (function (e, t) {
                        const a = e?.audience_follow_status?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0,
                            r = e?.ad?.creative?.audience_follow_status?.items?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0;
                        return { nonFollowerCount: t && t.isTrue("responsive_web_qp_new_boost_analytics_enabled") ? a : (a + r ?? 0) };
                    })(n, i),
                    l = o?.total_value,
                    c = o?.organic_value,
                    m = o?.promoted_value;
                let d = l;
                "organic" === t ? (d = c) : "boosted" === t ? (d = m) : i.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (d = c);
                const p = !!n?.ad,
                    u = (0, Te.jf)(o?.promoted_value, l),
                    g = (0, Te.jf)(s.nonFollowerCount, l),
                    b = r.createElement(De, { showPromotion: p, text: Ae }),
                    h = r.useMemo(() => [Ct(g, !0), ...(p ? [It(u, !0, i)] : [])], [g, u, p, i]);
                return r.createElement(Se.ZP, { animated: !0, count: d ?? 0, label: Re, popover: b, size: "title1", subTextList: h, value: (0, Te.fV)(d) });
            };
            a(136728);
            var Me = a(470911),
                Fe = a(595294);
            const qe = p().e3390c1e,
                Oe = p().aead0975,
                Ne = [{ value: 0 }, { value: 1 }],
                We = Me.Z,
                je = (e, t, a, r) => {
                    const o = ((e) => {
                            const t = [];
                            for (let a = 1; a <= 48; a++) {
                                const r = new Date(e.getTime() + 36e5 * a);
                                r.setMilliseconds(0), r.setSeconds(0), r.setMinutes(0), t.push(r.toISOString());
                            }
                            return t;
                        })(new Date(t)),
                        i =
                            e?.reduce((e, t) => {
                                const a = new Date(t?.timestamp.iso8601_time);
                                return { ...e, [a.toISOString()]: t?.metric_values[0]?.metric_value };
                            }, {}) ?? {};
                    let n = o.map((e) => i[e] ?? 0);
                    var s;
                    a ||
                        (n =
                            (s = n).length % 2 != 0
                                ? s
                                : s.reduce((e, t, a) => {
                                      if (a % 2 == 0) return [...e, t];
                                      {
                                          const a = e.pop();
                                          return [...e, a + t];
                                      }
                                  }, []));
                    const l = r ? 0.0415 : 0.083;
                    n = ((e, t) => {
                        const a = Math.max(...e);
                        return e.map((e) => (e < t * a ? 0 : e));
                    })(n, l);
                    const c = Math.max(...n) || 1,
                        m = n?.map((e) => ({ value: 0 === e ? l * c : e, color: 0 === e ? "gray200" : "gray700" }));
                    return m;
                },
                He = ({ createdAt: e, isModal: t = !1, isXSmall: a = !1, metricsRef: o }) => {
                    const i = X()(We, o),
                        s = i?.organic_metrics_time_series,
                        l = je(s, e, t, a),
                        c = r.useMemo(
                            () =>
                                r.createElement(
                                    n.ZP,
                                    { color: "gray700", size: "body", weight: "normal" },
                                    ((e) => {
                                        const t = e.reduce((e, t) => (t.value > e ? t.value : e), 0);
                                        return Oe({ maxValue: t < 1 ? 0 : t });
                                    })(l),
                                ),
                            [l],
                        ),
                        m = r.useMemo(() => ({ layout: "fixedBarWidth", spacing: "space1", borderRadii: "small", width: a ? "space2" : "space4" }), [a]);
                    return void 0 === s ? null : r.createElement(Fe.Z, { barConfig: m, data: l, style: $e.chart, ticks: Ne, title: qe, titleDescription: c });
                },
                $e = m.default.create((e) => ({ chart: { height: e.spaces.space56 } })),
                Qe = r.memo(He),
                Ue = (e) => {
                    const { forceDisplayType: t, label: a, metric: o, popover: i, showPromotionPercentages: n } = e,
                        { featureSwitches: s } = r.useContext(f.rC),
                        l = o?.promoted_value,
                        c = o?.total_value,
                        m = o?.organic_value;
                    let d = c;
                    "organic" === t ? (d = m) : "boosted" === t ? (d = l) : s.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (d = m);
                    const p = (0, Te.jf)(l, c),
                        u = [n && It(p, !0, s)];
                    return r.createElement(Se.ZP, { animated: !0, count: d ?? 0, label: a, popover: i, size: "title1", subTextList: u, value: (0, Te.fV)(d) });
                },
                Xe = (e) => {
                    const { forceDisplayType: t, label: a, metric: i, popover: n, showPromotionPercentages: s } = e,
                        { featureSwitches: l } = r.useContext(f.rC),
                        c = i?.promoted_value,
                        m = i?.total_value,
                        d = i?.organic_value;
                    let p = m;
                    "organic" === t ? (p = d) : "boosted" === t ? (p = c) : l.isTrue("responsive_web_qp_new_boost_analytics_enabled") && (p = d);
                    const u = (0, Te.jf)(c, m),
                        g = [s && It(u, !1, l)];
                    return r.createElement(o.Z, { style: Je.dataPoint }, r.createElement(Se.ZP, { animated: !0, count: p ?? 0, label: a, popover: n, size: "title3", subTextList: g, value: (0, Te.fV)(p) }));
                },
                Je = m.default.create((e) => ({ dataPoint: { flexGrow: 1 } })),
                Ye = u.ZP.isMobileOS(),
                Ke = Ye ? p().f1196a04 : p().bb66e3fc,
                et = p().g512ddcc,
                tt = Ye ? p().j9256524 : p().ceeb3016,
                at = p().bf4558fa,
                rt = p().e5fe61e0,
                ot = p().c69069e6,
                it = p().dbe9353e,
                nt = p().a0615bac,
                st = p().aeee0182,
                lt = p().acc4cf12,
                ct = p().d5f1e554,
                mt = p().c7d0d1c4,
                dt = p().b40d33e4,
                pt = p().a4da7724,
                ut = p().i2785009,
                gt = p().jedd2771,
                bt = p().g33fd6b1,
                ft = Ye ? gt : bt,
                ht = p().b71059c3,
                wt = p().h4cbba3e,
                _t = p().f4f0094c,
                yt = p().h1cdac12,
                Et = Ye ? _t : yt,
                vt = p().g884b2cc,
                Pt = Ie.Z,
                Zt = ({ detailExpands: e, displayType: t, engagements: a, follows: i, impressions: s, isFirstDashboard: l, isModal: c, isXSmall: d, linkClicks: p, m2GridGap: u, m2GridTemplate: g, m3GridGap: b, m3GridTemplate: f, metrics: h, profileVisits: w, showPromotionPercentages: _, subtitle: y, title: E, tweet: v, tweetAnalyticsM3Enabled: P, tweetHasLink: Z, uniqueImpressions: x }) => {
                    const I = (e) => (e ? ("organic" === t ? { ...e, total_value: e.organic_value } : "boosted" === t ? { ...e, total_value: e.promoted_value } : e) : null),
                        C = I(s),
                        T = I(a),
                        k = I(e),
                        S = I(w),
                        V = I(p),
                        D = I(x),
                        z = [P ? r.createElement(Xe, { forceDisplayType: t, key: rt, label: rt, metric: C, popover: r.createElement(Be, { showPromotion: !1, text: ot }), showPromotionPercentages: !1 }) : null, r.createElement(Xe, { forceDisplayType: t, key: it, label: it, metric: T, popover: r.createElement(Be, { showPromotion: !1, text: nt }), showPromotionPercentages: !1 }), r.createElement(Xe, { forceDisplayType: t, key: dt, label: dt, metric: k, popover: r.createElement(Be, { showPromotion: !1, text: pt }), showPromotionPercentages: !1 }), r.createElement(Xe, { forceDisplayType: t, key: st, label: st, metric: S, popover: r.createElement(Be, { showPromotion: !1, text: lt }), showPromotionPercentages: !1 }), p && Z ? r.createElement(Xe, { forceDisplayType: t, key: ct, label: ct, metric: V, popover: r.createElement(Be, { showPromotion: !1, text: mt }), showPromotionPercentages: !1 }) : null].filter((e) => e);
                    return r.createElement(
                        o.Z,
                        { style: [Tt.dashboardContainer, l && Tt.firstDashboardContainer] },
                        E && r.createElement(r.Fragment, null, r.createElement(n.ZP, { "aria-label": E, role: "heading", size: "title3", style: Tt.dashboardTitle, weight: "heavy" }, E), y && r.createElement(n.ZP, { color: "gray700", size: "subtext2", style: Tt.dashboardSubtitle }, y)),
                        r.createElement(
                            o.Z,
                            { style: [Tt.grid, { gridTemplateColumns: P ? f : g, gridGap: P ? b : u, marginTop: m.default.theme.spaces.space12, marginHorizontal: d ? m.default.theme.spaces.space16 : m.default.theme.spaces.space32 }] },
                            P ? r.createElement(Ge, { forceDisplayType: t, metricRef: h, uniqueImpressionsMetric: D }) : r.createElement(Ue, { forceDisplayType: t, label: rt, metric: C, popover: r.createElement(Be, { showPromotion: !1, text: ot }), showPromotionPercentages: !1 }),
                            P
                                ? r.createElement(
                                      r.Fragment,
                                      null,
                                      r.createElement(o.Z, { style: { gridColumn: c ? "2/4" : "2" } }, r.createElement(Qe, { createdAt: v.created_at, isModal: c, isXSmall: d, metricsRef: h })),
                                      z.map((e, t) => r.createElement(o.Z, { key: `minorDataPoint${t}` }, e)),
                                  )
                                : r.createElement(
                                      o.Z,
                                      { style: [Tt.minorDataPointsGrid, { gridGap: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                                      z.map((e, t) => r.createElement(o.Z, { key: `minorDataPoint${t}` }, e)),
                                  ),
                        ),
                    );
                },
                xt = ({ metrics: e, tweet: t }) => {
                    const a = (0, $.z)(),
                        { isModal: i } = r.useContext(se.Z),
                        n = (0, Ce.Z)(),
                        s = r.useContext(f.rC),
                        { featureSwitches: l } = s,
                        c = l.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        d = n.width < m.default.theme.breakpoints.xSmall,
                        p = (t?.entities?.urls && t.entities.urls.length > 0) || !!t?.card?.url,
                        u = X()(Pt, e);
                    if (!u?.datapoints_grid?.length) throw (a.scribe((0, _.X0)("EmptyOrganicMetricsFromBackend", t.user.id_str, t)), new Error("Tweet Analytics: no organic metrics received from the backend"));
                    const g = !!u?.ad,
                        b = (0, Te.Qy)("DetailExpands", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        h = (0, Te.Qy)("Engagements", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        w = Math.max(h?.organic_value ?? 0, h?.promoted_value ?? 0),
                        y = h && { metric_type: "Engagements", organic_value: w - (h.promoted_value ?? 0), promoted_value: h.promoted_value, total_value: w },
                        E = (0, Te.Qy)("UniqueImpressions", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        v = (0, Te.Qy)("Follows", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        P = (0, Te.Qy)("Impressions", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        Z = (0, Te.Qy)("LinkClicks", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        x = (0, Te.Qy)("ProfileVisits", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        I = [c ? r.createElement(Xe, { key: rt, label: rt, metric: P, popover: r.createElement(Be, { showPromotion: g, text: ot }), showPromotionPercentages: g }) : null, r.createElement(Xe, { key: it, label: it, metric: y ?? h, popover: r.createElement(Be, { showPromotion: g, text: nt }), showPromotionPercentages: g }), r.createElement(Xe, { key: dt, label: dt, metric: b, popover: r.createElement(Be, { showPromotion: g, text: pt }), popoverText: pt, showPromotionPercentages: g }), r.createElement(Xe, { key: st, label: st, metric: x, popover: r.createElement(Be, { showPromotion: g, text: lt }), showPromotionPercentages: g }), p ? r.createElement(Xe, { key: ct, label: ct, metric: Z, popover: r.createElement(Be, { showPromotion: g, text: mt }), showPromotionPercentages: g }) : null].filter((e) => e),
                        C = i ? m.default.theme.spaces.space40 : d ? m.default.theme.spaces.space24 : `${m.default.theme.spaces.space40} ${m.default.theme.spaces.space24}`,
                        T = d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40,
                        k = i ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                        S = i ? " 1fr 2fr" : "1fr",
                        V = (P?.promoted_value ?? 0) > 0 || (h?.promoted_value ?? 0) > 0 || (E?.promoted_value ?? 0) > 0,
                        D = l.isTrue("responsive_web_qp_new_boost_analytics_enabled") && g && V;
                    return r.createElement(
                        r.Fragment,
                        null,
                        D && r.createElement(Zt, { detailExpands: b, displayType: "boosted", engagements: h, follows: v, impressions: P, isFirstDashboard: !0, isModal: i, isXSmall: d, linkClicks: Z, m2GridGap: T, m2GridTemplate: S, m3GridGap: C, m3GridTemplate: k, metrics: u, profileVisits: x, showPromotionPercentages: g, subtitle: tt, title: Ke, tweet: t, tweetAnalyticsM3Enabled: c, tweetHasLink: p, uniqueImpressions: E }),
                        D && r.createElement(o.Z, { style: Tt.dashboardDivider }),
                        D
                            ? r.createElement(Zt, { detailExpands: b, displayType: "organic", engagements: h, follows: v, impressions: P, isFirstDashboard: !1, isModal: i, isXSmall: d, linkClicks: Z, m2GridGap: T, m2GridTemplate: S, m3GridGap: C, m3GridTemplate: k, metrics: u, profileVisits: x, showPromotionPercentages: g, subtitle: at, title: et, tweet: t, tweetAnalyticsM3Enabled: c, tweetHasLink: p, uniqueImpressions: E })
                            : r.createElement(
                                  o.Z,
                                  { style: [Tt.grid, { gridTemplateColumns: c ? k : S, gridGap: c ? C : T, marginTop: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40, marginHorizontal: d ? m.default.theme.spaces.space16 : m.default.theme.spaces.space32 }] },
                                  c ? r.createElement(Ge, { metricRef: u, uniqueImpressionsMetric: E }) : r.createElement(Ue, { label: rt, metric: P, popover: r.createElement(Be, { showPromotion: g, text: ot }), showPromotionPercentages: g }),
                                  c
                                      ? r.createElement(
                                            r.Fragment,
                                            null,
                                            r.createElement(o.Z, { style: { gridColumn: i ? "2/4" : "2" } }, r.createElement(Qe, { createdAt: t.created_at, isModal: i, isXSmall: d, metricsRef: u })),
                                            I.map((e, t) => r.createElement(o.Z, { key: `minorDataPoint${t}` }, e)),
                                        )
                                      : r.createElement(
                                            o.Z,
                                            { style: [Tt.minorDataPointsGrid, { gridGap: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                                            I.map((e, t) => r.createElement(o.Z, { key: `minorDataPoint${t}` }, e)),
                                        ),
                              ),
                    );
                };
            function It(e, t, a) {
                if (a && a.isTrue("responsive_web_qp_new_boost_analytics_enabled")) return null;
                const i = e >= 0.045 ? ut(e) : wt,
                    s = e >= 0.045 ? ft({ percentage: i }) : Et,
                    l = t ? s : i;
                return e > 0 && r.createElement(o.Z, { "aria-label": s, key: l, style: [Tt.subTextListItem, Tt.promotionLabel] }, r.createElement(n.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, l));
            }
            function Ct(e, t) {
                const a = e >= 0.045 ? ut(e) : wt,
                    i = e >= 0.045 ? ht({ percentage: a }) : vt,
                    s = t ? i : a;
                return e > 0 && r.createElement(o.Z, { "aria-label": i, key: s, style: Tt.subTextListItem }, r.createElement(n.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2", weight: "medium" }, s));
            }
            const Tt = m.default.create((e) => ({ grid: { display: "grid", marginBottom: e.spaces.space40 }, minorDataPointsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 }, subTextListItem: { flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, dashboardContainer: { marginBottom: e.spaces.space16 }, firstDashboardContainer: { marginTop: e.spaces.space32 }, dashboardTitle: { marginStart: e.spaces.space32, marginBottom: e.spaces.space8 }, dashboardSubtitle: { marginStart: e.spaces.space32, marginBottom: e.spaces.space24 }, dashboardDivider: { height: 1, backgroundColor: e.colors.gray100, marginHorizontal: e.spaces.space32, marginBottom: e.spaces.space16 } })),
                kt = r.memo(xt);
            var St = a(743738),
                Vt = a(885015),
                Dt = a(432181),
                zt = a(155353),
                Bt = a(194661);
            const Rt = St.Z,
                At = p().ib1f8491,
                Lt = p().dc0e7f37,
                Gt = p().d0eeb127,
                Mt = p().i2785009,
                Ft = p().g33fd6b1,
                qt = p().eefcd267,
                Ot = p().h4cbba3e,
                Nt = p().h1cdac12;
            function Wt(e) {
                const { featureSwitches: t } = r.useContext(f.rC);
                if (t && t.isTrue("responsive_web_qp_new_boost_analytics_enabled")) return null;
                let { percentageValue: a } = e;
                a > 1 && ((a = 1), (0, j.ZP)({ name: "AnalyticsPercentageGreaterThan100", message: "Promoted Analytics percentage exceeded 100%", displayName: "AnalyticsPercentageGreaterThan100" }));
                const i = a >= 0.045 ? Mt(a) : Ot,
                    s = a >= 0.045 ? Ft({ percentage: i }) : Nt;
                return a > 0 && r.createElement(o.Z, { "aria-label": s, style: Ht.percentageView }, r.createElement(n.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, i));
            }
            function jt(e) {
                const { liveCounts: t, tweet: a } = e,
                    i = X()(Rt, e.metrics),
                    s = !!i?.ad,
                    l = (0, Te.Qy)("Likes", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    c = (0, Te.Qy)("Retweets", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    m = (0, Te.Qy)("Replies", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    d = t?.likeCount || a.favorite_count || 0,
                    p = (t?.quoteCount || a.quote_count || 0) + (t?.retweetCount || a.retweet_count),
                    u = t?.replyCount || a.reply_count || 0,
                    g = l ? l / d : 0,
                    b = c ? c / p : 0,
                    f = m ? m / u : 0;
                return r.createElement(o.Z, { style: Ht.actionsBar }, r.createElement(Vt.Z, null, r.createElement(o.Z, { "aria-label": At({ likeCount: d }), style: Ht.column }, r.createElement(Dt.default, { style: Ht.actionIconsColor }), r.createElement(n.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, qt(d)), s ? r.createElement(Wt, { percentageValue: g }) : null), r.createElement(o.Z, { "aria-label": Lt({ retweetCount: p }), style: Ht.column }, r.createElement(zt.default, { style: Ht.actionIconsColor }), r.createElement(n.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, qt(p)), s ? r.createElement(Wt, { percentageValue: b }) : null), r.createElement(o.Z, { "aria-label": Gt({ replyCount: u }), style: Ht.column }, r.createElement(Bt.default, { style: Ht.actionIconsColor }), r.createElement(n.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, qt(u)), s ? r.createElement(Wt, { percentageValue: f }) : null)));
            }
            const Ht = m.default.create((e) => ({ column: { flexGrow: 1, marginHorizontal: "auto", padding: e.componentDimensions.gutterHorizontal }, actionsBar: { marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", borderRadius: e.borderRadii.large }, actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 }, percentageView: { margin: "auto", backgroundColor: m.default.theme.colors.primary50, borderRadius: m.default.theme.borderRadii.infinite, color: m.default.theme.colors.primary, marginTop: m.default.theme.spaces.space4, paddingVertical: m.default.theme.spaces.space4, paddingHorizontal: m.default.theme.spacesPx.space4 + m.default.theme.spacesPx.space2 }, promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginEnd: e.spaces.space4 } }));
            var $t = a(573519),
                Qt = a(716754);
            const Ut = Object.freeze({ notProfessional: "not_professional", notStarted: "not_started", underReview: "under_review", running: "running", completed: "completed", paused: "paused" });
            var Xt = a(807896),
                Jt = a(818080),
                Yt = a(822399),
                Kt = a(593866),
                ea = a(207137);
            const ta = "promotionInfoWrapper",
                aa = p().db6efeb8,
                ra = p().j6daea86,
                oa = p().jade381b,
                ia = p().d725a289,
                na = p().hf9ed10f,
                sa = p().f42a198d;
            function la(e) {
                const { currency: t, endTime: a, isIosCampaign: i, isPaused: n, remainingBudget: s, startTime: l, totalBudget: c } = e,
                    m = a ? new Date(a) : null,
                    d = l ? new Date(l) : null,
                    p = !!m && m > new Date(Date.now()),
                    u = m && d ? (0, ea.BC)(new Date(d), new Date(m)) : 0,
                    g = a && p ? Jt.Z.getTimeLeftLabelTwoUnits(a) : null,
                    b = m ? ia(m) : "",
                    f = m ? oa(m) : "",
                    h = na({ endTimeString: b, endDateString: f }),
                    w = (function (e, t, a, r) {
                        const o = t ?? e;
                        if (!e || !a || !o || o > e) return null;
                        const i = (e) => e.toLocaleString(r ?? [], { style: "currency", currency: a, minimumFractionDigits: 0, maximumFractionDigits: 0 });
                        try {
                            const t = i((e - o) / 1e6),
                                a = i(e / 1e6);
                            return sa({ spentBudget: t, totalBudget: a });
                        } catch {
                            return null;
                        }
                    })(c, s, t);
                return r.createElement(o.Z, { style: ma.promotionInfoView, testID: ta }, r.createElement(o.Z, { style: ma.infoItemView }, r.createElement(ca, { budgetLabel: w, endTimeLabel: h, isIosCampaign: i, isPaused: n, percentagePassed: u, timeLeftLabel: g })));
            }
            function ca(e) {
                const { budgetLabel: t, endTimeLabel: a, isPaused: i, percentagePassed: s, timeLeftLabel: l } = e,
                    c = { items: [{ label: r.createElement(n.ZP, { size: "headline2", weight: "heavy" }, i ? ra : aa), description: l ? r.createElement(r.Fragment, null, r.createElement(o.Z, { style: ma.progressBarContainer }, r.createElement(Yt.Z, { colorValue: i ? m.default.theme.colors.gray400 : m.default.theme.colors.primary, progress: s, style: ma.progressBar })), r.createElement(o.Z, { style: ma.subtexts }, t && r.createElement(n.ZP, { color: "gray700", hoverLabel: { label: t ?? "" } }, t), r.createElement(n.ZP, { color: "gray700", hoverLabel: { label: a } }, l))) : null }] };
                return r.createElement(Kt.Z, (0, Xt.Z)({}, c, { containerStyle: ma.infoItem }));
            }
            const ma = m.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", paddingVertical: e.spaces.space24, paddingHorizontal: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap" }, infoItemView: { flex: 1 }, infoItem: { paddingHorizontal: 0, paddingVertical: 0 }, progressBarContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space4} + ${e.spaces.space2})`, marginTop: e.spaces.space12, marginBottom: e.spaces.space8 }, progressBar: { borderRadius: e.borderRadii.medium, height: "100%" }, subtexts: { flexDirection: "row", justifyContent: "space-between" } }));
            var da = a(363895),
                pa = a(154003);
            const ua = p().d228a9a0,
                ga = p().c174e46e;
            function ba(e) {
                const { buttonString: t, buttonTestID: a, infoItemGroup: i, link: n, onButtonPress: s } = e,
                    l = e.expandButtonText ?? ua,
                    c = (0, Ce.Z)(),
                    d = !r.useContext(se.Z).isModal,
                    p = c.width <= m.default.theme.breakpoints.xSmall,
                    [u, g] = r.useState(!1),
                    b = u ? ga : l,
                    f = [fa.promotionInfoView, d && fa.promotionInfoViewNarrow, p && fa.promotionInfoViewXSmall];
                return r.createElement(
                    o.Z,
                    { style: f, testID: ta },
                    i && r.createElement(o.Z, { style: d ? (u ? fa.promotionInfoTextVisible : fa.promotionInfoTextHidden) : fa.promotionInfoTextWide }, i),
                    r.createElement(o.Z, { style: d ? fa.buttonViewNarrow : fa.buttonViewWide }, r.createElement(pa.ZP, { link: n, onPress: s, size: "large", testID: a, type: "primaryFilled" }, t)),
                    d &&
                        i &&
                        r.createElement(
                            o.Z,
                            { style: fa.buttonViewNarrow },
                            r.createElement(
                                pa.ZP,
                                {
                                    onPress: () => {
                                        g(d && !u);
                                    },
                                    size: "large",
                                    type: "primaryText",
                                },
                                b,
                            ),
                        ),
                );
            }
            const fa = m.default.create((e) => ({ promotionInfoTextVisible: { display: "visible", marginBottom: e.spaces.space24, flexWrap: "wrap", flexGrow: 1, flexShrink: "initial" }, promotionInfoTextHidden: { display: "none" }, promotionInfoTextWide: { flexGrow: 1, flexShrink: "initial" }, promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap", justifyContent: "space-between", paddingVertical: e.spaces.space24 }, promotionInfoViewXSmall: { padding: e.spaces.space16 }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItemViewNarrow: { paddingBottom: e.spaces.space24 }, buttonViewNarrow: { flexGrow: 1, marginEnd: e.spaces.space16 }, buttonViewWide: { margin: "auto", marginEnd: 0 } })),
                ha = p().e8adeec8,
                wa = p().fbb5c37e;
            function _a(e) {
                const t = (0, $.z)();
                const a = !!u.ZP.getTwitterAppVersion(),
                    o = `${e.tweet.permalink}/${a ? da.ZV.Webview : da.ZV.Rweb}/${da.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: u.ZP.isTwitterApp() ? (u.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "PromoteAgainButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(ba, {
                        buttonString: a ? wa : ha,
                        link: o,
                        onButtonPress: function () {
                            t.scribe((0, _.gG)({ userId: e.userId, element: "PromoteAgainButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            p().h1fcb36c, p().ccffb487, p().df2c469a, p().ja781451;
            m.default.create((e) => ({ infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" } }));
            const ya = p().j619ec94,
                Ea = p().ha13fd94;
            function va(e) {
                const t = (0, $.z)();
                const a = !!u.ZP.getTwitterAppVersion(),
                    o = `${e.tweet.permalink}/${a ? da.ZV.Webview : da.ZV.Rweb}/${da.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: u.ZP.isTwitterApp() ? (u.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "NotStartedPromotionButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(ba, {
                        buttonString: a ? Ea : ya,
                        link: o,
                        onButtonPress: function () {
                            t.scribe((0, _.gG)({ userId: e.userId, element: "NotStartedPromotionButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            var Pa = a(988227);
            const Za = p().jede3014,
                xa = p().b823301e,
                Ia = p().a2e48870,
                Ca = (0, i.ju)("https://x.com/adspolicy");
            function Ta(e) {
                const t = (0, $.z)(),
                    a = { items: [{ label: r.createElement(n.ZP, { size: "headline2", weight: "heavy" }, Za), description: xa, decoration: r.createElement(Pa.default, { style: [ka.icon, ka.decorationContainer] }) }] };
                return r.createElement(
                    o.Z,
                    { style: ka.promotionInfoView, testID: ta },
                    r.createElement(o.Z, { style: ka.infoItemView }, r.createElement(Kt.Z, (0, Xt.Z)({}, a, { containerStyle: ka.infoItem }))),
                    r.createElement(
                        o.Z,
                        { style: ka.buttonView },
                        r.createElement(
                            n.ZP,
                            {
                                color: "primary",
                                link: Ca,
                                onPress: function () {
                                    t.scribe((0, _.gG)({ userId: e.userId, element: "ReviewPolicyButton", tweet: e.tweet }));
                                },
                            },
                            Ia,
                        ),
                    ),
                );
            }
            const ka = m.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space24, flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap" }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" }, buttonView: { marginTop: e.spaces.space16, marginStart: e.spaces.space48 }, decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space24 }, icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.gray700 } })),
                Sa = Qt.Z,
                Va = $t.Z;
            function Da(e) {
                const { promotionInfoState: t, tweet: a } = e,
                    o = X()(Sa, e.campaignInfo)?.ad,
                    i = X()(Va, e.metrics),
                    n = (0, Te.Qy)("Engagements", [], i?.ad?.creative?.promotion_info),
                    s = (0, Te.Qy)("Impressions", i?.promotion_info, i?.ad?.creative?.promotion_info),
                    l = n?.promoted_value,
                    c = s?.promoted_value,
                    m = !!u.ZP.getTwitterAppVersion() && u.ZP.isIOS();
                switch (t) {
                    case Ut.notProfessional:
                        return null;
                    case Ut.notStarted:
                        return r.createElement(va, { isIosApp: m, tweet: a, userId: e.userId });
                    case Ut.underReview:
                        return r.createElement(Ta, { isIosApp: m, tweet: a, userId: e.userId });
                    case Ut.running:
                        return r.createElement(la, { currency: o?.campaign?.currency, endTime: o?.campaign?.end_time, isIosCampaign: o?.campaign?.is_in_app_purchase, isPaused: !1, remainingBudget: o?.campaign?.remaining_budget, startTime: o?.campaign?.start_time, totalBudget: o?.campaign?.total_budget });
                    case Ut.paused:
                        return r.createElement(la, { currency: o?.campaign?.currency, endTime: o?.campaign?.end_time, isIosCampaign: o?.campaign?.is_in_app_purchase, isPaused: !0, remainingBudget: o?.campaign?.remaining_budget, startTime: o?.campaign?.start_time, totalBudget: o?.campaign?.total_budget });
                    case Ut.completed:
                        return r.createElement(_a, { engagements: l, impressions: c, isIosApp: m, isIosCampaign: o?.campaign?.is_in_app_purchase, tweet: a, userId: e.userId });
                    default:
                        return null;
                }
            }
            var za = a(393416);
            const Ba = p().fc64990e,
                Ra = p().ge538876,
                Aa = p().dcc05a7e,
                La = p().ca7e10d8,
                Ga = p().i611fc96,
                Ma = p().a69cd868,
                Fa = p().f894a688,
                qa = p().ad9d9204,
                Oa = p().da4b7a70,
                Na = p().e5b7dd84,
                Wa = p().de2d89a2,
                ja = p().i92754c2,
                Ha = p().be8ddcc2,
                $a = p().b01410d6,
                Qa = p().gfb3d8af,
                Ua = p().i2785009,
                Xa = p().fa8afc43,
                Ja = za.Z,
                Ya = (e) => {
                    const { isModal: t } = r.useContext(se.Z),
                        { featureSwitches: a } = r.useContext(f.rC),
                        i = a.isTrue("responsive_web_tweet_analytics_video_metrics_v2_enabled"),
                        s = (0, Ce.Z)(),
                        l = X()(Ja, e.metrics);
                    if (!l || !e.video) return null;
                    const c = e.video.video_info.duration_millis ?? 1,
                        d = c >= 36e5,
                        p = [0, 0.25, 0.5, 0.75, 1].map((e) => {
                            const t = e * c;
                            return (0, Te.LU)(t, d);
                        }),
                        u = !!l.ad,
                        g = s.width < m.default.theme.breakpoints.xSmall,
                        [b, h, w, _, y, E, v] = ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"].map((e) => (0, Te.Qy)(e, l.video, l.ad?.creative?.video)),
                        P = [
                            [w, Na, Na],
                            [_, Ua(0.25), Wa],
                            [y, Ua(0.5), ja],
                            [E, Ua(0.75), Ha],
                            [v, Ua(1), $a],
                        ].map(([e, t, a], o) => {
                            const n = i ? b?.total_value : w?.total_value,
                                s = ((l = e?.total_value), (c = n ?? 1), l ? Math.min(1, Math.round((l / c) * 100) / 100) : 0);
                            var l, c;
                            return { value: s, label: i && p ? p[o] : t, color: "blue900", popover: i && p ? r.createElement(tr, { label: Qa({ timeLabel: p[o] }), metric: s }) : r.createElement(er, { label: a, metric: e, showPromotionPercentages: u }) };
                        });
                    return r.createElement(
                        o.Z,
                        { style: g ? ar.smallSpacing : ar.normalSpacing },
                        r.createElement(n.ZP, { "aria-label": Ba, "aria-level": 3, role: "heading", size: "title3", weight: "heavy" }, Ba),
                        r.createElement(n.ZP, { "aria-label": Ra, color: "gray700", size: "subtext1", style: ar.subtitle }, Ra),
                        r.createElement(
                            o.Z,
                            { role: "region", style: [t ? ar.modalGrid : ar.mobileGrid, { gridGap: g ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                            r.createElement(Xe, { key: La, label: La, metric: h, popover: r.createElement(Be, { showPromotion: u, text: Ma }), showPromotionPercentages: u }),
                            r.createElement(Xe, { key: Aa, label: Aa, metric: b, popover: r.createElement(Be, { showPromotion: u, text: Ga }), showPromotionPercentages: u }),
                            r.createElement(
                                o.Z,
                                { style: t ? ar.modalChart : ar.mobileChart },
                                r.createElement(Fe.Z, {
                                    audioChart: !0,
                                    barConfig: { borderRadii: "none", layout: "fixedSpacing", spacing: "space4" },
                                    data: P,
                                    gridlines: [0, 0.5, 1],
                                    style: { height: 135 },
                                    ticks: [
                                        { value: 0, label: r.createElement(Ka, { value: 0 }) },
                                        { value: 0.5, label: r.createElement(Ka, { value: 0.5 }) },
                                        { value: 1, label: r.createElement(Ka, { value: 1 }) },
                                    ],
                                    title: Fa,
                                    titleDescription: r.createElement(n.ZP, { color: "gray700", size: "body", weight: "normal" }, i ? Oa : qa),
                                }),
                            ),
                        ),
                    );
                };
            const Ka = (e) => r.createElement(n.ZP, { align: "center", color: "gray700", size: "subtext2", weight: "medium" }, Ua(e.value)),
                er = (e) => {
                    const { featureSwitches: t } = r.useContext(f.rC),
                        a = e.metric?.promoted_value && e.metric?.total_value ? e.metric?.promoted_value / e.metric?.total_value : 0,
                        i = [e.showPromotionPercentages && It(a, !0, t)];
                    return r.createElement(o.Z, { style: ar.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(Se.ZP, { label: e.label, size: "title3", subTextList: i, value: Xa(e.metric?.total_value ?? 0) }));
                },
                tr = (e) => r.createElement(o.Z, { style: ar.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(Se.ZP, { label: e.label, size: "title3", value: Ua(e.metric) })),
                ar = m.default.create((e) => ({ smallSpacing: { marginBottom: e.spaces.space20, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 }, normalSpacing: { marginBottom: e.spaces.space40, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space32 }, subtitle: { marginTop: e.spaces.space2, marginBottom: e.spaces.space32 }, mobileGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, mobileChart: { gridColumn: "1 / 3", gridRow: 2 }, modalGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, modalChart: { gridColumn: "1 / 4", gridRow: 2 }, popoverDataPoint: { margin: e.spaces.space16 } })),
                rr = r.memo(Ya),
                or = p().fc2a5c92,
                ir = p().hb52cc4a,
                nr = p().fc6cbba2,
                sr = p().b80a53c8,
                lr = p().efb9a9e0,
                cr = p().d25dccb6;
            class mr extends r.Component {
                constructor(e) {
                    super(e), (this.state = { hasError: !1 });
                }
                componentDidCatch(e, t) {
                    (0, j.ZP)(e.message);
                }
                static getDerivedStateFromError() {
                    return { hasError: !0 };
                }
                render() {
                    const { hasError: e } = this.state,
                        { tweet: t } = this.props,
                        a = !!t.trusted_friends_info;
                    return e || a ? r.createElement(dr, this.props) : this.props.children;
                }
            }
            const dr = (e) => {
                    const { tweet: t } = e,
                        { isModal: a } = r.useContext(se.Z),
                        i = (0, W.R)(),
                        [s] = r.useState(i().toISOString()),
                        l = new Date(s) - new Date(t.created_at) < 3e5,
                        c = !!t.trusted_friends_info,
                        m = c ? lr : l ? nr : or,
                        d = c ? cr : l ? sr : ir;
                    return r.createElement(o.Z, { style: pr.root }, r.createElement(o.Z, { style: [pr.content, { flexDirection: a ? "row" : "column-reverse" }] }, r.createElement(o.Z, { style: pr.text }, r.createElement(n.ZP, { size: "title3", weight: "heavy" }, m), r.createElement(n.ZP, { color: "gray700", size: "body", weight: "normal" }, d))));
                },
                pr = m.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }, content: { display: "flex", alignItems: "center", margin: e.spaces.space32 }, text: { flex: 1, alignSelf: "center" }, img: { height: 175, width: 280 } })),
                ur = p().deaf5b16,
                gr = ["DetailExpands", "Engagements", "Follows", "Impressions", "LinkClicks", "ProfileVisits"],
                br = [...gr, "UniqueImpressions"],
                fr = R.Z,
                hr = (0, O.z)(fr, { errorConfig: { context: C } });
            function wr(e) {
                const { liveCounts: t, quickPromoteEligibility: a, tweet: i, userId: n } = e,
                    s = (0, $.z)(),
                    l = (0, N.hC)("gryphon_hide_quick_promote"),
                    c = L()(),
                    m = (0, E.n7)(C),
                    d = (0, N.hC)("responsive_web_tweet_analytics_m3_enabled"),
                    p = (0, W.R)(),
                    [u] = r.useState(p().toISOString()),
                    g = new Date(new Date(i.created_at).setMinutes(0, 0, 0)),
                    b = (0, H.o)(
                        () => g.toISOString(),
                        (e) => {
                            throw (e instanceof RangeError && (0, j.Hj)("invalid tweet.created_at", { extra: { createdAt: i.created_at } }), e);
                        },
                    ),
                    f = new Date(g.getTime() + 1728e5).toISOString(),
                    h = i?.extended_entities?.media?.find((e) => "video" === e.type),
                    w = !!i.trusted_friends_info,
                    y = d ? br : gr,
                    v = r.useMemo(() => [...y, "CostPerFollower"], [y]);
                return (
                    r.useEffect(() => {
                        const e = m({ showToast: !1 });
                        M()(c, fr, { restId: i.id_str, from_time: b, to_time: u, first_48_hours_time: f, requested_organic_metrics: y, requested_promoted_metrics: v }).subscribe({ error: e });
                    }, [i, c, m, b, u, f, y, v]),
                    r.createElement(hr, {
                        render: (e) => {
                            if (e.fetchStatus === O.i.FAILED) {
                                const t = e.retry;
                                return s.scribe((0, _.X0)("NetworkError", n, i)), r.createElement(F.Z, { onRequestRetry: t, retryMessage: ur });
                            }
                            if (e.fetchStatus === O.i.LOADED) {
                                const s = e.data?.tweet_result_by_rest_id?.result;
                                let c = null;
                                if (("Tweet" === s?.__typename ? (c = s) : "TweetWithVisibilityResults" === s?.__typename && (c = s.tweet), c)) {
                                    const e = (function (e) {
                                        if (!e) return null;
                                        switch (e) {
                                            case "Eligible":
                                            case "ReplyTweet":
                                                return "not_started";
                                            case "EligibleWithPreviousCampaign":
                                                return "completed";
                                            case "IneligibleNotProfessional":
                                            case "IneligibleNotProfessionalAndAdAccountEligible":
                                            case "IneligibleNotProfessionalAndAdAccountIneligible":
                                            case "IneligibleNotProfessionalAndPendingPayment":
                                                return "not_professional";
                                            case "IneligibleCampaignPaused":
                                                return "paused";
                                            case "IneligibleCampaignRunning":
                                                return "running";
                                            case "IneligibleCampaignUnderReview":
                                                return "under_review";
                                            default:
                                                return null;
                                        }
                                    })(a);
                                    return r.createElement(o.Z, { style: _r.tweetActivity }, r.createElement(o.Z, { style: _r.metricsView }, r.createElement(mr, { tweet: i }, r.createElement(jt, { liveCounts: t, metrics: c, tweet: i }), r.createElement(kt, { metrics: c, tweet: i }), !!h && r.createElement(r.Fragment, null, r.createElement(q.Z, { spacing: "space2" }), r.createElement(rr, { metrics: c, video: h })), r.createElement(xe, { metricsRef: c }))), !e || w || l ? null : r.createElement(Da, { campaignInfo: c, metrics: c, promotionInfoState: e, tweet: i, userId: n }));
                                }
                            }
                            return null;
                        },
                        variables: { restId: i.id_str, from_time: b, to_time: u, first_48_hours_time: f, requested_organic_metrics: y, requested_promoted_metrics: v },
                    })
                );
            }
            const _r = m.default.create((e) => ({ tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } })),
                yr = p().fc4e5d96,
                Er = p().ab0da59f,
                vr = p().deaf5b16,
                Pr = p().dcc05a7e,
                Zr = (0, i.ju)("https://help.x.com/using-twitter/view-counts"),
                xr = { link: r.createElement(n.ZP, { color: "text", link: Zr, weight: "bold", withUnderline: !0 }) },
                Ir = r.createElement(p().I18NFormatMessage, { $i18n: "gc31d3e9" }, r.cloneElement(xr.link, null, p().a10aa36c)),
                Cr = r.createElement(p().I18NFormatMessage, { $i18n: "he0e6ed7" }, r.cloneElement(xr.link, null, p().d0740558)),
                Tr = r.createElement(p().I18NFormatMessage, { $i18n: "c780f52b" }, r.cloneElement(xr.link, null, p().d2d76dca)),
                kr = p().ae32e7de,
                Sr = p().e839db3a;
            class Vr extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.viewCountEnabled = this.context.featureSwitches.isTrue("view_counts_public_visibility_enabled")),
                        (this._handleFetchTweet = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: t, statusId: a } = this.props;
                            t(a).catch(e(w.c));
                        }),
                        (this._handleFetchQuickPromoteEligibility = () => {
                            const { createLocalApiErrorHandler: e, fetchQuickPromoteEligibilityIfNeeded: t, statusId: a } = this.props;
                            return t({ statusId: a }).catch(e());
                        }),
                        (this._render = () => {
                            const { isOwnerOrAdminAllowed: e, liveCounts: t, quickPromoteEligibility: a, tweet: i } = this.props,
                                n = (i && s.Z.getOriginalTweet(i)) || void 0;
                            return !n || (n && n.user.id_str !== this.context.viewerUserId) || !e ? r.createElement(l.Z, { onRetry: null, title: yr }) : (this._scribeEligibility(), r.createElement(o.Z, { style: Dr.topLevelView }, r.createElement(o.Z, { style: Dr.quoteTweet }, r.createElement(h.Z, { isCondensed: !0, style: { cursor: "default" }, tweetId: n.id_str, withLink: !1, withUserHoverCard: !1 })), r.createElement(wr, { liveCounts: t, quickPromoteEligibility: a, tweet: n, userId: this.context.viewerUserId || "" })));
                        }),
                        (this._setAppBarRef = (e) => {
                            this._appBarRef = e;
                        }),
                        (this._handleGoBack = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._scribeEligibility = () => {
                            const { analytics: e, quickPromoteEligibility: t } = this.props;
                            e.scribe({ element: "eligibility", action: "view", data: { event_info: t || "" } });
                        }),
                        (this._scribeDwellTime = () => {
                            const { analytics: e, tweet: t } = this.props,
                                { data: a, ...r } = (0, _._b)({ dwellStartTime: this._dwellStartTime, tweet: t });
                            e.scribe({ ...r, element: "dwellTime", data: a });
                        });
                }
                componentDidMount() {
                    this._handleFetchTweet(), this._handleFetchQuickPromoteEligibility(), (this._dwellStartTime = Date.now());
                }
                componentWillUnmount() {
                    this._scribeDwellTime();
                }
                render() {
                    const { fetchStatus: e, history: t, tweet: a } = this.props,
                        o = (a && s.Z.getOriginalTweet(a)) || void 0,
                        i = !o || (o && o.user.id_str !== this.context.viewerUserId),
                        n = !!u.ZP.getTwitterAppVersion(),
                        l = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        m = s.Z.getLocalizedEntityName({ tweet: a, articlesEnabled: l, capitalized: !0 });
                    if (e !== y.iF.LOADED || (o && !i) || !this.viewCountEnabled) return r.createElement(b.Z, { appBarRef: this._setAppBarRef, backLocation: o ? o.permalink : "/", hideBackButton: n, history: t, onBackClick: this._handleGoBack, renderHeader: (e) => (n ? null : e), title: n ? null : Er({ entity: m }) }, r.createElement(g.Z, { fetchStatus: e, render: this._render, retryMessage: vr }));
                    {
                        const e = o?.views?.count,
                            t = o?.views?.state,
                            a = o?.promoted_content;
                        let i = Tr;
                        return a ? (i = kr) : 0 === e && "EnabledWithCount" === t ? (i = Cr) : "EnabledWithCount" === t && (i = Ir), r.createElement(c.Z, { actionLabel: Sr, graphicDisplayMode: "none", headline: Pr, isFullHeightOnMobile: !0, onAction: this._handleGoBack, onClose: this._handleGoBack, subtext: i });
                    }
                }
            }
            Vr.contextType = f.rC;
            const Dr = m.default.create((e) => ({ topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                zr = B(Vr);
        },
        979673: (e, t, a) => {
            a.d(t, { LU: () => s, Qy: () => d, fV: () => m, jf: () => c });
            var r = a(674132),
                o = a.n(r);
            const i = o().ja781451,
                n = o().cfa1a7b9,
                s = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function l(e) {
                return e || 0;
            }
            function c(e, t) {
                const a = l(t);
                return 0 === a ? 0 : l(e) / a;
            }
            function m(e, t = 1e5) {
                const a = l(e);
                return a >= t ? n(a) : i(a);
            }
            function d(e, t, a) {
                const r = t?.find((t) => t.metric_type === e),
                    o = a?.find((t) => t.metric_type === e),
                    i = r?.metric_value ?? 0,
                    n = o?.metric_value ?? 0;
                return { metric_type: e, organic_value: i, promoted_value: n, total_value: i + n };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-a7d46b56.1621ac9a.js.map
