"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-c6fe4ea4"],
    {
        682646: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => p, default: () => y });
            var i = a(807896),
                r = a(202784),
                n = a(536210),
                l = a(689985),
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
                    return c.length <= 0 || !a ? (d ? t.replace((0, l.lU)(d)) : t.replace(l.TC), null) : r.createElement(n.Z, (0, i.Z)({}, u, { history: t, initialMediaId: a, media: c, sensitiveMediaTabEnabled: !1 }));
                },
                h = m(p),
                y = r.memo(h);
        },
        506204: (e, t, a) => {
            a.r(t), a.d(t, { default: () => xt });
            a(136728);
            var i = a(202784),
                r = a(301503),
                n = a(370313),
                l = a.n(n),
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
                C = a(366635),
                M = a(661810),
                Z = a(247056),
                v = a(638236),
                _ = a(879113),
                I = a(537392),
                w = a(111677),
                k = a.n(w),
                A = a(717160),
                P = a(841972),
                S = a(647174),
                T = a(908478),
                x = a(803810),
                B = a(666536),
                F = a(516951),
                L = a(417144),
                D = a(323265),
                R = a(19640),
                z = a(774426),
                O = a(980407),
                U = a(757700),
                W = a(496364),
                H = a(246134),
                K = a(569999),
                N = a(874111),
                V = a(50439),
                j = a(201770),
                $ = a(443781),
                G = a(330815),
                J = a(199127),
                X = a(165336),
                q = a(286240),
                Q = a(442907),
                Y = a(637019),
                ee = a(600304),
                te = a(641353),
                ae = a(240089),
                ie = a(521514),
                re = a(47743),
                ne = a(128225),
                le = a(716233),
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
            var Ce = a(71620),
                Me = a(668214),
                Ze = a(143322),
                ve = a(497294),
                _e = a(390387),
                Ie = a(38562),
                we = a(601576),
                ke = a(919022);
            function Ae(e, t) {
                const { articleEntityId: a } = t.match.params;
                return c()("string" == typeof a, "articleEntityId must be specified in path"), a;
            }
            const Pe = (e, t) => {
                    const a = Ae(0, t);
                    return Ze.ZP.select(e, a);
                },
                Se = (e, t) => {
                    const a = Ae(0, t);
                    return Ze.ZP.selectAuthorId(e, a);
                },
                Te = (e, t) => {
                    const a = Ae(0, t);
                    return Ze.ZP.selectTweetId(e, a);
                },
                xe = (e, t) => {
                    const a = Ae(0, t);
                    return Ze.ZP.selectAuthor(e, a);
                },
                Be = (e, t) => {
                    const a = ((e, t) => {
                            const a = Ae(0, t);
                            return Ze.ZP.selectFetchStatus(e, a) || he.ZP.NONE;
                        })(e, t),
                        i = ((e, t) => {
                            const a = Ae(0, t);
                            return Ze.ZP.selectAuthorFetchStatus(e, a);
                        })(e, t);
                    return (0, he.h1)(a, i);
                },
                Fe = (e, t) => {
                    const a = Ae(0, t);
                    return Ze.ZP.selectArticleEntityTitle(e, a);
                },
                Le = (e, t) => {
                    const a = Ze.ZP.selectCoverMediaId(e);
                    if (a) return (0, ve.m3)(e, a)?.[0];
                },
                De = (0, Me.Z)()
                    .propsFromState(() => ({ allMedia: ve.gz, author: xe, authorId: Se, coverMedia: Le, dataSaverMode: Ie.IX, editorState: Ze.ZP.selectEditorState, fetchStatus: Be, isArticleEntityLoading: Ze.ZP.selectIsArticleEntityLoading, viewerUserId: _e._h, mediaBeingEdited: Ze.ZP.selectMediaBeingEdited, prevArticleEntityId: Ze.ZP.selectPrevArticleEntityId, mediaEntityKeyBeingEdited: Ze.ZP.selectMediaEntityKeyBeingEdited, mediaEntityKeyToFilesMap: Ze.ZP.selectMediaEntityKeyToFilesMap, mediaIdToLocalMediaIdMap: Ze.ZP.selectMediaIdToLocalMediaIdMap, prevMediaEntityKeys: Ze.ZP.selectPrevMediaEntityKeys, prevArticleEntityMedia: Ze.ZP.selectPrevArticleEntityMedia, title: Fe, tweetId: Te, articleEntity: Pe, isActiveCreator: _e.WM }))
                    .propsFromActions(() => ({ addMedia: ve.rA, addToast: we.fz, processMultipleMedia: ve.G$, removeMediaUpload: ve.WU, sendMetadata: ve.o6, setMediaMetadata: ve._B, uploadMedia: ve.$i, createLocalApiErrorHandler: (0, Ce.zr)("TWITTER_ARTICLE_COMPOSER"), deleteArticleEntity: Ze.ZP.delete, fetchArticleEntity: Ze.ZP.fetchOneIfNeeded, updateArticleEntityContent: Ze.ZP.updateContent, setEditorState: Ze.ZP.setEditorState, setPrevArticleEntityId: Ze.ZP.setPrevArticleEntityId, fetchUserIfNeeded: ke.ZP.fetchOneIfNeeded, publishArticleEntity: Ze.ZP.publish, unpublishArticleEntity: Ze.ZP.unpublish, setIsArticleEntityLoading: Ze.ZP.setIsArticleEntityLoading, updateArticleEntityTitle: Ze.ZP.updateTitle, addCoverMedia: Ze.ZP.addCoverMedia, removeCoverMedia: Ze.ZP.removeCoverMedia, updateArticleEntityCoverMedia: Ze.ZP.updateCoverMedia, setMediaBeingEdited: Ze.ZP.setMediaBeingEdited, setMediaEntityKeyBeingEdited: Ze.ZP.setMediaEntityKeyBeingEdited, setMediaEntityKeyToFilesMap: Ze.ZP.setMediaEntityKeyToFilesMap, setMediaIdToLocalMediaIdMap: Ze.ZP.setMediaIdToLocalMediaIdMap, setPrevMediaEntityKeys: Ze.ZP.setPrevMediaEntityKeys, setPrevArticleEntityMedia: Ze.ZP.setPrevArticleEntityMedia }))
                    .withAnalytics({ page: "article_composer" }),
                Re = k().ib067d6a,
                ze = (k().eb7ab862, k().d8047cc8),
                Oe = k().ce9a9736,
                Ue = k().f61c4bb0,
                We = k().dd63549e,
                He = k().a4d128bc,
                Ke = k().b4071e18,
                Ne = k().f586b7fa,
                Ve = k().f558d2e0,
                je = k().ab0fa9ba,
                $e = k().c5f35c98,
                Ge = k().d739d83e,
                Je = k().a94efeda,
                Xe = k().f277e94a,
                qe = k().gd79d45a,
                Qe = k().g1866bb2,
                Ye = k().a6a78df4,
                et = k().ia656f1c,
                tt = k().d3855e36,
                at = k().f325958e,
                it = k().ie5d9064,
                rt = k().e03487a0,
                nt = k().e938d562,
                lt = k().e449c546,
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
                Ct = [bt.row, bt.controls],
                Mt = [bt.editorInput],
                Zt = [bt.horizontalPadding, bt.footer],
                vt = [bt.textCountLabel, bt.message],
                _t = i.createElement(P.default, null),
                It = i.createElement(S.default, null),
                wt = g.default.theme.breakpoints.xSmall + 70,
                kt = 1e3,
                At = 3e3,
                Pt = (e, t, a) => [...e.slice(0, t), a, ...e.slice(t + 1)];
            const St = (e, t) => {
                    if (e) {
                        const a = t ? (0, r.convertFromRaw)(t) : r.ContentState.createFromText(""),
                            i = r.EditorState.set(e, { currentContent: a, directionMap: l().getDirectionMap(a, e.getDirectionMap()), selection: r.SelectionState.createEmpty(a.getFirstBlock().key) });
                        return u.Z.convertEmojiToEntities(i);
                    }
                    return ((e) => {
                        const t = u.Z.initEditorState(e);
                        return u.Z.convertEmojiToEntities(t);
                    })(t);
                },
                Tt = De(function (e) {
                    const {
                        addCoverMedia: t,
                        addMedia: a,
                        addToast: n,
                        allMedia: l,
                        analytics: o,
                        articleEntity: w,
                        author: P,
                        authorId: S,
                        coverMedia: ie,
                        createLocalApiErrorHandler: fe,
                        deleteArticleEntity: ge,
                        editorState: Ce,
                        fetchArticleEntity: Me,
                        fetchStatus: Ze,
                        fetchUserIfNeeded: ve,
                        history: _e,
                        isActiveCreator: Ie,
                        isArticleEntityLoading: we,
                        location: ke,
                        match: {
                            params: { articleEntityId: Ae },
                        },
                        mediaBeingEdited: Pe,
                        mediaEntityKeyBeingEdited: Se,
                        mediaEntityKeyToFilesMap: Te,
                        mediaIdToLocalMediaIdMap: xe,
                        prevArticleEntityId: Be,
                        prevArticleEntityMedia: Fe,
                        prevMediaEntityKeys: Le,
                        processMultipleMedia: De,
                        publishArticleEntity: Tt,
                        removeCoverMedia: xt,
                        removeMediaUpload: Bt,
                        sendMetadata: Ft,
                        setEditorState: Lt,
                        setIsArticleEntityLoading: Dt,
                        setMediaBeingEdited: Rt,
                        setMediaEntityKeyBeingEdited: zt,
                        setMediaEntityKeyToFilesMap: Ot,
                        setMediaIdToLocalMediaIdMap: Ut,
                        setMediaMetadata: Wt,
                        setPrevArticleEntityId: Ht,
                        setPrevArticleEntityMedia: Kt,
                        setPrevMediaEntityKeys: Nt,
                        title: Vt,
                        tweetId: jt,
                        unpublishArticleEntity: $t,
                        updateArticleEntityContent: Gt,
                        updateArticleEntityCoverMedia: Jt,
                        updateArticleEntityTitle: Xt,
                        uploadMedia: qt,
                        viewerUserId: Qt,
                    } = e;
                    c()(Ae, "articleEntityId must be specified in path");
                    const Yt = (0, Ee.lU)(Ae),
                        { featureSwitches: ea } = (0, $.QZ)(),
                        ta = 1e3 * ea.getNumberValue("responsive_web_twitter_article_character_limit", 25),
                        aa = ea.getNumberValue("responsive_web_twitter_article_block_limit", 1e4),
                        ia = ea.getNumberValue("responsive_web_twitter_article_title_limit") || 100,
                        ra = i.useMemo(() => Math.max(ea.getNumberValue("responsive_web_twitter_article_content_debounce_ms", At), kt), [ea]),
                        na = w?.lifecycle_state?.lifecycle === R.f.Published && !!jt,
                        [la, oa] = i.useState(!1),
                        [ca, sa] = i.useState(!1),
                        [da, ua] = i.useState(!1),
                        [ma, pa] = i.useState(!1),
                        [ha, ya] = i.useState(!1),
                        [Ea, fa] = i.useState(!0),
                        [ba, ga] = i.useState(!1),
                        [Ca, Ma] = i.useState(null),
                        [Za, va] = i.useState(!0),
                        [_a, Ia] = i.useState(!1),
                        [wa, ka] = i.useState(!1),
                        [Aa, Pa] = i.useState(!1),
                        [Sa, Ta] = i.useState([]),
                        [xa, Ba] = i.useState(!1),
                        [Fa, La] = i.useState(null),
                        [Da, Ra] = i.useState(!0),
                        za = i.useRef(null),
                        Oa = ke.pathname.includes("focus"),
                        Ua = D.ZP.isMobileOS(),
                        Wa = Ze === he.ZP.LOADED,
                        Ha = i.useCallback(() => {
                            if (S) return { note_details: { author_id: S, is_note_author_follows_viewer: !1, is_viewer_follows_note_author: !1, note_id: Ae } };
                        }, [Ae, S]),
                        Ka = i.useCallback(
                            ({ action: e, component: t, element: a }) => {
                                o.scribe({ component: t, element: a, action: e, data: Ha() });
                            },
                            [Ha, o],
                        );
                    i.useEffect(() => {
                        Ka({ action: "impression" });
                    }, [Ka, Ae]),
                        i.useEffect(() => {
                            Me(Ae).catch(fe()), S && ve(S).catch(fe()), Ma(null);
                        }, [S, fe, ve, Me, Ae]);
                    const Na = i.useCallback((e) => Object.keys(e).filter((t) => e[t].type === pe.DC.MEDIA), []),
                        Va = i.useCallback((e) => Na(e).map((t) => e[t].data?.entityKey || ""), [Na]),
                        ja = i.useCallback(
                            (e) => {
                                const t = e.getCurrentContent(),
                                    a = (0, r.convertToRaw)(t).entityMap,
                                    i = Va(a);
                                Nt(i);
                            },
                            [Va, Nt],
                        ),
                        $a = () => {
                            Pa(!1), Ta([]);
                        },
                        Ga = i.useCallback(() => {
                            Bt(Sa), $a();
                        }, [Bt, Sa]);
                    i.useEffect(() => {
                        za.current = Ae;
                        const e = !Be || Be !== w?.rest_id,
                            t = e || !(0, T.Z)(Fe, w?.media_entities);
                        if (w && !na && t) {
                            Ht(w?.rest_id), Kt(w?.media_entities), ga(!1);
                            const t = St(Ce, w?.content_state && w?.content_state.blocks.length > 0 ? (0, ce.K7)(w?.content_state) : void 0),
                                i = e ? t : Ce;
                            e &&
                                (Ga(),
                                Fa?.map((e) => e.cancel()),
                                (0, N.ii)(i).forEach((e) => {
                                    i.getCurrentContent().mergeEntityData(e, { entityKey: e });
                                }),
                                ja(i));
                            const n = w?.media_entities?.filter((e) => e?.media_id && !xe[e.media_id]);
                            if (n && n.length > 0) {
                                e && Dt(!0);
                                const t = (0, ue.Dp)(n).externalMedia;
                                let l;
                                const o = t.map(({ url: e }) => (0, de.P)((0, ne.f)(e)));
                                La(o);
                                Promise.all(o.map((e) => e.promise))
                                    .then((e) => ((l = [...e]), a(e, { location: le.vC.TwitterArticle })))
                                    .then((e) =>
                                        e.map((e, a) => {
                                            const { altText: i, sensitiveMediaWarning: r } = t[a];
                                            return (i || r) && Wt(e.id, { ...(0, x.Z)(i ? { altText: i } : null), ...(0, x.Z)(r ? { sensitiveMediaWarning: r } : null) }), e.id;
                                        }),
                                    )
                                    .then((e) => {
                                        const t = e.reduce((e, t, a) => ((e[n[a].media_id || ""] = t), e), {}),
                                            a = { ...xe, ...t };
                                        Ut(a);
                                        const o = (0, r.convertToRaw)(i.getCurrentContent()).entityMap,
                                            c = e.reduce((e, t, a) => {
                                                const i = n[a].media_id,
                                                    r = l[a],
                                                    c = Object.keys(o).find((e) => {
                                                        const t = o[e],
                                                            a = t.data?.mediaItems?.map((e) => e.mediaId);
                                                        return a?.includes(i);
                                                    }),
                                                    s = c && o[c].data;
                                                if (s) {
                                                    const t = s.mediaItems.findIndex((e) => e.mediaId === i),
                                                        a = s.entityKey,
                                                        n = e[a];
                                                    let l;
                                                    return (l = n ? Pt(n, t, r) : s.mediaItems.map((e, a) => (a === t ? r : null))), { ...e, [a]: l };
                                                }
                                                return e;
                                            }, Te);
                                        Ot(c), za.current === w?.rest_id && Lt(r.EditorState.forceSelection(i, i.getSelection()));
                                    })
                                    .catch((e) => {
                                        if (e.message === de.J) return Promise.resolve();
                                    })
                                    .finally(() => {
                                        Dt(!1);
                                    });
                            } else e && (Lt(i), ja(i));
                        }
                    }, [w?.rest_id, na, w?.media_entities]);
                    const Ja = i.useMemo(() => (0, N.eE)(Ce) > aa, [aa, Ce]),
                        Xa = i.useCallback((e) => (0, N.c6)(e) > ta, [ta]),
                        qa = i.useMemo(() => Xa(Ce), [Ce, Xa]),
                        Qa = i.useCallback(
                            (e) => {
                                const t = Xa(e);
                                if (t || wa) {
                                    const a = u.Z.updateOverflowStyle(e, ta, wa);
                                    return ka(t), a;
                                }
                                return e;
                            },
                            [ta, wa, Xa],
                        ),
                        Ya = i.useCallback(
                            (e) => {
                                if ((0, oe.O9)(e) && e.code === L.d.CANCELED) return Promise.resolve();
                                const t = (0, oe.ZP)(e);
                                if ((0, oe.O9)(e) && t) return n(t), Promise.resolve();
                                fe({ showToast: !0 })(e);
                            },
                            [n, fe],
                        ),
                        ei = i.useCallback(
                            (e, t) => {
                                qt(e).then(t).catch(Ya);
                            },
                            [Ya, qt],
                        ),
                        ti = i.useCallback(
                            ({ media: e, mediaIds: t, thenCallback: a }) => {
                                e[0].externalMediaDetails
                                    ? ei(t, a)
                                    : De(e, { onFailure: Bt }).then((e) => {
                                          ei(t, a);
                                      });
                            },
                            [ei, De, Bt],
                        ),
                        ai = i.useCallback(
                            (e, t) => {
                                const a = (0, r.convertToRaw)(e);
                                Gt(Ae, { content_state: (0, se.kf)(a) })
                                    .catch(fe({ showToast: !0 }))
                                    .finally(() => {
                                        va(!0), Ia(!1), t?.();
                                    });
                            },
                            [fe, Gt, Ae],
                        ),
                        ii = i.useCallback(
                            (e, t, i) => {
                                if (Xa(e)) return;
                                va(!1);
                                const n = e.getCurrentContent(),
                                    l = (0, r.convertToRaw)(n).entityMap,
                                    o = Va(l).filter((e) => !Le.includes(e) && e !== t);
                                if ((ja(e), o.length > 0)) {
                                    Promise.all(
                                        o.map((e) => {
                                            const t = Te[e];
                                            return a(t, { location: le.vC.TwitterArticle })
                                                .then((e) => De(e, { onFailure: Bt }))
                                                .then((e) => qt(e.map((e) => e.id)))
                                                .then((t) => ({ uploadedMedia: t, entityKey: e }));
                                        }),
                                    )
                                        .then((e) => {
                                            const t = e.reduce((e, { entityKey: t, uploadedMedia: a }) => {
                                                const i = { entityKey: t, mediaItems: a.map((e) => ({ mediaCategory: (0, N.KU)(e), localMediaId: e.id, mediaId: e.uploadId })) };
                                                return e.mergeEntityData(t, i);
                                            }, n);
                                            ai(t, i);
                                        })
                                        .catch(Ya);
                                } else ai(n, i);
                            },
                            [Va, Ya, ai, ja, a, Xa, Te, Le, De, Bt, qt],
                        ),
                        ri = i.useMemo(() => (0, B.Z)(ii, ra), [ii, ra]),
                        ni = i.useCallback(
                            (e, t = !1, a, i) => {
                                Ra(!1), ba && ga(!1);
                                const n = Qa(u.Z.convertEmojiToEntities(e));
                                Lt(n);
                                ((Ae === Be && !(0, T.Z)((0, r.convertToRaw)(n.getCurrentContent()), (0, r.convertToRaw)(Ce.getCurrentContent()))) || t) && (Ia(!0), ri(n, a, i));
                            },
                            [Qa, ri, Ae, Ce, ba, Be, Lt],
                        );
                    i.useEffect(() => {
                        !(function (e) {
                            const { allMedia: t, editorState: a, mediaBeingEdited: i, mediaEntityKeyBeingEdited: n, mediaIdToLocalMediaIdMap: l, onChange: o, processAndUploadMedia: c, sendMetadata: s, setEditorState: d, setIsSavingEditedMedia: u, setMediaBeingEdited: m, setMediaIdToLocalMediaIdMap: p } = e,
                                h = i?.id,
                                y = t.find((e) => e.id === h);
                            if (h && i && n && y && !y.uploading) {
                                if (!(0, T.Z)(i, y)) {
                                    const e = Object.keys(l).find((e) => l[e] === h);
                                    e &&
                                        (u(!0),
                                        c({
                                            media: [y],
                                            mediaIds: [h],
                                            thenCallback: ([t]) => {
                                                const i = t.mediaMetadata?.altText || t.mediaMetadata?.defaultAltText,
                                                    r = t.uploadId;
                                                if (r) {
                                                    s({ media_id: r, ...(!!i && { alt_text: { text: i } }) }), p({ ...l, [e]: void 0 });
                                                    const c = (0, N.Sc)(a, n, e, t);
                                                    o(c, !0, void 0, () => {
                                                        m(void 0), u(!1);
                                                    });
                                                }
                                            },
                                        })),
                                        d(r.EditorState.forceSelection(a, a.getSelection()));
                                }
                            }
                        })({ mediaBeingEdited: Pe, allMedia: l, mediaEntityKeyBeingEdited: Se, mediaIdToLocalMediaIdMap: xe, processAndUploadMedia: ti, sendMetadata: Ft, createLocalApiErrorHandler: fe, setMediaIdToLocalMediaIdMap: Ut, editorState: Ce, onChange: ni, setMediaBeingEdited: Rt, setEditorState: Lt, setIsSavingEditedMedia: Ba });
                    }, [l]);
                    const li = i.useCallback(
                            (e, t) => {
                                const a = e.map((e) => e.id);
                                if ((Ta(a), (0, re.X2)(e))) {
                                    ti({
                                        media: e,
                                        mediaIds: a,
                                        thenCallback: (e) => {
                                            const { entityKey: a, newEditorState: i } = (0, N.r_)(Ce, e);
                                            t && Ot({ ...Te, [a]: t }), ni(i, !1, a, $a);
                                        },
                                    });
                                } else n({ text: Re }), Bt(a), $a();
                            },
                            [ti, n, Ce, ni, Te, Bt, Ot],
                        ),
                        oi = i.useCallback(
                            (e) => {
                                Pa(!0), li(e);
                            },
                            [li],
                        ),
                        ci = i.useCallback(
                            (e, t) => {
                                const a = l.find((e) => e.id === t);
                                a && (Rt(a), zt(e), _e.push(Ee.hY, { mediaId: t, articleEntityId: Ae }));
                            },
                            [l, Ae, _e, Rt, zt],
                        ),
                        si = i.useCallback(
                            (e = !1, t, a) => {
                                pa(!0),
                                    ya(!1),
                                    Tt(Ae, a)
                                        .then((t) => {
                                            const a = t?.result && "string" == typeof t.result ? t?.entities?.articleEntities?.[t.result]?.metadata?.tweet_results?.result?.rest_id : null,
                                                i = a ? (0, Ee.JG)(a, P?.screen_name) : null;
                                            let r;
                                            e && s.Z.isAvailable() && i && s.Z.setString(i), (r = e ? He : We), n({ text: r, ...(i ? { action: { label: Xe, link: { pathname: i, openInSameFrame: !1, external: !0 } } } : null) }), Oa && _e.replace({ pathname: Yt }), ua(!1);
                                            const l = a ? (0, Ee.N3)(a, P?.screen_name) : null;
                                            l && _e.push({ pathname: l });
                                        })
                                        .catch(fe({ customErrorHandler: (e) => (t(), ya(!0), []) }))
                                        .finally(() => pa(!1));
                            },
                            [n, Ae, Yt, P?.screen_name, fe, _e, Oa, Tt],
                        ),
                        di = i.useCallback(() => {
                            sa((e) => !e);
                        }, []),
                        ui = i.useCallback(() => {
                            ua((e) => !e);
                        }, []),
                        mi = i.useCallback(() => {
                            Ka({ element: "confirm_unpublish_button", action: "click" });
                        }, [Ka]),
                        pi = i.useCallback(() => {
                            $t(Ae)
                                .then(() => {
                                    mi(), n({ text: ht });
                                })
                                .catch(fe({}))
                                .finally(di);
                        }, [mi, n, Ae, fe, $t, di]),
                        hi = i.useCallback(() => {
                            na ? (sa(!0), Ka({ element: "unpublish_button", action: "click" })) : (ua(!0), Ka({ element: "publish_button", action: "click" }));
                        }, [Ka, na]),
                        yi = i.useCallback(() => {
                            ga(!0);
                        }, [ga]),
                        Ei = i.useCallback(
                            (e) => {
                                Xt(Ae, { title: e || "" })
                                    .catch(fe({}))
                                    .finally(() => {
                                        fa(!0);
                                    });
                            },
                            [Ae, fe, Xt],
                        ),
                        fi = i.useMemo(() => (0, B.Z)(Ei, kt), [Ei]),
                        bi = i.useCallback(
                            (e) => {
                                const t = e.target.value.replace(/[\r\n]+/g, " ");
                                Ma(t), fa(!1), fi(t);
                            },
                            [fi],
                        ),
                        gi = i.useCallback((e) => {
                            "Enter" === e.key && e.preventDefault();
                        }, []),
                        Ci = i.useCallback(
                            ([e]) => {
                                t(e), oa(!0);
                            },
                            [t],
                        ),
                        Mi = i.useCallback(
                            (e) => {
                                Bt(e), xt(e);
                            },
                            [xt, Bt],
                        ),
                        Zi = i.useCallback(() => {
                            ie &&
                                (qt([ie.id]).then(([e]) => {
                                    Jt(Ae, { mediaId: e.uploadId, mediaCategory: "DraftTweetImage" })
                                        .then(() => {
                                            Mi(ie.id);
                                        })
                                        .catch(fe({ showToast: !0 }));
                                }),
                                oa(!1));
                        }, [Mi, Ae, ie, fe, Jt, qt]),
                        vi = i.useCallback(() => {
                            ie && Mi(ie.id), oa(!1);
                        }, [Mi, ie]),
                        _i = i.useCallback(() => {
                            Jt(Ae, { mediaId: void 0, mediaCategory: void 0 }).catch(fe({ showToast: !0 }));
                        }, [Ae, fe, Jt]),
                        Ii = w?.cover_media,
                        wi = i.useMemo(() => ("ApiImage" === Ii?.media_info?.__typename && Ii?.media_info?.original_img_url ? { uri: Ii?.media_info?.original_img_url } : void 0), [Ii?.media_info]),
                        ki = (0, ce.Si)(),
                        Ai = i.useMemo(() => i.createElement(m.Z, { ratio: ki }, wi ? i.createElement(p.Z, { source: wi, style: bt.coverMedia }) : null), [ki, wi]),
                        Pi = i.useCallback(() => {
                            _e.push({ query: { text: jt ? (0, Ee.JG)(jt, P?.screen_name) : "" }, pathname: "/messages/compose" });
                        }, [P?.screen_name, _e, jt]),
                        Si = i.useCallback(() => {
                            Ka({ element: Oa ? "unfocus_button" : "focus_button", action: "click" });
                        }, [Ka, Oa]),
                        Ti = i.useCallback(() => {
                            Ka({ component: na ? "delete_sheet_published" : "delete_sheet_draft", element: "confirm_delete", action: "click" });
                        }, [Ka, na]),
                        xi = i.useCallback(() => [{ text: Ue, onClick: Pi, Icon: A.default }, ...(jt && P ? [(0, q.Z)({ addToast: n, id: jt, screenName: P.screen_name, scribeAction: F.Z })] : [])], [Pi, n, P, jt]),
                        Bi = i.useCallback(() => {
                            const e = [];
                            return na && jt && P ? e.push((0, ee.Z)({ id: jt, screenName: P.screen_name })) : Ua && e.push((0, Y.Z)({ twitterArticleId: Ae })), e.push((0, Q.Z)({ addToast: n, createLocalApiErrorHandler: fe, deleteTwitterArticle: ge, history: _e, isPublished: na, location: ke, onScribeEvent: Ti, twitterArticleId: Ae })), e;
                        }, [Ti, n, Ae, P, fe, ge, _e, Ua, na, ke, jt]),
                        Fi = i.useCallback((e) => (t) => i.createElement(z.default, { actionItems: e(), onClose: t }), []),
                        Li = i.useCallback(() => i.createElement(h.ZP, { style: bt.popoverContent }, Oa ? Qe : qe), [Oa]),
                        Di = Ii || ie,
                        Ri = !!(0, N.ci)(Ce.getCurrentContent()),
                        zi = !!Vt?.trim(),
                        Oi = i.useMemo(() => {
                            const e = null === Ca ? Vt : Ca,
                                t = e ? (0, me.k)(e) : null;
                            return t?.weightedLength || 0;
                        }, [Ca, Vt]),
                        Ui = Oi > ia,
                        Wi = (0, N.WF)(Ce);
                    let Hi = Wi;
                    Wi > 1 && (Hi = y.ZP.getFormattedCount(Wi));
                    const Ki = i.useCallback(
                            ({ message: e, title: t }) =>
                                () =>
                                    i.createElement(d.Z, { style: bt.popoverContent }, i.createElement(d.Z, { style: bt.message }, t), i.createElement(d.Z, { style: bt.message }, e)),
                            [],
                        ),
                        Ni = (function () {
                            let e,
                                t,
                                a,
                                r = !1;
                            if (ba) {
                                e = Ui;
                                const r = { countElement: i.createElement(h.ZP, { color: e ? "red500" : "text", weight: "bold" }) },
                                    n = { maxLimit: ia, count: Oi };
                                (t = i.createElement(h.ZP, null, ut)), (a = i.createElement(h.ZP, null, i.createElement(k().I18NFormatMessage, { $i18n: "hb92c979", maxLimit: n.maxLimit }, i.cloneElement(r.countElement, null, k().bede965c({ count: n.count })))));
                            } else (r = !0), (a = mt({ count: Hi }));
                            return i.createElement(d.Z, { style: bt.wordCountPopover }, i.createElement(E.Z, { disabled: r, enableHover: !0, renderContent: Ki({ title: a, message: t }), withArrow: !0 }, i.createElement(h.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: vt }, a)));
                        })(),
                        Vi = i.useCallback(() => i.createElement(h.ZP, { style: bt.popoverContent }, zi || Ri ? (!zi && qa ? lt : !Ri && Ui ? nt : zi ? (Ri ? (Ui && qa ? rt : Ui ? at : qa ? it : st) : et) : tt) : Ye), [qa, Ri, zi, Ui]),
                        ji = !Ea || !Za || Aa || xa || _a,
                        $i = !Ri || !zi || ji || Ui || qa || Ja,
                        Gi = i.useMemo(() => i.createElement(f.ZP, { disabled: !na && $i, onClick: hi, size: "small", style: na ? bt.unpublishButton : void 0, type: na ? "brandText" : "brandFilled" }, na ? Ve : ze), [hi, na, $i]),
                        Ji = i.useMemo(() => (na ? Gi : i.createElement(E.Z, { enableHover: !0, renderContent: Vi, withArrow: !0 }, Gi)), [Vi, Gi, na]),
                        Xi = i.useMemo(() => i.createElement(h.ZP, { size: "title1", weight: "heavy" }, i.createElement(b.Z, { inputStyle: gt, key: `title-input-${Ae}`, maxLength: ia, maxNumberOfLines: 100, multiline: !0, name: Ke, numberOfLines: 1, onChange: bi, onFocus: yi, onKeyPress: gi, placeholder: Ne, placeholderTextColor: g.default.theme.colors.gray500, style: bt.title, styleType: "selection", value: null === Ca ? Vt : Ca })), [bi, yi, gi, Ae, ia, Ca, Vt]),
                        qi = i.useMemo(() => (P ? i.createElement(C.Z, { isBlueVerified: P.is_blue_verified, isVerified: P.verified, name: P.name, profileImageUrl: P.profile_image_url_https, screenName: P.screen_name, style: bt.horizontalPadding, verifiedType: P.verified_type, withLink: !0 }) : null), [P]),
                        Qi = i.useMemo(() => i.createElement(d.Z, { style: !Di && bt.emptyCoverMedia }, i.createElement(J.default, { aspectRatio: ki, currentContent: Ai, description: Di ? void 0 : ft, location: le.vC.TwitterArticle, maskStyle: bt.coverMediaMaskStyle, mediaItem: ie, onChange: Ci, onFailure: Mi, onRemove: Di ? _i : void 0 })), [Mi, Ci, _i, ie, ki, Ai, Di]),
                        Yi = i.useMemo(() => i.createElement(i.Fragment, null, Qi, Xi, qi), [qi, Qi, Xi]),
                        er = i.useCallback(
                            (e) => {
                                const t = window.getSelection();
                                if ("Range" === t.type && t.rangeCount) {
                                    const a = t.getRangeAt(0).commonAncestorContainer;
                                    if (e.currentTarget.contains(a)) return;
                                }
                                n({ text: je, action: { label: Ve, onAction: hi } });
                            },
                            [hi, n],
                        ),
                        tr = i.useMemo(() => [bt.progressBar, !Oa && bt.progressBarMaxWidth], [Oa]),
                        ar = i.useMemo(() => [Oa && bt.toolbarFocusStyle], [Oa]),
                        ir = w?.metadata,
                        rr = i.useCallback(
                            (e) => {
                                Pa(!0);
                                const t = [...e];
                                a(e, { location: le.vC.TwitterArticle }).then((e) => {
                                    li(e, t);
                                });
                            },
                            [li, a],
                        ),
                        nr = i.useCallback(() => {
                            if (!w || !P) return null;
                            if (na) return i.createElement(d.Z, { style: bt.publishedArticle }, i.createElement(H.ZP, { author: P, onContainerPress: er, twitterArticle: w }));
                            const e = we || Da,
                                t = qa || Ja,
                                a = qa ? ot : ct;
                            return i.createElement(i.Fragment, null, i.createElement(K.Z, { allMedia: l, contentHorizontalPadding: g.default.theme.spaces.space48, editorState: Ce, errorText: a, inputStyle: Mt, location: ke, mediaIdToLocalMediaIdMap: xe, middleControl: Yi, onAddGif: oi, onAddMediaFiles: rr, onChange: ni, onEditMedia: ci, showError: t, toolbarRightControl: Ni, toolbarStyle: ar, twitterArticleId: Ae }), e ? null : i.createElement(d.Z, { style: Zt }, i.createElement(M.Z, { spacing: "space32" }), S ? i.createElement(ae.ZP, { cellClickable: !1, displayMode: "UserDetailed", userId: S }) : null), Aa || xa ? i.createElement(d.Z, { style: bt.overlay }, i.createElement(d.Z, { style: tr }, i.createElement(X.Z, { mediaIds: Sa })), i.createElement(d.Z, { style: bt.mask })) : null, e ? i.createElement(d.Z, { style: bt.loading_container, testID: "loading-blocker" }, i.createElement(be, null)) : null);
                        }, [oi, rr, er, ci, l, w, Ae, P, S, Ja, qa, Ce, ni, we, na, xa, Aa, Da, ke, xe, Yi, tr, Ni, ar, Sa]),
                        lr = i.useCallback((e) => () => _e.push(e), [_e]),
                        or = i.useCallback(() => {
                            if (!(Wa && S === Qt)) return i.createElement(ye.Z, { to: Ee.TC });
                            const e = ki;
                            return i.createElement(i.Fragment, null, la ? i.createElement(G.Z, { defaultAspectRatio: e, media: ie, onCancel: vi, onDone: Zi }) : null, nr(), ca ? i.createElement(te.Z, { onClose: di, onUnpublish: pi, twitterArticleTitle: Vt }) : null, da ? i.createElement(V.ZP, { articleEntity: w, articleEntityMetadata: ir, hasPublishingFailed: ha, isActiveCreator: Ie, isPublishing: ma, onClose: ui, onPublish: si, onScribe: Ka }) : null);
                        }, [vi, Zi, di, ui, si, pi, nr, Ka, w, ir, S, ie, ki, ha, Ie, Wa, ma, la, da, ca, Vt, Qt]),
                        cr = Ze === he.ZP.FAILED,
                        sr = i.useMemo(() => [bt.container, !na && bt.containerBottomPadding, cr && bt.failureView], [cr, na]),
                        dr = i.useCallback(
                            (e) => {
                                const t = e <= wt;
                                if (!Wa) return;
                                const { link: a } = (0, Y.Z)({ twitterArticleId: Ae, isFocusMode: Oa });
                                return Aa ? i.createElement(f.ZP, { onClick: Ga, size: "small", style: bt.cancelMediaUploadButton, type: "brandOutlined" }, Ge) : Aa || xa ? void 0 : i.createElement(d.Z, { style: Ct }, !na && !Ua && i.createElement(f.ZP, { disabled: ji, link: a, type: "brandText" }, Et), Ji, na && i.createElement(i.Fragment, null, i.createElement(Z.Z, { Icon: v.Z, iconSize: "large", label: dt, renderActionMenu: Fi(xi), style: bt.shareButton }), i.createElement(Z.Z, { iconSize: "large", renderActionMenu: Fi(Bi) })), !na && !Ua && !t && i.createElement(E.Z, { enableHover: !0, renderContent: Li, withArrow: !0 }, i.createElement(f.ZP, { "aria-label": yt, icon: Oa ? It : _t, link: Oa ? Yt : (0, Ee.DQ)(Ae), onClick: Si, type: "primaryText" })), !na && i.createElement(Z.Z, { iconSize: "large", renderActionMenu: Fi(Bi) }));
                            },
                            [Bi, xi, Ga, Fi, Li, Si, Ae, Yt, Ji, Wa, Oa, Ua, na, xa, ji, Aa],
                        ),
                        ur = Wa
                            ? i.createElement(
                                  h.ZP,
                                  { color: "gray700", size: "subtext2", style: bt.saveStatus, weight: "normal" },
                                  (() => {
                                      if (Aa) return $e;
                                      if (xa) return Je;
                                      if (Za && Ea) {
                                          const e = w?.lifecycle_state?.modified_at_secs,
                                              t = ir?.modified_at_secs;
                                          return i.createElement(j.Z, { isPublished: na, publishedAtMs: e ? "" + 1e3 * e : void 0, updatedAtMs: t ? "" + 1e3 * t : void 0 });
                                      }
                                      return Oe;
                                  })(),
                              )
                            : void 0,
                        mr = i.useMemo(() => i.createElement(d.Z, { style: sr }, i.createElement(_.Z, { failureMessage: pt, fetchStatus: Ze, render: or, retryable: !1 })), [or, sr, Ze]),
                        pr = (0, I.Zx)(({ containerWidth: e }) => dr(e)),
                        hr = !D.ZP.isTwitterApp();
                    return Oa ? i.createElement(U.ZP, { modalSize: U.Cg.full, style: bt.focusModeModal }, i.createElement(O.Z, { appBarStyle: bt.appBar, backButtonType: "back", history: _e, isFullWidth: !0, onBackClick: lr(Yt), rightControl: pr, title: ur }, mr)) : i.createElement(W.Z, { appBarStyle: bt.appBar, onBackClick: lr(Ee.TC), rightControl: pr, screenType: "primaryDetail", title: ur, withBottomBorder: !1, withBottomTabBar: hr, withWideContainer: !0 }, mr);
                }),
                xt = i.memo(Tt);
        },
        702801: (e, t, a) => {
            a.r(t), a.d(t, { ArticlePreviewScreen: () => D, default: () => z, failureMessage: () => F, previewTitle: () => B });
            var i = a(202784),
                r = a(325686),
                n = a(879113),
                l = a(392237),
                o = a(111677),
                c = a.n(o),
                s = a(323265),
                d = a(19640),
                u = a(980407),
                m = a(757700),
                p = a(496364),
                h = a(246134),
                y = a(444677),
                E = a(443781),
                f = a(56851),
                b = a(521514),
                g = a(293115),
                C = a(942893),
                M = a(312771),
                Z = a(689985),
                v = a(71620),
                _ = a(668214),
                I = a(143322),
                w = a(919022);
            const k = (e, t) => t.match.params.articleEntityId,
                A = (e, t) => {
                    const a = k(0, t);
                    return I.ZP.select(e, a);
                },
                P = (e, t) => {
                    const a = k(0, t);
                    return I.ZP.selectAuthorId(e, a);
                },
                S = (e, t) => {
                    const a = k(0, t);
                    return I.ZP.selectAuthor(e, a);
                },
                T = (e, t) => {
                    const a = ((e, t) => {
                            const a = k(0, t);
                            return I.ZP.selectFetchStatus(e, a);
                        })(e, t),
                        i = ((e, t) => {
                            const a = k(0, t);
                            return I.ZP.selectAuthorFetchStatus(e, a);
                        })(e, t);
                    return (0, M.h1)(a, i);
                },
                x = (0, _.Z)()
                    .propsFromState(() => ({ author: S, authorId: P, fetchStatus: T, articleEntity: A, articleId: k }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("ARTICLE_PREVIEW_SCREEN"), fetchArticleEntity: I.ZP.fetchOne, fetchUserIfNeeded: w.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "article-preview" }),
                B = c().hf6f2914,
                F = c().ef4602ec,
                L = { page: "article-preview" };
            function D(e) {
                const { analytics: t, articleEntity: a, articleId: l, author: o, authorId: c, createLocalApiErrorHandler: b, fetchArticleEntity: v, fetchStatus: _, fetchUserIfNeeded: I, history: w, location: k } = e,
                    { viewerUserId: A } = i.useContext(E.rC),
                    P = k.pathname.includes("focus");
                i.useEffect(
                    function () {
                        !a && l && v(l), c && !o && I(c).catch(b());
                    },
                    [o, c, b, v, I, a, l],
                );
                const S = i.useCallback(
                        (e) => {
                            const { is_user_follows_viewer: t = !1, is_viewer_follows_user: a = !1 } = o ? C.Z.getUserItem(o) : {};
                            return { note_details: { author_id: e, is_note_author_follows_viewer: t, is_viewer_follows_note_author: a, note_id: l } };
                        },
                        [o, l],
                    ),
                    T = i.useCallback(
                        ({ action: e, component: a, element: i }) => {
                            if (c) {
                                const r = S(c);
                                t.scribe({ component: a, element: i, action: e, data: r });
                            }
                        },
                        [t, c, S],
                    ),
                    x = i.useCallback(
                        ({ action: e, component: t, element: a }) => {
                            T({ action: e, component: t, element: a });
                        },
                        [T],
                    ),
                    D = A === c,
                    z = i.useCallback(() => (a && o ? i.createElement(r.Z, null, D ? i.createElement(r.Z, { style: P ? R.focus : null, testID: "articleEntityView" }, i.createElement(h.ZP, { author: o, onScribeEvent: x, twitterArticle: a })) : i.createElement(f.Z, null)) : null), [a, o, D, P, x]),
                    O = i.useMemo(() => [R.container, _ === M.ZP.FAILED && R.failureView], [_]),
                    U = i.useMemo(() => i.createElement(r.Z, { style: O }, i.createElement(n.Z, { failureMessage: F, fetchStatus: _, render: z, retryable: !1 })), [z, _, O]),
                    W = D ? i.createElement(y.f, { isPublished: a?.lifecycle_state?.lifecycle === d.f.Published }) : void 0,
                    H = !s.ZP.isTwitterApp(),
                    K = (0, Z.lU)(l);
                return i.createElement(g.nO, { data: c ? S(c) : void 0, namespace: L }, P ? i.createElement(m.ZP, { modalSize: m.Cg.full }, i.createElement(u.Z, { backButtonType: "back", backLocation: K, history: w, isFullWidth: !0, rightControl: W, title: B }, U)) : i.createElement(p.Z, { backLocation: K, rightControl: W, screenType: "secondaryDetail", title: B, withBottomBorder: !1, withBottomTabBar: H, withWideContainer: !0 }, U));
            }
            const R = l.default.create((e) => ({ container: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, color: e.colors.text }, failureView: { paddingHorizontal: e.spaces.space36, paddingVertical: e.spaces.space28 }, module: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space16, overflow: "hidden" }, sidebar: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 }, focus: { maxWidth: b.Z.columnWidths.wide, marginHorizontal: "auto", width: "100%" } })),
                z = x(D);
        },
        384316: (e, t, a) => {
            a.d(t, { V: () => E, Z: () => f });
            var i = a(202784),
                r = a(457311),
                n = a(108362),
                l = a(111677),
                o = a.n(l),
                c = a(789831),
                s = a(32677),
                d = a(810641),
                u = a(335632),
                m = a(725405),
                p = a(519896);
            const h = o().dd2c9034,
                y = o().cada17f8,
                E = () => i.createElement(r.Z, { header: h, message: y }),
                f = ({ bookmarkFolderId: e, history: t, title: a, urtModule: r }) => {
                    const l = i.createElement(s.Z, { history: t }),
                        o = (0, m.Z)(),
                        h = i.useMemo(() => (0, u.G)({ withRemoveFromBookmarks: !0, bookmarkFolderId: e }), [e]);
                    return i.createElement(c.Z, { component: n.Z, fab: l }, i.createElement(d.Z, { entryConfiguration: h, module: r, prerollDisplayLocation: p.Nw.OTHER, renderEmptyState: () => (o.scribeAction("empty"), E()), title: a }));
                };
        },
        842485: (e, t, a) => {
            a.r(t), a.d(t, { Entry: () => w, KeyboardShortcutsScreen: () => _, ShortcutContent: () => I, default: () => A });
            var i = a(202784),
                r = a(325686),
                n = a(386802),
                l = a(844685),
                o = a(731708),
                c = a(392237),
                s = a(111677),
                d = a.n(s),
                u = a(980407),
                m = a(443781),
                p = a(163390),
                h = a(24949),
                y = a(668214),
                E = a(919022);
            const f = (0, y.Z)()
                    .propsFromState(() => ({ viewerUserScreenName: (0, h.P1)(E.ZP.selectViewerUser, (e) => (e ? e.screen_name : void 0)) }))
                    .withAnalytics({ page: "keyboard_shortcuts" }),
                b = d().ef1649e2,
                g = d().h54e6138,
                C = d().aefd89c8,
                M = d().cafdefb2,
                Z = d().add55c98,
                v = d().dda42cf2,
                _ = ({ history: e, location: t, viewerUserScreenName: a }) => {
                    const { userClaims: r } = i.useContext(m.rC),
                        { isModal: l } = i.useContext(n.Z),
                        o = (e) => (a ? e : e.filter((e) => e && e.universal)),
                        c = (0, p.Od)(r.isTrueAndEnabled("subscriptions_feature_1007")),
                        s = (0, p.OX)(),
                        d = (0, p.PN)(),
                        h = o(c),
                        y = o(s),
                        E = o(d),
                        f = [
                            { headerText: C, shortcuts: h },
                            { headerText: M, shortcuts: y },
                            { headerText: Z, shortcuts: E },
                            { headerText: v, shortcuts: [] },
                        ];
                    return i.createElement(u.Z, { documentTitle: b, history: e, isLarge: !0, title: g }, i.createElement(I, { isModal: l, shortcuts: f }));
                },
                I = ({ isModal: e, shortcuts: t }) =>
                    i.createElement(
                        r.Z,
                        { style: [k.root, e && k.row] },
                        t.map(({ headerText: t, shortcuts: a, subtitleText: n }, o) => {
                            const c = o === a.length - 1,
                                s = a.length > 1;
                            return 0 === a.length
                                ? null
                                : i.createElement(
                                      r.Z,
                                      { key: o, style: [k.section, !c && !e && k.sectionBottomMargin] },
                                      t ? i.createElement(l.Z, { style: k.moduleHeader, subtext: n, text: t }) : null,
                                      i.createElement(
                                          r.Z,
                                          { role: "table", style: !c && s && e && k.divider },
                                          a.map((e, t) => i.createElement(w, { description: e.description, key: t, keys: e.keys })),
                                      ),
                                  );
                        }),
                    ),
                w = ({ description: e, keys: t }) => {
                    const a = Array.isArray(t) ? t : [t];
                    return i.createElement(
                        r.Z,
                        { role: "row", style: k.entry },
                        i.createElement(o.ZP, { role: "cell" }, e),
                        i.createElement(
                            r.Z,
                            { role: "cell", style: k.keyRow },
                            a.map((e, t) => e.split(" ").map((e, a, r) => i.createElement(i.Fragment, { key: a }, 0 !== t && i.createElement(o.ZP, { style: k.plus }, ", "), i.createElement(o.ZP, { align: "center", style: k.key, withoutTwemojiAndHashflags: !0 }, e), a !== r.length - 1 ? i.createElement(o.ZP, { style: k.plus }, "+") : null))),
                        ),
                    );
                },
                k = c.default.create((e) => ({ root: { padding: e.spaces.space12, paddingBottom: e.spaces.space20 }, row: { flexDirection: "row" }, keyRow: { flexDirection: "row", alignItems: "center" }, section: { flexShrink: 1 }, sectionBottomMargin: { marginBottom: e.spaces.space12 }, divider: { borderStyle: "solid", borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingEnd: e.spaces.space12, marginEnd: e.spaces.space12 }, entry: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space2 }, key: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.small, boxShadow: `inset 0 -1px 0 ${e.colors.gray200}`, fontFamily: "monospace, monospace", minWidth: "1.7em", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space1 }, plus: { marginHorizontal: e.spaces.space2 }, moduleHeader: { paddingStart: e.spaces.space12 } })),
                A = f(_);
        },
        537817: (e, t, a) => {
            a.r(t), a.d(t, { TwitterArticleComposerEmptyState: () => g, default: () => M });
            a(136728);
            var i = a(202784),
                r = a(107267),
                n = a(457311),
                l = a(392237),
                o = a(111677),
                c = a.n(o),
                s = a(794057),
                d = a(689985),
                u = a(71620),
                m = a(668214),
                p = a(143322);
            const h = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("CREATE_ARTICLE_ENTITY_BUTTON"), createDraftArticle: p.ZP.create }))
                    .withAnalytics({ page: "article_composer", section: "empty_state" }),
                y = c().d36447e0,
                E = c().ca0ed982,
                f = c().ee9e42aa,
                b = c().e9a50596,
                g = ({ analytics: e, createDraftArticle: t, createLocalApiErrorHandler: a }) => {
                    const l = (0, r.useHistory)();
                    return i.createElement(n.Z, {
                        buttonLink: d.TC,
                        buttonText: f,
                        header: y,
                        message: E,
                        onButtonPress: () => {
                            e.scribe({ element: "create_button", action: "click" }),
                                t("", s.kd)
                                    .then((e) => {
                                        e?.result && "string" == typeof e.result && e.entities?.articleEntities[e.result] && l.push((0, d.lU)(e.entities.articleEntities[e.result].rest_id));
                                    })
                                    .catch(a({ showToast: !0, defaultToast: { text: b } }));
                        },
                        style: C.root,
                    });
                },
                C = l.default.create((e) => ({ root: { alignItems: "top", flex: 1, justifyContent: "center", backgroundColor: e.colors.cellBackground } })),
                M = h(g);
        },
        302534: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            a(136728);
            var i = a(202784),
                r = a(325686),
                n = a(154003),
                l = a(392237),
                o = a(111677),
                c = a.n(o),
                s = a(619738),
                d = a(161821),
                u = a(19640),
                m = a(545457),
                p = a(496364),
                h = a(507651),
                y = a(583909),
                E = a(293115),
                f = a(794057),
                b = a(689985),
                g = a(71620),
                C = a(668214),
                M = a(143322),
                Z = a(390387);
            const v = { page: "longform_composer", section: "notes_list" },
                _ = (0, C.Z)()
                    .propsFromState(() => ({ viewerUserId: Z._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("COMPOSE_TWITTER_ARTICLE_BUTTON"), createArticleEntity: M.ZP.create }))
                    .withAnalytics(v);
            function I(e) {
                const {
                        location: { pathname: t },
                        viewerUserId: a,
                    } = e,
                    [n, l] = i.useState(A.DRAFTS);
                if (!a) return null;
                const o = (e) => () => n === e,
                    c = (0, d.Z)(A).map((e) => ({ key: e, label: P[e].label, isActive: o(e), to: { pathname: t }, onClick: () => l(e) }));
                return i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(h.Z, { links: c }),
                    i.createElement(
                        r.Z,
                        { style: w.container },
                        i.createElement(y.Z, {
                            emptyStateHeader: P[n].header,
                            lifecycle: (() => {
                                switch (n) {
                                    case A.PUBLISHED:
                                        return u.f.Published;
                                    case A.DRAFTS:
                                    default:
                                        return u.f.Draft;
                                }
                            })(),
                            source: f.C0.LONGFORM_COMPOSER,
                            userId: a,
                        }),
                    ),
                );
            }
            const w = l.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }));
            const k = c().a5a30af0,
                A = Object.freeze({ DRAFTS: "Drafts", PUBLISHED: "Published" }),
                P = { [A.DRAFTS]: { label: c().d4ebc798, header: c().f965e890 }, [A.PUBLISHED]: { label: c().bb40bf66, header: c().c2756718 } },
                S = i.createElement(s.default, null),
                T = _(function (e) {
                    const { viewerUserId: t } = e;
                    (0, m.ph)();
                    const [a, r] = (function (e) {
                            const t = i.useRef(() => {});
                            t.current = function () {
                                e.analytics.scribe({ element: "create_button", action: "click" }),
                                    e
                                        .createArticleEntity("", f.kd)
                                        .then((t) => {
                                            t?.result && "string" == typeof t.result && t.entities?.articleEntities[t.result] && e.history.push((0, b.lU)(t.entities.articleEntities[t.result].rest_id));
                                        })
                                        .catch(e.createLocalApiErrorHandler({ showToast: !0 }));
                            };
                            const { pathname: a, query: r } = e.location,
                                n = i.useRef(!1);
                            return (
                                (n.current = "/compose/articles" === a && "create" === r.action),
                                i.useLayoutEffect(function () {
                                    if (!0 === n.current) return t.current();
                                }, []),
                                [t.current, n.current]
                            );
                        })(e),
                        l = i.useMemo(() => i.createElement(n.ZP, { "aria-label": "create", icon: S, onPress: a, type: "primaryText" }), [a]);
                    return !t || r ? null : i.createElement(E.nO, { namespace: v }, i.createElement(p.Z, { rightControl: l, screenType: "root", title: k }, i.createElement(I, e)));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-c6fe4ea4.deee9fea.js.map
