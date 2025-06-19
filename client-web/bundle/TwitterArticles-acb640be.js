"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-acb640be"],
    {
        572657: (e, t, i) => {
            i.d(t, { ZP: () => o });
            var a = i(912021),
                r = i(484636),
                s = i(545521);
            const n = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                d = (e, t) => (0, s.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: n(e, t) }),
                c = (e, t) => {
                    const i = (0, a.Z)((e, t) => d(e, t));
                    return i(e, t);
                },
                o = { fetchIfNeeded: (e, t) => c(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => c(t, i).selectFetchStatus(e), selectSliceModule: c, selectArticleEntities: (e, t, i) => c(t, i).selectItems(e), articleEntitiesSliceModule: d };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => Y });
            var a = i(925873),
                r = i(450681),
                s = i(484636),
                n = i(466015),
                d = i(499627),
                c = i(312771),
                o = i(56519),
                E = i(502909),
                l = i(600823),
                u = i(558369),
                p = i(390387),
                m = i(195250),
                I = i(919022),
                y = i(572657);
            const T = (0, E.ZP)({ namespace: "articleEntities" }),
                A = (0, E.tb)(T, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(s.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var _ = i(794057);
            const M = (e, t, i) => {
                    const a = y.ZP.selectSliceModule(e, i);
                    return a.selectFetchStatus(t) === c.iF.LOADED ? a : void 0;
                },
                h = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [b.updateOne(e, i)];
                },
                g = {
                    delete: (0, E.Tx)(T, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(s.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const a = i(),
                                s = (0, p.x0)(a);
                            if (s && t) {
                                const t = M(s, a, _.iN.DRAFT),
                                    i = M(s, a, _.iN.PUBLISHED);
                                return (0, r.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, E.Tx)(T, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(s.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: h }),
                    updateContent: (0, E.Tx)(T, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(s.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: h }),
                    updateTitle: (0, E.Tx)(T, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(s.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: h }),
                    create: (0, E.Tx)(T, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(s.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                a = (0, p.x0)(t);
                            if (e && a) {
                                const { entities: i, result: s } = e,
                                    n = "string" == typeof s && i?.articleEntities?.[s].rest_id,
                                    d = M(a, t, _.iN.DRAFT);
                                return i && n ? (0, r.Z)([(0, o.dP)(i), d?.injectItems([n])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, E.Tx)(T, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(s.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let a = t?.entities?.articleEntities[e];
                            const r = i(),
                                s = I.ZP.selectViewerUser(r),
                                d = s?.id_str,
                                c = (0, u.mz)(r);
                            if (a && d) {
                                a.cover_media || (a = { ...a, cover_media: void 0 });
                                const t = M(d, r, _.iN.DRAFT),
                                    i = M(d, r, _.iN.PUBLISHED);
                                let s = [];
                                t && i && (s = [i?.injectItems([e]), t?.removeItems([e])]);
                                const o = a?.metadata?.tweet_results?.result?.rest_id,
                                    E = o ? [(0, m.ZP)(c, d, m.uh.articles).injectEntry(n.Se({ id: o, sortIndex: o }))] : [];
                                return [b.updateOne(e, a), ...s, ...E];
                            }
                        },
                    }),
                    unpublish: (0, E.Tx)(T, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(s.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let a = t?.entities?.articleEntities[e];
                            const r = i(),
                                s = I.ZP.selectViewerUser(r),
                                n = s?.id_str,
                                d = (0, u.mz)(r);
                            if (a && n) {
                                a.cover_media || (a = { ...a, cover_media: void 0 });
                                const t = M(n, r, _.iN.DRAFT),
                                    i = M(n, r, _.iN.PUBLISHED);
                                let s = [];
                                t && i && (s = [i?.removeItems([e]), t?.injectItems([e])]);
                                const c = a?.metadata?.tweet_results?.result?.rest_id,
                                    o = c ? Object.keys(m.uh).map((e) => (0, m.ZP)(d, n, m.uh[e]).removeTweets({ [c]: !0 })) : [];
                                return [b.updateOne(e, a), ...s, ...o];
                            }
                        },
                    }),
                },
                v = "articleEntities",
                S = `rweb/${v}`,
                P = (e) => `${S}/${e}`,
                N = P("ADD_COVER_MEDIA"),
                L = P("REMOVE_COVER_MEDIA"),
                Z = P("SET_PREV_ARTICLE_ENTITY_ID"),
                D = P("SET_EDITOR_STATE"),
                f = P("SET_IS_ARTICLE_ENTITY_LOADING"),
                w = P("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                C = P("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                R = P("SET_PREV_MEDIA_ENTITY_KEYS"),
                F = P("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                x = P("SET_MEDIA_BEING_EDITED"),
                K = P("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
                O = {
                    coverMediaId: void 0,
                    editorState: ((e) => {
                        const t = a.Z.initEditorState(e);
                        return a.Z.convertEmojiToEntities(t);
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
                [v]: function (e = O, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case N:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case L:
                            return { ...e, coverMediaId: void 0 };
                        case D:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case Z:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case f:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case C:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case w:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case R:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case F:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case x:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case K:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const B = (e, t) => {
                    const i = T.select(e, t),
                        a = i?.metadata?.author_results.result;
                    return "User" === a?.__typename ? a?.rest_id : void 0;
                },
                b = {
                    ...T,
                    ...A,
                    ...g,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: N }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: L }),
                    selectEditorState: (e) => e[v].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = B(e, t);
                        return i ? I.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: D }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: x }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: K }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: w }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: C }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: R }),
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
                        const i = T.select(e, t),
                            a = i?.metadata?.tweet_results?.result;
                        return "Tweet" === a?.__typename ? a?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = B(e, t);
                        return i ? I.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[v].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[v].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: Z }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: f }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = T.select(e, t);
                        return i?.title;
                    },
                },
                Y = l.Z.register(b);
        },
        317861: (e, t, i) => {
            i.d(t, { Categories: () => m, WD: () => I, ol: () => y });
            var a = i(118717),
                r = i(174647),
                s = i(499627),
                n = i(917799),
                d = i(312771);
            const c = "gifSearch",
                o = `rweb/${c}`,
                E = {},
                l = { cursor: {}, items: [], initialFetchStatus: d.ZP.NONE, nextFetchStatus: d.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: t, getParams: i, localNamespace: a, mergeNewItems: r }) => {
                    const s = n.dg(`${o}/${a}`, "FETCH"),
                        u = (e, t, i) => {
                            const { fetchStatus: a, ...r } = i,
                                s = e[t] || {},
                                n = (s.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [t]: { ...l, ...s, ...r, [n]: a } };
                        },
                        p =
                            ({ cursor: e, query: a }) =>
                            (r, d, { api: c }) =>
                                n._O(r, { request: t(c), params: i(e, a) })({ actionTypes: s, meta: { query: a } }),
                        m = (t, i = e) => (t[c][a] || {})[i] || {};
                    return {
                        actionTypes: s,
                        fetchInitialIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, i, { api: a }) => {
                                const r = m(i(), t);
                                return r.initialFetchStatus === d.ZP.LOADING || r.items ? Promise.resolve() : e(p({ query: t }));
                            },
                        fetchNextIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, i, { api: a }) => {
                                const r = m(i(), t),
                                    { cursor: s = {} } = r;
                                return r.nextFetchStatus !== d.ZP.LOADING && s.next ? e(p({ query: t, cursor: s.next })) : Promise.resolve();
                            },
                        reducer: (e = E, t) => {
                            if (!t) return e;
                            switch (t.type) {
                                case s.REQUEST: {
                                    const { query: i } = t.meta;
                                    return u(e, i, { fetchStatus: d.ZP.LOADING });
                                }
                                case s.FAILURE: {
                                    const { query: i } = t.meta;
                                    return u(e, i, { fetchStatus: d.ZP.FAILED });
                                }
                                case s.SUCCESS: {
                                    const { cursor: i } = t.payload,
                                        { query: a } = t.meta,
                                        s = (e[a] || {}).items || [];
                                    return u(e, a, { cursor: i, fetchStatus: d.ZP.LOADED, items: r(s, t.payload) });
                                }
                                default:
                                    return e;
                            }
                        },
                        selectInitialFetchStatus: (e, t) => m(e, t).initialFetchStatus || d.ZP.NONE,
                        selectItems: (e, t) => m(e, t).items,
                        selectNextFetchStatus: (e, t) => m(e, t).nextFetchStatus || d.ZP.NONE,
                        selectQueryState: m,
                    };
                },
                p = (e) => e.filter(({ original_image: { height: e, width: t } = {} }) => e > 0 && t > 0),
                m = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(r.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, t) => [...e, ...(t?.data?.groups || [])], localNamespace: "categories" }),
                I = u({ getApiMethod: (e) => e.withEndpoint(r.Z).category, getParams: (e, t) => ({ category: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "category" }),
                y = u({ getApiMethod: (e) => e.withEndpoint(r.Z).search, getParams: (e, t) => ({ q: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "search" }),
                T = (0, a.UY)({ categories: m.reducer, category: I.reducer, search: y.reducer });
            s.Z.register({ [c]: T });
        },
        392280: (e, t, i) => {
            i.d(t, { Z: () => n });
            var a = i(33055),
                r = i(750085),
                s = i(218951);
            function n(e) {
                return (0, s.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(a.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: i, cursor: a } = t,
                                r = { count: i, userId: e, cursor: void 0 };
                            return "string" == typeof a && (r.cursor = a), r;
                        },
                    },
                    formatResponse: r.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-acb640be.b29bd49a.js.map
