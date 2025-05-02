"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e019dbda"],
    {
        177997: (e, t, n) => {
            n.d(t, { Z: () => B });
            var a = n(202784),
                r = n(88660),
                o = n(293115),
                i = n(443781),
                s = n(736063),
                l = n(807896),
                d = n(325686),
                c = n(731708),
                u = n(154003),
                p = n(392237),
                b = n(674132),
                m = n.n(b),
                h = n(837020),
                f = n(121791),
                S = n(725405),
                y = n(945181);
            const D = ({ metric: e, metricResult: t }) => {
                const n = t.metric_type,
                    r = t.metric_value;
                if (!r) return null;
                const o = n,
                    i = { [o]: { metrics: { [o]: r }, fromTime: "", toTime: "" } };
                return a.createElement(d.Z, { testID: e }, a.createElement(y.Fd, { compareData: null, data: i, metric: n }));
            };
            var g = n(336636);
            const w = m().d7f8a117,
                A = m().cae20e93,
                _ = m().gc767fda,
                M = m().c7c85e0c,
                P = ({ config: e, data: t, dismiss: n, impress: r }) => {
                    const o = (0, S.Z)();
                    a.useEffect(() => {
                        o.scribe({ action: "show" }), o.scribe({ action: "impression", component: "unified-upsell", data: { referer: "account_analytics" } });
                    });
                    const i = a.useMemo(() => {
                            if (e.metrics.length > 1)
                                return a.createElement(
                                    d.Z,
                                    { style: I.tiles },
                                    e.metrics.map((e) => {
                                        const n = t?.find((t) => t.metric_type === e.metricType);
                                        return n?.metric_value ? a.createElement(D, { key: e.metricType, metric: e.metricType, metricResult: n }) : null;
                                    }),
                                );
                            if (1 === e.metrics.length) {
                                const n = t?.find((t) => t.metric_type === e.metrics[0].metricType);
                                if (!n) return null;
                                const r = n.metric_type,
                                    { value: o } = (0, y.fX)({ compareData: null, data: { [r]: { metrics: { [r]: n.metric_value }, fromTime: "", toTime: "" } }, metric: e.metrics[0].metricType }),
                                    i = y.Kg[n.metric_type];
                                return i.summary ? a.createElement(c.ZP, { weight: "medium" }, i.summary({ value: o, period: A({ days: e.periodInDays }) })) : null;
                            }
                            return null;
                        }, [e.metrics, e.periodInDays, t]),
                        s = a.useCallback(() => {
                            o.scribe({ action: "dismiss" }), n();
                        }, [n, o]);
                    return a.createElement(d.Z, { style: I.container, testID: "analytics-preview" }, a.createElement(d.Z, { style: I.heading }, e.metrics.length > 1 ? a.createElement(c.ZP, { size: "headline2", weight: "bold" }, w({ days: e.periodInDays })) : null, a.createElement(c.ZP, { color: "gray700", size: "subtext3" }, _), a.createElement(u.ZP, { icon: a.createElement(h.default, null), onClick: s, style: I.dismissButton, testID: "dismiss-button", type: "primaryText" })), a.createElement(d.Z, { style: I.content }, i, a.createElement(u.ZP, { icon: a.createElement(f.default, null), link: { pathname: "/i/premium_sign_up", state: { referring_page: "account_analytics" } }, size: "xSmall", style: I.unlockButton, type: "primaryFilled" }, M)));
                },
                T = (e) => {
                    const t = (0, g.Z)({ metrics: e.config.metrics, periodInDays: e.config.periodInDays }),
                        n = t.result.result?.free_metrics_rollup,
                        r = (0, S.Z)();
                    let o = !0;
                    return (
                        e.config.metrics.forEach((e) => {
                            const t = n?.find((t) => t.metric_type === e.metricType);
                            (!t?.metric_value || (e.threshold && t?.metric_value <= e.threshold)) && (o = !1);
                        }),
                        o ? a.createElement(P, (0, l.Z)({}, e, { data: n })) : (r.scribe({ action: "not_matched" }), null)
                    );
                },
                v = a.memo(T),
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
                    const { dismiss: t, impress: n, shouldShow: i } = (0, r.ZP)(e.config.fatigueConfig);
                    return (
                        a.useEffect(() => {
                            n();
                        }),
                        i ? a.createElement(o.nO, { namespace: { component: "analytics_preview" } }, a.createElement(s.H, { errorConfig: { context: "AnalyticPreview" }, suspenseFallback: null }, a.createElement(v, { config: e.config, dismiss: t, impress: n }))) : null
                    );
                },
                B = () => {
                    const { featureSwitches: e, userClaims: t } = (0, i.QZ)(),
                        n = t.isAnyPremiumSubscriber(),
                        r = e.isTrue("subscriptions_sign_up_enabled");
                    if (n || !r) return null;
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
                    return o && s && !n ? a.createElement(C, { config: s }) : null;
                };
        },
        336636: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(857037),
                r = (n(585488), n(712696)),
                o = n.n(r),
                i = n(665979),
                s = n(464703),
                l = n(443781);
            const d = a.Z,
                c = new Date(),
                u = (e) => {
                    const { viewerUserId: t } = (0, l.QZ)();
                    return o()(d, { from_time: (0, i.b7)((0, s.Hk)(c)(e.periodInDays)).toISOString(), requested_metrics: e.metrics.map((e) => e.metricType), rest_id: t, to_time: (0, s.iX)(c).toISOString() });
                };
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                i = n(292627),
                s = n(537392),
                l = n(392237),
                d = n(365023),
                c = n(392027),
                u = n(774654),
                p = n(725516),
                b = n(443781);
            const m = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: n, onPress: h, scribeComponent: f, ...S } = e,
                        { loggedInUserId: y } = r.useContext(b.rC),
                        D = (0, p.z)(),
                        g = r.useCallback(
                            (e) => {
                                D.scribe({ component: f, action: "click" }), h && h(e);
                            },
                            [D, h, f],
                        ),
                        w = u.ZM.useCollapsibleNavBars(),
                        A = [...u.Ah({ elementPosition: "bottom" }), w && m.fabStaysAboveSafeArea];
                    return y
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
                                      r.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(o.Z, (0, a.Z)({ ref: e() }, s({ style: b })), r.createElement(c.Z, (0, a.Z)({}, S, { "aria-label": t, label: i ? n : void 0, onPress: g, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var a = n(202784),
                r = n(387524),
                o = n(635510);
            const i = "/compose/post";
            class s extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                a = { pathname: i, state: (t && t()) || {} };
                            n.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: s } = this.props;
                    return a.createElement(r.Z, { "aria-label": e, href: i, icon: t, label: n, onPress: this._handlePress, scribeComponent: s, testID: o.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(674132),
                o = n.n(r),
                i = n(186444),
                s = n(355883);
            const l = o().j0179e90,
                d = o().ee69d769({ verb: "" }),
                c = a.createElement(i.default, null),
                u = ({ getLocationState: e, history: t }) => a.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        231214: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
                loader: () => Promise.all([n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), n.e("ondemand.IntentPrompt")]).then(n.bind(n, 958679)),
            });
        },
        170371: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(325686),
                o = n(529509),
                i = n(392237),
                s = n(71620),
                l = n(668214),
                d = n(947650),
                c = n(582751);
            const u = (e, t) => c.vx(e, t.userId),
                p = (e, t) => c.mM(e, t.userId),
                b = (e, t) => c.Z8(e, t.userId),
                m = (0, l.Z)()
                    .propsFromState(() => ({ knownFollowersAvatarUrls: u, knownFollowersCount: p, knownFollowersNames: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, s.zr)("KNOWN_FOLLOWERS"), fetchKnownFollowersIfNeeded: d.Hq })),
                h = i.default.create((e) => ({ minHeight: { minHeight: e.spaces.space20 } })),
                f = m((e) => {
                    const { createLocalApiErrorHandler: t, fetchKnownFollowersIfNeeded: n, knownFollowersAvatarUrls: i, knownFollowersCount: s, knownFollowersNames: l, userId: d, userScreenName: c } = e;
                    return (
                        a.useEffect(() => {
                            n(d).catch(t());
                        }, [d, n, t]),
                        a.createElement(r.Z, { style: h.minHeight }, a.createElement(o.Z, { knownFollowersAvatarUrls: i, knownFollowersCount: s, knownFollowersNames: l, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, n) => {
            n.d(t, { Z8: () => i, mM: () => r, vx: () => o });
            var a = n(947650);
            const r = (e, t) => {
                    const n = a.lP(e, t);
                    if (void 0 === n) return n;
                    const r = a.c1(e, t),
                        o = a.og(e, t);
                    return n - (r.length - o.length);
                },
                o = (e, t) => a.og(e, t).map(({ profile_image_url_https: e }) => e),
                i = (e, t) => a.og(e, t).map(({ name: e }) => e);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                i = n(997174),
                s = n(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && n !== o) || a !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(l(d));
        },
        258199: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.23"),
                        n.e("icons.16"),
                        n.e("icons.2"),
                        n.e("icons.10"),
                        n.e("icons.19"),
                        n.e("icons.24"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.13"),
                        n.e("icons.27"),
                        n.e("icons.22"),
                        n.e("icons.17"),
                        n.e("icons.7"),
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
                        n.e("icons.8"),
                        n.e("icons.14"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"),
                        n.e("shared~bundle.Payments~bundle.TV"),
                        n.e("bundle.Payments-e907d115"),
                        n.e("bundle.Payments-27545368"),
                        n.e("bundle.Payments-960914ab"),
                        n.e("bundle.Payments-17a1c92a"),
                        n.e("bundle.Payments-39d0705d"),
                        n.e("bundle.Payments-7e6638bc"),
                        n.e("bundle.Payments-9f4db315"),
                        n.e("bundle.Payments-b8e4b837"),
                        n.e("bundle.Payments-0cabf78d"),
                        n.e("bundle.Payments-25e67f1f"),
                        n.e("bundle.Payments-41dc26ea"),
                        n.e("bundle.Payments-c7951328"),
                        n.e("bundle.Payments-d97a9c6b"),
                        n.e("bundle.Payments-d60a37be"),
                        n.e("bundle.Payments-2a1eb2b7"),
                    ]).then(n.bind(n, 547195)),
            });
        },
        144256: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(807896),
                r = n(202784),
                o = n(149202),
                i = n(725516);
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                n = e.contextualScribeNamespace;
                            t(), n && n.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: n, ...i } = this.props;
                    return r.createElement(o.Z, (0, a.Z)({}, i, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, i.Z)(s);
        },
        438965: (e, t, n) => {
            n.d(t, { FE: () => o, Hx: () => l, Oj: () => r, P3: () => d, QO: () => s, j: () => i });
            var a = n(942893);
            const r = { component: "tweet" },
                o = { component: "thread" },
                i = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: n, conversationTreeMetadata: a } = t;
                        return !(e || (n && !n.isEnd && (!a || !1 !== a.descendantConnector || 0 !== a.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => a.Z.getTweetURTEntryItem(e),
                d = (e, t, n) => {
                    const a = ["descendant", "ancestor"].includes(n?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === n?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: a, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        948503: (e, t, n) => {
            n.d(t, { r: () => m });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(154003),
                i = n(674132),
                s = n.n(i),
                l = n(956272),
                d = n(725516),
                c = n(233391),
                u = n(288955);
            const p = s().a9ae1e78,
                b = a.createElement(l.default, null),
                m = ({ fullName: e, screenName: t, style: n, userId: i }) => {
                    const s = (0, r.useHistory)(),
                        l = (0, d.z)(),
                        m = a.useCallback(
                            (e) => {
                                l.scribe({ action: e, element: "search_profile_button", page: "user_profile" });
                            },
                            [l],
                        ),
                        h = a.useCallback(() => {
                            m("search"), s.push({ pathname: "/explore", state: { searchFocused: !0, searchPrefill: `from:${t || ""} `, source: "user_profile_header_search_button" } });
                        }, [s, t, m]),
                        f = a.useCallback(() => {
                            m("search_attempt");
                        }, [m]);
                    return a.createElement(u.Z, { displayMode: c.BH.search, userFullName: e, userId: i }, (e) => a.createElement(o.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: b, onPress: e(h, f), style: n, type: "primaryOutlined" }));
                };
        },
        26088: (e, t, n) => {
            n.d(t, { Z: () => P });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(811176),
                i = n(154003),
                s = n(392237),
                l = n(674132),
                d = n.n(l),
                c = n(76388),
                u = n(491831),
                p = n(224823),
                b = n(323683),
                m = n(479506),
                h = n(942893),
                f = n(71620),
                S = n(668214),
                y = n(919022);
            const D = (e, t) => y.ZP.select(e, t.userId),
                g = (0, S.Z)()
                    .propsFromState(() => ({ user: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SUPER_FOLLOW_BUTTON_CONTAINER"), unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                w = d().b63c46ed,
                A = d().ja66a2b5,
                _ = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, isFollowing: s, isSuperFollowing: l, promotedContent: d, style: f, unfollow: S, user: y, userId: D } = e,
                        g = (0, r.useHistory)(),
                        _ = (0, r.useLocation)(),
                        P = y?.screen_name,
                        T = s ? a.createElement(c.default, null) : a.createElement(u.default, { style: M.superFollowsIcon }),
                        v = a.useCallback(
                            (e) => {
                                const { action: n, element: a } = e,
                                    { items: r } = t.contextualScribeData,
                                    o = r?.find((e) => e.item_type === m.Z.ItemType.USER && e.id),
                                    i = [];
                                y ? i.push({ ...o, ...h.Z.getUserItem(y, d) }) : o && i.push(o);
                                const s = _.query && _.query.screen_name ? { items: i, context: "profile_intent" } : { items: i };
                                return t.scribe({ element: a, action: n, data: s });
                            },
                            [t, _, d, y],
                        ),
                        I = a.useCallback(
                            (e) => {
                                D && (v({ element: "super_follow_subscribe_button", action: "unfollow" }), S(D, { promotedContent: d }).catch(n(b.X))), e();
                            },
                            [n, d, S, D, v],
                        ),
                        E = a.useCallback(
                            (e) => {
                                const t = [{ Icon: p.default, text: A({ screenName: P }), onClick: I }];
                                return a.createElement(o.Z, { isFixed: !0, items: t, onCloseRequested: e });
                            },
                            [I, P],
                        ),
                        Z = s ? A({ screenName: P }) : w({ screenName: P });
                    return a.createElement(i.ZP, {
                        "aria-label": Z,
                        borderColor: s || l ? void 0 : "plum500",
                        hoverLabel: { label: Z },
                        icon: T,
                        onPress: () => {
                            !P || s || l || (v({ element: "super_follow_subscribe_button", action: "click" }), g.push(`/${P}/creator-subscriptions/subscribe`, { referring_page: "profile_intent" }));
                        },
                        renderMenu: s ? E : void 0,
                        style: f,
                        type: l && s ? "primaryOutlined" : void 0,
                    });
                },
                M = s.default.create((e) => ({ superFollowsIcon: { color: e.colors.plum500 } })),
                P = g(a.memo(_));
        },
        241304: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                r = n(576648),
                o = n(325686),
                i = n(154003),
                s = n(138099),
                l = n(731708),
                d = n(392237),
                c = n(674132),
                u = n.n(c),
                p = n(652255),
                b = n(376180),
                m = n(502940),
                h = n(70962),
                f = n(933340),
                S = n(321264),
                y = n(208340),
                D = n(707305),
                g = n(748138),
                w = n(837020),
                A = n(125363),
                _ = n(601576),
                M = n(919022);
            const P = u().ia5e7488,
                T = { label: P },
                v = u().j33d8902,
                I = { label: v },
                E = u().a8ab3d08,
                Z = u().d740d2d9,
                k = { bandcamp_handle: { icon: a.createElement(p.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: a.createElement(b.default, null), label: u().d876e67e }, cash_app_handle: { icon: a.createElement(m.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: a.createElement(h.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: a.createElement(f.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: a.createElement(S.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: a.createElement(y.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: a.createElement(D.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function C({ style: e, userId: t }) {
                const n = (0, A.I0)(),
                    [d, c] = a.useState(!1),
                    u = (0, A.v9)((e) => M.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: p } = u;
                if (!p) return null;
                const { is_enabled: b, ...m } = p;
                if (!1 === b || !Object.keys(m).length) return null;
                function h() {
                    c(!1);
                }
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(i.ZP, {
                        "aria-label": v,
                        hoverLabel: I,
                        icon: a.createElement(g.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? a.createElement(
                              s.Z,
                              { onMaskClick: h, style: B.sheet, type: "bottom", withMask: !0 },
                              a.createElement(i.ZP, { "aria-label": P, hoverLabel: T, icon: a.createElement(w.default, null), onPress: h, style: B.close, type: "primaryText" }),
                              a.createElement(o.Z, { style: B.header }, a.createElement(l.ZP, { weight: "bold" }, E), a.createElement(l.ZP, null, `@${u.screen_name}`)),
                              Object.entries(m)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = k[e];
                                      if (o) {
                                          const i = o.url
                                                  ? void 0
                                                  : function () {
                                                        r.Z.setString(String(t)), n((0, _.fz)({ text: Z({ service: o.label }) }));
                                                    },
                                              s = o.url ? `${o.url}${String(t)}` : void 0;
                                          return a.createElement(l.ZP, { color: "text", key: e, link: s, onPress: i, style: B.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const B = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        179562: (e, t, n) => {
            n.d(t, { Z: () => T });
            var a = n(807896),
                r = n(202784),
                o = n(238406),
                i = n(674132),
                s = n.n(i),
                l = n(145766),
                d = n(556303),
                c = n(443781),
                u = n(71620),
                p = n(668214),
                b = n(390387),
                m = (n(571372), n(697926)),
                h = n(120071),
                f = n(502909),
                S = n(600823);
            const y = (0, f.ZP)({ namespace: "translationsProfiles", fetchOneContext: "FETCH_PROFILE_TRANSLATION", fetchOneEndpoint: (e) => (t, n) => e.withEndpoint(h.Z).fetchProfileTranslation(t, n).then(D), fetchOneParams: (e) => ({ profileUserId: e }) });
            y.fetchStreamedGrokTranslation =
                (e, t, n) =>
                (n, a, { api: r }) =>
                    new Promise((a, o) => {
                        const i = { content_type: "BIO", id: e, dst_lang: t.userLanguage },
                            s = { profileUserId: e, profileTranslation: { entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, translationState: "Loading", translation: "", streamedTranslationFetchStatus: "loading", translationSource: "Grok", localizedSourceLanguage: "" } };
                        n(y.updateOrAddOne(e, s)),
                            r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(i) }, "https://api.x.com").then(async (t) => {
                                if (!t.ok) return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, s)), o(new Error("Failed to translate due to invalid API response."));
                                const r = t.body?.getReader();
                                if (!r) return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, s)), o(new Error("Failed to translate because reader is not present."));
                                const i = new TextDecoder();
                                let l = "",
                                    d = "";
                                const c = async () => {
                                    const { done: t, value: u } = await r.read();
                                    if (t) return (s.profileTranslation.translationState = "Success"), (s.profileTranslation.streamedTranslationFetchStatus = "loaded"), (s.profileTranslation.translation = l), n(y.updateOrAddOne(e, s)), a();
                                    const p = i.decode(u);
                                    if (((d += p), d.includes("\n"))) {
                                        const t = d.split("\n");
                                        d = t.pop();
                                        for (const a of t)
                                            try {
                                                const t = JSON.parse(a);
                                                if (t.error) throw new Error(t.error);
                                                t.result && "BIO" === t.result.content_type && (t.result.text && ((l += t.result.text), (s.profileTranslation.translationState = "Streaming"), (s.profileTranslation.streamedTranslationFetchStatus = "loaded"), (s.profileTranslation.translation = l)), t.result.entities && (t.result.entities.urls && (s.profileTranslation.entities.urls = [...s.profileTranslation.entities.urls, ...t.result.entities.urls]), t.result.entities.user_mentions && (s.profileTranslation.entities.user_mentions = [...s.profileTranslation.entities.user_mentions, ...t.result.entities.user_mentions]), t.result.entities.hashtags && (s.profileTranslation.entities.hashtags = [...s.profileTranslation.entities.hashtags, ...t.result.entities.hashtags]), t.result.entities.symbols && (s.profileTranslation.entities.symbols = [...s.profileTranslation.entities.symbols, ...t.result.entities.symbols]))), n(y.updateOrAddOne(e, s));
                                            } catch (t) {
                                                return (s.profileTranslation.translationState = "Failed"), (s.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, s)), o(new Error("Failed to parse translation JSON response."));
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
                g = S.Z.register(y),
                w = (e, t) => g.select(e, t.userId),
                A = (e, t) => g.selectFetchStatus(e, t.userId),
                _ = (0, p.Z)()
                    .propsFromState(() => ({ translation: w, translationFetchStatus: A, userLanguage: b.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("TRANSLATE_USER_BIO"), fetchTranslation: g.fetchOneIfNeeded, fetchStreamedGrokTranslation: g.fetchStreamedGrokTranslation }))
                    .withAnalytics(),
                M = s().ad7a451e;
            class P extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, userId: a, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            (0, d.F)(o, "") ? t(a, { userLanguage: r }) : n(a).catch(e());
                        }),
                        (this._renderTranslation = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: a, fetchTranslation: i, style: s, translation: l, translationFetchStatus: c, userLanguage: u, withOriginalText: p, ...b } = this.props,
                                { featureSwitches: m } = this.context,
                                h = (0, d.F)(m, "");
                            if (!l) return;
                            const f = { ...b, description: l.profileTranslation.translation, entities: { description: l.profileTranslation.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: h };
                            return r.createElement(o.Z, f);
                        });
                }
                render() {
                    const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: i, fetchTranslation: s, style: d, translation: c, translationFetchStatus: u, userId: p, userLanguage: b, withOriginalText: m, ...h } = this.props;
                    return r.createElement(l.ZP, { disableTranslation: this.props.disableTranslation, fetchTranslation: this._fetchTranslation, key: p, originLanguage: c && c.profileTranslation.localizedSourceLanguage, scribeElement: "translate_bio", streamedTranslationFetchStatus: c && c.profileTranslation.streamedTranslationFetchStatus, style: d, translateButtonText: M, translatedMessage: this._renderTranslation(), translationFetchStatus: u, translationSource: c && c.profileTranslation.translationSource, translationState: c && c.profileTranslation.translationState, withOriginalText: m }, r.createElement(o.Z, (0, a.Z)({}, h, { userId: p })));
                }
            }
            P.contextType = c.rC;
            const T = _(P);
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => i });
            var a = n(323265),
                r = n(655352),
                o = n(952793);
            const i = () => (0, o.hC)("rweb_sourcemap_migration") && (0, r.ZP)() && !a.ZP.isMobileOS();
        },
        507986: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({ loader: () => Promise.all([n.e("modules.common-e907d115"), n.e("modules.common-e019dbda"), n.e("loader.ProfileClusterFollow")]).then(n.bind(n, 751154)) });
        },
        103335: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(856674);
            const r = (e, t) => [e, t].sort(a.ZP).join("-");
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => r, NB: () => o, P2: () => i, j3: () => a, pR: () => s });
            const a = 5e4,
                r = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                o = (r.RICHTEXT, r.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: o.ABOUT, work_experience: o.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => m, Kh: () => p, ZU: () => u, hW: () => f, s1: () => b, uR: () => h });
            var a = n(990242),
                r = n.n(a),
                o = n(674132),
                i = n.n(o),
                s = n(520385),
                l = n(462166);
            const d = i().eb7710f1,
                c = i().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                p = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  a = r()(l.wJ, n),
                                  o = r()(t, a.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...a.result, content: o } };
                          })
                        : [];
                },
                b = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                a = t.result?.content,
                                r = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0),
                                o = (a?.active_role ? new Date() : u(a?.end_month, a?.end_year)) ?? new Date(0);
                            if (r.getFullYear() !== o.getFullYear()) return o.getFullYear() - r.getFullYear();
                            if (r.getMonth() !== o.getMonth()) return o.getMonth() - r.getMonth();
                            const i = u(n?.start_month, n?.start_year) ?? new Date(0),
                                s = u(a?.start_month, a?.start_year) ?? new Date(0);
                            return i.getFullYear() !== s.getFullYear() ? s.getFullYear() - i.getFullYear() : s.getMonth() - i.getMonth();
                        });
                },
                m = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        a = t.getFullYear() - e.getFullYear();
                    return n < 0 && (a--, (n += 12)), a && n ? `${d({ years: a })} ${c({ months: n })}` : a ? d({ years: a }) : n ? c({ months: n }) : "";
                },
                h = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                f = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        965728: (e, t, n) => {
            n.d(t, { C_: () => S, I5: () => m, K2: () => f, L$: () => d, Rb: () => h, nk: () => b, sI: () => g, xr: () => y });
            var a = n(202784),
                r = n(483677),
                o = n(782578),
                i = n(393058),
                s = n(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && r.Z.getForGallery(e);
                    return t ? { rgb: y(t), rgba: l(t, 0.9) } : p;
                },
                c = s.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                p = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                b = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: n, containerWidth: a, mediaHeight: r, mediaWidth: i } = e,
                        s = i && r ? i / r : 1,
                        l = s > 1,
                        d = t ? 400 : c,
                        p = l && i <= d ? u(a, d) : a,
                        b = !l && r <= d ? u(n, d) : n;
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
                S = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                y = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
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
                    const [e, t] = a.useReducer(D, { isZoomed: !1, showControls: !0 });
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
        728220: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(443781),
                r = n(125363),
                o = n(919022),
                i = n(788210);
            const s = () => {
                const { userClaims: e } = (0, a.QZ)(),
                    t = (0, r.v9)(o.ZP.selectViewerUser),
                    n = (0, i.Z)(),
                    s = t?.is_blue_verified,
                    l = e.isPaidVerifiedOrg() || e.isFreeVerifiedOrg() || e.isLegacyVerifiedOrg() || e.isVerifiedOrgAffiliate();
                return n && !s && !l && !("Government" === t?.verified_type || "Business" === t?.verified_type);
            };
        },
        788210: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(443781);
            const o = () => {
                const { userClaims: e } = a.useContext(r.rC);
                return e.hasSubscription("premium_standard") || e.hasSubscription("premium_plus") || e.isVerifiedOrg() || e.isVerifiedOrgAffiliate();
            };
        },
        656520: (e, t, n) => {
            function a() {
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
            n.d(t, { Lr: () => o, _L: () => a, ti: () => i, yL: () => r });
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => r, n5: () => i });
            var a = n(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: a, user: r, userProfileInterstitialType: i, viewerUserId: s }) => {
                    const l = !!s && s === r.id_str,
                        d = r.blocked_by,
                        c = r.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: l, user: r, userProfileInterstitialType: i }),
                        p = (l || !a) && !n;
                    return { avatar: l || (!u && !t && !n && !a), badges: l || !a, description: l || (!c && !d && !u && !n && !a), followButton: !(l || d || u || t || n || a), followersYouKnow: !l && !d && !c && !u && !t && !n && !a && (r.following || !r.protected), followIndicator: !a, fullName: p, label: p, stats: l || (!d && !u && !n && !a), subscriptionsCount: l || !r.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: r }) => (r === a.Z.SensitiveMedia || r === a.Z.OffensiveProfileContent) && !(t || n.following || e),
                i = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const a = n.blocked_by,
                        r = n.protected && !n.following;
                    return t ? e || !r : e || (!r && !a);
                };
        },
        893664: (e, t, n) => {
            n.d(t, { g: () => s });
            var a = n(882220),
                r = (n(585488), n(277660)),
                o = n.n(r),
                i = n(835546);
            const s = (e) => {
                const t = o()(a.Z, e.user);
                return !!t.legacy && (0, i.n5)({ isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: e.isSoftBlockEnabled, user: t.legacy });
            };
        },
        961104: (e, t, n) => {
            function a(e, t) {
                return e.filter(t);
            }
            n.d(t, { b: () => a });
        },
        806528: (e, t, n) => {
            n.d(t, { Bz: () => d, ZW: () => m, ey: () => u, fw: () => s, iG: () => b, wM: () => l });
            var a = n(499627),
                r = n(341276);
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
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            a.Z.register({
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
        341276: (e, t, n) => {
            n.d(t, { M: () => r, S: () => a });
            const a = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        947650: (e, t, n) => {
            n.d(t, { Hq: () => D, c1: () => h, lP: () => S, og: () => f });
            var a = n(745123),
                r = n(961104),
                o = n(499627),
                i = n(917799),
                s = n(56519),
                l = n(919022);
            const d = "knownFollowers",
                c = `rweb/${d}`,
                u = [],
                p = (0, i.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                b = {};
            o.Z.register({
                [d]: function (e = b, t) {
                    if (!t) return e;
                    if (t.type === p.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: a, users: r } = n && n.result,
                            { user_id: o } = t.meta || {};
                        return o ? { ...e, [o]: { knownFollowersCount: a, knownFollowerIds: r } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[d][t],
                h = (e, t) => {
                    if (t) {
                        const n = y(e, t);
                        return (0, r.b)(l.ZP.selectMany(e, n), (e) => !!e);
                    }
                    return u;
                },
                f = (e, t) => h(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                S = (e, t) => {
                    let n;
                    if (t) {
                        const a = m(e, t);
                        n = a?.knownFollowersCount;
                    }
                    return n;
                },
                y = (e, t) => {
                    const n = m(e, t);
                    return n?.knownFollowerIds || u;
                },
                D =
                    (e) =>
                    (t, n, { api: r }) =>
                        void 0 !== S(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: r }) =>
                                          (0, i._O)(t, { request: r.withEndpoint(a.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: p, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, s.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        351791: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(33055),
                r = n(750085),
                o = n(218951);
            const i = (e, t) => (0, o.Z)({ timelineId: `businessProfileTeam-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchBusinessProfileTeam, getEndpointParams: ({ count: n, cursor: a }) => ({ count: n, cursor: "string" == typeof a ? a : void 0, userId: e, teamName: t }) }, formatResponse: r.Z, context: "FETCH_BUSINESS_PROFILE_TEAM_TIMELINE", perfKey: "businessProfileTeam-GraphQL" });
        },
        392280: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(33055),
                r = n(750085),
                o = n(218951);
            function i(e) {
                return (0, o.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(a.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: n, cursor: a } = t,
                                r = { count: n, userId: e, cursor: void 0 };
                            return "string" == typeof a && (r.cursor = a), r;
                        },
                    },
                    formatResponse: r.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
        611186: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(33055),
                r = n(750085),
                o = n(218951);
            const i = (e) => (0, o.Z)({ timelineId: `userMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchUserMedia, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }, formatResponse: r.Z, context: "FETCH_MEDIA_TIMELINE", perfKey: "userMedia-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e019dbda.708d719a.js.map
