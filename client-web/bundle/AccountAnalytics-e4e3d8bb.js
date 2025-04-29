"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e4e3d8bb"],
    {
        524084: (e, t, a) => {
            a.d(t, { Z: () => i });
            var l = a(202784),
                n = a(523561),
                s = a(195560);
            const i = (0, n.Z)({ loader: () => a.e("loader.AbsolutePower").then(a.bind(a, 590136)), renderPlaceholder: (e, t) => l.createElement(s.Z, { hasError: e, onRetry: t }) });
        },
        979434: (e, t, a) => {
            a.d(t, { Z: () => Re });
            a(136728);
            var l = a(202784),
                n = a(107267),
                s = a(67369),
                i = a(674132),
                c = a.n(i),
                r = a(323265),
                o = a(252021),
                m = a(507651),
                u = a(443781),
                d = a(952793),
                p = a(655352),
                b = a(725405),
                g = a(125363),
                y = a(390387),
                E = a(189244),
                h = a(807267),
                f = a(494938),
                _ = a(547073),
                v = a(329699),
                w = a(146486),
                Z = a(843512),
                x = a(130701),
                C = a(994585),
                D = a(733393),
                k = a(397563),
                T = a(325686),
                I = (a(585488), a(466818)),
                S = a(167630),
                R = a(992942),
                P = a(868634),
                N = a(451051),
                M = a(731708),
                A = a(124964),
                j = a(661810),
                F = a(819483),
                O = a(392237),
                L = a(275450),
                z = a(53674),
                G = a(432181),
                V = a(194661),
                W = a(155353),
                $ = a(965245),
                B = a(988401),
                H = a(293115),
                U = a(919022),
                q = a(535338),
                X = a(979673),
                K = a(47329);
            a(571372);
            const J = l.createContext(null);
            function Q({ children: e }) {
                const [t, a] = l.useState(null),
                    n = l.useMemo(() => ({ data: t, setData: a }), [t]);
                return l.createElement(J.Provider, { value: n }, e);
            }
            function Y() {
                const e = l.useContext(J);
                if (!e) throw new Error("useExportToCSV must be used within an ExportToCSVProvider");
                return e;
            }
            var ee = a(58222),
                te = a(459777),
                ae = a(737667),
                le = a(665979);
            const ne = c().i0db46e6,
                se = c().d64fef58,
                ie = c().e2a098dc,
                ce = c().c5709148,
                re = k.Z,
                oe = [
                    { field: "post", label: c().ca5e57bd({ noun: "" }), width: 40 },
                    { field: "date", label: c().edeff232, width: 15, sortable: !0 },
                    { field: "impressions", label: c().e5fe61e0, width: 16, sortable: !0 },
                    { field: "likes", label: c().d7b8ebaa, width: 12, sortable: !0 },
                    { field: "replies", label: c().jdceda60, width: 14, sortable: !0 },
                    { field: "reposts", label: c().ja42739e, width: 14, sortable: !0 },
                ],
                me = [
                    { label: c().d16c1ab6, value: "date|DESCENDING" },
                    { label: c().f0a28956, value: "date|ASCENDING" },
                    { label: c().h06df79a, value: "impressions|DESCENDING" },
                    { label: c().c44744e6, value: "impressions|ASCENDING" },
                    { label: c().j6b98664, value: "likes|DESCENDING" },
                    { label: c().a669f95c, value: "likes|ASCENDING" },
                    { label: c().a0c66496, value: "replies|DESCENDING" },
                    { label: c().h45174fe, value: "replies|ASCENDING" },
                    { label: c().ea20f92a, value: "reposts|DESCENDING" },
                    { label: c().c9a63566, value: "reposts|ASCENDING" },
                ],
                ue = [
                    { label: c().e5fe61e0, value: "Impressions" },
                    { label: c().d7b8ebaa, value: "Likes" },
                    { label: c().dbe9353e, value: "Engagements" },
                    { label: c().i3145aa0, value: "Bookmark" },
                    { label: c().ifea3114, value: "Share" },
                    { label: c().j761451e, value: "Follows" },
                    { label: c().jdceda60, value: "Replies" },
                    { label: c().ja42739e, value: "Retweets" },
                    { label: c().aeee0182, value: "ProfileVisits" },
                    { label: c().b40d33e4, value: "DetailExpands" },
                    { label: c().gedf636e, value: "UrlClicks" },
                    { label: c().bbc12690, value: "HashtagClicks" },
                    { label: c().g7ede992, value: "PermalinkClicks" },
                ],
                de = [{ label: c().g85fbd2e, value: "id" }, { label: c().edeff232, value: "timestamp" }, { label: c().f6bab0da, value: "text" }, { label: c().f5210bae, value: "link" }, ...ue],
                pe = c().jade381b,
                be = () => {
                    const e = (0, s.pj)(),
                        [t, a] = l.useState({ sortField: "date", sortOrder: "DESCENDING" }),
                        [n, i] = l.useState(K.MN[0].value),
                        [c, r] = l.useState({ fromTime: (0, le.b7)(new Date(), -6), toTime: (0, le.b7)(new Date(), 1) }),
                        o = (0, d.hC)("rweb_analytics_export_data_content_enabled"),
                        m = (0, s.LX)();
                    return l.createElement(
                        H.nO,
                        { namespace: { page: "account_analytics", section: "content" } },
                        l.createElement(
                            Q,
                            null,
                            l.createElement(
                                T.Z,
                                { style: Ee.container },
                                l.createElement(
                                    T.Z,
                                    null,
                                    l.createElement(T.Z, { style: Ee.headerControls }, l.createElement(T.Z, { style: Ee.filterDropdown }, l.createElement(te.C, { options: K.MN, selected: n, setOption: i })), !m && l.createElement(T.Z, { style: Ee.timeRangePickerContainer }, l.createElement(ae.X, { maxDays: 90, onRangeChange: r, range: c }), o && l.createElement(ge, { dateRange: c, filterBy: n }))),
                                    e &&
                                        l.createElement(I.ZP, {
                                            label: ie,
                                            onChange: (e) => {
                                                const [t, l] = e.split("|");
                                                a({ sortField: t, sortOrder: "ASCENDING" === l ? "ASCENDING" : "DESCENDING" });
                                            },
                                            options: me,
                                            style: Ee.sortSelector,
                                        }),
                                    l.createElement(l.Suspense, { fallback: l.createElement(S.Z, null) }, l.createElement(ye, { dateRange: c, filterBy: n, setSortOptions: a, sortOptions: t })),
                                ),
                            ),
                        ),
                    );
                };
            function ge({ dateRange: e, filterBy: t }) {
                const { data: a } = Y(),
                    n = `account_analytics_content_${e.fromTime.toISOString().split("T")[0]}_${e.toTime.toISOString().split("T")[0]}.csv`;
                return l.createElement(ee.$, { columns: de, data: a, fileName: n });
            }
            function ye({ dateRange: e, filterBy: t, setSortOptions: a, sortOptions: i }) {
                const { setData: c } = Y(),
                    r = (0, n.useHistory)(),
                    o = (0, g.v9)(U.ZP.selectViewerUser),
                    m = (0, s.pj)(),
                    u = (0, q.p)(re, { rest_id: o?.id_str || "", to_time: e.toTime.toISOString(), from_time: e.fromTime.toISOString(), max_results: 1e3, query_page_size: 100, requested_metrics: ue.map(({ value: e }) => e) }),
                    d = u?.user_result_by_rest_id?.result?.tweets_results,
                    p = l.useMemo(() => {
                        const e = [];
                        return (
                            d?.forEach((t) => {
                                const { community_results: a, legacy: l, organic_metrics_total: n, reply_to_results: s, rest_id: i } = t?.result || {};
                                if (!i || !l || !n) return;
                                const c = n.reduce((e, { metric_type: t, metric_value: a }) => ({ ...e, [t]: a || 0 }), {});
                                e.push({ rest_id: i, text: l?.full_text ?? "", medias: l?.entities?.media || [], date: new Date(l?.created_at || 0), impressions: c?.Impressions || 0, likes: c?.Likes || 0, replies: c?.Replies || 0, reposts: c?.Retweets || 0, metrics: c, displayTextRange: l?.display_text_range || [0, 0], fullDate: l?.created_at, isReply: !!s, isCommunityPost: !!a });
                            }),
                            e
                        );
                    }, [d]),
                    b = l.useMemo(() => {
                        const e =
                            "All" === t
                                ? p
                                : p.filter((e) => {
                                      switch (t) {
                                          case "Replies":
                                              return e.isReply;
                                          case "CommunityPosts":
                                              return e.isCommunityPost;
                                          default:
                                              return !e.isReply && !e.isCommunityPost;
                                      }
                                  });
                        return (
                            e.sort((e, t) => {
                                const [a, l] = "date" === i.sortField ? [e.date?.getTime() || 0, t.date?.getTime() || 0] : [e[i.sortField], t[i.sortField]];
                                return "ASCENDING" === i.sortOrder ? a - l : l - a;
                            }),
                            e.map((e) => ({ rest_id: e.rest_id, text: e.text, medias: e.medias, date: pe(e.date), metrics: e.metrics, impressions: (0, X.fV)(e.metrics.Impressions), likes: (0, X.fV)(e.metrics.Likes), reposts: (0, X.fV)(e.metrics.Retweets), replies: (0, X.fV)(e.metrics.Replies), displayTextRange: e.displayTextRange, fullDate: e.fullDate, timestamp: e.date.getTime().toString() }))
                        );
                    }, [p, i, t]);
                l.useEffect(() => {
                    const e = b?.reduce((e, t) => {
                        const a = t.rest_id || "",
                            l = o?.screen_name ? `https://x.com/${o.screen_name}/status/${a}` : "",
                            n = t.metrics || {},
                            s = Object.entries(n).reduce((e, [t, a]) => ({ ...e, [t]: a }), {});
                        return { ...e, [a]: { metrics: s, timestamp: t.timestamp, text: (0, ee.N)(t.text), link: l } };
                    }, {});
                    e && c(e);
                }, [b, c, t, o?.screen_name]);
                const y = (e) => {
                        r.push({ pathname: `/i/account_analytics/content/${e.rest_id}`, state: { createdAt: e.fullDate } });
                    },
                    E = (e, t) => {
                        const a = e.media_url_https;
                        return a ? l.createElement(T.Z, null, l.createElement(R.Z, { source: a, style: m ? Ee.imageMobile : Ee.imageDesktop }), "animated_gif" === e.type && l.createElement(P.ZP, { bold: !0, fontSize: "subtext3", style: Ee.gifLabel }, ne), "video" === e.type && l.createElement(P.ZP, { fontSize: "subtext3", style: Ee.videoTime }, (0, B.F)(e.video_info?.duration_millis ?? 0)), t && l.createElement(L.default, { style: Ee.layersIcon })) : null;
                    };
                m ||
                    b.forEach(
                        (e) =>
                            (e.post = ((e) => {
                                const { displayTextRange: t, medias: a, text: n } = e,
                                    [s, i] = t;
                                return a && 0 !== a.length ? l.createElement(T.Z, { style: Ee.tweetWithImage }, E(a[0], a.length > 1), l.createElement(N.Z, { displayTextRange: [s, i], text: n })) : l.createElement(N.Z, { displayTextRange: [s, i], text: n });
                            })(e)),
                    );
                return 0 === p.length
                    ? l.createElement(M.ZP, { size: "headline2", style: Ee.noPostMessage }, se)
                    : l.createElement(
                          T.Z,
                          null,
                          m
                              ? l.createElement($.Z, {
                                    cacheKey: "analytics-content-page-tweets",
                                    footer: null,
                                    identityFunction: (e) => e.rest_id,
                                    items: b,
                                    renderer: (e) => {
                                        const { date: t, displayTextRange: a, impressions: n, likes: s, medias: i, replies: c, reposts: r, text: o } = e,
                                            [m, u] = a;
                                        return l.createElement(T.Z, null, l.createElement(T.Z, { onClick: () => y(e), style: Ee.mobileContainer }, i && i.length > 0 && E(i[0], i.length > 1), l.createElement(T.Z, { style: Ee.mobileDetails }, l.createElement(N.Z, { displayTextRange: [m, u], text: o }), l.createElement(M.ZP, { color: "gray700", size: "subtext2", style: Ee.mobileInfo }, t, l.createElement(A.Z, null), l.createElement(z.default, { style: Ee.mobileIcon }), n), l.createElement(M.ZP, { color: "gray700", size: "subtext2", style: Ee.mobileInfo }, l.createElement(G.default, { style: Ee.mobileIcon }), s, " ", l.createElement(A.Z, null), l.createElement(V.default, { style: Ee.mobileIcon }), c, l.createElement(A.Z, null), l.createElement(W.default, { style: Ee.mobileIcon }), r))), l.createElement(j.Z, { spacing: "space2" }));
                                    },
                                    withoutHeadroom: !0,
                                })
                              : l.createElement(F.Z, { columns: oe, onRowClick: y, rows: b, setSortOptions: a, sortOptions: i }),
                          l.createElement(M.ZP, { size: "subtext1", style: Ee.infoMessage }, ce),
                      );
            }
            const Ee = O.default.create((e) => ({ centerFlex: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }, tweetText: { paddingStart: e.spaces.space16 }, divider: { backgroundColor: e.colors.gray400 }, container: { width: "95%", marginHorizontal: "auto" }, imageDesktop: { width: 100, height: 56, marginEnd: e.spaces.space8 }, imageMobile: { width: 150, height: 85, marginEnd: e.spaces.space8 }, tweetWithImage: { display: "flex", flexDirection: "row" }, gifLabel: { bottom: e.spaces.space8, position: "absolute", start: e.spaces.space8 }, layersIcon: { bottom: e.spaces.space8, color: e.colors.whiteOnColor, end: e.spaces.space8, height: e.spaces.space20, position: "absolute", width: e.spaces.space20 }, videoTime: { bottom: e.spaces.space8, position: "absolute", start: e.spaces.space8 }, mobileContainer: { display: "flex", flexDirection: "row", marginVertical: e.spaces.space8, width: "100%", cursor: "pointer" }, mobileInfo: { marginTop: e.spaces.space8 }, mobileIcon: { marginEnd: e.spaces.space4 }, mobileDetails: { flex: "50%" }, noPostMessage: { marginTop: e.spaces.space8 }, sortSelector: { marginVertical: e.spaces.space8 }, activityIndicator: { marginTop: e.spaces.space8 }, infoMessage: { marginTop: e.spaces.space8, marginBottom: e.spaces.space64 }, filterDropdown: { marginVertical: 0 }, headerControls: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8, marginVertical: e.spaces.space8 }, timeRangePickerContainer: { display: "flex", flexDirection: "row", alignItems: "center" } }));
            function he() {
                return l.createElement(l.Suspense, { fallback: l.createElement(T.Z, { style: Ee.centerFlex }, l.createElement(S.Z, null)) }, l.createElement(be, null));
            }
            var fe = a(347485),
                _e = a(792522),
                ve = a(409700);
            const we = c().c818c60c,
                Ze = c().d59dbf8a,
                xe = c().b069d89c,
                Ce = c().f5a61ae6,
                De = c().fc64990e,
                ke = c().b6da6b02,
                Te = c().ded416b0,
                Ie = c().a4df00c0,
                Se = () => {
                    const e = (0, n.useLocation)(),
                        t = (0, n.useHistory)(),
                        a = (0, g.v9)(y.Js),
                        i = (0, d.hC)("rweb_analytics_xweb_content_page"),
                        c = (0, d.hC)("rweb_analytics_live_overview_enabled"),
                        k = (0, d.hC)("rweb_analytics_spaces_overview_enabled"),
                        T = (0, d.hC)("rweb_analytics_live_details_enabled"),
                        I = (0, d.hC)("rweb_analytics_spaces_details_enabled"),
                        S = (0, d.hC)("rweb_analytics_post_detail_enabled"),
                        { viewerUserId: R } = l.useContext(u.rC),
                        P = l.useMemo(() => {
                            const t = { to: { pathname: "/i/account_analytics/audience" }, key: xe, label: xe, isActive: () => "/i/account_analytics/audience" === e.pathname },
                                l = { to: { pathname: "/i/account_analytics/content" }, key: Ce, label: Ce, isActive: () => e.pathname.startsWith("/i/account_analytics/content") },
                                n = { to: { pathname: "/i/account_analytics/video" }, key: De, label: De, isActive: () => e.pathname.startsWith("/i/account_analytics/video") },
                                s = { to: { pathname: "/i/account_analytics/live" }, key: ke, label: ke, isActive: () => e.pathname.startsWith("/i/account_analytics/live") },
                                i = { to: { pathname: "/i/account_analytics/spaces" }, key: Te, label: Te, isActive: () => e.pathname.startsWith("/i/account_analytics/spaces") },
                                r = [{ to: { pathname: "/i/account_analytics/overview" }, key: Ze, label: Ze, isActive: () => "/i/account_analytics/overview" === e.pathname || "/i/account_analytics" === e.pathname }];
                            return r.push(t), a && r.push(l), r.push(n), c && r.push(s), k && r.push(i), r;
                        }, [e.pathname, a, c, k]),
                        N = l.useMemo(() => P.findIndex((e) => e.isActive()), [P]),
                        M = (0, b.Z)(),
                        A = Boolean(r.ZP.getTwitterAppVersion()),
                        j = A ? r.ZP.osString() : "web",
                        F = (0, s.Mv)(),
                        O = !(0, p.ZP)() && F,
                        L = !A && O;
                    return (
                        l.useEffect(() => {
                            M.scribePageImpression({ page: "account_analytics", section: j, component: "home", action: "show" });
                        }, [j, M]),
                        l.createElement(o.Z, {
                            backLocation: "/home",
                            headerless: A,
                            history: t,
                            isFullWidth: !0,
                            primaryContent: a
                                ? l.createElement(
                                      l.Fragment,
                                      null,
                                      l.createElement(m.Z, { "aria-label": Ie, links: P, visibleItemIndex: -1 !== N ? N : void 0 }),
                                      l.createElement(
                                          n.Switch,
                                          null,
                                          ["/i/account_analytics/overview", "/i/account_analytics"].map((e) => l.createElement(n.Route, { exact: !0, key: e, path: e }, l.createElement(h.c, null))),
                                          l.createElement(n.Route, { exact: !0, path: "/i/account_analytics/video" }, l.createElement(D.R, null)),
                                          l.createElement(n.Route, { component: C.O, exact: !0, key: "/i/account_analytics/video/:analyticsMediaId", path: `/i/account_analytics/video/${E.i5}` }),
                                          a && l.createElement(n.Route, { exact: !0, path: "/i/account_analytics/content" }, i ? l.createElement(f.O, null) : l.createElement(he, null)),
                                          l.createElement(n.Route, { exact: !0, path: `/i/account_analytics/content/${E.A2}` }, S ? l.createElement(w.W, null) : l.createElement(_e.Z, null)),
                                          l.createElement(n.Route, { exact: !0, path: "/i/account_analytics/audience" }, l.createElement(ve.Z, null)),
                                          c && l.createElement(n.Route, { exact: !0, path: "/i/account_analytics/live" }, l.createElement(v.H, null)),
                                          k && l.createElement(n.Route, { exact: !0, path: "/i/account_analytics/spaces" }, l.createElement(x.M, null)),
                                          T && l.createElement(n.Route, { component: _.N, exact: !0, key: `/i/account_analytics/live/${E.cD}`, path: `/i/account_analytics/live/${E.cD}` }),
                                          I && l.createElement(n.Route, { component: Z.t, exact: !0, key: `/i/account_analytics/spaces/${E.cD}`, path: `/i/account_analytics/spaces/${E.cD}` }),
                                      ),
                                  )
                                : l.createElement(fe.Z, { restId: R ?? "", type: "user" }),
                            sidebarContent: null,
                            title: A ? null : we,
                            withBackButton: L,
                        })
                    );
                },
                Re = l.memo(Se);
        },
        333416: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var l = a(202784),
                n = a(325686),
                s = a(67369),
                i = a(731708),
                c = a(98996),
                r = a(247291),
                o = a(392237),
                m = a(674132),
                u = a.n(m),
                d = a(952793);
            const p = ({ content: e, subtitle: t, title: a }) => l.createElement(n.Z, { style: b.root }, l.createElement(i.ZP, { size: "headline1", weight: "heavy" }, a), t && l.createElement(i.ZP, { size: "subtext1", style: b.subtitle }, t), e && l.createElement(n.Z, { style: b.content }, e)),
                b = o.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, padding: e.spaces.space24, margin: e.spaces.space12, backgroundColor: e.colors.gray0 }, subtitle: { marginTop: e.spaces.space4, color: e.colors.gray500 }, content: { marginTop: e.spaces.space12 } }));
            var g = a(164588);
            const y = { deviceTitle: u().d9c70840, heatmapLabel: u().je62f358, genderTitle: u().a8d0108e, locationTitle: u().c21037d0, ageTitle: u().bf96fda4, heatmapTitle: u().bc2f16a4, inNetworkTitle: u().d960b55c },
                E = u().jbcb09a8,
                h = u().g2b06cc6,
                f = o.default.create((e) => {
                    const t = { marginTop: e.spaces.space8, display: "flex", width: "100%" };
                    return { analyticsDesktop: { ...t, flexDirection: "row" }, analyticsMobile: { ...t, flexDirection: "column" }, analyticsSection: { flex: "50%" }, noDataMessage: { marginTop: e.spaces.space16, marginStart: e.spaces.space16 } };
                }),
                _ = ({ data: e, engagementType: t }) => {
                    const a = (0, s.LX)(),
                        o = (0, d.hC)("rweb_analytics_in_out_network_enabled"),
                        { ageData: m, deviceData: u, genderData: b, heatmapData: _, inNetworkData: v, locationData: w } = e;
                    if (0 === m.length && 0 === b.length && 0 === w.length && 0 === v.length && 0 === u.length) return l.createElement(i.ZP, { size: "headline2", style: f.noDataMessage }, E);
                    const Z = l.createElement(i.ZP, null, E),
                        x = l.createElement(p, { content: m.length > 0 ? l.createElement(c.Z, { data: m }) : Z, title: y.ageTitle }),
                        C = l.createElement(p, { content: _.length > 0 ? l.createElement(g.Z, { data: _, hoverLabel: t }) : Z, subtitle: y.heatmapLabel, title: y.heatmapTitle }),
                        D = l.createElement(p, { content: b.length > 0 ? l.createElement(r.Z, { arcWidth: 0.5, data: b, legendPosition: "left", radius: 81 }) : Z, subtitle: h, title: y.genderTitle }),
                        k = l.createElement(p, { content: w.length > 0 ? l.createElement(c.Z, { data: w }) : Z, title: y.locationTitle }),
                        T = o && "New follows" !== t && l.createElement(p, { content: v.length > 0 ? l.createElement(r.Z, { arcWidth: 0.5, data: v, legendPosition: "left", radius: 81 }) : Z, title: y.inNetworkTitle }),
                        I = "New follows" !== t && l.createElement(p, { content: u.length > 0 ? l.createElement(r.Z, { arcWidth: 0.5, data: u, legendPosition: "left", radius: 81 }) : Z, title: y.deviceTitle });
                    return a ? l.createElement(n.Z, { style: f.analyticsMobile }, x, D, T, k, I, C) : o ? l.createElement(n.Z, { style: f.analyticsDesktop }, l.createElement(n.Z, { style: f.analyticsSection }, x, I, C), l.createElement(n.Z, { style: f.analyticsSection }, D, T, k)) : l.createElement(n.Z, { style: f.analyticsDesktop }, l.createElement(n.Z, { style: f.analyticsSection }, x, C), l.createElement(n.Z, { style: f.analyticsSection }, D, k, I));
                };
        },
        229538: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ue });
            var l = a(202784),
                n = a(325686),
                s = a(67369),
                i = a(731708),
                c = a(154003),
                r = a(392237),
                o = a(674132),
                m = a.n(o),
                u = a(468670),
                d = a(72591),
                p = a(187669),
                b = a(323265),
                g = a(709331),
                y = a(857378),
                E = a(727828),
                h = a(115553),
                f = a(507651),
                _ = a(952793),
                v = a(293115),
                w = a(725405),
                Z = a(907357);
            const x = m().bd37f68e,
                C = m().e5fe61e0,
                D = m().d7b8ebaa,
                k = m().aeee0182,
                T = m().j761451e,
                I = m().jdceda60,
                S = m().ja42739e,
                R = m().e623137c,
                P = m().i3145aa0,
                N = m().g70825e0,
                M = m().b1b4d57e,
                A = m().ca826772,
                j = [C, D, k, T, I, S],
                F = [R, P, N],
                O = [M, A],
                L = ({ includeFreeMetrics: e }) => {
                    const t = (0, s.LX)(),
                        a = (e) => l.createElement(n.Z, { key: e, style: z.tile }, l.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, e), l.createElement(n.Z, { style: z.blur }, l.createElement(i.ZP, { size: "title1", weight: "heavy" }, "#@")));
                    return l.createElement(
                        n.Z,
                        null,
                        l.createElement(
                            n.Z,
                            { style: t ? z.gridMobile : z.gridDesktop },
                            [...(e ? j : []), ...F].map((e) => a(e)),
                        ),
                        l.createElement(i.ZP, { size: "headline1", style: z.header, weight: "bold" }, x),
                        l.createElement(
                            n.Z,
                            { style: t ? z.gridMobile : z.gridDesktop },
                            O.map((e) => a(e)),
                        ),
                    );
                },
                z = r.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(1, 1fr)", paddingVertical: e.spaces.space8, rowGap: e.spaces.space2 };
                    return { tile: { gap: e.spaces.space4, borderRadius: e.borderRadii.large, padding: e.spaces.space16, backgroundColor: e.colors.gray0, margin: e.spaces.space12 }, blur: { filter: "blur(10px)", width: "100%", height: "100%" }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, header: { marginStart: e.spaces.space16 } };
                });
            var G = a(336636),
                V = a(736063),
                W = a(286960);
            const $ = ["Impressions", "Likes", "ProfileVisits", "Follows", "Replies", "Retweets"],
                B = (e) => {
                    const t = (0, G.Z)({ periodInDays: 7, metrics: $.map((e) => ({ metricType: e })) }).result.result?.free_metrics_rollup,
                        a = { current_organic_metrics: t, past_organic_metrics: null };
                    return l.createElement(W.If, { metrics: a, metricsKeysToRender: $, showTimeMessage: !1 });
                },
                H = (e) => l.createElement(V.H, { errorConfig: { context: "analytics_upsell_free_metric_preview" } }, l.createElement(B, e));
            a(136728);
            var U = a(107267),
                q = a(530525),
                X = a(439592),
                K = a(529356),
                J = a(782826);
            const Q = m().ab0decc0,
                Y = { timeFrame: { headline: m().ddc8d458, subtext: m().j74eab48, ariaLabel: m().i6e73154, imageUrl: "https://ton.twimg.com/onboarding/premium_nux/analytics_v1.png" }, audienceTab: { headline: m().i02166f6, subtext: m().j74eab48, ariaLabel: m().i6e73154, imageUrl: "https://ton.twimg.com/onboarding/premium_nux/analytics_v1.png" }, contentTab: { headline: m().eb748f7e, subtext: m().j74eab48, ariaLabel: m().i6e73154, imageUrl: "https://ton.twimg.com/onboarding/premium_nux/analytics_v1.png" }, exportData: { headline: m().cef977e4, subtext: m().j74eab48, ariaLabel: m().i6e73154, imageUrl: "https://ton.twimg.com/onboarding/premium_nux/analytics_v1.png" } },
                ee = (e) => {
                    const t = (0, U.useHistory)(),
                        a = (0, w.Z)(),
                        s = t?.location?.query?.referring_page ?? (0, J.d)(t.location);
                    (0, p.q)(() => {
                        a.scribePageImpression();
                    });
                    const i = l.useCallback(() => {
                        const e = { referring_page: s ?? "analytics_promo_page", cameFromUpsell: !0 };
                        t.push("/i/premium_sign_up", e);
                    }, [t, s]);
                    if (!e.variant) return null;
                    const { ariaLabel: c, headline: r, imageUrl: o, subtext: m } = ((u = e.variant), Y[u]);
                    var u;
                    return l.createElement(K.Z, { actionLabel: Q, graphic: ({ style: e }) => (o ? l.createElement(n.Z, { style: e }, l.createElement(q.Z, { "aria-label": c, aspectMode: X.Z.exact(1.5), image: o })) : void 0), graphicDisplayMode: o ? "illustrationFullWidth" : void 0, headline: r, onAction: i, onClose: e.onDismiss, subtext: m });
                },
                te = (e) => (e.variant ? l.createElement(v.nO, { namespace: { section: "interstitial", component: e.variant || void 0 } }, l.createElement(ee, e)) : null),
                ae = m().c818c60c,
                le = m().d59dbf8a,
                ne = m().b069d89c,
                se = m().f5a61ae6,
                ie = m().b1f77a7c,
                ce = m().a4df00c0,
                re = m().h7cd94fe,
                oe = m().b10621d4,
                me = (e) => {
                    const t = (0, w.Z)(),
                        a = (0, s.yu)(),
                        r = (0, _.wW)("rweb_analytics_upsell_variant");
                    (0, p.q)(() => {
                        t.scribePageImpression();
                    });
                    const [o, m] = l.useState(),
                        b = l.useMemo(
                            () => [
                                { label: le, key: "overview", isActive: () => !0 },
                                {
                                    label: l.createElement(l.Fragment, null, ne, " ", l.createElement(u.default, null)),
                                    key: "audience",
                                    onClick: () => {
                                        m("audienceTab");
                                    },
                                },
                                {
                                    label: l.createElement(l.Fragment, null, se, " ", l.createElement(u.default, null)),
                                    key: "content",
                                    onClick: () => {
                                        m("contentTab");
                                    },
                                },
                            ],
                            [],
                        ),
                        y = l.useCallback(() => {
                            m("timeFrame");
                        }, []),
                        h = l.useCallback(() => {
                            m("exportData");
                        }, []),
                        v = l.useCallback(() => {
                            m(null);
                        }, []);
                    return l.createElement(l.Fragment, null, l.createElement(te, { onDismiss: v, variant: o }), l.createElement(n.Z, null, l.createElement(f.Z, { "aria-label": ce, links: b }), l.createElement(n.Z, { style: de.innerContainer }, l.createElement(n.Z, { style: de.header }, a ? null : l.createElement(i.ZP, { size: "headline1", weight: "bold" }, le), l.createElement(n.Z, { style: de.controls }, l.createElement(Z.Z, { onChange: y, preventDefault: !0 }), l.createElement(c.ZP, { hoverLabel: { label: ie }, onClick: h, size: "small", testID: "export-button" }, l.createElement(d.default, null)))), l.createElement(n.Z, { style: de.imageContainer }, l.createElement(n.Z, { style: de.imageOverlay }, l.createElement(u.default, { style: de.icon }), l.createElement(i.ZP, { size: "headline1", weight: "bold" }, oe), l.createElement(E.Z, { variant: "AnalyticsPromoPage" })), l.createElement("img", { alt: re, src: g, style: de.image })), "restricted" !== r ? l.createElement(H, null) : null, l.createElement(L, { includeFreeMetrics: "restricted" === r }))));
                },
                ue = (e) => {
                    const t = l.useMemo(() => l.createElement(me, e), [e]),
                        a = b.ZP.isTwitterApp();
                    return l.createElement(v.nO, { namespace: { page: "analytics_upsell", section: "page" } }, l.createElement(h.A, { headerless: a, history: e.history, isFullWidth: !0, onBackClick: () => e.history.goBack(), primaryContent: t, sidebarContent: null, title: a ? null : ae }));
                },
                de = r.default.create((e) => ({ innerContainer: { flexDirection: "column", marginBottom: y.h$ }, header: { justifyContent: "space-between", margin: e.spaces.space16, flexDirection: "row", alignItems: "flex-end" }, controls: { flexDirection: "row", gap: e.spaces.space8 }, image: { height: "auto", maxWidth: "100%", borderRadius: e.borderRadii.large }, imageOverlay: { position: "absolute", padding: e.spaces.space24, justifyContent: "center", alignItems: "center", gap: e.spaces.space8 }, imageContainer: { position: "relative", alignItems: "center", justifyContent: "center", marginHorizontal: e.spaces.space8 }, icon: { fontSize: e.fontSizes.title2 }, button: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e4e3d8bb.14ea1faa.js.map
