"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(807896),
                l = n(202784),
                s = n(126962),
                r = n(676145),
                o = n(988566);
            const i = (0, n(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = l.useContext(o.pz);
                if (t && e.contextType === t) return null;
                const { analytics: n, link: i, ...c } = e,
                    d = i && !(0, r.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...n.contextualScribeNamespace, action: "click" } } } : i;
                return l.createElement(
                    s.Z,
                    (0, a.Z)({}, c, {
                        link: d,
                        onClick: function () {
                            const { analytics: t, onClick: n } = e;
                            t.scribeAction("click"), n && n();
                        },
                    }),
                );
            });
        },
        41803: (e, t, n) => {
            n.d(t, { Z: () => E });
            var a = n(262324),
                l = n(202784),
                s = (n(585488), n(351743)),
                r = n.n(s),
                o = n(731708),
                i = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(922449),
                g = n(946474),
                h = n(671212),
                p = n(517330),
                m = n(725405),
                T = n(506534);
            const b = a.Z,
                _ = d().cbc8fed4,
                f = d().d56779a2,
                k = d().b6fe8a56;
            function x(e) {
                const { translationSource: t, tweetId: n } = e,
                    { translationFeedback: a, updateTranslationFeedback: s } = l.useContext(T.I),
                    [i] = r()(b),
                    c = (0, m.Z)(),
                    d = l.useCallback(
                        (e) => {
                            c.scribe({ component: `translation-${t || ""}`, element: e, action: "click" }),
                                i({
                                    variables: { feedback_enum: e, source: "Grok" === t ? "X" : t, tweet_id: n },
                                    onCompleted: () => {
                                        s(n, e);
                                    },
                                });
                        },
                        [c, i, t, n, s],
                    ),
                    x = a[n];
                return l.createElement(
                    o.ZP,
                    { color: "gray700", size: "subtext1", style: y.translationFeedback },
                    `${_} `,
                    x && l.createElement(l.Fragment, null, "Good" === x ? l.createElement(u.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : l.createElement(g.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === x ? l.createElement(h.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : l.createElement(p.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
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
                                    style: y.translationFeedbackVotingIcon,
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
                                    style: y.translationFeedbackVotingIcon,
                                    testID: "thumbsDownVotingIcon",
                                }),
                            ),
                        ),
                );
            }
            const E = l.memo(x),
                y = i.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } }));
        },
        424439: (e, t, n) => {
            n.d(t, { O: () => u });
            var a = n(202784),
                l = n(392237),
                s = n(731708),
                r = n(224162),
                o = n(167630),
                i = n(853435),
                c = n(457566),
                d = n(818065);
            function u(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: n, originLanguage: u, position: h, style: p, translateButtonText: m, translationStatus: T } = e,
                    b = l.default.isDarkMode() ? a.createElement(s.ZP, { color: "white" }, a.createElement(c.x1, { style: g.nightLogo })) : a.createElement(s.ZP, { color: "gray700" }, a.createElement(c.x1, null)),
                    _ = a.createElement(r.RD.Consumer, null, ({ direction: e }) => ("loading" === T ? a.createElement(s.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === h && g.calloutOnTop, p] }, b, d.B, " ", a.createElement(o.Z, { size: 13, style: g.loading })) : "failed" === T ? a.createElement(s.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === h && g.calloutOnTop, p] }, b, d.k7, " ", n && a.createElement(s.ZP, { color: "link", onClick: n, role: "button" }, d.so)) : "loaded" === T ? a.createElement(s.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [g.callout, "top" === h && g.calloutOnTop, p] }, b, u ? (0, d.g)({ originLanguage: u }) : d.li, t && a.createElement(s.ZP, { color: "link", onClick: t, role: "button", style: g.toggle, withInteractiveStyling: !0 }, d.eE)) : null != m ? a.createElement(s.ZP, { "aria-expanded": !1, color: "link", onClick: n, role: "button", size: "subtext2", style: [g.callout, "top" === h && g.calloutOnTop, p], withInteractiveStyling: !0 }, b, m) : void 0));
                return a.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, _);
            }
            const g = l.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center" }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, n) => {
            n.d(t, { B: () => Z, VW: () => L, eE: () => I, g: () => _, k7: () => F, lL: () => D, li: () => S, so: () => y });
            var a = n(202784),
                l = n(731708),
                s = n(392237),
                r = n(224162),
                o = n(167630),
                i = n(853435),
                c = n(111677),
                d = n.n(c),
                u = n(518532),
                g = n(176632),
                h = n(993752),
                p = n(457566);
            const m = d().c39b0e24,
                T = d().i73a7d48,
                b = d().eeadb767,
                _ = d().d9c6f69d,
                f = d().dc445f82,
                k = d().he9803d3,
                x = d().f8264fc0,
                E = d().caa5ba3d,
                y = d().deaf5b16,
                L = d().a66d80d0,
                S = d().be9b9fb8,
                F = d().he9c9634,
                w = d().j2198c98,
                Z = d().d4d35bea,
                I = d().i7ac410e;
            d().c67f09e8;
            function C({ a11yLabel: e, translatorLogo: t, translatorUrl: n }) {
                return a.createElement(l.ZP, { "aria-label": e, color: "gray700", link: n, size: "subtext2", style: z.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function G(e, t) {
                return { company: e, toggle: a.createElement(l.ZP, { "aria-expanded": !0, "aria-label": w, color: "link", onPress: t, role: "button", size: "subtext2", style: z.toggle, withInteractiveStyling: !0 }) };
            }
            function D(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: n, originLanguage: c, position: L, translateButtonText: w, translationSource: I, translationStatus: D } = e,
                    v = c ? b({ originLanguage: c }) : T,
                    M = s.default.isDarkMode() ? a.createElement(u.default, { style: z.nightLogo }) : a.createElement(g.default, null),
                    P = G(a.createElement(C, { a11yLabel: v, translatorLogo: M, translatorUrl: "https://translate.google.com" }), t),
                    O = c ? k({ originLanguage: c }) : f,
                    V = s.default.isDarkMode() ? a.createElement(h.default, { style: z.nightLogo }) : a.createElement(h.default, null),
                    A = G(a.createElement(C, { a11yLabel: O, translatorLogo: V, translatorUrl: "https://papago.naver.com" }), t),
                    B = c ? E({ originLanguage: c }) : x,
                    H = G(a.createElement(C, { a11yLabel: B, translatorLogo: m, translatorUrl: "" }), t),
                    R = s.default.isDarkMode() ? a.createElement(l.ZP, { color: "white" }, a.createElement(p.x1, { style: z.nightLogo }), " Grok") : a.createElement(l.ZP, { color: "alwaysBlack" }, a.createElement(p.x1, null), " Grok"),
                    U = c ? _({ originLanguage: c }) : S,
                    N = G(a.createElement(C, { a11yLabel: U, translatorLogo: R, translatorUrl: "" }), t);
                let W;
                W = "Papago" === I ? A : "X" === I ? H : "Grok" === I ? N : P;
                const $ = a.createElement(r.RD.Consumer, null, ({ direction: e }) => ("loading" === D ? a.createElement(l.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, Z, " ", a.createElement(o.Z, { size: 13, style: z.loading })) : "failed" === D ? a.createElement(l.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, F, " ", a.createElement(l.ZP, { color: "link", onClick: n, role: "button", style: z.retry }, y)) : "loaded" === D ? a.createElement(l.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [z.callout, "top" === L && z.calloutOnTop] }, "X" === I ? a.createElement(d().I18NFormatMessage, { $i18n: "cbb4db07" }, a.cloneElement(W.toggle, null, d().e0f81ff3)) : c ? a.createElement(d().I18NFormatMessage, { $i18n: "be5322c7" }, a.cloneElement(W.toggle, null, d().j2862695({ originLanguage: c })), W.company) : a.createElement(d().I18NFormatMessage, { $i18n: "c5f6ee1d" }, a.cloneElement(W.toggle, null, d().b7cb4fab), W.company)) : a.createElement(l.ZP, { "aria-expanded": !1, color: "link", onClick: n, role: "button", size: "subtext2", style: [z.callout, z.toggle, "top" === L && z.calloutOnTop], withInteractiveStyling: !0 }, w)));
                return a.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, $);
            }
            const z = s.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                l = n(325686),
                s = n(853435),
                r = n(879113),
                o = n(392237),
                i = n(725516),
                c = n(443781),
                d = n(818065),
                u = n(424439);
            class g extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleGetTranslationClick = (e) => {
                            const { fetchTranslation: t, onToggleTranslation: n } = this.props,
                                { featureSwitches: a } = this.context;
                            t(), this._scribeAction("click"), this.setState({ translationVisible: !0 }), n && a.isTrue("responsive_web_alt_text_translations_enabled") && n(!0);
                        }),
                        (this._handleCollapseTranslation = (e) => {
                            const { onToggleTranslation: t } = this.props,
                                { featureSwitches: n } = this.context;
                            this.setState({ translationVisible: !1 }), t && n.isTrue("responsive_web_alt_text_translations_enabled") && t(!1);
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t, scribeElement: n } = this.props;
                            "impression" === e ? t.scribe({ element: n, action: e }) : t.scribe({ action: n });
                        }),
                        (this._isInlineTranslationEnabled = () => {
                            const { featureSwitches: e } = this.context;
                            return e.isTrue("responsive_web_grok_post_inline_translation_is_enabled");
                        }),
                        (this._renderTranslationHeader = () => {
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: n, translationFetchStatus: l, translationSource: s, useGrokTranslation: r } = this.props,
                                o = this.state.translationVisible ? t || l : "none",
                                i = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return r ? a.createElement(u.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: i, translateButtonText: n, translationStatus: o }) : a.createElement(d.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: i, translateButtonText: n, translationSource: s, translationStatus: o });
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return a.createElement(l.Z, { style: !t && h.translation }, e);
                        }),
                        (this._renderTranslationFeedback = () => {
                            if (!this.state.translationVisible) return null;
                            const { renderTranslationFeedback: e } = this.props;
                            return a.createElement(s.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, e?.());
                        }),
                        (this._renderTranslationBlock = () => a.createElement(a.Fragment, null, this._renderTranslationHeader(), this._renderTranslationMessage(), this._renderTranslationFeedback())),
                        (this.state = { translationVisible: !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    !e && this._scribeAction("impression");
                }
                render() {
                    const { children: e, disableTranslation: t, header: n, streamedTranslationFetchStatus: s, style: o, translationFetchStatus: i, withOriginalText: c } = this.props,
                        { translationVisible: u } = this.state,
                        { featureSwitches: g, loggedInUserId: h } = this.context,
                        p = t || (!h && g.isTrue("machine_translation_holdback_logged_out")) || (h && g.isTrue("machine_translation_holdback_logged_in")),
                        m = this._isInlineTranslationEnabled(),
                        T = c || !u ? e : null;
                    if (p) return T ? a.createElement(l.Z, { style: o }, this.props.headerWhenTranslationDisabled, T) : null;
                    if (m) {
                        const e = u && !!this.props.translatedMessage;
                        return a.createElement(l.Z, { style: o }, n, this._renderTranslationBlock(), !e && T);
                    }
                    return u ? a.createElement(l.Z, { style: o }, n, T, a.createElement(r.Z, { fetchStatus: s || i, loadingMessage: "loading" === s ? d.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: d.k7 })) : a.createElement(l.Z, { style: o }, n, T, this._renderTranslationHeader());
                }
            }
            (g.contextType = c.rC), (g.defaultProps = { withOriginalText: !0 });
            const h = o.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                p = (0, i.Z)(g);
        },
        900813: (e, t, n) => {
            n.d(t, { Z: () => w });
            var a = n(807896),
                l = n(202784),
                s = n(853435),
                r = n(451051),
                o = n(392237),
                i = n(912021),
                c = n(401388),
                d = n(720728),
                u = n(943245),
                g = n(556303),
                h = n(443781),
                p = n(818065),
                m = n(71620),
                T = n(668214),
                b = n(709318),
                _ = n(872788),
                f = n(390387),
                k = n(251441);
            const x = (e, t) => k.Z.select(e, t.tweetId),
                E = (e, t) => k.Z.selectFetchStatus(e, t.tweetId);
            function y(e, t) {
                return (0, b.br)(e).type === _.Jz.HOME;
            }
            const L = (0, T.Z)()
                .propsFromState(() => ({ translation: x, translationFetchStatus: E, userLanguage: f.VT, isForYouTimelineSelected: y }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("TRANSLATE_TWEET"), fetchTranslation: k.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: k.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: k.Z.fetchGrokTranslationAndForget }));
            class S extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { text: e } = this.props,
                                { featureSwitches: t } = this.context;
                            return (0, g.F)(t, e);
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, lang: a, text: l, tweetId: s, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context,
                                i = this._useGrokTranslation(),
                                c = o.isTrue("responsive_web_grok_poll_translation_enabled");
                            i ? t(s, { lang: a, userLanguage: r, text: l, includePolls: c }) : n(s, { lang: a, userLanguage: r, text: l }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: n, tweetId: a, userLanguage: l } = this.props,
                                { featureSwitches: s } = this.context;
                            e(a, { lang: t, userLanguage: l, text: n, includePolls: s.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: n, isFocal: a, isTranslatable: l, lang: s, supplementalLang: r, text: o, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, n, o, s, r, i, l);
                            return !a || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: n, entities: a, isForYouTimelineSelected: l, isTranslatable: s, lang: r, supplementalLang: o, text: i, userLanguage: c } = this.props,
                                d = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, g.F)(e, i),
                                u = this._getMemoizedDisableTranslation(t, n, a, i, r, o, c, s),
                                { location: h } = this.context.history,
                                p = /\/home\/?/.test(h.pathname) && l;
                            return d && p && !u;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: o, fetchTranslation: i, header: c, headerWhenTranslationDisabled: d, hitHighlights: u, isFocal: h, isForYouTimelineSelected: p, isTranslatable: m, onMediaTranslation: T, onToggleTranslation: b, renderTranslationFeedback: _, style: f, supplementalLang: k, text: x, translation: E, translationFetchStatus: y, tweetId: L, userLanguage: S, weight: F, withOriginalText: w, ...Z } = this.props,
                                { featureSwitches: I } = this.context,
                                C = (0, g.F)(I, x);
                            if (!E) return;
                            const G = { id: L, richtext_tags: [], entity_set: E.entities, is_expandable: !1, text: E.text, inline_media: [] };
                            return E.text.length ? l.createElement(s.z, { context: G }, l.createElement(r.Z, (0, a.Z)({}, Z, { animateDisplayTextIn: C, displayTextRange: C ? [0, E.text.length] : this._getMemoizedDisplayTextRange(E.text), entities: E.entities, lang: E.destinationLanguage, text: E.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, n, a, l, s, r, o) => {
                            if (void 0 !== o) return !o;
                            const i = r && l && (0, u.sE)(l.split("-")[0]) !== (0, u.sE)(r.split("-")[0]) && (0, u.mD)({ displayTextRange: t, entities: n, text: a, language: l });
                            return e || !i || !!s;
                        }));
                }
                componentDidUpdate(e) {
                    const { onMediaTranslation: t, translation: n } = this.props;
                    if (e.translation !== n && n) {
                        const { featureSwitches: e } = this.context,
                            a = {};
                        (n?.entities?.media || []).forEach((e) => {
                            e.alt_text && (a[e.id_str] = e.alt_text);
                        }),
                            t && !(0, c.Z)(a) && e.isTrue("responsive_web_alt_text_translations_enabled") && t(a);
                    }
                }
                componentDidMount() {
                    this._fetchGrokTranslationAndForgetIfNeeded();
                }
                render() {
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: s, fetchTranslation: o, header: i, headerWhenTranslationDisabled: c, isFocal: u, isForYouTimelineSelected: g, isTranslatable: h, onMediaTranslation: m, onToggleTranslation: T, renderTranslationFeedback: b, style: _, supplementalLang: f, translation: k, translationFetchStatus: x, tweetId: E, userLanguage: y, withOriginalText: L, ...S } = this.props;
                    return l.createElement(d.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, headerWhenTranslationDisabled: c, key: E, onToggleTranslation: T, originLanguage: k && k.localizedSourceLanguage, renderTranslationFeedback: b, scribeElement: "translate_tweet", streamedTranslationFetchStatus: k?.streamedTranslationFetchStatus, style: _, translateButtonText: p.VW, translatedMessage: this._renderTranslation(), translationFetchStatus: x, translationSource: k && k.translationSource, translationState: k && k.translationState, tweetId: E, useGrokTranslation: this._useGrokTranslation(), withOriginalText: L }, l.createElement(r.Z, (0, a.Z)({ style: u && F.focalTweetText }, S)));
                }
            }
            S.contextType = h.rC;
            const F = o.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                w = L(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.8c86c23a.js.map
