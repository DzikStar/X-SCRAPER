"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-a7d46b56"],
    {
        270321: (e, t, a) => {
            a.d(t, { v$: () => _, yL: () => y });
            var r = a(454948),
                n = a(202784),
                o = a(325686),
                i = (a(585488), a(277660)),
                l = a.n(i),
                s = a(899492),
                c = a(992942),
                m = a(731708),
                d = a(98996),
                p = a(392237),
                u = a(674132),
                g = a.n(u),
                b = a(952793);
            const f = g().a3c544e8,
                h = g().c365dcc6,
                w = r.Z,
                _ = (e) => {
                    if (!e || 2 !== e.length) return null;
                    const t = e
                            .toUpperCase()
                            .split("")
                            .map((e) => 127397 + e.charCodeAt(0)),
                        a = String.fromCodePoint(...t);
                    return s.Z.getTwemojiUrl(a);
                },
                y = (e) => {
                    const t = (0, b.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = ((e, t, a) => {
                            const r = [...(a ? (e?.audience_top_countries ?? []) : []), ...(e?.ad?.creative?.audience_top_countries?.items ?? [])],
                                o = (e) => ("Other" === e ? h : new Intl.DisplayNames([t], { type: "region" }).of(e)),
                                i = {};
                            r.forEach((e) => {
                                const t = e.breakdown_segment?.segment_name;
                                if (!t || (2 !== t.length && "Other" !== t)) return null;
                                if (i[t]) i[t].value += e.metric_value ?? 0;
                                else {
                                    const a = _(t),
                                        r = a ? n.createElement(c.Z, { source: a, style: { height: "30px", width: "30px", marginEnd: "20px" } }) : null;
                                    i[t] = { label: o(t), value: e.metric_value ?? 0, color: "blue900", icon: r };
                                }
                            });
                            const l = Object.keys(i)
                                .map((e) => i[e])
                                .filter(Boolean);
                            return 0 === l.length ? null : l;
                        })(l()(w, e.metricsRef), e.lang, t);
                    return a && a.length > 1 ? n.createElement(o.Z, { "aria-label": f, role: "region", style: E.container }, n.createElement(m.ZP, { "aria-label": f, role: "heading", size: "headline1", style: E.title, weight: "heavy" }, f), n.createElement(d.Z, { data: a })) : null;
                },
                E = p.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } }));
        },
        767457: (e, t, a) => {
            a.r(t), a.d(t, { ConversationAnalyticsScreen: () => Vr, default: () => Sr });
            var r = a(202784),
                n = a(325686),
                o = a(688715),
                i = a(731708),
                l = a(782261),
                s = a(420740),
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
                k = (e, t) => t.match.params.statusId,
                V = (e, t) => I.Z.selectHydrated(e, k(0, t)),
                T = (e, t) => (0, Z.oo)(e, k(0, t)),
                S = (e, t) => I.Z.selectFetchStatus(e, k(0, t)),
                B = (e, t) => (0, Z.XJ)(e, k(0, t)),
                z = (e, t) => (0, P.Yt)(e, k(0, t)),
                D = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: S, liveCounts: z, quickPromoteEligibilityFetchStatus: T, statusId: k, tweet: V, quickPromoteEligibility: B, isOwnerOrAdminAllowed: x.Js }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)(C), fetchTweetIfNeeded: I.Z.fetchOneIfNeeded, fetchQuickPromoteEligibilityIfNeeded: Z.E6 }))
                    .withAnalytics({ page: "tweet", section: "analytics", component: "ConversationAnalytics" });
            a(571372);
            var R = a(999325),
                A = (a(585488), a(437429)),
                L = a.n(A),
                M = a(10622),
                j = a.n(M),
                N = a(750410),
                O = a(661810),
                F = a(301410),
                W = a(952793),
                G = a(566220),
                H = a(163889),
                q = a(16222),
                Q = a(725516),
                $ = a(651868),
                U = a(277660),
                X = a.n(U),
                J = a(175989),
                Y = a(98996);
            const K = p().bf96fda4,
                ee = J.Z,
                te = Object.freeze({ "13 to 19": p().d267afa2, "20 to 29": p().db81cab0, "30 to 39": p().f173716e, "40 to 49": p().ada329e6, "50 and up": p().j2950694 }),
                ae = Object.freeze({ "18 to 24": p().a5c91a8e, "25 to 34": p().cf30cdfa, "35 to 44": p().gf672f7c, "45 to 54": p().jf28b41c, "55 to 64": p().ja78da94, "65 and up": p().bcd9cf68 }),
                re = (e) => {
                    const t = (0, W.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = ((e, t) => {
                            const a = [...(t ? (e?.audience_age ?? []) : []), ...(e?.ad?.creative?.audience_age?.items ?? [])],
                                r = t ? ae : te,
                                n = Object.fromEntries(Object.entries(r).map(([e, t], a) => [e, a])),
                                o = Array.from({ length: Object.keys(r).length }, () => null);
                            a.forEach((e) => {
                                const t = e?.breakdown_segment?.segment_name;
                                if (!t || !r[t]) return;
                                const a = n[t];
                                if (o[a]) o[a].value += e.metric_value ?? 0;
                                else {
                                    const n = { value: e.metric_value ?? 0, color: "blue900", label: r[t] };
                                    o[a] = n;
                                }
                            });
                            const i = o.filter(Boolean);
                            return 0 === i.length ? null : i;
                        })(X()(ee, e.metricsRef), t);
                    return a ? r.createElement(n.Z, { "aria-label": K, role: "region", style: ne.container }, r.createElement(i.ZP, { "aria-label": K, role: "heading", size: "headline1", style: ne.title, weight: "heavy" }, K), r.createElement(Y.Z, { data: a })) : null;
                },
                ne = m.default.create((e) => ({ container: { marginBottom: e.spaces.space40 }, title: { paddingVertical: e.spaces.space12, marginBottom: e.spaces.space8 } })),
                oe = (0, v.Z)().propsFromState(() => ({ lang: x.VT }));
            var ie = a(270321),
                le = a(241545),
                se = a(386802),
                ce = a(247291);
            const me = p().fa5be588,
                de = p().c61c6624,
                pe = p().c778d80b,
                ue = (e) => {
                    const t = r.useMemo(() => e.organicValue + e.promotedValue, [e.organicValue, e.promotedValue]);
                    return r.createElement(n.Z, { role: "tooltip", style: ge.container }, r.createElement(i.ZP, { align: "left", style: ge.title, weight: "bold" }, e.label), r.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, me), r.createElement(i.ZP, { align: "right", size: "subtext2", weight: "medium" }, pe(e.organicValue / t)), r.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, de), r.createElement(i.ZP, { align: "right", size: "subtext2", weight: "medium" }, pe(e.promotedValue / t)));
                },
                ge = m.default.create((e) => ({ container: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(3, min-content)", padding: m.default.theme.spaces.space8 }, title: { gridColumnStart: "1", gridColumnEnd: "3", marginBottom: m.default.theme.spaces.space4 } })),
                be = p().a8d0108e,
                fe = le.Z,
                he = Object.freeze({ Women: { label: p().de323650, color: "blue900", index: 0 }, Men: { label: p().b6ab31be, color: "blue300", index: 1 }, "N/A": { label: p().f05f1838, color: "gray100", index: 2 } }),
                we = (e) => {
                    const t = (0, W.hC)("responsive_web_tweet_analytics_m3_enabled"),
                        a = X()(fe, e.metricsRef),
                        o = r.useMemo(
                            () =>
                                ((e, t) => {
                                    const a = e?.audience_gender?.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: e.metric_value ?? 0, promoted_value: 0 })) ?? [],
                                        n = [...(t ? a : []), ...(e?.ad?.creative?.audience_gender?.items.map((e) => ({ breakdown_segment: e.breakdown_segment, metric_type: e.metric_type, organic_value: 0, promoted_value: e.metric_value ?? 0 })) ?? [])],
                                        o = Array.from({ length: Object.keys(he).length }, () => null);
                                    n.forEach((e) => {
                                        const t = e?.breakdown_segment?.segment_name;
                                        if (!t || !he[t]) return;
                                        const a = he[t].index;
                                        if (o[a]) (o[a].organicValue += e.organic_value), (o[a].promotedValue += e.promoted_value);
                                        else {
                                            const r = { label: t, organicValue: e.organic_value, promotedValue: e.promoted_value };
                                            o[a] = r;
                                        }
                                    });
                                    const i = o.filter(Boolean).map((e) => ({ value: e.organicValue + e.promotedValue, color: he[e.label].color, label: he[e.label].label, popover: r.createElement(ue, { label: he[e.label].label, organicValue: e.organicValue, promotedValue: e.promotedValue }) }));
                                    return 0 === i.length ? null : i;
                                })(a, t),
                            [a, t],
                        ),
                        { isModal: i } = r.useContext(se.Z);
                    return o ? r.createElement(n.Z, { "aria-label": be, role: "region", style: [_e.container, i && { width: "75%" }] }, r.createElement(ce.Z, { arcWidth: 0.5, data: o, legendPosition: "left", radius: i ? 122 : 81, title: be })) : null;
                },
                _e = m.default.create((e) => ({ container: { marginVertical: e.spaces.space24, marginBottom: e.spaces.space40, marginTop: e.spaces.space24 } })),
                ye = p().b069d89c,
                Ee = p().b6414532,
                ve = p().c61c6624,
                Pe = $.Z,
                Ze = (e) => {
                    const { featureSwitches: t } = r.useContext(f.rC),
                        a = t.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        o = X()(Pe, e.metricsRef),
                        l = (e) => !!e && e.length > 0,
                        s = l(o?.audience_gender),
                        c = l(o?.audience_age),
                        m = l(o?.audience_top_countries),
                        d = l(o?.ad?.creative?.audience_gender?.items),
                        p = l(o?.ad?.creative?.audience_age?.items),
                        u = l(o?.ad?.creative?.audience_top_countries?.items),
                        g = a && (s || c || m);
                    return g || d || p || u ? r.createElement(r.Fragment, null, r.createElement(O.Z, { spacing: "space2" }), r.createElement(n.Z, { style: xe.container }, g ? null : r.createElement(i.ZP, { color: "primary900", size: "subtext3", style: xe.promotionLabel, weight: "bold" }, ve), r.createElement(i.ZP, { "aria-label": ye, role: "heading", size: "title3", weight: "heavy" }, ye), r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, Ee), r.createElement(we, { metricsRef: o }), r.createElement(re, { metricsRef: o }), r.createElement(ie.yL, { lang: e.lang, metricsRef: o }))) : null;
                },
                xe = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space24, marginTop: e.spaces.space12 }, promotionLabel: { backgroundColor: m.default.theme.colors.primary50, borderRadius: m.default.theme.borderRadii.infinite, paddingVertical: m.default.theme.spaces.space4, paddingHorizontal: m.default.theme.spacesPx.space4 + m.default.theme.spacesPx.space2, maxWidth: "fit-content", marginBottom: e.spaces.space8 } })),
                Ie = oe(r.memo(Ze));
            var Ce = a(173265),
                ke = a(858440),
                Ve = a(979673),
                Te = a(676763),
                Se = a(738545);
            const Be = p().de4def4e,
                ze = (e) => r.createElement(n.Z, null, r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, e.text), e.showPromotion ? r.createElement(i.ZP, { color: "primary900", size: "subtext3", style: [De.promotionLabel, De.popoverPromotionLabel], weight: "bold" }, Be) : null),
                De = m.default.create((e) => ({ popoverPromotionLabel: { width: "fit-content", marginTop: e.spaces.space8 }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 } })),
                Re = r.memo(ze),
                Ae = p().b32334a0,
                Le = p().h142a79c,
                Me = Te.Z;
            const je = (e) => {
                const { metricRef: t, uniqueImpressionsMetric: a } = e,
                    n = X()(Me, t),
                    o = ((i = n), { nonFollowerCount: (i?.audience_follow_status?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0) + (i?.ad?.creative?.audience_follow_status?.items?.find((e) => "0" === e.breakdown_segment?.segment_value)?.metric_value ?? 0) ?? 0 });
                var i;
                const l = a?.total_value,
                    s = !!n?.ad,
                    c = (0, Ve.jf)(a?.promoted_value, l),
                    m = (0, Ve.jf)(o.nonFollowerCount, l),
                    d = r.createElement(ze, { showPromotion: s, text: Le }),
                    p = r.useMemo(() => [xt(m, !0), ...(s ? [Zt(c, !0)] : [])], [m, c, s]);
                return r.createElement(Se.ZP, { animated: !0, count: l ?? 0, label: Ae, popover: d, size: "title1", subTextList: p, value: (0, Ve.fV)(l) });
            };
            var Ne = a(943245),
                Oe = a(125363);
            const Fe = (e) => {
                const { currency: t, label: a, metric: n, popover: o, showPromotionPercentages: i } = e,
                    l = n?.total_value ?? 0,
                    s = (0, Oe.v9)(x.VT),
                    c = n?.promoted_value,
                    m = (0, Ve.jf)(c, l),
                    d = [i && Zt(m, !1)];
                return r.createElement(Se.ZP, { label: a, popover: o, size: "title3", subTextList: d, value: (l / 1e6).toLocaleString((0, Ne.It)(s), { currency: t, style: "currency" }) });
            };
            a(136728);
            var We = a(470911),
                Ge = a(595294);
            const He = p().e3390c1e,
                qe = p().aead0975,
                Qe = [{ value: 0 }, { value: 1 }],
                $e = We.Z,
                Ue = (e, t, a, r) => {
                    const n = ((e) => {
                            const t = [];
                            for (let a = 1; a <= 48; a++) {
                                const r = new Date(e.getTime() + 36e5 * a);
                                r.setMilliseconds(0), r.setSeconds(0), r.setMinutes(0), t.push(r.toISOString());
                            }
                            return t;
                        })(new Date(t)),
                        o =
                            e?.reduce((e, t) => {
                                const a = new Date(t?.timestamp.iso8601_time);
                                return { ...e, [a.toISOString()]: t?.metric_values[0]?.metric_value };
                            }, {}) ?? {};
                    let i = n.map((e) => o[e] ?? 0);
                    var l;
                    a ||
                        (i =
                            (l = i).length % 2 != 0
                                ? l
                                : l.reduce((e, t, a) => {
                                      if (a % 2 == 0) return [...e, t];
                                      {
                                          const a = e.pop();
                                          return [...e, a + t];
                                      }
                                  }, []));
                    const s = r ? 0.0415 : 0.083;
                    i = ((e, t) => {
                        const a = Math.max(...e);
                        return e.map((e) => (e < t * a ? 0 : e));
                    })(i, s);
                    const c = Math.max(...i) || 1,
                        m = i?.map((e) => ({ value: 0 === e ? s * c : e, color: 0 === e ? "gray200" : "gray700" }));
                    return m;
                },
                Xe = ({ createdAt: e, isModal: t = !1, isXSmall: a = !1, metricsRef: n }) => {
                    const o = X()($e, n),
                        l = o?.organic_metrics_time_series,
                        s = Ue(l, e, t, a),
                        c = r.useMemo(
                            () =>
                                r.createElement(
                                    i.ZP,
                                    { color: "gray700", size: "body", weight: "normal" },
                                    ((e) => {
                                        const t = e.reduce((e, t) => (t.value > e ? t.value : e), 0);
                                        return qe({ maxValue: t < 1 ? 0 : t });
                                    })(s),
                                ),
                            [s],
                        ),
                        m = r.useMemo(() => ({ layout: "fixedBarWidth", spacing: "space1", borderRadii: "small", width: a ? "space2" : "space4" }), [a]);
                    return void 0 === l ? null : r.createElement(Ge.Z, { barConfig: m, data: s, style: Je.chart, ticks: Qe, title: He, titleDescription: c });
                },
                Je = m.default.create((e) => ({ chart: { height: e.spaces.space56 } })),
                Ye = r.memo(Xe),
                Ke = (e) => {
                    const { label: t, metric: a, popover: n, showPromotionPercentages: o } = e,
                        i = a?.promoted_value,
                        l = a?.total_value,
                        s = (0, Ve.jf)(i, l),
                        c = [o && Zt(s, !0)];
                    return r.createElement(Se.ZP, { animated: !0, count: l ?? 0, label: t, popover: n, size: "title1", subTextList: c, value: (0, Ve.fV)(l) });
                },
                et = (e) => {
                    const { label: t, metric: a, popover: o, showPromotionPercentages: i } = e,
                        l = a?.promoted_value,
                        s = a?.total_value,
                        c = (0, Ve.jf)(l, s),
                        m = [i && Zt(c, !1)];
                    return r.createElement(n.Z, { style: tt.dataPoint }, r.createElement(Se.ZP, { animated: !0, count: s ?? 0, label: t, popover: o, size: "title3", subTextList: m, value: (0, Ve.fV)(s) }));
                },
                tt = m.default.create((e) => ({ dataPoint: { flexGrow: 1 } })),
                at = p().e5fe61e0,
                rt = p().c69069e6,
                nt = p().dbe9353e,
                ot = p().a0615bac,
                it = p().d8abdaa4,
                lt = p().c72f25a8,
                st = p().aeee0182,
                ct = p().acc4cf12,
                mt = p().d5f1e554,
                dt = p().c7d0d1c4,
                pt = p().b40d33e4,
                ut = p().a4da7724,
                gt = p().c5d4d3a8,
                bt = p().f56e24f2,
                ft = p().i2785009,
                ht = p().g33fd6b1,
                wt = p().b71059c3,
                _t = p().h4cbba3e,
                yt = p().h1cdac12,
                Et = p().g884b2cc,
                vt = Ce.Z,
                Pt = ({ metrics: e, tweet: t }) => {
                    const a = (0, Q.z)(),
                        { isModal: o } = r.useContext(se.Z),
                        i = (0, ke.Z)(),
                        l = r.useContext(f.rC),
                        { featureSwitches: s } = l,
                        c = s.isTrue("responsive_web_tweet_analytics_m3_enabled"),
                        d = i.width < m.default.theme.breakpoints.xSmall,
                        p = (t?.entities?.urls && t.entities.urls.length > 0) || !!t?.card?.url,
                        u = X()(vt, e);
                    if (!u?.datapoints_grid?.length) throw (a.scribe((0, _.X0)("EmptyOrganicMetricsFromBackend", t.user.id_str, t)), new Error("Tweet Analytics: no organic metrics received from the backend"));
                    const g = !!u?.ad,
                        b = (0, Ve.Qy)("DetailExpands", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        h = (0, Ve.Qy)("Engagements", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        w = Math.max(h?.organic_value ?? 0, h?.promoted_value ?? 0),
                        y = h && { metric_type: "Engagements", organic_value: w - (h.promoted_value ?? 0), promoted_value: h.promoted_value, total_value: w },
                        E = (0, Ve.Qy)("UniqueImpressions", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        v = (0, Ve.Qy)("Follows", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        P = (0, Ve.Qy)("Impressions", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        Z = (0, Ve.Qy)("LinkClicks", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        x = (0, Ve.Qy)("ProfileVisits", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        I = (0, Ve.Qy)("CostPerFollower", u?.datapoints_grid, u?.ad?.creative?.datapoints_grid),
                        C = "Followers" === u?.ad?.campaign?.objective,
                        k = u?.ad?.campaign?.currency,
                        V = [c ? r.createElement(et, { key: at, label: at, metric: P, popover: r.createElement(Re, { showPromotion: g, text: rt }), showPromotionPercentages: g }) : null, r.createElement(et, { key: nt, label: nt, metric: y ?? h, popover: r.createElement(Re, { showPromotion: g, text: ot }), showPromotionPercentages: g }), r.createElement(et, { key: pt, label: pt, metric: b, popover: r.createElement(Re, { showPromotion: g, text: ut }), popoverText: ut, showPromotionPercentages: g }), r.createElement(et, { key: it, label: it, metric: v, popover: r.createElement(Re, { showPromotion: g, text: lt }), showPromotionPercentages: g }), r.createElement(et, { key: st, label: st, metric: x, popover: r.createElement(Re, { showPromotion: g, text: ct }), showPromotionPercentages: g }), C && k ? r.createElement(Fe, { currency: k, key: gt, label: gt, metric: I, popover: r.createElement(Re, { showPromotion: !0, text: bt }), showPromotionPercentages: g }) : null, p ? r.createElement(et, { key: mt, label: mt, metric: Z, popover: r.createElement(Re, { showPromotion: g, text: dt }), showPromotionPercentages: g }) : null].filter((e) => e),
                        T = o ? m.default.theme.spaces.space40 : d ? m.default.theme.spaces.space24 : `${m.default.theme.spaces.space40} ${m.default.theme.spaces.space24}`,
                        S = d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40,
                        B = o ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                        z = o ? " 1fr 2fr" : "1fr";
                    return r.createElement(
                        n.Z,
                        { style: [It.grid, { gridTemplateColumns: c ? B : z, gridGap: c ? T : S, marginTop: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40, marginHorizontal: d ? m.default.theme.spaces.space16 : m.default.theme.spaces.space32 }] },
                        c ? r.createElement(je, { metricRef: u, uniqueImpressionsMetric: E }) : r.createElement(Ke, { label: at, metric: P, popover: r.createElement(Re, { showPromotion: g, text: rt }), showPromotionPercentages: g }),
                        c
                            ? r.createElement(
                                  r.Fragment,
                                  null,
                                  r.createElement(n.Z, { style: { gridColumn: o ? "2/4" : "2" } }, r.createElement(Ye, { createdAt: t.created_at, isModal: o, isXSmall: d, metricsRef: u })),
                                  V.map((e, t) => r.createElement(n.Z, { key: `minorDataPoint${t}` }, e)),
                              )
                            : r.createElement(
                                  n.Z,
                                  { style: [It.minorDataPointsGrid, { gridGap: d ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                                  V.map((e, t) => r.createElement(n.Z, { key: `minorDataPoint${t}` }, e)),
                              ),
                    );
                };
            function Zt(e, t) {
                const a = e >= 0.045 ? ft(e) : _t,
                    o = e >= 0.045 ? ht({ percentage: a }) : yt,
                    l = t ? o : a;
                return e > 0 && r.createElement(n.Z, { "aria-label": o, key: l, style: [It.subTextListItem, It.promotionLabel] }, r.createElement(i.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, l));
            }
            function xt(e, t) {
                const a = e >= 0.045 ? ft(e) : _t,
                    o = e >= 0.045 ? wt({ percentage: a }) : Et,
                    l = t ? o : a;
                return e > 0 && r.createElement(n.Z, { "aria-label": o, key: l, style: It.subTextListItem }, r.createElement(i.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2", weight: "medium" }, l));
            }
            const It = m.default.create((e) => ({ grid: { display: "grid", marginBottom: e.spaces.space40 }, minorDataPointsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }, promotionLabel: { backgroundColor: e.colors.primary50, borderRadius: e.borderRadii.infinite, paddingVertical: e.spaces.space4, paddingHorizontal: e.spacesPx.space4 + e.spacesPx.space2 }, subTextListItem: { flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 } })),
                Ct = r.memo(Pt);
            var kt = a(743738),
                Vt = a(885015),
                Tt = a(432181),
                St = a(155353),
                Bt = a(194661);
            const zt = kt.Z,
                Dt = p().ib1f8491,
                Rt = p().dc0e7f37,
                At = p().d0eeb127,
                Lt = p().i2785009,
                Mt = p().g33fd6b1,
                jt = p().eefcd267,
                Nt = p().h4cbba3e,
                Ot = p().h1cdac12;
            function Ft(e) {
                let { percentageValue: t } = e;
                t > 1 && ((t = 1), (0, H.ZP)({ name: "AnalyticsPercentageGreaterThan100", message: "Promoted Analytics percentage exceeded 100%", displayName: "AnalyticsPercentageGreaterThan100" }));
                const a = t >= 0.045 ? Lt(t) : Nt,
                    o = t >= 0.045 ? Mt({ percentage: a }) : Ot;
                return t > 0 && r.createElement(n.Z, { "aria-label": o, style: Gt.percentageView }, r.createElement(i.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, a));
            }
            function Wt(e) {
                const { liveCounts: t, tweet: a } = e,
                    o = X()(zt, e.metrics),
                    l = !!o?.ad,
                    s = t?.likeCount || a.favorite_count || 0,
                    c = (t?.quoteCount || a.quote_count || 0) + (t?.retweetCount || a.retweet_count),
                    m = t?.replyCount || a.reply_count,
                    d = (0, Ve.Qy)("Likes", null, o?.ad?.creative?.like_retweet_replies)?.promoted_value,
                    p = (0, Ve.Qy)("Retweets", null, o?.ad?.creative?.like_retweet_replies)?.promoted_value,
                    u = (0, Ve.Qy)("Replies", null, o?.ad?.creative?.like_retweet_replies)?.promoted_value,
                    g = d ? d / s : 0,
                    b = p ? p / c : 0,
                    f = u ? u / m : 0;
                return r.createElement(n.Z, { style: Gt.actionsBar }, r.createElement(Vt.Z, null, r.createElement(n.Z, { "aria-label": Dt({ likeCount: s }), style: Gt.column }, r.createElement(Tt.default, { style: Gt.actionIconsColor }), r.createElement(i.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, jt(s)), l ? r.createElement(Ft, { percentageValue: g }) : null), r.createElement(n.Z, { "aria-label": Rt({ retweetCount: c }), style: Gt.column }, r.createElement(St.default, { style: Gt.actionIconsColor }), r.createElement(i.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, jt(c)), l ? r.createElement(Ft, { percentageValue: b }) : null), r.createElement(n.Z, { "aria-label": At({ replyCount: m }), style: Gt.column }, r.createElement(Bt.default, { style: Gt.actionIconsColor }), r.createElement(i.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, jt(m)), l ? r.createElement(Ft, { percentageValue: f }) : null)));
            }
            const Gt = m.default.create((e) => ({ column: { flexGrow: 1, marginHorizontal: "auto", padding: e.componentDimensions.gutterHorizontal }, actionsBar: { marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", borderRadius: e.borderRadii.large }, actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 }, percentageView: { margin: "auto", backgroundColor: m.default.theme.colors.primary50, borderRadius: m.default.theme.borderRadii.infinite, color: m.default.theme.colors.primary, marginTop: m.default.theme.spaces.space4, paddingVertical: m.default.theme.spaces.space4, paddingHorizontal: m.default.theme.spacesPx.space4 + m.default.theme.spacesPx.space2 }, promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginEnd: e.spaces.space4 } }));
            var Ht = a(573519),
                qt = a(716754);
            const Qt = Object.freeze({ notProfessional: "not_professional", notStarted: "not_started", underReview: "under_review", running: "running", completed: "completed", paused: "paused" });
            var $t = a(807896),
                Ut = a(818080),
                Xt = a(822399),
                Jt = a(593866),
                Yt = a(207137);
            const Kt = "promotionInfoWrapper",
                ea = p().db6efeb8,
                ta = p().j6daea86,
                aa = p().jade381b,
                ra = p().d725a289,
                na = p().hf9ed10f,
                oa = p().f42a198d;
            function ia(e) {
                const { currency: t, endTime: a, isIosCampaign: o, isPaused: i, remainingBudget: l, startTime: s, totalBudget: c } = e,
                    m = a ? new Date(a) : null,
                    d = s ? new Date(s) : null,
                    p = !!m && m > new Date(Date.now()),
                    u = m && d ? (0, Yt.BC)(new Date(d), new Date(m)) : 0,
                    g = a && p ? Ut.Z.getTimeLeftLabelTwoUnits(a) : null,
                    b = m ? ra(m) : "",
                    f = m ? aa(m) : "",
                    h = na({ endTimeString: b, endDateString: f }),
                    w = (function (e, t, a, r) {
                        const n = t ?? e;
                        if (!e || !a || !n || n > e) return null;
                        const o = (e) => e.toLocaleString(r ?? [], { style: "currency", currency: a, minimumFractionDigits: 0, maximumFractionDigits: 0 });
                        try {
                            const t = o((e - n) / 1e6),
                                a = o(e / 1e6);
                            return oa({ spentBudget: t, totalBudget: a });
                        } catch {
                            return null;
                        }
                    })(c, l, t);
                return r.createElement(n.Z, { style: sa.promotionInfoView, testID: Kt }, r.createElement(n.Z, { style: sa.infoItemView }, r.createElement(la, { budgetLabel: w, endTimeLabel: h, isIosCampaign: o, isPaused: i, percentagePassed: u, timeLeftLabel: g })));
            }
            function la(e) {
                const { budgetLabel: t, endTimeLabel: a, isPaused: o, percentagePassed: l, timeLeftLabel: s } = e,
                    c = { items: [{ label: r.createElement(i.ZP, { size: "headline2", weight: "heavy" }, o ? ta : ea), description: s ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: sa.progressBarContainer }, r.createElement(Xt.Z, { colorValue: o ? m.default.theme.colors.gray400 : m.default.theme.colors.primary, progress: l, style: sa.progressBar })), r.createElement(n.Z, { style: sa.subtexts }, t && r.createElement(i.ZP, { color: "gray700", hoverLabel: { label: t ?? "" } }, t), r.createElement(i.ZP, { color: "gray700", hoverLabel: { label: a } }, s))) : null }] };
                return r.createElement(Jt.Z, (0, $t.Z)({}, c, { containerStyle: sa.infoItem }));
            }
            const sa = m.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", paddingVertical: e.spaces.space24, paddingHorizontal: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap" }, infoItemView: { flex: 1 }, infoItem: { paddingHorizontal: 0, paddingVertical: 0 }, progressBarContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space4} + ${e.spaces.space2})`, marginTop: e.spaces.space12, marginBottom: e.spaces.space8 }, progressBar: { borderRadius: e.borderRadii.medium, height: "100%" }, subtexts: { flexDirection: "row", justifyContent: "space-between" } }));
            var ca = a(363895),
                ma = a(154003);
            const da = p().d228a9a0,
                pa = p().c174e46e;
            function ua(e) {
                const { buttonString: t, buttonTestID: a, infoItemGroup: o, link: i, onButtonPress: l } = e,
                    s = e.expandButtonText ?? da,
                    c = (0, ke.Z)(),
                    d = !r.useContext(se.Z).isModal,
                    p = c.width <= m.default.theme.breakpoints.xSmall,
                    [u, g] = r.useState(!1),
                    b = u ? pa : s,
                    f = [ga.promotionInfoView, d && ga.promotionInfoViewNarrow, p && ga.promotionInfoViewXSmall];
                return r.createElement(
                    n.Z,
                    { style: f, testID: Kt },
                    o && r.createElement(n.Z, { style: d ? (u ? ga.promotionInfoTextVisible : ga.promotionInfoTextHidden) : ga.promotionInfoTextWide }, o),
                    r.createElement(n.Z, { style: d ? ga.buttonViewNarrow : ga.buttonViewWide }, r.createElement(ma.ZP, { link: i, onPress: l, size: "large", testID: a, type: "primaryFilled" }, t)),
                    d &&
                        o &&
                        r.createElement(
                            n.Z,
                            { style: ga.buttonViewNarrow },
                            r.createElement(
                                ma.ZP,
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
            const ga = m.default.create((e) => ({ promotionInfoTextVisible: { display: "visible", marginBottom: e.spaces.space24, flexWrap: "wrap", flexGrow: 1, flexShrink: "initial" }, promotionInfoTextHidden: { display: "none" }, promotionInfoTextWide: { flexGrow: 1, flexShrink: "initial" }, promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap", justifyContent: "space-between", paddingVertical: e.spaces.space24 }, promotionInfoViewXSmall: { padding: e.spaces.space16 }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItemViewNarrow: { paddingBottom: e.spaces.space24 }, buttonViewNarrow: { flexGrow: 1, marginEnd: e.spaces.space16 }, buttonViewWide: { margin: "auto", marginEnd: 0 } })),
                ba = p().e8adeec8,
                fa = p().fbb5c37e;
            function ha(e) {
                const t = (0, Q.z)();
                const a = !!u.ZP.getTwitterAppVersion(),
                    n = `${e.tweet.permalink}/${a ? ca.ZV.Webview : ca.ZV.Rweb}/${ca.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: u.ZP.isTwitterApp() ? (u.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "PromoteAgainButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(ua, {
                        buttonString: a ? fa : ba,
                        link: n,
                        onButtonPress: function () {
                            t.scribe((0, _.gG)({ userId: e.userId, element: "PromoteAgainButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            p().h1fcb36c, p().ccffb487, p().df2c469a, p().ja781451;
            m.default.create((e) => ({ infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" } }));
            const wa = p().j619ec94,
                _a = p().ha13fd94;
            function ya(e) {
                const t = (0, Q.z)();
                const a = !!u.ZP.getTwitterAppVersion(),
                    n = `${e.tweet.permalink}/${a ? ca.ZV.Webview : ca.ZV.Rweb}/${ca.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: u.ZP.isTwitterApp() ? (u.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "NotStartedPromotionButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(ua, {
                        buttonString: a ? _a : wa,
                        link: n,
                        onButtonPress: function () {
                            t.scribe((0, _.gG)({ userId: e.userId, element: "NotStartedPromotionButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            var Ea = a(988227);
            const va = p().jede3014,
                Pa = p().b823301e,
                Za = p().a2e48870,
                xa = (0, o.ju)("https://x.com/adspolicy");
            function Ia(e) {
                const t = (0, Q.z)(),
                    a = { items: [{ label: r.createElement(i.ZP, { size: "headline2", weight: "heavy" }, va), description: Pa, decoration: r.createElement(Ea.default, { style: [Ca.icon, Ca.decorationContainer] }) }] };
                return r.createElement(
                    n.Z,
                    { style: Ca.promotionInfoView, testID: Kt },
                    r.createElement(n.Z, { style: Ca.infoItemView }, r.createElement(Jt.Z, (0, $t.Z)({}, a, { containerStyle: Ca.infoItem }))),
                    r.createElement(
                        n.Z,
                        { style: Ca.buttonView },
                        r.createElement(
                            i.ZP,
                            {
                                color: "primary",
                                link: xa,
                                onPress: function () {
                                    t.scribe((0, _.gG)({ userId: e.userId, element: "ReviewPolicyButton", tweet: e.tweet }));
                                },
                            },
                            Za,
                        ),
                    ),
                );
            }
            const Ca = m.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space24, flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap" }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" }, buttonView: { marginTop: e.spaces.space16, marginStart: e.spaces.space48 }, decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space24 }, icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.gray700 } })),
                ka = qt.Z,
                Va = Ht.Z;
            function Ta(e) {
                const { promotionInfoState: t, tweet: a } = e,
                    n = X()(ka, e.campaignInfo)?.ad,
                    o = X()(Va, e.metrics),
                    i = (0, Ve.Qy)("Engagements", [], o?.ad?.creative?.promotion_info),
                    l = (0, Ve.Qy)("Impressions", o?.promotion_info, o?.ad?.creative?.promotion_info),
                    s = i?.promoted_value,
                    c = l?.promoted_value,
                    m = !!u.ZP.getTwitterAppVersion() && u.ZP.isIOS();
                switch (t) {
                    case Qt.notProfessional:
                        return null;
                    case Qt.notStarted:
                        return r.createElement(ya, { isIosApp: m, tweet: a, userId: e.userId });
                    case Qt.underReview:
                        return r.createElement(Ia, { isIosApp: m, tweet: a, userId: e.userId });
                    case Qt.running:
                        return r.createElement(ia, { currency: n?.campaign?.currency, endTime: n?.campaign?.end_time, isIosCampaign: n?.campaign?.is_in_app_purchase, isPaused: !1, remainingBudget: n?.campaign?.remaining_budget, startTime: n?.campaign?.start_time, totalBudget: n?.campaign?.total_budget });
                    case Qt.paused:
                        return r.createElement(ia, { currency: n?.campaign?.currency, endTime: n?.campaign?.end_time, isIosCampaign: n?.campaign?.is_in_app_purchase, isPaused: !0, remainingBudget: n?.campaign?.remaining_budget, startTime: n?.campaign?.start_time, totalBudget: n?.campaign?.total_budget });
                    case Qt.completed:
                        return r.createElement(ha, { engagements: s, impressions: c, isIosApp: m, isIosCampaign: n?.campaign?.is_in_app_purchase, tweet: a, userId: e.userId });
                    default:
                        return null;
                }
            }
            var Sa = a(393416);
            const Ba = p().fc64990e,
                za = p().ge538876,
                Da = p().dcc05a7e,
                Ra = p().ca7e10d8,
                Aa = p().i611fc96,
                La = p().a69cd868,
                Ma = p().f894a688,
                ja = p().ad9d9204,
                Na = p().da4b7a70,
                Oa = p().e5b7dd84,
                Fa = p().de2d89a2,
                Wa = p().i92754c2,
                Ga = p().be8ddcc2,
                Ha = p().b01410d6,
                qa = p().gfb3d8af,
                Qa = p().i2785009,
                $a = p().fa8afc43,
                Ua = Sa.Z,
                Xa = (e) => {
                    const { isModal: t } = r.useContext(se.Z),
                        { featureSwitches: a } = r.useContext(f.rC),
                        o = a.isTrue("responsive_web_tweet_analytics_video_metrics_v2_enabled"),
                        l = (0, ke.Z)(),
                        s = X()(Ua, e.metrics);
                    if (!s || !e.video) return null;
                    const c = e.video.video_info.duration_millis ?? 1,
                        d = c >= 36e5,
                        p = [0, 0.25, 0.5, 0.75, 1].map((e) => {
                            const t = e * c;
                            return (0, Ve.LU)(t, d);
                        }),
                        u = !!s.ad,
                        g = l.width < m.default.theme.breakpoints.xSmall,
                        [b, h, w, _, y, E, v] = ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"].map((e) => (0, Ve.Qy)(e, s.video, s.ad?.creative?.video)),
                        P = [
                            [w, Oa, Oa],
                            [_, Qa(0.25), Fa],
                            [y, Qa(0.5), Wa],
                            [E, Qa(0.75), Ga],
                            [v, Qa(1), Ha],
                        ].map(([e, t, a], n) => {
                            const i = o ? b?.total_value : w?.total_value,
                                l = ((s = e?.total_value), (c = i ?? 1), s ? Math.min(1, Math.round((s / c) * 100) / 100) : 0);
                            var s, c;
                            return { value: l, label: o && p ? p[n] : t, color: "blue900", popover: o && p ? r.createElement(Ka, { label: qa({ timeLabel: p[n] }), metric: l }) : r.createElement(Ya, { label: a, metric: e, showPromotionPercentages: u }) };
                        });
                    return r.createElement(
                        n.Z,
                        { style: g ? er.smallSpacing : er.normalSpacing },
                        r.createElement(i.ZP, { "aria-label": Ba, "aria-level": 3, role: "heading", size: "title3", weight: "heavy" }, Ba),
                        r.createElement(i.ZP, { "aria-label": za, color: "gray700", size: "subtext1", style: er.subtitle }, za),
                        r.createElement(
                            n.Z,
                            { role: "region", style: [t ? er.modalGrid : er.mobileGrid, { gridGap: g ? m.default.theme.spaces.space24 : m.default.theme.spaces.space40 }] },
                            r.createElement(et, { key: Ra, label: Ra, metric: h, popover: r.createElement(Re, { showPromotion: u, text: La }), showPromotionPercentages: u }),
                            r.createElement(et, { key: Da, label: Da, metric: b, popover: r.createElement(Re, { showPromotion: u, text: Aa }), showPromotionPercentages: u }),
                            r.createElement(
                                n.Z,
                                { style: t ? er.modalChart : er.mobileChart },
                                r.createElement(Ge.Z, {
                                    audioChart: !0,
                                    barConfig: { borderRadii: "none", layout: "fixedSpacing", spacing: "space4" },
                                    data: P,
                                    gridlines: [0, 0.5, 1],
                                    style: { height: 135 },
                                    ticks: [
                                        { value: 0, label: r.createElement(Ja, { value: 0 }) },
                                        { value: 0.5, label: r.createElement(Ja, { value: 0.5 }) },
                                        { value: 1, label: r.createElement(Ja, { value: 1 }) },
                                    ],
                                    title: Ma,
                                    titleDescription: r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, o ? Na : ja),
                                }),
                            ),
                        ),
                    );
                };
            const Ja = (e) => r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2", weight: "medium" }, Qa(e.value)),
                Ya = (e) => {
                    const t = e.metric?.promoted_value && e.metric?.total_value ? e.metric?.promoted_value / e.metric?.total_value : 0,
                        a = [e.showPromotionPercentages && Zt(t, !0)];
                    return r.createElement(n.Z, { style: er.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(Se.ZP, { label: e.label, size: "title3", subTextList: a, value: $a(e.metric?.total_value ?? 0) }));
                },
                Ka = (e) => r.createElement(n.Z, { style: er.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(Se.ZP, { label: e.label, size: "title3", value: Qa(e.metric) })),
                er = m.default.create((e) => ({ smallSpacing: { marginBottom: e.spaces.space20, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 }, normalSpacing: { marginBottom: e.spaces.space40, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space32 }, subtitle: { marginTop: e.spaces.space2, marginBottom: e.spaces.space32 }, mobileGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, mobileChart: { gridColumn: "1 / 3", gridRow: 2 }, modalGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, modalChart: { gridColumn: "1 / 4", gridRow: 2 }, popoverDataPoint: { margin: e.spaces.space16 } })),
                tr = r.memo(Xa),
                ar = p().fc2a5c92,
                rr = p().hb52cc4a,
                nr = p().fc6cbba2,
                or = p().b80a53c8,
                ir = p().efb9a9e0,
                lr = p().d25dccb6;
            class sr extends r.Component {
                constructor(e) {
                    super(e), (this.state = { hasError: !1 });
                }
                componentDidCatch(e, t) {
                    (0, H.ZP)(e.message);
                }
                static getDerivedStateFromError() {
                    return { hasError: !0 };
                }
                render() {
                    const { hasError: e } = this.state,
                        { tweet: t } = this.props,
                        a = !!t.trusted_friends_info;
                    return e || a ? r.createElement(cr, this.props) : this.props.children;
                }
            }
            const cr = (e) => {
                    const { tweet: t } = e,
                        { isModal: a } = r.useContext(se.Z),
                        o = (0, G.R)(),
                        [l] = r.useState(o().toISOString()),
                        s = new Date(l) - new Date(t.created_at) < 3e5,
                        c = !!t.trusted_friends_info,
                        m = c ? ir : s ? nr : ar,
                        d = c ? lr : s ? or : rr;
                    return r.createElement(n.Z, { style: mr.root }, r.createElement(n.Z, { style: [mr.content, { flexDirection: a ? "row" : "column-reverse" }] }, r.createElement(n.Z, { style: mr.text }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, m), r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, d))));
                },
                mr = m.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }, content: { display: "flex", alignItems: "center", margin: e.spaces.space32 }, text: { flex: 1, alignSelf: "center" }, img: { height: 175, width: 280 } })),
                dr = p().deaf5b16,
                pr = ["DetailExpands", "Engagements", "Follows", "Impressions", "LinkClicks", "ProfileVisits"],
                ur = [...pr, "UniqueImpressions"],
                gr = R.Z,
                br = (0, F.z)(gr, { errorConfig: { context: C } });
            function fr(e) {
                const { liveCounts: t, quickPromoteEligibility: a, tweet: o, userId: i } = e,
                    l = (0, Q.z)(),
                    s = (0, W.hC)("gryphon_hide_quick_promote"),
                    c = L()(),
                    m = (0, E.n7)(C),
                    d = (0, W.hC)("responsive_web_tweet_analytics_m3_enabled"),
                    p = (0, G.R)(),
                    [u] = r.useState(p().toISOString()),
                    g = new Date(new Date(o.created_at).setMinutes(0, 0, 0)),
                    b = (0, q.o)(
                        () => g.toISOString(),
                        (e) => {
                            throw (e instanceof RangeError && (0, H.Hj)("invalid tweet.created_at", { extra: { createdAt: o.created_at } }), e);
                        },
                    ),
                    f = new Date(g.getTime() + 1728e5).toISOString(),
                    h = o?.extended_entities?.media?.find((e) => "video" === e.type),
                    w = !!o.trusted_friends_info,
                    y = d ? ur : pr,
                    v = r.useMemo(() => [...y, "CostPerFollower"], [y]);
                return (
                    r.useEffect(() => {
                        const e = m({ showToast: !1 });
                        j()(c, gr, { restId: o.id_str, from_time: b, to_time: u, first_48_hours_time: f, requested_organic_metrics: y, requested_promoted_metrics: v }).subscribe({ error: e });
                    }, [o, c, m, b, u, f, y, v]),
                    r.createElement(br, {
                        render: (e) => {
                            if (e.fetchStatus === F.i.FAILED) {
                                const t = e.retry;
                                return l.scribe((0, _.X0)("NetworkError", i, o)), r.createElement(N.Z, { onRequestRetry: t, retryMessage: dr });
                            }
                            if (e.fetchStatus === F.i.LOADED) {
                                const l = e.data?.tweet_result_by_rest_id?.result;
                                let c = null;
                                if (("Tweet" === l?.__typename ? (c = l) : "TweetWithVisibilityResults" === l?.__typename && (c = l.tweet), c)) {
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
                                    return r.createElement(n.Z, { style: hr.tweetActivity }, r.createElement(n.Z, { style: hr.metricsView }, r.createElement(sr, { tweet: o }, r.createElement(Wt, { liveCounts: t, metrics: c, tweet: o }), r.createElement(Ct, { metrics: c, tweet: o }), !!h && r.createElement(r.Fragment, null, r.createElement(O.Z, { spacing: "space2" }), r.createElement(tr, { metrics: c, video: h })), r.createElement(Ie, { metricsRef: c }))), !e || w || s ? null : r.createElement(Ta, { campaignInfo: c, metrics: c, promotionInfoState: e, tweet: o, userId: i }));
                                }
                            }
                            return null;
                        },
                        variables: { restId: o.id_str, from_time: b, to_time: u, first_48_hours_time: f, requested_organic_metrics: y, requested_promoted_metrics: v },
                    })
                );
            }
            const hr = m.default.create((e) => ({ tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } })),
                wr = p().fc4e5d96,
                _r = p().ab0da59f,
                yr = p().deaf5b16,
                Er = p().dcc05a7e,
                vr = (0, o.ju)("https://help.x.com/using-twitter/view-counts"),
                Pr = { link: r.createElement(i.ZP, { color: "text", link: vr, weight: "bold", withUnderline: !0 }) },
                Zr = r.createElement(p().I18NFormatMessage, { $i18n: "gc31d3e9" }, r.cloneElement(Pr.link, null, p().a10aa36c)),
                xr = r.createElement(p().I18NFormatMessage, { $i18n: "he0e6ed7" }, r.cloneElement(Pr.link, null, p().d0740558)),
                Ir = r.createElement(p().I18NFormatMessage, { $i18n: "c780f52b" }, r.cloneElement(Pr.link, null, p().d2d76dca)),
                Cr = p().ae32e7de,
                kr = p().e839db3a;
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
                            const { isOwnerOrAdminAllowed: e, liveCounts: t, quickPromoteEligibility: a, tweet: o } = this.props,
                                i = (o && l.Z.getOriginalTweet(o)) || void 0;
                            return !i || (i && i.user.id_str !== this.context.viewerUserId) || !e ? r.createElement(s.Z, { onRetry: null, title: wr }) : (this._scribeEligibility(), r.createElement(n.Z, { style: Tr.topLevelView }, r.createElement(n.Z, { style: Tr.quoteTweet }, r.createElement(h.Z, { isCondensed: !0, style: { cursor: "default" }, tweetId: i.id_str, withLink: !1, withUserHoverCard: !1 })), r.createElement(fr, { liveCounts: t, quickPromoteEligibility: a, tweet: i, userId: this.context.viewerUserId || "" })));
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
                        n = (a && l.Z.getOriginalTweet(a)) || void 0,
                        o = !n || (n && n.user.id_str !== this.context.viewerUserId),
                        i = !!u.ZP.getTwitterAppVersion(),
                        s = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        m = l.Z.getLocalizedEntityName({ tweet: a, articlesEnabled: s, capitalized: !0 });
                    if (e !== y.iF.LOADED || (n && !o) || !this.viewCountEnabled) return r.createElement(b.Z, { appBarRef: this._setAppBarRef, backLocation: n ? n.permalink : "/", hideBackButton: i, history: t, onBackClick: this._handleGoBack, renderHeader: (e) => (i ? null : e), title: i ? null : _r({ entity: m }) }, r.createElement(g.Z, { fetchStatus: e, render: this._render, retryMessage: yr }));
                    {
                        const e = n?.views?.count,
                            t = n?.views?.state,
                            a = n?.promoted_content;
                        let o = Ir;
                        return a ? (o = Cr) : 0 === e && "EnabledWithCount" === t ? (o = xr) : "EnabledWithCount" === t && (o = Zr), r.createElement(c.Z, { actionLabel: kr, graphicDisplayMode: "none", headline: Er, isFullHeightOnMobile: !0, onAction: this._handleGoBack, onClose: this._handleGoBack, subtext: o });
                    }
                }
            }
            Vr.contextType = f.rC;
            const Tr = m.default.create((e) => ({ topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                Sr = D(Vr);
        },
        979673: (e, t, a) => {
            a.d(t, { LU: () => l, Qy: () => d, fV: () => m, jf: () => c });
            var r = a(674132),
                n = a.n(r);
            const o = n().ja781451,
                i = n().cfa1a7b9,
                l = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function s(e) {
                return e || 0;
            }
            function c(e, t) {
                const a = s(t);
                return 0 === a ? 0 : s(e) / a;
            }
            function m(e, t = 1e5) {
                const a = s(e);
                return a >= t ? i(a) : o(a);
            }
            function d(e, t, a) {
                const r = t?.find((t) => t.metric_type === e),
                    n = a?.find((t) => t.metric_type === e),
                    o = r?.metric_value ?? 0,
                    i = n?.metric_value ?? 0;
                return { metric_type: e, organic_value: o, promoted_value: i, total_value: o + i };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-a7d46b56.dd1c616a.js.map
