"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserFollowLists", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        333241: (e, t, o) => {
            o.d(t, { Z: () => v });
            o(136728);
            var n = o(202784),
                r = o(638236),
                s = o(811176),
                i = o(111677),
                a = o.n(i),
                l = o(415506),
                c = o(516951),
                d = o(376293),
                u = o(847607),
                p = o(417714),
                h = o(988823);
            const m = "block",
                f = "mute",
                b = "removeFollower",
                w = "report",
                g = "share",
                _ = a().j7bb1a43,
                y = a().hef5960c,
                v = (0, h.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: i, onRemoveFollower: a, onReportUser: h, onShare: v, onUnblock: E, onUnmute: P, user: S } = e,
                        C = [],
                        D = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                n({ confirmButtonLabel: e, ...s })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !S.protected &&
                        !S.blocking &&
                        !S.blocked_by &&
                        C.push({
                            Icon: r.Z,
                            onClick: () => {
                                o(), v();
                            },
                            testID: g,
                            text: y,
                        });
                    !S.blocking &&
                        C.push({
                            ...(0, u.N1)(
                                S,
                                () => {
                                    o(), i();
                                },
                                () => {
                                    o(), P();
                                },
                            ),
                            testID: f,
                        });
                    S.followed_by &&
                        C.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    D(e, a);
                                },
                                user: S,
                            }),
                            testID: b,
                        }),
                        C.push((0, d.op)({ blockAction: (e) => D(e, t), source: d.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => D(e, E), user: S })),
                        C.push({
                            Icon: l.default,
                            onClick: () => {
                                o(), h();
                            },
                            testID: w,
                            text: _({ screenName: S.screen_name }),
                        });
                    const Z = C.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(s.Z, { items: Z, onCloseRequested: o });
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(807896),
                r = o(202784),
                s = o(771099);
            const i = (e) => (t) => r.createElement(s.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                s = o(107267),
                i = o(403556),
                a = o(791632);
            const l = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return r.createElement(i.Z, (0, n.Z)({}, l, { isCompact: o || (0, a.HD)(t) }));
                },
                c = r.memo(l);
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => P });
            var n = o(202784),
                r = o(154003),
                s = o(111677),
                i = o.n(s),
                a = o(74514),
                l = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                p = o(668214),
                h = o(257166),
                m = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                w = i().bdba3e1a,
                g = i().c4da7d28,
                _ = i().j87c21f4,
                y = i().iebc30ca,
                v = i().dc740eb2;
            class E extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: y }, icon: n.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": w, hoverLabel: { label: _ }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const P = b(E);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                s = o(668214),
                i = o(997174),
                a = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: s, search: i },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || a;
                    ((c && r !== a) || (!c && o !== s) || n !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        684511: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(111677);
            const r = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => i });
            var n = o(111677),
                r = o.n(n),
                s = o(437358);
            const i = (e, t) => {
                const { id_str: o, screen_name: n } = e,
                    i = (0, r().d78131b9)({ screenName: n });
                return { Icon: s.default, text: i, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => g, GS: () => a, N1: () => h, PY: () => p, X6: () => _, cm: () => l });
            o(202784);
            var n = o(111677),
                r = o.n(n),
                s = o(391366),
                i = o(40904);
            const a = r().hb568af4,
                l = r().bb1cbeb6,
                c = (r().h2f62206, r().e67b2d65),
                d = r().f05597b3,
                u = (e) => c({ screenName: e }),
                p = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? p(r) : u(r), onClick: n ? o : t, Icon: n ? s.default : i.default };
                },
                m = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                w = r().h129c3c3,
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                _ = (e) => (e ? ((e) => w({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => d });
            o(202784);
            var n = o(111677),
                r = o.n(n),
                s = o(224823);
            const i = r().b3036480,
                a = r().b3036480,
                l = r().e68b09b4,
                c = r().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: s.default, text: i, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: a, label: l, text: c({ screenName: e.screen_name }) });
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(615656),
                r = o(51525);
            const s = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        42508: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, o) => {
            o.d(t, { ZP: () => r, n5: () => i });
            var n = o(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: o, isWithheld: n, user: r, userProfileInterstitialType: i, viewerUserId: a }) => {
                    const l = !!a && a === r.id_str,
                        c = r.blocked_by,
                        d = r.blocking,
                        u = s({ displaySensitiveMedia: e, isOwnProfile: l, user: r, userProfileInterstitialType: i }),
                        p = (l || !n) && !o;
                    return { avatar: l || (!u && !t && !o && !n), badges: l || !n, description: l || (!d && !c && !u && !o && !n), followButton: !(l || c || u || t || o || n), followersYouKnow: !l && !c && !d && !u && !t && !o && !n && (r.following || !r.protected), followIndicator: !n, fullName: p, label: p, stats: l || (!c && !u && !o && !n), subscriptionsCount: l || !r.has_hidden_subscriptions_on_profile };
                },
                s = ({ displaySensitiveMedia: e, isOwnProfile: t, user: o, userProfileInterstitialType: r }) => (r === n.Z.SensitiveMedia || r === n.Z.OffensiveProfileContent) && !(t || o.following || e),
                i = ({ isOwnProfile: e, user: t }) => {
                    const o = t.protected && !t.following;
                    return e || !o;
                };
        },
        961104: (e, t, o) => {
            function n(e, t) {
                return e.filter(t);
            }
            o.d(t, { b: () => n });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => i });
            var n = o(807896),
                r = o(202784),
                s = o(190286);
            const i = (e) => (t) => {
                const [o, i] = r.useState(null),
                    a = (e) =>
                        new Promise((t, o) => {
                            i({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: a } = o;
                    return r.createElement(
                        s.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                a(), i(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, t, { confirm: a }));
            };
        },
        947650: (e, t, o) => {
            o.d(t, { Hq: () => _, c1: () => f, lP: () => w, og: () => b });
            var n = o(745123),
                r = o(961104),
                s = o(499627),
                i = o(917799),
                a = o(56519),
                l = o(919022);
            const c = "knownFollowers",
                d = `rweb/${c}`,
                u = [],
                p = (0, i.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                h = {};
            s.Z.register({
                [c]: function (e = h, t) {
                    if (!t) return e;
                    if (t.type === p.SUCCESS) {
                        const o = t.payload || {},
                            { total_count: n, users: r } = o && o.result,
                            { user_id: s } = t.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: n, knownFollowerIds: r } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[c][t],
                f = (e, t) => {
                    if (t) {
                        const o = g(e, t);
                        return (0, r.b)(l.ZP.selectMany(e, o), (e) => !!e);
                    }
                    return u;
                },
                b = (e, t) => f(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                w = (e, t) => {
                    let o;
                    if (t) {
                        const n = m(e, t);
                        o = n?.knownFollowersCount;
                    }
                    return o;
                },
                g = (e, t) => {
                    const o = m(e, t);
                    return o?.knownFollowerIds || u;
                },
                _ =
                    (e) =>
                    (t, o, { api: r }) =>
                        void 0 !== w(o(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, o, { api: r }) =>
                                          (0, i._O)(t, { request: r.withEndpoint(n.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: p, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, a.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => w });
            var n = o(370751),
                r = o(399896),
                s = o(663550),
                i = o(499627),
                a = o(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                p = (0, n.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: s, impression_id: i, promoted_trend_id: l } = e,
                            d = `trend-${l}-${s}`;
                        if (p.has(s) && m(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: s, impression_id: i };
                        return (0, a._O)(t, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && p.has(s)) return [h(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (s, i, { api: l }) => {
                        const { event: d, impression_id: p } = n,
                            f = `${o}-${t ?? "undefined"}-${p ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && m(i(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            w = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, a._O)(s, { params: w, request: l.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: w }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                w =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, a._O)(t, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: o } = t.payload;
                        return { ...e, [o]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, o) => {
            o.d(t, { r: () => c });
            o(136728);
            var n = o(161821),
                r = o(390387),
                s = o(836255),
                i = o(255117),
                a = o(166506),
                l = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            l = (0, n.Z)(s.Z.selectAll(t)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = s.Z.select(t, n.retweeted_status);
                                        r?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, r._h)(c()),
                            u = d ? [(0, i.ZP)({ useLatest: !1, userId: d }).removeTweets(l), (0, i.ZP)({ useLatest: !0, userId: d }).removeTweets(l)] : [],
                            p = (0, a.k9)();
                        if (p.selectInitialFetchStatus(t) && !p.selectCanRefresh(t)) {
                            const o = (0, a.f8)(e, t, p);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => d, f8: () => u, k9: () => c });
            var n = o(503768),
                r = o(750085),
                s = o(962741),
                i = o(466015),
                a = o(919022),
                l = o(218951);
            const c = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, o) => {
                    const n = o();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === s.ZP.User ? e.content.id : "",
                                    o = a.ZP.select(n, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === s.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            n = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
        589992: (e, t, o) => {
            o.r(t), o.d(t, { FollowersScreen: () => q, default: () => Q });
            var n = o(202784),
                r = o(457311),
                s = o(111677),
                i = o.n(s),
                a = o(912021),
                l = o(718e3),
                c = o(290402),
                d = o(252021),
                u = o(507651),
                p = o(443781),
                h = o(652904),
                m = o(810641),
                f = o(666670),
                b = o(163889),
                w = o(835546),
                g = o(503768),
                _ = o(750085),
                y = o(962741),
                v = o(919022),
                E = o(218951);
            const P = (e) => (t, o) => {
                const n = o(),
                    r = e.selectEntries(n).filter((e) => {
                        if (!e.content || e.type !== y.ZP.User) return !1;
                        const t = e.content.id,
                            o = v.ZP.select(n, t);
                        return o && !o.followed_by;
                    });
                t(r.map((t) => e.removeEntry(t.entryId)));
            };
            var S = o(615027),
                C = o(984915),
                D = o(71620),
                Z = o(668214),
                x = o(947650),
                k = o(390387);
            const I = (e, t) => t.match.params.screenName,
                M = (e, t) => v.ZP.selectByScreenName(e, I(0, t)),
                F = (e, t) => v.ZP.selectFetchStatusByScreenName(e, I(0, t)),
                T = (e, t) => {
                    const o = ((e, t) => v.ZP.selectIdByScreenName(e, I(0, t)))(e, t);
                    return o ? x.lP(e, o) : void 0;
                },
                A = (e, t) => t.match.params.followersSubroute || t.match.params.creatorSubscriptionsSubroute,
                L = (0, Z.Z)()
                    .propsFromState(() => ({ fetchStatus: F, isActiveCreator: k.WM, mode: A, screenName: I, user: M, viewerUserId: k._h, knownFollowersCount: T }))
                    .propsFromActions(() => ({ cleanupOwnFollowersList: P, createLocalApiErrorHandler: (0, D.zr)("USER_PROFILE_FOLLOWERS"), fetchOneUserByScreenNameIfNeeded: v.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: x.Hq }));
            var O = o(269011),
                R = o(335632),
                N = o(240089);
            const B = i().fe9d3afa,
                U = i().fbce8dbe,
                W = { superfollowers: i().ab7fc3ef, followers_you_follow: i().j0d17377, followers: i().fa9e827f, following: i().ha979be5, subscribers: i().d28be573, subscriptions: i().g9da3853, verified_followers: i().cfd952a1 },
                $ = { superfollowers: i().d52a1caa, followers_you_follow: i().i099d32e, followers: i().c64974fc, following: i().d960b55c, subscribers: i().d52a1caa, subscriptions: i().d7b51c68, verified_followers: i().fecc696e },
                H = { superfollowers: i().g0a2fbbe, followers_you_follow: i().g65f4bac, followers: i().c36cfddc, following: i().h0c94842, subscribers: i().g0a2fbbe, subscriptions: i().j7f5c6aa, verified_followers: i().fd275c1a },
                z = { superfollowers: i().e08bd098, followers_you_follow: i().j029a4dc, followers: i().b2b2c6ce, following: i().cb1a15c8, subscribers: i().e08bd098, subscriptions: i().i967b954, verified_followers: i().a44e403e },
                G = { followers_you_follow: i().d74ee2e3, followers: i().c36cfddc, following: i().ae5749c7, verified_followers: i().b5099e33 },
                K = { followers_you_follow: i().ec251f36, followers: i().b2b2c6ce, following: i().f8af4f48, verified_followers: i().fd0aad94 },
                j = {
                    superfollowers: (e) => (0, E.Z)({ timelineId: `superFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchSuperFollowers, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_SUPER_FOLLOWERS", perfKey: "superFollowersGraphQL", formatResponse: _.Z }),
                    followers_you_follow: (e) => (0, E.Z)({ timelineId: `followersYouKnowGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchFollowersYouKnow, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_FOLLOWERS_YOU_KNOW", perfKey: "followersYouKnowGraphQL", formatResponse: _.Z }),
                    followers: (e) => (0, E.Z)({ timelineId: `followersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchFollowers, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_FOLLOWERS", perfKey: "followersGraphQL", formatResponse: _.Z }),
                    following: (e) => (0, E.Z)({ timelineId: `followingGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchFollowing, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_FOLLOWING", perfKey: "followingGraphQL", formatResponse: _.Z }),
                    subscribers: (e) => (0, E.Z)({ timelineId: `UserCreatorSubscribers-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchCreatorSubscribers, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIBERS", perfKey: "userCreatorSubscribersGraphQL", formatResponse: _.Z }),
                    subscriptions: (e) => (0, E.Z)({ timelineId: `UserCreatorSubscription-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchCreatorSubscriptions, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIPTIONS", perfKey: "userCreatorSubscriptionsGraphQL", formatResponse: _.Z }),
                    verified_followers: (e) => (0, E.Z)({ timelineId: `verifiedFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.ZP).fetchVerifiedFollowers, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, userId: e }) }, context: "FETCH_VERIFIED_FOLLOWERS", perfKey: "verifiedFollowersGraphQL", formatResponse: _.Z }),
                },
                V = (0, a.Z)((e, t, o, s) => () => {
                    const i = t === e;
                    if (!i && "superfollowers" === s) return (0, b.ZP)("Unexpected rendering of superfollowers empty state"), null;
                    const a = i && "following" === s ? U : void 0,
                        l = i && "following" === s ? "/i/connect_people" : void 0;
                    let c = i ? H[s] : G[s],
                        d = i ? z[s] : K[s];
                    return "function" == typeof c && (c = c({ screenName: o })), "function" == typeof d && (d = d({ screenName: o })), n.createElement(r.Z, { buttonLink: l, buttonText: a, header: c, message: d });
                });
            class q extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizeModule = (0, a.Z)((e, t) => e && j[t](e))),
                        (this._render = () => {
                            const { mode: e, screenName: t, user: o, viewerUserId: r } = this.props,
                                s = this._getMemoizeModule(o?.id_str, e),
                                i = V(r, o?.id_str, t, e),
                                a = this._isOwnProfile() && "followers" === e,
                                l = this._canViewSubscribersPage(),
                                c = this._canViewSubscriptionsPage();
                            return ("subscribers" === e && !l) || ("subscriptions" === e && !c) ? n.createElement(S.Z, { to: `/${t}` }) : s ? n.createElement(m.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(a), loadingAccessibilityLabel: B, module: s, renderEmptyState: i, title: $[e] }) : null;
                        }),
                        (this._getMemoizedEntryConfiguration = (0, a.Z)((e) => (({ withFollowerActionMenu: e = !1 }) => ({ ...(0, R.G)({}), [y.ZP.User]: (0, O.Z)({ decoration: e ? N.C_ : void 0 }) }))({ withFollowerActionMenu: e }))),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: o } = this.props;
                            t(o).catch(e(f.F));
                        }),
                        (this._canViewSubscribersPage = () => {
                            const { isActiveCreator: e, user: t } = this.props,
                                o = this.context.featureSwitches.isTrue("creator_subscriptions_subscriber_count_enabled"),
                                n = this.context.featureSwitches.getNumberValue("creator_subscriptions_subscriber_count_min_displayed");
                            return (this._isOwnProfile() && e) || (o && t?.subscribers_count && t.subscribers_count >= n);
                        }),
                        (this._canViewSubscriptionsPage = () => {
                            const { user: e } = this.props,
                                t = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                o = this._isOwnProfile();
                            return t && e?.creator_subscriptions_count && e.creator_subscriptions_count > 0 && (o || !e?.has_hidden_subscriptions_on_profile);
                        });
                }
                componentDidMount() {
                    this._handleCleanup(this.props.mode), this._handleFetchUser(), this._fetchKnownFollowersIfNeeded();
                }
                componentDidUpdate(e) {
                    e.mode !== this.props.mode && this._handleCleanup(this.props.mode), this._fetchKnownFollowersIfNeeded();
                }
                render() {
                    const { fetchStatus: e, history: t, knownFollowersCount: o, mode: r, screenName: s, user: i, viewerUserId: a } = this.props,
                        { id_str: p, name: m = "" } = i || {},
                        f = W[r]({ screenName: s, fullName: m }),
                        b = this._isOwnProfile(),
                        g = !i || (0, w.n5)({ isOwnProfile: b, user: i }),
                        _ = this._canViewSubscribersPage(),
                        y = this._canViewSubscriptionsPage();
                    if ("superfollowers" === r) return n.createElement(S.Z, { to: `/${s}/creator-subscriptions/subscribers` });
                    const v = [{ key: "verified_followers", to: `/${s}/verified_followers`, label: $.verified_followers }, i && a !== i.id_str && o ? { key: "followers_you_follow", to: `/${s}/followers_you_follow`, label: $.followers_you_follow } : null, { key: "followers", to: `/${s}/followers`, label: $.followers }, { key: "following", to: `/${s}/following`, label: $.following }, _ ? { key: "subscribers", to: `/${s}/creator-subscriptions/subscribers`, label: $.subscribers } : null, y ? { key: "subscriptions", to: `/${s}/creator-subscriptions/subscriptions`, label: $.subscriptions } : null];
                    return g ? n.createElement(C.Z, { scribeSection: r, userId: p }, n.createElement(h.Z, null, n.createElement(d.Z, { backLocation: `/${s}`, documentTitle: f, history: t, primaryContent: n.createElement(c.Z, { "aria-label": B, fetchStatus: e, onRequestRetry: this._handleFetchUser, render: this._render }), secondaryBar: n.createElement(u.Z, { links: v }), sidebarContent: n.createElement(l.Z, null), subtitle: `@${s}`, title: m }))) : n.createElement(S.Z, { to: `/${s}` });
                }
                _fetchKnownFollowersIfNeeded() {
                    const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: o, viewerUserId: n } = this.props,
                        r = o && o.protected && !o.following && o.id_str !== n;
                    o && o.id_str && !r && t(o.id_str).catch(e({}));
                }
                _isOwnProfile() {
                    const { user: e, viewerUserId: t } = this.props;
                    return !(!e || e.id_str !== t);
                }
                _handleCleanup(e) {
                    if ("followers" === e && this._isOwnProfile()) {
                        const { cleanupOwnFollowersList: t, user: o } = this.props,
                            n = this._getMemoizeModule(o?.id_str, e);
                        n && t(n);
                    }
                }
            }
            q.contextType = p.rC;
            const Q = L(q);
        },
        984915: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(912021),
                s = o(443781),
                i = o(293115),
                a = o(942893);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getScribeData = (0, r.Z)((e) => (e ? { items: [a.Z.getUserItem({ id_str: e })], profile_id: e } : void 0))),
                        (this._getScribeNamespace = (0, r.Z)((e, t) => {
                            const o = t ? { section: t } : void 0;
                            return e ? { page: "me", ...o } : { page: "profile", ...o };
                        }));
                }
                render() {
                    const { children: e, scribeSection: t, userId: o } = this.props,
                        r = !!this.context.viewerUserId && o === this.context.viewerUserId,
                        s = this._getScribeNamespace(r, t);
                    return n.createElement(i.nO, { data: this._getScribeData(o), namespace: s }, "function" == typeof e ? e({ scribeNamespace: s }) : e);
                }
            }
            l.contextType = s.rC;
        },
        941978: (e, t, o) => {
            o.d(t, { C: () => n });
            class n {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const o = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = o), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new n();
        },
        491915: (e, t, o) => {
            o.d(t, { ZP: () => b });
            o(571372);
            var n = o(202784),
                r = o(325686),
                s = o(392237),
                i = o(111677),
                a = o.n(i),
                l = o(643442),
                c = o(466445),
                d = o(731708),
                u = o(154003),
                p = o(173739);
            const h = a().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [o, s] = n.useState(t),
                    [i, a] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && a(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: f.container },
                        n.createElement(u.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(l.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                o ? (e.pause(), s(!1)) : (e.play(), s(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        n.createElement(
                            r.Z,
                            { style: f.slider },
                            n.createElement(p.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), s(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = s.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: s, onAnimationStart: i, onError: a, withControls: l } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [p, h] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof s && s(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            w.load().then((r) => {
                                if (r && u.current) {
                                    const s = { container: u.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(s);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new g(e);
                                            "function" == typeof a && a(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            n(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, s, i, a, l]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(r.Z, null, n.createElement(r.Z, { style: [e.animationContainerStyle, _.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && p && n.createElement(m, { animation: c.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    n.useEffect(() => {
                        w.load();
                    }, []),
                    null
                );
            };
            const w = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class g extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, g), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const _ = s.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(111677),
                s = o.n(r),
                i = o(149170),
                a = o(40644);
            const l = s().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: o = i.default, iconSize: r = "normal", isDisabled: s, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: h, withDarkBackground: m = !1 }) {
                const f = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    b = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(a.ZP, { Icon: o, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: b, iconSize: r, isDisabled: s, onPress: f, preventFocusShift: d, renderMenu: u, style: p, testID: h });
            };
        },
        280278: (e, t, o) => {
            o.d(t, { ZP: () => f });
            var n = o(202784),
                r = o(325686),
                s = o(827515),
                i = o(461756),
                a = o(731708),
                l = o(392237);
            const c = "up",
                d = "down",
                u = (e, t, o) => {
                    o((o) => {
                        const n = (0, s.Z)(e) ? (e > (o.count || 0) ? c : d) : c;
                        return { ...o, count: e, oldText: o.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                m = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: o, count: l, ...d } = e,
                        [f, b] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        w = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (w.current)
                                if (i.Z.reducedMotionEnabled) b((o) => ({ ...o, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, s.Z)(e.count) && f.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((o) => ({ ...o, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            w.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, b));
                        }, [f.animating, f.oldText]),
                        n.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                s = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...h, ...(f.animating ? e.post : e.active) },
                                c = { ...(s ? e.pre : e.active) };
                            return n.createElement(
                                r.Z,
                                { style: [m.root, o] },
                                t ? n.createElement("span", { style: l }, n.createElement(a.ZP, d, f.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, b),
                                        style: c,
                                    },
                                    n.createElement(a.ZP, d, f.text),
                                ),
                            );
                        }, [o, d, f, w, b])
                    );
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(807896),
                r = o(202784),
                s = o(194504),
                i = o(235902),
                a = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                h = o(731708),
                m = o(310088),
                f = o(175993),
                b = o(58881),
                w = o(530732);
            const g = d().d2414d31,
                _ = () => d().ce4e85ae,
                y = d().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: o, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const r = a.default.theme.colors.text,
                                s = a.default.theme.colors.gray700;
                            return o || n ? (e || t ? r : s) : e ? r : s;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: s, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: f, retainScrollPosition: v, style: P, to: S } = this.props,
                        { location: C } = this.state,
                        D = S ? this._getMemoizedLink(S, v) : void 0,
                        Z = c ? c(S) : C?.pathname === D?.pathname,
                        x = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? E.pillHoverStyle.backgroundColor : void 0 }),
                        k = f ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(w.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: x, link: D, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [E.pillStyle] : [E.link]), ...(u && Z ? [E.pillActiveStyle] : []), d ? (u ? E.compactPill : E.compactLink) : null, p ? E.roundedRect : null, P], withoutInteractiveStyles: f }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: u && E.flexGrow }, r.createElement(h.ZP, { size: f ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(Z, c, f, u) }, d && E.compactText, f && t && E.focusedText, u && E.pillTextStyle, u && Z && E.pillActiveTextStyle, u && c && E.pillHoverTextStyle], weight: k }, e && r.createElement(e, { style: E.icon }), s, f || u ? null : r.createElement(l.Z, { style: Z && [E.border, { backgroundColor: a.default.theme.colors[i] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [E.badge, o >= 10 && E.multiDigitBadge, o >= 20 && E.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: g, withBorder: !1 }) : n ? r.createElement(m.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (v.contextType = f.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = a.default.create((e) => ({
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
                P = v,
                S = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                C = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: l, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !a,
                        f = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...i }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return r.createElement(P, (0, n.Z)({ viewType: s }, i, { isCompact: o, isPillLink: a, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, a, l, m, c],
                        );
                    return r.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: a && S.gap, childrenStyle: !m && S.flexGrow, key: p, style: [a ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: u }, f);
                };
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => v });
            var n = o(202784),
                r = o(325686),
                s = o(461756),
                i = o(731708),
                a = o(58881),
                l = o(530732),
                c = o(224162),
                d = o(491915),
                u = o(392237),
                p = o(551611),
                h = o(111677),
                m = o.n(h),
                f = o(891198),
                b = o(537392),
                w = o(280278);
            const g = m().e8d93005,
                _ = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                y = ({ color: e, count: t }) => {
                    const o = (0, f.wl)(t, !0);
                    return n.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(w.ZP, { color: e, count: t, size: "subtext2", style: [_.count, ((s = r), s < u.default.theme.breakpoints.small && _.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? g(t) : o) : void 0);
                        var s;
                    });
                };
            class v extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: s, decoration: a } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: l }) => n.createElement(i.ZP, { color: e ? o : s, dir: l, style: [S.inner, e && "blue500" === o && S.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), a, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: s, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = a.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: r, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, P[h ? "haloBackground" : o], !c && S.iconBackground, "small" === s && S.iconSmallBoundingBox, h && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: i, onAnimationEnd: a, onAnimationStart: l, onError: c, showAnimation: h, transitionAnimationUrl: m } = this.props;
                            if (!u.default.theme.highContrastEnabled && !s.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: m || p.Bf, animationContainerStyle: E[t], animationStyle: D, onAnimationEnd: a, onAnimationStart: l, onError: c });
                            {
                                const s = o && e ? e : this.props.Icon;
                                return n.createElement(s, { style: [E[t], !r && i && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(y, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: i, isDisabled: a, isPresentational: c, keyboardShortcut: p, link: h, preventFocusShift: m, renderMenu: f, renderWrapper: b = n.Fragment, style: w, testID: g } = this.props,
                        _ = !u.default.theme.highContrastEnabled && !s.Z.reducedMotionEnabled;
                    return n.createElement(
                        r.Z,
                        { style: [S.root, w] },
                        n.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(i)
                                : n.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: a, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: h, onClick: this._handlePress, preventFocusShift: m, renderMenu: f, style: [S.triggerAreaRoot, S.outlineNone], testID: g }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = i || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        _ ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            v.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const E = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                P = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                C = "224.5%",
                D = { width: C, height: C };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => r, ZP: () => i });
            var n = o(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class s extends n.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new s();
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                s = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                s = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                s = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                s = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                r = o(890601),
                s = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        465233: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserFollowLists.b0380b4a.js.map
