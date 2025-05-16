"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-9ec2f64d"],
    {
        432443: (e, t, n) => {
            n.r(t), n.d(t, { NotAvailablePage: () => E, default: () => b });
            var a = n(202784),
                r = n(325686),
                o = n(457311),
                l = n(392237),
                c = n(674132),
                i = n.n(c),
                s = n(252021),
                d = n(249777),
                p = n(486361);
            const m = i().a15648a4,
                u = i().h92fe1be,
                h = i().f0dc1434,
                f = i().i859a9d4,
                g = { external: !0, pathname: "https://twitter.github.io/communitynotes/join" },
                E = (e) => {
                    const { history: t } = e,
                        n = a.createElement(r.Z, { style: w.contentWrapper }, a.createElement(o.Z, { buttonLink: g, buttonText: f, buttonType: "brandOutlined", header: u, message: h }));
                    return a.createElement(s.Z, { TabBar: p.Z, history: t, primaryContent: n, sidebarContent: a.createElement(d.Z, null), title: m, withTweetButton: !1 });
                },
                w = l.default.create((e) => ({ contentWrapper: { marginHorizontal: "100px" } })),
                b = E;
        },
        413936: (e, t, n) => {
            n.r(t), n.d(t, { BirdwatchNoteScreen: () => M, default: () => j });
            var a = n(202784),
                r = n(325686),
                o = n(457311),
                l = n(731708),
                c = n(420412),
                i = n(834324),
                s = n(952428),
                d = n(721266),
                p = n(392237),
                m = n(167630),
                u = n(674132),
                h = n.n(u),
                f = n(500040),
                g = n(143778),
                E = n(323265),
                w = n(980407),
                b = n(952793),
                Z = n(4452),
                y = n(312771),
                _ = n(22730),
                S = n(333577),
                A = n(531187),
                v = n(71620),
                C = n(668214),
                P = n(979090);
            const I = (e, t) => t.match.params.noteId,
                N = (e, t) => P.Qg(e, I(0, t)),
                T = (e, t) => P.wd(e, I(0, t)),
                B = (0, C.Z)()
                    .propsFromState(() => ({ noteData: N, noteId: I, fetchStatus: T, userAlias: P.OV, showAliasSelfSelect: P.BG }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("BIRDWATCH_SCREEN"), fetchOneNoteIfNeeded: P.ww, fetchAuthenticatedUserProfileIfNeeded: P.eY, fetchShowAliasSelfSelect: P.aZ })),
                H = h().c87f3cf8,
                k = h().i859a9d4,
                x = h().efd14e7a,
                F = h().a5b19492,
                z = h().cf30af22,
                W = h().c21d1b2a,
                L = a.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: k, header: F }),
                R = h().c7b59cde,
                D = a.createElement(l.ZP, { color: "primary" }, R),
                O = g.Z,
                M = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAuthenticatedUserProfileIfNeeded: n, fetchOneNoteIfNeeded: o, fetchShowAliasSelfSelect: p, fetchStatus: m, history: u, location: g, noteData: v, noteId: C, showAliasSelfSelect: P, userAlias: I } = e,
                        N = E.ZP.isTwitterApp(),
                        [T, B] = a.useState(v);
                    (0, Z.ZP)();
                    a.useEffect(() => {
                        C &&
                            o(C)
                                .catch(t())
                                .finally(() => {
                                    (0, Z.jW)("birdwatch-note-ready");
                                });
                    }, [t, o, C]),
                        a.useEffect(() => {
                            n().catch(t());
                        }, [t, n]),
                        a.useEffect(() => {
                            p().catch(t());
                        }, [t, p]),
                        a.useEffect(() => {
                            B(v);
                        }, [v]);
                    const x = (0, b.hC)("responsive_web_birdwatch_note_writing_enabled"),
                        F = T?.rating_status === A.VE.CurrentlyRatedNotHelpful,
                        R = I === T?.birdwatch_profile?.alias,
                        M = x,
                        j = a.createElement(h().I18NFormatMessage, { $i18n: "i42495ad" }, a.createElement(l.ZP, { link: "/i/flow/join-birdwatch", withInteractiveStyling: !0, withUnderline: !0 }, h().c8be1d0d)),
                        G = g.state?.tweetId,
                        q = a.createElement(a.Fragment, null, a.createElement(c.Z, null), a.createElement(r.Z, { style: U.inlineCalloutCRNH }, a.createElement(i.Z, { Icon: f.default, action: { label: k, link: "https://twitter.github.io/communitynotes/diversity-of-perspectives/" }, headline: z, text: W, type: "primary" }))),
                        $ = M ? a.createElement(s.Z, null, a.createElement(l.ZP, { link: "/i/communitynotes/notification_settings", style: U.pivot, withInteractiveStyling: !1 }, D)) : null,
                        Y = a.createElement(
                            r.Z,
                            null,
                            a.createElement(
                                s.Z,
                                null,
                                N && a.createElement(d.Z, { size: "space12" }),
                                T && T.data_v1
                                    ? a.createElement(
                                          r.Z,
                                          { style: U.contentWrapper },
                                          a.createElement(S.Z, {
                                              handleDelete: (e) => {
                                                  B(null);
                                              },
                                              isNotePage: !0,
                                              note: T,
                                              showPivot: !0,
                                              showTweet: !0,
                                              tweetIdForRating: G,
                                          }),
                                          $,
                                          a.createElement(d.Z, { size: "space8" }),
                                          F && R ? q : null,
                                          a.createElement(c.Z, null),
                                          a.createElement(r.Z, { style: U.footer }, a.createElement(l.ZP, { color: "gray700", size: "subtext3" }, j)),
                                      )
                                    : m === y.ZP.LOADING
                                      ? V
                                      : L,
                            ),
                        );
                    return P ? a.createElement(_.Z, null) : a.createElement(w.Z, { history: u, renderHeader: N ? O : void 0, title: H }, a.createElement(r.Z, { style: U.contentWrapper }, Y));
                },
                U = p.default.create((e) => ({ calloutContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, contentWrapper: { backgroundColor: e.colors.cellBackground }, inlineCalloutCRNH: { margin: e.spaces.space16 }, pivot: { paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space12 }, spinner: { paddingTop: e.spaces.space80 }, footer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, marginHorizontal: e.spaces.space24 } })),
                V = a.createElement(m.Z, { "aria-label": x, size: "large", style: U.spinner }),
                j = B(M);
        },
        329173: (e, t, n) => {
            n.r(t), n.d(t, { SelfUserNotePageRedirect: () => w, default: () => b });
            var a = n(202784),
                r = n(167630),
                o = n(674132),
                l = n.n(o),
                c = n(252021),
                i = n(615027),
                s = n(22730),
                d = n(249777),
                p = n(486361),
                m = n(910148),
                u = n(71620),
                h = n(668214),
                f = n(979090);
            const g = (0, h.Z)()
                    .propsFromState(() => ({ userAlias: f.OV, showAliasSelfSelect: f.BG }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: f.lC, fetchShowAliasSelfSelect: f.aZ })),
                E = l().ff692d64,
                w = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAuthenticatedUserProfile: n, fetchShowAliasSelfSelect: o, history: l, showAliasSelfSelect: u, userAlias: h } = e,
                        [f, g] = a.useState(!0);
                    a.useEffect(() => {
                        n()
                            .then(() => g(!1))
                            .catch(t());
                    }, [t, n]),
                        a.useEffect(() => {
                            o().catch(t());
                        }, [t, o]);
                    const w = (e) => {
                        n()
                            .then(() => g(!1))
                            .catch(t());
                    };
                    return a.createElement(c.Z, { TabBar: p.Z, history: l, primaryContent: f ? a.createElement(r.Z, { size: "large" }) : h && "me" !== h ? a.createElement(i.Z, { to: `/i/communitynotes/u/${h}` }) : u ? a.createElement(s.Z, { onAliasSelected: w }) : a.createElement(m.Z, null), sidebarContent: a.createElement(d.Z, null), title: E, withTweetButton: !1 });
                },
                b = g(w);
        },
        39386: (e, t, n) => {
            n.r(t), n.d(t, { BirdwatchTweetNotesScreen: () => be, default: () => ye });
            var a = n(202784),
                r = n(325686),
                o = n(457311),
                l = n(834324),
                c = n(420412),
                i = n(731708),
                s = n(154003),
                d = n(30899),
                p = n(844685),
                m = n(952428),
                u = n(40610),
                h = n(167630),
                f = n(392237),
                g = n(674132),
                E = n.n(g),
                w = n(500040),
                b = n(227674),
                Z = n(711223),
                y = n(323265),
                _ = n(980407),
                S = n(252021),
                A = n(443781),
                v = n(652904),
                C = n(301758),
                P = n(4452),
                I = n(293115),
                N = n(312771),
                T = n(109411),
                B = n(22730),
                H = n(333577),
                k = n(249777),
                x = n(983235),
                F = n(486361),
                z = n(71620),
                W = n(668214),
                L = n(979090),
                R = n(245422),
                D = n(836255),
                O = n(919022);
            const M = (e, t) => t.match.params.tweetId,
                U = (e, t) => {
                    const n = M(0, t);
                    return n ? D.Z.selectHydrated(e, n) : void 0;
                },
                V = (e, t) => {
                    const n = M(0, t);
                    return n ? R.K2(e, n) : void 0;
                },
                j = (e, t) => L.Lt(e, M(0, t)),
                G = (e, t) => L.Wk(e, M(0, t)),
                q = (e, t) => L.dw(e, M(0, t)),
                $ = (e, t) => L.f3(e, M(0, t)),
                Y = (e, t) => L.tk(e, M(0, t)),
                K = (e, t) => {
                    const n = ((e) => L.OV(e))(e);
                    if (n) {
                        const t = n || "";
                        return L.eD(e, t);
                    }
                    return !1;
                },
                Q = (0, W.Z)()
                    .propsFromState(() => ({ ownNote: q, boostPivot: V, fetchStatus: $, loggedInUser: O.ZP.selectLoggedInUser, tweet: U, tweetId: M, showAliasSelfSelect: L.BG, misleadingNotes: j, notMisleadingNotes: G, sourceLink: Y, isTopWriter: K }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, z.zr)("BIRDWATCH_SCREEN"), fetchCommunityBoostPivot: R.aC, fetchNotes: L.Pi, fetchTweet: D.Z.fetchOneIfNeeded, fetchAuthenticatedUserProfileIfNeeded: L.eY, fetchShowAliasSelfSelect: L.aZ })),
                J = E().bc8746a6,
                X = E().ce3c80b8,
                ee = E().fa6a075a,
                te = E().acb7ecae,
                ne = E().af15cef8,
                ae = E().d9a5fc06,
                re = E().b73cebd2,
                oe = E().i859a9d4,
                le = E().ad8883f2,
                ce = E().efd14e7a,
                ie = E().e65b7186,
                se = E().bcc14a68,
                de = E().c21313ba,
                pe = E().c2c40120,
                me = E().ia596d40,
                ue = E().deff0bde,
                he = E().i8e85ef8,
                fe = E().a565833e,
                ge = [E().af88892a, E().cf8a40a6, E().g22c8c30],
                Ee = [E().jf04b084, E().g5a72e98],
                we = E().j24c37b2,
                be = (e) => {
                    const { featureSwitches: t } = a.useContext(A.rC);
                    (0, P.ZP)();
                    const { boostPivot: n, createLocalApiErrorHandler: f, fetchAuthenticatedUserProfileIfNeeded: g, fetchCommunityBoostPivot: E, fetchNotes: z, fetchShowAliasSelfSelect: W, fetchStatus: L, fetchTweet: R, history: D, isTopWriter: O, loggedInUser: M, misleadingNotes: U, notMisleadingNotes: V, ownNote: j, showAliasSelfSelect: G, sourceLink: q, tweet: $, tweetId: Y } = e,
                        K = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        Q = t.isTrue("responsive_web_birdwatch_require_rating_before_writing_enabled"),
                        be = t.isTrue("responsive_web_birdwatch_rating_participant_enabled") || t.isTrue("responsive_web_birdwatch_rating_crowd_enabled"),
                        ye = t.isTrue("responsive_web_communityboost_form_enabled"),
                        _e = t.isTrue("responsive_web_birdwatch_note_request_sources_enabled"),
                        Se = t.isTrue("responsive_web_communityboost_mixed_pivot_enabled"),
                        Ae = a.useMemo(() => ({ page: "birdwatch", section: K ? "tweet_notes_participant" : "tweet_notes" }), [K]),
                        ve = (e) => e.filter((e) => "CurrentlyRatedNotHelpful" !== e.rating_status),
                        Ce = (e) => e.filter((e) => "CurrentlyRatedNotHelpful" === e.rating_status),
                        Pe = (e) => e.filter((e) => !1 !== e.show_matched_parent_note || e.tweet?.rest_id === Y),
                        Ie = Pe(U),
                        Ne = Pe(V),
                        Te = ve(Ie),
                        Be = Ce(Ie),
                        He = ve(Ne),
                        ke = Ce(Ne),
                        xe = Te.concat(He),
                        Fe = xe.some((e) => void 0 !== e.rating),
                        [ze, We] = a.useState(!1),
                        [Le, Re] = a.useState(!1),
                        [De, Oe] = a.useState(!1);
                    a.useEffect(() => {
                        Y &&
                            (z(Y)
                                .catch(f())
                                .finally(() => {
                                    (0, P.jW)("community-note-content-ready"), (0, P.jW)("birdwatch-post-ready");
                                }),
                            R(Y).catch(f()));
                    }, [f, z, R, Y]),
                        a.useEffect(() => {
                            W().catch(f());
                        }, [f, W]),
                        a.useEffect(() => {
                            g().catch(f());
                        }, [f, g]),
                        a.useEffect(() => {
                            Y && E(Y.toString()).catch(f());
                        }, [f, E, Y]);
                    const Me = (e) => {
                            xe.length > 0 && !Fe && Q && (e.preventDefault(), Oe(!0));
                        },
                        Ue = Ie.length || Ne.length,
                        Ve = 0 === Ue && ye && n?.has_pivot,
                        je = 0 !== Ue && ye && n?.has_pivot && Se,
                        Ge = _e && O,
                        qe = !Ve && !(Ge && q?.has_note_request) ? a.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: oe, header: le }) : null,
                        $e = { pathname: `/i/communitynotes/contribute/${Y}`, state: { src: "tweetNotePage" } },
                        Ye = M?.id_str === $?.user.id_str,
                        Ke = !je || Le,
                        Qe = a.createElement(r.Z, { style: Ze.appealsCallout }, a.createElement(l.Z, { Icon: w.default, action: { label: oe, link: "https://twitter.github.io/communitynotes/additional-review" }, headline: ie, text: se, type: "primary" })),
                        Je = (e) => (ze ? e.map((e) => a.createElement(a.Fragment, { key: e.rest_id }, a.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), a.createElement(c.Z, null))) : a.createElement(r.Z, { style: [Ze.hiddenNotesSection, Ze.withBottomBorder] }, a.createElement(r.Z, { style: Ze.hiddenNotesHeader }, a.createElement(b.default, { style: Ze.iconHiddenNotes }), a.createElement(i.ZP, { size: "subtext2", weight: "bold" }, de)), a.createElement(i.ZP, { color: "primary", onPress: () => We(!0), size: "subtext2", withInteractiveStyling: !0 }, pe))),
                        Xe = (e) =>
                            a.createElement(
                                d.Z,
                                {
                                    renderContent: (t) =>
                                        a.createElement(
                                            r.Z,
                                            { style: Ze.tooltip },
                                            e.map((e) => a.createElement(i.ZP, { color: "gray700", style: Ze.tooltipText }, e)),
                                            a.createElement(i.ZP, { link: "https://twitter.github.io/communitynotes/writing-notes/", style: Ze.tooltipText }, oe),
                                            a.createElement(s.ZP, { onPress: t, size: "xLarge", type: "primaryFilled" }, we),
                                        ),
                                    withArrow: !0,
                                },
                                a.createElement(s.ZP, { icon: a.createElement(Z.default, null), style: Ze.infoIcon, type: "primaryText" }),
                            ),
                        et = a.createElement(
                            m.Z,
                            null,
                            G && a.createElement(B.Z, null),
                            a.createElement(
                                r.Z,
                                { style: Ze.contentWrapper },
                                a.createElement(r.Z, null, a.createElement(C.Z, { shouldShowBorder: !1, tweetId: Y, withBirdwatchPivot: !1 })),
                                Ve ? a.createElement(T.Z, { boostPivot: n, tweetId: Y }) : null,
                                Ge ? a.createElement(a.Fragment, null, a.createElement(x.Z, { tweetId: Y }), 0 === Ue && q?.has_note_request ? a.createElement(r.Z, { style: Ze.boostActionModule }, a.createElement(s.ZP, { link: $e, type: "primaryOutlined" }, ue)) : null) : null,
                                Ue
                                    ? a.createElement(
                                          a.Fragment,
                                          null,
                                          (!!U.length || !!V.length) &&
                                              a.createElement(
                                                  a.Fragment,
                                                  null,
                                                  Ye && Qe,
                                                  a.createElement(c.Z, null),
                                                  !!U.length &&
                                                      (() => {
                                                          const e = je ? (Le ? U : [U[0]]) : U,
                                                              t = je ? (Le ? Be : []) : Be;
                                                          return a.createElement(
                                                              r.Z,
                                                              null,
                                                              a.createElement(p.Z, { rightControl: Xe(ge), text: ee }),
                                                              a.createElement(c.Z, null),
                                                              e.map((e) => a.createElement(a.Fragment, { key: e.rest_id }, a.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), a.createElement(c.Z, null))),
                                                              t?.length > 0 ? Je(t) : null,
                                                          );
                                                      })(),
                                                  !!V.length &&
                                                      Ke &&
                                                      a.createElement(
                                                          r.Z,
                                                          null,
                                                          a.createElement(p.Z, { rightControl: Xe(Ee), text: te }),
                                                          a.createElement(c.Z, null),
                                                          He.map((e) => a.createElement(a.Fragment, { key: e.rest_id }, a.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), a.createElement(c.Z, null))),
                                                          ke?.length > 0 ? Je(ke) : null,
                                                      ),
                                                  be && !j && Ke ? a.createElement(r.Z, { style: Ze.actionModuleContainer }, De && a.createElement(r.Z, { style: Ze.calloutContainer }, a.createElement(u.Z.Attention, { headline: J, text: X, withIcon: !0 })), a.createElement(r.Z, { style: Ze.actionModule }, a.createElement(i.ZP, { style: Ze.improveText }, K ? me : he), a.createElement(s.ZP, { "aria-label": K ? ue : fe, link: K ? $e : "/i/flow/join-birdwatch", onPress: Me, type: "brandFilled" }, K ? ue : fe))) : null,
                                                  je
                                                      ? a.createElement(
                                                            a.Fragment,
                                                            null,
                                                            a.createElement(
                                                                r.Z,
                                                                { style: Ze.boostActionModule },
                                                                Le
                                                                    ? null
                                                                    : a.createElement(
                                                                          s.ZP,
                                                                          {
                                                                              onPress: () => {
                                                                                  Re(!0);
                                                                              },
                                                                              type: "primaryOutlined",
                                                                          },
                                                                          pe,
                                                                      ),
                                                            ),
                                                            a.createElement(T.Z, { boostPivot: n, tweetId: Y }),
                                                        )
                                                      : null,
                                              ),
                                      )
                                    : L === N.ZP.LOADING
                                      ? a.createElement(h.Z, { "aria-label": ce, size: "large", style: Ze.spinner })
                                      : qe,
                            ),
                        );
                    return a.createElement(I.nO, { namespace: Ae }, a.createElement(v.Z, null, y.ZP.isTwitterApp() ? a.createElement(_.Z, { children: et, hideBackButton: !0, history: D, renderHeader: () => null }) : a.createElement(S.Z, { TabBar: F.Z, backLocation: "/i/communitynotes", history: D, primaryContent: et, sidebarContent: a.createElement(k.Z, null), title: Ve ? ae : je ? re : ne, withTweetButton: !1 })));
                },
                Ze = f.default.create((e) => ({ actionModule: { alignItems: "center", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space32, textAlign: "center", width: "70%" }, boostActionModule: { alignItems: "center", paddingVertical: e.spaces.space20 }, actionModuleContainer: { alignItems: "center" }, calloutContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, appealsCallout: { padding: e.spaces.space16, paddingTop: 0 }, contentWrapper: { backgroundColor: e.colors.cellBackground, paddingBottom: e.spaces.space48 }, divider: { backgroundColor: e.colors.borderColor, height: e.spaces.space8, marginTop: e.spaces.space4 }, header: { paddingBottom: e.spaces.space12, fontWeight: e.fontWeights.heavy }, hiddenNotesHeader: { alignItems: "center", flexDirection: "row", paddingBottom: e.spaces.space4 }, hiddenNotesSection: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, icon: { color: e.colors.primary, height: e.spaces.space48, marginBottom: e.spaces.space20, width: e.spaces.space48 }, iconHiddenNotes: { color: e.colors.red500, height: e.spaces.space12, paddingBottom: e.spaces.space2, paddingEnd: e.spaces.space4, width: e.spaces.space12 }, improveText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, infoIcon: { color: e.colors.text }, spinner: { paddingTop: e.spaces.space20 }, tooltip: { padding: e.spaces.space32 }, tooltipText: { paddingBottom: e.spaces.space12 }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                ye = Q(be);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-9ec2f64d.a0f634ca.js.map
