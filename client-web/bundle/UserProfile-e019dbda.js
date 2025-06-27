"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e019dbda"],
    {
        177997: (e, t, r) => {
            r.d(t, { Z: () => F });
            var n = r(202784),
                a = r(88660),
                o = r(293115),
                s = r(443781),
                i = r(736063),
                l = r(807896),
                d = r(325686),
                c = r(731708),
                u = r(154003),
                m = r(392237),
                p = r(111677),
                h = r.n(p),
                f = r(837020),
                b = r(121791),
                g = r(725405),
                y = r(945181);
            const _ = ({ metric: e, metricResult: t }) => {
                const r = t.metric_type,
                    a = t.metric_value;
                if (!a) return null;
                const o = r,
                    s = { [o]: { metrics: { [o]: a }, fromTime: "", toTime: "" } };
                return n.createElement(d.Z, { testID: e }, n.createElement(y.Fd, { compareData: null, data: s, metric: r }));
            };
            var w = r(336636);
            const D = h().d7f8a117,
                T = h().cae20e93,
                M = h().gc767fda,
                E = h().c7c85e0c,
                P = ({ config: e, data: t, dismiss: r, impress: a }) => {
                    const o = (0, g.Z)();
                    n.useEffect(() => {
                        o.scribe({ action: "show" }), o.scribe({ action: "impression", component: "unified-upsell", data: { referer: "account_analytics" } });
                    });
                    const s = n.useMemo(() => {
                            if (e.metrics.length > 1)
                                return n.createElement(
                                    d.Z,
                                    { style: S.tiles },
                                    e.metrics.map((e) => {
                                        const r = t?.find((t) => t.metric_type === e.metricType);
                                        return r?.metric_value ? n.createElement(_, { key: e.metricType, metric: e.metricType, metricResult: r }) : null;
                                    }),
                                );
                            if (1 === e.metrics.length) {
                                const r = t?.find((t) => t.metric_type === e.metrics[0].metricType);
                                if (!r) return null;
                                const a = r.metric_type,
                                    { value: o } = (0, y.fX)({ compareData: null, data: { [a]: { metrics: { [a]: r.metric_value }, fromTime: "", toTime: "" } }, metric: e.metrics[0].metricType }),
                                    s = y.Kg[r.metric_type];
                                return s.summary ? n.createElement(c.ZP, { weight: "medium" }, s.summary({ value: o, period: T({ days: e.periodInDays }) })) : null;
                            }
                            return null;
                        }, [e.metrics, e.periodInDays, t]),
                        i = n.useCallback(() => {
                            o.scribe({ action: "dismiss" }), r();
                        }, [r, o]);
                    return n.createElement(d.Z, { style: S.container, testID: "analytics-preview" }, n.createElement(d.Z, { style: S.heading }, e.metrics.length > 1 ? n.createElement(c.ZP, { size: "headline2", weight: "bold" }, D({ days: e.periodInDays })) : null, n.createElement(c.ZP, { color: "gray700", size: "subtext3" }, M), n.createElement(u.ZP, { icon: n.createElement(f.default, null), onClick: i, style: S.dismissButton, testID: "dismiss-button", type: "primaryText" })), n.createElement(d.Z, { style: S.content }, s, n.createElement(u.ZP, { icon: n.createElement(b.default, null), link: { pathname: "/i/premium_sign_up", state: { referring_page: "account_analytics" } }, size: "xSmall", style: S.unlockButton, type: "primaryFilled" }, E)));
                },
                I = (e) => {
                    const t = (0, w.Z)({ metrics: e.config.metrics, periodInDays: e.config.periodInDays }),
                        r = t.result.result?.free_metrics_rollup,
                        a = (0, g.Z)();
                    let o = !0;
                    return (
                        e.config.metrics.forEach((e) => {
                            const t = r?.find((t) => t.metric_type === e.metricType);
                            (!t?.metric_value || (e.threshold && t?.metric_value <= e.threshold)) && (o = !1);
                        }),
                        o ? n.createElement(P, (0, l.Z)({}, e, { data: r })) : (a.scribe({ action: "not_matched" }), null)
                    );
                },
                k = n.memo(I),
                S = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.large, padding: e.spaces.space16 }, content: { justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }, tiles: { flexDirection: "row", gap: e.spaces.space48 }, heading: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, unlockButton: { alignSelf: "flex-end", marginTop: e.spaces.space12 }, dismissButton: { marginStart: "auto" } })),
                Z = { showForMsec: a.fz, reappearAfterMsec: a.Ho, dismissForMsec: a.dV },
                v = { showForMsec: a.Tg, reappearAfterMsec: a.Vv, dismissForMsec: a.IZ },
                A = {
                    DemoMultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1 },
                            { metricType: "ProfileVisits", threshold: 1 },
                            { metricType: "Likes", threshold: 1 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_DemoMultipleMetrics", ...Z },
                    },
                    DemoSingleMetric: { metrics: [{ metricType: "ProfileVisits", threshold: 1 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_DemoSingleMetric", ...Z } },
                    MultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1e3 },
                            { metricType: "ProfileVisits", threshold: 100 },
                            { metricType: "Likes", threshold: 50 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_MultipleMetrics", ...v },
                    },
                    ProfileVisits: { metrics: [{ metricType: "ProfileVisits", threshold: 100 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_ProfileVisits", ...v } },
                    Impressions: { metrics: [{ metricType: "Impressions", threshold: 1e3 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...v } },
                    ImpressionsLower: { metrics: [{ metricType: "Impressions", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...v } },
                    Likes: { metrics: [{ metricType: "Likes", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Likes", ...v } },
                },
                C = (e) => {
                    const { dismiss: t, impress: r, shouldShow: s } = (0, a.ZP)(e.config.fatigueConfig);
                    return (
                        n.useEffect(() => {
                            r();
                        }),
                        s ? n.createElement(o.nO, { namespace: { component: "analytics_preview" } }, n.createElement(i.H, { errorConfig: { context: "AnalyticPreview" }, suspenseFallback: null }, n.createElement(k, { config: e.config, dismiss: t, impress: r }))) : null
                    );
                },
                F = () => {
                    const { featureSwitches: e, userClaims: t } = (0, s.QZ)(),
                        r = t.isAnyPremiumSubscriber(),
                        a = e.isTrue("subscriptions_sign_up_enabled");
                    if (r || !a) return null;
                    const o = e.isTrue("subscriptions_upsells_analytics_profile_enabled"),
                        i = ((e) => {
                            switch (e) {
                                case "DemoMultipleMetrics":
                                    return A.DemoMultipleMetrics;
                                case "DemoSingleMetric":
                                    return A.DemoSingleMetric;
                                case "ProfileVisits":
                                    return A.ProfileVisits;
                                case "Impressions":
                                    return A.Impressions;
                                case "Likes":
                                    return A.Likes;
                                case "MultipleMetrics":
                                    return A.MultipleMetrics;
                                case "ImpressionsLower":
                                    return A.ImpressionsLower;
                                default:
                                    return null;
                            }
                        })(e.getStringValue("subscriptions_upsells_analytics_profile_variant"));
                    return o && i && !r ? n.createElement(C, { config: i }) : null;
                };
        },
        336636: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(857037),
                a = (r(585488), r(712696)),
                o = r.n(a),
                s = r(665979),
                i = r(44988),
                l = r(443781);
            const d = n.Z,
                c = new Date(),
                u = (e) => {
                    const { viewerUserId: t } = (0, l.QZ)();
                    return o()(d, { from_time: (0, s.b7)((0, i.Hk)(c)(e.periodInDays)).toISOString(), requested_metrics: e.metrics.map((e) => e.metricType), rest_id: t, to_time: (0, i.iX)(c).toISOString() });
                };
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(807896),
                a = r(202784),
                o = r(325686),
                s = r(292627),
                i = r(537392),
                l = r(392237),
                d = r(365023),
                c = r(392027),
                u = r(774654),
                m = r(725516),
                p = r(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                f = (e) => {
                    const { "aria-label": t, label: r, onPress: f, scribeComponent: b, ...g } = e,
                        { loggedInUserId: y } = a.useContext(p.rC),
                        _ = (0, m.z)(),
                        w = a.useCallback(
                            (e) => {
                                _.scribe({ component: b, action: "click" }), f && f(e);
                            },
                            [_, f, b],
                        ),
                        D = u.ZM.useCollapsibleNavBars(),
                        T = [...u.Ah({ elementPosition: "bottom" }), D && h.fabStaysAboveSafeArea];
                    return y
                        ? a.createElement(
                              s.Z.FloatingAction,
                              null,
                              a.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > l.default.theme.breakpoints.large,
                                      i = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      m = [h.root, i && h.rootMedium, s && h.rootLarge],
                                      p = [h.fab, s && h.fabLarge, u && h.fabMicro, T];
                                  return a.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      a.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, i) => a.createElement(o.Z, (0, n.Z)({ ref: e() }, i({ style: p })), a.createElement(c.Z, (0, n.Z)({}, g, { "aria-label": t, label: s ? r : void 0, onPress: w, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => l });
            r(136728);
            var n = r(202784),
                a = r(387524),
                o = r(635510);
            const s = "/compose/post";
            class i extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                n = { pathname: s, state: (t && t()) || {} };
                            r.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: i } = this.props;
                    return n.createElement(a.Z, { "aria-label": e, href: s, icon: t, label: r, onPress: this._handlePress, scribeComponent: i, testID: o.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(111677),
                o = r.n(a),
                s = r(186444),
                i = r(355883);
            const l = o().j0179e90,
                d = o().ee69d769({ verb: "" }),
                c = n.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => n.createElement(i.Z, { "aria-label": l, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        231214: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(202784);
            const n = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([r.e("icons.9"), r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), r.e("ondemand.IntentPrompt")]).then(r.bind(r, 958679)),
            });
        },
        170371: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                a = r(325686),
                o = r(529509),
                s = r(392237),
                i = r(71620),
                l = r(668214),
                d = r(947650),
                c = r(582751);
            const u = (e, t) => c.vx(e, t.userId),
                m = (e, t) => c.mM(e, t.userId),
                p = (e, t) => c.Z8(e, t.userId),
                h = (0, l.Z)()
                    .propsFromState(() => ({ knownFollowersAvatarUrls: u, knownFollowersCount: m, knownFollowersNames: p }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("KNOWN_FOLLOWERS"), fetchKnownFollowersIfNeeded: d.Hq })),
                f = s.default.create((e) => ({ minHeight: { minHeight: e.spaces.space20 } })),
                b = h((e) => {
                    const { createLocalApiErrorHandler: t, fetchKnownFollowersIfNeeded: r, knownFollowersAvatarUrls: s, knownFollowersCount: i, knownFollowersNames: l, userId: d, userScreenName: c } = e;
                    return (
                        n.useEffect(() => {
                            r(d).catch(t());
                        }, [d, r, t]),
                        n.createElement(a.Z, { style: f.minHeight }, n.createElement(o.Z, { knownFollowersAvatarUrls: s, knownFollowersCount: i, knownFollowersNames: l, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, r) => {
            r.d(t, { Z8: () => s, mM: () => a, vx: () => o });
            var n = r(947650);
            const a = (e, t) => {
                    const r = n.lP(e, t);
                    if (void 0 === r) return r;
                    const a = n.c1(e, t),
                        o = n.og(e, t);
                    return r - (a.length - o.length);
                },
                o = (e, t) => n.og(e, t).map(({ profile_image_url_https: e }) => e),
                s = (e, t) => n.og(e, t).map(({ name: e }) => e);
        },
        258199: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(202784);
            const n = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.21"),
                        r.e("icons.16"),
                        r.e("icons.10"),
                        r.e("icons.19"),
                        r.e("icons.1"),
                        r.e("icons.0"),
                        r.e("icons.8"),
                        r.e("icons.2"),
                        r.e("icons.23"),
                        r.e("icons.3"),
                        r.e("icons.4"),
                        r.e("icons.15"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.9"),
                        r.e("icons.7"),
                        r.e("icons.28"),
                        r.e("modules.audio-6107ac1a"),
                        r.e("modules.audio-b953418a"),
                        r.e("modules.audio-7c51e6a7"),
                        r.e("modules.audio-04db59e9"),
                        r.e("modules.audio-76583d6c"),
                        r.e("modules.audio-b7a8a5fb"),
                        r.e("modules.audio-51f6e793"),
                        r.e("modules.audio-e019dbda"),
                        r.e("modules.audio-262c94d4"),
                        r.e("modules.audio-c6fe4ea4"),
                        r.e("icons.26"),
                        r.e("icons.24"),
                        r.e("icons.29"),
                        r.e("icons.18"),
                        r.e("icons.13"),
                        r.e("icons.27"),
                        r.e("icons.25"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                        r.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        r.e("shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"),
                        r.e("shared~bundle.Payments~bundle.TV"),
                        r.e("bundle.Payments-bc6ccf4c"),
                        r.e("bundle.Payments-214902cc"),
                        r.e("bundle.Payments-27545368"),
                        r.e("bundle.Payments-960914ab"),
                        r.e("bundle.Payments-17a1c92a"),
                        r.e("bundle.Payments-39d0705d"),
                        r.e("bundle.Payments-fd087ba8"),
                        r.e("bundle.Payments-7e6638bc"),
                        r.e("bundle.Payments-9f4db315"),
                        r.e("bundle.Payments-6cc66b21"),
                        r.e("bundle.Payments-b8e4b837"),
                        r.e("bundle.Payments-49827288"),
                        r.e("bundle.Payments-25e67f1f"),
                        r.e("bundle.Payments-be74d874"),
                        r.e("bundle.Payments-c7951328"),
                        r.e("bundle.Payments-d26971c7"),
                        r.e("bundle.Payments-c411f24f"),
                        r.e("bundle.Payments-134ed92a"),
                        r.e("bundle.Payments-d60a37be"),
                        r.e("bundle.Payments-2a1eb2b7"),
                    ]).then(r.bind(r, 547195)),
            });
        },
        614347: (e, t, r) => {
            r.d(t, { E: () => m });
            var n = r(202784),
                a = r(154003),
                o = r(111677),
                s = r.n(o),
                i = r(725516),
                l = r(979512),
                d = r(443781),
                c = r(457566);
            const u = s().fc7db594;
            function m({ user: e }) {
                const { featureSwitches: t } = n.useContext(d.rC),
                    r = (0, i.z)(),
                    { openGrok: o } = (0, l.Z)(),
                    s = t.isTrue("responsive_web_grok_profile_summary_enabled"),
                    m = t.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                    p = t.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                    h = !e.verified_type || "User" === e.verified_type;
                return s && !e.protected && h && (e.statuses_count ?? 0) > p && (e.followers_count ?? 0) > m
                    ? n.createElement(a.ZP, {
                          "aria-label": u,
                          hoverLabel: { label: u },
                          icon: n.createElement(c.x1, null),
                          onPress: function () {
                              r.scribe({ element: "grok_profile_summary", action: "click" }), o({ text: `@${e.screen_name}`, autoSubmit: !0, source: "user_profile_summary" });
                          },
                          type: "primaryText",
                      })
                    : null;
            }
        },
        144256: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(807896),
                a = r(202784),
                o = r(149202),
                s = r(725516);
            class i extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                r = e.contextualScribeNamespace;
                            t(), r && r.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: r, ...s } = this.props;
                    return a.createElement(o.Z, (0, n.Z)({}, s, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, s.Z)(i);
        },
        438965: (e, t, r) => {
            r.d(t, { FE: () => o, Hx: () => l, Oj: () => a, P3: () => d, QO: () => i, j: () => s });
            var n = r(942893);
            const a = { component: "tweet" },
                o = { component: "thread" },
                s = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                i =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: r, conversationTreeMetadata: n } = t;
                        return !(e || (r && !r.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => n.Z.getTweetURTEntryItem(e),
                d = (e, t, r) => {
                    const n = ["descendant", "ancestor"].includes(r?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === r?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        948503: (e, t, r) => {
            r.d(t, { r: () => h });
            r(136728);
            var n = r(202784),
                a = r(107267),
                o = r(154003),
                s = r(111677),
                i = r.n(s),
                l = r(956272),
                d = r(725516),
                c = r(233391),
                u = r(288955);
            const m = i().a9ae1e78,
                p = n.createElement(l.default, null),
                h = ({ style: e, user: t }) => {
                    const r = (0, a.useHistory)(),
                        s = (0, d.z)(),
                        i = n.useCallback(
                            (e) => {
                                s.scribe({ action: e, element: "search_profile_button", page: "user_profile" });
                            },
                            [s],
                        ),
                        l = n.useCallback(() => {
                            i("search"), r.push({ pathname: "/explore", state: { searchFocused: !0, searchPrefill: `from:${t.screen_name} `, source: "user_profile_header_search_button" } });
                        }, [r, t.screen_name, i]),
                        h = n.useCallback(() => {
                            i("search_attempt");
                        }, [i]);
                    return n.createElement(u.Z, { displayMode: c.BH.search, userFullName: t.name, userId: t.id_str }, (t) => n.createElement(o.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: p, onPress: t(l, h), style: e, type: "primaryText" }));
                };
        },
        26088: (e, t, r) => {
            r.d(t, { Z: () => P });
            r(136728);
            var n = r(202784),
                a = r(107267),
                o = r(811176),
                s = r(154003),
                i = r(392237),
                l = r(111677),
                d = r.n(l),
                c = r(76388),
                u = r(491831),
                m = r(224823),
                p = r(323683),
                h = r(479506),
                f = r(942893),
                b = r(71620),
                g = r(668214),
                y = r(919022);
            const _ = (e, t) => y.ZP.select(e, t.userId),
                w = (0, g.Z)()
                    .propsFromState(() => ({ user: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("SUPER_FOLLOW_BUTTON_CONTAINER"), unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                D = d().b63c46ed,
                T = d().ja66a2b5,
                M = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, isFollowing: i, isSuperFollowing: l, promotedContent: d, style: b, unfollow: g, user: y, userId: _ } = e,
                        w = (0, a.useHistory)(),
                        M = (0, a.useLocation)(),
                        P = y?.screen_name,
                        I = i ? n.createElement(c.default, null) : n.createElement(u.default, { style: E.superFollowsIcon }),
                        k = n.useCallback(
                            (e) => {
                                const { action: r, element: n } = e,
                                    { items: a } = t.contextualScribeData,
                                    o = a?.find((e) => e.item_type === h.Z.ItemType.USER && e.id),
                                    s = [];
                                y ? s.push({ ...o, ...f.Z.getUserItem(y, d) }) : o && s.push(o);
                                const i = M.query && M.query.screen_name ? { items: s, context: "profile_intent" } : { items: s };
                                return t.scribe({ element: n, action: r, data: i });
                            },
                            [t, M, d, y],
                        ),
                        S = n.useCallback(
                            (e) => {
                                _ && (k({ element: "super_follow_subscribe_button", action: "unfollow" }), g(_, { promotedContent: d }).catch(r(p.X))), e();
                            },
                            [r, d, g, _, k],
                        ),
                        Z = n.useCallback(
                            (e) => {
                                const t = [{ Icon: m.default, text: T({ screenName: P }), onClick: S }];
                                return n.createElement(o.Z, { isFixed: !0, items: t, onCloseRequested: e });
                            },
                            [S, P],
                        ),
                        v = i ? T({ screenName: P }) : D({ screenName: P });
                    return n.createElement(s.ZP, {
                        "aria-label": v,
                        borderColor: i || l ? void 0 : "plum500",
                        hoverLabel: { label: v },
                        icon: I,
                        onPress: () => {
                            !P || i || l || (k({ element: "super_follow_subscribe_button", action: "click" }), w.push(`/${P}/creator-subscriptions/subscribe`, { referring_page: "profile_intent" }));
                        },
                        renderMenu: i ? Z : void 0,
                        style: b,
                        type: l && i ? "primaryOutlined" : void 0,
                    });
                },
                E = i.default.create((e) => ({ superFollowsIcon: { color: e.colors.plum500 } })),
                P = w(n.memo(M));
        },
        241304: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                a = r(576648),
                o = r(325686),
                s = r(154003),
                i = r(138099),
                l = r(731708),
                d = r(392237),
                c = r(111677),
                u = r.n(c),
                m = r(652255),
                p = r(376180),
                h = r(502940),
                f = r(70962),
                b = r(933340),
                g = r(321264),
                y = r(208340),
                _ = r(707305),
                w = r(748138),
                D = r(837020),
                T = r(125363),
                M = r(601576),
                E = r(919022);
            const P = u().ia5e7488,
                I = { label: P },
                k = u().j33d8902,
                S = { label: k },
                Z = u().a8ab3d08,
                v = u().d740d2d9,
                A = { bandcamp_handle: { icon: n.createElement(m.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: n.createElement(p.default, null), label: u().d876e67e }, cash_app_handle: { icon: n.createElement(h.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: n.createElement(f.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: n.createElement(b.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: n.createElement(g.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: n.createElement(y.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: n.createElement(_.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function C({ style: e, userId: t }) {
                const r = (0, T.I0)(),
                    [d, c] = n.useState(!1),
                    u = (0, T.v9)((e) => E.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: m } = u;
                if (!m) return null;
                const { is_enabled: p, ...h } = m;
                if (!1 === p || !Object.keys(h).length) return null;
                function f() {
                    c(!1);
                }
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(s.ZP, {
                        "aria-label": k,
                        hoverLabel: S,
                        icon: n.createElement(w.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? n.createElement(
                              i.Z,
                              { onMaskClick: f, style: F.sheet, type: "bottom", withMask: !0 },
                              n.createElement(s.ZP, { "aria-label": P, hoverLabel: I, icon: n.createElement(D.default, null), onPress: f, style: F.close, type: "primaryText" }),
                              n.createElement(o.Z, { style: F.header }, n.createElement(l.ZP, { weight: "bold" }, Z), n.createElement(l.ZP, null, `@${u.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = A[e];
                                      if (o) {
                                          const s = o.url
                                                  ? void 0
                                                  : function () {
                                                        a.Z.setString(String(t)), r((0, M.fz)({ text: v({ service: o.label }) }));
                                                    },
                                              i = o.url ? `${o.url}${String(t)}` : void 0;
                                          return n.createElement(l.ZP, { color: "text", key: e, link: i, onPress: s, style: F.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const F = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        179562: (e, t, r) => {
            r.d(t, { Z: () => O });
            var n = r(807896),
                a = r(202784),
                o = r(238406),
                s = r(111677),
                i = r.n(s),
                l = r(516951),
                d = r(720728),
                c = r(943245),
                u = r(3693),
                m = r(556303),
                p = r(312771),
                h = r(443781),
                f = r(71620),
                b = r(668214),
                g = r(390387),
                y = (r(571372), r(465233)),
                _ = r(697926),
                w = r(120071),
                D = r(163889),
                T = r(502909),
                M = r(600823),
                E = r(926597),
                P = r(298219);
            const I = (0, T.ZP)({ namespace: "translationsProfiles", fetchOneContext: "FETCH_PROFILE_TRANSLATION", fetchOneEndpoint: (e) => (t, r) => e.withEndpoint(w.Z).fetchProfileTranslation(t, r).then(k), fetchOneParams: (e) => ({ profileUserId: e }) });
            I.fetchStreamedGrokTranslation =
                (e, t, r) =>
                async (r, n, { api: a }) => {
                    const o = { content_type: "BIO", id: e, dst_lang: t.userLanguage },
                        s = { profileUserId: e, profileTranslation: { entities: { urls: [] }, translation: "", streamedTranslationFetchStatus: p.iF.LOADING, translationSource: "Grok", localizedSourceLanguage: "" } };
                    r(I.updateOrAddOne(e, (0, y.Z)(s)));
                    const i = new AbortController();
                    try {
                        const t = await a.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(o), signal: i.signal });
                        if (!t.ok) throw ((s.profileTranslation.translationState = u.H.ERROR), (s.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), r(I.updateOrAddOne(e, (0, y.Z)(s))), new Error(`invalid response ${t.status}`));
                        const n = t.body?.getReader();
                        if (!n) throw ((s.profileTranslation.translationState = u.H.ERROR), (s.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), r(I.updateOrAddOne(e, (0, y.Z)(s))), new Error("reader not present"));
                        const l = new TextDecoder();
                        let d = "",
                            c = "";
                        const m = async (t) => {
                            const a = t ? P.T9 : P.UG,
                                { done: o, value: i } = await (0, P.yE)("PROFILE_TIMEOUT_BETWEEN_CHUNKS", () => n.read(), a, t ? "timeout to first chunk" : "timeout between chunks");
                            if (o) {
                                if (0 === d.length) throw new Error("empty string when done");
                                return (s.profileTranslation.translationState = u.H.SUCCESS), (s.profileTranslation.streamedTranslationFetchStatus = p.iF.LOADED), (s.profileTranslation.translation = d), void r(I.updateOrAddOne(e, (0, y.Z)(s)));
                            }
                            const h = l.decode(i);
                            if (((c += h), c.includes("\n"))) {
                                const t = c.split("\n");
                                c = t.pop();
                                for (const n of t) {
                                    const t = JSON.parse(n);
                                    if (t.error) throw new Error(JSON.stringify(t.error));
                                    if ("BIO" === t.result?.content_type) {
                                        const { entities: r, text: n } = t.result;
                                        if ((n && ((d += n), (s.profileTranslation.translation = d)), r?.urls)) {
                                            const { errors: t, result: n } = (0, E.b)(r.urls);
                                            t.length > 0 && (0, D.ZP)(`invalid url entities in translating profile:${e} - ${t.join(",")}`), (s.profileTranslation.entities.urls = [...(s.profileTranslation.entities.urls ?? []), ...n]);
                                        }
                                    }
                                    r(I.updateOrAddOne(e, (0, y.Z)(s)));
                                }
                            }
                            await m();
                        };
                        await m(!0);
                    } catch (n) {
                        (s.profileTranslation.translationState = u.H.ERROR), (s.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), r(I.updateOrAddOne(e, (0, y.Z)(s))), i.abort(), (0, D.ZP)(`Failed to translate profile:${e} to ${t.userLanguage} - ${String(n)}`);
                    }
                };
            const k = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsProfiles: (0, _.Z)(t, (e) => e.profileUserId) } };
                },
                S = M.Z.register(I),
                Z = (e, t) => S.select(e, t.userId),
                v = (e, t) => S.selectFetchStatus(e, t.userId),
                A = (0, b.Z)()
                    .propsFromState(() => ({ translation: Z, translationFetchStatus: v, userLanguage: g.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("TRANSLATE_USER_BIO"), fetchTranslation: S.fetchOneIfNeeded, fetchStreamedGrokTranslation: S.fetchStreamedGrokTranslation }))
                    .withAnalytics(),
                C = i().ad7a451e;
            class F extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { grokTranslatedBio: e } = this.props,
                                { featureSwitches: t } = this.context;
                            if ((0, m.F)(t, "")) return e ? "auto" : "button";
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: r, translation: n, translationFetchStatus: a, userId: o, userLanguage: s } = this.props,
                                i = this._useGrokTranslation(),
                                l = n?.profileTranslation;
                            if (l?.translationState !== u.H.SUCCESS)
                                if (i) {
                                    if (l?.streamedTranslationFetchStatus === p.ZP.LOADING) return;
                                    t(o, { userLanguage: s });
                                } else a !== p.ZP.LOADING && r(o).catch(e());
                        }),
                        (this._renderGrokTranslatedBio = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: r, fetchStreamedGrokTranslation: n, fetchTranslation: s, grokTranslatedBio: i, style: l, translation: d, translationFetchStatus: c, userLanguage: u, withOriginalText: m, ...p } = this.props;
                            if (!i) return;
                            const h = { ...p, description: i.translation, entities: { description: i.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: !0 };
                            return a.createElement(o.Z, h);
                        }),
                        (this._renderTranslation = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: r, fetchStreamedGrokTranslation: n, fetchTranslation: s, grokTranslatedBio: i, style: l, translation: d, translationFetchStatus: c, userLanguage: u, withOriginalText: p, ...h } = this.props,
                                { featureSwitches: f } = this.context,
                                b = (0, m.F)(f, "");
                            if (!d) return;
                            const g = { ...h, description: d.profileTranslation.translation, entities: { description: d.profileTranslation.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: b };
                            return a.createElement(o.Z, g);
                        });
                }
                render() {
                    const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: r, fetchStreamedGrokTranslation: s, fetchTranslation: i, grokTranslatedBio: u, style: m, translation: h, translationFetchStatus: f, userId: b, userLanguage: g, withOriginalText: y, ..._ } = this.props;
                    if (u) {
                        const e = (0, c.t)(g, u.source_language);
                        return a.createElement(d.Z, { disableTranslation: this.props.disableTranslation, fetchTranslation: l.Z, isInitiallyTranslated: !0, key: `${b}-auto-translation`, originLanguage: e, streamedTranslationFetchStatus: p.ZP.LOADED, style: m, translateButtonText: C, translateTargetType: "bio", translatedMessage: this._renderGrokTranslatedBio(), translationFetchStatus: p.ZP.LOADED, translationSource: "Grok", useGrokTranslation: "auto", withOriginalText: y }, a.createElement(o.Z, (0, n.Z)({}, _, { userId: b })));
                    }
                    return a.createElement(d.Z, { disableTranslation: this.props.disableTranslation, fetchTranslation: this._fetchTranslation, key: `${b}-translation`, originLanguage: h && h.profileTranslation.localizedSourceLanguage, streamedTranslationFetchStatus: h && h.profileTranslation.streamedTranslationFetchStatus, style: m, translateButtonText: C, translateTargetType: "bio", translatedMessage: this._renderTranslation(), translationFetchStatus: f, translationSource: h && h.profileTranslation.translationSource, useGrokTranslation: this._useGrokTranslation(), withOriginalText: y }, a.createElement(o.Z, (0, n.Z)({}, _, { userId: b })));
                }
            }
            F.contextType = h.rC;
            const O = A(F);
        },
        703738: (e, t, r) => {
            r.d(t, { z: () => s });
            var n = r(323265),
                a = r(655352),
                o = r(952793);
            const s = () => (0, o.hC)("rweb_sourcemap_migration") && (0, a.ZP)() && !n.ZP.isMobileOS();
        },
        507986: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(202784);
            const n = (0, r(523561).Z)({ loader: () => Promise.all([r.e("icons.21"), r.e("icons.3"), r.e("modules.common-e907d115"), r.e("modules.common-e019dbda"), r.e("icons.7"), r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"), r.e("loader.ProfileClusterFollow")]).then(r.bind(r, 751154)) });
        },
        103335: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(856674);
            const a = (e, t) => [e, t].sort(n.ZP).join("-");
        },
        520385: (e, t, r) => {
            r.d(t, { Mp: () => a, NB: () => o, P2: () => s, j3: () => n, pR: () => i });
            const n = 5e4,
                a = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                o = (a.RICHTEXT, a.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                s = { about: o.ABOUT, work_experience: o.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, r) => {
            r.d(t, { HM: () => h, Kh: () => m, ZU: () => u, hW: () => b, s1: () => p, uR: () => f });
            var n = r(990242),
                a = r.n(n),
                o = r(111677),
                s = r.n(o),
                i = r(520385),
                l = r(462166);
            const d = s().eb7710f1,
                c = s().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const r = e?.filter((e) => e);
                    return r
                        ? r.map((e) => {
                              const r = { ...e },
                                  n = a()(l.wJ, r),
                                  o = a()(t, n.result?.content);
                              return { __id: r.__id, id: r.id, rest_id: r.rest_id, result: { ...n.result, content: o } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const r = e.result?.content,
                                n = t.result?.content,
                                a = (r?.active_role ? new Date() : u(r?.end_month, r?.end_year)) ?? new Date(0),
                                o = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0);
                            if (a.getFullYear() !== o.getFullYear()) return o.getFullYear() - a.getFullYear();
                            if (a.getMonth() !== o.getMonth()) return o.getMonth() - a.getMonth();
                            const s = u(r?.start_month, r?.start_year) ?? new Date(0),
                                i = u(n?.start_month, n?.start_year) ?? new Date(0);
                            return s.getFullYear() !== i.getFullYear() ? i.getFullYear() - s.getFullYear() : i.getMonth() - s.getMonth();
                        });
                },
                h = (e, t) => {
                    let r = t.getMonth() - e.getMonth() + 1,
                        n = t.getFullYear() - e.getFullYear();
                    return r < 0 && (n--, (r += 12)), n && r ? `${d({ years: n })} ${c({ months: r })}` : n ? d({ years: n }) : r ? c({ months: r }) : "";
                },
                f = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === i.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === i.Mp.RICHTEXT)) : void 0),
                b = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        965728: (e, t, r) => {
            r.d(t, { C_: () => g, I5: () => h, K2: () => b, L$: () => d, Rb: () => f, nk: () => p, sI: () => w, xr: () => y });
            var n = r(202784),
                a = r(483677),
                o = r(782578),
                s = r(401339),
                i = r(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && a.Z.getForGallery(e);
                    return t ? { rgb: y(t), rgba: l(t, 0.9) } : m;
                },
                c = i.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                h = (e, t) => {
                    const { containerHeight: r, containerWidth: n, mediaHeight: a, mediaWidth: s } = e,
                        i = s && a ? s / a : 1,
                        l = i > 1,
                        d = t ? 400 : c,
                        m = l && (!s || s <= d) ? u(n, d) : n,
                        p = l || (a && !(a <= d)) ? r : u(r, d);
                    return o.Z.getContainDimensions({ width: m, height: p }, i);
                },
                f = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(t);
                },
                b = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(t);
                },
                g = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                y = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                _ = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                w = () => {
                    const [e, t] = n.useReducer(_, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            s.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        728220: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(443781),
                a = r(125363),
                o = r(919022),
                s = r(788210);
            const i = () => {
                const { userClaims: e } = (0, n.QZ)(),
                    t = (0, a.v9)(o.ZP.selectViewerUser),
                    r = (0, s.Z)(),
                    i = t?.is_blue_verified,
                    l = e.isPaidVerifiedOrg() || e.isFreeVerifiedOrg() || e.isLegacyVerifiedOrg() || e.isVerifiedOrgAffiliate();
                return r && !i && !l && !("Government" === t?.verified_type || "Business" === t?.verified_type);
            };
        },
        788210: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(443781);
            const o = () => {
                const { userClaims: e } = n.useContext(a.rC);
                return e.hasSubscription("premium_standard") || e.hasSubscription("premium_plus") || e.isVerifiedOrg() || e.isVerifiedOrgAffiliate();
            };
        },
        656520: (e, t, r) => {
            function n() {
                return { section: "category_label", action: "impression" };
            }
            function a() {
                return { section: "category_label", action: "click" };
            }
            function o() {
                return { component: "professional_conversion", action: "click" };
            }
            function s() {
                return { component: "professional_settings", action: "click" };
            }
            r.d(t, { Lr: () => o, _L: () => n, ti: () => s, yL: () => a });
        },
        42508: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, r) => {
            r.d(t, { ZP: () => a, n5: () => s });
            var n = r(42508);
            const a = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: r, isWithheld: n, user: a, userProfileInterstitialType: s, viewerUserId: i }) => {
                    const l = !!i && i === a.id_str,
                        d = a.blocked_by,
                        c = a.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: s }),
                        m = (l || !n) && !r;
                    return { avatar: l || (!u && !t && !r && !n), badges: l || !n, description: l || (!c && !d && !u && !r && !n), followButton: !(l || d || u || t || r || n), followersYouKnow: !l && !d && !c && !u && !t && !r && !n && (a.following || !a.protected), followIndicator: !n, fullName: m, label: m, stats: l || (!d && !u && !r && !n), subscriptionsCount: l || !a.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: r, userProfileInterstitialType: a }) => (a === n.Z.SensitiveMedia || a === n.Z.OffensiveProfileContent) && !(t || r.following || e),
                s = ({ isOwnProfile: e, user: t }) => {
                    const r = t.protected && !t.following;
                    return e || !r;
                };
        },
        893664: (e, t, r) => {
            r.d(t, { g: () => i });
            var n = r(882220),
                a = (r(585488), r(277660)),
                o = r.n(a),
                s = r(835546);
            const i = (e) => {
                const t = o()(n.Z, e.user);
                return !(!t.relationship_perspectives || !t.privacy) && (0, s.n5)({ isOwnProfile: e.isOwnProfile, user: { blocked_by: Boolean(t.relationship_perspectives?.blocked_by), following: Boolean(t.relationship_perspectives?.following), protected: Boolean(t.privacy?.protected) } });
            };
        },
        690282: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(801501);
            function o(e, t) {
                const r = n.useRef();
                n.useEffect(() => {
                    r.current = e;
                }, [e]),
                    n.useEffect(() => {
                        const e = r.current;
                        if (e && t) {
                            const r = new a.Z(t).interval(e);
                            r.start();
                            return () => r.stop();
                        }
                    }, [t]);
            }
        },
        961104: (e, t, r) => {
            function n(e, t) {
                return e.filter(t);
            }
            r.d(t, { b: () => n });
        },
        806528: (e, t, r) => {
            r.d(t, { Bz: () => d, ZW: () => h, ey: () => u, fw: () => i, iG: () => p, wM: () => l });
            var n = r(499627),
                a = r(341276);
            const o = "geoLocation",
                s = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[o],
                l = (e) => e[o].permissionStatus,
                d = (e) => e[o].position,
                c = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: c }),
                m = "rweb/geoLocation/SET_POSITION",
                p = () => (e, t) =>
                    f()
                        .then((t) => e({ payload: t, type: m }))
                        .catch((t) => (e(u(a.S.denied)), Promise.reject(t))),
                h = () => (e, t) => (d(t()) ? Promise.resolve() : e(p())),
                f = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const r = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(r);
                        }, t),
                    );
            n.Z.register({
                [o]: function (e = s, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c:
                            return { ...e, permissionStatus: t.payload };
                        case m:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, r) => {
            r.d(t, { M: () => a, S: () => n });
            const n = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        947650: (e, t, r) => {
            r.d(t, { Hq: () => _, c1: () => f, lP: () => g, og: () => b });
            var n = r(745123),
                a = r(961104),
                o = r(499627),
                s = r(917799),
                i = r(56519),
                l = r(919022);
            const d = "knownFollowers",
                c = `rweb/${d}`,
                u = [],
                m = (0, s.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                p = {};
            o.Z.register({
                [d]: function (e = p, t) {
                    if (!t) return e;
                    if (t.type === m.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: n, users: a } = r && r.result,
                            { user_id: o } = t.meta || {};
                        return o ? { ...e, [o]: { knownFollowersCount: n, knownFollowerIds: a } } : e;
                    }
                    return e;
                },
            });
            const h = (e, t) => e[d][t],
                f = (e, t) => {
                    if (t) {
                        const r = y(e, t);
                        return (0, a.b)(l.ZP.selectMany(e, r), (e) => !!e);
                    }
                    return u;
                },
                b = (e, t) => f(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                g = (e, t) => {
                    let r;
                    if (t) {
                        const n = h(e, t);
                        r = n?.knownFollowersCount;
                    }
                    return r;
                },
                y = (e, t) => {
                    const r = h(e, t);
                    return r?.knownFollowerIds || u;
                },
                _ =
                    (e) =>
                    (t, r, { api: a }) =>
                        void 0 !== g(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: a }) =>
                                          (0, s._O)(t, { request: a.withEndpoint(n.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: m, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, i.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        351791: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(33055),
                a = r(750085),
                o = r(218951);
            const s = (e, t) => (0, o.Z)({ timelineId: `businessProfileTeam-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchBusinessProfileTeam, getEndpointParams: ({ count: r, cursor: n }) => ({ count: r, cursor: "string" == typeof n ? n : void 0, userId: e, teamName: t }) }, formatResponse: a.Z, context: "FETCH_BUSINESS_PROFILE_TEAM_TIMELINE", perfKey: "businessProfileTeam-GraphQL" });
        },
        392280: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(33055),
                a = r(750085),
                o = r(218951);
            function s(e) {
                return (0, o.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(n.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: r, cursor: n } = t,
                                a = { count: r, userId: e, cursor: void 0 };
                            return "string" == typeof n && (a.cursor = n), a;
                        },
                    },
                    formatResponse: a.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
        611186: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(33055),
                a = r(750085),
                o = r(218951);
            const s = (e) => (0, o.Z)({ timelineId: `userMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchUserMedia, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, userId: e }) }, formatResponse: a.Z, context: "FETCH_MEDIA_TIMELINE", perfKey: "userMedia-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e019dbda.abded54a.js.map
