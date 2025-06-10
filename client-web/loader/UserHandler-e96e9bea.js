"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler-e96e9bea"],
    {
        333241: (e, o, t) => {
            t.d(o, { Z: () => P });
            t(136728);
            var n = t(202784),
                r = t(638236),
                a = t(811176),
                s = t(111677),
                i = t.n(s),
                d = t(415506),
                l = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                m = t(417714),
                p = t(988823);
            const f = "block",
                v = "mute",
                D = "removeFollower",
                b = "report",
                S = "share",
                _ = i().j7bb1a43,
                w = i().hef5960c,
                P = (0, p.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: s, onMute: i, onRemoveFollower: p, onReportUser: P, onShare: y, onUnblock: M, onUnmute: C, user: I } = e,
                        T = [],
                        k = (o, t) => {
                            const { confirm: n, onClose: r } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(t, l.Z)
                                    .finally(r);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        T.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), y();
                            },
                            testID: S,
                            text: w,
                        });
                    !I.blocking &&
                        T.push({
                            ...(0, h.N1)(
                                I,
                                () => {
                                    s(), i();
                                },
                                () => {
                                    s(), C();
                                },
                            ),
                            testID: v,
                        });
                    I.followed_by &&
                        T.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    k(e, p);
                                },
                                user: I,
                            }),
                            testID: D,
                        }),
                        T.push((0, u.op)({ blockAction: (e) => k(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => k(e, M), user: I })),
                        T.push({
                            Icon: d.default,
                            onClick: () => {
                                s(), P();
                            },
                            testID: b,
                            text: _({ screenName: I.screen_name }),
                        });
                    const A = T.map(({ Icon: e, onClick: o, testID: t, text: n }) => ({ text: n, onClick: o, Icon: e, testID: t }));
                    return n.createElement(a.Z, { items: A, onCloseRequested: s });
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => s });
            var n = t(807896),
                r = t(202784),
                a = t(771099);
            const s = (e) => (o) => r.createElement(a.$6, null, (t) => r.createElement(e, (0, n.Z)({}, o, { isInSidebar: t })));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => y });
            var n = t(202784),
                r = t(154003),
                a = t(111677),
                s = t.n(a),
                i = t(74514),
                d = t(405303),
                l = t(684511),
                c = t(860174),
                u = t(71620),
                h = t(668214),
                m = t(257166),
                p = t(919022);
            const f = (e, o) => !(!o.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                v = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                D = s().bdba3e1a,
                b = s().c4da7d28,
                S = s().j87c21f4,
                _ = s().iebc30ca,
                w = s().dc740eb2;
            class P extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": b, hoverLabel: { label: _ }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": D, hoverLabel: { label: S }, icon: n.createElement(d.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(l.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: t, userId: n } = this.props;
                    return t(n, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const y = v(P);
        },
        168222: (e, o, t) => {
            t.r(o), t.d(o, { default: () => M });
            var n = t(459643),
                r = t(942893),
                a = t(409438),
                s = t(240089),
                i = t(351322),
                d = t(202784),
                l = t(392237),
                c = t(187669),
                u = t(952793),
                h = t(663550),
                m = t(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var f = t(668214),
                v = t(204744),
                D = t(919022);
            const b = (e, o) => {
                    const { id: t } = ((e, o) => o.entry.content)(0, o);
                    return t ? D.ZP.select(e, t) : void 0;
                },
                S = (0, f.Z)()
                    .propsFromState(() => ({ user: b }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: v.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                _ = (e) => {
                    const { analytics: o, applyReactionInstructions: t, cellClickable: n, decoration: i, entry: l, isCarouselItem: f, onClick: v, saveAsRecentSearch: D, shouldScribeImpression: b, shouldScribeProfileClick: S, shouldStoreTypeaheadItem: _, user: P, withFollowsYou: y, withLink: M } = e,
                        {
                            content: { id: C, promotedMetadata: I, socialContext: T },
                        } = l,
                        k = p(I),
                        A = (T && T.generalContext) || void 0,
                        R = e.displayMode,
                        E = (0, u.hC)("super_follow_android_web_subscription_enabled") && R === a.Z.SubscribableUser ? s.dk : s.ET,
                        g = i || E,
                        O = l.itemMetadata && l.itemMetadata.clientEventInfo && l.itemMetadata.clientEventInfo.details && l.itemMetadata.clientEventInfo.details.timelinesDetails && l.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === O) {
                            const e = P ? [r.Z.getUserItem(P)] : [];
                            P?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : P?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : P?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const F = d.useCallback(() => {
                        t({ entry: l, triggerName: m.K.ON_FOLLOW });
                    }, [t, l]);
                    return d.createElement(s.Z9, { cellClickable: n, decoration: g, displayMode: R, isConcise: f, onClick: v, onFollowClick: F, promotedContent: k, promotedItemType: h.bj.USER, referringPage: R, saveAsRecentSearch: D, shouldScribeImpression: b, shouldScribeProfileClick: S, shouldStoreTypeaheadItem: _, socialContext: A, style: f && w.isCarouselItem, userId: C, withFollowsYou: y, withLink: M });
                },
                w = l.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                P = S(d.memo(_)),
                y = [s.ET, s.C_],
                M = ({ cellClickable: e = !0, decoration: o, displayMode: t = a.Z.UserCompact, isCarouselItem: s, onClick: d, shouldScribeProfileClick: l = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    i
                        .iH({
                            component: P,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: t },
                                        cursor: n,
                                        itemMetadata: a,
                                        position: s,
                                    } = e,
                                    i = a.clientEventInfo,
                                    d = p(t);
                                return r.Z.getUserItem({ id_str: o, promoted_content: d }, void 0, s, n, i);
                            },
                            isFocusable: (0, n.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: t, isCarouselItem: s, onClick: d, shouldScribeProfileClick: l, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || y.includes(o) }));
        },
        684511: (e, o, t) => {
            t.d(o, { Z: () => n });
            t(202784);
            const n = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => r });
            var n = t(111677);
            const r = t.n(n)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => s });
            var n = t(111677),
                r = t.n(n),
                a = t(437358);
            const s = (e, o) => {
                const { id_str: t, screen_name: n } = e,
                    s = (0, r().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => b, GS: () => i, N1: () => m, PY: () => h, X6: () => S, cm: () => d });
            t(202784);
            var n = t(111677),
                r = t.n(n),
                a = t(391366),
                s = t(40904);
            const i = r().hb568af4,
                d = r().bb1cbeb6,
                l = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => l({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, t) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? h(r) : u(r), onClick: n ? t : o, Icon: n ? a.default : s.default };
                },
                p = r().h59f52ee,
                f = r().eea0cbee,
                v = r().i29533b3,
                D = r().h129c3c3,
                b = (e) => (e ? ((e) => v({ screenName: e }))(e) : p),
                S = (e) => (e ? ((e) => D({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var n = t(111677),
                r = t.n(n),
                a = t(224823);
            const s = r().b3036480,
                i = r().b3036480,
                d = r().e68b09b4,
                l = r().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: d, text: l({ screenName: e.screen_name }) });
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => r });
            var n = t(111677);
            const r = { defaultToast: { text: t.n(n)().a30b63da }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => a });
            var n = t(615656),
                r = t(51525);
            const a = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        23679: (e, o, t) => {
            t.d(o, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => s });
            var n = t(807896),
                r = t(202784),
                a = t(190286);
            const s = (e) => (o) => {
                const [t, s] = r.useState(null),
                    i = (e) =>
                        new Promise((o, t) => {
                            s({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: i } = t;
                    return r.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                i(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, o, { confirm: i }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => v, dS: () => f, iY: () => D });
            var n = t(370751),
                r = t(399896),
                a = t(663550),
                s = t(499627),
                i = t(917799);
            const d = {},
                l = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${a}`;
                        if (h.has(a) && p(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: a, impression_id: s };
                        return (0, i._O)(o, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                v =
                    ({ disclosureType: e, itemId: o, itemType: t, params: n }) =>
                    (a, s, { api: d }) => {
                        const { event: c, impression_id: h } = n,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const v = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...n, earned: v, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: D, request: d.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, o) => {
                            if (!o && u.has(c)) return [m(f)];
                        });
                    },
                D =
                    (e) =>
                    (o, t, { api: n }) =>
                        (0, i._O)(o, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = d, o) {
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
        204744: (e, o, t) => {
            t.d(o, { DI: () => _, H$: () => h, OB: () => w, Ww: () => c, YB: () => u, hj: () => v, qF: () => b });
            t(901951);
            var n = t(499627),
                r = t(390387);
            const a = "recentSearches",
                s = "rweb.recentSearches",
                i =
                    (e) =>
                    (o, t, { userPersistence: n }) =>
                        n.set(s, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                d = (e, o) => {
                    let t = [];
                    if (e.user) {
                        const n = e.user;
                        t = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        t = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        t = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        t = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        t = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
                    }
                    return t;
                },
                l = { fetched: !1, recentSearches: [] };
            const c = (e) => e[a].recentSearches,
                u = (e) => c(e)[0] || null,
                h = (e) => e[a].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                v =
                    (e) =>
                    (o, t, { userPersistence: n }) => {
                        o({ payload: e, type: f });
                        const a = t(),
                            s = c(a);
                        return (0, r.Qb)(a) ? o(i(s)) : Promise.resolve();
                    },
                D = "rweb/recentSearches/CLEAR_ALL",
                b =
                    () =>
                    (e, o, { userPersistence: t }) => {
                        e({ type: D });
                        const n = o(),
                            a = c(n);
                        return (0, r.Qb)(n) ? e(i(a)) : Promise.resolve();
                    },
                S = "rweb/recentSearches/ADD_QUERY",
                _ =
                    (e) =>
                    (o, t, { userPersistence: n }) => {
                        o({ payload: e, type: S });
                        const a = t(),
                            s = c(a);
                        return (0, r.Qb)(a) ? o(i(s)) : Promise.resolve();
                    },
                w =
                    () =>
                    (e, o, { userPersistence: t }) => {
                        const n = o();
                        return h(n)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: t }) => {
                                  const n = o();
                                  return (0, r.Qb)(n)
                                      ? t
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
            n.Z.register({
                [a]: function (e = l, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case S: {
                            const t = o.payload,
                                n = t ? d(t, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), t && n.unshift(t), { ...e, recentSearches: n };
                        }
                        case f: {
                            const t = o.payload,
                                n = t ? d(t, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
                        }
                        case D:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...o.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, o, t) => {
            t.d(o, { r: () => l });
            t(136728);
            var n = t(161821),
                r = t(390387),
                a = t(836255),
                s = t(255117),
                i = t(166506),
                d = t(919022);
            const l =
                (e, o) =>
                (t, l, { api: c, featureSwitches: u }) =>
                    t(d.ZP.mute(e, o)).then(() => {
                        const o = l(),
                            d = (0, n.Z)(a.Z.selectAll(o)).reduce((t, n) => {
                                if (null != n)
                                    if (n.user === e) t[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(o, n.retweeted_status);
                                        r?.user === e && (t[n.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, r._h)(l()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            h = (0, i.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const t = (0, i.f8)(e, o, h);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => l });
            var n = t(503768),
                r = t(750085),
                a = t(962741),
                s = t(466015),
                i = t(919022),
                d = t(218951);
            const l = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (o, t) => {
                    const n = t();
                    o(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    t = i.ZP.select(n, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(n);
                    }
                };
        },
        452661: (e, o, t) => {
            t.d(o, { Z: () => f });
            var n = t(18198),
                r = {
                    centroidDimension: function (e, o, t, n) {
                        var a = e.touchBank,
                            s = 0,
                            i = 0,
                            d = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== d) d.touchActive && d.currentTimeStamp > o && ((s += n && t ? d.currentPageX : n && !t ? d.currentPageY : !n && t ? d.previousPageX : d.previousPageY), (i = 1));
                        else
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                if (null != c && c.touchActive && c.currentTimeStamp >= o) {
                                    (s += n && t ? c.currentPageX : n && !t ? c.currentPageY : !n && t ? c.previousPageX : c.previousPageY), i++;
                                }
                            }
                        return i > 0 ? s / i : r.noCentroid;
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
            const a = r;
            var s = a.currentCentroidXOfTouchesChangedAfter,
                i = a.currentCentroidYOfTouchesChangedAfter,
                d = a.previousCentroidXOfTouchesChangedAfter,
                l = a.previousCentroidYOfTouchesChangedAfter,
                c = a.currentCentroidX,
                u = a.currentCentroidY,
                h = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, o) {
                        (e.numberActiveTouches = o.numberActiveTouches), (e.moveX = s(o, e._accountsForMovesUpTo)), (e.moveY = i(o, e._accountsForMovesUpTo));
                        var t = e._accountsForMovesUpTo,
                            n = d(o, t),
                            r = s(o, t),
                            a = l(o, t),
                            c = i(o, t),
                            u = e.dx + (r - n),
                            h = e.dy + (c - a),
                            m = o.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = o.mostRecentTimeStamp);
                    },
                    create(e) {
                        var o = { handle: null, shouldCancelClick: !1, timeout: null },
                            t = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (o) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(o, t),
                                onMoveShouldSetResponder: (o) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(o, t),
                                onStartShouldSetResponderCapture: (o) => (1 === o.nativeEvent.touches.length && h._initializeGestureState(t), (t.numberActiveTouches = o.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(o, t)),
                                onMoveShouldSetResponderCapture(o) {
                                    var n = o.touchHistory;
                                    return t._accountsForMovesUpTo !== n.mostRecentTimeStamp && (h._updateGestureStateOnMove(t, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(o, t));
                                },
                                onResponderGrant: (r) => (
                                    o.handle || (o.handle = n.Z.createInteractionHandle()),
                                    o.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(o),
                                    (o.shouldCancelClick = !0),
                                    (t.x0 = c(r.touchHistory)),
                                    (t.y0 = u(r.touchHistory)),
                                    (t.dx = 0),
                                    (t.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, t),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, t)
                                ),
                                onResponderReject(n) {
                                    m(o, e.onPanResponderReject, n, t);
                                },
                                onResponderRelease(n) {
                                    m(o, e.onPanResponderRelease, n, t), p(o), h._initializeGestureState(t);
                                },
                                onResponderStart(o) {
                                    var n = o.touchHistory;
                                    (t.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(o, t);
                                },
                                onResponderMove(o) {
                                    var n = o.touchHistory;
                                    t._accountsForMovesUpTo !== n.mostRecentTimeStamp && (h._updateGestureStateOnMove(t, n), e.onPanResponderMove && e.onPanResponderMove(o, t));
                                },
                                onResponderEnd(n) {
                                    var r = n.touchHistory;
                                    (t.numberActiveTouches = r.numberActiveTouches), m(o, e.onPanResponderEnd, n, t);
                                },
                                onResponderTerminate(n) {
                                    m(o, e.onPanResponderTerminate, n, t), p(o), h._initializeGestureState(t);
                                },
                                onResponderTerminationRequest: (o) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(o, t),
                                onClickCapture: (e) => {
                                    !0 === o.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => o.handle,
                        };
                    },
                };
            function m(e, o, t, r) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), o && o(t, r);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler-e96e9bea.e0b8e0ea.js.map
