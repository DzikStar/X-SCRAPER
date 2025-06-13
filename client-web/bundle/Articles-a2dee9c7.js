(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-a2dee9c7"],
    {
        879604: (e) => {
            e.exports = { queryId: "Pn3pJBsVLiWbkqOncsOAQA", operationName: "ArticleTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        103508: (e) => {
            e.exports = { queryId: "xA3FxmFpDCq6j91buAnm-A", operationName: "ArticleTweetsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        4691: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => _ });
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
                _ = ({ apiClient: e, featureSwitches: t }) => ({
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: o, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: _, rightControl: m, secondaryBar: b, style: g, subtitle: h, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: k, withBackground: v, withWideContainer: E } = this.props,
                        { isModal: C } = this.context,
                        T = o ? d : i.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        F = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!v, C, !!b);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: T, middleControl: p, position: u(_, C, r), rightControl: m, style: g, subtitle: h, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: k, withBackground: F, withWideContainer: E }), b || null);
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
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var i = n(807896),
                r = n(202784),
                o = n(182056),
                a = n(879113),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const l = o.Z.isOnline();
                    return r.createElement(a.Z, (0, i.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: _.icon }), retryMessage: l ? e : u }));
                },
                _ = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        222718: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
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
                _ = n(715601),
                m = n(392237);
            const b = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? i.createElement(r.Z, { style: b.fill }, i.createElement(_.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return i.createElement(o.ZP, null, ({ containerWidth: e }) => (a.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: o, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ..._ } = this.props;
                    return i.createElement(i.Fragment, null, (0, l.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : i.createElement(u.Z.Configure, _), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return i.createElement(i.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: o, backLocation: a, documentTitle: l, headerless: c, history: p, leftControl: _, middleControl: m, onBackClick: g, rightControl: h, screenType: y, searchBoxOptions: w, secondaryBar: f, showBackButtonOnRoot: k, showSubtitleOnRoot: v, showSubtitleOnWideDetail: E, showTitleOnRoot: C, subtitle: T, title: F, titleIconCell: I, titleIconCellSize: S, withDetailOpen: Z, withSearchBox: x, withTweetButton: L, withWideContainer: O } = this.props,
                        R = "root" === y,
                        D = "secondaryRoot" === y,
                        B = "primaryDetail" === y,
                        A = (B && E) || (R && v),
                        N = (R && !k) || (B && e),
                        P = (R && !C) || (B && e && !C),
                        W = R ? s.ey : B ? s.vX : void 0,
                        M = i.createElement(r.Z, { style: b.appBarContainer }, i.createElement(d.ZP, { backLocation: a, fixed: !1, hideBackButton: N, history: p, leftControl: _, middleControl: m, onBackClick: g, rightControl: h, secondaryBar: f, style: o, subtitle: A ? T : void 0, title: P ? void 0 : F, titleDomId: W, titleIconCell: I, titleIconCellSize: S, withWideContainer: O })),
                        z = R || (D && Z) ? null : i.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: l, headerless: c, middleControl: m, onBackClick: g, rightControl: h, searchBoxOptions: w, subtitle: T, title: F, withSearchBox: x, withTweetButton: L });
                    return i.createElement(i.Fragment, null, z, M);
                }
            }
            (g.contextType = p.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const h = (0, c.ZP)(g);
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
            n.d(t, { Z: () => B });
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
                _ = n(530525),
                m = n(439592),
                b = n(126962),
                g = n(952428),
                h = n(530732),
                y = n(111677),
                w = n.n(y),
                f = n(490359),
                k = n(769471),
                v = n(415725),
                E = n(725405),
                C = n(500002),
                T = n(71620),
                F = n(668214),
                I = n(502909),
                S = n(600823);
            const Z = (0, I.ZP)({ namespace: "articles" }),
                x = S.Z.register(Z),
                L = (e, t) => x.select(e, t.id.toString()),
                O = (0, F.Z)()
                    .propsFromState(() => ({ article: L }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, T.zr)("ARTICLE_SUMMARY") })),
                R = w().afb7e8f8,
                D = p.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                B = (0, C.ZP)(
                    O(({ article: e, createLocalApiErrorHandler: t, id: n, location: y, socialContext: w, withInternalLink: C }) => {
                        const T = (0, E.Z)(),
                            F = i.useContext(o.ZP),
                            { article_url: I, description: S, domain: Z, image_url: x, publish_date: L, title: O } = e || {},
                            B = { domain: a.b(), timestamp: a.b(), title: a.b(), description: a.b(), adFree: a.b(), socialContext: a.b() },
                            A = [B.domain, B.timestamp, B.title, B.description, B.socialContext],
                            N = i.useMemo(() => {
                                const e = (0, f.Z)(T.contextualScribeData.items || []) || {};
                                return { url: I, items: [(0, k.Z)({}, e, { article_details: { publisher_name: Z, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [T.contextualScribeData.items, I, Z]),
                            P = i.useCallback(() => {
                                T.scribe({ action: "impression", data: N });
                            }, [T, N]);
                        if (
                            (i.useEffect(() => {
                                P();
                            }, [P]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: W, landingUrl: M, text: z } = w || {},
                            U = x ? { url: x, height: 750, width: 1250 } : void 0,
                            q = { pathname: I, external: !0 },
                            K = (e) => {
                                T.scribe({ element: C ? "read_article" : "article_header", action: "open_link", data: N });
                            },
                            $ = () => {
                                T.scribe({ element: "conversation_view", action: "click", data: N });
                            },
                            H = M ? F.getLinkFromUrtUrl(M) : void 0,
                            V = H ? F.withAnchorless(H) : void 0,
                            j = V
                                ? {
                                      ...V,
                                      pathname: `${V.pathname}?time_window=${(() => {
                                          const e = y?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            Q = i.createElement(i.Fragment, null, i.createElement(r.Z, { style: D.horizontalContainer }, i.createElement(r.Z, { style: D.textContainer }, i.createElement(l.Z, { style: D.middotGroup }, Z && i.createElement(s.ZP, { color: "gray700", id: B.domain, size: "subtext2", weight: "bold" }, Z), L && i.createElement(s.ZP, { color: "gray700", id: B.timestamp, size: "subtext2" }, i.createElement(c.Z, { timestamp: L }))), i.createElement(s.ZP, { color: "text", id: B.title, link: j, numberOfLines: 3, size: "headline2", style: D.text, weight: "bold", withInteractiveStyling: !1 }, O), S ? i.createElement(s.ZP, { id: B.description, numberOfLines: 2 }, S) : null, C ? i.createElement(r.Z, { style: D.buttonContainer }, i.createElement(d.ZP, { link: q, onClick: K, size: "xSmall", type: "primaryOutlined" }, R)) : null), U ? i.createElement(r.Z, { style: D.imageContainer }, i.createElement(u.Z, { ratio: p.default.theme.aspectRatios.square }, i.createElement(_.Z, { "aria-label": "", aspectMode: m.Z.SQUARE, image: U }))) : null), i.createElement(b.Z, { contextType: "Facepile", iconSize: "large", id: B.socialContext, text: z, textSize: "subtext2", userAvatarUrls: W, withLeftPadding: !1, withTextCentered: !0 }));
                        return C ? i.createElement(v.Z, { exact: !1, path: j?.pathname || "" }, (e) => i.createElement(g.Z, { "aria-labelledby": A.join(" "), "aria-selected": e, link: j, onClick: $, role: "article", style: D.container }, Q)) : i.createElement(h.Z, { link: q, onClick: K, style: [D.container, D.bottomBorder] }, Q);
                    }),
                );
        },
        376293: (e, t, n) => {
            "use strict";
            n.d(t, { $f: () => C, KV: () => h, LI: () => Z, SC: () => E, Vt: () => f, ed: () => x, op: () => T });
            var i = n(202784),
                r = n(190286),
                o = n(111677),
                a = n.n(o),
                l = n(616894),
                s = n(314948),
                c = n(516951),
                d = n(163390);
            const u = a().cfd2f35e,
                p = a().f9e45cfb,
                _ = a().fcd4d489,
                m = a().a6450e84,
                b = a().g353ad73,
                g = a().ad00a739,
                h = a().a9fd20be,
                y = a().j546fb79,
                w = a().c9623eeb,
                f = a().e133be4e,
                k = a().he43bca4,
                v = a().f5f01af6,
                E = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: m, text: t ? g({ screenName: e }) : b({ screenName: e }) }),
                T = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: i, testID: r, unblockAction: o, unblockSubtext: a, user: l }) => {
                    let s,
                        u = c.Z;
                    const p = Z(l, n);
                    switch (i) {
                        case E.PROFILE:
                        case E.LIST_DETAIL:
                        case E.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? o(p) : e(p);
                            };
                            break;
                        case E.TWEET:
                        case E.TWEET_CARET:
                        case E.RICH_FEEDBACK:
                            (s = d.uq.block),
                                (u = () => {
                                    l.blocking ? o(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: r, shortcutKey: s, Icon: F(l.blocking), text: S(l), subText: I({ user: l, blockSubtext: t, unblockSubtext: a }) };
                },
                F = (e) => (e ? s.default : l.default),
                I = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                S = (e) => (e.blocking ? w({ screenName: e.screen_name }) : _({ screenName: e.screen_name })),
                Z = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: f, text: t ? v : k }))(e.screen_name, t) : C(e.screen_name, t)),
                x = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: o, headline: a, label: l, text: s } = e;
                    return i.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: o, headline: a, onCancel: n, onConfirm: t, text: s });
                };
        },
        712816: (e, t, n) => {
            "use strict";
            n.d(t, { d: () => r });
            var i = n(111677);
            const r = { defaultToast: { text: n.n(i)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, n) => {
            "use strict";
            n.d(t, { D: () => r });
            var i = n(111677);
            const r = { defaultToast: { text: n.n(i)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, n) => {
            "use strict";
            n.d(t, { OX: () => p, Od: () => d, PN: () => _, uq: () => c, wR: () => b });
            var i = n(251067),
                r = n(522171),
                o = n(111677),
                a = n.n(o),
                l = n(912021),
                s = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, i.fH)(i.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = s.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: a().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: c.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: c.search, universal: !1 },
                    { description: a().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: c.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: c.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: c.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                _ = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, l.Z)((e) => {
                    const t = d(e),
                        n = p(),
                        i = _(),
                        r = {};
                    return (
                        [...n, ...i, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                b = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            const i = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var i = n(807469),
                r = n(502909),
                o = n(600823);
            const a = (0, r.ZP)({ namespace: "topics" }),
                l = (0, r.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(i.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                s = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, i) => (n(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: i } = t.meta,
                        r = e.entities[i];
                    return r ? ((e, t, n, i) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...i() } } } : e))(e, t, r, n) : e;
                },
                d = { follow: (0, r.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...a, ...l, ...s, ...d, customActionTypes: (0, r.X7)(d) },
                p = o.Z.register(u);
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
                _ = n(507651),
                m = n(890882),
                b = n(443781),
                g = n(38293),
                h = n(292484),
                y = n(962741),
                w = n(175856),
                f = n(4691),
                k = n(750085),
                v = n(218951);
            var E = n(731708),
                C = n(457311),
                T = n(392237),
                F = n(332878),
                I = n(810641),
                S = n(668214);
            const Z = (e, t) => t.module.selectEntries(e),
                x = (0, S.Z)().propsFromState(() => ({ entries: Z }));
            const L = (0, n(335632).G)({}),
                O = s().b7fa0cfe,
                R = s().e950f6e0,
                D = i.createElement(s().I18NFormatMessage, { $i18n: "d9cb9d0b" }, i.createElement(E.ZP, { color: "link", link: "/i/connect_people" }, s().e7dcfb81)),
                B = () => i.createElement(C.Z, { header: R, message: D, style: N.emptyState }),
                A = (e) => {
                    const { entries: t, module: n, onEntriesChanged: r } = e;
                    return (
                        i.useEffect(() => {
                            r(t);
                        }, [r, t]),
                        i.createElement(I.Z, { anchoring: F.Z, entryConfiguration: L, module: n, renderEmptyState: B, title: O })
                    );
                },
                N = T.default.create((e) => ({ emptyState: { height: `calc(100vh - ${e.componentDimensions.appBarHeight})`, justifyContent: "center", marginVertical: 0 } })),
                P = x(i.memo(A));
            var W = n(2430),
                M = n(506063);
            const z = (e, t) => (0, w.t5)(e, w.q4),
                U = (e, t) => {
                    const {
                        location: n,
                        match: { params: i },
                    } = t;
                    let r = "";
                    return i && i.tabId && "string" == typeof i.tabId ? (r = i.tabId) : n && n.query && n.query.tabId && (r = (0, W.BX)(n.query.tabId) || ""), r === M.v.FRIENDS_OF_FRIENDS ? M.v.FRIENDS_OF_FRIENDS : M.v.FOLLOWS;
                },
                q = (e, t) => {
                    const { location: n } = t,
                        i = n?.query?.time_window;
                    return Number(i) || 24;
                },
                K = (0, S.Z)()
                    .propsFromState(() => ({ seedType: U, showFriendsOfFriendsNUX: z, timeWindowQuery: q }))
                    .propsFromActions(() => ({ addFlag: w.pj }))
                    .withAnalytics({ page: "top_articles", section: "top_articles" }),
                $ = s().b7fa0cfe,
                H = s().e15e5637,
                V = s().af293dc2,
                j = s().h5ab8b0e,
                Q = s().e15e5637,
                G = s().a0f01bca,
                X = s().he30b16c,
                Y = s().b0589550,
                J = s().b60e4f78,
                ee = s().f5b3dc1e,
                te = (e) => 60 * e * 60 * 1e3,
                ne = [M.v.FOLLOWS, M.v.FRIENDS_OF_FRIENDS],
                ie = Object.freeze({ [M.v.FOLLOWS]: V, [M.v.FRIENDS_OF_FRIENDS]: j }),
                re = (e) => {
                    const t = `(${M.v.FOLLOWS}|${M.v.FRIENDS_OF_FRIENDS})`,
                        n = new RegExp(t, "g");
                    return !!e.match(n);
                },
                oe = ({ addFlag: e, analytics: t, history: n, location: l, match: s, seedType: E, showFriendsOfFriendsNUX: C, timeWindowQuery: T }) => {
                    const { featureSwitches: F } = i.useContext(b.rC),
                        I = (0, h.Cz)(),
                        S = F.isTrue("longform_top_articles_time_window_enabled"),
                        Z = F.isTrue("longform_top_articles_friends_of_friends_enabled"),
                        [x, L] = i.useState(C),
                        O = (e) => `?time_window=${e || 24}`,
                        R = i.useCallback(() => (E === M.v.FRIENDS_OF_FRIENDS ? "fof" : "following"), [E]),
                        D = Z ? `_${R()}` : "",
                        B = i.useCallback(() => {
                            t.scribe({ action: "impression", section: `top_articles${D}`, data: { context: `time_window_${te(T)}` } });
                        }, [t, D, T]);
                    i.useEffect(() => {
                        B();
                    }, [B]);
                    const A = i.useCallback(
                            (e) => {
                                const t = s.params.articleId,
                                    i = (0, u.Z)(e, (e) => e.type === y.ZP.Article && !!e.content && e.content.articleId),
                                    r = re(l.pathname);
                                I && !t && i ? n.replace(`/i/articles/${E}/${i}${O(T)}`) : I || r || n.replace(`/i/articles/${E}${O(T)}`);
                            },
                            [s.params.articleId, l.pathname, n, I, E, T],
                        ),
                        N = (e) => () => {
                            n.replace(`/i/articles/${E}${O(e)}`);
                        },
                        W = [
                            { text: Q({ count: 1 }), onClick: N(1) },
                            { text: Q({ count: 2 }), onClick: N(2) },
                            { text: Q({ count: 4 }), onClick: N(4) },
                            { text: Q({ count: 8 }), onClick: N(8) },
                            { text: Q({ count: 24 }), onClick: N(24) },
                        ],
                        z = i.createElement(o.Z, { Icon: c.default, label: G, renderActionMenu: (e) => i.createElement(r.Z, { items: W, onCloseRequested: e, shouldCloseOnClick: !0 }) }),
                        U = (e) => e === E,
                        q = (e) => `/i/articles/${e}${O(T)}`,
                        K = () => {
                            e(w.q4), L(!1);
                        },
                        V = () => {
                            const e = q(M.v.FRIENDS_OF_FRIENDS);
                            n.replace(e), K();
                        },
                        j = (e) => i.createElement(a.Z, { actionPrimary: { text: J, onClick: V }, actionSecondary: { text: ee, onClick: K }, headline: Y, icon: d.default, iconColor: "primary", onDismiss: K, shouldDisplay: x, text: X, withMask: !0 }, ie[e]),
                        oe = ne.map((e) => ({
                            key: e,
                            label: e === M.v.FRIENDS_OF_FRIENDS && x && !U(e) ? j(e) : ie[e],
                            isActive: () => U(e),
                            to: { pathname: q(e) },
                            onClick: () => {
                                t.scribe({ action: "click", element: "tab", section: `top_articles${D}` });
                            },
                        })),
                        ae = ((e) => {
                            const t = ne.indexOf(e);
                            return t > -1 ? t : 0;
                        })(E),
                        le = i.useMemo(() => ((e, t = 864e5) => (0, v.Z)({ timelineId: `articlesTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(f.ZP).fetchArticleTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ count: n, cursor: "string" == typeof i ? i : void 0, articleListSeedType: e, timeWindowMillis: t }) }, context: "FETCH_TOP_ARTICLES_TIMELINE", perfKey: "articlesTimeline", formatResponse: k.Z }))(E, te(T || 24)), [E, T]);
                    return i.createElement(i.Fragment, null, i.createElement(g.Z, { title: $ }), i.createElement(p.Z, { rightControl: S ? z : void 0, screenType: "root", showSubtitleOnRoot: !0, subtitle: H({ count: T || 24 }), title: i.createElement(m.Z, { text: $ }) }, Z ? i.createElement(_.Z, { links: oe, visibleItemIndex: ae }) : null, i.createElement(P, { module: le, onEntriesChanged: A })));
                },
                ae = K(oe);
        },
        463818: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => S, query: () => T });
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
                _ = n.n(p),
                m = n(457311),
                b = n(111677),
                g = n.n(b),
                h = n(883229),
                y = n(952793),
                w = n(615027);
            const f = { context: "ArticleRedirect" },
                k = g().h965157c,
                v = g().cd388852,
                E = u.createElement(m.Z, { header: k, message: v }),
                C = { type: "CustomRetry", content: () => E },
                T = d,
                F = ({ articleEntityId: e }) => {
                    const t = _()(T, { articleEntityId: e }),
                        n = t?.article_result_by_rest_id?.result?.metadata,
                        i = n?.author_results?.result?.core?.screen_name,
                        r = n?.tweet_results?.rest_id,
                        o = i && r ? `/${i}/article/${r}` : null;
                    return o ? u.createElement(w.Z, { to: o }) : E;
                },
                I = (e) => {
                    const t = e.match.params.articleEntityId ?? "",
                        n = (0, y.hC)("responsive_web_twitter_article_redirect_enabled");
                    return t && n ? u.createElement(h.N, { errorConfig: f, fallback: C }, u.createElement(F, { articleEntityId: t })) : E;
                },
                S = u.memo(I);
        },
        537028: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => L });
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
                _ = n(715601),
                m = n(546608),
                b = n(810641),
                g = n(725516),
                h = n(4691),
                y = n(750085),
                w = n(218951);
            const f = (e, t) => (0, w.Z)({ timelineId: `articleTweetsTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(h.ZP).fetchArticleTweetsTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ articleId: e, articleListSeedType: t, count: n, cursor: "string" == typeof i ? i : void 0 }) }, context: "FETCH_ARTICLE_TWEETS_TIMELINE", perfKey: "articleTweetsTimeline", formatResponse: y.Z });
            var k = n(506063),
                v = n(769471),
                E = n(801184),
                C = n(335632),
                T = n(962741),
                F = n(263863);
            const I = (0, v.Z)({}, (0, C.G)({}), { [T.ZP.Tweet]: { handlers: { [F.Z.TweetWithoutCard]: (0, E.Cw)({ createAdditionalProps: () => ({ withCardLinks: !0 }) }) } } }),
                S = c().d35d74e4,
                Z = c().f88e624e,
                x = l.default.create((e) => ({ contentWrapper: { height: `calc(100vh - ${e.componentDimensions.appBarHeight} - 1px)` }, viewport: { flex: 1, height: "100%", width: "100%" }, withOverflow: { overflow: "auto" } })),
                L = (0, g.Z)(
                    (e) => {
                        const t = Number(e.match.params.articleId),
                            n = (0, o.useHistory)(),
                            l = i.useMemo(() => [x.viewport, !(0, d.HD)(n) && x.withOverflow], [n]);
                        return i.createElement(
                            u.Z,
                            { backLocation: "/i/articles", screenType: "primaryDetail", title: S, withBottomBorder: !0 },
                            i.createElement(
                                r.Z,
                                { style: x.contentWrapper },
                                i.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite" }, i.createElement(a.ZP, { visuallyHidden: !0 }, Z), i.createElement(m.Z, { id: t, withInternalLink: !1 })),
                                i.createElement(
                                    _.Z,
                                    { style: l },
                                    i.createElement(b.Z, {
                                        anchoring: p.Z,
                                        entryConfiguration: I,
                                        module: f(
                                            t,
                                            (() => {
                                                const {
                                                    match: { params: t },
                                                } = e;
                                                return t?.tabId && t.tabId === k.v.FRIENDS_OF_FRIENDS ? k.v.FRIENDS_OF_FRIENDS : k.v.FOLLOWS;
                                            })(),
                                        ),
                                        title: S,
                                    }),
                                ),
                            ),
                        );
                    },
                    { page: "top_articles", section: "conversation" },
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-a2dee9c7.cc6cfeaa.js.map
