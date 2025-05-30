"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e019dbda"],
    {
        614185: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.22"), n.e("ondemand.Balloons")]).then(n.bind(n, 103609)) });
        },
        392049: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(325686),
                a = n(157130),
                s = n(731708),
                i = n(154003),
                l = n(392237),
                d = n(111677),
                c = n.n(d),
                u = n(144251),
                m = n(187669),
                p = n(725405);
            const h = c().dd3d10f6,
                f = c().i06d4712,
                b = c().j354c438,
                g = () => {
                    const e = (0, p.Z)();
                    (0, m.q)(() => {
                        e.scribe({ action: "impression", component: "checkmark_in_review_button" });
                    });
                    return r.createElement(
                        a.Z,
                        {
                            contentStyle: y.popover,
                            onOpen: () => {
                                e.scribe({ action: "click", component: "checkmark_in_review_button" });
                            },
                            renderContent: () => r.createElement(o.Z, null, r.createElement(s.ZP, { style: y.popoverTitle }, f), r.createElement(s.ZP, null, b)),
                            withArrow: !0,
                        },
                        r.createElement(o.Z, null, r.createElement(i.ZP, { icon: r.createElement(u.default, { style: y.icon, type: "primaryOutlined" }), size: "xSmall" }, h)),
                    );
                },
                y = l.default.create((e) => ({ icon: { color: e.colors.blue500 }, popover: { padding: e.spaces.space16 }, popoverTitle: { marginBottom: e.spaces.space8 } }));
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                s = n(392237),
                i = n(655352);
            const l = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                d = ({ children: e, component: t, fab: n, shouldRenderFab: s = !0, style: d, withoutBottomPadding: c, ...u }) => {
                    const m = t || a.Z,
                        p = s && !(0, i.ZP)();
                    return o.createElement(m, (0, r.Z)({}, u, { style: [p && !c && l.root, d] }), e, p ? n : null);
                };
        },
        797448: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(727828);
            const s = () => r.createElement(o.Z, null, r.createElement(a.Z, { variant: "GetVerifiedButton" }));
        },
        799432: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(443781),
                s = n(727828);
            const i = () => {
                const { featureSwitches: e, userClaims: t } = (0, a.QZ)();
                return e.isTrue("vo_upsell_profile_button_enabled") ? (t.isAnyPremiumSubscriber() ? r.createElement(o.Z, null, r.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButtonWithDismiss" })) : r.createElement(o.Z, null, r.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButton" }))) : null;
            };
        },
        998118: (e, t, n) => {
            function r({ featureSwitch: e, featureSwitches: t, isOwnProfile: n, user: r, userClaims: o, verifiedType: a }) {
                return n && "Government" !== a && "Business" !== a && t.isTrue("subscriptions_sign_up_enabled") && !r?.is_blue_verified && t.isTrue(e) && (!o.isAnyPremiumSubscriber() || (o.hasSubscription("premium_basic") && !o.isAnyVerifiedOrgOrAffiliate() && t.isTrue("subscriptions_upsells_get_verified_profile_rotation_basic_upgrade_enabled")));
            }
            n.d(t, { Z: () => r });
        },
        480056: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(300785),
                o = n(202784),
                a = n(10622),
                s = n.n(a),
                i = (n(585488), n(437429)),
                l = n.n(i),
                d = n(443781),
                c = n(125363),
                u = n(919022);
            const m = r.Z,
                p = (e, t, n) => {
                    const [r, a] = o.useState(!1),
                        i = l()(),
                        p = (0, c.v9)(u.ZP.selectViewerUser),
                        { featureSwitches: h, userClaims: f } = (0, d.QZ)(),
                        b = f.isAnyVerifiedOrgOrAffiliate(),
                        g = "Business" === p?.verified_type || "Government" === p?.verified_type;
                    return (
                        o.useEffect(() => {
                            e && h.isTrue("vo_upsell_new_business_query_enabled") && !b && !g
                                ? s()(i, m, { screenName: t, promptPurpose: n })
                                      .toPromise()
                                      .then((e) => {
                                          a(e?.user_result_by_screen_name?.result?.is_active_vo_upsell_candidate ?? !1);
                                      })
                                      .catch(() => {
                                          a(!1);
                                      })
                                : a(!1);
                        }, [i, h, e, t, n, b, g]),
                        r
                    );
                };
        },
        898948: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(443781),
                a = n(163301);
            const s = (e) => {
                const { children: t, collectionName: n } = e,
                    s = r.useContext(o.rC);
                return (0, a.Kx)(s), t;
            };
        },
        709840: (e, t, n) => {
            n.d(t, { E: () => l });
            var r = n(202784),
                o = n(272175),
                a = (n(136728), n(351686)),
                s = n(537392);
            const i = (e) => {
                    const t = e.profile_image_url_https;
                    let n = "";
                    if (t) {
                        const e = a.Z.selectBestUrl((0, s.iv)(), t);
                        e && (n = e);
                    }
                    const r = ((e) => {
                        const t = [];
                        return e.verified && t.push("verified"), e.highlightedLabel?.description && t.push(e.highlightedLabel?.description), t.length ? (t.length > 1 ? t : t[0]) : null;
                    })(e);
                    return {
                        "@type": "Person",
                        additionalName: e.screen_name,
                        description: e.description,
                        ...(r && { disambiguatingDescription: r }),
                        givenName: e.name,
                        homeLocation: { "@type": "Place", name: e.location },
                        identifier: e.id_str,
                        image: { "@type": "ImageObject", contentUrl: n, thumbnailUrl: t },
                        interactionStatistic: [
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/FollowAction", name: "Follows", userInteractionCount: e.followers_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/SubscribeAction", name: "Friends", userInteractionCount: e.friends_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/WriteAction", name: "Tweets", userInteractionCount: e.statuses_count },
                        ],
                        url: `https://x.com/${e.screen_name}`,
                    };
                },
                l = ({ user: e }) => {
                    const t = e.entities?.url?.urls?.[0],
                        n = { "@context": "http://schema.org", "@type": "ProfilePage", dateCreated: e.created_at, mainEntity: i(e), contentRating: e.possibly_sensitive ? "Possibly Adult" : "" };
                    return t && (n.relatedLink = [t.url, t.expanded_url]), r.createElement(o.ql, { meta: e.possibly_sensitive ? [{ name: "rating", content: "adult" }] : [], script: [{ type: "application/ld+json", innerHTML: JSON.stringify(n), "data-testid": "UserProfileSchema-test" }] });
                };
        },
        634090: (e, t, n) => {
            n.d(t, { Z: () => P });
            var r = n(346489),
                o = n(202784),
                a = (n(585488), n(883229)),
                s = n(943914),
                i = n(535338),
                l = n(833772),
                d = n(325686),
                c = n(277660),
                u = n.n(c),
                m = n(392237),
                p = n(187669),
                h = n(725516),
                f = n(257466),
                b = n(272590);
            const g = l.Z,
                y = m.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                _ = ({ setIsRenderingProfileSpotlight: e, userRef: t }) => {
                    const n = (0, h.z)(),
                        r = u()(g, t),
                        a = r.profilemodules?.v1?.[0]?.profile_module;
                    return (
                        e && !a && e(!1),
                        (0, p.q)(() => {
                            n.scribe((0, b.nw)());
                        }),
                        a ? o.createElement(d.Z, { style: y.container }, o.createElement(f.Z, { profileSpotlightRef: a, setIsRenderingProfileSpotlight: e, userRef: r })) : null
                    );
                },
                w = r.Z,
                D = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = (0, i.p)(w, { screen_name: t }),
                        r = n?.user_result_by_screen_name?.result;
                    return r ? o.createElement(_, { setIsRenderingProfileSpotlight: e, userRef: r }) : null;
                },
                P = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = o.useMemo(() => ({ type: "CustomRetry", content: () => null }), []);
                    return o.createElement(a.N, { errorConfig: { context: "PROFILE_SPOTLIGHTS" }, fallback: n }, o.createElement(s.B, null, o.createElement(D, { setIsRenderingProfileSpotlight: e, userScreenName: t })));
                };
        },
        160664: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(111677),
                a = n.n(o);
            const s = (e, t, n) => new Date(e, t, n),
                i = a().a46f80ab,
                l = a().c7905f89,
                d = a().ba2e82a1,
                c = a().da44942d,
                u = a().d7d71245;
            function m({ birthdate: e, withBornPrefixText: t }) {
                const { day: n, month: r, year: o } = e,
                    a = !!o,
                    m = !!r,
                    p = !!n,
                    h = !a && m && p,
                    f = a && (!m || !p),
                    b =
                        a && m && p
                            ? (function (e, t, n, r) {
                                  const o = s(e, t - 1, n);
                                  return r ? i({ birthdate: d(o) }) : d(o);
                              })(Number(o), Number(r), Number(n), t)
                            : h
                              ? (function (e, t, n) {
                                    const r = s(0, e - 1, t);
                                    return n ? i({ birthdate: c(r) }) : c(r);
                                })(Number(r), Number(n), t)
                              : f
                                ? (function (e, t) {
                                      const n = s(e, 0, 1);
                                      return t ? l({ year: u(n) }) : u(n);
                                  })(Number(o), t)
                                : null;
                return b;
            }
            const p = r.memo(m);
        },
        344612: (e, t, n) => {
            n.d(t, { ZP: () => l });
            var r = n(202784),
                o = n(111677),
                a = n.n(o);
            const s = a().d58baa7f,
                i = a().ia24dc8d;
            function l(e) {
                const { truncateMaxCount: t = 1e4, type: n } = e,
                    o = e.count ?? 0,
                    l = o >= t ? s(o) : i(o),
                    d = r.useMemo(() => ({ count: o, formattedCount: l }), [o, l]);
                return null == e.count ? null : "likes" === n ? r.createElement(a().I18NFormatMessage, { $i18n: "eea0a14f", formattedCount: d.formattedCount, count: d.count }) : "media" === n ? r.createElement(a().I18NFormatMessage, { $i18n: "cca42d0b", formattedCount: d.formattedCount, count: d.count }) : r.createElement(a().I18NFormatMessage, { $i18n: "a0a3adf7", formattedCount: d.formattedCount, count: d.count });
            }
        },
        177997: (e, t, n) => {
            n.d(t, { Z: () => O });
            var r = n(202784),
                o = n(88660),
                a = n(293115),
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
                    o = t.metric_value;
                if (!o) return null;
                const a = n,
                    s = { [a]: { metrics: { [a]: o }, fromTime: "", toTime: "" } };
                return r.createElement(d.Z, { testID: e }, r.createElement(y.Fd, { compareData: null, data: s, metric: n }));
            };
            var w = n(336636);
            const D = h().d7f8a117,
                P = h().cae20e93,
                M = h().gc767fda,
                T = h().c7c85e0c,
                E = ({ config: e, data: t, dismiss: n, impress: o }) => {
                    const a = (0, g.Z)();
                    r.useEffect(() => {
                        a.scribe({ action: "show" }), a.scribe({ action: "impression", component: "unified-upsell", data: { referer: "account_analytics" } });
                    });
                    const s = r.useMemo(() => {
                            if (e.metrics.length > 1)
                                return r.createElement(
                                    d.Z,
                                    { style: Z.tiles },
                                    e.metrics.map((e) => {
                                        const n = t?.find((t) => t.metric_type === e.metricType);
                                        return n?.metric_value ? r.createElement(_, { key: e.metricType, metric: e.metricType, metricResult: n }) : null;
                                    }),
                                );
                            if (1 === e.metrics.length) {
                                const n = t?.find((t) => t.metric_type === e.metrics[0].metricType);
                                if (!n) return null;
                                const o = n.metric_type,
                                    { value: a } = (0, y.fX)({ compareData: null, data: { [o]: { metrics: { [o]: n.metric_value }, fromTime: "", toTime: "" } }, metric: e.metrics[0].metricType }),
                                    s = y.Kg[n.metric_type];
                                return s.summary ? r.createElement(c.ZP, { weight: "medium" }, s.summary({ value: a, period: P({ days: e.periodInDays }) })) : null;
                            }
                            return null;
                        }, [e.metrics, e.periodInDays, t]),
                        i = r.useCallback(() => {
                            a.scribe({ action: "dismiss" }), n();
                        }, [n, a]);
                    return r.createElement(d.Z, { style: Z.container, testID: "analytics-preview" }, r.createElement(d.Z, { style: Z.heading }, e.metrics.length > 1 ? r.createElement(c.ZP, { size: "headline2", weight: "bold" }, D({ days: e.periodInDays })) : null, r.createElement(c.ZP, { color: "gray700", size: "subtext3" }, M), r.createElement(u.ZP, { icon: r.createElement(f.default, null), onClick: i, style: Z.dismissButton, testID: "dismiss-button", type: "primaryText" })), r.createElement(d.Z, { style: Z.content }, s, r.createElement(u.ZP, { icon: r.createElement(b.default, null), link: { pathname: "/i/premium_sign_up", state: { referring_page: "account_analytics" } }, size: "xSmall", style: Z.unlockButton, type: "primaryFilled" }, T)));
                },
                I = (e) => {
                    const t = (0, w.Z)({ metrics: e.config.metrics, periodInDays: e.config.periodInDays }),
                        n = t.result.result?.free_metrics_rollup,
                        o = (0, g.Z)();
                    let a = !0;
                    return (
                        e.config.metrics.forEach((e) => {
                            const t = n?.find((t) => t.metric_type === e.metricType);
                            (!t?.metric_value || (e.threshold && t?.metric_value <= e.threshold)) && (a = !1);
                        }),
                        a ? r.createElement(E, (0, l.Z)({}, e, { data: n })) : (o.scribe({ action: "not_matched" }), null)
                    );
                },
                v = r.memo(I),
                Z = m.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.large, padding: e.spaces.space16 }, content: { justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }, tiles: { flexDirection: "row", gap: e.spaces.space48 }, heading: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, unlockButton: { alignSelf: "flex-end", marginTop: e.spaces.space12 }, dismissButton: { marginStart: "auto" } })),
                S = { showForMsec: o.fz, reappearAfterMsec: o.Ho, dismissForMsec: o.dV },
                k = { showForMsec: o.Tg, reappearAfterMsec: o.Vv, dismissForMsec: o.IZ },
                A = {
                    DemoMultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1 },
                            { metricType: "ProfileVisits", threshold: 1 },
                            { metricType: "Likes", threshold: 1 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_DemoMultipleMetrics", ...S },
                    },
                    DemoSingleMetric: { metrics: [{ metricType: "ProfileVisits", threshold: 1 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_DemoSingleMetric", ...S } },
                    MultipleMetrics: {
                        metrics: [
                            { metricType: "Impressions", threshold: 1e3 },
                            { metricType: "ProfileVisits", threshold: 100 },
                            { metricType: "Likes", threshold: 50 },
                        ],
                        periodInDays: 7,
                        fatigueConfig: { key: "AnalyticsPreview_MultipleMetrics", ...k },
                    },
                    ProfileVisits: { metrics: [{ metricType: "ProfileVisits", threshold: 100 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_ProfileVisits", ...k } },
                    Impressions: { metrics: [{ metricType: "Impressions", threshold: 1e3 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...k } },
                    ImpressionsLower: { metrics: [{ metricType: "Impressions", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Impressions", ...k } },
                    Likes: { metrics: [{ metricType: "Likes", threshold: 50 }], periodInDays: 7, fatigueConfig: { key: "AnalyticsPreview_Likes", ...k } },
                },
                C = (e) => {
                    const { dismiss: t, impress: n, shouldShow: s } = (0, o.ZP)(e.config.fatigueConfig);
                    return (
                        r.useEffect(() => {
                            n();
                        }),
                        s ? r.createElement(a.nO, { namespace: { component: "analytics_preview" } }, r.createElement(i.H, { errorConfig: { context: "AnalyticPreview" }, suspenseFallback: null }, r.createElement(v, { config: e.config, dismiss: t, impress: n }))) : null
                    );
                },
                O = () => {
                    const { featureSwitches: e, userClaims: t } = (0, s.QZ)(),
                        n = t.isAnyPremiumSubscriber(),
                        o = e.isTrue("subscriptions_sign_up_enabled");
                    if (n || !o) return null;
                    const a = e.isTrue("subscriptions_upsells_analytics_profile_enabled"),
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
                    return a && i && !n ? r.createElement(C, { config: i }) : null;
                };
        },
        336636: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(857037),
                o = (n(585488), n(712696)),
                a = n.n(o),
                s = n(665979),
                i = n(44988),
                l = n(443781);
            const d = r.Z,
                c = new Date(),
                u = (e) => {
                    const { viewerUserId: t } = (0, l.QZ)();
                    return a()(d, { from_time: (0, s.b7)((0, i.Hk)(c)(e.periodInDays)).toISOString(), requested_metrics: e.metrics.map((e) => e.metricType), rest_id: t, to_time: (0, i.iX)(c).toISOString() });
                };
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
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
                        { loggedInUserId: y } = o.useContext(p.rC),
                        _ = (0, m.z)(),
                        w = o.useCallback(
                            (e) => {
                                _.scribe({ component: b, action: "click" }), f && f(e);
                            },
                            [_, f, b],
                        ),
                        D = u.ZM.useCollapsibleNavBars(),
                        P = [...u.Ah({ elementPosition: "bottom" }), D && h.fabStaysAboveSafeArea];
                    return y
                        ? o.createElement(
                              s.Z.FloatingAction,
                              null,
                              o.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > l.default.theme.breakpoints.large,
                                      i = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      m = [h.root, i && h.rootMedium, s && h.rootLarge],
                                      p = [h.fab, s && h.fabLarge, u && h.fabMicro, P];
                                  return o.createElement(
                                      a.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      o.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, i) => o.createElement(a.Z, (0, r.Z)({ ref: e() }, i({ style: p })), o.createElement(c.Z, (0, r.Z)({}, g, { "aria-label": t, label: s ? n : void 0, onPress: w, style: u && h.buttonMicro })))),
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
                o = n(387524),
                a = n(635510);
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
                    return r.createElement(o.Z, { "aria-label": e, href: s, icon: t, label: n, onPress: this._handlePress, scribeComponent: i, testID: a.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                s = n(186444),
                i = n(355883);
            const l = a().j0179e90,
                d = a().ee69d769({ verb: "" }),
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
                o = n(325686),
                a = n(529509),
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
                        r.createElement(o.Z, { style: f.minHeight }, r.createElement(a.Z, { knownFollowersAvatarUrls: s, knownFollowersCount: i, knownFollowersNames: l, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, n) => {
            n.d(t, { Z8: () => s, mM: () => o, vx: () => a });
            var r = n(882122);
            const o = (e, t) => {
                    const n = r.lP(e, t);
                    if (void 0 === n) return n;
                    const o = r.c1(e, t),
                        a = r.og(e, t);
                    return n - (o.length - a.length);
                },
                a = (e, t) => r.og(e, t).map(({ profile_image_url_https: e }) => e),
                s = (e, t) => r.og(e, t).map(({ name: e }) => e);
        },
        258199: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.8"),
                        n.e("icons.15"),
                        n.e("icons.7"),
                        n.e("icons.3"),
                        n.e("icons.24"),
                        n.e("icons.12"),
                        n.e("icons.22"),
                        n.e("icons.2"),
                        n.e("icons.18"),
                        n.e("icons.9"),
                        n.e("icons.1"),
                        n.e("icons.6"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.14"),
                        n.e("icons.5"),
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
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.17"),
                        n.e("icons.27"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.4"),
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
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"),
                        n.e("shared~bundle.Payments~bundle.TV"),
                        n.e("bundle.Payments-bc6ccf4c"),
                        n.e("bundle.Payments-27545368"),
                        n.e("bundle.Payments-960914ab"),
                        n.e("bundle.Payments-17a1c92a"),
                        n.e("bundle.Payments-39d0705d"),
                        n.e("bundle.Payments-fd087ba8"),
                        n.e("bundle.Payments-7e6638bc"),
                        n.e("bundle.Payments-9f4db315"),
                        n.e("bundle.Payments-6cc66b21"),
                        n.e("bundle.Payments-b8e4b837"),
                        n.e("bundle.Payments-49827288"),
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
            var r = n(807896),
                o = n(202784),
                a = n(149202),
                s = n(725516);
            class i extends o.PureComponent {
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
                    return o.createElement(a.Z, (0, r.Z)({}, s, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, s.Z)(i);
        },
        438965: (e, t, n) => {
            n.d(t, { FE: () => a, Hx: () => l, Oj: () => o, P3: () => d, QO: () => i, j: () => s });
            var r = n(942893);
            const o = { component: "tweet" },
                a = { component: "thread" },
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
                o = n(107267),
                a = n(154003),
                s = n(111677),
                i = n.n(s),
                l = n(956272),
                d = n(725516),
                c = n(233391),
                u = n(288955);
            const m = i().a9ae1e78,
                p = r.createElement(l.default, null),
                h = ({ fullName: e, screenName: t, style: n, userId: s }) => {
                    const i = (0, o.useHistory)(),
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
                    return r.createElement(u.Z, { displayMode: c.BH.search, userFullName: e, userId: s }, (e) => r.createElement(a.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: p, onPress: e(f, b), style: n, type: "primaryOutlined" }));
                };
        },
        26088: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var r = n(202784),
                o = n(107267),
                a = n(811176),
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
                P = d().ja66a2b5,
                M = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, isFollowing: i, isSuperFollowing: l, promotedContent: d, style: b, unfollow: g, user: y, userId: _ } = e,
                        w = (0, o.useHistory)(),
                        M = (0, o.useLocation)(),
                        E = y?.screen_name,
                        I = i ? r.createElement(c.default, null) : r.createElement(u.default, { style: T.superFollowsIcon }),
                        v = r.useCallback(
                            (e) => {
                                const { action: n, element: r } = e,
                                    { items: o } = t.contextualScribeData,
                                    a = o?.find((e) => e.item_type === h.Z.ItemType.USER && e.id),
                                    s = [];
                                y ? s.push({ ...a, ...f.Z.getUserItem(y, d) }) : a && s.push(a);
                                const i = M.query && M.query.screen_name ? { items: s, context: "profile_intent" } : { items: s };
                                return t.scribe({ element: r, action: n, data: i });
                            },
                            [t, M, d, y],
                        ),
                        Z = r.useCallback(
                            (e) => {
                                _ && (v({ element: "super_follow_subscribe_button", action: "unfollow" }), g(_, { promotedContent: d }).catch(n(p.X))), e();
                            },
                            [n, d, g, _, v],
                        ),
                        S = r.useCallback(
                            (e) => {
                                const t = [{ Icon: m.default, text: P({ screenName: E }), onClick: Z }];
                                return r.createElement(a.Z, { isFixed: !0, items: t, onCloseRequested: e });
                            },
                            [Z, E],
                        ),
                        k = i ? P({ screenName: E }) : D({ screenName: E });
                    return r.createElement(s.ZP, {
                        "aria-label": k,
                        borderColor: i || l ? void 0 : "plum500",
                        hoverLabel: { label: k },
                        icon: I,
                        onPress: () => {
                            !E || i || l || (v({ element: "super_follow_subscribe_button", action: "click" }), w.push(`/${E}/creator-subscriptions/subscribe`, { referring_page: "profile_intent" }));
                        },
                        renderMenu: i ? S : void 0,
                        style: b,
                        type: l && i ? "primaryOutlined" : void 0,
                    });
                },
                T = i.default.create((e) => ({ superFollowsIcon: { color: e.colors.plum500 } })),
                E = w(r.memo(M));
        },
        241304: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(576648),
                a = n(325686),
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
                P = n(125363),
                M = n(601576),
                T = n(919022);
            const E = u().ia5e7488,
                I = { label: E },
                v = u().j33d8902,
                Z = { label: v },
                S = u().a8ab3d08,
                k = u().d740d2d9,
                A = { bandcamp_handle: { icon: r.createElement(m.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(p.default, null), label: u().d876e67e }, cash_app_handle: { icon: r.createElement(h.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(f.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: r.createElement(b.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(g.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(y.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(_.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function C({ style: e, userId: t }) {
                const n = (0, P.I0)(),
                    [d, c] = r.useState(!1),
                    u = (0, P.v9)((e) => T.ZP.select(e, t));
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
                        "aria-label": v,
                        hoverLabel: Z,
                        icon: r.createElement(w.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? r.createElement(
                              i.Z,
                              { onMaskClick: f, style: O.sheet, type: "bottom", withMask: !0 },
                              r.createElement(s.ZP, { "aria-label": E, hoverLabel: I, icon: r.createElement(D.default, null), onPress: f, style: O.close, type: "primaryText" }),
                              r.createElement(a.Z, { style: O.header }, r.createElement(l.ZP, { weight: "bold" }, S), r.createElement(l.ZP, null, `@${u.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const a = A[e];
                                      if (a) {
                                          const s = a.url
                                                  ? void 0
                                                  : function () {
                                                        o.Z.setString(String(t)), n((0, M.fz)({ text: k({ service: a.label }) }));
                                                    },
                                              i = a.url ? `${a.url}${String(t)}` : void 0;
                                          return r.createElement(l.ZP, { color: "text", key: e, link: i, onPress: s, style: O.service, withInteractiveStyling: !1 }, a.icon, a.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const O = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        179562: (e, t, n) => {
            n.d(t, { Z: () => I });
            var r = n(807896),
                o = n(202784),
                a = n(238406),
                s = n(111677),
                i = n.n(s),
                l = n(720728),
                d = n(556303),
                c = n(443781),
                u = n(71620),
                m = n(668214),
                p = n(390387),
                h = (n(571372), n(697926)),
                f = n(120071),
                b = n(502909),
                g = n(600823);
            const y = (0, b.ZP)({ namespace: "translationsProfiles", fetchOneContext: "FETCH_PROFILE_TRANSLATION", fetchOneEndpoint: (e) => (t, n) => e.withEndpoint(f.Z).fetchProfileTranslation(t, n).then(_), fetchOneParams: (e) => ({ profileUserId: e }) });
            y.fetchStreamedGrokTranslation =
                (e, t, n) =>
                (n, r, { api: o }) =>
                    new Promise((r, a) => {
                        const s = { content_type: "BIO", id: e, dst_lang: t.userLanguage },
                            i = { profileUserId: e, profileTranslation: { entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, translationState: "Loading", translation: "", streamedTranslationFetchStatus: "loading", translationSource: "Grok", localizedSourceLanguage: "" } };
                        n(y.updateOrAddOne(e, i)),
                            o.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(s) }, "https://api.x.com").then(async (t) => {
                                if (!t.ok) return (i.profileTranslation.translationState = "Failed"), (i.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, i)), a(new Error("Failed to translate due to invalid API response."));
                                const o = t.body?.getReader();
                                if (!o) return (i.profileTranslation.translationState = "Failed"), (i.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, i)), a(new Error("Failed to translate because reader is not present."));
                                const s = new TextDecoder();
                                let l = "",
                                    d = "";
                                const c = async () => {
                                    const { done: t, value: u } = await o.read();
                                    if (t) return (i.profileTranslation.translationState = "Success"), (i.profileTranslation.streamedTranslationFetchStatus = "loaded"), (i.profileTranslation.translation = l), n(y.updateOrAddOne(e, i)), r();
                                    const m = s.decode(u);
                                    if (((d += m), d.includes("\n"))) {
                                        const t = d.split("\n");
                                        d = t.pop();
                                        for (const r of t)
                                            try {
                                                const t = JSON.parse(r);
                                                if (t.error) throw new Error(t.error);
                                                t.result && "BIO" === t.result.content_type && (t.result.text && ((l += t.result.text), (i.profileTranslation.translationState = "Streaming"), (i.profileTranslation.streamedTranslationFetchStatus = "loaded"), (i.profileTranslation.translation = l)), t.result.entities && (t.result.entities.urls && (i.profileTranslation.entities.urls = [...i.profileTranslation.entities.urls, ...t.result.entities.urls]), t.result.entities.user_mentions && (i.profileTranslation.entities.user_mentions = [...i.profileTranslation.entities.user_mentions, ...t.result.entities.user_mentions]), t.result.entities.hashtags && (i.profileTranslation.entities.hashtags = [...i.profileTranslation.entities.hashtags, ...t.result.entities.hashtags]), t.result.entities.symbols && (i.profileTranslation.entities.symbols = [...i.profileTranslation.entities.symbols, ...t.result.entities.symbols]))), n(y.updateOrAddOne(e, i));
                                            } catch (t) {
                                                return (i.profileTranslation.translationState = "Failed"), (i.profileTranslation.streamedTranslationFetchStatus = "failed"), n(y.updateOrAddOne(e, i)), a(new Error("Failed to parse translation JSON response."));
                                            }
                                    }
                                    c();
                                };
                                c();
                            });
                    });
            const _ = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsProfiles: (0, h.Z)(t, (e) => e.profileUserId) } };
                },
                w = g.Z.register(y),
                D = (e, t) => w.select(e, t.userId),
                P = (e, t) => w.selectFetchStatus(e, t.userId),
                M = (0, m.Z)()
                    .propsFromState(() => ({ translation: D, translationFetchStatus: P, userLanguage: p.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("TRANSLATE_USER_BIO"), fetchTranslation: w.fetchOneIfNeeded, fetchStreamedGrokTranslation: w.fetchStreamedGrokTranslation }))
                    .withAnalytics(),
                T = i().ad7a451e;
            class E extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { featureSwitches: e } = this.context;
                            return (0, d.F)(e, "");
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, userId: r, userLanguage: o } = this.props;
                            this._useGrokTranslation() ? t(r, { userLanguage: o }) : n(r).catch(e());
                        }),
                        (this._renderTranslation = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: r, fetchTranslation: s, style: i, translation: l, translationFetchStatus: c, userLanguage: u, withOriginalText: m, ...p } = this.props,
                                { featureSwitches: h } = this.context,
                                f = (0, d.F)(h, "");
                            if (!l) return;
                            const b = { ...p, description: l.profileTranslation.translation, entities: { description: l.profileTranslation.entities }, withheldDescription: void 0, withheldEntities: void 0, animateIn: f };
                            return o.createElement(a.Z, b);
                        });
                }
                render() {
                    const { analytics: e, createLocalApiErrorHandler: t, disableTranslation: n, fetchStreamedGrokTranslation: s, fetchTranslation: i, style: d, translation: c, translationFetchStatus: u, userId: m, userLanguage: p, withOriginalText: h, ...f } = this.props;
                    return o.createElement(l.Z, { disableTranslation: this.props.disableTranslation, fetchTranslation: this._fetchTranslation, key: m, originLanguage: c && c.profileTranslation.localizedSourceLanguage, scribeElement: "translate_bio", streamedTranslationFetchStatus: c && c.profileTranslation.streamedTranslationFetchStatus, style: d, translateButtonText: T, translatedMessage: this._renderTranslation(), translationFetchStatus: u, translationSource: c && c.profileTranslation.translationSource, translationState: c && c.profileTranslation.translationState, useGrokTranslation: this._useGrokTranslation(), withOriginalText: h }, o.createElement(a.Z, (0, r.Z)({}, f, { userId: m })));
                }
            }
            E.contextType = c.rC;
            const I = M(E);
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => s });
            var r = n(323265),
                o = n(655352),
                a = n(952793);
            const s = () => (0, a.hC)("rweb_sourcemap_migration") && (0, o.ZP)() && !r.ZP.isMobileOS();
        },
        507986: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.15"), n.e("icons.12"), n.e("icons.18"), n.e("icons.6"), n.e("modules.common-e907d115"), n.e("modules.common-e019dbda"), n.e("icons.14"), n.e("loader.ProfileClusterFollow")]).then(n.bind(n, 751154)) });
        },
        103335: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(856674);
            const o = (e, t) => [e, t].sort(r.ZP).join("-");
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => o, NB: () => a, P2: () => s, j3: () => r, pR: () => i });
            const r = 5e4,
                o = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                a = (o.RICHTEXT, o.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                s = { about: a.ABOUT, work_experience: a.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => h, Kh: () => m, ZU: () => u, hW: () => b, s1: () => p, uR: () => f });
            var r = n(990242),
                o = n.n(r),
                a = n(111677),
                s = n.n(a),
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
                                  r = o()(l.wJ, n),
                                  a = o()(t, r.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...r.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                r = t.result?.content,
                                o = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0),
                                a = (r?.active_role ? new Date() : u(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (o.getFullYear() !== a.getFullYear()) return a.getFullYear() - o.getFullYear();
                            if (o.getMonth() !== a.getMonth()) return a.getMonth() - o.getMonth();
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
                o = n(483677),
                a = n(782578),
                s = n(393058),
                i = n(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && o.Z.getForGallery(e);
                    return t ? { rgb: y(t), rgba: l(t, 0.9) } : m;
                },
                c = i.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                h = (e, t) => {
                    const { containerHeight: n, containerWidth: r, mediaHeight: o, mediaWidth: s } = e,
                        i = s && o ? s / o : 1,
                        l = i > 1,
                        d = t ? 400 : c,
                        m = l && (!s || s <= d) ? u(r, d) : r,
                        p = l || (o && !(o <= d)) ? n : u(n, d);
                    return a.Z.getContainDimensions({ width: m, height: p }, i);
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
                o = n(125363),
                a = n(919022),
                s = n(788210);
            const i = () => {
                const { userClaims: e } = (0, r.QZ)(),
                    t = (0, o.v9)(a.ZP.selectViewerUser),
                    n = (0, s.Z)(),
                    i = t?.is_blue_verified,
                    l = e.isPaidVerifiedOrg() || e.isFreeVerifiedOrg() || e.isLegacyVerifiedOrg() || e.isVerifiedOrgAffiliate();
                return n && !i && !l && !("Government" === t?.verified_type || "Business" === t?.verified_type);
            };
        },
        788210: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(443781);
            const a = () => {
                const { userClaims: e } = r.useContext(o.rC);
                return e.hasSubscription("premium_standard") || e.hasSubscription("premium_plus") || e.isVerifiedOrg() || e.isVerifiedOrgAffiliate();
            };
        },
        656520: (e, t, n) => {
            function r() {
                return { section: "category_label", action: "impression" };
            }
            function o() {
                return { section: "category_label", action: "click" };
            }
            function a() {
                return { component: "professional_conversion", action: "click" };
            }
            function s() {
                return { component: "professional_settings", action: "click" };
            }
            n.d(t, { Lr: () => a, _L: () => r, ti: () => s, yL: () => o });
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => o, n5: () => s });
            var r = n(42508);
            const o = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: r, user: o, userProfileInterstitialType: s, viewerUserId: i }) => {
                    const l = !!i && i === o.id_str,
                        d = o.blocked_by,
                        c = o.blocking,
                        u = a({ displaySensitiveMedia: e, isOwnProfile: l, user: o, userProfileInterstitialType: s }),
                        m = (l || !r) && !n;
                    return { avatar: l || (!u && !t && !n && !r), badges: l || !r, description: l || (!c && !d && !u && !n && !r), followButton: !(l || d || u || t || n || r), followersYouKnow: !l && !d && !c && !u && !t && !n && !r && (o.following || !o.protected), followIndicator: !r, fullName: m, label: m, stats: l || (!d && !u && !n && !r), subscriptionsCount: l || !o.has_hidden_subscriptions_on_profile };
                },
                a = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: o }) => (o === r.Z.SensitiveMedia || o === r.Z.OffensiveProfileContent) && !(t || n.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const r = n.blocked_by,
                        o = n.protected && !n.following;
                    return t ? e || !o : e || (!o && !r);
                };
        },
        893664: (e, t, n) => {
            n.d(t, { g: () => i });
            var r = n(882220),
                o = (n(585488), n(277660)),
                a = n.n(o),
                s = n(835546);
            const i = (e) => {
                const t = a()(r.Z, e.user);
                return !(!t.relationship_perspectives || !t.privacy) && (0, s.n5)({ isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: e.isSoftBlockEnabled, user: { blocked_by: Boolean(t.relationship_perspectives?.blocked_by), following: Boolean(t.relationship_perspectives?.following), protected: Boolean(t.privacy?.protected) } });
            };
        },
        690282: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(801501);
            function a(e, t) {
                const n = r.useRef();
                r.useEffect(() => {
                    n.current = e;
                }, [e]),
                    r.useEffect(() => {
                        const e = n.current;
                        if (e && t) {
                            const n = new o.Z(t).interval(e);
                            n.start();
                            return () => n.stop();
                        }
                    }, [t]);
            }
        },
        806528: (e, t, n) => {
            n.d(t, { Bz: () => d, ZW: () => h, ey: () => u, fw: () => i, iG: () => p, wM: () => l });
            var r = n(499627),
                o = n(341276);
            const a = "geoLocation",
                s = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[a],
                l = (e) => e[a].permissionStatus,
                d = (e) => e[a].position,
                c = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: c }),
                m = "rweb/geoLocation/SET_POSITION",
                p = () => (e, t) =>
                    f()
                        .then((t) => e({ payload: t, type: m }))
                        .catch((t) => (e(u(o.S.denied)), Promise.reject(t))),
                h = () => (e, t) => (d(t()) ? Promise.resolve() : e(p())),
                f = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            r.Z.register({
                [a]: function (e = s, t) {
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
            n.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, n) => {
            n.d(t, { Hq: () => y, c1: () => h, lP: () => b, og: () => f });
            var r = n(745123);
            var o = n(499627),
                a = n(917799),
                s = n(56519),
                i = n(919022);
            const l = "knownFollowers",
                d = `rweb/${l}`,
                c = [],
                u = (0, a.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            o.Z.register({
                [l]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: r, users: o } = n && n.result,
                            { user_id: a } = t.meta || {};
                        return a ? { ...e, [a]: { knownFollowersCount: r, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const p = (e, t) => e[l][t],
                h = (e, t) => {
                    if (t) {
                        const o = g(e, t);
                        return (n = i.ZP.selectMany(e, o)), (r = (e) => !!e), n.filter(r);
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
                    (t, n, { api: o }) =>
                        void 0 !== b(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
                                          (0, a._O)(t, { request: o.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
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
                o = n(750085),
                a = n(218951);
            const s = (e, t) => (0, a.Z)({ timelineId: `businessProfileTeam-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchBusinessProfileTeam, getEndpointParams: ({ count: n, cursor: r }) => ({ count: n, cursor: "string" == typeof r ? r : void 0, userId: e, teamName: t }) }, formatResponse: o.Z, context: "FETCH_BUSINESS_PROFILE_TEAM_TIMELINE", perfKey: "businessProfileTeam-GraphQL" });
        },
        392280: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(33055),
                o = n(750085),
                a = n(218951);
            function s(e) {
                return (0, a.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(r.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: n, cursor: r } = t,
                                o = { count: n, userId: e, cursor: void 0 };
                            return "string" == typeof r && (o.cursor = r), o;
                        },
                    },
                    formatResponse: o.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
        611186: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(33055),
                o = n(750085),
                a = n(218951);
            const s = (e) => (0, a.Z)({ timelineId: `userMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchUserMedia, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }, formatResponse: o.Z, context: "FETCH_MEDIA_TIMELINE", perfKey: "userMedia-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e019dbda.e2ed3bda.js.map
