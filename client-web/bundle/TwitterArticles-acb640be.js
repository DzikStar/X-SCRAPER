"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-acb640be"],
    {
        572657: (e, t, i) => {
            i.d(t, { ZP: () => c });
            var r = i(912021),
                n = i(656069),
                a = i(545521);
            const s = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                d = (e, t) => (0, a.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: s(e, t) }),
                o = (e, t) => {
                    const i = (0, r.Z)((e, t) => d(e, t));
                    return i(e, t);
                },
                c = { fetchIfNeeded: (e, t) => o(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => o(t, i).selectFetchStatus(e), selectSliceModule: o, selectArticleEntities: (e, t, i) => o(t, i).selectItems(e), articleEntitiesSliceModule: d };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => U });
            var r = i(925873),
                n = i(450681),
                a = i(656069),
                s = i(466015),
                d = i(499627),
                o = i(312771),
                c = i(56519),
                E = i(502909),
                l = i(600823),
                u = i(558369),
                p = i(390387),
                I = i(195250),
                m = i(919022),
                T = i(572657);
            const y = (0, E.ZP)({ namespace: "articleEntities" }),
                _ = (0, E.tb)(y, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(a.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var A = i(794057);
            const g = (e, t, i) => {
                    const r = T.ZP.selectSliceModule(e, i);
                    return r.selectFetchStatus(t) === o.iF.LOADED ? r : void 0;
                },
                h = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [b.updateOne(e, i)];
                },
                M = {
                    delete: (0, E.Tx)(y, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const r = i(),
                                a = (0, p.x0)(r);
                            if (a && t) {
                                const t = g(a, r, A.iN.DRAFT),
                                    i = g(a, r, A.iN.PUBLISHED);
                                return (0, n.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, E.Tx)(y, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: h }),
                    updateContent: (0, E.Tx)(y, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: h }),
                    updateTitle: (0, E.Tx)(y, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: h }),
                    create: (0, E.Tx)(y, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                r = (0, p.x0)(t);
                            if (e && r) {
                                const { entities: i, result: a } = e,
                                    s = "string" == typeof a && i?.articleEntities?.[a].rest_id,
                                    d = g(r, t, A.iN.DRAFT);
                                return i && s ? (0, n.Z)([(0, c.dP)(i), d?.injectItems([s])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, E.Tx)(y, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let r = t?.entities?.articleEntities[e];
                            const n = i(),
                                a = m.ZP.selectViewerUser(n),
                                d = a?.id_str,
                                o = (0, u.mz)(n);
                            if (r && d) {
                                r.cover_media || (r = { ...r, cover_media: void 0 });
                                const t = g(d, n, A.iN.DRAFT),
                                    i = g(d, n, A.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.injectItems([e]), t?.removeItems([e])]);
                                const c = r?.metadata?.tweet_results?.result?.rest_id,
                                    E = c ? [(0, I.ZP)(o, d, I.uh.articles).injectEntry(s.Se({ id: c, sortIndex: c }))] : [];
                                return [b.updateOne(e, r), ...a, ...E];
                            }
                        },
                    }),
                    unpublish: (0, E.Tx)(y, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let r = t?.entities?.articleEntities[e];
                            const n = i(),
                                a = m.ZP.selectViewerUser(n),
                                s = a?.id_str,
                                d = (0, u.mz)(n);
                            if (r && s) {
                                r.cover_media || (r = { ...r, cover_media: void 0 });
                                const t = g(s, n, A.iN.DRAFT),
                                    i = g(s, n, A.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.removeItems([e]), t?.injectItems([e])]);
                                const o = r?.metadata?.tweet_results?.result?.rest_id,
                                    c = o ? Object.keys(I.uh).map((e) => (0, I.ZP)(d, s, I.uh[e]).removeTweets({ [o]: !0 })) : [];
                                return [b.updateOne(e, r), ...a, ...c];
                            }
                        },
                    }),
                },
                v = "articleEntities",
                P = `rweb/${v}`,
                S = (e) => `${P}/${e}`,
                N = S("ADD_COVER_MEDIA"),
                w = S("REMOVE_COVER_MEDIA"),
                f = S("SET_PREV_ARTICLE_ENTITY_ID"),
                L = S("SET_EDITOR_STATE"),
                Z = S("SET_IS_ARTICLE_ENTITY_LOADING"),
                D = S("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                C = S("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                x = S("SET_PREV_MEDIA_ENTITY_KEYS"),
                F = S("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                R = S("SET_MEDIA_BEING_EDITED"),
                O = S("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
                K = {
                    coverMediaId: void 0,
                    editorState: ((e) => {
                        const t = r.Z.initEditorState(e);
                        return r.Z.convertEmojiToEntities(t);
                    })(),
                    prevArticleEntityId: void 0,
                    isArticleEntityLoading: !1,
                    mediaBeingEdited: void 0,
                    mediaEntityKeyBeingEdited: void 0,
                    mediaEntityKeyToFilesMap: {},
                    mediaIdToLocalMediaIdMap: {},
                    prevMediaEntityKeys: [],
                    prevArticleEntityMedia: [],
                };
            d.Z.register({
                [v]: function (e = K, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case N:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case w:
                            return { ...e, coverMediaId: void 0 };
                        case L:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case f:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case Z:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case C:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case D:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case x:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case F:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case R:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case O:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const B = (e, t) => {
                    const i = y.select(e, t),
                        r = i?.metadata?.author_results.result;
                    return "User" === r?.__typename ? r?.rest_id : void 0;
                },
                b = {
                    ...y,
                    ..._,
                    ...M,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: N }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: w }),
                    selectEditorState: (e) => e[v].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = B(e, t);
                        return i ? m.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: L }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: R }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: O }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: D }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: C }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: x }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: F }),
                    selectAuthorId: B,
                    selectCoverMediaId: (e) => e[v].coverMediaId,
                    selectMediaBeingEdited: (e) => e[v].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[v].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[v].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[v].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[v].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[v].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = y.select(e, t),
                            r = i?.metadata?.tweet_results?.result;
                        return "Tweet" === r?.__typename ? r?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = B(e, t);
                        return i ? m.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[v].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[v].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: f }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: Z }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = y.select(e, t);
                        return i?.title;
                    },
                },
                U = l.Z.register(b);
        },
        317861: (e, t, i) => {
            i.d(t, { Categories: () => I, WD: () => m, ol: () => T });
            var r = i(118717),
                n = i(174647),
                a = i(499627),
                s = i(917799),
                d = i(312771);
            const o = "gifSearch",
                c = `rweb/${o}`,
                E = {},
                l = { cursor: {}, items: [], initialFetchStatus: d.ZP.NONE, nextFetchStatus: d.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: t, getParams: i, localNamespace: r, mergeNewItems: n }) => {
                    const a = s.dg(`${c}/${r}`, "FETCH"),
                        u = (e, t, i) => {
                            const { fetchStatus: r, ...n } = i,
                                a = e[t] || {},
                                s = (a.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [t]: { ...l, ...a, ...n, [s]: r } };
                        },
                        p =
                            ({ cursor: e, query: r }) =>
                            (n, d, { api: o }) =>
                                s._O(n, { request: t(o), params: i(e, r) })({ actionTypes: a, meta: { query: r } }),
                        I = (t, i = e) => (t[o][r] || {})[i] || {};
                    return {
                        actionTypes: a,
                        fetchInitialIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, i, { api: r }) => {
                                const n = I(i(), t);
                                return n.initialFetchStatus === d.ZP.LOADING || n.items ? Promise.resolve() : e(p({ query: t }));
                            },
                        fetchNextIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, i, { api: r }) => {
                                const n = I(i(), t),
                                    { cursor: a = {} } = n;
                                return n.nextFetchStatus !== d.ZP.LOADING && a.next ? e(p({ query: t, cursor: a.next })) : Promise.resolve();
                            },
                        reducer: (e = E, t) => {
                            if (!t) return e;
                            switch (t.type) {
                                case a.REQUEST: {
                                    const { query: i } = t.meta;
                                    return u(e, i, { fetchStatus: d.ZP.LOADING });
                                }
                                case a.FAILURE: {
                                    const { query: i } = t.meta;
                                    return u(e, i, { fetchStatus: d.ZP.FAILED });
                                }
                                case a.SUCCESS: {
                                    const { cursor: i } = t.payload,
                                        { query: r } = t.meta,
                                        a = (e[r] || {}).items || [];
                                    return u(e, r, { cursor: i, fetchStatus: d.ZP.LOADED, items: n(a, t.payload) });
                                }
                                default:
                                    return e;
                            }
                        },
                        selectInitialFetchStatus: (e, t) => I(e, t).initialFetchStatus || d.ZP.NONE,
                        selectItems: (e, t) => I(e, t).items,
                        selectNextFetchStatus: (e, t) => I(e, t).nextFetchStatus || d.ZP.NONE,
                        selectQueryState: I,
                    };
                },
                p = (e) => e.filter(({ original_image: { height: e, width: t } = {} }) => e > 0 && t > 0),
                I = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(n.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, t) => [...e, ...(t?.data?.groups || [])], localNamespace: "categories" }),
                m = u({ getApiMethod: (e) => e.withEndpoint(n.Z).category, getParams: (e, t) => ({ category: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "category" }),
                T = u({ getApiMethod: (e) => e.withEndpoint(n.Z).search, getParams: (e, t) => ({ q: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "search" }),
                y = (0, r.UY)({ categories: I.reducer, category: m.reducer, search: T.reducer });
            a.Z.register({ [o]: y });
        },
        466380: (e, t, i) => {
            i.d(t, { Z: () => u });
            var r = i(807469),
                n = i(502909),
                a = i(600823);
            const s = (0, n.ZP)({ namespace: "topics" }),
                d = (0, n.tb)(s, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                o = {
                    addTopic: function (e) {
                        return l.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, r) => (i(s.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, i) => {
                    const { entityId: r } = t.meta,
                        n = e.entities[r];
                    return n ? ((e, t, i, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...r() } } } : e))(e, t, n, i) : e;
                },
                E = { follow: (0, n.Tx)(s, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(s, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(s, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(s, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                l = { ...s, ...d, ...o, ...E, customActionTypes: (0, n.X7)(E) },
                u = a.Z.register(l);
        },
        392280: (e, t, i) => {
            i.d(t, { Z: () => s });
            var r = i(33055),
                n = i(750085),
                a = i(218951);
            function s(e) {
                return (0, a.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(r.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: i, cursor: r } = t,
                                n = { count: i, userId: e, cursor: void 0 };
                            return "string" == typeof r && (n.cursor = r), n;
                        },
                    },
                    formatResponse: n.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-acb640be.48d613ea.js.map
