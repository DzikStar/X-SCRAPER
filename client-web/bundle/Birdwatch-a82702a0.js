"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-a82702a0"],
    {
        286471: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteRequestComplete: () => C, default: () => M });
            a(136728);
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(688715),
                c = a(40610),
                s = a(190286),
                l = a(529356),
                p = a(392237),
                d = a(674132),
                m = a.n(d),
                u = a(323265),
                h = a(301758),
                g = a(71620),
                w = a(668214),
                f = a(979090),
                y = a(836255);
            const b = (e, t) => t.match.params.tweetId,
                E = (e, t) => {
                    const a = b(0, t);
                    return a ? y.Z.selectHydrated(e, a) : void 0;
                },
                Z = (0, w.Z)()
                    .propsFromState(() => ({ tweetId: b, tweet: E }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("BIRDWATCH_NOTE_REQUEST_COMPLETE"), fetchTweet: y.Z.fetchOneIfNeeded, deleteBirdwatchBatSignal: f.V0 }))
                    .withAnalytics({ page: "birdwatch", section: "note_request_form", component: "values" }),
                I = m().cb6b0138,
                v = m().c196e8b8,
                B = m().b772cd66,
                A = m().a9491efa,
                T = m().f060d1cc,
                S = m().f499f824,
                P = m().f060d1cc,
                _ = m().hd1bc518,
                C = (e) => {
                    const { createLocalApiErrorHandler: t, deleteBirdwatchBatSignal: a, fetchTweet: p, history: d, tweetId: g } = e;
                    n.useEffect(() => {
                        g && p(g).catch(t());
                    }, [t, p, g]);
                    const [w, f] = n.useState(!1),
                        y = () => {
                            u.ZP.isTwitterApp() || d.replace(`/i/status/${g}`);
                        },
                        b = () => {
                            a(g)
                                .then(() => d.push(`/i/communitynotes/noterequest/${g}/deleted`))
                                .catch(t());
                        },
                        E = n.createElement(i.ZP, { color: "gray700", style: k.learnMore, withInteractiveStyling: !1 }, n.createElement(m().I18NFormatMessage, { $i18n: "i9e31fe5" }, n.createElement(i.ZP, { color: "gray700", link: (0, o.ju)("https://communitynotes.x.com/guide"), withUnderline: !0 }, m().c81085a4))),
                        Z = n.createElement(i.ZP, { color: "gray700", style: k.signup, withInteractiveStyling: !1 }, n.createElement(m().I18NFormatMessage, { $i18n: "c43ef159" }, n.createElement(i.ZP, { color: "gray700", link: "/i/flow/join-birdwatch", withUnderline: !0 }, m().geb8d31d))),
                        C = n.createElement(
                            r.Z,
                            { style: k.values },
                            n.createElement(i.ZP, { color: "gray700", style: k.requestSubTitle }, v),
                            n.createElement(h.Z, {
                                isCondensed: !0,
                                onPress: (e) => {
                                    u.ZP.isTwitterApp() && (u.ZP.isAndroid() || (e.preventDefault(), (window.location.pathname = `/i/status/${g}`)));
                                },
                                shouldShowBorder: !0,
                                tweetId: g,
                                withBirdwatchPivot: !1,
                            }),
                            n.createElement(r.Z, { style: k.deleteCallout }, n.createElement(c.Z.Primary, { action: { label: T, link: "" }, headline: A, onAction: () => f(!0), withIcon: !0 })),
                            Z,
                            E,
                        );
                    return w ? n.createElement(s.Z, { confirmButtonLabel: P, confirmButtonType: "destructiveFilled", headline: S, onCancel: () => f(!1), onConfirm: b, text: _ }) : n.createElement(l.Z, { actionLabel: u.ZP.isTwitterApp() ? void 0 : B, graphicDisplayMode: "none", headline: I, isFullHeightOnMobile: !0, onAction: y, onClose: y, subtext: C, withCloseButton: !u.ZP.isTwitterApp() });
                },
                k = p.default.create((e) => ({ signup: { marginTop: e.spaces.space16, marginBottom: e.spaces.space4, display: "inline-block" }, learnMore: { marginBottom: e.spaces.space4 }, requestSubTitle: { marginBottom: e.spaces.space12 }, values: { marginVertical: e.spaces.space4, textAlign: "start", width: "100%" }, deleteCallout: { paddingVertical: e.spaces.space16, marginBottom: e.spaces.space4 } })),
                M = Z(C);
        },
        52665: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteRequestDailyLimit: () => A, default: () => S });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(593866),
                c = a(529356),
                s = a(392237),
                l = a(674132),
                p = a.n(l),
                d = a(669563),
                m = a(536698),
                u = a(323265),
                h = a(71620),
                g = a(668214);
            const w = (e, t) => t.match.params.tweetId,
                f = (0, g.Z)()
                    .propsFromState(() => ({ tweetId: w }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("BIRDWATCH_NOTE_REQUES_DAILY_LIMIT") }))
                    .withAnalytics({ page: "birdwatch", section: "note_request_form", component: "values" }),
                y = p().gc399930,
                b = p().fee815e4,
                E = p().i7eb7900,
                Z = p().d1a3817e,
                I = p().c031c77a,
                v = p().f87129d2,
                B = p().b772cd66,
                A = (e) => {
                    const { history: t, tweetId: a } = e,
                        s = () => {
                            u.ZP.isTwitterApp() || t.replace(`/i/status/${a}`);
                        },
                        l = (e, t) => n.createElement(r.Z, { style: T.valueItem }, n.createElement(i.ZP, { color: "buttonBlack", style: T.valueItemTitle }, e), n.createElement(i.ZP, { color: "gray700", style: T.valueItemSubtitle }, t)),
                        p = {
                            "aria-label": y,
                            containerStyle: T.infoItemContainer,
                            items: [
                                { label: "", decoration: n.createElement(d.default, { style: T.rotateicon }), description: l(E, Z) },
                                { label: "", decoration: n.createElement(d.default, { style: T.iconspace }), description: l(I, v) },
                            ],
                        },
                        h = n.createElement(r.Z, { style: T.values }, n.createElement(o.Z, p));
                    return n.createElement(c.Z, { actionLabel: u.ZP.isTwitterApp() ? void 0 : B, graphic: m.default, graphicDisplayMode: "icon", headline: b, isFullHeightOnMobile: !0, onAction: s, onClose: s, subtext: h, withCloseButton: !u.ZP.isTwitterApp() });
                },
                T = s.default.create((e) => ({ infoItemContainer: { paddingHorizontal: 0 }, valueItem: { flexDirection: "column", marginStart: e.spaces.space16 }, valueItemSubtitle: { fontSize: e.fontSizes.subtext2 }, valueItemTitle: { fontWeight: e.fontWeights.bold }, values: { marginVertical: e.spaces.space4, textAlign: "start", width: "100%" }, icon: { color: e.colors.buttonBlack, height: e.spaces.space24, width: e.spaces.space24, marginVertical: e.spaces.space12 }, iconspace: { color: e.colors.buttonBlack, height: e.spaces.space24, width: e.spaces.space24 }, rotateicon: { color: e.colors.buttonBlack, height: e.spaces.space24, width: e.spaces.space24, transform: "rotate(180deg)" }, requestSubTitle: { marginBottom: e.spaces.space24 }, anonymousText: { marginVertical: e.spaces.space24 }, learnMore: { marginBottom: e.spaces.space12 } })),
                S = f(A);
        },
        297152: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteRequestDeleted: () => y, default: () => E });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(688715),
                c = a(529356),
                s = a(392237),
                l = a(674132),
                p = a.n(l),
                d = a(323265),
                m = a(71620),
                u = a(668214);
            const h = (e, t) => {
                    const { tweetId: a } = t.match.params;
                    return a || "";
                },
                g = (0, u.Z)()
                    .propsFromState(() => ({ tweetId: h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("BIRDWATCH_NOTE_REQUEST_Deleted") }))
                    .withAnalytics({ page: "birdwatch", section: "note_request_form", component: "values" }),
                w = p().i157c1a8,
                f = p().b772cd66,
                y = (e) => {
                    const { history: t, tweetId: a } = e,
                        s = () => {
                            if (d.ZP.isTwitterApp()) return;
                            const e = a || "";
                            t.replace(`/i/status/${e}`);
                        },
                        l = n.createElement(i.ZP, { color: "gray700", style: b.learnMore, withInteractiveStyling: !1 }, n.createElement(p().I18NFormatMessage, { $i18n: "i9e31fe5" }, n.createElement(i.ZP, { color: "gray700", link: (0, o.ju)("https://communitynotes.x.com/guide"), withUnderline: !0 }, p().c81085a4))),
                        m = n.createElement(r.Z, { style: b.values }, l);
                    return n.createElement(c.Z, { actionLabel: d.ZP.isTwitterApp() ? void 0 : f, graphicDisplayMode: "none", headline: w, isFullHeightOnMobile: !0, onAction: s, onClose: s, subtext: m, withCloseButton: !d.ZP.isTwitterApp() });
                },
                b = s.default.create((e) => ({ values: { marginVertical: e.spaces.space4, textAlign: "start", width: "100%" }, learnMore: { marginBottom: e.spaces.space12 } })),
                E = g(y);
        },
        981869: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteRequestIntro: () => q, default: () => N });
            a(136728);
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(688715),
                c = a(593866),
                s = a(855488),
                l = a(40610),
                p = a(529356),
                d = a(392237),
                m = a(674132),
                u = a.n(m),
                h = a(840075),
                g = a(456677),
                w = a(813681),
                f = a(323265),
                y = a(443781),
                b = a(312771),
                E = a(71620),
                Z = a(668214),
                I = a(979090);
            const v = (e, t) => {
                    const { tweetId: a } = t.match.params;
                    return a || "";
                },
                B = (e, t) => I.r9(e, v(0, t)),
                A = (0, Z.Z)()
                    .propsFromState(() => ({ tweetId: v, batSignal: B }))
                    .propsFromActions(() => ({ createBirdwatchBatSignal: I.mZ, createLocalApiErrorHandler: (0, E.zr)("BIRDWATCH_NOTE_REQUEST"), fetchBirdwatchBatSignal: I.vF }))
                    .withAnalytics({ page: "birdwatch", section: "note_request_form", component: "values" }),
                T = u().b98f077c,
                S = u().ee691104,
                P = u().f8cbdf02,
                _ = u().f132d1be,
                C = u().gf71296c,
                k = u().de0685b4,
                M = u().f8ac3c88,
                x = u().a8edd0ea,
                F = u().a39a0de6,
                H = u().j819c176,
                L = u().e15b3b44,
                q = (e) => {
                    const { batSignal: t, createBirdwatchBatSignal: a, createLocalApiErrorHandler: d, fetchBirdwatchBatSignal: m, history: E, tweetId: Z } = e,
                        { featureSwitches: I } = n.useContext(y.rC),
                        v = I.isTrue("responsive_web_birdwatch_note_request_sources_enabled");
                    n.useEffect(() => {
                        Z && m(Z.toString()).catch(d());
                    }, [d, m, Z]);
                    const [B, A] = n.useState(!1),
                        [q, N] = n.useState();
                    t?.created_at && E.push(`/i/communitynotes/noterequest/${Z}/complete`);
                    const R = (e) => n.createElement(r.Z, { style: D.valueItem }, n.createElement(i.ZP, { color: "buttonBlack" }, e)),
                        V = {
                            "aria-label": T,
                            containerStyle: D.infoItemContainer,
                            items: [
                                { label: "", decoration: n.createElement(h.default, { style: D.icon }), description: R(_) },
                                { label: "", decoration: n.createElement(g.default, { style: D.icon }), description: R(C) },
                                { label: "", decoration: n.createElement(w.default, { style: D.icon }), description: R(k) },
                            ],
                        },
                        $ = n.createElement(i.ZP, { color: "gray700", style: D.learnMore, withInteractiveStyling: !1 }, n.createElement(u().I18NFormatMessage, { $i18n: "i9e31fe5" }, n.createElement(i.ZP, { color: "gray700", link: (0, o.ju)("https://communitynotes.x.com/guide"), withUnderline: !0 }, u().c81085a4))),
                        O = n.createElement(i.ZP, { color: "gray700", style: D.anonymousText, withInteractiveStyling: !1 }, n.createElement(u().I18NFormatMessage, { $i18n: "h14bda75" }, n.createElement(i.ZP, { color: "gray700", link: "/i/communitynotes/download-data", withUnderline: !0 }, u().c363515c)));
                    if (t?.fetchStatus !== b.ZP.LOADED) return null;
                    const z = n.createElement(
                        r.Z,
                        { style: D.values },
                        n.createElement(i.ZP, { color: "gray700", style: D.requestSubTitle }, P),
                        n.createElement(c.Z, V),
                        v
                            ? n.createElement(
                                  r.Z,
                                  null,
                                  n.createElement(i.ZP, { style: D.sourceHeadline, withInteractiveStyling: !1 }, x),
                                  n.createElement(i.ZP, { color: "gray700", withInteractiveStyling: !1 }, H),
                                  n.createElement(s.Z, {
                                      inputMode: "url",
                                      invalid: B,
                                      label: F,
                                      name: "NoteRequestFormTextInput",
                                      numberOfLines: 1,
                                      onChange: (e) => {
                                          const t = e.target.value;
                                          A(!1), N(t);
                                      },
                                      showValidationIcon: B,
                                      style: D.sourceLinkInput,
                                      value: t?.source_link,
                                  }),
                              )
                            : null,
                        B ? n.createElement(l.Z.Danger, { text: L, withIcon: !0 }) : null,
                        O,
                        $,
                    );
                    return n.createElement(p.Z, {
                        actionLabel: M,
                        graphicDisplayMode: "none",
                        headline: S,
                        isFullHeightOnMobile: !0,
                        onAction: () => {
                            if (Z) {
                                (q ? a(Z, q || "") : a(Z))
                                    .then((e) => {
                                        const { error_code: t } = e;
                                        t ? ("NoVerifiedPhoneNumber" === t ? E.push(`/i/communitynotes/noterequest/${Z}/notverified`) : "InvalidLink" === t ? A(!0) : E.push(`/i/communitynotes/noterequest/${Z}/dailylimit`)) : (A(!1), E.push(`/i/communitynotes/noterequest/${Z}/complete`));
                                    })
                                    .catch(d());
                            }
                        },
                        onClose: () => {
                            Z && E.goBackThroughModals({ fallbackPath: `/i/status/${Z}` });
                        },
                        subtext: z,
                        withCloseButton: !f.ZP.isTwitterApp(),
                    });
                },
                D = d.default.create((e) => ({ infoItemContainer: { paddingHorizontal: 0 }, valueItem: { flexDirection: "row", marginStart: e.spaces.space16, fontWeight: e.fontWeights.bold }, values: { marginVertical: e.spaces.space4, textAlign: "start", width: "100%", paddingStart: 0 }, sourceHeadline: { color: e.colors.buttonBlack, fontSize: e.fontSizes.title3, fontWeight: e.fontWeights.heavy, marginTop: e.spaces.space12, marginBottom: e.spaces.space8 }, sourceLinkInput: { paddingHorizontal: 0, paddingBottom: 0 }, icon: { color: e.colors.buttonBlack, height: e.spaces.space24, width: e.spaces.space24, marginVertical: e.spaces.space12 }, requestSubTitle: { marginBottom: e.spaces.space12 }, anonymousText: { marginVertical: e.spaces.space24 }, learnMore: { marginBottom: e.spaces.space12 } })),
                N = A(q);
        },
        340719: (e, t, a) => {
            a.r(t), a.d(t, { BirdwatchNoteRequestVerifiedPhone: () => y, default: () => E });
            var n = a(202784),
                r = a(325686),
                i = a(688715),
                o = a(731708),
                c = a(529356),
                s = a(392237),
                l = a(674132),
                p = a.n(l),
                d = a(323265),
                m = a(71620),
                u = a(668214);
            const h = (e, t) => t.match.params.tweetId,
                g = (0, u.Z)()
                    .propsFromState(() => ({ tweetId: h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("BIRDWATCH_NOTE_REQUEST_VERIFIED_PHONE") }))
                    .withAnalytics({ page: "birdwatch", section: "note_request_form", component: "values" }),
                w = p().jdd4a572,
                f = p().b772cd66,
                y = (e) => {
                    const { history: t, tweetId: a } = e,
                        s = () => {
                            d.ZP.isTwitterApp() || t.replace(`/i/status/${a}`);
                        },
                        l = (0, i.ju)("https://x.com/settings/phone"),
                        m = n.createElement(o.ZP, { color: "buttonBlack", style: b.verifyPhoneText, withInteractiveStyling: !1 }, n.createElement(p().I18NFormatMessage, { $i18n: "c815dfaf" }, n.createElement(o.ZP, { link: l, style: b.verifyLink, withUnderline: !0 }, p().i0f07c07))),
                        u = n.createElement(r.Z, { style: b.values }, m);
                    return n.createElement(c.Z, { actionLabel: d.ZP.isTwitterApp() ? void 0 : f, graphicDisplayMode: "none", headline: w, isFullHeightOnMobile: !0, onAction: s, onClose: s, subtext: u, withCloseButton: !d.ZP.isTwitterApp() });
                },
                b = s.default.create((e) => ({ values: { marginVertical: e.spaces.space4, textAlign: "start", width: "100%" }, verifyLink: { marginVertical: e.spaces.space24, display: "block" }, verifyPhoneText: { marginVertical: e.spaces.space4 } })),
                E = g(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-a82702a0.01adec1a.js.map
