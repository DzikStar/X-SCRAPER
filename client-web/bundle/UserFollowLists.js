"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserFollowLists"],
    {
        333241: (e, o, t) => {
            t.d(o, { Z: () => P });
            t(136728);
            var r = t(202784),
                n = t(638236),
                s = t(811176),
                a = t(111677),
                i = t.n(a),
                l = t(415506),
                d = t(516951),
                c = t(443781),
                u = t(376293),
                p = t(847607),
                h = t(417714),
                m = t(988823);
            const f = "block",
                w = "mute",
                b = "removeFollower",
                _ = "report",
                g = "share",
                D = i().j7bb1a43,
                y = i().hef5960c,
                P = (0, m.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: a, onMute: i, onRemoveFollower: m, onReportUser: P, onShare: v, onUnblock: E, onUnmute: I, user: Z } = e,
                        M = [],
                        S = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...s } = o;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(t, d.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !Z.protected &&
                        !Z.blocking &&
                        !Z.blocked_by &&
                        M.push({
                            Icon: n.Z,
                            onClick: () => {
                                a(), v();
                            },
                            testID: g,
                            text: y,
                        });
                    !Z.blocking &&
                        M.push({
                            ...(0, p.N1)(
                                Z,
                                () => {
                                    a(), i();
                                },
                                () => {
                                    a(), I();
                                },
                            ),
                            testID: w,
                        });
                    Z.followed_by &&
                        M.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    S(e, m);
                                },
                                user: Z,
                            }),
                            testID: b,
                        }),
                        M.push((0, u.op)({ blockAction: (e) => S(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => S(e, E), user: Z })),
                        M.push({
                            Icon: l.default,
                            onClick: () => {
                                a(), P();
                            },
                            testID: _,
                            text: D({ screenName: Z.screen_name }),
                        });
                    const k = M.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(s.Z, { items: k, onCloseRequested: a });
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(807896),
                n = t(202784),
                s = t(771099);
            const a = (e) => (o) => n.createElement(s.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        507651: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(807896),
                n = t(202784),
                s = t(107267),
                a = t(403556),
                i = t(791632);
            const l = (e) => {
                    const o = (0, s.useHistory)();
                    return n.createElement(a.Z, (0, r.Z)({}, e, { isCompact: (0, i.HD)(o) }));
                },
                d = n.memo(l);
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => v });
            var r = t(202784),
                n = t(154003),
                s = t(111677),
                a = t.n(s),
                i = t(74514),
                l = t(405303),
                d = t(684511),
                c = t(860174),
                u = t(71620),
                p = t(668214),
                h = t(257166),
                m = t(919022);
            const f = (e, o) => !(!o.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                w = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = a().bdba3e1a,
                _ = a().c4da7d28,
                g = a().j87c21f4,
                D = a().iebc30ca,
                y = a().dc740eb2;
            class P extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": _, hoverLabel: { label: D }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: o } = this.props;
                            o && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((o) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((o) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: t, userId: r } = this.props;
                    return t(r, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const v = w(P);
        },
        652904: (e, o, t) => {
            t.d(o, { Z: () => c });
            var r = t(202784),
                n = t(500002),
                s = t(668214),
                a = t(997174),
                i = t(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class d extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: o },
                            location: { pathname: t, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: s, search: a },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    o.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && o.pathname === t && ((this._isInBackground = !1), (l = !0));
                    const d = n || i;
                    ((d && n !== i) || (!d && t !== s) || r !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: o, updateLocation: t, updateTweetDetailNav: r } = e;
                    o.scribePageImpression(), t(o.contextualScribeNamespace, o.contextualScribeData), r(o.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(l(d));
        },
        684511: (e, o, t) => {
            t.d(o, { Z: () => r });
            t(202784);
            const r = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => a });
            var r = t(111677),
                n = t.n(r),
                s = t(437358);
            const a = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    a = (0, n().d78131b9)({ screenName: r });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => _, GS: () => i, N1: () => h, PY: () => p, X6: () => g, cm: () => l });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(391366),
                a = t(40904);
            const i = n().hb568af4,
                l = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                p = (e) => c({ screenName: e }),
                h = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? p(n) : u(n), onClick: r ? t : o, Icon: r ? s.default : a.default };
                },
                m = n().h59f52ee,
                f = n().eea0cbee,
                w = n().i29533b3,
                b = n().h129c3c3,
                _ = (e) => (e ? ((e) => w({ screenName: e }))(e) : m),
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(224823);
            const a = n().b3036480,
                i = n().b3036480,
                l = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: s.default, text: a, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(615656),
                n = t(51525);
            const s = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        42508: (e, o, t) => {
            t.d(o, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, o, t) => {
            t.d(o, { ZP: () => n, n5: () => a });
            var r = t(42508);
            const n = ({ displaySensitiveMedia: e, isNotFound: o, isSuspended: t, isWithheld: r, user: n, userProfileInterstitialType: a, viewerUserId: i }) => {
                    const l = !!i && i === n.id_str,
                        d = n.blocked_by,
                        c = n.blocking,
                        u = s({ displaySensitiveMedia: e, isOwnProfile: l, user: n, userProfileInterstitialType: a }),
                        p = (l || !r) && !t;
                    return { avatar: l || (!u && !o && !t && !r), badges: l || !r, description: l || (!c && !d && !u && !t && !r), followButton: !(l || d || u || o || t || r), followersYouKnow: !l && !d && !c && !u && !o && !t && !r && (n.following || !n.protected), followIndicator: !r, fullName: p, label: p, stats: l || (!d && !u && !t && !r), subscriptionsCount: l || !n.has_hidden_subscriptions_on_profile };
                },
                s = ({ displaySensitiveMedia: e, isOwnProfile: o, user: t, userProfileInterstitialType: n }) => (n === r.Z.SensitiveMedia || n === r.Z.OffensiveProfileContent) && !(o || t.following || e),
                a = ({ isOwnProfile: e, isSoftBlockEnabled: o = !1, user: t }) => {
                    const r = t.blocked_by,
                        n = t.protected && !t.following;
                    return o ? e || !n : e || (!n && !r);
                };
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => a });
            var r = t(807896),
                n = t(202784),
                s = t(190286);
            const a = (e) => (o) => {
                const [t, a] = n.useState(null),
                    i = (e) =>
                        new Promise((o, t) => {
                            a({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: i } = t;
                    return n.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, o, { confirm: i }));
            };
        },
        882122: (e, o, t) => {
            t.d(o, { Hq: () => _, c1: () => m, lP: () => w, og: () => f });
            var r = t(745123);
            var n = t(499627),
                s = t(917799),
                a = t(56519),
                i = t(919022);
            const l = "knownFollowers",
                d = `rweb/${l}`,
                c = [],
                u = (0, s.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                p = {};
            n.Z.register({
                [l]: function (e = p, o) {
                    if (!o) return e;
                    if (o.type === u.SUCCESS) {
                        const t = o.payload || {},
                            { total_count: r, users: n } = t && t.result,
                            { user_id: s } = o.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: r, knownFollowerIds: n } } : e;
                    }
                    return e;
                },
            });
            const h = (e, o) => e[l][o],
                m = (e, o) => {
                    if (o) {
                        const n = b(e, o);
                        return (t = i.ZP.selectMany(e, n)), (r = (e) => !!e), t.filter(r);
                    }
                    var t, r;
                    return c;
                },
                f = (e, o) => m(e, o).filter(({ name: e, profile_image_url_https: o }) => !!o?.length && !!e?.length),
                w = (e, o) => {
                    let t;
                    if (o) {
                        const r = h(e, o);
                        t = r?.knownFollowersCount;
                    }
                    return t;
                },
                b = (e, o) => {
                    const t = h(e, o);
                    return t?.knownFollowerIds || c;
                },
                _ =
                    (e) =>
                    (o, t, { api: n }) =>
                        void 0 !== w(t(), e)
                            ? Promise.resolve()
                            : o(
                                  (
                                      (e) =>
                                      (o, t, { api: n }) =>
                                          (0, s._O)(o, { request: n.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: o } = e;
                                                  return o ? [(0, a.dP)(o)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => w, dS: () => f, iY: () => b });
            var r = t(370751),
                n = t(399896),
                s = t(663550),
                a = t(499627),
                i = t(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                p = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: l } = e,
                            c = `trend-${l}-${s}`;
                        if (p.has(s) && m(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: s, impression_id: a };
                        return (0, i._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && p.has(s)) return [h(c)];
                        });
                    },
                w =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (s, a, { api: l }) => {
                        const { event: c, impression_id: p } = r,
                            f = `${t}-${o ?? "undefined"}-${p ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(a(), f)) return Promise.resolve();
                        const w = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...r, earned: w, epoch_ms: Date.now() };
                        return (0, i._O)(s, { params: b, request: l.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, o) => {
                            if (!o && u.has(c)) return [h(f)];
                        });
                    },
                b =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, i._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = l, o) {
                    if (!o) return e;
                    if (o.type === c) {
                        if (!o.payload) return e;
                        const { eventKey: t } = o.payload;
                        return { ...e, [t]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, o, t) => {
            t.d(o, { r: () => d });
            t(136728);
            var r = t(161821),
                n = t(390387),
                s = t(836255),
                a = t(255117),
                i = t(166506),
                l = t(919022);
            const d =
                (e, o) =>
                (t, d, { api: c, featureSwitches: u }) =>
                    t(l.ZP.mute(e, o)).then(() => {
                        const o = d(),
                            l = (0, r.Z)(s.Z.selectAll(o)).reduce((t, r) => {
                                if (null != r)
                                    if (r.user === e) t[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = s.Z.select(o, r.retweeted_status);
                                        n?.user === e && (t[r.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            p = (0, i.k9)();
                        if (p.selectInitialFetchStatus(o) && !p.selectCanRefresh(o)) {
                            const t = (0, i.f8)(e, o, p);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => d });
            var r = t(503768),
                n = t(750085),
                s = t(962741),
                a = t(466015),
                i = t(919022),
                l = t(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === s.ZP.User ? e.content.id : "",
                                    t = i.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === s.ZP.User && o.content.id === e)) {
                        const o = (0, a.OD)(e),
                            r = (0, a.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        589992: (e, o, t) => {
            t.r(o), t.d(o, { FollowersScreen: () => j, default: () => q });
            var r = t(202784),
                n = t(457311),
                s = t(111677),
                a = t.n(s),
                i = t(912021),
                l = t(718e3),
                d = t(290402),
                c = t(252021),
                u = t(507651),
                p = t(443781),
                h = t(652904),
                m = t(810641),
                f = t(666670),
                w = t(163889),
                b = t(835546),
                _ = t(503768),
                g = t(750085),
                D = t(962741),
                y = t(919022),
                P = t(218951);
            const v = (e) => (o, t) => {
                const r = t(),
                    n = e.selectEntries(r).filter((e) => {
                        if (!e.content || e.type !== D.ZP.User) return !1;
                        const o = e.content.id,
                            t = y.ZP.select(r, o);
                        return t && !t.followed_by;
                    });
                o(n.map((o) => e.removeEntry(o.entryId)));
            };
            var E = t(615027),
                I = t(984915),
                Z = t(71620),
                M = t(668214),
                S = t(882122),
                k = t(390387);
            const C = (e, o) => o.match.params.screenName,
                F = (e, o) => y.ZP.selectByScreenName(e, C(0, o)),
                x = (e, o) => y.ZP.selectFetchStatusByScreenName(e, C(0, o)),
                L = (e, o) => {
                    const t = ((e, o) => y.ZP.selectIdByScreenName(e, C(0, o)))(e, o);
                    return t ? S.lP(e, t) : void 0;
                },
                O = (e, o) => o.match.params.followersSubroute || o.match.params.creatorSubscriptionsSubroute,
                A = (0, M.Z)()
                    .propsFromState(() => ({ fetchStatus: x, isActiveCreator: k.WM, mode: O, screenName: C, user: F, viewerUserId: k._h, knownFollowersCount: L }))
                    .propsFromActions(() => ({ cleanupOwnFollowersList: v, createLocalApiErrorHandler: (0, Z.zr)("USER_PROFILE_FOLLOWERS"), fetchOneUserByScreenNameIfNeeded: y.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: S.Hq }));
            var T = t(269011),
                N = t(335632),
                R = t(240089);
            const U = a().fe9d3afa,
                B = a().fbce8dbe,
                $ = { superfollowers: a().ab7fc3ef, followers_you_follow: a().j0d17377, followers: a().fa9e827f, following: a().ha979be5, subscribers: a().d28be573, subscriptions: a().g9da3853, verified_followers: a().cfd952a1 },
                W = { superfollowers: a().d52a1caa, followers_you_follow: a().i099d32e, followers: a().c64974fc, following: a().d960b55c, subscribers: a().d52a1caa, subscriptions: a().d7b51c68, verified_followers: a().fecc696e },
                H = { superfollowers: a().g0a2fbbe, followers_you_follow: a().g65f4bac, followers: a().c36cfddc, following: a().h0c94842, subscribers: a().g0a2fbbe, subscriptions: a().j7f5c6aa, verified_followers: a().fd275c1a },
                G = { superfollowers: a().e08bd098, followers_you_follow: a().j029a4dc, followers: a().b2b2c6ce, following: a().cb1a15c8, subscribers: a().e08bd098, subscriptions: a().i967b954, verified_followers: a().a44e403e },
                K = { followers_you_follow: a().d74ee2e3, followers: a().c36cfddc, following: a().ae5749c7, verified_followers: a().b5099e33 },
                z = { followers_you_follow: a().ec251f36, followers: a().b2b2c6ce, following: a().f8af4f48, verified_followers: a().fd0aad94 },
                V = {
                    superfollowers: (e) => (0, P.Z)({ timelineId: `superFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchSuperFollowers, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_SUPER_FOLLOWERS", perfKey: "superFollowersGraphQL", formatResponse: g.Z }),
                    followers_you_follow: (e) => (0, P.Z)({ timelineId: `followersYouKnowGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchFollowersYouKnow, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWERS_YOU_KNOW", perfKey: "followersYouKnowGraphQL", formatResponse: g.Z }),
                    followers: (e) => (0, P.Z)({ timelineId: `followersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchFollowers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWERS", perfKey: "followersGraphQL", formatResponse: g.Z }),
                    following: (e) => (0, P.Z)({ timelineId: `followingGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchFollowing, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWING", perfKey: "followingGraphQL", formatResponse: g.Z }),
                    subscribers: (e) => (0, P.Z)({ timelineId: `UserCreatorSubscribers-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchCreatorSubscribers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIBERS", perfKey: "userCreatorSubscribersGraphQL", formatResponse: g.Z }),
                    subscriptions: (e) => (0, P.Z)({ timelineId: `UserCreatorSubscription-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchCreatorSubscriptions, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIPTIONS", perfKey: "userCreatorSubscriptionsGraphQL", formatResponse: g.Z }),
                    verified_followers: (e) => (0, P.Z)({ timelineId: `verifiedFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_.ZP).fetchVerifiedFollowers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_VERIFIED_FOLLOWERS", perfKey: "verifiedFollowersGraphQL", formatResponse: g.Z }),
                },
                Q = (0, i.Z)((e, o, t, s) => () => {
                    const a = o === e;
                    if (!a && "superfollowers" === s) return (0, w.ZP)("Unexpected rendering of superfollowers empty state"), null;
                    const i = a && "following" === s ? B : void 0,
                        l = a && "following" === s ? "/i/connect_people" : void 0;
                    let d = a ? H[s] : K[s],
                        c = a ? G[s] : z[s];
                    return "function" == typeof d && (d = d({ screenName: t })), "function" == typeof c && (c = c({ screenName: t })), r.createElement(n.Z, { buttonLink: l, buttonText: i, header: d, message: c });
                });
            class j extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizeModule = (0, i.Z)((e, o) => e && V[o](e))),
                        (this._render = () => {
                            const { mode: e, screenName: o, user: t, viewerUserId: n } = this.props,
                                s = this._getMemoizeModule(t?.id_str, e),
                                a = Q(n, t?.id_str, o, e),
                                i = this._isOwnProfile() && "followers" === e,
                                l = this._canViewSubscribersPage(),
                                d = this._canViewSubscriptionsPage();
                            return ("subscribers" === e && !l) || ("subscriptions" === e && !d) ? r.createElement(E.Z, { to: `/${o}` }) : s ? r.createElement(m.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(i), loadingAccessibilityLabel: U, module: s, renderEmptyState: a, title: W[e] }) : null;
                        }),
                        (this._getMemoizedEntryConfiguration = (0, i.Z)((e) => (({ withFollowerActionMenu: e = !1 }) => ({ ...(0, N.G)({}), [D.ZP.User]: (0, T.Z)({ decoration: e ? R.C_ : void 0 }) }))({ withFollowerActionMenu: e }))),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: o, screenName: t } = this.props;
                            o(t).catch(e(f.F));
                        }),
                        (this._canViewSubscribersPage = () => {
                            const { isActiveCreator: e, user: o } = this.props,
                                t = this.context.featureSwitches.isTrue("creator_subscriptions_subscriber_count_enabled"),
                                r = this.context.featureSwitches.getNumberValue("creator_subscriptions_subscriber_count_min_displayed");
                            return (this._isOwnProfile() && e) || (t && o?.subscribers_count && o.subscribers_count >= r);
                        }),
                        (this._canViewSubscriptionsPage = () => {
                            const { user: e } = this.props,
                                o = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                t = this._isOwnProfile();
                            return o && e?.creator_subscriptions_count && e.creator_subscriptions_count > 0 && (t || !e?.has_hidden_subscriptions_on_profile);
                        });
                }
                componentDidMount() {
                    this._handleCleanup(this.props.mode), this._handleFetchUser(), this._fetchKnownFollowersIfNeeded();
                }
                componentDidUpdate(e) {
                    e.mode !== this.props.mode && this._handleCleanup(this.props.mode), this._fetchKnownFollowersIfNeeded();
                }
                render() {
                    const { fetchStatus: e, history: o, knownFollowersCount: t, mode: n, screenName: s, user: a, viewerUserId: i } = this.props,
                        { id_str: p, name: m = "" } = a || {},
                        f = $[n]({ screenName: s, fullName: m }),
                        w = this._isOwnProfile(),
                        _ = !a || (0, b.n5)({ isOwnProfile: w, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: a }),
                        g = this._canViewSubscribersPage(),
                        D = this._canViewSubscriptionsPage();
                    if ("superfollowers" === n) return r.createElement(E.Z, { to: `/${s}/creator-subscriptions/subscribers` });
                    const y = [{ key: "verified_followers", to: `/${s}/verified_followers`, label: W.verified_followers }, a && i !== a.id_str && t ? { key: "followers_you_follow", to: `/${s}/followers_you_follow`, label: W.followers_you_follow } : null, { key: "followers", to: `/${s}/followers`, label: W.followers }, { key: "following", to: `/${s}/following`, label: W.following }, g ? { key: "subscribers", to: `/${s}/creator-subscriptions/subscribers`, label: W.subscribers } : null, D ? { key: "subscriptions", to: `/${s}/creator-subscriptions/subscriptions`, label: W.subscriptions } : null];
                    return _ ? r.createElement(I.Z, { scribeSection: n, userId: p }, r.createElement(h.Z, null, r.createElement(c.Z, { backLocation: `/${s}`, documentTitle: f, history: o, primaryContent: r.createElement(d.Z, { "aria-label": U, fetchStatus: e, onRequestRetry: this._handleFetchUser, render: this._render }), secondaryBar: r.createElement(u.Z, { links: y }), sidebarContent: r.createElement(l.Z, null), subtitle: `@${s}`, title: m }))) : r.createElement(E.Z, { to: `/${s}` });
                }
                _fetchKnownFollowersIfNeeded() {
                    const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: o, user: t, viewerUserId: r } = this.props,
                        n = t && t.protected && !t.following && t.id_str !== r;
                    t && t.id_str && !n && o(t.id_str).catch(e({}));
                }
                _isOwnProfile() {
                    const { user: e, viewerUserId: o } = this.props;
                    return !(!e || e.id_str !== o);
                }
                _handleCleanup(e) {
                    if ("followers" === e && this._isOwnProfile()) {
                        const { cleanupOwnFollowersList: o, user: t } = this.props,
                            r = this._getMemoizeModule(t?.id_str, e);
                        r && o(r);
                    }
                }
            }
            j.contextType = p.rC;
            const q = A(j);
        },
        984915: (e, o, t) => {
            t.d(o, { Z: () => l });
            var r = t(202784),
                n = t(912021),
                s = t(443781),
                a = t(293115),
                i = t(942893);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getScribeData = (0, n.Z)((e) => (e ? { items: [i.Z.getUserItem({ id_str: e })], profile_id: e } : void 0))),
                        (this._getScribeNamespace = (0, n.Z)((e, o) => {
                            const t = o ? { section: o } : void 0;
                            return e ? { page: "me", ...t } : { page: "profile", ...t };
                        }));
                }
                render() {
                    const { children: e, scribeSection: o, userId: t } = this.props,
                        n = !!this.context.viewerUserId && t === this.context.viewerUserId,
                        s = this._getScribeNamespace(n, o);
                    return r.createElement(a.nO, { data: this._getScribeData(t), namespace: s }, "function" == typeof e ? e({ scribeNamespace: s }) : e);
                }
            }
            l.contextType = s.rC;
        },
        403556: (e, o, t) => {
            t.d(o, { Z: () => I });
            var r = t(807896),
                n = t(202784),
                s = t(194504),
                a = t(235902),
                i = t(392237),
                l = t(325686),
                d = t(111677),
                c = t.n(d),
                u = t(912021),
                p = t(516951),
                h = t(731708),
                m = t(310088),
                f = t(175993),
                w = t(58881),
                b = t(530732);
            const _ = c().d2414d31,
                g = () => c().ce4e85ae,
                D = c().fb9f6f39;
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, o) => {
                            const { pathname: t, query: r, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: t, query: r, method: "push", state: { ...n, lockScroll: o } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, o, t, r) => {
                            const n = i.default.theme.colors.text,
                                s = i.default.theme.colors.gray700;
                            return t || r ? (e || o ? n : s) : e ? n : s;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: o } = this.props;
                            o && o(e);
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
                    const { Icon: e, "aria-label": o, badgeCount: t, badgePip: r, children: s, color: a, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: f, retainScrollPosition: y, style: v, to: E } = this.props,
                        { location: I } = this.state,
                        Z = E ? this._getMemoizedLink(E, y) : void 0,
                        M = d ? d(E) : I?.pathname === Z?.pathname,
                        S = w.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        k = f ? "medium" : M ? "bold" : "medium";
                    return n.createElement(b.Z, { "aria-label": o, "aria-selected": M, focusable: !!M, interactiveStyles: S, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? P.pill : P.link, u && M ? P.active : null, c ? (u ? P.compactPill : P.compactLink) : null, p ? P.roundedRect : null, v], withoutInteractiveStyles: f || u }, ({ isFocused: o, isHovered: d }) => n.createElement(l.Z, { style: u && P.flexGrow }, n.createElement(h.ZP, { size: f ? "headline2" : void 0, style: [P.text, { color: this._getTextColor(M, d, f, u) }, c && P.compactText, f && o && P.focusedText], weight: k }, e && n.createElement(e, { style: P.icon }), s, f || u ? null : n.createElement(l.Z, { style: M && [P.border, { backgroundColor: i.default.theme.colors[a] }] })), t ? n.createElement(m.Z, { count: t, standalone: !0, style: [P.badge, t >= 10 && P.multiDigitBadge, t >= 20 && P.truncatedCountBadge], truncatedCountFormatter: D, unreadCountLabel: _, withBorder: !1 }) : r ? n.createElement(m.Z, { pip: !0, standalone: !0, style: P.badgePip, textColor: "red500", unreadCountLabel: g, withBorder: !1 }) : null));
                }
            }
            (y.contextType = f.Z), (y.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const P = i.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = y,
                E = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                I = ({ alignFirstItem: e, "aria-label": o, isCompact: t, isPillLink: i, isRoundedRect: l, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !i,
                        f = n.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: o, viewType: s, ...a }, d) => {
                                    const c = m ? [E.linkRedesign, 0 === d && E.firstLinkRedesign, e && 0 === d && E.withNoPaddingStart] : void 0;
                                    return n.createElement(v, (0, r.Z)({ viewType: s }, a, { isCompact: t, isPillLink: i, isRoundedRect: l, isWebRedesign: m, style: c }), o);
                                }),
                            [e, t, i, l, m, d],
                        );
                    return n.createElement(s.Z, { "aria-label": o, buttonsContainerStyle: i && E.gap, childrenStyle: !m && E.flexGrow, key: p, style: [i ? null : E.segmentedControl, m && E.leftAligned, c], visibleItemIndex: u }, f);
                };
        },
        98440: (e, o, t) => {
            t.r(o), t.d(o, { default: () => l });
            var r = t(202784),
                n = t(890601),
                s = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        226597: (e, o, t) => {
            t.r(o), t.d(o, { default: () => l });
            var r = t(202784),
                n = t(890601),
                s = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        155353: (e, o, t) => {
            t.r(o), t.d(o, { default: () => l });
            var r = t(202784),
                n = t(890601),
                s = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserFollowLists.b2caba4a.js.map
