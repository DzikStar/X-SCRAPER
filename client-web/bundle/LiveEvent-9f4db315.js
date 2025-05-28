(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-9f4db315"],
    {
        394826: (e) => {
            e.exports = { queryId: "imr0xefZmILHTgb6-9pe3g", operationName: "ActionTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        572524: (e) => {
            e.exports = { queryId: "5Ppv9KHPbZ5aITaeSHTIng", operationName: "AiTrendByRestId", operationType: "query", metadata: { featureSwitches: ["creator_subscriptions_tweet_preview_api_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        64129: (e) => {
            e.exports = { queryId: "3BZlCEmD645zQ-MpJM19CA", operationName: "ReportTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        671735: (e) => {
            e.exports = { queryId: "_fJD2rm-lJI06lKxbUZT2Q", operationName: "SaveTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        951260: (e) => {
            e.exports = { queryId: "-lnNX56S2YrZYrLzbccFAQ", operationName: "LiveCommerceItemsSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        307859: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var r = n(506899),
                i = n(703710),
                o = n(506363),
                a = n(171697);
            const s = new r.fK.Entity(
                "aitrends",
                {},
                {
                    idAttribute: "rest_id",
                    processStrategy: (e, t, n) => {
                        const { page: r, ...i } = e,
                            a = r,
                            { media_carousel: s } = a || {};
                        if (s && s.length > 0) {
                            const e = s.reduce((e, { media_id: t, tweet_results: n }) => {
                                const r = n.result;
                                return r && "Tweet" === r?.__typename ? [...e, { media_id: t, tweet: r }] : e;
                            }, []);
                            a.media_carousel = e;
                        }
                        const l = { page: a, ...i };
                        return (0, o.ZP)(l, t, n);
                    },
                },
            );
            s.define({ page: { media_carousel: [{ tweet: a.Z }] } });
            const l = s;
            var c = n(394826),
                d = n.n(c),
                u = n(572524),
                _ = n.n(u),
                m = n(64129),
                p = n.n(m),
                b = n(671735),
                f = n.n(b);
            const g = ({ apiClient: e, featureSwitches: t }) => ({
                aiTrendByRestId: (n) =>
                    e.graphQL(_(), { trendId: n.trendId, includePromotedContent: !1, withBirdwatchNotes: !1, withVoice: !1, withCommunity: !1, ...(0, i.d)(t) }).then((e) => {
                        const t = e.ai_trend_by_rest_id?.result || {},
                            { birdwatch_pivot: n, ...i } = t,
                            o = { ...i, birdwatch_pivot: n ? (0, a.I)(n) : void 0 };
                        return (0, r.Fv)(o, l);
                    }),
                saveTrend: (t) => e.graphQL(f(), { id: t.trendId, is_saved: t.isSaved }).then((e) => e.aitrend_saved_put),
                reportTrend: (t) => e.graphQL(p(), { id: t.trendId }).then((e) => !!e.aitrend_spam_feedback_put),
                actionTrend: (t) => e.graphQL(d(), { id: t.trendId, value: t.action }).then((e) => !!e.action_trend),
            });
        },
        772826: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(506899),
                i = n(414742);
            const o = new r.fK.Entity("commerceItems", {}, { idAttribute: (e) => e.product_core_data?.product_metadata.product_key ?? "" });
            var a = n(951260),
                s = n.n(a);
            const l = (0, i.kj)((e) => {
                    const t = e?.live_event_by_rest_id?.shop_grid_commerce_item_slice;
                    return !t;
                }, "GQL Live Commerce: Failed to fetch Live Commerce Slice"),
                c = { result: [], entities: {}, slice_info: {} },
                d = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchLiveCommerceItemsSlice: (t) =>
                        t
                            ? e.graphQL(s(), t, l).then((e) => {
                                  const t = e?.live_event_by_rest_id?.shop_grid_commerce_item_slice;
                                  if (t) {
                                      const { entities: e, result: n } = (0, r.Fv)(t.items, [o]);
                                      return { result: n, entities: e, slice_info: t.slice_info };
                                  }
                                  return c;
                              })
                            : Promise.resolve(c),
                });
        },
        740527: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(769471),
                i = n(934309),
                o = n(750085),
                a = n(401388),
                s = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, a.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        r = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: r, facepile: i, topic: o, ...a } = n,
                                l = i && (0, s.Zn)(e, i);
                            return { ...a, topicId: (0, s.S0)(e, o), facepile: l };
                        })(t, e),
                        i = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, s.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: r, navBar: i.navBar && i.navBar, title: i.title, subtitle: i.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, o.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, o.Z)(n.initialTimeline.timeline.timeline) : (0, o.Z)(i.cY);
                    var n;
                    const { globalObjects: a, pageConfiguration: s } = c(e);
                    return { ...t, globalObjects: (0, r.Z)(a, t.globalObjects), pageConfiguration: s };
                };
        },
        219770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => H });
            n(136728);
            var r = n(202784),
                i = n(325686),
                o = n(107267),
                a = n(154003),
                s = n(811176),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(715614),
                _ = n(215380),
                m = n(625271),
                p = n(149170),
                b = n(443781),
                f = n(725516),
                g = n(125363),
                h = n(940847),
                v = n(601576),
                w = n(190286),
                y = n(415506),
                T = n(782642);
            const k = d().ed54bc32,
                E = d().f89bcc50,
                C = d().ed54bc32,
                Z = (e) => {
                    const { trendId: t } = e,
                        [n, i] = r.useState(!1),
                        [o, s] = r.useState(!1),
                        l = (0, T.p)(),
                        c = (0, g.I0)();
                    return (
                        r.useEffect(() => {
                            s(!1);
                        }, [t]),
                        r.createElement(
                            r.Fragment,
                            null,
                            !o &&
                                r.createElement(a.ZP, {
                                    "aria-label": k,
                                    hoverLabel: { label: k },
                                    icon: r.createElement(y.default, { "aria-label": k, style: P.button }),
                                    onClick: () => {
                                        c((0, h.x)(t)), i(!0);
                                    },
                                    size: "medium",
                                    type: "brandText",
                                }),
                            n
                                ? r.createElement(w.Z, {
                                      headline: C,
                                      onCancel: () => {
                                          i(!1);
                                      },
                                      onConfirm: () => {
                                          s(!0), i(!1), l({ text: E });
                                      },
                                      withCancelButton: !0,
                                  })
                                : null,
                        )
                    );
                },
                P = l.default.create((e) => ({ button: { color: e.colors.text } })),
                S = r.memo(Z);
            var I = n(73416),
                x = n(883069),
                q = n(148843);
            const D = d().i2209530,
                O = d().gde7b6b0,
                B = (e) => {
                    const { isSaved: t, trendId: n } = e,
                        i = t ? O : D,
                        o = (0, g.I0)(),
                        s = t ? r.createElement(I.default, { style: N.button }) : r.createElement(x.default, { style: N.button });
                    return r.createElement(a.ZP, {
                        "aria-label": i,
                        hoverLabel: { label: i },
                        icon: s,
                        onClick: () => {
                            o(q.Z.save(n, { trendId: n, isSaved: !t }));
                        },
                        size: "medium",
                        type: "onMediaText",
                    });
                },
                N = l.default.create((e) => ({ button: { marginEnd: e.spaces.space4, color: e.colors.text } })),
                L = r.memo(B);
            var R = n(688715),
                A = n(907552);
            const z = { page: "trending_event_timeline", section: "trending_event_header" },
                M = l.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                F = (e) => {
                    const { hashtag: t, id: n } = e,
                        o = (0, R.ju)(`https://x.com/i/trending/${n}`);
                    return r.createElement(i.Z, { style: M.button }, r.createElement(A.ZP, { scribeNamespace: z, shareText: t, url: o }));
                },
                j = { page: "trending_event_timeline", section: "trending_event_header", element: "contribute_to_birdwatch" },
                Q = d().a9042b6c,
                $ = (e) => {
                    const t = (0, f.z)(),
                        { additionalActions: n, communityNoteUrl: l, id: c, isSaved: w } = e,
                        y = (0, o.useHistory)(),
                        { featureSwitches: T } = r.useContext(b.rC),
                        k = (0, g.I0)(),
                        E = r.useCallback(() => {
                            y.push(`/i/trending/${c}/history`);
                        }, [y, c]),
                        C = r.useCallback(
                            (e) => {
                                k((0, h.V)(c, e)), (0, v.fz)({ text: "Your input has been submitted." });
                            },
                            [c, k],
                        ),
                        Z = d().ef1042f8,
                        P = () => {
                            const e = [{ Icon: u.default, onClick: E, text: Q }, ...n.map((e) => ({ Icon: _.default, onClick: () => C(e.action_value), text: e.name }))];
                            return (
                                T.isTrue("responsive_web_trends_ui_community_notes_enabled") &&
                                    T.isTrue("responsive_web_birdwatch_note_writing_enabled") &&
                                    l &&
                                    e.push({
                                        Icon: m.default,
                                        onClick: () => {
                                            t.scribe({ ...j, action: "click" });
                                        },
                                        text: Z,
                                        link: { pathname: l },
                                    }),
                                e
                            );
                        };
                    return r.createElement(i.Z, { style: U.headerRoot }, r.createElement(L, { isSaved: w, trendId: c }), r.createElement(S, { trendId: c }), r.createElement(F, { id: c }), r.createElement(a.ZP, { icon: r.createElement(p.default, { style: U.button }), renderMenu: (e) => r.createElement(s.Z, { items: P(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "medium", style: U.button, type: "onMediaText" }));
                },
                H = r.memo($),
                U = l.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space2 }, headerRoot: { flexDirection: "row" }, button: { marginEnd: e.spaces.space4, color: e.colors.text } }));
        },
        208560: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var r = n(202784),
                i = n(731708),
                o = n(470014),
                a = n(111677),
                s = n.n(a),
                l = n(97882);
            const c = s().cfe836d1,
                d = s().efb132c3;
            s().f27deeea;
            const u = (e) => l.T[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6),
                _ = (e, t) => {
                    const n = u(e);
                    return "Preorder" === t ? ((e) => r.createElement(s().I18NFormatMessage, { $i18n: "d6c6deaf" }, r.createElement(i.ZP, { weight: "bold" }, s().e8166cee({ formattedPrice: e }))))(n) : r.createElement(i.ZP, { weight: "bold" }, n);
                },
                m = (e, t) => {
                    const n = parseInt(t.micro_value, 10),
                        r = parseInt(e.micro_value, 10),
                        i = Math.round(((n - r) / n) * 100);
                    return c({ percent: i });
                },
                p = (e, t, n) => (e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0),
                b = (e) => {
                    const { product_details: t, product_identifiers: n } = e,
                        { availability: r, cover_media: i, custom_fields: o, description: a, external_url: s, price: l, product_sale: c, title: d } = t,
                        b = n?.custom_product_type,
                        f = n?.google_product_category,
                        g = i?.media_info;
                    if (null == g) return null;
                    const { currentPrice: h, previousPrice: v } = ((e, t) => (t ? { currentPrice: t.price, previousPrice: e } : { currentPrice: e, previousPrice: void 0 }))(l, c),
                        w = ((e) => {
                            if (null != e) return Object.values(e).includes("maskPrice");
                            return !1;
                        })(o);
                    return { formattedDescription: p(b, f), formattedPercentOff: v && !w ? m(h, v) : void 0, formattedPreviousPrice: v && !w ? u(v) : void 0, formattedPrice: w ? void 0 : _(h, r), formattedTitle: d, image: "ApiImage" === g.__typename ? g.original_img_url : "", url: s.url };
                },
                f = (e) => {
                    const { commerceProduct: t, onClick: n, style: i } = e,
                        { product_core_data: a } = t,
                        s = null != a ? b(a) : null;
                    if (s) {
                        const { formattedDescription: e, formattedPercentOff: t, formattedPreviousPrice: a, formattedPrice: l, formattedTitle: c, image: u, url: _ } = s,
                            m = () => {
                                n && n();
                            };
                        return r.createElement(o.Z, { "aria-label": d({ title: c, description: e, price: l }), containerStyle: i, description: e, image: u, imageOverlayText: t, link: _, onClick: m, previousPrice: a, price: l, title: c });
                    }
                    return null;
                };
        },
        32788: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            const r = n(202784).createContext({ dockRequested: !1, closeRequested: !1 });
        },
        162246: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var r = n(202784),
                i = n(325686),
                o = n(786998),
                a = n(154003),
                s = n(682474),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(530243),
                _ = n(837020),
                m = n(521514),
                p = n(390686),
                b = n(32788),
                f = n(443781),
                g = n(602427);
            const h = { component: "dock" },
                v = Object.freeze({ dockedOnScroll: "dock_on_scroll", undockOnScroll: "undock_on_scroll", dismissTap: "dismiss_tap", undockTap: "undock_tap" });
            const w = function (e) {
                    const { featureSwitches: t } = r.useContext(f.rC),
                        n = r.useRef(null),
                        [o, a] = r.useState(!1),
                        [s, l] = r.useState(!1),
                        { onCloseDockComplete: c, onDockingScribeAction: d, render: u, requestDock: _ } = e;
                    return (
                        r.useEffect(() => {
                            o && !_ && a(!1), o || s === _ || (l(_), d({ ...h, action: _ ? v.dockedOnScroll : v.undockOnScroll }));
                        }, [o, s, d, _]),
                        r.useEffect(() => {
                            if (!s && o) c && c();
                            else if (!s && n?.current) {
                                const { offsetTop: e } = n.current;
                                g.nI({ featureSwitches: t, top: e });
                            }
                        }, [o, s, t, c]),
                        r.createElement(
                            i.Z,
                            { ref: n },
                            u({
                                closeRequested: o,
                                dockRequested: s,
                                requestClose: function () {
                                    a(!0), l(!1), d({ ...h, action: v.dismissTap });
                                },
                                requestUndock: function () {
                                    l(!1), d({ ...h, action: v.undockTap });
                                },
                            }),
                        )
                    );
                },
                y = d().e839db3a,
                T = d().a7a119ec;
            class k extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isOffscreen: !1 }),
                        (this._render = ({ closeRequested: e, dockRequested: t, requestClose: n, requestUndock: o }) => {
                            const { children: a, placeholder: s } = this.props;
                            return r.createElement(b.Z.Provider, { value: { closeRequested: e, dockRequested: t } }, t && s, r.createElement(i.Z, { style: t ? [E.dockedContainer, this._getDockedBottomStyle()] : void 0 }, t && this._renderDockingControlBar(o, n), a));
                        }),
                        (this._handlePlacementChange = (e) => {
                            const { isDisabled: t, visibleThreshold: n } = this.props;
                            t || this.setState({ isOffscreen: e.visibleFraction() <= n });
                        }),
                        (this._getDockedBottomStyle = () => {
                            const { dockBottomOffset: e } = this.props;
                            return { marginBottom: e };
                        });
                }
                render() {
                    const { isOffscreen: e } = this.state,
                        { isDisabled: t, onCloseDockComplete: n, onDockingScribeAction: i } = this.props;
                    return r.createElement(p.ZP, { onPlacementChange: this._handlePlacementChange, style: E.root }, r.createElement(w, { onCloseDockComplete: n, onDockingScribeAction: i, render: this._render, requestDock: e && !t }));
                }
                _renderDockingControlBar(e, t) {
                    const { subtitle: n, title: i } = this.props;
                    return r.createElement(o.Z, { rightControl: this._renderDockingControls(e, t), subtitle: n, title: i });
                }
                _renderDockingControls(e, t) {
                    return r.createElement(i.Z, { style: E.dockingControls }, r.createElement(a.ZP, { "aria-label": T, icon: r.createElement(u.default, null), onPress: e, type: "brandText" }), r.createElement(a.ZP, { "aria-label": y, icon: r.createElement(_.default, null), onPress: t, type: "brandText" }));
                }
            }
            k.defaultProps = { placeholder: r.createElement(s.Z, { ratio: l.default.theme.aspectRatios.landscape }), visibleThreshold: 0 };
            const E = l.default.create((e) => ({ root: { zIndex: 1 }, dockedContainer: { bottom: 0, end: 0, marginEnd: e.spaces.space20, boxShadow: e.boxShadows.small, maxWidth: m.Z.columnWidths.secondary.normal, position: "fixed", width: m.Z.columnWidths.secondary.normal }, dockingControls: { flexDirection: "row", alignItems: "baseline" } })),
                C = k;
        },
        789831: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(807896),
                i = n(202784),
                o = n(325686),
                a = n(392237),
                s = n(655352);
            const l = a.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: a = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const _ = t || o.Z,
                        m = a && !(0, s.ZP)();
                    return i.createElement(_, (0, r.Z)({}, u, { style: [m && !d && l.root, c] }), e, m ? n : null);
                };
        },
        111685: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => y });
            var r = n(202784),
                i = n(325686),
                o = n(731708),
                a = n(470397),
                s = n(392237),
                l = n(741692),
                c = n(601413),
                d = n(284702),
                u = n(310452),
                _ = n(354149),
                m = n(111677),
                p = n.n(m),
                b = n(946409);
            const f = s.default.create((e) => ({ description: { marginTop: e.spaces.space12 } })),
                g = (e, t, n) =>
                    n && !d.Z.VIDEO_TYPES.includes(t)
                        ? ((e) => {
                              const t = e.url ? (0, b.Mh)(e.url)?.pathname : void 0;
                              return r.createElement(o.ZP, { color: "gray700", link: t }, e.text);
                          })(n)
                        : e && d.Z.VIDEO_TYPES.includes(t)
                          ? ((e, t) => r.createElement(o.ZP, { color: "gray700", link: e.permalink }, h(t, { screenName: r.createElement(c.Z, { screenName: e.user.screen_name }) })))(e, t)
                          : null,
                h = (e, t) => {
                    switch (e) {
                        case "animated_gif":
                            return r.createElement(p().I18NFormatMessage, { $i18n: "a5d9d071" }, t.screenName);
                        case "video":
                        case "vine":
                            return r.createElement(p().I18NFormatMessage, { $i18n: "i9606e33" }, t.screenName);
                        default:
                            return r.createElement(p().I18NFormatMessage, { $i18n: "i1a64d47" }, t.screenName);
                    }
                },
                v = ({ coverTweet: e, description: t, descriptionEntities: n, imageAttribution: a, mediaType: s, pivotText: l }) => {
                    const c = t ? t.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(n),
                        m = c ? u.ZP.descriptionTextParts(c, d) : [];
                    return r.createElement(
                        i.Z,
                        { style: f.description },
                        m.length
                            ? r.createElement(
                                  o.ZP,
                                  null,
                                  m.map((e, t) => r.createElement(_.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        g(e, s, a),
                        l ? r.createElement(o.ZP, { color: "gray700" }, l) : null,
                    );
                },
                w = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, timeString: { flexShrink: 0 }, timeStringMargin: { marginTop: e.spaces.space12 }, remindMeButton: { marginTop: e.spaces.space12 } })),
                y = ({ author: e, coverTweet: t, description: n, descriptionEntities: s, imageAttribution: c, isTOO: d, mediaType: u, pivotText: _, preTitle: m, remindMeButton: p, time: b, title: f, withHashflags: g }) => {
                    const h = () => (e ? r.createElement(i.Z, null, r.createElement(l.S3, { author: e, size: "body", withLink: !0, withScreenName: !0 }), b ? y(!0) : null) : null),
                        y = (e = !1) => r.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "body", style: [w.timeString, e && w.timeStringMargin] }, b),
                        T = () => (m ? r.createElement(a.Z, null, r.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "body", weight: "bold" }, m), b ? y() : null) : null);
                    return r.createElement(r.Fragment, null, d && m ? T() : h() || T(), r.createElement(o.ZP, { dir: "auto", size: "title4", style: w.title, weight: "heavy", withHashflags: g }, f), n || t || c ? r.createElement(v, { coverTweet: t, description: n, descriptionEntities: s, imageAttribution: c, mediaType: u, pivotText: _ }) : null, p ? r.createElement(i.Z, { style: w.remindMeButton }, p) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-9f4db315.7f2eac9a.js.map
