"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-018b0723"],
    {
        333577: (e, t, a) => {
            a.d(t, { Z: () => z });
            var n = a(202784),
                o = a(325686),
                l = a(731708),
                i = a(420412),
                r = a(721266),
                s = a(952428),
                c = a(392237),
                d = a(674132),
                p = a.n(d),
                u = a(473026),
                m = a(630715),
                h = a(553894),
                b = a(443781),
                f = a(301758),
                _ = a(686689),
                w = a(177371),
                g = a(145766),
                E = a(942893),
                y = a(933610),
                Z = a(531187),
                C = a(921068),
                v = a(318124),
                S = a(978163),
                T = a(819119),
                x = a(4076),
                B = a(300698),
                k = a(584364),
                P = a(214748),
                I = a(694461),
                A = a(950492),
                N = a(606121),
                H = a(357972);
            const R = p().bd7eb888,
                O = n.createElement(l.ZP, { color: "primary" }, R),
                L = p().i97b83f6,
                F = p().a038ab9a;
            class D extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._updateShowSignupPrompt = (e) => {
                            this.setState({ showSignupPrompt: e });
                        }),
                        (this._setHasVisitedEntity = (e) => {
                            this.setState({ hasVisitedEntity: e });
                        }),
                        (this._handleFetchTweet = () => {
                            const {
                                    createLocalApiErrorHandler: e,
                                    fetchTweet: t,
                                    note: { tweet: a },
                                } = this.props,
                                n = a?.rest_id;
                            n && t(n).catch(e());
                        }),
                        (this._isOwner = () => {
                            const { note: e, userAlias: t } = this.props,
                                a = e?.birdwatch_profile?.alias;
                            return !(!t || !a) && a === t;
                        }),
                        (this._handleDeleteConfirm = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                deleteNote: t,
                                handleDelete: a,
                                note: { birdwatch_profile: n, rest_id: o },
                            } = this.props;
                            this._scribeOnClick("delete")(),
                                n?.alias &&
                                    this._isOwner() &&
                                    t(o)
                                        .then((e) => {
                                            a?.(o);
                                        })
                                        .catch(e());
                        }),
                        (this._fetchNoteTranslation = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                fetchNoteTranslation: t,
                                note: { rest_id: a },
                            } = this.props;
                            this._scribeOnClick("translate")(), t(a).catch(e());
                        }),
                        (this._onNoteDetailsClick = () => {
                            this.setState({ noteDetailsOpen: !0 }), this._scribeOnClick("note_details")();
                        }),
                        (this._handleEntityClick = () => {
                            this._scribeOnClick("link"), this.setState({ hasVisitedEntity: !0 });
                        }),
                        (this._scribeOnClick = (e) => () => {
                            const {
                                analytics: t,
                                note: { tweet: a },
                            } = this.props;
                            if (a?.rest_id) {
                                const n = E.Z.forTweet(a.rest_id);
                                t.scribe({ element: e, action: "click", data: { targets: [n] } });
                            }
                        }),
                        (this._handleRequestAppeal = () => {
                            const {
                                createAppeal: e,
                                createLocalApiErrorHandler: t,
                                note: { rest_id: a },
                            } = this.props;
                            e(a)
                                .then(() => {
                                    this.setState({ appealsRequestOpen: !1 }), this.setState({ appealRequested: !0 });
                                })
                                .catch(t({ defaultToast: { text: L, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                        }),
                        (this._handleOpenAppealsModal = () => {
                            this.setState({ appealsRequestOpen: !0 });
                        }),
                        (this._handleCloseAppealsModal = () => {
                            this.setState({ appealsRequestOpen: !1 });
                        }),
                        (this._shouldShowFastBadge = (e) => {
                            const {
                                note: { is_media_note: t, is_url_note: a, max_match_post_id_from_crh: n, rating_status: o, time_to_crh_from_note: l, time_to_crh_from_post: i },
                            } = this.props;
                            if (o !== Z.VE.CurrentlyRatedHelpful) return !1;
                            const { featureSwitches: r } = this.context,
                                s = r.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_note_cutoff"),
                                c = r.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_post_cutoff");
                            if (!r.isTrue("responsive_web_birdwatch_fast_notes_badge_enabled") || !l || !i) return !1;
                            return c > i ? (!a && !t) || (n || "") > (e || "") : s > l;
                        }),
                        (this._isShownOnTwitter = () => {
                            const {
                                note: { data_v1: e, rating_status: t },
                            } = this.props;
                            return t === Z.VE.CurrentlyRatedHelpful && e?.classification === y.pq;
                        }),
                        (this._renderTweet = (e, t, a, o) => (t && void 0 === e ? n.createElement(w.Z, { inline: !0 }) : t && a ? n.createElement(f.Z, { isCondensed: !0, shouldShowBorder: !o, tweetId: e, withBirdwatchPivot: !1 }) : null)),
                        (this.state = { noteDetailsOpen: !1, showSignupPrompt: !1, appealsRequestOpen: !1, appealRequested: "AppealReceived" === e.note.appeal_status, hasVisitedEntity: !1 });
                }
                componentDidMount() {
                    const {
                        createLocalApiErrorHandler: e,
                        fetchAuthenticatedUserProfileIfNeeded: t,
                        note: { tweet: a },
                        showTweet: n,
                    } = this.props;
                    t().catch(e()), n && a?.rest_id && this._handleFetchTweet();
                }
                render() {
                    const {
                            note: e,
                            note: { is_media_note: t, is_url_note: a, display_url: c, media_note_matches_v2: d, created_at: p, data_v1: b, helpful_tags: f = [], impression_count: E, not_helpful_tags: y = [], rating: Z, rating_status: N, rest_id: R, tombstone: L, tweetId: D, tweet: z, fully_visible_model: V },
                            tweetIdForRating: U,
                            showPivot: W,
                            showRating: $,
                            showTweet: j,
                            isNotePage: q,
                        } = this.props,
                        { featureSwitches: G } = this.context,
                        Y = z?.media_note_category,
                        Q = !1 === e?.is_in_account_language,
                        K = e?.noteTranslation,
                        J = U || D || z?.rest_id,
                        X = b?.summary?.text || "",
                        ee = b?.summary?.entities || [],
                        te = G.isTrue("responsive_web_birdwatch_media_notes_enabled"),
                        ae = G.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0,
                        ne = G.isTrue("responsive_web_birdwatch_rating_participant_enabled"),
                        oe = G.isTrue("responsive_web_birdwatch_rating_crowd_enabled"),
                        le = G.isTrue("responsive_web_birdwatch_signup_prompt_enabled"),
                        ie = G.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        re = G.isTrue("responsive_web_birdwatch_translation_enabled"),
                        se = (ne || G.isTrue("responsive_web_birdwatch_rating_crowd_enabled")) && !this._isOwner() && $ && !L,
                        ce = re && Q,
                        de = K?.result?.text || "",
                        pe = K?.result?.entities || [],
                        ue = q && void 0 !== Z,
                        me = this.state.showSignupPrompt && q && oe && le && !ie && void 0 !== Z,
                        he = this.state.appealsRequestOpen,
                        { birdwatch_profile: be } = this.props.note,
                        fe = be?.alias || "",
                        _e = be?.notes_count ? (0, h.u)(be.notes_count) : 0,
                        we = be?.ratings_count ? (0, h.v)(be.ratings_count) : 0;
                    return n.createElement(
                        o.Z,
                        { key: R, styles: "noteContainer" },
                        this.state.noteDetailsOpen && n.createElement(S.Z, { alias: fe, closeNoteDetails: () => this.setState({ noteDetailsOpen: !1 }), created_at: p, note: e, ratingImpact: we, rest_id: R, tweet: z, tweetIdForRating: J, writingImpact: _e }),
                        he && n.createElement(C.Z, { handleCloseAppealsModal: this._handleCloseAppealsModal, handleRequestAppeal: this._handleRequestAppeal }),
                        n.createElement(
                            o.Z,
                            { style: [M.noteTweetAndRatingContainer, q && M.noteTweetAndRatingContainerWithBorder] },
                            this._renderTweet(J, j, b, q),
                            q && n.createElement(i.Z, null),
                            n.createElement(
                                o.Z,
                                { style: [j && M.noteWithQT, q && M.noteAndHeaderWithBorder] },
                                n.createElement(o.Z, { style: M.noteHeader }, n.createElement(k.w, { createdAt: p, isShownOnTwitter: this._isShownOnTwitter(), onNoteDetailsClick: this._onNoteDetailsClick, ownNote: this.props.ownNote, ratingStatus: N, shouldShowFastBadge: this._shouldShowFastBadge(J) }), L ? null : n.createElement(o.Z, { style: M.menu }, n.createElement(T.Z, { handleDeleteConfirm: this._handleDeleteConfirm, handleOpenNoteDetails: this._onNoteDetailsClick, isOwner: this._isOwner(), note: e, scribeOnClick: this._scribeOnClick, style: M.menu }))),
                                n.createElement(r.Z, { size: "space4" }),
                                n.createElement(I.t, { fullyVisibleModel: V, impressionCount: E, isShownOnTwitter: this._isShownOnTwitter() }),
                                n.createElement(r.Z, { size: "space4" }),
                                n.createElement(o.Z, { style: M.noteBody }, L ? n.createElement(w.Z, { inline: !0 }, n.createElement(_.Z, { entities: L.entities, rtl: L.rtl, text: L.text })) : n.createElement(n.Fragment, null, n.createElement(P.c, { helpful_tags: f, not_helpful_tags: y, rating_status: N }), (t || a) && te && N && n.createElement(o.Z, { style: M.mediaNoteContainer }, t ? n.createElement(u.default, { style: M.icon }) : n.createElement(m.default, { style: M.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: M.subtext }, (0, H.L)(d, Y, N, z?.rest_id, J, R, a, c, ae)), n.createElement(r.Z, { size: "space8" })), n.createElement(r.Z, { size: "space8" }), n.createElement(o.Z, { style: M.noteTextSection }, n.createElement(_.Z, { entities: ee, onEntityClick: this._handleEntityClick, text: X }), ce ? n.createElement(o.Z, { style: M.translatedNoteTextSection }, n.createElement(g.ZP, { fetchTranslation: this._fetchNoteTranslation, scribeElement: "translate_note", translateButtonText: F, translatedMessage: n.createElement(_.Z, { entities: pe, onEntityClick: this._handleEntityClick, text: de }), translationFetchStatus: K?.fetchStatus, translationSource: "Google", withOriginalText: !1 })) : null))),
                            ),
                            se ? n.createElement(B._, { hasVisitedEntity: this.state.hasVisitedEntity, isNotePage: q, note: e, setHasVisitedEntity: this._setHasVisitedEntity, tweetId: J, updateShowSignupPrompt: this._updateShowSignupPrompt }) : null,
                        ),
                        ue && n.createElement(x.Q, null),
                        me && n.createElement(A.Z, null),
                        n.createElement(v.F, { appealRequested: this.state.appealRequested, canAppeal: !!e.can_appeal, handleOpenAppealsModal: this._handleOpenAppealsModal }),
                        W && J && ne && n.createElement(s.Z, null, n.createElement(l.ZP, { link: `/i/communitynotes/t/${J}`, onPress: this._scribeOnClick("pivot"), style: [M.pivot, j && M.pivotWithQT], withInteractiveStyling: !1 }, O)),
                    );
                }
            }
            (D.defaultProps = { showPivot: !1, showRating: !0, showTweet: !1 }), (D.contextType = b.rC);
            const M = c.default.create((e) => ({ noteHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", wrap: "wrap" }, rightControls: { flexDirection: "row" }, noteBody: { flex: 9, flexBasis: "0%" }, noteInfoMiddots: { alignItems: "center", flexDirection: "row", overflow: "hidden", flexWrap: "wrap" }, noteTweetAndRatingContainer: { margin: e.spaces.space12 }, noteTweetAndRatingContainerWithBorder: { overflow: "hidden", borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, marginTop: 0 }, noteTextSection: { display: "inline", flexDirection: "row", paddingBottom: e.spaces.space4, paddingTop: e.spaces.space4 }, translatedNoteTextSection: { marginTop: e.spaces.space4 }, mediaNoteContainer: { flexDirection: "row" }, noteContainer: { marginStart: e.spaces.space12, marginEnd: e.spaces.space12, backgroundColor: "red" }, noteAndHeaderWithBorder: { marginBottom: e.spaces.space4, padding: e.spaces.space12, paddingTop: e.spaces.space8 }, noteWithQT: { paddingTop: e.spaces.space12, paddingStart: e.spaces.space12 }, pivot: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, pivotWithQT: { paddingHorizontal: e.spaces.space28 }, subtext: { paddingBottom: e.spaces.space4 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, icon: { flexShrink: "0", height: e.spaces.space16, width: e.spaces.space16, color: e.colors.gray700 }, menu: { flexShrink: "0", alignItems: "flex-start" } })),
                z = (0, N.Z)(D);
        },
        452066: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { helpfulRatingTags: "helpfulRatingTags", notHelpfulRatingTags: "notHelpfulRatingTags", ratedHelpfulLabel: "ratedHelpfulLabel", ratingStatus: "ratingStatus" };
        },
        832762: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNotificationSettingsScreen: () => G, default: () => K });
            var n = a(807896),
                o = (a(136728), a(202784)),
                l = a(325686),
                i = a(107267),
                r = a(420412),
                s = a(731708),
                c = a(844685),
                d = a(101890),
                p = a(779610),
                u = a(529356),
                m = a(392237),
                h = a(674132),
                b = a.n(h),
                f = a(323265),
                _ = a(980407),
                w = a(252021),
                g = a(443781),
                E = a(652904),
                y = a(620482),
                Z = a(249777),
                C = a(486361),
                v = a(71620),
                S = a(668214),
                T = a(979090),
                x = a(601576);
            const B = (e, t) => T.JL(e),
                k = (0, S.Z)()
                    .propsFromState(() => ({ notificationSettings: B }))
                    .propsFromActions(() => ({ addToast: x.fz, createLocalApiErrorHandler: (0, v.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: T.lC, editNotificationSettings: T._T, removeUser: T.kX })),
                P = b().c7b59cde,
                I = b().e1288bdc,
                A = b().ca14eab4,
                N = [
                    { label: b().gb2bc3d0, helpText: b().c35ebcd2, value: "All" },
                    { label: b().ba165b3c, helpText: b().g72e2a58, value: "Week" },
                    { label: b().idd249e0, helpText: b().if2e01ee, value: "Month" },
                    { label: b().g1888dc2, value: "Never" },
                ],
                H = b().fdaeaab8,
                R = b().db4e443a,
                O = b().eb75875e,
                L = b().i5f7b6b8,
                F = b().dc11636c,
                D = b().fae059c6,
                M = b().ed37123a,
                z = b().c1a554a2,
                V = b().j59355fe,
                U = b().c23420ec,
                W = b().c76031ee,
                $ = b().be4f9106,
                j = b().fae059c6,
                q = b().cfd2f35e,
                G = (e) => {
                    const { featureSwitches: t } = o.useContext(g.rC),
                        { addToast: a, createLocalApiErrorHandler: m, editNotificationSettings: h, fetchAuthenticatedUserProfile: b, notificationSettings: v, removeUser: S } = e,
                        T = (0, i.useHistory)(),
                        [x, B] = o.useState(v),
                        [k, A] = o.useState(!1),
                        G = () => {
                            A(!0);
                        },
                        K = () => {
                            S()
                                .then(() => {
                                    A(!1), T.push("/"), y.Z.flushHTMLCache(), window.location.reload(!0);
                                })
                                .catch(m());
                        },
                        J = () => {
                            A(!1);
                        },
                        X = o.useCallback(
                            (e, t) => {
                                B(t),
                                    h(t)
                                        .then((e) => {
                                            "Done" === e.authenticated_user_birdwatch_profile_set_notification_settings_put && a({ text: R, withAutoDismiss: !0, withClearButton: !1 });
                                        })
                                        .catch(m({ defaultToast: { text: H, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                            },
                            [a, m, h],
                        );
                    o.useEffect(() => {
                        b().catch(m());
                    }, [m, b]),
                        o.useEffect(() => {
                            B(v);
                        }, [v]);
                    const ee = t.isTrue("responsive_web_birdwatch_self_remove_enabled"),
                        te = o.createElement(l.Z, null, o.createElement(r.Z, null), o.createElement(s.ZP, { style: Y.selfRemoveConfirmationText, weight: "heavy" }, z), o.createElement(r.Z, null), o.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, V), o.createElement(r.Z, null), o.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, U), o.createElement(r.Z, null), o.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, W), o.createElement(r.Z, null), o.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, $), o.createElement(r.Z, null)),
                        ae = () => o.createElement(o.Fragment, null, o.createElement(c.Z, { text: O }), o.createElement(d.Z, { description: Q, label: I, name: "nyh_notification_settings", onChange: X, options: N, value: x }), o.createElement(r.Z, null), o.createElement(c.Z, { text: L }), o.createElement(p.Z, { label: F, link: "/i/flow/language_selector" }), ee ? o.createElement(l.Z, { style: Y.selfRemovePivot }, o.createElement(p.Z, { label: D, onPress: G })) : null, ee && k ? o.createElement(u.Z, { actionLabel: j, graphicDisplayMode: "none", headline: M, onAction: K, onSecondaryAction: J, secondaryActionLabel: q, subtext: te }) : null),
                        ne = () => o.createElement(Z.Z, null);
                    return o.createElement(
                        E.Z,
                        null,
                        (() => {
                            const e = { history: T, title: P };
                            return f.ZP.isTwitterApp() ? o.createElement(_.Z, (0, n.Z)({ children: ae(), hideBackButton: !0 }, e)) : o.createElement(w.Z, (0, n.Z)({ TabBar: C.Z, backLocation: "/i/communitynotes/u/me", primaryContent: ae(), sidebarContent: ne(), withTweetButton: !1 }, e));
                        })(),
                    );
                },
                Y = m.default.create((e) => ({ appBar: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, settingsContainer: { marginHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16 }, subtext: { paddingBottom: e.spaces.space8 }, selfRemovePivot: { cursor: "pointer" }, selfRemoveConfirmationText: { paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 } })),
                Q = o.createElement(l.Z, { style: Y.subtext }, o.createElement(s.ZP, null, A)),
                K = k(G);
        },
        539429: (e, t, a) => {
            a.d(t, { Z: () => ae });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                o = a(325686),
                l = a(731708),
                i = a(688715),
                r = a(96083),
                s = a(449479),
                c = a(67369),
                d = a(154003),
                p = a(138099),
                u = a(247056),
                m = a(392237),
                h = a(674132),
                b = a.n(h),
                f = a(607127),
                _ = a(885724),
                w = a(293723),
                g = a(401388),
                E = a(323265),
                y = a(774426),
                Z = a(805e3),
                C = a(443781),
                v = a(175856),
                S = a(593784),
                T = a(531187),
                x = a(71620),
                B = a(668214),
                k = a(979090);
            const P = (e, t) => k.jm(e),
                I = (0, B.Z)()
                    .propsFromState(() => ({ birdwatchPath: P, shouldShowDataPrivacyPrompt: (e, t) => (0, v.t5)(e, v.hV) }))
                    .propsFromActions(() => ({ addFlag: v.pj, createLocalApiErrorHandler: (0, x.zr)("BIRDWATCH_SCREEN"), createRating: k.wK, deleteRating: k._b, fetchSignupEligiblity: k.$e }))
                    .withAnalytics({ component: "birdwatch_rating" });
            var A = a(629963);
            const N = b().ed5156fa,
                H = [
                    { label: b().b7ec04f4, value: "Helpful" },
                    { label: b().i26425d8, value: "SomewhatHelpful" },
                    { label: b().i62a03aa, value: "NotHelpful" },
                ],
                R = b().c6e683d0,
                O = b().a91bb144,
                L = b().abd845fe,
                F = b().d96cf7ce,
                D = b().j6aa6172,
                M = b().i4112750,
                z = b().b3fcaac6,
                V = b().e8a33850,
                U = b().ca6f04ec,
                W = b().j24c37b2,
                $ = n.createElement(l.ZP, { color: "gray700", link: (0, i.ju)("https://communitynotes.x.com/guide"), withInteractiveStyling: !0, withUnderline: !0 }),
                j = n.createElement(b().I18NFormatMessage, { $i18n: "i8fa1313" }, n.cloneElement($, null, b().af198630)),
                q = n.createElement(l.ZP, { weight: "bold" }),
                G = n.createElement(l.ZP, { weight: "bold" }),
                Y = n.createElement(l.ZP, { weight: "bold" }),
                Q = n.createElement(b().I18NFormatMessage, { $i18n: "had203a9" }, n.cloneElement(q, null, b().d39720d3)),
                K = n.createElement(b().I18NFormatMessage, { $i18n: "h42a21df" }, n.cloneElement(G, null, b().i7d91dc9)),
                J = n.createElement(b().I18NFormatMessage, { $i18n: "c3d1a1b1" }, n.cloneElement(Y, null, b().c75b7fb4)),
                X = { 0: "BirdwatchNyhNotification", 1: "BirdwatchHomeRatedHelpful", 2: "BirdwatchHomeNew", 3: "BirdwatchHomeNeedsYourHelp", 4: "BirdwatchHomeNoteRequest", 5: "BirdwatchOverflowMenu", 6: "BirdwatchForYouTimeline", 7: "BirdwatchFollowingTimeline", 8: "BirdwatchPostDetail", 9: "BirdwatchUnknown", 10: "BirdwatchCorrectionNotification" },
                ee = { "/i/communitynotes/recent_note_request": "BirdwatchHomeNoteRequest", "/i/birdwatch/recent_note_request": "BirdwatchHomeNoteRequest", "/i/communitynotes/new": "BirdwatchHomeNew", "/i/birdwatch/new": "BirdwatchHomeNew", "/i/communitynotes/needs_your_help": "BirdwatchHomeNeedsYourHelp", "/i/birdwatch/needs_your_help": "BirdwatchHomeNeedsYourHelp", "/i/communitynotes": "BirdwatchHomeNeedsYourHelp", "/i/communitynotes/rated_helpful": "BirdwatchHomeRatedHelpful", "/i/birdwatch/rated_helpful": "BirdwatchHomeRatedHelpful" },
                te = m.default.create((e) => ({ button: { alignSelf: "center" }, checkbox: { paddingVertical: e.spaces.space8 }, checkboxContainer: { paddingTop: e.spaces.space12 }, helpfulButtons: { flex: "auto", marginHorizontal: e.spaces.space2 }, helpfulContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, helpfulOptions: { flexDirection: "row" }, helpfulQuestionMobile: { paddingBottom: e.spaces.space8 }, icon: { color: e.colors.text, paddingEnd: e.spaces.space12 }, iconDataPrivacy: { color: e.colors.primary, height: e.spaces.space20, width: e.spaces.space20, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space20 }, anonymousCrowdText: { display: "inline" }, infoItemContainer: { paddingHorizontal: 0 }, root: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, withBorderRadius: { borderRadius: e.borderRadii.medium }, row: { alignItems: "center", flex: 1, flexDirection: "row", width: "100%" }, showSubmittedRating: { backgroundColor: e.colors.green0, flexDirection: "row", justifyContent: "space-between" }, privacyWarning: { paddingVertical: e.spaces.space24 }, matchGroupView: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space12 }, matchGroupText: { paddingVertical: e.spaces.space4 } })),
                ae = I((e) => {
                    const { addFlag: t, analytics: a, birdwatchPath: i, classifiedMisleading: m, createLocalApiErrorHandler: h, createRating: x, deleteRating: B, fetchSignupEligiblity: k, hasVisitedEntity: P, note: I, noteHasSources: $, noteId: q, noteRatingStatus: G, rating: Y, setShowSignupPrompt: ae, shouldShowDataPrivacyPrompt: ne, tweetId: oe, withBorderRadius: le = !0 } = e,
                        { featureSwitches: ie } = n.useContext(C.rC),
                        [re, se] = n.useState(Y),
                        [ce, de] = n.useState((0, g.Z)(Y)),
                        [pe, ue] = n.useState(!1),
                        [me, he] = n.useState("Yes"),
                        [be, fe] = n.useState(!1),
                        [_e, we] = n.useState(),
                        [ge, Ee] = n.useState();
                    n.useEffect(() => {
                        const e = new URLSearchParams(window.location.search),
                            t = new RegExp("^/([a-zA-Z0-9_]+)/status/([a-zA-Z0-9]+)$", "i"),
                            a = i || {},
                            n = window.history.length,
                            o = window.history.state?.state?.previousPath;
                        if (o in ee) Ee(ee[o]);
                        else if (o && o.match(t)) {
                            const e = a[n - 2] || "";
                            Ee(e in ee ? ee?.[e] : "BirdwatchPostDetail");
                        } else if (e.has("source")) {
                            const t = e.get("source") || "";
                            t in X && Ee(X[t]);
                        }
                    }, [Ee, i]);
                    const ye = n.useMemo(() => ne && ie.isTrue("responsive_web_birdwatch_rating_crowd_enabled"), [ie, ne]),
                        Ze = ye ? R : O,
                        Ce = ie.getValue("responsive_web_birdwatch_read_sources_nudge"),
                        ve = { helpful: { label: b().a7338bc2, options: H }, helpful_not_misleading: { label: b().bd0b6422, options: H }, helpful_tags: { label: b().ac7f9746, options: A.m9.map((e) => ({ label: A.z9[e], value: e })) }, not_helpful_tags: { label: b().c7751804, options: A.RY.filter((e) => m || e !== A.ju.NoteNotNeeded).map((e) => ({ label: A.di[e], value: e })) } },
                        Se = (e) => {
                            a.scribeAction(`click_${e}`);
                        },
                        Te = () => {
                            Se("delete"),
                                B(q)
                                    .then((e) => {
                                        if ("Done" === e.birdwatchnote_rating_delete) {
                                            const e = Object.freeze({});
                                            se(e), de(!0);
                                        }
                                    })
                                    .catch(h());
                        },
                        xe = () => {
                            Se("edit"), de(!0);
                        },
                        Be = () => {
                            const e = E.ZP.isTwitterApp() ? (E.ZP.isAndroid() ? "BirdwatchAndroid" : "BirdwatchIos") : "BirdwatchWeb";
                            Se("submit"),
                                x(q, re, oe, ge, e)
                                    .then((e) => {
                                        const { error_code: t } = e;
                                        t && S.h.hasOwnProperty(t)
                                            ? we(S.h[t])
                                            : (de(!1),
                                              k &&
                                                  k()
                                                      .then((e) => {
                                                          ae && ae(!!e.birdwatch_sign_up_eligibility?.eligible);
                                                      })
                                                      .catch(h({})));
                                    })
                                    .catch(h({ defaultToast: { text: N, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                        },
                        ke = () => {
                            const e = [];
                            return e.push({ confirmation: { label: F, headline: D, text: M, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: F, Icon: f.default, onClick: Te }), e.push({ text: L, Icon: _.default, onClick: xe }), e;
                        },
                        Pe = (e) => (t) => () => {
                            se((a) => (a[e] ? (a[e].includes(t) ? { ...a, [e]: a[e].filter((e) => e !== t) } : { ...a, [e]: [...a[e], t] }) : { ...a, [e]: [t] }));
                        },
                        Ie = (e) => {
                            const t = (re && re[e]) || [];
                            return n.createElement(
                                o.Z,
                                { style: te.checkboxContainer },
                                n.createElement(l.ZP, { weight: "bold" }, ve[e].label),
                                ve[e].options.map((a) => !("SomewhatHelpful" === re?.helpfulness_level && a.value === A.ju.TwitterViolationAny) && n.createElement(r.Z, { checked: t.includes(a.value), key: a.value, label: a.label, onChange: Pe(e)(a.value), style: te.checkbox })),
                            );
                        },
                        Ae = (e, t) => {
                            he(t);
                            const a = "note_match",
                                n = I.is_url_note ? "all_url_note_match" : "all_media_note_match",
                                o = "Yes" === t;
                            se((e) => ({ ...e, [a]: { [n]: o } }));
                        },
                        Ne = (e) => () => {
                            var t;
                            (t = e), !$ || null === Ce || "control" === Ce || "Helpful" !== t || P || G !== T.VE.NeedsMoreRatings || ("soft_nudge" === Ce && be) || (be && "require_click" !== Ce) ? (I.is_url_note ? se((t) => ({ ...t, helpfulness_level: e, note_match: { all_url_note_match: !0 } })) : I.is_media_note ? se((t) => ({ ...t, helpfulness_level: e, note_match: { all_media_note_match: !0 } })) : se((t) => ({ ...t, helpfulness_level: e }))) : ue(!0);
                        },
                        He = (0, c.yu)(),
                        Re = n.createElement(
                            o.Z,
                            { style: !He && te.helpfulContainer },
                            n.createElement(l.ZP, { style: He && te.helpfulQuestionMobile, weight: "bold" }, m ? ve.helpful.label : ve.helpful_not_misleading.label),
                            n.createElement(
                                o.Z,
                                { style: te.helpfulOptions },
                                H.map((e) => n.createElement(d.ZP, { key: e.value, onClick: Ne(e.value), size: "small", style: te.helpfulButtons, type: re?.helpfulness_level === e.value ? "brandFilled" : "brandOutlined" }, e.label)),
                            ),
                        ),
                        Oe = ye && n.createElement(l.ZP, { color: "gray700", style: te.privacyWarning }, j),
                        Le = void 0 !== re?.helpfulness_level,
                        Fe = Le && ("Helpful" === re?.helpfulness_level || "SomewhatHelpful" === re?.helpfulness_level),
                        De = Le && ("NotHelpful" === re?.helpfulness_level || "SomewhatHelpful" === re?.helpfulness_level),
                        Me = Le && ((ie.isTrue("responsive_web_birdwatch_url_notes_enabled") && I.is_url_note) || (I.is_media_note && ie.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0));
                    return n.createElement(
                        n.Fragment,
                        null,
                        _e &&
                            n.createElement(S.Z, {
                                errorCode: _e,
                                onClose: () => {
                                    we(!1);
                                },
                            }),
                        pe &&
                            n.createElement(
                                p.Z,
                                { type: "center", withMask: !0 },
                                n.createElement(Z.Z, {
                                    buttonLabel: W,
                                    condensedText: U,
                                    expanded: !0,
                                    heading: "soft_nudge" === Ce ? z : V,
                                    onPress: () => {
                                        ue(!1), fe(!0);
                                    },
                                    subheading: U,
                                }),
                            ),
                        ce
                            ? n.createElement(
                                  o.Z,
                                  { style: [te.root, le && te.withBorderRadius] },
                                  Re,
                                  Fe && Ie("helpful_tags"),
                                  De && Ie("not_helpful_tags"),
                                  Me &&
                                      (() => {
                                          const e = I.media_note_matches_v2?.match_count || 0,
                                              t = I.tweet?.media_note_category,
                                              a = I.display_url || "",
                                              i = { matchesLink: Number(e) > 0 ? n.createElement(l.ZP, { color: "blue500", link: `/i/communitynotes/m/${q}`, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }), displayUrlLink: n.createElement(l.ZP, { color: "blue500", link: I.display_url, withInteractiveStyling: !0, withUnderline: !0 }) },
                                              r = [
                                                  { label: b().b7ec04f4, helpText: I.is_url_note ? b().dc9c823a : "SingleVideo" === t ? b().da0bb868 : "SingleImage" === t ? b().e8694748 : b().b487e12e, value: "Yes" },
                                                  { label: b().i62a03aa, helpText: I.is_url_note ? b().hfdb963e : "SingleVideo" === t ? b().bd6742c2 : "SingleImage" === t ? b().ded3a8a2 : b().c1e42c92, value: "No" },
                                              ],
                                              c = e > 0 ? (I.is_url_note ? n.createElement(b().I18NFormatMessage, { $i18n: "c7f250eb" }, n.cloneElement(i.matchesLink, null, b().d9025c46({ matches: e })), n.cloneElement(i.displayUrlLink, null, b().ce1c95d6({ noteDisplayUrl: a }))) : "SingleVideo" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "bc2fde51" }, n.cloneElement(i.matchesLink, null, b().jd7c58d8({ matches: e }))) : "SingleImage" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "e80d1f67" }, n.cloneElement(i.matchesLink, null, b().ebb0b116({ matches: e }))) : n.createElement(b().I18NFormatMessage, { $i18n: "c692f6b5" }, n.cloneElement(i.matchesLink, null, b().f9005c24({ matches: e })))) : I.is_url_note ? n.createElement(b().I18NFormatMessage, { $i18n: "g46e2949" }, n.cloneElement(i.displayUrlLink, null, b().a4886e54({ noteDisplayUrl: a }))) : "SingleVideo" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "c57661e9" }) : "SingleImage" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "bb286921" }) : n.createElement(b().I18NFormatMessage, { $i18n: "df397f55" });
                                          return n.createElement(o.Z, { style: te.matchGroupView }, n.createElement(o.Z, { style: te.matchGroupText }, n.createElement(l.ZP, { weight: "bold" }, c)), n.createElement(s.Z, { name: "match_all_notes", onChange: Ae, options: r, value: me }));
                                      })(),
                                  !(0, g.Z)(re) &&
                                      n.createElement(
                                          n.Fragment,
                                          null,
                                          Oe,
                                          n.createElement(
                                              d.ZP,
                                              {
                                                  onClick: () => {
                                                      re && Be(), ye && t(v.hV);
                                                  },
                                                  style: te.button,
                                                  type: "brandFilled",
                                              },
                                              Ze,
                                          ),
                                      ),
                              )
                            : n.createElement(
                                  o.Z,
                                  { style: [te.root, te.showSubmittedRating, le && te.withBorderRadius] },
                                  n.createElement(
                                      o.Z,
                                      { style: te.row },
                                      n.createElement(w.default, { style: te.icon }),
                                      n.createElement(
                                          l.ZP,
                                          null,
                                          (() => {
                                              switch (re?.helpfulness_level) {
                                                  case "Helpful":
                                                      return Q;
                                                  case "SomewhatHelpful":
                                                      return K;
                                                  case "NotHelpful":
                                                      return J;
                                                  default:
                                                      return;
                                              }
                                          })(),
                                      ),
                                  ),
                                  n.createElement(u.Z, { renderActionMenu: (e) => n.createElement(y.default, { actionItems: ke(), onClose: e }) }),
                              ),
                    );
                });
        },
        629963: (e, t, a) => {
            a.d(t, { RY: () => N, Wh: () => k, di: () => P, ju: () => i, m9: () => A, mo: () => I, z9: () => B });
            var n = a(674132),
                o = a.n(n);
            const l = Object.freeze({ Informative: "Informative", Clear: "Clear", Empathetic: "Empathetic", GoodSources: "GoodSources", UniqueContext: "UniqueContext", AddressesClaim: "AddressesClaim", ImportantContext: "ImportantContext", UnbiasedLanguage: "UnbiasedLanguage", Other: "Other" }),
                i = Object.freeze({ NoSources: "NoSources", Incorrect: "Incorrect", Outdated: "Outdated", Biased: "Biased", MissingKeyPoints: "MissingKeyPoints", Unclear: "Unclear", Rude: "Rude", OffTopic: "OffTopic", TwitterViolationAny: "TwitterViolationAny", IrrelevantSources: "IrrelevantSources", OpinionSpeculation: "OpinionSpeculation", NoteNotNeeded: "NoteNotNeeded", Other: "Other" }),
                r = o().ef490ae8,
                s = o().bf3dc462,
                c = o().heb35e12,
                d = o().ib117532,
                p = o().c365dcc6,
                u = o().a7bc3192,
                m = o().a26f8dc2,
                h = o().cbdef06c,
                b = o().faa5f9e8,
                f = o().gf3b38f4,
                _ = o().a50327ea,
                w = o().h7c59ea2,
                g = o().d60c0064,
                E = o().e06416ca,
                y = o().cff1aa8c,
                Z = o().c5d55592,
                C = o().f3e6f0aa,
                v = o().hc2b6a7e,
                S = o().bbe8b4ac,
                T = o().dd1f17ea,
                x = o().if966b54,
                B = { [l.GoodSources]: u, [l.Clear]: m, [l.AddressesClaim]: h, [l.ImportantContext]: b, [l.UnbiasedLanguage]: f, [l.Other]: p },
                k = { [l.Informative]: C, [l.Empathetic]: v, [l.GoodSources]: u, [l.UniqueContext]: Z },
                P = { [i.NoSources]: r, [i.IrrelevantSources]: s, [i.Incorrect]: c, [i.OpinionSpeculation]: w, [i.Unclear]: g, [i.MissingKeyPoints]: E, [i.Rude]: y, [i.NoteNotNeeded]: _, [i.TwitterViolationAny]: d, [i.Other]: p },
                I = { [i.Biased]: S, [i.OffTopic]: T, [i.Outdated]: x },
                A = Object.keys(B),
                N = Object.keys(P);
        },
        249777: (e, t, a) => {
            a.d(t, { Z: () => F });
            var n = a(807896),
                o = a(202784),
                l = a(325686),
                i = a(731708),
                r = a(844685),
                s = a(154003),
                c = a(593866),
                d = a(30183),
                p = a(392237),
                u = a(674132),
                m = a.n(u),
                h = a(777131),
                b = a(201889),
                f = a(41065),
                _ = a(788994),
                w = a(443781),
                g = a(240089),
                E = a(71620),
                y = a(668214),
                Z = a(919022);
            const C = (e, t) => Z.ZP.select(e, "1319036828964454402"),
                v = (0, y.Z)()
                    .propsFromState(() => ({ birdwatchAccount: C }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("BIRDWATCH_SCREEN"), fetchUsersIfNeeded: Z.ZP.fetchManyIfNeeded })),
                S = m().c2a6ec00,
                T = m().d2470b62,
                x = m().b171d7c4,
                B = "1319036828964454402",
                k = m().ab23a972,
                P = m().j6e19c58,
                I = m().eac7b6ac,
                A = m().b0381cfc,
                N = m().f0addddc,
                H = m().c68f3bc0,
                R = m().dfb1f498,
                O = o.createElement(i.ZP, null, o.createElement(m().I18NFormatMessage, { $i18n: "b936a16b" }, o.createElement(i.ZP, { color: "link", link: { external: !0, pathname: "/messages/compose?recipient_id=1319036828964454402" } }, m().a584cfa7))),
                L = p.default.create((e) => ({ root: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 }, footer: { borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, borderTopStyle: "solid" }, infoItemContainer: { paddingStart: e.spaces.space16, paddingEnd: 0 }, module: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space16, overflow: "hidden" }, moduleBody: { padding: e.spaces.space16 }, row: { flexDirection: "row" }, text: { paddingEnd: e.spaces.space16 }, transparentModule: { backgroundColor: "transparent", borderWidth: 0 }, valuesGroup: { paddingBottom: e.spaces.space20, paddingTop: e.spaces.space20 }, valueIcon: { color: e.colors.gray700 }, valueItem: { textAlign: "start", flexDirection: "row", marginStart: e.spaces.space16, color: e.colors.gray700 } })),
                F = v((e) => {
                    const { birdwatchAccount: t, createLocalApiErrorHandler: a, fetchUsersIfNeeded: p } = e,
                        { featureSwitches: u } = o.useContext(w.rC),
                        [m, E] = o.useState(t?.following),
                        y = u.isTrue("responsive_web_birdwatch_note_writing_enabled");
                    o.useEffect(() => {
                        p([B])
                            .then((e) => {
                                e && E(e.entities?.users[B].following);
                            })
                            .catch(a());
                    }, [a, p]);
                    const Z = o.createElement(l.Z, { style: L.module }, o.createElement(r.Z, { text: S }), o.createElement(l.Z, { style: [L.moduleBody, L.row] }, o.createElement(i.ZP, { color: "gray700", style: L.text }, T), o.createElement(s.ZP, { "aria-label": x, link: "/i/flow/join-birdwatch", type: "brandFilled" }, x))),
                        C = o.createElement(l.Z, { style: L.module }, o.createElement(r.Z, { text: k }), o.createElement(l.Z, null, o.createElement(g.ZP, { decoration: g.ET, displayMode: "UserCompact", isFakeButtonRoleWithListItem: !0, userId: B, withFollowsYou: !0 }))),
                        v = (e) => o.createElement(l.Z, { style: L.valueItem }, o.createElement(i.ZP, { color: "gray700" }, e)),
                        F = {
                            "aria-label": P,
                            items: [
                                { label: "", decoration: o.createElement(h.default, { style: L.valueIcon }), description: v(I) },
                                { label: "", decoration: o.createElement(b.default, { style: L.valueIcon }), description: v(A) },
                                { label: "", decoration: o.createElement(f.default, { style: L.valueIcon }), description: v(N) },
                            ],
                        },
                        D = o.createElement(l.Z, { style: L.module }, o.createElement(r.Z, { text: P }), o.createElement(l.Z, { style: L.valuesGroup }, o.createElement(c.Z, (0, n.Z)({}, F, { containerStyle: L.infoItemContainer }))), o.createElement(l.Z, { style: L.footer }, o.createElement(d.Z, { link: "https://twitter.github.io/communitynotes/contributing/values/", text: H, withBottomRadius: !0 }))),
                        M = o.createElement(l.Z, { style: L.module }, o.createElement(r.Z, { text: R }), o.createElement(l.Z, { style: L.moduleBody }, O));
                    return o.createElement(l.Z, { role: "complementary", style: L.root }, y ? null : Z, m ? null : C, D, M, o.createElement(l.Z, { style: [L.module, L.transparentModule] }, o.createElement(_.Z, { textColor: "gray700", withOverflow: !0 })));
                });
        },
        983235: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(202784),
                o = a(325686),
                l = a(844685),
                i = a(731708),
                r = a(154003),
                s = a(392237),
                c = a(674132),
                d = a.n(c),
                p = a(143778),
                u = a(323265),
                m = a(301758),
                h = a(26232),
                b = a(312771),
                f = a(24949),
                _ = a(71620),
                w = a(668214),
                g = a(979090),
                E = a(304373),
                y = a(836255);
            const Z = (e, t) => g.tk(e, t.tweetId),
                C = (e, t) => t.tweetId,
                v = (0, w.Z)()
                    .propsFromState(() => ({ sourceLink: Z, sourcesSlice: (0, f.P1)(C, (e) => (0, E.d)(e)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("BIRDWATCH_SCREEN"), fetchTweetSourceLink: g.lw, fetchTweetIfNeeded: y.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "birdwatch", section: "birdwatch_source_link", component: "values" }),
                S = d().e4d93012,
                T = d().e55983c0,
                x = d().h23be93e,
                B = s.default.create((e) => ({ outerView: { marginStart: e.spaces.space12, paddingStart: e.spaces.space4 }, header: { paddingHorizontal: 0, marginBottom: e.spaces.space4, paddingBottom: 0 }, previewContainer: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, sourceLinkHeader: { paddingVertical: e.spaces.space12 }, sourceLinkTweet: { marginTop: e.spaces.space4 } })),
                k = v((e) => {
                    const { createLocalApiErrorHandler: t, fetchTweetIfNeeded: a, fetchTweetSourceLink: s, sourceLink: c, sourcesSlice: f, tweetId: _ } = e,
                        [w, g] = n.useState(!1);
                    n.useEffect(() => {
                        _ && s(_.toString()).catch(t());
                    }, [t, s, _]),
                        n.useEffect(() => {
                            c?.source_preview_tweet_for_notes && a(c?.source_preview_tweet_for_notes);
                        }, [c, a]);
                    const E = +(c?.source_tweet_count_for_notes || 0),
                        y = E > 0,
                        Z = E - 1,
                        C = y && !w,
                        v = E > 1 && !w,
                        k = (e) => {
                            u.ZP.isTwitterApp() && (u.ZP.isAndroid() || (e.preventDefault(), (window.location.pathname = `/i/status/${_}`)));
                        },
                        P = n.createElement(i.ZP, { withInteractiveStyling: !1 }, n.createElement(d().I18NFormatMessage, { $i18n: "e77dac87", remainingCount: Z }));
                    return c?.fetchStatus === b.ZP.LOADED && c?.has_note_request
                        ? n.createElement(
                              o.Z,
                              { style: B.outerView },
                              n.createElement(o.Z, { style: B.sourceLinkHeader }, n.createElement(l.Z, { style: B.header, text: S }), n.createElement(i.ZP, { color: "gray700" }, y ? x : T, " ")),
                              C ? n.createElement(o.Z, { style: B.previewContainer }, n.createElement(m.Z, { isCondensed: !0, onPress: k, shouldShowBorder: !0, tweetId: c?.source_preview_tweet_for_notes, withBirdwatchPivot: !1 })) : null,
                              v
                                  ? n.createElement(
                                        r.ZP,
                                        {
                                            onPress: () => {
                                                g(!0);
                                            },
                                            type: "brandText",
                                        },
                                        P,
                                    )
                                  : null,
                              w && f ? n.createElement(h.Z, { footer: null, module: f, noItemsRenderer: p.Z, renderer: (e) => n.createElement(o.Z, { key: e }, n.createElement(m.Z, { isCondensed: !0, onPress: k, shouldShowBorder: !0, style: B.sourceLinkTweet, tweetId: e, withBirdwatchPivot: !1 })), withoutHeadroom: !0 }) : null,
                          )
                        : null;
                });
        },
        486361: (e, t, a) => {
            a.d(t, { Z: () => I });
            var n = a(202784),
                o = a(674132),
                l = a.n(o),
                i = a(625271),
                r = a(286406),
                s = a(511323),
                c = a(25001),
                d = a(72591),
                p = a(181839),
                u = a(711223),
                m = a(500040),
                h = a(857378),
                b = a(629949),
                f = a(33611),
                _ = a(443781),
                w = a(655352),
                g = a(71620),
                E = a(668214),
                y = a(979090);
            const Z = (0, E.Z)()
                    .propsFromState(() => ({ userAlias: y.OV }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfileIfNeeded: y.eY }))
                    .withAnalytics({ page: "birdwatch", component: "birdwatch_tab_bar" }),
                C = l().ca6ae344,
                v = l().fe27c1e2,
                S = l().ff692d64,
                T = l().cb1adfa0,
                x = l().b721eb38,
                B = "/i/communitynotes",
                k = (e, t) => t.pathname === B || t.pathname === `${B}/new` || t.pathname === `${B}/needs_your_help` || t.pathname === `${B}/rated_helpful` || t.pathname === `${B}/recent_note_request` || t.pathname === `${B}/community_boost`;
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isOwnProfilePageActive = (e, t) => {
                            const { userAlias: a } = this.props;
                            return !!a && t.pathname === `${B}/u/${a}`;
                        }),
                        (this._handleTabClickFactory = (e) => (t) => {
                            const { analytics: a } = this.props;
                            a.scribe({ element: e, action: "navigate" });
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAuthenticatedUserProfileIfNeeded: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { layout: e = "horizontal", wideMode: t = !1, withLabel: a = !1 } = this.props,
                        { featureSwitches: o } = this.context,
                        l = o.isTrue("rweb_sourcemap_migration") && (0, w.ZP)(),
                        _ = l ? b.ZP : f.ZP;
                    return n.createElement(h.ZP, { layout: e, primaryLabel: C, wideMode: t, withLabel: a }, n.createElement(_, { "aria-label": v, isActive: k, label: v, layout: e, onClick: this._handleTabClickFactory("timeline_home"), path: B, renderIcon: (0, h.iI)(i.default, r.default, l), withLabel: a }), o.isTrue("responsive_web_birdwatch_note_writing_enabled") ? n.createElement(_, { "aria-label": S, isActive: this._isOwnProfilePageActive, label: S, layout: e, onClick: this._handleTabClickFactory("user_notes"), path: `${B}/u/me`, renderIcon: (0, h.iI)(s.default, c.default, l), withLabel: a }) : null, n.createElement(_, { "aria-label": T, label: T, layout: e, onClick: this._handleTabClickFactory("download_data"), path: `${B}/download-data`, renderIcon: (0, h.iI)(d.default, p.default, l), withLabel: a }), n.createElement(_, { "aria-label": x, label: x, layout: e, onClick: this._handleTabClickFactory("about"), path: `${B}/about`, renderIcon: (0, h.iI)(u.default, m.default, l), withLabel: a }));
                }
            }
            P.contextType = _.rC;
            const I = Z(P);
        },
        304093: (e, t, a) => {
            a.d(t, { Y: () => A });
            var n = a(202784),
                o = a(325686),
                l = a(688715),
                i = a(992942),
                r = a(370006),
                s = a(138099),
                c = a(786998),
                d = a(731708),
                p = a(593866),
                u = a(392237),
                m = a(674132),
                h = a.n(m),
                b = a(97369),
                f = a(831489),
                _ = a(262754);
            const w = a.p + "award.eb47bafa.png",
                g = h().id568acc,
                E = h().c20a24cc,
                y = h().d01b8fc8,
                Z = h().jbe2ad46,
                C = h().d2dc3d4c,
                v = h().i859a9d4,
                S = { external: !0, pathname: (0, l.ju)("https://communitynotes.x.com/guide/en/contributing/top-contributors") },
                T = h().heb73816,
                x = h().b760d51a,
                B = h().ief63e50,
                k = h().jd6b88ca,
                P = h().c39bdf5a,
                I = () => n.createElement(i.Z, { source: w, style: N.image }),
                A = ({ closeTopContributorModal: e, isOwnProfile: t }) => n.createElement(s.Z, { allowBackNavigation: !0, onMaskClick: e, type: "full", withMask: !0 }, n.createElement(c.Z, { leftControl: n.createElement(r.Z, { backButtonType: "close", onClick: e }) }), n.createElement(I, null), n.createElement(o.Z, { style: N.contentContainer }, n.createElement(o.Z, { style: N.headerContainer }, t && n.createElement(d.ZP, { size: "title2", weight: "heavy" }, E), n.createElement(d.ZP, { size: "title2", style: N.header, weight: "heavy" }, t ? y : g), n.createElement(d.ZP, { color: "gray700" }, Z)), n.createElement(p.Z, { items: H }), n.createElement(o.Z, { style: N.learnMoreContainer }, n.createElement(d.ZP, { link: S }, v)))),
                N = u.default.create((e) => ({ headerContainer: { paddingStart: e.spaces.space32, paddingEnd: e.spaces.space32, paddingBottom: e.spaces.space16 }, header: { marginBottom: e.spaces.space16 }, contentContainer: { padding: e.spaces.space32, paddingBottom: e.spaces.space48 }, learnMoreContainer: { paddingTop: e.spaces.space16, paddingStart: e.spaces.space32 }, icon: { height: e.spaces.space16, flexShrink: 0, paddingBottom: e.spaces.space2, paddingEnd: e.spaces.space8, paddingTop: e.spaces.space2, width: e.spaces.space16 }, image: { height: "150px", width: "150px", alignSelf: "center" } })),
                H = [
                    { label: k, description: P, decoration: n.createElement(b.default, { style: N.icon }) },
                    { label: C, description: T, decoration: n.createElement(f.default, { style: N.icon }) },
                    { label: x, description: B, decoration: n.createElement(_.default, { style: N.icon }) },
                ];
        },
        283369: (e, t, a) => {
            a.d(t, { Uu: () => K, UB: () => G, wy: () => Y, tF: () => q, Bk: () => J });
            var n = a(807896),
                o = a(202784),
                l = a(325686),
                i = a(731708),
                r = a(593866),
                s = a(154003),
                c = a(674132),
                d = a.n(c),
                p = a(121791),
                u = a(126089),
                m = a(155576),
                h = a(736430),
                b = a(75090);
            const f = a(392237).default.create((e) => ({ infoGroupWithTitleAndCTAContainer: { gap: e.spaces.space12, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space32 }, infoGroupContainer: { paddingHorizontal: 0 }, lockIcon: { width: e.spaces.space12, height: e.spaces.space12 }, infoGroupDescription: { marginTop: e.spaces.space4 }, inlineCalloutNoteStatuses: { paddingHorizontal: e.spaces.space20 }, blueBadge: { backgroundColor: e.colors.blue500 }, grayBadge: { backgroundColor: e.colors.gray700 }, emptyStateContainer: { paddingHorizontal: e.spaces.space72 } })),
                _ = d().g880a78a,
                w = d().g880a78a,
                g = d().f07ed596,
                E = d().af9f2b78,
                y = d().af68afc8,
                Z = d().fb5c5d42,
                C = d().ed0e6b2e,
                v = "/i/birdwatch",
                S = d().h2b5268a,
                T = d().e86c87a0,
                x = d().ad98f836,
                B = d().e2d7c914,
                k = d().a5427624,
                P = d().e227a7fa,
                I = d().eda73c9c,
                A = d().cf30af22,
                N = d().d145b0fa,
                H = d().fb5c5d42,
                R = d().a1e58cdc,
                O = d().i859a9d4,
                L = d().cfa3b664,
                F = d().bed66f92,
                D = d().a3ca686a,
                M = d().j44125ee,
                z = d().da55067c,
                V = () => o.createElement(l.Z, { style: f.infoGroupDescription }, o.createElement(i.ZP, { color: "gray700" }, R), o.createElement(i.ZP, { color: "text", link: "https://twitter.github.io/communitynotes/writing-ability", weight: "bold", withUnderline: !0 }, O)),
                U = () => o.createElement(p.default, { color: "white", style: f.lockIcon }),
                W = {
                    items: [
                        { label: (0, h.Z)({ label: w }), description: g, decoration: o.createElement(m.Z, { content: 1, style: f.blueBadge }) },
                        { label: (0, h.Z)({ label: E }), description: y, decoration: o.createElement(m.Z, { content: 2, style: f.blueBadge }) },
                        { label: (0, h.Z)({ label: Z }), description: o.createElement(V, null), decoration: o.createElement(m.Z, { content: U(), style: f.grayBadge }) },
                    ],
                },
                $ = {
                    items: [
                        { label: (0, h.Z)({ label: B }), description: k, decoration: o.createElement(m.Z, { content: 1, style: f.blueBadge }) },
                        { label: (0, h.Z)({ label: P }), description: I, decoration: o.createElement(m.Z, { content: 2, style: f.blueBadge }) },
                        { label: (0, h.Z)({ label: A }), description: N, decoration: o.createElement(m.Z, { content: 3, style: f.blueBadge }) },
                        { label: (0, h.Z)({ label: H }), description: o.createElement(V, null), decoration: o.createElement(m.Z, { content: U(), style: f.grayBadge }) },
                    ],
                },
                j = ({ buttonType: e = "primaryFilled", ctaButtonLabel: t, ctaLink: a, infoGroupProps: c, subtitle: d, title: p }) => o.createElement(l.Z, { style: f.infoGroupWithTitleAndCTAContainer }, o.createElement(i.ZP, { color: "text", size: "title2", weight: "heavy" }, p), d && o.createElement(i.ZP, { color: "gray700", size: "subtext2" }, d), c && o.createElement(r.Z, (0, n.Z)({ containerStyle: f.infoGroupContainer }, c)), a && o.createElement(l.Z, null, o.createElement(s.ZP, { alignContent: "center", link: a, type: e }, t))),
                q = () => o.createElement(j, { ctaButtonLabel: C, ctaLink: v, infoGroupProps: W, title: _ }),
                G = () => o.createElement(j, { infoGroupProps: $, title: x }),
                Y = () => o.createElement(o.Fragment, null, o.createElement(j, { ctaButtonLabel: T, ctaLink: v, title: S }), o.createElement(l.Z, { style: f.inlineCalloutNoteStatuses }, o.createElement(b.Z, null))),
                Q = (0, u.h)({ decorationStyle: f.blueBadge }),
                K = () => o.createElement(j, { buttonType: "primaryOutlined", ctaButtonLabel: D, ctaLink: "https://twitter.github.io/communitynotes/examples", infoGroupProps: Q, subtitle: F, title: L }),
                J = () => o.createElement(l.Z, { style: f.emptyStateContainer }, o.createElement(j, { subtitle: z, title: M }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-018b0723.33ab47ca.js.map
