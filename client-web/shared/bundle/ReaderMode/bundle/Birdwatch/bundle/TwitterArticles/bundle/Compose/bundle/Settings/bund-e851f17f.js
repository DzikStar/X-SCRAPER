"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"],
    {
        192464: (e, t, s) => {
            s.d(t, { Z: () => i });
            s(571372);
            var r = s(2138),
                o = s(666536),
                n = s(624479),
                a = s(163889);
            const i = new (class {
                constructor() {
                    (this.usersInApp = {}),
                        (this._throttledInitialFetch = (0, r.Z)(() => {
                            this.store.dispatch(n.ZP.fetchManyIfNeeded(Object.keys(this.usersInApp)));
                        }, 1500));
                }
                init(e) {
                    (this.store = e), (this.usersInApp = {});
                }
                registerUserInApp(e) {
                    Object.keys(this.usersInApp).length > 50 && ((this.usersInApp = {}), (0, a.ZP)(new Error("Registered users in app has exceeded 50"), { level: "warning" })), this.usersInApp[e] ? (this.usersInApp[e] = this.usersInApp[e] + 1) : ((this.usersInApp[e] = 1), (0, o.Z)(this._throttledInitialFetch(), 100));
                }
                deregisterUserInApp(e) {
                    this.usersInApp[e] && this.usersInApp[e] > 1 ? (this.usersInApp[e] = this.usersInApp[e] - 1) : delete this.usersInApp[e];
                }
            })();
        },
        869931: (e, t, s) => {
            s.d(t, { W: () => o });
            s(136728);
            var r = s(516951);
            class o {
                constructor(e = 1) {
                    (this.tasks = []), (this.running = 0), (this.maxConcurrent = e);
                }
                processQueue() {
                    for (; this.running < this.maxConcurrent && this.tasks.length; ) {
                        const e = this.tasks.shift();
                        this.running++,
                            e()
                                .catch(r.Z)
                                .finally(() => {
                                    this.running--, this.processQueue();
                                });
                    }
                }
                addTask(e) {
                    this.tasks.push(e), this.processQueue();
                }
            }
        },
        4463: (e, t, s) => {
            s.d(t, { Z: () => o });
            s(571372);
            function r(e) {
                (this.name = "AssertionError"), (this.message = e), (this.stack = new Error().stack);
            }
            (r.prototype = Object.create(Error.prototype)), (r.prototype.constructor = r);
            const o = (e, t) => {
                if (!e) throw new r(t ? `Assertion failed: ${t}` : "Assertion failed (also, no message was provided)");
            };
        },
        988566: (e, t, s) => {
            s.d(t, { D$: () => i, Du: () => l, GK: () => d, Iv: () => E, pz: () => p, rl: () => u });
            var r = s(202784),
                o = s(688715),
                n = s(946409),
                a = s(788993);
            const i = (e, t, s) => (e.retweeted_status ? c(e, t) : e.community_id_str && s ? d(e, s) : void 0),
                c = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                d = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, o.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                l = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: s }) => {
                    if (t?.topicContext) {
                        const r = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${r.topicId}`, urlType: "DeepLink" }, text: s?.name, topicContext: r };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: s, text: r } = e;
                    return { link: s ? (0, n.s9)(s) : void 0, text: r, contextType: t };
                },
                E = { contextType: a.Z.Pin, text: "" },
                p = r.createContext(void 0);
        },
        618566: (e, t, s) => {
            s.d(t, { P: () => o, a: () => n });
            var r = s(421575);
            const o = (e) => ({ topicId: e.topicId, functionalityType: e.functionalityType }),
                n = (e) => (e === r.q.Star ? r.q.Star : e === r.q.Favorite ? r.q.Favorite : e === r.q.Interested ? r.q.Interested : r.q.Default);
        },
        214647: (e, t, s) => {
            s.d(t, { Mt: () => R, V4: () => m, aT: () => p, pG: () => g, rT: () => S });
            s(202784);
            var r = s(950152),
                o = s(111677),
                n = s.n(o),
                a = s(500040),
                i = s(161821),
                c = s(395067);
            const d = n().fcad707a,
                l = n().f1824804,
                u = "/i/report/appeal_tweet_warning",
                E = a.default;
            function p(e) {
                const t = e.tweet.retweeted_status || e.tweet;
                return !(t.user.id_str !== e.viewerUserId || (!t.self_thread && t.in_reply_to_status_id_str));
            }
            const _ = (e) => !!e.extended_entities?.media?.flatMap((e) => (e.sensitive_media_warning ? (0, i.Z)(e.sensitive_media_warning) : [])).some(Boolean);
            function m(e) {
                const { featureSwitches: t, isNsfwUser: s, tweet: r, viewerUserId: o } = e,
                    n = r.retweeted_status || r;
                return !(o !== n.user?.id_str || r.tombstoneInfo || !n.possibly_sensitive || s || _(n) || !t.isTrue("enable_label_appealing_sensitive_content_enabled"));
            }
            function g(e) {
                const { displaySensitiveMedia: t, ...s } = e;
                return !!t && m(s);
            }
            function S(e) {
                const t = e.tweet.retweeted_status || e.tweet;
                return e.viewerUserId === t.user.id_str && !e.tweet.tombstoneInfo && e.forwardPivotDisplayType === r.x.SoftIntervention && e.featureSwitches.isTrue("enable_label_appealing_misinfo_enabled");
            }
            function R(e, t, s) {
                const r = e.retweeted_status || e,
                    o = c.C2.AppealTweetWarning;
                let n;
                if (s && (0, c.Yw)(s, o)) {
                    const e = (r?.extended_entities?.media?.length || 0) > 0,
                        s = !!r.promoted_content,
                        a = (0, c.j_)({ clientReferer: window.location.pathname, isMedia: e, isPromoted: void 0 !== s, reportType: o, reportedTweet: r, reportedUser: r.user.id_str, scribeNamespace: t });
                    n = { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(a) } } };
                } else n = { pathname: `${u}/${r.id_str}`, state: { scribeNamespace: t } };
                return { text: d, action: { label: l, link: n }, Icon: E, withThumbnail: !0 };
            }
        },
        666932: (e, t, s) => {
            s.d(t, { Z: () => r });
            const r = Object.freeze({ Author: "author", LikedByAuthor: "liked-by-author" });
        },
        988823: (e, t, s) => {
            s.d(t, { M: () => a });
            var r = s(807896),
                o = s(202784),
                n = s(190286);
            const a = (e) => (t) => {
                const [s, a] = o.useState(null),
                    i = (e) =>
                        new Promise((t, s) => {
                            a({ resolve: t, reject: s, confirmationSheetProps: e });
                        });
                if (s) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = s;
                    return o.createElement(
                        n.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return o.createElement(e, (0, r.Z)({}, t, { confirm: i }));
            };
        },
        794057: (e, t, s) => {
            s.d(t, { C0: () => a, DC: () => r, _e: () => n, iN: () => d, kd: () => i, pc: () => o });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                n = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                i = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                d = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        575652: (e, t, s) => {
            s.d(t, { Ji: () => I, L4: () => R, T2: () => T, cb: () => S, ex: () => h });
            var r = s(449633),
                o = s.n(r),
                n = s(370751),
                a = s(337511),
                i = s(499627),
                c = s(390387);
            const d = "articles",
                l = "rweb.articlesVisited",
                u = "rweb.articleDomains",
                E = "rweb/articles/ADD_DOMAINS",
                p = "rweb/articles/ADD_VISITED_ARTICLES",
                _ = (e) => ({ payload: e, type: E }),
                m = (e) => ({ payload: e, type: p }),
                g = Object.freeze({ domains: void 0, articles: new Set() });
            const S = (e) => e[d].domains,
                R = (e, t) => {
                    const s = S(e);
                    return h(s, t);
                },
                h = (e, t) => !!e && !!t && e.includes((t || "").replace("www.", "")),
                T = (e, t, s) => {
                    const r = !!s && R(e, s);
                    if (t && r) {
                        const s = ((e) => e[d].articles)(e) || new Set(),
                            r = o()("", t);
                        return s.has(r);
                    }
                    return !1;
                },
                I =
                    (e) =>
                    (t, s, { userPersistence: r }) => {
                        const n = o()("", e);
                        return t(m([n])), f(n, r);
                    },
                f = (e, t) =>
                    t.get(l).then((s) => {
                        const r = s?.articles || new Set();
                        r.add(e);
                        const o = s?.lastSeenMap || {},
                            n = Date.now();
                        o[e] = n;
                        for (const [e, t] of Object.entries(o)) n - Number(t) > 6048e5 && (r.delete(e), delete o[e]);
                        return t.set(l, { articles: r, lastSeenMap: o });
                    });
            i.Z.register(
                {
                    [d]: function (e = g, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case E:
                                return { ...e, domains: t.payload };
                            case p:
                                return t.payload instanceof Array ? { ...e, articles: (0, n.Z)([...e.articles, ...t.payload]) } : e;
                            default:
                                return e;
                        }
                    },
                },
                () => (e, t, s) =>
                    c.Qb(t())
                        ? Promise.all([
                              s.devicePersistence.get(u).then((t) => {
                                  const r = t?.domains,
                                      o = t?.updatedTime,
                                      n = Date.now();
                                  (!o || n - o > 864e5) &&
                                      s.api
                                          .withEndpoint(a.Z)
                                          .fetchArticleDomainsGraphQL()
                                          .then((t) => {
                                              s.devicePersistence.set(u, { domains: t || [], updatedTime: n }), e(_(t || void 0));
                                          })
                                          .catch(() => {}),
                                      t && e(_(r));
                              }),
                              s.userPersistence.get(l).then((t) => {
                                  const s = t?.articles;
                                  s && e(m(Array.from(s)));
                              }),
                          ]).then(() => {})
                        : Promise.resolve(),
            );
        },
        583790: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = s(403911),
                o = s(545521);
            const n = (e, t) => (0, o.Z)({ contextSuffix: "BOOKMARK_FOLDERS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchBookmarkFoldersSlice, getEndpointParams: (e) => ({ ...e, tweet_id: t }), sliceKey: `bookmarkFoldersSlice-${e}` });
        },
        482176: (e, t, s) => {
            s.d(t, { SS: () => T, ZP: () => w, aL: () => I, zs: () => h });
            var r = s(912021),
                o = s(744531),
                n = s(403911),
                a = s(466015),
                i = s(917799),
                c = s(56519),
                d = s(502909),
                l = s(600823),
                u = s(390387),
                E = s(977154),
                p = s(583790);
            const _ = Object.freeze({ REQUEST: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST", SUCCESS: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS", FAILURE: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST", SUCCESS: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS", FAILURE: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE" }),
                g = (0, d.ZP)({ namespace: "bookmarkFolders" }),
                S = (0, r.Z)((e) => (0, p.Z)(e)),
                R = {
                    deleteBookmarkFolder: (0, d.Tx)(g, "deleteBookmarkFolder", {
                        context: "DELETE_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).deleteBookmarkFolder,
                        getParams: (e) => ({ bookmarkFolderId: e }),
                        getMeta: (e, t = {}, s) => ({ entityId: e }),
                        reducer: (e, t) => {
                            const { entityId: s } = t.meta;
                            if (!e.entities[s]) return e;
                            const r = (0, o.Z)(e.entities, [s]);
                            return { ...e, entities: r };
                        },
                        mapResponseToActions: (e, t, s) => (t) => {
                            const r = (0, u.x0)(s());
                            if (r && e && "Done" === t?.bookmark_collection_delete) {
                                return [S(r).removeItems([e])];
                            }
                        },
                    }),
                    editBookmarkFolder: (0, d.Tx)(g, "editBookmarkFolder", {
                        context: "EDIT_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).editBookmarkFolder,
                        getParams: (e, { name: t } = {}) => ({ bookmarkFolderId: e, name: t }),
                        getMeta: (e, t = {}, s) => ({ entityId: e, name: t.name }),
                        mapResponseToActions: (e, t, s) => (t) => {
                            if (!t) return;
                            const r = t?.bookmark_collection_update,
                                o = (0, u.x0)(s());
                            if (o && e && r) {
                                return [S(o).injectItems([r.id])];
                            }
                        },
                        reducer: (e, t) => {
                            const { entityId: s, name: r } = t.meta,
                                o = e.entities[s];
                            if (!o) return e;
                            const n = { name: r };
                            return { ...e, entities: { ...e.entities, [o.id]: { ...o, ...n } } };
                        },
                    }),
                    removeTweetFromBookmarkFolder: (0, d.Tx)(g, "removeTweetFromBookmarkFolder", {
                        context: "REMOVE_TWEET_FROM_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).removeTweetFromBookmarkFolder,
                        getParams: (e, { tweetId: t } = {}) => ({ bookmarkFolderId: e, tweetId: t }),
                        mapResponseToActions: (e, t, s) => (r) => {
                            if (r) {
                                if ("Done" !== r.bookmark_collection_tweet_delete) return;
                                if (!t.tweetId || !e) return [];
                                const o = r?.bookmark_collection_tweet_delete,
                                    n = (0, u.x0)(s());
                                if (n && e && o) {
                                    const s = S(n);
                                    return [(0, E.m)(e).removeTweets({ [t.tweetId]: !0 }), s.injectItems([e])];
                                }
                            }
                        },
                        reducer: (e, t) => e,
                    }),
                    addTweetToBookmarkFolder: (0, d.Tx)(g, "addTweetToBookmarkFolder", {
                        context: "BOOKMARK_TWEET_TO_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).bookmarkTweetToFolder,
                        getParams: (e, { tweetId: t } = {}) => ({ bookmark_collection_id: e, tweet_id: t }),
                        mapResponseToActions: (e, t, s) => (r) => {
                            if (r) {
                                if ("Done" !== r.bookmark_collection_tweet_put) return;
                                if (!t.tweetId || !e) return [];
                                const o = r?.bookmark_collection_tweet_put,
                                    n = (0, u.x0)(s());
                                if (n && e && o) {
                                    const s = S(n);
                                    return [(0, E.m)(e).injectEntry(a.Se({ id: t.tweetId, sortIndex: t.tweetId })), s.injectItems([e])];
                                }
                            }
                        },
                        reducer: (e, t) => e,
                    }),
                },
                h =
                    () =>
                    (e, t, { api: s }) =>
                        (0, i._O)(e, { request: s.withEndpoint(n.Z).fetchBookmarkFoldersSlice, params: {} })({ actionTypes: _, context: "FETCH_BOOKMARK_FOLDERS" }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return t ? [(0, c.dP)(t)] : void 0;
                            }
                        }),
                T =
                    (e) =>
                    (t, s, { api: r }) =>
                        (0, i._O)(t, { request: r.withEndpoint(n.Z).createBookmarkFolder, params: { name: e } })({ actionTypes: m, context: "CREATE_BOOKMARK_FOLDER" }, (e) => {
                            if (e) {
                                const t = e?.bookmark_collection_create,
                                    r = (0, u.x0)(s());
                                if (t && r) {
                                    const e = S(r);
                                    return [g.add({ [t.id]: t }), e.injectItems([t.id])];
                                }
                            }
                        }),
                I = (e, t, s) => (r) => {
                    const o = S(s);
                    return Promise.resolve(r([(0, E.m)(e).removeTweets({ [t]: !0 }), o.injectItems([e])]));
                },
                f = { ...g, ...R, customActionTypes: (0, d.X7)(R) },
                w = l.Z.register(f);
        },
        958602: (e, t, s) => {
            s.d(t, { I: () => a });
            var r = s(323265),
                o = s(389071),
                n = s(189953);
            const a =
                ({ analytics: e, conversationKey: t }) =>
                async (e, s, { api: a, featureSwitches: i }) => {
                    const c = (0, o.bD)(t),
                        d = c.selectStatus(s());
                    if (!(d === n.Q_.TYPING || d === n.Q_.WAITING)) return Promise.resolve();
                    const l = c.selectConversationId(s()) || void 0,
                        u = c.selectMetadataForMessageId(s(), "currentResponse"),
                        E = u?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const p = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: l, responseToChatItemId: E, isCancel: !0 },
                        _ = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return a.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(p) }, _ ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, s) => {
            s.d(t, { D: () => E });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                o = s(397159),
                n = s(774717),
                a = s(623494),
                i = s(836255),
                c = s(919022),
                d = s(52570),
                l = s(155918);
            s(571372);
            const u = (e) => {
                    const t = [];
                    let s = !1,
                        r = Date.now();
                    const o = [];
                    let n = 20;
                    const a = () => {
                            const e = (() => {
                                    const e = Date.now();
                                    for (; o.length > 0 && o[0] < e - 50; ) o.shift();
                                    return o.length / 0.05;
                                })(),
                                s = Math.max(e, t.length);
                            (n = s > 0 ? Math.max(0, 1e3 / s) : 0), (r = Date.now());
                        },
                        i = async () => {
                            for (s = !0; t.length > 0; ) {
                                const e = t.shift();
                                e && e();
                                const s = n;
                                await new Promise((e) => setTimeout(e, s));
                            }
                            s = !1;
                        };
                    return {
                        resumingDispatch: (e) => {
                            const n = Date.now();
                            o.push(n), t.push(e), n - r >= 50 && a(), s || i();
                        },
                        abortQueue: () => {
                            (t.length = 0), (s = !1), (o.length = 0);
                        },
                    };
                },
                E = async ({ analytics: e, api: t, dispatch: s, eventTag: E, flags: m, grokModule: g, method: S = "POST", requestBody: R, requestParams: h }) => {
                    const T = E ? ` (${E})` : "",
                        I = (function () {
                            const e = `grok-${r.ZP.isTwitterApp() ? (r.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                                t = n.P_();
                            function s(s) {
                                n.IM(`${e}:${s}`, t.end());
                            }
                            const o = new Set();
                            function a(e) {
                                o.has(e) || (o.add(e), s(e));
                            }
                            return { record: s, recordOnce: a };
                        })(),
                        f = Date.now();
                    let w = !1,
                        A = new AbortController();
                    s(g.setAbortController(A));
                    let O = !1;
                    const b = u(s),
                        k = [""],
                        C = [""];
                    let y = !0,
                        U = !1;
                    const N = new l.EG();
                    N.setRequestedCount(R.imageGenerationCount || 0),
                        (function ({ dispatch: e, grokModule: t, responses: s }) {
                            const r = s[s.length - 1];
                            if (r && r.fileAttachments && r.fileAttachments.length) {
                                const s = r.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                                s &&
                                    (s.dimensions
                                        ? e(t.setExpectedImageAspectRatio(s.dimensions.width / s.dimensions.height))
                                        : s.url &&
                                          ((o = s.url),
                                          new Promise((e, t) => {
                                              const s = new Image();
                                              (s.src = o),
                                                  (s.onload = () => {
                                                      const t = { width: s.width, height: s.height };
                                                      e(t);
                                                  }),
                                                  (s.onerror = () => {
                                                      t(new Error("Failed to load the image"));
                                                  });
                                          })).then((s) => {
                                              e(t.setExpectedImageAspectRatio(s.width / s.height));
                                          }));
                            }
                            var o;
                        })({ responses: R.responses, grokModule: g, dispatch: s });
                    const M = new o.fQ({ deepsearchArgs: R.deepsearchArgs, isDeepsearch: R.isDeepsearch });
                    let F = [],
                        P = [],
                        D = "",
                        v = !1,
                        L = 0,
                        G = !1,
                        K = !1;
                    const x = async ({ method: r, requestParams: n }) => {
                            const u = (function ({ method: e, requestParams: t }) {
                                const s = (e) => {
                                    const t = new URLSearchParams();
                                    for (const [s, r] of Object.entries(e)) t.append(s, String(r));
                                    return t.toString();
                                };
                                let r = "/2/grok/add_response.json";
                                if ("GET" === e && t) {
                                    const e = s(t);
                                    e && (r += `?${e}`);
                                }
                                return r;
                            })({ method: r, requestParams: n });
                            t.fetchClient
                                .dispatch(u, { method: r, credentials: "include", params: "GET" === r ? n : null, body: "POST" === r ? JSON.stringify(R) : null, signal: A?.signal, keepalive: m?.enableKeepalive }, m?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const n = t.headers.get("x-transaction-id");
                                    if ((n && s(g.updatePerformanceMetrics({ traceId: n })), !t.ok)) {
                                        I.record(`http-${t.status}`);
                                        const r = (0, d.bY)(t.status);
                                        return s(g.grokResponseError(r)), void (0, a.Uk)(e, `add-response failed with status ${t.status}${T}`);
                                    }
                                    const u = t.body?.getReader();
                                    if (!u) return s(g.grokResponseError(d.NE)), void (0, a.Uk)(e, `reader was not found${T}`);
                                    const E = new TextDecoder();
                                    let p = "";
                                    const S = setTimeout(() => {
                                            (0, a.eS)(e, !0);
                                        }, 5e3),
                                        h = await u.read();
                                    return (
                                        clearTimeout(S),
                                        (async function t({ done: n, value: S }) {
                                            if (n) {
                                                G = !1;
                                                if ((!k.length || k.every((e) => "" === e)) && !v) {
                                                    const t = `add-response failed to reach the network${T}`;
                                                    return M.isDeepsearch && _({ messageStepAccumulator: M, analytics: e, dispatch: s, errorMessage: t, grokModule: g, resumabilityQueue: b, method: r }), s(g.grokResponseError(d.NE)), (0, a.Uk)(e, t), void I.record("network-error");
                                                }
                                                I.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o, method: n, resumabilityQueue: i }) {
                                                        o.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o }) {
                                                                if ("PENDING" === o.state) return;
                                                                o.complete(!r), t(s.grokResponseMessageStepAccumulatorUpdate(o)), (0, a.y6)(e, o.getStreamDuration());
                                                            })({ messageStepAccumulator: o, analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r });
                                                        "GET" === n ? (i.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), i.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === n && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: g, method: r, resumabilityQueue: b, isUnifiedReasoningLayout: K });
                                            }
                                            if (S) {
                                                I.recordOnce("time-to-first-chunk"), w || ((w = !0), s(g.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - f })));
                                                const n = E.decode(S);
                                                if (((p += n), p.includes("\n"))) {
                                                    const t = p.split("\n");
                                                    p = t.pop();
                                                    for (const n of t)
                                                        if (O || "GET" !== r) {
                                                            const t = JSON.parse(n);
                                                            if (t.result?.uiLayout?.reasoningUILayout) {
                                                                const e = t.result.uiLayout.reasoningUILayout;
                                                                s(g.setReasoningLayout(e)), (K = "UNIFIED" === e);
                                                            }
                                                            const a = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || U || (k.push(""), C.push(""), s(g.setUsingExperiment(!0)), (U = !0)), t.result?.query && s(g.queryTyping(t.result.query)), t.result?.bannerMessage && s(g.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (P.push(...(t.result.xPostIds || [])), (P = P.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(P)), s(g.grokResponsePosts(P, a))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(g.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(g.grokResponsePosts(t.result.postIds, a));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === o.iS.FINAL)) {
                                                                const e = !k[a];
                                                                t.result?.isThinking ? (C[a] += t.result.message) : (k[a] += t.result.message), e && s(g.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - f }));
                                                                const n = t.result?.isThinking ? C[a] : k[a],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && y && (y = !1), "message" === i && C[0].length > 0 && !y && ((y = !0), "GET" === r ? b.resumingDispatch(() => s(g.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(g.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? b.resumingDispatch(() => s(g.grokResponseTyping(n, i, a))) : s(g.grokResponseTyping(n, i, a)), (t.result?.messageTag === o.iS.FINAL || (t.result?.message && "STARTED" === M.state)) && (M.updateFinalAnswer({ messageTag: o.iS.FINAL, message: t.result?.message || "" }), M.complete(!K), "GET" === r ? (b.resumingDispatch(() => s(g.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), b.resumingDispatch(() => s(g.grokResponseMessageStepAccumulatorUpdate(M)))) : (s(g.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(g.grokResponseMessageStepAccumulatorUpdate(M))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(g.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                R.imageGenerationCount && (e = Math.min(e, R.imageGenerationCount)), N.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(g.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                v = !0;
                                                                const e = t.result.imageAttachment;
                                                                N.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(g.grokResponseFileAttachments(N.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(g.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(g.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(g.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(g.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(g.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(g.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (D = t.agentChatItemId), s(g.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(g.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (F.push(...(t.result?.webResults || [])), (F = F.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(g.grokWebResults(F, a))), t.result?.citedWebResults && s(g.grokCitedWebResults(t.result.citedWebResults, a));
                                                            const d = t.result?.event;
                                                            if ((d && (d.imageAttachmentUpdate && s(g.imageIntermediateResult({ ...d.imageAttachmentUpdate, progress: d.imageAttachmentUpdate.progress / 100, imageUrl: d.imageAttachmentUpdate.imageUrl })), d.imageAttachmentRemoval && (N.setAttachmentAsModerated(d.imageAttachmentRemoval.imageIdStr), s(g.grokResponseFileAttachments(N.generateAttachmentList())))), m?.enableLocation && t.result?.doLocationRequest && !R.geoLocation && s(g.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, l.dj)(t.result.cardAttachment, e);
                                                                if (r) {
                                                                    if ((s(g.grokResponseCardAttachment(r)), "x_posts_card" === r.cardType)) {
                                                                        const e = r.post_ids;
                                                                        s(i.Z.fetchMultiple(e));
                                                                    }
                                                                    "x_users_card" === r.cardType && s(c.ZP.fetchManyByScreenNames(r.user_handles));
                                                                }
                                                            }
                                                            if ((t.result?.memoryReferences && s(g.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== o.iS.FINAL && e !== o.iS.FINAL_LONG && (M.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, toolUsageCardId: t.result?.toolUsageCardId || "", webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? b.resumingDispatch(() => s(g.grokResponseMessageStepAccumulatorUpdate(M))) : s(g.grokResponseMessageStepAccumulatorUpdate(M)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(n);
                                                            (O = !0), e.message && ((k[0] += e.message), s(g.grokResponseTyping(e.message ?? "", "message"))), e.result?.uiLayout && e.result?.uiLayout.reasoningUILayout && ((K = "UNIFIED" === e.result.uiLayout.reasoningUILayout), s(g.setReasoningLayout(e.result.uiLayout.reasoningUILayout)));
                                                            const t = new o.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            o = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (P.push(...t), (P = P.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), o.length && (F.push(...o), (F = F.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: o, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(g.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((C[0] += e.thinkingTrace), s(g.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                        }
                                                }
                                                if (u) {
                                                    const s = setTimeout(() => {
                                                            (0, a.eS)(e, !1);
                                                        }, 5e3),
                                                        r = await u.read();
                                                    return clearTimeout(s), t(r);
                                                }
                                            }
                                        })(h)
                                    );
                                })
                                .catch(async (t) => {
                                    G = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === M.state && M.isDeepsearch && (0, a.YI)(e, { durationMs: M.getStreamDuration(), messageTagCounts: M.debugMessageTagCount }), b.abortQueue(), I.record("abort");
                                    else {
                                        if (H()) return void (await B(t.message));
                                        M.isDeepsearch && _({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: g, resumabilityQueue: b, method: r, errorMessage: t ? t.message : void 0 }), s(g.grokResponseError(d.NE)), (0, a.kl)(e, t), I.record("error");
                                    }
                                    s(g.updatePerformanceMetrics({ endStreamTime: Date.now() })), C[0].length > 0 && s(g.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        H = () => {
                            const e = p(),
                                t = Boolean(R.isDeepsearch) || Boolean(R.isReasoning);
                            return !G && L < (m?.numRetries || 0) && !!D && !!e && t && "POST" === S;
                        },
                        B = async (t) => {
                            A.abort(), L++, (G = !0), (0, a.mm)(e, L, t), (A = new AbortController()), await s(g.setAbortController(A)), x({ method: "GET", requestParams: { ...h, conversationId: p(), responseToChatItemId: D, streamInitialChunkWhole: !1 } });
                        };
                    return x({ method: S, requestParams: h });
                };
            function p() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function _({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: o, method: n, resumabilityQueue: i }) {
                "STARTED" === o.state && (o.onAbort(), "GET" === n ? (i.resumingDispatch(() => t(r.grokResponseMessageStepAccumulatorUpdate(o))), i.resumingDispatch(() => t(r.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : t(r.grokResponseMessageStepAccumulatorUpdate(o)), (0, a.hq)(e, { durationMs: o.getStreamDuration(), errorMessage: s }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(834949),
                o = s.n(r),
                n = s(623494),
                a = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: d }) => (
                r(d.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(o(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const o = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (o) return r(d.fetchConversationIdSuccess(o, e)), o;
                        if (i) throw (r(d.fetchConversationIdFailed(a.NE)), (0, n.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, a.bY)(t);
                        r(d.fetchConversationIdFailed(s));
                    })
            );
        },
        96275: (e, t, s) => {
            s.d(t, { d: () => m });
            s(136728);
            var r = s(506899),
                o = s(389071),
                n = s(6157),
                a = s(171697),
                i = s(397159),
                c = s(917799),
                d = s(56519),
                l = s(836255),
                u = s(919022),
                E = s(189953),
                p = s(155918),
                _ = s(250781);
            const m =
                (e, t) =>
                (s, m, { api: g }) =>
                    c._O(s, { params: { restId: e }, request: g.withEndpoint(n.Z).fetchConversation })({ actionTypes: E.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (n) => {
                        if (!n?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, o.Ki)(c));
                        const g = (0, o.YJ)(m(), c);
                        s(g.clearConversation()), s(g.fetchConversationIdSuccess(e));
                        const S = n?.grok_conversation_items_by_rest_id?.items ? [...n.grok_conversation_items_by_rest_id.items].reverse() : [];
                        S.forEach((n, c) => {
                            if (n.is_partial && c === S.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, n, { api: a, featureSwitches: i }) => {
                                                const c = (0, o.bD)(s),
                                                    d = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    l = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, _.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: d, dispatch: r, method: "GET", analytics: t, api: a, flags: { numRetries: l } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: n.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(g.grokResponseMetadata({ agentChatItemId: n.chat_item_id }))
                                );
                            n.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, a.Z);
                                    s((0, d.dP)(t));
                                }
                            }),
                                n.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, a.Z);
                                        s((0, d.dP)(t));
                                    }
                                });
                            const m = (n.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                R = (n.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let h = n.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === h.length && (h = n.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === n.sender_type && s(g.userSendMessage({ message: n.message ?? "", fileAttachments: h, bannerMessages: n.banner_message ? [n.banner_message] : void 0, postIds: m, sender: 1 })), "Agent" === n.sender_type)) {
                                if ((s(g.grokResponseTyping(n.message ?? "", "message")), n.thinking_trace)) {
                                    const e = n.thinking_trace;
                                    s(g.grokResponseTyping(e, "thinkingTrace")), (n.is_partial && c === S.length - 1) || s(g.setIsPastThinkingTrace(!0));
                                }
                                let e;
                                n.ui_layout?.reasoning_ui_layout && ("Split" === n.ui_layout.reasoning_ui_layout ? (e = "SPLIT") : "Unified" === n.ui_layout.reasoning_ui_layout && (e = "UNIFIED"), e && s(g.setReasoningLayout(e))), n.banner_message && s(g.addBannerMessage(n.banner_message)), h.length && s(g.grokResponseFileAttachments(h)), n.memory_references && s(g.grokResponseMemoryReferences(n.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const t = [];
                                if (n.card_attachments)
                                    for (const e of n.card_attachments) {
                                        const r = (0, p.dj)(e);
                                        r && (t.push(r), "x_posts_card" === r.cardType ? s(l.Z.fetchMultipleIfNeeded(r.post_ids)) : "x_users_card" === r.cardType && s(u.ZP.fetchManyByScreenNames(r.user_handles)));
                                    }
                                t.length && s(g.grokResponseCardAttachments(t));
                                let r = [],
                                    o = [];
                                if (n.deepsearch_headers && n.deepsearch_headers.length > 0) {
                                    const e = n.deepsearch_headers;
                                    let t = {};
                                    n.deepsearch_args && (t = n.deepsearch_args);
                                    const a = new i.fQ({ deepsearchArgs: t });
                                    a.defaultFinalAnswer = n.message || "";
                                    const c = [];
                                    for (const t of e) {
                                        const e = [];
                                        for (const n of t.steps) {
                                            const t = (n.x_post_ids || []).map((e) => e),
                                                a = (n.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title })),
                                                i = [];
                                            if (n.tool_usage_card_results)
                                                for (const e of n.tool_usage_card_results) {
                                                    const s = { toolUsageCardId: e.tool_usage_card_id, webResults: (e.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title })), xPostIds: (e.x_post_ids || []).map((e) => e) };
                                                    i.push(s), a.push(...(e.web_results || [])), t.push(...(e.x_post_ids || []));
                                                }
                                            t.length && (r.push(...t), (r = r.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(l.Z.fetchMultiple(t))), a.length && (o.push(...a), (o = o.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: n.header || "", assistant: n.assistant || "", decision: n.decision || "", finalMessage: n.final_message || "", functionCall: n.function_call || "", rawFunctionResult: n.raw_function_result || "", summary: n.summary || "", webResults: a, xPostIds: t, toolUsageCardResults: i });
                                        }
                                        c.push({ header: t.header || "", steps: e });
                                    }
                                    a.initiateFromHistoryResponses(c), s(g.grokResponseMessageStepAccumulatorUpdate(a)), r.length && s(g.grokResponsePosts(r)), o.length && s(g.grokWebResults(o));
                                } else R.length && s(g.grokResponseMediaPosts(R)), m.length && s(g.grokResponsePosts(m)), n.web_results && s(g.grokWebResults([...n.web_results])), n.cited_web_results && s(g.grokCitedWebResults([...n.cited_web_results]));
                                s(g.grokResponseMetadata({ agentChatItemId: n.chat_item_id, userChatItemId: S[c - 1].chat_item_id, isDeleted: n.is_deleted })), s(g.grokResponseComplete());
                            }
                            s(g.setMode("Fun" === n.grok_mode ? E.IK.FUN : E.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => u });
            var r = s(323265),
                o = s(389071),
                n = s(623494),
                a = s(806528),
                i = s(155918),
                c = s(958602),
                d = s(250781),
                l = s(100326);
            const u =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: u, mode: E, onStart: p, returnCitations: _, promptMetadata: m = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: g = !0, features: S = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: f, toolOverrides: w, isReasoning: A, isDeepsearch: O, isImageGen: b, deepsearchArgsOverride: k, personalityId: C }) =>
                async (T, y, { api: U, featureSwitches: N }) => {
                    const M = !r.ZP.isTwitterApp() && N.isTrue("responsive_web_grok_api_enable_grok_host"),
                        F = (0, o.bD)(t);
                    let P = F.selectConversationId(y());
                    const D = r.ZP.isAndroid(),
                        v = r.ZP.isIOS();
                    if ((null != F.selectCurrentResponseMessage(y()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (P ??= await (0, l.X)({ analytics: e, api: U, dispatch: T, grokModule: F, analysisEntityId: s })), !P)) return void (0, n.Uk)(e, "conversation couln't be found or created");
                    let L;
                    const G = N.isTrue("responsive_web_grok_location_enabled");
                    if (G) {
                        const e = (0, a.fw)(y())?.position;
                        e && (L = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = E ?? F.selectMode(y()),
                        x = (0, o.F9)(y()),
                        H = F.selectConversationForAPI(y()),
                        B = (0, o.en)(y()),
                        Z = { ...w };
                    if ((b && (Z.imageGen = !0), B && B.toolOverrides)) {
                        const e = B.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            Z[t] = e[t];
                        });
                    }
                    if (!(R || (u && 0 !== u.length))) return Promise.resolve();
                    const j = { message: R ?? "", sender: i.CI.HUMAN, promptSource: f ?? "", ...(s ? { postIds: [s] } : void 0) };
                    u && (j.fileAttachments = u), O && (j.isDeepsearch = O), A && (j.isReasoning = A);
                    const Q = { responses: H.concat(j), systemPromptName: K, grokModelOptionId: x, conversationId: P, returnSearchResults: g, returnCitations: _, promptMetadata: m, imageGenerationCount: I, requestFeatures: S, ...(s ? { analysisEntityId: s } : void 0), geoLocation: L, enableSideBySide: !("GROK_ANALYZE" === m.promptSource || h || v || D || O || A), toolOverrides: Z, isDeepsearch: O, isReasoning: A, personalityId: C, deepsearchArgs: k ?? (O ? B?.deepsearchArgs : void 0) };
                    T(F.setPromptSource(f || "")), T(F.setUsingExperiment(!1)), T(F.userSendMessage(j, m)), (0, n.pv)(e, { conversationLength: H.length, isFileAttached: Boolean(j.fileAttachments?.length), isDeepsearch: Q.isDeepsearch || void 0, isReasoning: Q.isReasoning || void 0 }), p?.();
                    const V = N.isTrue("responsive_web_grok_enable_add_response_keepalive") && (O || A),
                        W = N.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, d.D)({ grokModule: F, requestBody: Q, dispatch: T, analytics: e, api: U, flags: { enableLocation: G, enableGrokApiHost: M, numRetries: W, enableKeepalive: V } });
                };
        },
        63538: (e, t, s) => {
            s.d(t, { O: () => a });
            var r = s(6157),
                o = s(917799),
                n = s(189953);
            const a = (e, t) => {
                const s = e === n.IK.FUN ? "Fun" : "Normal";
                return (e, a, { api: i }) => o._O(e, { params: { grokMode: s, grokModelOptionId: t }, request: i.withEndpoint(r.Z).setPreferences })({ actionTypes: n.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        458810: (e, t, s) => {
            s.d(t, { t: () => o });
            s(571372);
            var r = s(6157);
            const o =
                (e, t) =>
                (s, o, { api: n }) =>
                    n
                        .withEndpoint(r.Z)
                        .uploadFile({ file: e, abortController: t })
                        .then((e) => {
                            const t = e[0];
                            if (!t) throw new Error("Missing file in the response");
                            return t;
                        });
        },
        189953: (e, t, s) => {
            s.d(t, { $t: () => ae, A0: () => me, BA: () => se, BS: () => N, CH: () => F, CR: () => Y, Cr: () => f, DX: () => W, Dh: () => S, Dn: () => M, En: () => d, FF: () => H, FV: () => y, Gy: () => C, HF: () => _, IK: () => o, JO: () => Q, Jt: () => re, KH: () => I, L0: () => $, Lc: () => a, OW: () => U, Oj: () => b, P9: () => j, Q_: () => n, Qg: () => L, Qh: () => J, Sv: () => i, TY: () => v, Tv: () => q, UN: () => O, VK: () => c, WK: () => te, Ws: () => l, Xg: () => z, Xi: () => G, Y8: () => u, Yb: () => h, Yf: () => r, Yx: () => E, ZN: () => V, _i: () => ce, ar: () => B, cA: () => _e, cw: () => ne, dK: () => p, dO: () => R, dZ: () => D, dw: () => Ee, f1: () => ue, fH: () => Re, ip: () => x, j$: () => ge, lQ: () => ee, lh: () => m, lm: () => g, mq: () => Se, my: () => A, nK: () => k, o$: () => P, px: () => ie, qd: () => Z, ru: () => pe, ub: () => w, vc: () => K, vi: () => T, wG: () => oe, x5: () => X, yB: () => le, z2: () => de });
            const r = "grok",
                o = Object.freeze({ FUN: "fun", REGULAR: "" }),
                n = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                f = "rweb/grok/CLEAR_CONVERSATION",
                w = "rweb/grok/USER_SEND_MESSAGE",
                A = "rweb/grok/REGENERATE_RESPONSE",
                O = "rweb/grok/GROK_RESPONSE_TYPING",
                b = "rweb/grok/GROK_RESPONSE_POSTS",
                k = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                C = "rweb/grok/GROK_RESPONSE_COMPLETE",
                y = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                N = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                M = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                F = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                P = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                v = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                L = "rweb/grok/GROK_RESPONSE_UPSELL",
                G = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                x = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                H = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                B = "rweb/grok/GROK_WEB_RESULTS",
                Z = "rweb/grok/GROK_CITED_WEB_RESULTS",
                j = "rweb/grok/ABORT_MESSAGE",
                Q = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                V = "rweb/grok/FETCH_CONVERSATION_ID_START",
                W = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                q = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                Y = "rweb/grok/EDITING_SET_ID",
                z = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                X = "rweb/grok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                re = "rweb/grok/SET_FREE_ACCESS",
                oe = "rweb/grok/SET_PREFERRED_PROMPTS",
                ne = "rweb/grok/SET_PROMPT_SOURCE",
                ae = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                de = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                le = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                Ee = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                pe = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                _e = "r/web/grok/SET_USING_EXPERIMENT",
                me = "r/web/grok/SET_PREFERRED_RESPONSE",
                ge = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Se = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Re = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => n, bY: () => l });
            var r = s(111677),
                o = s.n(r);
            const n = o().ead81122,
                a = o().f808a13a,
                i = o().e0481e5a,
                c = o().bc0a5b5a,
                d = o().ef674976,
                l = (e) => {
                    switch (e) {
                        case 429:
                            return a;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return d;
                        case 503:
                            return c;
                        default:
                            return n;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f.9e347a7a.js.map
