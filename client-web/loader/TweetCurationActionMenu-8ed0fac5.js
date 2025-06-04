"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-8ed0fac5"],
    {
        545334: (e, t, i) => {
            i.d(t, { d: () => a });
            var n = i(111677);
            const a = i.n(n)().gf5e9ea6;
        },
        350968: (e, t, i) => {
            i.d(t, { I9: () => o, rg: () => I, sp: () => E });
            var n = i(111677),
                a = i.n(n);
            const r = a().eaae42ce,
                s = a().h032d096,
                d = a().be38d25e,
                c = a().d2be9310,
                o = a().jea6b076,
                E = a().ce6fd0ec,
                l = a().af40a8e0,
                T = a().e68b09b4,
                I = (e, t, i) => (e ? { title: s, subtext: c, onAction: i, confirmLabel: T } : { title: r, subtext: d, onAction: t, confirmLabel: l });
        },
        916585: (e, t, i) => {
            i.d(t, { k: () => s });
            var n = i(111677),
                a = i.n(n),
                r = i(437358);
            const s = (e, t) => {
                const { id_str: i, screen_name: n } = e,
                    s = (0, a().d78131b9)({ screenName: n });
                return { Icon: r.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: i } }, onClick: t };
            };
        },
        847607: (e, t, i) => {
            i.d(t, { Aq: () => l, FK: () => A, GS: () => d, N1: () => I, PY: () => T, X6: () => y, cm: () => c });
            i(202784);
            var n = i(111677),
                a = i.n(n),
                r = i(391366),
                s = i(40904);
            const d = a().hb568af4,
                c = a().bb1cbeb6,
                o = (a().h2f62206, a().e67b2d65),
                E = a().f05597b3,
                l = (e) => o({ screenName: e }),
                T = (e) => E({ screenName: e }),
                I = (e, t, i) => {
                    const { muting: n, screen_name: a } = e;
                    return { text: n ? T(a) : l(a), onClick: n ? i : t, Icon: n ? r.default : s.default };
                },
                u = a().h59f52ee,
                m = a().eea0cbee,
                p = a().i29533b3,
                _ = a().h129c3c3,
                A = (e) => (e ? ((e) => p({ screenName: e }))(e) : u),
                y = (e) => (e ? ((e) => _({ screenName: e }))(e) : m);
        },
        142156: (e, t, i) => {
            i.d(t, { w: () => a });
            var n = i(111677);
            const a = { defaultToast: { text: i.n(n)().ae0c5fbe }, showToast: !0 };
        },
        572657: (e, t, i) => {
            i.d(t, { ZP: () => o });
            var n = i(912021),
                a = i(484636),
                r = i(545521);
            const s = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                d = (e, t) => (0, r.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(a.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: s(e, t) }),
                c = (e, t) => {
                    const i = (0, n.Z)((e, t) => d(e, t));
                    return i(e, t);
                },
                o = { fetchIfNeeded: (e, t) => c(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => c(t, i).selectFetchStatus(e), selectSliceModule: c, selectArticleEntities: (e, t, i) => c(t, i).selectItems(e), articleEntitiesSliceModule: d };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => U });
            var n = i(925873),
                a = i(450681),
                r = i(484636),
                s = i(466015),
                d = i(499627),
                c = i(312771),
                o = i(56519),
                E = i(502909),
                l = i(600823),
                T = i(558369),
                I = i(390387),
                u = i(195250),
                m = i(919022),
                p = i(572657);
            const _ = (0, E.ZP)({ namespace: "articleEntities" }),
                A = (0, E.tb)(_, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(r.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var y = i(794057);
            const M = (e, t, i) => {
                    const n = p.ZP.selectSliceModule(e, i);
                    return n.selectFetchStatus(t) === c.iF.LOADED ? n : void 0;
                },
                v = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [x.updateOne(e, i)];
                },
                f = {
                    delete: (0, E.Tx)(_, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const n = i(),
                                r = (0, I.x0)(n);
                            if (r && t) {
                                const t = M(r, n, y.iN.DRAFT),
                                    i = M(r, n, y.iN.PUBLISHED);
                                return (0, a.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, E.Tx)(_, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: v }),
                    updateContent: (0, E.Tx)(_, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: v }),
                    updateTitle: (0, E.Tx)(_, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(r.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: v }),
                    create: (0, E.Tx)(_, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                n = (0, I.x0)(t);
                            if (e && n) {
                                const { entities: i, result: r } = e,
                                    s = "string" == typeof r && i?.articleEntities?.[r].rest_id,
                                    d = M(n, t, y.iN.DRAFT);
                                return i && s ? (0, a.Z)([(0, o.dP)(i), d?.injectItems([s])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, E.Tx)(_, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const a = i(),
                                r = m.ZP.selectViewerUser(a),
                                d = r?.id_str,
                                c = (0, T.mz)(a);
                            if (n && d) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(d, a, y.iN.DRAFT),
                                    i = M(d, a, y.iN.PUBLISHED);
                                let r = [];
                                t && i && (r = [i?.injectItems([e]), t?.removeItems([e])]);
                                const o = n?.metadata?.tweet_results?.result?.rest_id,
                                    E = o ? [(0, u.ZP)(c, d, u.uh.articles).injectEntry(s.Se({ id: o, sortIndex: o }))] : [];
                                return [x.updateOne(e, n), ...r, ...E];
                            }
                        },
                    }),
                    unpublish: (0, E.Tx)(_, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(r.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const a = i(),
                                r = m.ZP.selectViewerUser(a),
                                s = r?.id_str,
                                d = (0, T.mz)(a);
                            if (n && s) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = M(s, a, y.iN.DRAFT),
                                    i = M(s, a, y.iN.PUBLISHED);
                                let r = [];
                                t && i && (r = [i?.removeItems([e]), t?.injectItems([e])]);
                                const c = n?.metadata?.tweet_results?.result?.rest_id,
                                    o = c ? Object.keys(u.uh).map((e) => (0, u.ZP)(d, s, u.uh[e]).removeTweets({ [c]: !0 })) : [];
                                return [x.updateOne(e, n), ...r, ...o];
                            }
                        },
                    }),
                },
                h = "articleEntities",
                L = `rweb/${h}`,
                D = (e) => `${L}/${e}`,
                S = D("ADD_COVER_MEDIA"),
                g = D("REMOVE_COVER_MEDIA"),
                P = D("SET_PREV_ARTICLE_ENTITY_ID"),
                R = D("SET_EDITOR_STATE"),
                C = D("SET_IS_ARTICLE_ENTITY_LOADING"),
                b = D("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                w = D("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                N = D("SET_PREV_MEDIA_ENTITY_KEYS"),
                Z = D("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                O = D("SET_MEDIA_BEING_EDITED"),
                B = D("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
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
            d.Z.register({
                [h]: function (e = F, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case S:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case g:
                            return { ...e, coverMediaId: void 0 };
                        case R:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case P:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case C:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case w:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case b:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case N:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case Z:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case O:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case B:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const K = (e, t) => {
                    const i = _.select(e, t),
                        n = i?.metadata?.author_results.result;
                    return "User" === n?.__typename ? n?.rest_id : void 0;
                },
                x = {
                    ..._,
                    ...A,
                    ...f,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: S }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: g }),
                    selectEditorState: (e) => e[h].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: R }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: O }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: B }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: b }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: w }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: N }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: Z }),
                    selectAuthorId: K,
                    selectCoverMediaId: (e) => e[h].coverMediaId,
                    selectMediaBeingEdited: (e) => e[h].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[h].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[h].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[h].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[h].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[h].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = _.select(e, t),
                            n = i?.metadata?.tweet_results?.result;
                        return "Tweet" === n?.__typename ? n?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[h].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[h].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: P }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: C }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = _.select(e, t);
                        return i?.title;
                    },
                },
                U = l.Z.register(x);
        },
        794057: (e, t, i) => {
            i.d(t, { C0: () => s, DC: () => n, _e: () => r, iN: () => o, kd: () => d, pc: () => a });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                s = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                d = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                o = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        629196: (e, t, i) => {
            i.d(t, { r: () => o });
            i(136728);
            var n = i(161821),
                a = i(390387),
                r = i(836255),
                s = i(255117),
                d = i(166506),
                c = i(919022);
            const o =
                (e, t) =>
                (i, o, { api: E, featureSwitches: l }) =>
                    i(c.ZP.mute(e, t)).then(() => {
                        const t = o(),
                            c = (0, n.Z)(r.Z.selectAll(t)).reduce((i, n) => {
                                if (null != n)
                                    if (n.user === e) i[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const a = r.Z.select(t, n.retweeted_status);
                                        a?.user === e && (i[n.id_str] = !0);
                                    }
                                return i;
                            }, {}),
                            E = (0, a._h)(o()),
                            l = E ? [(0, s.ZP)({ useLatest: !1, userId: E }).removeTweets(c), (0, s.ZP)({ useLatest: !0, userId: E }).removeTweets(c)] : [],
                            T = (0, d.k9)();
                        if (T.selectInitialFetchStatus(t) && !T.selectCanRefresh(t)) {
                            const i = (0, d.f8)(e, t, T);
                            i && l.push(i);
                        }
                        return i(l);
                    });
        },
        166506: (e, t, i) => {
            i.d(t, { du: () => E, f8: () => l, k9: () => o });
            var n = i(503768),
                a = i(750085),
                r = i(962741),
                s = i(466015),
                d = i(919022),
                c = i(218951);
            const o = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: a.Z }),
                E = (e) => (t, i) => {
                    const n = i();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === r.ZP.User ? e.content.id : "",
                                    i = d.ZP.select(n, t);
                                return i && !i.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                l = (e, t, i) => {
                    if (!i.selectEntries(t).find((t) => t.type === r.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return i.injectEntry(n);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-8ed0fac5.7be28a5a.js.map
