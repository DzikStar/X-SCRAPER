"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-dee3c9bb"],
    {
        682646: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => p, default: () => y });
            var i = a(807896),
                n = a(202784),
                l = a(536210),
                r = a(689985),
                o = a(668214),
                c = a(497294);
            const s = (e, t) => t.location?.state?.twitterArticleId,
                d = (e, t) => t.location?.state?.mediaId,
                u = (e, t) => {
                    const a = d(0, t);
                    return a ? [(0, c.m3)(e, a)?.[0]] : [];
                },
                m = (0, o.Z)()
                    .propsFromState(() => ({ media: u, initialMediaId: d, twitterArticleId: s }))
                    .propsFromActions(() => ({ setMediaMetadata: c._B, processMedia: c.C4, updateMediaUpload: c._J }))
                    .withAnalytics({ page: "tabbed_media_twitter_article" }),
                p = (e) => {
                    const { history: t, initialMediaId: a, match: o, media: c, staticContext: s, twitterArticleId: d, ...u } = e;
                    return c.length <= 0 || !a ? (d ? t.replace((0, r.lU)(d)) : t.replace(r.TC), null) : n.createElement(l.Z, (0, i.Z)({}, u, { history: t, initialMediaId: a, media: c, sensitiveMediaTabEnabled: !1 }));
                },
                h = m(p),
                y = n.memo(h);
        },
        506204: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Bt });
            a(136728);
            var i = a(202784),
                n = a(301503),
                l = a(370313),
                r = a.n(l),
                o = a(614983),
                c = a.n(o),
                s = a(576648),
                d = a(325686),
                u = a(925873),
                m = a(682474),
                p = a(992942),
                h = a(731708),
                y = a(891198),
                E = a(157130),
                f = a(154003),
                b = a(371344),
                g = a(392237),
                M = a(366635),
                C = a(661810),
                Z = a(247056),
                v = a(638236),
                I = a(879113),
                _ = a(537392),
                w = a(332920),
                k = a.n(w),
                P = a(717160),
                A = a(841972),
                S = a(647174),
                T = a(908478),
                B = a(803810),
                x = a(666536),
                F = a(516951),
                L = a(417144),
                z = a(323265),
                K = a(19640),
                W = a(774426),
                D = a(980407),
                O = a(757700),
                U = a(253493),
                R = a(246134),
                N = a(569999),
                H = a(874111),
                V = a(967934),
                j = a(201770),
                $ = a(443781),
                G = a(330815),
                J = a(199127),
                Q = a(165336),
                X = a(286240),
                q = a(442907),
                Y = a(637019),
                ee = a(600304),
                te = a(641353),
                ae = a(240089),
                ie = a(521514),
                ne = a(47743),
                le = a(128225),
                re = a(716233),
                oe = a(166677),
                ce = a(959959),
                se = a(793211),
                de = a(192643),
                ue = a(349745),
                me = a(319662),
                pe = a(794057),
                he = a(312771),
                ye = a(615027),
                Ee = a(689985),
                fe = a(167630);
            function be() {
                return i.createElement(d.Z, { style: ge.overlay }, i.createElement(fe.Z, { style: ge.activityIndicator }));
            }
            const ge = g.default.create((e) => ({ activityIndicator: { padding: e.spacesPx.space8, position: "sticky", top: e.spacesPx.space64 }, overlay: { ...g.default.absoluteFillObject, backgroundColor: e.colors.cellBackground, height: "100%", opacity: 1, zIndex: e.componentZIndices.appBarZIndex + 1 } }));
            var Me = a(71620),
                Ce = a(668214),
                Ze = a(143322),
                ve = a(497294),
                Ie = a(390387),
                _e = a(38562),
                we = a(601576),
                ke = a(919022);
            function Pe(e, t) {
                const { articleEntityId: a } = t.match.params;
                return c()("string" == typeof a, "articleEntityId must be specified in path"), a;
            }
            const Ae = (e, t) => {
                    const a = Pe(0, t);
                    return Ze.ZP.select(e, a);
                },
                Se = (e, t) => {
                    const a = Pe(0, t);
                    return Ze.ZP.selectAuthorId(e, a);
                },
                Te = (e, t) => {
                    const a = Pe(0, t);
                    return Ze.ZP.selectTweetId(e, a);
                },
                Be = (e, t) => {
                    const a = Pe(0, t);
                    return Ze.ZP.selectAuthor(e, a);
                },
                xe = (e, t) => {
                    const a = ((e, t) => {
                            const a = Pe(0, t);
                            return Ze.ZP.selectFetchStatus(e, a) || he.ZP.NONE;
                        })(e, t),
                        i = ((e, t) => {
                            const a = Pe(0, t);
                            return Ze.ZP.selectAuthorFetchStatus(e, a);
                        })(e, t);
                    return (0, he.h1)(a, i);
                },
                Fe = (e, t) => {
                    const a = Pe(0, t);
                    return Ze.ZP.selectArticleEntityTitle(e, a);
                },
                Le = (e, t) => {
                    const a = Ze.ZP.selectCoverMediaId(e);
                    if (a) return (0, ve.m3)(e, a)?.[0];
                },
                ze = (0, Ce.Z)()
                    .propsFromState(() => ({ allMedia: ve.gz, author: Be, authorId: Se, coverMedia: Le, dataSaverMode: _e.IX, editorState: Ze.ZP.selectEditorState, fetchStatus: xe, isArticleEntityLoading: Ze.ZP.selectIsArticleEntityLoading, viewerUserId: Ie._h, mediaBeingEdited: Ze.ZP.selectMediaBeingEdited, prevArticleEntityId: Ze.ZP.selectPrevArticleEntityId, mediaEntityKeyBeingEdited: Ze.ZP.selectMediaEntityKeyBeingEdited, mediaEntityKeyToFilesMap: Ze.ZP.selectMediaEntityKeyToFilesMap, mediaIdToLocalMediaIdMap: Ze.ZP.selectMediaIdToLocalMediaIdMap, prevMediaEntityKeys: Ze.ZP.selectPrevMediaEntityKeys, prevArticleEntityMedia: Ze.ZP.selectPrevArticleEntityMedia, title: Fe, tweetId: Te, articleEntity: Ae, isActiveCreator: Ie.WM }))
                    .propsFromActions(() => ({ addMedia: ve.rA, addToast: we.fz, processMultipleMedia: ve.G$, removeMediaUpload: ve.WU, sendMetadata: ve.o6, setMediaMetadata: ve._B, uploadMedia: ve.$i, createLocalApiErrorHandler: (0, Me.zr)("TWITTER_ARTICLE_COMPOSER"), deleteArticleEntity: Ze.ZP.delete, fetchArticleEntity: Ze.ZP.fetchOneIfNeeded, updateArticleEntityContent: Ze.ZP.updateContent, setEditorState: Ze.ZP.setEditorState, setPrevArticleEntityId: Ze.ZP.setPrevArticleEntityId, fetchUserIfNeeded: ke.ZP.fetchOneIfNeeded, publishArticleEntity: Ze.ZP.publish, unpublishArticleEntity: Ze.ZP.unpublish, setIsArticleEntityLoading: Ze.ZP.setIsArticleEntityLoading, updateArticleEntityTitle: Ze.ZP.updateTitle, addCoverMedia: Ze.ZP.addCoverMedia, removeCoverMedia: Ze.ZP.removeCoverMedia, updateArticleEntityCoverMedia: Ze.ZP.updateCoverMedia, setMediaBeingEdited: Ze.ZP.setMediaBeingEdited, setMediaEntityKeyBeingEdited: Ze.ZP.setMediaEntityKeyBeingEdited, setMediaEntityKeyToFilesMap: Ze.ZP.setMediaEntityKeyToFilesMap, setMediaIdToLocalMediaIdMap: Ze.ZP.setMediaIdToLocalMediaIdMap, setPrevMediaEntityKeys: Ze.ZP.setPrevMediaEntityKeys, setPrevArticleEntityMedia: Ze.ZP.setPrevArticleEntityMedia }))
                    .withAnalytics({ page: "article_composer" }),
                Ke = k().ib067d6a,
                We = (k().eb7ab862, k().d8047cc8),
                De = k().ce9a9736,
                Oe = k().f61c4bb0,
                Ue = k().dd63549e,
                Re = k().a4d128bc,
                Ne = k().b4071e18,
                He = k().f586b7fa,
                Ve = k().f558d2e0,
                je = k().ab0fa9ba,
                $e = k().c5f35c98,
                Ge = k().d739d83e,
                Je = k().a94efeda,
                Qe = k().f277e94a,
                Xe = k().gd79d45a,
                qe = k().g1866bb2,
                Ye = k().a6a78df4,
                et = k().ia656f1c,
                tt = k().d3855e36,
                at = k().f325958e,
                it = k().ie5d9064,
                nt = k().e03487a0,
                lt = k().e938d562,
                rt = k().e449c546,
                ot = k().bd00e836,
                ct = k().ic110f68,
                st = k().eff483e0,
                dt = k().ifea3114,
                ut = k().b384f696,
                mt = k().a7da0adb,
                pt = (k().aea1d455, k().df898d71, k().i9aadf4a),
                ht = k().hfdce46e,
                yt = k().df079228,
                Et = k().hf6f2914,
                ft = k().f5037228;
            const bt = g.default.create((e) => ({
                    container: { zIndex: e.componentZIndices.appBarZIndex - 1 },
                    loading_container: { zIndex: e.componentZIndices.appBarZIndex + 1, position: "absolute", top: 0, start: 0, width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: e.colors.navigationBackground },
                    containerBottomPadding: { paddingBottom: e.spaces.space80 },
                    failureView: { marginTop: `calc(-1*${g.default.theme.spaces.space20})`, paddingHorizontal: e.spaces.space36 },
                    focusModeModal: { minWidth: 0 },
                    appBar: { backgroundColor: e.colors.cellBackground },
                    row: { flexDirection: "row", alignItems: "center" },
                    cancelMediaUploadButton: { float: "right", marginStart: e.spaces.space8, marginEnd: e.spaces.space4 },
                    unpublishButton: { marginEnd: `calc(-1*${g.default.theme.spaces.space8})` },
                    shareButton: { paddingHorizontal: `calc(${e.spaces.space8} - ${e.spaces.space1})` },
                    horizontalPadding: { paddingHorizontal: e.spaces.space48 },
                    editorInput: { paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 },
                    emptyCoverMedia: { backgroundColor: e.colors.gray50 },
                    coverMedia: { height: "100%", width: "100%" },
                    coverMediaMaskStyle: { backgroundColor: e.colors.transparent },
                    overlay: { ...g.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 },
                    progressBar: { paddingEnd: e.spaces.space16, position: "fixed", width: "100%", zIndex: e.componentZIndices.appBarZIndex + 2 },
                    progressBarMaxWidth: { maxWidth: ie.Z.columnWidths.wide },
                    mask: { ...g.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 },
                    title: { width: "100%" },
                    titleInput: { fontSize: e.fontSizes.title1, lineHeight: `calc(${e.spaces.space40} + ${e.spaces.space4})`, paddingTop: e.spaces.space48, paddingBottom: e.spaces.space32, fontWeight: e.fontWeights.heavy },
                    saveStatus: { alignSelf: "center", flexDirection: "row", marginEnd: e.spaces.space8, display: "block" },
                    popoverContent: { padding: e.spaces.space20 },
                    message: { flexDirection: "row" },
                    textCountLabel: { alignSelf: "center" },
                    wordCountPopover: { justifyContent: "center" },
                    footer: { alignSelf: "center", width: "100%", maxWidth: ie.Z.columnWidths.wide },
                    controls: { display: "grid", gridAutoFlow: "column", gridGap: e.spaces.space12 },
                    publishedArticle: { color: e.colors.text },
                    toolbarFocusStyle: { width: ie.Z.columnWidths.wide, maxWidth: "100vw", marginHorizontal: "auto" },
                })),
                gt = [bt.titleInput, bt.horizontalPadding],
                Mt = [bt.row, bt.controls],
                Ct = [bt.editorInput],
                Zt = [bt.horizontalPadding, bt.footer],
                vt = [bt.textCountLabel, bt.message],
                It = i.createElement(A.default, null),
                _t = i.createElement(S.default, null),
                wt = g.default.theme.breakpoints.xSmall + 70,
                kt = 1e3,
                Pt = 3e3,
                At = (e, t, a) => [...e.slice(0, t), a, ...e.slice(t + 1)];
            const St = (e, t) => {
                    if (e) {
                        const a = t ? (0, n.convertFromRaw)(t) : n.ContentState.createFromText(""),
                            i = n.EditorState.set(e, { currentContent: a, directionMap: r().getDirectionMap(a, e.getDirectionMap()), selection: n.SelectionState.createEmpty(a.getFirstBlock().key) });
                        return u.Z.convertEmojiToEntities(i);
                    }
                    return ((e) => {
                        const t = u.Z.initEditorState(e);
                        return u.Z.convertEmojiToEntities(t);
                    })(t);
                },
                Tt = ze(function (e) {
                    const {
                        addCoverMedia: t,
                        addMedia: a,
                        addToast: l,
                        allMedia: r,
                        analytics: o,
                        articleEntity: w,
                        author: A,
                        authorId: S,
                        coverMedia: ie,
                        createLocalApiErrorHandler: fe,
                        deleteArticleEntity: ge,
                        editorState: Me,
                        fetchArticleEntity: Ce,
                        fetchStatus: Ze,
                        fetchUserIfNeeded: ve,
                        history: Ie,
                        isActiveCreator: _e,
                        isArticleEntityLoading: we,
                        location: ke,
                        match: {
                            params: { articleEntityId: Pe },
                        },
                        mediaBeingEdited: Ae,
                        mediaEntityKeyBeingEdited: Se,
                        mediaEntityKeyToFilesMap: Te,
                        mediaIdToLocalMediaIdMap: Be,
                        prevArticleEntityId: xe,
                        prevArticleEntityMedia: Fe,
                        prevMediaEntityKeys: Le,
                        processMultipleMedia: ze,
                        publishArticleEntity: Tt,
                        removeCoverMedia: Bt,
                        removeMediaUpload: xt,
                        sendMetadata: Ft,
                        setEditorState: Lt,
                        setIsArticleEntityLoading: zt,
                        setMediaBeingEdited: Kt,
                        setMediaEntityKeyBeingEdited: Wt,
                        setMediaEntityKeyToFilesMap: Dt,
                        setMediaIdToLocalMediaIdMap: Ot,
                        setMediaMetadata: Ut,
                        setPrevArticleEntityId: Rt,
                        setPrevArticleEntityMedia: Nt,
                        setPrevMediaEntityKeys: Ht,
                        title: Vt,
                        tweetId: jt,
                        unpublishArticleEntity: $t,
                        updateArticleEntityContent: Gt,
                        updateArticleEntityCoverMedia: Jt,
                        updateArticleEntityTitle: Qt,
                        uploadMedia: Xt,
                        viewerUserId: qt,
                    } = e;
                    c()(Pe, "articleEntityId must be specified in path");
                    const Yt = (0, Ee.lU)(Pe),
                        { featureSwitches: ea } = (0, $.QZ)(),
                        ta = 1e3 * ea.getNumberValue("responsive_web_twitter_article_character_limit", 25),
                        aa = ea.getNumberValue("responsive_web_twitter_article_block_limit", 1e4),
                        ia = ea.getNumberValue("responsive_web_twitter_article_title_limit") || 100,
                        na = i.useMemo(() => Math.max(ea.getNumberValue("responsive_web_twitter_article_content_debounce_ms", Pt), kt), [ea]),
                        la = w?.lifecycle_state?.lifecycle === K.f.Published && !!jt,
                        [ra, oa] = i.useState(!1),
                        [ca, sa] = i.useState(!1),
                        [da, ua] = i.useState(!1),
                        [ma, pa] = i.useState(!1),
                        [ha, ya] = i.useState(!1),
                        [Ea, fa] = i.useState(!0),
                        [ba, ga] = i.useState(!1),
                        [Ma, Ca] = i.useState(null),
                        [Za, va] = i.useState(!0),
                        [Ia, _a] = i.useState(!1),
                        [wa, ka] = i.useState(!1),
                        [Pa, Aa] = i.useState(!1),
                        [Sa, Ta] = i.useState([]),
                        [Ba, xa] = i.useState(!1),
                        [Fa, La] = i.useState(null),
                        [za, Ka] = i.useState(!0),
                        Wa = i.useRef(null),
                        Da = ke.pathname.includes("focus"),
                        Oa = z.ZP.isMobileOS(),
                        Ua = Ze === he.ZP.LOADED,
                        Ra = i.useCallback(() => {
                            if (S) return { note_details: { author_id: S, is_note_author_follows_viewer: !1, is_viewer_follows_note_author: !1, note_id: Pe } };
                        }, [Pe, S]),
                        Na = i.useCallback(
                            ({ action: e, component: t, element: a }) => {
                                o.scribe({ component: t, element: a, action: e, data: Ra() });
                            },
                            [Ra, o],
                        );
                    i.useEffect(() => {
                        Na({ action: "impression" });
                    }, [Na, Pe]),
                        i.useEffect(() => {
                            Ce(Pe).catch(fe()), S && ve(S).catch(fe()), Ca(null);
                        }, [S, fe, ve, Ce, Pe]);
                    const Ha = i.useCallback((e) => Object.keys(e).filter((t) => e[t].type === pe.DC.MEDIA), []),
                        Va = i.useCallback((e) => Ha(e).map((t) => e[t].data?.entityKey || ""), [Ha]),
                        ja = i.useCallback(
                            (e) => {
                                const t = e.getCurrentContent(),
                                    a = (0, n.convertToRaw)(t).entityMap,
                                    i = Va(a);
                                Ht(i);
                            },
                            [Va, Ht],
                        ),
                        $a = () => {
                            Aa(!1), Ta([]);
                        },
                        Ga = i.useCallback(() => {
                            xt(Sa), $a();
                        }, [xt, Sa]);
                    i.useEffect(() => {
                        Wa.current = Pe;
                        const e = !xe || xe !== w?.rest_id,
                            t = e || !(0, T.Z)(Fe, w?.media_entities);
                        if (w && !la && t) {
                            Rt(w?.rest_id), Nt(w?.media_entities), ga(!1);
                            const t = St(Me, w?.content_state && w?.content_state.blocks.length > 0 ? (0, ce.K7)(w?.content_state) : void 0),
                                i = e ? t : Me;
                            e &&
                                (Ga(),
                                Fa?.map((e) => e.cancel()),
                                (0, H.ii)(i).forEach((e) => {
                                    i.getCurrentContent().mergeEntityData(e, { entityKey: e });
                                }),
                                ja(i));
                            const l = w?.media_entities?.filter((e) => e?.media_id && !Be[e.media_id]);
                            if (l && l.length > 0) {
                                e && zt(!0);
                                const t = (0, ue.Dp)(l).externalMedia;
                                let r;
                                const o = t.map(({ url: e }) => (0, de.P)((0, le.f)(e)));
                                La(o);
                                Promise.all(o.map((e) => e.promise))
                                    .then((e) => ((r = [...e]), a(e, { location: re.vC.TwitterArticle })))
                                    .then((e) =>
                                        e.map((e, a) => {
                                            const { altText: i, sensitiveMediaWarning: n } = t[a];
                                            return (i || n) && Ut(e.id, { ...(0, B.Z)(i ? { altText: i } : null), ...(0, B.Z)(n ? { sensitiveMediaWarning: n } : null) }), e.id;
                                        }),
                                    )
                                    .then((e) => {
                                        const t = e.reduce((e, t, a) => ((e[l[a].media_id || ""] = t), e), {}),
                                            a = { ...Be, ...t };
                                        Ot(a);
                                        const o = (0, n.convertToRaw)(i.getCurrentContent()).entityMap,
                                            c = e.reduce((e, t, a) => {
                                                const i = l[a].media_id,
                                                    n = r[a],
                                                    c = Object.keys(o).find((e) => {
                                                        const t = o[e],
                                                            a = t.data?.mediaItems?.map((e) => e.mediaId);
                                                        return a?.includes(i);
                                                    }),
                                                    s = c && o[c].data;
                                                if (s) {
                                                    const t = s.mediaItems.findIndex((e) => e.mediaId === i),
                                                        a = s.entityKey,
                                                        l = e[a];
                                                    let r;
                                                    return (r = l ? At(l, t, n) : s.mediaItems.map((e, a) => (a === t ? n : null))), { ...e, [a]: r };
                                                }
                                                return e;
                                            }, Te);
                                        Dt(c), Wa.current === w?.rest_id && Lt(n.EditorState.forceSelection(i, i.getSelection()));
                                    })
                                    .catch((e) => {
                                        if (e.message === de.J) return Promise.resolve();
                                    })
                                    .finally(() => {
                                        zt(!1);
                                    });
                            } else e && (Lt(i), ja(i));
                        }
                    }, [w?.rest_id, la, w?.media_entities]);
                    const Ja = i.useMemo(() => (0, H.eE)(Me) > aa, [aa, Me]),
                        Qa = i.useCallback((e) => (0, H.c6)(e) > ta, [ta]),
                        Xa = i.useMemo(() => Qa(Me), [Me, Qa]),
                        qa = i.useCallback(
                            (e) => {
                                const t = Qa(e);
                                if (t || wa) {
                                    const a = u.Z.updateOverflowStyle(e, ta, wa);
                                    return ka(t), a;
                                }
                                return e;
                            },
                            [ta, wa, Qa],
                        ),
                        Ya = i.useCallback(
                            (e) => {
                                if ((0, oe.O9)(e) && e.code === L.d.CANCELED) return Promise.resolve();
                                const t = (0, oe.ZP)(e);
                                if ((0, oe.O9)(e) && t) return l(t), Promise.resolve();
                                fe({ showToast: !0 })(e);
                            },
                            [l, fe],
                        ),
                        ei = i.useCallback(
                            (e, t) => {
                                Xt(e).then(t).catch(Ya);
                            },
                            [Ya, Xt],
                        ),
                        ti = i.useCallback(
                            ({ media: e, mediaIds: t, thenCallback: a }) => {
                                e[0].externalMediaDetails
                                    ? ei(t, a)
                                    : ze(e, { onFailure: xt }).then((e) => {
                                          ei(t, a);
                                      });
                            },
                            [ei, ze, xt],
                        ),
                        ai = i.useCallback(
                            (e, t) => {
                                const a = (0, n.convertToRaw)(e);
                                Gt(Pe, { content_state: (0, se.kf)(a) })
                                    .catch(fe({ showToast: !0 }))
                                    .finally(() => {
                                        va(!0), _a(!1), t?.();
                                    });
                            },
                            [fe, Gt, Pe],
                        ),
                        ii = i.useCallback(
                            (e, t, i) => {
                                if (Qa(e)) return;
                                va(!1);
                                const l = e.getCurrentContent(),
                                    r = (0, n.convertToRaw)(l).entityMap,
                                    o = Va(r).filter((e) => !Le.includes(e) && e !== t);
                                if ((ja(e), o.length > 0)) {
                                    Promise.all(
                                        o.map((e) => {
                                            const t = Te[e];
                                            return a(t, { location: re.vC.TwitterArticle })
                                                .then((e) => ze(e, { onFailure: xt }))
                                                .then((e) => Xt(e.map((e) => e.id)))
                                                .then((t) => ({ uploadedMedia: t, entityKey: e }));
                                        }),
                                    )
                                        .then((e) => {
                                            const t = e.reduce((e, { entityKey: t, uploadedMedia: a }) => {
                                                const i = { entityKey: t, mediaItems: a.map((e) => ({ mediaCategory: (0, H.KU)(e), localMediaId: e.id, mediaId: e.uploadId })) };
                                                return e.mergeEntityData(t, i);
                                            }, l);
                                            ai(t, i);
                                        })
                                        .catch(Ya);
                                } else ai(l, i);
                            },
                            [Va, Ya, ai, ja, a, Qa, Te, Le, ze, xt, Xt],
                        ),
                        ni = i.useMemo(() => (0, x.Z)(ii, na), [ii, na]),
                        li = i.useCallback(
                            (e, t = !1, a, i) => {
                                Ka(!1), ba && ga(!1);
                                const l = qa(u.Z.convertEmojiToEntities(e));
                                Lt(l);
                                ((Pe === xe && !(0, T.Z)((0, n.convertToRaw)(l.getCurrentContent()), (0, n.convertToRaw)(Me.getCurrentContent()))) || t) && (_a(!0), ni(l, a, i));
                            },
                            [qa, ni, Pe, Me, ba, xe, Lt],
                        );
                    i.useEffect(() => {
                        !(function (e) {
                            const { allMedia: t, editorState: a, mediaBeingEdited: i, mediaEntityKeyBeingEdited: l, mediaIdToLocalMediaIdMap: r, onChange: o, processAndUploadMedia: c, sendMetadata: s, setEditorState: d, setIsSavingEditedMedia: u, setMediaBeingEdited: m, setMediaIdToLocalMediaIdMap: p } = e,
                                h = i?.id,
                                y = t.find((e) => e.id === h);
                            if (h && i && l && y && !y.uploading) {
                                if (!(0, T.Z)(i, y)) {
                                    const e = Object.keys(r).find((e) => r[e] === h);
                                    e &&
                                        (u(!0),
                                        c({
                                            media: [y],
                                            mediaIds: [h],
                                            thenCallback: ([t]) => {
                                                const i = t.mediaMetadata?.altText || t.mediaMetadata?.defaultAltText,
                                                    n = t.uploadId;
                                                if (n) {
                                                    s({ media_id: n, ...(!!i && { alt_text: { text: i } }) }), p({ ...r, [e]: void 0 });
                                                    const c = (0, H.Sc)(a, l, e, t);
                                                    o(c, !0, void 0, () => {
                                                        m(void 0), u(!1);
                                                    });
                                                }
                                            },
                                        })),
                                        d(n.EditorState.forceSelection(a, a.getSelection()));
                                }
                            }
                        })({ mediaBeingEdited: Ae, allMedia: r, mediaEntityKeyBeingEdited: Se, mediaIdToLocalMediaIdMap: Be, processAndUploadMedia: ti, sendMetadata: Ft, createLocalApiErrorHandler: fe, setMediaIdToLocalMediaIdMap: Ot, editorState: Me, onChange: li, setMediaBeingEdited: Kt, setEditorState: Lt, setIsSavingEditedMedia: xa });
                    }, [r]);
                    const ri = i.useCallback(
                            (e, t) => {
                                const a = e.map((e) => e.id);
                                if ((Ta(a), (0, ne.X2)(e))) {
                                    ti({
                                        media: e,
                                        mediaIds: a,
                                        thenCallback: (e) => {
                                            const { entityKey: a, newEditorState: i } = (0, H.r_)(Me, e);
                                            t && Dt({ ...Te, [a]: t }), li(i, !1, a, $a);
                                        },
                                    });
                                } else l({ text: Ke }), xt(a), $a();
                            },
                            [ti, l, Me, li, Te, xt, Dt],
                        ),
                        oi = i.useCallback(
                            (e) => {
                                Aa(!0), ri(e);
                            },
                            [ri],
                        ),
                        ci = i.useCallback(
                            (e, t) => {
                                const a = r.find((e) => e.id === t);
                                a && (Kt(a), Wt(e), Ie.push(Ee.hY, { mediaId: t, articleEntityId: Pe }));
                            },
                            [r, Pe, Ie, Kt, Wt],
                        ),
                        si = i.useCallback(
                            (e = !1, t, a) => {
                                pa(!0),
                                    ya(!1),
                                    Tt(Pe, a)
                                        .then((t) => {
                                            const a = t?.result && "string" == typeof t.result ? t?.entities?.articleEntities?.[t.result]?.metadata?.tweet_results?.result?.rest_id : null,
                                                i = a ? (0, Ee.JG)(a, A?.screen_name) : null;
                                            let n;
                                            e && s.Z.isAvailable() && i && s.Z.setString(i), (n = e ? Re : Ue), l({ text: n, ...(i ? { action: { label: Qe, link: { pathname: i, openInSameFrame: !1, external: !0 } } } : null) }), Da && Ie.replace({ pathname: Yt }), ua(!1);
                                            const r = a ? (0, Ee.N3)(a, A?.screen_name) : null;
                                            r && Ie.push({ pathname: r });
                                        })
                                        .catch(fe({ customErrorHandler: (e) => (t(), ya(!0), []) }))
                                        .finally(() => pa(!1));
                            },
                            [l, Pe, Yt, A?.screen_name, fe, Ie, Da, Tt],
                        ),
                        di = i.useCallback(() => {
                            sa((e) => !e);
                        }, []),
                        ui = i.useCallback(() => {
                            ua((e) => !e);
                        }, []),
                        mi = i.useCallback(() => {
                            Na({ element: "confirm_unpublish_button", action: "click" });
                        }, [Na]),
                        pi = i.useCallback(() => {
                            $t(Pe)
                                .then(() => {
                                    mi(), l({ text: ht });
                                })
                                .catch(fe({}))
                                .finally(di);
                        }, [mi, l, Pe, fe, $t, di]),
                        hi = i.useCallback(() => {
                            la ? (sa(!0), Na({ element: "unpublish_button", action: "click" })) : (ua(!0), Na({ element: "publish_button", action: "click" }));
                        }, [Na, la]),
                        yi = i.useCallback(() => {
                            ga(!0);
                        }, [ga]),
                        Ei = i.useCallback(
                            (e) => {
                                Qt(Pe, { title: e || "" })
                                    .catch(fe({}))
                                    .finally(() => {
                                        fa(!0);
                                    });
                            },
                            [Pe, fe, Qt],
                        ),
                        fi = i.useMemo(() => (0, x.Z)(Ei, kt), [Ei]),
                        bi = i.useCallback(
                            (e) => {
                                const t = e.target.value.replace(/[\r\n]+/g, " ");
                                Ca(t), fa(!1), fi(t);
                            },
                            [fi],
                        ),
                        gi = i.useCallback((e) => {
                            "Enter" === e.key && e.preventDefault();
                        }, []),
                        Mi = i.useCallback(
                            ([e]) => {
                                t(e), oa(!0);
                            },
                            [t],
                        ),
                        Ci = i.useCallback(
                            (e) => {
                                xt(e), Bt(e);
                            },
                            [Bt, xt],
                        ),
                        Zi = i.useCallback(() => {
                            ie &&
                                (Xt([ie.id]).then(([e]) => {
                                    Jt(Pe, { mediaId: e.uploadId, mediaCategory: "DraftTweetImage" })
                                        .then(() => {
                                            Ci(ie.id);
                                        })
                                        .catch(fe({ showToast: !0 }));
                                }),
                                oa(!1));
                        }, [Ci, Pe, ie, fe, Jt, Xt]),
                        vi = i.useCallback(() => {
                            ie && Ci(ie.id), oa(!1);
                        }, [Ci, ie]),
                        Ii = i.useCallback(() => {
                            Jt(Pe, { mediaId: void 0, mediaCategory: void 0 }).catch(fe({ showToast: !0 }));
                        }, [Pe, fe, Jt]),
                        _i = w?.cover_media,
                        wi = i.useMemo(() => ("ApiImage" === _i?.media_info?.__typename && _i?.media_info?.original_img_url ? { uri: _i?.media_info?.original_img_url } : void 0), [_i?.media_info]),
                        ki = (0, ce.Si)(),
                        Pi = i.useMemo(() => i.createElement(m.Z, { ratio: ki }, wi ? i.createElement(p.Z, { source: wi, style: bt.coverMedia }) : null), [ki, wi]),
                        Ai = i.useCallback(() => {
                            Ie.push({ query: { text: jt ? (0, Ee.JG)(jt, A?.screen_name) : "" }, pathname: "/messages/compose" });
                        }, [A?.screen_name, Ie, jt]),
                        Si = i.useCallback(() => {
                            Na({ element: Da ? "unfocus_button" : "focus_button", action: "click" });
                        }, [Na, Da]),
                        Ti = i.useCallback(() => {
                            Na({ component: la ? "delete_sheet_published" : "delete_sheet_draft", element: "confirm_delete", action: "click" });
                        }, [Na, la]),
                        Bi = i.useCallback(() => [{ text: Oe, onClick: Ai, Icon: P.default }, ...(jt && A ? [(0, X.Z)({ addToast: l, id: jt, screenName: A.screen_name, scribeAction: F.Z })] : [])], [Ai, l, A, jt]),
                        xi = i.useCallback(() => {
                            const e = [];
                            return la && jt && A ? e.push((0, ee.Z)({ id: jt, screenName: A.screen_name })) : Oa && e.push((0, Y.Z)({ twitterArticleId: Pe })), e.push((0, q.Z)({ addToast: l, createLocalApiErrorHandler: fe, deleteTwitterArticle: ge, history: Ie, isPublished: la, location: ke, onScribeEvent: Ti, twitterArticleId: Pe })), e;
                        }, [Ti, l, Pe, A, fe, ge, Ie, Oa, la, ke, jt]),
                        Fi = i.useCallback((e) => (t) => i.createElement(W.default, { actionItems: e(), onClose: t }), []),
                        Li = i.useCallback(() => i.createElement(h.ZP, { style: bt.popoverContent }, Da ? qe : Xe), [Da]),
                        zi = _i || ie,
                        Ki = !!(0, H.ci)(Me.getCurrentContent()),
                        Wi = !!Vt?.trim(),
                        Di = i.useMemo(() => {
                            const e = null === Ma ? Vt : Ma,
                                t = e ? (0, me.k)(e) : null;
                            return t?.weightedLength || 0;
                        }, [Ma, Vt]),
                        Oi = Di > ia,
                        Ui = (0, H.WF)(Me);
                    let Ri = Ui;
                    Ui > 1 && (Ri = y.ZP.getFormattedCount(Ui));
                    const Ni = i.useCallback(
                            ({ message: e, title: t }) =>
                                () =>
                                    i.createElement(d.Z, { style: bt.popoverContent }, i.createElement(d.Z, { style: bt.message }, t), i.createElement(d.Z, { style: bt.message }, e)),
                            [],
                        ),
                        Hi = (function () {
                            let e,
                                t,
                                a,
                                n = !1;
                            if (ba) {
                                e = Oi;
                                const n = { countElement: i.createElement(h.ZP, { color: e ? "red500" : "text", weight: "bold" }) },
                                    l = { maxLimit: ia, count: Di };
                                (t = i.createElement(h.ZP, null, ut)), (a = i.createElement(h.ZP, null, i.createElement(k().I18NFormatMessage, { $i18n: "hb92c979", maxLimit: l.maxLimit }, i.cloneElement(n.countElement, null, k().bede965c({ count: l.count })))));
                            } else (n = !0), (a = mt({ count: Ri }));
                            return i.createElement(d.Z, { style: bt.wordCountPopover }, i.createElement(E.Z, { disabled: n, enableHover: !0, renderContent: Ni({ title: a, message: t }), withArrow: !0 }, i.createElement(h.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: vt }, a)));
                        })(),
                        Vi = i.useCallback(() => i.createElement(h.ZP, { style: bt.popoverContent }, Wi || Ki ? (!Wi && Xa ? rt : !Ki && Oi ? lt : Wi ? (Ki ? (Oi && Xa ? nt : Oi ? at : Xa ? it : st) : et) : tt) : Ye), [Xa, Ki, Wi, Oi]),
                        ji = !Ea || !Za || Pa || Ba || Ia,
                        $i = !Ki || !Wi || ji || Oi || Xa || Ja,
                        Gi = i.useMemo(() => i.createElement(f.ZP, { disabled: !la && $i, onClick: hi, size: "small", style: la ? bt.unpublishButton : void 0, type: la ? "brandText" : "brandFilled" }, la ? Ve : We), [hi, la, $i]),
                        Ji = i.useMemo(() => (la ? Gi : i.createElement(E.Z, { enableHover: !0, renderContent: Vi, withArrow: !0 }, Gi)), [Vi, Gi, la]),
                        Qi = i.useMemo(() => i.createElement(h.ZP, { size: "title1", weight: "heavy" }, i.createElement(b.Z, { inputStyle: gt, key: `title-input-${Pe}`, maxLength: ia, maxNumberOfLines: 100, multiline: !0, name: Ne, numberOfLines: 1, onChange: bi, onFocus: yi, onKeyPress: gi, placeholder: He, placeholderTextColor: g.default.theme.colors.gray500, style: bt.title, styleType: "selection", value: null === Ma ? Vt : Ma })), [bi, yi, gi, Pe, ia, Ma, Vt]),
                        Xi = i.useMemo(() => (A ? i.createElement(M.Z, { isBlueVerified: A.is_blue_verified, isVerified: A.verified, name: A.name, profileImageUrl: A.profile_image_url_https, screenName: A.screen_name, style: bt.horizontalPadding, verifiedType: A.verified_type, withLink: !0 }) : null), [A]),
                        qi = i.useMemo(() => i.createElement(d.Z, { style: !zi && bt.emptyCoverMedia }, i.createElement(J.default, { aspectRatio: ki, currentContent: Pi, description: zi ? void 0 : ft, location: re.vC.TwitterArticle, maskStyle: bt.coverMediaMaskStyle, mediaItem: ie, onChange: Mi, onFailure: Ci, onRemove: zi ? Ii : void 0 })), [Ci, Mi, Ii, ie, ki, Pi, zi]),
                        Yi = i.useMemo(() => i.createElement(i.Fragment, null, qi, Qi, Xi), [Xi, qi, Qi]),
                        en = i.useCallback(
                            (e) => {
                                const t = window.getSelection();
                                if ("Range" === t.type && t.rangeCount) {
                                    const a = t.getRangeAt(0).commonAncestorContainer;
                                    if (e.currentTarget.contains(a)) return;
                                }
                                l({ text: je, action: { label: Ve, onAction: hi } });
                            },
                            [hi, l],
                        ),
                        tn = i.useMemo(() => [bt.progressBar, !Da && bt.progressBarMaxWidth], [Da]),
                        an = i.useMemo(() => [Da && bt.toolbarFocusStyle], [Da]),
                        nn = w?.metadata,
                        ln = i.useCallback(
                            (e) => {
                                Aa(!0);
                                const t = [...e];
                                a(e, { location: re.vC.TwitterArticle }).then((e) => {
                                    ri(e, t);
                                });
                            },
                            [ri, a],
                        ),
                        rn = i.useCallback(() => {
                            if (!w || !A) return null;
                            if (la) return i.createElement(d.Z, { style: bt.publishedArticle }, i.createElement(R.ZP, { author: A, onContainerPress: en, twitterArticle: w }));
                            const e = we || za,
                                t = Xa || Ja,
                                a = Xa ? ot : ct;
                            return i.createElement(i.Fragment, null, i.createElement(N.Z, { allMedia: r, contentHorizontalPadding: g.default.theme.spaces.space48, editorState: Me, errorText: a, inputStyle: Ct, location: ke, mediaIdToLocalMediaIdMap: Be, middleControl: Yi, onAddGif: oi, onAddMediaFiles: ln, onChange: li, onEditMedia: ci, showError: t, toolbarRightControl: Hi, toolbarStyle: an, twitterArticleId: Pe }), e ? null : i.createElement(d.Z, { style: Zt }, i.createElement(C.Z, { spacing: "space32" }), S ? i.createElement(ae.ZP, { cellClickable: !1, displayMode: "UserDetailed", userId: S }) : null), Pa || Ba ? i.createElement(d.Z, { style: bt.overlay }, i.createElement(d.Z, { style: tn }, i.createElement(Q.Z, { mediaIds: Sa })), i.createElement(d.Z, { style: bt.mask })) : null, e ? i.createElement(d.Z, { style: bt.loading_container, testID: "loading-blocker" }, i.createElement(be, null)) : null);
                        }, [oi, ln, en, ci, r, w, Pe, A, S, Ja, Xa, Me, li, we, la, Ba, Pa, za, ke, Be, Yi, tn, Hi, an, Sa]),
                        on = i.useCallback((e) => () => Ie.push(e), [Ie]),
                        cn = i.useCallback(() => {
                            if (!(Ua && S === qt)) return i.createElement(ye.Z, { to: Ee.TC });
                            const e = ki;
                            return i.createElement(i.Fragment, null, ra ? i.createElement(G.Z, { defaultAspectRatio: e, media: ie, onCancel: vi, onDone: Zi }) : null, rn(), ca ? i.createElement(te.Z, { onClose: di, onUnpublish: pi, twitterArticleTitle: Vt }) : null, da ? i.createElement(V.ZP, { articleEntity: w, articleEntityMetadata: nn, hasPublishingFailed: ha, isActiveCreator: _e, isPublishing: ma, onClose: ui, onPublish: si, onScribe: Na }) : null);
                        }, [vi, Zi, di, ui, si, pi, rn, Na, w, nn, S, ie, ki, ha, _e, Ua, ma, ra, da, ca, Vt, qt]),
                        sn = Ze === he.ZP.FAILED,
                        dn = i.useMemo(() => [bt.container, !la && bt.containerBottomPadding, sn && bt.failureView], [sn, la]),
                        un = i.useCallback(
                            (e) => {
                                const t = e <= wt;
                                if (!Ua) return;
                                const { link: a } = (0, Y.Z)({ twitterArticleId: Pe, isFocusMode: Da });
                                return Pa ? i.createElement(f.ZP, { onClick: Ga, size: "small", style: bt.cancelMediaUploadButton, type: "brandOutlined" }, Ge) : Pa || Ba ? void 0 : i.createElement(d.Z, { style: Mt }, !la && !Oa && i.createElement(f.ZP, { disabled: ji, link: a, type: "brandText" }, Et), Ji, la && i.createElement(i.Fragment, null, i.createElement(Z.Z, { Icon: v.Z, iconSize: "large", label: dt, renderActionMenu: Fi(Bi), style: bt.shareButton }), i.createElement(Z.Z, { iconSize: "large", renderActionMenu: Fi(xi) })), !la && !Oa && !t && i.createElement(E.Z, { enableHover: !0, renderContent: Li, withArrow: !0 }, i.createElement(f.ZP, { "aria-label": yt, icon: Da ? _t : It, link: Da ? Yt : (0, Ee.DQ)(Pe), onClick: Si, type: "primaryText" })), !la && i.createElement(Z.Z, { iconSize: "large", renderActionMenu: Fi(xi) }));
                            },
                            [xi, Bi, Ga, Fi, Li, Si, Pe, Yt, Ji, Ua, Da, Oa, la, Ba, ji, Pa],
                        ),
                        mn = Ua
                            ? i.createElement(
                                  h.ZP,
                                  { color: "gray700", size: "subtext2", style: bt.saveStatus, weight: "normal" },
                                  (() => {
                                      if (Pa) return $e;
                                      if (Ba) return Je;
                                      if (Za && Ea) {
                                          const e = w?.lifecycle_state?.modified_at_secs,
                                              t = nn?.modified_at_secs;
                                          return i.createElement(j.Z, { isPublished: la, publishedAtMs: e ? "" + 1e3 * e : void 0, updatedAtMs: t ? "" + 1e3 * t : void 0 });
                                      }
                                      return De;
                                  })(),
                              )
                            : void 0,
                        pn = i.useMemo(() => i.createElement(d.Z, { style: dn }, i.createElement(I.Z, { failureMessage: pt, fetchStatus: Ze, render: cn, retryable: !1 })), [cn, dn, Ze]),
                        hn = (0, _.Zx)(({ containerWidth: e }) => un(e)),
                        yn = !z.ZP.isTwitterApp();
                    return Da ? i.createElement(O.ZP, { modalSize: O.Cg.full, style: bt.focusModeModal }, i.createElement(D.Z, { appBarStyle: bt.appBar, backButtonType: "back", history: Ie, isFullWidth: !0, onBackClick: on(Yt), rightControl: hn, title: mn }, pn)) : i.createElement(U.Z, { appBarStyle: bt.appBar, onBackClick: on(Ee.TC), rightControl: hn, screenType: "primaryDetail", title: mn, withBottomBorder: !1, withBottomTabBar: yn, withWideContainer: !0 }, pn);
                }),
                Bt = i.memo(Tt);
        },
        702801: (e, t, a) => {
            a.r(t), a.d(t, { ArticlePreviewScreen: () => z, default: () => W, failureMessage: () => F, previewTitle: () => x });
            var i = a(202784),
                n = a(325686),
                l = a(879113),
                r = a(392237),
                o = a(332920),
                c = a.n(o),
                s = a(323265),
                d = a(19640),
                u = a(980407),
                m = a(757700),
                p = a(253493),
                h = a(246134),
                y = a(444677),
                E = a(443781),
                f = a(231035),
                b = a(521514),
                g = a(293115),
                M = a(942893),
                C = a(312771),
                Z = a(689985),
                v = a(71620),
                I = a(668214),
                _ = a(143322),
                w = a(919022);
            const k = (e, t) => t.match.params.articleEntityId,
                P = (e, t) => {
                    const a = k(0, t);
                    return _.ZP.select(e, a);
                },
                A = (e, t) => {
                    const a = k(0, t);
                    return _.ZP.selectAuthorId(e, a);
                },
                S = (e, t) => {
                    const a = k(0, t);
                    return _.ZP.selectAuthor(e, a);
                },
                T = (e, t) => {
                    const a = ((e, t) => {
                            const a = k(0, t);
                            return _.ZP.selectFetchStatus(e, a);
                        })(e, t),
                        i = ((e, t) => {
                            const a = k(0, t);
                            return _.ZP.selectAuthorFetchStatus(e, a);
                        })(e, t);
                    return (0, C.h1)(a, i);
                },
                B = (0, I.Z)()
                    .propsFromState(() => ({ author: S, authorId: A, fetchStatus: T, articleEntity: P, articleId: k }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("ARTICLE_PREVIEW_SCREEN"), fetchArticleEntity: _.ZP.fetchOne, fetchUserIfNeeded: w.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "article-preview" }),
                x = c().hf6f2914,
                F = c().ef4602ec,
                L = { page: "article-preview" };
            function z(e) {
                const { analytics: t, articleEntity: a, articleId: r, author: o, authorId: c, createLocalApiErrorHandler: b, fetchArticleEntity: v, fetchStatus: I, fetchUserIfNeeded: _, history: w, location: k } = e,
                    { viewerUserId: P } = i.useContext(E.rC),
                    A = k.pathname.includes("focus");
                i.useEffect(
                    function () {
                        !a && r && v(r), c && !o && _(c).catch(b());
                    },
                    [o, c, b, v, _, a, r],
                );
                const S = i.useCallback(
                        (e) => {
                            const { is_user_follows_viewer: t = !1, is_viewer_follows_user: a = !1 } = o ? M.Z.getUserItem(o) : {};
                            return { note_details: { author_id: e, is_note_author_follows_viewer: t, is_viewer_follows_note_author: a, note_id: r } };
                        },
                        [o, r],
                    ),
                    T = i.useCallback(
                        ({ action: e, component: a, element: i }) => {
                            if (c) {
                                const n = S(c);
                                t.scribe({ component: a, element: i, action: e, data: n });
                            }
                        },
                        [t, c, S],
                    ),
                    B = i.useCallback(
                        ({ action: e, component: t, element: a }) => {
                            T({ action: e, component: t, element: a });
                        },
                        [T],
                    ),
                    z = P === c,
                    W = i.useCallback(() => (a && o ? i.createElement(n.Z, null, z ? i.createElement(n.Z, { style: A ? K.focus : null, testID: "articleEntityView" }, i.createElement(h.ZP, { author: o, onScribeEvent: B, twitterArticle: a })) : i.createElement(f.Z, null)) : null), [a, o, z, A, B]),
                    D = i.useMemo(() => [K.container, I === C.ZP.FAILED && K.failureView], [I]),
                    O = i.useMemo(() => i.createElement(n.Z, { style: D }, i.createElement(l.Z, { failureMessage: F, fetchStatus: I, render: W, retryable: !1 })), [W, I, D]),
                    U = z ? i.createElement(y.f, { isPublished: a?.lifecycle_state?.lifecycle === d.f.Published }) : void 0,
                    R = !s.ZP.isTwitterApp(),
                    N = (0, Z.lU)(r);
                return i.createElement(g.nO, { data: c ? S(c) : void 0, namespace: L }, A ? i.createElement(m.ZP, { modalSize: m.Cg.full }, i.createElement(u.Z, { backButtonType: "back", backLocation: N, history: w, isFullWidth: !0, rightControl: U, title: x }, O)) : i.createElement(p.Z, { backLocation: N, rightControl: U, screenType: "secondaryDetail", title: x, withBottomBorder: !1, withBottomTabBar: R, withWideContainer: !0 }, O));
            }
            const K = r.default.create((e) => ({ container: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, color: e.colors.text }, failureView: { paddingHorizontal: e.spaces.space36, paddingVertical: e.spaces.space28 }, module: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space16, overflow: "hidden" }, sidebar: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 }, focus: { maxWidth: b.Z.columnWidths.wide, marginHorizontal: "auto", width: "100%" } })),
                W = B(z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-dee3c9bb.8ec70eba.js.map
