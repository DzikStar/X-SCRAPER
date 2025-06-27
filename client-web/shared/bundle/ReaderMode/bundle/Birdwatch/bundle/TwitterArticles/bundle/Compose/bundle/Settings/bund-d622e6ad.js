"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"],
    {
        549116: (e, t, n) => {
            n.d(t, { NR: () => l, Yt: () => c });
            var s = n(499627),
                r = n(56519);
            const i = "liveTweetCounts",
                o = "rweb/liveTweetCounts/UPDATE",
                a = {};
            function c(e, t) {
                return e[i][t];
            }
            function l(e) {
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
            n.d(t, { cM: () => T, dS: () => f, iY: () => _ });
            var s = n(370751),
                r = n(399896),
                i = n(663550),
                o = n(499627),
                a = n(917799);
            const c = {},
                l = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([i.dx.IMPRESSION, i.dx.DWELL]),
                p = (0, s.Z)([i.AJ.TREND_VIEW, i.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: d });
            const E = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: s }) => {
                        const { event: i, impression_id: o, promoted_trend_id: c } = e,
                            d = `trend-${c}-${i}`;
                        if (p.has(i) && E(n(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: i, impression_id: o };
                        return (0, a._O)(t, { params: u, request: s.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && p.has(i)) return [m(d)];
                        });
                    },
                T =
                    ({ disclosureType: e, itemId: t, itemType: n, params: s }) =>
                    (i, o, { api: c }) => {
                        const { event: d, impression_id: p } = s,
                            f = `${n}-${t ?? "undefined"}-${p ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && E(o(), f)) return Promise.resolve();
                        const T = e && "earned" === e.toLowerCase() ? "1" : null,
                            _ = { ...s, earned: T, epoch_ms: Date.now() };
                        return (0, a._O)(i, { params: _, request: c.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: _ }, (e, t) => {
                            if (!t && u.has(d)) return [m(f)];
                        });
                    },
                _ =
                    (e) =>
                    (t, n, { api: s }) =>
                        (0, a._O)(t, { params: e, request: s.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            o.Z.register({
                promotedContent: function (e = c, t) {
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
        629196: (e, t, n) => {
            n.d(t, { r: () => l });
            n(136728);
            var s = n(161821),
                r = n(390387),
                i = n(836255),
                o = n(255117),
                a = n(166506),
                c = n(919022);
            const l =
                (e, t) =>
                (n, l, { api: d, featureSwitches: u }) =>
                    n(c.ZP.mute(e, t)).then(() => {
                        const t = l(),
                            c = (0, s.Z)(i.Z.selectAll(t)).reduce((n, s) => {
                                if (null != s)
                                    if (s.user === e) n[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const r = i.Z.select(t, s.retweeted_status);
                                        r?.user === e && (n[s.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            d = (0, r._h)(l()),
                            u = d ? [(0, o.ZP)({ useLatest: !1, userId: d }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: d }).removeTweets(c)] : [],
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
                l = n(877848);
            const d = (e) => [(0, c.dP)(e)];
            function u({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: n, mapEntitiesToActions: c = d, sliceKey: u, injectionOptions: { identityFunction: p } = {} }) {
                const m = [],
                    E = (e) => e[i.Yf]?.[u],
                    f = (e) => {
                        const t = E(e);
                        if (!t) return m;
                        const n = t.items || m,
                            s = t.injections;
                        return s?.length > 0 ? (0, r.Z)(s.concat(n), p) : n;
                    },
                    T = (e) => {
                        const t = E(e),
                            n = f(e),
                            s = n?.length > 0;
                        return t ? (0, a.ke)(t.fetchStatus, s) : a.ZP.NONE;
                    },
                    _ =
                        (s) =>
                        (r, a, { api: l }) => {
                            const d = t(s);
                            return (0, o._O)(r, { params: d, request: n(l) })(i.t5({ contextSuffix: e, params: s, sliceKey: u }), (e) => {
                                if (e) return c(e.entities);
                            });
                        };
                return {
                    select: E,
                    selectItems: f,
                    selectFetchStatus: T,
                    fetch: _,
                    fetchIfNeeded: (e) => (t, n) => {
                        const r = n(),
                            i = E(r),
                            o = T(r);
                        return !i || (o !== a.ZP.LOADING && o !== a.ZP.LOADED) ? t(_(e)) : s.O4.resolve();
                    },
                    fetchBottom: (e) => (t, n) => {
                        const r = n(),
                            i = E(r),
                            o = ((e) => {
                                const t = E(e);
                                return t?.cursors?.next_cursor;
                            })(r);
                        return i.fetchStatus[l.Yj.BOTTOM] !== a.ZP.LOADING && o ? t(_({ ...e, cursor: o })) : s.O4.resolve();
                    },
                    injectItems: (e) => i.WC({ items: e, sliceKey: u, identityFunction: p }),
                    removeItems: (e) => i.Er({ items: e, sliceKey: u, identityFunction: p }),
                };
            }
        },
        841198: (e, t, n) => {
            n.d(t, { Be: () => y, Er: () => g, Ev: () => T, WC: () => O, Yf: () => u, t5: () => I });
            n(571372);
            var s = n(166852),
                r = n(370751),
                i = n(499627),
                o = n(917799),
                a = n(312771),
                c = n(877848);
            const l = {},
                d = [],
                u = "slices",
                p = () => ({ cursors: {}, fetchStatus: { top: a.ZP.NONE, bottom: a.ZP.NONE }, items: d, injections: d }),
                m = (0, o.dg)("rweb/slices", "FETCH");
            const E = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case m.REQUEST: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.LOADING } } : e;
                        }
                        case m.SUCCESS: {
                            const { direction: n } = t.meta,
                                r = t.payload,
                                i = e.items;
                            return !n || r instanceof Error ? e : { ...e, items: (0, s.Z)(i.concat(r?.result)), cursors: { ...r?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.LOADED } };
                        }
                        case m.FAILURE: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [n]: a.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                f = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                T = (e) => ({ type: f, meta: { sliceKey: e } }),
                _ = "rweb/slices/DELETE_SLICE",
                y = (e) => ({ type: _, meta: { sliceKey: e } }),
                h = "rweb/slices/RESTORE_SLICE",
                w = "rweb/slices/INJECT_ITEMS_SLICE",
                O = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: w, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                S = "rweb/slices/REMOVE_ITEMS_SLICE",
                g = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: S, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                I = ({ contextSuffix: e, params: t, sliceKey: n }) => ({ actionTypes: m, context: `FETCH_${e}`, meta: { sliceKey: n, direction: t?.cursor ? c.Yj.BOTTOM : c.Yj.TOP } });
            i.Z.register({
                [u]: function (e = l, t) {
                    if (!t) return e;
                    const { sliceKey: n } = t.meta || {};
                    if (!n) return e;
                    switch (t.type) {
                        case _: {
                            const t = { ...e };
                            return delete t[n], t;
                        }
                        case h:
                            return { ...e, [n]: t.payload };
                        case f: {
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
                                r = E(s, t);
                            return { ...e, [n]: { ...r } };
                        }
                    }
                },
            });
        },
        251441: (e, t, n) => {
            n.d(t, { Z: () => w });
            n(571372);
            var s = n(506899),
                r = n(697926),
                i = n(265617),
                o = n(88963),
                a = n(163889),
                c = n(869931),
                l = n(312771),
                d = n(502909),
                u = n(600823),
                p = n(3693),
                m = n(926597),
                E = n(298219);
            const f = (0, d.ZP)({ namespace: "translationsTweets", fetchOneContext: "FETCH_TWEET_TRANSLATION", fetchOneEndpoint: (e) => (t, n) => e.withEndpoint(i.ZP).fetchTranslation(t, n).then(h), fetchOneParams: (e, t) => ({ id: e, ...t }) });
            f.fetchStreamedGrokTranslation =
                (e, t, n) =>
                async (n, s, { api: r }) => {
                    const i = { content_type: "POST", id: e, dst_lang: t.userLanguage, include_polls: t.includePolls },
                        o = { id: e, id_str: e, entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, streamedTranslationFetchStatus: l.iF.LOADING, sourceLanguage: t.lang, destinationLanguage: t.userLanguage, translationSource: "Grok", text: "", pollTranslations: [] };
                    n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                    const c = new AbortController();
                    try {
                        const t = await r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(i), signal: c.signal });
                        if (!t.ok) throw ((o.translationState = p.H.ERROR), (o.streamedTranslationFetchStatus = l.iF.FAILED), n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), new Error(`invalid response ${t.status}`));
                        const s = t.body?.getReader();
                        if (!s) throw ((o.translationState = p.H.ERROR), (o.streamedTranslationFetchStatus = l.iF.FAILED), n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), new Error("reader not present"));
                        const d = new TextDecoder();
                        let u = "",
                            T = "";
                        const _ = async (t) => {
                            const r = t ? E.T9 : E.UG,
                                { done: i, value: c } = await (0, E.yE)("POST_TIMEOUT_BETWEEN_CHUNKS", () => s.read(), r, t ? "timeout to first chunk" : "timeout between chunks");
                            if (i || !c) {
                                if (0 === u.length) throw new Error("empty string when done");
                                return (o.translationState = p.H.SUCCESS), (o.streamedTranslationFetchStatus = l.iF.LOADED), (o.text = u), void n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                            }
                            const h = d.decode(c);
                            if (((T += h), T.includes("\n"))) {
                                const t = T.split("\n");
                                T = t.pop();
                                for (const s of t) {
                                    const t = JSON.parse(s);
                                    if (t.error) throw new Error(JSON.stringify(t.error));
                                    if (t.result && "POST" === t.result.content_type) {
                                        t.result.text && ((u += t.result.text), (o.text = u));
                                        const n = t.result.entities;
                                        if (n) {
                                            if (n.urls) {
                                                const { errors: t, result: s } = (0, m.b)(n.urls);
                                                t.length > 0 && (0, a.ZP)(`invalid url entities in translating tweet:${e} - ${t.join(",")}`), (o.entities.urls = [...(o.entities.urls ?? []), ...s]);
                                            }
                                            if (n.user_mentions) {
                                                const { errors: t, result: s } = (0, m.l)(n.user_mentions);
                                                t.length > 0 && (0, a.ZP)(`invalid user menetion entities in translating tweet:${e} - ${t.join(",")}`), (o.entities.user_mentions = [...(o.entities.user_mentions ?? []), ...s]);
                                            }
                                            n.hashtags && (o.entities.hashtags = [...(o.entities.hashtags ?? []), ...n.hashtags]), n.symbols && (o.entities.symbols = [...(o.entities.symbols ?? []), ...n.symbols]);
                                        }
                                    }
                                    if (t.result && "POLL" === t.result.content_type) {
                                        const { index: e, text: n } = t.result;
                                        if (null != e && e > 0 && null != n) {
                                            const t = e - 1;
                                            null == o.pollTranslations && (o.pollTranslations = []), null == o.pollTranslations[t] ? (o.pollTranslations[t] = n) : (o.pollTranslations[t] += n);
                                        }
                                    }
                                    n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o })));
                                }
                            }
                            await _();
                        };
                        await _(!0);
                    } catch (s) {
                        (o.translationState = p.H.ERROR), (o.streamedTranslationFetchStatus = l.iF.FAILED), n(f.updateOrAddOne(e, y({ tweetId: e, translatedTweet: o }))), c.abort(), (0, a.ZP)(`Failed to translate tweet:${e} to ${t.userLanguage} - ${String(s)}`);
                    }
                };
            const T = new c.W(2),
                _ = new Set([]);
            f.fetchGrokTranslationAndForget =
                (e, t, n) =>
                (n, s, { api: r }) => {
                    _.has(e) ||
                        (_.add(e),
                        T.addTask(() => {
                            const n = { content_type: "POST", id: e, dst_lang: t.userLanguage, include_polls: t.includePolls };
                            return r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(n) }).then((e) => e.text());
                        }));
                };
            const y = ({ translatedTweet: e, tweetId: t }) => (0, s.Fv)(e, o.Z).entities.tweets[`${t}`],
                h = (e) => {
                    const t = Array.isArray(e) ? e : [e];
                    return { entities: { translationsTweets: (0, r.Z)(t, (e) => e.id_str) } };
                },
                w = u.Z.register(f);
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
        926597: (e, t, n) => {
            n.d(t, { b: () => s, l: () => r });
            n(136728);
            function s(e) {
                const t = [];
                return { result: e.map((e) => ((null != e.display_url && null != e.expanded_url) || t.push(`invalid url entity: ${JSON.stringify(e)}`), { ...e, display_url: e.display_url ?? e.url, expanded_url: e.expanded_url ?? e.url })), errors: t };
            }
            function r(e) {
                const t = [],
                    n = e
                        .map((e) => {
                            const { id_str: n, indices: s, name: r, screen_name: i } = e;
                            if (null != n && null != r && null != i) return { id_str: n, name: r, screen_name: i, indices: s };
                            t.push(`invalid user mention:${JSON.stringify(e)}`);
                        })
                        .filter(Boolean);
                return { errors: t, result: n };
            }
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
                            l = a?.retweeted_status,
                            d = a && (l ? s.Z.select(o(), l) : a);
                        if (t && d && (d.user !== t || d.id_str !== e)) return n([(0, i.ZP)(c, t, "default").removeTweets({ [e]: !0 }), (0, i.ZP)(c, t, "with_replies").removeTweets({ [e]: !0 })]);
                    });
        },
        977154: (e, t, n) => {
            n.d(t, { H$: () => u, ZP: () => l, m: () => d, qk: () => p });
            var s = n(403911),
                r = n(750085),
                i = n(555875),
                o = n(218951);
            const a = "bookmarks",
                c = (0, o.Z)({ timelineId: a, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: r.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                l = c,
                d = (e) => (0, o.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: r.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
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
            n.d(t, { du: () => d, f8: () => u, k9: () => l });
            var s = n(503768),
                r = n(750085),
                i = n(962741),
                o = n(466015),
                a = n(919022),
                c = n(218951);
            const l = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, n) => {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad.ab1adb1a.js.map
