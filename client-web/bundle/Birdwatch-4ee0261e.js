"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-4ee0261e"],
    {
        916616: (e, t, a) => {
            a.d(t, { Z: () => O });
            a(136728);
            var n = a(202784),
                l = a(325686),
                i = a(992942),
                o = a(909377),
                r = a(731708),
                s = a(721266),
                c = a(688715),
                d = a(529356),
                u = a(392237),
                m = a(674132),
                _ = a.n(m),
                p = a(121791),
                h = a(775042),
                f = a(553894),
                g = a(652904),
                b = a(293115),
                E = a(169584),
                w = a(71620),
                y = a(668214),
                v = a(979090);
            const Z = (e, t) => v.PL(e),
                C = (e, t) => v.w6(e, ((e) => v.OV(e))(e)),
                N = (0, y.Z)()
                    .propsFromState(() => ({ enrollmentStatus: Z, ratingsCount: C }))
                    .propsFromActions(() => ({ acknowledgeEarnOut: v.X3, createLocalApiErrorHandler: (0, w.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: v.lC }))
                    .withAnalytics({ page: "birdwatch", component: "earned_out_education" }),
                S = a.p + "earned-out.328541ca.png",
                A = _().e7beb100,
                k = _().ed0e6b2e,
                x = _().fd02e290,
                I = _().ee7b8050,
                P = _().b8cc2e9a,
                M = _().f6c8613e,
                B = _().fd5c2282,
                T = _().c23e67ea,
                L = () => n.createElement(i.Z, { source: S, style: U.image }),
                F = { page: "birdwatch", component: "earned_out_education" },
                U = u.default.create((e) => ({ container: { paddingBottom: e.spaces.space16 }, content: { width: "90%" }, gap: { paddingVertical: e.spaces.space8 }, header: { paddingTop: e.spaces.space8 }, icon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space12 }, image: { height: "242px", width: "100%" }, section: { flexDirection: "row", paddingTop: e.spaces.space12 }, sectionText: { flexWrap: "wrap", width: "100%" }, text: { paddingVertical: e.spaces.space4 }, unlockText: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12 } })),
                O = N((e) => {
                    const { acknowledgeEarnOut: t, analytics: a, createLocalApiErrorHandler: i, enrollmentStatus: u, fetchAuthenticatedUserProfile: m, history: w, ratingsCount: y } = e;
                    n.useEffect(() => {
                        m().catch(i());
                    }, [i, m]);
                    const v = n.createElement(
                        l.Z,
                        { style: U.content },
                        n.createElement(l.Z, { style: U.section }, n.createElement(o.Z, { Icon: p.default, size: "large", style: U.icon }), n.createElement(l.Z, { style: U.sectionText }, n.createElement(r.ZP, { size: "subtext1" }, P), n.createElement(s.Z, { size: "space12" }), n.createElement(r.ZP, { link: (0, c.ju)("https://communitynotes.x.com/guide/en/contributing/writing-ability"), size: "subtext1", weight: "medium", withUnderline: !0 }, x), n.createElement(s.Z, { size: "space8" }), u?.top_not_helpful_tags && u.top_not_helpful_tags.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.ZP, { "aria-level": 2, color: "text", role: "heading", style: U.header, weight: "bold" }, M), n.createElement(E.Z, { tags: u.top_not_helpful_tags })) : null, n.createElement(r.ZP, { link: "https://twitter.github.io/communitynotes/examples/", size: "subtext1", style: U.text, weight: "bold", withUnderline: !0 }, B))),
                        (() => {
                            const e = u?.successful_rating_needed_to_earn_in || "-",
                                t = n.createElement(_().I18NFormatMessage, { $i18n: "b1e1d521", ratingImpactToEarnIn: e, currentImpact: (0, f.v)(y) });
                            return n.createElement(l.Z, { style: U.section }, n.createElement(o.Z, { Icon: h.default, size: "large", style: U.icon }), n.createElement(l.Z, { style: U.sectionText }, n.createElement(r.ZP, { color: "text", size: "headline2", weight: "heavy" }, T), n.createElement(r.ZP, { size: "subtext1", style: U.unlockText }, t)));
                        })(),
                    );
                    return n.createElement(
                        b.nO,
                        { namespace: F },
                        n.createElement(
                            g.Z,
                            null,
                            n.createElement(d.Z, {
                                actionLabel: A,
                                contentStyle: U.container,
                                graphic: L,
                                graphicDisplayMode: "illustrationFullWidth",
                                headline: I,
                                isFullHeightOnMobile: !0,
                                onAction: () => {
                                    t(), a.scribe({ element: "acknowledge_earn_out_profile", action: "click" }), w.push("/i/communitynotes/u/me");
                                },
                                onSecondaryAction: () => {
                                    t(), a.scribe({ element: "acknowledge_earn_out_rate", action: "click" }), m().catch(i()), w.push("/i/birdwatch");
                                },
                                secondaryActionLabel: k,
                                subtext: v,
                                withBottomPadding: !1,
                            }),
                        ),
                    );
                });
        },
        593784: (e, t, a) => {
            a.d(t, { h: () => S, Z: () => x });
            var n = a(807896),
                l = a(202784),
                i = a(688715),
                o = a(529356),
                r = a(392237),
                s = a(674132),
                c = a.n(s),
                d = a(652904),
                u = a(293115),
                m = a(325686),
                _ = a(731708);
            const p = r.default.create((e) => ({ content: { marginBottom: e.spaces.space40, gap: e.spaces.space16 } })),
                h = ({ messages: e }) =>
                    l.createElement(
                        m.Z,
                        { style: p.content },
                        e.map((e, t) => l.createElement(_.ZP, { color: "gray700", key: t }, e)),
                    ),
                f = c().dc1fa12c,
                g = [c().a1752fde, c().hef02710],
                b = c().i859a9d4,
                E = c().dff9b6bc,
                w = c().f051e434,
                y = [c().eaef2f72, c().j78d41b4],
                v = "https://twitter.github.io/communitynotes/phone-faq",
                Z = (0, i.ju)("https://x.com/settings/phone"),
                C = c().a7c9a176,
                N = [c().ec853dfa],
                S = Object.freeze({ NoVerifiedPhoneNumber: "NoVerifiedPhoneNumber", NonUniquePhoneNumber: "NonUniquePhoneNumber", NonEligiblePhoneNumber: "NonEligiblePhoneNumber" }),
                A = () => {},
                k = r.default.create((e) => ({ headerContainer: { marginBottom: e.spaces.space20 } })),
                x = (e) => {
                    const { errorCode: t, onClose: a } = e,
                        i = l.useMemo(() => ({ page: "birdwatch", section: "invalid_phonenumber", component: t }), [t]);
                    let r = { withCloseButton: !0, graphicDisplayMode: "none", onClose: a, subtext: "", onAction: A };
                    switch (t) {
                        case S.NoVerifiedPhoneNumber:
                            r = { ...r, headline: f, actionLabel: E, secondaryActionLabel: b, children: l.createElement(h, { messages: g }), actionLink: Z, secondaryActionLink: v };
                            break;
                        case S.NonEligiblePhoneNumber:
                            r = { ...r, headline: C, actionLabel: b, children: l.createElement(h, { messages: N }), actionLink: v };
                            break;
                        default:
                            r = { ...r, headline: w, actionLabel: b, children: l.createElement(h, { messages: y }), actionLink: v };
                    }
                    return l.createElement(u.nO, { namespace: i }, l.createElement(d.Z, null, l.createElement(o.Z, (0, n.Z)({ contentStyle: k.headerContainer }, r))));
                };
        },
        358550: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchPrinciples: () => H, default: () => R });
            var n = a(202784),
                l = a(325686),
                i = a(731708),
                o = a(593866),
                r = a(167630),
                s = a(529356),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(777131),
                _ = a(201889),
                p = a(41065),
                h = a(922638),
                f = a(323265),
                g = a(443781),
                b = a(615027),
                E = a(536698);
            const w = u().hd43a218,
                y = u().aaba8ed2,
                v = u().j24c37b2,
                Z = u().i859a9d4,
                C = { external: !0, pathname: "https://twitter.github.io/communitynotes/writing-notes#note-writing-limit" },
                N = (e) => {
                    const { handleClose: t } = e;
                    return n.createElement(s.Z, { actionLabel: v, graphic: E.default, headline: w, onAction: t, onClose: t, secondaryActionLabel: Z, secondaryActionLink: C, subtext: y, withCloseButton: !1 });
                };
            var S = a(150236),
                A = a(71620),
                k = a(668214),
                x = a(979090);
            const I = (e, t) => t.match.params.tweetId,
                P = (e, t) => x.dw(e, I(0, t)),
                M = (e, t) => x.lW(e),
                B = (e, t) => x.Lt(e, I(0, t)),
                T = (e, t) => x.Wk(e, I(0, t)),
                L = (0, k.Z)()
                    .propsFromState(() => ({ ownNoteData: P, tweetId: I, misleadingNotes: B, notMisleadingNotes: T, canWriteNotes: M }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, A.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: x.lC, fetchNotes: x.Pi }))
                    .withAnalytics({ page: "birdwatch", section: "contribute_form", component: "values" }),
                F = u().i9028824,
                U = u().j6e19c58,
                O = u().c3d89aca,
                D = u().ea580ee2,
                q = u().eac7b6ac,
                V = u().b0381cfc,
                W = u().f0addddc,
                $ = u().h7c7b204,
                z = u().i8cae552,
                H = (e) => {
                    const { featureSwitches: t } = n.useContext(g.rC),
                        { analytics: a, canWriteNotes: c, createLocalApiErrorHandler: d, fetchAuthenticatedUserProfile: u, fetchNotes: E, history: w, misleadingNotes: y, notMisleadingNotes: v, ownNoteData: Z, tweetId: C } = e,
                        A = C ? `/i/communitynotes/${C}/contribute_complete` : "/",
                        k = "tweetNotePage" === w.location.state?.src,
                        [x, I] = n.useState(!0);
                    n.useEffect(() => {
                        C &&
                            E(C)
                                .catch(d())
                                .finally(() => I(!1));
                    }, [d, E, C]),
                        n.useEffect(() => {
                            u().catch(d());
                        }, [d, u, c]);
                    const P = y.length + v.length > 0,
                        M = (e) => {
                            a.scribeAction(`click_${e}`);
                        },
                        B = () => {
                            M("close"), C && w.goBackThroughModals({ fallbackPath: `/i/status/${C}` });
                        },
                        T = () => {
                            M("tweetPage"), C && w.replace(`/i/communitynotes/t/${C}`);
                        },
                        L = (e) => n.createElement(l.Z, { style: j.valueItem }, n.createElement(i.ZP, { color: "gray700" }, e)),
                        H = {
                            "aria-label": U,
                            containerStyle: j.infoItemContainer,
                            items: [
                                { label: "", decoration: n.createElement(m.default, null), description: L(q) },
                                { label: "", decoration: n.createElement(_.default, null), description: L(V) },
                                { label: "", decoration: n.createElement(p.default, null), description: L(W) },
                            ],
                        },
                        R = n.createElement(l.Z, { style: j.values }, n.createElement(o.Z, H)),
                        X = Z?.data_v1?.classification,
                        Q = X ? `${A}/${S.F[X]}` : A,
                        G = P && !k,
                        J = t.isTrue("responsive_web_birdwatch_note_limit_enabled") && !1 === c;
                    return x
                        ? n.createElement(r.Z, { "aria-label": F })
                        : Z
                          ? n.createElement(b.Z, { to: Q })
                          : J
                            ? n.createElement(N, { handleClose: B })
                            : G
                              ? n.createElement(s.Z, { actionLabel: O, graphic: h.default, headline: $, isFullHeightOnMobile: !0, onAction: T, onClose: B, subtext: z, withCloseButton: !f.ZP.isTwitterApp() })
                              : n.createElement(s.Z, {
                                    actionLabel: O,
                                    graphicDisplayMode: "none",
                                    headline: D,
                                    isFullHeightOnMobile: !0,
                                    onAction: () => {
                                        M("continue"), C && w.replace(`/i/communitynotes/contribute_form/${C}`);
                                    },
                                    onClose: B,
                                    subtext: R,
                                    withCloseButton: !f.ZP.isTwitterApp(),
                                });
                },
                j = c.default.create((e) => ({ infoItemContainer: { paddingHorizontal: 0 }, valueItem: { flexDirection: "row", marginStart: e.spaces.space16 }, values: { marginVertical: e.spaces.space16, textAlign: "start", width: "100%" } })),
                R = L(H);
        },
        362644: (e, t, a) => {
            a.r(t), a.d(t, { default: () => O });
            a(136728);
            var n = a(202784),
                l = a(731708),
                i = a(593866),
                o = a(529356),
                r = a(392237),
                s = a(674132),
                c = a.n(s),
                d = a(429989),
                u = a(988227),
                m = a(442787),
                _ = a(293723),
                p = a(413522),
                h = a(258292),
                f = a(323265),
                g = a(150236);
            const b = c().a9f4ca9c,
                E = c().eb8f7c0c,
                w = c().h87c6bd6,
                y = c().gc1a5bce,
                v = c().i0e950ca,
                Z = c().a047e800,
                C = c().cec8a38c,
                N = c().a377532e,
                S = c().d790fa4e,
                A = c().e90cda68,
                k = c().j5a1d85a,
                x = c().b772cd66,
                I = c().b25b64d6,
                P = c().g1428d70,
                M = c().a4ec7004,
                B = c().c4093274,
                T = r.default.create((e) => ({ content: { marginVertical: e.spaces.space16 }, icon: { height: e.spaces.space20, width: e.spaces.space20, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space20 }, iconGreen: { color: e.colors.green500 }, iconBlue: { color: e.colors.blue500 }, infoItemContainer: { paddingHorizontal: 0, marginVertical: e.spaces.space4 } })),
                L = {
                    "aria-label": B,
                    containerStyle: T.infoItemContainer,
                    items: [
                        { label: E, decoration: n.createElement(d.default, { style: [T.icon, T.iconBlue] }) },
                        { label: v, decoration: n.createElement(u.default, { style: [T.icon, T.iconBlue] }) },
                        { label: S, description: A, decoration: n.createElement(m.default, { style: [T.icon, T.iconBlue] }) },
                    ],
                },
                F = {
                    "aria-label": B,
                    containerStyle: T.infoItemContainer,
                    items: [
                        { label: w, decoration: n.createElement(d.default, { style: [T.icon, T.iconBlue] }) },
                        { label: Z, description: C, decoration: n.createElement(u.default, { style: [T.icon, T.iconBlue] }) },
                        { label: S, description: A, decoration: n.createElement(m.default, { style: [T.icon, T.iconBlue] }) },
                    ],
                },
                U = {
                    "aria-label": B,
                    containerStyle: T.infoItemContainer,
                    items: [
                        { label: b, decoration: n.createElement(_.default, { style: [T.icon, T.iconGreen] }) },
                        { label: y, decoration: n.createElement(p.default, { style: T.icon }) },
                        { label: N, decoration: n.createElement(h.default, { style: T.icon }) },
                    ],
                },
                O = (e) => {
                    const { history: t, match: a } = e,
                        r = a.params.tweetId,
                        s = a.params.noteClassificationType,
                        c = () => {
                            f.ZP.isTwitterApp() || t.replace(`/i/status/${r}`);
                        };
                    let d, u;
                    return (
                        s === g.F.MisinformedOrPotentiallyMisleading ? ((u = P), (d = n.createElement(l.ZP, null, n.createElement(i.Z, L)))) : s === g.F.NotMisleading ? ((u = P), (d = n.createElement(l.ZP, null, n.createElement(i.Z, F)))) : ((u = I), (d = n.createElement(l.ZP, null, M, n.createElement(i.Z, U)))),
                        n.createElement(o.Z, {
                            actionLabel: k,
                            contentStyle: T.content,
                            graphicDisplayMode: "none",
                            headline: u,
                            isFullHeightOnMobile: !0,
                            onAction: () => {
                                t.push(`/i/communitynotes/t/${r}`);
                            },
                            onClose: c,
                            onSecondaryAction: f.ZP.isTwitterApp() ? void 0 : c,
                            secondaryActionLabel: f.ZP.isTwitterApp() ? void 0 : x,
                            subtext: d,
                            withCloseButton: !f.ZP.isTwitterApp(),
                        })
                    );
                };
        },
        376613: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchForm: () => mt, calculateLengthWithoutUrls: () => ut, default: () => pt });
            var n = a(202784),
                l = a(325686),
                i = a(731708),
                o = a(96083),
                r = a(449479),
                s = a(855488),
                c = a(40610),
                d = a(154003),
                u = a(167630),
                m = a(392237),
                _ = a(674132),
                p = a.n(_),
                h = a(281312),
                f = a(143778),
                g = a(718480),
                b = a(323265),
                E = a(459764),
                w = a(553894),
                y = a(980407),
                v = a(443781),
                Z = a(400196),
                C = a(890655),
                N = a(163889),
                S = a(942893),
                A = a(175856),
                k = a(615027),
                x = a(22730),
                I = a(336502),
                P = a(992942),
                M = a(420412),
                B = a(529356),
                T = a(652904),
                L = a(293115),
                F = a(169584);
            const U = a.p + "at_risk.7a0ea3fa.png";
            var O = a(71620),
                D = a(668214),
                q = a(979090);
            const V = (e, t) => q.PL(e),
                W = (0, D.Z)()
                    .propsFromState(() => ({ enrollmentStatus: V }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, O.zr)("BIRDWATCH_SCREEN"), fetchAuthenticatedUserProfile: q.lC }))
                    .withAnalytics({ page: "birdwatch", section: "contribute_form" }),
                $ = p().j24c37b2,
                z = p().j5f112b4,
                H = p().ac34c5e8,
                j = p().ib7886d0,
                R = p().b0a7d360,
                X = p().e473f876,
                Q = () => n.createElement(P.Z, { source: U, style: J.image }),
                G = { page: "birdwatch", section: "contribute_form", component: "at_risk_education" },
                J = m.default.create((e) => ({ container: { paddingBottom: e.spaces.space16 }, gap: { paddingVertical: e.spaces.space8 }, image: { height: "227px", width: "100%" }, paragraph: { paddingVertical: e.spaces.space12 }, text: { paddingVertical: e.spaces.space4 } })),
                K = W((e) => {
                    const { createLocalApiErrorHandler: t, enrollmentStatus: a, fetchAuthenticatedUserProfile: o, handleAccept: r, handleClose: s } = e;
                    n.useEffect(() => {
                        o().catch(t());
                    }, [t, o]);
                    const c = n.createElement(l.Z, null, a?.top_not_helpful_tags && a.top_not_helpful_tags.length > 0 ? n.createElement(n.Fragment, null, n.createElement(i.ZP, { size: "subtext1" }, H), n.createElement(F.Z, { tags: a.top_not_helpful_tags })) : null, n.createElement(l.Z, null, n.createElement(i.ZP, { link: "/i/communitynotes/u/me", size: "subtext1", style: J.text, weight: "bold", withUnderline: !0 }, j), n.createElement(l.Z, { style: J.gap }, n.createElement(M.Z, null)), n.createElement(i.ZP, { "aria-level": 2, color: "text", role: "heading", size: "headline1", weight: "heavy" }, R), n.createElement(i.ZP, { size: "subtext1", style: J.paragraph }, X)));
                    return n.createElement(L.nO, { namespace: G }, n.createElement(T.Z, null, n.createElement(B.Z, { actionLabel: $, contentStyle: J.container, graphic: Q, graphicDisplayMode: "illustrationFullWidth", headline: z, isFullHeightOnMobile: !0, onAction: r, onClose: s, subtext: c, withCloseButton: !0 })));
                });
            a(136728);
            var Y = a(909377),
                ee = a(593866),
                te = a(121791);
            const ae = a.p + "blocking-earn-in.c20531ca.png",
                ne = p().ed0e6b2e,
                le = p().fdc2060a,
                ie = p().edd80858,
                oe = () => n.createElement(P.Z, { source: ae, style: se.image }),
                re = { page: "birdwatch", section: "contribute_form", component: "blocking_earn_in_education" },
                se = m.default.create((e) => ({ container: { paddingBottom: e.spaces.space24 }, headlineContainer: { marginBottom: e.spaces.space12 }, icon: { backgroundColor: e.colors.gray700, marginEnd: e.spaces.space20 }, image: { height: "227px", width: "100%" }, infoItemBadge: { backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, height: e.spaces.space32, justifyContent: "center", marginEnd: e.spaces.space20, overflow: "hidden", width: e.spaces.space32 }, infoItemContainer: { paddingHorizontal: 0 } })),
                ce = (e) => {
                    const { history: t } = e,
                        a = (e) => n.createElement(l.Z, { style: se.infoItemBadge }, n.createElement(i.ZP, { align: "center", color: "white", weight: "bold" }, e)),
                        o = n.createElement(Y.Z, { Icon: te.default, size: "large", style: se.icon }),
                        r = {
                            "aria-label": le,
                            containerStyle: se.infoItemContainer,
                            items: [
                                { label: p().eec24ff6, decoration: a(1), description: p().eb9dc3ec },
                                { label: p().af9f2b78, decoration: a(2), description: p().af68afc8 },
                                { label: p().f2f61788, decoration: o, description: p().ca7e11e6 },
                            ],
                        },
                        s = n.createElement(l.Z, { style: se.container }, n.createElement(ee.Z, r)),
                        c = n.useCallback(() => {
                            t.push("/i/birdwatch");
                        }, [t]),
                        d = n.useCallback(() => {
                            t.push("/i/communitynotes/u/me");
                        }, [t]),
                        u = n.useCallback(() => {
                            t.goBackThroughModals({ fallbackPath: "/" });
                        }, [t]);
                    return n.createElement(L.nO, { namespace: re }, n.createElement(T.Z, null, n.createElement(B.Z, { actionLabel: ne, children: s, contentStyle: se.headlineContainer, graphic: oe, graphicDisplayMode: "illustrationFullWidth", headline: le, isFullHeightOnMobile: !0, onAction: c, onClose: u, onSecondaryAction: d, secondaryActionLabel: ie, subtext: null, withBottomPadding: !1, withCloseButton: !b.ZP.isTwitterApp() })));
                };
            var de = a(916616),
                ue = a(500914),
                me = a(933610);
            const _e = ["misleading_tags", "not_misleading_tags"],
                pe = p().i0e66c5a,
                he = p().j8e3e3be,
                fe = p().f1e851f0,
                ge = p().ff5dcac8,
                be = p().b47b5a16,
                Ee = p().g9cffe16,
                we = p().bfa9e276,
                ye = p().ja36d83e,
                ve = p().i6488a04,
                Ze = { classification: pe, is_media_note: pe, is_url_note: pe, misleading_tags: he, summary: fe, not_misleading_tags: he, is_helpful_for_all_posts: he, trustworthy_sources: pe },
                Ce = (e, t, a) => ("is_helpful_for_all_posts" !== e || ("false" !== t && !1 !== t) ? (void 0 === t ? pe : "") : "SingleImage" === a ? we : "SingleVideo" === a ? ye : ve),
                Ne = (e, t) => {
                    const a = (0, ue.Z)(e);
                    if (!e) return fe;
                    const n = ut(e.trim());
                    return n <= 0 ? fe : n > 280 ? ge : 0 === a?.length && t ? Ee : "";
                },
                Se = (e, t) => {
                    const a = Ze;
                    return (
                        Ce("classification", e.data_v1.classification || "", t),
                        Ce("trustworthy_sources", e.data_v1.trustworthy_sources, t),
                        Ce("is_url_note", e.data_v1.is_url_note || "", t),
                        Ce("is_media_note", e.is_media_note || "", t),
                        Ce("is_helpful_for_all_posts", e.is_helpful_for_all_posts || "", t),
                        _e.forEach((t) => {
                            var n;
                            a[t] = (n = e.data_v1[t]) && n.length > 0 ? "" : he;
                        }),
                        (a.summary = Ne(e.data_v1.summary, e.data_v1.classification === me.pq)),
                        a
                    );
                },
                Ae = (e) => {
                    const { error: t, showErrors: a } = e;
                    return a && "" !== t && n.createElement(c.Z.Attention, { text: t, withIcon: !0 });
                };
            var ke = a(630715),
                xe = a(452693);
            const Ie = p().abdd8d0a,
                Pe = { explanation: p().c097608e, source: p().g9cffe16 },
                Me = { explanation: p().ba25898c, source: p().e764d704 },
                Be = { explanation: p().gb67e44c, source: p().d6b758a2 },
                Te = () => {},
                Le = (e) => {
                    const { handleNudgeEdit: t, handleSubmitAnyways: a, showNudge: l } = e;
                    return n.createElement(B.Z, { actionLabel: Ie, graphic: "source" === l ? ke.default : xe.default, graphicDisplayMode: "thumbnail", headline: Pe[l], onAction: t, onClose: Te, onTertiaryAction: a, subtext: Me[l], tertiaryActionLabel: Be[l], withCloseButton: !1 });
                };
            var Fe = a(593784),
                Ue = a(150236),
                Oe = a(601576),
                De = a(836255);
            const qe = (e, t) => q.Lt(e, Ve(e, t)),
                Ve = (e, t) => t.match.params.tweetId,
                We = (e, t) => q.dw(e, Ve(e, t)),
                $e = (e, t) => q.Jn(e, Ve(e, t)),
                ze = (e, t) => q.gH(e, q.OV(e)),
                He = (e, t) => q.BG(e),
                je = (e, t) => q.PL(e),
                Re = (e, t) => q.et(e),
                Xe = (e, t) => q.f3(e, Ve(e, t)),
                Qe = (0, D.Z)()
                    .propsFromState(() => ({ draftData: $e, notesCount: ze, tweetFetchStatus: Xe, matchData: Re, enrollmentStatus: je, ownNoteData: We, misleadingNotes: qe, tweetId: Ve, showAliasSelfSelect: He, userAlias: q.OV, daysSinceAtRiskEducation: (e, t) => (0, A.O7)(e, A.gQ) }))
                    .propsFromActions(() => ({ addFlag: A.pj, addToast: Oe.fz, createLocalApiErrorHandler: (0, O.zr)("BIRDWATCH_SCREEN"), createNote: q.kT, fetchCanTweetBeMatchNote: q.pN, fetchBirdwatchProfile: q.mv, fetchNotes: q.Pi, fetchShowAliasSelfSelect: q.aZ, fetchTweet: De.Z.fetchOneIfNeeded, fetchAuthenticatedUserProfile: q.lC, saveFormData: q.Ld }))
                    .withAnalytics({ page: "birdwatch", section: "contribute_form" }),
                Ge = p().i9028824,
                Je = p().d39e8b30,
                Ke = p().a91bb144,
                Ye = p().dc7a6625,
                et = p().g17e4064,
                tt = p().j679dcda,
                at = { external: !0, pathname: "https://twitter.github.io/communitynotes/note-examples" },
                nt = p().d9b09ee8,
                lt = p().b7476596,
                it = p().df6c8292,
                ot = p().ecb4d20c,
                rt = ["summary", "trustworthy_sources"],
                st = ["misleading_tags"],
                ct = ["not_misleading_tags"],
                dt = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
                ut = (e) => (0, g.Z)(e, dt).weightedLength,
                mt = (e) => {
                    const { addFlag: t, addToast: a, analytics: m, createLocalApiErrorHandler: _, createNote: p, daysSinceAtRiskEducation: g, draftData: P, enrollmentStatus: M, fetchAuthenticatedUserProfile: B, fetchBirdwatchProfile: T, fetchCanTweetBeMatchNote: L, fetchNotes: F, fetchShowAliasSelfSelect: U, fetchTweet: O, history: D, matchData: q, misleadingNotes: V, notesCount: W, ownNoteData: $, saveFormData: z, showAliasSelfSelect: H, tweetFetchStatus: j, tweetId: R, userAlias: X } = e,
                        { featureSwitches: Q } = n.useContext(v.rC),
                        G = Q.isTrue("responsive_web_birdwatch_media_notes_enabled"),
                        J = Q.isTrue("responsive_web_birdwatch_url_notes_enabled"),
                        Y = (0, w.u)(W),
                        ee = Y >= Q.getNumberValue("responsive_web_birdwatch_top_contributor_score_cutoff"),
                        te = Q.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") >= 0 ? Y >= Q.getNumberValue("responsive_web_birdwatch_media_note_eligible_writer_impact_cutoff") : Y >= Q.getNumberValue("responsive_web_birdwatch_top_contributor_score_cutoff"),
                        ae = V.length > 0,
                        ne = (e, t) => e?.enrollment_state === I.B.AtRisk && (null === t || t >= 10),
                        le = M?.enrollment_state === I.B.EarnedOutNoAcknowledge || M?.enrollment_state === I.B.EarnedOutAcknowledged,
                        ie = M?.enrollment_state === I.B.NewUser,
                        [oe, re] = n.useState(P || { data_v1: { classification: E.d.MisinformedOrPotentiallyMisleading, trustworthy_sources: void 0, misleading_tags: [], not_misleading_tags: [], is_url_note: void 0 }, is_media_note: void 0, is_helpful_for_all_posts: void 0 }),
                        se = q.mediaNoteCategory || "Unsupported",
                        [_e, pe] = n.useState(Se(oe, se)),
                        [fe, ge] = n.useState(!1),
                        [Ee, we] = n.useState(!1),
                        [ye, ve] = n.useState(null),
                        [Ze, ke] = n.useState(H),
                        [xe, Ie] = n.useState(),
                        [Pe, Me] = n.useState(ne(M, g)),
                        [Be, Te] = n.useState(null),
                        Oe = `/i/communitynotes/${R}/contribute_complete`,
                        {
                            data_v1: { classification: De, is_url_note: qe, trustworthy_sources: Ve },
                            is_helpful_for_all_posts: We,
                            is_media_note: $e,
                        } = oe,
                        ze = Be === me.pq || null === Be;
                    n.useEffect(() => {
                        R && (O(R).catch(_()), F(R).catch(_()), L(R).catch(_()));
                    }, [_, L, F, O, R]),
                        n.useEffect(() => {
                            B().catch(_());
                        }, [_, B, H]),
                        n.useEffect(() => {
                            U().catch(_());
                        }, [_, U, H]),
                        n.useEffect(() => {
                            ke(H);
                        }, [H]),
                        n.useEffect(() => {
                            X && T(X).catch(_());
                        }, [_, T, X, W]),
                        n.useEffect(() => {
                            Me(ne(M, g));
                        }, [M, g]);
                    const He = (e) => {
                            const t = S.Z.forTweet(R);
                            m.scribe({ element: e, action: "click", data: { targets: [t] } });
                        },
                        je = (e) => (t, a) => {
                            He(e);
                            const n = "true" === a;
                            re((t) => {
                                if ("is_media_note" === e) {
                                    const e = { data_v1: { ...t.data_v1, is_url_note: void 0 }, is_media_note: n, is_helpful_for_all_posts: t.is_helpful_for_all_posts, tweetId: R };
                                    return z(e), e;
                                }
                                if ("is_url_note" === e) {
                                    const e = { data_v1: { ...t.data_v1, is_url_note: n }, is_media_note: void 0, is_helpful_for_all_posts: t.is_helpful_for_all_posts, tweetId: R };
                                    return z(e), e;
                                }
                                if ("is_helpful_for_all_posts" === e) {
                                    const e = { data_v1: { ...t.data_v1 }, is_media_note: t.is_media_note, is_helpful_for_all_posts: n, tweetId: R };
                                    return z(e), e;
                                }
                                {
                                    const e = { data_v1: { ...t.data_v1, trustworthy_sources: n }, is_media_note: t.is_media_note, is_helpful_for_all_posts: t.is_helpful_for_all_posts, tweetId: R };
                                    return z(e), e;
                                }
                            }),
                                pe((n) => ({ ...n, [e]: Ce(t, a, se) }));
                        },
                        Re = (e) => (t) => () => {
                            re((a) => {
                                if (!a.data_v1[e]) {
                                    pe((t) => ({ ...t, [e]: "" }));
                                    const n = { ...a, data_v1: { ...a.data_v1, [e]: [t] } };
                                    return z({ data_v1: n.data_v1, tweetId: R }), n;
                                }
                                const n = a.data_v1[e].includes(t),
                                    l = a.data_v1[e].filter((e) => e !== t);
                                if (n) {
                                    pe((t) => (l.length > 0 ? { ...t, [e]: "" } : { ...t, [e]: he }));
                                    const t = { ...a, data_v1: { ...a.data_v1, [e]: l } };
                                    return z({ data_v1: t.data_v1, tweetId: R }), t;
                                }
                                {
                                    pe((t) => ({ ...t, [e]: "" }));
                                    const n = { ...a, data_v1: { ...a.data_v1, [e]: [...a.data_v1[e], t] } };
                                    return z({ data_v1: n.data_v1, tweetId: R }), n;
                                }
                            });
                        },
                        Xe = (e) => e.map(({ label: e, value: t }) => ({ label: e, value: t.toString() }));
                    function Qe() {
                        const e = oe?.data_v1.misleading_tags || [],
                            t = (0, me.SD)({ isMediaNote: !!$e, isUrlNote: !!qe, mediaType: se, question: me.Xl.misleading_tags }),
                            a = me.Xl.misleading_tags.options.map((e) => ($e && e.value === me.gW ? { ...e, label: me.m1.mediaNote } : e)).filter((e) => !qe || e.value !== me.gW);
                        return Be && Be !== me.pq
                            ? null
                            : n.createElement(
                                  l.Z,
                                  null,
                                  n.createElement(
                                      l.Z,
                                      { style: _t.questionSection },
                                      n.createElement(
                                          l.Z,
                                          { "aria-label": t, role: "group" },
                                          n.createElement(i.ZP, { weight: "bold" }, t, " "),
                                          a.map((t) => n.createElement(o.Z, { checked: e.includes(t.value), key: t.value, label: t.label, onChange: Re("misleading_tags")(t.value), style: _t.checkbox })),
                                          n.createElement(Ae, { error: _e.misleading_tags, showErrors: fe }),
                                      ),
                                  ),
                              );
                    }
                    function dt() {
                        const e = oe?.data_v1.not_misleading_tags || [],
                            t = (0, me.SD)({ mediaType: se, isMediaNote: !!$e, isUrlNote: !!qe, question: me.Xl.not_misleading_tags }),
                            a = me.Xl.not_misleading_tags.options;
                        return Be === me.pq || null === Be
                            ? null
                            : n.createElement(
                                  l.Z,
                                  { style: _t.questionSection },
                                  n.createElement(
                                      l.Z,
                                      { "aria-label": t, role: "group" },
                                      n.createElement(i.ZP, { weight: "bold" }, t, " "),
                                      a.map((t) => n.createElement(o.Z, { checked: e.includes(t.value), key: t.value, label: t.label, onChange: Re("not_misleading_tags")(t.value), style: _t.checkbox })),
                                      n.createElement(Ae, { error: _e.not_misleading_tags, showErrors: fe }),
                                  ),
                              );
                    }
                    function mt() {
                        if (te && G && q.canBeMediaNote) {
                            if (ee && q.canBeUrlNote) return null;
                            const e = (0, me.WT)(se);
                            return n.createElement(l.Z, { style: _t.questionSection }, n.createElement(r.Z, { label: e.label, name: "is_media_note_radio", onChange: je("is_media_note"), options: Xe(e.options), value: vt($e) }), n.createElement(Ae, { error: _e.is_media_note, showErrors: fe }));
                        }
                        return null;
                    }
                    function pt() {
                        if (ee && J && !q.canBeMediaNote && q.canBeUrlNote) {
                            const e = (0, me.jx)(q.noteMatchUrl);
                            return n.createElement(l.Z, { style: _t.questionSection }, n.createElement(r.Z, { label: e.label, name: "is_url_note_radio", onChange: je("is_url_note"), options: Xe(e.options), value: vt(qe) }), n.createElement(Ae, { error: _e.is_url_note, showErrors: fe }));
                        }
                        return null;
                    }
                    function ht() {
                        if (ee && J && G && q.canBeMediaNote && q.canBeUrlNote) {
                            const t = (0, me.bX)(q.noteMatchUrl, se);
                            let a = qe ? "is_url_note" : $e ? "is_media_note" : "";
                            return (
                                void 0 === qe && void 0 === $e && (a = null),
                                n.createElement(
                                    l.Z,
                                    { style: _t.questionSection },
                                    n.createElement(r.Z, {
                                        label: t.label,
                                        name: "is_mixed_match_note_radio",
                                        onChange:
                                            ((e = "is_mixed_match"),
                                            (t, a) => {
                                                He(e),
                                                    re((e) => {
                                                        if ("is_media_note" === a) {
                                                            const t = { data_v1: { ...e.data_v1, is_url_note: !1 }, is_media_note: !0, is_helpful_for_all_posts: e.is_helpful_for_all_posts, tweetId: R };
                                                            return z(t), t;
                                                        }
                                                        if ("is_url_note" === a) {
                                                            const t = { data_v1: { ...e.data_v1, is_url_note: !0 }, is_media_note: !1, is_helpful_for_all_posts: e.is_helpful_for_all_posts, tweetId: R };
                                                            return z(t), t;
                                                        }
                                                        {
                                                            const t = { data_v1: { ...e.data_v1, is_url_note: !1 }, is_media_note: !1, is_helpful_for_all_posts: e.is_helpful_for_all_posts, tweetId: R };
                                                            return z(t), t;
                                                        }
                                                    });
                                            }),
                                        options: Xe(t.options),
                                        value: a,
                                    }),
                                    n.createElement(Ae, { error: _e.is_url_note || _e.is_media_note, showErrors: fe }),
                                )
                            );
                        }
                        var e;
                        return null;
                    }
                    function ft() {
                        if (!ae) return null;
                        const e = (0, me.SD)({ isMediaNote: !!$e, isUrlNote: !!qe, question: me.Xl.classification, mediaType: se });
                        return n.createElement(
                            l.Z,
                            { style: _t.questionSection },
                            n.createElement(r.Z, {
                                label: e,
                                name: "misleading_radio",
                                onChange: (e, t) => {
                                    He("classification"),
                                        re((e) => {
                                            const a = { data_v1: { ...e.data_v1, classification: t }, is_media_note: e.is_media_note, is_helpful_for_all_posts: e.is_helpful_for_all_posts, tweetId: R };
                                            return z(a), a;
                                        }),
                                        pe((a) => ({ ...a, classification: Ce(e, t, se) })),
                                        Te(t),
                                        pe((a) => ({ ...a, classification: Ce(e, t, se) }));
                                },
                                options: me.Xl.classification.options,
                                value: Be,
                            }),
                            n.createElement(Ae, { error: _e.classification, showErrors: fe }),
                        );
                    }
                    const gt = (e) => 0 === e.filter((e) => !!_e[e]).length,
                        bt = () => {
                            const e = oe.data_v1.summary || "";
                            return !(!gt(rt) || "" !== Ne(e, ze) || ($e && _e.is_helpful_for_all_posts)) && !!((De === me.pq && gt(st)) || (De === me.iM && gt(ct)));
                        },
                        Et = () => {
                            we(!0),
                                p(R, oe.data_v1, $e, We)
                                    .then((e) => {
                                        if (e && e.error) {
                                            const { error_code: t } = e;
                                            if (t && Fe.h.hasOwnProperty(t)) return void Ie(Fe.h[t]);
                                            const n = `${e.error}: ${JSON.stringify(e.reason || "")}`;
                                            a({ text: n, withAutoDismiss: !1, withClearButton: !0 }), (0, N.ZP)(`BirdwatchNoteCreationFailure: ${n}`), He("submit_failed"), we(!1);
                                        } else z({ data_v1: {}, tweetId: R }), D.replace(yt);
                                    })
                                    .catch((e) => {
                                        _({ defaultToast: { text: ot, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e), we(!1), He("submit_failed"), (0, N.ZP)(`BirdwatchNoteCreationFailure: ${JSON.stringify(e)}`);
                                    });
                        },
                        wt = () => {
                            He("submit"), ge(!0);
                            const e = ((e) => {
                                const t = (0, ue.Z)(e.data_v1.summary);
                                if (0 === t?.length) return "source";
                                let a = e.data_v1.summary;
                                return (
                                    t.forEach((e) => {
                                        if (!a) return "explanation";
                                        a = a.replace(e, "");
                                    }),
                                    a && 0 !== a.trim().length ? null : "explanation"
                                );
                            })(oe);
                            bt() && (e ? ve(e) : Et());
                        },
                        yt = De ? `${Oe}/${Ue.F[De]}` : Oe,
                        vt = (e) => (!0 === e ? "true" : !1 === e ? "false" : ""),
                        Zt = X && (0, C.Q)(X, !0),
                        Ct = () => {
                            He("close"), D.goBack();
                        },
                        Nt = f.Z,
                        St = (e) => {
                            ke(e);
                        },
                        At = () => {
                            t(A.gQ), Me(!1);
                        },
                        kt = () => {
                            Ie(null);
                        },
                        xt = n.createElement(
                            y.Z,
                            { history: D, onBackClick: Ct, renderHeader: b.ZP.isTwitterApp() ? Nt : void 0, title: Je },
                            n.createElement(
                                l.Z,
                                { style: _t.contentWrapper },
                                n.createElement(l.Z, { style: _t.tweetContainer }, n.createElement(Z.ZP, { displayPromotedContent: !1, tweetId: R, withCurationMenu: !1 })),
                                "loaded" !== q.fetchStatus || "loaded" !== j
                                    ? n.createElement(l.Z, { style: _t.loadingContainer }, n.createElement(u.Z, { "aria-label": Ge }))
                                    : n.createElement(
                                          l.Z,
                                          { style: _t.formQuestions },
                                          n.createElement(mt, null),
                                          n.createElement(pt, null),
                                          n.createElement(ht, null),
                                          n.createElement(ft, null),
                                          (() => {
                                              if (ae && !Be) return null;
                                              if (q.canBeMediaNote && G && te && void 0 === $e) return null;
                                              if (q.canBeUrlNote && J && ee && void 0 === qe) return null;
                                              const e = n.createElement(
                                                      l.Z,
                                                      { style: _t.questionSection },
                                                      n.createElement(
                                                          l.Z,
                                                          { "aria-label": (0, me.Uq)({ mediaType: se, isMisleading: ze, isMediaNote: !0 === $e, isUrlNote: !0 === qe }), role: "group" },
                                                          n.createElement(i.ZP, { weight: "bold" }, (0, me.Uq)({ mediaType: se, isMisleading: ze, isMediaNote: !0 === $e, isUrlNote: !0 === qe })),
                                                          n.createElement(i.ZP, { link: at }, tt),
                                                          n.createElement(s.Z, {
                                                              calculateLength: ut,
                                                              helperText: ze ? nt : lt,
                                                              invalid: !!_e.summary && fe,
                                                              label: it,
                                                              maxNumberOfLines: 20,
                                                              multiline: !0,
                                                              name: "FormTextInput",
                                                              numberOfLines: 5,
                                                              onBlur: (e) => {
                                                                  z({ data_v1: oe.data_v1, tweetId: R });
                                                              },
                                                              onChange: (e) => {
                                                                  const t = e.target.value;
                                                                  re((e) => ({ ...e, data_v1: { ...e.data_v1, summary: t } })), pe((e) => ({ ...e, summary: Ne(t, ze) }));
                                                              },
                                                              style: _t.textInput,
                                                              validLength: 280,
                                                              value: oe?.data_v1.summary,
                                                          }),
                                                          n.createElement(Ae, { error: _e.summary, showErrors: fe }),
                                                      ),
                                                  ),
                                                  t = V.filter((e) => e.is_media_note),
                                                  a = t.length > 0 ? t.reduce((e, t) => ((t.media_note_matches_v2?.match_count || 0) > (e.media_note_matches_v2?.match_count || 0) ? t : e), t[0]) : void 0,
                                                  o = (0, me.X3)((t.length > 0 && a?.rest_id) || "", se, (t.length > 0 && a?.media_note_matches_v2?.match_count) || 0),
                                                  u = te && G && !0 === $e ? n.createElement(l.Z, { style: _t.questionSection }, n.createElement(r.Z, { label: o.label, name: "is_helpful_for_all_posts", onChange: je("is_helpful_for_all_posts"), options: ((m = o.options), m.map(({ helpText: e, label: t, value: a }) => ({ label: t, helpText: e, value: a.toString() }))), value: vt(We) }), n.createElement(Ae, { error: _e.is_helpful_for_all_posts, showErrors: fe })) : null;
                                              var m;
                                              const _ = n.createElement(l.Z, { style: _t.questionSection }, n.createElement(r.Z, { label: me.Xl.trustworthy_sources.label, name: "trustworthy_sources_radio", onChange: je("trustworthy_sources"), options: Xe(me.Xl.trustworthy_sources.options), value: vt(Ve) }), n.createElement(Ae, { error: _e.trustworthy_sources, showErrors: fe })),
                                                  p = Zt && n.createElement(l.Z, { style: _t.callout }, n.createElement(c.Z.Custom, { Icon: h.default, headline: Ye({ displayAlias: Zt }), text: et }));
                                              return n.createElement(n.Fragment, null, n.createElement(Qe, null), n.createElement(dt, null), e, u, _, p, fe && !bt() && n.createElement(l.Z, { style: _t.callout }, n.createElement(c.Z.Attention, { text: be, withIcon: !0 })), n.createElement(d.ZP, { disabled: Ee, onPress: wt, style: _t.submitButton, type: "brandFilled" }, Ke));
                                          })(),
                                      ),
                            ),
                        );
                    return xe ? n.createElement(Fe.Z, { errorCode: xe, onClose: kt }) : Ze ? n.createElement(x.Z, { onAliasSelected: St }) : $ ? n.createElement(k.Z, { to: yt }) : Pe ? n.createElement(K, { handleAccept: At, handleClose: Ct }) : ie ? n.createElement(ce, { history: D }) : le ? n.createElement(de.Z, { history: D }) : ye ? n.createElement(Le, { handleNudgeEdit: () => ve(null), handleSubmitAnyways: () => Et(), showNudge: ye, tweetId: R, userResponse: oe }) : xt;
                },
                _t = m.default.create((e) => ({ callout: { marginTop: e.spaces.space12 }, checkbox: { paddingVertical: e.spaces.space8 }, contentWrapper: { backgroundColor: e.colors.cellBackground }, formQuestions: { paddingHorizontal: e.spaces.space36, paddingVertical: e.spaces.space16 }, noteText: { backgroundColor: e.colors.gray50, padding: e.spaces.space12 }, questionSection: { paddingBottom: e.spaces.space20 }, submitButton: { marginVertical: e.spaces.space16 }, textInput: { paddingHorizontal: 0 }, tweetContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, loadingContainer: { paddingVertical: e.spaces.space40 } })),
                pt = Qe(mt);
        },
        933610: (e, t, a) => {
            a.d(t, { SD: () => _, Uq: () => m, WT: () => p, X3: () => g, Xl: () => u, bX: () => f, gW: () => c, iM: () => s, jx: () => h, m1: () => d, pq: () => r });
            var n = a(202784),
                l = a(731708),
                i = a(674132),
                o = a.n(i);
            const r = "MisinformedOrPotentiallyMisleading",
                s = "NotMisleading",
                c = "ManipulatedMedia",
                d = { default: o().j6e12b24, mediaNote: o().eda68484 },
                u = {
                    noteText: { misleading: { label: { video: o().e198eb8c, image: o().a9803d44, link: o().j7ddf18a, default: o().g3874520 } }, notMisleading: { label: { video: o().ac1141aa, image: o().f99ebcfc, link: o().j7ddf18a, default: o().h641949e } } },
                    classification: {
                        label: { default: o().c926cff6, image: o().e0ef7a2c, video: o().g491d33a, link: o().b253e462 },
                        options: [
                            { label: o().b1b2d004, value: r },
                            { label: o().ha9655c2, value: s },
                        ],
                    },
                    misleading_tags: {
                        label: { default: o().ebd2de06, image: o().i865abe8, video: o().add096c6, link: o().eb604e2e },
                        options: [
                            { label: o().c33bc7d4, value: "FactualError" },
                            { label: d.default, value: c },
                            { label: o().aadb676c, value: "OutdatedInformation" },
                            { label: o().g21a0ef4, value: "MissingImportantContext" },
                            { label: o().daf354de, value: "DisputedClaimAsFact" },
                            { label: o().d1d2ef84, value: "MisinterpretedSatire" },
                            { label: o().c365dcc6, value: "Other" },
                        ],
                    },
                    not_misleading_tags: {
                        label: { default: o().bfee6064, image: o().dfd1f7f0, video: o().b8623176, link: o().ec66e3fc },
                        options: [
                            { label: o().g228df26, value: "FactuallyCorrect" },
                            { label: o().h890a3f2, value: "OutdatedNowButNotWhenWritten" },
                            { label: o().hf607a0a, value: "ClearlySatire" },
                            { label: o().j6ac7742, value: "PersonalOpinion" },
                            { label: o().c365dcc6, value: "Other" },
                        ],
                    },
                    trustworthy_sources: {
                        label: o().b1d82aae,
                        options: [
                            { label: o().b7ec04f4, value: !0 },
                            { label: o().i62a03aa, value: !1 },
                        ],
                    },
                };
            function m({ isMediaNote: e, isMisleading: t, isUrlNote: a, mediaType: n }) {
                return _(t ? { question: u.noteText.misleading, isMediaNote: e, isUrlNote: a, mediaType: n } : { question: u.noteText.notMisleading, isMediaNote: e, isUrlNote: a, mediaType: n });
            }
            function _({ isMediaNote: e, isUrlNote: t, mediaType: a, question: n }) {
                if (t) return n.label.link;
                if (e) {
                    if ("SingleImage" === a) return n.label.image;
                    if ("SingleVideo" === a) return n.label.video;
                }
                return n.label?.default || "";
            }
            function p(e) {
                return {
                    label: "SingleImage" === e ? o().ae859ee0 : o().ba84e7f8,
                    options: [
                        { label: o().ibb784c6, value: !1 },
                        { label: "SingleImage" === e ? o().a21ecb8c : o().he0ca8da, value: !0 },
                    ],
                };
            }
            function h(e) {
                const t = e || "",
                    a = { displayUrlLink: n.createElement(l.ZP, { color: "blue500", link: t, withInteractiveStyling: !0, withUnderline: !0 }) },
                    i = n.createElement(o().I18NFormatMessage, { $i18n: "e3a1e2a3" }, n.cloneElement(a.displayUrlLink, null, o().gb2433df({ noteMatchUrl: t })));
                return {
                    label: o().d0bf8d34,
                    options: [
                        { label: o().ibb784c6, value: !1 },
                        { label: i, value: !0 },
                    ],
                };
            }
            function f(e, t) {
                const a = e || "",
                    i = { displayUrlLink: n.createElement(l.ZP, { color: "blue500", link: a, withInteractiveStyling: !0, withUnderline: !0 }) },
                    r = n.createElement(o().I18NFormatMessage, { $i18n: "e3a1e2a3" }, n.cloneElement(i.displayUrlLink, null, o().gb2433df({ noteMatchUrl: a })));
                return {
                    label: "SingleImage" === t ? o().db370b9a : o().c35bf10e,
                    options: [
                        { label: o().ibb784c6, value: "" },
                        { label: "SingleImage" === t ? o().a21ecb8c : o().he0ca8da, value: "is_media_note" },
                        { label: r, value: "is_url_note" },
                    ],
                };
            }
            function g(e, t, a) {
                const i = { mediaMatchesLink: a > 0 ? n.createElement(l.ZP, { color: "blue500", link: `/i/communitynotes/m/${e}`, withInteractiveStyling: !0, withUnderline: !0 }) : n.createElement(l.ZP, { color: "gray700" }) },
                    r = "SingleImage" === t ? (a > 0 ? n.createElement(o().I18NFormatMessage, { $i18n: "eb0960b9" }, n.cloneElement(i.mediaMatchesLink, null, o().gdfbdd93({ matchCount: a }))) : n.createElement(o().I18NFormatMessage, { $i18n: "c14fcfe5" })) : "SingleVideo" === t ? (a > 0 ? n.createElement(o().I18NFormatMessage, { $i18n: "f8d04b49" }, n.cloneElement(i.mediaMatchesLink, null, o().d7959c4d({ matchCount: a }))) : n.createElement(o().I18NFormatMessage, { $i18n: "ef94efc3" })) : a > 0 ? n.createElement(o().I18NFormatMessage, { $i18n: "a89cdd31" }, n.cloneElement(i.mediaMatchesLink, null, o().ff5be16d({ matchCount: a }))) : n.createElement(o().I18NFormatMessage, { $i18n: "f19fb541" }),
                    s = "SingleImage" === t ? o().d96ce0d2 : "SingleVideo" === t ? o().a1fb516c : o().be46a61e,
                    c = o().ied1c2c2;
                return {
                    label: r,
                    options: [
                        { label: o().b7ec04f4, helpText: s, value: !0 },
                        { label: o().i62a03aa, helpText: c, value: !1 },
                    ],
                };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-4ee0261e.b0654afa.js.map
