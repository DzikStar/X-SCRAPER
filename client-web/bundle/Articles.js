(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles", "icons/IconFilter-js"],
    {
        879604: (e) => {
            e.exports = { queryId: "F24lPM94Kv10u0lh3rgM6Q", operationName: "ArticleTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        103508: (e) => {
            e.exports = { queryId: "NWyC1xhVsxzBBI_-l_atIA", operationName: "ArticleTweetsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        4691: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => m });
            var i = n(506063),
                r = n(414742),
                o = n(703710),
                a = n(879604),
                l = n.n(a),
                s = n(103508),
                c = n.n(s),
                d = n(934309);
            const u = (0, r.kj)((e) => {
                    const t = e?.article_by_rest_id?.tweets_timeline?.timeline;
                    return !t;
                }, "GQL Top Articles: Failed query for article Tweets timeline"),
                p = (0, r.kj)((e) => {
                    const t = e?.article_timeline?.timeline;
                    return !t;
                }, "GQL Top Articles: Failed query for article timeline"),
                m = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchArticleTweetsTimeline(n) {
                        const r = n.articleListSeedType === i.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(c(), { ...n, ...(0, o.d)(t), articleListSeedType: r }, u).then((e) => e?.article_by_rest_id?.tweets_timeline?.timeline || d.cY);
                    },
                    fetchArticleTimeline(n) {
                        const r = n.articleListSeedType === i.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(l(), { ...n, ...(0, o.d)(t), articleListSeedType: r }, p).then((e) => e?.article_timeline?.timeline || d.cY);
                    },
                });
        },
        415725: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(325686),
                o = n(392237),
                a = n(822228);
            const l = "activeRoute",
                s = o.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...o.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => i.createElement(a.Z, t, (t) => i.createElement(r.Z, { style: t && s.activeRoot, testID: l }, "function" == typeof e ? e(t) : e, t ? i.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        625661: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => p });
            var i = n(202784),
                r = n(614983),
                o = n.n(r),
                a = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            o()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: o, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: _, style: g, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: C, withBackground: k, withWideContainer: v } = this.props,
                        { isModal: E } = this.context,
                        x = o ? d : i.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        S = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, E, !!_);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: x, middleControl: p, position: u(m, E, r), rightControl: h, style: g, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: C, withBackground: S, withWideContainer: v }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? i.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        222718: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => b });
            var i = n(202784),
                r = n(325686),
                o = n(537392),
                a = n(10656),
                l = n(655352),
                s = n(555079),
                c = n(500002),
                d = n(625661),
                u = n(449067),
                p = n(655543),
                m = n(715601),
                h = n(392237);
            const _ = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? i.createElement(r.Z, { style: _.fill }, i.createElement(m.Z, { style: _.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return i.createElement(o.ZP, null, ({ containerWidth: e }) => (a.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: o, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...m } = this.props;
                    return i.createElement(i.Fragment, null, (0, l.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : i.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return i.createElement(i.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: o, backLocation: a, documentTitle: l, headerless: c, history: p, leftControl: m, middleControl: h, onBackClick: g, rightControl: b, screenType: y, searchBoxOptions: f, secondaryBar: w, showBackButtonOnRoot: C, showSubtitleOnRoot: k, showSubtitleOnWideDetail: v, showTitleOnRoot: E, subtitle: x, title: S, titleIconCell: Z, titleIconCellSize: T, withDetailOpen: F, withSearchBox: I, withTweetButton: B, withWideContainer: P } = this.props,
                        L = "root" === y,
                        R = "secondaryRoot" === y,
                        D = "primaryDetail" === y,
                        A = (D && v) || (L && k),
                        W = (L && !C) || (D && e),
                        z = (L && !E) || (D && e && !E),
                        O = L ? s.ey : D ? s.vX : void 0,
                        N = i.createElement(r.Z, { style: _.appBarContainer }, i.createElement(d.ZP, { backLocation: a, fixed: !1, hideBackButton: W, history: p, leftControl: m, middleControl: h, onBackClick: g, rightControl: b, secondaryBar: w, style: o, subtitle: A ? x : void 0, title: z ? void 0 : S, titleDomId: O, titleIconCell: Z, titleIconCellSize: T, withWideContainer: P })),
                        M = L || (R && F) ? null : i.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: l, headerless: c, middleControl: h, onBackClick: g, rightControl: b, searchBoxOptions: f, subtitle: x, title: S, withSearchBox: I, withTweetButton: B });
                    return i.createElement(i.Fragment, null, M, N);
                }
            }
            (g.contextType = p.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const b = (0, c.ZP)(g);
        },
        496364: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(202784),
                r = n(107267),
                o = n(791632),
                a = n(222718);
            const l = (e) => {
                const t = (0, r.useHistory)();
                return (0, o.HD)(t) ? e.children || null : i.createElement(a.Z, e);
            };
        },
        332878: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            function i(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const r = (e, t, n) => {
                    const i = e(t),
                        r = e(n);
                    return !i && r ? -1 : i && !r ? 1 : 0;
                },
                o = (e, t, n) => a(e(n), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                l = (e, t) => {
                    if (e.length) return e.reduce((e, n) => (t(n, e) > 0 ? n : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const n = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(n),
                        s = (e) => (e ? Math.abs(n.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: n }) => !i(n) && t.isRendered(n) && e.isRendered(n)),
                        d =
                            c.length > 0
                                ? l(c, (e, n) => {
                                      const i = t.getForItem(e.id),
                                          l = t.getForItem(n.id);
                                      return r(a, i, l) || o(s, i, l);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: n, distanceToViewportTop: i, id: r } = t;
                        if ("number" == typeof i) {
                            const t = e.getForViewport().getTop() + i;
                            return e.getForItem(r).getTop() - t;
                        }
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getBottom() + n;
                            return e.getForItem(r).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            n = e.getForViewport().getBottom();
                        return Math.max(0, n - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !i(e))
                            .map(({ id: e, rectangle: n }) => ({ id: e, distanceToViewportTop: n.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const n = s({ prevPos: e, nextPos: t });
                        if (n) {
                            const i = e.getForItem(n).getTop() - e.getForViewport().getTop();
                            return t.getForItem(n).getTop() - t.getForViewport().getTop() - i;
                        }
                        return 0;
                    },
                };
        },
        507651: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(807896),
                r = n(202784),
                o = n(107267),
                a = n(403556),
                l = n(791632);
            const s = (e) => {
                    const t = (0, o.useHistory)(),
                        { isCompact: n, ...s } = e;
                    return r.createElement(a.Z, (0, i.Z)({}, s, { isCompact: n || (0, l.HD)(t) }));
                },
                c = r.memo(s);
        },
        890882: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(202784),
                r = n(443781);
            const o = (e) => {
                const { featureSwitches: t, userClaims: n } = i.useContext(r.rC),
                    o = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    a = n.isAnyPremiumSubscriber(),
                    { text: l } = e;
                return a && o ? i.createElement(i.Fragment, null, l) : l;
            };
        },
        546608: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => D });
            var i = n(202784),
                r = n(325686),
                o = n(638009),
                a = n(352924),
                l = n(470397),
                s = n(731708),
                c = n(966886),
                d = n(154003),
                u = n(682474),
                p = n(392237),
                m = n(530525),
                h = n(439592),
                _ = n(126962),
                g = n(952428),
                b = n(530732),
                y = n(111677),
                f = n.n(y),
                w = n(490359),
                C = n(769471),
                k = n(415725),
                v = n(725405),
                E = n(500002),
                x = n(71620),
                S = n(668214),
                Z = n(502909),
                T = n(600823);
            const F = (0, Z.ZP)({ namespace: "articles" }),
                I = T.Z.register(F),
                B = (e, t) => I.select(e, t.id.toString()),
                P = (0, S.Z)()
                    .propsFromState(() => ({ article: B }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("ARTICLE_SUMMARY") })),
                L = f().afb7e8f8,
                R = p.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                D = (0, E.ZP)(
                    P(({ article: e, createLocalApiErrorHandler: t, id: n, location: y, socialContext: f, withInternalLink: E }) => {
                        const x = (0, v.Z)(),
                            S = i.useContext(o.ZP),
                            { article_url: Z, description: T, domain: F, image_url: I, publish_date: B, title: P } = e || {},
                            D = { domain: a.b(), timestamp: a.b(), title: a.b(), description: a.b(), adFree: a.b(), socialContext: a.b() },
                            A = [D.domain, D.timestamp, D.title, D.description, D.socialContext],
                            W = i.useMemo(() => {
                                const e = (0, w.Z)(x.contextualScribeData.items || []) || {};
                                return { url: Z, items: [(0, C.Z)({}, e, { article_details: { publisher_name: F, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [x.contextualScribeData.items, Z, F]),
                            z = i.useCallback(() => {
                                x.scribe({ action: "impression", data: W });
                            }, [x, W]);
                        if (
                            (i.useEffect(() => {
                                z();
                            }, [z]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: O, landingUrl: N, text: M } = f || {},
                            $ = I ? { url: I, height: 750, width: 1250 } : void 0,
                            H = { pathname: Z, external: !0 },
                            q = (e) => {
                                x.scribe({ element: E ? "read_article" : "article_header", action: "open_link", data: W });
                            },
                            K = () => {
                                x.scribe({ element: "conversation_view", action: "click", data: W });
                            },
                            V = N ? S.getLinkFromUrtUrl(N) : void 0,
                            j = V ? S.withAnchorless(V) : void 0,
                            U = j
                                ? {
                                      ...j,
                                      pathname: `${j.pathname}?time_window=${(() => {
                                          const e = y?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            G = i.createElement(i.Fragment, null, i.createElement(r.Z, { style: R.horizontalContainer }, i.createElement(r.Z, { style: R.textContainer }, i.createElement(l.Z, { style: R.middotGroup }, F && i.createElement(s.ZP, { color: "gray700", id: D.domain, size: "subtext2", weight: "bold" }, F), B && i.createElement(s.ZP, { color: "gray700", id: D.timestamp, size: "subtext2" }, i.createElement(c.Z, { timestamp: B }))), i.createElement(s.ZP, { color: "text", id: D.title, link: U, numberOfLines: 3, size: "headline2", style: R.text, weight: "bold", withInteractiveStyling: !1 }, P), T ? i.createElement(s.ZP, { id: D.description, numberOfLines: 2 }, T) : null, E ? i.createElement(r.Z, { style: R.buttonContainer }, i.createElement(d.ZP, { link: H, onClick: q, size: "xSmall", type: "primaryOutlined" }, L)) : null), $ ? i.createElement(r.Z, { style: R.imageContainer }, i.createElement(u.Z, { ratio: p.default.theme.aspectRatios.square }, i.createElement(m.Z, { "aria-label": "", aspectMode: h.Z.SQUARE, image: $ }))) : null), i.createElement(_.Z, { contextType: "Facepile", iconSize: "large", id: D.socialContext, text: M, textSize: "subtext2", userAvatarUrls: O, withLeftPadding: !1, withTextCentered: !0 }));
                        return E ? i.createElement(k.Z, { exact: !1, path: U?.pathname || "" }, (e) => i.createElement(g.Z, { "aria-labelledby": A.join(" "), "aria-selected": e, link: U, onClick: K, role: "article", style: R.container }, G)) : i.createElement(b.Z, { link: H, onClick: q, style: [R.container, R.bottomBorder] }, G);
                    }),
                );
        },
        90086: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { ArticleListScreen: () => oe, TabLabels: () => ie, default: () => ae, hasListSeedPath: () => re });
            var i = n(202784),
                r = n(811176),
                o = n(247056),
                a = n(425376),
                l = n(111677),
                s = n.n(l),
                c = n(517747),
                d = n(813681),
                u = n(730086),
                p = n(496364),
                m = n(507651),
                h = n(890882),
                _ = n(443781),
                g = n(38293),
                b = n(292484),
                y = n(962741),
                f = n(175856),
                w = n(4691),
                C = n(750085),
                k = n(218951);
            var v = n(731708),
                E = n(457311),
                x = n(392237),
                S = n(332878),
                Z = n(810641),
                T = n(668214);
            const F = (e, t) => t.module.selectEntries(e),
                I = (0, T.Z)().propsFromState(() => ({ entries: F }));
            const B = (0, n(335632).G)({}),
                P = s().b7fa0cfe,
                L = s().e950f6e0,
                R = i.createElement(s().I18NFormatMessage, { $i18n: "d9cb9d0b" }, i.createElement(v.ZP, { color: "link", link: "/i/connect_people" }, s().e7dcfb81)),
                D = () => i.createElement(E.Z, { header: L, message: R, style: W.emptyState }),
                A = (e) => {
                    const { entries: t, module: n, onEntriesChanged: r } = e;
                    return (
                        i.useEffect(() => {
                            r(t);
                        }, [r, t]),
                        i.createElement(Z.Z, { anchoring: S.Z, entryConfiguration: B, module: n, renderEmptyState: D, title: P })
                    );
                },
                W = x.default.create((e) => ({ emptyState: { height: `calc(100vh - ${e.componentDimensions.appBarHeight})`, justifyContent: "center", marginVertical: 0 } })),
                z = I(i.memo(A));
            var O = n(2430),
                N = n(506063);
            const M = (e, t) => (0, f.t5)(e, f.q4),
                $ = (e, t) => {
                    const {
                        location: n,
                        match: { params: i },
                    } = t;
                    let r = "";
                    return i && i.tabId && "string" == typeof i.tabId ? (r = i.tabId) : n && n.query && n.query.tabId && (r = (0, O.BX)(n.query.tabId) || ""), r === N.v.FRIENDS_OF_FRIENDS ? N.v.FRIENDS_OF_FRIENDS : N.v.FOLLOWS;
                },
                H = (e, t) => {
                    const { location: n } = t,
                        i = n?.query?.time_window;
                    return Number(i) || 24;
                },
                q = (0, T.Z)()
                    .propsFromState(() => ({ seedType: $, showFriendsOfFriendsNUX: M, timeWindowQuery: H }))
                    .propsFromActions(() => ({ addFlag: f.pj }))
                    .withAnalytics({ page: "top_articles", section: "top_articles" }),
                K = s().b7fa0cfe,
                V = s().e15e5637,
                j = s().af293dc2,
                U = s().h5ab8b0e,
                G = s().e15e5637,
                Q = s().a0f01bca,
                X = s().he30b16c,
                Y = s().b0589550,
                J = s().b60e4f78,
                ee = s().f5b3dc1e,
                te = (e) => 60 * e * 60 * 1e3,
                ne = [N.v.FOLLOWS, N.v.FRIENDS_OF_FRIENDS],
                ie = Object.freeze({ [N.v.FOLLOWS]: j, [N.v.FRIENDS_OF_FRIENDS]: U }),
                re = (e) => {
                    const t = `(${N.v.FOLLOWS}|${N.v.FRIENDS_OF_FRIENDS})`,
                        n = new RegExp(t, "g");
                    return !!e.match(n);
                },
                oe = ({ addFlag: e, analytics: t, history: n, location: l, match: s, seedType: v, showFriendsOfFriendsNUX: E, timeWindowQuery: x }) => {
                    const { featureSwitches: S } = i.useContext(_.rC),
                        Z = (0, b.Cz)(),
                        T = S.isTrue("longform_top_articles_time_window_enabled"),
                        F = S.isTrue("longform_top_articles_friends_of_friends_enabled"),
                        [I, B] = i.useState(E),
                        P = (e) => `?time_window=${e || 24}`,
                        L = i.useCallback(() => (v === N.v.FRIENDS_OF_FRIENDS ? "fof" : "following"), [v]),
                        R = F ? `_${L()}` : "",
                        D = i.useCallback(() => {
                            t.scribe({ action: "impression", section: `top_articles${R}`, data: { context: `time_window_${te(x)}` } });
                        }, [t, R, x]);
                    i.useEffect(() => {
                        D();
                    }, [D]);
                    const A = i.useCallback(
                            (e) => {
                                const t = s.params.articleId,
                                    i = (0, u.Z)(e, (e) => e.type === y.ZP.Article && !!e.content && e.content.articleId),
                                    r = re(l.pathname);
                                Z && !t && i ? n.replace(`/i/articles/${v}/${i}${P(x)}`) : Z || r || n.replace(`/i/articles/${v}${P(x)}`);
                            },
                            [s.params.articleId, l.pathname, n, Z, v, x],
                        ),
                        W = (e) => () => {
                            n.replace(`/i/articles/${v}${P(e)}`);
                        },
                        O = [
                            { text: G({ count: 1 }), onClick: W(1) },
                            { text: G({ count: 2 }), onClick: W(2) },
                            { text: G({ count: 4 }), onClick: W(4) },
                            { text: G({ count: 8 }), onClick: W(8) },
                            { text: G({ count: 24 }), onClick: W(24) },
                        ],
                        M = i.createElement(o.Z, { Icon: c.default, label: Q, renderActionMenu: (e) => i.createElement(r.Z, { items: O, onCloseRequested: e, shouldCloseOnClick: !0 }) }),
                        $ = (e) => e === v,
                        H = (e) => `/i/articles/${e}${P(x)}`,
                        q = () => {
                            e(f.q4), B(!1);
                        },
                        j = () => {
                            const e = H(N.v.FRIENDS_OF_FRIENDS);
                            n.replace(e), q();
                        },
                        U = (e) => i.createElement(a.Z, { actionPrimary: { text: J, onClick: j }, actionSecondary: { text: ee, onClick: q }, headline: Y, icon: d.default, iconColor: "primary", onDismiss: q, shouldDisplay: I, text: X, withMask: !0 }, ie[e]),
                        oe = ne.map((e) => ({
                            key: e,
                            label: e === N.v.FRIENDS_OF_FRIENDS && I && !$(e) ? U(e) : ie[e],
                            isActive: () => $(e),
                            to: { pathname: H(e) },
                            onClick: () => {
                                t.scribe({ action: "click", element: "tab", section: `top_articles${R}` });
                            },
                        })),
                        ae = ((e) => {
                            const t = ne.indexOf(e);
                            return t > -1 ? t : 0;
                        })(v),
                        le = i.useMemo(() => ((e, t = 864e5) => (0, k.Z)({ timelineId: `articlesTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(w.ZP).fetchArticleTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ count: n, cursor: "string" == typeof i ? i : void 0, articleListSeedType: e, timeWindowMillis: t }) }, context: "FETCH_TOP_ARTICLES_TIMELINE", perfKey: "articlesTimeline", formatResponse: C.Z }))(v, te(x || 24)), [v, x]);
                    return i.createElement(i.Fragment, null, i.createElement(g.Z, { title: K }), i.createElement(p.Z, { rightControl: T ? M : void 0, screenType: "root", showSubtitleOnRoot: !0, subtitle: V({ count: x || 24 }), title: i.createElement(h.Z, { text: K }) }, F ? i.createElement(m.Z, { links: oe, visibleItemIndex: ae }) : null, i.createElement(z, { module: le, onEntriesChanged: A })));
                },
                ae = q(oe);
        },
        463818: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => T, query: () => x });
            var i,
                r,
                o,
                a,
                l,
                s,
                c = {
                    fragment: {
                        argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "articleEntityId" },
                                    { kind: "Literal", name: "s", value: "4c07" },
                                ]),
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "ArticleEntity",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: i,
                        kind: "Operation",
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            (l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [o, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [a, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    s,
                                                ],
                                                type: "ArticleEntity",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zrSRXJmE1vj37AUmkh2oGg", metadata: {}, name: "ArticleRedirectScreenQuery", operationKind: "query", text: null },
                };
            c.hash = "599f9dbb54d711563bc5d95de3db7b40";
            const d = c;
            var u = n(202784),
                p = (n(585488), n(712696)),
                m = n.n(p),
                h = n(457311),
                _ = n(111677),
                g = n.n(_),
                b = n(883229),
                y = n(952793),
                f = n(615027);
            const w = { context: "ArticleRedirect" },
                C = g().h965157c,
                k = g().cd388852,
                v = u.createElement(h.Z, { header: C, message: k }),
                E = { type: "CustomRetry", content: () => v },
                x = d,
                S = ({ articleEntityId: e }) => {
                    const t = m()(x, { articleEntityId: e }),
                        n = t?.article_result_by_rest_id?.result?.metadata,
                        i = n?.author_results?.result?.core?.screen_name,
                        r = n?.tweet_results?.rest_id,
                        o = i && r ? `/${i}/article/${r}` : null;
                    return o ? u.createElement(f.Z, { to: o }) : v;
                },
                Z = (e) => {
                    const t = e.match.params.articleEntityId ?? "",
                        n = (0, y.hC)("responsive_web_twitter_article_redirect_enabled");
                    return t && n ? u.createElement(b.N, { errorConfig: w, fallback: E }, u.createElement(S, { articleEntityId: t })) : v;
                },
                T = u.memo(Z);
        },
        537028: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => B });
            var i = n(202784),
                r = n(325686),
                o = n(107267),
                a = n(731708),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(791632),
                u = n(496364),
                p = n(332878),
                m = n(715601),
                h = n(546608),
                _ = n(810641),
                g = n(725516),
                b = n(4691),
                y = n(750085),
                f = n(218951);
            const w = (e, t) => (0, f.Z)({ timelineId: `articleTweetsTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchArticleTweetsTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ articleId: e, articleListSeedType: t, count: n, cursor: "string" == typeof i ? i : void 0 }) }, context: "FETCH_ARTICLE_TWEETS_TIMELINE", perfKey: "articleTweetsTimeline", formatResponse: y.Z });
            var C = n(506063),
                k = n(769471),
                v = n(801184),
                E = n(335632),
                x = n(962741),
                S = n(263863);
            const Z = (0, k.Z)({}, (0, E.G)({}), { [x.ZP.Tweet]: { handlers: { [S.Z.TweetWithoutCard]: (0, v.Cw)({ createAdditionalProps: () => ({ withCardLinks: !0 }) }) } } }),
                T = c().d35d74e4,
                F = c().f88e624e,
                I = l.default.create((e) => ({ contentWrapper: { height: `calc(100vh - ${e.componentDimensions.appBarHeight} - 1px)` }, viewport: { flex: 1, height: "100%", width: "100%" }, withOverflow: { overflow: "auto" } })),
                B = (0, g.Z)(
                    (e) => {
                        const t = Number(e.match.params.articleId),
                            n = (0, o.useHistory)(),
                            l = i.useMemo(() => [I.viewport, !(0, d.HD)(n) && I.withOverflow], [n]);
                        return i.createElement(
                            u.Z,
                            { backLocation: "/i/articles", screenType: "primaryDetail", title: T, withBottomBorder: !0 },
                            i.createElement(
                                r.Z,
                                { style: I.contentWrapper },
                                i.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite" }, i.createElement(a.ZP, { visuallyHidden: !0 }, F), i.createElement(h.Z, { id: t, withInternalLink: !1 })),
                                i.createElement(
                                    m.Z,
                                    { style: l },
                                    i.createElement(_.Z, {
                                        anchoring: p.Z,
                                        entryConfiguration: Z,
                                        module: w(
                                            t,
                                            (() => {
                                                const {
                                                    match: { params: t },
                                                } = e;
                                                return t?.tabId && t.tabId === C.v.FRIENDS_OF_FRIENDS ? C.v.FRIENDS_OF_FRIENDS : C.v.FOLLOWS;
                                            })(),
                                        ),
                                        title: T,
                                    }),
                                ),
                            ),
                        );
                    },
                    { page: "top_articles", section: "conversation" },
                );
        },
        425376: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            var i = n(202784),
                r = n(325686),
                o = n(494394),
                a = n(530525),
                l = n(731708),
                s = n(439592),
                c = n(154003),
                d = n(769281),
                u = n(30899),
                p = n(138099),
                m = n(392237);
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                _ = ({ actionPrimary: e, actionSecondary: t, children: n, headline: _, icon: g, iconColor: b, image: y, onDismiss: f, shouldDisplay: w, text: C, withMask: k = !0 }) => {
                    const [v, E] = i.useState(!1),
                        x = (e) => i.createElement(u.Z, { onDismiss: P, renderContent: () => Z(P), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: o.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: k }, e),
                        S = () => i.createElement(p.Z, { onMaskClick: () => P(), type: "center", withMask: !0 }, Z(P)),
                        Z = (n) => i.createElement(r.Z, { style: [h.root, y && h.rootWithImage] }, T(), i.createElement(r.Z, { style: h.container }, F(), I(), B({ action: e, dismiss: n, type: t && "primaryFilled" }), B({ action: t, dismiss: n }))),
                        T = () => {
                            let e = g && i.createElement(g, { style: b ? [h.icon, { color: m.default.theme.colors[b] }] : h.icon });
                            return y && !d.Z.isEnabled && (e = i.createElement(a.Z, { "aria-label": "", aspectMode: s.Z.exact(2), image: y })), e && i.createElement(r.Z, { style: h.graphic }, e);
                        },
                        F = () => i.createElement(l.ZP, { size: "title3", weight: "heavy" }, _),
                        I = () => i.createElement(l.ZP, { color: "gray700", style: h.description }, C),
                        B = ({ action: e, dismiss: t, type: n }) => e && i.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: h.actionButton, type: n }, e.text),
                        P = () => {
                            f && f(), E(!0);
                        };
                    return w && !v ? (n ? x(n) : S()) : n || null;
                };
        },
        941978: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => i });
            class i {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new i();
        },
        491915: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => g });
            n(571372);
            var i = n(202784),
                r = n(325686),
                o = n(392237),
                a = n(111677),
                l = n.n(a),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const m = l().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, o] = i.useState(t),
                    [a, l] = i.useState(0);
                return (
                    i.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    i.createElement(
                        r.Z,
                        { style: _.container },
                        i.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? i.createElement(s.default, null) : i.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        i.createElement(d.ZP, { style: _.frames }, `${a}/${e.totalFrames}`),
                        i.createElement(
                            r.Z,
                            { style: _.slider },
                            i.createElement(p.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: a,
                            }),
                        ),
                    )
                );
            }
            const _ = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: o, onAnimationStart: a, onError: l, withControls: s } = e,
                    c = i.useRef(void 0),
                    d = i.useRef({ animationLoaded: !1 }),
                    u = i.useRef(null),
                    [p, m] = i.useState(!1);
                return (
                    i.useEffect(() => {
                        function i(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const o = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = r.loadAnimation(o);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof l && l(t), i(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (s.play(), a && a());
                                        }),
                                        s.addEventListener("complete", () => {
                                            i(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, o, a, l, s]),
                    i.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    i.createElement(r.Z, null, i.createElement(r.Z, { style: [e.animationContainerStyle, f.centerAnimation] }, i.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && p && i.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    i.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const f = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(111677),
                o = n.n(r),
                a = n(149170),
                l = n(40644);
            const s = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = a.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: m, withDarkBackground: h = !1 }) {
                const _ = i.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = i.useMemo(() => ({ label: t }), [t]);
                return i.createElement(l.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: o, onPress: _, preventFocusShift: d, renderMenu: u, style: p, testID: m });
            };
        },
        280278: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => _ });
            var i = n(202784),
                r = n(325686),
                o = n(827515),
                a = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const i = (0, o.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                _ = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [_, g] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (b.current)
                                if (a.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== _.pendingText) {
                                    t === _.text || ((0, o.Z)(e.count) && _.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), _.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            b.current &&
                                !1 === _.animating &&
                                (_.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : _.pendingText && u(_.pendingCount, _.pendingText, g));
                        }, [_.animating, _.oldText]),
                        i.useMemo(() => {
                            const e = p[_.transitionDirection],
                                t = _.oldText && !a.Z.reducedMotionEnabled,
                                o = !_.animating && _.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...m, ...(_.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return i.createElement(
                                r.Z,
                                { style: [h.root, n] },
                                t ? i.createElement("span", { style: s }, i.createElement(l.ZP, d, _.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, g),
                                        style: c,
                                    },
                                    i.createElement(l.ZP, d, _.text),
                                ),
                            );
                        }, [n, d, _, b, g])
                    );
                };
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => x });
            var i = n(807896),
                r = n(202784),
                o = n(194504),
                a = n(235902),
                l = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                h = n(310088),
                _ = n(175993),
                g = n(58881),
                b = n(530732);
            const y = d().d2414d31,
                f = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: i, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const r = l.default.theme.colors.text,
                                o = l.default.theme.colors.gray700;
                            return n || i ? (e || t ? r : o) : e ? r : o;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: o, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: _, retainScrollPosition: C, style: v, to: E } = this.props,
                        { location: x } = this.state,
                        S = E ? this._getMemoizedLink(E, C) : void 0,
                        Z = c ? c(E) : x?.pathname === S?.pathname,
                        T = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? k.pillHoverStyle.backgroundColor : void 0 }),
                        F = _ ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: T, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [k.pillStyle] : [k.link]), ...(u && Z ? [k.pillActiveStyle] : []), d ? (u ? k.compactPill : k.compactLink) : null, p ? k.roundedRect : null, v], withoutInteractiveStyles: _ }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: u && k.flexGrow }, r.createElement(m.ZP, { size: _ ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(Z, c, _, u) }, d && k.compactText, _ && t && k.focusedText, u && k.pillTextStyle, u && Z && k.pillActiveTextStyle, u && c && k.pillHoverTextStyle], weight: F }, e && r.createElement(e, { style: k.icon }), o, _ || u ? null : r.createElement(s.Z, { style: Z && [k.border, { backgroundColor: l.default.theme.colors[a] }] })), n ? r.createElement(h.Z, { count: n, standalone: !0, style: [k.badge, n >= 10 && k.multiDigitBadge, n >= 20 && k.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : i ? r.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (C.contextType = _.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = C,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !l,
                        _ = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...a }, c) => {
                                    const d = h ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(v, (0, i.Z)({ viewType: o }, a, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, l, s, h, c],
                        );
                    return r.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !h && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, h && E.leftAligned, d], visibleItemIndex: u }, _);
                };
        },
        40644: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => C });
            var i = n(202784),
                r = n(325686),
                o = n(461756),
                a = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                p = n(551611),
                m = n(111677),
                h = n.n(m),
                _ = n(891198),
                g = n(537392),
                b = n(280278);
            const y = h().e8d93005,
                f = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                w = ({ color: e, count: t }) => {
                    const n = (0, _.wl)(t, !0);
                    return i.createElement(g.ZP, null, ({ containerWidth: r }) => {
                        return i.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [f.count, ((o = r), o < u.default.theme.breakpoints.small && f.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? y(t) : n) : void 0);
                        var o;
                    });
                };
            class C extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: l } = this.props;
                            return i.createElement(c.ZP.Consumer, null, ({ direction: s }) => i.createElement(a.ZP, { color: e ? n : o, dir: s, style: [E.inner, e && "blue500" === n && E.blue500] }, i.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: o, isActive: a, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && a && !e?.isHovered;
                            return i.createElement(s.Z, { hoverLabel: r, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, v[m ? "haloBackground" : n], !c && E.iconBackground, "small" === o && E.iconSmallBoundingBox, m && E.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: a, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: m, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && m) return i.createElement(d.ZP, { animation: h || p.Bf, animationContainerStyle: k[t], animationStyle: S, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return i.createElement(o, { style: [k[t], !r && a && E.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? i.createElement(w, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: a, isDisabled: l, isPresentational: c, keyboardShortcut: p, link: m, preventFocusShift: h, renderMenu: _, renderWrapper: g = i.Fragment, style: b, testID: y } = this.props,
                        f = !u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return i.createElement(
                        r.Z,
                        { style: [E.root, b] },
                        i.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(a)
                                : i.createElement(s.Z, { "aria-haspopup": _ ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: m, onClick: this._handlePress, preventFocusShift: h, renderMenu: _, style: [E.triggerAreaRoot, E.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: i } = e,
                                          r = a || n || i || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        f ? i.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            C.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const k = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                E = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                S = { width: x, height: x };
        },
        551611: (e, t, n) => {
            "use strict";
            n.d(t, { Bf: () => r, ZP: () => a });
            var i = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class o extends i.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const a = new o();
        },
        517747: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        490359: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            const i = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles.97b7249a.js.map
