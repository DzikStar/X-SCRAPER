"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"],
    {
        746795: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(449945),
                l = o(686689),
                c = o(177371),
                s = o(725516);
            const d = "inner_tombstone";
            function p({ children: e, config: t, id: o }) {
                const p = (0, s.z)();
                const u = t.richRevealText?.text || t.revealText,
                    m = t.richText
                        ? r.createElement(l.Z, {
                              alignment: t.richText.alignment,
                              entities: t.richText.entities,
                              onEntityClick: function () {
                                  p.scribe({ action: "open_link", component: d });
                              },
                              rtl: t.richText.rtl,
                              text: t.richText.text,
                          })
                        : t.text;
                return r.createElement(
                    a.Z,
                    { id: o },
                    u
                        ? r.createElement(
                              i.Z,
                              {
                                  label: m,
                                  onReveal: function () {
                                      p.scribe({ action: "click", component: d });
                                  },
                                  render: ({ onActionClick: e, ...t }) => r.createElement(c.Z, (0, n.Z)({}, t, { inline: !0, onClick: e })),
                                  revealLabel: u,
                              },
                              e,
                          )
                        : r.createElement(c.Z, { inline: !0 }, m),
                );
            }
        },
        184482: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(325686),
                a = o(952428),
                i = o(731708),
                l = o(392237),
                c = o(332920),
                s = o.n(c),
                d = o(53674),
                p = o(443781),
                u = o(533128),
                m = o(400300);
            const h = s().eb748f7e;
            class b extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = u.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onAnalyticsClick: t, style: o, tweet: l, viewerUserId: c } = this.props;
                    return !this._shouldDisable(l, u.d.ViewTweetActivity) && c === l.user.id_str ? n.createElement(r.Z, { style: [_.analyticsContainerWithChildren, o] }, n.createElement(a.Z, { link: `${l.permalink}/analytics`, onPress: t, style: _.analyticsButton, testID: m.Z.analyticsButton }, n.createElement(d.default, { style: _.analyticsIcon }), n.createElement(i.ZP, { color: "gray700" }, h)), e) : null;
                }
            }
            b.contextType = p.rC;
            const _ = l.default.create((e) => ({ analyticsIcon: { color: e.colors.gray700, paddingEnd: e.spaces.space4 }, analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: "row", flexGrow: 1 }, analyticsContainerWithChildren: { justifyContent: "space-between", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", alignItems: "center" } })),
                g = b;
        },
        587653: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(891198),
                a = o(98538),
                i = o(731708),
                l = o(332920),
                c = o.n(l),
                s = o(288955);
            const d = (0, o(725516).Z)(({ coinCount: e, isLabel: t, link: o }) => {
                const l = r.ZP.getTruncatedCount(Number(e)),
                    d = n.useMemo(() => ({ actionName: n.createElement(a.Z.Label, null), statDisplay: t ? n.createElement(a.Z.Label, null) : n.createElement(a.Z.Value, { animated: !0, count: Number(e) }) }), [e, t]),
                    p = n.useMemo(() => ({ count: Number(e), displayCoins: l }), [e, l]);
                return n.createElement(s.Z, null, (e) => n.createElement(a.Z, { link: o, onPress: e?.() }, n.createElement(i.ZP, null, n.createElement(c().I18NFormatMessage, { $i18n: "c5064c6f" }, n.cloneElement(d.statDisplay, null, c().b7cff250({ displayCoins: p.displayCoins })), n.cloneElement(d.actionName, null, c().g62dcfbc({ count: p.count }))))));
            });
        },
        494718: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                r = o(202784),
                a = o(737082),
                i = o(725405);
            const l = (e) => {
                const t = (0, i.Z)();
                return r.createElement(
                    a.Z,
                    (0, n.Z)({}, e, {
                        handleAnchorAction: () => {
                            t.scribe({ component: "conversation_control_prompt", element: "see_conversation", action: "click" });
                        },
                        handleAnchorOpen: (e) => {
                            t.scribe({ element: e, action: "click" });
                        },
                        handleAnchorSecondaryAction: () => {
                            t.scribe({ component: "conversation_control_prompt", element: "ok", action: "click" });
                        },
                        handleHeadsUpImpression: (e, o) => {
                            t.scribe({ element: "heads_up_context", action: o, data: { tweet_id: e } });
                        },
                    }),
                );
            };
        },
        741105: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(325686),
                a = o(782261),
                i = o(952428),
                l = o(731708),
                c = o(392237),
                s = o(332920),
                d = o.n(s),
                p = o(53674),
                u = o(443781),
                m = o(533128),
                h = o(400300);
            const b = d().c5491b5d;
            class _ extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = m.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onEngagementsClick: t, style: o, tweet: c, viewerUserId: s } = this.props,
                        d = !this._shouldDisable(c, m.d.ViewTweetActivity) && s === c.user.id_str,
                        u = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        _ = a.Z.getLocalizedEntityName({ tweet: c, articlesEnabled: u });
                    return d ? n.createElement(r.Z, { style: [g.engagementsContainerWithChildren, o] }, n.createElement(i.Z, { link: `${c.permalink}/quotes`, onPress: t, style: g.engagementsButton, testID: h.Z.analyticsButton }, n.createElement(p.default, { style: g.engagementsIcon }), n.createElement(l.ZP, { color: "gray700" }, b({ entity: _ }))), e) : null;
                }
            }
            _.contextType = u.rC;
            const g = c.default.create((e) => ({ engagementsIcon: { color: e.colors.gray700, paddingEnd: e.spaces.space4 }, engagementsButton: { paddingVertical: e.spaces.space16, flexDirection: "row", flexGrow: 1 }, engagementsContainerWithChildren: { justifyContent: "space-between", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", alignItems: "center" } })),
                w = _;
        },
        592711: (e, t, o) => {
            o.d(t, { f5: () => r, xR: () => a });
            var n = o(782261);
            function r(e, t, o) {
                const r = n.Z.getOriginalTweet(e),
                    a = r?.entities?.hashtags;
                if (!Array.isArray(a) || a.length < 1) return;
                const i = a[0],
                    l =
                        o &&
                        (function (e) {
                            const t = n.Z.getOriginalTweet(e),
                                o = t.extended_entities && t.extended_entities.media;
                            return !!(o && o.length > 0) && o.some((e) => "animated_gif" === e.type);
                        })(e);
                return l && t.isTrue("responsive_web_hashtag_highlight_is_enabled") ? i.text : void 0;
            }
            function a(e, t) {
                if (e && t.isTrue("responsive_web_hashtag_highlight_show_avatar")) return e.profile_image_url_https;
            }
        },
        310007: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                r = o(928316),
                a = o(325686),
                i = o(392237),
                l = o(757483),
                c = o(215337),
                s = o(731708),
                d = o(138099),
                p = o(530525),
                u = o(439592),
                m = o(154003),
                h = o(332920),
                b = o.n(h),
                _ = o(323265),
                g = o(443781),
                w = o(725516),
                y = o(199481);
            const f = b().c14cdb18,
                x = b().be059f7e,
                k = b().c34f845e,
                E = b().c37102aa,
                Z = b().ac245c4c,
                C = b().e4db6326,
                T = (e) => {
                    const { hasSocialContext: t, onDismiss: o } = e,
                        [d, p] = n.useState(!0),
                        u = i.default.theme.colors.white,
                        m = n.useCallback(() => [l.Z.hexToCss(u || i.default.theme.colors.white, 0.2), l.Z.hexToCss(u || i.default.theme.colors.white, 0.5), l.Z.hexToCss(u || i.default.theme.colors.white, 0.1), l.Z.hexToCss(u || i.default.theme.colors.white, 0.1)], [u]),
                        h = { top: t ? 74 : 58 },
                        b = n.useRef(null);
                    n.useEffect(() => {
                        const e = document.querySelector('[data-testid="tweet"]');
                        e && (b.current = e);
                    }, []);
                    return b.current
                        ? d &&
                              (0, r.createPortal)(
                                  n.createElement(
                                      a.Z,
                                      {
                                          onClick: () => {
                                              p(!1), o && o();
                                          },
                                          style: [h, P.promotePopup],
                                      },
                                      n.createElement(a.Z, { style: P.popupTriangle }),
                                      n.createElement(c.Z, { angle: 90, colors: m(), style: P.popupGradient }),
                                      n.createElement(s.ZP, { color: "alwaysBlack" }, x),
                                  ),
                                  b.current,
                              )
                        : null;
                },
                S = (e) => {
                    const { onDismiss: t, onPromotePress: o, promoteLink: r } = e;
                    return n.createElement(
                        d.Z,
                        { onMaskClick: t, type: "bottom", withMask: !0 },
                        n.createElement(
                            a.Z,
                            null,
                            n.createElement(p.Z, { "aria-label": "", aspectMode: u.Z.exact(2), image: y }),
                            n.createElement(
                                a.Z,
                                { style: P.contentContainer },
                                n.createElement(a.Z, { style: P.popupTitle }, n.createElement(s.ZP, { align: "left", role: "heading", size: "title4", weight: "heavy" }, k)),
                                n.createElement(s.ZP, null, E),
                                n.createElement(
                                    m.ZP,
                                    {
                                        link: r,
                                        onClick: function () {
                                            t(), o();
                                        },
                                        style: P.boostButton,
                                        type: "primaryFilled",
                                    },
                                    Z,
                                ),
                                n.createElement(m.ZP, { onClick: t, type: "secondaryFilled" }, C),
                            ),
                        ),
                    );
                };
            function v(e) {
                const { featureSwitches: t } = (0, g.QZ)(),
                    o = (0, w.z)(),
                    [r, a] = n.useState({ isVisible: !1, wasLoaded: !1 }),
                    i = t.isTrue("rweb_quick_promote_boost_enabled"),
                    l = t.isTrue("responsive_web_qp_two_screens_enabled"),
                    c = t.isTrue("responsive_web_qp_full_popup_enabled"),
                    s = e.isFocal ? "small" : "xSmall",
                    d = e.isFocal ? "primaryFilled" : "primaryOutlined";
                function p() {
                    r.wasLoaded ? o.scribe({ page: "tweet", component: "tweet_promote_button", action: "click_label" }) : o.scribe({ page: "tweet", component: "tweet_promote_button", action: "click" });
                }
                function u() {
                    a((e) => ({ ...e, isVisible: !1 }));
                }
                const h = i && _.ZP.isTwitterApp() && _.ZP.isAndroid() ? "quick_promote_lite_web" : l ? "quick_promote_web/targeting" : "quick_promote_web/intro";
                return (
                    n.useEffect(() => {
                        if (e.isFocal) {
                            o.scribe({ page: "tweet", component: "tweet_promote_button", action: "load" });
                            const e = localStorage.getItem("lastPromotePopup");
                            if (e) {
                                if (Date.now() - parseInt(e, 10) < 6048e5) return;
                            }
                            localStorage.setItem("lastPromotePopup", Date.now().toString()), a((e) => ({ ...e, isVisible: !0, wasLoaded: !0 })), o.scribe({ page: "tweet", component: "tweet_promote_button_popup", action: "load" });
                        }
                    }, []),
                    n.createElement(n.Fragment, null, n.createElement(m.ZP, { link: `${e.permalink}/${h}`, onPress: p, size: s, type: d }, f), e.isFocal && r.isVisible && (c ? n.createElement(S, { onDismiss: u, onPromotePress: p, promoteLink: `${e.permalink}/quick_promote_web/intro` }) : n.createElement(T, { hasSocialContext: e.hasSocialContext, onDismiss: u })))
                );
            }
            const P = i.default.create((e) => ({ promotePopup: { backgroundColor: e.colors.yellow400, borderRadius: e.borderRadii.medium, boxShadowColor: e.colors.gray0, boxShadowOffset: { width: -2, height: 2 }, boxShadowOpacity: 0.5, boxShadowRadius: 2, cursor: "default", end: 50, minWidth: 260, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, position: "absolute", whiteSpace: "nowrap", zIndex: 5 }, popupGradient: { borderRadius: e.borderRadii.medium, height: "100%", position: "absolute", start: 0, top: 0, width: "100%" }, popupTriangle: { borderBottomColor: e.colors.yellow400, borderBottomWidth: 6, borderEndColor: e.colors.buttonWhite, borderEndWidth: 6, borderStartColor: e.colors.buttonWhite, borderStartWidth: 6, borderStyle: "solid", end: 70, position: "absolute", top: -6 }, contentContainer: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space40, paddingTop: e.spaces.space20 }, popupTitle: { marginVertical: e.spaces.space20 }, boostButton: { marginVertical: e.spaces.space20 } }));
        },
        585041: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                i = o(392237),
                l = o(332920),
                c = o.n(l),
                s = o(283379);
            const d = c().g6237a1e,
                p = c().d6b5949e,
                u = (e) => ("paused" === e ? p : d),
                m = (e) => {
                    const { id: t, status: o, style: i } = e,
                        l = "paused" === o;
                    return n.createElement(r.Z, { style: [h.root, i] }, n.createElement(s.default, { style: [h.icon, l ? h.withGray700 : null] }), n.createElement(a.ZP, { color: l ? "gray700" : "text", id: t, size: "subtext2" }, u(o)));
                },
                h = i.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.buttonBlack, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, withGray700: { color: e.colors.gray700 } }));
        },
        549613: (e, t, o) => {
            o.d(t, { ZP: () => w });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(952428),
                l = o(731708),
                c = o(891198),
                s = o(98538),
                d = o(332920),
                p = o.n(d),
                u = o(288955),
                m = o(725516);
            const h = p().g5775e46,
                b = a.default.theme.spacesPx.space20;
            class _ extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderQuoteTweetTimelinePivot = () => {
                            const { permalink: e } = this.props;
                            return n.createElement(i.Z, { link: `${e}/retweets/with_comments`, onPress: this._handleQuoteTweetPivotScribeOnClick, style: g.quoteTweetPivot, withDarkerInteractiveBackground: !1 }, n.createElement(l.ZP, { color: "primary" }, h));
                        }),
                        (this._getLayoutHandlerForElementWidth = (e) => (t) => {
                            const o = t.nativeEvent.layout.width,
                                n = o && "containerWidth" !== e ? o + b : (o ?? 0);
                            n !== this.state[e] && this.setState({ [e]: n });
                        }),
                        (this._handleBookmarkStatLayout = this._getLayoutHandlerForElementWidth("bookmarkStatWidth")),
                        (this._handleLikeStatLayout = this._getLayoutHandlerForElementWidth("likeStatWidth")),
                        (this._handleQuoteStatLayout = this._getLayoutHandlerForElementWidth("quoteStatWidth")),
                        (this._handleRetweetStatLayout = this._getLayoutHandlerForElementWidth("retweetStatWidth")),
                        (this._handleStatGroupLayout = this._getLayoutHandlerForElementWidth("containerWidth")),
                        (this._handleLikeTweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "like_stat" });
                        }),
                        (this._handleQuoteTweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "quote_tweet_stat" });
                        }),
                        (this._handleQuoteTweetPivotScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "quote_tweet_pivot" });
                        }),
                        (this._handleRetweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "retweet_stat" });
                        }),
                        (this.state = { bookmarkStatWidth: void 0, containerWidth: void 0, likeStatWidth: void 0, quoteStatWidth: void 0, retweetStatWidth: void 0 });
                }
                componentDidMount() {
                    const { analytics: e, isNonCompliantTweet: t } = this.props;
                    t && e.scribe({ element: "quote_tweet_pivot", action: "impression" });
                }
                render() {
                    const { isNonCompliantTweet: e } = this.props;
                    return e ? this._renderQuoteTweetTimelinePivot() : this._renderStats();
                }
                _renderBookmarksStat(e) {
                    const t = c.ZP.getTruncatedCount(e);
                    return n.createElement(r.Z, { onLayout: this._handleBookmarkStatLayout, style: g.stat }, n.createElement(s.Z, { count: e }, n.createElement(p().I18NFormatMessage, { $i18n: "ef5d531f" }, n.createElement(s.Z.Value, { animated: !0, count: e }, p().bb192c6b({ displayCount: t })), n.createElement(s.Z.Label, null, p().f23d99b0({ count: e })))));
                }
                _renderLikesStat(e) {
                    const { permalink: t } = this.props,
                        o = c.ZP.getTruncatedCount(e);
                    return n.createElement(
                        r.Z,
                        { onLayout: this._handleLikeStatLayout, style: g.stat },
                        n.createElement(u.Z, null, (r) => n.createElement(s.Z, { count: e, link: `${t}/likes`, onPress: r(this._handleLikeTweetScribeOnClick) }, n.createElement(p().I18NFormatMessage, { $i18n: "e4eeeeff" }, n.createElement(s.Z.Value, { animated: !0, count: e }, p().e8866a55({ displayCount: o })), n.createElement(s.Z.Label, null, p().eb3abe45({ count: e }))))),
                    );
                }
                _renderQuotesStat(e) {
                    const { permalink: t } = this.props,
                        o = c.ZP.getTruncatedCount(e);
                    return n.createElement(
                        r.Z,
                        { onLayout: this._handleQuoteStatLayout, style: g.stat },
                        n.createElement(u.Z, null, (r) => n.createElement(s.Z, { count: e, link: `${t}/retweets/with_comments`, onPress: r(this._handleQuoteTweetScribeOnClick) }, n.createElement(p().I18NFormatMessage, { $i18n: "c9174f1f" }, n.createElement(s.Z.Value, { animated: !0, count: e }, p().eff958fb({ displayCount: o })), n.createElement(s.Z.Label, null, p().i5a8c515({ count: e }))))),
                    );
                }
                _renderRetweetsStat(e) {
                    const { permalink: t } = this.props,
                        o = c.ZP.getTruncatedCount(e);
                    return n.createElement(
                        r.Z,
                        { onLayout: this._handleRetweetStatLayout, style: g.stat },
                        n.createElement(u.Z, null, (r) => n.createElement(s.Z, { count: e, link: `${t}/retweets`, onPress: r(this._handleRetweetScribeOnClick) }, n.createElement(p().I18NFormatMessage, { $i18n: "d794bc6d" }, n.createElement(s.Z.Value, { animated: !0, count: e }, p().dd77f9fb({ displayCount: o })), n.createElement(s.Z.Label, null, p().a755b81b({ count: e }))))),
                    );
                }
                _renderStats() {
                    const { bookmarkCount: e, likeCount: t, quoteTweetCount: o, retweetCount: a, style: i } = this.props,
                        { bookmarkStatWidth: l = 0, containerWidth: c = 0, likeStatWidth: s = 0, quoteStatWidth: d = 0, retweetStatWidth: p = 0 } = this.state;
                    let u = 0;
                    const m = [!0, !1, !1, !1];
                    [p, d, s, l].forEach((e, t) => {
                        u + e > c ? ((u = e), (m[t] = !0)) : (u += e);
                    });
                    const h = c;
                    return e || t || o || a ? n.createElement(r.Z, { onLayout: this._handleStatGroupLayout, role: "group", style: [g.container, h ? i : g.hidden] }, m[0] ? n.createElement(r.Z, { role: "separator", style: g.separator }) : null, a ? this._renderRetweetsStat(a) : null, m[1] ? n.createElement(r.Z, { role: "separator", style: g.separator }) : null, o ? this._renderQuotesStat(o) : null, m[2] ? n.createElement(r.Z, { role: "separator", style: g.separator }) : null, t ? this._renderLikesStat(t) : null, m[3] ? n.createElement(r.Z, { role: "separator", style: g.separator }) : null, e ? this._renderBookmarksStat(e) : null) : null;
                }
            }
            const g = a.default.create((e) => ({ container: { flexDirection: "row", flexWrap: "wrap" }, stat: { marginEnd: e.spaces.space20, paddingVertical: e.spaces.space16 }, hidden: { visibility: "hidden" }, quoteTweetPivot: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", paddingVertical: e.spaces.space16 }, separator: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", height: "1px", width: "100%" } })),
                w = (0, m.Z)(_);
        },
        131133: (e, t, o) => {
            o.d(t, { cN: () => S, eM: () => E, pZ: () => Z });
            var n = o(202784),
                r = o(325686),
                a = o(124964),
                i = o(731708),
                l = o(392237),
                c = o(332920),
                s = o.n(c),
                d = o(265196),
                p = o(421575),
                u = o(863934),
                m = o(686689),
                h = o(177371),
                b = o(946409),
                _ = o(618566),
                g = o(788993),
                w = o(827922),
                y = o(725516);
            const f = s().gf5e9ea6,
                x = s().e2f2b658,
                k = Object.freeze({ see_more: s().ffd9cfe6, discover_more: s().d172116a, more: s().h63a5c3c, more_tweets: s().be5df69e, more_suggestions: s().g11ebd34, browse: s().g4a6901a, browse_tweets: s().h6453e74 });
            function E({ featureSwitches: e, isExpanded: t, topic: o, topicContext: n }) {
                return (0, w.SJ)(n) && t && o.not_interested && (!(e.getStringValue("topics_context_controls_implicit_variation") in k) || e.isTrue("topics_context_controls_implicit_context_x_enabled"));
            }
            const Z = ({ onUndoTopicNotInterestedClick: e }) => n.createElement(r.Z, { style: v.tombstone }, n.createElement(h.Z, { actionText: f, children: x, inline: !0, onClick: e })),
                C = (0, y.Z)((e) => {
                    const { analytics: t, bannerText: o, label: l, link: c, linkText: s, onNotInterestedPress: d, topic: p, withRightControl: h } = e,
                        b = o && "" === o.text,
                        _ = s && "" === s.text,
                        g = !_,
                        w = !(b || _);
                    return n.createElement(
                        r.Z,
                        { style: v.topicActions },
                        w && n.createElement(a.Z, null),
                        g &&
                            n.createElement(
                                i.ZP,
                                {
                                    color: "primary",
                                    link: c,
                                    onClick: () => {
                                        t.scribeAction("click");
                                    },
                                    size: "subtext2",
                                    weight: "bold",
                                },
                                s ? n.createElement(m.Z, s) : l,
                            ),
                        h ? n.createElement(r.Z, { style: v.notInterestedButtonWrapper }, n.createElement(u.Z, { onPress: d, size: "small", topicId: p.id, type: "brandText", withIconOnly: !0 })) : null,
                    );
                }),
                T = (e) => {
                    const { isExpanded: t, onNotInterestedPress: o, topic: i } = e,
                        l = i.following ? v.followingTopicButtonWrapper : v.followTopicButtonWrapper,
                        c = [t && l, !t && v.followTopicButtonWrapperNotExpanded],
                        s = t ? v.largeNotInterestedButtonWrapper : v.notInterestedButtonWrapper;
                    return n.createElement(r.Z, { style: v.topicActions }, t ? null : n.createElement(a.Z, { style: v.topicMiddot }), n.createElement(r.Z, { style: c }, n.createElement(d.ZP, { isTransparent: !t, showRelationshipChangeConfirmation: !0, size: t ? "small" : "xSmall", style: v.followTopicButton, textMode: p.q.FollowTopic, topic: i })), o || (t && !i.following) ? n.createElement(r.Z, { style: s }, n.createElement(u.Z, { onPress: o, size: "small", topicId: i.id, type: t ? "primaryOutlined" : "brandText", withIconOnly: !t })) : null);
                };
            function S(e) {
                const { featureSwitches: t, iconSize: o, injectedFeedbackItem: r, isExpanded: a, socialContext: i, topic: l, withLeftPadding: c } = e,
                    { contextType: s, landingUrl: d, topicContext: p } = i,
                    u = d ? (0, b.s9)(d) : void 0,
                    h = p && (0, w.Y8)(p),
                    y = p && (0, w.SJ)(p),
                    f = t.isTrue("media_edge_to_edge_content_enabled"),
                    x = f ? g.Z.TextOnly : g.Z.Topic,
                    E = r?.markNotInterestedTopic?.onClick,
                    Z = p ? (0, _.P)(p) : void 0,
                    S = p?.bannerText ? n.createElement(m.Z, p.bannerText) : i.text;
                if (h && t.getStringValue("topics_context_controls_followed_variation") in k) {
                    const e = k[t.getStringValue("topics_context_controls_followed_variation")];
                    return { iconSize: o, contextType: x, rightControl: n.createElement(C, { bannerText: i.topicContext && i.topicContext.bannerText, label: e, link: u, linkText: i.topicContext && i.topicContext.linkText, topic: l }), withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || f), topicData: Z, text: S };
                }
                if (y) {
                    if (t.getStringValue("topics_context_controls_implicit_variation") in k) {
                        const e = k[t.getStringValue("topics_context_controls_implicit_variation")];
                        return { iconSize: o, contextType: x, rightControl: n.createElement(C, { bannerText: i.topicContext && i.topicContext.bannerText, label: e, link: u, linkText: i.topicContext?.linkText, onNotInterestedPress: E, topic: l, withRightControl: t.isTrue("topics_context_controls_implicit_context_x_enabled") }), topicData: Z, text: S, withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || f) };
                    }
                    {
                        const e = n.createElement(T, { isExpanded: a, onNotInterestedPress: E, topic: l });
                        return a ? { bottomControl: e, contextType: s, iconSize: "xLarge", iconStyle: v.iconStyle, textColor: "text", textSize: "headline1", text: i.text, topicData: void 0, withBottomBorder: !0, withLeftPadding: c } : { contextType: s, iconSize: o, iconStyle: v.iconStyle, rightControl: e, topicData: Z, text: i.text, withBottomBorder: !0, withLeftPadding: c };
                    }
                }
                return { contextType: s, iconSize: o, text: i.text, withLeftPadding: c };
            }
            const v = l.default.create((e) => ({ tombstone: { paddingBottom: e.componentDimensions.gutterVertical }, iconStyle: { paddingBottom: `calc(${e.spaces.space2} + ${e.spaces.space1})`, marginBottom: e.spaces.space4 }, topicActions: { flexDirection: "row", flexGrow: 1, alignItems: "center", minHeight: e.spaces.space32 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, followTopicButton: { marginTop: e.spaces.space1 }, followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 }, followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingEnd: e.spaces.space4, width: "50%" }, followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: "100%" }, notInterestedButtonWrapper: { alignItems: "flex-end", flexGrow: 1 }, largeNotInterestedButtonWrapper: { marginVertical: e.spaces.space4, paddingStart: e.spaces.space4, width: "50%" } }));
        },
        764372: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                r = o(325686),
                a = o(254554),
                i = o(392237),
                l = o(265196),
                c = o(421575),
                s = o(686689);
            const d = i.default.create((e) => ({ topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: `-${e.spaces.space8}` } })),
                p = ({ defaultRef: e, topic: t, topicFollowPrompt: o }) => {
                    const { entities: i, text: p } = o?.description || {};
                    return n.createElement(r.Z, { style: d.topicFollowPrompt }, n.createElement(a.Z, { containerRef: e, primaryAction: n.createElement(l.ZP, { showRelationshipChangeConfirmation: !0, textMode: c.q.FollowTopic, topic: t }), text: n.createElement(s.Z, { entities: i, text: p }) }));
                };
        },
        914564: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(731708),
                a = o(392237),
                i = o(332920),
                l = o.n(i),
                c = o(808525);
            const s = l().aaad27c8;
            function d({ color: e = "magenta500", name: t }) {
                return n.createElement(r.ZP, { color: e }, n.createElement(c.default, { "aria-label": s, style: [p.icon, { backgroundColor: a.default.theme.colors[e] }] }), t);
            }
            const p = a.default.create(({ borderRadii: e, colors: t, fontSizes: o, primaryColorName: n, spaces: r }) => ({ icon: { borderRadius: e.infinite, color: t.whiteOnColor, fontSize: o.subtext3, marginEnd: r.space4, padding: r.space2 } }));
        },
        494569: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({ loader: () => o.e("loader.Grok").then(o.bind(o, 223526)) });
        },
        994057: (e, t, o) => {
            o.d(t, { C: () => s });
            var n = o(202784),
                r = o(392237),
                a = o(731708),
                i = o(332920);
            const l = o.n(i)().aaad27c8,
                c = r.default.create(({ borderRadii: e, colors: t, fontSizes: o, lineHeights: n, paletteName: r, spaces: a }) => ({ label: { backgroundColor: "light" === r ? t.gray800 : t.gray200, border: `${a.space1} solid ${t.cellBackground}`, borderRadius: e.small, color: "light" === r ? t.whiteOnColor : t.text, fontSize: o.subtext3, lineHeight: n.subtext3, margin: "auto", maxWidth: "100%", paddingHorizontal: a.space2, paddingVertical: a.space1, wordBreak: "break-all" } }));
            function s() {
                return n.createElement(a.ZP, { style: c.label }, l);
            }
        },
        756632: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(325686),
                a = o(530525),
                i = o(155727),
                l = o(235902),
                c = o(823161),
                s = o(392237),
                d = o(37341);
            const p = a.Z.createLayoutCache(),
                u = s.default.create((e) => ({ avatar: { display: "block" }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: "100%" } })),
                m = (e) => {
                    const { avatarRef: t, id: o, link: a, onClick: s, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, uri: _, userAvatarLabel: g, userId: w, withHoverCard: y = !0, withLink: f = !0, withUserPresence: x = !1 } = e;
                    return n.createElement(
                        r.Z,
                        { style: u.avatarWrapper },
                        n.createElement(i.Z.Consumer, null, ({ avatarSize: e }) => (x ? n.createElement(d.Z, { avatarRef: t, id: o, imageLayoutCache: p, onClick: s, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, size: e, style: u.avatar, uri: _, userAvatarLabel: g, userId: w, withHoverCard: y, withLink: f }) : n.createElement(l.ZP.Provider, { value: { userAvatarLabel: () => g } }, n.createElement(c.default, { avatarRef: t, id: o, imageLayoutCache: p, link: a, onClick: s, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, size: e, style: u.avatar, uri: _, userId: w, withHoverCard: y, withLink: f })))),
                    );
                };
        },
        375260: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                r = o(202784),
                a = o(495580),
                i = o(725405);
            const l = ({ scribeElement: e, ...t }) => {
                const o = (0, i.Z)();
                return r.createElement(
                    a.Z,
                    (0, n.Z)({}, t, {
                        onAction: () => {
                            o.scribe({ component: "conversation_control_prompt", element: "see_conversation", action: "click" });
                        },
                        onOpen: () => {
                            o.scribe({ element: e, action: "click" });
                        },
                        onSecondaryAction: () => {
                            o.scribe({ component: "conversation_control_prompt", element: "ok", action: "click" });
                        },
                    }),
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f.7abe797a.js.map
