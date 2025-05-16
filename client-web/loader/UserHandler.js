"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, t, n) => {
            n.d(t, { Z: () => _ });
            n(136728);
            var o = n(202784),
                r = n(638236),
                a = n(811176),
                l = n(674132),
                s = n.n(l),
                i = n(415506),
                d = n(516951),
                c = n(443781),
                u = n(376293),
                h = n(847607),
                m = n(417714),
                p = n(988823);
            const f = "block",
                D = "mute",
                b = "removeFollower",
                w = "report",
                y = "share",
                E = s().j7bb1a43,
                P = s().hef5960c,
                _ = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: n, onClose: l, onMute: s, onRemoveFollower: p, onReportUser: _, onShare: v, onUnblock: M, onUnmute: k, user: g } = e,
                        I = [],
                        C = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                o({ confirmButtonLabel: e, ...a })
                                    .then(n, d.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !g.protected &&
                        !g.blocking &&
                        !g.blocked_by &&
                        I.push({
                            Icon: r.Z,
                            onClick: () => {
                                l(), v();
                            },
                            testID: y,
                            text: P,
                        });
                    !g.blocking &&
                        I.push({
                            ...(0, h.N1)(
                                g,
                                () => {
                                    l(), s();
                                },
                                () => {
                                    l(), k();
                                },
                            ),
                            testID: D,
                        });
                    g.followed_by &&
                        I.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    C(e, p);
                                },
                                user: g,
                            }),
                            testID: b,
                        }),
                        I.push((0, u.op)({ blockAction: (e) => C(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => C(e, M), user: g })),
                        I.push({
                            Icon: i.default,
                            onClick: () => {
                                l(), _();
                            },
                            testID: w,
                            text: E({ screenName: g.screen_name }),
                        });
                    const S = I.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(a.Z, { items: S, onCloseRequested: l });
                });
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                r = n(202784),
                a = n(771099);
            const l = (e) => (t) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                r = n(154003),
                a = n(674132),
                l = n.n(a),
                s = n(74514),
                i = n(405303),
                d = n(684511),
                c = n(860174),
                u = n(71620),
                h = n(668214),
                m = n(257166),
                p = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                D = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = l().bdba3e1a,
                w = l().c4da7d28,
                y = l().j87c21f4,
                E = l().iebc30ca,
                P = l().dc740eb2;
            class _ extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": w, hoverLabel: { label: E }, icon: o.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: o.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(d.Z, { fullScreen: !0, message: P }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: o } = this.props;
                    return n(o, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = D(_);
        },
        168222: (e, t, n) => {
            n.r(t), n.d(t, { default: () => M });
            var o = n(459643),
                r = n(942893),
                a = n(409438),
                l = n(240089),
                s = n(351322),
                i = n(202784),
                d = n(392237),
                c = n(187669),
                u = n(952793),
                h = n(663550),
                m = n(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var f = n(668214),
                D = n(204744),
                b = n(919022);
            const w = (e, t) => {
                    const { id: n } = ((e, t) => t.entry.content)(0, t);
                    return n ? b.ZP.select(e, n) : void 0;
                },
                y = (0, f.Z)()
                    .propsFromState(() => ({ user: w }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: D.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                E = (e) => {
                    const { analytics: t, applyReactionInstructions: n, cellClickable: o, decoration: s, entry: d, isCarouselItem: f, onClick: D, saveAsRecentSearch: b, shouldScribeImpression: w, shouldScribeProfileClick: y, shouldStoreTypeaheadItem: E, user: _, withFollowsYou: v, withLink: M } = e,
                        {
                            content: { id: k, promotedMetadata: g, socialContext: I },
                        } = d,
                        C = p(g),
                        S = (I && I.generalContext) || void 0,
                        A = e.displayMode,
                        Z = (0, u.hC)("super_follow_android_web_subscription_enabled") && A === a.Z.SubscribableUser ? l.dk : l.ET,
                        T = s || Z,
                        x = d.itemMetadata && d.itemMetadata.clientEventInfo && d.itemMetadata.clientEventInfo.details && d.itemMetadata.clientEventInfo.details.timelinesDetails && d.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === x) {
                            const e = _ ? [r.Z.getUserItem(_)] : [];
                            _?.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : _?.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : _?.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const F = i.useCallback(() => {
                        n({ entry: d, triggerName: m.K.ON_FOLLOW });
                    }, [n, d]);
                    return i.createElement(l.Z9, { cellClickable: o, decoration: T, displayMode: A, isConcise: f, onClick: D, onFollowClick: F, promotedContent: C, promotedItemType: h.bj.USER, referringPage: A, saveAsRecentSearch: b, shouldScribeImpression: w, shouldScribeProfileClick: y, shouldStoreTypeaheadItem: E, socialContext: S, style: f && P.isCarouselItem, userId: k, withFollowsYou: v, withLink: M });
                },
                P = d.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                _ = y(i.memo(E)),
                v = [l.ET, l.C_],
                M = ({ cellClickable: e = !0, decoration: t, displayMode: n = a.Z.UserCompact, isCarouselItem: l, onClick: i, shouldScribeProfileClick: d = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    s
                        .iH({
                            component: _,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: t, promotedMetadata: n },
                                        cursor: o,
                                        itemMetadata: a,
                                        position: l,
                                    } = e,
                                    s = a.clientEventInfo,
                                    i = p(n);
                                return r.Z.getUserItem({ id_str: t, promoted_content: i }, void 0, l, o, s);
                            },
                            isFocusable: (0, o.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: t, displayMode: n, isCarouselItem: l, onClick: i, shouldScribeProfileClick: d, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !t || v.includes(t) }));
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
                        n.e("loader.PushNotificationsPrompt"),
                    ]).then(n.bind(n, 529629)),
            });
        },
        545334: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(674132);
            const r = n.n(o)().gf5e9ea6;
        },
        916585: (e, t, n) => {
            n.d(t, { k: () => l });
            var o = n(674132),
                r = n.n(o),
                a = n(437358);
            const l = (e, t) => {
                const { id_str: n, screen_name: o } = e,
                    l = (0, r().d78131b9)({ screenName: o });
                return { Icon: a.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            n.d(t, { Aq: () => u, FK: () => w, GS: () => s, N1: () => m, PY: () => h, X6: () => y, cm: () => i });
            n(202784);
            var o = n(674132),
                r = n.n(o),
                a = n(391366),
                l = n(40904);
            const s = r().hb568af4,
                i = r().bb1cbeb6,
                d = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, t, n) => {
                    const { muting: o, screen_name: r } = e;
                    return { text: o ? h(r) : u(r), onClick: o ? n : t, Icon: o ? a.default : l.default };
                },
                p = r().h59f52ee,
                f = r().eea0cbee,
                D = r().i29533b3,
                b = r().h129c3c3,
                w = (e) => (e ? ((e) => D({ screenName: e }))(e) : p),
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : f);
        },
        417714: (e, t, n) => {
            n.d(t, { l: () => c });
            n(202784);
            var o = n(674132),
                r = n.n(o),
                a = n(224823);
            const l = r().b3036480,
                s = r().b3036480,
                i = r().e68b09b4,
                d = r().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const n = u(t);
                    return { Icon: a.default, text: l, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: s, label: i, text: d({ screenName: e.screen_name }) });
        },
        48886: (e, t, n) => {
            n.d(t, { q: () => r });
            var o = n(674132);
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
            n.d(t, { M: () => l });
            var o = n(807896),
                r = n(202784),
                a = n(190286);
            const l = (e) => (t) => {
                const [n, l] = r.useState(null),
                    s = (e) =>
                        new Promise((t, n) => {
                            l({ resolve: t, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: t, resolve: s } = n;
                    return r.createElement(
                        a.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), l(null);
                            },
                            onConfirm: () => {
                                s(), l(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, o.Z)({}, t, { confirm: s }));
            };
        },
        694180: (e, t, n) => {
            n.d(t, { cM: () => D, dS: () => f, iY: () => b });
            var o = n(370751),
                r = n(399896),
                a = n(663550),
                l = n(499627),
                s = n(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, o.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: o }) => {
                        const { event: a, impression_id: l, promoted_trend_id: i } = e,
                            c = `trend-${i}-${a}`;
                        if (h.has(a) && p(n(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: l };
                        return (0, s._O)(t, { params: u, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [m(c)];
                        });
                    },
                D =
                    ({ disclosureType: e, itemId: t, itemType: n, params: o }) =>
                    (a, l, { api: i }) => {
                        const { event: c, impression_id: h } = o,
                            f = `${n}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(l(), f)) return Promise.resolve();
                        const D = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...o, earned: D, epoch_ms: Date.now() };
                        return (0, s._O)(a, { params: b, request: i.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && u.has(c)) return [m(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, s._O)(t, { params: e, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            l.Z.register({
                promotedContent: function (e = i, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => E, H$: () => h, OB: () => P, Ww: () => c, YB: () => u, hj: () => D, qF: () => w });
            n(901951);
            var o = n(499627),
                r = n(390387);
            const a = "recentSearches",
                l = "rweb.recentSearches",
                s =
                    (e) =>
                    (t, n, { userPersistence: o }) =>
                        o.set(l, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                i = (e, t) => {
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
                d = { fetched: !1, recentSearches: [] };
            const c = (e) => e[a].recentSearches,
                u = (e) => c(e)[0] || null,
                h = (e) => e[a].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                D =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: f });
                        const a = n(),
                            l = c(a);
                        return (0, r.Qb)(a) ? t(s(l)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                w =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: b });
                        const o = t(),
                            a = c(o);
                        return (0, r.Qb)(o) ? e(s(a)) : Promise.resolve();
                    },
                y = "rweb/recentSearches/ADD_QUERY",
                E =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: y });
                        const a = n(),
                            l = c(a);
                        return (0, r.Qb)(a) ? t(s(l)) : Promise.resolve();
                    },
                P =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const o = t();
                        return h(o)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const o = t();
                                  return (0, r.Qb)(o)
                                      ? n
                                            .get(l)
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
                [a]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y: {
                            const n = t.payload,
                                o = n ? i(n, e.recentSearches) : [];
                            return o.length > 49 && o.splice(49, 1), n && o.unshift(n), { ...e, recentSearches: o };
                        }
                        case f: {
                            const n = t.payload,
                                o = n ? i(n, e.recentSearches) : [];
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
            n.d(t, { r: () => d });
            n(136728);
            var o = n(161821),
                r = n(390387),
                a = n(836255),
                l = n(255117),
                s = n(166506),
                i = n(919022);
            const d =
                (e, t) =>
                (n, d, { api: c, featureSwitches: u }) =>
                    n(i.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            i = (0, o.Z)(a.Z.selectAll(t)).reduce((n, o) => {
                                if (null != o)
                                    if (o.user === e) n[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const r = a.Z.select(t, o.retweeted_status);
                                        r?.user === e && (n[o.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            c = (0, r._h)(d()),
                            u = c ? [(0, l.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, l.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            h = (0, s.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const n = (0, s.f8)(e, t, h);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, t, n) => {
            n.d(t, { du: () => c, f8: () => u, k9: () => d });
            var o = n(503768),
                r = n(750085),
                a = n(962741),
                l = n(466015),
                s = n(919022),
                i = n(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (t, n) => {
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
                        const t = (0, l.OD)(e),
                            o = (0, l.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
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
            n.d(t, { ZP: () => D });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                l = n(674132),
                s = n.n(l),
                i = n(643442),
                d = n(466445),
                c = n(731708),
                u = n(154003),
                h = n(173739);
            const m = s().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [l, s] = o.useState(0);
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
                            icon: n ? o.createElement(i.default, null) : o.createElement(d.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(c.ZP, { style: f.frames }, `${l}/${e.totalFrames}`),
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
                                value: l,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function D(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: l, onError: s, withControls: i } = e,
                    d = o.useRef(void 0),
                    c = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [h, m] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = c.current;
                        r ||
                            ((c.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        i = r.loadAnimation(a);
                                    (d.current = i),
                                        (i.onError = (e) => {
                                            const t = new w(e);
                                            "function" == typeof s && s(t), o(i, t);
                                        }),
                                        i.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (i.play(), l && l());
                                        }),
                                        i.addEventListener("complete", () => {
                                            o(i);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, l, s, i]),
                    o.useEffect(
                        () =>
                            function () {
                                d.current && d.current.destroy();
                            },
                        [d],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), i && d.current && h && o.createElement(p, { animation: d.current, autoplay: t })))
                );
            }
            D.Prepare = function () {
                return (
                    o.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class w extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, w), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(674132),
                a = n.n(r),
                l = n(149170),
                s = n(40644);
            const i = a().gaeb997e;
            const d = function ({ activeColor: e, label: t = i, Icon: n = l.default, iconSize: r = "normal", isDisabled: a, onClick: d, preventFocusShift: c, renderActionMenu: u, style: h, testID: m, withDarkBackground: p = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), d && d(e);
                        },
                        [d],
                    ),
                    D = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(s.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: D, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: c, renderMenu: u, style: h, testID: m });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                l = n(461756),
                s = n(731708),
                i = n(392237);
            const d = "up",
                c = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? d : c) : d;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                h = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = i.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: i, ...c } = e,
                        [f, D] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
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
                                if (l.Z.reducedMotionEnabled) D((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? D((e) => ({ ...e, pendingCount: null, pendingText: null })) : (D((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, D));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && D((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, D));
                        }, [f.animating, f.oldText]),
                        o.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !l.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !l.Z.reducedMotionEnabled,
                                i = { ...m, ...(f.animating ? e.post : e.active) },
                                d = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [p.root, n] },
                                t ? o.createElement("span", { style: i }, o.createElement(s.ZP, c, f.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, D),
                                        style: d,
                                    },
                                    o.createElement(s.ZP, c, f.text),
                                ),
                            );
                        }, [n, c, f, b, D])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => P });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                l = n(731708),
                s = n(58881),
                i = n(530732),
                d = n(224162),
                c = n(491915),
                u = n(392237),
                h = n(551611),
                m = n(674132),
                p = n.n(m),
                f = n(891198),
                D = n(537392),
                b = n(280278);
            const w = p().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                E = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(D.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = r), a < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? w(t) : n) : void 0);
                        var a;
                    });
                };
            class P extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: s } = this.props;
                            return o.createElement(d.ZP.Consumer, null, ({ direction: i }) => o.createElement(l.ZP, { color: e ? n : a, dir: i, style: [M.inner, e && "blue500" === n && M.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: l, isDisabled: d, showBackgroundWhenActive: c } = this.props,
                                h = s.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = c && l && !e?.isHovered;
                            return o.createElement(i.Z, { hoverLabel: r, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, v[m ? "haloBackground" : n], !d && M.iconBackground, "small" === a && M.iconSmallBoundingBox, m && M.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: l, onAnimationEnd: s, onAnimationStart: i, onError: d, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return o.createElement(c.ZP, { animation: p || h.Bf, animationContainerStyle: _[t], animationStyle: g, onAnimationEnd: s, onAnimationStart: i, onError: d });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [_[t], !r && l && M.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(E, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: l, isDisabled: s, isPresentational: d, keyboardShortcut: h, link: m, preventFocusShift: p, renderMenu: f, renderWrapper: D = o.Fragment, style: b, testID: w } = this.props,
                        y = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [M.root, b] },
                        o.createElement(
                            D,
                            null,
                            d
                                ? this._renderContent(l)
                                : o.createElement(i.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [M.triggerAreaRoot, M.outlineNone], testID: w }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = l || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        y ? o.createElement(c.ZP.Prepare, null) : null,
                    );
                }
            }
            P.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const _ = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                M = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                g = { width: k, height: k };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => l });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const l = new a();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.b2722a4a.js.map
