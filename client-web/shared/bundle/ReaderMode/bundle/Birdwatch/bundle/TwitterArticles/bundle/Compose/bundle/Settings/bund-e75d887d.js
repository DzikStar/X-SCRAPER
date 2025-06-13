"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(126962),
                l = n(676145),
                s = n(988566);
            const i = (0, n(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = r.useContext(s.pz);
                if (t && e.contextType === t) return null;
                const { analytics: n, link: i, ...c } = e,
                    u = i && !(0, l.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...n.contextualScribeNamespace, action: "click" } } } : i;
                return r.createElement(
                    o.Z,
                    (0, a.Z)({}, c, {
                        link: u,
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
                l = n.n(o),
                s = n(731708),
                i = n(392237),
                c = n(111677),
                u = n.n(c),
                d = n(922449),
                g = n(946474),
                p = n(671212),
                h = n(517330),
                m = n(725405),
                T = n(506534);
            const b = a.Z,
                _ = u().cbc8fed4,
                k = u().d56779a2,
                f = u().b6fe8a56;
            function x(e) {
                const { translateTargetType: t, translationSource: n, tweetId: a, useGrokTranslation: o } = e,
                    { translationFeedback: i, updateTranslationFeedback: c } = r.useContext(T.I),
                    [u] = l()(b),
                    x = (0, m.Z)(),
                    y = r.useCallback(
                        (e) => {
                            const r = "auto" === o ? "grok_auto_translation" : "button" === o ? "grok_button_translation" : `translation-${n || ""}`,
                                l = "Good" === e ? `vote_up_${t}` : `vote_down_${t}`;
                            x.scribe({ component: r, element: l, action: "click" }),
                                u({
                                    variables: { feedback_enum: e, source: "Grok" === n ? "X" : n, tweet_id: a },
                                    onCompleted: () => {
                                        c(a, e);
                                    },
                                });
                        },
                        [x, u, t, n, a, c, o],
                    ),
                    F = i[a];
                return r.createElement(
                    s.ZP,
                    { color: "gray700", size: "subtext1", style: E.translationFeedback },
                    `${_} `,
                    F && r.createElement(r.Fragment, null, "Good" === F ? r.createElement(d.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpFilledVotedIcon" }) : r.createElement(g.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsUpVotedIcon" }), " ", "Bad" === F ? r.createElement(p.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownFilledVotedIcon" }) : r.createElement(h.default, { style: E.translationFeedbackVotedIcon, testID: "thumbsDownVotedIcon" })),
                    !F &&
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                s.ZP,
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
                                s.ZP,
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
        198052: (e, t, n) => {
            n.d(t, { O: () => L });
            var a = n(202784),
                r = n(392237),
                o = n(731708),
                l = n(154003),
                s = n(224162),
                i = n(167630),
                c = n(853435),
                u = n(111677),
                d = n.n(u),
                g = n(711223),
                p = n(187669),
                h = n(725405),
                m = n(457566),
                T = n(688715),
                b = n(529356);
            const _ = d().e839db3a,
                k = (0, T.ju)("https://x.com/settings/languages"),
                f = { link: a.createElement(o.ZP, { color: "text", link: k, weight: "bold", withUnderline: !0 }) },
                x = ({ sourceLang: e }) => a.createElement(d().I18NFormatMessage, { $i18n: "b6411d33", sourceLang: e }, a.cloneElement(f.link, null, d().a15585b4));
            function y({ close: e, sourceLanguageDisplayName: t }) {
                const n = a.createElement(x, { sourceLang: t });
                return a.createElement(b.Z, { actionLabel: _, graphicDisplayMode: "none", headline: "Automatic Translation", onAction: e, onClose: e, subtext: n, withCloseButton: !0 });
            }
            var E = n(818065);
            const F = d().e0bffbf8;
            function L(e) {
                const [t, n] = a.useState(!1),
                    u = (0, h.Z)(),
                    { handleCollapseTranslation: d, handleGetTranslationClick: T, position: b, showInfoButton: _, sourceLanguageDisplayName: k, style: f, translateButtonText: x, translateTargetType: L, translationStatus: w, useGrokTranslation: Z } = e,
                    G = r.default.isDarkMode() ? a.createElement(o.ZP, { color: "white" }, a.createElement(m.x1, { style: S.nightLogo })) : a.createElement(o.ZP, { color: "gray700" }, a.createElement(m.x1, null)),
                    I = "auto" === Z ? "grok_auto_translation" : "grok_button_translation";
                (0, p.q)(() => {
                    u.scribe({ component: I, element: `translate_${L}`, action: "impression" });
                });
                const C = () => {
                        u.scribe({ component: I, element: `original_${L}`, action: "click" }), d?.();
                    },
                    A = () => {
                        u.scribe({ component: I, element: `translate_${L}`, action: "click" }), T?.();
                    },
                    D = () => {
                        u.scribe({ component: I, element: `error_retry_${L}`, action: "click" }), T?.();
                    },
                    P = a.createElement(l.ZP, { "aria-label": F, icon: a.createElement(g.default, { style: S.info }), onPress: () => n(!0), size: "xSmall", type: "primaryText" }),
                    z = a.createElement(s.RD.Consumer, null, ({ direction: e }) => ("loading" === w ? a.createElement(o.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [S.callout, "top" === b && S.calloutOnTop, f] }, G, a.createElement(o.ZP, { color: "link", onClick: C, role: "button" }, E.B), a.createElement(i.Z, { size: 13, style: S.loading })) : "failed" === w ? a.createElement(o.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [S.callout, "top" === b && S.calloutOnTop, f] }, G, E.k7, " ", T && a.createElement(o.ZP, { color: "link", onClick: D, role: "button" }, E.so)) : "loaded" === w ? a.createElement(o.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [S.callout, "top" === b && S.calloutOnTop, f] }, G, k ? (0, E.g)({ originLanguage: k }) : E.li, d && a.createElement(o.ZP, { color: "link", onClick: C, role: "button", style: S.toggle, withInteractiveStyling: !0 }, E.eE), _ && "auto" === Z && P) : null != x ? a.createElement(o.ZP, { "aria-expanded": !1, color: "link", size: "subtext2", style: [S.callout, "top" === b && S.calloutOnTop, f], withInteractiveStyling: !0 }, G, a.createElement(o.ZP, { color: "link", onClick: A, role: "button" }, x), _ && "auto" === Z && P) : void 0));
                return a.createElement(a.Fragment, null, t && a.createElement(y, { close: () => n(!1), sourceLanguageDisplayName: k ?? "" }), a.createElement(c.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, z));
            }
            const S = r.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, info: { color: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center", minHeight: e.spaces.space24 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, n) => {
            n.d(t, { B: () => Z, VW: () => F, eE: () => G, g: () => _, k7: () => S, lL: () => A, li: () => L, so: () => E });
            var a = n(202784),
                r = n(731708),
                o = n(392237),
                l = n(224162),
                s = n(167630),
                i = n(853435),
                c = n(111677),
                u = n.n(c),
                d = n(518532),
                g = n(176632),
                p = n(993752),
                h = n(457566);
            const m = u().c39b0e24,
                T = u().i73a7d48,
                b = u().eeadb767,
                _ = u().d9c6f69d,
                k = u().dc445f82,
                f = u().he9803d3,
                x = u().f8264fc0,
                y = u().caa5ba3d,
                E = u().deaf5b16,
                F = u().a66d80d0,
                L = u().be9b9fb8,
                S = u().he9c9634,
                w = u().j2198c98,
                Z = u().d4d35bea,
                G = u().i7ac410e;
            u().c67f09e8;
            function I({ a11yLabel: e, translatorLogo: t, translatorUrl: n }) {
                return a.createElement(r.ZP, { "aria-label": e, color: "gray700", link: n, size: "subtext2", style: D.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function C(e, t) {
                return { company: e, toggle: a.createElement(r.ZP, { "aria-expanded": !0, "aria-label": w, color: "link", onPress: t, role: "button", size: "subtext2", style: D.toggle, withInteractiveStyling: !0 }) };
            }
            function A(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: n, originLanguage: c, position: F, translateButtonText: w, translationSource: G, translationStatus: A } = e,
                    P = c ? b({ originLanguage: c }) : T,
                    z = o.default.isDarkMode() ? a.createElement(d.default, { style: D.nightLogo }) : a.createElement(g.default, null),
                    v = C(a.createElement(I, { a11yLabel: P, translatorLogo: z, translatorUrl: "https://translate.google.com" }), t),
                    M = c ? f({ originLanguage: c }) : k,
                    O = o.default.isDarkMode() ? a.createElement(p.default, { style: D.nightLogo }) : a.createElement(p.default, null),
                    V = C(a.createElement(I, { a11yLabel: M, translatorLogo: O, translatorUrl: "https://papago.naver.com" }), t),
                    N = c ? y({ originLanguage: c }) : x,
                    H = C(a.createElement(I, { a11yLabel: N, translatorLogo: m, translatorUrl: "" }), t),
                    B = o.default.isDarkMode() ? a.createElement(r.ZP, { color: "white" }, a.createElement(h.x1, { style: D.nightLogo }), " Grok") : a.createElement(r.ZP, { color: "alwaysBlack" }, a.createElement(h.x1, null), " Grok"),
                    $ = c ? _({ originLanguage: c }) : L,
                    R = C(a.createElement(I, { a11yLabel: $, translatorLogo: B, translatorUrl: "" }), t);
                let U;
                U = "Papago" === G ? V : "X" === G ? H : "Grok" === G ? R : v;
                const W = a.createElement(l.RD.Consumer, null, ({ direction: e }) => ("loading" === A ? a.createElement(r.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, Z, " ", a.createElement(s.Z, { size: 13, style: D.loading })) : "failed" === A ? a.createElement(r.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, S, " ", a.createElement(r.ZP, { color: "link", onClick: n, role: "button", style: D.retry }, E)) : "loaded" === A ? a.createElement(r.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === F && D.calloutOnTop] }, "X" === G ? a.createElement(u().I18NFormatMessage, { $i18n: "cbb4db07" }, a.cloneElement(U.toggle, null, u().e0f81ff3)) : c ? a.createElement(u().I18NFormatMessage, { $i18n: "be5322c7" }, a.cloneElement(U.toggle, null, u().j2862695({ originLanguage: c })), U.company) : a.createElement(u().I18NFormatMessage, { $i18n: "c5f6ee1d" }, a.cloneElement(U.toggle, null, u().b7cb4fab), U.company)) : a.createElement(r.ZP, { "aria-expanded": !1, color: "link", onClick: n, role: "button", size: "subtext2", style: [D.callout, D.toggle, "top" === F && D.calloutOnTop], withInteractiveStyling: !0 }, w)));
                return a.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, W);
            }
            const D = o.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                o = n(853435),
                l = n(879113),
                s = n(392237),
                i = n(725516),
                c = n(312771),
                u = n(443781),
                d = n(818065),
                g = n(198052);
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
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: n, translateTargetType: r, translationFetchStatus: o, translationSource: l, useGrokTranslation: s } = this.props,
                                i = this.state.translationVisible ? t || o : "none",
                                c = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return s ? a.createElement(g.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, position: c, sourceLanguageDisplayName: e, translateButtonText: n, translateTargetType: r, translationStatus: i, useGrokTranslation: s }) : a.createElement(d.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: c, translateButtonText: n, translationSource: l, translationStatus: i });
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
                    const { children: e, disableTranslation: t, header: n, streamedTranslationFetchStatus: o, style: s, translationFetchStatus: i, withOriginalText: u } = this.props,
                        { translationVisible: g } = this.state,
                        { featureSwitches: p, loggedInUserId: h } = this.context,
                        m = t || (!h && p.isTrue("machine_translation_holdback_logged_out")) || (h && p.isTrue("machine_translation_holdback_logged_in")),
                        T = this._isInlineTranslationEnabled(),
                        b = u || !g ? e : null;
                    if (m) return b ? a.createElement(r.Z, { style: s }, this.props.renderGrokAutoTranslationHeader?.(), b, this.props.renderGrokAutoTranslationFeedback?.()) : null;
                    if (T) {
                        const e = g && !!this.props.translatedMessage;
                        return a.createElement(r.Z, { style: s }, n, this._renderTranslationBlock(), !e && b);
                    }
                    return g ? a.createElement(r.Z, { style: s }, n, b, a.createElement(l.Z, { fetchStatus: o || i, loadingMessage: o === c.iF.LOADING ? d.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: d.k7 })) : a.createElement(r.Z, { style: s }, n, b, this._renderTranslationHeader());
                }
            }
            (p.contextType = u.rC), (p.defaultProps = { withOriginalText: !0 });
            const h = s.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                m = (0, i.Z)(p);
        },
        900813: (e, t, n) => {
            n.d(t, { Z: () => G });
            var a = n(807896),
                r = n(202784),
                o = n(853435),
                l = n(451051),
                s = n(392237),
                i = n(912021),
                c = n(401388),
                u = n(720728),
                d = n(943245),
                g = n(3693),
                p = n(556303),
                h = n(312771),
                m = n(443781),
                T = n(818065),
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
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: n, lang: a, text: r, translation: o, translationFetchStatus: l, tweetId: s, userLanguage: i } = this.props,
                                { featureSwitches: c } = this.context,
                                u = this._useGrokTranslation(),
                                d = c.isTrue("responsive_web_grok_poll_translation_enabled");
                            if (o?.translationState !== g.H.SUCCESS)
                                if (u) {
                                    if (o?.streamedTranslationFetchStatus === h.ZP.LOADING) return;
                                    t(s, { lang: a, userLanguage: i, text: r, includePolls: d });
                                } else l !== h.ZP.LOADING && n(s, { lang: a, userLanguage: i, text: r }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: n, tweetId: a, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            e(a, { lang: t, userLanguage: r, text: n, includePolls: o.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: n, isFocal: a, isTranslatable: r, lang: o, supplementalLang: l, text: s, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, n, s, o, l, i, r);
                            return !a || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: n, entities: a, isForYouTimelineSelected: r, isTranslatable: o, lang: l, supplementalLang: s, text: i, userLanguage: c } = this.props,
                                u = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, p.F)(e, i),
                                d = this._getMemoizedDisableTranslation(t, n, a, i, l, s, c, o),
                                { location: g } = this.context.history,
                                h = /\/home\/?/.test(g.pathname) && r;
                            return u && h && !d;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: s, fetchTranslation: i, header: c, hitHighlights: u, isFocal: d, isForYouTimelineSelected: g, isGrokAutoTranslated: h, isTranslatable: m, onMediaTranslation: T, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, text: E, translation: F, translationFetchStatus: L, tweetId: S, userLanguage: w, weight: Z, withOriginalText: G, ...I } = this.props,
                                { featureSwitches: C } = this.context,
                                A = (0, p.F)(C, E);
                            if (!F) return;
                            const D = { id: S, richtext_tags: [], entity_set: F.entities, is_expandable: !1, text: F.text, inline_media: [] };
                            return F.text.length ? r.createElement(o.z, { context: D }, r.createElement(l.Z, (0, a.Z)({}, I, { animateDisplayTextIn: A, displayTextRange: A ? [0, F.text.length] : this._getMemoizedDisplayTextRange(F.text), entities: F.entities, lang: F.destinationLanguage, text: F.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, n, a, r, o, l, s) => {
                            if (void 0 !== s) return !s;
                            const i = l && r && (0, d.sE)(r.split("-")[0]) !== (0, d.sE)(l.split("-")[0]) && (0, d.mD)({ displayTextRange: t, entities: n, text: a, language: r });
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
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: n, fetchStreamedGrokTranslation: o, fetchTranslation: s, header: i, isFocal: c, isForYouTimelineSelected: g, isGrokAutoTranslated: p, isTranslatable: h, onMediaTranslation: m, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, translation: E, translationFetchStatus: F, tweetId: L, userLanguage: S, withOriginalText: w, ...G } = this.props,
                        I = E?.localizedSourceLanguage ?? (0, d.t)(S, E?.sourceLanguage);
                    return r.createElement(u.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, key: L, onToggleTranslation: b, originLanguage: I, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, streamedTranslationFetchStatus: E?.streamedTranslationFetchStatus, style: x, translateButtonText: T.VW, translateTargetType: "post", translatedMessage: this._renderTranslation(), translationFetchStatus: F, translationSource: E && E.translationSource, tweetId: L, useGrokTranslation: this._useGrokTranslation(), withOriginalText: w }, r.createElement(l.Z, (0, a.Z)({ style: c && Z.focalTweetText }, G)));
                }
            }
            w.contextType = m.rC;
            const Z = s.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                G = S(w);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.41de72da.js.map
