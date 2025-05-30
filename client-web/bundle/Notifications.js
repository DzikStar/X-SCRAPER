(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Notifications", "icons/IconAtOff-js"],
    {
        405008: (e) => {
            e.exports = { queryId: "aq5pZTS7ino_C8_5zVxksw", operationName: "NotificationsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        233935: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => h });
            var o = d(202784),
                n = d(154003),
                r = d(392237),
                t = d(111677),
                l = d.n(t),
                i = d(698891);
            const s = "settingsAppBar",
                c = l().bb081ea2,
                u = o.memo(({ onPress: e, pullRight: a, to: d }) => o.createElement(n.ZP, { "aria-label": c, hoverLabel: { label: c }, icon: o.createElement(i.default, null), link: d, onPress: e, pullRight: a, style: b.button, testID: s, type: "primaryText" })),
                b = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                h = u;
        },
        789831: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => s });
            var o = d(807896),
                n = d(202784),
                r = d(325686),
                t = d(392237),
                l = d(655352);
            const i = t.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: a, fab: d, shouldRenderFab: t = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const b = a || r.Z,
                        h = t && !(0, l.ZP)();
                    return n.createElement(b, (0, o.Z)({}, u, { style: [h && !c && i.root, s] }), e, h ? d : null);
                };
        },
        817682: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => v });
            var o = d(202784),
                n = d(325686),
                r = d(688715),
                t = d(731708),
                l = d(529356),
                i = d(392237),
                s = d(111677),
                c = d.n(s),
                u = d(890899),
                b = d(616894),
                h = d(165243),
                m = d(725516);
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
                P = () => o.createElement(o.Fragment, null, o.createElement(t.ZP, null, D), o.createElement(n.Z, { style: T.details }, o.createElement(u.default, { style: T.icon }), o.createElement(n.Z, null, o.createElement(t.ZP, { style: T.title }, M), o.createElement(t.ZP, null, w)), o.createElement(b.default, { style: T.icon }), o.createElement(n.Z, null, o.createElement(t.ZP, { style: T.title }, f), o.createElement(t.ZP, null, y)), o.createElement(h.default, { style: T.icon }), o.createElement(n.Z, null, o.createElement(t.ZP, { style: T.title }, A), o.createElement(t.ZP, null, g)))),
                C = () => o.createElement(n.Z, { style: T.footerContainer }, o.createElement(t.ZP, { align: "center" }, _, " ", o.createElement(t.ZP, { color: "text", link: k, style: T.footerLearnMoreLink, withUnderline: !0 }, S))),
                I = () => o.createElement(t.ZP, { style: T.headline }, p),
                T = i.default.create((e) => ({ details: { display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: e.spaces.space24, gridRowGap: e.spaces.space24, paddingTop: e.spaces.space32 }, footerContainer: { display: "flex", alignItems: "center" }, footerLearnMoreLink: { whiteSpace: "nowrap" }, headline: { fontSize: e.fontSizes.title2 }, icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 }, image: { width: "100%" }, title: { color: e.colors.text, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.medium, paddingBottom: e.spaces.space4 } })),
                v = (e) => {
                    const { actionLabel: a, onAction: d, onClose: n, onSecondaryAction: r, secondaryActionLabel: t } = e,
                        i = (0, m.z)();
                    o.useEffect(() => {
                        i.scribeAction("impression");
                    }, [i]);
                    const s = r
                            ? (e) => {
                                  i.scribeAction("secondary_cta"), r?.(e);
                              }
                            : void 0,
                        c = n
                            ? () => {
                                  i.scribeAction("close"), n();
                              }
                            : void 0;
                    return o.createElement(l.Z, {
                        actionLabel: a,
                        footer: o.createElement(C, null),
                        graphicDisplayMode: "none",
                        headline: o.createElement(I, null),
                        isFullHeightOnMobile: !0,
                        onAction: (e) => {
                            i.scribeAction("primary_cta"), d(e);
                        },
                        onClose: c,
                        onSecondaryAction: s,
                        secondaryActionLabel: t,
                        subtext: o.createElement(P, null),
                        withBottomPadding: !0,
                    });
                };
        },
        507651: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => s });
            var o = d(807896),
                n = d(202784),
                r = d(107267),
                t = d(403556),
                l = d(791632);
            const i = (e) => {
                    const a = (0, r.useHistory)(),
                        { isCompact: d, ...i } = e;
                    return n.createElement(t.Z, (0, o.Z)({}, i, { isCompact: d || (0, l.HD)(a) }));
                },
                s = n.memo(i);
        },
        387524: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => p });
            var o = d(807896),
                n = d(202784),
                r = d(325686),
                t = d(292627),
                l = d(537392),
                i = d(392237),
                s = d(365023),
                c = d(392027),
                u = d(774654),
                b = d(725516),
                h = d(443781);
            const m = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                p = (e) => {
                    const { "aria-label": a, label: d, onPress: p, scribeComponent: D, ...M } = e,
                        { loggedInUserId: w } = n.useContext(h.rC),
                        f = (0, b.z)(),
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
                                  const t = e > i.default.theme.breakpoints.large,
                                      l = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      b = [m.root, l && m.rootMedium, t && m.rootLarge],
                                      h = [m.fab, t && m.fabLarge, u && m.fabMicro, g];
                                  return n.createElement(
                                      r.Z,
                                      { "aria-label": a, pointerEvents: "box-none", role: "complementary", style: b },
                                      n.createElement(s.Z, { id: "FloatingActionButtonBase" }, (e, l) => n.createElement(r.Z, (0, o.Z)({ ref: e() }, l({ style: h })), n.createElement(c.Z, (0, o.Z)({}, M, { "aria-label": a, label: t ? d : void 0, onPress: y, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => i });
            d(136728);
            var o = d(202784),
                n = d(387524),
                r = d(635510);
            const t = "/compose/post";
            class l extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: a, history: d } = this.props,
                                o = { pathname: t, state: (a && a()) || {} };
                            d.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: a, label: d, scribeComponent: l } = this.props;
                    return o.createElement(n.Z, { "aria-label": e, href: t, icon: a, label: d, onPress: this._handlePress, scribeComponent: l, testID: r.Z.tweet });
                }
            }
            const i = l;
        },
        32677: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => u });
            var o = d(202784),
                n = d(111677),
                r = d.n(n),
                t = d(186444),
                l = d(355883);
            const i = r().j0179e90,
                s = r().ee69d769({ verb: "" }),
                c = o.createElement(t.default, null),
                u = ({ getLocationState: e, history: a }) => o.createElement(l.Z, { "aria-label": i, getLocationState: e, history: a, icon: c, label: s, scribeComponent: "floating_compose_button" });
        },
        635510: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => c });
            var o = d(202784),
                n = d(500002),
                r = d(668214),
                t = d(997174),
                l = d(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: t.NH }))
                .withAnalytics();
            class s extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: d, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: t },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    a.pathname !== d ? (this._isInBackground = !0) : this._isInBackground && a.pathname === d && ((this._isInBackground = !1), (i = !0));
                    const s = n || l;
                    ((s && n !== l) || (!s && d !== r) || o !== t || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: d, updateTweetDetailNav: o } = e;
                    a.scribePageImpression(), d(a.contextualScribeNamespace, a.contextualScribeData), o(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, n.ZP)(i(s));
        },
        927389: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => c });
            var o = d(202784),
                n = d(247056),
                r = d(392237);
            const t = (0, d(523561).Z)({ loader: () => d.e("loader.FeedbackSheet").then(d.bind(d, 774426)) });
            var l = d(725516),
                i = d(851623);
            const s = r.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                c = (0, l.Z)((e) => {
                    const { analytics: a, feedbackItems: d, isDisplayedOnMedia: r } = e,
                        l = o.useCallback((e) => (d ? o.createElement(t, { actionItems: d, onClose: e }) : null), [d]),
                        c = o.useCallback(() => a.scribe({ element: "caret", action: "click" }), [a]);
                    return d && d.length > 0 ? o.createElement(n.Z, { onClick: c, renderActionMenu: l, style: s.curationControl, testID: i.Z.caret, withDarkBackground: r }) : null;
                });
        },
        337455: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => i });
            var o = d(202784),
                n = d(411916),
                r = d.n(n),
                t = d(373463),
                l = d.n(t);
            function i(e) {
                class a extends o.Component {
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
                        return this.state.shouldRender ? o.createElement(e, this.props) : null;
                    }
                }
                return l()(a, e);
            }
        },
        552378: (e, a, d) => {
            "use strict";
            d.d(a, { C: () => t });
            var o = d(807896),
                n = d(202784);
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
                        .then((e) => a.reduce((a, d, o) => ((a[d] = e[o]), a), {}))
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
            const t = (e, a) => (d) => n.createElement(r, { modules: a }, (a) => n.createElement(e, (0, o.Z)({}, a, d)));
        },
        451275: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { NOTIFICATIONS_CONTEXT: () => w, NOTIFICATIONS_PERFKEY: () => f, default: () => S, fetchAllNotificationsTimeline: () => _, notificationsModule: () => A, updateLastSeenCursor: () => g });
            var o = d(516951),
                n = d(414742),
                r = d(405008),
                t = d.n(r),
                l = d(934309);
            const i = (0, n.kj)((e) => !!!e?.viewer_v2?.user_results?.result?.notification_timeline?.timeline, "GQL Notifications: Failed to query for Notifications timeline"),
                s = ({ apiClient: e, featureSwitches: a }) => ({
                    fetchNotifications: ({ count: a, cursor: d, timelineType: o, userId: n }) => {
                        const r = { timeline_type: o, cursor: d, count: a };
                        return e.graphQL(t(), r, i).then((e) => {
                            const a = e?.viewer_v2?.user_results?.result?.notification_timeline?.timeline;
                            return a || l.cY;
                        });
                    },
                });
            var c = d(644829),
                u = d(750085),
                b = d(615656),
                h = d(71620),
                m = d(192337),
                p = d(218951),
                D = d(514915),
                M = d(525202);
            const w = "FETCH_NOTIFICATIONS_TIMELINE_GRAPHQL",
                f = "notificationsGraphQL",
                y = new Map([
                    [M.l.All, "All"],
                    [M.l.Mentions, "Mentions"],
                    [M.l.Verified, "Verified"],
                    [M.l.Subscribers, "SuperFollowers"],
                ]),
                A = (e = M.l.All, a = void 0) => {
                    const d = y.get(e) || "All";
                    return (0, p.Z)({ timelineId: `notifications-${e}-${a ?? ""}`, network: { getEndpoint: (e) => e.withEndpoint(s).fetchNotifications, getEndpointParams: ({ count: e, cursor: o, polling: n }) => ({ count: e, cursor: "string" == typeof o ? o : void 0, timelineType: d, userId: a }) }, formatResponse: u.Z, postFetchAction: D.Z, context: "FETCH_NOTIFICATIONS_TIMELINE", perfKey: "notifications", staleIntervalMs: 5e3, actAsUserId: a });
                },
                g =
                    (e = M.l.All, a = void 0) =>
                    (d, n, { api: r }) => {
                        const t = A(e, a),
                            l = t && m.f5(t.selectEntries(n()));
                        if (l) {
                            const a = { cursor: m.NA(l), type: e },
                                n = d((0, h.zr)("APP_UPDATE_NOTIFICATION_LAST_READ")({ [b.ZP.AppInReadOnlyMode]: { customAction: o.Z } }));
                            r.withEndpoint(c.Z).updateNotificationsLastSeenCursor(a).catch(n);
                        }
                    },
                _ = A(M.l.All).fetchInitialOrTop,
                S = A(M.l.All);
        },
        853292: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { default: () => t });
            var o = d(202784),
                n = d(525202),
                r = d(934712);
            const t = (e) => {
                const a = o.useMemo(() => (0, r.p)(n.l.All), []);
                return o.createElement(a, e);
            };
        },
        400115: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { default: () => t });
            var o = d(202784),
                n = d(525202),
                r = d(934712);
            const t = (e) => {
                const a = o.useMemo(() => (0, r.p)(n.l.Mentions), []);
                return o.createElement(a, e);
            };
        },
        80550: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { NotificationsScreen: () => O, default: () => U });
            var o = d(202784),
                n = d(107267),
                r = d(108362),
                t = d(111677),
                l = d.n(t),
                i = d(233935),
                s = d(718e3),
                c = d(789831),
                u = d(252021),
                b = d(507651),
                h = d(443781),
                m = d(32677),
                p = d(652904),
                D = d(655352),
                M = d(337455),
                w = d(615027),
                f = d(717988),
                y = d(668214),
                A = d(806960),
                g = d(390387);
            const _ = (0, y.Z)()
                .propsFromState(() => ({ allNotificationsUnreadCount: A.pm, isLoggedInUserActiveCreator: g.WM }))
                .withAnalytics({ page: "ntab" });
            var S = d(198368);
            const k = l().eb75875e,
                P = l().f8321d82,
                C = l().cdb53d7a,
                I = l().h3290872,
                T = l().bc8baa08,
                v = l().a98ba778,
                E = o.createElement(i.Z, { pullRight: !0, to: "/settings/notifications" }),
                B = l().eb75875e,
                Z = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                d.e("icons.8"),
                                d.e("icons.15"),
                                d.e("icons.7"),
                                d.e("icons.3"),
                                d.e("icons.24"),
                                d.e("icons.12"),
                                d.e("icons.22"),
                                d.e("icons.2"),
                                d.e("icons.18"),
                                d.e("icons.9"),
                                d.e("icons.1"),
                                d.e("icons.6"),
                                d.e("modules.common-e907d115"),
                                d.e("modules.common-e019dbda"),
                                d.e("icons.5"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("bundle.Notifications"),
                            ]).then(d.bind(d, 853292)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                x = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                d.e("icons.8"),
                                d.e("icons.15"),
                                d.e("icons.7"),
                                d.e("icons.3"),
                                d.e("icons.24"),
                                d.e("icons.12"),
                                d.e("icons.22"),
                                d.e("icons.2"),
                                d.e("icons.18"),
                                d.e("icons.9"),
                                d.e("icons.1"),
                                d.e("icons.6"),
                                d.e("modules.common-e907d115"),
                                d.e("modules.common-e019dbda"),
                                d.e("icons.5"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("bundle.Notifications"),
                            ]).then(d.bind(d, 400115)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                R = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                d.e("icons.8"),
                                d.e("icons.15"),
                                d.e("icons.7"),
                                d.e("icons.3"),
                                d.e("icons.24"),
                                d.e("icons.12"),
                                d.e("icons.22"),
                                d.e("icons.2"),
                                d.e("icons.18"),
                                d.e("icons.9"),
                                d.e("icons.1"),
                                d.e("icons.6"),
                                d.e("modules.common-e907d115"),
                                d.e("modules.common-e019dbda"),
                                d.e("icons.5"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("bundle.Notifications"),
                            ]).then(d.bind(d, 217999)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                L = (0, M.Z)(
                    (0, f.p)(
                        () =>
                            Promise.all([
                                d.e("icons.8"),
                                d.e("icons.15"),
                                d.e("icons.7"),
                                d.e("icons.3"),
                                d.e("icons.24"),
                                d.e("icons.12"),
                                d.e("icons.22"),
                                d.e("icons.2"),
                                d.e("icons.18"),
                                d.e("icons.9"),
                                d.e("icons.1"),
                                d.e("icons.6"),
                                d.e("modules.common-e907d115"),
                                d.e("modules.common-e019dbda"),
                                d.e("icons.5"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                                d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("bundle.Notifications"),
                            ]).then(d.bind(d, 100273)),
                        { shouldMigrateToX: !1 },
                    ),
                ),
                N = { to: S._N, key: P, label: P, retainScrollPosition: !1 },
                z = { to: S.JV, key: C, label: C, retainScrollPosition: !1 },
                F = { to: S.JK, key: I, label: I, retainScrollPosition: !1 },
                W = { to: S.ag, key: T, label: T, retainScrollPosition: !1 },
                H = () => o.createElement(w.Z, { to: S._N }),
                O = (e) => {
                    const { featureSwitches: a } = o.useContext(h.rC),
                        { history: d, isLoggedInUserActiveCreator: t } = e,
                        l = a.isTrue("responsive_web_subscribers_ntab_for_creators_enabled"),
                        i = t && l,
                        M = o.useMemo(() => {
                            const e = [N, F, z];
                            return i && e.splice(2, 0, W), e;
                        }, [i]),
                        w = i ? L : H,
                        f = o.createElement(n.Switch, null, o.createElement(n.Route, { component: Z, exact: !0, path: S._N }), o.createElement(n.Route, { component: x, exact: !0, path: S.JV }), o.createElement(n.Route, { component: R, exact: !0, path: S.JK }), o.createElement(n.Route, { component: w, exact: !0, path: S.ag }), o.createElement(n.Route, { component: H, exact: !0, path: S.Im })),
                        y = o.useMemo(() => o.createElement(b.Z, { alignFirstItem: (0, D.ZP)(), "aria-label": v, links: M }), [M]);
                    return o.createElement(
                        p.Z,
                        null,
                        o.createElement(u.Z, {
                            documentTitle: k,
                            history: d,
                            primaryContent: (() => {
                                const e = o.createElement(m.Z, { history: d });
                                return o.createElement(c.Z, { component: r.Z, fab: e }, f);
                            })(),
                            rightControl: E,
                            secondaryBar: y,
                            sidebarContent: o.createElement(s.Z, null),
                            title: B,
                        }),
                    );
                },
                U = _(O);
        },
        934712: (e, a, d) => {
            "use strict";
            d.d(a, { p: () => re });
            var o = d(202784),
                n = d(731708),
                r = d(688715),
                t = d(457311),
                l = d(111677),
                i = d.n(l),
                s = d(325686),
                c = d(913309),
                u = d(392237),
                b = d(927389),
                h = d(293115),
                m = d(725516);
            const p = d.p + "illustration_unmention_1200w.a6d67a6a.png",
                D = d.p + "illustration_unmention_1800w.6250707a.png",
                M = 600,
                w = 175,
                f = {
                    image: { url: D, width: 1800, height: 525 },
                    customVariants: [
                        { uri: d.p + "illustration_unmention_600w.b146e2ea.png", width: M, height: w },
                        { uri: p, width: 1200, height: 350 },
                        { uri: D, width: 1800, height: 525 },
                    ],
                };
            var y = d(817682);
            const A = "leave_this_conversation_inline_education",
                g = i().j24c37b2,
                _ = i().e839db3a,
                S = i().eba8b1c8,
                k = i().i859a9d4,
                P = i().j745b8a6,
                C = ({ onClose: e }) => o.createElement(h.nO, { namespace: { element: "leave_this_conversation_education_sheet" } }, o.createElement(y.Z, { actionLabel: g, onAction: e, onClose: e })),
                I = u.default.create((e) => ({ footerLearnMoreLink: { whiteSpace: "nowrap" }, wrapper: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small } })),
                T = (e) => {
                    const { onDismiss: a } = e,
                        [d, r] = o.useState(!1),
                        t = (0, m.z)();
                    o.useEffect(() => {
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
                    return o.createElement(
                        o.Fragment,
                        null,
                        d &&
                            o.createElement(C, {
                                onClose: () => {
                                    r(!1);
                                },
                            }),
                        o.createElement(
                            s.Z,
                            { style: I.wrapper },
                            o.createElement(c.Z, {
                                headline: S,
                                image: f.image,
                                imageVariants: f.customVariants,
                                rightControl: o.createElement(b.Z, { feedbackItems: l, isDisplayedOnMedia: !0 }),
                                subtext: o.createElement(
                                    o.Fragment,
                                    null,
                                    P,
                                    " ",
                                    o.createElement(
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
            var v = d(443781),
                E = d(652904),
                B = d(810641),
                Z = d(900062);
            d(571372);
            const x = Object.freeze({ VerificationCheck: "VerificationCheck" }),
                R = Object.freeze({
                    [x.VerificationCheck]: (function (e) {
                        if (3 !== e.length) throw new Error("url list must be 3 urls for each variant (400x200, 800x400, 1200x600)");
                        const [a, d, o] = e;
                        return [
                            { width: 400, height: 200, uri: a },
                            { width: 800, height: 400, uri: d },
                            { width: 1200, height: 600, uri: o },
                        ];
                    })(["https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-1200x600.v1.ef1651f9.png"]),
                });
            var L = d(552378),
                N = d(525202),
                z = d(912021),
                F = d(962741),
                W = d(668214),
                H = d(806960),
                O = d(175856),
                U = d(5849);
            const V = (0, z.Z)((e, a) => a && a.notificationsModule(e, void 0));
            var $ = d(351322),
                j = d(801184),
                G = d(335632),
                q = d(263863);
            const Q = { ...(0, G.G)({ tweetDismissable: !0, withMuteConversation: !0 }), [F.ZP.Tweet]: $.ov({ selectDisplayType: (e) => e.content.displayType, handlers: { [q.Z.Tweet]: (0, j.Cw)({ withMuteConversation: !0, withUnreadStyles: !0 }), [q.Z.QuotedTweet]: (0, j.$Q)({ isCondensed: !0 }) } }) },
                K = i().eb75875e,
                X = i().e9f1fbcc,
                J = i().j887d006,
                Y = i().c06d4306,
                ee = o.createElement(i().I18NFormatMessage, { $i18n: "d39ad44d" }, o.createElement(n.ZP, { color: "text", link: (0, r.ju)("https://help.x.com/managing-your-account/about-twitter-verified-accounts"), weight: "bold", withUnderline: !0 }, i().e3f9838d)),
                ae = i().ge7c661a,
                de = i().d3de3b5c;
            class oe extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getEmptyMessageBody = () => {
                            switch (this.props.notificationsType) {
                                case N.l.Mentions:
                                    return Y;
                                case N.l.Verified:
                                    return ae;
                                case N.l.Subscribers:
                                    return de;
                                default:
                                    return J;
                            }
                        }),
                        (this._getEmptyMessageHeader = () => X),
                        (this._renderTwitterBlueVerifiedEmptyState = () => o.createElement(t.Z, { header: X, imageVariants: R.VerificationCheck, message: ee, onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression })),
                        (this._renderSubscribersEmptyState = () => o.createElement(t.Z, { header: X, message: de, onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression })),
                        (this._renderEmptyTimeline = () => {
                            const { notificationsType: e } = this.props;
                            return e === N.l.Verified && this.context.featureSwitches.isTrue("responsive_web_twitter_blue_verified_badge_ntab_empty_state_enabled") ? this._renderTwitterBlueVerifiedEmptyState() : e === N.l.Subscribers ? this._renderSubscribersEmptyState() : o.createElement(t.Z, { header: this._getEmptyMessageHeader(), message: this._getEmptyMessageBody(), onButtonPress: this._handleEmptyTimelineButtonPress, onImpression: this._handleEmptyTimelineImpression });
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
                            const { addLeaveThisConversationEducationFlag: e, notificationsType: a, shouldShowUnmentionEducation: d, timelineHasTweets: n } = this.props;
                            return d && a === N.l.Mentions && n && this.context.featureSwitches.isTrue("dont_mention_me_mentions_tab_education_enabled") ? o.createElement(T, { onDismiss: e }) : void 0;
                        });
                }
                componentDidMount() {
                    const { notificationsType: e, setNotificationsPageLoaded: a, setNotificationsType: d } = this.props;
                    d(e), a(!0);
                }
                componentWillUnmount() {
                    const { markAllAsRead: e, notificationsType: a, setNotificationsPageLoaded: d } = this.props;
                    this._updateLastReadIfNeeded(), a === N.l.All && e?.(), d(!1);
                }
                render() {
                    const { notificationsModule: e } = this.props;
                    return e ? o.createElement(E.Z, null, o.createElement(B.Z, { entryConfiguration: Q, header: this._renderTimelineHeader(), key: "notification-timeline", module: e, onAtTop: this._handleAtTop, renderEmptyState: this._renderEmptyTimeline, title: K })) : null;
                }
                _updateLastReadIfNeeded() {
                    const { notificationsType: e, unreadCount: a, updateLastRead: d } = this.props;
                    a && d(e);
                }
            }
            oe.contextType = v.rC;
            const ne = (e) =>
                    (0, L.C)(
                        ((e) => {
                            const a = (0, z.Z)(V);
                            return (0, W.Z)()
                                .propsFromState(() => ({
                                    shouldShowUnmentionEducation: (e) => (0, O.t5)(e, O.QV),
                                    unreadCount: (d, { history: o, ntabData: n }) => a(e, n)?.selectUnreadEntriesCount(d),
                                    timelineHasTweets: (d, { history: o, ntabData: n }) => {
                                        const r = a(e, n),
                                            t = r?.selectEntries(d),
                                            l = t?.some((e) => e.type === F.ZP.Tweet);
                                        return !!l;
                                    },
                                }))
                                .propsFromActions(({ history: d, ntabData: o }) => ({
                                    setNotificationsPageLoaded: (e) => (a) => {
                                        a((0, H.Wl)(e));
                                    },
                                    addLeaveThisConversationEducationFlag: () => (0, O.pj)(O.QV),
                                    markAllAsRead: a(e, o)?.markAllAsRead,
                                    updateLastRead: (e) => (a, d) => {
                                        const n = o?.updateLastSeenCursor;
                                        n && a(n(e)), a((0, H.SE)(0));
                                    },
                                    setNotificationsType: U.BZ,
                                }))
                                .adjustStateProps(({ shouldShowUnmentionEducation: d, timelineHasTweets: o, unreadCount: n }, { history: r, ntabData: t }) => ({ ntabData: null, notificationsModule: a(e, t), notificationsType: e, shouldShowUnmentionEducation: d, timelineHasTweets: o, unreadCount: n }))
                                .withAnalytics({ page: "ntab", section: e });
                        })(e)(oe),
                        { ntabData: Z.Z },
                    ),
                re = (e) => ne(e);
        },
        100273: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { default: () => t });
            var o = d(202784),
                n = d(525202),
                r = d(934712);
            const t = (e) => {
                const a = o.useMemo(() => (0, r.p)(n.l.Subscribers), []);
                return o.createElement(a, e);
            };
        },
        217999: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { default: () => t });
            var o = d(202784),
                n = d(525202),
                r = d(934712);
            const t = (e) => {
                const a = o.useMemo(() => (0, r.p)(n.l.Verified), []);
                return o.createElement(a, e);
            };
        },
        392027: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => i });
            var o = d(202784),
                n = d(154003),
                r = d(392237);
            class t extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: a, color: d, disabled: r, href: t, icon: i, label: s, onPress: c, renderMenu: u, style: b, testID: h } = this.props,
                        m = ((e, a) => ("primary" === e && "white" === a ? "whiteOnColor" : "white" === e && "primary" === a ? "primaryOnWhite" : a))(a, d);
                    return o.createElement(n.ZP, { "aria-label": e, backgroundColor: a, color: m, disabled: r, icon: i, link: t, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !s && l.iconOnly, b], testID: h }, s);
                }
            }
            t.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = t;
        },
        913309: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => p });
            var o = d(202784),
                n = d(325686),
                r = d(530525),
                t = d(731708),
                l = d(439592),
                i = d(154003),
                s = d(392237),
                c = d(444178);
            const u = "inlinePrompt",
                b = "inlinePrompt-primaryAction",
                h = "inlinePrompt-secondaryAction",
                m = "inlinePrompt-centeredImageContainer";
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, a, d) => {
                            let t = o.createElement(r.Z, { "aria-label": "", aspectMode: l.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: a, image: e });
                            return d && (t = o.createElement(c.Z, { link: d, role: "" }, " ", t)), e.isCentered ? o.createElement(n.Z, { style: D.centeredImage, testID: m }, o.createElement(n.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, t)) : e.style ? o.createElement(n.Z, { style: e.style }, t) : t;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? o.createElement(t.ZP, { align: "left", role: "heading", size: "title3", style: D.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? o.createElement(t.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: a, buttonType: d, style: r, testID: t }) => {
                            const { secondaryAction: l } = this.props,
                                { link: s, onClick: c, text: u } = e;
                            return o.createElement(n.Z, { style: [this.styles.actionContainer, r, { justifyContent: "flex-start" }], testID: t }, o.createElement(i.ZP, { link: s, onPress: c, size: a, style: { width: l ? "100%" : "auto" }, type: d }, u));
                        });
                }
                render() {
                    const { headline: e, image: a, imageActionUrl: d, imageVariants: r, primaryAction: t, rightControl: l, secondaryAction: i, shouldRenderBorder: s, subtext: c } = this.props;
                    return o.createElement(n.Z, { style: s ? [M.root, M.rootMargin] : D.root }, o.createElement(o.Fragment, null, a ? this._renderImage(a, r, d) : null, e || c || t || i ? o.createElement(n.Z, { style: this.styles.rootPadding, testID: u }, this._renderTitle(), this._renderBodyText(), t ? this._renderAction({ action: t, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: b }) : null, i ? this._renderAction({ action: i, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: h }) : null) : null), l ? o.createElement(n.Z, { style: D.rightControl }, l) : null);
                }
                get styles() {
                    return this.props.isCompact ? f : w;
                }
            }
            p.defaultProps = { shouldRenderBorder: !1 };
            const D = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                M = s.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                w = s.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                f = s.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
        403556: (e, a, d) => {
            "use strict";
            d.d(a, { Z: () => k });
            var o = d(807896),
                n = d(202784),
                r = d(194504),
                t = d(235902),
                l = d(392237),
                i = d(325686),
                s = d(111677),
                c = d.n(s),
                u = d(912021),
                b = d(516951),
                h = d(731708),
                m = d(310088),
                p = d(175993),
                D = d(58881),
                M = d(530732);
            const w = c().d2414d31,
                f = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class A extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: d, query: o, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: d, query: o, method: "push", state: { ...n, lockScroll: a } };
                        })),
                        (this._unlisten = b.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, d, o) => {
                            const n = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return d || o ? (e || a ? n : r) : e ? n : r;
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
                    const { Icon: e, "aria-label": a, badgeCount: d, badgePip: o, children: r, color: t, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: b, isWebRedesign: p, retainScrollPosition: A, style: _, to: S } = this.props,
                        { location: k } = this.state,
                        P = S ? this._getMemoizedLink(S, A) : void 0,
                        C = s ? s(S) : k?.pathname === P?.pathname,
                        I = D.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? g.pillHoverStyle.backgroundColor : void 0 }),
                        T = p ? "medium" : C ? "bold" : "medium";
                    return n.createElement(M.Z, { "aria-label": a, "aria-selected": C, focusable: !!C, interactiveStyles: I, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [g.pillStyle] : [g.link]), ...(u && C ? [g.pillActiveStyle] : []), c ? (u ? g.compactPill : g.compactLink) : null, b ? g.roundedRect : null, _], withoutInteractiveStyles: p }, ({ isFocused: a, isHovered: s }) => n.createElement(i.Z, { style: u && g.flexGrow }, n.createElement(h.ZP, { size: p ? "headline2" : void 0, style: [g.text, { color: this._getTextColor(C, s, p, u) }, c && g.compactText, p && a && g.focusedText, u && g.pillTextStyle, u && C && g.pillActiveTextStyle, u && s && g.pillHoverTextStyle], weight: T }, e && n.createElement(e, { style: g.icon }), r, p || u ? null : n.createElement(i.Z, { style: C && [g.border, { backgroundColor: l.default.theme.colors[t] }] })), d ? n.createElement(m.Z, { count: d, standalone: !0, style: [g.badge, d >= 10 && g.multiDigitBadge, d >= 20 && g.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: w, withBorder: !1 }) : o ? n.createElement(m.Z, { pip: !0, standalone: !0, style: g.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
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
                k = ({ alignFirstItem: e, "aria-label": a, isCompact: d, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const b = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = t.ZP.useProps(),
                        m = h() && !l,
                        p = n.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: a, viewType: r, ...t }, s) => {
                                    const c = m ? [S.linkRedesign, 0 === s && S.firstLinkRedesign, e && 0 === s && S.withNoPaddingStart] : void 0;
                                    return n.createElement(_, (0, o.Z)({ viewType: r }, t, { isCompact: d, isPillLink: l, isRoundedRect: i, isWebRedesign: m, style: c }), a);
                                }),
                            [e, d, l, i, m, s],
                        );
                    return n.createElement(r.Z, { "aria-label": a, buttonsContainerStyle: l && S.gap, childrenStyle: !m && S.flexGrow, key: b, style: [l ? null : S.segmentedControl, m && S.leftAligned, c], visibleItemIndex: u }, p);
                };
        },
        890899: (e, a, d) => {
            "use strict";
            d.r(a), d.d(a, { default: () => i });
            var o = d(202784),
                n = d(890601),
                r = d(783427),
                t = d(347101);
            const l = (e = {}) => {
                const { direction: a } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [t.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M20.29 2.293L18.5 4.081C16.73 2.625 14.47 1.75 12 1.75 6.33 1.75 1.75 6.339 1.75 12c0 2.471.87 4.739 2.33 6.509l-1.79 1.784 1.42 1.414 18-18-1.42-1.414zM9.21 13.377c-.2-.498-.28-1.086-.19-1.725.25-1.769 1.65-2.798 2.89-2.623.41.057.79.242 1.12.525l-3.82 3.823zm5.24-5.245c-.6-.567-1.37-.958-2.26-1.083-2.58-.363-4.79 1.719-5.15 4.325-.18 1.243.08 2.487.68 3.487L5.5 17.086C4.4 15.685 3.75 13.919 3.75 12c0-4.556 3.69-8.25 8.25-8.25 1.91 0 3.68.655 5.08 1.754l-2.63 2.628zM7.2 21.06l1.49-1.497c1.02.442 2.13.687 3.31.687 1.59 0 3.08-.451 4.34-1.233l1.05 1.7c-1.57.972-3.42 1.533-5.39 1.533-1.74 0-3.37-.43-4.8-1.19zm4.07-4.069l4.72-4.722-.03.321c.03 1.145.92 2.122 2.1 2.23.91.083 1.62-.357 1.84-.99.2-.585.35-1.224.35-1.83 0-1.174-.25-2.29-.69-3.301l1.5-1.497c.76 1.432 1.19 3.065 1.19 4.798 0 .901-.21 1.77-.46 2.477-.59 1.731-2.34 2.478-3.91 2.334-1.24-.112-2.29-.729-3-1.626-.87 1.125-2.16 1.847-3.61 1.806z" })) }, { writingDirection: a });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Notifications.b37eb5ba.js.map
