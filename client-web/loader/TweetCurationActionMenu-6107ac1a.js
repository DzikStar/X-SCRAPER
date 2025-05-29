(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-6107ac1a", "icons/IconCode-js", "icons/IconPersonCheckmarkStroke-js", "loader.FeedbackSheet"],
    {
        805020: (e) => {
            e.exports = { queryId: "O0g5XB4pxcFfCH2bB2tQnQ", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        803386: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        322821: (e) => {
            e.exports = { queryId: "gWMNaKlDbrL4j5oI2DinOw", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        93595: (e) => {
            e.exports = { queryId: "tUL-yeU5xhRlmamoe_s9YA", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        53605: (e) => {
            e.exports = { queryId: "g8lKlPeG-YB3eLsAYbb2tQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        672075: (e) => {
            e.exports = { queryId: "Cwz87LfqenO0OAx3YuWsag", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        196969: (e) => {
            e.exports = { queryId: "YmkYI3pqyX0Gce1NMqkI0Q", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        553600: (e) => {
            e.exports = { queryId: "Rlmfew2vrkZt1PYSmu5GCA", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        446405: (e) => {
            e.exports = { queryId: "mG5MGgW_gMeIcM8KKCQ7nw", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
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
            i.d(t, { Z: () => E });
            var n = i(506899),
                a = i(414742);
            const l = new n.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var r = i(805020),
                s = i.n(r),
                o = i(803386),
                c = i.n(o),
                d = i(322821),
                _ = i.n(d),
                p = i(93595),
                u = i.n(p),
                m = i(53605),
                b = i.n(m),
                h = i(672075),
                y = i.n(h),
                f = i(196969),
                g = i.n(f),
                v = i(553600),
                w = i.n(v),
                C = i(446405),
                k = i.n(C),
                I = i(934309);
            const E = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: i, title: a } = t;
                    return e.graphQL(_(), { content_state: i, title: a }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, l));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(b(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, l));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(c(), { articleEntityId: i }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: i, content_state: a } = t;
                    return e.graphQL(g(), { content_state: a, article_entity: i }).then((e) => (0, n.Fv)(e.articleentity_update_content_state, l));
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
                    return e.graphQL(u(), { articleEntityId: i, visibilitySetting: r, ...(a && { conversationControl: { mode: a } }) }).then((e) => (0, n.Fv)(e.articleentity_publish?.article_entity_results?.result, l));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(y(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, l));
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
                                  return I.d;
                              })
                        : Promise.resolve(I.d),
            });
        },
        683814: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => F });
            var n = i(807896),
                a = i(202784),
                l = i(157130),
                r = i(30899),
                s = i(325686),
                o = i(731708),
                c = i(143670),
                d = i(96083),
                _ = i(154003),
                p = i(392237),
                u = i(111677),
                m = i.n(u),
                b = i(14284),
                h = i(531564),
                y = i(491831),
                f = i(792618),
                g = i(511323),
                v = i(916910),
                w = i(443781),
                C = i(459660);
            const k = m().g6185a9e,
                I = m().i00051cc,
                E = m().baffe39a,
                T = m().i9000126,
                x = m().dcaede8a,
                A = m().ad85cd2e,
                L = m().f19e4bfc,
                S = m().bf994ab2,
                q = m().e7b4b30a,
                Z = m().cfd2f35e,
                B = p.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                R = (e) => {
                    const { dismiss: t, isModal: i, midConversationTweet: n, value: l } = e,
                        { featureSwitches: r, userClaims: p } = a.useContext(w.rC),
                        u = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        R = r.isTrue("disallowed_reply_controls_enabled") && p.isAnyPremiumSubscriber(),
                        F = !!n,
                        Q = F && !n?.entities?.user_mentions?.some((e) => e.id_str !== n.user.id_str);
                    let z = x;
                    return (
                        Q ? (z = S) : F && (z = q),
                        a.createElement(
                            s.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [B.root, i ? B.modal : B.popover] },
                            a.createElement(s.Z, { style: B.title }, a.createElement(o.ZP, { id: "conversation-controls-title", weight: "bold" }, k), a.createElement(o.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, I)),
                            a.createElement(
                                s.Z,
                                null,
                                a.createElement(c.Z, { Icon: b.default, actionText: E, isSelected: C.k.all === l, onClick: u(C.k.all), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: h.default, actionText: T, isSelected: C.k.community === l, onClick: u(C.k.community), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && a.createElement(c.Z, { Icon: y.default, actionText: A, isSelected: C.k.subscribers === l, onClick: u(C.k.subscribers), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: f.default, actionText: L, isSelected: C.k.verified === l, onClick: u(C.k.verified), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: Q ? g.default : v.default, actionText: z, isSelected: C.k.by_invitation === l, onClick: u(C.k.by_invitation), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                R &&
                                    !n &&
                                    a.createElement(d.Z, {
                                        checked: e.disallowedReplyControls.includes(C.m.Links),
                                        label: m().ca6500a8,
                                        onChange:
                                            ((M = C.m.Links),
                                            () => {
                                                if (e.disallowedReplyControls.includes(M)) e.setDisallowedReplyControls(e.disallowedReplyControls.filter((e) => e !== M));
                                                else {
                                                    const t = new Set([...e.disallowedReplyControls]);
                                                    t.add(M), e.setDisallowedReplyControls([...t]);
                                                }
                                            }),
                                        style: B.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? a.createElement(_.ZP, { key: "button_cancel", onPress: t, size: "large", style: B.cancelButton, type: "primaryOutlined" }, Z) : null,
                            ),
                        )
                    );
                    var M;
                },
                F = (e) => {
                    const { children: t, controlled: i = !1, disabled: s } = e,
                        [o, c] = a.useState(!1),
                        d = a.useCallback(() => c(!0), []),
                        _ = a.useCallback(() => c(!1), []),
                        p = i ? (o ? l.Z.VISIBILITY_BEHAVIOR.forceVisible : l.Z.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
                        u = "function" == typeof t ? t({ openPopover: d, closePopover: _ }) : t;
                    return a.createElement(
                        r.Z,
                        {
                            disabled: s,
                            onDismiss: _,
                            renderContent: (t, i) => {
                                const { children: l, controlled: r, ...s } = e;
                                return a.createElement(R, (0, n.Z)({}, s, { dismiss: t, isModal: "sheet" === i }));
                            },
                            visibilityBehavior: p,
                        },
                        u,
                    );
                };
        },
        817648: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(202784),
                a = i(111677),
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
                r = i(111677),
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
                            e.reduce((e, { Icon: a, confirmation: l, disabled: r, excludeFromActionMenu: s, isEmphasized: o, link: c, onClick: d, subText: _, testID: p, text: u, withCancelButton: m }, b) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              l ? (l.render ? n({ cancelCallback: l.onCancel, confirmCallback: d, render: l.render }) : n({ cancelCallback: l.onCancel, confirmCallback: d, text: l.text, headline: l.headline, label: l.label, confirmButtonType: l.confirmButtonType, withCancelButton: l.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: r, Icon: a, isEmphasized: o, testID: p, subText: _, text: u, onClick: s, link: c, withBottomBorder: t && t.includes(b) });
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
            i.d(t, { Z: () => u });
            var n = i(202784),
                a = i(392237),
                l = i(154003),
                r = i(111677),
                s = i.n(r),
                o = i(837020);
            const c = s().e839db3a,
                d = { label: c },
                _ = a.default.create((e) => ({ closeIcon: { color: e.colors.gray700 }, button: { position: "absolute", end: 0 } })),
                p = n.createElement(o.default, { style: _.closeIcon }),
                u = ({ onClick: e }) => n.createElement(l.ZP, { "aria-label": c, borderColor: "transparent", color: "gray1100", hoverLabel: d, icon: p, onClick: e, pullRight: !0, size: "small", style: _.button, type: "brandText" });
        },
        498720: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                l = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        531564: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                l = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.75-7.22l-4.141 6.21L16.1 9.7l1.2-1.6 1.954 1.47 2.969-4.46 1.664 1.11z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-6107ac1a.40167b8a.js.map
