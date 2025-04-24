"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, o, r) => {
            r.d(o, { Z: () => I });
            r(136728);
            var n = r(202784),
                t = r(638236),
                a = r(811176),
                s = r(674132),
                l = r.n(s),
                d = r(415506),
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
                y = l().j7bb1a43,
                _ = l().hef5960c,
                I = (0, D.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: r, onClose: s, onMute: l, onRemoveFollower: D, onReportUser: I, onShare: P, onUnblock: k, onUnmute: v, user: E } = e,
                        S = [],
                        A = (o, r) => {
                            const { confirm: n, onClose: t } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(r, i.Z)
                                    .finally(t);
                            } else r();
                        };
                    !!window.navigator.share &&
                        !E.protected &&
                        !E.blocking &&
                        !E.blocked_by &&
                        S.push({
                            Icon: t.Z,
                            onClick: () => {
                                s(), P();
                            },
                            testID: M,
                            text: _,
                        });
                    !E.blocking &&
                        S.push({
                            ...(0, h.N1)(
                                E,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), v();
                                },
                            ),
                            testID: w,
                        });
                    E.followed_by &&
                        S.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    A(e, D);
                                },
                                user: E,
                            }),
                            testID: f,
                        }),
                        S.push((0, u.op)({ blockAction: (e) => A(e, r), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => A(e, k), user: E })),
                        S.push({
                            Icon: d.default,
                            onClick: () => {
                                s(), I();
                            },
                            testID: b,
                            text: y({ screenName: E.screen_name }),
                        });
                    const C = S.map(({ Icon: e, onClick: o, testID: r, text: n }) => ({ text: n, onClick: o, Icon: e, testID: r }));
                    return n.createElement(a.Z, { items: C, onCloseRequested: s });
                });
        },
        864479: (e, o, r) => {
            r.d(o, { Z: () => s });
            var n = r(807896),
                t = r(202784),
                a = r(771099);
            const s = (e) => (o) => t.createElement(a.$6, null, (r) => t.createElement(e, (0, n.Z)({}, o, { isInSidebar: r })));
        },
        293988: (e, o, r) => {
            r.d(o, { Z: () => P });
            var n = r(202784),
                t = r(154003),
                a = r(674132),
                s = r.n(a),
                l = r(74514),
                d = r(405303),
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
                f = s().bdba3e1a,
                b = s().c4da7d28,
                M = s().j87c21f4,
                y = s().iebc30ca,
                _ = s().dc740eb2;
            class I extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? n.createElement(t.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: n.createElement(l.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : n.createElement(t.ZP, { "aria-label": f, hoverLabel: { label: M }, icon: n.createElement(d.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(i.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: r, userId: n } = this.props;
                    return r(n, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const P = w(I);
        },
        168222: (e, o, r) => {
            r.r(o), r.d(o, { default: () => k });
            var n = r(459643),
                t = r(942893),
                a = r(409438),
                s = r(240089),
                l = r(351322),
                d = r(202784),
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
                    const { analytics: o, applyReactionInstructions: r, cellClickable: n, decoration: l, entry: i, isCarouselItem: p, onClick: w, saveAsRecentSearch: f, shouldScribeImpression: b, shouldScribeProfileClick: M, shouldStoreTypeaheadItem: y, user: I, withFollowsYou: P, withLink: k } = e,
                        {
                            content: { id: v, promotedMetadata: E, socialContext: S },
                        } = i,
                        A = D(E),
                        C = (S && S.generalContext) || void 0,
                        O = e.displayMode,
                        Z = (0, u.hC)("super_follow_android_web_subscription_enabled") && O === a.Z.SubscribableUser ? s.dk : s.ET,
                        T = l || Z,
                        F = i.itemMetadata && i.itemMetadata.clientEventInfo && i.itemMetadata.clientEventInfo.details && i.itemMetadata.clientEventInfo.details.timelinesDetails && i.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === F) {
                            const e = I ? [t.Z.getUserItem(I)] : [];
                            I?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : I?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : I?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const L = d.useCallback(() => {
                        r({ entry: i, triggerName: m.K.ON_FOLLOW });
                    }, [r, i]);
                    return d.createElement(s.Z9, { cellClickable: n, decoration: T, displayMode: O, isConcise: p, onClick: w, onFollowClick: L, promotedContent: A, promotedItemType: h.bj.USER, referringPage: O, saveAsRecentSearch: f, shouldScribeImpression: b, shouldScribeProfileClick: M, shouldStoreTypeaheadItem: y, socialContext: C, style: p && _.isCarouselItem, userId: v, withFollowsYou: P, withLink: k });
                },
                _ = i.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                I = M(d.memo(y)),
                P = [s.ET, s.C_],
                k = ({ cellClickable: e = !0, decoration: o, displayMode: r = a.Z.UserCompact, isCarouselItem: s, onClick: d, shouldScribeProfileClick: i = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    l
                        .iH({
                            component: I,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: r },
                                        cursor: n,
                                        itemMetadata: a,
                                        position: s,
                                    } = e,
                                    l = a.clientEventInfo,
                                    d = D(r);
                                return t.Z.getUserItem({ id_str: o, promoted_content: d }, void 0, s, n, l);
                            },
                            isFocusable: (0, n.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: r, isCarouselItem: s, onClick: d, shouldScribeProfileClick: i, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || P.includes(o) }));
        },
        684511: (e, o, r) => {
            r.d(o, { Z: () => n });
            r(202784);
            const n = (0, r(523561).Z)({
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
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, o, r) => {
            r.d(o, { d: () => t });
            var n = r(674132);
            const t = r.n(n)().gf5e9ea6;
        },
        916585: (e, o, r) => {
            r.d(o, { k: () => s });
            var n = r(674132),
                t = r.n(n),
                a = r(437358);
            const s = (e, o) => {
                const { id_str: r, screen_name: n } = e,
                    s = (0, t().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: o };
            };
        },
        847607: (e, o, r) => {
            r.d(o, { Aq: () => u, FK: () => b, GS: () => l, N1: () => m, PY: () => h, X6: () => M, cm: () => d });
            r(202784);
            var n = r(674132),
                t = r.n(n),
                a = r(391366),
                s = r(40904);
            const l = t().hb568af4,
                d = t().bb1cbeb6,
                i = (t().h2f62206, t().e67b2d65),
                c = t().f05597b3,
                u = (e) => i({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, r) => {
                    const { muting: n, screen_name: t } = e;
                    return { text: n ? h(t) : u(t), onClick: n ? r : o, Icon: n ? a.default : s.default };
                },
                D = t().h59f52ee,
                p = t().eea0cbee,
                w = t().i29533b3,
                f = t().h129c3c3,
                b = (e) => (e ? ((e) => w({ screenName: e }))(e) : D),
                M = (e) => (e ? ((e) => f({ screenName: e }))(e) : p);
        },
        417714: (e, o, r) => {
            r.d(o, { l: () => c });
            r(202784);
            var n = r(674132),
                t = r.n(n),
                a = r(224823);
            const s = t().b3036480,
                l = t().b3036480,
                d = t().e68b09b4,
                i = t().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const r = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: d, text: i({ screenName: e.screen_name }) });
        },
        48886: (e, o, r) => {
            r.d(o, { q: () => t });
            var n = r(674132);
            const t = { defaultToast: { text: r.n(n)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, r) => {
            r.d(o, { Z: () => a });
            var n = r(615656),
                t = r(51525);
            const a = { [n.ZP.FollowError]: { customAction: t.w1 } };
        },
        23679: (e, o, r) => {
            r.d(o, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, r) => {
            r.d(o, { M: () => s });
            var n = r(807896),
                t = r(202784),
                a = r(190286);
            const s = (e) => (o) => {
                const [r, s] = t.useState(null),
                    l = (e) =>
                        new Promise((o, r) => {
                            s({ resolve: o, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: o, resolve: l } = r;
                    return t.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return t.createElement(e, (0, n.Z)({}, o, { confirm: l }));
            };
        },
        694180: (e, o, r) => {
            r.d(o, { cM: () => w, dS: () => p, iY: () => f });
            var n = r(370751),
                t = r(399896),
                a = r(663550),
                s = r(499627),
                l = r(917799);
            const d = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const D = (e, o) => !!e.promotedContent[o],
                p =
                    (e) =>
                    (o, r, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${a}`;
                        if (h.has(a) && D(r(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: a, impression_id: s };
                        return (0, l._O)(o, { params: u, request: n.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                w =
                    ({ disclosureType: e, itemId: o, itemType: r, params: n }) =>
                    (a, s, { api: d }) => {
                        const { event: c, impression_id: h } = n,
                            p = `${r}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && D(s(), p)) return Promise.resolve();
                        const w = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...n, earned: w, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: f, request: d.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, o) => {
                            if (!o && u.has(c)) return [m(p)];
                        });
                    },
                f =
                    (e) =>
                    (o, r, { api: n }) =>
                        (0, l._O)(o, { params: e, request: n.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = d, o) {
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
            var n = r(499627),
                t = r(390387);
            const a = "recentSearches",
                s = "rweb.recentSearches",
                l =
                    (e) =>
                    (o, r, { userPersistence: n }) =>
                        n.set(s, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                d = (e, o) => {
                    let r = [];
                    if (e.user) {
                        const n = e.user;
                        r = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        r = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        r = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        r = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        r = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
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
                    (o, r, { userPersistence: n }) => {
                        o({ payload: e, type: p });
                        const a = r(),
                            s = c(a);
                        return (0, t.Qb)(a) ? o(l(s)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/CLEAR_ALL",
                b =
                    () =>
                    (e, o, { userPersistence: r }) => {
                        e({ type: f });
                        const n = o(),
                            a = c(n);
                        return (0, t.Qb)(n) ? e(l(a)) : Promise.resolve();
                    },
                M = "rweb/recentSearches/ADD_QUERY",
                y =
                    (e) =>
                    (o, r, { userPersistence: n }) => {
                        o({ payload: e, type: M });
                        const a = r(),
                            s = c(a);
                        return (0, t.Qb)(a) ? o(l(s)) : Promise.resolve();
                    },
                _ =
                    () =>
                    (e, o, { userPersistence: r }) => {
                        const n = o();
                        return h(n)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: r }) => {
                                  const n = o();
                                  return (0, t.Qb)(n)
                                      ? r
                                            .get(s)
                                            .then((o) => {
                                                e(D(o));
                                            })
                                            .catch(() => {
                                                e(D());
                                            })
                                      : (e(D()), Promise.resolve());
                              });
                    };
            n.Z.register({
                [a]: function (e = i, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case M: {
                            const r = o.payload,
                                n = r ? d(r, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), r && n.unshift(r), { ...e, recentSearches: n };
                        }
                        case p: {
                            const r = o.payload,
                                n = r ? d(r, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
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
            var n = r(161821),
                t = r(390387),
                a = r(836255),
                s = r(255117),
                l = r(166506),
                d = r(919022);
            const i =
                (e, o) =>
                (r, i, { api: c, featureSwitches: u }) =>
                    r(d.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            d = (0, n.Z)(a.Z.selectAll(o)).reduce((r, n) => {
                                if (null != n)
                                    if (n.user === e) r[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const t = a.Z.select(o, n.retweeted_status);
                                        t?.user === e && (r[n.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            c = (0, t._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            h = (0, l.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const r = (0, l.f8)(e, o, h);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        166506: (e, o, r) => {
            r.d(o, { du: () => c, f8: () => u, k9: () => i });
            var n = r(503768),
                t = r(750085),
                a = r(962741),
                s = r(466015),
                l = r(919022),
                d = r(218951);
            const i = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: t.Z }),
                c = (e) => (o, r) => {
                    const n = r();
                    o(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    r = l.ZP.select(n, o);
                                return r && !r.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, r) => {
                    if (!r.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(n);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.7caf833a.js.map
