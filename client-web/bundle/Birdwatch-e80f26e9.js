"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-e80f26e9"],
    {
        679674: (e, t, a) => {
            a.d(t, { r: () => u });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(731708),
                s = a(392237),
                c = a(111677),
                o = a.n(c),
                d = a(265518);
            const m = o().icdb6d74,
                u = () => n.createElement(l.Z, { style: p.apiStatusContainer }, n.createElement(d.default, { style: [p.icon, p.iconPurple] }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "purple700", size: "subtext2" }, m)),
                p = s.default.create((e) => ({ apiStatusContainer: { flexDirection: "row", alignItems: "top" }, iconPurple: { color: e.colors.purple700 }, icon: { alignItems: "top", height: e.spaces.space16, width: e.spaces.space16, flexShrink: "0" } }));
        },
        318124: (e, t, a) => {
            a.d(t, { F: () => g });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(834324),
                s = a(40610),
                c = a(392237),
                o = a(111677),
                d = a.n(o),
                m = a(293723);
            const u = d().i80c8a84,
                p = d().i859a9d4,
                g = ({ appealRequested: e, canAppeal: t, handleOpenAppealsModal: a }) => {
                    const c = n.createElement(d().I18NFormatMessage, { $i18n: "bd9cf141" }, n.createElement(r.ZP, { onPress: a, withInteractiveStyling: !0, withUnderline: !0 }, d().f93d4391)),
                        o = { label: p, link: "https://twitter.github.io/communitynotes/additional-review" };
                    return e ? n.createElement(l.Z, { style: f.appealStatus }, n.createElement(i.Z, { Icon: m.default, action: o, headline: u, type: "success" })) : t ? n.createElement(l.Z, { style: f.appealStatus }, n.createElement(s.Z.Primary, { text: c })) : null;
                },
                f = c.default.create((e) => ({ appealStatus: { margin: e.spaces.space12, marginTop: 0, width: "auto" } }));
        },
        921068: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var n = a(202784),
                l = a(325686),
                r = a(529356),
                i = a(392237),
                s = a(731708),
                c = a(593866),
                o = a(111677),
                d = a.n(o),
                m = a(813681),
                u = a(413522),
                p = a(500040);
            const g = d().i606fc4c,
                f = d().b664c554,
                E = d().ab66e1f2,
                h = d().e36d807c,
                y = d().d8afb99c,
                b = d().f9e1090c,
                w = d().b9e1cf02,
                _ = d().cfd2f35e,
                Z = ({ handleCloseAppealsModal: e, handleRequestAppeal: t }) => n.createElement(r.Z, { actionLabel: w, graphicDisplayMode: "none", headline: f, isFullHeightOnMobile: !0, onAction: t, onSecondaryAction: e, secondaryActionLabel: _, subtext: N }),
                x = i.default.create((e) => ({ infoItemContainer: { paddingHorizontal: 0 }, iconAppeals: { height: e.spaces.space20, width: e.spaces.space20, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space20 } })),
                S = {
                    "aria-label": g,
                    containerStyle: x.infoItemContainer,
                    items: [
                        { label: "", decoration: n.createElement(m.default, { style: x.iconAppeals }), description: h },
                        { label: "", decoration: n.createElement(u.default, { style: x.iconAppeals }), description: y },
                        { label: "", decoration: n.createElement(p.default, { style: x.iconAppeals }), description: b },
                    ],
                },
                N = n.createElement(l.Z, null, n.createElement(s.ZP, null, E), n.createElement(c.Z, S));
        },
        978163: (e, t, a) => {
            a.d(t, { Z: () => ce });
            var n = a(202784),
                l = a(325686),
                r = a(688715),
                i = a(966886),
                s = a(731708),
                c = a(470397),
                o = a(786998),
                d = a(370006),
                m = a(721266),
                u = a(138099),
                p = a(392237),
                g = a(111677),
                f = a.n(g),
                E = a(453333),
                h = a(293723),
                y = a(227674),
                b = a(136483),
                w = a(833458),
                _ = a(530813),
                Z = a(265518),
                x = a(535280),
                S = a(988227),
                N = a(301633),
                k = a(473026),
                I = a(630715),
                T = a(443781),
                C = a(890655),
                M = a(933610),
                F = a(629963),
                P = a(531187),
                L = a(357972),
                D = a(206080);
            const $ = f().e457970a,
                v = f().df587b98,
                z = f().h201bdc8,
                R = f().j58e7b00,
                V = f().i859a9d4,
                B = f().h74b96b0,
                H = f().ge25848a,
                U = f().fe4fd310,
                A = f().d6db34cc,
                G = f().ce8b505e,
                j = f().j42c88b6,
                O = f().e5be8156,
                W = f().fca23c42,
                q = f().hef420c2,
                Q = f().j3af43c4,
                Y = f().f79d812c,
                J = f().cc02373e,
                K = f().d9f72d90,
                X = { external: !0, pathname: (0, r.ju)("https://communitynotes.x.com/guide/en/under-the-hood/ranking-notes.html#multi-model-note-ranking") },
                ee = { external: !0, pathname: (0, r.ju)("https://communitynotes.x.com/guide/en/contributing/notes-on-twitter.html") },
                te = (e) => {
                    const t = e >= 0 ? e : "–";
                    return n.createElement(f().I18NFormatMessage, { $i18n: "f2bad803", impactDisplayNumber: t });
                },
                ae = f().fc6e4594,
                ne = (e, t, a, r) => n.createElement(l.Z, { style: se.ratingInfoItem }, n.createElement(e, { style: [se.icon, t] }), n.createElement(l.Z, { style: se.ratingStatusTextSection }, n.createElement(s.ZP, { size: "body", style: se.ratingStatusText }, a), n.createElement(s.ZP, { color: "gray700", size: "body", style: se.ratingStatusText }, r), n.createElement(s.ZP, { link: ee }, V)));
            class le extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isShownOnTwitter = () => {
                            const {
                                note: { data_v1: e, rating_status: t },
                            } = this.props;
                            return t === P.VE.CurrentlyRatedHelpful && e?.classification === M.pq;
                        }),
                        (this._renderFastBadgeText = (e) => n.createElement(l.Z, { style: se.impressionSection }, n.createElement(E.default, { style: [se.icon, se.iconYellow] }), n.createElement(l.Z, { style: se.ratingStatusTextSection }, n.createElement(s.ZP, { color: "gray700", size: "body", style: se.ratingStatusText }, e)))),
                        (this._renderFastBadge = () => {
                            const {
                                note: { is_media_note: e, is_url_note: t, max_match_post_id_from_crh: a, rating_status: n, time_to_crh_from_note: l, time_to_crh_from_post: r },
                                tweetIdForRating: i,
                            } = this.props;
                            if (n !== P.VE.CurrentlyRatedHelpful) return null;
                            const { featureSwitches: s } = this.context,
                                c = s.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_note_cutoff"),
                                o = s.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_post_cutoff");
                            if (!s.isTrue("responsive_web_birdwatch_fast_notes_badge_enabled") || !l || !r) return null;
                            return o > r ? ((a || "") > (i || "") && (t || e) ? this._renderFastBadgeText(K) : this._renderFastBadgeText(Y)) : c > l ? this._renderFastBadgeText(J) : null;
                        }),
                        (this._renderRatingStatus = (e) => {
                            switch (e) {
                                case P.VE.CurrentlyRatedHelpful: {
                                    const e = n.createElement(s.ZP, null, U),
                                        t = this._isShownOnTwitter() ? e : U;
                                    return ne(h.default, se.iconGreen, t, W);
                                }
                                case P.VE.CurrentlyRatedNotHelpful:
                                    return ne(y.default, se.iconRed, G, Q);
                                case P.VE.NeedsMoreRatings:
                                    return ne(b.default, se.iconGray, A, q);
                                default:
                                    return null;
                            }
                        }),
                        (this._renderRatingTags = (e) => (e.helpful_tags ? e.helpful_tags.map((e) => n.createElement(l.Z, { key: e, style: se.ratingTag }, n.createElement(w.default, { style: [se.icon, se.iconGreen] }), n.createElement(s.ZP, { color: "gray700", size: "body" }, F.z9[e] ?? F.Wh[e]))) : e.not_helpful_tags ? e.not_helpful_tags.map((e) => n.createElement(l.Z, { key: e, style: se.ratingTag }, n.createElement(_.default, { style: [se.icon, se.iconRed] }), n.createElement(s.ZP, { size: "body" }, F.di[e] ?? F.mo[e]))) : void 0));
                }
                render() {
                    const { alias: e, closeNoteDetails: t, created_at: a, note: r, ratingImpact: p, rest_id: g, tweet: E, tweetIdForRating: h, writingImpact: y } = this.props,
                        { featureSwitches: b } = this.context,
                        w = b.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0,
                        _ = r.helpful_tags || r.not_helpful_tags,
                        N = n.createElement(
                            l.Z,
                            { style: [se.noteDetailsSection, se.noteDetailsSectionBorder] },
                            n.createElement(s.ZP, { style: se.noteDetailsText, weight: "bold" }, z),
                            r.is_api_author
                                ? n.createElement(l.Z, { style: se.ratingStatusTextSection }, n.createElement(l.Z, { style: se.noteAuthor }, n.createElement(Z.default, { style: [se.icon, se.iconGray] }), n.createElement(s.ZP, { dir: "ltr", numberOfLines: 1, size: "body", style: se.profileText }, (0, C.Q)(e))), n.createElement(l.Z, { style: se.apiDetails }, n.createElement(s.ZP, { color: "purple700" }, j)), n.createElement(l.Z, { style: se.leftPadding }, n.createElement(c.Z, null, n.createElement(s.ZP, { color: "gray700" }, te(y)))))
                                : n.createElement(
                                      l.Z,
                                      { style: se.ratingStatusTextSection },
                                      n.createElement(l.Z, { style: se.noteAuthor }, n.createElement(x.default, { style: [se.icon, se.iconGray] }), n.createElement(s.ZP, { dir: "ltr", numberOfLines: 1, size: "body", style: se.profileText }, (0, C.Q)(e))),
                                      n.createElement(
                                          l.Z,
                                          { style: se.leftPadding },
                                          n.createElement(
                                              c.Z,
                                              null,
                                              n.createElement(s.ZP, { color: "gray700" }, te(y)),
                                              n.createElement(
                                                  s.ZP,
                                                  { color: "gray700" },
                                                  ((e) => {
                                                      const t = e >= 0 ? e : "–";
                                                      return n.createElement(f().I18NFormatMessage, { $i18n: "e837f62f", impactDisplayNumber: t });
                                                  })(p),
                                              ),
                                          ),
                                      ),
                                  ),
                            n.createElement(s.ZP, { color: "link", link: `/i/communitynotes/u/${e}`, onClick: t, size: "body", style: se.leftPadding }, R),
                        ),
                        k = n.createElement(l.Z, { style: se.noteDetailsContainer }, n.createElement(o.Z, { leftControl: n.createElement(d.Z, { backButtonType: "close", onClick: t }), title: $ }), n.createElement(l.Z, { style: se.noteDetails }, n.createElement(l.Z, { style: se.noteDetailsSection }, n.createElement(s.ZP, { style: se.noteDetailsText, weight: "bold" }, H), n.createElement(m.Z, { size: "space4" }), this._renderRatingStatus(r.rating_status), this._renderFastBadge(), b.isTrue("responsive_web_birdwatch_media_notes_enabled") && n.createElement(ie, { displayUrl: r.display_url, isMediaNote: r.is_media_note, isUrlNote: r.is_url_note, mediaNoteCategory: E?.media_note_category, mediaNoteMatches: r.media_note_matches_v2, mediaNoteUpgradeEnabled: w, originalTweetId: E?.rest_id, ratingStatus: r.rating_status, rest_id: g, tweetIdForRating: h }), r.impression_count ? n.createElement(l.Z, { style: se.impressionSection }, n.createElement(S.default, { style: [se.icon, se.iconGreen] }), n.createElement(l.Z, { style: se.ratingStatusTextSection }, n.createElement(s.ZP, { color: "gray700", size: "body", style: se.ratingStatusText }, (0, D.b)(r.impression_count, this._isShownOnTwitter(), r.fully_visible_model)))) : null), _ ? n.createElement(l.Z, { style: se.noteDetailsSection }, n.createElement(s.ZP, { style: se.noteDetailsText, weight: "bold" }, ae), n.createElement(m.Z, { size: "space4" }), this._renderRatingTags(r)) : null, e ? N : null), n.createElement(l.Z, { style: [se.noteDetailsSection, se.noteDetailsSectionLast] }, n.createElement(re, { decidedBy: r.decided_by }), n.createElement(l.Z, { style: se.metadata }, r.decided_by && n.createElement(m.Z, { size: "space24" }), n.createElement(s.ZP, { size: "subtext1", style: se.noteDetailsContentText }, (I = a) ? n.createElement(i.Z, { prefix: B, relative: !1, timestamp: I }) : "", ` · ${v} ${g}`))));
                    var I;
                    return n.createElement(u.Z, { allowBackNavigation: !0, children: k, onMaskClick: t, type: "full", withMask: !0 });
                }
            }
            le.contextType = T.rC;
            const re = (e) => (e.decidedBy ? n.createElement(l.Z, { style: se.modelVersion }, n.createElement(N.default, { style: [se.icon, se.iconGray] }), n.createElement(s.ZP, { color: "gray700", size: "subtext1", style: se.modelVersionText }, `${O} `, n.createElement(s.ZP, { link: X, size: "subtext1", weight: "normal" }, e.decidedBy))) : null),
                ie = ({ displayUrl: e, isMediaNote: t, isUrlNote: a, mediaNoteCategory: r, mediaNoteMatches: i, mediaNoteUpgradeEnabled: c, originalTweetId: o, ratingStatus: d, rest_id: m, tweetIdForRating: u }) => {
                    const p = d === P.VE.CurrentlyRatedHelpful ? se.iconGreen : se.iconGray;
                    return d && (t || a) && d !== P.VE.CurrentlyRatedNotHelpful ? n.createElement(l.Z, { style: se.impressionSection }, t ? n.createElement(k.default, { style: [se.icon, p] }) : n.createElement(I.default, { style: [se.icon, p] }), n.createElement(l.Z, { style: se.ratingStatusTextSection }, n.createElement(s.ZP, { color: "gray700", size: "body", style: se.ratingStatusText }, (0, L.L)(i, r, d, o, u, m, a, e, c)))) : null;
                },
                se = p.default.create((e) => ({ icon: { height: e.spaces.space16, flexShrink: 0, paddingEnd: e.spaces.space8, width: e.spaces.space24 }, iconGray: { color: e.colors.gray700 }, iconPurple: { color: e.colors.purple700 }, iconRed: { color: e.colors.red500 }, iconGreen: { color: e.colors.green500 }, iconYellow: { color: e.colors.yellow500 }, impressionSection: { paddingTop: e.spaces.space8, display: "flex", flexDirection: "row" }, leftPadding: { paddingStart: e.spaces.space24 }, modelVersionText: { paddingTop: e.spaces.space2 }, noteAuthor: { flexDirection: "row", paddingBottom: e.spaces.space2 }, apiDetails: { paddingStart: e.spaces.space24, paddingBottom: e.spaces.space2 }, noteDetails: { alignItems: "flex-start", display: "flex", paddingHorizontal: e.spaces.space4, paddingTop: e.spaces.space8 }, noteDetailsContainer: { display: "flex", height: "100%" }, noteDetailsContentText: { color: e.colors.gray700, paddingTop: e.spaces.space4 }, noteDetailsSection: { alignItems: "flex-start", padding: e.spaces.space16, paddingTop: e.spaces.space4, width: "100%" }, noteDetailsSectionBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, gap: e.spaces.space4 }, noteDetailsSectionLast: { padding: e.spaces.space20, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space20 }, modelVersion: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, metadata: { display: "flex", flexDirection: "row" }, noteDetailsText: { marginBottom: e.spaces.space4 }, profileText: { textTransform: "capitalize" }, ratingInfoItem: { alignItems: "flex-start", flexDirection: "row", paddingBottom: e.spaces.space4 }, ratingStatusText: { paddingBottom: e.spaces.space4 }, ratingStatusTextSection: { flex: 1, width: "100%" }, ratingTag: { flexDirection: "row", paddingBottom: e.spaces.space4 } })),
                ce = le;
        },
        819119: (e, t, a) => {
            a.d(t, { Z: () => w });
            a(136728);
            var n = a(202784),
                l = a(688715),
                r = a(247056),
                i = a(392237),
                s = a(111677),
                c = a.n(s),
                o = a(415506),
                d = a(607127),
                m = a(689582),
                u = a(774426),
                p = a(443781);
            const g = c().d96cf7ce,
                f = c().e272836c,
                E = c().e457970a,
                h = c().da5a5d8c,
                y = c().ccf2f24e,
                b = c().d1e21610,
                w = ({ handleDeleteConfirm: e, handleOpenNoteDetails: t, isOwner: a, note: i, scribeOnClick: s }) => {
                    const { featureSwitches: c } = n.useContext(p.rC),
                        w = () => {
                            const n = c.isTrue("responsive_web_birdwatch_netzdg_enabled"),
                                { birdwatch_profile: r, rest_id: u } = i,
                                p = [];
                            return n && p.push({ text: b, Icon: o.default, link: { pathname: (0, l.ju)(`https://help.x.com/forms/netzwerkdurchsetzungsgesetz?content_type=Community+Note&note_id=${u}`) }, onClick: s("report") }), r?.alias && a && p.push({ confirmation: { label: g, headline: f, text: h, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: g, Icon: d.default, onClick: e }), p.push({ text: y, Icon: o.default, link: { pathname: (0, l.ju)(`https://help.x.com/forms/community-note?note_id=${u}`) }, onClick: s("report") }), p.push({ text: E, Icon: m.default, onClick: t }), p;
                        };
                    return n.createElement(r.Z, {
                        renderActionMenu: function (e) {
                            return n.createElement(u.default, { actionItems: w(), onClose: e });
                        },
                        style: _.caret,
                    });
                },
                _ = i.default.create((e) => ({ caret: { display: "flex", alignSelf: "flex-start", flex: 1, flexBasis: "0%", flexDirection: "row-reverse" } }));
        },
        4076: (e, t, a) => {
            a.d(t, { Q: () => g });
            var n = a(202784),
                l = a(325686),
                r = a(40610),
                i = a(392237),
                s = a(111677),
                c = a.n(s),
                o = a(521058),
                d = a(443781);
            const m = c().a804a8f4,
                u = c().ib9628b8,
                p = { label: c().bf08be2e, link: "/i/birdwatch" };
            function g() {
                const { featureSwitches: e } = n.useContext(d.rC);
                return e.isTrue("responsive_web_birdwatch_note_writing_enabled") ? n.createElement(l.Z, { style: f.rateMoreNotesContainer }, n.createElement(r.Z.Custom, { Icon: o.default, action: p, backgroundColor: "green0", headline: m, text: u })) : null;
            }
            const f = i.default.create((e) => ({ rateMoreNotesContainer: { alignItems: "center", flexDirection: "row", paddingVertical: 0, paddingHorizontal: e.spaces.space12, marginBottom: e.spaces.space12 } }));
        },
        300698: (e, t, a) => {
            a.d(t, { _: () => d });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(730550),
                s = a(933610),
                c = a(539429);
            let o = {};
            const d = ({ hasVisitedEntity: e, isNotePage: t, note: a, setHasVisitedEntity: d, tweetId: m, updateShowSignupPrompt: u }) => {
                const { data_v1: p, rating: g, rating_status: f, rest_id: E } = a;
                g?.data_v1 ? (o.helpfulness_level = g.data_v1.helpful ? i.W.Helpful : i.W.NotHelpful) : (o = g?.data_v2 || {});
                const h = p?.summary?.entities || [];
                return n.createElement(l.Z, null, !t && n.createElement(r.Z, { size: "space12" }), n.createElement(c.Z, { classifiedMisleading: p?.classification === s.pq, hasVisitedEntity: e, note: a, noteHasSources: h.length > 0, noteId: E, noteRatingStatus: f, rating: o, setHasVisitedEntity: d, setShowSignupPrompt: u, tweetId: m, withBorderRadius: !t }));
            };
        },
        584364: (e, t, a) => {
            a.d(t, { w: () => x });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(721266),
                s = a(470397),
                c = a(966886),
                o = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(453333),
                p = a(293723),
                g = a(227674),
                f = a(136483),
                E = a(531187),
                h = a(452066);
            const y = m().h8335712,
                b = m().b9f18eec,
                w = m().d6db34cc,
                _ = m().eca4e32a,
                Z = m().j33f6520,
                x = ({ createdAt: e, isShownOnTwitter: t, onNoteDetailsClick: a, ownNote: o, ratingStatus: d, shouldShowFastBadge: m }) => {
                    const x = (t, d, m, p = !1) => n.createElement(l.Z, { style: S.ratingStatusContainer, testID: h.Z.ratingStatus }, n.createElement(t, { style: [S.icon, d] }), n.createElement(l.Z, { style: S.statusAndViewMoreContainer }, o ? n.createElement(r.ZP, { size: "subtext2", weight: "bold" }, `${y} · `) : null, n.createElement(r.ZP, { size: "subtext2", weight: "bold" }, m), n.createElement(i.Z, { size: "space8" }), n.createElement(s.Z, { style: S.middot }, e && n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, n.createElement(c.Z, { timestamp: e })), p && n.createElement(u.default, { style: S.iconLightning }), n.createElement(r.ZP, { color: "gray700", onClick: a, size: "subtext2", style: S.detailsLink, withInteractiveStyling: !0, withUnderline: !0 }, _))));
                    switch (d) {
                        case E.VE.CurrentlyRatedHelpful: {
                            const e = n.createElement(r.ZP, null, b),
                                a = t ? e : b;
                            return x(p.default, S.iconStar, a, m);
                        }
                        case E.VE.CurrentlyRatedNotHelpful:
                            return x(g.default, S.iconRed, Z);
                        case E.VE.NeedsMoreRatings: {
                            const e = n.createElement(r.ZP, null, w);
                            return x(f.default, S.iconGray, e);
                        }
                        default:
                            return null;
                    }
                },
                S = o.default.create((e) => ({ middot: { alignItems: "center" }, ratingStatusContainer: { flex: "auto", flexDirection: "row" }, statusAndViewMoreContainer: { flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, iconStar: { color: e.colors.green500, height: e.spaces.space16, paddingEnd: e.spaces.space8, width: e.spaces.space16 }, detailsLink: { cursor: "pointer" }, iconGray: { color: e.colors.gray700 }, iconRed: { color: e.colors.red500 }, iconLightning: { color: e.colors.yellow500, marginTop: e.spaces.space2, height: e.spaces.space16, width: e.spaces.space16, flexShrink: "0" }, infoIcon: { marginBottom: e.spaces.space2, paddingStart: e.spaces.space8, paddingEnd: 0 }, icon: { marginTop: e.spaces.space2, height: e.spaces.space16, paddingEnd: e.spaces.space8, width: e.spaces.space16, flexShrink: "0" } }));
        },
        214748: (e, t, a) => {
            a.d(t, { c: () => u });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(731708),
                s = a(392237),
                c = a(369676),
                o = a(629963),
                d = a(531187),
                m = a(452066);
            function u({ helpful_tags: e, not_helpful_tags: t, rating_status: a }) {
                switch (a) {
                    case d.VE.CurrentlyRatedHelpful:
                        if (2 === e.length) {
                            const [t, a] = e,
                                s = o.z9[t] ?? o.Wh[t],
                                d = o.z9[a] ?? o.Wh[a],
                                u = `${s} · ${d}`;
                            return s && d ? n.createElement(n.Fragment, null, n.createElement(l.Z, { style: p.feedbackTagsContainer }, n.createElement(c.default, { style: p.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: m.Z.helpfulRatingTags }, u)), n.createElement(r.Z, { size: "space4" })) : null;
                        }
                        return null;
                    case d.VE.CurrentlyRatedNotHelpful:
                        if (2 === t.length) {
                            const [e, a] = t,
                                s = o.di[e] ?? o.mo[e],
                                d = o.di[a] ?? o.mo[a],
                                u = `${s} · ${d}`;
                            return s && d ? n.createElement(n.Fragment, null, n.createElement(l.Z, { style: p.feedbackTagsContainer }, n.createElement(c.default, { style: p.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: m.Z.notHelpfulRatingTags }, u)), n.createElement(r.Z, { size: "space4" })) : null;
                        }
                        return null;
                    default:
                        return null;
                }
            }
            const p = s.default.create((e) => ({ feedbackTagsContainer: { flexDirection: "row" }, icon: { flexShrink: "0", height: e.spaces.space16, width: e.spaces.space16, color: e.colors.gray700 } }));
        },
        694461: (e, t, a) => {
            a.d(t, { t: () => p });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(731708),
                s = a(392237),
                c = a(111677),
                o = a.n(c),
                d = a(988227),
                m = a(161335),
                u = a(206080);
            o().d5061d00;
            const p = ({ fullyVisibleModel: e, impressionCount: t, isShownOnTwitter: a }) => (a ? n.createElement(l.Z, { style: g.shownStatusContainer }, n.createElement(d.default, { style: [g.icon, g.iconGray] }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, (0, u.b)(t, a, e))) : n.createElement(l.Z, { style: g.shownStatusContainer }, n.createElement(m.default, { style: [g.icon, g.iconGray] }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, u.$))),
                g = s.default.create((e) => ({ shownStatusContainer: { flexDirection: "row", alignItems: "center" }, iconGray: { color: e.colors.gray700 }, iconGreen: { color: e.colors.green500 }, iconRed: { color: e.colors.red500 }, icon: { height: e.spaces.space16, width: e.spaces.space16, flexShrink: "0" } }));
        },
        950492: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                l = a(325686),
                r = a(67369),
                i = a(154003),
                s = a(731708),
                c = a(721266),
                o = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(262754);
            const p = m().idc0e9fc,
                g = m().a83cccfa,
                f = m().a565833e,
                E = (e) => {
                    const t = (0, r.yu)(),
                        a = n.createElement(i.ZP, { link: "/i/flow/join-birdwatch", style: t ? h.buttonNarrow : h.button, type: "primaryFilled" }, f);
                    return n.createElement(l.Z, { style: h.signupContainer }, n.createElement(l.Z, { style: h.signupTopContentContainer }, n.createElement(l.Z, { style: h.signupIconContainer }, n.createElement(u.default, null)), n.createElement(l.Z, { style: h.signupTextContainer }, n.createElement(s.ZP, { weight: "bold" }, p), n.createElement(c.Z, { size: "space8" }), n.createElement(s.ZP, { color: "gray700" }, g), t && n.createElement(c.Z, { size: "space8" })), !t && a), t && a);
                },
                h = o.default.create((e) => ({ signupContainer: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginStart: e.spaces.space12, marginEnd: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, signupTopContentContainer: { flexDirection: "row", marginBottom: e.spaces.space12 }, signupIconContainer: { paddingEnd: e.spaces.space12 }, signupTextContainer: { flexBasis: "0%", flexGrow: 1, flexShrink: 1 }, button: { alignSelf: "flex-start", marginStart: e.spaces.space8 }, buttonNarrow: { alignSelf: "stretch" } })),
                y = n.memo(E);
        },
        606121: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(71620),
                l = a(668214),
                r = a(979090),
                i = a(44836),
                s = a(601576),
                c = a(836255);
            const o = (e, t) => {
                    const a = t.note?.tweet;
                    return a ? c.Z.selectFetchStatus(e, a.rest_id) : void 0;
                },
                d = (0, l.Z)()
                    .propsFromState(() => ({ tweetFetchStatus: o, userAlias: r.OV }))
                    .propsFromActions(() => ({ addToast: s.fz, createAppeal: r.gP, createLocalApiErrorHandler: (0, n.zr)("BIRDWATCH_SCREEN"), deleteNote: i.f, fetchTweet: c.Z.fetchOneIfNeeded, fetchAuthenticatedUserProfileIfNeeded: r.eY, fetchNoteTranslation: r.EW, fetchStreamedGrokNoteTranslation: r.C7 }))
                    .withAnalytics({ component: "birdwatch_note" });
        },
        357972: (e, t, a) => {
            a.d(t, { L: () => c });
            var n = a(202784),
                l = a(731708),
                r = a(111677),
                i = a.n(r),
                s = a(531187);
            const c = (e, t, a, r, c, o, d, m, u) => {
                const p = void 0 === e?.match_count ? 0 : e.match_count,
                    g = !u || !1 !== e?.shoud_show_matches,
                    f = void 0 === r,
                    E = r === c,
                    h = m || "",
                    y = { originalTweetLink: E ? n.createElement(l.ZP, { color: "gray700" }) : n.createElement(l.ZP, { color: "gray700", link: `/i/communitynotes/t/${String(r)}`, withInteractiveStyling: !0, withUnderline: !0 }), mediaMatchesLink: Number(p) > 0 ? n.createElement(l.ZP, { color: "gray700", link: `/i/communitynotes/m/${o}`, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }), displayUrlLink: d ? n.createElement(l.ZP, { color: "blue500", link: h, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }) },
                    b = f ? n.createElement(i().I18NFormatMessage, { $i18n: "g062ed0f" }) : n.createElement(i().I18NFormatMessage, { $i18n: "j4f06e2f" }, n.cloneElement(y.originalTweetLink, null, i().f7427d6f)),
                    w = f ? n.createElement(i().I18NFormatMessage, { $i18n: "ida22561" }) : n.createElement(i().I18NFormatMessage, { $i18n: "g68aa88d" }, n.cloneElement(y.originalTweetLink, null, i().aa94541d)),
                    _ = f ? n.createElement(i().I18NFormatMessage, { $i18n: "ia62f949" }) : n.createElement(i().I18NFormatMessage, { $i18n: "c6eb7cbb" }, n.cloneElement(y.originalTweetLink, null, i().fe821ebb)),
                    Z = f ? n.createElement(i().I18NFormatMessage, { $i18n: "f9b81033" }, n.cloneElement(y.displayUrlLink, null, i().c5cc74e5({ urlNoteDisplayUrl: h }))) : n.createElement(i().I18NFormatMessage, { $i18n: "de254823" }, n.cloneElement(y.originalTweetLink, null, i().ff14b6b8), n.cloneElement(y.displayUrlLink, null, i().b5cc9c47({ urlNoteDisplayUrl: h })));
                if (!1 === g && !d && a === s.VE.CurrentlyRatedHelpful) {
                    if ("SingleVideo" === t) return Number(p) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "de5532bd" }, n.cloneElement(y.mediaMatchesLink, null, i().hb90fe9a({ matches: p }))) : n.createElement(i().I18NFormatMessage, { $i18n: "ib6805bd" });
                    if ("SingleImage" === t) return Number(p) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "g185d44d" }, n.cloneElement(y.mediaMatchesLink, null, i().i23a64ea({ matches: p }))) : n.createElement(i().I18NFormatMessage, { $i18n: "aeebdd99" });
                    if (void 0 === t) return Number(p) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "d54bfbd9" }, n.cloneElement(y.mediaMatchesLink, null, i().h6c5af52({ matches: p }))) : n.createElement(i().I18NFormatMessage, { $i18n: "a9efbf0f" });
                }
                return "SingleImage" !== t || Number(p) > 0
                    ? "SingleVideo" !== t || Number(p) > 0
                        ? !d || Number(p) > 0
                            ? Number(p) > 0 && "SingleVideo" === t && a === s.VE.CurrentlyRatedHelpful && !d
                                ? f
                                    ? n.createElement(i().I18NFormatMessage, { $i18n: "jef71e81" }, n.cloneElement(y.mediaMatchesLink, null, i().c2584f58({ matches: p })))
                                    : n.createElement(i().I18NFormatMessage, { $i18n: "ie594609" }, n.cloneElement(y.originalTweetLink, null, i().a0dec723), n.cloneElement(y.mediaMatchesLink, null, i().f20fa57c({ matches: p })))
                                : Number(p) > 0 && "SingleVideo" === t && a !== s.VE.CurrentlyRatedHelpful && !d
                                  ? f
                                      ? n.createElement(i().I18NFormatMessage, { $i18n: "a48e0b6b" }, n.cloneElement(y.mediaMatchesLink, null, i().bd60b152({ matches: p })))
                                      : n.createElement(i().I18NFormatMessage, { $i18n: "a0e626a3" }, n.cloneElement(y.originalTweetLink, null, i().b95920ef), n.cloneElement(y.mediaMatchesLink, null, i().f8dcced2({ matches: p })))
                                  : Number(p) > 0 && "SingleImage" === t && a === s.VE.CurrentlyRatedHelpful && !d
                                    ? f
                                        ? n.createElement(i().I18NFormatMessage, { $i18n: "fcd2eeeb" }, n.cloneElement(y.mediaMatchesLink, null, i().iaf626c0({ matches: p })))
                                        : n.createElement(i().I18NFormatMessage, { $i18n: "j300ac63" }, n.cloneElement(y.originalTweetLink, null, i().e3002eab), n.cloneElement(y.mediaMatchesLink, null, i().df3f2d52({ matches: p })))
                                    : Number(p) > 0 && "SingleImage" === t && a !== s.VE.CurrentlyRatedHelpful && !d
                                      ? f
                                          ? n.createElement(i().I18NFormatMessage, { $i18n: "bf532f23" }, n.cloneElement(y.mediaMatchesLink, null, i().cd83d952({ matches: p })))
                                          : n.createElement(i().I18NFormatMessage, { $i18n: "bda86c55" }, n.cloneElement(y.originalTweetLink, null, i().ia35cd39), n.cloneElement(y.mediaMatchesLink, null, i().a499228a({ matches: p })))
                                      : Number(p) > 0 && void 0 === t && a === s.VE.CurrentlyRatedHelpful && !d
                                        ? f
                                            ? n.createElement(i().I18NFormatMessage, { $i18n: "a13701bd" }, n.cloneElement(y.mediaMatchesLink, null, i().cf9ac658({ matches: p })))
                                            : n.createElement(i().I18NFormatMessage, { $i18n: "e2a0a791" }, n.cloneElement(y.originalTweetLink, null, i().fa56f7cb), n.cloneElement(y.mediaMatchesLink, null, i().b826c19c({ matches: p })))
                                        : Number(p) > 0 && void 0 === t && a !== s.VE.CurrentlyRatedHelpful && !d
                                          ? f
                                              ? n.createElement(i().I18NFormatMessage, { $i18n: "b8e4bb0b" }, n.cloneElement(y.mediaMatchesLink, null, i().c4618eb8({ matches: p })))
                                              : n.createElement(i().I18NFormatMessage, { $i18n: "hada7e59" }, n.cloneElement(y.originalTweetLink, null, i().i56af3fd), n.cloneElement(y.mediaMatchesLink, null, i().g1f275b6({ matches: p })))
                                          : Number(p) > 0 && d && E
                                            ? a === s.VE.CurrentlyRatedHelpful
                                                ? n.createElement(i().I18NFormatMessage, { $i18n: "e8969de9" }, n.cloneElement(y.mediaMatchesLink, null, i().i2cac82c({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().a2ae91f1({ urlNoteDisplayUrl: h })))
                                                : n.createElement(i().I18NFormatMessage, { $i18n: "a389fb7b" }, n.cloneElement(y.mediaMatchesLink, null, i().d3205ee4({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().daeff73b({ urlNoteDisplayUrl: h })))
                                            : Number(p) > 0 && d && !E
                                              ? a === s.VE.CurrentlyRatedHelpful
                                                  ? f
                                                      ? n.createElement(i().I18NFormatMessage, { $i18n: "gd8d8205" }, n.cloneElement(y.mediaMatchesLink, null, i().fc546c2e({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().i1df5f5d({ urlNoteDisplayUrl: h })))
                                                      : n.createElement(i().I18NFormatMessage, { $i18n: "i981a661" }, n.cloneElement(y.originalTweetLink, null, i().g03f5337), n.cloneElement(y.mediaMatchesLink, null, i().f5b30b8a({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().e0a49d5b({ urlNoteDisplayUrl: h })))
                                                  : f
                                                    ? n.createElement(i().I18NFormatMessage, { $i18n: "jceb2edb" }, n.cloneElement(y.mediaMatchesLink, null, i().e25f9fd4({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().bae49ec3({ urlNoteDisplayUrl: h })))
                                                    : n.createElement(i().I18NFormatMessage, { $i18n: "f20a22a1" }, n.cloneElement(y.originalTweetLink, null, i().d595bffd), n.cloneElement(y.mediaMatchesLink, null, i().ef8a55a6({ matches: p })), n.cloneElement(y.displayUrlLink, null, i().a3aa3cb1({ urlNoteDisplayUrl: h })))
                                              : _
                            : Z
                        : w
                    : b;
            };
        },
        206080: (e, t, a) => {
            a.d(t, { $: () => s, b: () => c });
            var n = a(202784),
                l = a(891198),
                r = a(111677),
                i = a.n(r);
            const s = i().d5061d00,
                c = (e, t, a) => {
                    const r = e ? l.ZP.getTruncatedCount(e) : void 0;
                    if (t) {
                        if (!a && r) return n.createElement(i().I18NFormatMessage, { $i18n: "f43e2fdf", impressionTruncated: r });
                        if (!a && !r) return n.createElement(i().I18NFormatMessage, { $i18n: "j72bc9ab" });
                        if (a && r) return n.createElement(i().I18NFormatMessage, { $i18n: "d60e4375", impressionTruncated: r });
                        if (a && !r) return n.createElement(i().I18NFormatMessage, { $i18n: "bf62daf1" });
                    }
                    return s;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-e80f26e9.88dccf1a.js.map
