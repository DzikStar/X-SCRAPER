"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e4e3d8bb"],
    {
        587103: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(202784);
            const n = (0, i(523561).Z)({ loader: () => Promise.all([i.e("icons.6"), i.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-88dc685d"), i.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-271d17b1"), i.e("ondemand.LeaveThisConversation")]).then(i.bind(i, 265008)) });
        },
        376293: (e, t, i) => {
            i.d(t, { $f: () => f, KV: () => v, LI: () => C, SC: () => A, Vt: () => _, ed: () => D, op: () => M });
            var n = i(202784),
                s = i(190286),
                a = i(111677),
                r = i.n(a),
                o = i(616894),
                d = i(314948),
                c = i(516951),
                l = i(163390);
            const u = r().cfd2f35e,
                E = r().f9e45cfb,
                p = r().fcd4d489,
                y = r().a6450e84,
                m = r().g353ad73,
                T = r().ad00a739,
                v = r().a9fd20be,
                I = r().j546fb79,
                g = r().c9623eeb,
                _ = r().e133be4e,
                b = r().he43bca4,
                k = r().f5f01af6,
                A = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                f = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: E({ screenName: e }), label: y, text: t ? T({ screenName: e }) : m({ screenName: e }) }),
                M = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: i, source: n, testID: s, unblockAction: a, unblockSubtext: r, user: o }) => {
                    let d,
                        u = c.Z;
                    const E = C(o, i);
                    switch (n) {
                        case A.PROFILE:
                        case A.LIST_DETAIL:
                        case A.FOLLOWERS_LIST:
                            u = () => {
                                o.blocking ? a(E) : e(E);
                            };
                            break;
                        case A.TWEET:
                        case A.TWEET_CARET:
                        case A.RICH_FEEDBACK:
                            (d = l.uq.block),
                                (u = () => {
                                    o.blocking ? a(E) : e(E);
                                });
                    }
                    return { confirmation: E, onClick: u, testID: s, shortcutKey: d, Icon: h(o.blocking), text: L(o), subText: S({ user: o, blockSubtext: t, unblockSubtext: r }) };
                },
                h = (e) => (e ? d.default : o.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: i }) => (!i.blocking && e ? e(i.screen_name) : i.blocking ? t : void 0),
                L = (e) => (e.blocking ? g({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                C = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: I({ screenName: e }), label: _, text: t ? k : b }))(e.screen_name, t) : f(e.screen_name, t)),
                D = ({ confirmation: e, handleConfirm: t, onClose: i }) => {
                    const { confirmButtonType: a, headline: r, label: o, text: d } = e;
                    return n.createElement(s.Z, { cancelButtonLabel: u, confirmButtonLabel: o, confirmButtonType: a, headline: r, onCancel: i, onConfirm: t, text: d });
                };
        },
        350968: (e, t, i) => {
            i.d(t, { I9: () => c, rg: () => p, sp: () => l });
            var n = i(111677),
                s = i.n(n);
            const a = s().eaae42ce,
                r = s().h032d096,
                o = s().be38d25e,
                d = s().d2be9310,
                c = s().jea6b076,
                l = s().ce6fd0ec,
                u = s().af40a8e0,
                E = s().e68b09b4,
                p = (e, t, i) => (e ? { title: r, subtext: d, onAction: i, confirmLabel: E } : { title: a, subtext: o, onAction: t, confirmLabel: u });
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
            i.d(t, { OX: () => E, Od: () => l, PN: () => p, uq: () => c, wR: () => m });
            var n = i(251067),
                s = i(522171),
                a = i(111677),
                r = i.n(a),
                o = i(912021),
                d = i(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, o.Z)((e) => {
                    const t = e ? [{ description: r().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: r().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: c.nextItem, universal: !0 }, { description: r().g0048656, keys: c.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: c.refresh, universal: !1 }, { description: r().ha8209bc, keys: c.goHome, universal: !1 }, { description: r().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: r().eb75875e, keys: c.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: r().fa98627a, keys: c.goProfile, universal: !1 }, { description: r().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: r().b0041756, keys: c.goLists, universal: !1 }, { description: r().d4986f86, keys: c.goMessages, universal: !1 }, { description: r().h5860a68, keys: c.goGrok, universal: !1 }, { description: r().bb081ea2, keys: c.goSettings, universal: !1 }, { description: r().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: r().eee2ed92, keys: c.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                E = () => [
                    { description: r().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: r().e736990a, keys: c.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: c.search, universal: !1 },
                    { description: r().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: c.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: c.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: c.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: r().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: r().b881560e, keys: c.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                y = (0, o.Z)((e) => {
                    const t = l(e),
                        i = E(),
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
            i.d(t, { ZP: () => c });
            var n = i(912021),
                s = i(484636),
                a = i(545521);
            const r = (e, t) => `articleEntitiesSlice-${e}-${t}`,
                o = (e, t) => (0, a.Z)({ contextSuffix: "ARTICLE_ENTITIES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(s.Z).fetchArticleEntitiesSlice, getEndpointParams: (i) => ({ ...i, userId: e, lifecycle: t, count: 20 }), sliceKey: r(e, t) }),
                d = (e, t) => {
                    const i = (0, n.Z)((e, t) => o(e, t));
                    return i(e, t);
                },
                c = { fetchIfNeeded: (e, t) => d(e, t).fetchIfNeeded(), selectFetchStatus: (e, t, i) => d(t, i).selectFetchStatus(e), selectSliceModule: d, selectArticleEntities: (e, t, i) => d(t, i).selectItems(e), articleEntitiesSliceModule: o };
        },
        143322: (e, t, i) => {
            i.d(t, { ZP: () => O });
            var n = i(925873),
                s = i(450681),
                a = i(484636),
                r = i(466015),
                o = i(499627),
                d = i(312771),
                c = i(56519),
                l = i(502909),
                u = i(600823),
                E = i(558369),
                p = i(390387),
                y = i(195250),
                m = i(919022),
                T = i(572657);
            const v = (0, l.ZP)({ namespace: "articleEntities" }),
                I = (0, l.tb)(v, { context: "FETCH_ARTICLE_ENTITY", endpoint: (e) => e.withEndpoint(a.Z).fetchArticleEntity, params: ([e]) => ({ articleEntityId: e }) });
            var g = i(794057);
            const _ = (e, t, i) => {
                    const n = T.ZP.selectSliceModule(e, i);
                    return n.selectFetchStatus(t) === d.iF.LOADED ? n : void 0;
                },
                b = (e) => (t) => {
                    let i = t?.entities?.articleEntities[e];
                    if (i) return i.cover_media || (i = { ...i, cover_media: void 0 }), [F.updateOne(e, i)];
                },
                k = {
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
                    updateCoverMedia: (0, l.Tx)(v, "updateCoverMedia", { getParams: (e, { mediaCategory: t, mediaId: i } = {}) => ({ articleEntityId: e, mediaId: i, mediaCategory: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityCoverMedia, context: "UPDATE_ARTICLE_COVER_MEDIA", mapResponseToActions: b }),
                    updateContent: (0, l.Tx)(v, "update", { getParams: (e, { content_state: t } = {}) => ({ articleEntityId: e, content_state: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityContent, context: "UPDATE_ARTICLE_ENTITY", mapResponseToActions: b }),
                    updateTitle: (0, l.Tx)(v, "updateTitle", { getParams: (e, { title: t } = {}) => ({ articleEntityId: e, title: t }), getApiMethod: (e) => e.withEndpoint(a.Z).updateArticleEntityTitle, context: "UPDATE_ARTICLE_ENTITY_TITLE", mapResponseToActions: b }),
                    create: (0, l.Tx)(v, "create", {
                        getParams: (e = "", { content_state: t } = {}) => ({ content_state: t, title: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).createDraftArticle,
                        context: "CREATE_ARTICLE_ENTITY",
                        mapResponseToActions: (e, t, i) => (e) => {
                            const t = i(),
                                n = (0, p.x0)(t);
                            if (e && n) {
                                const { entities: i, result: a } = e,
                                    r = "string" == typeof a && i?.articleEntities?.[a].rest_id,
                                    o = _(n, t, g.iN.DRAFT);
                                return i && r ? (0, s.Z)([(0, c.dP)(i), o?.injectItems([r])]) : void 0;
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
                                o = a?.id_str,
                                d = (0, E.mz)(s);
                            if (n && o) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = _(o, s, g.iN.DRAFT),
                                    i = _(o, s, g.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.injectItems([e]), t?.removeItems([e])]);
                                const c = n?.metadata?.tweet_results?.result?.rest_id,
                                    l = c ? [(0, y.ZP)(d, o, y.uh.articles).injectEntry(r.Se({ id: c, sortIndex: c }))] : [];
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
                                r = a?.id_str,
                                o = (0, E.mz)(s);
                            if (n && r) {
                                n.cover_media || (n = { ...n, cover_media: void 0 });
                                const t = _(r, s, g.iN.DRAFT),
                                    i = _(r, s, g.iN.PUBLISHED);
                                let a = [];
                                t && i && (a = [i?.removeItems([e]), t?.injectItems([e])]);
                                const d = n?.metadata?.tweet_results?.result?.rest_id,
                                    c = d ? Object.keys(y.uh).map((e) => (0, y.ZP)(o, r, y.uh[e]).removeTweets({ [d]: !0 })) : [];
                                return [F.updateOne(e, n), ...a, ...c];
                            }
                        },
                    }),
                },
                A = "articleEntities",
                f = `rweb/${A}`,
                M = (e) => `${f}/${e}`,
                h = M("ADD_COVER_MEDIA"),
                S = M("REMOVE_COVER_MEDIA"),
                L = M("SET_PREV_ARTICLE_ENTITY_ID"),
                C = M("SET_EDITOR_STATE"),
                D = M("SET_IS_ARTICLE_ENTITY_LOADING"),
                w = M("SET_MEDIA_ENTITY_KEY_TO_FILES_MAP"),
                P = M("SET_MEDIA_ID_TO_LOCAL_MEDIA_ID_MAP"),
                R = M("SET_PREV_MEDIA_ENTITY_KEYS"),
                x = M("SET_PREV_ARTICLE_ENTITY_MEDIA"),
                N = M("SET_MEDIA_BEING_EDITED"),
                Z = M("SET_MEDIA_ENTITY_KEY_BEING_EDITED"),
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
            o.Z.register({
                [A]: function (e = B, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case h:
                            return { ...e, coverMediaId: t.meta?.mediaId };
                        case S:
                            return { ...e, coverMediaId: void 0 };
                        case C:
                            return { ...e, editorState: t.meta?.editorState || e.editorState };
                        case L:
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
                        case N:
                            return { ...e, mediaBeingEdited: t.meta?.mediaBeingEdited };
                        case Z:
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
                    ...k,
                    addCoverMedia: (e) => ({ meta: { mediaId: e }, type: h }),
                    removeCoverMedia: (e) => ({ meta: { mediaId: e }, type: S }),
                    selectEditorState: (e) => e[A].editorState,
                    selectAuthorFetchStatus: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.selectFetchStatus(e, i) : void 0;
                    },
                    setEditorState: (e) => ({ meta: { editorState: e }, type: C }),
                    setMediaBeingEdited: (e) => ({ meta: { mediaBeingEdited: e }, type: N }),
                    setMediaEntityKeyBeingEdited: (e) => ({ meta: { mediaEntityKeyBeingEdited: e }, type: Z }),
                    setMediaEntityKeyToFilesMap: (e) => ({ meta: { mediaEntityKeyToFilesMap: e }, type: w }),
                    setMediaIdToLocalMediaIdMap: (e) => ({ meta: { mediaIdToLocalMediaIdMap: e }, type: P }),
                    setPrevMediaEntityKeys: (e) => ({ meta: { prevMediaEntityKeys: e }, type: R }),
                    setPrevArticleEntityMedia: (e) => ({ meta: { prevArticleEntityMedia: e }, type: x }),
                    selectAuthorId: K,
                    selectCoverMediaId: (e) => e[A].coverMediaId,
                    selectMediaBeingEdited: (e) => e[A].mediaBeingEdited,
                    selectMediaEntityKeyBeingEdited: (e) => e[A].mediaEntityKeyBeingEdited,
                    selectMediaEntityKeyToFilesMap: (e) => e[A].mediaEntityKeyToFilesMap,
                    selectMediaIdToLocalMediaIdMap: (e) => e[A].mediaIdToLocalMediaIdMap,
                    selectPrevMediaEntityKeys: (e) => e[A].prevMediaEntityKeys,
                    selectPrevArticleEntityMedia: (e) => e[A].prevArticleEntityMedia,
                    selectTweetId: (e, t) => {
                        const i = v.select(e, t),
                            n = i?.metadata?.tweet_results?.result;
                        return "Tweet" === n?.__typename ? n?.rest_id : void 0;
                    },
                    selectAuthor: (e, t) => {
                        const i = K(e, t);
                        return i ? m.ZP.select(e, i) : void 0;
                    },
                    selectPrevArticleEntityId: (e) => e[A].prevArticleEntityId,
                    selectIsArticleEntityLoading: (e) => e[A].isArticleEntityLoading,
                    setPrevArticleEntityId: (e) => ({ meta: { prevArticleEntityId: e }, type: L }),
                    setIsArticleEntityLoading: (e) => ({ meta: { isArticleEntityLoading: e }, type: D }),
                    selectArticleEntityTitle: (e, t) => {
                        const i = v.select(e, t);
                        return i?.title;
                    },
                },
                O = u.Z.register(F);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e4e3d8bb.0ae1026a.js.map
