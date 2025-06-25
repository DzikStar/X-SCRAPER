"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e4e3d8bb"],
    {
        524084: (e, o, r) => {
            r.d(o, { Z: () => s });
            var n = r(202784),
                a = r(523561),
                t = r(195560);
            const s = (0, a.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, o) => n.createElement(t.Z, { hasError: e, onRetry: o }) });
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
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        376293: (e, o, r) => {
            r.d(o, { $f: () => w, KV: () => f, LI: () => _, SC: () => M, Vt: () => b, ed: () => T, op: () => v });
            var n = r(202784),
                a = r(190286),
                t = r(111677),
                s = r.n(t),
                d = r(616894),
                l = r(314948),
                i = r(516951),
                c = r(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                D = s().a6450e84,
                p = s().ad00a739,
                f = s().a9fd20be,
                k = s().j546fb79,
                y = s().c9623eeb,
                b = s().e133be4e,
                g = s().f5f01af6,
                M = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: D, text: p({ screenName: e }) }),
                v = ({ blockAction: e, blockSubtext: o, source: r, testID: n, unblockAction: a, unblockSubtext: t, user: s }) => {
                    let d,
                        l = i.Z;
                    const u = _(s);
                    switch (r) {
                        case M.PROFILE:
                        case M.LIST_DETAIL:
                        case M.FOLLOWERS_LIST:
                            l = () => {
                                s.blocking ? a(u) : e(u);
                            };
                            break;
                        case M.TWEET:
                        case M.TWEET_CARET:
                        case M.RICH_FEEDBACK:
                            (d = c.uq.block),
                                (l = () => {
                                    s.blocking ? a(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: n, shortcutKey: d, Icon: E(s.blocking), text: P(s), subText: I({ user: s, blockSubtext: o, unblockSubtext: t }) };
                },
                E = (e) => (e ? l.default : d.default),
                I = ({ blockSubtext: e, unblockSubtext: o, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? o : void 0),
                P = (e) => (e.blocking ? y({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                _ = (e) => {
                    return e.blocking ? ((o = e.screen_name), { confirmButtonType: "primary", headline: k({ screenName: o }), label: b, text: g }) : w(e.screen_name);
                    var o;
                },
                T = ({ confirmation: e, handleConfirm: o, onClose: r }) => {
                    const { confirmButtonType: t, headline: s, label: d, text: l } = e;
                    return n.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: d, confirmButtonType: t, headline: s, onCancel: r, onConfirm: o, text: l });
                };
        },
        545334: (e, o, r) => {
            r.d(o, { d: () => a });
            var n = r(111677);
            const a = r.n(n)().gf5e9ea6;
        },
        916585: (e, o, r) => {
            r.d(o, { k: () => s });
            var n = r(111677),
                a = r.n(n),
                t = r(437358);
            const s = (e, o) => {
                const { id_str: r } = e,
                    n = a().a599bbfa;
                return { Icon: t.default, text: n, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: o };
            };
        },
        847607: (e, o, r) => {
            r.d(o, { FK: () => D, GS: () => d, N1: () => i, X6: () => p, cm: () => l });
            r(202784);
            var n = r(111677),
                a = r.n(n),
                t = r(391366),
                s = r(40904);
            const d = a().hb568af4,
                l = a().bb1cbeb6,
                i =
                    (a().h2f62206,
                    (e, o, r) => {
                        const { muting: n } = e;
                        return { text: n ? l : d, onClick: n ? r : o, Icon: n ? t.default : s.default };
                    }),
                c = a().h59f52ee,
                u = a().eea0cbee,
                m = a().i29533b3,
                h = a().h129c3c3,
                D = (e) => (e ? ((e) => m({ screenName: e }))(e) : c),
                p = (e) => (e ? ((e) => h({ screenName: e }))(e) : u);
        },
        417714: (e, o, r) => {
            r.d(o, { l: () => c });
            r(202784);
            var n = r(111677),
                a = r.n(n),
                t = r(224823);
            const s = a().b3036480,
                d = a().b3036480,
                l = a().e68b09b4,
                i = a().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const r = u(o);
                    return { Icon: t.default, text: s, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: l, text: i({ screenName: e.screen_name }) });
        },
        712816: (e, o, r) => {
            r.d(o, { d: () => a });
            var n = r(111677);
            const a = { defaultToast: { text: r.n(n)().b6878b0a }, showToast: !0 };
        },
        68292: (e, o, r) => {
            r.d(o, { D: () => d });
            var n = r(111677),
                a = r.n(n),
                t = r(615656);
            const s = a().j85d8d90,
                d = { [t.ZP.NoFollowRequest]: { toast: { text: s } }, showToast: !0 };
        },
        48886: (e, o, r) => {
            r.d(o, { q: () => a });
            var n = r(111677);
            const a = { defaultToast: { text: r.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, o, r) => {
            r.d(o, { D: () => a });
            var n = r(111677);
            const a = { defaultToast: { text: r.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, o, r) => {
            r.d(o, { Z: () => t });
            var n = r(615656),
                a = r(51525);
            const t = { [n.ZP.FollowError]: { customAction: a.w1 } };
        },
        553093: (e, o, r) => {
            r.d(o, { Sz: () => n });
            const n = (e) => {
                    const o = (JSON.stringify(e) || "").split("");
                    o.sort();
                    const r = o.join("");
                    return a(r, 0).toString();
                },
                a = (e, o) => {
                    const r = "string" == typeof e ? e : String(e);
                    let n = o;
                    for (let e = 0; e < r.length; e++) {
                        (n = (n << 5) - n + r.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        163390: (e, o, r) => {
            r.d(o, { OX: () => m, Od: () => c, PN: () => h, uq: () => i, wR: () => p });
            var n = r(251067),
                a = r(522171),
                t = r(111677),
                s = r.n(t),
                d = r(912021),
                l = r(323265);
            const i = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, d.Z)((e) => {
                    const o = e ? [{ description: s().b7fa0cfe, keys: i.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: i.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: i.nextItem, universal: !0 }, { description: s().g0048656, keys: i.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: i.refresh, universal: !1 }, { description: s().ha8209bc, keys: i.goHome, universal: !1 }, { description: s().fcf3e54c, keys: i.goExplore, universal: !1 }, { description: s().eb75875e, keys: i.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: i.goMentions, universal: !1 }, { description: s().fa98627a, keys: i.goProfile, universal: !1 }, { description: s().d4ebc798, keys: i.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: i.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: i.goLikes, universal: !1 }, { description: s().b0041756, keys: i.goLists, universal: !1 }, { description: s().d4986f86, keys: i.goMessages, universal: !1 }, { description: s().h5860a68, keys: i.goGrok, universal: !1 }, { description: s().bb081ea2, keys: i.goSettings, universal: !1 }, { description: s().i3145aa0, keys: i.goBookmarks, universal: !1 }, ...o, { description: s().eee2ed92, keys: i.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: i.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: i.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: i.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: i.search, universal: !1 },
                    { description: s().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: i.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: i.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: i.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
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
                D = (0, d.Z)((e) => {
                    const o = c(e),
                        r = m(),
                        n = h(),
                        a = {};
                    return (
                        [...r, ...n, ...o].forEach(({ description: e, keys: o }) => {
                            Array.isArray(o)
                                ? o.forEach((o) => {
                                      a[o] = e;
                                  })
                                : (a[o] = e);
                        }),
                        JSON.stringify(a)
                    );
                }),
                p = (e, o) => {
                    if (o) return { dataSet: { "at-shortcutkeys": D(e) } };
                };
        },
        409438: (e, o, r) => {
            r.d(o, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, o, r) => {
            r.d(o, { M: () => s });
            var n = r(807896),
                a = r(202784),
                t = r(190286);
            const s = (e) => (o) => {
                const [r, s] = a.useState(null),
                    d = (e) =>
                        new Promise((o, r) => {
                            s({ resolve: o, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: o, resolve: d } = r;
                    return a.createElement(
                        t.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                d(), s(null);
                            },
                        }),
                    );
                }
                return a.createElement(e, (0, n.Z)({}, o, { confirm: d }));
            };
        },
        694180: (e, o, r) => {
            r.d(o, { cM: () => f, dS: () => p, iY: () => k });
            var n = r(370751),
                a = r(399896),
                t = r(663550),
                s = r(499627),
                d = r(917799);
            const l = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([t.dx.IMPRESSION, t.dx.DWELL]),
                m = (0, n.Z)([t.AJ.TREND_VIEW, t.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const D = (e, o) => !!e.promotedContent[o],
                p =
                    (e) =>
                    (o, r, { api: n }) => {
                        const { event: t, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${t}`;
                        if (m.has(t) && D(r(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: t, impression_id: s };
                        return (0, d._O)(o, { params: u, request: n.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && m.has(t)) return [h(c)];
                        });
                    },
                f =
                    ({ disclosureType: e, itemId: o, itemType: r, params: n }) =>
                    (t, s, { api: l }) => {
                        const { event: c, impression_id: m } = n,
                            p = `${r}-${o ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && D(s(), p)) return Promise.resolve();
                        const f = e && "earned" === e.toLowerCase() ? "1" : null,
                            k = { ...n, earned: f, epoch_ms: Date.now() };
                        return (0, d._O)(t, { params: k, request: l.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: k }, (e, o) => {
                            if (!o && u.has(c)) return [h(p)];
                        });
                    },
                k =
                    (e) =>
                    (o, r, { api: n }) =>
                        (0, d._O)(o, { params: e, request: n.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, o) {
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
        629196: (e, o, r) => {
            r.d(o, { r: () => i });
            r(136728);
            var n = r(161821),
                a = r(390387),
                t = r(836255),
                s = r(255117),
                d = r(166506),
                l = r(919022);
            const i =
                (e, o) =>
                (r, i, { api: c, featureSwitches: u }) =>
                    r(l.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            l = (0, n.Z)(t.Z.selectAll(o)).reduce((r, n) => {
                                if (null != n)
                                    if (n.user === e) r[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const a = t.Z.select(o, n.retweeted_status);
                                        a?.user === e && (r[n.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            c = (0, a._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            m = (0, d.k9)();
                        if (m.selectInitialFetchStatus(o) && !m.selectCanRefresh(o)) {
                            const r = (0, d.f8)(e, o, m);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        166506: (e, o, r) => {
            r.d(o, { du: () => c, f8: () => u, k9: () => i });
            var n = r(503768),
                a = r(750085),
                t = r(962741),
                s = r(466015),
                d = r(919022),
                l = r(218951);
            const i = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: a.Z }),
                c = (e) => (o, r) => {
                    const n = r();
                    o(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const o = e.type === t.ZP.User ? e.content.id : "",
                                    r = d.ZP.select(n, o);
                                return r && !r.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, r) => {
                    if (!r.selectEntries(o).find((o) => o.type === t.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(n);
                    }
                };
        },
        578813: (e, o, r) => {
            r.r(o), r.d(o, { FollowerRequestsScreen: () => A, default: () => Z });
            var n = r(202784),
                a = r(325686),
                t = r(457311),
                s = r(111677),
                d = r.n(s),
                l = r(290402),
                i = r(980407),
                c = r(965245),
                u = r(292257),
                m = r(240089),
                h = r(293115),
                D = r(409438),
                p = r(553093);
            const f = (e) => (e && "user_cell" === e.type ? e.data : (0, p.Sz)(e));
            var k = r(24949),
                y = r(71620),
                b = r(668214),
                g = r(466036),
                M = r(312771);
            const w = (e) => g.sC(e).hydratedIds,
                v = (0, b.Z)()
                    .propsFromState(() => ({ followerRequestIds: w, fetchStatus: (0, k.P1)(g.sC, g.HP, g.dj, ({ hydratedIds: e, ids: o }, r, n) => (r === M.ZP.LOADED ? (o.length && e.length !== o.length ? n || M.ZP.LOADING : M.ZP.LOADED) : r)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: o }) => ({ fetchStatus: o, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: g.GE, fetchPendingFollowersUsersIfNeeded: g.IN, fetchNextPendingFollowersUsers: g.lm })),
                E = d().g6b54ff6,
                I = d().ec5fd35a,
                P = d().i83d4f14,
                _ = { page: "follower_requests" },
                T = (e) => {
                    const { followRequestReceived: o, userId: r, viewerUserId: n } = e;
                    return !(!o || n === r);
                },
                C = (e) => (T(e) ? null : (0, m.ET)(e)),
                S = (e) => (T(e) ? n.createElement(u.Z, { userId: e.userId }) : null);
            class A extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return n.createElement(c.Z, { accessibilityTitle: P, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: f, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => n.createElement(t.Z, { header: E, message: I })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: o, fetchPendingFollowersUsersIfNeeded: r } = this.props;
                            o().then(() => r(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? n.createElement(a.Z, null, n.createElement(m.ZP, { bottomControl: S, decoration: C, displayMode: D.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: o } = this.props;
                    return n.createElement(h.nO, { namespace: _ }, n.createElement(i.Z, { history: o, title: P }, n.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const Z = v(A);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e4e3d8bb.29a21c5a.js.map
