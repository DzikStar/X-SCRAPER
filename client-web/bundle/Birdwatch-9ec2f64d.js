"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-9ec2f64d"],
    {
        432443: (e, t, a) => {
            a.r(t), a.d(t, { NotAvailablePage: () => E, default: () => Z });
            var n = a(202784),
                r = a(325686),
                o = a(457311),
                l = a(392237),
                c = a(674132),
                i = a.n(c),
                s = a(252021),
                d = a(249777),
                p = a(486361);
            const m = i().a15648a4,
                u = i().h92fe1be,
                h = i().f0dc1434,
                f = i().i859a9d4,
                g = { external: !0, pathname: "https://twitter.github.io/communitynotes/join" },
                E = (e) => {
                    const { history: t } = e,
                        a = n.createElement(r.Z, { style: w.contentWrapper }, n.createElement(o.Z, { buttonLink: g, buttonText: f, buttonType: "brandOutlined", header: u, message: h }));
                    return n.createElement(s.Z, { TabBar: p.Z, history: t, primaryContent: a, sidebarContent: n.createElement(d.Z, null), title: m, withTweetButton: !1 });
                },
                w = l.default.create((e) => ({ contentWrapper: { marginHorizontal: "100px" } })),
                Z = E;
        },
        413936: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteScreen: () => M, default: () => j });
            var n = a(202784),
                r = a(325686),
                o = a(457311),
                l = a(731708),
                c = a(420412),
                i = a(834324),
                s = a(952428),
                d = a(721266),
                p = a(392237),
                m = a(167630),
                u = a(674132),
                h = a.n(u),
                f = a(500040),
                g = a(143778),
                E = a(323265),
                w = a(980407),
                Z = a(952793),
                b = a(4452),
                y = a(312771),
                _ = a(22730),
                S = a(333577),
                A = a(531187),
                C = a(71620),
                P = a(668214),
                I = a(979090);
            const N = (e, t) => t.match.params.noteId,
                v = (e, t) => I.Qg(e, N(0, t)),
                T = (e, t) => I.wd(e, N(0, t)),
                B = (0, P.Z)()
                    .propsFromState(() => ({ noteData: v, noteId: N, fetchStatus: T, userAlias: I.OV, showAliasSelfSelect: I.BG }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("BIRDWATCH_SCREEN"), fetchOneNoteIfNeeded: I.ww, fetchAuthenticatedUserProfileIfNeeded: I.eY, fetchShowAliasSelfSelect: I.aZ })),
                H = h().c87f3cf8,
                k = h().i859a9d4,
                x = h().efd14e7a,
                F = h().a5b19492,
                z = h().cf30af22,
                W = h().c21d1b2a,
                L = n.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: k, header: F }),
                R = h().c7b59cde,
                D = n.createElement(l.ZP, { color: "primary" }, R),
                O = g.Z,
                M = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAuthenticatedUserProfileIfNeeded: a, fetchOneNoteIfNeeded: o, fetchShowAliasSelfSelect: p, fetchStatus: m, history: u, location: g, noteData: C, noteId: P, showAliasSelfSelect: I, userAlias: N } = e,
                        v = E.ZP.isTwitterApp(),
                        [T, B] = n.useState(C);
                    (0, b.ZP)();
                    n.useEffect(() => {
                        P &&
                            o(P)
                                .catch(t())
                                .finally(() => {
                                    (0, b.jW)("birdwatch-note-ready");
                                });
                    }, [t, o, P]),
                        n.useEffect(() => {
                            a().catch(t());
                        }, [t, a]),
                        n.useEffect(() => {
                            p().catch(t());
                        }, [t, p]),
                        n.useEffect(() => {
                            B(C);
                        }, [C]);
                    const x = (0, Z.hC)("responsive_web_birdwatch_note_writing_enabled"),
                        F = T?.rating_status === A.VE.CurrentlyRatedNotHelpful,
                        R = N === T?.birdwatch_profile?.alias,
                        M = x,
                        j = n.createElement(h().I18NFormatMessage, { $i18n: "i42495ad" }, n.createElement(l.ZP, { link: "/i/flow/join-birdwatch", withInteractiveStyling: !0, withUnderline: !0 }, h().c8be1d0d)),
                        G = g.state?.tweetId,
                        q = n.createElement(n.Fragment, null, n.createElement(c.Z, null), n.createElement(r.Z, { style: U.inlineCalloutCRNH }, n.createElement(i.Z, { Icon: f.default, action: { label: k, link: "https://twitter.github.io/communitynotes/diversity-of-perspectives/" }, headline: z, text: W, type: "primary" }))),
                        $ = M ? n.createElement(s.Z, null, n.createElement(l.ZP, { link: "/i/communitynotes/notification_settings", style: U.pivot, withInteractiveStyling: !1 }, D)) : null,
                        Y = n.createElement(
                            r.Z,
                            null,
                            n.createElement(
                                s.Z,
                                null,
                                v && n.createElement(d.Z, { size: "space12" }),
                                T && T.data_v1
                                    ? n.createElement(
                                          r.Z,
                                          { style: U.contentWrapper },
                                          n.createElement(S.Z, {
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
                                          n.createElement(d.Z, { size: "space8" }),
                                          F && R ? q : null,
                                          n.createElement(c.Z, null),
                                          n.createElement(r.Z, { style: U.footer }, n.createElement(l.ZP, { color: "gray700", size: "subtext3" }, j)),
                                      )
                                    : m === y.ZP.LOADING
                                      ? V
                                      : L,
                            ),
                        );
                    return I ? n.createElement(_.Z, null) : n.createElement(w.Z, { history: u, renderHeader: v ? O : void 0, title: H }, n.createElement(r.Z, { style: U.contentWrapper }, Y));
                },
                U = p.default.create((e) => ({ calloutContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, contentWrapper: { backgroundColor: e.colors.cellBackground }, inlineCalloutCRNH: { margin: e.spaces.space16 }, pivot: { paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space12 }, spinner: { paddingTop: e.spaces.space80 }, footer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, marginHorizontal: e.spaces.space24 } })),
                V = n.createElement(m.Z, { "aria-label": x, size: "large", style: U.spinner }),
                j = B(M);
        },
        329173: (e, t, a) => {
            a.r(t), a.d(t, { SelfUserNotePageRedirect: () => w, default: () => Z });
            var n = a(202784),
                r = a(167630),
                o = a(674132),
                l = a.n(o),
                c = a(252021),
                i = a(615027),
                s = a(22730),
                d = a(249777),
                p = a(486361),
                m = a(910148),
                u = a(71620),
                h = a(668214),
                f = a(979090);
            const g = (0, h.Z)()
                    .propsFromState(() => ({ userAlias: f.OV, showAliasSelfSelect: f.BG }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: f.lC, fetchShowAliasSelfSelect: f.aZ })),
                E = l().ff692d64,
                w = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAuthenticatedUserProfile: a, fetchShowAliasSelfSelect: o, history: l, showAliasSelfSelect: u, userAlias: h } = e,
                        [f, g] = n.useState(!0);
                    n.useEffect(() => {
                        a()
                            .then(() => g(!1))
                            .catch(t());
                    }, [t, a]),
                        n.useEffect(() => {
                            o().catch(t());
                        }, [t, o]);
                    const w = (e) => {
                        a()
                            .then(() => g(!1))
                            .catch(t());
                    };
                    return n.createElement(c.Z, { TabBar: p.Z, history: l, primaryContent: f ? n.createElement(r.Z, { size: "large" }) : h && "me" !== h ? n.createElement(i.Z, { to: `/i/communitynotes/u/${h}` }) : u ? n.createElement(s.Z, { onAliasSelected: w }) : n.createElement(m.Z, null), sidebarContent: n.createElement(d.Z, null), title: E, withTweetButton: !1 });
                },
                Z = g(w);
        },
        39386: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchTweetNotesScreen: () => Ze, default: () => ye });
            var n = a(202784),
                r = a(325686),
                o = a(457311),
                l = a(834324),
                c = a(420412),
                i = a(731708),
                s = a(154003),
                d = a(30899),
                p = a(844685),
                m = a(952428),
                u = a(40610),
                h = a(167630),
                f = a(392237),
                g = a(674132),
                E = a.n(g),
                w = a(500040),
                Z = a(227674),
                b = a(711223),
                y = a(323265),
                _ = a(980407),
                S = a(252021),
                A = a(443781),
                C = a(652904),
                P = a(301758),
                I = a(4452),
                N = a(293115),
                v = a(312771),
                T = a(109411),
                B = a(22730),
                H = a(333577),
                k = a(249777),
                x = a(983235),
                F = a(486361),
                z = a(71620),
                W = a(668214),
                L = a(979090),
                R = a(245422),
                D = a(836255),
                O = a(919022);
            const M = (e, t) => t.match.params.tweetId,
                U = (e, t) => {
                    const a = M(0, t);
                    return a ? D.Z.selectHydrated(e, a) : void 0;
                },
                V = (e, t) => {
                    const a = M(0, t);
                    return a ? R.K2(e, a) : void 0;
                },
                j = (e, t) => L.Lt(e, M(0, t)),
                G = (e, t) => L.Wk(e, M(0, t)),
                q = (e, t) => L.dw(e, M(0, t)),
                $ = (e, t) => L.f3(e, M(0, t)),
                Y = (e, t) => L.tk(e, M(0, t)),
                K = (e, t) => {
                    const a = ((e) => L.OV(e))(e);
                    if (a) {
                        const t = a || "";
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
                ae = E().af15cef8,
                ne = E().d9a5fc06,
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
                Ze = (e) => {
                    const { featureSwitches: t } = n.useContext(A.rC);
                    (0, I.ZP)();
                    const { boostPivot: a, createLocalApiErrorHandler: f, fetchAuthenticatedUserProfileIfNeeded: g, fetchCommunityBoostPivot: E, fetchNotes: z, fetchShowAliasSelfSelect: W, fetchStatus: L, fetchTweet: R, history: D, isTopWriter: O, loggedInUser: M, misleadingNotes: U, notMisleadingNotes: V, ownNote: j, showAliasSelfSelect: G, sourceLink: q, tweet: $, tweetId: Y } = e,
                        K = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        Q = t.isTrue("responsive_web_birdwatch_require_rating_before_writing_enabled"),
                        Ze = t.isTrue("responsive_web_birdwatch_rating_participant_enabled") || t.isTrue("responsive_web_birdwatch_rating_crowd_enabled"),
                        ye = t.isTrue("responsive_web_communityboost_form_enabled"),
                        _e = t.isTrue("responsive_web_birdwatch_note_request_sources_enabled"),
                        Se = n.useMemo(() => ({ page: "birdwatch", section: K ? "tweet_notes_participant" : "tweet_notes" }), [K]),
                        Ae = (e) => e.filter((e) => "CurrentlyRatedNotHelpful" !== e.rating_status),
                        Ce = (e) => e.filter((e) => "CurrentlyRatedNotHelpful" === e.rating_status),
                        Pe = (e) => e.filter((e) => !1 !== e.show_matched_parent_note || e.tweet?.rest_id === Y),
                        Ie = Pe(U),
                        Ne = Pe(V),
                        ve = Ae(Ie),
                        Te = Ce(Ie),
                        Be = Ae(Ne),
                        He = Ce(Ne),
                        ke = ve.concat(Be),
                        xe = ke.some((e) => void 0 !== e.rating),
                        [Fe, ze] = n.useState(!1),
                        [We, Le] = n.useState(!1),
                        [Re, De] = n.useState(!1);
                    n.useEffect(() => {
                        Y &&
                            (z(Y)
                                .catch(f())
                                .finally(() => {
                                    (0, I.jW)("community-note-content-ready"), (0, I.jW)("birdwatch-post-ready");
                                }),
                            R(Y).catch(f()));
                    }, [f, z, R, Y]),
                        n.useEffect(() => {
                            W().catch(f());
                        }, [f, W]),
                        n.useEffect(() => {
                            g().catch(f());
                        }, [f, g]),
                        n.useEffect(() => {
                            Y && E(Y.toString()).catch(f());
                        }, [f, E, Y]);
                    const Oe = (e) => {
                            ke.length > 0 && !xe && Q && (e.preventDefault(), De(!0));
                        },
                        Me = Ie.length || Ne.length,
                        Ue = 0 === Me && ye && a?.has_pivot,
                        Ve = 0 !== Me && ye && a?.has_pivot,
                        je = _e && O,
                        Ge = !Ue && !(je && q?.has_note_request) ? n.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: oe, header: le }) : null,
                        qe = { pathname: `/i/communitynotes/contribute/${Y}`, state: { src: "tweetNotePage" } },
                        $e = M?.id_str === $?.user.id_str,
                        Ye = !Ve || We,
                        Ke = n.createElement(r.Z, { style: be.appealsCallout }, n.createElement(l.Z, { Icon: w.default, action: { label: oe, link: "https://twitter.github.io/communitynotes/additional-review" }, headline: ie, text: se, type: "primary" })),
                        Qe = (e) => (Fe ? e.map((e) => n.createElement(n.Fragment, { key: e.rest_id }, n.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), n.createElement(c.Z, null))) : n.createElement(r.Z, { style: [be.hiddenNotesSection, be.withBottomBorder] }, n.createElement(r.Z, { style: be.hiddenNotesHeader }, n.createElement(Z.default, { style: be.iconHiddenNotes }), n.createElement(i.ZP, { size: "subtext2", weight: "bold" }, de)), n.createElement(i.ZP, { color: "primary", onPress: () => ze(!0), size: "subtext2", withInteractiveStyling: !0 }, pe))),
                        Je = (e) =>
                            n.createElement(
                                d.Z,
                                {
                                    renderContent: (t) =>
                                        n.createElement(
                                            r.Z,
                                            { style: be.tooltip },
                                            e.map((e) => n.createElement(i.ZP, { color: "gray700", style: be.tooltipText }, e)),
                                            n.createElement(i.ZP, { link: "https://twitter.github.io/communitynotes/writing-notes/", style: be.tooltipText }, oe),
                                            n.createElement(s.ZP, { onPress: t, size: "xLarge", type: "primaryFilled" }, we),
                                        ),
                                    withArrow: !0,
                                },
                                n.createElement(s.ZP, { icon: n.createElement(b.default, null), style: be.infoIcon, type: "primaryText" }),
                            ),
                        Xe = n.createElement(
                            m.Z,
                            null,
                            G && n.createElement(B.Z, null),
                            n.createElement(
                                r.Z,
                                { style: be.contentWrapper },
                                n.createElement(r.Z, null, n.createElement(P.Z, { shouldShowBorder: !1, tweetId: Y, withBirdwatchPivot: !1 })),
                                Ue ? n.createElement(T.Z, { boostPivot: a, tweetId: Y }) : null,
                                je ? n.createElement(n.Fragment, null, n.createElement(x.Z, { tweetId: Y }), 0 === Me && q?.has_note_request ? n.createElement(r.Z, { style: be.boostActionModule }, n.createElement(s.ZP, { link: qe, type: "primaryOutlined" }, ue)) : null) : null,
                                Me
                                    ? n.createElement(
                                          n.Fragment,
                                          null,
                                          (!!U.length || !!V.length) &&
                                              n.createElement(
                                                  n.Fragment,
                                                  null,
                                                  $e && Ke,
                                                  n.createElement(c.Z, null),
                                                  !!U.length &&
                                                      (() => {
                                                          const e = Ve ? (We ? U : [U[0]]) : U,
                                                              t = Ve ? (We ? Te : []) : Te;
                                                          return n.createElement(
                                                              r.Z,
                                                              null,
                                                              n.createElement(p.Z, { rightControl: Je(ge), text: ee }),
                                                              n.createElement(c.Z, null),
                                                              e.map((e) => n.createElement(n.Fragment, { key: e.rest_id }, n.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), n.createElement(c.Z, null))),
                                                              t?.length > 0 ? Qe(t) : null,
                                                          );
                                                      })(),
                                                  !!V.length &&
                                                      Ye &&
                                                      n.createElement(
                                                          r.Z,
                                                          null,
                                                          n.createElement(p.Z, { rightControl: Je(Ee), text: te }),
                                                          n.createElement(c.Z, null),
                                                          Be.map((e) => n.createElement(n.Fragment, { key: e.rest_id }, n.createElement(H.Z, { note: e, ownNote: e === j, tweetIdForRating: Y }), n.createElement(c.Z, null))),
                                                          He?.length > 0 ? Qe(He) : null,
                                                      ),
                                                  Ze && !j && Ye ? n.createElement(r.Z, { style: be.actionModuleContainer }, Re && n.createElement(r.Z, { style: be.calloutContainer }, n.createElement(u.Z.Attention, { headline: J, text: X, withIcon: !0 })), n.createElement(r.Z, { style: be.actionModule }, n.createElement(i.ZP, { style: be.improveText }, K ? me : he), n.createElement(s.ZP, { "aria-label": K ? ue : fe, link: K ? qe : "/i/flow/join-birdwatch", onPress: Oe, type: "brandFilled" }, K ? ue : fe))) : null,
                                                  Ve
                                                      ? n.createElement(
                                                            n.Fragment,
                                                            null,
                                                            n.createElement(
                                                                r.Z,
                                                                { style: be.boostActionModule },
                                                                We
                                                                    ? null
                                                                    : n.createElement(
                                                                          s.ZP,
                                                                          {
                                                                              onPress: () => {
                                                                                  Le(!0);
                                                                              },
                                                                              type: "primaryOutlined",
                                                                          },
                                                                          pe,
                                                                      ),
                                                            ),
                                                            n.createElement(T.Z, { boostPivot: a, tweetId: Y }),
                                                        )
                                                      : null,
                                              ),
                                      )
                                    : L === v.ZP.LOADING
                                      ? n.createElement(h.Z, { "aria-label": ce, size: "large", style: be.spinner })
                                      : Ge,
                            ),
                        );
                    return n.createElement(N.nO, { namespace: Se }, n.createElement(C.Z, null, y.ZP.isTwitterApp() ? n.createElement(_.Z, { children: Xe, hideBackButton: !0, history: D, renderHeader: () => null }) : n.createElement(S.Z, { TabBar: F.Z, backLocation: "/i/communitynotes", history: D, primaryContent: Xe, sidebarContent: n.createElement(k.Z, null), title: Ue ? ne : Ve ? re : ae, withTweetButton: !1 })));
                },
                be = f.default.create((e) => ({ actionModule: { alignItems: "center", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space32, textAlign: "center", width: "70%" }, boostActionModule: { alignItems: "center", paddingVertical: e.spaces.space20 }, actionModuleContainer: { alignItems: "center" }, calloutContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, appealsCallout: { padding: e.spaces.space16, paddingTop: 0 }, contentWrapper: { backgroundColor: e.colors.cellBackground, paddingBottom: e.spaces.space48 }, divider: { backgroundColor: e.colors.borderColor, height: e.spaces.space8, marginTop: e.spaces.space4 }, header: { paddingBottom: e.spaces.space12, fontWeight: e.fontWeights.heavy }, hiddenNotesHeader: { alignItems: "center", flexDirection: "row", paddingBottom: e.spaces.space4 }, hiddenNotesSection: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, icon: { color: e.colors.primary, height: e.spaces.space48, marginBottom: e.spaces.space20, width: e.spaces.space48 }, iconHiddenNotes: { color: e.colors.red500, height: e.spaces.space12, paddingBottom: e.spaces.space2, paddingEnd: e.spaces.space4, width: e.spaces.space12 }, improveText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, infoIcon: { color: e.colors.text }, spinner: { paddingTop: e.spaces.space20 }, tooltip: { padding: e.spaces.space32 }, tooltipText: { paddingBottom: e.spaces.space12 }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                ye = Q(Ze);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-9ec2f64d.f52aa38a.js.map
