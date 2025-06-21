"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-018b0723"],
    {
        333577: (e, t, a) => {
            a.d(t, { Z: () => U });
            var n = a(202784),
                i = a(325686),
                o = a(731708),
                l = a(420412),
                r = a(721266),
                s = a(952428),
                c = a(392237),
                d = a(111677),
                p = a.n(d),
                u = a(473026),
                h = a(630715),
                m = a(553894),
                b = a(443781),
                _ = a(301758),
                f = a(686689),
                w = a(177371),
                g = a(720728),
                E = a(942893),
                y = a(556303),
                Z = a(312771),
                C = a(933610),
                S = a(531187),
                v = a(921068),
                T = a(318124),
                x = a(978163),
                k = a(819119),
                B = a(4076),
                P = a(300698),
                I = a(584364),
                N = a(214748),
                A = a(694461),
                H = a(950492),
                R = a(606121),
                O = a(357972);
            const L = p().bd7eb888,
                F = n.createElement(o.ZP, { color: "primary" }, L),
                D = p().i97b83f6,
                M = p().a038ab9a;
            class z extends n.Component {
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
                                note: { birdwatch_profile: n, rest_id: i },
                            } = this.props;
                            this._scribeOnClick("delete")(),
                                n?.alias &&
                                    this._isOwner() &&
                                    t(i)
                                        .then((e) => {
                                            a?.(i);
                                        })
                                        .catch(e());
                        }),
                        (this._fetchNoteTranslation = () => {
                            const {
                                    createLocalApiErrorHandler: e,
                                    fetchNoteTranslation: t,
                                    fetchStreamedGrokNoteTranslation: a,
                                    note: n,
                                    note: { rest_id: i },
                                } = this.props,
                                { featureSwitches: o } = this.context,
                                l = (0, y.F)(o, "");
                            if ((this._scribeOnClick("translate")(), l)) {
                                const e = n?.streamedNoteTranslation;
                                e || a(i);
                            } else t(i).catch(e());
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
                                .catch(t({ defaultToast: { text: D, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                        }),
                        (this._handleOpenAppealsModal = () => {
                            this.setState({ appealsRequestOpen: !0 });
                        }),
                        (this._handleCloseAppealsModal = () => {
                            this.setState({ appealsRequestOpen: !1 });
                        }),
                        (this._shouldShowFastBadge = (e) => {
                            const {
                                note: { is_media_note: t, is_url_note: a, max_match_post_id_from_crh: n, rating_status: i, time_to_crh_from_note: o, time_to_crh_from_post: l },
                            } = this.props;
                            if (i !== S.VE.CurrentlyRatedHelpful) return !1;
                            const { featureSwitches: r } = this.context,
                                s = r.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_note_cutoff"),
                                c = r.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_post_cutoff");
                            if (!r.isTrue("responsive_web_birdwatch_fast_notes_badge_enabled") || !o || !l) return !1;
                            return c > l ? (!a && !t) || (n || "") > (e || "") : s > o;
                        }),
                        (this._isShownOnTwitter = () => {
                            const {
                                note: { data_v1: e, rating_status: t },
                            } = this.props;
                            return t === S.VE.CurrentlyRatedHelpful && e?.classification === C.pq;
                        }),
                        (this._renderTweet = (e, t, a, i) => (t && void 0 === e ? n.createElement(w.Z, { inline: !0 }) : t && a ? n.createElement(_.Z, { isCondensed: !0, shouldShowBorder: !i, tweetId: e, withBirdwatchPivot: !1 }) : null)),
                        (this._isInlineTranslationEnabled = () => {
                            const { featureSwitches: e } = this.context;
                            return e.isTrue("responsive_web_grok_post_inline_translation_is_enabled");
                        }),
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
                            note: { is_media_note: t, is_url_note: a, display_url: c, media_note_matches_v2: d, created_at: p, data_v1: b, helpful_tags: _ = [], impression_count: E, not_helpful_tags: C = [], rating: S, rating_status: R, rest_id: L, tombstone: D, tweetId: z, tweet: U, fully_visible_model: W },
                            tweetIdForRating: $,
                            showPivot: G,
                            showRating: j,
                            showTweet: q,
                            isNotePage: Y,
                        } = this.props,
                        { featureSwitches: Q } = this.context,
                        K = (0, y.F)(Q, "") ? "button" : void 0,
                        J = U?.media_note_category,
                        X = !1 === e?.is_in_account_language,
                        ee = e?.noteTranslation,
                        te = e?.streamedNoteTranslation,
                        ae = $ || z || U?.rest_id,
                        ne = b?.summary?.text || "",
                        ie = b?.summary?.entities || [],
                        oe = Q.isTrue("responsive_web_birdwatch_media_notes_enabled"),
                        le = Q.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0,
                        re = Q.isTrue("responsive_web_birdwatch_rating_participant_enabled"),
                        se = Q.isTrue("responsive_web_birdwatch_rating_crowd_enabled"),
                        ce = Q.isTrue("responsive_web_birdwatch_signup_prompt_enabled"),
                        de = Q.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        pe = Q.isTrue("responsive_web_birdwatch_translation_enabled"),
                        ue = (re || Q.isTrue("responsive_web_birdwatch_rating_crowd_enabled")) && !this._isOwner() && j && !D,
                        he = pe && X,
                        me = he && this._isInlineTranslationEnabled(),
                        be = K ? te?.result?.text || "" : ee?.result?.text || "",
                        _e = K && te?.fetchStatus === Z.ZP.LOADING,
                        fe = K ? te?.result?.entities || [] : ee?.result?.entities || [],
                        we = Y && void 0 !== S,
                        ge = this.state.showSignupPrompt && Y && se && ce && !de && void 0 !== S,
                        Ee = this.state.appealsRequestOpen,
                        { birdwatch_profile: ye } = this.props.note,
                        Ze = ye?.alias || "",
                        Ce = ye?.notes_count ? (0, m.u)(ye.notes_count) : 0,
                        Se = ye?.ratings_count ? (0, m.v)(ye.ratings_count) : 0;
                    return n.createElement(
                        i.Z,
                        { key: L, styles: "noteContainer" },
                        this.state.noteDetailsOpen && n.createElement(x.Z, { alias: Ze, closeNoteDetails: () => this.setState({ noteDetailsOpen: !1 }), created_at: p, note: e, ratingImpact: Se, rest_id: L, tweet: U, tweetIdForRating: ae, writingImpact: Ce }),
                        Ee && n.createElement(v.Z, { handleCloseAppealsModal: this._handleCloseAppealsModal, handleRequestAppeal: this._handleRequestAppeal }),
                        n.createElement(
                            i.Z,
                            { style: [V.noteTweetAndRatingContainer, Y && V.noteTweetAndRatingContainerWithBorder] },
                            this._renderTweet(ae, q, b, Y),
                            Y && n.createElement(l.Z, null),
                            n.createElement(
                                i.Z,
                                { style: [q && V.noteWithQT, Y && V.noteAndHeaderWithBorder] },
                                n.createElement(i.Z, { style: V.noteHeader }, n.createElement(I.w, { createdAt: p, isShownOnTwitter: this._isShownOnTwitter(), onNoteDetailsClick: this._onNoteDetailsClick, ownNote: this.props.ownNote, ratingStatus: R, shouldShowFastBadge: this._shouldShowFastBadge(ae) }), D ? null : n.createElement(i.Z, { style: V.menu }, n.createElement(k.Z, { handleDeleteConfirm: this._handleDeleteConfirm, handleOpenNoteDetails: this._onNoteDetailsClick, isOwner: this._isOwner(), note: e, scribeOnClick: this._scribeOnClick, style: V.menu }))),
                                n.createElement(r.Z, { size: "space4" }),
                                n.createElement(A.t, { fullyVisibleModel: W, impressionCount: E, isShownOnTwitter: this._isShownOnTwitter() }),
                                n.createElement(r.Z, { size: "space4" }),
                                n.createElement(i.Z, { style: V.noteBody }, D ? n.createElement(w.Z, { inline: !0 }, n.createElement(f.Z, { entities: D.entities, rtl: D.rtl, text: D.text })) : n.createElement(n.Fragment, null, n.createElement(N.c, { helpful_tags: _, not_helpful_tags: C, rating_status: R }), (t || a) && oe && R && n.createElement(i.Z, { style: V.mediaNoteContainer }, t ? n.createElement(u.default, { style: V.icon }) : n.createElement(h.default, { style: V.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(o.ZP, { color: "gray700", size: "subtext2", style: V.subtext }, (0, O.L)(d, J, R, U?.rest_id, ae, L, a, c, le)), n.createElement(r.Z, { size: "space8" })), n.createElement(r.Z, { size: "space8" }), n.createElement(i.Z, { style: V.noteTextSection }, !me && n.createElement(f.Z, { entities: ie, onEntityClick: this._handleEntityClick, text: ne }), he ? n.createElement(i.Z, { style: V.translatedNoteTextSection }, n.createElement(g.Z, { fetchTranslation: this._fetchNoteTranslation, streamedTranslationFetchStatus: te?.fetchStatus, translateButtonText: M, translateTargetType: "community_note", translatedMessage: "" !== be ? n.createElement(f.Z, { animateIn: _e, entities: fe, onEntityClick: this._handleEntityClick, text: be }) : void 0, translationFetchStatus: ee?.fetchStatus, translationSource: K ? "Grok" : "Google", useGrokTranslation: K, withOriginalText: me }, me ? n.createElement(f.Z, { entities: ie, onEntityClick: this._handleEntityClick, text: ne }) : void 0)) : null))),
                            ),
                            ue ? n.createElement(P._, { hasVisitedEntity: this.state.hasVisitedEntity, isNotePage: Y, note: e, setHasVisitedEntity: this._setHasVisitedEntity, tweetId: ae, updateShowSignupPrompt: this._updateShowSignupPrompt }) : null,
                        ),
                        we && n.createElement(B.Q, null),
                        ge && n.createElement(H.Z, null),
                        n.createElement(T.F, { appealRequested: this.state.appealRequested, canAppeal: !!e.can_appeal, handleOpenAppealsModal: this._handleOpenAppealsModal }),
                        G && ae && re && n.createElement(s.Z, null, n.createElement(o.ZP, { link: `/i/communitynotes/t/${ae}`, onPress: this._scribeOnClick("pivot"), style: [V.pivot, q && V.pivotWithQT], withInteractiveStyling: !1 }, F)),
                    );
                }
            }
            (z.defaultProps = { showPivot: !1, showRating: !0, showTweet: !1 }), (z.contextType = b.rC);
            const V = c.default.create((e) => ({ noteHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", wrap: "wrap" }, rightControls: { flexDirection: "row" }, noteBody: { flex: 9, flexBasis: "0%" }, noteInfoMiddots: { alignItems: "center", flexDirection: "row", overflow: "hidden", flexWrap: "wrap" }, noteTweetAndRatingContainer: { margin: e.spaces.space12 }, noteTweetAndRatingContainerWithBorder: { overflow: "hidden", borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, marginTop: 0 }, noteTextSection: { display: "inline", flexDirection: "row", paddingBottom: e.spaces.space4, paddingTop: e.spaces.space4 }, noteTextSectionInlineTranslation: { display: "flex", flexDirection: "column-reverse" }, translatedNoteTextSection: { marginTop: e.spaces.space4 }, mediaNoteContainer: { flexDirection: "row" }, noteContainer: { marginStart: e.spaces.space12, marginEnd: e.spaces.space12, backgroundColor: "red" }, noteAndHeaderWithBorder: { marginBottom: e.spaces.space4, padding: e.spaces.space12, paddingTop: e.spaces.space8 }, noteWithQT: { paddingTop: e.spaces.space12, paddingStart: e.spaces.space12 }, pivot: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, pivotWithQT: { paddingHorizontal: e.spaces.space28 }, subtext: { paddingBottom: e.spaces.space4 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, icon: { flexShrink: "0", height: e.spaces.space16, width: e.spaces.space16, color: e.colors.gray700 }, menu: { flexShrink: "0", alignItems: "flex-start" } })),
                U = (0, R.Z)(z);
        },
        452066: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { helpfulRatingTags: "helpfulRatingTags", notHelpfulRatingTags: "notHelpfulRatingTags", ratedHelpfulLabel: "ratedHelpfulLabel", ratingStatus: "ratingStatus" };
        },
        832762: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNotificationSettingsScreen: () => q, default: () => K });
            var n = a(807896),
                i = (a(136728), a(202784)),
                o = a(325686),
                l = a(107267),
                r = a(420412),
                s = a(731708),
                c = a(844685),
                d = a(101890),
                p = a(779610),
                u = a(529356),
                h = a(392237),
                m = a(111677),
                b = a.n(m),
                _ = a(323265),
                f = a(980407),
                w = a(252021),
                g = a(443781),
                E = a(652904),
                y = a(620482),
                Z = a(249777),
                C = a(486361),
                S = a(71620),
                v = a(668214),
                T = a(979090),
                x = a(601576);
            const k = (e, t) => T.JL(e),
                B = (0, v.Z)()
                    .propsFromState(() => ({ notificationSettings: k }))
                    .propsFromActions(() => ({ addToast: x.fz, createLocalApiErrorHandler: (0, S.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: T.lC, editNotificationSettings: T._T, removeUser: T.kX })),
                P = b().c7b59cde,
                I = b().e1288bdc,
                N = b().ca14eab4,
                A = [
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
                G = b().fae059c6,
                j = b().cfd2f35e,
                q = (e) => {
                    const { featureSwitches: t } = i.useContext(g.rC),
                        { addToast: a, createLocalApiErrorHandler: h, editNotificationSettings: m, fetchAuthenticatedUserProfile: b, notificationSettings: S, removeUser: v } = e,
                        T = (0, l.useHistory)(),
                        [x, k] = i.useState(S),
                        [B, N] = i.useState(!1),
                        q = () => {
                            N(!0);
                        },
                        K = () => {
                            v()
                                .then(() => {
                                    N(!1), T.push("/"), y.Z.flushHTMLCache(), window.location.reload(!0);
                                })
                                .catch(h());
                        },
                        J = () => {
                            N(!1);
                        },
                        X = i.useCallback(
                            (e, t) => {
                                k(t),
                                    m(t)
                                        .then((e) => {
                                            "Done" === e.authenticated_user_birdwatch_profile_set_notification_settings_put && a({ text: R, withAutoDismiss: !0, withClearButton: !1 });
                                        })
                                        .catch(h({ defaultToast: { text: H, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                            },
                            [a, h, m],
                        );
                    i.useEffect(() => {
                        b().catch(h());
                    }, [h, b]),
                        i.useEffect(() => {
                            k(S);
                        }, [S]);
                    const ee = t.isTrue("responsive_web_birdwatch_self_remove_enabled"),
                        te = i.createElement(o.Z, null, i.createElement(r.Z, null), i.createElement(s.ZP, { style: Y.selfRemoveConfirmationText, weight: "heavy" }, z), i.createElement(r.Z, null), i.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, V), i.createElement(r.Z, null), i.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, U), i.createElement(r.Z, null), i.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, W), i.createElement(r.Z, null), i.createElement(s.ZP, { size: "subtext2", style: Y.selfRemoveConfirmationText }, $), i.createElement(r.Z, null)),
                        ae = () => i.createElement(i.Fragment, null, i.createElement(c.Z, { text: O }), i.createElement(d.Z, { description: Q, label: I, name: "nyh_notification_settings", onChange: X, options: A, value: x }), i.createElement(r.Z, null), i.createElement(c.Z, { text: L }), i.createElement(p.Z, { label: F, link: "/i/flow/language_selector" }), ee ? i.createElement(o.Z, { style: Y.selfRemovePivot }, i.createElement(p.Z, { label: D, onPress: q })) : null, ee && B ? i.createElement(u.Z, { actionLabel: G, graphicDisplayMode: "none", headline: M, onAction: K, onSecondaryAction: J, secondaryActionLabel: j, subtext: te }) : null),
                        ne = () => i.createElement(Z.Z, null);
                    return i.createElement(
                        E.Z,
                        null,
                        (() => {
                            const e = { history: T, title: P };
                            return _.ZP.isTwitterApp() ? i.createElement(f.Z, (0, n.Z)({ children: ae(), hideBackButton: !0 }, e)) : i.createElement(w.Z, (0, n.Z)({ TabBar: C.Z, backLocation: "/i/communitynotes/u/me", primaryContent: ae(), sidebarContent: ne(), withTweetButton: !1 }, e));
                        })(),
                    );
                },
                Y = h.default.create((e) => ({ appBar: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, settingsContainer: { marginHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16 }, subtext: { paddingBottom: e.spaces.space8 }, selfRemovePivot: { cursor: "pointer" }, selfRemoveConfirmationText: { paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 } })),
                Q = i.createElement(o.Z, { style: Y.subtext }, i.createElement(s.ZP, null, N)),
                K = B(q);
        },
        539429: (e, t, a) => {
            a.d(t, { Z: () => ae });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(325686),
                o = a(731708),
                l = a(688715),
                r = a(96083),
                s = a(449479),
                c = a(67369),
                d = a(154003),
                p = a(138099),
                u = a(247056),
                h = a(392237),
                m = a(111677),
                b = a.n(m),
                _ = a(607127),
                f = a(885724),
                w = a(293723),
                g = a(401388),
                E = a(323265),
                y = a(774426),
                Z = a(805e3),
                C = a(443781),
                S = a(175856),
                v = a(593784),
                T = a(531187),
                x = a(71620),
                k = a(668214),
                B = a(979090);
            const P = (e, t) => B.jm(e),
                I = (0, k.Z)()
                    .propsFromState(() => ({ birdwatchPath: P, shouldShowDataPrivacyPrompt: (e, t) => (0, S.t5)(e, S.hV) }))
                    .propsFromActions(() => ({ addFlag: S.pj, createLocalApiErrorHandler: (0, x.zr)("BIRDWATCH_SCREEN"), createRating: B.wK, deleteRating: B._b, fetchSignupEligiblity: B.$e }))
                    .withAnalytics({ component: "birdwatch_rating" });
            var N = a(629963);
            const A = b().ed5156fa,
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
                $ = n.createElement(o.ZP, { color: "gray700", link: (0, l.ju)("https://communitynotes.x.com/guide"), withInteractiveStyling: !0, withUnderline: !0 }),
                G = n.createElement(b().I18NFormatMessage, { $i18n: "i8fa1313" }, n.cloneElement($, null, b().af198630)),
                j = n.createElement(o.ZP, { weight: "bold" }),
                q = n.createElement(o.ZP, { weight: "bold" }),
                Y = n.createElement(o.ZP, { weight: "bold" }),
                Q = n.createElement(b().I18NFormatMessage, { $i18n: "had203a9" }, n.cloneElement(j, null, b().d39720d3)),
                K = n.createElement(b().I18NFormatMessage, { $i18n: "h42a21df" }, n.cloneElement(q, null, b().i7d91dc9)),
                J = n.createElement(b().I18NFormatMessage, { $i18n: "c3d1a1b1" }, n.cloneElement(Y, null, b().c75b7fb4)),
                X = { 0: "BirdwatchNyhNotification", 1: "BirdwatchHomeRatedHelpful", 2: "BirdwatchHomeNew", 3: "BirdwatchHomeNeedsYourHelp", 4: "BirdwatchHomeNoteRequest", 5: "BirdwatchOverflowMenu", 6: "BirdwatchForYouTimeline", 7: "BirdwatchFollowingTimeline", 8: "BirdwatchPostDetail", 9: "BirdwatchUnknown", 10: "BirdwatchCorrectionNotification" },
                ee = { "/i/communitynotes/recent_note_request": "BirdwatchHomeNoteRequest", "/i/birdwatch/recent_note_request": "BirdwatchHomeNoteRequest", "/i/communitynotes/new": "BirdwatchHomeNew", "/i/birdwatch/new": "BirdwatchHomeNew", "/i/communitynotes/needs_your_help": "BirdwatchHomeNeedsYourHelp", "/i/birdwatch/needs_your_help": "BirdwatchHomeNeedsYourHelp", "/i/communitynotes": "BirdwatchHomeNeedsYourHelp", "/i/communitynotes/rated_helpful": "BirdwatchHomeRatedHelpful", "/i/birdwatch/rated_helpful": "BirdwatchHomeRatedHelpful" },
                te = h.default.create((e) => ({ button: { alignSelf: "center" }, checkbox: { paddingVertical: e.spaces.space8 }, checkboxContainer: { paddingTop: e.spaces.space12 }, helpfulButtons: { flex: "auto", marginHorizontal: e.spaces.space2 }, helpfulContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, helpfulOptions: { flexDirection: "row" }, helpfulQuestionMobile: { paddingBottom: e.spaces.space8 }, icon: { color: e.colors.text, paddingEnd: e.spaces.space12 }, iconDataPrivacy: { color: e.colors.primary, height: e.spaces.space20, width: e.spaces.space20, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space20 }, anonymousCrowdText: { display: "inline" }, infoItemContainer: { paddingHorizontal: 0 }, root: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, withBorderRadius: { borderRadius: e.borderRadii.medium }, row: { alignItems: "center", flex: 1, flexDirection: "row", width: "100%" }, showSubmittedRating: { backgroundColor: e.colors.green0, flexDirection: "row", justifyContent: "space-between" }, privacyWarning: { paddingVertical: e.spaces.space24 }, matchGroupView: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space12 }, matchGroupText: { paddingVertical: e.spaces.space4 } })),
                ae = I((e) => {
                    const { addFlag: t, analytics: a, birdwatchPath: l, classifiedMisleading: h, createLocalApiErrorHandler: m, createRating: x, deleteRating: k, fetchSignupEligiblity: B, hasVisitedEntity: P, note: I, noteHasSources: $, noteId: j, noteRatingStatus: q, rating: Y, setShowSignupPrompt: ae, shouldShowDataPrivacyPrompt: ne, tweetId: ie, withBorderRadius: oe = !0 } = e,
                        { featureSwitches: le } = n.useContext(C.rC),
                        [re, se] = n.useState(Y),
                        [ce, de] = n.useState((0, g.Z)(Y)),
                        [pe, ue] = n.useState(!1),
                        [he, me] = n.useState("Yes"),
                        [be, _e] = n.useState(!1),
                        [fe, we] = n.useState(),
                        [ge, Ee] = n.useState();
                    n.useEffect(() => {
                        const e = new URLSearchParams(window.location.search),
                            t = new RegExp("^/([a-zA-Z0-9_]+)/status/([a-zA-Z0-9]+)$", "i"),
                            a = l || {},
                            n = window.history.length,
                            i = window.history.state?.state?.previousPath;
                        if (i in ee) Ee(ee[i]);
                        else if (i && i.match(t)) {
                            const e = a[n - 2] || "";
                            Ee(e in ee ? ee?.[e] : "BirdwatchPostDetail");
                        } else if (e.has("source")) {
                            const t = e.get("source") || "";
                            t in X && Ee(X[t]);
                        }
                    }, [Ee, l]);
                    const ye = n.useMemo(() => ne && le.isTrue("responsive_web_birdwatch_rating_crowd_enabled"), [le, ne]),
                        Ze = ye ? R : O,
                        Ce = le.getValue("responsive_web_birdwatch_read_sources_nudge"),
                        Se = { helpful: { label: b().a7338bc2, options: H }, helpful_not_misleading: { label: b().bd0b6422, options: H }, helpful_tags: { label: b().ac7f9746, options: N.m9.map((e) => ({ label: N.z9[e], value: e })) }, not_helpful_tags: { label: b().c7751804, options: N.RY.filter((e) => h || e !== N.ju.NoteNotNeeded).map((e) => ({ label: N.di[e], value: e })) } },
                        ve = (e) => {
                            a.scribeAction(`click_${e}`);
                        },
                        Te = () => {
                            ve("delete"),
                                k(j)
                                    .then((e) => {
                                        if ("Done" === e.birdwatchnote_rating_delete) {
                                            const e = Object.freeze({});
                                            se(e), de(!0);
                                        }
                                    })
                                    .catch(m());
                        },
                        xe = () => {
                            ve("edit"), de(!0);
                        },
                        ke = () => {
                            const e = E.ZP.isTwitterApp() ? (E.ZP.isAndroid() ? "BirdwatchAndroid" : "BirdwatchIos") : "BirdwatchWeb";
                            ve("submit"),
                                x(j, re, ie, ge, e)
                                    .then((e) => {
                                        const { error_code: t } = e;
                                        t && v.h.hasOwnProperty(t)
                                            ? we(v.h[t])
                                            : (de(!1),
                                              B &&
                                                  B()
                                                      .then((e) => {
                                                          ae && ae(!!e.birdwatch_sign_up_eligibility?.eligible);
                                                      })
                                                      .catch(m({})));
                                    })
                                    .catch(m({ defaultToast: { text: A, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }));
                        },
                        Be = () => {
                            const e = [];
                            return e.push({ confirmation: { label: F, headline: D, text: M, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: F, Icon: _.default, onClick: Te }), e.push({ text: L, Icon: f.default, onClick: xe }), e;
                        },
                        Pe = (e) => (t) => () => {
                            se((a) => (a[e] ? (a[e].includes(t) ? { ...a, [e]: a[e].filter((e) => e !== t) } : { ...a, [e]: [...a[e], t] }) : { ...a, [e]: [t] }));
                        },
                        Ie = (e) => {
                            const t = (re && re[e]) || [];
                            return n.createElement(
                                i.Z,
                                { style: te.checkboxContainer },
                                n.createElement(o.ZP, { weight: "bold" }, Se[e].label),
                                Se[e].options.map((a) => !("SomewhatHelpful" === re?.helpfulness_level && a.value === N.ju.TwitterViolationAny) && n.createElement(r.Z, { checked: t.includes(a.value), key: a.value, label: a.label, onChange: Pe(e)(a.value), style: te.checkbox })),
                            );
                        },
                        Ne = (e, t) => {
                            me(t);
                            const a = "note_match",
                                n = I.is_url_note ? "all_url_note_match" : "all_media_note_match",
                                i = "Yes" === t;
                            se((e) => ({ ...e, [a]: { [n]: i } }));
                        },
                        Ae = (e) => () => {
                            var t;
                            (t = e), !$ || null === Ce || "control" === Ce || "Helpful" !== t || P || q !== T.VE.NeedsMoreRatings || ("soft_nudge" === Ce && be) || (be && "require_click" !== Ce) ? (I.is_url_note ? se((t) => ({ ...t, helpfulness_level: e, note_match: { all_url_note_match: !0 } })) : I.is_media_note ? se((t) => ({ ...t, helpfulness_level: e, note_match: { all_media_note_match: !0 } })) : se((t) => ({ ...t, helpfulness_level: e }))) : ue(!0);
                        },
                        He = (0, c.yu)(),
                        Re = n.createElement(
                            i.Z,
                            { style: !He && te.helpfulContainer },
                            n.createElement(o.ZP, { style: He && te.helpfulQuestionMobile, weight: "bold" }, h ? Se.helpful.label : Se.helpful_not_misleading.label),
                            n.createElement(
                                i.Z,
                                { style: te.helpfulOptions },
                                H.map((e) => n.createElement(d.ZP, { key: e.value, onClick: Ae(e.value), size: "small", style: te.helpfulButtons, type: re?.helpfulness_level === e.value ? "brandFilled" : "brandOutlined" }, e.label)),
                            ),
                        ),
                        Oe = ye && n.createElement(o.ZP, { color: "gray700", style: te.privacyWarning }, G),
                        Le = void 0 !== re?.helpfulness_level,
                        Fe = Le && ("Helpful" === re?.helpfulness_level || "SomewhatHelpful" === re?.helpfulness_level),
                        De = Le && ("NotHelpful" === re?.helpfulness_level || "SomewhatHelpful" === re?.helpfulness_level),
                        Me = Le && ((le.isTrue("responsive_web_birdwatch_url_notes_enabled") && I.is_url_note) || (I.is_media_note && le.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0));
                    return n.createElement(
                        n.Fragment,
                        null,
                        fe &&
                            n.createElement(v.Z, {
                                errorCode: fe,
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
                                        ue(!1), _e(!0);
                                    },
                                    subheading: U,
                                }),
                            ),
                        ce
                            ? n.createElement(
                                  i.Z,
                                  { style: [te.root, oe && te.withBorderRadius] },
                                  Re,
                                  Fe && Ie("helpful_tags"),
                                  De && Ie("not_helpful_tags"),
                                  Me &&
                                      (() => {
                                          const e = I.media_note_matches_v2?.match_count || 0,
                                              t = I.tweet?.media_note_category,
                                              a = I.display_url || "",
                                              l = { matchesLink: Number(e) > 0 ? n.createElement(o.ZP, { color: "blue500", link: `/i/communitynotes/m/${j}`, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(o.ZP, { color: "gray700" }), displayUrlLink: n.createElement(o.ZP, { color: "blue500", link: I.display_url, withInteractiveStyling: !0, withUnderline: !0 }) },
                                              r = [
                                                  { label: b().b7ec04f4, helpText: I.is_url_note ? b().dc9c823a : "SingleVideo" === t ? b().da0bb868 : "SingleImage" === t ? b().e8694748 : b().b487e12e, value: "Yes" },
                                                  { label: b().i62a03aa, helpText: I.is_url_note ? b().hfdb963e : "SingleVideo" === t ? b().bd6742c2 : "SingleImage" === t ? b().ded3a8a2 : b().c1e42c92, value: "No" },
                                              ],
                                              c = e > 0 ? (I.is_url_note ? n.createElement(b().I18NFormatMessage, { $i18n: "c7f250eb" }, n.cloneElement(l.matchesLink, null, b().d9025c46({ matches: e })), n.cloneElement(l.displayUrlLink, null, b().ce1c95d6({ noteDisplayUrl: a }))) : "SingleVideo" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "bc2fde51" }, n.cloneElement(l.matchesLink, null, b().jd7c58d8({ matches: e }))) : "SingleImage" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "e80d1f67" }, n.cloneElement(l.matchesLink, null, b().ebb0b116({ matches: e }))) : n.createElement(b().I18NFormatMessage, { $i18n: "c692f6b5" }, n.cloneElement(l.matchesLink, null, b().f9005c24({ matches: e })))) : I.is_url_note ? n.createElement(b().I18NFormatMessage, { $i18n: "g46e2949" }, n.cloneElement(l.displayUrlLink, null, b().a4886e54({ noteDisplayUrl: a }))) : "SingleVideo" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "c57661e9" }) : "SingleImage" === t ? n.createElement(b().I18NFormatMessage, { $i18n: "bb286921" }) : n.createElement(b().I18NFormatMessage, { $i18n: "df397f55" });
                                          return n.createElement(i.Z, { style: te.matchGroupView }, n.createElement(i.Z, { style: te.matchGroupText }, n.createElement(o.ZP, { weight: "bold" }, c)), n.createElement(s.Z, { name: "match_all_notes", onChange: Ne, options: r, value: he }));
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
                                                      re && ke(), ye && t(S.hV);
                                                  },
                                                  style: te.button,
                                                  type: "brandFilled",
                                              },
                                              Ze,
                                          ),
                                      ),
                              )
                            : n.createElement(
                                  i.Z,
                                  { style: [te.root, te.showSubmittedRating, oe && te.withBorderRadius] },
                                  n.createElement(
                                      i.Z,
                                      { style: te.row },
                                      n.createElement(w.default, { style: te.icon }),
                                      n.createElement(
                                          o.ZP,
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
                                  n.createElement(u.Z, { renderActionMenu: (e) => n.createElement(y.default, { actionItems: Be(), onClose: e }) }),
                              ),
                    );
                });
        },
        629963: (e, t, a) => {
            a.d(t, { RY: () => A, Wh: () => B, di: () => P, ju: () => l, m9: () => N, mo: () => I, z9: () => k });
            var n = a(111677),
                i = a.n(n);
            const o = Object.freeze({ Informative: "Informative", Clear: "Clear", Empathetic: "Empathetic", GoodSources: "GoodSources", UniqueContext: "UniqueContext", AddressesClaim: "AddressesClaim", ImportantContext: "ImportantContext", UnbiasedLanguage: "UnbiasedLanguage", Other: "Other" }),
                l = Object.freeze({ NoSources: "NoSources", Incorrect: "Incorrect", Outdated: "Outdated", Biased: "Biased", MissingKeyPoints: "MissingKeyPoints", Unclear: "Unclear", Rude: "Rude", OffTopic: "OffTopic", TwitterViolationAny: "TwitterViolationAny", IrrelevantSources: "IrrelevantSources", OpinionSpeculation: "OpinionSpeculation", NoteNotNeeded: "NoteNotNeeded", Other: "Other" }),
                r = i().ef490ae8,
                s = i().bf3dc462,
                c = i().heb35e12,
                d = i().ib117532,
                p = i().c365dcc6,
                u = i().a7bc3192,
                h = i().a26f8dc2,
                m = i().cbdef06c,
                b = i().faa5f9e8,
                _ = i().gf3b38f4,
                f = i().a50327ea,
                w = i().h7c59ea2,
                g = i().d60c0064,
                E = i().e06416ca,
                y = i().cff1aa8c,
                Z = i().c5d55592,
                C = i().f3e6f0aa,
                S = i().hc2b6a7e,
                v = i().bbe8b4ac,
                T = i().dd1f17ea,
                x = i().if966b54,
                k = { [o.GoodSources]: u, [o.Clear]: h, [o.AddressesClaim]: m, [o.ImportantContext]: b, [o.UnbiasedLanguage]: _, [o.Other]: p },
                B = { [o.Informative]: C, [o.Empathetic]: S, [o.GoodSources]: u, [o.UniqueContext]: Z },
                P = { [l.NoSources]: r, [l.IrrelevantSources]: s, [l.Incorrect]: c, [l.OpinionSpeculation]: w, [l.Unclear]: g, [l.MissingKeyPoints]: E, [l.Rude]: y, [l.NoteNotNeeded]: f, [l.TwitterViolationAny]: d, [l.Other]: p },
                I = { [l.Biased]: v, [l.OffTopic]: T, [l.Outdated]: x },
                N = Object.keys(k),
                A = Object.keys(P);
        },
        249777: (e, t, a) => {
            a.d(t, { Z: () => F });
            var n = a(807896),
                i = a(202784),
                o = a(325686),
                l = a(731708),
                r = a(844685),
                s = a(154003),
                c = a(593866),
                d = a(30183),
                p = a(392237),
                u = a(111677),
                h = a.n(u),
                m = a(777131),
                b = a(201889),
                _ = a(41065),
                f = a(788994),
                w = a(443781),
                g = a(240089),
                E = a(71620),
                y = a(668214),
                Z = a(919022);
            const C = (e, t) => Z.ZP.select(e, "1319036828964454402"),
                S = (0, y.Z)()
                    .propsFromState(() => ({ birdwatchAccount: C }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("BIRDWATCH_SCREEN"), fetchUsersIfNeeded: Z.ZP.fetchManyIfNeeded })),
                v = h().c2a6ec00,
                T = h().d2470b62,
                x = h().b171d7c4,
                k = "1319036828964454402",
                B = h().ab23a972,
                P = h().j6e19c58,
                I = h().eac7b6ac,
                N = h().b0381cfc,
                A = h().f0addddc,
                H = h().c68f3bc0,
                R = h().dfb1f498,
                O = i.createElement(l.ZP, null, i.createElement(h().I18NFormatMessage, { $i18n: "b936a16b" }, i.createElement(l.ZP, { color: "link", link: { external: !0, pathname: "/messages/compose?recipient_id=1319036828964454402" } }, h().a584cfa7))),
                L = p.default.create((e) => ({ root: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 }, footer: { borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, borderTopStyle: "solid" }, infoItemContainer: { paddingStart: e.spaces.space16, paddingEnd: 0 }, module: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space16, overflow: "hidden" }, moduleBody: { padding: e.spaces.space16 }, row: { flexDirection: "row" }, text: { paddingEnd: e.spaces.space16 }, transparentModule: { backgroundColor: "transparent", borderWidth: 0 }, valuesGroup: { paddingBottom: e.spaces.space20, paddingTop: e.spaces.space20 }, valueIcon: { color: e.colors.gray700 }, valueItem: { textAlign: "start", flexDirection: "row", marginStart: e.spaces.space16, color: e.colors.gray700 } })),
                F = S((e) => {
                    const { birdwatchAccount: t, createLocalApiErrorHandler: a, fetchUsersIfNeeded: p } = e,
                        { featureSwitches: u } = i.useContext(w.rC),
                        [h, E] = i.useState(t?.following),
                        y = u.isTrue("responsive_web_birdwatch_note_writing_enabled");
                    i.useEffect(() => {
                        p([k])
                            .then((e) => {
                                e && E(e.entities?.users[k].following);
                            })
                            .catch(a());
                    }, [a, p]);
                    const Z = i.createElement(o.Z, { style: L.module }, i.createElement(r.Z, { text: v }), i.createElement(o.Z, { style: [L.moduleBody, L.row] }, i.createElement(l.ZP, { color: "gray700", style: L.text }, T), i.createElement(s.ZP, { "aria-label": x, link: "/i/flow/join-birdwatch", type: "brandFilled" }, x))),
                        C = i.createElement(o.Z, { style: L.module }, i.createElement(r.Z, { text: B }), i.createElement(o.Z, null, i.createElement(g.ZP, { decoration: g.ET, displayMode: "UserCompact", isFakeButtonRoleWithListItem: !0, userId: k, withFollowsYou: !0 }))),
                        S = (e) => i.createElement(o.Z, { style: L.valueItem }, i.createElement(l.ZP, { color: "gray700" }, e)),
                        F = {
                            "aria-label": P,
                            items: [
                                { label: "", decoration: i.createElement(m.default, { style: L.valueIcon }), description: S(I) },
                                { label: "", decoration: i.createElement(b.default, { style: L.valueIcon }), description: S(N) },
                                { label: "", decoration: i.createElement(_.default, { style: L.valueIcon }), description: S(A) },
                            ],
                        },
                        D = i.createElement(o.Z, { style: L.module }, i.createElement(r.Z, { text: P }), i.createElement(o.Z, { style: L.valuesGroup }, i.createElement(c.Z, (0, n.Z)({}, F, { containerStyle: L.infoItemContainer }))), i.createElement(o.Z, { style: L.footer }, i.createElement(d.Z, { link: "https://twitter.github.io/communitynotes/contributing/values/", text: H, withBottomRadius: !0 }))),
                        M = i.createElement(o.Z, { style: L.module }, i.createElement(r.Z, { text: R }), i.createElement(o.Z, { style: L.moduleBody }, O));
                    return i.createElement(o.Z, { role: "complementary", style: L.root }, y ? null : Z, h ? null : C, D, M, i.createElement(o.Z, { style: [L.module, L.transparentModule] }, i.createElement(f.Z, { textColor: "gray700", withOverflow: !0 })));
                });
        },
        983235: (e, t, a) => {
            a.d(t, { Z: () => B });
            var n = a(202784),
                i = a(325686),
                o = a(844685),
                l = a(731708),
                r = a(154003),
                s = a(392237),
                c = a(111677),
                d = a.n(c),
                p = a(143778),
                u = a(323265),
                h = a(301758),
                m = a(26232),
                b = a(312771),
                _ = a(24949),
                f = a(71620),
                w = a(668214),
                g = a(979090),
                E = a(304373),
                y = a(836255);
            const Z = (e, t) => g.tk(e, t.tweetId),
                C = (e, t) => t.tweetId,
                S = (0, w.Z)()
                    .propsFromState(() => ({ sourceLink: Z, sourcesSlice: (0, _.P1)(C, (e) => (0, E.d)(e)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("BIRDWATCH_SCREEN"), fetchTweetSourceLink: g.lw, fetchTweetIfNeeded: y.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "birdwatch", section: "birdwatch_source_link", component: "values" }),
                v = d().e4d93012,
                T = d().e55983c0,
                x = d().h23be93e,
                k = s.default.create((e) => ({ outerView: { marginStart: e.spaces.space12, paddingStart: e.spaces.space4 }, header: { paddingHorizontal: 0, marginBottom: e.spaces.space4, paddingBottom: 0 }, previewContainer: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, sourceLinkHeader: { paddingVertical: e.spaces.space12 }, sourceLinkTweet: { marginTop: e.spaces.space4 } })),
                B = S((e) => {
                    const { createLocalApiErrorHandler: t, fetchTweetIfNeeded: a, fetchTweetSourceLink: s, sourceLink: c, sourcesSlice: _, tweetId: f } = e,
                        [w, g] = n.useState(!1);
                    n.useEffect(() => {
                        f && s(f.toString()).catch(t());
                    }, [t, s, f]),
                        n.useEffect(() => {
                            c?.source_preview_tweet_for_notes && a(c?.source_preview_tweet_for_notes);
                        }, [c, a]);
                    const E = +(c?.source_tweet_count_for_notes || 0),
                        y = E > 0,
                        Z = E - 1,
                        C = y && !w,
                        S = E > 1 && !w,
                        B = (e) => {
                            u.ZP.isTwitterApp() && (u.ZP.isAndroid() || (e.preventDefault(), (window.location.pathname = `/i/status/${f}`)));
                        },
                        P = n.createElement(l.ZP, { withInteractiveStyling: !1 }, n.createElement(d().I18NFormatMessage, { $i18n: "e77dac87", remainingCount: Z }));
                    return c?.fetchStatus === b.ZP.LOADED && c?.has_note_request
                        ? n.createElement(
                              i.Z,
                              { style: k.outerView },
                              n.createElement(i.Z, { style: k.sourceLinkHeader }, n.createElement(o.Z, { style: k.header, text: v }), n.createElement(l.ZP, { color: "gray700" }, y ? x : T, " ")),
                              C ? n.createElement(i.Z, { style: k.previewContainer }, n.createElement(h.Z, { isCondensed: !0, onPress: B, shouldShowBorder: !0, tweetId: c?.source_preview_tweet_for_notes, withBirdwatchPivot: !1 })) : null,
                              S
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
                              w && _ ? n.createElement(m.Z, { footer: null, module: _, noItemsRenderer: p.Z, renderer: (e) => n.createElement(i.Z, { key: e }, n.createElement(h.Z, { isCondensed: !0, onPress: B, shouldShowBorder: !0, style: k.sourceLinkTweet, tweetId: e, withBirdwatchPivot: !1 })), withoutHeadroom: !0 }) : null,
                          )
                        : null;
                });
        },
        486361: (e, t, a) => {
            a.d(t, { Z: () => I });
            var n = a(202784),
                i = a(111677),
                o = a.n(i),
                l = a(625271),
                r = a(286406),
                s = a(511323),
                c = a(25001),
                d = a(72591),
                p = a(181839),
                u = a(711223),
                h = a(500040),
                m = a(857378),
                b = a(629949),
                _ = a(33611),
                f = a(443781),
                w = a(655352),
                g = a(71620),
                E = a(668214),
                y = a(979090);
            const Z = (0, E.Z)()
                    .propsFromState(() => ({ userAlias: y.OV }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfileIfNeeded: y.eY }))
                    .withAnalytics({ page: "birdwatch", component: "birdwatch_tab_bar" }),
                C = o().ca6ae344,
                S = o().fe27c1e2,
                v = o().ff692d64,
                T = o().cb1adfa0,
                x = o().b721eb38,
                k = "/i/communitynotes",
                B = (e, t) => t.pathname === k || t.pathname === `${k}/new` || t.pathname === `${k}/needs_your_help` || t.pathname === `${k}/rated_helpful` || t.pathname === `${k}/recent_note_request` || t.pathname === `${k}/got_likes`;
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isOwnProfilePageActive = (e, t) => {
                            const { userAlias: a } = this.props;
                            return !!a && t.pathname === `${k}/u/${a}`;
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
                        { featureSwitches: i } = this.context,
                        o = i.isTrue("rweb_sourcemap_migration") && (0, w.ZP)(),
                        f = o ? b.ZP : _.ZP;
                    return n.createElement(m.ZP, { layout: e, primaryLabel: C, wideMode: t, withLabel: a }, n.createElement(f, { "aria-label": S, isActive: B, label: S, layout: e, onClick: this._handleTabClickFactory("timeline_home"), path: k, renderIcon: (0, m.iI)(l.default, r.default, o), withLabel: a }), i.isTrue("responsive_web_birdwatch_note_writing_enabled") ? n.createElement(f, { "aria-label": v, isActive: this._isOwnProfilePageActive, label: v, layout: e, onClick: this._handleTabClickFactory("user_notes"), path: `${k}/u/me`, renderIcon: (0, m.iI)(s.default, c.default, o), withLabel: a }) : null, n.createElement(f, { "aria-label": T, label: T, layout: e, onClick: this._handleTabClickFactory("download_data"), path: `${k}/download-data`, renderIcon: (0, m.iI)(d.default, p.default, o), withLabel: a }), n.createElement(f, { "aria-label": x, label: x, layout: e, onClick: this._handleTabClickFactory("about"), path: `${k}/about`, renderIcon: (0, m.iI)(u.default, h.default, o), withLabel: a }));
                }
            }
            P.contextType = f.rC;
            const I = Z(P);
        },
        304093: (e, t, a) => {
            a.d(t, { Y: () => N });
            var n = a(202784),
                i = a(325686),
                o = a(688715),
                l = a(992942),
                r = a(370006),
                s = a(138099),
                c = a(786998),
                d = a(731708),
                p = a(593866),
                u = a(392237),
                h = a(111677),
                m = a.n(h),
                b = a(97369),
                _ = a(831489),
                f = a(262754);
            const w = a.p + "award.eb47bafa.png",
                g = m().id568acc,
                E = m().c20a24cc,
                y = m().d01b8fc8,
                Z = m().jbe2ad46,
                C = m().d2dc3d4c,
                S = m().i859a9d4,
                v = { external: !0, pathname: (0, o.ju)("https://communitynotes.x.com/guide/en/contributing/top-contributors") },
                T = m().heb73816,
                x = m().b760d51a,
                k = m().ief63e50,
                B = m().jd6b88ca,
                P = m().c39bdf5a,
                I = () => n.createElement(l.Z, { source: w, style: A.image }),
                N = ({ closeTopContributorModal: e, isOwnProfile: t }) => n.createElement(s.Z, { allowBackNavigation: !0, onMaskClick: e, type: "full", withMask: !0 }, n.createElement(c.Z, { leftControl: n.createElement(r.Z, { backButtonType: "close", onClick: e }) }), n.createElement(I, null), n.createElement(i.Z, { style: A.contentContainer }, n.createElement(i.Z, { style: A.headerContainer }, t && n.createElement(d.ZP, { size: "title2", weight: "heavy" }, E), n.createElement(d.ZP, { size: "title2", style: A.header, weight: "heavy" }, t ? y : g), n.createElement(d.ZP, { color: "gray700" }, Z)), n.createElement(p.Z, { items: H }), n.createElement(i.Z, { style: A.learnMoreContainer }, n.createElement(d.ZP, { link: v }, S)))),
                A = u.default.create((e) => ({ headerContainer: { paddingStart: e.spaces.space32, paddingEnd: e.spaces.space32, paddingBottom: e.spaces.space16 }, header: { marginBottom: e.spaces.space16 }, contentContainer: { padding: e.spaces.space32, paddingBottom: e.spaces.space48 }, learnMoreContainer: { paddingTop: e.spaces.space16, paddingStart: e.spaces.space32 }, icon: { height: e.spaces.space16, flexShrink: 0, paddingBottom: e.spaces.space2, paddingEnd: e.spaces.space8, paddingTop: e.spaces.space2, width: e.spaces.space16 }, image: { height: "150px", width: "150px", alignSelf: "center" } })),
                H = [
                    { label: B, description: P, decoration: n.createElement(b.default, { style: A.icon }) },
                    { label: C, description: T, decoration: n.createElement(_.default, { style: A.icon }) },
                    { label: x, description: k, decoration: n.createElement(f.default, { style: A.icon }) },
                ];
        },
        283369: (e, t, a) => {
            a.d(t, { Uu: () => K, UB: () => q, wy: () => Y, tF: () => j, Bk: () => J });
            var n = a(807896),
                i = a(202784),
                o = a(325686),
                l = a(731708),
                r = a(593866),
                s = a(154003),
                c = a(111677),
                d = a.n(c),
                p = a(121791),
                u = a(126089),
                h = a(155576),
                m = a(736430),
                b = a(75090);
            const _ = a(392237).default.create((e) => ({ infoGroupWithTitleAndCTAContainer: { gap: e.spaces.space12, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space32 }, infoGroupContainer: { paddingHorizontal: 0 }, lockIcon: { width: e.spaces.space12, height: e.spaces.space12 }, infoGroupDescription: { marginTop: e.spaces.space4 }, inlineCalloutNoteStatuses: { paddingHorizontal: e.spaces.space20 }, blueBadge: { backgroundColor: e.colors.blue500 }, grayBadge: { backgroundColor: e.colors.gray700 }, emptyStateContainer: { paddingHorizontal: e.spaces.space72 } })),
                f = d().g880a78a,
                w = d().g880a78a,
                g = d().f07ed596,
                E = d().af9f2b78,
                y = d().af68afc8,
                Z = d().fb5c5d42,
                C = d().ed0e6b2e,
                S = "/i/birdwatch",
                v = d().h2b5268a,
                T = d().e86c87a0,
                x = d().ad98f836,
                k = d().e2d7c914,
                B = d().a5427624,
                P = d().e227a7fa,
                I = d().eda73c9c,
                N = d().cf30af22,
                A = d().d145b0fa,
                H = d().fb5c5d42,
                R = d().a1e58cdc,
                O = d().i859a9d4,
                L = d().cfa3b664,
                F = d().bed66f92,
                D = d().a3ca686a,
                M = d().j44125ee,
                z = d().da55067c,
                V = () => i.createElement(o.Z, { style: _.infoGroupDescription }, i.createElement(l.ZP, { color: "gray700" }, R), i.createElement(l.ZP, { color: "text", link: "https://twitter.github.io/communitynotes/writing-ability", weight: "bold", withUnderline: !0 }, O)),
                U = () => i.createElement(p.default, { color: "white", style: _.lockIcon }),
                W = {
                    items: [
                        { label: (0, m.Z)({ label: w }), description: g, decoration: i.createElement(h.Z, { content: 1, style: _.blueBadge }) },
                        { label: (0, m.Z)({ label: E }), description: y, decoration: i.createElement(h.Z, { content: 2, style: _.blueBadge }) },
                        { label: (0, m.Z)({ label: Z }), description: i.createElement(V, null), decoration: i.createElement(h.Z, { content: U(), style: _.grayBadge }) },
                    ],
                },
                $ = {
                    items: [
                        { label: (0, m.Z)({ label: k }), description: B, decoration: i.createElement(h.Z, { content: 1, style: _.blueBadge }) },
                        { label: (0, m.Z)({ label: P }), description: I, decoration: i.createElement(h.Z, { content: 2, style: _.blueBadge }) },
                        { label: (0, m.Z)({ label: N }), description: A, decoration: i.createElement(h.Z, { content: 3, style: _.blueBadge }) },
                        { label: (0, m.Z)({ label: H }), description: i.createElement(V, null), decoration: i.createElement(h.Z, { content: U(), style: _.grayBadge }) },
                    ],
                },
                G = ({ buttonType: e = "primaryFilled", ctaButtonLabel: t, ctaLink: a, infoGroupProps: c, subtitle: d, title: p }) => i.createElement(o.Z, { style: _.infoGroupWithTitleAndCTAContainer }, i.createElement(l.ZP, { color: "text", size: "title2", weight: "heavy" }, p), d && i.createElement(l.ZP, { color: "gray700", size: "subtext2" }, d), c && i.createElement(r.Z, (0, n.Z)({ containerStyle: _.infoGroupContainer }, c)), a && i.createElement(o.Z, null, i.createElement(s.ZP, { alignContent: "center", link: a, type: e }, t))),
                j = () => i.createElement(G, { ctaButtonLabel: C, ctaLink: S, infoGroupProps: W, title: f }),
                q = () => i.createElement(G, { infoGroupProps: $, title: x }),
                Y = () => i.createElement(i.Fragment, null, i.createElement(G, { ctaButtonLabel: T, ctaLink: S, title: v }), i.createElement(o.Z, { style: _.inlineCalloutNoteStatuses }, i.createElement(b.Z, null))),
                Q = (0, u.h)({ decorationStyle: _.blueBadge }),
                K = () => i.createElement(G, { buttonType: "primaryOutlined", ctaButtonLabel: D, ctaLink: "https://twitter.github.io/communitynotes/examples", infoGroupProps: Q, subtitle: F, title: L }),
                J = () => i.createElement(o.Z, { style: _.emptyStateContainer }, i.createElement(G, { subtitle: z, title: M }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-018b0723.7959fb5a.js.map
