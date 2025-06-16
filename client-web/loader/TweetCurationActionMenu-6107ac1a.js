(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-6107ac1a", "icons/IconIllustrationSafetyMute-js", "icons/IconPinStrokeOff-js", "loader.FeedbackSheet"],
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
                l,
                a,
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
                                args: (l = [
                                    { kind: "Variable", name: "rest_id", variableName: "tweet_id" },
                                    { kind: "Literal", name: "s", value: "b6cb" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "TweethighlightsInfo", kind: "LinkedField", name: "highlights_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "highlighted", storageKey: null }], storageKey: null })], type: "Tweet", abstractKey: null }], storageKey: null }],
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
                                args: l,
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
                                            { kind: "InlineFragment", selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Tweet", abstractKey: null },
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
            i.d(t, { Z: () => I });
            var n = i(506899),
                l = i(414742),
                a = i(679129),
                r = i(805020),
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
                E = i(934309);
            const I = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: i, title: l } = t;
                    return e.graphQL(_(), { content_state: i, title: l }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, a.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(b(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, a.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(c(), { articleEntityId: i }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: i, content_state: l } = t;
                    return e.graphQL(g(), { content_state: l, article_entity: i }).then((e) => (0, n.Fv)(e.articleentity_update_content_state, a.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: i, mediaCategory: l, mediaId: r } = t;
                    return e.graphQL(w(), { articleEntityId: i, coverMedia: r && l ? { media_id: r, media_category: l } : void 0 }).then((e) => (0, n.Fv)(e.articleentity_update_cover_media, a.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: i, title: l } = t;
                    return e.graphQL(k(), { articleEntityId: i, title: l }).then((e) => (0, n.Fv)(e.articleentity_update_title, a.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: i, conversationControl: l, visibilitySetting: r } = t;
                    return e.graphQL(u(), { articleEntityId: i, visibilitySetting: r, ...(l && { conversationControl: { mode: l } }) }).then((e) => (0, n.Fv)(e.articleentity_publish?.article_entity_results?.result, a.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: i } = t;
                    return e.graphQL(y(), { articleEntityId: i }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, a.Z));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  s(),
                                  t,
                                  (0, l.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: i } = e,
                                              { entities: l, result: r } = (0, n.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [a.Z],
                                              );
                                          return { entities: l, result: r, slice_info: i };
                                      }
                                  }
                                  return E.d;
                              })
                        : Promise.resolve(E.d),
            });
        },
        679129: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = new (i(506899).fK.Entity)("articleEntities", {}, { idAttribute: "rest_id" });
        },
        683814: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => R });
            var n = i(807896),
                l = i(202784),
                a = i(157130),
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
                E = m().i00051cc,
                I = m().baffe39a,
                T = m().i9000126,
                x = m().dcaede8a,
                A = m().ad85cd2e,
                L = m().f19e4bfc,
                Z = m().bf994ab2,
                S = m().e7b4b30a,
                F = m().cfd2f35e,
                B = p.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                q = (e) => {
                    const { dismiss: t, isModal: i, midConversationTweet: n, value: a } = e,
                        { featureSwitches: r, userClaims: p } = l.useContext(w.rC),
                        u = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        q = r.isTrue("disallowed_reply_controls_enabled") && p.isAnyPremiumSubscriber(),
                        R = !!n,
                        z = R && !n?.entities?.user_mentions?.some((e) => e.id_str !== n.user.id_str);
                    let D = x;
                    return (
                        z ? (D = Z) : R && (D = S),
                        l.createElement(
                            s.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [B.root, i ? B.modal : B.popover] },
                            l.createElement(s.Z, { style: B.title }, l.createElement(o.ZP, { id: "conversation-controls-title", weight: "bold" }, k), l.createElement(o.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, E)),
                            l.createElement(
                                s.Z,
                                null,
                                l.createElement(c.Z, { Icon: b.default, actionText: I, isSelected: C.k.all === a, onClick: u(C.k.all), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                l.createElement(c.Z, { Icon: h.default, actionText: T, isSelected: C.k.community === a, onClick: u(C.k.community), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && l.createElement(c.Z, { Icon: y.default, actionText: A, isSelected: C.k.subscribers === a, onClick: u(C.k.subscribers), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                l.createElement(c.Z, { Icon: f.default, actionText: L, isSelected: C.k.verified === a, onClick: u(C.k.verified), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                l.createElement(c.Z, { Icon: z ? g.default : v.default, actionText: D, isSelected: C.k.by_invitation === a, onClick: u(C.k.by_invitation), selectable: !0, style: B.menuRow, withIconAsThumbnail: !0 }),
                                q &&
                                    !n &&
                                    l.createElement(d.Z, {
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
                                        style: B.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? l.createElement(_.ZP, { key: "button_cancel", onPress: t, size: "large", style: B.cancelButton, type: "primaryOutlined" }, F) : null,
                            ),
                        )
                    );
                    var Q;
                },
                R = (e) => {
                    const { children: t, controlled: i = !1, disabled: s } = e,
                        [o, c] = l.useState(!1),
                        d = l.useCallback(() => c(!0), []),
                        _ = l.useCallback(() => c(!1), []),
                        p = i ? (o ? a.Z.VISIBILITY_BEHAVIOR.forceVisible : a.Z.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
                        u = "function" == typeof t ? t({ openPopover: d, closePopover: _ }) : t;
                    return l.createElement(
                        r.Z,
                        {
                            disabled: s,
                            onDismiss: _,
                            renderContent: (t, i) => {
                                const { children: a, controlled: r, ...s } = e;
                                return l.createElement(q, (0, n.Z)({}, s, { dismiss: t, isModal: "sheet" === i }));
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
                l = i(111677),
                a = i.n(l),
                r = i(459660);
            const s = Object.freeze({ all: a().baffe39a, community: a().i9000126, by_invitation: a().e7b4b30a, subscribers: a().ad85cd2e, verified: a().f19e4bfc }),
                o = a().bf994ab2,
                c = (e, t) => {
                    let i = s[t];
                    if (t === r.k.by_invitation) {
                        !e.entities?.user_mentions?.some((t) => t.id_str !== e.user.id_str) && (i = o);
                    }
                    return n.createElement(a().I18NFormatMessage, { $i18n: "f8ea2809", selection: i });
                };
        },
        774426: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => _ });
            i(136728);
            var n = i(202784),
                l = i(811176),
                a = i(190286),
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
                            e.reduce((e, { Icon: l, confirmation: a, disabled: r, excludeFromActionMenu: s, isEmphasized: o, link: c, onClick: d, subText: _, testID: p, text: u, withCancelButton: m }, b) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              a ? (a.render ? n({ cancelCallback: a.onCancel, confirmCallback: d, render: a.render }) : n({ cancelCallback: a.onCancel, confirmCallback: d, text: a.text, headline: a.headline, label: a.label, confirmButtonType: a.confirmButtonType, withCancelButton: a.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: r, Icon: l, isEmphasized: o, testID: p, subText: _, text: u, onClick: s, link: c, withBottomBorder: t && t.includes(b) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(l.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: l, text: r, withCancelButton: s } = e || {};
                        return n.createElement(a.Z, { confirmButtonLabel: l, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: s });
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
                l = i(392237),
                a = i(154003),
                r = i(111677),
                s = i.n(r),
                o = i(837020);
            const c = s().e839db3a,
                d = { label: c },
                _ = l.default.create((e) => ({ closeIcon: { color: e.colors.gray700 }, button: { position: "absolute", end: 0 } })),
                p = n.createElement(o.default, { style: _.closeIcon }),
                u = ({ onClick: e }) => n.createElement(a.ZP, { "aria-label": c, borderColor: "transparent", color: "gray1100", hoverLabel: d, icon: p, onClick: e, pullRight: !0, size: "small", style: _.button, type: "brandText" });
        },
        232130: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 200 200", children: n.createElement("g", null, n.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }), n.createElement("path", { d: "M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z", fill: "#005FD1" }), n.createElement("path", { d: "M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z", fill: "#1DA1F2" }), n.createElement("ellipse", { cx: "123.283", cy: "100.225", fill: "#97E3FF", rx: "6.567", ry: "45.075" }), n.createElement("path", { d: "M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z", fill: "#71C9F8" }), n.createElement("path", { d: "M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267", fill: "#005FD1" }), n.createElement("path", { d: "M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z", fill: "#1DA1F2" })) }, { writingDirection: t });
            };
            s.metadata = { width: 200, height: 200 };
            const o = s;
        },
        963879: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                l = i(890601),
                a = i(783427),
                r = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.896 11.553L20.12 16H13v5l-1 2-1-2v-3.752L14.248 14h2.636l-.776-1.553 1.789-.895zm3.813-7.843l-17.999 18-.707-.707-.707-.707L6.592 16H3.88L7 9.76V4.5C7 3.121 8.122 2 9.5 2h5C15.878 2 17 3.121 17 4.5v1.092l3.296-3.296.707.707.707.707zm-6.71 3.882V4.5c0-.275-.224-.5-.5-.5h-5c-.276 0-.5.225-.5.5v5.732L7.115 14h1.476l6.408-6.408z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-6107ac1a.68d0275a.js.map
