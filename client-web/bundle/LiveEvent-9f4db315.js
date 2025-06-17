(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-9f4db315"],
    {
        394826: (e) => {
            e.exports = { queryId: "imr0xefZmILHTgb6-9pe3g", operationName: "ActionTrend", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        572524: (e) => {
            e.exports = { queryId: "_w_r-4r5HmexfYoVEhuGnw", operationName: "AiTrendByRestId", operationType: "query", metadata: { featureSwitches: ["creator_subscriptions_tweet_preview_api_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
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
            n.d(t, { Z: () => y });
            var i = n(506899),
                a = n(703710),
                r = n(506363),
                s = n(171697);
            const o = new i.fK.Entity(
                "aitrends",
                {},
                {
                    idAttribute: "rest_id",
                    processStrategy: (e, t, n) => {
                        const { page: i, ...a } = e,
                            s = i,
                            { media_carousel: o } = s || {};
                        if (o && o.length > 0) {
                            const e = o.reduce((e, { media_id: t, tweet_results: n }) => {
                                const i = n.result;
                                return i && "Tweet" === i?.__typename ? [...e, { media_id: t, tweet: i }] : e;
                            }, []);
                            s.media_carousel = e;
                        }
                        const l = { page: s, ...a };
                        return (0, r.ZP)(l, t, n);
                    },
                },
            );
            o.define({ page: { media_carousel: [{ tweet: s.Z }] } });
            const l = o;
            var c = n(394826),
                d = n.n(c),
                u = n(572524),
                p = n.n(u),
                _ = n(64129),
                m = n.n(_),
                h = n(671735),
                b = n.n(h);
            const y = ({ apiClient: e, featureSwitches: t }) => ({
                aiTrendByRestId: (n) =>
                    e.graphQL(p(), { trendId: n.trendId, includePromotedContent: !1, withBirdwatchNotes: !1, withVoice: !1, withCommunity: !1, ...(0, a.d)(t) }).then((e) => {
                        const t = e.ai_trend_by_rest_id?.result || {},
                            { birdwatch_pivot: n, ...a } = t,
                            r = { ...a, birdwatch_pivot: n ? (0, s.I)(n) : void 0 };
                        return (0, i.Fv)(r, l);
                    }),
                saveTrend: (t) => e.graphQL(b(), { id: t.trendId, is_saved: t.isSaved }).then((e) => e.aitrend_saved_put),
                reportTrend: (t) => e.graphQL(m(), { id: t.trendId }).then((e) => !!e.aitrend_spam_feedback_put),
                actionTrend: (t) => e.graphQL(d(), { id: t.trendId, value: t.action }).then((e) => !!e.action_trend),
            });
        },
        772826: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var i = n(506899),
                a = n(414742);
            const r = new i.fK.Entity("commerceItems", {}, { idAttribute: (e) => e.product_core_data?.product_metadata.product_key ?? "" });
            var s = n(951260),
                o = n.n(s);
            const l = (0, a.kj)((e) => {
                    const t = e?.live_event_by_rest_id?.shop_grid_commerce_item_slice;
                    return !t;
                }, "GQL Live Commerce: Failed to fetch Live Commerce Slice"),
                c = { result: [], entities: {}, slice_info: {} },
                d = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchLiveCommerceItemsSlice: (t) =>
                        t
                            ? e.graphQL(o(), t, l).then((e) => {
                                  const t = e?.live_event_by_rest_id?.shop_grid_commerce_item_slice;
                                  if (t) {
                                      const { entities: e, result: n } = (0, i.Fv)(t.items, [r]);
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
            var i = n(769471),
                a = n(934309),
                r = n(750085),
                s = n(401388),
                o = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, s.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: a, topic: r, ...s } = n,
                                l = a && (0, o.Zn)(e, a);
                            return { ...s, topicId: (0, o.S0)(e, r), facepile: l };
                        })(t, e),
                        a = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, o.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: a.navBar && a.navBar, title: a.title, subtitle: a.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, r.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, r.Z)(n.initialTimeline.timeline.timeline) : (0, r.Z)(a.cY);
                    var n;
                    const { globalObjects: s, pageConfiguration: o } = c(e);
                    return { ...t, globalObjects: (0, i.Z)(s, t.globalObjects), pageConfiguration: o };
                };
        },
        229333: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var i = n(202784),
                a = n(466999),
                r = n(325686),
                s = n(392237),
                o = n(111677);
            const l = n.n(o)().e5b0063d;
            let c = 0;
            class d extends i.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = l({ title: t });
                    return i.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, i.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), i.createElement(r.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        219770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => M });
            n(136728);
            var i = n(202784),
                a = n(325686),
                r = n(107267),
                s = n(154003),
                o = n(811176),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(715614),
                p = n(215380),
                _ = n(625271),
                m = n(149170),
                h = n(443781),
                b = n(725516),
                y = n(125363),
                g = n(940847),
                f = n(601576),
                P = n(190286),
                v = n(415506),
                E = n(782642);
            const k = d().ed54bc32,
                I = d().f89bcc50,
                w = d().ed54bc32,
                S = (e) => {
                    const { trendId: t } = e,
                        [n, a] = i.useState(!1),
                        [r, o] = i.useState(!1),
                        l = (0, E.p)(),
                        c = (0, y.I0)();
                    return (
                        i.useEffect(() => {
                            o(!1);
                        }, [t]),
                        i.createElement(
                            i.Fragment,
                            null,
                            !r &&
                                i.createElement(s.ZP, {
                                    "aria-label": k,
                                    hoverLabel: { label: k },
                                    icon: i.createElement(v.default, { "aria-label": k, style: T.button }),
                                    onClick: () => {
                                        c((0, g.x)(t)), a(!0);
                                    },
                                    size: "medium",
                                    type: "brandText",
                                }),
                            n
                                ? i.createElement(P.Z, {
                                      headline: w,
                                      onCancel: () => {
                                          a(!1);
                                      },
                                      onConfirm: () => {
                                          o(!0), a(!1), l({ text: I });
                                      },
                                      withCancelButton: !0,
                                  })
                                : null,
                        )
                    );
                },
                T = l.default.create((e) => ({ button: { color: e.colors.text } })),
                C = i.memo(S);
            var A = n(73416),
                Z = n(883069),
                x = n(148843);
            const q = d().i2209530,
                N = d().gde7b6b0,
                D = (e) => {
                    const { isSaved: t, trendId: n } = e,
                        a = t ? N : q,
                        r = (0, y.I0)(),
                        o = t ? i.createElement(A.default, { style: L.button }) : i.createElement(Z.default, { style: L.button });
                    return i.createElement(s.ZP, {
                        "aria-label": a,
                        hoverLabel: { label: a },
                        icon: o,
                        onClick: () => {
                            r(x.Z.save(n, { trendId: n, isSaved: !t }));
                        },
                        size: "medium",
                        type: "onMediaText",
                    });
                },
                L = l.default.create((e) => ({ button: { marginEnd: e.spaces.space4, color: e.colors.text } })),
                U = i.memo(D);
            var F = n(688715),
                O = n(907552);
            const B = { page: "trending_event_timeline", section: "trending_event_header" },
                R = l.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                G = (e) => {
                    const { hashtag: t, id: n } = e,
                        r = (0, F.ju)(`https://x.com/i/trending/${n}`);
                    return i.createElement(a.Z, { style: R.button }, i.createElement(O.ZP, { scribeNamespace: B, shareText: t, url: r }));
                },
                z = { page: "trending_event_timeline", section: "trending_event_header", element: "contribute_to_birdwatch" },
                Y = d().a9042b6c,
                V = (e) => {
                    const t = (0, b.z)(),
                        { additionalActions: n, communityNoteUrl: l, id: c, isSaved: P } = e,
                        v = (0, r.useHistory)(),
                        { featureSwitches: E } = i.useContext(h.rC),
                        k = (0, y.I0)(),
                        I = i.useCallback(() => {
                            v.push(`/i/trending/${c}/history`);
                        }, [v, c]),
                        w = i.useCallback(
                            (e) => {
                                k((0, g.V)(c, e)), (0, f.fz)({ text: "Your input has been submitted." });
                            },
                            [c, k],
                        ),
                        S = d().ef1042f8,
                        T = () => {
                            const e = [{ Icon: u.default, onClick: I, text: Y }, ...n.map((e) => ({ Icon: p.default, onClick: () => w(e.action_value), text: e.name }))];
                            return (
                                E.isTrue("responsive_web_trends_ui_community_notes_enabled") &&
                                    E.isTrue("responsive_web_birdwatch_note_writing_enabled") &&
                                    l &&
                                    e.push({
                                        Icon: _.default,
                                        onClick: () => {
                                            t.scribe({ ...z, action: "click" });
                                        },
                                        text: S,
                                        link: { pathname: l },
                                    }),
                                e
                            );
                        };
                    return i.createElement(a.Z, { style: H.headerRoot }, i.createElement(U, { isSaved: P, trendId: c }), i.createElement(C, { trendId: c }), i.createElement(G, { id: c }), i.createElement(s.ZP, { icon: i.createElement(m.default, { style: H.button }), renderMenu: (e) => i.createElement(o.Z, { items: T(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "medium", style: H.button, type: "onMediaText" }));
                },
                M = i.memo(V),
                H = l.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space2 }, headerRoot: { flexDirection: "row" }, button: { marginEnd: e.spaces.space4, color: e.colors.text } }));
        },
        208560: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => b });
            var i = n(202784),
                a = n(731708),
                r = n(470014),
                s = n(111677),
                o = n.n(s),
                l = n(97882);
            const c = o().cfe836d1,
                d = o().efb132c3;
            o().f27deeea;
            const u = (e) => l.T[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6),
                p = (e, t) => {
                    const n = u(e);
                    return "Preorder" === t ? ((e) => i.createElement(o().I18NFormatMessage, { $i18n: "d6c6deaf" }, i.createElement(a.ZP, { weight: "bold" }, o().e8166cee({ formattedPrice: e }))))(n) : i.createElement(a.ZP, { weight: "bold" }, n);
                },
                _ = (e, t) => {
                    const n = parseInt(t.micro_value, 10),
                        i = parseInt(e.micro_value, 10),
                        a = Math.round(((n - i) / n) * 100);
                    return c({ percent: a });
                },
                m = (e, t, n) => (e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0),
                h = (e) => {
                    const { product_details: t, product_identifiers: n } = e,
                        { availability: i, cover_media: a, custom_fields: r, description: s, external_url: o, price: l, product_sale: c, title: d } = t,
                        h = n?.custom_product_type,
                        b = n?.google_product_category,
                        y = a?.media_info;
                    if (null == y) return null;
                    const { currentPrice: g, previousPrice: f } = ((e, t) => (t ? { currentPrice: t.price, previousPrice: e } : { currentPrice: e, previousPrice: void 0 }))(l, c),
                        P = ((e) => {
                            if (null != e) return Object.values(e).includes("maskPrice");
                            return !1;
                        })(r);
                    return { formattedDescription: m(h, b), formattedPercentOff: f && !P ? _(g, f) : void 0, formattedPreviousPrice: f && !P ? u(f) : void 0, formattedPrice: P ? void 0 : p(g, i), formattedTitle: d, image: "ApiImage" === y.__typename ? y.original_img_url : "", url: o.url };
                },
                b = (e) => {
                    const { commerceProduct: t, onClick: n, style: a } = e,
                        { product_core_data: s } = t,
                        o = null != s ? h(s) : null;
                    if (o) {
                        const { formattedDescription: e, formattedPercentOff: t, formattedPreviousPrice: s, formattedPrice: l, formattedTitle: c, image: u, url: p } = o,
                            _ = () => {
                                n && n();
                            };
                        return i.createElement(r.Z, { "aria-label": d({ title: c, description: e, price: l }), containerStyle: a, description: e, image: u, imageOverlayText: t, link: p, onClick: _, previousPrice: s, price: l, title: c });
                    }
                    return null;
                };
        },
        32788: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            const i = n(202784).createContext({ dockRequested: !1, closeRequested: !1 });
        },
        162246: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var i = n(202784),
                a = n(325686),
                r = n(786998),
                s = n(154003),
                o = n(682474),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(530243),
                p = n(837020),
                _ = n(521514),
                m = n(390686),
                h = n(32788),
                b = n(443781),
                y = n(602427);
            const g = { component: "dock" },
                f = Object.freeze({ dockedOnScroll: "dock_on_scroll", undockOnScroll: "undock_on_scroll", dismissTap: "dismiss_tap", undockTap: "undock_tap" });
            const P = function (e) {
                    const { featureSwitches: t } = i.useContext(b.rC),
                        n = i.useRef(null),
                        [r, s] = i.useState(!1),
                        [o, l] = i.useState(!1),
                        { onCloseDockComplete: c, onDockingScribeAction: d, render: u, requestDock: p } = e;
                    return (
                        i.useEffect(() => {
                            r && !p && s(!1), r || o === p || (l(p), d({ ...g, action: p ? f.dockedOnScroll : f.undockOnScroll }));
                        }, [r, o, d, p]),
                        i.useEffect(() => {
                            if (!o && r) c && c();
                            else if (!o && n?.current) {
                                const { offsetTop: e } = n.current;
                                y.nI({ featureSwitches: t, top: e });
                            }
                        }, [r, o, t, c]),
                        i.createElement(
                            a.Z,
                            { ref: n },
                            u({
                                closeRequested: r,
                                dockRequested: o,
                                requestClose: function () {
                                    s(!0), l(!1), d({ ...g, action: f.dismissTap });
                                },
                                requestUndock: function () {
                                    l(!1), d({ ...g, action: f.undockTap });
                                },
                            }),
                        )
                    );
                },
                v = d().e839db3a,
                E = d().a7a119ec;
            class k extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isOffscreen: !1 }),
                        (this._render = ({ closeRequested: e, dockRequested: t, requestClose: n, requestUndock: r }) => {
                            const { children: s, placeholder: o } = this.props;
                            return i.createElement(h.Z.Provider, { value: { closeRequested: e, dockRequested: t } }, t && o, i.createElement(a.Z, { style: t ? [I.dockedContainer, this._getDockedBottomStyle()] : void 0 }, t && this._renderDockingControlBar(r, n), s));
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
                        { isDisabled: t, onCloseDockComplete: n, onDockingScribeAction: a } = this.props;
                    return i.createElement(m.ZP, { onPlacementChange: this._handlePlacementChange, style: I.root }, i.createElement(P, { onCloseDockComplete: n, onDockingScribeAction: a, render: this._render, requestDock: e && !t }));
                }
                _renderDockingControlBar(e, t) {
                    const { subtitle: n, title: a } = this.props;
                    return i.createElement(r.Z, { rightControl: this._renderDockingControls(e, t), subtitle: n, title: a });
                }
                _renderDockingControls(e, t) {
                    return i.createElement(a.Z, { style: I.dockingControls }, i.createElement(s.ZP, { "aria-label": E, icon: i.createElement(u.default, null), onPress: e, type: "brandText" }), i.createElement(s.ZP, { "aria-label": v, icon: i.createElement(p.default, null), onPress: t, type: "brandText" }));
                }
            }
            k.defaultProps = { placeholder: i.createElement(o.Z, { ratio: l.default.theme.aspectRatios.landscape }), visibleThreshold: 0 };
            const I = l.default.create((e) => ({ root: { zIndex: 1 }, dockedContainer: { bottom: 0, end: 0, marginEnd: e.spaces.space20, boxShadow: e.boxShadows.small, maxWidth: _.Z.columnWidths.secondary.normal, position: "fixed", width: _.Z.columnWidths.secondary.normal }, dockingControls: { flexDirection: "row", alignItems: "baseline" } })),
                w = k;
        },
        414939: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(202784),
                a = n(325686),
                r = n(392237);
            class s extends i.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return i.createElement(a.Z, { style: o.root });
                }
            }
            const o = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = s;
        },
        789831: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                r = n(325686),
                s = n(392237),
                o = n(655352);
            const l = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: s = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || r.Z,
                        _ = s && !(0, o.ZP)();
                    return a.createElement(p, (0, i.Z)({}, u, { style: [_ && !d && l.root, c] }), e, _ ? n : null);
                };
        },
        111685: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var i = n(202784),
                a = n(325686),
                r = n(731708),
                s = n(470397),
                o = n(392237),
                l = n(741692),
                c = n(601413),
                d = n(284702),
                u = n(310452),
                p = n(354149),
                _ = n(111677),
                m = n.n(_),
                h = n(946409);
            const b = o.default.create((e) => ({ description: { marginTop: e.spaces.space12 } })),
                y = (e, t, n) =>
                    n && !d.Z.VIDEO_TYPES.includes(t)
                        ? ((e) => {
                              const t = e.url ? (0, h.Mh)(e.url)?.pathname : void 0;
                              return i.createElement(r.ZP, { color: "gray700", link: t }, e.text);
                          })(n)
                        : e && d.Z.VIDEO_TYPES.includes(t)
                          ? ((e, t) => i.createElement(r.ZP, { color: "gray700", link: e.permalink }, g(t, { screenName: i.createElement(c.Z, { screenName: e.user.screen_name }) })))(e, t)
                          : null,
                g = (e, t) => {
                    switch (e) {
                        case "animated_gif":
                            return i.createElement(m().I18NFormatMessage, { $i18n: "a5d9d071" }, t.screenName);
                        case "video":
                        case "vine":
                            return i.createElement(m().I18NFormatMessage, { $i18n: "i9606e33" }, t.screenName);
                        default:
                            return i.createElement(m().I18NFormatMessage, { $i18n: "i1a64d47" }, t.screenName);
                    }
                },
                f = ({ coverTweet: e, description: t, descriptionEntities: n, imageAttribution: s, mediaType: o, pivotText: l }) => {
                    const c = t ? t.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(n),
                        _ = c ? u.ZP.descriptionTextParts(c, d) : [];
                    return i.createElement(
                        a.Z,
                        { style: b.description },
                        _.length
                            ? i.createElement(
                                  r.ZP,
                                  null,
                                  _.map((e, t) => i.createElement(p.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        y(e, o, s),
                        l ? i.createElement(r.ZP, { color: "gray700" }, l) : null,
                    );
                },
                P = o.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, timeString: { flexShrink: 0 }, timeStringMargin: { marginTop: e.spaces.space12 }, remindMeButton: { marginTop: e.spaces.space12 } })),
                v = ({ author: e, coverTweet: t, description: n, descriptionEntities: o, imageAttribution: c, isTOO: d, mediaType: u, pivotText: p, preTitle: _, remindMeButton: m, time: h, title: b, withHashflags: y }) => {
                    const g = () => (e ? i.createElement(a.Z, null, i.createElement(l.S3, { author: e, size: "body", withLink: !0, withScreenName: !0 }), h ? v(!0) : null) : null),
                        v = (e = !1) => i.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "body", style: [P.timeString, e && P.timeStringMargin] }, h),
                        E = () => (_ ? i.createElement(s.Z, null, i.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "body", weight: "bold" }, _), h ? v() : null) : null);
                    return i.createElement(i.Fragment, null, d && _ ? E() : g() || E(), i.createElement(r.ZP, { dir: "auto", size: "title4", style: P.title, weight: "heavy", withHashflags: y }, b), n || t || c ? i.createElement(f, { coverTweet: t, description: n, descriptionEntities: o, imageAttribution: c, mediaType: u, pivotText: p }) : null, m ? i.createElement(a.Z, { style: P.remindMeButton }, m) : null);
                };
        },
        90890: (e, t, n) => {
            "use strict";
            n.d(t, { Tc: () => l, yt: () => o });
            n(136728), n(202784);
            var i = n(803224),
                a = n(67877),
                r = n(2138);
            const s = { autoplayPrioritizationPolicy: n(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class o {
                constructor(e = s) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === i.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === i.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === i.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === i.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === i.q.USER_PLAYING && e.playbackPriority !== i.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, r.Z)((0, a.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: n } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = n);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: n, onAutoPlayRequest: a, onFullscreenEntered: r, onFullscreenExited: s, onPauseRequest: o, isLooping: l, registerDockElement: c, updateDockedVideo: d, updateIsUserPaused: u, playbackPriority: p = i.W.NORMAL }) {
                    (this._updateDockedVideo = d), (this._updateIsUserPaused = u);
                    const _ = { id: n, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: p, playbackState: i.q.INITIAL, previousPlaybackState: i.q.INITIAL, commandHandlers: { onAutoPlayRequest: a, onFullscreenEntered: r, onFullscreenExited: s, onPauseRequest: o }, canAutoplay: t && p !== i.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(_, e.mediaIndex), this._players.push(_), { reset: () => this._handleReset(_), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(_, e), signalPlay: () => this._handlePlay(_), signalPause: () => this._handlePause(_), signalPlaybackFinish: (e) => this._handlePlaybackFinished(_, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(_, e, t), unregister: () => this._handleUnregister(_) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: n, onFullscreenExited: i } = t.commandHandlers;
                        e && n ? n() : !e && i && i();
                    });
                }
                _handlePlacementChange(e, t) {
                    const n = t.scrollY();
                    (e.placement = t), this._scrollY !== n && (this._scrollY = n), e.playbackState === i.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== i.q.AUTO_PLAYING && (e.previousPlaybackState === i.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, i.q.AUTO_PLAYING) : this._setPlayerState(e, i.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== i.q.AUTO_PAUSED && this._setPlayerState(e, i.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, i.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, n) {
                    (e.playbackPriority = t), (e.canAutoplay = n && t !== i.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(e) {
                    const t = this._players.indexOf(e);
                    t >= 0 && this._players.splice(t, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const e = new WeakMap(),
                        t = this._players.filter((t) => {
                            const n = this._canAutoPlay(t);
                            return t.autoplayGroupEmitter ? n && this._canGroupAutoplay(t.autoplayGroupEmitter, e) : n;
                        }),
                        n = this._findBestAutoplayFit(t);
                    if (n) {
                        const { autoplayGroupEmitter: e } = n;
                        if (e) {
                            const t = e.signalGroupAutoplayRequest();
                            t && (this._stopAllExcept(t), this._autoPlayVideo(t));
                        } else this._stopAllExcept(n), this._autoPlayVideo(n);
                    } else
                        this._players.forEach((e) => {
                            e.playbackState === i.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const n = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, n), n;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        n = e.playbackState === i.q.USER_PAUSED,
                        a = e.playbackState === i.q.FINISHED;
                    return e.canAutoplay && t && !n && !a;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        n = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== i.W.INELIGIBLE && (!e.placement || n || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const n = t.playbackPriority !== i.W.SPACE;
                        t === e || !n || (t.playbackState !== i.q.USER_PLAYING && t.playbackState !== i.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PLAYING), t();
                }
                _findBestAutoplayFit(e) {
                    return this._autoplayPrioritizationPolicy(e);
                }
                _getDistanceToCenter(e) {
                    return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE;
                }
                _getDistanceToTop(e) {
                    return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE;
                }
            }
            const l = new o();
        },
        22952: (e, t, n) => {
            "use strict";
            n.d(t, { T: () => m, Z: () => v });
            var i = n(202784),
                a = n(688715),
                r = n(731708),
                s = n(457311),
                o = n(392237),
                l = n(111677),
                c = n.n(l);
            const d = (0, a.ju)("https://support.x.com/articles/117063"),
                u = "sensitive",
                p = "blocked",
                _ = "blocked_by",
                m = Object.freeze({ SENSITIVE: u, BLOCKED: p, BLOCKED_BY: _ }),
                h = { title: c().j32d345e, button: c().c3d89aca, body: void 0 },
                b = { title: c().a01d5a7c, body: ({ screenName: e }) => i.createElement(c().I18NFormatMessage, { $i18n: "cc70dc63", screenName: e }, i.createElement(r.ZP, { link: d }, c().i859a9d4)), button: c().f277e94a },
                y = { title: c().b2311b70, body: c().cab51f93, button: void 0 },
                g = Object.freeze({ [u]: h, [p]: b, [_]: y }),
                f = (e, t) => ("function" == typeof e ? (t && e({ screenName: t })) || void 0 : e),
                P = o.default.create((e) => ({ style: { alignItems: "center", paddingHorizontal: e.spaces.space40, paddingVertical: `calc(2 * ${e.spaces.space40})` } })),
                v = ({ onPress: e, screenName: t, type: n }) => {
                    const { body: a, button: r, title: o } = g[n],
                        l = f(o, t),
                        c = f(a, t);
                    return i.createElement(s.Z, { buttonText: r, header: l, message: c, onButtonPress: e, style: P.style });
                };
        },
        849376: (e, t, n) => {
            "use strict";
            n.d(t, { F: () => r });
            n(136728);
            var i = n(22952);
            const a = (e, t, n) => ({ isFullPageInterstitial: e, type: t, screenName: n }),
                r = ({ isBlockedBy: e = !1, isBlocking: t = !1, isSensitive: n = !1, screenName: r }) => {
                    const s = [];
                    return e ? s.push(a(!0, i.T.BLOCKED_BY, r)) : (t && s.push(a(!0, i.T.BLOCKED, r)), n && s.push(a(!1, i.T.SENSITIVE))), s.length ? s : void 0;
                };
        },
        538884: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var i = n(202784),
                a = n(22952);
            const r = function (e) {
                const { children: t, onInterstitialSubmit: n } = e,
                    [r, s] = i.useState(e.interstitials || []),
                    o = () => {
                        const [e, ...t] = r;
                        s(t), n && n(e);
                    };
                return r
                    ? (() => {
                          const e = r && r[0];
                          return e
                              ? ((e) => {
                                    const { isFullPageInterstitial: n, screenName: r, type: s } = e,
                                        l = i.createElement(a.Z, { onPress: o, screenName: r, type: s });
                                    return n ? l : t(l);
                                })(e)
                              : t();
                      })()
                    : t();
            };
        },
        337069: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(202784),
                a = n(325686),
                r = n(187669);
            const s = { threshold: 0.01 },
                o = (e) => {
                    const { children: t, onImpression: n, style: o } = e,
                        l = i.useRef(null),
                        c = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && n();
                            });
                        };
                    return (
                        (0, r.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(c, s),
                                    t = l.current;
                                null != t && e.observe(t);
                                const n = () => {
                                    const t = l.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return n;
                            }
                        }),
                        i.createElement(a.Z, { ref: l, style: o }, t)
                    );
                };
        },
        965245: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(807896),
                a = n(202784),
                r = n(229333),
                s = n(414939),
                o = n(334346);
            const l = ({ accessibilityTitle: e, footer: t = a.createElement(s.Z, null), ...n }) => {
                const l = a.createElement(o.C, (0, i.Z)({}, n, { footer: t }));
                return e ? a.createElement(r.Z, { title: e }, l) : l;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-9f4db315.75f0482a.js.map
