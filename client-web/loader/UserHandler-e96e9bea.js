"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler-e96e9bea"],
    {
        333241: (e, o, n) => {
            n.d(o, { Z: () => w });
            n(136728);
            var r = n(202784),
                t = n(638236),
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
                P = d().j7bb1a43,
                b = d().hef5960c,
                w = (0, m.M)((e) => {
                    const { onBlock: o, onClose: n, onMute: s, onRemoveFollower: d, onReportUser: m, onShare: w, onUnblock: y, onUnmute: S, user: _ } = e,
                        C = [],
                        I = (o, n) => {
                            const { confirm: r, onClose: t } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(n, i.Z)
                                    .finally(t);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !_.protected &&
                        !_.blocking &&
                        !_.blocked_by &&
                        C.push({
                            Icon: t.Z,
                            onClick: () => {
                                n(), w();
                            },
                            testID: M,
                            text: b,
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
                            text: P({ screenName: _.screen_name }),
                        });
                    const k = C.map(({ Icon: e, onClick: o, testID: n, text: r }) => ({ text: r, onClick: o, Icon: e, testID: n }));
                    return r.createElement(a.Z, { items: k, onCloseRequested: n });
                });
        },
        864479: (e, o, n) => {
            n.d(o, { Z: () => s });
            var r = n(807896),
                t = n(202784),
                a = n(771099);
            const s = (e) => (o) => t.createElement(a.$6, null, (n) => t.createElement(e, (0, r.Z)({}, o, { isInSidebar: n })));
        },
        293988: (e, o, n) => {
            n.d(o, { Z: () => S });
            var r = n(202784),
                t = n(154003),
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
                P = s().j87c21f4,
                b = s().iebc30ca,
                w = s().dc740eb2;
            class y extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(t.ZP, { "aria-label": M, hoverLabel: { label: b }, icon: r.createElement(d.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(t.ZP, { "aria-label": f, hoverLabel: { label: P }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(i.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: n, userId: r } = this.props;
                    return n(r, { device: e }).catch(o(c.Z));
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
            var r = n(459643),
                t = n(942893),
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
                P = (0, D.Z)()
                    .propsFromState(() => ({ user: M }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: v.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                b = (e) => {
                    const { analytics: o, applyReactionInstructions: n, cellClickable: r, decoration: d, entry: i, isCarouselItem: D, onClick: v, saveAsRecentSearch: f, shouldScribeImpression: M, shouldScribeProfileClick: P, shouldStoreTypeaheadItem: b, user: y, withFollowsYou: S, withLink: _ } = e,
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
                            const e = y ? [t.Z.getUserItem(y)] : [];
                            y?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : y?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : y?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const Z = l.useCallback(() => {
                        n({ entry: i, triggerName: m.K.ON_FOLLOW });
                    }, [n, i]);
                    return l.createElement(s.Z9, { cellClickable: r, decoration: g, displayMode: R, isConcise: D, onClick: v, onFollowClick: Z, promotedContent: A, promotedItemType: h.bj.USER, referringPage: R, saveAsRecentSearch: f, shouldScribeImpression: M, shouldScribeProfileClick: P, shouldStoreTypeaheadItem: b, socialContext: T, style: D && w.isCarouselItem, userId: C, withFollowsYou: S, withLink: _ });
                },
                w = i.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                y = P(l.memo(b)),
                S = [s.ET, s.C_],
                _ = ({ cellClickable: e = !0, decoration: o, displayMode: n = a.Z.UserCompact, isCarouselItem: s, onClick: l, shouldScribeProfileClick: i = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    d
                        .iH({
                            component: y,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: n },
                                        cursor: r,
                                        itemMetadata: a,
                                        position: s,
                                    } = e,
                                    d = a.clientEventInfo,
                                    l = p(n);
                                return t.Z.getUserItem({ id_str: o, promoted_content: l }, void 0, s, r, d);
                            },
                            isFocusable: (0, r.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: n, isCarouselItem: s, onClick: l, shouldScribeProfileClick: i, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || S.includes(o) }));
        },
        684511: (e, o, n) => {
            n.d(o, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
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
            n.d(o, { d: () => t });
            var r = n(111677);
            const t = n.n(r)().gf5e9ea6;
        },
        916585: (e, o, n) => {
            n.d(o, { k: () => s });
            var r = n(111677),
                t = n.n(r),
                a = n(437358);
            const s = (e, o) => {
                const { id_str: n, screen_name: r } = e,
                    s = (0, t().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: o };
            };
        },
        847607: (e, o, n) => {
            n.d(o, { Aq: () => u, FK: () => M, GS: () => d, N1: () => m, PY: () => h, X6: () => P, cm: () => l });
            n(202784);
            var r = n(111677),
                t = n.n(r),
                a = n(391366),
                s = n(40904);
            const d = t().hb568af4,
                l = t().bb1cbeb6,
                i = (t().h2f62206, t().e67b2d65),
                c = t().f05597b3,
                u = (e) => i({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, n) => {
                    const { muting: r, screen_name: t } = e;
                    return { text: r ? h(t) : u(t), onClick: r ? n : o, Icon: r ? a.default : s.default };
                },
                p = t().h59f52ee,
                D = t().eea0cbee,
                v = t().i29533b3,
                f = t().h129c3c3,
                M = (e) => (e ? ((e) => v({ screenName: e }))(e) : p),
                P = (e) => (e ? ((e) => f({ screenName: e }))(e) : D);
        },
        417714: (e, o, n) => {
            n.d(o, { l: () => c });
            n(202784);
            var r = n(111677),
                t = n.n(r),
                a = n(224823);
            const s = t().b3036480,
                d = t().b3036480,
                l = t().e68b09b4,
                i = t().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const n = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: l, text: i({ screenName: e.screen_name }) });
        },
        48886: (e, o, n) => {
            n.d(o, { q: () => t });
            var r = n(111677);
            const t = { defaultToast: { text: n.n(r)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, n) => {
            n.d(o, { Z: () => a });
            var r = n(615656),
                t = n(51525);
            const a = { [r.ZP.FollowError]: { customAction: t.w1 } };
        },
        23679: (e, o, n) => {
            n.d(o, { K: () => r });
            const r = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, n) => {
            n.d(o, { M: () => s });
            var r = n(807896),
                t = n(202784),
                a = n(190286);
            const s = (e) => (o) => {
                const [n, s] = t.useState(null),
                    d = (e) =>
                        new Promise((o, n) => {
                            s({ resolve: o, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: o, resolve: d } = n;
                    return t.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                d(), s(null);
                            },
                        }),
                    );
                }
                return t.createElement(e, (0, r.Z)({}, o, { confirm: d }));
            };
        },
        694180: (e, o, n) => {
            n.d(o, { cM: () => v, dS: () => D, iY: () => f });
            var r = n(370751),
                t = n(399896),
                a = n(663550),
                s = n(499627),
                d = n(917799);
            const l = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                D =
                    (e) =>
                    (o, n, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (h.has(a) && p(n(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, d._O)(o, { params: u, request: r.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                v =
                    ({ disclosureType: e, itemId: o, itemType: n, params: r }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: h } = r,
                            D = `${n}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), D)) return Promise.resolve();
                        const v = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...r, earned: v, epoch_ms: Date.now() };
                        return (0, d._O)(a, { params: f, request: l.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, o) => {
                            if (!o && u.has(c)) return [m(D)];
                        });
                    },
                f =
                    (e) =>
                    (o, n, { api: r }) =>
                        (0, d._O)(o, { params: e, request: r.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            n.d(o, { DI: () => b, H$: () => h, OB: () => w, Ww: () => c, YB: () => u, hj: () => v, qF: () => M });
            n(901951);
            var r = n(499627),
                t = n(390387);
            const a = "recentSearches",
                s = "rweb.recentSearches",
                d =
                    (e) =>
                    (o, n, { userPersistence: r }) =>
                        r.set(s, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, o) => {
                    let n = [];
                    if (e.user) {
                        const r = e.user;
                        n = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== r.id));
                    } else if (e.event) {
                        const r = e.event;
                        n = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== r.id));
                    } else if (e && e.keyword) {
                        const r = e.keyword;
                        n = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== r.query));
                    } else if (e.list) {
                        const r = e.list;
                        n = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== r.id));
                    } else if (e.topic) {
                        const r = e.topic;
                        n = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== r.id));
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
                    (o, n, { userPersistence: r }) => {
                        o({ payload: e, type: D });
                        const a = n(),
                            s = c(a);
                        return (0, t.Qb)(a) ? o(d(s)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/CLEAR_ALL",
                M =
                    () =>
                    (e, o, { userPersistence: n }) => {
                        e({ type: f });
                        const r = o(),
                            a = c(r);
                        return (0, t.Qb)(r) ? e(d(a)) : Promise.resolve();
                    },
                P = "rweb/recentSearches/ADD_QUERY",
                b =
                    (e) =>
                    (o, n, { userPersistence: r }) => {
                        o({ payload: e, type: P });
                        const a = n(),
                            s = c(a);
                        return (0, t.Qb)(a) ? o(d(s)) : Promise.resolve();
                    },
                w =
                    () =>
                    (e, o, { userPersistence: n }) => {
                        const r = o();
                        return h(r)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: n }) => {
                                  const r = o();
                                  return (0, t.Qb)(r)
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
            r.Z.register({
                [a]: function (e = i, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case P: {
                            const n = o.payload,
                                r = n ? l(n, e.recentSearches) : [];
                            return r.length > 49 && r.splice(49, 1), n && r.unshift(n), { ...e, recentSearches: r };
                        }
                        case D: {
                            const n = o.payload,
                                r = n ? l(n, e.recentSearches) : [];
                            return { ...e, recentSearches: r };
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
            var r = n(161821),
                t = n(390387),
                a = n(836255),
                s = n(255117),
                d = n(166506),
                l = n(919022);
            const i =
                (e, o) =>
                (n, i, { api: c, featureSwitches: u }) =>
                    n(l.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            l = (0, r.Z)(a.Z.selectAll(o)).reduce((n, r) => {
                                if (null != r)
                                    if (r.user === e) n[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const t = a.Z.select(o, r.retweeted_status);
                                        t?.user === e && (n[r.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            c = (0, t._h)(i()),
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
            var r = n(503768),
                t = n(750085),
                a = n(962741),
                s = n(466015),
                d = n(919022),
                l = n(218951);
            const i = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: t.Z }),
                c = (e) => (o, n) => {
                    const r = n();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    n = d.ZP.select(r, o);
                                return n && !n.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, n) => {
                    if (!n.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(r);
                    }
                };
        },
        151624: (e, o, n) => {
            n.d(o, { Z: () => r });
            const r = n(454479).Z;
        },
        454479: (e, o, n) => {
            n.d(o, { Z: () => p });
            var r = n(18198),
                t = n(661841),
                a = t.Z.currentCentroidXOfTouchesChangedAfter,
                s = t.Z.currentCentroidYOfTouchesChangedAfter,
                d = t.Z.previousCentroidXOfTouchesChangedAfter,
                l = t.Z.previousCentroidYOfTouchesChangedAfter,
                i = t.Z.currentCentroidX,
                c = t.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, o) {
                        (e.numberActiveTouches = o.numberActiveTouches), (e.moveX = a(o, e._accountsForMovesUpTo)), (e.moveY = s(o, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            r = d(o, n),
                            t = a(o, n),
                            i = l(o, n),
                            c = s(o, n),
                            u = e.dx + (t - r),
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
                                    var r = o.touchHistory;
                                    return n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(o, n));
                                },
                                onResponderGrant: (t) => (
                                    o.handle || (o.handle = r.Z.createInteractionHandle()),
                                    o.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(o),
                                    (o.shouldCancelClick = !0),
                                    (n.x0 = i(t.touchHistory)),
                                    (n.y0 = c(t.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(t, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(t, n)
                                ),
                                onResponderReject(r) {
                                    h(o, e.onPanResponderReject, r, n);
                                },
                                onResponderRelease(r) {
                                    h(o, e.onPanResponderRelease, r, n), m(o), u._initializeGestureState(n);
                                },
                                onResponderStart(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(o, n);
                                },
                                onResponderMove(o) {
                                    var r = o.touchHistory;
                                    n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, r), e.onPanResponderMove && e.onPanResponderMove(o, n));
                                },
                                onResponderEnd(r) {
                                    var t = r.touchHistory;
                                    (n.numberActiveTouches = t.numberActiveTouches), h(o, e.onPanResponderEnd, r, n);
                                },
                                onResponderTerminate(r) {
                                    h(o, e.onPanResponderTerminate, r, n), m(o), u._initializeGestureState(n);
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
            function h(e, o, n, t) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), o && o(n, t);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const p = u;
        },
        661841: (e, o, n) => {
            n.d(o, { Z: () => t });
            var r = {
                centroidDimension: function (e, o, n, t) {
                    var a = e.touchBank,
                        s = 0,
                        d = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > o && ((s += t && n ? l.currentPageX : t && !n ? l.currentPageY : !t && n ? l.previousPageX : l.previousPageY), (d = 1));
                    else
                        for (var i = 0; i < a.length; i++) {
                            var c = a[i];
                            if (null != c && c.touchActive && c.currentTimeStamp >= o) {
                                (s += t && n ? c.currentPageX : t && !n ? c.currentPageY : !t && n ? c.previousPageX : c.previousPageY), d++;
                            }
                        }
                    return d > 0 ? s / d : r.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, o) {
                    return r.centroidDimension(e, o, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, o) {
                    return r.centroidDimension(e, o, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, o) {
                    return r.centroidDimension(e, o, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, o) {
                    return r.centroidDimension(e, o, !1, !1);
                },
                currentCentroidX: function (e) {
                    return r.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return r.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const t = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler-e96e9bea.ba296e1a.js.map
