"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e4e3d8bb"],
    {
        524084: (e, r, o) => {
            o.d(r, { Z: () => s });
            var n = o(202784),
                t = o(523561),
                a = o(195560);
            const s = (0, t.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, r) => n.createElement(a.Z, { hasError: e, onRetry: r }) });
        },
        684511: (e, r, o) => {
            o.d(r, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
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
        376293: (e, r, o) => {
            o.d(r, { $f: () => M, KV: () => k, LI: () => C, SC: () => E, Vt: () => g, ed: () => S, op: () => _ });
            var n = o(202784),
                t = o(190286),
                a = o(111677),
                s = o.n(a),
                d = o(616894),
                l = o(314948),
                i = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                D = s().ad00a739,
                k = s().a9fd20be,
                b = s().j546fb79,
                y = s().c9623eeb,
                g = s().e133be4e,
                v = s().he43bca4,
                w = s().f5f01af6,
                E = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                M = (e, r) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: r ? D({ screenName: e }) : f({ screenName: e }) }),
                _ = ({ blockAction: e, blockSubtext: r, isSoftBlockEnabled: o, source: n, testID: t, unblockAction: a, unblockSubtext: s, user: d }) => {
                    let l,
                        u = i.Z;
                    const m = C(d, o);
                    switch (n) {
                        case E.PROFILE:
                        case E.LIST_DETAIL:
                        case E.FOLLOWERS_LIST:
                            u = () => {
                                d.blocking ? a(m) : e(m);
                            };
                            break;
                        case E.TWEET:
                        case E.TWEET_CARET:
                        case E.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (u = () => {
                                    d.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: t, shortcutKey: l, Icon: P(d.blocking), text: T(d), subText: I({ user: d, blockSubtext: r, unblockSubtext: s }) };
                },
                P = (e) => (e ? l.default : d.default),
                I = ({ blockSubtext: e, unblockSubtext: r, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? r : void 0),
                T = (e) => (e.blocking ? y({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                C = (e, r) => (e.blocking ? ((e, r) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: g, text: r ? w : v }))(e.screen_name, r) : M(e.screen_name, r)),
                S = ({ confirmation: e, handleConfirm: r, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: d, text: l } = e;
                    return n.createElement(t.Z, { cancelButtonLabel: u, confirmButtonLabel: d, confirmButtonType: a, headline: s, onCancel: o, onConfirm: r, text: l });
                };
        },
        545334: (e, r, o) => {
            o.d(r, { d: () => t });
            var n = o(111677);
            const t = o.n(n)().gf5e9ea6;
        },
        916585: (e, r, o) => {
            o.d(r, { k: () => s });
            var n = o(111677),
                t = o.n(n),
                a = o(437358);
            const s = (e, r) => {
                const { id_str: o, screen_name: n } = e,
                    s = (0, t().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: r };
            };
        },
        847607: (e, r, o) => {
            o.d(r, { Aq: () => u, FK: () => b, GS: () => d, N1: () => h, PY: () => m, X6: () => y, cm: () => l });
            o(202784);
            var n = o(111677),
                t = o.n(n),
                a = o(391366),
                s = o(40904);
            const d = t().hb568af4,
                l = t().bb1cbeb6,
                i = (t().h2f62206, t().e67b2d65),
                c = t().f05597b3,
                u = (e) => i({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, r, o) => {
                    const { muting: n, screen_name: t } = e;
                    return { text: n ? m(t) : u(t), onClick: n ? o : r, Icon: n ? a.default : s.default };
                },
                p = t().h59f52ee,
                f = t().eea0cbee,
                D = t().i29533b3,
                k = t().h129c3c3,
                b = (e) => (e ? ((e) => D({ screenName: e }))(e) : p),
                y = (e) => (e ? ((e) => k({ screenName: e }))(e) : f);
        },
        417714: (e, r, o) => {
            o.d(r, { l: () => c });
            o(202784);
            var n = o(111677),
                t = o.n(n),
                a = o(224823);
            const s = t().b3036480,
                d = t().b3036480,
                l = t().e68b09b4,
                i = t().h27b7407,
                c = ({ removeFollowerAction: e, user: r }) => {
                    const o = u(r);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: l, text: i({ screenName: e.screen_name }) });
        },
        712816: (e, r, o) => {
            o.d(r, { d: () => t });
            var n = o(111677);
            const t = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        68292: (e, r, o) => {
            o.d(r, { D: () => d });
            var n = o(111677),
                t = o.n(n),
                a = o(615656);
            const s = t().j85d8d90,
                d = { [a.ZP.NoFollowRequest]: { toast: { text: s } }, showToast: !0 };
        },
        48886: (e, r, o) => {
            o.d(r, { q: () => t });
            var n = o(111677);
            const t = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, r, o) => {
            o.d(r, { D: () => t });
            var n = o(111677);
            const t = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, r, o) => {
            o.d(r, { Z: () => a });
            var n = o(615656),
                t = o(51525);
            const a = { [n.ZP.FollowError]: { customAction: t.w1 } };
        },
        553093: (e, r, o) => {
            o.d(r, { Sz: () => n });
            const n = (e) => {
                    const r = (JSON.stringify(e) || "").split("");
                    r.sort();
                    const o = r.join("");
                    return t(o, 0).toString();
                },
                t = (e, r) => {
                    const o = "string" == typeof e ? e : String(e);
                    let n = r;
                    for (let e = 0; e < o.length; e++) {
                        (n = (n << 5) - n + o.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        163390: (e, r, o) => {
            o.d(r, { OX: () => m, Od: () => c, PN: () => h, uq: () => i, wR: () => f });
            var n = o(251067),
                t = o(522171),
                a = o(111677),
                s = o.n(a),
                d = o(912021),
                l = o(323265);
            const i = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, d.Z)((e) => {
                    const r = e ? [{ description: s().b7fa0cfe, keys: i.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: i.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: i.nextItem, universal: !0 }, { description: s().g0048656, keys: i.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: i.refresh, universal: !1 }, { description: s().ha8209bc, keys: i.goHome, universal: !1 }, { description: s().fcf3e54c, keys: i.goExplore, universal: !1 }, { description: s().eb75875e, keys: i.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: i.goMentions, universal: !1 }, { description: s().fa98627a, keys: i.goProfile, universal: !1 }, { description: s().d4ebc798, keys: i.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: i.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: i.goLikes, universal: !1 }, { description: s().b0041756, keys: i.goLists, universal: !1 }, { description: s().d4986f86, keys: i.goMessages, universal: !1 }, { description: s().h5860a68, keys: i.goGrok, universal: !1 }, { description: s().bb081ea2, keys: i.goSettings, universal: !1 }, { description: s().i3145aa0, keys: i.goBookmarks, universal: !1 }, ...r, { description: s().eee2ed92, keys: i.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: i.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: i.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: i.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: i.search, universal: !1 },
                    { description: s().fe731016, keys: t.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: t.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: t.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: t.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: i.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: i.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: i.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: t.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: i.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: s().c82314e0, keys: i.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: i.video.play2, universal: !0 },
                    { description: s().b881560e, keys: i.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: i.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: i.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: i.audio.mute, universal: !1 },
                ],
                p = (0, d.Z)((e) => {
                    const r = c(e),
                        o = m(),
                        n = h(),
                        t = {};
                    return (
                        [...o, ...n, ...r].forEach(({ description: e, keys: r }) => {
                            Array.isArray(r)
                                ? r.forEach((r) => {
                                      t[r] = e;
                                  })
                                : (t[r] = e);
                        }),
                        JSON.stringify(t)
                    );
                }),
                f = (e, r) => {
                    if (r) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, r, o) => {
            o.d(r, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, r, o) => {
            o.d(r, { M: () => s });
            var n = o(807896),
                t = o(202784),
                a = o(190286);
            const s = (e) => (r) => {
                const [o, s] = t.useState(null),
                    d = (e) =>
                        new Promise((r, o) => {
                            s({ resolve: r, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: r, resolve: d } = o;
                    return t.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                r(), s(null);
                            },
                            onConfirm: () => {
                                d(), s(null);
                            },
                        }),
                    );
                }
                return t.createElement(e, (0, n.Z)({}, r, { confirm: d }));
            };
        },
        694180: (e, r, o) => {
            o.d(r, { cM: () => D, dS: () => f, iY: () => k });
            var n = o(370751),
                t = o(399896),
                a = o(663550),
                s = o(499627),
                d = o(917799);
            const l = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, r) => !!e.promotedContent[r],
                f =
                    (e) =>
                    (r, o, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (m.has(a) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, d._O)(r, { params: u, request: n.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, r) => {
                            if (!r && m.has(a)) return [h(c)];
                        });
                    },
                D =
                    ({ disclosureType: e, itemId: r, itemType: o, params: n }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: m } = n,
                            f = `${o}-${r ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const D = e && "earned" === e.toLowerCase() ? "1" : null,
                            k = { ...n, earned: D, epoch_ms: Date.now() };
                        return (0, d._O)(a, { params: k, request: l.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: k }, (e, r) => {
                            if (!r && u.has(c)) return [h(f)];
                        });
                    },
                k =
                    (e) =>
                    (r, o, { api: n }) =>
                        (0, d._O)(r, { params: e, request: n.withEndpoint(t.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, r) {
                    if (!r) return e;
                    if (r.type === c) {
                        if (!r.payload) return e;
                        const { eventKey: o } = r.payload;
                        return { ...e, [o]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, r, o) => {
            o.d(r, { r: () => i });
            o(136728);
            var n = o(161821),
                t = o(390387),
                a = o(836255),
                s = o(255117),
                d = o(166506),
                l = o(919022);
            const i =
                (e, r) =>
                (o, i, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, r)).then(() => {
                        const r = i(),
                            l = (0, n.Z)(a.Z.selectAll(r)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const t = a.Z.select(r, n.retweeted_status);
                                        t?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, t._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            m = (0, d.k9)();
                        if (m.selectInitialFetchStatus(r) && !m.selectCanRefresh(r)) {
                            const o = (0, d.f8)(e, r, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, r, o) => {
            o.d(r, { du: () => c, f8: () => u, k9: () => i });
            var n = o(503768),
                t = o(750085),
                a = o(962741),
                s = o(466015),
                d = o(919022),
                l = o(218951);
            const i = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: r }) => ({ count: e, cursor: "string" == typeof r ? r : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: t.Z }),
                c = (e) => (r, o) => {
                    const n = o();
                    r(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const r = e.type === a.ZP.User ? e.content.id : "",
                                    o = d.ZP.select(n, r);
                                return o && !o.muting;
                            })
                            .map((r) => e.removeEntry(r.entryId)),
                    );
                },
                u = (e, r, o) => {
                    if (!o.selectEntries(r).find((r) => r.type === a.ZP.User && r.content.id === e)) {
                        const r = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: r, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
        578813: (e, r, o) => {
            o.r(r), o.d(r, { FollowerRequestsScreen: () => A, default: () => Z });
            var n = o(202784),
                t = o(325686),
                a = o(457311),
                s = o(111677),
                d = o.n(s),
                l = o(290402),
                i = o(980407),
                c = o(965245),
                u = o(292257),
                m = o(240089),
                h = o(293115),
                p = o(409438),
                f = o(553093);
            const D = (e) => (e && "user_cell" === e.type ? e.data : (0, f.Sz)(e));
            var k = o(24949),
                b = o(71620),
                y = o(668214),
                g = o(466036),
                v = o(312771);
            const w = (e) => g.sC(e).hydratedIds,
                E = (0, y.Z)()
                    .propsFromState(() => ({ followerRequestIds: w, fetchStatus: (0, k.P1)(g.sC, g.HP, g.dj, ({ hydratedIds: e, ids: r }, o, n) => (o === v.ZP.LOADED ? (r.length && e.length !== r.length ? n || v.ZP.LOADING : v.ZP.LOADED) : o)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: r }) => ({ fetchStatus: r, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: g.GE, fetchPendingFollowersUsersIfNeeded: g.IN, fetchNextPendingFollowersUsers: g.lm })),
                M = d().g6b54ff6,
                _ = d().ec5fd35a,
                P = d().i83d4f14,
                I = { page: "follower_requests" },
                T = (e) => {
                    const { followRequestReceived: r, userId: o, viewerUserId: n } = e;
                    return !(!r || n === o);
                },
                C = (e) => (T(e) ? null : (0, m.ET)(e)),
                S = (e) => (T(e) ? n.createElement(u.Z, { userId: e.userId }) : null);
            class A extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return n.createElement(c.Z, { accessibilityTitle: P, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: D, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => n.createElement(a.Z, { header: M, message: _ })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: r, fetchPendingFollowersUsersIfNeeded: o } = this.props;
                            r().then(() => o(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? n.createElement(t.Z, null, n.createElement(m.ZP, { bottomControl: S, decoration: C, displayMode: p.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: r } = this.props;
                    return n.createElement(h.nO, { namespace: I }, n.createElement(i.Z, { history: r, title: P }, n.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const Z = E(A);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e4e3d8bb.17477e6a.js.map
