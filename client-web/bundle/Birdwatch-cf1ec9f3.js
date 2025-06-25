"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-cf1ec9f3"],
    {
        910148: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                l = n(457311),
                o = n(111677),
                r = n.n(o),
                i = n(443781);
            const s = { external: !0, pathname: "https://twitter.github.io/communitynotes/writing-notes" },
                c = r().i859a9d4,
                d = r().f893c3b8,
                u = r().a701795c,
                m = r().db08295e,
                p = r().ha275800,
                g = r().ce0a213a,
                f = () => {
                    const { featureSwitches: e } = a.useContext(i.rC),
                        t = e.isTrue("responsive_web_birdwatch_note_writing_enabled");
                    return a.createElement(l.Z, { buttonLink: t ? s : "/i/flow/join-birdwatch", buttonText: t ? c : d, header: t ? u : m, message: t ? g : p });
                };
        },
        721455: (e, t, n) => {
            n.r(t), n.d(t, { BirdwatchNotesUserScreen: () => qe, default: () => Je });
            var a = n(807896),
                l = (n(136728), n(202784)),
                o = n(325686),
                r = n(731708),
                i = n(420412),
                s = n(154003),
                c = n(909377),
                d = n(721266),
                u = n(688715),
                m = n(844685),
                p = n(40610),
                g = n(661810),
                f = n(952428),
                h = n(190286),
                E = n(392237),
                b = n(111677),
                y = n.n(b),
                w = n(698891),
                _ = n(47086),
                Z = n(121791),
                k = n(775042),
                C = n(281312),
                x = n(607127),
                S = n(323265),
                P = n(959848),
                I = n(553894),
                N = n(81327),
                T = n(980407),
                v = n(252021),
                B = n(443781),
                H = n(652904),
                R = n(26232),
                A = n(890655),
                z = n(293115),
                O = n(620482),
                D = n(916616),
                L = n(22730),
                M = n(89620),
                U = n(169584),
                F = n(129086),
                j = n(249777),
                Y = n(486361),
                $ = n(304093),
                V = n(24949),
                W = n(71620),
                q = n(668214),
                G = n(979090),
                Q = n(68738),
                J = n(78014),
                K = n(919022);
            const X = (e, t) => t.match.params.alias,
                ee = (e, t) => G.HO(e, X(0, t)),
                te = (e, t) => G.w6(e, X(0, t)),
                ne = (e, t) => G.gH(e, X(0, t)),
                ae = (e, t) => G.cS(e),
                le = (e, t) => G.BG(e),
                oe = (e, t) => G.PL(e),
                re = (e, t) => G.ap(e, X(0, t)),
                ie = (0, q.Z)()
                    .propsFromState(() => ({ alias: X, notesCount: ne, deletedNotesCount: ee, deletedNotesSlice: (0, V.P1)(X, (e) => (e ? (0, Q.E)(e) : void 0)), enrollmentStatus: oe, notesSlice: (0, V.P1)(X, (e) => (e ? (0, J._)(e) : void 0)), userHasNotes: ae, showAliasSelfSelect: le, ratingsCount: te, userAlias: G.OV, isTopWriter: re, loggedInUser: K.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, W.zr)("BIRDWATCH_SCREEN"), fetchBirdwatchProfile: G.mv, fetchShowAliasSelfSelect: G.aZ, fetchAuthenticatedUserProfileIfNeeded: G.eY, admitUser: G.SZ }));
            var se = n(457311),
                ce = n(786998),
                de = n(370006),
                ue = n(138099);
            const me = y().ee160790,
                pe = y().efb9a9e0,
                ge = l.createElement(r.ZP, { link: "https://twitter.github.io/communitynotes/writing-notes/#deleting-notes", withInteractiveStyling: !0 }),
                fe = l.createElement(y().I18NFormatMessage, { $i18n: "d458f69d" }, l.cloneElement(ge, null, y().a1529ce7)),
                he = () => l.createElement(se.Z, { header: pe }),
                Ee = E.default.create((e) => ({ footer: { paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space16 } })),
                be = (e) => {
                    const { deletedNotesSlice: t, onClose: n } = e,
                        a = l.createElement(o.Z, null, l.createElement(ce.Z, { leftControl: l.createElement(de.Z, { backButtonType: "close", onClick: n }), title: me }), t ? l.createElement(R.Z, { footer: null, module: t, noItemsRenderer: he, renderer: (e) => l.createElement(o.Z, { key: e }, l.createElement(F.Z, { noteId: e, showRating: !1, showTweet: !0 }), l.createElement(i.Z, null)), withoutHeadroom: !0 }) : null, l.createElement(r.ZP, { color: "gray700", style: Ee.footer }, fe));
                    return l.createElement(ue.Z, { allowBackNavigation: !0, children: a, onMaskClick: n, type: "full", withMask: !0 });
                };
            var ye = n(283369);
            const we = ({ enrollmentStatus: e, isOwnProfile: t, ratingImpact: n }) => {
                    let a = null;
                    return t ? ("EarnedIn" === e?.enrollment_state ? (a = l.createElement(ye.Uu, null)) : "NewUser" === e?.enrollment_state && ((a = l.createElement(ye.wy, null)), n < 0 ? (a = l.createElement(ye.UB, null)) : 0 === n && (a = l.createElement(ye.tF, null)))) : (a = l.createElement(ye.Bk, null)), a ? l.createElement(l.Fragment, null, a, l.createElement(g.Z, { spacing: "space2" })) : null;
                },
                _e = y().ff692d64,
                Ze = y().ab28945c,
                ke = y().jaf0d42c,
                Ce = y().fe27c1e2,
                xe = l.createElement(y().I18NFormatMessage, { $i18n: "if0d6dd7" }, l.createElement(r.ZP, { link: "https://twitter.github.io/communitynotes/aliases/" }, y().a490bc51)),
                Se = y().j5f112b4,
                Pe = y().fa9a644a,
                Ie = y().i4014342,
                Ne = y().j9897a7c,
                Te = y().ee7b8050,
                ve = y().fd02e290,
                Be = y().b8cc2e9a,
                He = y().f6c8613e,
                Re = y().c23e67ea,
                Ae = y().ac71a5a0,
                ze = y().h544e3c8,
                Oe = y().d88c63f6,
                De = "https://twitter.github.io/communitynotes/examples/",
                Le = y().bb081ea2,
                Me = y().i859a9d4,
                Ue = y().bd31adde,
                Fe = y().a796c19c,
                je = y().gea6cc1a,
                Ye = y().h837a96c,
                $e = y().a4d4bcb9,
                Ve = Object.freeze({ closed: { shouldShow: !1 }, openSuccessful: { shouldShow: !0, badgeType: N.n.Ratings }, openHelpful: { shouldShow: !0, badgeType: N.n.Notes } });
            function We(e) {
                const { screenProps: t, ...n } = e,
                    a = t.userAlias === t.alias,
                    o = "NewUser" === t.enrollmentStatus?.enrollment_state,
                    r = void 0 !== t.notesCount?.awaiting_more_ratings && void 0 !== t.notesCount?.currently_rated_helpful && void 0 !== t.notesCount?.currently_rated_not_helpful;
                return o && a && !r ? null : l.createElement(P.Z, n);
            }
            const qe = (e) => {
                const { featureSwitches: t } = l.useContext(B.rC),
                    { admitUser: n, alias: E, createLocalApiErrorHandler: b, deletedNotesCount: V, deletedNotesSlice: W, enrollmentStatus: q, fetchAuthenticatedUserProfileIfNeeded: G, fetchBirdwatchProfile: Q, fetchShowAliasSelfSelect: J, history: K, isTopWriter: X, loggedInUser: ee, notesCount: te, notesSlice: ne, ratingsCount: ae, showAliasSelfSelect: le, userAlias: oe } = e,
                    re = (0, I.v)(ae),
                    ie = (0, I.u)(te),
                    se = { ratingImpact: re, ratingsHelpful: ae?.successful?.helpful_count, ratingsNotHelpful: ae?.successful?.not_helpful_count, contrastingNotHelpfulRatingsOnHelpfulNotes: ae?.unsuccessful?.helpful_count, contrastingHelpfulRatingsOnNotHelpfulNotes: ae?.unsuccessful?.not_helpful_count, pending: ae?.awaiting_more_ratings, ratingsAfterStatusReached: ae?.rated_after_decision, updatedTime: ae?.last_updated_at },
                    ce = { writingImpact: ie, ratingsHelpful: te?.currently_rated_helpful, ratingsNotHelpful: te?.currently_rated_not_helpful, pending: te?.awaiting_more_ratings, updatedTime: te?.last_updated_at },
                    de = void 0 !== ae,
                    [ue, me] = l.useState(le),
                    [pe, ge] = l.useState(!1),
                    [fe, he] = l.useState(!1),
                    [Ee, ye] = l.useState(Ve.closed),
                    [ke, Ce] = l.useState(!1),
                    qe = () => ye(Ve.openHelpful),
                    Je = () => ye(Ve.openSuccessful),
                    Ke = () => he(!0),
                    Xe = () => Ce(!0),
                    et = oe === E;
                l.useEffect(() => {
                    J().catch(b());
                }, [b, J]),
                    l.useEffect(() => {
                        E && Q(E).catch(b());
                    }, [b, Q, E]),
                    l.useEffect(() => {
                        G().catch(b());
                    }, [b, G]),
                    l.useEffect(() => {
                        me(le);
                    }, [le]);
                const tt = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                    nt = t.isTrue("responsive_web_birdwatch_top_contributor_enabled"),
                    at = t.isTrue("responsive_web_birdwatch_self_remove_enabled"),
                    lt = V && V > 0 && W,
                    ot = l.useMemo(() => ({ page: "birdwatch", section: tt ? "user_notes_participant" : "user_notes" }), [tt]),
                    rt = (e) => l.createElement(o.Z, { key: e }, l.createElement(F.Z, { noteId: e, showPivot: et, showRating: !1, showTweet: !0 }), l.createElement(i.Z, null)),
                    it = "Removed" === q?.enrollment_state ? null : l.createElement(s.ZP, { "aria-label": Le, hoverLabel: { label: Le }, icon: l.createElement(w.default, null), link: "/i/communitynotes/notification_settings", pullRight: !0, type: "primaryText" }),
                    st = et ? _e : Ze,
                    ct = () => {
                        const t = void 0 !== e.notesCount?.awaiting_more_ratings && void 0 !== e.notesCount?.currently_rated_helpful && void 0 !== e.notesCount?.currently_rated_not_helpful,
                            n = et && "NewUser" === q?.enrollment_state && t;
                        return l.createElement(
                            o.Z,
                            { style: Qe.container },
                            l.createElement(c.Z, { Icon: C.default, color: "neutral", size: "xxxLarge", style: Qe.genericBirdwatchProfileIcon }),
                            l.createElement(m.Z, { style: Qe.profileText, text: (0, A.Q)(E) }),
                            l.createElement(r.ZP, { color: "gray700", style: Qe.birdwatchAliasDisclaimerText }, xe),
                            de && l.createElement(o.Z, { style: Qe.badgeContainer }, l.createElement(l.Fragment, null, l.createElement(P.Z, { badgeScore: re, badgeType: N.n.Ratings, interactive: !0, onClick: Je }), l.createElement(We, { badgeScore: ie, badgeType: N.n.Notes, interactive: !0, onClick: qe, screenProps: e }), X && nt && l.createElement(P.Z, { badgeType: N.n.TopContributor, interactive: !0, onClick: Ke }))),
                            n && l.createElement(o.Z, { style: Qe.statusChangeContainer }, l.createElement(p.Z.Custom, { Icon: Z.default, action: { label: Me, link: "https://twitter.github.io/communitynotes/writing-ability/" }, backgroundColor: "blue0", headline: Oe, text: ze, withColoredIcon: !0 })),
                            (() => {
                                const e = "AtRisk" === q?.enrollment_state && et,
                                    t = l.createElement(o.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(_.default, { style: Qe.icon }), l.createElement(o.Z, { style: Qe.enrollmentStatusText }, l.createElement(r.ZP, { style: Qe.text, weight: "bold" }, Se), l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, Pe))),
                                    n = l.createElement(o.Z, { style: Qe.feedbackContainer }, q?.top_not_helpful_tags && q.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(r.ZP, { weight: "bold" }, Ie), l.createElement(r.ZP, { color: "gray700" }, l.createElement(U.Z, { tags: q.top_not_helpful_tags }))) : null);
                                return e ? l.createElement(o.Z, null, l.createElement(i.Z, null), t, n, l.createElement(o.Z, { style: Qe.atRiskButtonContainer }, l.createElement(s.ZP, { link: De, type: "primaryOutlined" }, Ne))) : null;
                            })(),
                            (() => {
                                if ("EarnedOutAcknowledged" !== q?.enrollment_state || !et) return null;
                                const e = l.createElement(o.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(Z.default, { style: Qe.innerIconColor }), size: "medium", style: Qe.thumbnailIcon }), l.createElement(o.Z, { style: Qe.enrollmentStatusText }, l.createElement(r.ZP, { style: Qe.text, weight: "bold" }, Te), l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, Be), l.createElement(d.Z, { size: "space12" }), l.createElement(r.ZP, { link: (0, u.ju)("https://communitynotes.x.com/guide/en/contributing/writing-ability"), size: "subtext1", style: Qe.text, weight: "medium", withUnderline: !0 }, ve))),
                                    t = l.createElement(o.Z, { style: Qe.feedbackContainer }, q?.top_not_helpful_tags && q.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(r.ZP, { weight: "bold" }, He), l.createElement(r.ZP, { color: "gray700" }, l.createElement(U.Z, { tags: q.top_not_helpful_tags }))) : null, l.createElement(r.ZP, { link: De, style: Qe.text, weight: "medium", withUnderline: !0 }, Ne)),
                                    n = q?.survey_url ? l.createElement(r.ZP, { color: "gray700", size: "subtext3", withInteractiveStyling: !1 }, l.createElement(y().I18NFormatMessage, { $i18n: "f49cbf83" }, l.createElement(r.ZP, { color: "gray700", link: q?.survey_url, withUnderline: !0 }, y().c94ad3e8))) : null,
                                    a = q?.successful_rating_needed_to_earn_in && de ? l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, l.createElement(y().I18NFormatMessage, { $i18n: "a94c6db7", requiredRatingImpact: q?.successful_rating_needed_to_earn_in, currentRatingImpact: re })) : null,
                                    s = l.createElement(o.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(k.default, { style: Qe.innerIconColor }), size: "medium", style: Qe.thumbnailIcon }), l.createElement(o.Z, { style: Qe.enrollmentStatusText }, l.createElement(r.ZP, { style: Qe.text, weight: "bold" }, Re), a, l.createElement(r.ZP, { link: "/i/birdwatch", style: [Qe.text, Qe.rateNotesThatNeedHelpText], weight: "medium", withUnderline: !0 }, Ae), n));
                                return l.createElement(o.Z, null, l.createElement(i.Z, null), e, t, s);
                            })(),
                            (() => {
                                if (!at || "Removed" !== q?.enrollment_state || !et) return null;
                                const e = q?.timestamp_of_last_state_change,
                                    t = e ? Math.ceil(90 - (Date.now() - e) / 1e3 / 3600 / 24) : 0,
                                    n = $e({ numDaysToRejoin: t });
                                return l.createElement(o.Z, { style: Qe.selfRemoveInfoContainer }, l.createElement(o.Z, { style: Qe.selfRemoveInfoText }, l.createElement(r.ZP, { color: "gray700" }, Ue), t <= 0 ? l.createElement(r.ZP, { onClick: Xe, style: Qe.rejoinText, weight: "medium", withInteractiveStyling: !0, withUnderline: !0 }, Fe) : l.createElement(r.ZP, { color: "gray700" }, n)));
                            })(),
                            l.createElement(o.Z, { style: Qe.dividerContainer }, l.createElement(g.Z, null)),
                            ne ? l.createElement(l.Fragment, null, l.createElement(Ge, e), l.createElement(R.Z, { footer: null, module: ne, noItemsRenderer: () => l.createElement(we, { enrollmentStatus: q, isOwnProfile: et, ratingImpact: re }), renderer: rt, withoutHeadroom: !0 })) : null,
                            lt ? l.createElement(f.Z, { onPress: () => ge(!0), style: [Qe.sectionContainer, Qe.deletedNotes] }, l.createElement(x.default, { style: Qe.deletedIcon }), l.createElement(r.ZP, { style: Qe.ratingsReceived }, V ? l.createElement(y().I18NFormatMessage, { $i18n: "f52f0cbd", num: V }) : l.createElement(y().I18NFormatMessage, { $i18n: "c5260711" }))) : null,
                        );
                    },
                    dt = (e) => {
                        et && K.push("/i/communitynotes/u/me");
                    },
                    ut = ue,
                    mt = "EarnedOutNoAcknowledge" === q?.enrollment_state,
                    pt = () => (ut ? l.createElement(L.Z, { onAliasSelected: dt }) : mt ? l.createElement(D.Z, { history: K }) : ct());
                return l.createElement(
                    z.nO,
                    { namespace: ot },
                    l.createElement(
                        H.Z,
                        null,
                        (() => {
                            const e = { title: st, history: K, rightControl: et && it };
                            return S.ZP.isTwitterApp() ? l.createElement(T.Z, (0, a.Z)({ children: pt(), hideBackButton: !0 }, e)) : l.createElement(v.Z, (0, a.Z)({ TabBar: Y.Z, backLocation: "/i/communitynotes", primaryContent: pt(), sidebarContent: l.createElement(j.Z, null), withTweetButton: !1 }, e));
                        })(),
                        pe ? l.createElement(be, { deletedNotesSlice: W, onClose: () => ge(!1) }) : null,
                        Ee.shouldShow ? l.createElement(M.x, { badgeType: Ee.badgeType, enrollmentState: q?.enrollment_state, isOwnProfile: et, onClose: () => ye(Ve.closed), ratingScores: se, successfulRatingsNeededToEarnIn: q?.successful_rating_needed_to_earn_in, writingScores: ce }) : null,
                        fe && l.createElement($.Y, { closeTopContributorModal: () => he(!1), isOwnProfile: et }),
                        ke
                            ? l.createElement(h.Z, {
                                  confirmButtonLabel: Fe,
                                  headline: je,
                                  onCancel: () => {
                                      Ce(!1);
                                  },
                                  onConfirm: () => {
                                      void 0 !== ee?.id_str && n(Math.floor(Date.now() / 1e3 / 3600 / 24), ee.id_str).catch(b()), Ce(!1), K.push("/i/communitynotes/u/me"), O.Z.flushHTMLCache(), window.location.reload(!0);
                                  },
                                  text: Ye,
                              })
                            : null,
                    ),
                );
            };
            function Ge(e) {
                const { alias: t, userAlias: n, userHasNotes: a } = e;
                return a ? (n === t ? l.createElement(m.Z, { text: ke }) : l.createElement(m.Z, { text: Ce })) : null;
            }
            const Qe = E.default.create((e) => ({
                    atRiskButtonContainer: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space8 },
                    enrollmentStatusInfoContainer: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8 },
                    selfRemoveInfoContainer: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, margin: e.spaces.space12 },
                    statusChangeContainer: { paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space8 },
                    enrollmentStatusText: { flex: 9, flexBasis: "0%" },
                    selfRemoveInfoText: { flex: 9, flexBasis: "0%" },
                    rejoinText: { cursor: "pointer" },
                    awardSection: { display: "flex", flexDirection: "row", marginBottom: e.spaces.space4, alignItems: "center" },
                    badgeContainer: { display: "flex", flexDirection: "column" },
                    container: { marginBottom: e.spaces.space48 },
                    deletedNotes: { flexDirection: "row" },
                    deletedIcon: { color: e.colors.gray700, marginEnd: e.spaces.space4 },
                    feedbackContainer: { paddingHorizontal: "44px" },
                    icon: { color: e.colors.primary, height: e.spaces.space20, width: e.spaces.space20, marginEnd: e.spaces.space8 },
                    genericBirdwatchProfileIcon: { color: e.colors.gray600, backgroundColor: e.colors.gray100, marginStart: e.componentDimensions.gutterHorizontal },
                    profileText: { textTransform: "capitalize", marginTop: e.spaces.space4 },
                    ratingAward: { marginEnd: e.spaces.space8 },
                    ratingNumbers: { flexDirection: "row" },
                    sectionContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space20 },
                    rateNotesThatNeedHelpText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space8 },
                    ratingsReceived: { paddingBottom: e.spaces.space4 },
                    text: { paddingBottom: e.spaces.space8 },
                    birdwatchAliasDisclaimerText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space8 },
                    birdwatchProfileTitle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 },
                    innerIconColor: { color: e.colors.white, height: e.spaces.space12, width: e.spaces.space12 },
                    thumbnailIcon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space8 },
                    dividerContainer: { marginTop: e.spaces.space12 },
                })),
                Je = ie(qe);
        },
        531187: (e, t, n) => {
            n.d(t, { VE: () => a });
            const a = { CurrentlyRatedHelpful: "CurrentlyRatedHelpful", CurrentlyRatedNotHelpful: "CurrentlyRatedNotHelpful", NeedsMoreRatings: "NeedsMoreRatings" };
        },
        847970: (e, t, n) => {
            n.d(t, { B: () => a });
            const a = Object.freeze({ AtRisk: "AtRisk", EarnedIn: "EarnedIn", EarnedOutAcknowledged: "EarnedOutAcknowledged", EarnedOutNoAcknowledge: "EarnedOutNoAcknowledge", NewUser: "NewUser" });
        },
        109411: (e, t, n) => {
            n.d(t, { Z: () => Q });
            n(136728);
            var a = n(202784),
                l = n(325686),
                o = n(731708),
                r = n(96083),
                i = n(844685),
                s = n(154003),
                c = n(420412),
                d = n(247056),
                u = n(392237),
                m = n(111677),
                p = n.n(m),
                g = n(607127),
                f = n(885724),
                h = n(711223),
                E = n(293723),
                b = n(373595),
                y = n(774426),
                w = n(312771),
                _ = n(71620),
                Z = n(668214),
                k = n(245422);
            const C = (0, Z.Z)()
                    .propsFromState(() => ({}))
                    .propsFromActions(() => ({ createCommunityBoostRating: k.oI, createLocalApiErrorHandler: (0, _.zr)("COMMUNITYBOOST_Pivot"), deleteCommunityBoostRating: k.Sl }))
                    .withAnalytics({ page: "birdwatch", section: "community_boost_pivot", component: "values" }),
                x = p().b8719c22,
                S = p().jcdf97d4,
                P = p().d4d7b67e,
                I = p().ed5156fa,
                N = p().d0ed3636,
                T = p().abd845fe,
                v = p().d96cf7ce,
                B = p().j6aa6172,
                H = p().i4112750,
                R = p().i6f6191a,
                A = p().h5575012,
                z = p().f9171e52,
                O = p().j0f9919a,
                D = p().b3af830c,
                L = a.createElement(p().I18NFormatMessage, { $i18n: "a7eaa695" }, a.createElement(o.ZP, { weight: "bold" }, p().g0402b3b)),
                M = a.createElement(p().I18NFormatMessage, { $i18n: "f863bea7" }, a.createElement(o.ZP, { weight: "bold" }, p().ged62c2b)),
                U = a.createElement(p().I18NFormatMessage, { $i18n: "e59bfa27" }, a.createElement(o.ZP, { weight: "bold" }, p().b5d5f7f1)),
                F = p().d0b29562,
                j = { 0: "Other", 1: "Agree", 2: "Learn", 3: "Meaningful", 4: "Unifying", 5: "Heartwarming", 6: "Inspiring", 7: "Funny", 8: "NotApplicable" },
                Y = { Other: "0", Agree: "1", Learn: "2", Meaningful: "3", Unifying: "4", Heartwarming: "5", Inspiring: "6", Funny: "7", NotApplicable: "8" },
                $ = { 0: "Other", 1: "Disagree", 2: "NoSubstance", 3: "NotInteresting", 4: "NotApplicable" },
                V = { Other: "0", Disagree: "1", NoSubstance: "2", NotInteresting: "3", NotApplicable: "4" },
                W = { 0: p().c365dcc6, 1: p().i36ea87a, 2: p().d5befc34, 3: p().je26ecf2, 4: p().e4e331aa, 5: p().ed61ff2a, 6: p().gc3104d8, 7: p().j8c4400e, 8: p().j4738406 },
                q = { 0: p().c365dcc6, 1: p().d93d1666, 2: p().d6130466, 3: p().d96835b6, 4: p().b7ba4150 },
                G = u.default.create((e) => ({ checkbox: { paddingVertical: e.spaces.space8 }, header: { paddingHorizontal: e.spaces.space8 }, infoIcon: { color: e.colors.text }, questionSection: { paddingBottom: e.spaces.space20 }, ratingContainer: { padding: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.green0, flexDirection: "row", justifyContent: "space-between" }, ratingIcon: { color: e.colors.text, paddingEnd: e.spaces.space12 }, thankYouContainer: { marginTop: e.spaces.space8, padding: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.green0 }, thankYouHeader: { flexDirection: "row", justifyContent: "space-between" }, thankYouBlock: { marginHorizontal: e.spaces.space8 }, thankYouBody: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space32 }, thankYouIcon: { color: e.colors.green500, paddingEnd: e.spaces.space12 }, thankYouPoints: { marginBlockStart: 0, marginBlockEnd: 0, paddingInlineStart: 0, listStyle: "initial", paddingHorizontal: e.spaces.space4, margin: e.spaces.space8 }, thankYouPoint: { margin: e.spaces.space4 }, gotLikesLink: { color: e.colors.text, fontWeight: e.fontWeights.bold, fontSize: e.fontSizesPx.subtext1, textDecorationLine: "underline" }, learnMoreLink: { color: e.colors.text, textDecorationLine: "underline" }, ratingRow: { alignItems: "center", flex: 1, flexDirection: "row", width: "100%" }, submitButton: { marginVertical: e.spaces.space16, alignSelf: "center" }, tagContainer: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, gotLikesSection: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space8 }, ratingImpactSection: { padding: e.spaces.space8 }, tooltip: { padding: e.spaces.space32 }, tooltipText: { paddingBottom: e.spaces.space12 } })),
                Q = C((e) => {
                    const { boostPivot: t, createCommunityBoostRating: n, createLocalApiErrorHandler: u, deleteCommunityBoostRating: m, tweetId: _ } = e,
                        [Z, k] = a.useState(!0),
                        [C, Q] = a.useState(!1),
                        [J, K] = a.useState({ like_tags: [], dislike_tags: [] });
                    a.useEffect(() => {
                        if (t) {
                            const e = t?.rating?.data?.like_tags || [],
                                n = t?.rating?.data?.dislike_tags || [],
                                a = e.map((e) => Y[e]),
                                l = n.map((e) => V[e]),
                                o = n.length > 0 || e.length > 0;
                            K({ like_tags: a, dislike_tags: l }), k(!o), Q(o);
                        }
                    }, [t]);
                    const X = (e) => (t) => (n) => {
                            const a = { ...J };
                            n ? -1 === a[e].indexOf(t) && a[e].push(t) : (a[e] = a[e].filter((e) => e !== t));
                            const l = a.dislike_tags.length > 0 || a.like_tags.length > 0;
                            k(!l), K(a);
                        },
                        ee = a.createElement(p().I18NFormatMessage, { $i18n: "ffd3d1a1" }, a.createElement(o.ZP, { link: "https://communitynotes.x.com/guide/en/beyond-notes/got-likes", style: G.learnMoreLink, weight: "bold" }, p().a42fef87)),
                        te = () => {
                            Q(!1);
                        },
                        ne = () => {
                            m(_, t?.boost_id || "").catch(u({}));
                        };
                    return t?.has_pivot && t?.fetchStatus === w.ZP.LOADED
                        ? a.createElement(
                              l.Z,
                              null,
                              a.createElement(i.Z, {
                                  rightControl: a.createElement(s.ZP, {
                                      icon: a.createElement(h.default, null),
                                      onPress: () => {
                                          window.location.href = "https://communitynotes.x.com/guide/en/beyond-notes/got-likes";
                                      },
                                      style: G.infoIcon,
                                      type: "primaryText",
                                  }),
                                  style: G.header,
                                  text: x,
                              }),
                              a.createElement(c.Z, null),
                              a.createElement(o.ZP, { color: "gray700", style: G.gotLikesSection }, z),
                              a.createElement(o.ZP, { color: "gray700", style: G.ratingImpactSection }, O),
                              a.createElement(
                                  l.Z,
                                  { style: G.tagContainer },
                                  C
                                      ? null
                                      : a.createElement(
                                            l.Z,
                                            null,
                                            (() => {
                                                const e = t?.like_tags?.filter((e) => j.hasOwnProperty(e)) || [],
                                                    n = J.like_tags || [];
                                                return a.createElement(
                                                    l.Z,
                                                    { style: G.questionSection },
                                                    a.createElement(
                                                        l.Z,
                                                        { "aria-label": S, role: "group" },
                                                        a.createElement(o.ZP, { weight: "bold" }, S, " "),
                                                        e.map((e) => a.createElement(r.Z, { checked: n.includes(e), key: e, label: a.createElement(o.ZP, null, W[e]), onChange: X("like_tags")(e), style: G.checkbox })),
                                                    ),
                                                );
                                            })(),
                                            (() => {
                                                const e = t?.dislike_tags?.filter((e) => $.hasOwnProperty(e)) || [],
                                                    n = J.dislike_tags || [];
                                                return a.createElement(
                                                    l.Z,
                                                    { style: G.questionSection },
                                                    a.createElement(
                                                        l.Z,
                                                        { "aria-label": P, role: "group" },
                                                        a.createElement(o.ZP, { weight: "bold" }, P, " "),
                                                        e.map((e) => a.createElement(r.Z, { checked: n.includes(e), key: e, label: a.createElement(o.ZP, null, q[e]), onChange: X("dislike_tags")(e), style: G.checkbox })),
                                                    ),
                                                );
                                            })(),
                                            a.createElement(o.ZP, { color: "gray700" }, ee),
                                            a.createElement(
                                                s.ZP,
                                                {
                                                    disabled: Z,
                                                    onClick: () => {
                                                        if (J) {
                                                            const e = { like_tags: J.like_tags.map((e) => j[e]), dislike_tags: J.dislike_tags.map((e) => $[e]) };
                                                            n(_, t?.boost_id || "", e).catch(u({ defaultToast: { text: I, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                                                        }
                                                    },
                                                    style: G.submitButton,
                                                    type: "alwaysBlack",
                                                },
                                                A,
                                            ),
                                        ),
                                  C
                                      ? a.createElement(
                                            l.Z,
                                            null,
                                            a.createElement(
                                                l.Z,
                                                { style: G.ratingContainer },
                                                a.createElement(l.Z, { style: G.ratingRow }, a.createElement(E.default, { style: G.ratingIcon }), a.createElement(o.ZP, null, N)),
                                                a.createElement(d.Z, {
                                                    renderActionMenu: (e) =>
                                                        a.createElement(y.default, {
                                                            actionItems: [
                                                                { confirmation: { label: v, headline: B, text: H, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: v, Icon: g.default, onClick: ne },
                                                                { text: T, Icon: f.default, onClick: te },
                                                            ],
                                                            onClose: e,
                                                        }),
                                                }),
                                            ),
                                            a.createElement(l.Z, { style: G.thankYouContainer }, a.createElement(l.Z, { style: G.thankYouHeader }, a.createElement(l.Z, { style: G.ratingRow }, a.createElement(b.default, { style: G.thankYouIcon }), a.createElement(o.ZP, { weight: "bold" }, R))), a.createElement(l.Z, { style: G.thankYouBody }, a.createElement(o.ZP, null, D), a.createElement(l.Z, { style: G.thankYouBlock }, a.createElement("ul", { style: G.thankYouPoints }, a.createElement("li", { key: "perspective", style: G.thankYouPoint }, a.createElement(o.ZP, null, L)), a.createElement("li", { key: "spotlight", style: G.thankYouPoint }, a.createElement(o.ZP, null, M)), a.createElement("li", { key: "shapes", style: G.thankYouPoint }, a.createElement(o.ZP, null, U)))), a.createElement(o.ZP, { link: "/i/birdwatch/got_likes", style: G.gotLikesLink }, F))),
                                        )
                                      : null,
                              ),
                          )
                        : null;
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(553093),
                l = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: r, requestParams: i, timeline: s } = o || {};
                return s?.id ? (0, l.R)(s.id) : (0, l.Z)({ timelineId: r || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: i || {} });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-cf1ec9f3.ad8cd30a.js.map
