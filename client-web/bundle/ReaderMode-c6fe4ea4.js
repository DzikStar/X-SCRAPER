"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-c6fe4ea4"],
    {
        88158: (e, t, a) => {
            a.r(t), a.d(t, { ArticleMediaScreen: () => _, default: () => x });
            var o = a(202784),
                r = a(123751),
                n = a(290402),
                c = a(300234),
                i = a(827094),
                l = a(449067),
                s = a(4452),
                d = a(702001),
                m = a(965728),
                u = a(615027),
                p = a(71620),
                b = a(967262),
                g = a(793211),
                h = a(668214),
                f = a(794057),
                k = a(659773),
                E = a(836255);
            const C = (e, t) => t.match.params.screenName ?? "",
                w = (e, t) => {
                    const { match: a } = t;
                    return a.params?.articleTweetId ? a.params.articleTweetId : "";
                },
                y = (e, t) => E.Z.selectFetchStatus(e, w(0, t)),
                Z = (e, t) => {
                    const { match: a } = t;
                    return a.params?.mediaId ? a.params.mediaId : "";
                },
                I = (e, t) => {
                    const a = w(0, t),
                        o = a ? E.Z.selectHydrated(e, a) : void 0,
                        r = o?.article,
                        n = r?.cover_media,
                        c = r?.media_entities,
                        i = r?.content_state,
                        l = i ? (0, g.B$)(i, f.DC.MEDIA) : null;
                    return [
                        n,
                        ...((c && l
                            ? l?.reduce((e, t) => {
                                  const a = t?.data?.mediaItems?.map((e) => e?.mediaId),
                                      o = a?.map((e) => c?.find((t) => t?.media_id === e));
                                  return e.concat(o);
                              }, [])
                            : null) ??
                            c ??
                            []),
                    ]
                        .map((e) => (e ? (0, b.m)(e) : void 0))
                        .filter(Boolean);
                },
                S = (e, t) => {
                    const a = Z(0, t),
                        o = I(e, t);
                    return o?.findIndex((e) => e?.id_str === a);
                },
                B = (0, h.Z)()
                    .propsFromState(() => ({ dataSaver: k.IX, fetchStatus: y, allMedia: I, currentIndex: S, screenName: C, focalTweetId: w, tweet: E.Z.createHydratedTweetSelector(w), mediaId: Z }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("ARTICLE_MEDIA_DETAIL_SCREEN"), fetchTweetIfNeeded: E.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "article", section: "media" }),
                _ = (e) => {
                    const { allMedia: t, createLocalApiErrorHandler: a, currentIndex: p, dataSaver: b, fetchStatus: g, fetchTweetIfNeeded: h, focalTweetId: f, history: k, mediaId: E, screenName: C, tweet: w } = e,
                        y = o.useMemo(() => t[p], [t, p]),
                        Z = (0, m.Rb)(y),
                        { handleMediaDetailZoomed: I, handleMediaItemTapped: S, hideButtons: B } = (0, m.sI)(),
                        _ = () => {
                            k.goBack();
                        },
                        x = o.useMemo(() => (C && f ? `/${C}/article/${f}` : ""), [C, f]),
                        T = o.useCallback(() => {
                            f && h(f).catch(a(d.c));
                        }, [a, h, f]);
                    (0, s.ZP)();
                    const v = (e) => {
                            if (e === E) return;
                            const a = t && t[e],
                                o = a?.id_str;
                            C && f && o && k.replace({ pathname: `/${C}/article/${f}/media/${o}` });
                        },
                        M = o.useCallback(() => {
                            if (w && w.user && C && w && E && C.toLowerCase() !== w.user.screen_name.toLowerCase()) {
                                const e = w && w.user ? `/${w.user.screen_name}/article/${w.id_str}/media/${E}` : null;
                                e && k.replace(e);
                            }
                        }, [k, E, C, w]);
                    o.useEffect(() => {
                        T();
                    }, [T]),
                        o.useEffect(() => {
                            M();
                        }, [M]);
                    return o.createElement(
                        l.Z.Configure,
                        { headerless: !0 },
                        o.createElement(
                            i.Z,
                            { backgroundColor: Z, hideButtons: B, mediaItem: y, onCloseButtonPress: _ },
                            o.createElement(n.Z, {
                                fetchStatus: g,
                                onRequestRetry: T,
                                render: () => {
                                    const e = Z.rgb;
                                    return f && t ? o.createElement(c.Z, { dataSaver: b, dominantColor: e, mediaIndex: p, mediaItems: t, onDismiss: _, onMediaDetailZoomed: I, onMediaItemChanged: v, onTap: S, videoId: r.Z.forTweet(f) }) : o.createElement(u.Z, { to: x });
                                },
                            }),
                        ),
                    );
                },
                x = B(_);
        },
        718970: (e, t, a) => {
            a.r(t), a.d(t, { ArticleReaderModeScreen: () => fe, default: () => ke });
            a(136728);
            var o = a(202784),
                r = a(325686),
                n = a(392237),
                c = a(731708),
                i = a(674132),
                l = a.n(i),
                s = a(323265),
                d = a(290402),
                m = a(933794),
                u = a(163301),
                p = a(449067),
                b = a(844907),
                g = a(785765),
                h = a(652904),
                f = a(292484),
                k = a(952793),
                E = a(4452),
                C = a(518966),
                w = a(521514),
                y = a(655352),
                Z = a(208115),
                I = a(293115),
                S = a(942893),
                B = a(725405),
                _ = a(511582),
                x = a(615027),
                T = a(58881),
                v = a(797553),
                M = a(143670),
                D = a(530732),
                P = a(154003),
                A = a(738398),
                O = a(818088),
                F = a(898361),
                H = a(73416),
                N = a(883069),
                R = a(837020),
                $ = a(288955);
            const L = l().gb303814,
                z = l().d6d9aab6,
                W = l().bb89cf46,
                V = l().a739d4ba,
                j = l().d5270434,
                q = n.default.isDarkMode() ? n.default.theme.colors.gray50 : n.default.theme.colors.gray0,
                X = T.Z.generate({ backgroundColor: n.default.theme.colors.primary, color: n.default.theme.colors.cellBackground, customFocusBackgroundColor: q, customHoverBackgroundColor: q, customPressedBackgroundColor: q }),
                G = (e) => {
                    e.stopPropagation();
                },
                U = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: a, onAddBookmarkFolder: n, onClose: i, onRemoveBookmark: l }) => {
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
                        b = () => {
                            l(), d(!1);
                        },
                        g = () => (s ? o.createElement(v.default, { isFixed: !0, onDismiss: m, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? o.createElement(M.Z, { Icon: A.default, actionText: W, onClick: b }) : o.createElement(M.Z, { Icon: O.default, actionText: z, onClick: u }), o.createElement(M.Z, { Icon: F.default, actionText: V, onClick: p })) : null),
                        h = () => (e ? o.createElement(H.default, { style: t ? J.iconMobile : J.icon }) : o.createElement(N.default, { style: t ? J.iconMobile : J.icon })),
                        f = o.useMemo(() => (t ? J.iconMobile : J.icon), [t]),
                        k = o.useMemo(() => o.createElement(R.default, { style: f }), [f]),
                        E = o.useMemo(() => [J.actionBarWrapper, t ? J.actionBarWrapperMobile : void 0], [t]);
                    return o.createElement(
                        r.Z,
                        { style: E },
                        o.createElement(
                            r.Z,
                            { onClick: G, style: t ? J.outerContainer : void 0 },
                            o.createElement(
                                r.Z,
                                { style: t ? J.actionBarMobile : J.actionBar },
                                t
                                    ? o.createElement(
                                          o.Fragment,
                                          null,
                                          o.createElement(D.Z, { "aria-label": j, interactiveStyles: X, onPress: i, style: J.actionItem }, o.createElement(c.ZP, { color: "gray700" }, j)),
                                          o.createElement($.Z, null, (e) => o.createElement(D.Z, { "aria-label": L, interactiveStyles: X, onPress: e(m), style: J.actionItem }, h())),
                                          g(),
                                      )
                                    : o.createElement(
                                          o.Fragment,
                                          null,
                                          o.createElement(r.Z, { style: J.buttonContainer }, o.createElement(P.ZP, { "aria-label": j, icon: k, onClick: i, type: "brandText" })),
                                          o.createElement(
                                              o.Fragment,
                                              null,
                                              o.createElement(
                                                  r.Z,
                                                  { style: J.buttonContainer },
                                                  o.createElement($.Z, null, (e) => o.createElement(P.ZP, { "aria-label": L, icon: h(), onClick: e(m), type: "brandText" })),
                                                  g(),
                                              ),
                                          ),
                                      ),
                            ),
                        ),
                    );
                },
                J = n.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } }));
            var K = a(71620),
                Q = a(668214),
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
                ce = (e, t) => {
                    const a = te.Z.selectHydrated(e, ne(0, t));
                    return a?.bookmarked ?? !1;
                },
                ie = (e, t) => {
                    const a = ne(0, t);
                    return a ? te.Z.selectHydrated(e, a) : void 0;
                },
                le = (e, t) => {
                    const a = ne(0, t);
                    return a ? te.Z.selectFetchStatus(e, a) : void 0;
                },
                se = (0, Q.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: Y.kX, dmPoppedOutConversationId: Y.gw, focalTweetId: ne, isBookmarked: ce, screenName: oe, user: re, tweet: ie, fetchStatus: le }))
                    .propsFromActions(() => ({ addToast: ee.fz, bookmark: te.Z.bookmark, createLocalApiErrorHandler: (0, K.zr)("ARTICLE_READER_MODE_SCREEN"), popOutConversation: Y.DO, setDrawerVisibility: Y.bi, unbookmark: te.Z.unbookmark, fetchTweetIfNeeded: te.Z.fetchOneArticleIfNeeded })),
                de = l().i31dcd22,
                me = l().e3de2f6f({ entity: de }),
                ue = l().e64de8a9({ entity: de }),
                pe = { page: "tweet" },
                be = (e) => {
                    e.stopPropagation();
                },
                ge = n.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", maxWidth: w.Z.columnWidths.wide, width: "100%" }, containerOneCol: { paddingTop: e.spaces.space56 }, containerOneColSmall: { paddingTop: 0 }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                he = o.createElement(c.ZP, { style: ge.titleIcon }, de),
                fe = ({ addToast: e, bookmark: t, createLocalApiErrorHandler: a, dmDrawerVisibility: n, dmPoppedOutConversationId: c, fetchStatus: i, fetchTweetIfNeeded: l, focalTweetId: w, history: T, isBookmarked: v, location: M, popOutConversation: D, screenName: P, setDrawerVisibility: A, tweet: O, unbookmark: F, user: H }) => {
                    const N = (0, B.Z)();
                    (0, E.ZP)();
                    const R = (0, k.hC)("responsive_web_twitter_article_reader_enabled"),
                        $ = s.ZP.isTwitterApp(),
                        L = (0, Z.q)({}, { location: M }),
                        [z] = o.useState(n),
                        [W] = o.useState(c),
                        V = o.useMemo(() => (O ? { items: [S.Z.getTweetItem(O)], tweet_id: O.id_str } : {}), [O]),
                        j = o.useCallback(() => {
                            if (O && O.user && P && O && P.toLowerCase() !== O.user.screen_name.toLowerCase()) {
                                const e = O && O.user ? `/${O.user.screen_name}/article/${O.id_str}` : null;
                                e && T.replace(e);
                            }
                        }, [T, P, O]);
                    o.useEffect(() => {
                        j();
                    }, [j]);
                    const q = o.useCallback(() => {
                        l(w).finally(() => {
                            (0, E.jW)("article-content-ready");
                        });
                    }, [w, l]);
                    o.useEffect(() => {
                        w && q();
                    }, [q, w]),
                        o.useEffect(
                            () => (
                                A(_.S.CLOSED),
                                () => {
                                    A(z), W && z === _.S.EXPANDED && D(W);
                                }
                            ),
                            [D, W, z, A],
                        );
                    const X = o.useMemo(() => `/${P}/status/${w}`, [P, w]),
                        G = o.useCallback(() => {
                            L ? T.goBack() : T.push(X);
                        }, [L, T, X]),
                        J = o.useCallback(() => {
                            (() => {
                                const e = window.location.pathname.match(/^\/@?([_\w+]+)\/article\/([\d]+)$/),
                                    [t] = e || [];
                                return !!t;
                            })() && G();
                        }, [G]),
                        K = o.useCallback(() => {
                            N.scribe({ action: "impression", component: "article", page: "tweet", data: V });
                        }, [N, V]),
                        Q = o.useCallback(() => {
                            N.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "article", section: "reader_mode" }), K(), G();
                        }, [N, G, K]),
                        Y = o.useCallback(() => {
                            T.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: w } });
                        }, [T, w]),
                        ee = o.useCallback(() => {
                            t(w).then(
                                () => {
                                    e({ text: me });
                                },
                                (e) => {
                                    a(C.h)(e);
                                },
                            );
                        }, [t, w, a, e]),
                        te = o.useCallback(() => {
                            F(w).then(
                                () => {
                                    e({ text: ue });
                                },
                                (e) => {
                                    a(C.h)(e);
                                },
                            );
                        }, [F, w, a, e]),
                        ae = o.useCallback((e) => o.createElement(U, { isBookmarked: v, isMobileLayout: e, onAddBookmark: ee, onAddBookmarkFolder: Y, onClose: Q, onRemoveBookmark: te }), [v, ee, Q, te, Y]),
                        oe = o.useCallback(() => o.createElement(x.Z, { to: X }), [X]),
                        re = o.useCallback(() => {
                            const e = O?.article;
                            return O && e ? o.createElement(I.nO, { data: V, namespace: pe }, o.createElement(h.Z, null, o.createElement(u.ZP, { tweet: O }, o.createElement(b.ZP, { author: H, publishedPost: O, twitterArticle: e, withActionBar: !$, withReplyLink: $ }), R ? o.createElement(g.ZP, null) : null))) : oe();
                        }, [R, $, oe, V, O, H]),
                        ne = (0, y.ZP)(),
                        ce = o.useCallback((e) => [ge.container, e ? (ne ? ge.containerOneCol : ge.containerOneColSmall) : null], [ne]),
                        ie = o.useCallback((e) => [ge.root, e ? ge.rootMobile : void 0], []),
                        le = o.useCallback((e, t) => o.createElement(r.Z, { style: ie(e) }, o.createElement(r.Z, { onClick: be, style: ce(e) }, o.createElement(r.Z, { style: ge.innerWrapper }, o.createElement(d.Z, { fetchStatus: i, render: re, renderFailure: oe, retryable: !1 }), e && !$ ? ae(t) : null))), [ie, ce, i, re, oe, $, ae]),
                        se = o.useMemo(() => ({ esc: J }), [J]),
                        de = (0, f.vS)(),
                        fe = (0, f.UZ)(),
                        ke = de || fe;
                    return o.createElement(o.Fragment, null, o.createElement(p.Z.Configure, { onBackClick: Q, sideNav: ae(de), title: he, withForceTopNav: de }), le(ke, de), o.createElement(m.Z, { handlers: se }));
                },
                ke = se(fe);
        },
        950011: (e, t, a) => {
            a.r(t), a.d(t, { ReaderModeScreen: () => Ze, default: () => Be });
            a(136728);
            var o = a(202784),
                r = a(325686),
                n = a(154003),
                c = a(392237),
                i = a(674132),
                l = a.n(i),
                s = a(899174),
                d = a(912021),
                m = a(516951),
                u = a(323265),
                p = a(933794),
                b = a(449067),
                g = a(890882),
                h = a(652904),
                f = a(607015),
                k = a(292484),
                E = a(518966),
                C = a(655352),
                w = a(951790),
                y = a(293115),
                Z = a(942893),
                I = a(725405),
                S = a(511582),
                B = a(360142),
                _ = a(71620),
                x = a(668214),
                T = a(550293),
                v = a(601576),
                M = a(836255),
                D = a(919022);
            const P = (e, t) => t.match.params.screenName ?? void 0,
                A = (e, t) => {
                    const a = P(0, t) || "";
                    return D.ZP.selectByScreenName(e, a);
                },
                O = (e, t) => {
                    const { location: a, match: o } = t;
                    return o.params?.tweetId ? o.params.tweetId : a.query?.tweet_id && "string" == typeof a.query.tweet_id ? a.query.tweet_id : "";
                },
                F = (e, t) => {
                    const a = O(0, t),
                        o = M.Z.selectHydrated(e, a);
                    return o?.conversation_id_str || "";
                },
                H = (e, t) => {
                    const a = M.Z.selectHydrated(e, O(0, t));
                    return a?.user?.screen_name || "";
                },
                N = (e, t) => {
                    const a = M.Z.selectHydrated(e, O(0, t));
                    return a?.bookmarked ?? !1;
                },
                R = (0, x.Z)()
                    .propsFromState(() => ({ authorScreenName: H, dmDrawerVisibility: T.kX, dmPoppedOutConversationId: T.gw, focalTweetId: O, isBookmarked: N, rootTweetId: F, screenName: P, user: A }))
                    .propsFromActions(() => ({ addToast: v.fz, bookmark: M.Z.bookmark, createLocalApiErrorHandler: (0, _.zr)("READER_MODE_SCREEN"), popOutConversation: T.DO, setDrawerVisibility: T.bi, unbookmark: M.Z.unbookmark }));
            var $ = a(58881),
                L = a(797553),
                z = a(143670),
                W = a(530732),
                V = a(731708),
                j = a(738398),
                q = a(818088),
                X = a(898361),
                G = a(913973),
                U = a(73416),
                J = a(883069),
                K = a(106687),
                Q = a(837020);
            const Y = l().gb303814,
                ee = l().d6d9aab6,
                te = l().bb89cf46,
                ae = l().a739d4ba,
                oe = l().d5270434,
                re = l().jcf3ff56,
                ne = l().f1252ac8,
                ce = l().daa0da04,
                ie = l().ba5256b2,
                le = c.default.isDarkMode() ? c.default.theme.colors.gray50 : c.default.theme.colors.gray0,
                se = "body",
                de = "headline1",
                me = "title3",
                ue = $.Z.generate({ backgroundColor: c.default.theme.colors.primary, color: c.default.theme.colors.cellBackground, customFocusBackgroundColor: le, customHoverBackgroundColor: le, customPressedBackgroundColor: le }),
                pe = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: a, onAddBookmarkFolder: c, onClose: i, onFontSizeChange: l, onRemoveBookmark: s, tweetTextSize: d }) => {
                    const [m, u] = o.useState(!1),
                        [p, b] = o.useState(!1),
                        g = () => {
                            u(!m);
                        },
                        h = () => {
                            b(!p);
                        },
                        f = () => {
                            a(), u(!1);
                        },
                        k = () => {
                            c(), u(!1);
                        },
                        E = () => {
                            s(), u(!1);
                        },
                        C = (e) => () => {
                            l(e), b(!1);
                        },
                        w = () => (m ? o.createElement(L.default, { isFixed: !0, onDismiss: g, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? o.createElement(z.Z, { Icon: j.default, actionText: te, onClick: E }) : o.createElement(z.Z, { Icon: q.default, actionText: ee, onClick: f }), o.createElement(z.Z, { Icon: X.default, actionText: ae, onClick: k })) : null),
                        y = (e) => e === d,
                        Z = () => o.createElement(r.Z, { style: be.emptyIconSpacer }),
                        I = () => (p ? o.createElement(L.default, { isFixed: !0, onDismiss: h, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, o.createElement(z.Z, { Icon: y(se) ? G.default : Z, actionText: ce, onClick: C(se) }), o.createElement(z.Z, { Icon: y(de) ? G.default : Z, actionText: ne, onClick: C(de) }), o.createElement(z.Z, { Icon: y(me) ? G.default : Z, actionText: re, onClick: C(me) })) : null),
                        S = () => (e ? o.createElement(U.default, { style: t ? be.iconMobile : be.icon }) : o.createElement(J.default, { style: t ? be.iconMobile : be.icon }));
                    return o.createElement(
                        r.Z,
                        { style: [be.actionBarWrapper, t ? be.actionBarWrapperMobile : void 0] },
                        o.createElement(
                            r.Z,
                            {
                                onClick: (e) => {
                                    e.stopPropagation();
                                },
                                style: t ? be.outerContainer : void 0,
                            },
                            o.createElement(r.Z, { style: t ? be.actionBarMobile : be.actionBar }, t ? o.createElement(o.Fragment, null, o.createElement(W.Z, { "aria-label": oe, interactiveStyles: ue, onPress: i, style: be.actionItem }, o.createElement(V.ZP, { color: "gray700" }, oe)), o.createElement(W.Z, { "aria-label": Y, interactiveStyles: ue, onPress: g, style: be.actionItem }, S()), w(), o.createElement(W.Z, { "aria-label": ie, interactiveStyles: ue, onPress: h, style: be.actionItem }, o.createElement(K.default, { style: t ? be.iconMobile : be.icon })), I()) : o.createElement(o.Fragment, null, o.createElement(r.Z, { style: be.buttonContainer }, o.createElement(n.ZP, { icon: o.createElement(Q.default, { style: t ? be.iconMobile : be.icon }), onClick: i, type: "brandText" })), o.createElement(o.Fragment, null, o.createElement(r.Z, { style: be.buttonContainer }, o.createElement(n.ZP, { icon: S(), onClick: g, type: "brandText" }), w()), o.createElement(r.Z, null, o.createElement(n.ZP, { icon: o.createElement(K.default, { style: t ? be.iconMobile : be.icon }), onClick: h, type: "brandText" }), I())))),
                        ),
                    );
                },
                be = c.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } })),
                ge = l().cce3f116,
                he = l().b593b396,
                fe = l().af9c8a3e,
                ke = l().c299a6c0,
                Ee = l().ef483238,
                Ce = { page: "thread", section: "reader_mode" },
                we = (0, d.Z)((e, t) => (0, B.ZP)({ focalTweetId: e, fetchOptions: t, timelineIdPrefix: "reader" })),
                ye = (0, d.Z)((e, t) => {
                    const { is_viewer_follows_user: a = !1 } = t ? Z.Z.getUserItem(t) : {};
                    return { items: [Z.Z.forThread(e, a)], tweet_id: e };
                }),
                Ze = ({ addToast: e, authorScreenName: t, bookmark: a, createLocalApiErrorHandler: c, dmDrawerVisibility: i, dmPoppedOutConversationId: l, focalTweetId: s, history: d, isBookmarked: Z, location: B, popOutConversation: _, rootTweetId: x, screenName: T, setDrawerVisibility: v, unbookmark: M, user: D }) => {
                    const P = (0, I.Z)(),
                        [A, O] = o.useState("headline1"),
                        [F] = o.useState(i),
                        [H] = o.useState(l),
                        N = o.useCallback(() => {
                            const e = ye(s, D);
                            D && s && P.scribe({ action: "impression", element: "view_thread", page: "thread", section: "reader_mode", data: e });
                        }, [P, s, D]);
                    o.useEffect(() => {
                        N();
                    }, [N]),
                        o.useEffect(
                            () => (
                                v(S.S.CLOSED),
                                () => {
                                    v(F), H && F === S.S.EXPANDED && _(H);
                                }
                            ),
                            [_, H, F, v],
                        );
                    const R = o.useCallback(() => {
                            P.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "thread", section: "reader_mode" }), d.goBack();
                        }, [P, d]),
                        $ = (e) => {
                            e.stopPropagation();
                        },
                        L = o.useCallback(() => !(!T || !t) && T.toLowerCase() !== t.toLowerCase(), [t, T]),
                        z = o.useCallback(() => {
                            const e = t && s ? `/${t}/thread/${s}` : "/";
                            d.replace({ pathname: e, query: B.query, state: B.state });
                        }, [t, s, d, B.query, B.state]),
                        W = () => {
                            P.scribe({ action: "click", element: "reader_mode_header_icon_disable", page: "thread", section: "reader_mode" }), d.push({ pathname: V(), query: B.query, state: B.state });
                        },
                        V = () => (t && s ? `/${t}/status/${s}` : "/");
                    o.useEffect(() => {
                        s && t && L() && z();
                    }, [t, s, z, L]);
                    const j = () => {
                            d.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: s } });
                        },
                        q = () => {
                            a(s).then(
                                () => {
                                    e({ text: ge });
                                },
                                (e) => {
                                    c(E.h)(e);
                                },
                            );
                        },
                        X = () => {
                            M(s).then(
                                () => {
                                    e({ text: he });
                                },
                                (e) => {
                                    c(E.h)(e);
                                },
                            );
                        },
                        G = (e) => o.createElement(pe, { isBookmarked: Z, isMobileLayout: e, onAddBookmark: q, onAddBookmarkFolder: j, onClose: R, onFontSizeChange: O, onRemoveBookmark: X, tweetTextSize: A }),
                        U = () => w.Z.openApp(`twitter://thread/${s}`),
                        J = (0, k.vS)(),
                        K = (0, k.UZ)(),
                        Q = J || K;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(b.Z.Configure, {
                            onBackClick: R,
                            rightControl: (() => {
                                const e = u.ZP.isMobileOS();
                                return o.createElement(r.Z, { style: Ie.mobileAppBarRightControl }, e ? o.createElement(n.ZP, { onClick: U }, fe) : null, o.createElement(n.ZP, { "aria-label": Ee, icon: Se, onClick: W, type: "brandText" }));
                            })(),
                            sideNav: G(J),
                            title: o.createElement(g.Z, { style: Ie.titleIcon, text: ke }),
                            withForceTopNav: J,
                        }),
                        o.createElement(
                            y.nO,
                            { data: { tweet_id: s }, namespace: Ce },
                            o.createElement(
                                h.Z,
                                null,
                                ((e, t) => {
                                    const a = (0, C.ZP)();
                                    let n;
                                    return e && a ? (n = Ie.containerOneCol) : e && (n = Ie.containerOneColSmall), o.createElement(r.Z, { style: [Ie.root, e ? Ie.rootMobile : void 0] }, o.createElement(r.Z, { onClick: $, style: [Ie.container, n] }, o.createElement(r.Z, { style: Ie.innerWrapper }, o.createElement(f.ZP, { focalTweetId: s, module: we(s, { isReaderMode: !0 }), rootTweetId: x, tweetTextSize: A }), e ? G(t) : null)));
                                })(Q, J),
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
                Ie = c.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", width: "600px" }, containerOneCol: { paddingTop: e.spaces.space56, width: "100%" }, containerOneColSmall: { paddingTop: 0, width: "100%" }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                Se = o.createElement(s.default, { style: Ie.icon }),
                Be = R(Ze);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-c6fe4ea4.e9afb1ca.js.map
