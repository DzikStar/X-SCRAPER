"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"],
    {
        249422: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a,
                n,
                s = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "tweetText" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "TargetingKeywordsQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "2589" },
                                    { kind: "Variable", name: "tweet_text", variableName: "tweetText" },
                                ],
                                kind: "ScalarField",
                                name: "get_recommended_keywords",
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "TargetingKeywordsQuery", selections: n },
                    params: { id: "8Sm_SjESFOaQfO9tUJHB2A", metadata: {}, name: "TargetingKeywordsQuery", operationKind: "query", text: null },
                };
            s.hash = "82ca15cf26b5645c83cab4c6da16a163";
            const r = s;
        },
        455125: (e, t, i) => {
            i.d(t, { Z: () => o });
            var a,
                n,
                s,
                r = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "TweetBoostButtonQuery", selections: [{ alias: null, args: null, concreteType: "UserQuickPromoteEligibilityResponse", kind: "LinkedField", name: "quick_promote_eligibility", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "ads_account", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "is_eligible", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null })], storageKey: null }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "TweetBoostButtonQuery", selections: [{ alias: null, args: null, concreteType: "UserQuickPromoteEligibilityResponse", kind: "LinkedField", name: "quick_promote_eligibility", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "ads_account", plural: !1, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }, n, s], storageKey: null }] }, params: { id: "XoEFZTEMy3rLs1n0Gw_ziQ", metadata: {}, name: "TweetBoostButtonQuery", operationKind: "query", text: null } };
            r.hash = "8d5c34b7b7627d5e8b09f489ac8bbd9e";
            const o = r;
        },
        525139: (e, t, i) => {
            i.d(t, { Z: () => Ve });
            var a = i(807896),
                n = (i(136728), i(571372), i(202784)),
                s = i(301503),
                r = i(614983),
                o = i.n(r),
                l = i(325686),
                d = i(925873),
                c = i(815858),
                h = i(154003),
                p = i(371344),
                u = i(977952),
                m = i(122375),
                g = i(392237),
                _ = i(661810),
                b = i(40610),
                y = i(194504),
                x = i(210707),
                f = i(872405),
                C = i(155727),
                E = i(823161),
                T = i(15038),
                S = i(830911),
                w = i(731708),
                v = i(65118),
                I = i(688715),
                k = i(900783),
                A = i(797553),
                P = i(143670),
                Z = i(674132),
                R = i.n(Z),
                M = i(264171),
                B = i(674306),
                D = i(853485),
                F = i(665468),
                L = i(511323),
                U = i(25001),
                V = i(544367),
                W = i(689582),
                G = i(38502),
                N = i(804579),
                O = i(837020),
                z = i(379327),
                K = i(254944),
                H = i(885724),
                j = i(205074),
                q = i(156474),
                Q = i(912021),
                $ = i(908478),
                X = i(323265),
                J = i(572661),
                Y = i(720891),
                ee = i(984041),
                te = i(90511),
                ie = i(705079),
                ae = i(443781),
                ne = i(490834),
                se = i(457566),
                re = i(301758),
                oe = i(686689),
                le = i(513313),
                de = i(177371),
                ce = i(386742),
                he = i(110548),
                pe = i(47743),
                ue = i(481681),
                me = i(429650),
                ge = i(511985),
                _e = i(507824),
                be = i(349745),
                ye = i(791134),
                xe = i(339110),
                fe = i(725516),
                Ce = i(515093),
                Ee = i(459660),
                Te = i(913670),
                Se = i(113392),
                we = i(942910),
                ve = i(745475),
                Ie = i(794731),
                ke = i(536790),
                Ae = i(971143),
                Pe = i(113545),
                Ze = i(302830),
                Re = i(365123),
                Me = i(649173),
                Be = i(357498),
                De = i(562644),
                Fe = i(136092),
                Le = i(95681);
            class Ue extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._TypeaheadWrapper_onInputChange = () => {}),
                        (this._isRichTextInput = () => {
                            switch (this.props.withTextInputOverride) {
                                case "plain":
                                    return !1;
                                case "rich":
                                    return !0;
                            }
                            const { featureSwitches: e } = this.context;
                            let t = !0;
                            return !!e.isTrue("longform_notetweets_mobile_richtextinput") || ((t = !X.ZP.isMobileOS()), t);
                        }),
                        (this._init_editorState = (0, Q.Z)(() => {
                            const e = this._isRichTextInput();
                            if (e) {
                                const { editorStateRaw: t, text: i } = this.props.data,
                                    a = t || i;
                                return { isRichTextInput: e, editorState: d.Z.initEditorState(a) };
                            }
                            return { isRichTextInput: e };
                        })),
                        (this._renderControlsAndToolbar = (e) => n.createElement(l.Z, { style: this._isRichTextInput() ? wt.controlsAndToolbar : null }, this._renderControls(), n.createElement(c.Z, { show: this.props.isActive && this.props.isExpanded }, this._renderToolbar(e)))),
                        (this._handleConversationControlsValueChange = (e) => {
                            this._handleAudienceControlsValueChange({ _type: "conversation_controls", conversationControlsValue: e });
                        }),
                        (this._handleBroadcastChange = (e) => {
                            const { audienceControlsValue: t } = this.props;
                            "community_members" === t._type && this._handleAudienceControlsValueChange({ ...t, broadcast: e });
                        }),
                        (this._handleAudienceControlsValueChange = (e) => {
                            this.props.updateAudienceControlsValue(e);
                        }),
                        (this._shouldRenderControls = (e, t, i) => {
                            const { audienceControlsValue: a, isActive: n, isInline: s, isReply: r } = this.props;
                            if ("conversation" === i && (a.conversationControlsValue === Ee.k.community_members || a.conversationControlsValue === Ee.k.super_followers_exclusive || a.conversationControlsValue === Ee.k.trusted_friends_tweet) && r) return !0;
                            return n && !r && (!s || t || e);
                        }),
                        (this._renderConversationControls = (e) =>
                            n.createElement(q.l, { store: Fe.Z }, (t) => {
                                const { audienceControlsValue: i, disallowedReplyControls: a, isAccountProtected: s, isReply: r, isSuperFollowsCreator: o, setDisallowedReplyControls: l, trustedFriendsTweetAuthorScreenName: d } = this.props,
                                    c = i.conversationControlsValue,
                                    h = this._shouldRenderControls(e, t.state.isFocused, "conversation"),
                                    p = this._areConversationControlsDisabled();
                                return h ? n.createElement(Ce.Z, { broadcast: i.broadcast, disabled: p, disallowedReplyControls: a, isAccountProtected: s, isActiveCreator: o, isReply: r, onBroadcastChange: this._handleBroadcastChange, onChange: this._handleConversationControlsValueChange, setDisallowedReplyControls: l, trustedFriendsTweetAuthorScreenName: d, value: c }) : null;
                            })),
                        (this._renderTaggedLocation = (e) => n.createElement(l.Z, { style: wt.taggedLocationContainer }, n.createElement(h.ZP, { icon: n.createElement(M.default, null), onPress: this._handleGeoButtonClick, size: "xSmall", style: wt.taggedLocationButton, type: "brandText" }, e.place.full_name))),
                        (this._renderGrokButton = () => {
                            const {
                                    data: { media: e },
                                    viewerUser: t,
                                } = this.props,
                                i = e.length === this._maxMediaUploads || !t || !this.isEditMediaEnabled || this.hasInlineMedia;
                            return n.createElement(h.ZP, { "aria-label": bt, disabled: i, hoverLabel: { label: bt }, icon: n.createElement(se.x1, { style: this._isWebRedesign && wt.icon }), onPress: this._handleGrokImgGenButtonClick, size: "medium", testID: "grokImgGen", type: this._isWebRedesign ? "primaryText" : "brandText" });
                        }),
                        (this._renderMultiGrokButton = () => {
                            const {
                                    data: { media: e, text: t },
                                    viewerUser: i,
                                } = this.props,
                                a = e.length === this._maxMediaUploads || !i || !this.isEditMediaEnabled || this.hasInlineMedia,
                                s = 0 === t.length;
                            return n.createElement(Rt, { handleGrokImgGenButtonClick: this._handleGrokImgGenButtonClick, handleGrokPostGenButtonClick: this._handleGrokPostGenButtonClick, imagesDisabled: a, isWebRedesign: this._isWebRedesign, textGenDisabled: s });
                        }),
                        (this._renderMainContent = () => {
                            const { additionalToolbarContent: e, audienceControlsValue: t, data: i, index: s, isExpanded: r, isInline: o, isInlineReply: d, onTypeaheadStateChange: c } = this.props,
                                h = this._isRichTextInput(),
                                p = (0, ie.s)(i.cardUrl);
                            let u = (0, te.dm)(i.text);
                            u || !i.cardUrl || p || (u = [i.cardUrl]);
                            const m = !!i.media.length || i.pollActive || !!i.quotedStatus,
                                g = h ? ke.Z : Ie.Z,
                                _ = !this._isEmpty(),
                                b = (this.context.featureSwitches.isTrue("c9s_community_composer_hashtag_suggestions_enabled") && t.communityIdValue) || void 0;
                            return n.createElement(
                                l.Z,
                                { style: wt.textInputArea },
                                n.createElement(
                                    l.Z,
                                    { style: r ? wt.inputStyle : wt.collapsedInputStyle },
                                    this._renderAudienceControls(_),
                                    n.createElement(q.l, { store: Fe.Z }, (e) => {
                                        const t = e.actions.select.anchorOffsetContextText(e.state),
                                            i = h ? this._handleRichTextChange : this._handlePlainTextChange;
                                        return n.createElement(Zt, (0, a.Z)({}, this.props, { textInputRef: this._textInputRef }), ({ dragPlaceholder: a }) => n.createElement(g, { composeCommunityId: b, contextText: t, isInline: o, isInlineReply: d, onTextUpdated: i, onTypeaheadStateChange: c, source: h ? xe._4.LongformComposer : void 0 }, (t) => ((this._TypeaheadWrapper_onInputChange = t), this._renderFieldTextInput({ Store: e, dragPlaceholder: a }))));
                                    }),
                                    n.createElement(Ze.L, this.props),
                                    !u || m ? null : n.createElement(te.ZP, { index: s, isCardPreviewTombstoned: p, urls: u }),
                                ),
                                r ? null : e,
                            );
                        }),
                        (this._fieldTextInputProps = (e) => {
                            const { autoFocus: t, data: i, editable: a, index: s, isActive: r, isExpanded: o, isInline: l, isInlineReply: d, isLast: c, onTextInputBlur: p, positionCursorAtBeginning: u } = this.props,
                                m = 0 === s && c,
                                g = { ...this.props.keyCommandHandlers },
                                _ = [wt.textInputStyle];
                            let b;
                            return !d || e.state.isRichTextInput || o || _.push(wt.textInputMobileCollapsed), r && !m && (this._deleteNonemptyTweetstormComposerEnabled || this._isEmpty()) && (b = n.createElement(h.ZP, { "aria-label": qe, hoverLabel: { label: $e }, icon: Tt, onPress: this.props.onRemoveComposer, size: "xSmall", type: "brandText" })), { appTextSize: this._isVeryNarrow() ? "body" : "headline1", ariaLabel: ze, autoFocus: t || (r && !l), closeButton: b, contentBelow: this._renderTweetAttachment(), editable: a, inputStyle: _, keyCommandHandlers: g, multiline: !0, numberOfLines: this._calcNumberOfLines(), onBlur: p, onFilesAdded: this._handleFilesAdded, placeholder: this._getPlaceHolderText(), positionCursorAtBeginning: u, positionCursorAtEnd: !u, ref: this._setTextInputRef, styleType: "selection", testID: `${Le.Z.textareaPrefix}${s}`, useCacheForDOMMeasurements: e.state.isFocused, value: i.text };
                        }),
                        (this._renderFieldTextInput = ({ Store: e, dragPlaceholder: t }) => {
                            const i = this._fieldTextInputProps(e);
                            if (!e.state.isRichTextInput) return n.createElement(p.Z, (0, a.Z)({}, i, { maxNumberOfLines: 10, onChange: this._handlePlainTextChange }));
                            const r = e.state.editorState,
                                o = { withMaxHeight: !0, sendTweetCommandName: ue.NF, dismissComposerCommandName: ue.Bp, editorState: r, element: u.Z, dragPlaceholder: t, stripPastedStyles: !0, blockRendererFn: void 0, blockRenderMap: void 0 };
                            if (_e.v$.writeEnabled(this._note_tweet_context)) {
                                (o.stripPastedStyles = !0), (o.withMaxHeight = !1);
                                const t = {
                                    renderMedia: (e) => {
                                        for (const t of this.props.data.media)
                                            if (t.id === e) {
                                                const e = { is_inline: !0 };
                                                return this._renderMediaList([t], e);
                                            }
                                        return null;
                                    },
                                };
                                o.blockRendererFn = (e) => {
                                    if (e.getType() === m.UP) return { component: At, props: t, editable: !1 };
                                };
                                let a = s.DefaultDraftBlockRenderMap;
                                (a = a.set(m.UP, { wrapper: n.createElement(Pe.q, null) })), (a = a.set(m.Wo, { ...s.DefaultDraftBlockRenderMap.get(m.Wo), wrapper: n.createElement(Pe.q, null) })), (o.blockRenderMap = a), Object.assign(i.keyCommandHandlers, { bold: () => e.actions.mut.toggleInlineStyle("Bold"), italic: () => e.actions.mut.toggleInlineStyle("Italic") });
                            }
                            return n.createElement(p.Z, (0, a.Z)({}, i, { maxNumberOfLines: 30, onChange: this._handleRichTextChange, richTextInputContext: o }));
                        }),
                        (this._renderCommunityTweetFromProtectedUserCallout = () => (0 === this.props.index && this.props.isCommunityTweetFromProtectedUser ? n.createElement(De.Z, null) : null)),
                        (this._renderAudienceControls = (e) => {
                            const { audienceControlsValue: t, index: i, isAccountProtected: a, isEdit: s, isSuperFollowsCreator: r } = this.props,
                                o = this.context.featureSwitches.isTrue("super_follow_exclusive_tweet_creation_api_enabled"),
                                l = this.context.featureSwitches.isTrue("trusted_friends_tweet_creation_enabled");
                            return n.createElement(q.l, { store: Fe.Z }, (d) => {
                                const c = this._shouldRenderControls(e, d.state.isFocused, "audience"),
                                    h = { isTrustedFriendsEnabled: l };
                                return c && 0 === i ? n.createElement(J.Z, { audienceControlsValue: t, disabled: s, experiments: h, isAccountProtected: a, isSuperFollowsCreator: r && o, onAudienceControlsValueChange: this._handleAudienceControlsValueChange }) : null;
                            });
                        }),
                        (this._calcNumberOfLines = () => {
                            const { data: e, isActive: t, isInline: i } = this.props,
                                a = this._isRichTextInput(),
                                { media: n, pollActive: s, quotedStatus: r } = e,
                                o = !!n.length || !!s || !!r;
                            return (a && (i || o)) || !t ? Et : Ct;
                        }),
                        (this._renderScheduledTweetLegend = () => n.createElement(ve.Z, { onPress: this._handlePressScheduledTweetLegend, scheduledFor: this.props.scheduledFor, testID: Le.Z.scheduledTweetIndicator })),
                        (this._handlePressScheduledTweetLegend = () => {
                            this.props.history.push("/compose/post/schedule"), this.props.analytics.scribe({ element: "tweet_legend", action: "click" }), this.props.setActiveParentKey();
                        }),
                        (this._maybeRenderEmojiPicker = () =>
                            this._isRichTextInput()
                                ? n.createElement(q.l, { store: Fe.Z }, (e) => {
                                      const { editorState: t } = e.state;
                                      if (!t) return null;
                                      return n.createElement(Te.Z, {
                                          isWebRedesign: this._isWebRedesign,
                                          onEmojiSelect: (e) => {
                                              const i = d.Z.insertTextAtCursor(t, e.text);
                                              this._handleRichTextChange(i);
                                          },
                                          size: "medium",
                                          style: wt.iconEmojiPicker,
                                          textInputRef: this._textInputRef || void 0,
                                      });
                                  })
                                : null),
                        (this._areConversationControlsDisabled = () => {
                            const { audienceControlsValue: e, isEdit: t } = this.props,
                                i = e.conversationControlsValue;
                            return i === Ee.k.community_members || i === Ee.k.super_followers_exclusive || i === Ee.k.trusted_friends_tweet || i === Ee.k.premium || t || this._isScheduled();
                        }),
                        (this._isSchedulingDisabled = () => {
                            const { audienceControlsValue: e, data: t, index: i, isEdit: a, isLast: n, isReply: s } = this.props,
                                r = !(0 === i && n),
                                o = e.conversationControlsValue !== Ee.k.all,
                                { media: l, quotedStatus: d, text: c } = t,
                                h = _e.SC(t, this._note_tweet_context),
                                p = this.context.featureSwitches.isTrue("longform_notetweets_scheduling_non_reply_enabled") && !s,
                                u = (h && !p) || this.props.isPollActiveInThread || a || (r && !this._isThreadsEnabledInScheduling) || (d && "" === c && !l.length) || o || this.props.data.mediaTags.length > 0;
                            return Boolean(u);
                        }),
                        (this._isVeryNarrow = () => {
                            const { containerWidth: e } = this.props;
                            return e < g.default.theme.breakpoints.xxSmall;
                        }),
                        (this._renderSchedulingButton = () => n.createElement(h.ZP, { "aria-label": Oe, disabled: this._isSchedulingDisabled(), hoverLabel: { label: Je }, icon: n.createElement(B.default, { style: this._isWebRedesign && wt.icon }), onClick: this._handleClickScheduler, size: "medium", testID: Le.Z.scheduleOption, type: this._isWebRedesign ? "primaryText" : "brandText" })),
                        (this._handleClickScheduler = () => {
                            this.props.history.push("/compose/post/schedule"), this.props.analytics.scribe({ element: "schedule_tweet", action: "click" }), this.props.setActiveParentKey();
                        }),
                        (this._renderMediaList = (e, t = {}) => {
                            if (0 === e.length) return null;
                            const i = this.ComposerStore,
                                a = this.context,
                                r = { ...i.state },
                                l = _e.v$.enabled({ context: a, state: r });
                            let d, c, h;
                            if (this.isEditMediaEnabled && (this.hasAttachedImage ? ((d = this._handleClickMediaDetail()), (c = d)) : this.hasAttachedVideo && (c = this._handleClickMediaDetail()), this.hasAttachedImage || this.hasAttachedVideo)) {
                                const e = le.P.SensitiveMedia;
                                h = this._handleClickMediaDetail(e);
                            }
                            let p, u;
                            const m = !this.hasAttachedVideo && !this.hasAttachedGif;
                            if (l.features.inline_media)
                                if (t.is_inline) p = e;
                                else {
                                    p = [];
                                    const t = It({ editorState: i.state.editorState });
                                    for (let i = 0; i < e.length; i++) {
                                        const a = e[i];
                                        t.has(a.id) || p.push(a);
                                    }
                                    u = (e) => {
                                        let t;
                                        for (let i = 0; i < p.length; i++) {
                                            p[i].id === e && (t = i);
                                        }
                                        return (
                                            o()("number" == typeof t, `invalid [${e}]`),
                                            (function (e) {
                                                const t = e.Store.state.editorState;
                                                let i;
                                                if (
                                                    (vt(t, (t) => {
                                                        if (t.entity && "number" != typeof i)
                                                            switch (t.entity.type) {
                                                                case k.Z.INLINE_IMAGE:
                                                                    t.entity.getData().media_id === e.media_id && (i = t.i);
                                                                    break;
                                                                default:
                                                                    throw new Error(`unhandled entity [${t.entity.type}]`);
                                                            }
                                                    }),
                                                    "number" != typeof i)
                                                ) {
                                                    const a = t.getCurrentContent().getBlocksAsArray();
                                                    i = a.length + e.index;
                                                }
                                                return i;
                                            })({ index: t, media_id: e, Store: i })
                                        );
                                    };
                                }
                            else p = e;
                            return n.createElement(we.Z, {
                                containsOnlyImages: m,
                                editable: this.props.editable,
                                getDraggableIndex: u,
                                isActive: this.props.isActive,
                                isInline: t.is_inline,
                                media: p,
                                mixedMediaUploadsEnabled: this._mixedMediaUploadsEnabled,
                                onClickMedia: d,
                                onEditMedia: c,
                                onEditSensitiveWarning: h,
                                onRemoveMedia: (e) => () => {
                                    this.props.onRemoveMedia(this.props.index, e),
                                        l.features.inline_media &&
                                            this.ComposerStore.actions.mut.defer_editorState((t) => {
                                                const i = t.editorState;
                                                return (function (e) {
                                                    let t = e.editorState;
                                                    const i = [];
                                                    vt(t, ({ block: t, entity: a }) => {
                                                        if (a)
                                                            switch (a.type) {
                                                                case k.Z.INLINE_IMAGE:
                                                                    a.getData().media_id !== e.media_id && i.push(t);
                                                                    break;
                                                                default:
                                                                    throw new Error(`unhandled entity [${a.type}]`);
                                                            }
                                                        else i.push(t);
                                                    });
                                                    const a = s.ContentState.createFromBlockArray(i);
                                                    return (t = s.EditorState.push(t, a, "remove-range")), t;
                                                })({ media_id: e, editorState: i });
                                            });
                                },
                                onSetMediaPreviewRef: (e) => {
                                    this._mediaPreviewRef = e;
                                },
                            });
                        }),
                        (this._renderTweetAttachment = () => {
                            const { data: e } = this.props;
                            if (0 === e.media.length && !e.pollActive && !e.quotedStatus) return null;
                            const [t] = e.media,
                                i = this.hasAttachedVideo && 1 === this.videoUploads.length && this.isVideoMetadataEnabled;
                            return n.createElement(l.Z, { onClick: this._handleFocus, style: [wt.attachmentContainer, wt.tweetAttachmentArea], testID: Le.Z.attachments }, i ? n.createElement(n.Fragment, null, n.createElement(_.Z, { spacing: "space4" }), n.createElement(l.Z, { style: wt.videoMetadataContainer }, n.createElement(l.Z, { style: wt.videoMetadataForm }, n.createElement(p.Z, { appTextSize: "body", maxLength: 100, onChange: this._handleMediaTitleChange, placeholder: gt, styleType: "pill" }), n.createElement(p.Z, { appTextSize: "body", inputStyle: wt.videoDescriptionInput, leftAligned: !0, maxLength: 1e3, multiline: !0, onChange: this._handleMediaDescriptionChange, placeholder: _t, style: wt.videoDescription, styleType: "pill" }), this._mixedMediaUploadsEnabled && this.hasAttachedVideo && n.createElement(b.Z.Primary, { action: { label: et, link: ft }, text: tt })), n.createElement(l.Z, { style: wt.videoMetadataPreview }, this._renderMediaList(e.media), this.props.isActive ? this._renderMediaActions() : null, this._mixedMediaUploadsEnabled && n.createElement(Re.h, { key: t.id, mediaItem: t, mixedMediaUploadsEnabled: this._mixedMediaUploadsEnabled })))) : n.createElement(n.Fragment, null, this._renderMediaList(e.media), this.props.isActive ? this._renderMediaActions() : null, this._mixedMediaUploadsEnabled ? e.media.map((e) => n.createElement(Re.h, { key: e.id, mediaItem: e, mixedMediaUploadsEnabled: this._mixedMediaUploadsEnabled })) : n.createElement(Re.h, { mediaItem: t })), e.pollActive ? n.createElement(Be.Z, { composerIndex: this.props.index, editable: this.props.editable, initialChoices: e.pollChoices, initialDuration: e.pollDuration, isActive: this.props.isActive, isPollValid: e.pollValid, updateComposer: this.props.updateSingleComposer }) : null, e.quotedStatus ? this._renderQuoteTweet(e.quotedStatus) : null);
                        }),
                        (this._renderQuoteTweet = (e) => {
                            const {
                                    data: { media: t },
                                } = this.props,
                                i = e.tombstoneInfo;
                            return i && i.richText ? n.createElement(de.Z, null, n.createElement(oe.Z, { entities: i.richText.entities, rtl: i.richText.rtl, text: i.richText.text })) : n.createElement(re.Z, { isCondensed: t.length > 0, style: wt.quoteTweet, tweetId: e.id_str, withLink: !1, withUserHoverCard: !1 });
                        }),
                        (this._renderToolbar = (e) => {
                            const { additionalToolbarContent: t, hidePoll: i, hideScheduling: a, isInlineReply: s, isReply: r, isSelfThreadReply: o } = this.props,
                                d = !s && !i,
                                c = !s && !a,
                                h = this.context.featureSwitches.isTrue("responsive_web_reply_storm_enabled"),
                                p = this.context.featureSwitches.isTrue("responsive_web_grok_img_composer"),
                                u = this.context.featureSwitches.isTrue("responsive_web_grok_post_composer"),
                                m = e && (!r || o || h);
                            return n.createElement(l.Z, { style: [wt.toolBar, this._isVeryNarrow() && wt.toolBarVeryNarrow], testID: Le.Z.toolBar }, this._isWebRedesign ? n.createElement(y.Z, { buttonsContainerStyle: wt.toolBarButtonsWrapper, style: [wt.toolBarIconsContainer, wt.scrollSnap] }, n.createElement(Fe.Z.InlineStyleButton, { isWebRedesign: !0, style: "Bold" }), n.createElement(Fe.Z.InlineStyleButton, { isWebRedesign: !0, style: "Italic" }), this._renderGifButton(), p && !u ? this._renderGrokButton() : null, p && u ? this._renderMultiGrokButton() : null, this._renderMediaPicker(), d ? this._renderPollButton() : null, this._maybeRenderEmojiPicker(), c ? this._renderSchedulingButton() : null, this._renderGeoButton()) : n.createElement(y.Z, { buttonsContainerStyle: wt.toolBarButtonsWrapper, style: [wt.toolBarIconsContainer, wt.scrollSnap] }, this._renderMediaPicker(), this._renderGifButton(), p && !u ? this._renderGrokButton() : null, p && u ? this._renderMultiGrokButton() : null, d ? this._renderPollButton() : null, this._maybeRenderEmojiPicker(), c ? this._renderSchedulingButton() : null, this._renderGeoButton(), n.createElement(Fe.Z.InlineStyleButton, { style: "Bold" }), n.createElement(Fe.Z.InlineStyleButton, { style: "Italic" })), n.createElement(l.Z, { style: [wt.toolBarIconsContainer, this._isVeryNarrow() && wt.toolBarIconsContainerRight] }, e ? n.createElement(Ae.d, this.props) : null, m && n.createElement(n.Fragment, null, n.createElement(l.Z, { style: wt.separator }), this._renderAddComposerButton()), t));
                        }),
                        (this._handleRichTextChange = (e) => {
                            this._TypeaheadWrapper_onInputChange(e), this.ComposerStore.actions.mut.editorState(e);
                        }),
                        (this._handlePlainTextChange = (e) => {
                            this._TypeaheadWrapper_onInputChange(e);
                            const t = x.Z.replaceCarriageReturns(e.target.value);
                            this._handleTextChange({ text: t });
                        }),
                        (this._handleTextChange = (e) => {
                            this.props.onTextChange(this.props.data.key, e), this._handleNoteTweetScribes(e);
                        }),
                        (this._handleMediaTitleChange = (e) => {
                            this.props.onMediaTitleChange(this.props.data.key, e.currentTarget?.value);
                        }),
                        (this._handleMediaDescriptionChange = (e) => {
                            this.props.onMediaDescriptionChange(this.props.data.key, e.currentTarget?.value);
                        }),
                        (this._handleNoteTweetScribes = (e) => {
                            if (!_e.SC(e, this._note_tweet_context)) return;
                            const t = this._getParsedTweet(e.text).weightedLength;
                            this._scribeOnlyOnceEvents.hasStartedNoteTweet || (this.props.analytics.scribe({ element: "note_tweet", action: "start" }), (this._scribeOnlyOnceEvents.hasStartedNoteTweet = !0)), t > ye.WT.warning_count(this._note_tweet_context) && !this._scribeOnlyOnceEvents.hasSeenNoteTweetWarningCount && (this.props.analytics.scribe({ element: "note_tweet", action: "limit_warning" }), (this._scribeOnlyOnceEvents.hasSeenNoteTweetWarningCount = !0)), t > ye.WT.max_count(this._note_tweet_context) && !this._scribeOnlyOnceEvents.hasExceededNoteTweetCharacterCount && (this.props.analytics.scribe({ element: "note_tweet", action: "limit_exceeded" }), (this._scribeOnlyOnceEvents.hasExceededNoteTweetCharacterCount = !0));
                        }),
                        (this._handleClickAltTextShortcut = () => {
                            this.props.analytics.scribe({ element: "alt_text_button", action: "click" });
                        }),
                        (this._handleClickSubtitlesShortcut = () => {
                            this.props.analytics.scribe({ element: "subtitles_button", action: "click" });
                        }),
                        (this._getDefaultTab = (e) => (e ? (e.originalMediaFile?.isVideo ? (this._videoTrimmerEnabled ? le.P.Trimmer : le.P.Subtitles) : e.externalMediaDetails || e.mediaFile?.isGif ? le.P.AltText : le.P.Crop) : le.P.AltText)),
                        (this._handleClickMediaDetail = (e) => (t) => () => {
                            if ((this.props.analytics.scribe({ element: "media_detail_button", action: "click" }), this.hasAttachedImage || this.hasAttachedVideo)) {
                                const i = { mediaId: t, tab: e };
                                if (!e) {
                                    const e = this.props.data.media.find((e) => e.id === t);
                                    i.tab = this._getDefaultTab(e);
                                }
                                this.props.history.push("/compose/post/media", i);
                            }
                        }),
                        (this._handleFilesAdded = (e) => {
                            const {
                                addToast: t,
                                data: { pollActive: i },
                                onFilesAdded: a,
                            } = this.props;
                            i ? t({ text: Ke }) : this.isEditMediaEnabled && a(e);
                        }),
                        (this._validateMedia = (e) => {
                            const {
                                data: { media: t },
                            } = this.props;
                            return pe.X2(t.concat(e));
                        }),
                        (this._handlePollAdd = () => {
                            this.props.analytics.scribe({ element: "add_poll", action: "click" }), this.props.updateSingleComposer({ pollActive: !0 }, this.props.index);
                        }),
                        (this._handleGeoButtonClick = () => {
                            this.props.history.push("/compose/post/place_picker"), this.props.analytics.scribe({ element: "tag_location", action: "click" }), this.props.setActiveParentKey();
                        }),
                        (this._handleGrokImgGenButtonClick = () => {
                            this.props.history.push("/compose/post/grok"), this.props.analytics.scribe({ element: "grok", action: "click" }), this.props.setActiveParentKey();
                        }),
                        (this._handleGrokPostGenButtonClick = () => {
                            this.props.history.push("/compose/post/grok-enhance"), this.props.analytics.scribe({ element: "grok", action: "click" }), this.props.setActiveParentKey();
                        }),
                        (this._handleWrapperClick = (e) => {
                            (e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) || this.focus();
                        }),
                        (this._handleFocus = () => {
                            const { index: e, isActive: t, onFocus: i, setActiveParentKey: a } = this.props;
                            a(),
                                t ||
                                    (window.requestAnimationFrame(() => {
                                        this._mediaPreviewRef && this._mediaPreviewRef.playVideo();
                                    }),
                                    i(e));
                        }),
                        (this._getPlaceHolderText = () => {
                            const {
                                data: { pollActive: e, quotedStatus: t },
                                index: i,
                                isReply: a,
                                isSelfThreadReply: n,
                            } = this.props;
                            return t ? pt : e ? mt : this.isReplyOrReplyThread && 0 === i ? ut : a && !n && i > 0 ? ht : n || i > 0 ? ct : this._isWebRedesign ? dt : lt;
                        }),
                        (this._getNumberOfAltTextEntries = () => {
                            const {
                                data: { media: e },
                            } = this.props;
                            return e.reduce((e, t) => (t.mediaMetadata?.altText ? e + 1 : e), 0);
                        }),
                        (this._getNumberOfSubtitlesEntries = () => {
                            const {
                                data: { media: e },
                            } = this.props;
                            return e.reduce((e, t) => (t.mediaMetadata?.subtitles ? e + 1 : e), 0);
                        }),
                        (this._getParsedTweet = (0, Q.Z)((e) => ye.k2(e, this._note_tweet_context))),
                        (this._isEmpty = () => {
                            const { data: e } = this.props;
                            return (0, me._2)(e);
                        }),
                        (this._isScheduled = () => {
                            const {
                                data: { scheduledFor: e },
                            } = this.props;
                            return (0, be.TO)(e);
                        }),
                        (this._autotagLocationIfNeeded = () => {
                            const {
                                data: { taggedLocation: e },
                                fetchAutotaggedLocationIfNeeded: t,
                                index: i,
                                updateSingleComposer: a,
                            } = this.props;
                            t().then((t) => {
                                void 0 === e && a({ taggedLocation: t ?? null }, i);
                            });
                        }),
                        (this._setTextInputRef = (e) => {
                            this._textInputRef = e;
                        }),
                        (this._deleteNonemptyTweetstormComposerEnabled = this.context.featureSwitches.isTrue("responsive_web_delete_nonempty_tweetstorm_composer_enabled")),
                        (this._mixedMediaUploadsEnabled = this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled")),
                        (this._maxMediaUploads = this.context.featureSwitches.getNumberValue("rweb_mixed_media_uploads_cap") || ue.nO),
                        (this._isWebRedesign = this.context.featureSwitches.isTrue("rweb_sourcemap_migration")),
                        this._autotagLocationIfNeeded(),
                        (this._scribeOnlyOnceEvents = { hasStartedNoteTweet: !1, hasSeenNoteTweetWarningCount: !1, hasExceededNoteTweetCharacterCount: !1 });
                }
                componentDidUpdate(e) {
                    !this.props.data.lateUpdateEditorStateRaw || (0, $.Z)(this.props.data.lateUpdateEditorStateRaw?.entityMap, e.data.lateUpdateEditorStateRaw?.entityMap) || (0, $.Z)(this.props.data.lateUpdateEditorStateRaw?.entityMap, this.props.data.editorStateRaw?.entityMap) || this.ComposerStore.actions.mut.editorStateRaw(this.props.data.lateUpdateEditorStateRaw);
                    (this.hasExternalMedia || this.props.data.media.some((e) => e.mediaFile && !(e.mediaFile instanceof j.ZP) && e.mediaFile.isVideo)) && e.isActive && !this.props.isActive && this._mediaPreviewRef && this._mediaPreviewRef.pauseVideo();
                }
                focus() {
                    this._textInputRef && this._textInputRef.focus();
                }
                render() {
                    const { containerWidth: e, isActive: t, isExpanded: i, isInline: a, isThread: s, viewerUser: r, withAvatar: o } = this.props,
                        d = !this._isEmpty(),
                        c = { init: this._init_editorState(), state: { isThread: s, isRichTextInput: this._isRichTextInput() } },
                        h = !a || e < g.default.theme.breakpoints.xSmall;
                    return n.createElement(
                        Fe.Z.Provider,
                        c,
                        n.createElement(q.l, { store: Fe.Z }, (e) => ((this.ComposerStore = e), null)),
                        n.createElement(Fe.Z.DeveloperDebug, null),
                        n.createElement(Fe.Z.ConvertEmojiEffect, null),
                        n.createElement(Fe.Z.OverflowHighlightEffect, null),
                        n.createElement(Fe.Z.PreserveUnstyledEntitiesEffect, null),
                        n.createElement(Fe.Z.TextChangeEffect, { onTextChange: this._handleTextChange }),
                        n.createElement(
                            Fe.Z.TrackFocusView,
                            { onClick: this._handleWrapperClick, onFocus: this._handleFocus, style: [wt.root, !t && wt.blurStyle] },
                            this._renderCommunityTweetFromProtectedUserCallout(),
                            n.createElement(
                                f.Z,
                                { avatarCell: n.createElement(n.Fragment, null, o ? n.createElement(C.Z.Consumer, null, ({ avatarSize: e }) => n.createElement(E.default, { "aria-label": r?.name, screenName: r?.screen_name, size: e, style: wt.avatar, uri: r?.profile_image_url_https, withLink: a })) : null, this.props.isLast ? null : n.createElement(l.Z, { style: [wt.conversationLine, !o && wt.conversationLineWithOverflow] })), avatarCellStyle: i ? wt.avatarContainerExpanded : wt.avatarContainer, cellStyle: wt.rightColumn, style: wt.avatarRow },
                                this._renderScheduledTweetLegend(),
                                n.createElement(
                                    l.Z,
                                    { style: wt.inputArea },
                                    n.createElement(T.ZP, { allowDragDrop: !this.mediaAttachDisabled, onDragEnter: this._handleFocus, onFilesAdded: this._handleFilesAdded, style: wt.dragDrop }, (e) => n.createElement(l.Z, { style: wt.composeBoxContainer }, this._renderMainContent())),
                                ),
                                h ? null : this._renderControlsAndToolbar(d),
                            ),
                            this._renderLinksDisabledCallout(),
                            h ? this._renderControlsAndToolbar(d) : null,
                        ),
                    );
                }
                _renderControls() {
                    const {
                            containerWidth: e,
                            data: { taggedLocation: t },
                        } = this.props,
                        i = !this._isEmpty(),
                        a = e < g.default.theme.breakpoints.small,
                        s = this.props.audienceControlsValue.communityIdValue || void 0;
                    return n.createElement(q.l, { store: Fe.Z }, (e) => {
                        const r = this._shouldRenderControls(i, e.state.isFocused),
                            o = (() => {
                                const t = this.context.featureSwitches.isTrue("c9s_enabled") && s,
                                    i = this._shouldRenderControls(!1, e.state.isFocused, "conversation");
                                return Boolean(i && t);
                            })();
                        return n.createElement(n.Fragment, null, o ? n.createElement(ee.Z, null) : null, n.createElement(l.Z, { style: [(r || t) && wt.controlsContainer, a ? wt.mobileControlsLayout : wt.controlsLayout] }, this._renderConversationControls(i), o && s ? n.createElement(Y.Z, { selectedCommunityId: s }) : null, this._renderAutoSaveStatus(), t ? this._renderTaggedLocation(t) : null));
                    });
                }
                _renderLinksDisabledCallout() {
                    if (!this.context.featureSwitches.isTrue("disallowed_reply_controls_callout_enabled")) return null;
                    const { isActive: e, isExpanded: t, isReply: i, linksDisabledInReplies: a } = this.props;
                    return i && a && t && e ? n.createElement(S.Z, { displayMode: "inline", screenName: "The Author", style: wt.linksDisabledCallout, type: "linksDisabledInReplies" }) : null;
                }
                _renderAutoSaveStatus() {
                    const { isAutoSaved: e, isAutoSaving: t, willAutoSave: i } = this.props,
                        a = t || i ? We : e ? Ge : null;
                    return a ? n.createElement(l.Z, null, n.createElement(w.ZP, { style: wt.autoSaveStatusText, testID: Le.Z.autoSaveStatus }, a)) : null;
                }
                get _isThreadsEnabledInScheduling() {
                    return this.context.featureSwitches.isTrue("responsive_web_scheduling_threads_enabled");
                }
                _renderMediaPicker() {
                    const {
                        data: { media: e },
                        setActiveParentKey: t,
                    } = this.props;
                    return n.createElement(l.Z, { style: wt.mediaPicker }, n.createElement(Me.Z, { hasInlineMedia: this.hasInlineMedia, isWebRedesign: this._isWebRedesign, maxMediaCount: this._maxMediaUploads, media: e, mediaAttachDisabled: this.mediaAttachDisabled, onFilesAdded: this._handleFilesAdded, setActiveParentKey: t, withMixedMedia: this._mixedMediaUploadsEnabled }));
                }
                _renderGifButton() {
                    const {
                        data: { media: e, pollActive: t },
                        history: i,
                        setActiveParentKey: a,
                        viewerUser: s,
                    } = this.props;
                    let r = t || e.length || !s || !this.isEditMediaEnabled;
                    return this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") && (r = t || e.length === this._maxMediaUploads || !s || !this.isEditMediaEnabled || this.hasInlineMedia), n.createElement(Se.Z, { enabled: !r, gifSearchKeySource: ge.AD.Composition, history: i, isWebRedesign: this._isWebRedesign, onPress: a, testID: Le.Z.gifSearchButton });
                }
                _renderPollButton() {
                    const { data: e, isEdit: t, viewerUser: i } = this.props,
                        a = Be.w.isPollButtonDisabled({ composerData: e, isEditMode: t, isScheduled: this._isScheduled(), isUserLoggedIn: !!i });
                    return n.createElement(h.ZP, { "aria-label": Ne, disabled: a, hoverLabel: { label: Xe }, icon: n.createElement(D.default, { style: this._isWebRedesign && wt.icon }), onPress: this._handlePollAdd, size: "medium", testID: Le.Z.createPollButton, type: this._isWebRedesign ? "primaryText" : "brandText" });
                }
                _renderGeoButton() {
                    const {
                            data: { taggedLocation: e },
                            geoEnabled: t,
                            viewerUser: i,
                        } = this.props,
                        a = !(t && i),
                        s = e ? n.createElement(M.default, { style: this._isWebRedesign && wt.icon }) : n.createElement(F.default, { style: this._isWebRedesign && wt.icon });
                    return n.createElement(h.ZP, { "aria-label": Ye, disabled: a, hoverLabel: { label: Ye }, icon: s, onPress: this._handleGeoButtonClick, size: "medium", testID: Le.Z.geoButton, type: this._isWebRedesign ? "primaryText" : "brandText" });
                }
                _renderMediaActions() {
                    const {
                            data: { gifMetadata: e, mediaTags: t },
                        } = this.props,
                        i = 0 !== t.length,
                        a = this.hasAttachedGif || this.hasExternalMedia;
                    if (!(this.hasAttachedImage || this.hasAttachedVideo || e || a)) return null;
                    const s = this.context.featureSwitches.isTrue("rweb_video_tagging_enabled");
                    return n.createElement(l.Z, { style: wt.imageActions }, e && e.url && e.provider && !this._mixedMediaUploadsEnabled ? n.createElement(ne.Z, { gifUrl: e.url, provider: e.provider }) : null, (!this.hasAttachedImage && !s) || this._isScheduled() ? null : n.createElement(w.ZP, { "aria-label": nt, color: "gray700", link: "/compose/post/tags", size: "subtext2", style: wt.addImageTextContainer }, i ? this._renderTaggedUsers() : this._renderTagPeopleLabel()), this.hasAttachedImage || a ? this._renderAltTextLabel() : null, this.hasAttachedVideo ? this._renderSubtitlesLabel() : null);
                }
                _renderTagPeopleLabel() {
                    return n.createElement(w.ZP, { color: "gray700", testID: Le.Z.tagPeopleLabel }, n.createElement(L.default, { style: wt.addImageActionIcon }), nt);
                }
                _renderTaggedUsers() {
                    const {
                            data: { mediaTags: e },
                            viewerUser: t,
                        } = this.props,
                        i = e.map((e) => ({ name: e.data.name, screen_name: e.data.screen_name, type: e.type, user_id: e.data.id_str })),
                        a = t?.id_str;
                    return n.createElement(w.ZP, { color: "gray700" }, n.createElement(U.default, { style: wt.addImageActionIcon }), n.createElement(v.Z, { loggedInUserId: a, users: i }));
                }
                _renderAltTextLabel() {
                    const {
                            data: { media: e },
                        } = this.props,
                        t = this.imageUploads[0],
                        i = this.imageUploads.length,
                        a = t?.mediaMetadata,
                        s = this.hasAttachedAltText ? V.default : W.default;
                    return n.createElement(w.ZP, { "aria-label": it({ numberOfImages: e.length }), color: "gray700", link: this.isEditMediaEnabled ? { pathname: "/compose/post/media", state: { mediaId: t.id, tab: le.P.AltText } } : void 0, onPress: this.isEditMediaEnabled ? this._handleClickAltTextShortcut : void 0, size: "subtext2", style: wt.addImageTextContainer, testID: Le.Z.altTextWrapper }, n.createElement(w.ZP, { testID: Le.Z.altTextLabel }, n.createElement(s, { style: wt.addImageActionIcon }), (() => (this.hasAttachedAltText ? (i > 1 ? at({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }) : a?.altText) : it({ numberOfImages: i })))()));
                }
                _renderSubtitlesLabel() {
                    const e = this.hasAttachedSubtitles ? G.default : N.default,
                        t = this.videoUploads[0],
                        i = this._getNumberOfSubtitlesEntries(),
                        a = this.videoUploads.length;
                    return n.createElement(w.ZP, { color: "gray700", link: { pathname: "/compose/post/media", state: { mediaId: t.id, tab: le.P.Subtitles } }, onPress: this._handleClickSubtitlesShortcut, role: "button", size: "subtext2", style: wt.addImageTextContainer, testID: Le.Z.addSubtitlesLabel }, n.createElement(e, { "aria-label": this.hasAttachedSubtitles ? ot : void 0, style: wt.addImageActionIcon }), (() => (this.hasAttachedSubtitles ? (a > 1 ? rt({ numberOfSubtitles: i }) : t.mediaMetadata?.subtitles?.displayName) : st({ numberOfVideos: a })))());
                }
                _renderAddComposerButton() {
                    const { addComposerLink: e, disableAddTweet: t, isCommunityTweetFromProtectedUser: i, isEdit: a, onAddComposer: s, viewerUser: r } = this.props,
                        o = this._isEmpty(),
                        l = this._isScheduled(),
                        d = a || t || o || (l && !this._isThreadsEnabledInScheduling) || !r || i;
                    return n.createElement(h.ZP, { "aria-label": this.isReplyOrReplyThread ? je : He, disabled: d, hoverLabel: { label: Qe }, icon: St, link: d ? void 0 : e, onPress: s, size: "xSmall", testID: Le.Z.addButton, type: "brandOutlined" });
                }
                get _note_tweet_context() {
                    const { isThread: e } = this.props;
                    return { ...this.context, isThread: e };
                }
                get isVideoMetadataEnabled() {
                    return this.context.featureSwitches.isTrue("video_upload_metadata_title_enabled");
                }
                get isEditMediaEnabled() {
                    const { previousMedia: e } = this.props;
                    if (this.props.isEdit && e) {
                        const t = new Set();
                        for (const i of e) t.add(i.uploadId);
                        for (const e of this.props.data.media) if (t.has(e.uploadId)) return !1;
                    }
                    return !0;
                }
                get mediaAttachDisabled() {
                    const e = this.props.data.media.length,
                        t = this.props.data.media.some((e) => e.mediaFile?.isGif),
                        i = this.props.data.media.some((e) => e.mediaFile && !(e.mediaFile instanceof j.ZP) && e.mediaFile.isVideo),
                        a = e === this._maxMediaUploads;
                    let n = t || i || this.hasExternalMedia;
                    return this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") && (n = !1), a || n || this.props.data.pollActive || !this.props.viewerUser || !this.isEditMediaEnabled;
                }
                get hasInlineMedia() {
                    const e = this.ComposerStore?.state?.editorState;
                    if (e) {
                        return It({ editorState: e }).size > 0;
                    }
                    return !1;
                }
                get hasAttachedImage() {
                    return this.props.data.media.some((e) => e.mediaFile?.isImage);
                }
                get hasAttachedVideo() {
                    const e = this.props.data.media.some((e) => e.mediaFile?.isVideo);
                    return e && (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue("responsive_web_video_trimmer_enabled")), e;
                }
                get hasAttachedGif() {
                    return this.props.data.media.some((e) => e.mediaFile?.isGif || e.externalMediaDetails);
                }
                get videoUploads() {
                    return this.props.data.media.filter((e) => e.mediaFile?.isVideo);
                }
                get imageUploads() {
                    return this.props.data.media.filter((e) => e.mediaFile?.isImage || e.mediaFile?.isGif || e.externalMediaDetails);
                }
                get hasAttachedSubtitles() {
                    return this._getNumberOfSubtitlesEntries() > 0;
                }
                get hasAttachedAltText() {
                    return this._getNumberOfAltTextEntries() > 0;
                }
                get hasExternalMedia() {
                    return this.props.data.media.some((e) => !!e.externalMediaDetails);
                }
                get isReplyOrReplyThread() {
                    const { isReply: e, isSelfThreadReply: t } = this.props;
                    return e && !t;
                }
            }
            (Ue.contextType = ae.rC), (Ue.defaultProps = { withAvatar: !0 });
            const Ve = (0, fe.Z)(Ue),
                We = R().ce9a9736,
                Ge = R().c9f5ae0a,
                Ne = R().f0afcc0e,
                Oe = R().d39e3e78,
                ze = R().f6bab0da,
                Ke = R().cc2b28fc,
                He = R().i6f7062c,
                je = R().j1d5791c,
                qe = R().e76f3776,
                Qe = R().af40a8e0,
                $e = R().e68b09b4,
                Xe = R().ec10ee02,
                Je = R().h735a98e,
                Ye = R().cce30dcc,
                et = R().i859a9d4,
                tt = R().ee016dd6,
                it = R().j499fbcb,
                at = R().b7d8e3f1,
                nt = R().d1175c78,
                st = R().b2943227,
                rt = R().d0afbb37,
                ot = R().e0342f98,
                lt = R().e349147c,
                dt = R().b4481d6c,
                ct = R().df45f564,
                ht = R().fbd24526,
                pt = R().de4669e2,
                ut = R().ed1f39ec,
                mt = R().a402b908,
                gt = R().ic05a146,
                _t = R().e36287c6,
                bt = R().d9c096f0,
                yt = R().d2553906,
                xt = R().b85f402a,
                ft = (0, I.ju)("https://help.x.com/using-twitter/twitter-videos"),
                Ct = 4,
                Et = 1,
                Tt = n.createElement(O.default, null),
                St = n.createElement(z.default, null),
                wt = g.default.create((e) => ({
                    autoSaveStatusText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 },
                    controlsAndToolbar: { backgroundColor: e.colors.navigationBackground, bottom: -1, paddingBottom: e.spaces.space8, position: "sticky", top: 0, zIndex: 1 },
                    root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
                    linksDisabledCallout: { marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
                    avatarContainerExpanded: { paddingTop: 52 - E.default.getSizeSimple(E.default.defaultSize) + "px" },
                    avatarContainer: { justifyContent: "center" },
                    avatar: { width: "100%" },
                    avatarRow: { zIndex: 1 },
                    controlsContainer: { marginStart: -e.spacesPx.space8, borderBottomColor: e.colors.borderColor, borderBottomWidth: e.spaces.space1, flexWrap: "wrap", width: "100%" },
                    mobileControlsLayout: { flexDirection: "row", justifyContent: "space-between" },
                    controlsLayout: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                    rightColumn: { paddingTop: e.spaces.space4, justifyContent: "center", position: "static", transitionProperty: "opacity, color", transitionDuration: "0.1s", transitionTimingFunction: "ease-out" },
                    composeBoxContainer: { display: "flex", flexDirection: "column", flexGrow: 1, flexShrink: 1, position: "static", zIndex: 1 },
                    inputArea: { zIndex: 1 },
                    dragDrop: { borderColor: e.colors.transparent, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.medium },
                    textInputArea: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", zIndex: he.zF },
                    textInputStyle: { paddingHorizontal: 0 },
                    textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: "hidden" },
                    tweetAttachmentArea: { zIndex: he.fr },
                    iconEmojiPicker: { zIndex: he.CX },
                    toolBar: { alignItems: "center", backgroundColor: e.colors.navigationBackground, flexDirection: "row", justifyContent: "space-between", width: "100%", zIndex: he.oH },
                    toolBarVeryNarrow: { alignItems: "flex-start", flexDirection: "column" },
                    toolBarIconsContainer: { alignItems: "center", flexDirection: "row", marginTop: e.spaces.space8 },
                    toolBarIconsContainerRight: { alignSelf: "flex-end" },
                    mediaPicker: { height: "100%", justifyContent: "center" },
                    scrollSnap: { marginStart: `-${e.spaces.space8}`, flex: 1 },
                    toolBarButtonsWrapper: { paddingHorizontal: e.spaces.space2, paddingVertical: e.spaces.space2 },
                    separator: { width: "1px", backgroundColor: e.colors.gray300, height: e.fontSizes.title2, marginEnd: e.spaces.space12, marginStart: `calc(${e.spaces.space12} - 2px)` },
                    conversationLine: { alignSelf: "center", backgroundColor: e.colors.gray200, flexGrow: 1, flexShrink: 1, minHeight: 0, width: e.componentDimensions.conversationLineWidth, marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
                    conversationLineWithOverflow: { marginTop: `-${e.spaces.space4}` },
                    attachmentContainer: { gap: e.spaces.space4, marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
                    quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
                    addImageTextContainer: { alignSelf: "flex-start", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" },
                    addImageActionIcon: { marginHorizontal: e.spaces.space4 },
                    imageActions: { alignItems: "center", flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space4, marginTop: e.spaces.space4 },
                    blurStyle: { opacity: 0.5 },
                    inputStyle: { width: "100%" },
                    collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
                    highlightedText: { borderRadius: e.borderRadii.large, paddingVertical: e.spaces.space12, paddingStart: e.spaces.space12, marginTop: 0, marginBottom: 0 },
                    highlightedTextInner: { marginHorizontal: e.spaces.space4 },
                    taggedLocationButton: { paddingStart: e.spacesPx.space8 + e.spacesPx.space2, paddingEnd: e.spacesPx.space8 + e.spacesPx.space2, maxWidth: "100%" },
                    taggedLocationContainer: { display: "inline-flex", flexDirection: "row", minWidth: 0, flexShrink: 1, paddingBottom: e.spaces.space12 },
                    icon: { color: e.colors.gray700 },
                    videoMetadataContainer: { flexDirection: "row", alignItems: "flex-start", gap: e.spaces.space8 },
                    videoMetadataForm: { flexDirection: "column", width: "40%", gap: e.spaces.space8 },
                    videoMetadataPreview: { width: "60%", flexDirection: "column", gap: e.spaces.space8 },
                    videoDescription: { minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "flex-start" },
                    videoDescriptionInput: { flex: 1, alignSelf: "stretch" },
                }));
            function vt(e, t) {
                const i = e.getCurrentContent(),
                    a = i.getBlocksAsArray();
                for (let e = 0; e < a.length; e++) {
                    const n = a[e];
                    let s = null;
                    if (n.getType() === m.UP) s = d.Z.getAtomicEntity({ block: n, contentState: i });
                    t({ block: n, entity: s, i: e, block_list: a });
                }
            }
            function It(e) {
                const t = new Set();
                return (
                    vt(e.editorState, ({ entity: e }) => {
                        if (e)
                            switch (e.type) {
                                case k.Z.INLINE_IMAGE: {
                                    const i = e.getData();
                                    t.add(i.media_id);
                                    break;
                                }
                                default:
                                    throw new Error(`unhandled entity [${e.type}]`);
                            }
                    }),
                    t
                );
            }
            function kt(e, t) {
                let i = e,
                    a = i.getCurrentContent();
                (a = a.createEntity(...t)), (i = s.EditorState.createWithContent(a));
                const n = a.getLastCreatedEntityKey();
                (i = s.EditorState.moveSelectionToEnd(i)), (i = s.AtomicBlockUtils.insertAtomicBlock(i, n, " "));
                const r = i.getCurrentContent().getBlocksAsArray();
                return r[r.length - 2];
            }
            function At(e) {
                const t = d.Z.getAtomicEntity(e);
                if (!t) return null;
                if (t.type === k.Z.INLINE_IMAGE) return n.createElement(Pt, (0, a.Z)({}, e, { entity: t }));
                throw new Error(`unhandled entity [${t.type}]`);
            }
            function Pt(e) {
                const t = e.entity.getData();
                return e.blockProps.renderMedia(t.media_id);
            }
            function Zt(e) {
                const t = Fe.Z.useActions();
                if (!Fe.Z.useRichEnabled().features.inline_media) {
                    const t = void 0;
                    return e.children({ dragPlaceholder: t });
                }
                return n.createElement(
                    ce._y,
                    {
                        onDragEnd: function (i) {
                            const a = t.getState();
                            if (!a.editorState) return;
                            e.textInputRef?.blur();
                            const n = e.data.media;
                            let r = a.editorState,
                                o = r.getCurrentContent();
                            const l = o.getBlocksAsArray(),
                                d = o.getBlocksAsArray(),
                                c = It({ editorState: r });
                            for (const e of n) {
                                const t = e.id;
                                if (c.has(t)) continue;
                                const i = kt(r, [k.Z.INLINE_IMAGE, k.p.IMMUTABLE, { media_id: t }]);
                                d.push(i);
                            }
                            const h = d[i.source.index];
                            l.splice(i.source.index, 1), l.splice(i.destination.index, 0, h), (o = s.ContentState.createFromBlockArray(l)), (r = s.EditorState.push(r, o, "move-block")), t.mut.editorState(r);
                        },
                    },
                    n.createElement(ce.bK, { droppableId: e.data.key }, (t, i) => {
                        const s = t.placeholder;
                        return n.createElement("div", (0, a.Z)({ ref: t.innerRef }, t.droppableProps), e.children({ dragPlaceholder: s }));
                    }),
                );
            }
            function Rt({ handleGrokImgGenButtonClick: e, handleGrokPostGenButtonClick: t, imagesDisabled: i, isWebRedesign: s, textGenDisabled: r }) {
                const o = [],
                    [l, d] = n.useState(!1),
                    c = n.useCallback(() => {
                        d(!l);
                    }, [l]),
                    p = n.useCallback(() => {
                        d(!1), e();
                    }, [d, e]),
                    u = n.useCallback(() => {
                        d(!1), t();
                    }, [d, t]);
                return (
                    o.push({ disabled: i, Icon: K.default, actionText: bt, onClick: p }),
                    o.push({ disabled: r, Icon: H.default, actionText: yt, onClick: u }),
                    n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(h.ZP, { "aria-label": xt, disabled: r && i, hoverLabel: { label: xt }, icon: n.createElement(se.x1, { style: s && wt.icon }), onPress: c, size: "medium", testID: "grokImgGen", type: s ? "primaryText" : "brandText" }),
                        l &&
                            n.createElement(
                                A.default,
                                { isFixed: !0, onDismiss: c, preferredHorizontalOrientation: "right" },
                                o.map((e) => n.createElement(P.Z, (0, a.Z)({}, e, { key: e.actionText }))),
                            ),
                    )
                );
            }
        },
        117754: (e, t, i) => {
            e.exports = i.p + "twitter-circle.b1a74a9a.svg";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7.1ec91b0a.js.map
