"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-63cb1cc4"],
    {
        466380: (e, t, a) => {
            a.d(t, { Z: () => u });
            var o = a(807469),
                r = a(502909),
                n = a(600823);
            const i = (0, r.ZP)({ namespace: "topics" }),
                c = (0, r.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return m.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (a, o) => (a(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                s = (e, t, a) => {
                    const { entityId: o } = t.meta,
                        r = e.entities[o];
                    return r ? ((e, t, a, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [a.id]: { ...a, ...o() } } } : e))(e, t, r, a) : e;
                },
                d = { follow: (0, r.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => s(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => s(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => s(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => s(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                m = { ...i, ...c, ...l, ...d, customActionTypes: (0, r.X7)(d) },
                u = n.Z.register(m);
        },
        88158: (e, t, a) => {
            a.r(t), a.d(t, { ArticleMediaScreen: () => _, default: () => x });
            var o = a(202784),
                r = a(123751),
                n = a(290402),
                i = a(300234),
                c = a(827094),
                l = a(449067),
                s = a(4452),
                d = a(702001),
                m = a(965728),
                u = a(615027),
                p = a(71620),
                g = a(967262),
                h = a(793211),
                b = a(668214),
                f = a(794057),
                k = a(659773),
                E = a(836255);
            const w = (e, t) => t.match.params.screenName ?? "",
                C = (e, t) => {
                    const { match: a } = t;
                    return a.params?.articleTweetId ? a.params.articleTweetId : "";
                },
                y = (e, t) => E.Z.selectFetchStatus(e, C(0, t)),
                Z = (e, t) => {
                    const { match: a } = t;
                    return a.params?.mediaId ? a.params.mediaId : "";
                },
                I = (e, t) => {
                    const a = C(0, t),
                        o = a ? E.Z.selectHydrated(e, a) : void 0,
                        r = o?.article,
                        n = r?.cover_media,
                        i = r?.media_entities,
                        c = r?.content_state,
                        l = c ? (0, h.B$)(c, f.DC.MEDIA) : null;
                    return [
                        n,
                        ...((i && l
                            ? l?.reduce((e, t) => {
                                  const a = t?.data?.mediaItems?.map((e) => e?.mediaId),
                                      o = a?.map((e) => i?.find((t) => t?.media_id === e));
                                  return e.concat(o);
                              }, [])
                            : null) ??
                            i ??
                            []),
                    ]
                        .map((e) => (e ? (0, g.m)(e) : void 0))
                        .filter(Boolean);
                },
                T = (e, t) => {
                    const a = Z(0, t),
                        o = I(e, t);
                    return o?.findIndex((e) => e?.id_str === a);
                },
                S = (0, b.Z)()
                    .propsFromState(() => ({ dataSaver: k.IX, fetchStatus: y, allMedia: I, currentIndex: T, screenName: w, focalTweetId: C, tweet: E.Z.createHydratedTweetSelector(C), mediaId: Z }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("ARTICLE_MEDIA_DETAIL_SCREEN"), fetchTweetIfNeeded: E.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "article", section: "media" }),
                _ = (e) => {
                    const { allMedia: t, createLocalApiErrorHandler: a, currentIndex: p, dataSaver: g, fetchStatus: h, fetchTweetIfNeeded: b, focalTweetId: f, history: k, mediaId: E, screenName: w, tweet: C } = e,
                        y = o.useMemo(() => t[p], [t, p]),
                        Z = (0, m.Rb)(y),
                        { handleMediaDetailZoomed: I, handleMediaItemTapped: T, hideButtons: S } = (0, m.sI)(),
                        _ = () => {
                            k.goBack();
                        },
                        x = o.useMemo(() => (w && f ? `/${w}/article/${f}` : ""), [w, f]),
                        B = o.useCallback(() => {
                            f && b(f).catch(a(d.c));
                        }, [a, b, f]);
                    (0, s.ZP)();
                    const v = (e) => {
                            if (e === E) return;
                            const a = t && t[e],
                                o = a?.id_str;
                            w && f && o && k.replace({ pathname: `/${w}/article/${f}/media/${o}` });
                        },
                        P = o.useCallback(() => {
                            if (C && C.user && w && C && E && w.toLowerCase() !== C.user.screen_name.toLowerCase()) {
                                const e = C && C.user ? `/${C.user.screen_name}/article/${C.id_str}/media/${E}` : null;
                                e && k.replace(e);
                            }
                        }, [k, E, w, C]);
                    o.useEffect(() => {
                        B();
                    }, [B]),
                        o.useEffect(() => {
                            P();
                        }, [P]);
                    return o.createElement(
                        l.Z.Configure,
                        { headerless: !0 },
                        o.createElement(
                            c.Z,
                            { backgroundColor: Z, hideButtons: S, mediaItem: y, onCloseButtonPress: _ },
                            o.createElement(n.Z, {
                                fetchStatus: h,
                                onRequestRetry: B,
                                render: () => {
                                    const e = Z.rgb;
                                    return f && t ? o.createElement(i.Z, { dataSaver: g, dominantColor: e, mediaIndex: p, mediaItems: t, onDismiss: _, onMediaDetailZoomed: I, onMediaItemChanged: v, onTap: T, videoId: r.Z.forTweet(f) }) : o.createElement(u.Z, { to: x });
                                },
                            }),
                        ),
                    );
                },
                x = S(_);
        },
        718970: (e, t, a) => {
            a.r(t), a.d(t, { ArticleReaderModeScreen: () => fe, default: () => ke });
            a(136728);
            var o = a(202784),
                r = a(325686),
                n = a(392237),
                i = a(731708),
                c = a(111677),
                l = a.n(c),
                s = a(323265),
                d = a(290402),
                m = a(933794),
                u = a(163301),
                p = a(449067),
                g = a(246134),
                h = a(785765),
                b = a(652904),
                f = a(292484),
                k = a(952793),
                E = a(4452),
                w = a(518966),
                C = a(521514),
                y = a(655352),
                Z = a(208115),
                I = a(293115),
                T = a(942893),
                S = a(725405),
                _ = a(511582),
                x = a(615027),
                B = a(58881),
                v = a(797553),
                P = a(143670),
                M = a(530732),
                O = a(154003),
                D = a(738398),
                A = a(818088),
                N = a(898361),
                F = a(73416),
                R = a(883069),
                H = a(837020),
                L = a(288955);
            const $ = l().gb303814,
                z = l().d6d9aab6,
                W = l().bb89cf46,
                V = l().a739d4ba,
                j = l().d5270434,
                q = n.default.isDarkMode() ? n.default.theme.colors.gray50 : n.default.theme.colors.gray0,
                U = B.Z.generate({ backgroundColor: n.default.theme.colors.primary, color: n.default.theme.colors.cellBackground, customFocusBackgroundColor: q, customHoverBackgroundColor: q, customPressedBackgroundColor: q }),
                X = (e) => {
                    e.stopPropagation();
                },
                G = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: a, onAddBookmarkFolder: n, onClose: c, onRemoveBookmark: l }) => {
                    const [s, d] = o.useState(!1),
                        m = () => {
                            d(!s);
                        },
                        u = () => {
                            a(), d(!1);
                        },
                        p = () => {
                            n(), d(!1);
                        },
                        g = () => {
                            l(), d(!1);
                        },
                        h = () => (s ? o.createElement(v.default, { isFixed: !0, onDismiss: m, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? o.createElement(P.Z, { Icon: D.default, actionText: W, onClick: g }) : o.createElement(P.Z, { Icon: A.default, actionText: z, onClick: u }), o.createElement(P.Z, { Icon: N.default, actionText: V, onClick: p })) : null),
                        b = () => (e ? o.createElement(F.default, { style: t ? Q.iconMobile : Q.icon }) : o.createElement(R.default, { style: t ? Q.iconMobile : Q.icon })),
                        f = o.useMemo(() => (t ? Q.iconMobile : Q.icon), [t]),
                        k = o.useMemo(() => o.createElement(H.default, { style: f }), [f]),
                        E = o.useMemo(() => [Q.actionBarWrapper, t ? Q.actionBarWrapperMobile : void 0], [t]);
                    return o.createElement(
                        r.Z,
                        { style: E },
                        o.createElement(
                            r.Z,
                            { onClick: X, style: t ? Q.outerContainer : void 0 },
                            o.createElement(
                                r.Z,
                                { style: t ? Q.actionBarMobile : Q.actionBar },
                                t
                                    ? o.createElement(
                                          o.Fragment,
                                          null,
                                          o.createElement(M.Z, { "aria-label": j, interactiveStyles: U, onPress: c, style: Q.actionItem }, o.createElement(i.ZP, { color: "gray700" }, j)),
                                          o.createElement(L.Z, null, (e) => o.createElement(M.Z, { "aria-label": $, interactiveStyles: U, onPress: e(m), style: Q.actionItem }, b())),
                                          h(),
                                      )
                                    : o.createElement(
                                          o.Fragment,
                                          null,
                                          o.createElement(r.Z, { style: Q.buttonContainer }, o.createElement(O.ZP, { "aria-label": j, icon: k, onClick: c, type: "brandText" })),
                                          o.createElement(
                                              o.Fragment,
                                              null,
                                              o.createElement(
                                                  r.Z,
                                                  { style: Q.buttonContainer },
                                                  o.createElement(L.Z, null, (e) => o.createElement(O.ZP, { "aria-label": $, icon: b(), onClick: e(m), type: "brandText" })),
                                                  h(),
                                              ),
                                          ),
                                      ),
                            ),
                        ),
                    );
                },
                Q = n.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } }));
            var J = a(71620),
                K = a(668214),
                Y = a(550293),
                ee = a(601576),
                te = a(836255),
                ae = a(919022);
            const oe = (e, t) => t.match.params.screenName ?? "",
                re = (e, t) => {
                    const a = oe(0, t);
                    return ae.ZP.selectByScreenName(e, a);
                },
                ne = (e, t) => {
                    const { match: a } = t;
                    return a.params?.articleTweetId ? a.params.articleTweetId : "";
                },
                ie = (e, t) => {
                    const a = te.Z.selectHydrated(e, ne(0, t));
                    return a?.bookmarked ?? !1;
                },
                ce = (e, t) => {
                    const a = ne(0, t);
                    return a ? te.Z.selectHydrated(e, a) : void 0;
                },
                le = (e, t) => {
                    const a = ne(0, t);
                    return a ? te.Z.selectFetchStatus(e, a) : void 0;
                },
                se = (0, K.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: Y.kX, dmPoppedOutConversationId: Y.gw, focalTweetId: ne, isBookmarked: ie, screenName: oe, user: re, tweet: ce, fetchStatus: le }))
                    .propsFromActions(() => ({ addToast: ee.fz, bookmark: te.Z.bookmark, createLocalApiErrorHandler: (0, J.zr)("ARTICLE_READER_MODE_SCREEN"), popOutConversation: Y.DO, setDrawerVisibility: Y.bi, unbookmark: te.Z.unbookmark, fetchTweetIfNeeded: te.Z.fetchOneArticleIfNeeded })),
                de = l().i31dcd22,
                me = l().e3de2f6f({ entity: de }),
                ue = l().e64de8a9({ entity: de }),
                pe = { page: "tweet" },
                ge = (e) => {
                    e.stopPropagation();
                },
                he = n.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", maxWidth: C.Z.columnWidths.wide, width: "100%" }, containerOneCol: { paddingTop: e.spaces.space56 }, containerOneColSmall: { paddingTop: 0 }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                be = o.createElement(i.ZP, { style: he.titleIcon }, de),
                fe = ({ addToast: e, bookmark: t, createLocalApiErrorHandler: a, dmDrawerVisibility: n, dmPoppedOutConversationId: i, fetchStatus: c, fetchTweetIfNeeded: l, focalTweetId: C, history: B, isBookmarked: v, location: P, popOutConversation: M, screenName: O, setDrawerVisibility: D, tweet: A, unbookmark: N, user: F }) => {
                    const R = (0, S.Z)();
                    (0, E.ZP)();
                    const H = (0, k.hC)("responsive_web_twitter_article_reader_enabled"),
                        L = s.ZP.isTwitterApp(),
                        $ = (0, Z.q)({}, { location: P }),
                        [z] = o.useState(n),
                        [W] = o.useState(i),
                        V = o.useMemo(() => (A ? { items: [T.Z.getTweetItem(A)], tweet_id: A.id_str } : {}), [A]),
                        j = o.useCallback(() => {
                            if (A && A.user && O && A && O.toLowerCase() !== A.user.screen_name.toLowerCase()) {
                                const e = A && A.user ? `/${A.user.screen_name}/article/${A.id_str}` : null;
                                e && B.replace(e);
                            }
                        }, [B, O, A]);
                    o.useEffect(() => {
                        j();
                    }, [j]);
                    const q = o.useCallback(() => {
                        l(C).finally(() => {
                            (0, E.jW)("article-content-ready");
                        });
                    }, [C, l]);
                    o.useEffect(() => {
                        C && q();
                    }, [q, C]),
                        o.useEffect(
                            () => (
                                D(_.S.CLOSED),
                                () => {
                                    D(z), W && z === _.S.EXPANDED && M(W);
                                }
                            ),
                            [M, W, z, D],
                        );
                    const U = o.useMemo(() => `/${O}/status/${C}`, [O, C]),
                        X = o.useCallback(() => {
                            $ ? B.goBack() : B.push(U);
                        }, [$, B, U]),
                        Q = o.useCallback(() => {
                            (() => {
                                const e = window.location.pathname.match(/^\/@?([_\w+]+)\/article\/([\d]+)$/),
                                    [t] = e || [];
                                return !!t;
                            })() && X();
                        }, [X]),
                        J = o.useCallback(() => {
                            R.scribe({ action: "impression", component: "article", page: "tweet", data: V });
                        }, [R, V]),
                        K = o.useCallback(() => {
                            R.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "article", section: "reader_mode" }), J(), X();
                        }, [R, X, J]),
                        Y = o.useCallback(() => {
                            B.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: C } });
                        }, [B, C]),
                        ee = o.useCallback(() => {
                            t(C).then(
                                () => {
                                    e({ text: me });
                                },
                                (e) => {
                                    a(w.h)(e);
                                },
                            );
                        }, [t, C, a, e]),
                        te = o.useCallback(() => {
                            N(C).then(
                                () => {
                                    e({ text: ue });
                                },
                                (e) => {
                                    a(w.h)(e);
                                },
                            );
                        }, [N, C, a, e]),
                        ae = o.useCallback((e) => o.createElement(G, { isBookmarked: v, isMobileLayout: e, onAddBookmark: ee, onAddBookmarkFolder: Y, onClose: K, onRemoveBookmark: te }), [v, ee, K, te, Y]),
                        oe = o.useCallback(() => o.createElement(x.Z, { to: U }), [U]),
                        re = o.useCallback(() => {
                            const e = A?.article;
                            return A && e ? o.createElement(I.nO, { data: V, namespace: pe }, o.createElement(b.Z, null, o.createElement(u.ZP, { tweet: A }, o.createElement(g.ZP, { author: F, publishedPost: A, twitterArticle: e, withActionBar: !L, withReplyLink: L }), H ? o.createElement(h.ZP, null) : null))) : oe();
                        }, [H, L, oe, V, A, F]),
                        ne = (0, y.ZP)(),
                        ie = o.useCallback((e) => [he.container, e ? (ne ? he.containerOneCol : he.containerOneColSmall) : null], [ne]),
                        ce = o.useCallback((e) => [he.root, e ? he.rootMobile : void 0], []),
                        le = o.useCallback((e, t) => o.createElement(r.Z, { style: ce(e) }, o.createElement(r.Z, { onClick: ge, style: ie(e) }, o.createElement(r.Z, { style: he.innerWrapper }, o.createElement(d.Z, { fetchStatus: c, render: re, renderFailure: oe, retryable: !1 }), e && !L ? ae(t) : null))), [ce, ie, c, re, oe, L, ae]),
                        se = o.useMemo(() => ({ esc: Q }), [Q]),
                        de = (0, f.vS)(),
                        fe = (0, f.UZ)(),
                        ke = de || fe;
                    return o.createElement(o.Fragment, null, o.createElement(p.Z.Configure, { onBackClick: K, sideNav: ae(de), title: be, withForceTopNav: de }), le(ke, de), o.createElement(m.Z, { handlers: se }));
                },
                ke = se(fe);
        },
        950011: (e, t, a) => {
            a.r(t), a.d(t, { ReaderModeScreen: () => Ze, default: () => Se });
            a(136728);
            var o = a(202784),
                r = a(325686),
                n = a(154003),
                i = a(392237),
                c = a(111677),
                l = a.n(c),
                s = a(899174),
                d = a(912021),
                m = a(516951),
                u = a(323265),
                p = a(933794),
                g = a(449067),
                h = a(890882),
                b = a(652904),
                f = a(607015),
                k = a(292484),
                E = a(518966),
                w = a(655352),
                C = a(951790),
                y = a(293115),
                Z = a(942893),
                I = a(725405),
                T = a(511582),
                S = a(360142),
                _ = a(71620),
                x = a(668214),
                B = a(550293),
                v = a(601576),
                P = a(836255),
                M = a(919022);
            const O = (e, t) => t.match.params.screenName ?? void 0,
                D = (e, t) => {
                    const a = O(0, t) || "";
                    return M.ZP.selectByScreenName(e, a);
                },
                A = (e, t) => {
                    const { location: a, match: o } = t;
                    return o.params?.tweetId ? o.params.tweetId : a.query?.tweet_id && "string" == typeof a.query.tweet_id ? a.query.tweet_id : "";
                },
                N = (e, t) => {
                    const a = A(0, t),
                        o = P.Z.selectHydrated(e, a);
                    return o?.conversation_id_str || "";
                },
                F = (e, t) => {
                    const a = P.Z.selectHydrated(e, A(0, t));
                    return a?.user?.screen_name || "";
                },
                R = (e, t) => {
                    const a = P.Z.selectHydrated(e, A(0, t));
                    return a?.bookmarked ?? !1;
                },
                H = (0, x.Z)()
                    .propsFromState(() => ({ authorScreenName: F, dmDrawerVisibility: B.kX, dmPoppedOutConversationId: B.gw, focalTweetId: A, isBookmarked: R, rootTweetId: N, screenName: O, user: D }))
                    .propsFromActions(() => ({ addToast: v.fz, bookmark: P.Z.bookmark, createLocalApiErrorHandler: (0, _.zr)("READER_MODE_SCREEN"), popOutConversation: B.DO, setDrawerVisibility: B.bi, unbookmark: P.Z.unbookmark }));
            var L = a(58881),
                $ = a(797553),
                z = a(143670),
                W = a(530732),
                V = a(731708),
                j = a(738398),
                q = a(818088),
                U = a(898361),
                X = a(913973),
                G = a(73416),
                Q = a(883069),
                J = a(106687),
                K = a(837020);
            const Y = l().gb303814,
                ee = l().d6d9aab6,
                te = l().bb89cf46,
                ae = l().a739d4ba,
                oe = l().d5270434,
                re = l().jcf3ff56,
                ne = l().f1252ac8,
                ie = l().daa0da04,
                ce = l().ba5256b2,
                le = i.default.isDarkMode() ? i.default.theme.colors.gray50 : i.default.theme.colors.gray0,
                se = "body",
                de = "headline1",
                me = "title3",
                ue = L.Z.generate({ backgroundColor: i.default.theme.colors.primary, color: i.default.theme.colors.cellBackground, customFocusBackgroundColor: le, customHoverBackgroundColor: le, customPressedBackgroundColor: le }),
                pe = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: a, onAddBookmarkFolder: i, onClose: c, onFontSizeChange: l, onRemoveBookmark: s, tweetTextSize: d }) => {
                    const [m, u] = o.useState(!1),
                        [p, g] = o.useState(!1),
                        h = () => {
                            u(!m);
                        },
                        b = () => {
                            g(!p);
                        },
                        f = () => {
                            a(), u(!1);
                        },
                        k = () => {
                            i(), u(!1);
                        },
                        E = () => {
                            s(), u(!1);
                        },
                        w = (e) => () => {
                            l(e), g(!1);
                        },
                        C = () => (m ? o.createElement($.default, { isFixed: !0, onDismiss: h, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? o.createElement(z.Z, { Icon: j.default, actionText: te, onClick: E }) : o.createElement(z.Z, { Icon: q.default, actionText: ee, onClick: f }), o.createElement(z.Z, { Icon: U.default, actionText: ae, onClick: k })) : null),
                        y = (e) => e === d,
                        Z = () => o.createElement(r.Z, { style: ge.emptyIconSpacer }),
                        I = () => (p ? o.createElement($.default, { isFixed: !0, onDismiss: b, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, o.createElement(z.Z, { Icon: y(se) ? X.default : Z, actionText: ie, onClick: w(se) }), o.createElement(z.Z, { Icon: y(de) ? X.default : Z, actionText: ne, onClick: w(de) }), o.createElement(z.Z, { Icon: y(me) ? X.default : Z, actionText: re, onClick: w(me) })) : null),
                        T = () => (e ? o.createElement(G.default, { style: t ? ge.iconMobile : ge.icon }) : o.createElement(Q.default, { style: t ? ge.iconMobile : ge.icon }));
                    return o.createElement(
                        r.Z,
                        { style: [ge.actionBarWrapper, t ? ge.actionBarWrapperMobile : void 0] },
                        o.createElement(
                            r.Z,
                            {
                                onClick: (e) => {
                                    e.stopPropagation();
                                },
                                style: t ? ge.outerContainer : void 0,
                            },
                            o.createElement(r.Z, { style: t ? ge.actionBarMobile : ge.actionBar }, t ? o.createElement(o.Fragment, null, o.createElement(W.Z, { "aria-label": oe, interactiveStyles: ue, onPress: c, style: ge.actionItem }, o.createElement(V.ZP, { color: "gray700" }, oe)), o.createElement(W.Z, { "aria-label": Y, interactiveStyles: ue, onPress: h, style: ge.actionItem }, T()), C(), o.createElement(W.Z, { "aria-label": ce, interactiveStyles: ue, onPress: b, style: ge.actionItem }, o.createElement(J.default, { style: t ? ge.iconMobile : ge.icon })), I()) : o.createElement(o.Fragment, null, o.createElement(r.Z, { style: ge.buttonContainer }, o.createElement(n.ZP, { icon: o.createElement(K.default, { style: t ? ge.iconMobile : ge.icon }), onClick: c, type: "brandText" })), o.createElement(o.Fragment, null, o.createElement(r.Z, { style: ge.buttonContainer }, o.createElement(n.ZP, { icon: T(), onClick: h, type: "brandText" }), C()), o.createElement(r.Z, null, o.createElement(n.ZP, { icon: o.createElement(J.default, { style: t ? ge.iconMobile : ge.icon }), onClick: b, type: "brandText" }), I())))),
                        ),
                    );
                },
                ge = i.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } })),
                he = l().cce3f116,
                be = l().b593b396,
                fe = l().af9c8a3e,
                ke = l().c299a6c0,
                Ee = l().ef483238,
                we = { page: "thread", section: "reader_mode" },
                Ce = (0, d.Z)((e, t) => (0, S.ZP)({ focalTweetId: e, fetchOptions: t, timelineIdPrefix: "reader" })),
                ye = (0, d.Z)((e, t) => {
                    const { is_viewer_follows_user: a = !1 } = t ? Z.Z.getUserItem(t) : {};
                    return { items: [Z.Z.forThread(e, a)], tweet_id: e };
                }),
                Ze = ({ addToast: e, authorScreenName: t, bookmark: a, createLocalApiErrorHandler: i, dmDrawerVisibility: c, dmPoppedOutConversationId: l, focalTweetId: s, history: d, isBookmarked: Z, location: S, popOutConversation: _, rootTweetId: x, screenName: B, setDrawerVisibility: v, unbookmark: P, user: M }) => {
                    const O = (0, I.Z)(),
                        [D, A] = o.useState("headline1"),
                        [N] = o.useState(c),
                        [F] = o.useState(l),
                        R = o.useCallback(() => {
                            const e = ye(s, M);
                            M && s && O.scribe({ action: "impression", element: "view_thread", page: "thread", section: "reader_mode", data: e });
                        }, [O, s, M]);
                    o.useEffect(() => {
                        R();
                    }, [R]),
                        o.useEffect(
                            () => (
                                v(T.S.CLOSED),
                                () => {
                                    v(N), F && N === T.S.EXPANDED && _(F);
                                }
                            ),
                            [_, F, N, v],
                        );
                    const H = o.useCallback(() => {
                            O.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "thread", section: "reader_mode" }), d.goBack();
                        }, [O, d]),
                        L = (e) => {
                            e.stopPropagation();
                        },
                        $ = o.useCallback(() => !(!B || !t) && B.toLowerCase() !== t.toLowerCase(), [t, B]),
                        z = o.useCallback(() => {
                            const e = t && s ? `/${t}/thread/${s}` : "/";
                            d.replace({ pathname: e, query: S.query, state: S.state });
                        }, [t, s, d, S.query, S.state]),
                        W = () => {
                            O.scribe({ action: "click", element: "reader_mode_header_icon_disable", page: "thread", section: "reader_mode" }), d.push({ pathname: V(), query: S.query, state: S.state });
                        },
                        V = () => (t && s ? `/${t}/status/${s}` : "/");
                    o.useEffect(() => {
                        s && t && $() && z();
                    }, [t, s, z, $]);
                    const j = () => {
                            d.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: s } });
                        },
                        q = () => {
                            a(s).then(
                                () => {
                                    e({ text: he });
                                },
                                (e) => {
                                    i(E.h)(e);
                                },
                            );
                        },
                        U = () => {
                            P(s).then(
                                () => {
                                    e({ text: be });
                                },
                                (e) => {
                                    i(E.h)(e);
                                },
                            );
                        },
                        X = (e) => o.createElement(pe, { isBookmarked: Z, isMobileLayout: e, onAddBookmark: q, onAddBookmarkFolder: j, onClose: H, onFontSizeChange: A, onRemoveBookmark: U, tweetTextSize: D }),
                        G = () => C.Z.openApp(`twitter://thread/${s}`),
                        Q = (0, k.vS)(),
                        J = (0, k.UZ)(),
                        K = Q || J;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(g.Z.Configure, {
                            onBackClick: H,
                            rightControl: (() => {
                                const e = u.ZP.isMobileOS();
                                return o.createElement(r.Z, { style: Ie.mobileAppBarRightControl }, e ? o.createElement(n.ZP, { onClick: G }, fe) : null, o.createElement(n.ZP, { "aria-label": Ee, icon: Te, onClick: W, type: "brandText" }));
                            })(),
                            sideNav: X(Q),
                            title: o.createElement(h.Z, { style: Ie.titleIcon, text: ke }),
                            withForceTopNav: Q,
                        }),
                        o.createElement(
                            y.nO,
                            { data: { tweet_id: s }, namespace: we },
                            o.createElement(
                                b.Z,
                                null,
                                ((e, t) => {
                                    const a = (0, w.ZP)();
                                    let n;
                                    return e && a ? (n = Ie.containerOneCol) : e && (n = Ie.containerOneColSmall), o.createElement(r.Z, { style: [Ie.root, e ? Ie.rootMobile : void 0] }, o.createElement(r.Z, { onClick: L, style: [Ie.container, n] }, o.createElement(r.Z, { style: Ie.innerWrapper }, o.createElement(f.ZP, { focalTweetId: s, module: Ce(s, { isReaderMode: !0 }), rootTweetId: x, tweetTextSize: D }), e ? X(t) : null)));
                                })(K, Q),
                            ),
                        ),
                        o.createElement(p.Z, {
                            handlers: {
                                esc: (() => {
                                    const e = window.location.pathname.match(/\/@?([_\w+]+)\/thread\/([\d]+)\/?/),
                                        [t] = e || [];
                                    return !!t;
                                })()
                                    ? () => {
                                          d.goBack();
                                      }
                                    : m.Z,
                            },
                        }),
                    );
                },
                Ie = i.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", width: "600px" }, containerOneCol: { paddingTop: e.spaces.space56, width: "100%" }, containerOneColSmall: { paddingTop: 0, width: "100%" }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                Te = o.createElement(s.default, { style: Ie.icon }),
                Se = H(Ze);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-63cb1cc4.8c267eca.js.map
