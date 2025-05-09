"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-cf1ec9f3"],
    {
        910148: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                l = n(457311),
                r = n(674132),
                o = n.n(r),
                s = n(443781);
            const i = { external: !0, pathname: "https://twitter.github.io/communitynotes/writing-notes" },
                c = o().i859a9d4,
                d = o().f893c3b8,
                u = o().a701795c,
                m = o().db08295e,
                p = o().ha275800,
                g = o().ce0a213a,
                f = () => {
                    const { featureSwitches: e } = a.useContext(s.rC),
                        t = e.isTrue("responsive_web_birdwatch_note_writing_enabled");
                    return a.createElement(l.Z, { buttonLink: t ? i : "/i/flow/join-birdwatch", buttonText: t ? c : d, header: t ? u : m, message: t ? g : p });
                };
        },
        721455: (e, t, n) => {
            n.r(t), n.d(t, { BirdwatchNotesUserScreen: () => Ye, default: () => Je });
            var a = n(807896),
                l = (n(136728), n(202784)),
                r = n(325686),
                o = n(731708),
                s = n(420412),
                i = n(154003),
                c = n(909377),
                d = n(721266),
                u = n(688715),
                m = n(844685),
                p = n(40610),
                g = n(661810),
                f = n(952428),
                h = n(190286),
                E = n(392237),
                _ = n(674132),
                b = n.n(_),
                w = n(698891),
                y = n(47086),
                Z = n(121791),
                C = n(775042),
                k = n(281312),
                x = n(607127),
                S = n(323265),
                I = n(959848),
                P = n(553894),
                T = n(81327),
                v = n(980407),
                N = n(252021),
                B = n(443781),
                R = n(652904),
                H = n(26232),
                A = n(890655),
                z = n(293115),
                O = n(620482),
                U = n(916616),
                D = n(22730),
                M = n(89620),
                F = n(169584),
                j = n(129086),
                L = n(249777),
                V = n(486361),
                $ = n(304093),
                W = n(24949),
                q = n(71620),
                Y = n(668214),
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
                re = (e, t) => G.PL(e),
                oe = (e, t) => G.ap(e, X(0, t)),
                se = (0, Y.Z)()
                    .propsFromState(() => ({ alias: X, notesCount: ne, deletedNotesCount: ee, deletedNotesSlice: (0, W.P1)(X, (e) => (e ? (0, Q.E)(e) : void 0)), enrollmentStatus: re, notesSlice: (0, W.P1)(X, (e) => (e ? (0, J._)(e) : void 0)), userHasNotes: ae, showAliasSelfSelect: le, ratingsCount: te, userAlias: G.OV, isTopWriter: oe, loggedInUser: K.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, q.zr)("BIRDWATCH_SCREEN"), fetchBirdwatchProfile: G.mv, fetchShowAliasSelfSelect: G.aZ, fetchAuthenticatedUserProfileIfNeeded: G.eY, admitUser: G.SZ }));
            var ie = n(457311),
                ce = n(786998),
                de = n(370006),
                ue = n(138099);
            const me = b().ee160790,
                pe = b().efb9a9e0,
                ge = l.createElement(o.ZP, { link: "https://twitter.github.io/communitynotes/writing-notes/#deleting-notes", withInteractiveStyling: !0 }),
                fe = l.createElement(b().I18NFormatMessage, { $i18n: "d458f69d" }, l.cloneElement(ge, null, b().a1529ce7)),
                he = () => l.createElement(ie.Z, { header: pe }),
                Ee = E.default.create((e) => ({ footer: { paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space16 } })),
                _e = (e) => {
                    const { deletedNotesSlice: t, onClose: n } = e,
                        a = l.createElement(r.Z, null, l.createElement(ce.Z, { leftControl: l.createElement(de.Z, { backButtonType: "close", onClick: n }), title: me }), t ? l.createElement(H.Z, { footer: null, module: t, noItemsRenderer: he, renderer: (e) => l.createElement(r.Z, { key: e }, l.createElement(j.Z, { noteId: e, showRating: !1, showTweet: !0 }), l.createElement(s.Z, null)), withoutHeadroom: !0 }) : null, l.createElement(o.ZP, { color: "gray700", style: Ee.footer }, fe));
                    return l.createElement(ue.Z, { allowBackNavigation: !0, children: a, onMaskClick: n, type: "full", withMask: !0 });
                };
            var be = n(283369);
            const we = ({ enrollmentStatus: e, isOwnProfile: t, ratingImpact: n }) => {
                    let a = null;
                    return t ? ("EarnedIn" === e?.enrollment_state ? (a = l.createElement(be.Uu, null)) : "NewUser" === e?.enrollment_state && ((a = l.createElement(be.wy, null)), n < 0 ? (a = l.createElement(be.UB, null)) : 0 === n && (a = l.createElement(be.tF, null)))) : (a = l.createElement(be.Bk, null)), a ? l.createElement(l.Fragment, null, a, l.createElement(g.Z, { spacing: "space2" })) : null;
                },
                ye = b().ff692d64,
                Ze = b().ab28945c,
                Ce = b().jaf0d42c,
                ke = b().fe27c1e2,
                xe = l.createElement(b().I18NFormatMessage, { $i18n: "if0d6dd7" }, l.createElement(o.ZP, { link: "https://twitter.github.io/communitynotes/aliases/" }, b().a490bc51)),
                Se = b().j5f112b4,
                Ie = b().fa9a644a,
                Pe = b().i4014342,
                Te = b().j9897a7c,
                ve = b().ee7b8050,
                Ne = b().fd02e290,
                Be = b().b8cc2e9a,
                Re = b().f6c8613e,
                He = b().c23e67ea,
                Ae = b().ac71a5a0,
                ze = b().h544e3c8,
                Oe = b().d88c63f6,
                Ue = "https://twitter.github.io/communitynotes/examples/",
                De = b().bb081ea2,
                Me = b().i859a9d4,
                Fe = b().bd31adde,
                je = b().a796c19c,
                Le = b().gea6cc1a,
                Ve = b().h837a96c,
                $e = b().a4d4bcb9,
                We = Object.freeze({ closed: { shouldShow: !1 }, openSuccessful: { shouldShow: !0, badgeType: T.n.Ratings }, openHelpful: { shouldShow: !0, badgeType: T.n.Notes } });
            function qe(e) {
                const { screenProps: t, ...n } = e,
                    a = t.userAlias === t.alias,
                    r = "NewUser" === t.enrollmentStatus?.enrollment_state,
                    o = void 0 !== t.notesCount?.awaiting_more_ratings && void 0 !== t.notesCount?.currently_rated_helpful && void 0 !== t.notesCount?.currently_rated_not_helpful;
                return r && a && !o ? null : l.createElement(I.Z, n);
            }
            const Ye = (e) => {
                const { featureSwitches: t } = l.useContext(B.rC),
                    { admitUser: n, alias: E, createLocalApiErrorHandler: _, deletedNotesCount: W, deletedNotesSlice: q, enrollmentStatus: Y, fetchAuthenticatedUserProfileIfNeeded: G, fetchBirdwatchProfile: Q, fetchShowAliasSelfSelect: J, history: K, isTopWriter: X, loggedInUser: ee, notesCount: te, notesSlice: ne, ratingsCount: ae, showAliasSelfSelect: le, userAlias: re } = e,
                    oe = (0, P.v)(ae),
                    se = (0, P.u)(te),
                    ie = { ratingImpact: oe, ratingsHelpful: ae?.successful?.helpful_count, ratingsNotHelpful: ae?.successful?.not_helpful_count, contrastingNotHelpfulRatingsOnHelpfulNotes: ae?.unsuccessful?.helpful_count, contrastingHelpfulRatingsOnNotHelpfulNotes: ae?.unsuccessful?.not_helpful_count, pending: ae?.awaiting_more_ratings, ratingsAfterStatusReached: ae?.rated_after_decision, updatedTime: ae?.last_updated_at },
                    ce = { writingImpact: se, ratingsHelpful: te?.currently_rated_helpful, ratingsNotHelpful: te?.currently_rated_not_helpful, pending: te?.awaiting_more_ratings, updatedTime: te?.last_updated_at },
                    de = void 0 !== ae,
                    [ue, me] = l.useState(le),
                    [pe, ge] = l.useState(!1),
                    [fe, he] = l.useState(!1),
                    [Ee, be] = l.useState(We.closed),
                    [Ce, ke] = l.useState(!1),
                    Ye = () => be(We.openHelpful),
                    Je = () => be(We.openSuccessful),
                    Ke = () => he(!0),
                    Xe = () => ke(!0),
                    et = re === E;
                l.useEffect(() => {
                    J().catch(_());
                }, [_, J]),
                    l.useEffect(() => {
                        E && Q(E).catch(_());
                    }, [_, Q, E]),
                    l.useEffect(() => {
                        G().catch(_());
                    }, [_, G]),
                    l.useEffect(() => {
                        me(le);
                    }, [le]);
                const tt = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                    nt = t.isTrue("responsive_web_birdwatch_top_contributor_enabled"),
                    at = t.isTrue("responsive_web_birdwatch_self_remove_enabled"),
                    lt = W && W > 0 && q,
                    rt = l.useMemo(() => ({ page: "birdwatch", section: tt ? "user_notes_participant" : "user_notes" }), [tt]),
                    ot = (e) => l.createElement(r.Z, { key: e }, l.createElement(j.Z, { noteId: e, showPivot: et, showRating: !1, showTweet: !0 }), l.createElement(s.Z, null)),
                    st = "Removed" === Y?.enrollment_state ? null : l.createElement(i.ZP, { "aria-label": De, hoverLabel: { label: De }, icon: l.createElement(w.default, null), link: "/i/communitynotes/notification_settings", pullRight: !0, type: "primaryText" }),
                    it = et ? ye : Ze,
                    ct = () => {
                        const t = void 0 !== e.notesCount?.awaiting_more_ratings && void 0 !== e.notesCount?.currently_rated_helpful && void 0 !== e.notesCount?.currently_rated_not_helpful,
                            n = et && "NewUser" === Y?.enrollment_state && t;
                        return l.createElement(
                            r.Z,
                            { style: Qe.container },
                            l.createElement(c.Z, { Icon: k.default, color: "neutral", size: "xxxLarge", style: Qe.genericBirdwatchProfileIcon }),
                            l.createElement(m.Z, { style: Qe.profileText, text: (0, A.Q)(E) }),
                            l.createElement(o.ZP, { color: "gray700", style: Qe.birdwatchAliasDisclaimerText }, xe),
                            de && l.createElement(r.Z, { style: Qe.badgeContainer }, l.createElement(l.Fragment, null, l.createElement(I.Z, { badgeScore: oe, badgeType: T.n.Ratings, interactive: !0, onClick: Je }), l.createElement(qe, { badgeScore: se, badgeType: T.n.Notes, interactive: !0, onClick: Ye, screenProps: e }), X && nt && l.createElement(I.Z, { badgeType: T.n.TopContributor, interactive: !0, onClick: Ke }))),
                            n && l.createElement(r.Z, { style: Qe.statusChangeContainer }, l.createElement(p.Z.Custom, { Icon: Z.default, action: { label: Me, link: "https://twitter.github.io/communitynotes/writing-ability/" }, backgroundColor: "blue0", headline: Oe, text: ze, withColoredIcon: !0 })),
                            (() => {
                                const e = "AtRisk" === Y?.enrollment_state && et,
                                    t = l.createElement(r.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(y.default, { style: Qe.icon }), l.createElement(r.Z, { style: Qe.enrollmentStatusText }, l.createElement(o.ZP, { style: Qe.text, weight: "bold" }, Se), l.createElement(o.ZP, { color: "gray700", size: "subtext1" }, Ie))),
                                    n = l.createElement(r.Z, { style: Qe.feedbackContainer }, Y?.top_not_helpful_tags && Y.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(o.ZP, { weight: "bold" }, Pe), l.createElement(o.ZP, { color: "gray700" }, l.createElement(F.Z, { tags: Y.top_not_helpful_tags }))) : null);
                                return e ? l.createElement(r.Z, null, l.createElement(s.Z, null), t, n, l.createElement(r.Z, { style: Qe.atRiskButtonContainer }, l.createElement(i.ZP, { link: Ue, type: "primaryOutlined" }, Te))) : null;
                            })(),
                            (() => {
                                if ("EarnedOutAcknowledged" !== Y?.enrollment_state || !et) return null;
                                const e = l.createElement(r.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(Z.default, { style: Qe.innerIconColor }), size: "medium", style: Qe.thumbnailIcon }), l.createElement(r.Z, { style: Qe.enrollmentStatusText }, l.createElement(o.ZP, { style: Qe.text, weight: "bold" }, ve), l.createElement(o.ZP, { color: "gray700", size: "subtext1" }, Be), l.createElement(d.Z, { size: "space12" }), l.createElement(o.ZP, { link: (0, u.ju)("https://communitynotes.x.com/guide/en/contributing/writing-ability"), size: "subtext1", style: Qe.text, weight: "medium", withUnderline: !0 }, Ne))),
                                    t = l.createElement(r.Z, { style: Qe.feedbackContainer }, Y?.top_not_helpful_tags && Y.top_not_helpful_tags.length > 0 ? l.createElement(l.Fragment, null, l.createElement(o.ZP, { weight: "bold" }, Re), l.createElement(o.ZP, { color: "gray700" }, l.createElement(F.Z, { tags: Y.top_not_helpful_tags }))) : null, l.createElement(o.ZP, { link: Ue, style: Qe.text, weight: "medium", withUnderline: !0 }, Te)),
                                    n = Y?.survey_url ? l.createElement(o.ZP, { color: "gray700", size: "subtext3", withInteractiveStyling: !1 }, l.createElement(b().I18NFormatMessage, { $i18n: "f49cbf83" }, l.createElement(o.ZP, { color: "gray700", link: Y?.survey_url, withUnderline: !0 }, b().c94ad3e8))) : null,
                                    a = Y?.successful_rating_needed_to_earn_in && de ? l.createElement(o.ZP, { color: "gray700", size: "subtext1" }, l.createElement(b().I18NFormatMessage, { $i18n: "a94c6db7", requiredRatingImpact: Y?.successful_rating_needed_to_earn_in, currentRatingImpact: oe })) : null,
                                    i = l.createElement(r.Z, { style: Qe.enrollmentStatusInfoContainer }, l.createElement(c.Z, { Icon: () => l.createElement(C.default, { style: Qe.innerIconColor }), size: "medium", style: Qe.thumbnailIcon }), l.createElement(r.Z, { style: Qe.enrollmentStatusText }, l.createElement(o.ZP, { style: Qe.text, weight: "bold" }, He), a, l.createElement(o.ZP, { link: "/i/birdwatch", style: [Qe.text, Qe.rateNotesThatNeedHelpText], weight: "medium", withUnderline: !0 }, Ae), n));
                                return l.createElement(r.Z, null, l.createElement(s.Z, null), e, t, i);
                            })(),
                            (() => {
                                if (!at || "Removed" !== Y?.enrollment_state || !et) return null;
                                const e = Y?.timestamp_of_last_state_change,
                                    t = e ? Math.ceil(90 - (Date.now() - e) / 1e3 / 3600 / 24) : 0,
                                    n = $e({ numDaysToRejoin: t });
                                return l.createElement(r.Z, { style: Qe.selfRemoveInfoContainer }, l.createElement(r.Z, { style: Qe.selfRemoveInfoText }, l.createElement(o.ZP, { color: "gray700" }, Fe), t <= 0 ? l.createElement(o.ZP, { onClick: Xe, style: Qe.rejoinText, weight: "medium", withInteractiveStyling: !0, withUnderline: !0 }, je) : l.createElement(o.ZP, { color: "gray700" }, n)));
                            })(),
                            l.createElement(r.Z, { style: Qe.dividerContainer }, l.createElement(g.Z, null)),
                            ne ? l.createElement(l.Fragment, null, l.createElement(Ge, e), l.createElement(H.Z, { footer: null, module: ne, noItemsRenderer: () => l.createElement(we, { enrollmentStatus: Y, isOwnProfile: et, ratingImpact: oe }), renderer: ot, withoutHeadroom: !0 })) : null,
                            lt ? l.createElement(f.Z, { onPress: () => ge(!0), style: [Qe.sectionContainer, Qe.deletedNotes] }, l.createElement(x.default, { style: Qe.deletedIcon }), l.createElement(o.ZP, { style: Qe.ratingsReceived }, W ? l.createElement(b().I18NFormatMessage, { $i18n: "f52f0cbd", num: W }) : l.createElement(b().I18NFormatMessage, { $i18n: "c5260711" }))) : null,
                        );
                    },
                    dt = (e) => {
                        et && K.push("/i/communitynotes/u/me");
                    },
                    ut = ue,
                    mt = "EarnedOutNoAcknowledge" === Y?.enrollment_state,
                    pt = () => (ut ? l.createElement(D.Z, { onAliasSelected: dt }) : mt ? l.createElement(U.Z, { history: K }) : ct());
                return l.createElement(
                    z.nO,
                    { namespace: rt },
                    l.createElement(
                        R.Z,
                        null,
                        (() => {
                            const e = { title: it, history: K, rightControl: et && st };
                            return S.ZP.isTwitterApp() ? l.createElement(v.Z, (0, a.Z)({ children: pt(), hideBackButton: !0 }, e)) : l.createElement(N.Z, (0, a.Z)({ TabBar: V.Z, backLocation: "/i/communitynotes", primaryContent: pt(), sidebarContent: l.createElement(L.Z, null), withTweetButton: !1 }, e));
                        })(),
                        pe ? l.createElement(_e, { deletedNotesSlice: q, onClose: () => ge(!1) }) : null,
                        Ee.shouldShow ? l.createElement(M.x, { badgeType: Ee.badgeType, enrollmentState: Y?.enrollment_state, isOwnProfile: et, onClose: () => be(We.closed), ratingScores: ie, successfulRatingsNeededToEarnIn: Y?.successful_rating_needed_to_earn_in, writingScores: ce }) : null,
                        fe && l.createElement($.Y, { closeTopContributorModal: () => he(!1), isOwnProfile: et }),
                        Ce
                            ? l.createElement(h.Z, {
                                  confirmButtonLabel: je,
                                  headline: Le,
                                  onCancel: () => {
                                      ke(!1);
                                  },
                                  onConfirm: () => {
                                      void 0 !== ee?.id_str && n(Math.floor(Date.now() / 1e3 / 3600 / 24), ee.id_str).catch(_()), ke(!1), K.push("/i/communitynotes/u/me"), O.Z.flushHTMLCache(), window.location.reload(!0);
                                  },
                                  text: Ve,
                              })
                            : null,
                    ),
                );
            };
            function Ge(e) {
                const { alias: t, userAlias: n, userHasNotes: a } = e;
                return a ? (n === t ? l.createElement(m.Z, { text: Ce }) : l.createElement(m.Z, { text: ke })) : null;
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
                Je = se(Ye);
        },
        531187: (e, t, n) => {
            n.d(t, { VE: () => a });
            const a = { CurrentlyRatedHelpful: "CurrentlyRatedHelpful", CurrentlyRatedNotHelpful: "CurrentlyRatedNotHelpful", NeedsMoreRatings: "NeedsMoreRatings" };
        },
        336502: (e, t, n) => {
            n.d(t, { B: () => a });
            const a = Object.freeze({ AtRisk: "AtRisk", EarnedIn: "EarnedIn", EarnedOutAcknowledged: "EarnedOutAcknowledged", EarnedOutNoAcknowledge: "EarnedOutNoAcknowledge", NewUser: "NewUser" });
        },
        109411: (e, t, n) => {
            n.d(t, { Z: () => D });
            n(136728);
            var a = n(202784),
                l = n(325686),
                r = n(731708),
                o = n(96083),
                s = n(844685),
                i = n(154003),
                c = n(420412),
                d = n(247056),
                u = n(392237),
                m = n(674132),
                p = n.n(m),
                g = n(607127),
                f = n(711223),
                h = n(293723),
                E = n(774426),
                _ = n(312771),
                b = n(71620),
                w = n(668214),
                y = n(245422);
            const Z = (0, w.Z)()
                    .propsFromState(() => ({}))
                    .propsFromActions(() => ({ createCommunityBoostRating: y.oI, createLocalApiErrorHandler: (0, b.zr)("COMMUNITYBOOST_Pivot"), deleteCommunityBoostRating: y.Sl }))
                    .withAnalytics({ page: "birdwatch", section: "community_boost_pivot", component: "values" }),
                C = p().h53cb7de,
                k = p().dc3bfc82,
                x = p().b4704bf4,
                S = p().ed5156fa,
                I = p().d5f9fb42,
                P = p().d96cf7ce,
                T = p().j6aa6172,
                v = p().i4112750,
                N = p().a91bb144,
                B = { 0: "Other" },
                R = { Other: "0" },
                H = { 0: "Other" },
                A = { Other: "0" },
                z = { 0: p().c365dcc6 },
                O = { 0: p().c365dcc6 },
                U = u.default.create((e) => ({ checkbox: { paddingVertical: e.spaces.space8 }, header: { paddingHorizontal: e.spaces.space8 }, infoIcon: { color: e.colors.text }, questionSection: { paddingBottom: e.spaces.space20 }, ratingContainer: { padding: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.green0, flexDirection: "row", justifyContent: "space-between" }, ratingIcon: { color: e.colors.text, paddingEnd: e.spaces.space12 }, ratingRow: { alignItems: "center", flex: 1, flexDirection: "row", width: "100%" }, submitButton: { marginVertical: e.spaces.space16, alignSelf: "center" }, tagContainer: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, tooltip: { padding: e.spaces.space32 }, tooltipText: { paddingBottom: e.spaces.space12 } })),
                D = Z((e) => {
                    const { boostPivot: t, createCommunityBoostRating: n, createLocalApiErrorHandler: u, deleteCommunityBoostRating: m, tweetId: p } = e,
                        [b, w] = a.useState(!0),
                        [y, Z] = a.useState(!1),
                        [D, M] = a.useState({ like_tags: [], dislike_tags: [] });
                    a.useEffect(() => {
                        if (t) {
                            const e = t?.rating?.data?.like_tags || [],
                                n = t?.rating?.data?.dislike_tags || [],
                                a = e.map((e) => R[e]),
                                l = n.map((e) => A[e]),
                                r = n.length > 0 || e.length > 0;
                            M({ like_tags: a, dislike_tags: l }), w(!r), Z(r);
                        }
                    }, [t]);
                    const F = (e) => (t) => (n) => {
                            const a = { ...D };
                            n ? -1 === a[e].indexOf(t) && a[e].push(t) : (a[e] = a[e].filter((e) => e !== t));
                            const l = a.dislike_tags.length > 0 || a.like_tags.length > 0;
                            w(!l), M(a);
                        },
                        j = () => {
                            m(p, t?.boost_id || "").catch(u({}));
                        };
                    return t?.has_pivot && t?.fetchStatus === _.ZP.LOADED
                        ? a.createElement(
                              l.Z,
                              null,
                              a.createElement(s.Z, {
                                  rightControl: a.createElement(i.ZP, {
                                      icon: a.createElement(f.default, null),
                                      onPress: () => {
                                          window.location.href = "https://communitynotes.x.com/guide/en/about/introduction";
                                      },
                                      style: U.infoIcon,
                                      type: "primaryText",
                                  }),
                                  style: U.header,
                                  text: C,
                              }),
                              a.createElement(c.Z, null),
                              a.createElement(
                                  l.Z,
                                  { style: U.tagContainer },
                                  (() => {
                                      const e = t?.like_tags || [],
                                          n = D.like_tags || [];
                                      return a.createElement(
                                          l.Z,
                                          { style: U.questionSection },
                                          a.createElement(
                                              l.Z,
                                              { "aria-label": k, role: "group" },
                                              a.createElement(r.ZP, { weight: "bold" }, k, " "),
                                              e.map((e) => a.createElement(o.Z, { checked: n.includes(e), key: e, label: a.createElement(r.ZP, null, z[e]), onChange: F("like_tags")(e), style: U.checkbox })),
                                          ),
                                      );
                                  })(),
                                  (() => {
                                      const e = t?.dislike_tags || [],
                                          n = D.dislike_tags || [];
                                      return a.createElement(
                                          l.Z,
                                          { style: U.questionSection },
                                          a.createElement(
                                              l.Z,
                                              { "aria-label": x, role: "group" },
                                              a.createElement(r.ZP, { weight: "bold" }, x, " "),
                                              e.map((e) => a.createElement(o.Z, { checked: n.includes(e), key: e, label: a.createElement(r.ZP, null, O[e]), onChange: F("dislike_tags")(e), style: U.checkbox })),
                                          ),
                                      );
                                  })(),
                                  a.createElement(
                                      i.ZP,
                                      {
                                          disabled: b,
                                          onClick: () => {
                                              if (D) {
                                                  const e = { like_tags: D.like_tags.map((e) => B[e]), dislike_tags: D.dislike_tags.map((e) => H[e]) };
                                                  n(p, t?.boost_id || "", e).catch(u({ defaultToast: { text: S, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                                              }
                                          },
                                          style: U.submitButton,
                                          type: "alwaysBlack",
                                      },
                                      N,
                                  ),
                                  y ? a.createElement(l.Z, { style: U.ratingContainer }, a.createElement(l.Z, { style: U.ratingRow }, a.createElement(h.default, { style: U.ratingIcon }), a.createElement(r.ZP, null, I)), a.createElement(d.Z, { renderActionMenu: (e) => a.createElement(E.default, { actionItems: [{ confirmation: { label: P, headline: T, text: v, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: P, Icon: g.default, onClick: j }], onClose: e }) })) : null,
                              ),
                          )
                        : null;
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(553093),
                l = n(383675);
            const r = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: r } = t,
                    { cacheId: o, requestParams: s, timeline: i } = r || {};
                return i?.id ? (0, l.R)(i.id) : (0, l.Z)({ timelineId: o || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: s || {} });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-cf1ec9f3.11ca2a5a.js.map
