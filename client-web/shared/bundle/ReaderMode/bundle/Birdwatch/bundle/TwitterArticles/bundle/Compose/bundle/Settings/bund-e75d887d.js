"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(807896),
                s = a(202784),
                i = a(126962),
                l = a(676145),
                r = a(988566);
            const o = (0, a(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = s.useContext(r.pz);
                if (t && e.contextType === t) return null;
                const { analytics: a, link: o, ...c } = e,
                    d = o && !(0, l.Z)(o) ? { ...o, state: { ...o.state, referringScribeNamespace: { ...a.contextualScribeNamespace, action: "click" } } } : o;
                return s.createElement(
                    i.Z,
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
        145766: (e, t, a) => {
            a.d(t, { ZP: () => W, li: () => H });
            var n = a(202784),
                s = a(325686),
                i = a(392237),
                l = a(731708),
                r = a(224162),
                o = a(853435),
                c = a(879113),
                d = a(332920),
                u = a.n(d),
                g = a(518532),
                h = a(176632),
                m = a(993752),
                p = a(725516),
                b = a(443781),
                T = a(457566),
                _ = a(262324),
                f = (a(585488), a(351743)),
                x = a.n(f),
                E = a(922449),
                k = a(946474),
                y = a(671212),
                w = a(517330),
                S = a(725405),
                I = a(506534);
            const F = _.Z,
                L = u().cbc8fed4,
                Z = u().d56779a2,
                D = u().b6fe8a56;
            function C(e) {
                const { translationSource: t, tweetId: a } = e,
                    { translationFeedback: s, updateTranslationFeedback: i } = n.useContext(I.I),
                    [r] = x()(F),
                    o = (0, S.Z)(),
                    c = n.useCallback(
                        (e) => {
                            o.scribe({ component: `translation-${t || ""}`, element: e, action: "click" }),
                                r({
                                    variables: { feedback_enum: e, source: "Grok" === t ? "X" : t, tweet_id: a },
                                    onCompleted: () => {
                                        i(a, e);
                                    },
                                });
                        },
                        [o, r, t, a, i],
                    ),
                    d = s[a];
                return n.createElement(
                    l.ZP,
                    { size: "subtext1", style: V.translationFeedback },
                    `${L} `,
                    d && n.createElement(n.Fragment, null, "Good" === d ? n.createElement(E.default, { style: V.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : n.createElement(k.default, { style: V.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === d ? n.createElement(y.default, { style: V.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : n.createElement(w.default, { style: V.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !d &&
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                                l.ZP,
                                { hoverLabel: { label: Z } },
                                n.createElement(k.default, {
                                    onClick: () => {
                                        c("Good");
                                    },
                                    style: V.translationFeedbackVotingIcon,
                                    testID: "thumbsUpVotingIcon",
                                }),
                            ),
                            " ",
                            n.createElement(
                                l.ZP,
                                { hoverLabel: { label: D } },
                                n.createElement(w.default, {
                                    onClick: () => {
                                        c("Bad");
                                    },
                                    style: V.translationFeedbackVotingIcon,
                                    testID: "thumbsDownVotingIcon",
                                }),
                            ),
                        ),
                );
            }
            const M = n.memo(C),
                V = i.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } })),
                v = u().d4d35bea,
                z = u().he9c9634,
                P = u().j2198c98,
                G = u().i73a7d48,
                A = u().eeadb767,
                H = u().be9b9fb8,
                R = u().d9c6f69d,
                N = u().dc445f82,
                O = u().he9803d3,
                B = u().f8264fc0,
                U = u().caa5ba3d,
                $ = u().c39b0e24;
            class X extends n.Component {
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
                        (this._renderTranslation = () => {
                            const { originLanguage: e, translatedMessage: t, translationSource: a } = this.props,
                                c = e ? A({ originLanguage: e }) : G,
                                d = i.default.isDarkMode() ? n.createElement(g.default, { style: j.nightLogo }) : n.createElement(h.default, null),
                                p = this._attributionLogo(c, "https://translate.google.com", d),
                                b = this._attributionElements(p),
                                _ = e ? O({ originLanguage: e }) : N,
                                f = i.default.isDarkMode() ? n.createElement(m.default, { style: j.nightLogo }) : n.createElement(m.default, null),
                                x = this._attributionLogo(_, "https://papago.naver.com", f),
                                E = this._attributionElements(x),
                                k = e ? U({ originLanguage: e }) : B,
                                y = this._attributionLogo(k, "", $),
                                w = this._attributionElements(y),
                                S = i.default.isDarkMode() ? n.createElement(l.ZP, { color: "white" }, n.createElement(T.x1, { style: j.nightLogo }), " Grok") : n.createElement(l.ZP, { color: "alwaysBlack" }, n.createElement(T.x1, null), " Grok"),
                                I = e ? R({ originLanguage: e }) : H,
                                F = this._attributionLogo(I, "", S),
                                L = this._attributionElements(F);
                            let Z;
                            Z = "Papago" === a ? E : "X" === a ? w : "Grok" === a ? L : b;
                            const D = n.createElement(r.RD.Consumer, null, ({ direction: t }) => n.createElement(l.ZP, { align: "center", dir: t, numberOfLines: 1, style: j.callout }, "X" === a ? n.createElement(u().I18NFormatMessage, { $i18n: "cbb4db07" }, n.cloneElement(Z.toggle, null, u().e0f81ff3)) : e ? n.createElement(u().I18NFormatMessage, { $i18n: "be5322c7" }, n.cloneElement(Z.toggle, null, u().j2862695({ originLanguage: e })), Z.company) : n.createElement(u().I18NFormatMessage, { $i18n: "c5f6ee1d" }, n.cloneElement(Z.toggle, null, u().b7cb4fab), Z.company))),
                                C = { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] };
                            return n.createElement(n.Fragment, null, n.createElement(o.z, { context: C }, D), n.createElement(s.Z, { style: j.translation }, t), n.createElement(o.z, { context: C }, this._renderTranslationFeedback()));
                        }),
                        (this._renderTranslationFeedback = () => {
                            const { translationSource: e, translationState: t, tweetId: a } = this.props,
                                { featureSwitches: s } = this.context;
                            return s.isTrue("responsive_web_translation_feedback_enabled") && (!t || "Success" === t) && a ? n.createElement(M, { translationSource: e, tweetId: a }) : null;
                        }),
                        (this._attributionLogo = (e, t, a) => n.createElement(l.ZP, { "aria-label": e, color: "gray700", link: t, size: "subtext2", style: j.translationSourceLink, withInteractiveStyling: !1 }, a)),
                        (this._attributionElements = (e) => ({ company: e, toggle: n.createElement(l.ZP, { "aria-expanded": !0, "aria-label": P, color: "link", onPress: this._handleCollapseTranslation, role: "button", size: "subtext2", style: j.toggle, withInteractiveStyling: !0 }) })),
                        (this.state = { translationVisible: !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    !e && this._scribeAction("impression");
                }
                render() {
                    const { children: e, disableTranslation: t, header: a, streamedTranslationFetchStatus: i, style: r, translateButtonText: d, translationFetchStatus: u, withOriginalText: g } = this.props,
                        { translationVisible: h } = this.state,
                        { featureSwitches: m, loggedInUserId: p } = this.context,
                        b = g || !h ? e : null;
                    if (t || (!p && m.isTrue("machine_translation_holdback_logged_out")) || (p && m.isTrue("machine_translation_holdback_logged_in"))) return b ? n.createElement(s.Z, { style: r }, b) : null;
                    let T;
                    if (h) T = n.createElement(c.Z, { fetchStatus: i || u, loadingMessage: "loading" === i ? v : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslation, retryMessage: z });
                    else {
                        const e = { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: d, inline_media: [] };
                        T = n.createElement(o.z, { context: e }, n.createElement(l.ZP, { "aria-expanded": !1, color: "link", onClick: this._handleGetTranslationClick, role: "button", size: "subtext2", style: [j.callout, j.toggle], withInteractiveStyling: !0 }, d));
                    }
                    return n.createElement(s.Z, { style: r }, a, b, T);
                }
            }
            (X.contextType = b.rC), (X.defaultProps = { withOriginalText: !0 });
            const j = i.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, toggle: { cursor: "pointer" }, translation: { marginTop: e.spaces.space4 } })),
                W = (0, p.Z)(X);
        },
        900813: (e, t, a) => {
            a.d(t, { Z: () => I });
            var n = a(807896),
                s = a(202784),
                i = a(853435),
                l = a(451051),
                r = a(392237),
                o = a(332920),
                c = a.n(o),
                d = a(912021),
                u = a(401388),
                g = a(145766),
                h = a(943245),
                m = a(556303),
                p = a(443781),
                b = a(71620),
                T = a(668214),
                _ = a(390387),
                f = a(251441);
            const x = (e, t) => f.Z.select(e, t.tweetId),
                E = (e, t) => f.Z.selectFetchStatus(e, t.tweetId),
                k = (0, T.Z)()
                    .propsFromState(() => ({ translation: x, translationFetchStatus: E, userLanguage: _.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: f.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: f.Z.fetchStreamedGrokTranslation })),
                y = c().a66d80d0;
            class w extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: a, lang: n, text: s, tweetId: i, userLanguage: l } = this.props,
                                { featureSwitches: r } = this.context;
                            (0, m.F)(r, s) ? t(i, { lang: n, userLanguage: l, text: s }) : a(i, { lang: n, userLanguage: l, text: s }).catch(e());
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: a, isFocal: n, isTranslatable: s, lang: i, supplementalLang: l, text: r, userLanguage: o } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, a, r, i, l, o, s);
                            return !n || c;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchStreamedGrokTranslation: a, fetchTranslation: r, header: o, hitHighlights: c, isFocal: d, isTranslatable: u, onMediaTranslation: g, onToggleTranslation: h, style: p, supplementalLang: b, text: T, translation: _, translationFetchStatus: f, tweetId: x, userLanguage: E, weight: k, withOriginalText: y, ...w } = this.props,
                                { featureSwitches: S } = this.context,
                                I = (0, m.F)(S, T);
                            if (!_) return;
                            const F = { id: x, richtext_tags: [], entity_set: _.entities, is_expandable: !1, text: _.text, inline_media: [] };
                            return s.createElement(i.z, { context: F }, s.createElement(l.Z, (0, n.Z)({}, w, { animateDisplayTextIn: I, displayTextRange: I ? [0, _.text.length] : this._getMemoizedDisplayTextRange(_.text), entities: _.entities, lang: _.destinationLanguage, text: _.text })));
                        }),
                        (this._getMemoizedDisplayTextRange = (0, d.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, d.Z)((e, t, a, n, s, i, l, r) => {
                            if (void 0 !== r) return !r;
                            const o = l && s && (0, h.sE)(s.split("-")[0]) !== (0, h.sE)(l.split("-")[0]) && (0, h.mD)({ displayTextRange: t, entities: a, text: n, language: s });
                            return e || !o || !!i;
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
                            t && !(0, u.Z)(n) && e.isTrue("responsive_web_alt_text_translations_enabled") && t(n);
                    }
                }
                render() {
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchStreamedGrokTranslation: a, fetchTranslation: i, header: r, isFocal: o, isTranslatable: c, onMediaTranslation: d, onToggleTranslation: u, style: h, supplementalLang: m, translation: p, translationFetchStatus: b, tweetId: T, userLanguage: _, withOriginalText: f, ...x } = this.props;
                    return s.createElement(g.ZP, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: r, key: T, onToggleTranslation: u, originLanguage: p && p.localizedSourceLanguage, scribeElement: "translate_tweet", streamedTranslationFetchStatus: p?.streamedTranslationFetchStatus, style: h, translateButtonText: y, translatedMessage: this._renderTranslation(), translationFetchStatus: b, translationSource: p && p.translationSource, translationState: p && p.translationState, tweetId: T, withOriginalText: f }, s.createElement(l.Z, (0, n.Z)({ style: o && S.focalTweetText }, x)));
                }
            }
            w.contextType = p.rC;
            const S = r.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                I = k(w);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.7a1d452a.js.map
