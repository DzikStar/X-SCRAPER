"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                l = a(202784),
                s = a(126962),
                r = a(676145),
                o = a(988566);
            const i = (0, a(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = l.useContext(o.pz);
                if (t && e.contextType === t) return null;
                const { analytics: a, link: i, ...c } = e,
                    d = i && !(0, r.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...a.contextualScribeNamespace, action: "click" } } } : i;
                return l.createElement(
                    s.Z,
                    (0, n.Z)({}, c, {
                        link: d,
                        onClick: function () {
                            const { analytics: t, onClick: a } = e;
                            t.scribeAction("click"), a && a();
                        },
                    }),
                );
            });
        },
        41803: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(262324),
                l = a(202784),
                s = (a(585488), a(351743)),
                r = a.n(s),
                o = a(731708),
                i = a(392237),
                c = a(111677),
                d = a.n(c),
                u = a(922449),
                g = a(946474),
                h = a(671212),
                p = a(517330),
                m = a(725405),
                T = a(506534);
            const b = n.Z,
                _ = d().cbc8fed4,
                f = d().d56779a2,
                k = d().b6fe8a56;
            function x(e) {
                const { translationSource: t, tweetId: a } = e,
                    { translationFeedback: n, updateTranslationFeedback: s } = l.useContext(T.I),
                    [i] = r()(b),
                    c = (0, m.Z)(),
                    d = l.useCallback(
                        (e) => {
                            c.scribe({ component: `translation-${t || ""}`, element: e, action: "click" }),
                                i({
                                    variables: { feedback_enum: e, source: "Grok" === t ? "X" : t, tweet_id: a },
                                    onCompleted: () => {
                                        s(a, e);
                                    },
                                });
                        },
                        [c, i, t, a, s],
                    ),
                    x = n[a];
                return l.createElement(
                    o.ZP,
                    { color: "gray700", size: "subtext1", style: E.translationFeedback },
                    `${_} `,
                    x && l.createElement(l.Fragment, null, "Good" === x ? l.createElement(u.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : l.createElement(g.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === x ? l.createElement(h.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : l.createElement(p.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !x &&
                        l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(
                                o.ZP,
                                { hoverLabel: { label: f } },
                                l.createElement(g.default, {
                                    onClick: () => {
                                        d("Good");
                                    },
                                    style: E.translationFeedbackVotingIcon,
                                    testID: "thumbsUpVotingIcon",
                                }),
                            ),
                            " ",
                            l.createElement(
                                o.ZP,
                                { hoverLabel: { label: k } },
                                l.createElement(p.default, {
                                    onClick: () => {
                                        d("Bad");
                                    },
                                    style: E.translationFeedbackVotingIcon,
                                    testID: "thumbsDownVotingIcon",
                                }),
                            ),
                        ),
                );
            }
            const y = l.memo(x),
                E = i.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } }));
        },
        424439: (e, t, a) => {
            a.d(t, { O: () => u });
            var n = a(202784),
                l = a(392237),
                s = a(731708),
                r = a(224162),
                o = a(167630),
                i = a(853435),
                c = a(457566),
                d = a(818065);
            function u(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: a, position: u, sourceLanguageDisplayName: h, style: p, translateButtonText: m, translationStatus: T } = e,
                    b = l.default.isDarkMode() ? n.createElement(s.ZP, { color: "white" }, n.createElement(c.x1, { style: g.nightLogo })) : n.createElement(s.ZP, { color: "gray700" }, n.createElement(c.x1, null)),
                    _ = n.createElement(r.RD.Consumer, null, ({ direction: e }) => ("loading" === T ? n.createElement(s.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === u && g.calloutOnTop, p] }, b, d.B, " ", n.createElement(o.Z, { size: 13, style: g.loading })) : "failed" === T ? n.createElement(s.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === u && g.calloutOnTop, p] }, b, d.k7, " ", a && n.createElement(s.ZP, { color: "link", onClick: a, role: "button" }, d.so)) : "loaded" === T ? n.createElement(s.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === u && g.calloutOnTop, p] }, b, h ? (0, d.g)({ originLanguage: h }) : d.li, t && n.createElement(s.ZP, { color: "link", onClick: t, role: "button", style: g.toggle, withInteractiveStyling: !0 }, d.eE)) : null != m ? n.createElement(s.ZP, { "aria-expanded": !1, color: "link", onClick: a, role: "button", size: "subtext2", style: [g.callout, "top" === u && g.calloutOnTop, p], withInteractiveStyling: !0 }, b, m) : void 0));
                return n.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, _);
            }
            const g = l.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center" }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, a) => {
            a.d(t, { B: () => Z, VW: () => L, eE: () => I, g: () => _, k7: () => S, lL: () => G, li: () => F, so: () => E });
            var n = a(202784),
                l = a(731708),
                s = a(392237),
                r = a(224162),
                o = a(167630),
                i = a(853435),
                c = a(111677),
                d = a.n(c),
                u = a(518532),
                g = a(176632),
                h = a(993752),
                p = a(457566);
            const m = d().c39b0e24,
                T = d().i73a7d48,
                b = d().eeadb767,
                _ = d().d9c6f69d,
                f = d().dc445f82,
                k = d().he9803d3,
                x = d().f8264fc0,
                y = d().caa5ba3d,
                E = d().deaf5b16,
                L = d().a66d80d0,
                F = d().be9b9fb8,
                S = d().he9c9634,
                w = d().j2198c98,
                Z = d().d4d35bea,
                I = d().i7ac410e;
            d().c67f09e8;
            function C({ a11yLabel: e, translatorLogo: t, translatorUrl: a }) {
                return n.createElement(l.ZP, { "aria-label": e, color: "gray700", link: a, size: "subtext2", style: z.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function D(e, t) {
                return { company: e, toggle: n.createElement(l.ZP, { "aria-expanded": !0, "aria-label": w, color: "link", onPress: t, role: "button", size: "subtext2", style: z.toggle, withInteractiveStyling: !0 }) };
            }
            function G(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: a, originLanguage: c, position: L, translateButtonText: w, translationSource: I, translationStatus: G } = e,
                    v = c ? b({ originLanguage: c }) : T,
                    M = s.default.isDarkMode() ? n.createElement(u.default, { style: z.nightLogo }) : n.createElement(g.default, null),
                    O = D(n.createElement(C, { a11yLabel: v, translatorLogo: M, translatorUrl: "https://translate.google.com" }), t),
                    P = c ? k({ originLanguage: c }) : f,
                    V = s.default.isDarkMode() ? n.createElement(h.default, { style: z.nightLogo }) : n.createElement(h.default, null),
                    A = D(n.createElement(C, { a11yLabel: P, translatorLogo: V, translatorUrl: "https://papago.naver.com" }), t),
                    B = c ? y({ originLanguage: c }) : x,
                    H = D(n.createElement(C, { a11yLabel: B, translatorLogo: m, translatorUrl: "" }), t),
                    N = s.default.isDarkMode() ? n.createElement(l.ZP, { color: "white" }, n.createElement(p.x1, { style: z.nightLogo }), " Grok") : n.createElement(l.ZP, { color: "alwaysBlack" }, n.createElement(p.x1, null), " Grok"),
                    R = c ? _({ originLanguage: c }) : F,
                    U = D(n.createElement(C, { a11yLabel: R, translatorLogo: N, translatorUrl: "" }), t);
                let W;
                W = "Papago" === I ? A : "X" === I ? H : "Grok" === I ? U : O;
                const $ = n.createElement(r.RD.Consumer, null, ({ direction: e }) => ("loading" === G ? n.createElement(l.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, Z, " ", n.createElement(o.Z, { size: 13, style: z.loading })) : "failed" === G ? n.createElement(l.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, S, " ", n.createElement(l.ZP, { color: "link", onClick: a, role: "button", style: z.retry }, E)) : "loaded" === G ? n.createElement(l.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, "X" === I ? n.createElement(d().I18NFormatMessage, { $i18n: "cbb4db07" }, n.cloneElement(W.toggle, null, d().e0f81ff3)) : c ? n.createElement(d().I18NFormatMessage, { $i18n: "be5322c7" }, n.cloneElement(W.toggle, null, d().j2862695({ originLanguage: c })), W.company) : n.createElement(d().I18NFormatMessage, { $i18n: "c5f6ee1d" }, n.cloneElement(W.toggle, null, d().b7cb4fab), W.company)) : n.createElement(l.ZP, { "aria-expanded": !1, color: "link", onClick: a, role: "button", size: "subtext2", style: [z.callout, z.toggle, "top" === L && z.calloutOnTop], withInteractiveStyling: !0 }, w)));
                return n.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, $);
            }
            const z = s.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                l = a(325686),
                s = a(853435),
                r = a(879113),
                o = a(392237),
                i = a(725516),
                c = a(312771),
                d = a(443781),
                u = a(818065),
                g = a(424439);
            class h extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleGetTranslationClick = (e) => {
                            const { fetchTranslation: t, onToggleTranslation: a } = this.props,
                                { featureSwitches: n } = this.context;
                            t(), this._scribeAction("click"), this.setState({ translationVisible: !0 }), a && n.isTrue("responsive_web_alt_text_translations_enabled") && a(!0);
                        }),
                        (this._handleCollapseTranslation = (e) => {
                            const { onToggleTranslation: t } = this.props,
                                { featureSwitches: a } = this.context;
                            this.setState({ translationVisible: !1 }), t && a.isTrue("responsive_web_alt_text_translations_enabled") && t(!1);
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t, scribeElement: a } = this.props;
                            "impression" === e ? t.scribe({ element: a, action: e }) : t.scribe({ action: a });
                        }),
                        (this._isInlineTranslationEnabled = () => {
                            const { featureSwitches: e } = this.context;
                            return e.isTrue("responsive_web_grok_post_inline_translation_is_enabled");
                        }),
                        (this._renderTranslationHeader = () => {
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: a, translationFetchStatus: l, translationSource: s, useGrokTranslation: r } = this.props,
                                o = this.state.translationVisible ? t || l : "none",
                                i = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return r ? n.createElement(g.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, position: i, sourceLanguageDisplayName: e, translateButtonText: a, translationStatus: o }) : n.createElement(u.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: i, translateButtonText: a, translationSource: s, translationStatus: o });
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return n.createElement(l.Z, { style: !t && p.translation }, e);
                        }),
                        (this._renderTranslationFeedback = () => {
                            if (!this.state.translationVisible) return null;
                            const { renderTranslationFeedback: e } = this.props;
                            return n.createElement(s.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, e?.());
                        }),
                        (this._renderTranslationBlock = () => n.createElement(n.Fragment, null, this._renderTranslationHeader(), this._renderTranslationMessage(), this._renderTranslationFeedback())),
                        (this.state = { translationVisible: e.isInitiallyTranslated ?? !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    !e && this._scribeAction("impression");
                }
                render() {
                    const { children: e, disableTranslation: t, header: a, streamedTranslationFetchStatus: s, style: o, translationFetchStatus: i, withOriginalText: d } = this.props,
                        { translationVisible: g } = this.state,
                        { featureSwitches: h, loggedInUserId: p } = this.context,
                        m = t || (!p && h.isTrue("machine_translation_holdback_logged_out")) || (p && h.isTrue("machine_translation_holdback_logged_in")),
                        T = this._isInlineTranslationEnabled(),
                        b = d || !g ? e : null;
                    if (m) return b ? n.createElement(l.Z, { style: o }, this.props.headerWhenTranslationDisabled, b) : null;
                    if (T) {
                        const e = g && !!this.props.translatedMessage;
                        return n.createElement(l.Z, { style: o }, a, this._renderTranslationBlock(), !e && b);
                    }
                    return g ? n.createElement(l.Z, { style: o }, a, b, n.createElement(r.Z, { fetchStatus: s || i, loadingMessage: s === c.iF.LOADING ? u.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: u.k7 })) : n.createElement(l.Z, { style: o }, a, b, this._renderTranslationHeader());
                }
            }
            (h.contextType = d.rC), (h.defaultProps = { withOriginalText: !0 });
            const p = o.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                m = (0, i.Z)(h);
        },
        900813: (e, t, a) => {
            a.d(t, { Z: () => w });
            var n = a(807896),
                l = a(202784),
                s = a(853435),
                r = a(451051),
                o = a(392237),
                i = a(912021),
                c = a(401388),
                d = a(720728),
                u = a(943245),
                g = a(556303),
                h = a(443781),
                p = a(818065),
                m = a(71620),
                T = a(668214),
                b = a(709318),
                _ = a(872788),
                f = a(390387),
                k = a(251441);
            const x = (e, t) => k.Z.select(e, t.tweetId),
                y = (e, t) => k.Z.selectFetchStatus(e, t.tweetId);
            function E(e, t) {
                return (0, b.br)(e).type === _.Jz.HOME;
            }
            const L = (0, T.Z)()
                .propsFromState(() => ({ translation: x, translationFetchStatus: y, userLanguage: f.VT, isForYouTimelineSelected: E }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("TRANSLATE_TWEET"), fetchTranslation: k.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: k.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: k.Z.fetchGrokTranslationAndForget }));
            class F extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { text: e } = this.props,
                                { featureSwitches: t } = this.context;
                            return (0, g.F)(t, e);
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: a, lang: n, text: l, tweetId: s, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context,
                                i = this._useGrokTranslation(),
                                c = o.isTrue("responsive_web_grok_poll_translation_enabled");
                            i ? t(s, { lang: n, userLanguage: r, text: l, includePolls: c }) : a(s, { lang: n, userLanguage: r, text: l }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: a, tweetId: n, userLanguage: l } = this.props,
                                { featureSwitches: s } = this.context;
                            e(n, { lang: t, userLanguage: l, text: a, includePolls: s.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: a, isFocal: n, isTranslatable: l, lang: s, supplementalLang: r, text: o, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, a, o, s, r, i, l);
                            return !n || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: a, entities: n, isForYouTimelineSelected: l, isTranslatable: s, lang: r, supplementalLang: o, text: i, userLanguage: c } = this.props,
                                d = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, g.F)(e, i),
                                u = this._getMemoizedDisableTranslation(t, a, n, i, r, o, c, s),
                                { location: h } = this.context.history,
                                p = /\/home\/?/.test(h.pathname) && l;
                            return d && p && !u;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: o, fetchTranslation: i, header: c, headerWhenTranslationDisabled: d, hitHighlights: u, isFocal: h, isForYouTimelineSelected: p, isTranslatable: m, onMediaTranslation: T, onToggleTranslation: b, renderTranslationFeedback: _, style: f, supplementalLang: k, text: x, translation: y, translationFetchStatus: E, tweetId: L, userLanguage: F, weight: S, withOriginalText: w, ...Z } = this.props,
                                { featureSwitches: I } = this.context,
                                C = (0, g.F)(I, x);
                            if (!y) return;
                            const D = { id: L, richtext_tags: [], entity_set: y.entities, is_expandable: !1, text: y.text, inline_media: [] };
                            return y.text.length ? l.createElement(s.z, { context: D }, l.createElement(r.Z, (0, n.Z)({}, Z, { animateDisplayTextIn: C, displayTextRange: C ? [0, y.text.length] : this._getMemoizedDisplayTextRange(y.text), entities: y.entities, lang: y.destinationLanguage, text: y.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, a, n, l, s, r, o) => {
                            if (void 0 !== o) return !o;
                            const i = r && l && (0, u.sE)(l.split("-")[0]) !== (0, u.sE)(r.split("-")[0]) && (0, u.mD)({ displayTextRange: t, entities: a, text: n, language: l });
                            return e || !i || !!s;
                        }));
                }
                componentDidUpdate(e) {
                    const { onMediaTranslation: t, translation: a } = this.props;
                    if (e.translation !== a && a) {
                        const { featureSwitches: e } = this.context,
                            n = {};
                        (a?.entities?.media || []).forEach((e) => {
                            e.alt_text && (n[e.id_str] = e.alt_text);
                        }),
                            t && !(0, c.Z)(n) && e.isTrue("responsive_web_alt_text_translations_enabled") && t(n);
                    }
                }
                componentDidMount() {
                    this._fetchGrokTranslationAndForgetIfNeeded();
                }
                render() {
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: s, fetchTranslation: o, header: i, headerWhenTranslationDisabled: c, isFocal: g, isForYouTimelineSelected: h, isTranslatable: m, onMediaTranslation: T, onToggleTranslation: b, renderTranslationFeedback: _, style: f, supplementalLang: k, translation: x, translationFetchStatus: y, tweetId: E, userLanguage: L, withOriginalText: F, ...w } = this.props,
                        Z = x?.localizedSourceLanguage ?? (0, u.t)(L, x?.sourceLanguage);
                    return l.createElement(d.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, headerWhenTranslationDisabled: c, key: E, onToggleTranslation: b, originLanguage: Z, renderTranslationFeedback: _, scribeElement: "translate_tweet", streamedTranslationFetchStatus: x?.streamedTranslationFetchStatus, style: f, translateButtonText: p.VW, translatedMessage: this._renderTranslation(), translationFetchStatus: y, translationSource: x && x.translationSource, tweetId: E, useGrokTranslation: this._useGrokTranslation(), withOriginalText: F }, l.createElement(r.Z, (0, n.Z)({ style: g && S.focalTweetText }, w)));
                }
            }
            F.contextType = h.rC;
            const S = o.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                w = L(F);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.d67ea3ba.js.map
