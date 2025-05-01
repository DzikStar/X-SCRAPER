"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f", "bundle.UserAvatar-2291c9da"],
    {
        192464: (e, t, r) => {
            r.d(t, { Z: () => i });
            r(571372);
            var s = r(2138),
                o = r(666536),
                n = r(624479),
                a = r(163889);
            const i = new (class {
                constructor() {
                    (this.usersInApp = {}),
                        (this._throttledInitialFetch = (0, s.Z)(() => {
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
        4463: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(571372);
            function s(e) {
                (this.name = "AssertionError"), (this.message = e), (this.stack = new Error().stack);
            }
            (s.prototype = Object.create(Error.prototype)), (s.prototype.constructor = s);
            const o = (e, t) => {
                if (!e) throw new s(t ? `Assertion failed: ${t}` : "Assertion failed (also, no message was provided)");
            };
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => i, Du: () => l, GK: () => d, Iv: () => u, pz: () => m, rl: () => E });
            var s = r(202784),
                o = r(688715),
                n = r(946409),
                a = r(788993);
            const i = (e, t, r) => (e.retweeted_status ? c(e, t) : e.community_id_str && r ? d(e, r) : void 0),
                c = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                d = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, o.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                l = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const s = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${s.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: s };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                E = (e) => {
                    const { contextType: t, landingUrl: r, text: s } = e;
                    return { link: r ? (0, n.s9)(r) : void 0, text: s, contextType: t };
                },
                u = { contextType: a.Z.Pin, text: "" },
                m = s.createContext(void 0);
        },
        618566: (e, t, r) => {
            r.d(t, { P: () => o, a: () => n });
            var s = r(421575);
            const o = (e) => ({ topicId: e.topicId, functionalityType: e.functionalityType }),
                n = (e) => (e === s.q.Star ? s.q.Star : e === s.q.Favorite ? s.q.Favorite : e === s.q.Interested ? s.q.Interested : s.q.Default);
        },
        214647: (e, t, r) => {
            r.d(t, { Mt: () => R, V4: () => _, aT: () => m, pG: () => g, rT: () => S });
            r(202784);
            var s = r(950152),
                o = r(674132),
                n = r.n(o),
                a = r(500040),
                i = r(161821),
                c = r(395067);
            const d = n().fcad707a,
                l = n().f1824804,
                E = "/i/report/appeal_tweet_warning",
                u = a.default;
            function m(e) {
                const t = e.tweet.retweeted_status || e.tweet;
                return !(t.user.id_str !== e.viewerUserId || (!t.self_thread && t.in_reply_to_status_id_str));
            }
            const p = (e) => !!e.extended_entities?.media?.flatMap((e) => (e.sensitive_media_warning ? (0, i.Z)(e.sensitive_media_warning) : [])).some(Boolean);
            function _(e) {
                const { featureSwitches: t, isNsfwUser: r, tweet: s, viewerUserId: o } = e,
                    n = s.retweeted_status || s;
                return !(o !== n.user?.id_str || s.tombstoneInfo || !n.possibly_sensitive || r || p(n) || !t.isTrue("enable_label_appealing_sensitive_content_enabled"));
            }
            function g(e) {
                const { displaySensitiveMedia: t, ...r } = e;
                return !!t && _(r);
            }
            function S(e) {
                const t = e.tweet.retweeted_status || e.tweet;
                return e.viewerUserId === t.user.id_str && !e.tweet.tombstoneInfo && e.forwardPivotDisplayType === s.x.SoftIntervention && e.featureSwitches.isTrue("enable_label_appealing_misinfo_enabled");
            }
            function R(e, t, r) {
                const s = e.retweeted_status || e,
                    o = c.C2.AppealTweetWarning;
                let n;
                if (r && (0, c.Yw)(r, o)) {
                    const e = (s?.extended_entities?.media?.length || 0) > 0,
                        r = !!s.promoted_content,
                        a = (0, c.j_)({ clientReferer: window.location.pathname, isMedia: e, isPromoted: void 0 !== r, reportType: o, reportedTweet: s, reportedUser: s.user.id_str, scribeNamespace: t });
                    n = { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(a) } } };
                } else n = { pathname: `${E}/${s.id_str}`, state: { scribeNamespace: t } };
                return { text: d, action: { label: l, link: n }, Icon: u, withThumbnail: !0 };
            }
        },
        666932: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = Object.freeze({ Author: "author", LikedByAuthor: "liked-by-author" });
        },
        988823: (e, t, r) => {
            r.d(t, { M: () => a });
            var s = r(807896),
                o = r(202784),
                n = r(190286);
            const a = (e) => (t) => {
                const [r, a] = o.useState(null),
                    i = (e) =>
                        new Promise((t, r) => {
                            a({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = r;
                    return o.createElement(
                        n.Z,
                        (0, s.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return o.createElement(e, (0, s.Z)({}, t, { confirm: i }));
            };
        },
        794057: (e, t, r) => {
            r.d(t, { C0: () => a, DC: () => s, _e: () => n, iN: () => d, kd: () => i, pc: () => o });
            const s = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                n = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                i = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                d = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        575652: (e, t, r) => {
            r.d(t, { Ji: () => I, L4: () => R, T2: () => T, cb: () => S, ex: () => h });
            var s = r(449633),
                o = r.n(s),
                n = r(370751),
                a = r(337511),
                i = r(499627),
                c = r(390387);
            const d = "articles",
                l = "rweb.articlesVisited",
                E = "rweb.articleDomains",
                u = "rweb/articles/ADD_DOMAINS",
                m = "rweb/articles/ADD_VISITED_ARTICLES",
                p = (e) => ({ payload: e, type: u }),
                _ = (e) => ({ payload: e, type: m }),
                g = Object.freeze({ domains: void 0, articles: new Set() });
            const S = (e) => e[d].domains,
                R = (e, t) => {
                    const r = S(e);
                    return h(r, t);
                },
                h = (e, t) => !!e && !!t && e.includes((t || "").replace("www.", "")),
                T = (e, t, r) => {
                    const s = !!r && R(e, r);
                    if (t && s) {
                        const r = ((e) => e[d].articles)(e) || new Set(),
                            s = o()("", t);
                        return r.has(s);
                    }
                    return !1;
                },
                I =
                    (e) =>
                    (t, r, { userPersistence: s }) => {
                        const n = o()("", e);
                        return t(_([n])), w(n, s);
                    },
                w = (e, t) =>
                    t.get(l).then((r) => {
                        const s = r?.articles || new Set();
                        s.add(e);
                        const o = r?.lastSeenMap || {},
                            n = Date.now();
                        o[e] = n;
                        for (const [e, t] of Object.entries(o)) n - Number(t) > 6048e5 && (s.delete(e), delete o[e]);
                        return t.set(l, { articles: s, lastSeenMap: o });
                    });
            i.Z.register(
                {
                    [d]: function (e = g, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case u:
                                return { ...e, domains: t.payload };
                            case m:
                                return t.payload instanceof Array ? { ...e, articles: (0, n.Z)([...e.articles, ...t.payload]) } : e;
                            default:
                                return e;
                        }
                    },
                },
                () => (e, t, r) =>
                    c.Qb(t())
                        ? Promise.all([
                              r.devicePersistence.get(E).then((t) => {
                                  const s = t?.domains,
                                      o = t?.updatedTime,
                                      n = Date.now();
                                  (!o || n - o > 864e5) &&
                                      r.api
                                          .withEndpoint(a.Z)
                                          .fetchArticleDomainsGraphQL()
                                          .then((t) => {
                                              r.devicePersistence.set(E, { domains: t || [], updatedTime: n }), e(p(t || void 0));
                                          })
                                          .catch(() => {}),
                                      t && e(p(s));
                              }),
                              r.userPersistence.get(l).then((t) => {
                                  const r = t?.articles;
                                  r && e(_(Array.from(r)));
                              }),
                          ]).then(() => {})
                        : Promise.resolve(),
            );
        },
        583790: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(403911),
                o = r(545521);
            const n = (e, t) => (0, o.Z)({ contextSuffix: "BOOKMARK_FOLDERS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(s.Z).fetchBookmarkFoldersSlice, getEndpointParams: (e) => ({ ...e, tweet_id: t }), sliceKey: `bookmarkFoldersSlice-${e}` });
        },
        482176: (e, t, r) => {
            r.d(t, { SS: () => T, ZP: () => f, aL: () => I, zs: () => h });
            var s = r(912021),
                o = r(744531),
                n = r(403911),
                a = r(466015),
                i = r(917799),
                c = r(56519),
                d = r(502909),
                l = r(600823),
                E = r(390387),
                u = r(977154),
                m = r(583790);
            const p = Object.freeze({ REQUEST: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST", SUCCESS: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS", FAILURE: "rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST", SUCCESS: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS", FAILURE: "rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE" }),
                g = (0, d.ZP)({ namespace: "bookmarkFolders" }),
                S = (0, s.Z)((e) => (0, m.Z)(e)),
                R = {
                    deleteBookmarkFolder: (0, d.Tx)(g, "deleteBookmarkFolder", {
                        context: "DELETE_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).deleteBookmarkFolder,
                        getParams: (e) => ({ bookmarkFolderId: e }),
                        getMeta: (e, t = {}, r) => ({ entityId: e }),
                        reducer: (e, t) => {
                            const { entityId: r } = t.meta;
                            if (!e.entities[r]) return e;
                            const s = (0, o.Z)(e.entities, [r]);
                            return { ...e, entities: s };
                        },
                        mapResponseToActions: (e, t, r) => (t) => {
                            const s = (0, E.x0)(r());
                            if (s && e && "Done" === t?.bookmark_collection_delete) {
                                return [S(s).removeItems([e])];
                            }
                        },
                    }),
                    editBookmarkFolder: (0, d.Tx)(g, "editBookmarkFolder", {
                        context: "EDIT_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).editBookmarkFolder,
                        getParams: (e, { name: t } = {}) => ({ bookmarkFolderId: e, name: t }),
                        getMeta: (e, t = {}, r) => ({ entityId: e, name: t.name }),
                        mapResponseToActions: (e, t, r) => (t) => {
                            if (!t) return;
                            const s = t?.bookmark_collection_update,
                                o = (0, E.x0)(r());
                            if (o && e && s) {
                                return [S(o).injectItems([s.id])];
                            }
                        },
                        reducer: (e, t) => {
                            const { entityId: r, name: s } = t.meta,
                                o = e.entities[r];
                            if (!o) return e;
                            const n = { name: s };
                            return { ...e, entities: { ...e.entities, [o.id]: { ...o, ...n } } };
                        },
                    }),
                    removeTweetFromBookmarkFolder: (0, d.Tx)(g, "removeTweetFromBookmarkFolder", {
                        context: "REMOVE_TWEET_FROM_BOOKMARK_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).removeTweetFromBookmarkFolder,
                        getParams: (e, { tweetId: t } = {}) => ({ bookmarkFolderId: e, tweetId: t }),
                        mapResponseToActions: (e, t, r) => (s) => {
                            if (s) {
                                if ("Done" !== s.bookmark_collection_tweet_delete) return;
                                if (!t.tweetId || !e) return [];
                                const o = s?.bookmark_collection_tweet_delete,
                                    n = (0, E.x0)(r());
                                if (n && e && o) {
                                    const r = S(n);
                                    return [(0, u.m)(e).removeTweets({ [t.tweetId]: !0 }), r.injectItems([e])];
                                }
                            }
                        },
                        reducer: (e, t) => e,
                    }),
                    addTweetToBookmarkFolder: (0, d.Tx)(g, "addTweetToBookmarkFolder", {
                        context: "BOOKMARK_TWEET_TO_FOLDER",
                        getApiMethod: (e) => e.withEndpoint(n.Z).bookmarkTweetToFolder,
                        getParams: (e, { tweetId: t } = {}) => ({ bookmark_collection_id: e, tweet_id: t }),
                        mapResponseToActions: (e, t, r) => (s) => {
                            if (s) {
                                if ("Done" !== s.bookmark_collection_tweet_put) return;
                                if (!t.tweetId || !e) return [];
                                const o = s?.bookmark_collection_tweet_put,
                                    n = (0, E.x0)(r());
                                if (n && e && o) {
                                    const r = S(n);
                                    return [(0, u.m)(e).injectEntry(a.Se({ id: t.tweetId, sortIndex: t.tweetId })), r.injectItems([e])];
                                }
                            }
                        },
                        reducer: (e, t) => e,
                    }),
                },
                h =
                    () =>
                    (e, t, { api: r }) =>
                        (0, i._O)(e, { request: r.withEndpoint(n.Z).fetchBookmarkFoldersSlice, params: {} })({ actionTypes: p, context: "FETCH_BOOKMARK_FOLDERS" }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return t ? [(0, c.dP)(t)] : void 0;
                            }
                        }),
                T =
                    (e) =>
                    (t, r, { api: s }) =>
                        (0, i._O)(t, { request: s.withEndpoint(n.Z).createBookmarkFolder, params: { name: e } })({ actionTypes: _, context: "CREATE_BOOKMARK_FOLDER" }, (e) => {
                            if (e) {
                                const t = e?.bookmark_collection_create,
                                    s = (0, E.x0)(r());
                                if (t && s) {
                                    const e = S(s);
                                    return [g.add({ [t.id]: t }), e.injectItems([t.id])];
                                }
                            }
                        }),
                I = (e, t, r) => (s) => {
                    const o = S(r);
                    return Promise.resolve(s([(0, u.m)(e).removeTweets({ [t]: !0 }), o.injectItems([e])]));
                },
                w = { ...g, ...R, customActionTypes: (0, d.X7)(R) },
                f = l.Z.register(w);
        },
        958602: (e, t, r) => {
            r.d(t, { I: () => a });
            var s = r(323265),
                o = r(389071),
                n = r(189953);
            const a =
                ({ analytics: e, conversationKey: t }) =>
                async (e, r, { api: a, featureSwitches: i }) => {
                    const c = (0, o.bD)(t),
                        d = c.selectStatus(r());
                    if (!(d === n.Q_.TYPING || d === n.Q_.WAITING)) return Promise.resolve();
                    const l = c.selectConversationId(r()) || void 0,
                        E = c.selectMetadataForMessageId(r(), "currentResponse"),
                        u = E?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const m = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: l, responseToChatItemId: u, isCancel: !0 },
                        p = !s.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return a.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(m) }, p ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, r) => {
            r.d(t, { D: () => E });
            r(890103), r(136728), r(875640), r(543673), r(240753), r(128399);
            var s = r(323265),
                o = r(303157),
                n = r(774717),
                a = r(623494),
                i = r(836255),
                c = r(52570),
                d = r(155918);
            r(571372);
            const l = (e) => {
                    const t = [];
                    let r = !1,
                        s = Date.now();
                    const o = [];
                    let n = 20;
                    const a = () => {
                            const e = (() => {
                                    const e = Date.now();
                                    for (; o.length > 0 && o[0] < e - 50; ) o.shift();
                                    return o.length / 0.05;
                                })(),
                                r = Math.max(e, t.length);
                            (n = r > 0 ? Math.max(0, 1e3 / r) : 0), (s = Date.now());
                        },
                        i = async () => {
                            for (r = !0; t.length > 0; ) {
                                const e = t.shift();
                                e && e();
                                const r = n;
                                await new Promise((e) => setTimeout(e, r));
                            }
                            r = !1;
                        };
                    return {
                        resumingDispatch: (e) => {
                            const n = Date.now();
                            o.push(n), t.push(e), n - s >= 50 && a(), r || i();
                        },
                        abortQueue: () => {
                            (t.length = 0), (r = !1), (o.length = 0);
                        },
                    };
                },
                E = async ({ analytics: e, api: t, dispatch: r, eventTag: E, flags: p, grokModule: _, method: g = "POST", requestBody: S, requestParams: R }) => {
                    const h = E ? ` (${E})` : "",
                        T = (function () {
                            const e = `grok-${s.ZP.isTwitterApp() ? (s.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                                t = n.P_();
                            function r(r) {
                                n.IM(`${e}:${r}`, t.end());
                            }
                            const o = new Set();
                            function a(e) {
                                o.has(e) || (o.add(e), r(e));
                            }
                            return { record: r, recordOnce: a };
                        })(),
                        I = Date.now();
                    let w = !1,
                        f = new AbortController();
                    r(_.setAbortController(f));
                    let O = !1;
                    const A = l(r),
                        b = [""],
                        k = [""];
                    let C = !0,
                        U = !1;
                    const N = new d.EG();
                    N.setRequestedCount(S.imageGenerationCount || 0),
                        (function ({ dispatch: e, grokModule: t, responses: r }) {
                            const s = r[r.length - 1];
                            if (s && s.fileAttachments && s.fileAttachments.length) {
                                const r = s.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                                r &&
                                    (r.dimensions
                                        ? e(t.setExpectedImageAspectRatio(r.dimensions.width / r.dimensions.height))
                                        : r.url &&
                                          ((o = r.url),
                                          new Promise((e, t) => {
                                              const r = new Image();
                                              (r.src = o),
                                                  (r.onload = () => {
                                                      const t = { width: r.width, height: r.height };
                                                      e(t);
                                                  }),
                                                  (r.onerror = () => {
                                                      t(new Error("Failed to load the image"));
                                                  });
                                          })).then((r) => {
                                              e(t.setExpectedImageAspectRatio(r.width / r.height));
                                          }));
                            }
                            var o;
                        })({ responses: S.responses, grokModule: _, dispatch: r });
                    const F = new o.Fk(S.deepsearchArgs);
                    let y = [],
                        M = [],
                        D = "",
                        P = !1,
                        v = 0,
                        L = !1;
                    const G = async ({ method: s, requestParams: n }) => {
                            const l = (function ({ method: e, requestParams: t }) {
                                const r = (e) => {
                                    const t = new URLSearchParams();
                                    for (const [r, s] of Object.entries(e)) t.append(r, String(s));
                                    return t.toString();
                                };
                                let s = "/2/grok/add_response.json";
                                if ("GET" === e && t) {
                                    const e = r(t);
                                    e && (s += `?${e}`);
                                }
                                return s;
                            })({ method: s, requestParams: n });
                            t.fetchClient
                                .dispatch(l, { method: s, credentials: "include", params: "GET" === s ? n : null, body: "POST" === s ? JSON.stringify(S) : null, signal: f?.signal, keepalive: p?.enableKeepalive }, p?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const n = t.headers.get("x-transaction-id");
                                    if ((n && r(_.updatePerformanceMetrics({ traceId: n })), !t.ok)) {
                                        T.record(`http-${t.status}`);
                                        const s = (0, c.bY)(t.status);
                                        return r(_.grokResponseError(s)), void (0, a.Uk)(e, `add-response failed with status ${t.status}${h}`);
                                    }
                                    const l = t.body?.getReader();
                                    if (!l) return r(_.grokResponseError(c.NE)), void (0, a.Uk)(e, `reader was not found${h}`);
                                    const E = new TextDecoder();
                                    let u = "";
                                    const g = setTimeout(() => {
                                            (0, a.eS)(e, !0);
                                        }, 5e3),
                                        R = await l.read();
                                    return (
                                        clearTimeout(g),
                                        (async function t({ done: n, value: g }) {
                                            if (n) {
                                                L = !1;
                                                if ((!b.length || b.every((e) => "" === e)) && !P) {
                                                    const t = `add-response failed to reach the network${h}`;
                                                    return m({ deepSearchSummaryAccumulator: F, analytics: e, dispatch: r, errorMessage: t, grokModule: _, resumabilityQueue: A, method: s }), r(_.grokResponseError(c.NE)), (0, a.Uk)(e, t), void T.record("network-error");
                                                }
                                                T.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: r, grokModule: s, method: o, resumabilityQueue: n }) {
                                                        (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: r, grokModule: s }) {
                                                            if ("PENDING" === t.state) return;
                                                            t.complete(), r(s.grokResponseDeepSearchUpdate(t)), (0, a.y6)(e, t.getStreamDuration());
                                                        })({ deepSearchSummaryAccumulator: t, analytics: e, dispatch: r, grokModule: s }),
                                                            "GET" === o ? (n.resumingDispatch(() => r(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), n.resumingDispatch(() => r(s.grokResponseComplete()))) : "POST" === o && (r(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), r(s.grokResponseComplete()));
                                                    })({ deepSearchSummaryAccumulator: F, analytics: e, dispatch: r, grokModule: _, method: s, resumabilityQueue: A });
                                            }
                                            if (g) {
                                                T.recordOnce("time-to-first-chunk"), w || ((w = !0), r(_.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - I })));
                                                const n = E.decode(g);
                                                if (((u += n), u.includes("\n"))) {
                                                    const t = u.split("\n");
                                                    u = t.pop();
                                                    for (const n of t)
                                                        if (O || "GET" !== s) {
                                                            const t = JSON.parse(n),
                                                                a = t.result?.sideBySideIndex ?? 0;
                                                            if ((t.result?.isThinking && (t.result = { ...t.result, messageTag: void 0 }), null == t.result?.sideBySideIndex || U || (b.push(""), k.push(""), r(_.setUsingExperiment(!0)), (U = !0)), t.result?.query && r(_.queryTyping(t.result.query)), t.result?.bannerMessage && r(_.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (M.push(...(t.result.xPostIds || [])), (M = M.filter((e, t, r) => t === r.findIndex((t) => t === e))), r(i.Z.fetchMultiple(M)), r(_.grokResponsePosts(M, a))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                r(i.Z.fetchMultiple(e)), r(_.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) r(_.grokResponsePosts(t.result.postIds, a));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === o.iS.FINAL)) {
                                                                const e = !b[a];
                                                                t.result?.isThinking ? (k[a] += t.result.message) : (b[a] += t.result.message), e && r(_.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - I }));
                                                                const n = t.result?.isThinking ? k[a] : b[a],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && C && (C = !1), "message" === i && k[0].length > 0 && !C && ((C = !0), "GET" === s ? A.resumingDispatch(() => r(_.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : r(_.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === s ? A.resumingDispatch(() => r(_.grokResponseTyping(n, i, a))) : r(_.grokResponseTyping(n, i, a)), (t.result?.messageTag === o.iS.FINAL || (t.result?.message && "STARTED" === F.state)) && (F.updateFinalAnswer({ messageTag: o.iS.FINAL, message: t.result?.message || "" }), F.complete(), "GET" === s ? (A.resumingDispatch(() => r(_.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), A.resumingDispatch(() => r(_.grokResponseDeepSearchUpdate(F)))) : (r(_.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), r(_.grokResponseDeepSearchUpdate(F))));
                                                            }
                                                            if (("error" === t.result?.responseType && r(_.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                S.imageGenerationCount && (e = Math.min(e, S.imageGenerationCount)), N.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && r(_.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                P = !0;
                                                                const e = t.result.imageAttachment;
                                                                N.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), r(_.grokResponseFileAttachments(N.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && r(_.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && r(_.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && r(_.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && r(_.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && r(_.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && r(_.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (D = t.agentChatItemId), r(_.updatePerformanceMetrics({ startStreamTime: Date.now() })), r(_.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (y.push(...(t.result?.webResults || [])), (y = y.filter((e, t, r) => t === r.findIndex((t) => t.url === e.url))), r(_.grokWebResults(y, a))), t.result?.citedWebResults && r(_.grokCitedWebResults(t.result.citedWebResults, a));
                                                            const c = t.result?.event;
                                                            if ((c && (c.imageAttachmentUpdate && r(_.imageIntermediateResult({ ...c.imageAttachmentUpdate, progress: c.imageAttachmentUpdate.progress / 100, imageUrl: c.imageAttachmentUpdate.imageUrl })), c.imageAttachmentRemoval && (N.setAttachmentAsModerated(c.imageAttachmentRemoval.imageIdStr), r(_.grokResponseFileAttachments(N.generateAttachmentList())))), p?.enableLocation && t.result?.doLocationRequest && !S.geoLocation && r(_.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const s = (0, d.dj)(t.result.cardAttachment, e);
                                                                s && r(_.grokResponseCardAttachment(s));
                                                            }
                                                            if ((t.result?.memoryReferences && r(_.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== o.iS.FINAL && e !== o.iS.FINAL_LONG && (F.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === s ? A.resumingDispatch(() => r(_.grokResponseDeepSearchUpdate(F))) : r(_.grokResponseDeepSearchUpdate(F)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(n);
                                                            (O = !0), e.message && ((b[0] += e.message), r(_.grokResponseTyping(e.message ?? "", "message"))), e.thinkingTrace && ((k[0] += e.thinkingTrace), r(_.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                            const t = new o.Fk();
                                                            if (e.deepsearchHeaders && e?.deepsearchHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const s = [];
                                                                for (const t of e.deepsearchHeaders) {
                                                                    const e = [];
                                                                    for (const s of t.steps) {
                                                                        const t = (s.xPostIds || []).map((e) => e),
                                                                            o = (s.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (M.push(...t), (M = M.filter((e, t, r) => t === r.findIndex((t) => t === e))), r(i.Z.fetchMultiple(t))), o.length && (y.push(...o), (y = y.filter((e, t, r) => t === r.findIndex((t) => t.url === e.url)))), e.push({ header: s.header || "", assistant: s.assistant || "", decision: s.decision || "", finalMessage: s.finalMessage || "", functionCall: s.functionCall || "", rawFunctionResult: s.rawFunctionResult || "", summary: s.summary || "", webResults: o, xPostIds: t });
                                                                    }
                                                                    s.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(s, !0), r(_.grokResponseDeepSearchUpdate(t));
                                                            }
                                                        }
                                                }
                                                if (l) {
                                                    const r = setTimeout(() => {
                                                            (0, a.eS)(e, !1);
                                                        }, 5e3),
                                                        s = await l.read();
                                                    return clearTimeout(r), t(s);
                                                }
                                            }
                                        })(R)
                                    );
                                })
                                .catch(async (t) => {
                                    L = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === F.state && (0, a.YI)(e, { durationMs: F.getStreamDuration(), messageTagCounts: F.debugMessageTagCount }), A.abortQueue(), T.record("abort");
                                    else {
                                        if (K()) return void (await x(t.message));
                                        m({ deepSearchSummaryAccumulator: F, analytics: e, dispatch: r, grokModule: _, resumabilityQueue: A, method: s, errorMessage: t ? t.message : void 0 }), r(_.grokResponseError(c.NE)), (0, a.kl)(e, t), T.record("error");
                                    }
                                    r(_.updatePerformanceMetrics({ endStreamTime: Date.now() })), k[0].length > 0 && r(_.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        K = () => {
                            const e = u(),
                                t = Boolean(S.isDeepsearch) || Boolean(S.isReasoning);
                            return !L && v < (p?.numRetries || 0) && !!D && !!e && t && "POST" === g;
                        },
                        x = async (t) => {
                            f.abort(), v++, (L = !0), (0, a.mm)(e, v, t), (f = new AbortController()), await r(_.setAbortController(f)), G({ method: "GET", requestParams: { ...R, conversationId: u(), responseToChatItemId: D, streamInitialChunkWhole: !1 } });
                        };
                    return G({ method: g, requestParams: R });
                };
            function u() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function m({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: r, errorMessage: s, grokModule: o, method: n, resumabilityQueue: i }) {
                "STARTED" === t.state && (t.onAbort(), "GET" === n ? (i.resumingDispatch(() => r(o.grokResponseDeepSearchUpdate(t))), i.resumingDispatch(() => r(o.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : r(o.grokResponseDeepSearchUpdate(t)), (0, a.hq)(e, { durationMs: t.getStreamDuration(), errorMessage: s }));
            }
        },
        100326: (e, t, r) => {
            r.d(t, { X: () => i });
            r(571372);
            var s = r(791005),
                o = r.n(s),
                n = r(623494),
                a = r(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: r, dispatch: s, fromShareId: i, fromUniversalSearch: c, grokModule: d }) => (
                s(d.fetchConversationIdStart()),
                r.apiClient
                    .graphQL(o(), { fromShare: i, fromUniversalSearch: c })
                    .then((r) => {
                        const o = r.create_grok_conversation?.conversation_id,
                            i = r.create_grok_conversation?.error_code;
                        if (o) return s(d.fetchConversationIdSuccess(o, e)), o;
                        if (i) throw (s(d.fetchConversationIdFailed(a.NE)), (0, n.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            r = (0, a.bY)(t);
                        s(d.fetchConversationIdFailed(r));
                    })
            );
        },
        96275: (e, t, r) => {
            r.d(t, { d: () => p });
            r(136728);
            var s = r(506899),
                o = r(389071),
                n = r(6157),
                a = r(171697),
                i = r(303157),
                c = r(917799),
                d = r(56519),
                l = r(836255),
                E = r(189953),
                u = r(155918),
                m = r(250781);
            const p =
                (e, t) =>
                (r, p, { api: _ }) =>
                    c._O(r, { params: { restId: e }, request: _.withEndpoint(n.Z).fetchConversation })({ actionTypes: E.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (n) => {
                        if (!n?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        r((0, o.Ki)(c));
                        const _ = (0, o.YJ)(p(), c);
                        r(_.clearConversation()), r(_.fetchConversationIdSuccess(e));
                        const g = n?.grok_conversation_items_by_rest_id?.items ? [...n.grok_conversation_items_by_rest_id.items].reverse() : [];
                        g.forEach((n, c) => {
                            if (n.is_partial && c === g.length - 1)
                                return (
                                    r(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: r }) =>
                                            async (s, n, { api: a, featureSwitches: i }) => {
                                                const c = (0, o.bD)(r),
                                                    d = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: r },
                                                    l = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, m.D)({ grokModule: c, requestParams: { conversationId: r, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: d, dispatch: s, method: "GET", analytics: t, api: a, flags: { numRetries: l } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: n.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void r(_.grokResponseMetadata({ agentChatItemId: n.chat_item_id }))
                                );
                            n.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, s.Fv)(e.result, a.Z);
                                    r((0, d.dP)(t));
                                }
                            }),
                                n.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, s.Fv)(e.result, a.Z);
                                        r((0, d.dP)(t));
                                    }
                                });
                            const p = (n.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                S = (n.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let R = n.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === R.length && (R = n.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === n.sender_type && r(_.userSendMessage({ message: n.message ?? "", fileAttachments: R, bannerMessages: n.banner_message ? [n.banner_message] : void 0, postIds: p, sender: 1 })), "Agent" === n.sender_type)) {
                                if ((r(_.grokResponseTyping(n.message ?? "", "message")), n.thinking_trace)) {
                                    const e = n.thinking_trace;
                                    r(_.grokResponseTyping(e, "thinkingTrace")), (n.is_partial && c === g.length - 1) || r(_.setIsPastThinkingTrace(!0));
                                }
                                n.banner_message && r(_.addBannerMessage(n.banner_message)), R.length && r(_.grokResponseFileAttachments(R)), n.memory_references && r(_.grokResponseMemoryReferences(n.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const e = [];
                                if (n.card_attachments)
                                    for (const t of n.card_attachments) {
                                        const r = (0, u.dj)(t);
                                        r && e.push(r);
                                    }
                                else if (n.card_attachment) {
                                    const t = (0, u.dj)(n.card_attachment);
                                    t && e.push(t);
                                }
                                e.length && r(_.grokResponseCardAttachments(e));
                                let t = [],
                                    s = [],
                                    o = {};
                                n.deepsearch_args && (o = n.deepsearch_args);
                                const a = new i.Fk(o);
                                if (n.deepsearch_headers && n.deepsearch_headers.length > 0) {
                                    a.defaultFinalAnswer = n.message || "";
                                    const e = [];
                                    for (const o of n.deepsearch_headers) {
                                        const n = [];
                                        for (const e of o.steps) {
                                            const o = (e.x_post_ids || []).map((e) => e),
                                                a = (e.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                            o.length && (t.push(...o), (t = t.filter((e, t, r) => t === r.findIndex((t) => t === e))), r(l.Z.fetchMultiple(o))), a.length && (s.push(...a), (s = s.filter((e, t, r) => t === r.findIndex((t) => t.url === e.url)))), n.push({ header: e.header || "", assistant: e.assistant || "", decision: e.decision || "", finalMessage: e.final_message || "", functionCall: e.function_call || "", rawFunctionResult: e.raw_function_result || "", summary: e.summary || "", webResults: a, xPostIds: o });
                                        }
                                        e.push({ header: o.header || "", steps: n });
                                    }
                                    a.initiateFromHistoryResponses(e), r(_.grokResponseDeepSearchUpdate(a)), t.length && r(_.grokResponsePosts(t)), s.length && r(_.grokWebResults(s));
                                } else S.length && r(_.grokResponseMediaPosts(S)), p.length && r(_.grokResponsePosts(p)), n.web_results && r(_.grokWebResults([...n.web_results])), n.cited_web_results && r(_.grokCitedWebResults([...n.cited_web_results]));
                                r(_.grokResponseMetadata({ agentChatItemId: n.chat_item_id, userChatItemId: g[c - 1].chat_item_id, isDeleted: n.is_deleted })), r(_.grokResponseComplete());
                            }
                            r(_.setMode("Fun" === n.grok_mode ? E.IK.FUN : E.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, r) => {
            r.d(t, { u: () => E });
            var s = r(323265),
                o = r(389071),
                n = r(623494),
                a = r(806528),
                i = r(155918),
                c = r(958602),
                d = r(250781),
                l = r(100326);
            const E =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: r, attachments: E, mode: u, onStart: m, returnCitations: p, promptMetadata: _ = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: g = !0, features: S = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: w, toolOverrides: f, isReasoning: O, isDeepsearch: A, isImageGen: b, deepsearchArgsOverride: k, personalityId: C }) =>
                async (T, U, { api: N, featureSwitches: F }) => {
                    const y = !s.ZP.isTwitterApp() && F.isTrue("responsive_web_grok_api_enable_grok_host"),
                        M = (0, o.bD)(t);
                    let D = M.selectConversationId(U());
                    const P = s.ZP.isAndroid(),
                        v = s.ZP.isIOS();
                    if ((null != M.selectCurrentResponseMessage(U()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (D ??= await (0, l.X)({ analytics: e, api: N, dispatch: T, grokModule: M, analysisEntityId: r })), !D)) return void (0, n.Uk)(e, "conversation couln't be found or created");
                    let L;
                    const G = F.isTrue("responsive_web_grok_location_enabled");
                    if (G) {
                        const e = (0, a.fw)(U())?.position;
                        e && (L = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = u ?? M.selectMode(U()),
                        x = (0, o.F9)(U()),
                        H = M.selectConversationForAPI(U()),
                        B = (0, o.en)(U()),
                        j = { ...f };
                    if ((b && (j.imageGen = !0), B && B.toolOverrides)) {
                        const e = B.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            j[t] = e[t];
                        });
                    }
                    if (!(R || (E && 0 !== E.length))) return Promise.resolve();
                    const Z = { message: R ?? "", sender: i.CI.HUMAN, promptSource: w ?? "", ...(r ? { postIds: [r] } : void 0) };
                    E && (Z.fileAttachments = E), A && (Z.isDeepsearch = A), O && (Z.isReasoning = O);
                    const Q = { responses: H.concat(Z), systemPromptName: K, grokModelOptionId: x, conversationId: D, returnSearchResults: g, returnCitations: p, promptMetadata: _, imageGenerationCount: I, requestFeatures: S, ...(r ? { analysisEntityId: r } : void 0), geoLocation: L, enableSideBySide: !("GROK_ANALYZE" === _.promptSource || h || v || P || A || O), toolOverrides: j, isDeepsearch: A, isReasoning: O, personalityId: C, deepsearchArgs: k ?? (A ? B?.deepsearchArgs : void 0) };
                    T(M.setPromptSource(w || "")), T(M.setUsingExperiment(!1)), T(M.userSendMessage(Z, _)), (0, n.pv)(e, { conversationLength: H.length, isFileAttached: Boolean(Z.fileAttachments?.length), isDeepsearch: Q.isDeepsearch || void 0, isReasoning: Q.isReasoning || void 0 }), m?.();
                    const V = F.isTrue("responsive_web_grok_enable_add_response_keepalive") && (A || O),
                        W = F.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, d.D)({ grokModule: M, requestBody: Q, dispatch: T, analytics: e, api: N, flags: { enableLocation: G, enableGrokApiHost: y, numRetries: W, enableKeepalive: V } });
                };
        },
        63538: (e, t, r) => {
            r.d(t, { O: () => a });
            var s = r(6157),
                o = r(917799),
                n = r(189953);
            const a = (e, t) => {
                const r = e === n.IK.FUN ? "Fun" : "Normal";
                return (e, a, { api: i }) => o._O(e, { params: { grokMode: r, grokModelOptionId: t }, request: i.withEndpoint(s.Z).setPreferences })({ actionTypes: n.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        458810: (e, t, r) => {
            r.d(t, { t: () => o });
            r(571372);
            var s = r(6157);
            const o =
                (e, t) =>
                (r, o, { api: n }) =>
                    n
                        .withEndpoint(s.Z)
                        .uploadFile({ file: e, abortController: t })
                        .then((e) => {
                            const t = e[0];
                            if (!t) throw new Error("Missing file in the response");
                            return t;
                        });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => ae, A0: () => _e, BA: () => re, BS: () => F, CH: () => M, CR: () => Y, Cr: () => w, DX: () => W, Dh: () => S, Dn: () => y, En: () => d, FF: () => H, FV: () => U, Gy: () => C, HF: () => p, IK: () => o, JO: () => Q, Jt: () => se, KH: () => I, L0: () => $, Lc: () => a, OW: () => N, Oj: () => b, P9: () => Z, Q_: () => n, Qg: () => L, Qh: () => J, Sv: () => i, TY: () => v, Tv: () => q, UN: () => A, VK: () => c, WK: () => te, Ws: () => l, Xg: () => z, Xi: () => G, Y8: () => E, Yb: () => h, Yf: () => s, Yx: () => u, ZN: () => V, _i: () => ce, ar: () => B, cA: () => pe, cw: () => ne, dK: () => m, dO: () => R, dZ: () => P, dw: () => ue, f1: () => Ee, j$: () => ge, k$: () => x, lQ: () => ee, lh: () => _, lm: () => g, mq: () => Se, my: () => O, nK: () => k, o$: () => D, px: () => ie, qd: () => j, ru: () => me, ub: () => f, vc: () => K, vi: () => T, wG: () => oe, x5: () => X, yB: () => le, z2: () => de });
            const s = "grok",
                o = Object.freeze({ FUN: "fun", REGULAR: "" }),
                n = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                w = "rweb/grok/CLEAR_CONVERSATION",
                f = "rweb/grok/USER_SEND_MESSAGE",
                O = "rweb/grok/REGENERATE_RESPONSE",
                A = "rweb/grok/GROK_RESPONSE_TYPING",
                b = "rweb/grok/GROK_RESPONSE_POSTS",
                k = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                C = "rweb/grok/GROK_RESPONSE_COMPLETE",
                U = "rweb/grok/GROK_RESPONSE_ERROR",
                N = "rweb/grok/GROK_RESPONSE_METADATA",
                F = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                y = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                M = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                P = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                v = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                L = "rweb/grok/GROK_RESPONSE_UPSELL",
                G = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                x = "rweb/grok/GROK_RESPONSE_DEEPSEARCH_UPDATE",
                H = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                B = "rweb/grok/GROK_WEB_RESULTS",
                j = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Z = "rweb/grok/ABORT_MESSAGE",
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
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                se = "rweb/grok/SET_FREE_ACCESS",
                oe = "rweb/grok/SET_PREFERRED_PROMPTS",
                ne = "rweb/grok/SET_PROMPT_SOURCE",
                ae = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                de = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                le = "rweb/grok/QUERY_TYPING",
                Ee = "rweb/grok/ADD_BANNER_MESSAGE",
                ue = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                me = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                pe = "r/web/grok/SET_USING_EXPERIMENT",
                _e = "r/web/grok/SET_PREFERRED_RESPONSE",
                ge = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Se = "rweb/grok/SET_IS_PAST_THINKING_TRACE";
        },
        52570: (e, t, r) => {
            r.d(t, { NE: () => n, bY: () => l });
            var s = r(674132),
                o = r.n(s);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f.a80e507a.js.map
