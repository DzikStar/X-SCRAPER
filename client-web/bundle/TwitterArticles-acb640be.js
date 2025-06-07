"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-acb640be"],
    {
        572657: (e, t, i) => {
            i.d(t, { ZP: () => c });
            var n = i(912021),
                d = i(484636),
                r = i(545521);
            const a = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                o = (e, t) => (0, r.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(d.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: a(e, t) }),
                s = (e, t) => {
                    const i = (0, n.Z)((e, t) => o(e, t));
                    return i(e, t);
                },
                c = { fetchIfNeeded: (e, t) => s(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => s(t, i).selectFetchStatus(e), selectSliceModule: s, selectArticleEntities: (e, t, i) => s(t, i).selectItems(e), articleEntitiesSliceModule: o };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => Y });
            var n = i(925873),
                d = i(450681),
                r = i(484636),
                a = i(466015),
                o = i(499627),
                s = i(312771),
                c = i(56519),
                E = i(502909),
                l = i(600823),
                p = i(558369),
                I = i(390387),
                T = i(195250),
                _ = i(919022),
                m = i(572657);
            const u = (0, E.ZP)({ namespace: "articleEntities" }),
                y = (0, E.tb)(u, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(r.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var A = i(794057);
            const M = (e, t, i) => {
                    const n = m.ZP.selectSliceModule(e, i);
                    return n.selectFetchStatus(t) === s.iF.LOADED ? n : void 0;
                },
                v = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [b.updateOne(e, i)];
                },
                g = {
                    delete: (0, E.Tx)(u, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const n = i(),
                                r = (0, I.x0)(n);
                            if (r && t) {
                                const t = M(r, n, A.iN.DRAFT),
                                    i = M(r, n, A.iN.PUBLISHED);
                                return (0, d.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, E.Tx)(u, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: v }),
                    updateContent: (0, E.Tx)(u, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: v }),
                    updateTitle: (0, E.Tx)(u, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: v }),
                    create: (0, E.Tx)(u, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                n = (0, I.x0)(t);
                            if (e && n) {
                                const { entities: i, result: r } = e,
                                    a = "string" == typeof r && i?.articleEntities?.[r].rest_id,
                                    o = M(n, t, A.iN.DRAFT);
                                return i && a ? (0, d.Z)([(0, c.dP)(i), o?.injectItems([a])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, E.Tx)(u, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const d = i(),
                                r = _.ZP.selectViewerUser(d),
                                o = r?.id_str,
                                s = (0, p.mz)(d);
                            if (n && o) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(o, d, A.iN.DRAFT),
                                    i = M(o, d, A.iN.PUBLISHED);
                                let r = [];
                                t && i && (r = [i?.injectItems([e]), t?.removeItems([e])]);
                                const c = n?.metadata?.tweet_results?.result?.rest_id,
                                    E = c ? [(0, T.ZP)(s, o, T.uh.articles).injectEntry(a.Se({ id: c, sortIndex: c }))] : [];
                                return [b.updateOne(e, n), ...r, ...E];
                            }
                        },
                    }),
                    unpublish: (0, E.Tx)(u, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const d = i(),
                                r = _.ZP.selectViewerUser(d),
                                a = r?.id_str,
                                o = (0, p.mz)(d);
                            if (n && a) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(a, d, A.iN.DRAFT),
                                    i = M(a, d, A.iN.PUBLISHED);
                                let r = [];
                                t && i && (r = [i?.removeItems([e]), t?.injectItems([e])]);
                                const s = n?.metadata?.tweet_results?.result?.rest_id,
                                    c = s ? Object.keys(T.uh).map((e) => (0, T.ZP)(o, a, T.uh[e]).removeTweets({ [s]: !0 })) : [];
                                return [b.updateOne(e, n), ...r, ...c];
                            }
                        },
                    }),
                },
                h = "articleEntities",
                P = `rweb/${h}`,
                S = (e) => `${P}/${e}`,
                L = S("ADD_COVER_MEDIA"),
                w = S("REMOVE_COVER_MEDIA"),
                C = S("SET_PREV_ARTICLE_ENTITY_ID"),
                f = S("SET_EDITOR_STATE"),
                Z = S("SET_IS_ARTICLE_ENTITY_LOADING"),
                D = S("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                N = S("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                R = S("SET_PREV_MEDIA_ENTITY_KEYS"),
                x = S("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                O = S("SET_MEDIA_BEING_EDITED"),
                K = S("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
                F = {
                    coverMediaId: void 0,
                    editorState: ((e) => {
                        const t = n.Z.initEditorState(e);
                        return n.Z.convertEmojiToEntities(t);
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
            o.Z.register({
                [h]: function (e = F, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case L:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case w:
                            return { ...e, coverMediaId: void 0 };
                        case f:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case C:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case Z:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case N:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case D:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case R:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case x:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case O:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case K:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const B = (e, t) => {
                    const i = u.select(e, t),
                        n = i?.metadata?.author_results.result;
                    return "User" === n?.__typename ? n?.rest_id : void 0;
                },
                b = {
                    ...u,
                    ...y,
                    ...g,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: L }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: w }),
                    selectEditorState: (e) => e[h].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = B(e, t);
                        return i ? _.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: f }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: O }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: K }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: D }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: N }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: R }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: x }),
                    selectAuthorId: B,
                    selectCoverMediaId: (e) => e[h].coverMediaId,
                    selectMediaBeingEdited: (e) => e[h].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[h].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[h].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[h].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[h].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[h].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = u.select(e, t),
                            n = i?.metadata?.tweet_results?.result;
                        return "Tweet" === n?.__typename ? n?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = B(e, t);
                        return i ? _.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[h].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[h].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: C }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: Z }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = u.select(e, t);
                        return i?.title;
                    },
                },
                Y = l.Z.register(b);
        },
        466380: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(807469),
                d = i(502909),
                r = i(600823);
            const a = (0, d.ZP)({ namespace: "topics" }),
                o = (0, d.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                s = {
                    addTopic: function (e) {
                        return l.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, n) => (i(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, i) => {
                    const { entityId: n } = t.meta,
                        d = e.entities[n];
                    return d ? ((e, t, i, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...n() } } } : e))(e, t, d, i) : e;
                },
                E = { follow: (0, d.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, d.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, d.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, d.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                l = { ...a, ...o, ...s, ...E, customActionTypes: (0, d.X7)(E) },
                p = r.Z.register(l);
        },
        392280: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(33055),
                d = i(750085),
                r = i(218951);
            function a(e) {
                return (0, r.Z)({
                    timelineId: `favorites-${e}`,
                    network: {
                        getEndpoint: (e) => e.withEndpoint(n.Z).fetchLikes,
                        getEndpointParams: (t) => {
                            const { count: i, cursor: n } = t,
                                d = { count: i, userId: e, cursor: void 0 };
                            return "string" == typeof n && (d.cursor = n), d;
                        },
                    },
                    formatResponse: d.Z,
                    context: "FETCH_LIKES_TIMELINE",
                    perfKey: "likes-GraphQL",
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-acb640be.37c6030a.js.map
