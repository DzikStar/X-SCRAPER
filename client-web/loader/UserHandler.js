"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, t, o) => {
            o.d(t, { Z: () => D });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                i = o(111677),
                l = o.n(i),
                s = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                m = o(847607),
                h = o(417714),
                p = o(988823);
            const f = "block",
                y = "mute",
                b = "removeFollower",
                v = "report",
                w = "share",
                g = l().j7bb1a43,
                C = l().hef5960c,
                D = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: i, onMute: l, onRemoveFollower: p, onReportUser: D, onShare: S, onUnblock: E, onUnmute: P, user: _ } = e,
                        k = [],
                        I = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !_.protected &&
                        !_.blocking &&
                        !_.blocked_by &&
                        k.push({
                            Icon: n.Z,
                            onClick: () => {
                                i(), S();
                            },
                            testID: w,
                            text: C,
                        });
                    !_.blocking &&
                        k.push({
                            ...(0, m.N1)(
                                _,
                                () => {
                                    i(), l();
                                },
                                () => {
                                    i(), P();
                                },
                            ),
                            testID: y,
                        });
                    _.followed_by &&
                        k.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    I(e, p);
                                },
                                user: _,
                            }),
                            testID: b,
                        }),
                        k.push((0, u.op)({ blockAction: (e) => I(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => I(e, E), user: _ })),
                        k.push({
                            Icon: s.default,
                            onClick: () => {
                                i(), D();
                            },
                            testID: v,
                            text: g({ screenName: _.screen_name }),
                        });
                    const x = k.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: x, onCloseRequested: i });
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                n = o(202784),
                a = o(771099);
            const i = (e) => (t) => n.createElement(a.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => S });
            var r = o(202784),
                n = o(154003),
                a = o(111677),
                i = o.n(a),
                l = o(74514),
                s = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                m = o(668214),
                h = o(257166),
                p = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                y = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = i().bdba3e1a,
                v = i().c4da7d28,
                w = i().j87c21f4,
                g = i().iebc30ca,
                C = i().dc740eb2;
            class D extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": v, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: w }, icon: r.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: C }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: r } = this.props;
                    return o(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const S = y(D);
        },
        168222: (e, t, o) => {
            o.r(t), o.d(t, { default: () => E });
            var r = o(459643),
                n = o(942893),
                a = o(409438),
                i = o(240089),
                l = o(351322),
                s = o(202784),
                c = o(392237),
                d = o(187669),
                u = o(952793),
                m = o(663550),
                h = o(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var f = o(668214),
                y = o(204744),
                b = o(919022);
            const v = (e, t) => {
                    const { id: o } = ((e, t) => t.entry.content)(0, t);
                    return o ? b.ZP.select(e, o) : void 0;
                },
                w = (0, f.Z)()
                    .propsFromState(() => ({ user: v }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: y.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                g = (e) => {
                    const { analytics: t, applyReactionInstructions: o, cellClickable: r, decoration: l, entry: c, isCarouselItem: f, onClick: y, saveAsRecentSearch: b, shouldScribeImpression: v, shouldScribeProfileClick: w, shouldStoreTypeaheadItem: g, user: D, withFollowsYou: S, withLink: E } = e,
                        {
                            content: { id: P, promotedMetadata: _, socialContext: k },
                        } = c,
                        I = p(_),
                        x = (k && k.generalContext) || void 0,
                        T = e.displayMode,
                        M = (0, u.hC)("super_follow_android_web_subscription_enabled") && T === a.Z.SubscribableUser ? i.dk : i.ET,
                        R = l || M,
                        Z = c.itemMetadata && c.itemMetadata.clientEventInfo && c.itemMetadata.clientEventInfo.details && c.itemMetadata.clientEventInfo.details.timelinesDetails && c.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, d.q)(() => {
                        if ("WhoToFollow" === Z) {
                            const e = D ? [n.Z.getUserItem(D)] : [];
                            D?.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : D?.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : D?.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const A = s.useCallback(() => {
                        o({ entry: c, triggerName: h.K.ON_FOLLOW });
                    }, [o, c]);
                    return s.createElement(i.Z9, { cellClickable: r, decoration: R, displayMode: T, isConcise: f, onClick: y, onFollowClick: A, promotedContent: I, promotedItemType: m.bj.USER, referringPage: T, saveAsRecentSearch: b, shouldScribeImpression: v, shouldScribeProfileClick: w, shouldStoreTypeaheadItem: g, socialContext: x, style: f && C.isCarouselItem, userId: P, withFollowsYou: S, withLink: E });
                },
                C = c.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                D = w(s.memo(g)),
                S = [i.ET, i.C_],
                E = ({ cellClickable: e = !0, decoration: t, displayMode: o = a.Z.UserCompact, isCarouselItem: i, onClick: s, shouldScribeProfileClick: c = !0, shouldScribeImpression: d = !1, shouldStoreTypeaheadItem: u, withLink: m = !0 }) =>
                    l
                        .iH({
                            component: D,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: t, promotedMetadata: o },
                                        cursor: r,
                                        itemMetadata: a,
                                        position: i,
                                    } = e,
                                    l = a.clientEventInfo,
                                    s = p(o);
                                return n.Z.getUserItem({ id_str: t, promoted_content: s }, void 0, i, r, l);
                            },
                            isFocusable: (0, r.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: t, displayMode: o, isCarouselItem: i, onClick: s, shouldScribeProfileClick: c, shouldScribeImpression: d, shouldStoreTypeaheadItem: u, withLink: m, withFollowsYou: !t || S.includes(t) }));
        },
        684511: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(202784);
            const r = (0, o(523561).Z)({
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
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => i });
            var r = o(111677),
                n = o.n(r),
                a = o(437358);
            const i = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    i = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: i, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => v, GS: () => l, N1: () => h, PY: () => m, X6: () => w, cm: () => s });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(391366),
                i = o(40904);
            const l = n().hb568af4,
                s = n().bb1cbeb6,
                c = (n().h2f62206, n().e67b2d65),
                d = n().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : t, Icon: r ? a.default : i.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                y = n().i29533b3,
                b = n().h129c3c3,
                v = (e) => (e ? ((e) => y({ screenName: e }))(e) : p),
                w = (e) => (e ? ((e) => b({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => d });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(224823);
            const i = n().b3036480,
                l = n().b3036480,
                s = n().e68b09b4,
                c = n().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: i, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: s, text: c({ screenName: e.screen_name }) });
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(615656),
                n = o(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        23679: (e, t, o) => {
            o.d(t, { K: () => r });
            const r = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => i });
            var r = o(807896),
                n = o(202784),
                a = o(190286);
            const i = (e) => (t) => {
                const [o, i] = n.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            i({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                l(), i(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => y, dS: () => f, iY: () => b });
            var r = o(370751),
                n = o(399896),
                a = o(663550),
                i = o(499627),
                l = o(917799);
            const s = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: a, impression_id: i, promoted_trend_id: s } = e,
                            d = `trend-${s}-${a}`;
                        if (m.has(a) && p(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: s, event: a, impression_id: i };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(d)];
                        });
                    },
                y =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (a, i, { api: s }) => {
                        const { event: d, impression_id: m } = r,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(i(), f)) return Promise.resolve();
                        const y = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...r, earned: y, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: b, request: s.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
                promotedContent: function (e = s, t) {
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
        204744: (e, t, o) => {
            o.d(t, { DI: () => g, H$: () => m, OB: () => C, Ww: () => d, YB: () => u, hj: () => y, qF: () => v });
            o(901951);
            var r = o(499627),
                n = o(390387);
            const a = "recentSearches",
                i = "rweb.recentSearches",
                l =
                    (e) =>
                    (t, o, { userPersistence: r }) =>
                        r.set(i, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, t) => {
                    let o = [];
                    if (e.user) {
                        const r = e.user;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== r.id));
                    } else if (e.event) {
                        const r = e.event;
                        o = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== r.id));
                    } else if (e && e.keyword) {
                        const r = e.keyword;
                        o = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== r.query));
                    } else if (e.list) {
                        const r = e.list;
                        o = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== r.id));
                    } else if (e.topic) {
                        const r = e.topic;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== r.id));
                    }
                    return o;
                },
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[a].recentSearches,
                u = (e) => d(e)[0] || null,
                m = (e) => e[a].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                y =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: f });
                        const a = o(),
                            i = d(a);
                        return (0, n.Qb)(a) ? t(l(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                v =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        e({ type: b });
                        const r = t(),
                            a = d(r);
                        return (0, n.Qb)(r) ? e(l(a)) : Promise.resolve();
                    },
                w = "rweb/recentSearches/ADD_QUERY",
                g =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: w });
                        const a = o(),
                            i = d(a);
                        return (0, n.Qb)(a) ? t(l(i)) : Promise.resolve();
                    },
                C =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        const r = t();
                        return m(r)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: o }) => {
                                  const r = t();
                                  return (0, n.Qb)(r)
                                      ? o
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
            r.Z.register({
                [a]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case w: {
                            const o = t.payload,
                                r = o ? s(o, e.recentSearches) : [];
                            return r.length > 49 && r.splice(49, 1), o && r.unshift(o), { ...e, recentSearches: r };
                        }
                        case f: {
                            const o = t.payload,
                                r = o ? s(o, e.recentSearches) : [];
                            return { ...e, recentSearches: r };
                        }
                        case b:
                            return { fetched: !0, recentSearches: [] };
                        case h:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, t, o) => {
            o.d(t, { r: () => c });
            o(136728);
            var r = o(161821),
                n = o(390387),
                a = o(836255),
                i = o(255117),
                l = o(166506),
                s = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(s.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            s = (0, r.Z)(a.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, n._h)(c()),
                            u = d ? [(0, i.ZP)({ useLatest: !1, userId: d }).removeTweets(s), (0, i.ZP)({ useLatest: !0, userId: d }).removeTweets(s)] : [],
                            m = (0, l.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const o = (0, l.f8)(e, t, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => d, f8: () => u, k9: () => c });
            var r = o(503768),
                n = o(750085),
                a = o(962741),
                i = o(466015),
                l = o(919022),
                s = o(218951);
            const c = () => (0, s.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                d = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            r = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        642153: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                a = o(392237),
                i = o(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        h = "transparent" === t;
                    return r.createElement(
                        n.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => r.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : o, key: n, size: c, style: [0 !== n && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - n }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const r = t[o];
                                    let n = "";
                                    return r && (n = ` ${100 * r}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return r.createElement(n.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        378729: (e, t, o) => {
            o.d(t, { Z: () => y });
            var r = o(202784),
                n = o(325686),
                a = o(111677),
                i = o.n(a),
                l = o(283379),
                s = o(731708),
                c = o(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                m = i().f3624b5c,
                h = i().b4b3b113,
                p = i().be222050,
                f = i().hcbbe447;
            class y extends r.Component {
                render() {
                    const { color: e, id: t, style: o } = this.props;
                    return r.createElement(n.Z, { style: [b.root, o] }, r.createElement(l.default, { style: [b.icon, e && b[e]] }), r.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: o } = this.props,
                        { adMetadataContainer: r, advertiser: n, advertiser_name: a, disclosure_type: i } = o,
                        l = e && n && e === n.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        y = !(!r || "POLITICAL" !== r.disclaimerType) || s,
                        b = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: v } = r || {};
                    let w;
                    return (w = t || (!a || l || v ? (y ? m : b ? p : u) : y ? h({ fullName: a }) : b ? f({ fullName: a }) : d({ fullName: a }))), w;
                }
            }
            y.defaultProps = { color: "gray700" };
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        173739: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(31501),
                a = o(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: o, onDarkBackground: i, thumbLabel: l, value: s, ...c }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: i, value: [c.min, s], onChange: (e) => o(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(n.Z, u);
            };
        },
        537439: (e, t, o) => {
            o.d(t, { Z: () => N });
            var r = o(202784),
                n = o(111677),
                a = o.n(n),
                i = o(492140),
                l = o(720600),
                s = o(761744),
                c = o(25001),
                d = o(453333),
                u = o(136483),
                m = o(98440),
                h = o(790093),
                p = o(452693),
                f = o(544367),
                y = o(264171),
                b = o(159340),
                v = o(404971),
                w = o(262009),
                g = o(76388),
                C = o(488746),
                D = o(246492),
                S = o(520913),
                E = o(731708),
                P = o(642153),
                _ = o(879891),
                k = o(392237),
                I = o(54606);
            const x = a().ae408b76,
                T = a().j355f008,
                M = a().habf9678,
                R = a().db0798ed,
                Z = a().dc716ec9,
                A = ({ text: e }) => {
                    const { direction: t } = (0, _.Z)();
                    return r.createElement(E.ZP, { dir: t, withHashflags: !0 }, e);
                },
                F = (e, t) =>
                    t
                        ? x
                        : ((e) => {
                              const t = r.createElement(A, { text: e });
                              return r.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                L = k.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                O = k.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                N = ({ contextType: e, iconColor: t, iconSize: o, link: n, retweetData: a, text: E, topicData: _, userAvatarUrls: x }) => {
                    const { isSelfRetweet: N, name: B, screenName: U } = a || {},
                        H = ((e, t, o, n = []) => {
                            const a = L[t],
                                E = [o ? { color: k.default.theme.colors[o] } : O.colorDeepGray, a],
                                _ = r.createElement(i.default, { style: E }),
                                x = r.createElement(l.default, { style: E }),
                                T = r.createElement(s.default, { style: E }),
                                M = r.createElement(c.default, { style: E }),
                                R = r.createElement(d.default, { style: E }),
                                Z = r.createElement(u.default, { style: O.circle }),
                                A = r.createElement(m.default, { style: E }),
                                F = r.createElement(h.default, { style: E }),
                                N = r.createElement(p.default, { style: E }),
                                B = r.createElement(f.default, { style: E }),
                                U = r.createElement(y.default, { style: E }),
                                H = r.createElement(b.default, { style: E }),
                                Q = r.createElement(v.default, { style: E }),
                                W = r.createElement(w.default, { style: E }),
                                G = r.createElement(g.default, { style: E }),
                                z = r.createElement(C.default, { style: E }),
                                V = r.createElement(D.default, { style: E }),
                                j = r.createElement(P.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: n }),
                                Y = r.createElement(S.default, { style: E });
                            switch (e) {
                                case I.Q.Pin:
                                case I.Q.ReplyPin:
                                    return _;
                                case I.Q.Retweet:
                                    return x;
                                case I.Q.Like:
                                    return T;
                                case I.Q.Follow:
                                    return M;
                                case I.Q.Moment:
                                    return R;
                                case I.Q.NewTweets:
                                    return Z;
                                case I.Q.Reply:
                                case I.Q.Conversation:
                                    return A;
                                case I.Q.Feedback:
                                    return F;
                                case I.Q.Topic:
                                    return N;
                                case I.Q.List:
                                    return B;
                                case I.Q.Location:
                                    return U;
                                case I.Q.Community:
                                    return H;
                                case I.Q.Spaces:
                                    return Q;
                                case I.Q.Sparkle:
                                    return W;
                                case I.Q.SocialProof:
                                case I.Q.FollowFollowed:
                                    return V;
                                case I.Q.FollowMutual:
                                    return z;
                                case I.Q.FollowFollowing:
                                    return G;
                                case I.Q.Facepile:
                                    return j;
                                case I.Q.Bird:
                                    return Y;
                                case I.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, o, t, x);
                    switch (e) {
                        case I.Q.Retweet:
                            return { Icon: H, text: E || F(B, N), link: U ? `https://twitter.com/${U}` : void 0 };
                        case I.Q.Pin:
                            return { Icon: H, text: E || T };
                        case I.Q.ReplyPin:
                            return { Icon: H, text: M };
                        case I.Q.Topic:
                            return { Icon: H, "aria-label": "Recommendation" === _?.functionalityType || "RecWithEducation" === _?.functionalityType ? Z({ topicName: E }) : R({ topicName: E }), text: E ? r.createElement(A, { text: E }) : null, link: n };
                        default:
                            return { Icon: H, text: E ? r.createElement(A, { text: E }) : null, link: n };
                    }
                };
        },
        126962: (e, t, o) => {
            o.d(t, { Z: () => f });
            o(136728);
            var r = o(202784),
                n = o(325686),
                a = o(731708),
                i = o(872405),
                l = o(235902),
                s = o(392237),
                c = o(139052),
                d = o(488684),
                u = o(537439),
                m = o(54606);
            class h extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: o, id: s, onLayout: c, rightControl: d, style: m, testID: h, textColor: f, textSize: y, topControl: b, weight: v, withBottomBorder: w, withLeftPadding: g, withTextCentered: C, ...D } = this.props,
                        { Icon: S, "aria-label": E, link: P, text: _ } = (0, u.Z)(D),
                        k = r.createElement(a.ZP, { "aria-label": E, color: f, id: s, numberOfLines: 2, size: y, testID: h, weight: v, withoutTwemojiAndHashflags: !0 }, _),
                        { cellStyle: I, viewStyle: x } = this._getStyles();
                    return _ ? r.createElement(l.ZP.UseProps, null, (a) => r.createElement(r.Fragment, null, b || null, r.createElement(n.Z, { onLayout: c, style: [m, x, a.socialContextRefreshEnabled() && !g && p.socialContextRefresh] }, r.createElement(i.Z, { avatarCell: S || (g ? null : void 0), avatarCellStyle: [o, p.socialContextIconColumn, !g && p.unsetIconWidth, a.socialContextRefreshEnabled() && !g && p.socialContextRefreshIcon], avatarSize: e, cellStyle: I }, r.createElement(n.Z, { style: p.cellWrapper }, r.createElement(n.Z, { style: [p.socialContextTextColumn, a.socialContextRefreshEnabled() && !g && p.socialContextRefreshTextColumn] }, P ? this._renderLink(P, k) : k), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: o, id: n, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        p = r.createElement(a.ZP, { color: s, id: n, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return o === m.Q.Topic && u ? r.createElement(c.Z, { topicId: u.topicId }, p) : o === m.Q.Retweet && h ? r.createElement(d.Z, { screenName: h }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: o, withTextCentered: r } = this.props,
                        n = t === m.Q.TextOnly,
                        a = o ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        i = o && !e ? [p.bottomBorder] : [];
                    return n && i.push(p.topicContext), r && i.push(p.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = h;
        },
        54606: (e, t, o) => {
            o.d(t, { Q: () => r });
            o(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                i = o(215337),
                l = o(392237),
                s = o(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return n.createElement("defs", null, n.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, n.createElement("stop", { stopColor: e.primary }), n.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const h = {
                    Default: function ({ children: e, style: t, type: o = "audiospace" }) {
                        return n.createElement(
                            i.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(o),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return n.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            n.createElement(
                                i.Z,
                                (0, r.Z)(
                                    {},
                                    (function () {
                                        const e = (0, s.ai)();
                                        return { ...(0, s.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: s.ai,
                    getDarkModeColors: s.K,
                },
                p = Object.freeze(h);
        },
        977220: (e, t, o) => {
            o.d(t, { Cs: () => d, K: () => l, ai: () => s });
            var r = o(465233),
                n = o(483054),
                a = o(295559),
                i = o(392237);
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function s(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, r.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = a.xO(e),
                    o = n.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(o)).slice(0, -2);
            }
        },
        433460: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                i = o(111677),
                l = o.n(i),
                s = o(404971),
                c = o(868634),
                d = o(336373),
                u = o(181054),
                m = o(392237),
                h = o(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [o, a] = n.useState(),
                    i = !!(o && o > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...m } = e,
                    p =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return v.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return v.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                n.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const y = n.useCallback((e) => n.createElement(u.Z.Default, (0, r.Z)({}, e, { type: s })), [s]);
                return n.createElement(
                    h.default,
                    (0, r.Z)({}, m, {
                        BorderComponent: y,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== o && a(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: n.createElement(f, { isWide: i, type: s }),
                        gapWidth: i ? "space4" : "space2",
                        onClick: function () {
                            switch (s) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function f(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return n.createElement(y, e);
                    default:
                        return null;
                }
            }
            function y(e) {
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [b.liveVideoLabelContainer, b.borderNarrow, e.isWide ? b.liveVideoLabel : b.liveVideoLabelNarrow], type: "live" }) : n.createElement(a.Z, { style: [b.root, e.isWide ? b.rootWide : b.rootNarrow] }, n.createElement(u.Z.Default, { style: [b.spaceGradient, e.isWide ? b.borderWide : b.borderNarrow] }, n.createElement(s.default, { style: b.spaceIcon })));
            }
            const b = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        o = "100%",
                        r = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: o, height: o, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                v = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(731708),
                a = o(354149),
                i = o(310452),
                l = o(720283);
            const s = ({ animateIn: e, description: t, entities: o, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: h }) => {
                const { description: p, entities: f } = (0, l.H)({ description: t, entities: o, withheldDescription: m, withheldEntities: h }),
                    y = i.ZP.descriptionTextParts(p, f);
                return y.length
                    ? r.createElement(
                          n.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          y.map((t, o) => r.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${o}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, o) => {
            o.d(t, { H: () => r });
            const r = ({ description: e, entities: t, withheldDescription: o, withheldEntities: r }) => (o ? { description: o, entities: r } : { description: e, entities: t });
        },
        27137: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(157396);
            const n = (0, o(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452661: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(18198),
                n = {
                    centroidDimension: function (e, t, o, r) {
                        var a = e.touchBank,
                            i = 0,
                            l = 0,
                            s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== s) s.touchActive && s.currentTimeStamp > t && ((i += r && o ? s.currentPageX : r && !o ? s.currentPageY : !r && o ? s.previousPageX : s.previousPageY), (l = 1));
                        else
                            for (var c = 0; c < a.length; c++) {
                                var d = a[c];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    (i += r && o ? d.currentPageX : r && !o ? d.currentPageY : !r && o ? d.previousPageX : d.previousPageY), l++;
                                }
                            }
                        return l > 0 ? i / l : n.noCentroid;
                    },
                    currentCentroidXOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !0, !0);
                    },
                    currentCentroidYOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !1, !0);
                    },
                    previousCentroidXOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !0, !1);
                    },
                    previousCentroidYOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !1, !1);
                    },
                    currentCentroidX: function (e) {
                        return n.centroidDimension(e, 0, !0, !0);
                    },
                    currentCentroidY: function (e) {
                        return n.centroidDimension(e, 0, !1, !0);
                    },
                    noCentroid: -1,
                };
            const a = n;
            var i = a.currentCentroidXOfTouchesChangedAfter,
                l = a.currentCentroidYOfTouchesChangedAfter,
                s = a.previousCentroidXOfTouchesChangedAfter,
                c = a.previousCentroidYOfTouchesChangedAfter,
                d = a.currentCentroidX,
                u = a.currentCentroidY,
                m = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = i(t, e._accountsForMovesUpTo)), (e.moveY = l(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            r = s(t, o),
                            n = i(t, o),
                            a = c(t, o),
                            d = l(t, o),
                            u = e.dx + (n - r),
                            m = e.dy + (d - a),
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / h), (e.vy = (m - e.dy) / h), (e.dx = u), (e.dy = m), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            o = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, o),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, o),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && m._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (m._updateGestureStateOnMove(o, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (n) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = d(n.touchHistory)),
                                    (o.y0 = u(n.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(n, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(n, o)
                                ),
                                onResponderReject(r) {
                                    h(t, e.onPanResponderReject, r, o);
                                },
                                onResponderRelease(r) {
                                    h(t, e.onPanResponderRelease, r, o), p(t), m._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (m._updateGestureStateOnMove(o, r), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(r) {
                                    var n = r.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), h(t, e.onPanResponderEnd, r, o);
                                },
                                onResponderTerminate(r) {
                                    h(t, e.onPanResponderTerminate, r, o), p(t), m._initializeGestureState(o);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, o),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, o, n) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, n);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.30b3120a.js.map
