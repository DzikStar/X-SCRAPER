"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"],
    {
        549116: (t, e, n) => {
            n.d(e, { NR: () => l, Yt: () => c });
            var s = n(499627),
                r = n(56519);
            const i = "liveTweetCounts",
                o = "rweb/liveTweetCounts/UPDATE",
                a = {};
            function c(t, e) {
                return t[i][e];
            }
            function l(t) {
                return (e, n) => e({ payload: t, type: o });
            }
            s.Z.register({
                [i]: function (t = a, e) {
                    if (!e) return t;
                    switch (e.type) {
                        case r.ud: {
                            const n = e.payload?.tweets;
                            if (n) {
                                const e = { ...t };
                                return (
                                    Object.keys(n).forEach((t) => {
                                        e[t] && delete e[t];
                                    }),
                                    e
                                );
                            }
                            return t;
                        }
                        case o:
                            return { ...t, [e.payload.tweetId]: { ...t[e.payload.tweetId], ...e.payload.liveCounts } };
                        default:
                            return t;
                    }
                },
            });
        },
        137855: (t, e, n) => {
            n.d(e, { HP: () => a, NR: () => c });
            var s = n(499627);
            const r = "nudges",
                i = { actioned_tweets: {} },
                o = "rweb/nudges/SET_TWEET_NUDGE_ACTION_TAKEN";
            s.Z.register({
                [r]: function (t = i, e) {
                    return e && e.type === o && e.payload ? { ...t, actioned_tweets: { ...t.actioned_tweets, [e.payload]: !0 } } : t;
                },
            });
            const a = (t, e) => !!t[r].actioned_tweets[e],
                c = (t) => ({ type: o, payload: t });
        },
        694180: (t, e, n) => {
            n.d(e, { cM: () => f, dS: () => E, iY: () => y });
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
                m = (t) => ({ payload: { eventKey: t }, type: d });
            const _ = (t, e) => !!t.promotedContent[e],
                E =
                    (t) =>
                    (e, n, { api: s }) => {
                        const { event: i, impression_id: o, promoted_trend_id: c } = t,
                            d = `trend-${c}-${i}`;
                        if (p.has(i) && _(n(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: i, impression_id: o };
                        return (0, a._O)(e, { params: u, request: s.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (t, e) => {
                            if (!e && p.has(i)) return [m(d)];
                        });
                    },
                f =
                    ({ disclosureType: t, itemId: e, itemType: n, params: s }) =>
                    (i, o, { api: c }) => {
                        const { event: d, impression_id: p } = s,
                            E = `${n}-${e ?? "undefined"}-${p ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && _(o(), E)) return Promise.resolve();
                        const f = t && "earned" === t.toLowerCase() ? "1" : null,
                            y = { ...s, earned: f, epoch_ms: Date.now() };
                        return (0, a._O)(i, { params: y, request: c.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (t, e) => {
                            if (!e && u.has(d)) return [m(E)];
                        });
                    },
                y =
                    (t) =>
                    (e, n, { api: s }) =>
                        (0, a._O)(e, { params: t, request: s.withEndpoint(r.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: t });
            o.Z.register({
                promotedContent: function (t = c, e) {
                    if (!e) return t;
                    if (e.type === d) {
                        if (!e.payload) return t;
                        const { eventKey: n } = e.payload;
                        return { ...t, [n]: !0 };
                    }
                    return t;
                },
            });
        },
        629196: (t, e, n) => {
            n.d(e, { r: () => l });
            n(136728);
            var s = n(161821),
                r = n(390387),
                i = n(836255),
                o = n(255117),
                a = n(166506),
                c = n(919022);
            const l =
                (t, e) =>
                (n, l, { api: d, featureSwitches: u }) =>
                    n(c.ZP.mute(t, e)).then(() => {
                        const e = l(),
                            c = (0, s.Z)(i.Z.selectAll(e)).reduce((n, s) => {
                                if (null != s)
                                    if (s.user === t) n[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const r = i.Z.select(e, s.retweeted_status);
                                        r?.user === t && (n[s.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            d = (0, r._h)(l()),
                            u = d ? [(0, o.ZP)({ useLatest: !1, userId: d }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: d }).removeTweets(c)] : [],
                            p = (0, a.k9)();
                        if (p.selectInitialFetchStatus(e) && !p.selectCanRefresh(e)) {
                            const n = (0, a.f8)(t, e, p);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        545521: (t, e, n) => {
            n.d(e, { Z: () => u });
            var s = n(99107),
                r = n(166852),
                i = n(841198),
                o = n(917799),
                a = n(312771),
                c = n(56519),
                l = n(877848);
            const d = (t) => [(0, c.dP)(t)];
            function u({ contextSuffix: t, getEndpointParams: e, getFetchApiEndpoint: n, mapEntitiesToActions: c = d, sliceKey: u, injectionOptions: { identityFunction: p } = {} }) {
                const m = [],
                    _ = (t) => t[i.Yf]?.[u],
                    E = (t) => {
                        const e = _(t);
                        if (!e) return m;
                        const n = e.items || m,
                            s = e.injections;
                        return s?.length > 0 ? (0, r.Z)(s.concat(n), p) : n;
                    },
                    f = (t) => {
                        const e = _(t),
                            n = E(t),
                            s = n?.length > 0;
                        return e ? (0, a.ke)(e.fetchStatus, s) : a.ZP.NONE;
                    },
                    y =
                        (s) =>
                        (r, a, { api: l }) => {
                            const d = e(s);
                            return (0, o._O)(r, { params: d, request: n(l) })(i.t5({ contextSuffix: t, params: s, sliceKey: u }), (t) => {
                                if (t) return c(t.entities);
                            });
                        };
                return {
                    select: _,
                    selectItems: E,
                    selectFetchStatus: f,
                    fetch: y,
                    fetchIfNeeded: (t) => (e, n) => {
                        const r = n(),
                            i = _(r),
                            o = f(r);
                        return !i || (o !== a.ZP.LOADING && o !== a.ZP.LOADED) ? e(y(t)) : s.O4.resolve();
                    },
                    fetchBottom: (t) => (e, n) => {
                        const r = n(),
                            i = _(r),
                            o = ((t) => {
                                const e = _(t);
                                return e?.cursors?.next_cursor;
                            })(r);
                        return i.fetchStatus[l.Yj.BOTTOM] !== a.ZP.LOADING && o ? e(y({ ...t, cursor: o })) : s.O4.resolve();
                    },
                    injectItems: (t) => i.WC({ items: t, sliceKey: u, identityFunction: p }),
                    removeItems: (t) => i.Er({ items: t, sliceKey: u, identityFunction: p }),
                };
            }
        },
        841198: (t, e, n) => {
            n.d(e, { Be: () => T, Er: () => g, Ev: () => f, WC: () => S, Yf: () => u, t5: () => I });
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
            const _ = (t, e) => {
                    if (!e) return t;
                    switch (e.type) {
                        case m.REQUEST: {
                            const { direction: n } = e.meta;
                            return n ? { ...t, fetchStatus: { ...t.fetchStatus, [n]: a.ZP.LOADING } } : t;
                        }
                        case m.SUCCESS: {
                            const { direction: n } = e.meta,
                                r = e.payload,
                                i = t.items;
                            return !n || r instanceof Error ? t : { ...t, items: (0, s.Z)(i.concat(r?.result)), cursors: { ...r?.slice_info }, error: null, fetchStatus: { ...t.fetchStatus, [n]: a.ZP.LOADED } };
                        }
                        case m.FAILURE: {
                            const { direction: n } = e.meta;
                            return n ? { ...t, error: e.payload, fetchStatus: { ...t.fetchStatus, [n]: a.ZP.FAILED } } : t;
                        }
                        default:
                            return t;
                    }
                },
                E = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                f = (t) => ({ type: E, meta: { sliceKey: t } }),
                y = "rweb/slices/DELETE_SLICE",
                T = (t) => ({ type: y, meta: { sliceKey: t } }),
                h = "rweb/slices/RESTORE_SLICE",
                w = "rweb/slices/INJECT_ITEMS_SLICE",
                S = ({ identityFunction: t, items: e, sliceKey: n }) => ({ type: w, meta: { sliceKey: n, identityFunction: t }, payload: e }),
                O = "rweb/slices/REMOVE_ITEMS_SLICE",
                g = ({ identityFunction: t, items: e, sliceKey: n }) => ({ type: O, meta: { sliceKey: n, identityFunction: t }, payload: e }),
                I = ({ contextSuffix: t, params: e, sliceKey: n }) => ({ actionTypes: m, context: `FETCH_${t}`, meta: { sliceKey: n, direction: e?.cursor ? c.Yj.BOTTOM : c.Yj.TOP } });
            i.Z.register({
                [u]: function (t = l, e) {
                    if (!e) return t;
                    const { sliceKey: n } = e.meta || {};
                    if (!n) return t;
                    switch (e.type) {
                        case y: {
                            const e = { ...t };
                            return delete e[n], e;
                        }
                        case h:
                            return { ...t, [n]: e.payload };
                        case E: {
                            const e = { ...t };
                            return (
                                Object.keys(e).forEach((t) => {
                                    t.includes(n) && delete e[t];
                                }),
                                e
                            );
                        }
                        case w: {
                            const r = t[n] || p(),
                                i = e.meta.identityFunction ? e.meta.identityFunction : void 0,
                                o = Array.isArray(e.payload) ? e.payload : void 0;
                            return o?.length ? { ...t, [n]: { ...r, injections: (0, s.Z)(o.concat(r.injections), i) } } : t;
                        }
                        case O: {
                            const s = t[n] || p(),
                                i = e.meta.identityFunction ? e.meta.identityFunction : void 0,
                                o = Array.isArray(e.payload) ? (0, r.Z)(i ? e.payload.map(i) : e.payload) : void 0,
                                a = (t, e) => !o?.has(i ? i(t, e, s.injections) : t);
                            return o?.size ? { ...t, [n]: { ...s, injections: s.injections.filter(a), items: s.items.filter(a) } } : t;
                        }
                        default: {
                            const s = t[n] || p(),
                                r = _(s, e);
                            return { ...t, [n]: { ...r } };
                        }
                    }
                },
            });
        },
        251441: (t, e, n) => {
            n.d(e, { Z: () => w });
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
                _ = n(298219);
            const E = (0, d.ZP)({ namespace: "translationsTweets", fetchOneContext: "FETCH_TWEET_TRANSLATION", fetchOneEndpoint: (t) => (e, n) => t.withEndpoint(i.ZP).fetchTranslation(e, n).then(h), fetchOneParams: (t, e) => ({ id: t, ...e }) });
            E.fetchStreamedGrokTranslation =
                (t, e, n) =>
                async (n, s, { api: r }) => {
                    const i = Date.now(),
                        o = { content_type: "POST", id: t, dst_lang: e.userLanguage, include_polls: e.includePolls },
                        c = { id: t, id_str: t, entities: { symbols: [], hashtags: [], user_mentions: [], urls: [], media: [], timestamps: [] }, streamedTranslationFetchStatus: l.iF.LOADING, sourceLanguage: e.lang, destinationLanguage: e.userLanguage, translationSource: "Grok", text: "", pollTranslations: [] };
                    n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c })));
                    const d = new AbortController();
                    try {
                        const s = await r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(o), signal: d.signal });
                        if (!s.ok) throw ((c.translationState = p.H.ERROR), (c.streamedTranslationFetchStatus = l.iF.FAILED), n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c }))), new Error(`invalid response ${s.status}`));
                        const u = s.body?.getReader();
                        if (!u) throw ((c.translationState = p.H.ERROR), (c.streamedTranslationFetchStatus = l.iF.FAILED), n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c }))), new Error("reader not present"));
                        const f = new TextDecoder();
                        let y = "",
                            h = "";
                        const w = async (s) => {
                            const { done: r, value: o } = await (0, _.yE)("POST_TIMEOUT_BETWEEN_CHUNKS", () => u.read(), s ? "FIRST_CHUNK" : "BETWEEN_CHUNKS");
                            if (r || !o) {
                                if ((e.analytics.scribe({ component: "grok_button_translation", element: "time_to_last_token_post", action: "complete", data: { duration_ms: Date.now() - i } }), 0 === y.length)) throw new Error("empty string when done");
                                return (c.translationState = p.H.SUCCESS), (c.streamedTranslationFetchStatus = l.iF.LOADED), (c.text = y), void n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c })));
                            }
                            s && e.analytics.scribe({ component: "grok_button_translation", element: "time_to_first_token_post", action: "complete", data: { duration_ms: Date.now() - i } });
                            const d = f.decode(o);
                            if (((h += d), h.includes("\n"))) {
                                const e = h.split("\n");
                                h = e.pop();
                                for (const s of e) {
                                    const e = JSON.parse(s);
                                    if (e.error) throw new Error(JSON.stringify(e.error));
                                    if (e.result && "POST" === e.result.content_type) {
                                        e.result.text && ((y += e.result.text), (c.text = y));
                                        const n = e.result.entities;
                                        if (n) {
                                            if (n.urls) {
                                                const { errors: e, result: s } = (0, m.b)(n.urls);
                                                e.length > 0 && (0, a.ZP)(`invalid url entities in translating tweet:${t} - ${e.join(",")}`), (c.entities.urls = [...(c.entities.urls ?? []), ...s]);
                                            }
                                            if (n.user_mentions) {
                                                const { errors: e, result: s } = (0, m.l)(n.user_mentions);
                                                e.length > 0 && (0, a.ZP)(`invalid user mention entities in translating tweet:${t} - ${e.join(",")}`), (c.entities.user_mentions = [...(c.entities.user_mentions ?? []), ...s]);
                                            }
                                            n.hashtags && (c.entities.hashtags = [...(c.entities.hashtags ?? []), ...n.hashtags]), n.symbols && (c.entities.symbols = [...(c.entities.symbols ?? []), ...n.symbols]);
                                        }
                                    }
                                    if (e.result && "POLL" === e.result.content_type) {
                                        const { index: t, text: n } = e.result;
                                        if (null != t && t > 0 && null != n) {
                                            const e = t - 1;
                                            null == c.pollTranslations && (c.pollTranslations = []), null == c.pollTranslations[e] ? (c.pollTranslations[e] = n) : (c.pollTranslations[e] += n);
                                        }
                                    }
                                    n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c })));
                                }
                            }
                            await w();
                        };
                        await w(!0);
                    } catch (s) {
                        (c.translationState = p.H.ERROR), (c.streamedTranslationFetchStatus = l.iF.FAILED), n(E.updateOrAddOne(t, T({ tweetId: t, translatedTweet: c }))), d.abort(), (0, a.ZP)(`Failed to translate tweet:${t} to ${e.userLanguage} - ${String(s)}`), s instanceof _.mn ? e.analytics.scribe({ component: "grok_button_translation", element: "FIRST_CHUNK" === s.type ? "error_timeout_first_token_post" : "error_timeout_within_tokens_post", action: "error" }) : e.analytics.scribe({ component: "grok_button_translation", element: "error_post", action: "error" });
                    }
                };
            const f = new c.W(2),
                y = new Set([]);
            E.fetchGrokTranslationAndForget =
                (t, e, n) =>
                (n, s, { api: r }) => {
                    y.has(t) ||
                        (y.add(t),
                        f.addTask(() => {
                            const n = { content_type: "POST", id: t, dst_lang: e.userLanguage, include_polls: e.includePolls };
                            return r.fetchClient.dispatch("/2/grok/translation.json", { method: "POST", credentials: "include", body: JSON.stringify(n) }).then((t) => t.text());
                        }));
                };
            const T = ({ translatedTweet: t, tweetId: e }) => (0, s.Fv)(t, o.Z).entities.tweets[`${e}`],
                h = (t) => {
                    const e = Array.isArray(t) ? t : [t];
                    return { entities: { translationsTweets: (0, r.Z)(e, (t) => t.id_str) } };
                },
                w = u.Z.register(E);
        },
        3693: (t, e, n) => {
            n.d(e, { H: () => s });
            const s = Object.freeze({ SUCCESS: "Success", ERROR: "Error", TIMEOUT: "Timeout", DISABLED: "Disabled", MISSING: "Missing", NOT_TRANSLATABLE: "NotTranslatable", NOT_CACHED: "NotCached", VISIBILITY_FILTERED: "VisibilityFiltered" });
        },
        556303: (t, e, n) => {
            function s(t, e) {
                const n = t.isTrue("responsive_web_grok_tweet_translation"),
                    s = t.getNumberValue("responsive_web_grok_tweet_translation_limit", 180);
                return n && e.length <= s;
            }
            n.d(e, { F: () => s });
        },
        926597: (t, e, n) => {
            n.d(e, { b: () => s, l: () => r });
            n(136728);
            function s(t) {
                const e = [];
                return { result: t.map((t) => ((null != t.display_url && null != t.expanded_url) || e.push(`invalid url entity: ${JSON.stringify(t)}`), { ...t, display_url: t.display_url ?? t.url, expanded_url: t.expanded_url ?? t.url })), errors: e };
            }
            function r(t) {
                const e = [],
                    n = t
                        .map((t) => {
                            const { id_str: n, indices: s, name: r, screen_name: i } = t;
                            if (null != n && null != r && null != i) return { id_str: n, name: r, screen_name: i, indices: s };
                            e.push(`invalid user mention:${JSON.stringify(t)}`);
                        })
                        .filter(Boolean);
                return { errors: e, result: n };
            }
        },
        298219: (t, e, n) => {
            n.d(e, { mn: () => s, yE: () => i });
            n(571372);
            class s extends Error {
                constructor(t) {
                    const e = "FIRST_CHUNK" === t ? "timeout to first chunk" : "timeout between chunks";
                    super(e), (this.name = "StreamingTimeoutError"), (this.message = e), (this.type = t);
                }
            }
            const r = {},
                i = (t, e, n) => {
                    r[t] && clearTimeout(r[t]);
                    const i = "FIRST_CHUNK" === n ? 1e4 : 5e3,
                        o = new Promise((e, o) => {
                            const a = setTimeout(() => {
                                o(new s(n)), delete r[t];
                            }, i);
                            r[t] = a;
                        });
                    return Promise.race([e(), o]);
                };
        },
        268617: (t, e, n) => {
            n.d(e, { Z: () => o });
            var s = n(836255),
                r = n(390387),
                i = n(195250);
            const o =
                (t, e) =>
                (n, o, { api: a, featureSwitches: c }) =>
                    n(s.Z.unretweet(t, e)).then(() => {
                        const e = (0, r._h)(o()),
                            a = s.Z.select(o(), t),
                            l = a?.retweeted_status,
                            d = a && (l ? s.Z.select(o(), l) : a);
                        if (e && d && (d.user !== e || d.id_str !== t)) return n([(0, i.ZP)(c, e, "default").removeTweets({ [t]: !0 }), (0, i.ZP)(c, e, "with_replies").removeTweets({ [t]: !0 })]);
                    });
        },
        977154: (t, e, n) => {
            n.d(e, { H$: () => u, ZP: () => l, m: () => d, qk: () => p });
            var s = n(403911),
                r = n(750085),
                i = n(555875),
                o = n(218951);
            const a = "bookmarks",
                c = (0, o.Z)({ timelineId: a, network: { getEndpoint: (t) => t.withEndpoint(s.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: t, cursor: e }) => ({ count: t, cursor: "string" == typeof e ? e : void 0 }) }, formatResponse: r.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                l = c,
                d = (t) => (0, o.Z)({ timelineId: `bookmarkFolder-${t}`, network: { getEndpoint: (t) => t.withEndpoint(s.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: e }) => ({ cursor: "string" == typeof e ? e : void 0, bookmark_collection_id: t }) }, formatResponse: r.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (t, e, { api: n, featureSwitches: r }) =>
                        n
                            .withEndpoint(s.Z)
                            .deleteAll()
                            .then(() => t(c.deleteTimeline())),
                p = i.CG.bind(null, a);
        },
        166506: (t, e, n) => {
            n.d(e, { du: () => d, f8: () => u, k9: () => l });
            var s = n(503768),
                r = n(750085),
                i = n(962741),
                o = n(466015),
                a = n(919022),
                c = n(218951);
            const l = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (t) => t.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: t, cursor: e }) => ({ count: t, cursor: "string" == typeof e ? e : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (t) => (e, n) => {
                    const s = n();
                    e(
                        t
                            .selectEntries(s)
                            .filter((t) => {
                                const e = t.type === i.ZP.User ? t.content.id : "",
                                    n = a.ZP.select(s, e);
                                return n && !n.muting;
                            })
                            .map((e) => t.removeEntry(e.entryId)),
                    );
                },
                u = (t, e, n) => {
                    if (!n.selectEntries(e).find((e) => e.type === i.ZP.User && e.content.id === t)) {
                        const e = (0, o.OD)(t),
                            s = (0, o.$0)({ entryId: e, id: t, sortIndex: Date.now().toString() });
                        return n.injectEntry(s);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad.592c36ea.js.map
