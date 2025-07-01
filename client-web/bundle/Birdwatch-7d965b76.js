"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-7d965b76"],
    {
        146760: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchAboutScreen: () => R, default: () => O });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                l = a(593866),
                i = a(154003),
                c = a(721266),
                s = a(392237),
                d = a(111677),
                p = a.n(d),
                m = a(456677),
                u = a(258292),
                g = a(813681),
                b = a(252021),
                f = a(443781),
                h = a(652904),
                y = a(293115),
                E = a(249777),
                Z = a(486361);
            const w = a.p + "birdwatch_banner.d018471a.jpg";
            m.default;
            const C = p().b721eb38,
                S = p().a15648a4,
                x = p().hf68e810,
                T = p().jdb52860,
                P = p().c104025c,
                v = p().j7872b8c,
                H = p().fb59415e,
                _ = p().f9a44022,
                I = p().gdf4fbb2,
                k = p().f893c3b8,
                B = p().i859a9d4,
                D = { external: !0, pathname: "https://twitter.github.io/communitynotes" },
                N = { page: "birdwatch", section: "about" },
                R = (e) => {
                    const { history: t } = e,
                        { featureSwitches: a } = n.useContext(f.rC),
                        s = n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [z.header, { backgroundImage: `url(${w})` }] }), n.createElement(r.Z, { style: z.content }, n.createElement(o.ZP, { size: "title4", style: z.textSection, weight: "heavy" }, S), n.createElement(o.ZP, { color: "gray700", style: z.textSection }, x), n.createElement(l.Z, A)), n.createElement(r.Z, { style: z.learnMore }, n.createElement(o.ZP, { link: D }, B)), !a.isTrue("responsive_web_birdwatch_note_writing_enabled") && n.createElement(r.Z, { style: z.buttonContainer }, n.createElement(i.ZP, { "aria-label": k, link: "/i/flow/join-birdwatch", style: z.button, type: "brandFilled" }, k), n.createElement(c.Z, { size: "space64" })));
                    return n.createElement(y.nO, { namespace: N }, n.createElement(h.Z, null, n.createElement(b.Z, { TabBar: Z.Z, history: t, primaryContent: s, sidebarContent: n.createElement(E.Z, null), title: C, withTweetButton: !1 })));
                },
                z = s.default.create((e) => ({ button: { marginTop: e.spaces.space20 }, buttonContainer: { alignItems: "center" }, content: { margin: e.spaces.space20 }, header: { backgroundSize: "cover", backgroundPosition: "50% 50%", height: "167px", justifyContent: "center", width: "100%" }, icon: { backgroundColor: e.colors.primary, color: e.colors.white, borderRadius: e.borderRadii.infinite, height: e.spaces.space16, marginEnd: e.spaces.space12, padding: e.spaces.space8, width: e.spaces.space16 }, infoItemContainer: { paddingHorizontal: 0 }, learnMore: { borderColor: e.colors.borderColor, borderStyle: "solid", borderBottomWidth: e.borderWidths.small, borderTopWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, textSection: { marginBottom: e.spaces.space16 } })),
                A = {
                    "aria-label": C,
                    containerStyle: z.infoItemContainer,
                    items: [
                        { label: T, decoration: n.createElement(m.default, { style: z.icon }), description: P },
                        { label: v, decoration: n.createElement(u.default, { style: z.icon }), description: H },
                        { label: _, decoration: n.createElement(g.default, { style: z.icon }), description: I },
                    ],
                },
                O = R;
        },
        962128: (e, t, a) => {
            a.d(t, { Z: () => re });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(107267),
                l = a(731708),
                i = a(992942),
                c = a(593866),
                s = a(529356),
                d = a(525754),
                p = a(167630),
                m = a(834324),
                u = a(392237),
                g = a(909377),
                b = a(111677),
                f = a.n(b),
                h = a(281312),
                y = a(956272),
                E = a(795507),
                Z = a(890655),
                w = a(121791),
                C = a(652904),
                S = a(293115);
            const x = a.p + "earn-in.6f6b12fa.png",
                T = f().ed0e6b2e,
                P = f().if4c5e06,
                v = f().b772cd66,
                H = () => n.createElement(i.Z, { source: x, style: I.image }),
                _ = { page: "birdwatch", component: "earn_in_education" },
                I = u.default.create((e) => ({ container: { paddingBottom: e.spaces.space24 }, headlineContainer: { marginBottom: e.spaces.space12 }, icon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space20 }, image: { height: "227px", width: "100%" }, infoItemBadge: { backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, height: e.spaces.space32, justifyContent: "center", marginEnd: e.spaces.space20, overflow: "hidden", width: e.spaces.space32 }, infoItemContainer: { paddingHorizontal: 0 } })),
                k = (e) => {
                    const { history: t, onDone: a } = e,
                        o = (e) => n.createElement(r.Z, { style: I.infoItemBadge }, n.createElement(l.ZP, { align: "center", color: "white", weight: "bold" }, e)),
                        i = n.createElement(g.Z, { Icon: w.default, size: "large", style: I.icon }),
                        d = {
                            "aria-label": "Welcome to Community Notes",
                            containerStyle: I.infoItemContainer,
                            items: [
                                { label: f().g880a78a, decoration: o(1), description: f().d1be2236 },
                                { label: f().af9f2b78, decoration: o(2), description: f().af68afc8 },
                                { label: f().fb5c5d42, decoration: i, description: f().a1e58cdc },
                            ],
                        },
                        p = n.createElement(r.Z, { style: I.container }, n.createElement(c.Z, d)),
                        m = n.useCallback(() => {
                            t.push("/i/birdwatch");
                        }, [t]);
                    return n.createElement(S.nO, { namespace: _ }, n.createElement(C.Z, null, n.createElement(s.Z, { actionLabel: T, children: p, contentStyle: I.headlineContainer, graphic: H, graphicDisplayMode: "illustrationFullWidth", headline: P, isFullHeightOnMobile: !0, onAction: m, onSecondaryAction: a, secondaryActionLabel: v, subtext: null, withBottomPadding: !1 })));
                },
                B = a.p + "birdwatch_owl.9e2a175a.png";
            var D = a(71620),
                N = a(668214),
                R = a(979090),
                z = a(601576);
            const A = (0, N.Z)()
                    .propsFromState(() => ({ aliasSelfSelectOptions: R.Bs }))
                    .propsFromActions(() => ({ addToast: z.fz, createLocalApiErrorHandler: (0, D.zr)("BIRDWATCH_SCREEN"), fetchAliasSelfSelectOptions: R.qm, fetchShowAliasSelfSelect: R.aZ, selectAlias: R.Kc }))
                    .withAnalytics({ page: "birdwatch", section: "alias_select" }),
                O = f().eb5b4a12,
                F = f().ja0ee360,
                L = f().f7b7c250,
                j = f().c6382384,
                W = f().j48ab594,
                M = f().bc2399a0,
                V = f().d939cf16,
                $ = f().a56f0c32,
                G = f().d17c59e4,
                q = f().i719f8e2,
                U = f().a96bb564,
                K = f().afcdcf84,
                Q = f().g9677c6e,
                Y = f().e4a6e006,
                J = f().f83d0446,
                X = (e) => n.createElement(l.ZP, { weight: "bold" }, e),
                ee = () => n.createElement(i.Z, { source: B, style: te.image }),
                te = u.default.create((e) => ({ aliasIcon: { marginEnd: e.spaces.space12 }, aliasSelectContainer: { paddingVertical: e.spaces.space16 }, aliasSubtext: { paddingTop: e.spaces.space8 }, icon: { color: e.colors.primary, marginEnd: e.spaces.space20 }, image: { height: "125px", width: "125px" }, infoItemContainer: { paddingHorizontal: 0 }, optionContainer: { color: e.colors.text, paddingStart: 0, textTransform: "capitalize" }, subtextContainer: { paddingTop: e.spaces.space12 }, values: { color: e.colors.text, textAlign: "start", width: "100%" } })),
                ae = n.createElement(g.Z, { Icon: h.default, color: "neutral", size: "large", style: te.aliasIcon }),
                ne = {
                    "aria-label": O,
                    containerStyle: te.infoItemContainer,
                    items: [
                        { label: X(W), decoration: n.createElement(h.default, { style: te.icon }), description: M },
                        { label: X(V), decoration: n.createElement(y.default, { style: te.icon }), description: $ },
                        { label: X(G), decoration: n.createElement(E.default, { style: te.icon }), description: q },
                    ],
                },
                re = A((e) => {
                    const { addToast: t, aliasSelfSelectOptions: a, createLocalApiErrorHandler: i, fetchAliasSelfSelectOptions: u, fetchShowAliasSelfSelect: g, selectAlias: b } = e,
                        [f, h] = n.useState(!0),
                        [y, E] = n.useState(""),
                        [w, C] = n.useState(!1),
                        [S, x] = n.useState(!1),
                        T = (0, o.useHistory)(),
                        P = () => {
                            g();
                        };
                    n.useEffect(() => {
                        u()
                            .then((e) => {
                                e && e[0] ? E(e[0]) : C(!0);
                            })
                            .catch(i());
                    }, [i, u]);
                    const v = n.createElement(l.ZP, { color: "text", link: "https://twitter.github.io/communitynotes/aliases/", withUnderline: !0 }, j),
                        H = n.createElement(r.Z, { style: te.values }, n.createElement(c.Z, ne)),
                        _ = n.createElement(s.Z, {
                            actionLabel: F,
                            footer: v,
                            graphic: ee,
                            graphicDisplayMode: "illustration",
                            headline: L,
                            isFullHeightOnMobile: !0,
                            onAction: () => {
                                h(!1);
                            },
                            subtext: H,
                        }),
                        I = n.useCallback(
                            (e, t) => {
                                E(t);
                            },
                            [E],
                        ),
                        B = n.createElement(
                            r.Z,
                            null,
                            n.createElement(l.ZP, { style: te.aliasSubtext }, K),
                            a
                                ? n.createElement(
                                      r.Z,
                                      { style: te.aliasSelectContainer },
                                      n.createElement(d.Z, {
                                          name: "example",
                                          onChange: I,
                                          options: ((e) => {
                                              const t = [];
                                              return (
                                                  e.forEach((e) => {
                                                      t.push({ containerStyle: te.optionContainer, label: (0, Z.Q)(e), value: e, decoration: ae });
                                                  }),
                                                  t
                                              );
                                          })(a),
                                          value: y,
                                      }),
                                  )
                                : n.createElement(p.Z, null),
                            w ? n.createElement(m.Z, { text: Y, type: "danger" }) : void 0,
                        ),
                        D = n.createElement(s.Z, {
                            actionLabel: Q,
                            footer: v,
                            graphicDisplayMode: "none",
                            headline: U,
                            isFullHeightOnMobile: !0,
                            onAction: () => {
                                y &&
                                    b(y)
                                        .then((e) => {
                                            "Done" === e.authenticated_user_birdwatch_alias_self_selection_put ? (x(!0), t({ text: J, withClearButton: !0 })) : C(!0);
                                        })
                                        .catch((e) => {
                                            i({ defaultToast: { text: Y, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e);
                                        });
                            },
                            subtext: B,
                        });
                    return S ? n.createElement(k, { history: T, onDone: P }) : f ? _ : D;
                });
        },
        126089: (e, t, a) => {
            a.d(t, { K: () => z, h: () => S });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                l = a(593866),
                i = a(154003),
                c = a(392237),
                s = a(111677),
                d = a.n(s),
                p = a(81327),
                m = a(155576),
                u = a(736430);
            const g = d().b9793c9a,
                b = d().bed66f92,
                f = d().a3ca686a,
                h = d().ga8034c6,
                y = d().h4109636,
                E = d().ec30e9ac,
                Z = d().e0c42f80,
                w = d().ife4baaa,
                C = d().a0c552ee,
                S = ({ decorationStyle: e } = {}) => ({
                    items: [
                        { label: (0, u.Z)({ label: h }), description: y, decoration: n.createElement(m.Z, { content: 1, style: e }) },
                        { label: (0, u.Z)({ label: E }), decoration: n.createElement(m.Z, { content: 2, style: e }) },
                        { label: (0, u.Z)({ label: Z }), description: w, decoration: n.createElement(m.Z, { content: 3, style: e }) },
                        { label: (0, u.Z)({ label: C }), decoration: n.createElement(m.Z, { content: 4, style: e }) },
                    ],
                }),
                x = { title: g, subtitle: b, ctaButtonLabel: f, ctaLink: "https://twitter.github.io/communitynotes/examples/", infoGroupProps: S() },
                T = d().a4e5ea3c,
                P = d().bed66f92,
                v = d().g9a28bde,
                H = d().dc0046e2,
                _ = d().fecae168,
                I = d().h525e29e,
                k = d().f6db7706,
                B = d().f636b582,
                D = d().f58f4f62,
                N = d().a0c552ee,
                R = {
                    title: T,
                    subtitle: P,
                    ctaLink: "/i/birdwatch",
                    ctaButtonLabel: v,
                    infoGroupProps: {
                        items: [
                            { label: (0, u.Z)({ label: H }), description: _, decoration: n.createElement(m.Z, { content: 1 }) },
                            { label: (0, u.Z)({ label: I }), description: k, decoration: n.createElement(m.Z, { content: 2 }) },
                            { label: (0, u.Z)({ label: B }), description: D, decoration: n.createElement(m.Z, { content: 3 }) },
                            { label: (0, u.Z)({ label: N }), decoration: n.createElement(m.Z, { content: 4 }) },
                        ],
                    },
                },
                z = ({ badgeType: e }) => {
                    const t = e === p.n.Ratings ? R : x,
                        { ctaButtonLabel: a, ctaLink: c, infoGroupProps: s, subtitle: d, title: m } = t;
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { style: A.emptyStateHeaderContainer }, n.createElement(o.ZP, { color: "text", size: "title2", weight: "heavy" }, m), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, d)), n.createElement(l.Z, s), n.createElement(r.Z, { style: A.emptyStateButtonContainer }, n.createElement(i.ZP, { alignContent: "center", link: c, type: "brandOutlined" }, n.createElement(o.ZP, { color: "text" }, a))));
                },
                A = c.default.create((e) => ({ emptyStateButtonContainer: { paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space40 }, emptyStateHeaderContainer: { paddingHorizontal: e.spaces.space32, gap: e.spaces.space12, paddingTop: e.spaces.space32, paddingBottom: e.spaces.space32 } }));
        },
        155576: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                o = a(731708);
            const l = ({ content: e, style: t }) => n.createElement(r.Z, { style: [i.decorationContainer, t] }, n.createElement(o.ZP, { align: "center", color: "text", size: "subtext2", weight: "bold" }, e)),
                i = a(392237).default.create((e) => ({ decorationContainer: { marginEnd: e.spaces.space20, backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, height: e.spaces.space28, width: e.spaces.space28, justifyContent: "center", overflow: "hidden" } })),
                c = n.memo(l);
        },
        736430: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                r = a(731708);
            const o = ({ label: e }) => n.createElement(r.ZP, { size: "headline2", weight: "bold" }, e);
        },
        75090: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(834324),
                o = a(111677),
                l = a.n(o),
                i = a(500040);
            const c = l().g97a2d6c,
                s = l().cf30af22,
                d = l().d145b0fa,
                p = { label: c, link: "https://twitter.github.io/communitynotes/diversity/" },
                m = () => n.createElement(r.Z, { Icon: i.default, action: p, headline: s, text: d, type: "primary" });
        },
        89620: (e, t, a) => {
            a.d(t, { x: () => ne });
            var n = a(807896),
                r = a(202784),
                o = a(138099),
                l = a(81327),
                i = a(111677),
                c = a.n(i);
            const s = (e) => Object.fromEntries(Object.entries(e).map(([e, t], a) => [e, String(t)])),
                d = c().b3de4a42,
                p = c().e25f9ad6,
                m = c().a0697fbc,
                u = c().a3311a60,
                g = c().bbc44f5a,
                b = c().b4f21858,
                f = c().d46b6bc8,
                h = c().a5e6ba6a,
                y = c().a22929e4,
                E = c().b76dd726,
                Z = c().j29cc0f2,
                w = c().cd4333d0,
                C = c().b5334780,
                S = c().e9fa53ac,
                x = c().fc664dee,
                T = c().f024ec64,
                P = c().e1ee08e6,
                v = c().je3fc324,
                H = c().f7358242,
                _ = c().j8e9b514,
                I = c().e9e57c5c,
                k = c().fee0d8a8,
                B = c().iab44364,
                D = c().d8c90438,
                N = c().accaa48e,
                R = c().fa2156f6,
                z = c().d004c768,
                A = c().f3d6d6c0;
            var O = a(325686),
                F = a(67369),
                L = a(731708),
                j = a(966886),
                W = a(370006),
                M = a(661810),
                V = a(392237),
                $ = a(121791),
                G = a(126089),
                q = a(75090);
            const U = (e) => {
                    const { score: t, subtitle: a, title: n, scoreType: o = l.D.Positive } = e,
                        i = a?.split("\n"),
                        c = { [l.D.Positive]: { style: K.scorePositive, prefix: "+" }, [l.D.Negative]: { style: K.scoreNegative, prefix: "-" }, [l.D.Neutral]: { style: K.scoreNeutral, prefix: "" } },
                        s = c[o].prefix,
                        d = c[o].style;
                    return r.createElement(
                        O.Z,
                        { style: K.scoreDetailsContainer },
                        r.createElement(
                            O.Z,
                            { style: K.scoreDetailLeft },
                            r.createElement(O.Z, { style: K.scoreNumberAndBadgeWrapper }, r.createElement(L.ZP, { color: "text", size: "title4", style: d, weight: "heavy" }, s, t), n === h && r.createElement(O.Z, { style: K.label }, r.createElement(L.ZP, { align: "center", color: "red500", weight: "heavy" }, "×2"))),
                            r.createElement(O.Z, { style: K.scoreHeaderTitle }, r.createElement(L.ZP, { "aria-level": 2, color: "text", role: "heading", weight: "medium" }, n)),
                            i?.map((e, t) => r.createElement(L.ZP, { color: "gray700", key: t, size: "subtext2" }, e)),
                        ),
                    );
                },
                K = V.default.create((e) => ({ scoreDetailsContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, scorePositive: { color: e.colors.green500 }, scoreNegative: { color: e.colors.red500 }, scoreNeutral: { color: e.colors.gray700 }, scoreStyle: { alignSelf: "flex-start" }, scoreHeaderTitle: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, scoreDetailLeft: { flex: 1, gap: e.spaces.space8 }, label: { backgroundColor: e.colors.red0, color: e.colors.buttonAlwaysWhite, alignSelf: "auto", borderRadius: e.borderRadii.xSmall, height: e.spaces.space24, width: e.spaces.space32, justifyContent: "center" }, scoreNumberAndBadgeWrapper: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } })),
                Q = c().d68a370c,
                Y = c().f10aaf3c,
                J = Object.freeze({ Hidden: "Hidden", Ratings: "Rating", Note: "Note" }),
                X = ({ badgeType: e, enrollmentState: t, handleClose: a, headerScore: n, headerText: o, isOwnProfile: i, negativeRatings: s, otherRatings: d, positiveRatings: p, successfulRatingsNeededToEarnIn: m, updatedTime: u }) => {
                    const g = (0, F.GS)(),
                        b = Number(n) >= 0 ? n : "-",
                        f = (e) => "0" === e.score,
                        h = p.every(f) && s.every(f) && d.every(f);
                    let y = J.Hidden;
                    i && h && (y = e === l.n.Ratings ? J.Ratings : J.Note);
                    const E = [[{ ratings: p, scoreType: l.D.Positive }], [{ ratings: s, scoreType: l.D.Negative }], [{ ratings: d, scoreType: l.D.Neutral }]].map(([{ ratings: e, scoreType: t }]) => e.map((e, a) => r.createElement(r.Fragment, { key: a }, r.createElement(U, { score: e.score, scoreType: t, subtitle: e.subtitle, title: e.title })))),
                        Z = r.createElement(r.Fragment, null, r.createElement(O.Z, { style: ee.headerSummary }, r.createElement(L.ZP, { color: "gray1100", size: "title1", weight: "heavy" }, b), r.createElement(L.ZP, { "aria-level": 1, color: "text", role: "heading", size: "body", weight: "bold" }, o), u && r.createElement(L.ZP, { color: "gray700", size: "subtext3" }, Q, r.createElement(j.Z, { color: "gray700", cutoff: "years", humanReadable: !0, timestamp: u }))));
                    let w = null;
                    i && e === l.n.Ratings && m && ("EarnedOutAcknowledged" === t ? (w = r.createElement(c().I18NFormatMessage, { $i18n: "ccdfbd75", requiredRatingImpact: m })) : "NewUser" === t && (w = r.createElement(O.Z, { style: ee.enrollmentStateTextContainer }, r.createElement(c().I18NFormatMessage, { $i18n: "a32c38ad", requiredRatingImpact: m }), r.createElement(L.ZP, { color: "buttonBlack", link: "https://twitter.github.io/communitynotes/examples/", size: "subtext1", weight: "bold", withUnderline: !0 }, Y))));
                    const C = w ? r.createElement(r.Fragment, null, r.createElement(O.Z, { style: ee.earnOutSection }, r.createElement(O.Z, { style: ee.earnOutContent }, r.createElement($.default, { style: ee.lockIcon }), r.createElement(L.ZP, { size: "subtext1" }, w)))) : null;
                    return r.createElement(r.Fragment, null, r.createElement(O.Z, { style: ee.topWrapper }, r.createElement(O.Z, { style: ee.backButton }, r.createElement(W.Z, { backButtonType: "close", onClick: a })), Z), y !== J.Hidden ? r.createElement(G.K, { badgeType: e }) : r.createElement(r.Fragment, null, C, r.createElement(O.Z, { style: ee.scoreDetailsContainer }, E, r.createElement(q.Z, null)), g && r.createElement(M.Z, { spacing: "space1" })));
                },
                ee = V.default.create((e) => ({ topWrapper: { backgroundColor: e.colors.gray0 }, headerSummary: { gap: e.spaces.space8, paddingVertical: e.spaces.space40, textAlign: "center" }, backButton: { position: "absolute", marginStart: e.spaces.space24, marginTop: e.spaces.space12, zIndex: 2 }, scoreDetailsContainer: { padding: e.spaces.space32, gap: e.spaces.space20 }, earnOutSection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space20, width: "100%" }, earnOutContent: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadiiPx.medium, flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, lockIcon: { color: e.colors.text, paddingEnd: e.spaces.space8 }, enrollmentStateTextContainer: { flexDirection: "column", justifyContent: "space-between" } })),
                te = { ratingImpact: 0, ratingsHelpful: 0, ratingsNotHelpful: 0, contrastingNotHelpfulRatingsOnHelpfulNotes: 0, contrastingHelpfulRatingsOnNotHelpfulNotes: 0, pending: 0, ratingsAfterStatusReached: 0 },
                ae = { writingImpact: 0, ratingsHelpful: 0, ratingsNotHelpful: 0, pending: 0 },
                ne = (e) => {
                    const { badgeType: t, enrollmentState: a, isOwnProfile: i, onClose: c, ratingScores: O, successfulRatingsNeededToEarnIn: F, writingScores: L } = e,
                        j = void 0 === O?.ratingsHelpful ? te : O,
                        W = void 0 === L?.ratingsHelpful ? ae : L,
                        M = r.useMemo(() => {
                            const e = { isOwnProfile: i, handleClose: c, badgeType: t, successfulRatingsNeededToEarnIn: F, enrollmentState: a };
                            if (t === l.n.Ratings && j) {
                                const t = (({ isOwnProfile: e, ratingScores: t }) => {
                                    const a = s(t),
                                        n = t.updatedTime;
                                    let r = g;
                                    "0" !== a.ratingsHelpful && (r = e ? m : u);
                                    const o = e ? w + E : E;
                                    return {
                                        headerScore: a.ratingImpact,
                                        headerText: d,
                                        updatedTime: n,
                                        positiveRatings: [
                                            { subtitle: r, score: a.ratingsHelpful, title: p },
                                            { subtitle: f, score: a.ratingsNotHelpful, title: b },
                                        ],
                                        negativeRatings: [
                                            { title: y, subtitle: o, score: a.contrastingNotHelpfulRatingsOnHelpfulNotes },
                                            { subtitle: Z, score: a.contrastingHelpfulRatingsOnNotHelpfulNotes, title: h },
                                        ],
                                        otherRatings: [
                                            { subtitle: S, score: a.pending, title: C },
                                            { subtitle: T, score: a.ratingsAfterStatusReached, title: x },
                                        ],
                                    };
                                })({ isOwnProfile: i, ratingScores: j });
                                return r.createElement(X, (0, n.Z)({}, t, e));
                            }
                            if (W) {
                                const t = (({ isOwnProfile: e, writingScores: t }) => {
                                    const a = s(t),
                                        n = t.updatedTime,
                                        r = e ? v : H;
                                    let o = k;
                                    "0" !== a.ratingsHelpful && (o = e ? _ : I);
                                    const l = e ? B : D,
                                        i = e ? N : R;
                                    return { headerScore: a.writingImpact, headerText: P, updatedTime: n, positiveRatings: [{ subtitle: o, score: a.ratingsHelpful, title: r }], negativeRatings: [{ subtitle: i, score: a.ratingsNotHelpful, title: l }], otherRatings: [{ subtitle: A, score: a.pending, title: z }] };
                                })({ isOwnProfile: i, writingScores: W });
                                return r.createElement(X, (0, n.Z)({}, t, e));
                            }
                        }, [i, c, t, F, j, W, a]);
                    return r.createElement(o.Z, { allowBackNavigation: !0, children: M, enableMaskForDismiss: !0, onMaskClick: c, type: "full", withMask: !0 });
                };
        },
        314966: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchDownloadDataScreen: () => $, default: () => q });
            var n = a(202784),
                r = a(614983),
                o = a.n(r),
                l = a(325686),
                i = a(731708),
                c = a(688715),
                s = a(966886),
                d = a(154003),
                p = a(420412),
                m = a(844685),
                u = a(392237),
                g = a(111677),
                b = a.n(g),
                f = a(72591),
                h = a(252021),
                y = a(443781),
                E = a(652904),
                Z = a(249777),
                w = a(486361),
                C = a(24949),
                S = a(71620),
                x = a(668214),
                T = a(979090);
            const P = (e, t) => T.sz(e),
                v = (0, x.Z)()
                    .propsFromState(() => ({ publicData: (0, C.P1)(P, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("BIRDWATCH_SCREEN"), fetchPublicData: T.oV }))
                    .withAnalytics({ page: "birdwatch", section: "download_data" }),
                H = b().cb1adfa0,
                _ = b().cc720e6a,
                I = b().j2fcd33a,
                k = b().d4a6b322,
                B = b().c359263a,
                D = b().b8a27fe2,
                N = b().j1c99e00,
                R = b().i6f69314,
                z = b().b7e4c114,
                A = b().d7f19114,
                O = b().b6008808,
                F = b().h786cd7a,
                L = b().d0fe8052,
                j = b().c0427f94,
                W = b().g880d8c0,
                M = b().ab1b3d38,
                V = n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, n.createElement(b().I18NFormatMessage, { $i18n: "c475a5d3" }, n.createElement(i.ZP, { color: "link", link: (0, c.ju)("https://developer.x.com/en/developer-terms") }, b().c43fb933))),
                $ = (e) => {
                    const { featureSwitches: t } = n.useContext(y.rC),
                        { analytics: a, createLocalApiErrorHandler: r, fetchPublicData: c, history: u, publicData: g } = e;
                    n.useEffect(() => {
                        c().catch(r());
                    }, [r, c]);
                    const C = t.isTrue("responsive_web_birdwatch_note_request_download_enabled"),
                        S = g?.notes?.urls,
                        x = S?.length,
                        T = g?.ratings?.urls,
                        P = T?.length,
                        v = g?.note_status_history?.urls,
                        $ = v?.length,
                        q = g?.user_enrollment?.urls,
                        U = q?.length,
                        K = g?.bat_signals?.urls,
                        Q = K?.length,
                        Y = g?.notes?.created_at,
                        J = (e, t, r, c) => {
                            return (
                                o()(void 0 !== r, "totalFiles must be defined"),
                                n.createElement(
                                    l.Z,
                                    { key: t, style: [G.fileSection, t > 1 && G.fileSectionNotFirst] },
                                    n.createElement(i.ZP, null, n.createElement(b().I18NFormatMessage, { $i18n: "g19fcc5b", fileIndex: t, totalFiles: r })),
                                    n.createElement(d.ZP, {
                                        icon: n.createElement(f.default, null),
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
                        X = n.createElement(l.Z, null, n.createElement(l.Z, { style: G.headerWrapper }, n.createElement(i.ZP, { size: "title4", style: G.textSection, weight: "heavy" }, _), n.createElement(i.ZP, { color: "gray700", style: G.textSection }, k), n.createElement(i.ZP, { color: "gray700" }, B, n.createElement(i.ZP, { link: { pathname: "https://twitter.github.io/communitynotes/data", external: !0 } }, D), ".")), n.createElement(p.Z, null), n.createElement(m.Z, { text: N }), S && S?.length > 0 ? S.map((e, t) => J(e, t + 1, x, "notes")) : n.createElement(i.ZP, { color: "gray700", style: G.emptyData }, F), n.createElement(p.Z, null), n.createElement(m.Z, { text: R }), T && T?.length > 0 ? T.map((e, t) => J(e, t + 1, P, "ratings")) : n.createElement(i.ZP, { color: "gray700", style: G.emptyData }, L), n.createElement(p.Z, null), n.createElement(m.Z, { text: z }), v && v?.length > 0 ? v.map((e, t) => J(e, t + 1, $, "noteStatusHistory")) : n.createElement(i.ZP, { color: "gray700", style: G.emptyData }, j), n.createElement(p.Z, null), n.createElement(m.Z, { text: A }), q && q?.length > 0 ? q.map((e, t) => J(e, t + 1, U, "userEnrollmentStatus")) : n.createElement(i.ZP, { color: "gray700", style: G.emptyData }, W), n.createElement(p.Z, null), C ? n.createElement(l.Z, null, n.createElement(m.Z, { text: O }), K && K?.length > 0 ? K.map((e, t) => J(e, t + 1, Q, "noteRequest")) : n.createElement(i.ZP, { color: "gray700", style: G.emptyData }, M), n.createElement(p.Z, null)) : null, n.createElement(l.Z, { style: G.footerText }, n.createElement(i.ZP, { color: "gray700", style: G.dateGenerated }, (ee = Y) ? n.createElement(s.Z, { prefix: I, relative: !1, timestamp: ee }) : ""), V));
                    var ee;
                    return n.createElement(E.Z, null, n.createElement(h.Z, { TabBar: w.Z, history: u, primaryContent: X, sidebarContent: n.createElement(Z.Z, null), title: H, withTweetButton: !1 }));
                },
                G = u.default.create((e) => ({ dateGenerated: { paddingBottom: e.spaces.space16 }, emptyData: { display: "flex", justifyContent: "center", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, fileSection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space4 }, fileSectionNotFirst: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px" }, footerText: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, headerWrapper: { alignItems: "center", margin: e.spaces.space32, textAlign: "center" }, textSection: { marginBottom: e.spaces.space16 } })),
                q = v($);
        },
        169584: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                l = a(392237),
                i = a(530813),
                c = a(629963);
            const s = ({ tags: e }) => {
                    if (!e) return null;
                    return n.createElement(
                        r.Z,
                        { role: "list", style: d.feedbackTagContainer },
                        e.map((e) => ((e) => n.createElement(r.Z, { key: e, role: "listitem", style: d.tag }, n.createElement(i.default, { style: d.icon }), n.createElement(o.ZP, { color: "gray700", size: "subtext1" }, c.di[e])))(e)),
                    );
                },
                d = l.default.create((e) => ({ feedbackTagContainer: { paddingVertical: e.spaces.space12 }, icon: { color: e.colors.gray400, height: "12px", paddingEnd: e.spaces.space4, width: "12px" }, tag: { alignItems: "center", flexDirection: "row" } })),
                p = n.memo(s);
        },
        395021: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchGlobalTimelineScreen: () => _, default: () => I });
            var n = a(202784),
                r = a(154003),
                o = a(111677),
                l = a.n(o),
                i = a(698891),
                c = a(443781),
                s = a(337523),
                d = a(916616),
                p = a(249777),
                m = a(486361),
                u = a(24949),
                g = a(71620),
                b = a(668214),
                f = a(979090),
                h = a(371184);
            const y = (e, t) => t.match?.params?.tabId || void 0,
                E = (e, t) => f.PL(e),
                Z = (0, b.Z)()
                    .propsFromState(() => ({ enrollmentStatus: E, module: (0, u.P1)(y, (e) => (0, h.Z)(e)), selectedTabId: y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfileIfNeeded: f.eY, updateBirdwatchPath: f.Bb }));
            var w = a(709070),
                C = a(335632),
                S = a(962741);
            const x = { ...(0, C.G)({ displayBlocked: !1, withTweetActionsDisabled: !0 }), [S.ZP.Label]: w.Z },
                T = l().a15648a4,
                P = l().bb081ea2,
                v = { label: P },
                H = (e) => ({ pathname: `/i/communitynotes/${e}` }),
                _ = (e) => {
                    const { featureSwitches: t } = n.useContext(c.rC),
                        { createLocalApiErrorHandler: a, enrollmentStatus: o, fetchAuthenticatedUserProfileIfNeeded: l, history: u, module: g, selectedTabId: b, updateBirdwatchPath: f } = e,
                        h = n.useRef({ hasEffectRun: !1 }),
                        y = n.createElement(r.ZP, { "aria-label": P, hoverLabel: v, icon: n.createElement(i.default, null), link: "/i/communitynotes/notification_settings", pullRight: !0, type: "primaryText" }),
                        E = t.isTrue("responsive_web_birdwatch_note_writing_enabled"),
                        Z = n.useMemo(() => {
                            const e = b ?? "global_timeline";
                            return { page: "birdwatch", section: E ? `${e}_participant` : e };
                        }, [E, b]);
                    return (
                        n.useEffect(() => {
                            h.current.hasEffectRun || ((h.current.hasEffectRun = !0), l().catch(a()));
                        }, [a, o, l]),
                        n.useEffect(() => {
                            const e = window.location.pathname,
                                t = window.history.length;
                            f({ path: e, position: t });
                        }, [f, b]),
                        "EarnedOutNoAcknowledge" === o?.enrollment_state ? n.createElement(d.Z, { history: u }) : n.createElement(s.Z, { TabBar: m.Z, entryConfiguration: x, getTabLink: H, history: u, initialPageNamespace: Z, module: g, rightControl: E ? y : null, selectedTabId: b, sidebarContent: n.createElement(p.Z, null), timelinePrefix: "birdwatch-", title: T, withTweetButton: !1 })
                    );
                },
                I = Z(_);
        },
        129086: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                o = a(333577),
                l = a(668214),
                i = a(44836);
            const c = (e, t) => {
                    const { noteId: a } = t;
                    return i.Z.select(e, a);
                },
                s = (0, l.Z)().propsFromState(() => ({ note: c }))((e) => {
                    const { note: t, noteData: a, noteId: l, ...i } = e;
                    return a ? r.createElement(o.Z, (0, n.Z)({ note: a }, i)) : t ? r.createElement(o.Z, (0, n.Z)({ note: t }, i)) : null;
                });
        },
        667599: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteMatchScreen: () => j, default: () => V });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(731708),
                i = a(457311),
                c = a(392237),
                s = a(167630),
                d = a(111677),
                p = a.n(d),
                m = a(323265),
                u = a(980407),
                g = a(252021),
                b = a(443781),
                f = a(512110),
                h = a(26232),
                y = a(312771),
                E = a(249777),
                Z = a(486361),
                w = a(24949),
                C = a(71620),
                S = a(668214),
                x = a(979090),
                T = a(302101);
            const P = (e, t) => t.match.params.noteId,
                v = (e, t) => x.Qg(e, P(0, t)),
                H = (e, t) => x.wd(e, P(0, t)),
                _ = (0, S.Z)()
                    .propsFromState(() => ({ noteData: v, noteId: P, fetchStatus: H, matchesSlice: (0, w.P1)(P, (e) => (e ? (0, T.N)(e) : void 0)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("BIRDWATCH_SCREEN"), fetchOneNoteIfNeeded: x.ww })),
                I = p().a5a2330c,
                k = p().ad071b5c,
                B = p().i859a9d4,
                D = p().efd14e7a,
                N = p().a5b19492,
                R = p().b92967c0,
                z = p().i92fddce,
                A = p().f5ce7a00,
                O = () => r.createElement(o.Z, { style: W.emptyStateContainer }, r.createElement(l.ZP, { color: "text", size: "title3", weight: "heavy" }, A)),
                F = r.createElement(i.Z, { buttonLink: "/i/communitynotes/about", buttonText: B, header: N }),
                L = r.createElement(i.Z, { buttonLink: "/i/communitynotes/about", buttonText: B, header: R }),
                j = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneNoteIfNeeded: a, fetchStatus: i, history: c, matchesSlice: s, noteData: d, noteId: p } = e,
                        { featureSwitches: w } = r.useContext(b.rC);
                    r.useEffect(() => {
                        a(p).catch(t());
                    }, [t, a, p]);
                    const C = (e) => r.createElement(o.Z, { key: e }, r.createElement(f.ZP, { style: W.pivotTweetContainer, tweetId: e, withActionsDisabled: !1 })),
                        S = d?.is_media_note || !1,
                        x = d?.is_url_note || !1,
                        T = x ? k : I,
                        P = S && w.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0 ? r.createElement(l.ZP, { size: "subtext3", weight: "medium" }, z) : null,
                        v = () => r.createElement(o.Z, { style: W.container }, d && d.data_v1 ? (S || x ? r.createElement(o.Z, { style: W.sectionContainer }, s ? r.createElement(r.Fragment, null, r.createElement(h.Z, { footer: null, module: s, noItemsRenderer: () => r.createElement(O, null), renderer: C, withoutHeadroom: !0 })) : null) : L) : i === y.ZP.LOADING ? M : F);
                    return (() => {
                        const e = { title: T, subtitle: P, history: c };
                        return m.ZP.isTwitterApp() ? r.createElement(u.Z, (0, n.Z)({ children: v(), hideBackButton: !0 }, e)) : r.createElement(g.Z, (0, n.Z)({ TabBar: Z.Z, backLocation: "/i/communitynotes", primaryContent: v(), sidebarContent: r.createElement(E.Z, null), withTweetButton: !1 }, e));
                    })();
                },
                W = c.default.create((e) => ({ container: { marginBottom: e.spaces.space48 }, deletedNotes: { flexDirection: "row" }, deletedIcon: { color: e.colors.gray700, marginEnd: e.spaces.space4 }, feedbackContainer: { paddingHorizontal: "44px" }, icon: { color: e.colors.primary, height: e.spaces.space20, width: e.spaces.space20, marginEnd: e.spaces.space8 }, sectionContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.none }, rateNotesThatNeedHelpText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space8 }, ratingsReceived: { paddingBottom: e.spaces.space4 }, text: { paddingBottom: e.spaces.space8 }, thumbnailIcon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space8 }, dividerContainer: { marginTop: e.spaces.space12 }, emptyStateContainer: { paddingHorizontal: e.spaces.space72 }, spinner: { paddingTop: e.spaces.space80 }, pivotTweetContainer: { marginTop: 0, borderWidth: "none", borderTopWidth: "1px", borderTopColor: e.colors.gray50, borderRadius: "none", boxShadow: "none" } })),
                M = r.createElement(s.Z, { "aria-label": D, size: "large", style: W.spinner }),
                V = _(j);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-7d965b76.14d3113a.js.map
