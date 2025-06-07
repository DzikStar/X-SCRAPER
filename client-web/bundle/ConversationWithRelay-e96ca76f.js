"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-e96ca76f"],
    {
        710402: (e, t, a) => {
            a.r(t), a.d(t, { ConversationAnalyticsScreen: () => oa, default: () => la });
            var r = a(202784),
                n = a(325686),
                i = a(688715),
                o = a(731708),
                s = a(782261),
                l = a(420740),
                c = a(529356),
                d = a(392237),
                m = a(111677),
                u = a.n(m),
                p = a(323265),
                g = a(290402),
                f = a(980407),
                w = a(443781),
                b = a(301758),
                h = a(702001),
                y = a(738321),
                _ = a(312771),
                E = a(71620),
                v = a(668214),
                I = a(549116),
                Z = a(852657),
                P = a(390387),
                C = a(836255);
            const x = "CONVERSATION_ANALYTICS_SCREEN",
                S = (e, t) => t.match.params.statusId,
                T = (e, t) => C.Z.selectHydrated(e, S(0, t)),
                k = (e, t) => (0, Z.oo)(e, S(0, t)),
                V = (e, t) => C.Z.selectFetchStatus(e, S(0, t)),
                B = (e, t) => (0, Z.XJ)(e, S(0, t)),
                A = (e, t) => (0, I.Yt)(e, S(0, t)),
                D = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: V, liveCounts: A, quickPromoteEligibilityFetchStatus: k, statusId: S, tweet: T, quickPromoteEligibility: B, isOwnerOrAdminAllowed: P.Js }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)(x), fetchTweetIfNeeded: C.Z.fetchOneIfNeeded, fetchQuickPromoteEligibilityIfNeeded: Z.E6 }))
                    .withAnalytics({ page: "tweet", section: "analytics", component: "ConversationAnalytics" });
            a(571372);
            var R = a(999325),
                L = (a(585488), a(437429)),
                z = a.n(L),
                N = a(10622),
                W = a.n(N),
                F = a(750410),
                G = a(661810),
                H = a(301410),
                O = a(952793),
                q = a(566220),
                M = a(163889),
                j = a(16222),
                $ = a(725516),
                U = a(356821),
                Q = a(231503),
                X = a(743738),
                J = a(277660),
                Y = a.n(J),
                K = a(885015),
                ee = a(432181),
                te = a(155353),
                ae = a(194661),
                re = a(979673);
            const ne = X.Z,
                ie = u().ib1f8491,
                oe = u().dc0e7f37,
                se = u().d0eeb127,
                le = u().i2785009,
                ce = u().g33fd6b1,
                de = u().eefcd267,
                me = u().h4cbba3e,
                ue = u().h1cdac12;
            function pe(e) {
                const { featureSwitches: t } = r.useContext(w.rC);
                if (t && t.isTrue("responsive_web_qp_new_boost_analytics_enabled")) return null;
                let { percentageValue: a } = e;
                a > 1 && ((a = 1), (0, M.ZP)({ name: "AnalyticsPercentageGreaterThan100", message: "Promoted Analytics percentage exceeded 100%", displayName: "AnalyticsPercentageGreaterThan100" }));
                const i = a >= 0.045 ? le(a) : me,
                    s = a >= 0.045 ? ce({ percentage: i }) : ue;
                return a > 0 && r.createElement(n.Z, { "aria-label": s, style: fe.percentageView }, r.createElement(o.ZP, { "aria-hidden": !0, color: "primary900", size: "subtext3", weight: "bold" }, i));
            }
            function ge(e) {
                const { liveCounts: t, tweet: a } = e,
                    i = Y()(ne, e.metrics),
                    s = !!i?.ad,
                    l = (0, re.Qy)("Likes", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    c = (0, re.Qy)("Retweets", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    d = (0, re.Qy)("Replies", null, i?.ad?.creative?.like_retweet_replies)?.promoted_value ?? 0,
                    m = t?.likeCount || a.favorite_count || 0,
                    u = (t?.quoteCount || a.quote_count || 0) + (t?.retweetCount || a.retweet_count),
                    p = t?.replyCount || a.reply_count || 0,
                    g = l ? l / m : 0,
                    f = c ? c / u : 0,
                    w = d ? d / p : 0;
                return r.createElement(n.Z, { style: fe.actionsBar }, r.createElement(K.Z, null, r.createElement(n.Z, { "aria-label": ie({ likeCount: m }), style: fe.column }, r.createElement(ee.default, { style: fe.actionIconsColor }), r.createElement(o.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, de(m)), s ? r.createElement(pe, { percentageValue: g }) : null), r.createElement(n.Z, { "aria-label": oe({ retweetCount: u }), style: fe.column }, r.createElement(te.default, { style: fe.actionIconsColor }), r.createElement(o.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, de(u)), s ? r.createElement(pe, { percentageValue: f }) : null), r.createElement(n.Z, { "aria-label": se({ replyCount: p }), style: fe.column }, r.createElement(ae.default, { style: fe.actionIconsColor }), r.createElement(o.ZP, { align: "center", "aria-hidden": !0, weight: "bold" }, de(p)), s ? r.createElement(pe, { percentageValue: w }) : null)));
            }
            const fe = d.default.create((e) => ({ column: { flexGrow: 1, marginHorizontal: "auto", padding: e.componentDimensions.gutterHorizontal }, actionsBar: { marginHorizontal: e.spaces.space16, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", borderRadius: e.borderRadii.large }, actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 }, percentageView: { margin: "auto", backgroundColor: d.default.theme.colors.primary50, borderRadius: d.default.theme.borderRadii.infinite, color: d.default.theme.colors.primary, marginTop: d.default.theme.spaces.space4, paddingVertical: d.default.theme.spaces.space4, paddingHorizontal: d.default.theme.spacesPx.space4 + d.default.theme.spacesPx.space2 }, promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginEnd: e.spaces.space4 } }));
            var we = a(573519),
                be = a(716754);
            const he = Object.freeze({ notProfessional: "not_professional", notStarted: "not_started", underReview: "under_review", running: "running", completed: "completed", paused: "paused" });
            var ye = a(807896),
                _e = a(818080),
                Ee = a(822399),
                ve = a(593866),
                Ie = a(207137);
            const Ze = "promotionInfoWrapper",
                Pe = u().db6efeb8,
                Ce = u().j6daea86,
                xe = u().jade381b,
                Se = u().d725a289,
                Te = u().hf9ed10f,
                ke = u().f42a198d;
            function Ve(e) {
                const { currency: t, endTime: a, isIosCampaign: i, isPaused: o, remainingBudget: s, startTime: l, totalBudget: c } = e,
                    d = a ? new Date(a) : null,
                    m = l ? new Date(l) : null,
                    u = !!d && d > new Date(Date.now()),
                    p = d && m ? (0, Ie.BC)(new Date(m), new Date(d)) : 0,
                    g = a && u ? _e.Z.getTimeLeftLabelTwoUnits(a) : null,
                    f = d ? Se(d) : "",
                    w = d ? xe(d) : "",
                    b = Te({ endTimeString: f, endDateString: w }),
                    h = (function (e, t, a, r) {
                        const n = t ?? e;
                        if (!e || !a || !n || n > e) return null;
                        const i = (e) => e.toLocaleString(r ?? [], { style: "currency", currency: a, minimumFractionDigits: 0, maximumFractionDigits: 0 });
                        try {
                            const t = i((e - n) / 1e6),
                                a = i(e / 1e6);
                            return ke({ spentBudget: t, totalBudget: a });
                        } catch {
                            return null;
                        }
                    })(c, s, t);
                return r.createElement(n.Z, { style: Ae.promotionInfoView, testID: Ze }, r.createElement(n.Z, { style: Ae.infoItemView }, r.createElement(Be, { budgetLabel: h, endTimeLabel: b, isIosCampaign: i, isPaused: o, percentagePassed: p, timeLeftLabel: g })));
            }
            function Be(e) {
                const { budgetLabel: t, endTimeLabel: a, isPaused: i, percentagePassed: s, timeLeftLabel: l } = e,
                    c = { items: [{ label: r.createElement(o.ZP, { size: "headline2", weight: "heavy" }, i ? Ce : Pe), description: l ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: Ae.progressBarContainer }, r.createElement(Ee.Z, { colorValue: i ? d.default.theme.colors.gray400 : d.default.theme.colors.primary, progress: s, style: Ae.progressBar })), r.createElement(n.Z, { style: Ae.subtexts }, t && r.createElement(o.ZP, { color: "gray700", hoverLabel: { label: t ?? "" } }, t), r.createElement(o.ZP, { color: "gray700", hoverLabel: { label: a } }, l))) : null }] };
                return r.createElement(ve.Z, (0, ye.Z)({}, c, { containerStyle: Ae.infoItem }));
            }
            const Ae = d.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", paddingVertical: e.spaces.space24, paddingHorizontal: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap" }, infoItemView: { flex: 1 }, infoItem: { paddingHorizontal: 0, paddingVertical: 0 }, progressBarContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space4} + ${e.spaces.space2})`, marginTop: e.spaces.space12, marginBottom: e.spaces.space8 }, progressBar: { borderRadius: e.borderRadii.medium, height: "100%" }, subtexts: { flexDirection: "row", justifyContent: "space-between" } }));
            var De = a(363895),
                Re = a(858440),
                Le = a(386802),
                ze = a(154003);
            const Ne = u().d228a9a0,
                We = u().c174e46e;
            function Fe(e) {
                const { buttonString: t, buttonTestID: a, infoItemGroup: i, link: o, onButtonPress: s } = e,
                    l = e.expandButtonText ?? Ne,
                    c = (0, Re.Z)(),
                    m = !r.useContext(Le.Z).isModal,
                    u = c.width <= d.default.theme.breakpoints.xSmall,
                    [p, g] = r.useState(!1),
                    f = p ? We : l,
                    w = [Ge.promotionInfoView, m && Ge.promotionInfoViewNarrow, u && Ge.promotionInfoViewXSmall];
                return r.createElement(
                    n.Z,
                    { style: w, testID: Ze },
                    i && r.createElement(n.Z, { style: m ? (p ? Ge.promotionInfoTextVisible : Ge.promotionInfoTextHidden) : Ge.promotionInfoTextWide }, i),
                    r.createElement(n.Z, { style: m ? Ge.buttonViewNarrow : Ge.buttonViewWide }, r.createElement(ze.ZP, { link: o, onPress: s, size: "large", testID: a, type: "primaryFilled" }, t)),
                    m &&
                        i &&
                        r.createElement(
                            n.Z,
                            { style: Ge.buttonViewNarrow },
                            r.createElement(
                                ze.ZP,
                                {
                                    onPress: () => {
                                        g(m && !p);
                                    },
                                    size: "large",
                                    type: "primaryText",
                                },
                                f,
                            ),
                        ),
                );
            }
            const Ge = d.default.create((e) => ({ promotionInfoTextVisible: { display: "visible", marginBottom: e.spaces.space24, flexWrap: "wrap", flexGrow: 1, flexShrink: "initial" }, promotionInfoTextHidden: { display: "none" }, promotionInfoTextWide: { flexGrow: 1, flexShrink: "initial" }, promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space32, flexDirection: "row", alignItems: "flex-start" }, promotionInfoViewNarrow: { flexWrap: "wrap", justifyContent: "space-between", paddingVertical: e.spaces.space24 }, promotionInfoViewXSmall: { padding: e.spaces.space16 }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItemViewNarrow: { paddingBottom: e.spaces.space24 }, buttonViewNarrow: { flexGrow: 1, marginEnd: e.spaces.space16 }, buttonViewWide: { margin: "auto", marginEnd: 0 } })),
                He = u().e8adeec8,
                Oe = u().fbb5c37e;
            function qe(e) {
                const t = (0, $.z)();
                const a = !!p.ZP.getTwitterAppVersion(),
                    n = `${e.tweet.permalink}/${a ? De.ZV.Webview : De.ZV.Rweb}/${De.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "PromoteAgainButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(Fe, {
                        buttonString: a ? Oe : He,
                        link: n,
                        onButtonPress: function () {
                            t.scribe((0, y.gG)({ userId: e.userId, element: "PromoteAgainButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            u().h1fcb36c, u().ccffb487, u().df2c469a, u().ja781451;
            d.default.create((e) => ({ infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" } }));
            const Me = u().j619ec94,
                je = u().ha13fd94;
            function $e(e) {
                const t = (0, $.z)();
                const a = !!p.ZP.getTwitterAppVersion(),
                    n = `${e.tweet.permalink}/${a ? De.ZV.Webview : De.ZV.Rweb}/${De.MN.Intro}`;
                return (
                    r.useEffect(() => {
                        t.scribe({ page: p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "analytics_android" : "analytics_ios") : "analytics", element: "NotStartedPromotionButton", component: "tweet_promote_button", action: "load" });
                    }, []),
                    r.createElement(Fe, {
                        buttonString: a ? je : Me,
                        link: n,
                        onButtonPress: function () {
                            t.scribe((0, y.gG)({ userId: e.userId, element: "NotStartedPromotionButton", tweet: e.tweet }));
                        },
                    })
                );
            }
            var Ue = a(988227);
            const Qe = u().jede3014,
                Xe = u().b823301e,
                Je = u().a2e48870,
                Ye = (0, i.ju)("https://x.com/adspolicy");
            function Ke(e) {
                const t = (0, $.z)(),
                    a = { items: [{ label: r.createElement(o.ZP, { size: "headline2", weight: "heavy" }, Qe), description: Xe, decoration: r.createElement(Ue.default, { style: [et.icon, et.decorationContainer] }) }] };
                return r.createElement(
                    n.Z,
                    { style: et.promotionInfoView, testID: Ze },
                    r.createElement(n.Z, { style: et.infoItemView }, r.createElement(ve.Z, (0, ye.Z)({}, a, { containerStyle: et.infoItem }))),
                    r.createElement(
                        n.Z,
                        { style: et.buttonView },
                        r.createElement(
                            o.ZP,
                            {
                                color: "primary",
                                link: Ye,
                                onPress: function () {
                                    t.scribe((0, y.gG)({ userId: e.userId, element: "ReviewPolicyButton", tweet: e.tweet }));
                                },
                            },
                            Je,
                        ),
                    ),
                );
            }
            const et = d.default.create((e) => ({ promotionInfoView: { position: "sticky", bottom: 0, start: 0, backgroundColor: e.colors.navigationBackground, borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid", padding: e.spaces.space24, flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap" }, infoItemView: { flexShrink: "initial", flexWrap: "wrap" }, infoItem: { paddingHorizontal: "0px", paddingVertical: "0px" }, buttonView: { marginTop: e.spaces.space16, marginStart: e.spaces.space48 }, decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space24 }, icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.gray700 } })),
                tt = be.Z,
                at = we.Z;
            function rt(e) {
                const { promotionInfoState: t, tweet: a } = e,
                    n = Y()(tt, e.campaignInfo)?.ad,
                    i = Y()(at, e.metrics),
                    o = (0, re.Qy)("Engagements", [], i?.ad?.creative?.promotion_info),
                    s = (0, re.Qy)("Impressions", i?.promotion_info, i?.ad?.creative?.promotion_info),
                    l = o?.promoted_value,
                    c = s?.promoted_value,
                    d = !!p.ZP.getTwitterAppVersion() && p.ZP.isIOS();
                switch (t) {
                    case he.notProfessional:
                        return null;
                    case he.notStarted:
                        return r.createElement($e, { isIosApp: d, tweet: a, userId: e.userId });
                    case he.underReview:
                        return r.createElement(Ke, { isIosApp: d, tweet: a, userId: e.userId });
                    case he.running:
                        return r.createElement(Ve, { currency: n?.campaign?.currency, endTime: n?.campaign?.end_time, isIosCampaign: n?.campaign?.is_in_app_purchase, isPaused: !1, remainingBudget: n?.campaign?.remaining_budget, startTime: n?.campaign?.start_time, totalBudget: n?.campaign?.total_budget });
                    case he.paused:
                        return r.createElement(Ve, { currency: n?.campaign?.currency, endTime: n?.campaign?.end_time, isIosCampaign: n?.campaign?.is_in_app_purchase, isPaused: !0, remainingBudget: n?.campaign?.remaining_budget, startTime: n?.campaign?.start_time, totalBudget: n?.campaign?.total_budget });
                    case he.completed:
                        return r.createElement(qe, { engagements: l, impressions: c, isIosApp: d, isIosCampaign: n?.campaign?.is_in_app_purchase, tweet: a, userId: e.userId });
                    default:
                        return null;
                }
            }
            var nt = a(393416),
                it = a(595294),
                ot = a(738545),
                st = a(381071),
                lt = a(209961);
            const ct = u().fc64990e,
                dt = u().ge538876,
                mt = u().dcc05a7e,
                ut = u().ca7e10d8,
                pt = u().i611fc96,
                gt = u().a69cd868,
                ft = u().f894a688,
                wt = u().ad9d9204,
                bt = u().da4b7a70,
                ht = u().e5b7dd84,
                yt = u().de2d89a2,
                _t = u().i92754c2,
                Et = u().be8ddcc2,
                vt = u().b01410d6,
                It = u().gfb3d8af,
                Zt = u().i2785009,
                Pt = u().fa8afc43,
                Ct = nt.Z,
                xt = (e) => {
                    const { isModal: t } = r.useContext(Le.Z),
                        { featureSwitches: a } = r.useContext(w.rC),
                        i = a.isTrue("responsive_web_tweet_analytics_video_metrics_v2_enabled"),
                        s = (0, Re.Z)(),
                        l = Y()(Ct, e.metrics);
                    if (!l || !e.video) return null;
                    const c = e.video.video_info.duration_millis ?? 1,
                        m = c >= 36e5,
                        u = [0, 0.25, 0.5, 0.75, 1].map((e) => {
                            const t = e * c;
                            return (0, re.LU)(t, m);
                        }),
                        p = !!l.ad,
                        g = s.width < d.default.theme.breakpoints.xSmall,
                        [f, b, h, y, _, E, v] = ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"].map((e) => (0, re.Qy)(e, l.video, l.ad?.creative?.video)),
                        I = [
                            [h, ht, ht],
                            [y, Zt(0.25), yt],
                            [_, Zt(0.5), _t],
                            [E, Zt(0.75), Et],
                            [v, Zt(1), vt],
                        ].map(([e, t, a], n) => {
                            const o = i ? f?.total_value : h?.total_value,
                                s = ((l = e?.total_value), (c = o ?? 1), l ? Math.min(1, Math.round((l / c) * 100) / 100) : 0);
                            var l, c;
                            return { value: s, label: i && u ? u[n] : t, color: "blue900", popover: i && u ? r.createElement(kt, { label: It({ timeLabel: u[n] }), metric: s }) : r.createElement(Tt, { label: a, metric: e, showPromotionPercentages: p }) };
                        });
                    return r.createElement(
                        n.Z,
                        { style: g ? Vt.smallSpacing : Vt.normalSpacing },
                        r.createElement(o.ZP, { "aria-label": ct, "aria-level": 3, role: "heading", size: "title3", weight: "heavy" }, ct),
                        r.createElement(o.ZP, { "aria-label": dt, color: "gray700", size: "subtext1", style: Vt.subtitle }, dt),
                        r.createElement(
                            n.Z,
                            { role: "region", style: [t ? Vt.modalGrid : Vt.mobileGrid, { gridGap: g ? d.default.theme.spaces.space24 : d.default.theme.spaces.space40 }] },
                            r.createElement(st.L, { key: ut, label: ut, metric: b, popover: r.createElement(lt.Z, { showPromotion: p, text: gt }), showPromotionPercentages: p }),
                            r.createElement(st.L, { key: mt, label: mt, metric: f, popover: r.createElement(lt.Z, { showPromotion: p, text: pt }), showPromotionPercentages: p }),
                            r.createElement(
                                n.Z,
                                { style: t ? Vt.modalChart : Vt.mobileChart },
                                r.createElement(it.Z, {
                                    audioChart: !0,
                                    barConfig: { borderRadii: "none", layout: "fixedSpacing", spacing: "space4" },
                                    data: I,
                                    gridlines: [0, 0.5, 1],
                                    style: { height: 135 },
                                    ticks: [
                                        { value: 0, label: r.createElement(St, { value: 0 }) },
                                        { value: 0.5, label: r.createElement(St, { value: 0.5 }) },
                                        { value: 1, label: r.createElement(St, { value: 1 }) },
                                    ],
                                    title: ft,
                                    titleDescription: r.createElement(o.ZP, { color: "gray700", size: "body", weight: "normal" }, i ? bt : wt),
                                }),
                            ),
                        ),
                    );
                };
            const St = (e) => r.createElement(o.ZP, { align: "center", color: "gray700", size: "subtext2", weight: "medium" }, Zt(e.value)),
                Tt = (e) => {
                    const { featureSwitches: t } = r.useContext(w.rC),
                        a = e.metric?.promoted_value && e.metric?.total_value ? e.metric?.promoted_value / e.metric?.total_value : 0,
                        i = [e.showPromotionPercentages && (0, Q.O$)(a, !0, t)];
                    return r.createElement(n.Z, { style: Vt.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(ot.ZP, { label: e.label, size: "title3", subTextList: i, value: Pt(e.metric?.total_value ?? 0) }));
                },
                kt = (e) => r.createElement(n.Z, { style: Vt.popoverDataPoint, testID: `${e.label} bar details` }, r.createElement(ot.ZP, { label: e.label, size: "title3", value: Zt(e.metric) })),
                Vt = d.default.create((e) => ({ smallSpacing: { marginBottom: e.spaces.space20, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 }, normalSpacing: { marginBottom: e.spaces.space40, marginTop: e.spaces.space12, marginHorizontal: e.spaces.space32 }, subtitle: { marginTop: e.spaces.space2, marginBottom: e.spaces.space32 }, mobileGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, mobileChart: { gridColumn: "1 / 3", gridRow: 2 }, modalGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, min-content)" }, modalChart: { gridColumn: "1 / 4", gridRow: 2 }, popoverDataPoint: { margin: e.spaces.space16 } })),
                Bt = r.memo(xt),
                At = u().fc2a5c92,
                Dt = u().hb52cc4a,
                Rt = u().fc6cbba2,
                Lt = u().b80a53c8,
                zt = u().efb9a9e0,
                Nt = u().d25dccb6;
            class Wt extends r.Component {
                constructor(e) {
                    super(e), (this.state = { hasError: !1 });
                }
                componentDidCatch(e, t) {
                    (0, M.ZP)(e.message);
                }
                static getDerivedStateFromError() {
                    return { hasError: !0 };
                }
                render() {
                    const { hasError: e } = this.state,
                        { tweet: t } = this.props,
                        a = !!t.trusted_friends_info;
                    return e || a ? r.createElement(Ft, this.props) : this.props.children;
                }
            }
            const Ft = (e) => {
                    const { tweet: t } = e,
                        { isModal: a } = r.useContext(Le.Z),
                        i = (0, q.R)(),
                        [s] = r.useState(i().toISOString()),
                        l = new Date(s) - new Date(t.created_at) < 3e5,
                        c = !!t.trusted_friends_info,
                        d = c ? zt : l ? Rt : At,
                        m = c ? Nt : l ? Lt : Dt;
                    return r.createElement(n.Z, { style: Gt.root }, r.createElement(n.Z, { style: [Gt.content, { flexDirection: a ? "row" : "column-reverse" }] }, r.createElement(n.Z, { style: Gt.text }, r.createElement(o.ZP, { size: "title3", weight: "heavy" }, d), r.createElement(o.ZP, { color: "gray700", size: "body", weight: "normal" }, m))));
                },
                Gt = d.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }, content: { display: "flex", alignItems: "center", margin: e.spaces.space32 }, text: { flex: 1, alignSelf: "center" }, img: { height: 175, width: 280 } })),
                Ht = u().deaf5b16,
                Ot = ["DetailExpands", "Engagements", "Follows", "Impressions", "LinkClicks", "ProfileVisits"],
                qt = [...Ot, "UniqueImpressions"],
                Mt = R.Z,
                jt = (0, H.z)(Mt, { errorConfig: { context: x } });
            function $t(e) {
                const { liveCounts: t, quickPromoteEligibility: a, tweet: i, userId: o } = e,
                    s = (0, $.z)(),
                    l = (0, O.hC)("gryphon_hide_quick_promote"),
                    c = z()(),
                    d = (0, E.n7)(x),
                    m = (0, O.hC)("responsive_web_tweet_analytics_m3_enabled"),
                    u = (0, q.R)(),
                    [p] = r.useState(u().toISOString()),
                    g = new Date(new Date(i.created_at).setMinutes(0, 0, 0)),
                    f = (0, j.o)(
                        () => g.toISOString(),
                        (e) => {
                            throw (e instanceof RangeError && (0, M.Hj)("invalid tweet.created_at", { extra: { createdAt: i.created_at } }), e);
                        },
                    ),
                    w = new Date(g.getTime() + 1728e5).toISOString(),
                    b = i?.extended_entities?.media?.find((e) => "video" === e.type),
                    h = !!i.trusted_friends_info,
                    _ = m ? qt : Ot,
                    v = r.useMemo(() => [..._, "CostPerFollower"], [_]);
                return (
                    r.useEffect(() => {
                        const e = d({ showToast: !1 });
                        W()(c, Mt, { restId: i.id_str, from_time: f, to_time: p, first_48_hours_time: w, requested_organic_metrics: _, requested_promoted_metrics: v }).subscribe({ error: e });
                    }, [i, c, d, f, p, w, _, v]),
                    r.createElement(jt, {
                        render: (e) => {
                            if (e.fetchStatus === H.i.FAILED) {
                                const t = e.retry;
                                return s.scribe((0, y.X0)("NetworkError", o, i)), r.createElement(F.Z, { onRequestRetry: t, retryMessage: Ht });
                            }
                            if (e.fetchStatus === H.i.LOADED) {
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
                                    return r.createElement(n.Z, { style: Ut.tweetActivity }, r.createElement(n.Z, { style: Ut.metricsView }, r.createElement(Wt, { tweet: i }, r.createElement(ge, { liveCounts: t, metrics: c, tweet: i }), r.createElement(Q.ZP, { metrics: c, tweet: i }), !!b && r.createElement(r.Fragment, null, r.createElement(G.Z, { spacing: "space2" }), r.createElement(Bt, { metrics: c, video: b })), r.createElement(U.Z, { metricsRef: c }))), !e || h || l ? null : r.createElement(rt, { campaignInfo: c, metrics: c, promotionInfoState: e, tweet: i, userId: o }));
                                }
                            }
                            return null;
                        },
                        variables: { restId: i.id_str, from_time: f, to_time: p, first_48_hours_time: w, requested_organic_metrics: _, requested_promoted_metrics: v },
                    })
                );
            }
            const Ut = d.default.create((e) => ({ tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } })),
                Qt = u().fc4e5d96,
                Xt = u().ab0da59f,
                Jt = u().deaf5b16,
                Yt = u().dcc05a7e,
                Kt = (0, i.ju)("https://help.x.com/using-twitter/view-counts"),
                ea = { link: r.createElement(o.ZP, { color: "text", link: Kt, weight: "bold", withUnderline: !0 }) },
                ta = r.createElement(u().I18NFormatMessage, { $i18n: "gc31d3e9" }, r.cloneElement(ea.link, null, u().a10aa36c)),
                aa = r.createElement(u().I18NFormatMessage, { $i18n: "he0e6ed7" }, r.cloneElement(ea.link, null, u().d0740558)),
                ra = r.createElement(u().I18NFormatMessage, { $i18n: "c780f52b" }, r.cloneElement(ea.link, null, u().d2d76dca)),
                na = u().ae32e7de,
                ia = u().e839db3a;
            class oa extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.viewCountEnabled = this.context.featureSwitches.isTrue("view_counts_public_visibility_enabled")),
                        (this._handleFetchTweet = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: t, statusId: a } = this.props;
                            t(a).catch(e(h.c));
                        }),
                        (this._handleFetchQuickPromoteEligibility = () => {
                            const { createLocalApiErrorHandler: e, fetchQuickPromoteEligibilityIfNeeded: t, statusId: a } = this.props;
                            return t({ statusId: a }).catch(e());
                        }),
                        (this._render = () => {
                            const { isOwnerOrAdminAllowed: e, liveCounts: t, quickPromoteEligibility: a, tweet: i } = this.props,
                                o = (i && s.Z.getOriginalTweet(i)) || void 0;
                            return !o || (o && o.user.id_str !== this.context.viewerUserId) || !e ? r.createElement(l.Z, { onRetry: null, title: Qt }) : (this._scribeEligibility(), r.createElement(n.Z, { style: sa.topLevelView }, r.createElement(n.Z, { style: sa.quoteTweet }, r.createElement(b.Z, { isCondensed: !0, style: { cursor: "default" }, tweetId: o.id_str, withLink: !1, withUserHoverCard: !1 })), r.createElement($t, { liveCounts: t, quickPromoteEligibility: a, tweet: o, userId: this.context.viewerUserId || "" })));
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
                                { data: a, ...r } = (0, y._b)({ dwellStartTime: this._dwellStartTime, tweet: t });
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
                        n = (a && s.Z.getOriginalTweet(a)) || void 0,
                        i = !n || (n && n.user.id_str !== this.context.viewerUserId),
                        o = !!p.ZP.getTwitterAppVersion(),
                        l = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        d = s.Z.getLocalizedEntityName({ tweet: a, articlesEnabled: l, capitalized: !0 });
                    if (e !== _.iF.LOADED || (n && !i) || !this.viewCountEnabled) return r.createElement(f.Z, { appBarRef: this._setAppBarRef, backLocation: n ? n.permalink : "/", hideBackButton: o, history: t, onBackClick: this._handleGoBack, renderHeader: (e) => (o ? null : e), title: o ? null : Xt({ entity: d }) }, r.createElement(g.Z, { fetchStatus: e, render: this._render, retryMessage: Jt }));
                    {
                        const e = n?.views?.count,
                            t = n?.views?.state,
                            a = n?.promoted_content;
                        let i = ra;
                        return a ? (i = na) : 0 === e && "EnabledWithCount" === t ? (i = aa) : "EnabledWithCount" === t && (i = ta), r.createElement(c.Z, { actionLabel: ia, graphicDisplayMode: "none", headline: Yt, isFullHeightOnMobile: !0, onAction: this._handleGoBack, onClose: this._handleGoBack, subtext: i });
                    }
                }
            }
            oa.contextType = w.rC;
            const sa = d.default.create((e) => ({ topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                la = D(oa);
        },
        979673: (e, t, a) => {
            a.d(t, { LU: () => s, Qy: () => m, fV: () => d, jf: () => c });
            var r = a(111677),
                n = a.n(r);
            const i = n().ja781451,
                o = n().cfa1a7b9,
                s = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function l(e) {
                return e || 0;
            }
            function c(e, t) {
                const a = l(t);
                return 0 === a ? 0 : l(e) / a;
            }
            function d(e, t = 1e5) {
                const a = l(e);
                return a >= t ? o(a) : i(a);
            }
            function m(e, t, a) {
                const r = t?.find((t) => t.metric_type === e),
                    n = a?.find((t) => t.metric_type === e),
                    i = r?.metric_value ?? 0,
                    o = n?.metric_value ?? 0;
                return { metric_type: e, organic_value: i, promoted_value: o, total_value: i + o };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-e96ca76f.e7f3242a.js.map
