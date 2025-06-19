(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Notifications"],
    {
        405008: (e) => {
            e.exports = { queryId: "CRhq23NLRTvAcpaMn7t10Q", operationName: "NotificationsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        233935: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => b });
            var d = o(202784),
                n = o(154003),
                r = o(392237),
                t = o(111677),
                l = o.n(t),
                s = o(698891);
            const i = "settingsAppBar",
                c = l().bb081ea2,
                u = d.memo(({ onPress: e, pullRight: a, to: o }) => d.createElement(n.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: d.createElement(s.default, null), link: o, onPress: e, pullRight: a, style: h.button, testID: i, type: "primaryText" })),
                h = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                b = u;
        },
        789831: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => i });
            var d = o(807896),
                n = o(202784),
                r = o(325686),
                t = o(392237),
                l = o(655352);
            const s = t.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: a, fab: o, shouldRenderFab: t = !0, style: i, withoutBottomPadding: c, ...u }) => {
                    const h = a || r.Z,
                        b = t && !(0, l.ZP)();
                    return n.createElement(h, (0, d.Z)({}, u, { style: [b && !c && s.root, i] }), e, b ? o : null);
                };
        },
        817682: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => v });
            var d = o(202784),
                n = o(325686),
                r = o(688715),
                t = o(731708),
                l = o(529356),
                s = o(392237),
                i = o(111677),
                c = o.n(i),
                u = o(890899),
                h = o(616894),
                b = o(165243),
                m = o(725516);
            const p = c().aed79c54,
                D = c().h12044a4,
                M = c().f100e566,
                w = c().a0d68f4e,
                f = c().b00255b6,
                y = c().geea29ee,
                A = c().c54678e8,
                g = c().ga4fa180,
                _ = c().h8dde772,
                S = c().i859a9d4,
                k = (0, r.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                P = () => d.createElement(d.Fragment, null, d.createElement(t.ZP, null, D), d.createElement(n.Z, { style: T.details }, d.createElement(u.default, { style: T.icon }), d.createElement(n.Z, null, d.createElement(t.ZP, { style: T.title }, M), d.createElement(t.ZP, null, w)), d.createElement(h.default, { style: T.icon }), d.createElement(n.Z, null, d.createElement(t.ZP, { style: T.title }, f), d.createElement(t.ZP, null, y)), d.createElement(b.default, { style: T.icon }), d.createElement(n.Z, null, d.createElement(t.ZP, { style: T.title }, A), d.createElement(t.ZP, null, g)))),
                C = () => d.createElement(n.Z, { style: T.footerContainer }, d.createElement(t.ZP, { align: "center" }, _, " ", d.createElement(t.ZP, { color: "text", link: k, style: T.footerLearnMoreLink, withUnderline: !0 }, S))),
                I = () => d.createElement(t.ZP, { style: T.headline }, p),
                T = s.default.create((e) => ({ details: { display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: e.spaces.space24, gridRowGap: e.spaces.space24, paddingTop: e.spaces.space32 }, footerContainer: { display: "flex", alignItems: "center" }, footerLearnMoreLink: { whiteSpace: "nowrap" }, headline: { fontSize: e.fontSizes.title2 }, icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 }, image: { width: "100%" }, title: { color: e.colors.text, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.medium, paddingBottom: e.spaces.space4 } })),
                v = (e) => {
                    const { actionLabel: a, onAction: o, onClose: n, onSecondaryAction: r, secondaryActionLabel: t } = e,
                        s = (0, m.z)();
                    d.useEffect(() => {
                        s.scribeAction("impression");
                    }, [s]);
                    const i = r
                            ? (e) => {
                                  s.scribeAction("secondary_cta"), r?.(e);
                              }
                            : void 0,
                        c = n
                            ? () => {
                                  s.scribeAction("close"), n();
                              }
                            : void 0;
                    return d.createElement(l.Z, {
                        actionLabel: a,
                        footer: d.createElement(C, null),
                        graphicDisplayMode: "none",
                        headline: d.createElement(I, null),
                        isFullHeightOnMobile: !0,
                        onAction: (e) => {
                            s.scribeAction("primary_cta"), o(e);
                        },
                        onClose: c,
                        onSecondaryAction: i,
                        secondaryActionLabel: t,
                        subtext: d.createElement(P, null),
                        withBottomPadding: !0,
                    });
                };
        },
        507651: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => i });
            var d = o(807896),
                n = o(202784),
                r = o(107267),
                t = o(403556),
                l = o(791632);
            const s = (e) => {
                    const a = (0, r.useHistory)(),
                        { isCompact: o, ...s } = e;
                    return n.createElement(t.Z, (0, d.Z)({}, s, { isCompact: o || (0, l.HD)(a) }));
                },
                i = n.memo(s);
        },
        387524: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => p });
            var d = o(807896),
                n = o(202784),
                r = o(325686),
                t = o(292627),
                l = o(537392),
                s = o(392237),
                i = o(365023),
                c = o(392027),
                u = o(774654),
                h = o(725516),
                b = o(443781);
            const m = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                p = (e) => {
                    const { "aria-label": a, label: o, onPress: p, scribeComponent: D, ...M } = e,
                        { loggedInUserId: w } = n.useContext(b.rC),
                        f = (0, h.z)(),
                        y = n.useCallback(
                            (e) => {
                                f.scribe({ component: D, action: "click" }), p && p(e);
                            },
                            [f, p, D],
                        ),
                        A = u.ZM.useCollapsibleNavBars(),
                        g = [...u.Ah({ elementPosition: "bottom" }), A && m.fabStaysAboveSafeArea];
                    return w
                        ? n.createElement(
                              t.Z.FloatingAction,
                              null,
                              n.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const t = e > s.default.theme.breakpoints.large,
                                      l = e > s.default.theme.breakpoints.medium,
                                      u = e < s.default.theme.breakpoints.micro,
                                      h = [m.root, l && m.rootMedium, t && m.rootLarge],
                                      b = [m.fab, t && m.fabLarge, u && m.fabMicro, g];
                                  return n.createElement(
                                      r.Z,
                                      { "aria-label": a, pointerEvents: "box-none", role: "complementary", style: h },
                                      n.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, l) => n.createElement(r.Z, (0, d.Z)({ ref: e() }, l({ style: b })), n.createElement(c.Z, (0, d.Z)({}, M, { "aria-label": a, label: t ? o : void 0, onPress: y, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => s });
            o(136728);
            var d = o(202784),
                n = o(387524),
                r = o(635510);
            const t = "/compose/post";
            class l extends d.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: a, history: o } = this.props,
                                d = { pathname: t, state: (a && a()) || {} };
                            o.push(d);
                        });
                }
                render() {
                    const { "aria-label": e, icon: a, label: o, scribeComponent: l } = this.props;
                    return d.createElement(n.Z, { "aria-label": e, href: t, icon: a, label: o, onPress: this._handlePress, scribeComponent: l, testID: r.Z.tweet });
                }
            }
            const s = l;
        },
        32677: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => u });
            var d = o(202784),
                n = o(111677),
                r = o.n(n),
                t = o(186444),
                l = o(355883);
            const s = r().j0179e90,
                i = r().ee69d769({ verb: "" }),
                c = d.createElement(t.default, null),
                u = ({ getLocationState: e, history: a }) => d.createElement(l.Z, { "aria-label": s, getLocationState: e, history: a, icon: c, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => d });
            const d = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => c });
            var d = o(202784),
                n = o(500002),
                r = o(668214),
                t = o(997174),
                l = o(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: t.NH }))
                .withAnalytics();
            class i extends d.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: o, search: d },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: t },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && a.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const i = n || l;
                    ((i && n !== l) || (!i && o !== r) || d !== t || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: o, updateTweetDetailNav: d } = e;
                    a.scribePageImpression(), o(a.contextualScribeNamespace, a.contextualScribeData), d(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, n.ZP)(s(i));
        },
        927389: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => c });
            var d = o(202784),
                n = o(247056),
                r = o(392237);
            const t = (0, o(523561).Z)({ loader: () => o.e("loader.FeedbackSheet").then(o.bind(o, 774426)) });
            var l = o(725516),
                s = o(851623);
            const i = r.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                c = (0, l.Z)((e) => {
                    const { analytics: a, feedbackItems: o, isDisplayedOnMedia: r } = e,
                        l = d.useCallback((e) => (o ? d.createElement(t, { actionItems: o, onClose: e }) : null), [o]),
                        c = d.useCallback(() => a.scribe({ element: "caret", action: "click" }), [a]);
                    return o && o.length > 0 ? d.createElement(n.Z, { onClick: c, renderActionMenu: l, style: i.curationControl, testID: s.Z.caret, withDarkBackground: r }) : null;
                });
        },
        337455: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => s });
            var d = o(202784),
                n = o(411916),
                r = o.n(n),
                t = o(373463),
                l = o.n(t);
            function s(e) {
                class a extends d.Component {
                    constructor(e, a) {
                        super(e, a), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        r()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? d.createElement(e, this.props) : null;
                    }
                }
                return l()(a, e);
            }
        },
        552378: (e, a, o) => {
            "use strict";
            o.d(a, { C: () => t });
            var d = o(807896),
                n = o(202784);
            class r extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { isLoaded: !1 });
                }
                componentDidMount() {
                    return (this._isMounted = !0), this.load();
                }
                componentDidUpdate(e) {
                    return this.props.modules === e.modules ? null : this.load();
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                load() {
                    this.setState({ isLoaded: !1 });
                    const { modules: e } = this.props,
                        a = Object.keys(e);
                    return Promise.all(a.map((a) => e[a]()))
                        .then((e) => a.reduce((a, o, d) => ((a[o] = e[d]), a), {}))
                        .then((e) => {
                            if (!this._isMounted) return null;
                            this.setState({ modules: e, isLoaded: !0 });
                        });
                }
                render() {
                    const { isLoaded: e } = this.state,
                        a = e ? this.state.modules : {};
                    return n.Children.only(this.props.children(a || {}));
                }
            }
            const t = (e, a) => (o) => n.createElement(r, { modules: a }, (a) => n.createElement(e, (0, d.Z)({}, a, o)));
        },
        451275: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { NOTIFICATIONS_CONTEXT: () => w, NOTIFICATIONS_PERFKEY: () => f, default: () => S, fetchAllNotificationsTimeline: () => _, notificationsModule: () => A, updateLastSeenCursor: () => g });
            var d = o(516951),
                n = o(414742),
                r = o(405008),
                t = o.n(r),
                l = o(934309);
            const s = (0, n.kj)((e) => !!!e?.viewer_v2?.user_results?.result?.notification_timeline?.timeline, "GQL Notifications: Failed to query for Notifications timeline"),
                i = ({ apiClient: e, featureSwitches: a }) => ({
                    fetchNotifications: ({ count: a, cursor: o, timelineType: d, userId: n }) => {
                        const r = { timeline_type: d, cursor: o, count: a };
                        return e.graphQL(t(), r, s).then((e) => {
                            const a = e?.viewer_v2?.user_results?.result?.notification_timeline?.timeline;
                            return a || l.cY;
                        });
                    },
                });
            var c = o(644829),
                u = o(750085),
                h = o(615656),
                b = o(71620),
                m = o(192337),
                p = o(218951),
                D = o(514915),
                M = o(525202);
            const w = "FETCH_NOTIFICATIONS_TIMELINE_GRAPHQL",
                f = "notificationsGraphQL",
                y = new Map([
                    [M.l.All, "All"],
                    [M.l.Mentions, "Mentions"],
                    [M.l.Verified, "Verified"],
                    [M.l.Subscribers, "SuperFollowers"],
                ]),
                A = (e = M.l.All, a = void 0) => {
                    const o = y.get(e) || "All";
                    return (0, p.Z)({ timelineId: `notifications-${e}-${a ?? ""}`, network: { getEndpoint: (e) => e.withEndpoint(i).fetchNotifications, getEndpointParams: ({ count: e, cursor: d, polling: n }) => ({ count: e, cursor: "string" == typeof d ? d : void 0, timelineType: o, userId: a }) }, formatResponse: u.Z, postFetchAction: D.Z, context: "FETCH_NOTIFICATIONS_TIMELINE", perfKey: "notifications", staleIntervalMs: 5e3, actAsUserId: a });
                },
                g =
                    (e = M.l.All, a = void 0) =>
                    (o, n, { api: r }) => {
                        const t = A(e, a),
                            l = t && m.f5(t.selectEntries(n()));
                        if (l) {
                            const a = { cursor: m.NA(l), type: e },
                                n = o((0, b.zr)("APP_UPDATE_NOTIFICATION_LAST_READ")({ [h.ZP.AppInReadOnlyMode]: { customAction: d.Z } }));
                            r.withEndpoint(c.Z).updateNotificationsLastSeenCursor(a).catch(n);
                        }
                    },
                _ = A(M.l.All).fetchInitialOrTop,
                S = A(M.l.All);
        },
        853292: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { default: () => t });
            var d = o(202784),
                n = o(525202),
                r = o(934712);
            const t = (e) => {
                const a = d.useMemo(() => (0, r.p)(n.l.All), []);
                return d.createElement(a, e);
            };
        },
        400115: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { default: () => t });
            var d = o(202784),
                n = o(525202),
                r = o(934712);
            const t = (e) => {
                const a = d.useMemo(() => (0, r.p)(n.l.Mentions), []);
                return d.createElement(a, e);
            };
        },
        80550: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { NotificationsScreen: () => O, default: () => U });
            var d = o(202784),
                n = o(107267),
                r = o(108362),
                t = o(111677),
                l = o.n(t),
                s = o(233935),
                i = o(718e3),
                c = o(789831),
                u = o(252021),
                h = o(507651),
                b = o(443781),
                m = o(32677),
                p = o(652904),
                D = o(655352),
                M = o(337455),
                w = o(615027),
                f = o(717988),
                y = o(668214),
                A = o(806960),
                g = o(390387);
            const _ = (0, y.Z)()
                .propsFromState(() => ({ allNotificationsUnreadCount: A.pm, isLoggedInUserActiveCreator: g.WM }))
                .withAnalytics({ page: "ntab" });
            var S = o(198368);
            const k = l().eb75875e,
                P = l().f8321d82,
                C = l().cdb53d7a,
                I = l().h3290872,
                T = l().bc8baa08,
                v = l().a98ba778,
                E = d.createElement(s.Z, { pullRight: !0, to: "/settings/notifications" }),
                B = l().eb75875e,
                Z = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                o.e("icons.5"),
                                o.e("icons.25"),
                                o.e("icons.22"),
                                o.e("icons.6"),
                                o.e("icons.4"),
                                o.e("icons.9"),
                                o.e("icons.15"),
                                o.e("icons.7"),
                                o.e("icons.3"),
                                o.e("icons.20"),
                                o.e("icons.2"),
                                o.e("icons.18"),
                                o.e("icons.27"),
                                o.e("icons.13"),
                                o.e("modules.common-e907d115"),
                                o.e("modules.common-e019dbda"),
                                o.e("icons.0"),
                                o.e("icons.24"),
                                o.e("modules.audio-6107ac1a"),
                                o.e("modules.audio-b953418a"),
                                o.e("modules.audio-7c51e6a7"),
                                o.e("modules.audio-04db59e9"),
                                o.e("modules.audio-76583d6c"),
                                o.e("modules.audio-b7a8a5fb"),
                                o.e("modules.audio-51f6e793"),
                                o.e("modules.audio-e019dbda"),
                                o.e("modules.audio-262c94d4"),
                                o.e("modules.audio-c6fe4ea4"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                                o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                o.e("bundle.Notifications"),
                            ]).then(o.bind(o, 853292)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                x = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                o.e("icons.5"),
                                o.e("icons.25"),
                                o.e("icons.22"),
                                o.e("icons.6"),
                                o.e("icons.4"),
                                o.e("icons.9"),
                                o.e("icons.15"),
                                o.e("icons.7"),
                                o.e("icons.3"),
                                o.e("icons.20"),
                                o.e("icons.2"),
                                o.e("icons.18"),
                                o.e("icons.27"),
                                o.e("icons.13"),
                                o.e("modules.common-e907d115"),
                                o.e("modules.common-e019dbda"),
                                o.e("icons.0"),
                                o.e("icons.24"),
                                o.e("modules.audio-6107ac1a"),
                                o.e("modules.audio-b953418a"),
                                o.e("modules.audio-7c51e6a7"),
                                o.e("modules.audio-04db59e9"),
                                o.e("modules.audio-76583d6c"),
                                o.e("modules.audio-b7a8a5fb"),
                                o.e("modules.audio-51f6e793"),
                                o.e("modules.audio-e019dbda"),
                                o.e("modules.audio-262c94d4"),
                                o.e("modules.audio-c6fe4ea4"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                                o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                o.e("bundle.Notifications"),
                            ]).then(o.bind(o, 400115)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                R = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                o.e("icons.5"),
                                o.e("icons.25"),
                                o.e("icons.22"),
                                o.e("icons.6"),
                                o.e("icons.4"),
                                o.e("icons.9"),
                                o.e("icons.15"),
                                o.e("icons.7"),
                                o.e("icons.3"),
                                o.e("icons.20"),
                                o.e("icons.2"),
                                o.e("icons.18"),
                                o.e("icons.27"),
                                o.e("icons.13"),
                                o.e("modules.common-e907d115"),
                                o.e("modules.common-e019dbda"),
                                o.e("icons.0"),
                                o.e("icons.24"),
                                o.e("modules.audio-6107ac1a"),
                                o.e("modules.audio-b953418a"),
                                o.e("modules.audio-7c51e6a7"),
                                o.e("modules.audio-04db59e9"),
                                o.e("modules.audio-76583d6c"),
                                o.e("modules.audio-b7a8a5fb"),
                                o.e("modules.audio-51f6e793"),
                                o.e("modules.audio-e019dbda"),
                                o.e("modules.audio-262c94d4"),
                                o.e("modules.audio-c6fe4ea4"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                                o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                o.e("bundle.Notifications"),
                            ]).then(o.bind(o, 217999)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                L = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                o.e("icons.5"),
                                o.e("icons.25"),
                                o.e("icons.22"),
                                o.e("icons.6"),
                                o.e("icons.4"),
                                o.e("icons.9"),
                                o.e("icons.15"),
                                o.e("icons.7"),
                                o.e("icons.3"),
                                o.e("icons.20"),
                                o.e("icons.2"),
                                o.e("icons.18"),
                                o.e("icons.27"),
                                o.e("icons.13"),
                                o.e("modules.common-e907d115"),
                                o.e("modules.common-e019dbda"),
                                o.e("icons.0"),
                                o.e("icons.24"),
                                o.e("modules.audio-6107ac1a"),
                                o.e("modules.audio-b953418a"),
                                o.e("modules.audio-7c51e6a7"),
                                o.e("modules.audio-04db59e9"),
                                o.e("modules.audio-76583d6c"),
                                o.e("modules.audio-b7a8a5fb"),
                                o.e("modules.audio-51f6e793"),
                                o.e("modules.audio-e019dbda"),
                                o.e("modules.audio-262c94d4"),
                                o.e("modules.audio-c6fe4ea4"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                                o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                                o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                o.e("bundle.Notifications"),
                            ]).then(o.bind(o, 100273)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                N = { to: S._N, key: P, label: P, retainScrollPosition: !1 },
                F = { to: S.JV, key: C, label: C, retainScrollPosition: !1 },
                z = { to: S.JK, key: I, label: I, retainScrollPosition: !1 },
                W = { to: S.ag, key: T, label: T, retainScrollPosition: !1 },
                H = () => d.createElement(w.Z, { to: S._N }),
                O = (e) => {
                    const { featureSwitches: a } = d.useContext(b.rC),
                        { history: o, isLoggedInUserActiveCreator: t } = e,
                        l = a.isTrue("responsive_web_subscribers_ntab_for_creators_enabled"),
                        s = t && l,
                        M = d.useMemo(() => {
                            const e = [N, z, F];
                            return s && e.splice(2, 0, W), e;
                        }, [s]),
                        w = s ? L : H,
                        f = d.createElement(n.Switch, null, d.createElement(n.Route, { component: Z, exact: !0, path: S._N }), d.createElement(n.Route, { component: x, exact: !0, path: S.JV }), d.createElement(n.Route, { component: R, exact: !0, path: S.JK }), d.createElement(n.Route, { component: w, exact: !0, path: S.ag }), d.createElement(n.Route, { component: H, exact: !0, path: S.Im })),
                        y = d.useMemo(() => d.createElement(h.Z, { alignFirstItem: (0, D.ZP)(), "aria-label": v, links: M }), [M]);
                    return d.createElement(
                        p.Z,
                        null,
                        d.createElement(u.Z, {
                            documentTitle: k,
                            history: o,
                            primaryContent: (() => {
                                const e = d.createElement(m.Z, { history: o });
                                return d.createElement(c.Z, { component: r.Z, fab: e }, f);
                            })(),
                            rightControl: E,
                            secondaryBar: y,
                            sidebarContent: d.createElement(i.Z, null),
                            title: B,
                        }),
                    );
                },
                U = _(O);
        },
        934712: (e, a, o) => {
            "use strict";
            o.d(a, { p: () => re });
            var d = o(202784),
                n = o(731708),
                r = o(688715),
                t = o(457311),
                l = o(111677),
                s = o.n(l),
                i = o(325686),
                c = o(913309),
                u = o(392237),
                h = o(927389),
                b = o(293115),
                m = o(725516);
            const p = o.p + "illustration_unmention_1200w.a6d67a6a.png",
                D = o.p + "illustration_unmention_1800w.6250707a.png",
                M = 600,
                w = 175,
                f = {
                    image: { url: D, width: 1800, height: 525 },
                    customVariants: [
                        { uri: o.p + "illustration_unmention_600w.b146e2ea.png", width: M, height: w },
                        { uri: p, width: 1200, height: 350 },
                        { uri: D, width: 1800, height: 525 },
                    ],
                };
            var y = o(817682);
            const A = "leave_this_conversation_inline_education",
                g = s().j24c37b2,
                _ = s().e839db3a,
                S = s().eba8b1c8,
                k = s().i859a9d4,
                P = s().j745b8a6,
                C = ({ onClose: e }) => d.createElement(b.nO, { namespace: { element: "leave_this_conversation_education_sheet" } }, d.createElement(y.Z, { actionLabel: g, onAction: e, onClose: e })),
                I = u.default.create((e) => ({ footerLearnMoreLink: { whiteSpace: "nowrap" }, wrapper: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small } })),
                T = (e) => {
                    const { onDismiss: a } = e,
                        [o, r] = d.useState(!1),
                        t = (0, m.z)();
                    d.useEffect(() => {
                        t.scribe({ element: A, action: "impression" });
                    }, [t]);
                    const l = [
                        {
                            text: _,
                            onClick: () => {
                                t.scribe({ element: A, action: "dismiss" }), a();
                            },
                        },
                    ];
                    return d.createElement(
                        d.Fragment,
                        null,
                        o &&
                            d.createElement(C, {
                                onClose: () => {
                                    r(!1);
                                },
                            }),
                        d.createElement(
                            i.Z,
                            { style: I.wrapper },
                            d.createElement(c.Z, {
                                headline: S,
                                image: f.image,
                                imageVariants: f.customVariants,
                                rightControl: d.createElement(h.Z, { feedbackItems: l, isDisplayedOnMedia: !0 }),
                                subtext: d.createElement(
                                    d.Fragment,
                                    null,
                                    P,
                                    " ",
                                    d.createElement(
                                        n.ZP,
                                        {
                                            color: "text",
                                            onClick: () => {
                                                r(!0);
                                            },
                                            size: "subtext1",
                                            style: I.footerLearnMoreLink,
                                            weight: "bold",
                                            withInteractiveStyling: !0,
                                            withUnderline: !0,
                                        },
                                        k,
                                    ),
                                ),
                            }),
                        ),
                    );
                };
            var v = o(443781),
                E = o(652904),
                B = o(810641),
                Z = o(900062);
            o(571372);
            const x = Object.freeze({ VerificationCheck: "VerificationCheck" }),
                R = Object.freeze({
                    [x.VerificationCheck]: (function (e) {
                        if (3 !== e.length) throw new Error("url list must be 3 urls for each variant (400x200, 800x400, 1200x600)");
                        const [a, o, d] = e;
                        return [
                            { width: 400, height: 200, uri: a },
                            { width: 800, height: 400, uri: o },
                            { width: 1200, height: 600, uri: d },
                        ];
                    })(["https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-1200x600.v1.ef1651f9.png"]),
                });
            var L = o(552378),
                N = o(525202),
                F = o(912021),
                z = o(962741),
                W = o(668214),
                H = o(806960),
                O = o(175856),
                U = o(5849);
            const V = (0, F.Z)((e, a) => a && a.notificationsModule(e, void 0));
            var $ = o(351322),
                G = o(801184),
                j = o(335632),
                q = o(263863);
            const Q = { ...(0, j.G)({ tweetDismissable: !0, withMuteConversation: !0 }), [z.ZP.Tweet]: $.ov({ selectDisplayType: (e) => e.content.displayType, handlers: { [q.Z.Tweet]: (0, G.Cw)({ withMuteConversation: !0, withUnreadStyles: !0 }), [q.Z.QuotedTweet]: (0, G.$Q)({ isCondensed: !0 }) } }) },
                K = s().eb75875e,
                X = s().e9f1fbcc,
                J = s().j887d006,
                Y = s().c06d4306,
                ee = d.createElement(s().I18NFormatMessage, { $i18n: "d39ad44d" }, d.createElement(n.ZP, { color: "text", link: (0, r.ju)("https://help.x.com/managing-your-account/about-twitter-verified-accounts"), weight: "bold", withUnderline: !0 }, s().e3f9838d)),
                ae = s().ge7c661a,
                oe = s().d3de3b5c;
            class de extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._getEmptyMessageBody = () => {
                            switch (this.props.notificationsType) {
                                case N.l.Mentions:
                                    return Y;
                                case N.l.Verified:
                                    return ae;
                                case N.l.Subscribers:
                                    return oe;
                                default:
                                    return J;
                            }
                        }),
                        (this._getEmptyMessageHeader = () => X),
                        (this._renderTwitterBlueVerifiedEmptyState = () => d.createElement(t.Z, { header: X, imageVariants: R.VerificationCheck, message: ee, onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression })),
                        (this._renderSubscribersEmptyState = () => d.createElement(t.Z, { header: X, message: oe, onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression })),
                        (this._renderEmptyTimeline = () => {
                            const { notificationsType: e } = this.props;
                            return e === N.l.Verified && this.context.featureSwitches.isTrue("responsive_web_twitter_blue_verified_badge_ntab_empty_state_enabled") ? this._renderTwitterBlueVerifiedEmptyState() : e === N.l.Subscribers ? this._renderSubscribersEmptyState() : d.createElement(t.Z, { header: this._getEmptyMessageHeader(), message: this._getEmptyMessageBody(), onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression });
                        }),
                        (this._handleEmptyTimelineImpression = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "empty_message", action: "impression" });
                        }),
                        (this._handleEmptyTimelineButtonPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "empty_message", element: "primary_cta", action: "click" });
                        }),
                        (this._handleAtTop = () => {
                            this._updateLastReadIfNeeded();
                        }),
                        (this._renderTimelineHeader = () => {
                            const { addLeaveThisConversationEducationFlag: e, notificationsType: a, shouldShowUnmentionEducation: o, timelineHasTweets: n } = this.props;
                            return o && a === N.l.Mentions && n && this.context.featureSwitches.isTrue("dont_mention_me_mentions_tab_education_enabled") ? d.createElement(T, { onDismiss: e }) : void 0;
                        });
                }
                componentDidMount() {
                    const { notificationsType: e, setNotificationsPageLoaded: a, setNotificationsType: o } = this.props;
                    o(e), a(!0);
                }
                componentWillUnmount() {
                    const { markAllAsRead: e, notificationsType: a, setNotificationsPageLoaded: o } = this.props;
                    this._updateLastReadIfNeeded(), a === N.l.All && e?.(), o(!1);
                }
                render() {
                    const { notificationsModule: e } = this.props;
                    return e ? d.createElement(E.Z, null, d.createElement(B.Z, { entryConfiguration: Q, header: this._renderTimelineHeader(), key: "notification-timeline", module: e, onAtTop: this._handleAtTop, renderEmptyState: this._renderEmptyTimeline, title: K })) : null;
                }
                _updateLastReadIfNeeded() {
                    const { notificationsType: e, unreadCount: a, updateLastRead: o } = this.props;
                    a && o(e);
                }
            }
            de.contextType = v.rC;
            const ne = (e) =>
                    (0, L.C)(
                        ((e) => {
                            const a = (0, F.Z)(V);
                            return (0, W.Z)()
                                .propsFromState(() => ({
                                    shouldShowUnmentionEducation: (e) => (0, O.t5)(e, O.QV),
                                    unreadCount: (o, { history: d, ntabData: n }) => a(e, n)?.selectUnreadEntriesCount(o),
                                    timelineHasTweets: (o, { history: d, ntabData: n }) => {
                                        const r = a(e, n),
                                            t = r?.selectEntries(o),
                                            l = t?.some((e) => e.type === z.ZP.Tweet);
                                        return !!l;
                                    },
                                }))
                                .propsFromActions(({ history: o, ntabData: d }) => ({
                                    setNotificationsPageLoaded: (e) => (a) => {
                                        a((0, H.Wl)(e));
                                    },
                                    addLeaveThisConversationEducationFlag: () => (0, O.pj)(O.QV),
                                    markAllAsRead: a(e, d)?.markAllAsRead,
                                    updateLastRead: (e) => (a, o) => {
                                        const n = d?.updateLastSeenCursor;
                                        n && a(n(e)), a((0, H.SE)(0));
                                    },
                                    setNotificationsType: U.BZ,
                                }))
                                .adjustStateProps(({ shouldShowUnmentionEducation: o, timelineHasTweets: d, unreadCount: n }, { history: r, ntabData: t }) => ({ ntabData: null, notificationsModule: a(e, t), notificationsType: e, shouldShowUnmentionEducation: o, timelineHasTweets: d, unreadCount: n }))
                                .withAnalytics({ page: "ntab", section: e });
                        })(e)(de),
                        { ntabData: Z.Z },
                    ),
                re = (e) => ne(e);
        },
        100273: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { default: () => t });
            var d = o(202784),
                n = o(525202),
                r = o(934712);
            const t = (e) => {
                const a = d.useMemo(() => (0, r.p)(n.l.Subscribers), []);
                return d.createElement(a, e);
            };
        },
        217999: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { default: () => t });
            var d = o(202784),
                n = o(525202),
                r = o(934712);
            const t = (e) => {
                const a = d.useMemo(() => (0, r.p)(n.l.Verified), []);
                return d.createElement(a, e);
            };
        },
        392027: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => s });
            var d = o(202784),
                n = o(154003),
                r = o(392237);
            class t extends d.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: a, color: o, disabled: r, href: t, icon: s, label: i, onPress: c, renderMenu: u, style: h, testID: b } = this.props,
                        m = ((e, a) => ("primary" === e && "white" === a ? "whiteOnColor" : "white" === e && "primary" === a ? "primaryOnWhite" : a))(a, o);
                    return d.createElement(n.ZP, { "aria-label": e, backgroundColor: a, color: m, disabled: r, icon: s, link: t, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !i && l.iconOnly, h], testID: b }, i);
                }
            }
            t.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = t;
        },
        913309: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => p });
            var d = o(202784),
                n = o(325686),
                r = o(530525),
                t = o(731708),
                l = o(439592),
                s = o(154003),
                i = o(392237),
                c = o(444178);
            const u = "inlinePrompt",
                h = "inlinePrompt-primaryAction",
                b = "inlinePrompt-secondaryAction",
                m = "inlinePrompt-centeredImageContainer";
            class p extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, a, o) => {
                            let t = d.createElement(r.Z, { "aria-label": "", aspectMode: l.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: a, image: e });
                            return o && (t = d.createElement(c.Z, { link: o, role: "" }, " ", t)), e.isCentered ? d.createElement(n.Z, { style: D.centeredImage, testID: m }, d.createElement(n.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, t)) : e.style ? d.createElement(n.Z, { style: e.style }, t) : t;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? d.createElement(t.ZP, { align: "left", role: "heading", size: "title3", style: D.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? d.createElement(t.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: a, buttonType: o, style: r, testID: t }) => {
                            const { secondaryAction: l } = this.props,
                                { link: i, onClick: c, text: u } = e;
                            return d.createElement(n.Z, { style: [this.styles.actionContainer, r, { justifyContent: "flex-start" }], testID: t }, d.createElement(s.ZP, { link: i, onPress: c, size: a, style: { width: l ? "100%" : "auto" }, type: o }, u));
                        });
                }
                render() {
                    const { headline: e, image: a, imageActionUrl: o, imageVariants: r, primaryAction: t, rightControl: l, secondaryAction: s, shouldRenderBorder: i, subtext: c } = this.props;
                    return d.createElement(n.Z, { style: i ? [M.root, M.rootMargin] : D.root }, d.createElement(d.Fragment, null, a ? this._renderImage(a, r, o) : null, e || c || t || s ? d.createElement(n.Z, { style: this.styles.rootPadding, testID: u }, this._renderTitle(), this._renderBodyText(), t ? this._renderAction({ action: t, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: h }) : null, s ? this._renderAction({ action: s, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: b }) : null) : null), l ? d.createElement(n.Z, { style: D.rightControl }, l) : null);
                }
                get styles() {
                    return this.props.isCompact ? f : w;
                }
            }
            p.defaultProps = { shouldRenderBorder: !1 };
            const D = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                M = i.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                w = i.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                f = i.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
        403556: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => k });
            var d = o(807896),
                n = o(202784),
                r = o(194504),
                t = o(235902),
                l = o(392237),
                s = o(325686),
                i = o(111677),
                c = o.n(i),
                u = o(912021),
                h = o(516951),
                b = o(731708),
                m = o(310088),
                p = o(175993),
                D = o(58881),
                M = o(530732);
            const w = c().d2414d31,
                f = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class A extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: o, query: d, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: d, method: "push", state: { ...n, lockScroll: a } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, o, d) => {
                            const n = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return o || d ? (e || a ? n : r) : e ? n : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: a } = this.props;
                            a && a(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": a, badgeCount: o, badgePip: d, children: r, color: t, isActive: i, isCompact: c, isPillLink: u, isRoundedRect: h, isWebRedesign: p, retainScrollPosition: A, style: _, to: S } = this.props,
                        { location: k } = this.state,
                        P = S ? this._getMemoizedLink(S, A) : void 0,
                        C = i ? i(S) : k?.pathname === P?.pathname,
                        I = D.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? g.pillHoverStyle.backgroundColor : void 0 }),
                        T = p ? "medium" : C ? "bold" : "medium";
                    return n.createElement(M.Z, { "aria-label": a, "aria-selected": C, focusable: !!C, interactiveStyles: I, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [g.pillStyle] : [g.link]), ...(u && C ? [g.pillActiveStyle] : []), c ? (u ? g.compactPill : g.compactLink) : null, h ? g.roundedRect : null, _], withoutInteractiveStyles: p }, ({ isFocused: a, isHovered: i }) => n.createElement(s.Z, { style: u && g.flexGrow }, n.createElement(b.ZP, { size: p ? "headline2" : void 0, style: [g.text, { color: this._getTextColor(C, i, p, u) }, c && g.compactText, p && a && g.focusedText, u && g.pillTextStyle, u && C && g.pillActiveTextStyle, u && i && g.pillHoverTextStyle], weight: T }, e && n.createElement(e, { style: g.icon }), r, p || u ? null : n.createElement(s.Z, { style: C && [g.border, { backgroundColor: l.default.theme.colors[t] }] })), o ? n.createElement(m.Z, { count: o, standalone: !0, style: [g.badge, o >= 10 && g.multiDigitBadge, o >= 20 && g.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: w, withBorder: !1 }) : d ? n.createElement(m.Z, { pip: !0, standalone: !0, style: g.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (A.contextType = p.Z), (A.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const g = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                _ = A,
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": a, isCompact: o, isPillLink: l, isRoundedRect: s, links: i, style: c, visibleItemIndex: u }) => {
                    const h = i
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: b } = t.ZP.useProps(),
                        m = b() && !l,
                        p = n.useMemo(
                            () =>
                                i.filter(Boolean).map(({ label: a, viewType: r, ...t }, i) => {
                                    const c = m ? [S.linkRedesign, 0 === i && S.firstLinkRedesign, e && 0 === i && S.withNoPaddingStart] : void 0;
                                    return n.createElement(_, (0, d.Z)({ viewType: r }, t, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: c }), a);
                                }),
                            [e, o, l, s, m, i],
                        );
                    return n.createElement(r.Z, { "aria-label": a, buttonsContainerStyle: l && S.gap, childrenStyle: !m && S.flexGrow, key: h, style: [l ? null : S.segmentedControl, m && S.leftAligned, c], visibleItemIndex: u }, p);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Notifications.c1594a6a.js.map
