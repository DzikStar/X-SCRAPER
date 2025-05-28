"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(807896),
                s = n(202784),
                i = n(126962),
                o = n(676145),
                r = n(988566);
            const l = (0, n(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = s.useContext(r.pz);
                if (t && e.contextType === t) return null;
                const { analytics: n, link: l, ...c } = e,
                    d = l && !(0, o.Z)(l) ? { ...l, state: { ...l.state, referringScribeNamespace: { ...n.contextualScribeNamespace, action: "click" } } } : l;
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
                o = n.n(i),
                r = n(731708),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(922449),
                g = n(946474),
                h = n(671212),
                m = n(517330),
                p = n(725405),
                b = n(506534);
            const T = a.Z,
                _ = d().cbc8fed4,
                f = d().d56779a2,
                x = d().b6fe8a56;
            function k(e) {
                const { translationSource: t, tweetId: n } = e,
                    { translationFeedback: a, updateTranslationFeedback: i } = s.useContext(b.I),
                    [l] = o()(T),
                    c = (0, p.Z)(),
                    d = s.useCallback(
                        (e) => {
                            c.scribe({ component: `translation-${t || ""}`, element: e, action: "click" }),
                                l({
                                    variables: { feedback_enum: e, source: "Grok" === t ? "X" : t, tweet_id: n },
                                    onCompleted: () => {
                                        i(n, e);
                                    },
                                });
                        },
                        [c, l, t, n, i],
                    ),
                    k = a[n];
                return s.createElement(
                    r.ZP,
                    { size: "subtext1", style: F.translationFeedback },
                    `${_} `,
                    k && s.createElement(s.Fragment, null, "Good" === k ? s.createElement(u.default, { style: F.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : s.createElement(g.default, { style: F.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === k ? s.createElement(h.default, { style: F.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : s.createElement(m.default, { style: F.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !k &&
                        s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                                r.ZP,
                                { hoverLabel: { label: f } },
                                s.createElement(g.default, {
                                    onClick: () => {
                                        d("Good");
                                    },
                                    style: F.translationFeedbackVotingIcon,
                                    testID: "thumbsUpVotingIcon",
                                }),
                            ),
                            " ",
                            s.createElement(
                                r.ZP,
                                { hoverLabel: { label: x } },
                                s.createElement(m.default, {
                                    onClick: () => {
                                        d("Bad");
                                    },
                                    style: F.translationFeedbackVotingIcon,
                                    testID: "thumbsDownVotingIcon",
                                }),
                            ),
                        ),
                );
            }
            const E = s.memo(k),
                F = l.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } }));
        },
        720728: (e, t, n) => {
            n.d(t, { ZP: () => A, li: () => F });
            var a = n(202784),
                s = n(325686),
                i = n(392237),
                o = n(731708),
                r = n(224162),
                l = n(853435),
                c = n(879113),
                d = n(111677),
                u = n.n(d),
                g = n(518532),
                h = n(176632),
                m = n(993752),
                p = n(725516),
                b = n(443781),
                T = n(457566);
            const _ = u().d4d35bea,
                f = u().he9c9634,
                x = u().j2198c98,
                k = u().i73a7d48,
                E = u().eeadb767,
                F = u().be9b9fb8,
                y = u().d9c6f69d,
                w = u().dc445f82,
                S = u().he9803d3,
                L = u().f8264fc0,
                I = u().caa5ba3d,
                Z = u().c39b0e24;
            class D extends a.Component {
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
                        (this._renderTranslation = () => {
                            const { originLanguage: e, renderTranslationFeedback: t, translatedMessage: n, translationSource: c } = this.props,
                                d = e ? E({ originLanguage: e }) : k,
                                p = i.default.isDarkMode() ? a.createElement(g.default, { style: G.nightLogo }) : a.createElement(h.default, null),
                                b = this._attributionLogo(d, "https://translate.google.com", p),
                                _ = this._attributionElements(b),
                                f = e ? S({ originLanguage: e }) : w,
                                x = i.default.isDarkMode() ? a.createElement(m.default, { style: G.nightLogo }) : a.createElement(m.default, null),
                                D = this._attributionLogo(f, "https://papago.naver.com", x),
                                A = this._attributionElements(D),
                                C = e ? I({ originLanguage: e }) : L,
                                M = this._attributionLogo(C, "", Z),
                                v = this._attributionElements(M),
                                z = i.default.isDarkMode() ? a.createElement(o.ZP, { color: "white" }, a.createElement(T.x1, { style: G.nightLogo }), " Grok") : a.createElement(o.ZP, { color: "alwaysBlack" }, a.createElement(T.x1, null), " Grok"),
                                V = e ? y({ originLanguage: e }) : F,
                                P = this._attributionLogo(V, "", z),
                                H = this._attributionElements(P);
                            let R;
                            R = "Papago" === c ? A : "X" === c ? v : "Grok" === c ? H : _;
                            const N = a.createElement(r.RD.Consumer, null, ({ direction: t }) => a.createElement(o.ZP, { align: "center", dir: t, numberOfLines: 1, style: G.callout }, "X" === c ? a.createElement(u().I18NFormatMessage, { $i18n: "cbb4db07" }, a.cloneElement(R.toggle, null, u().e0f81ff3)) : e ? a.createElement(u().I18NFormatMessage, { $i18n: "be5322c7" }, a.cloneElement(R.toggle, null, u().j2862695({ originLanguage: e })), R.company) : a.createElement(u().I18NFormatMessage, { $i18n: "c5f6ee1d" }, a.cloneElement(R.toggle, null, u().b7cb4fab), R.company))),
                                O = { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] };
                            return a.createElement(a.Fragment, null, a.createElement(l.z, { context: O }, N), a.createElement(s.Z, { style: G.translation }, n), a.createElement(l.z, { context: O }, t?.()));
                        }),
                        (this._attributionLogo = (e, t, n) => a.createElement(o.ZP, { "aria-label": e, color: "gray700", link: t, size: "subtext2", style: G.translationSourceLink, withInteractiveStyling: !1 }, n)),
                        (this._attributionElements = (e) => ({ company: e, toggle: a.createElement(o.ZP, { "aria-expanded": !0, "aria-label": x, color: "link", onPress: this._handleCollapseTranslation, role: "button", size: "subtext2", style: G.toggle, withInteractiveStyling: !0 }) })),
                        (this.state = { translationVisible: !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    !e && this._scribeAction("impression");
                }
                render() {
                    const { children: e, disableTranslation: t, header: n, streamedTranslationFetchStatus: i, style: r, translateButtonText: d, translationFetchStatus: u, withOriginalText: g } = this.props,
                        { translationVisible: h } = this.state,
                        { featureSwitches: m, loggedInUserId: p } = this.context,
                        b = g || !h ? e : null;
                    if (t || (!p && m.isTrue("machine_translation_holdback_logged_out")) || (p && m.isTrue("machine_translation_holdback_logged_in"))) return b ? a.createElement(s.Z, { style: r }, b) : null;
                    let T;
                    if (h) T = a.createElement(c.Z, { fetchStatus: i || u, loadingMessage: "loading" === i ? _ : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslation, retryMessage: f });
                    else {
                        const e = { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: d, inline_media: [] };
                        T = a.createElement(l.z, { context: e }, a.createElement(o.ZP, { "aria-expanded": !1, color: "link", onClick: this._handleGetTranslationClick, role: "button", size: "subtext2", style: [G.callout, G.toggle], withInteractiveStyling: !0 }, d));
                    }
                    return a.createElement(s.Z, { style: r }, n, b, T);
                }
            }
            (D.contextType = b.rC), (D.defaultProps = { withOriginalText: !0 });
            const G = i.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, toggle: { cursor: "pointer" }, translation: { marginTop: e.spaces.space4 } })),
                A = (0, p.Z)(D);
        },
        900813: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var a = n(807896),
                s = n(202784),
                i = n(853435),
                o = n(451051),
                r = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(912021),
                u = n(401388),
                g = n(720728),
                h = n(943245),
                m = n(556303),
                p = n(443781),
                b = n(71620),
                T = n(668214),
                _ = n(709318),
                f = n(872788),
                x = n(390387),
                k = n(251441);
            const E = (e, t) => k.Z.select(e, t.tweetId),
                F = (e, t) => k.Z.selectFetchStatus(e, t.tweetId);
            function y(e, t) {
                return (0, _.br)(e).type === f.Jz.HOME;
            }
            const w = (0, T.Z)()
                    .propsFromState(() => ({ translation: E, translationFetchStatus: F, userLanguage: x.VT, isForYouTimelineSelected: y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: k.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: k.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: k.Z.fetchGrokTranslationAndForget })),
                S = c().a66d80d0;
            class L extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, lang: a, text: s, tweetId: i, userLanguage: o } = this.props,
                                { featureSwitches: r } = this.context,
                                l = (0, m.F)(r, s),
                                c = r.isTrue("responsive_web_grok_poll_translation_enabled");
                            l ? t(i, { lang: a, userLanguage: o, text: s, includePolls: c }) : n(i, { lang: a, userLanguage: o, text: s }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: n, tweetId: a, userLanguage: s } = this.props;
                            e(a, { lang: t, userLanguage: s, text: n });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: n, isFocal: a, isTranslatable: s, lang: i, supplementalLang: o, text: r, userLanguage: l } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, n, r, i, o, l, s);
                            return !a || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: n, entities: a, isForYouTimelineSelected: s, isTranslatable: i, lang: o, supplementalLang: r, text: l, userLanguage: c } = this.props,
                                d = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, m.F)(e, l),
                                u = this._getMemoizedDisableTranslation(t, n, a, l, o, r, c, i),
                                { location: g } = this.context.history,
                                h = /\/home\/?/.test(g.pathname) && s;
                            return d && h && !u;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: r, fetchTranslation: l, header: c, hitHighlights: d, isFocal: u, isForYouTimelineSelected: g, isTranslatable: h, onMediaTranslation: p, onToggleTranslation: b, renderTranslationFeedback: T, style: _, supplementalLang: f, text: x, translation: k, translationFetchStatus: E, tweetId: F, userLanguage: y, weight: w, withOriginalText: S, ...L } = this.props,
                                { featureSwitches: I } = this.context,
                                Z = (0, m.F)(I, x);
                            if (!k) return;
                            const D = { id: F, richtext_tags: [], entity_set: k.entities, is_expandable: !1, text: k.text, inline_media: [] };
                            return s.createElement(i.z, { context: D }, s.createElement(o.Z, (0, a.Z)({}, L, { animateDisplayTextIn: Z, displayTextRange: Z ? [0, k.text.length] : this._getMemoizedDisplayTextRange(k.text), entities: k.entities, lang: k.destinationLanguage, text: k.text })));
                        }),
                        (this._getMemoizedDisplayTextRange = (0, d.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, d.Z)((e, t, n, a, s, i, o, r) => {
                            if (void 0 !== r) return !r;
                            const l = o && s && (0, h.sE)(s.split("-")[0]) !== (0, h.sE)(o.split("-")[0]) && (0, h.mD)({ displayTextRange: t, entities: n, text: a, language: s });
                            return e || !l || !!i;
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
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: i, fetchTranslation: r, header: l, isFocal: c, isForYouTimelineSelected: d, isTranslatable: u, onMediaTranslation: h, onToggleTranslation: m, renderTranslationFeedback: p, style: b, supplementalLang: T, translation: _, translationFetchStatus: f, tweetId: x, userLanguage: k, withOriginalText: E, ...F } = this.props;
                    return s.createElement(g.ZP, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: l, key: x, onToggleTranslation: m, originLanguage: _ && _.localizedSourceLanguage, renderTranslationFeedback: p, scribeElement: "translate_tweet", streamedTranslationFetchStatus: _?.streamedTranslationFetchStatus, style: b, translateButtonText: S, translatedMessage: this._renderTranslation(), translationFetchStatus: f, translationSource: _ && _.translationSource, translationState: _ && _.translationState, tweetId: x, withOriginalText: E }, s.createElement(o.Z, (0, a.Z)({ style: c && I.focalTweetText }, F)));
                }
            }
            L.contextType = p.rC;
            const I = r.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                Z = w(L);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.0bab1b2a.js.map
