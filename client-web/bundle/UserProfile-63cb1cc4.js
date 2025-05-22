"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-63cb1cc4"],
    {
        673096: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(807896),
                n = r(199813),
                i = r(202784),
                l = (r(585488), r(277660)),
                o = r.n(l),
                c = r(649846),
                s = r(382779);
            const u = n.Z,
                d = ({ highlightedUserLabel: e, onRichTextEntityClick: t, ...r }) => {
                    const { badge: n, description: l, long_description: d, url: m, user_label_type: p } = o()(u, e),
                        f = { badge: n || void 0, description: i.useMemo(() => (d?.entities ? i.createElement(s.H, { onEntityClick: t, timelineRichText: d }) : l), [l, d, t]), url: m || void 0, userLabelType: p || void 0 };
                    return i.createElement(c.Z, (0, a.Z)({}, r, { label: f }));
                },
                m = i.memo(d);
        },
        201123: (e, t, r) => {
            r.d(t, { o: () => u });
            var a = r(807896),
                n = r(607737),
                i = r(202784),
                l = (r(585488), r(277660)),
                o = r.n(l),
                c = r(433460);
            const s = n.Z,
                u = ({ user: e, ...t }) => {
                    const r = o()(s, e);
                    return i.createElement(c.Z, (0, a.Z)({}, t, { screenName: r.core?.screen_name, uri: r.avatar?.image_url ?? void 0 }));
                };
        },
        421813: (e, t, r) => {
            r.d(t, { V: () => m });
            var a = r(807896),
                n = r(866587),
                i = r(121642),
                l = r(202784),
                o = (r(585488), r(277660)),
                c = r.n(o),
                s = r(646797);
            const u = i.Z,
                d = n.Z,
                m = ({ user: e, viewer: t, ...r }) => {
                    const { core: n, legacy: i } = c()(u, e),
                        o = c()(d, t);
                    return l.createElement(s.Z, (0, a.Z)({}, r, { followersCount: i?.followers_count ?? 0, friendsCount: i?.friends_count ?? 0, screenName: n?.screen_name ?? "", subscribersCount: o?.super_followers_count || void 0 }));
                };
        },
        148642: (e, t, r) => {
            r.d(t, { N: () => h, X: () => E });
            r(571372);
            var a = r(720672),
                n = r(828253),
                i = r(202784),
                l = r(10622),
                o = r.n(l),
                c = (r(585488), r(712696)),
                s = r.n(c),
                u = r(437429),
                d = r.n(u),
                m = r(47329),
                p = r(453527),
                f = r(665979);
            const b = n.Z,
                y = a.Z,
                g = (e) => (0, f.VS)(e.fromTime, e.toTime) < 180,
                v = (e, t, r) => {
                    const a = (0, f.VS)(e.fromTime, e.toTime);
                    return { from_time: g(e) ? (0, f.b7)(e.fromTime, -a).toISOString() : e.fromTime.toISOString(), requested_metrics: "user" === r ? m.E6 : m.Z2, rest_id: t, to_time: e.toTime.toISOString() };
                },
                _ = i.createContext(void 0),
                E = ({ children: e, type: t }) => {
                    const [r] = i.useState("user" === t ? b : y),
                        { range: a, restId: n } = (0, p.J)(),
                        l = d()(),
                        [c, u] = i.useState(v(a, n, t)),
                        [m, E] = i.useState(null),
                        [h, T] = i.useState(null),
                        [w, Z] = i.useState(!1),
                        C = i.useRef(a);
                    i.useEffect(() => {
                        C.current = a;
                    }, [a]);
                    const k = s()(r, { ...c, granularity: "Daily" });
                    i.useEffect(() => {
                        Z(!0);
                        const e = v(a, n, t);
                        o()(l, r, { ...e, granularity: "Daily" }, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then(() => {
                                u(e), Z(!1);
                            });
                    }, [l, a, n, r, t]);
                    const x = i.useCallback((e, t, r) => {
                        const { compareRange: a, selectedRange: n } = ((e) => ({ compareRange: g(e) ? { fromTime: (0, f.b7)(e.fromTime, -(0, f.VS)(e.fromTime, e.toTime)), toTime: e.fromTime } : null, selectedRange: e }))(t),
                            { compareData: i, metricsList: l } = (0, f.Jl)(e, n.toTime.toISOString(), n.fromTime.toISOString(), a?.fromTime.toISOString(), r),
                            o = (0, f.HM)(l, ["CreateTweet", "CreateQuote"], "Posts");
                        E(o), T(i);
                    }, []);
                    return (
                        i.useEffect(() => {
                            k && x(k, C.current, c.requested_metrics);
                        }, [x, k, c]),
                        i.createElement(_.Provider, { value: { data: m, compareData: h, isFetching: w } }, e)
                    );
                },
                h = () => {
                    const e = i.useContext(_);
                    if (void 0 === e) throw new Error("useOverviewData must be used within an OverviewDataProvider");
                    return e;
                };
        },
        453527: (e, t, r) => {
            r.d(t, { J: () => u, T: () => m });
            r(571372);
            var a = r(202784),
                n = r(400752),
                i = r(420182),
                l = r(47329),
                o = r(665979);
            const c = { chartType: "line", granularity: "daily", range: { fromTime: (0, o.b7)(new Date(), -6), toTime: (0, o.b7)(new Date(), 1) }, restId: "", setChartType: () => {}, setGranularity: () => {}, setRange: () => {}, metric: l.Mu[0].value, setMetric: () => {}, secondaryMetric: null, setSecondaryMetric: () => {} },
                s = a.createContext(c),
                u = () => {
                    const e = a.useContext(s);
                    if (null === e) throw new Error("useOverviewData must be used within a OverviewDataProvider");
                    return e;
                },
                d = "rweb.accountAnalytics",
                m = ({ children: e, initialRange: t, restId: r, type: o }) => {
                    const u = (0, n.Dv)(i.lZ),
                        [m, p] = a.useState(!1),
                        [f, b] = a.useState(t || c.range),
                        [y, g] = a.useState(c.granularity),
                        [v] = a.useState(r),
                        [_, E] = a.useState(c.chartType),
                        [h, T] = a.useState(c.metric),
                        [w, Z] = a.useState(c.secondaryMetric),
                        C = a.useRef({ chartType: _, primaryMetric: { value: h, label: h }, secondaryMetric: w ? { value: w, label: w } : null }),
                        k = a.useCallback(
                            (e) => {
                                C.current && ((C.current = { ...C.current, ...e }), u.set(d, C.current));
                            },
                            [u],
                        );
                    a.useEffect(() => {
                        u.get(d).then((e) => {
                            if (e) {
                                E(e.chartType);
                                const t = e.primaryMetric?.value || c.metric,
                                    r = e.secondaryMetric?.value || null,
                                    a = (e) => l.Mu.some((t) => t.value === e) && ("post" !== o || "Posts" !== e),
                                    n = a(t) ? t : c.metric,
                                    i = r && a(r) ? r : null;
                                T(n), Z(i), (C.current = { chartType: e.chartType, primaryMetric: { value: n, label: n }, secondaryMetric: i ? { value: i, label: i } : null });
                            }
                            p(!0);
                        });
                    }, [o, u]);
                    const x = a.useCallback(
                            (e) => {
                                E(e), k({ chartType: e });
                            },
                            [k],
                        ),
                        M = a.useCallback(
                            (e) => {
                                T(e), k({ primaryMetric: { value: e, label: e } });
                            },
                            [k],
                        ),
                        S = a.useCallback(
                            (e) => {
                                Z(e), k({ secondaryMetric: e ? { value: e, label: e } : null });
                            },
                            [k],
                        );
                    if (m) return a.createElement(s.Provider, { value: { chartType: _, granularity: y, range: f, restId: v, setChartType: x, setGranularity: g, setRange: b, metric: h, setMetric: M, secondaryMetric: w, setSecondaryMetric: S } }, e);
                };
        },
        945181: (e, t, r) => {
            r.d(t, { Fd: () => v, Kg: () => f, WO: () => _, fX: () => g });
            var a = r(202784),
                n = r(325686),
                i = r(731708),
                l = r(738545),
                o = r(67369),
                c = r(165822),
                s = r(392237),
                u = r(332920),
                d = r.n(u),
                m = r(148642),
                p = r(665979);
            const f = {
                    Impressions: { popover: d().b15df4b4, label: d().e5fe61e0, summary: d().d1018321 },
                    EngagementRate: {
                        label: d().e623137c,
                        popover: d().d9d34182,
                        calculate: (e, t) => {
                            const r = y(e, "Engagements"),
                                a = y(e, "Impressions"),
                                n = t ? y(t, "Engagements") : null,
                                i = t ? y(t, "Impressions") : null;
                            return { current: e ? (r ?? 0) / (a ?? 0) : null, compare: t ? (n ?? 0) / (i ?? 0) : null };
                        },
                        format: "percent",
                    },
                    ProfileVisits: { label: d().aeee0182, popover: d().b2bde01a, summary: d().faf4c1f5 },
                    LinkClicks: { label: d().d5f1e554, popover: d().cf573986 },
                    Follows: { label: d().j761451e, popover: d().e1a87d14 },
                    Replies: { label: d().jdceda60, popover: d().j590577e },
                    Likes: { label: d().d7b8ebaa, popover: d().ia1da622, summary: d().cfd1036b },
                    Retweets: { label: d().ja42739e, popover: d().ca6e8de0 },
                    VideoViews: { label: d().b1b4d57e, popover: d().bdaf100e },
                    MediaViews: { label: d().ca826772, popover: d().j43b8f52 },
                    CompletionRate: {
                        label: d().d3969c06,
                        popover: d().c58c3476,
                        calculate: (e, t) => {
                            const r = y(e, "VideoCompletions"),
                                a = y(e, "VideoViews"),
                                n = t ? y(t, "VideoCompletions") : null,
                                i = t ? y(t, "VideoViews") : null;
                            return { current: e ? (r ?? 0) / (a ?? 0) : null, compare: t ? (n ?? 0) / (i ?? 0) : null };
                        },
                        format: "percent",
                    },
                    Bookmark: { label: d().i3145aa0, popover: d().c8aae62a },
                    Share: { label: d().g70825e0, popover: d().c6fbefd4 },
                },
                b = d().c778d80b;
            function y(e, t) {
                return e ? Object.values(e).reduce((e, r) => (r ? e + (r.metrics[t] || 0) : e), 0) : null;
            }
            const g = ({ compareData: e, data: t, metric: r }) => {
                    const a = f[r];
                    let n, i;
                    a.calculate ? ({ compare: i, current: n } = a.calculate(t, e)) : ((n = y(t, r)), (i = y(e, r)));
                    const l = null != n && isFinite(n) ? Math.max(0, n) : void 0;
                    let o,
                        c = "-";
                    return null != n && isFinite(n) && (c = "percent" === a.format ? b(Math.max(0, Math.min(1, n))) : (0, p.uf)(Math.max(0, n))), null != n && null != i && 0 !== i && ((o = (n - i) / i), isFinite(o) || (o = void 0)), { count: l, trendValue: o, value: c };
                },
                v = (e) => {
                    const t = f[e.metric],
                        { count: r, trendValue: o, value: c } = g(e);
                    return a.createElement(l.ZP, { animated: !0, count: r, label: t.label, popover: ((s = t.popover), a.createElement(n.Z, null, a.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, s))), size: "title2", trendValue: o, value: c });
                    var s;
                },
                _ = ({ metrics: e }) => {
                    const t = (0, o.LX)(),
                        { compareData: r, data: i } = (0, m.N)();
                    return a.createElement(
                        n.Z,
                        { style: t ? E.gridMobile : E.gridDesktop },
                        e.map((e) => a.createElement(c.Z, { "aria-label": e, key: e, upper: a.createElement(n.Z, { style: E.tile }, a.createElement(v, { compareData: r, data: i, metric: e })) })),
                    );
                },
                E = s.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, rowGap: e.spaces.space2 };
                    return { root: { padding: e.spaces.space16 }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, tile: { backgroundColor: e.colors.gray0, flexGrow: 1, justifyContent: "center", paddingStart: e.spaces.space16 } };
                });
        },
        32256: (e, t, r) => {
            r.d(t, { Z: () => H });
            var a = r(202784),
                n = r(325686),
                i = r(688715),
                l = r(59871),
                o = r(731708),
                c = r(649846),
                s = r(308158),
                u = r(154003),
                d = r(392237),
                m = r(332920),
                p = r.n(m),
                f = r(144251),
                b = r(164269),
                y = r(882726),
                g = r(97043),
                v = r(750442),
                _ = r(121791),
                E = r(184605),
                h = r(961746),
                T = r(493292),
                w = r(443781),
                Z = r(788210),
                C = r(725516);
            const k = "verificationBadge",
                x = "protectedIcon",
                M = "idVerificationIcon",
                S = p().e839db3a,
                I = p().e018b5fa,
                P = p().b74bd6c6,
                D = p().e1e0c916,
                V = p().eb5d72e4,
                R = p().g776ca50,
                B = (0, i.ju)("https://help.x.com/managing-your-account/about-twitter-verified-accounts"),
                O = p().i859a9d4,
                F = p().ad465ee8,
                L = p().d01612d3,
                j = p().g727ddcf,
                z = p().e14d8719,
                U = p().g268fbb8,
                A = (0, i.ju)("https://help.x.com/rules-and-policies/verification-policy#what"),
                G = (e) => {
                    const t = { analyticsComponent: "blue_badge_education_context", educationText: P, icon: N.blue };
                    switch (e) {
                        case l.K.blue:
                            return { analyticsComponent: "twitter_blue_verification_badge_education_context", educationText: D, icon: N.blue };
                        case l.K.business:
                            return { analyticsComponent: "business_verification_badge_education_context", educationText: P, icon: null };
                        case l.K.government:
                            return { analyticsComponent: "government_verification_badge_education_context", educationText: P, icon: null };
                        case l.K.verified:
                        default:
                            return t;
                    }
                },
                K = a.memo(({ affiliateBadgeInfo: e, isMultiAffiliatesEnabled: t }) => {
                    const r = e ? { elements: { link: a.createElement(o.ZP, { link: e.url?.url }) }, variables: { name: e.description } } : null;
                    return e && e.userLabelDisplayType === h.U.Badge && e.userLabelType === T.P.BusinessLabel ? a.createElement(n.Z, { style: N.educationEntity }, a.createElement(c.Z, { isAffiliateBadge: !0, isIconLarge: !0, label: e, withLeftMargin: !1, withTopMargin: !1 }), t ? a.createElement(o.ZP, { color: "text", link: e.url?.url, underlineWeight: "heavy", weight: "medium", withUnderline: !0 }, e.description) : r && a.createElement(o.ZP, { color: "gray700" }, a.createElement(p().I18NFormatMessage, { $i18n: "cebed305" }, a.cloneElement(r.elements.link, null, p().b7caffb7({ name: r.variables.name }))))) : null;
                }),
                N = d.default.create((e) => ({ content: { padding: e.spaces.space20, flexDirection: "column", gap: 12 }, icon: { fontSize: e.fontSizes.title2 }, iconFlex: { fontSize: e.fontSizes.headline2, flexShrink: 0 }, blue: { color: e.colors.badgeColor }, business: { color: e.colors.yellow600 }, government: { color: e.colors.alwaysBaseGray500 }, button: { marginTop: e.spaces.space8 }, textCenter: { textAlign: "center" }, educationEntity: { flexDirection: "row", gap: 12 }, iconTheme: { color: e.colors.text }, learnMore: { marginStart: e.spaces.space4 } })),
                H = ({ affiliateBadgeInfo: e, auxiliaryUserLabels: t, dismiss: r, isBlueVerified: c, isOwnProfile: d, isProtected: m, isVerified: p, type: h, verificationInfo: T, verifiedType: P }) => {
                    const { featureSwitches: D, viewerUserId: H } = a.useContext(w.rC),
                        J = (0, C.z)(),
                        W = D.isTrue("responsive_web_user_badge_education_get_verified_button_enabled"),
                        X = D.isTrue("subscriptions_sign_up_enabled"),
                        q = D.isTrue("subscriptions_verification_info_verified_since_enabled"),
                        Q = D.isTrue("blue_business_multi_affiliates_ui_enabled"),
                        $ = (0, Z.Z)(),
                        Y = H && !$ && X && W,
                        ee = l.Z.getVerifiedDisplayType({ isBlueVerified: c, isVerified: p, verifiedType: P }),
                        te = D.isTrue("subscriptions_verification_info_is_identity_verified_enabled"),
                        { analyticsComponent: re, educationText: ae, icon: ne } = a.useMemo(() => G(ee), [ee]);
                    a.useEffect(() => {
                        J.scribe({ component: re, action: "show" });
                    }, [J, re]);
                    const ie = a.useCallback(() => {
                            J.scribe({ component: re, element: "support_url", action: "click" });
                        }, [J, re]),
                        le = a.useCallback(() => {
                            J.scribe({ component: re, element: "id_verification_url", action: "click" });
                        }, [J, re]),
                        oe = a.useCallback(() => {
                            J.scribe({ component: re, element: "get_Verified_button", action: "click" }), r();
                        }, [J, re, r]),
                        ce = T?.reason,
                        se = ce?.description?.text,
                        ue = parseInt(ce?.verified_since_msec, 10),
                        de = (0, E.Z)(ue) ? new Date(ue) : null,
                        me = ce?.override_verified_year,
                        pe = a.useMemo(() => {
                            return (e = T?.reason?.description?.entities), e?.map((e) => ({ fromIndex: e.from_index, toIndex: e.to_index, ref: { url: e.ref?.url ? { url: e.ref?.url, urlType: e.ref?.url_type } : void 0 } })) || [];
                            var e;
                        }, [T?.reason?.description?.entities]);
                    let fe = f.default;
                    "Business" === P ? (fe = b.default) : "Government" === P && (fe = y.default);
                    const be = a.useMemo(() => [N.iconFlex, ne], [ne]),
                        ye = a.useMemo(() => [N.iconFlex, N.iconTheme], []),
                        ge = te && T?.is_identity_verified;
                    return a.createElement(
                        n.Z,
                        { style: N.content },
                        ee === l.K.none ? null : a.createElement(a.Fragment, null, a.createElement(o.ZP, { size: "title4", weight: "bold" }, R), a.createElement(n.Z, { style: N.educationEntity }, a.createElement(fe, { style: be, testID: k }), se ? a.createElement(s.Z, { color: "gray700", entities: pe, text: se }) : a.createElement(o.ZP, { color: "gray700" }, ae, " ", a.createElement(o.ZP, { link: B, onClick: ie }, O)))),
                        a.createElement(K, { affiliateBadgeInfo: e, isMultiAffiliatesEnabled: Q }),
                        (() => {
                            if (!Q || !t?.length) return null;
                            return [t.map((e, t) => a.createElement(K, { affiliateBadgeInfo: e, isMultiAffiliatesEnabled: Q, key: t })).filter(Boolean), d && a.createElement(o.ZP, { key: "set_primary", link: "/settings/manage_affiliates", testID: "manage_affiliates_link", underlineWeight: "heavy", weight: "medium", withUnderline: !0 }, F)];
                        })(),
                        q && de ? a.createElement(n.Z, { style: N.educationEntity }, a.createElement(g.default, { style: ye, testID: x }), a.createElement(o.ZP, { color: "gray700" }, L({ date: me && me < 0 ? z({ year: Math.abs(me) }) : j(de) }))) : null,
                        ge ? a.createElement(n.Z, { style: N.educationEntity }, a.createElement(v.default, { style: ye, testID: M }), a.createElement(o.ZP, { color: "gray700" }, U, a.createElement(o.ZP, { link: A, onClick: le, style: N.learnMore }, O))) : null,
                        m ? a.createElement(n.Z, { style: N.educationEntity }, a.createElement(_.default, { style: ye, testID: x }), a.createElement(o.ZP, { color: "gray700" }, V)) : null,
                        Y ? a.createElement(u.ZP, { link: (0, i.ju)("https://x.com/i/premium_sign_up?referring_page=verification_reason_dialog"), onClick: oe, size: "sheet" === h ? "medium" : "small", style: N.button, type: "primaryFilled" }, I) : null,
                        "sheet" === h ? a.createElement(u.ZP, { onClick: r, style: N.button, type: "primaryOutlined" }, S) : null,
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-63cb1cc4.bdb3d6fa.js.map
