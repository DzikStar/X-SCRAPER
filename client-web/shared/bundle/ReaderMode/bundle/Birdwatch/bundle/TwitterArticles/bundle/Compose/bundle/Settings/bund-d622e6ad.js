"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"],
    {
        549116: (e, t, n) => {
            n.d(t, { NR: () => d, Yt: () => c });
            var s = n(499627),
                r = n(56519);
            const i = "liveTweetCounts",
                o = "rweb/liveTweetCounts/UPDATE",
                a = {};
            function c(e, t) {
                return e[i][t];
            }
            function d(e) {
                return (t, n) => t({ payload: e, type: o });
            }
            s.Z.register({
                [i]: function (e = a, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case r.ud: {
                            const n = t.payload?.tweets;
                            if (n) {
                                const t = { ...e };
                                return (
                                    Object.keys(n).forEach((e) => {
                                        t[e] && delete t[e];
                                    }),
                                    t
                                );
                            }
                            return e;
                        }
                        case o:
                            return { ...e, [t.payload.tweetId]: { ...e[t.payload.tweetId], ...t.payload.liveCounts } };
                        default:
                            return e;
                    }
                },
            });
        },
        137855: (e, t, n) => {
            n.d(t, { HP: () => a, NR: () => c });
            var s = n(499627);
            const r = "nudges",
                i = { actioned_tweets: {} },
                o = "rweb/nudges/SET_TWEET_NUDGE_ACTION_TAKEN";
            s.Z.register({
                [r]: function (e = i, t) {
                    return t && t.type === o && t.payload ? { ...e, actioned_tweets: { ...e.actioned_tweets, [t.payload]: !0 } } : e;
                },
            });
            const a = (e, t) => !!e[r].actioned_tweets[t],
                c = (e) => ({ type: o, payload: e });
        },
        694180: (e, t, n) => {
            n.d(t, { cM: () => y, dS: () => T, iY: () => f });
            var s = n(370751),
                r = n(399896),
                i = n(663550),
                o = n(499627),
                a = n(917799);
            const c = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                l = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([i.dx.IMPRESSION, i.dx.DWELL]),
                p = (0, s.Z)([i.AJ.TREND_VIEW, i.AJ.SPOTLIGHT_IMPRESSION]),
                E = (e) => ({ payload: { eventKey: e }, type: l });
            const m = (e, t) => !!e.promotedContent[t],
                T =
                    (e) =>
                    (t, n, { api: s }) => {
                        const { event: i, impression_id: o, promoted_trend_id: c } = e,
                            l = `trend-${c}-${i}`;
                        if (p.has(i) && m(n(), l)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: i, impression_id: o };
                        return (0, a._O)(t, { params: u, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && p.has(i)) return [E(l)];
                        });
                    },
                y =
                    ({ disclosureType: e, itemId: t, itemType: n, params: s }) =>
                    (i, o, { api: c }) => {
                        const { event: l, impression_id: p } = s,
                            T = `${n}-${t ?? "undefined"}-${p ?? "undefined"}-${l ?? "undefined"}`;
                        if (u.has(l) && m(o(), T)) return Promise.resolve();
                        const y = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...s, earned: y, epoch_ms: Date.now() };
                        return (0, a._O)(i, { params: f, request: c.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, t) => {
                            if (!t && u.has(l)) return [E(T)];
                        });
                    },
                f =
                    (e) =>
                    (t, n, { api: s }) =>
                        (0, a._O)(t, { params: e, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            o.Z.register({
                promotedContent: function (e = c, t) {
                    if (!t) return e;
                    if (t.type === l) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, n) => {
            n.d(t, { r: () => d });
            n(136728);
            var s = n(161821),
                r = n(390387),
                i = n(836255),
                o = n(255117),
                a = n(166506),
                c = n(919022);
            const d =
                (e, t) =>
                (n, d, { api: l, featureSwitches: u }) =>
                    n(c.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            c = (0, s.Z)(i.Z.selectAll(t)).reduce((n, s) => {
                                if (null != s)
                                    if (s.user === e) n[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const r = i.Z.select(t, s.retweeted_status);
                                        r?.user === e && (n[s.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            l = (0, r._h)(d()),
                            u = l ? [(0, o.ZP)({ useLatest: !1, userId: l }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: l }).removeTweets(c)] : [],
                            p = (0, a.k9)();
                        if (p.selectInitialFetchStatus(t) && !p.selectCanRefresh(t)) {
                            const n = (0, a.f8)(e, t, p);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        545521: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(99107),
                r = n(166852),
                i = n(841198),
                o = n(917799),
                a = n(312771),
                c = n(56519),
                d = n(877848);
            const l = (e) => [(0, c.dP)(e)];
            function u({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: n, mapEntitiesToActions: c = l, sliceKey: u, injectionOptions: { identityFunction: p } = {} }) {
                const E = [],
                    m = (e) => e[i.Yf]?.[u],
                    T = (e) => {
                        const t = m(e);
                        if (!t) return E;
                        const n = t.items || E,
                            s = t.injections;
                        return s?.length > 0 ? (0, r.Z)(s.concat(n), p) : n;
                    },
                    y = (e) => {
                        const t = m(e),
                            n = T(e),
                            s = n?.length > 0;
                        return t ? (0, a.ke)(t.fetchStatus, s) : a.ZP.NONE;
                    },
                    f =
                        (s) =>
                        (r, a, { api: d }) => {
                            const l = t(s);
                            return (0, o._O)(r, { params: l, request: n(d) })(i.t5({ contextSuffix: e, params: s, sliceKey: u }), (e) => {
                                if (e) return c(e.entities);
                            });
                        };
                return {
                    select: m,
                    selectItems: T,
                    selectFetchStatus: y,
                    fetch: f,
                    fetchIfNeeded: (e) => (t, n) => {
                        const r = n(),
                            i = m(r),
                            o = y(r);
                        return !i || (o !== a.ZP.LOADING && o !== a.ZP.LOADED) ? t(f(e)) : s.O4.resolve();
                    },
                    fetchBottom: (e) => (t, n) => {
                        const r = n(),
                            i = m(r),
                            o = ((e) => {
                                const t = m(e);
                                return t?.cursors?.next_cursor;
                            })(r);
                        return i.fetchStatus[d.Yj.BOTTOM] !== a.ZP.LOADING && o ? t(f({ ...e, cursor: o })) : s.O4.resolve();
                    },
                    injectItems: (e) => i.WC({ items: e, sliceKey: u, identityFunction: p }),
                    removeItems: (e) => i.Er({ items: e, sliceKey: u, identityFunction: p }),
                };
            }
        },
        841198: (e, t, n) => {
            n.d(t, { Be: () => _, Er: () => I, Ev: () => y, WC: () => O, Yf: () => u, t5: () => g });
            n(571372);
            var s = n(166852),
                r = n(370751),
                i = n(499627),
                o = n(917799),
                a = n(312771),
                c = n(877848);
            const d = {},
                l = [],
                u = "slices",
                p = () => ({ cursors: {}, fetchStatus: { top: a.ZP.NONE, bottom: a.ZP.NONE }, items: l, injections: l }),
                E = (0, o.dg)("rweb/slices", "FETCH");
            const m = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case E.REQUEST: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.LOADING } } : e;
                        }
                        case E.SUCCESS: {
                            const { direction: n } = t.meta,
                                r = t.payload,
                                i = e.items;
                            return !n || r instanceof Error ? e : { ...e, items: (0, s.Z)(i.concat(r?.result)), cursors: { ...r?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.LOADED } };
                        }
                        case E.FAILURE: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                T = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                y = (e) => ({ type: T, meta: { sliceKey: e } }),
                f = "rweb/slices/DELETE_SLICE",
                _ = (e) => ({ type: f, meta: { sliceKey: e } }),
                h = "rweb/slices/RESTORE_SLICE",
                w = "rweb/slices/INJECT_ITEMS_SLICE",
                O = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: w, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                S = "rweb/slices/REMOVE_ITEMS_SLICE",
                I = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: S, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                g = ({ contextSuffix: e, params: t, sliceKey: n }) => ({ actionTypes: E, context: `FETCH_${e}`, meta: { sliceKey: n, direction: t?.cursor ? c.Yj.BOTTOM : c.Yj.TOP } });
            i.Z.register({
                [u]: function (e = d, t) {
                    if (!t) return e;
                    const { sliceKey: n } = t.meta || {};
                    if (!n) return e;
                    switch (t.type) {
                        case f: {
                            const t = { ...e };
                            return delete t[n], t;
                        }
                        case h:
                            return { ...e, [n]: t.payload };
                        case T: {
                            const t = { ...e };
                            return (
                                Object.keys(t).forEach((e) => {
                                    e.includes(n) && delete t[e];
                                }),
                                t
                            );
                        }
                        case w: {
                            const r = e[n] || p(),
                                i = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                o = Array.isArray(t.payload) ? t.payload : void 0;
                            return o?.length ? { ...e, [n]: { ...r, injections: (0, s.Z)(o.concat(r.injections), i) } } : e;
                        }
                        case S: {
                            const s = e[n] || p(),
                                i = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                o = Array.isArray(t.payload) ? (0, r.Z)(i ? t.payload.map(i) : t.payload) : void 0,
                                a = (e, t) => !o?.has(i ? i(e, t, s.injections) : e);
                            return o?.size ? { ...e, [n]: { ...s, injections: s.injections.filter(a), items: s.items.filter(a) } } : e;
                        }
                        default: {
                            const s = e[n] || p(),
                                r = m(s, t);
                            return { ...e, [n]: { ...r } };
                        }
                    }
                },
            });
        },
        251441: (e, t, n) => {
            n.d(t, { Z: () => _ });
            n(571372);
            var s = n(506899),
                r = n(697926),
                i = n(265617),
                o = n(88963),
                a = n(869931),
                c = n(312771),
                d = n(502909),
                l = n(600823),
                u = n(3693),
                p = n(298219);
            const E = (0, d.ZP)({ namespace: "translationsTweets", fetchOneContext: "FETCH_TWEET_TRANSLATION", fetchOneEndpoint: (e) => (t, n) => e.withEndpoint(i.ZP).fetchTranslation(t, n).then(f), fetchOneParams: (e, t) => ({ id: e, ...t }) });
            E.fetchStreamedGrokTranslation =
                (e, t, n) =>
                async (n, s, { api: r }) => {
                    const i = { content_type: "POST", id: e, dst_lang: t.userLanguage, include_polls: t.includePolls },
                        o = { id: e, id_str: e, entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, streamedTranslationFetchStatus: c.iF.LOADING, sourceLanguage: t.lang, destinationLanguage: t.userLanguage, translationSource: "Grok", text: "", pollTranslations: [] };
                    n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                    const a = new AbortController();
                    try {
                        const t = await r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(i), signal: a.signal });
                        if (!t.ok) throw ((o.translationState = u.H.ERROR), (o.streamedTranslationFetchStatus = c.iF.FAILED), n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), new Error("Failed to translate due to invalid API response."));
                        const s = t.body?.getReader();
                        if (!s) throw ((o.translationState = u.H.ERROR), (o.streamedTranslationFetchStatus = c.iF.FAILED), n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), new Error("Failed to translate because reader is not present."));
                        const d = new TextDecoder();
                        let l = "",
                            m = "";
                        const T = async (t) => {
                            const r = t ? p.T9 : p.UG,
                                { done: i, value: a } = await (0, p.yE)("POST_TIMEOUT_BETWEEN_CHUNKS", () => s.read(), r, "Timeout between streaming chunks");
                            if (i || !a) {
                                const t = 0 === l.length;
                                return (o.translationState = t ? u.H.ERROR : u.H.SUCCESS), (o.streamedTranslationFetchStatus = t ? c.iF.FAILED : c.iF.LOADED), (o.text = l), void n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                            }
                            const f = d.decode(a);
                            if (((m += f), m.includes("\n"))) {
                                const t = m.split("\n");
                                m = t.pop();
                                for (const s of t) {
                                    const t = JSON.parse(s);
                                    if (t.error) throw new Error(t.error);
                                    if ((t.result && "POST" === t.result.content_type && (t.result.text && ((l += t.result.text), (o.text = l)), t.result.entities && (t.result.entities.urls && (o.entities.urls = [...(o.entities.urls ?? []), ...t.result.entities.urls]), t.result.entities.user_mentions && (o.entities.user_mentions = [...(o.entities.user_mentions ?? []), ...t.result.entities.user_mentions]), t.result.entities.hashtags && (o.entities.hashtags = [...(o.entities.hashtags ?? []), ...t.result.entities.hashtags]), t.result.entities.symbols && (o.entities.symbols = [...(o.entities.symbols ?? []), ...t.result.entities.symbols]))), t.result && "POLL" === t.result.content_type)) {
                                        const { index: e, text: n } = t.result,
                                            s = e - 1;
                                        null == o.pollTranslations && (o.pollTranslations = []), null == o.pollTranslations[s] ? (o.pollTranslations[s] = n) : (o.pollTranslations[s] += n);
                                    }
                                    n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                                }
                            }
                            await T();
                        };
                        await T(!0);
                    } catch (t) {
                        (o.translationState = u.H.ERROR), (o.streamedTranslationFetchStatus = c.iF.FAILED), n(E.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), a.abort();
                    }
                };
            const m = new a.W(2),
                T = new Set([]);
            E.fetchGrokTranslationAndForget =
                (e, t, n) =>
                (n, s, { api: r }) => {
                    T.has(e) ||
                        (T.add(e),
                        m.addTask(() => {
                            const n = { content_type: "POST", id: e, dst_lang: t.userLanguage, include_polls: t.includePolls };
                            return r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(n) }).then((e) => e.text());
                        }));
                };
            const y = ({ translatedTweet: e, tweetId: t }) => (0, s.Fv)(e, o.Z).entities.tweets[`${t}`],
                f = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsTweets: (0, r.Z)(t, (e) => e.id_str) } };
                },
                _ = l.Z.register(E);
        },
        3693: (e, t, n) => {
            n.d(t, { H: () => s });
            const s = Object.freeze({ SUCCESS: "Success", ERROR: "Error", TIMEOUT: "Timeout", DISABLED: "Disabled", MISSING: "Missing", NOT_TRANSLATABLE: "NotTranslatable", NOT_CACHED: "NotCached", VISIBILITY_FILTERED: "VisibilityFiltered" });
        },
        556303: (e, t, n) => {
            function s(e, t) {
                const n = e.isTrue("responsive_web_grok_tweet_translation"),
                    s = e.getNumberValue("responsive_web_grok_tweet_translation_limit", 180);
                return n && t.length <= s;
            }
            n.d(t, { F: () => s });
        },
        298219: (e, t, n) => {
            n.d(t, { T9: () => r, UG: () => s, yE: () => a });
            n(571372);
            const s = 5e3,
                r = 1e4;
            class i extends Error {
                constructor(e) {
                    super(e), (this.name = "StreamingTimeoutError"), (this.message = e);
                }
            }
            const o = {},
                a = (e, t, n, s) => {
                    o[e] && clearTimeout(o[e]);
                    const r = new Promise((t, r) => {
                        const a = setTimeout(() => {
                            r(new i(s)), delete o[e];
                        }, n);
                        o[e] = a;
                    });
                    return Promise.race([t(), r]);
                };
        },
        268617: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(836255),
                r = n(390387),
                i = n(195250);
            const o =
                (e, t) =>
                (n, o, { api: a, featureSwitches: c }) =>
                    n(s.Z.unretweet(e, t)).then(() => {
                        const t = (0, r._h)(o()),
                            a = s.Z.select(o(), e),
                            d = a?.retweeted_status,
                            l = a && (d ? s.Z.select(o(), d) : a);
                        if (t && l && (l.user !== t || l.id_str !== e)) return n([(0, i.ZP)(c, t, "default").removeTweets({ [e]: !0 }), (0, i.ZP)(c, t, "with_replies").removeTweets({ [e]: !0 })]);
                    });
        },
        977154: (e, t, n) => {
            n.d(t, { H$: () => u, ZP: () => d, m: () => l, qk: () => p });
            var s = n(403911),
                r = n(750085),
                i = n(555875),
                o = n(218951);
            const a = "bookmarks",
                c = (0, o.Z)({ timelineId: a, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: r.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                d = c,
                l = (e) => (0, o.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: r.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (e, t, { api: n, featureSwitches: r }) =>
                        n
                            .withEndpoint(s.Z)
                            .deleteAll()
                            .then(() => e(c.deleteTimeline())),
                p = i.CG.bind(null, a);
        },
        166506: (e, t, n) => {
            n.d(t, { du: () => l, f8: () => u, k9: () => d });
            var s = n(503768),
                r = n(750085),
                i = n(962741),
                o = n(466015),
                a = n(919022),
                c = n(218951);
            const d = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                l = (e) => (t, n) => {
                    const s = n();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.type === i.ZP.User ? e.content.id : "",
                                    n = a.ZP.select(s, t);
                                return n && !n.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, n) => {
                    if (!n.selectEntries(t).find((t) => t.type === i.ZP.User && t.content.id === e)) {
                        const t = (0, o.OD)(e),
                            s = (0, o.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(s);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad.d80eac3a.js.map
