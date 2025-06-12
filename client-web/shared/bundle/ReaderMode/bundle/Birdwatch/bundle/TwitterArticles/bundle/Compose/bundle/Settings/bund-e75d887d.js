"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(126962),
                s = n(676145),
                l = n(988566);
            const i = (0, n(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = r.useContext(l.pz);
                if (t && e.contextType === t) return null;
                const { analytics: n, link: i, ...c } = e,
                    d = i && !(0, s.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...n.contextualScribeNamespace, action: "click" } } } : i;
                return r.createElement(
                    o.Z,
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
            n.d(t, { Z: () => y });
            var a = n(262324),
                r = n(202784),
                o = (n(585488), n(351743)),
                s = n.n(o),
                l = n(731708),
                i = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(922449),
                g = n(946474),
                p = n(671212),
                h = n(517330),
                T = n(725405),
                m = n(506534);
            const b = a.Z,
                _ = d().cbc8fed4,
                k = d().d56779a2,
                f = d().b6fe8a56;
            function x(e) {
                const { translateTargetType: t, translationSource: n, tweetId: a, useGrokTranslation: o } = e,
                    { translationFeedback: i, updateTranslationFeedback: c } = r.useContext(m.I),
                    [d] = s()(b),
                    x = (0, T.Z)(),
                    y = r.useCallback(
                        (e) => {
                            const r = "auto" === o ? "grok_auto_translation" : "button" === o ? "grok_button_translation" : `translation-${n || ""}`,
                                s = "Good" === e ? `vote_up_${t}` : `vote_down_${t}`;
                            x.scribe({ component: r, element: s, action: "click" }),
                                d({
                                    variables: { feedback_enum: e, source: "Grok" === n ? "X" : n, tweet_id: a },
                                    onCompleted: () => {
                                        c(a, e);
                                    },
                                });
                        },
                        [x, d, t, n, a, c, o],
                    ),
                    F = i[a];
                return r.createElement(
                    l.ZP,
                    { color: "gray700", size: "subtext1", style: E.translationFeedback },
                    `${_} `,
                    F && r.createElement(r.Fragment, null, "Good" === F ? r.createElement(u.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : r.createElement(g.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === F ? r.createElement(p.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : r.createElement(h.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !F &&
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                l.ZP,
                                { hoverLabel: { label: k } },
                                r.createElement(g.default, {
                                    onClick: () => {
                                        y("Good");
                                    },
                                    style: E.translationFeedbackVotingIcon,
                                    testID: "thumbsUpVotingIcon",
                                }),
                            ),
                            " ",
                            r.createElement(
                                l.ZP,
                                { hoverLabel: { label: f } },
                                r.createElement(h.default, {
                                    onClick: () => {
                                        y("Bad");
                                    },
                                    style: E.translationFeedbackVotingIcon,
                                    testID: "thumbsDownVotingIcon",
                                }),
                            ),
                        ),
                );
            }
            const y = r.memo(x),
                E = i.default.create((e) => ({ translationFeedback: { marginTop: e.spaces.space24 }, translationFeedbackVotedIcon: { marginHorizontal: e.spaces.space4, cursor: "default" }, translationFeedbackVotingIcon: { marginHorizontal: e.spaces.space4, cursor: "pointer" } }));
        },
        424439: (e, t, n) => {
            n.d(t, { O: () => p });
            var a = n(202784),
                r = n(392237),
                o = n(731708),
                s = n(224162),
                l = n(167630),
                i = n(853435),
                c = n(187669),
                d = n(725405),
                u = n(457566),
                g = n(818065);
            function p(e) {
                const t = (0, d.Z)(),
                    { handleCollapseTranslation: n, handleGetTranslationClick: p, position: T, sourceLanguageDisplayName: m, style: b, translateButtonText: _, translateTargetType: k, translationStatus: f, useGrokTranslation: x } = e,
                    y = r.default.isDarkMode() ? a.createElement(o.ZP, { color: "white" }, a.createElement(u.x1, { style: h.nightLogo })) : a.createElement(o.ZP, { color: "gray700" }, a.createElement(u.x1, null)),
                    E = "auto" === x ? "grok_auto_translation" : "grok_button_translation";
                (0, c.q)(() => {
                    t.scribe({ component: E, element: `translate_${k}`, action: "impression" });
                });
                const F = () => {
                        t.scribe({ component: E, element: `original_${k}`, action: "click" }), n?.();
                    },
                    L = () => {
                        t.scribe({ component: E, element: `translate_${k}`, action: "click" }), p?.();
                    },
                    S = () => {
                        t.scribe({ component: E, element: `error_retry_${k}`, action: "click" }), p?.();
                    },
                    w = a.createElement(s.RD.Consumer, null, ({ direction: e }) => ("loading" === f ? a.createElement(o.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [h.callout, "top" === T && h.calloutOnTop, b] }, y, a.createElement(o.ZP, { color: "link", onClick: F, role: "button" }, g.B), a.createElement(l.Z, { size: 13, style: h.loading })) : "failed" === f ? a.createElement(o.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [h.callout, "top" === T && h.calloutOnTop, b] }, y, g.k7, " ", p && a.createElement(o.ZP, { color: "link", onClick: S, role: "button" }, g.so)) : "loaded" === f ? a.createElement(o.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [h.callout, "top" === T && h.calloutOnTop, b] }, y, m ? (0, g.g)({ originLanguage: m }) : g.li, n && a.createElement(o.ZP, { color: "link", onClick: F, role: "button", style: h.toggle, withInteractiveStyling: !0 }, g.eE)) : null != _ ? a.createElement(o.ZP, { "aria-expanded": !1, color: "link", onClick: L, role: "button", size: "subtext2", style: [h.callout, "top" === T && h.calloutOnTop, b], withInteractiveStyling: !0 }, y, _) : void 0));
                return a.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, w);
            }
            const h = r.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center" }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, n) => {
            n.d(t, { B: () => G, VW: () => F, eE: () => Z, g: () => _, k7: () => S, lL: () => A, li: () => L, so: () => E });
            var a = n(202784),
                r = n(731708),
                o = n(392237),
                s = n(224162),
                l = n(167630),
                i = n(853435),
                c = n(111677),
                d = n.n(c),
                u = n(518532),
                g = n(176632),
                p = n(993752),
                h = n(457566);
            const T = d().c39b0e24,
                m = d().i73a7d48,
                b = d().eeadb767,
                _ = d().d9c6f69d,
                k = d().dc445f82,
                f = d().he9803d3,
                x = d().f8264fc0,
                y = d().caa5ba3d,
                E = d().deaf5b16,
                F = d().a66d80d0,
                L = d().be9b9fb8,
                S = d().he9c9634,
                w = d().j2198c98,
                G = d().d4d35bea,
                Z = d().i7ac410e;
            d().c67f09e8;
            function I({ a11yLabel: e, translatorLogo: t, translatorUrl: n }) {
                return a.createElement(r.ZP, { "aria-label": e, color: "gray700", link: n, size: "subtext2", style: D.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function C(e, t) {
                return { company: e, toggle: a.createElement(r.ZP, { "aria-expanded": !0, "aria-label": w, color: "link", onPress: t, role: "button", size: "subtext2", style: D.toggle, withInteractiveStyling: !0 }) };
            }
            function A(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: n, originLanguage: c, position: F, translateButtonText: w, translationSource: Z, translationStatus: A } = e,
                    z = c ? b({ originLanguage: c }) : m,
                    v = o.default.isDarkMode() ? a.createElement(u.default, { style: D.nightLogo }) : a.createElement(g.default, null),
                    P = C(a.createElement(I, { a11yLabel: z, translatorLogo: v, translatorUrl: "https://translate.google.com" }), t),
                    O = c ? f({ originLanguage: c }) : k,
                    M = o.default.isDarkMode() ? a.createElement(p.default, { style: D.nightLogo }) : a.createElement(p.default, null),
                    V = C(a.createElement(I, { a11yLabel: O, translatorLogo: M, translatorUrl: "https://papago.naver.com" }), t),
                    H = c ? y({ originLanguage: c }) : x,
                    N = C(a.createElement(I, { a11yLabel: H, translatorLogo: T, translatorUrl: "" }), t),
                    B = o.default.isDarkMode() ? a.createElement(r.ZP, { color: "white" }, a.createElement(h.x1, { style: D.nightLogo }), " Grok") : a.createElement(r.ZP, { color: "alwaysBlack" }, a.createElement(h.x1, null), " Grok"),
                    $ = c ? _({ originLanguage: c }) : L,
                    R = C(a.createElement(I, { a11yLabel: $, translatorLogo: B, translatorUrl: "" }), t);
                let U;
                U = "Papago" === Z ? V : "X" === Z ? N : "Grok" === Z ? R : P;
                const W = a.createElement(s.RD.Consumer, null, ({ direction: e }) => ("loading" === A ? a.createElement(r.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, G, " ", a.createElement(l.Z, { size: 13, style: D.loading })) : "failed" === A ? a.createElement(r.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, S, " ", a.createElement(r.ZP, { color: "link", onClick: n, role: "button", style: D.retry }, E)) : "loaded" === A ? a.createElement(r.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, "X" === Z ? a.createElement(d().I18NFormatMessage, { $i18n: "cbb4db07" }, a.cloneElement(U.toggle, null, d().e0f81ff3)) : c ? a.createElement(d().I18NFormatMessage, { $i18n: "be5322c7" }, a.cloneElement(U.toggle, null, d().j2862695({ originLanguage: c })), U.company) : a.createElement(d().I18NFormatMessage, { $i18n: "c5f6ee1d" }, a.cloneElement(U.toggle, null, d().b7cb4fab), U.company)) : a.createElement(r.ZP, { "aria-expanded": !1, color: "link", onClick: n, role: "button", size: "subtext2", style: [D.callout, D.toggle, "top" === F && D.calloutOnTop], withInteractiveStyling: !0 }, w)));
                return a.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, W);
            }
            const D = o.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, n) => {
            n.d(t, { Z: () => T });
            var a = n(202784),
                r = n(325686),
                o = n(853435),
                s = n(879113),
                l = n(392237),
                i = n(725516),
                c = n(312771),
                d = n(443781),
                u = n(818065),
                g = n(424439);
            class p extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleGetTranslationClick = (e) => {
                            const { fetchTranslation: t, onToggleTranslation: n } = this.props,
                                { featureSwitches: a } = this.context;
                            t(), this._scribeActionForNonGrok("translate"), this.setState({ translationVisible: !0 }), n && a.isTrue("responsive_web_alt_text_translations_enabled") && n(!0);
                        }),
                        (this._handleCollapseTranslation = (e) => {
                            const { onToggleTranslation: t } = this.props,
                                { featureSwitches: n } = this.context;
                            this._scribeActionForNonGrok("original"), this.setState({ translationVisible: !1 }), t && n.isTrue("responsive_web_alt_text_translations_enabled") && t(!1);
                        }),
                        (this._scribeImpressionForNonGrok = () => {
                            const { analytics: e, translateTargetType: t, useGrokTranslation: n } = this.props;
                            if (n) return;
                            const a = { element: `translate_${t}`, action: "impression" };
                            e.scribe(a);
                        }),
                        (this._scribeActionForNonGrok = (e) => {
                            const { analytics: t, translateTargetType: n, useGrokTranslation: a } = this.props;
                            if (a) return;
                            const r = { element: `${e}_${n}`, action: "click" };
                            t.scribe(r);
                        }),
                        (this._isInlineTranslationEnabled = () => {
                            const { featureSwitches: e } = this.context;
                            return e.isTrue("responsive_web_grok_post_inline_translation_is_enabled");
                        }),
                        (this._renderTranslationHeader = () => {
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: n, translateTargetType: r, translationFetchStatus: o, translationSource: s, useGrokTranslation: l } = this.props,
                                i = this.state.translationVisible ? t || o : "none",
                                c = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return l ? a.createElement(g.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, position: c, sourceLanguageDisplayName: e, translateButtonText: n, translateTargetType: r, translationStatus: i, useGrokTranslation: l }) : a.createElement(u.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: c, translateButtonText: n, translationSource: s, translationStatus: i });
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return a.createElement(r.Z, { style: !t && h.translation }, e);
                        }),
                        (this._renderTranslationFeedback = () => {
                            if (!this.state.translationVisible) return null;
                            const { renderTranslationFeedback: e } = this.props;
                            return a.createElement(o.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, e?.());
                        }),
                        (this._renderTranslationBlock = () => a.createElement(a.Fragment, null, this._renderTranslationHeader(), this._renderTranslationMessage(), this._renderTranslationFeedback())),
                        (this.state = { translationVisible: e.isInitiallyTranslated ?? !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    e || this._scribeImpressionForNonGrok();
                }
                render() {
                    const { children: e, disableTranslation: t, header: n, streamedTranslationFetchStatus: o, style: l, translationFetchStatus: i, withOriginalText: d } = this.props,
                        { translationVisible: g } = this.state,
                        { featureSwitches: p, loggedInUserId: h } = this.context,
                        T = t || (!h && p.isTrue("machine_translation_holdback_logged_out")) || (h && p.isTrue("machine_translation_holdback_logged_in")),
                        m = this._isInlineTranslationEnabled(),
                        b = d || !g ? e : null;
                    if (T) return b ? a.createElement(r.Z, { style: l }, this.props.renderGrokAutoTranslationHeader?.(), b, this.props.renderGrokAutoTranslationFeedback?.()) : null;
                    if (m) {
                        const e = g && !!this.props.translatedMessage;
                        return a.createElement(r.Z, { style: l }, n, this._renderTranslationBlock(), !e && b);
                    }
                    return g ? a.createElement(r.Z, { style: l }, n, b, a.createElement(s.Z, { fetchStatus: o || i, loadingMessage: o === c.iF.LOADING ? u.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: u.k7 })) : a.createElement(r.Z, { style: l }, n, b, this._renderTranslationHeader());
                }
            }
            (p.contextType = d.rC), (p.defaultProps = { withOriginalText: !0 });
            const h = l.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                T = (0, i.Z)(p);
        },
        900813: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var a = n(807896),
                r = n(202784),
                o = n(853435),
                s = n(451051),
                l = n(392237),
                i = n(912021),
                c = n(401388),
                d = n(720728),
                u = n(943245),
                g = n(3693),
                p = n(556303),
                h = n(312771),
                T = n(443781),
                m = n(818065),
                b = n(71620),
                _ = n(668214),
                k = n(709318),
                f = n(872788),
                x = n(390387),
                y = n(251441);
            const E = (e, t) => y.Z.select(e, t.tweetId),
                F = (e, t) => y.Z.selectFetchStatus(e, t.tweetId);
            function L(e, t) {
                return (0, k.br)(e).type === f.Jz.HOME;
            }
            const S = (0, _.Z)()
                .propsFromState(() => ({ translation: E, translationFetchStatus: F, userLanguage: x.VT, isForYouTimelineSelected: L }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: y.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: y.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: y.Z.fetchGrokTranslationAndForget }));
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { isGrokAutoTranslated: e, text: t } = this.props,
                                { featureSwitches: n } = this.context;
                            if ((0, p.F)(n, t)) return e ? "auto" : "button";
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, lang: a, text: r, translation: o, translationFetchStatus: s, tweetId: l, userLanguage: i } = this.props,
                                { featureSwitches: c } = this.context,
                                d = this._useGrokTranslation(),
                                u = c.isTrue("responsive_web_grok_poll_translation_enabled");
                            if (o?.translationState !== g.H.SUCCESS)
                                if (d) {
                                    if (o?.streamedTranslationFetchStatus === h.ZP.LOADING) return;
                                    t(l, { lang: a, userLanguage: i, text: r, includePolls: u });
                                } else s !== h.ZP.LOADING && n(l, { lang: a, userLanguage: i, text: r }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: n, tweetId: a, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            e(a, { lang: t, userLanguage: r, text: n, includePolls: o.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: n, isFocal: a, isTranslatable: r, lang: o, supplementalLang: s, text: l, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, n, l, o, s, i, r);
                            return !a || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: n, entities: a, isForYouTimelineSelected: r, isTranslatable: o, lang: s, supplementalLang: l, text: i, userLanguage: c } = this.props,
                                d = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, p.F)(e, i),
                                u = this._getMemoizedDisableTranslation(t, n, a, i, s, l, c, o),
                                { location: g } = this.context.history,
                                h = /\/home\/?/.test(g.pathname) && r;
                            return d && h && !u;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: l, fetchTranslation: i, header: c, hitHighlights: d, isFocal: u, isForYouTimelineSelected: g, isGrokAutoTranslated: h, isTranslatable: T, onMediaTranslation: m, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, text: E, translation: F, translationFetchStatus: L, tweetId: S, userLanguage: w, weight: G, withOriginalText: Z, ...I } = this.props,
                                { featureSwitches: C } = this.context,
                                A = (0, p.F)(C, E);
                            if (!F) return;
                            const D = { id: S, richtext_tags: [], entity_set: F.entities, is_expandable: !1, text: F.text, inline_media: [] };
                            return F.text.length ? r.createElement(o.z, { context: D }, r.createElement(s.Z, (0, a.Z)({}, I, { animateDisplayTextIn: A, displayTextRange: A ? [0, F.text.length] : this._getMemoizedDisplayTextRange(F.text), entities: F.entities, lang: F.destinationLanguage, text: F.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, n, a, r, o, s, l) => {
                            if (void 0 !== l) return !l;
                            const i = s && r && (0, u.sE)(r.split("-")[0]) !== (0, u.sE)(s.split("-")[0]) && (0, u.mD)({ displayTextRange: t, entities: n, text: a, language: r });
                            return e || !i || !!o;
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
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: o, fetchTranslation: l, header: i, isFocal: c, isForYouTimelineSelected: g, isGrokAutoTranslated: p, isTranslatable: h, onMediaTranslation: T, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, translation: E, translationFetchStatus: F, tweetId: L, userLanguage: S, withOriginalText: w, ...Z } = this.props,
                        I = E?.localizedSourceLanguage ?? (0, u.t)(S, E?.sourceLanguage);
                    return r.createElement(d.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, key: L, onToggleTranslation: b, originLanguage: I, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, streamedTranslationFetchStatus: E?.streamedTranslationFetchStatus, style: x, translateButtonText: m.VW, translateTargetType: "post", translatedMessage: this._renderTranslation(), translationFetchStatus: F, translationSource: E && E.translationSource, tweetId: L, useGrokTranslation: this._useGrokTranslation(), withOriginalText: w }, r.createElement(s.Z, (0, a.Z)({ style: c && G.focalTweetText }, Z)));
                }
            }
            w.contextType = T.rC;
            const G = l.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                Z = S(w);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.312aaf4a.js.map
