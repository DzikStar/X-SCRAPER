"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler-e96e9bea"],
    {
        333241: (e, o, n) => {
            n.d(o, { Z: () => b });
            n(136728);
            var t = n(202784),
                r = n(638236),
                a = n(811176),
                s = n(111677),
                d = n.n(s),
                l = n(415506),
                i = n(516951),
                c = n(376293),
                u = n(847607),
                h = n(417714),
                m = n(988823);
            const p = "block",
                D = "mute",
                v = "removeFollower",
                f = "report",
                M = "share",
                w = d().j7bb1a43,
                P = d().g00b4c55,
                b = (0, m.M)((e) => {
                    const { onBlock: o, onClose: n, onMute: s, onRemoveFollower: d, onReportUser: m, onShare: b, onUnblock: y, onUnmute: S, user: _ } = e,
                        C = [],
                        I = (o, n) => {
                            const { confirm: t, onClose: r } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                t({ confirmButtonLabel: e, ...a })
                                    .then(n, i.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !_.protected &&
                        !_.blocking &&
                        !_.blocked_by &&
                        C.push({
                            Icon: r.Z,
                            onClick: () => {
                                n(), b();
                            },
                            testID: M,
                            text: P({ screenName: _.screen_name }),
                        });
                    !_.blocking &&
                        C.push({
                            ...(0, u.N1)(
                                _,
                                () => {
                                    n(), s();
                                },
                                () => {
                                    n(), S();
                                },
                            ),
                            testID: D,
                        });
                    _.followed_by &&
                        C.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    I(e, d);
                                },
                                user: _,
                            }),
                            testID: v,
                        }),
                        C.push((0, c.op)({ blockAction: (e) => I(e, o), source: c.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => I(e, y), user: _ })),
                        C.push({
                            Icon: l.default,
                            onClick: () => {
                                n(), m();
                            },
                            testID: f,
                            text: w({ screenName: _.screen_name }),
                        });
                    const k = C.map(({ Icon: e, onClick: o, testID: n, text: t }) => ({ text: t, onClick: o, Icon: e, testID: n }));
                    return t.createElement(a.Z, { items: k, onCloseRequested: n });
                });
        },
        864479: (e, o, n) => {
            n.d(o, { Z: () => s });
            var t = n(807896),
                r = n(202784),
                a = n(771099);
            const s = (e) => (o) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, t.Z)({}, o, { isInSidebar: n })));
        },
        293988: (e, o, n) => {
            n.d(o, { Z: () => S });
            var t = n(202784),
                r = n(154003),
                a = n(111677),
                s = n.n(a),
                d = n(74514),
                l = n(405303),
                i = n(684511),
                c = n(860174),
                u = n(71620),
                h = n(668214),
                m = n(257166),
                p = n(919022);
            const D = (e, o) => !(!o.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                v = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = s().bdba3e1a,
                M = s().c4da7d28,
                w = s().j87c21f4,
                P = s().iebc30ca,
                b = s().dc740eb2;
            class y extends t.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? t.createElement(r.ZP, { "aria-label": M, hoverLabel: { label: P }, icon: t.createElement(d.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : t.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: t.createElement(l.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return t.createElement("div", null, this.state.showingPushPrompt ? t.createElement(i.Z, { fullScreen: !0, message: b }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: n, userId: t } = this.props;
                    return n(t, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const S = v(y);
        },
        168222: (e, o, n) => {
            n.r(o), n.d(o, { default: () => _ });
            var t = n(459643),
                r = n(942893),
                a = n(409438),
                s = n(240089),
                d = n(351322),
                l = n(202784),
                i = n(392237),
                c = n(187669),
                u = n(952793),
                h = n(663550),
                m = n(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var D = n(668214),
                v = n(204744),
                f = n(919022);
            const M = (e, o) => {
                    const { id: n } = ((e, o) => o.entry.content)(0, o);
                    return n ? f.ZP.select(e, n) : void 0;
                },
                w = (0, D.Z)()
                    .propsFromState(() => ({ user: M }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: v.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                P = (e) => {
                    const { analytics: o, applyReactionInstructions: n, cellClickable: t, decoration: d, entry: i, isCarouselItem: D, onClick: v, saveAsRecentSearch: f, shouldScribeImpression: M, shouldScribeProfileClick: w, shouldStoreTypeaheadItem: P, user: y, withFollowsYou: S, withLink: _ } = e,
                        {
                            content: { id: C, promotedMetadata: I, socialContext: k },
                        } = i,
                        A = p(I),
                        T = (k && k.generalContext) || void 0,
                        R = e.displayMode,
                        E = (0, u.hC)("super_follow_android_web_subscription_enabled") && R === a.Z.SubscribableUser ? s.dk : s.ET,
                        g = d || E,
                        O = i.itemMetadata && i.itemMetadata.clientEventInfo && i.itemMetadata.clientEventInfo.details && i.itemMetadata.clientEventInfo.details.timelinesDetails && i.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === O) {
                            const e = y ? [r.Z.getUserItem(y)] : [];
                            y?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : y?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : y?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const Z = l.useCallback(() => {
                        n({ entry: i, triggerName: m.K.ON_FOLLOW });
                    }, [n, i]);
                    return l.createElement(s.Z9, { cellClickable: t, decoration: g, displayMode: R, isConcise: D, onClick: v, onFollowClick: Z, promotedContent: A, promotedItemType: h.bj.USER, referringPage: R, saveAsRecentSearch: f, shouldScribeImpression: M, shouldScribeProfileClick: w, shouldStoreTypeaheadItem: P, socialContext: T, style: D && b.isCarouselItem, userId: C, withFollowsYou: S, withLink: _ });
                },
                b = i.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                y = w(l.memo(P)),
                S = [s.ET, s.C_],
                _ = ({ cellClickable: e = !0, decoration: o, displayMode: n = a.Z.UserCompact, isCarouselItem: s, onClick: l, shouldScribeProfileClick: i = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    d
                        .iH({
                            component: y,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: n },
                                        cursor: t,
                                        itemMetadata: a,
                                        position: s,
                                    } = e,
                                    d = a.clientEventInfo,
                                    l = p(n);
                                return r.Z.getUserItem({ id_str: o, promoted_content: l }, void 0, s, t, d);
                            },
                            isFocusable: (0, t.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: n, isCarouselItem: s, onClick: l, shouldScribeProfileClick: i, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || S.includes(o) }));
        },
        684511: (e, o, n) => {
            n.d(o, { Z: () => t });
            n(202784);
            const t = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("loader.PushNotificationsPrompt"),
                    ]).then(n.bind(n, 529629)),
            });
        },
        545334: (e, o, n) => {
            n.d(o, { d: () => r });
            var t = n(111677);
            const r = n.n(t)().gf5e9ea6;
        },
        916585: (e, o, n) => {
            n.d(o, { k: () => s });
            var t = n(111677),
                r = n.n(t),
                a = n(437358);
            const s = (e, o) => {
                const { id_str: n } = e,
                    t = r().a599bbfa;
                return { Icon: a.default, text: t, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: o };
            };
        },
        847607: (e, o, n) => {
            n.d(o, { FK: () => p, GS: () => d, N1: () => i, X6: () => D, cm: () => l });
            n(202784);
            var t = n(111677),
                r = n.n(t),
                a = n(391366),
                s = n(40904);
            const d = r().hb568af4,
                l = r().bb1cbeb6,
                i =
                    (r().h2f62206,
                    (e, o, n) => {
                        const { muting: t } = e;
                        return { text: t ? l : d, onClick: t ? n : o, Icon: t ? a.default : s.default };
                    }),
                c = r().h59f52ee,
                u = r().eea0cbee,
                h = r().i29533b3,
                m = r().h129c3c3,
                p = (e) => (e ? ((e) => h({ screenName: e }))(e) : c),
                D = (e) => (e ? ((e) => m({ screenName: e }))(e) : u);
        },
        417714: (e, o, n) => {
            n.d(o, { l: () => c });
            n(202784);
            var t = n(111677),
                r = n.n(t),
                a = n(224823);
            const s = r().b3036480,
                d = r().b3036480,
                l = r().e68b09b4,
                i = r().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const n = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: l, text: i({ screenName: e.screen_name }) });
        },
        48886: (e, o, n) => {
            n.d(o, { q: () => r });
            var t = n(111677);
            const r = { defaultToast: { text: n.n(t)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, n) => {
            n.d(o, { Z: () => a });
            var t = n(615656),
                r = n(51525);
            const a = { [t.ZP.FollowError]: { customAction: r.w1 } };
        },
        23679: (e, o, n) => {
            n.d(o, { K: () => t });
            const t = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, n) => {
            n.d(o, { M: () => s });
            var t = n(807896),
                r = n(202784),
                a = n(190286);
            const s = (e) => (o) => {
                const [n, s] = r.useState(null),
                    d = (e) =>
                        new Promise((o, n) => {
                            s({ resolve: o, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: o, resolve: d } = n;
                    return r.createElement(
                        a.Z,
                        (0, t.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                d(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, t.Z)({}, o, { confirm: d }));
            };
        },
        694180: (e, o, n) => {
            n.d(o, { cM: () => v, dS: () => D, iY: () => f });
            var t = n(370751),
                r = n(399896),
                a = n(663550),
                s = n(499627),
                d = n(917799);
            const l = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, t.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, t.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                D =
                    (e) =>
                    (o, n, { api: t }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (h.has(a) && p(n(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, d._O)(o, { params: u, request: t.withEndpoint(r.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                v =
                    ({ disclosureType: e, itemId: o, itemType: n, params: t }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: h } = t,
                            D = `${n}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), D)) return Promise.resolve();
                        const v = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...t, earned: v, epoch_ms: Date.now() };
                        return (0, d._O)(a, { params: f, request: l.withEndpoint(r.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, o) => {
                            if (!o && u.has(c)) return [m(D)];
                        });
                    },
                f =
                    (e) =>
                    (o, n, { api: t }) =>
                        (0, d._O)(o, { params: e, request: t.withEndpoint(r.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, o) {
                    if (!o) return e;
                    if (o.type === c) {
                        if (!o.payload) return e;
                        const { eventKey: n } = o.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, o, n) => {
            n.d(o, { DI: () => P, H$: () => h, OB: () => b, Ww: () => c, YB: () => u, hj: () => v, qF: () => M });
            n(901951);
            var t = n(499627),
                r = n(390387);
            const a = "recentSearches",
                s = "rweb.recentSearches",
                d =
                    (e) =>
                    (o, n, { userPersistence: t }) =>
                        t.set(s, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, o) => {
                    let n = [];
                    if (e.user) {
                        const t = e.user;
                        n = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== t.id));
                    } else if (e.event) {
                        const t = e.event;
                        n = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== t.id));
                    } else if (e && e.keyword) {
                        const t = e.keyword;
                        n = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== t.query));
                    } else if (e.list) {
                        const t = e.list;
                        n = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== t.id));
                    } else if (e.topic) {
                        const t = e.topic;
                        n = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== t.id));
                    }
                    return n;
                },
                i = { fetched: !1, recentSearches: [] };
            const c = (e) => e[a].recentSearches,
                u = (e) => c(e)[0] || null,
                h = (e) => e[a].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: m, payload: e }),
                D = "rweb/recentSearches/REMOVE_QUERY",
                v =
                    (e) =>
                    (o, n, { userPersistence: t }) => {
                        o({ payload: e, type: D });
                        const a = n(),
                            s = c(a);
                        return (0, r.Qb)(a) ? o(d(s)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/CLEAR_ALL",
                M =
                    () =>
                    (e, o, { userPersistence: n }) => {
                        e({ type: f });
                        const t = o(),
                            a = c(t);
                        return (0, r.Qb)(t) ? e(d(a)) : Promise.resolve();
                    },
                w = "rweb/recentSearches/ADD_QUERY",
                P =
                    (e) =>
                    (o, n, { userPersistence: t }) => {
                        o({ payload: e, type: w });
                        const a = n(),
                            s = c(a);
                        return (0, r.Qb)(a) ? o(d(s)) : Promise.resolve();
                    },
                b =
                    () =>
                    (e, o, { userPersistence: n }) => {
                        const t = o();
                        return h(t)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: n }) => {
                                  const t = o();
                                  return (0, r.Qb)(t)
                                      ? n
                                            .get(s)
                                            .then((o) => {
                                                e(p(o));
                                            })
                                            .catch(() => {
                                                e(p());
                                            })
                                      : (e(p()), Promise.resolve());
                              });
                    };
            t.Z.register({
                [a]: function (e = i, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case w: {
                            const n = o.payload,
                                t = n ? l(n, e.recentSearches) : [];
                            return t.length > 49 && t.splice(49, 1), n && t.unshift(n), { ...e, recentSearches: t };
                        }
                        case D: {
                            const n = o.payload,
                                t = n ? l(n, e.recentSearches) : [];
                            return { ...e, recentSearches: t };
                        }
                        case f:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...o.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, o, n) => {
            n.d(o, { r: () => i });
            n(136728);
            var t = n(161821),
                r = n(390387),
                a = n(836255),
                s = n(255117),
                d = n(166506),
                l = n(919022);
            const i =
                (e, o) =>
                (n, i, { api: c, featureSwitches: u }) =>
                    n(l.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            l = (0, t.Z)(a.Z.selectAll(o)).reduce((n, t) => {
                                if (null != t)
                                    if (t.user === e) n[t.id_str] = !0;
                                    else if (t.retweeted_status) {
                                        const r = a.Z.select(o, t.retweeted_status);
                                        r?.user === e && (n[t.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            c = (0, r._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            h = (0, d.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const n = (0, d.f8)(e, o, h);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, o, n) => {
            n.d(o, { du: () => c, f8: () => u, k9: () => i });
            var t = n(503768),
                r = n(750085),
                a = n(962741),
                s = n(466015),
                d = n(919022),
                l = n(218951);
            const i = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(t.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (o, n) => {
                    const t = n();
                    o(
                        e
                            .selectEntries(t)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    n = d.ZP.select(t, o);
                                return n && !n.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, n) => {
                    if (!n.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            t = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(t);
                    }
                };
        },
        151624: (e, o, n) => {
            n.d(o, { Z: () => t });
            const t = n(454479).Z;
        },
        454479: (e, o, n) => {
            n.d(o, { Z: () => p });
            var t = n(18198),
                r = n(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                s = r.Z.currentCentroidYOfTouchesChangedAfter,
                d = r.Z.previousCentroidXOfTouchesChangedAfter,
                l = r.Z.previousCentroidYOfTouchesChangedAfter,
                i = r.Z.currentCentroidX,
                c = r.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, o) {
                        (e.numberActiveTouches = o.numberActiveTouches), (e.moveX = a(o, e._accountsForMovesUpTo)), (e.moveY = s(o, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            t = d(o, n),
                            r = a(o, n),
                            i = l(o, n),
                            c = s(o, n),
                            u = e.dx + (r - t),
                            h = e.dy + (c - i),
                            m = o.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = o.mostRecentTimeStamp);
                    },
                    create(e) {
                        var o = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (o) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(o, n),
                                onMoveShouldSetResponder: (o) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(o, n),
                                onStartShouldSetResponderCapture: (o) => (1 === o.nativeEvent.touches.length && u._initializeGestureState(n), (n.numberActiveTouches = o.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(o, n)),
                                onMoveShouldSetResponderCapture(o) {
                                    var t = o.touchHistory;
                                    return n._accountsForMovesUpTo !== t.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, t), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(o, n));
                                },
                                onResponderGrant: (r) => (
                                    o.handle || (o.handle = t.Z.createInteractionHandle()),
                                    o.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(o),
                                    (o.shouldCancelClick = !0),
                                    (n.x0 = i(r.touchHistory)),
                                    (n.y0 = c(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(t) {
                                    h(o, e.onPanResponderReject, t, n);
                                },
                                onResponderRelease(t) {
                                    h(o, e.onPanResponderRelease, t, n), m(o), u._initializeGestureState(n);
                                },
                                onResponderStart(o) {
                                    var t = o.touchHistory;
                                    (n.numberActiveTouches = t.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(o, n);
                                },
                                onResponderMove(o) {
                                    var t = o.touchHistory;
                                    n._accountsForMovesUpTo !== t.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, t), e.onPanResponderMove && e.onPanResponderMove(o, n));
                                },
                                onResponderEnd(t) {
                                    var r = t.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), h(o, e.onPanResponderEnd, t, n);
                                },
                                onResponderTerminate(t) {
                                    h(o, e.onPanResponderTerminate, t, n), m(o), u._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (o) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(o, n),
                                onClickCapture: (e) => {
                                    !0 === o.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => o.handle,
                        };
                    },
                };
            function h(e, o, n, r) {
                e.handle && (t.Z.clearInteractionHandle(e.handle), (e.handle = null)), o && o(n, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const p = u;
        },
        661841: (e, o, n) => {
            n.d(o, { Z: () => r });
            var t = {
                centroidDimension: function (e, o, n, r) {
                    var a = e.touchBank,
                        s = 0,
                        d = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > o && ((s += r && n ? l.currentPageX : r && !n ? l.currentPageY : !r && n ? l.previousPageX : l.previousPageY), (d = 1));
                    else
                        for (var i = 0; i < a.length; i++) {
                            var c = a[i];
                            if (null != c && c.touchActive && c.currentTimeStamp >= o) {
                                (s += r && n ? c.currentPageX : r && !n ? c.currentPageY : !r && n ? c.previousPageX : c.previousPageY), d++;
                            }
                        }
                    return d > 0 ? s / d : t.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, o) {
                    return t.centroidDimension(e, o, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, o) {
                    return t.centroidDimension(e, o, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, o) {
                    return t.centroidDimension(e, o, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, o) {
                    return t.centroidDimension(e, o, !1, !1);
                },
                currentCentroidX: function (e) {
                    return t.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return t.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler-e96e9bea.2938c8ba.js.map
