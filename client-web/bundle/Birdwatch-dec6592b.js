"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-dec6592b"],
    {
        314966: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchDownloadDataScreen: () => G, default: () => O });
            var n = a(202784),
                l = a(614983),
                r = a.n(l),
                i = a(325686),
                o = a(731708),
                c = a(688715),
                s = a(966886),
                d = a(154003),
                m = a(420412),
                p = a(844685),
                u = a(392237),
                g = a(674132),
                f = a.n(g),
                h = a(72591),
                E = a(252021),
                b = a(443781),
                y = a(652904),
                w = a(249777),
                Z = a(486361),
                _ = a(24949),
                x = a(71620),
                S = a(668214),
                C = a(979090);
            const T = (e, t) => C.sz(e),
                N = (0, S.Z)()
                    .propsFromState(() => ({ publicData: (0, _.P1)(T, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("BIRDWATCH_SCREEN"), fetchPublicData: C.oV }))
                    .withAnalytics({ page: "birdwatch", section: "download_data" }),
                I = f().cb1adfa0,
                k = f().cc720e6a,
                P = f().j2fcd33a,
                M = f().d4a6b322,
                D = f().c359263a,
                v = f().b8a27fe2,
                F = f().j1c99e00,
                L = f().i6f69314,
                B = f().b7e4c114,
                z = f().d7f19114,
                R = f().b6008808,
                $ = f().h786cd7a,
                H = f().d0fe8052,
                A = f().c0427f94,
                V = f().g880d8c0,
                U = f().ab1b3d38,
                W = n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, n.createElement(f().I18NFormatMessage, { $i18n: "c475a5d3" }, n.createElement(o.ZP, { color: "link", link: (0, c.ju)("https://developer.x.com/en/developer-terms") }, f().c43fb933))),
                G = (e) => {
                    const { featureSwitches: t } = n.useContext(b.rC),
                        { analytics: a, createLocalApiErrorHandler: l, fetchPublicData: c, history: u, publicData: g } = e;
                    n.useEffect(() => {
                        c().catch(l());
                    }, [l, c]);
                    const _ = t.isTrue("responsive_web_birdwatch_note_request_download_enabled"),
                        x = g?.notes?.urls,
                        S = x?.length,
                        C = g?.ratings?.urls,
                        T = C?.length,
                        N = g?.note_status_history?.urls,
                        G = N?.length,
                        O = g?.user_enrollment?.urls,
                        q = O?.length,
                        Y = g?.bat_signals?.urls,
                        Q = Y?.length,
                        J = g?.notes?.created_at,
                        K = (e, t, l, c) => {
                            return (
                                r()(void 0 !== l, "totalFiles must be defined"),
                                n.createElement(
                                    i.Z,
                                    { key: t, style: [j.fileSection, t > 1 && j.fileSectionNotFirst] },
                                    n.createElement(o.ZP, null, n.createElement(f().I18NFormatMessage, { $i18n: "g19fcc5b", fileIndex: t, totalFiles: l })),
                                    n.createElement(d.ZP, {
                                        icon: n.createElement(h.default, null),
                                        link: e,
                                        onPress:
                                            ((s = `${c}_${t}`),
                                            () => {
                                                a.scribeAction(`click_${s}`);
                                            }),
                                        type: "brandText",
                                    }),
                                )
                            );
                            var s;
                        },
                        X = n.createElement(i.Z, null, n.createElement(i.Z, { style: j.headerWrapper }, n.createElement(o.ZP, { size: "title4", style: j.textSection, weight: "heavy" }, k), n.createElement(o.ZP, { color: "gray700", style: j.textSection }, M), n.createElement(o.ZP, { color: "gray700" }, D, n.createElement(o.ZP, { link: { pathname: "https://twitter.github.io/communitynotes/data", external: !0 } }, v), ".")), n.createElement(m.Z, null), n.createElement(p.Z, { text: F }), x && x?.length > 0 ? x.map((e, t) => K(e, t + 1, S, "notes")) : n.createElement(o.ZP, { color: "gray700", style: j.emptyData }, $), n.createElement(m.Z, null), n.createElement(p.Z, { text: L }), C && C?.length > 0 ? C.map((e, t) => K(e, t + 1, T, "ratings")) : n.createElement(o.ZP, { color: "gray700", style: j.emptyData }, H), n.createElement(m.Z, null), n.createElement(p.Z, { text: B }), N && N?.length > 0 ? N.map((e, t) => K(e, t + 1, G, "noteStatusHistory")) : n.createElement(o.ZP, { color: "gray700", style: j.emptyData }, A), n.createElement(m.Z, null), n.createElement(p.Z, { text: z }), O && O?.length > 0 ? O.map((e, t) => K(e, t + 1, q, "userEnrollmentStatus")) : n.createElement(o.ZP, { color: "gray700", style: j.emptyData }, V), n.createElement(m.Z, null), _ ? n.createElement(i.Z, null, n.createElement(p.Z, { text: R }), Y && Y?.length > 0 ? Y.map((e, t) => K(e, t + 1, Q, "noteRequest")) : n.createElement(o.ZP, { color: "gray700", style: j.emptyData }, U), n.createElement(m.Z, null)) : null, n.createElement(i.Z, { style: j.footerText }, n.createElement(o.ZP, { color: "gray700", style: j.dateGenerated }, (ee = J) ? n.createElement(s.Z, { prefix: P, relative: !1, timestamp: ee }) : ""), W));
                    var ee;
                    return n.createElement(y.Z, null, n.createElement(E.Z, { TabBar: Z.Z, history: u, primaryContent: X, sidebarContent: n.createElement(w.Z, null), title: I, withTweetButton: !1 }));
                },
                j = u.default.create((e) => ({ dateGenerated: { paddingBottom: e.spaces.space16 }, emptyData: { display: "flex", justifyContent: "center", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, fileSection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space4 }, fileSectionNotFirst: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px" }, footerText: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, headerWrapper: { alignItems: "center", margin: e.spaces.space32, textAlign: "center" }, textSection: { marginBottom: e.spaces.space16 } })),
                O = N(G);
        },
        199188: (e, t, a) => {
            a.d(t, { Z: () => x });
            a(136728);
            var n = a(202784),
                l = a(325686),
                r = a(992942),
                i = a(731708),
                o = a(909377),
                c = a(593866),
                s = a(529356),
                d = a(392237),
                m = a(674132),
                p = a.n(m),
                u = a(121791),
                g = a(652904),
                f = a(293115);
            const h = a.p + "earn-in.6f6b12fa.png",
                E = p().ed0e6b2e,
                b = p().if4c5e06,
                y = p().b772cd66,
                w = () => n.createElement(r.Z, { source: h, style: _.image }),
                Z = { page: "birdwatch", component: "earn_in_education" },
                _ = d.default.create((e) => ({ container: { paddingBottom: e.spaces.space24 }, headlineContainer: { marginBottom: e.spaces.space12 }, icon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space20 }, image: { height: "227px", width: "100%" }, infoItemBadge: { backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, height: e.spaces.space32, justifyContent: "center", marginEnd: e.spaces.space20, overflow: "hidden", width: e.spaces.space32 }, infoItemContainer: { paddingHorizontal: 0 } })),
                x = (e) => {
                    const { history: t, onDone: a } = e,
                        r = (e) => n.createElement(l.Z, { style: _.infoItemBadge }, n.createElement(i.ZP, { align: "center", color: "white", weight: "bold" }, e)),
                        d = n.createElement(o.Z, { Icon: u.default, size: "large", style: _.icon }),
                        m = {
                            "aria-label": "Welcome to Community Notes",
                            containerStyle: _.infoItemContainer,
                            items: [
                                { label: p().g880a78a, decoration: r(1), description: p().d1be2236 },
                                { label: p().af9f2b78, decoration: r(2), description: p().af68afc8 },
                                { label: p().fb5c5d42, decoration: d, description: p().a1e58cdc },
                            ],
                        },
                        h = n.createElement(l.Z, { style: _.container }, n.createElement(c.Z, m)),
                        x = n.useCallback(() => {
                            t.push("/i/birdwatch");
                        }, [t]);
                    return n.createElement(f.nO, { namespace: Z }, n.createElement(g.Z, null, n.createElement(s.Z, { actionLabel: E, children: h, contentStyle: _.headlineContainer, graphic: w, graphicDisplayMode: "illustrationFullWidth", headline: b, isFullHeightOnMobile: !0, onAction: x, onSecondaryAction: a, secondaryActionLabel: y, subtext: null, withBottomPadding: !1 })));
                };
        },
        169584: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(392237),
                o = a(530813),
                c = a(629963);
            const s = ({ tags: e }) => {
                    if (!e) return null;
                    return n.createElement(
                        l.Z,
                        { role: "list", style: d.feedbackTagContainer },
                        e.map((e) => ((e) => n.createElement(l.Z, { key: e, role: "listitem", style: d.tag }, n.createElement(o.default, { style: d.icon }), n.createElement(r.ZP, { color: "gray700", size: "subtext1" }, c.di[e])))(e)),
                    );
                },
                d = i.default.create((e) => ({ feedbackTagContainer: { paddingVertical: e.spaces.space12 }, icon: { color: e.colors.gray400, height: "12px", paddingEnd: e.spaces.space4, width: "12px" }, tag: { alignItems: "center", flexDirection: "row" } })),
                m = n.memo(s);
        },
        395021: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchGlobalTimelineScreen: () => k, default: () => P });
            var n = a(202784),
                l = a(154003),
                r = a(674132),
                i = a.n(r),
                o = a(698891),
                c = a(443781),
                s = a(784917),
                d = a(916616),
                m = a(249777),
                p = a(486361),
                u = a(24949),
                g = a(71620),
                f = a(668214),
                h = a(979090),
                E = a(371184);
            const b = (e, t) => t.match?.params?.tabId || void 0,
                y = (e, t) => h.PL(e),
                w = (0, f.Z)()
                    .propsFromState(() => ({ enrollmentStatus: y, module: (0, u.P1)(b, (e) => (0, E.Z)(e)), selectedTabId: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfileIfNeeded: h.eY, updateBirdwatchPath: h.Bb }));
            var Z = a(709070),
                _ = a(335632),
                x = a(962741);
            const S = { ...(0, _.G)({ displayBlocked: !1, withTweetActionsDisabled: !0 }), [x.ZP.Label]: Z.Z },
                C = i().a15648a4,
                T = i().bb081ea2,
                N = { label: T },
                I = (e) => ({ pathname: `/i/communitynotes/${e}` }),
                k = (e) => {
                    const { featureSwitches: t } = n.useContext(c.rC),
                        { createLocalApiErrorHandler: a, enrollmentStatus: r, fetchAuthenticatedUserProfileIfNeeded: i, history: u, module: g, selectedTabId: f, updateBirdwatchPath: h } = e,
                        E = n.useRef({ hasEffectRun: !1 }),
                        b = n.createElement(l.ZP, { "aria-label": T, hoverLabel: N, icon: n.createElement(o.default, null), link: "/i/communitynotes/notification_settings", pullRight: !0, type: "primaryText" }),
                        y = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        w = n.useMemo(() => {
                            const e = f ?? "global_timeline";
                            return { page: "birdwatch", section: y ? `${e}_participant` : e };
                        }, [y, f]);
                    return (
                        n.useEffect(() => {
                            E.current.hasEffectRun || ((E.current.hasEffectRun = !0), i().catch(a()));
                        }, [a, r, i]),
                        n.useEffect(() => {
                            const e = window.location.pathname,
                                t = window.history.length;
                            h({ path: e, position: t });
                        }, [h, f]),
                        "EarnedOutNoAcknowledge" === r?.enrollment_state ? n.createElement(d.Z, { history: u }) : n.createElement(s.Z, { TabBar: p.Z, entryConfiguration: S, getTabLink: I, history: u, initialPageNamespace: w, module: g, rightControl: y ? b : null, selectedTabId: f, sidebarContent: n.createElement(m.Z, null), timelinePrefix: "birdwatch-", title: C, withTweetButton: !1 })
                    );
                },
                P = w(k);
        },
        318124: (e, t, a) => {
            a.d(t, { F: () => g });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(834324),
                o = a(40610),
                c = a(392237),
                s = a(674132),
                d = a.n(s),
                m = a(293723);
            const p = d().i80c8a84,
                u = d().i859a9d4,
                g = ({ appealRequested: e, canAppeal: t, handleOpenAppealsModal: a }) => {
                    const c = n.createElement(d().I18NFormatMessage, { $i18n: "bd9cf141" }, n.createElement(r.ZP, { onPress: a, withInteractiveStyling: !0, withUnderline: !0 }, d().f93d4391)),
                        s = { label: u, link: "https://twitter.github.io/communitynotes/additional-review" };
                    return e ? n.createElement(l.Z, { style: f.appealStatus }, n.createElement(i.Z, { Icon: m.default, action: s, headline: p, type: "success" })) : t ? n.createElement(l.Z, { style: f.appealStatus }, n.createElement(o.Z.Primary, { text: c })) : null;
                },
                f = c.default.create((e) => ({ appealStatus: { margin: e.spaces.space12, marginTop: 0, width: "auto" } }));
        },
        921068: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var n = a(202784),
                l = a(325686),
                r = a(529356),
                i = a(392237),
                o = a(731708),
                c = a(593866),
                s = a(674132),
                d = a.n(s),
                m = a(813681),
                p = a(413522),
                u = a(500040);
            const g = d().i606fc4c,
                f = d().b664c554,
                h = d().ab66e1f2,
                E = d().e36d807c,
                b = d().d8afb99c,
                y = d().f9e1090c,
                w = d().b9e1cf02,
                Z = d().cfd2f35e,
                _ = ({ handleCloseAppealsModal: e, handleRequestAppeal: t }) => n.createElement(r.Z, { actionLabel: w, graphicDisplayMode: "none", headline: f, isFullHeightOnMobile: !0, onAction: t, onSecondaryAction: e, secondaryActionLabel: Z, subtext: C }),
                x = i.default.create((e) => ({ infoItemContainer: { paddingHorizontal: 0 }, iconAppeals: { height: e.spaces.space20, width: e.spaces.space20, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space20 } })),
                S = {
                    "aria-label": g,
                    containerStyle: x.infoItemContainer,
                    items: [
                        { label: "", decoration: n.createElement(m.default, { style: x.iconAppeals }), description: E },
                        { label: "", decoration: n.createElement(p.default, { style: x.iconAppeals }), description: b },
                        { label: "", decoration: n.createElement(u.default, { style: x.iconAppeals }), description: y },
                    ],
                },
                C = n.createElement(l.Z, null, n.createElement(o.ZP, null, h), n.createElement(c.Z, S));
        },
        978163: (e, t, a) => {
            a.d(t, { Z: () => re });
            var n = a(202784),
                l = a(325686),
                r = a(688715),
                i = a(966886),
                o = a(731708),
                c = a(470397),
                s = a(786998),
                d = a(370006),
                m = a(721266),
                p = a(138099),
                u = a(392237),
                g = a(674132),
                f = a.n(g),
                h = a(453333),
                E = a(293723),
                b = a(227674),
                y = a(136483),
                w = a(833458),
                Z = a(530813),
                _ = a(535280),
                x = a(988227),
                S = a(301633),
                C = a(473026),
                T = a(630715),
                N = a(443781),
                I = a(890655),
                k = a(933610),
                P = a(629963),
                M = a(531187),
                D = a(357972),
                v = a(206080);
            const F = f().e457970a,
                L = f().df587b98,
                B = f().h201bdc8,
                z = f().j58e7b00,
                R = f().i859a9d4,
                $ = f().h74b96b0,
                H = f().ge25848a,
                A = f().fe4fd310,
                V = f().d6db34cc,
                U = f().ce8b505e,
                W = f().e5be8156,
                G = f().fca23c42,
                j = f().hef420c2,
                O = f().j3af43c4,
                q = f().f79d812c,
                Y = f().cc02373e,
                Q = f().d9f72d90,
                J = { external: !0, pathname: (0, r.ju)("https://communitynotes.x.com/guide/en/under-the-hood/ranking-notes.html#multi-model-note-ranking") },
                K = { external: !0, pathname: (0, r.ju)("https://communitynotes.x.com/guide/en/contributing/notes-on-twitter.html") },
                X = f().fc6e4594,
                ee = (e, t, a, r) => n.createElement(l.Z, { style: le.ratingInfoItem }, n.createElement(e, { style: [le.icon, t] }), n.createElement(l.Z, { style: le.ratingStatusTextSection }, n.createElement(o.ZP, { size: "body", style: le.ratingStatusText }, a), n.createElement(o.ZP, { color: "gray700", size: "body", style: le.ratingStatusText }, r), n.createElement(o.ZP, { link: K }, R)));
            class te extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isShownOnTwitter = () => {
                            const {
                                note: { data_v1: e, rating_status: t },
                            } = this.props;
                            return t === M.VE.CurrentlyRatedHelpful && e?.classification === k.pq;
                        }),
                        (this._renderFastBadgeText = (e) => n.createElement(l.Z, { style: le.impressionSection }, n.createElement(h.default, { style: [le.icon, le.iconYellow] }), n.createElement(l.Z, { style: le.ratingStatusTextSection }, n.createElement(o.ZP, { color: "gray700", size: "body", style: le.ratingStatusText }, e)))),
                        (this._renderFastBadge = () => {
                            const {
                                note: { is_media_note: e, is_url_note: t, max_match_post_id_from_crh: a, rating_status: n, time_to_crh_from_note: l, time_to_crh_from_post: r },
                                tweetIdForRating: i,
                            } = this.props;
                            if (n !== M.VE.CurrentlyRatedHelpful) return null;
                            const { featureSwitches: o } = this.context,
                                c = o.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_note_cutoff"),
                                s = o.getNumberValue("responsive_web_birdwatch_fast_crh_time_from_post_cutoff");
                            if (!o.isTrue("responsive_web_birdwatch_fast_notes_badge_enabled") || !l || !r) return null;
                            return s > r ? ((a || "") > (i || "") && (t || e) ? this._renderFastBadgeText(Q) : this._renderFastBadgeText(q)) : c > l ? this._renderFastBadgeText(Y) : null;
                        }),
                        (this._renderRatingStatus = (e) => {
                            switch (e) {
                                case M.VE.CurrentlyRatedHelpful: {
                                    const e = n.createElement(o.ZP, null, A),
                                        t = this._isShownOnTwitter() ? e : A;
                                    return ee(E.default, le.iconGreen, t, G);
                                }
                                case M.VE.CurrentlyRatedNotHelpful:
                                    return ee(b.default, le.iconRed, U, O);
                                case M.VE.NeedsMoreRatings:
                                    return ee(y.default, le.iconGray, V, j);
                                default:
                                    return null;
                            }
                        }),
                        (this._renderRatingTags = (e) => (e.helpful_tags ? e.helpful_tags.map((e) => n.createElement(l.Z, { key: e, style: le.ratingTag }, n.createElement(w.default, { style: [le.icon, le.iconGreen] }), n.createElement(o.ZP, { color: "gray700", size: "body" }, P.z9[e] ?? P.Wh[e]))) : e.not_helpful_tags ? e.not_helpful_tags.map((e) => n.createElement(l.Z, { key: e, style: le.ratingTag }, n.createElement(Z.default, { style: [le.icon, le.iconRed] }), n.createElement(o.ZP, { size: "body" }, P.di[e] ?? P.mo[e]))) : void 0));
                }
                render() {
                    const { alias: e, closeNoteDetails: t, created_at: a, note: r, ratingImpact: u, rest_id: g, tweet: h, tweetIdForRating: E, writingImpact: b } = this.props,
                        { featureSwitches: y } = this.context,
                        w = y.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0,
                        Z = r.helpful_tags || r.not_helpful_tags,
                        S = n.createElement(
                            l.Z,
                            { style: [le.noteDetailsSection, le.noteDetailsSectionBorder] },
                            n.createElement(o.ZP, { style: le.noteDetailsText, weight: "bold" }, B),
                            n.createElement(l.Z, { style: le.noteAuthor }, n.createElement(_.default, { style: [le.icon, le.iconGray] }), n.createElement(o.ZP, { dir: "ltr", numberOfLines: 1, size: "body", style: le.profileText }, (0, I.Q)(e))),
                            n.createElement(
                                l.Z,
                                { style: le.leftPadding },
                                n.createElement(
                                    c.Z,
                                    null,
                                    n.createElement(
                                        o.ZP,
                                        { color: "gray700" },
                                        ((e) => {
                                            const t = e >= 0 ? e : "–";
                                            return n.createElement(f().I18NFormatMessage, { $i18n: "f2bad803", impactDisplayNumber: t });
                                        })(b),
                                    ),
                                    n.createElement(
                                        o.ZP,
                                        { color: "gray700" },
                                        ((e) => {
                                            const t = e >= 0 ? e : "–";
                                            return n.createElement(f().I18NFormatMessage, { $i18n: "e837f62f", impactDisplayNumber: t });
                                        })(u),
                                    ),
                                ),
                            ),
                            n.createElement(o.ZP, { color: "link", link: `/i/communitynotes/u/${e}`, onClick: t, size: "body", style: le.leftPadding }, z),
                        ),
                        C = n.createElement(l.Z, { style: le.noteDetailsContainer }, n.createElement(s.Z, { leftControl: n.createElement(d.Z, { backButtonType: "close", onClick: t }), title: F }), n.createElement(l.Z, { style: le.noteDetails }, n.createElement(l.Z, { style: le.noteDetailsSection }, n.createElement(o.ZP, { style: le.noteDetailsText, weight: "bold" }, H), n.createElement(m.Z, { size: "space4" }), this._renderRatingStatus(r.rating_status), this._renderFastBadge(), y.isTrue("responsive_web_birdwatch_media_notes_enabled") && n.createElement(ne, { displayUrl: r.display_url, isMediaNote: r.is_media_note, isUrlNote: r.is_url_note, mediaNoteCategory: h?.media_note_category, mediaNoteMatches: r.media_note_matches_v2, mediaNoteUpgradeEnabled: w, originalTweetId: h?.rest_id, ratingStatus: r.rating_status, rest_id: g, tweetIdForRating: E }), r.impression_count ? n.createElement(l.Z, { style: le.impressionSection }, n.createElement(x.default, { style: [le.icon, le.iconGreen] }), n.createElement(l.Z, { style: le.ratingStatusTextSection }, n.createElement(o.ZP, { color: "gray700", size: "body", style: le.ratingStatusText }, (0, v.b)(r.impression_count, this._isShownOnTwitter(), r.fully_visible_model)))) : null), Z ? n.createElement(l.Z, { style: le.noteDetailsSection }, n.createElement(o.ZP, { style: le.noteDetailsText, weight: "bold" }, X), n.createElement(m.Z, { size: "space4" }), this._renderRatingTags(r)) : null, e ? S : null), n.createElement(l.Z, { style: [le.noteDetailsSection, le.noteDetailsSectionLast] }, n.createElement(ae, { decidedBy: r.decided_by }), n.createElement(l.Z, { style: le.metadata }, r.decided_by && n.createElement(m.Z, { size: "space24" }), n.createElement(o.ZP, { size: "subtext1", style: le.noteDetailsContentText }, (T = a) ? n.createElement(i.Z, { prefix: $, relative: !1, timestamp: T }) : "", ` · ${L} ${g}`))));
                    var T;
                    return n.createElement(p.Z, { allowBackNavigation: !0, children: C, onMaskClick: t, type: "full", withMask: !0 });
                }
            }
            te.contextType = N.rC;
            const ae = (e) => (e.decidedBy ? n.createElement(l.Z, { style: le.modelVersion }, n.createElement(S.default, { style: [le.icon, le.iconGray] }), n.createElement(o.ZP, { color: "gray700", size: "subtext1", style: le.modelVersionText }, `${W} `, n.createElement(o.ZP, { link: J, size: "subtext1", weight: "normal" }, e.decidedBy))) : null),
                ne = ({ displayUrl: e, isMediaNote: t, isUrlNote: a, mediaNoteCategory: r, mediaNoteMatches: i, mediaNoteUpgradeEnabled: c, originalTweetId: s, ratingStatus: d, rest_id: m, tweetIdForRating: p }) => {
                    const u = d === M.VE.CurrentlyRatedHelpful ? le.iconGreen : le.iconGray;
                    return d && (t || a) && d !== M.VE.CurrentlyRatedNotHelpful ? n.createElement(l.Z, { style: le.impressionSection }, t ? n.createElement(C.default, { style: [le.icon, u] }) : n.createElement(T.default, { style: [le.icon, u] }), n.createElement(l.Z, { style: le.ratingStatusTextSection }, n.createElement(o.ZP, { color: "gray700", size: "body", style: le.ratingStatusText }, (0, D.L)(i, r, d, s, p, m, a, e, c)))) : null;
                },
                le = u.default.create((e) => ({ icon: { height: e.spaces.space16, flexShrink: 0, paddingBottom: e.spaces.space2, paddingEnd: e.spaces.space8, paddingTop: e.spaces.space2, width: e.spaces.space16 }, iconGray: { color: e.colors.gray700 }, iconRed: { color: e.colors.red500 }, iconGreen: { color: e.colors.green500 }, iconYellow: { color: e.colors.yellow500 }, impressionSection: { paddingTop: e.spaces.space8, display: "flex", flexDirection: "row" }, leftPadding: { paddingStart: e.spaces.space24 }, modelVersionText: { paddingTop: e.spaces.space2 }, noteAuthor: { flexDirection: "row" }, noteDetails: { alignItems: "flex-start", display: "flex", paddingHorizontal: e.spaces.space4, paddingTop: e.spaces.space8 }, noteDetailsContainer: { display: "flex", height: "100%" }, noteDetailsContentText: { color: e.colors.gray700, paddingTop: e.spaces.space4 }, noteDetailsSection: { alignItems: "flex-start", padding: e.spaces.space16, paddingTop: e.spaces.space4, width: "100%" }, noteDetailsSectionBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, gap: e.spaces.space4 }, noteDetailsSectionLast: { padding: e.spaces.space20, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space20 }, modelVersion: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, metadata: { display: "flex", flexDirection: "row" }, noteDetailsText: { marginBottom: e.spaces.space4 }, profileText: { textTransform: "capitalize" }, ratingInfoItem: { alignItems: "flex-start", flexDirection: "row", paddingBottom: e.spaces.space4 }, ratingStatusText: { paddingBottom: e.spaces.space4 }, ratingStatusTextSection: { flex: 1, width: "100%" }, ratingTag: { flexDirection: "row", paddingBottom: e.spaces.space4 } })),
                re = te;
        },
        819119: (e, t, a) => {
            a.d(t, { Z: () => w });
            a(136728);
            var n = a(202784),
                l = a(688715),
                r = a(247056),
                i = a(392237),
                o = a(674132),
                c = a.n(o),
                s = a(415506),
                d = a(607127),
                m = a(689582),
                p = a(774426),
                u = a(443781);
            const g = c().d96cf7ce,
                f = c().e272836c,
                h = c().e457970a,
                E = c().da5a5d8c,
                b = c().ccf2f24e,
                y = c().d1e21610,
                w = ({ handleDeleteConfirm: e, handleOpenNoteDetails: t, isOwner: a, note: i, scribeOnClick: o }) => {
                    const { featureSwitches: c } = n.useContext(u.rC),
                        w = () => {
                            const n = c.isTrue("responsive_web_birdwatch_netzdg_enabled"),
                                { birdwatch_profile: r, rest_id: p } = i,
                                u = [];
                            return n && u.push({ text: y, Icon: s.default, link: { pathname: (0, l.ju)(`https://help.x.com/forms/netzwerkdurchsetzungsgesetz?content_type=Community+Note&note_id=${p}`) }, onClick: o("report") }), r?.alias && a && u.push({ confirmation: { label: g, headline: f, text: E, confirmButtonType: "destructiveFilled" }, isEmphasized: !0, text: g, Icon: d.default, onClick: e }), u.push({ text: b, Icon: s.default, link: { pathname: (0, l.ju)(`https://help.x.com/forms/community-note?note_id=${p}`) }, onClick: o("report") }), u.push({ text: h, Icon: m.default, onClick: t }), u;
                        };
                    return n.createElement(r.Z, {
                        renderActionMenu: function (e) {
                            return n.createElement(p.default, { actionItems: w(), onClose: e });
                        },
                        style: Z.caret,
                    });
                },
                Z = i.default.create((e) => ({ caret: { display: "flex", alignSelf: "flex-start", flex: 1, flexBasis: "0%", flexDirection: "row-reverse" } }));
        },
        4076: (e, t, a) => {
            a.d(t, { Q: () => g });
            var n = a(202784),
                l = a(325686),
                r = a(40610),
                i = a(392237),
                o = a(674132),
                c = a.n(o),
                s = a(521058),
                d = a(443781);
            const m = c().a804a8f4,
                p = c().ib9628b8,
                u = { label: c().bf08be2e, link: "/i/birdwatch" };
            function g() {
                const { featureSwitches: e } = n.useContext(d.rC);
                return e.isTrue("responsive_web_birdwatch_note_writing_enabled") ? n.createElement(l.Z, { style: f.rateMoreNotesContainer }, n.createElement(r.Z.Custom, { Icon: s.default, action: u, backgroundColor: "green0", headline: m, text: p })) : null;
            }
            const f = i.default.create((e) => ({ rateMoreNotesContainer: { alignItems: "center", flexDirection: "row", paddingVertical: 0, paddingHorizontal: e.spaces.space12, marginBottom: e.spaces.space12 } }));
        },
        300698: (e, t, a) => {
            a.d(t, { _: () => d });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(730550),
                o = a(933610),
                c = a(539429);
            let s = {};
            const d = ({ hasVisitedEntity: e, isNotePage: t, note: a, setHasVisitedEntity: d, tweetId: m, updateShowSignupPrompt: p }) => {
                const { data_v1: u, rating: g, rating_status: f, rest_id: h } = a;
                g?.data_v1 ? (s.helpfulness_level = g.data_v1.helpful ? i.W.Helpful : i.W.NotHelpful) : (s = g?.data_v2 || {});
                const E = u?.summary?.entities || [];
                return n.createElement(l.Z, null, !t && n.createElement(r.Z, { size: "space12" }), n.createElement(c.Z, { classifiedMisleading: u?.classification === o.pq, hasVisitedEntity: e, note: a, noteHasSources: E.length > 0, noteId: h, noteRatingStatus: f, rating: s, setHasVisitedEntity: d, setShowSignupPrompt: p, tweetId: m, withBorderRadius: !t }));
            };
        },
        584364: (e, t, a) => {
            a.d(t, { w: () => x });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(721266),
                o = a(470397),
                c = a(966886),
                s = a(392237),
                d = a(674132),
                m = a.n(d),
                p = a(453333),
                u = a(293723),
                g = a(227674),
                f = a(136483),
                h = a(531187),
                E = a(452066);
            const b = m().h8335712,
                y = m().b9f18eec,
                w = m().d6db34cc,
                Z = m().eca4e32a,
                _ = m().j33f6520,
                x = ({ createdAt: e, isShownOnTwitter: t, onNoteDetailsClick: a, ownNote: s, ratingStatus: d, shouldShowFastBadge: m }) => {
                    const x = (t, d, m, u = !1) => n.createElement(l.Z, { style: S.ratingStatusContainer, testID: E.Z.ratingStatus }, n.createElement(t, { style: [S.icon, d] }), n.createElement(l.Z, { style: S.statusAndViewMoreContainer }, s ? n.createElement(r.ZP, { size: "subtext2", weight: "bold" }, `${b} · `) : null, n.createElement(r.ZP, { size: "subtext2", weight: "bold" }, m), n.createElement(i.Z, { size: "space8" }), n.createElement(o.Z, { style: S.middot }, e && n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, n.createElement(c.Z, { timestamp: e })), u && n.createElement(p.default, { style: S.iconLightning }), n.createElement(r.ZP, { color: "gray700", onClick: a, size: "subtext2", style: S.detailsLink, withInteractiveStyling: !0, withUnderline: !0 }, Z))));
                    switch (d) {
                        case h.VE.CurrentlyRatedHelpful: {
                            const e = n.createElement(r.ZP, null, y),
                                a = t ? e : y;
                            return x(u.default, S.iconStar, a, m);
                        }
                        case h.VE.CurrentlyRatedNotHelpful:
                            return x(g.default, S.iconRed, _);
                        case h.VE.NeedsMoreRatings: {
                            const e = n.createElement(r.ZP, null, w);
                            return x(f.default, S.iconGray, e);
                        }
                        default:
                            return null;
                    }
                },
                S = s.default.create((e) => ({ middot: { alignItems: "center" }, ratingStatusContainer: { flex: "auto", flexDirection: "row" }, statusAndViewMoreContainer: { flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, iconStar: { color: e.colors.green500, height: e.spaces.space16, paddingEnd: e.spaces.space8, width: e.spaces.space16 }, detailsLink: { cursor: "pointer" }, iconGray: { color: e.colors.gray700 }, iconRed: { color: e.colors.red500 }, iconLightning: { color: e.colors.yellow500, marginTop: e.spaces.space2, height: e.spaces.space16, width: e.spaces.space16, flexShrink: "0" }, infoIcon: { marginBottom: e.spaces.space2, paddingStart: e.spaces.space8, paddingEnd: 0 }, icon: { marginTop: e.spaces.space2, height: e.spaces.space16, paddingEnd: e.spaces.space8, width: e.spaces.space16, flexShrink: "0" } }));
        },
        214748: (e, t, a) => {
            a.d(t, { c: () => p });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(731708),
                o = a(392237),
                c = a(369676),
                s = a(629963),
                d = a(531187),
                m = a(452066);
            function p({ helpful_tags: e, not_helpful_tags: t, rating_status: a }) {
                switch (a) {
                    case d.VE.CurrentlyRatedHelpful:
                        if (2 === e.length) {
                            const [t, a] = e,
                                o = s.z9[t] ?? s.Wh[t],
                                d = s.z9[a] ?? s.Wh[a],
                                p = `${o} · ${d}`;
                            return o && d ? n.createElement(n.Fragment, null, n.createElement(l.Z, { style: u.feedbackTagsContainer }, n.createElement(c.default, { style: u.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: m.Z.helpfulRatingTags }, p)), n.createElement(r.Z, { size: "space4" })) : null;
                        }
                        return null;
                    case d.VE.CurrentlyRatedNotHelpful:
                        if (2 === t.length) {
                            const [e, a] = t,
                                o = s.di[e] ?? s.mo[e],
                                d = s.di[a] ?? s.mo[a],
                                p = `${o} · ${d}`;
                            return o && d ? n.createElement(n.Fragment, null, n.createElement(l.Z, { style: u.feedbackTagsContainer }, n.createElement(c.default, { style: u.icon }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: m.Z.notHelpfulRatingTags }, p)), n.createElement(r.Z, { size: "space4" })) : null;
                        }
                        return null;
                    default:
                        return null;
                }
            }
            const u = o.default.create((e) => ({ feedbackTagsContainer: { flexDirection: "row" }, icon: { flexShrink: "0", height: e.spaces.space16, width: e.spaces.space16, color: e.colors.gray700 } }));
        },
        694461: (e, t, a) => {
            a.d(t, { t: () => u });
            var n = a(202784),
                l = a(325686),
                r = a(721266),
                i = a(731708),
                o = a(392237),
                c = a(674132),
                s = a.n(c),
                d = a(988227),
                m = a(161335),
                p = a(206080);
            s().d5061d00;
            const u = ({ fullyVisibleModel: e, impressionCount: t, isShownOnTwitter: a }) => (a ? n.createElement(l.Z, { style: g.shownStatusContainer }, n.createElement(d.default, { style: [g.icon, g.iconGray] }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, (0, p.b)(t, a, e))) : n.createElement(l.Z, { style: g.shownStatusContainer }, n.createElement(m.default, { style: [g.icon, g.iconGray] }), n.createElement(r.Z, { size: "space8" }), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, p.$))),
                g = o.default.create((e) => ({ shownStatusContainer: { flexDirection: "row", alignItems: "center" }, iconGray: { color: e.colors.gray700 }, iconGreen: { color: e.colors.green500 }, iconRed: { color: e.colors.red500 }, icon: { height: e.spaces.space16, width: e.spaces.space16, flexShrink: "0" } }));
        },
        950492: (e, t, a) => {
            a.d(t, { Z: () => b });
            var n = a(202784),
                l = a(325686),
                r = a(67369),
                i = a(154003),
                o = a(731708),
                c = a(721266),
                s = a(392237),
                d = a(674132),
                m = a.n(d),
                p = a(262754);
            const u = m().idc0e9fc,
                g = m().a83cccfa,
                f = m().a565833e,
                h = (e) => {
                    const t = (0, r.yu)(),
                        a = n.createElement(i.ZP, { link: "/i/flow/join-birdwatch", style: t ? E.buttonNarrow : E.button, type: "primaryFilled" }, f);
                    return n.createElement(l.Z, { style: E.signupContainer }, n.createElement(l.Z, { style: E.signupTopContentContainer }, n.createElement(l.Z, { style: E.signupIconContainer }, n.createElement(p.default, null)), n.createElement(l.Z, { style: E.signupTextContainer }, n.createElement(o.ZP, { weight: "bold" }, u), n.createElement(c.Z, { size: "space8" }), n.createElement(o.ZP, { color: "gray700" }, g), t && n.createElement(c.Z, { size: "space8" })), !t && a), t && a);
                },
                E = s.default.create((e) => ({ signupContainer: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginStart: e.spaces.space12, marginEnd: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, signupTopContentContainer: { flexDirection: "row", marginBottom: e.spaces.space12 }, signupIconContainer: { paddingEnd: e.spaces.space12 }, signupTextContainer: { flexBasis: "0%", flexGrow: 1, flexShrink: 1 }, button: { alignSelf: "flex-start", marginStart: e.spaces.space8 }, buttonNarrow: { alignSelf: "stretch" } })),
                b = n.memo(h);
        },
        606121: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(71620),
                l = a(668214),
                r = a(979090),
                i = a(44836),
                o = a(601576),
                c = a(836255);
            const s = (e, t) => {
                    const a = t.note?.tweet;
                    return a ? c.Z.selectFetchStatus(e, a.rest_id) : void 0;
                },
                d = (0, l.Z)()
                    .propsFromState(() => ({ tweetFetchStatus: s, userAlias: r.OV }))
                    .propsFromActions(() => ({ addToast: o.fz, createAppeal: r.gP, createLocalApiErrorHandler: (0, n.zr)("BIRDWATCH_SCREEN"), deleteNote: i.f, fetchTweet: c.Z.fetchOneIfNeeded, fetchAuthenticatedUserProfileIfNeeded: r.eY, fetchNoteTranslation: r.EW }))
                    .withAnalytics({ component: "birdwatch_note" });
        },
        357972: (e, t, a) => {
            a.d(t, { L: () => c });
            var n = a(202784),
                l = a(731708),
                r = a(674132),
                i = a.n(r),
                o = a(531187);
            const c = (e, t, a, r, c, s, d, m, p) => {
                const u = void 0 === e?.match_count ? 0 : e.match_count,
                    g = !p || !1 !== e?.shoud_show_matches,
                    f = void 0 === r,
                    h = r === c,
                    E = m || "",
                    b = { originalTweetLink: h ? n.createElement(l.ZP, { color: "gray700" }) : n.createElement(l.ZP, { color: "gray700", link: `/i/communitynotes/t/${String(r)}`, withInteractiveStyling: !0, withUnderline: !0 }), mediaMatchesLink: Number(u) > 0 ? n.createElement(l.ZP, { color: "gray700", link: `/i/communitynotes/m/${s}`, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }), displayUrlLink: d ? n.createElement(l.ZP, { color: "blue500", link: E, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }) },
                    y = f ? n.createElement(i().I18NFormatMessage, { $i18n: "g062ed0f" }) : n.createElement(i().I18NFormatMessage, { $i18n: "j4f06e2f" }, n.cloneElement(b.originalTweetLink, null, i().f7427d6f)),
                    w = f ? n.createElement(i().I18NFormatMessage, { $i18n: "ida22561" }) : n.createElement(i().I18NFormatMessage, { $i18n: "g68aa88d" }, n.cloneElement(b.originalTweetLink, null, i().aa94541d)),
                    Z = f ? n.createElement(i().I18NFormatMessage, { $i18n: "ia62f949" }) : n.createElement(i().I18NFormatMessage, { $i18n: "c6eb7cbb" }, n.cloneElement(b.originalTweetLink, null, i().fe821ebb)),
                    _ = f ? n.createElement(i().I18NFormatMessage, { $i18n: "f9b81033" }, n.cloneElement(b.displayUrlLink, null, i().c5cc74e5({ urlNoteDisplayUrl: E }))) : n.createElement(i().I18NFormatMessage, { $i18n: "de254823" }, n.cloneElement(b.originalTweetLink, null, i().ff14b6b8), n.cloneElement(b.displayUrlLink, null, i().b5cc9c47({ urlNoteDisplayUrl: E })));
                if (!1 === g && !d && a === o.VE.CurrentlyRatedHelpful) {
                    if ("SingleVideo" === t) return Number(u) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "de5532bd" }, n.cloneElement(b.mediaMatchesLink, null, i().hb90fe9a({ matches: u }))) : n.createElement(i().I18NFormatMessage, { $i18n: "ib6805bd" });
                    if ("SingleImage" === t) return Number(u) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "g185d44d" }, n.cloneElement(b.mediaMatchesLink, null, i().i23a64ea({ matches: u }))) : n.createElement(i().I18NFormatMessage, { $i18n: "aeebdd99" });
                    if (void 0 === t) return Number(u) > 0 ? n.createElement(i().I18NFormatMessage, { $i18n: "d54bfbd9" }, n.cloneElement(b.mediaMatchesLink, null, i().h6c5af52({ matches: u }))) : n.createElement(i().I18NFormatMessage, { $i18n: "a9efbf0f" });
                }
                return "SingleImage" !== t || Number(u) > 0
                    ? "SingleVideo" !== t || Number(u) > 0
                        ? !d || Number(u) > 0
                            ? Number(u) > 0 && "SingleVideo" === t && a === o.VE.CurrentlyRatedHelpful && !d
                                ? f
                                    ? n.createElement(i().I18NFormatMessage, { $i18n: "jef71e81" }, n.cloneElement(b.mediaMatchesLink, null, i().c2584f58({ matches: u })))
                                    : n.createElement(i().I18NFormatMessage, { $i18n: "ie594609" }, n.cloneElement(b.originalTweetLink, null, i().a0dec723), n.cloneElement(b.mediaMatchesLink, null, i().f20fa57c({ matches: u })))
                                : Number(u) > 0 && "SingleVideo" === t && a !== o.VE.CurrentlyRatedHelpful && !d
                                  ? f
                                      ? n.createElement(i().I18NFormatMessage, { $i18n: "a48e0b6b" }, n.cloneElement(b.mediaMatchesLink, null, i().bd60b152({ matches: u })))
                                      : n.createElement(i().I18NFormatMessage, { $i18n: "a0e626a3" }, n.cloneElement(b.originalTweetLink, null, i().b95920ef), n.cloneElement(b.mediaMatchesLink, null, i().f8dcced2({ matches: u })))
                                  : Number(u) > 0 && "SingleImage" === t && a === o.VE.CurrentlyRatedHelpful && !d
                                    ? f
                                        ? n.createElement(i().I18NFormatMessage, { $i18n: "fcd2eeeb" }, n.cloneElement(b.mediaMatchesLink, null, i().iaf626c0({ matches: u })))
                                        : n.createElement(i().I18NFormatMessage, { $i18n: "j300ac63" }, n.cloneElement(b.originalTweetLink, null, i().e3002eab), n.cloneElement(b.mediaMatchesLink, null, i().df3f2d52({ matches: u })))
                                    : Number(u) > 0 && "SingleImage" === t && a !== o.VE.CurrentlyRatedHelpful && !d
                                      ? f
                                          ? n.createElement(i().I18NFormatMessage, { $i18n: "bf532f23" }, n.cloneElement(b.mediaMatchesLink, null, i().cd83d952({ matches: u })))
                                          : n.createElement(i().I18NFormatMessage, { $i18n: "bda86c55" }, n.cloneElement(b.originalTweetLink, null, i().ia35cd39), n.cloneElement(b.mediaMatchesLink, null, i().a499228a({ matches: u })))
                                      : Number(u) > 0 && void 0 === t && a === o.VE.CurrentlyRatedHelpful && !d
                                        ? f
                                            ? n.createElement(i().I18NFormatMessage, { $i18n: "a13701bd" }, n.cloneElement(b.mediaMatchesLink, null, i().cf9ac658({ matches: u })))
                                            : n.createElement(i().I18NFormatMessage, { $i18n: "e2a0a791" }, n.cloneElement(b.originalTweetLink, null, i().fa56f7cb), n.cloneElement(b.mediaMatchesLink, null, i().b826c19c({ matches: u })))
                                        : Number(u) > 0 && void 0 === t && a !== o.VE.CurrentlyRatedHelpful && !d
                                          ? f
                                              ? n.createElement(i().I18NFormatMessage, { $i18n: "b8e4bb0b" }, n.cloneElement(b.mediaMatchesLink, null, i().c4618eb8({ matches: u })))
                                              : n.createElement(i().I18NFormatMessage, { $i18n: "hada7e59" }, n.cloneElement(b.originalTweetLink, null, i().i56af3fd), n.cloneElement(b.mediaMatchesLink, null, i().g1f275b6({ matches: u })))
                                          : Number(u) > 0 && d && h
                                            ? a === o.VE.CurrentlyRatedHelpful
                                                ? n.createElement(i().I18NFormatMessage, { $i18n: "e8969de9" }, n.cloneElement(b.mediaMatchesLink, null, i().i2cac82c({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().a2ae91f1({ urlNoteDisplayUrl: E })))
                                                : n.createElement(i().I18NFormatMessage, { $i18n: "a389fb7b" }, n.cloneElement(b.mediaMatchesLink, null, i().d3205ee4({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().daeff73b({ urlNoteDisplayUrl: E })))
                                            : Number(u) > 0 && d && !h
                                              ? a === o.VE.CurrentlyRatedHelpful
                                                  ? f
                                                      ? n.createElement(i().I18NFormatMessage, { $i18n: "gd8d8205" }, n.cloneElement(b.mediaMatchesLink, null, i().fc546c2e({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().i1df5f5d({ urlNoteDisplayUrl: E })))
                                                      : n.createElement(i().I18NFormatMessage, { $i18n: "i981a661" }, n.cloneElement(b.originalTweetLink, null, i().g03f5337), n.cloneElement(b.mediaMatchesLink, null, i().f5b30b8a({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().e0a49d5b({ urlNoteDisplayUrl: E })))
                                                  : f
                                                    ? n.createElement(i().I18NFormatMessage, { $i18n: "jceb2edb" }, n.cloneElement(b.mediaMatchesLink, null, i().e25f9fd4({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().bae49ec3({ urlNoteDisplayUrl: E })))
                                                    : n.createElement(i().I18NFormatMessage, { $i18n: "f20a22a1" }, n.cloneElement(b.originalTweetLink, null, i().d595bffd), n.cloneElement(b.mediaMatchesLink, null, i().ef8a55a6({ matches: u })), n.cloneElement(b.displayUrlLink, null, i().a3aa3cb1({ urlNoteDisplayUrl: E })))
                                              : Z
                            : _
                        : w
                    : y;
            };
        },
        206080: (e, t, a) => {
            a.d(t, { $: () => o, b: () => c });
            var n = a(202784),
                l = a(891198),
                r = a(674132),
                i = a.n(r);
            const o = i().d5061d00,
                c = (e, t, a) => {
                    const r = e ? l.ZP.getTruncatedCount(e) : void 0;
                    if (t) {
                        if (!a && r) return n.createElement(i().I18NFormatMessage, { $i18n: "f43e2fdf", impressionTruncated: r });
                        if (!a && !r) return n.createElement(i().I18NFormatMessage, { $i18n: "j72bc9ab" });
                        if (a && r) return n.createElement(i().I18NFormatMessage, { $i18n: "d60e4375", impressionTruncated: r });
                        if (a && !r) return n.createElement(i().I18NFormatMessage, { $i18n: "bf62daf1" });
                    }
                    return o;
                };
        },
        129086: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                l = a(202784),
                r = a(333577),
                i = a(668214),
                o = a(44836);
            const c = (e, t) => {
                    const { noteId: a } = t;
                    return o.Z.select(e, a);
                },
                s = (0, i.Z)().propsFromState(() => ({ note: c }))((e) => {
                    const { note: t, noteData: a, noteId: i, ...o } = e;
                    return a ? l.createElement(r.Z, (0, n.Z)({ note: a }, o)) : t ? l.createElement(r.Z, (0, n.Z)({ note: t }, o)) : null;
                });
        },
        667599: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteMatchScreen: () => A, default: () => W });
            var n = a(807896),
                l = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(457311),
                c = a(392237),
                s = a(167630),
                d = a(674132),
                m = a.n(d),
                p = a(323265),
                u = a(980407),
                g = a(252021),
                f = a(443781),
                h = a(512110),
                E = a(26232),
                b = a(312771),
                y = a(249777),
                w = a(486361),
                Z = a(24949),
                _ = a(71620),
                x = a(668214),
                S = a(979090),
                C = a(302101);
            const T = (e, t) => t.match.params.noteId,
                N = (e, t) => S.Qg(e, T(0, t)),
                I = (e, t) => S.wd(e, T(0, t)),
                k = (0, x.Z)()
                    .propsFromState(() => ({ noteData: N, noteId: T, fetchStatus: I, matchesSlice: (0, Z.P1)(T, (e) => (e ? (0, C.N)(e) : void 0)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("BIRDWATCH_SCREEN"), fetchOneNoteIfNeeded: S.ww })),
                P = m().a5a2330c,
                M = m().ad071b5c,
                D = m().i859a9d4,
                v = m().efd14e7a,
                F = m().a5b19492,
                L = m().b92967c0,
                B = m().i92fddce,
                z = m().f5ce7a00,
                R = () => l.createElement(r.Z, { style: V.emptyStateContainer }, l.createElement(i.ZP, { color: "text", size: "title3", weight: "heavy" }, z)),
                $ = l.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: D, header: F }),
                H = l.createElement(o.Z, { buttonLink: "/i/communitynotes/about", buttonText: D, header: L }),
                A = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneNoteIfNeeded: a, fetchStatus: o, history: c, matchesSlice: s, noteData: d, noteId: m } = e,
                        { featureSwitches: Z } = l.useContext(f.rC);
                    l.useEffect(() => {
                        a(m).catch(t());
                    }, [t, a, m]);
                    const _ = (e) => l.createElement(r.Z, { key: e }, l.createElement(h.ZP, { style: V.pivotTweetContainer, tweetId: e, withActionsDisabled: !1 })),
                        x = d?.is_media_note || !1,
                        S = d?.is_url_note || !1,
                        C = S ? M : P,
                        T = x && Z.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0 ? l.createElement(i.ZP, { size: "subtext3", weight: "medium" }, B) : null,
                        N = () => l.createElement(r.Z, { style: V.container }, d && d.data_v1 ? (x || S ? l.createElement(r.Z, { style: V.sectionContainer }, s ? l.createElement(l.Fragment, null, l.createElement(E.Z, { footer: null, module: s, noItemsRenderer: () => l.createElement(R, null), renderer: _, withoutHeadroom: !0 })) : null) : H) : o === b.ZP.LOADING ? U : $);
                    return (() => {
                        const e = { title: C, subtitle: T, history: c };
                        return p.ZP.isTwitterApp() ? l.createElement(u.Z, (0, n.Z)({ children: N(), hideBackButton: !0 }, e)) : l.createElement(g.Z, (0, n.Z)({ TabBar: w.Z, backLocation: "/i/communitynotes", primaryContent: N(), sidebarContent: l.createElement(y.Z, null), withTweetButton: !1 }, e));
                    })();
                },
                V = c.default.create((e) => ({ container: { marginBottom: e.spaces.space48 }, deletedNotes: { flexDirection: "row" }, deletedIcon: { color: e.colors.gray700, marginEnd: e.spaces.space4 }, feedbackContainer: { paddingHorizontal: "44px" }, icon: { color: e.colors.primary, height: e.spaces.space20, width: e.spaces.space20, marginEnd: e.spaces.space8 }, sectionContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.none }, rateNotesThatNeedHelpText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space8 }, ratingsReceived: { paddingBottom: e.spaces.space4 }, text: { paddingBottom: e.spaces.space8 }, thumbnailIcon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space8 }, dividerContainer: { marginTop: e.spaces.space12 }, emptyStateContainer: { paddingHorizontal: e.spaces.space72 }, spinner: { paddingTop: e.spaces.space80 }, pivotTweetContainer: { marginTop: 0, borderWidth: "none", borderTopWidth: "1px", borderTopColor: e.colors.gray50, borderRadius: "none", boxShadow: "none" } })),
                U = l.createElement(s.Z, { "aria-label": v, size: "large", style: V.spinner }),
                W = k(A);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-dec6592b.d7224dca.js.map
