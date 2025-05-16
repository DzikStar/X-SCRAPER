(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-9f4db315"],
    {
        341326: (e) => {
            e.exports = { queryId: "imr0xefZmILHTgb6-9pe3g", operationName: "ActionTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        988948: (e) => {
            e.exports = { queryId: "-o1_NYTnNnu9IjsKThUw9A", operationName: "AiTrendByRestId", operationType: "query", metadata: { featureSwitches: ["creator_subscriptions_tweet_preview_api_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        534499: (e) => {
            e.exports = { queryId: "3BZlCEmD645zQ-MpJM19CA", operationName: "ReportTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        360377: (e) => {
            e.exports = { queryId: "_fJD2rm-lJI06lKxbUZT2Q", operationName: "SaveTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        445969: (e) => {
            e.exports = { queryId: "-lnNX56S2YrZYrLzbccFAQ", operationName: "LiveCommerceItemsSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        307859: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
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
            var c = n(341326),
                d = n.n(c),
                u = n(988948),
                m = n.n(u),
                _ = n(534499),
                p = n.n(_),
                b = n(360377),
                f = n.n(b);
            const h = ({ apiClient: e, featureSwitches: t }) => ({
                aiTrendByRestId: (n) =>
                    e.graphQL(m(), { trendId: n.trendId, includePromotedContent: !1, withBirdwatchNotes: !1, withVoice: !1, withCommunity: !1, ...(0, i.d)(t) }).then((e) => {
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
            var a = n(445969),
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
        229333: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(466999),
                o = n(325686),
                a = n(392237),
                s = n(674132);
            const l = n.n(s)().e5b0063d;
            let c = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = l({ title: t });
                    return r.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(i.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), r.createElement(o.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        219770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => U });
            n(136728);
            var r = n(202784),
                i = n(325686),
                o = n(107267),
                a = n(154003),
                s = n(811176),
                l = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(715614),
                m = n(215380),
                _ = n(625271),
                p = n(149170),
                b = n(443781),
                f = n(725516),
                h = n(125363),
                g = n(940847),
                v = n(601576),
                y = n(190286),
                w = n(415506),
                E = n(782642);
            const T = d().ed54bc32,
                k = d().f89bcc50,
                Z = d().ed54bc32,
                C = (e) => {
                    const { trendId: t } = e,
                        [n, i] = r.useState(!1),
                        [o, s] = r.useState(!1),
                        l = (0, E.p)(),
                        c = (0, h.I0)();
                    return (
                        r.useEffect(() => {
                            s(!1);
                        }, [t]),
                        r.createElement(
                            r.Fragment,
                            null,
                            !o &&
                                r.createElement(a.ZP, {
                                    "aria-label": T,
                                    hoverLabel: { label: T },
                                    icon: r.createElement(w.default, { "aria-label": T, style: P.button }),
                                    onClick: () => {
                                        c((0, g.x)(t)), i(!0);
                                    },
                                    size: "medium",
                                    type: "brandText",
                                }),
                            n
                                ? r.createElement(y.Z, {
                                      headline: Z,
                                      onCancel: () => {
                                          i(!1);
                                      },
                                      onConfirm: () => {
                                          s(!0), i(!1), l({ text: k });
                                      },
                                      withCancelButton: !0,
                                  })
                                : null,
                        )
                    );
                },
                P = l.default.create((e) => ({ button: { color: e.colors.text } })),
                x = r.memo(C);
            var I = n(73416),
                S = n(883069),
                D = n(148843);
            const q = d().i2209530,
                O = d().gde7b6b0,
                B = (e) => {
                    const { isSaved: t, trendId: n } = e,
                        i = t ? O : q,
                        o = (0, h.I0)(),
                        s = t ? r.createElement(I.default, { style: N.button }) : r.createElement(S.default, { style: N.button });
                    return r.createElement(a.ZP, {
                        "aria-label": i,
                        hoverLabel: { label: i },
                        icon: s,
                        onClick: () => {
                            o(D.Z.save(n, { trendId: n, isSaved: !t }));
                        },
                        size: "medium",
                        type: "onMediaText",
                    });
                },
                N = l.default.create((e) => ({ button: { marginEnd: e.spaces.space4, color: e.colors.text } })),
                L = r.memo(B);
            var A = n(688715),
                R = n(907552);
            const z = { page: "trending_event_timeline", section: "trending_event_header" },
                M = l.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                F = (e) => {
                    const { hashtag: t, id: n } = e,
                        o = (0, A.ju)(`https://x.com/i/trending/${n}`);
                    return r.createElement(i.Z, { style: M.button }, r.createElement(R.ZP, { scribeNamespace: z, shareText: t, url: o }));
                },
                j = { page: "trending_event_timeline", section: "trending_event_header", element: "contribute_to_birdwatch" },
                $ = d().a9042b6c,
                Q = (e) => {
                    const t = (0, f.z)(),
                        { additionalActions: n, communityNoteUrl: l, id: c, isSaved: y } = e,
                        w = (0, o.useHistory)(),
                        { featureSwitches: E } = r.useContext(b.rC),
                        T = (0, h.I0)(),
                        k = r.useCallback(() => {
                            w.push(`/i/trending/${c}/history`);
                        }, [w, c]),
                        Z = r.useCallback(
                            (e) => {
                                T((0, g.V)(c, e)), (0, v.fz)({ text: "Your input has been submitted." });
                            },
                            [c, T],
                        ),
                        C = d().ef1042f8,
                        P = () => {
                            const e = [{ Icon: u.default, onClick: k, text: $ }, ...n.map((e) => ({ Icon: m.default, onClick: () => Z(e.action_value), text: e.name }))];
                            return (
                                E.isTrue("responsive_web_trends_ui_community_notes_enabled") &&
                                    E.isTrue("responsive_web_birdwatch_note_writing_enabled") &&
                                    l &&
                                    e.push({
                                        Icon: _.default,
                                        onClick: () => {
                                            t.scribe({ ...j, action: "click" });
                                        },
                                        text: C,
                                        link: { pathname: l },
                                    }),
                                e
                            );
                        };
                    return r.createElement(i.Z, { style: H.headerRoot }, r.createElement(L, { isSaved: y, trendId: c }), r.createElement(x, { trendId: c }), r.createElement(F, { id: c }), r.createElement(a.ZP, { icon: r.createElement(p.default, { style: H.button }), renderMenu: (e) => r.createElement(s.Z, { items: P(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "medium", style: H.button, type: "onMediaText" }));
                },
                U = r.memo(Q),
                H = l.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space2 }, headerRoot: { flexDirection: "row" }, button: { marginEnd: e.spaces.space4, color: e.colors.text } }));
        },
        208560: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var r = n(202784),
                i = n(731708),
                o = n(470014),
                a = n(674132),
                s = n.n(a),
                l = n(97882);
            const c = s().cfe836d1,
                d = s().efb132c3;
            s().f27deeea;
            const u = (e) => l.T[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6),
                m = (e, t) => {
                    const n = u(e);
                    return "Preorder" === t ? ((e) => r.createElement(s().I18NFormatMessage, { $i18n: "d6c6deaf" }, r.createElement(i.ZP, { weight: "bold" }, s().e8166cee({ formattedPrice: e }))))(n) : r.createElement(i.ZP, { weight: "bold" }, n);
                },
                _ = (e, t) => {
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
                        h = i?.media_info;
                    if (null == h) return null;
                    const { currentPrice: g, previousPrice: v } = ((e, t) => (t ? { currentPrice: t.price, previousPrice: e } : { currentPrice: e, previousPrice: void 0 }))(l, c),
                        y = ((e) => {
                            if (null != e) return Object.values(e).includes("maskPrice");
                            return !1;
                        })(o);
                    return { formattedDescription: p(b, f), formattedPercentOff: v && !y ? _(g, v) : void 0, formattedPreviousPrice: v && !y ? u(v) : void 0, formattedPrice: y ? void 0 : m(g, r), formattedTitle: d, image: "ApiImage" === h.__typename ? h.original_img_url : "", url: s.url };
                },
                f = (e) => {
                    const { commerceProduct: t, onClick: n, style: i } = e,
                        { product_core_data: a } = t,
                        s = null != a ? b(a) : null;
                    if (s) {
                        const { formattedDescription: e, formattedPercentOff: t, formattedPreviousPrice: a, formattedPrice: l, formattedTitle: c, image: u, url: m } = s,
                            _ = () => {
                                n && n();
                            };
                        return r.createElement(o.Z, { "aria-label": d({ title: c, description: e, price: l }), containerStyle: i, description: e, image: u, imageOverlayText: t, link: m, onClick: _, previousPrice: a, price: l, title: c });
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
            n.d(t, { Z: () => Z });
            var r = n(202784),
                i = n(325686),
                o = n(786998),
                a = n(154003),
                s = n(682474),
                l = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(530243),
                m = n(837020),
                _ = n(521514),
                p = n(390686),
                b = n(32788),
                f = n(443781),
                h = n(602427);
            const g = { component: "dock" },
                v = Object.freeze({ dockedOnScroll: "dock_on_scroll", undockOnScroll: "undock_on_scroll", dismissTap: "dismiss_tap", undockTap: "undock_tap" });
            const y = function (e) {
                    const { featureSwitches: t } = r.useContext(f.rC),
                        n = r.useRef(null),
                        [o, a] = r.useState(!1),
                        [s, l] = r.useState(!1),
                        { onCloseDockComplete: c, onDockingScribeAction: d, render: u, requestDock: m } = e;
                    return (
                        r.useEffect(() => {
                            o && !m && a(!1), o || s === m || (l(m), d({ ...g, action: m ? v.dockedOnScroll : v.undockOnScroll }));
                        }, [o, s, d, m]),
                        r.useEffect(() => {
                            if (!s && o) c && c();
                            else if (!s && n?.current) {
                                const { offsetTop: e } = n.current;
                                h.nI({ featureSwitches: t, top: e });
                            }
                        }, [o, s, t, c]),
                        r.createElement(
                            i.Z,
                            { ref: n },
                            u({
                                closeRequested: o,
                                dockRequested: s,
                                requestClose: function () {
                                    a(!0), l(!1), d({ ...g, action: v.dismissTap });
                                },
                                requestUndock: function () {
                                    l(!1), d({ ...g, action: v.undockTap });
                                },
                            }),
                        )
                    );
                },
                w = d().e839db3a,
                E = d().a7a119ec;
            class T extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isOffscreen: !1 }),
                        (this._render = ({ closeRequested: e, dockRequested: t, requestClose: n, requestUndock: o }) => {
                            const { children: a, placeholder: s } = this.props;
                            return r.createElement(b.Z.Provider, { value: { closeRequested: e, dockRequested: t } }, t && s, r.createElement(i.Z, { style: t ? [k.dockedContainer, this._getDockedBottomStyle()] : void 0 }, t && this._renderDockingControlBar(o, n), a));
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
                    return r.createElement(p.ZP, { onPlacementChange: this._handlePlacementChange, style: k.root }, r.createElement(y, { onCloseDockComplete: n, onDockingScribeAction: i, render: this._render, requestDock: e && !t }));
                }
                _renderDockingControlBar(e, t) {
                    const { subtitle: n, title: i } = this.props;
                    return r.createElement(o.Z, { rightControl: this._renderDockingControls(e, t), subtitle: n, title: i });
                }
                _renderDockingControls(e, t) {
                    return r.createElement(i.Z, { style: k.dockingControls }, r.createElement(a.ZP, { "aria-label": E, icon: r.createElement(u.default, null), onPress: e, type: "brandText" }), r.createElement(a.ZP, { "aria-label": w, icon: r.createElement(m.default, null), onPress: t, type: "brandText" }));
                }
            }
            T.defaultProps = { placeholder: r.createElement(s.Z, { ratio: l.default.theme.aspectRatios.landscape }), visibleThreshold: 0 };
            const k = l.default.create((e) => ({ root: { zIndex: 1 }, dockedContainer: { bottom: 0, end: 0, marginEnd: e.spaces.space20, boxShadow: e.boxShadows.small, maxWidth: _.Z.columnWidths.secondary.normal, position: "fixed", width: _.Z.columnWidths.secondary.normal }, dockingControls: { flexDirection: "row", alignItems: "baseline" } })),
                Z = T;
        },
        414939: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(202784),
                i = n(325686),
                o = n(392237);
            class a extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(i.Z, { style: s.root });
                }
            }
            const s = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
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
                    const m = t || o.Z,
                        _ = a && !(0, s.ZP)();
                    return i.createElement(m, (0, r.Z)({}, u, { style: [_ && !d && l.root, c] }), e, _ ? n : null);
                };
        },
        111685: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var r = n(202784),
                i = n(325686),
                o = n(731708),
                a = n(470397),
                s = n(392237),
                l = n(741692),
                c = n(601413),
                d = n(284702),
                u = n(310452),
                m = n(354149),
                _ = n(674132),
                p = n.n(_),
                b = n(946409);
            const f = s.default.create((e) => ({ description: { marginTop: e.spaces.space12 } })),
                h = (e, t, n) =>
                    n && !d.Z.VIDEO_TYPES.includes(t)
                        ? ((e) => {
                              const t = e.url ? (0, b.Mh)(e.url)?.pathname : void 0;
                              return r.createElement(o.ZP, { color: "gray700", link: t }, e.text);
                          })(n)
                        : e && d.Z.VIDEO_TYPES.includes(t)
                          ? ((e, t) => r.createElement(o.ZP, { color: "gray700", link: e.permalink }, g(t, { screenName: r.createElement(c.Z, { screenName: e.user.screen_name }) })))(e, t)
                          : null,
                g = (e, t) => {
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
                        _ = c ? u.ZP.descriptionTextParts(c, d) : [];
                    return r.createElement(
                        i.Z,
                        { style: f.description },
                        _.length
                            ? r.createElement(
                                  o.ZP,
                                  null,
                                  _.map((e, t) => r.createElement(m.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        h(e, s, a),
                        l ? r.createElement(o.ZP, { color: "gray700" }, l) : null,
                    );
                },
                y = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, timeString: { flexShrink: 0 }, timeStringMargin: { marginTop: e.spaces.space12 }, remindMeButton: { marginTop: e.spaces.space12 } })),
                w = ({ author: e, coverTweet: t, description: n, descriptionEntities: s, imageAttribution: c, isTOO: d, mediaType: u, pivotText: m, preTitle: _, remindMeButton: p, time: b, title: f, withHashflags: h }) => {
                    const g = () => (e ? r.createElement(i.Z, null, r.createElement(l.S3, { author: e, size: "body", withLink: !0, withScreenName: !0 }), b ? w(!0) : null) : null),
                        w = (e = !1) => r.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "body", style: [y.timeString, e && y.timeStringMargin] }, b),
                        E = () => (_ ? r.createElement(a.Z, null, r.createElement(o.ZP, { color: "gray700", numberOfLines: 1, size: "body", weight: "bold" }, _), b ? w() : null) : null);
                    return r.createElement(r.Fragment, null, d && _ ? E() : g() || E(), r.createElement(o.ZP, { dir: "auto", size: "title4", style: y.title, weight: "heavy", withHashflags: h }, f), n || t || c ? r.createElement(v, { coverTweet: t, description: n, descriptionEntities: s, imageAttribution: c, mediaType: u, pivotText: m }) : null, p ? r.createElement(i.Z, { style: y.remindMeButton }, p) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-9f4db315.3b29a1da.js.map
