(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e96e9bea", "loader.FeedbackSheet"],
    {
        594771: (e) => {
            e.exports = { queryId: "jh2A2H6OxCLqqeWckByo8g", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        551e3: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        486962: (e) => {
            e.exports = { queryId: "sZAbu4JeNTPtdj7oa9-uDg", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        207318: (e) => {
            e.exports = { queryId: "zpvGdNIL6a-30pXfhaOwcw", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        244275: (e) => {
            e.exports = { queryId: "fLuZ0ra-BDT_RZWvKYdVlg", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        51864: (e) => {
            e.exports = { queryId: "31NMM7vtRVqcyfz0zC7ewA", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        118869: (e) => {
            e.exports = { queryId: "LJTEOREth23nOhWGtrBSjg", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        342454: (e) => {
            e.exports = { queryId: "k5OkshNfYnZqVWN_odTMrA", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        134871: (e) => {
            e.exports = { queryId: "hLdaxD2VAGr1ZD1DBcCbAQ", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "responsive_web_graphql_exclude_directive_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
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
        484636: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => x });
            var n = i(506899),
                a = i(414742);
            const l = new n.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var r = i(594771),
                s = i.n(r),
                o = i(551e3),
                c = i.n(o),
                d = i(486962),
                _ = i.n(d),
                u = i(207318),
                p = i.n(u),
                b = i(244275),
                m = i.n(b),
                f = i(51864),
                h = i.n(f),
                y = i(118869),
                v = i.n(y),
                g = i(342454),
                w = i.n(g),
                C = i(134871),
                k = i.n(C),
                T = i(934309);
            const x = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: i, title: a } = t;
                    return e.graphQL(_(), { content_state: i, title: a }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, l));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(m(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, l));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(c(), { articleEntityId: i }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: i, content_state: a } = t;
                    return e.graphQL(v(), { content_state: a, article_entity: i }).then((e) => (0, n.Fv)(e.articleentity_update_content_state, l));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: i, mediaCategory: a, mediaId: r } = t;
                    return e.graphQL(w(), { articleEntityId: i, coverMedia: r && a ? { media_id: r, media_category: a } : void 0 }).then((e) => (0, n.Fv)(e.articleentity_update_cover_media, l));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: i, title: a } = t;
                    return e.graphQL(k(), { articleEntityId: i, title: a }).then((e) => (0, n.Fv)(e.articleentity_update_title, l));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: i, conversationControl: a, visibilitySetting: r } = t;
                    return e.graphQL(p(), { articleEntityId: i, visibilitySetting: r, ...(a && { conversationControl: { mode: a } }) }).then((e) => (0, n.Fv)(e.articleentity_publish?.article_entity_results?.result, l));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(h(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, l));
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
                                                  [l],
                                              );
                                          return { entities: a, result: r, slice_info: i };
                                      }
                                  }
                                  return T.d;
                              })
                        : Promise.resolve(T.d),
            });
        },
        683814: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => B });
            var n = i(807896),
                a = i(202784),
                l = i(157130),
                r = i(30899),
                s = i(325686),
                o = i(731708),
                c = i(143670),
                d = i(96083),
                _ = i(154003),
                u = i(392237),
                p = i(674132),
                b = i.n(p),
                m = i(14284),
                f = i(531564),
                h = i(491831),
                y = i(792618),
                v = i(511323),
                g = i(916910),
                w = i(443781),
                C = i(459660);
            const k = b().g6185a9e,
                T = b().i00051cc,
                x = b().baffe39a,
                E = b().i9000126,
                I = b().dcaede8a,
                A = b().ad85cd2e,
                q = b().f19e4bfc,
                L = b().bf994ab2,
                R = b().e7b4b30a,
                S = b().cfd2f35e,
                P = u.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                Q = (e) => {
                    const { dismiss: t, isModal: i, midConversationTweet: n, value: l } = e,
                        { featureSwitches: r, userClaims: u } = a.useContext(w.rC),
                        p = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        Q = r.isTrue("disallowed_reply_controls_enabled") && u.isAnyPremiumSubscriber(),
                        B = !!n,
                        Z = B && !n?.entities?.user_mentions?.some((e) => e.id_str !== n.user.id_str);
                    let F = I;
                    return (
                        Z ? (F = L) : B && (F = R),
                        a.createElement(
                            s.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [P.root, i ? P.modal : P.popover] },
                            a.createElement(s.Z, { style: P.title }, a.createElement(o.ZP, { id: "conversation-controls-title", weight: "bold" }, k), a.createElement(o.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, T)),
                            a.createElement(
                                s.Z,
                                null,
                                a.createElement(c.Z, { Icon: m.default, actionText: x, isSelected: C.k.all === l, onClick: p(C.k.all), selectable: !0, style: P.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: f.default, actionText: E, isSelected: C.k.community === l, onClick: p(C.k.community), selectable: !0, style: P.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && a.createElement(c.Z, { Icon: h.default, actionText: A, isSelected: C.k.subscribers === l, onClick: p(C.k.subscribers), selectable: !0, style: P.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: y.default, actionText: q, isSelected: C.k.verified === l, onClick: p(C.k.verified), selectable: !0, style: P.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: Z ? v.default : g.default, actionText: F, isSelected: C.k.by_invitation === l, onClick: p(C.k.by_invitation), selectable: !0, style: P.menuRow, withIconAsThumbnail: !0 }),
                                Q &&
                                    !n &&
                                    a.createElement(d.Z, {
                                        checked: e.disallowedReplyControls.includes(C.m.Links),
                                        label: b().ca6500a8,
                                        onChange:
                                            ((N = C.m.Links),
                                            () => {
                                                if (e.disallowedReplyControls.includes(N)) e.setDisallowedReplyControls(e.disallowedReplyControls.filter((e) => e !== N));
                                                else {
                                                    const t = new Set([...e.disallowedReplyControls]);
                                                    t.add(N), e.setDisallowedReplyControls([...t]);
                                                }
                                            }),
                                        style: P.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? a.createElement(_.ZP, { key: "button_cancel", onPress: t, size: "large", style: P.cancelButton, type: "primaryOutlined" }, S) : null,
                            ),
                        )
                    );
                    var N;
                },
                B = (e) => {
                    const { children: t, controlled: i = !1, disabled: s } = e,
                        [o, c] = a.useState(!1),
                        d = a.useCallback(() => c(!0), []),
                        _ = a.useCallback(() => c(!1), []),
                        u = i ? (o ? l.Z.VISIBILITY_BEHAVIOR.forceVisible : l.Z.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
                        p = "function" == typeof t ? t({ openPopover: d, closePopover: _ }) : t;
                    return a.createElement(
                        r.Z,
                        {
                            disabled: s,
                            onDismiss: _,
                            renderContent: (t, i) => {
                                const { children: l, controlled: r, ...s } = e;
                                return a.createElement(Q, (0, n.Z)({}, s, { dismiss: t, isModal: "sheet" === i }));
                            },
                            visibilityBehavior: u,
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
            i.r(t), i.d(t, { default: () => _ });
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
                            e.reduce((e, { Icon: a, confirmation: l, disabled: r, excludeFromActionMenu: s, isEmphasized: o, link: c, onClick: d, subText: _, testID: u, text: p, withCancelButton: b }, m) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              l ? (l.render ? n({ cancelCallback: l.onCancel, confirmCallback: d, render: l.render }) : n({ cancelCallback: l.onCancel, confirmCallback: d, text: l.text, headline: l.headline, label: l.label, confirmButtonType: l.confirmButtonType, withCancelButton: l.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: r, Icon: a, isEmphasized: o, testID: u, subText: _, text: p, onClick: s, link: c, withBottomBorder: t && t.includes(m) });
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
            const _ = d;
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
                _ = a.default.create((e) => ({ closeIcon: { color: e.colors.gray700 }, button: { position: "absolute", end: 0 } })),
                u = n.createElement(o.default, { style: _.closeIcon }),
                p = ({ onClick: e }) => n.createElement(l.ZP, { "aria-label": c, borderColor: "transparent", color: "gray1100", hoverLabel: d, icon: u, onClick: e, pullRight: !0, size: "small", style: _.button, type: "brandText" });
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
                    _ = r(),
                    u = t.fetchKey,
                    p = t.fetchPolicy,
                    b = t.source,
                    m = t.variables,
                    f = t.networkCacheConfig,
                    h = l(e, m, f);
                if ("PreloadedQuery_DEPRECATED" === t.kind)
                    h.request.node.params.name !== t.name && s(!1),
                        (o = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: u,
                            fetchObservable: c(_, h.request.identifier, function () {
                                return _ === t.environment && null != b ? _.executeWithSource({ operation: h, source: b }) : _.execute({ operation: h });
                            }),
                            fetchPolicy: p,
                            query: h,
                            renderPolicy: null == i ? void 0 : i.UNSTABLE_renderPolicy,
                        });
                else {
                    var y = d(_, h);
                    o = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != b && _ === t.environment ? b.ifEmpty(y) : (t.environment, y), fetchKey: u, fetchPolicy: p, query: h, renderPolicy: null == i ? void 0 : i.UNSTABLE_renderPolicy };
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
                _ = c.useEffect,
                u = c.useRef,
                p = c.useState,
                b = i(703383).getRequest,
                m = { kind: "NullQueryReference" };
            function f(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== b(e).params.metadata.live;
            }
            e.exports = function (e, t) {
                var i = null != t ? t : m,
                    a = o();
                r();
                var c = s(),
                    b = u(new Set([i])),
                    h = p(function () {
                        return i;
                    }),
                    y = h[0],
                    v = h[1],
                    g = p(function () {
                        return i;
                    }),
                    w = g[0],
                    C = g[1];
                i !== w && (b.current.add(i), C(i), v(i));
                var k = d(
                        function () {
                            c.current && (b.current.add(m), v(m));
                        },
                        [c],
                    ),
                    T = d(
                        function (t, i) {
                            var n = null != i && i.hasOwnProperty("__environment") ? { fetchPolicy: i.fetchPolicy, networkCacheConfig: i.networkCacheConfig, __nameForWarning: i.__nameForWarning } : i;
                            if (c.current) {
                                var r,
                                    s = l(null !== (r = null == i ? void 0 : i.__environment) && void 0 !== r ? r : a, e, t, n);
                                b.current.add(s), v(s);
                            }
                        },
                        [a, e, v, c],
                    ),
                    x = u(!1);
                return (
                    _(function () {
                        return function () {
                            x.current = !0;
                        };
                    }, []),
                    _(
                        function () {
                            if (!0 === x.current) return (x.current = !1), void ("NullQueryReference" !== y.kind && T(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig }));
                            var t = b.current;
                            if (c.current) {
                                var i,
                                    a = (0, n.default)(t);
                                try {
                                    for (a.s(); !(i = a.n()).done; ) {
                                        var l = i.value;
                                        if (l === y) break;
                                        t.delete(l), "NullQueryReference" !== l.kind && (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery());
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                            }
                        },
                        [y, c, T, e],
                    ),
                    _(
                        function () {
                            return function () {
                                var t,
                                    i = (0, n.default)(b.current);
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
                    ["NullQueryReference" === y.kind ? null : y, T, k]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e96e9bea.7b18630a.js.map
