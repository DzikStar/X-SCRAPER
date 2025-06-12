"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e019dbda"],
    {
        177997: (e, t, n) => {
            n.d(t, { Z: () => F });
            var r = n(202784),
                a = n(88660),
                o = n(293115),
                s = n(443781),
                i = n(736063),
                l = n(807896),
                d = n(325686),
                c = n(731708),
                u = n(154003),
                m = n(392237),
                p = n(111677),
                h = n.n(p),
                f = n(837020),
                b = n(121791),
                g = n(725405),
                y = n(945181);
            const _ = ({ metric: e, metricResult: t }) => {
                const n = t.metric_type,
                    a = t.metric_value;
                if (!a) return null;
                const o = n,
                    s = { [o]: { metrics: { [o]: a }, fromTime: "", toTime: "" } };
                return r.createElement(d.Z, { testID: e }, r.createElement(y.Fd, { compareData: null, data: s, metric: n }));
            };
            var w = n(336636);
            const D = h().d7f8a117,
                T = h().cae20e93,
                M = h().gc767fda,
                E = h().c7c85e0c,
                I = ({ config: e, data: t, dismiss: n, impress: a }) => {
                    const o = (0, g.Z)();
                    r.useEffect(() => {
                        o.scribe({ action: "show" }), o.scribe({ action: "impression", component: "unified-upsell", data: { referer: "account_analytics" } });
                    });
                    const s = r.useMemo(() => {
                            if (e.metrics.length > 1)
                                return r.createElement(
                                    d.Z,
                                    { style: S.tiles },
                                    e.metrics.map((e) => {
                                        const n = t?.find((t) => t.metric_type === e.metricType);
                                        return n?.metric_value ? r.createElement(_, { key: e.metricType, metric: e.metricType, metricResult: n }) : null;
                                    }),
                                );
                            if (1 === e.metrics.length) {
                                const n = t?.find((t) => t.metric_type === e.metrics[0].metricType);
                                if (!n) return null;
                                const a = n.metric_type,
                                    { value: o } = (0, y.fX)({ compareData: null, data: { [a]: { metrics: { [a]: n.metric_value }, fromTime: "", toTime: "" } }, metric: e.metrics[0].metricType }),
                                    s = y.Kg[n.metric_type];
                                return s.summary ? r.createElement(c.ZP, { weight: "medium" }, s.summary({ value: o, period: T({ days: e.periodInDays }) })) : null;
                            }
                            return null;
                        }, [e.metrics, e.periodInDays, t]),
                        i = r.useCallback(() => {
                            o.scribe({ action: "dismiss" }), n();
                        }, [n, o]);
                    return r.createElement(d.Z, { style: S.container, testID: "analytics-preview" }, r.createElement(d.Z, { style: S.heading }, e.metrics.length > 1 ? r.createElement(c.ZP, { size: "headline2", weight: "bold" }, D({ days: e.periodInDays })) : null, r.createElement(c.ZP, { color: "gray700", size: "subtext3" }, M), r.createElement(u.ZP, { icon: r.createElement(f.default, null), onClick: i, style: S.dismissButton, testID: "dismiss-button", type: "primaryText" })), r.createElement(d.Z, { style: S.content }, s, r.createElement(u.ZP, { icon: r.createElement(b.default, null), link: { pathname: "/i/premium_sign_up", state: { referring_page: "account_analytics" } }, size: "xSmall", style: S.unlockButton, type: "primaryFilled" }, E)));
                },
                P = (e) => {
                    const t = (0, w.Z)({ metrics: e.config.metrics, periodInDays: e.config.periodInDays }),
                        n = t.result.result?.free_metrics_rollup,
                        a = (0, g.Z)();
                    let o = !0;
                    return (
                        e.config.metrics.forEach((e) => {
                            const t = n?.find((t) => t.metric_type === e.metricType);
                            (!t?.metric_value || (e.threshold && t?.metric_value <= e.threshold)) && (o = !1);
                        }),
                        o ? r.createElement(I, (0, l.Z)({}, e, { data: n })) : (a.scribe({ action: "not_matched" }), null)
                    );
                },
                k = r.memo(P),
                S = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.large, padding: e.spaces.space16 }, content: { justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }, tiles: { flexDirection: "row", gap: e.spaces.space48 }, heading: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, unlockButton: { alignSelf: "flex-end", marginTop: e.spaces.space12 }, dismissButton: { marginStart: "auto" } })),
                Z = { showForMsec: a.fz, reappearAfterMsec: a.Ho, dismissForMsec: a.dV },
                A = { showForMsec: a.Tg, reappearAfterMsec: a.Vv, dismissForMsec: a.IZ },
                v = {
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
                        fatigueConfig: { key: "AnalyticsPreview_MultipleMetrics", ...A },
                    },
                    ProfileVisits: { metrics: [{ metricType: "ProfileVisits", threshold: 100 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_ProfileVisits", ...A } },
                    Impressions: { metrics: [{ metricType: "Impressions", threshold: 1e3 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...A } },
                    ImpressionsLower: { metrics: [{ metricType: "Impressions", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...A } },
                    Likes: { metrics: [{ metricType: "Likes", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Likes", ...A } },
                },
                C = (e) => {
                    const { dismiss: t, impress: n, shouldShow: s } = (0, a.ZP)(e.config.fatigueConfig);
                    return (
                        r.useEffect(() => {
                            n();
                        }),
                        s ? r.createElement(o.nO, { namespace: { component: "analytics_preview" } }, r.createElement(i.H, { errorConfig: { context: "AnalyticPreview" }, suspenseFallback: null }, r.createElement(k, { config: e.config, dismiss: t, impress: n }))) : null
                    );
                },
                F = () => {
                    const { featureSwitches: e, userClaims: t } = (0, s.QZ)(),
                        n = t.isAnyPremiumSubscriber(),
                        a = e.isTrue("subscriptions_sign_up_enabled");
                    if (n || !a) return null;
                    const o = e.isTrue("subscriptions_upsells_analytics_profile_enabled"),
                        i = ((e) => {
                            switch (e) {
                                case "DemoMultipleMetrics":
                                    return v.DemoMultipleMetrics;
                                case "DemoSingleMetric":
                                    return v.DemoSingleMetric;
                                case "ProfileVisits":
                                    return v.ProfileVisits;
                                case "Impressions":
                                    return v.Impressions;
                                case "Likes":
                                    return v.Likes;
                                case "MultipleMetrics":
                                    return v.MultipleMetrics;
                                case "ImpressionsLower":
                                    return v.ImpressionsLower;
                                default:
                                    return null;
                            }
                        })(e.getStringValue("subscriptions_upsells_analytics_profile_variant"));
                    return o && i && !n ? r.createElement(C, { config: i }) : null;
                };
        },
        336636: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(857037),
                a = (n(585488), n(712696)),
                o = n.n(a),
                s = n(665979),
                i = n(44988),
                l = n(443781);
            const d = r.Z,
                c = new Date(),
                u = (e) => {
                    const { viewerUserId: t } = (0, l.QZ)();
                    return o()(d, { from_time: (0, s.b7)((0, i.Hk)(c)(e.periodInDays)).toISOString(), requested_metrics: e.metrics.map((e) => e.metricType), rest_id: t, to_time: (0, i.iX)(c).toISOString() });
                };
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                s = n(292627),
                i = n(537392),
                l = n(392237),
                d = n(365023),
                c = n(392027),
                u = n(774654),
                m = n(725516),
                p = n(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                f = (e) => {
                    const { "aria-label": t, label: n, onPress: f, scribeComponent: b, ...g } = e,
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
                                      a.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, i) => a.createElement(o.Z, (0, r.Z)({ ref: e() }, i({ style: p })), a.createElement(c.Z, (0, r.Z)({}, g, { "aria-label": t, label: s ? n : void 0, onPress: w, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var r = n(202784),
                a = n(387524),
                o = n(635510);
            const s = "/compose/post";
            class i extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                r = { pathname: s, state: (t && t()) || {} };
                            n.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: i } = this.props;
                    return r.createElement(a.Z, { "aria-label": e, href: s, icon: t, label: n, onPress: this._handlePress, scribeComponent: i, testID: o.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                a = n(111677),
                o = n.n(a),
                s = n(186444),
                i = n(355883);
            const l = o().j0179e90,
                d = o().ee69d769({ verb: "" }),
                c = r.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => r.createElement(i.Z, { "aria-label": l, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        231214: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), n.e("ondemand.IntentPrompt")]).then(n.bind(n, 958679)) });
        },
        170371: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                a = n(325686),
                o = n(529509),
                s = n(392237),
                i = n(71620),
                l = n(668214),
                d = n(882122),
                c = n(582751);
            const u = (e, t) => c.vx(e, t.userId),
                m = (e, t) => c.mM(e, t.userId),
                p = (e, t) => c.Z8(e, t.userId),
                h = (0, l.Z)()
                    .propsFromState(() => ({ knownFollowersAvatarUrls: u, knownFollowersCount: m, knownFollowersNames: p }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("KNOWN_FOLLOWERS"), fetchKnownFollowersIfNeeded: d.Hq })),
                f = s.default.create((e) => ({ minHeight: { minHeight: e.spaces.space20 } })),
                b = h((e) => {
                    const { createLocalApiErrorHandler: t, fetchKnownFollowersIfNeeded: n, knownFollowersAvatarUrls: s, knownFollowersCount: i, knownFollowersNames: l, userId: d, userScreenName: c } = e;
                    return (
                        r.useEffect(() => {
                            n(d).catch(t());
                        }, [d, n, t]),
                        r.createElement(a.Z, { style: f.minHeight }, r.createElement(o.Z, { knownFollowersAvatarUrls: s, knownFollowersCount: i, knownFollowersNames: l, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, n) => {
            n.d(t, { Z8: () => s, mM: () => a, vx: () => o });
            var r = n(882122);
            const a = (e, t) => {
                    const n = r.lP(e, t);
                    if (void 0 === n) return n;
                    const a = r.c1(e, t),
                        o = r.og(e, t);
                    return n - (a.length - o.length);
                },
                o = (e, t) => r.og(e, t).map(({ profile_image_url_https: e }) => e),
                s = (e, t) => r.og(e, t).map(({ name: e }) => e);
        },
        258199: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.0"),
                        n.e("icons.5"),
                        n.e("icons.12"),
                        n.e("icons.20"),
                        n.e("icons.2"),
                        n.e("icons.21"),
                        n.e("icons.28"),
                        n.e("icons.10"),
                        n.e("icons.17"),
                        n.e("icons.9"),
                        n.e("icons.23"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.22"),
                        n.e("icons.24"),
                        n.e("icons.25"),
                        n.e("icons.14"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("icons.6"),
                        n.e("icons.3"),
                        n.e("icons.8"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"),
                        n.e("shared~bundle.Payments~bundle.TV"),
                        n.e("shared~bundle.Payments~bundle.PaymentShared"),
                        n.e("bundle.Payments-bc6ccf4c"),
                        n.e("bundle.Payments-27545368"),
                        n.e("bundle.Payments-960914ab"),
                        n.e("bundle.Payments-17a1c92a"),
                        n.e("bundle.Payments-7f8e98f6"),
                        n.e("bundle.Payments-7e6638bc"),
                        n.e("bundle.Payments-9f4db315"),
                        n.e("bundle.Payments-63cb1cc4"),
                        n.e("bundle.Payments-b8e4b837"),
                        n.e("bundle.Payments-49827288"),
                        n.e("bundle.Payments-25e67f1f"),
                        n.e("bundle.Payments-be74d874"),
                        n.e("bundle.Payments-c7951328"),
                        n.e("bundle.Payments-c411f24f"),
                        n.e("bundle.Payments-134ed92a"),
                        n.e("bundle.Payments-d60a37be"),
                        n.e("bundle.Payments-2a1eb2b7"),
                    ]).then(n.bind(n, 547195)),
            });
        },
        144256: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                a = n(202784),
                o = n(149202),
                s = n(725516);
            class i extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                n = e.contextualScribeNamespace;
                            t(), n && n.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: n, ...s } = this.props;
                    return a.createElement(o.Z, (0, r.Z)({}, s, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, s.Z)(i);
        },
        438965: (e, t, n) => {
            n.d(t, { FE: () => o, Hx: () => l, Oj: () => a, P3: () => d, QO: () => i, j: () => s });
            var r = n(942893);
            const a = { component: "tweet" },
                o = { component: "thread" },
                s = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                i =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: n, conversationTreeMetadata: r } = t;
                        return !(e || (n && !n.isEnd && (!r || !1 !== r.descendantConnector || 0 !== r.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => r.Z.getTweetURTEntryItem(e),
                d = (e, t, n) => {
                    const r = ["descendant", "ancestor"].includes(n?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === n?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: r, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        948503: (e, t, n) => {
            n.d(t, { r: () => h });
            n(136728);
            var r = n(202784),
                a = n(107267),
                o = n(154003),
                s = n(111677),
                i = n.n(s),
                l = n(956272),
                d = n(725516),
                c = n(233391),
                u = n(288955);
            const m = i().a9ae1e78,
                p = r.createElement(l.default, null),
                h = ({ fullName: e, screenName: t, style: n, userId: s }) => {
                    const i = (0, a.useHistory)(),
                        l = (0, d.z)(),
                        h = r.useCallback(
                            (e) => {
                                l.scribe({ action: e, element: "search_profile_button", page: "user_profile" });
                            },
                            [l],
                        ),
                        f = r.useCallback(() => {
                            h("search"), i.push({ pathname: "/explore", state: { searchFocused: !0, searchPrefill: `from:${t || ""} `, source: "user_profile_header_search_button" } });
                        }, [i, t, h]),
                        b = r.useCallback(() => {
                            h("search_attempt");
                        }, [h]);
                    return r.createElement(u.Z, { displayMode: c.BH.search, userFullName: e, userId: s }, (e) => r.createElement(o.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: p, onPress: e(f, b), style: n, type: "primaryOutlined" }));
                };
        },
        26088: (e, t, n) => {
            n.d(t, { Z: () => I });
            n(136728);
            var r = n(202784),
                a = n(107267),
                o = n(811176),
                s = n(154003),
                i = n(392237),
                l = n(111677),
                d = n.n(l),
                c = n(76388),
                u = n(491831),
                m = n(224823),
                p = n(323683),
                h = n(479506),
                f = n(942893),
                b = n(71620),
                g = n(668214),
                y = n(919022);
            const _ = (e, t) => y.ZP.select(e, t.userId),
                w = (0, g.Z)()
                    .propsFromState(() => ({ user: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("SUPER_FOLLOW_BUTTON_CONTAINER"), unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                D = d().b63c46ed,
                T = d().ja66a2b5,
                M = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, isFollowing: i, isSuperFollowing: l, promotedContent: d, style: b, unfollow: g, user: y, userId: _ } = e,
                        w = (0, a.useHistory)(),
                        M = (0, a.useLocation)(),
                        I = y?.screen_name,
                        P = i ? r.createElement(c.default, null) : r.createElement(u.default, { style: E.superFollowsIcon }),
                        k = r.useCallback(
                            (e) => {
                                const { action: n, element: r } = e,
                                    { items: a } = t.contextualScribeData,
                                    o = a?.find((e) => e.item_type === h.Z.ItemType.USER && e.id),
                                    s = [];
                                y ? s.push({ ...o, ...f.Z.getUserItem(y, d) }) : o && s.push(o);
                                const i = M.query && M.query.screen_name ? { items: s, context: "profile_intent" } : { items: s };
                                return t.scribe({ element: r, action: n, data: i });
                            },
                            [t, M, d, y],
                        ),
                        S = r.useCallback(
                            (e) => {
                                _ && (k({ element: "super_follow_subscribe_button", action: "unfollow" }), g(_, { promotedContent: d }).catch(n(p.X))), e();
                            },
                            [n, d, g, _, k],
                        ),
                        Z = r.useCallback(
                            (e) => {
                                const t = [{ Icon: m.default, text: T({ screenName: I }), onClick: S }];
                                return r.createElement(o.Z, { isFixed: !0, items: t, onCloseRequested: e });
                            },
                            [S, I],
                        ),
                        A = i ? T({ screenName: I }) : D({ screenName: I });
                    return r.createElement(s.ZP, {
                        "aria-label": A,
                        borderColor: i || l ? void 0 : "plum500",
                        hoverLabel: { label: A },
                        icon: P,
                        onPress: () => {
                            !I || i || l || (k({ element: "super_follow_subscribe_button", action: "click" }), w.push(`/${I}/creator-subscriptions/subscribe`, { referring_page: "profile_intent" }));
                        },
                        renderMenu: i ? Z : void 0,
                        style: b,
                        type: l && i ? "primaryOutlined" : void 0,
                    });
                },
                E = i.default.create((e) => ({ superFollowsIcon: { color: e.colors.plum500 } })),
                I = w(r.memo(M));
        },
        241304: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                a = n(576648),
                o = n(325686),
                s = n(154003),
                i = n(138099),
                l = n(731708),
                d = n(392237),
                c = n(111677),
                u = n.n(c),
                m = n(652255),
                p = n(376180),
                h = n(502940),
                f = n(70962),
                b = n(933340),
                g = n(321264),
                y = n(208340),
                _ = n(707305),
                w = n(748138),
                D = n(837020),
                T = n(125363),
                M = n(601576),
                E = n(919022);
            const I = u().ia5e7488,
                P = { label: I },
                k = u().j33d8902,
                S = { label: k },
                Z = u().a8ab3d08,
                A = u().d740d2d9,
                v = { bandcamp_handle: { icon: r.createElement(m.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(p.default, null), label: u().d876e67e }, cash_app_handle: { icon: r.createElement(h.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(f.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: r.createElement(b.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(g.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(y.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(_.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function C({ style: e, userId: t }) {
                const n = (0, T.I0)(),
                    [d, c] = r.useState(!1),
                    u = (0, T.v9)((e) => E.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: m } = u;
                if (!m) return null;
                const { is_enabled: p, ...h } = m;
                if (!1 === p || !Object.keys(h).length) return null;
                function f() {
                    c(!1);
                }
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(s.ZP, {
                        "aria-label": k,
                        hoverLabel: S,
                        icon: r.createElement(w.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? r.createElement(
                              i.Z,
                              { onMaskClick: f, style: F.sheet, type: "bottom", withMask: !0 },
                              r.createElement(s.ZP, { "aria-label": I, hoverLabel: P, icon: r.createElement(D.default, null), onPress: f, style: F.close, type: "primaryText" }),
                              r.createElement(o.Z, { style: F.header }, r.createElement(l.ZP, { weight: "bold" }, Z), r.createElement(l.ZP, null, `@${u.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = v[e];
                                      if (o) {
                                          const s = o.url
                                                  ? void 0
                                                  : function () {
                                                        a.Z.setString(String(t)), n((0, M.fz)({ text: A({ service: o.label }) }));
                                                    },
                                              i = o.url ? `${o.url}${String(t)}` : void 0;
                                          return r.createElement(l.ZP, { color: "text", key: e, link: i, onPress: s, style: F.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const F = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        179562: (e, t, n) => {
            n.d(t, { Z: () => A });
            var r = n(807896),
                a = n(202784),
                o = n(238406),
                s = n(111677),
                i = n.n(s),
                l = n(516951),
                d = n(720728),
                c = n(943245),
                u = n(3693),
                m = n(556303),
                p = n(312771),
                h = n(443781),
                f = n(71620),
                b = n(668214),
                g = n(390387),
                y = (n(571372), n(697926)),
                _ = n(120071),
                w = n(502909),
                D = n(600823);
            const T = (0, w.ZP)({ namespace: "translationsProfiles", fetchOneContext: "FETCH_PROFILE_TRANSLATION", fetchOneEndpoint: (e) => (t, n) => e.withEndpoint(_.Z).fetchProfileTranslation(t, n).then(M), fetchOneParams: (e) => ({ profileUserId: e }) });
            T.fetchStreamedGrokTranslation =
                (e, t, n) =>
                (n, r, { api: a }) =>
                    new Promise((r, o) => {
                        const s = { content_type: "BIO", id: e, dst_lang: t.userLanguage },
                            i = { profileUserId: e, profileTranslation: { entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, translation: "", streamedTranslationFetchStatus: p.iF.LOADING, translationSource: "Grok", localizedSourceLanguage: "" } };
                        n(T.updateOrAddOne(e, i)),
                            a.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(s) }, "https://api.x.com").then(async (t) => {
                                if (!t.ok) return (i.profileTranslation.translationState = u.H.ERROR), (i.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), n(T.updateOrAddOne(e, i)), o(new Error("Failed to translate due to invalid API response."));
                                const a = t.body?.getReader();
                                if (!a) return (i.profileTranslation.translationState = u.H.ERROR), (i.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), n(T.updateOrAddOne(e, i)), o(new Error("Failed to translate because reader is not present."));
                                const s = new TextDecoder();
                                let l = "",
                                    d = "";
                                const c = async () => {
                                    const { done: t, value: m } = await a.read();
                                    if (t) {
                                        const t = 0 === l.length;
                                        return (i.profileTranslation.translationState = t ? u.H.ERROR : u.H.SUCCESS), (i.profileTranslation.streamedTranslationFetchStatus = t ? p.iF.FAILED : p.iF.LOADED), (i.profileTranslation.translation = l), n(T.updateOrAddOne(e, i)), r();
                                    }
                                    const h = s.decode(m);
                                    if (((d += h), d.includes("\n"))) {
                                        const t = d.split("\n");
                                        d = t.pop();
                                        for (const r of t)
                                            try {
                                                const t = JSON.parse(r);
                                                if (t.error) throw new Error(t.error);
                                                t.result && "BIO" === t.result.content_type && (t.result.text && ((l += t.result.text), (i.profileTranslation.translation = l)), t.result.entities && (t.result.entities.urls && (i.profileTranslation.entities.urls = [...i.profileTranslation.entities.urls, ...t.result.entities.urls]), t.result.entities.user_mentions && (i.profileTranslation.entities.user_mentions = [...i.profileTranslation.entities.user_mentions, ...t.result.entities.user_mentions]), t.result.entities.hashtags && (i.profileTranslation.entities.hashtags = [...i.profileTranslation.entities.hashtags, ...t.result.entities.hashtags]), t.result.entities.symbols && (i.profileTranslation.entities.symbols = [...i.profileTranslation.entities.symbols, ...t.result.entities.symbols]))), n(T.updateOrAddOne(e, i));
                                            } catch (t) {
                                                return (i.profileTranslation.translationState = u.H.ERROR), (i.profileTranslation.streamedTranslationFetchStatus = p.iF.FAILED), n(T.updateOrAddOne(e, i)), o(new Error("Failed to parse translation JSON response."));
                                            }
                                    }
                                    c();
                                };
                                c();
                            });
                    });
            const M = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsProfiles: (0, y.Z)(t, (e) => e.profileUserId) } };
                },
                E = D.Z.register(T),
                I = (e, t) => E.select(e, t.userId),
                P = (e, t) => E.selectFetchStatus(e, t.userId),
                k = (0, b.Z)()
                    .propsFromState(() => ({ translation: I, translationFetchStatus: P, userLanguage: g.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("TRANSLATE_USER_BIO"), fetchTranslation: E.fetchOneIfNeeded, fetchStreamedGrokTranslation: E.fetchStreamedGrokTranslation }))
                    .withAnalytics(),
                S = i().ad7a451e;
            class Z extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { grokTranslatedBio: e } = this.props,
                                { featureSwitches: t } = this.context;
                            if ((0, m.F)(t, "")) return e ? "auto" : "button";
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, translation: r, translationFetchStatus: a, userId: o, userLanguage: s } = this.props,
                                i = this._useGrokTranslation(),
                                l = r?.profileTranslation;
                            if (l?.translationState !== u.H.SUCCESS)
                                if (i) {
                                    if (l?.streamedTranslationFetchStatus === p.ZP.LOADING) return;
                                    t(o, { userLanguage: s });
                                } else a !== p.ZP.LOADING && n(o).catch(e());
                        }),
                        (this._renderGrokTranslatedBio = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: r, fetchTranslation: s, grokTranslatedBio: i, style: l, translation: d, translationFetchStatus: c, userLanguage: u, withOriginalText: m, ...p } = this.props;
                            if (!i) return;
                            const h = { ...p, description: i.translation, entities: { description: i.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: !0 };
                            return a.createElement(o.Z, h);
                        }),
                        (this._renderTranslation = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: r, fetchTranslation: s, grokTranslatedBio: i, style: l, translation: d, translationFetchStatus: c, userLanguage: u, withOriginalText: p, ...h } = this.props,
                                { featureSwitches: f } = this.context,
                                b = (0, m.F)(f, "");
                            if (!d) return;
                            const g = { ...h, description: d.profileTranslation.translation, entities: { description: d.profileTranslation.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: b };
                            return a.createElement(o.Z, g);
                        });
                }
                render() {
                    const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: s, fetchTranslation: i, grokTranslatedBio: u, style: m, translation: h, translationFetchStatus: f, userId: b, userLanguage: g, withOriginalText: y, ..._ } = this.props;
                    if (u) {
                        const e = (0, c.t)(g, u.source_language);
                        return a.createElement(d.Z, { disableTranslation: this.props.disableTranslation, fetchTranslation: l.Z, isInitiallyTranslated: !0, key: `${b}-auto-translation`, originLanguage: e, streamedTranslationFetchStatus: p.ZP.LOADED, style: m, translateButtonText: S, translateTargetType: "bio", translatedMessage: this._renderGrokTranslatedBio(), translationFetchStatus: p.ZP.LOADED, translationSource: "Grok", useGrokTranslation: "auto", withOriginalText: y }, a.createElement(o.Z, (0, r.Z)({}, _, { userId: b })));
                    }
                    return a.createElement(d.Z, { disableTranslation: this.props.disableTranslation, fetchTranslation: this._fetchTranslation, key: `${b}-translation`, originLanguage: h && h.profileTranslation.localizedSourceLanguage, streamedTranslationFetchStatus: h && h.profileTranslation.streamedTranslationFetchStatus, style: m, translateButtonText: S, translateTargetType: "bio", translatedMessage: this._renderTranslation(), translationFetchStatus: f, translationSource: h && h.profileTranslation.translationSource, useGrokTranslation: this._useGrokTranslation(), withOriginalText: y }, a.createElement(o.Z, (0, r.Z)({}, _, { userId: b })));
                }
            }
            Z.contextType = h.rC;
            const A = k(Z);
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => s });
            var r = n(323265),
                a = n(655352),
                o = n(952793);
            const s = () => (0, o.hC)("rweb_sourcemap_migration") && (0, a.ZP)() && !r.ZP.isMobileOS();
        },
        507986: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.0"), n.e("icons.20"), n.e("icons.10"), n.e("icons.9"), n.e("modules.common-e907d115"), n.e("modules.common-e019dbda"), n.e("icons.6"), n.e("loader.ProfileClusterFollow")]).then(n.bind(n, 751154)) });
        },
        103335: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(856674);
            const a = (e, t) => [e, t].sort(r.ZP).join("-");
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => a, NB: () => o, P2: () => s, j3: () => r, pR: () => i });
            const r = 5e4,
                a = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                o = (a.RICHTEXT, a.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                s = { about: o.ABOUT, work_experience: o.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => h, Kh: () => m, ZU: () => u, hW: () => b, s1: () => p, uR: () => f });
            var r = n(990242),
                a = n.n(r),
                o = n(111677),
                s = n.n(o),
                i = n(520385),
                l = n(462166);
            const d = s().eb7710f1,
                c = s().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  r = a()(l.wJ, n),
                                  o = a()(t, r.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...r.result, content: o } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                r = t.result?.content,
                                a = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0),
                                o = (r?.active_role ? new Date() : u(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (a.getFullYear() !== o.getFullYear()) return o.getFullYear() - a.getFullYear();
                            if (a.getMonth() !== o.getMonth()) return o.getMonth() - a.getMonth();
                            const s = u(n?.start_month, n?.start_year) ?? new Date(0),
                                i = u(r?.start_month, r?.start_year) ?? new Date(0);
                            return s.getFullYear() !== i.getFullYear() ? i.getFullYear() - s.getFullYear() : i.getMonth() - s.getMonth();
                        });
                },
                h = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return n < 0 && (r--, (n += 12)), r && n ? `${d({ years: r })} ${c({ months: n })}` : r ? d({ years: r }) : n ? c({ months: n }) : "";
                },
                f = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === i.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === i.Mp.RICHTEXT)) : void 0),
                b = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        965728: (e, t, n) => {
            n.d(t, { C_: () => g, I5: () => h, K2: () => b, L$: () => d, Rb: () => f, nk: () => p, sI: () => w, xr: () => y });
            var r = n(202784),
                a = n(483677),
                o = n(782578),
                s = n(393058),
                i = n(521514);
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
                    const { containerHeight: n, containerWidth: r, mediaHeight: a, mediaWidth: s } = e,
                        i = s && a ? s / a : 1,
                        l = i > 1,
                        d = t ? 400 : c,
                        m = l && (!s || s <= d) ? u(r, d) : r,
                        p = l || (a && !(a <= d)) ? n : u(n, d);
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
                    const [e, t] = r.useReducer(_, { isZoomed: !1, showControls: !0 });
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
        728220: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(443781),
                a = n(125363),
                o = n(919022),
                s = n(788210);
            const i = () => {
                const { userClaims: e } = (0, r.QZ)(),
                    t = (0, a.v9)(o.ZP.selectViewerUser),
                    n = (0, s.Z)(),
                    i = t?.is_blue_verified,
                    l = e.isPaidVerifiedOrg() || e.isFreeVerifiedOrg() || e.isLegacyVerifiedOrg() || e.isVerifiedOrgAffiliate();
                return n && !i && !l && !("Government" === t?.verified_type || "Business" === t?.verified_type);
            };
        },
        788210: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(443781);
            const o = () => {
                const { userClaims: e } = r.useContext(a.rC);
                return e.hasSubscription("premium_standard") || e.hasSubscription("premium_plus") || e.isVerifiedOrg() || e.isVerifiedOrgAffiliate();
            };
        },
        656520: (e, t, n) => {
            function r() {
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
            n.d(t, { Lr: () => o, _L: () => r, ti: () => s, yL: () => a });
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => a, n5: () => s });
            var r = n(42508);
            const a = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: r, user: a, userProfileInterstitialType: s, viewerUserId: i }) => {
                    const l = !!i && i === a.id_str,
                        d = a.blocked_by,
                        c = a.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: s }),
                        m = (l || !r) && !n;
                    return { avatar: l || (!u && !t && !n && !r), badges: l || !r, description: l || (!c && !d && !u && !n && !r), followButton: !(l || d || u || t || n || r), followersYouKnow: !l && !d && !c && !u && !t && !n && !r && (a.following || !a.protected), followIndicator: !r, fullName: m, label: m, stats: l || (!d && !u && !n && !r), subscriptionsCount: l || !a.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: a }) => (a === r.Z.SensitiveMedia || a === r.Z.OffensiveProfileContent) && !(t || n.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const r = n.blocked_by,
                        a = n.protected && !n.following;
                    return t ? e || !a : e || (!a && !r);
                };
        },
        893664: (e, t, n) => {
            n.d(t, { g: () => i });
            var r = n(882220),
                a = (n(585488), n(277660)),
                o = n.n(a),
                s = n(835546);
            const i = (e) => {
                const t = o()(r.Z, e.user);
                return !(!t.relationship_perspectives || !t.privacy) && (0, s.n5)({ isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: e.isSoftBlockEnabled, user: { blocked_by: Boolean(t.relationship_perspectives?.blocked_by), following: Boolean(t.relationship_perspectives?.following), protected: Boolean(t.privacy?.protected) } });
            };
        },
        690282: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(801501);
            function o(e, t) {
                const n = r.useRef();
                r.useEffect(() => {
                    n.current = e;
                }, [e]),
                    r.useEffect(() => {
                        const e = n.current;
                        if (e && t) {
                            const n = new a.Z(t).interval(e);
                            n.start();
                            return () => n.stop();
                        }
                    }, [t]);
            }
        },
        806528: (e, t, n) => {
            n.d(t, { Bz: () => d, ZW: () => h, ey: () => u, fw: () => i, iG: () => p, wM: () => l });
            var r = n(499627),
                a = n(341276);
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
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            r.Z.register({
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
        341276: (e, t, n) => {
            n.d(t, { M: () => a, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, n) => {
            n.d(t, { Hq: () => y, c1: () => h, lP: () => b, og: () => f });
            var r = n(745123);
            var a = n(499627),
                o = n(917799),
                s = n(56519),
                i = n(919022);
            const l = "knownFollowers",
                d = `rweb/${l}`,
                c = [],
                u = (0, o.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            a.Z.register({
                [l]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: r, users: a } = n && n.result,
                            { user_id: o } = t.meta || {};
                        return o ? { ...e, [o]: { knownFollowersCount: r, knownFollowerIds: a } } : e;
                    }
                    return e;
                },
            });
            const p = (e, t) => e[l][t],
                h = (e, t) => {
                    if (t) {
                        const a = g(e, t);
                        return (n = i.ZP.selectMany(e, a)), (r = (e) => !!e), n.filter(r);
                    }
                    var n, r;
                    return c;
                },
                f = (e, t) => h(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                b = (e, t) => {
                    let n;
                    if (t) {
                        const r = p(e, t);
                        n = r?.knownFollowersCount;
                    }
                    return n;
                },
                g = (e, t) => {
                    const n = p(e, t);
                    return n?.knownFollowerIds || c;
                },
                y =
                    (e) =>
                    (t, n, { api: a }) =>
                        void 0 !== b(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: a }) =>
                                          (0, o._O)(t, { request: a.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, s.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        351791: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(33055),
                a = n(750085),
                o = n(218951);
            const s = (e, t) => (0, o.Z)({ timelineId: `businessProfileTeam-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchBusinessProfileTeam, getEndpointParams: ({ count: n, cursor: r }) => ({ count: n, cursor: "string" == typeof r ? r : void 0, userId: e, teamName: t }) }, formatResponse: a.Z, context: "FETCH_BUSINESS_PROFILE_TEAM_TIMELINE", perfKey: "businessProfileTeam-GraphQL" });
        },
        392280: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(33055),
                a = n(750085),
                o = n(218951);
            function s(e) {
                return (0, o.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(r.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: n, cursor: r } = t,
                                a = { count: n, userId: e, cursor: void 0 };
                            return "string" == typeof r && (a.cursor = r), a;
                        },
                    },
                    formatResponse: a.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
        611186: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(33055),
                a = n(750085),
                o = n(218951);
            const s = (e) => (0, o.Z)({ timelineId: `userMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchUserMedia, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }, formatResponse: a.Z, context: "FETCH_MEDIA_TIMELINE", perfKey: "userMedia-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e019dbda.9eab73ea.js.map
