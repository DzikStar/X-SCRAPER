(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles"],
    {
        879604: (e) => {
            e.exports = { queryId: "NLnSuikJWPVZpyt-hEUUgQ", operationName: "ArticleTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        103508: (e) => {
            e.exports = { queryId: "BaYYKX6jQZPMlvt6Ov8I0w", operationName: "ArticleTweetsTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: o, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: _, secondaryBar: g, style: h, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: k, withBackground: v, withWideContainer: C } = this.props,
                        { isModal: E } = this.context,
                        T = o ? d : i.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!v, E, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: T, middleControl: p, position: u(m, E, r), rightControl: _, style: h, subtitle: b, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: k, withBackground: x, withWideContainer: C }), g || null);
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
            n.d(t, { Z: () => _ });
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
                    return r.createElement(a.Z, (0, i.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                _ = r.forwardRef(p);
        },
        253493: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var i = n(202784),
                r = n(107267),
                o = n(791632),
                a = n(325686),
                l = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                p = n(625661),
                m = n(449067),
                _ = n(655543),
                g = n(715601),
                h = n(392237);
            const b = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? i.createElement(a.Z, { style: b.fill }, i.createElement(g.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return i.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: o, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return i.createElement(i.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : i.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return i.createElement(i.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: o, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: _, onBackClick: g, rightControl: h, screenType: y, searchBoxOptions: f, secondaryBar: w, showSubtitleOnRoot: k, showSubtitleOnWideDetail: v, subtitle: C, title: E, titleIconCell: T, titleIconCellSize: x, withDetailOpen: S, withSearchBox: Z, withTweetButton: I, withWideContainer: F } = this.props,
                        L = "root" === y,
                        R = "secondaryRoot" === y,
                        P = "primaryDetail" === y,
                        B = (P && v) || (L && k),
                        D = L || (P && e),
                        O = L ? d.ey : P ? d.vX : void 0,
                        A = i.createElement(a.Z, { style: b.appBarContainer }, i.createElement(p.ZP, { backLocation: o, fixed: !1, hideBackButton: D, history: c, leftControl: u, middleControl: _, onBackClick: g, rightControl: h, secondaryBar: w, style: r, subtitle: B ? C : void 0, title: E, titleDomId: O, titleIconCell: T, titleIconCellSize: x, withWideContainer: F })),
                        N = L || (R && S) ? null : i.createElement(m.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: o, documentTitle: l, headerless: s, middleControl: _, onBackClick: g, rightControl: h, searchBoxOptions: f, subtitle: C, title: E, withSearchBox: Z, withTweetButton: I });
                    return i.createElement(i.Fragment, null, N, A);
                }
            }
            (y.contextType = _.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, u.ZP)(y),
                w = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, o.HD)(t) ? e.children || null : i.createElement(f, e);
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
                _ = n(439592),
                g = n(126962),
                h = n(952428),
                b = n(530732),
                y = n(111677),
                f = n.n(y),
                w = n(490359),
                k = n(769471),
                v = n(415725),
                C = n(725405),
                E = n(500002),
                T = n(71620),
                x = n(668214),
                S = n(502909),
                Z = n(600823);
            const I = (0, S.ZP)({ namespace: "articles" }),
                F = Z.Z.register(I),
                L = (e, t) => F.select(e, t.id.toString()),
                R = (0, x.Z)()
                    .propsFromState(() => ({ article: L }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, T.zr)("ARTICLE_SUMMARY") })),
                P = f().afb7e8f8,
                B = p.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                D = (0, E.ZP)(
                    R(({ article: e, createLocalApiErrorHandler: t, id: n, location: y, socialContext: f, withInternalLink: E }) => {
                        const T = (0, C.Z)(),
                            x = i.useContext(o.ZP),
                            { article_url: S, description: Z, domain: I, image_url: F, publish_date: L, title: R } = e || {},
                            D = { domain: a.b(), timestamp: a.b(), title: a.b(), description: a.b(), adFree: a.b(), socialContext: a.b() },
                            O = [D.domain, D.timestamp, D.title, D.description, D.socialContext],
                            A = i.useMemo(() => {
                                const e = (0, w.Z)(T.contextualScribeData.items || []) || {};
                                return { url: S, items: [(0, k.Z)({}, e, { article_details: { publisher_name: I, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [T.contextualScribeData.items, S, I]),
                            N = i.useCallback(() => {
                                T.scribe({ action: "impression", data: A });
                            }, [T, A]);
                        if (
                            (i.useEffect(() => {
                                N();
                            }, [N]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: W, landingUrl: z, text: M } = f || {},
                            $ = F ? { url: F, height: 750, width: 1250 } : void 0,
                            H = { pathname: S, external: !0 },
                            U = (e) => {
                                T.scribe({ element: E ? "read_article" : "article_header", action: "open_link", data: A });
                            },
                            q = () => {
                                T.scribe({ element: "conversation_view", action: "click", data: A });
                            },
                            K = z ? x.getLinkFromUrtUrl(z) : void 0,
                            V = K ? x.withAnchorless(K) : void 0,
                            j = V
                                ? {
                                      ...V,
                                      pathname: `${V.pathname}?time_window=${(() => {
                                          const e = y?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            G = i.createElement(i.Fragment, null, i.createElement(r.Z, { style: B.horizontalContainer }, i.createElement(r.Z, { style: B.textContainer }, i.createElement(l.Z, { style: B.middotGroup }, I && i.createElement(s.ZP, { color: "gray700", id: D.domain, size: "subtext2", weight: "bold" }, I), L && i.createElement(s.ZP, { color: "gray700", id: D.timestamp, size: "subtext2" }, i.createElement(c.Z, { timestamp: L }))), i.createElement(s.ZP, { color: "text", id: D.title, link: j, numberOfLines: 3, size: "headline2", style: B.text, weight: "bold", withInteractiveStyling: !1 }, R), Z ? i.createElement(s.ZP, { id: D.description, numberOfLines: 2 }, Z) : null, E ? i.createElement(r.Z, { style: B.buttonContainer }, i.createElement(d.ZP, { link: H, onClick: U, size: "xSmall", type: "primaryOutlined" }, P)) : null), $ ? i.createElement(r.Z, { style: B.imageContainer }, i.createElement(u.Z, { ratio: p.default.theme.aspectRatios.square }, i.createElement(m.Z, { "aria-label": "", aspectMode: _.Z.SQUARE, image: $ }))) : null), i.createElement(g.Z, { contextType: "Facepile", iconSize: "large", id: D.socialContext, text: M, textSize: "subtext2", userAvatarUrls: W, withLeftPadding: !1, withTextCentered: !0 }));
                        return E ? i.createElement(v.Z, { exact: !1, path: j?.pathname || "" }, (e) => i.createElement(h.Z, { "aria-labelledby": O.join(" "), "aria-selected": e, link: j, onClick: q, role: "article", style: B.container }, G)) : i.createElement(b.Z, { link: H, onClick: U, style: [B.container, B.bottomBorder] }, G);
                    }),
                );
        },
        376293: (e, t, n) => {
            "use strict";
            n.d(t, { $f: () => E, KV: () => b, LI: () => I, SC: () => C, Vt: () => w, ed: () => F, op: () => T });
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
                m = a().fcd4d489,
                _ = a().a6450e84,
                g = a().g353ad73,
                h = a().ad00a739,
                b = a().a9fd20be,
                y = a().j546fb79,
                f = a().c9623eeb,
                w = a().e133be4e,
                k = a().he43bca4,
                v = a().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: _, text: t ? h({ screenName: e }) : g({ screenName: e }) }),
                T = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: i, testID: r, unblockAction: o, unblockSubtext: a, user: l }) => {
                    let s,
                        u = c.Z;
                    const p = I(l, n);
                    switch (i) {
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
                S = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                Z = (e) => (e.blocking ? f({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: w, text: t ? v : k }))(e.screen_name, t) : E(e.screen_name, t)),
                F = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
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
            n.d(t, { OX: () => p, Od: () => d, PN: () => m, uq: () => c, wR: () => g });
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
                        n = p(),
                        i = m(),
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
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": _(e) } };
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
                p = n(253493),
                m = n(507651),
                _ = n(890882),
                g = n(443781),
                h = n(38293),
                b = n(292484),
                y = n(962741),
                f = n(175856),
                w = n(4691),
                k = n(750085),
                v = n(218951);
            var C = n(731708),
                E = n(457311),
                T = n(392237),
                x = n(332878),
                S = n(810641),
                Z = n(668214);
            const I = (e, t) => t.module.selectEntries(e),
                F = (0, Z.Z)().propsFromState(() => ({ entries: I }));
            const L = (0, n(335632).G)({}),
                R = s().b7fa0cfe,
                P = s().e950f6e0,
                B = i.createElement(s().I18NFormatMessage, { $i18n: "d9cb9d0b" }, i.createElement(C.ZP, { color: "link", link: "/i/connect_people" }, s().e7dcfb81)),
                D = () => i.createElement(E.Z, { header: P, message: B, style: A.emptyState }),
                O = (e) => {
                    const { entries: t, module: n, onEntriesChanged: r } = e;
                    return (
                        i.useEffect(() => {
                            r(t);
                        }, [r, t]),
                        i.createElement(S.Z, { anchoring: x.Z, entryConfiguration: L, module: n, renderEmptyState: D, title: R })
                    );
                },
                A = T.default.create((e) => ({ emptyState: { height: `calc(100vh - ${e.componentDimensions.appBarHeight})`, justifyContent: "center", marginVertical: 0 } })),
                N = F(i.memo(O));
            var W = n(2430),
                z = n(506063);
            const M = (e, t) => (0, f.t5)(e, f.q4),
                $ = (e, t) => {
                    const {
                        location: n,
                        match: { params: i },
                    } = t;
                    let r = "";
                    return i && i.tabId && "string" == typeof i.tabId ? (r = i.tabId) : n && n.query && n.query.tabId && (r = (0, W.BX)(n.query.tabId) || ""), r === z.v.FRIENDS_OF_FRIENDS ? z.v.FRIENDS_OF_FRIENDS : z.v.FOLLOWS;
                },
                H = (e, t) => {
                    const { location: n } = t,
                        i = n?.query?.time_window;
                    return Number(i) || 24;
                },
                U = (0, Z.Z)()
                    .propsFromState(() => ({ seedType: $, showFriendsOfFriendsNUX: M, timeWindowQuery: H }))
                    .propsFromActions(() => ({ addFlag: f.pj }))
                    .withAnalytics({ page: "top_articles", section: "top_articles" }),
                q = s().b7fa0cfe,
                K = s().e15e5637,
                V = s().af293dc2,
                j = s().h5ab8b0e,
                G = s().e15e5637,
                Q = s().a0f01bca,
                X = s().he30b16c,
                Y = s().b0589550,
                J = s().b60e4f78,
                ee = s().f5b3dc1e,
                te = (e) => 60 * e * 60 * 1e3,
                ne = [z.v.FOLLOWS, z.v.FRIENDS_OF_FRIENDS],
                ie = Object.freeze({ [z.v.FOLLOWS]: V, [z.v.FRIENDS_OF_FRIENDS]: j }),
                re = (e) => {
                    const t = `(${z.v.FOLLOWS}|${z.v.FRIENDS_OF_FRIENDS})`,
                        n = new RegExp(t, "g");
                    return !!e.match(n);
                },
                oe = ({ addFlag: e, analytics: t, history: n, location: l, match: s, seedType: C, showFriendsOfFriendsNUX: E, timeWindowQuery: T }) => {
                    const { featureSwitches: x } = i.useContext(g.rC),
                        S = (0, b.Cz)(),
                        Z = x.isTrue("longform_top_articles_time_window_enabled"),
                        I = x.isTrue("longform_top_articles_friends_of_friends_enabled"),
                        [F, L] = i.useState(E),
                        R = (e) => `?time_window=${e || 24}`,
                        P = i.useCallback(() => (C === z.v.FRIENDS_OF_FRIENDS ? "fof" : "following"), [C]),
                        B = I ? `_${P()}` : "",
                        D = i.useCallback(() => {
                            t.scribe({ action: "impression", section: `top_articles${B}`, data: { context: `time_window_${te(T)}` } });
                        }, [t, B, T]);
                    i.useEffect(() => {
                        D();
                    }, [D]);
                    const O = i.useCallback(
                            (e) => {
                                const t = s.params.articleId,
                                    i = (0, u.Z)(e, (e) => e.type === y.ZP.Article && !!e.content && e.content.articleId),
                                    r = re(l.pathname);
                                S && !t && i ? n.replace(`/i/articles/${C}/${i}${R(T)}`) : S || r || n.replace(`/i/articles/${C}${R(T)}`);
                            },
                            [s.params.articleId, l.pathname, n, S, C, T],
                        ),
                        A = (e) => () => {
                            n.replace(`/i/articles/${C}${R(e)}`);
                        },
                        W = [
                            { text: G({ count: 1 }), onClick: A(1) },
                            { text: G({ count: 2 }), onClick: A(2) },
                            { text: G({ count: 4 }), onClick: A(4) },
                            { text: G({ count: 8 }), onClick: A(8) },
                            { text: G({ count: 24 }), onClick: A(24) },
                        ],
                        M = i.createElement(o.Z, { Icon: c.default, label: Q, renderActionMenu: (e) => i.createElement(r.Z, { items: W, onCloseRequested: e, shouldCloseOnClick: !0 }) }),
                        $ = (e) => e === C,
                        H = (e) => `/i/articles/${e}${R(T)}`,
                        U = () => {
                            e(f.q4), L(!1);
                        },
                        V = () => {
                            const e = H(z.v.FRIENDS_OF_FRIENDS);
                            n.replace(e), U();
                        },
                        j = (e) => i.createElement(a.Z, { actionPrimary: { text: J, onClick: V }, actionSecondary: { text: ee, onClick: U }, headline: Y, icon: d.default, iconColor: "primary", onDismiss: U, shouldDisplay: F, text: X, withMask: !0 }, ie[e]),
                        oe = ne.map((e) => ({
                            key: e,
                            label: e === z.v.FRIENDS_OF_FRIENDS && F && !$(e) ? j(e) : ie[e],
                            isActive: () => $(e),
                            to: { pathname: H(e) },
                            onClick: () => {
                                t.scribe({ action: "click", element: "tab", section: `top_articles${B}` });
                            },
                        })),
                        ae = ((e) => {
                            const t = ne.indexOf(e);
                            return t > -1 ? t : 0;
                        })(C),
                        le = i.useMemo(() => ((e, t = 864e5) => (0, v.Z)({ timelineId: `articlesTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(w.ZP).fetchArticleTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ count: n, cursor: "string" == typeof i ? i : void 0, articleListSeedType: e, timeWindowMillis: t }) }, context: "FETCH_TOP_ARTICLES_TIMELINE", perfKey: "articlesTimeline", formatResponse: k.Z }))(C, te(T || 24)), [C, T]);
                    return i.createElement(i.Fragment, null, i.createElement(h.Z, { title: q }), i.createElement(p.Z, { rightControl: Z ? M : void 0, screenType: "root", showSubtitleOnRoot: !0, subtitle: K({ count: T || 24 }), title: i.createElement(_.Z, { text: q }) }, I ? i.createElement(m.Z, { links: oe, visibleItemIndex: ae }) : null, i.createElement(N, { module: le, onEntriesChanged: O })));
                },
                ae = U(oe);
        },
        463818: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => Z, query: () => T });
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
                _ = n(457311),
                g = n(111677),
                h = n.n(g),
                b = n(883229),
                y = n(952793),
                f = n(615027);
            const w = { context: "ArticleRedirect" },
                k = h().h965157c,
                v = h().cd388852,
                C = u.createElement(_.Z, { header: k, message: v }),
                E = { type: "CustomRetry", content: () => C },
                T = d,
                x = ({ articleEntityId: e }) => {
                    const t = m()(T, { articleEntityId: e }),
                        n = t?.article_result_by_rest_id?.result?.metadata,
                        i = n?.author_results?.result?.core?.screen_name,
                        r = n?.tweet_results?.rest_id,
                        o = i && r ? `/${i}/article/${r}` : null;
                    return o ? u.createElement(f.Z, { to: o }) : C;
                },
                S = (e) => {
                    const t = e.match.params.articleEntityId ?? "",
                        n = (0, y.hC)("responsive_web_twitter_article_redirect_enabled");
                    return t && n ? u.createElement(b.N, { errorConfig: w, fallback: E }, u.createElement(x, { articleEntityId: t })) : C;
                },
                Z = u.memo(S);
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
                u = n(253493),
                p = n(332878),
                m = n(715601),
                _ = n(546608),
                g = n(810641),
                h = n(725516),
                b = n(4691),
                y = n(750085),
                f = n(218951);
            const w = (e, t) => (0, f.Z)({ timelineId: `articleTweetsTimeline-${e}-${t}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchArticleTweetsTimeline, getEndpointParams: ({ count: n, cursor: i }) => ({ articleId: e, articleListSeedType: t, count: n, cursor: "string" == typeof i ? i : void 0 }) }, context: "FETCH_ARTICLE_TWEETS_TIMELINE", perfKey: "articleTweetsTimeline", formatResponse: y.Z });
            var k = n(506063),
                v = n(769471),
                C = n(801184),
                E = n(335632),
                T = n(962741),
                x = n(263863);
            const S = (0, v.Z)({}, (0, E.G)({}), { [T.ZP.Tweet]: { handlers: { [x.Z.TweetWithoutCard]: (0, C.Cw)({ createAdditionalProps: () => ({ withCardLinks: !0 }) }) } } }),
                Z = c().d35d74e4,
                I = c().f88e624e,
                F = l.default.create((e) => ({ contentWrapper: { height: `calc(100vh - ${e.componentDimensions.appBarHeight} - 1px)` }, viewport: { flex: 1, height: "100%", width: "100%" }, withOverflow: { overflow: "auto" } })),
                L = (0, h.Z)(
                    (e) => {
                        const t = Number(e.match.params.articleId),
                            n = (0, o.useHistory)(),
                            l = i.useMemo(() => [F.viewport, !(0, d.HD)(n) && F.withOverflow], [n]);
                        return i.createElement(
                            u.Z,
                            { backLocation: "/i/articles", screenType: "primaryDetail", title: Z, withBottomBorder: !0 },
                            i.createElement(
                                r.Z,
                                { style: F.contentWrapper },
                                i.createElement(r.Z, { "aria-atomic": !0, "aria-live": "polite" }, i.createElement(a.ZP, { visuallyHidden: !0 }, I), i.createElement(_.Z, { id: t, withInternalLink: !1 })),
                                i.createElement(
                                    m.Z,
                                    { style: l },
                                    i.createElement(g.Z, {
                                        anchoring: p.Z,
                                        entryConfiguration: S,
                                        module: w(
                                            t,
                                            (() => {
                                                const {
                                                    match: { params: t },
                                                } = e;
                                                return t?.tabId && t.tabId === k.v.FRIENDS_OF_FRIENDS ? k.v.FRIENDS_OF_FRIENDS : k.v.FOLLOWS;
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
        425376: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
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
            const _ = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: n, headline: g, icon: h, iconColor: b, image: y, onDismiss: f, shouldDisplay: w, text: k, withMask: v = !0 }) => {
                    const [C, E] = i.useState(!1),
                        T = (e) => i.createElement(u.Z, { onDismiss: R, renderContent: () => S(R), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: o.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: v }, e),
                        x = () => i.createElement(p.Z, { onMaskClick: () => R(), type: "center", withMask: !0 }, S(R)),
                        S = (n) => i.createElement(r.Z, { style: [_.root, y && _.rootWithImage] }, Z(), i.createElement(r.Z, { style: _.container }, I(), F(), L({ action: e, dismiss: n, type: t && "primaryFilled" }), L({ action: t, dismiss: n }))),
                        Z = () => {
                            let e = h && i.createElement(h, { style: b ? [_.icon, { color: m.default.theme.colors[b] }] : _.icon });
                            return y && !d.Z.isEnabled && (e = i.createElement(a.Z, { "aria-label": "", aspectMode: s.Z.exact(2), image: y })), e && i.createElement(r.Z, { style: _.graphic }, e);
                        },
                        I = () => i.createElement(l.ZP, { size: "title3", weight: "heavy" }, g),
                        F = () => i.createElement(l.ZP, { color: "gray700", style: _.description }, k),
                        L = ({ action: e, dismiss: t, type: n }) => e && i.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: _.actionButton, type: n }, e.text),
                        R = () => {
                            f && f(), E(!0);
                        };
                    return w && !C ? (n ? T(n) : x()) : n || null;
                };
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var i = n(202784),
                r = n(476984),
                o = n.n(r),
                a = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends i.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: o, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: _, retryMessage: g, retryable: h } = this.props;
                    switch (r) {
                        case c:
                            return h ? i.createElement(l.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : n ? i.createElement(s.m, { failureMessage: n }) : _();
                        case u:
                            return i.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => T });
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
                _ = n(310088),
                g = n(175993),
                h = n(58881),
                b = n(530732);
            const y = d().d2414d31,
                f = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class k extends r.Component {
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: o, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: C, to: E } = this.props,
                        { location: T } = this.state,
                        x = E ? this._getMemoizedLink(E, k) : void 0,
                        S = c ? c(E) : T?.pathname === x?.pathname,
                        Z = h.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? v.pillHoverStyle.backgroundColor : void 0 }),
                        I = g ? "medium" : S ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: Z, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [v.pillStyle] : [v.link]), ...(u && S ? [v.pillActiveStyle] : []), d ? (u ? v.compactPill : v.compactLink) : null, p ? v.roundedRect : null, C], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: u && v.flexGrow }, r.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(S, c, g, u) }, d && v.compactText, g && t && v.focusedText, u && v.pillTextStyle, u && S && v.pillActiveTextStyle, u && c && v.pillHoverTextStyle], weight: I }, e && r.createElement(e, { style: v.icon }), o, g || u ? null : r.createElement(s.Z, { style: S && [v.border, { backgroundColor: l.default.theme.colors[a] }] })), n ? r.createElement(_.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : i ? r.createElement(_.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = l.default.create((e) => ({
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
                C = k,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
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
                                    return r.createElement(C, (0, i.Z)({ viewType: o }, a, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: _, style: d }), t);
                                }),
                            [e, n, l, s, _, c],
                        );
                    return r.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !_ && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, _ && E.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        314948: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles.6054501a.js.map
