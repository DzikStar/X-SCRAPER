"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"],
    {
        988245: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(126962),
                l = a(676145),
                s = a(988566);
            const i = (0, a(668214).Z)().withAnalytics({ element: "social_proof" })((e) => {
                const t = r.useContext(s.pz);
                if (t && e.contextType === t) return null;
                const { analytics: a, link: i, ...c } = e,
                    u = i && !(0, l.Z)(i) ? { ...i, state: { ...i.state, referringScribeNamespace: { ...a.contextualScribeNamespace, action: "click" } } } : i;
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
                l = (a(585488), a(351743)),
                s = a.n(l),
                i = a(731708),
                c = a(154003),
                u = a(392237),
                d = a(111677),
                g = a.n(d),
                p = a(922449),
                h = a(946474),
                m = a(671212),
                T = a(517330),
                b = a(725405),
                _ = a(506534);
            const f = n.Z,
                k = g().d6b533dc,
                x = g().j2f9ab6e,
                y = g().d56779a2,
                E = g().b6fe8a56;
            function w(e) {
                const { translateTargetType: t, translationSource: a, tweetId: n, useGrokTranslation: l } = e,
                    { translationFeedback: u, updateTranslationFeedback: d } = r.useContext(_.I),
                    [g] = s()(f),
                    w = (0, b.Z)(),
                    L = r.useCallback(
                        (e) => {
                            const r = "auto" === l ? "grok_auto_translation" : "button" === l ? "grok_button_translation" : `translation-${a || ""}`,
                                o = "Good" === e ? `vote_up_${t}` : `vote_down_${t}`;
                            w.scribe({ component: r, element: o, action: "click" }),
                                g({
                                    variables: { feedback_enum: e, source: "Grok" === a ? "X" : a, tweet_id: n },
                                    onCompleted: () => {
                                        d(n, e);
                                    },
                                });
                        },
                        [w, g, t, a, n, d, l],
                    ),
                    Z = u[n];
                return r.createElement(
                    o.Z,
                    { style: S.container },
                    r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, Z ? x : k),
                    r.createElement(c.ZP, {
                        "aria-checked": "Good" === Z,
                        disabled: !!Z,
                        hoverLabel: { label: y },
                        icon: "Good" === Z ? r.createElement(p.default, { style: S.icon }) : r.createElement(h.default, { style: S.icon }),
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
                        icon: "Bad" === Z ? r.createElement(m.default, { style: S.icon }) : r.createElement(T.default, { style: S.icon }),
                        onClick: () => {
                            L("Bad");
                        },
                        size: "xSmall",
                        testID: "thumbsDownVoteButton",
                        type: "primaryText",
                    }),
                );
            }
            const L = r.memo(w),
                S = u.default.create((e) => ({ container: { marginTop: e.spaces.space24, alignItems: "center", justifyContent: "start", flexDirection: "row", gap: e.spaces.space2 }, icon: { color: e.colors.gray700 } }));
        },
        574663: (e, t, a) => {
            a.d(t, { O: () => $ });
            var n = a(202784),
                r = a(392237),
                o = a(731708),
                l = a(154003),
                s = a(224162),
                i = a(167630),
                c = a(853435),
                u = a(111677),
                d = a.n(u),
                g = a(692165),
                p = a(187669),
                h = a(818065),
                m = a(725405),
                T = a(457566),
                b = a(325686),
                _ = a(688715),
                f = a(529356),
                k = a(883229),
                x = a(943914),
                y = (a(571372), a(945907)),
                E = a(794966),
                w = (a(585488), a(351743)),
                L = a.n(w),
                S = a(451566),
                Z = a(782642),
                F = a(535338);
            const G = d().hba0547a,
                C = E.Z,
                I = y.Z;
            function A({ label: e, lang: t, sourceLanguageDisplayName: a }) {
                const r = (0, F.p)(C, { lang: t }, { fetchPolicy: "store-and-network" }),
                    o = r.viewer_v2?.user_results?.result,
                    l = o?.__id,
                    s = o?.user_auto_translate_language_enabled;
                if (null == s || null == l) throw new Error("unable to fetch auto translation status");
                const i = (0, Z.p)(),
                    [c] = L()(I);
                return n.createElement(S.Z, {
                    "aria-label": e,
                    onValueChange: (e) => {
                        ((e) => {
                            const a = (a) => {
                                const n = a.get(l);
                                n?.setValue(e, "user_auto_translate_language_enabled", { view: t });
                            };
                            c({
                                variables: { language: t, enable: e },
                                optimisticUpdater: a,
                                updater: a,
                                onError: () => {
                                    i({ text: G });
                                },
                            });
                        })(e);
                    },
                    value: s,
                });
            }
            const z = d().e839db3a,
                P = d().e7a86c77,
                v = d().c60b9e5c,
                D = (0, _.ju)("https://x.com/settings/languages"),
                B = { link: n.createElement(o.ZP, { color: "text", link: D, weight: "bold", withUnderline: !0 }) },
                M = () => n.createElement(d().I18NFormatMessage, { $i18n: "g545a661" }, n.cloneElement(B.link, null, d().c6ad999b)),
                O = { context: "GrokAutoTranslationInfoToggle" };
            function N({ close: e, sourceLanguage: t, sourceLanguageDisplayName: a }) {
                const r = n.createElement(M, null),
                    l = P({ language: a });
                return n.createElement(f.Z, { actionLabel: z, graphicDisplayMode: "none", headline: "Automatic Translation", onAction: e, onClose: e, subtext: r, withCloseButton: !0 }, t && a && n.createElement(k.N, { errorConfig: O }, n.createElement(b.Z, { style: H.switch }, n.createElement(o.ZP, { size: "headline2" }, l), n.createElement(x.B, { fallback: n.createElement(i.Z, { size: "small" }) }, n.createElement(A, { label: l, lang: t, sourceLanguageDisplayName: a }))), n.createElement(o.ZP, { color: "gray700", size: "subtext1", style: H.desc }, v)));
            }
            const H = r.default.create((e) => ({ switch: { display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }, desc: { marginTop: e.spaces.space8, marginBottom: e.spaces.space32 } })),
                V = d().e0bffbf8;
            function $(e) {
                const [t, a] = n.useState(!1),
                    u = (0, m.Z)(),
                    { handleCollapseTranslation: d, handleGetTranslationClick: b, position: _, showInfoButton: f, sourceLanguage: k, sourceLanguageDisplayName: x, style: y, translateButtonText: E, translateTargetType: w, translationStatus: L, useGrokTranslation: S } = e,
                    Z = r.default.isDarkMode() ? n.createElement(o.ZP, { color: "white" }, n.createElement(T.x1, { style: R.nightLogo })) : n.createElement(o.ZP, { color: "gray700" }, n.createElement(T.x1, null)),
                    F = "auto" === S ? "grok_auto_translation" : "grok_button_translation";
                (0, p.q)(() => {
                    u.scribe({ component: F, element: `translate_${w}`, action: "impression" });
                });
                const G = () => {
                        u.scribe({ component: F, element: `original_${w}`, action: "click" }), d?.();
                    },
                    C = () => {
                        u.scribe({ component: F, element: `translate_${w}`, action: "click" }), b?.();
                    },
                    I = () => {
                        u.scribe({ component: F, element: `error_retry_${w}`, action: "click" }), b?.();
                    },
                    A = n.createElement(l.ZP, { "aria-label": V, icon: n.createElement(g.default, { style: R.info }), onPress: () => a(!0), size: "xSmall", type: "primaryText" }),
                    z = n.createElement(s.RD.Consumer, null, ({ direction: e }) => ("loading" === L ? n.createElement(o.ZP, { align: "center", color: "link", dir: e, size: "subtext2", style: [R.callout, "top" === _ && R.calloutOnTop, y] }, Z, n.createElement(o.ZP, { color: "link", onClick: G, role: "button" }, h.B), n.createElement(i.Z, { size: 13, style: R.loading })) : "failed" === L ? n.createElement(o.ZP, { align: "center", color: "gray700", dir: e, size: "subtext2", style: [R.callout, "top" === _ && R.calloutOnTop, y] }, Z, h.k7, " ", b && n.createElement(o.ZP, { color: "link", onClick: I, role: "button" }, h.so)) : "loaded" === L ? n.createElement(o.ZP, { align: "center", color: "gray700", dir: e, size: "subtext2", style: [R.callout, "top" === _ && R.calloutOnTop, y] }, Z, "auto" === S ? h.gz : h.li, d && n.createElement(o.ZP, { color: "link", onClick: G, role: "button", style: R.toggle, withInteractiveStyling: !0 }, h.eE), f && A) : null != E ? n.createElement(o.ZP, { "aria-expanded": !1, color: "link", size: "subtext2", style: [R.callout, "top" === _ && R.calloutOnTop, y] }, Z, n.createElement(o.ZP, { color: "link", onClick: C, role: "button", withInteractiveStyling: !0 }, E), f && A) : void 0));
                return n.createElement(n.Fragment, null, t && n.createElement(N, { close: () => a(!1), sourceLanguage: k, sourceLanguageDisplayName: x }), n.createElement(c.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, z));
            }
            const R = r.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.gray700 }, info: { color: e.colors.gray700 }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4, gap: e.spaces.space4, alignItems: "center", minHeight: e.spaces.space24, textAlign: "start" }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, loading: { marginStart: e.spaces.space4 } }));
        },
        818065: (e, t, a) => {
            a.d(t, { B: () => G, VW: () => w, WJ: () => I, eE: () => C, gz: () => S, k7: () => Z, lL: () => P, li: () => L, so: () => E });
            var n = a(202784),
                r = a(731708),
                o = a(392237),
                l = a(224162),
                s = a(167630),
                i = a(853435),
                c = a(111677),
                u = a.n(c),
                d = a(518532),
                g = a(176632),
                p = a(993752),
                h = a(457566);
            const m = u().c39b0e24,
                T = u().i73a7d48,
                b = u().eeadb767,
                _ = u().d9c6f69d,
                f = u().dc445f82,
                k = u().he9803d3,
                x = u().f8264fc0,
                y = u().caa5ba3d,
                E = u().deaf5b16,
                w = u().a66d80d0,
                L = u().be9b9fb8,
                S = u().ba10dab6,
                Z = u().he9c9634,
                F = u().j2198c98,
                G = u().d4d35bea,
                C = u().f4f69be8,
                I = u().e3097a5c;
            function A({ a11yLabel: e, translatorLogo: t, translatorUrl: a }) {
                return n.createElement(r.ZP, { "aria-label": e, color: "gray700", link: a, size: "subtext2", style: v.translationSourceLink, withInteractiveStyling: !1 }, t);
            }
            function z(e, t) {
                return { company: e, toggle: n.createElement(r.ZP, { "aria-expanded": !0, "aria-label": F, color: "link", onPress: t, role: "button", size: "subtext2", style: v.toggle, withInteractiveStyling: !0 }) };
            }
            function P(e) {
                const { handleCollapseTranslation: t, handleGetTranslationClick: a, originLanguage: c, position: w, translateButtonText: S, translationSource: F, translationStatus: C } = e,
                    I = c ? b({ originLanguage: c }) : T,
                    P = o.default.isDarkMode() ? n.createElement(d.default, { style: v.nightLogo }) : n.createElement(g.default, null),
                    D = z(n.createElement(A, { a11yLabel: I, translatorLogo: P, translatorUrl: "https://translate.google.com" }), t),
                    B = c ? k({ originLanguage: c }) : f,
                    M = o.default.isDarkMode() ? n.createElement(p.default, { style: v.nightLogo }) : n.createElement(p.default, null),
                    O = z(n.createElement(A, { a11yLabel: B, translatorLogo: M, translatorUrl: "https://papago.naver.com" }), t),
                    N = c ? y({ originLanguage: c }) : x,
                    H = z(n.createElement(A, { a11yLabel: N, translatorLogo: m, translatorUrl: "" }), t),
                    V = o.default.isDarkMode() ? n.createElement(r.ZP, { color: "white" }, n.createElement(h.x1, { style: v.nightLogo }), " Grok") : n.createElement(r.ZP, { color: "alwaysBlack" }, n.createElement(h.x1, null), " Grok"),
                    $ = c ? _({ originLanguage: c }) : L,
                    R = z(n.createElement(A, { a11yLabel: $, translatorLogo: V, translatorUrl: "" }), t);
                let U;
                U = "Papago" === F ? O : "X" === F ? H : "Grok" === F ? R : D;
                const j = n.createElement(l.RD.Consumer, null, ({ direction: e }) => ("loading" === C ? n.createElement(r.ZP, { align: "center", color: "link", dir: e, numberOfLines: 1, size: "subtext2", style: [v.callout, "top" === w && v.calloutOnTop] }, G, " ", n.createElement(s.Z, { size: 13, style: v.loading })) : "failed" === C ? n.createElement(r.ZP, { align: "center", color: "gray700", dir: e, numberOfLines: 1, size: "subtext2", style: [v.callout, "top" === w && v.calloutOnTop] }, Z, " ", n.createElement(r.ZP, { color: "link", onClick: a, role: "button", style: v.retry }, E)) : "loaded" === C ? n.createElement(r.ZP, { align: "center", dir: e, numberOfLines: 1, size: "subtext2", style: [v.callout, "top" === w && v.calloutOnTop] }, "X" === F ? n.createElement(u().I18NFormatMessage, { $i18n: "cbb4db07" }, n.cloneElement(U.toggle, null, u().e0f81ff3)) : c ? n.createElement(u().I18NFormatMessage, { $i18n: "be5322c7" }, n.cloneElement(U.toggle, null, u().j2862695({ originLanguage: c })), U.company) : n.createElement(u().I18NFormatMessage, { $i18n: "c5f6ee1d" }, n.cloneElement(U.toggle, null, u().b7cb4fab), U.company)) : n.createElement(r.ZP, { "aria-expanded": !1, color: "link", onClick: a, role: "button", size: "subtext2", style: [v.callout, v.toggle, "top" === w && v.calloutOnTop], withInteractiveStyling: !0 }, S)));
                return n.createElement(i.z, { context: { id: "", richtext_tags: [], entity_set: {}, is_expandable: !1, text: "", inline_media: [] } }, j);
            }
            const v = o.default.create((e) => ({ translationSourceLink: { marginTop: "0.1em", marginHorizontal: e.spaces.space4 }, nightLogo: { fill: e.colors.white }, callout: { display: "flex", flexWrap: "wrap", marginTop: e.spaces.space4 }, calloutOnTop: { marginTop: 0, marginBottom: e.spaces.space4 }, toggle: { cursor: "pointer" }, retry: { marginStart: e.spaces.space4 }, loading: { marginStart: e.spaces.space4 } }));
        },
        720728: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(325686),
                o = a(853435),
                l = a(879113),
                s = a(392237),
                i = a(725516),
                c = a(312771),
                u = a(443781),
                d = a(818065),
                g = a(574663);
            class p extends n.Component {
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
                        (this._isInfoButtonEnabled = () => this.context.featureSwitches.isTrue("responsive_web_grok_show_grok_translated_post")),
                        (this._renderTranslationHeader = () => {
                            const { originLanguage: e, originLanguageCode: t, streamedTranslationFetchStatus: a, translateButtonText: r, translateTargetType: o, translationFetchStatus: l, translationSource: s, useGrokTranslation: i } = this.props,
                                u = this.state.translationVisible ? a || l : "none",
                                p = this._isInlineTranslationEnabled() ? "top" : "bottom";
                            return i ? n.createElement(g.O, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, position: p, showInfoButton: this._isInfoButtonEnabled() && u === c.iF.LOADED, sourceLanguage: t, sourceLanguageDisplayName: e, translateButtonText: r, translateTargetType: o, translationStatus: u, useGrokTranslation: i }) : n.createElement(d.lL, { handleCollapseTranslation: this._handleCollapseTranslation, handleGetTranslationClick: this._handleGetTranslationClick, originLanguage: e, position: p, translateButtonText: r, translationSource: s, translationStatus: u });
                        }),
                        (this._renderTranslationMessage = () => {
                            if (!this.state.translationVisible) return null;
                            const { translatedMessage: e } = this.props,
                                t = this._isInlineTranslationEnabled();
                            return n.createElement(r.Z, { style: !t && h.translation }, e);
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
                    const { children: e, disableTranslation: t, header: a, streamedTranslationFetchStatus: o, style: s, translationFetchStatus: i, withOriginalText: u } = this.props,
                        { translationVisible: g } = this.state,
                        { featureSwitches: p, loggedInUserId: h } = this.context,
                        m = t || (!h && p.isTrue("machine_translation_holdback_logged_out")) || (h && p.isTrue("machine_translation_holdback_logged_in")),
                        T = this._isInlineTranslationEnabled(),
                        b = u || !g ? e : null;
                    if (m) return b ? n.createElement(r.Z, { style: s }, this.props.renderGrokAutoTranslationHeader?.(), b, this.props.renderGrokAutoTranslationFeedback?.()) : null;
                    if (T) {
                        const e = g && !!this.props.translatedMessage;
                        return n.createElement(r.Z, { style: s }, a, this._renderTranslationBlock(), !e && b);
                    }
                    return g ? n.createElement(r.Z, { style: s }, a, b, n.createElement(l.Z, { fetchStatus: o || i, loadingMessage: o === c.iF.LOADING ? d.B : void 0, onRequestRetry: this._handleGetTranslationClick, render: this._renderTranslationBlock, retryMessage: d.k7 })) : n.createElement(r.Z, { style: s }, a, b, this._renderTranslationHeader());
                }
            }
            (p.contextType = u.rC), (p.defaultProps = { withOriginalText: !0 });
            const h = s.default.create((e) => ({ translation: { marginTop: e.spaces.space4 } })),
                m = (0, i.Z)(p);
        },
        900813: (e, t, a) => {
            a.d(t, { Z: () => G });
            var n = a(807896),
                r = a(202784),
                o = a(853435),
                l = a(451051),
                s = a(392237),
                i = a(912021),
                c = a(401388),
                u = a(720728),
                d = a(943245),
                g = a(3693),
                p = a(556303),
                h = a(312771),
                m = a(443781),
                T = a(818065),
                b = a(71620),
                _ = a(668214),
                f = a(709318),
                k = a(872788),
                x = a(390387),
                y = a(251441);
            const E = (e, t) => y.Z.select(e, t.tweetId),
                w = (e, t) => y.Z.selectFetchStatus(e, t.tweetId);
            function L(e, t) {
                return (0, f.br)(e).type === k.Jz.HOME;
            }
            const S = (0, _.Z)()
                .propsFromState(() => ({ translation: E, translationFetchStatus: w, userLanguage: x.VT, isForYouTimelineSelected: L }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TRANSLATE_TWEET"), fetchTranslation: y.Z.fetchOneIfNeeded, fetchStreamedGrokTranslation: y.Z.fetchStreamedGrokTranslation, fetchGrokTranslationAndForget: y.Z.fetchGrokTranslationAndForget }));
            class Z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._useGrokTranslation = () => {
                            const { isGrokAutoTranslated: e, text: t } = this.props,
                                { featureSwitches: a } = this.context;
                            if ((0, p.F)(a, t)) return e ? "auto" : "button";
                        }),
                        (this._fetchTranslation = () => {
                            const { createLocalApiErrorHandler: e, fetchStreamedGrokTranslation: t, fetchTranslation: a, lang: n, text: r, translation: o, translationFetchStatus: l, tweetId: s, userLanguage: i } = this.props,
                                { featureSwitches: c } = this.context,
                                u = this._useGrokTranslation(),
                                d = c.isTrue("responsive_web_grok_poll_translation_enabled");
                            if (o?.translationState !== g.H.SUCCESS)
                                if (u) {
                                    if (o?.streamedTranslationFetchStatus === h.ZP.LOADING) return;
                                    t(s, { lang: n, userLanguage: i, text: r, includePolls: d });
                                } else l !== h.ZP.LOADING && a(s, { lang: n, userLanguage: i, text: r }).catch(e());
                        }),
                        (this._fetchGrokTranslationAndForgetIfNeeded = () => {
                            if (!this._shouldFetchGrokTranslationAndForget()) return;
                            const { fetchGrokTranslationAndForget: e, lang: t, text: a, tweetId: n, userLanguage: r } = this.props,
                                { featureSwitches: o } = this.context;
                            e(n, { lang: t, userLanguage: r, text: a, includePolls: o.isTrue("responsive_web_grok_poll_translation_enabled") });
                        }),
                        (this._shouldDisableTranslation = () => {
                            const { disableTranslation: e, displayTextRange: t, entities: a, isFocal: n, isTranslatable: r, lang: o, supplementalLang: l, text: s, userLanguage: i } = this.props,
                                c = this._getMemoizedDisableTranslation(e, t, a, s, o, l, i, r);
                            return !n || c;
                        }),
                        (this._shouldFetchGrokTranslationAndForget = () => {
                            const { featureSwitches: e } = this.context,
                                { disableTranslation: t, displayTextRange: a, entities: n, isForYouTimelineSelected: r, isTranslatable: o, lang: l, supplementalLang: s, text: i, userLanguage: c } = this.props,
                                u = e.isTrue("responsive_web_grok_enable_translation_bg_fetch_and_forget") && (0, p.F)(e, i),
                                d = this._getMemoizedDisableTranslation(t, a, n, i, l, s, c, o),
                                { location: g } = this.context.history,
                                h = /\/home\/?/.test(g.pathname) && r;
                            return u && h && !d;
                        }),
                        (this._renderTranslation = () => {
                            const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: s, fetchTranslation: i, header: c, hitHighlights: u, isFocal: d, isForYouTimelineSelected: g, isGrokAutoTranslated: h, isTranslatable: m, onMediaTranslation: T, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: f, renderTranslationFeedback: k, style: x, supplementalLang: y, text: E, translation: w, translationFetchStatus: L, tweetId: S, userLanguage: Z, weight: F, withOriginalText: G, ...C } = this.props,
                                { featureSwitches: I } = this.context,
                                A = (0, p.F)(I, E);
                            if (!w) return;
                            const z = { id: S, richtext_tags: [], entity_set: w.entities, is_expandable: !1, text: w.text, inline_media: [] };
                            return w.text.length ? r.createElement(o.z, { context: z }, r.createElement(l.Z, (0, n.Z)({}, C, { animateDisplayTextIn: A, displayTextRange: A ? [0, w.text.length] : this._getMemoizedDisplayTextRange(w.text), entities: w.entities, lang: w.destinationLanguage, text: w.text }))) : null;
                        }),
                        (this._getMemoizedDisplayTextRange = (0, i.Z)((e) => [0, e.length])),
                        (this._getMemoizedDisableTranslation = (0, i.Z)((e, t, a, n, r, o, l, s) => {
                            if (void 0 !== s) return !s;
                            const i = l && r && (0, d.sE)(r.split("-")[0]) !== (0, d.sE)(l.split("-")[0]) && (0, d.mD)({ displayTextRange: t, entities: a, text: n, language: r });
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
                    const { createLocalApiErrorHandler: e, disableTranslation: t, fetchGrokTranslationAndForget: a, fetchStreamedGrokTranslation: o, fetchTranslation: s, header: i, isFocal: c, isForYouTimelineSelected: g, isGrokAutoTranslated: p, isTranslatable: h, onMediaTranslation: m, onToggleTranslation: b, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: f, renderTranslationFeedback: k, style: x, supplementalLang: y, translation: E, translationFetchStatus: w, tweetId: L, userLanguage: S, withOriginalText: Z, ...G } = this.props,
                        C = E?.localizedSourceLanguage ?? (0, d.t)(S, E?.sourceLanguage);
                    return r.createElement(u.Z, { disableTranslation: this._shouldDisableTranslation(), fetchTranslation: this._fetchTranslation, header: i, key: L, onToggleTranslation: b, originLanguage: C, originLanguageCode: E?.sourceLanguage, renderGrokAutoTranslationFeedback: _, renderGrokAutoTranslationHeader: f, renderTranslationFeedback: k, streamedTranslationFetchStatus: E?.streamedTranslationFetchStatus, style: x, translateButtonText: T.VW, translateTargetType: "post", translatedMessage: this._renderTranslation(), translationFetchStatus: w, translationSource: E && E.translationSource, tweetId: L, useGrokTranslation: this._useGrokTranslation(), withOriginalText: Z }, r.createElement(l.Z, (0, n.Z)({ style: c && F.focalTweetText }, G)));
                }
            }
            Z.contextType = m.rC;
            const F = s.default.create((e) => ({ focalTweetText: { lineHeight: e.lineHeightsPx.headline1 } })),
                G = S(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d.1439b50a.js.map
