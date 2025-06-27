(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-6107ac1a", "icons/IconMegaphoneStroke-js", "icons/IconModerationPlus-js", "loader.FeedbackSheet"],
    {
        805020: (e) => {
            e.exports = { queryId: "TUo5Hk_nQNjxM9UEIasNag", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        803386: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        322821: (e) => {
            e.exports = { queryId: "GtkE_fIvGpfhl6AgAxI4ag", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        93595: (e) => {
            e.exports = { queryId: "YIVDdGK-jx-6WJjoytT5GQ", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        53605: (e) => {
            e.exports = { queryId: "lDef0ufkHdz6a5MV7hBegQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        672075: (e) => {
            e.exports = { queryId: "Wbm699yiDT-Yiki66kr26w", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        196969: (e) => {
            e.exports = { queryId: "WL1nCv0GSF54wa0upBzF1g", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        553600: (e) => {
            e.exports = { queryId: "wZ8nA4roHl8gXGBkP4kO0w", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        446405: (e) => {
            e.exports = { queryId: "K6BUpfz4QdzQ8lJ0OjXW-w", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
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
            i.d(t, { Z: () => z });
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
                S = m().f19e4bfc,
                L = m().bf994ab2,
                Z = m().e7b4b30a,
                B = m().cfd2f35e,
                q = p.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                R = (e) => {
                    const { dismiss: t, isModal: i, midConversationTweet: n, value: l } = e,
                        { featureSwitches: r, userClaims: p } = a.useContext(w.rC),
                        u = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        R = r.isTrue("disallowed_reply_controls_enabled") && p.isAnyPremiumSubscriber(),
                        z = !!n,
                        F = z && !n?.entities?.user_mentions?.some((e) => e.id_str !== n.user.id_str);
                    let M = x;
                    return (
                        F ? (M = L) : z && (M = Z),
                        a.createElement(
                            s.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [q.root, i ? q.modal : q.popover] },
                            a.createElement(s.Z, { style: q.title }, a.createElement(o.ZP, { id: "conversation-controls-title", weight: "bold" }, k), a.createElement(o.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, I)),
                            a.createElement(
                                s.Z,
                                null,
                                a.createElement(c.Z, { Icon: b.default, actionText: E, isSelected: C.k.all === l, onClick: u(C.k.all), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: h.default, actionText: T, isSelected: C.k.community === l, onClick: u(C.k.community), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && a.createElement(c.Z, { Icon: y.default, actionText: A, isSelected: C.k.subscribers === l, onClick: u(C.k.subscribers), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: f.default, actionText: S, isSelected: C.k.verified === l, onClick: u(C.k.verified), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                a.createElement(c.Z, { Icon: F ? g.default : v.default, actionText: M, isSelected: C.k.by_invitation === l, onClick: u(C.k.by_invitation), selectable: !0, style: q.menuRow, withIconAsThumbnail: !0 }),
                                R &&
                                    !n &&
                                    a.createElement(d.Z, {
                                        checked: e.disallowedReplyControls.includes(C.m.Links),
                                        label: m().ca6500a8,
                                        onChange:
                                            ((Q = C.m.Links),
                                            () => {
                                                if (e.disallowedReplyControls.includes(Q)) e.setDisallowedReplyControls(e.disallowedReplyControls.filter((e) => e !== Q));
                                                else {
                                                    const t = new Set([...e.disallowedReplyControls]);
                                                    t.add(Q), e.setDisallowedReplyControls([...t]);
                                                }
                                            }),
                                        style: q.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? a.createElement(_.ZP, { key: "button_cancel", onPress: t, size: "large", style: q.cancelButton, type: "primaryOutlined" }, B) : null,
                            ),
                        )
                    );
                    var Q;
                },
                z = (e) => {
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
        730873: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                l = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5v-1.63l-1.15-.37H4.5C3.12 15.5 2 14.38 2 13v-3c0-1.38 1.12-2.5 2.5-2.5h2.35L22 2.63zM6 9.5H4.5c-.27 0-.5.22-.5.5v3c0 .28.23.5.5.5H6v-4zm2 4.27l12 3.86V5.37L8 9.23v4.54zm2 2.74v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        659306: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                l = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19 14h2v6.5c0 1.379-1.122 2.5-2.5 2.5h-15C2.122 23 1 21.879 1 20.5v-15C1 4.121 2.122 3 3.5 3H10v2H3.5c-.276 0-.5.225-.5.5v15c0 .275.224.5.5.5h15c.276 0 .5-.225.5-.5V14zm5.1-8c0 3.363-2.736 6.1-6.1 6.1S11.9 9.364 11.9 6 14.636-.1 18-.1s6.1 2.736 6.1 6.1zm-2 0c0-2.261-1.839-4.1-4.1-4.1S13.9 3.739 13.9 6s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1zM19 5V3h-2v2h-2v2h2v2h2V7h2V5h-2zM6 14h7v-2H6v2zm5 2H6v2h5v-2zm-5-6h4V8H6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        314948: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                l = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-6107ac1a.4dc91c8a.js.map
