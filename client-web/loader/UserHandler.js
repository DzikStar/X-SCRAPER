"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var o = n(202784),
                r = n(638236),
                a = n(811176),
                i = n(111677),
                s = n.n(i),
                l = n(415506),
                c = n(516951),
                d = n(376293),
                u = n(847607),
                h = n(417714),
                m = n(988823);
            const p = "block",
                f = "mute",
                v = "removeFollower",
                b = "report",
                D = "share",
                y = s().j7bb1a43,
                w = s().g00b4c55,
                S = (0, m.M)((e) => {
                    const { onBlock: t, onClose: n, onMute: i, onRemoveFollower: s, onReportUser: m, onShare: S, onUnblock: P, onUnmute: C, user: g } = e,
                        E = [],
                        M = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                o({ confirmButtonLabel: e, ...a })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !g.protected &&
                        !g.blocking &&
                        !g.blocked_by &&
                        E.push({
                            Icon: r.Z,
                            onClick: () => {
                                n(), S();
                            },
                            testID: D,
                            text: w({ screenName: g.screen_name }),
                        });
                    !g.blocking &&
                        E.push({
                            ...(0, u.N1)(
                                g,
                                () => {
                                    n(), i();
                                },
                                () => {
                                    n(), C();
                                },
                            ),
                            testID: f,
                        });
                    g.followed_by &&
                        E.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    M(e, s);
                                },
                                user: g,
                            }),
                            testID: v,
                        }),
                        E.push((0, d.op)({ blockAction: (e) => M(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => M(e, P), user: g })),
                        E.push({
                            Icon: l.default,
                            onClick: () => {
                                n(), m();
                            },
                            testID: b,
                            text: y({ screenName: g.screen_name }),
                        });
                    const _ = E.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(a.Z, { items: _, onCloseRequested: n });
                });
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                r = n(202784),
                a = n(771099);
            const i = (e) => (t) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(202784),
                r = n(154003),
                a = n(111677),
                i = n.n(a),
                s = n(74514),
                l = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                h = n(668214),
                m = n(257166),
                p = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                v = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = i().bdba3e1a,
                D = i().c4da7d28,
                y = i().j87c21f4,
                w = i().iebc30ca,
                S = i().dc740eb2;
            class P extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": D, hoverLabel: { label: w }, icon: o.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: o.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: S }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: o } = this.props;
                    return n(o, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const C = v(P);
        },
        168222: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var o = n(459643),
                r = n(942893),
                a = n(409438),
                i = n(240089),
                s = n(351322),
                l = n(202784),
                c = n(392237),
                d = n(187669),
                u = n(952793),
                h = n(663550),
                m = n(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var f = n(668214),
                v = n(204744),
                b = n(919022);
            const D = (e, t) => {
                    const { id: n } = ((e, t) => t.entry.content)(0, t);
                    return n ? b.ZP.select(e, n) : void 0;
                },
                y = (0, f.Z)()
                    .propsFromState(() => ({ user: D }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: v.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                w = (e) => {
                    const { analytics: t, applyReactionInstructions: n, cellClickable: o, decoration: s, entry: c, isCarouselItem: f, onClick: v, saveAsRecentSearch: b, shouldScribeImpression: D, shouldScribeProfileClick: y, shouldStoreTypeaheadItem: w, user: P, withFollowsYou: C, withLink: g } = e,
                        {
                            content: { id: E, promotedMetadata: M, socialContext: _ },
                        } = c,
                        k = p(M),
                        I = (_ && _.generalContext) || void 0,
                        T = e.displayMode,
                        A = (0, u.hC)("super_follow_android_web_subscription_enabled") && T === a.Z.SubscribableUser ? i.dk : i.ET,
                        Z = s || A,
                        R = c.itemMetadata && c.itemMetadata.clientEventInfo && c.itemMetadata.clientEventInfo.details && c.itemMetadata.clientEventInfo.details.timelinesDetails && c.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, d.q)(() => {
                        if ("WhoToFollow" === R) {
                            const e = P ? [r.Z.getUserItem(P)] : [];
                            P?.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : P?.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : P?.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const x = l.useCallback(() => {
                        n({ entry: c, triggerName: m.K.ON_FOLLOW });
                    }, [n, c]);
                    return l.createElement(i.Z9, { cellClickable: o, decoration: Z, displayMode: T, isConcise: f, onClick: v, onFollowClick: x, promotedContent: k, promotedItemType: h.bj.USER, referringPage: T, saveAsRecentSearch: b, shouldScribeImpression: D, shouldScribeProfileClick: y, shouldStoreTypeaheadItem: w, socialContext: I, style: f && S.isCarouselItem, userId: E, withFollowsYou: C, withLink: g });
                },
                S = c.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                P = y(l.memo(w)),
                C = [i.ET, i.C_],
                g = ({ cellClickable: e = !0, decoration: t, displayMode: n = a.Z.UserCompact, isCarouselItem: i, onClick: l, shouldScribeProfileClick: c = !0, shouldScribeImpression: d = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    s
                        .iH({
                            component: P,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: t, promotedMetadata: n },
                                        cursor: o,
                                        itemMetadata: a,
                                        position: i,
                                    } = e,
                                    s = a.clientEventInfo,
                                    l = p(n);
                                return r.Z.getUserItem({ id_str: t, promoted_content: l }, void 0, i, o, s);
                            },
                            isFocusable: (0, o.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: t, displayMode: n, isCarouselItem: i, onClick: l, shouldScribeProfileClick: c, shouldScribeImpression: d, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !t || C.includes(t) }));
        },
        684511: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
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
        545334: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(111677);
            const r = n.n(o)().gf5e9ea6;
        },
        916585: (e, t, n) => {
            n.d(t, { k: () => i });
            var o = n(111677),
                r = n.n(o),
                a = n(437358);
            const i = (e, t) => {
                const { id_str: n } = e,
                    o = r().a599bbfa;
                return { Icon: a.default, text: o, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            n.d(t, { FK: () => p, GS: () => s, N1: () => c, X6: () => f, cm: () => l });
            n(202784);
            var o = n(111677),
                r = n.n(o),
                a = n(391366),
                i = n(40904);
            const s = r().hb568af4,
                l = r().bb1cbeb6,
                c =
                    (r().h2f62206,
                    (e, t, n) => {
                        const { muting: o } = e;
                        return { text: o ? l : s, onClick: o ? n : t, Icon: o ? a.default : i.default };
                    }),
                d = r().h59f52ee,
                u = r().eea0cbee,
                h = r().i29533b3,
                m = r().h129c3c3,
                p = (e) => (e ? ((e) => h({ screenName: e }))(e) : d),
                f = (e) => (e ? ((e) => m({ screenName: e }))(e) : u);
        },
        417714: (e, t, n) => {
            n.d(t, { l: () => d });
            n(202784);
            var o = n(111677),
                r = n.n(o),
                a = n(224823);
            const i = r().b3036480,
                s = r().b3036480,
                l = r().e68b09b4,
                c = r().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const n = u(t);
                    return { Icon: a.default, text: i, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: s, label: l, text: c({ screenName: e.screen_name }) });
        },
        48886: (e, t, n) => {
            n.d(t, { q: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(615656),
                r = n(51525);
            const a = { [o.ZP.FollowError]: { customAction: r.w1 } };
        },
        23679: (e, t, n) => {
            n.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, t, n) => {
            n.d(t, { M: () => i });
            var o = n(807896),
                r = n(202784),
                a = n(190286);
            const i = (e) => (t) => {
                const [n, i] = r.useState(null),
                    s = (e) =>
                        new Promise((t, n) => {
                            i({ resolve: t, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: t, resolve: s } = n;
                    return r.createElement(
                        a.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                s(), i(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, o.Z)({}, t, { confirm: s }));
            };
        },
        694180: (e, t, n) => {
            n.d(t, { cM: () => v, dS: () => f, iY: () => b });
            var o = n(370751),
                r = n(399896),
                a = n(663550),
                i = n(499627),
                s = n(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, o.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: o }) => {
                        const { event: a, impression_id: i, promoted_trend_id: l } = e,
                            d = `trend-${l}-${a}`;
                        if (h.has(a) && p(n(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: i };
                        return (0, s._O)(t, { params: u, request: o.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [m(d)];
                        });
                    },
                v =
                    ({ disclosureType: e, itemId: t, itemType: n, params: o }) =>
                    (a, i, { api: l }) => {
                        const { event: d, impression_id: h } = o,
                            f = `${n}-${t ?? "undefined"}-${h ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(i(), f)) return Promise.resolve();
                        const v = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...o, earned: v, epoch_ms: Date.now() };
                        return (0, s._O)(a, { params: b, request: l.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && u.has(d)) return [m(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, s._O)(t, { params: e, request: o.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => w, H$: () => h, OB: () => S, Ww: () => d, YB: () => u, hj: () => v, qF: () => D });
            n(901951);
            var o = n(499627),
                r = n(390387);
            const a = "recentSearches",
                i = "rweb.recentSearches",
                s =
                    (e) =>
                    (t, n, { userPersistence: o }) =>
                        o.set(i, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, t) => {
                    let n = [];
                    if (e.user) {
                        const o = e.user;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== o.id));
                    } else if (e.event) {
                        const o = e.event;
                        n = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== o.id));
                    } else if (e && e.keyword) {
                        const o = e.keyword;
                        n = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== o.query));
                    } else if (e.list) {
                        const o = e.list;
                        n = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== o.id));
                    } else if (e.topic) {
                        const o = e.topic;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== o.id));
                    }
                    return n;
                },
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[a].recentSearches,
                u = (e) => d(e)[0] || null,
                h = (e) => e[a].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                v =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: f });
                        const a = n(),
                            i = d(a);
                        return (0, r.Qb)(a) ? t(s(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                D =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: b });
                        const o = t(),
                            a = d(o);
                        return (0, r.Qb)(o) ? e(s(a)) : Promise.resolve();
                    },
                y = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: y });
                        const a = n(),
                            i = d(a);
                        return (0, r.Qb)(a) ? t(s(i)) : Promise.resolve();
                    },
                S =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const o = t();
                        return h(o)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const o = t();
                                  return (0, r.Qb)(o)
                                      ? n
                                            .get(i)
                                            .then((t) => {
                                                e(p(t));
                                            })
                                            .catch(() => {
                                                e(p());
                                            })
                                      : (e(p()), Promise.resolve());
                              });
                    };
            o.Z.register({
                [a]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y: {
                            const n = t.payload,
                                o = n ? l(n, e.recentSearches) : [];
                            return o.length > 49 && o.splice(49, 1), n && o.unshift(n), { ...e, recentSearches: o };
                        }
                        case f: {
                            const n = t.payload,
                                o = n ? l(n, e.recentSearches) : [];
                            return { ...e, recentSearches: o };
                        }
                        case b:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, t, n) => {
            n.d(t, { r: () => c });
            n(136728);
            var o = n(161821),
                r = n(390387),
                a = n(836255),
                i = n(255117),
                s = n(166506),
                l = n(919022);
            const c =
                (e, t) =>
                (n, c, { api: d, featureSwitches: u }) =>
                    n(l.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            l = (0, o.Z)(a.Z.selectAll(t)).reduce((n, o) => {
                                if (null != o)
                                    if (o.user === e) n[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const r = a.Z.select(t, o.retweeted_status);
                                        r?.user === e && (n[o.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            d = (0, r._h)(c()),
                            u = d ? [(0, i.ZP)({ useLatest: !1, userId: d }).removeTweets(l), (0, i.ZP)({ useLatest: !0, userId: d }).removeTweets(l)] : [],
                            h = (0, s.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const n = (0, s.f8)(e, t, h);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, t, n) => {
            n.d(t, { du: () => d, f8: () => u, k9: () => c });
            var o = n(503768),
                r = n(750085),
                a = n(962741),
                i = n(466015),
                s = n(919022),
                l = n(218951);
            const c = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, n) => {
                    const o = n();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    n = s.ZP.select(o, t);
                                return n && !n.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, n) => {
                    if (!n.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            o = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(o);
                    }
                };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
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
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
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
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => v });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(111677),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                h = n(173739);
            const m = s().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, s] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: f.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(l.default, null) : o.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: f.slider },
                            o.createElement(h.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function v(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [h, m] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new D(e);
                                            "function" == typeof s && s(t), o(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            o(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, s, l]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && h && o.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            v.Prepare = function () {
                return (
                    o.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class D extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, D), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                s = n(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: h, testID: m, withDarkBackground: p = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    v = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(s.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: v, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: h, testID: m });
            };
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: s, value: l, ...c }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: s, onDarkBackground: i, value: [c.min, l], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return o.createElement(r.Z, u);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [f, v] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, v));
                        }, [f.animating, f.oldText]),
                        o.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...m, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [p.root, n] },
                                t ? o.createElement("span", { style: l }, o.createElement(s.ZP, d, f.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, v),
                                        style: c,
                                    },
                                    o.createElement(s.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, b, v])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => S });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                h = n(551611),
                m = n(111677),
                p = n.n(m),
                f = n(891198),
                v = n(537392),
                b = n(280278);
            const D = p().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                w = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(v.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = r), a < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? D(t) : n) : void 0);
                        var a;
                    });
                };
            class S extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: s } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: l }) => o.createElement(i.ZP, { color: e ? n : a, dir: l, style: [g.inner, e && "blue500" === n && g.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                h = s.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && i && !e?.isHovered;
                            return o.createElement(l.Z, { hoverLabel: r, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, C[m ? "haloBackground" : n], !c && g.iconBackground, "small" === a && g.iconSmallBoundingBox, m && g.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return o.createElement(d.ZP, { animation: p || h.Bf, animationContainerStyle: P[t], animationStyle: M, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [P[t], !r && i && g.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(w, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: h, link: m, preventFocusShift: p, renderMenu: f, renderWrapper: v = o.Fragment, style: b, testID: D } = this.props,
                        y = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [g.root, b] },
                        o.createElement(
                            v,
                            null,
                            c
                                ? this._renderContent(i)
                                : o.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [g.triggerAreaRoot, g.outlineNone], testID: D }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        y ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            S.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const P = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                C = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                g = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                E = "224.5%",
                M = { width: E, height: E };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(157396);
            const r = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        151624: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(18198),
                r = n(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                i = r.Z.currentCentroidYOfTouchesChangedAfter,
                s = r.Z.previousCentroidXOfTouchesChangedAfter,
                l = r.Z.previousCentroidYOfTouchesChangedAfter,
                c = r.Z.currentCentroidX,
                d = r.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = s(t, n),
                            r = a(t, n),
                            c = l(t, n),
                            d = i(t, n),
                            u = e.dx + (r - o),
                            h = e.dy + (d - c),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && u._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = c(r.touchHistory)),
                                    (n.y0 = d(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(o) {
                                    h(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    h(t, e.onPanResponderRelease, o, n), m(t), u._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), h(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    h(t, e.onPanResponderTerminate, o, n), m(t), u._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, n, r) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const p = u;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = {
                centroidDimension: function (e, t, n, r) {
                    var a = e.touchBank,
                        i = 0,
                        s = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > t && ((i += r && n ? l.currentPageX : r && !n ? l.currentPageY : !r && n ? l.previousPageX : l.previousPageY), (s = 1));
                    else
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c];
                            if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                (i += r && n ? d.currentPageX : r && !n ? d.currentPageY : !r && n ? d.previousPageX : d.previousPageY), s++;
                            }
                        }
                    return s > 0 ? i / s : o.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return o.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return o.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.e549739a.js.map
