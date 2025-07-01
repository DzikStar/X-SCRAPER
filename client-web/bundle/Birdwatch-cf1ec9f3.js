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
            n.r(t), n.d(t, { BirdwatchNotesUserScreen: () => Qe, default: () => Xe });
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
                C = n(265518),
                S = n(281312),
                I = n(607127),
                x = n(323265),
                P = n(959848),
                T = n(553894),
                N = n(81327),
                B = n(980407),
                v = n(252021),
                H = n(443781),
                R = n(652904),
                A = n(26232),
                z = n(890655),
                O = n(293115),
                D = n(620482),
                L = n(916616),
                M = n(962128),
                U = n(89620),
                F = n(169584),
                j = n(129086),
                Y = n(249777),
                $ = n(486361),
                V = n(304093),
                W = n(24949),
                q = n(71620),
                G = n(668214),
                Q = n(979090),
                J = n(68738),
                K = n(78014),
                X = n(919022);
            const ee = (e, t) => t.match.params.alias,
                te = (e, t) => Q.HO(e, ee(0, t)),
                ne = (e, t) => Q.w6(e, ee(0, t)),
                ae = (e, t) => Q.gH(e, ee(0, t)),
                le = (e, t) => Q.cS(e),
                oe = (e, t) => Q.BG(e),
                re = (e, t) => Q.PL(e),
                ie = (e, t) => Q.ap(e, ee(0, t)),
                se = (e, t) => Q.$z(e, ee(0, t)),
                ce = (0, G.Z)()
                    .propsFromState(() => ({ alias: ee, notesCount: ae, deletedNotesCount: te, deletedNotesSlice: (0, W.P1)(ee, (e) => (e ? (0, J.E)(e) : void 0)), enrollmentStatus: re, notesSlice: (0, W.P1)(ee, (e) => (e ? (0, K._)(e) : void 0)), userHasNotes: le, showAliasSelfSelect: oe, ratingsCount: ne, userAlias: Q.OV, isApiContributor: se, isTopWriter: ie, loggedInUser: X.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, q.zr)("BIRDWATCH_SCREEN"), fetchBirdwatchProfile: Q.mv, fetchShowAliasSelfSelect: Q.aZ, fetchAuthenticatedUserProfileIfNeeded: Q.eY, admitUser: Q.SZ }));
            var de = n(457311),
                ue = n(786998),
                me = n(370006),
                pe = n(138099);
            const ge = y().ee160790,
                fe = y().efb9a9e0,
                he = l.createElement(r.ZP, { link: "https://twitter.github.io/communitynotes/writing-notes/#deleting-notes", withInteractiveStyling: !0 }),
                Ee = l.createElement(y().I18NFormatMessage, { $i18n: "d458f69d" }, l.cloneElement(he, null, y().a1529ce7)),
                be = () => l.createElement(de.Z, { header: fe }),
                ye = E.default.create((e) => ({ footer: { paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space16 } })),
                we = (e) => {
                    const { deletedNotesSlice: t, onClose: n } = e,
                        a = l.createElement(o.Z, null, l.createElement(ue.Z, { leftControl: l.createElement(me.Z, { backButtonType: "close", onClick: n }), title: ge }), t ? l.createElement(A.Z, { footer: null, module: t, noItemsRenderer: be, renderer: (e) => l.createElement(o.Z, { key: e }, l.createElement(j.Z, { noteId: e, showRating: !1, showTweet: !0 }), l.createElement(i.Z, null)), withoutHeadroom: !0 }) : null, l.createElement(r.ZP, { color: "gray700", style: ye.footer }, Ee));
                    return l.createElement(pe.Z, { allowBackNavigation: !0, children: a, onMaskClick: n, type: "full", withMask: !0 });
                };
            var _e = n(283369);
            const Ze = ({ enrollmentStatus: e, isOwnProfile: t, ratingImpact: n }) => {
                    let a = null;
                    if (t) {
                        if ("ApiTestUser" === e?.enrollment_state) return null;
                        "EarnedIn" === e?.enrollment_state || "ApiEarnedIn" === e?.enrollment_state ? (a = l.createElement(_e.Uu, null)) : "NewUser" === e?.enrollment_state && ((a = l.createElement(_e.wy, null)), n < 0 ? (a = l.createElement(_e.UB, null)) : 0 === n && (a = l.createElement(_e.tF, null)));
                    } else a = l.createElement(_e.Bk, null);
                    return a ? l.createElement(l.Fragment, null, a, l.createElement(g.Z, { spacing: "space2" })) : null;
                },
                ke = y().ff692d64,
                Ce = y().ab28945c,
                Se = y().jaf0d42c,
                Ie = y().fe27c1e2,
                xe = l.createElement(y().I18NFormatMessage, { $i18n: "if0d6dd7" }, l.createElement(r.ZP, { link: "https://twitter.github.io/communitynotes/aliases/" }, y().a490bc51)),
                Pe = y().j5f112b4,
                Te = y().fa9a644a,
                Ne = y().i4014342,
                Be = y().j9897a7c,
                ve = y().ee7b8050,
                He = y().fd02e290,
                Re = y().b8cc2e9a,
                Ae = y().f6c8613e,
                ze = y().c23e67ea,
                Oe = y().ac71a5a0,
                De = y().h544e3c8,
                Le = y().d88c63f6,
                Me = "https://twitter.github.io/communitynotes/examples/",
                Ue = y().bb081ea2,
                Fe = y().i859a9d4,
                je = y().bd31adde,
                Ye = y().a796c19c,
                $e = y().gea6cc1a,
                Ve = y().h837a96c,
                We = y().a4d4bcb9,
                qe = Object.freeze({ closed: { shouldShow: !1 }, openSuccessful: { shouldShow: !0, badgeType: N.n.Ratings }, openHelpful: { shouldShow: !0, badgeType: N.n.Notes } });
            function Ge(e) {
                const { screenProps: t, ...n } = e,
                    a = t.userAlias === t.alias,
                    o = "NewUser" === t.enrollmentStatus?.enrollment_state,
                    r = void 0 !== t.notesCount?.awaiting_more_ratings && void 0 !== t.notesCount?.currently_rated_helpful && void 0 !== t.notesCount?.currently_rated_not_helpful;
                return o && a && !r ? null : l.createElement(P.Z, n);
            }
            const Qe = (e) => {
                const { featureSwitches: t } = l.useContext(H.rC),
                    { admitUser: n, alias: E, createLocalApiErrorHandler: b, deletedNotesCount: W, deletedNotesSlice: q, enrollmentStatus: G, fetchAuthenticatedUserProfileIfNeeded: Q, fetchBirdwatchProfile: J, fetchShowAliasSelfSelect: K, history: X, isApiContributor: ee, isTopWriter: te, loggedInUser: ne, notesCount: ae, notesSlice: le, ratingsCount: oe, showAliasSelfSelect: re, userAlias: ie } = e,
                    se = (0, T.v)(oe),
                    ce = (0, T.u)(ae),
                    de = { ratingImpact: se, ratingsHelpful: oe?.successful?.helpful_count, ratingsNotHelpful: oe?.successful?.not_helpful_count, contrastingNotHelpfulRatingsOnHelpfulNotes: oe?.unsuccessful?.helpful_count, contrastingHelpfulRatingsOnNotHelpfulNotes: oe?.unsuccessful?.not_helpful_count, pending: oe?.awaiting_more_ratings, ratingsAfterStatusReached: oe?.rated_after_decision, updatedTime: oe?.last_updated_at },
                    ue = { writingImpact: ce, ratingsHelpful: ae?.currently_rated_helpful, ratingsNotHelpful: ae?.currently_rated_not_helpful, pending: ae?.awaiting_more_ratings, updatedTime: ae?.last_updated_at },
                    me = void 0 !== oe,
                    [pe, ge] = l.useState(re),
                    [fe, he] = l.useState(!1),
                    [Ee, be] = l.useState(!1),
                    [ye, _e] = l.useState(qe.closed),
                    [Se, Ie] = l.useState(!1),
                    Qe = () => _e(qe.openHelpful),
                    Xe = () => _e(qe.openSuccessful),
                    et = () => be(!0),
                    tt = () => Ie(!0),
                    nt = ie === E;
                l.useEffect(() => {
                    K().catch(b());
                }, [b, K]),
                    l.useEffect(() => {
                        E && J(E).catch(b());
                    }, [b, J, E]),
                    l.useEffect(() => {
                        Q().catch(b());
                    }, [b, Q]),
                    l.useEffect(() => {
                        ge(re);
                    }, [re]);
                const at = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                    lt = t.isTrue("responsive_web_birdwatch_top_contributor_enabled"),
                    ot = t.isTrue("responsive_web_birdwatch_self_remove_enabled"),
                    rt = W && W > 0 && q,
                    it = l.useMemo(() => ({ page: "birdwatch", section: at ? "user_notes_participant" : "user_notes" }), [at]),
                    st = (e) => l.createElement(o.Z, { key: e }, l.createElement(j.Z, { noteId: e, showPivot: nt, showRating: !1, showTweet: !0 }), l.createElement(i.Z, null)),
                    ct = "Removed" === G?.enrollment_state ? null : l.createElement(s.ZP, { "aria-label": Ue, hoverLabel: { label: Ue }, icon: l.createElement(w.default, null), link: "/i/communitynotes/notification_settings", pullRight: !0, type: "primaryText" }),
                    dt = nt ? ke : Ce,
                    ut = () => {
                        const t = void 0 !== e.notesCount?.awaiting_more_ratings && void 0 !== e.notesCount?.currently_rated_helpful && void 0 !== e.notesCount?.currently_rated_not_helpful,
                            n = nt && "NewUser" === G?.enrollment_state && t,
                            { profileColor: a, profileIcon: h, profileStyle: b } = ee ? { profileIcon: C.default, profileStyle: Ke.apiBirdwatchProfileIcon } : { profileIcon: S.default, profileStyle: Ke.genericBirdwatchProfileIcon, profileColor: "neutral" };
                        return l.createElement(
                            o.Z,
                            { style: Ke.container },
                            l.createElement(c.Z, { Icon: h, color: a, size: "xxxLarge", style: b }),
                            l.createElement(m.Z, { style: Ke.profileText, text: (0, z.Q)(E) }),
                            l.createElement(r.ZP, { color: "gray700", style: Ke.birdwatchAliasDisclaimerText }, xe),
                            me && l.createElement(o.Z, { style: Ke.badgeContainer }, l.createElement(l.Fragment, null, ee ? l.createElement(P.Z, { badgeType: N.n.ApiContributor }) : l.createElement(P.Z, { badgeScore: se, badgeType: N.n.Ratings, interactive: !0, onClick: Xe }), l.createElement(Ge, { badgeScore: ce, badgeType: N.n.Notes, interactive: !0, onClick: Qe, screenProps: e }), te && lt && l.createElement(P.Z, { badgeType: N.n.TopContributor, interactive: !0, onClick: et }))),
                            n && l.createElement(o.Z, { style: Ke.statusChangeContainer }, l.createElement(p.Z.Custom, { Icon: Z.default, action: { label: Fe, link: "https://twitter.github.io/communitynotes/writing-ability/" }, backgroundColor: "blue0", headline: Le, text: De, withColoredIcon: !0 })),
                            (() => {
                                const e = "AtRisk" === G?.enrollment_state && nt,
                                    t = l.createElement(o.Z, { style: Ke.enrollmentStatusInfoContainer }, l.createElement(_.default, { style: Ke.icon }), l.createElement(o.Z, { style: Ke.enrollmentStatusText }, l.createElement(r.ZP, { style: Ke.text, weight: "bold" }, Pe), l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, Te))),
                                    n = l.createElement(o.Z, { style: Ke.feedbackContainer }, G?.top_not_helpful_tags && G.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(r.ZP, { weight: "bold" }, Ne), l.createElement(r.ZP, { color: "gray700" }, l.createElement(F.Z, { tags: G.top_not_helpful_tags }))) : null);
                                return e ? l.createElement(o.Z, null, l.createElement(i.Z, null), t, n, l.createElement(o.Z, { style: Ke.atRiskButtonContainer }, l.createElement(s.ZP, { link: Me, type: "primaryOutlined" }, Be))) : null;
                            })(),
                            (() => {
                                if ("EarnedOutAcknowledged" !== G?.enrollment_state || !nt) return null;
                                const e = l.createElement(o.Z, { style: Ke.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(Z.default, { style: Ke.innerIconColor }), size: "medium", style: Ke.thumbnailIcon }), l.createElement(o.Z, { style: Ke.enrollmentStatusText }, l.createElement(r.ZP, { style: Ke.text, weight: "bold" }, ve), l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, Re), l.createElement(d.Z, { size: "space12" }), l.createElement(r.ZP, { link: (0, u.ju)("https://communitynotes.x.com/guide/en/contributing/writing-ability"), size: "subtext1", style: Ke.text, weight: "medium", withUnderline: !0 }, He))),
                                    t = l.createElement(o.Z, { style: Ke.feedbackContainer }, G?.top_not_helpful_tags && G.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(r.ZP, { weight: "bold" }, Ae), l.createElement(r.ZP, { color: "gray700" }, l.createElement(F.Z, { tags: G.top_not_helpful_tags }))) : null, l.createElement(r.ZP, { link: Me, style: Ke.text, weight: "medium", withUnderline: !0 }, Be)),
                                    n = G?.survey_url ? l.createElement(r.ZP, { color: "gray700", size: "subtext3", withInteractiveStyling: !1 }, l.createElement(y().I18NFormatMessage, { $i18n: "f49cbf83" }, l.createElement(r.ZP, { color: "gray700", link: G?.survey_url, withUnderline: !0 }, y().c94ad3e8))) : null,
                                    a = G?.successful_rating_needed_to_earn_in && me ? l.createElement(r.ZP, { color: "gray700", size: "subtext1" }, l.createElement(y().I18NFormatMessage, { $i18n: "a94c6db7", requiredRatingImpact: G?.successful_rating_needed_to_earn_in, currentRatingImpact: se })) : null,
                                    s = l.createElement(o.Z, { style: Ke.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(k.default, { style: Ke.innerIconColor }), size: "medium", style: Ke.thumbnailIcon }), l.createElement(o.Z, { style: Ke.enrollmentStatusText }, l.createElement(r.ZP, { style: Ke.text, weight: "bold" }, ze), a, l.createElement(r.ZP, { link: "/i/birdwatch", style: [Ke.text, Ke.rateNotesThatNeedHelpText], weight: "medium", withUnderline: !0 }, Oe), n));
                                return l.createElement(o.Z, null, l.createElement(i.Z, null), e, t, s);
                            })(),
                            (() => {
                                if (!ot || "Removed" !== G?.enrollment_state || !nt) return null;
                                const e = G?.timestamp_of_last_state_change,
                                    t = e ? Math.ceil(90 - (Date.now() - e) / 1e3 / 3600 / 24) : 0,
                                    n = We({ numDaysToRejoin: t });
                                return l.createElement(o.Z, { style: Ke.selfRemoveInfoContainer }, l.createElement(o.Z, { style: Ke.selfRemoveInfoText }, l.createElement(r.ZP, { color: "gray700" }, je), t <= 0 ? l.createElement(r.ZP, { onClick: tt, style: Ke.rejoinText, weight: "medium", withInteractiveStyling: !0, withUnderline: !0 }, Ye) : l.createElement(r.ZP, { color: "gray700" }, n)));
                            })(),
                            l.createElement(o.Z, { style: Ke.dividerContainer }, l.createElement(g.Z, null)),
                            le ? l.createElement(l.Fragment, null, l.createElement(Je, e), l.createElement(A.Z, { footer: null, module: le, noItemsRenderer: () => l.createElement(Ze, { enrollmentStatus: G, isOwnProfile: nt, ratingImpact: se }), renderer: st, withoutHeadroom: !0 })) : null,
                            rt ? l.createElement(f.Z, { onPress: () => he(!0), style: [Ke.sectionContainer, Ke.deletedNotes] }, l.createElement(I.default, { style: Ke.deletedIcon }), l.createElement(r.ZP, { style: Ke.ratingsReceived }, W ? l.createElement(y().I18NFormatMessage, { $i18n: "f52f0cbd", num: W }) : l.createElement(y().I18NFormatMessage, { $i18n: "c5260711" }))) : null,
                        );
                    },
                    mt = (e) => {
                        nt && X.push("/i/communitynotes/u/me");
                    },
                    pt = pe,
                    gt = "EarnedOutNoAcknowledge" === G?.enrollment_state,
                    ft = () => (pt ? l.createElement(M.Z, { onAliasSelected: mt }) : gt ? l.createElement(L.Z, { history: X }) : ut());
                return l.createElement(
                    O.nO,
                    { namespace: it },
                    l.createElement(
                        R.Z,
                        null,
                        (() => {
                            const e = { title: dt, history: X, rightControl: nt && ct };
                            return x.ZP.isTwitterApp() ? l.createElement(B.Z, (0, a.Z)({ children: ft(), hideBackButton: !0 }, e)) : l.createElement(v.Z, (0, a.Z)({ TabBar: $.Z, backLocation: "/i/communitynotes", primaryContent: ft(), sidebarContent: l.createElement(Y.Z, null), withTweetButton: !1 }, e));
                        })(),
                        fe ? l.createElement(we, { deletedNotesSlice: q, onClose: () => he(!1) }) : null,
                        ye.shouldShow ? l.createElement(U.x, { badgeType: ye.badgeType, enrollmentState: G?.enrollment_state, isOwnProfile: nt, onClose: () => _e(qe.closed), ratingScores: de, successfulRatingsNeededToEarnIn: G?.successful_rating_needed_to_earn_in, writingScores: ue }) : null,
                        Ee && l.createElement(V.Y, { closeTopContributorModal: () => be(!1), isOwnProfile: nt }),
                        Se
                            ? l.createElement(h.Z, {
                                  confirmButtonLabel: Ye,
                                  headline: $e,
                                  onCancel: () => {
                                      Ie(!1);
                                  },
                                  onConfirm: () => {
                                      void 0 !== ne?.id_str && n(Math.floor(Date.now() / 1e3 / 3600 / 24), ne.id_str).catch(b()), Ie(!1), X.push("/i/communitynotes/u/me"), D.Z.flushHTMLCache(), window.location.reload(!0);
                                  },
                                  text: Ve,
                              })
                            : null,
                    ),
                );
            };
            function Je(e) {
                const { alias: t, userAlias: n, userHasNotes: a } = e;
                return a ? (n === t ? l.createElement(m.Z, { text: Se }) : l.createElement(m.Z, { text: Ie })) : null;
            }
            const Ke = E.default.create((e) => ({
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
                    apiBirdwatchProfileIcon: { color: e.colors.whiteOnColor, backgroundColor: e.colors.purple700, marginStart: e.componentDimensions.gutterHorizontal },
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
                Xe = ce(Qe);
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
                S = p().b8719c22,
                I = p().jcdf97d4,
                x = p().d4d7b67e,
                P = p().ed5156fa,
                T = p().d0ed3636,
                N = p().abd845fe,
                B = p().d96cf7ce,
                v = p().j6aa6172,
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
                                  text: S,
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
                                                        { "aria-label": I, role: "group" },
                                                        a.createElement(o.ZP, { weight: "bold" }, I, " "),
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
                                                        { "aria-label": x, role: "group" },
                                                        a.createElement(o.ZP, { weight: "bold" }, x, " "),
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
                                                            n(_, t?.boost_id || "", e).catch(u({ defaultToast: { text: P, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
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
                                                a.createElement(l.Z, { style: G.ratingRow }, a.createElement(E.default, { style: G.ratingIcon }), a.createElement(o.ZP, null, T)),
                                                a.createElement(d.Z, {
                                                    renderActionMenu: (e) =>
                                                        a.createElement(y.default, {
                                                            actionItems: [
                                                                { confirmation: { label: B, headline: v, text: H, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: B, Icon: g.default, onClick: ne },
                                                                { text: N, Icon: f.default, onClick: te },
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-cf1ec9f3.f704fb4a.js.map
