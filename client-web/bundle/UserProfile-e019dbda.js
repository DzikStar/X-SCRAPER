"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e019dbda"],
    {
        177997: (e, t, a) => {
            a.d(t, { Z: () => B });
            var n = a(202784),
                r = a(88660),
                o = a(293115),
                i = a(443781),
                s = a(736063),
                l = a(807896),
                d = a(325686),
                c = a(731708),
                u = a(154003),
                p = a(392237),
                b = a(674132),
                m = a.n(b),
                h = a(837020),
                f = a(121791),
                y = a(725405),
                S = a(945181);
            const D = ({ metric: e, metricResult: t }) => {
                const a = t.metric_type,
                    r = t.metric_value;
                if (!r) return null;
                const o = a,
                    i = { [o]: { metrics: { [o]: r }, fromTime: "", toTime: "" } };
                return n.createElement(d.Z, { testID: e }, n.createElement(S.Fd, { compareData: null, data: i, metric: a }));
            };
            var g = a(336636);
            const w = m().d7f8a117,
                A = m().cae20e93,
                _ = m().gc767fda,
                M = m().c7c85e0c,
                T = ({ config: e, data: t, dismiss: a, impress: r }) => {
                    const o = (0, y.Z)();
                    n.useEffect(() => {
                        o.scribe({ action: "show" }), o.scribe({ action: "impression", component: "unified-upsell", data: { referer: "account_analytics" } });
                    });
                    const i = n.useMemo(() => {
                            if (e.metrics.length > 1)
                                return n.createElement(
                                    d.Z,
                                    { style: I.tiles },
                                    e.metrics.map((e) => {
                                        const a = t?.find((t) => t.metric_type === e.metricType);
                                        return a?.metric_value ? n.createElement(D, { key: e.metricType, metric: e.metricType, metricResult: a }) : null;
                                    }),
                                );
                            if (1 === e.metrics.length) {
                                const a = t?.find((t) => t.metric_type === e.metrics[0].metricType);
                                if (!a) return null;
                                const r = a.metric_type,
                                    { value: o } = (0, S.fX)({ compareData: null, data: { [r]: { metrics: { [r]: a.metric_value }, fromTime: "", toTime: "" } }, metric: e.metrics[0].metricType }),
                                    i = S.Kg[a.metric_type];
                                return i.summary ? n.createElement(c.ZP, { weight: "medium" }, i.summary({ value: o, period: A({ days: e.periodInDays }) })) : null;
                            }
                            return null;
                        }, [e.metrics, e.periodInDays, t]),
                        s = n.useCallback(() => {
                            o.scribe({ action: "dismiss" }), a();
                        }, [a, o]);
                    return n.createElement(d.Z, { style: I.container, testID: "analytics-preview" }, n.createElement(d.Z, { style: I.heading }, e.metrics.length > 1 ? n.createElement(c.ZP, { size: "headline2", weight: "bold" }, w({ days: e.periodInDays })) : null, n.createElement(c.ZP, { color: "gray700", size: "subtext3" }, _), n.createElement(u.ZP, { icon: n.createElement(h.default, null), onClick: s, style: I.dismissButton, testID: "dismiss-button", type: "primaryText" })), n.createElement(d.Z, { style: I.content }, i, n.createElement(u.ZP, { icon: n.createElement(f.default, null), link: { pathname: "/i/premium_sign_up", state: { referring_page: "account_analytics" } }, size: "xSmall", style: I.unlockButton, type: "primaryFilled" }, M)));
                },
                P = (e) => {
                    const t = (0, g.Z)({ metrics: e.config.metrics, periodInDays: e.config.periodInDays }),
                        a = t.result.result?.free_metrics_rollup,
                        r = (0, y.Z)();
                    let o = !0;
                    return (
                        e.config.metrics.forEach((e) => {
                            const t = a?.find((t) => t.metric_type === e.metricType);
                            (!t?.metric_value || (e.threshold && t?.metric_value <= e.threshold)) && (o = !1);
                        }),
                        o ? n.createElement(T, (0, l.Z)({}, e, { data: a })) : (r.scribe({ action: "not_matched" }), null)
                    );
                },
                v = n.memo(P),
                I = p.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.large, padding: e.spaces.space16 }, content: { justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }, tiles: { flexDirection: "row", gap: e.spaces.space48 }, heading: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, unlockButton: { alignSelf: "flex-end", marginTop: e.spaces.space12 }, dismissButton: { marginStart: "auto" } })),
                E = { showForMsec: r.fz, reappearAfterMsec: r.Ho, dismissForMsec: r.dV },
                Z = { showForMsec: r.Tg, reappearAfterMsec: r.Vv, dismissForMsec: r.IZ },
                k = {
                    DemoMultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1 },
                            { metricType: "ProfileVisits", threshold: 1 },
                            { metricType: "Likes", threshold: 1 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_DemoMultipleMetrics", ...E },
                    },
                    DemoSingleMetric: { metrics: [{ metricType: "ProfileVisits", threshold: 1 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_DemoSingleMetric", ...E } },
                    MultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1e3 },
                            { metricType: "ProfileVisits", threshold: 100 },
                            { metricType: "Likes", threshold: 50 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_MultipleMetrics", ...Z },
                    },
                    ProfileVisits: { metrics: [{ metricType: "ProfileVisits", threshold: 100 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_ProfileVisits", ...Z } },
                    Impressions: { metrics: [{ metricType: "Impressions", threshold: 1e3 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...Z } },
                    ImpressionsLower: { metrics: [{ metricType: "Impressions", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...Z } },
                    Likes: { metrics: [{ metricType: "Likes", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Likes", ...Z } },
                },
                C = (e) => {
                    const { dismiss: t, impress: a, shouldShow: i } = (0, r.ZP)(e.config.fatigueConfig);
                    return (
                        n.useEffect(() => {
                            a();
                        }),
                        i ? n.createElement(o.nO, { namespace: { component: "analytics_preview" } }, n.createElement(s.H, { errorConfig: { context: "AnalyticPreview" }, suspenseFallback: null }, n.createElement(v, { config: e.config, dismiss: t, impress: a }))) : null
                    );
                },
                B = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        a = t.isAnyPremiumSubscriber(),
                        r = e.isTrue("subscriptions_sign_up_enabled");
                    if (a || !r) return null;
                    const o = e.isTrue("subscriptions_upsells_analytics_profile_enabled"),
                        s = ((e) => {
                            switch (e) {
                                case "DemoMultipleMetrics":
                                    return k.DemoMultipleMetrics;
                                case "DemoSingleMetric":
                                    return k.DemoSingleMetric;
                                case "ProfileVisits":
                                    return k.ProfileVisits;
                                case "Impressions":
                                    return k.Impressions;
                                case "Likes":
                                    return k.Likes;
                                case "MultipleMetrics":
                                    return k.MultipleMetrics;
                                case "ImpressionsLower":
                                    return k.ImpressionsLower;
                                default:
                                    return null;
                            }
                        })(e.getStringValue("subscriptions_upsells_analytics_profile_variant"));
                    return o && s && !a ? n.createElement(C, { config: s }) : null;
                };
        },
        336636: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(857037),
                r = (a(585488), a(712696)),
                o = a.n(r),
                i = a(665979),
                s = a(464703),
                l = a(443781);
            const d = n.Z,
                c = new Date(),
                u = (e) => {
                    const { viewerUserId: t } = (0, l.QZ)();
                    return o()(d, { from_time: (0, i.b7)((0, s.Hk)(c)(e.periodInDays)).toISOString(), requested_metrics: e.metrics.map((e) => e.metricType), rest_id: t, to_time: (0, s.iX)(c).toISOString() });
                };
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                i = a(292627),
                s = a(537392),
                l = a(392237),
                d = a(365023),
                c = a(392027),
                u = a(774654),
                p = a(725516),
                b = a(443781);
            const m = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: a, onPress: h, scribeComponent: f, ...y } = e,
                        { loggedInUserId: S } = r.useContext(b.rC),
                        D = (0, p.z)(),
                        g = r.useCallback(
                            (e) => {
                                D.scribe({ component: f, action: "click" }), h && h(e);
                            },
                            [D, h, f],
                        ),
                        w = u.ZM.useCollapsibleNavBars(),
                        A = [...u.Ah({ elementPosition: "bottom" }), w && m.fabStaysAboveSafeArea];
                    return S
                        ? r.createElement(
                              i.Z.FloatingAction,
                              null,
                              r.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      p = [m.root, s && m.rootMedium, i && m.rootLarge],
                                      b = [m.fab, i && m.fabLarge, u && m.fabMicro, A];
                                  return r.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      r.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(o.Z, (0, n.Z)({ ref: e() }, s({ style: b })), r.createElement(c.Z, (0, n.Z)({}, y, { "aria-label": t, label: i ? a : void 0, onPress: g, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => l });
            a(136728);
            var n = a(202784),
                r = a(387524),
                o = a(635510);
            const i = "/compose/post";
            class s extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                n = { pathname: i, state: (t && t()) || {} };
                            a.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: s } = this.props;
                    return n.createElement(r.Z, { "aria-label": e, href: i, icon: t, label: a, onPress: this._handlePress, scribeComponent: s, testID: o.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(674132),
                o = a.n(r),
                i = a(186444),
                s = a(355883);
            const l = o().j0179e90,
                d = o().ee69d769({ verb: "" }),
                c = n.createElement(i.default, null),
                u = ({ getLocationState: e, history: t }) => n.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        231214: (e, t, a) => {
            a.d(t, { Z: () => n });
            a(202784);
            const n = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2b309ab6"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        a.e("ondemand.IntentPrompt"),
                    ]).then(a.bind(a, 958679)),
            });
        },
        170371: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                r = a(325686),
                o = a(529509),
                i = a(392237),
                s = a(71620),
                l = a(668214),
                d = a(947650),
                c = a(582751);
            const u = (e, t) => c.vx(e, t.userId),
                p = (e, t) => c.mM(e, t.userId),
                b = (e, t) => c.Z8(e, t.userId),
                m = (0, l.Z)()
                    .propsFromState(() => ({ knownFollowersAvatarUrls: u, knownFollowersCount: p, knownFollowersNames: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, s.zr)("KNOWN_FOLLOWERS"), fetchKnownFollowersIfNeeded: d.Hq })),
                h = i.default.create((e) => ({ minHeight: { minHeight: e.spaces.space20 } })),
                f = m((e) => {
                    const { createLocalApiErrorHandler: t, fetchKnownFollowersIfNeeded: a, knownFollowersAvatarUrls: i, knownFollowersCount: s, knownFollowersNames: l, userId: d, userScreenName: c } = e;
                    return (
                        n.useEffect(() => {
                            a(d).catch(t());
                        }, [d, a, t]),
                        n.createElement(r.Z, { style: h.minHeight }, n.createElement(o.Z, { knownFollowersAvatarUrls: i, knownFollowersCount: s, knownFollowersNames: l, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, a) => {
            a.d(t, { Z8: () => i, mM: () => r, vx: () => o });
            var n = a(947650);
            const r = (e, t) => {
                    const a = n.lP(e, t);
                    if (void 0 === a) return a;
                    const r = n.c1(e, t),
                        o = n.og(e, t);
                    return a - (r.length - o.length);
                },
                o = (e, t) => n.og(e, t).map(({ profile_image_url_https: e }) => e),
                i = (e, t) => n.og(e, t).map(({ name: e }) => e);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(500002),
                o = a(668214),
                i = a(997174),
                s = a(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (l = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && a !== o) || n !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(l(d));
        },
        258199: (e, t, a) => {
            a.d(t, { Z: () => n });
            a(202784);
            const n = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.8"),
                        a.e("icons.13"),
                        a.e("icons.20"),
                        a.e("icons.14"),
                        a.e("icons.1"),
                        a.e("icons.3"),
                        a.e("icons.24"),
                        a.e("icons.11"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.28"),
                        a.e("icons.17"),
                        a.e("icons.4"),
                        a.e("icons.18"),
                        a.e("modules.audio-6107ac1a"),
                        a.e("modules.audio-b953418a"),
                        a.e("modules.audio-7c51e6a7"),
                        a.e("modules.audio-04db59e9"),
                        a.e("modules.audio-76583d6c"),
                        a.e("modules.audio-b7a8a5fb"),
                        a.e("modules.audio-51f6e793"),
                        a.e("modules.audio-e019dbda"),
                        a.e("modules.audio-262c94d4"),
                        a.e("modules.audio-c6fe4ea4"),
                        a.e("icons.12"),
                        a.e("icons.29"),
                        a.e("icons.22"),
                        a.e("icons.0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~bundle.Payments~bundle.PaymentReceipt~ondemand.News~ondemand.Insig"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"),
                        a.e("shared~bundle.Payments~bundle.PaymentReceipt-34762570"),
                        a.e("shared~bundle.Payments~bundle.PaymentReceipt-8ed0fac5"),
                        a.e("shared~bundle.Payments~bundle.TV"),
                        a.e("bundle.Payments-6107ac1a"),
                        a.e("bundle.Payments-960914ab"),
                        a.e("bundle.Payments-7f8e98f6"),
                        a.e("bundle.Payments-9f4db315"),
                        a.e("bundle.Payments-63cb1cc4"),
                        a.e("bundle.Payments-25e67f1f"),
                        a.e("bundle.Payments-41dc26ea"),
                        a.e("bundle.Payments-c7951328"),
                        a.e("bundle.Payments-71f7a682"),
                        a.e("bundle.Payments-2562326a"),
                    ]).then(a.bind(a, 547195)),
            });
        },
        144256: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(807896),
                r = a(202784),
                o = a(149202),
                i = a(725516);
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                a = e.contextualScribeNamespace;
                            t(), a && a.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: a, ...i } = this.props;
                    return r.createElement(o.Z, (0, n.Z)({}, i, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, i.Z)(s);
        },
        438965: (e, t, a) => {
            a.d(t, { FE: () => o, Hx: () => l, Oj: () => r, P3: () => d, QO: () => s, j: () => i });
            var n = a(942893);
            const r = { component: "tweet" },
                o = { component: "thread" },
                i = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: a, conversationTreeMetadata: n } = t;
                        return !(e || (a && !a.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => n.Z.getTweetURTEntryItem(e),
                d = (e, t, a) => {
                    const n = ["descendant", "ancestor"].includes(a?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === a?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        948503: (e, t, a) => {
            a.d(t, { r: () => m });
            a(136728);
            var n = a(202784),
                r = a(107267),
                o = a(154003),
                i = a(674132),
                s = a.n(i),
                l = a(956272),
                d = a(725516),
                c = a(233391),
                u = a(288955);
            const p = s().a9ae1e78,
                b = n.createElement(l.default, null),
                m = ({ fullName: e, screenName: t, style: a, userId: i }) => {
                    const s = (0, r.useHistory)(),
                        l = (0, d.z)(),
                        m = n.useCallback(
                            (e) => {
                                l.scribe({ action: e, element: "search_profile_button", page: "user_profile" });
                            },
                            [l],
                        ),
                        h = n.useCallback(() => {
                            m("search"), s.push({ pathname: "/explore", state: { searchFocused: !0, searchPrefill: `from:${t || ""} `, source: "user_profile_header_search_button" } });
                        }, [s, t, m]),
                        f = n.useCallback(() => {
                            m("search_attempt");
                        }, [m]);
                    return n.createElement(u.Z, { displayMode: c.BH.search, userFullName: e, userId: i }, (e) => n.createElement(o.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: b, onPress: e(h, f), style: a, type: "primaryOutlined" }));
                };
        },
        26088: (e, t, a) => {
            a.d(t, { Z: () => T });
            a(136728);
            var n = a(202784),
                r = a(107267),
                o = a(811176),
                i = a(154003),
                s = a(392237),
                l = a(674132),
                d = a.n(l),
                c = a(76388),
                u = a(491831),
                p = a(224823),
                b = a(323683),
                m = a(479506),
                h = a(942893),
                f = a(71620),
                y = a(668214),
                S = a(919022);
            const D = (e, t) => S.ZP.select(e, t.userId),
                g = (0, y.Z)()
                    .propsFromState(() => ({ user: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SUPER_FOLLOW_BUTTON_CONTAINER"), unfollow: S.ZP.unfollow }))
                    .withAnalytics(),
                w = d().b63c46ed,
                A = d().ja66a2b5,
                _ = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: a, isFollowing: s, isSuperFollowing: l, promotedContent: d, style: f, unfollow: y, user: S, userId: D } = e,
                        g = (0, r.useHistory)(),
                        _ = (0, r.useLocation)(),
                        T = S?.screen_name,
                        P = s ? n.createElement(c.default, null) : n.createElement(u.default, { style: M.superFollowsIcon }),
                        v = n.useCallback(
                            (e) => {
                                const { action: a, element: n } = e,
                                    { items: r } = t.contextualScribeData,
                                    o = r?.find((e) => e.item_type === m.Z.ItemType.USER && e.id),
                                    i = [];
                                S ? i.push({ ...o, ...h.Z.getUserItem(S, d) }) : o && i.push(o);
                                const s = _.query && _.query.screen_name ? { items: i, context: "profile_intent" } : { items: i };
                                return t.scribe({ element: n, action: a, data: s });
                            },
                            [t, _, d, S],
                        ),
                        I = n.useCallback(
                            (e) => {
                                D && (v({ element: "super_follow_subscribe_button", action: "unfollow" }), y(D, { promotedContent: d }).catch(a(b.X))), e();
                            },
                            [a, d, y, D, v],
                        ),
                        E = n.useCallback(
                            (e) => {
                                const t = [{ Icon: p.default, text: A({ screenName: T }), onClick: I }];
                                return n.createElement(o.Z, { isFixed: !0, items: t, onCloseRequested: e });
                            },
                            [I, T],
                        ),
                        Z = s ? A({ screenName: T }) : w({ screenName: T });
                    return n.createElement(i.ZP, {
                        "aria-label": Z,
                        borderColor: s || l ? void 0 : "plum500",
                        hoverLabel: { label: Z },
                        icon: P,
                        onPress: () => {
                            !T || s || l || (v({ element: "super_follow_subscribe_button", action: "click" }), g.push(`/${T}/creator-subscriptions/subscribe`, { referring_page: "profile_intent" }));
                        },
                        renderMenu: s ? E : void 0,
                        style: f,
                        type: l && s ? "primaryOutlined" : void 0,
                    });
                },
                M = s.default.create((e) => ({ superFollowsIcon: { color: e.colors.plum500 } })),
                T = g(n.memo(_));
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(202784),
                r = a(576648),
                o = a(325686),
                i = a(154003),
                s = a(138099),
                l = a(731708),
                d = a(392237),
                c = a(674132),
                u = a.n(c),
                p = a(652255),
                b = a(376180),
                m = a(502940),
                h = a(70962),
                f = a(933340),
                y = a(321264),
                S = a(208340),
                D = a(707305),
                g = a(748138),
                w = a(837020),
                A = a(125363),
                _ = a(601576),
                M = a(919022);
            const T = u().ia5e7488,
                P = { label: T },
                v = u().j33d8902,
                I = { label: v },
                E = u().a8ab3d08,
                Z = u().d740d2d9,
                k = { bandcamp_handle: { icon: n.createElement(p.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: n.createElement(b.default, null), label: u().d876e67e }, cash_app_handle: { icon: n.createElement(m.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: n.createElement(h.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: n.createElement(f.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: n.createElement(y.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: n.createElement(S.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: n.createElement(D.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function C({ style: e, userId: t }) {
                const a = (0, A.I0)(),
                    [d, c] = n.useState(!1),
                    u = (0, A.v9)((e) => M.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: p } = u;
                if (!p) return null;
                const { is_enabled: b, ...m } = p;
                if (!1 === b || !Object.keys(m).length) return null;
                function h() {
                    c(!1);
                }
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(i.ZP, {
                        "aria-label": v,
                        hoverLabel: I,
                        icon: n.createElement(g.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? n.createElement(
                              s.Z,
                              { onMaskClick: h, style: B.sheet, type: "bottom", withMask: !0 },
                              n.createElement(i.ZP, { "aria-label": T, hoverLabel: P, icon: n.createElement(w.default, null), onPress: h, style: B.close, type: "primaryText" }),
                              n.createElement(o.Z, { style: B.header }, n.createElement(l.ZP, { weight: "bold" }, E), n.createElement(l.ZP, null, `@${u.screen_name}`)),
                              Object.entries(m)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = k[e];
                                      if (o) {
                                          const i = o.url
                                                  ? void 0
                                                  : function () {
                                                        r.Z.setString(String(t)), a((0, _.fz)({ text: Z({ service: o.label }) }));
                                                    },
                                              s = o.url ? `${o.url}${String(t)}` : void 0;
                                          return n.createElement(l.ZP, { color: "text", key: e, link: s, onPress: i, style: B.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const B = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        179562: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(807896),
                r = a(202784),
                o = a(238406),
                i = a(674132),
                s = a.n(i),
                l = a(145766),
                d = a(556303),
                c = a(443781),
                u = a(71620),
                p = a(668214),
                b = a(390387),
                m = (a(571372), a(697926)),
                h = a(120071),
                f = a(502909),
                y = a(600823);
            const S = (0, f.ZP)({ namespace: "translationsProfiles", fetchOneContext: "FETCH_PROFILE_TRANSLATION", fetchOneEndpoint: (e) => (t, a) => e.withEndpoint(h.Z).fetchProfileTranslation(t, a).then(D), fetchOneParams: (e) => ({ profileUserId: e }) });
            S.fetchStreamedGrokTranslation =
                (e, t, a) =>
                (a, n, { api: r }) =>
                    new Promise((n, o) => {
                        const i = { content_type: "BIO", id: e, dst_lang: t.userLanguage },
                            s = { profileUserId: e, profileTranslation: { entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, translationState: "Loading", translation: "", streamedTranslationFetchStatus: "loading", translationSource: "Grok", localizedSourceLanguage: "" } };
                        a(S.updateOrAddOne(e, s)),
                            r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(i) }, "https://api.x.com").then(async (t) => {
                                if (!t.ok) return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), a(S.updateOrAddOne(e, s)), o(new Error("Failed to translate due to invalid API response."));
                                const r = t.body?.getReader();
                                if (!r) return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), a(S.updateOrAddOne(e, s)), o(new Error("Failed to translate because reader is not present."));
                                const i = new TextDecoder();
                                let l = "",
                                    d = "";
                                const c = async () => {
                                    const { done: t, value: u } = await r.read();
                                    if (t) return (s.profileTranslation.translationState = "Success"), (s.profileTranslation.streamedTranslationFetchStatus = "loaded"), (s.profileTranslation.translation = l), a(S.updateOrAddOne(e, s)), n();
                                    const p = i.decode(u);
                                    if (((d += p), d.includes("\n"))) {
                                        const t = d.split("\n");
                                        d = t.pop();
                                        for (const n of t)
                                            try {
                                                const t = JSON.parse(n);
                                                if (t.error) throw new Error(t.error);
                                                t.result && "BIO" === t.result.content_type && (t.result.text && ((l += t.result.text), (s.profileTranslation.translationState = "Streaming"), (s.profileTranslation.streamedTranslationFetchStatus = "loaded"), (s.profileTranslation.translation = l)), t.result.entities && (t.result.entities.urls && (s.profileTranslation.entities.urls = [...s.profileTranslation.entities.urls, ...t.result.entities.urls]), t.result.entities.user_mentions && (s.profileTranslation.entities.user_mentions = [...s.profileTranslation.entities.user_mentions, ...t.result.entities.user_mentions]), t.result.entities.hashtags && (s.profileTranslation.entities.hashtags = [...s.profileTranslation.entities.hashtags, ...t.result.entities.hashtags]), t.result.entities.symbols && (s.profileTranslation.entities.symbols = [...s.profileTranslation.entities.symbols, ...t.result.entities.symbols]))), a(S.updateOrAddOne(e, s));
                                            } catch (t) {
                                                return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), a(S.updateOrAddOne(e, s)), o(new Error("Failed to parse translation JSON response."));
                                            }
                                    }
                                    c();
                                };
                                c();
                            });
                    });
            const D = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsProfiles: (0, m.Z)(t, (e) => e.profileUserId) } };
                },
                g = y.Z.register(S),
                w = (e, t) => g.select(e, t.userId),
                A = (e, t) => g.selectFetchStatus(e, t.userId),
                _ = (0, p.Z)()
                    .propsFromState(() => ({ translation: w, translationFetchStatus: A, userLanguage: b.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("TRANSLATE_USER_BIO"), fetchTranslation: g.fetchOneIfNeeded, fetchStreamedGrokTranslation: g.fetchStreamedGrokTranslation }))
                    .withAnalytics(),
                M = s().ad7a451e;
            class T extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: a, userId: n, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            (0, d.F)(o, "") ? t(n, { userLanguage: r }) : a(n).catch(e());
                        }),
                        (this._renderTranslation = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: a, fetchStreamedGrokTranslation: n, fetchTranslation: i, style: s, translation: l, translationFetchStatus: c, userLanguage: u, withOriginalText: p, ...b } = this.props,
                                { featureSwitches: m } = this.context,
                                h = (0, d.F)(m, "");
                            if (!l) return;
                            const f = { ...b, description: l.profileTranslation.translation, entities: { description: l.profileTranslation.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: h };
                            return r.createElement(o.Z, f);
                        });
                }
                render() {
                    const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: a, fetchStreamedGrokTranslation: i, fetchTranslation: s, style: d, translation: c, translationFetchStatus: u, userId: p, userLanguage: b, withOriginalText: m, ...h } = this.props;
                    return r.createElement(l.ZP, { disableTranslation: this.props.disableTranslation, fetchTranslation: this._fetchTranslation, key: p, originLanguage: c && c.profileTranslation.localizedSourceLanguage, scribeElement: "translate_bio", streamedTranslationFetchStatus: c && c.profileTranslation.streamedTranslationFetchStatus, style: d, translateButtonText: M, translatedMessage: this._renderTranslation(), translationFetchStatus: u, translationSource: c && c.profileTranslation.translationSource, translationState: c && c.profileTranslation.translationState, withOriginalText: m }, r.createElement(o.Z, (0, n.Z)({}, h, { userId: p })));
                }
            }
            T.contextType = c.rC;
            const P = _(T);
        },
        703738: (e, t, a) => {
            a.d(t, { z: () => i });
            var n = a(323265),
                r = a(655352),
                o = a(952793);
            const i = () => (0, o.hC)("rweb_sourcemap_migration") && (0, r.ZP)() && !n.ZP.isMobileOS();
        },
        507986: (e, t, a) => {
            a.d(t, { Z: () => n });
            a(202784);
            const n = (0, a(523561).Z)({ loader: () => Promise.all([a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("loader.ProfileClusterFollow")]).then(a.bind(a, 751154)) });
        },
        103335: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(856674);
            const r = (e, t) => [e, t].sort(n.ZP).join("-");
        },
        520385: (e, t, a) => {
            a.d(t, { Mp: () => r, NB: () => o, P2: () => i, j3: () => n, pR: () => s });
            const n = 5e4,
                r = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                o = (r.RICHTEXT, r.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: o.ABOUT, work_experience: o.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, a) => {
            a.d(t, { HM: () => m, Kh: () => p, ZU: () => u, hW: () => f, s1: () => b, uR: () => h });
            var n = a(990242),
                r = a.n(n),
                o = a(674132),
                i = a.n(o),
                s = a(520385),
                l = a(462166);
            const d = i().eb7710f1,
                c = i().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                p = (e, t) => {
                    if (!e) return [];
                    const a = e?.filter((e) => e);
                    return a
                        ? a.map((e) => {
                              const a = { ...e },
                                  n = r()(l.wJ, a),
                                  o = r()(t, n.result?.content);
                              return { __id: a.__id, id: a.id, rest_id: a.rest_id, result: { ...n.result, content: o } };
                          })
                        : [];
                },
                b = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const a = e.result?.content,
                                n = t.result?.content,
                                r = (a?.active_role ? new Date() : u(a?.end_month, a?.end_year)) ?? new Date(0),
                                o = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0);
                            if (r.getFullYear() !== o.getFullYear()) return o.getFullYear() - r.getFullYear();
                            if (r.getMonth() !== o.getMonth()) return o.getMonth() - r.getMonth();
                            const i = u(a?.start_month, a?.start_year) ?? new Date(0),
                                s = u(n?.start_month, n?.start_year) ?? new Date(0);
                            return i.getFullYear() !== s.getFullYear() ? s.getFullYear() - i.getFullYear() : s.getMonth() - i.getMonth();
                        });
                },
                m = (e, t) => {
                    let a = t.getMonth() - e.getMonth() + 1,
                        n = t.getFullYear() - e.getFullYear();
                    return a < 0 && (n--, (a += 12)), n && a ? `${d({ years: n })} ${c({ months: a })}` : n ? d({ years: n }) : a ? c({ months: a }) : "";
                },
                h = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                f = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        965728: (e, t, a) => {
            a.d(t, { C_: () => y, I5: () => m, K2: () => f, L$: () => d, Rb: () => h, nk: () => b, sI: () => g, xr: () => S });
            var n = a(202784),
                r = a(483677),
                o = a(782578),
                i = a(393058),
                s = a(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && r.Z.getForGallery(e);
                    return t ? { rgb: S(t), rgba: l(t, 0.9) } : p;
                },
                c = s.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                p = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                b = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: a, containerWidth: n, mediaHeight: r, mediaWidth: i } = e,
                        s = i && r ? i / r : 1,
                        l = s > 1,
                        d = t ? 400 : c,
                        p = l && i <= d ? u(n, d) : n,
                        b = !l && r <= d ? u(a, d) : a;
                    return o.Z.getContainDimensions({ width: p, height: b }, s);
                },
                h = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(t);
                },
                f = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(t);
                },
                y = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                S = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                D = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload?.isZoomed, showControls: !t.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                g = () => {
                    const [e, t] = n.useReducer(D, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            i.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        728220: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(443781),
                r = a(125363),
                o = a(919022),
                i = a(788210);
            const s = () => {
                const { userClaims: e } = (0, n.QZ)(),
                    t = (0, r.v9)(o.ZP.selectViewerUser),
                    a = (0, i.Z)(),
                    s = t?.is_blue_verified,
                    l = e.isPaidVerifiedOrg() || e.isFreeVerifiedOrg() || e.isLegacyVerifiedOrg() || e.isVerifiedOrgAffiliate();
                return a && !s && !l && !("Government" === t?.verified_type || "Business" === t?.verified_type);
            };
        },
        788210: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                r = a(443781);
            const o = () => {
                const { userClaims: e } = n.useContext(r.rC);
                return e.hasSubscription("premium_standard") || e.hasSubscription("premium_plus") || e.isVerifiedOrg() || e.isVerifiedOrgAffiliate();
            };
        },
        656520: (e, t, a) => {
            function n() {
                return { section: "category_label", action: "impression" };
            }
            function r() {
                return { section: "category_label", action: "click" };
            }
            function o() {
                return { component: "professional_conversion", action: "click" };
            }
            function i() {
                return { component: "professional_settings", action: "click" };
            }
            a.d(t, { Lr: () => o, _L: () => n, ti: () => i, yL: () => r });
        },
        42508: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, a) => {
            a.d(t, { ZP: () => r, n5: () => i });
            var n = a(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: a, isWithheld: n, user: r, userProfileInterstitialType: i, viewerUserId: s }) => {
                    const l = !!s && s === r.id_str,
                        d = r.blocked_by,
                        c = r.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: l, user: r, userProfileInterstitialType: i }),
                        p = (l || !n) && !a;
                    return { avatar: l || (!u && !t && !a && !n), badges: l || !n, description: l || (!c && !d && !u && !a && !n), followButton: !(l || d || u || t || a || n), followersYouKnow: !l && !d && !c && !u && !t && !a && !n && (r.following || !r.protected), followIndicator: !n, fullName: p, label: p, stats: l || (!d && !u && !a && !n), subscriptionsCount: l || !r.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: a, userProfileInterstitialType: r }) => (r === n.Z.SensitiveMedia || r === n.Z.OffensiveProfileContent) && !(t || a.following || e),
                i = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: a }) => {
                    const n = a.blocked_by,
                        r = a.protected && !a.following;
                    return t ? e || !r : e || (!r && !n);
                };
        },
        893664: (e, t, a) => {
            a.d(t, { g: () => s });
            var n = a(882220),
                r = (a(585488), a(277660)),
                o = a.n(r),
                i = a(835546);
            const s = (e) => {
                const t = o()(n.Z, e.user);
                return !!t.legacy && (0, i.n5)({ isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: e.isSoftBlockEnabled, user: t.legacy });
            };
        },
        961104: (e, t, a) => {
            function n(e, t) {
                return e.filter(t);
            }
            a.d(t, { b: () => n });
        },
        806528: (e, t, a) => {
            a.d(t, { Bz: () => d, ZW: () => m, ey: () => u, fw: () => s, iG: () => b, wM: () => l });
            var n = a(499627),
                r = a(341276);
            const o = "geoLocation",
                i = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const s = (e) => e[o],
                l = (e) => e[o].permissionStatus,
                d = (e) => e[o].position,
                c = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: c }),
                p = "rweb/geoLocation/SET_POSITION",
                b = () => (e, t) =>
                    h()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(u(r.S.denied)), Promise.reject(t))),
                m = () => (e, t) => (d(t()) ? Promise.resolve() : e(b())),
                h = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const a = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(a);
                        }, t),
                    );
            n.Z.register({
                [o]: function (e = i, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, a) => {
            a.d(t, { M: () => r, S: () => n });
            const n = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        947650: (e, t, a) => {
            a.d(t, { Hq: () => D, c1: () => h, lP: () => y, og: () => f });
            var n = a(745123),
                r = a(961104),
                o = a(499627),
                i = a(917799),
                s = a(56519),
                l = a(919022);
            const d = "knownFollowers",
                c = `rweb/${d}`,
                u = [],
                p = (0, i.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                b = {};
            o.Z.register({
                [d]: function (e = b, t) {
                    if (!t) return e;
                    if (t.type === p.SUCCESS) {
                        const a = t.payload || {},
                            { total_count: n, users: r } = a && a.result,
                            { user_id: o } = t.meta || {};
                        return o ? { ...e, [o]: { knownFollowersCount: n, knownFollowerIds: r } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[d][t],
                h = (e, t) => {
                    if (t) {
                        const a = S(e, t);
                        return (0, r.b)(l.ZP.selectMany(e, a), (e) => !!e);
                    }
                    return u;
                },
                f = (e, t) => h(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                y = (e, t) => {
                    let a;
                    if (t) {
                        const n = m(e, t);
                        a = n?.knownFollowersCount;
                    }
                    return a;
                },
                S = (e, t) => {
                    const a = m(e, t);
                    return a?.knownFollowerIds || u;
                },
                D =
                    (e) =>
                    (t, a, { api: r }) =>
                        void 0 !== y(a(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, a, { api: r }) =>
                                          (0, i._O)(t, { request: r.withEndpoint(n.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: p, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, s.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        351791: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(33055),
                r = a(750085),
                o = a(218951);
            const i = (e, t) => (0, o.Z)({ timelineId: `businessProfileTeam-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchBusinessProfileTeam, getEndpointParams: ({ count: a, cursor: n }) => ({ count: a, cursor: "string" == typeof n ? n : void 0, userId: e, teamName: t }) }, formatResponse: r.Z, context: "FETCH_BUSINESS_PROFILE_TEAM_TIMELINE", perfKey: "businessProfileTeam-GraphQL" });
        },
        392280: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(33055),
                r = a(750085),
                o = a(218951);
            function i(e) {
                return (0, o.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(n.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: a, cursor: n } = t,
                                r = { count: a, userId: e, cursor: void 0 };
                            return "string" == typeof n && (r.cursor = n), r;
                        },
                    },
                    formatResponse: r.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
        611186: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(33055),
                r = a(750085),
                o = a(218951);
            const i = (e) => (0, o.Z)({ timelineId: `userMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchUserMedia, getEndpointParams: ({ count: t, cursor: a }) => ({ count: t, cursor: "string" == typeof a ? a : void 0, userId: e }) }, formatResponse: r.Z, context: "FETCH_MEDIA_TIMELINE", perfKey: "userMedia-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e019dbda.ee35a54a.js.map
