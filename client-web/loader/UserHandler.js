"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler"],
    {
        333241: (e, t, o) => {
            o.d(t, { Z: () => E });
            o(136728);
            var n = o(202784),
                r = o(638236),
                a = o(811176),
                i = o(111677),
                l = o.n(i),
                s = o(415506),
                c = o(516951),
                d = o(376293),
                u = o(847607),
                m = o(417714),
                h = o(988823);
            const p = "block",
                f = "mute",
                y = "removeFollower",
                b = "report",
                w = "share",
                g = l().j7bb1a43,
                v = l().g00b4c55,
                E = (0, h.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: i, onRemoveFollower: l, onReportUser: h, onShare: E, onUnblock: C, onUnmute: D, user: P } = e,
                        x = [],
                        k = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        x.push({
                            Icon: r.Z,
                            onClick: () => {
                                o(), E();
                            },
                            testID: w,
                            text: v({ screenName: P.screen_name }),
                        });
                    !P.blocking &&
                        x.push({
                            ...(0, u.N1)(
                                P,
                                () => {
                                    o(), i();
                                },
                                () => {
                                    o(), D();
                                },
                            ),
                            testID: f,
                        });
                    P.followed_by &&
                        x.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    k(e, l);
                                },
                                user: P,
                            }),
                            testID: y,
                        }),
                        x.push((0, d.op)({ blockAction: (e) => k(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => k(e, C), user: P })),
                        x.push({
                            Icon: s.default,
                            onClick: () => {
                                o(), h();
                            },
                            testID: b,
                            text: g({ screenName: P.screen_name }),
                        });
                    const S = x.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(a.Z, { items: S, onCloseRequested: o });
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(807896),
                r = o(202784),
                a = o(771099);
            const i = (e) => (t) => r.createElement(a.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => D });
            var n = o(202784),
                r = o(154003),
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
                w = i().c4da7d28,
                g = i().j87c21f4,
                v = i().iebc30ca,
                E = i().dc740eb2;
            class C extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": w, hoverLabel: { label: v }, icon: n.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: n.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
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
            const D = y(C);
        },
        168222: (e, t, o) => {
            o.r(t), o.d(t, { default: () => P });
            var n = o(459643),
                r = o(942893),
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
            const w = (e, t) => {
                    const { id: o } = ((e, t) => t.entry.content)(0, t);
                    return o ? b.ZP.select(e, o) : void 0;
                },
                g = (0, f.Z)()
                    .propsFromState(() => ({ user: w }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: y.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                v = (e) => {
                    const { analytics: t, applyReactionInstructions: o, cellClickable: n, decoration: l, entry: c, isCarouselItem: f, onClick: y, saveAsRecentSearch: b, shouldScribeImpression: w, shouldScribeProfileClick: g, shouldStoreTypeaheadItem: v, user: C, withFollowsYou: D, withLink: P } = e,
                        {
                            content: { id: x, promotedMetadata: k, socialContext: S },
                        } = c,
                        I = p(k),
                        _ = (S && S.generalContext) || void 0,
                        M = e.displayMode,
                        Z = (0, u.hC)("super_follow_android_web_subscription_enabled") && M === a.Z.SubscribableUser ? i.dk : i.ET,
                        A = l || Z,
                        T = c.itemMetadata && c.itemMetadata.clientEventInfo && c.itemMetadata.clientEventInfo.details && c.itemMetadata.clientEventInfo.details.timelinesDetails && c.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, d.q)(() => {
                        if ("WhoToFollow" === T) {
                            const e = C ? [r.Z.getUserItem(C)] : [];
                            C?.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : C?.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : C?.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const F = s.useCallback(() => {
                        o({ entry: c, triggerName: h.K.ON_FOLLOW });
                    }, [o, c]);
                    return s.createElement(i.Z9, { cellClickable: n, decoration: A, displayMode: M, isConcise: f, onClick: y, onFollowClick: F, promotedContent: I, promotedItemType: m.bj.USER, referringPage: M, saveAsRecentSearch: b, shouldScribeImpression: w, shouldScribeProfileClick: g, shouldStoreTypeaheadItem: v, socialContext: _, style: f && E.isCarouselItem, userId: x, withFollowsYou: D, withLink: P });
                },
                E = c.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                C = g(s.memo(v)),
                D = [i.ET, i.C_],
                P = ({ cellClickable: e = !0, decoration: t, displayMode: o = a.Z.UserCompact, isCarouselItem: i, onClick: s, shouldScribeProfileClick: c = !0, shouldScribeImpression: d = !1, shouldStoreTypeaheadItem: u, withLink: m = !0 }) =>
                    l
                        .iH({
                            component: C,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: t, promotedMetadata: o },
                                        cursor: n,
                                        itemMetadata: a,
                                        position: i,
                                    } = e,
                                    l = a.clientEventInfo,
                                    s = p(o);
                                return r.Z.getUserItem({ id_str: t, promoted_content: s }, void 0, i, n, l);
                            },
                            isFocusable: (0, n.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: t, displayMode: o, isCarouselItem: i, onClick: s, shouldScribeProfileClick: c, shouldScribeImpression: d, shouldStoreTypeaheadItem: u, withLink: m, withFollowsYou: !t || D.includes(t) }));
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
                a = o(437358);
            const i = (e, t) => {
                const { id_str: o } = e,
                    n = r().a599bbfa;
                return { Icon: a.default, text: n, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { FK: () => p, GS: () => l, N1: () => c, X6: () => f, cm: () => s });
            o(202784);
            var n = o(111677),
                r = o.n(n),
                a = o(391366),
                i = o(40904);
            const l = r().hb568af4,
                s = r().bb1cbeb6,
                c =
                    (r().h2f62206,
                    (e, t, o) => {
                        const { muting: n } = e;
                        return { text: n ? s : l, onClick: n ? o : t, Icon: n ? a.default : i.default };
                    }),
                d = r().h59f52ee,
                u = r().eea0cbee,
                m = r().i29533b3,
                h = r().h129c3c3,
                p = (e) => (e ? ((e) => m({ screenName: e }))(e) : d),
                f = (e) => (e ? ((e) => h({ screenName: e }))(e) : u);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => d });
            o(202784);
            var n = o(111677),
                r = o.n(n),
                a = o(224823);
            const i = r().b3036480,
                l = r().b3036480,
                s = r().e68b09b4,
                c = r().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: i, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: s, text: c({ screenName: e.screen_name }) });
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(615656),
                r = o(51525);
            const a = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        23679: (e, t, o) => {
            o.d(t, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => i });
            var n = o(807896),
                r = o(202784),
                a = o(190286);
            const i = (e) => (t) => {
                const [o, i] = r.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            i({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return r.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                l(), i(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => y, dS: () => f, iY: () => b });
            var n = o(370751),
                r = o(399896),
                a = o(663550),
                i = o(499627),
                l = o(917799);
            const s = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: a, impression_id: i, promoted_trend_id: s } = e,
                            d = `trend-${s}-${a}`;
                        if (m.has(a) && p(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: s, event: a, impression_id: i };
                        return (0, l._O)(t, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(d)];
                        });
                    },
                y =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (a, i, { api: s }) => {
                        const { event: d, impression_id: m } = n,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(i(), f)) return Promise.resolve();
                        const y = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...n, earned: y, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: b, request: s.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            o.d(t, { DI: () => v, H$: () => m, OB: () => E, Ww: () => d, YB: () => u, hj: () => y, qF: () => w });
            o(901951);
            var n = o(499627),
                r = o(390387);
            const a = "recentSearches",
                i = "rweb.recentSearches",
                l =
                    (e) =>
                    (t, o, { userPersistence: n }) =>
                        n.set(i, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, t) => {
                    let o = [];
                    if (e.user) {
                        const n = e.user;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        o = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        o = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        o = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
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
                    (t, o, { userPersistence: n }) => {
                        t({ payload: e, type: f });
                        const a = o(),
                            i = d(a);
                        return (0, r.Qb)(a) ? t(l(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                w =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        e({ type: b });
                        const n = t(),
                            a = d(n);
                        return (0, r.Qb)(n) ? e(l(a)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/ADD_QUERY",
                v =
                    (e) =>
                    (t, o, { userPersistence: n }) => {
                        t({ payload: e, type: g });
                        const a = o(),
                            i = d(a);
                        return (0, r.Qb)(a) ? t(l(i)) : Promise.resolve();
                    },
                E =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        const n = t();
                        return m(n)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: o }) => {
                                  const n = t();
                                  return (0, r.Qb)(n)
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
            n.Z.register({
                [a]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case g: {
                            const o = t.payload,
                                n = o ? s(o, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), o && n.unshift(o), { ...e, recentSearches: n };
                        }
                        case f: {
                            const o = t.payload,
                                n = o ? s(o, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
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
            var n = o(161821),
                r = o(390387),
                a = o(836255),
                i = o(255117),
                l = o(166506),
                s = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(s.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            s = (0, n.Z)(a.Z.selectAll(t)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(t, n.retweeted_status);
                                        r?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, r._h)(c()),
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
            var n = o(503768),
                r = o(750085),
                a = o(962741),
                i = o(466015),
                l = o(919022),
                s = o(218951);
            const c = () => (0, s.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, o) => {
                    const n = o();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(n, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            n = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
        642153: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        h = "transparent" === t;
                    return n.createElement(
                        r.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, r) => n.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : o, key: r, size: c, style: [0 !== r && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(325686);
            class a extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const n = t[o];
                                    let r = "";
                                    return n && (r = ` ${100 * n}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return n.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
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
            o.d(t, { ZP: () => y });
            o(571372);
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(111677),
                l = o.n(i),
                s = o(643442),
                c = o(466445),
                d = o(731708),
                u = o(154003),
                m = o(173739);
            const h = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [o, a] = n.useState(t),
                    [i, l] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: f.container },
                        n.createElement(u.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(s.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                o ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        n.createElement(
                            r.Z,
                            { style: f.slider },
                            n.createElement(m.Z, {
                                "aria-label": h,
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
            function y(e) {
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [m, h] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = r.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new w(e);
                                            "function" == typeof l && l(t), n(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            n(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, a, i, l, s]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(r.Z, null, n.createElement(r.Z, { style: [e.animationContainerStyle, g.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && m && n.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            y.Prepare = function () {
                return (
                    n.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class w extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, w), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const g = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
                i = o(149170),
                l = o(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: o = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    y = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(l.ZP, { Icon: o, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: y, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        378729: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                r = o(325686),
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
            class y extends n.Component {
                render() {
                    const { color: e, id: t, style: o } = this.props;
                    return n.createElement(r.Z, { style: [b.root, o] }, n.createElement(l.default, { style: [b.icon, e && b[e]] }), n.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: o } = this.props,
                        { adMetadataContainer: n, advertiser: r, advertiser_name: a, disclosure_type: i } = o,
                        l = e && r && e === r.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        y = !(!n || "POLITICAL" !== n.disclaimerType) || s,
                        b = !(!n || "ISSUE" !== n.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: w } = n || {};
                    let g;
                    return (g = t || (!a || l || w ? (y ? m : b ? p : u) : y ? h({ fullName: a }) : b ? f({ fullName: a }) : d({ fullName: a }))), g;
                }
            }
            y.defaultProps = { color: "gray700" };
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        280278: (e, t, o) => {
            o.d(t, { ZP: () => f });
            var n = o(202784),
                r = o(325686),
                a = o(827515),
                i = o(461756),
                l = o(731708),
                s = o(392237);
            const c = "up",
                d = "down",
                u = (e, t, o) => {
                    o((o) => {
                        const n = (0, a.Z)(e) ? (e > (o.count || 0) ? c : d) : c;
                        return { ...o, count: e, oldText: o.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: o, count: s, ...d } = e,
                        [f, y] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) y((o) => ({ ...o, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? y((e) => ({ ...e, pendingCount: null, pendingText: null })) : (y((o) => ({ ...o, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, y));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && y((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, y));
                        }, [f.animating, f.oldText]),
                        n.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...h, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return n.createElement(
                                r.Z,
                                { style: [p.root, o] },
                                t ? n.createElement("span", { style: s }, n.createElement(l.ZP, d, f.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, y),
                                        style: c,
                                    },
                                    n.createElement(l.ZP, d, f.text),
                                ),
                            );
                        }, [o, d, f, b, y])
                    );
                };
        },
        537439: (e, t, o) => {
            o.d(t, { Z: () => O });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
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
                w = o(404971),
                g = o(262009),
                v = o(76388),
                E = o(488746),
                C = o(246492),
                D = o(520913),
                P = o(731708),
                x = o(642153),
                k = o(879891),
                S = o(392237),
                I = o(54606);
            const _ = a().ae408b76,
                M = a().j355f008,
                Z = a().habf9678,
                A = a().db0798ed,
                T = a().dc716ec9,
                F = ({ text: e }) => {
                    const { direction: t } = (0, k.Z)();
                    return n.createElement(P.ZP, { dir: t, withHashflags: !0 }, e);
                },
                L = (e, t) =>
                    t
                        ? _
                        : ((e) => {
                              const t = n.createElement(F, { text: e });
                              return n.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                R = S.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                B = S.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                O = ({ contextType: e, iconColor: t, iconSize: o, link: r, retweetData: a, text: P, topicData: k, userAvatarUrls: _ }) => {
                    const { isSelfRetweet: O, name: N, screenName: H } = a || {},
                        z = ((e, t, o, r = []) => {
                            const a = R[t],
                                P = [o ? { color: S.default.theme.colors[o] } : B.colorDeepGray, a],
                                k = n.createElement(i.default, { style: P }),
                                _ = n.createElement(l.default, { style: P }),
                                M = n.createElement(s.default, { style: P }),
                                Z = n.createElement(c.default, { style: P }),
                                A = n.createElement(d.default, { style: P }),
                                T = n.createElement(u.default, { style: B.circle }),
                                F = n.createElement(m.default, { style: P }),
                                L = n.createElement(h.default, { style: P }),
                                O = n.createElement(p.default, { style: P }),
                                N = n.createElement(f.default, { style: P }),
                                H = n.createElement(y.default, { style: P }),
                                z = n.createElement(b.default, { style: P }),
                                W = n.createElement(w.default, { style: P }),
                                U = n.createElement(g.default, { style: P }),
                                Q = n.createElement(v.default, { style: P }),
                                j = n.createElement(E.default, { style: P }),
                                $ = n.createElement(C.default, { style: P }),
                                V = n.createElement(x.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: r }),
                                G = n.createElement(D.default, { style: P });
                            switch (e) {
                                case I.Q.Pin:
                                case I.Q.ReplyPin:
                                    return k;
                                case I.Q.Retweet:
                                    return _;
                                case I.Q.Like:
                                    return M;
                                case I.Q.Follow:
                                    return Z;
                                case I.Q.Moment:
                                    return A;
                                case I.Q.NewTweets:
                                    return T;
                                case I.Q.Reply:
                                case I.Q.Conversation:
                                    return F;
                                case I.Q.Feedback:
                                    return L;
                                case I.Q.Topic:
                                    return O;
                                case I.Q.List:
                                    return N;
                                case I.Q.Location:
                                    return H;
                                case I.Q.Community:
                                    return z;
                                case I.Q.Spaces:
                                    return W;
                                case I.Q.Sparkle:
                                    return U;
                                case I.Q.SocialProof:
                                case I.Q.FollowFollowed:
                                    return $;
                                case I.Q.FollowMutual:
                                    return j;
                                case I.Q.FollowFollowing:
                                    return Q;
                                case I.Q.Facepile:
                                    return V;
                                case I.Q.Bird:
                                    return G;
                                case I.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, o, t, _);
                    switch (e) {
                        case I.Q.Retweet:
                            return { Icon: z, text: P || L(N, O), link: H ? `https://twitter.com/${H}` : void 0 };
                        case I.Q.Pin:
                            return { Icon: z, text: P || M };
                        case I.Q.ReplyPin:
                            return { Icon: z, text: Z };
                        case I.Q.Topic:
                            return { Icon: z, "aria-label": "Recommendation" === k?.functionalityType || "RecWithEducation" === k?.functionalityType ? T({ topicName: P }) : A({ topicName: P }), text: P ? n.createElement(F, { text: P }) : null, link: r };
                        default:
                            return { Icon: z, text: P ? n.createElement(F, { text: P }) : null, link: r };
                    }
                };
        },
        126962: (e, t, o) => {
            o.d(t, { Z: () => f });
            o(136728);
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                i = o(872405),
                l = o(235902),
                s = o(392237),
                c = o(139052),
                d = o(488684),
                u = o(537439),
                m = o(54606);
            class h extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: o, id: s, onLayout: c, rightControl: d, style: m, testID: h, textColor: f, textSize: y, topControl: b, weight: w, withBottomBorder: g, withLeftPadding: v, withTextCentered: E, ...C } = this.props,
                        { Icon: D, "aria-label": P, link: x, text: k } = (0, u.Z)(C),
                        S = n.createElement(a.ZP, { "aria-label": P, color: f, id: s, numberOfLines: 2, size: y, testID: h, weight: w, withoutTwemojiAndHashflags: !0 }, k),
                        { cellStyle: I, viewStyle: _ } = this._getStyles();
                    return k ? n.createElement(l.ZP.UseProps, null, (a) => n.createElement(n.Fragment, null, b || null, n.createElement(r.Z, { onLayout: c, style: [m, _, a.socialContextRefreshEnabled() && !v && p.socialContextRefresh] }, n.createElement(i.Z, { avatarCell: D || (v ? null : void 0), avatarCellStyle: [o, p.socialContextIconColumn, !v && p.unsetIconWidth, a.socialContextRefreshEnabled() && !v && p.socialContextRefreshIcon], avatarSize: e, cellStyle: I }, n.createElement(r.Z, { style: p.cellWrapper }, n.createElement(r.Z, { style: [p.socialContextTextColumn, a.socialContextRefreshEnabled() && !v && p.socialContextRefreshTextColumn] }, x ? this._renderLink(x, S) : S), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: o, id: r, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        p = n.createElement(a.ZP, { color: s, id: r, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return o === m.Q.Topic && u ? n.createElement(c.Z, { topicId: u.topicId }, p) : o === m.Q.Retweet && h ? n.createElement(d.Z, { screenName: h }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: o, withTextCentered: n } = this.props,
                        r = t === m.Q.TextOnly,
                        a = o ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        i = o && !e ? [p.bottomBorder] : [];
                    return r && i.push(p.topicContext), n && i.push(p.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = h;
        },
        54606: (e, t, o) => {
            o.d(t, { Q: () => n });
            o(202784);
            const n = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(215337),
                l = o(392237),
                s = o(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return r.createElement("defs", null, r.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, r.createElement("stop", { stopColor: e.primary }), r.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const h = {
                    Default: function ({ children: e, style: t, type: o = "audiospace" }) {
                        return r.createElement(
                            i.Z,
                            (0, n.Z)(
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
                        return r.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            r.createElement(
                                i.Z,
                                (0, n.Z)(
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
            var n = o(465233),
                r = o(483054),
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
                return (0, n.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = a.xO(e),
                    o = r.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(o)).slice(0, -2);
            }
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => E });
            var n = o(202784),
                r = o(325686),
                a = o(461756),
                i = o(731708),
                l = o(58881),
                s = o(530732),
                c = o(224162),
                d = o(491915),
                u = o(392237),
                m = o(551611),
                h = o(111677),
                p = o.n(h),
                f = o(891198),
                y = o(537392),
                b = o(280278);
            const w = p().e8d93005,
                g = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: t }) => {
                    const o = (0, f.wl)(t, !0);
                    return n.createElement(y.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [g.count, ((a = r), a < u.default.theme.breakpoints.small && g.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? w(t) : o) : void 0);
                        var a;
                    });
                };
            class E extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: a, decoration: l } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: s }) => n.createElement(i.ZP, { color: e ? o : a, dir: s, style: [P.inner, e && "blue500" === o && P.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return n.createElement(s.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, D[h ? "haloBackground" : o], !c && P.iconBackground, "small" === a && P.iconSmallBoundingBox, h && P.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: i, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: C[t], animationStyle: k, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const a = o && e ? e : this.props.Icon;
                                return n.createElement(a, { style: [C[t], !r && i && P.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: i, isDisabled: l, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: y = n.Fragment, style: b, testID: w } = this.props,
                        g = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return n.createElement(
                        r.Z,
                        { style: [P.root, b] },
                        n.createElement(
                            y,
                            null,
                            c
                                ? this._renderContent(i)
                                : n.createElement(s.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [P.triggerAreaRoot, P.outlineNone], testID: w }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = i || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        g ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const C = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                D = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                P = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                k = { width: x, height: x };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => r, ZP: () => i });
            var n = o(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends n.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        433460: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
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
                    [o, a] = r.useState(),
                    i = !!(o && o > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...m } = e,
                    p =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return w.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return w.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                r.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const y = r.useCallback((e) => r.createElement(u.Z.Default, (0, n.Z)({}, e, { type: s })), [s]);
                return r.createElement(
                    h.default,
                    (0, n.Z)({}, m, {
                        BorderComponent: y,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== o && a(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: r.createElement(f, { isWide: i, type: s }),
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
                        return r.createElement(y, e);
                    default:
                        return null;
                }
            }
            function y(e) {
                return "livevideo" === e.type ? r.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [b.liveVideoLabelContainer, b.borderNarrow, e.isWide ? b.liveVideoLabel : b.liveVideoLabelNarrow], type: "live" }) : r.createElement(a.Z, { style: [b.root, e.isWide ? b.rootWide : b.rootNarrow] }, r.createElement(u.Z.Default, { style: [b.spaceGradient, e.isWide ? b.borderWide : b.borderNarrow] }, r.createElement(s.default, { style: b.spaceIcon })));
            }
            const b = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        o = "100%",
                        n = e.spacesPx.space4,
                        r = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * r, bottom: -1 * r }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: r }, spaceGradient: { justifyContent: "center", width: o, height: o, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                w = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(731708),
                a = o(354149),
                i = o(310452),
                l = o(720283);
            const s = ({ animateIn: e, description: t, entities: o, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: h }) => {
                const { description: p, entities: f } = (0, l.H)({ description: t, entities: o, withheldDescription: m, withheldEntities: h }),
                    y = i.ZP.descriptionTextParts(p, f);
                return y.length
                    ? n.createElement(
                          r.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          y.map((t, o) => n.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${o}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, o) => {
            o.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: o, withheldEntities: n }) => (o ? { description: o, entities: n } : { description: e, entities: t });
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        74514: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.a5cce67a.js.map
