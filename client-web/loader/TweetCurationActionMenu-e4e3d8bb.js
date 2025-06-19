"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e4e3d8bb"],
    {
        587103: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(202784);
            const n = (0, i(523561).Z)({ loader: () => Promise.all([i.e("icons.16"), i.e("icons.25"), i.e("ondemand.LeaveThisConversation")]).then(i.bind(i, 265008)) });
        },
        376293: (e, t, i) => {
            i.d(t, { $f: () => b, KV: () => T, LI: () => S, SC: () => A, Vt: () => g, ed: () => C, op: () => k });
            var n = i(202784),
                s = i(190286),
                a = i(111677),
                o = i.n(a),
                r = i(616894),
                c = i(314948),
                d = i(516951),
                l = i(163390);
            const E = o().cfd2f35e,
                u = o().f9e45cfb,
                p = o().fcd4d489,
                y = o().a6450e84,
                m = o().ad00a739,
                T = o().a9fd20be,
                v = o().j546fb79,
                I = o().c9623eeb,
                g = o().e133be4e,
                _ = o().f5f01af6,
                A = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                b = (e) => ({ confirmButtonType: "destructiveFilled", headline: u({ screenName: e }), label: y, text: m({ screenName: e }) }),
                k = ({ blockAction: e, blockSubtext: t, source: i, testID: n, unblockAction: s, unblockSubtext: a, user: o }) => {
                    let r,
                        c = d.Z;
                    const E = S(o);
                    switch (i) {
                        case A.PROFILE:
                        case A.LIST_DETAIL:
                        case A.FOLLOWERS_LIST:
                            c = () => {
                                o.blocking ? s(E) : e(E);
                            };
                            break;
                        case A.TWEET:
                        case A.TWEET_CARET:
                        case A.RICH_FEEDBACK:
                            (r = l.uq.block),
                                (c = () => {
                                    o.blocking ? s(E) : e(E);
                                });
                    }
                    return { confirmation: E, onClick: c, testID: n, shortcutKey: r, Icon: f(o.blocking), text: h(o), subText: M({ user: o, blockSubtext: t, unblockSubtext: a }) };
                },
                f = (e) => (e ? c.default : r.default),
                M = ({ blockSubtext: e, unblockSubtext: t, user: i }) => (!i.blocking && e ? e(i.screen_name) : i.blocking ? t : void 0),
                h = (e) => (e.blocking ? I({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                S = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: v({ screenName: t }), label: g, text: _ }) : b(e.screen_name);
                    var t;
                },
                C = ({ confirmation: e, handleConfirm: t, onClose: i }) => {
                    const { confirmButtonType: a, headline: o, label: r, text: c } = e;
                    return n.createElement(s.Z, { cancelButtonLabel: E, confirmButtonLabel: r, confirmButtonType: a, headline: o, onCancel: i, onConfirm: t, text: c });
                };
        },
        350968: (e, t, i) => {
            i.d(t, { I9: () => d, rg: () => p, sp: () => l });
            var n = i(111677),
                s = i.n(n);
            const a = s().eaae42ce,
                o = s().h032d096,
                r = s().be38d25e,
                c = s().d2be9310,
                d = s().jea6b076,
                l = s().ce6fd0ec,
                E = s().af40a8e0,
                u = s().e68b09b4,
                p = (e, t, i) => (e ? { title: o, subtext: c, onAction: i, confirmLabel: u } : { title: a, subtext: r, onAction: t, confirmLabel: E });
        },
        712816: (e, t, i) => {
            i.d(t, { d: () => s });
            var n = i(111677);
            const s = { defaultToast: { text: i.n(n)().b6878b0a }, showToast: !0 };
        },
        142156: (e, t, i) => {
            i.d(t, { w: () => s });
            var n = i(111677);
            const s = { defaultToast: { text: i.n(n)().ae0c5fbe }, showToast: !0 };
        },
        879596: (e, t, i) => {
            i.d(t, { D: () => s });
            var n = i(111677);
            const s = { defaultToast: { text: i.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, i) => {
            i.d(t, { OX: () => u, Od: () => l, PN: () => p, uq: () => d, wR: () => m });
            var n = i(251067),
                s = i(522171),
                a = i(111677),
                o = i.n(a),
                r = i(912021),
                c = i(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, r.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${E} k`, universal: !1 }]), { description: o().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: d.nextItem, universal: !0 }, { description: o().g0048656, keys: d.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: d.refresh, universal: !1 }, { description: o().ha8209bc, keys: d.goHome, universal: !1 }, { description: o().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: o().eb75875e, keys: d.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: o().fa98627a, keys: d.goProfile, universal: !1 }, { description: o().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: o().b0041756, keys: d.goLists, universal: !1 }, { description: o().d4986f86, keys: d.goMessages, universal: !1 }, { description: o().h5860a68, keys: d.goGrok, universal: !1 }, { description: o().bb081ea2, keys: d.goSettings, universal: !1 }, { description: o().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: d.goToUser, universal: !1 }, { description: o().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                E = c.ZP.isMac() ? "⌘" : "CTRL",
                u = () => [
                    { description: o().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${E} Enter`, universal: !1 },
                    { description: o().e736990a, keys: d.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: d.search, universal: !1 },
                    { description: o().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: o().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: o().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: o().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: o().gb303814, keys: d.bookmark, universal: !1 },
                    { description: o().c03b1126, keys: d.mute, universal: !1 },
                    { description: o().ebd2abb2, keys: d.block, universal: !1 },
                    { description: o().hc6c5510, keys: "Enter", universal: !0 },
                    { description: o().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: o().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: o().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: o().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: o().b881560e, keys: d.video.mute, universal: !0 },
                    { description: o().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: o().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: o().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                y = (0, r.Z)((e) => {
                    const t = l(e),
                        i = u(),
                        n = p(),
                        s = {};
                    return (
                        [...i, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                m = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": y(e) } };
                };
        },
        572657: (e, t, i) => {
            i.d(t, { ZP: () => d });
            var n = i(912021),
                s = i(656069),
                a = i(545521);
            const o = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                r = (e, t) => (0, a.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(s.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: o(e, t) }),
                c = (e, t) => {
                    const i = (0, n.Z)((e, t) => r(e, t));
                    return i(e, t);
                },
                d = { fetchIfNeeded: (e, t) => c(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => c(t, i).selectFetchStatus(e), selectSliceModule: c, selectArticleEntities: (e, t, i) => c(t, i).selectItems(e), articleEntitiesSliceModule: r };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => O });
            var n = i(925873),
                s = i(450681),
                a = i(656069),
                o = i(466015),
                r = i(499627),
                c = i(312771),
                d = i(56519),
                l = i(502909),
                E = i(600823),
                u = i(558369),
                p = i(390387),
                y = i(195250),
                m = i(919022),
                T = i(572657);
            const v = (0, l.ZP)({ namespace: "articleEntities" }),
                I = (0, l.tb)(v, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(a.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var g = i(794057);
            const _ = (e, t, i) => {
                    const n = T.ZP.selectSliceModule(e, i);
                    return n.selectFetchStatus(t) === c.iF.LOADED ? n : void 0;
                },
                A = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [F.updateOne(e, i)];
                },
                b = {
                    delete: (0, l.Tx)(v, "delete", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).deleteArticleEntity,
                        context: "DELETE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const n = i(),
                                a = (0, p.x0)(n);
                            if (a && t) {
                                const t = _(a, n, g.iN.DRAFT),
                                    i = _(a, n, g.iN.PUBLISHED);
                                return (0, s.Z)([t?.removeItems([e]), i?.removeItems([e])]);
                            }
                        },
                    }),
                    updateCoverMedia: (0, l.Tx)(v, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: A }),
                    updateContent: (0, l.Tx)(v, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: A }),
                    updateTitle: (0, l.Tx)(v, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: A }),
                    create: (0, l.Tx)(v, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                n = (0, p.x0)(t);
                            if (e && n) {
                                const { entities: i, result: a } = e,
                                    o = "string" == typeof a && i?.articleEntities?.[a].rest_id,
                                    r = _(n, t, g.iN.DRAFT);
                                return i && o ? (0, s.Z)([(0, d.dP)(i), r?.injectItems([o])]) : void 0;
                            }
                        },
                    }),
                    publish: (0, l.Tx)(v, "publish", {
                        getParams: (e, { conversationControl: t, visibilitySetting: i } = {}) => ({ articleEntityId: e, conversationControl: t, visibilitySetting: i }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).publishArticleEntity,
                        context: "PUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const s = i(),
                                a = m.ZP.selectViewerUser(s),
                                r = a?.id_str,
                                c = (0, u.mz)(s);
                            if (n && r) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = _(r, s, g.iN.DRAFT),
                                    i = _(r, s, g.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.injectItems([e]), t?.removeItems([e])]);
                                const d = n?.metadata?.tweet_results?.result?.rest_id,
                                    l = d ? [(0, y.ZP)(c, r, y.uh.articles).injectEntry(o.Se({ id: d, sortIndex: d }))] : [];
                                return [F.updateOne(e, n), ...a, ...l];
                            }
                        },
                    }),
                    unpublish: (0, l.Tx)(v, "unpublish", {
                        getParams: (e) => ({ articleEntityId: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).unpublishArticleEntity,
                        context: "UNPUBLISH_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (t) => {
                            let n = t?.entities?.articleEntities[e];
                            const s = i(),
                                a = m.ZP.selectViewerUser(s),
                                o = a?.id_str,
                                r = (0, u.mz)(s);
                            if (n && o) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = _(o, s, g.iN.DRAFT),
                                    i = _(o, s, g.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.removeItems([e]), t?.injectItems([e])]);
                                const c = n?.metadata?.tweet_results?.result?.rest_id,
                                    d = c ? Object.keys(y.uh).map((e) => (0, y.ZP)(r, o, y.uh[e]).removeTweets({ [c]: !0 })) : [];
                                return [F.updateOne(e, n), ...a, ...d];
                            }
                        },
                    }),
                },
                k = "articleEntities",
                f = `rweb/${k}`,
                M = (e) => `${f}/${e}`,
                h = M("ADD_COVER_MEDIA"),
                S = M("REMOVE_COVER_MEDIA"),
                C = M("SET_PREV_ARTICLE_ENTITY_ID"),
                L = M("SET_EDITOR_STATE"),
                D = M("SET_IS_ARTICLE_ENTITY_LOADING"),
                w = M("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                P = M("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                R = M("SET_PREV_MEDIA_ENTITY_KEYS"),
                x = M("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                Z = M("SET_MEDIA_BEING_EDITED"),
                N = M("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
                B = {
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
            r.Z.register({
                [k]: function (e = B, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case h:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case S:
                            return { ...e, coverMediaId: void 0 };
                        case L:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case C:
                            return { ...e, prevArticleEntityId: t.meta?.prevArticleEntityId };
                        case D:
                            return { ...e, isArticleEntityLoading: t.meta?.isArticleEntityLoading || !1 };
                        case P:
                            return { ...e, mediaIdToLocalMediaIdMap: t.meta?.mediaIdToLocalMediaIdMap || {} };
                        case w:
                            return { ...e, mediaEntityKeyToFilesMap: t.meta?.mediaEntityKeyToFilesMap || {} };
                        case R:
                            return { ...e, prevMediaEntityKeys: t.meta?.prevMediaEntityKeys || [] };
                        case x:
                            return { ...e, prevArticleEntityMedia: t.meta?.prevArticleEntityMedia || [] };
                        case Z:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case N:
                            return { ...e, mediaEntityKeyBeingEdited: t.meta?.mediaEntityKeyBeingEdited };
                        default:
                            return e;
                    }
                },
            });
            const K = (e, t) => {
                    const i = v.select(e, t),
                        n = i?.metadata?.author_results.result;
                    return "User" === n?.__typename ? n?.rest_id : void 0;
                },
                F = {
                    ...v,
                    ...I,
                    ...b,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: h }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: S }),
                    selectEditorState: (e) => e[k].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: L }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: Z }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: N }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: w }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: P }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: R }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: x }),
                    selectAuthorId: K,
                    selectCoverMediaId: (e) => e[k].coverMediaId,
                    selectMediaBeingEdited: (e) => e[k].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[k].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[k].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[k].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[k].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[k].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = v.select(e, t),
                            n = i?.metadata?.tweet_results?.result;
                        return "Tweet" === n?.__typename ? n?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[k].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[k].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: C }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: D }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = v.select(e, t);
                        return i?.title;
                    },
                },
                O = E.Z.register(F);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e4e3d8bb.601a469a.js.map
