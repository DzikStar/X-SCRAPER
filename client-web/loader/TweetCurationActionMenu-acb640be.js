"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-acb640be"],
    {
        572657: (e, t, i) => {
            i.d(t, { ZP: () => E });
            var n = i(912021),
                r = i(656069),
                a = i(545521);
            const d = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                s = (e, t) => (0, a.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: d(e, t) }),
                c = (e, t) => {
                    const i = (0, n.Z)((e, t) => s(e, t));
                    return i(e, t);
                },
                E = { fetchIfNeeded: (e, t) => c(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => c(t, i).selectFetchStatus(e), selectSliceModule: c, selectArticleEntities: (e, t, i) => c(t, i).selectItems(e), articleEntitiesSliceModule: s };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => x });
            var n = i(925873),
                r = i(450681),
                a = i(656069),
                d = i(466015),
                s = i(499627),
                c = i(312771),
                E = i(56519),
                o = i(502909),
                l = i(600823),
                T = i(558369),
                I = i(390387),
                p = i(195250),
                _ = i(919022),
                u = i(572657);
            const A = (0, o.ZP)({ namespace: "articleEntities" }),
                y = (0, o.tb)(A, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(a.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var m = i(794057);
            const M = (e, t, i) => {
                    const n = u.ZP.selectSliceModule(e, i);
                    return n.selectFetchStatus(t) === c.iF.LOADED ? n : void 0;
                },
                v = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [U.updateOne(e, i)];
                },
                D = {
                    delete: (0, o.Tx)(A, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const n = i(),
                                a = (0, I.x0)(n);
                            if (a && t) {
                                const t = M(a, n, m.iN.DRAFT),
                                    i = M(a, n, m.iN.PUBLISHED);
                                return (0, r.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, o.Tx)(A, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: v }),
                    updateContent: (0, o.Tx)(A, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: v }),
                    updateTitle: (0, o.Tx)(A, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: v }),
                    create: (0, o.Tx)(A, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                n = (0, I.x0)(t);
                            if (e && n) {
                                const { entities: i, result: a } = e,
                                    d = "string" == typeof a && i?.articleEntities?.[a].rest_id,
                                    s = M(n, t, m.iN.DRAFT);
                                return i && d ? (0, r.Z)([(0, E.dP)(i), s?.injectItems([d])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, o.Tx)(A, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const r = i(),
                                a = _.ZP.selectViewerUser(r),
                                s = a?.id_str,
                                c = (0, T.mz)(r);
                            if (n && s) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(s, r, m.iN.DRAFT),
                                    i = M(s, r, m.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.injectItems([e]), t?.removeItems([e])]);
                                const E = n?.metadata?.tweet_results?.result?.rest_id,
                                    o = E ? [(0, p.ZP)(c, s, p.uh.articles).injectEntry(d.Se({ id: E, sortIndex: E }))] : [];
                                return [U.updateOne(e, n), ...a, ...o];
                            }
                        },
                    }),
                    unpublish: (0, o.Tx)(A, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const r = i(),
                                a = _.ZP.selectViewerUser(r),
                                d = a?.id_str,
                                s = (0, T.mz)(r);
                            if (n && d) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(d, r, m.iN.DRAFT),
                                    i = M(d, r, m.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.removeItems([e]), t?.injectItems([e])]);
                                const c = n?.metadata?.tweet_results?.result?.rest_id,
                                    E = c ? Object.keys(p.uh).map((e) => (0, p.ZP)(s, d, p.uh[e]).removeTweets({ [c]: !0 })) : [];
                                return [U.updateOne(e, n), ...a, ...E];
                            }
                        },
                    }),
                },
                L = "articleEntities",
                h = `rweb/${L}`,
                S = (e) => `${h}/${e}`,
                R = S("ADD_COVER_MEDIA"),
                P = S("REMOVE_COVER_MEDIA"),
                g = S("SET_PREV_ARTICLE_ENTITY_ID"),
                f = S("SET_EDITOR_STATE"),
                C = S("SET_IS_ARTICLE_ENTITY_LOADING"),
                Z = S("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                w = S("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                N = S("SET_PREV_MEDIA_ENTITY_KEYS"),
                O = S("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                B = S("SET_MEDIA_BEING_EDITED"),
                F = S("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
                K = {
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
            s.Z.register({
                [L]: function (e = K, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case R:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case P:
                            return { ...e, coverMediaId: void 0 };
                        case f:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case g:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case C:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case w:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case Z:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case N:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case O:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case B:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case F:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const b = (e, t) => {
                    const i = A.select(e, t),
                        n = i?.metadata?.author_results.result;
                    return "User" === n?.__typename ? n?.rest_id : void 0;
                },
                U = {
                    ...A,
                    ...y,
                    ...D,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: R }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: P }),
                    selectEditorState: (e) => e[L].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = b(e, t);
                        return i ? _.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: f }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: B }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: F }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: Z }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: w }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: N }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: O }),
                    selectAuthorId: b,
                    selectCoverMediaId: (e) => e[L].coverMediaId,
                    selectMediaBeingEdited: (e) => e[L].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[L].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[L].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[L].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[L].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[L].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = A.select(e, t),
                            n = i?.metadata?.tweet_results?.result;
                        return "Tweet" === n?.__typename ? n?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = b(e, t);
                        return i ? _.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[L].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[L].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: g }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: C }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = A.select(e, t);
                        return i?.title;
                    },
                },
                x = l.Z.register(U);
        },
        794057: (e, t, i) => {
            i.d(t, { C0: () => d, DC: () => n, _e: () => a, iN: () => E, kd: () => s, pc: () => r });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                r = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                d = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                E = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        629196: (e, t, i) => {
            i.d(t, { r: () => E });
            i(136728);
            var n = i(161821),
                r = i(390387),
                a = i(836255),
                d = i(255117),
                s = i(166506),
                c = i(919022);
            const E =
                (e, t) =>
                (i, E, { api: o, featureSwitches: l }) =>
                    i(c.ZP.mute(e, t)).then(() => {
                        const t = E(),
                            c = (0, n.Z)(a.Z.selectAll(t)).reduce((i, n) => {
                                if (null != n)
                                    if (n.user === e) i[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(t, n.retweeted_status);
                                        r?.user === e && (i[n.id_str] = !0);
                                    }
                                return i;
                            }, {}),
                            o = (0, r._h)(E()),
                            l = o ? [(0, d.ZP)({ useLatest: !1, userId: o }).removeTweets(c), (0, d.ZP)({ useLatest: !0, userId: o }).removeTweets(c)] : [],
                            T = (0, s.k9)();
                        if (T.selectInitialFetchStatus(t) && !T.selectCanRefresh(t)) {
                            const i = (0, s.f8)(e, t, T);
                            i && l.push(i);
                        }
                        return i(l);
                    });
        },
        166506: (e, t, i) => {
            i.d(t, { du: () => o, f8: () => l, k9: () => E });
            var n = i(503768),
                r = i(750085),
                a = i(962741),
                d = i(466015),
                s = i(919022),
                c = i(218951);
            const E = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                o = (e) => (t, i) => {
                    const n = i();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    i = s.ZP.select(n, t);
                                return i && !i.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                l = (e, t, i) => {
                    if (!i.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, d.OD)(e),
                            n = (0, d.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return i.injectEntry(n);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-acb640be.f261a40a.js.map
