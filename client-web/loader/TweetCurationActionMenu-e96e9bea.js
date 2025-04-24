(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e96e9bea", "loader.FeedbackSheet"],
    {
        594771: (e) => {
            e.exports = { queryId: "Zg6ZAVdkp7sQWJTM-pypDw", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        551e3: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        486962: (e) => {
            e.exports = { queryId: "cKRlBOgG_REpVBm84PJRaQ", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        207318: (e) => {
            e.exports = { queryId: "GZWIyQjGzTUq3ocPhSpT8w", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        244275: (e) => {
            e.exports = { queryId: "kWTYMn1muc5CqOSfv7_yPQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        51864: (e) => {
            e.exports = { queryId: "9Tt6LuMCO7J9FQJZEAcxkw", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        118869: (e) => {
            e.exports = { queryId: "CWhW-YeUL_K1-LKTwDGw2g", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        342454: (e) => {
            e.exports = { queryId: "PaE_-9SZZOvOqWJBJ8ZKGg", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        134871: (e) => {
            e.exports = { queryId: "9LgfubNkcFRC-sO_bWQlsQ", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        337653: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var n,
                a,
                l,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "tweet_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "HighlightTweetSheetQuery",
                        selections: [
                            {
                                alias: null,
                                args: (a = [
                                    { kind: "Variable", name: "rest_id", variableName: "tweet_id" },
                                    { kind: "Literal", name: "s", value: "b6cb" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(l = { alias: null, args: null, concreteType: "TweethighlightsInfo", kind: "LinkedField", name: "highlights_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "highlighted", storageKey: null }], storageKey: null })], type: "Tweet", abstractKey: null }], storageKey: null }],
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
                        name: "HighlightTweetSheetQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
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
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "InlineFragment", selections: [l, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Tweet", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "j5-kjpQseTlPnVtfck8i_Q", metadata: {}, name: "HighlightTweetSheetQuery", operationKind: "query", text: null },
                };
            s.hash = "d615ae6a93ba6bd638e5ebb9a48ddee2";
            const o = s;
        },
        656069: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => E });
            var n = i(506899),
                a = i(414742),
                l = i(679129),
                r = i(594771),
                s = i.n(r),
                o = i(551e3),
                c = i.n(o),
                d = i(486962),
                u = i.n(d),
                _ = i(207318),
                p = i.n(_),
                m = i(244275),
                b = i.n(m),
                f = i(51864),
                y = i.n(f),
                h = i(118869),
                g = i.n(h),
                v = i(342454),
                w = i.n(v),
                C = i(134871),
                k = i.n(C),
                T = i(934309);
            const E = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: i, title: a } = t;
                    return e.graphQL(u(), { content_state: i, title: a }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, l.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(b(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, l.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(c(), { articleEntityId: i }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: i, content_state: a } = t;
                    return e.graphQL(g(), { content_state: a, article_entity: i }).then((e) => (0, n.Fv)(e.articleentity_update_content_state, l.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: i, mediaCategory: a, mediaId: r } = t;
                    return e.graphQL(w(), { articleEntityId: i, coverMedia: r && a ? { media_id: r, media_category: a } : void 0 }).then((e) => (0, n.Fv)(e.articleentity_update_cover_media, l.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: i, title: a } = t;
                    return e.graphQL(k(), { articleEntityId: i, title: a }).then((e) => (0, n.Fv)(e.articleentity_update_title, l.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: i, conversationControl: a, visibilitySetting: r } = t;
                    return e.graphQL(p(), { articleEntityId: i, visibilitySetting: r, ...(a && { conversationControl: { mode: a } }) }).then((e) => (0, n.Fv)(e.articleentity_publish?.article_entity_results?.result, l.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(y(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, l.Z));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  s(),
                                  t,
                                  (0, a.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: i } = e,
                                              { entities: a, result: r } = (0, n.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [l.Z],
                                              );
                                          return { entities: a, result: r, slice_info: i };
                                      }
                                  }
                                  return T.d;
                              })
                        : Promise.resolve(T.d),
            });
        },
        679129: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = new (i(506899).fK.Entity)("articleEntities", {}, { idAttribute: "rest_id" });
        },
        683814: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => P });
            var n = i(807896),
                a = i(202784),
                l = i(157130),
                r = i(30899),
                s = i(325686),
                o = i(731708),
                c = i(143670),
                d = i(96083),
                u = i(154003),
                _ = i(392237),
                p = i(674132),
                m = i.n(p),
                b = i(14284),
                f = i(531564),
                y = i(491831),
                h = i(792618),
                g = i(511323),
                v = i(916910),
                w = i(443781),
                C = i(459660);
            const k = m().g6185a9e,
                T = m().i00051cc,
                E = m().baffe39a,
                I = m().i9000126,
                x = m().dcaede8a,
                A = m().ad85cd2e,
                L = m().f19e4bfc,
                R = m().bf994ab2,
                S = m().e7b4b30a,
                Z = m().cfd2f35e,
                q = _.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                Q = (e) => {
                    const { dismiss: t, isModal: i, midConversationTweet: n, value: l } = e,
                        { featureSwitches: r, userClaims: _ } = a.useContext(w.rC),
                        p = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        Q = r.isTrue("disallowed_reply_controls_enabled") && _.isAnyPremiumSubscriber(),
                        P = !!n,
                        B = P && !n?.entities?.user_mentions?.some((e) => e.id_str !== n.user.id_str);
                    let F = x;
                    return (
                        B ? (F = R) : P && (F = S),
                        a.createElement(
                            s.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [q.root, i ? q.modal : q.popover] },
                            a.createElement(s.Z, { style: q.title }, a.createElement(o.ZP, { id: "conversation-controls-title", weight: "bold" }, k), a.createElement(o.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, T)),
                            a.createElement(
                                s.Z,
                                null,
                                a.createElement(c.Z, { Icon: b.default, actionText: E, isSelected: C.k.all === l, onClick: p(C.k.all), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: f.default, actionText: I, isSelected: C.k.community === l, onClick: p(C.k.community), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && a.createElement(c.Z, { Icon: y.default, actionText: A, isSelected: C.k.subscribers === l, onClick: p(C.k.subscribers), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: h.default, actionText: L, isSelected: C.k.verified === l, onClick: p(C.k.verified), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: B ? g.default : v.default, actionText: F, isSelected: C.k.by_invitation === l, onClick: p(C.k.by_invitation), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                Q &&
                                    !n &&
                                    a.createElement(d.Z, {
                                        checked: e.disallowedReplyControls.includes(C.m.Links),
                                        label: m().ca6500a8,
                                        onChange:
                                            ((D = C.m.Links),
                                            () => {
                                                if (e.disallowedReplyControls.includes(D)) e.setDisallowedReplyControls(e.disallowedReplyControls.filter((e) => e !== D));
                                                else {
                                                    const t = new Set([...e.disallowedReplyControls]);
                                                    t.add(D), e.setDisallowedReplyControls([...t]);
                                                }
                                            }),
                                        style: q.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? a.createElement(u.ZP, { key: "button_cancel", onPress: t, size: "large", style: q.cancelButton, type: "primaryOutlined" }, Z) : null,
                            ),
                        )
                    );
                    var D;
                },
                P = (e) => {
                    const { children: t, controlled: i = !1, disabled: s } = e,
                        [o, c] = a.useState(!1),
                        d = a.useCallback(() => c(!0), []),
                        u = a.useCallback(() => c(!1), []),
                        _ = i ? (o ? l.Z.VISIBILITY_BEHAVIOR.forceVisible : l.Z.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
                        p = "function" == typeof t ? t({ openPopover: d, closePopover: u }) : t;
                    return a.createElement(
                        r.Z,
                        {
                            disabled: s,
                            onDismiss: u,
                            renderContent: (t, i) => {
                                const { children: l, controlled: r, ...s } = e;
                                return a.createElement(Q, (0, n.Z)({}, s, { dismiss: t, isModal: "sheet" === i }));
                            },
                            visibilityBehavior: _,
                        },
                        p,
                    );
                };
        },
        817648: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(202784),
                a = i(674132),
                l = i.n(a),
                r = i(459660);
            const s = Object.freeze({ all: l().baffe39a, community: l().i9000126, by_invitation: l().e7b4b30a, subscribers: l().ad85cd2e, verified: l().f19e4bfc }),
                o = l().bf994ab2,
                c = (e, t) => {
                    let i = s[t];
                    if (t === r.k.by_invitation) {
                        !e.entities?.user_mentions?.some((t) => t.id_str !== e.user.id_str) && (i = o);
                    }
                    return n.createElement(l().I18NFormatMessage, { $i18n: "f8ea2809", selection: i });
                };
        },
        774426: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => u });
            i(136728);
            var n = i(202784),
                a = i(811176),
                l = i(190286),
                r = i(674132),
                s = i.n(r),
                o = i(912021);
            const c = s().cfd2f35e;
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, o.Z)((e, t, i, n) =>
                            e.reduce((e, { Icon: a, confirmation: l, disabled: r, excludeFromActionMenu: s, isEmphasized: o, link: c, onClick: d, subText: u, testID: _, text: p, withCancelButton: m }, b) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              l ? (l.render ? n({ cancelCallback: l.onCancel, confirmCallback: d, render: l.render }) : n({ cancelCallback: l.onCancel, confirmCallback: d, text: l.text, headline: l.headline, label: l.label, confirmButtonType: l.confirmButtonType, withCancelButton: l.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: r, Icon: a, isEmphasized: o, testID: _, subText: u, text: p, onClick: s, link: c, withBottomBorder: t && t.includes(b) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(a.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: a, text: r, withCancelButton: s } = e || {};
                        return n.createElement(l.Z, { confirmButtonLabel: a, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: i } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, i, this._handleConfirm);
                }
            }
            const u = d;
        },
        182873: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => p });
            var n = i(202784),
                a = i(392237),
                l = i(154003),
                r = i(674132),
                s = i.n(r),
                o = i(837020);
            const c = s().e839db3a,
                d = { label: c },
                u = a.default.create((e) => ({ closeIcon: { color: e.colors.gray700 }, button: { position: "absolute", end: 0 } })),
                _ = n.createElement(o.default, { style: u.closeIcon }),
                p = ({ onClick: e }) => n.createElement(l.ZP, { "aria-label": c, borderColor: "transparent", color: "gray1100", hoverLabel: d, icon: _, onClick: e, pullRight: !0, size: "small", style: u.button, type: "brandText" });
        },
        928123: (e, t, i) => {
            "use strict";
            var n = i(606161).useTrackLoadQueryInRender,
                a = i(138239),
                l = i(303566),
                r = i(437429),
                s = i(647677),
                o = (i(202784).useDebugValue, i(703383).__internal),
                c = o.fetchQueryDeduped,
                d = o.fetchQuery;
            i(826590);
            e.exports = function (e, t, i) {
                n();
                var o,
                    u = r(),
                    _ = t.fetchKey,
                    p = t.fetchPolicy,
                    m = t.source,
                    b = t.variables,
                    f = t.networkCacheConfig,
                    y = l(e, b, f);
                if ("PreloadedQuery_DEPRECATED" === t.kind)
                    y.request.node.params.name !== t.name && s(!1),
                        (o = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: _,
                            fetchObservable: c(u, y.request.identifier, function () {
                                return u === t.environment && null != m ? u.executeWithSource({ operation: y, source: m }) : u.execute({ operation: y });
                            }),
                            fetchPolicy: p,
                            query: y,
                            renderPolicy: null == i ? void 0 : i.UNSTABLE_renderPolicy,
                        });
                else {
                    var h = d(u, y);
                    o = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != m && u === t.environment ? m.ifEmpty(h) : (t.environment, h), fetchKey: _, fetchPolicy: p, query: y, renderPolicy: null == i ? void 0 : i.UNSTABLE_renderPolicy };
                }
                return a(o);
            };
        },
        72845: (e, t, i) => {
            "use strict";
            var n = (0, i(171600).default)(i(638636)),
                a = i(606161),
                l = a.loadQuery,
                r = a.useTrackLoadQueryInRender,
                s = i(995402),
                o = i(437429),
                c = i(202784),
                d = c.useCallback,
                u = c.useEffect,
                _ = c.useRef,
                p = c.useState,
                m = i(703383).getRequest,
                b = { kind: "NullQueryReference" };
            function f(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== m(e).params.metadata.live;
            }
            e.exports = function (e, t) {
                var i = null != t ? t : b,
                    a = o();
                r();
                var c = s(),
                    m = _(new Set([i])),
                    y = p(function () {
                        return i;
                    }),
                    h = y[0],
                    g = y[1],
                    v = p(function () {
                        return i;
                    }),
                    w = v[0],
                    C = v[1];
                i !== w && (m.current.add(i), C(i), g(i));
                var k = d(
                        function () {
                            c.current && (m.current.add(b), g(b));
                        },
                        [c],
                    ),
                    T = d(
                        function (t, i) {
                            var n = null != i && i.hasOwnProperty("__environment") ? { fetchPolicy: i.fetchPolicy, networkCacheConfig: i.networkCacheConfig, __nameForWarning: i.__nameForWarning } : i;
                            if (c.current) {
                                var r,
                                    s = l(null !== (r = null == i ? void 0 : i.__environment) && void 0 !== r ? r : a, e, t, n);
                                m.current.add(s), g(s);
                            }
                        },
                        [a, e, g, c],
                    ),
                    E = _(!1);
                return (
                    u(function () {
                        return function () {
                            E.current = !0;
                        };
                    }, []),
                    u(
                        function () {
                            if (!0 === E.current) return (E.current = !1), void ("NullQueryReference" !== h.kind && T(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig }));
                            var t = m.current;
                            if (c.current) {
                                var i,
                                    a = (0, n.default)(t);
                                try {
                                    for (a.s(); !(i = a.n()).done; ) {
                                        var l = i.value;
                                        if (l === h) break;
                                        t.delete(l), "NullQueryReference" !== l.kind && (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery());
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                            }
                        },
                        [h, c, T, e],
                    ),
                    u(
                        function () {
                            return function () {
                                var t,
                                    i = (0, n.default)(m.current);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) {
                                        var a = t.value;
                                        "NullQueryReference" !== a.kind && (f(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === h.kind ? null : h, T, k]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e96e9bea.c77ed22a.js.map
