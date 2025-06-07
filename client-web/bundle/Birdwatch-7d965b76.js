"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-7d965b76"],
    {
        146760: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchAboutScreen: () => O, default: () => _ });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                i = a(593866),
                o = a(154003),
                c = a(721266),
                s = a(392237),
                d = a(111677),
                p = a.n(d),
                u = a(456677),
                m = a(258292),
                g = a(813681),
                b = a(252021),
                f = a(443781),
                h = a(652904),
                y = a(293115),
                E = a(249777),
                Z = a(486361);
            const w = a.p + "birdwatch_banner.d018471a.jpg";
            u.default;
            const S = p().b721eb38,
                x = p().a15648a4,
                C = p().hf68e810,
                v = p().jdb52860,
                T = p().c104025c,
                H = p().j7872b8c,
                P = p().fb59415e,
                R = p().f9a44022,
                k = p().gdf4fbb2,
                N = p().f893c3b8,
                I = p().i859a9d4,
                z = { external: !0, pathname: "https://twitter.github.io/communitynotes" },
                D = { page: "birdwatch", section: "about" },
                O = (e) => {
                    const { history: t } = e,
                        { featureSwitches: a } = n.useContext(f.rC),
                        s = n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [A.header, { backgroundImage: `url(${w})` }] }), n.createElement(r.Z, { style: A.content }, n.createElement(l.ZP, { size: "title4", style: A.textSection, weight: "heavy" }, x), n.createElement(l.ZP, { color: "gray700", style: A.textSection }, C), n.createElement(i.Z, B)), n.createElement(r.Z, { style: A.learnMore }, n.createElement(l.ZP, { link: z }, I)), !a.isTrue("responsive_web_birdwatch_note_writing_enabled") && n.createElement(r.Z, { style: A.buttonContainer }, n.createElement(o.ZP, { "aria-label": N, link: "/i/flow/join-birdwatch", style: A.button, type: "brandFilled" }, N), n.createElement(c.Z, { size: "space64" })));
                    return n.createElement(y.nO, { namespace: D }, n.createElement(h.Z, null, n.createElement(b.Z, { TabBar: Z.Z, history: t, primaryContent: s, sidebarContent: n.createElement(E.Z, null), title: S, withTweetButton: !1 })));
                },
                A = s.default.create((e) => ({ button: { marginTop: e.spaces.space20 }, buttonContainer: { alignItems: "center" }, content: { margin: e.spaces.space20 }, header: { backgroundSize: "cover", backgroundPosition: "50% 50%", height: "167px", justifyContent: "center", width: "100%" }, icon: { backgroundColor: e.colors.primary, color: e.colors.white, borderRadius: e.borderRadii.infinite, height: e.spaces.space16, marginEnd: e.spaces.space12, padding: e.spaces.space8, width: e.spaces.space16 }, infoItemContainer: { paddingHorizontal: 0 }, learnMore: { borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomWidth: e.borderWidths.small, borderTopWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, textSection: { marginBottom: e.spaces.space16 } })),
                B = {
                    "aria-label": S,
                    containerStyle: A.infoItemContainer,
                    items: [
                        { label: v, decoration: n.createElement(u.default, { style: A.icon }), description: T },
                        { label: H, decoration: n.createElement(m.default, { style: A.icon }), description: P },
                        { label: R, decoration: n.createElement(g.default, { style: A.icon }), description: k },
                    ],
                },
                _ = O;
        },
        22730: (e, t, a) => {
            a.d(t, { Z: () => U });
            a(136728);
            var n = a(202784),
                r = a(325686),
                l = a(107267),
                i = a(731708),
                o = a(992942),
                c = a(593866),
                s = a(529356),
                d = a(525754),
                p = a(167630),
                u = a(834324),
                m = a(392237),
                g = a(909377),
                b = a(111677),
                f = a.n(b),
                h = a(281312),
                y = a(956272),
                E = a(795507),
                Z = a(890655),
                w = a(199188);
            const S = a.p + "birdwatch_owl.9e2a175a.png";
            var x = a(71620),
                C = a(668214),
                v = a(979090),
                T = a(601576);
            const H = (0, C.Z)()
                    .propsFromState(() => ({ aliasSelfSelectOptions: v.Bs }))
                    .propsFromActions(() => ({ addToast: T.fz, createLocalApiErrorHandler: (0, x.zr)("BIRDWATCH_SCREEN"), fetchAliasSelfSelectOptions: v.qm, fetchShowAliasSelfSelect: v.aZ, selectAlias: v.Kc }))
                    .withAnalytics({ page: "birdwatch", section: "alias_select" }),
                P = f().eb5b4a12,
                R = f().ja0ee360,
                k = f().f7b7c250,
                N = f().c6382384,
                I = f().j48ab594,
                z = f().bc2399a0,
                D = f().d939cf16,
                O = f().a56f0c32,
                A = f().d17c59e4,
                B = f().i719f8e2,
                _ = f().a96bb564,
                j = f().afcdcf84,
                F = f().g9677c6e,
                L = f().e4a6e006,
                M = f().f83d0446,
                W = (e) => n.createElement(i.ZP, { weight: "bold" }, e),
                V = () => n.createElement(o.Z, { source: S, style: G.image }),
                G = m.default.create((e) => ({ aliasIcon: { marginEnd: e.spaces.space12 }, aliasSelectContainer: { paddingVertical: e.spaces.space16 }, aliasSubtext: { paddingTop: e.spaces.space8 }, icon: { color: e.colors.primary, marginEnd: e.spaces.space20 }, image: { height: "125px", width: "125px" }, infoItemContainer: { paddingHorizontal: 0 }, optionContainer: { color: e.colors.text, paddingStart: 0, textTransform: "capitalize" }, subtextContainer: { paddingTop: e.spaces.space12 }, values: { color: e.colors.text, textAlign: "start", width: "100%" } })),
                q = n.createElement(g.Z, { Icon: h.default, color: "neutral", size: "large", style: G.aliasIcon }),
                K = {
                    "aria-label": P,
                    containerStyle: G.infoItemContainer,
                    items: [
                        { label: W(I), decoration: n.createElement(h.default, { style: G.icon }), description: z },
                        { label: W(D), decoration: n.createElement(y.default, { style: G.icon }), description: O },
                        { label: W(A), decoration: n.createElement(E.default, { style: G.icon }), description: B },
                    ],
                },
                U = H((e) => {
                    const { addToast: t, aliasSelfSelectOptions: a, createLocalApiErrorHandler: o, fetchAliasSelfSelectOptions: m, fetchShowAliasSelfSelect: g, selectAlias: b } = e,
                        [f, h] = n.useState(!0),
                        [y, E] = n.useState(""),
                        [S, x] = n.useState(!1),
                        [C, v] = n.useState(!1),
                        T = (0, l.useHistory)(),
                        H = () => {
                            g();
                        };
                    n.useEffect(() => {
                        m()
                            .then((e) => {
                                e && e[0] ? E(e[0]) : x(!0);
                            })
                            .catch(o());
                    }, [o, m]);
                    const P = n.createElement(i.ZP, { color: "text", link: "https://twitter.github.io/communitynotes/aliases/", withUnderline: !0 }, N),
                        I = n.createElement(r.Z, { style: G.values }, n.createElement(c.Z, K)),
                        z = n.createElement(s.Z, {
                            actionLabel: R,
                            footer: P,
                            graphic: V,
                            graphicDisplayMode: "illustration",
                            headline: k,
                            isFullHeightOnMobile: !0,
                            onAction: () => {
                                h(!1);
                            },
                            subtext: I,
                        }),
                        D = n.useCallback(
                            (e, t) => {
                                E(t);
                            },
                            [E],
                        ),
                        O = n.createElement(
                            r.Z,
                            null,
                            n.createElement(i.ZP, { style: G.aliasSubtext }, j),
                            a
                                ? n.createElement(
                                      r.Z,
                                      { style: G.aliasSelectContainer },
                                      n.createElement(d.Z, {
                                          name: "example",
                                          onChange: D,
                                          options: ((e) => {
                                              const t = [];
                                              return (
                                                  e.forEach((e) => {
                                                      t.push({ containerStyle: G.optionContainer, label: (0, Z.Q)(e), value: e, decoration: q });
                                                  }),
                                                  t
                                              );
                                          })(a),
                                          value: y,
                                      }),
                                  )
                                : n.createElement(p.Z, null),
                            S ? n.createElement(u.Z, { text: L, type: "danger" }) : void 0,
                        ),
                        A = n.createElement(s.Z, {
                            actionLabel: F,
                            footer: P,
                            graphicDisplayMode: "none",
                            headline: _,
                            isFullHeightOnMobile: !0,
                            onAction: () => {
                                y &&
                                    b(y)
                                        .then((e) => {
                                            "Done" === e.authenticated_user_birdwatch_alias_self_selection_put ? (v(!0), t({ text: M, withClearButton: !0 })) : x(!0);
                                        })
                                        .catch((e) => {
                                            o({ defaultToast: { text: L, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e);
                                        });
                            },
                            subtext: O,
                        });
                    return C ? n.createElement(w.Z, { history: T, onDone: H }) : f ? z : A;
                });
        },
        126089: (e, t, a) => {
            a.d(t, { K: () => A, h: () => x });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                i = a(593866),
                o = a(154003),
                c = a(392237),
                s = a(111677),
                d = a.n(s),
                p = a(81327),
                u = a(155576),
                m = a(736430);
            const g = d().b9793c9a,
                b = d().bed66f92,
                f = d().a3ca686a,
                h = d().ga8034c6,
                y = d().h4109636,
                E = d().ec30e9ac,
                Z = d().e0c42f80,
                w = d().ife4baaa,
                S = d().a0c552ee,
                x = ({ decorationStyle: e } = {}) => ({
                    items: [
                        { label: (0, m.Z)({ label: h }), description: y, decoration: n.createElement(u.Z, { content: 1, style: e }) },
                        { label: (0, m.Z)({ label: E }), decoration: n.createElement(u.Z, { content: 2, style: e }) },
                        { label: (0, m.Z)({ label: Z }), description: w, decoration: n.createElement(u.Z, { content: 3, style: e }) },
                        { label: (0, m.Z)({ label: S }), decoration: n.createElement(u.Z, { content: 4, style: e }) },
                    ],
                }),
                C = { title: g, subtitle: b, ctaButtonLabel: f, ctaLink: "https://twitter.github.io/communitynotes/examples/", infoGroupProps: x() },
                v = d().a4e5ea3c,
                T = d().bed66f92,
                H = d().g9a28bde,
                P = d().dc0046e2,
                R = d().fecae168,
                k = d().h525e29e,
                N = d().f6db7706,
                I = d().f636b582,
                z = d().f58f4f62,
                D = d().a0c552ee,
                O = {
                    title: v,
                    subtitle: T,
                    ctaLink: "/i/birdwatch",
                    ctaButtonLabel: H,
                    infoGroupProps: {
                        items: [
                            { label: (0, m.Z)({ label: P }), description: R, decoration: n.createElement(u.Z, { content: 1 }) },
                            { label: (0, m.Z)({ label: k }), description: N, decoration: n.createElement(u.Z, { content: 2 }) },
                            { label: (0, m.Z)({ label: I }), description: z, decoration: n.createElement(u.Z, { content: 3 }) },
                            { label: (0, m.Z)({ label: D }), decoration: n.createElement(u.Z, { content: 4 }) },
                        ],
                    },
                },
                A = ({ badgeType: e }) => {
                    const t = e === p.n.Ratings ? O : C,
                        { ctaButtonLabel: a, ctaLink: c, infoGroupProps: s, subtitle: d, title: u } = t;
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { style: B.emptyStateHeaderContainer }, n.createElement(l.ZP, { color: "text", size: "title2", weight: "heavy" }, u), n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, d)), n.createElement(i.Z, s), n.createElement(r.Z, { style: B.emptyStateButtonContainer }, n.createElement(o.ZP, { alignContent: "center", link: c, type: "brandOutlined" }, n.createElement(l.ZP, { color: "text" }, a))));
                },
                B = c.default.create((e) => ({ emptyStateButtonContainer: { paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space40 }, emptyStateHeaderContainer: { paddingHorizontal: e.spaces.space32, gap: e.spaces.space12, paddingTop: e.spaces.space32, paddingBottom: e.spaces.space32 } }));
        },
        155576: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                l = a(731708);
            const i = ({ content: e, style: t }) => n.createElement(r.Z, { style: [o.decorationContainer, t] }, n.createElement(l.ZP, { align: "center", color: "text", size: "subtext2", weight: "bold" }, e)),
                o = a(392237).default.create((e) => ({ decorationContainer: { marginEnd: e.spaces.space20, backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, height: e.spaces.space28, width: e.spaces.space28, justifyContent: "center", overflow: "hidden" } })),
                c = n.memo(i);
        },
        736430: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(731708);
            const l = ({ label: e }) => n.createElement(r.ZP, { size: "headline2", weight: "bold" }, e);
        },
        75090: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(834324),
                l = a(111677),
                i = a.n(l),
                o = a(500040);
            const c = i().g97a2d6c,
                s = i().cf30af22,
                d = i().d145b0fa,
                p = { label: c, link: "https://twitter.github.io/communitynotes/diversity/" },
                u = () => n.createElement(r.Z, { Icon: o.default, action: p, headline: s, text: d, type: "primary" });
        },
        89620: (e, t, a) => {
            a.d(t, { x: () => ne });
            var n = a(807896),
                r = a(202784),
                l = a(138099),
                i = a(81327),
                o = a(111677),
                c = a.n(o);
            const s = (e) => Object.fromEntries(Object.entries(e).map(([e, t], a) => [e, String(t)])),
                d = c().b3de4a42,
                p = c().e25f9ad6,
                u = c().a0697fbc,
                m = c().a3311a60,
                g = c().bbc44f5a,
                b = c().b4f21858,
                f = c().d46b6bc8,
                h = c().a5e6ba6a,
                y = c().a22929e4,
                E = c().b76dd726,
                Z = c().j29cc0f2,
                w = c().cd4333d0,
                S = c().b5334780,
                x = c().e9fa53ac,
                C = c().fc664dee,
                v = c().f024ec64,
                T = c().e1ee08e6,
                H = c().je3fc324,
                P = c().f7358242,
                R = c().j8e9b514,
                k = c().e9e57c5c,
                N = c().fee0d8a8,
                I = c().iab44364,
                z = c().d8c90438,
                D = c().accaa48e,
                O = c().fa2156f6,
                A = c().d004c768,
                B = c().f3d6d6c0;
            var _ = a(325686),
                j = a(67369),
                F = a(731708),
                L = a(966886),
                M = a(370006),
                W = a(661810),
                V = a(392237),
                G = a(121791),
                q = a(126089),
                K = a(75090);
            const U = (e) => {
                    const { score: t, subtitle: a, title: n, scoreType: l = i.D.Positive } = e,
                        o = a?.split("\n"),
                        c = { [i.D.Positive]: { style: $.scorePositive, prefix: "+" }, [i.D.Negative]: { style: $.scoreNegative, prefix: "-" }, [i.D.Neutral]: { style: $.scoreNeutral, prefix: "" } },
                        s = c[l].prefix,
                        d = c[l].style;
                    return r.createElement(
                        _.Z,
                        { style: $.scoreDetailsContainer },
                        r.createElement(
                            _.Z,
                            { style: $.scoreDetailLeft },
                            r.createElement(_.Z, { style: $.scoreNumberAndBadgeWrapper }, r.createElement(F.ZP, { color: "text", size: "title4", style: d, weight: "heavy" }, s, t), n === h && r.createElement(_.Z, { style: $.label }, r.createElement(F.ZP, { align: "center", color: "red500", weight: "heavy" }, "×2"))),
                            r.createElement(_.Z, { style: $.scoreHeaderTitle }, r.createElement(F.ZP, { "aria-level": 2, color: "text", role: "heading", weight: "medium" }, n)),
                            o?.map((e, t) => r.createElement(F.ZP, { color: "gray700", key: t, size: "subtext2" }, e)),
                        ),
                    );
                },
                $ = V.default.create((e) => ({ scoreDetailsContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, scorePositive: { color: e.colors.green500 }, scoreNegative: { color: e.colors.red500 }, scoreNeutral: { color: e.colors.gray700 }, scoreStyle: { alignSelf: "flex-start" }, scoreHeaderTitle: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, scoreDetailLeft: { flex: 1, gap: e.spaces.space8 }, label: { backgroundColor: e.colors.red0, color: e.colors.buttonAlwaysWhite, alignSelf: "auto", borderRadius: e.borderRadii.xSmall, height: e.spaces.space24, width: e.spaces.space32, justifyContent: "center" }, scoreNumberAndBadgeWrapper: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } })),
                Q = c().d68a370c,
                J = c().f10aaf3c,
                X = Object.freeze({ Hidden: "Hidden", Ratings: "Rating", Note: "Note" }),
                Y = ({ badgeType: e, enrollmentState: t, handleClose: a, headerScore: n, headerText: l, isOwnProfile: o, negativeRatings: s, otherRatings: d, positiveRatings: p, successfulRatingsNeededToEarnIn: u, updatedTime: m }) => {
                    const g = (0, j.GS)(),
                        b = Number(n) >= 0 ? n : "-",
                        f = (e) => "0" === e.score,
                        h = p.every(f) && s.every(f) && d.every(f);
                    let y = X.Hidden;
                    o && h && (y = e === i.n.Ratings ? X.Ratings : X.Note);
                    const E = [[{ ratings: p, scoreType: i.D.Positive }], [{ ratings: s, scoreType: i.D.Negative }], [{ ratings: d, scoreType: i.D.Neutral }]].map(([{ ratings: e, scoreType: t }]) => e.map((e, a) => r.createElement(r.Fragment, { key: a }, r.createElement(U, { score: e.score, scoreType: t, subtitle: e.subtitle, title: e.title })))),
                        Z = r.createElement(r.Fragment, null, r.createElement(_.Z, { style: ee.headerSummary }, r.createElement(F.ZP, { color: "gray1100", size: "title1", weight: "heavy" }, b), r.createElement(F.ZP, { "aria-level": 1, color: "text", role: "heading", size: "body", weight: "bold" }, l), m && r.createElement(F.ZP, { color: "gray700", size: "subtext3" }, Q, r.createElement(L.Z, { color: "gray700", cutoff: "years", humanReadable: !0, timestamp: m }))));
                    let w = null;
                    o && e === i.n.Ratings && u && ("EarnedOutAcknowledged" === t ? (w = r.createElement(c().I18NFormatMessage, { $i18n: "ccdfbd75", requiredRatingImpact: u })) : "NewUser" === t && (w = r.createElement(_.Z, { style: ee.enrollmentStateTextContainer }, r.createElement(c().I18NFormatMessage, { $i18n: "a32c38ad", requiredRatingImpact: u }), r.createElement(F.ZP, { color: "buttonBlack", link: "https://twitter.github.io/communitynotes/examples/", size: "subtext1", weight: "bold", withUnderline: !0 }, J))));
                    const S = w ? r.createElement(r.Fragment, null, r.createElement(_.Z, { style: ee.earnOutSection }, r.createElement(_.Z, { style: ee.earnOutContent }, r.createElement(G.default, { style: ee.lockIcon }), r.createElement(F.ZP, { size: "subtext1" }, w)))) : null;
                    return r.createElement(r.Fragment, null, r.createElement(_.Z, { style: ee.topWrapper }, r.createElement(_.Z, { style: ee.backButton }, r.createElement(M.Z, { backButtonType: "close", onClick: a })), Z), y !== X.Hidden ? r.createElement(q.K, { badgeType: e }) : r.createElement(r.Fragment, null, S, r.createElement(_.Z, { style: ee.scoreDetailsContainer }, E, r.createElement(K.Z, null)), g && r.createElement(W.Z, { spacing: "space1" })));
                },
                ee = V.default.create((e) => ({ topWrapper: { backgroundColor: e.colors.gray0 }, headerSummary: { gap: e.spaces.space8, paddingVertical: e.spaces.space40, textAlign: "center" }, backButton: { position: "absolute", marginStart: e.spaces.space24, marginTop: e.spaces.space12, zIndex: 2 }, scoreDetailsContainer: { padding: e.spaces.space32, gap: e.spaces.space20 }, earnOutSection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space20, width: "100%" }, earnOutContent: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadiiPx.medium, flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, lockIcon: { color: e.colors.text, paddingEnd: e.spaces.space8 }, enrollmentStateTextContainer: { flexDirection: "column", justifyContent: "space-between" } })),
                te = { ratingImpact: 0, ratingsHelpful: 0, ratingsNotHelpful: 0, contrastingNotHelpfulRatingsOnHelpfulNotes: 0, contrastingHelpfulRatingsOnNotHelpfulNotes: 0, pending: 0, ratingsAfterStatusReached: 0 },
                ae = { writingImpact: 0, ratingsHelpful: 0, ratingsNotHelpful: 0, pending: 0 },
                ne = (e) => {
                    const { badgeType: t, enrollmentState: a, isOwnProfile: o, onClose: c, ratingScores: _, successfulRatingsNeededToEarnIn: j, writingScores: F } = e,
                        L = void 0 === _?.ratingsHelpful ? te : _,
                        M = void 0 === F?.ratingsHelpful ? ae : F,
                        W = r.useMemo(() => {
                            const e = { isOwnProfile: o, handleClose: c, badgeType: t, successfulRatingsNeededToEarnIn: j, enrollmentState: a };
                            if (t === i.n.Ratings && L) {
                                const t = (({ isOwnProfile: e, ratingScores: t }) => {
                                    const a = s(t),
                                        n = t.updatedTime;
                                    let r = g;
                                    "0" !== a.ratingsHelpful && (r = e ? u : m);
                                    const l = e ? w + E : E;
                                    return {
                                        headerScore: a.ratingImpact,
                                        headerText: d,
                                        updatedTime: n,
                                        positiveRatings: [
                                            { subtitle: r, score: a.ratingsHelpful, title: p },
                                            { subtitle: f, score: a.ratingsNotHelpful, title: b },
                                        ],
                                        negativeRatings: [
                                            { title: y, subtitle: l, score: a.contrastingNotHelpfulRatingsOnHelpfulNotes },
                                            { subtitle: Z, score: a.contrastingHelpfulRatingsOnNotHelpfulNotes, title: h },
                                        ],
                                        otherRatings: [
                                            { subtitle: x, score: a.pending, title: S },
                                            { subtitle: v, score: a.ratingsAfterStatusReached, title: C },
                                        ],
                                    };
                                })({ isOwnProfile: o, ratingScores: L });
                                return r.createElement(Y, (0, n.Z)({}, t, e));
                            }
                            if (M) {
                                const t = (({ isOwnProfile: e, writingScores: t }) => {
                                    const a = s(t),
                                        n = t.updatedTime,
                                        r = e ? H : P;
                                    let l = N;
                                    "0" !== a.ratingsHelpful && (l = e ? R : k);
                                    const i = e ? I : z,
                                        o = e ? D : O;
                                    return { headerScore: a.writingImpact, headerText: T, updatedTime: n, positiveRatings: [{ subtitle: l, score: a.ratingsHelpful, title: r }], negativeRatings: [{ subtitle: o, score: a.ratingsNotHelpful, title: i }], otherRatings: [{ subtitle: B, score: a.pending, title: A }] };
                                })({ isOwnProfile: o, writingScores: M });
                                return r.createElement(Y, (0, n.Z)({}, t, e));
                            }
                        }, [o, c, t, j, L, M, a]);
                    return r.createElement(l.Z, { allowBackNavigation: !0, children: W, enableMaskForDismiss: !0, onMaskClick: c, type: "full", withMask: !0 });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-7d965b76.8f38a1ca.js.map
