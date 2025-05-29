"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(807896),
                s = n(202784),
                i = n(126962),
                r = n(676145),
                l = n(988566);
            const o = (0, n(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = s.useContext(l.pz);
                if (t && e.contextType === t) return null;
                const { analytics: n, link: o, ...c } = e,
                    d = o && !(0, r.Z)(o) ? { ...o, state: { ...o.state, referringScribeNamespace: { ...n.contextualScribeNamespace, action: "click" } } } : o;
                return s.createElement(
                    i.Z,
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
                s = n(202784),
                i = (n(585488), n(351743)),
                r = n.n(i),
                l = n(731708),
                o = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(922449),
                h = n(946474),
                g = n(671212),
                p = n(517330),
                m = n(725405),
                b = n(506534);
            const T = a.Z,
                _ = d().cbc8fed4,
                f = d().d56779a2,
                x = d().b6fe8a56;
            function k(e) {
                const { translationSource: t, tweetId: n } = e,
                    { translationFeedback: a, updateTranslationFeedback: i } = s.useContext(b.I),
                    [o] = r()(T),
                    c = (0, m.Z)(),
                    d = s.useCallback(
                        (e) => {
                            c.scribe({ component: `translation-${t || ""}`, element: e, action: "click" }),
                                o({
                                    variables: { feedback_enum: e, source: "Grok" === t ? "X" : t, tweet_id: n },
                                    onCompleted: () => {
                                        i(n, e);
                                    },
                                });
                        },
                        [c, o, t, n, i],
                    ),
                    k = a[n];
                return s.createElement(
                    l.ZP,
                    { color: "gray700", size: "subtext1", style: y.translationFeedback },
                    `${_} `,
                    k && s.createElement(s.Fragment, null, "Good" === k ? s.createElement(u.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : s.createElement(h.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === k ? s.createElement(g.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : s.createElement(p.default, { style: y.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !k &&
                        s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                                l.ZP,
                                { hoverLabel: { label: f } },
                                s.createElement(h.default, {
                                    onClick: () => {
                                        d("Good");
                                    },
                                    style: y.translationFeedbackVotingIcon,
                                    testID: "thumbsUpVotingIcon",
                                }),
                            ),
                            " ",
                            s.createElement(
                                l.ZP,
                                { hoverLabel: { label: x } },
                                s.createElement(p.default, {
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
            const E = s.memo(k),
                y = o.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } }));
        },
        720728: (e, t, n) => {
            n.d(t, { ZP: () => z, li: () => w });
            var a = n(202784),
                s = n(325686),
                i = n(392237),
                r = n(731708),
                l = n(224162),
                o = n(167630),
                c = n(853435),
                d = n(879113),
                u = n(111677),
                h = n.n(u),
                g = n(518532),
                p = n(176632),
                m = n(993752),
                b = n(725516),
                T = n(443781),
                _ = n(457566);
            const f = h().d4d35bea,
                x = h().he9c9634,
                k = h().deaf5b16,
                E = h().j2198c98,
                y = h().i73a7d48,
                F = h().eeadb767,
                w = h().be9b9fb8,
                S = h().d9c6f69d,
                I = h().dc445f82,
                L = h().he9803d3,
                Z = h().f8264fc0,
                D = h().caa5ba3d,
                M = h().c39b0e24;
            class C extends a.Component {
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
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: n, translationFetchStatus: s, translationSource: d } = this.props,
                                u = e ? F({ originLanguage: e }) : y,
                                b = i.default.isDarkMode() ? a.createElement(g.default, { style: G.nightLogo }) : a.createElement(p.default, null),
                                T = this._attributionLogo(u, "https://translate.google.com", b),
                                E = this._attributionElements(T),
                                C = e ? L({ originLanguage: e }) : I,
                                z = i.default.isDarkMode() ? a.createElement(m.default, { style: G.nightLogo }) : a.createElement(m.default, null),
                                v = this._attributionLogo(C, "https://papago.naver.com", z),
                                A = this._attributionElements(v),
                                V = e ? D({ originLanguage: e }) : Z,
                                P = this._attributionLogo(V, "", M),
                                O = this._attributionElements(P),
                                H = i.default.isDarkMode() ? a.createElement(r.ZP, { color: "white" }, a.createElement(_.x1, { style: G.nightLogo }), " Grok") : a.createElement(r.ZP, { color: "alwaysBlack" }, a.createElement(_.x1, null), " Grok"),
                                R = e ? S({ originLanguage: e }) : w,
                                B = this._attributionLogo(R, "", H),
                                N = this._attributionElements(B);
                            let U;
                            U = "Papago" === d ? A : "X" === d ? O : "Grok" === d ? N : E;
                            const $ = this._isInlineTranslationEnabled(),
                                Y = t || s,
                                X = a.createElement(l.RD.Consumer, null, ({ direction: t }) => (this.state.translationVisible ? ("loading" === Y ? a.createElement(r.ZP, { align: "center", color: "link", dir: t, numberOfLines: 1, size: "subtext2", style: [G.callout, $ && G.calloutOnTop] }, f, " ", a.createElement(o.Z, { size: 13, style: G.loading })) : "failed" === Y ? a.createElement(r.ZP, { align: "center", color: "gray700", dir: t, numberOfLines: 1, size: "subtext2", style: [G.callout, $ && G.calloutOnTop] }, x, " ", a.createElement(r.ZP, { color: "link", onClick: this._handleGetTranslationClick, role: "button", style: G.retry }, k)) : "loaded" === Y ? a.createElement(r.ZP, { align: "center", dir: t, numberOfLines: 1, size: "subtext2", style: [G.callout, $ && G.calloutOnTop] }, "X" === d ? a.createElement(h().I18NFormatMessage, { $i18n: "cbb4db07" }, a.cloneElement(U.toggle, null, h().e0f81ff3)) : e ? a.createElement(h().I18NFormatMessage, { $i18n: "be5322c7" }, a.cloneElement(U.toggle, null, h().j2862695({ originLanguage: e })), U.company) : a.createElement(h().I18NFormatMessage, { $i18n: "c5f6ee1d" }, a.cloneElement(U.toggle, null, h().b7cb4fab), U.company)) : void 0) : a.createElement(r.ZP, { "aria-expanded": !1, color: "link", onClick: this._handleGetTranslationClick, role: "button", size: "subtext2", style: [G.callout, G.toggle, $ && G.calloutOnTop], withInteractiveStyling: !0 }, n)));
                            return a.createElement(c.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, X);
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return a.createElement(s.Z, { style: !t && G.translation }, e);
                        }),
                        (this._renderTranslationFeedback = () => {
                            if (!this.state.translationVisible) return null;
                            const { renderTranslationFeedback: e } = this.props;
                            return a.createElement(c.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, e?.());
                        }),
                        (this._renderTranslationBlock = () => a.createElement(a.Fragment, null, this._renderTranslationHeader(), this._renderTranslationMessage(), this._renderTranslationFeedback())),
                        (this._attributionLogo = (e, t, n) => a.createElement(r.ZP, { "aria-label": e, color: "gray700", link: t, size: "subtext2", style: G.translationSourceLink, withInteractiveStyling: !1 }, n)),
                        (this._attributionElements = (e) => ({ company: e, toggle: a.createElement(r.ZP, { "aria-expanded": !0, "aria-label": E, color: "link", onPress: this._handleCollapseTranslation, role: "button", size: "subtext2", style: G.toggle, withInteractiveStyling: !0 }) })),
                        (this.state = { translationVisible: !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    !e && this._scribeAction("impression");
                }
                render() {
                    const { children: e, disableTranslation: t, header: n, streamedTranslationFetchStatus: i, style: r, translationFetchStatus: l, withOriginalText: o } = this.props,
                        { translationVisible: c } = this.state,
                        { featureSwitches: u, loggedInUserId: h } = this.context,
                        g = t || (!h && u.isTrue("machine_translation_holdback_logged_out")) || (h && u.isTrue("machine_translation_holdback_logged_in")),
                        p = this._isInlineTranslationEnabled(),
                        m = o || !c ? e : null;
                    if (g) return m ? a.createElement(s.Z, { style: r }, m) : null;
                    if (p) {
                        const e = c && !!this.props.translatedMessage;
                        return a.createElement(s.Z, { style: r }, n, this._renderTranslationBlock(), !e && m);
                    }
                    return c ? a.createElement(s.Z, { style: r }, n, m, a.createElement(d.Z, { fetchStatus: i || l, loadingMessage: "loading" === i ? f : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: x })) : a.createElement(s.Z, { style: r }, n, m, this._renderTranslationHeader());
                }
            }
            (C.contextType = T.rC), (C.defaultProps = { withOriginalText: !0 });
            const G = i.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, translation: { marginTop: e.spaces.space4 }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } })),
                z = (0, b.Z)(C);
        },
        900813: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var a = n(807896),
                s = n(202784),
                i = n(853435),
                r = n(451051),
                l = n(392237),
                o = n(111677),
                c = n.n(o),
                d = n(912021),
                u = n(401388),
                h = n(720728),
                g = n(943245),
                p = n(556303),
                m = n(443781),
                b = n(71620),
                T = n(668214),
                _ = n(709318),
                f = n(872788),
                x = n(390387),
                k = n(251441);
            const E = (e, t) => k.Z.select(e, t.tweetId),
                y = (e, t) => k.Z.selectFetchStatus(e, t.tweetId);
            function F(e, t) {
                return (0, _.br)(e).type === f.Jz.HOME;
            }
            const w = (0, T.Z)()
                    .propsFromState(() => ({ translation: E, translationFetchStatus: y, userLanguage: x.VT, isForYouTimelineSelected: F }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: k.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: k.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: k.Z.fetchGrokTranslationAndForget })),
                S = c().a66d80d0;
            class I extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, lang: a, text: s, tweetId: i, userLanguage: r } = this.props,
                                { featureSwitches: l } = this.context,
                                o = (0, p.F)(l, s),
                                c = l.isTrue("responsive_web_grok_poll_translation_enabled");
                            o ? t(i, { lang: a, userLanguage: r, text: s, includePolls: c }) : n(i, { lang: a, userLanguage: r, text: s }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: n, tweetId: a, userLanguage: s } = this.props;
                            e(a, { lang: t, userLanguage: s, text: n });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: n, isFocal: a, isTranslatable: s, lang: i, supplementalLang: r, text: l, userLanguage: o } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, n, l, i, r, o, s);
                            return !a || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: n, entities: a, isForYouTimelineSelected: s, isTranslatable: i, lang: r, supplementalLang: l, text: o, userLanguage: c } = this.props,
                                d = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, p.F)(e, o),
                                u = this._getMemoizedDisableTranslation(t, n, a, o, r, l, c, i),
                                { location: h } = this.context.history,
                                g = /\/home\/?/.test(h.pathname) && s;
                            return d && g && !u;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: l, fetchTranslation: o, header: c, hitHighlights: d, isFocal: u, isForYouTimelineSelected: h, isTranslatable: g, onMediaTranslation: m, onToggleTranslation: b, renderTranslationFeedback: T, style: _, supplementalLang: f, text: x, translation: k, translationFetchStatus: E, tweetId: y, userLanguage: F, weight: w, withOriginalText: S, ...I } = this.props,
                                { featureSwitches: L } = this.context,
                                Z = (0, p.F)(L, x);
                            if (!k) return;
                            const D = { id: y, richtext_tags: [], entity_set: k.entities, is_expandable: !1, text: k.text, inline_media: [] };
                            return k.text.length ? s.createElement(i.z, { context: D }, s.createElement(r.Z, (0, a.Z)({}, I, { animateDisplayTextIn: Z, displayTextRange: Z ? [0, k.text.length] : this._getMemoizedDisplayTextRange(k.text), entities: k.entities, lang: k.destinationLanguage, text: k.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, d.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, d.Z)((e, t, n, a, s, i, r, l) => {
                            if (void 0 !== l) return !l;
                            const o = r && s && (0, g.sE)(s.split("-")[0]) !== (0, g.sE)(r.split("-")[0]) && (0, g.mD)({ displayTextRange: t, entities: n, text: a, language: s });
                            return e || !o || !!i;
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
                            t && !(0, u.Z)(a) && e.isTrue("responsive_web_alt_text_translations_enabled") && t(a);
                    }
                }
                componentDidMount() {
                    this._fetchGrokTranslationAndForgetIfNeeded();
                }
                render() {
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: i, fetchTranslation: l, header: o, isFocal: c, isForYouTimelineSelected: d, isTranslatable: u, onMediaTranslation: g, onToggleTranslation: p, renderTranslationFeedback: m, style: b, supplementalLang: T, translation: _, translationFetchStatus: f, tweetId: x, userLanguage: k, withOriginalText: E, ...y } = this.props;
                    return s.createElement(h.ZP, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: o, key: x, onToggleTranslation: p, originLanguage: _ && _.localizedSourceLanguage, renderTranslationFeedback: m, scribeElement: "translate_tweet", streamedTranslationFetchStatus: _?.streamedTranslationFetchStatus, style: b, translateButtonText: S, translatedMessage: this._renderTranslation(), translationFetchStatus: f, translationSource: _ && _.translationSource, translationState: _ && _.translationState, tweetId: x, withOriginalText: E }, s.createElement(r.Z, (0, a.Z)({ style: c && L.focalTweetText }, y)));
                }
            }
            I.contextType = m.rC;
            const L = l.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                Z = w(I);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.e014314a.js.map
