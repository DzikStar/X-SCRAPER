"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(126962),
                s = a(676145),
                l = a(988566);
            const i = (0, a(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = r.useContext(l.pz);
                if (t && e.contextType === t) return null;
                const { analytics: a, link: i, ...c } = e,
                    u = i && !(0, s.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...a.contextualScribeNamespace, action: "click" } } } : i;
                return r.createElement(
                    o.Z,
                    (0, n.Z)({}, c, {
                        link: u,
                        onClick: function () {
                            const { analytics: t, onClick: a } = e;
                            t.scribeAction("click"), a && a();
                        },
                    }),
                );
            });
        },
        41803: (e, t, a) => {
            a.d(t, { Z: () => L });
            var n = a(262324),
                r = a(202784),
                o = a(325686),
                s = (a(585488), a(351743)),
                l = a.n(s),
                i = a(731708),
                c = a(154003),
                u = a(392237),
                d = a(111677),
                g = a.n(d),
                h = a(922449),
                p = a(946474),
                T = a(671212),
                m = a(517330),
                b = a(725405),
                _ = a(506534);
            const k = n.Z,
                f = g().d6b533dc,
                x = g().j2f9ab6e,
                y = g().d56779a2,
                E = g().b6fe8a56;
            function S(e) {
                const { translateTargetType: t, translationSource: a, tweetId: n, useGrokTranslation: s } = e,
                    { translationFeedback: u, updateTranslationFeedback: d } = r.useContext(_.I),
                    [g] = l()(k),
                    S = (0, b.Z)(),
                    L = r.useCallback(
                        (e) => {
                            const r = "auto" === s ? "grok_auto_translation" : "button" === s ? "grok_button_translation" : `translation-${a || ""}`,
                                o = "Good" === e ? `vote_up_${t}` : `vote_down_${t}`;
                            S.scribe({ component: r, element: o, action: "click" }),
                                g({
                                    variables: { feedback_enum: e, source: "Grok" === a ? "X" : a, tweet_id: n },
                                    onCompleted: () => {
                                        d(n, e);
                                    },
                                });
                        },
                        [S, g, t, a, n, d, s],
                    ),
                    Z = u[n];
                return r.createElement(
                    o.Z,
                    { style: w.container },
                    r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, Z ? x : f),
                    r.createElement(c.ZP, {
                        "aria-checked": "Good" === Z,
                        disabled: !!Z,
                        hoverLabel: { label: y },
                        icon: "Good" === Z ? r.createElement(h.default, { style: w.icon }) : r.createElement(p.default, { style: w.icon }),
                        onClick: () => {
                            L("Good");
                        },
                        role: "switch",
                        size: "xSmall",
                        testID: "thumbsUpVoteButton",
                        type: "primaryText",
                    }),
                    r.createElement(c.ZP, {
                        "aria-checked": "Bad" === Z,
                        disabled: !!Z,
                        hoverLabel: { label: E },
                        icon: "Bad" === Z ? r.createElement(T.default, { style: w.icon }) : r.createElement(m.default, { style: w.icon }),
                        onClick: () => {
                            L("Bad");
                        },
                        size: "xSmall",
                        testID: "thumbsDownVoteButton",
                        type: "primaryText",
                    }),
                );
            }
            const L = r.memo(S),
                w = u.default.create((e) => ({ container: { marginTop: e.spaces.space24, alignItems: "center", justifyContent: "start", flexDirection: "row", gap: e.spaces.space2 }, icon: { color: e.colors.gray700 } }));
        },
        198052: (e, t, a) => {
            a.d(t, { O: () => L });
            var n = a(202784),
                r = a(392237),
                o = a(731708),
                s = a(154003),
                l = a(224162),
                i = a(167630),
                c = a(853435),
                u = a(111677),
                d = a.n(u),
                g = a(692165),
                h = a(187669),
                p = a(818065),
                T = a(725405),
                m = a(457566),
                b = a(688715),
                _ = a(529356);
            const k = d().e839db3a,
                f = (0, b.ju)("https://x.com/settings/languages"),
                x = { link: n.createElement(o.ZP, { color: "text", link: f, weight: "bold", withUnderline: !0 }) },
                y = ({ sourceLang: e }) => n.createElement(d().I18NFormatMessage, { $i18n: "b6411d33", sourceLang: e }, n.cloneElement(x.link, null, d().a15585b4));
            function E({ close: e, sourceLanguageDisplayName: t }) {
                const a = n.createElement(y, { sourceLang: t });
                return n.createElement(_.Z, { actionLabel: k, graphicDisplayMode: "none", headline: "Automatic Translation", onAction: e, onClose: e, subtext: a, withCloseButton: !0 });
            }
            const S = d().e0bffbf8;
            function L(e) {
                const [t, a] = n.useState(!1),
                    u = (0, T.Z)(),
                    { handleCollapseTranslation: d, handleGetTranslationClick: b, position: _, showInfoButton: k, sourceLanguageDisplayName: f, style: x, translateButtonText: y, translateTargetType: L, translationStatus: Z, useGrokTranslation: F } = e,
                    G = r.default.isDarkMode() ? n.createElement(o.ZP, { color: "white" }, n.createElement(m.x1, { style: w.nightLogo })) : n.createElement(o.ZP, { color: "gray700" }, n.createElement(m.x1, null)),
                    C = "auto" === F ? "grok_auto_translation" : "grok_button_translation";
                (0, h.q)(() => {
                    u.scribe({ component: C, element: `translate_${L}`, action: "impression" });
                });
                const I = () => {
                        u.scribe({ component: C, element: `original_${L}`, action: "click" }), d?.();
                    },
                    A = () => {
                        u.scribe({ component: C, element: `translate_${L}`, action: "click" }), b?.();
                    },
                    z = () => {
                        u.scribe({ component: C, element: `error_retry_${L}`, action: "click" }), b?.();
                    },
                    P = n.createElement(s.ZP, { "aria-label": S, icon: n.createElement(g.default, { style: w.info }), onPress: () => a(!0), size: "xSmall", type: "primaryText" }),
                    D = n.createElement(l.RD.Consumer, null, ({ direction: e }) => ("loading" === Z ? n.createElement(o.ZP, { align: "center", color: "link", dir: e, size: "subtext2", style: [w.callout, "top" === _ && w.calloutOnTop, x] }, G, n.createElement(o.ZP, { color: "link", onClick: I, role: "button" }, p.B), n.createElement(i.Z, { size: 13, style: w.loading })) : "failed" === Z ? n.createElement(o.ZP, { align: "center", color: "gray700", dir: e, size: "subtext2", style: [w.callout, "top" === _ && w.calloutOnTop, x] }, G, p.k7, " ", b && n.createElement(o.ZP, { color: "link", onClick: z, role: "button" }, p.so)) : "loaded" === Z ? n.createElement(o.ZP, { align: "center", color: "gray700", dir: e, size: "subtext2", style: [w.callout, "top" === _ && w.calloutOnTop, x] }, G, "auto" === F ? p.gz : p.li, d && n.createElement(o.ZP, { color: "link", onClick: I, role: "button", style: w.toggle, withInteractiveStyling: !0 }, p.eE), k && P) : null != y ? n.createElement(o.ZP, { "aria-expanded": !1, color: "link", size: "subtext2", style: [w.callout, "top" === _ && w.calloutOnTop, x], withInteractiveStyling: !0 }, G, n.createElement(o.ZP, { color: "link", onClick: A, role: "button" }, y), k && P) : void 0));
                return n.createElement(n.Fragment, null, t && n.createElement(E, { close: () => a(!1), sourceLanguageDisplayName: f ?? "" }), n.createElement(c.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, D));
            }
            const w = r.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, info: { color: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center", minHeight: e.spaces.space24, textAlign: "start" }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, a) => {
            a.d(t, { B: () => G, VW: () => S, WJ: () => I, eE: () => C, gz: () => w, k7: () => Z, lL: () => P, li: () => L, so: () => E });
            var n = a(202784),
                r = a(731708),
                o = a(392237),
                s = a(224162),
                l = a(167630),
                i = a(853435),
                c = a(111677),
                u = a.n(c),
                d = a(518532),
                g = a(176632),
                h = a(993752),
                p = a(457566);
            const T = u().c39b0e24,
                m = u().i73a7d48,
                b = u().eeadb767,
                _ = u().d9c6f69d,
                k = u().dc445f82,
                f = u().he9803d3,
                x = u().f8264fc0,
                y = u().caa5ba3d,
                E = u().deaf5b16,
                S = u().a66d80d0,
                L = u().be9b9fb8,
                w = u().ba10dab6,
                Z = u().he9c9634,
                F = u().j2198c98,
                G = u().d4d35bea,
                C = u().f4f69be8,
                I = u().e3097a5c;
            function A({ a11yLabel: e, translatorLogo: t, translatorUrl: a }) {
                return n.createElement(r.ZP, { "aria-label": e, color: "gray700", link: a, size: "subtext2", style: D.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function z(e, t) {
                return { company: e, toggle: n.createElement(r.ZP, { "aria-expanded": !0, "aria-label": F, color: "link", onPress: t, role: "button", size: "subtext2", style: D.toggle, withInteractiveStyling: !0 }) };
            }
            function P(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: a, originLanguage: c, position: S, translateButtonText: w, translationSource: F, translationStatus: C } = e,
                    I = c ? b({ originLanguage: c }) : m,
                    P = o.default.isDarkMode() ? n.createElement(d.default, { style: D.nightLogo }) : n.createElement(g.default, null),
                    v = z(n.createElement(A, { a11yLabel: I, translatorLogo: P, translatorUrl: "https://translate.google.com" }), t),
                    M = c ? f({ originLanguage: c }) : k,
                    B = o.default.isDarkMode() ? n.createElement(h.default, { style: D.nightLogo }) : n.createElement(h.default, null),
                    O = z(n.createElement(A, { a11yLabel: M, translatorLogo: B, translatorUrl: "https://papago.naver.com" }), t),
                    N = c ? y({ originLanguage: c }) : x,
                    H = z(n.createElement(A, { a11yLabel: N, translatorLogo: T, translatorUrl: "" }), t),
                    $ = o.default.isDarkMode() ? n.createElement(r.ZP, { color: "white" }, n.createElement(p.x1, { style: D.nightLogo }), " Grok") : n.createElement(r.ZP, { color: "alwaysBlack" }, n.createElement(p.x1, null), " Grok"),
                    R = c ? _({ originLanguage: c }) : L,
                    V = z(n.createElement(A, { a11yLabel: R, translatorLogo: $, translatorUrl: "" }), t);
                let U;
                U = "Papago" === F ? O : "X" === F ? H : "Grok" === F ? V : v;
                const W = n.createElement(s.RD.Consumer, null, ({ direction: e }) => ("loading" === C ? n.createElement(r.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === S && D.calloutOnTop] }, G, " ", n.createElement(l.Z, { size: 13, style: D.loading })) : "failed" === C ? n.createElement(r.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === S && D.calloutOnTop] }, Z, " ", n.createElement(r.ZP, { color: "link", onClick: a, role: "button", style: D.retry }, E)) : "loaded" === C ? n.createElement(r.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [D.callout, "top" === S && D.calloutOnTop] }, "X" === F ? n.createElement(u().I18NFormatMessage, { $i18n: "cbb4db07" }, n.cloneElement(U.toggle, null, u().e0f81ff3)) : c ? n.createElement(u().I18NFormatMessage, { $i18n: "be5322c7" }, n.cloneElement(U.toggle, null, u().j2862695({ originLanguage: c })), U.company) : n.createElement(u().I18NFormatMessage, { $i18n: "c5f6ee1d" }, n.cloneElement(U.toggle, null, u().b7cb4fab), U.company)) : n.createElement(r.ZP, { "aria-expanded": !1, color: "link", onClick: a, role: "button", size: "subtext2", style: [D.callout, D.toggle, "top" === S && D.calloutOnTop], withInteractiveStyling: !0 }, w)));
                return n.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, W);
            }
            const D = o.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, a) => {
            a.d(t, { Z: () => T });
            var n = a(202784),
                r = a(325686),
                o = a(853435),
                s = a(879113),
                l = a(392237),
                i = a(725516),
                c = a(312771),
                u = a(443781),
                d = a(818065),
                g = a(198052);
            class h extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleGetTranslationClick = (e) => {
                            const { fetchTranslation: t, onToggleTranslation: a } = this.props,
                                { featureSwitches: n } = this.context;
                            t(), this._scribeActionForNonGrok("translate"), this.setState({ translationVisible: !0 }), a && n.isTrue("responsive_web_alt_text_translations_enabled") && a(!0);
                        }),
                        (this._handleCollapseTranslation = (e) => {
                            const { onToggleTranslation: t } = this.props,
                                { featureSwitches: a } = this.context;
                            this._scribeActionForNonGrok("original"), this.setState({ translationVisible: !1 }), t && a.isTrue("responsive_web_alt_text_translations_enabled") && t(!1);
                        }),
                        (this._scribeImpressionForNonGrok = () => {
                            const { analytics: e, translateTargetType: t, useGrokTranslation: a } = this.props;
                            if (a) return;
                            const n = { element: `translate_${t}`, action: "impression" };
                            e.scribe(n);
                        }),
                        (this._scribeActionForNonGrok = (e) => {
                            const { analytics: t, translateTargetType: a, useGrokTranslation: n } = this.props;
                            if (n) return;
                            const r = { element: `${e}_${a}`, action: "click" };
                            t.scribe(r);
                        }),
                        (this._isInlineTranslationEnabled = () => this.context.featureSwitches.isTrue("responsive_web_grok_post_inline_translation_is_enabled")),
                        (this._isInfoButtonEnabled = () => this.context.featureSwitches.isTrue("responsive_web_grok_button_translate_info_button_enabled")),
                        (this._renderTranslationHeader = () => {
                            const { originLanguage: e, streamedTranslationFetchStatus: t, translateButtonText: a, translateTargetType: r, translationFetchStatus: o, translationSource: s, useGrokTranslation: l } = this.props,
                                i = this.state.translationVisible ? t || o : "none",
                                u = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return l ? n.createElement(g.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, position: u, showInfoButton: this._isInfoButtonEnabled() && i === c.iF.LOADED, sourceLanguageDisplayName: e, translateButtonText: a, translateTargetType: r, translationStatus: i, useGrokTranslation: l }) : n.createElement(d.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: u, translateButtonText: a, translationSource: s, translationStatus: i });
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return n.createElement(r.Z, { style: !t && p.translation }, e);
                        }),
                        (this._renderTranslationFeedback = () => {
                            if (!this.state.translationVisible) return null;
                            const { renderTranslationFeedback: e } = this.props;
                            return n.createElement(o.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, e?.());
                        }),
                        (this._renderTranslationBlock = () => n.createElement(n.Fragment, null, this._renderTranslationHeader(), this._renderTranslationMessage(), this._renderTranslationFeedback())),
                        (this.state = { translationVisible: e.isInitiallyTranslated ?? !1 });
                }
                componentDidMount() {
                    const { disableTranslation: e } = this.props;
                    e || this._scribeImpressionForNonGrok();
                }
                render() {
                    const { children: e, disableTranslation: t, header: a, streamedTranslationFetchStatus: o, style: l, translationFetchStatus: i, withOriginalText: u } = this.props,
                        { translationVisible: g } = this.state,
                        { featureSwitches: h, loggedInUserId: p } = this.context,
                        T = t || (!p && h.isTrue("machine_translation_holdback_logged_out")) || (p && h.isTrue("machine_translation_holdback_logged_in")),
                        m = this._isInlineTranslationEnabled(),
                        b = u || !g ? e : null;
                    if (T) return b ? n.createElement(r.Z, { style: l }, this.props.renderGrokAutoTranslationHeader?.(), b, this.props.renderGrokAutoTranslationFeedback?.()) : null;
                    if (m) {
                        const e = g && !!this.props.translatedMessage;
                        return n.createElement(r.Z, { style: l }, a, this._renderTranslationBlock(), !e && b);
                    }
                    return g ? n.createElement(r.Z, { style: l }, a, b, n.createElement(s.Z, { fetchStatus: o || i, loadingMessage: o === c.iF.LOADING ? d.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: d.k7 })) : n.createElement(r.Z, { style: l }, a, b, this._renderTranslationHeader());
                }
            }
            (h.contextType = u.rC), (h.defaultProps = { withOriginalText: !0 });
            const p = l.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                T = (0, i.Z)(h);
        },
        900813: (e, t, a) => {
            a.d(t, { Z: () => G });
            var n = a(807896),
                r = a(202784),
                o = a(853435),
                s = a(451051),
                l = a(392237),
                i = a(912021),
                c = a(401388),
                u = a(720728),
                d = a(943245),
                g = a(3693),
                h = a(556303),
                p = a(312771),
                T = a(443781),
                m = a(818065),
                b = a(71620),
                _ = a(668214),
                k = a(709318),
                f = a(872788),
                x = a(390387),
                y = a(251441);
            const E = (e, t) => y.Z.select(e, t.tweetId),
                S = (e, t) => y.Z.selectFetchStatus(e, t.tweetId);
            function L(e, t) {
                return (0, k.br)(e).type === f.Jz.HOME;
            }
            const w = (0, _.Z)()
                .propsFromState(() => ({ translation: E, translationFetchStatus: S, userLanguage: x.VT, isForYouTimelineSelected: L }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: y.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: y.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: y.Z.fetchGrokTranslationAndForget }));
            class Z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { isGrokAutoTranslated: e, text: t } = this.props,
                                { featureSwitches: a } = this.context;
                            if ((0, h.F)(a, t)) return e ? "auto" : "button";
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: a, lang: n, text: r, translation: o, translationFetchStatus: s, tweetId: l, userLanguage: i } = this.props,
                                { featureSwitches: c } = this.context,
                                u = this._useGrokTranslation(),
                                d = c.isTrue("responsive_web_grok_poll_translation_enabled");
                            if (o?.translationState !== g.H.SUCCESS)
                                if (u) {
                                    if (o?.streamedTranslationFetchStatus === p.ZP.LOADING) return;
                                    t(l, { lang: n, userLanguage: i, text: r, includePolls: d });
                                } else s !== p.ZP.LOADING && a(l, { lang: n, userLanguage: i, text: r }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: a, tweetId: n, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            e(n, { lang: t, userLanguage: r, text: a, includePolls: o.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: a, isFocal: n, isTranslatable: r, lang: o, supplementalLang: s, text: l, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, a, l, o, s, i, r);
                            return !n || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: a, entities: n, isForYouTimelineSelected: r, isTranslatable: o, lang: s, supplementalLang: l, text: i, userLanguage: c } = this.props,
                                u = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, h.F)(e, i),
                                d = this._getMemoizedDisableTranslation(t, a, n, i, s, l, c, o),
                                { location: g } = this.context.history,
                                p = /\/home\/?/.test(g.pathname) && r;
                            return u && p && !d;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: l, fetchTranslation: i, header: c, hitHighlights: u, isFocal: d, isForYouTimelineSelected: g, isGrokAutoTranslated: p, isTranslatable: T, onMediaTranslation: m, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, text: E, translation: S, translationFetchStatus: L, tweetId: w, userLanguage: Z, weight: F, withOriginalText: G, ...C } = this.props,
                                { featureSwitches: I } = this.context,
                                A = (0, h.F)(I, E);
                            if (!S) return;
                            const z = { id: w, richtext_tags: [], entity_set: S.entities, is_expandable: !1, text: S.text, inline_media: [] };
                            return S.text.length ? r.createElement(o.z, { context: z }, r.createElement(s.Z, (0, n.Z)({}, C, { animateDisplayTextIn: A, displayTextRange: A ? [0, S.text.length] : this._getMemoizedDisplayTextRange(S.text), entities: S.entities, lang: S.destinationLanguage, text: S.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, a, n, r, o, s, l) => {
                            if (void 0 !== l) return !l;
                            const i = s && r && (0, d.sE)(r.split("-")[0]) !== (0, d.sE)(s.split("-")[0]) && (0, d.mD)({ displayTextRange: t, entities: a, text: n, language: r });
                            return e || !i || !!o;
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
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: o, fetchTranslation: l, header: i, isFocal: c, isForYouTimelineSelected: g, isGrokAutoTranslated: h, isTranslatable: p, onMediaTranslation: T, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, style: x, supplementalLang: y, translation: E, translationFetchStatus: S, tweetId: L, userLanguage: w, withOriginalText: Z, ...G } = this.props,
                        C = E?.localizedSourceLanguage ?? (0, d.t)(w, E?.sourceLanguage);
                    return r.createElement(u.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, key: L, onToggleTranslation: b, originLanguage: C, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: k, renderTranslationFeedback: f, streamedTranslationFetchStatus: E?.streamedTranslationFetchStatus, style: x, translateButtonText: m.VW, translateTargetType: "post", translatedMessage: this._renderTranslation(), translationFetchStatus: S, translationSource: E && E.translationSource, tweetId: L, useGrokTranslation: this._useGrokTranslation(), withOriginalText: Z }, r.createElement(s.Z, (0, n.Z)({ style: c && F.focalTweetText }, G)));
                }
            }
            Z.contextType = T.rC;
            const F = l.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                G = w(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.35a56dca.js.map
