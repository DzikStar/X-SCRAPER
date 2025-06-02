(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles", "icons/IconFilter-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        879604: (e) => {
            e.exports = { queryId: "NLnSuikJWPVZpyt-hEUUgQ", operationName: "ArticleTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        103508: (e) => {
            e.exports = { queryId: "BaYYKX6jQZPMlvt6Ov8I0w", operationName: "ArticleTweetsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        4691: (e, t, i) => {
            "use strict";
            i.d(t, { ZP: () => m });
            var n = i(506063),
                r = i(414742),
                o = i(703710),
                a = i(879604),
                l = i.n(a),
                s = i(103508),
                c = i.n(s),
                d = i(934309);
            const u = (0, r.kj)((e) => {
                    const t = e?.article_by_rest_id?.tweets_timeline?.timeline;
                    return !t;
                }, "GQL Top Articles: Failed query for article Tweets timeline"),
                p = (0, r.kj)((e) => {
                    const t = e?.article_timeline?.timeline;
                    return !t;
                }, "GQL Top Articles: Failed query for article timeline"),
                m = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchArticleTweetsTimeline(i) {
                        const r = i.articleListSeedType === n.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(c(), { ...i, ...(0, o.d)(t), articleListSeedType: r }, u).then((e) => e?.article_by_rest_id?.tweets_timeline?.timeline || d.cY);
                    },
                    fetchArticleTimeline(i) {
                        const r = i.articleListSeedType === n.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(l(), { ...i, ...(0, o.d)(t), articleListSeedType: r }, p).then((e) => e?.article_timeline?.timeline || d.cY);
                    },
                });
        },
        415725: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(202784),
                r = i(325686),
                o = i(392237),
                a = i(822228);
            const l = "activeRoute",
                s = o.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...o.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(a.Z, t, (t) => n.createElement(r.Z, { style: t && s.activeRoot, testID: l }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        625661: (e, t, i) => {
            "use strict";
            i.d(t, { ZP: () => p });
            var n = i(202784),
                r = i(614983),
                o = i.n(r),
                a = i(325686),
                l = i(370006),
                s = i(786998),
                c = i(929028),
                d = i(386802);
            function u(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class p extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: r, hideBackButton: o, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: _, secondaryBar: g, style: h, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: v, withBackground: k, withWideContainer: C } = this.props,
                        { isModal: E } = this.context,
                        T = o ? d : n.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!k, E, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: i, isFullWidth: a, isLarge: c, leftControl: T, middleControl: p, position: u(m, E, r), rightControl: _, style: h, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: v, withBackground: x, withWideContainer: C }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => _ });
            var n = i(807896),
                r = i(202784),
                o = i(182056),
                a = i(879113),
                l = i(392237),
                s = i(111677),
                c = i.n(s),
                d = i(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, i) => {
                    const l = o.Z.isOnline();
                    return r.createElement(a.Z, (0, n.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                _ = r.forwardRef(p);
        },
        253493: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => w });
            var n = i(202784),
                r = i(107267),
                o = i(791632),
                a = i(325686),
                l = i(537392),
                s = i(10656),
                c = i(655352),
                d = i(555079),
                u = i(500002),
                p = i(625661),
                m = i(449067),
                _ = i(655543),
                g = i(715601),
                h = i(392237);
            const b = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(a.Z, { style: b.fill }, n.createElement(g.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: i, screenType: r, showSubtitleOnRoot: o, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: i, appBarStyle: r, backLocation: o, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: _, onBackClick: g, rightControl: h, screenType: y, searchBoxOptions: f, secondaryBar: w, showSubtitleOnRoot: v, showSubtitleOnWideDetail: k, subtitle: C, title: E, titleIconCell: T, titleIconCellSize: x, withDetailOpen: S, withSearchBox: Z, withTweetButton: I, withWideContainer: F } = this.props,
                        L = "root" === y,
                        R = "secondaryRoot" === y,
                        B = "primaryDetail" === y,
                        P = (B && k) || (L && v),
                        D = L || (B && e),
                        z = L ? d.ey : B ? d.vX : void 0,
                        O = n.createElement(a.Z, { style: b.appBarContainer }, n.createElement(p.ZP, { backLocation: o, fixed: !1, hideBackButton: D, history: c, leftControl: u, middleControl: _, onBackClick: g, rightControl: h, secondaryBar: w, style: r, subtitle: P ? C : void 0, title: E, titleDomId: z, titleIconCell: T, titleIconCellSize: x, withWideContainer: F })),
                        A = L || (R && S) ? null : n.createElement(m.Z.Configure, { SideNavButton: t, TabBar: i, backLocation: o, documentTitle: l, headerless: s, middleControl: _, onBackClick: g, rightControl: h, searchBoxOptions: f, subtitle: C, title: E, withSearchBox: Z, withTweetButton: I });
                    return n.createElement(n.Fragment, null, A, O);
                }
            }
            (y.contextType = _.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, u.ZP)(y),
                w = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, o.HD)(t) ? e.children || null : n.createElement(f, e);
                };
        },
        332878: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const r = (e, t, i) => {
                    const n = e(t),
                        r = e(i);
                    return !n && r ? -1 : n && !r ? 1 : 0;
                },
                o = (e, t, i) => a(e(i), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                l = (e, t) => {
                    if (e.length) return e.reduce((e, i) => (t(i, e) > 0 ? i : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const i = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(i),
                        s = (e) => (e ? Math.abs(i.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: i }) => !n(i) && t.isRendered(i) && e.isRendered(i)),
                        d =
                            c.length > 0
                                ? l(c, (e, i) => {
                                      const n = t.getForItem(e.id),
                                          l = t.getForItem(i.id);
                                      return r(a, n, l) || o(s, n, l);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: i, distanceToViewportTop: n, id: r } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(r).getTop() - t;
                        }
                        if ("number" == typeof i) {
                            const t = e.getForViewport().getBottom() + i;
                            return e.getForItem(r).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            i = e.getForViewport().getBottom();
                        return Math.max(0, i - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !n(e))
                            .map(({ id: e, rectangle: i }) => ({ id: e, distanceToViewportTop: i.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const i = s({ prevPos: e, nextPos: t });
                        if (i) {
                            const n = e.getForItem(i).getTop() - e.getForViewport().getTop();
                            return t.getForItem(i).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        507651: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(807896),
                r = i(202784),
                o = i(107267),
                a = i(403556),
                l = i(791632);
            const s = (e) => {
                    const t = (0, o.useHistory)(),
                        { isCompact: i, ...s } = e;
                    return r.createElement(a.Z, (0, n.Z)({}, s, { isCompact: i || (0, l.HD)(t) }));
                },
                c = r.memo(s);
        },
        890882: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var n = i(202784),
                r = i(443781);
            const o = (e) => {
                const { featureSwitches: t, userClaims: i } = n.useContext(r.rC),
                    o = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    a = i.isAnyPremiumSubscriber(),
                    { text: l } = e;
                return a && o ? n.createElement(n.Fragment, null, l) : l;
            };
        },
        546608: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => D });
            var n = i(202784),
                r = i(325686),
                o = i(638009),
                a = i(352924),
                l = i(470397),
                s = i(731708),
                c = i(966886),
                d = i(154003),
                u = i(682474),
                p = i(392237),
                m = i(530525),
                _ = i(439592),
                g = i(126962),
                h = i(952428),
                b = i(530732),
                y = i(111677),
                f = i.n(y),
                w = i(490359),
                v = i(769471),
                k = i(415725),
                C = i(725405),
                E = i(500002),
                T = i(71620),
                x = i(668214),
                S = i(502909),
                Z = i(600823);
            const I = (0, S.ZP)({ namespace: "articles" }),
                F = Z.Z.register(I),
                L = (e, t) => F.select(e, t.id.toString()),
                R = (0, x.Z)()
                    .propsFromState(() => ({ article: L }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, T.zr)("ARTICLE_SUMMARY") })),
                B = f().afb7e8f8,
                P = p.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                D = (0, E.ZP)(
                    R(({ article: e, createLocalApiErrorHandler: t, id: i, location: y, socialContext: f, withInternalLink: E }) => {
                        const T = (0, C.Z)(),
                            x = n.useContext(o.ZP),
                            { article_url: S, description: Z, domain: I, image_url: F, publish_date: L, title: R } = e || {},
                            D = { domain: a.b(), timestamp: a.b(), title: a.b(), description: a.b(), adFree: a.b(), socialContext: a.b() },
                            z = [D.domain, D.timestamp, D.title, D.description, D.socialContext],
                            O = n.useMemo(() => {
                                const e = (0, w.Z)(T.contextualScribeData.items || []) || {};
                                return { url: S, items: [(0, v.Z)({}, e, { article_details: { publisher_name: I, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [T.contextualScribeData.items, S, I]),
                            A = n.useCallback(() => {
                                T.scribe({ action: "impression", data: O });
                            }, [T, O]);
                        if (
                            (n.useEffect(() => {
                                A();
                            }, [A]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: N, landingUrl: M, text: W } = f || {},
                            H = F ? { url: F, height: 750, width: 1250 } : void 0,
                            V = { pathname: S, external: !0 },
                            $ = (e) => {
                                T.scribe({ element: E ? "read_article" : "article_header", action: "open_link", data: O });
                            },
                            U = () => {
                                T.scribe({ element: "conversation_view", action: "click", data: O });
                            },
                            q = M ? x.getLinkFromUrtUrl(M) : void 0,
                            K = q ? x.withAnchorless(q) : void 0,
                            j = K
                                ? {
                                      ...K,
                                      pathname: `${K.pathname}?time_window=${(() => {
                                          const e = y?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            G = n.createElement(n.Fragment, null, n.createElement(r.Z, { style: P.horizontalContainer }, n.createElement(r.Z, { style: P.textContainer }, n.createElement(l.Z, { style: P.middotGroup }, I && n.createElement(s.ZP, { color: "gray700", id: D.domain, size: "subtext2", weight: "bold" }, I), L && n.createElement(s.ZP, { color: "gray700", id: D.timestamp, size: "subtext2" }, n.createElement(c.Z, { timestamp: L }))), n.createElement(s.ZP, { color: "text", id: D.title, link: j, numberOfLines: 3, size: "headline2", style: P.text, weight: "bold", withInteractiveStyling: !1 }, R), Z ? n.createElement(s.ZP, { id: D.description, numberOfLines: 2 }, Z) : null, E ? n.createElement(r.Z, { style: P.buttonContainer }, n.createElement(d.ZP, { link: V, onClick: $, size: "xSmall", type: "primaryOutlined" }, B)) : null), H ? n.createElement(r.Z, { style: P.imageContainer }, n.createElement(u.Z, { ratio: p.default.theme.aspectRatios.square }, n.createElement(m.Z, { "aria-label": "", aspectMode: _.Z.SQUARE, image: H }))) : null), n.createElement(g.Z, { contextType: "Facepile", iconSize: "large", id: D.socialContext, text: W, textSize: "subtext2", userAvatarUrls: N, withLeftPadding: !1, withTextCentered: !0 }));
                        return E ? n.createElement(k.Z, { exact: !1, path: j?.pathname || "" }, (e) => n.createElement(h.Z, { "aria-labelledby": z.join(" "), "aria-selected": e, link: j, onClick: U, role: "article", style: P.container }, G)) : n.createElement(b.Z, { link: V, onClick: $, style: [P.container, P.bottomBorder] }, G);
                    }),
                );
        },
        376293: (e, t, i) => {
            "use strict";
            i.d(t, { $f: () => E, KV: () => b, LI: () => I, SC: () => C, Vt: () => w, ed: () => F, op: () => T });
            var n = i(202784),
                r = i(190286),
                o = i(111677),
                a = i.n(o),
                l = i(616894),
                s = i(314948),
                c = i(516951),
                d = i(163390);
            const u = a().cfd2f35e,
                p = a().f9e45cfb,
                m = a().fcd4d489,
                _ = a().a6450e84,
                g = a().g353ad73,
                h = a().ad00a739,
                b = a().a9fd20be,
                y = a().j546fb79,
                f = a().c9623eeb,
                w = a().e133be4e,
                v = a().he43bca4,
                k = a().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: _, text: t ? h({ screenName: e }) : g({ screenName: e }) }),
                T = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: i, source: n, testID: r, unblockAction: o, unblockSubtext: a, user: l }) => {
                    let s,
                        u = c.Z;
                    const p = I(l, i);
                    switch (n) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? o(p) : e(p);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (s = d.uq.block),
                                (u = () => {
                                    l.blocking ? o(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: r, shortcutKey: s, Icon: x(l.blocking), text: Z(l), subText: S({ user: l, blockSubtext: t, unblockSubtext: a }) };
                },
                x = (e) => (e ? s.default : l.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: i }) => (!i.blocking && e ? e(i.screen_name) : i.blocking ? t : void 0),
                Z = (e) => (e.blocking ? f({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: w, text: t ? k : v }))(e.screen_name, t) : E(e.screen_name, t)),
                F = ({ confirmation: e, handleConfirm: t, onClose: i }) => {
                    const { confirmButtonType: o, headline: a, label: l, text: s } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: o, headline: a, onCancel: i, onConfirm: t, text: s });
                };
        },
        712816: (e, t, i) => {
            "use strict";
            i.d(t, { d: () => r });
            var n = i(111677);
            const r = { defaultToast: { text: i.n(n)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, i) => {
            "use strict";
            i.d(t, { D: () => r });
            var n = i(111677);
            const r = { defaultToast: { text: i.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, i) => {
            "use strict";
            i.d(t, { OX: () => p, Od: () => d, PN: () => m, uq: () => c, wR: () => g });
            var n = i(251067),
                r = i(522171),
                o = i(111677),
                a = i.n(o),
                l = i(912021),
                s = i(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
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
                m = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                _ = (0, l.Z)((e) => {
                    const t = d(e),
                        i = p(),
                        n = m(),
                        r = {};
                    return (
                        [...i, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": _(e) } };
                };
        },
        409438: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => p });
            var n = i(807469),
                r = i(502909),
                o = i(600823);
            const a = (0, r.ZP)({ namespace: "topics" }),
                l = (0, r.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                s = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, n) => (i(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, i) => {
                    const { entityId: n } = t.meta,
                        r = e.entities[n];
                    return r ? ((e, t, i, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...n() } } } : e))(e, t, r, i) : e;
                },
                d = { follow: (0, r.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...a, ...l, ...s, ...d, customActionTypes: (0, r.X7)(d) },
                p = o.Z.register(u);
        },
        90086: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { ArticleListScreen: () => oe, TabLabels: () => ne, default: () => ae, hasListSeedPath: () => re });
            var n = i(202784),
                r = i(811176),
                o = i(247056),
                a = i(425376),
                l = i(111677),
                s = i.n(l),
                c = i(517747),
                d = i(813681),
                u = i(730086),
                p = i(253493),
                m = i(507651),
                _ = i(890882),
                g = i(443781),
                h = i(38293),
                b = i(292484),
                y = i(962741),
                f = i(175856),
                w = i(4691),
                v = i(750085),
                k = i(218951);
            var C = i(731708),
                E = i(457311),
                T = i(392237),
                x = i(332878),
                S = i(810641),
                Z = i(668214);
            const I = (e, t) => t.module.selectEntries(e),
                F = (0, Z.Z)().propsFromState(() => ({ entries: I }));
            const L = (0, i(335632).G)({}),
                R = s().b7fa0cfe,
                B = s().e950f6e0,
                P = n.createElement(s().I18NFormatMessage, { $i18n: "d9cb9d0b" }, n.createElement(C.ZP, { color: "link", link: "/i/connect_people" }, s().e7dcfb81)),
                D = () => n.createElement(E.Z, { header: B, message: P, style: O.emptyState }),
                z = (e) => {
                    const { entries: t, module: i, onEntriesChanged: r } = e;
                    return (
                        n.useEffect(() => {
                            r(t);
                        }, [r, t]),
                        n.createElement(S.Z, { anchoring: x.Z, entryConfiguration: L, module: i, renderEmptyState: D, title: R })
                    );
                },
                O = T.default.create((e) => ({ emptyState: { height: `calc(100vh - ${e.componentDimensions.appBarHeight})`, justifyContent: "center", marginVertical: 0 } })),
                A = F(n.memo(z));
            var N = i(2430),
                M = i(506063);
            const W = (e, t) => (0, f.t5)(e, f.q4),
                H = (e, t) => {
                    const {
                        location: i,
                        match: { params: n },
                    } = t;
                    let r = "";
                    return n && n.tabId && "string" == typeof n.tabId ? (r = n.tabId) : i && i.query && i.query.tabId && (r = (0, N.BX)(i.query.tabId) || ""), r === M.v.FRIENDS_OF_FRIENDS ? M.v.FRIENDS_OF_FRIENDS : M.v.FOLLOWS;
                },
                V = (e, t) => {
                    const { location: i } = t,
                        n = i?.query?.time_window;
                    return Number(n) || 24;
                },
                $ = (0, Z.Z)()
                    .propsFromState(() => ({ seedType: H, showFriendsOfFriendsNUX: W, timeWindowQuery: V }))
                    .propsFromActions(() => ({ addFlag: f.pj }))
                    .withAnalytics({ page: "top_articles", section: "top_articles" }),
                U = s().b7fa0cfe,
                q = s().e15e5637,
                K = s().af293dc2,
                j = s().h5ab8b0e,
                G = s().e15e5637,
                Q = s().a0f01bca,
                X = s().he30b16c,
                Y = s().b0589550,
                J = s().b60e4f78,
                ee = s().f5b3dc1e,
                te = (e) => 60 * e * 60 * 1e3,
                ie = [M.v.FOLLOWS, M.v.FRIENDS_OF_FRIENDS],
                ne = Object.freeze({ [M.v.FOLLOWS]: K, [M.v.FRIENDS_OF_FRIENDS]: j }),
                re = (e) => {
                    const t = `(${M.v.FOLLOWS}|${M.v.FRIENDS_OF_FRIENDS})`,
                        i = new RegExp(t, "g");
                    return !!e.match(i);
                },
                oe = ({ addFlag: e, analytics: t, history: i, location: l, match: s, seedType: C, showFriendsOfFriendsNUX: E, timeWindowQuery: T }) => {
                    const { featureSwitches: x } = n.useContext(g.rC),
                        S = (0, b.Cz)(),
                        Z = x.isTrue("longform_top_articles_time_window_enabled"),
                        I = x.isTrue("longform_top_articles_friends_of_friends_enabled"),
                        [F, L] = n.useState(E),
                        R = (e) => `?time_window=${e || 24}`,
                        B = n.useCallback(() => (C === M.v.FRIENDS_OF_FRIENDS ? "fof" : "following"), [C]),
                        P = I ? `_${B()}` : "",
                        D = n.useCallback(() => {
                            t.scribe({ action: "impression", section: `top_articles${P}`, data: { context: `time_window_${te(T)}` } });
                        }, [t, P, T]);
                    n.useEffect(() => {
                        D();
                    }, [D]);
                    const z = n.useCallback(
                            (e) => {
                                const t = s.params.articleId,
                                    n = (0, u.Z)(e, (e) => e.type === y.ZP.Article && !!e.content && e.content.articleId),
                                    r = re(l.pathname);
                                S && !t && n ? i.replace(`/i/articles/${C}/${n}${R(T)}`) : S || r || i.replace(`/i/articles/${C}${R(T)}`);
                            },
                            [s.params.articleId, l.pathname, i, S, C, T],
                        ),
                        O = (e) => () => {
                            i.replace(`/i/articles/${C}${R(e)}`);
                        },
                        N = [
                            { text: G({ count: 1 }), onClick: O(1) },
                            { text: G({ count: 2 }), onClick: O(2) },
                            { text: G({ count: 4 }), onClick: O(4) },
                            { text: G({ count: 8 }), onClick: O(8) },
                            { text: G({ count: 24 }), onClick: O(24) },
                        ],
                        W = n.createElement(o.Z, { Icon: c.default, label: Q, renderActionMenu: (e) => n.createElement(r.Z, { items: N, onCloseRequested: e, shouldCloseOnClick: !0 }) }),
                        H = (e) => e === C,
                        V = (e) => `/i/articles/${e}${R(T)}`,
                        $ = () => {
                            e(f.q4), L(!1);
                        },
                        K = () => {
                            const e = V(M.v.FRIENDS_OF_FRIENDS);
                            i.replace(e), $();
                        },
                        j = (e) => n.createElement(a.Z, { actionPrimary: { text: J, onClick: K }, actionSecondary: { text: ee, onClick: $ }, headline: Y, icon: d.default, iconColor: "primary", onDismiss: $, shouldDisplay: F, text: X, withMask: !0 }, ne[e]),
                        oe = ie.map((e) => ({
                            key: e,
                            label: e === M.v.FRIENDS_OF_FRIENDS && F && !H(e) ? j(e) : ne[e],
                            isActive: () => H(e),
                            to: { pathname: V(e) },
                            onClick: () => {
                                t.scribe({ action: "click", element: "tab", section: `top_articles${P}` });
                            },
                        })),
                        ae = ((e) => {
                            const t = ie.indexOf(e);
                            return t > -1 ? t : 0;
                        })(C),
                        le = n.useMemo(() => ((e, t = 864e5) => (0, k.Z)({ timelineId: `articlesTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(w.ZP).fetchArticleTimeline, getEndpointParams: ({ count: i, cursor: n }) => ({ count: i, cursor: "string" == typeof n ? n : void 0, articleListSeedType: e, timeWindowMillis: t }) }, context: "FETCH_TOP_ARTICLES_TIMELINE", perfKey: "articlesTimeline", formatResponse: v.Z }))(C, te(T || 24)), [C, T]);
                    return n.createElement(n.Fragment, null, n.createElement(h.Z, { title: U }), n.createElement(p.Z, { rightControl: Z ? W : void 0, screenType: "root", showSubtitleOnRoot: !0, subtitle: q({ count: T || 24 }), title: n.createElement(_.Z, { text: U }) }, I ? n.createElement(m.Z, { links: oe, visibleItemIndex: ae }) : null, n.createElement(A, { module: le, onEntriesChanged: z })));
                },
                ae = $(oe);
        },
        463818: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => Z, query: () => T });
            var n,
                r,
                o,
                a,
                l,
                s,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
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
                        argumentDefinitions: n,
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
            var u = i(202784),
                p = (i(585488), i(712696)),
                m = i.n(p),
                _ = i(457311),
                g = i(111677),
                h = i.n(g),
                b = i(883229),
                y = i(952793),
                f = i(615027);
            const w = { context: "ArticleRedirect" },
                v = h().h965157c,
                k = h().cd388852,
                C = u.createElement(_.Z, { header: v, message: k }),
                E = { type: "CustomRetry", content: () => C },
                T = d,
                x = ({ articleEntityId: e }) => {
                    const t = m()(T, { articleEntityId: e }),
                        i = t?.article_result_by_rest_id?.result?.metadata,
                        n = i?.author_results?.result?.core?.screen_name,
                        r = i?.tweet_results?.rest_id,
                        o = n && r ? `/${n}/article/${r}` : null;
                    return o ? u.createElement(f.Z, { to: o }) : C;
                },
                S = (e) => {
                    const t = e.match.params.articleEntityId ?? "",
                        i = (0, y.hC)("responsive_web_twitter_article_redirect_enabled");
                    return t && i ? u.createElement(b.N, { errorConfig: w, fallback: E }, u.createElement(x, { articleEntityId: t })) : C;
                },
                Z = u.memo(S);
        },
        537028: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => L });
            var n = i(202784),
                r = i(325686),
                o = i(107267),
                a = i(731708),
                l = i(392237),
                s = i(111677),
                c = i.n(s),
                d = i(791632),
                u = i(253493),
                p = i(332878),
                m = i(715601),
                _ = i(546608),
                g = i(810641),
                h = i(725516),
                b = i(4691),
                y = i(750085),
                f = i(218951);
            const w = (e, t) => (0, f.Z)({ timelineId: `articleTweetsTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchArticleTweetsTimeline, getEndpointParams: ({ count: i, cursor: n }) => ({ articleId: e, articleListSeedType: t, count: i, cursor: "string" == typeof n ? n : void 0 }) }, context: "FETCH_ARTICLE_TWEETS_TIMELINE", perfKey: "articleTweetsTimeline", formatResponse: y.Z });
            var v = i(506063),
                k = i(769471),
                C = i(801184),
                E = i(335632),
                T = i(962741),
                x = i(263863);
            const S = (0, k.Z)({}, (0, E.G)({}), { [T.ZP.Tweet]: { handlers: { [x.Z.TweetWithoutCard]: (0, C.Cw)({ createAdditionalProps: () => ({ withCardLinks: !0 }) }) } } }),
                Z = c().d35d74e4,
                I = c().f88e624e,
                F = l.default.create((e) => ({ contentWrapper: { height: `calc(100vh - ${e.componentDimensions.appBarHeight} - 1px)` }, viewport: { flex: 1, height: "100%", width: "100%" }, withOverflow: { overflow: "auto" } })),
                L = (0, h.Z)(
                    (e) => {
                        const t = Number(e.match.params.articleId),
                            i = (0, o.useHistory)(),
                            l = n.useMemo(() => [F.viewport, !(0, d.HD)(i) && F.withOverflow], [i]);
                        return n.createElement(
                            u.Z,
                            { backLocation: "/i/articles", screenType: "primaryDetail", title: Z, withBottomBorder: !0 },
                            n.createElement(
                                r.Z,
                                { style: F.contentWrapper },
                                n.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite" }, n.createElement(a.ZP, { visuallyHidden: !0 }, I), n.createElement(_.Z, { id: t, withInternalLink: !1 })),
                                n.createElement(
                                    m.Z,
                                    { style: l },
                                    n.createElement(g.Z, {
                                        anchoring: p.Z,
                                        entryConfiguration: S,
                                        module: w(
                                            t,
                                            (() => {
                                                const {
                                                    match: { params: t },
                                                } = e;
                                                return t?.tabId && t.tabId === v.v.FRIENDS_OF_FRIENDS ? v.v.FRIENDS_OF_FRIENDS : v.v.FOLLOWS;
                                            })(),
                                        ),
                                        title: Z,
                                    }),
                                ),
                            ),
                        );
                    },
                    { page: "top_articles", section: "conversation" },
                );
        },
        425376: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => g });
            var n = i(202784),
                r = i(325686),
                o = i(494394),
                a = i(530525),
                l = i(731708),
                s = i(439592),
                c = i(154003),
                d = i(769281),
                u = i(30899),
                p = i(138099),
                m = i(392237);
            const _ = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: i, headline: g, icon: h, iconColor: b, image: y, onDismiss: f, shouldDisplay: w, text: v, withMask: k = !0 }) => {
                    const [C, E] = n.useState(!1),
                        T = (e) => n.createElement(u.Z, { onDismiss: R, renderContent: () => S(R), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: o.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: k }, e),
                        x = () => n.createElement(p.Z, { onMaskClick: () => R(), type: "center", withMask: !0 }, S(R)),
                        S = (i) => n.createElement(r.Z, { style: [_.root, y && _.rootWithImage] }, Z(), n.createElement(r.Z, { style: _.container }, I(), F(), L({ action: e, dismiss: i, type: t && "primaryFilled" }), L({ action: t, dismiss: i }))),
                        Z = () => {
                            let e = h && n.createElement(h, { style: b ? [_.icon, { color: m.default.theme.colors[b] }] : _.icon });
                            return y && !d.Z.isEnabled && (e = n.createElement(a.Z, { "aria-label": "", aspectMode: s.Z.exact(2), image: y })), e && n.createElement(r.Z, { style: _.graphic }, e);
                        },
                        I = () => n.createElement(l.ZP, { size: "title3", weight: "heavy" }, g),
                        F = () => n.createElement(l.ZP, { color: "gray700", style: _.description }, v),
                        L = ({ action: e, dismiss: t, type: i }) => e && n.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: _.actionButton, type: i }, e.text),
                        R = () => {
                            f && f(), E(!0);
                        };
                    return w && !C ? (i ? T(i) : x()) : i || null;
                };
        },
        879113: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m });
            var n = i(202784),
                r = i(476984),
                o = i.n(r),
                a = i(143778),
                l = i(750410),
                s = i(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        i = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !i) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: i, fetchStatus: r, icon: o, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: _, retryMessage: g, retryable: h } = this.props;
                    switch (r) {
                        case c:
                            return h ? n.createElement(l.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : i ? n.createElement(s.m, { failureMessage: i }) : _();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        403556: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => T });
            var n = i(807896),
                r = i(202784),
                o = i(194504),
                a = i(235902),
                l = i(392237),
                s = i(325686),
                c = i(111677),
                d = i.n(c),
                u = i(912021),
                p = i(516951),
                m = i(731708),
                _ = i(310088),
                g = i(175993),
                h = i(58881),
                b = i(530732);
            const y = d().d2414d31,
                f = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: i, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: i, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, i, n) => {
                            const r = l.default.theme.colors.text,
                                o = l.default.theme.colors.gray700;
                            return i || n ? (e || t ? r : o) : e ? r : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: i, badgePip: n, children: o, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: v, style: C, to: E } = this.props,
                        { location: T } = this.state,
                        x = E ? this._getMemoizedLink(E, v) : void 0,
                        S = c ? c(E) : T?.pathname === x?.pathname,
                        Z = h.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? k.pillHoverStyle.backgroundColor : void 0 }),
                        I = g ? "medium" : S ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: Z, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [k.pillStyle] : [k.link]), ...(u && S ? [k.pillActiveStyle] : []), d ? (u ? k.compactPill : k.compactLink) : null, p ? k.roundedRect : null, C], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: u && k.flexGrow }, r.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(S, c, g, u) }, d && k.compactText, g && t && k.focusedText, u && k.pillTextStyle, u && S && k.pillActiveTextStyle, u && c && k.pillHoverTextStyle], weight: I }, e && r.createElement(e, { style: k.icon }), o, g || u ? null : r.createElement(s.Z, { style: S && [k.border, { backgroundColor: l.default.theme.colors[a] }] })), i ? r.createElement(_.Z, { count: i, standalone: !0, style: [k.badge, i >= 10 && k.multiDigitBadge, i >= 20 && k.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : n ? r.createElement(_.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (v.contextType = g.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                C = v,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: i, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        _ = m() && !l,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...a }, c) => {
                                    const d = _ ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(C, (0, n.Z)({ viewType: o }, a, { isCompact: i, isPillLink: l, isRoundedRect: s, isWebRedesign: _, style: d }), t);
                                }),
                            [e, i, l, s, _, c],
                        );
                    return r.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !_ && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, _ && E.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        517747: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        246492: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        264171: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        648539: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        262009: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => s });
            var n = i(202784),
                r = i(890601),
                o = i(783427),
                a = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        490359: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles.f62eaeba.js.map
