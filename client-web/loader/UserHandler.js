"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, o, r) => {
            r.d(o, { Z: () => I });
            r(136728);
            var t = r(202784),
                n = r(638236),
                a = r(811176),
                l = r(674132),
                d = r.n(l),
                s = r(415506),
                i = r(516951),
                c = r(443781),
                u = r(376293),
                h = r(847607),
                m = r(417714),
                D = r(988823);
            const p = "block",
                w = "mute",
                f = "removeFollower",
                b = "report",
                M = "share",
                y = d().j7bb1a43,
                _ = d().hef5960c,
                I = (0, D.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: r, onClose: l, onMute: d, onRemoveFollower: D, onReportUser: I, onShare: P, onUnblock: v, onUnmute: k, user: E } = e,
                        C = [],
                        S = (o, r) => {
                            const { confirm: t, onClose: n } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                t({ confirmButtonLabel: e, ...a })
                                    .then(r, i.Z)
                                    .finally(n);
                            } else r();
                        };
                    !!window.navigator.share &&
                        !E.protected &&
                        !E.blocking &&
                        !E.blocked_by &&
                        C.push({
                            Icon: n.Z,
                            onClick: () => {
                                l(), P();
                            },
                            testID: M,
                            text: _,
                        });
                    !E.blocking &&
                        C.push({
                            ...(0, h.N1)(
                                E,
                                () => {
                                    l(), d();
                                },
                                () => {
                                    l(), k();
                                },
                            ),
                            testID: w,
                        });
                    E.followed_by &&
                        C.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    S(e, D);
                                },
                                user: E,
                            }),
                            testID: f,
                        }),
                        C.push((0, u.op)({ blockAction: (e) => S(e, r), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => S(e, v), user: E })),
                        C.push({
                            Icon: s.default,
                            onClick: () => {
                                l(), I();
                            },
                            testID: b,
                            text: y({ screenName: E.screen_name }),
                        });
                    const A = C.map(({ Icon: e, onClick: o, testID: r, text: t }) => ({ text: t, onClick: o, Icon: e, testID: r }));
                    return t.createElement(a.Z, { items: A, onCloseRequested: l });
                });
        },
        864479: (e, o, r) => {
            r.d(o, { Z: () => l });
            var t = r(807896),
                n = r(202784),
                a = r(771099);
            const l = (e) => (o) => n.createElement(a.$6, null, (r) => n.createElement(e, (0, t.Z)({}, o, { isInSidebar: r })));
        },
        293988: (e, o, r) => {
            r.d(o, { Z: () => P });
            var t = r(202784),
                n = r(154003),
                a = r(674132),
                l = r.n(a),
                d = r(74514),
                s = r(405303),
                i = r(684511),
                c = r(860174),
                u = r(71620),
                h = r(668214),
                m = r(257166),
                D = r(919022);
            const p = (e, o) => !(!o.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                w = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: p }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: D.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = l().bdba3e1a,
                b = l().c4da7d28,
                M = l().j87c21f4,
                y = l().iebc30ca,
                _ = l().dc740eb2;
            class I extends t.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? t.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: t.createElement(d.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : t.createElement(n.ZP, { "aria-label": f, hoverLabel: { label: M }, icon: t.createElement(s.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return t.createElement("div", null, this.state.showingPushPrompt ? t.createElement(i.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: r, userId: t } = this.props;
                    return r(t, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const P = w(I);
        },
        168222: (e, o, r) => {
            r.r(o), r.d(o, { default: () => v });
            var t = r(459643),
                n = r(942893),
                a = r(409438),
                l = r(240089),
                d = r(351322),
                s = r(202784),
                i = r(392237),
                c = r(187669),
                u = r(952793),
                h = r(663550),
                m = r(23679);
            const D = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var p = r(668214),
                w = r(204744),
                f = r(919022);
            const b = (e, o) => {
                    const { id: r } = ((e, o) => o.entry.content)(0, o);
                    return r ? f.ZP.select(e, r) : void 0;
                },
                M = (0, p.Z)()
                    .propsFromState(() => ({ user: b }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: w.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                y = (e) => {
                    const { analytics: o, applyReactionInstructions: r, cellClickable: t, decoration: d, entry: i, isCarouselItem: p, onClick: w, saveAsRecentSearch: f, shouldScribeImpression: b, shouldScribeProfileClick: M, shouldStoreTypeaheadItem: y, user: I, withFollowsYou: P, withLink: v } = e,
                        {
                            content: { id: k, promotedMetadata: E, socialContext: C },
                        } = i,
                        S = D(E),
                        A = (C && C.generalContext) || void 0,
                        Z = e.displayMode,
                        g = (0, u.hC)("super_follow_android_web_subscription_enabled") && Z === a.Z.SubscribableUser ? l.dk : l.ET,
                        L = d || g,
                        O = i.itemMetadata && i.itemMetadata.clientEventInfo && i.itemMetadata.clientEventInfo.details && i.itemMetadata.clientEventInfo.details.timelinesDetails && i.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === O) {
                            const e = I ? [n.Z.getUserItem(I)] : [];
                            I?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : I?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : I?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const T = s.useCallback(() => {
                        r({ entry: i, triggerName: m.K.ON_FOLLOW });
                    }, [r, i]);
                    return s.createElement(l.Z9, { cellClickable: t, decoration: L, displayMode: Z, isConcise: p, onClick: w, onFollowClick: T, promotedContent: S, promotedItemType: h.bj.USER, referringPage: Z, saveAsRecentSearch: f, shouldScribeImpression: b, shouldScribeProfileClick: M, shouldStoreTypeaheadItem: y, socialContext: A, style: p && _.isCarouselItem, userId: k, withFollowsYou: P, withLink: v });
                },
                _ = i.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                I = M(s.memo(y)),
                P = [l.ET, l.C_],
                v = ({ cellClickable: e = !0, decoration: o, displayMode: r = a.Z.UserCompact, isCarouselItem: l, onClick: s, shouldScribeProfileClick: i = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    d
                        .iH({
                            component: I,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: r },
                                        cursor: t,
                                        itemMetadata: a,
                                        position: l,
                                    } = e,
                                    d = a.clientEventInfo,
                                    s = D(r);
                                return n.Z.getUserItem({ id_str: o, promoted_content: s }, void 0, l, t, d);
                            },
                            isFocusable: (0, t.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: r, isCarouselItem: l, onClick: s, shouldScribeProfileClick: i, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || P.includes(o) }));
        },
        684511: (e, o, r) => {
            r.d(o, { Z: () => t });
            r(202784);
            const t = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, o, r) => {
            r.d(o, { d: () => n });
            var t = r(674132);
            const n = r.n(t)().gf5e9ea6;
        },
        916585: (e, o, r) => {
            r.d(o, { k: () => l });
            var t = r(674132),
                n = r.n(t),
                a = r(437358);
            const l = (e, o) => {
                const { id_str: r, screen_name: t } = e,
                    l = (0, n().d78131b9)({ screenName: t });
                return { Icon: a.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: o };
            };
        },
        847607: (e, o, r) => {
            r.d(o, { Aq: () => u, FK: () => b, GS: () => d, N1: () => m, PY: () => h, X6: () => M, cm: () => s });
            r(202784);
            var t = r(674132),
                n = r.n(t),
                a = r(391366),
                l = r(40904);
            const d = n().hb568af4,
                s = n().bb1cbeb6,
                i = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => i({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, r) => {
                    const { muting: t, screen_name: n } = e;
                    return { text: t ? h(n) : u(n), onClick: t ? r : o, Icon: t ? a.default : l.default };
                },
                D = n().h59f52ee,
                p = n().eea0cbee,
                w = n().i29533b3,
                f = n().h129c3c3,
                b = (e) => (e ? ((e) => w({ screenName: e }))(e) : D),
                M = (e) => (e ? ((e) => f({ screenName: e }))(e) : p);
        },
        417714: (e, o, r) => {
            r.d(o, { l: () => c });
            r(202784);
            var t = r(674132),
                n = r.n(t),
                a = r(224823);
            const l = n().b3036480,
                d = n().b3036480,
                s = n().e68b09b4,
                i = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const r = u(o);
                    return { Icon: a.default, text: l, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: s, text: i({ screenName: e.screen_name }) });
        },
        48886: (e, o, r) => {
            r.d(o, { q: () => n });
            var t = r(674132);
            const n = { defaultToast: { text: r.n(t)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, r) => {
            r.d(o, { Z: () => a });
            var t = r(615656),
                n = r(51525);
            const a = { [t.ZP.FollowError]: { customAction: n.w1 } };
        },
        23679: (e, o, r) => {
            r.d(o, { K: () => t });
            const t = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, r) => {
            r.d(o, { M: () => l });
            var t = r(807896),
                n = r(202784),
                a = r(190286);
            const l = (e) => (o) => {
                const [r, l] = n.useState(null),
                    d = (e) =>
                        new Promise((o, r) => {
                            l({ resolve: o, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: o, resolve: d } = r;
                    return n.createElement(
                        a.Z,
                        (0, t.Z)({}, e, {
                            onCancel: () => {
                                o(), l(null);
                            },
                            onConfirm: () => {
                                d(), l(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, t.Z)({}, o, { confirm: d }));
            };
        },
        694180: (e, o, r) => {
            r.d(o, { cM: () => w, dS: () => p, iY: () => f });
            var t = r(370751),
                n = r(399896),
                a = r(663550),
                l = r(499627),
                d = r(917799);
            const s = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, t.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, t.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const D = (e, o) => !!e.promotedContent[o],
                p =
                    (e) =>
                    (o, r, { api: t }) => {
                        const { event: a, impression_id: l, promoted_trend_id: s } = e,
                            c = `trend-${s}-${a}`;
                        if (h.has(a) && D(r(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: s, event: a, impression_id: l };
                        return (0, d._O)(o, { params: u, request: t.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                w =
                    ({ disclosureType: e, itemId: o, itemType: r, params: t }) =>
                    (a, l, { api: s }) => {
                        const { event: c, impression_id: h } = t,
                            p = `${r}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && D(l(), p)) return Promise.resolve();
                        const w = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...t, earned: w, epoch_ms: Date.now() };
                        return (0, d._O)(a, { params: f, request: s.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, o) => {
                            if (!o && u.has(c)) return [m(p)];
                        });
                    },
                f =
                    (e) =>
                    (o, r, { api: t }) =>
                        (0, d._O)(o, { params: e, request: t.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            l.Z.register({
                promotedContent: function (e = s, o) {
                    if (!o) return e;
                    if (o.type === c) {
                        if (!o.payload) return e;
                        const { eventKey: r } = o.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, o, r) => {
            r.d(o, { DI: () => y, H$: () => h, OB: () => _, Ww: () => c, YB: () => u, hj: () => w, qF: () => b });
            r(901951);
            var t = r(499627),
                n = r(390387);
            const a = "recentSearches",
                l = "rweb.recentSearches",
                d =
                    (e) =>
                    (o, r, { userPersistence: t }) =>
                        t.set(l, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, o) => {
                    let r = [];
                    if (e.user) {
                        const t = e.user;
                        r = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== t.id));
                    } else if (e.event) {
                        const t = e.event;
                        r = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== t.id));
                    } else if (e && e.keyword) {
                        const t = e.keyword;
                        r = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== t.query));
                    } else if (e.list) {
                        const t = e.list;
                        r = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== t.id));
                    } else if (e.topic) {
                        const t = e.topic;
                        r = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== t.id));
                    }
                    return r;
                },
                i = { fetched: !1, recentSearches: [] };
            const c = (e) => e[a].recentSearches,
                u = (e) => c(e)[0] || null,
                h = (e) => e[a].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                D = (e) => ({ type: m, payload: e }),
                p = "rweb/recentSearches/REMOVE_QUERY",
                w =
                    (e) =>
                    (o, r, { userPersistence: t }) => {
                        o({ payload: e, type: p });
                        const a = r(),
                            l = c(a);
                        return (0, n.Qb)(a) ? o(d(l)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/CLEAR_ALL",
                b =
                    () =>
                    (e, o, { userPersistence: r }) => {
                        e({ type: f });
                        const t = o(),
                            a = c(t);
                        return (0, n.Qb)(t) ? e(d(a)) : Promise.resolve();
                    },
                M = "rweb/recentSearches/ADD_QUERY",
                y =
                    (e) =>
                    (o, r, { userPersistence: t }) => {
                        o({ payload: e, type: M });
                        const a = r(),
                            l = c(a);
                        return (0, n.Qb)(a) ? o(d(l)) : Promise.resolve();
                    },
                _ =
                    () =>
                    (e, o, { userPersistence: r }) => {
                        const t = o();
                        return h(t)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: r }) => {
                                  const t = o();
                                  return (0, n.Qb)(t)
                                      ? r
                                            .get(l)
                                            .then((o) => {
                                                e(D(o));
                                            })
                                            .catch(() => {
                                                e(D());
                                            })
                                      : (e(D()), Promise.resolve());
                              });
                    };
            t.Z.register({
                [a]: function (e = i, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case M: {
                            const r = o.payload,
                                t = r ? s(r, e.recentSearches) : [];
                            return t.length > 49 && t.splice(49, 1), r && t.unshift(r), { ...e, recentSearches: t };
                        }
                        case p: {
                            const r = o.payload,
                                t = r ? s(r, e.recentSearches) : [];
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
        629196: (e, o, r) => {
            r.d(o, { r: () => i });
            r(136728);
            var t = r(161821),
                n = r(390387),
                a = r(836255),
                l = r(255117),
                d = r(166506),
                s = r(919022);
            const i =
                (e, o) =>
                (r, i, { api: c, featureSwitches: u }) =>
                    r(s.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            s = (0, t.Z)(a.Z.selectAll(o)).reduce((r, t) => {
                                if (null != t)
                                    if (t.user === e) r[t.id_str] = !0;
                                    else if (t.retweeted_status) {
                                        const n = a.Z.select(o, t.retweeted_status);
                                        n?.user === e && (r[t.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            c = (0, n._h)(i()),
                            u = c ? [(0, l.ZP)({ useLatest: !1, userId: c }).removeTweets(s), (0, l.ZP)({ useLatest: !0, userId: c }).removeTweets(s)] : [],
                            h = (0, d.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const r = (0, d.f8)(e, o, h);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        166506: (e, o, r) => {
            r.d(o, { du: () => c, f8: () => u, k9: () => i });
            var t = r(503768),
                n = r(750085),
                a = r(962741),
                l = r(466015),
                d = r(919022),
                s = r(218951);
            const i = () => (0, s.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(t.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, r) => {
                    const t = r();
                    o(
                        e
                            .selectEntries(t)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    r = d.ZP.select(t, o);
                                return r && !r.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, r) => {
                    if (!r.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, l.OD)(e),
                            t = (0, l.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(t);
                    }
                };
        },
        224823: (e, o, r) => {
            r.r(o), r.d(o, { default: () => s });
            var t = r(202784),
                n = r(890601),
                a = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z" })) }, { writingDirection: o });
            };
            d.metadata = { width: 24, height: 24 };
            const s = d;
        },
        74514: (e, o, r) => {
            r.r(o), r.d(o, { default: () => s });
            var t = r(202784),
                n = r(890601),
                a = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: o });
            };
            d.metadata = { width: 24, height: 24 };
            const s = d;
        },
        155353: (e, o, r) => {
            r.r(o), r.d(o, { default: () => s });
            var t = r(202784),
                n = r(890601),
                a = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: o });
            };
            d.metadata = { width: 24, height: 24 };
            const s = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.820145fa.js.map
